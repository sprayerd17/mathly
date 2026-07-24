import { FieldValue, type Firestore } from 'firebase-admin/firestore'
import { refundTransaction, type PaystackConfig } from '@/src/lib/paystack'
import { computeFamilyPrice, type Tier, type FoundingStatus } from '@/src/lib/pricing'
import { sendOwnerAlert } from '@/src/lib/email'

// Referral credit pool — the actual enforcement behind the promises made on
// /refer and profile.tsx: a referrer's own subscription price caps how much
// their pool can hold in a calendar year, a first-time referrer gets a flat
// allowance of 12 counted referrals, and every year after that the allowance
// carries forward as however many months they stayed subscribed the
// previous year. The pool never carries between years — whatever's unclaimed
// on Dec 31 is gone.
//
// Applying an accumulated credit against real Paystack billing has no clean
// "charge a reduced amount" option once a recurring Plan is already set up
// (updatePlan changes the *next* cycle's amount, not the one that's about to
// bill), so credit is applied as a partial refund of the transaction that
// just succeeded — functionally identical to a discount from the family's
// perspective, without touching the family's actual recurring Plan.
export type ReferralBlock = {
  referralCreditBalance: number
  referralCreditCap: number
  referralAllowance: number
  referralCountThisYear: number
  monthsActiveThisYear: number
  referralCreditYear: number
}

function annualCap(childPlans: Tier[], founding: FoundingStatus | null): number {
  const { total } = computeFamilyPrice(childPlans, founding ?? { pro: false, max: false })
  return total * 12
}

export function readReferralBlock(data: FirebaseFirestore.DocumentData): ReferralBlock {
  return {
    referralCreditBalance: typeof data.referralCreditBalance === 'number' ? data.referralCreditBalance : 0,
    referralCreditCap: typeof data.referralCreditCap === 'number' ? data.referralCreditCap : 0,
    referralAllowance: typeof data.referralAllowance === 'number' ? data.referralAllowance : 12,
    referralCountThisYear: typeof data.referralCountThisYear === 'number' ? data.referralCountThisYear : 0,
    monthsActiveThisYear: typeof data.monthsActiveThisYear === 'number' ? data.monthsActiveThisYear : 0,
    referralCreditYear: typeof data.referralCreditYear === 'number' ? data.referralCreditYear : 0,
  }
}

// Rolls a block over to `year` if it's stale, pricing the new cap off
// `childPlans`/`founding` as they stand right now. Called from inside every
// transaction below (and the daily rollover cron) so correctness never
// depends on the cron running at the right moment — only on this account
// being touched, by its own billing or by crediting a referral, at some
// point during the new year. referralCreditYear === 0 means "no block yet"
// (a brand-new referrer), which always gets the flat 12-referral allowance
// rather than treating a missing previous year as zero months active.
export function rolledOver(block: ReferralBlock, year: number, childPlans: Tier[], founding: FoundingStatus | null): ReferralBlock {
  if (block.referralCreditYear >= year) return block
  const allowance = block.referralCreditYear === 0 ? 12 : Math.min(12, Math.max(0, block.monthsActiveThisYear))
  return {
    referralCreditBalance: 0,
    referralCreditCap: annualCap(childPlans, founding),
    referralAllowance: allowance,
    referralCountThisYear: 0,
    monthsActiveThisYear: 0,
    referralCreditYear: year,
  }
}

// Called once, the moment a referred friend's first payment succeeds —
// credits the referrer's pool with the friend's payment amount, clamped to
// whatever room is left under this year's cap and allowance. Returns the
// amount actually credited (0 if the referrer is already at their annual cap
// or has used all of this year's referral allowance) — the caller persists
// this on the referral record, so "Amount Credited" in the referral history
// reflects reality instead of the friend's raw payment.
export async function creditReferrer(db: Firestore, referrerUid: string, friendPaymentAmount: number): Promise<number> {
  const year = new Date().getFullYear()
  const referrerRef = db.doc(`users/${referrerUid}`)
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(referrerRef)
    if (!snap.exists) return 0
    const data = snap.data()!
    const childPlans = Array.isArray(data.childPlans) ? (data.childPlans as Tier[]) : []
    const founding = (data.paystackFounding ?? null) as FoundingStatus | null
    let block = rolledOver(readReferralBlock(data), year, childPlans, founding)
    if (block.referralCountThisYear >= block.referralAllowance) {
      tx.set(referrerRef, block, { merge: true })
      return 0
    }
    const room = Math.max(0, block.referralCreditCap - block.referralCreditBalance)
    const credited = Math.min(friendPaymentAmount, room)
    block = {
      ...block,
      referralCreditBalance: block.referralCreditBalance + credited,
      referralCountThisYear: block.referralCountThisYear + 1,
    }
    tx.set(referrerRef, block, { merge: true })
    return credited
  })
}

// Called after any successful charge on a user's own account (signup,
// renewal, upgrade) — applies as much of their referral credit pool as the
// charge allows, via a Paystack partial refund. `countsAsActiveMonth` should
// be true for signup/renewal (a genuine billing cycle) and false for a
// same-cycle upgrade top-up, so a family isn't credited two "active months"
// for one calendar month.
//
// The balance is decremented *before* calling Paystack (inside the
// transaction) and restored if the refund call fails — a refund can't itself
// be part of the Firestore transaction, and reserving first closes the
// window where two concurrent webhook deliveries for different charges both
// read the same pre-refund balance and both try to apply it.
export async function consumeReferralCredit(
  db: Firestore,
  config: PaystackConfig,
  uid: string,
  reference: string,
  chargedAmount: number,
  opts: { countsAsActiveMonth: boolean },
): Promise<void> {
  const year = new Date().getFullYear()
  const userRef = db.doc(`users/${uid}`)

  const toApply = await db.runTransaction(async (tx) => {
    const snap = await tx.get(userRef)
    if (!snap.exists) return 0
    const data = snap.data()!
    const childPlans = Array.isArray(data.childPlans) ? (data.childPlans as Tier[]) : []
    const founding = (data.paystackFounding ?? null) as FoundingStatus | null
    let block = rolledOver(readReferralBlock(data), year, childPlans, founding)
    if (opts.countsAsActiveMonth) {
      block = { ...block, monthsActiveThisYear: Math.min(12, block.monthsActiveThisYear + 1) }
    }
    const amount = Math.min(block.referralCreditBalance, chargedAmount)
    if (amount <= 0) {
      tx.set(userRef, block, { merge: true })
      return 0
    }
    tx.set(userRef, { ...block, referralCreditBalance: block.referralCreditBalance - amount }, { merge: true })
    return amount
  })
  if (toApply <= 0) return

  const refund = await refundTransaction(config, { reference, amountRands: toApply })
  if (!refund.ok) {
    // The family hasn't actually received this credit — put it back for the
    // next successful charge to try again, rather than letting it vanish.
    await userRef.update({ referralCreditBalance: FieldValue.increment(toApply) }).catch(() => {})
    console.error('[referral-credit] refund failed', { uid, reference, toApply, status: refund.status, message: refund.message })
    await sendOwnerAlert(
      `Mathly: referral credit refund failed (uid ${uid})`,
      `<p>Reference ${reference}: tried to refund R${toApply} of referral credit but Paystack returned
       status ${refund.status} (${refund.message ?? 'unknown'}). The credit was restored to the pool —
       needs manual follow-up if this keeps failing for the same account.</p>`,
    ).catch(() => {})
    return
  }
  await userRef.update({ lastReferralCreditApplied: toApply, lastReferralCreditReference: reference }).catch(() => {})
}
