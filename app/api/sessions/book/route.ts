import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, initializeTransaction } from '@/src/lib/paystack'
import { sessionPriceFor, depositDeadlineFor, type SessionType } from '@/src/lib/sessions'
import { bookingConfirmedEmail, reservationHeldEmail, sendEmail } from '@/src/lib/email'
import type { Tier } from '@/src/lib/pricing'

// Books the signed-in account's ACTIVE child onto a live session. The
// student explicitly chooses how via `intent`, offered as two separate
// buttons on the live-classes page:
//
// intent 'reserve' — holds the spot as a 'reserved' booking with no payment
// yet — bookedCount increments right away since the spot really is taken.
// The student has until depositDeadline (session start − 48h) to pay via
// /api/sessions/pay-reservation or cancel it themselves via
// /api/sessions/cancel-reservation. A cron sweep
// (app/api/cron/expire-reservations) frees any reservation that reaches its
// deadline unpaid. Only available more than 48h before the session starts —
// there'd be no runway left to pay otherwise.
//
// intent 'pay_now' — always goes straight to Paystack, any time before the
// session starts, for anyone who'd rather commit immediately instead of
// holding a reservation. The booking starts 'pending' and holds no spot;
// the webhook flips it to 'paid' and increments bookedCount once the
// money actually arrives.
//
// Exception: every PAID child (Pro or Guided) gets exactly one free session
// ever — freeSessionClaimed is index-aligned with children, same as
// childPlans. That booking skips Paystack entirely — it's confirmed instantly,
// server-side, since there's no payment to verify, regardless of which
// button was clicked. Free-tier children never qualify: a Free account costs
// nothing to create, so offering a free session to every Free child would
// let anyone farm unlimited free sessions with throwaway email addresses.
export async function POST(req: NextRequest) {
  const { idToken, sessionId, intent } = await req.json().catch(() => ({})) as {
    idToken?: string
    sessionId?: string
    intent?: string
  }
  if (!idToken || !sessionId) return new Response('Bad request', { status: 400 })
  if (intent !== 'reserve' && intent !== 'pay_now') return new Response('Bad request: invalid intent', { status: 400 })

  let adminDb, adminAuth
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[sessions/book] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const sessionRef = adminDb.doc(`sessions/${sessionId}`)
  const [userSnap, sessionSnap] = await Promise.all([
    adminDb.doc(`users/${uid}`).get(),
    sessionRef.get(),
  ])
  if (!userSnap.exists) return new Response('User not found', { status: 404 })
  if (!sessionSnap.exists) return new Response('Session not found', { status: 404 })

  const userData = userSnap.data()!
  const session = sessionSnap.data()!

  if (session.status !== 'published') return new Response('Session not open for booking', { status: 409 })

  // No bookings for sessions that already started.
  const startsAt = new Date(`${session.date}T${session.time ?? '00:00'}:00`)
  if (Number.isNaN(startsAt.getTime()) || startsAt.getTime() < Date.now()) {
    return new Response('Session already started', { status: 409 })
  }

  // Capacity — spots of 0 means uncapped (crash courses). bookedCount
  // reflects reserved + paid bookings; 'pending' (mid-immediate-checkout)
  // ones don't count until confirmed, same as always.
  const spots = typeof session.spots === 'number' ? session.spots : 0
  const bookedCount = typeof session.bookedCount === 'number' ? session.bookedCount : 0
  if (spots > 0 && bookedCount >= spots) {
    return new Response('Session is full', { status: 409 })
  }

  const children = Array.isArray(userData.children) ? userData.children : []
  const childPlans: Tier[] = Array.isArray(userData.childPlans) ? userData.childPlans : []
  const idx = Math.min(Math.max(typeof userData.activeChildIndex === 'number' ? userData.activeChildIndex : 0, 0), Math.max(children.length - 1, 0))
  const child = children[idx]
  if (!child) return new Response('No child profile on account', { status: 409 })
  const tier: Tier = childPlans[idx] ?? 'free'

  // One held seat (paid or still-reserved) per child per session.
  const existing = await adminDb.collection('bookings')
    .where('sessionId', '==', sessionId)
    .where('uid', '==', uid)
    .get()
  if (existing.docs.some(d => {
    const b = d.data()
    return b.childName === child.name && (b.status === 'paid' || b.status === 'reserved')
  })) {
    return new Response('Already booked', { status: 409 })
  }

  const type: SessionType = session.type === 'crash' ? 'crash' : 'lesson'
  const amount = sessionPriceFor(type, tier)
  const freeSessionClaimed: boolean[] = Array.isArray(userData.freeSessionClaimed) ? userData.freeSessionClaimed : []
  const claimingFreeSession = tier !== 'free' && freeSessionClaimed[idx] !== true

  if (claimingFreeSession) {
    const bookingRef = adminDb.collection('bookings').doc()
    const userRef = adminDb.doc(`users/${uid}`)
    await adminDb.runTransaction(async tx => {
      // Re-read inside the transaction — two concurrent bookings for the
      // same child must not both land free.
      const freshUser = await tx.get(userRef)
      const freshData = freshUser.data() ?? {}
      const freshClaimed: boolean[] = Array.isArray(freshData.freeSessionClaimed) ? freshData.freeSessionClaimed : []
      if (freshClaimed[idx] === true) {
        throw new Error('free_session_already_claimed')
      }
      // Firestore has no atomic "set element at index" — pad to at least
      // idx+1 entries (accounts created before this field existed may have
      // no array at all) and write the whole array back.
      const freshChildren = Array.isArray(freshData.children) ? freshData.children : children
      const updatedClaimed = Array.from({ length: freshChildren.length }, (_, i) => freshClaimed[i] === true)
      updatedClaimed[idx] = true
      tx.set(bookingRef, {
        sessionId,
        uid,
        childName: child.name ?? '',
        name: userData.name ?? '',
        email: userData.email ?? '',
        grade: typeof session.grade === 'number' ? session.grade : null,
        amount: 0,
        status: 'paid',
        paidAt: new Date().toISOString(),
        meetLink: session.meetLink ?? '',
        createdAt: FieldValue.serverTimestamp(),
      })
      tx.update(userRef, { freeSessionClaimed: updatedClaimed })
      tx.update(sessionRef, { bookedCount: FieldValue.increment(1) })
    }).catch(async err => {
      // Lost the race to another concurrent request — fall through to a
      // normal paid booking instead of failing the request outright.
      if (err instanceof Error && err.message === 'free_session_already_claimed') return
      throw err
    })

    // Re-check: the transaction only *sets* the booking when it wins the
    // race. If it lost, retry as a normal paid booking below instead of
    // silently returning nothing.
    const confirmedFree = (await bookingRef.get()).exists
    if (confirmedFree) {
      if (userData.email) {
        const mail = bookingConfirmedEmail({
          name: userData.name ?? '',
          childName: child.name ?? '',
          topic: session.topic ?? '',
          date: session.date ?? '',
          time: session.time ?? '',
          durationMins: typeof session.durationMins === 'number' ? session.durationMins : 60,
          amount: 0,
          meetLink: session.meetLink ?? '',
        })
        await sendEmail(userData.email, mail.subject, mail.html, mail.from)
      }
      return Response.json({ free: true, ok: true })
    }
  }

  const depositDeadline = depositDeadlineFor(startsAt)
  const withinDepositWindow = depositDeadline.getTime() <= Date.now()

  if (intent === 'reserve' && withinDepositWindow) {
    return new Response('Too close to the session start to reserve — pay now instead.', { status: 409 })
  }

  // ── "Save my spot": reserve, no payment yet ──────────────────────────────
  if (intent === 'reserve') {
    const bookingRef = adminDb.collection('bookings').doc()
    let full = false
    await adminDb.runTransaction(async tx => {
      const freshSession = await tx.get(sessionRef)
      const freshSpots = typeof freshSession.data()?.spots === 'number' ? freshSession.data()!.spots : 0
      const freshBooked = typeof freshSession.data()?.bookedCount === 'number' ? freshSession.data()!.bookedCount : 0
      if (freshSpots > 0 && freshBooked >= freshSpots) {
        full = true
        return
      }
      tx.set(bookingRef, {
        sessionId,
        uid,
        childName: child.name ?? '',
        name: userData.name ?? '',
        email: userData.email ?? '',
        grade: typeof session.grade === 'number' ? session.grade : null,
        amount,
        status: 'reserved',
        depositDeadline: depositDeadline.toISOString(),
        meetLink: '',
        createdAt: FieldValue.serverTimestamp(),
      })
      tx.update(sessionRef, { bookedCount: FieldValue.increment(1) })
    })
    if (full) return new Response('Session is full', { status: 409 })

    if (userData.email) {
      const mail = reservationHeldEmail({
        name: userData.name ?? '',
        childName: child.name ?? '',
        topic: session.topic ?? '',
        date: session.date ?? '',
        time: session.time ?? '',
        amount,
        depositDeadline: depositDeadline.toISOString(),
      })
      await sendEmail(userData.email, mail.subject, mail.html, mail.from)
    }
    return Response.json({ reserved: true, bookingId: bookingRef.id, depositDeadline: depositDeadline.toISOString() })
  }

  // ── "Complete payment": straight to Paystack, any time before the session ──
  const bookingRef = await adminDb.collection('bookings').add({
    sessionId,
    uid,
    childName: child.name ?? '',
    name: userData.name ?? '',
    email: userData.email ?? '',
    grade: typeof session.grade === 'number' ? session.grade : null,
    amount,
    status: 'pending',
    meetLink: '',
    createdAt: FieldValue.serverTimestamp(),
  })

  const config = getPaystackConfig()
  const baseUrl = process.env.PAYSTACK_CALLBACK_BASE_URL ?? 'http://localhost:3000'

  // Once-off payment — no plan. metadata.kind is the marker the webhook
  // branches on; metadata.bookingId carries the booking to confirm.
  const initResult = await initializeTransaction(config, {
    email: userData.email ?? '',
    amountRands: amount,
    reference: bookingRef.id,
    callbackUrl: `${baseUrl}/live-classes?payment=return`,
    metadata: { kind: 'session_booking', uid, bookingId: bookingRef.id },
  })
  if (!initResult.ok || !initResult.data?.authorization_url) {
    console.error('[sessions/book] transaction init failed', { uid, bookingId: bookingRef.id, status: initResult.status, message: initResult.message })
    return new Response('Could not start payment. Please try again.', { status: 502 })
  }

  return Response.json({ authorization_url: initResult.data.authorization_url })
}
