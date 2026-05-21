'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/app/components/Navbar'

const ALL_GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function SelectGradePage() {
  const router = useRouter()
  const [userGrades, setUserGrades] = useState<number[] | null>(null)
  const [activeGrade, setActiveGrade] = useState<number | null>(null)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('mathly_user')
      if (raw) {
        const parsed = JSON.parse(raw)
        const grades: number[] = Array.isArray(parsed.grades)
          ? [...parsed.grades].map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b)
          : []
        if (grades.length > 0) {
          setUserGrades(grades)
          setActiveGrade(grades[0])
          return
        }
      }
    } catch {
      // ignore malformed localStorage
    }
    setUserGrades([])
  }, [])

  // Still hydrating — render nothing to avoid flash
  if (userGrades === null) return null

  const isLoggedIn = userGrades.length > 0

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3" style={{ color: '#0f1f3d' }}>
            Select your grade
          </h1>
          <p className="text-lg text-gray-500">
            Choose the grade you want to study. You can add more grades in your profile later.
          </p>
        </div>

{isLoggedIn && activeGrade !== null ? (
          <>
            {/* Grade pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {userGrades.map(grade => {
                const active = grade === activeGrade
                return (
                  <button
                    key={grade}
                    onClick={() => setActiveGrade(grade)}
                    className="px-5 py-2 rounded-full text-sm font-semibold border transition-all"
                    style={
                      active
                        ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                        : { backgroundColor: '#fff', color: '#0f1f3d', borderColor: '#d1d5db' }
                    }
                  >
                    Grade {grade}
                  </button>
                )
              })}
            </div>

            {/* Active grade card */}
            <div
              className="bg-white rounded-2xl border shadow-sm p-8 mb-5"
              style={{ borderColor: '#e5e7eb' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#1e40af' }}>
                Curriculum
              </p>
              <h2 className="text-4xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
                Grade {activeGrade}
              </h2>
              <p className="text-base text-gray-500 mb-8">
                Ready to study Grade {activeGrade}? Jump into your topics.
              </p>
              <button
                onClick={() => router.push(`/grade/${activeGrade}`)}
                className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                Go to Grade {activeGrade} topics
              </button>
            </div>

            {/* Profile link */}
            <p className="text-sm text-gray-400">
              Not your grades?{' '}
              <Link
                href="/profile"
                className="underline underline-offset-2 hover:text-[#1e40af] transition-colors"
              >
                Update them in My Profile
              </Link>
            </p>
          </>
        ) : (
          /* Guest — all grades grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ALL_GRADES.map(grade => (
              <Link
                key={grade}
                href={`/grade/${grade}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#1e40af]/30 hover:shadow-md transition-all flex flex-col items-center justify-center py-10 gap-2"
              >
                <span className="text-lg font-semibold" style={{ color: '#6b7280' }}>Grade</span>
                <span className="text-5xl font-bold leading-none" style={{ color: '#0f1f3d' }}>
                  {grade}
                </span>
                <span className="text-xs font-medium mt-1" style={{ color: '#9ca3af' }}>
                  Tap to explore topics
                </span>
              </Link>
            ))}
          </div>
        )}

      </main>
    </div>
  )
}
