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
  grade: number
  topic: string
  struggle: string
  language: 'en' | 'af'
  status: QueryStatus
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

type SessionStatus = 'upcoming' | 'completed' | 'cancelled'

type SessionBooking = {
  id: string
  name: string
  email: string
  payment: 'paid' | 'pending'
}

type BookingSession = {
  id: string
  grade: number
  topic: string
  date: string
  time: string
  duration: string
  totalSpots: number
  bookings: SessionBooking[]
  status: SessionStatus
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LESSON_GRADES = [8, 9, 10, 11, 12]
const ALL_GRADES    = [4, 5, 6, 7, 8, 9, 10, 11, 12]
const DURATIONS     = ['30min', '1hour', '1.5hours', '2hours']
const SIDEBAR_ITEMS = ['Lesson Schedule', 'Queries', 'Requests', 'Subscribers', 'Bookings']
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
  {
    id: 'q1',
    date: '2026-05-15',
    grade: 9,
    topic: 'Algebra',
    struggle: "I don't understand how to solve equations with brackets on both sides",
    language: 'en',
    status: 'unanswered',
  },
  {
    id: 'q2',
    date: '2026-05-17',
    grade: 11,
    topic: 'Trigonometry',
    struggle: 'Confused about when to use sin, cos or tan in right-angled triangles',
    language: 'en',
    status: 'in-progress',
  },
  {
    id: 'q3',
    date: '2026-05-18',
    grade: 7,
    topic: 'Fractions',
    struggle: 'Ek verstaan nie hoe om gemengde getalle te deel nie',
    language: 'af',
    status: 'answered',
  },
]

const REQUESTS_KEY = 'mathly_requests'

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

const SESSION_STATUS_STYLES: Record<SessionStatus, { bg: string; color: string; label: string }> = {
  upcoming:  { bg: '#eff6ff', color: '#1e40af', label: 'Upcoming'  },
  completed: { bg: '#dcfce7', color: '#15803d', label: 'Completed' },
  cancelled: { bg: '#fee2e2', color: '#b91c1c', label: 'Cancelled' },
}

