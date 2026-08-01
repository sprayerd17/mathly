import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, initializeTransaction } from '@/src/lib/paystack'
import { EXAM_PREP_BAGS, EXAM_PREP_BAG_PRICE } from '@/src/lib/exam-prep'
import type { Tier } from '@/src/lib/pricing'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

// Starts a once-off Paystack payment for a single exam prep bag — same
// once-off-transaction shape as /api/sessions/book's pay_now path (see that
// route's comments), just without the reservation/capacity logic a live
// session needs. metadata.kind === 'exam_prep_purchase' is the marker the
// webhook branches on.
export async function POST(req: NextRequest) {
  const { idToken, bagId, childIndex } = await req.json().catch(() => ({})) as {
    idToken?: string
    bagId?: string
    childIndex?: unknown
  }
  if (!idToken || !bagId) return new Response('Bad request', { status: 400 })

  if (!PAYMENTS_ENABLED && getPaystackConfig().mode !== 'test') {
    return new Response('Payments are temporarily paused — check back soon', { status: 503 })
  }

  const bag = EXAM_PREP_BAGS.find(b => b.id === bagId)
  if (!bag || bag.comingSoon) return new Response('Bag not available', { status: 404 })

  let adminDb, adminAuth
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[exam-prep/checkout] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userSnap = await adminDb.doc(`users/${uid}`).get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  // childIndex comes from the client's own active-child selection, same
  // reasoning as sessions/book — a stale Firestore activeChildIndex could
  // wrongly clear/block someone on a different child's tier.
  const childPlans: Tier[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const fallbackIdx = typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0
  const idx = typeof childIndex === 'number' ? childIndex : fallbackIdx
  const tier: Tier = PAYMENTS_ENABLED ? (childPlans[idx] ?? 'free') : 'free'
  if (tier === 'max') {
    return new Response('Already included in your Max plan', { status: 409 })
  }

  const existing = await adminDb.collection('examPrepPurchases')
    .where('uid', '==', uid)
    .where('bagId', '==', bagId)
    .where('status', '==', 'paid')
    .limit(1)
    .get()
  if (!existing.empty) return new Response('Already purchased', { status: 409 })

  const purchaseRef = await adminDb.collection('examPrepPurchases').add({
    uid,
    bagId,
    amount: EXAM_PREP_BAG_PRICE,
    status: 'pending',
    name: userData.name ?? '',
    email: userData.email ?? '',
    createdAt: new Date().toISOString(),
  })

  const config = getPaystackConfig()
  const baseUrl = process.env.PAYSTACK_CALLBACK_BASE_URL ?? 'http://localhost:3000'

  const initResult = await initializeTransaction(config, {
    email: userData.email ?? '',
    amountRands: EXAM_PREP_BAG_PRICE,
    reference: purchaseRef.id,
    callbackUrl: `${baseUrl}/store?payment=return`,
    metadata: { kind: 'exam_prep_purchase', uid, purchaseId: purchaseRef.id, bagId, bagTitle: bag.title },
  })
  if (!initResult.ok || !initResult.data?.authorization_url) {
    console.error('[exam-prep/checkout] transaction init failed', { uid, purchaseId: purchaseRef.id, status: initResult.status, message: initResult.message })
    return new Response('Could not start payment. Please try again.', { status: 502 })
  }

  return Response.json({ authorization_url: initResult.data.authorization_url })
}
