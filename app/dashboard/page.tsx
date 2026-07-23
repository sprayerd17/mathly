'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import { useAuth, getActiveTier, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'
import TestAnalysisPanel from './TestAnalysisPanel'
import { getTopics } from '@/src/data/topic-registry'
import { getActivityLog, resetTopicAttempts, type ActivityLogEntry } from '@/src/lib/activity-log'
import { getStudyProgress } from '@/src/lib/study-progress'

// ── Types ─────────────────────────────────────────────────────────────────────

type Package = 'free' | 'pro' | 'max'

type ChildProfile = { name: string; grade: number }

type TopicProgress = {
  name: string
  slug: string
  studied: boolean
  score: number | null
  completedDate?: string
}

type ScoreEntry = {
  topic: string
  slug: string
  activityLabel: string
  score: number
  date: string | null
}

type Activity = {
  topic: string
  type: 'Study Guide' | 'Practice'
  date: string
  score: number | null
}

type GradeData = {
  topics: TopicProgress[]
  scores: ScoreEntry[]
  activity: Activity[]
}

const EMPTY_GRADE_DATA: GradeData = { topics: [], scores: [], activity: [] }

function toDateStr(d: Date | null): string | null {
  return d ? d.toISOString().slice(0, 10) : null
}

// Real dashboard data, sourced from the same topic registry the grade page
// uses (so slugs can't drift) plus the child's actual activityLog/studyProgress
// writes. Attempts are grouped by topic and kept in chronological order so the
// scores table reads as a growth story (Set 1 → Set 2 → Set 3), not a single
// collapsed "best" or "latest" number.
async function loadGradeData(
  uid: string,
  childIndex: number,
  grade: number,
  genericPracticeLabel: string,
  language: 'en' | 'af'
): Promise<GradeData> {
  const registryTopics = getTopics(String(grade), language)
  const [logEntries, studyEntries] = await Promise.all([
    getActivityLog(uid, childIndex, grade),
    getStudyProgress(uid, childIndex, grade),
  ])

  const studiedMap = new Map(studyEntries.filter(s => s.studied).map(s => [s.topicSlug, s]))

  const logsByTopic = new Map<string, ActivityLogEntry[]>()
  for (const entry of logEntries) {
    const list = logsByTopic.get(entry.topicSlug) ?? []
    list.push(entry)
    logsByTopic.set(entry.topicSlug, list)
  }
  for (const list of logsByTopic.values()) {
    list.sort((a, b) => (a.completedAt?.getTime() ?? 0) - (b.completedAt?.getTime() ?? 0))
  }

  const activityLabel = (entry: ActivityLogEntry) =>
    entry.activityType === 'practiceSet' && entry.setName ? entry.setName : genericPracticeLabel

  const topics: TopicProgress[] = registryTopics.map(rt => {
    const attempts = logsByTopic.get(rt.slug) ?? []
    const latest = attempts[attempts.length - 1]
    const studyEntry = studiedMap.get(rt.slug)
    return {
      name: rt.name,
      slug: rt.slug,
      studied: !!studyEntry,
      score: latest ? Math.round((latest.score / latest.total) * 100) : null,
      completedDate: studyEntry?.markedAt ? toDateStr(studyEntry.markedAt) ?? undefined : undefined,
    }
  })

  const scores: ScoreEntry[] = registryTopics.flatMap(rt =>
    (logsByTopic.get(rt.slug) ?? []).map(entry => ({
      topic: rt.name,
      slug: rt.slug,
      activityLabel: activityLabel(entry),
      score: Math.round((entry.score / entry.total) * 100),
      date: toDateStr(entry.completedAt),
    }))
  )

  const nameBySlug = new Map(registryTopics.map(rt => [rt.slug, rt.name]))
  const activity: Activity[] = [
    ...logEntries
      .filter(e => e.completedAt)
      .map(e => ({
        topic: nameBySlug.get(e.topicSlug) ?? e.topicSlug,
        type: 'Practice' as const,
        date: toDateStr(e.completedAt) as string,
        score: Math.round((e.score / e.total) * 100),
      })),
    ...studyEntries
      .filter(s => s.studied && s.markedAt)
      .map(s => ({
        topic: nameBySlug.get(s.topicSlug) ?? s.topicSlug,
        type: 'Study Guide' as const,
        date: toDateStr(s.markedAt) as string,
        score: null,
      })),
  ]

  return { topics, scores, activity }
}

