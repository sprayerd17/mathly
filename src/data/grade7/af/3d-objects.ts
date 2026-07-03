import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (3D objects roles) ───────────────────────────────────────
// length        → blue   (#2563eb)
// width         → red    (#dc2626)
// height        → green  (#16a34a)
// surface area  → orange (#ea580c)
// formula       → green  (#16a34a)
// dimensions    → blue   (#2563eb)
// final answer  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '3D-voorwerpe',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area',
      title: 'Oppervlakte',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Oppervlakte is die <strong>totale area van al die vlakke</strong> van ʼn 3D-voorwerp bymekaargetel. Om die oppervlakte van ʼn reghoekige prisma te vind, bereken ons die area van elk van die 6 vlakke en tel dit bymekaar, of gebruik die formule ${or('OA')} = 2(${bl('l')}${re('b')} + ${bl('l')}${gr('h')} + ${re('b')}${gr('h')}). Vir ʼn kubus, ${or('OA')} = 6 × ${bl('sy')}².</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lengte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('breedte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoogte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Reghoekige Prisma</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${or('OA')} = 2(${bl('l')}${re('b')} + ${bl('l')}${gr('h')} + ${re('b')}${gr('h')})</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Tel die areas van al 6 vlakke bymekaar en vermenigvuldig met 2, want teenoorstaande vlakke is gelyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">Kubus</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${or('OA')} = 6 × ${bl('sy')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Al 6 vlakke is identiese vierkante, dus vermenigvuldig een vlak se area met 6.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom oppervlakte belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Oppervlakte wys ons hoeveel materiaal nodig is om ʼn 3D-voorwerp toe te draai of te bedek — byvoorbeeld, hoeveel karton nodig is om ʼn boks te maak, of hoeveel verf nodig is om ʼn muur te bedek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die oppervlakte van ʼn reghoekige prisma wat 8 cm lank, 5 cm breed en 4 cm hoog is.',
          answer: `${or('OA')} = ${or('184 cm²')}`,
          steps: [
            `Skryf die formule neer: ${or('OA')} = 2(${bl('l')}${re('b')} + ${bl('l')}${gr('h')} + ${re('b')}${gr('h')})`,
            `Vervang die waardes: ${bl('l')} = ${bl('8')}, ${re('b')} = ${re('5')}, ${gr('h')} = ${gr('4')}<br>${or('OA')} = 2(${bl('8')} × ${re('5')} + ${bl('8')} × ${gr('4')} + ${re('5')} × ${gr('4')})`,
            `Bereken elke term binne die hakies:<br>${bl('8')} × ${re('5')} = 40 &nbsp;|&nbsp; ${bl('8')} × ${gr('4')} = 32 &nbsp;|&nbsp; ${re('5')} × ${gr('4')} = 20`,
            `Tel die drie produkte bymekaar: 40 + 32 + 20 = 92`,
            `Vermenigvuldig met 2: ${or('OA')} = 2 × 92 = ${or('184 cm²')}`,
          ],
        },
        {
          question: 'Vind die oppervlakte van ʼn kubus met sye van 6 cm.',
          answer: `${or('OA')} = ${or('216 cm²')}`,
          steps: [
            `Skryf die formule neer: ${or('OA')} = 6 × ${bl('sy')}²`,
            `Vervang die waarde: ${bl('sy')} = ${bl('6')}<br>${or('OA')} = 6 × ${bl('6')}²`,
            `Bereken die kwadraat: ${bl('6')}² = ${bl('36')}`,
            `Vermenigvuldig met 6: ${or('OA')} = 6 × ${bl('36')} = ${or('216 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — kubus oppervlakte ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die oppervlakte van ʼn kubus met sye van 4 cm.',
          answer: '96 cm²',
          checkMode: 'auto',
          correctAnswer: '96',
          correctAnswers: ['96', '96cm²', '96 cm²'],
          explanation: 'OA = 6 × sy²\n= 6 × 4²\n= 6 × 16\n= 96 cm²',
        },

        // ── V2 Medium — reghoekige prisma oppervlakte ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn reghoekige prisma 6 cm by 4 cm by 3 cm.',
          answer: '108 cm²',
          checkMode: 'auto',
          correctAnswer: '108',
          correctAnswers: ['108', '108cm²', '108 cm²'],
          explanation: 'OA = 2(lb + lh + bh)\n= 2(6 × 4 + 6 × 3 + 4 × 3)\n= 2(24 + 18 + 12)\n= 2 × 54\n= 108 cm²',
        },

        // ── V3 Hard — oppervlakte foutkontrole ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken die oppervlakte van ʼn 5 cm-kubus en kry 125 cm². Kontroleer sy antwoord en verduidelik die fout.',
          answer: 'Hy het volume bereken (5³ = 125) in plaas van oppervlakte. Oppervlakte = 6 × 5² = 6 × 25 = 150 cm².',
          checkMode: 'self',
        },

        // ── V9 Medium — groter reghoekige prisma oppervlakte ─────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn reghoekige prisma 12 cm by 8 cm by 5 cm.',
          answer: '392 cm²',
          checkMode: 'auto',
          correctAnswer: '392',
          correctAnswers: ['392', '392cm²', '392 cm²'],
          explanation: 'OA = 2(lb + lh + bh)\n= 2(12 × 8 + 12 × 5 + 8 × 5)\n= 2(96 + 60 + 40)\n= 2 × 196\n= 392 cm²',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn reghoekige prisma met lengte in blou, breedte in rooi en hoogte in groen geëtiketteer, wat al 6 vlakke en die oppervlakte-formule wys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oppervlakte van ʼn reghoekige prisma en ʼn kubus te vind deur die formules met kleurgekodeerde dimensies te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume',
      title: 'Volume',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Volume is die <strong>hoeveelheid spasie wat ʼn 3D-voorwerp inneem</strong>, gemeet in kubieke eenhede (cm³, m³). Vir ʼn reghoekige prisma, ${gr('Volume')} = ${bl('lengte')} × ${bl('breedte')} × ${bl('hoogte')}. Vir ʼn silinder, ${gr('Volume')} = π × ${bl('radius')}² × ${bl('hoogte')}, waar π ongeveer 3.14 is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('formule')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Reghoekige Prisma</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${gr('V')} = ${bl('l')} × ${bl('b')} × ${bl('h')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Vermenigvuldig ${bl('lengte')} met ${bl('breedte')} met ${bl('hoogte')}. Die antwoord is in kubieke eenhede.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:8px;">Silinder</p>` +
        `<p style="font-size:15px;font-weight:700;color:#374151;margin-bottom:4px;">${gr('V')} = π × ${bl('r')}² × ${bl('h')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gebruik π ≈ 3.14. Kwadreer die ${bl('radius')}, vermenigvuldig dan met π en ${bl('hoogte')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kubieke eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Volume word altyd uitgedruk in <strong>kubieke eenhede</strong> (cm³, m³, mm³). ʼn Kubieke sentimeter (cm³) is die spasie wat deur ʼn kubus met sye van 1 cm ingeneem word. Wanneer al die dimensies in sentimeters is, sal die volume in cm³ wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die volume van ʼn reghoekige prisma wat 10 cm lank, 6 cm breed en 4 cm hoog is.',
          answer: `${or('Volume = 240 cm³')}`,
          steps: [
            `Skryf die formule neer: ${gr('V')} = ${bl('l')} × ${bl('b')} × ${bl('h')}`,
            `Vervang die waardes: ${bl('l')} = ${bl('10')}, ${bl('b')} = ${bl('6')}, ${bl('h')} = ${bl('4')}<br>${gr('V')} = ${bl('10')} × ${bl('6')} × ${bl('4')}`,
            `Vermenigvuldig stap vir stap: ${bl('10')} × ${bl('6')} = 60, dan 60 × ${bl('4')} = ${or('240')}`,
            `<strong>Antwoord:</strong> ${gr('V')} = ${or('240 cm³')}`,
          ],
        },
        {
          question: 'Vind die volume van ʼn silinder met radius 3 cm en hoogte 10 cm. Gebruik π = 3.14.',
          answer: `${or('Volume = 282.6 cm³')}`,
          steps: [
            `Skryf die formule neer: ${gr('V')} = π × ${bl('r')}² × ${bl('h')}`,
            `Vervang die waardes: π = 3.14, ${bl('r')} = ${bl('3')}, ${bl('h')} = ${bl('10')}<br>${gr('V')} = 3.14 × ${bl('3')}² × ${bl('10')}`,
            `Bereken die kwadraat: ${bl('3')}² = ${bl('9')}`,
            `Vermenigvuldig stap vir stap: 3.14 × ${bl('9')} = 28.26, dan 28.26 × ${bl('10')} = ${or('282.6')}`,
            `<strong>Antwoord:</strong> ${gr('V')} = ${or('282.6 cm³')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Maklik — reghoekige prisma volume ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volume van ʼn reghoekige prisma 5 cm by 4 cm by 3 cm.',
          answer: '60 cm³',
          checkMode: 'auto',
          correctAnswer: '60',
          correctAnswers: ['60', '60cm³', '60 cm³'],
          explanation: 'V = l × b × h\n= 5 × 4 × 3\n= 60 cm³',
        },

        // ── V5 Medium — kubus volume ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die volume van ʼn kubus met sye van 7 cm.',
          answer: '343 cm³',
          checkMode: 'auto',
          correctAnswer: '343',
          correctAnswers: ['343', '343cm³', '343 cm³'],
          explanation: 'V = sy³\n= 7³\n= 7 × 7 × 7\n= 343 cm³',
        },

        // ── V6 Hard — volumeverdubbeling wanopvatting ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om al die dimensies van ʼn reghoekige prisma te verdubbel, verdubbel sy volume. Is sy korrek? Verduidelik.',
          answer: 'Nee — om al drie dimensies te verdubbel, vermenigvuldig die volume met 2 × 2 × 2 = 8, nie net 2 nie.',
          checkMode: 'self',
        },

        // ── V7 Medium — silinder volume ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die volume van ʼn silinder met radius 4 cm en hoogte 9 cm. Gebruik π = 3.14.',
          answer: '452.16 cm³',
          checkMode: 'auto',
          correctAnswer: '452.16',
          correctAnswers: ['452.16', '452.16cm³', '452.16 cm³'],
          explanation: 'V = π × r² × h\n= 3.14 × 4² × 9\n= 3.14 × 16 × 9\n= 3.14 × 144\n= 452.16 cm³',
        },

        // ── V8 Hard — silinder-tenk woordprobleem ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Watertenk is ʼn silinder met radius 2 m en hoogte 5 m. Vind sy volume tot die naaste heelgetal. Gebruik π = 3.14.',
          answer: '63 m³',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63m³', '63 m³'],
          explanation: 'V = π × r² × h\n= 3.14 × 2² × 5\n= 3.14 × 4 × 5\n= 3.14 × 20\n= 62.8 m³\nAfgerond tot die naaste heelgetal: 63 m³',
        },

        // ── V10 Hard — inpakprobleem ────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo pak ʼn boks 20 cm by 15 cm by 10 cm met kleiner kubusse met sye van 5 cm. Hoeveel klein kubusse pas in die boks? Wat is die volume van die groot boks?',
          answer: 'Boksvolume = 20 × 15 × 10 = 3 000 cm³.\nKubusvolume = 5³ = 125 cm³.\nAantal kubusse = 3 000 ÷ 125 = 24.\na) 24 klein kubusse pas in. b) Volume van die groot boks = 3 000 cm³.',
          checkMode: 'self',
        },

        // ── V11 Medium — silinder volume ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die volume van ʼn silinder met radius 5 cm en hoogte 12 cm. Gebruik π = 3.14.',
          answer: '942 cm³',
          checkMode: 'auto',
          correctAnswer: '942',
          correctAnswers: ['942', '942cm³', '942 cm³'],
          explanation: 'V = π × r² × h\n= 3.14 × 5² × 12\n= 3.14 × 25 × 12\n= 3.14 × 300\n= 942 cm³',
        },

        // ── V12 Hard — dieselfde volume verskillende oppervlakte ─────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn kubus en ʼn reghoekige prisma met dieselfde volume het altyd dieselfde oppervlakte. Is sy korrek? Verduidelik.',
          answer: 'Nee — vir dieselfde volume kan verskillende dimensiekombinasies verskillende oppervlaktes gee. Oppervlakte hang af van die spesifieke vorm en dimensies, nie net die totale volume nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn reghoekige prisma en ʼn silinder langs mekaar wys met dimensies geëtiketteer in blou en volume-formules in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die volume van ʼn reghoekige prisma en ʼn silinder te bereken deur die formules met kleurgekodeerde stappe te gebruik" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het 3D-voorwerpe onder die knie.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
