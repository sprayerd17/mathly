import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { sendEmail, welcomeEmail } from '@/src/lib/email'

// Fired once right after registration succeeds — best-effort, matches the
// referral/attach pattern (client posts its fresh idToken, server verifies
// and looks up the account rather than trusting a client-supplied email).
export async function POST(req: NextRequest) {
  const { idToken } = await req.json() as { idToken?: string }
  if (!idToken) {
    return new Response('Bad request', { status: 400 })
  }

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[auth/welcome-email] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    const decoded = await adminAuth.verifyIdToken(idToken)
    uid = decoded.uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const userRef = adminDb.doc(`users/${uid}`)

  // This route is reachable by any signed-in user's own idToken, and
  // providers.tsx only calls it once at registration — but without a
  // server-side gate, that same idToken could be replayed to fire an
  // unbounded number of sends against one account. claimed here is only
  // true for the caller that actually flips welcomeEmailSent false -> true,
  // so a replay (or a race with a second concurrent call) is a no-op.
  const userData = await adminDb.runTransaction(async (tx) => {
    const snap = await tx.get(userRef)
    if (!snap.exists || snap.data()!.welcomeEmailSent) return null
    tx.update(userRef, { welcomeEmailSent: true })
    return snap.data()!
  })
  if (!userData) {
    return new Response(null, { status: 200 })
  }

  if (userData.email) {
    const mail = welcomeEmail({ name: userData.name ?? '' })
    await sendEmail(userData.email, mail.subject, mail.html, mail.from)
  }

  return new Response(null, { status: 200 })
}