const PLACEHOLDER_SESSIONS: BookingSession[] = [
  {
    id: 'ses1',
    grade: 10,
    topic: 'Quadratic Equations',
    date: '2026-05-12',
    time: '18:00',
    duration: '1hour',
    totalSpots: 10,
    status: 'completed',
    bookings: [
      { id: 'b1',  name: 'Amahle Dlamini',      email: 'amahle.d@outlook.com',      payment: 'paid'    },
      { id: 'b2',  name: 'Liam van der Merwe',   email: 'liam.vdm@gmail.com',        payment: 'paid'    },
      { id: 'b3',  name: 'Connor Botha',         email: 'c.botha@gmail.com',         payment: 'paid'    },
      { id: 'b4',  name: 'Zanele Khumalo',       email: 'zanele.k@webmail.co.za',    payment: 'paid'    },
      { id: 'b5',  name: 'Pieter Rousseau',      email: 'p.rousseau@icloud.com',     payment: 'paid'    },
      { id: 'b6',  name: 'Sipho Ndlovu',         email: 'sipho.n@gmail.com',         payment: 'pending' },
      { id: 'b7',  name: 'Nadia Venter',         email: 'nadia.v@gmail.com',         payment: 'paid'    },
    ],
  },
  {
    id: 'ses2',
    grade: 12,
    topic: 'Calculus: Differentiation',
    date: '2026-05-26',
    time: '18:00',
    duration: '1hour',
    totalSpots: 12,
    status: 'upcoming',
    bookings: [
      { id: 'b8',  name: 'Ayasha Naidoo',        email: 'ayasha.n@gmail.com',        payment: 'paid'    },
      { id: 'b9',  name: 'Ruan Steyn',           email: 'r.steyn@gmail.com',         payment: 'pending' },
      { id: 'b10', name: 'Fatima Patel',         email: 'fatima.p@outlook.com',      payment: 'paid'    },
      { id: 'b11', name: 'Danie Joubert',        email: 'd.joubert@gmail.com',       payment: 'paid'    },
      { id: 'b12', name: 'Keanu Williams',       email: 'keanu.w@gmail.com',         payment: 'pending' },
    ],
  },
  {
    id: 'ses3',
    grade: 8,
    topic: 'Linear Equations',
    date: '2026-05-10',
    time: '17:00',
    duration: '1hour',
    totalSpots: 8,
    status: 'cancelled',
    bookings: [
      { id: 'b13', name: 'Jake Pretorius',       email: 'jake.p@gmail.com',          payment: 'pending' },
      { id: 'b14', name: 'Lerato Mokoena',       email: 'lerato.m@gmail.com',        payment: 'pending' },
      { id: 'b15', name: 'Siya Hlongwane',       email: 'siya.h@gmail.com',          payment: 'paid'    },
    ],
  },
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
  const [queries]             = useState<Query[]>(PLACEHOLDER_QUERIES)
  const [qGrade, setQGrade]   = useState('')
  const [qTopic, setQTopic]   = useState('')
  const [qStatus, setQStatus] = useState('')
  const [qSort, setQSort]     = useState('newest')

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

  // Bookings
  const [bookingSessions]                    = useState<BookingSession[]>(PLACEHOLDER_SESSIONS)
  const [bGrade, setBGrade]                  = useState('')
  const [bStatus, setBStatus]                = useState('')
  const [bSort, setBSort]                    = useState('newest')
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set())

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
    const headers = ['Date', 'Grade', 'Topic', 'Struggle', 'Language', 'Status']
    const rows = filteredQueries.map(q => [
      q.date,
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

  // ── Bookings ──────────────────────────────────────────────────────────────

  const filteredSessions = bookingSessions
    .filter(s => !bGrade  || s.grade === Number(bGrade))
    .filter(s => !bStatus || s.status === bStatus)
    .sort((a, b) => {
      if (bSort === 'date-asc')      return a.date.localeCompare(b.date)
      if (bSort === 'most-bookings') return b.bookings.length - a.bookings.length
      return b.date.localeCompare(a.date)
    })

  const bTotalBookings   = bookingSessions.reduce((n, s) => n + s.bookings.length, 0)
  const bUpcoming        = bookingSessions.filter(s => s.status === 'upcoming').length
  const bCompleted       = bookingSessions.filter(s => s.status === 'completed').length
  const bRevenue         = bookingSessions
    .filter(s => s.status !== 'cancelled')
    .reduce((n, s) => n + s.bookings.filter(b => b.payment === 'paid').length * 100, 0)

  function toggleExpanded(id: string) {
    setExpandedSessions(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function exportBookingsCsv() {
    const headers = ['Session Date', 'Grade', 'Topic', 'Duration', 'Session Status', 'Student Name', 'Email', 'Payment']
    const rows: string[][] = []
    filteredSessions.forEach(sess => {
      sess.bookings.forEach(b => {
        rows.push([
          sess.date,
          `Grade ${sess.grade}`,
          sess.topic,
          sess.duration,
          sess.status,
          `"${b.name}"`,
          b.email,
          b.payment,
        ])
      })
    })
    const csv  = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'bookings.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearBFilters() {
    setBGrade('')
    setBStatus('')
    setBSort('newest')
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { label: 'Total Queries', value: queries.length },
                { label: 'Unanswered',   value: queries.filter(q => q.status === 'unanswered').length },
                { label: 'This Week',    value: queries.filter(q => q.date >= weekStr).length },
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
                {QUERY_TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
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
                  No queries yet. Queries will appear here once students start submitting them.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                        {['Date', 'Grade', 'Topic', 'Specific struggle', 'Language', 'Status'].map(h => (
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
                          <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                            Grade {q.grade}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap" style={{ color: '#0f1f3d' }}>
                            {q.topic}
                          </td>
                          <td className="px-5 py-4 text-gray-600" style={{ maxWidth: '320px' }}>
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

        /* ── Bookings ──────────────────────────────────────────────────────── */
        ) : activeSection === 'Bookings' ? (
          <>
            {/* Heading + export */}
            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
                  Live Class Bookings
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Track bookings and attendance for each scheduled live class session.
                </p>
              </div>
              <button
                onClick={exportBookingsCsv}
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                style={{ borderColor: '#d1d5db', color: '#374151' }}
              >
                Export to CSV
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
              {[
                { label: 'Total Bookings',     value: bTotalBookings },
                { label: 'Upcoming Sessions',  value: bUpcoming      },
                { label: 'Completed Sessions', value: bCompleted     },
                { label: 'Total Revenue',      value: `R${bRevenue}` },
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
                value={bGrade}
                onChange={e => setBGrade(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Grades</option>
                {LESSON_GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
              </select>

              <select
                value={bStatus}
                onChange={e => setBStatus(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="">All Statuses</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={bSort}
                onChange={e => setBSort(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm bg-white"
                style={{ borderColor: '#d1d5db' }}
              >
                <option value="newest">Newest First</option>
                <option value="date-asc">Date Ascending</option>
                <option value="most-bookings">Most Bookings</option>
              </select>

              {(bGrade || bStatus || bSort !== 'newest') && (
                <button
                  onClick={clearBFilters}
                  className="text-xs font-semibold hover:underline ml-auto"
                  style={{ color: '#6b7280' }}
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Session cards */}
            {filteredSessions.length === 0 ? (
              <div
                className="rounded-2xl py-16 text-center text-sm text-gray-400"
                style={{ border: '1px dashed #d1d5db' }}
              >
                No sessions match the current filters.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredSessions.map(sess => {
                  const filled  = sess.bookings.length
                  const pct     = Math.round((filled / sess.totalSpots) * 100)
                  const revenue = sess.bookings.filter(b => b.payment === 'paid').length * 100
                  const open    = expandedSessions.has(sess.id)

                  return (
                    <div
                      key={sess.id}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden"
                      style={{ border: '1px solid #e5e7eb' }}
                    >
                      {/* Card header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span
                              className="text-xs font-bold px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                            >
                              Grade {sess.grade}
                            </span>
                            <h3 className="font-bold text-base" style={{ color: '#0f1f3d' }}>
                              {sess.topic}
                            </h3>
                          </div>
                          <span
                            className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={SESSION_STATUS_STYLES[sess.status]}
                          >
                            {SESSION_STATUS_STYLES[sess.status].label}
                          </span>
                        </div>

                        {/* Date / time / duration */}
                        <p className="text-sm text-gray-500 mb-5">
                          {sess.date} · {sess.time} · {sess.duration}
                        </p>

                        {/* Progress bar */}
                        <div className="mb-1">
                          <div
                            className="rounded-full overflow-hidden"
                            style={{ backgroundColor: '#f3f4f6', height: '8px' }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${pct}%`, backgroundColor: '#1e40af' }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span>{filled} of {sess.totalSpots} spots filled</span>
                          <span>{pct}%</span>
                        </div>

                        {/* Revenue + View Bookings */}
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>
                            Revenue: <span style={{ color: '#15803d' }}>R{revenue}</span>
                            <span className="font-normal text-gray-400 ml-1">
                              ({sess.bookings.filter(b => b.payment === 'paid').length} paid)
                            </span>
                          </p>
                          <button
                            onClick={() => toggleExpanded(sess.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                            style={{ color: '#1e40af' }}
                          >
                            {open ? 'Hide Bookings' : 'View Bookings'}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 transition-transform"
                              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Expanded bookings table */}
                      {open && (
                        <div style={{ borderTop: '1px solid #f3f4f6' }}>
                          {sess.bookings.length === 0 ? (
                            <p className="px-6 py-5 text-sm text-gray-400">No bookings for this session.</p>
                          ) : (
                            <table className="w-full text-sm">
                              <thead>
                                <tr style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: '#fafafa' }}>
                                  {['#', 'Student Name', 'Email', 'Payment'].map(h => (
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
                                {sess.bookings.map((b, i) => (
                                  <tr key={b.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                                    <td className="px-6 py-3.5 text-gray-400 text-xs">{i + 1}</td>
                                    <td className="px-6 py-3.5 font-medium" style={{ color: '#0f1f3d' }}>
                                      {b.name}
                                    </td>
                                    <td className="px-6 py-3.5 text-gray-500">{b.email}</td>
                                    <td className="px-6 py-3.5">
                                      <span
                                        className="text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
                                        style={
                                          b.payment === 'paid'
                                            ? { backgroundColor: '#dcfce7', color: '#15803d' }
                                            : { backgroundColor: '#fef3c7', color: '#92400e' }
                                        }
                                      >
                                        {b.payment === 'paid' ? 'Paid' : 'Pending'}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
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
