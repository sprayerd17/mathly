import crypto from 'crypto'
import dns from 'dns/promises'

export type PayfastConfig = {
  mode: 'sandbox' | 'live'
  merchantId: string
  merchantKey: string
  passphrase: string
  processUrl: string
  validateUrl: string
}

export function getPayfastConfig(): PayfastConfig {
  const mode = process.env.PAYFAST_MODE === 'live' ? 'live' : 'sandbox'
  if (mode === 'live') {
    return {
      mode,
      merchantId: process.env.PAYFAST_MERCHANT_ID_LIVE ?? '',
      merchantKey: process.env.PAYFAST_MERCHANT_KEY_LIVE ?? '',
      passphrase: process.env.PAYFAST_PASSPHRASE_LIVE ?? '',
      processUrl: 'https://www.payfast.co.za/eng/process',
      validateUrl: 'https://www.payfast.co.za/eng/query/validate',
    }
  }
  return {
    mode,
    merchantId: process.env.PAYFAST_MERCHANT_ID_SANDBOX ?? '',
    merchantKey: process.env.PAYFAST_MERCHANT_KEY_SANDBOX ?? '',
    passphrase: process.env.PAYFAST_PASSPHRASE_SANDBOX ?? '',
    processUrl: 'https://sandbox.payfast.co.za/eng/process',
    validateUrl: 'https://sandbox.payfast.co.za/eng/query/validate',
  }
}

// Mirrors PHP's urlencode(): encodeURIComponent leaves !'()* unescaped and uses
// %20 for spaces, both of which differ from PHP. PayFast's reference
// implementation is PHP, so the signature only matches theirs if we replicate it.
function pfUrlEncode(value: string): string {
  return encodeURIComponent(value)
    .replace(/%20/g, '+')
    .replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
}

// PayFast's classic checkout/ITN signature (distinct from their newer REST API
// signature, which IS alphabetically sorted — this one is not). Fields are
// concatenated in the order given, matching whatever order the caller inserted
// them into `fields` — the checkout route's field order becomes the form's input
// order, and the ITN route passes fields in the order received. The 'signature'
// key itself is excluded, but — confirmed against PayFast's own reference
// ItnValidator source — empty-valued fields are NOT dropped, they're kept as
// `key=` with nothing after the `=`. Omitting them entirely (as an earlier
// version of this function did) produces a signature that never matches
// PayFast's for ITNs with unused custom_str/custom_int fields.
export function generateSignature(fields: Record<string, string>, passphrase: string): string {
  const parts: string[] = []
  for (const [key, value] of Object.entries(fields)) {
    if (key === 'signature') continue
    const encoded = value ? pfUrlEncode(String(value).trim()) : ''
    parts.push(`${key}=${encoded}`)
  }
  let str = parts.join('&')
  if (passphrase) {
    str += `&passphrase=${pfUrlEncode(passphrase.trim())}`
  }
  return crypto.createHash('md5').update(str).digest('hex')
}

// PayFast publishes hostnames to resolve rather than a static IP list, since
// their IPs can change. Defense-in-depth alongside the signature + validate-call
// checks — not the sole guard, so a DNS hiccup here shouldn't be the only thing
// standing between a forged request and a Firestore write.
const PAYFAST_HOSTNAMES = [
  'www.payfast.co.za',
  'sandbox.payfast.co.za',
  'w1w.payfast.co.za',
  'w2w.payfast.co.za',
]

export async function verifySourceIp(ip: string): Promise<boolean> {
  try {
    const results = await Promise.all(
      PAYFAST_HOSTNAMES.map(host => dns.resolve4(host).catch(() => [] as string[]))
    )
    const validIps = new Set(results.flat())
    return validIps.has(ip)
  } catch {
    return false
  }
}

// ── PayFast Subscriptions (REST) API — cancellation ────────────────────────
//
// UNVERIFIED — sandbox-test before relying on this in production. Everything
// below the classic checkout/ITN code above is PayFast's separate, newer
// REST-style Subscriptions API, used only to tell PayFast "stop billing this
// token" (as opposed to the classic form-post flow, which only ever collects
// payments and receives webhooks — it has no facility to cancel anything).
// This was reconstructed from third-party/community SDK source (an official
// PHP SDK confirms the endpoint shape and that `token` is the subscription
// identifier already stored as `payfastToken`; an unofficial Node library
// supplied the signature algorithm) rather than PayFast's own docs, which
// weren't fetchable at implementation time.
//
// Three live attempts all failed with the same 401 "Merchant authorization
// failed" regardless of timestamp/header variations tried — pointing away
// from a signature-formatting nitpick and toward either (a) the signature
// algorithm being wrong in some more fundamental way, or (b) PayFast's
// documented requirement that the calling server's IP be whitelisted in the
// merchant's PayFast integration settings (a account-side prerequisite,
// unrelated to anything in this file — see the caller/route for that
// discussion). For (a), this version now mirrors the actual source of
// `payfast-api/core` (github.com/payfast-api/core — an MIT-licensed,
// fetched-and-read-verbatim reference, not a paraphrase) exactly:
//   - Timestamp: bare `YYYY-MM-DDTHH:MM:SS`, no trailing Z or offset —
//     confirmed by the library's own README example
//     (`"timestamp": "2020-01-01T00:00:00"`).
//   - Passphrase IS sent as its own header (`headers.passphrase =
//     params.passphrase`) in addition to being part of the signed string —
//     confirmed by reading `subscriptions.js`'s `cancel()` and
//     `tools.js`'s `signature()` verbatim. An earlier attempt in this
//     file's history removed this based on a secondhand, inaccurate
//     paraphrase of the same library — reading the actual source corrected
//     that.
//   - Encoding: `encodeURIComponent` + `%20`→`+`, matching `tools.js`'s
//     `signature()` exactly (distinct from the classic checkout/ITN API's
//     fuller PHP-`urlencode` emulation, `pfUrlEncode`, which stays
//     unchanged below since it's confirmed working in production).
// If this still 401s, the signature algorithm itself is very unlikely to be
// the remaining problem — the IP-whitelist prerequisite becomes the primary
// suspect. The full status+body is logged by the caller
// (app/api/payfast/cancel-subscription/route.ts) and surfaced directly in
// the cancel error message on the profile page either way.
export type PayfastCancelResult = { success: boolean; status: number; body: string }

function restUrlEncode(value: string): string {
  return encodeURIComponent(value).replace(/%20/g, '+')
}

export async function cancelPayfastSubscription(
  token: string,
  config: PayfastConfig,
): Promise<PayfastCancelResult> {
  const version = 'v1'
  const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, '')

  const signaturePairs: Record<string, string> = {
    'merchant-id': config.merchantId,
    version,
    timestamp,
  }
  if (config.passphrase) signaturePairs.passphrase = config.passphrase
  const signatureString = Object.keys(signaturePairs)
    .sort()
    .map(key => `${key}=${restUrlEncode(signaturePairs[key])}`)
    .join('&')
  const signature = crypto.createHash('md5').update(signatureString).digest('hex')

  const headers: Record<string, string> = {
    'merchant-id': config.merchantId,
    version,
    timestamp,
    signature,
  }
  if (config.passphrase) headers.passphrase = config.passphrase

  const res = await fetch(`https://api.payfast.co.za/subscriptions/${encodeURIComponent(token)}/cancel${config.mode === 'sandbox' ? '?testing=true' : ''}`, {
    method: 'PUT',
    headers,
  })
  const body = await res.text()
  return { success: res.ok, status: res.status, body }
}
