import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import Anthropic from '@anthropic-ai/sdk'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

const client = new Anthropic()

const SYSTEM_PROMPT =
  'You are a friendly maths tutor assistant on Mathly, a South African maths education website. ' +
  'You help students from Grade 4 to Grade 12 understand maths concepts. ' +
  'Always explain things clearly and simply. Use examples where helpful. ' +
  'Keep responses concise and encouraging. ' +
  'If a student shares selected text from a study guide, explain it in simpler terms or give an additional example.'

type ApiMessage = { role: 'user' | 'assistant'; content: string }
type Plan = 'free' | 'pro' | 'max'

// Same monthly allowances as PLAN_LIMITS in app/components/AIAssistant.tsx —
// the client copy is optimistic UI only, this is the source of truth.
const PLAN_LIMITS: Record<Plan, number> = { free: 5, pro: 20, max: 100 }
const MAX_MESSAGES = 30
const MAX_CONTENT_LENGTH = 4000

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

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as { idToken?: string; messages?: unknown } | null

  if (!body?.idToken) return new Response('Bad request', { status: 400 })

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

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  // Same tier-resolution logic as getActiveTier() in app/providers.tsx,
  // reimplemented server-side — this route can't import client code. Unlike
  // analyse-test, every tier is allowed here — they just get different
  // monthly limits below.
  const childPlans: string[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const activeIdx = Math.min(Math.max(typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0, 0), Math.max(childPlans.length - 1, 0))
  const rawTier = childPlans[activeIdx]
  // Same PAYMENTS_ENABLED clamp as getActiveTier() in app/providers.tsx — a
  // "successful" Paystack test-mode checkout must not unlock a higher
  // monthly limit while payments are paused.
  const tier: Plan = PAYMENTS_ENABLED && (rawTier === 'pro' || rawTier === 'max') ? rawTier : 'free'
  const limit = PLAN_LIMITS[tier]

  // Reserve a usage slot before calling Claude — a Firestore transaction so
  // two simultaneous questions can't both slip through at the same count.
  // Rolled back (best-effort) below if the Anthropic call itself fails, so a
  // transient API error doesn't cost the student one of their monthly questions.
  const month = currentMonthStamp()
  let reserved = false
  try {
    await adminDb.runTransaction(async tx => {
      const snap = await tx.get(userRef)
      const usage = snap.data()?.aiUsage as { count?: number; monthStamp?: string } | undefined
      const currentCount = usage?.monthStamp === month ? (usage.count ?? 0) : 0
      if (currentCount >= limit) {
        throw new Error('LIMIT_REACHED')
      }
      tx.update(userRef, { aiUsage: { count: currentCount + 1, monthStamp: month } })
    })
    reserved = true
  } catch (err) {
    if (err instanceof Error && err.message === 'LIMIT_REACHED') {
      return new Response(`You've used all ${limit} of your AI questions for this month — they reset next month.`, { status: 429 })
    }
    console.error('[ai-assistant] usage transaction failed', err)
    return new Response('Something went wrong. Please try again.', { status: 500 })
  }

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      try {
        const response = await client.messages.create({
          model: 'claude-sonnet-5',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages,
          stream: true,
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
      } catch (err) {
        console.error('[ai-assistant] Anthropic call failed', err)
        if (reserved) {
          await userRef.update({ 'aiUsage.count': FieldValue.increment(-1) }).catch(rollbackErr => {
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
