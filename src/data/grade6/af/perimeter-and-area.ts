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
        '<VideoPlaceholder label="Kort video wat wys hoe om die omtrek van reëlmatige en onreëlmatige veelhoeke te vind deur sylengtes op te tel of te vermenigvuldig" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van ʼn reghoek en ʼn vierkant te bereken met die formules lengte maal breedte en sy in die kwadraat" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van ʼn driehoek te bereken met behulp van die helfte maal basis maal hoogte, met die loodregte hoogte uitgelig" />',
    },
  ],

  practiceSets: [
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reëlmatige agthoek het sye van 6 cm elk. Vind die omtrek.', answer: '48 cm', checkMode: 'auto', correctAnswer: '48 cm', correctAnswers: ['48 cm', '48cm', '48'], explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye.\nO = 8 × 6 = 48 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="132.2,41.4 163.6,72.8 163.6,117.2 132.2,148.6 87.8,148.6 56.4,117.2 56.4,72.8 87.8,41.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="159.2" y="45.8" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige agthoek</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoek het sye van 9 cm, 4 cm, 9 cm en 4 cm. Vind die omtrek deur al vier sye bymekaar te tel.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26 cm', correctAnswers: ['26 cm', '26cm', '26'], explanation: 'O = 9 + 4 + 9 + 4 = 26 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Onreëlmatige heksagoon het sye van 5 cm, 7 cm, 3 cm, 8 cm, 6 cm en 4 cm. Vind die omtrek.', answer: '33 cm', checkMode: 'auto', correctAnswer: '33 cm', correctAnswers: ['33 cm', '33cm', '33'], explanation: 'Tel al ses sye bymekaar: O = 5 + 7 + 3 + 8 + 6 + 4 = 33 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 30,100 70,45 140,40 185,90 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="27.3" y="130.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="37.1" y="67.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="105.2" y="28.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="174.9" y="58.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="180.6" y="125.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="98.9" y="164.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vierkant het sye van 11 cm. Wat is die oppervlakte daarvan?', answer: '121 cm²', checkMode: 'auto', correctAnswer: '121 cm²', correctAnswers: ['121 cm²', '121cm²', '121 cm2', '121cm2', '121'], explanation: 'O = sy × sy = 11 × 11 = 121 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Vind die oppervlakte van ʼn reghoek wat 13 cm lank en 6 cm breed is.', answer: '78 cm²', checkMode: 'auto', correctAnswer: '78 cm²', correctAnswers: ['78 cm²', '78cm²', '78 cm2', '78cm2', '78'], explanation: 'O = lengte × breedte = 13 × 6 = 78 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">6 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het ʼn basis van 16 cm en ʼn loodregte hoogte van 9 cm. Bereken die oppervlakte daarvan.', answer: '72 cm²', checkMode: 'auto', correctAnswer: '72 cm²', correctAnswers: ['72 cm²', '72cm²', '72 cm2', '72cm2', '72'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 16 × 9 = 0,5 × 144 = 72 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reëlmatige vyfhoek het sye van 13 cm elk. Wat is die omtrek daarvan?', answer: '65 cm', checkMode: 'auto', correctAnswer: '65 cm', correctAnswers: ['65 cm', '65cm', '65'], explanation: 'O = aantal sye × sylengte = 5 × 13 = 65 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="144.1,48.1 165.2,112.9 110.0,153.0 54.8,112.9 75.9,48.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="169.8" y="75.6" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige vyfhoek</text></svg>' },
        { difficulty: 'Medium', question: 'Mev. Naidoo se reghoekige groentetuin is 18 m by 7 m. Watter oppervlakte bedek die tuin?', answer: '126 m²', checkMode: 'auto', correctAnswer: '126 m²', correctAnswers: ['126 m²', '126m²', '126 m2', '126m2', '126'], explanation: 'O = lengte × breedte = 18 × 7 = 126 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">7 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige tafelblad het sye van 15 cm. Watter lengte randlint word benodig om heeltemal rondom dit te gaan?', answer: '60 cm', checkMode: 'auto', correctAnswer: '60 cm', correctAnswers: ['60 cm', '60cm', '60'], explanation: 'Die lint gaan rondom die omtrek: O = 4 × sy = 4 × 15 = 60 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlag het ʼn basis van 20 cm en ʼn hoogte van 11 cm. Vind die oppervlakte daarvan.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110 cm²', correctAnswers: ['110 cm²', '110cm²', '110 cm2', '110cm2', '110'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 20 × 11 = 0,5 × 220 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige swembadterras het ʼn omtrek van 54 m. As een sy 17 m lank is, wat is die lengte van die aangrensende sy?', answer: '10 m', checkMode: 'auto', correctAnswer: '10 m', correctAnswers: ['10 m', '10m', '10'], explanation: 'Die helfte van die omtrek = een lengte + een breedte: 54 ÷ 2 = 27 m.\nBreedte = 27 − 17 = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige plakkaat het ʼn oppervlakte van 144 cm². Wat is die lengte van elke sy?', answer: '12 cm', checkMode: 'auto', correctAnswer: '12 cm', correctAnswers: ['12 cm', '12cm', '12'], explanation: 'Sy × sy = 144, dus is die sylengte die vierkantswortel van 144.\n√144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Oppervlakte = 144 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 14 cm by 9 cm, en ʼn vierkant het sye van 11 cm. Watter vorm het die groter oppervlakte, en met hoeveel?', answer: 'Die reghoek, met 5 cm²', checkMode: 'auto', correctAnswer: 'Die reghoek, met 5 cm²', correctAnswers: ['Die reghoek, met 5 cm²', 'reghoek, met 5 cm²', 'reghoek met 5', 'reghoek', '5 cm² meer'], explanation: 'Reghoek-oppervlakte = 14 × 9 = 126 cm².\nVierkant-oppervlakte = 11 × 11 = 121 cm².\n126 − 121 = 5, dus is die reghoek groter met 5 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="50" width="75" height="50" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="52.5" y="42" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="9" y="75.0" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 9 75.0)">9 cm</text><rect x="130" y="42" width="58" height="58" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="159.0" y="34" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saalvloer van 6 m by 4 m moet met vierkantige teëls bedek word, elk presies 1 m². Hoeveel teëls word benodig?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 teëls'], explanation: 'Vloeroppervlakte = 6 × 4 = 24 m². Elke teël bedek 1 m², dus word 24 teëls benodig ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">4 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Seil in die vorm van ʼn driehoek het ʼn basis van 24 m en ʼn hoogte van 10 m. Bereken die oppervlakte seildoek wat benodig word om die seil te maak.', answer: '120 m²', checkMode: 'auto', correctAnswer: '120 m²', correctAnswers: ['120 m²', '120m²', '120 m2', '120m2', '120'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 24 × 10 = 0,5 × 240 = 120 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">24 m</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">10 m</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige stuk grond is 20 m by 10 m. ʼn Vierkantige gedeelte met sye van 6 m word binne-in dit omhein vir ʼn skuur. Watter oppervlakte van die grond is oor, onbedek deur die skuur?', answer: '164 m²', checkMode: 'auto', correctAnswer: '164 m²', correctAnswers: ['164 m²', '164m²', '164 m2', '164m2', '164'], explanation: 'Grondoppervlakte = 20 × 10 = 200 m².\nSkuuroppervlakte = 6 × 6 = 36 m².\nOorblywend = 200 − 36 = 164 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="86.0" y="56.4" width="48.0" height="52.3" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="110.0" y="78.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="110.0" y="94.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'Boer Dlamini wil ʼn reghoekige land van 25 m by 15 m omhein met draad wat R15 per meter kos. Hoeveel sal die draad in totaal kos?', answer: 'R1200', checkMode: 'auto', correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Omtrek = 2 × (25 + 15) = 2 × 40 = 80 m.\nKoste = 80 × R15 = R1 200 ✓' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige negehoek (9 sye) het ʼn onbekende sylengte. As die omtrek daarvan 45 cm is, wat is die lengte van elke sy?', answer: '5 cm', checkMode: 'auto', correctAnswer: '5 cm', correctAnswers: ['5 cm', '5cm', '5'], explanation: 'Vir ʼn reëlmatige veelhoek: sy = omtrek ÷ aantal sye.\nSy = 45 ÷ 9 = 5 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 8 m by 3 m moet geverf word, behalwe vir ʼn reghoekige deuropening van 2 m by 1 m. Watter oppervlakte moet geverf word?', answer: '22 m²', checkMode: 'auto', correctAnswer: '22 m²', correctAnswers: ['22 m²', '22m²', '22 m2', '22m2', '22'], explanation: 'Muuroppervlakte = 8 × 3 = 24 m².\nDeuroppervlakte = 2 × 1 = 2 m².\nOppervlakte om te verf = 24 − 2 = 22 m² ✓' },
        { difficulty: 'Hard', question: 'Reghoek A is 12 m by 5 m en Reghoek B is 10 m by 8 m. Bongani sê albei reghoeke het dieselfde omtrek omdat hulle omtrent dieselfde grootte lyk. Is hy korrek? Wys die omtrek van elk om te verduidelik.', answer: 'Nee — Reghoek A het ʼn omtrek van 34 m (2 × (12 + 5)) en Reghoek B het ʼn omtrek van 36 m (2 × (10 + 8)). Die omtrekke verskil, dus is Bongani verkeerd.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met omtrek en oppervlakte — gaan enige gemiste vrae na en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reëlmatige sewehoek het sye van 8 cm elk. Vind die omtrek.', answer: '56 cm', checkMode: 'auto', correctAnswer: '56 cm', correctAnswers: ['56 cm', '56cm', '56'], explanation: 'ʼn Reëlmatige sewehoek het 7 gelyke sye.\nO = 7 × 8 = 56 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="135.2,42.7 166.5,82.1 155.3,131.2 110.0,153.0 64.7,131.2 53.5,82.1 84.8,42.7" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="163.4" y="52.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige sewehoek</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoek het sye van 10 cm, 3 cm, 10 cm en 3 cm. Vind die omtrek deur al vier sye bymekaar te tel.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26 cm', correctAnswers: ['26 cm', '26cm', '26'], explanation: 'O = 10 + 3 + 10 + 3 = 26 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Onreëlmatige vyfhoek het sye van 5 cm, 9 cm, 4 cm, 7 cm en 6 cm. Vind die omtrek.', answer: '31 cm', checkMode: 'auto', correctAnswer: '31 cm', correctAnswers: ['31 cm', '31cm', '31'], explanation: 'Tel al vyf sye bymekaar: O = 5 + 9 + 4 + 7 + 6 = 31 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 30,80 100,30 175,70 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="24.1" y="119.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="55.9" y="44.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="146.3" y="39.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="176.2" y="113.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="96.9" y="164.0" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vierkant het sye van 14 cm. Wat is die oppervlakte daarvan?', answer: '196 cm²', checkMode: 'auto', correctAnswer: '196 cm²', correctAnswers: ['196 cm²', '196cm²', '196 cm2', '196cm2', '196'], explanation: 'O = sy × sy = 14 × 14 = 196 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Vind die oppervlakte van ʼn reghoek wat 17 cm lank en 5 cm breed is.', answer: '85 cm²', checkMode: 'auto', correctAnswer: '85 cm²', correctAnswers: ['85 cm²', '85cm²', '85 cm2', '85cm2', '85'], explanation: 'O = lengte × breedte = 17 × 5 = 85 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het ʼn basis van 18 cm en ʼn loodregte hoogte van 7 cm. Bereken die oppervlakte daarvan.', answer: '63 cm²', checkMode: 'auto', correctAnswer: '63 cm²', correctAnswers: ['63 cm²', '63cm²', '63 cm2', '63cm2', '63'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 18 × 7 = 0,5 × 126 = 63 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reëlmatige tienhoek (10 sye) het sye van 4 cm elk. Wat is die omtrek daarvan?', answer: '40 cm', checkMode: 'auto', correctAnswer: '40 cm', correctAnswers: ['40 cm', '40cm', '40'], explanation: 'O = aantal sye × sylengte = 10 × 4 = 40 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="127.9,39.8 156.9,60.9 168.0,95.0 156.9,129.1 127.9,150.2 92.1,150.2 63.1,129.1 52.0,95.0 63.1,60.9 92.1,39.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="151.8" y="37.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige tienhoek (10 sye)</text></svg>' },
        { difficulty: 'Medium', question: 'Mnr. Botha wil nuwe mat lê in ʼn reghoekige kamer van 9 m by 6 m. Hoeveel mat het hy nodig om die vloer te bedek?', answer: '54 m²', checkMode: 'auto', correctAnswer: '54 m²', correctAnswers: ['54 m²', '54m²', '54 m2', '54m2', '54'], explanation: 'O = lengte × breedte = 9 × 6 = 54 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige prentraam het sye van 13 cm. Watter lengte lint word benodig om heeltemal rondom die buiterand te gaan?', answer: '52 cm', checkMode: 'auto', correctAnswer: '52 cm', correctAnswers: ['52 cm', '52cm', '52'], explanation: 'Die lint gaan rondom die omtrek: O = 4 × sy = 4 × 13 = 52 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige banier het ʼn basis van 22 cm en ʼn hoogte van 13 cm. Vind die oppervlakte daarvan.', answer: '143 cm²', checkMode: 'auto', correctAnswer: '143 cm²', correctAnswers: ['143 cm²', '143cm²', '143 cm2', '143cm2', '143'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 22 × 13 = 0,5 × 286 = 143 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">22 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportbaan het ʼn omtrek van 46 m. As een sy 14 m lank is, wat is die lengte van die aangrensende sy?', answer: '9 m', checkMode: 'auto', correctAnswer: '9 m', correctAnswers: ['9 m', '9m', '9'], explanation: 'Die helfte van die omtrek = een lengte + een breedte: 46 ÷ 2 = 23 m.\nBreedte = 23 − 14 = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige mat het ʼn oppervlakte van 169 cm². Wat is die lengte van elke sy?', answer: '13 cm', checkMode: 'auto', correctAnswer: '13 cm', correctAnswers: ['13 cm', '13cm', '13'], explanation: 'Sy × sy = 169, dus is die sylengte die vierkantswortel van 169.\n√169 = 13 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Oppervlakte = 169 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het ʼn basis van 16 cm en ʼn hoogte van 10 cm, en ʼn reghoek is 9 cm by 8 cm. Watter vorm het die groter oppervlakte, en met hoeveel?', answer: 'Die driehoek, met 8 cm²', checkMode: 'auto', correctAnswer: 'Die driehoek, met 8 cm²', correctAnswers: ['Die driehoek, met 8 cm²', 'driehoek, met 8 cm²', 'driehoek met 8', 'driehoek', '8 cm² meer'], explanation: 'Driehoek-oppervlakte = 0,5 × 16 × 10 = 80 cm².\nReghoek-oppervlakte = 9 × 8 = 72 cm².\n80 − 72 = 8, dus is die driehoek groter met 8 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="15,100 93,100 54.0,42.0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="54.0" y1="42.0" x2="54.0" y2="100" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><rect x="46" y="92" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="54.0" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="62.0" y="71.0" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">10 cm</text><rect x="130" y="55" width="60" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="160.0" y="47" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="124" y="77.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 124 77.5)">8 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Patio van 7 m by 5 m moet met vierkantige plaveiblokke bedek word, elk presies 1 m². Hoeveel blokke word benodig?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 blokke'], explanation: 'Patio-oppervlakte = 7 × 5 = 35 m². Elke blok bedek 1 m², dus word 35 blokke benodig ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige tuinbedding het ʼn basis van 30 m en ʼn hoogte van 12 m. Bereken die oppervlakte daarvan.', answer: '180 m²', checkMode: 'auto', correctAnswer: '180 m²', correctAnswers: ['180 m²', '180m²', '180 m2', '180m2', '180'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 30 × 12 = 0,5 × 360 = 180 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">30 m</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">12 m</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige werf is 15 m by 10 m. ʼn Reghoekige vywer van 6 m by 4 m word binne-in dit gegrawe. Watter oppervlakte van die werf is oor, onbedek deur die vywer?', answer: '126 m²', checkMode: 'auto', correctAnswer: '126 m²', correctAnswers: ['126 m²', '126m²', '126 m2', '126m2', '126'], explanation: 'Werf-oppervlakte = 15 × 10 = 150 m².\nVywer-oppervlakte = 6 × 4 = 24 m².\nOorblywend = 150 − 24 = 126 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="80.0" y="62.5" width="60.0" height="39.9" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="110.0" y="78.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="110.0" y="94.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Skool wil ʼn reghoekige sportveld van 18 m by 12 m omhein met draad wat R12 per meter kos. Hoeveel sal die draad in totaal kos?', answer: 'R720', checkMode: 'auto', correctAnswer: 'R720', correctAnswers: ['R720', '720'], explanation: 'Omtrek = 2 × (18 + 12) = 2 × 30 = 60 m.\nKoste = 60 × R12 = R720 ✓' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige twaalfhoek (12 sye) het ʼn onbekende sylengte. As die omtrek daarvan 36 cm is, wat is die lengte van elke sy?', answer: '3 cm', checkMode: 'auto', correctAnswer: '3 cm', correctAnswers: ['3 cm', '3cm', '3'], explanation: 'Vir ʼn reëlmatige veelhoek: sy = omtrek ÷ aantal sye.\nSy = 36 ÷ 12 = 3 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 6 m by 4 m moet geverf word, behalwe vir ʼn reghoekige venster van 1,5 m by 1 m. Watter oppervlakte moet geverf word?', answer: '22,5 m²', checkMode: 'auto', correctAnswer: '22,5 m²', correctAnswers: ['22,5 m²', '22,5m²', '22,5 m2', '22,5m2', '22,5'], explanation: 'Muuroppervlakte = 6 × 4 = 24 m².\nVenster-oppervlakte = 1,5 × 1 = 1,5 m².\nOppervlakte om te verf = 24 − 1,5 = 22,5 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoek is 9 m by 7 m en ʼn reëlmatige heksagoon het sye van 5 m. Nomvula sê die heksagoon het die groter omtrek omdat dit meer sye het. Is sy korrek? Wys die omtrek van elk om te verduidelik.', answer: 'Nee — die reghoek het ʼn omtrek van 32 m (2 × (9 + 7)) en die heksagoon het ʼn omtrek van 30 m (6 × 5). Die reghoek het eintlik die groter omtrek, dus is Nomvula verkeerd — meer sye beteken nie altyd ʼn groter omtrek nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met omtrek en oppervlakte — gaan enige gemiste vrae na en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reëlmatige heksagoon het sye van 11 cm elk. Vind die omtrek.', answer: '66 cm', checkMode: 'auto', correctAnswer: '66 cm', correctAnswers: ['66 cm', '66cm', '66'], explanation: 'ʼn Reëlmatige heksagoon het 6 gelyke sye.\nO = 6 × 11 = 66 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="139.0,44.8 168.0,95.0 139.0,145.2 81.0,145.2 52.0,95.0 81.0,44.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="167.4" y="61.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige heksagoon</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoek het sye van 14 cm, 6 cm, 14 cm en 6 cm. Vind die omtrek deur al vier sye bymekaar te tel.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40 cm', correctAnswers: ['40 cm', '40cm', '40'], explanation: 'O = 14 + 6 + 14 + 6 = 40 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="25" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="198" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110.0" y="147" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="22" y="80.0" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Onreëlmatige vierhoek het sye van 8 cm, 12 cm, 6 cm en 10 cm. Vind die omtrek.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36 cm', correctAnswers: ['36 cm', '36cm', '36'], explanation: 'Tel al vier sye bymekaar: O = 8 + 12 + 6 + 10 = 36 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 35,55 160,30 180,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="23.6" y="104.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="95.8" y="28.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="183.9" y="83.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="111.7" y="158.9" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vierkant het sye van 17 cm. Wat is die oppervlakte daarvan?', answer: '289 cm²', checkMode: 'auto', correctAnswer: '289 cm²', correctAnswers: ['289 cm²', '289cm²', '289 cm2', '289cm2', '289'], explanation: 'O = sy × sy = 17 × 17 = 289 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text></svg>' },
        { difficulty: 'Easy', question: 'Vind die oppervlakte van ʼn reghoek wat 21 cm lank en 8 cm breed is.', answer: '168 cm²', checkMode: 'auto', correctAnswer: '168 cm²', correctAnswers: ['168 cm²', '168cm²', '168 cm2', '168cm2', '168'], explanation: 'O = lengte × breedte = 21 × 8 = 168 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">21 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">8 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het ʼn basis van 14 cm en ʼn loodregte hoogte van 9 cm. Bereken die oppervlakte daarvan.', answer: '63 cm²', checkMode: 'auto', correctAnswer: '63 cm²', correctAnswers: ['63 cm²', '63cm²', '63 cm2', '63cm2', '63'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 14 × 9 = 0,5 × 126 = 63 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reëlmatige agthoek het sye van 7 cm elk. Wat is die omtrek daarvan?', answer: '56 cm', checkMode: 'auto', correctAnswer: '56 cm', correctAnswers: ['56 cm', '56cm', '56'], explanation: 'O = aantal sye × sylengte = 8 × 7 = 56 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="132.2,41.4 163.6,72.8 163.6,117.2 132.2,148.6 87.8,148.6 56.4,117.2 56.4,72.8 87.8,41.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="159.2" y="45.8" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige agthoek</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige klaskamervloer is 12 m by 5 m. Watter oppervlakte bedek die vloer?', answer: '60 m²', checkMode: 'auto', correctAnswer: '60 m²', correctAnswers: ['60 m²', '60m²', '60 m2', '60m2', '60'], explanation: 'O = lengte × breedte = 12 × 5 = 60 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige kennisgewingbord het sye van 18 cm. Watter lengte randstuk word benodig om heeltemal rondom dit te gaan?', answer: '72 cm', checkMode: 'auto', correctAnswer: '72 cm', correctAnswers: ['72 cm', '72cm', '72'], explanation: 'Die randstuk gaan rondom die omtrek: O = 4 × sy = 4 × 18 = 72 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige padteken het ʼn basis van 26 cm en ʼn hoogte van 15 cm. Vind die oppervlakte daarvan.', answer: '195 cm²', checkMode: 'auto', correctAnswer: '195 cm²', correctAnswers: ['195 cm²', '195cm²', '195 cm2', '195cm2', '195'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 26 × 15 = 0,5 × 390 = 195 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">26 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige parkeerterrein het ʼn omtrek van 58 m. As een sy 19 m lank is, wat is die lengte van die aangrensende sy?', answer: '10 m', checkMode: 'auto', correctAnswer: '10 m', correctAnswers: ['10 m', '10m', '10'], explanation: 'Die helfte van die omtrek = een lengte + een breedte: 58 ÷ 2 = 29 m.\nBreedte = 29 − 19 = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige plek-mat het ʼn oppervlakte van 225 cm². Wat is die lengte van elke sy?', answer: '15 cm', checkMode: 'auto', correctAnswer: '15 cm', correctAnswers: ['15 cm', '15cm', '15'], explanation: 'Sy × sy = 225, dus is die sylengte die vierkantswortel van 225.\n√225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="92.0" font-size="15" fill="#374151" text-anchor="middle">Oppervlakte = 225 cm²</text><text x="110.0" y="112.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het sye van 12 cm, en ʼn driehoek het ʼn basis van 20 cm en ʼn hoogte van 16 cm. Watter vorm het die groter oppervlakte, en met hoeveel?', answer: 'Die driehoek, met 16 cm²', checkMode: 'auto', correctAnswer: 'Die driehoek, met 16 cm²', correctAnswers: ['Die driehoek, met 16 cm²', 'driehoek, met 16 cm²', 'driehoek met 16', 'driehoek', '16 cm² meer'], explanation: 'Vierkant-oppervlakte = 12 × 12 = 144 cm².\nDriehoek-oppervlakte = 0,5 × 20 × 16 = 160 cm².\n160 − 144 = 16, dus is die driehoek groter met 16 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="45" width="55" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="42.5" y="37" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><polygon points="130,100 208,100 169.0,40.0" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><line x1="169.0" y1="40.0" x2="169.0" y2="100" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/><rect x="161" y="92" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="169.0" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="177.0" y="70.0" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">16 cm</text><text x="55" y="175" font-size="12" fill="#374151" text-anchor="middle">A</text><text x="165" y="175" font-size="12" fill="#374151" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Werkswinkelvloer van 9 m by 6 m moet met vierkantige matte bedek word, elk presies 1 m². Hoeveel matte word benodig?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 matte'], explanation: 'Vloeroppervlakte = 9 × 6 = 54 m². Elke mat bedek 1 m², dus word 54 matte benodig ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="19" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 90.0)">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlieër het ʼn basis van 19 cm en ʼn hoogte van 8 cm. Bereken die oppervlakte materiaal wat benodig word.', answer: '76 cm²', checkMode: 'auto', correctAnswer: '76 cm²', correctAnswers: ['76 cm²', '76cm²', '76 cm2', '76cm2', '76'], explanation: 'O = 0,5 × basis × hoogte = 0,5 × 19 × 8 = 0,5 × 152 = 76 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tuinskuur het ʼn reghoekige basis van 10 m by 6 m, en ʼn driehoekige dakgedeelte bo een muur met ʼn basis van 10 m en ʼn hoogte van 4 m. Wat is die totale oppervlakte wat deur die basis plus die dakgedeelte bedek word?', answer: '80 m²', checkMode: 'auto', correctAnswer: '80 m²', correctAnswers: ['80 m²', '80m²', '80 m2', '80m2', '80'], explanation: 'Basis-oppervlakte = 10 × 6 = 60 m².\nDakgedeelte-oppervlakte = 0,5 × 10 × 4 = 20 m².\nTotaal = 60 + 20 = 80 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110.0,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110.0" y1="20" x2="110.0" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102.0" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="124.0" y="47.5" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">4 m</text><text x="110.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Gemeenskap wil ʼn reghoekige speelgrond van 22 m by 9 m omhein met draad wat R10 per meter kos. Hoeveel sal die draad in totaal kos?', answer: 'R620', checkMode: 'auto', correctAnswer: 'R620', correctAnswers: ['R620', '620'], explanation: 'Omtrek = 2 × (22 + 9) = 2 × 31 = 62 m.\nKoste = 62 × R10 = R620 ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelyksydige driehoek het ʼn onbekende sylengte. As die omtrek daarvan 69 cm is, wat is die lengte van elke sy?', answer: '23 cm', checkMode: 'auto', correctAnswer: '23 cm', correctAnswers: ['23 cm', '23cm', '23'], explanation: 'ʼn Gelyksydige driehoek het 3 gelyke sye, dus sy = omtrek ÷ 3.\nSy = 69 ÷ 3 = 23 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 7 m by 3 m moet geverf word, behalwe vir ʼn reghoekige venster van 2 m by 1,5 m. Watter oppervlakte moet geverf word?', answer: '18 m²', checkMode: 'auto', correctAnswer: '18 m²', correctAnswers: ['18 m²', '18m²', '18 m2', '18m2', '18'], explanation: 'Muuroppervlakte = 7 × 3 = 21 m².\nVenster-oppervlakte = 2 × 1,5 = 3 m².\nOppervlakte om te verf = 21 − 3 = 18 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het sye van 11 m en ʼn reghoek is 7 m by 10 m. Kagiso sê die reghoek moet die groter omtrek hê omdat dit langer lyk. Is hy korrek? Wys die omtrek van elk om te verduidelik.', answer: 'Nee — die vierkant het ʼn omtrek van 44 m (4 × 11) en die reghoek het ʼn omtrek van 34 m (2 × (7 + 10)). Die vierkant het eintlik die groter omtrek, dus is Kagiso verkeerd — langer lyk in een rigting sê jou nie wat die totale omtrek is nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek en oppervlakte oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met omtrek en oppervlakte — gaan enige gemiste vrae na en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het omtrek en oppervlakte bemeester.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
