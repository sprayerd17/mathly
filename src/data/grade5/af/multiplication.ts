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
      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Volledige 12 × 12-vermenigvuldigingsrooster met die 11- en 12-tafels in ʼn ander kleur uitgelig" />',
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
      diagramPlaceholder:
        '<DiagramPlaceholder label="Kolomvermenigvuldiging-uitleg wat 347 x 23 toon met twee gedeeltelike produkte apart getoon en dan bymekaar getel met kleurkodering" />',
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
