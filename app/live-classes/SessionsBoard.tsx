'use client'

import { useEffect, useMemo, useState } from 'react'
import { collection, getDocs, query, where, addDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/src/lib/firebase'
import { useAuth, getActiveChild, getActiveTier } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { initiateSessionBooking, initiatePayReservation, cancelReservation, CheckoutError } from '@/src/lib/payfast-client'
import { sessionPriceFor, type PublicSession } from '@/src/lib/sessions'

type MyBooking = {
  bookingId: string
  sessionId: string
  childName: string
  meetLink: string
  status: 'paid' | 'reserved'
  depositDeadline: string | null
}

// The bookable-sessions board: upcoming published sessions (served sanitized
// by /api/sessions/list — the sessions collection itself is closed to
// clients), each with a Book button that either holds the spot as an unpaid
// reservation (more than 48h out) or goes straight through PayFast (within
// 48h) — see /api/sessions/book. Full lessons offer "join the waitlist"
// instead, which lands in lessonRequests — the same collection the
// request-a-lesson form below writes to, so the dashboard sees all demand in
// one place.
export default function SessionsBoard({ sessions }: { sessions: PublicSession[] }) {
  const { user, openModal } = useAuth()
  const t = useTranslations()

  const [myBookings, setMyBookings] = useState<MyBooking[]>([])
  const [bookingId, setBookingId] = useState<string | null>(null)
  const [bookingError, setBookingError] = useState<{ id: string; message: string } | null>(null)
  const [waitlisted, setWaitlisted] = useState<Set<string>>(new Set())
  const [banner, setBanner] = useState<'success' | 'cancelled' | null>(null)
  const [reservedBanner, setReservedBanner] = useState<string | null>(null)
  const [cancelling, setCancelling] = useState<string | null>(null)
  // Optimistic flip the instant a free booking is confirmed — user.freeSessionClaimed
  // itself only refreshes on next sign-in/reload, so without this a second card
  // on the same page view would still (wrongly) offer the active child another
  // free session. Each child gets their own free session, so this only needs
  // to suppress re-offering to whichever child is currently active.
  const [freeClaimedThisVisit, setFreeClaimedThisVisit] = useState(false)

  const activeChild = user ? getActiveChild(user) : null
  const activeTier = user ? getActiveTier(user) : 'free'
  const freeSessionAvailable = !!user
    && user.freeSessionClaimed[user.activeChildIndex] !== true
    && !freeClaimedThisVisit

  // Payment return banner (?payment=success|cancelled) — read once on mount.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('payment')
    if (p === 'success' || p === 'cancelled') {
      setBanner(p)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  // The user's own paid + reserved bookings — powers "Booked ✓" / "Reserved,
  // pay by …" state and the Meet link.
  async function refreshMyBookings(uid: string) {
    const snap = await getDocs(query(
      collection(db, 'bookings'),
      where('uid', '==', uid),
      where('status', 'in', ['paid', 'reserved']),
    ))
    setMyBookings(snap.docs.map(d => ({
      bookingId: d.id,
      sessionId: d.data().sessionId ?? '',
      childName: d.data().childName ?? '',
      meetLink: d.data().meetLink ?? '',
      status: d.data().status === 'paid' ? 'paid' as const : 'reserved' as const,
      depositDeadline: d.data().depositDeadline ?? null,
    })))
  }
  useEffect(() => {
    if (!user) {
      setMyBookings([])
      return
    }
    refreshMyBookings(user.uid).catch(() => {})
  }, [user])

  const bookedBySession = useMemo(() => {
    const map = new Map<string, MyBooking>()
    for (const b of myBookings) map.set(b.sessionId, b)
    return map
  }, [myBookings])

  async function book(session: PublicSession) {
    if (!user) {
      openModal('login')
      return
    }
    setBookingError(null)
    setBookingId(session.id)
    try {
      const result = await initiateSessionBooking(auth.currentUser!, session.id)
      if ('free' in result && result.free) {
        // Free bookings are confirmed instantly server-side — no PayFast
        // redirect happens, so pull the real (now-paid) booking doc rather
        // than navigating away.
        setFreeClaimedThisVisit(true)
        await refreshMyBookings(user.uid)
        setBookingId(null)
      } else if ('reserved' in result && result.reserved) {
        await refreshMyBookings(user.uid)
        setReservedBanner(session.id)
        setBookingId(null)
      }
      // Otherwise the browser is already navigating to PayFast.
    } catch (err) {
      const raw = err instanceof CheckoutError ? err.message : ''
      const message = raw.includes('full') ? t.live_error_full
        : raw.includes('Already') ? t.live_error_already_booked
        : t.live_error_generic
      setBookingError({ id: session.id, message })
      setBookingId(null)
    }
  }

  async function payForReservation(b: MyBooking) {
    setBookingError(null)
    setBookingId(b.sessionId)
    try {
      await initiatePayReservation(auth.currentUser!, b.bookingId)
      // Browser is now navigating to PayFast.
    } catch {
      setBookingError({ id: b.sessionId, message: t.live_error_generic })
      setBookingId(null)
    }
  }

  async function cancelMyReservation(b: MyBooking) {
    if (!user) return
    setCancelling(b.bookingId)
    try {
      await cancelReservation(auth.currentUser!, b.bookingId)
      await refreshMyBookings(user.uid)
    } catch {
      // best-effort — leave the reservation in place so they can retry
    } finally {
      setCancelling(null)
    }
  }

  async function joinWaitlist(session: PublicSession) {
    if (!user) {
      openModal('login')
      return
    }
    try {
      await addDoc(collection(db, 'lessonRequests'), {
        uid: user.uid,
        name: user.name,
        email: user.email,
        grade: session.grade,
        topic: session.topic,
        details: '',
        sessionId: session.id,
        createdAt: serverTimestamp(),
      })
      setWaitlisted(prev => new Set(prev).add(session.id))
    } catch {
      // best-effort — button stays available for retry
    }
  }

  return (
    <section className="px-6 py-14 max-w-3xl mx-auto">
      {banner && (
        <div
          className="mb-8 rounded-xl px-5 py-4 text-sm font-medium"
          style={banner === 'success'
            ? { backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }
            : { backgroundColor: '#fef3c7', color: '#92400e', border: '1px solid #fde68a' }}
        >
          {banner === 'success' ? t.live_payment_success_banner : t.live_payment_cancelled_banner}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
        {t.live_upcoming_heading}
      </h2>
      <p className="text-sm text-gray-500 mb-4">{t.live_upcoming_subheading}</p>

      {/* Explains the book-now-pay-later workflow */}
      <div className="rounded-xl px-5 py-4 mb-8 text-sm leading-relaxed" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e3a8a' }}>
        {t.live_how_booking_works_text}
      </div>

      <div className="flex flex-col gap-5">
        {sessions.map(s => {
          const isLesson = s.type === 'lesson'
          const spotsLeft = s.spots > 0 ? Math.max(0, s.spots - s.bookedCount) : null
          const isFull = spotsLeft !== null && spotsLeft === 0
          const booked = bookedBySession.get(s.id)
          const price = user ? sessionPriceFor(s.type, activeTier) : s.price
          const discounted = user && activeTier === 'guided'
          const isFree = freeSessionAvailable && !booked
          const dateLabel = new Date(`${s.date}T${s.time || '00:00'}:00`).toLocaleDateString(
            s.language === 'af' ? 'af-ZA' : 'en-ZA',
            { weekday: 'long', day: 'numeric', month: 'long' },
          )
          const deadlineLabel = booked?.status === 'reserved' && booked.depositDeadline
            ? new Date(booked.depositDeadline).toLocaleString(s.language === 'af' ? 'af-ZA' : 'en-ZA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
            : null

          return (
            <div key={s.id} className="bg-white rounded-2xl shadow-sm p-6" style={{ border: '1px solid #e5e7eb' }}>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={isLesson
                    ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                    : { backgroundColor: '#fef3c7', color: '#92400e' }}
                >
                  {isLesson ? t.live_type_lesson_badge : t.live_type_crash_badge}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
                  {t.dash_grade_label.replace('{grade}', String(s.grade))}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
                  {s.language === 'af' ? t.topic_language_afrikaans : t.topic_language_english}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-1" style={{ color: '#0f1f3d' }}>{s.topic}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {dateLabel} · {s.time} · {s.durationMins} min
              </p>
              {s.description && (
                <p className="text-sm text-gray-500 leading-relaxed mb-4 whitespace-pre-line">
                  {s.description.split('\n')[0]}
                </p>
              )}
              <p className="text-xs text-gray-400 mb-4">
                {isLesson ? t.live_type_lesson_detail : t.live_type_crash_detail}
              </p>

              {reservedBanner === s.id && booked?.status === 'reserved' && (
                <div className="rounded-lg px-4 py-3 mb-4 text-xs font-medium" style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}>
                  {t.live_reservation_held_note.replace('{deadline}', deadlineLabel ?? '')}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: '#f3f4f6' }}>
                <div>
                  <p className="text-xl font-bold" style={{ color: '#0f1f3d' }}>
                    {isFree ? (
                      <>
                        <span style={{ color: '#15803d' }}>{t.live_free_price_label}</span>
                        <span className="ml-2 text-sm font-medium line-through" style={{ color: '#9ca3af' }}>R{price}</span>
                      </>
                    ) : (
                      <>
                        R{price}
                        {discounted && (
                          <span className="ml-2 text-xs font-semibold align-middle" style={{ color: '#15803d' }}>
                            {t.live_guided_discount_note.replace('{price}', String(s.price))}
                          </span>
                        )}
                      </>
                    )}
                  </p>
                  {isFree && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#15803d' }}>{t.live_first_session_free_note}</p>
                  )}
                  {booked?.status === 'reserved' && deadlineLabel && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#b45309' }}>
                      {t.live_pay_by_label.replace('{deadline}', deadlineLabel)}
                    </p>
                  )}
                  {!booked && spotsLeft !== null && !isFull && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: spotsLeft <= 3 ? '#b45309' : '#6b7280' }}>
                      {t.live_spots_left.replace('{count}', String(spotsLeft)).replace('{total}', String(s.spots))}
                    </p>
                  )}
                  {!booked && isFull && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#b91c1c' }}>{t.live_full_label}</p>
                  )}
                </div>

                {booked?.status === 'paid' ? (
                  <div className="text-right">
                    <span className="inline-block text-sm font-bold px-4 py-2 rounded-xl" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>
                      {t.live_booked_badge.replace('{child}', booked.childName)}
                    </span>
                    {booked.meetLink && (
                      <a
                        href={booked.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs font-semibold mt-1.5 hover:underline"
                        style={{ color: '#1e40af' }}
                      >
                        {t.live_meet_link_label}
                      </a>
                    )}
                  </div>
                ) : booked?.status === 'reserved' ? (
                  <div className="flex flex-col items-end gap-1.5">
                    <button
                      onClick={() => payForReservation(booked)}
                      disabled={bookingId === s.id}
                      className="text-sm font-bold px-5 py-2 rounded-xl text-white transition-colors disabled:opacity-60"
                      style={{ backgroundColor: '#1e40af' }}
                    >
                      {bookingId === s.id ? t.live_book_button_busy : t.live_pay_now_button}
                    </button>
                    <button
                      onClick={() => cancelMyReservation(booked)}
                      disabled={cancelling === booked.bookingId}
                      className="text-xs font-semibold hover:underline"
                      style={{ color: '#6b7280' }}
                    >
                      {cancelling === booked.bookingId ? t.live_cancelling_label : t.live_cancel_reservation_button}
                    </button>
                  </div>
                ) : isFull ? (
                  waitlisted.has(s.id) ? (
                    <span className="text-sm font-semibold px-4 py-2 rounded-xl" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
                      {t.live_waitlisted_badge}
                    </span>
                  ) : (
                    <button
                      onClick={() => joinWaitlist(s)}
                      className="text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors hover:bg-gray-50"
                      style={{ borderColor: '#d1d5db', color: '#374151' }}
                    >
                      {t.live_join_waitlist_button}
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => book(s)}
                    disabled={bookingId === s.id}
                    className="text-sm font-bold px-6 py-2.5 rounded-xl text-white transition-colors disabled:opacity-60"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {bookingId === s.id
                      ? t.live_book_button_busy
                      : !user
                        ? t.live_login_to_book_button
                        : isFree
                          ? t.live_book_free_button.replace('{child}', activeChild?.name ?? '')
                          : t.live_book_button.replace('{child}', activeChild?.name ?? '')}
                  </button>
                )}
              </div>

              {bookingError?.id === s.id && (
                <p className="mt-3 text-xs font-medium rounded-lg px-3 py-2" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
                  {bookingError.message}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
