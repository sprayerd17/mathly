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
          correctAnswer: '3.6',
          correctAnswers: ['3.6', '3,6'],
          explanation: 'Vermenigvuldig sonder desimale: 15 × 24 = 360\nTel desimale plekke: 1 + 1 = 2\nPlaas desimale komma: 360 → 3,60 = 3,6 ✓',
        },

        // ── V2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 3,25 × 1,6.',
          answer: '5,2',
          checkMode: 'auto',
          correctAnswer: '5.2',
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
        '<VideoPlaceholder label="Short video showing how to multiply decimal fractions by counting decimal places and placing the decimal point correctly in the product" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 2.45 x 3.6 with decimal places counted in orange, multiplication shown in green, and final answer in blue" />',
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
        '<VideoPlaceholder label="Short video showing how to divide decimal fractions by converting the divisor to a whole number using multiplication by powers of 10" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 4.8 divided by 0.6 with both numbers multiplied by 10 in orange, division step in blue, and final answer in green" />',
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
          correctAnswer: '0.36',
          correctAnswers: ['0.36', '0,36'],
          explanation: '0,6² = 0,6 × 0,6 = 0,36 ✓',
        },

        // ── V8 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken 0,4³.',
          answer: '0,064',
          checkMode: 'auto',
          correctAnswer: '0.064',
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
          correctAnswer: '0.1',
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
          correctAnswer: '0.258',
          correctAnswers: ['0.258', '0,258'],
          explanation: '(0,2)³ = 0,2 × 0,2 × 0,2 = 0,008\n(0,5)² = 0,5 × 0,5 = 0,25\n0,008 + 0,25 = 0,258 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate squares, cubes, square roots and cube roots of decimal fractions step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 0.3 squared and the cube root of 0.027 with base in blue, exponent in orange, and final answer in green" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het desimale breuke bemeester.' },
    { minScore: 12, message: 'Uitstekende werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],
}
