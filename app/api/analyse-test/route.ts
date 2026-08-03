import { NextRequest } from 'next/server'
import { FieldValue, type Firestore } from 'firebase-admin/firestore'
import Anthropic from '@anthropic-ai/sdk'
import { createHmac } from 'crypto'
import { getAdminAuth, getAdminDb, getAdminStorage } from '@/src/lib/firebase-admin'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'
import { getTopics } from '@/src/data/topic-registry'

const MIN_GRADE = 4
const MAX_GRADE = 12
const MAX_IMAGES_PER_ZONE = 10
const MAX_IMAGES_TOTAL = 20
const MONTHLY_LIMIT = 2

// submissionId is client-generated and gets interpolated straight into a
// Storage path (see loadImageBlocks/deleteSubmissionImages below) — treat it
// as hostile input. This charset can't produce '..' or '/', so there's no
// path-traversal surface, and it's a valid Firestore document ID too (also
// used directly as the testAnalysisSubmissions doc ID — see finalizeImageRetention).
const SUBMISSION_ID_RE = /^[A-Za-z0-9_-]{16,64}$/

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

Keep your tone warm, specific, and constructive. This is for a South African learner in Grade ${grade} — reference the CAPS curriculum where relevant.

Never use LaTeX or dollar-sign math delimiters (no $, $$, \\frac{}{}, \\tan^{-1}, etc.) — the report is displayed as plain text and cannot render them, so they would show up as broken raw code. Write all maths in plain readable text instead: fractions as "a/b" (e.g. 6/8), exponents as x^2 or spelled out, inverse trig as tan⁻¹, sin⁻¹, cos⁻¹ (the ⁻¹ superscript character), roots as √ (e.g. √16), and degrees with °. **Bold**, numbered steps, and bullet lists are fine to use.`
}

// ─── Images (Firebase Storage) ──────────────────────────────────────────
//
// The client now uploads photos straight to Firebase Storage and this route
// only ever receives a submissionId + per-zone counts — not base64 data
// URLs. That's what let the client drop its aggressive pre-upload
// recompression (inline data URLs were capped by the host's request-size
// limit), which was hurting OCR accuracy on the report. This section
// downloads exactly the files the client claims it uploaded and rebuilds
// the same Anthropic image blocks the old data-URL path produced.

// Rebuilds the Question Paper / Answer Sheet image blocks for one zone by
// downloading each expected file from Storage. Deliberately fails loudly
// (propagates) rather than skipping a missing file — a partial image set
// must not silently produce a confidently-wrong analysis; the caller turns
// any failure here into the existing NO_VALID_IMAGES path.
async function loadImageBlocks(
  uid: string,
  submissionId: string,
  kind: 'q' | 'a',
  count: number,
  label: string
): Promise<Anthropic.Messages.ContentBlockParam[]> {
  const bucket = getAdminStorage().bucket()
  const blocks: Anthropic.Messages.ContentBlockParam[] = []
  for (let i = 0; i < count; i++) {
    const path = `testAnalysis/${uid}/${submissionId}/${kind}-${i}.jpg`
    const [buffer] = await bucket.file(path).download()
    blocks.push({ type: 'text', text: `${label} — Image ${i + 1}` })
    blocks.push({
      type: 'image',
      source: { type: 'base64', media_type: 'image/jpeg', data: buffer.toString('base64') },
    })
  }
  return blocks
}

// Best-effort delete of every file this submission could have uploaded.
// Each file is deleted independently with ignoreNotFound so one
// already-missing object can't stop the rest, and every failure is caught
// individually — this must never throw, since it runs from a `finally` on
// both the success and failure path of the analysis.
async function deleteSubmissionImages(
  uid: string,
  submissionId: string,
  questionCount: number,
  answerCount: number
): Promise<void> {
  const bucket = getAdminStorage().bucket()
  const paths = [
    ...Array.from({ length: questionCount }, (_, i) => `testAnalysis/${uid}/${submissionId}/q-${i}.jpg`),
    ...Array.from({ length: answerCount }, (_, i) => `testAnalysis/${uid}/${submissionId}/a-${i}.jpg`),
  ]
  await Promise.all(paths.map(async path => {
    try {
      await bucket.file(path).delete({ ignoreNotFound: true })
    } catch (err) {
      console.error(`[analyse-test] failed to delete ${path}`, err)
    }
  }))
}

// Consent-gated retention. The default is deletion — these are photographs
// of a child's handwriting and a school exam paper, and the privacy
// policy's default promise is that they're deleted once the analysis is
// done. Retention only happens on explicit parental opt-in (retainImages
// === true on the request, already fail-closed to false for any
// non-boolean value in POST below). Runs on both the success and failure
// path via a `finally` in POST, so a failed analysis never leaves orphaned
// photos sitting in Storage. Never throws — a Storage or Firestore hiccup
// here must not turn a successful analysis into an error response.
async function finalizeImageRetention(
  adminDb: Firestore,
  uid: string,
  submissionId: string,
  questionCount: number,
  answerCount: number,
  retain: boolean
): Promise<void> {
  try {
    const submissionRef = adminDb.collection('testAnalysisSubmissions').doc(submissionId)
    if (retain) {
      await submissionRef.set(
        { imagesRetained: true, imageStoragePath: `testAnalysis/${uid}/${submissionId}` },
        { merge: true }
      )
    } else {
      await deleteSubmissionImages(uid, submissionId, questionCount, answerCount)
      await submissionRef.set(
        { imagesRetained: false, imageStoragePath: null },
        { merge: true }
      )
    }
  } catch (err) {
    console.error('[analyse-test] image retention finalize failed', err)
  }
}

function currentMonthStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

// Same shape as currentMonthStamp, one level finer — keys the daily API
// usage rollup (see the token-metering block in POST below).
function currentDayStamp(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// ─── Training-data extraction (second, separate call) ─────────────────────
//
// Deliberately its own call rather than folded into the report prompt above
// — the report students actually read is already working and shouldn't risk
// regressing just to also emit structured JSON. This one re-reads the same
// photos and only has to produce the structured breakdown, storing nothing
// but text (see the "images or no images" call from earlier — no images are
// kept, only what gets extracted from them).

// The extraction prompt below will get revised repeatedly as we see what
// real submissions look like over months of collection. Without a version
// stamp on every stored row, there'd be no way to later isolate the rows
// produced by a prompt version that turns out to be flawed (e.g. a bad
// errorCategory instruction) — you'd have to throw out the whole dataset
// instead of just the affected slice. Bump this whenever EXTRACT_SYSTEM_PROMPT
// or the schema shape changes in a way that affects what gets stored.
const EXTRACTOR_VERSION = 'analyse-test-extract-v2-2026-08-03'

type StructuredQuestion = {
  questionNumber: string
  topic: string
  // topicSlug pins the topic to this grade's actual CAPS registry (see
  // buildExtractSchema) — 'topic' above is free text kept alongside it
  // because a real test question can cover something off-registry or span
  // two topics, and because how often the model reaches for 'other' is
  // itself a useful signal that the registry is missing something.
  topicSlug: string
  // The full question text as printed on the paper, transcribed verbatim.
  // This is the single most important new field: without it, a stored
  // student answer and mistake have no input to train against — just an
  // answer with no question. The photos are discarded after extraction, so
  // if this isn't captured now it can never be backfilled later.
  questionText: string
  marks: number
  // Marks the student actually earned, as distinct from `marks` (marks
  // available). Read off the marker's own annotation when visible;
  // otherwise inferred from whether the answer is correct.
  marksAwarded: number
  studentAnswer: string
  mistake: string
  // Free text (`mistake`) can't be aggregated into "most common mistakes by
  // SA learners" or used as a training target — this enum classification
  // can be. Kept alongside the free text rather than replacing it.
  errorCategory: string
  correctAnswer: string
  uncertain: boolean
  uncertaintyReason: string
}

type StructuredBreakdown = {
  questions: StructuredQuestion[]
  identifiedWeaknesses: string[]
  recommendedIntervention: string
  generatedPracticeAdvice: string
  // Language the QUESTION PAPER itself is written in, as observed by the
  // model — distinct from the child's profile-configured language (a UI
  // preference that may not match what the school actually issued).
  paperLanguage: string
}

// Both Anthropic calls in this file are non-streaming, so usage is read
// straight off the returned message rather than accumulated from stream
// events. input/output are always numbers from the API; cacheRead can be
// null (no cache read this call). Left null on any call that never
// completed (e.g. extraction throwing before a response came back) rather
// than defaulting to 0, so a stored null unambiguously means "we don't
// know" instead of masquerading as "zero tokens."
type TokenUsage = { input: number | null; output: number | null; cacheRead: number | null }

const EXTRACT_SYSTEM_PROMPT = `You are extracting a structured, question-by-question breakdown from a South African CAPS Grade student's maths test — the question paper and their written answer sheet, both photographed.

