import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'

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

  await referredRef.update({ referredBy: referrerUid })
  await adminDb.collection('referrals').add({
    referrerUid,
    referredUid,
    referredName: referredData.name ?? '',
    hasSubscribed: false,
    createdAt: FieldValue.serverTimestamp(),
  })

  return new Response(null, { status: 200 })
}
