import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, disableSubscription } from '@/src/lib/paystack'
import { sendEmail, subscriptionCancellationScheduledEmail } from '@/src/lib/email'
import { addOneMonth } from '@/src/lib/pricing'

// Self-service cancellation, matching what the FAQ and Terms already
// promise: cancel now, keep full access until the already-paid period ends,
// then no further charges. This tells Paystack to stop billing the
// subscription immediately, but only marks the account 'cancelling' (not
// 'cancelled') — childPlans stays untouched until accessUntil passes, at
// which point the expire-cancelled-subscriptions cron drops it to free and
// flips the status to 'cancelled'.
export async function POST(req: NextRequest) {
  const { idToken } = await req.json().catch(() => ({})) as { idToken?: string }
  if (!idToken) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/cancel-subscription] Firebase Admin not configured', err)
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
    return new Response('No active subscription to cancel', { status: 409 })
  }
  if (!userData.paystackSubscriptionCode || !userData.paystackEmailToken) {
    console.error('[paystack/cancel-subscription] active subscription with no subscription code/token on file', { uid })
    return new Response('No subscription token on file — contact support', { status: 409 })
  }

  const config = getPaystackConfig()
  const result = await disableSubscription(config, {
    code: userData.paystackSubscriptionCode,
    token: userData.paystackEmailToken,
  })

  // Never touch Firestore unless Paystack actually confirmed the
  // cancellation — the worst failure mode here is telling a user they're
  // safe from future charges when billing is still active on Paystack's side.
  if (!result.ok) {
    console.error('[paystack/cancel-subscription] Paystack rejected cancellation', {
      uid, status: result.status, message: result.message,
    })
    return new Response(
      `Paystack could not process the cancellation (status ${result.status}: ${result.message ?? 'unknown error'}) — please try again or contact support`,
      { status: 502 },
    )
  }

  // Access continues until the current paid period ends.
  const accessUntilDate = addOneMonth(userData.lastPaymentDate ?? null)
  const accessUntil = accessUntilDate.toISOString()

  await userRef.update({
    subscriptionStatus: 'cancelling',
    accessUntil,
  })

  if (userData.email) {
    const mail = subscriptionCancellationScheduledEmail({
      name: userData.name ?? '',
      accessUntil: accessUntilDate.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' }),
    })
    await sendEmail(userData.email, mail.subject, mail.html, mail.from)
  }

  return Response.json({ ok: true, accessUntil })
}