For every question on the paper (including sub-parts like 2a, 2b), record: the question number, the specific CAPS topic it tests (both as free text "topic" and as the closest matching "topicSlug" from the allowed list — use "other" only when nothing in the list genuinely fits), the exact question text as printed on the paper (transcribed verbatim, word for word — do not paraphrase, summarise, or clean it up), the marks it's worth, exactly what the student wrote as their answer (transcribed, not paraphrased), the specific mistake they made (write "None" if fully correct, and in that case set "errorCategory" to "none"), a classification of that mistake into "errorCategory", the marks the student actually earned (read the marker's own tick/cross/mark allocation where visible; otherwise infer from whether the answer is correct — use 0 if there's no attempt), and the correct answer.

Transcribing "questionText" accurately matters enormously — it is the only record of what was actually asked, and once this analysis finishes the photos themselves are discarded, so anything missed here can never be recovered.

Reading photographed handwriting is genuinely hard — do not guess or fill in gaps. If you cannot confidently read the student's handwriting, cannot tell which question a mark belongs to, or are unsure of the marks/topic for any reason, set that question's "uncertain" to true and briefly say why in "uncertaintyReason" (e.g. "handwriting illegible past the first line", "can't confirm marks allocated to this question"). Only set "uncertain" to false when you are actually confident.

