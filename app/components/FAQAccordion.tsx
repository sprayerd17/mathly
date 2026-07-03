'use client'

import { useState } from 'react'
import { useTranslations } from '@/src/i18n/useTranslations'

export default function FAQAccordion() {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: t.faq_q1_question, answer: t.faq_q1_answer },
    { question: t.faq_q2_question, answer: t.faq_q2_answer },
    { question: t.faq_q3_question, answer: t.faq_q3_answer },
    { question: t.faq_q4_question, answer: t.faq_q4_answer },
  ]

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-blue-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-[#0f1f3d]">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 flex-shrink-0 ml-4 text-[#1e40af] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 py-4 bg-blue-50/40 border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
