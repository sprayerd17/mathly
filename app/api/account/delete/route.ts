import { NextRequest } from 'next/server'
import type { Firestore } from 'firebase-admin/firestore'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, disableSubscription } from '@/src/lib/paystack'

// Permanently deletes a user's account, per the Privacy Policy's POPIA
// deletion right (Section 10). Never touches Firestore/Auth until any
// active billing is actually stopped first — same defensive doctrine as
// cancel-subscription: the worst failure mode is deleting the account while
// Paystack is still charging it every month with nobody left to notice.
// Order after that: Firestore user doc (+ all its subcollections, via
// recursiveDelete) first, then best-effort cleanup of other collections
// that reference this uid, then the Firebase Auth account itself last —
// so a failure partway through never leaves an orphaned Auth account with
// no way to retry from the client.
//
// `payments` (the Paystack webhook audit log) is deliberately NOT deleted —
// Privacy Policy Section 8 already discloses that financial records are
// kept for 5 years per South African tax law, independent of account deletion.
export async function POST(req: NextRequest) {
  const { idToken } = await req.json().catch(() => ({})) as { idToken?: string }
  if (!idToken) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[account/delete] Firebase Admin not configured', err)
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

  if (userData.subscriptionStatus === 'active' || userData.subscriptionStatus === 'past_due') {
    if (!userData.paystackSubscriptionCode || !userData.paystackEmailToken) {
      console.error('[account/delete] active subscription with no subscription code/token on file', { uid })
      return new Response('No subscription token on file — contact support before deleting your account', { status: 409 })
    }
    const config = getPaystackConfig()
    const result = await disableSubscription(config, {
      code: userData.paystackSubscriptionCode,
      token: userData.paystackEmailToken,
    })
    if (!result.ok) {
      console.error('[account/delete] Paystack rejected cancellation during account deletion', {
        uid, status: result.status, message: result.message,
      })
      return new Response(
        'Could not cancel your active subscription — please try again or contact support before deleting your account',
        { status: 502 },
      )
    }
  }

  await adminDb.recursiveDelete(userRef)

  await Promise.allSettled([
    deleteWhere(adminDb, 'bookings', 'uid', uid),
    deleteWhere(adminDb, 'lessonRequests', 'uid', uid),
    deleteWhere(adminDb, 'referrals', 'referrerUid', uid),
  ])

  try {
    await adminAuth.deleteUser(uid)
  } catch (err) {
    // The user's personal data is already gone — an orphaned Auth record
    // (email + uid only) is a much smaller residual risk, but still needs
    // manual follow-up.
    console.error('[account/delete] Firestore data deleted but Firebase Auth account deletion failed — needs manual cleanup', { uid, err })
  }

  return Response.json({ ok: true })
}

async function deleteWhere(db: Firestore, collection: string, field: string, value: string) {
  const snap = await db.collection(collection).where(field, '==', value).get()
  if (snap.empty) return
  const batch = db.batch()
  snap.docs.forEach(doc => batch.delete(doc.ref))
  await batch.commit()
}
