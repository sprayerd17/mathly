import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { sendEmail, subscriptionEndedEmail } from '@/src/lib/email'

const HOUR = 60 * 60 * 1000
const PENDING_ABANDON_HOURS = 2

// Two unrelated cleanup sweeps that happen to share a cadence, kept in one
// route rather than two to avoid the Netlify scheduled-function wiring for
// a second cron:
//
// 1. Finalizes self-service cancellations: finds every account still marked
//    'cancelling' whose paid period (accessUntil) has passed, drops
//    childPlans to free, and flips the status to 'cancelled'. accessUntil is
//    a specific instant, not a day boundary, so hourly keeps the gap between
//    "period actually ends" and "access actually drops" small.
//
// 2. Reverts abandoned checkouts: /api/paystack/checkout sets
//    subscriptionStatus to 'pending' the moment it initializes a Paystack
//    transaction. If the user just closes the tab and never completes
//    payment, neither charge.success nor charge.failed ever fires — nothing
//    else in the system would ever move that account out of 'pending'.
//    update-tiers and cancel-subscription both refuse to touch a 'pending'
//    account, and the profile page shows a permanent "upgrade in progress"
//    that's no longer true. Anything still pending after 2 hours is clearly
//    abandoned, not just slow — Paystack checkout sessions don't stay open
//    that long. Filtered in code rather than in the query (pendingSince
//    range + subscriptionStatus equality would need a composite index this
//    repo doesn't manage via firestore.indexes.json).
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[cron/expire-cancelled-subscriptions] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  const nowIso = new Date().toISOString()
  const snap = await adminDb
    .collection('users')
    .where('subscriptionStatus', '==', 'cancelling')
    .where('accessUntil', '<=', nowIso)
    .limit(500)
    .get()

  let expired = 0
  for (const doc of snap.docs) {
    const user = doc.data()
    const freeChildPlans = Array.isArray(user.childPlans) ? user.childPlans.map(() => 'free') : []
    await doc.ref.update({
      subscriptionStatus: 'cancelled',
      childPlans: freeChildPlans,
      accessUntil: null,
    })
    if (user.email) {
      const mail = subscriptionEndedEmail({ name: user.name ?? '' })
      await sendEmail(user.email, mail.subject, mail.html, mail.from)
    }
    expired++
  }

  const pendingCutoff = Date.now() - PENDING_ABANDON_HOURS * HOUR
  const pendingSnap = await adminDb.collection('users').where('subscriptionStatus', '==', 'pending').limit(500).get()
  let abandonedCheckouts = 0
  for (const doc of pendingSnap.docs) {
    const user = doc.data()
    if (!user.pendingSince || new Date(user.pendingSince).getTime() > pendingCutoff) continue
    await doc.ref.update({
      subscriptionStatus: 'none',
      pendingChildPlans: null,
      pendingFounding: null,
      pendingAmount: null,
      pendingPlanCode: null,
      pendingSince: null,
    })
    abandonedCheckouts++
  }

  return Response.json({ ok: true, expired, abandonedCheckouts })
}
