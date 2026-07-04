import type { User as FirebaseUser } from 'firebase/auth'
import type { PackageValue } from '@/src/lib/pricing'

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
// (when a paid plan is chosen at signup). Redirects the browser to PayFast on
// success — does not return normally in that case.
export async function initiateCheckout(
  fbUser: FirebaseUser,
  targetPackage: PackageValue,
  isFounding: boolean
) {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/payfast/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, targetPackage, isFounding }),
  })
  if (!res.ok) {
    throw new CheckoutError('Could not start checkout. Please try again.')
  }
  const { action, fields } = await res.json()
  submitPayfastForm(action, fields)
}
