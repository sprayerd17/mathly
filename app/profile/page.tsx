'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import { useAuth, type Language } from '@/app/providers'

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  af: 'Afrikaans',
}

export default function ProfilePage() {
  const { user, updateGrades, updateLanguage, openModal } = useAuth()

  const [editingGrades, setEditingGrades] = useState(false)
  const [draftGrades, setDraftGrades] = useState<number[]>([])

  const [editingLang, setEditingLang] = useState(false)
  const [draftLang, setDraftLang] = useState<Language>('en')

  function startEditGrades() {
    setDraftGrades([...(user?.grades ?? [])])
    setEditingGrades(true)
  }

  function toggleGrade(g: number) {
    setDraftGrades((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    )
  }

  function saveGrades() {
    updateGrades(draftGrades)
    setEditingGrades(false)
  }

  function startEditLang() {
    setDraftLang(user?.language ?? 'en')
    setEditingLang(true)
  }

  function saveLang() {
    updateLanguage(draftLang)
    setEditingLang(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-gray-500 mb-4">You need to be logged in to view your profile.</p>
          <button
            onClick={openModal}
            className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: '#1e40af' }}
          >
            Log in / Register
          </button>
        </div>
      </div>
    )
  }

  const sortedGrades = [...user.grades].sort((a, b) => a - b)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
          My Profile
        </h1>

        {/* Identity card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7 mb-5"
          style={{ border: '1px solid #e5e7eb' }}
        >
          {/* Avatar + name + email */}
          <div
            className="flex items-center gap-5 mb-8 pb-8"
            style={{ borderBottom: '1px solid #f3f4f6' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
              style={{ backgroundColor: '#1e40af' }}
            >
              {user.initial}
            </div>
            <div className="min-w-0">
              <p className="text-xl font-bold truncate" style={{ color: '#0f1f3d' }}>
                {user.name}
              </p>
              <p className="text-sm text-gray-500 mt-0.5 truncate">{user.email}</p>
            </div>
          </div>

          {/* Grades section */}
          <div className="pb-7 mb-7" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#6b7280' }}
              >
                My Grades
              </h2>
              {!editingGrades && (
                <button
                  onClick={startEditGrades}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  Edit grades
                </button>
              )}
            </div>

            {!editingGrades ? (
              sortedGrades.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {sortedGrades.map((g) => (
                    <span
                      key={g}
                      className="text-sm font-semibold px-3 py-1.5 rounded-lg"
                      style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                    >
                      Grade {g}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  No grades selected yet.{' '}
                  <button
                    onClick={startEditGrades}
                    className="font-semibold hover:underline"
                    style={{ color: '#1e40af' }}
                  >
                    Add grades
                  </button>
                </p>
              )
            ) : (
              <div>
                <p className="text-xs text-gray-500 mb-4">
                  Tap a grade to select or deselect it.
                </p>
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {GRADES.map((g) => {
                    const active = draftGrades.includes(g)
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => toggleGrade(g)}
                        className="py-3 rounded-xl text-sm font-semibold transition-all border"
                        style={
                          active
                            ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                            : { backgroundColor: '#f8fafc', color: '#374151', borderColor: '#d1d5db' }
                        }
                      >
                        Grade {g}
                      </button>
                    )
                  })}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingGrades(false)}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveGrades}
                    className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Language section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#6b7280' }}
              >
                Language
              </h2>
              {!editingLang && (
                <button
                  onClick={startEditLang}
                  className="text-xs font-semibold hover:underline underline-offset-2"
                  style={{ color: '#1e40af' }}
                >
                  Edit language
                </button>
              )}
            </div>

            {!editingLang ? (
              <span
                className="inline-block text-sm font-semibold px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
              >
                {LANGUAGE_LABELS[user.language]}
              </span>
            ) : (
              <div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(['en', 'af'] as const).map((code) => {
                    const active = draftLang === code
                    return (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setDraftLang(code)}
                        className="flex flex-col items-start gap-1 p-4 rounded-xl border text-left transition-all"
                        style={
                          active
                            ? { backgroundColor: '#eff6ff', borderColor: '#1e40af', borderWidth: '2px' }
                            : { backgroundColor: '#f8fafc', borderColor: '#d1d5db', borderWidth: '1px' }
                        }
                      >
                        <span
                          className="font-bold text-sm"
                          style={{ color: active ? '#1e40af' : '#0f1f3d' }}
                        >
                          {LANGUAGE_LABELS[code]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {code === 'en' ? 'Study material in English' : 'Studiegidse in Afrikaans'}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingLang(false)}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveLang}
                    className="flex-1 font-semibold py-2.5 rounded-lg text-sm text-white transition-colors"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subscription card */}
        <div
          className="bg-white rounded-2xl shadow-sm p-7"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: '#6b7280' }}
          >
            My Subscription
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg" style={{ color: '#0f1f3d' }}>
                Free
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                2 topics per grade · No payment required
              </p>
            </div>
            <Link
              href="/pricing"
              className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              Upgrade
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
