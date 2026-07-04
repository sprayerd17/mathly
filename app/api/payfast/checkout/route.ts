import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature } from '@/src/lib/payfast'
import { priceForPackage, type PackageValue } from '@/src/lib/pricing'

const VALID_TARGETS: PackageValue[] = [
  'pro', 'guided', 'family_pro_2', 'family_pro_3', 'family_guided_2', 'family_guided_3',
]

export async function POST(req: NextRequest) {
  const { idToken, targetPackage, isFounding } = await req.json() as {
    idToken?: string
    targetPackage?: PackageValue
    isFounding?: boolean
  }

  if (!idToken || !targetPackage || !VALID_TARGETS.includes(targetPackage)) {
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

  // Never trust a client-supplied amount — look it up server-side. `isFounding`
  // is trusted only insofar as it selects one of exactly two known prices per
  // plan (the real founding-spot counter is client-only today; closing that is
  // a separate, later piece of work).
  const amount = priceForPackage(targetPackage, Boolean(isFounding))

  // pendingAmount lets the ITN handler verify amount_gross against the exact
  // rate this user was quoted, without needing to re-derive founding-vs-full
  // status (which isn't knowable from the ITN payload alone). subscriptionStatus
  // moves to 'pending' so the profile page can reflect "upgrade in progress"
  // immediately, before ITN confirms.
  await adminDb.doc(`users/${uid}`).update({
    pendingPackage: targetPackage,
    pendingAmount: amount,
    subscriptionStatus: 'pending',
  })

  const config = getPayfastConfig()
  const notifyBase = process.env.PAYFAST_NOTIFY_BASE_URL ?? 'http://localhost:3000'
  const mPaymentId = `${uid}_${Date.now()}`
  const amountStr = amount.toFixed(2)

  // Field order matters — PayFast's classic checkout/ITN signature concatenates
  // fields in the order given (not alphabetical, unlike their newer REST API).
  // This exact order becomes the form's input order on submit.
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
    item_name: `Mathly ${targetPackage} - Monthly`,
    custom_str1: targetPackage,
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
