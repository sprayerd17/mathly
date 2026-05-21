'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/app/components/Navbar'

// ── Types ─────────────────────────────────────────────────────────────────────

type Package = 'free' | 'pro' | 'guided'

type TopicProgress = {
  name: string
  slug: string
  completion: number
  score: number | null
  completedDate?: string
}

type ScoreEntry = {
  topic: string
  slug: string
  activityType: 'Study Guide Quiz' | 'Practice Questions'
  score: number | null
  date: string | null
}

type Activity = {
  topic: string
  type: 'Study Guide' | 'Practice'
  date: string
  score: number | null
}

type QueryItem = {
  question: string
  status: 'answered' | 'pending'
  date: string
}

type GradeData = {
  topics: TopicProgress[]
  scores: ScoreEntry[]
  activity: Activity[]
}

// ── Per-grade placeholder data ────────────────────────────────────────────────

const GRADE_DATA: Record<number, GradeData> = {
  4: {
    topics: [
      { name: 'Whole Numbers',   slug: 'topic-1', completion: 100, score: 91, completedDate: '2026-05-10' },
      { name: 'Fractions',       slug: 'topic-2', completion: 70,  score: 63   },
      { name: 'Measurement',     slug: 'topic-3', completion: 40,  score: 52   },
      { name: 'Time',            slug: 'topic-4', completion: 20,  score: 38   },
      { name: 'Geometry',        slug: 'topic-5', completion: 0,   score: null },
      { name: 'Data Handling',   slug: 'topic-6', completion: 0,   score: null },
    ],
    scores: [
      { topic: 'Whole Numbers', slug: 'topic-1', activityType: 'Practice Questions', score: 91, date: '2026-05-10' },
      { topic: 'Fractions',     slug: 'topic-2', activityType: 'Practice Questions', score: 63, date: '2026-05-14' },
      { topic: 'Measurement',   slug: 'topic-3', activityType: 'Study Guide Quiz',   score: 52, date: '2026-05-13' },
      { topic: 'Time',          slug: 'topic-4', activityType: 'Practice Questions', score: 38, date: '2026-05-15' },
      { topic: 'Geometry',      slug: 'topic-5', activityType: 'Practice Questions', score: null, date: null       },
    ],
    activity: [
      { topic: 'Time',         type: 'Practice',    date: '2026-05-15', score: 38   },
      { topic: 'Measurement',  type: 'Study Guide', date: '2026-05-13', score: null },
      { topic: 'Fractions',    type: 'Practice',    date: '2026-05-14', score: 63   },
      { topic: 'Whole Numbers',type: 'Practice',    date: '2026-05-10', score: 91   },
    ],
  },
  8: {
    topics: [
      { name: 'Integers',              slug: 'topic-1', completion: 100, score: 88, completedDate: '2026-05-08' },
      { name: 'Exponents',             slug: 'topic-2', completion: 75,  score: 74   },
      { name: 'Algebraic Expressions', slug: 'topic-3', completion: 50,  score: 61   },
      { name: 'Linear Equations',      slug: 'topic-4', completion: 30,  score: 43   },
      { name: 'Geometry of 2D Shapes', slug: 'topic-5', completion: 0,   score: null },
      { name: 'Pythagoras',            slug: 'topic-6', completion: 0,   score: null },
      { name: 'Statistics',            slug: 'topic-7', completion: 0,   score: null },
    ],
    scores: [
      { topic: 'Integers',              slug: 'topic-1', activityType: 'Practice Questions', score: 88,   date: '2026-05-09' },
      { topic: 'Exponents',             slug: 'topic-2', activityType: 'Practice Questions', score: 74,   date: '2026-05-13' },
      { topic: 'Algebraic Expressions', slug: 'topic-3', activityType: 'Study Guide Quiz',   score: 61,   date: '2026-05-15' },
      { topic: 'Linear Equations',      slug: 'topic-4', activityType: 'Practice Questions', score: 43,   date: '2026-05-17' },
      { topic: 'Geometry of 2D Shapes', slug: 'topic-5', activityType: 'Practice Questions', score: null, date: null         },
    ],
    activity: [
      { topic: 'Linear Equations',      type: 'Practice',    date: '2026-05-17', score: 43   },
      { topic: 'Algebraic Expressions', type: 'Study Guide', date: '2026-05-15', score: null },
      { topic: 'Exponents',             type: 'Practice',    date: '2026-05-13', score: 74   },
      { topic: 'Integers',              type: 'Practice',    date: '2026-05-09', score: 88   },
    ],
  },
  10: {
    topics: [
      { name: 'Algebraic Expressions',    slug: 'topic-1', completion: 100, score: 85, completedDate: '2026-05-12' },
      { name: 'Equations & Inequalities', slug: 'topic-2', completion: 80,  score: 72   },
      { name: 'Number Patterns',          slug: 'topic-3', completion: 60,  score: 58   },
      { name: 'Functions',                slug: 'topic-4', completion: 40,  score: 45   },
      { name: 'Finance, Growth & Decay',  slug: 'topic-5', completion: 20,  score: null },
      { name: 'Trigonometry',             slug: 'topic-6', completion: 0,   score: null },
      { name: 'Analytical Geometry',      slug: 'topic-7', completion: 0,   score: null },
      { name: 'Statistics',               slug: 'topic-8', completion: 0,   score: null },
    ],
    scores: [
      { topic: 'Algebraic Expressions',    slug: 'topic-1', activityType: 'Practice Questions', score: 85,   date: '2026-05-15' },
      { topic: 'Equations & Inequalities', slug: 'topic-2', activityType: 'Practice Questions', score: 72,   date: '2026-05-17' },
      { topic: 'Number Patterns',          slug: 'topic-3', activityType: 'Study Guide Quiz',   score: 58,   date: '2026-05-16' },
      { topic: 'Functions',                slug: 'topic-4', activityType: 'Practice Questions', score: 45,   date: '2026-05-19' },
      { topic: 'Finance, Growth & Decay',  slug: 'topic-5', activityType: 'Practice Questions', score: null, date: null         },
    ],
    activity: [
      { topic: 'Functions',                type: 'Practice',    date: '2026-05-19', score: 45   },
      { topic: 'Equations & Inequalities', type: 'Study Guide', date: '2026-05-18', score: null },
      { topic: 'Equations & Inequalities', type: 'Practice',    date: '2026-05-17', score: 72   },
      { topic: 'Algebraic Expressions',    type: 'Practice',    date: '2026-05-15', score: 85   },
    ],
  },
  12: {
    topics: [
      { name: 'Sequences & Series',   slug: 'topic-1', completion: 100, score: 92, completedDate: '2026-05-05' },
      { name: 'Functions & Inverses', slug: 'topic-2', completion: 100, score: 78, completedDate: '2026-05-11' },
      { name: 'Finance',              slug: 'topic-3', completion: 65,  score: 65   },
      { name: 'Trigonometry',         slug: 'topic-4', completion: 45,  score: 47   },
      { name: 'Polynomials',          slug: 'topic-5', completion: 0,   score: null },
      { name: 'Differential Calculus',slug: 'topic-6', completion: 0,   score: null },
      { name: 'Analytical Geometry',  slug: 'topic-7', completion: 0,   score: null },
      { name: 'Statistics',           slug: 'topic-8', completion: 0,   score: null },
    ],
    scores: [
      { topic: 'Sequences & Series',   slug: 'topic-1', activityType: 'Practice Questions', score: 92,   date: '2026-05-06' },
      { topic: 'Functions & Inverses', slug: 'topic-2', activityType: 'Study Guide Quiz',   score: 78,   date: '2026-05-12' },
      { topic: 'Finance',              slug: 'topic-3', activityType: 'Practice Questions', score: 65,   date: '2026-05-16' },
      { topic: 'Trigonometry',         slug: 'topic-4', activityType: 'Practice Questions', score: 47,   date: '2026-05-18' },
      { topic: 'Polynomials',          slug: 'topic-5', activityType: 'Practice Questions', score: null, date: null         },
    ],
    activity: [
      { topic: 'Trigonometry',         type: 'Practice',    date: '2026-05-18', score: 47   },
      { topic: 'Finance',              type: 'Study Guide', date: '2026-05-16', score: null },
      { topic: 'Functions & Inverses', type: 'Study Guide', date: '2026-05-12', score: null },
      { topic: 'Sequences & Series',   type: 'Practice',    date: '2026-05-06', score: 92   },
    ],
  },
}

