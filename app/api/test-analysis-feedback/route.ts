import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'

// Same shape as a Firestore auto-id (20 URL-safe base62 chars) but a little
// more permissive on length so this route isn't brittle if the id scheme
// backing submissionId ever changes shape slightly.
const SUBMISSION_ID_RE = /^[A-Za-z0-9_-]{16,64}$/
const MAX_NOTE_LENGTH = 500

// Learner-submitted verdict on the AI's analysis of their test — see the
// PURPOSE note below. Human-verified labels are far more valuable for model
// training than unreviewed AI output, so this route records that verdict
// against the stored training row.
//
// PRIVACY: testAnalysisSubmissions documents deliberately carry no uid, no
// name, no email, no account identifier (see the matching comment in
// app/api/analyse-test/route.ts, where those docs are created). This route
// must preserve that. It authenticates the caller and verifies the caller
// actually owns the submission being corrected, but that account linkage
// exists only transiently in this request — it is never written onto the
// training row. Only the correction itself (verdict, note, timestamp) lands
// there.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null) as {
    idToken?: string
    submissionId?: unknown
    verdict?: unknown
    note?: unknown
  } | null

  if (!body?.idToken) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[test-analysis-feedback] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(body.idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  // Fail closed on unexpected types rather than coercing — a client sending
  // a number, array, or object for any of these fields is rejected outright
  // rather than silently stringified into something that happens to pass
  // the checks below.
  const { submissionId, verdict, note } = body
  if (typeof submissionId !== 'string' || !SUBMISSION_ID_RE.test(submissionId)) {
    return new Response('Bad request', { status: 400 })
  }
  if (verdict !== 'confirmed' && verdict !== 'disputed') {
    return new Response('Bad request', { status: 400 })
  }
  if (note !== undefined && typeof note !== 'string') {
    return new Response('Bad request', { status: 400 })
  }
  const trimmedNote = typeof note === 'string' ? note.trim() : ''
  if (trimmedNote.length > MAX_NOTE_LENGTH) {
    return new Response('Bad request', { status: 400 })
  }
  // Empty and absent both collapse to null so the stored field has one
  // unambiguous "no note" representation rather than two.
  const learnerNote = trimmedNote.length > 0 ? trimmedNote : null

  // Ownership check: the caller must own a saved report carrying this
  // submissionId. testAnalysisSubmissions rows carry no uid at all (see the
  // PRIVACY note above), so this is the ONLY way to confirm the caller
  // actually produced this analysis rather than guessing another learner's
  // submissionId. Empty result and "exists but isn't yours" are made to
  // look identical to the caller (same 403 either way) — this endpoint must
  // never leak whether a given submissionId exists.
  const ownershipSnap = await adminDb
    .collection(`users/${uid}/testAnalysisReports`)
    .where('submissionId', '==', submissionId)
    .limit(1)
    .get()
  if (ownershipSnap.empty) {
    return new Response('Forbidden', { status: 403 })
  }

  // The training row is keyed BY submissionId — analyse-test writes it with
  // `.doc(submissionId).set(...)` rather than `.add()` precisely so this
  // lookup is a direct get instead of a query. No index needed, and no
  // submissionId field is duplicated inside the document.
  const submissionRef = adminDb.collection('testAnalysisSubmissions').doc(submissionId)

  try {
    const snap = await submissionRef.get()
    // Same 403 as a failed ownership check, deliberately. A caller who owns a
    // saved report whose training row was never written (extraction failed)
    // learns nothing new, and a caller probing for ids can't distinguish
    // "doesn't exist" from "not yours".
    if (!snap.exists) {
      return new Response('Forbidden', { status: 403 })
    }

    // Idempotent: a double-tap, a retried request, or a client that fires on
    // both click and keypress must not overwrite an existing verdict. First
    // verdict wins — a learner who genuinely changes their mind is a case for
    // human review, not a silent rewrite of training data.
    if (snap.get('learnerFeedbackAt')) {
      return Response.json({ ok: true })
    }

    // Only the correction lands here — no uid, no report id. learnerConfirmed
    // and reviewStatus already exist on these documents as nulls/placeholders
    // (see analyse-test/route.ts); this fills them in.
    await submissionRef.update({
      learnerConfirmed: verdict === 'confirmed',
      learnerNote,
      reviewStatus: verdict === 'confirmed' ? 'learner-confirmed' : 'learner-disputed',
      learnerFeedbackAt: FieldValue.serverTimestamp(),
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[test-analysis-feedback] failed to record learner verdict', err)
    return new Response('Something went wrong. Please try again.', { status: 500 })
  }
}
