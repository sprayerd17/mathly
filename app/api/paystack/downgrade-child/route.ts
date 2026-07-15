import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, updatePlan } from '@/src/lib/paystack'
import { computeFamilyPrice, type Tier } from '@/src/lib/pricing'

// Moves one child in a family plan to Free without touching the rest of the
// family or the subscription itself — Paystack's Update Plan endpoint
// amends the family's existing Plan to the new (lower) total, which takes
// effect next billing cycle (no proration/refund for the current one,
// confirmed acceptable with the user). Mirrors cancel-subscription's
// defensive doctrine: never touch Firestore until Paystack has actually
// confirmed the change.
export async function POST(req: NextRequest) {
  const { idToken, childIndex } = await req.json().catch(() => ({})) as {
    idToken?: string
    childIndex?: number
  }
  if (!idToken || typeof childIndex !== 'number' || !Number.isInteger(childIndex)) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/downgrade-child] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  const userData = userSnap.data()!

  if (userData.subscriptionStatus !== 'active' && userData.subscriptionStatus !== 'past_due') {
    return new Response('No active subscription to modify', { status: 409 })
  }

  const childPlans = Array.isArray(userData.childPlans) ? (userData.childPlans as Tier[]) : []
  if (childIndex < 0 || childIndex >= childPlans.length) {
    return new Response('Bad request', { status: 400 })
  }
  if (childPlans[childIndex] === 'free') {
    return new Response('This child is already on the Free plan', { status: 409 })
  }
  const paidCount = childPlans.filter(t => t !== 'free').length
  if (paidCount <= 1) {
    return new Response(
      "This is your family's only paid child — cancel your subscription instead of downgrading it",
      { status: 409 },
    )
  }
  if (typeof userData.paystackPlanCode !== 'string' || !userData.paystackPlanCode) {
    console.error('[paystack/downgrade-child] active subscription with no plan code on file', { uid })
    return new Response('No billing plan on file for this account — contact support', { status: 409 })
  }
  if (!userData.paystackFounding || typeof userData.paystackFounding !== 'object') {
    console.error('[paystack/downgrade-child] active subscription with no founding status on file', { uid })
    return new Response('Founding status not on file for this account — contact support', { status: 409 })
  }

  const newChildPlans = [...childPlans]
  newChildPlans[childIndex] = 'free'
  const { total: newAmount } = computeFamilyPrice(newChildPlans, userData.paystackFounding)

  const config = getPaystackConfig()
  const result = await updatePlan(config, { code: userData.paystackPlanCode, amountRands: newAmount })

  // Never touch Firestore unless Paystack actually confirmed the amendment —
  // same reasoning as cancel-subscription: the worst failure mode is
  // telling a user their bill dropped when Paystack is still billing the
  // old amount.
  if (!result.ok) {
    console.error('[paystack/downgrade-child] Paystack rejected plan update', {
      uid, childIndex, status: result.status, message: result.message,
    })
    return new Response(
      `Paystack could not process this change (status ${result.status}: ${result.message ?? 'unknown error'}) — please try again or contact support`,
      { status: 502 },
    )
  }

  await userRef.update({ childPlans: newChildPlans })

  return Response.json({ ok: true, childPlans: newChildPlans, newTotal: newAmount })
}
