import { NextRequest } from 'next/server'
import { type Firestore } from 'firebase-admin/firestore'
import { getAdminDb } from '@/src/lib/firebase-admin'
import { getPaystackConfig, verifyWebhookSignature } from '@/src/lib/paystack'
import { handlePaystackEvent, logEvent, type ChargeData } from '@/src/lib/paystack-webhook'

const OK = () => new Response(null, { status: 200 })

export async function POST(req: NextRequest) {
  let adminDb: Firestore | null = null
  try {
    adminDb = getAdminDb()
  } catch (err) {
    console.error('[paystack/webhook] Firebase Admin not configured', err)
    return OK()
  }

  const rawBody = await req.text()
  const config = getPaystackConfig()

  // Single check, cryptographically sufficient — see verifyWebhookSignature's
  // comment in src/lib/paystack.ts for why this replaces PayFast's three-layer
  // signature+IP-allowlist+validate-call defense.
  const signature = req.headers.get('x-paystack-signature')
  if (!verifyWebhookSignature(rawBody, signature, config.secretKey)) {
    console.error('[paystack/webhook] signature mismatch')
    await logEvent(adminDb, 'unknown', {}, 'rejected', 'signature_mismatch', null)
    return OK()
  }

  const body = JSON.parse(rawBody) as { event?: string; data?: ChargeData }
  await handlePaystackEvent(adminDb, config, body.event ?? '', body.data ?? {})
  return OK()
}
