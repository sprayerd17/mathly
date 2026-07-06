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

  const userSnap = await adminDb.doc(`users/${uid}`).get()
  if (!userSnap.exists) {
    return new Response('User not found', { status: 404 })
  }
  const userData = userSnap.data()!
  if (userData.email) {
    const mail = welcomeEmail({ name: userData.name ?? '' })
    await sendEmail(userData.email, mail.subject, mail.html, mail.from)
  }

  return new Response(null, { status: 200 })
}
