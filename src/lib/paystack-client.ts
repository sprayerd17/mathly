import type { User as FirebaseUser } from 'firebase/auth'
import type { Tier } from '@/src/lib/pricing'

export class CheckoutError extends Error {}

// Paystack's Initialize Transaction returns a single authorization_url —
// simpler than PayFast's action+fields auto-post form, just redirect.
function redirectToPaystack(authorizationUrl: string) {
  window.location.href = authorizationUrl
}

// Shared by the pricing page's "claim your spot" button and by registration
// (when a paid tier is chosen for any child at signup). Redirects the browser
// to Paystack on success — does not return normally in that case. childTiers
// is index-aligned with the account's children, one entry per person
// (including 'free' entries for anyone not being upgraded).
export async function initiateCheckout(
  fbUser: FirebaseUser,
  childTiers: Tier[],
  founding: { pro: boolean; guided: boolean }
) {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/paystack/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, childTiers, founding }),
  })
  if (!res.ok) {
    throw new CheckoutError('Could not start checkout. Please try again.')
  }
  const { authorization_url } = await res.json()
  redirectToPaystack(authorization_url)
}

// Books a spot on a live session (live-classes page). The student picks the
// intent explicitly via two separate buttons:
//   'reserve'  — hold the spot, no payment yet (only offered >48h before start)
//   'pay_now'  — pay immediately via Paystack, any time before the session
// Three possible response shapes (no Paystack redirect happens in the first
// two cases):
//   { free: true }               — this child's one-ever free session, confirmed instantly
//   { reserved: true, ... }      — 'reserve' succeeded: spot held, pay later
//   otherwise                    — 'pay_now': redirected to Paystack now
// Throws CheckoutError with the server's reason ('Session is full', 'Already
// booked', …) so the page can react specifically.
export async function initiateSessionBooking(
  fbUser: FirebaseUser,
  sessionId: string,
  intent: 'reserve' | 'pay_now',
): Promise<
  { free: true } | { reserved: true; bookingId: string; depositDeadline: string } | { free: false; reserved: false }
> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/sessions/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, sessionId, intent }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not start booking.'))
  }
  const data = await res.json()
  if (data.free) return { free: true }
  if (data.reserved) return { reserved: true, bookingId: data.bookingId, depositDeadline: data.depositDeadline }
  redirectToPaystack(data.authorization_url)
  return { free: false, reserved: false }
}

// Pays an existing reservation before its deposit deadline — same booking
// doc, no new one created. Redirects to Paystack on success.
export async function initiatePayReservation(fbUser: FirebaseUser, bookingId: string) {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/sessions/pay-reservation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, bookingId }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not start payment.'))
  }
  const { authorization_url } = await res.json()
  redirectToPaystack(authorization_url)
}

// Cancels the caller's own unpaid reservation — no payment was made, so
// there's nothing to refund, just releases the held spot. No gateway
// dependency at all — unchanged from the PayFast-era implementation.
export async function cancelReservation(fbUser: FirebaseUser, bookingId: string): Promise<void> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/sessions/cancel-reservation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, bookingId }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not cancel the reservation.'))
  }
}

// Cancels the caller's paid subscription. Access continues until the
// returned accessUntil date — the account isn't dropped to free immediately.
export async function cancelSubscription(fbUser: FirebaseUser): Promise<{ accessUntil: string }> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/paystack/cancel-subscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not cancel the subscription.'))
  }
  return res.json()
}

// Moves one child in a family plan to Free — the family's other children
// and the subscription itself are untouched; Paystack's billed amount is
// reduced starting next billing cycle (no proration/refund for the current
// one).
export async function downgradeChild(fbUser: FirebaseUser, childIndex: number): Promise<{ childPlans: Tier[]; newTotal: number }> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/paystack/downgrade-child', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, childIndex }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not move this child to the Free plan. Please try again.'))
  }
  return res.json()
}

// Changes an already-subscribed family's tier mix in place (any combination
// of upgrades/downgrades across children) by amending the existing Plan —
// no checkout redirect, since the change bills on the next cycle against
// the card already on file. Only valid once a subscription is active; a
// brand-new signup with no subscription yet must go through
// initiateCheckout() instead, which this does not replace.
export async function updateTiers(fbUser: FirebaseUser, childTiers: Tier[]): Promise<{ childPlans: Tier[]; newTotal: number }> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/paystack/update-tiers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, childTiers }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not update your plan. Please try again.'))
  }
  return res.json()
}
