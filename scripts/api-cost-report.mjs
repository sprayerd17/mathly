// READ-ONLY unit-economics report over MEASURED Anthropic token usage.
//
// This script never writes, updates, or deletes anything in Firestore — every
// call it makes is a read. It exists to replace estimated per-request cost
// with actual measurement, now that two API routes record real token usage:
//   - app/api/ai-assistant/route.ts writes a `usage` map (tutorInput/
//     tutorOutput/verifierInput/verifierOutput, any of which may be null if
//     that leg's usage object was never obtained — see the comment on that
//     field) onto each `aiTrainingData` row, and increments the matching
//     aiAssistant* counters on `apiUsageDaily/{YYYY-MM-DD}`.
//   - app/api/analyse-test/route.ts writes `testAnalysisSubmissions` rows.
//     As of this writing that route does NOT yet write a `usage` map or
//     touch `apiUsageDaily`'s testAnalysis* counters — so every
//     testAnalysisSubmissions row, and every testAnalysis* field on every
//     apiUsageDaily doc, will currently be reported as unknown/missing
//     here. That is correct, not a bug in this script: it reflects reality,
//     and will start filling in the moment that route is updated to record
//     usage. Never let it get "fixed" by coercing those to 0.
//
// The whole point is honesty about gaps: if a field or map is missing or
// null on a document, it is counted as unknown and reported as an unknown
// count — never coerced to 0 and folded into a total as if it were measured.
//
// Run from the project root with Node's built-in env-file support (no
// dotenv dependency needed):
//   node --env-file=.env.local scripts/api-cost-report.mjs
//
// Options:
//   --since=YYYY-MM-DD   Only include this date and later (inclusive).
//   --until=YYYY-MM-DD   Only include this date and earlier (inclusive).
//   --zar=NN.NN          Override the ZAR_PER_USD assumption below.
//   --json                Emit machine-readable JSON instead of the table.
//
// Examples:
//   node --env-file=.env.local scripts/api-cost-report.mjs
//   node --env-file=.env.local scripts/api-cost-report.mjs --since=2026-08-01 --until=2026-09-05
//   node --env-file=.env.local scripts/api-cost-report.mjs --zar=19.10 --json > cost-report.json

import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldPath } from 'firebase-admin/firestore'

const BATCH_SIZE = 200

// ---------------------------------------------------------------------------
// PRICING — CHECK THESE AGAINST CURRENT ANTHROPIC PRICING BEFORE TRUSTING ANY
// DOLLAR (OR RAND) FIGURE THIS SCRIPT PRINTS. Anthropic revises pricing from
// time to time; these are believed correct as of the dates noted below and
// nothing more. Edit here, not anywhere else in the file.
// ---------------------------------------------------------------------------

// Claude Sonnet 5 introductory pricing, USD per MILLION tokens.
// Valid through 2026-08-31 (inclusive).
const SONNET_5_INTRO_RATE = { inputPerMillion: 2.00, outputPerMillion: 10.00 }

// Claude Sonnet 5 standard pricing, USD per MILLION tokens.
// Takes effect 2026-09-01.
const SONNET_5_STANDARD_RATE = { inputPerMillion: 3.00, outputPerMillion: 15.00 }

// The day the standard rate takes over from the introductory rate. Kept as a
// plain YYYY-MM-DD string (lexicographically comparable) so the rate is
// picked PER DAY/ROW being priced, not as one blanket rate for the whole
// report — a range spanning 31 Aug / 1 Sep prices each side correctly.
const PRICE_CUTOVER_DATE = '2026-09-01'

// USD -> ZAR assumption. This is NOT a live exchange rate — it WILL drift
// out of date. Override per run with --zar=NN.NN; check it against a real
// rate before trusting the ZAR column for anything that matters.
const DEFAULT_ZAR_PER_USD = 18.50

function rateForDate(dateStr) {
  return dateStr < PRICE_CUTOVER_DATE ? SONNET_5_INTRO_RATE : SONNET_5_STANDARD_RATE
}

function usdForTokens(inputTokens, outputTokens, dateStr) {
  const rate = rateForDate(dateStr)
  return (inputTokens / 1_000_000) * rate.inputPerMillion + (outputTokens / 1_000_000) * rate.outputPerMillion
}

