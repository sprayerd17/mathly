import type { User as FirebaseUser } from 'firebase/auth'

export class AccountDeleteError extends Error {}

// Permanently deletes the caller's own account — see
// app/api/account/delete/route.ts for what this actually removes.
export async function deleteAccount(fbUser: FirebaseUser): Promise<void> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/account/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  })
  if (!res.ok) {
    throw new AccountDeleteError(await res.text().catch(() => 'Could not delete your account. Please try again or contact support.'))
  }
}
