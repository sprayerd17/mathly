// TEMPORARY: flipped back on so a screen recording can show the full
// paid-tier + referral flow to Paystack. Paystack is in TEST MODE in
// production right now, so this is safe — no real charges. Flip back to
// false as soon as the recording is done; every gate that reads this flag
// re-locks itself automatically.
export const PAYMENTS_ENABLED = true