function mean(values) {
  if (values.length === 0) return null
  return values.reduce((a, b) => a + b, 0) / values.length
}

function median(values) {
  if (values.length === 0) return null
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

function parseArgs(argv) {
  let since = null
  let until = null
  let zar = DEFAULT_ZAR_PER_USD
  let json = false

  const isValidDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(new Date(`${s}T00:00:00.000Z`).getTime())

  for (const arg of argv) {
    if (arg.startsWith('--since=')) {
      const raw = arg.slice('--since='.length)
      if (!isValidDate(raw)) {
        console.error(`Invalid --since value ${JSON.stringify(raw)} — expected YYYY-MM-DD.`)
        process.exit(1)
      }
      since = raw
    } else if (arg.startsWith('--until=')) {
      const raw = arg.slice('--until='.length)
      if (!isValidDate(raw)) {
        console.error(`Invalid --until value ${JSON.stringify(raw)} — expected YYYY-MM-DD.`)
        process.exit(1)
      }
      until = raw
    } else if (arg.startsWith('--zar=')) {
      const raw = arg.slice('--zar='.length)
      const parsed = Number(raw)
      if (!Number.isFinite(parsed) || parsed <= 0) {
        console.error(`Invalid --zar value ${JSON.stringify(raw)} — expected a positive number.`)
        process.exit(1)
      }
      zar = parsed
    } else if (arg === '--json') {
      json = true
    } else {
      console.error(`Unrecognized argument: ${arg}`)
      process.exit(1)
    }
  }

  if (since && until && since > until) {
    console.error(`--since (${since}) is after --until (${until}).`)
    process.exit(1)
  }

  return { since, until, zar, json }
}

// --- apiUsageDaily rollups ---------------------------------------------------

const DAILY_FIELDS = [
  ['aiAssistantRequests', 'aiAssistant', 'requests'],
  ['aiAssistantInputTokens', 'aiAssistant', 'inputTokens'],
  ['aiAssistantOutputTokens', 'aiAssistant', 'outputTokens'],
  ['testAnalysisRequests', 'testAnalysis', 'requests'],
  ['testAnalysisInputTokens', 'testAnalysis', 'inputTokens'],
  ['testAnalysisOutputTokens', 'testAnalysis', 'outputTokens'],
]

// Pages through apiUsageDaily ordered by document id (== YYYY-MM-DD), so
// --since/--until can be applied as a real Firestore range query instead of
// an in-memory filter. Logs progress every batch.
async function fetchDailyRollupDocs(db, since, until) {
  const collectionRef = db.collection('apiUsageDaily')
  let lastDoc = null
  let scanned = 0
  const docs = []

  for (;;) {
    let query = collectionRef.orderBy(FieldPath.documentId())
    if (since) query = query.where(FieldPath.documentId(), '>=', since)
    if (until) query = query.where(FieldPath.documentId(), '<=', until)
    query = query.limit(BATCH_SIZE)
    if (lastDoc) query = query.startAfter(lastDoc)

    const snap = await query.get()
    if (snap.empty) break

    for (const doc of snap.docs) {
      scanned++
      docs.push(doc)
    }
    lastDoc = snap.docs[snap.docs.length - 1]
    console.log(`  [apiUsageDaily] scanned ${scanned}...`)
    if (snap.docs.length < BATCH_SIZE) break
  }

  return docs
}

// Converts one apiUsageDaily doc into a row with per-feature request/token
// counts and cost. Any field that is missing or explicitly null is kept as
// null (never coerced to 0) and its field name is recorded in unknownFields.
function buildDayRow(doc) {
  const data = doc.data()
  const row = { date: doc.id, aiAssistant: {}, testAnalysis: {}, unknownFields: [] }

  for (const [field, feature, key] of DAILY_FIELDS) {
    const v = data[field]
    if (v === undefined || v === null) {
      row[feature][key] = null
      row.unknownFields.push(field)
    } else {
      row[feature][key] = v
    }
  }

  row.aiAssistant.usd = row.aiAssistant.inputTokens != null && row.aiAssistant.outputTokens != null
    ? usdForTokens(row.aiAssistant.inputTokens, row.aiAssistant.outputTokens, row.date)
    : null
  row.testAnalysis.usd = row.testAnalysis.inputTokens != null && row.testAnalysis.outputTokens != null
    ? usdForTokens(row.testAnalysis.inputTokens, row.testAnalysis.outputTokens, row.date)
    : null

  // Day total sums whichever feature costs are known; if BOTH are unknown
  // the day total is unknown too rather than a fabricated 0.
  const knownUsdParts = [row.aiAssistant.usd, row.testAnalysis.usd].filter((v) => v != null)
  row.totalUsd = knownUsdParts.length > 0 ? knownUsdParts.reduce((a, b) => a + b, 0) : null

  return row
}

function emptyFeatureTotals() {
  return {
    requests: 0,
    inputTokens: 0,
    outputTokens: 0,
    usd: 0,
    // Count of days where this feature's field was missing/null on the
    // apiUsageDaily doc — excluded from the sums above, not folded in as 0.
    unknownDays: { requests: 0, inputTokens: 0, outputTokens: 0 },
  }
}

function aggregateDailyTotals(rows) {
  const totals = { aiAssistant: emptyFeatureTotals(), testAnalysis: emptyFeatureTotals(), grandUsd: 0 }

  for (const row of rows) {
    for (const feature of ['aiAssistant', 'testAnalysis']) {
      const t = totals[feature]
      const r = row[feature]
      if (r.requests != null) t.requests += r.requests; else t.unknownDays.requests++
      if (r.inputTokens != null) t.inputTokens += r.inputTokens; else t.unknownDays.inputTokens++
      if (r.outputTokens != null) t.outputTokens += r.outputTokens; else t.unknownDays.outputTokens++
      if (r.usd != null) t.usd += r.usd
    }
    if (row.totalUsd != null) totals.grandUsd += row.totalUsd
  }

  return totals
}

// --- Per-row usage maps (aiTrainingData / testAnalysisSubmissions) ---------

function combineNullable(a, b) {
  if (a == null && b == null) return null
  return (a ?? 0) + (b ?? 0)
}

// Mirrors the app's own apiUsageDaily rollup formula — (tutorX ?? 0) +
// (verifierX ?? 0) — which is what app/api/ai-assistant/route.ts itself
// uses when incrementing the daily counters. Returns null (never a
// fabricated number) when NEITHER leg has a real reading, e.g. the whole
// `usage` map is absent (testAnalysisSubmissions rows today; older
// aiTrainingData rows written before this field existed).
function rowTokens(usage) {
  if (!usage || typeof usage !== 'object') return null
  const input = combineNullable(usage.tutorInput, usage.verifierInput)
  const output = combineNullable(usage.tutorOutput, usage.verifierOutput)
  if (input == null || output == null) return null
  return { input, output }
}

// Pages through a top-level collection ordered by document id, computing a
// per-row USD cost from its `usage` map (priced using the row's own
// `createdAt` date, so a scan spanning the pricing cutover prices each row
// correctly). --since/--until are applied in-memory against `createdAt`,
// same convention as scripts/export-training-data.mjs: a doc with no
// createdAt can't have its recency verified, so it's skipped (counted
// separately) rather than silently included or excluded.
async function scanCollectionForCost(db, collectionName, since, until) {
  const collectionRef = db.collection(collectionName)
  let lastDoc = null
  let scanned = 0
  let missingUsageData = 0
  let skippedNoCreatedAt = 0
  const costs = []

  for (;;) {
    let query = collectionRef.orderBy(FieldPath.documentId()).limit(BATCH_SIZE)
    if (lastDoc) query = query.startAfter(lastDoc)
    const snap = await query.get()
    if (snap.empty) break

    for (const doc of snap.docs) {
      scanned++
      const data = doc.data()
      const createdAt = data.createdAt instanceof Timestamp ? data.createdAt : null

      if (since || until) {
        if (!createdAt) { skippedNoCreatedAt++; continue }
        const dateStr = createdAt.toDate().toISOString().slice(0, 10)
        if (since && dateStr < since) continue
        if (until && dateStr > until) continue
      }

      const tokens = rowTokens(data.usage)
      if (!tokens || !createdAt) { missingUsageData++; continue }

      const dateStr = createdAt.toDate().toISOString().slice(0, 10)
      costs.push(usdForTokens(tokens.input, tokens.output, dateStr))
    }

    lastDoc = snap.docs[snap.docs.length - 1]
    console.log(`  [${collectionName}] scanned ${scanned}, priced ${costs.length}, missing usage ${missingUsageData}...`)
    if (snap.docs.length < BATCH_SIZE) break
  }

  return { scanned, priced: costs.length, missingUsageData, skippedNoCreatedAt, costs }
}

function summarizeScan(scan, zar) {
  const meanUsd = mean(scan.costs)
  const medianUsd = median(scan.costs)
  return {
    scanned: scan.scanned,
    priced: scan.priced,
    missingUsageData: scan.missingUsageData,
    skippedNoCreatedAt: scan.skippedNoCreatedAt,
    meanUsd,
    medianUsd,
    meanZar: meanUsd == null ? null : meanUsd * zar,
    medianZar: medianUsd == null ? null : medianUsd * zar,
  }
}

// --- Report assembly / output -----------------------------------------------

function buildReport({ since, until, zar, days, dailyTotals, aiTrainingScan, testAnalysisScan }) {
  const withZar = (usd) => (usd == null ? null : usd * zar)

  return {
    range: { since, until },
    pricing: {
      introductory: { ...SONNET_5_INTRO_RATE, validThrough: PRICE_CUTOVER_DATE },
      standard: { ...SONNET_5_STANDARD_RATE, effectiveFrom: PRICE_CUTOVER_DATE },
      note: 'Check against current Anthropic pricing (anthropic.com/pricing) before trusting these numbers.',
    },
    zarPerUsd: zar,
    days: days.map((d) => ({
      date: d.date,
      aiAssistant: { ...d.aiAssistant, zar: withZar(d.aiAssistant.usd) },
      testAnalysis: { ...d.testAnalysis, zar: withZar(d.testAnalysis.usd) },
      totalUsd: d.totalUsd,
      totalZar: withZar(d.totalUsd),
    })),
    totals: {
      aiAssistant: { ...dailyTotals.aiAssistant, zar: withZar(dailyTotals.aiAssistant.usd) },
      testAnalysis: { ...dailyTotals.testAnalysis, zar: withZar(dailyTotals.testAnalysis.usd) },
      grandUsd: dailyTotals.grandUsd,
      grandZar: withZar(dailyTotals.grandUsd),
    },
    costPerRow: {
      aiTrainingData: summarizeScan(aiTrainingScan, zar),
      testAnalysisSubmissions: summarizeScan(testAnalysisScan, zar),
    },
  }
}

function fmtUsd(v) { return v == null ? 'unknown' : `$${v.toFixed(4)}` }
function fmtZar(v) { return v == null ? 'unknown' : `R${v.toFixed(2)}` }
function fmtInt(v) { return v == null ? 'unknown' : String(v) }

function printSimpleTable(header, rows) {
  const widths = header.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)))
  const line = (cells) => cells.map((c, i) => String(c).padEnd(widths[i])).join('  ')
  console.log(line(header))
  console.log(widths.map((w) => '-'.repeat(w)).join('  '))
  for (const r of rows) console.log(line(r))
}

