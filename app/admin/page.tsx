'use client'

import { useState, useEffect } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Lesson = {
  id: string
  grade: number
  topic: string
  date: string
  time: string
  duration: string
  language: 'en' | 'af'
  meetLink: string
  spotsAvailable: number
  visibleFrom: string
  status: 'draft' | 'published' | 'cancelled'
}

type QueryStatus = 'unanswered' | 'in-progress' | 'answered'

type Query = {
  id: string
  date: string
  name: string
  email: string
  grade: number
  topic: string
  struggle: string
  language: 'en' | 'af'
  status: QueryStatus
}

type QueryGroup = {
  key: string
  topic: string
  struggle: string
  queries: Query[]
}

type SubscriberPackage = 'free' | 'pro' | 'guided'
type SubscriberStatus  = 'active' | 'expired' | 'cancelled'

type Subscriber = {
  id: string
  name: string
  email: string
  grades: number[]
  language: 'en' | 'af'
  package: SubscriberPackage
  status: SubscriberStatus
  joinDate: string
  renewalDate: string
}

type RequestStatus = 'unreviewed' | 'in-progress' | 'completed'

type Request = {
  id: string
  date: string
  name: string
  email: string
  grade: number
  language: 'en' | 'af'
  requestType: string
  description: string
  status: RequestStatus
}

