'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useAuth } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import { db } from '@/src/lib/firebase'
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore'

// Local hint only — used so a guest sees their own "you're on the list" state
// on a repeat visit from the same browser. It is never the source of truth:
// guest signups are write-only in Firestore (see firestore.rules), so there's
// no way to read them back. Signed-in users skip this entirely and read their
// real entry straight from Firestore instead.
const GUEST_INTEREST_KEY = 'mathly_live_interest_guest'
const LESSON_GRADES = [8, 9, 10, 11, 12]

type InterestEntry = {
  name: string
  email: string
  grades: number[]
}

export default function LiveClassesPage() {
  const { user, openModal } = useAuth()
  const t = useTranslations()

  const FEATURES = [
    {
      icon: '👥',
      title: t.live_feature_small_groups_title,
      detail: t.live_feature_small_groups_detail,
    },
    {
      icon: '📚',
      title: t.live_feature_grade_specific_title,
      detail: t.live_feature_grade_specific_detail,
    },
    {
      icon: '🎓',
      title: t.live_feature_expert_led_title,
      detail: t.live_feature_expert_led_detail,
    },
  ]

  const [mounted, setMounted]         = useState(false)
  const [registered, setRegistered]   = useState<InterestEntry | null>(null)
  const [submitting, setSubmitting]   = useState(false)
  const [guestEditing, setGuestEditing] = useState(false)

  // Guest-only form fields — signed-in users never see or need these, their
  // name/email/grades all come from their account.
  const [guestName, setGuestName]     = useState('')
  const [guestEmail, setGuestEmail]   = useState('')
  const [guestGrades, setGuestGrades] = useState<number[]>([])

  // A signed-in account's grade(s) are linked automatically from every child
  // on the account (deduplicated) — never a manual choice, since they've
  // already told us this when they set up their profile.
  const autoGrades = user
    ? [...new Set(user.children.map(c => c.grade))].sort((a, b) => a - b)
    : []

  useEffect(() => {
    setMounted(true)
    if (user) {
      getDoc(doc(db, 'liveClassInterest', user.uid))
        .then(snap => {
          if (snap.exists()) {
            const data = snap.data()
            setRegistered({ name: data.name, email: data.email, grades: data.grades })
          } else {
            setRegistered(null)
          }
        })
        .catch(() => {})
      return
    }
    try {
      const raw = localStorage.getItem(GUEST_INTEREST_KEY)
      if (raw) {
        const parsed: InterestEntry = JSON.parse(raw)
        setRegistered(parsed)
        setGuestName(parsed.name)
        setGuestEmail(parsed.email)
        setGuestGrades(parsed.grades)
      }
    } catch { /* ignore */ }
  }, [user])

  function toggleGuestGrade(g: number) {
    setGuestGrades(prev =>
      prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g].sort((a, b) => a - b)
    )
  }

  async function handleSignedInJoin() {
    if (!user || autoGrades.length === 0) return
    setSubmitting(true)
    try {
      await setDoc(doc(db, 'liveClassInterest', user.uid), {
        name: user.name,
        email: user.email,
        grades: autoGrades,
        uid: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true })
      setRegistered({ name: user.name, email: user.email, grades: autoGrades })
    } catch {
      // best-effort — stay on the confirm view so they can retry
    } finally {
      setSubmitting(false)
    }
  }

  function startGuestEdit() {
    setGuestEditing(true)
  }

  async function handleGuestSubmit() {
    if (!guestName.trim() || !guestEmail.trim() || guestGrades.length === 0) return
    setSubmitting(true)
    const entry: InterestEntry = { name: guestName.trim(), email: guestEmail.trim(), grades: guestGrades }
    try {
      await addDoc(collection(db, 'liveClassInterest'), {
        ...entry,
        uid: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      localStorage.setItem(GUEST_INTEREST_KEY, JSON.stringify(entry))
      setRegistered(entry)
      setGuestEditing(false)
    } catch {
      // best-effort — stay on the form so they can retry
    } finally {
      setSubmitting(false)
    }
  }

  const showSuccess = mounted && !!registered && !(!user && guestEditing)
  const showSignedInJoin = mounted && !!user && !registered
  const showGuestForm = mounted && !user && (!registered || guestEditing)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="pt-20 pb-14 px-6 text-center" style={{ backgroundColor: '#0f1f3d' }}>
          <div
            className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: '#fef3c7', color: '#92400e' }}
          >
            {t.live_coming_soon_badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.live_hero_heading}
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: '#93c5fd' }}>
            {t.live_hero_subheading}
          </p>
          <div
            className="inline-block text-sm font-semibold px-4 py-2 rounded-full"
            style={{ backgroundColor: '#1e40af', color: '#ffffff' }}
          >
            {t.live_first_session_free_banner}
          </div>
        </section>

        {/* Registration card */}
        <section className="px-6 py-14 max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8" style={{ border: '1px solid #e5e7eb' }}>

            {!mounted ? null : showSuccess ? (
              /* ── Already registered ── */
              <>
                <div className="text-center mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#dcfce7' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" style={{ color: '#15803d' }}>
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: '#0f1f3d' }}>
                    {t.live_waitlist_confirmed_heading}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {t.live_confirmation_message_prefix}{' '}
                    <span className="font-semibold">{registered!.email}</span>{' '}
                    {t.live_confirmation_message_suffix}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                    {t.live_grades_interested_label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {registered!.grades.map(g => (
                      <span
                        key={g}
                        className="text-sm font-bold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                      >
                        {t.dash_grade_label.replace('{grade}', String(g))}
                      </span>
                    ))}
                  </div>
                </div>

                {user ? (
                  <button
                    onClick={handleSignedInJoin}
                    disabled={submitting}
                    className="w-full text-center text-sm font-semibold py-3 rounded-xl border transition-colors hover:bg-gray-50 disabled:opacity-50"
                    style={{ borderColor: '#d1d5db', color: '#374151' }}
                  >
                    {t.live_refresh_grades_button}
                  </button>
                ) : (
                  <button
                    onClick={startGuestEdit}
                    className="w-full text-center text-sm font-semibold py-3 rounded-xl border transition-colors hover:bg-gray-50"
                    style={{ borderColor: '#d1d5db', color: '#374151' }}
                  >
                    {t.live_update_grade_selection_button}
                  </button>
                )}
              </>

            ) : showSignedInJoin ? (
              /* ── Signed in: grade(s) linked automatically, no choices ── */
              <>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
                  {t.live_join_waitlist_heading}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t.live_signedin_auto_grade_note}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                    {t.live_grades_interested_label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {autoGrades.map(g => (
                      <span
                        key={g}
                        className="text-sm font-bold px-4 py-2 rounded-full"
                        style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                      >
                        {t.dash_grade_label.replace('{grade}', String(g))}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSignedInJoin}
                  disabled={submitting || autoGrades.length === 0}
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors disabled:opacity-50"
                  style={{ backgroundColor: '#1e40af', color: '#fff' }}
                >
                  {t.live_register_interest_button}
                </button>
              </>

            ) : showGuestForm ? (
              /* ── Guest: no account yet, so show every option ── */
              <>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
                  {guestEditing ? t.live_update_grade_selection_heading : t.live_join_waitlist_heading}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t.live_grade_form_description}
                </p>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.live_guest_name_label}
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      placeholder={t.live_guest_name_placeholder}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.live_guest_email_label}
                    </label>
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={e => setGuestEmail(e.target.value)}
                      placeholder={t.live_guest_email_placeholder}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                    {t.live_which_grades_label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {LESSON_GRADES.map(g => {
                      const active = guestGrades.includes(g)
                      return (
                        <button
                          key={g}
                          onClick={() => toggleGuestGrade(g)}
                          className="text-sm font-bold px-4 py-2 rounded-full transition-colors"
                          style={active
                            ? { backgroundColor: '#1e40af', color: '#fff' }
                            : { backgroundColor: '#f3f4f6', color: '#374151' }
                          }
                        >
                          {t.dash_grade_label.replace('{grade}', String(g))}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <button
                  onClick={handleGuestSubmit}
                  disabled={submitting || !guestName.trim() || !guestEmail.trim() || guestGrades.length === 0}
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                  style={!submitting && guestName.trim() && guestEmail.trim() && guestGrades.length > 0
                    ? { backgroundColor: '#1e40af', color: '#fff' }
                    : { backgroundColor: '#e5e7eb', color: '#9ca3af', cursor: 'not-allowed' }
                  }
                >
                  {guestEditing ? t.live_save_changes_button : t.live_register_interest_button}
                </button>

                {guestEditing && (
                  <button
                    onClick={() => setGuestEditing(false)}
                    className="w-full text-center text-sm font-semibold py-2 mt-2 transition-colors"
                    style={{ color: '#6b7280' }}
                  >
                    {t.dash_cancel}
                  </button>
                )}

                <p className="text-xs text-gray-400 text-center mt-4">
                  {t.live_guest_have_account_prompt}{' '}
                  <button onClick={() => openModal('login')} className="font-semibold hover:underline" style={{ color: '#1e40af' }}>
                    {t.nav_login}
                  </button>
                </p>
              </>

            ) : null}
          </div>
        </section>

        {/* What to expect */}
        <section className="px-6 pb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#0f1f3d' }}>
            {t.live_what_to_expect_heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className="bg-white rounded-2xl shadow-sm p-6 text-center"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: '#0f1f3d' }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center text-gray-400">
            {t.live_launch_info_text}
          </p>
        </section>

      </main>

      <Footer />
    </div>
  )
}
