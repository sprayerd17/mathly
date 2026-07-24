import type { Config } from '@netlify/functions'
import { callCronRoute } from './lib/call-cron'

const handler = async () => {
  await callCronRoute('/api/cron/expire-cancelled-subscriptions')
}

export default handler

export const config: Config = {
  schedule: '0 * * * *',
}
