import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import Anthropic from '@anthropic-ai/sdk'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

const client = new Anthropic()

const BASE_SYSTEM_PROMPT =
  'You are a friendly maths tutor assistant on Mathly, a South African maths education website. ' +
  'You help students from Grade 4 to Grade 12 understand maths concepts. ' +
  'Always explain things clearly and simply. Use examples where helpful. ' +
  'Keep responses concise and encouraging. ' +
  'If a student shares selected text from a study guide, explain it in simpler terms or give an additional example. ' +
  'Never use LaTeX or dollar-sign math delimiters (no $, $$, \\frac{}{}, \\tan^{-1}, etc.) — the chat window ' +
  'displays plain text and cannot render them, so they would show up as broken raw code. Write all maths in ' +
  'plain readable text instead: fractions as "a/b" (e.g. 6/8), exponents as x^2 or spelled out, inverse trig as ' +
  'tan⁻¹, sin⁻¹, cos⁻¹ (the ⁻¹ superscript character), roots as √ (e.g. √16), and degrees with °. ' +
  '**Bold**, numbered steps, and bullet lists are fine to use.'

function systemPromptFor(grade: string | null): string {
  if (!grade) return BASE_SYSTEM_PROMPT
  return `${BASE_SYSTEM_PROMPT} The student you're helping right now is in Grade ${grade} — pitch explanations and examples at that level.`
}

type ApiMessage = { role: 'user' | 'assistant'; content: string }
type Plan = 'free' | 'pro' | 'max'

// Same monthly allowances as PLAN_LIMITS in app/components/AIAssistant.tsx —
// the client copy is optimistic UI only, this is the source of truth.
const PLAN_LIMITS: Record<Plan, number> = { free: 5, pro: 20, max: 50 }
// Same monthly allowances as CAPTURE_LIMITS in app/components/AIAssistant.tsx.
// Free matches the advertised pricing-page copy ("2 screen captures per
// month"); pro/max are chosen proportionally to their question limits — both
// are adjustable product decisions, not derived from anything external.
const CAPTURE_LIMITS: Record<Plan, number> = { free: 2, pro: 5, max: 15 }
// Mirrored client-side as MAX_HISTORY_MESSAGES in AIAssistant.tsx, which
// trims the conversation it sends to this many messages before every
// request — without that, a conversation that grows past this cap would
// get flatly rejected below instead of just losing its oldest turns.
const MAX_MESSAGES = 16
// Mirrored client-side as MAX_MESSAGE_LENGTH (a textarea maxLength), so a
// student can't type past this in the first place.
const MAX_CONTENT_LENGTH = 2000
// Data-URL string length cap for an attached screen capture — the client
// downscales to a 1800px-longest-edge JPEG before sending, so a well-behaved
// client never gets close to this; it's a backstop against a tampered request.
const MAX_IMAGE_DATA_URL_LENGTH = 2_000_000

// Training-data collection for our own future model — see aiTrainingData in
// firestore.rules. Kept deliberately separate from the tutoring call itself:
// wrong verdicts here only cost us a bad/missed training example, never the
// student's actual answer, so it's fine for this to run after the response
// has already been sent to the browser.
const VERIFY_SYSTEM_PROMPT =
  'You are a strict South African CAPS-curriculum maths fact-checker. You will be given a ' +
  "student's grade, their question, and a tutor's answer. Judge only whether the answer is " +
  'mathematically correct and appropriate for that grade — ignore style or tone. ' +
  'Reply with exactly one word, nothing else: CORRECT or INCORRECT.'

