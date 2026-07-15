import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, createPlan, initializeTransaction } from '@/src/lib/paystack'
import { computeFamilyPrice, type Tier } from '@/src/lib/pricing'

const VALID_TIERS: Tier[] = ['free', 'pro', 'guided']

export async function POST(req: NextRequest) {
  const { idToken, childTiers, founding } = await req.json() as {
    idToken?: string
    childTiers?: Tier[]
    founding?: { pro?: boolean; guided?: boolean }
  }

  if (
    !idToken ||
    !Array.isArray(childTiers) ||
    childTiers.length === 0 ||
    !childTiers.every(t => VALID_TIERS.includes(t)) ||
    !childTiers.some(t => t !== 'free')
  ) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/checkout] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    const decoded = await adminAuth.verifyIdToken(idToken)
    uid = decoded.uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userSnap = await adminDb.doc(`users/${uid}`).get()
  if (!userSnap.exists) {
    return new Response('User not found', { status: 404 })
  }
  const userData = userSnap.data()!
  const email: string = userData.email ?? ''
  const name: string = userData.name ?? ''

  if (!Array.isArray(userData.children) || userData.children.length !== childTiers.length) {
    return new Response('Bad request', { status: 400 })
  }

  // Never trust a client-supplied amount — compute it server-side. `founding`
  // selects one of exactly two known prices per tier, and is checked against
  // the persistent spots counter (settings/founding, maintained by the
  // webhook and the admin dashboard) so a client can't claim a founding
  // price once the spots are gone. Totals unset (doc missing / total <= 0)
  // means the window is open-ended — don't enforce.
  const wantsFounding = { pro: Boolean(founding?.pro), guided: Boolean(founding?.guided) }
  if (wantsFounding.pro || wantsFounding.guided) {
    const foundingSnap = await adminDb.doc('settings/founding').get()
    const f = foundingSnap.exists ? foundingSnap.data()! : {}
    for (const plan of ['pro', 'guided'] as const) {
      const total = typeof f[`${plan}Total`] === 'number' ? f[`${plan}Total`] : 0
      const used = typeof f[`${plan}Used`] === 'number' ? f[`${plan}Used`] : 0
      if (wantsFounding[plan] && total > 0 && used >= total) {
        return new Response('Founding spots sold out', { status: 409 })
      }
    }
  }

  const { total: amount } = computeFamilyPrice(childTiers, wantsFounding)

  // pendingChildPlans/pendingAmount let the webhook handler verify the
  // payload against exactly what this user was quoted, without needing to
  // re-derive founding-vs-full status (which isn't knowable from the webhook
  // payload alone). pendingFounding records which tiers were quoted at
  // founding price so the webhook handler can consume founding spots only
  // once payment actually completes. subscriptionStatus moves to 'pending'
  // so the profile page can reflect "upgrade in progress" immediately,
  // before the webhook confirms.
  await adminDb.doc(`users/${uid}`).update({
    pendingChildPlans: childTiers,
    pendingFounding: wantsFounding,
    pendingAmount: amount,
    subscriptionStatus: 'pending',
  })

  const config = getPaystackConfig()
  const baseUrl = process.env.PAYSTACK_CALLBACK_BASE_URL ?? 'http://localhost:3000'
  const reference = `${uid}_${Date.now()}`
  const planName = childTiers.length === 1
    ? `Mathly ${childTiers[0]} - Monthly`
    : `Mathly Family (${childTiers.length} people) - Monthly`

  const planResult = await createPlan(config, { name: planName, amountRands: amount })
  if (!planResult.ok || !planResult.data?.plan_code) {
    console.error('[paystack/checkout] plan creation failed', { uid, status: planResult.status, message: planResult.message })
    return new Response('Could not start checkout. Please try again.', { status: 502 })
  }

  // Persist the Plan code the moment it exists — this is the only place it's
  // ever created, and it must survive to webhook time (and beyond, for
  // future amendments like a per-child downgrade) rather than staying
  // transient like it does today. A separate write from the pending-fields
  // update above, since that one intentionally runs before createPlan() so
  // the profile page can show "upgrade in progress" without waiting on
  // Paystack.
  await adminDb.doc(`users/${uid}`).update({ pendingPlanCode: planResult.data.plan_code })

  const initResult = await initializeTransaction(config, {
    email,
    amountRands: amount,
    reference,
    callbackUrl: `${baseUrl}/pricing/success`,
    plan: planResult.data.plan_code,
    metadata: { kind: 'signup', uid, name, childTiers },
  })
  if (!initResult.ok || !initResult.data?.authorization_url) {
    console.error('[paystack/checkout] transaction init failed', { uid, status: initResult.status, message: initResult.message })
    return new Response('Could not start checkout. Please try again.', { status: 502 })
  }

  return Response.json({ authorization_url: initResult.data.authorization_url })
}
