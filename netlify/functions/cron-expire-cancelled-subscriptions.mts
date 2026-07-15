import type { Config } from '@netlify/functions'
import { callCronRoute } from './lib/call-cron'

export default async () => {
  await callCronRoute('/api/cron/expire-cancelled-subscriptions')
}

export const config: Config = {
  schedule: '0 * * * *',
}
