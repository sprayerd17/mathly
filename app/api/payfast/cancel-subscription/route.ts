import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, cancelPayfastSubscription } from '@/src/lib/payfast'
import { sendEmail, subscriptionCancellationScheduledEmail } from '@/src/lib/email'

// Self-service cancellation, matching what the FAQ and Terms already promise:
// cancel now, keep full access until the already-paid period ends, then no
// further charges. This tells PayFast to stop billing the subscription token
// immediately, but only marks the account 'cancelling' (not 'cancelled') —
// childPlans stays untouched until accessUntil passes, at which point the
// expire-cancelled-subscriptions cron drops it to free and flips the status
// to 'cancelled'.
export async function POST(req: NextRequest) {
  const { idToken } = await req.json().catch(() => ({})) as { idToken?: string }
  if (!idToken) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[payfast/cancel-subscription] Firebase Admin not configured', err)
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
  if (!userData.payfastToken) {
    console.error('[payfast/cancel-subscription] active subscription with no payfastToken', { uid })
    return new Response('No subscription token on file — contact support', { status: 409 })
  }

  const config = getPayfastConfig()
  let result
  try {
    result = await cancelPayfastSubscription(userData.payfastToken, config)
  } catch (err) {
    console.error('[payfast/cancel-subscription] PayFast API call threw', err)
    return new Response('Could not reach PayFast — please try again shortly or contact support', { status: 502 })
  }

  // Never touch Firestore unless PayFast actually confirmed the cancellation —
  // the worst failure mode here is telling a user they're safe from future
  // charges when billing is still active on PayFast's side.
  if (!result.success) {
    console.error('[payfast/cancel-subscription] PayFast rejected cancellation', {
      uid, status: result.status, body: result.body,
    })
    // Echo PayFast's own status/body back in the response (not our secrets —
    // just their rejection reason) so this is diagnosable from the browser
    // network tab without needing access to server logs.
    return new Response(
      `PayFast could not process the cancellation (status ${result.status}: ${result.body.slice(0, 300)}) — please try again or contact support`,
      { status: 502 },
    )
  }

  // Access continues until the current paid period ends. lastPaymentDate +
  // one month approximates PayFast's monthly billing cycle (the same
  // frequency used at checkout); if lastPaymentDate is somehow missing,
  // fall back to one month from now rather than cutting access off early.
  const periodStart = typeof userData.lastPaymentDate === 'string' ? new Date(userData.lastPaymentDate) : new Date()
  const accessUntilDate = new Date(periodStart)
  accessUntilDate.setMonth(accessUntilDate.getMonth() + 1)
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
