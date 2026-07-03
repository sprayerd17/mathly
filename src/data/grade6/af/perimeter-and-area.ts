import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (perimeter and area roles) ────────────────────────────────
// side length / length / base → blue    (#2563eb)
// width / height               → red     (#dc2626)
// multiplication               → green   (#16a34a)
// perimeter / area answer      → orange  (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Omtrek en Oppervlakte',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OMTREK VAN VEELHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-of-polygons',
      title: 'Omtrek van Veelhoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Omtrek is die <strong>totale afstand rondom die buitekant</strong> van ʼn vorm. Om die omtrek te vind, tel ons al die sylengtes bymekaar. Vir <strong>reëlmatige veelhoeke</strong> waar al die sye gelyk is, kan ons een sylengte met die aantal sye vermenigvuldig in plaas daarvan om herhaaldelik by te tel. Maak altyd seker al die sye is in <strong>dieselfde eenheid</strong> voordat jy bereken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sylengtes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omtrekantwoord')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onreëlmatige veelhoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel al die ${bl('sylengtes')} bymekaar: O = ${bl('a')} + ${bl('b')} + ${bl('c')} + …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reëlmatige veelhoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die sye is gelyk — ${gr('vermenigvuldig')} een ${bl('sylengte')} met die aantal sye: O = n ${gr('×')} ${bl('s')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kyk altyd na jou eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy bymekaartel of vermenigvuldig, maak seker elke ${bl('sylengte')} is in <strong>dieselfde eenheid</strong>. Reken eers om indien nodig, en bereken dan die ${or('omtrek')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reëlmatige vyfhoek het sye van 9 cm elk. Vind die omtrek.',
          answer: `Omtrek = ${or('45 cm')}`,
          steps: [
            `Die vyfhoek het <strong>5 gelyke sye</strong>. Elke ${bl('sy')} = ${bl('9 cm')}.`,
            `Vir ʼn reëlmatige veelhoek: O = aantal sye ${gr('×')} ${bl('sylengte')} = ${gr('5 ×')} ${bl('9')} = ${or('45 cm')}`,
            `<strong>Antwoord:</strong> Omtrek = ${or('45 cm')} ✓`,
          ],
        },
        {
          question: 'ʼn Onreëlmatige vierhoek het sye van 6 cm, 9 cm, 5 cm en 11 cm. Vind die omtrek.',
          answer: `Omtrek = ${or('31 cm')}`,
          steps: [
            `Die vorm het <strong>4 ongelyke sye</strong>: ${bl('6 cm')}, ${bl('9 cm')}, ${bl('5 cm')}, ${bl('11 cm')}.`,
            `Tel al die ${bl('sylengtes')} bymekaar: O = ${bl('6')} + ${bl('9')} + ${bl('5')} + ${bl('11')} = ${or('31 cm')}`,
            `<strong>Antwoord:</strong> Omtrek = ${or('31 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — omtrek van ʼn reëlmatige heksagoon ───────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reëlmatige heksagoon het sye van 7 cm elk. Vind die omtrek.',
          answer: '42cm',
          checkMode: 'auto',
          correctAnswer: '42cm',
          correctAnswers: ['42cm', '42 cm', '42'],
          explanation: 'ʼn Reëlmatige heksagoon het 6 gelyke sye.\nO = 6 × 7 = 42 cm ✓',
        },

        // ── V2 Easy — reghoek-omtrek deur al die sye by te tel ───────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoek het sye van 8 cm, 8 cm, 5 cm en 5 cm. Vind die omtrek.',
          answer: '26cm',
          checkMode: 'auto',
          correctAnswer: '26cm',
          correctAnswers: ['26cm', '26 cm', '26'],
          explanation: 'Tel al vier sye bymekaar: O = 8 + 8 + 5 + 5 = 26 cm ✓',
        },

        // ── V3 Medium — omtrek van ʼn onreëlmatige vyfhoek ───────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Onreëlmatige vyfhoek het sye van 4 cm, 6 cm, 5 cm, 7 cm en 3 cm. Vind die omtrek.',
          answer: '25cm',
          checkMode: 'auto',
          correctAnswer: '25cm',
          correctAnswers: ['25cm', '25 cm', '25'],
          explanation: 'Tel al vyf sye bymekaar: O = 4 + 6 + 5 + 7 + 3 = 25 cm ✓',
        },

        // ── V4 Hard — vind die fout in omtrekredenasie ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn vierkant met ʼn omtrek van 36 cm het sye van 12 cm. Is hy korrek? Verduidelik.',
          answer: 'Nee — omtrek gedeel deur 4 gee die sylengte. 36 ÷ 4 = 9 cm, nie 12 cm nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the perimeter of regular and irregular polygons by adding or multiplying side lengths" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OPPERVLAKTE VAN REGHOEKE EN VIERKANTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-rectangles-squares',
      title: 'Oppervlakte van Reghoeke en Vierkante',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">Oppervlakte is die hoeveelheid <strong>plat oppervlak wat ʼn vorm bedek</strong>, gemeet in vierkante eenhede soos cm² of m². Vir ʼn reghoek, Oppervlakte ${gr('=')} ${bl('lengte')} ${gr('×')} ${re('breedte')}. Vir ʼn vierkant, Oppervlakte ${gr('=')} ${bl('sy')} ${gr('×')} ${bl('sy')} (of sy²). Om oppervlakte te ken help ons om werklike-lewe probleme op te los soos teëlwerk, verf en matlegging.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lengte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('breedte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte-antwoord')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = ${bl('lengte')} ${gr('×')} ${re('breedte')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = ${bl('sy')} ${gr('×')} ${bl('sy')} = ${bl('sy')}²</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Onthou: vierkante eenhede</p>` +
        `<p style="margin:0;color:#7c2d12;">Oppervlakte word altyd in <strong>vierkante eenhede</strong> geskryf — cm², m², km². Die vierkant herinner ons daaraan dat ons twee afmetings met mekaar vermenigvuldig het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek is 12 cm lank en 7 cm breed. Vind die oppervlakte.',
          answer: `Oppervlakte = ${or('84 cm²')}`,
          steps: [
            `Identifiseer die afmetings: ${bl('lengte')} = ${bl('12 cm')}, ${re('breedte')} = ${re('7 cm')}.`,
            `Pas die formule toe: O = ${bl('lengte')} ${gr('×')} ${re('breedte')} = ${bl('12')} ${gr('×')} ${re('7')} = ${or('84 cm²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${or('84 cm²')} ✓`,
          ],
        },
        {
          question: 'ʼn Vierkant het sye van 9 m. Vind die oppervlakte.',
          answer: `Oppervlakte = ${or('81 m²')}`,
          steps: [
            `Identifiseer die afmeting: ${bl('sy')} = ${bl('9 m')}.`,
            `Pas die formule toe: O = ${bl('sy')} ${gr('×')} ${bl('sy')} = ${bl('9')} ${gr('×')} ${bl('9')} = ${or('81 m²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${or('81 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V5 Easy — reghoek-oppervlakte ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoek is 10 cm lank en 4 cm breed. Vind die oppervlakte.',
          answer: '40cm²',
          checkMode: 'auto',
          correctAnswer: '40cm²',
          correctAnswers: ['40cm²', '40 cm²', '40cm2', '40 cm2', '40'],
          explanation: 'O = lengte × breedte = 10 × 4 = 40 cm² ✓',
        },

        // ── V6 Easy — vierkant-oppervlakte ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Vierkant het sye van 6 m. Vind die oppervlakte.',
          answer: '36m²',
          checkMode: 'auto',
          correctAnswer: '36m²',
          correctAnswers: ['36m²', '36 m²', '36m2', '36 m2', '36'],
          explanation: 'O = sy × sy = 6 × 6 = 36 m² ✓',
        },

        // ── V7 Medium — oppervlakte van ʼn reghoekige tuin ──────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige tuin is 15 m lank en 8 m breed. Vind die oppervlakte daarvan.',
          answer: '120m²',
          checkMode: 'auto',
          correctAnswer: '120m²',
          correctAnswers: ['120m²', '120 m²', '120m2', '120 m2', '120'],
          explanation: 'O = lengte × breedte = 15 × 8 = 120 m² ✓',
        },

        // ── V8 Hard — teëlwerk-woordprobleem ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wil ʼn vloer teël wat 5 m by 4 m is. Elke teël bedek 1 m². Hoeveel teëls het sy nodig?',
          answer: '20',
          checkMode: 'auto',
          correctAnswer: '20',
          explanation: 'Vloeroppervlakte = 5 × 4 = 20 m².\nElke teël bedek 1 m², dus benodig sy 20 teëls ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a labelled rectangle with length in blue and width in red, and a labelled square with side in blue, illustrating the area formula for each shape" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the area of a rectangle and a square using the formulas length times width and side squared" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPPERVLAKTE VAN DRIEHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-of-triangles',
      title: 'Oppervlakte van Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Die oppervlakte van ʼn driehoek is <strong>die helfte van die oppervlakte van ʼn reghoek</strong> met dieselfde basis en hoogte. Die formule is: Oppervlakte ${gr('=')} ½ ${gr('×')} ${bl('basis')} ${gr('×')} ${re('hoogte')}. Die ${re('hoogte')} moet altyd <strong>loodreg op die basis</strong> gemeet word — teen ʼn regte hoek daarmee, nie langs ʼn skuins sy nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('basis')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoogte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('½ × vermenigvuldiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte-antwoord')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">O = ${gr('½ ×')} ${bl('basis')} ${gr('×')} ${re('hoogte')}&nbsp;&nbsp; of &nbsp;&nbsp;O = ${gr('0,5 ×')} ${bl('b')} ${gr('×')} ${re('h')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Die hoogte moet loodreg wees</p>` +
        `<p style="margin:0;color:#991b1b;">Gebruik altyd die ${re('loodregte hoogte')} — die reguit-op afstand vanaf die basis na die teenoorgestelde hoekpunt. Gebruik nooit die lengte van ʼn skuins sy as die ${re('hoogte')} nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het ʼn basis van 10 cm en ʼn hoogte van 6 cm. Vind die oppervlakte.',
          answer: `Oppervlakte = ${or('30 cm²')}`,
          steps: [
            `Identifiseer die afmetings: ${bl('basis')} = ${bl('10 cm')}, ${re('hoogte')} = ${re('6 cm')}.`,
            `Pas die formule toe: O = ${gr('0,5 ×')} ${bl('10')} ${gr('×')} ${re('6')} = ${gr('0,5 ×')} 60 = ${or('30 cm²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${or('30 cm²')} ✓`,
          ],
        },
        {
          question: 'ʼn Driehoek het ʼn basis van 14 m en ʼn hoogte van 8 m. Vind die oppervlakte.',
          answer: `Oppervlakte = ${or('56 m²')}`,
          steps: [
            `Identifiseer die afmetings: ${bl('basis')} = ${bl('14 m')}, ${re('hoogte')} = ${re('8 m')}.`,
            `Pas die formule toe: O = ${gr('0,5 ×')} ${bl('14')} ${gr('×')} ${re('8')} = ${gr('0,5 ×')} 112 = ${or('56 m²')}`,
            `<strong>Antwoord:</strong> Oppervlakte = ${or('56 m²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V9 Easy — driehoek-oppervlakte ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Driehoek het ʼn basis van 8 cm en ʼn hoogte van 5 cm. Vind die oppervlakte.',
          answer: '20cm²',
          checkMode: 'auto',
          correctAnswer: '20cm²',
          correctAnswers: ['20cm²', '20 cm²', '20cm2', '20 cm2', '20'],
          explanation: 'O = 0,5 × basis × hoogte = 0,5 × 8 × 5 = 0,5 × 40 = 20 cm² ✓',
        },

        // ── V10 Medium — driehoek-oppervlakte met groter waardes ──────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het ʼn basis van 12 m en ʼn hoogte van 9 m. Vind die oppervlakte.',
          answer: '54m²',
          checkMode: 'auto',
          correctAnswer: '54m²',
          correctAnswers: ['54m²', '54 m²', '54m2', '54 m2', '54'],
          explanation: 'O = 0,5 × basis × hoogte = 0,5 × 12 × 9 = 0,5 × 108 = 54 m² ✓',
        },

        // ── V11 Hard — vind die fout in driehoek-oppervlakteredenasie ─────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê ʼn driehoek met basis 10 cm en hoogte 6 cm het ʼn oppervlakte van 60 cm². Is hy korrek? Verduidelik.',
          answer: 'Nee — hy het vergeet om dit te halveer. Oppervlakte = 0,5 × 10 × 6 = 30 cm², nie 60 cm² nie.',
          checkMode: 'self',
        },

        // ── V12 Hard — saamgestelde vorm: reghoek min driehoek ────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoekige veld is 20 m by 15 m. ʼn Driehoekige gedeelte met basis 10 m en hoogte 6 m word uit ʼn hoek verwyder. Wat is die oorblywende oppervlakte?',
          answer: 'Reghoek-oppervlakte = 20 × 15 = 300 m².\nDriehoek-oppervlakte = 0,5 × 10 × 6 = 30 m².\nOorblywend = 300 − 30 = 270 m².',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a triangle with base labelled in blue and perpendicular height labelled in red, with a dotted line indicating the height is at a right angle to the base" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate the area of a triangle using half times base times height with the perpendicular height highlighted" />',
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het omtrek en oppervlakte bemeester.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
