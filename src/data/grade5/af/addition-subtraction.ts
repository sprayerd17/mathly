import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour palette ───────────────────────────────────────────────────────────
// Ten Thousands — red     (#dc2626 / bg #fee2e2 / border #fca5a5)
// Thousands     — orange  (#ea580c / bg #ffedd5 / border #fed7aa)
// Hundreds      — yellow  (#ca8a04 / bg #fef9c3 / border #fde68a)
// Tens          — green   (#16a34a / bg #dcfce7 / border #86efac)
// Units         — blue    (#2563eb / bg #dbeafe / border #93c5fd)
// Carries       — purple  (#7c3aed / bg #ede9fe / border #c4b5fd)

const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Reusable table wrapper ───────────────────────────────────────────────────
const TW  = (inner: string) =>
  `<div style="overflow-x:auto;margin-top:14px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
  `<table style="border-collapse:collapse;font-size:0.93em;text-align:center;min-width:280px">${inner}</table></div>`

// ─── Shared column header row ─────────────────────────────────────────────────
const TH_ROW =
  `<thead><tr style="background:#f8fafc">` +
  `<th style="padding:8px 16px;font-weight:700;color:#dc2626;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">TD</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#ea580c;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#ca8a04;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#16a34a;border-bottom:2px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>` +
  `<th style="padding:8px 16px;font-weight:700;color:#2563eb;border-bottom:2px solid #e5e7eb">E</th>` +
  `</tr></thead>`