// ── Panel defaults ────────────────────────────────────────────────────────────

const DEFAULT_PANELS: Record<string, boolean> = {
  progress: true,
  scores: true,
  focus: true,
  report: true,
  classes: true,
  testAnalysis: true,
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function scoreColor(score: number): string {
  if (score >= 80) return '#16a34a'
  if (score >= 50) return '#d97706'
  return '#dc2626'
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

const PACKAGE_STYLE: Record<Package, { bg: string; color: string }> = {
  free:    { bg: '#f3f4f6', color: '#374151' },
  pro:     { bg: '#eff6ff', color: '#1e40af' },
  max:     { bg: '#fef3c7', color: '#92400e' },
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 shrink-0 transition-transform duration-200"
      style={{ color: '#9ca3af', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#16a34a' }} aria-hidden="true">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl p-5" style={{ backgroundColor: '#f3f4f6' }}>
      <p className="text-xs text-gray-400 mb-1.5 leading-tight">{label}</p>
      <p className="text-2xl font-bold" style={{ color: accent ? '#1e40af' : '#0f1f3d' }}>
        {value}
      </p>
    </div>
  )
}

function CollapsiblePanel({
  id,
  title,
  summary,
  children,
  panels,
  onToggle,
}: {
  id: string
  title: string
  summary: string
  children: React.ReactNode
  panels: Record<string, boolean>
  onToggle: (id: string) => void
}) {
  const isOpen = panels[id] ?? true
  return (
    <div>
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-base font-bold flex-1" style={{ color: '#0f1f3d' }}>{title}</h2>
        <span className="text-sm shrink-0" style={{ color: '#9ca3af' }}>{summary}</span>
        <ChevronDownIcon open={isOpen} />
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.25s ease',
        }}
      >
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
          <div className="px-6 pb-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Upgrade prompt ────────────────────────────────────────────────────────────

function UpgradePrompt() {
  const t = useTranslations()
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl border p-10 text-center" style={{ borderColor: '#e5e7eb' }}>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#eff6ff' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-3" style={{ color: '#0f1f3d' }}>
            {t.dash_upgrade_title}
          </h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            {t.dash_upgrade_subtitle}
          </p>
          <ul className="text-sm text-gray-600 mb-8 space-y-2.5 text-left max-w-xs mx-auto">
            {[
              t.dash_upgrade_benefit_progress,
              t.dash_upgrade_benefit_scores,
              t.dash_upgrade_benefit_focus,
              t.dash_upgrade_benefit_report,
            ].map(item => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                  style={{ backgroundColor: '#dcfce7', color: '#15803d' }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/pricing"
            className="inline-block text-sm font-semibold px-8 py-3 rounded-xl text-white transition-colors shadow-sm"
            style={{ backgroundColor: '#1e40af' }}
          >
            {t.dash_upgrade_cta}
          </Link>
        </div>
      </main>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading: authLoading, updateActiveChild } = useAuth()
  const t = useTranslations()
  const [userName, setUserName]               = useState('')
  const [activeGrade, setActiveGrade]         = useState<number | null>(null)
  const [userPackage, setUserPackage]         = useState<Package>('free')
  const [mounted, setMounted]                 = useState(false)
  const [panels, setPanels]                   = useState<Record<string, boolean>>(DEFAULT_PANELS)
  const [children, setChildren]               = useState<ChildProfile[]>([])
  const [activeChildIndex, setActiveChildIndex] = useState<number>(0)
  const [reportPeriod, setReportPeriod]             = useState<'week' | 'month' | 'quarter'>('month')
  const [reportVisible, setReportVisible]           = useState(false)
  const [reportLastGenerated, setReportLastGenerated] = useState<string | null>(null)
  const [gradeData, setGradeData]                   = useState<GradeData>(EMPTY_GRADE_DATA)
  const [gradeDataVersion, setGradeDataVersion]     = useState(0)
  const [resetConfirmSlug, setResetConfirmSlug]     = useState<string | null>(null)
  const [resetting, setResetting]                   = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const savedPanels = localStorage.getItem('mathly_panels')
      if (savedPanels) setPanels({ ...DEFAULT_PANELS, ...JSON.parse(savedPanels) })
    } catch { /* ignore corrupt panel state */ }
  }, [])

  useEffect(() => {
    if (authLoading) return
    if (!user) { router.replace('/'); return }
    setUserName(user.name || user.email || t.dash_default_student_name)
    setUserPackage(getActiveTier(user))
    setChildren(user.children)
    setActiveChildIndex(user.activeChildIndex)
    setActiveGrade(user.children[user.activeChildIndex]?.grade ?? user.children[0]?.grade ?? null)
  }, [user, authLoading, router, t.dash_default_student_name])

  useEffect(() => {
    if (!user || activeGrade === null) return
    let cancelled = false
    const language = getActiveChild(user).language
    loadGradeData(user.uid, activeChildIndex, activeGrade, t.dash_activity_practice_questions, language)
      .then(data => { if (!cancelled) setGradeData(data) })
      .catch(err => console.error('[dashboard] failed to load grade data', err))
    return () => { cancelled = true }
  }, [user, activeChildIndex, activeGrade, gradeDataVersion, t.dash_activity_practice_questions])

  async function handleResetAttempts(slug: string) {
    if (!user || resetting || activeGrade === null) return
    setResetting(true)
    try {
      await resetTopicAttempts(user.uid, activeChildIndex, activeGrade, slug)
      setResetConfirmSlug(null)
      setGradeDataVersion(v => v + 1)
    } catch (err) {
      console.error('[dashboard] failed to reset attempts', err)
    } finally {
      setResetting(false)
    }
  }

  function togglePanel(id: string) {
    setPanels(prev => {
      const next = { ...prev, [id]: !prev[id] }
      localStorage.setItem('mathly_panels', JSON.stringify(next))
      return next
    })
  }

  function selectChild(i: number) {
    setActiveChildIndex(i)
    if (children[i]) setActiveGrade(children[i].grade)
    updateActiveChild(i)
  }

  if (!mounted || !userName || !user) return null
  if (userPackage === 'free') return <UpgradePrompt />

  const isMax = userPackage === 'max'
  const pkgStyle = PACKAGE_STYLE[userPackage]
  const pkgLabel: Record<Package, string> = { free: t.dash_package_free, pro: t.dash_package_pro, max: t.dash_package_max }

  // ── Active-grade data ────────────────────────────────────────────────────────
  const topics     = gradeData.topics
  const scores     = gradeData.scores
  const activity   = gradeData.activity

  // ── Stats computed from active grade (child or first user grade) ────────────
  const completedCount     = topics.filter(t => t.studied).length
  const primaryScoredTopics = topics.filter(t => t.score !== null)
  const avgScore           = primaryScoredTopics.length > 0
    ? Math.round(primaryScoredTopics.reduce((s, t) => s + (t.score as number), 0) / primaryScoredTopics.length)
    : 0

  // ── Streak (consecutive days with activity in primary grade) ────────────────
  const activityDateSet = new Set(activity.map(a => a.date))
  let streak = 0
  if (activityDateSet.size > 0) {
    const latestDate = [...activityDateSet].sort((a, b) => b.localeCompare(a))[0]
    const d = new Date(latestDate + 'T00:00:00')
    while (activityDateSet.has(d.toISOString().slice(0, 10))) {
      streak++
      d.setDate(d.getDate() - 1)
    }
  }

  // ── My Progress panel ───────────────────────────────────────────────────────
  // "Done" tracks the student's own "Mark as Studied" action on the Study
  // Guide tab — practice scores are a separate track, shown in My Scores.
  const notStarted = topics.filter(t => !t.studied && t.score === null)
  const inProgress = topics.filter(t => !t.studied && t.score !== null)
  const completed  = topics.filter(t => t.studied)
  const topicsDone = completed.length

  // ── My Scores panel ─────────────────────────────────────────────────────────
  const avgGradeScore  = scores.length > 0
    ? Math.round(scores.reduce((s, e) => s + e.score, 0) / scores.length)
    : 0
  const scoreGroups: { slug: string; topic: string; entries: ScoreEntry[] }[] = []
  for (const entry of scores) {
    const group = scoreGroups.find(g => g.slug === entry.slug)
    if (group) group.entries.push(entry)
    else scoreGroups.push({ slug: entry.slug, topic: entry.topic, entries: [entry] })
  }

  // ── Focus Areas panel ───────────────────────────────────────────────────────
  const weakTopics = topics.filter(t => t.score !== null && (t.score as number) < 60)

  // ── Progress Report data ────────────────────────────────────────────────────
  const PERIOD_DAYS_MAP  = { week: 7, month: 30, quarter: 90 } as const
  const PERIOD_LABEL_MAP = { week: t.dash_last_7_days, month: t.dash_last_30_days, quarter: t.dash_last_3_months }
  const rPDays           = PERIOD_DAYS_MAP[reportPeriod]
  const todayDate        = new Date()
  const rStartDate       = new Date(todayDate)
  rStartDate.setDate(todayDate.getDate() - (rPDays - 1))
  const rStartStr        = rStartDate.toISOString().slice(0, 10)
  const rEndStr          = todayDate.toISOString().slice(0, 10)
  const todayFormatted   = todayDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

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
  const completedInPeriod = topics.filter(t => t.studied && t.completedDate && t.completedDate >= rStartStr).length
  const reportStrengths   = topics.filter(t => t.score !== null && (t.score as number) >= 80)
  const reportNeedsAttn   = topics.filter(t => t.score !== null && (t.score as number) < 60)

  const allDaysInPeriod: string[] = []
  for (let i = rPDays - 1; i >= 0; i--) {
    const d = new Date(todayDate)
    d.setDate(todayDate.getDate() - i)
    allDaysInPeriod.push(d.toISOString().slice(0, 10))
  }

  const reportRecs: string[] = []
  if (inProgress.length > 0)
    reportRecs.push(
      t.dash_rec_finish_topic.replace('{topic}', inProgress[0].name)
    )
  if (reportNeedsAttn.length > 0)
    reportRecs.push(
      t.dash_rec_revisit_topic
        .replace('{topic}', reportNeedsAttn[0].name)
        .replace('{percent}', String(reportNeedsAttn[0].score))
    )
  if (notStarted.length > 0)
    reportRecs.push(
      inProgress.length > 0
        ? t.dash_rec_after_completing
            .replace('{completingTopic}', inProgress[0].name)
            .replace('{startTopic}', notStarted[0].name)
        : t.dash_rec_start_topic.replace('{topic}', notStarted[0].name)
    )

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* ── Welcome header (always visible) ───────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h1 className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>
              {t.dash_welcome_back.replace('{name}', userName)}
            </h1>
            {streak > 0 && (
              <div className="flex items-center gap-1.5 shrink-0 pt-1">
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>🔥</span>
                <span className="text-xl font-bold" style={{ color: '#0f1f3d' }}>{streak}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {children.length > 1 && children.map((child, i) => {
              const active = i === activeChildIndex
              return (
                <button
                  key={i}
                  onClick={() => selectChild(i)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all"
                  style={
                    active
                      ? { backgroundColor: '#1e40af', color: '#ffffff', borderColor: '#1e40af' }
                      : { backgroundColor: '#ffffff', color: '#0f1f3d', borderColor: '#d1d5db' }
                  }
                >
                  {child.name} · {t.dash_grade_label.replace('{grade}', String(child.grade))}
                </button>
              )
            })}
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: pkgStyle.bg, color: pkgStyle.color }}>
              {pkgLabel[userPackage]}
            </span>
          </div>
        </div>

        {/* ── Quick stats row (always visible) ──────────────────────────────── */}
        <div className="grid gap-4 mb-8 grid-cols-2 sm:grid-cols-3">
          <StatCard label={t.dash_stat_topics_completed} value={`${completedCount}/${topics.length}`} />
          <StatCard label={t.dash_stat_average_score}    value={`${avgScore}%`} />
          <StatCard label={t.dash_stat_study_time_week} value="0h 0min" />
        </div>

        {/* ── Collapsible panels ────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border divide-y" style={{ borderColor: '#e5e7eb' }}>

        {/* Panel 1: My Progress */}
        <CollapsiblePanel
          id="progress"
          title={t.dash_panel_progress_title}
          summary={t.dash_panel_progress_summary.replace('{done}', String(topicsDone)).replace('{total}', String(topics.length))}
          panels={panels}
          onToggle={togglePanel}
        >
          <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* To Do */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#d1d5db' }} />
                <span className="text-sm font-bold" style={{ color: '#374151' }}>{t.dash_kanban_todo}</span>
                <span className="text-xs text-gray-400">({notStarted.length})</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {notStarted.length === 0
                  ? <p className="text-xs text-gray-400 py-2">{t.dash_kanban_todo_empty}</p>
                  : notStarted.map(topic => (
                    <div key={topic.slug} className="text-sm py-2 px-3 rounded-lg" style={{ backgroundColor: '#f9fafb', color: '#374151' }}>
                      {topic.name}
                    </div>
                  ))
                }
              </div>
            </div>

            {/* In Progress */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#1e40af' }} />
                <span className="text-sm font-bold" style={{ color: '#374151' }}>{t.dash_kanban_in_progress}</span>
                <span className="text-xs text-gray-400">({inProgress.length})</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {inProgress.length === 0
                  ? <p className="text-xs text-gray-400 py-2">{t.dash_kanban_in_progress_empty}</p>
                  : inProgress.map(topic => (
                    <div key={topic.slug} className="flex items-center justify-between text-sm py-2 px-3 rounded-lg gap-2" style={{ backgroundColor: '#eff6ff', color: '#374151' }}>
                      <span className="truncate">{topic.name}</span>
                      <span className="text-xs shrink-0" style={{ color: '#1e40af' }}>{topic.score}%</span>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Done */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#16a34a' }} />
                <span className="text-sm font-bold" style={{ color: '#374151' }}>{t.dash_kanban_done}</span>
                <span className="text-xs text-gray-400">({completed.length})</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {completed.length === 0
                  ? <p className="text-xs text-gray-400 py-2">{t.dash_kanban_done_empty}</p>
                  : completed.map(topic => (
                    <div key={topic.slug} className="flex items-center gap-2 text-sm py-2 px-3 rounded-lg" style={{ backgroundColor: '#f0fdf4', color: '#374151' }}>
                      <CheckCircleIcon />
                      <span className="truncate">{topic.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </CollapsiblePanel>

        {/* Panel 2: My Scores */}
        <CollapsiblePanel
          id="scores"
          title={t.dash_panel_scores_title}
          summary={avgGradeScore > 0 ? t.dash_scores_avg.replace('{avg}', String(avgGradeScore)) : t.dash_scores_none_yet}
          panels={panels}
          onToggle={togglePanel}
        >
          <div className="pt-5">
            {scoreGroups.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-sm text-gray-500">{t.dash_scores_none_yet}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {scoreGroups.map(group => (
                  <div key={group.slug} className="rounded-xl border overflow-hidden" style={{ borderColor: '#f3f4f6' }}>
                    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3" style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                      <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>{group.topic}</p>
                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          href={activeGrade !== null ? `/grade/${activeGrade}/${group.slug}` : '/select-grade'}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                          style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
                        >
                          {t.dash_retry}
                        </Link>
                        {resetConfirmSlug !== group.slug && (
                          <button
                            onClick={() => setResetConfirmSlug(group.slug)}
                            className="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors"
                          >
                            {t.dash_reset_attempts}
                          </button>
                        )}
                      </div>
                    </div>

                    {resetConfirmSlug === group.slug && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3" style={{ backgroundColor: '#fff7f7', borderBottom: '1px solid #fecaca' }}>
                        <p className="text-xs text-gray-600 flex-1">{t.dash_reset_attempts_confirm_body.replace('{topic}', group.topic)}</p>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setResetConfirmSlug(null)}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                            style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
                          >
                            {t.dash_reset_attempts_cancel}
                          </button>
                          <button
                            onClick={() => handleResetAttempts(group.slug)}
                            disabled={resetting}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white disabled:opacity-60 transition-colors"
                            style={{ backgroundColor: '#dc2626' }}
                          >
                            {t.dash_reset_attempts_confirm_button}
                          </button>
                        </div>
                      </div>
                    )}

                    {group.entries.map((entry, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3 px-4 py-3 bg-white"
                        style={i < group.entries.length - 1 ? { borderBottom: '1px solid #f3f4f6' } : {}}
                      >
                        <p className="text-sm text-gray-600">{entry.activityLabel}</p>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: scoreColor(entry.score) }} />
                            <span className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{entry.score}%</span>
                          </div>
                          <p className="text-xs text-gray-400 w-16 text-right">{entry.date ? formatDate(entry.date) : '—'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </CollapsiblePanel>

        {/* Panel 3: Focus Areas */}
        <CollapsiblePanel
          id="focus"
          title={t.dash_panel_focus_title}
          summary={weakTopics.length > 0
            ? (weakTopics.length !== 1 ? t.dash_focus_summary_plural : t.dash_focus_summary_singular).replace('{count}', String(weakTopics.length))
            : t.dash_focus_summary_none}
          panels={panels}
          onToggle={togglePanel}
        >
          {weakTopics.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm text-gray-500">{t.dash_focus_empty}</p>
            </div>
          ) : (
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weakTopics.map(topic => (
                <div
                  key={topic.slug}
                  className="rounded-xl border p-4 flex items-center justify-between gap-3"
                  style={{ borderColor: '#fecaca', backgroundColor: '#fff7f7' }}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: scoreColor(topic.score as number) }} />
                      <span className="text-xs font-semibold" style={{ color: scoreColor(topic.score as number) }}>{topic.score}%</span>
                    </div>
                  </div>
                  <Link
                    href={activeGrade !== null ? `/grade/${activeGrade}/${topic.slug}` : '/select-grade'}
                    className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    style={{ backgroundColor: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' }}
                  >
                    {t.dash_review}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </CollapsiblePanel>

        {/* Panel 4: Progress Report */}
        <CollapsiblePanel
          id="report"
          title={t.dash_panel_report_title}
          summary={reportLastGenerated ? t.dash_report_last_generated.replace('{date}', reportLastGenerated) : t.dash_report_last_generated_never}
          panels={panels}
          onToggle={togglePanel}
        >
          <div className="pt-5">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {(['week', 'month', 'quarter'] as const).map(period => {
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
                    {PERIOD_LABEL_MAP[period]}
                  </button>
                )
              })}
              <button
                onClick={() => { setReportVisible(true); setReportLastGenerated(todayFormatted) }}
                className="px-6 py-2 rounded-xl text-sm font-semibold text-white transition-colors shadow-sm"
                style={{ backgroundColor: '#1e40af' }}
              >
                {t.dash_generate_report}
              </button>
            </div>

            {reportVisible && (
              <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>

                <div className="px-8 py-6 flex items-start justify-between gap-4" style={{ backgroundColor: '#0f1f3d' }}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#93c5fd' }}>
                      {t.dash_report_masthead}
                    </p>
                    <h3 className="text-white font-bold text-xl mb-1">{userName}</h3>
                    <p className="text-sm" style={{ color: '#a8b8d8' }}>
                      {t.dash_report_meta_line
                        .replace('{grade}', String(activeGrade))
                        .replace('{period}', PERIOD_LABEL_MAP[reportPeriod])
                        .replace('{date}', todayFormatted)}
                    </p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="shrink-0 text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors hover:bg-white/10"
                    style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                  >
                    {t.dash_print_report}
                  </button>
                </div>

                <div className="px-8 py-7 space-y-8">

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>{t.dash_report_summary_heading}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: t.dash_stat_topics_completed, value: String(completedInPeriod)                       },
                        { label: t.dash_stat_average_score,    value: periodAvgScore > 0 ? `${periodAvgScore}%` : '—' },
                        { label: t.dash_report_study_days,     value: String(studyDayCount)                           },
                        { label: t.dash_report_day_streak,     value: String(reportStreak)                            },
                      ].map(m => (
                        <div key={m.label} className="rounded-xl border p-4 text-center" style={{ borderColor: '#e5e7eb' }}>
                          <p className="text-2xl font-bold mb-1" style={{ color: '#0f1f3d' }}>{m.value}</p>
                          <p className="text-xs text-gray-400">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {reportStrengths.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>{t.dash_report_strengths_heading}</h4>
                      <div className="flex flex-col gap-2">
                        {reportStrengths.map(topic => (
                          <div key={topic.slug} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                            <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>{topic.score}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {reportNeedsAttn.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>{t.dash_report_needs_attention_heading}</h4>
                      <div className="flex flex-col gap-2">
                        {reportNeedsAttn.map(topic => (
                          <div key={topic.slug} className="rounded-xl px-4 py-4" style={{ backgroundColor: '#fff7f7', border: '1px solid #fca5a5' }}>
                            <div className="flex items-center justify-between mb-1.5">
                              <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{topic.name}</p>
                              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>{topic.score}%</span>
                            </div>
                            <p className="text-xs text-gray-500">{t.dash_report_needs_attention_hint}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>{t.dash_report_consistency_heading}</h4>
                      <span className="text-xs text-gray-400">{t.dash_report_days_of_days.replace('{studied}', String(studyDayCount)).replace('{total}', String(rPDays))}</span>
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
                        <span className="text-xs text-gray-400">{t.dash_report_legend_studied}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#e5e7eb' }} />
                        <span className="text-xs text-gray-400">{t.dash_report_legend_missed}</span>
                      </div>
                    </div>
                  </div>

                  {reportRecs.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6b7280' }}>{t.dash_report_recs_heading}</h4>
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

                </div>
              </div>
            )}
          </div>
        </CollapsiblePanel>

        {/* Panel 5: Upcoming Classes */}
        <CollapsiblePanel
          id="classes"
          title={t.dash_panel_classes_title}
          summary={t.dash_no_upcoming_class}
          panels={panels}
          onToggle={togglePanel}
        >
          <div
            className="mt-5 bg-white rounded-xl border p-5 text-center"
            style={{ borderColor: '#e5e7eb' }}
          >
            <p className="text-sm font-semibold mb-1.5" style={{ color: '#0f1f3d' }}>
              {t.dash_no_upcoming_class}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {t.dash_no_upcoming_class_body}
            </p>
            <Link
              href="/live-classes"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              {t.dash_browse_live_classes}
            </Link>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          id="testAnalysis"
          title={t.dash_panel_test_analysis_title}
          summary={t.dash_panel_test_analysis_summary}
          panels={panels}
          onToggle={togglePanel}
        >
          <div className="mt-5">
            <TestAnalysisPanel user={user} />
          </div>
        </CollapsiblePanel>

        </div>{/* end collapsible panels container */}

      </main>
    </div>
  )
}
