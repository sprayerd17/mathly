import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (addition / subtraction roles) ────────────────────────────
// carried digit      → purple (#7c3aed)
// borrow adjustment  → orange (#ea580c)
// column sum         → blue   (#2563eb)
// final answer       → green  (#16a34a)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Optelling en Aftrekking',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OPTELLING VAN GROOT GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-large-numbers',
      title: 'Optelling van Groot Getalle',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 tel ons getalle op met tot <strong>9 syfers</strong>. Ons tel altyd op van <strong>regs na links</strong>, beginnende by die ene. Wanneer die som van ʼn kolom 10 of meer is, skryf ons die ene-syfer neer en <strong>dra</strong> die tiene-syfer oor na die volgende kolom. Lyn altyd die syfers volgens plekwaarde op voordat jy optel — ene onder ene, tiene onder tiene, ensovoorts.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('oorgedraagde syfer')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kolomsom')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Key rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls om te onthou</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lyn plekwaardes op</strong> — skryf die getalle sodat ene onder ene, tiene onder tiene, honderde onder honderde, ensovoorts is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel van regs na links op</strong> — begin altyd by die ene-kolom en werk na die grootste plekwaarde toe.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Dra oor wanneer die som ≥ 10 is</strong> — skryf die ene-syfer onder die lyn en ${pu('dra')} die tiene-syfer oor na bo-op die volgende kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Sluit die oordrag in die volgende kolom in</strong> — tel die ${pu('oorgedraagde syfer')} saam met die kolomsyfers op voordat jy die ${bl('kolomsom')} neerskryf.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Optelling van drie of meer getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy drie of meer getalle in ʼn kolom optel, tel almal gelyktydig bymekaar. Die oordragreël geld steeds — as die totaal 10 of meer is, skryf die ene-syfer neer en ${pu('dra')} die res oor na die volgende kolom.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: 3 456 728 + 2 341 865 = 5 798 593 ────────────────────
        {
          question: 'Bereken 3 456 728 + 2 341 865.',
          answer: `${gr('5 798 593')}`,
          steps: [
            `Lyn die syfers volgens plekwaarde op: 3 456 728 bo 2 341 865, ene onder ene.`,
            `Tel ene op: ${bl('8 + 5')} = ${bl('13')} — skryf 3, ${pu('dra 1 oor')}.`,
            `Tel tiene op: ${bl('2 + 6')} + ${pu('1')} = ${bl('9')} — skryf 9.`,
            `Tel honderde op: ${bl('7 + 8')} = ${bl('15')} — skryf 5, ${pu('dra 1 oor')}.`,
            `Tel duisende op: ${bl('6 + 1')} + ${pu('1')} = ${bl('8')} — skryf 8.`,
            `Tel tienduisende op: ${bl('5 + 4')} = ${bl('9')} — skryf 9.`,
            `Tel honderdduisende op: ${bl('4 + 3')} = ${bl('7')} — skryf 7.`,
            `Tel miljoene op: ${bl('3 + 2')} = ${bl('5')} — skryf 5.`,
            `<strong>Antwoord:</strong> ${gr('5 798 593')}`,
          ],
        },

        // ── Voorbeeld 2: 14 567 + 8 934 + 21 408 = 44 909 ────────────────────
        {
          question: 'Bereken 14 567 + 8 934 + 21 408.',
          answer: `${gr('44 909')}`,
          steps: [
            `Lyn al drie getalle volgens plekwaarde op.`,
            `Tel ene op: ${bl('7 + 4 + 8')} = ${bl('19')} — skryf 9, ${pu('dra 1 oor')}.`,
            `Tel tiene op: ${bl('6 + 3 + 0')} + ${pu('1')} = ${bl('10')} — skryf 0, ${pu('dra 1 oor')}.`,
            `Tel honderde op: ${bl('5 + 9 + 4')} + ${pu('1')} = ${bl('19')} — skryf 9, ${pu('dra 1 oor')}.`,
            `Tel duisende op: ${bl('4 + 8 + 1')} + ${pu('1')} = ${bl('14')} — skryf 4, ${pu('dra 1 oor')}.`,
            `Tel tienduisende op: ${bl('1 + 0 + 2')} + ${pu('1')} = ${bl('4')} — skryf 4.`,
            `<strong>Antwoord:</strong> ${gr('44 909')}`,
          ],
        },

        // ── Voorbeeld 3: Sipho spaar R12 450 + R8 375 + R21 680 = R42 505 ─────
        {
          question: 'Sipho spaar R12 450, R8 375 en R21 680. Hoeveel het hy altesaam gespaar?',
          answer: `${gr('R42 505')}`,
          steps: [
            `Tel die bedrae op: 12 450 + 8 375 + 21 680. Lyn volgens plekwaarde op.`,
            `Tel ene op: ${bl('0 + 5 + 0')} = ${bl('5')} — skryf 5.`,
            `Tel tiene op: ${bl('5 + 7 + 8')} = ${bl('20')} — skryf 0, ${pu('dra 2 oor')}.`,
            `Tel honderde op: ${bl('4 + 3 + 6')} + ${pu('2')} = ${bl('15')} — skryf 5, ${pu('dra 1 oor')}.`,
            `Tel duisende op: ${bl('2 + 8 + 1')} + ${pu('1')} = ${bl('12')} — skryf 2, ${pu('dra 1 oor')}.`,
            `Tel tienduisende op: ${bl('1 + 0 + 2')} + ${pu('1')} = ${bl('4')} — skryf 4.`,
            `<strong>Antwoord:</strong> Sipho het altesaam ${gr('R42 505')} gespaar.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Kolomoptelling-uitleg wat 3 456 728 plus 2 341 865 toon met oorgedraagde syfers in pers bo elke kolom, kolomsomme in blou, en die finale antwoord in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat toon hoe om groot getalle tot 9 syfers op te tel deur kolomoptelling met oordra te gebruik, met kleurgekodeerde stappe" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — AFTREKKING VAN GROOT GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'subtracting-large-numbers',
      title: 'Aftrekking van Groot Getalle',
      icon: '−',
      explanation:
        `<p style="margin-bottom:16px;">Om groot getalle af te trek, werk ons van <strong>regs na links</strong>. As die boonste syfer kleiner is as die onderste syfer, moet ons <strong>leen</strong> van die volgende kolom aan die linkerkant. Wanneer ons leen, tel ons 10 by die huidige kolom en verminder die volgende kolom met 1. Gaan jou antwoord altyd na deur die antwoord by die getal wat jy afgetrek het, op te tel — jy behoort weer die oorspronklike getal te kry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('geleende syfers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('leen-aanpassing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls om te onthou</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lyn plekwaardes op</strong> — skryf die getalle sodat ene onder ene, tiene onder tiene, ensovoorts is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Trek van regs na links af</strong> — begin altyd by die ene-kolom en werk na die grootste plekwaarde toe.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Leen wanneer die boonste syfer &lt; onderste syfer is</strong> — verminder die volgende kolom aan die linkerkant met 1 (die ${or('leen-aanpassing')}) en tel 10 by die huidige kolom (die ${pu('geleende syfer')}).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Leen oor nulle</strong> — as die volgende kolom ook 0 is, beweeg voort na links totdat jy ʼn syfer kry wat nie 0 is nie, en leen dan die hele ketting af. Elke nul tussenin word ${or('9')} en die kolom waarmee jy werk kry ${pu('10')} bygetel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Gaan jou antwoord na met optelling</p>` +
        `<p style="margin:0;color:#166534;">Tel die antwoord by die getal op wat jy afgetrek het. Jy behoort weer die oorspronklike getal te kry. Voorbeeld: as 7 435 862 − 3 214 549 = ${gr('4 221 313')}, dan moet ${gr('4 221 313')} + 3 214 549 gelyk wees aan 7 435 862. ✓</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 4: 7 435 862 − 3 214 549 = 4 221 313 ────────────────────
        {
          question: 'Bereken 7 435 862 − 3 214 549.',
          answer: `${gr('4 221 313')}`,
          steps: [
            `Lyn die syfers volgens plekwaarde op: 7 435 862 bo 3 214 549, ene onder ene.`,
            `Trek ene af: 2 − 9 — die boonste syfer is kleiner, ons moet leen. Leen van tiene: die tiene-syfer (6) verminder na ${or('5')}, ene word ${pu('12')}. ${pu('12')} − 9 = 3. Skryf 3.`,
            `Trek tiene af: ${or('5')} − 4 = 1. Skryf 1.`,
            `Trek honderde af: 8 − 5 = 3. Skryf 3.`,
            `Trek duisende af: 5 − 4 = 1. Skryf 1.`,
            `Trek tienduisende af: 3 − 1 = 2. Skryf 2.`,
            `Trek honderdduisende af: 4 − 2 = 2. Skryf 2.`,
            `Trek miljoene af: 7 − 3 = 4. Skryf 4.`,
            `<strong>Antwoord:</strong> ${gr('4 221 313')}`,
          ],
        },

        // ── Voorbeeld 5: 5 000 000 − 2 347 865 = 2 652 135 ────────────────────
        {
          question: 'Bereken 5 000 000 − 2 347 865.',
          answer: `${gr('2 652 135')}`,
          steps: [
            `Lyn die syfers volgens plekwaarde op: 5 000 000 bo 2 347 865, ene onder ene. Die boonste getal het nulle in elke kolom behalwe miljoene — ons moet herhaaldelik leen.`,
            `Ene: 0 − 5 — die boonste syfer is kleiner. Al die kolomme van tiene tot honderdduisende is nul, dus kan ons nie direk leen nie. Ons moet helemaal van die miljoene-kolom af leen.`,
            `Begin die leenketting: miljoene ${or('4')} leen 1 uit → honderdduisende ${or('9')} leen 1 uit → tienduisende ${or('9')} leen 1 uit → duisende ${or('9')} leen 1 uit → honderde ${or('9')} leen 1 uit → tiene ${or('9')} leen 1 uit → ene word ${pu('10')}. Werk versigtig kolom vir kolom van regs na links.`,
            `Trek af van regs na links: ene ${pu('10')} − 5 = 5; tiene ${or('9')} − 6 = 3; honderde ${or('9')} − 8 = 1; duisende ${or('9')} − 7 = 2; tienduisende ${or('9')} − 4 = 5; honderdduisende ${or('9')} − 3 = 6; miljoene ${or('4')} − 2 = 2.`,
            `<strong>Antwoord:</strong> ${gr('2 652 135')}`,
          ],
        },

        // ── Voorbeeld 6: Lerato 45 750 − 32 480 = 13 270 ──────────────────────
        {
          question: 'Lerato verdien R45 750 per maand. Sy spandeer R32 480. Hoeveel spaar sy?',
          answer: `Lerato spaar ${gr('R13 270')} per maand`,
          steps: [
            `Trek af: 45 750 − 32 480. Lyn volgens plekwaarde op.`,
            `Ene: 0 − 0 = 0. Skryf 0.`,
            `Tiene: 5 − 8 — die boonste syfer is kleiner, ons moet leen. Leen van honderde: die honderde-syfer (7) verminder na ${or('6')}, tiene word ${pu('15')}. ${pu('15')} − 8 = 7. Skryf 7.`,
            `Honderde: ${or('6')} − 4 = 2. Skryf 2.`,
            `Duisende: 5 − 2 = 3. Skryf 3.`,
            `Tienduisende: 4 − 3 = 1. Skryf 1.`,
            `<strong>Antwoord:</strong> Lerato spaar ${gr('R13 270')} per maand.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Kolomaftrekking-uitleg wat 7 435 862 minus 3 214 549 toon met geleende syfers in pers en leen-aanpassings in oranje, finale antwoord in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat toon hoe om groot getalle met leen af te trek, insluitend hoe om oor nulle te leen, met kleurgekodeerde stappe" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SKAT EN GAAN ANTWOORDE NA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-and-checking',
      title: 'Skat en Gaan Antwoorde Na',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons bereken, kan ons die antwoord <strong>skat</strong> deur elke getal na die naaste geskikte waarde af te rond. Dit help ons om te kyk of ons finale antwoord redelik is. Nadat ons bereken het, <strong>gaan</strong> ons altyd ons werk na deur die inverse bewerking te gebruik.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afgeronde getalle')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skatting')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('presiese antwoord')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nagaan-berekening')}</span>` +
        `</div>` +

        // ── How to check ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om jou antwoord na te gaan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Optelling nagaan</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Trek een van die getalle van die ${gr('antwoord')} af. Jy behoort die ander getal terug te kry.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">As A + B = ${gr('C')}, dan is ${re('C − B = A')} ✓</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Aftrekking nagaan</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Tel die ${gr('antwoord')} by die getal op wat jy afgetrek het. Jy behoort die oorspronklike getal terug te kry.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">As A − B = ${gr('C')}, dan is ${re('C + B = A')} ✓</p>` +
        `</div>` +

        `</div>` +

        // ── 3-step strategy ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 3-stap-strategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skat')} — Rond elke getal af na die naaste geskikte waarde en bereken ʼn benaderde antwoord. Dit is jou teikenreeks.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Bereken presies')} — Gebruik kolomoptelling of -aftrekking om die presiese antwoord te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Gaan na')} — Gebruik die inverse bewerking om jou presiese antwoord te bevestig, en kyk of dit naby aan die skatting is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom eers skat?</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Skatting help om groot foute op te tel. As jou presiese antwoord ver van die skatting af is, het jy waarskynlik iewers ʼn fout gemaak en moet jy weer bereken. Skat altyd eers, bereken dan, en gaan dan na.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skat en bereken dan 47 836 + 28 194.',
          answer: `${gr('76 030')} (skatting was ${bl('80 000')})`,
          steps: [
            `${or('Skatting:')} Rond elke getal af na die naaste tienduisend — ${or('47 836')} ≈ ${or('50 000')} en ${or('28 194')} ≈ ${or('30 000')}. ${bl('50 000 + 30 000 = 80 000')}. Dit is ons ${bl('skatting')}.`,
            `${gr('Bereken presies:')} 47 836 + 28 194 = ${gr('76 030')}.`,
            `${re('Gaan na:')} Trek een van die getalle van die antwoord af — ${re('76 030 − 28 194 = 47 836')}. Ons kry die ander getal terug. ✓`,
            `Ons antwoord ${gr('76 030')} is korrek en naby aan die ${bl('skatting van 80 000')}. ✓`,
          ],
        },
        {
          question: 'Skat en bereken dan 83 540 − 27 865.',
          answer: `${gr('55 675')} (skatting was ${bl('50 000')})`,
          steps: [
            `${or('Skatting:')} Rond elke getal af na die naaste tienduisend — ${or('83 540')} ≈ ${or('80 000')} en ${or('27 865')} ≈ ${or('30 000')}. ${bl('80 000 − 30 000 = 50 000')}. Dit is ons ${bl('skatting')}.`,
            `${gr('Bereken presies:')} 83 540 − 27 865 = ${gr('55 675')}.`,
            `${re('Gaan na:')} Tel die antwoord by die getal op wat afgetrek is — ${re('55 675 + 27 865 = 83 540')}. Ons kry die oorspronklike getal terug. ✓`,
            `Ons antwoord ${gr('55 675')} is korrek en naby aan die ${bl('skatting van 50 000')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Afrondingsdiagram wat 47 836 afgerond na 50 000 en 28 194 afgerond na 30 000 in oranje toon, skatting 80 000 in blou, presiese antwoord 76 030 in groen, en nagaan-berekening 76 030 minus 28 194 gelyk aan 47 836 in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat toon hoe om deur afronding te skat, presies te bereken, en optellings- en aftrekkingsantwoorde met inverse bewerkings na te gaan, met kleurgekodeerde stappe" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — PROBLEEMOPLOSSING MET OPTELLING EN AFTREKKING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-addition-subtraction',
      title: 'Probleemoplossing met Optelling en Aftrekking',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer jy woordprobleme met optelling en aftrekking oplos, lees die vraag noukeurig om te besluit watter bewerking om te gebruik. ${gr('Optelling')} word gebruik wanneer jy ${or('bedrae kombineer')} of ʼn ${or('totaal')} soek. ${re('Aftrekking')} word gebruik wanneer jy ʼn ${or('verskil')} soek, ${or('wat oorbly')} soek, of ${or('hoeveel meer nodig is')} soek. Sommige probleme vereis ${or('albei bewerkings')}. Skryf jou antwoord altyd in ʼn volsin met die korrekte eenheid.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sleutelwoorde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('aftrekking')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('finale antwoord')}</span>` +
        `</div>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelwoorde om na te kyk</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">${gr('Optelling-sleutelwoorde')}</p>` +
        `<div style="display:flex;gap:6px;flex-wrap:wrap;">` +
        ['totaal', 'altesaam', 'gekombineer', 'som', 'in totaal', 'hoeveel in totaal', 'verhoog', 'deposito'].map(w => `<span style="background:#bbf7d0;border-radius:6px;padding:2px 8px;font-size:13px;font-weight:700;color:#16a34a;">${w}</span>`).join('') +
        `</div>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">${re('Aftrekking-sleutelwoorde')}</p>` +
        `<div style="display:flex;gap:6px;flex-wrap:wrap;">` +
        ['verskil', 'hoeveel meer', 'hoeveel minder', 'oorbly', 'oorblywend', 'spandeer', 'verminder', 'hoeveel meer nodig'].map(w => `<span style="background:#fecaca;border-radius:6px;padding:2px 8px;font-size:13px;font-weight:700;color:#dc2626;">${w}</span>`).join('') +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">3-stap-strategie vir woordprobleme</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Vind die ${or('sleutelwoord')} en besluit: ${gr('optelling')} of ${re('aftrekking')} (of albei).<br><strong>Stap 2</strong> — Skryf die getalsin.<br><strong>Stap 3</strong> — Bereken en skryf jou ${bl('antwoord')} in ʼn volsin met die korrekte eenheid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Skool maak R234 500 in kwartaal 1 en R187 350 in kwartaal 2. Hoeveel het hulle altesaam gemaak?',
          answer: `Die skool het altesaam ${bl('R421 850')} gemaak`,
          steps: [
            `${or('Sleutelwoord:')} <em>"altesaam"</em> — ons ${gr('kombineer twee bedrae')}, dus ${gr('tel ons op')}.`,
            `Skryf die getalsin: ${gr('234 500 + 187 350')} = ?`,
            `${gr('Bereken:')} 234 500 + 187 350 = ${bl('421 850')}`,
            `<strong>Antwoord:</strong> Die skool het altesaam ${bl('R421 850')} gemaak.`,
          ],
        },
        {
          question: 'ʼn Fabriek het verlede jaar 1 250 000 eenhede vervaardig. Vanjaar het hulle 987 645 eenhede vervaardig. Hoeveel meer eenhede het hulle verlede jaar vervaardig?',
          answer: `Hulle het verlede jaar ${bl('262 355')} meer eenhede vervaardig`,
          steps: [
            `${or('Sleutelwoord:')} <em>"hoeveel meer"</em> — ons ${re('soek ʼn verskil')}, dus ${re('trek ons af')}.`,
            `Skryf die getalsin: ${re('1 250 000 − 987 645')} = ?`,
            `${re('Bereken:')} 1 250 000 − 987 645 = ${bl('262 355')}`,
            `<strong>Antwoord:</strong> Hulle het verlede jaar ${bl('262 355')} meer eenhede vervaardig.`,
          ],
        },
        {
          question: 'Thabo het R45 000 in spaargeld. Hy spandeer R12 750 op ʼn fiets en R8 430 op toerusting. Hoeveel het hy oor?',
          answer: `Thabo het ${bl('R23 820')} oor`,
          steps: [
            `${or('Sleutelwoorde:')} <em>"spandeer"</em> en <em>"hoeveel oor"</em> — hierdie probleem vereis ${or('albei bewerkings')}.`,
            `${gr('Stap 1 — Tel')} die bedrae wat spandeer is op: ${gr('12 750 + 8 430')} = ${gr('21 180')}`,
            `${re('Stap 2 — Trek')} die totaal wat spandeer is van die spaargeld af: ${re('45 000 − 21 180')} = ${bl('23 820')}`,
            `<strong>Antwoord:</strong> Thabo het ${bl('R23 820')} oor.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Vloeidiagram wat toon hoe om sleutelwoorde in ʼn woordprobleem te identifiseer en optelling (groen) of aftrekking (rooi) of albei te kies, wat lei na die finale antwoord in blou" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat toon hoe om woordprobleme met optelling en aftrekking op te los deur sleutelwoorde te identifiseer en ʼn getalsin te skryf, met kleurgekodeerde stappe" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 234 567 + 145 321.',
      answer: '379 888',
      checkMode: 'auto',
      correctAnswer: '379 888',
      correctAnswers: ['379 888', '379888'],
      explanation: 'Lyn volgens plekwaarde op en tel van regs na links op — geen oordra nodig nie.\n2+1=3, 3+4=7, 4+5=9, 5+3=8, 6+2=8, 7+1=8.\nAntwoord: 379 888 ✓',
    },

    // ── V2 Maklik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 875 430 − 324 210.',
      answer: '551 220',
      checkMode: 'auto',
      correctAnswer: '551 220',
      correctAnswers: ['551 220', '551220'],
      explanation: 'Lyn volgens plekwaarde op en trek van regs na links af — geen leen nodig nie.\n8−3=5, 7−2=5, 5−4=1, 4−2=2, 3−1=2, 0−0=0.\nAntwoord: 551 220 ✓',
    },

    // ── V3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 3 456 728 + 2 891 465.',
      answer: '6 348 193',
      checkMode: 'auto',
      correctAnswer: '6 348 193',
      correctAnswers: ['6 348 193', '6348193'],
      explanation: 'Tel van regs na links op met oordra:\nEne: 8+5=13 — skryf 3, dra 1 oor.\nTiene: 2+6+1=9 — skryf 9.\nHonderde: 7+4=11 — skryf 1, dra 1 oor.\nDuisende: 6+1+1=8 — skryf 8.\nTienduisende: 5+9=14 — skryf 4, dra 1 oor.\nHonderdduisende: 4+8+1=13 — skryf 3, dra 1 oor.\nMiljoene: 3+2+1=6 — skryf 6.\nAntwoord: 6 348 193 ✓',
    },

    // ── V4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 7 000 000 − 3 456 789.',
      answer: '3 543 211',
      checkMode: 'auto',
      correctAnswer: '3 543 211',
      correctAnswers: ['3 543 211', '3543211'],
      explanation: 'Leen oor die nulle — miljoene 6 leen 1 uit → honderdduisende 9 leen 1 uit → tienduisende 9 leen 1 uit → duisende 9 leen 1 uit → honderde 9 leen 1 uit → tiene 9 leen 1 uit → ene word 10.\nTrek af van regs na links: 10−9=1, 9−8=1, 9−7=2, 9−6=3, 9−5=4, 9−4=5 (wag: na leen word miljoene 6), 6−3=3.\nAntwoord: 3 543 211 ✓',
    },

    // ── V5 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 12 450 375 + 8 976 248 + 3 104 561.',
      answer: '24 531 184',
      checkMode: 'auto',
      correctAnswer: '24 531 184',
      correctAnswers: ['24 531 184', '24531184'],
      explanation: 'Tel al drie getalle van regs na links op:\nEne: 5+8+1=14 — skryf 4, dra 1 oor.\nTiene: 7+4+6+1=18 — skryf 8, dra 1 oor.\nHonderde: 3+2+5+1=11 — skryf 1, dra 1 oor.\nDuisende: 0+6+4+1=11 — skryf 1, dra 1 oor.\nTienduisende: 5+7+0+1=13 — skryf 3, dra 1 oor.\nHonderdduisende: 4+9+1+1=15 — skryf 5, dra 1 oor.\nMiljoene: 2+8+3+1=14 — skryf 4, dra 1 oor.\nTienmiljoene: 1+0+0+1=2 — skryf 2.\nAntwoord: 24 531 184 ✓',
    },

    // ── V6 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê 5 000 000 − 2 999 999 = 3 000 001. Is hy korrek? Verduidelik.',
      answer: 'Nee — 5 000 000 − 2 999 999 = 2 000 001. Hy het ʼn fout gemaak deur oor die nulle te leen.',
      checkMode: 'self',
    },

    // ── V7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skat 67 845 + 42 317 deur na die naaste tienduisend af te rond.',
      answer: '110 000',
      checkMode: 'auto',
      correctAnswer: '110 000',
      correctAnswers: ['110 000', '110000'],
      explanation: 'Rond af na die naaste tienduisend:\n67 845 ≈ 70 000\n42 317 ≈ 40 000\n70 000 + 40 000 = 110 000 ✓',
    },

    // ── V8 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle bereken 84 320 − 35 675 = 48 645. Gaan haar antwoord na. Is sy korrek?',
      answer: 'Gaan na deur op te tel: 48 645 + 35 675 = 84 320. Ja, sy is korrek.',
      checkMode: 'self',
    },

    // ── V9 Moeilik ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Stadion hou 87 500 mense. Op Saterdag het 64 837 mense opgedaag en op Sondag het 71 294 mense opgedaag. Hoeveel meer mense het op Sondag as op Saterdag opgedaag?',
      answer: '6 457',
      checkMode: 'auto',
      correctAnswer: '6 457',
      correctAnswers: ['6 457', '6457'],
      explanation: 'Vind die verskil tussen die Sondag- en Saterdag-opkoms:\n71 294 − 64 837:\nEne: 4−7 — leen. 14−7=7.\nTiene: 8−3=5 (na leen: 8−1=7 uitgeleen, dus 8−1=7... eintlik: 9−1=8 tiene-syfer na leen). Kom ons werk dit deur:\n71 294 − 64 837 = 6 457.\nGaan na: 6 457 + 64 837 = 71 294 ✓',
    },

    // ── V10 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het R125 000 in haar bankrekening. Sy trek R34 750 uit en maak dan ʼn deposito van R18 430. Hoeveel is nou in haar rekening?',
      answer: 'R108 680',
      checkMode: 'auto',
      correctAnswer: 'R108 680',
      correctAnswers: ['R108 680', '108 680', 'R108680', '108680'],
      explanation: 'Stap 1 — Trek die onttrekking af:\n125 000 − 34 750 = 90 250\nStap 2 — Tel die deposito by:\n90 250 + 18 430 = 108 680\nAntwoord: R108 680 ✓',
    },

    // ── V11 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Fabriek het 2 450 000 items in Januarie en 1 875 650 items in Februarie vervaardig.\n\na) Hoeveel items is altesaam vervaardig?\nb) Hoeveel meer items is in Januarie as in Februarie vervaardig?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Totale items vervaardig',
          correctAnswer: '4 325 650',
          correctAnswers: ['4 325 650', '4325650'],
          explanation: '2 450 000 + 1 875 650:\nTel van regs na links op met oordra.\n0+0=0, 0+5=5, 0+6=6, 0+5=5 (duisende), 5+7=12 — skryf 2 dra 1 oor, 4+8+1=13 — skryf 3 dra 1 oor, 2+1+1=4.\nAntwoord: 4 325 650 ✓',
        },
        {
          label: 'b) Hoeveel meer in Januarie as in Februarie',
          correctAnswer: '574 350',
          correctAnswers: ['574 350', '574350'],
          explanation: '2 450 000 − 1 875 650:\nTrek van regs na links af met leen.\nAntwoord: 574 350.\nGaan na: 574 350 + 1 875 650 = 2 450 000 ✓',
        },
      ],
    },

    // ── V12 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo skat 345 678 + 254 321 as 600 000 deur na die naaste honderdduisend af te rond. Hy bereken dan die presiese antwoord as 599 999. Is sy skatting redelik? Verduidelik.',
      answer: 'Ja — 600 000 is baie naby aan 599 999. Afronding na die naaste honderdduisend gee 300 000 + 300 000 = 600 000, wat ʼn uitstekende skatting is.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het optelling en aftrekking bemeester.' },
      { minPercent: 75, message: 'Uitstekende werk! Jy het ʼn sterk begrip van optelling en aftrekking.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
