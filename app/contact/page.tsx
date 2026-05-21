'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import FAQAccordion from '@/app/components/FAQAccordion'

const CONTACT_GRADES    = [4, 5, 6, 7, 8, 9, 10, 11, 12]
const CONTACT_REQ_TYPES = ['Missing Topic', 'Missing Grade Content', 'Feature Request', 'General Suggestion', 'Other']
const REQUESTS_KEY      = 'mathly_requests'

const EMPTY_FORM = {
  name:        '',
  email:       '',
  grade:       4,
  language:    'en' as 'en' | 'af',
  requestType: 'Missing Topic',
  description: '',
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function ContactPage() {
  const [form, setForm]           = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  function f<K extends keyof typeof EMPTY_FORM>(key: K, val: typeof EMPTY_FORM[K]) {
    setForm(prev => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newReq = {
      ...form,
      id:     crypto.randomUUID(),
      date:   new Date().toISOString().slice(0, 10),
      status: 'unreviewed' as const,
    }
    const existing = JSON.parse(localStorage.getItem(REQUESTS_KEY) ?? '[]')
    localStorage.setItem(REQUESTS_KEY, JSON.stringify([...existing, newReq]))
    setSubmitted(true)
    setForm(EMPTY_FORM)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: '#0f1f3d' }}>
            Get in touch
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Have a question or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        {/* ── Email card ──────────────────────────────────────────────────── */}
        <div className="rounded-xl border border-blue-100 bg-white px-6 py-5 mb-6 shadow-sm">
          <div className="flex items-center gap-3 text-[#1e40af]">
            <EmailIcon />
            <a
              href="mailto:mathlyweb@outlook.com"
              className="text-sm font-semibold hover:underline"
            >
              mathlyweb@outlook.com
            </a>
          </div>
        </div>

        {/* ── Response time ───────────────────────────────────────────────── */}
        <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 mb-12 shadow-sm">
          <div className="flex items-start gap-3 text-gray-500">
            <ClockIcon />
            <div>
              <p className="text-sm font-semibold text-[#0f1f3d]">Response time</p>
              <p className="text-sm mt-0.5">
                We typically respond within 1 to 2 business days.
              </p>
            </div>
          </div>
        </div>

        {/* ── Submit a request ────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            Submit a request
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Missing a topic, need a feature, or have a suggestion? Let us know.
          </p>

          {submitted ? (
            <div
              className="rounded-xl px-6 py-5 text-sm font-medium"
              style={{ backgroundColor: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' }}
            >
              Thank you, your request has been noted. We review all requests weekly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => f('name', e.target.value)}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none"
                  style={{ borderColor: '#d1d5db' }}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => f('email', e.target.value)}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none"
                  style={{ borderColor: '#d1d5db' }}
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Grade
                </label>
                <select
                  value={form.grade}
                  onChange={e => f('grade', Number(e.target.value))}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm bg-white"
                  style={{ borderColor: '#d1d5db' }}
                  required
                >
                  {CONTACT_GRADES.map(g => (
                    <option key={g} value={g}>Grade {g}</option>
                  ))}
                </select>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Language
                </label>
                <div className="flex gap-3">
                  {(['en', 'af'] as const).map(lang => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => f('language', lang)}
                      className="flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-all"
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

              {/* Request type */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Request type
                </label>
                <select
                  value={form.requestType}
                  onChange={e => f('requestType', e.target.value)}
                  className="w-full border rounded-lg px-4 py-2.5 text-sm bg-white"
                  style={{ borderColor: '#d1d5db' }}
                  required
                >
                  {CONTACT_REQ_TYPES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: '#374151' }}>
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={e => f('description', e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 text-sm outline-none resize-none"
                  style={{ borderColor: '#d1d5db' }}
                  rows={4}
                  placeholder="Describe what you need"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: '#1e40af' }}
              >
                Submit Request
              </button>
            </form>
          )}
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#0f1f3d' }}>
            Frequently asked questions
          </h2>
          <FAQAccordion />
        </section>

        {/* ── About Mathly ────────────────────────────────────────────────── */}
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
          <h2 className="text-base font-bold mb-2" style={{ color: '#0f1f3d' }}>
            About Mathly
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Mathly is a South African maths education platform covering Grade 4 to Grade 12.
            Our study guides, worked examples, and practice problems are aligned to the CAPS
            curriculum. We&apos;re a small team passionate about making quality maths education
            accessible to every learner in South Africa.
          </p>
        </section>

      </main>
    </div>
  )
}
