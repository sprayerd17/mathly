import type { User as FirebaseUser } from 'firebase/auth'
import type { Tier } from '@/src/lib/pricing'

// Builds a hidden, auto-submitting form and posts it to PayFast — the standard
// integration pattern (avoids a client-side redirect race, works without any JS
// beyond this initial submit). The field order here is whatever order the
// checkout route returned them in, which must exactly match the order used to
// generate the signature server-side.
export function submitPayfastForm(action: string, fields: Record<string, string>) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = action

  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
}

export class CheckoutError extends Error {}

// Shared by the pricing page's "claim your spot" button and by registration
// (when a paid tier is chosen for any child at signup). Redirects the browser
// to PayFast on success — does not return normally in that case. childTiers
// is index-aligned with the account's children, one entry per person
// (including 'free' entries for anyone not being upgraded).
export async function initiateCheckout(
  fbUser: FirebaseUser,
  childTiers: Tier[],
  founding: { pro: boolean; guided: boolean }
) {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/payfast/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, childTiers, founding }),
  })
  if (!res.ok) {
    throw new CheckoutError('Could not start checkout. Please try again.')
  }
  const { action, fields } = await res.json()
  submitPayfastForm(action, fields)
}

// Books a spot on a live session (live-classes page). The student picks the
// intent explicitly via two separate buttons:
//   'reserve'  — hold the spot, no payment yet (only offered >48h before start)
//   'pay_now'  — pay immediately via PayFast, any time before the session
// Three possible response shapes (no PayFast redirect happens in the first
// two cases):
//   { free: true }               — this child's one-ever free session, confirmed instantly
//   { reserved: true, ... }      — 'reserve' succeeded: spot held, pay later
//   otherwise                    — 'pay_now': redirected to PayFast now
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
  submitPayfastForm(data.action, data.fields)
  return { free: false, reserved: false }
}

// Pays an existing reservation before its deposit deadline — same booking
// doc, no new one created. Redirects to PayFast on success.
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
  const { action, fields } = await res.json()
  submitPayfastForm(action, fields)
}

// Cancels the caller's own unpaid reservation — no payment was made, so
// there's nothing to refund, just releases the held spot.
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
