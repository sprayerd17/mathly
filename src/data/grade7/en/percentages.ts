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
        'Short video showing how to calculate percentage increase and decrease by converting the percentage to a decimal then adding or subtracting from the original amount',

      diagramPlaceholder: 'Diagram showing percentage increase and decrease with original amount in blue, percentage value found in orange, increase result in green and decrease result in red',
      diagramSvg: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><line x1="15" y1="140" x2="285" y2="140" stroke="#0f1f3d" stroke-width="2"/><rect x="20" y="80" width="26" height="60" fill="#93c5fd" stroke="#0f1f3d" stroke-width="2"/><rect x="65" y="71" width="26" height="69" fill="#86efac" stroke="#0f1f3d" stroke-width="2"/><rect x="65" y="71" width="26" height="9" fill="#fdba74"/><line x1="65" y1="80" x2="91" y2="80" stroke="#0f1f3d" stroke-width="1"/><text x="33" y="73" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">R280</text><text x="78" y="64" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">R322</text><line x1="91" y1="75" x2="103" y2="75" stroke="#ea580c" stroke-width="1"/><text x="105" y="78" font-size="9" text-anchor="start" fill="#ea580c" font-weight="700">+R42</text><text x="59" y="156" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Increase (+15%)</text><rect x="160" y="80" width="26" height="60" fill="#93c5fd" stroke="#0f1f3d" stroke-width="2"/><rect x="205" y="80" width="26" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="3,2"/><rect x="205" y="92" width="26" height="48" fill="#fca5a5" stroke="#0f1f3d" stroke-width="2"/><text x="173" y="73" font-weight="700" font-size="10" text-anchor="middle" fill="#2563eb">R8 500</text><text x="218" y="85" font-weight="700" font-size="10" text-anchor="middle" fill="#dc2626">R6 800</text><line x1="231" y1="86" x2="243" y2="87" stroke="#dc2626" stroke-width="1"/><text x="245" y="90" font-size="9" text-anchor="start" fill="#dc2626" font-weight="700">-R1700</text><text x="192" y="156" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Decrease (-20%)</text></svg>',
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
        'Short video showing how to apply the simple interest formula SI = P x R x T and find the total amount by adding interest to the principal',

    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROFIT, LOSS, BUDGETS AND ACCOUNTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'profit-loss-budgets-accounts',
      title: 'Profit, Loss, Budgets and Accounts',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Everyday money decisions use the same percentage skills in new contexts: working out whether a business made a <strong>profit</strong> or a <strong>loss</strong>, planning a <strong>budget</strong> so that spending does not exceed income, checking an <strong>account</strong> statement, and understanding a <strong>loan</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('cost price / income')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage found')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('profit / balance')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('loss / expense')}</span>` +
        `</div>` +

        // ── Profit and loss ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Profit and loss</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0 0 6px 0;">${gr('Profit')} = ${or('Selling price')} − ${bl('Cost price')} &nbsp;&nbsp;|&nbsp;&nbsp; ${re('Loss')} = ${bl('Cost price')} − ${or('Selling price')}</p>` +
        `<p style="font-size:0.88em;color:#6b7280;margin:0;">A percentage profit or loss is always calculated on the ${bl('cost price')} (what the seller originally paid).</p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Budget</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A plan of expected ${gr('income')} and ${re('expenses')} over a period of time, used to check that spending does not exceed income.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Account</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A record of money owed or paid over time, e.g. a store account or utility account, often billed monthly.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Loan</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Money borrowed that must be repaid, usually with simple interest added, over an agreed period of time.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Balance</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Income')} minus ${re('expenses')}. A positive balance means money is left over; a negative balance means overspending.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Percentage profit or loss</p>` +
        `<p style="margin:0;color:#1e3a8a;">% profit = (${gr('Profit')} ÷ ${bl('Cost price')}) × 100. % loss = (${re('Loss')} ÷ ${bl('Cost price')}) × 100. Always divide by the <strong>cost price</strong>, never the selling price.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A spaza shop buys a box of chips for R80 (cost price) and sells it for R100 (selling price). Find the profit and the percentage profit.',
          answer: `Profit = R${gr('20')}, percentage profit = ${gr('25%')}`,
          steps: [
            `Profit = ${or('Selling price')} − ${bl('Cost price')} = ${or('100')} − ${bl('80')} = ${gr('20')}`,
            `% profit = (${gr('Profit')} ÷ ${bl('Cost price')}) × 100 = (${gr('20')} ÷ ${bl('80')}) × 100 = ${gr('25%')}`,
            `<strong>Profit = R${gr('20')}, percentage profit = ${gr('25%')}</strong>`,
          ],
        },
        {
          question: 'A trader buys a jacket for R450 (cost price) and, due to a torn seam, has to sell it for R360 (selling price). Find the loss and the percentage loss.',
          answer: `Loss = R${re('90')}, percentage loss = ${re('20%')}`,
          steps: [
            `Loss = ${bl('Cost price')} − ${or('Selling price')} = ${bl('450')} − ${or('360')} = ${re('90')}`,
            `% loss = (${re('Loss')} ÷ ${bl('Cost price')}) × 100 = (${re('90')} ÷ ${bl('450')}) × 100 = ${re('20%')}`,
            `<strong>Loss = R${re('90')}, percentage loss = ${re('20%')}</strong>`,
          ],
        },
        {
          question: 'Lindiwe budgets R4 500 monthly income. Her expenses are: rent R2 200, food R950, transport R600 and airtime R150. Find her total expenses and her balance.',
          answer: `Total expenses = R${re('3 900')}, balance = R${gr('600')}`,
          steps: [
            `Total ${re('expenses')} = 2 200 + 950 + 600 + 150 = ${re('3 900')}`,
            `Balance = ${gr('Income')} − ${re('Expenses')} = ${bl('4 500')} − ${re('3 900')} = ${gr('600')}`,
            `<strong>Total expenses = R${re('3 900')}, balance = R${gr('600')}</strong> (money left over)`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Short video showing how to calculate profit and loss on the cost price, and how to draw up a simple budget by subtracting total expenses from income',
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

    // ── Q13 Easy — profit and percentage profit ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A vendor buys a box of oranges for R150 (cost price) and sells it for R210 (selling price). Find the profit and the percentage profit.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Profit', correctAnswer: 'R60', correctAnswers: ['R60', '60'], explanation: 'Profit = Selling price − Cost price = 210 − 150 = R60 ✓' },
        { label: 'b) Percentage profit', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: '% profit = (Profit ÷ Cost price) × 100 = (60 ÷ 150) × 100 = 40% ✓' },
      ],
    },

    // ── Q14 Medium — loss and percentage loss ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A shop buys a heater for R680 (cost price). Because it is last season\'s model, it is sold for R544 (selling price). Find the loss and the percentage loss.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Loss', correctAnswer: 'R136', correctAnswers: ['R136', '136'], explanation: 'Loss = Cost price − Selling price = 680 − 544 = R136 ✓' },
        { label: 'b) Percentage loss', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% loss = (Loss ÷ Cost price) × 100 = (136 ÷ 680) × 100 = 20% ✓' },
      ],
    },

    // ── Q15 Medium — budget balance ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bongani has a monthly income of R6 000. His budgeted expenses are: rent R2 500, food R1 200, transport R800 and other costs R300. Find his total expenses and his balance.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Total expenses', correctAnswer: 'R4 800', correctAnswers: ['R4800', '4800', 'R4 800', '4 800'], explanation: 'Total expenses = 2 500 + 1 200 + 800 + 300 = R4 800 ✓' },
        { label: 'b) Balance', correctAnswer: 'R1 200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Balance = Income − Expenses = 6 000 − 4 800 = R1 200 ✓' },
      ],
    },

    // ── Q16 Hard — account balance ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Zinhle's clothing account shows an opening balance owed of R450. During the month she buys R320 of new items on account, and makes a payment of R200 towards the account. Find the closing balance owed.",
      answer: 'R570',
      checkMode: 'auto',
      correctAnswer: 'R570',
      correctAnswers: ['R570', '570'],
      explanation: 'Closing balance = Opening balance + Purchases − Payment = 450 + 320 − 200 = R570 ✓',
    },

    // ── Q17 Hard — loan reasoning ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho takes out a loan of R5 000 at 8% simple interest per year, to be repaid over 2 years. He says he only needs to repay R5 000 since that is what he borrowed. Is he correct? Explain, and state the total repayment.',
      answer: 'No — a loan must be repaid with interest added. SI = 5 000 × 0.08 × 2 = R800, so the total repayment is R5 000 + R800 = R5 800, not R5 000.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 17,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered percentages.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 17, message: 'Outstanding! You have mastered percentages.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (24 Qs)
    // Blocks: 1-3 Converting % / fractions / decimals | 4-7 Finding a % of an
    // amount | 8-10 Expressing one quantity as a % of another | 11-14 % increase
    // and decrease | 15-18 Discount / markup word problems (Rand contexts) |
    // 19-20 Multi-step / error-spotting | 21-24 Profit, loss, budgets and accounts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Converting between percentages, fractions and decimals (0-2)
        { difficulty: 'Easy', question: 'Write 7/8 as a percentage.', answer: '87.5%', checkMode: 'auto', correctAnswer: '87.5%', correctAnswers: ['87.5%', '87.5', '87,5%', '87,5'], explanation: 'Divide the numerator by the denominator, then multiply by 100.\n7 ÷ 8 = 0.875. 0.875 × 100 = 87.5%. ✓' },
        { difficulty: 'Easy', question: 'Write 0.35 as a percentage and as a fraction in simplest form.', answer: '35%, 7/20', checkMode: 'auto', correctAnswer: '35%,7/20', correctAnswers: ['35%,7/20', '35,7/20', '35% and 7/20', '35, 7/20'], explanation: 'Percentage: multiply by 100. 0.35 × 100 = 35%.\nFraction: 0.35 = 35/100. HCF of 35 and 100 is 5, so 35/100 = 7/20. ✓' },
        { difficulty: 'Medium', question: 'A recipe uses 18/25 of a bag of flour. Write this amount as a percentage and as a decimal.', answer: '72%, 0.72', checkMode: 'auto', correctAnswer: '72%,0.72', correctAnswers: ['72%,0.72', '72,0.72', '72% and 0.72', '72,0,72'], explanation: 'Percentage: 18 ÷ 25 = 0.72, then 0.72 × 100 = 72%.\nDecimal: 18 ÷ 25 = 0.72 directly. ✓' },

        // Block 2 — Finding a percentage of an amount (3-6)
        { difficulty: 'Easy', question: 'Find 35% of 480.', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'Convert 35% to a decimal: 35 ÷ 100 = 0.35.\nMultiply: 0.35 × 480 = 168. ✓' },
        { difficulty: 'Easy', question: 'A class has 950 learners in total across the grade. 8% of them play a musical instrument. How many learners play an instrument?', answer: '76', checkMode: 'auto', correctAnswer: '76', explanation: 'Find 8% of 950: 0.08 × 950 = 76 learners. ✓' },
        { difficulty: 'Medium', question: 'A stadium has 650 seats in the west stand. For a school athletics day, 62% of the seats are filled. How many seats are filled?', answer: '403', checkMode: 'auto', correctAnswer: '403', explanation: 'Find 62% of 650: 0.62 × 650 = 403 seats. ✓' },
        { difficulty: 'Medium', question: 'Zinhle has R220 saved. She spends 45% of it on a birthday gift. How much money does she spend, and how much does she have left?', answer: 'Spent = R99, left = R121', checkMode: 'auto', correctAnswer: '99,121', correctAnswers: ['99,121', 'R99,R121', 'R99, R121', '99, 121'], explanation: 'Amount spent: 45% of 220 = 0.45 × 220 = R99.\nAmount left: 220 − 99 = R121. ✓' },

        // Block 3 — Expressing one quantity as a percentage of another (7-9)
        { difficulty: 'Easy', question: 'Express 45 as a percentage of 60.', answer: '75%', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: 'Write as a fraction and multiply by 100: (45 ÷ 60) × 100 = 0.75 × 100 = 75%. ✓' },
        { difficulty: 'Medium', question: 'A farmer plants 840 seedlings, and 126 of them fail to grow. What percentage of the seedlings failed to grow?', answer: '15%', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: 'Percentage failed = (126 ÷ 840) × 100 = 0.15 × 100 = 15%. ✓' },
        { difficulty: 'Medium', question: "Sipho scored 19 out of 25 in a spelling test, and Amahle scored 34 out of 40 in the same test. Whose percentage score is higher, and by how many percentage points?", answer: "Amahle's is higher, by 9 percentage points", checkMode: 'auto', correctAnswer: 'Amahle,9', correctAnswers: ['Amahle,9', 'amahle,9', 'Amahle by 9', 'Amahle, 9'], explanation: "Sipho: (19 ÷ 25) × 100 = 76%.\nAmahle: (34 ÷ 40) × 100 = 85%.\nAmahle's score is higher: 85% − 76% = 9 percentage points. ✓" },

        // Block 4 — Percentage increase and decrease (10-13)
        { difficulty: 'Easy', question: "Thabo's monthly salary of R14 500 increases by 9%. Find his new salary.", answer: 'R15 805', checkMode: 'auto', correctAnswer: 'R15805', correctAnswers: ['R15805', '15805', 'R15 805', '15 805'], explanation: 'Find 9% of R14 500: 0.09 × 14 500 = R1 305.\nNew salary: 14 500 + 1 305 = R15 805. ✓' },
        { difficulty: 'Medium', question: 'A family pays R3 200 rent per month. The landlord increases the rent by 7.5%. Find the new monthly rent.', answer: 'R3 440', checkMode: 'auto', correctAnswer: 'R3440', correctAnswers: ['R3440', '3440', 'R3 440', '3 440'], explanation: 'Find 7.5% of R3 200: 0.075 × 3 200 = R240.\nNew rent: 3 200 + 240 = R3 440. ✓' },
        { difficulty: 'Medium', question: 'A small town has a population of 5 200 people. Over five years the population grows by 18%. Find the new population.', answer: '6 136', checkMode: 'auto', correctAnswer: '6136', correctAnswers: ['6136', '6 136'], explanation: 'Find 18% of 5 200: 0.18 × 5 200 = 936.\nNew population: 5 200 + 936 = 6 136 people. ✓' },
        { difficulty: 'Medium', question: 'A bicycle originally priced at R2 400 goes on sale at 15% off. Find the sale price.', answer: 'R2 040', checkMode: 'auto', correctAnswer: 'R2040', correctAnswers: ['R2040', '2040', 'R2 040', '2 040'], explanation: 'Find 15% of R2 400: 0.15 × 2 400 = R360.\nSale price: 2 400 − 360 = R2 040. ✓' },

        // Block 5 — Discount / markup word problems, Rand contexts (14-17)
        { difficulty: 'Easy-Medium', question: 'A pair of running shoes costs R899 at a sports shop. During a sale, the shop takes 20% off. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R179.80', correctAnswers: ['R179.80', '179.80', 'R179,80', '179,80', 'R179.8', '179.8'], explanation: 'Discount = 20% of R899: 0.20 × 899 = R179.80 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R719.20', correctAnswers: ['R719.20', '719.20', 'R719,20', '719,20', 'R719.2', '719.2'], explanation: 'Sale price = 899 − 179.80 = R719.20 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A school trip normally costs R560 per learner. Due to rising fuel costs, the bus company increases its price by 8%. Find the new cost per learner.', answer: 'R604.80', checkMode: 'auto', correctAnswer: 'R604.80', correctAnswers: ['R604.80', '604.80', 'R604,80', '604,80', 'R604.8', '604.8'], explanation: 'Find 8% of R560: 0.08 × 560 = R44.80.\nNew price: 560 + 44.80 = R604.80. ✓' },
        { difficulty: 'Medium', question: 'A spaza shop buys a crate of juice for R120 and marks the price up by 40% to sell to customers. Find the mark-up amount and the selling price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R48', correctAnswers: ['R48', '48'], explanation: 'Mark-up = 40% of R120: 0.40 × 120 = R48 ✓' },
          { label: 'b) Selling price', correctAnswer: 'R168', correctAnswers: ['R168', '168'], explanation: 'Selling price = 120 + 48 = R168 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A restaurant bill comes to R250 before a service fee of 15% is added. Find the total amount the customer must pay, including the service fee.', answer: 'R287.50', checkMode: 'auto', correctAnswer: 'R287.50', correctAnswers: ['R287.50', '287.50', 'R287,50', '287,50', 'R287.5', '287.5'], explanation: 'Find 15% of R250: 0.15 × 250 = R37.50.\nTotal = 250 + 37.50 = R287.50. ✓' },

        // Block 6 — Multi-step / error-spotting (18-19)
        { difficulty: 'Hard', question: 'A jacket costs R800. The shop first increases the price by 10%, then a week later puts it on sale at 10% off the new price. Find the final price, and state whether it is the same as the original R800.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R792', correctAnswers: ['R792', '792'], explanation: 'After the 10% increase: 800 × 1.10 = R880.\nAfter the 10% decrease on the new price: 880 × 0.90 = R792. ✓' },
          { label: 'b) Is the final price the same as the original R800?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R792 is R8 less than R800 — a percentage increase followed by the same percentage decrease does not return to the original amount, because the second percentage is calculated on a different (larger) base. ✓' },
        ] },
        { difficulty: 'Hard', question: 'A speaker costs R400. Lerato says: "The shop discounted it by 20% to R320, then increased it by 20% back to R384, so it is R16 cheaper than the original price — but that must be a mistake, since a 20% decrease and a 20% increase should cancel out." Is Lerato right that it must be a mistake? Explain.', answer: 'No, Lerato is wrong that it is a mistake — the calculation R320 and then R384 is correct. A 20% decrease and a 20% increase do not cancel out because they are percentages of different amounts: the decrease is 20% of R400 (R80), but the increase is 20% of the smaller R320 (R64), so the final price is lower than the original.', checkMode: 'self' },

        // Block 7 — Profit, loss, budgets and accounts (20-23)
        { difficulty: 'Easy-Medium', question: 'A vendor buys a bag of mielies for R320 (cost price) and sells it for R400 (selling price). Find the profit and the percentage profit.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Profit', correctAnswer: 'R80', correctAnswers: ['R80', '80'], explanation: 'Profit = Selling price − Cost price = 400 − 320 = R80 ✓' },
          { label: 'b) Percentage profit', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: '% profit = (Profit ÷ Cost price) × 100 = (80 ÷ 320) × 100 = 25% ✓' },
        ] },
        { difficulty: 'Medium', question: 'A shop buys a fan for R560 (cost price). At the end of winter it is sold for R448 (selling price). Find the loss and the percentage loss.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Loss', correctAnswer: 'R112', correctAnswers: ['R112', '112'], explanation: 'Loss = Cost price − Selling price = 560 − 448 = R112 ✓' },
          { label: 'b) Percentage loss', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% loss = (Loss ÷ Cost price) × 100 = (112 ÷ 560) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Thandeka has a monthly income of R5 200. Her budgeted expenses are: rent R1 800, food R900, transport R500 and other costs R200. Find her total expenses and her balance.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total expenses', correctAnswer: 'R3 400', correctAnswers: ['R3400', '3400', 'R3 400', '3 400'], explanation: 'Total expenses = 1 800 + 900 + 500 + 200 = R3 400 ✓' },
          { label: 'b) Balance', correctAnswer: 'R1 800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Balance = Income − Expenses = 5 200 − 3 400 = R1 800 ✓' },
        ] },
        { difficulty: 'Hard', question: "Kagiso's cellphone account shows an opening balance owed of R380. During the month he adds R150 of extra data to the account, and makes a payment of R230. Find the closing balance owed.", answer: 'R300', checkMode: 'auto', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Closing balance = Opening balance + Purchases − Payment = 380 + 150 − 230 = R300 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Outstanding! You have mastered percentages, from conversions through to real-world discount, profit/loss and budgeting problems.' },
        { minScore: 18, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 12, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (24 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Converting between percentages, fractions and decimals (0-2)
        { difficulty: 'Easy', question: 'Write 5/8 as a percentage.', answer: '62.5%', checkMode: 'auto', correctAnswer: '62.5%', correctAnswers: ['62.5%', '62.5', '62,5%', '62,5'], explanation: 'Divide the numerator by the denominator, then multiply by 100.\n5 ÷ 8 = 0.625. 0.625 × 100 = 62.5%. ✓' },
        { difficulty: 'Easy', question: 'Write 0.28 as a percentage and as a fraction in simplest form.', answer: '28%, 7/25', checkMode: 'auto', correctAnswer: '28%,7/25', correctAnswers: ['28%,7/25', '28,7/25', '28% and 7/25', '28, 7/25'], explanation: 'Percentage: multiply by 100. 0.28 × 100 = 28%.\nFraction: 0.28 = 28/100. HCF of 28 and 100 is 4, so 28/100 = 7/25. ✓' },
        { difficulty: 'Medium', question: 'A tank is filled to 11/20 of its capacity. Write this amount as a percentage and as a decimal.', answer: '55%, 0.55', checkMode: 'auto', correctAnswer: '55%,0.55', correctAnswers: ['55%,0.55', '55,0.55', '55% and 0.55', '55,0,55'], explanation: 'Percentage: 11 ÷ 20 = 0.55, then 0.55 × 100 = 55%.\nDecimal: 11 ÷ 20 = 0.55 directly. ✓' },

        // Block 2 — Finding a percentage of an amount (3-6)
        { difficulty: 'Easy', question: 'Find 45% of 520.', answer: '234', checkMode: 'auto', correctAnswer: '234', explanation: 'Convert 45% to a decimal: 45 ÷ 100 = 0.45.\nMultiply: 0.45 × 520 = 234. ✓' },
        { difficulty: 'Easy', question: 'A library has 725 books in its fiction section. 16% of them are currently out on loan. How many fiction books are out on loan?', answer: '116', checkMode: 'auto', correctAnswer: '116', explanation: 'Find 16% of 725: 0.16 × 725 = 116 books. ✓' },
        { difficulty: 'Medium', question: 'A concert venue has 1 150 tickets available. For a sold-out show, 6% are reserved for VIP guests. How many tickets are reserved for VIP guests?', answer: '69', checkMode: 'auto', correctAnswer: '69', explanation: 'Find 6% of 1 150: 0.06 × 1 150 = 69 tickets. ✓' },
        { difficulty: 'Medium', question: 'Bongani has R250 in his wallet. He spends 72% of it on a soccer jersey. How much money does he spend, and how much does he have left?', answer: 'Spent = R180, left = R70', checkMode: 'auto', correctAnswer: '180,70', correctAnswers: ['180,70', 'R180,R70', 'R180, R70', '180, 70'], explanation: 'Amount spent: 72% of 250 = 0.72 × 250 = R180.\nAmount left: 250 − 180 = R70. ✓' },

        // Block 3 — Expressing one quantity as a percentage of another (7-9)
        { difficulty: 'Easy', question: 'Express 36 as a percentage of 48.', answer: '75%', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: 'Write as a fraction and multiply by 100: (36 ÷ 48) × 100 = 0.75 × 100 = 75%. ✓' },
        { difficulty: 'Medium', question: 'A factory produces 900 items in a batch, and 153 of them are found to be faulty. What percentage of the batch is faulty?', answer: '17%', checkMode: 'auto', correctAnswer: '17%', correctAnswers: ['17%', '17'], explanation: 'Percentage faulty = (153 ÷ 900) × 100 = 0.17 × 100 = 17%. ✓' },
        { difficulty: 'Medium', question: 'Naledi scored 21 out of 28 in a science quiz, and Kagiso scored 39 out of 52 in the same quiz. Whose percentage score is higher, and by how many percentage points?', answer: 'Neither — they scored the same percentage', checkMode: 'auto', correctAnswer: 'same', correctAnswers: ['same', 'neither', 'equal', 'they are equal'], explanation: "Naledi: (21 ÷ 28) × 100 = 75%.\nKagiso: (39 ÷ 52) × 100 = 75%.\nBoth scored exactly 75% — their percentages are equal, even though the raw marks are different. ✓" },

        // Block 4 — Percentage increase and decrease (10-13)
        { difficulty: 'Easy', question: "Naledi's monthly salary of R18 800 increases by 6%. Find her new salary.", answer: 'R19 928', checkMode: 'auto', correctAnswer: 'R19928', correctAnswers: ['R19928', '19928', 'R19 928', '19 928'], explanation: 'Find 6% of R18 800: 0.06 × 18 800 = R1 128.\nNew salary: 18 800 + 1 128 = R19 928. ✓' },
        { difficulty: 'Medium', question: 'A mobile data bundle costs R250 per month. The network increases the price by 4%. Find the new monthly price.', answer: 'R260', checkMode: 'auto', correctAnswer: 'R260', correctAnswers: ['R260', '260'], explanation: 'Find 4% of R250: 0.04 × 250 = R10.\nNew price: 250 + 10 = R260. ✓' },
        { difficulty: 'Medium', question: 'A weekend market usually has 850 visitors. Due to bad weather, attendance drops by 12%. Find the new attendance.', answer: '748', checkMode: 'auto', correctAnswer: '748', explanation: 'Find 12% of 850: 0.12 × 850 = 102.\nNew attendance: 850 − 102 = 748 visitors. ✓' },
        { difficulty: 'Medium', question: 'A smartphone originally priced at R6 200 goes on sale at 20% off. Find the sale price.', answer: 'R4 960', checkMode: 'auto', correctAnswer: 'R4960', correctAnswers: ['R4960', '4960', 'R4 960', '4 960'], explanation: 'Find 20% of R6 200: 0.20 × 6 200 = R1 240.\nSale price: 6 200 − 1 240 = R4 960. ✓' },

        // Block 5 — Discount / markup word problems, Rand contexts (14-17)
        { difficulty: 'Easy-Medium', question: 'A pair of jeans costs R650 at a clothing store. During a sale, the store takes 30% off. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R195', correctAnswers: ['R195', '195'], explanation: 'Discount = 30% of R650: 0.30 × 650 = R195 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R455', correctAnswers: ['R455', '455'], explanation: 'Sale price = 650 − 195 = R455 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A stationery pack normally costs R84 at the start of the year. Due to higher paper costs, the supplier increases the price by 5%. Find the new cost of the pack.', answer: 'R88.20', checkMode: 'auto', correctAnswer: 'R88.20', correctAnswers: ['R88.20', '88.20', 'R88,20', '88,20', 'R88.2', '88.2'], explanation: 'Find 5% of R84: 0.05 × 84 = R4.20.\nNew price: 84 + 4.20 = R88.20. ✓' },
        { difficulty: 'Medium', question: 'A spaza shop buys a box of sweets for R80 and marks the price up by 60% to sell to customers. Find the mark-up amount and the selling price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R48', correctAnswers: ['R48', '48'], explanation: 'Mark-up = 60% of R80: 0.60 × 80 = R48 ✓' },
          { label: 'b) Selling price', correctAnswer: 'R128', correctAnswers: ['R128', '128'], explanation: 'Selling price = 80 + 48 = R128 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A hardware bill comes to R340 before a delivery fee of 15% is added. Find the total amount the customer must pay, including the delivery fee.', answer: 'R391', checkMode: 'auto', correctAnswer: 'R391', correctAnswers: ['R391', '391'], explanation: 'Find 15% of R340: 0.15 × 340 = R51.\nTotal = 340 + 51 = R391. ✓' },

        // Block 6 — Multi-step / error-spotting (18-19)
        { difficulty: 'Hard', question: 'A television costs R1 500. The shop first increases the price by 20%, then a month later puts it on sale at 15% off the new price. Find the final price, and state whether it is the same as the original R1 500.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R1 530', correctAnswers: ['R1 530', 'R1530', '1530', '1 530'], explanation: 'After the 20% increase: 1 500 × 1.20 = R1 800.\nAfter the 15% decrease on the new price: 1 800 × 0.85 = R1 530. ✓' },
          { label: 'b) Is the final price the same as the original R1 500?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R1 530 is R30 more than R1 500 — the two percentages were applied to different base amounts, so they do not cancel out. ✓' },
        ] },
        { difficulty: 'Hard', question: 'A blender costs R600. Thabo says: "The shop discounted it by 25% to R450, then increased it by 25% back to R562.50, so it is R37.50 more than the original price — but that must be a mistake, since a 25% decrease and a 25% increase should cancel out." Is Thabo right that it must be a mistake? Explain.', answer: 'No, Thabo is wrong that it is a mistake — the calculation R450 and then R562.50 is correct. A 25% decrease and a 25% increase do not cancel out because they are percentages of different amounts: the decrease is 25% of R600 (R150), but the increase is 25% of the smaller R450 (R112.50), so the final price is lower than R600 would suggest at first glance, though still above the discounted price.', checkMode: 'self' },

        // Block 7 — Profit, loss, budgets and accounts (20-23)
        { difficulty: 'Easy-Medium', question: 'A vendor buys a crate of tomatoes for R240 (cost price) and sells it for R300 (selling price). Find the profit and the percentage profit.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Profit', correctAnswer: 'R60', correctAnswers: ['R60', '60'], explanation: 'Profit = Selling price − Cost price = 300 − 240 = R60 ✓' },
          { label: 'b) Percentage profit', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: '% profit = (Profit ÷ Cost price) × 100 = (60 ÷ 240) × 100 = 25% ✓' },
        ] },
        { difficulty: 'Medium', question: 'A shop buys a set of garden chairs for R720 (cost price). Because the boxes are damaged, they are sold for R612 (selling price). Find the loss and the percentage loss.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Loss', correctAnswer: 'R108', correctAnswers: ['R108', '108'], explanation: 'Loss = Cost price − Selling price = 720 − 612 = R108 ✓' },
          { label: 'b) Percentage loss', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: '% loss = (Loss ÷ Cost price) × 100 = (108 ÷ 720) × 100 = 15% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi has a monthly income of R4 800. Her budgeted expenses are: rent R1 600, food R750, transport R450 and other costs R100. Find her total expenses and her balance.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total expenses', correctAnswer: 'R2 900', correctAnswers: ['R2900', '2900', 'R2 900', '2 900'], explanation: 'Total expenses = 1 600 + 750 + 450 + 100 = R2 900 ✓' },
          { label: 'b) Balance', correctAnswer: 'R1 900', correctAnswers: ['R1900', '1900', 'R1 900', '1 900'], explanation: 'Balance = Income − Expenses = 4 800 − 2 900 = R1 900 ✓' },
        ] },
        { difficulty: 'Hard', question: "Amahle's furniture account shows an opening balance owed of R500. During the month she buys R180 of extra items on account, and makes a payment of R280. Find the closing balance owed.", answer: 'R400', checkMode: 'auto', correctAnswer: 'R400', correctAnswers: ['R400', '400'], explanation: 'Closing balance = Opening balance + Purchases − Payment = 500 + 180 − 280 = R400 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Outstanding! You have mastered percentages, from conversions through to real-world discount, profit/loss and budgeting problems.' },
        { minScore: 18, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 12, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (24 Qs) — same block layout as Set 1 and Set 2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Converting between percentages, fractions and decimals (0-2)
        { difficulty: 'Easy', question: 'Write 9/16 as a percentage.', answer: '56.25%', checkMode: 'auto', correctAnswer: '56.25%', correctAnswers: ['56.25%', '56.25', '56,25%', '56,25'], explanation: 'Divide the numerator by the denominator, then multiply by 100.\n9 ÷ 16 = 0.5625. 0.5625 × 100 = 56.25%. ✓' },
        { difficulty: 'Easy', question: 'Write 0.62 as a percentage and as a fraction in simplest form.', answer: '62%, 31/50', checkMode: 'auto', correctAnswer: '62%,31/50', correctAnswers: ['62%,31/50', '62,31/50', '62% and 31/50', '62, 31/50'], explanation: 'Percentage: multiply by 100. 0.62 × 100 = 62%.\nFraction: 0.62 = 62/100. HCF of 62 and 100 is 2, so 62/100 = 31/50. ✓' },
        { difficulty: 'Medium', question: 'A water bottle is filled to 7/20 of its capacity. Write this amount as a percentage and as a decimal.', answer: '35%, 0.35', checkMode: 'auto', correctAnswer: '35%,0.35', correctAnswers: ['35%,0.35', '35,0.35', '35% and 0.35', '35,0,35'], explanation: 'Percentage: 7 ÷ 20 = 0.35, then 0.35 × 100 = 35%.\nDecimal: 7 ÷ 20 = 0.35 directly. ✓' },

        // Block 2 — Finding a percentage of an amount (3-6)
        { difficulty: 'Easy', question: 'Find 28% of 650.', answer: '182', checkMode: 'auto', correctAnswer: '182', explanation: 'Convert 28% to a decimal: 28 ÷ 100 = 0.28.\nMultiply: 0.28 × 650 = 182. ✓' },
        { difficulty: 'Easy', question: 'A school has 850 learners in total. 18% of them cycle to school. How many learners cycle to school?', answer: '153', checkMode: 'auto', correctAnswer: '153', explanation: 'Find 18% of 850: 0.18 × 850 = 153 learners. ✓' },
        { difficulty: 'Medium', question: 'A warehouse stores 1 300 boxes. For a stock check, 9% of the boxes are opened and inspected. How many boxes are inspected?', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: 'Find 9% of 1 300: 0.09 × 1 300 = 117 boxes. ✓' },
        { difficulty: 'Medium', question: 'Kagiso has R375 saved. He spends 64% of it on a pair of headphones. How much money does he spend, and how much does he have left?', answer: 'Spent = R240, left = R135', checkMode: 'auto', correctAnswer: '240,135', correctAnswers: ['240,135', 'R240,R135', 'R240, R135', '240, 135'], explanation: 'Amount spent: 64% of 375 = 0.64 × 375 = R240.\nAmount left: 375 − 240 = R135. ✓' },

        // Block 3 — Expressing one quantity as a percentage of another (7-9)
        { difficulty: 'Easy', question: 'Express 56 as a percentage of 80.', answer: '70%', checkMode: 'auto', correctAnswer: '70%', correctAnswers: ['70%', '70'], explanation: 'Write as a fraction and multiply by 100: (56 ÷ 80) × 100 = 0.70 × 100 = 70%. ✓' },
        { difficulty: 'Medium', question: 'A delivery company handles 275 parcels in a day, and 88 of them are delivered before noon. What percentage of parcels are delivered before noon?', answer: '32%', checkMode: 'auto', correctAnswer: '32%', correctAnswers: ['32%', '32'], explanation: 'Percentage before noon = (88 ÷ 275) × 100 = 0.32 × 100 = 32%. ✓' },
        { difficulty: 'Medium', question: "Amahle scored 39 out of 52 in a geography test, and Sipho scored 34 out of 40 in the same test. Whose percentage score is higher, and by how many percentage points?", answer: "Sipho's is higher, by 10 percentage points", checkMode: 'auto', correctAnswer: 'Sipho,10', correctAnswers: ['Sipho,10', 'sipho,10', 'Sipho by 10', 'Sipho, 10'], explanation: "Amahle: (39 ÷ 52) × 100 = 75%.\nSipho: (34 ÷ 40) × 100 = 85%.\nSipho's score is higher: 85% − 75% = 10 percentage points. ✓" },

        // Block 4 — Percentage increase and decrease (10-13)
        { difficulty: 'Easy', question: "Kagiso's monthly salary of R21 000 increases by 5.5%. Find his new salary.", answer: 'R22 155', checkMode: 'auto', correctAnswer: 'R22155', correctAnswers: ['R22155', '22155', 'R22 155', '22 155'], explanation: 'Find 5.5% of R21 000: 0.055 × 21 000 = R1 155.\nNew salary: 21 000 + 1 155 = R22 155. ✓' },
        { difficulty: 'Medium', question: "A household's electricity bill is normally R980 per month. After a tariff increase, the bill rises by 9%. Find the new monthly bill.", answer: 'R1 068.20', checkMode: 'auto', correctAnswer: 'R1068.20', correctAnswers: ['R1068.20', '1068.20', 'R1 068.20', '1 068.20', 'R1068,20', 'R1 068,20'], explanation: 'Find 9% of R980: 0.09 × 980 = R88.20.\nNew bill: 980 + 88.20 = R1 068.20. ✓' },
        { difficulty: 'Medium', question: 'A gym has 650 members. Over the winter months, membership drops by 8%. Find the new number of members.', answer: '598', checkMode: 'auto', correctAnswer: '598', explanation: 'Find 8% of 650: 0.08 × 650 = 52.\nNew membership: 650 − 52 = 598 members. ✓' },
        { difficulty: 'Medium', question: 'A tablet originally priced at R4 800 goes on sale at 35% off. Find the sale price.', answer: 'R3 120', checkMode: 'auto', correctAnswer: 'R3120', correctAnswers: ['R3120', '3120', 'R3 120', '3 120'], explanation: 'Find 35% of R4 800: 0.35 × 4 800 = R1 680.\nSale price: 4 800 − 1 680 = R3 120. ✓' },

        // Block 5 — Discount / markup word problems, Rand contexts (14-17)
        { difficulty: 'Easy-Medium', question: 'A winter jacket costs R1 200 at a clothing store. During a sale, the store takes 25% off. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Discount = 25% of R1 200: 0.25 × 1 200 = R300 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R900', correctAnswers: ['R900', '900'], explanation: 'Sale price = 1 200 − 300 = R900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'A taxi fare from home to school normally costs R45. Due to rising petrol prices, the fare increases by 10%. Find the new fare.', answer: 'R49.50', checkMode: 'auto', correctAnswer: 'R49.50', correctAnswers: ['R49.50', '49.50', 'R49,50', '49,50', 'R49.5', '49.5'], explanation: 'Find 10% of R45: 0.10 × 45 = R4.50.\nNew fare: 45 + 4.50 = R49.50. ✓' },
        { difficulty: 'Medium', question: 'A spaza shop buys a case of canned food for R150 and marks the price up by 50% to sell to customers. Find the mark-up amount and the selling price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R75', correctAnswers: ['R75', '75'], explanation: 'Mark-up = 50% of R150: 0.50 × 150 = R75 ✓' },
          { label: 'b) Selling price', correctAnswer: 'R225', correctAnswers: ['R225', '225'], explanation: 'Selling price = 150 + 75 = R225 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A catering bill comes to R560 before a service fee of 15% is added. Find the total amount the customer must pay, including the service fee.', answer: 'R644', checkMode: 'auto', correctAnswer: 'R644', correctAnswers: ['R644', '644'], explanation: 'Find 15% of R560: 0.15 × 560 = R84.\nTotal = 560 + 84 = R644. ✓' },

        // Block 6 — Multi-step / error-spotting (18-19)
        { difficulty: 'Hard', question: 'A microwave costs R2 000. The shop first decreases the price by 10% for a sale, then a month later increases the sale price by 10%. Find the final price, and state whether it is the same as the original R2 000.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R1 980', correctAnswers: ['R1 980', 'R1980', '1980', '1 980'], explanation: 'After the 10% decrease: 2 000 × 0.90 = R1 800.\nAfter the 10% increase on the sale price: 1 800 × 1.10 = R1 980. ✓' },
          { label: 'b) Is the final price the same as the original R2 000?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R1 980 is R20 less than R2 000 — the two percentages were applied to different base amounts, so they do not cancel out. ✓' },
        ] },
        { difficulty: 'Hard', question: 'A pair of sunglasses costs R350. Naledi says: "The shop increased the price by 40% to R490, then decreased it by 40% back to R294, so it is R56 cheaper than the original price — but that must be a mistake, since a 40% increase and a 40% decrease should cancel out." Is Naledi right that it must be a mistake? Explain.', answer: 'No, Naledi is wrong that it is a mistake — the calculation R490 and then R294 is correct. A 40% increase and a 40% decrease do not cancel out because they are percentages of different amounts: the increase is 40% of R350 (R140), but the decrease is 40% of the larger R490 (R196), so the final price ends up lower than the original R350.', checkMode: 'self' },

        // Block 7 — Profit, loss, budgets and accounts (20-23)
        { difficulty: 'Easy-Medium', question: 'A vendor buys a batch of school bags for R410 (cost price) and sells it for R492 (selling price). Find the profit and the percentage profit.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Profit', correctAnswer: 'R82', correctAnswers: ['R82', '82'], explanation: 'Profit = Selling price − Cost price = 492 − 410 = R82 ✓' },
          { label: 'b) Percentage profit', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% profit = (Profit ÷ Cost price) × 100 = (82 ÷ 410) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'A shop buys a set of patio umbrellas for R850 (cost price). Because the season has ended, they are sold for R680 (selling price). Find the loss and the percentage loss.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Loss', correctAnswer: 'R170', correctAnswers: ['R170', '170'], explanation: 'Loss = Cost price − Selling price = 850 − 680 = R170 ✓' },
          { label: 'b) Percentage loss', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% loss = (Loss ÷ Cost price) × 100 = (170 ÷ 850) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Kagiso has a monthly income of R7 500. His budgeted expenses are: rent R3 000, food R1 400, transport R700 and other costs R400. Find his total expenses and his balance.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total expenses', correctAnswer: 'R5 500', correctAnswers: ['R5500', '5500', 'R5 500', '5 500'], explanation: 'Total expenses = 3 000 + 1 400 + 700 + 400 = R5 500 ✓' },
          { label: 'b) Balance', correctAnswer: 'R2 000', correctAnswers: ['R2000', '2000', 'R2 000', '2 000'], explanation: 'Balance = Income − Expenses = 7 500 − 5 500 = R2 000 ✓' },
        ] },
        { difficulty: 'Hard', question: "Sipho's hardware account shows an opening balance owed of R600. During the month he buys R250 of extra tools on account, and makes a payment of R350. Find the closing balance owed.", answer: 'R500', checkMode: 'auto', correctAnswer: 'R500', correctAnswers: ['R500', '500'], explanation: 'Closing balance = Opening balance + Purchases − Payment = 600 + 250 − 350 = R500 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Outstanding! You have mastered percentages, from conversions through to real-world discount, profit/loss and budgeting problems.' },
        { minScore: 18, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 12, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
