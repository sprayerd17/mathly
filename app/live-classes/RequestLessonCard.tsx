'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

// "Request a lesson" — learners tell us which topics they want a live session
// on. Requests land in lessonRequests and are never consumed when sessions
// get scheduled: the collection is the standing demand signal the admin
// dashboard aggregates by grade and topic.
export default function RequestLessonCard() {
  const { user, openModal } = useAuth()
  const t = useTranslations()

  const [topic, setTopic] = useState('')
  const [details, setDetails] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || !topic.trim() || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      await addDoc(collection(db, 'lessonRequests'), {
        uid: user.uid,
        name: user.name,
        email: user.email,
        grade: getActiveChild(user).grade,
        topic: topic.trim(),
        details: details.trim(),
        sessionId: null,
        createdAt: serverTimestamp(),
      })
      setSubmitted(true)
      setTopic('')
      setDetails('')
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="px-6 pb-14 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-8" style={{ border: '1px solid #e5e7eb' }}>
        <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
          {t.live_request_heading}
        </h2>
        <p className="text-sm text-gray-500 mb-6">{t.live_request_description}</p>

        {!user ? (
          <button
            onClick={() => openModal('login')}
            className="w-full font-semibold py-3 rounded-xl text-sm text-white transition-colors"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.live_login_to_request_button}
          </button>
        ) : submitted ? (
          <div
            className="rounded-xl px-5 py-4 text-sm font-medium"
            style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
          >
            {t.live_request_success}
            <button
              onClick={() => setSubmitted(false)}
              className="block mt-2 text-xs font-semibold hover:underline"
              style={{ color: '#15803d' }}
            >
              {t.live_request_another_button}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.live_request_topic_label}
              </label>
              <input
                type="text"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                maxLength={200}
                placeholder={t.live_request_topic_placeholder}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.live_request_details_label}
              </label>
              <textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
                maxLength={2000}
                rows={3}
                placeholder={t.live_request_details_placeholder}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-xs font-medium rounded-lg px-3 py-2" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
                {t.live_request_error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || !topic.trim()}
              className="w-full font-semibold py-3 rounded-xl text-sm text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#1e40af' }}
            >
              {submitting ? t.live_request_submitting : t.live_request_submit_button}
            </button>
            <p className="text-xs text-gray-400 text-center">
              {t.live_request_grade_note.replace('{grade}', String(getActiveChild(user).grade)).replace('{child}', getActiveChild(user).name)}
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
