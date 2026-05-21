'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How do I subscribe?',
    answer:
      'You can subscribe by creating a free account and then choosing a plan from your account dashboard. We offer monthly and annual options, and you can upgrade or downgrade at any time.',
  },
  {
    question: 'Which grades are covered?',
    answer:
      'Mathly covers Grade 4 through Grade 12, following the South African school curriculum. Each grade has its own set of topics, worked examples, and practice problems.',
  },
  {
    question: 'Are the study guides aligned to the SA curriculum?',
    answer:
      'Yes. All content on Mathly is aligned to the CAPS (Curriculum and Assessment Policy Statement) framework, so the topics, terminology, and examples match exactly what learners are taught in school.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Absolutely. You can cancel your subscription at any time from your account settings. You will retain access until the end of your current billing period, and you will not be charged again after cancellation.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
