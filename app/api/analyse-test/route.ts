import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import Anthropic from '@anthropic-ai/sdk'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

const MIN_GRADE = 4
const MAX_GRADE = 12
const MAX_IMAGES_PER_ZONE = 10
const MAX_IMAGES_TOTAL = 20
const MONTHLY_LIMIT = 2

const client = new Anthropic()

// Grade is substituted into the final line before sending. Structure and
// wording are the spec's exactly — the only per-request variable is the grade.
function buildSystemPrompt(grade: number): string {
  return `You are an expert South African mathematics tutor analysing a student's test. The student has uploaded photos of their question paper and their written answer sheet. Your job is to identify exactly where the student went wrong and give a detailed, specific breakdown of their weaknesses and strengths.

Do not give vague feedback like 'algebra needs work'. Instead be specific: for example 'struggling with factorisation of trinomials where a ≠ 1' or 'correctly applies the theorem of Pythagoras but makes errors when the hypotenuse is not the subject of the formula'.

Structure your response as follows:

## What You Did Well
List specific skills, question types, or concepts the student handled correctly. Be specific and encouraging.

## Areas That Need Work
List specific topics, subtopics, or question types where errors occurred. For each one:
- Name the specific concept (not just the broad topic)
- Briefly explain the nature of the error pattern you observed
- Reference which question(s) showed this weakness

## Priority Focus Areas
List the top 3 things this student should study first, in order of priority, based on how many marks were lost and how fundamental the concept is.

## Recommended Mathly Topics
Based on the weaknesses identified, list the specific Mathly study guide topics this student should revisit. Reference them by their actual topic names as they appear in the CAPS curriculum.

Keep your tone warm, specific, and constructive. This is for a South African learner in Grade ${grade} — reference the CAPS curriculum where relevant.`
}

// Images arrive as data URLs (already resized/recompressed to JPEG
// client-side — see TestAnalysisPanel's compression step, which exists
// because up to 20 raw phone photos would blow past both the hosting
// platform's request-size limit and Claude's own per-request image limits).
// This just splits off the base64 payload Anthropic's SDK expects.
function toImageBlock(dataUrl: string): Anthropic.Messages.ImageBlockParam | null {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(dataUrl)
  if (!match) return null
  return {
    type: 'image',
    source: { type: 'base64', media_type: match[1] as 'image/jpeg' | 'image/png' | 'image/webp', data: match[2] },
  }
}

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as {
    idToken?: string
    grade?: number
    questionImages?: string[]
    answerImages?: string[]
    notes?: string
  } | null

  if (!body?.idToken) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[analyse-test] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(body.idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const { grade, questionImages, answerImages, notes } = body
  if (
    typeof grade !== 'number' || grade < MIN_GRADE || grade > MAX_GRADE ||
    !Array.isArray(questionImages) || questionImages.length < 1 || questionImages.length > MAX_IMAGES_PER_ZONE ||
    !Array.isArray(answerImages) || answerImages.length < 1 || answerImages.length > MAX_IMAGES_PER_ZONE ||
    questionImages.length + answerImages.length > MAX_IMAGES_TOTAL
  ) {
    return new Response('Bad request', { status: 400 })
  }
  if (typeof notes === 'string' && notes.length > 200) {
    return new Response('Bad request', { status: 400 })
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  // Same tier-resolution logic as getActiveTier() in app/providers.tsx,
  // reimplemented server-side — this route can't import client code.
  const childPlans: string[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const activeIdx = Math.min(Math.max(typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0, 0), Math.max(childPlans.length - 1, 0))
  const tier = childPlans[activeIdx] ?? 'free'
  // Same PAYMENTS_ENABLED clamp as getActiveTier() in app/providers.tsx — a
  // "successful" Paystack test-mode checkout must not unlock Max features
  // while payments are paused.
  if (!PAYMENTS_ENABLED || tier !== 'max') {
    return new Response('Test Analysis is a Max-tier feature', { status: 403 })
  }

  // Reserve a usage slot before calling Claude — a Firestore transaction so
  // two simultaneous submissions can't both slip through at count 1. Rolled
  // back (best-effort) below if the Anthropic call itself fails, so a
  // transient API error doesn't cost the student one of their two analyses.
  const month = currentMonthStamp()
  let reserved = false
  try {
    await adminDb.runTransaction(async tx => {
      const snap = await tx.get(userRef)
      const usage = snap.data()?.testAnalysisUsage as { count?: number; monthStamp?: string } | undefined
      const currentCount = usage?.monthStamp === month ? (usage.count ?? 0) : 0
      if (currentCount >= MONTHLY_LIMIT) {
        throw new Error('LIMIT_REACHED')
      }
      tx.update(userRef, { testAnalysisUsage: { count: currentCount + 1, monthStamp: month } })
    })
    reserved = true
  } catch (err) {
    if (err instanceof Error && err.message === 'LIMIT_REACHED') {
      return new Response("You've used both your test analyses for this month — they reset next month.", { status: 409 })
    }
    console.error('[analyse-test] usage transaction failed', err)
    return new Response('Something went wrong. Please try again.', { status: 500 })
  }

  try {
    const imageBlocks = [
      ...questionImages.map((src, i): [Anthropic.Messages.TextBlockParam, Anthropic.Messages.ImageBlockParam] | null => {
        const block = toImageBlock(src)
        return block ? [{ type: 'text', text: `Question Paper — Image ${i + 1}` }, block] : null
      }).filter((x): x is [Anthropic.Messages.TextBlockParam, Anthropic.Messages.ImageBlockParam] => x !== null).flat(),
      ...answerImages.map((src, i): [Anthropic.Messages.TextBlockParam, Anthropic.Messages.ImageBlockParam] | null => {
        const block = toImageBlock(src)
        return block ? [{ type: 'text', text: `Answer Sheet — Image ${i + 1}` }, block] : null
      }).filter((x): x is [Anthropic.Messages.TextBlockParam, Anthropic.Messages.ImageBlockParam] => x !== null).flat(),
    ]

    if (imageBlocks.length === 0) {
      throw new Error('NO_VALID_IMAGES')
    }

    const content: Anthropic.Messages.ContentBlockParam[] = [
      { type: 'text', text: `Here is my Grade ${grade} test — the question paper and my written answers.${notes ? ` Specific thing I'd like feedback on: ${notes}` : ''}` },
      ...imageBlocks,
    ]

    const response = await client.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 3000,
      system: buildSystemPrompt(grade),
      messages: [{ role: 'user', content }],
    })

    const report = response.content
      .filter((block): block is Anthropic.Messages.TextBlock => block.type === 'text')
      .map(block => block.text)
      .join('\n')

    if (!report.trim()) throw new Error('EMPTY_RESPONSE')

    return Response.json({ report })
  } catch (err) {
    console.error('[analyse-test] analysis failed', err)
    if (reserved) {
      await userRef.update({ 'testAnalysisUsage.count': FieldValue.increment(-1) }).catch(rollbackErr => {
        console.error('[analyse-test] usage rollback failed', rollbackErr)
      })
    }
    return new Response('Something went wrong. Please try again.', { status: 500 })
  }
}
