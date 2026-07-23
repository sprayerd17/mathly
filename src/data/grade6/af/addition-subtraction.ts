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
        'Kolomoptelling van 3 456 728 + 2 341 865 wat die oorgedraagde syfers in pers bo elke kolom toon en die finale antwoord 5 798 593 in groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 115" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="124" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="184" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="34" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="64" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="94" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="124" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="154" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="184" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="214" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="10" y="58" font-size="15" font-weight="700" fill="#0f1f3d">+</text>` +
        `<text x="34" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="64" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="94" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="124" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="154" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="184" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="214" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<line x1="6" y1="66" x2="228" y2="66" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="34" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="64" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">7</text>` +
        `<text x="94" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<text x="124" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">8</text>` +
        `<text x="154" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="184" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<text x="214" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="120" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">3 456 728 + 2 341 865 = 5 798 593</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat toon hoe om groot getalle tot 9 syfers op te tel deur kolomoptelling met oordra te gebruik, met kleurgekodeerde stappe',
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
        'Kolomaftrekking-uitleg wat 7 435 862 minus 3 214 549 toon met geleende syfers in pers en leen-aanpassings in oranje, finale antwoord in groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 115" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="184" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">5</text>` +
        `<text x="214" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">1</text>` +
        `<text x="34" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="64" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="94" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="124" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="154" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="184" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<line x1="177" y1="29" x2="191" y2="39" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="214" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="10" y="58" font-size="15" font-weight="700" fill="#0f1f3d">−</text>` +
        `<text x="34" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="64" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="94" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="124" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="154" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="184" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="214" y="58" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">9</text>` +
        `<line x1="6" y1="66" x2="228" y2="66" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="34" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4</text>` +
        `<text x="64" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<text x="94" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<text x="124" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">1</text>` +
        `<text x="154" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="184" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">1</text>` +
        `<text x="214" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">3</text>` +
        `<text x="120" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">7 435 862 − 3 214 549 = 4 221 313</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat toon hoe om groot getalle met leen af te trek, insluitend hoe om oor nulle te leen, met kleurgekodeerde stappe',
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

      videoPlaceholder:
        'Kort video wat toon hoe om deur afronding te skat, presies te bereken, en optellings- en aftrekkingsantwoorde met inverse bewerkings na te gaan, met kleurgekodeerde stappe',
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

      videoPlaceholder:
        'Kort video wat toon hoe om woordprobleme met optelling en aftrekking op te los deur sleutelwoorde te identifiseer en ʼn getalsin te skryf, met kleurgekodeerde stappe',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Kolomoptelling met oordra | 4-7 Kolomaftrekking met leen
    // (insl. oor nulle) | 8-10 Skat deur af te rond | 11-13 Nagaan met
    // inverse bewerkings | 14-16 Woordprobleme | 17-19 Multi-stap woordprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok: Kolomoptelling met Oordra (0-3) ────────────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n3 456 782 + 2 341 865', correctAnswer: '5798647', correctAnswers: ['5798647', '5 798 647'], explanation: '3 456 782 + 2 341 865 = 5 798 647\n\n• Ene: 2 + 5 = 7\n• Tiene: 8 + 6 = 14 → skryf 4, dra 1 oor\n• Honderde: 7 + 8 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Duisende: 6 + 1 + 1 (oorgedra) = 8\n• Tienduisende: 5 + 4 = 9\n• Honderdduisende: 4 + 3 = 7\n• Miljoene: 3 + 2 = 5\n\nAntwoord: 5 798 647', answer: '5 798 647' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die som van 2 345 671 en 1 234 568.', correctAnswer: '3580239', correctAnswers: ['3580239', '3 580 239'], explanation: '2 345 671 + 1 234 568 = 3 580 239\n\n• Ene: 1 + 8 = 9\n• Tiene: 7 + 6 = 13 → skryf 3, dra 1 oor\n• Honderde: 6 + 5 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Duisende: 5 + 4 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Tienduisende: 4 + 3 + 1 (oorgedra) = 8\n• Honderdduisende: 3 + 2 = 5\n• Miljoene: 2 + 1 = 3\n\nAntwoord: 3 580 239', answer: '3 580 239' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n145 678 + 238 945 + 96 387', correctAnswer: '481010', correctAnswers: ['481010', '481 010'], explanation: '145 678 + 238 945 + 96 387 = 481 010\n\n• Ene: 8 + 5 + 7 = 20 → skryf 0, dra 2 oor\n• Tiene: 7 + 4 + 8 + 2 (oorgedra) = 21 → skryf 1, dra 2 oor\n• Honderde: 6 + 9 + 3 + 2 (oorgedra) = 20 → skryf 0, dra 2 oor\n• Duisende: 5 + 8 + 6 + 2 (oorgedra) = 21 → skryf 1, dra 2 oor\n• Tienduisende: 4 + 3 + 9 + 2 (oorgedra) = 18 → skryf 8, dra 1 oor\n• Honderdduisende: 1 + 2 + 0 + 1 (oorgedra) = 4\n\nAntwoord: 481 010', answer: '481 010' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder het 38 475 + 29 618 so uitgewerk:\n\nD H T E\n 3 8 4 7 5\n+2 9 6 1 8\n—————————\n 6 7 0 9 3\n\nDie leerder het 67 093 as die finale antwoord neergeskryf, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 38 475 + 29 618 = 68 093.\n\nWerk kolom vir kolom:\n• Ene: 5 + 8 = 13 → skryf 3, dra 1 oor\n• Tiene: 7 + 1 + 1 (oorgedra) = 9\n• Honderde: 4 + 6 = 10 → skryf 0, dra 1 oor\n• Duisende: 8 + 9 + 1 (oorgedra) = 18 → skryf 8, dra 1 oor\n• Tienduisende: 3 + 2 + 1 (oorgedra) = 6\n\nDie leerder se fout: in die duisende-kolom het hulle 8 + 9 = 17 opgetel en vergeet om ook die oordrag van 1 uit die honderde-kolom by te tel, dus het hulle 7 in plaas van 8 neergeskryf en die oordrag na die tienduisende-kolom verloor. Dit is ʼn tipiese "verlore oordrag"-fout.\n\nKorrekte antwoord: 68 093' },

        // ── Blok: Kolomaftrekking met Leen, insl. oor nulle (4-7) ────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n8 345 621 − 3 928 475', correctAnswer: '4417146', correctAnswers: ['4417146', '4 417 146'], explanation: '8 345 621 − 3 928 475 = 4 417 146\n\n• Ene: 1 − 5 → leen. Tiene 2 → 1, Ene 11 − 5 = 6\n• Tiene: 1 − 7 → leen. Honderde 6 → 5, Tiene 11 − 7 = 4\n• Honderde: 5 − 4 = 1\n• Duisende: 5 − 8 → leen. Tienduisende 4 → 3, Duisende 15 − 8 = 7\n• Tienduisende: 3 − 2 = 1\n• Honderdduisende: 3 − 9 → leen. Miljoene 8 → 7, Honderdduisende 13 − 9 = 4\n• Miljoene: 7 − 3 = 4\n\nAntwoord: 4 417 146', answer: '4 417 146' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken, en wys jou leenwerk oor die nulle:\n70 000 000 − 23 456 789', correctAnswer: '46543211', correctAnswers: ['46543211', '46 543 211'], explanation: '70 000 000 − 23 456 789 = 46 543 211\n\nDie boonste getal het ses nulle, dus leen ons heeltemal van die tienmiljoene-kolom af:\nTienmiljoene 7 → 6, en elke kolom van miljoene tot ene word 9, behalwe ene wat 10 word.\n\n• Ene: 10 − 9 = 1\n• Tiene: 9 − 8 = 1\n• Honderde: 9 − 7 = 2\n• Duisende: 9 − 6 = 3\n• Tienduisende: 9 − 5 = 4\n• Honderdduisende: 9 − 4 = 5\n• Miljoene: 9 − 3 = 6\n• Tienmiljoene: 6 − 2 = 4\n\nAntwoord: 46 543 211', answer: '46 543 211' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n9 000 000 − 4 567 123', correctAnswer: '4432877', correctAnswers: ['4432877', '4 432 877'], explanation: '9 000 000 − 4 567 123 = 4 432 877\n\nLeen oor die nulle: miljoene 9 → 8, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 3 = 7\n• Tiene: 9 − 2 = 7\n• Honderde: 9 − 1 = 8\n• Duisende: 9 − 7 = 2\n• Tienduisende: 9 − 6 = 3\n• Honderdduisende: 9 − 5 = 4\n• Miljoene: 8 − 4 = 4\n\nAntwoord: 4 432 877', answer: '4 432 877' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder sê: "5 000 000 − 1 234 567 = 3 865 443, want ek het oor al die nulle geleen." Bereken die presiese antwoord met die kolommetode, en verduidelik of die leerder korrek is.', answer: 'Die korrekte antwoord is 5 000 000 − 1 234 567 = 3 765 433.\n\nLeen oor die nulle: miljoene 5 → 4, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 7 = 3\n• Tiene: 9 − 6 = 3\n• Honderde: 9 − 5 = 4\n• Duisende: 9 − 4 = 5\n• Tienduisende: 9 − 3 = 6\n• Honderdduisende: 9 − 2 = 7\n• Miljoene: 4 − 1 = 3\n\nDie leerder is NIE korrek nie — hulle antwoord van 3 865 443 stem nie ooreen met 3 765 433 nie. Dit lyk of hulle iewers in die leenketting ʼn fout gemaak het, waarskynlik deur te verwar watter kolomverandering by watter plekwaarde hoort. Werk altyd kolom vir kolom van regs na links, en maak seker net die ene-syfer word 10 — elke nul tussenin behoort 9 te word, nie 10 nie.\n\nKorrekte antwoord: 3 765 433' },

        // ── Blok: Skat deur af te rond voor jy bereken (8-10) ────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 56 789 + 23 456 deur elke getal na die naaste tienduisend af te rond.', correctAnswer: '80000', correctAnswers: ['80000', '80 000'], explanation: 'Rond elke getal af na die naaste tienduisend:\n56 789 ≈ 60 000\n23 456 ≈ 20 000\n\nSkatting: 60 000 + 20 000 = 80 000\n\n(Die presiese antwoord, 56 789 + 23 456 = 80 245, is baie naby aan hierdie skatting.)', answer: '80 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Twee leerders skat 483 200 + 251 900. Naledi rond albei getalle af na die naaste honderdduisend en kry ʼn skatting van 800 000. Kabelo rond albei getalle af na die naaste tienduisend en kry ʼn skatting van 730 000. Die presiese antwoord is 735 100. Wie se skatting is meer redelik, en waarom?', answer: 'Die presiese antwoord is 483 200 + 251 900 = 735 100.\n\nNaledi het na die naaste honderdduisend afgerond: 483 200 ≈ 500 000 en 251 900 ≈ 300 000, wat 500 000 + 300 000 = 800 000 gee. Dit is 64 900 van die presiese antwoord af.\n\nKabelo het na die naaste tienduisend afgerond: 483 200 ≈ 480 000 en 251 900 ≈ 250 000, wat 480 000 + 250 000 = 730 000 gee. Dit is slegs 5 100 van die presiese antwoord af.\n\nKabelo se skatting van 730 000 is meer redelik omdat afronding na ʼn kleiner plekwaarde (tienduisend in plaas van honderdduisend) elke getal nader aan sy oorspronklike waarde hou, sodat die skatting baie nader aan die presiese antwoord val.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Winkelklerk skat 345 216 − 128 744 deur albei getalle eers na die naaste tienduisend af te rond, en kry ʼn skatting van 220 000. Sy bereken toe die presiese antwoord as 216 472. Is haar presiese antwoord redelik? Wys die afronding en verduidelik.', answer: '345 216 na die naaste tienduisend afgerond is 350 000 (duisende-syfer is 5, rond op).\n128 744 na die naaste tienduisend afgerond is 130 000 (duisende-syfer is 8, rond op).\n\nSkatting: 350 000 − 130 000 = 220 000\n\nDie presiese antwoord van 216 472 is slegs 3 528 van die skatting van 220 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle betrokke. Ja, haar presiese antwoord is redelik.' },

        // ── Blok: Nagaan met Inverse Bewerkings (11-13) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Gaan hierdie berekening na deur die inverse bewerking te gebruik:\n64 321 − 28 756 = 35 565\nSkryf die optelling wat jy sou gebruik om dit na te gaan, en gee die antwoord om te bevestig dat die aftrekking korrek is.', correctAnswer: '64321', correctAnswers: ['64321', '64 321', '35565+28756=64321', '35 565 + 28 756 = 64 321'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord terug by die getal wat afgetrek is:\n35 565 + 28 756 = 64 321\n\nDit stem ooreen met die oorspronklike getal, 64 321, dus is die aftrekking bevestig korrek. ✓', answer: '35 565 + 28 756 = 64 321' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder bereken 93 215 − 47 836 = 45 379. Om dit na te gaan, tel hulle 45 379 + 47 836 op en kry 92 215, en maak die gevolgtrekking dat die aftrekking verkeerd moet wees. Werk die NAGAAN-optelling weer sorgvuldig deur. Was die leerder se oorspronklike aftrekking eintlik korrek, en waar het die fout gebeur?', answer: 'Gaan eers die oorspronklike aftrekking 93 215 − 47 836 na:\n45 379 + 47 836 = 93 215 (nou korrek gedoen)\n\nAangesien dit ooreenstem met die oorspronklike getal 93 215, was die leerder se oorspronklike aftrekking (45 379) korrek.\n\nDie fout het in die NAGAAN-berekening gebeur, nie in die oorspronklike aftrekking nie. Die leerder het ʼn optelfout gemaak toe hulle 45 379 + 47 836 opgetel het — hulle het 92 215 gekry in plaas van die korrekte 93 215, waarskynlik weens ʼn verlore oordrag in een van die kolomme. Dit wys hoekom dit belangrik is om ʼn nagaan-berekening sorgvuldig te herdoen: ʼn fout in die nagaan self kan ʼn korrekte antwoord verkeerd laat lyk.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Stelling lui: "402 005 − 187 648 = 214 357." Skryf die korrekte inverse-nagaan-vergelyking (ʼn optelling) wat hierdie aftrekking sou bevestig, en gee die totaal.', correctAnswer: '402005', correctAnswers: ['402005', '402 005', '214357+187648=402005', '214 357 + 187 648 = 402 005'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord by die getal wat afgetrek is:\n214 357 + 187 648 = 402 005\n\nDit stem ooreen met die oorspronklike getal, 402 005, dus is die aftrekking bevestig korrek. ✓', answer: '214 357 + 187 648 = 402 005' },

        // ── Blok: Woordprobleme — Optelling, Aftrekking of Albei (14-16) ────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Liefdadigheidsorganisasie het R345 600 in die eerste helfte van die jaar ingesamel en R178 950 in die tweede helfte. Hoeveel het die organisasie altesaam vir die jaar ingesamel?', correctAnswer: '524550', correctAnswers: ['524550', '524 550', 'r524550', 'R524 550'], explanation: '"Altesaam" beteken ons moet optel.\n345 600 + 178 950 = 524 550\n\nDie organisasie het altesaam R524 550 vir die jaar ingesamel.', answer: 'R524 550' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Dam hou 524 750 kiloliter water aan die begin van die droë seisoen. Teen die einde van die droë seisoen is daar nog net 386 920 kiloliter oor. Hoeveel kiloliter water is tydens die droë seisoen gebruik?', correctAnswer: '137830', correctAnswers: ['137830', '137 830'], explanation: '"Hoeveel kiloliter is gebruik" beteken ons soek die verskil, dus trek ons af.\n524 750 − 386 920 = 137 830\n\n137 830 kiloliter water is tydens die droë seisoen gebruik.', answer: '137 830 kiloliter' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Op Saterdag het 92 450 mense ʼn musiekfees bygewoon. Op Sondag was die opkoms 78 630 mense. Watter dag het die hoogste opkoms gehad, en met hoeveel mense?', answer: 'Saterdag het die hoogste opkoms gehad.\n\nVerskil: 92 450 − 78 630 = 13 820\n\nSaterdag se opkoms was 13 820 mense hoër as Sondag s\'n.' },

        // ── Blok: Multi-Stap Woordprobleme (17-19) ───────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'Thandi het R125 000 in haar spaarrekening. Sy trek R38 400 uit om vir ʼn kursus te betaal, en maak dan ʼn deposito van R15 750 uit haar bonus. Hoeveel is nou in haar rekening?', correctAnswer: '102350', correctAnswers: ['102350', '102 350', 'r102350', 'R102 350'], explanation: 'Stap 1 — Trek die onttrekking af:\n125 000 − 38 400 = 86 600\n\nStap 2 — Tel die deposito by:\n86 600 + 15 750 = 102 350\n\nThandi het nou R102 350 in haar rekening.', answer: 'R102 350' },
        { difficulty: 'Hard', question: 'ʼn Suiwelplaas het 218 400 liter melk in Januarie geproduseer en 194 750 liter in Februarie.\n\na) Hoeveel liter is oor die twee maande geproduseer?\nb) In Maart het die plaas 235 900 liter geproduseer. Hoeveel meer liter is in Maart geproduseer as in Februarie?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale liter vir Januarie en Februarie', correctAnswer: '413150', correctAnswers: ['413150', '413 150'], explanation: '218 400 + 194 750 = 413 150\n\nTel van regs na links op met oordra.\nAntwoord: 413 150 liter.' },
          { label: 'b) Hoeveel meer liter in Maart as in Februarie', correctAnswer: '41150', correctAnswers: ['41150', '41 150'], explanation: '235 900 − 194 750 = 41 150\n\nTrek van regs na links af met leen.\nGaan na: 41 150 + 194 750 = 235 900 ✓\n\nAntwoord: 41 150 liter meer in Maart as in Februarie.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder los hierdie probleem op: "ʼn Skool het R156 000 in sy fondsinsamelingsrekening gehad. Dit het R42 300 aan nuwe biblioteekboeke spandeer en toe ʼn verdere skenking van R18 900 ontvang. Hoeveel is nou in die rekening?" Die leerder bereken 156 000 + 42 300 = 198 300, en toe 198 300 − 18 900 = 179 400, en gee R179 400 as die finale antwoord. Verduidelik die leerder se fout en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is R132 600.\n\nDie leerder het die bewerkings in die verkeerde volgorde gedoen en die verkeerde bewerking vir spandering gebruik. Geld spandeer beteken die bedrag verminder (trek af), en ʼn skenking ontvang beteken dit vermeerder (tel op) — die leerder het eers opgetel en toe afgetrek, wat albei bewerkings omkeer van wat die probleem beskryf.\n\nKorrekte werk:\nStap 1 — Trek die bedrag wat spandeer is af: 156 000 − 42 300 = 113 700\nStap 2 — Tel die skenking by: 113 700 + 18 900 = 132 600\n\nDie rekening het nou R132 600, nie R179 400 nie. Dit is noodsaaklik om elke sleutelwoord noukeurig te lees ("spandeer" beteken trek af, "ontvang ʼn skenking" beteken tel op) en die bewerkings in die volgorde waarin hulle in die storie gebeur, toe te pas vir multi-stap-probleme.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het kolomoptelling, aftrekking, skatting en die nagaan van antwoorde met groot getalle bemeester.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok: Kolomoptelling met Oordra (0-3) ────────────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n4 523 687 + 1 876 945', correctAnswer: '6400632', correctAnswers: ['6400632', '6 400 632'], explanation: '4 523 687 + 1 876 945 = 6 400 632\n\n• Ene: 7 + 5 = 12 → skryf 2, dra 1 oor\n• Tiene: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Honderde: 6 + 9 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Duisende: 3 + 6 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Tienduisende: 2 + 7 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Honderdduisende: 5 + 8 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Miljoene: 4 + 1 + 1 (oorgedra) = 6\n\nAntwoord: 6 400 632', answer: '6 400 632' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die som van 3 167 284 en 2 954 837.', correctAnswer: '6122121', correctAnswers: ['6122121', '6 122 121'], explanation: '3 167 284 + 2 954 837 = 6 122 121\n\n• Ene: 4 + 7 = 11 → skryf 1, dra 1 oor\n• Tiene: 8 + 3 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Honderde: 2 + 8 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Duisende: 7 + 4 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Tienduisende: 6 + 5 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Honderdduisende: 1 + 9 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Miljoene: 3 + 2 + 1 (oorgedra) = 6\n\nAntwoord: 6 122 121', answer: '6 122 121' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n267 834 + 149 567 + 384 291', correctAnswer: '801692', correctAnswers: ['801692', '801 692'], explanation: '267 834 + 149 567 + 384 291 = 801 692\n\n• Ene: 4 + 7 + 1 = 12 → skryf 2, dra 1 oor\n• Tiene: 3 + 6 + 9 + 1 (oorgedra) = 19 → skryf 9, dra 1 oor\n• Honderde: 8 + 5 + 2 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Duisende: 7 + 9 + 4 + 1 (oorgedra) = 21 → skryf 1, dra 2 oor\n• Tienduisende: 6 + 4 + 8 + 2 (oorgedra) = 20 → skryf 0, dra 2 oor\n• Honderdduisende: 2 + 1 + 3 + 2 (oorgedra) = 8\n\nAntwoord: 801 692', answer: '801 692' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder het 42 638 + 19 457 so uitgewerk:\n\nD H T E\n 4 2 6 3 8\n+1 9 4 5 7\n—————————\n 5 1 0 9 5\n\nDie leerder het 51 095 as die finale antwoord neergeskryf, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 42 638 + 19 457 = 62 095.\n\nWerk kolom vir kolom:\n• Ene: 8 + 7 = 15 → skryf 5, dra 1 oor\n• Tiene: 3 + 5 + 1 (oorgedra) = 9\n• Honderde: 6 + 4 = 10 → skryf 0, dra 1 oor\n• Duisende: 2 + 9 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n• Tienduisende: 4 + 1 + 1 (oorgedra) = 6\n\nDie leerder se fout: in die duisende-kolom is 2 + 9 + 1 (oorgedra) = 12, wat ʼn oordrag van 1 na die tienduisende-kolom moet gee, wat dit 4 + 1 + 1 = 6 maak, nie 5 soos die leerder neergeskryf het nie. Hulle het die oordrag uit die duisende-kolom laat val.\n\nKorrekte antwoord: 62 095' },

        // ── Blok: Kolomaftrekking met Leen, insl. oor nulle (4-7) ────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n6 237 845 − 2 948 976', correctAnswer: '3288869', correctAnswers: ['3288869', '3 288 869'], explanation: '6 237 845 − 2 948 976 = 3 288 869\n\n• Ene: 5 − 6 → leen. Tiene 4 → 3, Ene 15 − 6 = 9\n• Tiene: 3 − 7 → leen. Honderde 8 → 7, Tiene 13 − 7 = 6\n• Honderde: 7 − 9 → leen. Duisende 7 → 6, Honderde 17 − 9 = 8\n• Duisende: 6 − 8 → leen. Tienduisende 3 → 2, Duisende 16 − 8 = 8\n• Tienduisende: 2 − 4 → leen. Honderdduisende 2 → 1, Tienduisende 12 − 4 = 8\n• Honderdduisende: 1 − 9 → leen. Miljoene 6 → 5, Honderdduisende 11 − 9 = 2\n• Miljoene: 5 − 2 = 3\n\nAntwoord: 3 288 869', answer: '3 288 869' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken, en wys jou leenwerk oor die nulle:\n80 000 000 − 34 567 892', correctAnswer: '45432108', correctAnswers: ['45432108', '45 432 108'], explanation: '80 000 000 − 34 567 892 = 45 432 108\n\nDie boonste getal het sewe nulle, dus leen ons heeltemal van die tienmiljoene-kolom af:\nTienmiljoene 8 → 7, en elke kolom van miljoene tot ene word 9, behalwe ene wat 10 word.\n\n• Ene: 10 − 2 = 8\n• Tiene: 9 − 9 = 0\n• Honderde: 9 − 8 = 1\n• Duisende: 9 − 7 = 2\n• Tienduisende: 9 − 6 = 3\n• Honderdduisende: 9 − 5 = 4\n• Miljoene: 9 − 4 = 5\n• Tienmiljoene: 7 − 3 = 4\n\nAntwoord: 45 432 108', answer: '45 432 108' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n8 000 000 − 3 216 549', correctAnswer: '4783451', correctAnswers: ['4783451', '4 783 451'], explanation: '8 000 000 − 3 216 549 = 4 783 451\n\nLeen oor die nulle: miljoene 8 → 7, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 9 = 1\n• Tiene: 9 − 4 = 5\n• Honderde: 9 − 5 = 4\n• Duisende: 9 − 6 = 3\n• Tienduisende: 9 − 1 = 8\n• Honderdduisende: 9 − 2 = 7\n• Miljoene: 7 − 3 = 4\n\nAntwoord: 4 783 451', answer: '4 783 451' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder sê: "6 000 000 − 2 345 678 = 3 754 322, want ek het oor al die nulle geleen." Bereken die presiese antwoord met die kolommetode, en verduidelik of die leerder korrek is.', answer: 'Die korrekte antwoord is 6 000 000 − 2 345 678 = 3 654 322.\n\nLeen oor die nulle: miljoene 6 → 5, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 8 = 2\n• Tiene: 9 − 7 = 2\n• Honderde: 9 − 6 = 3\n• Duisende: 9 − 5 = 4\n• Tienduisende: 9 − 4 = 5\n• Honderdduisende: 9 − 3 = 6\n• Miljoene: 5 − 2 = 3\n\nDie leerder is NIE korrek nie — hulle antwoord van 3 754 322 stem nie ooreen met 3 654 322 nie. Dit lyk of hulle ʼn klein foutjie in een van die kolomme van die leenketting gemaak het. Werk altyd kolom vir kolom van regs na links, en maak seker net die ene-syfer word 10 — elke nul tussenin behoort 9 te word.\n\nKorrekte antwoord: 3 654 322' },

        // ── Blok: Skat deur af te rond voor jy bereken (8-10) ────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 68 234 + 31 567 deur elke getal na die naaste tienduisend af te rond.', correctAnswer: '100000', correctAnswers: ['100000', '100 000'], explanation: 'Rond elke getal af na die naaste tienduisend:\n68 234 ≈ 70 000\n31 567 ≈ 30 000\n\nSkatting: 70 000 + 30 000 = 100 000\n\n(Die presiese antwoord, 68 234 + 31 567 = 99 801, is baie naby aan hierdie skatting.)', answer: '100 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Twee leerders skat 592 400 + 347 100. Zanele rond albei getalle af na die naaste honderdduisend en kry ʼn skatting van 900 000. Ben rond albei getalle af na die naaste tienduisend en kry ʼn skatting van 940 000. Die presiese antwoord is 939 500. Wie se skatting is meer redelik, en waarom?', answer: 'Die presiese antwoord is 592 400 + 347 100 = 939 500.\n\nZanele het na die naaste honderdduisend afgerond: 592 400 ≈ 600 000 en 347 100 ≈ 300 000, wat 600 000 + 300 000 = 900 000 gee. Dit is 39 500 van die presiese antwoord af.\n\nBen het na die naaste tienduisend afgerond: 592 400 ≈ 590 000 en 347 100 ≈ 350 000, wat 590 000 + 350 000 = 940 000 gee. Dit is slegs 500 van die presiese antwoord af.\n\nBen se skatting van 940 000 is meer redelik omdat afronding na ʼn kleiner plekwaarde (tienduisend in plaas van honderdduisend) elke getal nader aan sy oorspronklike waarde hou, sodat die skatting baie nader aan die presiese antwoord val.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Klerk skat 456 839 − 217 364 deur albei getalle eers na die naaste tienduisend af te rond, en kry ʼn skatting van 240 000. Hy bereken toe die presiese antwoord as 239 475. Is sy presiese antwoord redelik? Wys die afronding en verduidelik.', answer: '456 839 na die naaste tienduisend afgerond is 460 000 (duisende-syfer is 6, rond op).\n217 364 na die naaste tienduisend afgerond is 220 000 (duisende-syfer is 7, rond op).\n\nSkatting: 460 000 − 220 000 = 240 000\n\nDie presiese antwoord van 239 475 is slegs 525 van die skatting van 240 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle betrokke. Ja, sy presiese antwoord is redelik.' },

        // ── Blok: Nagaan met Inverse Bewerkings (11-13) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Gaan hierdie berekening na deur die inverse bewerking te gebruik:\n73 542 − 28 675 = 44 867\nSkryf die optelling wat jy sou gebruik om dit na te gaan, en gee die antwoord om te bevestig dat die aftrekking korrek is.', correctAnswer: '73542', correctAnswers: ['73542', '73 542', '44867+28675=73542', '44 867 + 28 675 = 73 542'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord terug by die getal wat afgetrek is:\n44 867 + 28 675 = 73 542\n\nDit stem ooreen met die oorspronklike getal, 73 542, dus is die aftrekking bevestig korrek. ✓', answer: '44 867 + 28 675 = 73 542' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder bereken 85 421 − 39 867 = 45 554. Om dit na te gaan, tel hulle 45 554 + 39 867 op en kry 84 421, en maak die gevolgtrekking dat die aftrekking verkeerd moet wees. Werk die NAGAAN-optelling weer sorgvuldig deur. Was die leerder se oorspronklike aftrekking eintlik korrek, en waar het die fout gebeur?', answer: 'Gaan eers die oorspronklike aftrekking 85 421 − 39 867 na:\n45 554 + 39 867 = 85 421 (nou korrek gedoen)\n\nAangesien dit ooreenstem met die oorspronklike getal 85 421, was die leerder se oorspronklike aftrekking (45 554) korrek.\n\nDie fout het in die NAGAAN-berekening gebeur, nie in die oorspronklike aftrekking nie. Die leerder het ʼn optelfout gemaak toe hulle 45 554 + 39 867 opgetel het — hulle het 84 421 gekry in plaas van die korrekte 85 421, waarskynlik weens ʼn verlore oordrag. Dit wys hoekom dit belangrik is om ʼn nagaan-berekening sorgvuldig te herdoen: ʼn fout in die nagaan self kan ʼn korrekte antwoord verkeerd laat lyk.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Stelling lui: "305 008 − 167 439 = 137 569." Skryf die korrekte inverse-nagaan-vergelyking (ʼn optelling) wat hierdie aftrekking sou bevestig, en gee die totaal.', correctAnswer: '305008', correctAnswers: ['305008', '305 008', '137569+167439=305008', '137 569 + 167 439 = 305 008'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord by die getal wat afgetrek is:\n137 569 + 167 439 = 305 008\n\nDit stem ooreen met die oorspronklike getal, 305 008, dus is die aftrekking bevestig korrek. ✓', answer: '137 569 + 167 439 = 305 008' },

        // ── Blok: Woordprobleme — Optelling, Aftrekking of Albei (14-16) ────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Groenteplaas het 256 800 kg mielies in die eerste seisoen geoes en 193 450 kg in die tweede seisoen. Hoeveel mielies het die plaas altesaam oor albei seisoene geoes?', correctAnswer: '450250', correctAnswers: ['450250', '450 250'], explanation: '"Altesaam" beteken ons moet optel.\n256 800 + 193 450 = 450 250\n\nDie plaas het altesaam 450 250 kg mielies oor albei seisoene geoes.', answer: '450 250 kg' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fabriek het ʼn teiken om vanmaand 613 400 bottels te vervaardig. Tot dusver is 275 680 bottels vervaardig. Hoeveel meer bottels moet die fabriek nog vervaardig om sy teiken te bereik?', correctAnswer: '337720', correctAnswers: ['337720', '337 720'], explanation: '"Hoeveel meer bottels word nog benodig" beteken ons soek die verskil, dus trek ons af.\n613 400 − 275 680 = 337 720\n\nDie fabriek moet nog 337 720 meer bottels vervaardig om sy teiken te bereik.', answer: '337 720 bottels' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Roete A tussen twee dorpe is 104 650 m lank. Roete B tussen dieselfde twee dorpe is 89 720 m lank. Watter roete is korter, en met hoeveel meter?', answer: 'Roete B is korter.\n\nVerskil: 104 650 − 89 720 = 14 930\n\nRoete B is 14 930 m korter as Roete A.' },

        // ── Blok: Multi-Stap Woordprobleme (17-19) ───────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Gemeenskapspaarklub het R156 000 in sy rekening. Dit betaal R42 300 aan lede vir ʼn groepprojek uit, en ontvang dan R18 900 in nuwe lidbydraes. Hoeveel is nou in die rekening?', correctAnswer: '132600', correctAnswers: ['132600', '132 600', 'r132600', 'R132 600'], explanation: 'Stap 1 — Trek die uitbetaling af:\n156 000 − 42 300 = 113 700\n\nStap 2 — Tel die nuwe bydraes by:\n113 700 + 18 900 = 132 600\n\nDie rekening het nou R132 600.', answer: 'R132 600' },
        { difficulty: 'Hard', question: 'ʼn Pluimveeplaas het 187 300 eiers in Oktober geproduseer en 164 950 eiers in November.\n\na) Hoeveel eiers is oor die twee maande geproduseer?\nb) In Desember het die plaas 201 800 eiers geproduseer. Hoeveel meer eiers is in Desember geproduseer as in November?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale eiers vir Oktober en November', correctAnswer: '352250', correctAnswers: ['352250', '352 250'], explanation: '187 300 + 164 950 = 352 250\n\nTel van regs na links op met oordra.\nAntwoord: 352 250 eiers.' },
          { label: 'b) Hoeveel meer eiers in Desember as in November', correctAnswer: '36850', correctAnswers: ['36850', '36 850'], explanation: '201 800 − 164 950 = 36 850\n\nTrek van regs na links af met leen.\nGaan na: 36 850 + 164 950 = 201 800 ✓\n\nAntwoord: 36 850 meer eiers in Desember as in November.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder los hierdie probleem op: "ʼn Kliniek het 96 400 entstofdosisse in voorraad gehad. Dit het 38 200 dosisse tydens ʼn entveldtog gebruik en toe ʼn nuwe aflewering van 27 500 dosisse ontvang. Hoeveel dosisse is nou in voorraad?" Die leerder bereken 96 400 + 27 500 = 123 900, en toe 123 900 − 38 200 = 85 700, en gee 85 700 as die finale antwoord. Verduidelik hoekom dit die korrekte totaal gee, of vind enige fout, en bevestig die korrekte antwoord.', answer: 'Die korrekte antwoord is 85 700 dosisse, en die leerder het toevallig die regte finale antwoord gekry — maar deur geluk met die volgorde van bewerkings, nie omdat hulle redenasie presies by die storie pas nie. Om dosisse korrek te hanteer beteken: voorraad verminder wanneer dosisse gebruik word (trek af) en vermeerder wanneer ʼn nuwe aflewering aankom (tel op). Aangesien optelling en aftrekking hier nie van volgorde afhang nie (die twee bewerkings is onafhanklike aanpassings van dieselfde beginhoeveelheid), gee albei volgordes dieselfde resultaat:\n\nKorrekte werk (in storie-volgorde):\nStap 1 — Trek die gebruikte dosisse af: 96 400 − 38 200 = 58 200\nStap 2 — Tel die nuwe aflewering by: 58 200 + 27 500 = 85 700\n\nAlbei metodes gee 85 700 dosisse nou in voorraad. Leerders moet egter steeds probleme in die volgorde waarin gebeurtenisse in die storie plaasvind, uitwerk waar moontlik, want nie alle multi-stap-probleme kan veilig herrangskik word nie — byvoorbeeld, as ʼn aflewering ʼn afslag gehad het wat slegs op oorblywende voorraad van toepassing was, sou die volgorde saak maak. In hierdie geval is die finale antwoord van 85 700 in elk geval korrek.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue kolomoptelling, aftrekking, skatting en die nagaan van antwoorde met groot getalle doen.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklikelewe-kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok: Kolomoptelling met Oordra (0-3) ────────────────────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n5 238 917 + 1 764 328', correctAnswer: '7003245', correctAnswers: ['7003245', '7 003 245'], explanation: '5 238 917 + 1 764 328 = 7 003 245\n\n• Ene: 7 + 8 = 15 → skryf 5, dra 1 oor\n• Tiene: 1 + 2 + 1 (oorgedra) = 4\n• Honderde: 9 + 3 = 12 → skryf 2, dra 1 oor\n• Duisende: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Tienduisende: 3 + 6 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Honderdduisende: 2 + 7 + 1 (oorgedra) = 10 → skryf 0, dra 1 oor\n• Miljoene: 5 + 1 + 1 (oorgedra) = 7\n\nAntwoord: 7 003 245', answer: '7 003 245' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bepaal die som van 4 287 635 en 3 196 748.', correctAnswer: '7484383', correctAnswers: ['7484383', '7 484 383'], explanation: '4 287 635 + 3 196 748 = 7 484 383\n\n• Ene: 5 + 8 = 13 → skryf 3, dra 1 oor\n• Tiene: 3 + 4 + 1 (oorgedra) = 8\n• Honderde: 6 + 7 = 13 → skryf 3, dra 1 oor\n• Duisende: 7 + 6 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Tienduisende: 8 + 9 + 1 (oorgedra) = 18 → skryf 8, dra 1 oor\n• Honderdduisende: 2 + 1 + 1 (oorgedra) = 4\n• Miljoene: 4 + 3 = 7\n\nAntwoord: 7 484 383', answer: '7 484 383' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Tel al drie getalle op en wys jou kolomwerk:\n314 267 + 198 453 + 276 845', correctAnswer: '789565', correctAnswers: ['789565', '789 565'], explanation: '314 267 + 198 453 + 276 845 = 789 565\n\n• Ene: 7 + 3 + 5 = 15 → skryf 5, dra 1 oor\n• Tiene: 6 + 5 + 4 + 1 (oorgedra) = 16 → skryf 6, dra 1 oor\n• Honderde: 2 + 4 + 8 + 1 (oorgedra) = 15 → skryf 5, dra 1 oor\n• Duisende: 4 + 8 + 6 + 1 (oorgedra) = 19 → skryf 9, dra 1 oor\n• Tienduisende: 1 + 9 + 7 + 1 (oorgedra) = 18 → skryf 8, dra 1 oor\n• Honderdduisende: 3 + 1 + 2 + 1 (oorgedra) = 7\n\nAntwoord: 789 565', answer: '789 565' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Leerder het 57 284 + 36 849 so uitgewerk:\n\nD H T E\n 5 7 2 8 4\n+3 6 8 4 9\n—————————\n 8 4 0 3 3\n\nDie leerder het 84 033 as die finale antwoord neergeskryf, maar dit is verkeerd. Vind die fout, verduidelik wat verkeerd gegaan het, en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 57 284 + 36 849 = 94 133.\n\nWerk kolom vir kolom:\n• Ene: 4 + 9 = 13 → skryf 3, dra 1 oor\n• Tiene: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n• Honderde: 2 + 8 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n• Duisende: 7 + 6 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n• Tienduisende: 5 + 3 + 1 (oorgedra) = 9\n\nDie leerder se fout: in die duisende-kolom is 7 + 6 + 1 (oorgedra) = 14, wat ʼn oordrag van 1 na die tienduisende-kolom moet gee, wat dit 5 + 3 + 1 = 9 maak, nie 8 soos die leerder neergeskryf het nie. Hulle het die oordrag laat val en ook die honderde-kolom verkeerd opgetel.\n\nKorrekte antwoord: 94 133' },

        // ── Blok: Kolomaftrekking met Leen, insl. oor nulle (4-7) ────────────
        { difficulty: 'Easy', checkMode: 'auto', question: 'Bereken:\n7 134 586 − 2 957 648', correctAnswer: '4176938', correctAnswers: ['4176938', '4 176 938'], explanation: '7 134 586 − 2 957 648 = 4 176 938\n\n• Ene: 6 − 8 → leen. Tiene 8 → 7, Ene 16 − 8 = 8\n• Tiene: 7 − 4 = 3\n• Honderde: 5 − 6 → leen. Duisende 4 → 3, Honderde 15 − 6 = 9\n• Duisende: 3 − 7 → leen. Tienduisende 3 → 2, Duisende 13 − 7 = 6\n• Tienduisende: 2 − 5 → leen. Honderdduisende 1 → 0, Tienduisende 12 − 5 = 7\n• Honderdduisende: 0 − 9 → leen. Miljoene 7 → 6, Honderdduisende 10 − 9 = 1\n• Miljoene: 6 − 2 = 4\n\nAntwoord: 4 176 938', answer: '4 176 938' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken, en wys jou leenwerk oor die nulle:\n60 000 000 − 28 437 956', correctAnswer: '31562044', correctAnswers: ['31562044', '31 562 044'], explanation: '60 000 000 − 28 437 956 = 31 562 044\n\nDie boonste getal het ses nulle, dus leen ons heeltemal van die tienmiljoene-kolom af:\nTienmiljoene 6 → 5, en elke kolom van miljoene tot ene word 9, behalwe ene wat 10 word.\n\n• Ene: 10 − 6 = 4\n• Tiene: 9 − 5 = 4\n• Honderde: 9 − 9 = 0\n• Duisende: 9 − 7 = 2\n• Tienduisende: 9 − 3 = 6\n• Honderdduisende: 9 − 4 = 5\n• Miljoene: 9 − 8 = 1\n• Tienmiljoene: 5 − 2 = 3\n\nAntwoord: 31 562 044', answer: '31 562 044' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Bereken:\n7 000 000 − 3 489 265', correctAnswer: '3510735', correctAnswers: ['3510735', '3 510 735'], explanation: '7 000 000 − 3 489 265 = 3 510 735\n\nLeen oor die nulle: miljoene 7 → 6, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 5 = 5\n• Tiene: 9 − 6 = 3\n• Honderde: 9 − 2 = 7\n• Duisende: 9 − 9 = 0\n• Tienduisende: 9 − 8 = 1\n• Honderdduisende: 9 − 4 = 5\n• Miljoene: 6 − 3 = 3\n\nAntwoord: 3 510 735', answer: '3 510 735' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder sê: "4 000 000 − 1 876 543 = 2 223 457, want ek het oor al die nulle geleen." Bereken die presiese antwoord met die kolommetode, en verduidelik of die leerder korrek is.', answer: 'Die korrekte antwoord is 4 000 000 − 1 876 543 = 2 123 457.\n\nLeen oor die nulle: miljoene 4 → 3, en honderdduisende tot tiene word elk 9, ene word 10.\n\n• Ene: 10 − 3 = 7\n• Tiene: 9 − 4 = 5\n• Honderde: 9 − 5 = 4\n• Duisende: 9 − 6 = 3\n• Tienduisende: 9 − 7 = 2\n• Honderdduisende: 9 − 8 = 1\n• Miljoene: 3 − 1 = 2\n\nDie leerder is NIE korrek nie — hulle antwoord van 2 223 457 stem nie ooreen met 2 123 457 nie. Dit lyk of hulle ʼn fout in die honderdduisende-kolom van die leenketting gemaak het. Werk altyd kolom vir kolom van regs na links, en maak seker net die ene-syfer word 10 — elke nul tussenin behoort 9 te word.\n\nKorrekte antwoord: 2 123 457' },

        // ── Blok: Skat deur af te rond voor jy bereken (8-10) ────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Skat 74 582 + 26 317 deur elke getal na die naaste tienduisend af te rond.', correctAnswer: '100000', correctAnswers: ['100000', '100 000'], explanation: 'Rond elke getal af na die naaste tienduisend:\n74 582 ≈ 70 000\n26 317 ≈ 30 000\n\nSkatting: 70 000 + 30 000 = 100 000\n\n(Die presiese antwoord, 74 582 + 26 317 = 100 899, is baie naby aan hierdie skatting.)', answer: '100 000' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Twee leerders skat 638 450 + 415 200. Karabo rond albei getalle af na die naaste honderdduisend en kry ʼn skatting van 1 000 000. Priya rond albei getalle af na die naaste tienduisend en kry ʼn skatting van 1 060 000. Die presiese antwoord is 1 053 650. Wie se skatting is meer redelik, en waarom?', answer: 'Die presiese antwoord is 638 450 + 415 200 = 1 053 650.\n\nKarabo het na die naaste honderdduisend afgerond: 638 450 ≈ 600 000 en 415 200 ≈ 400 000, wat 600 000 + 400 000 = 1 000 000 gee. Dit is 53 650 van die presiese antwoord af.\n\nPriya het na die naaste tienduisend afgerond: 638 450 ≈ 640 000 en 415 200 ≈ 420 000, wat 640 000 + 420 000 = 1 060 000 gee. Dit is slegs 6 350 van die presiese antwoord af.\n\nPriya se skatting van 1 060 000 is meer redelik omdat afronding na ʼn kleiner plekwaarde (tienduisend in plaas van honderdduisend) elke getal nader aan sy oorspronklike waarde hou, sodat die skatting baie nader aan die presiese antwoord val.' },
        { difficulty: 'Medium', checkMode: 'self', question: 'ʼn Klerk skat 528 417 − 289 654 deur albei getalle eers na die naaste tienduisend af te rond, en kry ʼn skatting van 240 000. Sy bereken toe die presiese antwoord as 238 763. Is haar presiese antwoord redelik? Wys die afronding en verduidelik.', answer: '528 417 na die naaste tienduisend afgerond is 530 000 (duisende-syfer is 8, rond op).\n289 654 na die naaste tienduisend afgerond is 290 000 (duisende-syfer is 9, rond op).\n\nSkatting: 530 000 − 290 000 = 240 000\n\nDie presiese antwoord van 238 763 is slegs 1 237 van die skatting van 240 000 af — ʼn klein verskil in vergelyking met die grootte van die getalle betrokke. Ja, haar presiese antwoord is redelik.' },

        // ── Blok: Nagaan met Inverse Bewerkings (11-13) ──────────────────────
        { difficulty: 'Medium', checkMode: 'auto', question: 'Gaan hierdie berekening na deur die inverse bewerking te gebruik:\n82 635 − 47 968 = 34 667\nSkryf die optelling wat jy sou gebruik om dit na te gaan, en gee die antwoord om te bevestig dat die aftrekking korrek is.', correctAnswer: '82635', correctAnswers: ['82635', '82 635', '34667+47968=82635', '34 667 + 47 968 = 82 635'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord terug by die getal wat afgetrek is:\n34 667 + 47 968 = 82 635\n\nDit stem ooreen met die oorspronklike getal, 82 635, dus is die aftrekking bevestig korrek. ✓', answer: '34 667 + 47 968 = 82 635' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder bereken 76 438 − 29 574 = 46 864. Om dit na te gaan, tel hulle 46 864 + 29 574 op en kry 75 438, en maak die gevolgtrekking dat die aftrekking verkeerd moet wees. Werk die NAGAAN-optelling weer sorgvuldig deur. Was die leerder se oorspronklike aftrekking eintlik korrek, en waar het die fout gebeur?', answer: 'Gaan eers die oorspronklike aftrekking 76 438 − 29 574 na:\n46 864 + 29 574 = 76 438 (nou korrek gedoen)\n\nAangesien dit ooreenstem met die oorspronklike getal 76 438, was die leerder se oorspronklike aftrekking (46 864) korrek.\n\nDie fout het in die NAGAAN-berekening gebeur, nie in die oorspronklike aftrekking nie. Die leerder het ʼn optelfout gemaak toe hulle 46 864 + 29 574 opgetel het — hulle het 75 438 gekry in plaas van die korrekte 76 438, waarskynlik weens ʼn verlore oordrag. Dit wys hoekom dit belangrik is om ʼn nagaan-berekening sorgvuldig te herdoen: ʼn fout in die nagaan self kan ʼn korrekte antwoord verkeerd laat lyk.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Stelling lui: "506 004 − 238 467 = 267 537." Skryf die korrekte inverse-nagaan-vergelyking (ʼn optelling) wat hierdie aftrekking sou bevestig, en gee die totaal.', correctAnswer: '506004', correctAnswers: ['506004', '506 004', '267537+238467=506004', '267 537 + 238 467 = 506 004'], explanation: 'Om ʼn aftrekking na te gaan, tel jy die antwoord by die getal wat afgetrek is:\n267 537 + 238 467 = 506 004\n\nDit stem ooreen met die oorspronklike getal, 506 004, dus is die aftrekking bevestig korrek. ✓', answer: '267 537 + 238 467 = 506 004' },

        // ── Blok: Woordprobleme — Optelling, Aftrekking of Albei (14-16) ────
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Sokkerstadion het 387 500 kaartjies vir die liga-seisoen verkoop en 246 800 kaartjies vir bekerwedstryde. Hoeveel kaartjies is altesaam oor albei kompetisies verkoop?', correctAnswer: '634300', correctAnswers: ['634300', '634 300'], explanation: '"Altesaam" beteken ons moet optel.\n387 500 + 246 800 = 634 300\n\n634 300 kaartjies is altesaam oor albei kompetisies verkoop.', answer: '634 300 kaartjies' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Tekstielfabriek het 542 600 meter stof in voorraad. Dit gebruik 318 750 meter om ʼn bestelling te voltooi. Hoeveel meter stof bly in voorraad oor?', correctAnswer: '223850', correctAnswers: ['223850', '223 850'], explanation: '"Hoeveel meter bly oor" beteken ons moet aftrek.\n542 600 − 318 750 = 223 850\n\n223 850 meter stof bly in voorraad oor.', answer: '223 850 meter' },
        { difficulty: 'Medium', checkMode: 'self', question: 'Busmaatskappy A het verlede maand 97 430 passasiers vervoer. Busmaatskappy B het in dieselfde maand 83 160 passasiers vervoer. Watter maatskappy het meer passasiers vervoer, en met hoeveel?', answer: 'Busmaatskappy A het meer passasiers vervoer.\n\nVerskil: 97 430 − 83 160 = 14 270\n\nBusmaatskappy A het 14 270 meer passasiers as Busmaatskappy B vervoer.' },

        // ── Blok: Multi-Stap Woordprobleme (17-19) ───────────────────────────
        { difficulty: 'Hard', checkMode: 'auto', question: 'ʼn Jeugsportklub het R138 000 in sy bankrekening. Dit spandeer R47 250 aan nuwe toerusting, en ontvang dan ʼn borgskapdeposito van R21 600. Hoeveel is nou in die rekening?', correctAnswer: '112350', correctAnswers: ['112350', '112 350', 'r112350', 'R112 350'], explanation: 'Stap 1 — Trek die bedrag wat spandeer is af:\n138 000 − 47 250 = 90 750\n\nStap 2 — Tel die borgskapdeposito by:\n90 750 + 21 600 = 112 350\n\nDie rekening het nou R112 350.', answer: 'R112 350' },
        { difficulty: 'Hard', question: 'ʼn Bakkery het 162 400 brode in April geproduseer en 178 650 brode in Mei.\n\na) Hoeveel brode is oor die twee maande geproduseer?\nb) In Junie het die bakkery 195 300 brode geproduseer. Hoeveel meer brode is in Junie geproduseer as in Mei?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale brode vir April en Mei', correctAnswer: '341050', correctAnswers: ['341050', '341 050'], explanation: '162 400 + 178 650 = 341 050\n\nTel van regs na links op met oordra.\nAntwoord: 341 050 brode.' },
          { label: 'b) Hoeveel meer brode in Junie as in Mei', correctAnswer: '16650', correctAnswers: ['16650', '16 650'], explanation: '195 300 − 178 650 = 16 650\n\nTrek van regs na links af met leen.\nGaan na: 16 650 + 178 650 = 195 300 ✓\n\nAntwoord: 16 650 meer brode in Junie as in Mei.' },
        ] },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder los hierdie probleem op: "ʼn Biblioteek het 84 600 boeke op sy rakke gehad. Dit het 26 400 boeke aan ʼn landelike skool geskenk en toe ʼn nuwe bestelling van 19 800 boeke ontvang. Hoeveel boeke is nou op die rakke?" Die leerder bereken 84 600 − 19 800 = 64 800, en toe 64 800 + 26 400 = 91 200, en gee 91 200 as die finale antwoord. Verduidelik die leerder se fout en gee die korrekte antwoord.', answer: 'Die korrekte antwoord is 78 000 boeke.\n\nDie leerder het die verkeerde bewerking vir elke gebeurtenis gebruik: boeke skenk beteken die biblioteek se voorraad verminder (trek 26 400 af), en ʼn nuwe bestelling ontvang beteken dit vermeerder (tel 19 800 by). Die leerder het inteendeel die nuwe bestelling afgetrek en die skenking bygetel — presies die teenoorgestelde van wat behoort te gebeur.\n\nKorrekte werk:\nStap 1 — Trek die geskenkte boeke af: 84 600 − 26 400 = 58 200\nStap 2 — Tel die nuwe bestelling by: 58 200 + 19 800 = 78 000\n\nDie biblioteek het nou 78 000 boeke, nie 91 200 nie. Pas altyd elke sleutelwoord by die korrekte bewerking: "geskenk" of "weggegee" beteken trek af, "ontvang" of "nuwe bestelling" beteken tel op.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan kolomoptelling, aftrekking, skatting en nagaan met groot getalle op werklikelewe-probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
