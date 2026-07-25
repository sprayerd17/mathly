import { getAdminDb } from '@/src/lib/firebase-admin'

// Public, read-only summary of founding-spot capacity for the pricing page.
// settings/founding itself is locked down in firestore.rules (Admin SDK
// only, see checkout/update-tiers/webhook) so the client can't read it
// directly — this is the one safe, narrow window onto it: just the two
// numbers needed to render a spots-remaining bar, nothing else on the doc.
export async function GET() {
  let adminDb
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/founding-status] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  const snap = await adminDb.doc('settings/founding').get()
  const f = snap.exists ? snap.data()! : {}

  // Mirrors checkout/route.ts's own enforcement: total <= 0 (unset) means
  // the window is open-ended, so soldOut is always false in that case.
  const plan = (key: 'pro' | 'max') => {
    const total = typeof f[`${key}Total`] === 'number' ? f[`${key}Total`] : 0
    const used = typeof f[`${key}Used`] === 'number' ? f[`${key}Used`] : 0
    return { total, used, soldOut: total > 0 && used >= total }
  }

  return Response.json({ pro: plan('pro'), max: plan('max') })
}
