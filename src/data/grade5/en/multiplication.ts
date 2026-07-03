import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

function factRow(mult: number, n: number): string {
  const product = mult * n
  return `<tr>
    <td style="padding:3px 14px;text-align:right;">${re(String(mult))}</td>
    <td style="padding:3px 8px;text-align:center;color:#374151;">×</td>
    <td style="padding:3px 14px;text-align:center;">${bl(String(n))}</td>
    <td style="padding:3px 8px;text-align:center;color:#374151;">=</td>
    <td style="padding:3px 14px;">${gr(String(product))}</td>
  </tr>`
}

const table11 = Array.from({ length: 12 }, (_, i) => factRow(11, i + 1)).join('')
const table12 = Array.from({ length: 12 }, (_, i) => factRow(12, i + 1)).join('')

// ─── Section 2 colour helpers ─────────────────────────────────────────────────
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── 4-column table helpers (Th H T U) for column multiplication ──────────────
const MULT_TW = (inner: string) =>
  `<div style="overflow-x:auto;margin:10px 0;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
  `<table style="border-collapse:collapse;font-size:0.93em;text-align:center;min-width:200px">${inner}</table></div>`

const MULT_TH =
  `<thead><tr style="background:#f8fafc">` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">Th</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb">U</th>` +
  `</tr></thead>`

const GRAY  = '#374151'
const MGRAY = '#9ca3af'

function mRow(digits: string[], colors: string[], borderTop = false): string {
  const bt = borderTop ? 'border-top:1.5px solid #e5e7eb;' : ''
  return `<tr>${digits.map((v, i) => {
    const right = i < 3 ? 'border-right:1px solid #e5e7eb;' : ''
    return `<td style="padding:7px 14px;${bt}${right}"><span style="color:${colors[i]};font-weight:700">${v}</span></td>`
  }).join('')}</tr>`
}

function mCarry(carries: string[], borderTop = false): string {
  const bt = borderTop ? 'border-top:1px solid #e5e7eb;' : ''
  return `<tr>${carries.map((v, i) => {
    const right = i < 3 ? 'border-right:1px solid #e5e7eb;' : ''
    const val   = v ? `<span style="color:#ea580c;font-weight:800;font-size:0.78em">${v}</span>` : ''
    return `<td style="padding:2px 14px;${bt}${right}">${val}</td>`
  }).join('')}</tr>`
}

function mAnswer(digits: string[]): string {
  return `<tr>${digits.map((v, i) => {
    const right = i < 3 ? 'border-right:1px solid #e5e7eb;' : ''
    return `<td style="padding:7px 14px;color:#7c3aed;font-weight:800;font-size:1.08em;border-top:3px double #374151;${right}">${v}</td>`
  }).join('')}</tr>`
}

// ── WE4: 347 × 23 = 7 981 ────────────────────────────────────────────────────
// Step 1 (347 × 3): 3×7=21 carry 2→T; 3×4+2=14 carry 1→H; 3×3+1=10 carry 1→Th  → PP1 = 1 041
// Step 2 (347 × 2): 2×7=14 carry 1→H; 2×4+1=9; 2×3=6                             → PP2 = 6 940
const we4SetupTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '3', '4', '7'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '2', '3'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  `</tbody>`
)

