import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage / interest roles) ─────────────────────────────
// original amount / principal → blue   (#2563eb)
// percentage found / rate    → orange  (#ea580c)
// increase / time            → green   (#16a34a)
// decrease / interest        → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Percentages',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PERCENTAGE INCREASE AND DECREASE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-decrease',
      title: 'Percentage Increase and Decrease',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>percentage increase</strong> adds a percentage of the original amount to itself. A <strong>percentage decrease</strong> subtracts a percentage of the original amount from itself. To calculate either, we find the percentage of the amount first, then add or subtract it from the original.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original amount')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage found')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('increase')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('decrease')}</span>` +
        `</div>` +

        // ── Steps reference ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to calculate a percentage increase or decrease</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Convert the percentage to a decimal (divide by 100) and multiply by the ${bl('original amount')} to find the ${or('percentage value')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Increase')}:</strong> Add the ${or('percentage value')} to the ${bl('original amount')} to find the new, higher amount.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Decrease')}:</strong> Subtract the ${or('percentage value')} from the ${bl('original amount')} to find the new, lower amount.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting a percentage to a decimal</p>` +
        `<p style="margin:0;color:#1e3a8a;">Divide the percentage by 100: 15% = 0.15, 20% = 0.20, 8% = 0.08. You can then multiply directly by the original amount to find the percentage value.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A shirt costs R280. The price increases by 15%. Find the new price.',
          answer: `New price = R${gr('322')}`,
          steps: [
            `Find 15% of ${bl('280')}: 0.15 × ${bl('280')} = ${or('42')}`,
            `${gr('Increase')}: ${bl('280')} + ${or('42')} = ${gr('322')}`,
            `<strong>New price = R${gr('322')}</strong>`,
          ],
        },
        {
          question: 'A laptop costs R8 500. It is discounted by 20%. Find the sale price.',
          answer: `Sale price = R${re('6 800')}`,
          steps: [
            `Find 20% of ${bl('8 500')}: 0.20 × ${bl('8 500')} = ${or('1 700')}`,
            `${re('Decrease')}: ${bl('8 500')} − ${or('1 700')} = ${re('6 800')}`,
            `<strong>Sale price = R${re('6 800')}</strong>`,
          ],
        },
        {
          question: "Sipho's salary of R12 000 increases by 8%. Find his new salary.",
          answer: `New salary = R${gr('12 960')}`,
          steps: [
            `Find 8% of ${bl('12 000')}: 0.08 × ${bl('12 000')} = ${or('960')}`,
            `${gr('Increase')}: ${bl('12 000')} + ${or('960')} = ${gr('12 960')}`,
            `<strong>New salary = R${gr('12 960')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate percentage increase and decrease by converting the percentage to a decimal then adding or subtracting from the original amount" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing percentage increase and decrease with original amount in blue, percentage value found in orange, increase result in green and decrease result in red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SIMPLE INTEREST
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-interest',
      title: 'Simple Interest',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Simple interest is money earned or paid on an amount of money over time, calculated <strong>only on the original amount</strong> (the principal). The formula is:</p>` +

        // ── Formula box ──────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">Simple Interest = ${bl('Principal')} × ${or('Rate')} × ${gr('Time')}</p>` +
        `<p style="font-size:0.88em;color:#6b7280;margin:8px 0 0 0;">where ${or('Rate')} is written as a decimal and ${gr('Time')} is in years</p>` +
        `</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('principal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('interest')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Principal (P)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The original amount of money invested or borrowed.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rate (R)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The interest rate per year, written as a decimal. E.g. 6% = 0.06.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Time (T)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The length of time in years for which the money is invested or borrowed.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Simple Interest (SI)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The amount of interest earned or paid, calculated only on the principal.</p>` +
        `</div>` +

        `</div>` +

        // ── Total amount ─────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">Total Amount = ${bl('Principal')} + ${re('Simple Interest')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why "simple"?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Simple interest is calculated <strong>only on the principal each year</strong> — it does not earn interest on previously earned interest. This makes it straightforward to calculate.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato invests R5 000 at 6% simple interest per year for 3 years. Find the interest earned.',
          answer: `Interest earned = R${re('900')}`,
          steps: [
            `Write down the values: ${bl('P')} = R${bl('5 000')}, ${or('R')} = ${or('0.06')} (6% ÷ 100), ${gr('T')} = ${gr('3')} years`,
            `Apply the formula: SI = ${bl('P')} × ${or('R')} × ${gr('T')} = ${bl('5 000')} × ${or('0.06')} × ${gr('3')} = ${re('900')}`,
            `<strong>Interest earned = R${re('900')}</strong>`,
          ],
        },
        {
          question: 'Find the total amount Lerato has after 3 years.',
          answer: `Total amount = R${gr('5 900')}`,
          steps: [
            `From the previous example: ${bl('Principal')} = R${bl('5 000')}, ${re('Interest')} = R${re('900')}`,
            `Total = ${bl('Principal')} + ${re('Interest')} = R${bl('5 000')} + R${re('900')} = R${gr('5 900')}`,
            `<strong>Total amount = R${gr('5 900')}</strong>`,
          ],
        },
        {
          question: 'Amahle borrows R8 000 at 10% simple interest for 2 years. How much must she repay in total?',
          answer: `Total to repay = R${gr('9 600')}`,
          steps: [
            `Write down the values: ${bl('P')} = R${bl('8 000')}, ${or('R')} = ${or('0.10')} (10% ÷ 100), ${gr('T')} = ${gr('2')} years`,
            `Calculate SI: SI = ${bl('8 000')} × ${or('0.10')} × ${gr('2')} = ${re('1 600')}`,
            `Total = ${bl('8 000')} + ${re('1 600')} = ${gr('9 600')}`,
            `<strong>Total to repay = R${gr('9 600')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the simple interest formula SI = P x R x T and find the total amount by adding interest to the principal" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the simple interest formula with principal in blue, rate in orange, time in green and interest earned in red, plus the total amount calculation" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — percentage increase ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A jacket costs R450. It increases by 10%. Find the new price.',
      answer: 'R495',
      checkMode: 'auto',
      correctAnswer: 'R495',
      correctAnswers: ['R495', '495'],
      explanation: 'Find 10% of R450: 0.10 × 450 = R45\nNew price: 450 + 45 = R495 ✓',
    },

    // ── Q2 Easy — percentage decrease ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A TV costs R6 000. It is discounted by 25%. Find the sale price.',
      answer: 'R4 500',
      checkMode: 'auto',
      correctAnswer: 'R4500',
      correctAnswers: ['R4500', '4500', 'R4 500', '4 500'],
      explanation: 'Find 25% of R6 000: 0.25 × 6 000 = R1 500\nSale price: 6 000 − 1 500 = R4 500 ✓',
    },

    // ── Q3 Medium — salary increase ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Sipho's salary of R15 000 increases by 12%. Find his new salary.",
      answer: 'R16 800',
      checkMode: 'auto',
      correctAnswer: 'R16800',
      correctAnswers: ['R16800', '16800', 'R16 800', '16 800'],
      explanation: 'Find 12% of R15 000: 0.12 × 15 000 = R1 800\nNew salary: 15 000 + 1 800 = R16 800 ✓',
    },

    // ── Q4 Hard — successive percentage reasoning ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says a R200 item discounted by 50% then increased by 50% returns to R200. Is she correct? Explain.',
      answer: 'No — discounted by 50% gives R100, then increased by 50% of R100 (R50) gives R150, not R200.',
      checkMode: 'self',
    },

    // ── Q5 Easy — simple interest calculation ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the simple interest on R3 000 at 5% for 2 years.',
      answer: 'R300',
      checkMode: 'auto',
      correctAnswer: 'R300',
      correctAnswers: ['R300', '300'],
      explanation: 'SI = P × R × T = 3 000 × 0.05 × 2 = R300 ✓',
    },

    // ── Q6 Easy — simple interest calculation ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the simple interest on R4 500 at 8% for 1 year.',
      answer: 'R360',
      checkMode: 'auto',
      correctAnswer: 'R360',
      correctAnswers: ['R360', '360'],
      explanation: 'SI = P × R × T = 4 500 × 0.08 × 1 = R360 ✓',
    },

    // ── Q7 Medium — total amount after interest ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo invests R6 000 at 7% simple interest for 4 years. Find the total amount after 4 years.',
      answer: 'R7 680',
      checkMode: 'auto',
      correctAnswer: 'R7680',
      correctAnswers: ['R7680', '7680', 'R7 680', '7 680'],
      explanation: 'SI = 6 000 × 0.07 × 4 = R1 680\nTotal = 6 000 + 1 680 = R7 680 ✓',
    },

    // ── Q8 Medium — total repayment ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle borrows R10 000 at 12% simple interest for 3 years. How much must she repay in total?',
      answer: 'R13 600',
      checkMode: 'auto',
      correctAnswer: 'R13600',
      correctAnswers: ['R13600', '13600', 'R13 600', '13 600'],
      explanation: 'SI = 10 000 × 0.12 × 3 = R3 600\nTotal = 10 000 + 3 600 = R13 600 ✓',
    },

    // ── Q9 Hard — find the time ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho invests R8 000 at 6% simple interest. After how many years will he earn R2 400 in interest?',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      correctAnswers: ['5', '5 years'],
      explanation: 'SI = P × R × T → 2 400 = 8 000 × 0.06 × T\n2 400 = 480 × T\nT = 2 400 ÷ 480 = 5 years ✓',
    },

    // ── Q10 Hard — simple interest reasoning ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says simple interest grows the same amount every year. Is she correct? Explain.',
      answer: 'Yes — simple interest is always calculated on the original principal, so the interest earned each year stays the same.',
      checkMode: 'self',
    },

    // ── Q11 Medium — discount amount and new price (two parts) ───────────────
    {
      difficulty: 'Medium',
      question: 'A R500 item is discounted by 30%. Find the discount amount and the new price.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Discount amount',
          correctAnswer: 'R150',
          correctAnswers: ['R150', '150'],
          explanation: 'Discount = 30% of R500: 0.30 × 500 = R150 ✓',
        },
        {
          label: 'b) New price',
          correctAnswer: 'R350',
          correctAnswers: ['R350', '350'],
          explanation: 'New price = 500 − 150 = R350 ✓',
        },
      ],
    },

    // ── Q12 Hard — total amount with simple interest ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle deposits R12 000 at 9% simple interest for 5 years. Find the total amount in her account.',
      answer: 'R17 400',
      checkMode: 'auto',
      correctAnswer: 'R17400',
      correctAnswers: ['R17400', '17400', 'R17 400', '17 400'],
      explanation: 'SI = 12 000 × 0.09 × 5 = R5 400\nTotal = 12 000 + 5 400 = R17 400 ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered percentages.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered percentages.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
