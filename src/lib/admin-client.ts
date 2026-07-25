import type { User as FirebaseUser } from 'firebase/auth'

export class AdminActionError extends Error {}

// Cancels a published session and notifies every active booking against it —
// server re-checks the caller is the tutor account regardless of what the
// client believes; this just calls that route.
export async function cancelSession(fbUser: FirebaseUser, sessionId: string): Promise<{ affected: number; notified: number }> {
  const idToken = await fbUser.getIdToken()
  const res = await fetch('/api/admin/cancel-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken, sessionId }),
  })
  if (!res.ok) {
    throw new AdminActionError(await res.text().catch(() => 'Could not cancel the session.'))
  }
  return res.json()
}
