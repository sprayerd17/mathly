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
        '<DiagramPlaceholder label="3D-diagramme van ʼn kubus en ʼn reghoekige prisma met kleurgekodeerde dimensies wat al ses vlakke vir oppervlakte en die binnekant vir volume wys" />',
    },
  ],

  practiceSets: [
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Omtrek van veelhoeke ──────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reëlmatige sewehoek het sye van 9 cm elk, soos getoon. Vind die omtrek.', answer: '63 cm', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', '63 cm', '63cm'], explanation: 'ʼn Reëlmatige sewehoek het 7 gelyke sye.\nO = 7 × 9 = 63 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 155.3,58.8 166.5,107.9 135.2,147.3 84.8,147.3 53.5,107.9 64.7,58.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="140.5" y="31.7" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige sewehoek</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld is 16 m lank en 9 m breed, soos getoon. Bereken die omtrek.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 m', '50m'], explanation: 'O = 2(l + b) = 2(16 + 9) = 2(25) = 50 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">9 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vyfhoek het sye van 6 cm, 8 cm, 5 cm, 9 cm en 7 cm, soos getoon. Vind die omtrek.', answer: '35 cm', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 cm', '35cm'], explanation: 'Tel al vyf sye bymekaar: O = 6 + 8 + 5 + 9 + 7 = 35 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 30,80 100,30 175,70 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="16.5" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="34" y="19" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="183.5" y="41" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="192.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="44.5" y="164" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text></svg>' },

        // ── Blok 2: Oppervlakte van reghoeke, vierkante en driehoeke ───────
        { difficulty: 'Easy', question: 'ʼn Vierkante teël het sye van 14 cm, soos getoon. Vind die oppervlakte.', answer: '196 cm²', checkMode: 'auto', correctAnswer: '196', correctAnswers: ['196', '196 cm²', '196cm²'], explanation: 'O = l² = 14² = 196 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige witbord is 17 cm lank en 8 cm breed, soos getoon. Vind die oppervlakte.', answer: '136 cm²', checkMode: 'auto', correctAnswer: '136', correctAnswers: ['136', '136 cm²', '136cm²'], explanation: 'O = l × b = 17 × 8 = 136 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige seil het ʼn basis van 20 cm en ʼn hoogte van 11 cm, soos getoon. Vind die oppervlakte.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110', '110 cm²', '110cm²'], explanation: 'O = ½ × b × h = 0,5 × 20 × 11 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige plakkaat het ʼn oppervlakte van 192 cm². Die lengte is 16 cm. Vind die breedte, soos getoon.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 cm', '12cm'], explanation: 'O = l × b\n192 = 16 × b\nb = 192 ÷ 16 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="26" y="85.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">?</text><text x="110.0" y="70" font-size="12" fill="#374151" text-anchor="middle">Area = 192 cm²</text></svg>' },

        // ── Blok 3: Saamgestelde 2D-figuuroppervlakte ────────────────────
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin meet 18 m by 12 m, soos getoon. ʼn Reghoekige stoor van 5 m by 4 m word in een hoek gebou. Vind die oppervlakte van die tuin wat nie deur die stoor bedek word nie.', answer: '196 m²', checkMode: 'auto', correctAnswer: '196', correctAnswers: ['196', '196 m²', '196m²'], explanation: 'Tuinoppervlakte = 18 × 12 = 216 m²\nStooroppervlakte = 5 × 4 = 20 m²\nOorblywend = 216 − 20 = 196 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">12 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 14 m by 11 m, soos getoon, met ʼn reghoekige hoek van 6 m by 5 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '124 m²', checkMode: 'auto', correctAnswer: '124', correctAnswers: ['124', '124 m²', '124m²'], explanation: 'Buitenste reghoek = 14 × 11 = 154 m²\nOntbrekende hoek = 6 × 5 = 30 m²\nVloeroppervlakte = 154 − 30 = 124 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">11 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Huisvormige teken bestaan uit ʼn reghoek 16 cm breed en 8 cm hoog, met ʼn driehoekige dak bo-op met basis 16 cm en hoogte 5 cm, soos getoon. Vind die totale oppervlakte van die teken.', answer: '168 cm²', checkMode: 'auto', correctAnswer: '168', correctAnswers: ['168', '168 cm²', '168cm²'], explanation: 'Reghoekoppervlakte = 16 × 8 = 128 cm²\nDriehoekoppervlakte = ½ × 16 × 5 = 40 cm²\nTotaal = 128 + 40 = 168 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="124" y="47.5" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">5 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">8 cm</text></svg>' },

        // ── Blok 4: Oppervlakte van prismas en kubusse ────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 9 cm, soos getoon. Vind die oppervlakte.', answer: '486 cm²', checkMode: 'auto', correctAnswer: '486', correctAnswers: ['486', '486 cm²', '486cm²'], explanation: 'O = 6l² = 6 × 9² = 6 × 81 = 486 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 12 cm lank, 7 cm breed en 5 cm hoog, soos getoon. Vind die oppervlakte.', answer: '358 cm²', checkMode: 'auto', correctAnswer: '358', correctAnswers: ['358', '358 cm²', '358cm²'], explanation: 'O = 2(lb + lh + bh) = 2(84 + 60 + 35) = 2(179) = 358 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Kubus het ʼn oppervlakte van 216 cm². Vind die lengte van sy sye.', answer: '6 cm', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 cm', '6cm'], explanation: 'O = 6l²\n216 = 6l²\nl² = 36\nl = √36 = 6 cm ✓' },

        // ── Blok 5: Volume van prismas en kubusse ─────────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 6 cm, soos getoon. Vind die volume.', answer: '216 cm³', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 cm³', '216cm³'], explanation: 'V = l³ = 6³ = 216 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 11 cm lank, 6 cm breed en 4 cm hoog, soos getoon. Vind die volume.', answer: '264 cm³', checkMode: 'auto', correctAnswer: '264', correctAnswers: ['264', '264 cm³', '264cm³'], explanation: 'V = l × b × h = 11 × 6 × 4 = 264 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het ʼn volume van 180 cm³. Die lengte is 9 cm en die breedte is 5 cm. Vind die hoogte, soos getoon.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 cm', '4cm'], explanation: 'V = l × b × h\n180 = 9 × 5 × h\n180 = 45 × h\nh = 4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 180 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk in die vorm van ʼn reghoekige prisma is 2 m lank, 1,5 m breed en 1 m hoog, soos getoon. Vind die kapasiteit in liter (1 m³ = 1 000 liter).', answer: '3000 liter', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', '3000 liter', '3000 l', '3 000 liter', '3 000'], explanation: 'V = l × b × h = 2 × 1,5 × 1 = 3 m³\nKapasiteit = 3 × 1 000 = 3 000 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">1.5 m</text></svg>' },

        // ── Blok 6: Toegepaste meerstap-woordprobleme ─────────────────────
        { difficulty: 'Hard', question: 'ʼn Boer wil ʼn reghoekige land van 26 m by 14 m omhein met draad wat R18 per meter kos. Bereken die totale koste van die draad.', answer: 'R1440', checkMode: 'auto', correctAnswer: 'R1440', correctAnswers: ['R1440', '1440', 'R1 440', '1 440'], explanation: 'Omtrek = 2 × (26 + 14) = 2 × 40 = 80 m\nKoste = 80 × R18 = R1 440 ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 9 m by 4 m moet geverf word, behalwe vir ʼn reghoekige venster van 2 m by 1,5 m, soos getoon. Vind die oppervlakte wat geverf moet word.', answer: '33 m²', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33 m²', '33m²'], explanation: 'Muuroppervlakte = 9 × 4 = 36 m²\nVensteroppervlakte = 2 × 1,5 = 3 m²\nOppervlakte om te verf = 36 − 3 = 33 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">4 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1.5 m</text></svg>' },
        { difficulty: 'Hard', question: 'Zanele sê ʼn reghoekige prisma 8 cm by 5 cm by 3 cm het dieselfde volume as ʼn kubus met sye van 5 cm. Is sy korrek? Wys jou werk om te verduidelik.', answer: 'Nee — die prisma het ʼn volume van 8 × 5 × 3 = 120 cm³, terwyl die kubus ʼn volume van 5³ = 125 cm³ het. Hierdie is nie gelyk nie, dus is Zanele verkeerd.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek, oppervlakte, oppervlakte van 3D-vorms en volume oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met hierdie metingsvaardighede — gaan enige gemiste vrae weer deur en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Omtrek van veelhoeke ──────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reëlmatige negehoek (9 sye) het sye van 6 cm elk, soos getoon. Vind die omtrek.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 cm', '54cm'], explanation: 'ʼn Reëlmatige negehoek het 9 gelyke sye.\nO = 9 × 6 = 54 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 147.3,50.6 167.1,84.9 160.2,124 129.8,149.5 90.2,149.5 59.8,124 52.9,84.9 72.7,50.6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="134.8" y="26.9" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige negehoek</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige parkeerarea is 18 m lank en 11 m breed, soos getoon. Bereken die omtrek.', answer: '58 m', checkMode: 'auto', correctAnswer: '58', correctAnswers: ['58', '58 m', '58m'], explanation: 'O = 2(l + b) = 2(18 + 11) = 2(29) = 58 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">11 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportbaan het ʼn omtrek van 52 m. Die lengte is 17 m. Vind die breedte, soos getoon.', answer: '9 m', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 m', '9m'], explanation: 'O = 2(l + b)\n52 = 2(17 + b)\n26 = 17 + b\nb = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="87.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">?</text></svg>' },

        // ── Blok 2: Oppervlakte van reghoeke, vierkante en driehoeke ───────
        { difficulty: 'Easy', question: 'ʼn Vierkante mat het sye van 16 cm, soos getoon. Vind die oppervlakte.', answer: '256 cm²', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256', '256 cm²', '256cm²'], explanation: 'O = l² = 16² = 256 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige kennisgewingbord is 19 cm lank en 9 cm breed, soos getoon. Vind die oppervlakte.', answer: '171 cm²', checkMode: 'auto', correctAnswer: '171', correctAnswers: ['171', '171 cm²', '171cm²'], explanation: 'O = l × b = 19 × 9 = 171 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">19 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlag het ʼn basis van 24 cm en ʼn hoogte van 13 cm, soos getoon. Vind die oppervlakte.', answer: '156 cm²', checkMode: 'auto', correctAnswer: '156', correctAnswers: ['156', '156 cm²', '156cm²'], explanation: 'O = ½ × b × h = 0,5 × 24 × 13 = 156 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">24 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Vierkante mat het ʼn oppervlakte van 225 cm². Vind die lengte van sy sye.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 cm', '15cm'], explanation: 'O = l²\n225 = l²\nl = √225 = 15 cm ✓' },

        // ── Blok 3: Saamgestelde 2D-figuuroppervlakte ────────────────────
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin meet 20 m by 10 m, soos getoon. ʼn Reghoekige dam van 6 m by 3 m word in een hoek gegrawe. Vind die oppervlakte van die tuin wat nie deur die dam bedek word nie.', answer: '182 m²', checkMode: 'auto', correctAnswer: '182', correctAnswers: ['182', '182 m²', '182m²'], explanation: 'Tuinoppervlakte = 20 × 10 = 200 m²\nDamoppervlakte = 6 × 3 = 18 m²\nOorblywend = 200 − 18 = 182 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">10 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 16 m by 11 m, soos getoon, met ʼn reghoekige hoek van 4 m by 4 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '160 m²', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160 m²', '160m²'], explanation: 'Buitenste reghoek = 16 × 11 = 176 m²\nOntbrekende hoek = 4 × 4 = 16 m²\nVloeroppervlakte = 176 − 16 = 160 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">11 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Huisvormige teken bestaan uit ʼn reghoek 18 cm breed en 9 cm hoog, met ʼn driehoekige dak bo-op met basis 18 cm en hoogte 6 cm, soos getoon. Vind die totale oppervlakte van die teken.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 cm²', '216cm²'], explanation: 'Reghoekoppervlakte = 18 × 9 = 162 cm²\nDriehoekoppervlakte = ½ × 18 × 6 = 54 cm²\nTotaal = 162 + 54 = 216 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="124" y="47.5" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">6 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">9 cm</text></svg>' },

        // ── Blok 4: Oppervlakte van prismas en kubusse ────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 8 cm, soos getoon. Vind die oppervlakte.', answer: '384 cm²', checkMode: 'auto', correctAnswer: '384', correctAnswers: ['384', '384 cm²', '384cm²'], explanation: 'O = 6l² = 6 × 8² = 6 × 64 = 384 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 10 cm lank, 8 cm breed en 6 cm hoog, soos getoon. Vind die oppervlakte.', answer: '376 cm²', checkMode: 'auto', correctAnswer: '376', correctAnswers: ['376', '376 cm²', '376cm²'], explanation: 'O = 2(lb + lh + bh) = 2(80 + 60 + 48) = 2(188) = 376 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Kubus het ʼn oppervlakte van 294 cm². Vind die lengte van sy sye.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 cm', '7cm'], explanation: 'O = 6l²\n294 = 6l²\nl² = 49\nl = √49 = 7 cm ✓' },

        // ── Blok 5: Volume van prismas en kubusse ─────────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 9 cm, soos getoon. Vind die volume.', answer: '729 cm³', checkMode: 'auto', correctAnswer: '729', correctAnswers: ['729', '729 cm³', '729cm³'], explanation: 'V = l³ = 9³ = 729 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 13 cm lank, 5 cm breed en 3 cm hoog, soos getoon. Vind die volume.', answer: '195 cm³', checkMode: 'auto', correctAnswer: '195', correctAnswers: ['195', '195 cm³', '195cm³'], explanation: 'V = l × b × h = 13 × 5 × 3 = 195 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het ʼn volume van 300 cm³. Die lengte is 10 cm en die breedte is 6 cm. Vind die hoogte, soos getoon.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 cm', '5cm'], explanation: 'V = l × b × h\n300 = 10 × 6 × h\n300 = 60 × h\nh = 5 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 300 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk in die vorm van ʼn reghoekige prisma is 2,5 m lank, 2 m breed en 1 m hoog, soos getoon. Vind die kapasiteit in liter (1 m³ = 1 000 liter).', answer: '5000 liter', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5000 liter', '5000 l', '5 000 liter', '5 000'], explanation: 'V = l × b × h = 2,5 × 2 × 1 = 5 m³\nKapasiteit = 5 × 1 000 = 5 000 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">2 m</text></svg>' },

        // ── Blok 6: Toegepaste meerstap-woordprobleme ─────────────────────
        { difficulty: 'Hard', question: 'ʼn Skool wil ʼn reghoekige veld van 30 m by 20 m omhein met draad wat R14 per meter kos. Bereken die totale koste van die draad.', answer: 'R1400', checkMode: 'auto', correctAnswer: 'R1400', correctAnswers: ['R1400', '1400', 'R1 400', '1 400'], explanation: 'Omtrek = 2 × (30 + 20) = 2 × 50 = 100 m\nKoste = 100 × R14 = R1 400 ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 8 m by 3 m moet geverf word, behalwe vir ʼn reghoekige deur van 2 m by 1 m, soos getoon. Vind die oppervlakte wat geverf moet word.', answer: '22 m²', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 m²', '22m²'], explanation: 'Muuroppervlakte = 8 × 3 = 24 m²\nDeuroppervlakte = 2 × 1 = 2 m²\nOppervlakte om te verf = 24 − 2 = 22 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">3 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1 m</text></svg>' },
        { difficulty: 'Hard', question: 'Tumi sê ʼn reghoekige prisma 10 cm by 4 cm by 3 cm het ʼn groter volume as ʼn kubus met sye van 5 cm. Is hy korrek? Wys jou werk om te verduidelik.', answer: 'Nee — die prisma het ʼn volume van 10 × 4 × 3 = 120 cm³, terwyl die kubus ʼn volume van 5³ = 125 cm³ het. Die kubus het die groter volume, dus is Tumi verkeerd.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek, oppervlakte, oppervlakte van 3D-vorms en volume oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met hierdie metingsvaardighede — gaan enige gemiste vrae weer deur en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Omtrek van veelhoeke ──────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Reëlmatige tienhoek (10 sye) het sye van 5 cm elk, soos getoon. Vind die omtrek.', answer: '50 cm', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 cm', '50cm'], explanation: 'ʼn Reëlmatige tienhoek het 10 gelyke sye.\nO = 10 × 5 = 50 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,37 144.1,48.1 165.2,77.1 165.2,112.9 144.1,141.9 110,153 75.9,141.9 54.8,112.9 54.8,77.1 75.9,48.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="132.6" y="25.4" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="110" y="182" font-size="13" fill="#374151" text-anchor="middle">reëlmatige tienhoek</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige binneplaas is 21 m lank en 13 m breed, soos getoon. Bereken die omtrek.', answer: '68 m', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68 m', '68m'], explanation: 'O = 2(l + b) = 2(21 + 13) = 2(34) = 68 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="33" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">21 m</text><text x="19" y="87.5" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 87.5)">13 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vierhoek het sye van 10 cm, 14 cm, 8 cm en 12 cm, soos getoon. Vind die omtrek.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44', '44 cm', '44cm'], explanation: 'Tel al vier sye bymekaar: O = 10 + 14 + 8 + 12 = 44 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 35,55 160,30 180,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="21.5" y="56.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="83.5" y="41.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="194" y="84" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="102" y="164" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },

        // ── Blok 2: Oppervlakte van reghoeke, vierkante en driehoeke ───────
        { difficulty: 'Easy', question: 'ʼn Vierkante plekmat het sye van 18 cm, soos getoon. Vind die oppervlakte.', answer: '324 cm²', checkMode: 'auto', correctAnswer: '324', correctAnswers: ['324', '324 cm²', '324cm²'], explanation: 'O = l² = 18² = 324 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="35" width="110" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="23" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige deurpaneel is 23 cm lank en 7 cm breed, soos getoon. Vind die oppervlakte.', answer: '161 cm²', checkMode: 'auto', correctAnswer: '161', correctAnswers: ['161', '161 cm²', '161cm²'], explanation: 'O = l × b = 23 × 7 = 161 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">23 cm</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige banier het ʼn basis van 18 cm en ʼn hoogte van 15 cm, soos getoon. Vind die oppervlakte.', answer: '135 cm²', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 cm²', '135cm²'], explanation: 'O = ½ × b × h = 0,5 × 18 × 15 = 135 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige vloermat het ʼn oppervlakte van 210 cm². Die breedte is 14 cm. Vind die lengte, soos getoon.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 cm', '15cm'], explanation: 'O = l × b\n210 = l × 14\nl = 210 ÷ 14 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="140" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110.0" y="28" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="26" y="85.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 85.0)">14 cm</text><text x="110.0" y="70" font-size="12" fill="#374151" text-anchor="middle">Area = 210 cm²</text></svg>' },

        // ── Blok 3: Saamgestelde 2D-figuuroppervlakte ────────────────────
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin meet 22 m by 14 m, soos getoon. ʼn Reghoekige patio van 7 m by 5 m word in een hoek gebou. Vind die oppervlakte van die tuin wat nie deur die patio bedek word nie.', answer: '273 m²', checkMode: 'auto', correctAnswer: '273', correctAnswers: ['273', '273 m²', '273m²'], explanation: 'Tuinoppervlakte = 22 × 14 = 308 m²\nPatio-oppervlakte = 7 × 5 = 35 m²\nOorblywend = 308 − 35 = 273 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">14 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">7 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 18 m by 13 m, soos getoon, met ʼn reghoekige hoek van 8 m by 6 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '186 m²', checkMode: 'auto', correctAnswer: '186', correctAnswers: ['186', '186 m²', '186m²'], explanation: 'Buitenste reghoek = 18 × 13 = 234 m²\nOntbrekende hoek = 8 × 6 = 48 m²\nVloeroppervlakte = 234 − 48 = 186 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="121" y="82" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 m</text><text x="19" y="82.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">13 m</text><text x="145" y="98" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="145" y="114" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Huisvormige teken bestaan uit ʼn reghoek 20 cm breed en 10 cm hoog, met ʼn driehoekige dak bo-op met basis 20 cm en hoogte 7 cm, soos getoon. Vind die totale oppervlakte van die teken.', answer: '270 cm²', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270', '270 cm²', '270cm²'], explanation: 'Reghoekoppervlakte = 20 × 10 = 200 cm²\nDriehoekoppervlakte = ½ × 20 × 7 = 70 cm²\nTotaal = 200 + 70 = 270 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="20" x2="110" y2="75" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="124" y="47.5" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">7 cm</text><text x="110" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="19" y="112.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 19 112.5)">10 cm</text></svg>' },

        // ── Blok 4: Oppervlakte van prismas en kubusse ────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 10 cm, soos getoon. Vind die oppervlakte.', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600 cm²', '600cm²'], explanation: 'O = 6l² = 6 × 10² = 6 × 100 = 600 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">10 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 14 cm lank, 9 cm breed en 4 cm hoog, soos getoon. Vind die oppervlakte.', answer: '436 cm²', checkMode: 'auto', correctAnswer: '436', correctAnswers: ['436', '436 cm²', '436cm²'], explanation: 'O = 2(lb + lh + bh) = 2(126 + 56 + 36) = 2(218) = 436 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Kubus het ʼn oppervlakte van 150 cm². Vind die lengte van sy sye.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 cm', '5cm'], explanation: 'O = 6l²\n150 = 6l²\nl² = 25\nl = √25 = 5 cm ✓' },

        // ── Blok 5: Volume van prismas en kubusse ─────────────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 12 cm, soos getoon. Vind die volume.', answer: '1728 cm³', checkMode: 'auto', correctAnswer: '1728', correctAnswers: ['1728', '1728 cm³', '1728cm³'], explanation: 'V = l³ = 12³ = 1 728 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma is 15 cm lank, 7 cm breed en 2 cm hoog, soos getoon. Vind die volume.', answer: '210 cm³', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210 cm³', '210cm³'], explanation: 'V = l × b × h = 15 × 7 × 2 = 210 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het ʼn volume van 192 cm³. Die lengte is 8 cm en die breedte is 6 cm. Vind die hoogte, soos getoon.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 cm', '4cm'], explanation: 'V = l × b × h\n192 = 8 × 6 × h\n192 = 48 × h\nh = 4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">?</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text><text x="95" y="47" font-size="11" fill="#374151" text-anchor="middle">V = 192 cm³</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertenk in die vorm van ʼn reghoekige prisma is 3 m lank, 1,5 m breed en 1 m hoog, soos getoon. Vind die kapasiteit in liter (1 m³ = 1 000 liter).', answer: '4500 liter', checkMode: 'auto', correctAnswer: '4500', correctAnswers: ['4500', '4500 liter', '4500 l', '4 500 liter', '4 500'], explanation: 'V = l × b × h = 3 × 1,5 × 1 = 4,5 m³\nKapasiteit = 4,5 × 1 000 = 4 500 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">1 m</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">1.5 m</text></svg>' },

        // ── Blok 6: Toegepaste meerstap-woordprobleme ─────────────────────
        { difficulty: 'Hard', question: 'ʼn Gemeenskap wil ʼn reghoekige speelgrond van 24 m by 16 m omhein met draad wat R20 per meter kos. Bereken die totale koste van die draad.', answer: 'R1600', checkMode: 'auto', correctAnswer: 'R1600', correctAnswers: ['R1600', '1600', 'R1 600', '1 600'], explanation: 'Omtrek = 2 × (24 + 16) = 2 × 40 = 80 m\nKoste = 80 × R20 = R1 600 ✓' },
        { difficulty: 'Hard', question: 'ʼn Muur van 10 m by 3,5 m moet geverf word, behalwe vir ʼn reghoekige venster van 2,5 m by 1,5 m, soos getoon. Vind die oppervlakte wat geverf moet word.', answer: '31,25 m²', checkMode: 'auto', correctAnswer: '31,25', correctAnswers: ['31,25', '31,25 m²', '31.25', '31.25 m²'], explanation: 'Muuroppervlakte = 10 × 3,5 = 35 m²\nVensteroppervlakte = 2,5 × 1,5 = 3,75 m²\nOppervlakte om te verf = 35 − 3,75 = 31,25 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="35" width="160" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="107" y="73" width="46" height="36" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="15" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 15 85)">3.5 m</text><text x="130" y="87" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text><text x="130" y="102" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">1.5 m</text></svg>' },
        { difficulty: 'Hard', question: 'Karabo sê ʼn kubus met sye van 6 cm het dubbel die volume van ʼn reghoekige prisma 9 cm by 4 cm by 3 cm. Is hy korrek? Wys jou werk om te verduidelik.', answer: 'Ja — die kubus het ʼn volume van 6³ = 216 cm³, terwyl die prisma ʼn volume van 9 × 4 × 3 = 108 cm³ het. Aangesien 216 = 2 × 108, het die kubus wel presies dubbel die volume van die prisma, dus is Karabo korrek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het omtrek, oppervlakte, oppervlakte van 3D-vorms en volume oor elke vaardigheid in hierdie stel bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met hierdie metingsvaardighede — gaan enige gemiste vrae weer deur en probeer nog ʼn stel.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
