'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/src/lib/firebase'
import { useTranslations } from '@/src/i18n/useTranslations'

// Small opt-in for the "Do you study Maths Literacy?" question — reuses the
// existing top-level /waitlist collection (email + createdAt only, see
// firestore.rules) rather than a separate collection, so no rules/deploy
// change is needed. Signups aren't tagged by interest; export from the
// Firebase Console and cross-reference manually if that's ever needed.
export default function MathLitNotify() {
  const t = useTranslations()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  function close() {
    setOpen(false)
    setStatus('idle')
    setEmail('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    try {
      await addDoc(collection(db, 'waitlist'), { email: email.trim().toLowerCase(), createdAt: serverTimestamp() })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <p className="text-xs text-gray-400 mb-8">
        ({t.home_mathlit_note}{' '}
        <button type="button" onClick={() => setOpen(true)} className="underline hover:text-gray-600 transition-colors">
          {t.home_mathlit_link}
        </button>)
      </p>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={close}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm px-7 py-7 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {status === 'done' ? (
              <div className="text-center py-2">
                <p className="text-sm font-semibold mb-1" style={{ color: '#0f1f3d' }}>{t.home_mathlit_success_title}</p>
                <p className="text-xs text-gray-500 mb-5">{t.home_mathlit_success_body}</p>
                <button
                  type="button"
                  onClick={close}
                  className="text-sm font-semibold px-5 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {t.home_mathlit_close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-base font-bold mb-1.5" style={{ color: '#0f1f3d' }}>{t.home_mathlit_modal_title}</h2>
                <p className="text-xs text-gray-500 mb-4">{t.home_mathlit_modal_body}</p>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.auth_email_placeholder}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none mb-3"
                  style={{ borderColor: '#d1d5db' }}
                />
                {status === 'error' && (
                  <p className="text-xs text-red-600 mb-3">{t.home_mathlit_error}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-60"
                  style={{ backgroundColor: '#1e40af' }}
                >
                  {status === 'submitting' ? t.home_mathlit_submitting : t.home_mathlit_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
