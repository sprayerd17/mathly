import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { sendEmail, sessionReminderEmail } from '@/src/lib/email'

// Sends "your session is tomorrow" / "starting soon" emails to paid
// attendees. Meant to be hit by an external cron on an hourly cadence (see
// vercel.json) — auth is a shared secret header, not the admin session
// cookie, since no human is present when this fires.
//
// Windows are 2 hours wide so an hourly cron can't miss a session between
// runs: the 24h reminder fires once between 23–25h before start, the 1h
// reminder once between 0.5–1.5h before start. Each booking is marked once
// it's been sent, so a session landing in a window twice never double-sends.
const HOUR = 60 * 60 * 1000
const WINDOWS = {
  '24h': { min: 23 * HOUR, max: 25 * HOUR, flag: 'reminder24hSent' },
  '1h': { min: 0.5 * HOUR, max: 1.5 * HOUR, flag: 'reminder1hSent' },
} as const

// Vercel Cron triggers a GET request and, when CRON_SECRET is set as a
// project env var, automatically attaches `Authorization: Bearer
// <CRON_SECRET>` — this checks against that convention directly rather than
// a custom header.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[cron/session-reminders] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  // Single equality filter — same reasoning as /api/sessions/list: avoid the
  // composite-index requirement a date range would add, filter in code
  // instead. Session volume is small.
  const sessionsSnap = await adminDb.collection('sessions').where('status', '==', 'published').limit(200).get()
  const now = Date.now()

  let sent24h = 0
  let sent1h = 0

  for (const sessionDoc of sessionsSnap.docs) {
    const session = sessionDoc.data()
    const startsAt = new Date(`${session.date}T${session.time ?? '00:00'}:00`).getTime()
    if (Number.isNaN(startsAt)) continue
    const msUntilStart = startsAt - now

    for (const [windowKey, cfg] of Object.entries(WINDOWS) as [keyof typeof WINDOWS, typeof WINDOWS[keyof typeof WINDOWS]][]) {
      if (msUntilStart < cfg.min || msUntilStart > cfg.max) continue

      const bookingsSnap = await adminDb.collection('bookings')
        .where('sessionId', '==', sessionDoc.id)
        .where('status', '==', 'paid')
        .get()

      for (const bookingDoc of bookingsSnap.docs) {
        const booking = bookingDoc.data()
        if (booking[cfg.flag] === true || !booking.email) continue

        const mail = sessionReminderEmail({
          name: booking.name ?? '',
          childName: booking.childName ?? '',
          topic: session.topic ?? '',
          date: session.date ?? '',
          time: session.time ?? '',
          durationMins: typeof session.durationMins === 'number' ? session.durationMins : 60,
          meetLink: booking.meetLink ?? session.meetLink ?? '',
          window: windowKey,
        })
        const ok = await sendEmail(booking.email, mail.subject, mail.html, mail.from)
        // Mark sent even if Resend isn't configured yet — prevents a burst of
        // reminders the moment a key finally gets added weeks late for a
        // session that already happened.
        await bookingDoc.ref.update({ [cfg.flag]: true })
        if (ok) windowKey === '24h' ? sent24h++ : sent1h++
      }
    }
  }

  return Response.json({ ok: true, sent24h, sent1h })
}
