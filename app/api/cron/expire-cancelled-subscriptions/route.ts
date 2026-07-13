import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { sendEmail, subscriptionEndedEmail } from '@/src/lib/email'

// Finalizes self-service cancellations: finds every account still marked
// 'cancelling' whose paid period (accessUntil) has passed, drops childPlans
// to free, and flips the status to 'cancelled'. Runs hourly, same cadence as
// the other billing crons — accessUntil is a specific instant, not a day
// boundary, so hourly keeps the gap between "period actually ends" and
// "access actually drops" small without needing a dedicated scheduler.
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

  return Response.json({ ok: true, expired })
}
