import { getAdminDb } from '@/src/lib/firebase-admin'
import type { PublicSession, SessionType } from '@/src/lib/sessions'

// Public, sanitized list of upcoming published sessions. This exists because
// the sessions collection is closed to client reads entirely (see
// firestore.rules) — session docs carry the Google Meet link, the teacher's
// private notes and attendance, none of which may leak to browsers. Paid
// students receive the Meet link on their own booking doc and by email.
export async function GET() {
  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[sessions/list] Firebase Admin not configured', err)
    return Response.json({ sessions: [] })
  }

  // Single-field filter only — combining it with a date range would demand a
  // composite Firestore index (manual console step). Session volumes are tiny,
  // so past ones are filtered out in code below instead.
  const snap = await adminDb.collection('sessions')
    .where('status', '==', 'published')
    .limit(200)
    .get()

  const sessions: PublicSession[] = snap.docs
    .map(d => {
      const s = d.data()
      const type: SessionType = s.type === 'crash' ? 'crash' : 'lesson'
      return {
        id: d.id,
        date: s.date ?? '',
        time: s.time ?? '',
        durationMins: typeof s.durationMins === 'number' ? s.durationMins : 60,
        grade: typeof s.grade === 'number' ? s.grade : 0,
        topic: s.topic ?? '',
        description: s.description ?? '',
        language: s.language === 'af' ? 'af' as const : 'en' as const,
        type,
        price: typeof s.price === 'number' ? s.price : (type === 'crash' ? 50 : 100),
        // Sessions created before the spots field existed: lessons are capped
        // by nature (default 10), crash courses uncapped.
        spots: typeof s.spots === 'number' ? s.spots : (type === 'crash' ? 0 : 10),
        bookedCount: typeof s.bookedCount === 'number' ? s.bookedCount : 0,
      }
    })
    // Same-day sessions that already started drop off the list.
    .filter(s => new Date(`${s.date}T${s.time || '23:59'}:00`).getTime() > Date.now())
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))

  return Response.json({ sessions }, {
    headers: { 'Cache-Control': 'public, max-age=0, s-maxage=30, stale-while-revalidate=60' },
  })
}
