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
// Same monthly allowances as CAPTURE_LIMITS in app/components/AIAssistant.tsx.
// Free matches the advertised pricing-page copy ("2 screen captures per
// month"); pro/max are chosen proportionally to their question limits — both
// are adjustable product decisions, not derived from anything external.
const CAPTURE_LIMITS: Record<Plan, number> = { free: 2, pro: 10, max: 30 }
const MAX_MESSAGES = 30
const MAX_CONTENT_LENGTH = 4000
// Data-URL string length cap for an attached screen capture — the client
// downscales to a 1400px-longest-edge JPEG before sending, so a well-behaved
// client never gets close to this; it's a backstop against a tampered request.
const MAX_IMAGE_DATA_URL_LENGTH = 2_000_000

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
  const body = await req.json().catch(() => null) as { idToken?: string; messages?: unknown; image?: unknown } | null

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
  const childPlans: string[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const activeIdx = Math.min(Math.max(typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0, 0), Math.max(childPlans.length - 1, 0))
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

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      try {
        const response = await client.messages.create({
          model: 'claude-sonnet-5',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: anthropicMessages,
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
