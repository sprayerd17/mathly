// Single source of truth for plan prices — imported by the pricing UI, the
// registration wizard, and the Paystack checkout/webhook routes (which must
// never trust a client-supplied amount).

export type Plan = 'pro' | 'guided'
export type Tier = 'free' | 'pro' | 'guided'

export const FOUNDING_PRICE: Record<Plan, number> = { pro: 29, guided: 59 }
export const FULL_PRICE: Record<Plan, number> = { pro: 49, guided: 99 }
export const FAMILY_DISCOUNT = 0.2

export type FoundingStatus = { pro: boolean; guided: boolean }

export type ChildPriceBreakdown = { tier: Tier; price: number; isFounding: boolean }

// Prices a family's per-child tier selection. Each child picks Free/Pro/Guided
// independently — the 20% family discount kicks in once there's more than one
// PAID seat (free seats don't count toward that threshold and never trigger
// it on their own), and only applies to a seat once its founding-price window
// has closed. This is the one place this math lives — the registration
// wizard, FamilyPlanBuilder.tsx, and the checkout route all call this rather
// than each computing the total independently.
export function computeFamilyPrice(
  tiers: Tier[],
  founding: FoundingStatus
): { total: number; perChild: ChildPriceBreakdown[] } {
  const paidCount = tiers.filter(t => t !== 'free').length
  const multiPaid = paidCount > 1
  const perChild: ChildPriceBreakdown[] = tiers.map(tier => {
    if (tier === 'free') return { tier, price: 0, isFounding: false }
    const isFounding = founding[tier]
    const base = isFounding ? FOUNDING_PRICE[tier] : FULL_PRICE[tier]
    const price = multiPaid && !isFounding ? Math.round(base * (1 - FAMILY_DISCOUNT)) : base
    return { tier, price, isFounding }
  })
  const total = perChild.reduce((sum, p) => sum + p.price, 0)
  return { total, perChild }
}
