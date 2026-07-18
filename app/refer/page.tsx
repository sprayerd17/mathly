'use client'

import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useTranslations } from '@/src/i18n/useTranslations'

type EarningsRow = { referrals: number; creditAmount: string; months: number | null; note: 'none' | 'half_year' | 'topped_up' }

const EARNINGS_PRO: EarningsRow[] = [
  { referrals: 1,  creditAmount: 'R49',    months: 1,    note: 'none'      },
  { referrals: 3,  creditAmount: 'R147',   months: 3,    note: 'none'      },
  { referrals: 6,  creditAmount: 'R294',   months: 6,    note: 'half_year' },
  { referrals: 12, creditAmount: 'R588',   months: null, note: 'topped_up' },
]

const EARNINGS_MAX: EarningsRow[] = [
  { referrals: 1,  creditAmount: 'R99',      months: 1,    note: 'none'      },
  { referrals: 3,  creditAmount: 'R297',     months: 3,    note: 'none'      },
  { referrals: 6,  creditAmount: 'R594',     months: 6,    note: 'half_year' },
  { referrals: 12, creditAmount: 'R1 188',   months: null, note: 'topped_up' },
]

const LOYALTY_MONTHS = [12, 6, 3]

const HOW_STEP_KEYS = [
  { n: '1', titleKey: 'refer_step_1_title', detailKey: 'refer_step_1_detail' },
  { n: '2', titleKey: 'refer_step_2_title', detailKey: 'refer_step_2_detail' },
  { n: '3', titleKey: 'refer_step_3_title', detailKey: 'refer_step_3_detail' },
] as const

