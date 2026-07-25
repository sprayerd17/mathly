'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import { useAuth } from '@/app/providers'
import { auth } from '@/src/lib/firebase'
import { ADMIN_EMAIL } from '@/src/lib/admin'
import { cancelSession } from '@/src/lib/admin-client'
import type { PublicSession } from '@/src/lib/sessions'

// Tutor-only internal tool — not translated (single operator, not
// user-facing), unlike the rest of the site.
export default function AdminPage() {
  const { user, loading } = useAuth()
  const [sessions, setSessions] = useState<PublicSession[]>([])
  const [confirmingId, setConfirmingId] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [results, setResults] = useState<Record<string, { affected: number; notified: number }>>({})

  useEffect(() => {
    fetch('/api/sessions/list')
      .then(r => r.json())
      .then(d => setSessions(Array.isArray(d.sessions) ? d.sessions : []))
      .catch(() => {})
  }, [])

  async function handleCancel(sessionId: string) {
    if (!auth.currentUser) return
    setError('')
    setBusyId(sessionId)
    try {
      const result = await cancelSession(auth.currentUser, sessionId)
      setResults(prev => ({ ...prev, [sessionId]: result }))
      setSessions(prev => prev.filter(s => s.id !== sessionId))
    } catch {
      setError('Could not cancel that session. Please try again.')
    } finally {
      setBusyId(null)
      setConfirmingId(null)
    }
  }

  const isAdmin = !loading && user?.email === ADMIN_EMAIL

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <h1 className="text-2xl font-bold mb-6" style={{ color: '#0f1f3d' }}>Admin</h1>

        {loading ? null : !isAdmin ? (
          <p className="text-sm" style={{ color: '#6b7280' }}>Not authorized.</p>
        ) : (
          <>
            <h2 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: '#6b7280' }}>
              Upcoming live sessions
            </h2>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

            {sessions.length === 0 ? (
              <p className="text-sm" style={{ color: '#6b7280' }}>No upcoming published sessions.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {sessions.map(s => {
                  const result = results[s.id]
                  return (
                    <div
                      key={s.id}
                      className="bg-white rounded-xl p-4 flex items-center justify-between gap-4"
                      style={{ border: '1px solid #e5e7eb' }}
                    >
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#0f1f3d' }}>{s.topic}</p>
                        <p className="text-xs" style={{ color: '#6b7280' }}>
                          Grade {s.grade} · {s.date} at {s.time} · {s.bookedCount} booked{s.spots > 0 ? ` / ${s.spots} spots` : ''}
                        </p>
                        {result && (
                          <p className="text-xs mt-1" style={{ color: '#15803d' }}>
                            Cancelled — {result.notified} of {result.affected} attendee(s) notified by email.
                          </p>
                        )}
                      </div>

                      {!result && (
                        confirmingId === s.id ? (
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs" style={{ color: '#6b7280' }}>Cancel this session?</span>
                            <button
                              onClick={() => handleCancel(s.id)}
                              disabled={busyId === s.id}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white disabled:opacity-50"
                              style={{ backgroundColor: '#b91c1c' }}
                            >
                              {busyId === s.id ? 'Cancelling…' : 'Yes, cancel'}
                            </button>
                            <button
                              onClick={() => setConfirmingId(null)}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                              style={{ color: '#6b7280' }}
                            >
                              Never mind
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmingId(s.id)}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0"
                            style={{ color: '#b91c1c', border: '1px solid #fecaca' }}
                          >
                            Cancel session
                          </button>
                        )
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
