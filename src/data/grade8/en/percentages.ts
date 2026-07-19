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
        'Bar model showing R400 (original, 100%) plus a 15% segment making up R460 (115%), with a reverse arrow labelled ÷1.15 pointing back from the final amount to the original',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 115" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="105" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">Original R400 (100%)</text>` +
        `<text x="203" y="13" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">+15%</text>` +
        `<rect x="20" y="20" width="170" height="28" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2"/>` +
        `<rect x="190" y="20" width="26" height="28" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2"/>` +
        `<rect x="20" y="20" width="196" height="28" fill="none" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="118" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">New price R460 (115%)</text>` +
        `<line x1="216" y1="85" x2="30" y2="85" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="24,85 32,80 32,90" fill="#2563eb"/>` +
        `<text x="118" y="103" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2563eb">÷ 1.15 — work backwards to the original</text>` +
        `</svg>`,
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
          answer: 'Yes — 40% of 500 is 200, so the decreased amount is 500 − 200 = R300, which matches her answer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate a new amount after a percentage increase or decrease using the two-step method and the one-step multiplier shortcut" />',

      diagramPlaceholder:
        'Two-step flowchart showing Original R12 000, an arrow labelled ×0.09 leading to the increase R1 080, then an arrow labelled +R12 000 leading to the final new salary R13 080',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="25" y="10" width="170" height="32" rx="6" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="110" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Original: R12 000</text>` +
        `<line x1="110" y1="42" x2="110" y2="64" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="110,70 104,60 116,60" fill="#ea580c"/>` +
        `<text x="150" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">×0.09</text>` +
        `<rect x="25" y="74" width="170" height="32" rx="6" fill="rgba(234,88,12,0.12)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="110" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Increase: R1 080</text>` +
        `<line x1="110" y1="106" x2="110" y2="128" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="110,134 104,124 116,124" fill="#2563eb"/>` +
        `<text x="158" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">+ R12 000</text>` +
        `<rect x="25" y="138" width="170" height="32" rx="6" fill="rgba(22,163,74,0.12)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="110" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">New salary: R13 080</text>` +
        `</svg>`,
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
        'Three stacked bars proportional to R100 (original), R110 (after +10%) and R99 (after -10%), with a reference line showing the final bar falls short of the original',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 150" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="20" y="15" width="180" height="22" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="110" y="30" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">R100 — Original</text>` +
        `<rect x="20" y="52" width="198" height="22" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="119" y="67" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">R110 — after +10%</text>` +
        `<rect x="20" y="89" width="178" height="22" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="109" y="104" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">R99 — after −10%</text>` +
        `<line x1="200" y1="10" x2="200" y2="115" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>` +
        `<text x="140" y="135" text-anchor="middle" font-size="9" fill="#991b1b">R99 &lt; R100 — the two 10% changes do not cancel out</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered percentages.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 1-3 Finding the original amount (working backwards) | 4-7
    // Calculating the new amount directly (one-step multiplier) | 8-10
    // Expressing a change as a percentage (percentage change formula) | 11-14
    // Discount / markup / VAT word problems (Rand contexts) | 15-17 Multi-step
    // successive percentage-change chains | 18-20 Error-spotting / reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Finding the original amount (0-2)
        { difficulty: 'Easy', question: 'A tablet increases in price by 15% to R552. Find the original price.', answer: 'R480', checkMode: 'auto', correctAnswer: 'R480', correctAnswers: ['R480', '480'], explanation: 'New price = 115% of original.\nOriginal = 552 ÷ 1.15 = R480.\nCheck: 480 × 1.15 = 552 ✓' },
        { difficulty: 'Medium', question: 'After a 10% discount, a jacket costs R522. Find the original price of the jacket.', answer: 'R580', checkMode: 'auto', correctAnswer: 'R580', correctAnswers: ['R580', '580'], explanation: 'New price = 90% of original.\nOriginal = 522 ÷ 0.9 = R580.\nCheck: 580 × 0.9 = 522 ✓' },
        { difficulty: 'Medium', question: "A club's membership grew by 20% to 840 members this year. Find last year's membership.", answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'New total = 120% of original.\nOriginal = 840 ÷ 1.2 = 700 members.\nCheck: 700 × 1.2 = 840 ✓' },

        // Block 2 — Calculating the new amount directly (3-6)
        { difficulty: 'Easy', question: "Zanele's salary of R6 500 increases by 9%. Use the one-step multiplier to find her new salary.", answer: 'R7 085', checkMode: 'auto', correctAnswer: 'R7085', correctAnswers: ['R7085', '7085', 'R7 085', '7 085'], explanation: 'Multiplier for a 9% increase = 1.09.\nNew salary = 6 500 × 1.09 = R7 085 ✓' },
        { difficulty: 'Medium', question: 'A generator priced at R3 400 is discounted by 18%. Find the sale price using a single multiplier.', answer: 'R2 788', checkMode: 'auto', correctAnswer: 'R2788', correctAnswers: ['R2788', '2788', 'R2 788', '2 788'], explanation: 'Multiplier for an 18% decrease = 0.82.\nSale price = 3 400 × 0.82 = R2 788 ✓' },
        { difficulty: 'Medium', question: 'A game reserve had 12 500 animals. Over three years, careful conservation increased the population by 24%. Find the new population.', answer: '15 500', checkMode: 'auto', correctAnswer: '15500', correctAnswers: ['15500', '15 500'], explanation: 'Multiplier for a 24% increase = 1.24.\nNew population = 12 500 × 1.24 = 15 500 animals ✓' },
        { difficulty: 'Medium', question: 'A cricket bat costs R940 and is discounted by 25% for a end-of-season sale. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R235', correctAnswers: ['R235', '235'], explanation: 'Discount = 25% of R940: 0.25 × 940 = R235 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R705', correctAnswers: ['R705', '705'], explanation: 'Sale price = 940 − 235 = R705 ✓' },
        ] },

        // Block 3 — Expressing a change as a percentage (7-9)
        { difficulty: 'Easy', question: "A learner's spelling test mark rose from 65 to 78 (both out of 100). Find the percentage increase relative to the original mark.", answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Increase = 78 − 65 = 13.\nPercentage increase = 13 ÷ 65 × 100 = 20% ✓' },
        { difficulty: 'Medium', question: "A shop's weekly sales fell from R450 000 to R360 000. Find the percentage decrease.", answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Decrease = 450 000 − 360 000 = 90 000.\nPercentage decrease = 90 000 ÷ 450 000 × 100 = 20% ✓' },
        { difficulty: 'Medium', question: 'A water tank held 120 litres and now holds 150 litres after rain. Find the percentage increase in the amount of water.', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Increase = 150 − 120 = 30.\nPercentage increase = 30 ÷ 120 × 100 = 25% ✓' },

        // Block 4 — Discount / markup / VAT word problems, Rand contexts (10-13)
        { difficulty: 'Medium', question: 'A washing machine has a pre-VAT price of R780. Find the total price once 15% VAT is added.', answer: 'R897', checkMode: 'auto', correctAnswer: 'R897', correctAnswers: ['R897', '897'], explanation: 'VAT = 15% of R780: 0.15 × 780 = R117.\nTotal = 780 + 117 = R897 ✓' },
        { difficulty: 'Medium', question: 'A wholesaler buys crates of eggs for R250 each and marks the price up by 50% to sell to a supermarket. Find the selling price per crate.', answer: 'R375', checkMode: 'auto', correctAnswer: 'R375', correctAnswers: ['R375', '375'], explanation: 'Mark-up = 50% of R250: 0.50 × 250 = R125.\nSelling price = 250 + 125 = R375 ✓' },
        { difficulty: 'Medium', question: 'A furniture store buys a couch for R340 and marks it up by 45% before selling it. Find the mark-up amount and the selling price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R153', correctAnswers: ['R153', '153'], explanation: 'Mark-up = 45% of R340: 0.45 × 340 = R153 ✓' },
          { label: 'b) Selling price', correctAnswer: 'R493', correctAnswers: ['R493', '493'], explanation: 'Selling price = 340 + 153 = R493 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A catering company charges R620 for a function before adding a 15% service fee. Find the total amount the client pays.', answer: 'R713', checkMode: 'auto', correctAnswer: 'R713', correctAnswers: ['R713', '713'], explanation: 'Service fee = 15% of R620: 0.15 × 620 = R93.\nTotal = 620 + 93 = R713 ✓' },

        // Block 5 — Multi-step successive percentage-change chains (14-16)
        { difficulty: 'Hard', question: 'A plot of land valued at R5 000 increases in value by 20%, and the following year the new value decreases by 10%. Find the value after both changes.', answer: 'R5 400', checkMode: 'auto', correctAnswer: 'R5400', correctAnswers: ['R5400', '5400', 'R5 400', '5 400'], explanation: 'After the 20% increase: 5 000 × 1.20 = R6 000.\nAfter the 10% decrease on the new value: 6 000 × 0.90 = R5 400 ✓' },
        { difficulty: 'Hard', question: 'A second-hand car priced at R2 000 is discounted by 30% for a quick sale, then the dealer raises the discounted price by 20% the next month. Find the final price.', answer: 'R1 680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'After the 30% decrease: 2 000 × 0.70 = R1 400.\nAfter the 20% increase on the new price: 1 400 × 1.20 = R1 680 ✓' },
        { difficulty: 'Hard', question: "An investment of R4 000 grows by 10% in the first year, then the new balance grows by a further 10% in the second year. Find the final balance.", answer: 'R4 840', checkMode: 'auto', correctAnswer: 'R4840', correctAnswers: ['R4840', '4840', 'R4 840', '4 840'], explanation: 'After year 1: 4 000 × 1.10 = R4 400.\nAfter year 2 (10% of the new balance): 4 400 × 1.10 = R4 840 ✓' },

        // Block 6 — Error-spotting / reasoning (17-19)
        { difficulty: 'Hard', question: 'A phone costs R900. The shop increases the price by 30%, then a month later discounts the new price by 30%. Find the final price, and state whether it equals the original R900.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R819', correctAnswers: ['R819', '819'], explanation: 'After the 30% increase: 900 × 1.30 = R1 170.\nAfter the 30% decrease on the new price: 1 170 × 0.70 = R819 ✓' },
          { label: 'b) Does the final price equal the original R900?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R819 is R81 less than R900 — the 30% decrease is calculated on the larger increased amount, so more is removed than was added. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Sipho says: "A price decreased by 50% and then increased by 100% will always return to the original amount, no matter what the starting price is." Investigate his claim using R600 as the starting price, and explain whether he is correct.', answer: 'Yes, he is correct for this example (and in general): R600 decreased by 50% gives R300, and R300 increased by 100% gives R600 again — because a 100% increase always exactly doubles whatever amount it is applied to, and doubling a halved amount returns the original.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle says a 45% increase followed by a 20% decrease on a R2 000 item gives the same final price as a single 25% increase, "since 45% − 20% = 25%". Calculate the actual final price after the two successive changes, and explain why her reasoning is incorrect.', answer: 'The actual final price is R2 320 (2 000 × 1.45 = 2 900, then 2 900 × 0.80 = 2 320), which is not the same as a single 25% increase on R2 000 (which would give R2 500). Amahle\'s reasoning is incorrect because percentage changes cannot simply be subtracted — each percentage is applied to a different base amount, so the combined effect must be calculated step by step, not by subtracting the percentages.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered Grade 8 percentages, from reversing changes to multi-step chains and real-world Rand problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Finding the original amount (0-2)
        { difficulty: 'Easy', question: 'A pair of sneakers increases in price by 25% to R875. Find the original price.', answer: 'R700', checkMode: 'auto', correctAnswer: 'R700', correctAnswers: ['R700', '700'], explanation: 'New price = 125% of original.\nOriginal = 875 ÷ 1.25 = R700.\nCheck: 700 × 1.25 = 875 ✓' },
        { difficulty: 'Medium', question: 'After a 15% discount, a heater costs R578. Find the original price of the heater.', answer: 'R680', checkMode: 'auto', correctAnswer: 'R680', correctAnswers: ['R680', '680'], explanation: 'New price = 85% of original.\nOriginal = 578 ÷ 0.85 = R680.\nCheck: 680 × 0.85 = 578 ✓' },
        { difficulty: 'Medium', question: "A choir's membership grew by 12% to 896 singers this year. Find last year's membership.", answer: '800', checkMode: 'auto', correctAnswer: '800', explanation: 'New total = 112% of original.\nOriginal = 896 ÷ 1.12 = 800 singers.\nCheck: 800 × 1.12 = 896 ✓' },

        // Block 2 — Calculating the new amount directly (3-6)
        { difficulty: 'Easy', question: "Bongani's salary of R7 200 increases by 7%. Use the one-step multiplier to find his new salary.", answer: 'R7 704', checkMode: 'auto', correctAnswer: 'R7704', correctAnswers: ['R7704', '7704', 'R7 704', '7 704'], explanation: 'Multiplier for a 7% increase = 1.07.\nNew salary = 7 200 × 1.07 = R7 704 ✓' },
        { difficulty: 'Medium', question: 'A drone priced at R2 600 is discounted by 35%. Find the sale price using a single multiplier.', answer: 'R1 690', checkMode: 'auto', correctAnswer: 'R1690', correctAnswers: ['R1690', '1690', 'R1 690', '1 690'], explanation: 'Multiplier for a 35% decrease = 0.65.\nSale price = 2 600 × 0.65 = R1 690 ✓' },
        { difficulty: 'Medium', question: 'A nature reserve had 9 800 trees. Over five years, a planting programme increased the number of trees by 15%. Find the new number of trees.', answer: '11 270', checkMode: 'auto', correctAnswer: '11270', correctAnswers: ['11270', '11 270'], explanation: 'Multiplier for a 15% increase = 1.15.\nNew total = 9 800 × 1.15 = 11 270 trees ✓' },
        { difficulty: 'Medium', question: 'A rugby ball costs R875 and is discounted by 32% for a clearance sale. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R280', correctAnswers: ['R280', '280'], explanation: 'Discount = 32% of R875: 0.32 × 875 = R280 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R595', correctAnswers: ['R595', '595'], explanation: 'Sale price = 875 − 280 = R595 ✓' },
        ] },

        // Block 3 — Expressing a change as a percentage (7-9)
        { difficulty: 'Easy', question: "A learner's mathematics mark rose from 80 to 92 (both out of 100). Find the percentage increase relative to the original mark.", answer: '15%', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: 'Increase = 92 − 80 = 12.\nPercentage increase = 12 ÷ 80 × 100 = 15% ✓' },
        { difficulty: 'Medium', question: "A factory's monthly output fell from 560 units to 420 units. Find the percentage decrease.", answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Decrease = 560 − 420 = 140.\nPercentage decrease = 140 ÷ 560 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'A community vegetable garden produced 150 kg of produce last season and 198 kg this season. Find the percentage increase in produce.', answer: '32%', checkMode: 'auto', correctAnswer: '32%', correctAnswers: ['32%', '32'], explanation: 'Increase = 198 − 150 = 48.\nPercentage increase = 48 ÷ 150 × 100 = 32% ✓' },

        // Block 4 — Discount / markup / VAT word problems, Rand contexts (10-13)
        { difficulty: 'Medium', question: 'A fridge has a pre-VAT price of R640. Find the total price once 15% VAT is added.', answer: 'R736', checkMode: 'auto', correctAnswer: 'R736', correctAnswers: ['R736', '736'], explanation: 'VAT = 15% of R640: 0.15 × 640 = R96.\nTotal = 640 + 96 = R736 ✓' },
        { difficulty: 'Medium', question: 'A wholesaler buys boxes of tiles for R400 each and marks the price up by 35% to sell to a hardware store. Find the selling price per box.', answer: 'R540', checkMode: 'auto', correctAnswer: 'R540', correctAnswers: ['R540', '540'], explanation: 'Mark-up = 35% of R400: 0.35 × 400 = R140.\nSelling price = 400 + 140 = R540 ✓' },
        { difficulty: 'Medium', question: 'A bakery buys a sack of flour for R275 and marks it up by 20% before using it to price bread. Find the mark-up amount and the marked-up price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R55', correctAnswers: ['R55', '55'], explanation: 'Mark-up = 20% of R275: 0.20 × 275 = R55 ✓' },
          { label: 'b) Marked-up price', correctAnswer: 'R330', correctAnswers: ['R330', '330'], explanation: 'Marked-up price = 275 + 55 = R330 ✓' },
        ] },
        { difficulty: 'Hard', question: 'An events company charges R950 for a booking before adding a 12% service fee. Find the total amount the client pays.', answer: 'R1 064', checkMode: 'auto', correctAnswer: 'R1064', correctAnswers: ['R1064', '1064', 'R1 064', '1 064'], explanation: 'Service fee = 12% of R950: 0.12 × 950 = R114.\nTotal = 950 + 114 = R1 064 ✓' },

        // Block 5 — Multi-step successive percentage-change chains (14-16)
        { difficulty: 'Hard', question: 'A share priced at R3 000 increases in value by 30%, and the following month the new value decreases by 20%. Find the value after both changes.', answer: 'R3 120', checkMode: 'auto', correctAnswer: 'R3120', correctAnswers: ['R3120', '3120', 'R3 120', '3 120'], explanation: 'After the 30% increase: 3 000 × 1.30 = R3 900.\nAfter the 20% decrease on the new value: 3 900 × 0.80 = R3 120 ✓' },
        { difficulty: 'Hard', question: 'A motorbike priced at R1 600 is discounted by 25% for a quick sale, then the dealer raises the discounted price by 40% the next month. Find the final price.', answer: 'R1 680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'After the 25% decrease: 1 600 × 0.75 = R1 200.\nAfter the 40% increase on the new price: 1 200 × 1.40 = R1 680 ✓' },
        { difficulty: 'Hard', question: "A savings balance of R5 000 falls by 20% in a difficult month, then the new balance falls by a further 20% the next month. Find the final balance.", answer: 'R3 200', checkMode: 'auto', correctAnswer: 'R3200', correctAnswers: ['R3200', '3200', 'R3 200', '3 200'], explanation: 'After month 1: 5 000 × 0.80 = R4 000.\nAfter month 2 (20% of the new balance): 4 000 × 0.80 = R3 200 ✓' },

        // Block 6 — Error-spotting / reasoning (17-19)
        { difficulty: 'Hard', question: 'A speaker costs R640. The shop decreases the price by 25%, then a month later increases the new price by 25%. Find the final price, and state whether it equals the original R640.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'After the 25% decrease: 640 × 0.75 = R480.\nAfter the 25% increase on the new price: 480 × 1.25 = R600 ✓' },
          { label: 'b) Does the final price equal the original R640?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R600 is R40 less than R640 — the 25% increase is calculated on the smaller discounted amount, so less is added back than was removed. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Thabo says: "A price decreased by 50% and then increased by 100% will always return to the original amount, no matter what the starting price is." Investigate his claim using R750 as the starting price, and explain whether he is correct.', answer: 'Yes, he is correct for this example (and in general): R750 decreased by 50% gives R375, and R375 increased by 100% gives R750 again — because a 100% increase always exactly doubles whatever amount it is applied to, and doubling a halved amount returns the original.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato says a 40% increase followed by a 20% decrease on a R1 500 item gives the same final price as a single 20% increase, "since 40% − 20% = 20%". Calculate the actual final price after the two successive changes, and explain why her reasoning is incorrect.', answer: 'The actual final price is R1 680 (1 500 × 1.40 = 2 100, then 2 100 × 0.80 = 1 680), which is not the same as a single 20% increase on R1 500 (which would give R1 800). Lerato\'s reasoning is incorrect because percentage changes cannot simply be subtracted — each percentage is applied to a different base amount, so the combined effect must be calculated step by step, not by subtracting the percentages.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered Grade 8 percentages, from reversing changes to multi-step chains and real-world Rand problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1 and Set 2, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Finding the original amount (0-2)
        { difficulty: 'Easy', question: 'A microwave increases in price by 18% to R1 180. Find the original price.', answer: 'R1 000', checkMode: 'auto', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], explanation: 'New price = 118% of original.\nOriginal = 1 180 ÷ 1.18 = R1 000.\nCheck: 1 000 × 1.18 = 1 180 ✓' },
        { difficulty: 'Medium', question: 'After a 40% discount, a coat costs R450. Find the original price of the coat.', answer: 'R750', checkMode: 'auto', correctAnswer: 'R750', correctAnswers: ['R750', '750'], explanation: 'New price = 60% of original.\nOriginal = 450 ÷ 0.6 = R750.\nCheck: 750 × 0.6 = 450 ✓' },
        { difficulty: 'Medium', question: "A soccer club's fan base grew by 35% to 945 members this year. Find last year's fan base.", answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'New total = 135% of original.\nOriginal = 945 ÷ 1.35 = 700 members.\nCheck: 700 × 1.35 = 945 ✓' },

        // Block 2 — Calculating the new amount directly (3-6)
        { difficulty: 'Easy', question: "Nomsa's salary of R8 400 increases by 11%. Use the one-step multiplier to find her new salary.", answer: 'R9 324', checkMode: 'auto', correctAnswer: 'R9324', correctAnswers: ['R9324', '9324', 'R9 324', '9 324'], explanation: 'Multiplier for an 11% increase = 1.11.\nNew salary = 8 400 × 1.11 = R9 324 ✓' },
        { difficulty: 'Medium', question: 'A washing machine priced at R5 600 is discounted by 22%. Find the sale price using a single multiplier.', answer: 'R4 368', checkMode: 'auto', correctAnswer: 'R4368', correctAnswers: ['R4368', '4368', 'R4 368', '4 368'], explanation: 'Multiplier for a 22% decrease = 0.78.\nSale price = 5 600 × 0.78 = R4 368 ✓' },
        { difficulty: 'Medium', question: 'A wildlife sanctuary had 7 500 hectares of protected land. Over four years, new donations increased the protected area by 32%. Find the new area.', answer: '9 900', checkMode: 'auto', correctAnswer: '9900', correctAnswers: ['9900', '9 900'], explanation: 'Multiplier for a 32% increase = 1.32.\nNew area = 7 500 × 1.32 = 9 900 hectares ✓' },
        { difficulty: 'Medium', question: 'A dining table costs R1 260 and is discounted by 15% for a clearance sale. Find the discount amount and the sale price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Discount amount', correctAnswer: 'R189', correctAnswers: ['R189', '189'], explanation: 'Discount = 15% of R1 260: 0.15 × 1 260 = R189 ✓' },
          { label: 'b) Sale price', correctAnswer: 'R1 071', correctAnswers: ['R1071', '1071', 'R1 071', '1 071'], explanation: 'Sale price = 1 260 − 189 = R1 071 ✓' },
        ] },

        // Block 3 — Expressing a change as a percentage (7-9)
        { difficulty: 'Easy', question: "A learner's science mark rose from 40 to 54 (both out of 100). Find the percentage increase relative to the original mark.", answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Increase = 54 − 40 = 14.\nPercentage increase = 14 ÷ 40 × 100 = 35% ✓' },
        { difficulty: 'Medium', question: "A store's daily footfall fell from 720 customers to 540 customers. Find the percentage decrease.", answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Decrease = 720 − 540 = 180.\nPercentage decrease = 180 ÷ 720 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'A dam held 250 million litres of water and now holds 300 million litres after heavy rain. Find the percentage increase in water stored.', answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Increase = 300 − 250 = 50.\nPercentage increase = 50 ÷ 250 × 100 = 20% ✓' },

        // Block 4 — Discount / markup / VAT word problems, Rand contexts (10-13)
        { difficulty: 'Medium', question: 'A laptop has a pre-VAT price of R860. Find the total price once 15% VAT is added.', answer: 'R989', checkMode: 'auto', correctAnswer: 'R989', correctAnswers: ['R989', '989'], explanation: 'VAT = 15% of R860: 0.15 × 860 = R129.\nTotal = 860 + 129 = R989 ✓' },
        { difficulty: 'Medium', question: 'A wholesaler buys sets of tools for R480 each and marks the price up by 25% to sell to a hardware store. Find the selling price per set.', answer: 'R600', checkMode: 'auto', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Mark-up = 25% of R480: 0.25 × 480 = R120.\nSelling price = 480 + 120 = R600 ✓' },
        { difficulty: 'Medium', question: 'A spaza shop buys a crate of cooldrink for R180 and marks it up by 60% before selling it to customers. Find the mark-up amount and the selling price.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Mark-up amount', correctAnswer: 'R108', correctAnswers: ['R108', '108'], explanation: 'Mark-up = 60% of R180: 0.60 × 180 = R108 ✓' },
          { label: 'b) Selling price', correctAnswer: 'R288', correctAnswers: ['R288', '288'], explanation: 'Selling price = 180 + 108 = R288 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A photography studio charges R750 for a shoot before adding an 18% service fee. Find the total amount the client pays.', answer: 'R885', checkMode: 'auto', correctAnswer: 'R885', correctAnswers: ['R885', '885'], explanation: 'Service fee = 18% of R750: 0.18 × 750 = R135.\nTotal = 750 + 135 = R885 ✓' },

        // Block 5 — Multi-step successive percentage-change chains (14-16)
        { difficulty: 'Hard', question: 'A workshop valued at R4 000 increases in value by 15%, and the following year the new value decreases by 15%. Find the value after both changes.', answer: 'R3 910', checkMode: 'auto', correctAnswer: 'R3910', correctAnswers: ['R3910', '3910', 'R3 910', '3 910'], explanation: 'After the 15% increase: 4 000 × 1.15 = R4 600.\nAfter the 15% decrease on the new value: 4 600 × 0.85 = R3 910 ✓' },
        { difficulty: 'Hard', question: 'A trailer priced at R3 000 is discounted by 10% for a quick sale, then the dealer raises the discounted price by 30% the next month. Find the final price.', answer: 'R3 510', checkMode: 'auto', correctAnswer: 'R3510', correctAnswers: ['R3510', '3510', 'R3 510', '3 510'], explanation: 'After the 10% decrease: 3 000 × 0.90 = R2 700.\nAfter the 30% increase on the new price: 2 700 × 1.30 = R3 510 ✓' },
        { difficulty: 'Hard', question: "An investment of R1 600 grows by 25% in the first year, then the new balance grows by a further 25% in the second year. Find the final balance.", answer: 'R2 500', checkMode: 'auto', correctAnswer: 'R2500', correctAnswers: ['R2500', '2500', 'R2 500', '2 500'], explanation: 'After year 1: 1 600 × 1.25 = R2 000.\nAfter year 2 (25% of the new balance): 2 000 × 1.25 = R2 500 ✓' },

        // Block 6 — Error-spotting / reasoning (17-19)
        { difficulty: 'Hard', question: 'A watch costs R2 000. The shop increases the price by 45%, then a month later discounts the new price by 20%. Find the final price, and state whether it equals the original R2 000.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Final price', correctAnswer: 'R2 320', correctAnswers: ['R2320', '2320', 'R2 320', '2 320'], explanation: 'After the 45% increase: 2 000 × 1.45 = R2 900.\nAfter the 20% decrease on the new price: 2 900 × 0.80 = R2 320 ✓' },
          { label: 'b) Does the final price equal the original R2 000?', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'R2 320 is R320 more than R2 000 — the percentage increase was larger and applied first on the smaller base, so the overall effect is a net increase, not a return to the original. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Kagiso says: "A price decreased by 50% and then increased by 100% will always return to the original amount, no matter what the starting price is." Investigate his claim using R500 as the starting price, and explain whether he is correct.', answer: 'Yes, he is correct for this example (and in general): R500 decreased by 50% gives R250, and R250 increased by 100% gives R500 again — because a 100% increase always exactly doubles whatever amount it is applied to, and doubling a halved amount returns the original.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zinhle says a 60% increase followed by a 60% decrease on a R500 item gives back the original price, "since the percentages are the same, they must cancel out". Calculate the actual final price after the two successive changes, and explain why her reasoning is incorrect.', answer: 'The actual final price is R320 (500 × 1.60 = 800, then 800 × 0.40 = 320), which is not the same as the original R500. Zinhle\'s reasoning is incorrect because the 60% decrease is calculated on the larger increased amount (R800), not on the original R500, so it removes more than the increase originally added — the two changes do not cancel out even though the percentages are equal.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered Grade 8 percentages, from reversing changes to multi-step chains and real-world Rand problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the study guide sections on percentages, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
