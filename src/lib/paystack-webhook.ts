import { FieldValue, type Firestore } from 'firebase-admin/firestore'
import { getPaystackConfig, verifyTransaction, listSubscriptionsForCustomer, updatePlan } from '@/src/lib/paystack'
import { bookingConfirmedEmail, paymentFailedEmail, paymentReceiptEmail, sendEmail, sendOwnerAlert } from '@/src/lib/email'
import { computeFamilyPrice, type Plan, type Tier } from '@/src/lib/pricing'

// Every webhook — accepted, failed or rejected — is recorded in the
// `payments` collection so the admin dashboard can build revenue history and
// flag webhooks that were dropped, instead of rejections vanishing into
// console logs. firestore.rules denies all client access to `payments`;
// only this route (Admin SDK) writes it. Kept as close as possible to the
// PayFast-era shape (same field names) so the dashboard doesn't need
// changes for this migration.
export async function logEvent(
  adminDb: Firestore | null,
  event: string,
  data: Record<string, unknown>,
  outcome: 'complete' | 'failed' | 'rejected',
  reason: string | null,
  kind: 'signup' | 'renewal' | 'session' | 'upgrade' | null,
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

export type ChargeData = {
  id?: number
  reference?: string
  status?: string
  amount?: number
  plan?: string
  customer?: { id?: number; customer_code?: string; email?: string }
  metadata?: Record<string, unknown> | null
}

// The actual event-processing logic, shared by the Paystack webhook route and
// /api/paystack/verify-checkout — a client-triggered fallback for when
// Paystack's webhook delivery is delayed, or was never configured at all
// (e.g. test-mode webhook URL left unset in the Paystack dashboard, a common
// sandbox setup gap). Both callers land here with equally-trustworthy data:
// the webhook after signature verification, verify-checkout after an
// authoritative /transaction/verify call — so this function itself doesn't
// re-check authenticity, only business rules.
export async function handlePaystackEvent(
  adminDb: Firestore,
  config: ReturnType<typeof getPaystackConfig>,
  event: string,
  data: ChargeData,
): Promise<void> {
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
      return
    }
    const bookingRef = adminDb.doc(`bookings/${bookingId}`)
    const bookingSnap = await bookingRef.get()
    if (!bookingSnap.exists) {
      console.error('[paystack/webhook] booking not found', { bookingId })
      await logEvent(adminDb, event, data, 'rejected', 'booking_not_found', 'session')
      return
    }
    const booking = bookingSnap.data()!
    if (booking.uid !== uid) {
      await logEvent(adminDb, event, data, 'rejected', 'booking_uid_mismatch', 'session')
      return
    }
    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (Number.isNaN(receivedAmount) || Math.abs(receivedAmount - booking.amount) > 0.01) {
      console.error('[paystack/webhook] booking amount mismatch', { bookingId, expected: booking.amount, receivedAmount })
      await logEvent(adminDb, event, data, 'rejected', 'amount_mismatch', 'session')
      return
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'session')
      return
    }

    const sessionRef = adminDb.doc(`sessions/${booking.sessionId}`)
    const sessionSnap = await sessionRef.get()
    const session = sessionSnap.exists ? sessionSnap.data()! : null

    // The status check and the writes it gates (marking paid, incrementing
    // bookedCount) must happen as one atomic unit — this handler can be
    // entered concurrently by the webhook and a client-triggered
    // verify-checkout call for the same reference. A plain read-then-write
    // leaves a window where both see status !== 'paid' and both increment
    // the spot count.
    let overbooked = false
    const claimed = await adminDb.runTransaction(async (tx) => {
      const [freshSnap, freshSessionSnap] = await Promise.all([tx.get(bookingRef), tx.get(sessionRef)])
      if (!freshSnap.exists) return false
      const freshBooking = freshSnap.data()!
      if (freshBooking.status === 'paid') return false
      const freshSession = freshSessionSnap.exists ? freshSessionSnap.data()! : null
      tx.update(bookingRef, {
        status: 'paid',
        paidAt: new Date().toISOString(),
        meetLink: freshSession?.meetLink ?? '',
      })
      if (freshSession && freshBooking.status !== 'reserved') {
        // 'reserved' bookings already hold their spot from creation time
        // (sessions/book's own transaction) — only a first-time pay_now
        // confirmation needs a fresh capacity check here. The money is
        // already collected by this point (Paystack confirmed success
        // above), so a full session can't just silently drop the booking —
        // honour it and flag for manual follow-up instead. This closes the
        // race where the spots-available check at booking-creation time in
        // sessions/book is stale by the time payment actually confirms,
        // possibly minutes or hours later on Paystack's checkout page.
        const spots = typeof freshSession.spots === 'number' ? freshSession.spots : 0
        const bookedCount = typeof freshSession.bookedCount === 'number' ? freshSession.bookedCount : 0
        if (spots > 0 && bookedCount >= spots) overbooked = true
        tx.update(sessionRef, { bookedCount: FieldValue.increment(1) })
      }
      return true
    })
    if (!claimed) {
      // Paystack retries webhook delivery — never double-count a spot.
      await logEvent(adminDb, event, data, 'complete', 'duplicate_webhook', 'session')
      return
    }
    if (overbooked) {
      await sendOwnerAlert(
        `Mathly: session overbooked (booking ${bookingId})`,
        `<p>A pay-now booking (reference ${data.reference ?? '?'}) was confirmed for session ${booking.sessionId}
         after it was already at capacity. The booking was honoured since payment had already been collected —
         needs manual follow-up (an extra seat, or a refund if that isn't possible).</p>`,
      ).catch(() => {})
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
    return
  }

  if (event === 'charge.failed' && metadata.kind === 'session_booking') {
    const bookingId = metadata.bookingId as string | undefined
    if (bookingId) {
      await adminDb.doc(`bookings/${bookingId}`).update({ status: 'failed' }).catch(() => {})
    }
    await logEvent(adminDb, event, data, 'failed', 'payment_not_complete', 'session')
    return
  }

  // ── Subscription signup: first payment for a brand-new subscription ─────
  if (event === 'charge.success' && metadata.kind === 'signup') {
    const uid = metadata.uid as string | undefined
    if (!uid) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_metadata', 'signup')
      return
    }
    const userRef = adminDb.doc(`users/${uid}`)
    const userSnap = await userRef.get()
    if (!userSnap.exists) {
      console.error('[paystack/webhook] user not found', { uid })
      await logEvent(adminDb, event, data, 'rejected', 'user_not_found', 'signup')
      return
    }
    const userData = userSnap.data()!
    const expectedChildPlans: Tier[] | undefined | null = userData.pendingChildPlans
    if (!expectedChildPlans) {
      // No pending checkout on file — this uid/metadata combination doesn't
      // match a fresh signup in progress (already consumed, or stale retry).
      await logEvent(adminDb, event, data, 'rejected', 'no_pending_checkout', 'signup')
      return
    }

    // Cross-check against what checkout actually quoted this user, rather
    // than recomputing a price blindly — closes the ambiguity of not
    // knowing whether the quoted rate was founding or full at webhook time.
    const metadataTiers = metadata.childTiers
    if (JSON.stringify(expectedChildPlans) !== JSON.stringify(metadataTiers)) {
      console.error('[paystack/webhook] pendingChildPlans mismatch', { uid, expected: expectedChildPlans, received: metadataTiers })
      await logEvent(adminDb, event, data, 'rejected', 'child_plans_mismatch', 'signup')
      return
    }
    const expectedAmount = typeof userData.pendingAmount === 'number' ? userData.pendingAmount : null
    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (expectedAmount === null || Number.isNaN(receivedAmount) || Math.abs(receivedAmount - expectedAmount) > 0.01) {
      console.error('[paystack/webhook] amount mismatch', { uid, expectedAmount, receivedAmount })
      await logEvent(adminDb, event, data, 'rejected', 'amount_mismatch', 'signup')
      return
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'signup')
      return
    }

    const customerCode = data.customer?.customer_code ?? null
    const customerId = data.customer?.id ?? null

    // Permanent copies of what checkout only ever quoted transiently —
    // pendingFounding/pendingPlanCode get nulled out below once consumed,
    // but a per-child downgrade later needs to know both: which Plan to
    // amend, and whether this family locked in founding pricing (recomputing
    // without that would risk silently overcharging a founding family).
    const foundingForPersist = (userData.pendingFounding ?? { pro: false, max: false }) as Record<Plan, boolean>
    const planCodeForPersist = typeof userData.pendingPlanCode === 'string' ? userData.pendingPlanCode : null

    // The pendingChildPlans check above and this consuming write must happen
    // as one atomic unit — this handler can be entered concurrently by the
    // webhook and a client-triggered verify-checkout call for the same
    // reference. A plain read-then-write leaves a window where both calls
    // see pendingChildPlans still set and both grant access, double-count
    // founding seats, and email a duplicate receipt.
    const consumed = await adminDb.runTransaction(async (tx) => {
      const freshSnap = await tx.get(userRef)
      if (!freshSnap.exists) return false
      const freshPending: Tier[] | undefined | null = freshSnap.data()!.pendingChildPlans
      if (!freshPending || JSON.stringify(freshPending) !== JSON.stringify(expectedChildPlans)) return false
      tx.update(userRef, {
        childPlans: expectedChildPlans,
        subscriptionStatus: 'active',
        paystackCustomerCode: customerCode,
        paystackFounding: foundingForPersist,
        paystackPlanCode: planCodeForPersist,
        // subscription_code/email_token aren't on the charge event itself —
        // looked up right below, right after Paystack creates the
        // subscription record for this customer+plan. subscription.create
        // (handled further down) is a fallback in case that lookup races
        // ahead of Paystack's own subscription creation.
        pendingChildPlans: null,
        pendingFounding: null,
        pendingAmount: null,
        pendingPlanCode: null,
        pendingSince: null,
        lastPaymentDate: new Date().toISOString(),
        lastPaymentAmount: receivedAmount,
        pastDueSince: null,
        dunningStage: null,
      })
      return true
    })
    if (!consumed) {
      await logEvent(adminDb, event, data, 'complete', 'duplicate_webhook', 'signup')
      return
    }

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
    const foundingSeats: Record<Plan, number> = { pro: 0, max: 0 }
    for (const tier of expectedChildPlans) {
      if (tier !== 'free' && foundingForPersist[tier]) foundingSeats[tier]++
    }
    if (foundingSeats.pro > 0 || foundingSeats.max > 0) {
      // checkout/route.ts only checks spots-remaining at quote time — by the
      // time payment actually confirms (possibly minutes or hours later on
      // Paystack's checkout page), other concurrent signups can have already
      // exhausted the total. The customer has already been charged the
      // founding rate at this point, so oversubscribing can't be reversed
      // here — re-check anyway, atomically, so an oversell is flagged for a
      // real decision instead of silently exceeding the advertised total.
      const foundingRef = adminDb.doc('settings/founding')
      const oversold = await adminDb.runTransaction(async (tx) => {
        const snap = await tx.get(foundingRef)
        const f = snap.exists ? snap.data()! : {}
        const results: Plan[] = []
        for (const plan of ['pro', 'max'] as const) {
          if (foundingSeats[plan] === 0) continue
          const total = typeof f[`${plan}Total`] === 'number' ? f[`${plan}Total`] : 0
          const used = typeof f[`${plan}Used`] === 'number' ? f[`${plan}Used`] : 0
          if (total > 0 && used + foundingSeats[plan] > total) results.push(plan)
        }
        tx.set(foundingRef, {
          proUsed: FieldValue.increment(foundingSeats.pro),
          maxUsed: FieldValue.increment(foundingSeats.max),
        }, { merge: true })
        return results
      })
      if (oversold.length > 0) {
        await sendOwnerAlert(
          `Mathly: founding spots oversold (${oversold.join(', ')})`,
          `<p>uid ${uid} was granted founding pricing for [${oversold.join(', ')}] after the spots were already
           claimed by other concurrent signups. Their payment already reflects founding pricing — needs a
           decision on whether to honour it or follow up.</p>`,
        ).catch(() => {})
      }
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
    return
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
    return
  }

  // ── Tier upgrade on an already-active family — a one-time charge for just
  // the incremental amount, initiated by /api/paystack/update-tiers whenever
  // the new tier mix costs more than the current one. Paystack's Update Plan
  // endpoint (used for downgrades and same-or-lower-cost changes) only ever
  // changes what bills on the *next* cycle — it can't collect money today —
  // so an increase has to go through an actual transaction first. Only once
  // that charge is confirmed here do childPlans (and therefore access) get
  // upgraded and the family's recurring Plan amended to the new, higher
  // amount; granting access before payment would let a family upgrade, use
  // the higher tier, then downgrade again before the next renewal ever
  // billed the difference — permanently free access.
  if (event === 'charge.success' && metadata.kind === 'upgrade') {
    const uid = metadata.uid as string | undefined
    if (!uid) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_metadata', 'upgrade')
      return
    }
    const userRef = adminDb.doc(`users/${uid}`)
    const userSnap = await userRef.get()
    if (!userSnap.exists) {
      console.error('[paystack/webhook] user not found', { uid })
      await logEvent(adminDb, event, data, 'rejected', 'user_not_found', 'upgrade')
      return
    }
    const userData = userSnap.data()!
    const expectedChildPlans: Tier[] | undefined | null = userData.pendingChildPlans
    if (!expectedChildPlans) {
      await logEvent(adminDb, event, data, 'rejected', 'no_pending_upgrade', 'upgrade')
      return
    }
    const metadataTiers = metadata.childTiers
    if (JSON.stringify(expectedChildPlans) !== JSON.stringify(metadataTiers)) {
      console.error('[paystack/webhook] pendingChildPlans mismatch', { uid, expected: expectedChildPlans, received: metadataTiers })
      await logEvent(adminDb, event, data, 'rejected', 'child_plans_mismatch', 'upgrade')
      return
    }
    if (typeof userData.paystackPlanCode !== 'string' || !userData.paystackPlanCode || !userData.paystackFounding) {
      console.error('[paystack/webhook] upgrade with no plan code/founding on file', { uid })
      await logEvent(adminDb, event, data, 'rejected', 'no_plan_on_file', 'upgrade')
      return
    }

    // childPlans hasn't been touched yet (only pendingChildPlans has) — this
    // is still the pre-upgrade family, so recomputing its price here gives
    // the same "current total" the update-tiers route quoted the one-time
    // charge against.
    const currentChildPlans = Array.isArray(userData.childPlans) ? (userData.childPlans as Tier[]) : []
    const { total: currentTotal } = computeFamilyPrice(currentChildPlans, userData.paystackFounding)
    const newTotal = typeof userData.pendingAmount === 'number' ? userData.pendingAmount : null
    if (newTotal === null) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_pending_amount', 'upgrade')
      return
    }
    const expectedDifference = newTotal - currentTotal
    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (Number.isNaN(receivedAmount) || Math.abs(receivedAmount - expectedDifference) > 0.01) {
      console.error('[paystack/webhook] upgrade amount mismatch', { uid, expectedDifference, receivedAmount })
      await logEvent(adminDb, event, data, 'rejected', 'amount_mismatch', 'upgrade')
      return
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'upgrade')
      return
    }

    // Amend the recurring Plan to the new full total *before* granting
    // access — if this fails, the family has paid the incremental charge
    // but next cycle would still bill the old (lower) amount forever, so
    // leave pendingChildPlans/pendingAmount in place (a redelivered webhook
    // will retry this) rather than granting access on an unconfirmed billing
    // change, and alert for manual follow-up.
    const planResult = await updatePlan(config, { code: userData.paystackPlanCode, amountRands: newTotal })
    if (!planResult.ok) {
      console.error('[paystack/webhook] plan amendment failed after upgrade payment', {
        uid, status: planResult.status, message: planResult.message,
      })
      await sendOwnerAlert(
        `Mathly: paid upgrade could not amend Paystack plan (uid ${uid})`,
        `<p>A family paid a one-time upgrade charge (reference ${data.reference ?? '?'}) but amending their
         recurring Paystack plan to the new total failed (status ${planResult.status}: ${planResult.message ?? 'unknown'}).
         Needs manual reconciliation — do not ignore, their next renewal will still bill the old, lower amount.</p>`,
      ).catch(() => {})
      await logEvent(adminDb, event, data, 'rejected', 'plan_update_failed', 'upgrade')
      return
    }

    // Same concurrency concern as the signup branch above — the webhook and
    // a client-triggered verify-checkout call can both reach this point for
    // the same reference, so the pendingChildPlans check and the consuming
    // write must be one atomic unit or both calls grant access and send a
    // duplicate receipt.
    const consumed = await adminDb.runTransaction(async (tx) => {
      const freshSnap = await tx.get(userRef)
      if (!freshSnap.exists) return false
      const freshPending: Tier[] | undefined | null = freshSnap.data()!.pendingChildPlans
      if (!freshPending || JSON.stringify(freshPending) !== JSON.stringify(expectedChildPlans)) return false
      tx.update(userRef, {
        childPlans: expectedChildPlans,
        pendingChildPlans: null,
        pendingAmount: null,
        lastPaymentDate: new Date().toISOString(),
        lastPaymentAmount: receivedAmount,
        // A family stuck past_due from a failed renewal can still upgrade —
        // paying this one-time charge proves the card works right now.
        // Without clearing these, the dunning cron would still auto-cancel
        // them 10 days after the *original* renewal failure, even though
        // they just paid: money taken, still cancelled.
        subscriptionStatus: 'active',
        pastDueSince: null,
        dunningStage: null,
      })
      return true
    })
    if (!consumed) {
      await logEvent(adminDb, event, data, 'complete', 'duplicate_webhook', 'upgrade')
      return
    }

    await logEvent(adminDb, event, data, 'complete', null, 'upgrade')
    if (userData.email) {
      const mail = paymentReceiptEmail({ name: userData.name ?? '', amount: receivedAmount, item: 'Mathly plan upgrade' })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return
  }

  if (event === 'charge.failed' && metadata.kind === 'upgrade') {
    const uid = metadata.uid as string | undefined
    if (uid) {
      // Nothing was granted yet (access only ever follows a confirmed
      // payment above), so a failed charge just clears the stale quote —
      // the family's existing subscription and access are untouched.
      await adminDb.doc(`users/${uid}`).update({ pendingChildPlans: null, pendingAmount: null }).catch(() => {})
    }
    await logEvent(adminDb, event, data, 'failed', 'payment_not_complete', 'upgrade')
    return
  }

  // ── Subscription renewal — system-initiated by Paystack itself, no
  // metadata of ours attached. Matched to a user by customer_code (stable
  // across every charge for that customer, captured at signup above).
  if ((event === 'charge.success' || event === 'charge.failed' || event === 'invoice.payment_failed') && !metadata.kind) {
    const customerCode = data.customer?.customer_code
    if (!customerCode) {
      await logEvent(adminDb, event, data, 'rejected', 'missing_customer_code', 'renewal')
      return
    }
    const userQuery = await adminDb.collection('users').where('paystackCustomerCode', '==', customerCode).limit(1).get()
    if (userQuery.empty) {
      // Not every charge.success is a renewal — this is also how Paystack
      // reports the signup charge itself before metadata is attached in some
      // configurations. If this fires unexpectedly often for real signups
      // during test-mode verification, the signup branch above needs
      // adjusting rather than this one.
      await logEvent(adminDb, event, data, 'rejected', 'user_not_found', 'renewal')
      return
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
      return
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
      return
    }

    const receivedAmount = typeof data.amount === 'number' ? data.amount / 100 : NaN
    if (Number.isNaN(receivedAmount)) {
      console.error('[paystack/webhook] renewal amount missing', { customerCode })
      await logEvent(adminDb, event, data, 'rejected', 'amount_missing', 'renewal')
      return
    }
    if (!(await verifiedSuccess(data.reference))) {
      await logEvent(adminDb, event, data, 'rejected', 'verify_call_failed', 'renewal')
      return
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
    return
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
    return
  }

  // Unhandled event type — not an error, Paystack sends several event types
  // this integration doesn't need to act on (e.g. transfer/refund events).
  return
}
