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
// key itself and any empty values are always excluded from the hashed string, so
// this same function works for both signing and verifying.
export function generateSignature(fields: Record<string, string>, passphrase: string): string {
  const parts: string[] = []
  for (const [key, value] of Object.entries(fields)) {
    if (key === 'signature') continue
    if (value === '' || value == null) continue
    parts.push(`${key}=${pfUrlEncode(String(value).trim())}`)
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
