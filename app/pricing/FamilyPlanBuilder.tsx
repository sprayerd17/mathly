'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from '@/src/i18n/useTranslations'

type Plan = 'pro' | 'guided'
type Spots = { proTaken: number; guidedTaken: number }

const FOUNDING_SPOTS                       = 100
const FOUNDING_PRICE: Record<Plan, number> = { pro: 29, guided: 59 }
const FULL_PRICE:     Record<Plan, number> = { pro: 49, guided: 99 }
const SPOTS_KEY    = 'mathly_founding_spots'
const DEFAULT_SPOTS: Spots = { proTaken: 33, guidedTaken: 57 }

function PlanSelect({
  value,
  onChange,
  prices,
  founding,
  labels,
  foundingSuffix,
}: {
  value: Plan
  onChange: (v: Plan) => void
  prices: Record<Plan, number>
  founding: Record<Plan, boolean>
  labels: Record<Plan, string>
  foundingSuffix: string
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as Plan)}
      className="border rounded-lg px-3 py-2 text-sm bg-white font-medium"
      style={{ borderColor: '#d1d5db', color: '#0f1f3d' }}
    >
      <option value="pro">
        {`${labels.pro} — R${prices.pro}/month${founding.pro ? ' ' + foundingSuffix : ''}`}
      </option>
      <option value="guided">
        {`${labels.guided} — R${prices.guided}/month${founding.guided ? ' ' + foundingSuffix : ''}`}
      </option>
    </select>
  )
}

function FoundingBadge({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-bold px-2 py-0.5 rounded-full"
      style={{ backgroundColor: '#dbeafe', color: '#1e3a8a', border: '1px solid #93c5fd' }}
    >
      {label}
    </span>
  )
}