type LiveInterestEntry = {
  id: string
  name: string
  email: string
  grades: number[]
  date: string
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LESSON_GRADES = [8, 9, 10, 11, 12]
const ALL_GRADES    = [4, 5, 6, 7, 8, 9, 10, 11, 12]
const DURATIONS     = ['30min', '1hour', '1.5hours', '2hours']
const SIDEBAR_ITEMS = ['Lesson Schedule', 'Queries', 'Requests', 'Subscribers', 'Live Interest']
const ADMIN_PASSWORD = 'xAN2Xl7ic7%G'
const AUTH_KEY       = 'mathly-admin-auth'
const STORAGE_KEY    = 'mathly_lessons'

const EMPTY_FORM: Omit<Lesson, 'id'> = {
  grade: 8,
  topic: '',
  date: '',
  time: '',
  duration: '1hour',
  language: 'en',
  meetLink: '',
  spotsAvailable: 10,
  visibleFrom: '',
  status: 'draft',
}

const LESSON_STATUS_STYLES: Record<Lesson['status'], { bg: string; color: string }> = {
  draft:     { bg: '#f3f4f6', color: '#6b7280' },
  published: { bg: '#dcfce7', color: '#15803d' },
  cancelled: { bg: '#fee2e2', color: '#b91c1c' },
}

const QUERY_TOPICS = [
  'Algebra', 'Trigonometry', 'Functions', 'Statistics',
  'Geometry', 'Fractions', 'Decimals',
]

const QUERY_STATUS_STYLES: Record<QueryStatus, { bg: string; color: string; label: string }> = {
  unanswered:    { bg: '#fee2e2', color: '#b91c1c', label: 'Unanswered' },
  'in-progress': { bg: '#fef3c7', color: '#92400e', label: 'In Progress' },
  answered:      { bg: '#dcfce7', color: '#15803d', label: 'Answered'   },
}

const SUB_PACKAGE_STYLES: Record<SubscriberPackage, { bg: string; color: string; label: string }> = {
  free:   { bg: '#f3f4f6', color: '#6b7280', label: 'Free'   },
  pro:    { bg: '#dbeafe', color: '#1e40af', label: 'Pro'    },
  guided: { bg: '#0f1f3d', color: '#e0e7ff', label: 'Guided' },
}

const SUB_STATUS_STYLES: Record<SubscriberStatus, { bg: string; color: string; label: string }> = {
  active:    { bg: '#dcfce7', color: '#15803d', label: 'Active'    },
  expired:   { bg: '#fef3c7', color: '#92400e', label: 'Expired'   },
  cancelled: { bg: '#fee2e2', color: '#b91c1c', label: 'Cancelled' },
}

const PLACEHOLDER_SUBSCRIBERS: Subscriber[] = [
  {
    id: 'sub1',
    name: 'Liam van der Merwe',
    email: 'liam.vdm@gmail.com',
    grades: [10, 11],
    language: 'af',
    package: 'pro',
    status: 'active',
    joinDate: '2026-02-14',
    renewalDate: '2026-03-14',
  },
  {
    id: 'sub2',
    name: 'Amahle Dlamini',
    email: 'amahle.d@outlook.com',
    grades: [12],
    language: 'en',
    package: 'guided',
    status: 'active',
    joinDate: '2026-03-01',
    renewalDate: '2026-04-01',
  },
  {
    id: 'sub3',
    name: 'Connor Botha',
    email: 'c.botha@gmail.com',
    grades: [8],
    language: 'en',
    package: 'free',
    status: 'active',
    joinDate: '2026-04-10',
    renewalDate: '',
  },
  {
    id: 'sub4',
    name: 'Zanele Khumalo',
    email: 'zanele.k@webmail.co.za',
    grades: [9, 10],
    language: 'en',
    package: 'pro',
    status: 'expired',
    joinDate: '2025-11-20',
    renewalDate: '2026-01-20',
  },
  {
    id: 'sub5',
    name: 'Pieter Rousseau',
    email: 'p.rousseau@icloud.com',
    grades: [11],
    language: 'af',
    package: 'guided',
    status: 'cancelled',
    joinDate: '2026-01-05',
    renewalDate: '2026-02-05',
  },
]

const PLACEHOLDER_QUERIES: Query[] = [
  // Group 1: Algebra – 4 students
  {
    id: 'q1',
    date: '2026-05-15',
    name: 'Liam van der Merwe',
    email: 'liam.vdm@gmail.com',
    grade: 9,
    topic: 'Algebra',
    struggle: "I don't understand how to solve equations with brackets on both sides",
    language: 'en',
    status: 'unanswered',
  },
  {
    id: 'q2',
    date: '2026-05-16',
    name: 'Amahle Dlamini',
    email: 'amahle.d@outlook.com',
    grade: 10,
    topic: 'Algebra',
    struggle: "I don't understand how to solve equations with brackets on both sides",
    language: 'en',
    status: 'unanswered',
  },
  {
    id: 'q3',
    date: '2026-05-17',
    name: 'Jake Pretorius',
    email: 'jake.p@gmail.com',
    grade: 9,
    topic: 'Algebra',
    struggle: "I don't understand how to solve equations with brackets on both sides",
    language: 'en',
    status: 'unanswered',
  },
  {
    id: 'q4',
    date: '2026-05-18',
    name: 'Nadia Venter',
    email: 'nadia.v@gmail.com',
    grade: 11,
    topic: 'Algebra',
    struggle: "I don't understand how to solve equations with brackets on both sides",
    language: 'en',
    status: 'unanswered',
  },
  // Group 2: Trigonometry – 3 students
  {
    id: 'q5',
    date: '2026-05-17',
    name: 'Connor Botha',
    email: 'c.botha@gmail.com',
    grade: 11,
    topic: 'Trigonometry',
    struggle: 'Confused about when to use sin, cos or tan in right-angled triangles',
    language: 'en',
    status: 'in-progress',
  },
  {
    id: 'q6',
    date: '2026-05-18',
    name: 'Zanele Khumalo',
    email: 'zanele.k@webmail.co.za',
    grade: 11,
    topic: 'Trigonometry',
    struggle: 'Confused about when to use sin, cos or tan in right-angled triangles',
    language: 'en',
    status: 'unanswered',
  },
  {
    id: 'q7',
    date: '2026-05-19',
    name: 'Ruan Steyn',
    email: 'r.steyn@gmail.com',
    grade: 12,
    topic: 'Trigonometry',
    struggle: 'Confused about when to use sin, cos or tan in right-angled triangles',
    language: 'en',
    status: 'unanswered',
  },
  // Group 3: Fractions – 2 students
  {
    id: 'q8',
    date: '2026-05-18',
    name: 'Pieter Rousseau',
    email: 'p.rousseau@icloud.com',
    grade: 7,
    topic: 'Fractions',
    struggle: 'Ek verstaan nie hoe om gemengde getalle te deel nie',
    language: 'af',
    status: 'answered',
  },
  {
    id: 'q9',
    date: '2026-05-19',
    name: 'Lerato Mokoena',
    email: 'lerato.m@gmail.com',
    grade: 7,
    topic: 'Fractions',
    struggle: 'Ek verstaan nie hoe om gemengde getalle te deel nie',
    language: 'af',
    status: 'answered',
  },
]

const REQUESTS_KEY       = 'mathly_requests'
const STUDENT_QUERIES_KEY = 'mathly_queries'

const REQUEST_TYPES = ['Missing Topic', 'Missing Grade Content', 'Feature Request', 'Other']

const REQUEST_STATUS_STYLES: Record<RequestStatus, { bg: string; color: string; label: string }> = {
  unreviewed:    { bg: '#fee2e2', color: '#b91c1c', label: 'Unreviewed'  },
  'in-progress': { bg: '#fef3c7', color: '#92400e', label: 'In Progress' },
  completed:     { bg: '#dcfce7', color: '#15803d', label: 'Completed'   },
}

const PLACEHOLDER_REQUESTS: Request[] = [
  {
    id: 'req1',
    date: '2026-05-10',
    name: 'Amahle Dlamini',
    email: 'amahle.d@outlook.com',
    grade: 12,
    language: 'en',
    requestType: 'Missing Topic',
    description: "I can't find anything on Complex Numbers for Grade 12. It's in the CAPS syllabus but there's no content for it.",
    status: 'unreviewed',
  },
  {
    id: 'req2',
    date: '2026-05-14',
    name: 'Pieter Joubert',
    email: 'pieter.j@gmail.com',
    grade: 9,
    language: 'af',
    requestType: 'Missing Grade Content',
    description: 'Graad 9 het baie min inhoud. Veral vir Meetkunde en Verhoudings.',
    status: 'in-progress',
  },
  {
    id: 'req3',
    date: '2026-05-17',
    name: 'Zanele Mokoena',
    email: 'zanele.m@webmail.co.za',
    grade: 10,
    language: 'en',
    requestType: 'Feature Request',
    description: "It would be great to have a progress tracker so I can see which topics I've already studied.",
    status: 'completed',
  },
]

const PLACEHOLDER_INTEREST: LiveInterestEntry[] = [
  { id: 'li1', name: 'Amahle Dlamini',     email: 'amahle.d@outlook.com',   grades: [12],     date: '2026-05-10' },
  { id: 'li2', name: 'Liam van der Merwe', email: 'liam.vdm@gmail.com',     grades: [10, 11], date: '2026-05-11' },
  { id: 'li3', name: 'Connor Botha',       email: 'c.botha@gmail.com',      grades: [8],      date: '2026-05-12' },
  { id: 'li4', name: 'Zanele Khumalo',     email: 'zanele.k@webmail.co.za', grades: [9, 10],  date: '2026-05-13' },
  { id: 'li5', name: 'Ayasha Naidoo',      email: 'ayasha.n@gmail.com',     grades: [11, 12], date: '2026-05-14' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [mounted, setMounted]       = useState(false)
  const [authed, setAuthed]         = useState(false)
  const [password, setPassword]     = useState('')
  const [pwError, setPwError]       = useState(false)
  const [activeSection, setSection] = useState('Lesson Schedule')

  // Lesson schedule
  const [lessons, setLessons]     = useState<Lesson[]>([])
  const [form, setForm]           = useState<Omit<Lesson, 'id'>>(EMPTY_FORM)
  const [editingId, setEditingId] = useState<string | null>(null)

  // Queries
  const [queries, setQueries] = useState<Query[]>(PLACEHOLDER_QUERIES)
  const [qView, setQView]     = useState<'grouped' | 'individual'>('grouped')
  const [qGrade, setQGrade]   = useState('')
  const [qTopic, setQTopic]   = useState('')
  const [qStatus, setQStatus] = useState('')
  const [qSort, setQSort]     = useState('newest')
  const [expandedGroups, setExpandedGroups]           = useState<Set<string>>(new Set())
  const [groupVideoLinks, setGroupVideoLinks]         = useState<Record<string, string>>({})
  const [groupSentStatus, setGroupSentStatus]         = useState<Record<string, boolean>>({})
  const [expandedStudentLists, setExpandedStudentLists] = useState<Set<string>>(new Set())

  // Requests
  const [requests, setRequests] = useState<Request[]>([])
  const [rGrade, setRGrade]     = useState('')
  const [rType, setRType]       = useState('')
  const [rStatus, setRStatus]   = useState('')
  const [rSort, setRSort]       = useState('newest')

  // Subscribers
  const [subscribers]           = useState<Subscriber[]>(PLACEHOLDER_SUBSCRIBERS)
  const [sPackage, setSPackage] = useState('')
  const [sGrade, setSGrade]     = useState('')
  const [sLang, setSLang]       = useState('')
  const [sStatus, setSStatus]   = useState('')
  const [sSort, setSSort]       = useState('newest')

  // Live Interest
  const [interestData] = useState<LiveInterestEntry[]>(PLACEHOLDER_INTEREST)

  useEffect(() => {
    setMounted(true)
    if (localStorage.getItem(AUTH_KEY) === 'true') setAuthed(true)
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) setLessons(JSON.parse(raw))

    const reqRaw = localStorage.getItem(REQUESTS_KEY)
    if (reqRaw) {
      setRequests(JSON.parse(reqRaw))
    } else {
      setRequests(PLACEHOLDER_REQUESTS)
      localStorage.setItem(REQUESTS_KEY, JSON.stringify(PLACEHOLDER_REQUESTS))
    }

    try {
      const sqRaw = localStorage.getItem(STUDENT_QUERIES_KEY)
      if (sqRaw) {
        const studentQueries = JSON.parse(sqRaw) as Array<{
          date: string; grade: string; topic: string; specificStruggle: string;
          note: string; language: 'en' | 'af'; userName: string; userEmail: string;
        }>
        const mapped: Query[] = studentQueries.map((q, i) => ({
          id:       `real-${i}`,
          date:     q.date,
          name:     q.userName,
          email:    q.userEmail,
          grade:    Number(q.grade),
          topic:    q.topic,
          struggle: q.specificStruggle,
          language: q.language,
          status:   'unanswered' as QueryStatus,
        }))
        setQueries([...PLACEHOLDER_QUERIES, ...mapped])
      }
    } catch { /* ignore */ }
  }, [])

  // ── Auth ──────────────────────────────────────────────────────────────────

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true')
      setAuthed(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY)
    setAuthed(false)
    setPassword('')
  }

  // ── Lesson schedule ───────────────────────────────────────────────────────

  function persist(updated: Lesson[]) {
    setLessons(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (editingId) {
      persist(lessons.map(l => l.id === editingId ? { ...form, id: editingId } : l))
      setEditingId(null)
    } else {
      persist([...lessons, { ...form, id: crypto.randomUUID() }])
    }
    setForm(EMPTY_FORM)
  }

  function handleEdit(lesson: Lesson) {
    setEditingId(lesson.id)
    const { id, ...rest } = lesson
    setForm(rest)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDelete(id: string) {
    persist(lessons.filter(l => l.id !== id))
    if (editingId === id) { setEditingId(null); setForm(EMPTY_FORM) }
  }

  function cancelEdit() { setEditingId(null); setForm(EMPTY_FORM) }

  function field(key: keyof Omit<Lesson, 'id'>, val: string | number) {
    setForm(f => ({ ...f, [key]: val }))
  }

  // ── Queries ───────────────────────────────────────────────────────────────

  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const weekStr = oneWeekAgo.toISOString().slice(0, 10)

  const filteredQueries = queries
    .filter(q => !qGrade  || q.grade === Number(qGrade))
    .filter(q => !qTopic  || q.topic === qTopic)
    .filter(q => !qStatus || q.status === qStatus)
    .sort((a, b) => {
      if (qSort === 'oldest') return a.date.localeCompare(b.date)
      if (qSort === 'grade')  return a.grade - b.grade
      if (qSort === 'topic')  return a.topic.localeCompare(b.topic)
      return b.date.localeCompare(a.date)
    })

  function exportCsv() {
    const headers = ['Date', 'Name', 'Email', 'Grade', 'Topic', 'Struggle', 'Language', 'Status']
    const rows = filteredQueries.map(q => [
      q.date,
      `"${q.name}"`,
      q.email,
      `Grade ${q.grade}`,
      q.topic,
      `"${q.struggle.replace(/"/g, '""')}"`,
      q.language.toUpperCase(),
      q.status,
    ])
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'queries.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearQFilters() {
    setQGrade('')
    setQTopic('')
    setQStatus('')
    setQSort('newest')
  }

  const groupedQueries: QueryGroup[] = (() => {
    const map: Record<string, QueryGroup> = {}
    queries.forEach(q => {
      const key = `${q.topic}|||${q.struggle}`
      if (!map[key]) map[key] = { key, topic: q.topic, struggle: q.struggle, queries: [] }
      map[key].queries.push(q)
    })
    return Object.values(map).sort((a, b) => b.queries.length - a.queries.length)
  })()

  function toggleGroup(key: string) {
    setExpandedGroups(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function toggleStudentList(key: string) {
    setExpandedStudentLists(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function sendGroupResponse(key: string) {
    if (!groupVideoLinks[key]?.trim()) return
    setGroupSentStatus(prev => ({ ...prev, [key]: true }))
  }

  const uniqueTopics       = new Set(queries.map(q => q.topic)).size
  const uniqueQueryTopics  = [...new Set(queries.map(q => q.topic))].sort()
  const unansweredGroups = groupedQueries.filter(g => !groupSentStatus[g.key]).length
  const responsesSent    = Object.values(groupSentStatus).filter(Boolean).length

  // ── Subscribers ───────────────────────────────────────────────────────────

  const filteredSubscribers = subscribers
    .filter(s => !sPackage || s.package === sPackage)
    .filter(s => !sGrade   || s.grades.includes(Number(sGrade)))
    .filter(s => !sLang    || s.language === sLang)
    .filter(s => !sStatus  || s.status === sStatus)
    .sort((a, b) => {
      if (sSort === 'oldest')  return a.joinDate.localeCompare(b.joinDate)
      if (sSort === 'name-az') return a.name.localeCompare(b.name)
      return b.joinDate.localeCompare(a.joinDate)
    })

  function exportSubsCsv() {
    const headers = ['Name', 'Email', 'Grades', 'Language', 'Package', 'Status', 'Join Date', 'Renewal Date']
    const rows = filteredSubscribers.map(s => [
      `"${s.name}"`,
      s.email,
      `"${s.grades.map(g => `Grade ${g}`).join(', ')}"`,
      s.language.toUpperCase(),
      s.package,
      s.status,
      s.joinDate,
      s.renewalDate || '—',
    ])
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'subscribers.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearSFilters() {
    setSPackage('')
    setSGrade('')
    setSLang('')
    setSStatus('')
    setSSort('newest')
  }

  // ── Requests ──────────────────────────────────────────────────────────────

  const filteredRequests = requests
    .filter(r => !rGrade  || r.grade === Number(rGrade))
    .filter(r => !rType   || r.requestType === rType)
    .filter(r => !rStatus || r.status === rStatus)
    .sort((a, b) =>
      rSort === 'oldest'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
    )

  function updateRequestStatus(id: string, newStatus: RequestStatus) {
    const updated = requests.map(r => r.id === id ? { ...r, status: newStatus } : r)
    setRequests(updated)
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated))
  }

  function exportRequestsCsv() {
    const headers = ['Date', 'Name', 'Email', 'Grade', 'Language', 'Request Type', 'Description', 'Status']
    const rows = filteredRequests.map(r => [
      r.date,
      `"${r.name}"`,
      r.email,
      `Grade ${r.grade}`,
      r.language.toUpperCase(),
      r.requestType,
      `"${r.description.replace(/"/g, '""')}"`,
      r.status,
    ])
    const csv  = [headers.join(','), ...rows.map(row => row.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'requests.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearRFilters() {
    setRGrade('')
    setRType('')
    setRStatus('')
    setRSort('newest')
  }

  // ── Live Interest ─────────────────────────────────────────────────────────

  const iGradeCounts: Record<number, number> = {}
  LESSON_GRADES.forEach(g => { iGradeCounts[g] = 0 })
  interestData.forEach(e => e.grades.forEach(g => { if (iGradeCounts[g] !== undefined) iGradeCounts[g]++ }))
  const iMaxCount = Math.max(...Object.values(iGradeCounts), 1)

  function exportInterestCsv() {
    const headers = ['Name', 'Email', 'Grades Interested', 'Date Registered']
    const rows = interestData.map(e => [
      `"${e.name}"`,
      e.email,
      `"${e.grades.map(g => `Grade ${g}`).join(', ')}"`,
      e.date,
    ])
    const csv  = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'live-interest.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  // ── Early returns ─────────────────────────────────────────────────────────

  if (!mounted) return null

  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div
          className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-sm"
          style={{ border: '1px solid #e5e7eb' }}
        >
          <div className="text-center mb-8">
            <span
              className="text-2xl font-bold"
              style={{ color: '#0f1f3d', fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Mathly
            </span>
            <p className="text-sm text-gray-500 mt-1">Admin access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{ borderColor: pwError ? '#ef4444' : '#d1d5db' }}
                placeholder="Enter admin password"
                autoFocus
              />
              {pwError && <p className="text-xs text-red-500 mt-1.5">Incorrect password</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: '#1e40af' }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#f8fafc' }}>

      {/* Sidebar */}
      <aside
        className="w-56 shrink-0 flex flex-col"
        style={{ backgroundColor: '#0f1f3d', minHeight: '100vh' }}
      >
        <div className="px-6 py-6 border-b" style={{ borderColor: '#1e3560' }}>
          <span
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Mathly
          </span>
          <p className="text-xs mt-0.5" style={{ color: '#93c5fd' }}>Admin</p>
        </div>

        <nav className="flex-1 py-4">
          {SIDEBAR_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className="w-full text-left px-6 py-3 text-sm font-medium transition-colors"
              style={{
                backgroundColor: activeSection === item ? 'rgba(30,64,175,0.4)' : 'transparent',
                color: activeSection === item ? '#fff' : '#a8b8d8',
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="px-6 py-5 border-t" style={{ borderColor: '#1e3560' }}>
          <button
            onClick={handleLogout}
            className="text-sm font-semibold transition-colors hover:text-white"
            style={{ color: '#a8b8d8' }}
          >
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* ── Lesson Schedule ─────────────────────────────────────────────── */}
        {activeSection === 'Lesson Schedule' ? (
          <>
            <h1 className="text-2xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
              Lesson Schedule
            </h1>

            {/* Form */}
            <div
              className="bg-white rounded-2xl shadow-sm p-7 mb-8"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <h2 className="text-base font-bold mb-6" style={{ color: '#0f1f3d' }}>
                {editingId ? 'Edit Lesson' : 'Add New Lesson'}
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Grade</label>
                  <select
                    value={form.grade}
                    onChange={e => field('grade', Number(e.target.value))}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  >
                    {LESSON_GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Language</label>
                  <div className="flex gap-2 h-[42px]">
                    {(['en', 'af'] as const).map(lang => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => field('language', lang)}
                        className="flex-1 rounded-lg text-sm font-semibold border transition-all"
                        style={
                          form.language === lang
                            ? { backgroundColor: '#1e40af', color: '#fff', borderColor: '#1e40af' }
                            : { backgroundColor: '#f8fafc', color: '#374151', borderColor: '#d1d5db' }
                        }
                      >
                        {lang === 'en' ? 'English' : 'Afrikaans'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Topic</label>
                  <input
                    type="text"
                    value={form.topic}
                    onChange={e => field('topic', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    placeholder="e.g. Quadratic Equations"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => field('date', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Time</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={e => field('time', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Duration</label>
                  <select
                    value={form.duration}
                    onChange={e => field('duration', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  >
                    {DURATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Google Meet Link</label>
                  <input
                    type="url"
                    value={form.meetLink}
                    onChange={e => field('meetLink', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    placeholder="https://meet.google.com/..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Spots Available</label>
                  <input
                    type="number"
                    value={form.spotsAvailable}
                    onChange={e => field('spotsAvailable', Number(e.target.value))}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    min={1}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Visible to public from</label>
                  <input
                    type="date"
                    value={form.visibleFrom}
                    onChange={e => field('visibleFrom', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>Status</label>
                  <select
                    value={form.status}
                    onChange={e => field('status', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2.5 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                    required
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="sm:col-span-2 lg:col-span-3 flex gap-3 pt-1">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {editingId ? 'Save changes' : 'Add lesson'}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="px-6 py-2.5 rounded-lg text-sm font-semibold border"
                      style={{ borderColor: '#d1d5db', color: '#374151' }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Lessons table */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
              <div className="px-7 py-5 border-b" style={{ borderColor: '#f3f4f6' }}>
                <h2 className="text-base font-bold" style={{ color: '#0f1f3d' }}>
                  All Lessons ({lessons.length})
                </h2>
              </div>

              {lessons.length === 0 ? (
                <div className="px-7 py-14 text-center text-sm text-gray-400">
                  No lessons yet. Add one above.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                        {['Grade', 'Topic', 'Date', 'Time', 'Duration', 'Spots', 'Visible from', 'Language', 'Status', ''].map(h => (
                          <th
                            key={h}
                            className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: '#6b7280' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {lessons.map(lesson => (
                        <tr key={lesson.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: '#0f1f3d' }}>Gr {lesson.grade}</td>
                          <td className="px-5 py-4" style={{ color: '#0f1f3d' }}>{lesson.topic}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{lesson.date}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{lesson.time}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{lesson.duration}</td>
                          <td className="px-5 py-4 text-gray-500">{lesson.spotsAvailable}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{lesson.visibleFrom}</td>
                          <td className="px-5 py-4">
                            <span
                              className="text-xs font-bold px-2.5 py-1 rounded-full"
                              style={
                                (lesson.language ?? 'en') === 'en'
                                  ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                                  : { backgroundColor: '#fef3c7', color: '#b45309' }
                              }
                            >
                              {(lesson.language ?? 'en').toUpperCase()}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
                              style={LESSON_STATUS_STYLES[lesson.status]}
                            >
                              {lesson.status}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <button onClick={() => handleEdit(lesson)} className="text-xs font-semibold hover:underline" style={{ color: '#1e40af' }}>Edit</button>
                              <button onClick={() => handleDelete(lesson.id)} className="text-xs font-semibold hover:underline" style={{ color: '#b91c1c' }}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>

        /* ── Queries ───────────────────────────────────────────────────────── */
        ) : activeSection === 'Queries' ? (
          <>
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
                Student Queries
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Queries submitted by students. Filter and group them to prepare batch responses.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
              {[
                { label: 'Total Queries',     value: queries.length   },
                { label: 'Unique Topics',     value: uniqueTopics     },
                { label: 'Unanswered Groups', value: unansweredGroups },
                { label: 'Responses Sent',    value: responsesSent    },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl shadow-sm px-7 py-5"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#6b7280' }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Toggle */}
            <div
              className="flex gap-1 mb-6 bg-white rounded-xl p-1 w-fit"
              style={{ border: '1px solid #e5e7eb' }}
            >
              {(['Grouped', 'Individual'] as const).map(label => {
                const v = label.toLowerCase() as 'grouped' | 'individual'
                return (
                  <button
                    key={label}
                    onClick={() => setQView(v)}
                    className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={qView === v
                      ? { backgroundColor: '#0f1f3d', color: '#ffffff' }
                      : { backgroundColor: 'transparent', color: '#6b7280' }
                    }
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {qView === 'grouped' ? (
              /* ── Grouped view ── */
              groupedQueries.length === 0 ? (
                <div
                  className="rounded-2xl py-16 text-center text-sm text-gray-400"
                  style={{ border: '1px dashed #d1d5db' }}
                >
                  No queries yet. Queries will appear here once students start submitting them.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {groupedQueries.map(group => {
                    const open         = expandedGroups.has(group.key)
                    const studentsOpen = expandedStudentLists.has(group.key)
                    const sent         = groupSentStatus[group.key] ?? false
                    const videoLink    = groupVideoLinks[group.key] ?? ''

                    const gradeCounts: Record<number, number> = {}
                    group.queries.forEach(q => { gradeCounts[q.grade] = (gradeCounts[q.grade] || 0) + 1 })
                    const langCounts: Record<string, number> = {}
                    group.queries.forEach(q => { langCounts[q.language] = (langCounts[q.language] || 0) + 1 })

                    return (
                      <div
                        key={group.key}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden"
                        style={{ border: '1px solid #e5e7eb' }}
                      >
                        {/* Card header — click to collapse/expand */}
                        <button
                          className="w-full px-6 pt-5 pb-4 text-left"
                          onClick={() => toggleGroup(group.key)}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-base font-bold" style={{ color: '#0f1f3d' }}>
                                  {group.topic}
                                </span>
                                <span
                                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                                >
                                  {group.queries.length} student{group.queries.length !== 1 ? 's' : ''}
                                </span>
                                <span
                                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                                  style={sent
                                    ? { backgroundColor: '#dcfce7', color: '#15803d' }
                                    : { backgroundColor: '#fee2e2', color: '#b91c1c' }
                                  }
                                >
                                  {sent ? 'Response Sent' : 'Unanswered'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{group.struggle}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {Object.entries(gradeCounts)
                                  .sort(([a], [b]) => Number(a) - Number(b))
                                  .map(([g, count]) => (
                                    <span
                                      key={g}
                                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                                      style={{ backgroundColor: '#f3f4f6', color: '#374151' }}
                                    >
                                      Gr {g}{count > 1 ? ` ×${count}` : ''}
                                    </span>
                                  ))}
                                {Object.entries(langCounts).map(([lang, count]) => (
                                  <span
                                    key={lang}
                                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                                    style={lang === 'en'
                                      ? { backgroundColor: '#eff6ff', color: '#1e40af' }
                                      : { backgroundColor: '#f5f3ff', color: '#6d28d9' }
                                    }
                                  >
                                    {lang.toUpperCase()}{count > 1 ? ` ×${count}` : ''}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5 shrink-0 mt-0.5 transition-transform"
                              style={{ color: '#9ca3af', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </button>

                        {open && (
                          <div style={{ borderTop: '1px solid #f3f4f6' }}>
                            {/* Student list */}
                            <div className="px-6 py-4">
                              <button
                                onClick={() => toggleStudentList(group.key)}
                                className="text-xs font-semibold hover:underline mb-3"
                                style={{ color: '#1e40af' }}
                              >
                                {studentsOpen ? '▲ Hide students' : '▼ Show students'}
                              </button>
                              {studentsOpen && (
                                <table className="w-full text-sm mt-2">
                                  <thead>
                                    <tr style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: '#fafafa' }}>
                                      {['Name', 'Email', 'Grade', 'Language', 'Date'].map(h => (
                                        <th
                                          key={h}
                                          className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                                          style={{ color: '#6b7280' }}
                                        >
                                          {h}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {group.queries.map(q => (
                                      <tr key={q.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                                        <td className="px-4 py-3 font-medium whitespace-nowrap" style={{ color: '#0f1f3d' }}>{q.name}</td>
                                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{q.email}</td>
                                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">Grade {q.grade}</td>
                                        <td className="px-4 py-3">
                                          <span
                                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                                            style={q.language === 'en'
                                              ? { backgroundColor: '#eff6ff', color: '#1e40af' }
                                              : { backgroundColor: '#f5f3ff', color: '#6d28d9' }
                                            }
                                          >
                                            {q.language.toUpperCase()}
                                          </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{q.date}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              )}
                            </div>

                            {/* Video response */}
                            <div className="px-6 py-4" style={{ borderTop: '1px solid #f3f4f6' }}>
                              <p
                                className="text-xs font-semibold uppercase tracking-wide mb-3"
                                style={{ color: '#6b7280' }}
                              >
                                Video Response
                              </p>
                              {sent ? (
                                <div className="flex items-center gap-2" style={{ color: '#15803d' }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm font-semibold">
                                    Response sent to {group.queries.length} student{group.queries.length !== 1 ? 's' : ''}
                                  </span>
                                </div>
                              ) : (
                                <div className="flex gap-3">
                                  <input
                                    type="url"
                                    value={videoLink}
                                    onChange={e => setGroupVideoLinks(prev => ({ ...prev, [group.key]: e.target.value }))}
                                    placeholder="Paste video link (YouTube, Loom, etc.)"
                                    className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
                                    style={{ borderColor: '#d1d5db' }}
                                  />
                                  <button
                                    onClick={() => sendGroupResponse(group.key)}
                                    disabled={!videoLink.trim()}
                                    className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity disabled:opacity-40"
                                    style={{ backgroundColor: '#1e40af' }}
                                  >
                                    Send
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            ) : (
              /* ── Individual view ── */
              <>
                {/* Filter bar */}
                <div
                  className="bg-white rounded-2xl shadow-sm px-6 py-4 mb-6 flex flex-wrap items-center gap-3"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <select
                    value={qGrade}
                    onChange={e => setQGrade(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                  >
                    <option value="">All Grades</option>
                    {ALL_GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
                  </select>

                  <select
                    value={qTopic}
                    onChange={e => setQTopic(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                  >
                    <option value="">All Topics</option>
                    {uniqueQueryTopics.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>

                  <select
                    value={qStatus}
                    onChange={e => setQStatus(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                  >
                    <option value="">All Statuses</option>
                    <option value="unanswered">Unanswered</option>
                    <option value="in-progress">In Progress</option>
                    <option value="answered">Answered</option>
                  </select>

                  <select
                    value={qSort}
                    onChange={e => setQSort(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-white"
                    style={{ borderColor: '#d1d5db' }}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="grade">Grade</option>
                    <option value="topic">Topic</option>
                  </select>

                  {(qGrade || qTopic || qStatus || qSort !== 'newest') && (
                    <button
                      onClick={clearQFilters}
                      className="text-xs font-semibold hover:underline ml-auto"
                      style={{ color: '#6b7280' }}
                    >
                      Clear filters
                    </button>
                  )}
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
                  <div
                    className="px-7 py-5 border-b flex items-center justify-between"
                    style={{ borderColor: '#f3f4f6' }}
                  >
                    <h2 className="text-base font-bold" style={{ color: '#0f1f3d' }}>
                      Queries ({filteredQueries.length})
                    </h2>
                    <button
                      onClick={exportCsv}
                      className="text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                      style={{ borderColor: '#d1d5db', color: '#374151' }}
                    >
                      Export to CSV
                    </button>
                  </div>

                  {filteredQueries.length === 0 ? (
                    <div className="px-7 py-14 text-center text-sm text-gray-400">
                      No queries match the current filters.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                            {['Date', 'Name', 'Grade', 'Topic', 'Specific struggle', 'Language', 'Status'].map(h => (
                              <th
                                key={h}
                                className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                                style={{ color: '#6b7280' }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {filteredQueries.map(q => (
                            <tr key={q.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                              <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{q.date}</td>
                              <td className="px-5 py-4 font-medium whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                                {q.name}
                              </td>
                              <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                                Grade {q.grade}
                              </td>
                              <td className="px-5 py-4 whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                                {q.topic}
                              </td>
                              <td className="px-5 py-4 text-gray-600" style={{ maxWidth: '280px' }}>
                                {q.struggle}
                              </td>
                              <td className="px-5 py-4">
                                <span
                                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
                                  style={
                                    q.language === 'en'
                                      ? { backgroundColor: '#eff6ff', color: '#1e40af' }
                                      : { backgroundColor: '#f5f3ff', color: '#6d28d9' }
                                  }
                                >
                                  {q.language.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-5 py-4">
                                <span
                                  className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                                  style={QUERY_STATUS_STYLES[q.status]}
                                >
                                  {QUERY_STATUS_STYLES[q.status].label}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </>
            )}
          </>

        /* ── Requests ──────────────────────────────────────────────────────── */
        ) : activeSection === 'Requests' ? (
          <>
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>Content Requests</h1>
              <p className="text-sm text-gray-500 mt-1">
                Requests submitted by students for missing content or features.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { label: 'Total Requests', value: requests.length },
                { label: 'Unreviewed',     value: requests.filter(r => r.status === 'unreviewed').length },
                { label: 'This Week',      value: requests.filter(r => r.date >= weekStr).length },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl shadow-sm px-7 py-5"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Filter bar */}
            <div
              className="bg-white rounded-2xl shadow-sm px-6 py-4 mb-6 flex flex-wrap items-center gap-3"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <select
                value={rGrade}
                onChange={e => setRGrade(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Grades</option>
                {ALL_GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
              </select>

              <select
                value={rType}
                onChange={e => setRType(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Request Types</option>
                {REQUEST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>

              <select
                value={rStatus}
                onChange={e => setRStatus(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Statuses</option>
                <option value="unreviewed">Unreviewed</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <select
                value={rSort}
                onChange={e => setRSort(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

              {(rGrade || rType || rStatus || rSort !== 'newest') && (
                <button
                  onClick={clearRFilters}
                  className="text-xs font-semibold hover:underline ml-auto"
                  style={{ color: '#6b7280' }}
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
              <div
                className="px-7 py-5 border-b flex items-center justify-between"
                style={{ borderColor: '#f3f4f6' }}
              >
                <h2 className="text-base font-bold" style={{ color: '#0f1f3d' }}>
                  Requests ({filteredRequests.length})
                </h2>
                <button
                  onClick={exportRequestsCsv}
                  className="text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                  style={{ borderColor: '#d1d5db', color: '#374151' }}
                >
                  Export to CSV
                </button>
              </div>

              {filteredRequests.length === 0 ? (
                <div className="px-7 py-14 text-center text-sm text-gray-400">
                  No requests yet. Requests will appear here once students submit them.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                        {['Date', 'Name', 'Email', 'Grade', 'Language', 'Request Type', 'Description', 'Status'].map(h => (
                          <th
                            key={h}
                            className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: '#6b7280' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map(r => (
                        <tr key={r.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{r.date}</td>
                          <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                            {r.name}
                          </td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{r.email}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">Grade {r.grade}</td>
                          <td className="px-5 py-4">
                            <span
                              className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
                              style={
                                r.language === 'en'
                                  ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                                  : { backgroundColor: '#fef3c7', color: '#b45309' }
                              }
                            >
                              {r.language.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.requestType}</td>
                          <td className="px-5 py-4 text-gray-600" style={{ maxWidth: '280px' }}>
                            {r.description}
                          </td>
                          <td className="px-5 py-4">
                            <select
                              value={r.status}
                              onChange={e => updateRequestStatus(r.id, e.target.value as RequestStatus)}
                              className="border rounded-lg px-2.5 py-1.5 text-xs font-semibold"
                              style={{
                                borderColor: REQUEST_STATUS_STYLES[r.status].color,
                                color: REQUEST_STATUS_STYLES[r.status].color,
                                backgroundColor: REQUEST_STATUS_STYLES[r.status].bg,
                              }}
                            >
                              <option value="unreviewed">Unreviewed</option>
                              <option value="in-progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>

        /* ── Subscribers ───────────────────────────────────────────────────── */
        ) : activeSection === 'Subscribers' ? (
          <>
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>Subscribers</h1>
              <p className="text-sm text-gray-500 mt-1">
                All registered users and their subscription details.
              </p>
            </div>

            {/* Stats row — placeholder totals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
              {[
                { label: 'Total Subscribers', value: 24 },
                { label: 'Pro',               value: 10 },
                { label: 'Guided',            value: 6  },
                { label: 'Free',              value: 8  },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl shadow-sm px-7 py-5"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#6b7280' }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Filter bar */}
            <div
              className="bg-white rounded-2xl shadow-sm px-6 py-4 mb-6 flex flex-wrap items-center gap-3"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <select
                value={sPackage}
                onChange={e => setSPackage(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Packages</option>
                <option value="free">Free</option>
                <option value="pro">Pro</option>
                <option value="guided">Guided</option>
              </select>

              <select
                value={sGrade}
                onChange={e => setSGrade(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Grades</option>
                {ALL_GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
              </select>

              <select
                value={sLang}
                onChange={e => setSLang(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Languages</option>
                <option value="en">English</option>
                <option value="af">Afrikaans</option>
              </select>

              <select
                value={sStatus}
                onChange={e => setSStatus(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={sSort}
                onChange={e => setSSort(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name-az">Name A–Z</option>
              </select>

              {(sPackage || sGrade || sLang || sStatus || sSort !== 'newest') && (
                <button
                  onClick={clearSFilters}
                  className="text-xs font-semibold hover:underline ml-auto"
                  style={{ color: '#6b7280' }}
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
              <div
                className="px-7 py-5 border-b flex items-center justify-between"
                style={{ borderColor: '#f3f4f6' }}
              >
                <h2 className="text-base font-bold" style={{ color: '#0f1f3d' }}>
                  Subscribers ({filteredSubscribers.length})
                </h2>
                <button
                  onClick={exportSubsCsv}
                  className="text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                  style={{ borderColor: '#d1d5db', color: '#374151' }}
                >
                  Export to CSV
                </button>
              </div>

              {filteredSubscribers.length === 0 ? (
                <div className="px-7 py-14 text-center text-sm text-gray-400">
                  No subscribers match the current filters.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                        {['Name', 'Email', 'Grade(s)', 'Language', 'Package', 'Status', 'Join Date', 'Renewal Date'].map(h => (
                          <th
                            key={h}
                            className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: '#6b7280' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubscribers.map(s => (
                        <tr key={s.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                            {s.name}
                          </td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{s.email}</td>
                          <td className="px-5 py-4">
                            <div className="flex flex-wrap gap-1">
                              {s.grades.map(g => (
                                <span
                                  key={g}
                                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                                >
                                  Gr {g}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
                              style={
                                s.language === 'en'
                                  ? { backgroundColor: '#eff6ff', color: '#1e40af' }
                                  : { backgroundColor: '#f5f3ff', color: '#6d28d9' }
                              }
                            >
                              {s.language.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                              style={SUB_PACKAGE_STYLES[s.package]}
                            >
                              {SUB_PACKAGE_STYLES[s.package].label}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                              style={SUB_STATUS_STYLES[s.status]}
                            >
                              {SUB_STATUS_STYLES[s.status].label}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{s.joinDate}</td>
                          <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                            {s.renewalDate || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>

        /* ── Live Interest ──────────────────────────────────────────────────── */
        ) : activeSection === 'Live Interest' ? (
          <>
            {/* Heading + export */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
                  Live Class Interest
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Sessions will show here once you schedule and publish them. Use this panel to track demand and decide when to launch.
                </p>
              </div>
              <button
                onClick={exportInterestCsv}
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                style={{ borderColor: '#d1d5db', color: '#374151' }}
              >
                Export to CSV
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8">
              <div className="bg-white rounded-2xl shadow-sm px-7 py-5" style={{ border: '1px solid #e5e7eb' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>
                  Total Interested
                </p>
                <p className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>{interestData.length}</p>
              </div>
              {LESSON_GRADES.map(g => (
                <div key={g} className="bg-white rounded-2xl shadow-sm px-7 py-5" style={{ border: '1px solid #e5e7eb' }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>
                    Grade {g}
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#0f1f3d' }}>{iGradeCounts[g]}</p>
                </div>
              ))}
            </div>

            {/* Demand bars */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8" style={{ border: '1px solid #e5e7eb' }}>
              <h2 className="text-sm font-bold mb-5" style={{ color: '#0f1f3d' }}>Demand by grade</h2>
              <div className="flex flex-col gap-4">
                {LESSON_GRADES.map(g => {
                  const count = iGradeCounts[g]
                  const pct   = Math.round((count / iMaxCount) * 100)
                  return (
                    <div key={g}>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold" style={{ color: '#374151' }}>Grade {g}</span>
                        <span style={{ color: '#6b7280' }}>{count} interested</span>
                      </div>
                      <div className="rounded-full overflow-hidden" style={{ backgroundColor: '#f3f4f6', height: '8px' }}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: '#1e40af' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Table */}
            {interestData.length === 0 ? (
              <div className="rounded-2xl py-16 text-center text-sm text-gray-400" style={{ border: '1px dashed #d1d5db' }}>
                No interest registrations yet.
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: '#fafafa' }}>
                      {['Name', 'Email', 'Grades Interested', 'Date Registered'].map(h => (
                        <th
                          key={h}
                          className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: '#6b7280' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {interestData.map(e => (
                      <tr key={e.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                        <td className="px-6 py-3.5 font-medium" style={{ color: '#0f1f3d' }}>{e.name}</td>
                        <td className="px-6 py-3.5 text-gray-500">{e.email}</td>
                        <td className="px-6 py-3.5">
                          <div className="flex flex-wrap gap-1.5">
                            {e.grades.map(g => (
                              <span
                                key={g}
                                className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                              >
                                Grade {g}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-3.5 text-gray-500">{e.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>

        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2" style={{ color: '#0f1f3d' }}>{activeSection}</p>
              <p className="text-sm text-gray-400">Coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
