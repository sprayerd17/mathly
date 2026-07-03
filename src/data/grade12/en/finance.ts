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
          answer: '100 000 = 350 000(0.82)ⁿ\n0.2857 = (0.82)ⁿ\nn = log(0.2857) ÷ log(0.82) ≈ 6.47 years, so more than 6 years.',
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
          answer: `${gr('F')} ≈ R113 133`,
          steps: [
            `Identify the ${or('interest rate per period')}: ${or('i')} = 0.09 ÷ 12 = ${or('0.0075')} per month`,
            `Determine the number of payments: n = 5 × 12 = 60 months`,
            `Write down the formula: ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}`,
            `Substitute: ${gr('F')} = ${bl('1 500')} × [(1 + ${or('0.0075')})⁶⁰ − 1] ÷ ${or('0.0075')}`,
            `Calculate (1.0075)⁶⁰ ≈ 1.5657`,
            `Numerator: 1.5657 − 1 = 0.5657`,
            `Divide: 0.5657 ÷ ${or('0.0075')} ≈ 75.42`,
            `Calculate: ${gr('F')} = ${bl('1 500')} × 75.42 ≈ ${gr('R113 133')}`,
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
          answer: 'R43,017.83',
          checkMode: 'auto',
          correctAnswer: 'R43017.83',
          correctAnswers: ['R43017.83', '43017.83', 'R43,017.83', '43,017.83'],
          explanation: 'i = 0.06 ÷ 12 = 0.005, n = 4 × 12 = 48\nF = 800 × [(1.005)⁴⁸ − 1] ÷ 0.005 ≈ R43,017.83 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho saves R1,200 per month at 7.2% per year compounded monthly for 10 years. Find the future value of his savings.',
          answer: 'i = 0.072 ÷ 12 = 0.006, n = 120\nF = 1 200 × [(1.006)¹²⁰ − 1] ÷ 0.006\n(1.006)¹²⁰ ≈ 2.0508\nF = 1 200 × (1.0508 ÷ 0.006) = 1 200 × 175.13 ≈ R210,160',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho wants to save R500,000 in 8 years by making equal monthly deposits into an account earning 8.4% per year compounded monthly. Find the monthly deposit needed.',
          answer: 'i = 0.084 ÷ 12 = 0.007, n = 96\n500 000 = x × [(1.007)⁹⁶ − 1] ÷ 0.007\n(1.007)⁹⁶ ≈ 1.9316\n500 000 = x × (0.9316 ÷ 0.007) = x × 133.09\nx ≈ R3,756',
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
          answer: `n ≈ 131 months`,
          steps: [
            `Identify the interest rate per period: i = 0.09 ÷ 12 = 0.0075 per month`,
            `Set up the equation: ${bl('180 000')} = ${or('2 000')} × [1 − (1.0075)⁻ⁿ] ÷ 0.0075`,
            `Multiply both sides by 0.0075: ${bl('180 000')} × 0.0075 = ${or('2 000')} × [1 − (1.0075)⁻ⁿ]`,
            `Divide both sides by ${or('2 000')}: 0.675 = 1 − (1.0075)⁻ⁿ`,
            `Rearrange: (1.0075)⁻ⁿ = 1 − 0.675 = 0.325`,
            `Take log of both sides: −n · log(1.0075) = log(0.325)`,
            `Apply the power law and solve: n = −log(0.325) ÷ log(1.0075) ≈ 0.4881 ÷ 0.003244 ≈ <strong>131 months</strong>`,
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
          answer: 'approximately 79 months',
          checkMode: 'auto',
          correctAnswer: '79',
          correctAnswers: ['79', 'approximately 79 months', '79 months', '≈ 79 months'],
          explanation: '50 000 = 800 × [1 − (1.0075)⁻ⁿ] ÷ 0.0075\nSolving: (1.0075)⁻ⁿ = 0.53125\nn = log(0.53125) ÷ (−log(1.0075)) ≈ 79 months ✓',
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
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered finance.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered finance.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
