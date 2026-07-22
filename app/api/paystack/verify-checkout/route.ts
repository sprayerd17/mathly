import { NextRequest } from 'next/server'
import { getAdminAuth, getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, verifyTransaction } from '@/src/lib/paystack'
import { handlePaystackEvent, type ChargeData } from '@/src/lib/paystack-webhook'

// Fallback confirmation path for the /pricing/success page. Paystack's
// webhook is the primary source of truth for completed payments, but
// delivery depends on the account's webhook URL being configured correctly
// in the Paystack dashboard for the active mode (test vs live) — a common
// gap in a fresh sandbox setup, and one that otherwise leaves the success
// page polling Firestore forever with no way to know the charge went
// through. This route independently verifies the transaction straight from
// Paystack's API (never trusts the client on the outcome) and, if genuinely
// successful, runs it through the exact same handler the webhook uses — a
// double-delivery (webhook AND this route both firing) is a safe no-op via
// handlePaystackEvent's own idempotency checks (e.g. no pending checkout on
// file once already processed).
export async function POST(req: NextRequest) {
  const { idToken, reference } = await req.json().catch(() => ({})) as {
    idToken?: string
    reference?: string
  }
  if (!idToken || !reference) return new Response('Bad request', { status: 400 })

  let adminAuth, adminDb
  try {
    adminAuth = getAdminAuth()
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/verify-checkout] Firebase Admin not configured', err)
    return new Response('Server not configured', { status: 500 })
  }

  let uid: string
  try {
    uid = (await adminAuth.verifyIdToken(idToken)).uid
  } catch {
    return new Response('Unauthorized', { status: 401 })
  }

  const config = getPaystackConfig()
  const result = await verifyTransaction(config, reference)
  if (!result.ok || !result.data) {
    // Not necessarily an error — the charge may still be settling on
    // Paystack's side, or the reference is stale. The client just keeps
    // polling Firestore, which the webhook (if it does arrive) still updates.
    return Response.json({ status: 'pending' })
  }

  const metadata = (result.data.metadata ?? {}) as Record<string, unknown>
  // Scopes this route to confirming the caller's own checkout. The handler
  // below only ever writes to metadata.uid's doc regardless of who calls it,
  // so this isn't a privilege boundary — just keeps the endpoint from being
  // usable to nudge a different account's transaction from this account's tab.
  if (metadata.uid !== uid) {
    return Response.json({ status: 'pending' })
  }

  if (result.data.status !== 'success') {
    return Response.json({ status: result.data.status === 'failed' ? 'failed' : 'pending' })
  }

  const chargeData: ChargeData = {
    reference: result.data.reference,
    status: result.data.status,
    amount: result.data.amount,
    plan: result.data.plan,
    customer: {
      id: result.data.customer.id,
      customer_code: result.data.customer.customer_code,
      email: result.data.customer.email,
    },
    metadata: result.data.metadata,
  }

  await handlePaystackEvent(adminDb, config, 'charge.success', chargeData)
  return Response.json({ status: 'processed' })
}