async function isAnswerCorrect(grade: string | null, question: string, answer: string): Promise<boolean> {
  try {
    const verdict = await client.messages.create({
      model: 'claude-sonnet-5',
      // Sonnet 5 emits an internal thinking block before the actual answer
      // even when it's not explicitly requested, and that eats into
      // max_tokens too — too low a budget here truncates mid-thought with
      // stop_reason 'max_tokens' and zero actual text (confirmed live: with
      // max_tokens 10 a genuinely wrong answer came back as empty text,
      // which the caller would have treated as an unverifiable no-op rather
      // than the INCORRECT verdict it should have been).
      max_tokens: 200,
      system: VERIFY_SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: `Grade: ${grade ?? 'unknown'}\nQuestion: ${question}\nAnswer: ${answer}`,
      }],
    })
    const text = verdict.content.find(b => b.type === 'text')?.text ?? ''
    return text.trim().toUpperCase().startsWith('CORRECT')
  } catch (err) {
    console.error('[ai-assistant] correctness check failed — skipping training-data storage', err)
    return false
  }
}

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function isValidMessages(value: unknown): value is ApiMessage[] {
  if (!Array.isArray(value) || value.length < 1 || value.length > MAX_MESSAGES) return false
  return value.every(m => {
    const msg = m as Partial<ApiMessage>
    return (msg.role === 'user' || msg.role === 'assistant')
      && typeof msg.content === 'string'
      && msg.content.trim().length > 0
      && msg.content.length <= MAX_CONTENT_LENGTH
  })
}

