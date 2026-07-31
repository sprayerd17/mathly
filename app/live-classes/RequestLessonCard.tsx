'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useAuth } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

// General "are you interested in a live session?" signal — one or more
// grades, no specific topic (that's what the per-session "join the
// waitlist" button on a full session is for, see SessionsBoard.tsx).
// Requests land in liveClassInterest and are never consumed: the collection
// is the standing demand-by-grade signal the admin dashboard aggregates.
export default function RequestLessonCard() {
  const { user, openModal } = useAuth()
  const t = useTranslations()

  const [grades, setGrades] = useState<number[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function toggleGrade(g: number) {
    setGrades(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g].sort((a, b) => a - b))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || grades.length === 0 || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      await addDoc(collection(db, 'liveClassInterest'), {
        uid: user.uid,
        name: user.name,
        email: user.email,
        grades,
        createdAt: serverTimestamp(),
      })
      setSubmitted(true)
      setGrades([])
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="px-6 py-14 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-8" style={{ border: '1px solid #e5e7eb' }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
          {t.live_interest_heading}
        </h2>
        <p className="text-sm text-gray-500 mb-6">{t.live_interest_description}</p>

        {!user ? (
          <button
            onClick={() => openModal('login')}
            className="w-full font-semibold py-3 rounded-xl text-sm text-white transition-colors"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.live_interest_login_button}
          </button>
        ) : submitted ? (
          <div
            className="rounded-xl px-5 py-4 text-sm font-medium"
            style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
          >
            {t.live_interest_success}
            <button
              onClick={() => setSubmitted(false)}
              className="block mt-2 text-xs font-semibold hover:underline"
              style={{ color: '#15803d' }}
            >
              {t.live_interest_another_button}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.live_interest_grades_label}
              </label>
              <div className="flex flex-wrap gap-2">
                {GRADES.map(g => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => toggleGrade(g)}
                    className="px-3.5 py-2 rounded-lg text-sm font-semibold border transition-all"
                    style={
                      grades.includes(g)
                        ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                        : { backgroundColor: '#f8fafc', color: '#374151', borderColor: '#d1d5db' }
                    }
                  >
                    {t.topic_grade_value.replace('{grade}', String(g))}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="text-xs font-medium rounded-lg px-3 py-2" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
                {t.live_interest_error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || grades.length === 0}
              className="w-full font-semibold py-3 rounded-xl text-sm text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#1e40af' }}
            >
              {submitting ? t.live_interest_submitting : t.live_interest_submit_button}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
