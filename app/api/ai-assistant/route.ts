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

// Single source of truth for the model IDs used by the tutor call and the
// verifier call below — reused (not re-typed) when stamping
// tutorModel/verifierModel onto stored training rows, so the stamp can
// never drift from what actually generated/judged the row.
const TUTOR_MODEL = 'claude-sonnet-5'
const VERIFIER_MODEL = 'claude-sonnet-5'

type ApiMessage = { role: 'user' | 'assistant'; content: string }
type Plan = 'free' | 'pro' | 'max'

// Token spend for a single Anthropic call — input/output plus cache-read
// (the only cache field the aiTrainingData schema keeps, see the usage
// comment at the write site below). null means "not obtained", e.g. the
// verifier call failed before returning a usage object, or a streaming
// event that should have carried a field never arrived — never a guess.
type CallUsage = { input: number | null; output: number | null; cacheRead: number | null }
const EMPTY_USAGE: CallUsage = { input: null, output: null, cacheRead: null }

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
// "Skim for plausibility" verdicts miss exactly the errors that matter most
// for training data — confirmed live: a factorisation with a single wrong
// digit ((x+3)(2x+3) instead of (x+3)(2x+1)) read as plausible enough to
// pass until the prompt was changed to require actually redoing the work.
const VERIFY_SYSTEM_PROMPT =
  'You are a strict South African CAPS-curriculum maths fact-checker. You will be given a ' +
  "student's grade, the full conversation so far, and the tutor's final answer to check. " +
  'Before judging, work through the answer yourself step by step — if it claims a factorisation, ' +
  'multiply it back out and check it equals the original expression; if it claims a numeric result, ' +
  'redo the calculation independently. Do not just skim for plausibility. ' +
  'Judge only whether that final answer is mathematically correct and appropriate for the grade, using ' +
  'the rest of the conversation as context for what it refers to (e.g. a "finish the example" ' +
  'follow-up only makes sense given what came before it) — ignore style or tone. ' +
  'After your working, on its own final line, reply with exactly one word: CORRECT or INCORRECT.'

// Bumped whenever VERIFY_SYSTEM_PROMPT changes in a way that could shift
// verdicts — it already has once (see the factorisation comment above) and
// will again. Stamped onto every stored training row as verifierVersion so
// that if a future prompt revision turns out to have been flawed, the rows
// it produced can be isolated and dropped instead of guessing which rows
// came from which prompt.
const VERIFIER_VERSION = 'ai-assistant-verify-v2-2026-08-03'

// Student:/Tutor: transcript, oldest first — same shape used for the stored
// training example itself, just flattened to plain text for this prompt.
function transcriptFor(context: ApiMessage[]): string {
  return context.map(m => `${m.role === 'user' ? 'Student' : 'Tutor'}: ${m.content}`).join('\n')
}

// Afrikaans/English function-word frequency heuristic, used below by
// detectLanguage. Both lists are common short function words (articles,
// pronouns, conjunctions, question words) that are highly distinctive
// between the two languages and appear regardless of the maths topic being
// discussed.
const AFRIKAANS_MARKERS = [
  'die', 'het', 'nie', 'ek', 'jy', 'wat', 'hoe', 'om', 'te', 'en', 'is', 'van', 'vir', 'my', 'jou',
  'hierdie', 'maar', 'ook', 'kan', 'moet', 'dan', 'sy', 'hulle', 'was', 'sal', 'nou', 'baie', 'goed',
  'waar', 'wanneer', 'hoekom', 'asseblief', 'antwoord', 'vraag', 'som', 'getal', 'breuk',
]
const ENGLISH_MARKERS = [
  'the', 'is', 'are', 'was', 'were', 'this', 'that', 'what', 'how', 'why', 'i', 'you', 'my', 'your',
  'and', 'or', 'of', 'for', 'to', 'in', 'on', 'with', 'can', 'do', 'does', 'did', 'not', 'please',
  'answer', 'question', 'number', 'fraction', 'help', 'need', 'understand',
]
// A verdict needs at least this many total hits before we trust it enough
// to label anything, and needs to beat the other language by at least this
// margin — a 3-vs-2 split is noise, not a signal.
const LANGUAGE_MIN_HITS = 2
const LANGUAGE_MIN_MARGIN = 2