// Same pattern as toImageBlock in app/api/analyse-test/route.ts.
function toImageBlock(dataUrl: string): Anthropic.Messages.ImageBlockParam | null {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(dataUrl)
  if (!match) return null
  return {
    type: 'image',
    source: { type: 'base64', media_type: match[1] as 'image/jpeg' | 'image/png' | 'image/webp', data: match[2] },
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as { idToken?: string; messages?: unknown; image?: unknown; grade?: unknown; childIndex?: unknown } | null

  if (!body?.idToken) return new Response('Bad request', { status: 400 })

  // Purely descriptive context for the system prompt — not used for any
  // access-control decision, so a malformed/missing value just falls back
  // to the ungraded prompt rather than rejecting the request.
  const grade = typeof body.grade === 'string' && /^(4|5|6|7|8|9|10|11|12)$/.test(body.grade) ? body.grade : null

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[ai-assistant] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(body.idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  if (!isValidMessages(body.messages)) {
    return new Response('Bad request', { status: 400 })
  }
  const messages = body.messages

  // Optional screen capture attached to this message — a single data-URL
  // string, same validation as analyse-test's images plus a length cap since
  // there's no separate multipart upload here.
  let imageBlock: Anthropic.Messages.ImageBlockParam | null = null
  if (body.image !== undefined) {
    if (typeof body.image !== 'string' || body.image.length > MAX_IMAGE_DATA_URL_LENGTH) {
      return new Response('Bad request', { status: 400 })
    }
    imageBlock = toImageBlock(body.image)
    if (!imageBlock) return new Response('Bad request', { status: 400 })
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  // Same tier-resolution logic as getActiveTier() in app/providers.tsx,
  // reimplemented server-side — this route can't import client code. Unlike
  // analyse-test, every tier is allowed here — they just get different
  // monthly limits below.
  //
  // childIndex comes from the client's own (per-device) active-child
  // selection rather than the account's Firestore activeChildIndex field —
  // that field is only a first-load default now (see the comment on
  // readLocalActiveChild in app/providers.tsx), not a live cross-device
  // value, so trusting it here could apply the wrong sibling's tier/limit
  // to this request. Falls back to the Firestore field for any client build
  // that hasn't picked up the childIndex param yet.
  const childPlans: string[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const fallbackIdx = typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0
  const requestedIdx = typeof body.childIndex === 'number' ? body.childIndex : fallbackIdx
  const activeIdx = Math.min(Math.max(requestedIdx, 0), Math.max(childPlans.length - 1, 0))
  const rawTier = childPlans[activeIdx]
  // Same PAYMENTS_ENABLED clamp as getActiveTier() in app/providers.tsx — a
  // "successful" Paystack test-mode checkout must not unlock a higher
  // monthly limit while payments are paused.
  const tier: Plan = PAYMENTS_ENABLED && (rawTier === 'pro' || rawTier === 'max') ? rawTier : 'free'
  const limit = PLAN_LIMITS[tier]
  const captureLimit = CAPTURE_LIMITS[tier]

  // Reserve a usage slot before calling Claude — a Firestore transaction so
  // two simultaneous questions can't both slip through at the same count.
  // When an image is attached, the capture slot is checked and reserved in
  // the SAME transaction as the query slot, so a request that would exceed
  // either limit reserves neither. Both are rolled back (best-effort) below
  // if the Anthropic call itself fails, so a transient API error doesn't
  // cost the student one of their monthly questions or captures.
  const month = currentMonthStamp()
  let reservedQuery = false
  let reservedCapture = false
  try {
    await adminDb.runTransaction(async tx => {
      const snap = await tx.get(userRef)
      const usage = snap.data()?.aiUsage as { count?: number; captures?: number; monthStamp?: string } | undefined
      const sameMonth = usage?.monthStamp === month
      const currentCount = sameMonth ? (usage?.count ?? 0) : 0
      const currentCaptures = sameMonth ? (usage?.captures ?? 0) : 0
      if (currentCount >= limit) {
        throw new Error('LIMIT_REACHED')
      }
      if (imageBlock && currentCaptures >= captureLimit) {
        throw new Error('CAPTURE_LIMIT_REACHED')
      }
      const nextCaptures = imageBlock ? currentCaptures + 1 : currentCaptures
      tx.update(userRef, { aiUsage: { count: currentCount + 1, captures: nextCaptures, monthStamp: month } })
    })
    reservedQuery = true
    reservedCapture = imageBlock !== null
  } catch (err) {
    if (err instanceof Error && err.message === 'LIMIT_REACHED') {
      return new Response(`You've used all ${limit} of your AI questions for this month — they reset next month.`, { status: 429 })
    }
    if (err instanceof Error && err.message === 'CAPTURE_LIMIT_REACHED') {
      return new Response(`You've used all ${captureLimit} of your screen captures for this month — they reset next month.`, { status: 429 })
    }
    console.error('[ai-assistant] usage transaction failed', err)
    return new Response('Something went wrong. Please try again.', { status: 500 })
  }

  // Attach the image to the LAST user message as an Anthropic image content
  // block (text block + image block, same shape analyse-test builds).
  let lastUserIdx = -1
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === 'user') { lastUserIdx = i; break }
  }
  const anthropicMessages: Anthropic.Messages.MessageParam[] = messages.map((m, i) => {
    if (imageBlock && i === lastUserIdx) {
      return { role: m.role, content: [{ type: 'text', text: m.content }, imageBlock] }
    }
    return { role: m.role, content: m.content }
  })

  // For training-data storage below — the question this exchange was
  // actually about. Only the latest turn: a follow-up like "explain more"
  // wouldn't make sense as a standalone training example anyway.
  const question = messages[lastUserIdx]?.content ?? ''

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      let fullAnswer = ''
      try {
        const response = await client.messages.create({
          model: 'claude-sonnet-5',
          max_tokens: 700,
          system: systemPromptFor(grade),
          messages: anthropicMessages,
          stream: true,
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
            fullAnswer += event.delta.text
          }
        }

        // Training-data collection — text-only (a screen capture can't be
        // represented in this dataset, so those exchanges are skipped
        // entirely rather than stored with missing context) and only kept
        // once Claude itself has checked the answer is actually correct.
        // Runs after the response has already reached the browser, so it
        // never adds to how long the student waits.
        if (!imageBlock && question) {
          const language = userData.children?.[activeIdx]?.language === 'af' ? 'af' : 'en'
          const correct = await isAnswerCorrect(grade, question, fullAnswer)
          if (correct) {
            await adminDb.collection('aiTrainingData').add({
              question,
              answer: fullAnswer,
              grade: grade ? Number(grade) : null,
              language,
              createdAt: FieldValue.serverTimestamp(),
            }).catch(err => {
              console.error('[ai-assistant] failed to store training example', err)
            })
          }
        }
      } catch (err) {
        console.error('[ai-assistant] Anthropic call failed', err)
        if (reservedQuery) {
          const rollback: Record<string, FieldValue> = { 'aiUsage.count': FieldValue.increment(-1) }
          if (reservedCapture) rollback['aiUsage.captures'] = FieldValue.increment(-1)
          await userRef.update(rollback).catch(rollbackErr => {
            console.error('[ai-assistant] usage rollback failed', rollbackErr)
          })
        }
        controller.enqueue(encoder.encode('Sorry, I ran into an error. Please try again.'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
