import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance roles) ──────────────────────────────────────────
// principal / log conversion / nominal rate → blue   (#2563eb)
// rate / power law step / compounding periods → orange (#ea580c)
// final amount / calculated n / effective rate → green (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finance',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: SIMPLE AND COMPOUND GROWTH AND DECAY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-compound-growth-decay',
      title: 'Revision — Simple and Compound Growth and Decay',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">In this section we revise the four core formulae for growth and decay. <strong>Simple growth</strong> uses ${gr('A')} = ${bl('P')}(1 + n${or('i')}) and <strong>simple decay</strong> uses ${gr('A')} = ${bl('P')}(1 − n${or('i')}), where ${gr('A')} is the final amount, ${bl('P')} is the principal, n is the number of periods, and ${or('i')} is the interest rate as a decimal. <strong>Compound growth</strong> uses ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ and <strong>compound decay</strong> uses ${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ. Compound growth and decay apply interest to the growing or declining balance at each period, making them more powerful than simple interest over time. These formulae apply to savings, loans, hire purchase, depreciation, and population growth.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('principal P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rate i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final amount A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four formulae</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simple Growth</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 + n${or('i')})</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Interest is calculated on the original ${bl('principal')} only. The amount grows by the same fixed value each period.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Simple Decay</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 − n${or('i')})</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Used for straight-line depreciation. The value decreases by the same fixed amount each period.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Compound Growth</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Interest is applied to the growing balance each period. More powerful than simple interest over time — used for savings and investments.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">Compound Decay</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Used for reducing-balance depreciation. Each period the decrease is smaller because the base is smaller — used for vehicles and machinery.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Variable reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Principal</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The original starting amount — the investment, loan value, or initial price.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Interest rate</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The rate as a <strong>decimal</strong>. Convert a percentage by dividing by 100 (e.g. 7% → 0.07).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Number of periods</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The number of time periods (in years unless stated otherwise).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">A — Final amount</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The accumulated or depreciated value at the end of the period.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Compound beats simple over time</p>` +
        `<p style="margin:0;color:#1e3a8a;">Over short periods the difference between simple and compound interest is small. Over longer periods, compounding grows significantly larger because each period's interest itself earns interest. When comparing investments, always check whether the rate is simple or compound.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato invests R12 000 at 7% simple interest for 5 years. Find the final amount.',
          answer: `${gr('A')} = R16 200`,
          steps: [
            `Write down the formula for simple growth: ${gr('A')} = ${bl('P')}(1 + n${or('i')})`,
            `Identify the values: ${bl('P')} = R12 000, ${or('i')} = 7% = ${or('0.07')}, n = 5`,
            `Substitute: ${gr('A')} = ${bl('12 000')}(1 + 5 × ${or('0.07')})`,
            `Simplify inside the bracket: 5 × ${or('0.07')} = 0.35, so 1 + 0.35 = 1.35`,
            `Calculate: ${gr('A')} = ${bl('12 000')} × 1.35 = ${gr('R16 200')}`,
          ],
        },
        {
          question: 'Sipho invests R8 000 at 6% compound interest per year for 4 years. Find the final amount.',
          answer: `${gr('A')} ≈ R10 100`,
          steps: [
            `Write down the formula for compound growth: ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ`,
            `Identify the values: ${bl('P')} = R8 000, ${or('i')} = 6% = ${or('0.06')}, n = 4`,
            `Substitute: ${gr('A')} = ${bl('8 000')}(1 + ${or('0.06')})⁴ = ${bl('8 000')}(1.06)⁴`,
            `Calculate (1.06)⁴: 1.06² = 1.1236; 1.1236² ≈ 1.2625`,
            `Calculate: ${gr('A')} = ${bl('8 000')} × 1.2625 ≈ ${gr('R10 100')}`,
          ],
        },
        {
          question: 'A car bought for R280 000 depreciates at 15% per year on a reducing balance. Find its value after 5 years.',
          answer: `${gr('A')} ≈ R124 236`,
          steps: [
            `Write down the formula for compound decay: ${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ`,
            `Identify the values: ${bl('P')} = R280 000, ${or('i')} = 15% = ${or('0.15')}, n = 5`,
            `Substitute: ${gr('A')} = ${bl('280 000')}(1 − ${or('0.15')})⁵ = ${bl('280 000')}(0.85)⁵`,
            `Calculate (0.85)⁵: 0.85² = 0.7225; 0.7225 × 0.85 ≈ 0.6141; 0.6141 × 0.85 ≈ 0.5220; 0.5220 × 0.85 ≈ 0.4437`,
            `Calculate: ${gr('A')} = ${bl('280 000')} × 0.4437 ≈ ${gr('R124 236')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the final amount if R10,000 is invested at 8% simple interest for 3 years.',
          answer: 'R12,400',
          checkMode: 'auto',
          correctAnswer: 'R12400',
          correctAnswers: ['R12400', '12400', 'R12,400', '12,400'],
          explanation: 'A = P(1 + ni) = 10 000(1 + 3 × 0.08) = 10 000 × 1.24 = R12,400 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the final amount if R6,000 is invested at 5% compound interest for 6 years.',
          answer: 'R8,040.57',
          checkMode: 'auto',
          correctAnswer: 'R8040.57',
          correctAnswers: ['R8040.57', '8040.57', 'R8,040.57', '8,040.57'],
          explanation: 'A = P(1 + i)ⁿ = 6 000(1.05)⁶ ≈ 6 000 × 1.3401 ≈ R8,040.57 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says compound interest always gives a higher final amount than simple interest over the same period and rate. Is he correct? Explain.',
          answer: 'Yes — simple interest calculates on the original principal only, while compound interest also earns interest on previously accumulated interest, making it grow faster over time.',
          checkMode: 'self',
        },

        // ── Q4 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A machine worth R90,000 depreciates at 10% per year on a reducing balance. Find its value after 4 years.',
          answer: 'R59,049',
          checkMode: 'auto',
          correctAnswer: 'R59049',
          correctAnswers: ['R59049', '59049', 'R59,049', '59,049'],
          explanation: 'A = P(1 − i)ⁿ = 90 000(0.90)⁴ = 90 000 × 0.6561 = R59,049 ✓',
        },

        // ── Q18 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A car purchased for R400,000 depreciates at 20% per year (reducing balance). Simultaneously, the same model car\'s replacement cost increases at 8% per year. Find how many years until there is a R500,000 gap between the replacement cost and the car\'s book value.',
          answer: 'Gap = 400 000(1.08)ⁿ − 400 000(0.80)ⁿ = 500 000. This requires trial and improvement since both terms involve n:\nTry n = 5: 400 000(1.4693) − 400 000(0.3277) = 587 720 − 131 080 = 456 640 (too low)\nTry n = 6: 400 000(1.5869) − 400 000(0.2621) = 634 760 − 104 840 = 529 920 (close)\nApproximately 6 years.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining simple and compound growth and decay formulae with worked examples on savings depreciation and population growth" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING LOGARITHMS TO CALCULATE n
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'logarithms-calculate-n',
      title: 'Using Logarithms to Calculate n',
      icon: 'log',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 10 and 11 we used trial and improvement to find n (the number of periods). In Grade 12 we use <strong>logarithms</strong> to calculate n exactly. Starting from ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ, we divide both sides by ${bl('P')}, then take the log of both sides and apply the <strong>power law</strong> to bring n out of the exponent: log(xᵃ) = a·log(x).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('log conversion')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('power law step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated n')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Derivation of the method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Start:</strong> A = P(1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Divide both sides by P:')} A/P = (1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Take log of both sides:')} log(A/P) = log(1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Apply the power law')} log(xᵃ) = a·log(x): log(A/P) = n·log(1 + i)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Solve for n:')} n = log(A/P) ÷ log(1 + i)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same method for decay</p>` +
        `<p style="margin:0;color:#1e3a8a;">For compound decay, replace (1 + i)ⁿ with (1 − i)ⁿ. The logarithm of a number between 0 and 1 is negative, and the log of (1 − i) is also negative, so the two negatives cancel and n comes out positive — as expected.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'How long will it take R5 000 to grow to R8 000 at 9% compound interest per year?',
          answer: `${gr('n')} ≈ 5.46 years`,
          steps: [
            `Set up the equation: 8 000 = 5 000(1.09)ⁿ`,
            `${bl('Divide both sides by 5 000:')} 8 000 ÷ 5 000 = (1.09)ⁿ → 1.6 = (1.09)ⁿ`,
            `${bl('Take log of both sides:')} log(1.6) = log(1.09)ⁿ`,
            `${or('Apply the power law:')} log(1.6) = n·log(1.09)`,
            `${gr('Solve for n:')} n = log(1.6) ÷ log(1.09) ≈ 0.2041 ÷ 0.0374 ≈ ${gr('5.46 years')}`,
          ],
        },
        {
          question: 'A population of 2 million grows at 3% per year. How many years until it reaches 3 million?',
          answer: `${gr('n')} ≈ 13.72 years, so approximately 14 years`,
          steps: [
            `Set up the equation: 3 000 000 = 2 000 000(1.03)ⁿ`,
            `${bl('Divide both sides by 2 000 000:')} 3 000 000 ÷ 2 000 000 = (1.03)ⁿ → 1.5 = (1.03)ⁿ`,
            `${bl('Take log of both sides:')} log(1.5) = log(1.03)ⁿ`,
            `${or('Apply the power law:')} log(1.5) = n·log(1.03)`,
            `${gr('Solve for n:')} n = log(1.5) ÷ log(1.03) ≈ 0.1761 ÷ 0.01284 ≈ ${gr('13.72')} years`,
            `Since we need a whole number of years: approximately <strong>14 years</strong>.`,
          ],
        },
        {
          question: 'How long will it take a car worth R200 000 to depreciate to R80 000 at 12% reducing balance per year?',
          answer: `${gr('n')} ≈ 7.17 years`,
          steps: [
            `Set up the equation: 80 000 = 200 000(0.88)ⁿ`,
            `${bl('Divide both sides by 200 000:')} 80 000 ÷ 200 000 = (0.88)ⁿ → 0.4 = (0.88)ⁿ`,
            `${bl('Take log of both sides:')} log(0.4) = log(0.88)ⁿ`,
            `${or('Apply the power law:')} log(0.4) = n·log(0.88)`,
            `${gr('Solve for n:')} n = log(0.4) ÷ log(0.88) ≈ −0.3979 ÷ (−0.0555) ≈ ${gr('7.17 years')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'How long will it take R3,000 to grow to R5,000 at 8% compound interest per year, using logarithms?',
          answer: 'approximately 6.64 years',
          checkMode: 'auto',
          correctAnswer: '6.64',
          correctAnswers: ['6.64', '6.64 years', 'approximately 6.64 years', '≈ 6.64 years'],
          explanation: '5 000 = 3 000(1.08)ⁿ\n5 000 ÷ 3 000 = (1.08)ⁿ → 1.6667 = (1.08)ⁿ\nn = log(1.6667) ÷ log(1.08) ≈ 0.2218 ÷ 0.0334 ≈ 6.64 years ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wants to double her investment of R15,000 at 7% compound interest. Find the exact number of years using logarithms.',
          answer: '30 000 = 15 000(1.07)ⁿ\n2 = (1.07)ⁿ\nn = log 2 ÷ log 1.07 ≈ 0.30103 ÷ 0.02938 ≈ 10.24 years',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A car worth R350,000 depreciates at 18% per year on a reducing balance. How many years until it is worth less than R100,000?',
          answer: '100 000 = 350 000(0.82)ⁿ\n0.2857 = (0.82)ⁿ\nn = log(0.2857) ÷ log(0.82) ≈ 6.31 years, so more than 6 years.',
          checkMode: 'self',
        },

        // ── Q17 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find how long it takes for a nominal rate of 6% compounded monthly to cause an investment to grow by 50%.',
          answer: '(1.005)ⁿ = 1.5\nn = log(1.5) ÷ log(1.005) ≈ 0.17609 ÷ 0.002166 ≈ 81.3 months ≈ 6.78 years',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use logarithms to solve for n in compound growth and decay equations using the power law" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — NOMINAL AND EFFECTIVE INTEREST RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nominal-effective-interest-rates',
      title: 'Nominal and Effective Interest Rates',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">When interest is compounded more frequently than once per year (e.g. monthly or quarterly), the <strong>effective annual rate</strong> — the true rate actually earned or paid over a year — differs from the <strong>nominal annual rate</strong>, which is the stated rate. The relationship is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">(1 + ${gr('effective rate')}) = (1 + ${bl('nominal rate')} ÷ ${or('m')})${or('^m')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">where ${or('m')} is the number of compounding periods per year</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('nominal rate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('compounding periods m')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('effective rate')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common values of m</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 4')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Quarterly</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 12')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Monthly</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 52')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Weekly</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 365')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Daily</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why effective rate matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">When comparing two investments with different compounding frequencies, always convert both to their ${gr('effective annual rate')} first. The investment with the higher effective rate will give you more money at the end of the year, regardless of what the ${bl('nominal rates')} say.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the effective annual rate equivalent to a nominal rate of 12% compounded monthly.',
          answer: `${gr('Effective rate')} ≈ 12.68%`,
          steps: [
            `Identify the values: ${bl('nominal rate')} = 12% = ${bl('0.12')}, ${or('m')} = ${or('12')} (monthly)`,
            `Write the formula: (1 + ${gr('effective rate')}) = (1 + ${bl('0.12')} ÷ ${or('12')})^${or('12')}`,
            `Simplify: (1 + ${gr('effective rate')}) = (1 + 0.01)^${or('12')} = (1.01)^${or('12')}`,
            `Calculate (1.01)¹²: ≈ 1.1268`,
            `${gr('Effective rate')} = 1.1268 − 1 = 0.1268 = ${gr('12.68%')}`,
          ],
        },
        {
          question: 'Sipho compares two investments: 10.5% per year compounded daily, versus 10.55% per year compounded monthly. Which is better?',
          answer: `The ${gr('monthly compounded')} option is marginally better`,
          steps: [
            `<strong>Option 1 — Daily:</strong> ${bl('nominal rate')} = ${bl('0.105')}, ${or('m')} = ${or('365')}`,
            `${gr('Effective rate')} = (1 + ${bl('0.105')} ÷ ${or('365')})^${or('365')} − 1 ≈ (1.000288)^${or('365')} − 1 ≈ 1.1107 − 1 = ${gr('11.07%')}`,
            `<strong>Option 2 — Monthly:</strong> ${bl('nominal rate')} = ${bl('0.1055')}, ${or('m')} = ${or('12')}`,
            `${gr('Effective rate')} = (1 + ${bl('0.1055')} ÷ ${or('12')})^${or('12')} − 1 ≈ (1.008792)^${or('12')} − 1 ≈ 1.1108 − 1 = ${gr('11.08%')}`,
            `Compare: ${gr('11.08%')} &gt; ${gr('11.07%')}. The <strong>monthly compounded</strong> option at 10.55% is marginally better.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the effective annual rate equivalent to a nominal rate of 18% compounded monthly.',
          answer: '19.56%',
          checkMode: 'auto',
          correctAnswer: '19.56%',
          correctAnswers: ['19.56%', '19.56', '≈ 19.56%', 'approximately 19.56%'],
          explanation: '(1 + effective) = (1 + 0.18 ÷ 12)¹² = (1.015)¹² ≈ 1.1956\nEffective rate = 1.1956 − 1 = 0.1956 = 19.56% ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo compares 10% per year compounded quarterly versus 10.2% per year compounded annually. Which has the higher effective rate?',
          answer: 'Quarterly: (1 + 0.10/4)⁴ − 1 = (1.025)⁴ − 1 ≈ 10.38%\nAnnual: 10.2%\nThe quarterly compounded rate is higher at 10.38%.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between nominal and effective interest rates and how to convert between them using the compounding formula" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FUTURE VALUE ANNUITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'future-value-annuities',
      title: 'Future Value Annuities',
      icon: 'FV',
      explanation:
        `<p style="margin-bottom:16px;">An annuity is a series of equal regular payments made at equal time intervals. A <strong>future value annuity</strong> calculates how much a series of regular deposits will grow to over time. The formula is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Payments are assumed to start one period from now and end after n periods</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('regular payment x')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interest per period i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('future value F')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Variable reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">F — Future value</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The total accumulated value of all deposits plus interest at the end of n periods.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">x — Regular payment</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The fixed amount deposited at the end of each period.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Interest per period</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The nominal annual rate divided by the number of compounding periods per year (e.g. 9% ÷ 12 = 0.0075 per month).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Number of payments</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The total number of equal payments made (e.g. 5 years × 12 months = 60 payments).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Key assumption</p>` +
        `<p style="margin:0;color:#1e3a8a;">The future value annuity formula assumes payments are made at the <strong>end</strong> of each period. The first payment earns interest for n − 1 periods and the last payment earns no interest. The ${or('interest rate per period i')} must always match the compounding frequency — if you deposit monthly, use the monthly rate.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato deposits R1 500 at the end of each month into an account earning 9% per year compounded monthly. Find the total value after 5 years.',
          answer: `${gr('F')} ≈ R113 130`,
          steps: [
            `Identify the ${or('interest rate per period')}: ${or('i')} = 0.09 ÷ 12 = ${or('0.0075')} per month`,
            `Determine the number of payments: n = 5 × 12 = 60 months`,
            `Write down the formula: ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}`,
            `Substitute: ${gr('F')} = ${bl('1 500')} × [(1 + ${or('0.0075')})⁶⁰ − 1] ÷ ${or('0.0075')}`,
            `Calculate (1.0075)⁶⁰ ≈ 1.5657`,
            `Numerator: 1.5657 − 1 = 0.5657`,
            `Divide: 0.5657 ÷ ${or('0.0075')} ≈ 75.42`,
            `Calculate: ${gr('F')} = ${bl('1 500')} × 75.42 ≈ ${gr('R113 130')}`,
          ],
        },
        {
          question: 'Thabo saves R2 000 per month at 8% per year compounded monthly for 3 years to buy a car. Find the future value of his savings.',
          answer: `${gr('F')} ≈ R81 020`,
          steps: [
            `Identify the ${or('interest rate per period')}: ${or('i')} = 0.08 ÷ 12 ≈ ${or('0.00667')} per month`,
            `Determine the number of payments: n = 3 × 12 = 36 months`,
            `Write down the formula: ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}`,
            `Substitute: ${gr('F')} = ${bl('2 000')} × [(1 + ${or('0.00667')})³⁶ − 1] ÷ ${or('0.00667')}`,
            `Calculate (1.00667)³⁶ ≈ 1.2702`,
            `Numerator: 1.2702 − 1 = 0.2702`,
            `Divide: 0.2702 ÷ ${or('0.00667')} ≈ 40.51`,
            `Calculate: ${gr('F')} = ${bl('2 000')} × 40.51 ≈ ${gr('R81 020')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Amahle deposits R800 per month into an account earning 6% per year compounded monthly for 4 years. Find the future value.',
          answer: 'R43,278.27',
          checkMode: 'auto',
          correctAnswer: 'R43278.27',
          correctAnswers: ['R43278.27', '43278.27', 'R43,278.27', '43,278.27'],
          explanation: 'i = 0.06 ÷ 12 = 0.005, n = 4 × 12 = 48\nF = 800 × [(1.005)⁴⁸ − 1] ÷ 0.005 ≈ R43,278.27 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho saves R1,200 per month at 7.2% per year compounded monthly for 10 years. Find the future value of his savings.',
          answer: 'i = 0.072 ÷ 12 = 0.006, n = 120\nF = 1 200 × [(1.006)¹²⁰ − 1] ÷ 0.006\n(1.006)¹²⁰ ≈ 2.0500\nF = 1 200 × (1.0500 ÷ 0.006) = 1 200 × 175.00 ≈ R210,000',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho wants to save R500,000 in 8 years by making equal monthly deposits into an account earning 8.4% per year compounded monthly. Find the monthly deposit needed.',
          answer: 'i = 0.084 ÷ 12 = 0.007, n = 96\n500 000 = x × [(1.007)⁹⁶ − 1] ÷ 0.007\n(1.007)⁹⁶ ≈ 1.9536\n500 000 = x × (0.9536 ÷ 0.007) = x × 136.22\nx ≈ R3,670',
          checkMode: 'self',
        },

        // ── Q19 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo deposits R2,500 per month for 5 years into an account earning 7.8% per year compounded monthly. He then stops deposits and leaves the money for another 5 years at the same rate. Find the total value at the end of the 10-year period.',
          answer: 'After 5 years of deposits: i = 0.0065, n = 60\nF = 2 500 × [(1.0065)⁶⁰ − 1] ÷ 0.0065\n(1.0065)⁶⁰ ≈ 1.4749\nF = 2 500 × (0.4749 ÷ 0.0065) ≈ R182,654\nThis then grows for another 5 years: 182 654 × (1.0065)⁶⁰ ≈ 182 654 × 1.4749 ≈ R269,393',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining future value annuities with worked examples on monthly savings and investment growth using the annuity formula" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PRESENT VALUE ANNUITIES AND BOND REPAYMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'present-value-annuities',
      title: 'Present Value Annuities and Bond Repayments',
      icon: 'PV',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>present value annuity</strong> calculates the lump sum needed now (the present value) to fund a series of equal future payments. The formula is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('P')} = ${or('x')} × [1 − (1 + i)⁻ⁿ] ÷ i</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">This directly applies to bonds and loans — the loan amount is ${bl('P')} and the monthly repayment is ${or('x')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('loan amount P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('monthly repayment x')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('outstanding balance')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Variable reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Present value / Loan amount</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The lump sum borrowed or needed now to fund the series of payments.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">x — Regular payment</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The fixed monthly repayment or withdrawal amount.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">i — Interest per period</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The nominal annual rate divided by the number of compounding periods per year.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Number of payments</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The total number of equal repayments over the loan term.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the outstanding balance</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#166534;">To find the ${gr('outstanding balance')} after k payments, calculate the present value of the <strong>remaining</strong> payments: use the same repayment amount ${or('x')} and the remaining number of periods (n − k). This gives the lump sum that would settle the loan at that point.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rearranging the formula</p>` +
        `<p style="margin:0;color:#1e3a8a;">If you know ${bl('P')} and need ${or('x')}, rearrange: ${or('x')} = ${bl('P')} × i ÷ [1 − (1 + i)⁻ⁿ]. If you know the repayment and need the number of months, isolate (1 + i)⁻ⁿ, then take logs and apply the power law — exactly as in Section 2.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle takes out a loan of R250 000 at 11% per year compounded monthly over 20 years. Find her monthly repayment.',
          answer: `${or('x')} ≈ R2 584 per month`,
          steps: [
            `Identify the interest rate per period: i = 0.11 ÷ 12 ≈ 0.009167 per month`,
            `Determine the number of payments: n = 20 × 12 = 240 months`,
            `Write the formula: ${bl('P')} = ${or('x')} × [1 − (1 + i)⁻ⁿ] ÷ i`,
            `Substitute: ${bl('250 000')} = ${or('x')} × [1 − (1.009167)⁻²⁴⁰] ÷ 0.009167`,
            `Calculate (1.009167)⁻²⁴⁰ ≈ 0.1130`,
            `Numerator: 1 − 0.1130 = 0.8870`,
            `Divide: 0.8870 ÷ 0.009167 ≈ 96.76`,
            `Rearrange to solve for ${or('x')}: ${or('x')} = ${bl('250 000')} ÷ 96.76 ≈ ${or('R2 584')} per month`,
          ],
        },
        {
          question: 'Sipho takes a loan of R180 000 at 9% per year compounded monthly and repays R2 000 per month. Find how many months it takes to repay the loan.',
          answer: `n ≈ 151 months`,
          steps: [
            `Identify the interest rate per period: i = 0.09 ÷ 12 = 0.0075 per month`,
            `Set up the equation: ${bl('180 000')} = ${or('2 000')} × [1 − (1.0075)⁻ⁿ] ÷ 0.0075`,
            `Multiply both sides by 0.0075: ${bl('180 000')} × 0.0075 = ${or('2 000')} × [1 − (1.0075)⁻ⁿ]`,
            `Divide both sides by ${or('2 000')}: 0.675 = 1 − (1.0075)⁻ⁿ`,
            `Rearrange: (1.0075)⁻ⁿ = 1 − 0.675 = 0.325`,
            `Take log of both sides: −n · log(1.0075) = log(0.325)`,
            `Apply the power law and solve: n = −log(0.325) ÷ log(1.0075) ≈ 0.4881 ÷ 0.003244 ≈ 150.46, rounded up to <strong>151 months</strong> (the loan needs one more partial payment to be fully repaid)`,
          ],
        },
        {
          question: 'Lerato borrowed R500 000 at 10% per year compounded monthly over 20 years. Find the outstanding balance after 5 years (60 payments).',
          answer: `${gr('Outstanding balance')} ≈ R449 086`,
          steps: [
            `Step 1 — Find the monthly repayment. i = 0.10 ÷ 12 ≈ 0.008333 per month, n = 240 months`,
            `${bl('500 000')} = ${or('x')} × [1 − (1.008333)⁻²⁴⁰] ÷ 0.008333`,
            `(1.008333)⁻²⁴⁰ ≈ 0.1364; numerator = 1 − 0.1364 = 0.8636; 0.8636 ÷ 0.008333 ≈ 103.63`,
            `${or('x')} = ${bl('500 000')} ÷ 103.63 ≈ ${or('R4 825')} per month`,
            `Step 2 — Find the ${gr('outstanding balance')} after 60 payments. Payments remaining: 240 − 60 = 180`,
            `${gr('Outstanding balance')} = ${or('4 825')} × [1 − (1.008333)⁻¹⁸⁰] ÷ 0.008333`,
            `(1.008333)⁻¹⁸⁰ ≈ 0.2245; numerator = 1 − 0.2245 = 0.7755; 0.7755 ÷ 0.008333 ≈ 93.06`,
            `${gr('Outstanding balance')} = ${or('4 825')} × 93.06 ≈ ${gr('R449 086')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q12 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Lerato takes a loan of R100,000 at 12% per year compounded monthly over 10 years. Find her monthly repayment.',
          answer: 'R1,434.71',
          checkMode: 'auto',
          correctAnswer: 'R1434.71',
          correctAnswers: ['R1434.71', '1434.71', 'R1,434.71', '1,434.71'],
          explanation: 'i = 0.12 ÷ 12 = 0.01, n = 120\nx = 100 000 × 0.01 ÷ [1 − (1.01)⁻¹²⁰] ≈ 1 000 ÷ 0.6971 ≈ R1,434.71 ✓',
        },

        // ── Q13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo takes a loan of R50,000 at 9% per year compounded monthly and repays R800 per month. How many months will it take to repay?',
          answer: 'approximately 85 months',
          checkMode: 'auto',
          correctAnswer: '85',
          correctAnswers: ['85', 'approximately 85 months', '85 months', '≈ 85 months'],
          explanation: '50 000 = 800 × [1 − (1.0075)⁻ⁿ] ÷ 0.0075\nSolving: (1.0075)⁻ⁿ = 0.53125\nn = log(0.53125) ÷ (−log(1.0075)) ≈ 84.65, rounded up to 85 months ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle borrowed R320,000 at 10.5% per year compounded monthly over 15 years. Calculate the total amount paid back over the full term and the total interest paid.',
          answer: 'i = 0.105 ÷ 12 = 0.00875, n = 180\nMonthly repayment = 320 000 × 0.00875 ÷ [1 − (1.00875)⁻¹⁸⁰] ≈ R3,540\nTotal paid = 3 540 × 180 = R637,200\nTotal interest = 637 200 − 320 000 = R317,200',
          checkMode: 'self',
        },

        // ── Q16 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says doubling the monthly repayment on a bond always halves the repayment period. Is she correct? Explain.',
          answer: 'No — because of compound interest, doubling the repayment reduces the term by more than half, since a larger payment clears the principal faster and reduces the total interest accumulated.',
          checkMode: 'self',
        },

        // ── Q20 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle critically compares two loan options for R200,000: Option A at 9% per year compounded monthly over 20 years, Option B at 10% per year compounded monthly over 15 years. Find the monthly repayment and total repayment for each option, then state which is cheaper overall and why.',
          answer: 'Option A: i = 0.0075, n = 240\nx = 200 000 × 0.0075 ÷ [1 − (1.0075)⁻²⁴⁰] ≈ R1,799\nTotal = 1 799 × 240 = R431,760\n\nOption B: i = 0.00833, n = 180\nx = 200 000 × 0.00833 ÷ [1 − (1.00833)⁻¹⁸⁰] ≈ R2,149\nTotal = 2 149 × 180 = R386,820\n\nOption B is cheaper overall despite higher monthly payments, since the shorter term means significantly less total interest paid.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining present value annuities and bond repayments with worked examples on monthly repayments outstanding balance and solving for the number of payments" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — SINKING FUNDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sinking-funds',
      title: 'Sinking Funds',
      icon: 'SF',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>sinking fund</strong> is a savings plan set up to reach a known target amount by a future date — typically so a business can replace an asset (a machine, vehicle, or piece of equipment) once it wears out. A sinking fund is not a new formula: it combines two formulae you already know. <strong>Compound growth</strong> (Section 1) is used to inflate today's replacement cost into tomorrow's replacement cost, and the <strong>future value annuity</strong> formula (Section 4) is then used to work out the regular deposit that will grow to meet that inflated target.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known amount')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rate (inflation or interest)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated result')}</span>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0 0 6px 0;">Step 1 (growth): ${gr('C future')} = ${bl('C')}(1 + ${or('f')})ⁿ &nbsp;&nbsp;→&nbsp;&nbsp; Step 2 (annuity): ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin:0;">The output of Step 1 becomes the target ${bl('F')} you substitute into Step 2, which you then solve for ${gr('x')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identify what you're given:</strong> the current cost ${bl('C')}, the inflation/growth rate ${or('f')}, the number of years n until the asset must be replaced, and the interest rate ${or('i')} earned by the sinking fund.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>STEP 1 — Inflate the replacement cost:</strong> use the compound growth formula from Section 1 to grow today's cost ${bl('C')} forward by n years at the inflation rate ${or('f')}: ${gr('future cost')} = ${bl('C')}(1 + ${or('f')})ⁿ.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>If a trade-in or scrap value applies:</strong> subtract it from the inflated cost before continuing — ${gr('F')} = ${gr('future cost')} − trade-in value. The fund only needs to cover the shortfall, not the full replacement cost.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>STEP 2 — Solve for the deposit:</strong> treat ${gr('F')} as the target future value of a savings annuity (Section 4) and solve ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')} for the regular deposit: ${bl('x')} = ${gr('F')} × ${or('i')} ÷ [(1 + ${or('i')})ⁿ − 1].</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Variable reference</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">C — Current cost</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">What the asset would cost to replace today, before inflation is applied.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">f — Inflation rate</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The annual rate at which the replacement cost itself grows — used only in Step 1.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">F — Sinking fund target</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The future value the fund must reach — the inflated replacement cost, less any trade-in value.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Interest per period</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The sinking fund's own interest rate per period — used only in Step 2, and usually different from ${or('f')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">x — Required deposit</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">The regular (usually monthly) deposit into the sinking fund — this is what Step 2 solves for.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Accounting for a trade-in or scrap value</p>` +
        `<p style="margin:0;color:#166534;">If the old asset can be traded in or sold for scrap when it's replaced, that money reduces how much the sinking fund needs to provide. Always subtract the trade-in or scrap value from the inflated replacement cost <strong>before</strong> using it as the target ${gr('F')} in Step 2 — do not apply it to the current cost ${bl('C')} before inflating.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sinking fund vs loan annuity</p>` +
        `<p style="margin:0;color:#1e3a8a;">A sinking fund and a loan repayment (Section 5) both use a series of equal regular payments, but they run in opposite directions. A sinking fund starts at zero and <strong>grows</strong> toward a future target — it uses the future value annuity formula. A loan starts at a known present amount and <strong>shrinks</strong> as it's paid off — it uses the present value annuity formula. One builds up to a future amount; the other pays down an existing one.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A school wants to save R120 000 to buy a replacement minibus in 4 years. They set up a sinking fund, depositing equal monthly amounts into an account earning 7% per year compounded monthly. Find the monthly deposit needed.',
          answer: `${bl('x')} ≈ R2 173.55 per month`,
          steps: [
            `No inflation is mentioned, so the target is already the future amount: ${gr('F')} = R120 000`,
            `Identify the ${or('interest rate per period')}: ${or('i')} = 0.07 ÷ 12 ≈ ${or('0.005833')} per month`,
            `Determine the number of payments: n = 4 × 12 = 48 months`,
            `Write the formula and solve for ${bl('x')}: ${bl('x')} = ${gr('F')} × ${or('i')} ÷ [(1 + ${or('i')})ⁿ − 1]`,
            `Calculate (1.005833)⁴⁸ ≈ 1.3221; denominator = 1.3221 − 1 = 0.3221`,
            `Substitute: ${bl('x')} = ${gr('120 000')} × ${or('0.005833')} ÷ 0.3221 ≈ 700.00 ÷ 0.3221`,
            `Calculate: ${bl('x')} ≈ ${bl('R2 173.55')} per month`,
          ],
        },
        {
          question: 'A factory\'s current machine costs R350 000. Due to inflation of 6.5% per year, the replacement cost will be higher in 6 years\' time. The factory sets up a sinking fund earning 8.4% per year compounded monthly to cover the future replacement cost. Find the required monthly deposit.',
          answer: `${bl('x')} ≈ R5 479.40 per month`,
          steps: [
            `Step 1 — inflate the current cost: ${gr('future cost')} = ${bl('350 000')}(1 + ${or('0.065')})⁶`,
            `Calculate (1.065)⁶ ≈ 1.4591`,
            `${gr('future cost')} = ${bl('350 000')} × 1.4591 ≈ ${gr('R510 699.80')}`,
            `Step 2 — treat this as the sinking fund target: ${gr('F')} = R510 699.80`,
            `Identify the ${or('interest rate per period')}: ${or('i')} = 0.084 ÷ 12 = ${or('0.007')} per month; n = 6 × 12 = 72 months`,
            `Calculate (1.007)⁷² ≈ 1.6524; denominator = 1.6524 − 1 = 0.6524`,
            `Solve for ${bl('x')}: ${bl('x')} = ${gr('510 699.80')} × ${or('0.007')} ÷ 0.6524 ≈ 3 574.90 ÷ 0.6524`,
            `Calculate: ${bl('x')} ≈ ${bl('R5 479.40')} per month`,
          ],
        },
        {
          question: 'A delivery company\'s truck currently costs R480 000. It inflates at 6% per year, and the company will replace the truck in 5 years\' time, trading in the old truck for an estimated R60 000 at that point. The sinking fund earns 9.6% per year compounded monthly. Find the required monthly deposit.',
          answer: `${bl('x')} ≈ R7 600.09 per month`,
          steps: [
            `Step 1 — inflate the current cost: ${gr('future cost')} = ${bl('480 000')}(1 + ${or('0.06')})⁵`,
            `Calculate (1.06)⁵ ≈ 1.3382`,
            `${gr('future cost')} = ${bl('480 000')} × 1.3382 ≈ ${gr('R642 348.28')}`,
            `Subtract the trade-in value to find the sinking fund target: ${gr('F')} = R642 348.28 − R60 000 = ${gr('R582 348.28')}`,
            `Step 2 — identify the ${or('interest rate per period')}: ${or('i')} = 0.096 ÷ 12 = ${or('0.008')} per month; n = 5 × 12 = 60 months`,
            `Calculate (1.008)⁶⁰ ≈ 1.6130; denominator = 1.6130 − 1 = 0.6130`,
            `Solve for ${bl('x')}: ${bl('x')} = ${gr('582 348.28')} × ${or('0.008')} ÷ 0.6130 ≈ 4 658.79 ÷ 0.6130`,
            `Calculate: ${bl('x')} ≈ ${bl('R7 600.09')} per month`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q21 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A gym needs to replace fitness equipment worth R80,000 in 3 years. They set up a sinking fund, depositing equal monthly amounts into an account earning 7.2% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).',
          answer: 'R1,997.49',
          checkMode: 'auto',
          correctAnswer: 'R1997.49',
          correctAnswers: ['R1997.49', '1997.49', 'R1,997.49', '1,997.49'],
          explanation: 'i = 0.072 ÷ 12 = 0.006, n = 36, F = 80 000\n80 000 = x × [(1.006)³⁶ − 1] ÷ 0.006\n(1.006)³⁶ ≈ 1.2403\nx ≈ R1,997.49 ✓',
        },

        // ── Q22 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A bakery\'s oven currently costs R150,000. Due to inflation of 5.5% per year, the replacement cost will be higher in 4 years\' time. The bakery sets up a sinking fund earning 7.8% per year compounded monthly to cover the future replacement cost. Find the required monthly deposit (to the nearest cent). First find the future replacement cost.',
          answer: 'R3,311.22',
          checkMode: 'auto',
          correctAnswer: 'R3311.22',
          correctAnswers: ['R3311.22', '3311.22', 'R3,311.22', '3,311.22'],
          explanation: 'Future cost = 150 000(1.055)⁴ ≈ R185,823.70\ni = 0.078 ÷ 12 = 0.0065, n = 48, F = 185 823.70\n185 823.70 = x × [(1.0065)⁴⁸ − 1] ÷ 0.0065\nx ≈ R3,311.22 ✓',
        },

        // ── Q23 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A construction company\'s excavator currently costs R540,000. Due to inflation of 7% per year, the replacement cost will be higher in 6 years\' time. The company expects to trade in the old excavator for R90,000 at that point. They set up a sinking fund earning 10.2% per year compounded monthly to cover the shortfall. Find the required monthly deposit, and explain in one sentence how this problem differs from a plain loan repayment calculation.',
          answer: 'Future cost = 540 000(1.07)⁶ ≈ R810,394.39\nSinking fund target: F = 810 394.39 − 90 000 = R720,394.39\ni = 0.102 ÷ 12 = 0.0085, n = 72\n720 394.39 = x × [(1.0085)⁷² − 1] ÷ 0.0085\nx ≈ R7,295.33 per month\nUnlike a loan repayment, which uses the present value annuity formula to pay down a known present amount, this problem uses the future value annuity formula because the fund starts at zero and must grow to reach a future target.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining sinking funds, inflating a future replacement cost with compound growth, and using the future value annuity formula to find the required regular deposit" />',
    },
  ],

  resultsConfig: {
    totalMarks: 23,
    messages: [
      { minScore: 23, message: 'Outstanding! You have mastered finance.' },
      { minScore: 17, message: 'Great work!' },
      { minScore: 12, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 23, message: 'Outstanding! You have mastered finance.' },
    { minScore: 17, message: 'Great work!' },
    { minScore: 12, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — no diagrams, pure formula/word-problem content
    // Block 1 (Q1-4):   Future value annuity (savings)
    // Block 2 (Q5-7):   Present value annuity → monthly loan repayment
    // Block 3 (Q8-9):   Number of payments via logarithms
    // Block 4 (Q10-11): Outstanding balance on a loan
    // Block 5 (Q12-14): Sinking funds
    // Block 6 (Q15-20): Combined multi-step problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Future value annuity (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Thabo deposits R600 at the end of each month into an account earning 6% per year compounded monthly. Find the future value of his savings after 2 years (to the nearest cent).', checkMode: 'auto', correctAnswer: '15259.17', correctAnswers: ['R15259.17', 'R15 259.17', '15259.17', '15 259.17'], answer: 'R15 259.17', explanation: 'i = 0.06 ÷ 12 = 0.005, n = 24\nF = 600 × [(1.005)²⁴ − 1] ÷ 0.005 ≈ R15 259.17 ✓' },
        { difficulty: 'Easy', question: 'Lerato deposits R500 at the end of each month into an account earning 7.2% per year compounded monthly. Find the future value of her savings after 3 years (to the nearest cent).', checkMode: 'auto', correctAnswer: '20025.13', correctAnswers: ['R20025.13', 'R20 025.13', '20025.13', '20 025.13'], answer: 'R20 025.13', explanation: 'i = 0.072 ÷ 12 = 0.006, n = 36\nF = 500 × [(1.006)³⁶ − 1] ÷ 0.006 ≈ R20 025.13 ✓' },
        { difficulty: 'Medium', question: 'Sipho saves R1,500 per month at 7.8% per year compounded monthly for 5 years. Find the future value of his savings (to the nearest cent).', checkMode: 'auto', correctAnswer: '109642.61', correctAnswers: ['R109642.61', 'R109 642.61', '109642.61', '109 642.61'], answer: 'R109 642.61', explanation: 'i = 0.078 ÷ 12 = 0.0065, n = 60\nF = 1 500 × [(1.0065)⁶⁰ − 1] ÷ 0.0065 ≈ R109 642.61 ✓' },
        { difficulty: 'Medium', question: 'Amahle deposits R2,000 per month into an account earning 8.4% per year compounded monthly for 6 years. Find the future value of the account (to the nearest cent).', checkMode: 'auto', correctAnswer: '186407.28', correctAnswers: ['R186407.28', 'R186 407.28', '186407.28', '186 407.28'], answer: 'R186 407.28', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 72\nF = 2 000 × [(1.007)⁷² − 1] ÷ 0.007 ≈ R186 407.28 ✓' },

        // Block 2 — Present value annuity → monthly repayment (Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Sipho takes a loan of R40,000 at 12% per year compounded monthly over 3 years. Find his monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1328.57', correctAnswers: ['R1328.57', 'R1 328.57', '1328.57', '1 328.57'], answer: 'R1 328.57', explanation: 'i = 0.12 ÷ 12 = 0.01, n = 36\nx = 40 000 × 0.01 ÷ [1 − (1.01)⁻³⁶] ≈ R1 328.57 ✓' },
        { difficulty: 'Medium', question: 'Thabo takes out a loan of R150,000 at 10.5% per year compounded monthly over 10 years. Find his monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '2024.02', correctAnswers: ['R2024.02', 'R2 024.02', '2024.02', '2 024.02'], answer: 'R2 024.02', explanation: 'i = 0.105 ÷ 12 = 0.00875, n = 120\nx = 150 000 × 0.00875 ÷ [1 − (1.00875)⁻¹²⁰] ≈ R2 024.02 ✓' },
        { difficulty: 'Medium', question: 'Lerato borrows R60,000 at 9% per year compounded monthly over 5 years. Find her monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1245.50', correctAnswers: ['R1245.50', 'R1 245.50', '1245.50', '1 245.50', 'R1245.5', '1245.5'], answer: 'R1 245.50', explanation: 'i = 0.09 ÷ 12 = 0.0075, n = 60\nx = 60 000 × 0.0075 ÷ [1 − (1.0075)⁻⁶⁰] ≈ R1 245.50 ✓' },

        // Block 3 — Number of payments via logarithms (Medium, Hard)
        { difficulty: 'Medium', question: 'Amahle takes a loan of R90,000 at 10.5% per year compounded monthly and repays R1,800 per month. Find how many months it will take to repay the loan (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '67', correctAnswers: ['67', '67 months', 'approximately 67 months', '≈ 67 months'], answer: '67 months', explanation: '90 000 = 1 800 × [1 − (1.00875)⁻ⁿ] ÷ 0.00875\n0.4375 = 1 − (1.00875)⁻ⁿ\n(1.00875)⁻ⁿ = 0.5625\nn = −log(0.5625) ÷ log(1.00875) ≈ 66.04, so 67 months ✓' },
        { difficulty: 'Hard', question: 'Sipho wants to save R250,000 by depositing R3,000 per month into an account earning 7.8% per year compounded monthly. Find how many months it will take (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '67', correctAnswers: ['67', '67 months', 'approximately 67 months', '≈ 67 months'], answer: '67 months', explanation: '250 000 = 3 000 × [(1.0065)ⁿ − 1] ÷ 0.0065\n0.5417 = (1.0065)ⁿ − 1\n(1.0065)ⁿ = 1.5417\nn = log(1.5417) ÷ log(1.0065) ≈ 66.81, so 67 months ✓' },

        // Block 4 — Outstanding balance on a loan (Medium, Hard)
        { difficulty: 'Medium', question: 'Thabo borrowed R300,000 at 11% per year compounded monthly over 15 years. Find the outstanding balance after 6 years (72 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '233134.31', correctAnswers: ['R233134.31', 'R233 134.31', '233134.31', '233 134.31'], answer: 'R233 134.31', explanation: 'i = 0.11 ÷ 12 ≈ 0.009167, n = 180\nx = 300 000 × 0.009167 ÷ [1 − (1.009167)⁻¹⁸⁰] ≈ R3 409.79\nRemaining payments = 180 − 72 = 108\nOutstanding balance = 3 409.79 × [1 − (1.009167)⁻¹⁰⁸] ÷ 0.009167 ≈ R233 134.31 ✓' },
        { difficulty: 'Hard', question: 'Amahle borrowed R220,000 at 9.6% per year compounded monthly over 20 years. Find the outstanding balance after 8 years (96 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '176188.53', correctAnswers: ['R176188.53', 'R176 188.53', '176188.53', '176 188.53'], answer: 'R176 188.53', explanation: 'i = 0.096 ÷ 12 = 0.008, n = 240\nx = 220 000 × 0.008 ÷ [1 − (1.008)⁻²⁴⁰] ≈ R2 065.08\nRemaining payments = 240 − 96 = 144\nOutstanding balance = 2 065.08 × [1 − (1.008)⁻¹⁴⁴] ÷ 0.008 ≈ R176 188.53 ✓' },

        // Block 5 — Sinking funds (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'A business needs to replace a machine worth R90,000 in 3 years. They set up a sinking fund, depositing equal monthly amounts into an account earning 6% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '2287.97', correctAnswers: ['R2287.97', 'R2 287.97', '2287.97', '2 287.97'], answer: 'R2 287.97', explanation: 'i = 0.06 ÷ 12 = 0.005, n = 36, F = 90 000\n90 000 = x × [(1.005)³⁶ − 1] ÷ 0.005\nx ≈ R2 287.97 ✓' },
        { difficulty: 'Medium', question: 'A company sets up a sinking fund to replace equipment that will cost R450,000 in 5 years. They deposit equal monthly amounts into an account earning 8.5% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '6044.94', correctAnswers: ['R6044.94', 'R6 044.94', '6044.94', '6 044.94'], answer: 'R6 044.94', explanation: 'i = 0.085 ÷ 12 ≈ 0.007083, n = 60, F = 450 000\n450 000 = x × [(1.007083)⁶⁰ − 1] ÷ 0.007083\nx ≈ R6 044.94 ✓' },
        { difficulty: 'Hard', question: 'A factory machine currently costs R500,000. Due to inflation of 7% per year, the replacement cost will be higher in 6 years\' time. The factory sets up a sinking fund earning 9% per year compounded monthly to cover the future replacement cost. Find the required monthly deposit (to the nearest cent). First find the future replacement cost.', checkMode: 'auto', correctAnswer: '7898.00', correctAnswers: ['R7898.00', 'R7 898.00', '7898.00', '7 898.00', 'R7898', '7898'], answer: 'R7 898.00', explanation: 'Future cost = 500 000(1.07)⁶ ≈ R750 365.18\ni = 0.09 ÷ 12 = 0.0075, n = 72, F = 750 365.18\n750 365.18 = x × [(1.0075)⁷² − 1] ÷ 0.0075\nx ≈ R7 898.00 ✓' },

        // Block 6 — Combined multi-step problems (Medium, Hard, Hard, Hard, Hard, Hard)
        { difficulty: 'Medium', question: 'Lerato deposits R1,800 per month for 4 years into an account earning 8.4% per year compounded monthly. She then stops making deposits and leaves the money to grow for another 3 years at the same rate. Find the total value at the end of the 7-year period (to the nearest cent).', checkMode: 'auto', correctAnswer: '131459.87', correctAnswers: ['R131459.87', 'R131 459.87', '131459.87', '131 459.87'], answer: 'R131 459.87', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 48\nF₁ = 1 800 × [(1.007)⁴⁸ − 1] ÷ 0.007 ≈ R102 266.23\nThis then grows for 3 more years (n = 36): F₂ = 102 266.23 × (1.007)³⁶ ≈ R131 459.87 ✓' },
        { difficulty: 'Hard', question: 'Thabo borrows R260,000 at 10.8% per year compounded monthly over 18 years. Calculate the total amount he pays back over the full term and the total interest paid.', checkMode: 'self', answer: 'i = 0.108 ÷ 12 = 0.009, n = 216\nMonthly repayment = 260 000 × 0.009 ÷ [1 − (1.009)⁻²¹⁶] ≈ R2 734.86\nTotal paid = 2 734.86 × 216 ≈ R590 729.76\nTotal interest = 590 729.76 − 260 000 ≈ R330 729.76' },
        { difficulty: 'Hard', question: 'Sipho says that increasing the number of monthly payments on a loan always reduces the monthly repayment amount by more than it increases the total interest paid. Is he correct? Explain using the present value annuity formula.', checkMode: 'self', answer: 'Not necessarily — while a longer term does lower the monthly repayment x (since n increases in the denominator [1 − (1 + i)⁻ⁿ] ÷ i), the total interest paid usually increases substantially because interest accumulates over many more periods. The trade-off depends on the interest rate and how much n increases; a lower monthly repayment does not automatically mean a better overall deal.' },
        { difficulty: 'Hard', question: 'Amahle can afford a monthly bond repayment of R4,500. If the bank offers a rate of 11.4% per year compounded monthly over 15 years, find the maximum amount she can borrow (to the nearest cent).', checkMode: 'auto', correctAnswer: '387316.64', correctAnswers: ['R387316.64', 'R387 316.64', '387316.64', '387 316.64'], answer: 'R387 316.64', explanation: 'i = 0.114 ÷ 12 = 0.0095, n = 180\nP = 4 500 × [1 − (1.0095)⁻¹⁸⁰] ÷ 0.0095 ≈ R387 316.64 ✓' },
        { difficulty: 'Hard', question: 'Lerato compares two loan options for R180,000: Option A at 9% per year compounded monthly over 20 years, Option B at 10.8% per year compounded monthly over 15 years. Find the monthly repayment and total amount repaid for each option, then state which option has the lower total repayment.', checkMode: 'self', answer: 'Option A: i = 0.0075, n = 240\nx = 180 000 × 0.0075 ÷ [1 − (1.0075)⁻²⁴⁰] ≈ R1 619.51\nTotal = 1 619.51 × 240 ≈ R388 682.40\n\nOption B: i = 0.009, n = 180\nx = 180 000 × 0.009 ÷ [1 − (1.009)⁻¹⁸⁰] ≈ R2 023.33\nTotal = 2 023.33 × 180 ≈ R364 199.40\n\nOption B has the lower total repayment (≈ R364 199.40 vs ≈ R388 682.40), despite the higher monthly instalment, because the shorter term means less total interest accumulates.' },
        { difficulty: 'Hard', question: 'A sinking fund and a present value annuity both use a series of regular payments, but they solve for different unknowns and grow in opposite directions. Explain the key difference between how a sinking fund and a loan repayment annuity are set up and used.', checkMode: 'self', answer: 'A sinking fund uses the future value annuity formula F = x[(1+i)ⁿ − 1] ÷ i to find the regular deposit x needed so that a fund GROWS to a known future target F (e.g. to replace an asset). A loan repayment uses the present value annuity formula P = x[1 − (1+i)⁻ⁿ] ÷ i to find the regular repayment x needed so that a known present lump sum P (the loan) is paid off, with the outstanding balance DECREASING over time. Both use equal periodic payments and the same compound interest principles, but one builds up to a future amount while the other pays down an existing amount.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have fully mastered annuities, loan repayments, and sinking funds.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the combined multi-step problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on future and present value annuities, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Future value annuity (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Sipho deposits R700 at the end of each month into an account earning 6% per year compounded monthly. Find the future value of his savings after 1.5 years (18 months), to the nearest cent.', checkMode: 'auto', correctAnswer: '13150.05', correctAnswers: ['R13150.05', 'R13 150.05', '13150.05', '13 150.05'], answer: 'R13 150.05', explanation: 'i = 0.06 ÷ 12 = 0.005, n = 18\nF = 700 × [(1.005)¹⁸ − 1] ÷ 0.005 ≈ R13 150.05 ✓' },
        { difficulty: 'Easy', question: 'Amahle deposits R650 at the end of each month into an account earning 6.6% per year compounded monthly. Find the future value of her savings after 30 months, to the nearest cent.', checkMode: 'auto', correctAnswer: '21138.01', correctAnswers: ['R21138.01', 'R21 138.01', '21138.01', '21 138.01'], answer: 'R21 138.01', explanation: 'i = 0.066 ÷ 12 = 0.0055, n = 30\nF = 650 × [(1.0055)³⁰ − 1] ÷ 0.0055 ≈ R21 138.01 ✓' },
        { difficulty: 'Medium', question: 'Thabo saves R1,300 per month at 7.2% per year compounded monthly for 4.5 years (54 months). Find the future value of his savings (to the nearest cent).', checkMode: 'auto', correctAnswer: '82617.03', correctAnswers: ['R82617.03', 'R82 617.03', '82617.03', '82 617.03'], answer: 'R82 617.03', explanation: 'i = 0.072 ÷ 12 = 0.006, n = 54\nF = 1 300 × [(1.006)⁵⁴ − 1] ÷ 0.006 ≈ R82 617.03 ✓' },
        { difficulty: 'Medium', question: 'Lerato deposits R2,000 per month into an account earning 10.8% per year compounded monthly for 5 years. Find the future value of the account (to the nearest cent).', checkMode: 'auto', correctAnswer: '158192.63', correctAnswers: ['R158192.63', 'R158 192.63', '158192.63', '158 192.63'], answer: 'R158 192.63', explanation: 'i = 0.108 ÷ 12 = 0.009, n = 60\nF = 2 000 × [(1.009)⁶⁰ − 1] ÷ 0.009 ≈ R158 192.63 ✓' },

        // Block 2 — Present value annuity → monthly repayment (Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Amahle takes a loan of R55,000 at 10.8% per year compounded monthly over 4 years. Find her monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1416.17', correctAnswers: ['R1416.17', 'R1 416.17', '1416.17', '1 416.17'], answer: 'R1 416.17', explanation: 'i = 0.108 ÷ 12 = 0.009, n = 48\nx = 55 000 × 0.009 ÷ [1 − (1.009)⁻⁴⁸] ≈ R1 416.17 ✓' },
        { difficulty: 'Medium', question: 'Lerato takes out a loan of R180,000 at 11.4% per year compounded monthly over 12 years. Find her monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '2299.21', correctAnswers: ['R2299.21', 'R2 299.21', '2299.21', '2 299.21'], answer: 'R2 299.21', explanation: 'i = 0.114 ÷ 12 = 0.0095, n = 144\nx = 180 000 × 0.0095 ÷ [1 − (1.0095)⁻¹⁴⁴] ≈ R2 299.21 ✓' },
        { difficulty: 'Medium', question: 'Sipho borrows R45,000 at 8.4% per year compounded monthly over 4 years. Find his monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1107.05', correctAnswers: ['R1107.05', 'R1 107.05', '1107.05', '1 107.05'], answer: 'R1 107.05', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 48\nx = 45 000 × 0.007 ÷ [1 − (1.007)⁻⁴⁸] ≈ R1 107.05 ✓' },

        // Block 3 — Number of payments via logarithms (Medium, Hard)
        { difficulty: 'Medium', question: 'Thabo takes a loan of R120,000 at 11.4% per year compounded monthly and repays R2,200 per month. Find how many months it will take to repay the loan (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 months', 'approximately 78 months', '≈ 78 months'], answer: '78 months', explanation: '120 000 = 2 200 × [1 − (1.0095)⁻ⁿ] ÷ 0.0095\n0.5182 = 1 − (1.0095)⁻ⁿ\n(1.0095)⁻ⁿ = 0.4818\nn = −log(0.4818) ÷ log(1.0095) ≈ 77.23, so 78 months ✓' },
        { difficulty: 'Hard', question: 'Amahle wants to save R350,000 by depositing R3,800 per month into an account earning 8.4% per year compounded monthly. Find how many months it will take (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 months', 'approximately 72 months', '≈ 72 months'], answer: '72 months', explanation: '350 000 = 3 800 × [(1.007)ⁿ − 1] ÷ 0.007\n0.6447 = (1.007)ⁿ − 1\n(1.007)ⁿ = 1.6447\nn = log(1.6447) ÷ log(1.007) ≈ 71.33, so 72 months ✓' },

        // Block 4 — Outstanding balance on a loan (Medium, Hard)
        { difficulty: 'Medium', question: 'Lerato borrowed R400,000 at 12.6% per year compounded monthly over 20 years. Find the outstanding balance after 10 years (120 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '311157.24', correctAnswers: ['R311157.24', 'R311 157.24', '311157.24', '311 157.24'], answer: 'R311 157.24', explanation: 'i = 0.126 ÷ 12 = 0.0105, n = 240\nx = 400 000 × 0.0105 ÷ [1 − (1.0105)⁻²⁴⁰] ≈ R4 572.79\nRemaining payments = 240 − 120 = 120\nOutstanding balance = 4 572.79 × [1 − (1.0105)⁻¹²⁰] ÷ 0.0105 ≈ R311 157.24 ✓' },
        { difficulty: 'Hard', question: 'Sipho borrowed R260,000 at 8.4% per year compounded monthly over 15 years. Find the outstanding balance after 7.5 years (90 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '169518.14', correctAnswers: ['R169518.14', 'R169 518.14', '169518.14', '169 518.14'], answer: 'R169 518.14', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 180\nx = 260 000 × 0.007 ÷ [1 − (1.007)⁻¹⁸⁰] ≈ R2 545.11\nRemaining payments = 180 − 90 = 90\nOutstanding balance = 2 545.11 × [1 − (1.007)⁻⁹⁰] ÷ 0.007 ≈ R169 518.14 ✓' },

        // Block 5 — Sinking funds (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'A business needs to replace equipment worth R70,000 in 2 years. They set up a sinking fund, depositing equal monthly amounts into an account earning 7.2% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '2720.43', correctAnswers: ['R2720.43', 'R2 720.43', '2720.43', '2 720.43'], answer: 'R2 720.43', explanation: 'i = 0.072 ÷ 12 = 0.006, n = 24, F = 70 000\n70 000 = x × [(1.006)²⁴ − 1] ÷ 0.006\nx ≈ R2 720.43 ✓' },
        { difficulty: 'Medium', question: 'A company sets up a sinking fund to replace machinery that will cost R380,000 in 5 years. They deposit equal monthly amounts into an account earning 7.8% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '5198.71', correctAnswers: ['R5198.71', 'R5 198.71', '5198.71', '5 198.71'], answer: 'R5 198.71', explanation: 'i = 0.078 ÷ 12 = 0.0065, n = 60, F = 380 000\n380 000 = x × [(1.0065)⁶⁰ − 1] ÷ 0.0065\nx ≈ R5 198.71 ✓' },
        { difficulty: 'Hard', question: 'A delivery company\'s truck currently costs R380,000. Due to inflation of 6.5% per year, the replacement cost will be higher in 5 years\' time. The company sets up a sinking fund earning 9.6% per year compounded monthly to cover the future replacement cost. Find the required monthly deposit (to the nearest cent). First find the future replacement cost.', checkMode: 'auto', correctAnswer: '6794.66', correctAnswers: ['R6794.66', 'R6 794.66', '6794.66', '6 794.66'], answer: 'R6 794.66', explanation: 'Future cost = 380 000(1.065)⁵ ≈ R520 632.93\ni = 0.096 ÷ 12 = 0.008, n = 60, F = 520 632.93\n520 632.93 = x × [(1.008)⁶⁰ − 1] ÷ 0.008\nx ≈ R6 794.66 ✓' },

        // Block 6 — Combined multi-step problems (Medium, Hard, Hard, Hard, Hard, Hard)
        { difficulty: 'Medium', question: 'Thabo deposits R2,200 per month for 5 years into an account earning 9% per year compounded monthly. He then stops making deposits and leaves the money to grow for another 2 years at the same rate. Find the total value at the end of the 7-year period (to the nearest cent).', checkMode: 'auto', correctAnswer: '198524.61', correctAnswers: ['R198524.61', 'R198 524.61', '198524.61', '198 524.61'], answer: 'R198 524.61', explanation: 'i = 0.09 ÷ 12 = 0.0075, n = 60\nF₁ = 2 200 × [(1.0075)⁶⁰ − 1] ÷ 0.0075 ≈ R165 933.10\nThis then grows for 2 more years (n = 24): F₂ = 165 933.10 × (1.0075)²⁴ ≈ R198 524.61 ✓' },
        { difficulty: 'Hard', question: 'Amahle borrows R340,000 at 9.6% per year compounded monthly over 15 years. Calculate the total amount she pays back over the full term and the total interest paid.', checkMode: 'self', answer: 'i = 0.096 ÷ 12 = 0.008, n = 180\nMonthly repayment = 340 000 × 0.008 ÷ [1 − (1.008)⁻¹⁸⁰] ≈ R3 570.91\nTotal paid = 3 570.91 × 180 ≈ R642 763.80\nTotal interest = 642 763.80 − 340 000 ≈ R302 763.80' },
        { difficulty: 'Hard', question: 'Lerato says that a sinking fund and a savings annuity are essentially the same thing, just with different names. Is she correct? Explain, referring to the purpose of each.', checkMode: 'self', answer: 'She is largely correct mathematically — both use the future value annuity formula F = x[(1+i)ⁿ − 1] ÷ i to calculate a regular payment that grows to a target amount. The difference is one of purpose and context: a savings annuity is typically for personal saving goals, while a sinking fund specifically refers to a business or organisation setting money aside to replace an asset or repay a future debt obligation. The underlying mathematics is identical.' },
        { difficulty: 'Hard', question: 'Sipho can afford a monthly bond repayment of R5,200. If the bank offers a rate of 10.8% per year compounded monthly over 12 years, find the maximum amount he can borrow (to the nearest cent).', checkMode: 'auto', correctAnswer: '418764.68', correctAnswers: ['R418764.68', 'R418 764.68', '418764.68', '418 764.68'], answer: 'R418 764.68', explanation: 'i = 0.108 ÷ 12 = 0.009, n = 144\nP = 5 200 × [1 − (1.009)⁻¹⁴⁴] ÷ 0.009 ≈ R418 764.68 ✓' },
        { difficulty: 'Hard', question: 'Amahle compares two loan options for R220,000: Option A at 8.4% per year compounded monthly over 20 years, Option B at 10.2% per year compounded monthly over 15 years. Find the monthly repayment and total amount repaid for each option, then state which option has the lower total repayment.', checkMode: 'self', answer: 'Option A: i = 0.007, n = 240\nx = 220 000 × 0.007 ÷ [1 − (1.007)⁻²⁴⁰] ≈ R1 895.31\nTotal = 1 895.31 × 240 ≈ R454 874.40\n\nOption B: i = 0.0085, n = 180\nx = 220 000 × 0.0085 ÷ [1 − (1.0085)⁻¹⁸⁰] ≈ R2 391.12\nTotal = 2 391.12 × 180 ≈ R430 401.60\n\nOption B has the lower total repayment (≈ R430 401.60 vs ≈ R454 874.40), despite the higher monthly instalment, because the shorter term means less total interest accumulates.' },
        { difficulty: 'Hard', question: 'Explain why the outstanding balance on a loan after k payments can be found using the present value annuity formula with the remaining number of payments (n − k), rather than by simply subtracting the payments made so far from the original loan amount.', checkMode: 'self', answer: 'Simply subtracting total payments made from the original loan amount ignores the fact that a portion of every payment goes toward interest, not toward reducing the principal — especially in early payments, where interest makes up the largest share. The outstanding balance is properly defined as the present value of all remaining future payments, discounted at the loan\'s interest rate. Using P = x[1 − (1+i)⁻⁽ⁿ⁻ᵏ⁾] ÷ i with the remaining number of payments correctly accounts for the compound interest still to be charged on the remaining balance, giving the true lump sum that would settle the loan at that point.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have fully mastered annuities, loan repayments, and sinking funds.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the combined multi-step problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on future and present value annuities, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Future value annuity (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Lerato deposits R400 at the end of each month into an account earning 8.4% per year compounded monthly. Find the future value of her savings after 2.5 years (30 months), to the nearest cent.', checkMode: 'auto', correctAnswer: '13301.48', correctAnswers: ['R13301.48', 'R13 301.48', '13301.48', '13 301.48'], answer: 'R13 301.48', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 30\nF = 400 × [(1.007)³⁰ − 1] ÷ 0.007 ≈ R13 301.48 ✓' },
        { difficulty: 'Easy', question: 'Thabo deposits R800 at the end of each month into an account earning 9% per year compounded monthly. Find the future value of his savings after 40 months, to the nearest cent.', checkMode: 'auto', correctAnswer: '37157.19', correctAnswers: ['R37157.19', 'R37 157.19', '37157.19', '37 157.19'], answer: 'R37 157.19', explanation: 'i = 0.09 ÷ 12 = 0.0075, n = 40\nF = 800 × [(1.0075)⁴⁰ − 1] ÷ 0.0075 ≈ R37 157.19 ✓' },
        { difficulty: 'Medium', question: 'Amahle saves R1,700 per month at 9% per year compounded monthly for 5.5 years (66 months). Find the future value of her savings (to the nearest cent).', checkMode: 'auto', correctAnswer: '144493.43', correctAnswers: ['R144493.43', 'R144 493.43', '144493.43', '144 493.43'], answer: 'R144 493.43', explanation: 'i = 0.09 ÷ 12 = 0.0075, n = 66\nF = 1 700 × [(1.0075)⁶⁶ − 1] ÷ 0.0075 ≈ R144 493.43 ✓' },
        { difficulty: 'Medium', question: 'Sipho deposits R2,800 per month into an account earning 9.6% per year compounded monthly for 7.5 years (90 months). Find the future value of the account (to the nearest cent).', checkMode: 'auto', correctAnswer: '366994.68', correctAnswers: ['R366994.68', 'R366 994.68', '366994.68', '366 994.68'], answer: 'R366 994.68', explanation: 'i = 0.096 ÷ 12 = 0.008, n = 90\nF = 2 800 × [(1.008)⁹⁰ − 1] ÷ 0.008 ≈ R366 994.68 ✓' },

        // Block 2 — Present value annuity → monthly repayment (Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'Thabo takes a loan of R35,000 at 11.4% per year compounded monthly over 2 years. Find his monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1637.78', correctAnswers: ['R1637.78', 'R1 637.78', '1637.78', '1 637.78'], answer: 'R1 637.78', explanation: 'i = 0.114 ÷ 12 = 0.0095, n = 24\nx = 35 000 × 0.0095 ÷ [1 − (1.0095)⁻²⁴] ≈ R1 637.78 ✓' },
        { difficulty: 'Medium', question: 'Amahle takes out a loan of R220,000 at 9.9% per year compounded monthly over 15 years. Find her monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '2350.69', correctAnswers: ['R2350.69', 'R2 350.69', '2350.69', '2 350.69'], answer: 'R2 350.69', explanation: 'i = 0.099 ÷ 12 = 0.00825, n = 180\nx = 220 000 × 0.00825 ÷ [1 − (1.00825)⁻¹⁸⁰] ≈ R2 350.69 ✓' },
        { difficulty: 'Medium', question: 'Lerato borrows R95,000 at 10.2% per year compounded monthly over 6 years. Find her monthly repayment (to the nearest cent).', checkMode: 'auto', correctAnswer: '1769.55', correctAnswers: ['R1769.55', 'R1 769.55', '1769.55', '1 769.55'], answer: 'R1 769.55', explanation: 'i = 0.102 ÷ 12 = 0.0085, n = 72\nx = 95 000 × 0.0085 ÷ [1 − (1.0085)⁻⁷²] ≈ R1 769.55 ✓' },

        // Block 3 — Number of payments via logarithms (Medium, Hard)
        { difficulty: 'Medium', question: 'Sipho takes a loan of R150,000 at 9.6% per year compounded monthly and repays R2,600 per month. Find how many months it will take to repay the loan (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 months', 'approximately 78 months', '≈ 78 months'], answer: '78 months', explanation: '150 000 = 2 600 × [1 − (1.008)⁻ⁿ] ÷ 0.008\n0.4615 = 1 − (1.008)⁻ⁿ\n(1.008)⁻ⁿ = 0.5385\nn = −log(0.5385) ÷ log(1.008) ≈ 77.69, so 78 months ✓' },
        { difficulty: 'Hard', question: 'Lerato wants to save R450,000 by depositing R4,500 per month into an account earning 9% per year compounded monthly. Find how many months it will take (round up to the nearest full month).', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75 months', 'approximately 75 months', '≈ 75 months'], answer: '75 months', explanation: '450 000 = 4 500 × [(1.0075)ⁿ − 1] ÷ 0.0075\n0.75 = (1.0075)ⁿ − 1\n(1.0075)ⁿ = 1.75\nn = log(1.75) ÷ log(1.0075) ≈ 74.89, so 75 months ✓' },

        // Block 4 — Outstanding balance on a loan (Medium, Hard)
        { difficulty: 'Medium', question: 'Amahle borrowed R600,000 at 10.8% per year compounded monthly over 25 years. Find the outstanding balance after 15 years (180 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '424104.50', correctAnswers: ['R424104.50', 'R424 104.50', '424104.50', '424 104.50', 'R424104.5', '424104.5'], answer: 'R424 104.50', explanation: 'i = 0.108 ÷ 12 = 0.009, n = 300\nx = 600 000 × 0.009 ÷ [1 − (1.009)⁻³⁰⁰] ≈ R5 794.13\nRemaining payments = 300 − 180 = 120\nOutstanding balance = 5 794.13 × [1 − (1.009)⁻¹²⁰] ÷ 0.009 ≈ R424 104.50 ✓' },
        { difficulty: 'Hard', question: 'Sipho borrowed R310,000 at 9% per year compounded monthly over 15 years. Find the outstanding balance after 8 years (96 payments), to the nearest cent. First find the monthly repayment.', checkMode: 'auto', correctAnswer: '195426.36', correctAnswers: ['R195426.36', 'R195 426.36', '195426.36', '195 426.36'], answer: 'R195 426.36', explanation: 'i = 0.09 ÷ 12 = 0.0075, n = 180\nx = 310 000 × 0.0075 ÷ [1 − (1.0075)⁻¹⁸⁰] ≈ R3 144.23\nRemaining payments = 180 − 96 = 84\nOutstanding balance = 3 144.23 × [1 − (1.0075)⁻⁸⁴] ÷ 0.0075 ≈ R195 426.36 ✓' },

        // Block 5 — Sinking funds (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'A business needs to replace equipment worth R60,000 in 2.5 years. They set up a sinking fund, depositing equal monthly amounts into an account earning 8.4% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '1804.31', correctAnswers: ['R1804.31', 'R1 804.31', '1804.31', '1 804.31'], answer: 'R1 804.31', explanation: 'i = 0.084 ÷ 12 = 0.007, n = 30, F = 60 000\n60 000 = x × [(1.007)³⁰ − 1] ÷ 0.007\nx ≈ R1 804.31 ✓' },
        { difficulty: 'Medium', question: 'A company sets up a sinking fund to replace machinery that will cost R250,000 in 4 years. They deposit equal monthly amounts into an account earning 6.6% per year compounded monthly. Find the monthly deposit needed (to the nearest cent).', checkMode: 'auto', correctAnswer: '4565.28', correctAnswers: ['R4565.28', 'R4 565.28', '4565.28', '4 565.28'], answer: 'R4 565.28', explanation: 'i = 0.066 ÷ 12 = 0.0055, n = 48, F = 250 000\n250 000 = x × [(1.0055)⁴⁸ − 1] ÷ 0.0055\nx ≈ R4 565.28 ✓' },
        { difficulty: 'Hard', question: 'A construction company\'s crane currently costs R620,000. Due to inflation of 7.5% per year, the replacement cost will be higher in 7 years\' time. The company sets up a sinking fund earning 10.2% per year compounded monthly to cover the future replacement cost. Find the required monthly deposit (to the nearest cent). First find the future replacement cost.', checkMode: 'auto', correctAnswer: '8439.45', correctAnswers: ['R8439.45', 'R8 439.45', '8439.45', '8 439.45'], answer: 'R8 439.45', explanation: 'Future cost = 620 000(1.075)⁷ ≈ R1 028 610.47\ni = 0.102 ÷ 12 = 0.0085, n = 84, F = 1 028 610.47\n1 028 610.47 = x × [(1.0085)⁸⁴ − 1] ÷ 0.0085\nx ≈ R8 439.45 ✓' },

        // Block 6 — Combined multi-step problems (Medium, Hard, Hard, Hard, Hard, Hard)
        { difficulty: 'Medium', question: 'Amahle deposits R2,500 per month for 6 years into an account earning 7.8% per year compounded monthly. She then stops making deposits and leaves the money to grow for another 4 years at the same rate. Find the total value at the end of the 10-year period (to the nearest cent).', checkMode: 'auto', correctAnswer: '311998.83', correctAnswers: ['R311998.83', 'R311 998.83', '311998.83', '311 998.83'], answer: 'R311 998.83', explanation: 'i = 0.078 ÷ 12 = 0.0065, n = 72\nF₁ = 2 500 × [(1.0065)⁷² − 1] ÷ 0.0065 ≈ R228 608.07\nThis then grows for 4 more years (n = 48): F₂ = 228 608.07 × (1.0065)⁴⁸ ≈ R311 998.83 ✓' },
        { difficulty: 'Hard', question: 'Lerato borrows R380,000 at 11.4% per year compounded monthly over 20 years. Calculate the total amount she pays back over the full term and the total interest paid.', checkMode: 'self', answer: 'i = 0.114 ÷ 12 = 0.0095, n = 240\nMonthly repayment = 380 000 × 0.0095 ÷ [1 − (1.0095)⁻²⁴⁰] ≈ R4 026.28\nTotal paid = 4 026.28 × 240 ≈ R966 307.20\nTotal interest = 966 307.20 − 380 000 ≈ R586 307.20' },
        { difficulty: 'Hard', question: 'Thabo says that if two loans have the same monthly repayment amount and the same interest rate, the loan with more payments remaining must always have a larger outstanding balance. Is he correct? Explain.', checkMode: 'self', answer: 'Yes — using the present value annuity formula, outstanding balance = x[1 − (1+i)⁻ᵐ] ÷ i, where m is the number of remaining payments. For a fixed repayment x and fixed rate i, this expression is an increasing function of m: as m grows, (1+i)⁻ᵐ shrinks toward zero, so [1 − (1+i)⁻ᵐ] grows and approaches 1. Therefore, with x and i held constant, more remaining payments always produces a larger outstanding balance.' },
        { difficulty: 'Hard', question: 'Sipho can afford a monthly bond repayment of R6,000. If the bank offers a rate of 9.6% per year compounded monthly over 13 years, find the maximum amount he can borrow (to the nearest cent).', checkMode: 'auto', correctAnswer: '533619.43', correctAnswers: ['R533619.43', 'R533 619.43', '533619.43', '533 619.43'], answer: 'R533 619.43', explanation: 'i = 0.096 ÷ 12 = 0.008, n = 156\nP = 6 000 × [1 − (1.008)⁻¹⁵⁶] ÷ 0.008 ≈ R533 619.43 ✓' },
        { difficulty: 'Hard', question: 'Thabo compares two loan options for R260,000: Option A at 9.6% per year compounded monthly over 20 years, Option B at 11.4% per year compounded monthly over 15 years. Find the monthly repayment and total amount repaid for each option, then state which option has the lower total repayment.', checkMode: 'self', answer: 'Option A: i = 0.008, n = 240\nx = 260 000 × 0.008 ÷ [1 − (1.008)⁻²⁴⁰] ≈ R2 440.54\nTotal = 2 440.54 × 240 ≈ R585 729.60\n\nOption B: i = 0.0095, n = 180\nx = 260 000 × 0.0095 ÷ [1 − (1.0095)⁻¹⁸⁰] ≈ R3 020.78\nTotal = 3 020.78 × 180 ≈ R543 740.40\n\nOption B has the lower total repayment (≈ R543 740.40 vs ≈ R585 729.60), despite the higher monthly instalment, because the shorter term means less total interest accumulates.' },
        { difficulty: 'Hard', question: 'A student argues that since both future value annuities and present value annuities involve a series of n equal payments and an interest rate i, the two formulas must give the same numerical answer for the same x, i, and n. Explain why this is false, and describe the relationship that does connect F and P for the same annuity.', checkMode: 'self', answer: 'This is false because F = x[(1+i)ⁿ − 1] ÷ i (future value) grows with compounding as time moves forward, while P = x[1 − (1+i)⁻ⁿ] ÷ i (present value) shrinks the future payments back to today\'s value through discounting — the two formulas measure the same stream of payments from opposite ends of the timeline. The relationship connecting them for the same x, i, and n is F = P(1+i)ⁿ: the present value, if invested as a lump sum today at the same rate for n periods, grows into exactly the future value of the annuity. They are not equal, but they are directly linked by ordinary compound growth over n periods.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have fully mastered annuities, loan repayments, and sinking funds.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the combined multi-step problems, then try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on future and present value annuities, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
