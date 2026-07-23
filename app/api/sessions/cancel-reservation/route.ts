import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'

// Lets a student cancel their own unpaid reservation any time before the
// deposit deadline. No payment was taken, so there's nothing to refund —
// this just releases the held spot back to the session.
export async function POST(req: NextRequest) {
  const { idToken, bookingId } = await req.json().catch(() => ({})) as {
    idToken?: string
    bookingId?: string
  }
  if (!idToken || !bookingId) return new Response('Bad request', { status: 400 })

  let adminDb, adminAuth
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[sessions/cancel-reservation] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const bookingRef = adminDb.doc(`bookings/${bookingId}`)
  const bookingSnap = await bookingRef.get()
  if (!bookingSnap.exists) return new Response('Booking not found', { status: 404 })
  const booking = bookingSnap.data()!
  if (booking.uid !== uid) return new Response('Forbidden', { status: 403 })

  // Re-check status fresh inside a transaction, and make the status write and
  // the bookedCount decrement one atomic unit — a plain read-then-write here
  // both risks acting on a stale status (e.g. the booking got paid a moment
  // ago) and risks a lost/duplicated decrement if this races another writer
  // of the same session doc.
  const cancelled = await adminDb.runTransaction(async (tx) => {
    const freshSnap = await tx.get(bookingRef)
    if (!freshSnap.exists) return false
    const freshBooking = freshSnap.data()!
    if (freshBooking.status !== 'reserved') return false
    tx.update(bookingRef, { status: 'cancelled', cancelledAt: new Date().toISOString() })
    tx.update(adminDb.doc(`sessions/${freshBooking.sessionId}`), { bookedCount: FieldValue.increment(-1) })
    return true
  })
  if (!cancelled) return new Response('Only an unpaid reservation can be cancelled this way', { status: 409 })

  return Response.json({ ok: true })
}
