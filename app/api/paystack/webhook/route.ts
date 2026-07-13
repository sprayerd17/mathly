import { NextRequest } from 'next/server'
import { FieldValue, type Firestore } from 'firebase-admin/firestore'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, verifyWebhookSignature, verifyTransaction, listSubscriptionsForCustomer } from '@/src/lib/paystack'
import { bookingConfirmedEmail, paymentFailedEmail, paymentReceiptEmail, sendEmail, sendOwnerAlert } from '@/src/lib/email'
import type { Plan, Tier } from '@/src/lib/pricing'

const OK = () => new Response(null, { status: 200 })

// Every webhook — accepted, failed or rejected — is recorded in the
// `payments` collection so the admin dashboard can build revenue history and
// flag webhooks that were dropped, instead of rejections vanishing into
// console logs. firestore.rules denies all client access to `payments`;
// only this route (Admin SDK) writes it. Kept as close as possible to the
// PayFast-era shape (same field names) so the dashboard doesn't need
// changes for this migration.
async function logEvent(
  adminDb: Firestore | null,
  event: string,
  data: Record<string, unknown>,
  outcome: 'complete' | 'failed' | 'rejected',
  reason: string | null,
  kind: 'signup' | 'renewal' | 'session' | null,
) {
  if (outcome === 'rejected') {
    await sendOwnerAlert(
      `Mathly: Paystack webhook rejected (${reason ?? 'unknown'})`,
      `<p>A Paystack notification was rejected.</p>
       <p>Reason: <strong>${reason ?? 'unknown'}</strong><br/>
       Event: ${event}<br/>
       Reference: ${data.reference ?? '?'}</p>
       <p>Full details are on the dashboard's Overview tab.</p>`,
    ).catch(() => {})
  }
  if (!adminDb) return
  try {
    const amountCents = typeof data.amount === 'number' ? data.amount : null
    const metadata = (data.metadata ?? null) as Record<string, unknown> | null
    await adminDb.collection('payments').add({
      receivedAt: FieldValue.serverTimestamp(),
      outcome,
      reason,
      kind,
      paymentStatus: typeof data.status === 'string' ? data.status : event,
      uid: metadata?.uid ?? null,
      email: (data.customer as { email?: string } | undefined)?.email ?? null,
      amountGross: amountCents !== null ? amountCents / 100 : null,
      mPaymentId: data.reference ?? null,
      pfPaymentId: data.id ?? null,
      itemName: null,
      childPlans: metadata?.childTiers ? JSON.stringify(metadata.childTiers) : (metadata?.kind ?? null),
      reviewed: false,
    })
  } catch (err) {
    console.error('[paystack/webhook] could not log event to payments', err)
  }
}

type ChargeData = {
  id?: number
  reference?: string
  status?: string
  amount?: number
  plan?: string
  customer?: { id?: number; customer_code?: string; email?: string }
  metadata?: Record<string, unknown> | null
}