function countMarkerHits(lowerText: string, markers: string[]): number {
  return markers.reduce((total, word) => {
    const matches = lowerText.match(new RegExp(`\\b${word}\\b`, 'g'))
    return total + (matches ? matches.length : 0)
  }, 0)
}

// Best-effort label for which language the STUDENT is actually writing in —
// deliberately not derived from the child's profile language preference,
// see the detectedLanguage comment at the call site below. Word-boundary
// matches on a lowercased string, cheap and synchronous (no API call), and
// bounded by MAX_CONTENT_LENGTH * MAX_MESSAGES worth of text at most, so a
// couple of regex passes over it is negligible.
//
// This is a label, not a guarantee: short or code-switched messages, or
// messages that happen to lean on words shared between languages, can
// legitimately fail to clear the threshold. 'unknown' is the deliberate
// fallback in that case — a wrong language tag silently corrupts a
// bilingual training set, while a missing one is just discarded by anyone
// who needs certainty.
function detectLanguage(text: string): 'en' | 'af' | 'unknown' {
  const lower = text.toLowerCase()
  const afHits = countMarkerHits(lower, AFRIKAANS_MARKERS)
  const enHits = countMarkerHits(lower, ENGLISH_MARKERS)
  if (afHits < LANGUAGE_MIN_HITS && enHits < LANGUAGE_MIN_HITS) return 'unknown'
  if (afHits - enHits >= LANGUAGE_MIN_MARGIN) return 'af'
  if (enHits - afHits >= LANGUAGE_MIN_MARGIN) return 'en'
  return 'unknown'
}

