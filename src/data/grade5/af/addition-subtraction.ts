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
          correctAnswers: ['12', '12maande'],
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
          correctAnswers: ['3', '3maande'],
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

  // ─── OEFENSTELLE (3 x 20 eksamen-styl vrae) ───────────────────────────────────
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Kolomoptelling-vlotheid | 4-7 Kolomaftrekking-vlotheid |
    // 8-11 Woordprobleme | 12-14 Skatting & redelikheid |
    // 15-17 Foutopsporing & regverdiging | 18-19 Multi-stap & inverse nagaan
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n23 415 + 16 283', correctAnswer: '39698', correctAnswers: ['39698', '39 698'], explanation: '23 415 + 16 283 = 39 698\n\nGeen oordra is nodig in enige kolom nie:\n• Ene: 5 + 3 = 8\n• Tiene: 1 + 8 = 9\n• Honderde: 4 + 2 = 6\n• Duisende: 3 + 6 = 9\n• Tienduisende: 2 + 1 = 3\n\nAntwoord: 39 698', answer: '39 698' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken en wys jou oordra:\n34 816 + 21 947', correctAnswer: '56763', correctAnswers: ['56763', '56 763'], explanation: '34 816 + 21 947 = 56 763\n\n• Ene: 6 + 7 = 13 → skryf 3, dra 1 oor\n• Tiene: 1 + 4 + 1 (oorgedra) = 6\n• Honderde: 8 + 9 = 17 → skryf 7, dra 1 oor\n• Duisende: 4 + 1 + 1 (oorgedra) = 6\n• Tienduisende: 3 + 2 = 5\n\nAntwoord: 56 763', answer: '56 763' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken, en wys elke oorgedraagde syfer:\n58 467 + 26 875', correctAnswer: '85342', correctAnswers: ['85342', '85 342'], explanation: '58 467 + 26 875 = 85 342\n\n• Ene: 7 + 5 = 12 → skryf 2, dra 1 oor\n• Tiene: 6 + 7 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Honderde: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Duisende: 8 + 6 + 1 (oorgedra) = 15 → skryf 5, dra 1 oor\n• Tienduisende: 5 + 2 + 1 (oorgedra) = 8\n\nAntwoord: 85 342', answer: '85 342' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n38 946 + 27 485 + 16 238', correctAnswer: '82669', correctAnswers: ['82669', '82 669'], explanation: '38 946 + 27 485 + 16 238 = 82 669\n\nTel eers die ene-kolom vir al drie getalle op, dan tiene, ensovoorts, en dra oor waar nodig:\n• Ene: 6 + 5 + 8 = 19 → skryf 9, dra 1 oor\n• Tiene: 4 + 8 + 3 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Honderde: 9 + 4 + 2 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Duisende: 8 + 7 + 6 + 1 (oorgedra) = 22 → skryf 2, dra 2 oor\n• Tienduisende: 3 + 2 + 1 + 2 (oorgedra) = 8\n\nAntwoord: 82 669', answer: '82 669' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n67 845 − 34 521', correctAnswer: '33324', correctAnswers: ['33324', '33 324'], explanation: '67 845 − 34 521 = 33 324\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 5 − 1 = 4\n• Tiene: 4 − 2 = 2\n• Honderde: 8 − 5 = 3\n• Duisende: 7 − 4 = 3\n• Tienduisende: 6 − 3 = 3\n\nAntwoord: 33 324', answer: '33 324' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'ʼn Wildreservaat het 58 732 hektaar grond. 23 411 hektaar word opsy gesit as ʼn bewaringsone waar besoekers nie mag ingaan nie. Hoeveel hektaar is oop vir besoekers?', correctAnswer: '35321', correctAnswers: ['35321', '35 321'], explanation: '58 732 − 23 411 = 35 321\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 2 − 1 = 1\n• Tiene: 3 − 1 = 2\n• Honderde: 7 − 4 = 3\n• Duisende: 8 − 3 = 5\n• Tienduisende: 5 − 2 = 3\n\n35 321 hektaar is oop vir besoekers.', answer: '35 321' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken en wys jou leen:\n56 382 − 23 149', correctAnswer: '33233', correctAnswers: ['33233', '33 233'], explanation: '56 382 − 23 149 = 33 233\n\n• Ene: 2 − 9 → kan nie aftrek nie. Leen van Tiene.\n  Tiene: 8 → 7. Ene: 2 → 12. 12 − 9 = 3\n• Tiene: 7 − 4 = 3\n• Honderde: 3 − 1 = 2\n• Duisende: 6 − 3 = 3\n• Tienduisende: 5 − 2 = 3\n\nAntwoord: 33 233', answer: '33 233' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken en wys jou leen deur die nulle:\n80 000 − 47 368', correctAnswer: '32632', correctAnswers: ['32632', '32 632'], explanation: '80 000 − 47 368 = 32 632\n\n• Ene: 0 − 8 → Tiene, Honderde en Duisende is almal 0, dus leen ons heeltemal van Tienduisende af.\n  Tienduisende: 8 → 7. Duisende: 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 0 → 10.\n  Honderde: 10 → 9 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 8 = 2\n• Tiene: 9 − 6 = 3\n• Honderde: 9 − 3 = 6\n• Duisende: 9 − 7 = 2\n• Tienduisende: 7 − 4 = 3\n\nAntwoord: 32 632', answer: '32 632' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Munisipaliteit het R50 200 vir ʼn parkopgradering begroot. Tot dusver is R28 456 spandeer. Hoeveel van die begroting is nog nie spandeer nie?', correctAnswer: '21744', correctAnswers: ['21744', '21 744'], explanation: 'R50 200 − R28 456 = R21 744\n\n• Ene: 0 − 6 → Tiene is ook 0, leen eers van Honderde.\n  Honderde: 2 → 1 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 6 = 4\n• Tiene: 9 − 5 = 4\n• Honderde: 1 − 4 → kan nie aftrek nie. Leen van Duisende.\n  Duisende: 0 → leen eers van Tienduisende: TD 5 → 4, D 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 1 → 11. 11 − 4 = 7\n• Duisende: 9 − 8 = 1\n• Tienduisende: 4 − 2 = 2\n\nR21 744 van die begroting is nog nie spandeer nie.', answer: 'R21 744' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Gemeenskapsaal verhuur stoele. Dit het 18 450 plastiekstoele en 23 670 houtstoele. Hoeveel stoele het dit altesaam?', correctAnswer: '42120', correctAnswers: ['42120', '42 120'], explanation: '18 450 + 23 670 = 42 120\n\n"Altesaam" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 5 + 7 = 12 → skryf 2, dra 1 oor\n• Honderde: 4 + 6 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Duisende: 8 + 3 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Tienduisende: 1 + 2 + 1 (oorgedra) = 4\n\nDie saal het 42 120 stoele altesaam.', answer: '42 120' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Afleweringsroete is 56 000 m lank. ʼn Bestuurder het reeds 38 450 m gery. Hoeveel meter is nog oor om te ry?', correctAnswer: '17550', correctAnswers: ['17550', '17 550'], explanation: '56 000 − 38 450 = 17 550\n\n"Hoeveel meter is nog oor" vertel ons om af te trek.\n• Ene: 0 − 0 = 0\n• Tiene: 0 − 5 → leen deur die nulle van Honderde en Duisende.\n  Deur die kettingleen te volg: Tiene word 10 − 5 = 5\n• Honderde: 9 − 4 = 5\n• Duisende: 5 − 8 → leen van Tienduisende. Tienduisende: 6 → 5. Duisende: 15 − 8 = 7\n• Tienduisende: 5 − 3 = 2\n\nDie bestuurder het nog 17 550 m oor om te ry.', answer: '17 550' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Skoolregister toon 14 280 leerders geregistreer regoor die distrik in Kwartaal 1, en 9 650 nuwe leerders wat in Kwartaal 2 geregistreer het. Hoeveel leerders was in totaal geregistreer na Kwartaal 2?', correctAnswer: '23930', correctAnswers: ['23930', '23 930'], explanation: '14 280 + 9 650 = 23 930\n\n"In totaal" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 8 + 5 = 13 → skryf 3, dra 1 oor\n• Honderde: 2 + 6 + 1 (oorgedra) = 9\n• Duisende: 4 + 9 = 13 → skryf 3, dra 1 oor\n• Tienduisende: 1 + 0 + 1 (oorgedra) = 2\n\nTotale leerders geregistreer = 23 930', answer: '23 930' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Pakhuis begin met 32 500 blikke verf in voorraad. Dit ontvang ʼn aflewering van nog 18 750 blikke, en verkoop dan 21 300 blikke aan winkels. Hoeveel blikke is oor in voorraad?', correctAnswer: '29950', correctAnswers: ['29950', '29 950'], explanation: 'Stap 1: Tel die aflewering by die beginvoorraad.\n32 500 + 18 750 = 51 250\n\nStap 2: Trek die verkoopte blikke af.\n51 250 − 21 300 = 29 950\n\nHierdie probleem benodig eers optelling (voorraad neem toe) en dan aftrekking (voorraad neem af).\nBlikke oor in voorraad = 29 950', answer: '29 950' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat eers: rond 47 250 en 31 680 af na die naaste 1 000 en tel die afgeronde getalle op om ʼn skatting vir 47 250 + 31 680 te kry.', correctAnswer: '79000', correctAnswers: ['79000', '79 000', '47000+32000=79000'], explanation: '47 250: honderde-syfer is 2 (minder as 5) → rond af → 47 000\n31 680: honderde-syfer is 6 (5 of meer) → rond op → 32 000\n\nSkatting: 47 000 + 32 000 = 79 000\n(Die presiese antwoord, 47 250 + 31 680 = 78 930, is baie naby aan hierdie skatting.)', answer: '79 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Boer skat 68 420 − 24 950 deur albei getalle eers na die naaste 1 000 af te rond. Hy bereken die presiese antwoord as 43 470. Is hierdie presiese antwoord redelik? Rond albei getalle af na die naaste 1 000, vind die skatting, en sê ja of nee.', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: '68 420: honderde-syfer is 4 (minder as 5) → rond af → 68 000\n24 950: honderde-syfer is 9 (5 of meer) → rond op → 25 000\n\nSkatting: 68 000 − 25 000 = 43 000\n\nDie presiese antwoord van 43 470 is slegs 470 van die skatting van 43 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle, dus ja, 43 470 is redelik.', answer: 'Ja' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Winkeleienaar sê: "Ek het 62 480 + 34 500 bereken en 96 980 gekry, maar toe ek albei getalle na die naaste 10 000 afgerond het, het ek ʼn skatting van slegs 90 000 gekry — dis amper 7 000 se verskil, dus dink ek ek het ʼn fout gemaak." Rond albei getalle af na die naaste 10 000, werk die skatting uit, en verduidelik of die winkeleienaar reg is om bekommerd te wees.', answer: '62 480 afgerond na die naaste 10 000 is 60 000 (duisende-syfer is 2, minder as 5, rond af).\n34 500 afgerond na die naaste 10 000 is 30 000 (duisende-syfer is 4, minder as 5, rond af).\n\nSkatting: 60 000 + 30 000 = 90 000\n\nDie winkeleienaar hoef nie bekommerd te wees nie. Afronding na die naaste 10 000 is ʼn baie growwe skatting — elke getal kan tot 5 000 verskil voor afronding, dus is ʼn gaping van ʼn paar duisend tussen die skatting en die presiese antwoord heeltemal normaal en beteken nie ʼn fout is gemaak nie. Kontroleer: 62 480 + 34 500 = 96 980, wat inderdaad naby genoeg aan 90 000 is gegewe hoe grof hierdie skatting is.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder het 24 567 + 18 756 so uitgewerk:\n\nTD D H T E\n  2  4 5 6 7\n+ 1  8 7 5 6\n———————————\n  4  2 3 2 3\n\nDie leerder het 42 323 as die finale antwoord neergeskryf, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 24 567 + 18 756 = 43 323.\n\nWerk kolom vir kolom:\n• Ene: 7 + 6 = 13 → skryf 3, dra 1 oor\n• Tiene: 6 + 5 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Honderde: 5 + 7 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Duisende: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Tienduisende: 2 + 1 + 1 (oorgedra) = 4\n\nDie leerder se fout: hulle het vergeet om die 1 van die duisende-kolom na die tienduisende-kolom oor te dra. In die duisende-kolom is 4 + 8 + 1 (oorgedra van honderde) = 13, wat ʼn oordra van 1 na die tienduisende-kolom moet gee, wat dit 2 + 1 + 1 = 4 maak, nie net 2 + 1 = 3 soos die leerder geskryf het nie. Dit is ʼn klassieke "vergeet-die-oordra"-fout.\n\nKorrekte antwoord: 43 323' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Stadion verkoop kaartjies in drie prysklasse oor ʼn naweek: 24 500 algemene kaartjies, 18 700 premium-kaartjies, en 9 800 VIP-kaartjies. Hoeveel kaartjies is altesaam verkoop?', correctAnswer: '53000', correctAnswers: ['53000', '53 000'], explanation: '24 500 + 18 700 + 9 800 = 53 000\n\n• Ene: 0 + 0 + 0 = 0\n• Tiene: 0 + 0 + 0 = 0\n• Honderde: 5 + 7 + 8 = 20 → skryf 0, dra 2 oor\n• Duisende: 4 + 8 + 9 + 2 (oorgedra) = 23 → skryf 3, dra 2 oor\n• Tienduisende: 2 + 1 + 0 + 2 (oorgedra) = 5\n\nTotale kaartjies verkoop = 53 000', answer: '53 000' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Die stadion uit die vorige vraag het altesaam 53 000 kaartjies oor die naweek verkoop. 16 250 van daardie kaartjies was vir die Saterdagwedstryd. Hoeveel kaartjies is vir die Sondagwedstryd verkoop?', correctAnswer: '36750', correctAnswers: ['36750', '36 750'], explanation: '53 000 − 16 250 = 36 750\n\nLeen deur die nulle: Ene 0 − 0 = 0, Tiene leen deur die ketting om 10 − 5 = 5 te gee, Honderde word 9 − 2 = 7, Duisende leen van Tienduisende om 12 − 6 = 6 te gee, Tienduisende 4 − 1 = 3.\n\nSondag-kaartjies verkoop = 36 750', answer: '36 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Gebruik jou antwoorde van die vorige vraag (24 500 + 18 700 + 9 800 = 53 000 totale kaartjies, en 53 000 − 16 250 = 36 750 Sondag-kaartjies), en gaan na dat 36 750 korrek is deur die inverse bewerking te gebruik. Wys die nagaan en verduidelik in woorde waarom dit die antwoord bevestig.', answer: 'Om 53 000 − 16 250 = 36 750 met die inverse bewerking na te gaan, tel die antwoord terug by die getal wat afgetrek is:\n\n36 750 + 16 250 = 53 000\n\nWerk: Ene 0+0=0, Tiene 5+5=10 → skryf 0 dra 1 oor, Honderde 7+2+1=10 → skryf 0 dra 1 oor, Duisende 6+6+1=13 → skryf 3 dra 1 oor, Tienduisende 3+1+1=5.\n\nResultaat: 53 000 ✓ — dit stem ooreen met die totale aantal kaartjies wat ons mee begin het.\n\nHierdie nagaan bevestig dat die antwoord korrek is omdat optelling en aftrekking inverse bewerkings is: as A − B = C, dan moet C + B weer gelyk wees aan A. Aangesien 16 250 terugtel by 36 750 presies 53 000 gee, was ons aftrekking korrek uitgevoer, sonder enige rekenfoute in die leen.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het kolomoptelling, aftrekking, woordprobleme en redenering met groot getalle bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n31 524 + 42 163', correctAnswer: '73687', correctAnswers: ['73687', '73 687'], explanation: '31 524 + 42 163 = 73 687\n\nGeen oordra is nodig in enige kolom nie:\n• Ene: 4 + 3 = 7\n• Tiene: 2 + 6 = 8\n• Honderde: 5 + 1 = 6\n• Duisende: 1 + 2 = 3\n• Tienduisende: 3 + 4 = 7\n\nAntwoord: 73 687', answer: '73 687' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken en wys jou oordra:\n37 826 + 41 945', correctAnswer: '79771', correctAnswers: ['79771', '79 771'], explanation: '37 826 + 41 945 = 79 771\n\n• Ene: 6 + 5 = 11 → skryf 1, dra 1 oor\n• Tiene: 2 + 4 + 1 (oorgedra) = 7\n• Honderde: 8 + 9 = 17 → skryf 7, dra 1 oor\n• Duisende: 7 + 1 + 1 (oorgedra) = 9\n• Tienduisende: 3 + 4 = 7\n\nAntwoord: 79 771', answer: '79 771' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken, en wys elke oorgedraagde syfer:\n36 485 + 28 947', correctAnswer: '65432', correctAnswers: ['65432', '65 432'], explanation: '36 485 + 28 947 = 65 432\n\n• Ene: 5 + 7 = 12 → skryf 2, dra 1 oor\n• Tiene: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Honderde: 4 + 9 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Duisende: 6 + 8 + 1 (oorgedra) = 15 → skryf 5, dra 1 oor\n• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\nAntwoord: 65 432', answer: '65 432' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n27 364 + 18 596 + 31 708', correctAnswer: '77668', correctAnswers: ['77668', '77 668'], explanation: '27 364 + 18 596 + 31 708 = 77 668\n\n• Ene: 4 + 6 + 8 = 18 → skryf 8, dra 1 oor\n• Tiene: 6 + 9 + 0 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Honderde: 3 + 5 + 7 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Duisende: 7 + 8 + 1 + 1 (oorgedra) = 17 → skryf 7, dra 1 oor\n• Tienduisende: 2 + 1 + 3 + 1 (oorgedra) = 7\n\nAntwoord: 77 668', answer: '77 668' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n89 654 − 56 320', correctAnswer: '33334', correctAnswers: ['33334', '33 334'], explanation: '89 654 − 56 320 = 33 334\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 4 − 0 = 4\n• Tiene: 5 − 2 = 3\n• Honderde: 6 − 3 = 3\n• Duisende: 9 − 6 = 3\n• Tienduisende: 8 − 5 = 3\n\nAntwoord: 33 334', answer: '33 334' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'ʼn Stadion het 76 543 sitplekke. 41 232 kaartjies is vir Saterdag se wedstryd verkoop. Hoeveel sitplekke is nog beskikbaar?', correctAnswer: '35311', correctAnswers: ['35311', '35 311'], explanation: '76 543 − 41 232 = 35 311\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 3 − 2 = 1\n• Tiene: 4 − 3 = 1\n• Honderde: 5 − 2 = 3\n• Duisende: 6 − 1 = 5\n• Tienduisende: 7 − 4 = 3\n\n35 311 sitplekke is nog beskikbaar.', answer: '35 311' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken en wys jou leen:\n64 183 − 21 962', correctAnswer: '42221', correctAnswers: ['42221', '42 221'], explanation: '64 183 − 21 962 = 42 221\n\n• Ene: 3 − 2 = 1\n• Tiene: 8 − 6 = 2\n• Honderde: 1 − 9 → kan nie aftrek nie. Leen van Duisende.\n  Duisende: 4 → 3. Honderde: 1 → 11. 11 − 9 = 2\n• Duisende: 3 − 1 = 2\n• Tienduisende: 6 − 2 = 4\n\nAntwoord: 42 221', answer: '42 221' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken en wys jou leen deur die nulle:\n70 000 − 52 847', correctAnswer: '17153', correctAnswers: ['17153', '17 153'], explanation: '70 000 − 52 847 = 17 153\n\n• Ene: 0 − 7 → Tiene, Honderde en Duisende is almal 0, dus leen ons heeltemal van Tienduisende af.\n  Tienduisende: 7 → 6. Duisende: 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 0 → 10.\n  Honderde: 10 → 9 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 7 = 3\n• Tiene: 9 − 4 = 5\n• Honderde: 9 − 8 = 1\n• Duisende: 9 − 2 = 7\n• Tienduisende: 6 − 5 = 1\n\nAntwoord: 17 153', answer: '17 153' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder sê: "40 100 − 19 256 moet ongeveer 21 000 wees, want 40 000 − 19 000 = 21 000." Bereken die presiese antwoord met die kolommetode (en wys jou leen deur die nulle), en verduidelik of die leerder se skatting redelik is.', answer: '40 100 − 19 256 = 20 844\n\n• Ene: 0 − 6 → Tiene is ook 0, leen eers van Honderde.\n  Honderde: 1 → 0 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 6 = 4\n• Tiene: 9 − 5 = 4\n• Honderde: 0 − 2 → kan nie aftrek nie. Leen van Duisende.\n  Duisende: 0 → leen eers van Tienduisende: TD 4 → 3, D 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 10 − 2 = 8\n• Duisende: 9 − 9 = 0\n• Tienduisende: 3 − 1 = 2\n\nPresiese antwoord: 20 844\n\nDie leerder se skatting van 21 000 is redelik — die presiese antwoord van 20 844 is slegs 156 van die skatting af, wat baie klein is in vergelyking met die grootte van die getalle betrokke.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Skryfbehoeftewinkel het 26 800 penne en 19 450 potlode hierdie jaar verkoop. Hoeveel penne en potlode het die winkel altesaam verkoop?', correctAnswer: '46250', correctAnswers: ['46250', '46 250'], explanation: '26 800 + 19 450 = 46 250\n\n"Altesaam" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 0 + 5 = 5\n• Honderde: 8 + 4 = 12 → skryf 2, dra 1 oor\n• Duisende: 6 + 9 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Tienduisende: 2 + 1 + 1 (oorgedra) = 4\n\nDie winkel het 46 250 penne en potlode altesaam verkoop.', answer: '46 250' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fietsroete is 63 000 m lank. ʼn Fietsryer het reeds 27 840 m gery. Hoeveel meter het sy nog oor om te ry?', correctAnswer: '35160', correctAnswers: ['35160', '35 160'], explanation: '63 000 − 27 840 = 35 160\n\n"Hoeveel meter het sy nog oor" vertel ons om af te trek.\n• Ene: 0 − 0 = 0\n• Tiene: 0 − 4 → leen deur die nulle.\n  Deur die ketting te volg: Honderde en Tiene moet albei leen voordat Tiene aan Ene kan gee.\n  Tiene: 10 − 4 = 6\n• Honderde: 9 − 8 = 1\n• Duisende: 2 − 7 → leen van Tienduisende. Tienduisende: 6 → 5. Duisende: 12 − 7 = 5\n• Tienduisende: 5 − 2 = 3\n\nSy het nog 35 160 m oor om te ry.', answer: '35 160' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Konsert het 17 650 mense op Vrydag gehad en 8 420 meer mense op Saterdag. Hoeveel mense het in totaal oor die twee dae bygewoon?', correctAnswer: '26070', correctAnswers: ['26070', '26 070'], explanation: '17 650 + 8 420 = 26 070\n\n"In totaal" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 5 + 2 = 7\n• Honderde: 6 + 4 = 10 → skryf 0, dra 1 oor\n• Duisende: 7 + 8 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Tienduisende: 1 + 0 + 1 (oorgedra) = 2\n\nTotale bywoning = 26 070 mense', answer: '26 070' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Boekwinkel begin met 45 200 boeke in voorraad. Dit ontvang ʼn nuwe sending van 27 650 boeke, en verkoop dan 32 900 boeke tydens ʼn uitverkoping. Hoeveel boeke is oor in voorraad?', correctAnswer: '39950', correctAnswers: ['39950', '39 950'], explanation: 'Stap 1: Tel die sending by die beginvoorraad.\n45 200 + 27 650 = 72 850\n\nStap 2: Trek die verkoopte boeke af.\n72 850 − 32 900 = 39 950\n\nHierdie probleem benodig eers optelling (voorraad neem toe) en dan aftrekking (voorraad neem af).\nBoeke oor in voorraad = 39 950', answer: '39 950' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat eers: rond 52 680 en 36 420 af na die naaste 1 000 en tel die afgeronde getalle op om ʼn skatting vir 52 680 + 36 420 te kry.', correctAnswer: '89000', correctAnswers: ['89000', '89 000', '53000+36000=89000'], explanation: '52 680: honderde-syfer is 6 (5 of meer) → rond op → 53 000\n36 420: honderde-syfer is 4 (minder as 5) → rond af → 36 000\n\nSkatting: 53 000 + 36 000 = 89 000\n(Die presiese antwoord, 52 680 + 36 420 = 89 100, is baie naby aan hierdie skatting.)', answer: '89 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Vervoermaatskappy skat 74 600 − 38 250 deur albei getalle eers na die naaste 1 000 af te rond. ʼn Klerk bereken die presiese antwoord as 36 350. Is hierdie presiese antwoord redelik? Rond albei getalle af na die naaste 1 000, vind die skatting, en sê ja of nee.', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: '74 600: honderde-syfer is 6 (5 of meer) → rond op → 75 000\n38 250: honderde-syfer is 2 (minder as 5) → rond af → 38 000\n\nSkatting: 75 000 − 38 000 = 37 000\n\nDie presiese antwoord van 36 350 is slegs 650 van die skatting van 37 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle, dus ja, 36 350 is redelik.', answer: 'Ja' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder sê: "Ek het 45 999 + 19 500 uitgewerk en 65 499 gekry, maar toe ek albei getalle na die naaste 10 000 afgerond het, was my skatting slegs 70 000 — dis meer as 4 000 se verskil, dus moet my presiese antwoord verkeerd wees." Rond albei getalle af na die naaste 10 000, werk die skatting uit, en verduidelik of die leerder reg is om bekommerd te wees.', answer: '45 999 afgerond na die naaste 10 000 is 50 000 (duisende-syfer is 5, rond op).\n19 500 afgerond na die naaste 10 000 is 20 000 (duisende-syfer is 9, rond op).\n\nSkatting: 50 000 + 20 000 = 70 000\n\nDie leerder hoef nie bekommerd te wees nie. Afronding na die naaste 10 000 is ʼn baie growwe skatting — elke getal kan amper 5 000 verskil voor afronding, dus kan die skatting en presiese antwoord maklik ʼn paar duisend verskil sonder dat enige fout gemaak is. Kontroleer: 45 999 + 19 500 = 65 499, wat ʼn heeltemal redelike antwoord is gegewe hoe grof ʼn naaste-10 000-skatting is.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder het 60 423 − 28 156 so uitgewerk:\n\nTD D H T E\n  6  0 4 2 3\n−2  8 1 5 6\n———————————\n  3  2 2 6 7\n\nDie leerder het 32 267 as die finale antwoord neergeskryf, maar hulle werk toon ʼn fout in die leen. Doen die aftrekking korrek oor, verduidelik wat die leerder waarskynlik verkeerd gedoen het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 60 423 − 28 156 = 32 267.\n\nWerk kolom vir kolom:\n• Ene: 3 − 6 → kan nie aftrek nie. Leen van Tiene. Tiene: 2 → 1. Ene: 13 − 6 = 7\n• Tiene: 1 − 5 → kan nie aftrek nie. Leen van Honderde. Honderde: 4 → 3. Tiene: 11 − 5 = 6\n• Honderde: 3 − 1 = 2\n• Duisende: 0 − 8 → kan nie aftrek nie. Leen van Tienduisende. Tienduisende: 6 → 5. Duisende: 10 − 8 = 2\n• Tienduisende: 5 − 2 = 3\n\nInteressant genoeg stem die leerder se finale antwoord van 32 267 wel ooreen met die korrekte antwoord — maar ʼn leerder wat hierdie tipe fout maak, vergeet dikwels dat om van ʼn 0 (soos die Duisende-syfer hier) te leen, hulle eers verder links na die Tienduisende-kolom moet gaan voordat die Duisende-kolom enigiets aan die Honderde-kolom kan gee. Enige leerder wat hierdie stap oorslaan en net ʼn klein getal in Duisende neerskryf sonder om die Tienduisende-syfer behoorlik te verminder, sal die Tienduisende-syfer verkeerd kry. Kontroleer altyd: nadat jy deur ʼn nul geleen het, moet die syfer wat die 1 uitgeleen het presies met 1 verminder, en elke kolom tussenin moet 9 lees, nie 0 nie.\n\nKorrekte antwoord: 32 267' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Groothandelaar verkoop voorraad in drie lotte oor ʼn maand: 31 200 kg, 22 400 kg, en 13 600 kg. Hoeveel kilogram is altesaam verkoop?', correctAnswer: '67200', correctAnswers: ['67200', '67 200'], explanation: '31 200 + 22 400 + 13 600 = 67 200\n\n• Ene: 0 + 0 + 0 = 0\n• Tiene: 0 + 0 + 0 = 0\n• Honderde: 2 + 4 + 6 = 12 → skryf 2, dra 1 oor\n• Duisende: 1 + 2 + 3 + 1 (oorgedra) = 7\n• Tienduisende: 3 + 2 + 1 = 6\n\nTotale kilogram verkoop = 67 200', answer: '67 200' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Die groothandelaar uit die vorige vraag het altesaam 67 200 kg voorraad daardie maand verkoop. 24 350 kg van daardie voorraad is aan een groot kleinhandelketting verkoop. Hoeveel kilogram is aan ander, kleiner kliënte verkoop?', correctAnswer: '42850', correctAnswers: ['42850', '42 850'], explanation: '67 200 − 24 350 = 42 850\n\n• Ene: 0 − 0 = 0\n• Tiene: 0 − 5 → leen deur die nulle (Honderde is ook 0).\n  Deur die ketting te volg: Tiene word 10 − 5 = 5\n• Honderde: 1 − 3 → kan nie aftrek nie. Leen van Duisende. Duisende: 7 → 6. Honderde: 11 − 3 = 8\n• Duisende: 6 − 4 = 2\n• Tienduisende: 6 − 2 = 4\n\nAnder kliënte het 42 850 kg gekoop.', answer: '42 850' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Gebruik jou antwoorde van die vorige vraag (31 200 + 22 400 + 13 600 = 67 200 kg totaal, en 67 200 − 24 350 = 42 850 kg aan ander kliënte), en gaan na dat 42 850 korrek is deur die inverse bewerking te gebruik. Wys die nagaan en verduidelik in woorde waarom dit die antwoord bevestig.', answer: 'Om 67 200 − 24 350 = 42 850 met die inverse bewerking na te gaan, tel die antwoord terug by die getal wat afgetrek is:\n\n42 850 + 24 350 = 67 200\n\nWerk: Ene 0+0=0, Tiene 5+5=10 → skryf 0 dra 1 oor, Honderde 8+3+1=12 → skryf 2 dra 1 oor, Duisende 2+4+1=7, Tienduisende 4+2=6.\n\nResultaat: 67 200 ✓ — dit stem ooreen met die totale kilogram verkoop wat ons mee begin het.\n\nHierdie nagaan bevestig dat die antwoord korrek is omdat optelling en aftrekking inverse bewerkings is: as A − B = C, dan moet C + B weer gelyk wees aan A. Aangesien 24 350 terugtel by 42 850 presies 67 200 gee, was die aftrekking (en al die leen daarin) korrek uitgevoer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue kolomoptelling, aftrekking en woordprobleme met groot getalle hanteer.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n42 316 + 35 482', correctAnswer: '77798', correctAnswers: ['77798', '77 798'], explanation: '42 316 + 35 482 = 77 798\n\nGeen oordra is nodig in enige kolom nie:\n• Ene: 6 + 2 = 8\n• Tiene: 1 + 8 = 9\n• Honderde: 3 + 4 = 7\n• Duisende: 2 + 5 = 7\n• Tienduisende: 4 + 3 = 7\n\nAntwoord: 77 798', answer: '77 798' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken en wys jou oordra:\n53 164 + 22 748', correctAnswer: '75912', correctAnswers: ['75912', '75 912'], explanation: '53 164 + 22 748 = 75 912\n\n• Ene: 4 + 8 = 12 → skryf 2, dra 1 oor\n• Tiene: 6 + 4 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Honderde: 1 + 7 + 1 (oorgedra) = 9\n• Duisende: 3 + 2 = 5\n• Tienduisende: 5 + 2 = 7\n\nAntwoord: 75 912', answer: '75 912' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken, en wys elke oorgedraagde syfer:\n37 648 + 26 375', correctAnswer: '64023', correctAnswers: ['64023', '64 023'], explanation: '37 648 + 26 375 = 64 023\n\n• Ene: 8 + 5 = 13 → skryf 3, dra 1 oor\n• Tiene: 4 + 7 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Honderde: 6 + 3 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Duisende: 7 + 6 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\nAntwoord: 64 023', answer: '64 023' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n19 487 + 26 938 + 34 756', correctAnswer: '81181', correctAnswers: ['81181', '81 181'], explanation: '19 487 + 26 938 + 34 756 = 81 181\n\n• Ene: 7 + 8 + 6 = 21 → skryf 1, dra 2 oor\n• Tiene: 8 + 3 + 5 + 2 (oorgedra) = 18 → skryf 8, dra 1 oor\n• Honderde: 4 + 9 + 7 + 1 (oorgedra) = 21 → skryf 1, dra 2 oor\n• Duisende: 9 + 6 + 4 + 2 (oorgedra) = 21 → skryf 1, dra 2 oor\n• Tienduisende: 1 + 2 + 3 + 2 (oorgedra) = 8\n\nAntwoord: 81 181', answer: '81 181' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken met die kolommetode:\n95 463 − 42 150', correctAnswer: '53313', correctAnswers: ['53313', '53 313'], explanation: '95 463 − 42 150 = 53 313\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 3 − 0 = 3\n• Tiene: 6 − 5 = 1\n• Honderde: 4 − 1 = 3\n• Duisende: 5 − 2 = 3\n• Tienduisende: 9 − 4 = 5\n\nAntwoord: 53 313', answer: '53 313' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'ʼn Drukkerymaatskappy het 83 521 vel papier in voorraad. Dit gebruik 52 310 vel om ʼn lot skoolhandboeke te druk. Hoeveel vel is oor in voorraad?', correctAnswer: '31211', correctAnswers: ['31211', '31 211'], explanation: '83 521 − 52 310 = 31 211\n\nGeen leen is nodig in enige kolom nie:\n• Ene: 1 − 0 = 1\n• Tiene: 2 − 1 = 1\n• Honderde: 5 − 3 = 2\n• Duisende: 3 − 2 = 1\n• Tienduisende: 8 − 5 = 3\n\n31 211 vel is oor in voorraad.', answer: '31 211' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Bereken en wys jou leen:\n63 572 − 31 249', correctAnswer: '32323', correctAnswers: ['32323', '32 323'], explanation: '63 572 − 31 249 = 32 323\n\n• Ene: 2 − 9 → kan nie aftrek nie. Leen van Tiene.\n  Tiene: 7 → 6. Ene: 2 → 12. 12 − 9 = 3\n• Tiene: 6 − 4 = 2\n• Honderde: 5 − 2 = 3\n• Duisende: 3 − 1 = 2\n• Tienduisende: 6 − 3 = 3\n\nAntwoord: 32 323', answer: '32 323' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken en wys jou leen deur die nulle:\n60 000 − 38 475', correctAnswer: '21525', correctAnswers: ['21525', '21 525'], explanation: '60 000 − 38 475 = 21 525\n\n• Ene: 0 − 5 → Tiene, Honderde en Duisende is almal 0, dus leen ons heeltemal van Tienduisende af.\n  Tienduisende: 6 → 5. Duisende: 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 0 → 10.\n  Honderde: 10 → 9 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 5 = 5\n• Tiene: 9 − 7 = 2\n• Honderde: 9 − 4 = 5\n• Duisende: 9 − 8 = 1\n• Tienduisende: 5 − 3 = 2\n\nAntwoord: 21 525', answer: '21 525' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder sê: "30 500 − 14 762 moet ongeveer 16 000 wees, want 30 000 − 14 000 = 16 000." Bereken die presiese antwoord met die kolommetode (en wys jou leen deur die nulle), en verduidelik of die leerder se skatting redelik is.', answer: '30 500 − 14 762 = 15 738\n\n• Ene: 0 − 2 → Tiene is ook 0, leen eers van Honderde.\n  Honderde: 5 → 4 (geleen aan Tiene). Tiene: 0 → 10.\n  Tiene: 10 → 9 (geleen aan Ene). Ene: 0 → 10. 10 − 2 = 8\n• Tiene: 9 − 6 = 3\n• Honderde: 4 − 7 → kan nie aftrek nie. Leen van Duisende.\n  Duisende: 0 → leen eers van Tienduisende: TD 3 → 2, D 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 14 − 7 = 7\n• Duisende: 9 − 4 = 5\n• Tienduisende: 2 − 1 = 1\n\nPresiese antwoord: 15 738\n\nDie leerder se skatting van 16 000 is redelik — die presiese antwoord van 15 738 is slegs 262 van die skatting af, wat baie klein is in vergelyking met die grootte van die getalle betrokke.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fondsinsamelingsveldtog het R34 600 in kontantskenkings en R27 850 in aanlyn-skenkings ingesamel. Hoeveel is altesaam ingesamel?', correctAnswer: '62450', correctAnswers: ['62450', 'r62450', '62 450', 'R62 450'], explanation: 'R34 600 + R27 850 = R62 450\n\n"Altesaam" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 0 + 5 = 5\n• Honderde: 6 + 8 = 14 → skryf 4, dra 1 oor\n• Duisende: 4 + 7 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\nTotaal ingesamel = R62 450', answer: 'R62 450' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Stap-roete is 72 000 m lank. ʼn Groep stappers het reeds 45 680 m afgelê. Hoeveel meter van die roete het hulle nog oor om te stap?', correctAnswer: '26320', correctAnswers: ['26320', '26 320'], explanation: '72 000 − 45 680 = 26 320\n\n"Hoeveel meter het hulle nog oor" vertel ons om af te trek.\n• Ene: 0 − 0 = 0\n• Tiene: 0 − 8 → leen deur die nulle (Honderde, Tiene albei 0).\n  Deur die ketting te volg: Tiene word 10 − 8 = 2\n• Honderde: 9 − 6 = 3\n• Duisende: 1 − 5 → kan nie aftrek nie. Leen van Tienduisende. Tienduisende: 7 → 6. Duisende: 11 − 5 = 6\n• Tienduisende: 6 − 4 = 2\n\nHulle het nog 26 320 m oor om te stap.', answer: '26 320' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Gemeenskaps-groentetuin het 21 430 kg produkte in die droë seisoen ge-oes, en nog 9 870 kg in die nat seisoen. Wat was die totale oes vir die jaar?', correctAnswer: '31300', correctAnswers: ['31300', '31 300'], explanation: '21 430 + 9 870 = 31 300\n\n"Totale" vertel ons om op te tel.\n• Ene: 0 + 0 = 0\n• Tiene: 3 + 7 = 10 → skryf 0, dra 1 oor\n• Honderde: 4 + 8 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Duisende: 1 + 9 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Tienduisende: 2 + 0 + 1 (oorgedra) = 3\n\nTotale oes = 31 300 kg', answer: '31 300' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Hardewarewinkel begin met 38 500 bokse teëls in voorraad. Dit ontvang ʼn nuwe aflewering van 24 700 bokse, en verkoop dan 19 850 bokse tydens ʼn huisrenoveringseisoen. Hoeveel bokse teëls is oor in voorraad?', correctAnswer: '43350', correctAnswers: ['43350', '43 350'], explanation: 'Stap 1: Tel die aflewering by die beginvoorraad.\n38 500 + 24 700 = 63 200\n\nStap 2: Trek die verkoopte bokse af.\n63 200 − 19 850 = 43 350\n\nHierdie probleem benodig eers optelling (voorraad neem toe) en dan aftrekking (voorraad neem af).\nBokse oor in voorraad = 43 350', answer: '43 350' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat eers: rond 61 370 en 28 940 af na die naaste 1 000 en tel die afgeronde getalle op om ʼn skatting vir 61 370 + 28 940 te kry.', correctAnswer: '90000', correctAnswers: ['90000', '90 000', '61000+29000=90000'], explanation: '61 370: honderde-syfer is 3 (minder as 5) → rond af → 61 000\n28 940: honderde-syfer is 9 (5 of meer) → rond op → 29 000\n\nSkatting: 61 000 + 29 000 = 90 000\n(Die presiese antwoord, 61 370 + 28 940 = 90 310, is baie naby aan hierdie skatting.)', answer: '90 000' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Vervoermaatskappy skat 82 450 − 47 600 deur albei getalle eers na die naaste 1 000 af te rond. ʼn Klerk bereken die presiese antwoord as 34 850. Is hierdie presiese antwoord redelik? Rond albei getalle af na die naaste 1 000, vind die skatting, en sê ja of nee.', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: '82 450: honderde-syfer is 4 (minder as 5) → rond af → 82 000\n47 600: honderde-syfer is 6 (5 of meer) → rond op → 48 000\n\nSkatting: 82 000 − 48 000 = 34 000\n\nDie presiese antwoord van 34 850 is slegs 850 van die skatting van 34 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle, dus ja, 34 850 is redelik.', answer: 'Ja' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Winkelier sê: "Ek het 26 500 + 45 999 bereken en 72 499 gekry, maar toe ek albei getalle na die naaste 10 000 afgerond het, was my skatting slegs 80 000 — dis baie meer as 7 000 se verskil, dus moes ek ʼn fout gemaak het." Rond albei getalle af na die naaste 10 000, werk die skatting uit, en verduidelik of die winkelier reg is om bekommerd te wees.', answer: '26 500 afgerond na die naaste 10 000 is 30 000 (duisende-syfer is 6, rond op).\n45 999 afgerond na die naaste 10 000 is 50 000 (duisende-syfer is 5, rond op).\n\nSkatting: 30 000 + 50 000 = 80 000\n\nDie winkelier hoef nie bekommerd te wees nie. Afronding na die naaste 10 000 is ʼn baie growwe skatting — elke getal kan tot byna 5 000 verskil voor afronding, dus is ʼn gaping van ʼn paar duisend tussen die skatting en die presiese antwoord heeltemal normaal. Kontroleer: 26 500 + 45 999 = 72 499, wat redelik naby aan 80 000 is gegewe hoe grof hierdie tipe skatting is — dit dui nie op ʼn rekenfout nie.' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder het 80 215 − 56 478 so uitgewerk:\n\nTD D H T E\n  8  0 2 1 5\n−5  6 4 7 8\n———————————\n  2  4 3 3 7\n\nDie leerder het 24 337 as die finale antwoord neergeskryf, maar dit is verkeerd. Doen die aftrekking korrek oor, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 80 215 − 56 478 = 23 737.\n\nWerk kolom vir kolom:\n• Ene: 5 − 8 → kan nie aftrek nie. Leen van Tiene. Tiene: 1 → 0. Ene: 15 − 8 = 7\n• Tiene: 0 − 7 → kan nie aftrek nie. Tiene is nou 0, dus leen eers van Honderde.\n  Honderde: 2 → 1 (geleen aan Tiene). Tiene: 0 → 10. Tiene: 10 − 7 = 3\n• Honderde: 1 − 4 → kan nie aftrek nie. Leen van Duisende.\n  Duisende: 0 → leen eers van Tienduisende: TD 8 → 7, D 0 → 10.\n  Duisende: 10 → 9 (geleen aan Honderde). Honderde: 11 − 4 = 7\n• Duisende: 9 − 6 = 3\n• Tienduisende: 7 − 5 = 2\n\nDie leerder se fout: toe die Honderde-kolom moes leen van die Duisende-kolom, was die Duisende-syfer 0. Die leerder het net ʼn syfer in Duisende neergeskryf sonder om eers van die Tienduisende-kolom te leen om die Duisende-kolom iets te gee om uit te leen. Dit is die klassieke "verkeerd-leen-van-ʼn-nul"-fout — jy moet altyd van links na regs deur elke nul in die leenketting werk voordat jy na die kolom kan leen wat dit werklik nodig het.\n\nKorrekte antwoord: 23 737' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Liefdadigheidstrust hou drie afsonderlike skenkingsfondse ter waarde van 27 400, 19 800, en 16 300 rand. Hoeveel rand word altesaam oor al drie fondse gehou?', correctAnswer: '63500', correctAnswers: ['63500', '63 500'], explanation: '27 400 + 19 800 + 16 300 = 63 500\n\n• Ene: 0 + 0 + 0 = 0\n• Tiene: 0 + 0 + 0 = 0\n• Honderde: 4 + 8 + 3 = 15 → skryf 5, dra 1 oor\n• Duisende: 7 + 9 + 6 + 1 (oorgedra) = 23 → skryf 3, dra 2 oor\n• Tienduisende: 2 + 1 + 1 + 2 (oorgedra) = 6\n\nTotaal gehou = R63 500', answer: 'R63 500' },
        { difficulty: 'Hard', checkMode: 'auto', question: 'Die liefdadigheidstrust uit die vorige vraag hou R63 500 oor al drie fondse. R28 750 van hierdie totaal is bespreek vir ʼn skoolboupojek. Hoeveel geld is nog beskikbaar vir ander projekte?', correctAnswer: '34750', correctAnswers: ['34750', '34 750'], explanation: 'R63 500 − R28 750 = R34 750\n\n• Ene: 0 − 0 = 0\n• Tiene: 0 − 5 → leen deur die nulle (Honderde ook 0 na die eerste leen).\n  Deur die ketting te volg: Tiene word 10 − 5 = 5\n• Honderde: 4 − 7 → kan nie aftrek nie. Leen van Duisende. Duisende: 3 → 2. Honderde: 14 − 7 = 7\n• Duisende: 2 − 8 → kan nie aftrek nie. Leen van Tienduisende. Tienduisende: 6 → 5. Duisende: 12 − 8 = 4\n• Tienduisende: 5 − 2 = 3\n\nBedrag nog beskikbaar = R34 750', answer: 'R34 750' },
        { difficulty: 'Hard', checkMode: 'self', question: 'Gebruik jou antwoorde van die vorige vraag (27 400 + 19 800 + 16 300 = 63 500 totaal, en 63 500 − 28 750 = 34 750 oorblywend), en gaan na dat 34 750 korrek is deur die inverse bewerking te gebruik. Wys die nagaan en verduidelik in woorde waarom dit die antwoord bevestig.', answer: 'Om 63 500 − 28 750 = 34 750 met die inverse bewerking na te gaan, tel die antwoord terug by die getal wat afgetrek is:\n\n34 750 + 28 750 = 63 500\n\nWerk: Ene 0+0=0, Tiene 5+5=10 → skryf 0 dra 1 oor, Honderde 7+7+1=15 → skryf 5 dra 1 oor, Duisende 4+8+1=13 → skryf 3 dra 1 oor, Tienduisende 3+2+1=6.\n\nResultaat: 63 500 ✓ — dit stem ooreen met die totale bedrag oor al drie fondse wat ons mee begin het.\n\nHierdie nagaan bevestig dat die antwoord korrek is omdat optelling en aftrekking inverse bewerkings is: as A − B = C, dan moet C + B weer gelyk wees aan A. Aangesien 28 750 terugtel by 34 750 presies 63 500 gee, was die aftrekking korrek uitgevoer, insluitend al die leenstappe.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan kolomoptelling, aftrekking en redenering toepas op werklike geld- en meetprobleme.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],

  scoreMessages: [
    { minScore: 31, message: 'Uitstekend! Volpunte — jy het al ses afdelings van optelling en aftrekking bemeester.' },
    { minScore: 25, message: 'Uitstekende werk! Jy het ʼn sterk begrip. Hersien enige vrae wat jy verkeerd gehad het.' },
    { minScore: 16, message: 'Goeie poging! Gaan terug en oefen die afdelings waar jy punte verloor het.' },
    { minScore: 0, message: 'Hou aan oefen! Werk versigtig deur die uitgewerkte voorbeelde stap vir stap en probeer weer.' },
  ],
}
