import crypto from 'crypto'

export type PaystackConfig = {
  mode: 'test' | 'live'
  secretKey: string
}

export function getPaystackConfig(): PaystackConfig {
  const mode = process.env.PAYSTACK_MODE === 'live' ? 'live' : 'test'
  const secretKey = (mode === 'live' ? process.env.PAYSTACK_SECRET_KEY_LIVE : process.env.PAYSTACK_SECRET_KEY_TEST) ?? ''
  return { mode, secretKey }
}

const PAYSTACK_BASE = 'https://api.paystack.co'

// Paystack amounts are always in the currency's subunit (cents for ZAR) —
// every call site works in major-unit Rand, so this is the one place that
// conversion happens.
export function randsToCents(amountRands: number): number {
  return Math.round(amountRands * 100)
}

type PaystackResponse<T> = { ok: boolean; status: number; data: T | null; message: string | null }

async function paystackRequest<T = unknown>(
  config: PaystackConfig,
  path: string,
  init?: { method?: string; body?: unknown },
): Promise<PaystackResponse<T>> {
  const res = await fetch(`${PAYSTACK_BASE}${path}`, {
    method: init?.method ?? 'GET',
    headers: {
      Authorization: `Bearer ${config.secretKey}`,
      'Content-Type': 'application/json',
    },
    body: init?.body ? JSON.stringify(init.body) : undefined,
  })
  const json = await res.json().catch(() => null) as { status?: boolean; message?: string; data?: T } | null
  return {
    ok: res.ok && json?.status === true,
    status: res.status,
    data: json?.data ?? null,
    message: json?.message ?? null,
  }
}

// Paystack signs every webhook body with HMAC-SHA512, keyed by the secret
// key, sent as the `x-paystack-signature` header — this single check is
// cryptographically sufficient to prove the request came from Paystack
// (unlike PayFast's classic ITN, which layered a weaker MD5 signature with a
// separate DNS-based source-IP allowlist and a server-to-server validate
// call as defense-in-depth). Must be computed over the exact raw body bytes
// — parsing then re-serializing would produce a different signature.
export function verifyWebhookSignature(rawBody: string, signatureHeader: string | null, secretKey: string): boolean {
  if (!signatureHeader) return false
  const expected = crypto.createHmac('sha512', secretKey).update(rawBody).digest('hex')
  // Lengths always match here (both are hex SHA-512 digests), so timingSafeEqual
  // won't throw — but guard anyway since a malformed header is attacker-controlled input.
  if (expected.length !== signatureHeader.length) return false
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signatureHeader))
}

export type InitializeTransactionParams = {
  email: string
  amountRands: number
  reference: string
  callbackUrl: string
  plan?: string
  metadata?: Record<string, unknown>
}

export async function initializeTransaction(config: PaystackConfig, params: InitializeTransactionParams) {
  return paystackRequest<{ authorization_url: string; access_code: string; reference: string }>(
    config,
    '/transaction/initialize',
    {
      method: 'POST',
      body: {
        email: params.email,
        amount: randsToCents(params.amountRands),
        reference: params.reference,
        callback_url: params.callbackUrl,
        ...(params.plan ? { plan: params.plan } : {}),
        ...(params.metadata ? { metadata: params.metadata } : {}),
      },
    },
  )
}

// Defense-in-depth companion to the webhook signature check — confirms the
// transaction Paystack is telling us about really did succeed, straight from
// their API, before trusting webhook-reported amounts.
export async function verifyTransaction(config: PaystackConfig, reference: string) {
  return paystackRequest<{
    status: string
    amount: number
    reference: string
    customer: { customer_code: string; email: string }
    plan?: string
    metadata: Record<string, unknown> | null
  }>(config, `/transaction/verify/${encodeURIComponent(reference)}`)
}

// Creates a Plan for the exact amount this family was quoted — pricing is
// dynamic per family (mixed tiers, family discount, founding price), so
// there's no fixed set of plans to pre-create in the Paystack dashboard.
// Paystack subscriptions bill on this fixed amount going forward.
export async function createPlan(config: PaystackConfig, params: { name: string; amountRands: number }) {
  return paystackRequest<{ plan_code: string }>(config, '/plan', {
    method: 'POST',
    body: {
      name: params.name,
      amount: randsToCents(params.amountRands),
      interval: 'monthly',
    },
  })
}

// Looks up the subscription Paystack created for a customer right after
// their first plan-linked payment succeeds — called synchronously from the
// webhook handler's signup branch instead of depending solely on a separate
// `subscription.create` webhook event arriving (which the handler also
// listens for, as a fallback, in case Paystack's subscription record isn't
// created yet at the instant this call runs). The `customer` filter on this
// endpoint takes Paystack's numeric Customer ID (`data.customer.id` on a
// charge event) — NOT the `customer_code` string — confirmed against
// Paystack's own API reference after this was the reason the first live
// attempt left subscription_code/email_token unset.
export async function listSubscriptionsForCustomer(config: PaystackConfig, customerId: number) {
  return paystackRequest<Array<{ subscription_code: string; email_token: string; status: string }>>(
    config,
    `/subscription?customer=${customerId}`,
  )
}

// Cancels a subscription's future billing. Both `code` (subscription_code)
// and `token` (email_token) are required by Paystack's API — both are
// captured off the `subscription.create` webhook event and stored on the
// user doc. Plain Bearer-secret-key auth, no per-request signature — unlike
// PayFast's REST Subscriptions API, which never got past a 401 in this
// codebase's history despite several verified-correct signature attempts.
export async function disableSubscription(config: PaystackConfig, params: { code: string; token: string }) {
  return paystackRequest(config, '/subscription/disable', {
    method: 'POST',
    body: { code: params.code, token: params.token },
  })
}

// Amends the billed amount for a Plan going forward — used when a family
// downgrades one child off a paid tier and the monthly total shrinks.
// `update_existing_subscriptions: true` (plural — a live-verified 400
// "Unknown/Unexpected parameter" confirmed the singular form some
// third-party docs use is wrong) tells Paystack to apply the new amount to
// every subscription currently on this Plan, not just future subscriptions
// created against it. Safe here specifically because createPlan() (above)
// creates one dedicated Plan per family — there is exactly one subscription
// on this code, so "existing subscriptions" means this one family, never a
// different customer sharing a rate.
export async function updatePlan(config: PaystackConfig, params: { code: string; amountRands: number }) {
  return paystackRequest(config, `/plan/${encodeURIComponent(params.code)}`, {
    method: 'PUT',
    body: { amount: randsToCents(params.amountRands), update_existing_subscriptions: true },
  })
}
