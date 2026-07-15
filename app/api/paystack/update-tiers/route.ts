import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, updatePlan, initializeTransaction } from '@/src/lib/paystack'
import { computeFamilyPrice, type Tier } from '@/src/lib/pricing'

const VALID_TIERS: Tier[] = ['free', 'pro', 'guided']

// Changes an already-subscribed family's tier mix (upgrades, downgrades, or a
// mix of both across children in one go). This is the path the pricing page
// must use once a family already has an active subscription: routing an
// already-subscribed family back through /api/paystack/checkout would create
// a second, duplicate Plan + Transaction and leave the original subscription
// still billing, double-charging any child who was already paid. Brand-new
// signups (no subscription yet) still go through checkout, which needs a
// real charge to capture card authorization.
//
// Two very different mechanisms depending on direction, because Paystack's
// Update Plan endpoint can only change what bills on the *next* cycle — it
// can never collect money today:
//   - Total going down (or staying the same): amend the Plan in place and
//     grant the new childPlans immediately. Revenue-safe — the family already
//     paid this cycle at the higher rate, so there's nothing to lose by
//     letting access drop early; the lower price simply applies next cycle
//     (no refund for the days already used, same as the per-child downgrade).
//   - Total going up: amending the Plan alone would grant the higher tier's
//     access immediately while only charging for it from next cycle onward —
//     a family could upgrade, use it, then downgrade again before that next
//     charge ever landed, getting it for free indefinitely. So this charges
//     the incremental difference as a one-time transaction right now and
//     defers *both* the Plan amendment and the childPlans update (access)
//     until the webhook confirms that payment succeeded.
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
  const email: string = userData.email ?? ''

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

  const { total: currentTotal } = computeFamilyPrice(currentChildPlans, userData.paystackFounding)
  const { total: newTotal } = computeFamilyPrice(childTiers, userData.paystackFounding)
  const config = getPaystackConfig()

  if (newTotal <= currentTotal) {
    const result = await updatePlan(config, { code: userData.paystackPlanCode, amountRands: newTotal })

    // Never touch Firestore unless Paystack actually confirmed the
    // amendment — same doctrine as downgrade-child and cancel-subscription.
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
    return Response.json({ ok: true, childPlans: childTiers, newTotal })
  }

  // Total is increasing — charge the difference now, one-time, before
  // granting anything. Stored as pendingChildPlans/pendingAmount (same
  // fields checkout uses for a brand-new signup) so the webhook can cross-
  // check the payment against exactly what was quoted here.
  const difference = newTotal - currentTotal
  await userRef.update({ pendingChildPlans: childTiers, pendingAmount: newTotal })

  const baseUrl = process.env.PAYSTACK_CALLBACK_BASE_URL ?? 'http://localhost:3000'
  const reference = `${uid}_${Date.now()}`
  const initResult = await initializeTransaction(config, {
    email,
    amountRands: difference,
    reference,
    callbackUrl: `${baseUrl}/pricing/success`,
    // No `plan` — this is a once-off charge, not a new subscription. The
    // family's one recurring Plan is amended separately by the webhook once
    // this payment is confirmed.
    metadata: { kind: 'upgrade', uid, childTiers },
  })
  if (!initResult.ok || !initResult.data?.authorization_url) {
    console.error('[paystack/update-tiers] transaction init failed', { uid, status: initResult.status, message: initResult.message })
    return new Response('Could not start checkout for this upgrade. Please try again.', { status: 502 })
  }

  return Response.json({ requiresPayment: true, authorization_url: initResult.data.authorization_url })
}
