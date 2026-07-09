import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage roles) ───────────────────────────────────────
// percentage symbol → orange  (#ea580c)
// fraction          → blue    (#2563eb)
// decimal           → green   (#16a34a)
// conversion steps  → red     (#dc2626)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Percentages',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A PERCENTAGE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-percentage',
      title: 'What is a Percentage?',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>percentage</strong> is a way of expressing a number as a ${bl('fraction')} of 100. The word <em>percent</em> means <strong>out of 100</strong>. The symbol for percent is ${or('%')}. So ${or('45%')} means 45 out of 100, or ${bl('45/100')}. Percentages are used everywhere in daily life — exam marks, shop discounts, bank interest and statistics. A percentage can always be written as a ${bl('fraction')} with denominator 100, or as a ${gr('decimal')} by dividing by 100.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage %')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('decimal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('conversion steps')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Percentage (${or('%')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number expressed as a part of 100. The symbol ${or('%')} means "out of 100".</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A percentage can always be written as a ${bl('fraction')} with denominator 100, e.g. ${or('35%')} = ${bl('35/100')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Decimal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Divide a percentage by 100 to get the ${gr('decimal')} form, e.g. ${or('35%')} ÷ 100 = ${gr('0.35')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Converting between forms ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting between forms</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('% → fraction:')} Write the percentage over 100, then simplify. &nbsp;${or('45%')} = ${bl('45/100')} = ${bl('9/20')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('% → decimal:')} ${re('Divide by 100')} (move the decimal point 2 places left). &nbsp;${or('35%')} ${re('÷ 100')} = ${gr('0.35')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('decimal → %:')} ${re('Multiply by 100')} (move the decimal point 2 places right). &nbsp;${gr('0.6')} ${re('× 100')} = ${or('60%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('fraction → %:')} ${re('Multiply by 100')} or convert to a ${bl('fraction')} with denominator 100. &nbsp;${bl('3/4')} ${re('× 100')} = ${or('75%')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The quick rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">To change <strong>to</strong> a percentage: ${re('× 100')}. To change <strong>from</strong> a percentage: ${re('÷ 100')}. The ${or('%')} sign always means "out of 100", so 100 is the bridge between all three forms.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 35% as a fraction and decimal ─────────────────────────
        {
          question: 'Write 35% as a fraction and as a decimal.',
          answer: `${or('35%')} = ${bl('7/20')} = ${gr('0.35')}`,
          steps: [
            `<strong>As a ${bl('fraction')}:</strong> Write the percentage over 100. ${or('35%')} = ${bl('35/100')}.`,
            `${re('Simplify')} by dividing numerator and denominator by the HCF of 5: ${bl('35/100')} = ${bl('7/20')}.`,
            `<strong>As a ${gr('decimal')}:</strong> ${re('Divide by 100')} — move the decimal point 2 places left. 35 ${re('÷ 100')} = ${gr('0.35')}.`,
            `<strong>Answer:</strong> ${or('35%')} = ${bl('7/20')} = ${gr('0.35')} ✓`,
          ],
        },

        // ── Example 2: 0.6 as a percentage ───────────────────────────────────
        {
          question: 'Write 0.6 as a percentage.',
          answer: `${gr('0.6')} = ${or('60%')}`,
          steps: [
            `To ${re('convert a decimal to a percentage')}, ${re('multiply by 100')}.`,
            `${gr('0.6')} ${re('× 100')} = ${or('60')}.`,
            `<strong>Answer:</strong> ${gr('0.6')} = ${or('60%')} ✓`,
          ],
        },

        // ── Example 3: 3/4 as a percentage ───────────────────────────────────
        {
          question: 'Write 3/4 as a percentage.',
          answer: `${bl('3/4')} = ${or('75%')}`,
          steps: [
            `<strong>Method 1 — ${re('convert to denominator 100')}:</strong> Find the equivalent fraction with denominator 100. 100 ÷ 4 = 25, so multiply both numerator and denominator by 25: ${bl('3/4')} = ${bl('75/100')} = ${or('75%')}.`,
            `<strong>Method 2 — ${re('multiply by 100')}:</strong> 3 ÷ 4 ${re('× 100')} = ${gr('0.75')} × 100 = ${or('75%')}.`,
            `<strong>Answer:</strong> ${bl('3/4')} = ${or('75%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a percentage is and how to convert between percentages fractions and decimals" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the three-way relationship between percentages fractions and decimals with conversion arrows labelled multiply by 100 and divide by 100" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING BETWEEN FRACTIONS, DECIMALS AND PERCENTAGES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-fractions-decimals-percentages',
      title: 'Converting Between Fractions, Decimals and Percentages',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Fractions, decimals and percentages are three ways of expressing the same value. Being able to move between all three forms quickly is an important skill in Grade 6. To convert a ${bl('fraction')} to a ${or('percentage')}: ${re('divide the numerator by the denominator and multiply by 100')}. To convert a ${or('percentage')} to a ${bl('fraction')}: write it over 100 and simplify. To convert a ${gr('decimal')} to a ${or('percentage')}: ${re('multiply by 100')}. To convert a ${or('percentage')} to a ${gr('decimal')}: ${re('divide by 100')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('decimal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage %')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('conversion operation')}</span>` +
        `</div>` +

        // ── Four conversion rules ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four conversion rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Fraction')} → ${or('%')}: ${re('Divide the numerator by the denominator, then multiply by 100.')} &nbsp;${bl('3/8')} → 3 ÷ 8 ${re('× 100')} = ${or('37.5%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('%')} → ${bl('Fraction')}: ${re('Write the percentage over 100 and simplify.')} &nbsp;${or('64%')} = ${bl('64/100')} = ${bl('16/25')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Decimal')} → ${or('%')}: ${re('Multiply by 100')} (move the decimal point 2 places right). &nbsp;${gr('0.045')} ${re('× 100')} = ${or('4.5%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('%')} → ${gr('Decimal')}: ${re('Divide by 100')} (move the decimal point 2 places left). &nbsp;${or('37.5%')} ${re('÷ 100')} = ${gr('0.375')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simplifying fractions — the HCF method</p>` +
        `<p style="margin:0;color:#1e3a8a;">When converting a ${or('percentage')} to a ${bl('fraction')}, always simplify by dividing numerator and denominator by their <strong>Highest Common Factor (HCF)</strong>. For ${or('64%')}: HCF of 64 and 100 is 4, so ${bl('64/100')} ÷ 4 = ${bl('16/25')}. A fraction is in <strong>simplest form</strong> when the only common factor of numerator and denominator is 1.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 3/8 to a percentage ──────────────────────────────────
        {
          question: 'Convert 3/8 to a percentage.',
          answer: `${bl('3/8')} = ${or('37.5%')}`,
          steps: [
            `${re('Step 1 — Divide the numerator by the denominator:')} 3 ÷ 8 = ${gr('0.375')}.`,
            `${re('Step 2 — Multiply by 100:')} ${gr('0.375')} ${re('× 100')} = ${or('37.5')}.`,
            `<strong>Answer:</strong> ${bl('3/8')} = ${or('37.5%')} ✓`,
          ],
        },

        // ── Example 5: 64% to a fraction in simplest form ───────────────────
        {
          question: 'Convert 64% to a fraction in simplest form.',
          answer: `${or('64%')} = ${bl('16/25')}`,
          steps: [
            `${re('Step 1 — Write as a fraction:')} ${or('64%')} = ${bl('64/100')}.`,
            `${re('Step 2 — Find the HCF of 64 and 100:')} HCF = 4.`,
            `${re('Step 3 — Divide both by 4:')} ${bl('64/100')} = ${bl('16/25')}.`,
            `<strong>Answer:</strong> ${or('64%')} = ${bl('16/25')} ✓`,
          ],
        },

        // ── Example 6: 0.045 to a percentage ────────────────────────────────
        {
          question: 'Convert 0.045 to a percentage.',
          answer: `${gr('0.045')} = ${or('4.5%')}`,
          steps: [
            `${re('Multiply by 100:')} ${gr('0.045')} ${re('× 100')} = ${or('4.5')}.`,
            `<strong>Answer:</strong> ${gr('0.045')} = ${or('4.5%')} ✓`,
          ],
        },

        // ── Example 7: Sipho's test score as a percentage ────────────────────
        {
          question: "Sipho scores 18 out of 24 on a test. Write his score as a percentage.",
          answer: `${bl('18/24')} = ${or('75%')}`,
          steps: [
            `${re('Step 1 — Write as a fraction:')} ${bl('18/24')}.`,
            `${re('Step 2 — Divide:')} 18 ÷ 24 = ${gr('0.75')}.`,
            `${re('Step 3 — Multiply by 100:')} ${gr('0.75')} ${re('× 100')} = ${or('75')}.`,
            `<strong>Answer:</strong> ${bl('18/24')} = ${or('75%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert 0.8 to a percentage.',
              correctAnswer: '80%',
              correctAnswers: ['80%', '80'],
              explanation: 'Multiply by 100: 0.8 × 100 = 80. Answer: 80% ✓',
            },
            {
              label: 'b) Convert 50% to a decimal.',
              correctAnswer: '0.5',
              correctAnswers: ['0.5', '0.50'],
              explanation: 'Divide by 100: 50 ÷ 100 = 0.5. Answer: 0.5 ✓',
            },
            {
              label: 'c) Convert 1/4 to a percentage.',
              correctAnswer: '25%',
              correctAnswers: ['25%', '25'],
              explanation: '1 ÷ 4 = 0.25. 0.25 × 100 = 25. Answer: 25% ✓',
            },
          ],
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert 3/5 to a percentage.',
              correctAnswer: '60%',
              correctAnswers: ['60%', '60'],
              explanation: '3 ÷ 5 = 0.6. 0.6 × 100 = 60. Answer: 60% ✓',
            },
            {
              label: 'b) Convert 85% to a fraction in simplest form.',
              correctAnswer: '17/20',
              explanation: '85% = 85/100. HCF of 85 and 100 is 5. 85 ÷ 5 = 17, 100 ÷ 5 = 20. Answer: 17/20 ✓',
            },
            {
              label: 'c) Convert 0.125 to a percentage.',
              correctAnswer: '12.5%',
              correctAnswers: ['12.5%', '12.5'],
              explanation: '0.125 × 100 = 12.5. Answer: 12.5% ✓',
            },
          ],
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato scores 42 out of 56 on a maths test, and Thabo scores 35 out of 45 on a science test.\n\na) Write Lerato's score as a percentage.\nb) Write Thabo's score as a percentage (round to one decimal place).\nc) Who performed better? Explain your answer.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Lerato's score as a percentage",
              correctAnswer: '75%',
              correctAnswers: ['75%', '75'],
              explanation: 'Write as fraction: 42/56. Divide: 42 ÷ 56 = 0.75. Multiply by 100: 0.75 × 100 = 75. Answer: 75% ✓',
            },
            {
              label: "b) Thabo's score as a percentage",
              correctAnswer: '77.8%',
              correctAnswers: ['77.8%', '77.8'],
              explanation: 'Write as fraction: 35/45. Divide: 35 ÷ 45 = 0.7777... ≈ 0.778. Multiply by 100: 77.8. Answer: 77.8% ✓',
            },
            {
              label: 'c) Who performed better?',
              correctAnswer: 'Thabo',
              checkMode: 'self',
              answer: "Thabo performed better. His score of 77.8% is higher than Lerato's 75%. Converting to percentages lets us compare scores fairly even when the tests had different totals.",
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between fractions decimals and percentages using the multiply by 100 and divide by 100 rules" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Triangle diagram showing fractions decimals and percentages at each corner with conversion arrows labelled: fraction to percentage divide then multiply by 100, percentage to decimal divide by 100, decimal to percentage multiply by 100" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FINDING A PERCENTAGE OF AN AMOUNT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'finding-percentage-of-amount',
      title: 'Finding a Percentage of an Amount',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">To find a percentage of an amount we ${or('convert the percentage to a decimal or fraction')} and then ${bl('multiply by the amount')}. The word <em>of</em> in mathematics means <strong>multiply</strong>. For example, to find ${or('20%')} of 350 we calculate ${bl('0.20 × 350')} or ${or('20/100')} ${bl('× 350')}. A useful mental method is to find ${or('10%')} first by dividing by 10 and then use that to find other percentages.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage converted')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiplication')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('discount')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Two methods ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two methods for finding a percentage of an amount</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Decimal method:</strong> ${or('Convert the percentage to a decimal')} by dividing by 100, then ${bl('multiply by the amount')}. &nbsp;${or('25%')} = ${or('0.25')} → ${bl('0.25 × 360')} = ${gr('90')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Mental method:</strong> Find ${or('10%')} by dividing the amount by 10, then ${bl('build up')} to the required percentage by combining multiples of 10% and 5% (half of 10%).</p>` +
        `</div>` +

        `</div>` +

        // ── "of" means multiply tip ──────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">"of" means multiply</p>` +
        `<p style="margin:0;color:#14532d;">Whenever you see the word <strong>of</strong> in a maths problem, replace it with ${bl('×')}. So "${or('20%')} of 350" becomes ${or('0.20')} ${bl('× 350')} = ${gr('70')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Mental shortcut — build from 10%</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('10%')} = amount ÷ 10. &nbsp;${or('5%')} = half of 10%. &nbsp;${or('20%')} = double 10%. &nbsp;${or('15%')} = 10% + 5%. &nbsp;${or('30%')} = 3 × 10%. This shortcut lets you calculate common percentages quickly without a calculator.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 8: 25% of 360 ────────────────────────────────────────────
        {
          question: 'Find 25% of 360.',
          answer: `${or('25%')} of 360 = ${gr('90')}`,
          steps: [
            `${or('Convert 25% to a decimal:')} 25 ÷ 100 = ${or('0.25')}.`,
            `${bl('Multiply:')} ${or('0.25')} ${bl('× 360')} = ${gr('90')}.`,
            `<strong>Answer:</strong> ${gr('90')} ✓`,
          ],
        },

        // ── Example 9: 15% of 240 (mental method) ───────────────────────────
        {
          question: 'Find 15% of 240.',
          answer: `${or('15%')} of 240 = ${gr('36')}`,
          steps: [
            `Find ${or('10%')} first: 240 ÷ 10 = ${or('24')}.`,
            `Find ${or('5%')}: half of 10% = ${or('24')} ÷ 2 = ${or('12')}.`,
            `${bl('Add:')} 10% + 5% = ${or('24')} ${bl('+')} ${or('12')} = ${gr('36')}.`,
            `<strong>Answer:</strong> ${gr('36')} ✓`,
          ],
        },

        // ── Example 10: 30% discount on R450 jacket ──────────────────────────
        {
          question: 'A shop offers a 30% discount on a jacket costing R450. What is the discount amount and what is the sale price?',
          answer: `${re('Discount')} = ${gr('R135')} &nbsp;|&nbsp; Sale price = ${gr('R315')}`,
          steps: [
            `Find ${or('30%')} of R450: ${or('0.30')} ${bl('× 450')} = ${re('R135')}.`,
            `${re('Discount')} = ${re('R135')}.`,
            `Sale price = R450 − ${re('R135')} = ${gr('R315')}.`,
          ],
        },

        // ── Example 11: Lerato's test marks ──────────────────────────────────
        {
          question: "Lerato scores 68% on a test out of 75 marks. How many marks did she get?",
          answer: `Lerato got ${gr('51')} marks`,
          steps: [
            `Find ${or('68%')} of 75: ${or('0.68')} ${bl('× 75')} = ${gr('51')}.`,
            `<strong>Answer:</strong> Lerato got ${gr('51')} marks ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the two methods for finding a percentage of an amount: decimal method (convert to decimal then multiply) and mental method (find 10% then build up)" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find a percentage of an amount using the decimal method and the mental method of building from 10%" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PERCENTAGE INCREASE AND DECREASE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-decrease',
      title: 'Percentage Increase and Decrease',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>percentage increase</strong> means adding a percentage of the ${bl('original amount')} to the ${bl('original')}. A <strong>percentage decrease</strong> means subtracting a percentage of the ${bl('original amount')} from the ${bl('original')}. To calculate a percentage increase, find ${or('the percentage of the amount')} and ${gr('add it on')}. To calculate a percentage decrease, find ${or('the percentage of the amount')} and ${re('subtract it')}. We use percentage increase and decrease in real life for price increases, salary raises, discounts and population changes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original amount')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage found')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('increase')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('decrease')}</span>` +
        `</div>` +

        // ── Two rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Percentage increase:</strong> Find ${or('the percentage of the original')} → ${gr('add')} it to the ${bl('original amount')}. &nbsp;New amount = ${bl('original')} ${gr('+')} ${or('percentage of original')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Percentage decrease:</strong> Find ${or('the percentage of the original')} → ${re('subtract')} it from the ${bl('original amount')}. &nbsp;New amount = ${bl('original')} ${re('−')} ${or('percentage of original')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Real-life uses ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Real-life uses</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Increases')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Price increases, salary raises, population growth, VAT.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Decreases')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Discounts, sale prices, depreciation, population decline.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Two-step method</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1:</strong> Find ${or('the percentage of the original amount')} (convert percentage to decimal and multiply). <br><strong>Step 2:</strong> ${gr('Add')} for an increase or ${re('subtract')} for a decrease. Always start from the ${bl('original amount')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 12: TV price increase 12% ────────────────────────────────
        {
          question: 'A shop increases the price of a TV by 12%. The original price is R3 500. What is the new price?',
          answer: `New price = ${gr('R3 920')}`,
          steps: [
            `Find ${or('12%')} of ${bl('R3 500')}: 0.12 × ${bl('3 500')} = ${or('R420')}.`,
            `${gr('Add')} to original: ${bl('R3 500')} ${gr('+')} ${or('R420')} = ${gr('R3 920')}.`,
            `<strong>Answer:</strong> The new price is ${gr('R3 920')} ✓`,
          ],
        },

        // ── Example 13: Tuck shop price decrease 15% ─────────────────────────
        {
          question: 'A school decreases its tuck shop prices by 15%. A pie originally costs R12. What is the new price?',
          answer: `New price = ${re('R10.20')}`,
          steps: [
            `Find ${or('15%')} of ${bl('R12')}: 0.15 × ${bl('12')} = ${or('R1.80')}.`,
            `${re('Subtract')} from original: ${bl('R12')} ${re('−')} ${or('R1.80')} = ${re('R10.20')}.`,
            `<strong>Answer:</strong> The new price is ${re('R10.20')} ✓`,
          ],
        },

        // ── Example 14: Salary increase 10% ──────────────────────────────────
        {
          question: 'Sipho earns R8 500 per month. He gets a 10% salary increase. What is his new salary?',
          answer: `New salary = ${gr('R9 350')}`,
          steps: [
            `Find ${or('10%')} of ${bl('R8 500')}: ${bl('8 500')} ÷ 10 = ${or('R850')}.`,
            `${gr('Add')} to original: ${bl('R8 500')} ${gr('+')} ${or('R850')} = ${gr('R9 350')}.`,
            `<strong>Answer:</strong> Sipho now earns ${gr('R9 350')} per month ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate percentage increase and percentage decrease using the two-step method of finding the percentage then adding or subtracting from the original" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing percentage increase on the left (original amount plus percentage found equals new amount) and percentage decrease on the right (original amount minus percentage found equals new amount) with colour coded arrows" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — percentage to decimal ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 45% as a decimal.',
      answer: '0.45',
      checkMode: 'auto',
      correctAnswer: '0.45',
      explanation: 'Divide by 100 (move the decimal point 2 places left).\n45 ÷ 100 = 0.45 ✓',
    },

    // ── Q2 Easy — decimal to percentage ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Write 0.72 as a percentage.',
      answer: '72%',
      checkMode: 'auto',
      correctAnswer: '72%',
      correctAnswers: ['72%', '72'],
      explanation: 'Multiply by 100 (move the decimal point 2 places right).\n0.72 × 100 = 72. Answer: 72% ✓',
    },

    // ── Q3 Medium — fraction to percentage ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write 5/8 as a percentage.',
      answer: '62.5%',
      checkMode: 'auto',
      correctAnswer: '62.5%',
      correctAnswers: ['62.5%', '62.5'],
      explanation: 'Divide the numerator by the denominator, then multiply by 100.\n5 ÷ 8 = 0.625. 0.625 × 100 = 62.5. Answer: 62.5% ✓',
    },

    // ── Q4 Medium — percentage to fraction in simplest form ──────────────────
    {
      difficulty: 'Medium',
      question: 'Write 84% as a fraction in simplest form.',
      answer: '21/25',
      checkMode: 'auto',
      correctAnswer: '21/25',
      explanation: 'Write as a fraction over 100: 84/100.\nHCF of 84 and 100 is 4. 84 ÷ 4 = 21, 100 ÷ 4 = 25.\nAnswer: 21/25 ✓',
    },

    // ── Q5 Hard — explain fraction-percentage equivalence ────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho says 3/5 is the same as 60%. Is he correct? Explain your answer.",
      answer: 'Yes — 3/5 = 3 ÷ 5 = 0.6 = 60%. Sipho is correct.',
      checkMode: 'self',
    },

    // ── Q6 Easy — find 10% of an amount ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find 10% of 350.',
      answer: '35',
      checkMode: 'auto',
      correctAnswer: '35',
      explanation: '10% of an amount = amount ÷ 10.\n350 ÷ 10 = 35. Answer: 35 ✓',
    },

    // ── Q7 Easy — find 25% of an amount ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find 25% of 200.',
      answer: '50',
      checkMode: 'auto',
      correctAnswer: '50',
      explanation: 'Convert 25% to a decimal: 0.25.\n0.25 × 200 = 50. Answer: 50 ✓',
    },

    // ── Q8 Medium — find 35% of an amount ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find 35% of 480.',
      answer: '168',
      checkMode: 'auto',
      correctAnswer: '168',
      explanation: 'Convert 35% to a decimal: 0.35.\n0.35 × 480 = 168. Answer: 168 ✓',
    },

    // ── Q9 Medium — percentage of amount in context ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'A school has 650 learners. 40% are boys. How many boys are there?',
      answer: '260',
      checkMode: 'auto',
      correctAnswer: '260',
      explanation: 'Find 40% of 650.\nConvert 40% to a decimal: 0.40.\n0.40 × 650 = 260. Answer: 260 boys ✓',
    },

    // ── Q10 Hard — percentage of a test mark ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato gets 72% on a test marked out of 150. How many marks did she get?',
      answer: '108',
      checkMode: 'auto',
      correctAnswer: '108',
      explanation: 'Find 72% of 150.\n0.72 × 150 = 108. Answer: 108 marks ✓',
    },

    // ── Q11 Hard — express a score as a percentage ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle answers 45 questions correctly out of 60. What percentage did she get?',
      answer: '75%',
      checkMode: 'auto',
      correctAnswer: '75%',
      correctAnswers: ['75%', '75'],
      explanation: 'Write as a fraction: 45/60.\nDivide: 45 ÷ 60 = 0.75.\nMultiply by 100: 0.75 × 100 = 75. Answer: 75% ✓',
    },

    // ── Q12 Medium — percentage decrease (discount) ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'A jacket costs R680. It is discounted by 20%. What is the sale price?',
      answer: 'R544',
      checkMode: 'auto',
      correctAnswer: 'R544',
      correctAnswers: ['R544', '544'],
      explanation: 'Find 20% of R680: 0.20 × 680 = R136 (discount).\nSale price = R680 − R136 = R544. Answer: R544 ✓',
    },

    // ── Q13 Medium — percentage increase ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A shop increases a price of R240 by 15%. What is the new price?',
      answer: 'R276',
      checkMode: 'auto',
      correctAnswer: 'R276',
      correctAnswers: ['R276', '276'],
      explanation: 'Find 15% of R240: 0.15 × 240 = R36 (increase).\nNew price = R240 + R36 = R276. Answer: R276 ✓',
    },

    // ── Q14 Hard — salary increase ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo earns R12 400 per month. He gets an 8% salary increase. What is his new monthly salary?',
      answer: 'R13 392',
      checkMode: 'auto',
      correctAnswer: 'R13392',
      correctAnswers: ['R13392', 'R13 392', '13392', '13 392'],
      explanation: 'Find 8% of R12 400: 0.08 × 12 400 = R992 (increase).\nNew salary = R12 400 + R992 = R13 392. Answer: R13 392 ✓',
    },

    // ── Q15 Hard — discount (save and pay) ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A television costs R4 500. The shop offers a 12% discount on Fridays. Sipho buys the TV on a Friday.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) How much does Sipho save?',
          correctAnswer: 'R540',
          correctAnswers: ['R540', '540'],
          explanation: 'Find 12% of R4 500: 0.12 × 4 500 = R540. Sipho saves R540 ✓',
        },
        {
          label: 'b) How much does Sipho pay?',
          correctAnswer: 'R3960',
          correctAnswers: ['R3960', 'R3 960', '3960', '3 960'],
          explanation: 'Sale price = R4 500 − R540 = R3 960. Sipho pays R3 960 ✓',
        },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered percentages.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of percentages.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered percentages for Grade 6. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of percentages. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Block layout per set: 0-3 percentage meaning/basic conversion (Easy) |
  // 4-6 fraction<->percentage general (Easy-Medium) | 7-9 percentage<->fraction/
  // decimal with simplifying/precision (Medium) | 10-13 finding a percentage of
  // an amount (Medium) | 14-16 percentage increase/decrease single step
  // (Medium-Hard) | 17-19 multi-step & comparative percentage problems (Hard)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: "What does the word 'percent' mean?", answer: "'Percent' means 'out of 100'. So 45% means 45 out of every 100 parts.", checkMode: 'self' },
        { difficulty: 'Easy', question: 'Write 20% as a fraction in simplest form.', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: '20% = 20/100. HCF of 20 and 100 is 20. 20 ÷ 20 = 1, 100 ÷ 20 = 5. Answer: 1/5 ✓' },
        { difficulty: 'Easy', question: 'Convert each of the following.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Write 0.6 as a percentage.', correctAnswer: '60%', correctAnswers: ['60%', '60'], explanation: 'Multiply by 100: 0.6 × 100 = 60. Answer: 60% ✓' },
          { label: 'b) Write 75% as a decimal.', correctAnswer: '0.75', correctAnswers: ['0.75'], explanation: 'Divide by 100: 75 ÷ 100 = 0.75. Answer: 0.75 ✓' },
          { label: 'c) Write 75% as a fraction in simplest form.', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: '75% = 75/100. HCF of 75 and 100 is 25. 75 ÷ 25 = 3, 100 ÷ 25 = 4. Answer: 3/4 ✓' },
        ] },
        { difficulty: 'Easy', question: "Karabo says 10% as a fraction is 10/100 and that is already in simplest form. Is she correct? Explain.", answer: 'No — 10/100 simplifies further to 1/10, since the HCF of 10 and 100 is 10. She forgot to simplify.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Convert 9/20 to a percentage.', answer: '45%', checkMode: 'auto', correctAnswer: '45%', correctAnswers: ['45%', '45'], explanation: 'Divide the numerator by the denominator: 9 ÷ 20 = 0.45. Multiply by 100: 0.45 × 100 = 45. Answer: 45% ✓' },
        { difficulty: 'Medium', question: "In a spelling test out of 20, Amahle spells 17 words correctly. What percentage did she get?", answer: '85%', checkMode: 'auto', correctAnswer: '85%', correctAnswers: ['85%', '85'], explanation: 'Write as a fraction: 17/20. Divide: 17 ÷ 20 = 0.85. Multiply by 100: 85. Answer: 85% ✓' },
        { difficulty: 'Medium', question: 'Which is bigger: 3/8 or 40%? Show your working.', answer: '40%', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Convert 3/8 to a percentage: 3 ÷ 8 = 0.375, ×100 = 37.5%. Compare 37.5% with 40%: 40% is bigger. Answer: 40% ✓' },
        { difficulty: 'Medium', question: 'Convert 64% to a fraction in simplest form.', answer: '16/25', checkMode: 'auto', correctAnswer: '16/25', correctAnswers: ['16/25'], explanation: '64% = 64/100. HCF of 64 and 100 is 4. 64 ÷ 4 = 16, 100 ÷ 4 = 25. Answer: 16/25 ✓' },
        { difficulty: 'Medium', question: "Bongani simplifies 56% to a fraction. He writes 56/100 = 28/50 and stops there, saying that is the simplest form. Is he correct?", answer: 'No — 28/50 can still be simplified further. The HCF of 56 and 100 is actually 4, so 56/100 = 14/25 in simplest form. Bongani only divided by 2 once and stopped too early.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Answer each part.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Convert 0.045 to a percentage.', correctAnswer: '4.5%', correctAnswers: ['4.5%', '4.5'], explanation: 'Multiply by 100: 0.045 × 100 = 4.5. Answer: 4.5% ✓' },
          { label: 'b) Convert 92% to a fraction in simplest form.', correctAnswer: '23/25', correctAnswers: ['23/25'], explanation: '92% = 92/100. HCF of 92 and 100 is 4. 92 ÷ 4 = 23, 100 ÷ 4 = 25. Answer: 23/25 ✓' },
          { label: 'c) Convert 6.5% to a decimal.', correctAnswer: '0.065', correctAnswers: ['0.065'], explanation: 'Divide by 100: 6.5 ÷ 100 = 0.065. Answer: 0.065 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A tuck shop sells cooldrinks for R12. If VAT adds 15% to the price, how much extra must a learner pay?', answer: 'R1.80', checkMode: 'auto', correctAnswer: 'R1.80', correctAnswers: ['R1.80', '1.80', 'R1,80'], explanation: 'Find 15% of R12: 0.15 × 12 = 1.80. Answer: R1.80 ✓' },
        { difficulty: 'Medium', question: 'Use the 10%-buildup method to find 45% of R640.', answer: 'R288', checkMode: 'auto', correctAnswer: 'R288', correctAnswers: ['R288', '288'], explanation: '10% of 640 = 64. 45% = 4 × 10% + 5%. 4 × 64 = 256. 5% = half of 64 = 32. 256 + 32 = 288. Answer: R288 ✓' },
        { difficulty: 'Medium', question: "A learner works out 15% of R640 using the buildup method: '10% is 64, so 15% must be 64 + 6 = 70.' What went wrong?", answer: "The learner added 6 instead of half of 64. 5% is half of 10%, so 5% of 640 = 32, not 6. The correct answer is 64 + 32 = R96, not R70.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is more: 30% of R450 or 40% of R320?', answer: '30% of R450', checkMode: 'auto', correctAnswer: '30% of R450', correctAnswers: ['30% of R450', '30% of 450', 'R135', '135'], explanation: '30% of R450 = 0.30 × 450 = R135. 40% of R320 = 0.40 × 320 = R128. R135 is more than R128, so 30% of R450 is more.' },
        { difficulty: 'Medium-Hard', question: 'A shop increases the price of a schoolbag by 12%. The original price is R650. What is the new price?', answer: 'R728', checkMode: 'auto', correctAnswer: 'R728', correctAnswers: ['R728', '728'], explanation: 'Find 12% of R650: 0.12 × 650 = 78. Add to original: 650 + 78 = 728. Answer: R728 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pair of shoes costs R560. The shop offers a 25% discount during a sale. What is the sale price?', answer: 'R420', checkMode: 'auto', correctAnswer: 'R420', correctAnswers: ['R420', '420'], explanation: 'Find 25% of R560: 0.25 × 560 = 140. Subtract from original: 560 − 140 = 420. Answer: R420 ✓' },
        { difficulty: 'Hard', question: "Thabo works out that a R380 jacket with a 30% discount should cost 380 + 114 = R494. What error did he make, and what is the correct sale price?", answer: "Thabo added the discount instead of subtracting it — a discount makes the price go down, not up. The correct sale price is 380 − 114 = R266.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A bicycle costs R1 800. It is on sale with a 20% discount.\n\na) What is the discount amount?\nb) What is the final sale price?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R360', correctAnswers: ['R360', '360'], explanation: 'Find 20% of R1 800: 0.20 × 1 800 = 360. Answer: R360 ✓' },
          { label: 'b) Final sale price', correctAnswer: 'R1440', correctAnswers: ['R1440', 'R1 440', '1440', '1 440'], explanation: 'Sale price = 1 800 − 360 = 1 440. Answer: R1 440 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two classes write different tests. Class A scores 24 out of 30, and Class B scores 5 out of 6. Which class scored a higher percentage?', answer: 'Class B', checkMode: 'auto', correctAnswer: 'Class B', correctAnswers: ['Class B', 'B'], explanation: 'Class A: 24 ÷ 30 = 0.8 = 80%. Class B: 5 ÷ 6 = 0.8333... ≈ 83.3%. Class B scored higher.' },
        { difficulty: 'Hard', question: "A shop advertises 'Take an extra 10% off already-reduced prices!' A jersey was already reduced by 20% from R500. A learner claims the total saving is 30% off the original price. Is this correct? Explain.", answer: "No. After a 20% discount, R500 becomes R400 (500 − 100). A further 10% off R400 is R40, giving a final price of R360. The total saving is 500 − 360 = R140, which is 28% of the original price, not 30%. Successive percentages cannot simply be added because the second percentage is taken off a smaller, already-reduced amount.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have a rock-solid grip on percentages.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: "Complete the sentence: 45% means 45 out of every ___ parts.", answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: "'Percent' means 'out of 100', so 45% means 45 out of every 100 parts." },
        { difficulty: 'Easy', question: 'Write 50% as a fraction in simplest form.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: '50% = 50/100. HCF of 50 and 100 is 50. 50 ÷ 50 = 1, 100 ÷ 50 = 2. Answer: 1/2 ✓' },
        { difficulty: 'Easy', question: 'Complete each conversion.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Write 0.9 as a percentage.', correctAnswer: '90%', correctAnswers: ['90%', '90'], explanation: 'Multiply by 100: 0.9 × 100 = 90. Answer: 90% ✓' },
          { label: 'b) Write 20% as a decimal.', correctAnswer: '0.2', correctAnswers: ['0.2', '0.20'], explanation: 'Divide by 100: 20 ÷ 100 = 0.2. Answer: 0.2 ✓' },
          { label: 'c) Write 20% as a fraction in simplest form.', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: '20% = 20/100. HCF of 20 and 100 is 20. 20 ÷ 20 = 1, 100 ÷ 20 = 5. Answer: 1/5 ✓' },
        ] },
        { difficulty: 'Easy', question: "Zanele converts 4/10 to a percentage by writing 4 ÷ 10 = 40, so she says the answer is 40. What mistake did she make?", answer: "She forgot the final step. After dividing, 4 ÷ 10 = 0.4, and she still needs to multiply by 100 to get 40%. Writing just '40' without the percent sign — and skipping the multiply-by-100 step from the decimal — leads to confusion. The correct answer is 40%.", checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Convert 13/40 to a percentage.', answer: '32.5%', checkMode: 'auto', correctAnswer: '32.5%', correctAnswers: ['32.5%', '32.5'], explanation: 'Divide: 13 ÷ 40 = 0.325. Multiply by 100: 32.5. Answer: 32.5% ✓' },
        { difficulty: 'Medium', question: "During a soccer match, a goalkeeper saves 13 out of 16 shots. What percentage of shots did he save?", answer: '81.25%', checkMode: 'auto', correctAnswer: '81.25%', correctAnswers: ['81.25%', '81.25'], explanation: 'Write as a fraction: 13/16. Divide: 13 ÷ 16 = 0.8125. Multiply by 100: 81.25. Answer: 81.25% ✓' },
        { difficulty: 'Medium', question: 'Order these from smallest to largest: 1/4, 30%, 0.2', answer: '0.2, 1/4, 30%', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Convert 85% to a fraction in simplest form.', answer: '17/20', checkMode: 'auto', correctAnswer: '17/20', correctAnswers: ['17/20'], explanation: '85% = 85/100. HCF of 85 and 100 is 5. 85 ÷ 5 = 17, 100 ÷ 5 = 20. Answer: 17/20 ✓' },
        { difficulty: 'Medium', question: "Lindiwe says 0.5% is the same as 0.5 as a decimal, so she writes 0.5% = 0.5. Is she correct? Explain.", answer: "No — she divided incorrectly. To convert a percentage to a decimal, divide by 100: 0.5 ÷ 100 = 0.005, not 0.5. Lindiwe misplaced the decimal point.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Answer each part.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Convert 0.008 to a percentage.', correctAnswer: '0.8%', correctAnswers: ['0.8%', '0.8'], explanation: 'Multiply by 100: 0.008 × 100 = 0.8. Answer: 0.8% ✓' },
          { label: 'b) Convert 36% to a fraction in simplest form.', correctAnswer: '9/25', correctAnswers: ['9/25'], explanation: '36% = 36/100. HCF of 36 and 100 is 4. 36 ÷ 4 = 9, 100 ÷ 4 = 25. Answer: 9/25 ✓' },
          { label: 'c) Convert 115% to a decimal.', correctAnswer: '1.15', correctAnswers: ['1.15'], explanation: 'Divide by 100: 115 ÷ 100 = 1.15. Answer: 1.15 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A school has 250 learners. 72% of them own a cellphone. How many learners own a cellphone?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180'], explanation: 'Find 72% of 250: 0.72 × 250 = 180. Answer: 180 learners ✓' },
        { difficulty: 'Medium', question: 'Use the 10%-buildup method to find 15% of R820.', answer: 'R123', checkMode: 'auto', correctAnswer: 'R123', correctAnswers: ['R123', '123'], explanation: '10% of 820 = 82. 5% = half of 82 = 41. 15% = 10% + 5% = 82 + 41 = 123. Answer: R123 ✓' },
        { difficulty: 'Medium', question: "A learner calculates 30% of R900 using the buildup method: '10% is 90, so 30% is 90 + 90 = 180.' Is the final answer correct, and if not, where is the mistake?", answer: "No, the answer is wrong. 30% is 3 lots of 10%, so it should be 90 + 90 + 90 = 270, not 90 + 90 = 180. The learner only added two lots of 10% instead of three.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is more: 45% of R220 or 40% of R250?', answer: '40% of R250', checkMode: 'auto', correctAnswer: '40% of R250', correctAnswers: ['40% of R250', '40% of 250', 'R100', '100'], explanation: '45% of R220 = 0.45 × 220 = R99. 40% of R250 = 0.40 × 250 = R100. R100 is more than R99, so actually 40% of R250 is more.' },
        { difficulty: 'Medium-Hard', question: 'Sipho earns R6 200 per month. He receives a 5% salary increase. What is his new salary?', answer: 'R6510', checkMode: 'auto', correctAnswer: 'R6510', correctAnswers: ['R6510', 'R6 510', '6510', '6 510'], explanation: 'Find 5% of R6 200: 0.05 × 6 200 = 310. Add to original: 6 200 + 310 = 6 510. Answer: R6 510 ✓' },
        { difficulty: 'Medium-Hard', question: 'A cellphone costs R2 800. During a sale, the price is reduced by 15%. What is the sale price?', answer: 'R2380', checkMode: 'auto', correctAnswer: 'R2380', correctAnswers: ['R2380', 'R2 380', '2380', '2 380'], explanation: 'Find 15% of R2 800: 0.15 × 2 800 = 420. Subtract from original: 2 800 − 420 = 2 380. Answer: R2 380 ✓' },
        { difficulty: 'Hard', question: "Nomvula says a laptop that increases in price from R6 400 by 6% now costs R384. What went wrong, and what is the correct new price?", answer: "Nomvula gave the increase amount (R384) instead of the new total price. She needed to add R384 to the original R6 400. The correct new price is 6 400 + 384 = R6 784.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Lerato earns R7 200 per month and gets a 12.5% raise.\n\na) What is her new monthly salary?\nb) If she spends 1/4 of her new salary on rent, how much is that?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) New monthly salary', correctAnswer: 'R8100', correctAnswers: ['R8100', 'R8 100', '8100', '8 100'], explanation: 'Find 12.5% of R7 200: 0.125 × 7 200 = 900. New salary = 7 200 + 900 = 8 100. Answer: R8 100 ✓' },
          { label: 'b) Amount spent on rent', correctAnswer: 'R2025', correctAnswers: ['R2025', 'R2 025', '2025', '2 025'], explanation: '1/4 of R8 100 = 8 100 ÷ 4 = 2 025. Answer: R2 025 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two shops sell the same book. Shop A sells 18 out of 24 copies in a week, and Shop B sells 21 out of 30 copies. Which shop sold a higher percentage of its stock?', answer: 'Shop A', checkMode: 'auto', correctAnswer: 'Shop A', correctAnswers: ['Shop A', 'A'], explanation: 'Shop A: 18 ÷ 24 = 0.75 = 75%. Shop B: 21 ÷ 30 = 0.7 = 70%. Shop A sold a higher percentage of its stock.' },
        { difficulty: 'Hard', question: "A store offers 'an extra 10% off' on top of an already-advertised 20% discount on a R500 jacket. A shopper claims this means the jacket is 30% cheaper in total. Is the shopper correct? Explain using numbers.", answer: "No. First discount: 20% of R500 = R100, so the price drops to R400. Second discount: 10% of R400 = R40, so the final price is R360. Total saving = 500 − 360 = R140, which is 28% of the original price, not 30%. You cannot simply add successive percentages, because the second discount applies to the already-reduced price, not the original.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with percentages in real-world contexts.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: "A poster shows '25% of learners walk to school.' What does the 25% mean in this sentence?", answer: '25 out of every 100 learners walk to school.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Write 75% as a fraction in simplest form.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: '75% = 75/100. HCF of 75 and 100 is 25. 75 ÷ 25 = 3, 100 ÷ 25 = 4. Answer: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Complete each conversion.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Write 0.35 as a percentage.', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Multiply by 100: 0.35 × 100 = 35. Answer: 35% ✓' },
          { label: 'b) Write 10% as a decimal.', correctAnswer: '0.1', correctAnswers: ['0.1', '0.10'], explanation: 'Divide by 100: 10 ÷ 100 = 0.1. Answer: 0.1 ✓' },
          { label: 'c) Write 10% as a fraction in simplest form.', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: '10% = 10/100. HCF of 10 and 100 is 10. 10 ÷ 10 = 1, 100 ÷ 10 = 10. Answer: 1/10 ✓' },
        ] },
        { difficulty: 'Easy', question: "Given that 30% = 0.3 = 3/10, a learner says 30% must also equal 3/100 because percent means 'over 100'. Is this correct? Explain.", answer: "No — the fraction 30/100 simplifies to 3/10, not 3/100. The learner divided the numerator by 10 without also dividing the denominator by 10, which changes the value of the fraction.", checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Convert 11/20 to a percentage.', answer: '55%', checkMode: 'auto', correctAnswer: '55%', correctAnswers: ['55%', '55'], explanation: 'Divide: 11 ÷ 20 = 0.55. Multiply by 100: 55. Answer: 55% ✓' },
        { difficulty: 'Medium', question: "Out of 40 learners in a class, 27 attended the school sports day. What percentage of the class attended?", answer: '67.5%', checkMode: 'auto', correctAnswer: '67.5%', correctAnswers: ['67.5%', '67.5'], explanation: 'Write as a fraction: 27/40. Divide: 27 ÷ 40 = 0.675. Multiply by 100: 67.5. Answer: 67.5% ✓' },
        { difficulty: 'Medium', question: 'Which is bigger: 7/20 or 30%? Show your working.', answer: '7/20', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '35%'], explanation: 'Convert 7/20 to a percentage: 7 ÷ 20 = 0.35, ×100 = 35%. Compare 35% with 30%: 35% is bigger. Answer: 7/20 ✓' },
        { difficulty: 'Medium', question: 'Convert 44% to a fraction in simplest form.', answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25'], explanation: '44% = 44/100. HCF of 44 and 100 is 4. 44 ÷ 4 = 11, 100 ÷ 4 = 25. Answer: 11/25 ✓' },
        { difficulty: 'Medium', question: "Kagiso simplifies 48% by dividing numerator and denominator by 6, getting 8/16.67, then says the fraction can't be simplified further. What is the actual error, and what is the correct simplest form?", answer: "6 is not a common factor of 48 and 100 (100 ÷ 6 is not a whole number), so dividing by 6 was invalid. The correct HCF of 48 and 100 is 4. 48 ÷ 4 = 12, 100 ÷ 4 = 25, so the simplest form is 12/25.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Answer each part.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Convert 0.0625 to a percentage.', correctAnswer: '6.25%', correctAnswers: ['6.25%', '6.25'], explanation: 'Multiply by 100: 0.0625 × 100 = 6.25. Answer: 6.25% ✓' },
          { label: 'b) Convert 88% to a fraction in simplest form.', correctAnswer: '22/25', correctAnswers: ['22/25'], explanation: '88% = 88/100. HCF of 88 and 100 is 4. 88 ÷ 4 = 22, 100 ÷ 4 = 25. Answer: 22/25 ✓' },
          { label: 'c) Convert 0.9% to a decimal.', correctAnswer: '0.009', correctAnswers: ['0.009'], explanation: 'Divide by 100: 0.9 ÷ 100 = 0.009. Answer: 0.009 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A tuck shop orders 1 200 juice boxes. 25% of them are apple flavoured. How many apple-flavoured juice boxes were ordered?', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300'], explanation: 'Find 25% of 1 200: 0.25 × 1 200 = 300. Answer: 300 juice boxes ✓' },
        { difficulty: 'Medium', question: 'Use the 10%-buildup method to find 65% of R480.', answer: 'R312', checkMode: 'auto', correctAnswer: 'R312', correctAnswers: ['R312', '312'], explanation: '10% of 480 = 48. 65% = 6 × 10% + 5%. 6 × 48 = 288. 5% = half of 48 = 24. 288 + 24 = 312. Answer: R312 ✓' },
        { difficulty: 'Medium', question: "A learner finds 25% of R840 using the buildup method: '10% is 84, so 25% is 84 + 84 = 168, plus a bit more.' She rounds this to R168 as her final answer. What is wrong with this reasoning, and what is the correct answer?", answer: "84 + 84 only gives 20% (two lots of 10%), not 25% — she needs an extra 5%, which is half of 84 = 42. The correct answer is 84 + 84 + 42 = R210, not R168.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Which is more: 8% of R950 or 12% of R650?', answer: '12% of R650', checkMode: 'auto', correctAnswer: '12% of R650', correctAnswers: ['12% of R650', '12% of 650', 'R78', '78'], explanation: '8% of R950 = 0.08 × 950 = R76. 12% of R650 = 0.12 × 650 = R78. R78 is more than R76, so 12% of R650 is more.' },
        { difficulty: 'Medium-Hard', question: 'A laptop costs R6 400. Its price is increased by 6% due to new import costs. What is the new price?', answer: 'R6784', checkMode: 'auto', correctAnswer: 'R6784', correctAnswers: ['R6784', 'R6 784', '6784', '6 784'], explanation: 'Find 6% of R6 400: 0.06 × 6 400 = 384. Add to original: 6 400 + 384 = 6 784. Answer: R6 784 ✓' },
        { difficulty: 'Medium-Hard', question: 'A shirt costs R380. It is discounted by 30% during an end-of-season sale. What is the sale price?', answer: 'R266', checkMode: 'auto', correctAnswer: 'R266', correctAnswers: ['R266', '266'], explanation: 'Find 30% of R380: 0.30 × 380 = 114. Subtract from original: 380 − 114 = 266. Answer: R266 ✓' },
        { difficulty: 'Hard', question: "Sizwe says his monthly salary of R9 500 with a 10% increase is now R950. What error did he make, and what is the correct new salary?", answer: "Sizwe stated the increase amount (R950) instead of the new total salary. He needed to add the increase to the original salary. The correct new salary is 9 500 + 950 = R10 450.", checkMode: 'self' },
        { difficulty: 'Hard', question: "A furniture shop sells a couch for R7 500 with a 20% discount for a weekend sale.\n\na) What is the discount amount?\nb) What is the final sale price?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R1500', correctAnswers: ['R1500', 'R1 500', '1500', '1 500'], explanation: 'Find 20% of R7 500: 0.20 × 7 500 = 1 500. Answer: R1 500 ✓' },
          { label: 'b) Final sale price', correctAnswer: 'R6000', correctAnswers: ['R6000', 'R6 000', '6000', '6 000'], explanation: 'Sale price = 7 500 − 1 500 = 6 000. Answer: R6 000 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two farms report their maize harvest as a percentage of expected yield. Farm A harvests 34 out of 40 expected tons, and Farm B harvests 56 out of 70 expected tons. Which farm achieved a higher percentage of its expected yield?', answer: 'Farm A', checkMode: 'auto', correctAnswer: 'Farm A', correctAnswers: ['Farm A', 'A'], explanation: 'Farm A: 34 ÷ 40 = 0.85 = 85%. Farm B: 56 ÷ 70 = 0.8 = 80%. Farm A achieved a higher percentage of its expected yield.' },
        { difficulty: 'Hard', question: "A sportswear shop advertises '20% off, plus an extra 10% off for card holders' on running shoes originally priced at R900. A card holder claims she will pay only 70% of the original price, i.e. R630. Is she correct? Explain using numbers, and state what she actually pays.", answer: "No. First discount: 20% of R900 = R180, so the price drops to R720. Second discount: 10% of R720 = R72, so the final price is R720 − 72 = R648. This is not the same as paying 70% of R900 (R630), because the second 10% is calculated on the already-discounted R720, not on the original R900. The successive discounts give a smaller total saving than simply adding 20% + 10%.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply percentages confidently to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
