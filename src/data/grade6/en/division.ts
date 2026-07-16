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
        'Long division layout showing 4 896 divided by 12 step by step, with the quotient in red, subtraction steps in blue, differences in green and digits brought down in orange',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 170" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="15" y="40" font-size="16" font-weight="700" fill="#0f1f3d">12</text>` +
        `<line x1="34" y1="20" x2="150" y2="20" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="34" y1="20" x2="34" y2="105" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="76" y="14" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">4</text>` +
        `<text x="102" y="14" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">0</text>` +
        `<text x="128" y="14" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">8</text>` +
        `<text x="50" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="76" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="102" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">9</text>` +
        `<text x="128" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="42" y="52" font-size="13" font-weight="700" fill="#2563eb">− 48</text>` +
        `<line x1="42" y1="57" x2="88" y2="57" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="76" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="102" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">9</text>` +
        `<text x="76" y="84" font-size="13" font-weight="700" fill="#2563eb">− 0</text>` +
        `<line x1="76" y1="89" x2="110" y2="89" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="102" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">9</text>` +
        `<text x="128" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">6</text>` +
        `<text x="90" y="116" font-size="13" font-weight="700" fill="#2563eb">− 96</text>` +
        `<line x1="90" y1="121" x2="136" y2="121" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="128" y="134" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="110" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">4 896 ÷ 12 = 408</text>` +
        `</svg>`,

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Long division 2-digit divisors (exact) | 4-8 Remainders three ways |
    // 9-12 Mental division by multiples of 10/100/1000 | 13-16 Word problems: remainder decisions |
    // 17-19 Mixed multi-step reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Calculate 936 ÷ 17.', answer: '55 remainder 1', checkMode: 'auto', correctAnswer: '55 remainder 1', correctAnswers: ['55 remainder 1', '55 r 1', '55r1', '55 rem 1'], explanation: 'Step 1: 9 < 17 — take 93. 93 ÷ 17 = 5 (5 × 17 = 85). 93 − 85 = 8. Bring down 6 → 86.\nStep 2: 86 ÷ 17 = 5 (5 × 17 = 85). 86 − 85 = 1. Remainder: 1.\nAnswer: 936 ÷ 17 = 55 remainder 1.' },
        { difficulty: 'Easy', question: 'Complete the long division below to find 2 408 ÷ 28.\n\n  ___\n28)2408\n  −252\n  ----\n   88\n  −84\n  ----\n    ?', answer: '86', checkMode: 'auto', correctAnswer: '86', correctAnswers: ['86'], explanation: 'Step 1: 24 < 28 — take 240. 240 ÷ 28 = 8 (8 × 28 = 224)... using the standard grouping: 2 < 28, take 24 — still < 28, take 240. 240 ÷ 28 = 8 (8 × 28 = 224). 240 − 224 = 16. Bring down 8 → 168.\nStep 2: 168 ÷ 28 = 6 (6 × 28 = 168). 168 − 168 = 0. No remainder.\nAnswer: 2 408 ÷ 28 = 86.' },
        { difficulty: 'Easy', question: 'A charity packs 3 216 tins of food equally into 24 boxes for a school donation drive. How many tins go into each box?', answer: '134', checkMode: 'auto', correctAnswer: '134', correctAnswers: ['134'], explanation: 'Step 1: 3 < 24 — take 32. 32 ÷ 24 = 1 (1 × 24 = 24). 32 − 24 = 8. Bring down 1 → 81.\nStep 2: 81 ÷ 24 = 3 (3 × 24 = 72). 81 − 72 = 9. Bring down 6 → 96.\nStep 3: 96 ÷ 24 = 4 (4 × 24 = 96). 96 − 96 = 0. No remainder.\nAnswer: 3 216 ÷ 24 = 134 tins per box.' },
        { difficulty: 'Easy', question: 'Calculate 78 624 ÷ 96. Watch out for a zero digit in the quotient.', answer: '819', checkMode: 'auto', correctAnswer: '819', correctAnswers: ['819'], explanation: 'Step 1: 78 < 96 — take 786. 786 ÷ 96 = 8 (8 × 96 = 768). 786 − 768 = 18. Bring down 2 → 182.\nStep 2: 182 ÷ 96 = 1 (1 × 96 = 96). 182 − 96 = 86. Bring down 4 → 864.\nStep 3: 864 ÷ 96 = 9 (9 × 96 = 864). 864 − 864 = 0. No remainder.\nAnswer: 78 624 ÷ 96 = 819.' },
        { difficulty: 'Easy-Medium', question: 'Calculate 452 ÷ 7 and give your answer as a whole number remainder (using R).', answer: '64 R 4', checkMode: 'auto', correctAnswer: '64 R 4', correctAnswers: ['64 R 4', '64r4', '64 r 4', '64 remainder 4'], explanation: 'Step 1: 4 < 7 — take 45. 45 ÷ 7 = 6 (6 × 7 = 42). 45 − 42 = 3. Bring down 2 → 32.\nStep 2: 32 ÷ 7 = 4 (4 × 7 = 28). 32 − 28 = 4. Remainder: 4.\nAnswer: 452 ÷ 7 = 64 R 4.' },
        { difficulty: 'Easy-Medium', question: '13 friends share 561 stickers as equally as possible. Express how many stickers each friend gets as a fraction (remainder over divisor).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole number part and remainder', correctAnswer: '43 remainder 2', correctAnswers: ['43 remainder 2', '43 r 2', '43r2', '43 rem 2'], explanation: '561 ÷ 13: Step 1: 56 ÷ 13 = 4 (4 × 13 = 52). 56 − 52 = 4. Bring down 1 → 41.\nStep 2: 41 ÷ 13 = 3 (3 × 13 = 39). 41 − 39 = 2. Remainder: 2.\nAnswer: 561 ÷ 13 = 43 remainder 2.' },
          { label: 'b) As a fraction', correctAnswer: '43 2/13', correctAnswers: ['43 2/13', '43and2/13', '2/13'], explanation: 'Write the remainder over the divisor: each friend gets 43 whole stickers and 2/13 of a sticker, so 43 2/13 stickers.' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe divides 725 by 8 to split R725 of prize money among 8 team members. Express the amount each member gets as a decimal, rounded to 1 decimal place.', answer: '90.6', checkMode: 'auto', correctAnswer: '90.6', correctAnswers: ['90.6', 'R90.6', 'R90,6'], explanation: '725 ÷ 8: Step 1: 72 ÷ 8 = 9 (9 × 8 = 72). 72 − 72 = 0. Bring down 5 → 05.\nStep 2: 05 ÷ 8 = 0 remainder 5. Write 0. Bring down a zero (decimal) → 50.\nStep 3: 50 ÷ 8 = 6 remainder 2 → 90.6 so far. Continue: bring down another zero → 20. 20 ÷ 8 = 2 remainder 4, giving 90.62...\nRounded to 1 decimal place: 90.6.' },
        { difficulty: 'Medium', question: 'Bongani says: "4 230 ÷ 13 = 325 remainder 5, so as a fraction that is 325 5/18." Is Bongani correct? Explain the mistake, if any, and give the correct fraction form.', answer: 'Bongani is incorrect. The fraction should be the remainder over the DIVISOR, not some other number. Since 4 230 ÷ 13 = 325 remainder 5, the correct fraction form is 325 5/13, not 325 5/18. He used the wrong denominator.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two learners divide lengths of fencing wire. Ayanda calculates 238 ÷ 5 and expresses the remainder as a fraction. Zola calculates 890 ÷ 7 and expresses the remainder as a fraction. Whose remainder fraction is larger, 3/5 or 1/7?', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ["Ayanda's", 'Ayanda', '3/5'], explanation: '238 ÷ 5 = 47 remainder 3, so Ayanda\'s fraction is 3/5 = 0.6.\n890 ÷ 7 = 127 remainder 1, so Zola\'s fraction is 1/7 ≈ 0.14.\nSince 0.6 > 0.14, Ayanda\'s remainder fraction (3/5) is larger.' },
        { difficulty: 'Medium', question: 'A hardware store has 315 m of rope to cut into 6 m lengths for customers.\n\na) How many full 6 m lengths can be cut?\nb) How many metres of rope are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full 6 m lengths', correctAnswer: '52', explanation: '315 ÷ 6: Step 1: 31 ÷ 6 = 5 (5 × 6 = 30). 31 − 30 = 1. Bring down 5 → 15.\nStep 2: 15 ÷ 6 = 2 (2 × 6 = 12). 15 − 12 = 3. Remainder: 3.\nAnswer: 315 ÷ 6 = 52 remainder 3, so 52 full lengths.' },
          { label: 'b) Metres left over', correctAnswer: '3', explanation: 'The remainder from 315 ÷ 6 = 52 remainder 3, so 3 m of rope is left over.' },
        ] },
        { difficulty: 'Medium', question: 'Calculate 33 600 ÷ 240, showing your two mental steps.', answer: '140', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140'], explanation: 'Step 1: Split 240 into 24 × 10. Divide 33 600 by 24 first: 33 600 ÷ 24 = 1 400.\nStep 2: Divide by 10: 1 400 ÷ 10 = 140.\nAnswer: 33 600 ÷ 240 = 140.' },
        { difficulty: 'Medium', question: 'Nomvula says: "720 000 ÷ 900 = 8 000, because 72 ÷ 9 = 8 and then you just keep the zeros." Is she correct? Explain any error and give the correct answer.', answer: 'Nomvula is incorrect. She divided 72 by 9 correctly to get 8, but 900 = 9 × 100, so after dividing by 9 you must also divide by 100, not simply "keep the zeros" without checking how many. 720 000 ÷ 9 = 80 000, then 80 000 ÷ 100 = 800. The correct answer is 800, not 8 000 — she dropped two zeros instead of two, then forgot to remove the extra ones from her shortcut.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A charity has R280 000 to split equally among 7 000 flood-relief households. How much does each household receive?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'R40'], explanation: 'Split 7 000 into 7 × 1 000.\nStep 1: 280 000 ÷ 7 = 40 000.\nStep 2: 40 000 ÷ 1 000 = 40.\nAnswer: R280 000 ÷ 7 000 = R40 per household.' },
        { difficulty: 'Medium', question: 'A school orders 2 664 exercise books to be shared equally among 37 classes. How many exercise books does each class receive?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '2 664 ÷ 37: Step 1: 266 ÷ 37 = 7 (7 × 37 = 259). 266 − 259 = 7. Bring down 4 → 74.\nStep 2: 74 ÷ 37 = 2 (2 × 37 = 74). 74 − 74 = 0. No remainder.\nAnswer: 2 664 ÷ 37 = 72 exercise books per class.' },
        { difficulty: 'Medium-Hard', question: 'A farmer has 960 kg of maize to pack into bags that each hold 45 kg.\n\na) How many full bags can be packed?\nb) How many kilograms are left over?\nc) The farmer wants to pack every kilogram, even if it means one bag is not completely full. How many bags does he need in total?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full bags', correctAnswer: '21', explanation: '960 ÷ 45: Step 1: 96 ÷ 45 = 2 (2 × 45 = 90). 96 − 90 = 6. Bring down 0 → 60.\nStep 2: 60 ÷ 45 = 1 (1 × 45 = 45). 60 − 45 = 15. Remainder: 15.\nAnswer: 960 ÷ 45 = 21 remainder 15, so 21 full bags.' },
          { label: 'b) Kilograms left over', correctAnswer: '15', explanation: 'The remainder from 960 ÷ 45 = 21 remainder 15, so 15 kg is left over.' },
          { label: 'c) Total bags needed', correctAnswer: '22', explanation: 'Round up because the leftover maize still needs to be packed into a bag (even if not full). Total: 21 + 1 = 22 bags.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Thandeka says: "9 576 sweets shared among 42 learners means everyone gets 227 sweets, because 9 576 ÷ 42 rounds down to the nearest whole number and I dropped the leftover." Check her division and explain whether her rounding decision (rounding down) was the right choice for this situation.', answer: '9 576 ÷ 42 = 228 exactly (228 × 42 = 9 576), so there is no remainder to drop — Thandeka made an arithmetic error, not just a rounding error. Even so, when sweets are shared and there IS a remainder, rounding down is usually correct because you cannot give out part of a sweet — but here it does not apply since the division is exact.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A furniture removal company must move 3 480 boxes using a lift that carries 24 boxes per trip.\n\na) How many trips does the lift need to make to move every box?\nb) How many boxes are in the last (partial or full) trip?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of trips', correctAnswer: '145', explanation: '3 480 ÷ 24: Step 1: 34 ÷ 24 = 1 (1 × 24 = 24). 34 − 24 = 10. Bring down 8 → 108.\nStep 2: 108 ÷ 24 = 4 (4 × 24 = 96). 108 − 96 = 12. Bring down 0 → 120.\nStep 3: 120 ÷ 24 = 5 (5 × 24 = 120). 120 − 120 = 0. No remainder.\nAnswer: 3 480 ÷ 24 = 145 exactly, so 145 trips.' },
          { label: 'b) Boxes in the last trip', correctAnswer: '24', explanation: 'Since 3 480 ÷ 24 = 145 exactly (no remainder), every trip — including the last — carries a full 24 boxes.' },
        ] },
        { difficulty: 'Hard', question: 'A company must transport 58 968 kg of goods using trucks that each carry 42 kg... simplify first by noticing both numbers share a common factor of 6, then check your final answer by multiplying back.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Simplified division (divide both by 6 first)', correctAnswer: '9828 divided by 7', correctAnswers: ['9828 divided by 7', '9828/7', '9 828 ÷ 7', '9828 ÷ 7'], explanation: '58 968 ÷ 6 = 9 828 and 42 ÷ 6 = 7, so the simplified division is 9 828 ÷ 7.' },
          { label: 'b) Final quotient', correctAnswer: '1404', correctAnswers: ['1404', '1 404'], explanation: '9 828 ÷ 7: Step 1: 98 ÷ 7 = 14 (14 × 7 = 98). 98 − 98 = 0. Bring down 2 → 02.\nStep 2: 02 ÷ 7 = 0 remainder 2. Bring down 8 → 28.\nStep 3: 28 ÷ 7 = 4 (4 × 7 = 28). 28 − 28 = 0.\nAnswer: 9 828 ÷ 7 = 1 404, so 58 968 ÷ 42 = 1 404.\nCheck: 1 404 × 42 = 58 968 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two delivery teams split parcels. Team A shares 18 720 parcels equally among 52 vans. Team B shares 15 048 parcels equally among 36 vans. Which team gives each van more parcels, and by how many?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Parcels per van for Team A', correctAnswer: '360', explanation: '18 720 ÷ 52: Step 1: 187 ÷ 52 = 3 (3 × 52 = 156). 187 − 156 = 31. Bring down 2 → 312.\nStep 2: 312 ÷ 52 = 6 (6 × 52 = 312). 312 − 312 = 0. Bring down 0 → 0. 0 ÷ 52 = 0.\nAnswer: 18 720 ÷ 52 = 360.' },
          { label: 'b) Parcels per van for Team B', correctAnswer: '418', explanation: '15 048 ÷ 36: Step 1: 150 ÷ 36 = 4 (4 × 36 = 144). 150 − 144 = 6. Bring down 4 → 64.\nStep 2: 64 ÷ 36 = 1 (1 × 36 = 36). 64 − 36 = 28. Bring down 8 → 288.\nStep 3: 288 ÷ 36 = 8 (8 × 36 = 288). 288 − 288 = 0.\nAnswer: 15 048 ÷ 36 = 418.' },
          { label: 'c) Which team gets more, and by how many', correctAnswer: 'Team B by 58', correctAnswers: ['Team B by 58', 'Team B, 58', 'B by 58'], explanation: 'Team A: 360 parcels per van. Team B: 418 parcels per van. Since 418 > 360, Team B gets more, by 418 − 360 = 58 parcels per van.' },
        ] },
        { difficulty: 'Hard', question: 'Katlego checks a division and claims: "37 485 ÷ 45 = 833, and I know this is right because 833 × 45 = 37 485." Verify her multiplication check is accurate, and separately verify the original division is correct by performing it yourself.', answer: 'Multiplication check: 833 × 45 = 833 × 40 + 833 × 5 = 33 320 + 4 165 = 37 485. This matches, so the check is accurate.\nDivision check (working from scratch): 37 485 ÷ 45 — Step 1: 374 ÷ 45 = 8 (8 × 45 = 360), remainder 14. Bring down 8 → 148. Step 2: 148 ÷ 45 = 3 (3 × 45 = 135), remainder 13. Bring down 5 → 135. Step 3: 135 ÷ 45 = 3 (3 × 45 = 135), remainder 0. Quotient: 833.\nBoth the division and the multiplication check confirm 37 485 ÷ 45 = 833 is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered long division, remainders in three forms, mental division shortcuts, and division word problems.' },
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
        { difficulty: 'Easy', question: 'Calculate 1 560 ÷ 24.', answer: '65', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65'], explanation: 'Step 1: 15 < 24 — take 156. 156 ÷ 24 = 6 (6 × 24 = 144). 156 − 144 = 12. Bring down 0 → 120.\nStep 2: 120 ÷ 24 = 5 (5 × 24 = 120). 120 − 120 = 0. No remainder.\nAnswer: 1 560 ÷ 24 = 65.' },
        { difficulty: 'Easy', question: 'Complete the long division below to find 4 590 ÷ 27.\n\n  ___\n27)4590\n  −27\n  ---\n  189\n −189\n  ---\n    0', answer: '170', checkMode: 'auto', correctAnswer: '170', correctAnswers: ['170'], explanation: 'Step 1: 4 < 27 — take 45. 45 ÷ 27 = 1 (1 × 27 = 27). 45 − 27 = 18. Bring down 9 → 189.\nStep 2: 189 ÷ 27 = 7 (7 × 27 = 189). 189 − 189 = 0. Bring down 0 → 0. 0 ÷ 27 = 0.\nAnswer: 4 590 ÷ 27 = 170.' },
        { difficulty: 'Easy', question: 'A bakery shares 2 408 bread rolls equally among 28 crates for delivery. How many rolls go into each crate?', answer: '86', checkMode: 'auto', correctAnswer: '86', correctAnswers: ['86'], explanation: 'Step 1: 24 < 28 — take 240. 240 ÷ 28 = 8 (8 × 28 = 224). 240 − 224 = 16. Bring down 8 → 168.\nStep 2: 168 ÷ 28 = 6 (6 × 28 = 168). 168 − 168 = 0. No remainder.\nAnswer: 2 408 ÷ 28 = 86 rolls per crate.' },
        { difficulty: 'Easy', question: 'Calculate 45 936 ÷ 68... watch carefully in case any digit in the quotient is a zero.', answer: '675 remainder 36', checkMode: 'auto', correctAnswer: '675 remainder 36', correctAnswers: ['675 remainder 36', '675 r 36', '675r36', '675 rem 36'], explanation: 'Step 1: 45 < 68 — take 459. 459 ÷ 68 = 6 (6 × 68 = 408). 459 − 408 = 51. Bring down 3 → 513.\nStep 2: 513 ÷ 68 = 7 (7 × 68 = 476). 513 − 476 = 37. Bring down 6 → 376.\nStep 3: 376 ÷ 68 = 5 (5 × 68 = 340). 376 − 340 = 36. Remainder: 36.\nAnswer: 45 936 ÷ 68 = 675 remainder 36.' },
        { difficulty: 'Easy-Medium', question: 'Calculate 548 ÷ 7 and give your answer as a whole number remainder (using R).', answer: '78 R 2', checkMode: 'auto', correctAnswer: '78 R 2', correctAnswers: ['78 R 2', '78r2', '78 r 2', '78 remainder 2'], explanation: 'Step 1: 54 ÷ 7 = 7 (7 × 7 = 49). 54 − 49 = 5. Bring down 8 → 58.\nStep 2: 58 ÷ 7 = 8 (8 × 7 = 56). 58 − 56 = 2. Remainder: 2.\nAnswer: 548 ÷ 7 = 78 R 2.' },
        { difficulty: 'Easy-Medium', question: '9 learners share 683 marbles as equally as possible. Express how many marbles each learner gets as a fraction (remainder over divisor).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole number part and remainder', correctAnswer: '75 remainder 8', correctAnswers: ['75 remainder 8', '75 r 8', '75r8', '75 rem 8'], explanation: '683 ÷ 9: Step 1: 68 ÷ 9 = 7 (7 × 9 = 63). 68 − 63 = 5. Bring down 3 → 53.\nStep 2: 53 ÷ 9 = 5 (5 × 9 = 45). 53 − 45 = 8. Remainder: 8.\nAnswer: 683 ÷ 9 = 75 remainder 8.' },
          { label: 'b) As a fraction', correctAnswer: '75 8/9', correctAnswers: ['75 8/9', '75and8/9', '8/9'], explanation: 'Write the remainder over the divisor: each learner gets 75 whole marbles and 8/9 of a marble, so 75 8/9 marbles.' },
        ] },
        { difficulty: 'Medium', question: 'Sibusiso divides 327 by 4 to split R327 of tuck-shop profit among 4 helpers. Express the amount each helper gets as a decimal, rounded to 1 decimal place.', answer: '81.8', checkMode: 'auto', correctAnswer: '81.8', correctAnswers: ['81.8', 'R81.8', 'R81,8'], explanation: '327 ÷ 4: Step 1: 32 ÷ 4 = 8 (8 × 4 = 32). 32 − 32 = 0. Bring down 7 → 07.\nStep 2: 07 ÷ 4 = 1 remainder 3. Write 1. Bring down a zero (decimal) → 30.\nStep 3: 30 ÷ 4 = 7 remainder 2, giving 81.7... Continue: bring down another zero → 20. 20 ÷ 4 = 5 remainder 0, giving 81.75.\nRounded to 1 decimal place: 81.8.' },
        { difficulty: 'Medium', question: 'Precious says: "6 489 ÷ 13 = 499 remainder 2, so as a fraction that is 499 2/15." Is Precious correct? Explain the mistake, if any, and give the correct fraction form.', answer: 'Precious is incorrect. The fraction should be the remainder over the DIVISOR, not some other number. Since 6 489 ÷ 13 = 499 remainder 2, the correct fraction form is 499 2/13, not 499 2/15. She used the wrong denominator.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two learners divide amounts of ribbon. Karabo calculates 56 ÷ 3 and expresses the remainder as a fraction. Palesa calculates 37 ÷ 4 and expresses the remainder as a fraction. Whose remainder fraction is larger, 2/3 or 1/4?', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ["Karabo's", 'Karabo', '2/3'], explanation: '56 ÷ 3 = 18 remainder 2, so Karabo\'s fraction is 2/3 ≈ 0.67.\n37 ÷ 4 = 9 remainder 1, so Palesa\'s fraction is 1/4 = 0.25.\nSince 0.67 > 0.25, Karabo\'s remainder fraction (2/3) is larger.' },
        { difficulty: 'Medium', question: 'A community garden has 546 m of irrigation pipe to cut into 12 m lengths.\n\na) How many full 12 m lengths can be cut?\nb) How many metres of pipe are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full 12 m lengths', correctAnswer: '45', explanation: '546 ÷ 12: Step 1: 54 ÷ 12 = 4 (4 × 12 = 48). 54 − 48 = 6. Bring down 6 → 66.\nStep 2: 66 ÷ 12 = 5 (5 × 12 = 60). 66 − 60 = 6. Remainder: 6.\nAnswer: 546 ÷ 12 = 45 remainder 6, so 45 full lengths.' },
          { label: 'b) Metres left over', correctAnswer: '6', explanation: 'The remainder from 546 ÷ 12 = 45 remainder 6, so 6 m of pipe is left over.' },
        ] },
        { difficulty: 'Medium', question: 'Calculate 24 600 ÷ 300, showing your two mental steps.', answer: '82', checkMode: 'auto', correctAnswer: '82', correctAnswers: ['82'], explanation: 'Step 1: Split 300 into 3 × 100. Divide 24 600 by 3 first: 24 600 ÷ 3 = 8 200.\nStep 2: Divide by 100: 8 200 ÷ 100 = 82.\nAnswer: 24 600 ÷ 300 = 82.' },
        { difficulty: 'Medium', question: 'Sizwe says: "630 000 ÷ 900 = 7 000, because 63 ÷ 9 = 7 and then you just keep the zeros." Is he correct? Explain any error and give the correct answer.', answer: 'Sizwe is incorrect. He divided 63 by 9 correctly to get 7, but 900 = 9 × 100, so after dividing by 9 you must also divide by 100, not simply "keep the zeros" without checking how many. 630 000 ÷ 9 = 70 000, then 70 000 ÷ 100 = 700. The correct answer is 700, not 7 000 — he forgot to remove two extra zeros from his shortcut.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A relief fund has R320 000 to split equally among 8 000 households after a storm. How much does each household receive?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'R40'], explanation: 'Split 8 000 into 8 × 1 000.\nStep 1: 320 000 ÷ 8 = 40 000.\nStep 2: 40 000 ÷ 1 000 = 40.\nAnswer: R320 000 ÷ 8 000 = R40 per household.' },
        { difficulty: 'Medium', question: 'A printing company orders 3 654 posters to be shared equally among 29 schools. How many posters does each school receive?', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '3 654 ÷ 29: Step 1: 36 ÷ 29 = 1 (1 × 29 = 29). 36 − 29 = 7. Bring down 5 → 75.\nStep 2: 75 ÷ 29 = 2 (2 × 29 = 58). 75 − 58 = 17. Bring down 4 → 174.\nStep 3: 174 ÷ 29 = 6 (6 × 29 = 174). 174 − 174 = 0. No remainder.\nAnswer: 3 654 ÷ 29 = 126 posters per school.' },
        { difficulty: 'Medium-Hard', question: 'A market gardener has 1 080 kg of onions to pack into bags that each hold 54 kg.\n\na) How many full bags can be packed?\nb) How many kilograms are left over?\nc) The gardener wants to pack every kilogram, even if it means one bag is not completely full. How many bags does he need in total?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full bags', correctAnswer: '20', explanation: '1 080 ÷ 54: Step 1: 108 ÷ 54 = 2 (2 × 54 = 108). 108 − 108 = 0. Bring down 0 → 0.\nStep 2: 0 ÷ 54 = 0. No remainder.\nAnswer: 1 080 ÷ 54 = 20 exactly, so 20 full bags with nothing left over.' },
          { label: 'b) Kilograms left over', correctAnswer: '0', explanation: 'The division is exact: 1 080 ÷ 54 = 20 remainder 0, so 0 kg is left over.' },
          { label: 'c) Total bags needed', correctAnswer: '20', explanation: 'Since there is no remainder, no extra bag is needed. Total: 20 bags exactly.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Fikile says: "9 150 pencils shared among 25 classrooms means every classroom gets 367 pencils, because 9 150 ÷ 25 rounds down to the nearest whole number and I dropped the leftover." Check her division and explain whether her rounding decision (rounding down) was the right choice for this situation.', answer: '9 150 ÷ 25 = 366 exactly (366 × 25 = 9 150), so there is no remainder to drop — Fikile made an arithmetic error, not just a rounding error. Even so, when items like pencils are shared and there IS a remainder, rounding down is usually correct because you cannot give out part of a pencil — but here it does not apply since the division is exact.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A warehouse must move 4 116 crates using a forklift that carries 42 crates per trip.\n\na) How many trips does the forklift need to make to move every crate?\nb) How many crates are in the last (partial or full) trip?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of trips', correctAnswer: '98', explanation: '4 116 ÷ 42: Step 1: 41 < 42 — take 411. 411 ÷ 42 = 9 (9 × 42 = 378). 411 − 378 = 33. Bring down 6 → 336.\nStep 2: 336 ÷ 42 = 8 (8 × 42 = 336). 336 − 336 = 0. No remainder.\nAnswer: 4 116 ÷ 42 = 98 exactly, so 98 trips.' },
          { label: 'b) Crates in the last trip', correctAnswer: '42', explanation: 'Since 4 116 ÷ 42 = 98 exactly (no remainder), every trip — including the last — carries a full 42 crates.' },
        ] },
        { difficulty: 'Hard', question: 'A logistics company must transport 68 880 kg of stock using trucks that each carry 60 kg... simplify first by noticing both numbers share a common factor of 10, then check your final answer by multiplying back.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Simplified division (divide both by 10 first)', correctAnswer: '6888 divided by 6', correctAnswers: ['6888 divided by 6', '6888/6', '6 888 ÷ 6', '6888 ÷ 6'], explanation: '68 880 ÷ 10 = 6 888 and 60 ÷ 10 = 6, so the simplified division is 6 888 ÷ 6.' },
          { label: 'b) Final quotient', correctAnswer: '1148', correctAnswers: ['1148', '1 148'], explanation: '6 888 ÷ 6: Step 1: 68 ÷ 6 = 11 (11 × 6 = 66). 68 − 66 = 2. Bring down 8 → 28.\nStep 2: 28 ÷ 6 = 4 (4 × 6 = 24). 28 − 24 = 4. Bring down 8 → 48.\nStep 3: 48 ÷ 6 = 8 (8 × 6 = 48). 48 − 48 = 0.\nAnswer: 6 888 ÷ 6 = 1 148, so 68 880 ÷ 60 = 1 148.\nCheck: 1 148 × 60 = 68 880 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two farm co-ops split fertiliser bags. Co-op A shares 12 768 bags equally among 24 trucks. Co-op B shares 6 552 bags equally among 39 trucks. Which co-op gives each truck more bags, and by how many?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Bags per truck for Co-op A', correctAnswer: '532', explanation: '12 768 ÷ 24: Step 1: 127 ÷ 24 = 5 (5 × 24 = 120). 127 − 120 = 7. Bring down 6 → 76.\nStep 2: 76 ÷ 24 = 3 (3 × 24 = 72). 76 − 72 = 4. Bring down 8 → 48.\nStep 3: 48 ÷ 24 = 2 (2 × 24 = 48). 48 − 48 = 0.\nAnswer: 12 768 ÷ 24 = 532.' },
          { label: 'b) Bags per truck for Co-op B', correctAnswer: '168', explanation: '6 552 ÷ 39: Step 1: 65 ÷ 39 = 1 (1 × 39 = 39). 65 − 39 = 26. Bring down 5 → 265.\nStep 2: 265 ÷ 39 = 6 (6 × 39 = 234). 265 − 234 = 31. Bring down 2 → 312.\nStep 3: 312 ÷ 39 = 8 (8 × 39 = 312). 312 − 312 = 0.\nAnswer: 6 552 ÷ 39 = 168.' },
          { label: 'c) Which co-op gets more, and by how many', correctAnswer: 'Co-op A by 364', correctAnswers: ['Co-op A by 364', 'Co-op A, 364', 'A by 364'], explanation: 'Co-op A: 532 bags per truck. Co-op B: 168 bags per truck. Since 532 > 168, Co-op A gets more, by 532 − 168 = 364 bags per truck.' },
        ] },
        { difficulty: 'Hard', question: 'Zanele checks a division and claims: "84 048 ÷ 48 = 1 751, and I know this is right because 1 751 × 48 = 84 048." Verify her multiplication check is accurate, and separately verify the original division is correct by performing it yourself.', answer: 'Multiplication check: 1 751 × 48 = 1 751 × 50 − 1 751 × 2 = 87 550 − 3 502 = 84 048. This matches, so the check is accurate.\nDivision check (working from scratch): 84 048 ÷ 48 — Step 1: 840 ÷ 48 = 17 (17 × 48 = 816), remainder 24. Bring down 4 → 244. Step 2: 244 ÷ 48 = 5 (5 × 48 = 240), remainder 4. Bring down 8 → 48. Step 3: 48 ÷ 48 = 1, remainder 0. Quotient: 1 751.\nBoth the division and the multiplication check confirm 84 048 ÷ 48 = 1 751 is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered long division, remainders in three forms, mental division shortcuts, and division word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1 and 2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Calculate 918 ÷ 17.', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54'], explanation: 'Step 1: 91 ÷ 17 = 5 (5 × 17 = 85). 91 − 85 = 6. Bring down 8 → 68.\nStep 2: 68 ÷ 17 = 4 (4 × 17 = 68). 68 − 68 = 0. No remainder.\nAnswer: 918 ÷ 17 = 54.' },
        { difficulty: 'Easy', question: 'Complete the long division below to find 9 384 ÷ 29.\n\n   ___\n29)9384\n  −87\n  ---\n   68\n  −58\n  ---\n  104\n  −87\n  ---\n   17', answer: '323 remainder 17', checkMode: 'auto', correctAnswer: '323 remainder 17', correctAnswers: ['323 remainder 17', '323 r 17', '323r17', '323 rem 17'], explanation: 'Step 1: 93 ÷ 29 = 3 (3 × 29 = 87). 93 − 87 = 6. Bring down 8 → 68.\nStep 2: 68 ÷ 29 = 2 (2 × 29 = 58). 68 − 58 = 10. Bring down 4 → 104.\nStep 3: 104 ÷ 29 = 3 (3 × 29 = 87). 104 − 87 = 17. Remainder: 17.\nAnswer: 9 384 ÷ 29 = 323 remainder 17.' },
        { difficulty: 'Easy', question: 'A stationery supplier packs 6 072 pens equally into 33 boxes for a stock order. How many pens go into each box?', answer: '184', checkMode: 'auto', correctAnswer: '184', correctAnswers: ['184'], explanation: 'Step 1: 60 < 33? No, 60 ≥ 33. 60 ÷ 33 = 1 (1 × 33 = 33). 60 − 33 = 27. Bring down 7 → 277.\nStep 2: 277 ÷ 33 = 8 (8 × 33 = 264). 277 − 264 = 13. Bring down 2 → 132.\nStep 3: 132 ÷ 33 = 4 (4 × 33 = 132). 132 − 132 = 0. No remainder.\nAnswer: 6 072 ÷ 33 = 184 pens per box.' },
        { difficulty: 'Easy', question: 'Calculate 12 432 ÷ 42. Watch out for a zero digit in the quotient.', answer: '296', checkMode: 'auto', correctAnswer: '296', correctAnswers: ['296'], explanation: 'Step 1: 124 ÷ 42 = 2 (2 × 42 = 84). 124 − 84 = 40. Bring down 3 → 403.\nStep 2: 403 ÷ 42 = 9 (9 × 42 = 378). 403 − 378 = 25. Bring down 2 → 252.\nStep 3: 252 ÷ 42 = 6 (6 × 42 = 252). 252 − 252 = 0. No remainder.\nAnswer: 12 432 ÷ 42 = 296.' },
        { difficulty: 'Easy-Medium', question: 'Calculate 890 ÷ 7 and give your answer as a whole number remainder (using R).', answer: '127 R 1', checkMode: 'auto', correctAnswer: '127 R 1', correctAnswers: ['127 R 1', '127r1', '127 r 1', '127 remainder 1'], explanation: 'Step 1: 89 ÷ 7 = 12 (12 × 7 = 84). 89 − 84 = 5. Bring down 0 → 50.\nStep 2: 50 ÷ 7 = 7 (7 × 7 = 49). 50 − 49 = 1. Remainder: 1.\nAnswer: 890 ÷ 7 = 127 R 1.' },
        { difficulty: 'Easy-Medium', question: '9 pupils share 561 counters as equally as possible. Express how many counters each pupil gets as a fraction (remainder over divisor).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Whole number part and remainder', correctAnswer: '62 remainder 3', correctAnswers: ['62 remainder 3', '62 r 3', '62r3', '62 rem 3'], explanation: '561 ÷ 9: Step 1: 56 ÷ 9 = 6 (6 × 9 = 54). 56 − 54 = 2. Bring down 1 → 21.\nStep 2: 21 ÷ 9 = 2 (2 × 9 = 18). 21 − 18 = 3. Remainder: 3.\nAnswer: 561 ÷ 9 = 62 remainder 3.' },
          { label: 'b) As a fraction', correctAnswer: '62 3/9', correctAnswers: ['62 3/9', '62and3/9', '3/9', '62 1/3', '1/3'], explanation: 'Write the remainder over the divisor: each pupil gets 62 whole counters and 3/9 (which simplifies to 1/3) of a counter, so 62 3/9 (or 62 1/3) counters.' },
        ] },
        { difficulty: 'Medium', question: 'Mpho divides 315 by 6 to split R315 of raffle money among 6 volunteers. Express the amount each volunteer gets as a decimal.', answer: '52.5', checkMode: 'auto', correctAnswer: '52.5', correctAnswers: ['52.5', 'R52.5', 'R52,5'], explanation: '315 ÷ 6: Step 1: 31 ÷ 6 = 5 (5 × 6 = 30). 31 − 30 = 1. Bring down 5 → 15.\nStep 2: 15 ÷ 6 = 2 remainder 3. Write 2 → 52 remainder 3. Bring down a zero (decimal) → 30.\nStep 3: 30 ÷ 6 = 5 remainder 0, giving 52.5 exactly.\nAnswer: 315 ÷ 6 = 52.5.' },
        { difficulty: 'Medium', question: 'Given says: "2 450 ÷ 17 = 144 remainder 2, so as a fraction that is 144 2/12." Is Given correct? Explain the mistake, if any, and give the correct fraction form.', answer: 'Given is incorrect. The fraction should be the remainder over the DIVISOR, not some other number. Since 2 450 ÷ 17 = 144 remainder 2, the correct fraction form is 144 2/17, not 144 2/12. He used the wrong denominator.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Two learners divide amounts of string. Refilwe calculates 41 ÷ 3 and expresses the remainder as a fraction. Tebogo calculates 63 ÷ 7 and expresses the remainder as a fraction. Whose remainder fraction is larger, 2/3 or 0/7?', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ["Refilwe's", 'Refilwe', '2/3'], explanation: '41 ÷ 3 = 13 remainder 2, so Refilwe\'s fraction is 2/3 ≈ 0.67.\n63 ÷ 7 = 9 remainder 0, so Tebogo\'s fraction is 0/7 = 0 (the division is exact, no remainder at all).\nSince 0.67 > 0, Refilwe\'s remainder fraction (2/3) is larger.' },
        { difficulty: 'Medium', question: 'A fencing contractor has 4 230 m of wire fencing to cut into 13 m lengths for a farm boundary.\n\na) How many full 13 m lengths can be cut?\nb) How many metres of wire are left over?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full 13 m lengths', correctAnswer: '325', explanation: '4 230 ÷ 13: Step 1: 42 ÷ 13 = 3 (3 × 13 = 39). 42 − 39 = 3. Bring down 3 → 33.\nStep 2: 33 ÷ 13 = 2 (2 × 13 = 26). 33 − 26 = 7. Bring down 0 → 70.\nStep 3: 70 ÷ 13 = 5 (5 × 13 = 65). 70 − 65 = 5. Remainder: 5.\nAnswer: 4 230 ÷ 13 = 325 remainder 5, so 325 full lengths.' },
          { label: 'b) Metres left over', correctAnswer: '5', explanation: 'The remainder from 4 230 ÷ 13 = 325 remainder 5, so 5 m of wire is left over.' },
        ] },
        { difficulty: 'Medium', question: 'Calculate 96 000 ÷ 600, showing your two mental steps.', answer: '160', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160'], explanation: 'Step 1: Split 600 into 6 × 100. Divide 96 000 by 6 first: 96 000 ÷ 6 = 16 000.\nStep 2: Divide by 100: 16 000 ÷ 100 = 160.\nAnswer: 96 000 ÷ 600 = 160.' },
        { difficulty: 'Medium', question: 'Andile says: "560 000 ÷ 7 000 = 80, because 56 ÷ 7 = 8 and then you just add one zero." Is he correct? Explain your reasoning, including how many zeros should really be added or removed.', answer: 'Andile is actually correct this time, but let\'s check his reasoning carefully. 7 000 = 7 × 1 000. Dividing 560 000 by 7 first gives 80 000, and then dividing by 1 000 (removing three zeros) gives 80. So 560 000 ÷ 7 000 = 80 is correct — but his explanation of "just add one zero" is misleading, because the real process is: divide by 7 (56 ÷ 7 = 8, keeping the extra zeros as 80 000), then divide by 1 000 (remove three zeros to get 80). The answer is right, but the reasoning needs the two-step split to be reliable for other problems.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A donor has R126 000 to split equally among 3 000 learners for a bursary top-up. How much does each learner receive?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', 'R42'], explanation: 'Split 3 000 into 3 × 1 000.\nStep 1: 126 000 ÷ 3 = 42 000.\nStep 2: 42 000 ÷ 1 000 = 42.\nAnswer: R126 000 ÷ 3 000 = R42 per learner.' },
        { difficulty: 'Medium', question: 'A publisher orders 7 395 workbooks to be shared equally among 29 schools. How many workbooks does each school receive?', answer: '255', checkMode: 'auto', correctAnswer: '255', correctAnswers: ['255'], explanation: '7 395 ÷ 29: Step 1: 73 ÷ 29 = 2 (2 × 29 = 58). 73 − 58 = 15. Bring down 9 → 159.\nStep 2: 159 ÷ 29 = 5 (5 × 29 = 145). 159 − 145 = 14. Bring down 5 → 145.\nStep 3: 145 ÷ 29 = 5 (5 × 29 = 145). 145 − 145 = 0. No remainder.\nAnswer: 7 395 ÷ 29 = 255 workbooks per school.' },
        { difficulty: 'Medium-Hard', question: 'A vegetable co-op has 9 520 kg of potatoes to pack into bags that each hold 340 kg.\n\na) How many full bags can be packed?\nb) How many kilograms are left over?\nc) The co-op wants to pack every kilogram, even if it means one bag is not completely full. How many bags does it need in total?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Full bags', correctAnswer: '28', explanation: '9 520 ÷ 340: Step 1: 952 ÷ 34 = 28 (using the simplified form dividing both by 10: 952 ÷ 34). 28 × 34 = 952. 952 − 952 = 0. No remainder.\nAnswer: 9 520 ÷ 340 = 28 exactly, so 28 full bags with nothing left over.' },
          { label: 'b) Kilograms left over', correctAnswer: '0', explanation: 'The division is exact: 9 520 ÷ 340 = 28 remainder 0, so 0 kg is left over.' },
          { label: 'c) Total bags needed', correctAnswer: '28', explanation: 'Since there is no remainder, no extra bag is needed. Total: 28 bags exactly.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Lwazi says: "9 750 seedlings shared among 25 nurseries means each nursery gets 391 seedlings, because 9 750 ÷ 25 rounds down to the nearest whole number and I dropped the leftover." Check his division and explain whether his rounding decision (rounding down) was the right choice for this situation.', answer: '9 750 ÷ 25 = 390 exactly (390 × 25 = 9 750), so there is no remainder to drop — Lwazi made an arithmetic error, not just a rounding error. Even so, when items like seedlings are shared and there IS a remainder, rounding down is usually correct because you cannot give out part of a seedling — but here it does not apply since the division is exact.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'A courier depot must move 7 350 parcels using a van that carries 25 parcels per trip.\n\na) How many trips does the van need to make to move every parcel?\nb) How many parcels are in the last (partial or full) trip?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Number of trips', correctAnswer: '294', explanation: '7 350 ÷ 25: Step 1: 73 ÷ 25 = 2 (2 × 25 = 50). 73 − 50 = 23. Bring down 5 → 235.\nStep 2: 235 ÷ 25 = 9 (9 × 25 = 225). 235 − 225 = 10. Bring down 0 → 100.\nStep 3: 100 ÷ 25 = 4 (4 × 25 = 100). 100 − 100 = 0. No remainder.\nAnswer: 7 350 ÷ 25 = 294 exactly, so 294 trips.' },
          { label: 'b) Parcels in the last trip', correctAnswer: '25', explanation: 'Since 7 350 ÷ 25 = 294 exactly (no remainder), every trip — including the last — carries a full 25 parcels.' },
        ] },
        { difficulty: 'Hard', question: 'A construction supplier must transport 19 872 kg of cement using trucks that each carry 36 kg... simplify first by noticing both numbers share a common factor of 4, then check your final answer by multiplying back.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Simplified division (divide both by 4 first)', correctAnswer: '4968 divided by 9', correctAnswers: ['4968 divided by 9', '4968/9', '4 968 ÷ 9', '4968 ÷ 9'], explanation: '19 872 ÷ 4 = 4 968 and 36 ÷ 4 = 9, so the simplified division is 4 968 ÷ 9.' },
          { label: 'b) Final quotient', correctAnswer: '552', correctAnswers: ['552'], explanation: '4 968 ÷ 9: Step 1: 49 ÷ 9 = 5 (5 × 9 = 45). 49 − 45 = 4. Bring down 6 → 46.\nStep 2: 46 ÷ 9 = 5 (5 × 9 = 45). 46 − 45 = 1. Bring down 8 → 18.\nStep 3: 18 ÷ 9 = 2 (2 × 9 = 18). 18 − 18 = 0.\nAnswer: 4 968 ÷ 9 = 552, so 19 872 ÷ 36 = 552.\nCheck: 552 × 36 = 19 872 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Two builders split bricks. Builder A shares 13 284 bricks equally among 52 pallets. Builder B shares 15 960 bricks equally among 38 pallets. Which builder gives each pallet more bricks, and by how many?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Bricks per pallet for Builder A', correctAnswer: '255 remainder 24', correctAnswers: ['255 remainder 24', '255 r 24', '255r24', '255 rem 24', '255'], explanation: '13 284 ÷ 52: Step 1: 132 ÷ 52 = 2 (2 × 52 = 104). 132 − 104 = 28. Bring down 8 → 288.\nStep 2: 288 ÷ 52 = 5 (5 × 52 = 260). 288 − 260 = 28. Bring down 4 → 284.\nStep 3: 284 ÷ 52 = 5 (5 × 52 = 260). 284 − 260 = 24. Remainder: 24.\nAnswer: 13 284 ÷ 52 = 255 remainder 24.' },
          { label: 'b) Bricks per pallet for Builder B', correctAnswer: '420', explanation: '15 960 ÷ 38: Step 1: 159 ÷ 38 = 4 (4 × 38 = 152). 159 − 152 = 7. Bring down 6 → 76.\nStep 2: 76 ÷ 38 = 2 (2 × 38 = 76). 76 − 76 = 0. Bring down 0 → 0. 0 ÷ 38 = 0.\nAnswer: 15 960 ÷ 38 = 420 exactly.' },
          { label: 'c) Which builder gets more full bricks per pallet, and by how many', correctAnswer: 'Builder B by 165', correctAnswers: ['Builder B by 165', 'Builder B, 165', 'B by 165'], explanation: 'Builder A: 255 whole bricks per pallet (with 24 left over undistributed). Builder B: 420 bricks per pallet exactly. Since 420 > 255, Builder B gets more whole bricks per pallet, by 420 − 255 = 165 bricks.' },
        ] },
        { difficulty: 'Hard', question: 'Thabiso checks a division and claims: "41 850 ÷ 50 = 837, and I know this is right because 837 × 50 = 41 850." Verify her multiplication check is accurate, and separately verify the original division is correct using the mental shortcut for dividing by a multiple of 10.', answer: 'Multiplication check: 837 × 50 = 837 × 100 ÷ 2 = 83 700 ÷ 2 = 41 850. This matches, so the check is accurate.\nDivision check using the mental shortcut: 50 = 5 × 10, so divide 41 850 by 5 first: 41 850 ÷ 5 = 8 370. Then divide by 10 (remove one zero): 8 370 ÷ 10 = 837.\nBoth the shortcut division and the multiplication check confirm 41 850 ÷ 50 = 837 is correct.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered long division, remainders in three forms, mental division shortcuts, and division word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
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
