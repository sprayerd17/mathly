import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { sendEmail, sessionCancelledByTutorEmail } from '@/src/lib/email'
import { ADMIN_EMAIL } from '@/src/lib/admin'

// Tutor-only: cancels a published session and notifies every active
// (paid or reserved) booking against it. Refunds for paid bookings are
// handled manually by the tutor in the Paystack dashboard — not automated
// here, same as the pre-existing email template's own doctrine.
export async function POST(req: NextRequest) {
  const { idToken, sessionId } = await req.json().catch(() => ({})) as {
    idToken?: string
    sessionId?: string
  }
  if (!idToken || !sessionId) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[admin/cancel-session] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let email: string | undefined
  try {
    email = (await adminAuth.verifyIdToken(idToken)).email
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }
  if (email !== ADMIN_EMAIL) return new Response('Forbidden', { status: 403 })

  const sessionRef = adminDb.doc(`sessions/${sessionId}`)
  const sessionSnap = await sessionRef.get()
  if (!sessionSnap.exists) return new Response('Session not found', { status: 404 })
  const session = sessionSnap.data()!
  if (session.status === 'cancelled') return new Response('Session already cancelled', { status: 409 })

  await sessionRef.update({ status: 'cancelled' })

  // bookedCount is left alone — the session is dead either way, so it no
  // longer matters for capacity checks. Each affected booking is flipped to
  // 'cancelled' so the hourly session-reminders cron (which only reads
  // status == 'paid') never fires a reminder for a session that no longer
  // happens.
  const bookingsSnap = await adminDb.collection('bookings').where('sessionId', '==', sessionId).get()
  let notified = 0
  let affected = 0

  for (const doc of bookingsSnap.docs) {
    const booking = doc.data()
    if (booking.status !== 'paid' && booking.status !== 'reserved') continue
    affected++
    const wasPaid = booking.status === 'paid'
    await doc.ref.update({ status: 'cancelled', cancelledAt: new Date().toISOString() })

    if (booking.email) {
      const mail = sessionCancelledByTutorEmail({
        name: booking.name ?? '',
        childName: booking.childName ?? '',
        topic: session.topic ?? '',
        date: session.date ?? '',
        time: session.time ?? '',
        wasPaid,
      })
      const ok = await sendEmail(booking.email, mail.subject, mail.html, mail.from)
      if (ok) notified++
    }
  }

  return Response.json({ ok: true, affected, notified })
}
