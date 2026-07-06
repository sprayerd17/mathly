import { NextRequest } from 'next/server'
import { FieldValue, type Firestore } from 'firebase-admin/firestore'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature, verifySourceIp } from '@/src/lib/payfast'
import { bookingConfirmedEmail, paymentFailedEmail, paymentReceiptEmail, sendEmail, sendOwnerAlert } from '@/src/lib/email'
import type { Plan, Tier } from '@/src/lib/pricing'

const OK = () => new Response(null, { status: 200 })

// Every ITN — accepted, failed or rejected — is recorded in the `payments`
// collection so the admin dashboard can build revenue history and flag
// webhooks that were dropped, instead of rejections vanishing into console
// logs. firestore.rules denies all client access to `payments`; only this
// route (Admin SDK) writes it.
async function logItn(
  adminDb: Firestore | null,
  fields: Record<string, string>,
  outcome: 'complete' | 'failed' | 'rejected',
  reason: string | null,
  kind: 'signup' | 'renewal' | 'session' | null,
) {
  // Rejections are anomalies (tampering, config drift, PayFast issues) — the
  // owner hears about them immediately rather than at the next dashboard
  // check. No-op until RESEND_API_KEY is configured.
  if (outcome === 'rejected') {
    await sendOwnerAlert(
      `Mathly: PayFast webhook rejected (${reason ?? 'unknown'})`,
      `<p>A PayFast notification was rejected.</p>
       <p>Reason: <strong>${reason ?? 'unknown'}</strong><br/>
       Account: ${fields.email_address ?? fields.custom_str2 ?? 'unknown'}<br/>
       Amount: R${fields.amount_gross ?? '?'}<br/>
       Payment status: ${fields.payment_status ?? '?'}</p>
       <p>Full details are on the dashboard's Overview tab.</p>`,
    ).catch(() => {})
  }
  if (!adminDb) return
  try {
    const amount = parseFloat(fields.amount_gross ?? '')
    await adminDb.collection('payments').add({
      receivedAt: FieldValue.serverTimestamp(),
      outcome,
      reason,
      kind,
      paymentStatus: fields.payment_status ?? null,
      uid: fields.custom_str2 ?? null,
      email: fields.email_address ?? null,
      amountGross: Number.isNaN(amount) ? null : amount,
      mPaymentId: fields.m_payment_id ?? null,
      pfPaymentId: fields.pf_payment_id ?? null,
      itemName: fields.item_name ?? null,
      childPlans: fields.custom_str1 ?? null,
      reviewed: false,
    })
  } catch (err) {
    console.error('[payfast/notify] could not log ITN to payments', err)
  }
}

