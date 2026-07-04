import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature, verifySourceIp } from '@/src/lib/payfast'
import type { PackageValue } from '@/src/lib/pricing'

const OK = () => new Response(null, { status: 200 })

// PayFast expects 200 regardless of outcome — a non-200 triggers retries, which
// is only useful for genuine delivery failures, not for "this ITN is invalid and
// we're intentionally ignoring it". Every rejection below returns 200 and simply
// skips the Firestore write; console.error gives us something to grep in logs.
export async function POST(req: NextRequest) {
  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[payfast/notify] Firebase Admin not configured', err)
    return OK()
  }

  const rawBody = await req.text()
  const params = new URLSearchParams(rawBody)
  // Object.fromEntries over URLSearchParams preserves the order fields were
  // received in — required for the signature check, which (unlike PayFast's
  // newer REST API) is NOT alphabetically sorted.
  const fields = Object.fromEntries(params.entries())

  const config = getPayfastConfig()

  // 1. Signature check.
  const expectedSignature = generateSignature(fields, config.passphrase)
  if (!fields.signature || fields.signature !== expectedSignature) {
    console.error('[payfast/notify] signature mismatch', { uid: fields.custom_str2 })
    return OK()
  }

  // 2. Source IP check.
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? ''
  const ipValid = await verifySourceIp(ip)
  if (!ipValid) {
    console.error('[payfast/notify] source IP did not resolve to PayFast', { ip })
    return OK()
  }

  // 3. Server-to-server validate call — confirms PayFast actually sent this,
  // not just that the signature/passphrase were guessable.
  try {
    const validateRes = await fetch(config.validateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: rawBody,
    })
    const validateText = (await validateRes.text()).trim()
    if (validateText !== 'VALID') {
      console.error('[payfast/notify] validate call did not return VALID', { validateText })
      return OK()
    }
  } catch (err) {
    console.error('[payfast/notify] validate call failed', err)
    return OK()
  }

  const uid = fields.custom_str2
  const targetPackage = fields.custom_str1 as PackageValue | undefined
  if (!uid || !targetPackage) {
    console.error('[payfast/notify] missing custom_str1/custom_str2', fields)
    return OK()
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) {
    console.error('[payfast/notify] user not found', { uid })
    return OK()
  }
  const userData = userSnap.data()!

  // 4. Cross-check against what checkout actually quoted this user, rather than
  // recomputing a price blindly — closes the ambiguity of not knowing whether
  // the quoted rate was founding or full at ITN time.
  if (userData.pendingPackage !== targetPackage) {
    console.error('[payfast/notify] pendingPackage mismatch', {
      uid, expected: userData.pendingPackage, received: targetPackage,
    })
    return OK()
  }
  const expectedAmount = typeof userData.pendingAmount === 'number' ? userData.pendingAmount : null
  const receivedAmount = parseFloat(fields.amount_gross ?? '')
  if (expectedAmount === null || Number.isNaN(receivedAmount) || Math.abs(receivedAmount - expectedAmount) > 0.01) {
    console.error('[payfast/notify] amount mismatch', { uid, expectedAmount, receivedAmount })
    return OK()
  }

  // All checks passed.
  if (fields.payment_status !== 'COMPLETE') {
    await userRef.update({ subscriptionStatus: 'past_due' })
    return OK()
  }

  await userRef.update({
    package: targetPackage,
    subscriptionStatus: 'active',
    payfastToken: fields.token ?? null,
    pendingPackage: null,
    pendingAmount: null,
    lastPaymentDate: new Date().toISOString(),
    lastPaymentAmount: receivedAmount,
  })

  // First successful payment for someone who signed up via a referral link?
  // Mark their referral record as converted and denormalize the amount onto
  // it — the referrer's Firestore rules only let them read their own
  // `referrals` docs, never another user's account, so the amount has to
  // land here rather than being looked up later from the referred friend's
  // doc. Only ever flips false -> true — a later downgrade/cancellation
  // shouldn't retroactively un-credit the friend who referred them. (This is
  // a display figure only — no actual billing discount is applied yet.)
  if (userData.referredBy) {
    const referralQuery = await adminDb
      .collection('referrals')
      .where('referredUid', '==', uid)
      .limit(1)
      .get()
    if (!referralQuery.empty) {
      await referralQuery.docs[0].ref.update({
        hasSubscribed: true,
        creditAmount: receivedAmount,
        subscribedPackage: targetPackage,
      })
    }
  }

  return OK()
}
