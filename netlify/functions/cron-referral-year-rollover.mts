import type { Config } from '@netlify/functions'
import { callCronRoute } from './lib/call-cron'

const handler = async () => {
  await callCronRoute('/api/cron/referral-year-rollover')
}

export default handler

// Daily rather than hourly like the other crons — this sweep is a display
// backstop (see the route's own comment), not a correctness dependency, so
// there's no need to hit Firestore every hour for it.
export const config: Config = {
  schedule: '0 2 * * *',
}
