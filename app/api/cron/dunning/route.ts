import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, disableSubscription } from '@/src/lib/paystack'
import { paymentFinalWarningEmail, paymentReminderEmail, sendEmail, subscriptionCancelledEmail } from '@/src/lib/email'

// Follow-up cadence for accounts stuck on a failed subscription renewal:
//   day 3  — reminder
//   day 7  — final warning (3 days left)
//   day 10 — auto-cancel, account drops to free tier
// dunningStage tracks which email was last sent so re-running this hourly
// never re-sends the same stage. pastDueSince/dunningStage are set by the
// Paystack webhook the moment an account first goes past_due, and cleared the
// moment a payment succeeds again.
const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[cron/dunning] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  const snap = await adminDb.collection('users').where('subscriptionStatus', '==', 'past_due').limit(500).get()
  const now = Date.now()
  let reminders = 0
  let warnings = 0
  let cancellations = 0

  for (const doc of snap.docs) {
    const user = doc.data()
    if (!user.pastDueSince) continue
    const daysSince = (now - new Date(user.pastDueSince).getTime()) / DAY
    const stage: number = typeof user.dunningStage === 'number' ? user.dunningStage : 0

    if (daysSince >= 10 && stage < 3) {
      // Stop Paystack from retrying before dropping the account to free —
      // otherwise a later successful retry charges the card while the
      // account already has no access, and Paystack rejects any subsequent
      // disable attempt as account_already_cancelled. Local cancellation
      // still proceeds even if this fails, so the account doesn't stay
      // stuck paid-but-unpaying; the error is logged for manual follow-up.
      if (user.paystackSubscriptionCode && user.paystackEmailToken) {
        const result = await disableSubscription(getPaystackConfig(), {
          code: user.paystackSubscriptionCode,
          token: user.paystackEmailToken,
        })
        if (!result.ok) {
          console.error('[cron/dunning] Paystack disable failed during auto-cancel — subscription may still be billing', {
            uid: doc.id, status: result.status, message: result.message,
          })
        }
      } else {
        console.error('[cron/dunning] auto-cancel with no subscription code/token on file', { uid: doc.id })
      }

      const freeChildPlans = Array.isArray(user.childPlans) ? user.childPlans.map(() => 'free') : []
      await doc.ref.update({ subscriptionStatus: 'cancelled', childPlans: freeChildPlans, dunningStage: 3 })
      // A brand-new signup's very first charge attempt can fail and land the
      // account here — lastPaymentDate only ever gets set on a successful
      // charge, so its absence means this account never actually had a paid
      // subscription to cancel. "Your subscription has been cancelled" would
      // be false for them (and confusing, since they're already on Free);
      // skip the email rather than send incorrect copy.
      if (user.email && user.lastPaymentDate) {
        const mail = subscriptionCancelledEmail({ name: user.name ?? '' })
        await sendEmail(user.email, mail.subject, mail.html, mail.from)
      }
      cancellations++
    } else if (daysSince >= 7 && stage < 2) {
      await doc.ref.update({ dunningStage: 2 })
      if (user.email) {
        const mail = paymentFinalWarningEmail({ name: user.name ?? '' })
        await sendEmail(user.email, mail.subject, mail.html, mail.from)
      }
      warnings++
    } else if (daysSince >= 3 && stage < 1) {
      await doc.ref.update({ dunningStage: 1 })
      if (user.email) {
        const mail = paymentReminderEmail({ name: user.name ?? '' })
        await sendEmail(user.email, mail.subject, mail.html, mail.from)
      }
      reminders++
    }
  }

  return Response.json({ ok: true, reminders, warnings, cancellations })
}
