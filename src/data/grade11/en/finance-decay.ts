import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance decay roles) ────────────────────────────────────
// P (original value)  → blue   (#2563eb)
// i / rate factor     → red    (#dc2626)
// n (years/exponent)  → green  (#16a34a)
// A (final value)     → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finance - Simple and Compound Decay',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SIMPLE DECAY (STRAIGHT-LINE DEPRECIATION)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-decay-straight-line',
      title: 'Simple Decay (Straight-Line Depreciation)',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Simple decay, also called <strong>straight-line depreciation</strong>, reduces a value by the same fixed amount every year. The formula is <strong>A = P(1 − ni)</strong>, where ${bl('P')} is the original value, ${re('i')} is the annual rate of depreciation as a decimal, ${gr('n')} is the number of years, and ${or('A')} is the value after depreciation. Because the same rand amount is subtracted every year, a graph of value against time is a <strong>straight line</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('P — original value')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('i — rate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('n — years')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('A — final value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')})</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Principal (original value)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting value of the asset before any depreciation.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">i — Annual rate of depreciation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Expressed as a decimal (e.g. 15% p.a. → i = 0.15).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Number of years</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The time period over which the asset depreciates.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">A — Final value (book value)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value of the asset after n years of depreciation.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Straight-line graph</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because the same fixed rand amount is deducted every year, the graph of value against time is a <strong>straight line</strong> sloping downward. The asset can eventually reach zero value if the depreciation period is long enough.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A car worth R200 000 depreciates at 15% p.a. on the straight-line method. Calculate its value after 4 years.',
          answer: `${or('A = R80 000')}`,
          steps: [
            `Identify ${bl('P = R200 000')}, ${re('i = 0.15')}, ${gr('n = 4')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('A')} = ${bl('200 000')}(1 − ${gr('4')} × ${re('0.15')}).`,
            `Calculate: ${or('A')} = ${bl('200 000')}(1 − 0.6) = ${bl('200 000')}(0.4) = ${or('R80 000')}.`,
          ],
        },
        {
          question: 'A piece of equipment depreciates from R10 000 to R5 000 in four years on the straight-line method. Calculate the rate of depreciation.',
          answer: `${re('i = 12.5% p.a.')}`,
          steps: [
            `Identify ${bl('P = R10 000')}, ${or('A = R5 000')}, ${gr('n = 4')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('5 000')} = ${bl('10 000')}(1 − ${gr('4')} × ${re('i')}).`,
            `Divide both sides by ${bl('10 000')}: 0.5 = 1 − ${gr('4')} × ${re('i')}.`,
            `Solve for ${re('i')}: ${gr('4')} × ${re('i')} = 0.5, so ${re('i')} = 0.125 = ${re('12.5% p.a.')}.`,
          ],
        },
        {
          question: 'A machine bought for R45 000 depreciates by R6 000 every year. Determine its book value after 5 years and express the annual depreciation as a percentage of the original price.',
          answer: `${re('i = 13.33% p.a.')}, ${or('A = R15 000')}`,
          steps: [
            `Calculate the annual depreciation rate: ${re('i')} = 6 000 ÷ ${bl('45 000')} = 0.1333 = ${re('13.33% p.a.')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('A')} = ${bl('45 000')}(1 − ${gr('5')} × ${re('0.1333')}).`,
            `Calculate: ${or('A')} = ${bl('45 000')}(1 − 0.6667) = ${bl('45 000')}(0.3333) = ${or('R15 000')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A laptop worth R12 000 depreciates at 20% p.a. on the straight-line method. Calculate its book value after 3 years.',
          answer: 'R4 800',
          checkMode: 'auto',
          correctAnswer: '4800',
          correctAnswers: ['R4800', 'R4 800', '4800', '4 800'],
          explanation: 'P = 12 000, i = 0.20, n = 3\nA = 12 000(1 − 3 × 0.20)\nA = 12 000(1 − 0.6) = 12 000(0.4) = R4 800 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Use the straight-line depreciation formula for each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A truck worth R320 000 depreciates at 12% p.a. for 5 years. Find A.',
              correctAnswer: '128000',
              correctAnswers: ['R128000', 'R128 000', '128000', '128 000'],
              explanation: 'P = 320 000, i = 0.12, n = 5\nA = 320 000(1 − 5 × 0.12) = 320 000(1 − 0.6) = 320 000(0.4) = R128 000 ✓',
            },
            {
              label: 'b) Equipment depreciates from R50 000 to R20 000 over 6 years. Find i (as a percentage).',
              correctAnswer: '10',
              correctAnswers: ['10%', '10', '10% p.a.'],
              explanation: 'P = 50 000, A = 20 000, n = 6\n20 000 = 50 000(1 − 6i)\n0.4 = 1 − 6i → 6i = 0.6 → i = 0.10 = 10% p.a. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A photocopier worth R96 000 loses R8 000 in value every year.\n\na) Express the annual depreciation as a percentage of the original value.\nb) Calculate the book value after 7 years.\nc) After how many complete years will the book value first reach zero?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Annual depreciation rate (%)',
              correctAnswer: '8.33',
              correctAnswers: ['8.33%', '8.33', '8.3%', '8.3'],
              explanation: 'i = 8 000 / 96 000 = 0.0833 = 8.33% p.a. ✓',
            },
            {
              label: 'b) Book value after 7 years',
              correctAnswer: '40000',
              correctAnswers: ['R40000', 'R40 000', '40000', '40 000'],
              explanation: 'A = 96 000(1 − 7 × 0.0833) = 96 000(1 − 0.5833) = 96 000(0.4167) ≈ R40 000 ✓',
            },
            {
              label: 'c) After how many complete years is the book value zero?',
              correctAnswer: '12',
              explanation: '0 = 96 000(1 − n × 0.0833)\n0.0833n = 1 → n = 12 years ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the straight-line depreciation formula A = P(1 − ni) applied step by step with colour-coded variables" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a straight downward-sloping line graph of value (y-axis) against time in years (x-axis), showing equal vertical drops between each year mark" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND DECAY (REDUCING BALANCE DEPRECIATION)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-decay-reducing-balance',
      title: 'Compound Decay (Reducing Balance Depreciation)',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Compound decay, also called <strong>depreciation on a reducing balance</strong>, reduces a value by a fixed percentage of its <em>current</em> value every year, not the original value. The formula is <strong>A = P(1 − i)<sup>n</sup></strong>, where ${bl('P')} is the original value, ${re('(1 − i)')} is the rate factor, ${gr('n')} is the number of years, and ${or('A')} is the value after depreciation. Because each year's depreciation is calculated on an already-reduced amount, the value decreases quickly at first and more slowly later, giving a <strong>curved graph</strong> rather than a straight line.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('P — original value')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('(1−i) — rate factor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('n — exponent (years)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('A — final value')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(${re('1 − i')})<sup style="font-size:0.85em;">${gr('n')}</sup></p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Principal (original value)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting value of the asset before any depreciation.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">(1 − i) — Rate factor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Subtract the rate i from 1 (e.g. 15% → 1 − 0.15 = 0.85).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Number of years (exponent)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The time period; (1 − i) is raised to the power n.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">A — Final value (book value)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value of the asset after n years of depreciation.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Curved graph</p>` +
        `<p style="margin:0;color:#1e3a8a;">Because each year's depreciation is calculated on a <strong>smaller base</strong>, the asset loses more value in early years and less in later years. The graph is a <strong>curve</strong> that approaches zero but never reaches it exactly — unlike the straight-line method.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A car worth R200 000 depreciates at 15% p.a. on the reducing-balance method. Calculate its value after 4 years.',
          answer: `${or('A ≈ R104 427')}`,
          steps: [
            `Identify ${bl('P = R200 000')}, ${re('i = 0.15')} so ${re('1 − i = 0.85')}, ${gr('n = 4')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('A')} = ${bl('200 000')} × (${re('0.85')})<sup>${gr('4')}</sup>.`,
            `Calculate: ${or('A')} = ${bl('200 000')} × 0.522 = ${or('R104 427')}.`,
          ],
        },
        {
          question: 'A piece of equipment depreciates from R10 000 to R5 000 in four years on the reducing-balance method. Calculate the rate of depreciation.',
          answer: `${re('i ≈ 15.91% p.a.')}`,
          steps: [
            `Identify ${bl('P = R10 000')}, ${or('A = R5 000')}, ${gr('n = 4')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('5 000')} = ${bl('10 000')}(${re('1 − i')})<sup>${gr('4')}</sup>.`,
            `Divide both sides by ${bl('10 000')}: 0.5 = (${re('1 − i')})<sup>${gr('4')}</sup>.`,
            `Take the fourth root of both sides: ${re('1 − i')} = 0.8409.`,
            `Solve for ${re('i')}: ${re('i')} = 1 − 0.8409 = 0.1591 = ${re('15.91% p.a.')}.`,
          ],
        },
        {
          question: 'A delivery van bought for R350 000 depreciates at 18% p.a. on the reducing-balance method. After how many years will it be worth less than R100 000?',
          answer: `${gr('7 years')}`,
          steps: [
            `Identify ${bl('P = R350 000')}, ${re('1 − i = 0.82')}, threshold ${or('A = R100 000')}.`,
            `Substitute into ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('100 000')} = ${bl('350 000')} × (${re('0.82')})<sup>${gr('n')}</sup>.`,
            `Divide both sides by ${bl('350 000')}: 0.2857 = (${re('0.82')})<sup>${gr('n')}</sup>.`,
            `<strong>Take logs of both sides</strong> (this log method is also used in compound growth): ${gr('n')} = log(0.2857) ÷ log(${re('0.82')}).`,
            `Calculate: ${gr('n')} = (−0.5441) ÷ (−0.0862) = 6.32. Round up since the value must drop <em>below</em> the threshold — the van will be worth less than R100 000 after ${gr('7 years')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A refrigerator worth R15 000 depreciates at 10% p.a. on the reducing-balance method. Calculate its value after 3 years.',
          answer: 'R10 935',
          checkMode: 'auto',
          correctAnswer: '10935',
          correctAnswers: ['R10935', 'R10 935', '10935', '10 935'],
          explanation: 'P = 15 000, i = 0.10, n = 3\nA = 15 000 × (0.90)³\nA = 15 000 × 0.729 = R10 935 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Use the reducing-balance depreciation formula for each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A machine worth R80 000 depreciates at 20% p.a. for 4 years. Find A.',
              correctAnswer: '32768',
              correctAnswers: ['R32768', 'R32 768', '32768', '32 768'],
              explanation: 'A = 80 000 × (0.80)⁴ = 80 000 × 0.4096 = R32 768 ✓',
            },
            {
              label: 'b) A computer depreciates from R25 000 to R6 250 in 4 years on the reducing-balance method. Find i (as a percentage).',
              correctAnswer: '29.29',
              correctAnswers: ['29.29%', '29.29', '29.3%', '29.3'],
              explanation: 'P = 25 000, A = 6 250, n = 4\n6 250 = 25 000(1 − i)⁴\n0.25 = (1 − i)⁴\n1 − i = ⁴√0.25 = 0.7071 → i = 0.2929 = 29.29% p.a. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A boat is purchased for R500 000 and depreciates at 22% p.a. on the reducing-balance method.\n\na) Calculate the value of the boat after 3 years.\nb) After how many years will the boat be worth less than R150 000?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Value after 3 years',
              correctAnswer: '237276',
              correctAnswers: ['R237276', 'R237 276', '237276', '237 276'],
              explanation: 'A = 500 000 × (0.78)³ = 500 000 × 0.4746 = R237 276 ✓',
            },
            {
              label: 'b) After how many years is A < R150 000? (round up)',
              correctAnswer: '5',
              explanation: '150 000 = 500 000 × (0.78)ⁿ\n0.3 = (0.78)ⁿ\nn = log(0.3)/log(0.78) = 4.84 → round up to 5 years.\nCheck: 500 000 × (0.78)⁵ ≈ R144 358 < R150 000 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the reducing-balance depreciation formula A = P(1 − i)^n applied step by step, including a logarithm example to find n" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a curved downward-sloping graph of value against time, steep at first and flattening out, shown alongside the straight-line graph from Section 1 for visual contrast" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING STRAIGHT-LINE AND REDUCING-BALANCE DEPRECIATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-depreciation-methods',
      title: 'Comparing Straight-Line and Reducing-Balance Depreciation',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">The same asset depreciates differently depending on which method is used. <strong>Straight-line depreciation</strong> removes the same rand value every year, so the asset can reach zero value. <strong>Reducing-balance depreciation</strong> removes a percentage of the current value every year, so the asset's value approaches zero but mathematically never reaches it exactly. For the same original value and the same number of years, the reducing-balance method usually leaves a higher residual value than the straight-line method once several years have passed, because later years are depreciating a smaller base.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('straight-line results')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('reducing-balance results')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('comparative conclusions')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key differences at a glance</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Straight-line: A = P(1 − ni)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same rand amount deducted every year. Graph: straight line. Asset can reach zero.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Reducing-balance: A = P(1 − i)<sup>n</sup></p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same percentage of current value deducted. Graph: curve. Mathematically never reaches zero.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Practical note</p>` +
        `<p style="margin:0;color:#92400e;">For the same rate and same period, ${or('reducing-balance usually leaves a higher residual value')} than straight-line once several years have passed. Which method gives the larger tax deduction depends on the rate and the number of years — always calculate both and compare.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A computer worth R18 000 depreciates at 20% p.a. Calculate its value after 3 years using (a) the straight-line method and (b) the reducing-balance method.',
          answer: `${bl('Straight-line: R7 200')}; ${gr('Reducing-balance: R9 216')}`,
          steps: [
            `${bl('Straight-line:')} A = 18 000(1 − 3 × 0.2) = 18 000(0.4) = ${bl('R7 200')}.`,
            `${gr('Reducing-balance:')} A = 18 000(1 − 0.2)<sup>3</sup> = 18 000(0.8)<sup>3</sup> = 18 000(0.512) = ${gr('R9 216')}.`,
            `${or('Compare:')} the reducing-balance value (${gr('R9 216')}) is higher than the straight-line value (${bl('R7 200')}) after the same period.`,
          ],
        },
        {
          question: 'Two identical machines worth R80 000 each are depreciated over 5 years, one at 10% p.a. straight-line and the other at 10% p.a. reducing-balance. Determine which machine has the higher book value after 5 years, without doing the full reducing-balance calculation.',
          answer: `${or('The reducing-balance machine has the higher book value.')}`,
          steps: [
            `Recognise that reducing-balance depreciation removes less value in later years since it acts on a ${gr('shrinking base')}.`,
            `${or('Conclude:')} at the same rate and same period (beyond year 1), the ${gr('reducing-balance')} machine will always retain a higher book value than the ${bl('straight-line')} machine. The straight-line method removes the same fixed amount every year regardless of how low the value has fallen.`,
          ],
        },
        {
          question: 'A business needs to choose a depreciation method for tax purposes. Asset A costs R60 000 and is depreciated at 25% p.a. Calculate the book value after 2 years using both methods and explain which method results in a lower taxable book value (and therefore a larger depreciation deduction) in this case.',
          answer: `${or('Straight-line gives the lower book value (R30 000) and the larger deduction.')}`,
          steps: [
            `${bl('Straight-line:')} A = 60 000(1 − 2 × 0.25) = 60 000(0.5) = ${bl('R30 000')}.`,
            `${gr('Reducing-balance:')} A = 60 000(1 − 0.25)<sup>2</sup> = 60 000(0.75)<sup>2</sup> = 60 000(0.5625) = ${gr('R33 750')}.`,
            `${or('Conclusion:')} the straight-line method gives the lower book value (${bl('R30 000')}), meaning a larger depreciation deduction of R30 000 over 2 years compared with R26 250 under the reducing-balance method.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A motorbike worth R50 000 depreciates at 15% p.a. Calculate its value after 2 years using both methods and state which gives the higher book value.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Straight-line value after 2 years (R)',
              correctAnswer: '35000',
              correctAnswers: ['R35000', 'R35 000', '35000', '35 000'],
              explanation: 'A = 50 000(1 − 2 × 0.15) = 50 000(0.70) = R35 000 ✓',
            },
            {
              label: 'b) Reducing-balance value after 2 years (R)',
              correctAnswer: '36125',
              correctAnswers: ['R36125', 'R36 125', '36125', '36 125'],
              explanation: 'A = 50 000(0.85)² = 50 000 × 0.7225 = R36 125 ✓',
            },
            {
              label: 'c) Which method gives the higher book value?',
              correctAnswer: 'reducing-balance',
              correctAnswers: ['reducing-balance', 'reducing balance', 'RB', 'compound decay'],
              explanation: 'Reducing-balance (R36 125) > straight-line (R35 000) — reducing-balance gives the higher book value ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Office furniture worth R24 000 is depreciated at 20% p.a. over 4 years using both methods.\n\na) Calculate the straight-line book value after 4 years.\nb) Calculate the reducing-balance book value after 4 years.\nc) What is the difference between the two values?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Straight-line value (R)',
              correctAnswer: '4800',
              correctAnswers: ['R4800', 'R4 800', '4800', '4 800'],
              explanation: 'A = 24 000(1 − 4 × 0.20) = 24 000(0.2) = R4 800 ✓',
            },
            {
              label: 'b) Reducing-balance value (R)',
              correctAnswer: '9830',
              correctAnswers: ['R9830', 'R9 830', '9830', '9 830', '9830.4', 'R9830.4', 'R9 830.40'],
              explanation: 'A = 24 000(0.80)⁴ = 24 000 × 0.4096 = R9 830.40 ✓',
            },
            {
              label: 'c) Difference between the two values (R)',
              correctAnswer: '5030',
              correctAnswers: ['R5030', 'R5 030', '5030', '5 030', '5030.4', 'R5030.4'],
              explanation: 'R9 830 − R4 800 = R5 030 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A factory machine worth R200 000 must depreciate to a residual value of R50 000.\n\na) How many years does this take using straight-line depreciation at 10% p.a.?\nb) How many years does it take using reducing-balance depreciation at 10% p.a.? (round up)\nc) Which method reaches the target residual value in fewer years?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Years using straight-line (10% p.a.)',
              correctAnswer: '7.5',
              correctAnswers: ['7.5', '7.5 years', '7½'],
              explanation: '50 000 = 200 000(1 − n × 0.10)\n0.25 = 1 − 0.10n → 0.10n = 0.75 → n = 7.5 years ✓',
            },
            {
              label: 'b) Years using reducing-balance (10% p.a.), rounded up',
              correctAnswer: '14',
              explanation: '50 000 = 200 000(0.90)ⁿ\n0.25 = (0.90)ⁿ\nn = log(0.25)/log(0.90) = 13.16 → round up to 14 years ✓',
            },
            {
              label: 'c) Which method reaches R50 000 in fewer years?',
              correctAnswer: 'straight-line',
              correctAnswers: ['straight-line', 'straight line', 'SL', 'simple decay'],
              explanation: 'Straight-line (7.5 years) reaches R50 000 much sooner than reducing-balance (14 years) at the same rate ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video comparing straight-line and reducing-balance depreciation side by side with the same asset, rate, and time period" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: both the straight-line and reducing-balance graphs plotted on the same set of axes for the same starting value, with the point where the reducing-balance curve sits above the straight line clearly marked" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — NOMINAL AND EFFECTIVE INTEREST RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nominal-effective-interest-rates',
      title: 'Nominal and Effective Interest Rates',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>nominal interest rate</strong> is the stated annual rate before accounting for compounding within the year. The <strong>effective annual interest rate</strong> is the actual rate earned or paid in a year once compounding periods are taken into account, and is always higher than the nominal rate when compounding happens more than once a year. The formula linking them is: ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1, where ${re('i_nom')} is the nominal annual rate and ${ye('m')} is the number of compounding periods per year (for example, 12 for monthly, 4 for quarterly, 2 for half-yearly, 365 for daily).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('i_nom — nominal rate')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fde047;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('m — compounding periods')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('i_eff — effective rate')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The formula</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup style="font-size:0.85em;">${ye('m')}</sup> − 1</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">i_nom — Nominal annual rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The stated annual interest rate, before accounting for compounding frequency. Convert percentage to decimal (e.g. 12% → 0.12).</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde047;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">m — Compounding periods per year</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Number of times interest is applied per year: 2 = half-yearly, 4 = quarterly, 12 = monthly, 365 = daily.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">i_eff — Effective annual rate</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The actual rate earned after all compounding within the year. Always greater than or equal to the nominal rate.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why effective rate matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">When comparing two interest rates with different compounding frequencies, always convert both to their effective annual rates before comparing — the effective rate levels the playing field and shows you which option truly earns more.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A bank offers a nominal interest rate of 12% p.a. compounded monthly. Calculate the effective annual interest rate.',
          answer: `${gr('i_eff = 12.68% p.a.')}`,
          steps: [
            `Identify ${re('i_nom = 0.12')}, ${ye('m = 12')} (monthly).`,
            `Substitute into ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1: ${gr('i_eff')} = (1 + ${re('0.12')} ÷ ${ye('12')})<sup>${ye('12')}</sup> − 1.`,
            `Simplify inside the bracket: (1 + 0.01)<sup>12</sup> − 1 = (1.01)<sup>12</sup> − 1.`,
            `Calculate: ${gr('i_eff')} = 1.1268 − 1 = 0.1268 = ${gr('12.68% p.a.')}.`,
          ],
        },
        {
          question: 'Which is the better investment: 10.5% p.a. compounded daily, or 10.55% p.a. compounded monthly?',
          answer: `${gr('Both give an effective rate of approximately 11.07% — they are essentially equally good.')}`,
          steps: [
            `Option 1: ${re('i_nom = 0.105')}, ${ye('m = 365')}. ${gr('i_eff1')} = (1 + ${re('0.105')} ÷ ${ye('365')})<sup>${ye('365')}</sup> − 1 = 0.1107 = ${gr('11.07%')}.`,
            `Option 2: ${re('i_nom = 0.1055')}, ${ye('m = 12')}. ${gr('i_eff2')} = (1 + ${re('0.1055')} ÷ ${ye('12')})<sup>${ye('12')}</sup> − 1 = 0.1107 = ${gr('11.07%')}.`,
            `Both options give an effective annual rate of ${gr('approximately 11.07%')} — they are essentially equally good investments.`,
          ],
        },
        {
          question: 'An effective annual interest rate of 8.5% is quoted. Determine the equivalent nominal annual rate if interest is compounded quarterly.',
          answer: `${re('i_nom = 8.24% p.a.')}`,
          steps: [
            `Substitute into ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1 with ${gr('i_eff = 0.085')} and ${ye('m = 4')}: 0.085 = (1 + ${re('i_nom')} ÷ ${ye('4')})<sup>${ye('4')}</sup> − 1.`,
            `Add 1 to both sides: 1.085 = (1 + ${re('i_nom')} ÷ ${ye('4')})<sup>${ye('4')}</sup>.`,
            `Take the fourth root of both sides: 1 + ${re('i_nom')} ÷ ${ye('4')} = ⁴√1.085 = 1.0206.`,
            `Solve for ${re('i_nom')}: ${re('i_nom')} ÷ ${ye('4')} = 0.0206, so ${re('i_nom')} = 4 × 0.0206 = 0.0824 = ${re('8.24% p.a.')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A bank offers 9% p.a. compounded monthly. Calculate the effective annual interest rate (give your answer as a percentage to 2 decimal places).',
          answer: '9.38%',
          checkMode: 'auto',
          correctAnswer: '9.38',
          correctAnswers: ['9.38%', '9.38', '9.4%', '9.4'],
          explanation: 'i_nom = 0.09, m = 12\ni_eff = (1 + 0.09/12)^12 − 1 = (1.0075)^12 − 1 = 1.09381 − 1 = 9.38% ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer the following nominal and effective interest rate questions.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) A savings account pays 18% p.a. compounded quarterly. Calculate the effective annual interest rate (%).',
              correctAnswer: '19.25',
              correctAnswers: ['19.25%', '19.25', '19.3%', '19.3'],
              explanation: 'i_eff = (1 + 0.18/4)^4 − 1 = (1.045)^4 − 1 = 1.19252 − 1 = 19.25% ✓',
            },
            {
              label: 'b) An effective annual rate of 15% is equivalent to what nominal rate compounded monthly (%)? Give your answer to 2 decimal places.',
              correctAnswer: '14.06',
              correctAnswers: ['14.06%', '14.06', '14.1%', '14.1'],
              explanation: '0.15 = (1 + i_nom/12)^12 − 1\n1.15 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1.15 = 1.01172\ni_nom = 12 × 0.01172 = 14.06% ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A bank offers a savings account at 12% p.a. compounded either quarterly or monthly.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate the effective annual rate if compounded quarterly (%).',
              correctAnswer: '12.55',
              correctAnswers: ['12.55%', '12.55', '12.6%', '12.6'],
              explanation: 'i_eff = (1 + 0.12/4)^4 − 1 = (1.03)^4 − 1 = 1.12551 − 1 = 12.55% ✓',
            },
            {
              label: 'b) Calculate the effective annual rate if compounded monthly (%).',
              correctAnswer: '12.68',
              correctAnswers: ['12.68%', '12.68', '12.7%', '12.7'],
              explanation: 'i_eff = (1 + 0.12/12)^12 − 1 = (1.01)^12 − 1 = 1.12683 − 1 = 12.68% ✓',
            },
            {
              label: 'c) On a deposit of R100 000 for 1 year, how much more interest (in rands) does monthly compounding earn compared to quarterly?',
              correctAnswer: '132',
              correctAnswers: ['R132', '132', 'R132.50', '132.50', 'R133', '133'],
              explanation: 'Monthly interest: R100 000 × 0.1268 = R12 683\nQuarterly interest: R100 000 × 0.1255 = R12 551\nDifference: R12 683 − R12 551 = R132 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the nominal-to-effective rate formula applied step by step with monthly, quarterly and daily compounding examples" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a simple comparison bar or line showing the same nominal rate compounded at different frequencies (annually, monthly, daily) converging toward a slightly higher effective rate, to illustrate that more frequent compounding increases the effective rate" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MIXED APPLICATIONS: DECAY AND COMPOUNDING COMBINED
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-applications-decay-compounding',
      title: 'Mixed Applications — Decay and Compounding Combined',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Exam-style finance problems often combine simple or compound decay with changing interest rates, withdrawals, or comparisons between depreciation methods within a single scenario. Working through these requires identifying which formula applies to each phase of the problem and carefully tracking the value of the investment or asset as conditions change partway through the time period.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('Phase 1')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Phase 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Phase 3')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('Final answer')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to approach multi-phase problems</p>` +
        `<p style="margin:0;color:#1e3a8a;">1. Identify each phase and the formula that applies.<br>2. Work through the phases in order — the output of one phase becomes the input (P) of the next.<br>3. Apply withdrawals or deposits at the correct point in time.<br>4. Only round at the very end, or when explicitly instructed.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A delivery vehicle bought for R280 000 depreciates on the reducing-balance method at 20% p.a. for the first 2 years, then the depreciation rate changes to 12% p.a. for the next 2 years. Calculate the value of the vehicle after 4 years.',
          answer: `${re('A ≈ R138 781')}`,
          steps: [
            `${bl('Phase 1 (years 1–2, 20% p.a.):')} ${bl('A₁')} = ${bl('280 000')}(1 − 0.20)² = ${bl('280 000')}(0.80)² = ${bl('280 000')} × 0.64 = ${bl('R179 200')}.`,
            `${gr('Phase 2 (years 3–4, 12% p.a.):')} use ${bl('R179 200')} as the new starting value. ${gr('A₂')} = ${bl('179 200')}(1 − 0.12)² = ${bl('179 200')}(0.88)² = ${bl('179 200')} × 0.7744 = ${re('R138 781')}.`,
          ],
        },
        {
          question: 'R50 000 is invested at 8% p.a. compounded quarterly for the first 18 months. The interest rate then changes to 6% p.a. compounded monthly. Two years after the money is invested, R10 000 is withdrawn. Calculate how much is in the account after 4 years.',
          answer: `${re('A ≈ R54 134')}`,
          steps: [
            `${bl('Phase 1 (0 to 18 months = 6 quarters at 8% p.a.):')} ${bl('A₁')} = ${bl('50 000')}(1 + 0.08 ÷ 4)<sup>6</sup> = ${bl('50 000')}(1.02)<sup>6</sup> = ${bl('50 000')} × 1.1262 = ${bl('R56 308')}.`,
            `${gr('Phase 2 (18 to 24 months = 6 months at 6% p.a.):')} ${gr('A₂')} = ${bl('56 308')}(1 + 0.06 ÷ 12)<sup>6</sup> = ${bl('56 308')}(1.005)<sup>6</sup> = ${bl('56 308')} × 1.0304 = ${gr('R58 022')}.`,
            `Withdrawal at 2 years: ${gr('R58 022')} − R10 000 = ${or('R48 022')}.`,
            `${or('Phase 3 (24 to 48 months = 24 months at 6% p.a.):')} ${re('A₃')} = ${or('48 022')}(1.005)<sup>24</sup> = ${or('48 022')} × 1.1272 = ${re('R54 134')}.`,
          ],
        },
        {
          question: 'A business asset costs R120 000 and depreciates at 18% p.a. on the reducing-balance method. Determine after how many full years the asset\'s value will have decreased by more than 50% of its original price.',
          answer: `${gr('After 4 full years')}`,
          steps: [
            `The value must fall below 50% of R120 000 = ${bl('R60 000')}. Set up the inequality: ${bl('120 000')}(0.82)<sup>n</sup> < ${bl('60 000')}.`,
            `Divide both sides by ${bl('120 000')}: (0.82)<sup>n</sup> < 0.5.`,
            `Take logs of both sides: n × log(0.82) < log(0.5). Since log(0.82) is negative, the inequality sign <strong>flips</strong> when dividing: n > log(0.5) ÷ log(0.82).`,
            `Calculate: n > (−0.3010) ÷ (−0.0862) = 3.50. Since n must be a whole number of full years, ${gr('n = 4 years')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A machine worth R100 000 depreciates at 20% p.a. on the reducing-balance method for 2 years, then the rate changes to 15% p.a. for 1 more year. Calculate the book value after 3 years.',
          answer: 'R54 400',
          checkMode: 'auto',
          correctAnswer: '54400',
          correctAnswers: ['R54400', 'R54 400', '54400', '54 400'],
          explanation: 'Phase 1 (2 years at 20%): A₁ = 100 000 × (0.80)² = 100 000 × 0.64 = R64 000\nPhase 2 (1 year at 15%): A₂ = 64 000 × (0.85)¹ = 64 000 × 0.85 = R54 400 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'R40 000 is invested at 12% p.a. compounded monthly for 1 year. The interest rate then changes to 8% p.a. compounded quarterly.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Calculate the value after the first year at 12% compounded monthly (R).',
              correctAnswer: '45073',
              correctAnswers: ['R45073', 'R45 073', '45073', '45 073', 'R45074', '45074'],
              explanation: 'A₁ = 40 000 × (1 + 0.12/12)^12 = 40 000 × (1.01)^12 = 40 000 × 1.12683 = R45 073 ✓',
            },
            {
              label: 'b) Calculate the value after 2 more years at 8% compounded quarterly (R, to the nearest rand).',
              correctAnswer: '52812',
              correctAnswers: ['R52812', 'R52 812', '52812', '52 812', 'R52813', '52813', 'R52811', '52811'],
              explanation: 'A₂ = 45 073 × (1 + 0.08/4)^8 = 45 073 × (1.02)^8 = 45 073 × 1.17166 = R52 812 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A car worth R180 000 depreciates at 16% p.a. on the reducing-balance method.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) After how many full years will the car\'s value first drop below R80 000?',
              correctAnswer: '5',
              explanation: '180 000 × (0.84)^n < 80 000\n(0.84)^n < 4/9 ≈ 0.4444\nn > log(4/9) ÷ log(0.84) = (−0.3522) ÷ (−0.0757) = 4.65\n→ 5 full years ✓',
            },
            {
              label: 'b) Calculate the car\'s book value at the end of that year (R, to the nearest rand).',
              correctAnswer: '75278',
              correctAnswers: ['R75278', 'R75 278', '75278', '75 278', 'R75277', '75277', 'R75279', '75279'],
              explanation: 'A = 180 000 × (0.84)^5 = 180 000 × 0.41821 = R75 278 ✓',
            },
            {
              label: 'c) How much value (in rands) has the car lost after those years?',
              correctAnswer: '104722',
              correctAnswers: ['R104722', 'R104 722', '104722', '104 722', 'R104723', '104723'],
              explanation: 'Loss = R180 000 − R75 278 = R104 722 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-phase finance problem step by step, showing how to handle a rate change and a mid-period withdrawal" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a timeline showing the multi-stage scenario from Example 2, with markers at 18 months (rate change), 24 months (withdrawal), and 48 months (final value), so the sequence of events is visually clear" />',
    },
  ],

  scoreMessages: [
    { minScore: 27, message: 'Outstanding! A perfect score — you have completely mastered finance decay for Grade 11. Keep it up!' },
    { minScore: 21, message: 'Excellent work! You have a very strong grasp of depreciation. Review any missed steps and you will have it perfect.' },
    { minScore: 15, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and try again.' },
    { minScore: 9, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