function printTable(report) {
  console.log('\n=== API Cost Report ===')
  console.log(`Range: ${report.range.since ?? 'earliest'} .. ${report.range.until ?? 'latest'}`)
  console.log(`ZAR/USD: ${report.zarPerUsd} (assumption — override with --zar=NN.NN, verify before trusting)`)
  console.log(
    `Pricing: intro $${report.pricing.introductory.inputPerMillion}/$${report.pricing.introductory.outputPerMillion} ` +
    `per M tokens in/out (through ${report.pricing.introductory.validThrough}); ` +
    `standard $${report.pricing.standard.inputPerMillion}/$${report.pricing.standard.outputPerMillion} per M ` +
    `(from ${report.pricing.standard.effectiveFrom})`,
  )
  console.log('NOTE: verify these rates against current Anthropic pricing before trusting any figure below.\n')

  const header = ['Date', 'AiAsst req', 'AiAsst in', 'AiAsst out', 'TestAn req', 'TestAn in', 'TestAn out', 'USD', 'ZAR']
  const rows = report.days.map((d) => [
    d.date,
    fmtInt(d.aiAssistant.requests), fmtInt(d.aiAssistant.inputTokens), fmtInt(d.aiAssistant.outputTokens),
    fmtInt(d.testAnalysis.requests), fmtInt(d.testAnalysis.inputTokens), fmtInt(d.testAnalysis.outputTokens),
    fmtUsd(d.totalUsd), fmtZar(d.totalZar),
  ])
  rows.push([
    'TOTAL',
    fmtInt(report.totals.aiAssistant.requests), fmtInt(report.totals.aiAssistant.inputTokens), fmtInt(report.totals.aiAssistant.outputTokens),
    fmtInt(report.totals.testAnalysis.requests), fmtInt(report.totals.testAnalysis.inputTokens), fmtInt(report.totals.testAnalysis.outputTokens),
    fmtUsd(report.totals.grandUsd), fmtZar(report.totals.grandZar),
  ])

  if (report.days.length === 0) {
    console.log('No apiUsageDaily documents found in range.')
  } else {
    printSimpleTable(header, rows)
  }

  console.log('\nDays with unknown/missing fields on apiUsageDaily (excluded from totals above, never coerced to 0):')
  console.log(
    `  AI assistant  — requests: ${report.totals.aiAssistant.unknownDays.requests}, ` +
    `input tokens: ${report.totals.aiAssistant.unknownDays.inputTokens}, ` +
    `output tokens: ${report.totals.aiAssistant.unknownDays.outputTokens}`,
  )
  console.log(
    `  Test analysis — requests: ${report.totals.testAnalysis.unknownDays.requests}, ` +
    `input tokens: ${report.totals.testAnalysis.unknownDays.inputTokens}, ` +
    `output tokens: ${report.totals.testAnalysis.unknownDays.outputTokens}`,
  )

  console.log('\n=== Cost per training row ===')
  for (const name of ['aiTrainingData', 'testAnalysisSubmissions']) {
    const s = report.costPerRow[name]
    console.log(`\n${name}:`)
    console.log(
      `  Scanned: ${s.scanned}  Priced: ${s.priced}  Missing usage data: ${s.missingUsageData}  ` +
      `Skipped (no createdAt, can't verify --since/--until): ${s.skippedNoCreatedAt}`,
    )
    console.log(`  Mean cost/row:   ${fmtUsd(s.meanUsd)}  (${fmtZar(s.meanZar)})`)
    console.log(`  Median cost/row: ${fmtUsd(s.medianUsd)}  (${fmtZar(s.medianZar)})`)
  }
}

