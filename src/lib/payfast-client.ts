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

// Once-off payment for a live-session booking (live-classes page). Every
// account's first-ever session booking is free — the server confirms it
// instantly with no PayFast round trip, signalled by { free: true } instead
// of { action, fields }. For every booking after that, the server prices it
// from the session type and the active child's tier, and the browser is
// redirected to PayFast (does not return normally in that case). Throws
// CheckoutError with the server's reason ('Session is full', 'Already
// booked', …) so the page can react specifically.
export async function initiateSessionBooking(fbUser: FirebaseUser, sessionId: string): Promise<{ free: boolean }> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/sessions/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, sessionId }),
  })
  if (!res.ok) {
    throw new CheckoutError(await res.text().catch(() => 'Could not start booking.'))
  }
  const data = await res.json()
  if (data.free) return { free: true }
  submitPayfastForm(data.action, data.fields)
  return { free: false }
}
