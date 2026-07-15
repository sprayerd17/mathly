import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, updatePlan } from '@/src/lib/paystack'
import { computeFamilyPrice, type Tier } from '@/src/lib/pricing'

const VALID_TIERS: Tier[] = ['free', 'pro', 'guided']

// Amends an already-subscribed family's tier mix (upgrades, downgrades, or a
// mix of both across children in one go) by amending the existing Paystack
// Plan in place, the same mechanism downgrade-child uses — no new
// checkout/authorization needed since Paystack charges the stored card on
// the next billing cycle regardless. This is the path the pricing page must
// use once a family already has an active subscription: routing an
// already-subscribed family back through /api/paystack/checkout would create
// a second, duplicate Plan + Transaction and leave the original subscription
// still billing, double-charging any child who was already paid. Brand-new
// signups (no subscription yet) still go through checkout, which needs a
// real charge to capture card authorization.
export async function POST(req: NextRequest) {
  const { idToken, childTiers } = await req.json().catch(() => ({})) as {
    idToken?: string
    childTiers?: Tier[]
  }

  if (
    !idToken ||
    !Array.isArray(childTiers) ||
    childTiers.length === 0 ||
    !childTiers.every(t => VALID_TIERS.includes(t))
  ) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/update-tiers] Firebase Admin not configured', err)
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

  if (!Array.isArray(userData.children) || userData.children.length !== childTiers.length) {
    return new Response('Bad request', { status: 400 })
  }

  if (userData.subscriptionStatus !== 'active' && userData.subscriptionStatus !== 'past_due') {
    return new Response('No active subscription to modify — use checkout instead', { status: 409 })
  }
  if (typeof userData.paystackPlanCode !== 'string' || !userData.paystackPlanCode) {
    console.error('[paystack/update-tiers] active subscription with no plan code on file', { uid })
    return new Response('No billing plan on file for this account — contact support', { status: 409 })
  }
  if (!userData.paystackFounding || typeof userData.paystackFounding !== 'object') {
    console.error('[paystack/update-tiers] active subscription with no founding status on file', { uid })
    return new Response('Founding status not on file for this account — contact support', { status: 409 })
  }

  const currentChildPlans = Array.isArray(userData.childPlans) ? (userData.childPlans as Tier[]) : []
  const unchanged = currentChildPlans.length === childTiers.length
    && currentChildPlans.every((t, i) => t === childTiers[i])
  if (unchanged) {
    return new Response('No changes to apply', { status: 400 })
  }
  if (!childTiers.some(t => t !== 'free')) {
    return new Response('Cancel your subscription instead of moving everyone to Free', { status: 409 })
  }

  const { total: newAmount } = computeFamilyPrice(childTiers, userData.paystackFounding)

  const config = getPaystackConfig()
  const result = await updatePlan(config, { code: userData.paystackPlanCode, amountRands: newAmount })

  // Never touch Firestore unless Paystack actually confirmed the amendment —
  // same doctrine as downgrade-child and cancel-subscription.
  if (!result.ok) {
    console.error('[paystack/update-tiers] Paystack rejected plan update', {
      uid, status: result.status, message: result.message,
    })
    return new Response(
      `Paystack could not process this change (status ${result.status}: ${result.message ?? 'unknown error'}) — please try again or contact support`,
      { status: 502 },
    )
  }

  await userRef.update({ childPlans: childTiers })

  return Response.json({ ok: true, childPlans: childTiers, newTotal: newAmount })
}
