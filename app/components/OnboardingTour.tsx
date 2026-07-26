'use client'

import { useState } from 'react'
import { useTranslations } from '@/src/i18n/useTranslations'

type Props = { onClose: () => void }

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1e40af" className="w-7 h-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

const STEPS = [
  { icon: SparkleIcon,    headingKey: 'tour_welcome_heading',   bodyKey: 'tour_welcome_body'   },
  { icon: HomeIcon,       headingKey: 'tour_home_heading',      bodyKey: 'tour_home_body'      },
  { icon: DashboardIcon,  headingKey: 'tour_dashboard_heading', bodyKey: 'tour_dashboard_body' },
  { icon: ContactIcon,    headingKey: 'tour_contact_heading',   bodyKey: 'tour_contact_body'   },
  { icon: ProfileIcon,    headingKey: 'tour_profile_heading',   bodyKey: 'tour_profile_body'   },
  { icon: SparkleIcon,    headingKey: 'tour_closing_heading',   bodyKey: 'tour_closing_body'   },
] as const

// A short, dismissible walkthrough of the four main nav destinations, shown
// automatically right after a Pro/Max subscription (see pricing/success and
// profile/page.tsx) and reopenable any time from the "Quick run-through" link
// on the profile page. The closing step is where we disclose that Mathly is a
// solo-student project — framed as "report the odd rough edge", not "expect
// broken things" — since diagram-rendering bugs are the most common report.
export default function OnboardingTour({ onClose }: Props) {
  const t = useTranslations()
  const [step, setStep] = useState(0)
  const isFirst = step === 0
  const isLast = step === STEPS.length - 1
  const current = STEPS[step]
  const Icon = current.icon

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <button
          onClick={onClose}
          aria-label={t.auth_close_label}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md"
        >
          <CloseIcon />
        </button>

        <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: '#eff6ff' }}
          >
            <Icon />
          </div>
          <h2 className="text-lg font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t[current.headingKey]}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            {t[current.bodyKey]}
          </p>

          <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === step ? '18px' : '6px',
                  height: '6px',
                  backgroundColor: i === step ? '#1e40af' : '#e5e7eb',
                }}
              />
            ))}
          </div>

          <div className="flex gap-3 w-full">
            {!isFirst && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors"
                style={{ borderColor: '#e5e7eb', color: '#374151' }}
              >
                {t.tour_back_button}
              </button>
            )}
            <button
              onClick={() => (isLast ? onClose() : setStep(s => s + 1))}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              {isLast ? t.tour_done_button : t.tour_next_button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
