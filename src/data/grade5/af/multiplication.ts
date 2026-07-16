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
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">Dh</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>` +
  `<th style="padding:7px 14px;font-weight:700;color:#6b7280;border-bottom:2px solid #e5e7eb">E</th>` +
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
const keywordChips = ['maal', 'groepe van', 'elk', 'per', 'elke', 'vermenigvuldig', 'produk', 'altesaam', 'totaal']
  .map(kw => `<span style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:6px;padding:4px 12px;font-size:13px;font-weight:700;color:#ea580c;">${kw}</span>`)
  .join(' ')

export const topicData: TopicData = {
  title: 'Vermenigvuldiging',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VERMENIGVULDIGINGSTABELLE TOT 12 × 12
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-tables',
      title: 'Vermenigvuldigingstabelle tot 12 × 12',
      icon: '×',
      explanation: `<p style="margin-bottom:16px;">In Graad 4 het jy jou tafels tot <strong>10 × 10</strong> geleer. In Graad 5 brei ons dit uit na <strong>12 × 12</strong>. Jy moet die <strong>11-tafel</strong> en die <strong>12-tafel</strong> uit jou kop ken sodat jy hulle vinnig in enige berekening kan gebruik.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vermenigvuldiger')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermenigvuldigende')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('produk')}</span>
</div>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:20px;">
  <div style="flex:1;min-width:190px;background:white;border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden;">
    <div style="background:#1e40af;padding:8px 14px;font-weight:700;color:white;font-size:14px;text-align:center;">11-Tafel</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tbody>${table11}</tbody>
    </table>
  </div>
  <div style="flex:1;min-width:190px;background:white;border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden;">
    <div style="background:#15803d;padding:8px 14px;font-weight:700;color:white;font-size:14px;text-align:center;">12-Tafel</div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tbody>${table12}</tbody>
    </table>
  </div>
</div>

<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;margin-bottom:14px;">
  <p style="font-weight:700;color:#92400e;margin-bottom:6px;">Patroonwenk vir die 11-tafel</p>
  <p style="margin:0;color:#78350f;">Vir <strong>11 × 1 tot 11 × 9</strong>, herhaal die antwoord eenvoudig die syfer waarmee jy vermenigvuldig — byvoorbeeld ${re('11')} × ${bl('3')} = ${gr('33')} en ${re('11')} × ${bl('7')} = ${gr('77')}. Vir <strong>11 × 10, 11 × 11 en 11 × 12</strong>, moet jy die antwoorde onthou: ${gr('110')}, ${gr('121')} en ${gr('132')}.</p>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">
  <p style="font-weight:700;color:#14532d;margin-bottom:6px;">Opbreekmetode vir die 12-tafel</p>
  <p style="margin:0;color:#15803d;">Breek ${re('12')} op in <strong>10 + 2</strong>. Vermenigvuldig elke deel afsonderlik en tel dan die resultate bymekaar. Byvoorbeeld: ${re('12')} × ${bl('9')} = (10 × ${bl('9')}) + (2 × ${bl('9')}) = 90 + 18 = ${gr('108')}.</p>
</div>`,

      workedExamples: [
        {
          question: 'Gebruik die 11-tafelpatroon om 11 × 8 uit te werk.',
          answer: '88',
          steps: [
            `Die ${re('11')}-tafel het ʼn nuttige patroon vir enkelsyfergetalle (1 tot 9): die antwoord herhaal eenvoudig die <strong>syfer</strong> waarmee jy vermenigvuldig.`,
            `Ons werk ${re('11')} × ${bl('8')} uit. Omdat 8 ʼn enkelsyfer is (tussen 1 en 9), geld die patroon — die antwoord sal <strong>8 as albei syfers</strong> hê.`,
            `${re('11')} × ${bl('8')} = ${gr('88')}<br>Die tiene-syfer is 8 en die eenhede-syfer is 8.`,
            `<strong>Kontroleer deur in 11e te tel:</strong> 11, 22, 33, 44, 55, 66, 77, <strong>88</strong> — dit is 8 stappe. ✓`,
          ],
        },
        {
          question: 'Gebruik die opbreekmetode om 12 × 9 te bereken.',
          answer: '108',
          steps: [
            `Die <strong>opbreekmetode</strong> breek ${re('12')} op in <strong>10 + 2</strong>. Om met 10 en met 2 te vermenigvuldig is eenvoudig, so dit maak die berekening makliker.`,
            `Vermenigvuldig ${bl('9')} eers met <strong>10</strong>: 10 × ${bl('9')} = <strong>90</strong>`,
            `Vermenigvuldig dan ${bl('9')} met <strong>2</strong>: 2 × ${bl('9')} = <strong>18</strong>`,
            `Tel die twee resultate bymekaar: 90 + 18 = ${gr('108')}`,
            `Dus is ${re('12')} × ${bl('9')} = ${gr('108')}`,
          ],
        },
        {
          question: 'Vind die ontbrekende getal: 12 × ___ = 96',
          answer: '8',
          steps: [
            `Ons ken die produk (${gr('96')}) en een faktor (${re('12')}). Ons moet die <strong>ontbrekende faktor</strong> vind.`,
            `Gebruik die <strong>inverse bewerking</strong>: as ${re('12')} × ___ = ${gr('96')}, dan is ___ = ${gr('96')} ÷ ${re('12')}.`,
            `Werk ${gr('96')} ÷ ${re('12')} uit deur op te tel in die 12-tafel: 12, 24, 36, 48, 60, 72, 84, ${gr('96')} — dit is ${bl('8')} stappe.`,
            `Dus is ${gr('96')} ÷ ${re('12')} = ${bl('8')}, wat beteken ${re('12')} × ${bl('8')} = ${gr('96')}. Die ontbrekende getal is <strong>8</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder: 'ʼn Volledige 12 × 12-vermenigvuldigingsrooster met die 11- en 12-tafels in ʼn ander kleur uitgelig',
      diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="40.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">1</text><text x="53.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">2</text><text x="66.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">3</text><text x="79.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">4</text><text x="92.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">5</text><text x="105.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">6</text><text x="118.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">7</text><text x="131.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">8</text><text x="144.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">9</text><text x="157.5" y="10" font-size="7" text-anchor="middle" fill="#6b7280">10</text><text x="170.5" y="10" font-size="7" text-anchor="middle" fill="#ea580c" font-weight="700">11</text><text x="183.5" y="10" font-size="7" text-anchor="middle" fill="#16a34a" font-weight="700">12</text><text x="30" y="23" font-size="7" text-anchor="end" fill="#6b7280">1</text><text x="30" y="36" font-size="7" text-anchor="end" fill="#6b7280">2</text><text x="30" y="49" font-size="7" text-anchor="end" fill="#6b7280">3</text><text x="30" y="62" font-size="7" text-anchor="end" fill="#6b7280">4</text><text x="30" y="75" font-size="7" text-anchor="end" fill="#6b7280">5</text><text x="30" y="88" font-size="7" text-anchor="end" fill="#6b7280">6</text><text x="30" y="101" font-size="7" text-anchor="end" fill="#6b7280">7</text><text x="30" y="114" font-size="7" text-anchor="end" fill="#6b7280">8</text><text x="30" y="127" font-size="7" text-anchor="end" fill="#6b7280">9</text><text x="30" y="140" font-size="7" text-anchor="end" fill="#6b7280">10</text><text x="30" y="153" font-size="7" text-anchor="end" fill="#ea580c" font-weight="700">11</text><text x="30" y="166" font-size="7" text-anchor="end" fill="#16a34a" font-weight="700">12</text><rect x="34" y="144" width="156" height="13" fill="#fed7aa"/><rect x="34" y="157" width="156" height="13" fill="#bbf7d0"/><rect x="34" y="14" width="156" height="156" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="47" y1="14" x2="47" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="60" y1="14" x2="60" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="73" y1="14" x2="73" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="86" y1="14" x2="86" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="99" y1="14" x2="99" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="112" y1="14" x2="112" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="125" y1="14" x2="125" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="138" y1="14" x2="138" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="151" y1="14" x2="151" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="164" y1="14" x2="164" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="177" y1="14" x2="177" y2="170" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="27" x2="190" y2="27" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="40" x2="190" y2="40" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="53" x2="190" y2="53" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="66" x2="190" y2="66" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="79" x2="190" y2="79" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="92" x2="190" y2="92" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="105" x2="190" y2="105" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="118" x2="190" y2="118" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="131" x2="190" y2="131" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="144" x2="190" y2="144" stroke="#cbd5e1" stroke-width="0.75"/><line x1="34" y1="157" x2="190" y2="157" stroke="#cbd5e1" stroke-width="0.75"/><rect x="34" y="144" width="156" height="26" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="112" y="182" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">11×-ry oranje · 12×-ry groen</text></svg>',
      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat patrone in die 11- en 12-tafels wys en wenke gee om hulle te onthou" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERMENIGVULDIG ʼN 3-SYFERGETAL MET ʼN 2-SYFERGETAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-3-digit-by-2-digit',
      title: 'Vermenigvuldig ʼn 3-Syfergetal met ʼn 2-Syfergetal',
      icon: '✖',
      explanation: `<p style="margin-bottom:16px;">In Graad 5 vermenigvuldig ons groter getalle met die <strong>kolommetode</strong>, uitgebrei na ʼn 2-syfervermenigvuldiger. Ons werk twee afsonderlike <em>gedeeltelike produkte</em> uit — een vir die eenhede-syfer en een vir die tiene-syfer — en tel hulle dan bymekaar om die finale antwoord te kry.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eenhede-syfer van vermenigvuldiger')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tiene-syfer van vermenigvuldiger')}</span>
  <span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skuiwe')}</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gedeeltelike produkte')}</span>
  <span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('finale antwoord')}</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">Die 4-stap kolommetode:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Vermenigvuldig die boonste getal met die ${bl('eenhede-syfer')} van die vermenigvuldiger.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Skryf ʼn <strong>nul-plekhouer</strong> in die eenhede-kolom van die tweede ry — jy vermenigvuldig nou met tiene.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Vermenigvuldig die boonste getal met die ${gr('tiene-syfer')} van die vermenigvuldiger.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Tel die twee ${re('gedeeltelike produkte')} bymekaar om die ${pu('finale antwoord')} te kry.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 347 × 23',
          answer: '7 981',
          steps: [
            `Skryf die berekening in kolomme: 347 bo en × 23 onder, syfers regs belyn. Die eenhede-syfer van 23 is ${bl('3')} en die tiene-syfer is ${gr('2')}.${we4SetupTable}`,

            `<strong>Stap 1 — Vermenigvuldig 347 met die eenhede-syfer ${bl('3')}:</strong><br><br>
${bl('3')} × 7 = 21 → skryf 1 in die eenhede-kolom, skuif ${or('2')} na die tiene-kolom<br>
${bl('3')} × 4 = 12, tel skuif ${or('2')} by = 14 → skryf 4 in die tiene-kolom, skuif ${or('1')} na die honderde-kolom<br>
${bl('3')} × 3 = 9, tel skuif ${or('1')} by = 10 → skryf 0 in die honderde-kolom, skuif ${or('1')} na die duisende-kolom<br><br>
Eerste ${re('gedeeltelike produk')}: ${re('1 041')}`,

            `<strong>Stap 2 — Skryf die nul-plekhouer:</strong> Omdat ons nou met die tiene-syfer vermenigvuldig (wat 20 verteenwoordig, nie 2 nie), skryf ons ʼn ${bl('0')} in die eenhede-kolom van die tweede ry om alles een plek na links te skuif.<br><br>
<strong>Stap 3 — Vermenigvuldig 347 met die tiene-syfer ${gr('2')}:</strong><br><br>
${gr('2')} × 7 = 14 → skryf 4 in die tiene-kolom, skuif ${or('1')} na die honderde-kolom<br>
${gr('2')} × 4 = 8, tel skuif ${or('1')} by = 9 → skryf 9 in die honderde-kolom<br>
${gr('2')} × 3 = 6 → skryf 6 in die duisende-kolom<br><br>
Tweede ${re('gedeeltelike produk')}: ${re('6 940')}`,

            `<strong>Stap 4 — Tel die twee gedeeltelike produkte bymekaar:</strong><br><br>
${re('1 041')} + ${re('6 940')} = ${pu('7 981')}<br><br>
Dus is 347 × 23 = ${pu('7 981')}${we4FullTable}`,
          ],
        },
        {
          question: 'Bereken 256 × 34',
          answer: '8 704',
          steps: [
            `Skryf die berekening in kolomme: 256 bo en × 34 onder. Die eenhede-syfer van 34 is ${bl('4')} en die tiene-syfer is ${gr('3')}.`,

            `<strong>Stap 1 — Vermenigvuldig 256 met die eenhede-syfer ${bl('4')}:</strong><br><br>
${bl('4')} × 6 = 24 → skryf 4 in die eenhede-kolom, skuif ${or('2')} na die tiene-kolom<br>
${bl('4')} × 5 = 20, tel skuif ${or('2')} by = 22 → skryf 2 in die tiene-kolom, skuif ${or('2')} na die honderde-kolom<br>
${bl('4')} × 2 = 8, tel skuif ${or('2')} by = 10 → skryf 0 in die honderde-kolom, skuif ${or('1')} na die duisende-kolom<br><br>
Eerste ${re('gedeeltelike produk')}: ${re('1 024')}`,

            `<strong>Stap 2 — Skryf die nul-plekhouer</strong> in die eenhede-kolom van die tweede ry.<br><br>
<strong>Stap 3 — Vermenigvuldig 256 met die tiene-syfer ${gr('3')}:</strong><br><br>
${gr('3')} × 6 = 18 → skryf 8 in die tiene-kolom, skuif ${or('1')} na die honderde-kolom<br>
${gr('3')} × 5 = 15, tel skuif ${or('1')} by = 16 → skryf 6 in die honderde-kolom, skuif ${or('1')} na die duisende-kolom<br>
${gr('3')} × 2 = 6, tel skuif ${or('1')} by = 7 → skryf 7 in die duisende-kolom<br><br>
Tweede ${re('gedeeltelike produk')}: ${re('7 680')}`,

            `<strong>Stap 4 — Tel die twee gedeeltelike produkte bymekaar:</strong><br><br>
${re('1 024')} + ${re('7 680')} = ${pu('8 704')}<br><br>
Dus is 256 × 34 = ${pu('8 704')}${we5FullTable}`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder: 'Kolomvermenigvuldiging-uitleg wat 347 x 23 toon met twee gedeeltelike produkte apart getoon en dan bymekaar getel met kleurkodering',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="45" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">D</text><text x="75" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">H</text><text x="105" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">T</text><text x="135" y="12" font-weight="700" font-size="10" text-anchor="middle" fill="#6b7280">E</text><text x="75" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">3</text><text x="105" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">4</text><text x="135" y="30" font-weight="700" font-size="16" text-anchor="middle" fill="#374151">7</text><text x="20" y="48" font-weight="700" font-size="16" fill="#374151">×</text><text x="105" y="48" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">2</text><text x="135" y="48" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">3</text><line x1="35" y1="54" x2="150" y2="54" stroke="#0f1f3d" stroke-width="2"/><text x="45" y="70" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">1</text><text x="75" y="70" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">0</text><text x="105" y="70" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">4</text><text x="135" y="70" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">1</text><text x="45" y="88" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">6</text><text x="75" y="88" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">9</text><text x="105" y="88" font-weight="700" font-size="15" text-anchor="middle" fill="#dc2626">4</text><text x="135" y="88" font-weight="700" font-size="15" text-anchor="middle" fill="#2563eb">0</text><line x1="35" y1="94" x2="150" y2="94" stroke="#0f1f3d" stroke-width="2"/><text x="45" y="112" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">7</text><text x="75" y="112" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">9</text><text x="105" y="112" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">8</text><text x="135" y="112" font-weight="700" font-size="17" text-anchor="middle" fill="#7c3aed">1</text><text x="90" y="140" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">347 × 23 = 7 981</text><text x="90" y="158" font-size="10" text-anchor="middle" fill="#6b7280">1 041 (× 3) + 6 940 (× 20) = 7 981</text></svg>',
      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap vir stap wys hoe om ʼn 3-syfergetal met ʼn 2-syfergetal te vermenigvuldig met die kolommetode met twee gedeeltelike produkte" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — DIE DISTRIBUTIEWE EIENSKAP
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'distributive-property',
      title: 'Die Distributiewe Eienskap',
      icon: '⟨⟩',
      explanation: `<p style="margin-bottom:16px;">Die <strong>distributiewe eienskap</strong> laat jou toe om <strong>ʼn getal in dele te breek</strong> om vermenigvuldiging makliker te maak. In plaas daarvan om met ʼn groot getal in een stap te vermenigvuldig, breek jy dit op in vriendeliker dele, vermenigvuldig elke deel afsonderlik, en tel dan die resultate bymekaar.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:8px;">Die reël:</p>
  <p style="font-size:1.05em;text-align:center;margin-bottom:10px;">${re('a')} × (${bl('b')} + ${gr('c')}) = (${re('a')} × ${bl('b')}) + (${re('a')} × ${gr('c')})</p>
  <p style="margin:0;color:#1e3a8a;font-size:0.95em;">Die ${re('getal wat versprei word')} vermenigvuldig <em>elke deel</em> binne die hakies afsonderlik.</p>
</div>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:18px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>
  <span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('getal wat versprei word')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste deel')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tweede deel')}</span>
  <span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('finale antwoord')}</span>
</div>

<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;">
  <p style="font-weight:700;color:#92400e;margin-bottom:6px;">Waarom is dit nuttig?</p>
  <p style="margin:0;color:#78350f;">Soms is dit baie makliker om ʼn getal in <strong>tiene en ene</strong> (of <strong>honderde en tiene</strong>) op te breek voordat jy vermenigvuldig. Byvoorbeeld, om met 48 te vermenigvuldig lyk moeilik — maar om apart met 40 en dan met 8 te vermenigvuldig is eenvoudig. Die distributiewe eienskap maak dit geldig en betroubaar.</p>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 7 × 48 deur die distributiewe eienskap te gebruik.',
          answer: '336',
          steps: [
            `Ons moet ${re('7')} × 48 vermenigvuldig. Die getal 48 is nie in die tafels nie, dus breek ons dit op in vriendeliker dele.`,
            `<strong>Stap 1 — Breek 48 in dele op:</strong><br>48 = ${bl('40')} + ${gr('8')}`,
            `<strong>Stap 2 — Pas die distributiewe eienskap toe:</strong><br>${re('7')} × 48 = (${re('7')} × ${bl('40')}) + (${re('7')} × ${gr('8')})`,
            `<strong>Stap 3 — Vermenigvuldig elke deel:</strong><br>${re('7')} × ${bl('40')} = <strong>280</strong><br>${re('7')} × ${gr('8')} = <strong>56</strong>`,
            `<strong>Stap 4 — Tel die resultate bymekaar:</strong><br>280 + 56 = ${pu('336')}<br><br>Dus is ${re('7')} × 48 = ${pu('336')}`,
          ],
        },
        {
          question: 'Bereken 6 × 125 deur die distributiewe eienskap te gebruik.',
          answer: '750',
          steps: [
            `Ons moet ${re('6')} × 125 vermenigvuldig. Ons kan 125 opbreek in ʼn honderde-deel en ʼn tiene-deel.`,
            `<strong>Stap 1 — Breek 125 in dele op:</strong><br>125 = ${bl('100')} + ${gr('25')}`,
            `<strong>Stap 2 — Pas die distributiewe eienskap toe:</strong><br>${re('6')} × 125 = (${re('6')} × ${bl('100')}) + (${re('6')} × ${gr('25')})`,
            `<strong>Stap 3 — Vermenigvuldig elke deel:</strong><br>${re('6')} × ${bl('100')} = <strong>600</strong><br>${re('6')} × ${gr('25')} = <strong>150</strong> (6 × 25 = 6 × 5 × 5 = 30 × 5 = 150)`,
            `<strong>Stap 4 — Tel die resultate bymekaar:</strong><br>600 + 150 = ${pu('750')}<br><br>Dus is ${re('6')} × 125 = ${pu('750')}`,
          ],
        },
        {
          question: 'Bereken 34 × 12 deur die distributiewe eienskap te gebruik.',
          answer: '408',
          steps: [
            `Ons moet 34 × ${re('12')} vermenigvuldig. Ons breek die ${re('12')} op in tiene en ene.`,
            `<strong>Stap 1 — Breek 12 in dele op:</strong><br>12 = ${bl('10')} + ${gr('2')}`,
            `<strong>Stap 2 — Pas die distributiewe eienskap toe:</strong><br>34 × ${re('12')} = (34 × ${bl('10')}) + (34 × ${gr('2')})`,
            `<strong>Stap 3 — Vermenigvuldig elke deel:</strong><br>34 × ${bl('10')} = <strong>340</strong><br>34 × ${gr('2')} = <strong>68</strong>`,
            `<strong>Stap 4 — Tel die resultate bymekaar:</strong><br>340 + 68 = ${pu('408')}<br><br>Dus is 34 × ${re('12')} = ${pu('408')}`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die distributiewe eienskap te gebruik om getalle op te breek en vermenigvuldiging makliker te maak" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SKAT VOORDAT JY VERMENIGVULDIG
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-before-multiplying',
      title: 'Skat Voordat jy Vermenigvuldig',
      icon: '≈',
      explanation: `<p style="margin-bottom:16px;">Voordat jy vermenigvuldig, maak eers ʼn vinnige <strong>skatting</strong>. ʼn Skatting is ʼn benaderde antwoord met afgeronde getalle. Nadat jy die presiese antwoord gevind het, vergelyk dit met jou skatting — as hulle naby aan mekaar is, is jou antwoord <strong>redelik</strong>.</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:18px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
  <span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>
  <span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afgeronde getalle')}</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('skatting')}</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('presiese antwoord')}</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">Stappe om te skat voordat jy vermenigvuldig:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Rond elke getal af na die naaste 10, 100, of 1 000 om ${or('afgeronde getalle')} te kry.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Vermenigvuldig die afgeronde getalle om jou ${gr('skatting')} te kry.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Bereken die ${bl('presiese antwoord')} met die kolommetode.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Vergelyk: as die ${bl('presiese antwoord')} naby aan die ${gr('skatting')} is, is die antwoord <strong>redelik</strong>.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Skat, bereken dan presies: 47 × 83',
          answer: 'Skatting 4 000, presiese antwoord 3 901',
          steps: [
            `<strong>Stap 1 — Rond die getalle af:</strong><br>
Rond 47 af na die naaste 10: ${or('50')} (eenhede-syfer is 7 — 5 of meer, dus rond op)<br>
Rond 83 af na die naaste 10: ${or('80')} (eenhede-syfer is 3 — minder as 5, dus rond af)`,

            `<strong>Stap 2 — Skatting:</strong><br>
${or('50')} × ${or('80')} = ${gr('4 000')}<br>
(Dink: 5 × 8 = 40, dus 50 × 80 = 4 000)`,

            `<strong>Stap 3 — Presiese antwoord met die kolommetode:</strong>${we9FullTable}
${bl('Presiese antwoord: 3 901')}`,

            `<strong>Stap 4 — Is die antwoord redelik?</strong><br>
${bl('3 901')} is naby aan die skatting van ${gr('4 000')} — die verskil is slegs 99. ✓<br>
Die antwoord is <strong>redelik</strong>.`,
          ],
        },
        {
          question: 'Skat, bereken dan presies: 312 × 28',
          answer: 'Skatting 9 000, presiese antwoord 8 736',
          steps: [
            `<strong>Stap 1 — Rond die getalle af:</strong><br>
Rond 312 af na die naaste 100: ${or('300')} (tiene-syfer is 1 — minder as 5, dus rond af)<br>
Rond 28 af na die naaste 10: ${or('30')} (eenhede-syfer is 8 — 5 of meer, dus rond op)`,

            `<strong>Stap 2 — Skatting:</strong><br>
${or('300')} × ${or('30')} = ${gr('9 000')}<br>
(Dink: 3 × 3 = 9, dus 300 × 30 = 9 000)`,

            `<strong>Stap 3 — Presiese antwoord met die kolommetode:</strong>${we10FullTable}
${bl('Presiese antwoord: 8 736')}`,

            `<strong>Stap 4 — Is die antwoord redelik?</strong><br>
${bl('8 736')} is naby aan die skatting van ${gr('9 000')} — die verskil is slegs 264. ✓<br>
Die antwoord is <strong>redelik</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VERMENIGVULDIGING-WOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-word-problems',
      title: 'Vermenigvuldiging-Woordprobleme',
      icon: '✎',
      explanation: `<p style="margin-bottom:16px;">ʼn Woordprobleem beskryf ʼn werklike-lewe situasie. Voordat jy bereken, lees noukeurig en vind die <strong>sleutelwoorde</strong> wat vir jou sê watter bewerking om te gebruik. Hierdie sleutelwoorde sê vir jou dat vermenigvuldiging nodig is:</p>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">${keywordChips}</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
  <p style="font-weight:700;color:#1e3a8a;margin-bottom:12px;">Stappe om ʼn vermenigvuldiging-woordprobleem op te los:</p>
  <div style="display:flex;flex-direction:column;gap:9px;">
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">1</span>
      <span>Lees die probleem noukeurig en vind die ${or('sleutelwoorde')}.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">2</span>
      <span>Skryf ʼn getalsin met die getalle uit die probleem.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">3</span>
      <span>Bereken met die kolommetode.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;">
      <span style="background:#1e40af;color:white;font-weight:700;font-size:12px;padding:2px 8px;border-radius:4px;flex-shrink:0;margin-top:2px;">4</span>
      <span>Skryf die antwoord in ʼn volledige sin, met die eenheid ingesluit.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'ʼn Skool het 24 klaskamers. Elke klaskamer het 38 lessenaars. Hoeveel lessenaars is daar altesaam?',
          answer: '912 lessenaars',
          steps: [
            `Sleutelwoorde: "${or('elke')}" en "${or('altesaam')}" → dit is ʼn vermenigvuldigingsprobleem.<br><br>
Daar is ${re('24')} klaskamers met ${re('38')} lessenaars in ${or('elke')} een. Ons het die ${or('altesaam')} nodig.`,

            `<strong>Stap 2 — Skryf die getalsin:</strong><br>
${re('24')} × ${re('38')} = ?`,

            `<strong>Stap 3 — Kolommetode:</strong>${we11FullTable}`,

            `<strong>Stap 4 — Antwoord:</strong><br>
24 × 38 = <strong>912</strong><br><br>
Daar is <strong>912 lessenaars</strong> altesaam in die skool.`,
          ],
        },
        {
          question: 'ʼn Fabriek vervaardig 347 items per uur. Hoeveel items vervaardig dit in 12 uur?',
          answer: '4 164 items',
          steps: [
            `Sleutelwoord: "${or('per')}" → dit is ʼn vermenigvuldigingsprobleem.<br><br>
Die fabriek vervaardig ${re('347')} items ${or('per')} uur vir ${re('12')} uur.`,

            `<strong>Stap 2 — Skryf die getalsin:</strong><br>
${re('347')} × ${re('12')} = ?`,

            `<strong>Stap 3 — Kolommetode met twee gedeeltelike produkte:</strong>${we12FullTable}`,

            `<strong>Stap 4 — Antwoord:</strong><br>
347 × 12 = <strong>4 164</strong><br><br>
Die fabriek vervaardig <strong>4 164 items</strong> in 12 uur.`,
          ],
        },
        {
          question: 'ʼn Boks bevat 144 sjokolade. ʼn Winkel bestel 25 bokse. Hoeveel sjokolade is daar altesaam? Skat eers, bereken dan presies.',
          answer: '3 600 sjokolade',
          steps: [
            `Sleutelwoord: "${or('altesaam')}" → dit is ʼn vermenigvuldigingsprobleem. Die probleem vra ons ook om eers te skat.<br><br>
Daar is ${re('144')} sjokolade ${or('per')} boks en ${re('25')} bokse.`,

            `<strong>Stap 1 — Skatting:</strong><br>
Rond 144 af na die naaste 10: ${or('140')}<br>
${or('140')} × ${re('25')} = ${gr('3 500')}<br>
(Dink: 140 × 20 = 2 800 en 140 × 5 = 700, dus 140 × 25 = 3 500)`,

            `<strong>Stap 2 — Presiese berekening:</strong>${we13FullTable}`,

            `<strong>Stap 3 — Is die antwoord redelik?</strong><br>
Presiese antwoord: <strong>3 600</strong>. Skatting was ${gr('3 500')}. Dit is naby aan mekaar. ✓<br><br>
Daar is <strong>3 600 sjokolade</strong> altesaam.`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om te skat voordat jy vermenigvuldig en hoe om vermenigvuldiging-woordprobleme op te los deur sleutelwoorde te identifiseer" />',
    },
  ],

  // ─── OEFENSTELLE (3 × 20 vrae) ────────────────────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 tafelvlotheid (11 en 12) | 4-6 redenasie en foutopsporing |
    // 7-8 kolomvermenigvuldiging-opwarming (1-syfer) | 9-12 kolomvermenigvuldiging (2-syfer, 2 gedeeltelike produkte) |
    // 13-15 distributiewe eienskap | 16-19 skatting/redelikheid/woordprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Bereken: 11 × 5', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55'], explanation: 'Vir 11 × 1 tot 11 × 9, herhaal die antwoord die syfer waarmee jy vermenigvuldig. 11 × 5 = 55.' },
        { difficulty: 'Easy', question: 'Bereken: 12 × 4', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48'], explanation: 'Gebruik die opbreekmetode: 12 = 10 + 2. 10 × 4 = 40 en 2 × 4 = 8. 40 + 8 = 48.' },
        { difficulty: 'Easy', question: 'Wat is 12 groepe van 6?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: 'Opbreekmetode: 12 = 10 + 2. 10 × 6 = 60 en 2 × 6 = 12. 60 + 12 = 72.' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende faktor: 11 × ___ = 99', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Gebruik die inverse bewerking: 99 ÷ 11. Tel op in die 11-tafel (11, 22, 33 … 99) — dit is 9 stappe, dus is die ontbrekende faktor 9.' },
        { difficulty: 'Easy-Medium', question: 'Verduidelik waarom 11 × 3 = 33 ʼn kortpad gebruik, maar 11 × 11 = 121 nie dieselfde kortpad kan gebruik nie.', answer: 'Vir 11 × 1 tot 11 × 9 herhaal die antwoord eenvoudig die enkelsyfer waarmee jy vermenigvuldig (so 11 × 3 = 33). Maar 11 × 10, 11 × 11 en 11 × 12 behels ʼn tweesyfergetal, dus breek die syferherhalingspatroon af — daar is nie ʼn enkelsyfer om te herhaal nie, en jy moet die werklike antwoord (121) bereken of onthou.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Leerder sê: "11 × 12 = 1112, want jy skryf net die 11 langs die 12." Is dit korrek? Gee die korrekte antwoord en verduidelik die fout.', answer: '132', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132'], explanation: 'Die syferherhalingspatroon werk slegs vir 11 × 1 tot 11 × 9. Dit beteken nie "voeg die syfers saam" nie. Die korrekte antwoord is 11 × 12 = 132, gevind deur (11 × 10) + (11 × 2) = 110 + 22 = 132 te bereken.' },
        { difficulty: 'Medium', question: 'Watter is groter: 12 × 9 of 11 × 10? Wys die waarde van elkeen.', answer: '12 × 9 = 108, wat kleiner is as 11 × 10 = 110, dus is 11 × 10 groter.', checkMode: 'auto', correctAnswer: '11x10', correctAnswers: ['11x10', '11 x 10', '11×10', 'die tweede een', '11 x 10 is groter'], explanation: '12 × 9 = 108 (opbreekmetode: 10 × 9 = 90, 2 × 9 = 18, 90 + 18 = 108). 11 × 10 = 110. Aangesien 110 > 108, is 11 × 10 groter.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode: 342 × 3', answer: '1 026', checkMode: 'auto', correctAnswer: '1026', correctAnswers: ['1026', '1 026'], explanation: '3 × 2 = 6. 3 × 4 = 12 → skryf 2, skuif 1. 3 × 3 = 9 + 1 = 10 → skryf 0, skuif 1 na die duisende. 342 × 3 = 1 026.' },
        { difficulty: 'Medium', question: 'ʼn Krat bevat 213 appels. Hoeveel appels is daar in 4 kratte? Gebruik die kolommetode.', answer: '852', checkMode: 'auto', correctAnswer: '852', correctAnswers: ['852'], explanation: '4 × 3 = 12 → skryf 2, skuif 1. 4 × 1 = 4 + 1 = 5. 4 × 2 = 8. 213 × 4 = 852 appels.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 245 × 18', answer: '4 410', checkMode: 'auto', correctAnswer: '4410', correctAnswers: ['4410', '4 410'], explanation: 'Stap 1 — 245 × 8 (eenhede): 8×5=40 skryf 0 skuif 4; 8×4=32+4=36 skryf 6 skuif 3; 8×2=16+3=19. Gedeeltelike produk 1: 1 960.\nStap 2 — 245 × 1 (tiene, 0-plekhouer): 1×5=5; 1×4=4; 1×2=2. Gedeeltelike produk 2: 2 450.\nTel bymekaar: 1 960 + 2 450 = 4 410.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 412 × 26', answer: '10 712', checkMode: 'auto', correctAnswer: '10712', correctAnswers: ['10712', '10 712'], explanation: 'Stap 1 — 412 × 6 (eenhede): 6×2=12 skryf 2 skuif 1; 6×1=6+1=7; 6×4=24. Gedeeltelike produk 1: 2 472.\nStap 2 — 412 × 2 (tiene, 0-plekhouer): 2×2=4; 2×1=2; 2×4=8. Gedeeltelike produk 2: 8 240.\nTel bymekaar: 2 472 + 8 240 = 10 712.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het 356 × 27 so uitgewerk: Gedeeltelike produk 1 (356 × 7) = 2 492. Gedeeltelike produk 2 (356 × 2, met plekhouer) = 7 120. Totaal = 9 612. Kontroleer die werk en gee die korrekte totaal.', answer: '9 612', checkMode: 'auto', correctAnswer: '9612', correctAnswers: ['9612', '9 612'], explanation: 'Kontroleer 356 × 7: 7×6=42 skryf 2 skuif 4; 7×5=35+4=39 skryf 9 skuif 3; 7×3=21+3=24. Gedeeltelike produk 1 is 2 492 (korrek). Kontroleer 356 × 20: 356 × 2 = 712, dus met die plekhouer is dit 7 120 (ook korrek). Tel bymekaar: 2 492 + 7 120 = 9 612 — die gegewe totaal was reeds korrek.' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 7 × 64 te bereken. Wys hoe jy 64 opgebreek het.', answer: '448', checkMode: 'auto', correctAnswer: '448', correctAnswers: ['448'], explanation: 'Breek 64 = 60 + 4 op. 7 × 60 = 420. 7 × 4 = 28. 420 + 28 = 448.' },
        { difficulty: 'Medium', question: 'Voltooi hierdie distributiewe opbreking: 6 × 137 = (6 × 100) + (6 × ___) = 600 + ___ = ___', answer: '37; 222; 822', checkMode: 'auto', correctAnswer: '37222822', correctAnswers: ['37222822', '37, 222, 822'], explanation: '137 = 100 + 37. 6 × 100 = 600. 6 × 37 = 222. 600 + 222 = 822.' },
        { difficulty: 'Medium', question: 'Om 9 × 87 te bereken, sal jy liewer 87 opbreek in (80 + 7) of (70 + 17)? Verduidelik watter opbreking makliker is om mee te werk en waarom.', answer: 'Om 87 in 80 + 7 op te breek is makliker, want albei dele is eenvoudig om in jou kop te vermenigvuldig: 9 × 80 = 720 en 9 × 7 = 63, wat 720 + 63 = 783 gee. Om in 70 + 17 op te breek is moeiliker, want 9 × 17 is nie ʼn onmiddellike tafelfeit nie — jy sou nog ʼn stap nodig hê om dit uit te werk, wat die berekening langer en foutgeneiger maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Stadion het 18 afdelings met 24 sitplekke in elke afdeling. Skat die totale aantal sitplekke deur albei getalle af te rond na die naaste 10, bereken dan die presiese aantal sitplekke.', answer: 'Skatting: 20 × 20 = 400. Presies: 432 sitplekke.', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', '400432'], explanation: 'Rond 18 af na 20 en 24 af na 20: skatting = 20 × 20 = 400. Presies: 18 × 24 = (18 × 20) + (18 × 4) = 360 + 72 = 432. Dit is naby aan die skatting van 400, dus redelik.' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheidsorganisasie pak 16 bokse met 125 blikkies kos in elke boks. Rond 125 af na die naaste 10 om die totale aantal blikkies te skat, vind dan die presiese totaal. Is die presiese antwoord redelik in vergelyking met jou skatting?', answer: 'Skatting: 16 × 130 = 2 080 (of soortgelyk). Presies: 2 000 blikkies. Ja, dit is redelik.', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'Rond 125 af na die naaste 10: 130. Skatting: 16 × 130 = 2 080. Presies: 16 × 125 = (16 × 100) + (16 × 25) = 1 600 + 400 = 2 000. 2 000 is naby aan die skatting van 2 080, dus is die antwoord redelik.' },
        { difficulty: 'Hard', question: 'ʼn Bakkery verkoop 34 brode elke dag. Hoeveel brode verkoop dit in 26 dae? Gee jou presiese antwoord met die kolommetode.', answer: '884 brode', checkMode: 'auto', correctAnswer: '884', correctAnswers: ['884'], explanation: 'Stap 1 — 34 × 6 = 204. Stap 2 — 34 × 20 = 680. Tel bymekaar: 204 + 680 = 884. Die bakkery verkoop 884 brode in 26 dae.' },
        { difficulty: 'Hard', question: 'ʼn Skool koop 24 pakkies potlode teen R18 per pakkie. Na die aankoop spandeer die skool ook R50 op ʼn boks merkers. Wat is die totale bedrag spandeer?', answer: 'R482', checkMode: 'auto', correctAnswer: '482', correctAnswers: ['482', 'r482'], explanation: 'Koste van potlode: 24 × 18 = 432. Totaal spandeer: 432 + 50 = R482.' },
        { difficulty: 'Hard', question: 'Span A behaal 15 punte in elk van 24 wedstryde. Span A ontvang ook ʼn 45-punt-bonus vir die wen van die liga. Werk eers Span A se totaal uit wedstryde (15 × 24) uit, tel dan die bonus by, en trek dan 45 af om ʼn vergelykingswaarde te vind. Wat is Span A se finale totaal na die bonus, en wat is die vergelykingswaarde na aftrekking van 45?', answer: 'Span A se totaal na die bonus: 405. Vergelykingswaarde: 360.', checkMode: 'auto', correctAnswer: '405360', correctAnswers: ['405360', '405, 360'], explanation: '15 × 24 = 360. Tel die 45-punt-bonus by: 360 + 45 = 405. Vergelykingswaarde: 405 − 45 = 360.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Volpunte — jy het tafels, kolomvermenigvuldiging, die distributiewe eienskap en skatting bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van vermenigvuldiging. Gaan enige vrae wat jy verkeerd gehad het weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan oefen! Werk noukeurig deur elke stap en probeer weer — jy sal dit kry.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Bereken: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: 'Vir 11 × 1 tot 11 × 9, herhaal die antwoord die syfer waarmee jy vermenigvuldig. 11 × 6 = 66.' },
        { difficulty: 'Easy', question: 'Bereken: 12 × 7', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Gebruik die opbreekmetode: 12 = 10 + 2. 10 × 7 = 70 en 2 × 7 = 14. 70 + 14 = 84.' },
        { difficulty: 'Easy', question: 'ʼn Minibus het 12 rye met 3 sitplekke in elke ry. Hoeveel sitplekke altesaam?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Opbreekmetode: 12 = 10 + 2. 10 × 3 = 30 en 2 × 3 = 6. 30 + 6 = 36 sitplekke.' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende faktor: 12 × ___ = 132', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Gebruik die inverse bewerking: 132 ÷ 12. Tel op in die 12-tafel (12, 24, 36 … 132) — dit is 11 stappe, dus is die ontbrekende faktor 11.' },
        { difficulty: 'Easy-Medium', question: 'Zinhle sê die 11-tafelpatroon (die herhaling van ʼn syfer) werk heeltemal tot by 11 × 12. Verduidelik waar haar denke verkeerd is.', answer: 'Die syferherhalingspatroon geld slegs vir 11 × 1 tot 11 × 9, waar die produk ʼn tweesyfergetal is wat uit dieselfde syfer twee keer bestaan (soos 11 × 4 = 44). Sodra jy by 11 × 10, 11 × 11 en 11 × 12 kom, is die produkte (110, 121, 132) driesyfergetalle of volg nie ʼn eenvoudige herhaalde-syfer-vorm nie, dus breek die patroon af en moet Zinhle hierdie direk bereken eerder as om ʼn herhaalde syfer te raai.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Leerder beweer 11 × 10 = 1010, en sê "jy sit net ʼn nul agter die 11." Is dit korrek? Gee die korrekte antwoord en verduidelik die fout.', answer: '110', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110'], explanation: 'Om ʼn nul agter 11 te sit gee 1110, en die leerder se werk stem ook nie ooreen met werklike vermenigvuldiging nie. Om met 10 te vermenigvuldig, skuif jy elke syfer eenvoudig een plek na links: 11 × 10 = 110, nie 1010 nie.' },
        { difficulty: 'Medium', question: 'Watter is kleiner: 11 × 12 of 12 × 11? Verduidelik jou antwoord.', answer: 'Hulle is gelyk — albei is gelyk aan 132.', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'geeneen', 'hulle is gelyk', 'dieselfde'], explanation: '11 × 12 = 132 en 12 × 11 = 132. Vermenigvuldiging is kommutatief — die volgorde van die faktore verander nie die produk nie — dus is geeneen kleiner nie; hulle is gelyk.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode: 156 × 5', answer: '780', checkMode: 'auto', correctAnswer: '780', correctAnswers: ['780'], explanation: '5 × 6 = 30 → skryf 0, skuif 3. 5 × 5 = 25 + 3 = 28 → skryf 8, skuif 2. 5 × 1 = 5 + 2 = 7. 156 × 5 = 780.' },
        { difficulty: 'Medium', question: 'ʼn Rak bevat 216 boeke. ʼn Biblioteek het 3 identiese rakke. Hoeveel boeke kan dit altesaam bevat? Gebruik die kolommetode.', answer: '648', checkMode: 'auto', correctAnswer: '648', correctAnswers: ['648'], explanation: '3 × 6 = 18 → skryf 8, skuif 1. 3 × 1 = 3 + 1 = 4. 3 × 2 = 6. 216 × 3 = 648 boeke.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 129 × 34', answer: '4 386', checkMode: 'auto', correctAnswer: '4386', correctAnswers: ['4386', '4 386'], explanation: 'Stap 1 — 129 × 4 (eenhede): 4×9=36 skryf 6 skuif 3; 4×2=8+3=11 skryf 1 skuif 1; 4×1=4+1=5. Gedeeltelike produk 1: 516.\nStap 2 — 129 × 3 (tiene, 0-plekhouer): 3×9=27 skryf 7 skuif 2; 3×2=6+2=8; 3×1=3. Gedeeltelike produk 2: 3 870.\nTel bymekaar: 516 + 3 870 = 4 386.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 218 × 45', answer: '9 810', checkMode: 'auto', correctAnswer: '9810', correctAnswers: ['9810', '9 810'], explanation: 'Stap 1 — 218 × 5 (eenhede): 5×8=40 skryf 0 skuif 4; 5×1=5+4=9; 5×2=10 skryf 0 skuif 1 → duisende 1. Gedeeltelike produk 1: 1 090.\nStap 2 — 218 × 4 (tiene, 0-plekhouer): 4×8=32 skryf 2 skuif 3; 4×1=4+3=7; 4×2=8. Gedeeltelike produk 2: 8 720.\nTel bymekaar: 1 090 + 8 720 = 9 810.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het 127 × 36 so uitgewerk: Gedeeltelike produk 1 (127 × 6) = 762. Gedeeltelike produk 2 (127 × 3, met plekhouer) = 3 180. Totaal = 3 942. Kontroleer albei gedeeltelike produkte en gee die korrekte totaal.', answer: '4 572', checkMode: 'auto', correctAnswer: '4572', correctAnswers: ['4572', '4 572'], explanation: 'Kontroleer 127 × 6: 6×7=42 skryf 2 skuif 4; 6×2=12+4=16 skryf 6 skuif 1; 6×1=6+1=7. Gedeeltelike produk 1 is 762 (korrek). Kontroleer 127 × 30: 127 × 3 = 381, dus met die plekhouer is dit 3 810, nie 3 180 nie — die leerder het hier ʼn fout gemaak. Korrekte totaal: 762 + 3 810 = 4 572.' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 8 × 246 te bereken. Wys hoe jy 246 opgebreek het.', answer: '1 968', checkMode: 'auto', correctAnswer: '1968', correctAnswers: ['1968', '1 968'], explanation: 'Breek 246 = 200 + 46 op (of 200 + 40 + 6). 8 × 200 = 1 600. 8 × 46 = 368. 1 600 + 368 = 1 968.' },
        { difficulty: 'Medium', question: 'Voltooi hierdie distributiewe opbreking: 9 × 53 = (9 × 50) + (9 × ___) = 450 + ___ = ___', answer: '3; 27; 477', checkMode: 'auto', correctAnswer: '327477', correctAnswers: ['327477', '3, 27, 477'], explanation: '53 = 50 + 3. 9 × 50 = 450. 9 × 3 = 27. 450 + 27 = 477.' },
        { difficulty: 'Medium', question: 'Om 6 × 428 te bereken, sal dit makliker wees om 428 in (400 + 28) op te breek as in (420 + 8)? Verduidelik jou keuse.', answer: 'Om in 400 + 28 op te breek is oor die algemeen makliker, want om met ʼn ronde honderd (400) te vermenigvuldig is ʼn eenvoudige onmiddellike feit, en 6 × 28 kan met nog een bekende stap uitgewerk word (6 × 28 = 168). Om in 420 + 8 op te breek werk ook, maar 6 × 420 is ʼn minder onmiddellik voor-die-hand-liggende feit as 6 × 400, dus vat dit ʼn ekstra oomblik om te bereken. Albei gee dieselfde korrekte antwoord, maar 400 + 28 gebruik vriendeliker "ronde" getalle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boer plant 23 rye bome met 48 bome in elke ry. Skat die totale aantal bome deur albei getalle af te rond na die naaste 10, bereken dan die presiese aantal bome.', answer: 'Skatting: 20 × 50 = 1 000. Presies: 1 104 bome.', checkMode: 'auto', correctAnswer: '1104', correctAnswers: ['1104', '1 104', '10001104'], explanation: 'Rond 23 af na 20 en 48 af na 50: skatting = 20 × 50 = 1 000. Presies: 23 × 48 = (23 × 40) + (23 × 8) = 920 + 184 = 1 104. Dit is redelik naby aan die skatting van 1 000.' },
        { difficulty: 'Hard', question: 'ʼn Pakhuis stoor bokse in stapels van 212 kg elk. Daar is 45 stapels. Rond 212 af na die naaste 100 om die totale massa te skat, vind dan die presiese totaal. Is die presiese antwoord redelik in vergelyking met jou skatting?', answer: 'Skatting: 200 × 45 = 9 000 kg. Presies: 9 540 kg. Ja, dit is redelik.', checkMode: 'auto', correctAnswer: '9540', correctAnswers: ['9540', '9 540'], explanation: 'Rond 212 af na die naaste 100: 200. Skatting: 200 × 45 = 9 000. Presies: 45 × 212 = (45 × 200) + (45 × 12) = 9 000 + 540 = 9 540. 9 540 is naby aan die skatting van 9 000, dus is die antwoord redelik.' },
        { difficulty: 'Hard', question: 'ʼn Koeriermaatskappy lewer 62 pakkies per dag af. Hoeveel pakkies lewer dit in 27 dae af? Gee jou presiese antwoord met die kolommetode.', answer: '1 674 pakkies', checkMode: 'auto', correctAnswer: '1674', correctAnswers: ['1674', '1 674'], explanation: 'Stap 1 — 62 × 7 = 434. Stap 2 — 62 × 20 = 1 240. Tel bymekaar: 434 + 1 240 = 1 674. Die maatskappy lewer 1 674 pakkies in 27 dae af.' },
        { difficulty: 'Hard', question: 'ʼn Winkel koop 18 kratte sap teen R134 per krat. Na die aankoop kry die winkel ʼn R200-afslagbewys wat op die totaal gebruik word. Wat is die bedrag wat werklik betaal word?', answer: 'R2 212', checkMode: 'auto', correctAnswer: '2212', correctAnswers: ['2212', '2 212', 'r2212'], explanation: 'Koste van kratte: 18 × 134 = 2 412. Bedrag betaal na die bewys: 2 412 − 200 = R2 212.' },
        { difficulty: 'Hard', question: 'Klas A maak geld deur 45 rafeltjies teen R19 elk te verkoop. Klas B maak geld deur 42 rafeltjies teen R38 elk te verkoop. Watter klas maak meer geld, en wat is die verskil tussen die twee bedrae?', answer: 'Klas B maak meer geld. Die verskil is R741.', checkMode: 'auto', correctAnswer: '741', correctAnswers: ['741', 'r741', 'klasb', 'klas b'], explanation: 'Klas A: 45 × 19 = 855. Klas B: 42 × 38 = 1 596. Verskil: 1 596 − 855 = 741. Klas B maak R741 meer as Klas A.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met tafels, kolomvermenigvuldiging, die distributiewe eienskap en skatting werk.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan gaan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit as Stel 1 en 2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Bereken: 11 × 4', answer: '44', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44'], explanation: 'Vir 11 × 1 tot 11 × 9, herhaal die antwoord die syfer waarmee jy vermenigvuldig. 11 × 4 = 44.' },
        { difficulty: 'Easy', question: 'Bereken: 12 × 3', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Gebruik die opbreekmetode: 12 = 10 + 2. 10 × 3 = 30 en 2 × 3 = 6. 30 + 6 = 36.' },
        { difficulty: 'Easy', question: 'ʼn Parkeerterrein het 11 rye met 7 motors in elke ry. Hoeveel motors is daar altesaam geparkeer?', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77'], explanation: 'Vir 11 × 1 tot 11 × 9, herhaal die antwoord die syfer. 11 × 7 = 77 motors.' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende faktor: ___ × 12 = 96', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Gebruik die inverse bewerking: 96 ÷ 12. Tel op in die 12-tafel (12, 24, 36 … 96) — dit is 8 stappe, dus is die ontbrekende faktor 8.' },
        { difficulty: 'Easy-Medium', question: 'Verduidelik, met ʼn voorbeeld, waarom die "herhaal die syfer"-kortpad vir die 11-tafel werk vir getalle soos 11 × 6, maar nie gebruik kan word om 11 × 11 uit te werk nie.', answer: '11 × 6 = 66 want 6 is ʼn enkelsyfer — as jy 11 met enige syfer van 1 tot 9 vermenigvuldig, versprei daardie syfer in die tiene- en eenhede-plekke, wat ʼn herhaalde paar gee. Maar 11 is nie ʼn enkelsyfer nie, dit is ʼn tweesyfergetal, dus is daar nie ʼn enkelsyfer om te "herhaal" nie — jy sou werklik (11 × 10) + (11 × 1) = 110 + 11 = 121 moes bereken, wat nie die eenvoudige herhaalde-syfer-vorm volg nie.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Leerder sê 12 × 11 = 121, deur die "syferherhaling"-idee van die 11-tafel eerder op 12 toe te pas. Is dit korrek? Gee die korrekte antwoord en verduidelik die fout.', answer: '132', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132'], explanation: 'Die syferherhalingskortpad is spesifiek vir vermenigvuldiging met 11 met ʼn enkelsyfer — dit geld glad nie hier nie, aangesien 12 × 11 tweesyfergetalle aan albei kante behels. Die korrekte antwoord is 12 × 11 = 132, gevind met die opbreekmetode: (10 × 11) + (2 × 11) = 110 + 22 = 132.' },
        { difficulty: 'Medium', question: 'Vergelyk 12 × 6 en 11 × 7. Watter produk is groter, en met hoeveel?', answer: '11 × 7 = 77 is groter as 12 × 6 = 72, met 5.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '11x7', '11 x 7 met 5'], explanation: '12 × 6 = 72 (opbreekmetode: 10×6=60, 2×6=12, 60+12=72). 11 × 7 = 77. Verskil: 77 − 72 = 5. 11 × 7 is 5 groter.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode: 523 × 2', answer: '1 046', checkMode: 'auto', correctAnswer: '1046', correctAnswers: ['1046', '1 046'], explanation: '2 × 3 = 6. 2 × 2 = 4. 2 × 5 = 10 → skryf 0, skuif 1 na die duisende. 523 × 2 = 1 046.' },
        { difficulty: 'Medium', question: 'ʼn Tuin het 6 blombeddings, en elke bedding het 214 blomme. Hoeveel blomme is daar altesaam? Gebruik die kolommetode.', answer: '1 284', checkMode: 'auto', correctAnswer: '1284', correctAnswers: ['1284', '1 284'], explanation: '6 × 4 = 24 → skryf 4, skuif 2. 6 × 1 = 6 + 2 = 8. 6 × 2 = 12 → skryf 2, skuif 1 na die duisende. 214 × 6 = 1 284 blomme.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 319 × 24', answer: '7 656', checkMode: 'auto', correctAnswer: '7656', correctAnswers: ['7656', '7 656'], explanation: 'Stap 1 — 319 × 4 (eenhede): 4×9=36 skryf 6 skuif 3; 4×1=4+3=7; 4×3=12. Gedeeltelike produk 1: 1 276.\nStap 2 — 319 × 2 (tiene, 0-plekhouer): 2×9=18 skryf 8 skuif 1; 2×1=2+1=3; 2×3=6. Gedeeltelike produk 2: 6 380.\nTel bymekaar: 1 276 + 6 380 = 7 656.' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte: 418 × 23', answer: '9 614', checkMode: 'auto', correctAnswer: '9614', correctAnswers: ['9614', '9 614'], explanation: 'Stap 1 — 418 × 3 (eenhede): 3×8=24 skryf 4 skuif 2; 3×1=3+2=5; 3×4=12. Gedeeltelike produk 1: 1 254.\nStap 2 — 418 × 2 (tiene, 0-plekhouer): 2×8=16 skryf 6 skuif 1; 2×1=2+1=3; 2×4=8. Gedeeltelike produk 2: 8 360.\nTel bymekaar: 1 254 + 8 360 = 9 614.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het 134 × 22 so uitgewerk: Gedeeltelike produk 1 (134 × 2) = 268. Gedeeltelike produk 2 (134 × 2, met plekhouer) = 2 680. Totaal = 2 948. Kontroleer die werk en gee die korrekte totaal.', answer: '2 948', checkMode: 'auto', correctAnswer: '2948', correctAnswers: ['2948', '2 948'], explanation: 'Kontroleer 134 × 2 (eenhede): 2×4=8; 2×3=6; 2×1=2. Gedeeltelike produk 1 is 268 (korrek). Kontroleer 134 × 20 (tiene, plekhouer): 134 × 2 = 268, dus met die plekhouer is dit 2 680 (korrek). Tel bymekaar: 268 + 2 680 = 2 948 — die leerder se totaal was reeds korrek.' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 5 × 218 te bereken. Wys hoe jy 218 opgebreek het.', answer: '1 090', checkMode: 'auto', correctAnswer: '1090', correctAnswers: ['1090', '1 090'], explanation: 'Breek 218 = 200 + 18 op (of 200 + 10 + 8). 5 × 200 = 1 000. 5 × 18 = 90. 1 000 + 90 = 1 090.' },
        { difficulty: 'Medium', question: 'Voltooi hierdie distributiewe opbreking: 7 × 143 = (7 × 100) + (7 × ___) = 700 + ___ = ___', answer: '43; 301; 1 001', checkMode: 'auto', correctAnswer: '433011001', correctAnswers: ['433011001', '43, 301, 1001', '43, 301, 1 001'], explanation: '143 = 100 + 43. 7 × 100 = 700. 7 × 43 = 301. 700 + 301 = 1 001.' },
        { difficulty: 'Medium', question: 'Om 27 × 9 te bereken, is dit makliker om dit te sien as 9 × (20 + 7) of as (30 − 3) × 9? Verduidelik watter benadering jy vinniger vind en waarom.', answer: 'Om 9 × (20 + 7) te gebruik is die standaard distributiewe benadering: 9 × 20 = 180 en 9 × 7 = 63, wat 180 + 63 = 243 gee. Om (30 − 3) × 9 te gebruik is ʼn slim alternatief: 9 × 30 = 270 en 9 × 3 = 27, wat 270 − 27 = 243 gee. Albei gee dieselfde korrekte antwoord van 243. Die "rond op en trek af"-metode kan vinniger wees sodra jy gemaklik daarmee is, want om met 30 te vermenigvuldig is dikwels makliker as om met 20 en 7 apart te vermenigvuldig — maar vir die meeste leerders wat nog vlotheid opbou, is dit betroubaarder om in (20 + 7) op te breek, want dit vermy die ekstra stap van aftrekking.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Teater het 17 rye met 62 sitplekke in elke ry. Skat die totale aantal sitplekke deur albei getalle af te rond na die naaste 10, bereken dan die presiese aantal sitplekke.', answer: 'Skatting: 20 × 60 = 1 200. Presies: 1 054 sitplekke.', checkMode: 'auto', correctAnswer: '1054', correctAnswers: ['1054', '1 054', '12001054'], explanation: 'Rond 17 af na 20 en 62 af na 60: skatting = 20 × 60 = 1 200. Presies: 17 × 62 = (17 × 60) + (17 × 2) = 1 020 + 34 = 1 054. Dit is redelik naby aan die skatting van 1 200.' },
        { difficulty: 'Hard', question: 'ʼn Vragmotormaatskappy vervoer goedere in vragte van 215 kg. Dit maak 32 ritte. Rond 215 af na die naaste 10 om die totale massa te skat, vind dan die presiese totaal. Is die presiese antwoord redelik in vergelyking met jou skatting?', answer: 'Skatting: 220 × 32 = 7 040 kg. Presies: 6 880 kg. Ja, dit is redelik.', checkMode: 'auto', correctAnswer: '6880', correctAnswers: ['6880', '6 880'], explanation: 'Rond 215 af na die naaste 10: 220. Skatting: 220 × 32 = 7 040. Presies: 215 × 32 = (215 × 30) + (215 × 2) = 6 450 + 430 = 6 880. 6 880 is naby aan die skatting van 7 040, dus is die antwoord redelik.' },
        { difficulty: 'Hard', question: 'ʼn Drukkerymaatskappy druk 36 plakkate elke uur. Hoeveel plakkate druk dit in 14 uur? Gee jou presiese antwoord met die kolommetode.', answer: '504 plakkate', checkMode: 'auto', correctAnswer: '504', correctAnswers: ['504'], explanation: 'Stap 1 — 36 × 4 = 144. Stap 2 — 36 × 10 = 360. Tel bymekaar: 144 + 360 = 504. Die maatskappy druk 504 plakkate in 14 uur.' },
        { difficulty: 'Hard', question: 'ʼn Sportklub koop 24 rugbybaadjies teen R156 elk. Na die aankoop spandeer die klub ook R72 op ʼn stel medaljes. Wat is die totale bedrag spandeer?', answer: 'R3 816', checkMode: 'auto', correctAnswer: '3816', correctAnswers: ['3816', '3 816', 'r3816'], explanation: 'Koste van rugbybaadjies: 24 × 156 = 3 744. Totaal spandeer: 3 744 + 72 = R3 816.' },
        { difficulty: 'Hard', question: 'Plaas A produseer 36 kratte eiers per week teen 14 eiers per krat. Plaas B produseer 28 kratte eiers per week teen 19 eiers per krat. Watter plaas produseer meer eiers per week, en wat is die verskil?', answer: 'Plaas A produseer 504 eiers, Plaas B produseer 532 eiers. Plaas B produseer meer, met 28 eiers.', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', 'plaasb', 'plaas b'], explanation: 'Plaas A: 36 × 14 = 504. Plaas B: 28 × 19 = 532. Verskil: 532 − 504 = 28. Plaas B produseer 28 meer eiers per week as Plaas A.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Puik! Jy het volle beheer oor tafels, kolomvermenigvuldiging, die distributiewe eienskap en skatting.' },
        { minScore: 15, message: 'Goed gedaan! Solide begrip oor die algemeen — gaan enige lastige vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan oefen! Neem dit stap vir stap deur die uitgewerkte voorbeelde en probeer weer.' },
      ],
    },
  ],

  // ─── ONDERWERPOEFENING ─────────────────────────────────────────────────────
  topicPractice: [

    // ── Afdeling 1: Vermenigvuldigingstabelle tot 12 × 12 ────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken die volgende:\na) 11 × 7\nb) 12 × 8\nc) 11 × 11',
      parts: [
        {
          label: 'a)',
          correctAnswer: '77',
          explanation:
            '11 × 7 = 77\n\n' +
            'Vir 11 × 1 tot 11 × 9, herhaal die antwoord die syfer waarmee jy vermenigvuldig:\n' +
            '11 × 7 → albei syfers is 7 → 77',
        },
        {
          label: 'b)',
          correctAnswer: '96',
          explanation:
            '12 × 8 = 96\n\n' +
            'Gebruik die opbreekmetode: 12 = 10 + 2\n' +
            '10 × 8 = 80\n' +
            '2 × 8 = 16\n' +
            '80 + 16 = 96',
        },
        {
          label: 'c)',
          correctAnswer: '121',
          explanation:
            '11 × 11 = 121\n\n' +
            'Vir 11 × 10, 11 × 11, en 11 × 12 geld die syferherhalingspatroon nie — jy moet onthou of bereken:\n' +
            '11 × 11 = 121',
        },
      ],
      answer: 'a) 77\nb) 96\nc) 121',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Vind die ontbrekende getalle:\na) 12 × ___ = 108\nb) ___ × 11 = 99\nc) 12 × ___ = 144',
      parts: [
        {
          label: 'a)',
          correctAnswer: '9',
          explanation:
            'Gebruik die inverse bewerking: 108 ÷ 12\n\n' +
            'Tel op in die 12-tafel:\n' +
            '12, 24, 36, 48, 60, 72, 84, 96, 108 — dit is 9 stappe.\n' +
            'Dus is 12 × 9 = 108. Die ontbrekende getal is 9.',
        },
        {
          label: 'b)',
          correctAnswer: '9',
          explanation:
            'Gebruik die inverse bewerking: 99 ÷ 11\n\n' +
            'Tel op in die 11-tafel:\n' +
            '11, 22, 33, 44, 55, 66, 77, 88, 99 — dit is 9 stappe.\n' +
            'Dus is 9 × 11 = 99. Die ontbrekende getal is 9.',
        },
        {
          label: 'c)',
          correctAnswer: '12',
          explanation:
            'Gebruik die inverse bewerking: 144 ÷ 12\n\n' +
            'Tel op in die 12-tafel:\n' +
            '12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144 — dit is 12 stappe.\n' +
            'Dus is 12 × 12 = 144. Die ontbrekende getal is 12.',
        },
      ],
      answer: 'a) 9\nb) 9\nc) 12',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Thabo sê 11 × 12 = 122 deur die syferherhalingspatroon te gebruik. Is hy korrek? Verduidelik waarom of waarom nie en gee die korrekte antwoord.',
      answer:
        'Nee, Thabo is verkeerd.\n\n' +
        'Die syferherhalingspatroon werk slegs vir 11 × 1 tot 11 × 9 (waar die antwoord die enkelsyfer herhaal, bv. 11 × 7 = 77).\n\n' +
        'Vir 11 × 10, 11 × 11, en 11 × 12 breek die patroon af en moet jy behoorlik bereken:\n' +
        '11 × 12 = 132 (nie 122 nie).',
    },

    // ── Afdeling 2: Vermenigvuldig ʼn 3-Syfergetal met ʼn 2-Syfergetal ───────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken met die kolommetode en wys jou werk:\n234 × 12',
      correctAnswer: '2808',
      explanation:
        '234 × 12 = 2 808\n\n' +
        'Stap 1 — 234 × 2 (eenhede-syfer, geen skuiwe):\n' +
        '• 2 × 4 = 8\n' +
        '• 2 × 3 = 6\n' +
        '• 2 × 2 = 4\n' +
        'Gedeeltelike produk 1: 468\n\n' +
        'Stap 2 — 234 × 1 (tiene-syfer, skryf 0-plekhouer, geen skuiwe):\n' +
        '• 1 × 4 = 4\n' +
        '• 1 × 3 = 3\n' +
        '• 1 × 2 = 2\n' +
        'Gedeeltelike produk 2: 2 340\n\n' +
        'Stap 3 — Tel die gedeeltelike produkte bymekaar:\n' +
        '468 + 2 340 = 2 808',
      answer: '2 808',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken met die kolommetode en wys albei gedeeltelike produkte:\na) 347 × 24\nb) 256 × 33',
      parts: [
        {
          label: 'a)',
          correctAnswer: '8328',
          explanation:
            '347 × 24 = 8 328\n\n' +
            'Stap 1 — 347 × 4 (eenhede-syfer):\n' +
            '• 4 × 7 = 28 → skryf 8, skuif 2\n' +
            '• 4 × 4 = 16 + 2 = 18 → skryf 8, skuif 1\n' +
            '• 4 × 3 = 12 + 1 = 13\n' +
            'Gedeeltelike produk 1: 1 388\n\n' +
            'Stap 2 — 347 × 2 (tiene-syfer, skryf 0-plekhouer):\n' +
            '• 2 × 7 = 14 → skryf 4, skuif 1\n' +
            '• 2 × 4 = 8 + 1 = 9\n' +
            '• 2 × 3 = 6\n' +
            'Gedeeltelike produk 2: 6 940\n\n' +
            'Stap 3 — Tel bymekaar:\n' +
            '1 388 + 6 940 = 8 328',
        },
        {
          label: 'b)',
          correctAnswer: '8448',
          explanation:
            '256 × 33 = 8 448\n\n' +
            'Stap 1 — 256 × 3 (eenhede-syfer):\n' +
            '• 3 × 6 = 18 → skryf 8, skuif 1\n' +
            '• 3 × 5 = 15 + 1 = 16 → skryf 6, skuif 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            'Gedeeltelike produk 1: 768\n\n' +
            'Stap 2 — 256 × 3 (tiene-syfer, skryf 0-plekhouer):\n' +
            '• 3 × 6 = 18 → skryf 8, skuif 1\n' +
            '• 3 × 5 = 15 + 1 = 16 → skryf 6, skuif 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            'Gedeeltelike produk 2: 7 680\n\n' +
            'Stap 3 — Tel bymekaar:\n' +
            '768 + 7 680 = 8 448',
        },
      ],
      answer: 'a) 8 328\nb) 8 448',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool bestel 124 boeke teen R38 elk.\n' +
        'a) Skat die totale koste deur albei getalle af te rond na die naaste 10.\n' +
        'b) Bereken die presiese totale koste met die kolommetode.',
      parts: [
        {
          label: 'a) Skatting:',
          correctAnswers: ['4800', 'r4800'],
          correctAnswer: '4800',
          explanation:
            'Rond 124 af na die naaste 10: 120\n' +
            'Rond 38 af na die naaste 10: 40\n\n' +
            'Skatting: 120 × 40 = R4 800\n' +
            '(Dink: 12 × 4 = 48, dus 120 × 40 = 4 800)',
        },
        {
          label: 'b) Presiese totaal:',
          correctAnswers: ['4712', 'r4712'],
          correctAnswer: '4712',
          explanation:
            '124 × 38 = 4 712\n\n' +
            'Stap 1 — 124 × 8 (eenhede-syfer):\n' +
            '• 8 × 4 = 32 → skryf 2, skuif 3\n' +
            '• 8 × 2 = 16 + 3 = 19 → skryf 9, skuif 1\n' +
            '• 8 × 1 = 8 + 1 = 9\n' +
            'Gedeeltelike produk 1: 992\n\n' +
            'Stap 2 — 124 × 3 (tiene-syfer, skryf 0-plekhouer):\n' +
            '• 3 × 4 = 12 → skryf 2, skuif 1\n' +
            '• 3 × 2 = 6 + 1 = 7\n' +
            '• 3 × 1 = 3\n' +
            'Gedeeltelike produk 2: 3 720\n\n' +
            'Stap 3 — Tel bymekaar:\n' +
            '992 + 3 720 = 4 712',
        },
      ],
      answer: 'a) Skatting: 120 × 40 = R4 800\nb) Presies: R4 712',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Skool bestel 124 boeke teen R38 elk. Jy het R4 800 geskat en ʼn presiese totaal van R4 712 bereken.\n' +
        'c) Is jou presiese antwoord naby aan jou skatting? Verduidelik jou redenasie.',
      answer:
        'Ja, R4 712 is naby aan R4 800.\n\n' +
        'Die verskil is R4 800 − R4 712 = R88.\n' +
        'Dit is ʼn klein verskil relatief tot die totale koste, wat bevestig dat die presiese antwoord redelik is.',
    },

  ],

  scoreMessages: [
    { minScore: 13, message: 'Uitstekend! Volpunte — jy het vermenigvuldigingstabelle en die kolommetode vir 3-syfer- met 2-syfergetalle bemeester.' },
    { minScore: 10, message: 'Uitstekende werk! Jy het ʼn sterk begrip. Gaan enige vrae wat jy verkeerd gehad het weer deur.' },
    { minScore: 7,  message: 'Goeie poging! Gaan terug en oefen die afdelings waar jy punte verloor het.' },
    { minScore: 0,  message: 'Hou aan oefen! Werk noukeurig deur die uitgewerkte voorbeelde stap vir stap en probeer weer.' },
  ],
}
