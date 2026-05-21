'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'

type Lesson = {
  id: string
  grade: number
  topic: string
  date: string
  time: string
  duration: string
  language?: 'en' | 'af'
  meetLink: string
  spotsAvailable: number
  visibleFrom: string
  status: 'draft' | 'published' | 'cancelled'
}

const STEPS = [
  {
    n: '1',
    title: 'Browse upcoming classes',
    detail: 'Find a session that fits your grade and schedule.',
  },
  {
    n: '2',
    title: 'Pay R100 to secure your spot',
    detail: 'One payment, one session — no subscription needed.',
  },
  {
    n: '3',
    title: 'Join on Google Meet',
    detail: 'Receive a link and join the session at the scheduled time.',
  },
]

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function computeEndTime(time: string, duration: string): string {
  const [h, m] = time.split(':').map(Number)
  const add: Record<string, number> = { '30min': 30, '1hour': 60, '1.5hours': 90, '2hours': 120 }
  const total = h * 60 + m + (add[duration] ?? 60)
  const eh = Math.floor(total / 60) % 24
  const em = total % 60
  return `${String(eh).padStart(2, '0')}:${String(em).padStart(2, '0')}`
}

function GradeBadge({ grade }: { grade: number }) {
  return (
    <span
      className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
    >
      Grade {grade}
    </span>
  )
}

function SpotIndicator({ spots }: { spots: number }) {
  const low = spots <= 5
  return (
    <span
      className="text-xs font-semibold"
      style={{ color: low ? '#b45309' : '#6b7280' }}
    >
      {spots} {spots === 1 ? 'spot' : 'spots'} remaining{low && ' — filling up'}
    </span>
  )
}

export default function LiveClassesPage() {
  const [mounted, setMounted]   = useState(false)
  const [lessons, setLessons]   = useState<Lesson[]>([])
  const [joined, setJoined]     = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
    const today = new Date().toISOString().slice(0, 10)
    const raw = localStorage.getItem('mathly_lessons')
    if (raw) {
      const all: Lesson[] = JSON.parse(raw)
      const visible = all.filter(l => l.status !== 'draft' && l.visibleFrom <= today)
      visible.sort((a, b) => a.date.localeCompare(b.date))
      setLessons(visible)
    }
  }, [])

  function handleJoin(id: string) {
    setJoined(prev => new Set(prev).add(id))
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-20 pb-14 px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: '#0f1f3d' }}
          >
            Live maths classes
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Join a live session for your grade. One topic per session. Pay R100 per class,
            no subscription needed.
          </p>
        </section>

        {/* Notice banner */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div
            className="rounded-xl px-5 py-4 text-sm text-center"
            style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#1e40af',
            }}
          >
            Classes run for Grades 8 to 12. New topics are scheduled every week.
          </div>
        </div>

        {/* Upcoming classes */}
        <section className="px-6 pb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
            Upcoming classes
          </h2>

          {!mounted ? null : lessons.length === 0 ? (
            <div
              className="rounded-2xl py-16 text-center"
              style={{ border: '1px dashed #d1d5db' }}
            >
              <p className="text-gray-400 text-sm">No classes scheduled yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {lessons.map(cls => (
                <div
                  key={cls.id}
                  className="bg-white rounded-2xl shadow-sm flex flex-col"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Grade + language + topic */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <GradeBadge grade={cls.grade} />
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={
                          (cls.language ?? 'en') === 'en'
                            ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                            : { backgroundColor: '#fef3c7', color: '#b45309' }
                        }
                      >
                        {(cls.language ?? 'en') === 'en' ? 'EN' : 'AF'}
                      </span>
                      <h3 className="font-semibold text-[#0f1f3d] text-base">{cls.topic}</h3>
                    </div>

                    {/* Date/time */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      {formatDate(cls.date)} · {cls.time} – {computeEndTime(cls.time, cls.duration)}
                    </div>

                    {/* Duration */}
                    <p className="text-sm text-gray-600 mb-5 flex-1">{cls.duration} session</p>

                    {/* Spots + CTA */}
                    <div
                      className="flex items-center justify-between gap-3 mt-auto pt-4"
                      style={{ borderTop: '1px solid #f3f4f6' }}
                    >
                      {cls.status === 'cancelled' ? (
                        <span
                          className="text-xs font-semibold px-3 py-1.5 rounded-xl"
                          style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}
                        >
                          Cancelled
                        </span>
                      ) : (
                        <>
                          <SpotIndicator spots={cls.spotsAvailable} />
                          {joined.has(cls.id) ? (
                            <span
                              className="text-xs font-semibold px-4 py-2 rounded-xl"
                              style={{
                                backgroundColor: '#eff6ff',
                                color: '#1e40af',
                                border: '1px solid #bfdbfe',
                              }}
                            >
                              Coming soon
                            </span>
                          ) : (
                            <button
                              onClick={() => handleJoin(cls.id)}
                              className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                              style={{ backgroundColor: '#1e40af', color: '#fff' }}
                            >
                              Join for R100
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* How it works */}
        <section className="px-6 py-20" style={{ backgroundColor: '#0f1f3d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              How it works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {STEPS.map(step => (
                <div key={step.n} className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-5"
                    style={{ backgroundColor: '#1e40af', color: '#fff' }}
                  >
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm" style={{ color: '#a8b8d8' }}>
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
