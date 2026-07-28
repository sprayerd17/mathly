'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useAuth, getActiveChild } from '@/app/providers'
import { useTranslations } from '@/src/i18n/useTranslations'

type Props = { grade: string; topicSlug: string; topicName: string }

function FlagIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
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

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// A small floating button on topic pages (next to the AI Assistant bubble)
// for reporting content issues — diagrams not rendering, unclear wording,
// etc. — straight from whatever topic the student is looking at. Writes to
// the same `requests` collection the Contact page uses (see contact/page.tsx
// for the identical auto-fill pattern), so a report needs nothing from the
// student but a one-line description of what looked wrong. Logged-in only:
// there's no account data to auto-fill from for an anonymous visitor, and
// the requests collection's create rule requires a validly-formatted email.
export default function ReportIssueButton({ grade, topicSlug, topicName }: Props) {
  const { user } = useAuth()
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  if (!user) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || !description.trim() || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      const activeChild = getActiveChild(user)
      await addDoc(collection(db, 'requests'), {
        name: user.name,
        email: user.email,
        grade: activeChild.grade,
        language: activeChild.language,
        requestType: 'Content Issue',
        description: `[${topicName} — Grade ${grade}, slug: ${topicSlug}] ${description.trim()}`,
        status: 'unreviewed',
        createdAt: serverTimestamp(),
        uid: user.uid,
      })
      setSubmitted(true)
      setDescription('')
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function close() {
    setIsOpen(false)
    setSubmitted(false)
    setError(false)
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label={t.report_issue_fab_label}
          style={{
            position: 'fixed',
            bottom: '86px',
            right: '28px',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            backgroundColor: '#ffffff',
            color: '#92400e',
            border: '1.5px solid #fde68a',
            borderRadius: '9999px',
            padding: '10px 16px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            transition: 'background-color 0.15s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fffbeb' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff' }}
        >
          <FlagIcon />
          {t.report_issue_fab_label}
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <button
              onClick={close}
              aria-label={t.auth_close_label}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
            >
              <CloseIcon />
            </button>

            <div className="px-8 pt-10 pb-8">
              {submitted ? (
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                    <CheckIcon />
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: '#0f1f3d' }}>{t.report_issue_success_heading}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{t.report_issue_success_body}</p>
                  <button
                    onClick={close}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: '#1e40af' }}
                  >
                    {t.report_issue_close_button}
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#fef3c7' }}>
                    <FlagIcon size={20} />
                  </div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: '#0f1f3d' }}>{t.report_issue_heading}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{t.report_issue_body}</p>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      rows={3}
                      maxLength={1000}
                      placeholder={t.report_issue_placeholder}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none resize-none mb-4"
                      style={{ borderColor: '#d1d5db' }}
                      required
                    />
                    {error && (
                      <p className="text-xs font-medium rounded-lg px-3 py-2 mb-4" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>
                        {t.contact_submit_error_message}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting || !description.trim()}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-50"
                      style={{ backgroundColor: '#1e40af' }}
                    >
                      {submitting ? t.report_issue_submitting : t.report_issue_submit_button}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
