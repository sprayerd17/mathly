import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (division roles — Grade 6) ────────────────────────────────
// dividend  → blue   (#2563eb)
// divisor   → red    (#dc2626)
// quotient  → green  (#16a34a)
// remainder → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Division',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVIDING BY 2-DIGIT NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-by-2-digit-numbers',
      title: 'Dividing by 2-Digit Numbers',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 we divide large numbers by <strong>2-digit numbers</strong> using <strong>long division</strong>. Long division works by dividing step by step from left to right. We ask how many times the divisor goes into the first digits of the number. We write the answer above, multiply back, subtract and bring down the next digit. We repeat until all digits have been used.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dividend')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divisor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quotient')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('remainder')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Dividend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number being divided — it is the starting amount.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Divisor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number we divide by — how many equal groups we are making.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Quotient</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The answer to a division — how many are in each group.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Remainder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">What is left over after dividing as equally as possible.</p>` +
        `</div>` +

        `</div>` +

        // ── Long division steps ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The long division steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Divide</strong> — Look at the leftmost digit of the ${bl('dividend')}. If it is smaller than the ${re('divisor')}, include the next digit too, then divide.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Multiply</strong> — Multiply the ${gr('quotient')} digit you just wrote by the ${re('divisor')}. Write the result below.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Subtract</strong> — Subtract the product from the digits above it. Write the difference below the line.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Bring down</strong> — Bring the next digit of the ${bl('dividend')} down and add it to the right of your subtraction result.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Repeat</strong> — Repeat steps 1–4 until all digits have been used. Whatever is left at the end is the ${or('remainder')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Watch out: zero in the quotient</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the number you are dividing is smaller than the ${re('divisor')}, write <strong>${gr('0')}</strong> in the ${gr('quotient')}, multiply (0 × divisor = 0), subtract (nothing changes), then bring down the next digit. Never skip this zero — it is part of your answer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 4 896 ÷ 12 = 408 ─────────────────────────────────────
        {
          question: 'Calculate 4 896 ÷ 12.',
          answer: `${bl('4 896')} ÷ ${re('12')} = ${gr('408')}`,
          steps: [
            `How many times does ${re('12')} go into 4? Zero times — use the first two digits: <strong>48</strong>. ${re('12')} goes into 48 exactly 4 times. Write ${gr('4')} in the quotient above.`,
            `${gr('4')} × ${re('12')} = 48. Write 48 below. Subtract: 48 − 48 = 0.`,
            `Bring down <strong>9</strong>. ${re('12')} goes into 9 zero times — write ${gr('0')} in the quotient above. ${gr('0')} × ${re('12')} = 0. Subtract: 9 − 0 = 9.`,
            `Bring down <strong>6</strong> to get <strong>96</strong>. ${re('12')} goes into 96 exactly 8 times. Write ${gr('8')} in the quotient above. ${gr('8')} × ${re('12')} = 96. Subtract: 96 − 96 = 0. No remainder.`,
            `<strong>Answer:</strong> ${bl('4 896')} ÷ ${re('12')} = ${gr('408')} ✓`,
          ],
        },

        // ── Example 2: 7 345 ÷ 15 = 489 remainder 10 ────────────────────────
        {
          question: 'Calculate 7 345 ÷ 15.',
          answer: `${bl('7 345')} ÷ ${re('15')} = ${gr('489')} remainder ${or('10')}`,
          steps: [
            `${re('15')} goes into 7 zero times — use the first two digits: <strong>73</strong>. ${re('15')} goes into 73 four times — ${gr('4')} × ${re('15')} = 60. Write ${gr('4')} in the quotient above. Subtract: 73 − 60 = 13.`,
            `Bring down <strong>4</strong> to get <strong>134</strong>. ${re('15')} goes into 134 eight times — ${gr('8')} × ${re('15')} = 120. Write ${gr('8')} in the quotient above. Subtract: 134 − 120 = 14.`,
            `Bring down <strong>5</strong> to get <strong>145</strong>. ${re('15')} goes into 145 nine times — ${gr('9')} × ${re('15')} = 135. Write ${gr('9')} in the quotient above. Subtract: 145 − 135 = ${or('10')}.`,
            `All digits have been used. The ${or('remainder')} is ${or('10')}, which is less than the ${re('divisor')} ${re('15')}, so we stop.`,
            `<strong>Answer:</strong> ${bl('7 345')} ÷ ${re('15')} = ${gr('489')} remainder ${or('10')} ✓`,
          ],
        },

        // ── Example 3: 8 760 ÷ 24 = 365 (word problem) ──────────────────────
        {
          question: 'Sipho has R8 760 to share equally among 24 people. How much does each person get?',
          answer: `Each person gets ${gr('R365')}`,
          steps: [
            `Write the division: ${bl('8 760')} ÷ ${re('24')} = ? ${re('24')} into 8 — zero times, use the first two digits: <strong>87</strong>. ${re('24')} into 87 — three times: ${gr('3')} × ${re('24')} = 72. Write ${gr('3')} in the quotient above. Subtract: 87 − 72 = 15.`,
            `Bring down <strong>6</strong> to get <strong>156</strong>. ${re('24')} into 156 — six times: ${gr('6')} × ${re('24')} = 144. Write ${gr('6')} in the quotient above. Subtract: 156 − 144 = 12.`,
            `Bring down <strong>0</strong> to get <strong>120</strong>. ${re('24')} into 120 — five times: ${gr('5')} × ${re('24')} = 120. Write ${gr('5')} in the quotient above. Subtract: 120 − 120 = 0. No remainder.`,
            `<strong>Check:</strong> (${gr('quotient')} × ${re('divisor')}) = ${re('dividend')}<br>${gr('365')} × ${re('24')} = ${bl('8 760')} ✓`,
            `<strong>Answer:</strong> Each person gets ${gr('R365')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long division layout showing 4 896 divided by 12 with each step colour coded — dividend in blue divisor in red quotient in green remainder in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step long division of a 4-digit number by a 2-digit number with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING WITH REMAINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-with-remainders',
      title: 'Dividing with Remainders',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Sometimes a number does not divide exactly and we get a ${or('remainder')}. The ${or('remainder')} is always smaller than the ${re('divisor')}. We can express the remainder in three ways — as a whole number remainder written as <strong>R</strong>, as a fraction by writing the remainder over the divisor, or as a decimal by continuing the division with a decimal point and zeros. Always read the question carefully to decide how to express the remainder.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('remainder as whole number')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('remainder as fraction')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('remainder as decimal')}</span>` +
        `</div>` +

        // ── Three ways to express a remainder ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three ways to express a remainder</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('1. Whole number remainder (R)')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Write the leftover amount after the quotient using the letter R.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 452 ÷ 7 = 64 ${or('R 4')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('2. Remainder as a fraction')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Write the remainder over the divisor to form a fraction.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 4 567 ÷ 13 = 351 ${bl('4/13')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('3. Remainder as a decimal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Continue dividing with a decimal point and zeros after the dividend.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 1 250 ÷ 24 ≈ ${gr('52.1')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Always read the question carefully</p>` +
        `<p style="margin:0;color:#92400e;">The question tells you which form to use. If it says <em>"express as a fraction"</em> use ${bl('fraction form')}. If it says <em>"express as a decimal"</em> use ${gr('decimal form')}. If it asks <em>"how many are left over"</em> use the ${or('whole number remainder')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 4 567 ÷ 13, remainder as fraction ─────────────────────
        {
          question: 'Calculate 4 567 ÷ 13 and express the remainder as a fraction.',
          answer: `${bl('4 567')} ÷ ${re('13')} = ${gr('351')} and ${bl('4/13')}`,
          steps: [
            `Perform long division of ${bl('4 567')} ÷ ${re('13')}.`,
            `${re('13')} into 4 — zero times, use the first two digits: <strong>45</strong>. ${re('13')} into 45 = ${gr('3')} remainder 6. Write ${gr('3')} in the quotient. ${gr('3')} × ${re('13')} = 39. Subtract: 45 − 39 = 6.`,
            `Bring down <strong>6</strong> to get <strong>66</strong>. ${re('13')} into 66 = ${gr('5')} remainder 1. Write ${gr('5')} in the quotient. ${gr('5')} × ${re('13')} = 65. Subtract: 66 − 65 = 1.`,
            `Bring down <strong>7</strong> to get <strong>17</strong>. ${re('13')} into 17 = ${gr('1')} remainder ${or('4')}. Write ${gr('1')} in the quotient. ${gr('1')} × ${re('13')} = 13. Subtract: 17 − 13 = ${or('4')}.`,
            `All digits have been used. The quotient is ${gr('351')} with ${or('remainder 4')}.`,
            `Express as a fraction: write the ${or('remainder')} over the ${re('divisor')}: ${bl('4/13')}. <strong>Answer: ${gr('351')} and ${bl('4/13')}</strong>`,
          ],
        },

        // ── Example 5: 452 ÷ 7, stickers word problem ─────────────────────────
        {
          question: '7 children share 452 stickers equally. How many does each child get and how many are left over?',
          answer: `Each child gets ${gr('64')} stickers with ${or('4')} left over`,
          steps: [
            `Write the division: ${bl('452')} ÷ ${re('7')} = ?`,
            `${re('7')} into 4 — zero times, use the first two digits: <strong>45</strong>. ${re('7')} into 45 = ${gr('6')} remainder 3. Write ${gr('6')} in the quotient. ${gr('6')} × ${re('7')} = 42. Subtract: 45 − 42 = 3.`,
            `Bring down <strong>2</strong> to get <strong>32</strong>. ${re('7')} into 32 = ${gr('4')} remainder ${or('4')}. Write ${gr('4')} in the quotient. ${gr('4')} × ${re('7')} = 28. Subtract: 32 − 28 = ${or('4')}.`,
            `All digits have been used. The ${or('remainder')} is ${or('4')}, which is less than the ${re('divisor')} ${re('7')}, so we stop.`,
            `<strong>Answer:</strong> Each child gets ${gr('64')} stickers with ${or('4')} left over.`,
          ],
        },

        // ── Example 6: 1 250 ÷ 24, remainder as decimal ──────────────────────
        {
          question: 'Lerato divides 1 250 by 24. Express the answer as a decimal to one decimal place.',
          answer: `${bl('1 250')} ÷ ${re('24')} ≈ ${gr('52.1')}`,
          steps: [
            `Perform long division of ${bl('1 250')} ÷ ${re('24')}.`,
            `${re('24')} into 12 — zero times. Use the first three digits: <strong>125</strong>. ${re('24')} into 125 = ${gr('5')} remainder 5. Write ${gr('5')} in the quotient. ${gr('5')} × ${re('24')} = 120. Subtract: 125 − 120 = 5.`,
            `Bring down <strong>0</strong> to get <strong>50</strong>. ${re('24')} into 50 = ${gr('2')} remainder ${or('2')}. Write ${gr('2')} in the quotient. ${gr('2')} × ${re('24')} = 48. Subtract: 50 − 48 = ${or('2')}.`,
            `All digits have been used. Quotient so far: ${gr('52')} with ${or('remainder 2')}.`,
            `To get the decimal, place a decimal point and continue: bring down a zero to get <strong>20</strong>. ${re('24')} into 20 — zero point something, write <strong>${gr('0')}</strong> after the decimal. Bring down another zero to get <strong>200</strong>. ${re('24')} into 200 = ${gr('8')} remainder 8. Write ${gr('8')}. The decimal part gives ${gr('52.08')}.`,
            `Rounded to one decimal place: <strong>${gr('52.1')}</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples showing the same remainder expressed three ways — as a whole number remainder in orange, as a fraction in blue, and as a decimal in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide and express the remainder as a whole number remainder, as a fraction, and as a decimal with colour coded worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DIVISION BY MULTIPLES OF 10 AND 100
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-by-multiples-of-10-and-100',
      title: 'Division by Multiples of 10 and 100',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">When dividing by <strong>10</strong> we remove ${or('one zero')} from the end of the number, or move the decimal point one place to the left. When dividing by <strong>100</strong> we remove ${or('two zeros')} or move the decimal point two places to the left. When dividing by <strong>multiples of 10</strong> such as 20, 30 or 400, we ${bl('divide by the non-zero digit first')} and then ${bl('divide by the appropriate power of 10')}. This is a quick mental method that avoids long division entirely.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('zeros removed')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('division steps')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Two rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The mental division rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Dividing by 10 or 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Remove ${or('one zero')} when dividing by 10. Remove ${or('two zeros')} when dividing by 100.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">4 50${or('0')} ÷ 10 = 450 &nbsp;|&nbsp; 4 5${or('00')} ÷ 100 = 45</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Dividing by multiples of 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Step 1:')} Divide by the non-zero digit. ${bl('Step 2:')} Divide the result by 10, 100, or 1 000 as needed.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">6 000 ÷ 20 → ${bl('6 000 ÷ 2 = 3 000')} → ${bl('3 000 ÷ 10')} = ${gr('300')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Why this works</p>` +
        `<p style="margin:0;color:#14532d;">A multiple such as 300 = 3 × 100. Dividing by 300 is the same as ${bl('dividing by 3 first')} and then ${bl('dividing by 100')}. You end up with the same ${gr('final answer')} either way — but the mental steps are much easier to manage.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: 45 600 ÷ 100 = 456 ───────────────────────────────────
        {
          question: 'Calculate 45 600 ÷ 100.',
          answer: `45 600 ÷ 100 = ${gr('456')}`,
          steps: [
            `Dividing by 100 means removing ${or('two zeros')}.`,
            `45 6${or('00')} ÷ 100 = ${gr('456')} ✓`,
          ],
        },

        // ── Example 8: 84 000 ÷ 300 = 280 ───────────────────────────────────
        {
          question: 'Calculate 84 000 ÷ 300.',
          answer: `84 000 ÷ 300 = ${gr('280')}`,
          steps: [
            `${bl('Split 300 into 3 × 100.')} We can divide by 3 first, then by 100.`,
            `${bl('Divide 84 000 by 3 first:')} 84 000 ÷ 3 = 28 000.`,
            `${bl('Then divide by 100:')} 28 0${or('00')} ÷ 100 = ${gr('280')} (remove ${or('two zeros')}).`,
            `<strong>Answer:</strong> 84 000 ÷ 300 = ${gr('280')} ✓`,
          ],
        },

        // ── Example 9: 360 000 ÷ 4 000 = 90 (word problem) ──────────────────
        {
          question: 'Amahle divides 360 000 by 4 000.',
          answer: `360 000 ÷ 4 000 = ${gr('90')}`,
          steps: [
            `${bl('Split 4 000 into 4 × 1 000.')} We can divide by 4 first, then by 1 000.`,
            `${bl('Divide 360 000 by 4:')} 360 000 ÷ 4 = 90 000.`,
            `${bl('Divide by 1 000:')} 90 ${or('000')} ÷ 1 000 = ${gr('90')} (remove ${or('three zeros')}).`,
            `<strong>Answer:</strong> 360 000 ÷ 4 000 = ${gr('90')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples showing division by multiples of 10 and 100 — zeros removed highlighted in orange, division steps in blue, final answers in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the mental method for dividing by multiples of 10 and 100 by splitting the divisor into its non-zero digit and power of 10" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBLEM SOLVING WITH DIVISION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-with-division',
      title: 'Problem Solving with Division',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">When solving division word problems look for ${or('key words')} like <em>share equally</em>, <em>split</em>, <em>each</em>, <em>per</em>, <em>average</em> and <em>how many groups</em>. These words tell us to ${bl('divide')}. Read the question carefully to decide what to do with the remainder — sometimes we ${re('round up')}, sometimes we ${re('round down')} and sometimes we ${re('express it as a fraction')}. Always write your answer in a full sentence with the correct unit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('key words')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('division')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('remainder decision')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key words to look for</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        [
          'share equally', 'split', 'each', 'per', 'average', 'how many groups',
        ].map(w => `<span style="background:#fed7aa;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#ea580c;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── What to do with the remainder ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">What to do with the remainder</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Round down')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Use the ${gr('quotient')} as your answer and ignore the remainder.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Use when you cannot use part of an item — e.g. <em>how many full boxes</em>?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Round up')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Add 1 to the ${gr('quotient')} — the leftover amount still needs to be handled.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Use when everything must fit — e.g. <em>how many trips are needed</em>?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Express as a fraction')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Write the remainder over the divisor when sharing and each part counts.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Use when the leftover can be split further — e.g. money.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Always write a full sentence</p>` +
        `<p style="margin:0;color:#14532d;">After every division word problem, write your ${gr('final answer')} in a full sentence with the correct unit — for example: "Each class has <strong>52 learners</strong>" or "The truck needs <strong>34 trips</strong>."</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 10: 1 248 ÷ 24 = 52 ──────────────────────────────────────
        {
          question: 'A school has 1 248 learners split equally into 24 classes. How many learners are in each class?',
          answer: `Each class has ${gr('52')} learners`,
          steps: [
            `${or('Key word:')} <em>"split equally"</em> — this tells us to ${bl('divide')}.`,
            `Write the ${bl('division:')} ${bl('1 248')} ÷ ${bl('24')} = ?`,
            `${bl('Divide:')} 24 into 12 — zero times, so use the first three digits: <strong>124</strong>. 24 into 124 = <strong>5</strong> remainder 4 (5 × 24 = 120; 124 − 120 = 4).`,
            `Bring down <strong>8</strong> to get <strong>48</strong>. 24 into 48 = <strong>2</strong> exactly (2 × 24 = 48; 48 − 48 = 0). No remainder.`,
            `${re('Remainder decision:')} The division is exact — no rounding needed.`,
            `<strong>${gr('Answer:')} Each class has ${gr('52')} learners.</strong>`,
          ],
        },

        // ── Example 11: 4 750 ÷ 35 = 135 remainder 25 ────────────────────────
        {
          question: 'Thabo has R4 750 and wants to buy as many books as possible at R35 each. How many books can he buy and how much money will he have left?',
          answer: `Thabo can buy ${gr('135')} books and will have ${gr('R25')} left over`,
          steps: [
            `${or('Key words:')} <em>"buy as many as possible"</em> and <em>"each"</em> — this is grouping ${bl('division')}.`,
            `Write the ${bl('division:')} ${bl('4 750')} ÷ ${bl('35')} = ?`,
            `${bl('Divide:')} 35 into 4 — zero times, use the first two digits: <strong>47</strong>. 35 into 47 = <strong>1</strong> (1 × 35 = 35; 47 − 35 = 12). Bring down <strong>5</strong> → <strong>125</strong>. 35 into 125 = <strong>3</strong> (3 × 35 = 105; 125 − 105 = 20). Bring down <strong>0</strong> → <strong>200</strong>. 35 into 200 = <strong>5</strong> (5 × 35 = 175; 200 − 175 = 25). Remainder: <strong>25</strong>.`,
            `Quotient: <strong>135</strong> remainder <strong>25</strong>.`,
            `${re('Remainder decision:')} ${re('Round down')} — Thabo cannot buy part of a book, so the remainder of R25 is simply left over.`,
            `<strong>${gr('Answer:')} Thabo can buy ${gr('135')} books and will have ${gr('R25')} left over.</strong>`,
          ],
        },

        // ── Example 12: 25 000 ÷ 750 → 34 trips ──────────────────────────────
        {
          question: 'A truck carries 25 000 kg of goods in equal loads of 750 kg per trip. How many trips are needed?',
          answer: `The truck needs ${gr('34')} trips`,
          steps: [
            `${or('Key words:')} <em>"equal loads"</em> and <em>"per trip"</em> — this is grouping ${bl('division')}.`,
            `Write the ${bl('division:')} ${bl('25 000')} ÷ ${bl('750')} = ?`,
            `${bl('Simplify:')} Divide both numbers by 10 → ${bl('2 500')} ÷ ${bl('75')}.`,
            `${bl('Divide:')} 75 into 250 = <strong>3</strong> (3 × 75 = 225; 250 − 225 = 25). Bring down <strong>0</strong> → <strong>250</strong>. 75 into 250 = <strong>3</strong> (3 × 75 = 225; 250 − 225 = 25). Quotient: <strong>33</strong> remainder <strong>25</strong>.`,
            `${re('Remainder decision:')} ${re('Round up')} — there are still goods left after 33 trips, so the truck needs one more trip for the remaining goods.`,
            `<strong>${gr('Answer:')} The truck needs ${gr('34')} trips.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three word problem scenarios showing key words highlighted in orange, division working in blue, remainder decision in red, and final answer in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve division word problems by identifying key words, performing the division, and deciding what to do with the remainder" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — 936 ÷ 12 ───────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 936 ÷ 12.',
      answer: '78',
      checkMode: 'auto',
      correctAnswer: '78',
      explanation: 'Step 1: 9 < 12 — take 93. 93 ÷ 12 = 7 (7 × 12 = 84). 93 − 84 = 9. Bring down 6 → 96.\nStep 2: 96 ÷ 12 = 8 (8 × 12 = 96). 96 − 96 = 0. No remainder.\nAnswer: 936 ÷ 12 = 78 ✓',
    },

    // ── Q2 Easy — 1 248 ÷ 16 ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 1 248 ÷ 16.',
      answer: '78',
      checkMode: 'auto',
      correctAnswer: '78',
      explanation: 'Step 1: 1 < 16 — take 12. 12 < 16 — take 124. 124 ÷ 16 = 7 (7 × 16 = 112). 124 − 112 = 12. Bring down 8 → 128.\nStep 2: 128 ÷ 16 = 8 (8 × 16 = 128). 128 − 128 = 0. No remainder.\nAnswer: 1 248 ÷ 16 = 78 ✓',
    },

    // ── Q3 Medium — 4 875 ÷ 25 ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 4 875 ÷ 25.',
      answer: '195',
      checkMode: 'auto',
      correctAnswer: '195',
      explanation: 'Step 1: 4 < 25 — take 48. 48 ÷ 25 = 1 (1 × 25 = 25). 48 − 25 = 23. Bring down 7 → 237.\nStep 2: 237 ÷ 25 = 9 (9 × 25 = 225). 237 − 225 = 12. Bring down 5 → 125.\nStep 3: 125 ÷ 25 = 5 (5 × 25 = 125). 125 − 125 = 0. No remainder.\nAnswer: 4 875 ÷ 25 = 195 ✓',
    },

    // ── Q4 Medium — 7 392 ÷ 32 ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 7 392 ÷ 32.',
      answer: '231',
      checkMode: 'auto',
      correctAnswer: '231',
      explanation: 'Step 1: 7 < 32 — take 73. 73 ÷ 32 = 2 (2 × 32 = 64). 73 − 64 = 9. Bring down 9 → 99.\nStep 2: 99 ÷ 32 = 3 (3 × 32 = 96). 99 − 96 = 3. Bring down 2 → 32.\nStep 3: 32 ÷ 32 = 1 (1 × 32 = 32). 32 − 32 = 0. No remainder.\nAnswer: 7 392 ÷ 32 = 231 ✓',
    },

    // ── Q5 Hard — 45 864 ÷ 24 ────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 45 864 ÷ 24.',
      answer: '1 911',
      checkMode: 'auto',
      correctAnswer: '1911',
      correctAnswers: ['1911', '1 911'],
      explanation: 'Step 1: 4 < 24 — take 45. 45 ÷ 24 = 1 (1 × 24 = 24). 45 − 24 = 21. Bring down 8 → 218.\nStep 2: 218 ÷ 24 = 9 (9 × 24 = 216). 218 − 216 = 2. Bring down 6 → 26.\nStep 3: 26 ÷ 24 = 1 (1 × 24 = 24). 26 − 24 = 2. Bring down 4 → 24.\nStep 4: 24 ÷ 24 = 1 (1 × 24 = 24). 24 − 24 = 0. No remainder.\nAnswer: 45 864 ÷ 24 = 1 911. Check: 1 911 × 24 = 45 864 ✓',
    },

    // ── Q6 Hard — Sipho's answer check ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says 5 460 ÷ 14 = 390. Check his answer. Is he correct?',
      answer: 'Check by multiplying: 390 × 14 = 5 460. Yes, Sipho is correct.',
      checkMode: 'self',
    },

    // ── Q7 Easy — 45 000 ÷ 100 ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Calculate 45 000 ÷ 100.',
      answer: '450',
      checkMode: 'auto',
      correctAnswer: '450',
      explanation: 'Dividing by 100 means removing two zeros.\n45 000 ÷ 100 = 450 ✓',
    },

    // ── Q8 Medium — 72 000 ÷ 400 ─────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Calculate 72 000 ÷ 400.',
      answer: '180',
      checkMode: 'auto',
      correctAnswer: '180',
      explanation: 'Split 400 into 4 × 100.\nStep 1: 72 000 ÷ 4 = 18 000.\nStep 2: 18 000 ÷ 100 = 180 (remove two zeros).\nAnswer: 72 000 ÷ 400 = 180 ✓',
    },

    // ── Q9 Hard — 840 000 ÷ 2 000 ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Calculate 840 000 ÷ 2 000.',
      answer: '420',
      checkMode: 'auto',
      correctAnswer: '420',
      explanation: 'Split 2 000 into 2 × 1 000.\nStep 1: 840 000 ÷ 2 = 420 000.\nStep 2: 420 000 ÷ 1 000 = 420 (remove three zeros).\nAnswer: 840 000 ÷ 2 000 = 420 ✓',
    },

    // ── Q10 Medium — 576 learners in 18 groups ────────────────────────────────
    {
      difficulty: 'Medium',
      question: '576 learners are divided equally into 18 groups. How many learners are in each group?',
      answer: '32',
      checkMode: 'auto',
      correctAnswer: '32',
      explanation: 'Step 1: 5 < 18 — take 57. 57 ÷ 18 = 3 (3 × 18 = 54). 57 − 54 = 3. Bring down 6 → 36.\nStep 2: 36 ÷ 18 = 2 (2 × 18 = 36). 36 − 36 = 0. No remainder.\nAnswer: 576 ÷ 18 = 32 learners per group ✓',
    },

    // ── Q11 Hard — Lerato buying items (two parts) ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has R6 250 and wants to buy as many items as possible at R45 each.\n\na) How many items can she buy?\nb) How much money will she have left?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) How many items can she buy?',
          correctAnswer: '138',
          explanation: 'Step 1: 6 < 45 — take 62. 62 ÷ 45 = 1 (1 × 45 = 45). 62 − 45 = 17. Bring down 5 → 175.\nStep 2: 175 ÷ 45 = 3 (3 × 45 = 135). 175 − 135 = 40. Bring down 0 → 400.\nStep 3: 400 ÷ 45 = 8 (8 × 45 = 360). 400 − 360 = 40. Remainder: 40.\nQuotient: 138. Check: 138 × 45 = 6 210. 6 250 − 6 210 = 40 ✓\nLerato can buy 138 items.',
        },
        {
          label: 'b) How much money will she have left?',
          correctAnswer: 'R40',
          correctAnswers: ['R40', '40'],
          explanation: 'The remainder from 6 250 ÷ 45 = 138 remainder 40.\nLerato will have R40 left over.',
        },
      ],
    },

    // ── Q12 Hard — factory packing boxes (two parts) ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'A factory needs to pack 15 750 items into boxes of 48.\n\na) How many full boxes will there be?\nb) How many items will be left unpacked?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) How many full boxes will there be?',
          correctAnswer: '328',
          explanation: 'Step 1: 15 < 48 — take 157. 157 ÷ 48 = 3 (3 × 48 = 144). 157 − 144 = 13. Bring down 5 → 135.\nStep 2: 135 ÷ 48 = 2 (2 × 48 = 96). 135 − 96 = 39. Bring down 0 → 390.\nStep 3: 390 ÷ 48 = 8 (8 × 48 = 384). 390 − 384 = 6. Remainder: 6.\nQuotient: 328. Check: 328 × 48 = 15 744. 15 750 − 15 744 = 6 ✓\nThere will be 328 full boxes.',
        },
        {
          label: 'b) How many items will be left unpacked?',
          correctAnswer: '6',
          explanation: 'The remainder from 15 750 ÷ 48 = 328 remainder 6.\n6 items will be left unpacked.',
        },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have mastered division.' },
      { minScore: 9, message: 'Great work! You have a strong understanding of division.' },
      { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
