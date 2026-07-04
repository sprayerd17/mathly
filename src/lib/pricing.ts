// Single source of truth for plan prices — imported by the pricing UI and by the
// PayFast checkout/ITN routes (which must never trust a client-supplied amount).

export type Plan = 'pro' | 'guided'

export const FOUNDING_PRICE: Record<Plan, number> = { pro: 29, guided: 59 }
export const FULL_PRICE: Record<Plan, number> = { pro: 49, guided: 99 }
export const FAMILY_DISCOUNT = 0.2

export type Tier = 'free' | 'pro' | 'guided'
export type PlanSize = 'solo' | 'family2' | 'family3'

// Mirrors the Package union in app/providers.tsx without importing it (that file
// is client-only 'use client'; this module is shared by server-only API routes too).
export type PackageValue =
  | 'free'
  | 'pro'
  | 'guided'
  | 'family_pro_2'
  | 'family_pro_3'
  | 'family_guided_2'
  | 'family_guided_3'

export function packageFromPlan(tier: Tier, size: PlanSize): PackageValue {
  if (tier === 'free') return 'free'
  if (size === 'solo') return tier
  if (size === 'family2') return tier === 'pro' ? 'family_pro_2' : 'family_guided_2'
  return tier === 'pro' ? 'family_pro_3' : 'family_guided_3'
}

// Given a Package value, returns its (tier, size) and the monthly rand amount —
// used server-side to validate a checkout request against a known price rather
// than trusting a client-supplied amount. isFounding selects the founding vs full
// rate; the caller clamps to one of these two known values per plan.
export function priceForPackage(pkg: PackageValue, isFounding: boolean): number {
  const table = isFounding ? FOUNDING_PRICE : FULL_PRICE
  // Per-unit price is rounded first, then multiplied by headcount — matches the
  // exact calculation order in app/pricing/FamilyPlanBuilder.tsx so the amount
  // charged always equals the amount shown on the pricing page.
  const perUnit = (tier: Plan) => isFounding ? table[tier] : Math.round(table[tier] * (1 - FAMILY_DISCOUNT))
  switch (pkg) {
    case 'free': return 0
    case 'pro': return table.pro
    case 'guided': return table.guided
    case 'family_pro_2': return perUnit('pro') * 2
    case 'family_pro_3': return perUnit('pro') * 3
    case 'family_guided_2': return perUnit('guided') * 2
    case 'family_guided_3': return perUnit('guided') * 3
  }
}

export function planLabel(pkg: PackageValue): string {
  switch (pkg) {
    case 'free': return 'Free'
    case 'pro': return 'Pro'
    case 'guided': return 'Guided'
    case 'family_pro_2': return 'Pro — Family of 2'
    case 'family_pro_3': return 'Pro — Family of 3'
    case 'family_guided_2': return 'Guided — Family of 2'
    case 'family_guided_3': return 'Guided — Family of 3'
  }
}