// ─── Helper: one data row ─────────────────────────────────────────────────────
type CellOpts = { topBorder?: boolean; thick?: boolean; prefix?: string }
function dataRow(
  [a, b, c, d, e]: string[],
  colours: string[],
  opts: CellOpts = {}
): string {
  const borderTop = opts.topBorder ? 'border-top:1px solid #e5e7eb;' : ''
  const fs        = opts.thick     ? 'font-size:1.08em;font-weight:800;' : 'font-weight:700;'
  const cells     = [a, b, c, d, e].map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const pre   = i === 0 && opts.prefix ? opts.prefix : ''
    return `<td style="padding:8px 16px;color:${colours[i]};${fs}${borderTop}${right}">${pre}${v}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── Helper: carry row (purple, small) ───────────────────────────────────────
function carryRow(carries: (string | '')[]): string {
  const cells = carries.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const val   = v ? `<span style="color:#7c3aed;font-weight:800;font-size:0.82em">${v}</span>` : ''
    return `<td style="padding:3px 16px;${right}">${val}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── Helper: borrow row (purple, small — shows modified digit above original) ─
function borrowRow(borrows: (string | '')[]): string {
  const cells = borrows.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    const val   = v ? `<span style="color:#7c3aed;font-weight:800;font-size:0.82em">${v}</span>` : ''
    return `<td style="padding:3px 16px;${right}">${val}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

const COL5 = ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#2563eb']

// ─── Answer row (bottom double border) ───────────────────────────────────────
function answerRow(digits: string[]): string {
  const cells = digits.map((v, i) => {
    const right = i < 4 ? 'border-right:1px solid #e5e7eb;' : ''
    return `<td style="padding:8px 16px;color:${COL5[i]};font-weight:800;font-size:1.1em;border-top:3px double #374151;${right}">${v}</td>`
  })
  return `<tr>${cells.join('')}</tr>`
}

// ─── WE1 tables ──────────────────────────────────────────────────────────────
// 34 567 + 28 914 = 63 481
// Carries: E→T (1), H→D (1), D→TD (1)
// Carry row shows the digit carried INTO each column:
//   TD: ¹ (carried from D), D: ¹ (carried from H), H: —, T: ¹ (carried from E), E: —

const we1SetupTable = TW(
  TH_ROW +
  `<tbody>` +
  dataRow(['3','4','5','6','7'], COL5) +
  dataRow(['2','8','9','1','4'], COL5, { topBorder: true, prefix: '+ ' }) +
  `</tbody>`
)

const we1FullTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '', '¹', '']) +
  dataRow(['3','4','5','6','7'], COL5) +
  dataRow(['2','8','9','1','4'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['6','3','4','8','1']) +
  `</tbody>`
)

// ─── WE2 tables ──────────────────────────────────────────────────────────────
// 47 856 + 38 749 = 86 605
// E: 6+9=15 carry 1 → T; T: 5+4+1=10 carry 1 → H; H: 8+7+1=16 carry 1 → D; D: 7+8+1=16 carry 1 → TD; TD: 4+3+1=8
// Carry row: TD: ¹, D: ¹, H: ¹, T: ¹, E: —

const we2FullTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['4','7','8','5','6'], COL5) +
  dataRow(['3','8','7','4','9'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['8','6','6','0','5']) +
  `</tbody>`
)

// ─── WE3 tables ──────────────────────────────────────────────────────────────
// 73 425 − 38 768 = 34 657
// Borrow chain: E→15-8=7; T→11-6=5; H→13-7=6; D→12-8=4; TD→6-3=3

const we3SetupTable = TW(
  TH_ROW +
  `<tbody>` +
  dataRow(['7','3','4','2','5'], COL5) +
  dataRow(['3','8','7','6','8'], COL5, { topBorder: true, prefix: '− ' }) +
  `</tbody>`
)

const we3FullTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['6', '12', '13', '11', '15']) +
  dataRow(['7','3','4','2','5'], COL5) +
  dataRow(['3','8','7','6','8'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['3','4','6','5','7']) +
  `</tbody>`
)

// ─── WE4 tables ──────────────────────────────────────────────────────────────
// 82 500 − 47 836 = 34 664
// Borrow chain: E→10-6=4; T→9-3=6; H→14-8=6; D→11-7=4; TD→7-4=3

const we4FullTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '11', '14', '9', '10']) +
  dataRow(['8','2','5','0','0'], COL5) +
  dataRow(['4','7','8','3','6'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['3','4','6','6','4']) +
  `</tbody>`
)

// ─── WE5 table ───────────────────────────────────────────────────────────────
// 47 382 + 28 915 = 76 297
// H→D carry (1), D→TD carry (1)

const we5Table = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '', '', '']) +
  dataRow(['4','7','3','8','2'], COL5) +
  dataRow(['2','8','9','1','5'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['7','6','2','9','7']) +
  `</tbody>`
)

// ─── WE6 table ───────────────────────────────────────────────────────────────
// 83 654 − 37 429 = 46 225
// Borrow: T=4,E=14; TD=7,D=13

const we6Table = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '13', '', '4', '14']) +
  dataRow(['8','3','6','5','4'], COL5) +
  dataRow(['3','7','4','2','9'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['4','6','2','2','5']) +
  `</tbody>`
)

// ─── WE7 tables ──────────────────────────────────────────────────────────────
// 54 738 + 27 465 = 82 203  (all 4 columns carry)

const we7Table = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['5','4','7','3','8'], COL5) +
  dataRow(['2','7','4','6','5'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['8','2','2','0','3']) +
  `</tbody>`
)

// 82 203 − 27 465 = 54 738 (inverse check)
// Borrow chain: E→13; T→9; H→11 (lent to T, borrowed from D); D→11 (lent to H, borrowed from TD); TD→7

const we7CheckTable = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['7', '11', '11', '9', '13']) +
  dataRow(['8','2','2','0','3'], COL5) +
  dataRow(['2','7','4','6','5'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['5','4','7','3','8']) +
  `</tbody>`
)

// ─── WE8 tables ──────────────────────────────────────────────────────────────
// 91 000 − 43 567 = 47 433
// Borrow chain: E→10; T→9; H→9 (lent to T, borrowed from D); D→10 (lent to H, borrowed from TD); TD→8

const we8Table = TW(
  TH_ROW +
  `<tbody>` +
  borrowRow(['8', '10', '9', '9', '10']) +
  dataRow(['9','1','0','0','0'], COL5) +
  dataRow(['4','3','5','6','7'], COL5, { topBorder: true, prefix: '− ' }) +
  answerRow(['4','7','4','3','3']) +
  `</tbody>`
)

// 47 433 + 43 567 = 91 000 (inverse check — all 4 columns carry)

const we8CheckTable = TW(
  TH_ROW +
  `<tbody>` +
  carryRow(['¹', '¹', '¹', '¹', '']) +
  dataRow(['4','7','4','3','3'], COL5) +
  dataRow(['4','3','5','6','7'], COL5, { topBorder: true, prefix: '+ ' }) +
  answerRow(['9','1','0','0','0']) +
  `</tbody>`
)

export const topicData: TopicData = {
  title: 'Optelling en Aftrekking',
  grade: 5,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OPTELLING VAN GROOT GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'addition-large-numbers',
      title: 'Optelling van Groot Getalle',
      icon: '➕',
      explanation:
        `<p>In Graad 5 tel ons getalle op met tot <strong>5 syfers</strong> — getalle tot 99 999. Ons gebruik dieselfde <strong>kolommetode</strong> as Graad 4, maar nou het ons ʼn ekstra kolom: die <strong>tienduisende</strong>-kolom. Elke kolom het sy eie kleur — leer hierdie kleure want ons gebruik hulle in elke voorbeeld hieronder.</p>` +

        `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px">` +
        `<table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr>` +
        `<th style="padding:9px 12px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Tienduisende (TD)</th>` +
        `<th style="padding:9px 12px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Duisende (D)</th>` +
        `<th style="padding:9px 12px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde (H)</th>` +
        `<th style="padding:9px 12px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene (T)</th>` +
        `<th style="padding:9px 12px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene (E)</th>` +
        `</tr></thead></table></div>` +

        `<p style="margin-top:18px"><strong>Hoe om op te tel met kolomme:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Skryf die getalle een onder die ander — ${bl('ene')} onder ${bl('ene')}, ${gr('tiene')} onder ${gr('tiene')}, ${ye('honderde')} onder ${ye('honderde')}, ${or('duisende')} onder ${or('duisende')}, ${re('tienduisende')} onder ${re('tienduisende')}.</li>` +
        `<li>Begin altyd met optel vanaf die <strong>regterkant</strong> — begin met die ${bl('ene')}-kolom.</li>` +
        `<li>As ʼn kolomtotaal <strong>10 of meer</strong> is, skryf die ene-syfer van daardie totaal neer en <strong>dra</strong> die tiene-syfer oor na bo-op die volgende kolom links. Oorgedraagde syfers word in ${pu('pers')} getoon.</li>` +
        `<li>Onthou om enige ${pu('oorgedraagde syfer')} by te tel wanneer jy by daardie kolom kom.</li>` +
        `</ol>` +

        `<p style="margin-top:20px"><strong>Sleutelwoorde wat jou vertel om by te tel in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">altesaam</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">totaal</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">som</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">in totaal</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">gekombineer</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel altesaam</span>` +
        `</div>`,

      workedExamples: [

        // ── UITGEWERKTE VOORBEELD 1 ─────────────────────────────────────────
        {
          question: 'Bereken 34 567 + 28 914',
          answer: `${re('6')}${or('3')} ${ye('4')}${gr('8')}${bl('1')} — dit is <strong>63 481</strong>`,
          steps: [
            // Step 1 — layout
            `<strong>Stap 1 — Skryf in kolomme.</strong> Lyn ${bl('ene')} onder ${bl('ene')}, ${gr('tiene')} onder ${gr('tiene')}, ${ye('honderde')} onder ${ye('honderde')}, ${or('duisende')} onder ${or('duisende')}, en ${re('tienduisende')} onder ${re('tienduisende')} op.` +
            we1SetupTable,

            // Step 2 — units
            `<strong>Stap 2 — Tel die ${bl('ene')}-kolom op.</strong><br>` +
            `${bl('7')} + ${bl('4')} = ${bl('11')}<br>` +
            `11 is groter as 9, dus kan ons nie twee syfers in een kolom pas nie.<br>` +
            `Skryf ${bl('1')} in die ene-kolom en dra ${pu('1')} oor na bo-op die ${gr('tiene')}-kolom.`,

            // Step 3 — tens
            `<strong>Stap 3 — Tel die ${gr('tiene')}-kolom op</strong> (moenie die ${pu('oorgedraagde 1')} vergeet nie).<br>` +
            `${gr('6')} + ${gr('1')} + ${pu('1')} (oorgedra) = ${gr('8')}<br>` +
            `8 is minder as 10, dus skryf ${gr('8')} in die tiene-kolom. Geen oordra nodig nie.`,

            // Step 4 — hundreds
            `<strong>Stap 4 — Tel die ${ye('honderde')}-kolom op.</strong><br>` +
            `${ye('5')} + ${ye('9')} = ${ye('14')}<br>` +
            `14 is groter as 9. Skryf ${ye('4')} in die honderde-kolom en dra ${pu('1')} oor na bo-op die ${or('duisende')}-kolom.`,

            // Step 5 — thousands
            `<strong>Stap 5 — Tel die ${or('duisende')}-kolom op</strong> (moenie die ${pu('oorgedraagde 1')} vergeet nie).<br>` +
            `${or('4')} + ${or('8')} + ${pu('1')} (oorgedra) = ${or('13')}<br>` +
            `13 is groter as 9. Skryf ${or('3')} in die duisende-kolom en dra ${pu('1')} oor na bo-op die ${re('tienduisende')}-kolom.`,

            // Step 6 — ten thousands
            `<strong>Stap 6 — Tel die ${re('tienduisende')}-kolom op</strong> (moenie die ${pu('oorgedraagde 1')} vergeet nie).<br>` +
            `${re('3')} + ${re('2')} + ${pu('1')} (oorgedra) = ${re('6')}<br>` +
            `6 is minder as 10, dus skryf ${re('6')} in die tienduisende-kolom. Geen oordra nodig nie.`,

            // Step 7 — full table with answer
            `<strong>Volledige werk — alle oordragte in ${pu('pers')} getoon:</strong>` +
            we1FullTable +
            `<p style="margin-top:14px"><strong>Antwoord: 63 481</strong></p>`,
          ],
        },

        // ── UITGEWERKTE VOORBEELD 2 ─────────────────────────────────────────
        {
          question: 'ʼn Skool maak R47 856 in kwartaal 1 en R38 749 in kwartaal 2. Hoeveel het hulle altesaam gemaak?',
          answer: '<strong>R86 605</strong>',
          steps: [
            // Step 1 — identify operation
            `<strong>Stap 1 — Vind die sleutelwoord.</strong><br>` +
            `Die woord <strong>"altesaam"</strong> vertel ons om <strong>op te tel</strong>.<br><br>` +
            `<strong>Getalsin:</strong> R47 856 + R38 749 = ?`,

            // Step 2 — set up and show carries
            `<strong>Stap 2 — Skryf in kolomme en tel op, beginnende by die ene.</strong><br><br>` +
            `${bl('Ene')}: ${bl('6')} + ${bl('9')} = ${bl('15')} → skryf ${bl('5')}, dra ${pu('1')} oor<br>` +
            `${gr('Tiene')}: ${gr('5')} + ${gr('4')} + ${pu('1')} oorgedra = ${gr('10')} → skryf ${gr('0')}, dra ${pu('1')} oor<br>` +
            `${ye('Honderde')}: ${ye('8')} + ${ye('7')} + ${pu('1')} oorgedra = ${ye('16')} → skryf ${ye('6')}, dra ${pu('1')} oor<br>` +
            `${or('Duisende')}: ${or('7')} + ${or('8')} + ${pu('1')} oorgedra = ${or('16')} → skryf ${or('6')}, dra ${pu('1')} oor<br>` +
            `${re('Tienduisende')}: ${re('4')} + ${re('3')} + ${pu('1')} oorgedra = ${re('8')} → skryf ${re('8')}` +
            `<br><br><strong>Volledige kolomwerk — oordragte in ${pu('pers')} getoon:</strong>` +
            we2FullTable,

            // Step 3 — answer
            `<strong>Stap 3 — Skryf die antwoord met die korrekte eenheid.</strong><br><br>` +
            `Die skool het <strong>R86 605</strong> altesaam gemaak in die twee kwartale.`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Kolomoptelling-uitleg wat 34 567 plus 28 914 toon met elke plekwaarde-kolom kleurgekodeer en oorgedraagde syfers in pers getoon',
      videoPlaceholder:
        'Kort video wat kolomoptelling van 5-syfergetalle met oordra toon deur kleurgekodeerde plekwaardekolomme te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — AFTREKKING VAN GROOT GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'subtraction-large-numbers',
      title: 'Aftrekking van Groot Getalle',
      icon: '➖',
      explanation:
        `<p>In Graad 5 trek ons getalle af met tot <strong>5 syfers</strong> — getalle tot 99 999. Ons gebruik dieselfde <strong>kolommetode</strong> as Graad 4, maar nou sluit ons die <strong>tienduisende</strong>-kolom in. Wanneer die boonste syfer in ʼn kolom kleiner is as die onderste syfer, moet ons <strong>leen</strong> van die kolom aan die linkerkant. Geleende waardes word in ${pu('pers')} bo die oorspronklike syfer getoon.</p>` +

        `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px">` +
        `<table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr>` +
        `<th style="padding:9px 12px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Tienduisende (TD)</th>` +
        `<th style="padding:9px 12px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Duisende (D)</th>` +
        `<th style="padding:9px 12px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde (H)</th>` +
        `<th style="padding:9px 12px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene (T)</th>` +
        `<th style="padding:9px 12px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene (E)</th>` +
        `</tr></thead></table></div>` +

        `<p style="margin-top:18px"><strong>Hoe om af te trek met kolomme:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Skryf die groter getal bo-aan en die kleiner getal daaronder — ${bl('ene')} onder ${bl('ene')}, ${gr('tiene')} onder ${gr('tiene')}, ${ye('honderde')} onder ${ye('honderde')}, ${or('duisende')} onder ${or('duisende')}, ${re('tienduisende')} onder ${re('tienduisende')}.</li>` +
        `<li>Begin altyd met aftrek vanaf die <strong>regterkant</strong> — begin met die ${bl('ene')}-kolom.</li>` +
        `<li>As die boonste syfer <strong>kleiner</strong> is as die onderste syfer, moet jy <strong>leen</strong>: neem 1 van die kolom aan die linkerkant. Daardie kolom verloor 1, en jou kolom kry 10 by. Die nuwe waarde word in ${pu('pers')} bo die oorspronklike syfer getoon.</li>` +
        `<li>As die kolom waarvan jy wil leen 0 is, leen eers van die kolom verder na links om dit ʼn waarde te gee, en leen dan daarvan.</li>` +
        `</ol>` +

        `<p style="margin-top:20px"><strong>Sleutelwoorde wat jou vertel om af te trek in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">verskil</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel oor</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel bly oor</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">minder as</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">minder</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel meer</span>` +
        `</div>`,

      workedExamples: [

        // ── UITGEWERKTE VOORBEELD 3 ─────────────────────────────────────────
        {
          question: 'Bereken 73 425 − 38 768',
          answer: `${re('3')}${or('4')} ${ye('6')}${gr('5')}${bl('7')} — dit is <strong>34 657</strong>`,
          steps: [
            `<strong>Stap 1 — Skryf in kolomme.</strong> Lyn ${bl('ene')} onder ${bl('ene')}, ${gr('tiene')} onder ${gr('tiene')}, ${ye('honderde')} onder ${ye('honderde')}, ${or('duisende')} onder ${or('duisende')}, en ${re('tienduisende')} onder ${re('tienduisende')} op.` +
            we3SetupTable,

            `<strong>Stap 2 — ${bl('Ene')}-kolom: ${bl('5')} − ${bl('8')}.</strong><br>` +
            `5 is kleiner as 8 — ons kan nie aftrek nie. Ons moet <strong>leen</strong> van die ${gr('tiene')}-kolom.<br>` +
            `Die ${gr('tiene')}-syfer is ${gr('2')}. Om 1 te leen maak dit ${pu('1')}.<br>` +
            `Ons ${bl('ene')}-syfer kry 10 by en word ${pu('15')}.<br>` +
            `Trek nou af: ${pu('15')} − ${bl('8')} = ${bl('7')}.`,

            `<strong>Stap 3 — ${gr('Tiene')}-kolom: ${pu('1')} − ${gr('6')}.</strong><br>` +
            `Nadat 1 aan ene geleen is, is die tiene-syfer nou ${pu('1')}.<br>` +
            `1 is kleiner as 6 — ons moet leen van die ${ye('honderde')}-kolom.<br>` +
            `Die ${ye('honderde')}-syfer is ${ye('4')}. Om 1 te leen maak dit ${pu('3')}.<br>` +
            `Ons ${gr('tiene')}-syfer kry 10 by en word ${pu('11')}.<br>` +
            `Trek nou af: ${pu('11')} − ${gr('6')} = ${gr('5')}.`,

            `<strong>Stap 4 — ${ye('Honderde')}-kolom: ${pu('3')} − ${ye('7')}.</strong><br>` +
            `Nadat 1 aan tiene geleen is, is die honderde-syfer nou ${pu('3')}.<br>` +
            `3 is kleiner as 7 — ons moet leen van die ${or('duisende')}-kolom.<br>` +
            `Die ${or('duisende')}-syfer is ${or('3')}. Om 1 te leen maak dit ${pu('2')}.<br>` +
            `Ons ${ye('honderde')}-syfer kry 10 by en word ${pu('13')}.<br>` +
            `Trek nou af: ${pu('13')} − ${ye('7')} = ${ye('6')}.`,

            `<strong>Stap 5 — ${or('Duisende')}-kolom: ${pu('2')} − ${or('8')}.</strong><br>` +
            `Nadat 1 aan honderde geleen is, is die duisende-syfer nou ${pu('2')}.<br>` +
            `2 is kleiner as 8 — ons moet leen van die ${re('tienduisende')}-kolom.<br>` +
            `Die ${re('tienduisende')}-syfer is ${re('7')}. Om 1 te leen maak dit ${pu('6')}.<br>` +
            `Ons ${or('duisende')}-syfer kry 10 by en word ${pu('12')}.<br>` +
            `Trek nou af: ${pu('12')} − ${or('8')} = ${or('4')}.`,

            `<strong>Stap 6 — ${re('Tienduisende')}-kolom: ${pu('6')} − ${re('3')}.</strong><br>` +
            `Nadat 1 aan duisende geleen is, is die tienduisende-syfer nou ${pu('6')}.<br>` +
            `6 is groter as 3 — geen leen nodig nie.<br>` +
            `${pu('6')} − ${re('3')} = ${re('3')}.`,

            `<strong>Volledige werk — alle geleende waardes in ${pu('pers')} getoon:</strong>` +
            we3FullTable +
            `<p style="margin-top:14px"><strong>Antwoord: 34 657</strong></p>`,
          ],
        },

        // ── UITGEWERKTE VOORBEELD 4 ─────────────────────────────────────────
        {
          question: 'ʼn Fabriek het 82 500 items vervaardig. Dit het 47 836 items verkoop. Hoeveel items is oor?',
          answer: '<strong>34 664</strong>',
          steps: [
            `<strong>Stap 1 — Vind die sleutelwoorde.</strong><br>` +
            `Die woorde <strong>"hoeveel items is oor"</strong> vertel ons om <strong>af te trek</strong>.<br><br>` +
            `<strong>Getalsin:</strong> 82 500 − 47 836 = ?`,

            `<strong>Stap 2 — Skryf in kolomme en trek af, beginnende by die ene.</strong><br><br>` +
            `${bl('Ene')}: ${bl('0')} − ${bl('6')} → kan nie aftrek nie. Die ${gr('tiene')}-syfer is ook ${gr('0')}, dus leen ons eers van ${ye('honderde')}: H ${ye('5')}→${pu('4')}, wat T ʼn waarde van 10 gee. Leen dan van ${gr('tiene')} vir ${bl('ene')}: T 10→${pu('9')}, E word ${pu('10')}. Nou ${pu('10')} − ${bl('6')} = ${bl('4')}.<br>` +
            `${gr('Tiene')}: ${pu('9')} − ${gr('3')} = ${gr('6')}. Geen verdere leen nodig nie.<br>` +
            `${ye('Honderde')}: ${pu('4')} − ${ye('8')} → kan nie aftrek nie. Leen van ${or('duisende')}: D ${or('2')}→${pu('1')}, H word ${pu('14')}. Nou ${pu('14')} − ${ye('8')} = ${ye('6')}.<br>` +
            `${or('Duisende')}: ${pu('1')} − ${or('7')} → kan nie aftrek nie. Leen van ${re('tienduisende')}: TD ${re('8')}→${pu('7')}, D word ${pu('11')}. Nou ${pu('11')} − ${or('7')} = ${or('4')}.<br>` +
            `${re('Tienduisende')}: ${pu('7')} − ${re('4')} = ${re('3')}.<br><br>` +
            `<strong>Volledige kolomwerk — geleende waardes in ${pu('pers')} getoon:</strong>` +
            we4FullTable,

            `<strong>Stap 3 — Skryf die antwoord met die korrekte eenheid.</strong><br><br>` +
            `Die fabriek het <strong>34 664 items</strong> oor.`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Kolomaftrekking-uitleg wat 73 425 minus 38 768 toon met elke plekwaarde-kolom kleurgekodeer en geleende waardes in pers bo die oorspronklike syfers getoon',
      videoPlaceholder:
        'Kort video wat kolomaftrekking van 5-syfergetalle met leen toon deur kleurgekodeerde plekwaardekolomme te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SKAT VOORDAT JY BEREKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-before-calculating',
      title: 'Skat Voordat Jy Bereken',
      icon: '≈',
      explanation:
        `<p><strong>Skatting</strong> beteken om getalle eers af te rond om ʼn <strong>benaderde antwoord</strong> te kry voordat jy die presiese antwoord bereken. Dit help jou om te kyk of jou finale antwoord redelik is — as jou presiese antwoord ver van jou skatting af is, het jy waarskynlik iewers ʼn fout gemaak.</p>` +

        `<p style="margin-top:16px"><strong>Kleurkode gebruik in hierdie afdeling:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#fff7ed;color:#ea580c;border:1px solid #fed7aa;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">afgeronde getalle — oranje</span>` +
        `<span style="background:#f0fdf4;color:#16a34a;border:1px solid #86efac;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">skatting — groen</span>` +
        `<span style="background:#eff6ff;color:#2563eb;border:1px solid #93c5fd;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">presiese antwoord — blou</span>` +
        `</div>` +

        `<p style="margin-top:18px"><strong>Stappe om te skat voordat jy bereken:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Rond elke getal af na die naaste ${or('1 000')} of ${or('10 000')}.</li>` +
        `<li>Tel die ${or('afgeronde getalle')} op of trek hulle af om ʼn ${gr('skatting')} te kry.</li>` +
        `<li>Bereken die ${bl('presiese antwoord')} met die kolommetode.</li>` +
        `<li>Kyk of die ${bl('presiese antwoord')} naby aan die ${gr('skatting')} is. As dit so is, is jou antwoord <strong>redelik</strong>.</li>` +
        `</ol>`,

      workedExamples: [

        // ── UITGEWERKTE VOORBEELD 5 ─────────────────────────────────────────
        {
          question: 'Skat, bereken dan presies: 47 382 + 28 915',
          answer: `${gr('Skatting:')} ${gr('76 000')} &nbsp;&nbsp; ${bl('Presiese antwoord:')} ${bl('76 297')}`,
          steps: [
            `<strong>Stap 1 — Rond elke getal af na die naaste 1 000.</strong><br><br>` +
            `47 382: die honderde-syfer is 3 (minder as 5) → rond <strong>af</strong> → ${or('47 000')}<br>` +
            `28 915: die honderde-syfer is 9 (5 of meer) → rond <strong>op</strong> → ${or('29 000')}<br><br>` +
            `<strong>Skatting:</strong> ${or('47 000')} + ${or('29 000')} = ${gr('76 000')}`,

            `<strong>Stap 2 — Bereken die presiese antwoord met kolomme.</strong>` +
            we5Table +
            `<p style="margin-top:14px"><strong>Presiese antwoord: ${bl('76 297')}</strong></p>`,

            `<strong>Stap 3 — Kyk of die presiese antwoord naby aan die skatting is.</strong><br><br>` +
            `${bl('Presiese antwoord:')} ${bl('76 297')}<br>` +
            `${gr('Skatting:')} ${gr('76 000')}<br><br>` +
            `Verskil: 76 297 − 76 000 = 297. Dit is klein in vergelyking met die grootte van die getalle, dus is die antwoord <strong>redelik</strong>. ✓`,
          ],
        },

        // ── UITGEWERKTE VOORBEELD 6 ─────────────────────────────────────────
        {
          question: 'Skat, bereken dan presies: 83 654 − 37 429',
          answer: `${gr('Skatting:')} ${gr('47 000')} &nbsp;&nbsp; ${bl('Presiese antwoord:')} ${bl('46 225')}`,
          steps: [
            `<strong>Stap 1 — Rond elke getal af na die naaste 1 000.</strong><br><br>` +
            `83 654: die honderde-syfer is 6 (5 of meer) → rond <strong>op</strong> → ${or('84 000')}<br>` +
            `37 429: die honderde-syfer is 4 (minder as 5) → rond <strong>af</strong> → ${or('37 000')}<br><br>` +
            `<strong>Skatting:</strong> ${or('84 000')} − ${or('37 000')} = ${gr('47 000')}`,

            `<strong>Stap 2 — Bereken die presiese antwoord met kolomme.</strong>` +
            we6Table +
            `<p style="margin-top:14px"><strong>Presiese antwoord: ${bl('46 225')}</strong></p>`,

            `<strong>Stap 3 — Kyk of die presiese antwoord naby aan die skatting is.</strong><br><br>` +
            `${bl('Presiese antwoord:')} ${bl('46 225')}<br>` +
            `${gr('Skatting:')} ${gr('47 000')}<br><br>` +
            `Verskil: 47 000 − 46 225 = 775. Dit is klein in vergelyking met die grootte van die getalle, dus is die antwoord <strong>redelik</strong>. ✓`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Diagram wat 47 382 afgerond na 47 000 en 28 915 afgerond na 29 000 in oranje toon, met die groen skatting 76 000 en die blou presiese antwoord 76 297',
      videoPlaceholder:
        'Kort video wat toon hoe om 5-syfergetalle na die naaste 1 000 af te rond en die afgeronde waardes te gebruik om te skat voordat die presiese antwoord bereken word',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — INVERSE BEWERKINGS EN ANTWOORDE NAGAAN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inverse-operations',
      title: 'Inverse Bewerkings en Antwoorde Nagaan',
      icon: '↔',
      explanation:
        `<p><strong>Inverse bewerkings</strong> is bewerkings wat mekaar ongedaan maak. Optelling en aftrekking is inverse bewerkings — as jy twee getalle optel, kan jy dit ongedaan maak deur een van hulle van die antwoord af te trek.</p>` +

        `<div style="margin-top:14px;padding:14px 18px;background:#eff6ff;border:1.5px solid #93c5fd;border-radius:10px">` +
        `<p style="margin:0;font-weight:600;color:#1e40af">As A + B = C, dan is C − B = A en C − A = B</p>` +
        `<p style="margin-top:8px;font-weight:600;color:#1e40af">As A − B = C, dan is C + B = A</p>` +
        `</div>` +

        `<p style="margin-top:16px">Nadat jy ʼn antwoord bereken het, gebruik die <strong>inverse bewerking</strong> om dit na te gaan. As die nagaan die oorspronklike getal teruggee, is jou antwoord korrek.</p>` +

        `<p style="margin-top:16px"><strong>Kleurkode gebruik in hierdie afdeling:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">` +
        `<span style="background:#eff6ff;color:#2563eb;border:1px solid #93c5fd;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">oorspronklike berekening — blou</span>` +
        `<span style="background:#f0fdf4;color:#16a34a;border:1px solid #86efac;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">inverse nagaan — groen</span>` +
        `<span style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">bevestigde antwoord — rooi</span>` +
        `</div>`,

      workedExamples: [

        // ── UITGEWERKTE VOORBEELD 7 ─────────────────────────────────────────
        {
          question: 'Bereken 54 738 + 27 465 en gaan na met die inverse bewerking.',
          answer: `Antwoord bevestig: ${re('82 203')}`,
          steps: [
            `<strong>Stap 1 — Bereken: ${bl('54 738 + 27 465')}</strong>` +
            we7Table +
            `<p style="margin-top:14px">${bl('Resultaat:')} ${bl('82 203')}</p>`,

            `<strong>Stap 2 — Gaan na met die inverse bewerking: ${gr('82 203 − 27 465')}</strong><br>` +
            `As 54 738 + 27 465 = 82 203, dan moet 82 203 − 27 465 gelyk wees aan 54 738.` +
            we7CheckTable +
            `<p style="margin-top:14px">${gr('Nagaan-resultaat:')} ${gr('54 738')} ✓ — stem ooreen met die eerste getal, dus is die antwoord bevestig: ${re('82 203')}</p>`,
          ],
        },

        // ── UITGEWERKTE VOORBEELD 8 ─────────────────────────────────────────
        {
          question: 'Bereken 91 000 − 43 567 en gaan na met die inverse bewerking.',
          answer: `Antwoord bevestig: ${re('47 433')}`,
          steps: [
            `<strong>Stap 1 — Bereken: ${bl('91 000 − 43 567')}</strong>` +
            we8Table +
            `<p style="margin-top:14px">${bl('Resultaat:')} ${bl('47 433')}</p>`,

            `<strong>Stap 2 — Gaan na met die inverse bewerking: ${gr('47 433 + 43 567')}</strong><br>` +
            `As 91 000 − 43 567 = 47 433, dan moet 47 433 + 43 567 gelyk wees aan 91 000.` +
            we8CheckTable +
            `<p style="margin-top:14px">${gr('Nagaan-resultaat:')} ${gr('91 000')} ✓ — stem ooreen met die oorspronklike beginggetal, dus is die antwoord bevestig: ${re('47 433')}</p>`,
          ],
        },

      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Diagram wat die inverse verwantskap toon: 54 738 plus 27 465 is gelyk aan 82 203 in blou, en die nagaan 82 203 minus 27 465 is gelyk aan 54 738 bevestig in groen',
      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat toon hoe om te skat voordat jy bereken en hoe om inverse bewerkings te gebruik om optellings- en aftrekkingsantwoorde na te gaan" />',
    },

  ],

  // ─── ONDERWERP-OEFENING ──────────────────────────────────────────────────────
  topicPractice: [

    // ── Afdeling 1: Optelling van Groot Getalle ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n23 456 + 34 817',
      correctAnswer: '58273',
      explanation:
        '23 456 + 34 817 = 58 273\n\n' +
        '• Ene: 6 + 7 = 13 → skryf 3, dra 1 oor\n' +
        '• Tiene: 5 + 1 + 1 (oorgedra) = 7\n' +
        '• Honderde: 4 + 8 = 12 → skryf 2, dra 1 oor\n' +
        '• Duisende: 3 + 4 + 1 (oorgedra) = 8\n' +
        '• Tienduisende: 2 + 3 = 5\n\n' +
        'Antwoord: 58 273',
      answer: '58 273',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou oordra:\n47 865 + 38 947',
      correctAnswer: '86812',
      explanation:
        '47 865 + 38 947 = 86 812\n\n' +
        '• Ene: 5 + 7 = 12 → skryf 2, dra 1 oor\n' +
        '• Tiene: 6 + 4 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n' +
        '• Honderde: 8 + 9 + 1 (oorgedra) = 18 → skryf 8, dra 1 oor\n' +
        '• Duisende: 7 + 8 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n' +
        '• Tienduisende: 4 + 3 + 1 (oorgedra) = 8\n\n' +
        'Antwoord: 86 812',
      answer: '86 812',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool versamel R34 750 in kwartaal 1, R28 965 in kwartaal 2 en R41 380 in kwartaal 3. Hoeveel het hulle in totaal versamel? Wys al jou werk.\n\n' +
        'Stap 1: Wat is die totaal vir kwartaal 1 en kwartaal 2?\n' +
        'Stap 2: Wat is die grootgetotaal vir al drie kwartale?',
      parts: [
        {
          label: 'Stap 1:',
          correctAnswer: '63715',
          explanation:
            'Stap 1: R34 750 + R28 965\n\n' +
            '• Ene: 0 + 5 = 5\n' +
            '• Tiene: 5 + 6 = 11 → skryf 1, dra 1 oor\n' +
            '• Honderde: 7 + 9 + 1 (oorgedra) = 17 → skryf 7, dra 1 oor\n' +
            '• Duisende: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
            '• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\n' +
            'Kwartaal 1 + Kwartaal 2 = R63 715',
        },
        {
          label: 'Stap 2:',
          correctAnswers: ['105095', 'r105095'],
          correctAnswer: '105095',
          explanation:
            'Stap 2: R63 715 + R41 380\n\n' +
            '• Ene: 5 + 0 = 5\n' +
            '• Tiene: 1 + 8 = 9\n' +
            '• Honderde: 7 + 3 = 10 → skryf 0, dra 1 oor\n' +
            '• Duisende: 3 + 1 + 1 (oorgedra) = 5\n' +
            '• Tienduisende: 6 + 4 = 10 → skryf 0, dra 1 oor\n' +
            '• Honderdduisende: 1 (oorgedra) — die antwoord het 6 syfers\n\n' +
            'Grootgetotaal = R105 095',
        },
      ],
      answer: 'Stap 1: R63 715\nStap 2: R105 095',
    },

    // ── Afdeling 2: Aftrekking van Groot Getalle ─────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n67 845 − 34 521',
      correctAnswer: '33324',
      explanation:
        '67 845 − 34 521 = 33 324\n\n' +
        '• Ene: 5 − 1 = 4\n' +
        '• Tiene: 4 − 2 = 2\n' +
        '• Honderde: 8 − 5 = 3\n' +
        '• Duisende: 7 − 4 = 3\n' +
        '• Tienduisende: 6 − 3 = 3\n\n' +
        'Geen leen nodig nie.\n' +
        'Antwoord: 33 324',
      answer: '33 324',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou leen:\n83 402 − 47 865',
      correctAnswer: '35537',
      explanation:
        '83 402 − 47 865 = 35 537\n\n' +
        '• Ene: 2 − 5 → kan nie aftrek nie. Tiene-syfer is 0, dus leen van Honderde.\n' +
        '  Honderde: 4 → 3 (geleen aan Tiene). Tiene: 0 → 10.\n' +
        '  Tiene: 10 → 9 (geleen aan Ene). Ene: 2 → 12.\n' +
        '  Ene: 12 − 5 = 7\n\n' +
        '• Tiene: 9 − 6 = 3\n\n' +
        '• Honderde: 3 − 8 → kan nie aftrek nie. Leen van Duisende.\n' +
        '  Duisende: 3 → 2 (geleen aan Honderde). Honderde: 3 → 13.\n' +
        '  Honderde: 13 − 8 = 5\n\n' +
        '• Duisende: 2 − 7 → kan nie aftrek nie. Leen van Tienduisende.\n' +
        '  Tienduisende: 8 → 7 (geleen aan Duisende). Duisende: 2 → 12.\n' +
        '  Duisende: 12 − 7 = 5\n\n' +
        '• Tienduisende: 7 − 4 = 3\n\n' +
        'Antwoord: 35 537',
      answer: '35 537',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Fabriek het 75 000 items vervaardig. Dit het 38 647 items in die eerste week en 21 934 items in die tweede week verkoop. Hoeveel items is oor?\n\n' +
        'Stap 1: Bereken die totale aantal items verkoop.\n' +
        'Stap 2: Bereken die aantal items wat oor is.',
      parts: [
        {
          label: 'Stap 1:',
          correctAnswer: '60581',
          explanation:
            'Stap 1: Totaal verkoop = 38 647 + 21 934\n\n' +
            '• Ene: 7 + 4 = 11 → skryf 1, dra 1 oor\n' +
            '• Tiene: 4 + 3 + 1 (oorgedra) = 8\n' +
            '• Honderde: 6 + 9 = 15 → skryf 5, dra 1 oor\n' +
            '• Duisende: 8 + 1 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n' +
            '• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\n' +
            'Totale items verkoop = 60 581',
        },
        {
          label: 'Stap 2:',
          correctAnswers: ['14419', '14419items', '14419itemsleft', '14419itemsareleft'],
          correctAnswer: '14419',
          explanation:
            'Stap 2: Items oor = 75 000 − 60 581\n\n' +
            '• Ene: 0 − 1 → kan nie aftrek nie. Tiene en Honderde is albei 0.\n' +
            '  Leen van Duisende: Duisende 5 → 4. Honderde 0 → 10.\n' +
            '  Honderde: 10 → 9 (geleen aan Tiene). Tiene 0 → 10.\n' +
            '  Tiene: 10 → 9 (geleen aan Ene). Ene 0 → 10.\n' +
            '  Ene: 10 − 1 = 9\n\n' +
            '• Tiene: 9 − 8 = 1\n\n' +
            '• Honderde: 9 − 5 = 4\n\n' +
            '• Duisende: 4 − 0 = 4\n\n' +
            '• Tienduisende: 7 − 6 = 1\n\n' +
            'Items oor = 14 419',
        },
      ],
      answer: 'Stap 1: 60 581 items verkoop\nStap 2: 14 419 items oor',
    },

    // ── Afdeling 3: Skat Voordat Jy Bereken ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Rond albei getalle af na die naaste 1 000 en skat:\n38 742 + 24 615',
      correctAnswers: ['64000', '39000+25000=64000'],
      correctAnswer: '64000',
      explanation:
        '38 742: honderde-syfer is 7 (5 of meer) → rond op → 39 000\n' +
        '24 615: honderde-syfer is 6 (5 of meer) → rond op → 25 000\n\n' +
        'Skatting: 39 000 + 25 000 = 64 000',
      answer: '64 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skat eers, bereken dan presies: 67 834 − 29 456\n\n' +
        'a) Rond albei getalle af na die naaste 1 000 en skat.\n' +
        'b) Bereken die presiese antwoord.\n' +
        'c) Is jou presiese antwoord naby aan jou skatting?',
      parts: [
        {
          label: 'a) Skatting:',
          correctAnswers: ['39000', '68000-29000=39000'],
          correctAnswer: '39000',
          explanation:
            '67 834: honderde-syfer is 8 (5 of meer) → rond op → 68 000\n' +
            '29 456: honderde-syfer is 4 (minder as 5) → rond af → 29 000\n\n' +
            'Skatting: 68 000 − 29 000 = 39 000',
        },
        {
          label: 'b) Presiese antwoord:',
          correctAnswer: '38378',
          explanation:
            '67 834 − 29 456 = 38 378\n\n' +
            '• Ene: 4 − 6 → kan nie aftrek nie. Leen van Tiene.\n' +
            '  Tiene: 3 → 2. Ene: 4 → 14. 14 − 6 = 8\n' +
            '• Tiene: 2 − 5 → kan nie aftrek nie. Leen van Honderde.\n' +
            '  Honderde: 8 → 7. Tiene: 2 → 12. 12 − 5 = 7\n' +
            '• Honderde: 7 − 4 = 3\n' +
            '• Duisende: 7 − 9 → kan nie aftrek nie. Leen van Tienduisende.\n' +
            '  Tienduisende: 6 → 5. Duisende: 7 → 17. 17 − 9 = 8\n' +
            '• Tienduisende: 5 − 2 = 3\n\n' +
            'Presiese antwoord: 38 378',
        },
        {
          label: 'c) Is jou presiese antwoord naby aan jou skatting?',
          correctAnswer: 'ja',
          explanation:
            'Ja! 38 378 is naby aan 39 000.\n' +
            'Verskil: 39 000 − 38 378 = 622.\n' +
            '622 is klein in vergelyking met die grootte van die getalle, dus is die antwoord redelik. ✓',
        },
      ],
      answer: 'a) 39 000\nb) 38 378\nc) Ja — 38 378 is naby aan 39 000 (verskil van 622)',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato sê 84 321 − 37 648 is ongeveer 50 000. Is haar skatting redelik?\n' +
        'Rond albei getalle af na die naaste 1 000 en verduidelik of 50 000 ʼn goeie skatting is.',
      answer:
        'Stap 1: Rond 84 321 af na die naaste 1 000.\n' +
        '  Honderde-syfer is 3 (minder as 5) → rond af → 84 000\n\n' +
        'Stap 2: Rond 37 648 af na die naaste 1 000.\n' +
        '  Honderde-syfer is 6 (5 of meer) → rond op → 38 000\n\n' +
        'Stap 3: Skatting: 84 000 − 38 000 = 46 000\n\n' +
        'Lerato se skatting van 50 000 is NIE redelik nie.\n' +
        'ʼn Beter skatting is 46 000.\n' +
        'Die verskil tussen 50 000 en 46 000 is 4 000 — dit is te groot vir ʼn goeie skatting.',
    },

    // ── Afdeling 4: Inverse Bewerkings en Antwoorde Nagaan ───────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken 34 567 + 28 914 en skryf die inverse aftrekking om jou antwoord na te gaan.\n\n' +
        'a) Bereken: 34 567 + 28 914\n' +
        'b) Skryf en bereken die inverse nagaan: jou antwoord − 28 914',
      parts: [
        {
          label: 'a) Antwoord:',
          correctAnswer: '63481',
          explanation:
            '34 567 + 28 914 = 63 481\n\n' +
            '• Ene: 7 + 4 = 11 → skryf 1, dra 1 oor\n' +
            '• Tiene: 6 + 1 + 1 (oorgedra) = 8\n' +
            '• Honderde: 5 + 9 = 14 → skryf 4, dra 1 oor\n' +
            '• Duisende: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
            '• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\n' +
            'Antwoord: 63 481',
        },
        {
          label: 'b) Inverse nagaan (63 481 − 28 914 = ?):',
          correctAnswer: '34567',
          explanation:
            '63 481 − 28 914 = 34 567 ✓\n\n' +
            'Dit stem ooreen met die eerste getal in die oorspronklike optelling,\n' +
            'dus is die antwoord 63 481 bevestig korrek.\n\n' +
            'Inverse reël: as A + B = C, dan is C − B = A.',
        },
      ],
      answer: 'a) 63 481\nb) 63 481 − 28 914 = 34 567 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken 72 000 − 38 456 en gaan na met die inverse bewerking. Wys albei berekeninge.\n\n' +
        'a) Bereken: 72 000 − 38 456\n' +
        'b) Skryf en bereken die inverse nagaan: jou antwoord + 38 456',
      parts: [
        {
          label: 'a) Antwoord:',
          correctAnswer: '33544',
          explanation:
            '72 000 − 38 456 = 33 544\n\n' +
            '• Ene: 0 − 6 → Tiene en Honderde is albei 0, leen van Duisende.\n' +
            '  Duisende: 2 → 1 (geleen aan Honderde). Honderde: 0 → 10.\n' +
            '  Honderde: 10 → 9 (geleen aan Tiene). Tiene: 0 → 10.\n' +
            '  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 6 = 4\n' +
            '• Tiene: 9 − 5 = 4\n' +
            '• Honderde: 9 − 4 = 5\n' +
            '• Duisende: 1 − 8 → kan nie aftrek nie. Leen van Tienduisende.\n' +
            '  Tienduisende: 7 → 6. Duisende: 1 → 11. 11 − 8 = 3\n' +
            '• Tienduisende: 6 − 3 = 3\n\n' +
            'Antwoord: 33 544',
        },
        {
          label: 'b) Inverse nagaan (33 544 + 38 456 = ?):',
          correctAnswer: '72000',
          explanation:
            '33 544 + 38 456 = 72 000 ✓\n\n' +
            'Dit stem ooreen met die oorspronklike beginggetal,\n' +
            'dus is die antwoord 33 544 bevestig korrek.\n\n' +
            'Inverse reël: as A − B = C, dan is C + B = A.',
        },
      ],
      answer: 'a) 33 544\nb) 33 544 + 38 456 = 72 000 ✓',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Die antwoord op ʼn optelsom is 91 234. Een van die getalle is 47 865. Wat is die ander getal?\n' +
        'Gebruik inverse bewerkings om dit te vind en wys jou werk.\n\n' +
        'a) Gebruik aftrekking as die inverse bewerking: 91 234 − 47 865\n' +
        'b) Gaan jou antwoord na: jou antwoord + 47 865',
      parts: [
        {
          label: 'a) Die ander getal:',
          correctAnswer: '43369',
          explanation:
            '91 234 − 47 865 = 43 369\n\n' +
            '• Ene: 4 − 5 → leen van Tiene. Tiene: 3 → 2. Ene: 14 − 5 = 9\n' +
            '• Tiene: 2 − 6 → leen van Honderde. Honderde: 2 → 1. Tiene: 12 − 6 = 6\n' +
            '• Honderde: 1 − 8 → leen van Duisende. Duisende: 1 → 0. Honderde: 11 − 8 = 3\n' +
            '• Duisende: 0 − 7 → leen van Tienduisende. Tienduisende: 9 → 8. Duisende: 10 − 7 = 3\n' +
            '• Tienduisende: 8 − 4 = 4\n\n' +
            'Die ander getal is 43 369',
        },
        {
          label: 'b) Nagaan (43 369 + 47 865 = ?):',
          correctAnswer: '91234',
          explanation:
            '43 369 + 47 865 = 91 234 ✓\n\n' +
            'Dit stem ooreen met die totaal wat in die vraag gegee is,\n' +
            'dus is 43 369 bevestig as die ander getal.',
        },
      ],
      answer: 'a) Ander getal: 43 369\nb) Nagaan: 43 369 + 47 865 = 91 234 ✓',
    },

    // ── Afdeling 5: Hoofrekene ────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken in jou kop:\n45 000 + 38 000',
      correctAnswer: '83000',
      explanation:
        'Gebruik plekwaardedenke met duisende:\n' +
        '45 + 38 = 83\n' +
        'Dus is 45 000 + 38 000 = 83 000',
      answer: '83 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken in jou kop:\n\n' +
        'a) 70 000 − 43 000\n' +
        'b) 56 000 + 37 000\n' +
        'c) 90 000 − 54 000',
      parts: [
        {
          label: 'a)',
          correctAnswer: '27000',
          explanation:
            '70 000 − 43 000 = 27 000\n\n' +
            'Dink: 70 − 43 = 27, dus is 70 000 − 43 000 = 27 000',
        },
        {
          label: 'b)',
          correctAnswer: '93000',
          explanation:
            '56 000 + 37 000 = 93 000\n\n' +
            'Dink: 56 + 37 = 93, dus is 56 000 + 37 000 = 93 000',
        },
        {
          label: 'c)',
          correctAnswer: '36000',
          explanation:
            '90 000 − 54 000 = 36 000\n\n' +
            'Dink: 90 − 54 = 36, dus is 90 000 − 54 000 = 36 000',
        },
      ],
      answer: 'a) 27 000\nb) 93 000\nc) 36 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Bereken in jou kop: 67 000 + 28 000\na) Wat is die antwoord?',
      correctAnswer: '95000',
      explanation:
        '67 000 + 28 000 = 95 000\n\n' +
        'Opgebreek in dele:\n' +
        '• 60 000 + 20 000 = 80 000\n' +
        '• 7 000 + 8 000 = 15 000\n' +
        '• 80 000 + 15 000 = 95 000',
      answer: '95 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Vir die berekening 67 000 + 28 000 = 95 000:\n' +
        'b) Verduidelik die hoofrekene-strategie wat jy gebruik het om die antwoord uit te werk.',
      answer:
        'Enige geldige hoofrekene-strategie word aanvaar. Voorbeelde:\n\n' +
        '• Breek op volgens plekwaarde: 60 000 + 20 000 = 80 000, dan 7 000 + 8 000 = 15 000, dan 80 000 + 15 000 = 95 000\n' +
        '• Rond af en pas aan: 67 000 + 30 000 = 97 000, trek dan 2 000 af → 95 000\n' +
        '• Tel aan: begin by 67 000, tel 3 000 by om by 70 000 te kom, tel dan 25 000 by → 95 000',
    },

    // ── Afdeling 6: Geld en Woordprobleme ────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'ʼn Skool het R34 750 van skoolgeld en R18 925 van ʼn fondsinsameling ontvang.\n' +
        'Wat is die totale bedrag wat ingesamel is?',
      correctAnswers: ['53675', 'r53675'],
      correctAnswer: '53675',
      explanation:
        'R34 750 + R18 925 = R53 675\n\n' +
        '• Ene: 0 + 5 = 5\n' +
        '• Tiene: 5 + 2 = 7\n' +
        '• Honderde: 7 + 9 = 16 → skryf 6, dra 1 oor\n' +
        '• Duisende: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
        '• Tienduisende: 3 + 1 + 1 (oorgedra) = 5\n\n' +
        'Totaal ingesamel = R53 675',
      answer: 'R53 675',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Motor kos R87 500. Thabo het R49 375 gespaar.\n\n' +
        'a) Hoeveel meer benodig Thabo om die motor te koop?\n' +
        'b) As hy R3 250 per maand spaar, hoeveel maande sal dit hom neem om die oorblywende bedrag te spaar?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['38125', 'r38125'],
          correctAnswer: '38125',
          explanation:
            'Bedrag nog benodig = R87 500 − R49 375\n\n' +
            '• Ene: 0 − 5 → kan nie aftrek nie. Tiene is 0, leen van Honderde.\n' +
            '  Honderde: 5 → 4 (geleen aan Tiene). Tiene: 0 → 10.\n' +
            '  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 5 = 5\n' +
            '• Tiene: 9 − 7 = 2\n' +
            '• Honderde: 4 − 3 = 1\n' +
            '• Duisende: 7 − 9 → kan nie aftrek nie. Leen van Tienduisende.\n' +
            '  Tienduisende: 8 → 7. Duisende: 7 → 17. 17 − 9 = 8\n' +
            '• Tienduisende: 7 − 4 = 3\n\n' +
            'Thabo benodig nog R38 125',
        },
        {
          label: 'b)',
          correctAnswers: ['12', '12months'],
          correctAnswer: '12',
          explanation:
            'Maande benodig = R38 125 ÷ R3 250 = 11,73...\n\n' +
            'Aangesien hy nie ʼn breukdeel van ʼn maand kan spaar nie, rond op na die volgende volle maand.\n' +
            '• 11 maande: 11 × R3 250 = R35 750 — nie genoeg nie\n' +
            '• 12 maande: 12 × R3 250 = R39 000 — genoeg ✓\n\n' +
            'Thabo sal 12 maande nodig hê.',
        },
      ],
      answer: 'a) R38 125\nb) 12 maande',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato verdien R23 450 per maand. Haar maandelikse uitgawes is R18 675.\n\n' +
        'a) Hoeveel spaar sy elke maand?\n' +
        'b) Hoeveel sal sy na 6 maande gespaar het?\n' +
        'c) Sy wil ʼn skootrekenaar koop wat R12 999 kos. Na hoeveel maande kan sy dit bekostig?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['4775', 'r4775'],
          correctAnswer: '4775',
          explanation:
            'Maandelikse besparing = R23 450 − R18 675\n\n' +
            '• Ene: 0 − 5 → leen van Tiene. Tiene: 5 → 4. Ene: 0 → 10. 10 − 5 = 5\n' +
            '• Tiene: 4 − 7 → leen van Honderde. Honderde: 4 → 3. Tiene: 4 → 14. 14 − 7 = 7\n' +
            '• Honderde: 3 − 6 → leen van Duisende. Duisende: 3 → 2. Honderde: 3 → 13. 13 − 6 = 7\n' +
            '• Duisende: 2 − 8 → leen van Tienduisende. Tienduisende: 2 → 1. Duisende: 2 → 12. 12 − 8 = 4\n' +
            '• Tienduisende: 1 − 1 = 0\n\n' +
            'Lerato spaar R4 775 per maand',
        },
        {
          label: 'b)',
          correctAnswers: ['28650', 'r28650'],
          correctAnswer: '28650',
          explanation:
            'Besparing na 6 maande = R4 775 × 6\n\n' +
            '• 4 000 × 6 = 24 000\n' +
            '• 700 × 6 = 4 200\n' +
            '• 75 × 6 = 450\n' +
            '• 24 000 + 4 200 + 450 = 28 650\n\n' +
            'Lerato sal R28 650 gespaar het na 6 maande',
        },
        {
          label: 'c)',
          correctAnswers: ['3', '3months'],
          correctAnswer: '3',
          explanation:
            'Maande benodig om R12 999 te bekostig:\n\n' +
            '• 1 maand: R4 775 — nie genoeg nie\n' +
            '• 2 maande: R4 775 × 2 = R9 550 — nie genoeg nie\n' +
            '• 3 maande: R4 775 × 3 = R14 325 — R14 325 > R12 999 ✓\n\n' +
            'Lerato kan die skootrekenaar na 3 maande bekostig.',
        },
      ],
      answer: 'a) R4 775\nb) R28 650\nc) 3 maande',
    },

  ],

  scoreMessages: [
    { minScore: 31, message: 'Uitstekend! Volpunte — jy het al ses afdelings van optelling en aftrekking bemeester.' },
    { minScore: 25, message: 'Uitstekende werk! Jy het ʼn sterk begrip. Hersien enige vrae wat jy verkeerd gehad het.' },
    { minScore: 16, message: 'Goeie poging! Gaan terug en oefen die afdelings waar jy punte verloor het.' },
    { minScore: 0, message: 'Hou aan oefen! Werk versigtig deur die uitgewerkte voorbeelde stap vir stap en probeer weer.' },
  ],
}