const we4FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '3', '4', '7'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '2', '3'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['¹', '¹', '²', '']) +
  mRow(['1', '0', '4', '1'], ['#dc2626', '#dc2626', '#dc2626', '#dc2626']) +
  mCarry(['', '¹', '', ''], true) +
  mRow(['6', '9', '4', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb']) +
  mAnswer(['7', '9', '8', '1']) +
  `</tbody>`
)

// ── WE5: 256 × 34 = 8 704 ────────────────────────────────────────────────────
// Step 1 (256 × 4): 4×6=24 carry 2→T; 4×5+2=22 carry 2→H; 4×2+2=10 carry 1→Th  → PP1 = 1 024
// Step 2 (256 × 3): 3×6=18 carry 1→H; 3×5+1=16 carry 1→Th; 3×2+1=7              → PP2 = 7 680
const we5FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '2', '5', '6'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '3', '4'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['¹', '²', '²', '']) +
  mRow(['1', '0', '2', '4'], ['#dc2626', '#dc2626', '#dc2626', '#dc2626']) +
  mCarry(['¹', '¹', '', ''], true) +
  mRow(['7', '6', '8', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb']) +
  mAnswer(['8', '7', '0', '4']) +
  `</tbody>`
)

// ── WE9: 47 × 83 = 3 901 ─────────────────────────────────────────────────────
// Step 1 (47 × 3): 3×7=21 carry 2→T; 3×4+2=14 carry 1→H   → PP1 = 141
// Step 2 (47 × 8): 8×7=56 carry 5→H; 8×4+5=37 carry 3→Th  → PP2 = 3 760
const we9FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '', '4', '7'], [MGRAY, MGRAY, GRAY, GRAY]) +
  mRow(['×', '', '8', '3'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['', '¹', '²', '']) +
  mRow(['', '1', '4', '1'], [MGRAY, '#dc2626', '#dc2626', '#dc2626']) +
  mCarry(['³', '⁵', '', ''], true) +
  mRow(['3', '7', '6', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb']) +
  mAnswer(['3', '9', '0', '1']) +
  `</tbody>`
)

// ── WE10: 312 × 28 = 8 736 ───────────────────────────────────────────────────
// Step 1 (312 × 8): 8×2=16 carry 1→T; 8×1+1=9; 8×3=24 carry 2→Th  → PP1 = 2 496
// Step 2 (312 × 2): no carries                                        → PP2 = 6 240
const we10FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '3', '1', '2'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '2', '8'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['²', '', '¹', '']) +
  mRow(['2', '4', '9', '6'], ['#dc2626', '#dc2626', '#dc2626', '#dc2626']) +
  mRow(['6', '2', '4', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb'], true) +
  mAnswer(['8', '7', '3', '6']) +
  `</tbody>`
)

// ── WE11: 24 × 38 = 912 ──────────────────────────────────────────────────────
// Step 1 (24 × 8): 8×4=32 carry 3→T; 8×2+3=19 carry 1→H   → PP1 = 192
// Step 2 (24 × 3): 3×4=12 carry 1→H; 3×2+1=7              → PP2 = 720
const we11FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '', '2', '4'], [MGRAY, MGRAY, GRAY, GRAY]) +
  mRow(['×', '', '3', '8'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['', '¹', '³', '']) +
  mRow(['', '1', '9', '2'], [MGRAY, '#dc2626', '#dc2626', '#dc2626']) +
  mCarry(['', '¹', '', ''], true) +
  mRow(['', '7', '2', '0'], [MGRAY, '#dc2626', '#dc2626', '#2563eb']) +
  mAnswer(['', '9', '1', '2']) +
  `</tbody>`
)