function getGradeData(grade: number): GradeData {
  return GRADE_DATA[grade] ?? GRADE_DATA[10]
}

// ── Static placeholder data ───────────────────────────────────────────────────

const DEMO_PACKAGE: Package = 'guided'

const PLACEHOLDER_CLASS = {
  grade: 10,
  topic: 'Trigonometry',
  date: '2026-05-23',
  time: '16:00',
}

const PLACEHOLDER_QUERIES: QueryItem[] = [
  { question: 'How do I solve simultaneous equations using substitution?', status: 'answered', date: '2026-05-17' },
  { question: 'When do I use the sine rule vs the cosine rule?',           status: 'pending',  date: '2026-05-19' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function scoreBadgeStyle(score: number) {
  if (score >= 80) return { backgroundColor: '#dcfce7', color: '#15803d' }
  if (score >= 50) return { backgroundColor: '#fef3c7', color: '#92400e' }
  return { backgroundColor: '#fee2e2', color: '#b91c1c' }
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

const PACKAGE_STYLE: Record<Package, { bg: string; color: string; label: string }> = {
  free:    { bg: '#f3f4f6', color: '#374151', label: 'Free'    },
  pro:     { bg: '#eff6ff', color: '#1e40af', label: 'Pro'     },
  guided:  { bg: '#fef3c7', color: '#92400e', label: 'Guided'  },
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" style={{ color: '#16a34a' }} aria-hidden="true">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  )
}

function HalfCircleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="#1e40af" strokeWidth="1.5" fill="#dbeafe" />
      <path d="M10 1.5 A8.5 8.5 0 0 1 10 18.5 L10 10 Z" fill="#1e40af" />
    </svg>
  )
}

function EmptyCircleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="#d1d5db" strokeWidth="1.5" />
    </svg>
  )
}

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: accent ? '#eff6ff' : '#ffffff',
        borderColor: accent ? '#bfdbfe' : '#e5e7eb',
      }}
    >
      <p className="text-xs text-gray-400 mb-1.5 leading-tight">{label}</p>
      <p className="text-2xl font-bold" style={{ color: accent ? '#1e40af' : '#0f1f3d' }}>
        {value}
      </p>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const router = useRouter()
  const [userName, setUserName]         = useState('')
  const [userGrades, setUserGrades]     = useState<number[]>([])
  const [activeGrade, setActiveGrade]   = useState<number | null>(null)
  const [mounted, setMounted]           = useState(false)
  const [reportPeriod, setReportPeriod] = useState<'week' | 'month' | 'quarter'>('month')
  const [reportVisible, setReportVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const raw = localStorage.getItem('mathly_user')
      if (!raw) { router.replace('/'); return }
      const parsed = JSON.parse(raw)
      setUserName(parsed.name || parsed.email || 'Student')
      const grades: number[] = Array.isArray(parsed.grades)
        ? [...parsed.grades].sort((a, b) => a - b)
        : []
      setUserGrades(grades)
      setActiveGrade(grades[0] ?? null)
    } catch {
      router.replace('/')
    }
  }, [router])

  if (!mounted || !userName) return null

  const userPackage = DEMO_PACKAGE
  const isGuided    = userPackage === 'guided'
  const pkgStyle    = PACKAGE_STYLE[userPackage]

  // Data for the active grade (falls back to grade 10 placeholder set)
  const gradeData    = getGradeData(activeGrade ?? userGrades[0] ?? 10)
  const topics       = gradeData.topics
  const scores       = gradeData.scores
  const activity     = gradeData.activity
  // Stats row — computed from primary grade data (first grade, unchanged across switching)
  const primaryData      = getGradeData(userGrades[0] ?? 10)
  const completedCount   = primaryData.topics.filter(t => t.completion > 0).length
  const primaryScores    = primaryData.topics.filter(t => t.score !== null).map(t => t.score as number)
  const avgScore         = primaryScores.length > 0
    ? Math.round(primaryScores.reduce((a, b) => a + b, 0) / primaryScores.length)
    : 0

  // ── Report data ─────────────────────────────────────────────────────────────
  const PERIOD_DAYS_MAP  = { week: 7, month: 30, quarter: 90 } as const
  const PERIOD_LABEL_MAP = { week: 'Last 7 days', month: 'Last 30 days', quarter: 'Last 3 months' } as const
  const rPDays           = PERIOD_DAYS_MAP[reportPeriod]
  const todayDate        = new Date('2026-05-20T00:00:00')
  const rStartDate       = new Date(todayDate)
  rStartDate.setDate(todayDate.getDate() - (rPDays - 1))
  const rStartStr        = rStartDate.toISOString().slice(0, 10)
  const rEndStr          = '2026-05-20'

  const periodAct        = activity.filter(a => a.date >= rStartStr && a.date <= rEndStr)
  const studiedDaysSet   = new Set(periodAct.map(a => a.date))
  const studyDayCount    = studiedDaysSet.size

  let reportStreak = 0
  const streakCheck = new Date(todayDate)
  for (let i = 0; i < rPDays; i++) {
    if (studiedDaysSet.has(streakCheck.toISOString().slice(0, 10))) {
      reportStreak++
      streakCheck.setDate(streakCheck.getDate() - 1)
    } else break
  }

  const periodScores      = scores.filter(s => s.date && s.date >= rStartStr && s.date <= rEndStr && s.score !== null).map(s => s.score as number)
  const periodAvgScore    = periodScores.length > 0 ? Math.round(periodScores.reduce((a, b) => a + b, 0) / periodScores.length) : 0
  const completedInPeriod = topics.filter(t => t.completion === 100 && t.completedDate && t.completedDate >= rStartStr).length
  const reportStrengths   = topics.filter(t => t.score !== null && (t.score as number) >= 80)
  const reportNeedsAttn   = topics.filter(t => t.score !== null && (t.score as number) < 60)
  const periodQueryList   = PLACEHOLDER_QUERIES.filter(q => q.date >= rStartStr && q.date <= rEndStr)
  const answeredQueryCount = periodQueryList.filter(q => q.status === 'answered').length

  const allDaysInPeriod: string[] = []
  for (let i = rPDays - 1; i >= 0; i--) {
    const d = new Date(todayDate)
    d.setDate(todayDate.getDate() - i)
    allDaysInPeriod.push(d.toISOString().slice(0, 10))
  }

  const inProgressTopics = topics.filter(t => t.completion > 0 && t.completion < 100)
  const notStartedTopics = topics.filter(t => t.completion === 0)
  const reportRecs: string[] = []
  if (inProgressTopics.length > 0)
    reportRecs.push(`Finish ${inProgressTopics[0].name} — you're ${inProgressTopics[0].completion}% through`)
  if (reportNeedsAttn.length > 0)
    reportRecs.push(`Revisit ${reportNeedsAttn[0].name} to improve your ${reportNeedsAttn[0].score}% score before your next test`)
  if (notStartedTopics.length > 0)
    reportRecs.push(
      inProgressTopics.length > 0
        ? `After completing ${inProgressTopics[0].name}, start ${notStartedTopics[0].name} to stay on track`
        : `Start ${notStartedTopics[0].name} to keep up with your curriculum`
    )

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* ── 1. Header ───────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
              Welcome back, {userName}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {userGrades.map(g => (
                <span
                  key={g}
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                >
                  Grade {g}
                </span>
              ))}
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: pkgStyle.bg, color: pkgStyle.color }}
              >
                {pkgStyle.label}
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. Stats row ────────────────────────────────────────────────── */}
        <div className={`grid gap-4 mb-8 ${isGuided ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3'}`}>
          <StatCard label="Topics Completed" value={`${completedCount}/${primaryData.topics.length}`} />
          <StatCard label="Average Score"    value={`${avgScore}%`} />
          <StatCard label="Study Time This Week" value="3h 20min" />
          {isGuided && <StatCard label="Queries Answered" value="2 / 3" accent />}
        </div>

        {/* ── Grade pills ─────────────────────────────────────────────────── */}
        {userGrades.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {userGrades.map(grade => {
              const active = grade === activeGrade
              return (
                <button
                  key={grade}
                  onClick={() => setActiveGrade(grade)}
                  className="px-5 py-2 rounded-full text-sm font-semibold border transition-all"
                  style={
                    active
                      ? { backgroundColor: '#1e40af', color: '#ffffff', borderColor: '#1e40af' }
                      : { backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }
                  }
                >
                  Grade {grade}
                </button>
              )
            })}
          </div>
        )}

        {/* ── 3a. Topic completion ────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold" style={{ color: '#0f1f3d' }}>Topic completion</h2>
            {activeGrade !== null && (
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1e40af' }}>
                Grade {activeGrade}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Completed */}
            {(() => {
              const completed = topics.filter(t => t.completion === 100)
              return (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#16a34a' }} />
                    <span className="text-sm font-bold" style={{ color: '#374151' }}>Completed</span>
                    <span className="text-xs text-gray-400">({completed.length})</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {completed.length === 0 ? (
                      <p className="text-xs text-gray-400 py-3">No topics completed yet.</p>
                    ) : completed.map(topic => (
                      <div key={topic.slug} className="bg-white rounded-xl border p-4 flex items-start gap-3" style={{ borderColor: '#e5e7eb' }}>
                        <CheckCircleIcon />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-snug" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                          {topic.completedDate && (
                            <p className="text-xs text-gray-400 mt-0.5">Completed {formatDate(topic.completedDate)}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

            {/* In Progress */}
            {(() => {
              const inProgress = topics.filter(t => t.completion > 0 && t.completion < 100)
              return (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#1e40af' }} />
                    <span className="text-sm font-bold" style={{ color: '#374151' }}>In Progress</span>
                    <span className="text-xs text-gray-400">({inProgress.length})</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {inProgress.length === 0 ? (
                      <p className="text-xs text-gray-400 py-3">Nothing in progress.</p>
                    ) : inProgress.map(topic => (
                      <div key={topic.slug} className="bg-white rounded-xl border p-4 flex items-start gap-3" style={{ borderColor: '#e5e7eb' }}>
                        <HalfCircleIcon />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold leading-snug" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{topic.completion}% done</p>
                        </div>
                        <Link
                          href={activeGrade !== null ? `/grade/${activeGrade}/${topic.slug}` : '/select-grade'}
                          className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                          style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                        >
                          Continue
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

            {/* Not Started */}
            {(() => {
              const notStarted = topics.filter(t => t.completion === 0)
              return (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#d1d5db' }} />
                    <span className="text-sm font-bold" style={{ color: '#374151' }}>Not Started</span>
                    <span className="text-xs text-gray-400">({notStarted.length})</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {notStarted.length === 0 ? (
                      <p className="text-xs text-gray-400 py-3">All topics started.</p>
                    ) : notStarted.map(topic => (
                      <div key={topic.slug} className="bg-white rounded-xl border p-4 flex items-start gap-3" style={{ borderColor: '#e5e7eb' }}>
                        <EmptyCircleIcon />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold leading-snug" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                        </div>
                        <Link
                          href={activeGrade !== null ? `/grade/${activeGrade}/${topic.slug}` : '/select-grade'}
                          className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-colors whitespace-nowrap"
                          style={{ backgroundColor: '#1e40af' }}
                        >
                          Start
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

          </div>
        </section>

        {/* ── 3b. Activity scores ─────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-5" style={{ color: '#0f1f3d' }}>Activity scores</h2>

          <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
            {/* Table header — hidden on mobile */}
            <div
              className="hidden sm:grid px-6 py-3 border-b"
              style={{ borderColor: '#f3f4f6', gridTemplateColumns: '2fr 1.4fr 90px 80px 70px', gap: '12px' }}
            >
              {['Topic', 'Activity', 'Score', 'Date', ''].map((h, i) => (
                <span key={i} className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9ca3af' }}>
                  {h}
                </span>
              ))}
            </div>

            {scores.map((entry, i) => (
              <div
                key={i}
                className="px-6 py-4"
                style={i < scores.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : {}}
              >
                {/* Desktop row */}
                <div
                  className="hidden sm:grid items-center"
                  style={{ gridTemplateColumns: '2fr 1.4fr 90px 80px 70px', gap: '12px' }}
                >
                  <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>{entry.topic}</p>
                  <p className="text-xs text-gray-500 truncate">{entry.activityType}</p>
                  <div>
                    {entry.score !== null ? (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={scoreBadgeStyle(entry.score)}>
                        {entry.score}%
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">Not attempted</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{entry.date ? formatDate(entry.date) : '—'}</p>
                  <div>
                    {entry.score !== null && (
                      <Link
                        href={activeGrade !== null ? `/grade/${activeGrade}/${entry.slug}` : '/select-grade'}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                        style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
                      >
                        Retry
                      </Link>
                    )}
                  </div>
                </div>

                {/* Mobile card */}
                <div className="sm:hidden flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{entry.topic}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{entry.activityType}{entry.date ? ` · ${formatDate(entry.date)}` : ''}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {entry.score !== null ? (
                      <>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={scoreBadgeStyle(entry.score)}>
                          {entry.score}%
                        </span>
                        <Link
                          href={activeGrade !== null ? `/grade/${activeGrade}/${entry.slug}` : '/select-grade'}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                          style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
                        >
                          Retry
                        </Link>
                      </>
                    ) : (
                      <span className="text-xs text-gray-400">Not attempted</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Progress report ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-lg font-bold mb-1" style={{ color: '#0f1f3d' }}>Progress report</h2>
            <p className="text-sm text-gray-500">Generate a summary of your study activity, scores and recommendations</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {(['week', 'month', 'quarter'] as const).map(period => {
              const pLabels: Record<string, string> = { week: 'Last 7 days', month: 'Last 30 days', quarter: 'Last 3 months' }
              const isActive = reportPeriod === period
              return (
                <button
                  key={period}
                  onClick={() => { setReportPeriod(period); setReportVisible(false) }}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-all"
                  style={
                    isActive
                      ? { backgroundColor: '#1e40af', color: '#ffffff', borderColor: '#1e40af' }
                      : { backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }
                  }
                >
                  {pLabels[period]}
                </button>
              )
            })}
            <button
              onClick={() => setReportVisible(true)}
              className="px-6 py-2 rounded-xl text-sm font-semibold text-white transition-colors shadow-sm"
              style={{ backgroundColor: '#1e40af' }}
            >
              Generate report
            </button>
          </div>

          {reportVisible && (
            <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>

              {/* Report header */}
              <div className="px-8 py-6 flex items-start justify-between gap-4" style={{ backgroundColor: '#0f1f3d' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#93c5fd' }}>
                    Mathly Progress Report
                  </p>
                  <h3 className="text-white font-bold text-xl mb-1">{userName}</h3>
                  <p className="text-sm" style={{ color: '#a8b8d8' }}>
                    Grade {activeGrade} · {PERIOD_LABEL_MAP[reportPeriod]} · Generated{' '}
                    {new Date('2026-05-20T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                >
                  Print report
                </button>
              </div>

              <div className="px-8 py-7 space-y-8">

                {/* Summary metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>Summary</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: 'Topics Completed', value: String(completedInPeriod)                       },
                      { label: 'Average Score',    value: periodAvgScore > 0 ? `${periodAvgScore}%` : '—' },
                      { label: 'Study Days',       value: String(studyDayCount)                           },
                      { label: 'Day Streak',       value: String(reportStreak)                            },
                    ].map(m => (
                      <div key={m.label} className="rounded-xl border p-4 text-center" style={{ borderColor: '#e5e7eb' }}>
                        <p className="text-2xl font-bold mb-1" style={{ color: '#0f1f3d' }}>{m.value}</p>
                        <p className="text-xs text-gray-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                {reportStrengths.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>Strengths</h4>
                    <div className="flex flex-col gap-2">
                      {reportStrengths.map(t => (
                        <div key={t.slug} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                          <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{t.name}</p>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>{t.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Needs attention */}
                {reportNeedsAttn.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>Needs Attention</h4>
                    <div className="flex flex-col gap-2">
                      {reportNeedsAttn.map(t => (
                        <div key={t.slug} className="rounded-xl px-4 py-4" style={{ backgroundColor: '#fff7f7', border: '1px solid #fca5a5' }}>
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{t.name}</p>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>{t.score}%</span>
                          </div>
                          <p className="text-xs text-gray-500">Spend more time reviewing this topic before moving on.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Study consistency */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>Study Consistency</h4>
                    <span className="text-xs text-gray-400">{studyDayCount} of {rPDays} days</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {allDaysInPeriod.map(day => (
                      <div
                        key={day}
                        title={day}
                        style={{
                          width:           rPDays <= 7 ? '36px' : rPDays <= 30 ? '20px' : '12px',
                          height:          rPDays <= 7 ? '36px' : rPDays <= 30 ? '20px' : '12px',
                          backgroundColor: studiedDaysSet.has(day) ? '#16a34a' : '#e5e7eb',
                          borderRadius:    '4px',
                          flexShrink:      0,
                        }}
                      />
                    ))}
                  </div>
                  {rPDays <= 7 && (
                    <div className="flex gap-1 mt-1.5">
                      {allDaysInPeriod.map(day => (
                        <div key={day} className="flex items-center justify-center" style={{ width: '36px' }}>
                          <p className="text-xs text-gray-400">
                            {new Date(day + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short' }).slice(0, 3)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#16a34a' }} />
                      <span className="text-xs text-gray-400">Studied</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#e5e7eb' }} />
                      <span className="text-xs text-gray-400">Missed</span>
                    </div>
                  </div>
                </div>

                {/* Recommended next steps */}
                {reportRecs.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>Recommended Next Steps</h4>
                    <div className="flex flex-col gap-2.5">
                      {reportRecs.map((rec, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl px-4 py-4" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                          <span
                            className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: '#1e40af', color: '#fff' }}
                          >
                            {i + 1}
                          </span>
                          <p className="text-sm text-gray-700 leading-relaxed">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Query summary — Guided only */}
                {isGuided && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>Query Summary</h4>
                    <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
                      <div className="grid grid-cols-3 divide-x divide-gray-100" style={{ borderBottom: '1px solid #f3f4f6' }}>
                        {[
                          { label: 'Submitted', value: periodQueryList.length                            },
                          { label: 'Answered',  value: answeredQueryCount                                },
                          { label: 'Pending',   value: periodQueryList.length - answeredQueryCount       },
                        ].map(s => (
                          <div key={s.label} className="text-center py-4">
                            <p className="text-xl font-bold mb-0.5" style={{ color: '#0f1f3d' }}>{s.value}</p>
                            <p className="text-xs text-gray-400">{s.label}</p>
                          </div>
                        ))}
                      </div>
                      {periodQueryList.length > 0 && (
                        <div>
                          {periodQueryList.map((q, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-3 px-5 py-3"
                              style={i < periodQueryList.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : {}}
                            >
                              <p className="text-sm text-gray-700 flex-1 truncate">{q.question}</p>
                              <span
                                className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                                style={q.status === 'answered' ? { backgroundColor: '#dcfce7', color: '#15803d' } : { backgroundColor: '#fef3c7', color: '#92400e' }}
                              >
                                {q.status === 'answered' ? 'Answered' : 'Pending'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </section>

        {/* ── 5. Recent activity ──────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-5" style={{ color: '#0f1f3d' }}>Recent activity</h2>
          <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
            {activity.map((item, i) => (
              <div
                key={i}
                className="px-6 py-4 flex items-center gap-4"
                style={i < activity.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : {}}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.type === 'Practice' ? '#eff6ff' : '#f0fdf4' }}
                >
                  {item.type === 'Practice'
                    ? <span style={{ color: '#1e40af' }}><PencilIcon /></span>
                    : <span style={{ color: '#15803d' }}><BookIcon /></span>
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>{item.topic}</p>
                  <p className="text-xs text-gray-400">{item.type} · {formatDate(item.date)}</p>
                </div>
                {item.score !== null && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={scoreBadgeStyle(item.score)}>
                    {item.score}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Upcoming classes ─────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-5" style={{ color: '#0f1f3d' }}>Upcoming classes</h2>
          <div
            className="bg-white rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center gap-5"
            style={{ borderColor: '#e5e7eb' }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                >
                  Grade {PLACEHOLDER_CLASS.grade}
                </span>
                <h3 className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>
                  {PLACEHOLDER_CLASS.topic}
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                {new Date(PLACEHOLDER_CLASS.date + 'T00:00:00').toLocaleDateString('en-GB', {
                  weekday: 'long', day: 'numeric', month: 'long',
                })}{' '}
                · {PLACEHOLDER_CLASS.time}
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              Join on Google Meet
            </a>
          </div>
        </section>

        {/* ── 7. Queries (Guided only) ────────────────────────────────────── */}
        {isGuided && (
          <section>
            <h2 className="text-lg font-bold mb-5" style={{ color: '#0f1f3d' }}>My queries</h2>
            <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e7eb' }}>
              {PLACEHOLDER_QUERIES.map((q, i) => (
                <div
                  key={i}
                  className="px-6 py-4 flex items-start gap-4"
                  style={i < PLACEHOLDER_QUERIES.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : {}}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium mb-1" style={{ color: '#0f1f3d' }}>{q.question}</p>
                    <p className="text-xs text-gray-400">{formatDate(q.date)}</p>
                  </div>
                  <span
                    className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={
                      q.status === 'answered'
                        ? { backgroundColor: '#dcfce7', color: '#15803d' }
                        : { backgroundColor: '#fef3c7', color: '#92400e' }
                    }
                  >
                    {q.status === 'answered' ? 'Answered' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  )
}
