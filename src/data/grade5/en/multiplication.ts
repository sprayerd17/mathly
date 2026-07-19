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
      diagramPlaceholder: 'A complete 12 × 12 multiplication grid with the 11 and 12 times tables highlighted in a different colour',
      diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="40.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">1</text><text x="53.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">2</text><text x="66.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">3</text><text x="79.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">4</text><text x="92.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">5</text><text x="105.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">6</text><text x="118.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">7</text><text x="131.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">8</text><text x="144.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">9</text><text x="157.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">10</text><text x="170.5" y="10" font-size="7" text-anchor="middle" fill="#ea580c" font-weight="700">11</text><text x="183.5" y="10" font-size="7" text-anchor="middle" fill="#16a34a" font-weight="700">12</text><text x="30" y="23" font-size="7" text-anchor="end" fill="#6b7280">1</text><text x="30" y="36" font-size="7" text-anchor="end" fill="#6b7280">2</text><text x="30" y="49" font-size="7" text-anchor="end" fill="#6b7280">3</text><text x="30" y="62" font-size="7" text-anchor="end" fill="#6b7280">4</text><text x="30" y="75" font-size="7" text-anchor="end" fill="#6b7280">5</text><text x="30" y="88" font-size="7" text-anchor="end" fill="#6b7280">6</text><text x="30" y="101" font-size="7" text-anchor="end" fill="#6b7280">7</text><text x="30" y="114" font-size="7" text-anchor="end" fill="#6b7280">8</text><text x="30" y="127" font-size="7" text-anchor="end" fill="#6b7280">9</text><text x="30" y="140" font-size="7" text-anchor="end" fill="#6b7280">10</text><text x="30" y="153" font-size="7" text-anchor="end" fill="#ea580c" font-weight="700">11</text><text x="30" y="166" font-size="7" text-anchor="end" fill="#16a34a" font-weight="700">12</text><rect x="34" y="144" width="156" height="13" fill="#fed7aa"/><rect x="34" y="157" width="156" height="13" fill="#bbf7d0"/><rect x="34" y="14" width="156" height="156" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="47" y1="14" x2="47" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="60" y1="14" x2="60" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="73" y1="14" x2="73" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="86" y1="14" x2="86" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="99" y1="14" x2="99" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="112" y1="14" x2="112" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="125" y1="14" x2="125" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="138" y1="14" x2="138" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="151" y1="14" x2="151" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="164" y1="14" x2="164" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="177" y1="14" x2="177" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="27" x2="190" y2="27" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="40" x2="190" y2="40" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="53" x2="190" y2="53" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="66" x2="190" y2="66" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="79" x2="190" y2="79" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="92" x2="190" y2="92" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="105" x2="190" y2="105" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="118" x2="190" y2="118" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="131" x2="190" y2="131" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="144" x2="190" y2="144" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="157" x2="190" y2="157" stroke="#cbd5e1" stroke-width="0.75"/><rect x="34" y="144" width="156" height="26" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="40.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">11</text><text x="53.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">22</text><text x="66.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">33</text><text x="79.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">44</text><text x="92.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">55</text><text x="105.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">66</text><text x="118.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">77</text><text x="131.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">88</text><text x="144.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">99</text><text x="157.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">110</text><text x="170.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">121</text><text x="183.5" y="153" font-weight="700" font-size="6" text-anchor="middle" fill="#c2410c">132</text><text x="40.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">12</text><text x="53.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">24</text><text x="66.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">36</text><text x="79.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">48</text><text x="92.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">60</text><text x="105.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">72</text><text x="118.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">84</text><text x="131.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">96</text><text x="144.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">108</text><text x="157.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">120</text><text x="170.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">132</text><text x="183.5" y="166" font-weight="700" font-size="6" text-anchor="middle" fill="#15803d">144</text><text x="112" y="182" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">11× row orange · 12× row green</text></svg>',
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
      diagramPlaceholder: 'Column multiplication layout showing 347 x 23 with two partial products shown separately and then added together with colour coding',
      diagramSvg: '<svg viewBox="0 0 220 178" xmlns="http://www.w3.org/2000/svg"><text x="45" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">Th</text><text x="75" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">H</text><text x="105" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">T</text><text x="135" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">U</text><text x="75" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">3</text><text x="105" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">4</text><text x="135" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">7</text><text x="20" y="48" font-weight="700" font-size="16" fill="#374151">×</text><text x="105" y="48" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">2</text><text x="135" y="48" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">3</text><line x1="35" y1="54" x2="150" y2="54" stroke="#0f1f3d" stroke-width="2"/><text x="75" y="64" font-weight="700" font-size="9" text-anchor="middle" fill="#ea580c">1</text><text x="105" y="64" font-weight="700" font-size="9" text-anchor="middle" fill="#ea580c">2</text><text x="45" y="78" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">1</text><text x="75" y="78" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">0</text><text x="105" y="78" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">4</text><text x="135" y="78" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">1</text><text x="75" y="90" font-weight="700" font-size="9" text-anchor="middle" fill="#ea580c">1</text><text x="45" y="104" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">6</text><text x="75" y="104" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">9</text><text x="105" y="104" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">4</text><text x="135" y="104" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">0</text><line x1="35" y1="110" x2="150" y2="110" stroke="#0f1f3d" stroke-width="2"/><text x="45" y="128" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">7</text><text x="75" y="128" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">9</text><text x="105" y="128" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">8</text><text x="135" y="128" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">1</text><text x="90" y="152" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">347 × 23 = 7 981</text><text x="90" y="169" font-size="10" text-anchor="middle" fill="#6b7280">1 041 (× 3) + 6 940 (× 20) = 7 981</text></svg>',
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

  // ─── PRACTICE SETS (3 × 20 questions) ────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 times-table fluency (11s/12s) | 4-6 reasoning & error-spotting |
    // 7-8 column mult. warm-up (1-digit) | 9-12 column mult. (2-digit, 2 partials) |
    // 13-15 distributive property | 16-19 estimation/reasonableness/word problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Calculate: 11 × 5', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55'], explanation: 'For 11 × 1 to 11 × 9, the answer repeats the digit you are multiplying by. 11 × 5 = 55.' },
        { difficulty: 'Easy', question: 'Calculate: 12 × 4', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48'], explanation: 'Use the split method: 12 = 10 + 2. 10 × 4 = 40 and 2 × 4 = 8. 40 + 8 = 48.' },
        { difficulty: 'Easy', question: 'What is 12 groups of 6?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: 'Split method: 12 = 10 + 2. 10 × 6 = 60 and 2 × 6 = 12. 60 + 12 = 72.' },
        { difficulty: 'Easy', question: 'Find the missing factor: 11 × ___ = 99', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Use the inverse operation: 99 ÷ 11. Counting up the 11 times table (11, 22, 33 … 99) takes 9 steps, so the missing factor is 9.' },
        { difficulty: 'Easy-Medium', question: 'Explain why 11 × 3 = 33 uses a shortcut, but 11 × 11 = 121 cannot use that same shortcut.', answer: 'For 11 × 1 through 11 × 9, the answer simply repeats the single digit being multiplied (so 11 × 3 = 33). But 11 × 10, 11 × 11 and 11 × 12 involve a two-digit number, so the digit-repeat pattern breaks down — there is no single digit to repeat, and you must calculate or recall the actual answer (121) instead.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A learner says: "11 × 12 = 1112, because you just write the 11 next to the 12." Is this correct? Give the correct answer and explain the mistake.', answer: '132', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132'], explanation: 'The digit-repeat pattern only works for 11 × 1 to 11 × 9. It does not mean "join the digits together." The correct answer is 11 × 12 = 132, found by calculating (11 × 10) + (11 × 2) = 110 + 22 = 132.' },
        { difficulty: 'Medium', question: 'Which is greater: 12 × 9 or 11 × 10? Show the value of each.', answer: '12 × 9 = 108, which is smaller than 11 × 10 = 110, so 11 × 10 is greater.', checkMode: 'auto', correctAnswer: '11x10', correctAnswers: ['11x10', '11 x 10', '11×10', 'the second one', '11 x 10 is greater'], explanation: '12 × 9 = 108 (split method: 10 × 9 = 90, 2 × 9 = 18, 90 + 18 = 108). 11 × 10 = 110. Since 110 > 108, 11 × 10 is greater.' },
        { difficulty: 'Medium', question: 'Calculate using the column method: 342 × 3', answer: '1 026', checkMode: 'auto', correctAnswer: '1026', correctAnswers: ['1026', '1 026'], explanation: '3 × 2 = 6. 3 × 4 = 12 → write 2, carry 1. 3 × 3 = 9 + 1 = 10 → write 0, carry 1 into the thousands. 342 × 3 = 1 026.' },
        { difficulty: 'Medium', question: 'A crate holds 213 apples. How many apples are in 4 crates? Use the column method.', answer: '852', checkMode: 'auto', correctAnswer: '852', correctAnswers: ['852'], explanation: '4 × 3 = 12 → write 2, carry 1. 4 × 1 = 4 + 1 = 5. 4 × 2 = 8. 213 × 4 = 852 apples.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 245 × 18', answer: '4 410', checkMode: 'auto', correctAnswer: '4410', correctAnswers: ['4410', '4 410'], explanation: 'Step 1 — 245 × 8 (ones): 8×5=40 write 0 carry 4; 8×4=32+4=36 write 6 carry 3; 8×2=16+3=19. Partial product 1: 1 960.\nStep 2 — 245 × 1 (tens, 0 placeholder): 1×5=5; 1×4=4; 1×2=2. Partial product 2: 2 450.\nAdd: 1 960 + 2 450 = 4 410.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 412 × 26', answer: '10 712', checkMode: 'auto', correctAnswer: '10712', correctAnswers: ['10712', '10 712'], explanation: 'Step 1 — 412 × 6 (ones): 6×2=12 write 2 carry 1; 6×1=6+1=7; 6×4=24. Partial product 1: 2 472.\nStep 2 — 412 × 2 (tens, 0 placeholder): 2×2=4; 2×1=2; 2×4=8. Partial product 2: 8 240.\nAdd: 2 472 + 8 240 = 10 712.' },
        { difficulty: 'Medium', question: 'A learner worked out 356 × 27 like this: Partial product 1 (356 × 7) = 2 492. Partial product 2 (356 × 2, with placeholder) = 7 120. Total = 9 612. One of the two partial products has a mistake. Find the correct total.', answer: '9 612', checkMode: 'auto', correctAnswer: '9612', correctAnswers: ['9612', '9 612'], explanation: 'Check 356 × 7: 7×6=42 write 2 carry 4; 7×5=35+4=39 write 9 carry 3; 7×3=21+3=24. Correct partial product 1 is 2 492 (this one was actually correct). Check 356 × 20: 356 × 2 = 712, so with the placeholder that is 7 120 (also correct). Adding: 2 492 + 7 120 = 9 612 — the total given was actually right, so 356 × 27 = 9 612.' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 7 × 64. Show how you split 64.', answer: '448', checkMode: 'auto', correctAnswer: '448', correctAnswers: ['448'], explanation: 'Split 64 = 60 + 4. 7 × 60 = 420. 7 × 4 = 28. 420 + 28 = 448.' },
        { difficulty: 'Medium', question: 'Complete this distributive breakdown: 6 × 137 = (6 × 100) + (6 × ___) = 600 + ___ = ___', answer: '37; 222; 822', checkMode: 'auto', correctAnswer: '37222822', correctAnswers: ['37222822', '37, 222, 822'], explanation: '137 = 100 + 37. 6 × 100 = 600. 6 × 37 = 222. 600 + 222 = 822.' },
        { difficulty: 'Medium', question: 'To calculate 9 × 87, would you rather split 87 into (80 + 7) or (70 + 17)? Explain which split is easier to work with and why.', answer: 'Splitting 87 into 80 + 7 is easier, because both parts are simple to multiply mentally: 9 × 80 = 720 and 9 × 7 = 63, giving 720 + 63 = 783. Splitting into 70 + 17 is harder because 9 × 17 is not an instant times-table fact — you would need another step to work it out, making the calculation longer and more error-prone.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A stadium has 18 sections with 24 seats in each section. Estimate the total number of seats by rounding both numbers to the nearest 10, then calculate the exact number of seats.', answer: 'Estimate: 20 × 20 = 400. Exact: 432 seats.', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', '400432'], explanation: 'Round 18 to 20 and 24 to 20: estimate = 20 × 20 = 400. Exact: 18 × 24 = (18 × 20) + (18 × 4) = 360 + 72 = 432. This is close to the estimate of 400, so it is reasonable.' },
        { difficulty: 'Hard', question: 'A charity packs 16 boxes with 125 tins of food in each box. Round 125 to the nearest 10 to estimate the total tins, then find the exact total. Is the exact answer reasonable compared to your estimate?', answer: 'Estimate: 16 × 130 = 2 080 (or similar). Exact: 2 000 tins. Yes, it is reasonable.', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'Round 125 to the nearest 10: 130. Estimate: 16 × 130 = 2 080. Exact: 16 × 125 = (16 × 100) + (16 × 25) = 1 600 + 400 = 2 000. 2 000 is close to the estimate of 2 080, so the answer is reasonable.' },
        { difficulty: 'Hard', question: 'A bakery sells 34 loaves of bread every day. How many loaves does it sell in 26 days? Give your exact answer using the column method.', answer: '884 loaves', checkMode: 'auto', correctAnswer: '884', correctAnswers: ['884'], explanation: 'Step 1 — 34 × 6 = 204. Step 2 — 34 × 20 = 680. Add: 204 + 680 = 884. The bakery sells 884 loaves in 26 days.' },
        { difficulty: 'Hard', question: 'A school buys 24 packs of pencils at R18 per pack. After the purchase, the school also spends R50 on a box of markers. What is the total amount spent?', answer: 'R482', checkMode: 'auto', correctAnswer: '482', correctAnswers: ['482', 'r482'], explanation: 'Cost of pencils: 24 × 18 = 432. Total spent: 432 + 50 = R482.' },
        { difficulty: 'Hard', question: 'Team A scores 15 points in each of 24 matches. Team B scores 45 points less than Team A\'s season total, after Team A also earns a 45-point bonus for winning the league. First find Team A\'s total from matches (15 × 24), then add the bonus, then subtract 45 to find a comparison value. What is Team A\'s final total after the bonus, and what is the comparison value after subtracting 45?', answer: 'Team A total after bonus: 405. Comparison value: 360.', checkMode: 'auto', correctAnswer: '405360', correctAnswers: ['405360', '405, 360'], explanation: '15 × 24 = 360. Add the 45-point bonus: 360 + 45 = 405. Comparison value: 405 − 45 = 360.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! Full marks — you have mastered times tables, column multiplication, the distributive property and estimation.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of multiplication. Review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back through the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep practising! Work carefully through each step and try again — you will get there.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Calculate: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: 'For 11 × 1 to 11 × 9, the answer repeats the digit you are multiplying by. 11 × 6 = 66.' },
        { difficulty: 'Easy', question: 'Calculate: 12 × 7', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Use the split method: 12 = 10 + 2. 10 × 7 = 70 and 2 × 7 = 14. 70 + 14 = 84.' },
        { difficulty: 'Easy', question: 'A minibus has 12 rows with 3 seats in each row. How many seats altogether?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Split method: 12 = 10 + 2. 10 × 3 = 30 and 2 × 3 = 6. 30 + 6 = 36 seats.' },
        { difficulty: 'Easy', question: 'Find the missing factor: 12 × ___ = 132', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Use the inverse operation: 132 ÷ 12. Counting up the 12 times table (12, 24, 36 … 132) takes 11 steps, so the missing factor is 11.' },
        { difficulty: 'Easy-Medium', question: 'Zinhle says the 11 times table pattern (repeating a digit) works all the way up to 11 × 12. Explain where her thinking goes wrong.', answer: 'The digit-repeat pattern only holds for 11 × 1 through 11 × 9, where the product is a two-digit number made of the same digit twice (like 11 × 4 = 44). Once you reach 11 × 10, 11 × 11 and 11 × 12, the products (110, 121, 132) are three-digit numbers or do not follow a simple repeated-digit shape, so the pattern breaks down and Zinhle needs to calculate these directly rather than guess a repeated digit.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A learner claims 11 × 10 = 1010, saying "you just put a zero after the 11." Is this correct? Give the correct answer and explain the mistake.', answer: '110', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110'], explanation: 'Adding a zero after 11 gives 1110, and the learner\'s working also doesn\'t match real multiplication. To multiply by 10, you simply shift every digit one place to the left: 11 × 10 = 110, not 1010.' },
        { difficulty: 'Medium', question: 'Which is smaller: 11 × 12 or 12 × 11? Explain your answer.', answer: 'They are equal — both equal 132.', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'neither', 'they are equal', 'the same'], explanation: '11 × 12 = 132 and 12 × 11 = 132. Multiplication is commutative — changing the order of the factors does not change the product — so neither is smaller; they are equal.' },
        { difficulty: 'Medium', question: 'Calculate using the column method: 156 × 5', answer: '780', checkMode: 'auto', correctAnswer: '780', correctAnswers: ['780'], explanation: '5 × 6 = 30 → write 0, carry 3. 5 × 5 = 25 + 3 = 28 → write 8, carry 2. 5 × 1 = 5 + 2 = 7. 156 × 5 = 780.' },
        { difficulty: 'Medium', question: 'A shelf holds 216 books. A library has 3 identical shelves. How many books can it hold in total? Use the column method.', answer: '648', checkMode: 'auto', correctAnswer: '648', correctAnswers: ['648'], explanation: '3 × 6 = 18 → write 8, carry 1. 3 × 1 = 3 + 1 = 4. 3 × 2 = 6. 216 × 3 = 648 books.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 129 × 34', answer: '4 386', checkMode: 'auto', correctAnswer: '4386', correctAnswers: ['4386', '4 386'], explanation: 'Step 1 — 129 × 4 (ones): 4×9=36 write 6 carry 3; 4×2=8+3=11 write 1 carry 1; 4×1=4+1=5. Partial product 1: 516.\nStep 2 — 129 × 3 (tens, 0 placeholder): 3×9=27 write 7 carry 2; 3×2=6+2=8; 3×1=3. Partial product 2: 3 870.\nAdd: 516 + 3 870 = 4 386.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 218 × 45', answer: '9 810', checkMode: 'auto', correctAnswer: '9810', correctAnswers: ['9810', '9 810'], explanation: 'Step 1 — 218 × 5 (ones): 5×8=40 write 0 carry 4; 5×1=5+4=9; 5×2=10 write 0 carry 1 → thousands 1. Partial product 1: 1 090.\nStep 2 — 218 × 4 (tens, 0 placeholder): 4×8=32 write 2 carry 3; 4×1=4+3=7; 4×2=8. Partial product 2: 8 720.\nAdd: 1 090 + 8 720 = 9 810.' },
        { difficulty: 'Medium', question: 'A learner worked out 127 × 36 like this: Partial product 1 (127 × 6) = 762. Partial product 2 (127 × 3, with placeholder) = 3 180. Total = 3 942. Check both partial products and give the correct total.', answer: '4 572', checkMode: 'auto', correctAnswer: '4572', correctAnswers: ['4572', '4 572'], explanation: 'Check 127 × 6: 6×7=42 write 2 carry 4; 6×2=12+4=16 write 6 carry 1; 6×1=6+1=7. Correct partial product 1 is 762 (correct). Check 127 × 30: 127 × 3 = 381, so with the placeholder that is 3 810, not 3 180 — the learner made an error here. Correct total: 762 + 3 810 = 4 572.' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 8 × 246. Show how you split 246.', answer: '1 968', checkMode: 'auto', correctAnswer: '1968', correctAnswers: ['1968', '1 968'], explanation: 'Split 246 = 200 + 46 (or 200 + 40 + 6). 8 × 200 = 1 600. 8 × 46 = 368. 1 600 + 368 = 1 968.' },
        { difficulty: 'Medium', question: 'Complete this distributive breakdown: 9 × 53 = (9 × 50) + (9 × ___) = 450 + ___ = ___', answer: '3; 27; 477', checkMode: 'auto', correctAnswer: '327477', correctAnswers: ['327477', '3, 27, 477'], explanation: '53 = 50 + 3. 9 × 50 = 450. 9 × 3 = 27. 450 + 27 = 477.' },
        { difficulty: 'Medium', question: 'To calculate 6 × 428, would splitting 428 into (400 + 28) be easier than splitting it into (420 + 8)? Explain your choice.', answer: 'Splitting into 400 + 28 is generally easier because multiplying by a round hundred (400) is a simple instant fact, and 6 × 28 can be worked out with one more familiar step (6 × 28 = 168). Splitting into 420 + 8 also works, but 6 × 420 is a less immediately obvious fact than 6 × 400, so it takes an extra moment to compute. Both give the same correct answer, but 400 + 28 uses friendlier "round" numbers.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A farmer plants 23 rows of trees with 48 trees in each row. Estimate the total number of trees by rounding both numbers to the nearest 10, then calculate the exact number of trees.', answer: 'Estimate: 20 × 50 = 1 000. Exact: 1 104 trees.', checkMode: 'auto', correctAnswer: '1104', correctAnswers: ['1104', '1 104', '10001104'], explanation: 'Round 23 to 20 and 48 to 50: estimate = 20 × 50 = 1 000. Exact: 23 × 48 = (23 × 40) + (23 × 8) = 920 + 184 = 1 104. This is reasonably close to the estimate of 1 000.' },
        { difficulty: 'Hard', question: 'A warehouse stores boxes in stacks of 212 kg each. There are 45 stacks. Round 212 to the nearest 100 to estimate the total mass, then find the exact total. Is the exact answer reasonable compared to your estimate?', answer: 'Estimate: 200 × 45 = 9 000 kg. Exact: 9 540 kg. Yes, it is reasonable.', checkMode: 'auto', correctAnswer: '9540', correctAnswers: ['9540', '9 540'], explanation: 'Round 212 to the nearest 100: 200. Estimate: 200 × 45 = 9 000. Exact: 45 × 212 = (45 × 200) + (45 × 12) = 9 000 + 540 = 9 540. 9 540 is close to the estimate of 9 000, so the answer is reasonable.' },
        { difficulty: 'Hard', question: 'A courier company delivers 62 parcels a day. How many parcels does it deliver in 27 days? Give your exact answer using the column method.', answer: '1 674 parcels', checkMode: 'auto', correctAnswer: '1674', correctAnswers: ['1674', '1 674'], explanation: 'Step 1 — 62 × 7 = 434. Step 2 — 62 × 20 = 1 240. Add: 434 + 1 240 = 1 674. The company delivers 1 674 parcels in 27 days.' },
        { difficulty: 'Hard', question: 'A store buys 18 crates of juice at R134 per crate. After the purchase, the store gets a R200 discount voucher used on the total. What is the amount actually paid?', answer: 'R2 212', checkMode: 'auto', correctAnswer: '2212', correctAnswers: ['2212', '2 212', 'r2212'], explanation: 'Cost of crates: 18 × 134 = 2 412. Amount paid after voucher: 2 412 − 200 = R2 212.' },
        { difficulty: 'Hard', question: 'Class A raises money by selling 45 raffle tickets at R19 each. Class B raises money by selling 42 raffle tickets at R38 each. Which class raises more money, and what is the difference between the two amounts?', answer: 'Class B raises more. The difference is R741.', checkMode: 'auto', correctAnswer: '741', correctAnswers: ['741', 'r741', 'classb', 'class b'], explanation: 'Class A: 45 × 19 = 855. Class B: 42 × 38 = 1 596. Difference: 1 596 − 855 = 741. Class B raises R741 more than Class A.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with times tables, column multiplication, the distributive property and estimation.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1 & 2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Calculate: 11 × 4', answer: '44', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44'], explanation: 'For 11 × 1 to 11 × 9, the answer repeats the digit you are multiplying by. 11 × 4 = 44.' },
        { difficulty: 'Easy', question: 'Calculate: 12 × 3', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Use the split method: 12 = 10 + 2. 10 × 3 = 30 and 2 × 3 = 6. 30 + 6 = 36.' },
        { difficulty: 'Easy', question: 'A parking lot has 11 rows with 7 cars in each row. How many cars are parked altogether?', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77'], explanation: 'For 11 × 1 to 11 × 9, the answer repeats the digit. 11 × 7 = 77 cars.' },
        { difficulty: 'Easy', question: 'Find the missing factor: ___ × 12 = 96', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Use the inverse operation: 96 ÷ 12. Counting up the 12 times table (12, 24, 36 … 96) takes 8 steps, so the missing factor is 8.' },
        { difficulty: 'Easy-Medium', question: 'Explain, using an example, why the "repeat the digit" trick for the 11 times table works for numbers like 11 × 6 but cannot be used to work out 11 × 11.', answer: '11 × 6 = 66 because 6 is a single digit — multiplying 11 by any digit from 1 to 9 spreads that digit into the tens and units places, giving a repeated pair. But 11 is not a single digit, it is a two-digit number, so there is no single digit to "repeat" — you would need to actually calculate (11 × 10) + (11 × 1) = 110 + 11 = 121, which does not follow the simple repeated-digit shape.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A learner says 12 × 11 = 121, using the "digit repeat" idea from the 11 times table applied to 12 instead. Is this correct? Give the correct answer and explain the mistake.', answer: '132', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132'], explanation: 'The digit-repeat trick is specific to multiplying by 11 with a single digit — it does not apply here at all, since 12 × 11 involves two-digit numbers on both sides. The correct answer is 12 × 11 = 132, found using the split method: (10 × 11) + (2 × 11) = 110 + 22 = 132.' },
        { difficulty: 'Medium', question: 'Compare 12 × 6 and 11 × 7. Which product is bigger, and by how much?', answer: '11 × 7 = 77 is bigger than 12 × 6 = 72, by 5.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '11x7', '11 x 7 by 5'], explanation: '12 × 6 = 72 (split method: 10×6=60, 2×6=12, 60+12=72). 11 × 7 = 77. Difference: 77 − 72 = 5. 11 × 7 is bigger by 5.' },
        { difficulty: 'Medium', question: 'Calculate using the column method: 523 × 2', answer: '1 046', checkMode: 'auto', correctAnswer: '1046', correctAnswers: ['1046', '1 046'], explanation: '2 × 3 = 6. 2 × 2 = 4. 2 × 5 = 10 → write 0, carry 1 into the thousands. 523 × 2 = 1 046.' },
        { difficulty: 'Medium', question: 'A garden has 6 flower beds, and each bed has 214 flowers. How many flowers are there in total? Use the column method.', answer: '1 284', checkMode: 'auto', correctAnswer: '1284', correctAnswers: ['1284', '1 284'], explanation: '6 × 4 = 24 → write 4, carry 2. 6 × 1 = 6 + 2 = 8. 6 × 2 = 12 → write 2, carry 1 into the thousands. 214 × 6 = 1 284 flowers.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 319 × 24', answer: '7 656', checkMode: 'auto', correctAnswer: '7656', correctAnswers: ['7656', '7 656'], explanation: 'Step 1 — 319 × 4 (ones): 4×9=36 write 6 carry 3; 4×1=4+3=7; 4×3=12. Partial product 1: 1 276.\nStep 2 — 319 × 2 (tens, 0 placeholder): 2×9=18 write 8 carry 1; 2×1=2+1=3; 2×3=6. Partial product 2: 6 380.\nAdd: 1 276 + 6 380 = 7 656.' },
        { difficulty: 'Medium', question: 'Calculate using the column method, showing both partial products: 418 × 23', answer: '9 614', checkMode: 'auto', correctAnswer: '9614', correctAnswers: ['9614', '9 614'], explanation: 'Step 1 — 418 × 3 (ones): 3×8=24 write 4 carry 2; 3×1=3+2=5; 3×4=12. Partial product 1: 1 254.\nStep 2 — 418 × 2 (tens, 0 placeholder): 2×8=16 write 6 carry 1; 2×1=2+1=3; 2×4=8. Partial product 2: 8 360.\nAdd: 1 254 + 8 360 = 9 614.' },
        { difficulty: 'Medium', question: 'A learner worked out 134 × 22 like this: Partial product 1 (134 × 2) = 268. Partial product 2 (134 × 2, with placeholder) = 2 680. Total = 2 948. Check the working and give the correct total.', answer: '2 948', checkMode: 'auto', correctAnswer: '2948', correctAnswers: ['2948', '2 948'], explanation: 'Check 134 × 2 (ones): 2×4=8; 2×3=6; 2×1=2. Partial product 1 is 268 (correct). Check 134 × 20 (tens, placeholder): 134 × 2 = 268, so with the placeholder that is 2 680 (correct). Adding: 268 + 2 680 = 2 948 — the learner\'s total was actually correct.' },
        { difficulty: 'Medium', question: 'Use the distributive property to calculate 5 × 218. Show how you split 218.', answer: '1 090', checkMode: 'auto', correctAnswer: '1090', correctAnswers: ['1090', '1 090'], explanation: 'Split 218 = 200 + 18 (or 200 + 10 + 8). 5 × 200 = 1 000. 5 × 18 = 90. 1 000 + 90 = 1 090.' },
        { difficulty: 'Medium', question: 'Complete this distributive breakdown: 7 × 143 = (7 × 100) + (7 × ___) = 700 + ___ = ___', answer: '43; 301; 1 001', checkMode: 'auto', correctAnswer: '433011001', correctAnswers: ['433011001', '43, 301, 1001', '43, 301, 1 001'], explanation: '143 = 100 + 43. 7 × 100 = 700. 7 × 43 = 301. 700 + 301 = 1 001.' },
        { difficulty: 'Medium', question: 'To calculate 27 × 9, is it easier to think of it as 9 × (20 + 7) or as (30 − 3) × 9? Explain which approach you find quicker and why.', answer: 'Using 9 × (20 + 7) is the standard distributive approach: 9 × 20 = 180 and 9 × 7 = 63, giving 180 + 63 = 243. Using (30 − 3) × 9 is a clever alternative: 9 × 30 = 270 and 9 × 3 = 27, giving 270 − 27 = 243. Both give the same correct answer of 243. The "round up and subtract" method can be quicker once you are confident with it, because multiplying by 30 is often easier than multiplying by 20 and 7 separately — but for most learners still building fluency, splitting into (20 + 7) is more reliable since it avoids the extra step of subtracting.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A theatre has 17 rows with 62 seats in each row. Estimate the total number of seats by rounding both numbers to the nearest 10, then calculate the exact number of seats.', answer: 'Estimate: 20 × 60 = 1 200. Exact: 1 054 seats.', checkMode: 'auto', correctAnswer: '1054', correctAnswers: ['1054', '1 054', '12001054'], explanation: 'Round 17 to 20 and 62 to 60: estimate = 20 × 60 = 1 200. Exact: 17 × 62 = (17 × 60) + (17 × 2) = 1 020 + 34 = 1 054. This is fairly close to the estimate of 1 200.' },
        { difficulty: 'Hard', question: 'A trucking company transports goods in loads of 215 kg. It makes 32 trips. Round 215 to the nearest 10 to estimate the total mass, then find the exact total. Is the exact answer reasonable compared to your estimate?', answer: 'Estimate: 220 × 32 = 7 040 kg. Exact: 6 880 kg. Yes, it is reasonable.', checkMode: 'auto', correctAnswer: '6880', correctAnswers: ['6880', '6 880'], explanation: 'Round 215 to the nearest 10: 220. Estimate: 220 × 32 = 7 040. Exact: 215 × 32 = (215 × 30) + (215 × 2) = 6 450 + 430 = 6 880. 6 880 is close to the estimate of 7 040, so the answer is reasonable.' },
        { difficulty: 'Hard', question: 'A printing company prints 36 posters every hour. How many posters does it print in 14 hours? Give your exact answer using the column method.', answer: '504 posters', checkMode: 'auto', correctAnswer: '504', correctAnswers: ['504'], explanation: 'Step 1 — 36 × 4 = 144. Step 2 — 36 × 10 = 360. Add: 144 + 360 = 504. The company prints 504 posters in 14 hours.' },
        { difficulty: 'Hard', question: 'A sports club buys 24 tracksuits at R156 each. After the purchase, the club also spends R72 on a set of medals. What is the total amount spent?', answer: 'R3 816', checkMode: 'auto', correctAnswer: '3816', correctAnswers: ['3816', '3 816', 'r3816'], explanation: 'Cost of tracksuits: 24 × 156 = 3 744. Total spent: 3 744 + 72 = R3 816.' },
        { difficulty: 'Hard', question: 'Farm A produces 36 crates of eggs a week at 14 eggs per crate. Farm B produces 28 crates of eggs a week at 19 eggs per crate. Which farm produces more eggs per week, and what is the difference?', answer: 'Farm A produces 504 eggs, Farm B produces 532 eggs. Farm B produces more, by 28 eggs.', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', 'farmb', 'farm b'], explanation: 'Farm A: 36 × 14 = 504. Farm B: 28 × 19 = 532. Difference: 532 − 504 = 28. Farm B produces 28 more eggs per week than Farm A.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Superb! You have full command of times tables, column multiplication, the distributive property and estimation.' },
        { minScore: 15, message: 'Well done! Solid understanding overall — review any tricky questions and try again.' },
        { minScore: 10, message: 'Good effort! Go back over the worked examples and give this set another go.' },
        { minScore: 0, message: 'Keep practising! Take it step by step through the worked examples and try again.' },
      ],
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