export default function ReferPage() {
  const t = useTranslations()

  const HOW_STEPS = HOW_STEP_KEYS.map(step => ({
    n: step.n,
    title: t[step.titleKey as keyof typeof t],
    detail: t[step.detailKey as keyof typeof t],
  }))

  const LOYALTY = LOYALTY_MONTHS.map(months => ({
    months,
    label: t.refer_loyalty_tier_label.replace('{months}', String(months)),
    credits: t.refer_loyalty_tier_credits.replace('{credits}', String(months)),
  }))

  const referralsLabel = (n: number) => (n === 1 ? t.refer_referral_singular : t.refer_referral_plural)

  const creditLabel = (amount: string) => t.refer_credit_amount_label.replace('{amount}', amount)
  const freeLabel = (months: number | null) =>
    months === null
      ? t.refer_entire_year_free
      : (months === 1 ? t.refer_month_free_singular : t.refer_months_free_plural).replace('{months}', String(months))
  const noteLabel = (note: EarningsRow['note']) =>
    note === 'half_year' ? t.refer_note_half_year : note === 'topped_up' ? t.refer_note_topped_up : ''

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="pt-16 pb-14 px-6 text-center" style={{ backgroundColor: '#0f1f3d' }}>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.refer_hero_heading}
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#93c5fd' }}>
            {t.refer_hero_subheading}
          </p>
        </section>

        {/* Disclaimer */}
        <section className="px-6 pt-10 max-w-3xl mx-auto">
          <div
            className="rounded-xl px-6 py-4 text-sm leading-relaxed"
            style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#374151' }}
          >
            {t.refer_disclaimer}
          </div>
        </section>

        {/* Section 1 — How referrals work */}
        <section className="px-6 pt-16 pb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0f1f3d' }}>
            {t.refer_how_it_works_heading}
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-5 mb-10">
            {HOW_STEPS.map(step => (
              <div
                key={step.n}
                className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow-sm"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: '#1e40af', color: '#ffffff' }}
                >
                  {step.n}
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#0f1f3d' }}>{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How the pool works */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-base font-bold mb-4" style={{ color: '#0f1f3d' }}>{t.refer_pool_heading}</h3>
            <ul className="flex flex-col gap-2">
              {[
                t.refer_pool_bullet_1,
                t.refer_pool_bullet_2,
                t.refer_pool_bullet_3,
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: '#1e40af' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <h3 className="text-base font-bold mb-4" style={{ color: '#0f1f3d' }}>{t.refer_examples_heading}</h3>
          <div className="flex flex-col gap-4 mb-4">
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold" style={{ color: '#15803d' }}>{t.refer_example_1_label}</span>{' '}
                {t.refer_example_1_body}
              </p>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold" style={{ color: '#1e40af' }}>{t.refer_example_2_label}</span>{' '}
                {t.refer_example_2_body}
              </p>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: '#fdf4ff', border: '1px solid #e9d5ff' }}
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold" style={{ color: '#7e22ce' }}>{t.refer_example_3_label}</span>{' '}
                {t.refer_example_3_body}
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            {t.refer_examples_fine_print}
          </p>
        </section>

        {/* Section 2 — Loyalty multiplier */}
        <section className="px-6 py-12" style={{ backgroundColor: '#0f1f3d' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">
              {t.refer_loyalty_heading}
            </h2>
            <p className="text-sm mb-4" style={{ color: '#93c5fd' }}>
              {t.refer_loyalty_subheading}
            </p>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: '#1e40af' }}>✓</span>
                  {t.refer_loyalty_bullet_1}
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: '#1e40af' }}>✓</span>
                  {t.refer_loyalty_bullet_2_prefix}<span className="font-semibold mx-1">{t.refer_loyalty_bullet_2_highlight}</span>{t.refer_loyalty_bullet_2_suffix}
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: '#1e40af' }}>✓</span>
                  {t.refer_loyalty_bullet_3}
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: '#1e40af' }}>✓</span>
                  {t.refer_loyalty_bullet_4}
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {LOYALTY.map(row => (
                <div
                  key={row.months}
                  className="rounded-xl p-5 text-center"
                  style={{ backgroundColor: '#1e3560' }}
                >
                  <p className="text-white font-bold text-lg mb-1">{row.months}</p>
                  <p className="text-xs mb-2" style={{ color: '#93c5fd' }}>{row.label}</p>
                  <p className="text-xs font-semibold text-white">{row.credits}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — What you can earn */}
        <section className="px-6 pt-16 pb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t.refer_earn_heading}
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            {t.refer_earn_subheading}
          </p>

          {/* Pro plan table */}
          <h3 className="text-base font-bold mb-3" style={{ color: '#0f1f3d' }}>
            {t.refer_pro_plan_label} <span className="font-normal text-gray-400 ml-1 text-sm">{t.refer_pro_plan_price}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {EARNINGS_PRO.map(row => (
              <div
                key={row.referrals}
                className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                  style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
                >
                  {row.referrals}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#0f1f3d' }}>
                    {row.referrals} {referralsLabel(row.referrals)}
                  </p>
                  <p className="text-sm text-gray-600">{creditLabel(row.creditAmount)}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: '#1e40af' }}>{freeLabel(row.months)}</p>
                  {noteLabel(row.note) && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#15803d' }}>
                      {noteLabel(row.note)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Max plan table */}
          <h3 className="text-base font-bold mb-3" style={{ color: '#0f1f3d' }}>
            {t.refer_max_plan_label} <span className="font-normal text-gray-400 ml-1 text-sm">{t.refer_max_plan_price}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {EARNINGS_MAX.map(row => (
              <div
                key={row.referrals}
                className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-5"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                  style={{ backgroundColor: '#ede9fe', color: '#7e22ce' }}
                >
                  {row.referrals}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#0f1f3d' }}>
                    {row.referrals} {referralsLabel(row.referrals)}
                  </p>
                  <p className="text-sm text-gray-600">{creditLabel(row.creditAmount)}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: '#7e22ce' }}>{freeLabel(row.months)}</p>
                  {noteLabel(row.note) && (
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#15803d' }}>
                      {noteLabel(row.note)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center">
            {t.refer_earn_fine_print}
          </p>
        </section>

        {/* Section 4 — Founding Member referral caps */}
        <section className="px-6 pb-12 max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#0f1f3d' }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {t.refer_founding_caps_heading}
            </h2>
            <p className="text-sm mb-8" style={{ color: '#93c5fd' }}>
              {t.refer_founding_caps_description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: t.refer_founding_pro_label, cap: 'R348/year', calc: 'R29 x 12', bg: '#1e3560', accent: '#93c5fd' },
                { label: t.refer_founding_max_label, cap: 'R708/year', calc: 'R59 x 12', bg: '#1e3560', accent: '#93c5fd' },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: item.bg }}
                >
                  <p className="text-white font-bold text-base mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-white mb-1">{item.cap}</p>
                  <p className="text-xs" style={{ color: item.accent }}>{item.calc.replace('x', String.fromCharCode(215))} {t.refer_annual_cap_suffix}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center" style={{ color: '#64748b' }}>
              {t.refer_founding_caps_fine_print}
            </p>
          </div>
        </section>

        {/* Section 5 — How to share */}
        <section className="px-6 pb-20 max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#0f1f3d' }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {t.refer_share_heading}
            </h2>
            <p className="text-sm mb-8" style={{ color: '#93c5fd' }}>
              {t.refer_share_subheading}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: String.fromCodePoint(0x1F517), label: t.refer_share_link_label, detail: t.refer_share_link_detail },
                { icon: String.fromCodePoint(0x1F511), label: t.refer_share_code_label, detail: t.refer_share_code_detail },
                { icon: String.fromCodePoint(0x1F4F1), label: t.refer_share_qr_label,   detail: t.refer_share_qr_detail },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl p-5 text-center"
                  style={{ backgroundColor: '#1e3560' }}
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-xs" style={{ color: '#93c5fd' }}>{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/profile"
                className="inline-block text-center font-semibold py-3 px-7 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: '#1e40af', color: '#ffffff' }}
              >
                {t.refer_cta_go_to_profile}
              </Link>
              <Link
                href="/pricing"
                className="inline-block text-center font-semibold py-3 px-7 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid #1e3560' }}
              >
                {t.topic_view_packages}
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