Also provide: identifiedWeaknesses (the specific, concrete gaps you found — not vague topics), recommendedIntervention (what this student should focus on first and why), generatedPracticeAdvice (concrete next steps — e.g. which kinds of problems to practise), and paperLanguage (the language the question paper itself is printed in).`

// Built per request rather than a module-level const so topicSlug's enum can
// be constrained to exactly the slugs that are real for this grade — topic
// slugs are NOT stable across grades (e.g. area is 'perimeter-area' in
// Grade 4 but 'area-perimeter' in Grade 9), so a single hardcoded enum
// would either be wrong for most grades or accept slugs that don't exist
// for the grade in question. Constraining at the schema layer makes an
// invalid topicSlug impossible to emit, rather than merely discouraged by
// the prompt.
function buildExtractSchema(grade: number) {
  const topicSlugs = [...getTopics(String(grade)).map(t => t.slug), 'other']
  return {
    type: 'json_schema' as const,
    schema: {
      type: 'object',
      additionalProperties: false,
      properties: {
        questions: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              questionNumber: { type: 'string' },
              topic: { type: 'string' },
              topicSlug: { type: 'string', enum: topicSlugs },
              questionText: { type: 'string' },
              marks: { type: 'number' },
              marksAwarded: { type: 'number' },
              studentAnswer: { type: 'string' },
              mistake: { type: 'string' },
              errorCategory: {
                type: 'string',
                enum: ['conceptual', 'procedural', 'arithmetic', 'misread', 'notation', 'incomplete', 'no-attempt', 'none', 'other'],
              },
              correctAnswer: { type: 'string' },
              uncertain: { type: 'boolean' },
              uncertaintyReason: { type: 'string' },
            },
            required: [
              'questionNumber', 'topic', 'topicSlug', 'questionText', 'marks', 'marksAwarded',
              'studentAnswer', 'mistake', 'errorCategory', 'correctAnswer', 'uncertain', 'uncertaintyReason',
            ],
          },
        },
        identifiedWeaknesses: { type: 'array', items: { type: 'string' } },
        recommendedIntervention: { type: 'string' },
        generatedPracticeAdvice: { type: 'string' },
        paperLanguage: { type: 'string', enum: ['en', 'af'] },
      },
      required: ['questions', 'identifiedWeaknesses', 'recommendedIntervention', 'generatedPracticeAdvice', 'paperLanguage'],
    },
  }
}

async function extractStructuredBreakdown(
  grade: number,
  content: Anthropic.Messages.ContentBlockParam[]
): Promise<{ breakdown: StructuredBreakdown | null; usage: TokenUsage }> {
  const usage: TokenUsage = { input: null, output: null, cacheRead: null }
  try {
    // Plain create() rather than parse() — parse()'s auto-decoding only
    // kicks in for formats built via a schema-library helper (e.g.
    // zodOutputFormat, which embeds its own .parse()); a raw JSON-schema
    // object like buildExtractSchema() returns still constrains Claude's
    // output correctly, it just doesn't get auto-decoded, so the JSON.parse
    // below is manual.
    const message = await client.messages.create({
      model: 'claude-sonnet-5',
      // 4000 was enough before questionText existed; verbatim-transcribing
      // every question on top of everything else already extracted pushes
      // output length up substantially, and a truncated response parses as
      // invalid JSON (returns null below), silently losing the whole
      // submission rather than just the new fields.
      // Set high deliberately: max_tokens is a ceiling, not a reservation —
      // you're billed for what's actually generated — while truncation costs
      // the ENTIRE submission (invalid JSON parses to null below, and the
      // photos are gone by then). A 40-part paper transcribed verbatim can
      // run long, so the cap is set well clear of the realistic worst case
      // rather than snugly above the typical one.
      max_tokens: 16000,
      system: `${EXTRACT_SYSTEM_PROMPT}\n\nThis student is in Grade ${grade}.`,
      messages: [{ role: 'user', content }],
      output_config: { format: buildExtractSchema(grade) },
    })
    usage.input = message.usage.input_tokens
    usage.output = message.usage.output_tokens
    usage.cacheRead = message.usage.cache_read_input_tokens
    const text = message.content.find((b): b is Anthropic.Messages.TextBlock => b.type === 'text')?.text
    if (!text) return { breakdown: null, usage }
    return { breakdown: JSON.parse(text) as StructuredBreakdown, usage }
  } catch (err) {
    console.error('[analyse-test] structured extraction failed — skipping training-data storage', err)
    return { breakdown: null, usage }
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as {
    idToken?: string
    grade?: number
    submissionId?: string
    questionCount?: number
    answerCount?: number
    notes?: string
    childIndex?: unknown
    retainImages?: unknown
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

  const { grade, submissionId, questionCount, answerCount, notes, retainImages } = body
  if (
    typeof grade !== 'number' || grade < MIN_GRADE || grade > MAX_GRADE ||
    typeof submissionId !== 'string' || !SUBMISSION_ID_RE.test(submissionId) ||
    typeof questionCount !== 'number' || !Number.isInteger(questionCount) || questionCount < 1 || questionCount > MAX_IMAGES_PER_ZONE ||
    typeof answerCount !== 'number' || !Number.isInteger(answerCount) || answerCount < 1 || answerCount > MAX_IMAGES_PER_ZONE ||
    questionCount + answerCount > MAX_IMAGES_TOTAL
  ) {
    return new Response('Bad request', { status: 400 })
  }
  if (typeof notes === 'string' && notes.length > 200) {
    return new Response('Bad request', { status: 400 })
  }
  // Fail closed: anything other than a literal boolean true is treated as
  // "no consent" — see finalizeImageRetention.
  const retain = retainImages === true

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  // Same tier-resolution logic as getActiveTier() in app/providers.tsx,
  // reimplemented server-side — this route can't import client code.
  //
  // childIndex comes from the client's own (per-device) active-child
  // selection rather than the account's Firestore activeChildIndex field —
  // see the matching comment in app/api/ai-assistant/route.ts. Falls back
  // to the Firestore field for any client build that predates this param.
  const childPlans: string[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const fallbackIdx = typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0
  const requestedIdx = typeof body.childIndex === 'number' ? body.childIndex : fallbackIdx
  const activeIdx = Math.min(Math.max(requestedIdx, 0), Math.max(childPlans.length - 1, 0))
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
    let imageBlocks: Anthropic.Messages.ContentBlockParam[]
    try {
      const questionBlocks = await loadImageBlocks(uid, submissionId, 'q', questionCount, 'Question Paper')
      const answerBlocks = await loadImageBlocks(uid, submissionId, 'a', answerCount, 'Answer Sheet')
      imageBlocks = [...questionBlocks, ...answerBlocks]
    } catch (err) {
      // Missing file or a download error — never proceed with fewer images
      // than the client claimed to upload, since that would silently
      // produce a confidently-wrong analysis. Same failure path as an
      // empty/unparseable image set always used.
      console.error('[analyse-test] failed to download submission images', err)
      throw new Error('NO_VALID_IMAGES')
    }

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

    const reportUsage: TokenUsage = {
      input: response.usage.input_tokens,
      output: response.usage.output_tokens,
      cacheRead: response.usage.cache_read_input_tokens,
    }

    const report = response.content
      .filter((block): block is Anthropic.Messages.TextBlock => block.type === 'text')
      .map(block => block.text)
      .join('\n')

    if (!report.trim()) throw new Error('EMPTY_RESPONSE')

    // Training-data collection and token metering — see extractStructuredBreakdown
    // above. Runs after the report is already finalized; any failure here is
    // swallowed so it can never turn a successful analysis into an error
    // response or cost the student their monthly usage slot.
    try {
      const { breakdown, usage: extractUsage } = await extractStructuredBreakdown(grade, content)
      const usage = {
        reportInput: reportUsage.input,
        reportOutput: reportUsage.output,
        extractInput: extractUsage.input,
        extractOutput: extractUsage.output,
        reportCacheRead: reportUsage.cacheRead,
        extractCacheRead: extractUsage.cacheRead,
      }
      // Keyed by submissionId (not an auto-generated ID) so the client's
      // handle — returned as `submissionId` in the response below — maps
      // directly onto this document, letting a later correction submission
      // find it without a lookup index.
      const submissionRef = adminDb.collection('testAnalysisSubmissions').doc(submissionId)

      if (breakdown) {
        // Pseudonymous, NOT anonymous: this is deliberately a stable
        // per-learner reference (the same uid always hashes to the same
        // value), so submissions from the same student can be grouped to
        // show progression over time — far more valuable for training than
        // isolated snapshots — and so duplicate submissions can be spotted.
        // No name, email, or uid is ever stored on these documents; only
        // this salted hash. If the salt isn't configured yet this degrades
        // to null — training-data collection must never be able to throw.
        const learnerRef = process.env.TRAINING_DATA_SALT
          ? createHmac('sha256', process.env.TRAINING_DATA_SALT).update(uid).digest('hex').slice(0, 32)
          : null

        const child = userData.children?.[activeIdx]
        // The submitted `grade` is a fresh dropdown choice made per
        // submission and is unvalidated self-report; storing the child's
        // registered profile grade alongside it lets a mismatch be
        // detected later instead of silently mislabelling training data.
        const profileGrade = typeof child?.grade === 'number' ? child.grade : null
        // Same 'af' | 'en' resolution as app/api/ai-assistant/route.ts.
        const profileLanguage = child?.language === 'af' ? 'af' : 'en'

        // topicSlug is grade-scoped and schema-enforced (see
        // buildExtractSchema), so this union is safe to use directly for
        // filtering/aggregation. 'other' is excluded — it's a "didn't
        // match the registry" marker, not a real topic to group by.
        const topicSlugs = [...new Set(
          breakdown.questions.map(q => q.topicSlug).filter(slug => slug !== 'other')
        )]

        // Summed server-side from the extracted questions rather than
        // asked of the model directly — one less thing for it to
        // hallucinate, and it keeps the totals consistent with the
        // per-question figures already in the schema. Guarded so a single
        // malformed field (negative, NaN, Infinity) can't corrupt the sum.
        const positiveFinite = (n: unknown) => (typeof n === 'number' && Number.isFinite(n) && n >= 0 ? n : 0)
        const totalMarksAvailable = breakdown.questions.reduce((sum, q) => sum + positiveFinite(q.marks), 0)
        const totalMarksAwarded = breakdown.questions.reduce((sum, q) => sum + positiveFinite(q.marksAwarded), 0)

        await submissionRef.set({
          grade,
          curriculum: 'CAPS',
          subject: 'Mathematics',
          identifiedWeaknesses: breakdown.identifiedWeaknesses,
          recommendedIntervention: breakdown.recommendedIntervention,
          generatedPracticeAdvice: breakdown.generatedPracticeAdvice,
          createdAt: FieldValue.serverTimestamp(),
          // Lets future tooling isolate exactly which prompt+schema version
          // produced a given row — see EXTRACTOR_VERSION's comment above.
          schemaVersion: 2,
          extractorVersion: EXTRACTOR_VERSION,
          extractorModel: 'claude-sonnet-5',
          profileGrade,
          profileLanguage,
          // Both kept because they answer different questions: profileLanguage
          // is a UI preference the parent picked once, paperLanguage is what
          // the school actually printed on this specific paper — they can
          // legitimately disagree.
          paperLanguage: breakdown.paperLanguage,
          imageCount: questionCount + answerCount,
          // The student's own statement of what they think they struggle
          // with — already seen by the extractor as context, but otherwise
          // discarded. Worth keeping as a self-perceived-vs-actual signal.
          // Normalised to string-or-null rather than passed through raw: the
          // validation above only rejects a `notes` that IS a string and is
          // too long, so a client sending a number or boolean would slip
          // through and write a non-string into this field. Mixed types in
          // one column are a genuine nuisance in a training corpus.
          studentFocusNote: typeof notes === 'string' && notes.trim() ? notes.trim() : null,
          topicSlugs,
          totalMarksAvailable,
          totalMarksAwarded,
          // Placeholders for a future human-review/feedback pass, so that
          // tooling has somewhere to write a verdict and exports can filter
          // on it without a migration once that tooling actually exists.
          reviewStatus: 'unreviewed',
          learnerConfirmed: null,
          learnerRef,
          usage,
        })
        const batch = adminDb.batch()
        for (const q of breakdown.questions) {
          batch.set(submissionRef.collection('questions').doc(), { ...q, reviewStatus: 'unreviewed' })
        }
        await batch.commit()
      } else {
        // Extraction failed (or the model's output didn't parse) — still
        // record what the call cost, merged onto whatever document ends up
        // existing for this submissionId, without the training fields that
        // depend on a successfully parsed breakdown.
        await submissionRef.set({ usage }, { merge: true })
      }

      // Daily API-cost rollup, independent of whether training data was
      // storable — this tracks actual tokens spent, not extraction success.
      const dayStamp = currentDayStamp()
      await adminDb.doc(`apiUsageDaily/${dayStamp}`).set({
        testAnalysisRequests: FieldValue.increment(1),
        testAnalysisInputTokens: FieldValue.increment((reportUsage.input ?? 0) + (extractUsage.input ?? 0)),
        testAnalysisOutputTokens: FieldValue.increment((reportUsage.output ?? 0) + (extractUsage.output ?? 0)),
      }, { merge: true })
    } catch (err) {
      console.error('[analyse-test] failed to store training data', err)
    }

    return Response.json({ report, submissionId })
  } catch (err) {
    console.error('[analyse-test] analysis failed', err)
    if (reserved) {
      await userRef.update({ 'testAnalysisUsage.count': FieldValue.increment(-1) }).catch(rollbackErr => {
        console.error('[analyse-test] usage rollback failed', rollbackErr)
      })
    }
    return new Response('Something went wrong. Please try again.', { status: 500 })
  } finally {
    // Deletion (or, on consent, retention bookkeeping) for every image this
    // submission could have uploaded — runs whether the analysis above
    // succeeded or failed. Never throws, so it can't override either
    // branch's return above.
    await finalizeImageRetention(adminDb, uid, submissionId, questionCount, answerCount, retain)
  }
}
