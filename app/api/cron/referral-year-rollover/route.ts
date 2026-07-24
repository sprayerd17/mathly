import { NextRequest } from 'next/server'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { isCronRequestAuthorized } from '@/src/lib/cron-auth'
import { readReferralBlock, rolledOver } from '@/src/lib/referral-credit'
import type { Tier, FoundingStatus } from '@/src/lib/pricing'

// Referral pools reset every January 1st (see src/lib/referral-credit.ts) —
// the reset itself is applied lazily, inside the same transaction as any
// crediting/consuming event, so correctness never depends on this cron
// running at the right moment. This sweep exists purely so the profile
// page's referral stats (read directly off the user doc, not routed through
// a transaction) don't keep showing last year's numbers for weeks just
// because that account hasn't had a billing event yet this year.
//
// referralCreditYear only exists on accounts that have had at least one
// referral crediting/consuming event — a plain "<" range query already
// excludes every account without the field (Firestore range queries never
// match a missing field), so this never touches accounts with no referral
// history to roll over.
export async function GET(req: NextRequest) {
  if (!isCronRequestAuthorized(req)) {
    return new Response('Unauthorized', { status: 401 })
  }

  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[cron/referral-year-rollover] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  const year = new Date().getFullYear()
  const snap = await adminDb
    .collection('users')
    .where('referralCreditYear', '<', year)
    .limit(500)
    .get()

  let rolled = 0
  for (const doc of snap.docs) {
    const data = doc.data()
    const childPlans = Array.isArray(data.childPlans) ? (data.childPlans as Tier[]) : []
    const founding = (data.paystackFounding ?? null) as FoundingStatus | null
    const block = rolledOver(readReferralBlock(data), year, childPlans, founding)
    await doc.ref.update(block)
    rolled++
  }

  return Response.json({ ok: true, rolled })
}
