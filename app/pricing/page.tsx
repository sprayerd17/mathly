'use client'

import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import FamilyPlanBuilder from './FamilyPlanBuilder'
import { useTranslations } from '@/src/i18n/useTranslations'
import { PAYMENTS_ENABLED } from '@/src/lib/launch-config'

function useTableFeatures() {
  const t = useTranslations()
  return [
    { label: t.pricing_feature_study_guides,           free: true,  pro: true,  max: true  },
    { label: t.pricing_feature_practice_questions,     free: true,  pro: true,  max: true  },
    { label: t.pricing_feature_answers,                free: false, pro: true,  max: true  },
    { label: t.pricing_feature_all_topics_grades,      free: false, pro: true,  max: true  },
    { label: t.pricing_feature_expert_group_responses, free: false, pro: false, max: true  },
  ]
}

function Check({ label }: { label: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-[#1e40af] mx-auto"
      aria-label={label}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Dash({ label }: { label: string }) {
  return (
    <span className="block text-gray-300 text-lg leading-none mx-auto w-fit" aria-label={label}>
      —
    </span>
  )
}

export default function PricingPage() {
  const t = useTranslations()
  const TABLE_FEATURES = useTableFeatures()

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />

      <main className="flex-1">

        {/* Launch banner */}
        <div
          className="w-full py-3 px-6 text-center text-sm font-semibold"
          style={{ background: '#0f1f3d', color: '#93c5fd' }}
        >
          {PAYMENTS_ENABLED ? t.pricing_launch_banner : t.pricing_launch_banner_paused}
        </div>

        {/* Hero */}
        <section className="pt-8 pb-5 px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ color: '#0f1f3d' }}
          >
            {t.pricing_hero_heading}
          </h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            {t.pricing_hero_subheading}
          </p>
        </section>

        {/* Plan selector */}
        <section className="px-6 pt-2 pb-8 max-w-6xl mx-auto">
          <FamilyPlanBuilder />
          <p className="text-sm text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.pricing_family_discount_note}
          </p>
        </section>

        {/* Get Mathly Free */}
        <section className="px-6 pt-4 pb-4 max-w-6xl mx-auto">
          <div className="rounded-2xl px-8 py-8 sm:px-12" style={{ backgroundColor: '#0f1f3d' }}>
            <div className="max-w-2xl mx-auto text-center mb-7">
              <h2 className="text-3xl font-bold text-white mb-3">
                {t.pricing_referral_promo_heading}
              </h2>
              <p className="text-base" style={{ color: '#93c5fd' }}>
                {t.pricing_referral_promo_description}
              </p>
              <p className="text-xs mt-2" style={{ color: '#64748b' }}>
                {t.pricing_referral_promo_fine_print}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-7">
              {[
                t.pricing_referral_stat_full_year,
                t.pricing_referral_stat_stay_subscribed,
              ].map(stat => (
                <div
                  key={stat}
                  className="rounded-xl px-5 py-4 text-center"
                  style={{ backgroundColor: '#1e3560' }}
                >
                  <p className="text-white font-semibold text-sm leading-snug">{stat}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/refer"
                className="inline-block font-semibold py-3 px-8 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: '#1e40af', color: '#ffffff' }}
              >
                {t.pricing_referral_promo_cta}
              </Link>
            </div>
          </div>
        </section>

        {/* Live Classes horizontal card */}
        <section className="px-6 pt-8 pb-4 max-w-4xl mx-auto">
          <div
            className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            style={{ background: '#0f1f3d' }}
          >
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#93c5fd' }}>
                {t.pricing_live_classes_label}
              </p>
              <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                {t.pricing_live_classes_description}
              </p>
            </div>
            <div className="text-center shrink-0">
              <span className="text-4xl font-bold text-white">{t.pricing_live_classes_from_price}</span>
              <span className="text-sm ml-1" style={{ color: '#94a3b8' }}>{t.pricing_per_session}</span>
            </div>
            <div className="shrink-0">
              <Link
                href="/live-classes"
                className="inline-block font-semibold py-3 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
                style={{ background: '#ffffff', color: '#0f1f3d' }}
              >
                {t.pricing_view_upcoming_classes}
              </Link>
            </div>
          </div>
        </section>


        {/* Comparison table */}
        <section className="px-6 pt-8 pb-24 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8" style={{ color: '#0f1f3d' }}>
            {t.pricing_whats_included_heading}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-6 font-semibold text-gray-400 uppercase tracking-wide text-xs w-2/5">
                    {t.pricing_table_feature_column}
                  </th>
                  {[
                    { name: t.dash_package_free, price: 'R0', highlighted: false },
                    { name: t.dash_package_pro, price: 'R29*', highlighted: true },
                    { name: t.dash_package_max, price: 'R59*', highlighted: false },
                  ].map((col) => (
                    <th
                      key={col.name}
                      className="pb-4 px-3 font-bold text-center text-xs uppercase tracking-wide"
                      style={{ color: col.highlighted ? '#1e40af' : '#0f1f3d' }}
                    >
                      <span className="block">{col.name}</span>
                      <span className="block font-normal text-gray-400 normal-case tracking-normal mt-0.5">{col.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8fafc' }}
                  >
                    <td className="py-3.5 pr-6 text-gray-700 font-medium rounded-l-lg pl-4">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-3 text-center">{row.free   ? <Check label={t.pricing_included_label} /> : <Dash label={t.pricing_not_included_label} />}</td>
                    <td className="py-3.5 px-3 text-center">{row.pro    ? <Check label={t.pricing_included_label} /> : <Dash label={t.pricing_not_included_label} />}</td>
                    <td className="py-3.5 px-3 text-center rounded-r-lg">{row.max ? <Check label={t.pricing_included_label} /> : <Dash label={t.pricing_not_included_label} />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-right">{t.pricing_founding_member_rate_note}</p>
        </section>

      </main>
    </div>
  )
}
