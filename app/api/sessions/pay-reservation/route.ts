import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature } from '@/src/lib/payfast'

// Pays for an existing 'reserved' booking before its deposit deadline — the
// same booking doc is reused (not a new one), so the ITN webhook updates
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

  const config = getPayfastConfig()
  const notifyBase = process.env.PAYFAST_NOTIFY_BASE_URL ?? 'http://localhost:3000'
  const amountStr = (typeof booking.amount === 'number' ? booking.amount : 0).toFixed(2)
  const itemName = `Mathly Live Session - ${String(session.topic ?? '')}`.slice(0, 100)

  const fields: Record<string, string> = {
    merchant_id: config.merchantId,
    merchant_key: config.merchantKey,
    return_url: `${notifyBase}/live-classes?payment=success`,
    cancel_url: `${notifyBase}/live-classes?payment=cancelled`,
    notify_url: `${notifyBase}/api/payfast/notify`,
    name_first: booking.name ?? '',
    email_address: booking.email ?? '',
    m_payment_id: bookingId,
    amount: amountStr,
    item_name: itemName,
    custom_str1: 'session_booking',
    custom_str2: uid,
    custom_str3: bookingId,
  }
  const signature = generateSignature(fields, config.passphrase)

  return Response.json({
    action: config.processUrl,
    fields: { ...fields, signature },
  })
}