async function verifyAnswer(
  grade: string | null,
  context: ApiMessage[],
  answer: string,
): Promise<{ verified: boolean; reasoning: string | null; usage: CallUsage }> {
  try {
    const verdict = await client.messages.create({
      model: VERIFIER_MODEL,
      // Generous budget: Sonnet 5 spends some of this on an internal
      // thinking block even unrequested, and asking it to show its working
      // (redo the calculation, expand the factorisation back out) before
      // answering — needed for real accuracy, see the comment above — takes
      // real tokens too. Too low a budget here truncates mid-work with
      // stop_reason 'max_tokens' and no verdict at all.
      max_tokens: 1000,
      system: VERIFY_SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: `Grade: ${grade ?? 'unknown'}\n\nConversation so far:\n${transcriptFor(context)}\n\nTutor's final answer to check: ${answer}`,
      }],
    })
    const rawText = verdict.content.find(b => b.type === 'text')?.text ?? ''
    const text = rawText.toUpperCase()
    // Checked in this order because "INCORRECT" contains "CORRECT" as a
    // substring — a plain .includes('CORRECT') would misread every
    // INCORRECT verdict as correct.
    let verified: boolean
    if (text.includes('INCORRECT')) {
      verified = false
    } else {
      verified = text.includes('CORRECT')
    }
    // The verifier is prompted to show CAPS-style marking working (redo the
    // calculation, expand the factorisation back out) before its final
    // CORRECT/INCORRECT line — until now only the boolean verdict was kept
    // and that whole working was thrown away. It's a free chain-of-thought
    // corpus for a future marking/diagnosis task, so keep everything before
    // that final line.
    // trimEnd() before locating that line: a response ending in a trailing
    // newline would otherwise make lastIndexOf('\n') point PAST the verdict,
    // gluing the literal word CORRECT/INCORRECT onto the end of every stored
    // reasoning string and quietly poisoning the corpus with the label it's
    // supposed to be independent of.
    const trimmed = rawText.trimEnd()
    const lastNewline = trimmed.lastIndexOf('\n')
    const reasoning = lastNewline >= 0 ? (trimmed.slice(0, lastNewline).trim() || null) : null
    // Non-streaming call — the usage object is already sitting on the
    // response, unlike the tutor call below which has to accumulate it from
    // stream events. cache_read_input_tokens is nullable on the wire; the
    // others aren't, but everything funnels through the same nullable
    // CallUsage shape so callers don't need to special-case which field can
    // be missing.
    const usage: CallUsage = {
      input: verdict.usage.input_tokens,
      output: verdict.usage.output_tokens,
      cacheRead: verdict.usage.cache_read_input_tokens,
    }
    return { verified, reasoning, usage }
  } catch (err) {
    console.error('[ai-assistant] correctness check failed — skipping training-data storage', err)
    return { verified: false, reasoning: null, usage: EMPTY_USAGE }
  }
}

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// Day-granularity sibling of currentMonthStamp() — the doc key for the
// apiUsageDaily rollup (see the write site in the POST handler below).
function currentDayStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
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

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      let fullAnswer = ''
      // Streaming responses never carry a usage object on the initial
      // return value — unlike the verifier's non-streaming call, it only
      // arrives piecemeal inside the stream itself: message_start carries
      // the input/cache-read side (known before any output is generated),
      // and message_delta carries output_tokens, updated cumulatively as
      // generation proceeds, so the LAST message_delta holds the final
      // count. Both are captured here, in the same loop that already
      // consumes the stream for the student-facing text — no second API
      // call. Left null (not 0) if the corresponding event never arrives,
      // per the "wrong number is worse than missing" rule.
      let tutorInput: number | null = null
      let tutorOutput: number | null = null
      let tutorCacheRead: number | null = null
      // Verifier spend, hoisted so the daily rollup can see it — the verifier
      // only runs for text-only (trainable) exchanges, so these stay 0 on a
      // screen-capture request, which genuinely makes no verifier call. 0 here
      // means "no such call was made", distinct from the nulls above, which
      // mean "the call happened but the number wasn't obtained".
      let verifierInputSpent = 0
      let verifierOutputSpent = 0
      try {
        const response = await client.messages.create({
          model: TUTOR_MODEL,
          max_tokens: 700,
          system: systemPromptFor(grade),
          messages: anthropicMessages,
          stream: true,
        })

        for await (const event of response) {
          if (event.type === 'message_start') {
            tutorInput = event.message.usage.input_tokens
            tutorCacheRead = event.message.usage.cache_read_input_tokens
          } else if (event.type === 'message_delta') {
            tutorOutput = event.usage.output_tokens
          } else if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
            fullAnswer += event.delta.text
          }
        }

        // Training-data collection — text-only (a screen capture can't be
        // represented in this dataset, so those exchanges are skipped
        // entirely rather than stored with missing context). Runs after the
        // response has already reached the browser, so it never adds to how
        // long the student waits.
        //
        // Stores the FULL conversation up to and including the student's
        // latest message, not just that last message alone — a follow-up
        // like "you got cut off, finish the example" is meaningless as a
        // standalone training pair without the turns it refers to. The
        // stored answer completes that same context.
        if (!imageBlock) {
          // Everything in here is training-data collection, which must never
          // be able to affect the student. The .catch() on the write below
          // only covers a rejected Firestore promise — a SYNCHRONOUS throw
          // anywhere in this block would otherwise fall through to the outer
          // catch, which appends "Sorry, I ran into an error" to an answer
          // the student has already received in full AND rolls back a usage
          // slot they genuinely used. Own try/catch so the worst case stays
          // "we lost one training row".
          try {
            // userData.children[activeIdx].language (see Child.language in
            // app/providers.tsx) is a one-time-changeable PROFILE PREFERENCE,
            // not the language actually used in this exchange —
            // BASE_SYSTEM_PROMPT never mentions language and the tutor just
            // replies in whatever the student wrote, so a child whose profile
            // is set to 'af' asking a question in English would otherwise get
            // silently mislabelled 'af'. Store both: profileLanguage (the old
            // value, unchanged logic) for provenance, and detectedLanguage — a
            // best-effort read of the student's own messages — as the value
            // that actually describes this exchange.
            const profileLanguage = userData.children?.[activeIdx]?.language === 'af' ? 'af' : 'en'
            const detectedLanguage = detectLanguage(
              messages.filter(m => m.role === 'user').map(m => m.content).join('\n'),
            )
            const { verified, reasoning, usage: verifierUsage } = await verifyAnswer(grade, messages, fullAnswer)
            // Store BOTH verified and rejected exchanges, not just the
            // correct ones as before. A (prompt, correct answer, incorrect
            // answer) triple is exactly what preference tuning (DPO)
            // consumes, and both the generation and the verdict have already
            // been paid for by the call above — discarding every INCORRECT
            // verdict threw away a whole training modality for free.
            // Downstream consumers doing plain supervised fine-tuning must
            // filter on verified === true; DPO consumers want both sides.
            await adminDb.collection('aiTrainingData').add({
              context: messages,
              answer: fullAnswer,
              verified,
              // The verifier's step-by-step marking working — see the
              // comment in verifyAnswer. A free chain-of-thought corpus for
              // a future marking/diagnosis task, not just the pass/fail bit.
              verifierReasoning: reasoning,
              grade: grade ? Number(grade) : null,
              profileLanguage,
              detectedLanguage,
              // Provenance stamps: schemaVersion marks this row's field shape
              // so future migrations can tell old rows from new; verifierVersion/
              // verifierModel/tutorModel record exactly what generated and
              // judged this row, so a prompt or model revision later found to
              // be flawed can be isolated and dropped by these fields instead
              // of guessing which rows it touched.
              schemaVersion: 2,
              verifierVersion: VERIFIER_VERSION,
              verifierModel: VERIFIER_MODEL,
              tutorModel: TUTOR_MODEL,
              // Real (not estimated) token spend for both Anthropic calls
              // this row cost. Stored per row rather than only aggregated
              // because it's the only way to compute cost-per-training-
              // example directly, and because it lets a plan's real margin
              // be derived from actual traffic later instead of the modelled
              // estimates that are all we have today. null means the figure
              // was never obtained (see the comments at each usage source)
              // rather than that spend was zero.
              usage: {
                tutorInput,
                tutorOutput,
                verifierInput: verifierUsage.input,
                verifierOutput: verifierUsage.output,
                tutorCacheRead,
                verifierCacheRead: verifierUsage.cacheRead,
              },
              createdAt: FieldValue.serverTimestamp(),
            }).catch(err => {
              console.error('[ai-assistant] failed to store training example', err)
            })

            // Verifier spend is carried out to the rollup below, which runs
            // for EVERY request rather than only the trainable ones.
            verifierInputSpent = verifierUsage.input ?? 0
            verifierOutputSpent = verifierUsage.output ?? 0
          } catch (trainingErr) {
            console.error('[ai-assistant] training-data collection failed', trainingErr)
          }
        }

        // Lightweight daily rollup so aggregate cost can be read without
        // scanning every aiTrainingData row. apiUsageDaily is server-only
        // (see its firestore.rules entry); merge:true so the first write of
        // a day creates the doc rather than requiring it to pre-exist.
        //
        // Deliberately OUTSIDE the !imageBlock guard above. Screen-capture
        // exchanges are excluded from training data (an image can't be
        // represented in that dataset) but they are still real, billed
        // Anthropic calls — and the MOST expensive ones we make, since a
        // 1800px capture adds a few thousand image tokens on top of the
        // text. Metering them under the same guard would have silently
        // omitted our priciest requests and understated cost per plan by
        // exactly the amount that matters most. captureRequests is tracked
        // separately so image spend can be isolated from text spend.
        //
        // Its own try/catch for the same reason as the block above: a failed
        // metering write must never reach the student.
        try {
          await adminDb.doc(`apiUsageDaily/${currentDayStamp()}`).set({
            aiAssistantRequests: FieldValue.increment(1),
            aiAssistantCaptureRequests: FieldValue.increment(imageBlock ? 1 : 0),
            aiAssistantInputTokens: FieldValue.increment((tutorInput ?? 0) + verifierInputSpent),
            aiAssistantOutputTokens: FieldValue.increment((tutorOutput ?? 0) + verifierOutputSpent),
          }, { merge: true })
        } catch (meteringErr) {
          console.error('[ai-assistant] failed to update daily usage rollup', meteringErr)
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