// PayFast expects 200 regardless of outcome — a non-200 triggers retries, which
// is only useful for genuine delivery failures, not for "this ITN is invalid and
// we're intentionally ignoring it". Every rejection below returns 200 and simply
// skips the subscription write; logItn records what happened for the dashboard.
export async function POST(req: NextRequest) {
  let adminDb: Firestore | null = null
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
    await logItn(adminDb, fields, 'rejected', 'signature_mismatch', null)
    return OK()
  }

  // 2. Source IP check.
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? ''
  const ipValid = await verifySourceIp(ip)
  if (!ipValid) {
    console.error('[payfast/notify] source IP did not resolve to PayFast', { ip })
    await logItn(adminDb, fields, 'rejected', 'bad_source_ip', null)
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
      await logItn(adminDb, fields, 'rejected', 'validate_call_failed', null)
      return OK()
    }
  } catch (err) {
    console.error('[payfast/notify] validate call failed', err)
    await logItn(adminDb, fields, 'rejected', 'validate_call_failed', null)
    return OK()
  }

  // ── Once-off session-booking payments take their own path ───────────────
  // The booking checkout marks these with custom_str1 = 'session_booking'
  // (subscription checkouts carry a JSON tier array there instead) and puts
  // the pending booking's id in custom_str3.
  if (fields.custom_str1 === 'session_booking') {
    const bookingId = fields.custom_str3
    if (!bookingId) {
      await logItn(adminDb, fields, 'rejected', 'missing_custom_fields', 'session')
      return OK()
    }
    const bookingRef = adminDb.doc(`bookings/${bookingId}`)
    const bookingSnap = await bookingRef.get()
    if (!bookingSnap.exists) {
      console.error('[payfast/notify] booking not found', { bookingId })
      await logItn(adminDb, fields, 'rejected', 'booking_not_found', 'session')
      return OK()
    }
    const booking = bookingSnap.data()!
    if (booking.uid !== fields.custom_str2) {
      await logItn(adminDb, fields, 'rejected', 'booking_uid_mismatch', 'session')
      return OK()
    }
    const receivedBookingAmount = parseFloat(fields.amount_gross ?? '')
    if (Number.isNaN(receivedBookingAmount) || Math.abs(receivedBookingAmount - booking.amount) > 0.01) {
      console.error('[payfast/notify] booking amount mismatch', { bookingId, expected: booking.amount, receivedBookingAmount })
      await logItn(adminDb, fields, 'rejected', 'amount_mismatch', 'session')
      return OK()
    }
    if (fields.payment_status !== 'COMPLETE') {
      await bookingRef.update({ status: 'failed' })
      await logItn(adminDb, fields, 'failed', 'payment_not_complete', 'session')
      return OK()
    }
    if (booking.status === 'paid') {
      // PayFast retries deliveries — never double-count a spot.
      await logItn(adminDb, fields, 'complete', 'duplicate_itn', 'session')
      return OK()
    }

    const sessionRef = adminDb.doc(`sessions/${booking.sessionId}`)
    const sessionSnap = await sessionRef.get()
    const session = sessionSnap.exists ? sessionSnap.data()! : null

    // The paid booking gets its own copy of the Meet link (session docs are
    // never client-readable); if the link is only added later, the dashboard
    // propagates it to paid bookings when it's saved.
    await bookingRef.update({
      status: 'paid',
      paidAt: new Date().toISOString(),
      meetLink: session?.meetLink ?? '',
    })
    // A 'reserved' booking already incremented bookedCount the moment the
    // spot was held — only a fresh 'pending' (immediate-checkout) booking
    // still needs it counted now that payment actually arrived.
    if (session && booking.status !== 'reserved') {
      await sessionRef.update({ bookedCount: FieldValue.increment(1) })
    }
    await logItn(adminDb, fields, 'complete', null, 'session')

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

  const uid = fields.custom_str2
  if (!uid || !fields.custom_str1) {
    console.error('[payfast/notify] missing custom_str1/custom_str2', fields)
    await logItn(adminDb, fields, 'rejected', 'missing_custom_fields', null)
    return OK()
  }

  const userRef = adminDb.doc(`users/${uid}`)
  const userSnap = await userRef.get()
  if (!userSnap.exists) {
    console.error('[payfast/notify] user not found', { uid })
    await logItn(adminDb, fields, 'rejected', 'user_not_found', null)
    return OK()
  }
  const userData = userSnap.data()!

  const receivedAmount = parseFloat(fields.amount_gross ?? '')

  // No pending checkout on file? Then this is a recurring ITN for an existing
  // subscription (pendingChildPlans is cleared after the first COMPLETE).
  // These used to fall through the pendingChildPlans cross-check and get
  // silently rejected — meaning renewals never refreshed lastPaymentDate and
  // never showed up anywhere. The subscription token PayFast issued at signup
  // is the proof of identity here: it was written by this route (Admin SDK
  // only) and is unguessable, so a token match is a stronger check than
  // re-deriving prices we can't know founding-status for at renewal time.
  const expectedChildPlans: Tier[] | undefined | null = userData.pendingChildPlans
  if (!expectedChildPlans) {
    if (!fields.token || !userData.payfastToken || fields.token !== userData.payfastToken) {
      console.error('[payfast/notify] renewal token mismatch', { uid })
      await logItn(adminDb, fields, 'rejected', 'renewal_token_mismatch', 'renewal')
      return OK()
    }
    if (fields.payment_status !== 'COMPLETE') {
      // Only stamp pastDueSince the moment an account FIRST goes past_due —
      // resetting it on every retry would keep pushing the dunning clock
      // back and the account would never actually progress through it.
      await userRef.update({
        subscriptionStatus: 'past_due',
        ...(userData.subscriptionStatus !== 'past_due'
          ? { pastDueSince: new Date().toISOString(), dunningStage: 0 }
          : {}),
      })
      await logItn(adminDb, fields, 'failed', 'payment_not_complete', 'renewal')
      if (userData.email) {
        const mail = paymentFailedEmail({ name: userData.name ?? '' })
        await sendEmail(userData.email, mail.subject, mail.html, mail.from)
      }
      return OK()
    }
    if (Number.isNaN(receivedAmount)) {
      console.error('[payfast/notify] renewal amount missing', { uid })
      await logItn(adminDb, fields, 'rejected', 'amount_missing', 'renewal')
      return OK()
    }
    await userRef.update({
      subscriptionStatus: 'active',
      lastPaymentDate: new Date().toISOString(),
      lastPaymentAmount: receivedAmount,
      pastDueSince: null,
      dunningStage: null,
    })
    await logItn(adminDb, fields, 'complete', null, 'renewal')
    if (userData.email) {
      const mail = paymentReceiptEmail({ name: userData.name ?? '', amount: receivedAmount, item: fields.item_name ?? 'Mathly subscription' })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return OK()
  }

  // 4. Cross-check against what checkout actually quoted this user, rather than
  // recomputing a price blindly — closes the ambiguity of not knowing whether
  // the quoted rate was founding or full at ITN time. A plain string compare
  // is enough since custom_str1 is JSON.stringify'd from the same array shape
  // pendingChildPlans was written in at checkout time.
  if (JSON.stringify(expectedChildPlans) !== fields.custom_str1) {
    console.error('[payfast/notify] pendingChildPlans mismatch', {
      uid, expected: expectedChildPlans, received: fields.custom_str1,
    })
    await logItn(adminDb, fields, 'rejected', 'child_plans_mismatch', 'signup')
    return OK()
  }
  const expectedAmount = typeof userData.pendingAmount === 'number' ? userData.pendingAmount : null
  if (expectedAmount === null || Number.isNaN(receivedAmount) || Math.abs(receivedAmount - expectedAmount) > 0.01) {
    console.error('[payfast/notify] amount mismatch', { uid, expectedAmount, receivedAmount })
    await logItn(adminDb, fields, 'rejected', 'amount_mismatch', 'signup')
    return OK()
  }

  // All checks passed.
  if (fields.payment_status !== 'COMPLETE') {
    await userRef.update({
      subscriptionStatus: 'past_due',
      ...(userData.subscriptionStatus !== 'past_due'
        ? { pastDueSince: new Date().toISOString(), dunningStage: 0 }
        : {}),
    })
    await logItn(adminDb, fields, 'failed', 'payment_not_complete', 'signup')
    if (userData.email) {
      const mail = paymentFailedEmail({ name: userData.name ?? '' })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return OK()
  }

  await userRef.update({
    childPlans: expectedChildPlans,
    subscriptionStatus: 'active',
    payfastToken: fields.token ?? null,
    pendingChildPlans: null,
    pendingFounding: null,
    pendingAmount: null,
    lastPaymentDate: new Date().toISOString(),
    lastPaymentAmount: receivedAmount,
    pastDueSince: null,
    dunningStage: null,
  })

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
        subscribedTiers: expectedChildPlans,
      })
    }
  }

  await logItn(adminDb, fields, 'complete', null, 'signup')
  if (userData.email) {
    const mail = paymentReceiptEmail({ name: userData.name ?? '', amount: receivedAmount, item: fields.item_name ?? 'Mathly subscription' })
    await sendEmail(userData.email, mail.subject, mail.html, mail.from)
  }
  return OK()
}