async function main() {
  const { since, until, zar, json } = parseArgs(process.argv.slice(2))

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!projectId || !clientEmail || !privateKey) {
    console.error(
      'Missing Firebase Admin env vars (FIREBASE_ADMIN_PROJECT_ID / FIREBASE_ADMIN_CLIENT_EMAIL / ' +
      'FIREBASE_ADMIN_PRIVATE_KEY) — run with: node --env-file=.env.local scripts/api-cost-report.mjs',
    )
    process.exit(1)
  }

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
  const db = getFirestore()

  console.log(`Reading apiUsageDaily${since || until ? ` (${since ?? 'earliest'} .. ${until ?? 'latest'})` : ''}... (read-only)`)
  const dayDocs = await fetchDailyRollupDocs(db, since, until)
  const days = dayDocs.map(buildDayRow).sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
  const dailyTotals = aggregateDailyTotals(days)

  console.log('\nScanning aiTrainingData for per-row usage... (read-only)')
  const aiTrainingScan = await scanCollectionForCost(db, 'aiTrainingData', since, until)

  console.log('\nScanning testAnalysisSubmissions for per-row usage... (read-only)')
  const testAnalysisScan = await scanCollectionForCost(db, 'testAnalysisSubmissions', since, until)

  const report = buildReport({ since, until, zar, days, dailyTotals, aiTrainingScan, testAnalysisScan })

  if (json) {
    console.log(JSON.stringify(report, null, 2))
  } else {
    printTable(report)
  }
}

main().catch((err) => {
  console.error('Report failed:', err)
  process.exit(1)
})