export default function FamilyPlanBuilder() {
  const t = useTranslations()
  const LABEL: Record<Plan, string> = { pro: t.dash_package_pro, guided: t.dash_package_guided }
  const [mounted, setMounted] = useState(false)
  const [spots, setSpots]     = useState<Spots>(DEFAULT_SPOTS)
  const [c1, setC1]           = useState<Plan>('pro')
  const [c2On, setC2On]       = useState(false)
  const [c2, setC2]           = useState<Plan>('pro')
  const [c3On, setC3On]       = useState(false)
  const [c3, setC3]           = useState<Plan>('pro')

  useEffect(() => {
    setMounted(true)
    const raw = localStorage.getItem(SPOTS_KEY)
    if (raw) {
      try { setSpots(JSON.parse(raw)) } catch { /* ignore */ }
    } else {
      localStorage.setItem(SPOTS_KEY, JSON.stringify(DEFAULT_SPOTS))
    }
  }, [])

  const proFounding     = spots.proTaken < FOUNDING_SPOTS
  const guidedFounding  = spots.guidedTaken < FOUNDING_SPOTS
  const proRemaining    = FOUNDING_SPOTS - spots.proTaken
  const guidedRemaining = FOUNDING_SPOTS - spots.guidedTaken

  const prices: Record<Plan, number>    = {
    pro:    proFounding    ? FOUNDING_PRICE.pro    : FULL_PRICE.pro,
    guided: guidedFounding ? FOUNDING_PRICE.guided : FULL_PRICE.guided,
  }
  const founding: Record<Plan, boolean> = { pro: proFounding, guided: guidedFounding }

  const persons: { label: string; plan: Plan }[] = [
    { label: t.pricing_person_1_label, plan: c1 },
    ...(c2On ? [{ label: t.pricing_person_2_label, plan: c2 }] : []),
    ...(c3On ? [{ label: t.pricing_person_3_label, plan: c3 }] : []),
  ]
  const multiPerson   = persons.length > 1
  const personDetails = persons.map(p => ({
    label:         p.label,
    plan:          p.plan,
    isFounding:    founding[p.plan],
    basePrice:     prices[p.plan],
    effectivePrice: (multiPerson && !founding[p.plan])
      ? Math.round(prices[p.plan] * 0.8)
      : prices[p.plan],
  }))
  const grandTotal     = personDetails.reduce((s, p) => s + p.effectivePrice, 0)
  const hasAnyDiscount = multiPerson && personDetails.some(p => !p.isFounding)
  const totalSaving    = personDetails.reduce((s, p) =>
    s + (multiPerson && !p.isFounding ? p.basePrice - p.effectivePrice : 0), 0)

  const showSpots = mounted && (proFounding || guidedFounding)

  const p2Pro    = proFounding    ? prices.pro * 2    : Math.round(prices.pro * 0.8) * 2
  const p3Pro    = proFounding    ? prices.pro * 3    : Math.round(prices.pro * 0.8) * 3
  const p2Guided = guidedFounding ? prices.guided * 2 : Math.round(prices.guided * 0.8) * 2
  const p3Guided = guidedFounding ? prices.guided * 3 : Math.round(prices.guided * 0.8) * 3
  const pMixed   = (proFounding    ? prices.pro * 2    : Math.round(prices.pro * 0.8) * 2)
                 + (guidedFounding ? prices.guided      : Math.round(prices.guided * 0.8))

  function slotBadgeAndSpots(plan: Plan) {
    if (!mounted || !founding[plan]) return null
    const remaining = plan === 'pro' ? proRemaining : guidedRemaining
    return (
      <div className="flex flex-col items-end gap-0.5">
        <FoundingBadge label={t.pricing_founding_member_badge} />
        <span className="text-xs" style={{ color: '#1e40af' }}>
          {t.pricing_spots_remaining.replace('{count}', String(remaining))}
        </span>
      </div>
    )
  }

  return (
    <div>
      {/* Founding member note — shown while at least one plan is in founding period */}
      {(!mounted || proFounding || guidedFounding) && (
        <div
          className="rounded-xl px-5 py-4 mb-6 max-w-2xl mx-auto"
          style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}
        >
          <p className="text-sm font-bold mb-2" style={{ color: '#0f1f3d' }}>
            {t.pricing_founding_explainer_heading}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {t.pricing_founding_explainer_body}
          </p>
          <p className="text-xs" style={{ color: '#9ca3af' }}>
            {t.pricing_founding_explainer_fine_print}
          </p>
        </div>
      )}

      {/* Tier comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">

        {/* FREE */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '1px solid #e5e7eb' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>{t.dash_package_free}</p>
          <p className="text-2xl font-bold mb-4" style={{ color: '#0f1f3d' }}>
            R0<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
          </p>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_free_feature_topics,
              t.pricing_free_feature_ai_assistant,
              t.pricing_free_feature_live_classes,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* PRO */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '2px solid #1e40af' }}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1e40af' }}>{t.dash_package_pro}</p>
            {(!mounted || proFounding) && <FoundingBadge label={t.pricing_founding_member_badge} />}
          </div>
          <div className="mb-4">
            {(!mounted || proFounding) && (
              <p className="text-xs text-gray-400 line-through">R{FULL_PRICE.pro}{t.pricing_per_month}</p>
            )}
            <p className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
              R{prices.pro}<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
            </p>
          </div>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_pro_feature_full_access,
              t.pricing_pro_feature_complete_materials,
              t.pricing_pro_feature_dashboard,
              t.pricing_pro_feature_early_access,
              t.pricing_pro_feature_ai_assistant,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* GUIDED */}
        <div className="rounded-xl p-5 bg-white flex flex-col" style={{ border: '1px solid #e5e7eb' }}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>{t.dash_package_guided}</p>
            {(!mounted || guidedFounding) && <FoundingBadge label={t.pricing_founding_member_badge} />}
          </div>
          <div className="mb-4">
            {(!mounted || guidedFounding) && (
              <p className="text-xs text-gray-400 line-through">R{FULL_PRICE.guided}{t.pricing_per_month}</p>
            )}
            <p className="text-2xl font-bold" style={{ color: '#0f1f3d' }}>
              R{prices.guided}<span className="text-sm font-normal text-gray-400"> {t.pricing_per_month}</span>
            </p>
          </div>
          <ul className="flex-1 space-y-2.5 mb-5">
            {[
              t.pricing_guided_feature_everything_in_pro,
              t.pricing_guided_feature_discount_live_classes,
              t.pricing_guided_feature_weekly_queries,
              t.pricing_guided_feature_video_explanation,
              t.pricing_guided_feature_priority_support,
              t.pricing_guided_feature_exam_packs,
              t.pricing_guided_feature_ai_assistant,
            ].map(f => (
              <li key={f} className="flex gap-2 text-xs leading-snug" style={{ color: '#4b5563' }}>
                <span className="shrink-0 font-bold mt-0.5" style={{ color: '#1e40af' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-2xl mx-auto">
      {/* Builder card */}
      <div
        id="plan-builder"
        className="bg-white rounded-2xl shadow-sm p-8"
        style={{ border: '1px solid #e5e7eb' }}
      >
        <h3 className="text-lg font-bold mb-6" style={{ color: '#0f1f3d' }}>
          {t.pricing_choose_your_plan_heading}
        </h3>

        {/* Person rows */}
        <div className="mb-8">

          {/* Person 1 — always required */}
          <div
            className="flex items-center justify-between gap-4 py-4"
            style={{ borderBottom: '1px solid #f3f4f6' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}
              >
                {t.pricing_person_1_label}
              </span>
              <span className="text-xs text-gray-400">{t.pricing_required_label}</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              {slotBadgeAndSpots(c1)}
              <PlanSelect value={c1} onChange={setC1} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
            </div>
          </div>

          {/* Person 2 */}
          <div
            className="flex items-center justify-between gap-4 py-4"
            style={{ borderBottom: '1px solid #f3f4f6' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={c2On
                  ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                  : { backgroundColor: '#f3f4f6', color: '#9ca3af' }
                }
              >
                {t.pricing_person_2_label}
              </span>
              <button
                onClick={() => setC2On(!c2On)}
                className="text-xs font-semibold"
                style={{ color: c2On ? '#b91c1c' : '#1e40af' }}
              >
                {c2On ? t.pricing_remove_person : t.pricing_add_person}
              </button>
            </div>
            {c2On && (
              <div className="flex flex-col items-end gap-1">
                {slotBadgeAndSpots(c2)}
                <PlanSelect value={c2} onChange={setC2} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
              </div>
            )}
          </div>

          {/* Person 3 */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={c3On
                  ? { backgroundColor: '#dbeafe', color: '#1e40af' }
                  : { backgroundColor: '#f3f4f6', color: '#9ca3af' }
                }
              >
                {t.pricing_person_3_label}
              </span>
              <button
                onClick={() => setC3On(!c3On)}
                className="text-xs font-semibold"
                style={{ color: c3On ? '#b91c1c' : '#1e40af' }}
              >
                {c3On ? t.pricing_remove_person : t.pricing_add_person}
              </button>
            </div>
            {c3On && (
              <div className="flex flex-col items-end gap-1">
                {slotBadgeAndSpots(c3)}
                <PlanSelect value={c3} onChange={setC3} prices={prices} founding={founding} labels={LABEL} foundingSuffix={t.pricing_founding_suffix} />
              </div>
            )}
          </div>
        </div>

        {/* Running price summary */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb' }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-3"
            style={{ color: '#6b7280' }}
          >
            {t.pricing_monthly_total_label}
          </p>

          {/* Per-person breakdown */}
          <div className="flex flex-col gap-2 mb-4">
            {personDetails.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{p.label} — {LABEL[p.plan]}</span>
                  <span className="font-semibold" style={{ color: '#374151' }}>R{p.effectivePrice}{t.pricing_per_month}</span>
                </div>
                {p.isFounding && (
                  <p className="text-xs mt-0.5" style={{ color: '#1e40af' }}>
                    {t.pricing_founding_rate_no_discount}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb' }} className="pt-3">
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-3xl font-bold" style={{ color: hasAnyDiscount ? '#1e40af' : '#0f1f3d' }}>
                R{grandTotal}
              </span>
              <span className="text-sm text-gray-400">{t.pricing_per_month}</span>
            </div>
            {hasAnyDiscount ? (
              <p className="text-xs font-semibold" style={{ color: '#15803d' }}>
                {t.pricing_family_discount_applied.replace('{amount}', String(totalSaving))}
              </p>
            ) : multiPerson ? (
              <p className="text-xs text-gray-400">
                {t.pricing_all_slots_founding_rate}
              </p>
            ) : (
              <p className="text-xs text-gray-400">
                {t.pricing_add_second_person_prompt}
              </p>
            )}
          </div>
        </div>

        <Link
          href="/pricing"
          className="block w-full text-center font-semibold py-3 rounded-xl text-sm"
          style={{ backgroundColor: '#1e40af', color: '#fff' }}
        >
          {t.pricing_claim_your_spot}
        </Link>
      </div>

      {/* Spots remaining row */}
      {showSpots && (
        <div className="mt-4 flex flex-col gap-1.5">
          {proFounding && (
            <p className="text-xs text-center font-semibold" style={{ color: '#1e40af' }}>
              {t.pricing_pro_founding_spots_remaining.replace('{count}', String(proRemaining))}
            </p>
          )}
          {guidedFounding && (
            <p className="text-xs text-center font-semibold" style={{ color: '#1e40af' }}>
              {t.pricing_guided_founding_spots_remaining.replace('{count}', String(guidedRemaining))}
            </p>
          )}
        </div>
      )}

      {/* Price examples */}
      <div
        className="mt-5 rounded-xl px-5 py-4"
        style={{ backgroundColor: '#f3f4f6' }}
      >
        {[
          t.pricing_example_pro.replace('{p2}', String(p2Pro)).replace('{p3}', String(p3Pro)),
          t.pricing_example_guided.replace('{p2}', String(p2Guided)).replace('{p3}', String(p3Guided)),
          t.pricing_example_mixed.replace('{amount}', String(pMixed)),
        ].map(ex => (
          <p key={ex} className="text-xs text-center py-0.5" style={{ color: '#9ca3af' }}>
            {ex}
          </p>
        ))}
      </div>
      </div>
    </div>
  )
}
