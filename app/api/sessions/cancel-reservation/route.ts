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
  if (booking.status !== 'reserved') return new Response('Only an unpaid reservation can be cancelled this way', { status: 409 })

  await bookingRef.update({ status: 'cancelled', cancelledAt: new Date().toISOString() })
  await adminDb.doc(`sessions/${booking.sessionId}`).update({ bookedCount: FieldValue.increment(-1) })

  return Response.json({ ok: true })
}
