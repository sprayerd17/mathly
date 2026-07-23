import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (decimal fraction roles) ──────────────────────────────────
// decimal places  → orange  (#ea580c)
// multiplication  → green   (#16a34a)
// final answer    → blue    (#2563eb)
// power of 10     → orange  (#ea580c)
// division step   → blue    (#2563eb)
// base            → blue    (#2563eb)
// exponent        → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Desimale Breuke',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VERMENIGVULDIGING VAN DESIMALE BREUKE MET DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-decimal-fractions',
      title: 'Vermenigvuldiging van Desimale Breuke met Desimale Breuke',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien <strong>optelling, aftrekking en vermenigvuldiging</strong> van desimale breuke tot ten minste 3 desimale plekke, en brei dan vermenigvuldiging uit om desimale breuke wat met ander desimale breuke vermenigvuldig word (nie beperk tot een desimale plek nie), in te sluit. Tel die totale ${or('desimale plekke')} in albei getalle om die desimale komma korrek in die ${bl('antwoord')} te plaas.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('desimale plekke getel')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldiging')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om desimale breuke te vermenigvuldig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vermenigvuldig')} — Ignoreer die desimale kommas en ${gr('vermenigvuldig')} die getalle asof dit heelgetalle is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Tel')} — Tel die totale aantal ${or('desimale plekke')} in albei oorspronklike getalle saam.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Plaas')} — Tel daardie aantal plekke van regs af in jou produk en sit die desimale komma in om die ${bl('finale antwoord')} te kry. Voeg voorlopende nulle by indien nodig.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelreël</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die totale aantal ${or('desimale plekke')} in die ${bl('antwoord')} is altyd gelyk aan die totale aantal ${or('desimale plekke')} in albei faktore saam. As die heelgetal-produk minder syfers het as wat benodig word, voeg voorlopende nulle na die desimale komma by.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 2,45 × 3,6.',
          answer: `${gr('2,45')} × ${gr('3,6')} = ${bl('8,82')}`,
          steps: [
            `${gr('Vermenigvuldig')} sonder die desimale kommas: ${gr('245')} × ${gr('36')} = ${gr('8 820')}`,
            `${or('Tel')} desimale plekke: 2,45 het ${or('2')} desimale plekke; 3,6 het ${or('1')} desimale plek. Totaal: ${or('2 + 1 = 3')} desimale plekke.`,
            `${bl('Plaas')} die desimale komma 3 plekke van regs af in 8 820 → 8,820 = ${bl('8,82')}`,
          ],
        },
        {
          question: 'Bereken 0,125 × 0,04.',
          answer: `${gr('0,125')} × ${gr('0,04')} = ${bl('0,005')}`,
          steps: [
            `${gr('Vermenigvuldig')} sonder die desimale kommas: ${gr('125')} × ${gr('4')} = ${gr('500')}`,
            `${or('Tel')} desimale plekke: 0,125 het ${or('3')} desimale plekke; 0,04 het ${or('2')} desimale plekke. Totaal: ${or('3 + 2 = 5')} desimale plekke.`,
            `${bl('Plaas')} die desimale komma 5 plekke van regs af in 500 → 0,00500 = ${bl('0,005')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 1,5 × 2,4.',
          answer: '3,6',
          checkMode: 'auto',
          correctAnswer: '3,6',
          correctAnswers: ['3.6', '3,6'],
          explanation: 'Vermenigvuldig sonder desimale: 15 × 24 = 360\nTel desimale plekke: 1 + 1 = 2\nPlaas desimale komma: 360 → 3,60 = 3,6 ✓',
        },

        // ── V2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 3,25 × 1,6.',
          answer: '5,2',
          checkMode: 'auto',
          correctAnswer: '5,2',
          correctAnswers: ['5.2', '5,2'],
          explanation: 'Vermenigvuldig sonder desimale: 325 × 16 = 5 200\nTel desimale plekke: 2 + 1 = 3\nPlaas desimale komma: 5 200 → 5,200 = 5,2 ✓',
        },

        // ── V3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken 0,05 × 0,3 en kry 0,15. Kontroleer sy antwoord en verbeter dit indien nodig.',
          answer: 'Hy is verkeerd — 5 × 3 = 15, en met 4 desimale plekke in totaal gee dit 0,0015, nie 0,15 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om desimale breuke te vermenigvuldig deur desimale plekke te tel en die desimale komma korrek in die produk te plaas',

      diagramPlaceholder:
        'Kolomuitleg wat 2,45 × 3,6 as heelgetalle vermenigvuldig wys, desimale plekke getel, en die desimale komma in die finale antwoord geplaas',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:'Courier New',monospace;">` +
        `<text x="200" y="28" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">2,45</text>` +
        `<text x="200" y="54" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">×  3,6</text>` +
        `<line x1="20" y1="64" x2="200" y2="64" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="90" text-anchor="end" font-size="16" font-weight="700" fill="#16a34a">245 × 36 = 8 820</text>` +
        `<text x="150" y="102" text-anchor="end" font-size="9" fill="#16a34a">(ignoreer desimale kommas)</text>` +
        `<text x="200" y="128" text-anchor="end" font-size="14" font-weight="700" fill="#ea580c">2 + 1 = 3 desimale plekke</text>` +
        `<line x1="20" y1="140" x2="200" y2="140" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="168" text-anchor="end" font-size="20" font-weight="700" fill="#2563eb">8,82</text>` +
        `<text x="150" y="182" text-anchor="end" font-size="9" fill="#2563eb">(3 plekke van regs af)</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — DELING VAN DESIMALE BREUKE DEUR DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-decimal-fractions',
      title: 'Deling van Desimale Breuke deur Desimale Breuke',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei deling uit om desimale breuke deur ander desimale breuke te deel. Om deur ʼn desimale getal te deel, ${or('vermenigvuldig albei getalle met ʼn mag van 10')} om die deler ʼn heelgetal te maak, en ${bl('deel')} dan soos gewoonlik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vermenigvuldig met magte van 10')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('delingstappe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om deur ʼn desimale breuk te deel</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Kies ʼn mag van 10')} — Tel die desimale plekke in die deler. ${or('Vermenigvuldig albei')} die deeltal en die deler met 10, 100, of 1 000 om die deler ʼn heelgetal te maak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Deel')} — Voer die ${bl('deling')} nou uit terwyl die deler ʼn heelgetal is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Antwoord')} — Die resultaat is jou ${gr('finale antwoord')}. Om albei getalle met dieselfde mag van 10 te vermenigvuldig, verander nie die waarde van die kwosiënt nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom dit werk</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Om albei')} die deeltal en die deler met dieselfde getal te vermenigvuldig, is gelykstaande aan om die breuk met 1 te vermenigvuldig, sodat die kwosiënt onveranderd bly. Kies die kleinste mag van 10 wat alle desimale plekke uit die deler verwyder.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 4,8 ÷ 0,6.',
          answer: `${or('4,8')} ÷ ${or('0,6')} = ${bl('48')} ÷ ${bl('6')} = ${gr('8')}`,
          steps: [
            `Die deler 0,6 het ${or('1')} desimale plek. ${or('Vermenigvuldig albei met 10')}: 4,8 × 10 = ${or('48')} en 0,6 × 10 = ${or('6')}.`,
            `${bl('Deel')}: ${bl('48')} ÷ ${bl('6')} = ${gr('8')}`,
          ],
        },
        {
          question: 'Bereken 1,25 ÷ 0,05.',
          answer: `${or('1,25')} ÷ ${or('0,05')} = ${bl('125')} ÷ ${bl('5')} = ${gr('25')}`,
          steps: [
            `Die deler 0,05 het ${or('2')} desimale plekke. ${or('Vermenigvuldig albei met 100')}: 1,25 × 100 = ${or('125')} en 0,05 × 100 = ${or('5')}.`,
            `${bl('Deel')}: ${bl('125')} ÷ ${bl('5')} = ${gr('25')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 6,4 ÷ 0,8.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Deler 0,8 het 1 desimale plek. Vermenigvuldig albei met 10: 64 ÷ 8 = 8 ✓',
        },

        // ── V5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 7,2 ÷ 0,06.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Deler 0,06 het 2 desimale plekke. Vermenigvuldig albei met 100: 720 ÷ 6 = 120 ✓',
        },

        // ── V6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê 0,9 ÷ 0,3 = 3. Is sy korrek? Verduidelik.',
          answer: 'Ja — as albei met 10 vermenigvuldig word, kry ʼn mens 9 ÷ 3 = 3.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om desimale breuke te deel deur die deler na ʼn heelgetal om te skakel deur met magte van 10 te vermenigvuldig',

      diagramPlaceholder:
        'Vloeidiagram wat 4,8 ÷ 0,6 verander in 48 ÷ 6 deur albei getalle met 10 te vermenigvuldig, wat die finale antwoord 8 gee',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="24" text-anchor="middle" font-size="18" font-weight="700" fill="#0f1f3d">4,8 ÷ 0,6</text>` +
        `<line x1="110" y1="34" x2="110" y2="60" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="110,66 104,56 116,56" fill="#ea580c"/>` +
        `<text x="140" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">×10 albei</text>` +
        `<text x="110" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#2563eb">48 ÷ 6</text>` +
        `<line x1="110" y1="98" x2="110" y2="122" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="110,128 104,118 116,118" fill="#2563eb"/>` +
        `<text x="135" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">deel</text>` +
        `<text x="110" y="160" text-anchor="middle" font-size="26" font-weight="700" fill="#16a34a">= 8</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — KWADRATE, KUBUSSE EN WORTELS VAN DESIMALE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-decimal',
      title: 'Kwadrate, Kubusse en Wortels van Desimale Breuke',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Ons bereken die <strong>kwadrate, kubusse, vierkantswortels en kubuswortels</strong> van desimale breuke deur dieselfde bewerkings as met heelgetalle toe te pas, maar met noukeurige oplettendheid vir ${or('desimale plekke')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondtal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('grondtal')}${or('²')} — Kwadraat</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die ${bl('grondtal')} met homself. Die desimale plekke in die resultaat word verdubbel.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('grondtal')}${or('³')} — Kubus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die ${bl('grondtal')} twee keer met homself. Die desimale plekke in die resultaat word verdriedubbel.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('√')}${bl('grondtal')} — Vierkantswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die getal wat, wanneer dit gekwadreer word, die ${bl('grondtal')} gee. Vra: watter waarde × homself = grondtal?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('∛')}${bl('grondtal')} — Kubuswortel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die getal wat, wanneer dit gekubeer word, die ${bl('grondtal')} gee. Vra: watter waarde × homself × homself = grondtal?</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk: gebruik jou kennis van heelgetalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy kan wortels van desimale breuke uitwerk deur te vra: "Watter ${bl('grondtal')} tot hierdie ${or('mag')} verhef, gee hierdie resultaat?" As jy die kwadrate en kubusse van heelgetalle tot 10 ken, maak dit dit maklik — hou net die desimale plekke dop.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 0,3².',
          answer: `${bl('0,3')}${or('²')} = ${gr('0,09')}`,
          steps: [
            `${bl('0,3')}${or('²')} = ${bl('0,3')} × ${bl('0,3')} = ${gr('0,09')}`,
          ],
        },
        {
          question: 'Vind die kubuswortel van 0,027.',
          answer: `${gr('∛')}${bl('0,027')} = ${gr('0,3')}`,
          steps: [
            `${gr('∛')}${bl('0,027')} = ${gr('0,3')}, aangesien ${bl('0,3')}${or('³')} = ${bl('0,3')} × ${bl('0,3')} × ${bl('0,3')} = 0,027 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 0,6².',
          answer: '0,36',
          checkMode: 'auto',
          correctAnswer: '0,36',
          correctAnswers: ['0.36', '0,36'],
          explanation: '0,6² = 0,6 × 0,6 = 0,36 ✓',
        },

        // ── V8 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 0,4³.',
          answer: '0,064',
          checkMode: 'auto',
          correctAnswer: '0,064',
          correctAnswers: ['0.064', '0,064'],
          explanation: '0,4³ = 0,4 × 0,4 × 0,4\n0,4 × 0,4 = 0,16\n0,16 × 0,4 = 0,064 ✓',
        },

        // ── V9 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die vierkantswortel van 0,16.',
          answer: '√0,16 = 0,4, aangesien 0,4² = 0,16.',
          checkMode: 'self',
        },

        // ── V10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die kubuswortel van 0,001.',
          answer: '0,1',
          checkMode: 'auto',
          correctAnswer: '0,1',
          correctAnswers: ['0.1', '0,1'],
          explanation: '∛0,001 = 0,1, aangesien 0,1³ = 0,1 × 0,1 × 0,1 = 0,001 ✓',
        },

        // ── V11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê √0,25 = 0,05. Is hy korrek? Verduidelik.',
          answer: 'Nee — √0,25 = 0,5, aangesien 0,5² = 0,25, nie 0,05 nie.',
          checkMode: 'self',
        },

        // ── V12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken 2,5 × 0,4 ÷ 0,5.',
          answer: '2',
          checkMode: 'auto',
          correctAnswer: '2',
          explanation: 'Stap 1: 2,5 × 0,4 — vermenigvuldig: 25 × 4 = 100, 2 desimale plekke → 1,00 = 1\nStap 2: 1 ÷ 0,5 — vermenigvuldig albei met 10: 10 ÷ 5 = 2 ✓',
        },

        // ── V13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Stuk lap kos R45,60 per meter. Vind die koste van 2,5 meter.',
          answer: 'R114',
          checkMode: 'auto',
          correctAnswer: 'R114',
          correctAnswers: ['R114', '114', 'R114.00', '114.00', 'R114,00', '114,00'],
          explanation: '45,60 × 2,5:\nVermenigvuldig sonder desimale: 4 560 × 25 = 114 000\nTel desimale plekke: 2 + 1 = 3\nPlaas desimale komma: 114 000 → 114,000 = R114 ✓',
        },

        // ── V14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê deling deur ʼn desimale getal kleiner as 1 maak die antwoord altyd kleiner. Is sy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — byvoorbeeld 4 ÷ 0,5 = 8, wat groter is as 4. Om deur ʼn getal kleiner as 1 te deel, maak die antwoord groter.',
          checkMode: 'self',
        },

        // ── V15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (0,2)³ + (0,5)².',
          answer: '0,258',
          checkMode: 'auto',
          correctAnswer: '0,258',
          correctAnswers: ['0.258', '0,258'],
          explanation: '(0,2)³ = 0,2 × 0,2 × 0,2 = 0,008\n(0,5)² = 0,5 × 0,5 = 0,25\n0,008 + 0,25 = 0,258 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om kwadrate, kubusse, vierkantswortels en kubuswortels van desimale breuke stap vir stap te bereken',

      diagramPlaceholder:
        '10-by-10-roosteroppervlaktemodel wat 0,3² = 0,09 wys, langs drie gestapelde lae wat 0,3³ = 0,027 wys, sodat ∛0,027 = 0,3',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="15" y="15" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 9 }, (_, i) => `<line x1="${15 + 10 * (i + 1)}" y1="15" x2="${15 + 10 * (i + 1)}" y2="115" stroke="#cbd5e1" stroke-width="0.75"/>`).join('') +
        Array.from({ length: 9 }, (_, i) => `<line x1="15" y1="${15 + 10 * (i + 1)}" x2="115" y2="${15 + 10 * (i + 1)}" stroke="#cbd5e1" stroke-width="0.75"/>`).join('') +
        `<rect x="15" y="15" width="30" height="30" fill="rgba(37,99,235,0.28)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="30" y="10" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">0,3</text>` +
        `<text x="6" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb" transform="rotate(-90 6 34)">0,3</text>` +
        `<text x="65" y="135" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">0,3² = 0,09</text>` +
        `<rect x="190" y="70" width="36" height="36" fill="rgba(37,99,235,0.10)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="202" y="58" width="36" height="36" fill="rgba(37,99,235,0.16)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<rect x="214" y="46" width="36" height="36" fill="rgba(37,99,235,0.24)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="232" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">∛0,027 = 0,3</text>` +
        `<text x="232" y="146" text-anchor="middle" font-size="9" fill="#6b7280">0,3 × 0,3 × 0,3 = 0,027</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 12, message: 'Uitstekende werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-4 Multi-stap gemengde bewerkings | 5-8 Vermenigvuldiging &
    // deling van desimale breuke deur desimale breuke | 9-12 Kwadrate, kubusse
    // & wortels | 13-16 Omskakeling desimaal/breuk/persentasie | 17-20
    // Woordprobleme & foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Multi-stap gemengde bewerkings met desimale breuke (1-4)
        { difficulty: 'Medium', question: 'Bereken 12,5 + 3,6 × 2,4, deur die korrekte volgorde van bewerkings toe te pas.', answer: '21,14', checkMode: 'auto', correctAnswer: '21,14', correctAnswers: ['21.14', '21,14'], explanation: 'Vermenigvuldiging voor optelling: 3,6 × 2,4 = 8,64\n12,5 + 8,64 = 21,14 ✓' },
        { difficulty: 'Medium', question: 'Bereken (8,4 - 2,9) × 1,5.', answer: '8,25', checkMode: 'auto', correctAnswer: '8,25', correctAnswers: ['8.25', '8,25'], explanation: 'Hakies eerste: 8,4 − 2,9 = 5,5\n5,5 × 1,5 = 8,25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 15,6 ÷ 1,2 + 3,5 × 2.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Deling en vermenigvuldiging voor optelling:\n15,6 ÷ 1,2 = 13\n3,5 × 2 = 7\n13 + 7 = 20 ✓' },
        { difficulty: 'Hard', question: 'Bereken 2,5 × 0,4 + 6,3 ÷ 0,9.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Vermenigvuldiging en deling voor optelling:\n2,5 × 0,4 = 1\n6,3 ÷ 0,9 = 7\n1 + 7 = 8 ✓' },

        // Blok 2 — Vermenigvuldiging & deling van desimale breuke deur desimale breuke (5-8)
        { difficulty: 'Medium', question: 'Bereken 3,6 × 0,24.', answer: '0,864', checkMode: 'auto', correctAnswer: '0,864', correctAnswers: ['0.864', '0,864'], explanation: 'Vermenigvuldig sonder die desimale kommas: 36 × 24 = 864.\nTel desimale plekke: 3,6 het 1, 0,24 het 2. Totaal = 3.\nPlaas die desimale komma 3 plekke van regs af: 0,864 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,84 ÷ 0,12.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Die deler 0,12 het 2 desimale plekke. Vermenigvuldig albei met 100: 84 ÷ 12 = 7 ✓' },
        { difficulty: 'Medium', question: 'Bereken 5,4 × 1,25.', answer: '6,75', checkMode: 'auto', correctAnswer: '6,75', correctAnswers: ['6.75', '6,75'], explanation: 'Vermenigvuldig sonder die desimale kommas: 54 × 125 = 6 750.\nTel desimale plekke: 5,4 het 1, 1,25 het 2. Totaal = 3.\nPlaas die desimale komma 3 plekke van regs af: 6,750 = 6,75 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 9,36 ÷ 0,78.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Die deler 0,78 het 2 desimale plekke. Vermenigvuldig albei met 100: 936 ÷ 78 = 12 ✓' },

        // Blok 3 — Kwadrate, kubusse & wortels van desimale breuke (9-12)
        { difficulty: 'Medium', question: 'Bereken 0,7².', answer: '0,49', checkMode: 'auto', correctAnswer: '0,49', correctAnswers: ['0.49', '0,49'], explanation: '0,7² = 0,7 × 0,7 = 0,49 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,2³.', answer: '0,008', checkMode: 'auto', correctAnswer: '0,008', correctAnswers: ['0.008', '0,008'], explanation: '0,2³ = 0,2 × 0,2 × 0,2\n0,2 × 0,2 = 0,04\n0,04 × 0,2 = 0,008 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die vierkantswortel van 0,49.', answer: '0,7', checkMode: 'auto', correctAnswer: '0,7', correctAnswers: ['0.7', '0,7'], explanation: '√0,49 = 0,7, aangesien 0,7 × 0,7 = 0,49 ✓' },
        { difficulty: 'Hard', question: 'Vind die kubuswortel van 0,008.', answer: '0,2', checkMode: 'auto', correctAnswer: '0,2', correctAnswers: ['0.2', '0,2'], explanation: '∛0,008 = 0,2, aangesien 0,2 × 0,2 × 0,2 = 0,008 ✓' },

        // Blok 4 — Omskakeling van desimale breuke, breuke & persentasies (13-16)
        { difficulty: 'Medium', question: 'Skryf 0,375 as ʼn breuk in eenvoudigste vorm.', answer: '3/8', checkMode: 'auto', correctAnswer: '3/8', explanation: '0,375 = 375/1000. Deel bo en onder deur 125: 375/1000 = 3/8 ✓' },
        { difficulty: 'Medium', question: 'Skryf 5/8 as ʼn desimale breuk.', answer: '0,625', checkMode: 'auto', correctAnswer: '0,625', correctAnswers: ['0.625', '0,625'], explanation: '5 ÷ 8 = 0,625 (aangesien 5/8 = 625/1000) ✓' },
        { difficulty: 'Medium', question: 'Skryf 7/8 as ʼn persentasie.', answer: '87,5%', checkMode: 'auto', correctAnswer: '87,5%', correctAnswers: ['87.5%', '87.5', '87,5%', '87,5'], explanation: '7/8 = 0,875. Vermenigvuldig met 100: 0,875 × 100 = 87,5% ✓' },
        { difficulty: 'Medium-Hard', question: 'Rangskik hierdie desimale breuke van kleinste na grootste: 0,55, 0,5, 0,505, 0,45', answer: '0,45, 0,5, 0,505, 0,55', checkMode: 'auto', correctAnswer: '0,45,0,5,0,505,0,55', correctAnswers: ['0.45,0.5,0.505,0.55', '0.45, 0.5, 0.505, 0.55', '0,45,0,5,0,505,0,55', '0,45, 0,5, 0,505, 0,55'], explanation: 'Vergelyk plek vir plek: 0,45 (4 tiendes) is die kleinste, dan 0,5 = 0,500, dan 0,505, dan 0,55 = 0,550 is die grootste.\nVolgorde: 0,45, 0,5, 0,505, 0,55 ✓' },

        // Blok 5 — Woordprobleme, foutopsporing & multi-stap redenering (17-20)
        { difficulty: 'Hard', question: 'ʼn Motor gebruik 6,4 liter petrol per 100 km. Die tenk begin met 45,5 liter. Hoeveel liter is oor na ʼn reis van 350 km?', answer: '23,1 liter', checkMode: 'auto', correctAnswer: '23,1', correctAnswers: ['23.1', '23,1', '23.1 liter', '23,1 liter', '23.1liter', '23,1liter'], explanation: 'Petrol gebruik: 6,4 × 350 ÷ 100 = 22,4 liter.\nPetrol oor: 45,5 − 22,4 = 23,1 liter ✓' },
        { difficulty: 'Hard', question: 'ʼn Kliënt koop 2,5 kg rys teen R14,60 per kg, 1,8 kg suiker teen R12,40 per kg, en 0,75 kg botter teen R64 per kg. Sy betaal met ʼn R200-noot. Hoeveel kleingeld kry sy?', answer: 'R93,18', checkMode: 'auto', correctAnswer: 'R93,18', correctAnswers: ['R93.18', '93.18', 'R93,18', '93,18'], explanation: 'Rys: 2,5 × R14,60 = R36,50\nSuiker: 1,8 × R12,40 = R22,32\nBotter: 0,75 × R64 = R48,00\nTotaal: R36,50 + R22,32 + R48,00 = R106,82\nKleingeld: R200 − R106,82 = R93,18 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 0,6 ÷ 0,03 en skryf die antwoord as 0,2. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het verkeerd gedeel. Die deler 0,03 het 2 desimale plekke, dus vermenigvuldig albei getalle met 100: 0,6 × 100 = 60 en 0,03 × 100 = 3. Dan 60 ÷ 3 = 20, nie 0,2 nie.', checkMode: 'self', explanation: '0,6 ÷ 0,03: vermenigvuldig albei met 100 → 60 ÷ 3 = 20. Korrekte antwoord: 20.' },
        { difficulty: 'Hard', question: 'Vier stukke pyp meet 2,4 m, 3,15 m, 2,85 m en 3,6 m. Wat is die gemiddelde lengte van die stukke?', answer: '3 m', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3m', '3 m', '3.0', '3,0', '3.00', '3,00'], explanation: 'Som: 2,4 + 3,15 + 2,85 + 3,6 = 12 m\nGemiddelde: 12 ÷ 4 = 3 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 8 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die reëls vir desimale breuke, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Multi-stap gemengde bewerkings met desimale breuke (1-4)
        { difficulty: 'Medium', question: 'Bereken 18,4 + 2,5 × 3,6, deur die korrekte volgorde van bewerkings toe te pas.', answer: '27,4', checkMode: 'auto', correctAnswer: '27,4', correctAnswers: ['27.4', '27,4'], explanation: 'Vermenigvuldiging voor optelling: 2,5 × 3,6 = 9\n18,4 + 9 = 27,4 ✓' },
        { difficulty: 'Medium', question: 'Bereken (9,6 - 4,7) × 2,5.', answer: '12,25', checkMode: 'auto', correctAnswer: '12,25', correctAnswers: ['12.25', '12,25'], explanation: 'Hakies eerste: 9,6 − 4,7 = 4,9\n4,9 × 2,5 = 12,25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 24,8 ÷ 0,8 + 4,5 × 3.', answer: '44,5', checkMode: 'auto', correctAnswer: '44,5', correctAnswers: ['44.5', '44,5'], explanation: 'Deling en vermenigvuldiging voor optelling:\n24,8 ÷ 0,8 = 31\n4,5 × 3 = 13,5\n31 + 13,5 = 44,5 ✓' },
        { difficulty: 'Hard', question: 'Bereken 3,5 × 0,6 + 8,4 ÷ 1,2.', answer: '9,1', checkMode: 'auto', correctAnswer: '9,1', correctAnswers: ['9.1', '9,1'], explanation: 'Vermenigvuldiging en deling voor optelling:\n3,5 × 0,6 = 2,1\n8,4 ÷ 1,2 = 7\n2,1 + 7 = 9,1 ✓' },

        // Blok 2 — Vermenigvuldiging & deling van desimale breuke deur desimale breuke (5-8)
        { difficulty: 'Medium', question: 'Bereken 4,8 × 0,35.', answer: '1,68', checkMode: 'auto', correctAnswer: '1,68', correctAnswers: ['1.68', '1,68'], explanation: 'Vermenigvuldig sonder die desimale kommas: 48 × 35 = 1 680.\nTel desimale plekke: 4,8 het 1, 0,35 het 2. Totaal = 3.\nPlaas die desimale komma 3 plekke van regs af: 1,680 = 1,68 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,96 ÷ 0,16.', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Die deler 0,16 het 2 desimale plekke. Vermenigvuldig albei met 100: 96 ÷ 16 = 6 ✓' },
        { difficulty: 'Medium', question: 'Bereken 6,2 × 1,5.', answer: '9,3', checkMode: 'auto', correctAnswer: '9,3', correctAnswers: ['9.3', '9,3'], explanation: 'Vermenigvuldig sonder die desimale kommas: 62 × 15 = 930.\nTel desimale plekke: 6,2 het 1, 1,5 het 1. Totaal = 2.\nPlaas die desimale komma 2 plekke van regs af: 9,30 = 9,3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 12,42 ÷ 0,69.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Die deler 0,69 het 2 desimale plekke. Vermenigvuldig albei met 100: 1 242 ÷ 69 = 18 ✓' },

        // Blok 3 — Kwadrate, kubusse & wortels van desimale breuke (9-12)
        { difficulty: 'Medium', question: 'Bereken 0,9².', answer: '0,81', checkMode: 'auto', correctAnswer: '0,81', correctAnswers: ['0.81', '0,81'], explanation: '0,9² = 0,9 × 0,9 = 0,81 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,3³.', answer: '0,027', checkMode: 'auto', correctAnswer: '0,027', correctAnswers: ['0.027', '0,027'], explanation: '0,3³ = 0,3 × 0,3 × 0,3\n0,3 × 0,3 = 0,09\n0,09 × 0,3 = 0,027 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die vierkantswortel van 0,81.', answer: '0,9', checkMode: 'auto', correctAnswer: '0,9', correctAnswers: ['0.9', '0,9'], explanation: '√0,81 = 0,9, aangesien 0,9 × 0,9 = 0,81 ✓' },
        { difficulty: 'Hard', question: 'Vind die kubuswortel van 0,064.', answer: '0,4', checkMode: 'auto', correctAnswer: '0,4', correctAnswers: ['0.4', '0,4'], explanation: '∛0,064 = 0,4, aangesien 0,4 × 0,4 × 0,4 = 0,064 ✓' },

        // Blok 4 — Omskakeling van desimale breuke, breuke & persentasies (13-16)
        { difficulty: 'Medium', question: 'Skryf 0,125 as ʼn breuk in eenvoudigste vorm.', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', explanation: '0,125 = 125/1000. Deel bo en onder deur 125: 125/1000 = 1/8 ✓' },
        { difficulty: 'Medium', question: 'Skryf 3/8 as ʼn desimale breuk.', answer: '0,375', checkMode: 'auto', correctAnswer: '0,375', correctAnswers: ['0.375', '0,375'], explanation: '3 ÷ 8 = 0,375 (aangesien 3/8 = 375/1000) ✓' },
        { difficulty: 'Medium', question: 'Skryf 9/40 as ʼn persentasie.', answer: '22,5%', checkMode: 'auto', correctAnswer: '22,5%', correctAnswers: ['22.5%', '22.5', '22,5%', '22,5'], explanation: '9/40 = 0,225. Vermenigvuldig met 100: 0,225 × 100 = 22,5% ✓' },
        { difficulty: 'Medium-Hard', question: 'Rangskik hierdie desimale breuke van kleinste na grootste: 0,72, 0,7, 0,702, 0,27', answer: '0,27, 0,7, 0,702, 0,72', checkMode: 'auto', correctAnswer: '0,27,0,7,0,702,0,72', correctAnswers: ['0.27,0.7,0.702,0.72', '0.27, 0.7, 0.702, 0.72', '0,27,0,7,0,702,0,72', '0,27, 0,7, 0,702, 0,72'], explanation: 'Vergelyk plek vir plek: 0,27 (2 tiendes) is die kleinste, dan 0,7 = 0,700, dan 0,702, dan 0,72 = 0,720 is die grootste.\nVolgorde: 0,27, 0,7, 0,702, 0,72 ✓' },

        // Blok 5 — Woordprobleme, foutopsporing & multi-stap redenering (17-20)
        { difficulty: 'Hard', question: 'ʼn Motor gebruik 7,2 liter petrol per 100 km. Die tenk begin met 38,4 liter. Hoeveel liter is oor na ʼn reis van 250 km?', answer: '20,4 liter', checkMode: 'auto', correctAnswer: '20,4', correctAnswers: ['20.4', '20,4', '20.4 liter', '20,4 liter', '20.4liter', '20,4liter'], explanation: 'Petrol gebruik: 7,2 × 250 ÷ 100 = 18 liter.\nPetrol oor: 38,4 − 18 = 20,4 liter ✓' },
        { difficulty: 'Hard', question: 'ʼn Kliënt koop 1,6 kg meel teen R16,80 per kg, 2,4 kg appels teen R18,50 per kg, en 0,5 kg kaas teen R89,40 per kg. Sy betaal met ʼn R150-noot. Hoeveel kleingeld kry sy?', answer: 'R34,02', checkMode: 'auto', correctAnswer: 'R34,02', correctAnswers: ['R34.02', '34.02', 'R34,02', '34,02'], explanation: 'Meel: 1,6 × R16,80 = R26,88\nAppels: 2,4 × R18,50 = R44,40\nKaas: 0,5 × R89,40 = R44,70\nTotaal: R26,88 + R44,40 + R44,70 = R115,98\nKleingeld: R150 − R115,98 = R34,02 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 0,8 ÷ 0,04 en skryf die antwoord as 0,2. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het verkeerd gedeel. Die deler 0,04 het 2 desimale plekke, dus vermenigvuldig albei getalle met 100: 0,8 × 100 = 80 en 0,04 × 100 = 4. Dan 80 ÷ 4 = 20, nie 0,2 nie.', checkMode: 'self', explanation: '0,8 ÷ 0,04: vermenigvuldig albei met 100 → 80 ÷ 4 = 20. Korrekte antwoord: 20.' },
        { difficulty: 'Hard', question: 'Vier stukke pyp meet 4,2 m, 3,65 m, 4,85 m en 3,3 m. Wat is die gemiddelde lengte van die stukke?', answer: '4 m', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4m', '4 m', '4.0', '4,0', '4.00', '4,00'], explanation: 'Som: 4,2 + 3,65 + 4,85 + 3,3 = 16 m\nGemiddelde: 16 ÷ 4 = 4 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 8 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die reëls vir desimale breuke, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Multi-stap gemengde bewerkings met desimale breuke (1-4)
        { difficulty: 'Medium', question: 'Bereken 22,6 + 4,2 × 1,8, deur die korrekte volgorde van bewerkings toe te pas.', answer: '30,16', checkMode: 'auto', correctAnswer: '30,16', correctAnswers: ['30.16', '30,16'], explanation: 'Vermenigvuldiging voor optelling: 4,2 × 1,8 = 7,56\n22,6 + 7,56 = 30,16 ✓' },
        { difficulty: 'Medium', question: 'Bereken (7,8 - 3,6) × 3,5.', answer: '14,7', checkMode: 'auto', correctAnswer: '14,7', correctAnswers: ['14.7', '14,7'], explanation: 'Hakies eerste: 7,8 − 3,6 = 4,2\n4,2 × 3,5 = 14,7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 33,6 ÷ 1,4 + 2,8 × 4.', answer: '35,2', checkMode: 'auto', correctAnswer: '35,2', correctAnswers: ['35.2', '35,2'], explanation: 'Deling en vermenigvuldiging voor optelling:\n33,6 ÷ 1,4 = 24\n2,8 × 4 = 11,2\n24 + 11,2 = 35,2 ✓' },
        { difficulty: 'Hard', question: 'Bereken 4,5 × 0,8 + 5,4 ÷ 0,6.', answer: '12,6', checkMode: 'auto', correctAnswer: '12,6', correctAnswers: ['12.6', '12,6'], explanation: 'Vermenigvuldiging en deling voor optelling:\n4,5 × 0,8 = 3,6\n5,4 ÷ 0,6 = 9\n3,6 + 9 = 12,6 ✓' },

        // Blok 2 — Vermenigvuldiging & deling van desimale breuke deur desimale breuke (5-8)
        { difficulty: 'Medium', question: 'Bereken 2,7 × 0,45.', answer: '1,215', checkMode: 'auto', correctAnswer: '1,215', correctAnswers: ['1.215', '1,215'], explanation: 'Vermenigvuldig sonder die desimale kommas: 27 × 45 = 1 215.\nTel desimale plekke: 2,7 het 1, 0,45 het 2. Totaal = 3.\nPlaas die desimale komma 3 plekke van regs af: 1,215 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,72 ÷ 0,09.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Die deler 0,09 het 2 desimale plekke. Vermenigvuldig albei met 100: 72 ÷ 9 = 8 ✓' },
        { difficulty: 'Medium', question: 'Bereken 8,4 × 1,25.', answer: '10,5', checkMode: 'auto', correctAnswer: '10,5', correctAnswers: ['10.5', '10,5'], explanation: 'Vermenigvuldig sonder die desimale kommas: 84 × 125 = 10 500.\nTel desimale plekke: 8,4 het 1, 1,25 het 2. Totaal = 3.\nPlaas die desimale komma 3 plekke van regs af: 10,500 = 10,5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken 14,72 ÷ 0,92.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Die deler 0,92 het 2 desimale plekke. Vermenigvuldig albei met 100: 1 472 ÷ 92 = 16 ✓' },

        // Blok 3 — Kwadrate, kubusse & wortels van desimale breuke (9-12)
        { difficulty: 'Medium', question: 'Bereken 0,8².', answer: '0,64', checkMode: 'auto', correctAnswer: '0,64', correctAnswers: ['0.64', '0,64'], explanation: '0,8² = 0,8 × 0,8 = 0,64 ✓' },
        { difficulty: 'Medium', question: 'Bereken 0,5³.', answer: '0,125', checkMode: 'auto', correctAnswer: '0,125', correctAnswers: ['0.125', '0,125'], explanation: '0,5³ = 0,5 × 0,5 × 0,5\n0,5 × 0,5 = 0,25\n0,25 × 0,5 = 0,125 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die vierkantswortel van 0,36.', answer: '0,6', checkMode: 'auto', correctAnswer: '0,6', correctAnswers: ['0.6', '0,6'], explanation: '√0,36 = 0,6, aangesien 0,6 × 0,6 = 0,36 ✓' },
        { difficulty: 'Hard', question: 'Vind die kubuswortel van 0,027.', answer: '0,3', checkMode: 'auto', correctAnswer: '0,3', correctAnswers: ['0.3', '0,3'], explanation: '∛0,027 = 0,3, aangesien 0,3 × 0,3 × 0,3 = 0,027 ✓' },

        // Blok 4 — Omskakeling van desimale breuke, breuke & persentasies (13-16)
        { difficulty: 'Medium', question: 'Skryf 0,875 as ʼn breuk in eenvoudigste vorm.', answer: '7/8', checkMode: 'auto', correctAnswer: '7/8', explanation: '0,875 = 875/1000. Deel bo en onder deur 125: 875/1000 = 7/8 ✓' },
        { difficulty: 'Medium', question: 'Skryf 7/20 as ʼn desimale breuk.', answer: '0,35', checkMode: 'auto', correctAnswer: '0,35', correctAnswers: ['0.35', '0,35'], explanation: '7 ÷ 20 = 0,35 (aangesien 7/20 = 35/100) ✓' },
        { difficulty: 'Medium', question: 'Skryf 11/25 as ʼn persentasie.', answer: '44%', checkMode: 'auto', correctAnswer: '44%', correctAnswers: ['44%', '44'], explanation: '11/25 = 44/100 = 0,44. Vermenigvuldig met 100: 0,44 × 100 = 44% ✓' },
        { difficulty: 'Medium-Hard', question: 'Rangskik hierdie desimale breuke van kleinste na grootste: 0,63, 0,6, 0,603, 0,36', answer: '0,36, 0,6, 0,603, 0,63', checkMode: 'auto', correctAnswer: '0,36,0,6,0,603,0,63', correctAnswers: ['0.36,0.6,0.603,0.63', '0.36, 0.6, 0.603, 0.63', '0,36,0,6,0,603,0,63', '0,36, 0,6, 0,603, 0,63'], explanation: 'Vergelyk plek vir plek: 0,36 (3 tiendes) is die kleinste, dan 0,6 = 0,600, dan 0,603, dan 0,63 = 0,630 is die grootste.\nVolgorde: 0,36, 0,6, 0,603, 0,63 ✓' },

        // Blok 5 — Woordprobleme, foutopsporing & multi-stap redenering (17-20)
        { difficulty: 'Hard', question: 'ʼn Motor gebruik 5,6 liter petrol per 100 km. Die tenk begin met 42,8 liter. Hoeveel liter is oor na ʼn reis van 400 km?', answer: '20,4 liter', checkMode: 'auto', correctAnswer: '20,4', correctAnswers: ['20.4', '20,4', '20.4 liter', '20,4 liter', '20.4liter', '20,4liter'], explanation: 'Petrol gebruik: 5,6 × 400 ÷ 100 = 22,4 liter.\nPetrol oor: 42,8 − 22,4 = 20,4 liter ✓' },
        { difficulty: 'Hard', question: 'ʼn Kliënt koop 3,2 kg aartappels teen R9,80 per kg, 1,4 kg tamaties teen R22,60 per kg, en 0,6 kg kaas teen R95,50 per kg. Sy betaal met ʼn R180-noot. Hoeveel kleingeld kry sy?', answer: 'R59,70', checkMode: 'auto', correctAnswer: 'R59,70', correctAnswers: ['R59.70', '59.70', 'R59,70', '59,70'], explanation: 'Aartappels: 3,2 × R9,80 = R31,36\nTamaties: 1,4 × R22,60 = R31,64\nKaas: 0,6 × R95,50 = R57,30\nTotaal: R31,36 + R31,64 + R57,30 = R120,30\nKleingeld: R180 − R120,30 = R59,70 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 0,9 ÷ 0,03 en skryf die antwoord as 0,3. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het verkeerd gedeel. Die deler 0,03 het 2 desimale plekke, dus vermenigvuldig albei getalle met 100: 0,9 × 100 = 90 en 0,03 × 100 = 3. Dan 90 ÷ 3 = 30, nie 0,3 nie.', checkMode: 'self', explanation: '0,9 ÷ 0,03: vermenigvuldig albei met 100 → 90 ÷ 3 = 30. Korrekte antwoord: 30.' },
        { difficulty: 'Hard', question: 'Vier stukke pyp meet 5,4 m, 4,15 m, 3,85 m en 4,6 m. Wat is die gemiddelde lengte van die stukke?', answer: '4,5 m', checkMode: 'auto', correctAnswer: '4,5', correctAnswers: ['4.5', '4,5', '4.5m', '4,5m', '4.5 m', '4,5 m', '4.50', '4,50'], explanation: 'Som: 5,4 + 4,15 + 3,85 + 4,6 = 18 m\nGemiddelde: 18 ÷ 4 = 4,5 m ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het Graad 8 desimale breuke bemeester.' },
        { minScore: 14, message: 'Uitstekende werk! Jy is seker van die meeste hiervan — hersien enige gemiste vrae.' },
        { minScore: 9, message: 'Goeie poging! Hersien die reëls vir desimale breuke, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
