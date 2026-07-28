'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { addDoc, collection, serverTimestamp, getDocs, query, where, limit, Timestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

type MyThread = {
  id: string
  description: string
  adminReply: { text: string; createdAt: Timestamp | null } | null
}

// "Seen" is tracked client-side only (no Firestore write on read, so no
// rules change needed) — the timestamp of the last reply this browser has
// opened the widget to view, per uid. A reply newer than that lights up the
// dot on the closed FAB; opening the widget clears it.
const SEEN_KEY_PREFIX = 'mathly_msg_reply_seen_'

function getSeenReplyAt(uid: string): number {
  if (typeof window === 'undefined') return 0
  return Number(window.localStorage.getItem(SEEN_KEY_PREFIX + uid) ?? 0)
}

function setSeenReplyAt(uid: string, ms: number) {
  if (typeof window !== 'undefined') window.localStorage.setItem(SEEN_KEY_PREFIX + uid, String(ms))
}

// Hidden on topic/practice pages (/grade/[grade]/[topic]) — that's where the
// AI Assistant and Report Issue floating buttons already live, and stacking
// a third floating action there would be clutter. Visible everywhere else,
// including the grade overview list (/grade/[grade]), which isn't itself
// lesson content.
function isTopicPage(pathname: string): boolean {
  return /^\/grade\/[^/]+\/[^/]+\/?$/.test(pathname)
}

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

// Global "message us" widget — writes into the same `requests` Firestore
// collection the Contact page's form already uses (requestType
// 'Quick Message' distinguishes these from the structured contact-form
// submissions), so the existing reply workflow picks these up with no
// backend changes needed.
export default function MessageWidget() {
  const pathname = usePathname()
  const { user } = useAuth()
  const t = useTranslations()

  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [myThread, setMyThread] = useState<MyThread | null>(null)
  const [hasUnread, setHasUnread] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    function onClickOutside(e: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [isOpen])

  // Looks up the signed-in user's most recent message as soon as they're
  // known (not gated on isOpen) — this is what lights up the notification
  // dot on the closed FAB the moment a reply lands, without them having to
  // open the widget first to find out. Re-checks on open too, in case a
  // reply arrived since mount.
  useEffect(() => {
    if (!user) { setMyThread(null); setHasUnread(false); return }
    let cancelled = false
    getDocs(query(collection(db, 'requests'), where('uid', '==', user.uid), limit(10)))
      .then(snap => {
        if (cancelled || snap.empty) return
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() } as Record<string, unknown>))
        docs.sort((a, b) => {
          const at = (a.createdAt as Timestamp | undefined)?.toMillis?.() ?? 0
          const bt = (b.createdAt as Timestamp | undefined)?.toMillis?.() ?? 0
          return bt - at
        })
        const latest = docs[0]
        const adminReply = (latest.adminReply as MyThread['adminReply']) ?? null
        setMyThread({
          id: latest.id as string,
          description: (latest.description as string) ?? '',
          adminReply,
        })
        const replyMs = adminReply?.createdAt?.toMillis?.() ?? 0
        setHasUnread(replyMs > 0 && replyMs > getSeenReplyAt(user.uid))
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [isOpen, user])

  function openWidget() {
    setIsOpen(true)
    setError(false)
    if (user && myThread?.adminReply?.createdAt) {
      setSeenReplyAt(user.uid, myThread.adminReply.createdAt.toMillis())
      setHasUnread(false)
    }
  }

  if (isTopicPage(pathname ?? '')) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting || !message.trim()) return
    setSubmitting(true)
    setError(false)
    try {
      const activeChild = user ? getActiveChild(user) : null
      await addDoc(collection(db, 'requests'), {
        name:        user?.name ?? name,
        email:       user?.email ?? email,
        grade:       activeChild?.grade ?? 4,
        language:    activeChild?.language ?? 'en',
        requestType: 'Quick Message',
        description: message.trim(),
        status:      'unreviewed',
        createdAt:   serverTimestamp(),
        uid:         user?.uid ?? null,
      })
      setSubmitted(true)
      setMessage('')
      setName('')
      setEmail('')
      setMyThread(null)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={openWidget}
          aria-label={hasUnread ? t.msg_widget_fab_aria_unread : t.msg_widget_fab_aria}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 60,
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e40af',
            color: '#fff',
            border: 'none',
            borderRadius: '9999px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(30,64,175,0.35)',
            transition: 'background-color 0.15s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1d3a9e' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e40af' }}
        >
          <ChatIcon />
          {hasUnread && (
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '3px',
                right: '3px',
                width: '14px',
                height: '14px',
                borderRadius: '9999px',
                backgroundColor: '#ef4444',
                border: '2px solid #fff',
              }}
            />
          )}
        </button>
      )}

      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-label={t.msg_widget_title}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '16px',
            zIndex: 60,
            width: 'min(360px, calc(100vw - 32px))',
            maxHeight: 'min(520px, calc(100vh - 56px))',
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 48px rgba(0,0,0,0.16), 0 2px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ backgroundColor: '#0f1f3d' }}>
            <div className="min-w-0">
              <p className="text-white text-sm font-bold">{t.msg_widget_title}</p>
              <p className="text-xs mt-0.5" style={{ color: '#a8b8d8' }}>{t.msg_widget_subtitle}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors shrink-0 ml-3"
              aria-label={t.auth_close_label}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5 overflow-y-auto">
            {myThread && !submitted && (
              <div className="space-y-2 mb-5">
                <div className="rounded-xl rounded-tr-sm px-3.5 py-2.5 text-sm leading-relaxed text-white ml-6" style={{ backgroundColor: '#1e40af' }}>
                  {myThread.description}
                </div>
                {myThread.adminReply ? (
                  <div className="rounded-xl rounded-tl-sm px-3.5 py-2.5 text-sm leading-relaxed" style={{ backgroundColor: '#f1f5f9', color: '#0f1f3d' }}>
                    <p className="text-[10px] font-semibold uppercase tracking-wide mb-1 text-gray-500">{t.msg_widget_reply_label}</p>
                    {myThread.adminReply.text}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 px-1">{t.msg_widget_waiting_reply}</p>
                )}
              </div>
            )}
            {submitted ? (
              <div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {t.msg_widget_success}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: '#1e40af' }}
                >
                  {t.msg_widget_send_another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {!user && (
                  <>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder={t.contact_form_name_placeholder}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={t.auth_email_placeholder}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors"
                      required
                    />
                  </>
                )}
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t.msg_widget_message_placeholder}
                  rows={4}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/25 focus:border-[#1e40af] transition-colors resize-none"
                  required
                />
                {error && (
                  <p className="text-xs font-semibold px-3 py-2 rounded-lg" style={{ color: '#b91c1c', backgroundColor: '#fee2e2', border: '1px solid #fecaca' }}>
                    {t.contact_submit_error_message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {submitting ? '…' : t.msg_widget_send_button}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
