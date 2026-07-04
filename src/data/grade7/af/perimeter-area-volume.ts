import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (measurement roles) ──────────────────────────────────────
// side length / dimension → blue    (#2563eb)
// formula                 → orange  (#ea580c)
// perimeter / answer      → green   (#16a34a)
// width / red dimension   → red     (#dc2626)
// base                    → orange  (#ea580c)  [reused]
// height                  → purple  (#7c3aed)
// surface area            → orange  (#ea580c)  [reused]
// volume                  → green   (#16a34a)  [reused]
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Omtrek, Oppervlakte en Volume',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OMTREK VAN VEELHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-of-polygons',
      title: 'Omtrek van Veelhoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>omtrek</strong> is die totale afstand rondom ʼn vorm. Vir <strong>reëlmatige veelhoeke</strong> vermenigvuldig ons een sy met die aantal sye. Vir <strong>onreëlmatige veelhoeke</strong> tel ons al die sylengtes bymekaar. In Graad 7 gebruik ons formules:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vierkant</p>` +
        `<p style="font-size:1.1em;margin:0;">${or('O')} = ${or('4')}${bl('s')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Reghoek</p>` +
        `<p style="font-size:1.1em;margin:0;">${or('O')} = ${or('2(')}${bl('l')} + ${re('b')}${or(')')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sylengtes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('formule')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omtrekantwoord')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sluit altyd eenhede in</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omtrek is ʼn <strong>lengte</strong>, dus moet jou antwoord ʼn lengte-eenheid hê soos cm, m of mm. Los nooit die eenheid uit nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vierkant het sye van 9 cm. Vind die omtrek deur die formule te gebruik.',
          answer: `${gr('O = 36 cm')}`,
          steps: [
            `Skryf die formule: ${or('O = 4s')}`,
            `Vervang die sylengte: ${or('O = 4 ×')} ${bl('9')}`,
            `Bereken: ${or('O =')} ${gr('36 cm')}`,
          ],
        },
        {
          question: 'ʼn Reghoek is 14 cm lank en 8 cm breed. Vind die omtrek deur die formule te gebruik.',
          answer: `${gr('O = 44 cm')}`,
          steps: [
            `Skryf die formule: ${or('O = 2(l + b)')}`,
            `Vervang die waardes: ${or('O = 2(')}${bl('14')} + ${re('8')}${or(')')}`,
            `Tel binne die hakies bymekaar: ${or('O = 2(')}${bl('22')}${or(')')}`,
            `Vermenigvuldig: ${or('O =')} ${gr('44 cm')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Vierkant het sye van 12 cm. Bereken die omtrek deur die formule te gebruik.',
          answer: '48 cm',
          checkMode: 'auto',
          correctAnswer: '48',
          correctAnswers: ['48', '48 cm', '48cm'],
          explanation: 'O = 4s = 4 × 12 = 48 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken die omtrek van elke vorm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Reghoek 20 cm lank en 7 cm breed.',
              correctAnswer: '54',
              correctAnswers: ['54', '54 cm', '54cm'],
              explanation: 'O = 2(l + b) = 2(20 + 7) = 2(27) = 54 cm ✓',
            },
            {
              label: 'b) ʼn Vierkant met sye van 15 cm.',
              correctAnswer: '60',
              correctAnswers: ['60', '60 cm', '60cm'],
              explanation: 'O = 4s = 4 × 15 = 60 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die omtrek van ʼn reghoek is 72 cm. Die lengte is 22 cm. Vind die breedte.',
          answer: '14 cm',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14', '14 cm', '14cm'],
          explanation: 'O = 2(l + b)\n72 = 2(22 + b)\n36 = 22 + b\nb = 14 cm ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die omtrek van vierkante en reghoeke met formules te bereken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Gemerkte diagramme van ʼn vierkant en ʼn reghoek wat die sylengteformule vir omtrek wys, met kleurgekodeerde metings" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OPPERVLAKTE VAN DRIEHOEKE, VIERKANTE EN REGHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-triangles-squares-rectangles',
      title: 'Oppervlakte van Driehoeke, Vierkante en Reghoeke',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Oppervlakte</strong> is die ruimte binne ʼn vorm en word in <strong>vierkante eenhede</strong> gemeet (cm², m², mm²). In Graad 7 gebruik ons hierdie formules:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vierkant</p>` +
        `<p style="font-size:1.1em;margin:0;">O = ${bl('l')}²</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Reghoek</p>` +
        `<p style="font-size:1.1em;margin:0;">O = ${bl('l')} × ${re('b')}</p>` +
        `</div>` +

        `<div style="background:#fdf4ff;border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#6b21a8;margin-bottom:6px;">Driehoek</p>` +
        `<p style="font-size:1.1em;margin:0;">O = ½ × ${or('b')} × ${pu('h')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lengte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('breedte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('basis')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('hoogte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oppervlakte')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Oppervlakte-eenhede is altyd vierkant</p>` +
        `<p style="margin:0;color:#166534;">As jy in sentimeter meet, is jou oppervlakte in cm². As jy in meter meet, is jou oppervlakte in m². Moet nooit vergeet om die eenheid te kwadreer nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vierkant het sye van 11 cm. Vind die oppervlakte.',
          answer: `${gr('O = 121 cm²')}`,
          steps: [
            `Skryf die formule: O = ${bl('l')}²`,
            `Vervang die lengte: O = ${bl('11')}²`,
            `Bereken: O = ${gr('121 cm²')}`,
          ],
        },
        {
          question: 'ʼn Reghoek is 15 cm lank en 9 cm breed. Vind die oppervlakte.',
          answer: `${gr('O = 135 cm²')}`,
          steps: [
            `Skryf die formule: O = ${bl('l')} × ${re('b')}`,
            `Vervang die waardes: O = ${bl('15')} × ${re('9')}`,
            `Bereken: O = ${gr('135 cm²')}`,
          ],
        },
        {
          question: 'ʼn Driehoek het ʼn basis van 16 cm en ʼn hoogte van 10 cm. Vind die oppervlakte.',
          answer: `${gr('O = 80 cm²')}`,
          steps: [
            `Skryf die formule: O = ½ × ${or('b')} × ${pu('h')}`,
            `Vervang die waardes: O = 0,5 × ${or('16')} × ${pu('10')}`,
            `Vermenigvuldig: O = 0,5 × 160`,
            `Bereken: O = ${gr('80 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Vierkant het sye van 13 cm. Bereken die oppervlakte.',
          answer: '169 cm²',
          checkMode: 'auto',
          correctAnswer: '169',
          correctAnswers: ['169', '169 cm²', '169cm²'],
          explanation: 'O = l² = 13² = 169 cm² ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken die oppervlakte van elke vorm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Reghoek 18 cm lank en 7 cm breed.',
              correctAnswer: '126',
              correctAnswers: ['126', '126 cm²', '126cm²'],
              explanation: 'O = l × b = 18 × 7 = 126 cm² ✓',
            },
            {
              label: 'b) ʼn Driehoek met basis 20 cm en hoogte 12 cm.',
              correctAnswer: '120',
              correctAnswers: ['120', '120 cm²', '120cm²'],
              explanation: 'O = ½ × b × h = 0,5 × 20 × 12 = 120 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die oppervlakte van ʼn reghoek is 180 cm². Die lengte is 15 cm. Vind die breedte.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12 cm', '12cm'],
          explanation: 'O = l × b\n180 = 15 × b\nb = 180 ÷ 15 = 12 cm ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van vierkante, reghoeke en driehoeke met formules te bereken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Gemerkte diagramme van ʼn vierkant, reghoek en driehoek met kleurgekodeerde lengte-, breedte-, basis- en hoogte-afmetings" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPPERVLAKTE EN VOLUME VAN KUBUSSE EN REGHOEKIGE PRISMAS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area-volume-3d',
      title: 'Oppervlakte en Volume van Kubusse en Reghoekige Prismas',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Oppervlakte</strong> is die totale oppervlakte van al die vlakke van ʼn 3D-voorwerp. <strong>Volume</strong> is die ruimte wat ʼn 3D-voorwerp inneem, gemeet in <strong>kubieke eenhede</strong> (cm³, m³). In Graad 7 gebruik ons hierdie formules:</p>` +

        // ── Formula cards ────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:8px;">Kubus</p>` +
        `<p style="font-size:1em;margin-bottom:4px;">${or('O')} = ${or('6')}${bl('l')}²</p>` +
        `<p style="font-size:1em;margin:0;">${gr('V')} = ${bl('l')}³</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:8px;">Reghoekige Prisma</p>` +
        `<p style="font-size:1em;margin-bottom:4px;">${or('O')} = ${or('2(')}${bl('lb')} + ${bl('lh')} + ${bl('bh')}${or(')')}</p>` +
        `<p style="font-size:1em;margin:0;">${gr('V')} = ${bl('l')} × ${bl('b')} × ${bl('h')}</p>` +
        `</div>` +

        `</div>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensies (l, b, h)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#9a3412;margin-bottom:6px;">Eenhede om te onthou</p>` +
        `<p style="margin:0;color:#7c2d12;">Oppervlakte gebruik <strong>vierkante eenhede</strong> (cm², m²) want dit is steeds ʼn oppervlakte. Volume gebruik <strong>kubieke eenhede</strong> (cm³, m³) want dit vul driedimensionele ruimte.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kubus het sye van 5 cm. Vind die oppervlakte en die volume.',
          answer: `${or('O = 150 cm²')} &nbsp; ${gr('V = 125 cm³')}`,
          steps: [
            `<strong>Oppervlakte</strong> — skryf die formule: ${or('O = 6l²')}`,
            `Vervang: ${or('O = 6 ×')} ${bl('5')}² = ${or('6 ×')} ${bl('25')}`,
            `Bereken: ${or('O = 150 cm²')}`,
            `<strong>Volume</strong> — skryf die formule: ${gr('V = l³')}`,
            `Vervang: ${gr('V =')} ${bl('5')}³ = ${bl('5')} × ${bl('5')} × ${bl('5')}`,
            `Bereken: ${gr('V = 125 cm³')}`,
          ],
        },
        {
          question: 'ʼn Reghoekige prisma is 8 cm lank, 5 cm breed en 4 cm hoog. Vind die volume.',
          answer: `${gr('V = 160 cm³')}`,
          steps: [
            `Skryf die formule: ${gr('V = l × b × h')}`,
            `Vervang die waardes: ${gr('V =')} ${bl('8')} × ${bl('5')} × ${bl('4')}`,
            `Vermenigvuldig stap vir stap: ${bl('8')} × ${bl('5')} = ${bl('40')}, dan ${bl('40')} × ${bl('4')}`,
            `Bereken: ${gr('V = 160 cm³')}`,
          ],
        },
        {
          question: 'Vind die oppervlakte van dieselfde reghoekige prisma (8 cm × 5 cm × 4 cm).',
          answer: `${or('O = 184 cm²')}`,
          steps: [
            `Skryf die formule: ${or('O = 2(lb + lh + bh)')}`,
            `Vind elke vlakpaar: ${bl('lb')} = ${bl('8 × 5')} = ${bl('40')}, ${bl('lh')} = ${bl('8 × 4')} = ${bl('32')}, ${bl('bh')} = ${bl('5 × 4')} = ${bl('20')}`,
            `Tel die vlakpare bymekaar: ${bl('40')} + ${bl('32')} + ${bl('20')} = ${bl('92')}`,
            `Vermenigvuldig met 2: ${or('O = 2 × 92')}`,
            `Bereken: ${or('O = 184 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Kubus het sye van 6 cm. Bereken die volume.',
          answer: '216 cm³',
          checkMode: 'auto',
          correctAnswer: '216',
          correctAnswers: ['216', '216 cm³', '216cm³'],
          explanation: 'V = l³ = 6³ = 6 × 6 × 6 = 216 cm³ ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige prisma is 10 cm × 6 cm × 3 cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die volume.',
              correctAnswer: '180',
              correctAnswers: ['180', '180 cm³', '180cm³'],
              explanation: 'V = l × b × h = 10 × 6 × 3 = 180 cm³ ✓',
            },
            {
              label: 'b) Vind die oppervlakte.',
              correctAnswer: '216',
              correctAnswers: ['216', '216 cm²', '216cm²'],
              explanation: 'O = 2(lb + lh + bh) = 2(60 + 30 + 18) = 2(108) = 216 cm² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Kubus het ʼn oppervlakte van 294 cm². Vind die sylengte en die volume van die kubus.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Sylengte van die kubus.',
              correctAnswer: '7',
              correctAnswers: ['7', '7 cm', '7cm'],
              explanation: 'O = 6l²\n294 = 6l²\nl² = 294 ÷ 6 = 49\nl = √49 = 7 cm ✓',
            },
            {
              label: 'b) Volume van die kubus.',
              correctAnswer: '343',
              correctAnswers: ['343', '343 cm³', '343cm³'],
              explanation: 'V = l³ = 7³ = 7 × 7 × 7 = 343 cm³ ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte en volume van kubusse en reghoekige prismas met formules te bereken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="3D diagrams of a cube and a rectangular prism with colour coded dimensions showing all six faces for surface area and the interior for volume" />',
    },
  ],

  topicPractice: [
    // ── V1 Easy — vierkant-omtrek deur formule ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Vierkant het sye van 7 cm. Vind die omtrek deur die formule te gebruik.',
      answer: '28 cm',
      checkMode: 'auto',
      correctAnswer: '28',
      explanation: 'O = 4s = 4 × 7 = 28 cm ✓',
    },

    // ── V2 Medium — reghoek-omtrek ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoek is 12 cm lank en 6 cm breed. Vind die omtrek.',
      answer: '36 cm',
      checkMode: 'auto',
      correctAnswer: '36',
      explanation: 'O = 2(l + b) = 2(12 + 6) = 2(18) = 36 cm ✓',
    },

    // ── V3 Hard — Sipho se omtrekfout ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn vierkant met omtrek 48 cm het sye van 16 cm. Is hy korrek? Verduidelik.',
      answer: 'Nee — Omtrek = 4s, dus s = 48 ÷ 4 = 12 cm, nie 16 cm nie.',
      checkMode: 'self',
    },

    // ── V4 Easy — vierkant-oppervlakte ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Vierkant het sye van 8 cm. Vind die oppervlakte.',
      answer: '64 cm²',
      checkMode: 'auto',
      correctAnswer: '64',
      explanation: 'O = l² = 8² = 64 cm² ✓',
    },

    // ── V5 Easy — reghoek-oppervlakte ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Reghoek is 10 cm lank en 7 cm breed. Vind die oppervlakte.',
      answer: '70 cm²',
      checkMode: 'auto',
      correctAnswer: '70',
      explanation: 'O = l × b = 10 × 7 = 70 cm² ✓',
    },

    // ── V6 Medium — driehoek-oppervlakte ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het ʼn basis van 12 cm en hoogte van 9 cm. Vind die oppervlakte.',
      answer: '54 cm²',
      checkMode: 'auto',
      correctAnswer: '54',
      explanation: 'O = ½ × b × h = 0,5 × 12 × 9 = 54 cm² ✓',
    },

    // ── V7 Hard — Lerato se verdubbelingsbewering ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê om die sylengte van ʼn vierkant te verdubbel, verviervoudig die oppervlakte. Is sy korrek? Verduidelik met ʼn voorbeeld.',
      answer: 'Ja — as ʼn vierkant sye van 4 cm het (oppervlakte = 16 cm²), gee die verdubbeling na 8 cm ʼn oppervlakte van 64 cm², wat 4 keer groter is.',
      checkMode: 'self',
    },

    // ── V8 Easy — kubus-volume ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volume van ʼn kubus met sye van 6 cm.',
      answer: '216 cm³',
      checkMode: 'auto',
      correctAnswer: '216',
      explanation: 'V = l³ = 6³ = 6 × 6 × 6 = 216 cm³ ✓',
    },

    // ── V9 Medium — reghoekige prisma-volume ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die volume van ʼn reghoekige prisma 9 cm by 5 cm by 3 cm.',
      answer: '135 cm³',
      checkMode: 'auto',
      correctAnswer: '135',
      explanation: 'V = l × b × h = 9 × 5 × 3 = 135 cm³ ✓',
    },

    // ── V10 Hard — kubus-oppervlakte ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die oppervlakte van ʼn kubus met sye van 7 cm.',
      answer: '294 cm²',
      checkMode: 'auto',
      correctAnswer: '294',
      explanation: 'O = 6l² = 6 × 7² = 6 × 49 = 294 cm² ✓',
    },

    // ── V11 Medium — reghoekige prisma-oppervlakte ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die oppervlakte van ʼn reghoekige prisma 10 cm by 6 cm by 4 cm.',
      answer: '248 cm²',
      checkMode: 'auto',
      correctAnswer: '248',
      explanation: 'O = 2(lb + lh + bh) = 2(10×6 + 10×4 + 6×4) = 2(60 + 40 + 24) = 2(124) = 248 cm² ✓',
    },

    // ── V12 Hard — Thabo se kubus-volumefout ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn kubus met volume 64 cm³ het sye van 8 cm. Is hy korrek? Verduidelik.',
      answer: 'Nee — Volume = l³, dus l = ∛64 = 4 cm, nie 8 cm nie.',
      checkMode: 'self',
    },

    // ── V13 Medium — driehoekige tuin-oppervlakte ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoekige tuin het ʼn basis van 18 m en hoogte van 12 m. Vind die oppervlakte.',
      answer: '108 m²',
      checkMode: 'auto',
      correctAnswer: '108',
      explanation: 'O = ½ × b × h = 0,5 × 18 × 12 = 108 m² ✓',
    },

    // ── V14 Hard — kubuspakking ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle pak ʼn boks 30 cm by 20 cm by 10 cm met kubusse van 5 cm sye. Hoeveel kubusse pas binne-in?',
      answer: '48',
      checkMode: 'auto',
      correctAnswer: '48',
      explanation: 'Aantal langs elke dimensie: 30 ÷ 5 = 6, 20 ÷ 5 = 4, 10 ÷ 5 = 2\nTotale kubusse: 6 × 4 × 2 = 48 ✓',
    },

    // ── V15 Hard — vierkant vanaf oppervlakte ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Vierkant het ʼn oppervlakte van 121 cm². Vind die sylengte en die omtrek.',
      answer: 'Sy = √121 = 11 cm. Omtrek = 4 × 11 = 44 cm.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Uitstekend! Jy het omtrek, oppervlakte en volume bemeester.' },
      { minScore: 12, message: 'Goeie werk!' },
      { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het omtrek, oppervlakte en volume vir Graad 7 volkome bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van meting. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
}
