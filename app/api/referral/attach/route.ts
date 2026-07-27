import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'
import { sendOwnerAlert } from '@/src/lib/email'

// Attaches a referral, once, right after the referred friend registers.
// referredBy is server-only (see firestore.rules) precisely so this is the
// only place it can ever be set — a client can't fake who referred them.
export async function POST(req: NextRequest) {
  const { idToken, refCode } = await req.json() as {
    idToken?: string
    refCode?: string
  }

  if (!idToken || !refCode) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[referral/attach] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let referredUid: string
  try {
    const decoded = await adminAuth.verifyIdToken(idToken)
    referredUid = decoded.uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const referredRef = adminDb.doc(`users/${referredUid}`)
  const referredSnap = await referredRef.get()
  if (!referredSnap.exists) {
    return new Response('User not found', { status: 404 })
  }
  const referredData = referredSnap.data()!

  // One-time attach — a retried request should never overwrite an existing
  // referredBy or create a second referral record for the same signup.
  if (referredData.referredBy) {
    return new Response(null, { status: 200 })
  }

  const referrerQuery = await adminDb
    .collection('users')
    .where('refCode', '==', refCode)
    .limit(1)
    .get()

  if (referrerQuery.empty) {
    console.error('[referral/attach] no user found for refCode', { refCode })
    return new Response(null, { status: 200 })
  }

  const referrerDoc = referrerQuery.docs[0]
  const referrerUid = referrerDoc.id

  // Can't refer yourself (e.g. opening your own link while logged out, then
  // registering a second account with the same browser).
  if (referrerUid === referredUid) {
    return new Response(null, { status: 200 })
  }

  // One batch — setting referredBy without the matching referrals record (or
  // vice versa) would silently break crediting later, since creditReferrer()
  // requires both (see src/lib/paystack-webhook.ts).
  const referralRef = adminDb.collection('referrals').doc()
  const batch = adminDb.batch()
  batch.update(referredRef, { referredBy: referrerUid })
  batch.set(referralRef, {
    referrerUid,
    referredUid,
    referredName: referredData.name ?? '',
    hasSubscribed: false,
    createdAt: FieldValue.serverTimestamp(),
  })
  try {
    await batch.commit()
  } catch (err) {
    // Non-2xx so the client keeps its pending ref code around and retries
    // (see tryAttachPendingReferral in app/providers.tsx) instead of
    // silently losing the referral — this is real money for the referrer.
    console.error('[referral/attach] batch commit failed', { referrerUid, referredUid, err })
    await sendOwnerAlert(
      `Mathly: referral attach failed (uid ${referredUid})`,
      `<p>Referrer ${referrerUid} → referred ${referredUid}: the Firestore write failed
       (${err instanceof Error ? err.message : 'unknown error'}). The client will retry
       automatically on next login — flagging in case it keeps failing.</p>`,
    ).catch(() => {})
    return new Response('Server error', { status: 500 })
  }

  return new Response(null, { status: 200 })
}
