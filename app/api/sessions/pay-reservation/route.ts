import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, initializeTransaction } from '@/src/lib/paystack'

// Pays for an existing 'reserved' booking before its deposit deadline — the
// same booking doc is reused (not a new one), so the Paystack webhook updates
// this exact reservation to 'paid' rather than creating a duplicate.
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
    console.error('[sessions/pay-reservation] Firebase Admin not configured', err)
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
  if (booking.status !== 'reserved') return new Response('This reservation is no longer pending payment', { status: 409 })
  if (booking.depositDeadline && new Date(booking.depositDeadline).getTime() < Date.now()) {
    return new Response('The payment deadline for this reservation has passed', { status: 409 })
  }

  const sessionSnap = await adminDb.doc(`sessions/${booking.sessionId}`).get()
  const session = sessionSnap.exists ? sessionSnap.data()! : null
  if (!session) return new Response('Session not found', { status: 404 })

  const config = getPaystackConfig()
  const baseUrl = process.env.PAYSTACK_CALLBACK_BASE_URL ?? 'http://localhost:3000'
  const amount = typeof booking.amount === 'number' ? booking.amount : 0

  const initResult = await initializeTransaction(config, {
    email: booking.email ?? '',
    amountRands: amount,
    reference: `${bookingId}_${Date.now()}`,
    callbackUrl: `${baseUrl}/live-classes?payment=return`,
    metadata: { kind: 'session_booking', uid, bookingId },
  })
  if (!initResult.ok || !initResult.data?.authorization_url) {
    console.error('[sessions/pay-reservation] transaction init failed', { uid, bookingId, status: initResult.status, message: initResult.message })
    return new Response('Could not start payment. Please try again.', { status: 502 })
  }

  return Response.json({ authorization_url: initResult.data.authorization_url })
}
