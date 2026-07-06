import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature } from '@/src/lib/payfast'
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
    console.error('[payfast/checkout] Firebase Admin not configured', err)
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
  // the persistent spots counter (settings/founding, maintained by the ITN
  // webhook and the admin dashboard) so a client can't claim a founding price
  // once the spots are gone. Totals unset (doc missing / total <= 0) means
  // the window is open-ended — don't enforce.
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

  // pendingChildPlans/pendingAmount let the ITN handler verify the payload
  // against exactly what this user was quoted, without needing to re-derive
  // founding-vs-full status (which isn't knowable from the ITN payload
  // alone). pendingFounding records which tiers were quoted at founding
  // price so the ITN handler can consume founding spots only once payment
  // actually completes. subscriptionStatus moves to 'pending' so the profile
  // page can reflect "upgrade in progress" immediately, before ITN confirms.
  await adminDb.doc(`users/${uid}`).update({
    pendingChildPlans: childTiers,
    pendingFounding: wantsFounding,
    pendingAmount: amount,
    subscriptionStatus: 'pending',
  })

  const config = getPayfastConfig()
  const notifyBase = process.env.PAYFAST_NOTIFY_BASE_URL ?? 'http://localhost:3000'
  const mPaymentId = `${uid}_${Date.now()}`
  const amountStr = amount.toFixed(2)
  const itemName = childTiers.length === 1
    ? `Mathly ${childTiers[0]} - Monthly`
    : `Mathly Family (${childTiers.length} people) - Monthly`

  // Field order matters — PayFast's classic checkout/ITN signature concatenates
  // fields in the order given (not alphabetical, unlike their newer REST API).
  // This exact order becomes the form's input order on submit. custom_str1
  // carries the per-child tier selection as JSON so the ITN handler can cross-
  // check it against pendingChildPlans — comfortably within PayFast's classic
  // custom_strN field-length limits for up to 3 short tier names.
  const fields: Record<string, string> = {
    merchant_id: config.merchantId,
    merchant_key: config.merchantKey,
    return_url: `${notifyBase}/pricing/success`,
    cancel_url: `${notifyBase}/pricing/cancelled`,
    notify_url: `${notifyBase}/api/payfast/notify`,
    name_first: name,
    email_address: email,
    m_payment_id: mPaymentId,
    amount: amountStr,
    item_name: itemName,
    custom_str1: JSON.stringify(childTiers),
    custom_str2: uid,
    subscription_type: '1',
    recurring_amount: amountStr,
    frequency: '3',
    cycles: '0',
  }

  const signature = generateSignature(fields, config.passphrase)

  return Response.json({
    action: config.processUrl,
    fields: { ...fields, signature },
  })
}
