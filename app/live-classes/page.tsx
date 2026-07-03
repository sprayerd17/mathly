'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useAuth } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

const INTEREST_KEY = 'mathly_live_interest'
const LESSON_GRADES = [8, 9, 10, 11, 12]

type InterestEntry = {
  name: string
  email: string
  grades: number[]
  date: string
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

  const [mounted, setMounted]       = useState(false)
  const [registered, setRegistered] = useState<InterestEntry | null>(null)
  const [selectedGrades, setSelectedGrades] = useState<number[]>([])
  const [editing, setEditing]       = useState(false)
  const [submitted, setSubmitted]   = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!user) return
    try {
      const raw = localStorage.getItem(INTEREST_KEY)
      if (raw) {
        const parsed: InterestEntry[] = JSON.parse(raw)
        const mine = parsed.find(e => e.email === user.email) ?? null
        if (mine) {
          setRegistered(mine)
          setSelectedGrades(mine.grades)
        }
      }
    } catch { /* ignore */ }
  }, [user])

  function toggleGrade(g: number) {
    setSelectedGrades(prev =>
      prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g].sort((a, b) => a - b)
    )
  }

  function handleSubmit() {
    if (!user || selectedGrades.length === 0) return
    const entry: InterestEntry = {
      name:   user.name,
      email:  user.email,
      grades: selectedGrades,
      date:   new Date().toISOString().slice(0, 10),
    }
    let all: InterestEntry[] = []
    try {
      const raw = localStorage.getItem(INTEREST_KEY)
      if (raw) all = JSON.parse(raw)
    } catch { /* ignore */ }
    const idx = all.findIndex(e => e.email === user.email)
    if (idx >= 0) all[idx] = entry
    else all.push(entry)
    localStorage.setItem(INTEREST_KEY, JSON.stringify(all))
    setRegistered(entry)
    setEditing(false)
    setSubmitted(true)
  }

  const showSuccess = mounted && !!user && !!registered && !editing
  const showForm    = mounted && !!user && (!registered || editing)
  const showLogin   = mounted && !user

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
                    {submitted ? t.live_waitlist_confirmed_heading : t.live_already_registered_heading}
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

                <button
                  onClick={() => { setEditing(true); setSubmitted(false) }}
                  className="w-full text-center text-sm font-semibold py-3 rounded-xl border transition-colors hover:bg-gray-50"
                  style={{ borderColor: '#d1d5db', color: '#374151' }}
                >
                  {t.live_update_grade_selection_button}
                </button>
              </>

            ) : showLogin ? (
              /* ── Not logged in ── */
              <>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
                  {t.live_join_waitlist_heading}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t.live_login_prompt_description}
                </p>
                <button
                  onClick={() => openModal()}
                  className="w-full text-center font-semibold py-3 rounded-xl text-sm"
                  style={{ backgroundColor: '#1e40af', color: '#fff' }}
                >
                  {t.nav_login}
                </button>
              </>

            ) : showForm ? (
              /* ── Grade selection form ── */
              <>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
                  {editing ? t.live_update_grade_selection_heading : t.live_join_waitlist_heading}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t.live_grade_form_description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                    {t.live_which_grades_label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {LESSON_GRADES.map(g => {
                      const active = selectedGrades.includes(g)
                      return (
                        <button
                          key={g}
                          onClick={() => toggleGrade(g)}
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
                  onClick={handleSubmit}
                  disabled={selectedGrades.length === 0}
                  className="w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                  style={selectedGrades.length > 0
                    ? { backgroundColor: '#1e40af', color: '#fff' }
                    : { backgroundColor: '#e5e7eb', color: '#9ca3af', cursor: 'not-allowed' }
                  }
                >
                  {editing ? t.live_save_changes_button : t.live_register_interest_button}
                </button>

                {editing && (
                  <button
                    onClick={() => setEditing(false)}
                    className="w-full text-center text-sm font-semibold py-2 mt-2 transition-colors"
                    style={{ color: '#6b7280' }}
                  >
                    {t.dash_cancel}
                  </button>
                )}
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
