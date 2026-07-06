import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { reservationExpiredEmail, sendEmail } from '@/src/lib/email'

// Frees any 'reserved' (unpaid) booking whose deposit deadline has passed —
// the whole point of book-now-pay-later is that someone else can have the
// spot if payment never came through. Same auth convention as the other
// cron routes: Vercel attaches `Authorization: Bearer $CRON_SECRET`
// automatically when that env var is set.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[cron/expire-reservations] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  // Single equality filter — same reasoning as the other cron/list routes:
  // combining it with a range filter on depositDeadline would need a
  // composite index. Reserved bookings are a small, transient set.
  const snap = await adminDb.collection('bookings').where('status', '==', 'reserved').limit(500).get()
  const now = Date.now()
  let expired = 0

  for (const doc of snap.docs) {
    const booking = doc.data()
    if (!booking.depositDeadline || new Date(booking.depositDeadline).getTime() >= now) continue

    await doc.ref.update({ status: 'expired', expiredAt: new Date().toISOString() })
    await adminDb.doc(`sessions/${booking.sessionId}`).update({ bookedCount: FieldValue.increment(-1) })
    expired++

    if (booking.email) {
      const sessionSnap = await adminDb.doc(`sessions/${booking.sessionId}`).get()
      const session = sessionSnap.exists ? sessionSnap.data()! : null
      const mail = reservationExpiredEmail({
        name: booking.name ?? '',
        childName: booking.childName ?? '',
        topic: session?.topic ?? booking.childName ?? '',
        date: session?.date ?? '',
        time: session?.time ?? '',
      })
      await sendEmail(booking.email, mail.subject, mail.html, mail.from)
    }
  }

  return Response.json({ ok: true, expired })
}