// ── WE12: 347 × 12 = 4 164 ───────────────────────────────────────────────────
// Step 1 (347 × 2): 2×7=14 carry 1→T; 2×4+1=9; 2×3=6    → PP1 = 694
// Step 2 (347 × 1): no carries                             → PP2 = 3 470
const we12FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '3', '4', '7'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '1', '2'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['', '', '¹', '']) +
  mRow(['', '6', '9', '4'], [MGRAY, '#dc2626', '#dc2626', '#dc2626']) +
  mRow(['3', '4', '7', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb'], true) +
  mAnswer(['4', '1', '6', '4']) +
  `</tbody>`
)

// ── WE13: 144 × 25 = 3 600 ───────────────────────────────────────────────────
// Step 1 (144 × 5): 5×4=20 carry 2→T; 5×4+2=22 carry 2→H; 5×1+2=7  → PP1 = 720
// Step 2 (144 × 2): no carries                                         → PP2 = 2 880
const we13FullTable = MULT_TW(
  MULT_TH +
  `<tbody>` +
  mRow(['', '1', '4', '4'], [MGRAY, GRAY, GRAY, GRAY]) +
  mRow(['×', '', '2', '5'], [MGRAY, MGRAY, '#16a34a', '#2563eb'], true) +
  mCarry(['', '²', '²', '']) +
  mRow(['', '7', '2', '0'], [MGRAY, '#dc2626', '#dc2626', '#dc2626']) +
  mRow(['2', '8', '8', '0'], ['#dc2626', '#dc2626', '#dc2626', '#2563eb'], true) +
  mAnswer(['3', '6', '0', '0']) +
  `</tbody>`
)

// Section 5 key-word chips (computed once at module load)
const keywordChips = ['times', 'groups of', 'each', 'per', 'every', 'multiply', 'product', 'altogether', 'total']
  .map(kw => `<span style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:6px;padding:4px 12px;font-size:13px;font-weight:700;color:#ea580c;">${kw}</span>`)
  .join(' ')

export const topicData: TopicData = {
  title: 'Multiplication',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLICATION TABLES UP TO 12 × 12
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-tables',
      title: 'Multiplication Tables up to 12 × 12',
      icon: '×',
      explanation: `<p style="margin-bottom:16px;">In Grade 4 you learned your times tables up to <strong>10 × 10</strong>. In Grade 5 we extend this to <strong>12 × 12</strong>. You need to know the <strong>11 times table</strong> and the <strong>12 times table</strong> off by heart so you can use them quickly in any calculation.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('multiplier')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('multiplicand')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('product')}</span>
</div>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:20px;">
  <div style="flex:1;min-width:190px;background:white;border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden;">
    <div style="background:#1e40af;padding:8px 14px;font-weight:700;color:white;font-size:14px;text-align:center;">11 Times Table</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tbody>${table11}</tbody>
    </table>
  </div>
  <div style="flex:1;min-width:190px;background:white;border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden;">
    <div style="background:#15803d;padding:8px 14px;font-weight:700;color:white;font-size:14px;text-align:center;">12 Times Table</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tbody>${table12}</tbody>
    </table>
  </div>
</div>

<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;margin-bottom:14px;">
  <p style="font-weight:700;color:#92400e;margin-bottom:6px;">Pattern tip for the 11 times table</p>
  <p style="margin:0;color:#78350f;">For <strong>11 × 1 to 11 × 9</strong>, the answer simply repeats the digit you are multiplying by — for example ${re('11')} × ${bl('3')} = ${gr('33')} and ${re('11')} × ${bl('7')} = ${gr('77')}. For <strong>11 × 10, 11 × 11 and 11 × 12</strong>, you need to remember the answers: ${gr('110')}, ${gr('121')} and ${gr('132')}.</p>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">
  <p style="font-weight:700;color:#14532d;margin-bottom:6px;">Split method for the 12 times table</p>
  <p style="margin:0;color:#15803d;">Split ${re('12')} into <strong>10 + 2</strong>. Multiply each part separately, then add the results together. For example: ${re('12')} × ${bl('9')} = (10 × ${bl('9')}) + (2 × ${bl('9')}) = 90 + 18 = ${gr('108')}.</p>
</div>`,

      workedExamples: [
        {
          question: 'Use the 11 times table pattern to work out 11 × 8.',
          answer: '88',
          steps: [
            `The ${re('11')} times table has a useful pattern for single-digit numbers (1 to 9): the answer simply <strong>repeats the digit</strong> you are multiplying by.`,
            `We are working out ${re('11')} × ${bl('8')}. Because 8 is a single digit (between 1 and 9), the pattern applies — the answer will have <strong>8 as both digits</strong>.`,
            `${re('11')} × ${bl('8')} = ${gr('88')}<br>The tens digit is 8 and the units digit is 8.`,
            `<strong>Check by counting in 11s:</strong> 11, 22, 33, 44, 55, 66, 77, <strong>88</strong> — that is 8 steps. ✓`,
          ],
        },
        {
          question: 'Use the split method to calculate 12 × 9.',
          answer: '108',
          steps: [
            `The <strong>split method</strong> breaks ${re('12')} into <strong>10 + 2</strong>. Multiplying by 10 and by 2 is straightforward, so this makes the calculation easier.`,
            `Multiply ${bl('9')} by <strong>10</strong> first: 10 × ${bl('9')} = <strong>90</strong>`,
            `Then multiply ${bl('9')} by <strong>2</strong>: 2 × ${bl('9')} = <strong>18</strong>`,
            `Add the two results together: 90 + 18 = ${gr('108')}`,
            `So ${re('12')} × ${bl('9')} = ${gr('108')}`,
          ],
        },
        {
          question: 'Find the missing number: 12 × ___ = 96',
          answer: '8',
          steps: [
            `We know the product (${gr('96')}) and one factor (${re('12')}). We need to find the <strong>missing factor</strong>.`,
            `Use the <strong>inverse operation</strong>: if ${re('12')} × ___ = ${gr('96')}, then ___ = ${gr('96')} ÷ ${re('12')}.`,
            `Work out ${gr('96')} ÷ ${re('12')} by counting up the 12 times table: 12, 24, 36, 48, 60, 72, 84, ${gr('96')} — that is ${bl('8')} steps.`,
            `So ${gr('96')} ÷ ${re('12')} = ${bl('8')}, which means ${re('12')} × ${bl('8')} = ${gr('96')}. The missing number is <strong>8</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        '<DiagramPlaceholder label="A complete 12 × 12 multiplication grid with the 11 and 12 times tables highlighted in a different colour" />',
      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing patterns in the 11 and 12 times tables and tips for remembering them" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MULTIPLYING A 3-DIGIT NUMBER BY A 2-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-3-digit-by-2-digit',
      title: 'Multiplying a 3-Digit Number by a 2-Digit Number',
      icon: '✖',
      explanation: `<p style="margin-bottom:16px;">In Grade 5 we multiply larger numbers using the <strong>column method</strong> extended to a 2-digit multiplier. We work out two separate <em>partial products</em> — one for the ones digit and one for the tens digit — and then add them together to get the final answer.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ones digit of multiplier')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tens digit of multiplier')}</span>
  <span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('carries')}</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('partial products')}</span>
  <span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('final answer')}</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">The 4-step column method:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Multiply the top number by the ${bl('ones digit')} of the multiplier.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Write a <strong>zero placeholder</strong> in the units column of the second row — you are now multiplying by tens.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Multiply the top number by the ${gr('tens digit')} of the multiplier.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Add the two ${re('partial products')} together to get the ${pu('final answer')}.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 347 × 23',
          answer: '7 981',
          steps: [
            `Write the calculation in columns: 347 on top and × 23 below, digits aligned. The ones digit of 23 is ${bl('3')} and the tens digit is ${gr('2')}.${we4SetupTable}`,

            `<strong>Step 1 — Multiply 347 by the ones digit ${bl('3')}:</strong><br><br>
${bl('3')} × 7 = 21 → write 1 in the units column, carry ${or('2')} to the tens column<br>
${bl('3')} × 4 = 12, add carry ${or('2')} = 14 → write 4 in the tens column, carry ${or('1')} to the hundreds column<br>
${bl('3')} × 3 = 9, add carry ${or('1')} = 10 → write 0 in the hundreds column, carry ${or('1')} to the thousands column<br><br>
First ${re('partial product')}: ${re('1 041')}`,

            `<strong>Step 2 — Write the zero placeholder:</strong> Because we are now multiplying by the tens digit (which represents 20, not 2), we write a ${bl('0')} in the units column of the second row to shift everything one place to the left.<br><br>
<strong>Step 3 — Multiply 347 by the tens digit ${gr('2')}:</strong><br><br>
${gr('2')} × 7 = 14 → write 4 in the tens column, carry ${or('1')} to the hundreds column<br>
${gr('2')} × 4 = 8, add carry ${or('1')} = 9 → write 9 in the hundreds column<br>
${gr('2')} × 3 = 6 → write 6 in the thousands column<br><br>
Second ${re('partial product')}: ${re('6 940')}`,

            `<strong>Step 4 — Add the two partial products:</strong><br><br>
${re('1 041')} + ${re('6 940')} = ${pu('7 981')}<br><br>
So 347 × 23 = ${pu('7 981')}${we4FullTable}`,
          ],
        },
        {
          question: 'Calculate 256 × 34',
          answer: '8 704',
          steps: [
            `Write the calculation in columns: 256 on top and × 34 below. The ones digit of 34 is ${bl('4')} and the tens digit is ${gr('3')}.`,

            `<strong>Step 1 — Multiply 256 by the ones digit ${bl('4')}:</strong><br><br>
${bl('4')} × 6 = 24 → write 4 in the units column, carry ${or('2')} to the tens column<br>
${bl('4')} × 5 = 20, add carry ${or('2')} = 22 → write 2 in the tens column, carry ${or('2')} to the hundreds column<br>
${bl('4')} × 2 = 8, add carry ${or('2')} = 10 → write 0 in the hundreds column, carry ${or('1')} to the thousands column<br><br>
First ${re('partial product')}: ${re('1 024')}`,

            `<strong>Step 2 — Write the zero placeholder</strong> in the units column of the second row.<br><br>
<strong>Step 3 — Multiply 256 by the tens digit ${gr('3')}:</strong><br><br>
${gr('3')} × 6 = 18 → write 8 in the tens column, carry ${or('1')} to the hundreds column<br>
${gr('3')} × 5 = 15, add carry ${or('1')} = 16 → write 6 in the hundreds column, carry ${or('1')} to the thousands column<br>
${gr('3')} × 2 = 6, add carry ${or('1')} = 7 → write 7 in the thousands column<br><br>
Second ${re('partial product')}: ${re('7 680')}`,

            `<strong>Step 4 — Add the two partial products:</strong><br><br>
${re('1 024')} + ${re('7 680')} = ${pu('8 704')}<br><br>
So 256 × 34 = ${pu('8 704')}${we5FullTable}`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        '<DiagramPlaceholder label="Column multiplication layout showing 347 x 23 with two partial products shown separately and then added together with colour coding" />',
      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step how to multiply a 3-digit number by a 2-digit number using the column method with two partial products" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE DISTRIBUTIVE PROPERTY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distributive-property',
      title: 'The Distributive Property',
      icon: '⟨⟩',
      explanation: `<p style="margin-bottom:16px;">The <strong>distributive property</strong> lets you <strong>break a number into parts</strong> to make multiplication easier. Instead of multiplying by a large number all at once, you split it into friendlier parts, multiply each part separately, and then add the results together.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:8px;">The rule:</p>
  <p style="font-size:1.05em;text-align:center;margin-bottom:10px;">${re('a')} × (${bl('b')} + ${gr('c')}) = (${re('a')} × ${bl('b')}) + (${re('a')} × ${gr('c')})</p>
  <p style="margin:0;color:#1e3a8a;font-size:0.95em;">The ${re('number being distributed')} multiplies <em>each part</em> inside the brackets separately.</p>
</div>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:18px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('number being distributed')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first part')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('second part')}</span>
  <span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('final answer')}</span>
</div>

<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;">
  <p style="font-weight:700;color:#92400e;margin-bottom:6px;">Why is this useful?</p>
  <p style="margin:0;color:#78350f;">Sometimes it is much easier to split a number into <strong>tens and units</strong> (or <strong>hundreds and tens</strong>) before multiplying. For example, multiplying by 48 looks hard — but multiplying by 40 and then by 8 separately is straightforward. The distributive property makes this legal and reliable.</p>
</div>`,

      workedExamples: [
        {
          question: 'Calculate 7 × 48 using the distributive property.',
          answer: '336',
          steps: [
            `We need to multiply ${re('7')} × 48. The number 48 is not in the times tables, so we split it into friendlier parts.`,
            `<strong>Step 1 — Break 48 into parts:</strong><br>48 = ${bl('40')} + ${gr('8')}`,
            `<strong>Step 2 — Apply the distributive property:</strong><br>${re('7')} × 48 = (${re('7')} × ${bl('40')}) + (${re('7')} × ${gr('8')})`,
            `<strong>Step 3 — Multiply each part:</strong><br>${re('7')} × ${bl('40')} = <strong>280</strong><br>${re('7')} × ${gr('8')} = <strong>56</strong>`,
            `<strong>Step 4 — Add the results:</strong><br>280 + 56 = ${pu('336')}<br><br>So ${re('7')} × 48 = ${pu('336')}`,
          ],
        },
        {
          question: 'Calculate 6 × 125 using the distributive property.',
          answer: '750',
          steps: [
            `We need to multiply ${re('6')} × 125. We can split 125 into a hundreds part and a tens part.`,
            `<strong>Step 1 — Break 125 into parts:</strong><br>125 = ${bl('100')} + ${gr('25')}`,
            `<strong>Step 2 — Apply the distributive property:</strong><br>${re('6')} × 125 = (${re('6')} × ${bl('100')}) + (${re('6')} × ${gr('25')})`,
            `<strong>Step 3 — Multiply each part:</strong><br>${re('6')} × ${bl('100')} = <strong>600</strong><br>${re('6')} × ${gr('25')} = <strong>150</strong> (6 × 25 = 6 × 5 × 5 = 30 × 5 = 150)`,
            `<strong>Step 4 — Add the results:</strong><br>600 + 150 = ${pu('750')}<br><br>So ${re('6')} × 125 = ${pu('750')}`,
          ],
        },
        {
          question: 'Calculate 34 × 12 using the distributive property.',
          answer: '408',
          steps: [
            `We need to multiply 34 × ${re('12')}. We split the ${re('12')} into tens and units.`,
            `<strong>Step 1 — Break 12 into parts:</strong><br>12 = ${bl('10')} + ${gr('2')}`,
            `<strong>Step 2 — Apply the distributive property:</strong><br>34 × ${re('12')} = (34 × ${bl('10')}) + (34 × ${gr('2')})`,
            `<strong>Step 3 — Multiply each part:</strong><br>34 × ${bl('10')} = <strong>340</strong><br>34 × ${gr('2')} = <strong>68</strong>`,
            `<strong>Step 4 — Add the results:</strong><br>340 + 68 = ${pu('408')}<br><br>So 34 × ${re('12')} = ${pu('408')}`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the distributive property to break numbers apart and make multiplication easier" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ESTIMATING BEFORE MULTIPLYING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-before-multiplying',
      title: 'Estimating Before Multiplying',
      icon: '≈',
      explanation: `<p style="margin-bottom:16px;">Before you multiply, make a quick <strong>estimate</strong> first. An estimate is a rough answer using rounded numbers. After you find the exact answer, compare it with your estimate — if they are close, your answer is <strong>reasonable</strong>.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:18px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>
  <span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rounded numbers')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('estimate')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('exact answer')}</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">Steps for estimating before multiplying:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Round each number to the nearest 10, 100, or 1 000 to get ${or('rounded numbers')}.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Multiply the rounded numbers to get your ${gr('estimate')}.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Calculate the ${bl('exact answer')} using the column method.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Compare: if the ${bl('exact answer')} is close to the ${gr('estimate')}, the answer is <strong>reasonable</strong>.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Estimate then calculate exactly: 47 × 83',
          answer: 'Estimate 4 000, exact answer 3 901',
          steps: [
            `<strong>Step 1 — Round the numbers:</strong><br>
Round 47 to the nearest 10: ${or('50')} (units digit is 7 — 5 or more, so round up)<br>
Round 83 to the nearest 10: ${or('80')} (units digit is 3 — less than 5, so round down)`,

            `<strong>Step 2 — Estimate:</strong><br>
${or('50')} × ${or('80')} = ${gr('4 000')}<br>
(Think: 5 × 8 = 40, so 50 × 80 = 4 000)`,

            `<strong>Step 3 — Exact answer using the column method:</strong>${we9FullTable}
${bl('Exact answer: 3 901')}`,

            `<strong>Step 4 — Is the answer reasonable?</strong><br>
${bl('3 901')} is close to the estimate of ${gr('4 000')} — the difference is only 99. ✓<br>
The answer is <strong>reasonable</strong>.`,
          ],
        },
        {
          question: 'Estimate then calculate exactly: 312 × 28',
          answer: 'Estimate 9 000, exact answer 8 736',
          steps: [
            `<strong>Step 1 — Round the numbers:</strong><br>
Round 312 to the nearest 100: ${or('300')} (tens digit is 1 — less than 5, so round down)<br>
Round 28 to the nearest 10: ${or('30')} (units digit is 8 — 5 or more, so round up)`,

            `<strong>Step 2 — Estimate:</strong><br>
${or('300')} × ${or('30')} = ${gr('9 000')}<br>
(Think: 3 × 3 = 9, so 300 × 30 = 9 000)`,

            `<strong>Step 3 — Exact answer using the column method:</strong>${we10FullTable}
${bl('Exact answer: 8 736')}`,

            `<strong>Step 4 — Is the answer reasonable?</strong><br>
${bl('8 736')} is close to the estimate of ${gr('9 000')} — the difference is only 264. ✓<br>
The answer is <strong>reasonable</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MULTIPLICATION WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-word-problems',
      title: 'Multiplication Word Problems',
      icon: '✎',
      explanation: `<p style="margin-bottom:16px;">A word problem describes a real-life situation. Before you calculate, read carefully and find the <strong>key words</strong> that tell you which operation to use. These key words tell you that multiplication is needed:</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">${keywordChips}</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">Steps for solving a multiplication word problem:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Read the problem carefully and find the ${or('key words')}.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Write a number sentence using the numbers from the problem.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Calculate using the column method.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Write the answer in a full sentence, including the unit.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'A school has 24 classrooms. Each classroom has 38 desks. How many desks are there in total?',
          answer: '912 desks',
          steps: [
            `Key words: "${or('each')}" and "${or('total')}" → this is a multiplication problem.<br><br>
There are ${re('24')} classrooms with ${re('38')} desks in ${or('each')} one. We need the ${or('total')}.`,

            `<strong>Step 2 — Write the number sentence:</strong><br>
${re('24')} × ${re('38')} = ?`,

            `<strong>Step 3 — Column method:</strong>${we11FullTable}`,

            `<strong>Step 4 — Answer:</strong><br>
24 × 38 = <strong>912</strong><br><br>
There are <strong>912 desks</strong> in the school in total.`,
          ],
        },
        {
          question: 'A factory produces 347 items per hour. How many items does it produce in 12 hours?',
          answer: '4 164 items',
          steps: [
            `Key word: "${or('per')}" → this is a multiplication problem.<br><br>
The factory produces ${re('347')} items ${or('per')} hour for ${re('12')} hours.`,

            `<strong>Step 2 — Write the number sentence:</strong><br>
${re('347')} × ${re('12')} = ?`,

            `<strong>Step 3 — Column method with two partial products:</strong>${we12FullTable}`,

            `<strong>Step 4 — Answer:</strong><br>
347 × 12 = <strong>4 164</strong><br><br>
The factory produces <strong>4 164 items</strong> in 12 hours.`,
          ],
        },
        {
          question: 'A box holds 144 chocolates. A shop orders 25 boxes. How many chocolates are there altogether? Estimate first then calculate exactly.',
          answer: '3 600 chocolates',
          steps: [
            `Key word: "${or('altogether')}" → this is a multiplication problem. The problem also asks us to estimate first.<br><br>
There are ${re('144')} chocolates ${or('per')} box and ${re('25')} boxes.`,

            `<strong>Step 1 — Estimate:</strong><br>
Round 144 to the nearest 10: ${or('140')}<br>
${or('140')} × ${re('25')} = ${gr('3 500')}<br>
(Think: 140 × 20 = 2 800 and 140 × 5 = 700, so 140 × 25 = 3 500)`,

            `<strong>Step 2 — Exact calculation:</strong>${we13FullTable}`,

            `<strong>Step 3 — Is the answer reasonable?</strong><br>
Exact answer: <strong>3 600</strong>. Estimate was ${gr('3 500')}. These are close. ✓<br><br>
There are <strong>3 600 chocolates</strong> altogether.`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to estimate before multiplying and solve multiplication word problems by identifying key words" />',
    },
  ],

  // ─── TOPIC PRACTICE ──────────────────────────────────────────────────────────
  topicPractice: [

    // ── Section 1: Multiplication Tables up to 12 × 12 ───────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate the following:\na) 11 × 7\nb) 12 × 8\nc) 11 × 11',
      parts: [
        {
          label: 'a)',
          correctAnswer: '77',
          explanation:
            '11 × 7 = 77\n\n' +
            'For 11 × 1 to 11 × 9, the answer repeats the digit you are multiplying by:\n' +
            '11 × 7 → both digits are 7 → 77',
        },
        {
          label: 'b)',
          correctAnswer: '96',
          explanation:
            '12 × 8 = 96\n\n' +
            'Use the split method: 12 = 10 + 2\n' +
            '10 × 8 = 80\n' +
            '2 × 8 = 16\n' +
            '80 + 16 = 96',
        },
        {
          label: 'c)',
          correctAnswer: '121',
          explanation:
            '11 × 11 = 121\n\n' +
            'For 11 × 10, 11 × 11, and 11 × 12 the digit repeat pattern does not apply — you must recall or calculate:\n' +
            '11 × 11 = 121',
        },
      ],
      answer: 'a) 77\nb) 96\nc) 121',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Find the missing numbers:\na) 12 × ___ = 108\nb) ___ × 11 = 99\nc) 12 × ___ = 144',
      parts: [
        {
          label: 'a)',
          correctAnswer: '9',
          explanation:
            'Use the inverse operation: 108 ÷ 12\n\n' +
            'Count up the 12 times table:\n' +
            '12, 24, 36, 48, 60, 72, 84, 96, 108 — that is 9 steps.\n' +
            'So 12 × 9 = 108. The missing number is 9.',
        },
        {
          label: 'b)',
          correctAnswer: '9',
          explanation:
            'Use the inverse operation: 99 ÷ 11\n\n' +
            'Count up the 11 times table:\n' +
            '11, 22, 33, 44, 55, 66, 77, 88, 99 — that is 9 steps.\n' +
            'So 9 × 11 = 99. The missing number is 9.',
        },
        {
          label: 'c)',
          correctAnswer: '12',
          explanation:
            'Use the inverse operation: 144 ÷ 12\n\n' +
            'Count up the 12 times table:\n' +
            '12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144 — that is 12 steps.\n' +
            'So 12 × 12 = 144. The missing number is 12.',
        },
      ],
      answer: 'a) 9\nb) 9\nc) 12',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Thabo says 11 × 12 = 122 using the digit repeat pattern. Is he correct? Explain why or why not and give the correct answer.',
      answer:
        'No, Thabo is incorrect.\n\n' +
        'The digit repeat pattern only works for 11 × 1 through 11 × 9 (where the answer repeats the single digit, e.g. 11 × 7 = 77).\n\n' +
        'For 11 × 10, 11 × 11, and 11 × 12 the pattern breaks down and you must calculate properly:\n' +
        '11 × 12 = 132 (not 122).',
    },

    // ── Section 2: Multiplying a 3-Digit Number by a 2-Digit Number ──────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Calculate using the column method and show your working:\n234 × 12',
      correctAnswer: '2808',
      explanation:
        '234 × 12 = 2 808\n\n' +
        'Step 1 — 234 × 2 (ones digit, no carries):\n' +
        '• 2 × 4 = 8\n' +
        '• 2 × 3 = 6\n' +
        '• 2 × 2 = 4\n' +
        'Partial product 1: 468\n\n' +
        'Step 2 — 234 × 1 (tens digit, write 0 placeholder, no carries):\n' +
        '• 1 × 4 = 4\n' +
        '• 1 × 3 = 3\n' +
        '• 1 × 2 = 2\n' +
        'Partial product 2: 2 340\n\n' +
        'Step 3 — Add the partial products:\n' +
        '468 + 2 340 = 2 808',
      answer: '2 808',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Calculate using the column method, showing both partial products:\na) 347 × 24\nb) 256 × 33',
      parts: [
        {
          label: 'a)',
          correctAnswer: '8328',
          explanation:
            '347 × 24 = 8 328\n\n' +
            'Step 1 — 347 × 4 (ones digit):\n' +
            '• 4 × 7 = 28 → write 8, carry 2\n' +
            '• 4 × 4 = 16 + 2 = 18 → write 8, carry 1\n' +
            '• 4 × 3 = 12 + 1 = 13\n' +
            'Partial product 1: 1 388\n\n' +
            'Step 2 — 347 × 2 (tens digit, write 0 placeholder):\n' +
            '• 2 × 7 = 14 → write 4, carry 1\n' +
            '• 2 × 4 = 8 + 1 = 9\n' +
            '• 2 × 3 = 6\n' +
            'Partial product 2: 6 940\n\n' +
            'Step 3 — Add:\n' +
            '1 388 + 6 940 = 8 328',
        },
        {
          label: 'b)',
          correctAnswer: '8448',
          explanation:
            '256 × 33 = 8 448\n\n' +
            'Step 1 — 256 × 3 (ones digit):\n' +
            '• 3 × 6 = 18 → write 8, carry 1\n' +
            '• 3 × 5 = 15 + 1 = 16 → write 6, carry 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            'Partial product 1: 768\n\n' +
            'Step 2 — 256 × 3 (tens digit, write 0 placeholder):\n' +
            '• 3 × 6 = 18 → write 8, carry 1\n' +
            '• 3 × 5 = 15 + 1 = 16 → write 6, carry 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            'Partial product 2: 7 680\n\n' +
            'Step 3 — Add:\n' +
            '768 + 7 680 = 8 448',
        },
      ],
      answer: 'a) 8 328\nb) 8 448',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A school orders 124 books at R38 each.\n' +
        'a) Estimate the total cost by rounding both numbers to the nearest 10.\n' +
        'b) Calculate the exact total cost using the column method.',
      parts: [
        {
          label: 'a) Estimate:',
          correctAnswers: ['4800', 'r4800'],
          correctAnswer: '4800',
          explanation:
            'Round 124 to the nearest 10: 120\n' +
            'Round 38 to the nearest 10: 40\n\n' +
            'Estimate: 120 × 40 = R4 800\n' +
            '(Think: 12 × 4 = 48, so 120 × 40 = 4 800)',
        },
        {
          label: 'b) Exact total:',
          correctAnswers: ['4712', 'r4712'],
          correctAnswer: '4712',
          explanation:
            '124 × 38 = 4 712\n\n' +
            'Step 1 — 124 × 8 (ones digit):\n' +
            '• 8 × 4 = 32 → write 2, carry 3\n' +
            '• 8 × 2 = 16 + 3 = 19 → write 9, carry 1\n' +
            '• 8 × 1 = 8 + 1 = 9\n' +
            'Partial product 1: 992\n\n' +
            'Step 2 — 124 × 3 (tens digit, write 0 placeholder):\n' +
            '• 3 × 4 = 12 → write 2, carry 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            '• 3 × 1 = 3\n' +
            'Partial product 2: 3 720\n\n' +
            'Step 3 — Add:\n' +
            '992 + 3 720 = 4 712',
        },
      ],
      answer: 'a) Estimate: 120 × 40 = R4 800\nb) Exact: R4 712',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A school orders 124 books at R38 each. You estimated R4 800 and calculated an exact total of R4 712.\n' +
        'c) Is your exact answer close to your estimate? Explain your reasoning.',
      answer:
        'Yes, R4 712 is close to R4 800.\n\n' +
        'The difference is R4 800 − R4 712 = R88.\n' +
        'This is a small difference relative to the total cost, which confirms that the exact answer is reasonable.',
    },

  ],

  scoreMessages: [
    { minScore: 13, message: 'Outstanding! Full marks — you have mastered multiplication tables and the column method for 3-digit by 2-digit numbers.' },
    { minScore: 10, message: 'Excellent work! You have a strong understanding. Review any questions you missed.' },
    { minScore: 7,  message: 'Good effort! Go back and practise the sections where you lost marks.' },
    { minScore: 0,  message: 'Keep practising! Work carefully through the worked examples step by step and try again.' },
  ],
}
