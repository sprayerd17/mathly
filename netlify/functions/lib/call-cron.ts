// Netlify Scheduled Functions can't run Next.js route handlers directly, so
// each scheduled function here is a thin wrapper that calls the existing
// /api/cron/* route on the deployed site — same Firestore/email logic,
// no duplication. `URL` is injected by Netlify at runtime with the site's
// own production URL.
export async function callCronRoute(path: string): Promise<void> {
  const secret = process.env.CRON_SECRET
  const baseUrl = process.env.URL
  if (!secret || !baseUrl) {
    console.error(`[cron] missing CRON_SECRET or URL env var, cannot call ${path}`)
    return
  }
  const res = await fetch(`${baseUrl}${path}`, {
    headers: { Authorization: `Bearer ${secret}` },
  })
  const body = await res.text().catch(() => '')
  if (!res.ok) {
    console.error(`[cron] ${path} failed`, res.status, body)
    return
  }
  console.log(`[cron] ${path} ok`, body)
}