export async function POST(req: NextRequest) {
  let adminDb: Firestore | null = null
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/webhook] Firebase Admin not configured', err)
    return OK()
  }

  const rawBody = await req.text()
  const config = getPaystackConfig()

  // Single check, cryptographically sufficient — see verifyWebhookSignature's
  // comment in src/lib/paystack.ts for why this replaces PayFast's three-layer
  // signature+IP-allowlist+validate-call defense.
  const signature = req.headers.get('x-paystack-signature')
  if (!verifyWebhookSignature(rawBody, signature, config.secretKey)) {
    console.error('[paystack/webhook] signature mismatch')
    await logEvent(adminDb, 'unknown', {}, 'rejected', 'signature_mismatch', null)
    return OK()
  }

  const body = JSON.parse(rawBody) as { event?: string; data?: ChargeData }
  const event = body.event ?? ''
  const data = body.data ?? {}
  const metadata = (data.metadata ?? {}) as Record<string, unknown>

  // Defense-in-depth companion to the signature check — confirms the
  // transaction really did succeed straight from Paystack's API, not just
  // that the webhook body was signed with our own key (which is guaranteed
  // by the signature check above, but this also protects against a stale or
  // out-of-order delivery reporting success for a transaction Paystack has
  // since reversed).
  async function verifiedSuccess(reference: string | undefined): Promise<boolean> {
    if (!reference) return false
    const result = await verifyTransaction(config, reference)
    return result.ok && result.data?.status === 'success'
  }

  // ── Once-off session-booking payments take their own path ───────────────
  if (event === 'charge.success' && metadata.kind === 'session_booking') {
    const bookingId = metadata.bookingId as string | undefined
    const uid = metadata.uid as string | undefined
    if (!bookingId || !uid) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_metadata', 'session')
      return OK()
    }
    const bookingRef = adminDb.doc(`bookings/${bookingId}`)
    const bookingSnap = await bookingRef.get()
    if (!bookingSnap.exists) {
      console.error('[paystack/webhook] booking not found', { bookingId })
      await logEvent(adminDb, event, data, 'rejected', 'booking_not_found', 'session')
      return OK()
    }
    const booking = bookingSnap.data()!
    if (booking.uid !== uid) {
      await logEvent(adminDb, event, data, 'rejected', 'booking_uid_mismatch', 'session')
      return OK()
    }
    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (Number.isNaN(receivedAmount) || Math.abs(receivedAmount - booking.amount) > 0.01) {
      console.error('[paystack/webhook] booking amount mismatch', { bookingId, expected: booking.amount, receivedAmount })
      await logEvent(adminDb, event, data, 'rejected', 'amount_mismatch', 'session')
      return OK()
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'session')
      return OK()
    }
    if (booking.status === 'paid') {
      // Paystack retries webhook delivery — never double-count a spot.
      await logEvent(adminDb, event, data, 'complete', 'duplicate_webhook', 'session')
      return OK()
    }

    const sessionRef = adminDb.doc(`sessions/${booking.sessionId}`)
    const sessionSnap = await sessionRef.get()
    const session = sessionSnap.exists ? sessionSnap.data()! : null

    await bookingRef.update({
      status: 'paid',
      paidAt: new Date().toISOString(),
      meetLink: session?.meetLink ?? '',
    })
    if (session && booking.status !== 'reserved') {
      await sessionRef.update({ bookedCount: FieldValue.increment(1) })
    }
    await logEvent(adminDb, event, data, 'complete', null, 'session')

    if (session && booking.email) {
      const mail = bookingConfirmedEmail({
        name: booking.name ?? '',
        childName: booking.childName ?? '',
        topic: session.topic ?? '',
        date: session.date ?? '',
        time: session.time ?? '',
        durationMins: typeof session.durationMins === 'number' ? session.durationMins : 60,
        amount: booking.amount,
        meetLink: session.meetLink ?? '',
      })
      await sendEmail(booking.email, mail.subject, mail.html, mail.from)
    }
    return OK()
  }

  if (event === 'charge.failed' && metadata.kind === 'session_booking') {
    const bookingId = metadata.bookingId as string | undefined
    if (bookingId) {
      await adminDb.doc(`bookings/${bookingId}`).update({ status: 'failed' }).catch(() => {})
    }
    await logEvent(adminDb, event, data, 'failed', 'payment_not_complete', 'session')
    return OK()
  }

  // ── Subscription signup: first payment for a brand-new subscription ─────
  if (event === 'charge.success' && metadata.kind === 'signup') {
    const uid = metadata.uid as string | undefined
    if (!uid) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_metadata', 'signup')
      return OK()
    }
    const userRef = adminDb.doc(`users/${uid}`)
    const userSnap = await userRef.get()
    if (!userSnap.exists) {
      console.error('[paystack/webhook] user not found', { uid })
      await logEvent(adminDb, event, data, 'rejected', 'user_not_found', 'signup')
      return OK()
    }
    const userData = userSnap.data()!
    const expectedChildPlans: Tier[] | undefined | null = userData.pendingChildPlans
    if (!expectedChildPlans) {
      // No pending checkout on file — this uid/metadata combination doesn't
      // match a fresh signup in progress (already consumed, or stale retry).
      await logEvent(adminDb, event, data, 'rejected', 'no_pending_checkout', 'signup')
      return OK()
    }

    // Cross-check against what checkout actually quoted this user, rather
    // than recomputing a price blindly — closes the ambiguity of not
    // knowing whether the quoted rate was founding or full at webhook time.
    const metadataTiers = metadata.childTiers
    if (JSON.stringify(expectedChildPlans) !== JSON.stringify(metadataTiers)) {
      console.error('[paystack/webhook] pendingChildPlans mismatch', { uid, expected: expectedChildPlans, received: metadataTiers })
      await logEvent(adminDb, event, data, 'rejected', 'child_plans_mismatch', 'signup')
      return OK()
    }
    const expectedAmount = typeof userData.pendingAmount === 'number' ? userData.pendingAmount : null
    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (expectedAmount === null || Number.isNaN(receivedAmount) || Math.abs(receivedAmount - expectedAmount) > 0.01) {
      console.error('[paystack/webhook] amount mismatch', { uid, expectedAmount, receivedAmount })
      await logEvent(adminDb, event, data, 'rejected', 'amount_mismatch', 'signup')
      return OK()
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'signup')
      return OK()
    }

    const customerCode = data.customer?.customer_code ?? null
    const customerId = data.customer?.id ?? null

    await userRef.update({
      childPlans: expectedChildPlans,
      subscriptionStatus: 'active',
      paystackCustomerCode: customerCode,
      // subscription_code/email_token aren't on the charge event itself —
      // looked up right below, right after Paystack creates the
      // subscription record for this customer+plan. subscription.create
      // (handled further down) is a fallback in case that lookup races
      // ahead of Paystack's own subscription creation.
      pendingChildPlans: null,
      pendingFounding: null,
      pendingAmount: null,
      lastPaymentDate: new Date().toISOString(),
      lastPaymentAmount: receivedAmount,
      pastDueSince: null,
      dunningStage: null,
    })

    // Wrapped defensively — a failure here must never crash the whole
    // handler and skip the founding/referral bookkeeping, the audit log, and
    // the receipt email below. subscription.create (handled further down)
    // is the fallback if this lookup comes up empty.
    try {
      if (customerId) {
        const subs = await listSubscriptionsForCustomer(config, customerId)
        const active = subs.ok ? subs.data?.find(s => s.status === 'active') ?? subs.data?.[0] : null
        if (active) {
          await userRef.update({
            paystackSubscriptionCode: active.subscription_code,
            paystackEmailToken: active.email_token,
          })
        } else {
          console.error('[paystack/webhook] no subscription found for customer yet — relying on subscription.create fallback', { uid, customerId, subsOk: subs.ok, subsStatus: subs.status })
        }
      }
    } catch (err) {
      console.error('[paystack/webhook] listSubscriptionsForCustomer threw — relying on subscription.create fallback', { uid, customerId, err })
    }

    // Founding seats are only consumed once the money actually arrives — the
    // checkout route stored which tiers were quoted at founding price in
    // pendingFounding, and the flag applies to every paid seat of that tier
    // (matching computeFamilyPrice). settings/founding is the persistent
    // counter the dashboard and checkout read spots-remaining from.
    const pendingFounding = (userData.pendingFounding ?? { pro: false, guided: false }) as Record<Plan, boolean>
    const foundingSeats: Record<Plan, number> = { pro: 0, guided: 0 }
    for (const tier of expectedChildPlans) {
      if (tier !== 'free' && pendingFounding[tier]) foundingSeats[tier]++
    }
    if (foundingSeats.pro > 0 || foundingSeats.guided > 0) {
      await adminDb.doc('settings/founding').set({
        proUsed: FieldValue.increment(foundingSeats.pro),
        guidedUsed: FieldValue.increment(foundingSeats.guided),
      }, { merge: true })
    }

    // First successful payment for someone who signed up via a referral
    // link? Mark their referral record as converted — only ever flips
    // false -> true, same as before.
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
          subscribedTiers: expectedChildPlans,
        })
      }
    }

    await logEvent(adminDb, event, data, 'complete', null, 'signup')
    if (userData.email) {
      const mail = paymentReceiptEmail({ name: userData.name ?? '', amount: receivedAmount, item: 'Mathly subscription' })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return OK()
  }

  if (event === 'charge.failed' && metadata.kind === 'signup') {
    const uid = metadata.uid as string | undefined
    if (uid) {
      const userRef = adminDb.doc(`users/${uid}`)
      const userSnap = await userRef.get()
      if (userSnap.exists) {
        const userData = userSnap.data()!
        await userRef.update({
          subscriptionStatus: 'past_due',
          ...(userData.subscriptionStatus !== 'past_due'
            ? { pastDueSince: new Date().toISOString(), dunningStage: 0 }
            : {}),
        })
        if (userData.email) {
          const mail = paymentFailedEmail({ name: userData.name ?? '' })
          await sendEmail(userData.email, mail.subject, mail.html, mail.from)
        }
      }
    }
    await logEvent(adminDb, event, data, 'failed', 'payment_not_complete', 'signup')
    return OK()
  }

  // ── Subscription renewal — system-initiated by Paystack itself, no
  // metadata of ours attached. Matched to a user by customer_code (stable
  // across every charge for that customer, captured at signup above).
  if ((event === 'charge.success' || event === 'charge.failed' || event === 'invoice.payment_failed') && !metadata.kind) {
    const customerCode = data.customer?.customer_code
    if (!customerCode) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_customer_code', 'renewal')
      return OK()
    }
    const userQuery = await adminDb.collection('users').where('paystackCustomerCode', '==', customerCode).limit(1).get()
    if (userQuery.empty) {
      // Not every charge.success is a renewal — this is also how Paystack
      // reports the signup charge itself before metadata is attached in some
      // configurations. If this fires unexpectedly often for real signups
      // during test-mode verification, the signup branch above needs
      // adjusting rather than this one.
      await logEvent(adminDb, event, data, 'rejected', 'user_not_found', 'renewal')
      return OK()
    }
    const userRef = userQuery.docs[0].ref
    const userData = userQuery.docs[0].data()

    // A self-cancelled account should never be pushed back into dunning (or
    // back to 'active') by a stray/duplicate/late webhook that arrives after
    // cancellation — subscriptionStatus for these accounts is owned by the
    // cancel-subscription route and the expire-cancelled-subscriptions cron
    // from this point on.
    if (userData.subscriptionStatus === 'cancelling' || userData.subscriptionStatus === 'cancelled') {
      await logEvent(adminDb, event, data, 'rejected', 'account_already_cancelled', 'renewal')
      return OK()
    }

    if (event === 'charge.failed' || event === 'invoice.payment_failed') {
      await userRef.update({
        subscriptionStatus: 'past_due',
        ...(userData.subscriptionStatus !== 'past_due'
          ? { pastDueSince: new Date().toISOString(), dunningStage: 0 }
          : {}),
      })
      await logEvent(adminDb, event, data, 'failed', 'payment_not_complete', 'renewal')
      if (userData.email) {
        const mail = paymentFailedEmail({ name: userData.name ?? '' })
        await sendEmail(userData.email, mail.subject, mail.html, mail.from)
      }
      return OK()
    }

    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (Number.isNaN(receivedAmount)) {
      console.error('[paystack/webhook] renewal amount missing', { customerCode })
      await logEvent(adminDb, event, data, 'rejected', 'amount_missing', 'renewal')
      return OK()
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'renewal')
      return OK()
    }
    await userRef.update({
      subscriptionStatus: 'active',
      lastPaymentDate: new Date().toISOString(),
      lastPaymentAmount: receivedAmount,
      pastDueSince: null,
      dunningStage: null,
    })
    await logEvent(adminDb, event, data, 'complete', null, 'renewal')
    if (userData.email) {
      const mail = paymentReceiptEmail({ name: userData.name ?? '', amount: receivedAmount, item: 'Mathly subscription' })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return OK()
  }

  // ── Fallback capture of subscription_code/email_token — the signup branch
  // above already tries to fetch these synchronously via
  // listSubscriptionsForCustomer, so this only matters if that lookup raced
  // ahead of Paystack's own subscription creation.
  if (event === 'subscription.create') {
    const subData = data as unknown as { subscription_code?: string; email_token?: string; customer?: { customer_code?: string } }
    const customerCode = subData.customer?.customer_code
    if (customerCode && subData.subscription_code && subData.email_token) {
      const userQuery = await adminDb.collection('users').where('paystackCustomerCode', '==', customerCode).limit(1).get()
      if (!userQuery.empty) {
        await userQuery.docs[0].ref.update({
          paystackSubscriptionCode: subData.subscription_code,
          paystackEmailToken: subData.email_token,
        })
      }
    }
    return OK()
  }

  // Unhandled event type — not an error, Paystack sends several event types
  // this integration doesn't need to act on (e.g. transfer/refund events).
  return OK()
}
