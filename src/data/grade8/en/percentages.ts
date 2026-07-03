import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage roles) ───────────────────────────────────────
// original amount  → blue   (#2563eb)
// percentage change→ orange (#ea580c)
// final amount     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Percentages',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PERCENTAGE INCREASE AND DECREASE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-and-decrease',
      title: 'Percentage Increase and Decrease',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">We revise finding percentages of whole numbers and calculating percentage increase or decrease. In Grade 8, we extend this to calculating the <strong>original</strong> or <strong>final</strong> amount when given a percentage increase or decrease, working <strong>backwards</strong> from the change.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage change')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original amount')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final amount')}</span>` +
        `</div>` +

        // ── Key formulas ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key formulas — finding the original amount</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">After an increase of x%</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The new price = ${or('(100 + x)%')} of the original.</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">${bl('Original')} = ${gr('New price')} ÷ (1 + x/100)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">After a decrease of x%</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">The new price = ${or('(100 − x)%')} of the original.</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">${bl('Original')} = ${gr('New price')} ÷ (1 − x/100)</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Think in percentages of the original</p>` +
        `<p style="margin:0;color:#1e3a8a;">The ${bl('original')} is always <strong>100%</strong>. A ${or('15% increase')} means the new price is <strong>115%</strong> of the original. A ${or('20% decrease')} means the new price is <strong>80%</strong> of the original. Divide the ${gr('final amount')} by that percentage (written as a decimal) to work backwards to the ${bl('original')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A price increases by 15% to R460. Find the original price.',
          answer: `The original price was ${bl('R400')}`,
          steps: [
            `The ${gr('new price')} represents ${or('115%')} of the ${bl('original')} — the original is 100% and the ${or('increase')} is ${or('15%')}, so 100% + 15% = ${or('115%')}.`,
            `To find the ${bl('original')}, divide the ${gr('final amount')} by 1.15 (which is 115% written as a decimal).`,
            `${bl('Original')} = ${gr('460')} ÷ 1.15 = ${bl('R400')}`,
            `<strong>Check:</strong> ${bl('400')} × 1.15 = ${gr('460')} ✓`,
          ],
        },
        {
          question: 'A price decreases by 20% to R320. Find the original price.',
          answer: `The original price was ${bl('R400')}`,
          steps: [
            `The ${gr('new price')} represents ${or('80%')} of the ${bl('original')} — the original is 100% and the ${or('decrease')} is ${or('20%')}, so 100% − 20% = ${or('80%')}.`,
            `To find the ${bl('original')}, divide the ${gr('final amount')} by 0.8 (which is 80% written as a decimal).`,
            `${bl('Original')} = ${gr('320')} ÷ 0.8 = ${bl('R400')}`,
            `<strong>Check:</strong> ${bl('400')} × 0.8 = ${gr('320')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A price increases by 20% to R360. Find the original price.',
          answer: 'R300',
          checkMode: 'auto',
          correctAnswer: 'R300',
          correctAnswers: ['R300', '300'],
          explanation: 'New price = 120% of original.\nOriginal = 360 ÷ 1.2 = R300.\nCheck: 300 × 1.2 = 360 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A price decreases by 25% to R450. Find the original price.',
          answer: 'R600',
          checkMode: 'auto',
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'New price = 75% of original.\nOriginal = 450 ÷ 0.75 = R600.\nCheck: 600 × 0.75 = 450 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says if a price increases by 10% to R220, the original was R200. Is he correct? Explain.',
          answer: 'Yes — 220÷1.1=200, so the original price was R200.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the original price after a percentage increase or decrease by working backwards using division" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing how to reverse a percentage increase and decrease to find the original amount in blue from the final amount in green with the percentage change in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING AMOUNTS FROM GIVEN PERCENTAGE CHANGES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-amounts-from-percentage-changes',
      title: 'Calculating Amounts from Given Percentage Changes',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Given an original amount and a percentage increase or decrease, we calculate the resulting amount <strong>directly</strong> by adding or subtracting the percentage of the original.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original amount')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('percentage found')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final amount')}</span>` +
        `</div>` +

        // ── Methods ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two-step method</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the ${or('percentage amount')}:</strong> Multiply the ${bl('original')} by the percentage written as a decimal.<br>e.g. 9% of R12 000 = ${or('0.09')} × ${bl('12 000')} = ${or('1 080')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Add or subtract to find the ${gr('final amount')}:</strong><br>Increase: ${gr('Final')} = ${bl('Original')} + ${or('percentage amount')}<br>Decrease: ${gr('Final')} = ${bl('Original')} − ${or('percentage amount')}</p>` +
        `</div>` +

        `</div>` +

        // ── Shortcut ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">One-step shortcut</p>` +
        `<p style="margin:0;color:#1e3a8a;">Instead of two steps, multiply the ${bl('original')} by a <strong>single multiplier</strong>.<br>Increase of 9%: ${bl('Original')} × <strong>1.09</strong> = ${gr('Final')}<br>Decrease of 30%: ${bl('Original')} × <strong>0.7</strong> = ${gr('Final')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A salary of R12,000 increases by 9%. Find the new salary.',
          answer: `The new salary is ${gr('R13,080')}`,
          steps: [
            `Find the ${or('increase')}: ${or('0.09')} × ${bl('12 000')} = ${or('1 080')}`,
            `New salary = ${bl('12 000')} + ${or('1 080')} = ${gr('R13 080')}`,
            `<strong>Check (one-step):</strong> ${bl('12 000')} × 1.09 = ${gr('13 080')} ✓`,
          ],
        },
        {
          question: 'An item priced at R850 is discounted by 30%. Find the sale price.',
          answer: `The sale price is ${gr('R595')}`,
          steps: [
            `Find the ${or('discount')}: ${or('0.3')} × ${bl('850')} = ${or('255')}`,
            `Sale price = ${bl('850')} − ${or('255')} = ${gr('R595')}`,
            `<strong>Check (one-step):</strong> ${bl('850')} × 0.7 = ${gr('595')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A salary of R15,000 increases by 6%. Find the new salary.',
          answer: 'R15,900',
          checkMode: 'auto',
          correctAnswer: 'R15900',
          correctAnswers: ['R15900', '15900', 'R15,900', '15,900', 'R15 900'],
          explanation: 'Increase = 0.06 × 15 000 = 900.\nNew salary = 15 000 + 900 = R15 900 ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'An item priced at R720 is discounted by 35%. Find the sale price.',
          answer: 'R468',
          checkMode: 'auto',
          correctAnswer: 'R468',
          correctAnswers: ['R468', '468'],
          explanation: 'Discount = 0.35 × 720 = 252.\nSale price = 720 − 252 = R468 ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says decreasing R500 by 40% gives R300. Is she correct? Explain.',
          answer: 'No — 40% of 500 is 200, so the decreased amount is 500-200=R300. Actually her answer is correct.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate a new amount after a percentage increase or decrease using the two-step method and the one-step multiplier shortcut" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing how to calculate amounts after percentage changes with original amount in blue, percentage found in orange and final amount in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS INVOLVING PERCENTAGES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-involving-percentages',
      title: 'Solving Problems Involving Percentages',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">We solve <strong>multi-step, real-life problems</strong> involving percentages, often combining percentage increase/decrease with other operations like ratio, profit/loss or successive percentage changes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('successive changes')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final result')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Successive percentage changes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Apply each change one after the other. The ${or('second change')} is calculated on the <em>new</em> amount, not the original. A 10% increase then a 10% decrease does <strong>not</strong> return to the original.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Percentage change formula</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">To find what percentage one value changed relative to the original:</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">% change = (change ÷ ${bl('original')}) × 100</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ───────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common mistake: successive changes are not symmetric</p>` +
        `<p style="margin:0;color:#991b1b;">Increasing by x% then decreasing by x% gives a ${gr('final result')} <strong>less than</strong> the ${bl('original')}. This is because the decrease is x% of the <em>increased</em> amount, which is larger than the original — so more is taken away than was added.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A shop increases prices by 10% then offers a 10% discount on the new price. Is the final price the same as the original?',
          answer: `The final price is ${gr('R99')}, not R100 — it is slightly lower`,
          steps: [
            `Start with ${bl('R100')}.`,
            `${or('Increase')} by 10%: ${bl('100')} × 1.1 = ${or('110')}`,
            `${or('Discount')} by 10% on the new price: ${or('110')} × 0.9 = ${gr('99')}`,
            `The ${gr('final price')} is R99, not R100 — ${or('successive percentage changes')} do not cancel out because the second change acts on a different base.`,
          ],
        },
        {
          question: "Sipho's test mark increased from 60% to 75%. Find the percentage increase relative to his original mark.",
          answer: `The percentage increase is ${gr('25%')}`,
          steps: [
            `Find the actual increase: 75 − ${bl('60')} = ${or('15')}`,
            `Percentage increase = ${or('15')} ÷ ${bl('60')} × 100 = ${gr('25%')}`,
            `<strong>Answer:</strong> Sipho's mark increased by ${gr('25%')} relative to his ${bl('original')} mark of 60%. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A shop increases a R100 item by 10% then later discounts the new price by 10%. Find the final price.',
          answer: 'R99',
          checkMode: 'auto',
          correctAnswer: 'R99',
          correctAnswers: ['R99', '99'],
          explanation: 'Increase: 100 × 1.1 = 110.\nDiscount: 110 × 0.9 = 99.\nFinal price = R99 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Thabo's mark increased from 50% to 65%. Find the percentage increase relative to his original mark.",
          answer: '30%',
          checkMode: 'auto',
          correctAnswer: '30%',
          correctAnswers: ['30%', '30'],
          explanation: 'Increase = 65 − 50 = 15.\nPercentage increase = 15 ÷ 50 × 100 = 30% ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle invests R8,000. After one year it increases by 12%, then decreases by 5% the next year. Find the final amount.',
          answer: 'After year 1: 8000x1.12=8960. After year 2: 8960x0.95=8512. Final amount=R8,512.',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A R900 item is discounted by 15%, then VAT of 15% is added to the new price. Find the final price.',
          answer: 'R879.75',
          checkMode: 'auto',
          correctAnswer: 'R879.75',
          correctAnswers: ['R879.75', '879.75', 'R879,75'],
          explanation: 'Discount: 900 × 0.15 = 135. New price = 900 − 135 = 765.\nVAT: 765 × 0.15 = 114.75. Final price = 765 + 114.75 = R879.75 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says increasing then decreasing by the same percentage always returns to the original amount. Is he correct? Explain with an example.',
          answer: 'No — for example R100 increased by 20% gives R120, then decreased by 20% gives R96, not R100.',
          checkMode: 'self',
        },

        // ── Q12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "A bicycle's price decreases by 30% to R980. Find the original price.",
          answer: 'R1,400',
          checkMode: 'auto',
          correctAnswer: 'R1400',
          correctAnswers: ['R1400', '1400', 'R1,400', '1,400', 'R1 400'],
          explanation: 'New price = 70% of original.\nOriginal = 980 ÷ 0.7 = R1 400 ✓',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's salary of R18,000 increases by 8%, then she receives a further 5% increase on the new salary. Find her final salary.",
          answer: 'R20,412',
          checkMode: 'auto',
          correctAnswer: 'R20412',
          correctAnswers: ['R20412', '20412', 'R20,412', '20,412', 'R20 412'],
          explanation: 'After 8% increase: 18 000 × 1.08 = 19 440.\nAfter 5% increase: 19 440 × 1.05 = R20 412 ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "A shop's revenue increased from R45,000 to R54,000. Find the percentage increase.",
          answer: '20%',
          checkMode: 'auto',
          correctAnswer: '20%',
          correctAnswers: ['20%', '20'],
          explanation: 'Increase = 54 000 − 45 000 = 9 000.\nPercentage increase = 9 000 ÷ 45 000 × 100 = 20% ✓',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says a 50% increase followed by a 50% decrease results in no overall change. Is he correct? Explain with an example.',
          answer: 'No — for example R200 increased by 50% gives R300, then decreased by 50% gives R150, not R200.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step percentage problems involving successive percentage changes and percentage increase relative to original" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing successive percentage changes with original amount in blue each change in orange and final result in green illustrating why they do not cancel out" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered percentages.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
