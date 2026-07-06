import { NextRequest } from 'next/server'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPayfastConfig, generateSignature } from '@/src/lib/payfast'
import { sessionPriceFor, type SessionType } from '@/src/lib/sessions'
import { bookingConfirmedEmail, sendEmail } from '@/src/lib/email'
import type { Tier } from '@/src/lib/pricing'

// Books the signed-in account's ACTIVE child onto a live session as a
// once-off PayFast payment (unlike the subscription checkout). The price is
// computed server-side from the session type and the child's tier (Guided
// gets 20% off) — the client sends only a session id. The booking starts as
// 'pending' and holds no spot; the ITN webhook flips it to 'paid' and
// increments the session's bookedCount once the money actually arrives.
//
// Exception: every CHILD gets exactly one free session ever (lowers the
// barrier to trying a session at all, regardless of tier) — freeSessionClaimed
// is index-aligned with children, same as childPlans. That booking skips
// PayFast entirely — it's confirmed instantly, server-side, since there's no
// payment to verify.
export async function POST(req: NextRequest) {
  const { idToken, sessionId } = await req.json().catch(() => ({})) as {
    idToken?: string
    sessionId?: string
  }
  if (!idToken || !sessionId) return new Response('Bad request', { status: 400 })

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

  const [userSnap, sessionSnap] = await Promise.all([
    adminDb.doc(`users/${uid}`).get(),
    adminDb.doc(`sessions/${sessionId}`).get(),
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

  // Capacity — spots of 0 means uncapped (crash courses).
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

  // One paid seat per child per session.
  const existing = await adminDb.collection('bookings')
    .where('sessionId', '==', sessionId)
    .where('uid', '==', uid)
    .where('status', '==', 'paid')
    .limit(5)
    .get()
  if (existing.docs.some(d => d.data().childName === child.name)) {
    return new Response('Already booked', { status: 409 })
  }

  const type: SessionType = session.type === 'crash' ? 'crash' : 'lesson'
  const amount = sessionPriceFor(type, tier)
  const freeSessionClaimed: boolean[] = Array.isArray(userData.freeSessionClaimed) ? userData.freeSessionClaimed : []
  const claimingFreeSession = freeSessionClaimed[idx] !== true

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
      tx.update(adminDb.doc(`sessions/${sessionId}`), { bookedCount: FieldValue.increment(1) })
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
        await sendEmail(userData.email, mail.subject, mail.html)
      }
      return Response.json({ free: true, ok: true })
    }
  }

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

  const config = getPayfastConfig()
  const notifyBase = process.env.PAYFAST_NOTIFY_BASE_URL ?? 'http://localhost:3000'
  const amountStr = amount.toFixed(2)
  // PayFast caps item_name at 100 chars.
  const itemName = `Mathly Live Session - ${String(session.topic ?? '')}`.slice(0, 100)

  // Once-off payment — no subscription fields. custom_str1 is the marker the
  // ITN webhook branches on; custom_str3 carries the booking to confirm.
  const fields: Record<string, string> = {
    merchant_id: config.merchantId,
    merchant_key: config.merchantKey,
    return_url: `${notifyBase}/live-classes?payment=success`,
    cancel_url: `${notifyBase}/live-classes?payment=cancelled`,
    notify_url: `${notifyBase}/api/payfast/notify`,
    name_first: userData.name ?? '',
    email_address: userData.email ?? '',
    m_payment_id: bookingRef.id,
    amount: amountStr,
    item_name: itemName,
    custom_str1: 'session_booking',
    custom_str2: uid,
    custom_str3: bookingRef.id,
  }
  const signature = generateSignature(fields, config.passphrase)

  return Response.json({
    action: config.processUrl,
    fields: { ...fields, signature },
  })
}
