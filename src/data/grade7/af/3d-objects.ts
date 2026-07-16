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
        'ʼn Reghoekige prisma met die lengte, breedte en hoogte geëtiketteer en kleurgekodeer, wat die 6 vlakke wys wat gebruik word om die oppervlakteformule op te bou.',

      diagramSvg:
        '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="140,150 140,70 170,45 170,125" fill="#e5e7eb" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="40,70 140,70 170,45 70,45" fill="#f1f5f9" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="40,150 140,150 140,70 40,70" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="70" y1="125" x2="170" y2="125" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="4,3"/>' +
        '<line x1="70" y1="125" x2="40" y2="150" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="4,3"/>' +
        '<line x1="70" y1="125" x2="70" y2="45" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="4,3"/>' +
        '<text x="90" y="168" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">lengte (l)</text>' +
        '<text x="200" y="141" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">breedte (b)</text>' +
        '<text x="14" y="110" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">hoogte (h)</text>' +
        '<text x="120" y="192" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">OA = 2(lb + lh + bh)</text>' +
        '</svg>',

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
        `<p style="margin-bottom:16px;">Volume is die <strong>hoeveelheid spasie wat ʼn 3D-voorwerp inneem</strong>, gemeet in kubieke eenhede (cm³, m³). Vir ʼn reghoekige prisma, ${gr('Volume')} = ${bl('lengte')} × ${bl('breedte')} × ${bl('hoogte')}. Vir ʼn silinder, ${gr('Volume')} = π × ${bl('radius')}² × ${bl('hoogte')}, waar π ongeveer 3,14 is.</p>` +

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
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gebruik π ≈ 3,14. Kwadreer die ${bl('radius')}, vermenigvuldig dan met π en ${bl('hoogte')}.</p>` +
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
          question: 'Vind die volume van ʼn silinder met radius 3 cm en hoogte 10 cm. Gebruik π = 3,14.',
          answer: `${or('Volume = 282,6 cm³')}`,
          steps: [
            `Skryf die formule neer: ${gr('V')} = π × ${bl('r')}² × ${bl('h')}`,
            `Vervang die waardes: π = 3,14, ${bl('r')} = ${bl('3')}, ${bl('h')} = ${bl('10')}<br>${gr('V')} = 3,14 × ${bl('3')}² × ${bl('10')}`,
            `Bereken die kwadraat: ${bl('3')}² = ${bl('9')}`,
            `Vermenigvuldig stap vir stap: 3,14 × ${bl('9')} = 28,26, dan 28,26 × ${bl('10')} = ${or('282,6')}`,
            `<strong>Antwoord:</strong> ${gr('V')} = ${or('282,6 cm³')}`,
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
          question: 'Vind die volume van ʼn silinder met radius 4 cm en hoogte 9 cm. Gebruik π = 3,14.',
          answer: '452,16 cm³',
          checkMode: 'auto',
          correctAnswer: '452,16',
          correctAnswers: ['452.16', '452.16cm³', '452.16 cm³', '452,16', '452,16cm³', '452,16 cm³'],
          explanation: 'V = π × r² × h\n= 3,14 × 4² × 9\n= 3,14 × 16 × 9\n= 3,14 × 144\n= 452,16 cm³',
        },

        // ── V8 Hard — silinder-tenk woordprobleem ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Watertenk is ʼn silinder met radius 2 m en hoogte 5 m. Vind sy volume tot die naaste heelgetal. Gebruik π = 3,14.',
          answer: '63 m³',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63m³', '63 m³'],
          explanation: 'V = π × r² × h\n= 3,14 × 2² × 5\n= 3,14 × 4 × 5\n= 3,14 × 20\n= 62,8 m³\nAfgerond tot die naaste heelgetal: 63 m³',
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
          question: 'Vind die volume van ʼn silinder met radius 5 cm en hoogte 12 cm. Gebruik π = 3,14.',
          answer: '942 cm³',
          checkMode: 'auto',
          correctAnswer: '942',
          correctAnswers: ['942', '942cm³', '942 cm³'],
          explanation: 'V = π × r² × h\n= 3,14 × 5² × 12\n= 3,14 × 25 × 12\n= 3,14 × 300\n= 942 cm³',
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
        'ʼn Reghoekige prisma en ʼn silinder langs mekaar, met hul dimensies in blou geëtiketteer en hul volumeformules in groen.',

      diagramSvg:
        '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="100,150 100,90 120,72 120,132" fill="#e5e7eb" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="30,90 100,90 120,72 50,72" fill="#f1f5f9" stroke="#0f1f3d" stroke-width="2"/>' +
        '<polygon points="30,150 100,150 100,90 30,90" fill="#ffffff" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="50" y1="132" x2="120" y2="132" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="4,3"/>' +
        '<line x1="50" y1="132" x2="30" y2="150" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="4,3"/>' +
        '<line x1="50" y1="132" x2="50" y2="72" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="4,3"/>' +
        '<text x="65" y="164" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">l</text>' +
        '<text x="133" y="145" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">b</text>' +
        '<text x="15" y="122" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">h</text>' +
        '<text x="65" y="182" font-size="11.5" font-weight="700" fill="#16a34a" text-anchor="middle">V = l × b × h</text>' +
        '<ellipse cx="220" cy="80" rx="35" ry="12" fill="#f1f5f9" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="185" y1="80" x2="185" y2="150" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="255" y1="80" x2="255" y2="150" stroke="#0f1f3d" stroke-width="2"/>' +
        '<path d="M 185,150 A 35,12 0 0 0 255,150" fill="none" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="220" y1="80" x2="255" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>' +
        '<circle cx="220" cy="80" r="2.5" fill="#2563eb"/>' +
        '<text x="237" y="74" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">r</text>' +
        '<text x="167" y="118" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">h</text>' +
        '<text x="220" y="182" font-size="11.5" font-weight="700" fill="#16a34a" text-anchor="middle">V = π × r² × h</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die volume van ʼn reghoekige prisma en ʼn silinder te bereken deur die formules met kleurgekodeerde stappe te gebruik" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 Benoem/klassifiseer volgens basis | 4-7 Tel V/H/R van benoemde voorwerpe |
    // 8-11 Euler se formule | 12-15 Nette (12,14 diagram-gemerk) |
    // 16-18 Deursnitte van prismas | 19-20 Prisma vs piramide / multi-stap
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Voorwerp het twee identiese, parallelle sewehoekige (7-sydige) basisse wat deur 7 reghoekige vlakke verbind word. Wat word hierdie voorwerp genoem?', answer: 'sewehoekige prisma', checkMode: 'auto', correctAnswer: 'sewehoekigeprisma', correctAnswers: ['sewehoekigeprisma', 'sewehoekige prisma'], explanation: 'ʼn Voorwerp met twee identiese parallelle basisse en reghoekige sy-vlakke is ʼn prisma. Die basis het 7 sye, dus is dit ʼn sewehoekige prisma ✓' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het een agthoekige (8-sydige) basis en 8 driehoekige vlakke wat almal by ʼn enkele apeks ontmoet. Wat word hierdie voorwerp genoem?', answer: 'agthoekige piramide', checkMode: 'auto', correctAnswer: 'agthoekigepiramide', correctAnswers: ['agthoekigepiramide', 'agthoekige piramide'], explanation: 'ʼn Voorwerp met een basis en driehoekige vlakke wat by ʼn enkele apeks ontmoet, is ʼn piramide. Die basis het 8 sye, dus is dit ʼn agthoekige piramide ✓' },
        { difficulty: 'Medium', question: 'Zanele klassifiseer twee voorwerpe vir ʼn projek. Voorwerp A het 2 parallelle vyfhoekige basisse en reghoekige sy-vlakke. Voorwerp B het 1 vyfhoekige basis en driehoekige sy-vlakke wat by ʼn apeks ontmoet. Noem elke voorwerp.', answer: 'Voorwerp A: vyfhoekige prisma. Voorwerp B: vyfhoekige piramide.', checkMode: 'auto', correctAnswer: 'vyfhoekigeprismavyfhoekigepiramide', correctAnswers: ['vyfhoekigeprismavyfhoekigepiramide', 'prismapiramide', 'vyfhoekige prisma, vyfhoekige piramide'], explanation: 'Twee parallelle identiese basisse + reghoekige sy-vlakke = prisma, benoem volgens sy basis (vyfhoek) → vyfhoekige prisma.\nEen basis + driehoekige sy-vlakke wat by ʼn apeks ontmoet = piramide, benoem volgens sy basis (vyfhoek) → vyfhoekige piramide ✓' },

        // Blok B: tel V/H/R van benoemde voorwerpe (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn heksagonale prisma?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Heksagonale prisma het ʼn basis met 6 sye.\nVlakke = basissye + 2 = 6 + 2 = 8 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vyfhoekige piramide?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Vyfhoekige piramide het ʼn basis met 5 sye.\nHoekpunte = basissye + 1 = 5 + 1 = 6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Geskenkboksie is in die vorm van ʼn driehoekige prisma. Hoeveel rande het dit?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nRande = basissye × 3 = 3 × 3 = 9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn vierkantige piramide het 6 vlakke, "want ʼn vierkant het 4 sye plus ʼn bo- en onderkant." Is die leerder korrek? Gee die werklike aantal vlakke.', answer: 'Nee, die leerder is verkeerd. ʼn Vierkantige piramide het slegs 5 vlakke: 1 vierkantige basis en 4 driehoekige sy-vlakke. Daar is geen "bokant" nie — die driehoeke ontmoet direk by die apeks, dus is daar nie ʼn tweede basis soos by ʼn prisma nie.', checkMode: 'self' },

        // Blok C: Euler se formule (8-11)
        { difficulty: 'Medium', question: 'Toets Euler se formule (V − R + H = 2) vir ʼn agthoekige prisma. Gee V, R en H.', answer: 'V = 10, R = 24, H = 16. V − R + H = 10 − 24 + 16 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Heksagonale piramide het V = 7 en H = 7. Gebruik Euler se formule om R te vind.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'V − R + H = 2\n7 − R + 7 = 2\n14 − R = 2\nR = 12 ✓\nToets: ʼn heksagoon-basis het 6 sye, dus R = 6 × 2 = 12 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder sê ʼn negehoekige prisma het V = 11, R = 27, H = 16. Gebruik Euler se formule om dit te toets. Indien dit verkeerd is, gee die korrekte waarde van H.', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'H=18', 'h18'], explanation: 'ʼn Negehoekige prisma het ʼn basis met 9 sye.\nV = 9 + 2 = 11, R = 9 × 3 = 27, H = 9 × 2 = 18.\nDie leerder se syfers gee 11 − 27 + 16 = 0, nie 2 nie — verkeerd.\nH moet 18 wees, nie 16 nie.\nToets: 11 − 27 + 18 = 2 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tienhoekige piramide (10-sydige basis) word met Euler se formule getoets. Vind V, R en H, en wys die formule geld.', answer: 'V = 11, R = 20, H = 11. V − R + H = 11 − 20 + 11 = 2 ✓', checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 heksagone en 6 reghoeke wat soos gewys gerangskik is, waar die twee heksagone aan weerskante sit en die 6 reghoeke ʼn verbinde strook vorm wat hulle rand-aan-rand verbind. In watter voorwerp vou hierdie net?', answer: 'heksagonale prisma', checkMode: 'auto', correctAnswer: 'heksagonaleprisma', correctAnswers: ['heksagonaleprisma', 'heksagonale prisma'], explanation: 'Die net het 2 identiese heksagonale basisse en 6 reghoekige sy-vlakke, wat ooreenstem met ʼn heksagonale prisma (V = 6 + 2 = 8, bestaande uit 2 heksagone + 6 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="70" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="94" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="118" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="142" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="166" y="70" width="24" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="58" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="82" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="106" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="130" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><text x="154" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><text x="178" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">6</text><polygon points="46,95 34,83 12,83 0,95 12,107 34,107" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="23" y="99" font-size="10" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn sewehoekige piramide — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 8 vorms in totaal: 1 sewehoek (die basis) en 7 driehoeke (die sy-vlakke). Die sewehoek sit in die middel met een driehoek aan elk van sy 7 kante vas — wanneer dit gevou word, styg die driehoeke op en ontmoet hulle vrye hoekpunte by die apeks.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 vierkant en 4 driehoeke wat soos gewys gerangskik is, waar die vierkant in die middel sit en een driehoek aan elk van die vierkant se vier kante vas is. In watter voorwerp vou hierdie net?', answer: 'vierkantige piramide', checkMode: 'auto', correctAnswer: 'vierkantigepiramide', correctAnswers: ['vierkantigepiramide', 'vierkantige piramide'], explanation: 'Die net het 1 vierkantige basis met 4 driehoeke wat opstyg om by ʼn enkele apeks te ontmoet, wat ooreenstem met ʼn vierkantige piramide (V = 4 + 1 = 5) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="85" y="70" width="50" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="99" font-size="12" text-anchor="middle" fill="#0f1f3d">1</text><polygon points="85,70 135,70 110,35" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><polygon points="85,120 135,120 110,155" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="130" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><polygon points="85,70 85,120 50,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="76" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><polygon points="135,70 135,120 170,95" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="144" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn heksagonale prisma met 2 heksagone en 5 reghoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Heksagonale prisma het V = 6 + 2 = 8 vlakke: 2 heksagonale basisse en 6 reghoekige sy-vlakke. Die leerder se net het slegs 5 reghoeke in plaas van 6, dus is dit een reghoekige vlak kort en kan dit nie in ʼn geslote heksagonale prisma vou nie.', checkMode: 'self' },

        // Blok E: deursnitte van prismas (16-18)
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma word deur ʼn vlak gesny wat parallel aan sy reghoekige basis is, wat reguit dwarsdeur die prisma sny. Watter vorm het die deursnit?', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek'], explanation: 'ʼn Deursnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn reghoek is, is die deursnit ʼn reghoek ✓' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma wat op sy reghoekige sykant lê, word reguit afwaarts gesny, loodreg op sy driehoekige basis, heeltemal deur. Watter vorm het die deursnit?', answer: 'ʼn Reghoek — om loodreg op die driehoekige uiteindes te sny, sny reguit deur die reghoekige sy-vlakke, wat ʼn reghoekige deursnit gee (die wydte daarvan is gelyk aan die prisma se lengte en die hoogte hang af van waar die sny deur die driehoek gemaak word).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Heksagonale prisma word deur ʼn vlak gesny wat parallel aan sy heksagonale basis is. Watter vorm sal die deursnit hê, en waarom?', answer: 'heksagoon', checkMode: 'auto', correctAnswer: 'heksagoon', correctAnswers: ['heksagoon', 'ʼn heksagoon'], explanation: 'Om ʼn prisma parallel aan sy basis te sny, gee altyd ʼn deursnit identies in vorm aan daardie basis, want die prisma het dieselfde deursnitvorm die hele lengte deur. Aangesien die basis ʼn heksagoon is, is die deursnit ʼn heksagoon ✓' },

        // Blok F: prisma vs piramide / multi-stap redenering (19-20)
        { difficulty: 'Hard', question: 'ʼn Sewehoekige prisma en ʼn sewehoekige piramide het albei ʼn basis met 7 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Sewehoekige prisma: V = 9, R = 21, H = 14. Sewehoekige piramide: V = 8, R = 14, H = 8. Die prisma het in elke kategorie meer vlakke, rande en hoekpunte, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide net een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte maak die prisma se waardes groter.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Uitstalstaander-ontwerper vergelyk ʼn agthoekige prisma en ʼn agthoekige piramide, albei met ʼn basis van 8 sye. Die staander met minder rande sal minder afwerkingsmateriaal gebruik. Vind die aantal rande vir elke voorwerp, en gee aan watter een minder afwerkingsmateriaal benodig.', answer: 'agthoekige piramide, 16 rande', checkMode: 'auto', correctAnswer: 'agthoekigepiramide16', correctAnswers: ['agthoekigepiramide16', 'agthoekigepiramide', 'piramide16'], explanation: 'Agthoekige prisma: R = basissye × 3 = 8 × 3 = 24.\nAgthoekige piramide: R = basissye × 2 = 8 × 2 = 16.\n16 < 24, dus benodig die agthoekige piramide minder afwerkingsmateriaal — 16 rande ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering van 3D-voorwerpe, Euler se formule, nette en deursnitte onder die knie.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die afdelings hierbo weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiout, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Voorwerp het twee identiese, parallelle negehoekige (9-sydige) basisse wat deur 9 reghoekige vlakke verbind word. Wat word hierdie voorwerp genoem?', answer: 'negehoekige prisma', checkMode: 'auto', correctAnswer: 'negehoekigeprisma', correctAnswers: ['negehoekigeprisma', 'negehoekige prisma'], explanation: 'ʼn Voorwerp met twee identiese parallelle basisse en reghoekige sy-vlakke is ʼn prisma. Die basis het 9 sye, dus is dit ʼn negehoekige prisma ✓' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het een sewehoekige (7-sydige) basis en 7 driehoekige vlakke wat almal by ʼn enkele apeks ontmoet. Wat word hierdie voorwerp genoem?', answer: 'sewehoekige piramide', checkMode: 'auto', correctAnswer: 'sewehoekigepiramide', correctAnswers: ['sewehoekigepiramide', 'sewehoekige piramide'], explanation: 'ʼn Voorwerp met een basis en driehoekige vlakke wat by ʼn enkele apeks ontmoet, is ʼn piramide. Die basis het 7 sye, dus is dit ʼn sewehoekige piramide ✓' },
        { difficulty: 'Medium', question: 'Kabelo klassifiseer twee voorwerpe vir ʼn uitstalling. Voorwerp A het 2 parallelle agthoekige basisse en reghoekige sy-vlakke. Voorwerp B het 1 agthoekige basis en driehoekige sy-vlakke wat by ʼn apeks ontmoet. Noem elke voorwerp.', answer: 'Voorwerp A: agthoekige prisma. Voorwerp B: agthoekige piramide.', checkMode: 'auto', correctAnswer: 'agthoekigeprismaagthoekigepiramide', correctAnswers: ['agthoekigeprismaagthoekigepiramide', 'prismapiramide', 'agthoekige prisma, agthoekige piramide'], explanation: 'Twee parallelle identiese basisse + reghoekige sy-vlakke = prisma, benoem volgens sy basis (agthoek) → agthoekige prisma.\nEen basis + driehoekige sy-vlakke wat by ʼn apeks ontmoet = piramide, benoem volgens sy basis (agthoek) → agthoekige piramide ✓' },

        // Blok B: tel V/H/R van benoemde voorwerpe (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn sewehoekige prisma?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'ʼn Sewehoekige prisma het ʼn basis met 7 sye.\nVlakke = basissye + 2 = 7 + 2 = 9 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn heksagonale piramide?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'ʼn Heksagonale piramide het ʼn basis met 6 sye.\nHoekpunte = basissye + 1 = 6 + 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Juweliersboksie is in die vorm van ʼn driehoekige prisma. Hoeveel hoekpunte het dit?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nHoekpunte = basissye × 2 = 3 × 2 = 6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn driehoekige prisma het 4 vlakke, "want ʼn driehoek het 3 sye plus ʼn onderkant." Is die leerder korrek? Gee die werklike aantal vlakke.', answer: 'Nee, die leerder is verkeerd. ʼn Driehoekige prisma het 5 vlakke: 2 driehoekige basisse (nie net 1 nie) en 3 reghoekige sy-vlakke. Die leerder het vergeet dat ʼn prisma twee identiese basisse het — ʼn bo- en ʼn onderdriehoek — nie net een nie.', checkMode: 'self' },

        // Blok C: Euler se formule (8-11)
        { difficulty: 'Medium', question: 'Toets Euler se formule (V − R + H = 2) vir ʼn negehoekige prisma. Gee V, R en H.', answer: 'V = 11, R = 27, H = 18. V − R + H = 11 − 27 + 18 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sewehoekige piramide het V = 8 en H = 8. Gebruik Euler se formule om R te vind.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'V − R + H = 2\n8 − R + 8 = 2\n16 − R = 2\nR = 14 ✓\nToets: ʼn sewehoek-basis het 7 sye, dus R = 7 × 2 = 14 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder sê ʼn tienhoekige prisma het V = 12, R = 30, H = 18. Gebruik Euler se formule om dit te toets. Indien dit verkeerd is, gee die korrekte waarde van H.', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'H=20', 'h20'], explanation: 'ʼn Tienhoekige prisma het ʼn basis met 10 sye.\nV = 10 + 2 = 12, R = 10 × 3 = 30, H = 10 × 2 = 20.\nDie leerder se syfers gee 12 − 30 + 18 = 0, nie 2 nie — verkeerd.\nH moet 20 wees, nie 18 nie.\nToets: 12 − 30 + 20 = 2 ✓' },
        { difficulty: 'Hard', question: 'ʼn Negehoekige piramide (9-sydige basis) word met Euler se formule getoets. Vind V, R en H, en wys die formule geld.', answer: 'V = 10, R = 18, H = 10. V − R + H = 10 − 18 + 10 = 2 ✓', checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 vyfhoeke en 5 reghoeke wat soos gewys gerangskik is, waar die twee vyfhoeke aan weerskante sit en die 5 reghoeke ʼn verbinde strook vorm wat hulle rand-aan-rand verbind. In watter voorwerp vou hierdie net?', answer: 'vyfhoekige prisma', checkMode: 'auto', correctAnswer: 'vyfhoekigeprisma', correctAnswers: ['vyfhoekigeprisma', 'vyfhoekige prisma'], explanation: 'Die net het 2 identiese vyfhoekige basisse en 5 reghoekige sy-vlakke, wat ooreenstem met ʼn vyfhoekige prisma (V = 5 + 2 = 7, bestaande uit 2 vyfhoeke + 5 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="56" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="84" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="112" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="140" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="70" width="28" height="50" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="70" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="98" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="126" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="154" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><text x="182" y="99" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><polygon points="56,70 56,120 26,113 14,95 26,77" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="30" y="99" font-size="10" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn agthoekige piramide — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 9 vorms in totaal: 1 agthoek (die basis) en 8 driehoeke (die sy-vlakke). Die agthoek sit in die middel met een driehoek aan elk van sy 8 kante vas — wanneer dit gevou word, styg die driehoeke op en ontmoet hulle vrye hoekpunte by die apeks.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 1 driehoek en 3 driehoeke (4 driehoeke in totaal, almal dieselfde grootte) wat soos gewys gerangskik is, waar een driehoek in die middel sit en die ander drie aan elk van sy drie kante vas is. In watter voorwerp vou hierdie net?', answer: 'driehoekige piramide', checkMode: 'auto', correctAnswer: 'driehoekigepiramide', correctAnswers: ['driehoekigepiramide', 'driehoekige piramide'], explanation: 'Die net het 4 driehoeke in totaal — 1 basisdriehoek met 3 sy-driehoeke wat opstyg om by ʼn enkele apeks te ontmoet, wat ooreenstem met ʼn driehoekige piramide (V = 3 + 1 = 4) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,60 75,121 145,121" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="103" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><polygon points="75,121 145,121 110,182" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="150" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><polygon points="110,60 75,121 41,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="76" y="90" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><polygon points="110,60 145,121 179,79" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="144" y="90" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn vyfhoekige prisma met 2 vyfhoeke en 4 reghoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Vyfhoekige prisma het V = 5 + 2 = 7 vlakke: 2 vyfhoekige basisse en 5 reghoekige sy-vlakke. Die leerder se net het slegs 4 reghoeke in plaas van 5, dus is dit een reghoekige vlak kort en kan dit nie in ʼn geslote vyfhoekige prisma vou nie.', checkMode: 'self' },

        // Blok E: deursnitte van prismas (16-18)
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma word deur ʼn vlak gesny wat parallel aan sy driehoekige basis is, wat reguit dwarsdeur die prisma sny. Watter vorm het die deursnit?', answer: 'driehoek', checkMode: 'auto', correctAnswer: 'driehoek', correctAnswers: ['driehoek', 'ʼn driehoek'], explanation: 'ʼn Deursnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn driehoek is, is die deursnit ʼn driehoek ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma (boks) word reguit afwaarts gesny, loodreg op sy reghoekige basis, heeltemal deur, parallel aan een van sy korter sy-vlakke. Watter vorm het die deursnit?', answer: 'ʼn Reghoek — om loodreg op die basis en parallel aan ʼn sy-vlak te sny, sny reguit deur die boks, wat ʼn reghoekige deursnit gee waarvan die afmetings die hoogte van die prisma en die wydte van die vlak waardeur gesny word, is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Vyfhoekige prisma word deur ʼn vlak gesny wat parallel aan sy vyfhoekige basis is. Watter vorm sal die deursnit hê, en waarom?', answer: 'vyfhoek', checkMode: 'auto', correctAnswer: 'vyfhoek', correctAnswers: ['vyfhoek', 'ʼn vyfhoek'], explanation: 'Om ʼn prisma parallel aan sy basis te sny, gee altyd ʼn deursnit identies in vorm aan daardie basis, want die prisma het dieselfde deursnitvorm die hele lengte deur. Aangesien die basis ʼn vyfhoek is, is die deursnit ʼn vyfhoek ✓' },

        // Blok F: prisma vs piramide / multi-stap redenering (19-20)
        { difficulty: 'Hard', question: 'ʼn Negehoekige prisma en ʼn negehoekige piramide het albei ʼn basis met 9 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Negehoekige prisma: V = 11, R = 27, H = 18. Negehoekige piramide: V = 10, R = 18, H = 10. Die prisma het in elke kategorie meer vlakke, rande en hoekpunte, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide net een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte maak die prisma se waardes groter.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Verpakkingsontwerper vergelyk ʼn sewehoekige prisma en ʼn sewehoekige piramide, albei met ʼn basis van 7 sye. Die verpakking met minder hoekpunte sal minder versterkte hoeke benodig. Vind die aantal hoekpunte vir elke voorwerp, en gee aan watter een minder versterkte hoeke benodig.', answer: 'sewehoekige piramide, 8 hoekpunte', checkMode: 'auto', correctAnswer: 'sewehoekigepiramide8', correctAnswers: ['sewehoekigepiramide8', 'sewehoekigepiramide', 'piramide8'], explanation: 'Sewehoekige prisma: H = basissye × 2 = 7 × 2 = 14.\nSewehoekige piramide: H = basissye + 1 = 7 + 1 = 8.\n8 < 14, dus benodig die sewehoekige piramide minder versterkte hoeke — 8 hoekpunte ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue 3D-voorwerpe klassifiseer en werk met Euler se formule, nette en deursnitte.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die afdelings hierbo weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiout, meer werklike-wêreld kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A: benoem/klassifiseer (1-3)
        { difficulty: 'Easy', question: 'ʼn Voorwerp het twee identiese, parallelle tienhoekige (10-sydige) basisse wat deur 10 reghoekige vlakke verbind word. Wat word hierdie voorwerp genoem?', answer: 'tienhoekige prisma', checkMode: 'auto', correctAnswer: 'tienhoekigeprisma', correctAnswers: ['tienhoekigeprisma', 'tienhoekige prisma'], explanation: 'ʼn Voorwerp met twee identiese parallelle basisse en reghoekige sy-vlakke is ʼn prisma. Die basis het 10 sye, dus is dit ʼn tienhoekige prisma ✓' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het een negehoekige (9-sydige) basis en 9 driehoekige vlakke wat almal by ʼn enkele apeks ontmoet. Wat word hierdie voorwerp genoem?', answer: 'negehoekige piramide', checkMode: 'auto', correctAnswer: 'negehoekigepiramide', correctAnswers: ['negehoekigepiramide', 'negehoekige piramide'], explanation: 'ʼn Voorwerp met een basis en driehoekige vlakke wat by ʼn enkele apeks ontmoet, is ʼn piramide. Die basis het 9 sye, dus is dit ʼn negehoekige piramide ✓' },
        { difficulty: 'Medium', question: 'Amahle klassifiseer twee voorwerpe vir ʼn wetenskapsuitstalling. Voorwerp A het 2 parallelle heksagonale basisse en reghoekige sy-vlakke. Voorwerp B het 1 heksagonale basis en driehoekige sy-vlakke wat by ʼn apeks ontmoet. Noem elke voorwerp.', answer: 'Voorwerp A: heksagonale prisma. Voorwerp B: heksagonale piramide.', checkMode: 'auto', correctAnswer: 'heksagonaleprismaheksagonalepiramide', correctAnswers: ['heksagonaleprismaheksagonalepiramide', 'prismapiramide', 'heksagonale prisma, heksagonale piramide'], explanation: 'Twee parallelle identiese basisse + reghoekige sy-vlakke = prisma, benoem volgens sy basis (heksagoon) → heksagonale prisma.\nEen basis + driehoekige sy-vlakke wat by ʼn apeks ontmoet = piramide, benoem volgens sy basis (heksagoon) → heksagonale piramide ✓' },

        // Blok B: tel V/H/R van benoemde voorwerpe (4-7)
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn agthoekige prisma?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'ʼn Agthoekige prisma het ʼn basis met 8 sye.\nVlakke = basissye + 2 = 8 + 2 = 10 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sewehoekige piramide?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'ʼn Sewehoekige piramide het ʼn basis met 7 sye.\nHoekpunte = basissye + 1 = 7 + 1 = 8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kampeertent is in die vorm van ʼn driehoekige prisma. Hoeveel vlakke het dit?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5'], explanation: 'ʼn Driehoekige prisma het ʼn basis met 3 sye.\nVlakke = basissye + 2 = 3 + 2 = 5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn heksagonale piramide het 12 hoekpunte, "want ʼn heksagoon het 6 hoekpunte en die piramide verdubbel dit vir die sye." Is die leerder korrek? Gee die werklike aantal hoekpunte.', answer: 'Nee, die leerder is verkeerd. ʼn Heksagonale piramide het 7 hoekpunte: die 6 hoekpunte van die heksagonale basis plus 1 enkele apeks waar al die driehoekige vlakke ontmoet. Die apeks voeg net 1 hoekpunt by, nie ʼn verdubbeling van die basis se hoekpunte nie.', checkMode: 'self' },

        // Blok C: Euler se formule (8-11)
        { difficulty: 'Medium', question: 'Toets Euler se formule (V − R + H = 2) vir ʼn tienhoekige prisma. Gee V, R en H.', answer: 'V = 12, R = 30, H = 20. V − R + H = 12 − 30 + 20 = 2 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Agthoekige piramide het V = 9 en H = 9. Gebruik Euler se formule om R te vind.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'V − R + H = 2\n9 − R + 9 = 2\n18 − R = 2\nR = 16 ✓\nToets: ʼn agthoek-basis het 8 sye, dus R = 8 × 2 = 16 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Leerder sê ʼn sewehoekige prisma het V = 9, R = 21, H = 12. Gebruik Euler se formule om dit te toets. Indien dit verkeerd is, gee die korrekte waarde van H.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'H=14', 'h14'], explanation: 'ʼn Sewehoekige prisma het ʼn basis met 7 sye.\nV = 7 + 2 = 9, R = 7 × 3 = 21, H = 7 × 2 = 14.\nDie leerder se syfers gee 9 − 21 + 12 = 0, nie 2 nie — verkeerd.\nH moet 14 wees, nie 12 nie.\nToets: 9 − 21 + 14 = 2 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tienhoekige piramide (10-sydige basis) word getoets teenoor ʼn driehoekige piramide (3-sydige basis) met Euler se formule. Vind V, R en H vir albei, en wys die formule geld vir elkeen.', answer: 'Tienhoekige piramide: V = 11, R = 20, H = 11. V − R + H = 11 − 20 + 11 = 2 ✓. Driehoekige piramide: V = 4, R = 6, H = 4. V − R + H = 4 − 6 + 4 = 2 ✓. Euler se formule geld vir albei, alhoewel hulle werklike V-, R- en H-waardes baie verskil.', checkMode: 'self' },

        // Blok D: nette (12-15), 12 en 14 diagram-gemerk
        { difficulty: 'Medium', question: 'ʼn Net bestaan uit 2 agthoeke en 8 reghoeke wat soos gewys gerangskik is, waar die twee agthoeke aan weerskante sit en die 8 reghoeke ʼn verbinde strook vorm wat hulle rand-aan-rand verbind. In watter voorwerp vou hierdie net?', answer: 'agthoekige prisma', checkMode: 'auto', correctAnswer: 'agthoekigeprisma', correctAnswers: ['agthoekigeprisma', 'agthoekige prisma'], explanation: 'Die net het 2 identiese agthoekige basisse en 8 reghoekige sy-vlakke, wat ooreenstem met ʼn agthoekige prisma (V = 8 + 2 = 10, bestaande uit 2 agthoeke + 8 reghoeke) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="60" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="78" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="96" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="114" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="132" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="150" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="75" width="18" height="42" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="51" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">1</text><text x="69" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">2</text><text x="87" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">3</text><text x="105" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">4</text><text x="123" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">5</text><text x="141" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">6</text><text x="159" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">7</text><text x="177" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">8</text><polygon points="42,75 42,117 30,124 16,124 4,117 4,75 16,68 30,68" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="21" y="100" font-size="9" text-anchor="middle" fill="#0f1f3d">A</text></svg>' },
        { difficulty: 'Medium', question: 'Beskryf die net van ʼn negehoekige piramide — hoeveel vorms is daarin, watter vorms is dit, en hoe is hulle gerangskik?', answer: 'Die net het 10 vorms in totaal: 1 negehoek (die basis) en 9 driehoeke (die sy-vlakke). Die negehoek sit in die middel met een driehoek aan elk van sy 9 kante vas — wanneer dit gevou word, styg die driehoeke op en ontmoet hulle vrye hoekpunte by die apeks.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Net bestaan uit 6 identiese vierkante wat soos gewys in ʼn kruis- (of "T"-) patroon gerangskik is, met 4 vierkante in ʼn vertikale kolom en 1 ekstra vierkant aan elke kant van die tweede vierkant van bo af vas. In watter voorwerp vou hierdie net?', answer: 'kubus', checkMode: 'auto', correctAnswer: 'kubus', correctAnswers: ['kubus', 'ʼn kubus'], explanation: 'Die net het 6 identiese vierkante in ʼn kruis gerangskik, wat ooreenstem met ʼn kubus — ʼn spesiale reghoekige prisma waar al 6 vlakke gelyke vierkante is (V = 4 + 2 = 6) ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="76" y="8" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="76" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><rect x="76" y="110" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="93" y="29" font-size="11" text-anchor="middle" fill="#0f1f3d">1</text><text x="93" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">2</text><text x="93" y="97" font-size="11" text-anchor="middle" fill="#0f1f3d">3</text><text x="93" y="131" font-size="11" text-anchor="middle" fill="#0f1f3d">4</text><rect x="42" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="59" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">5</text><rect x="110" y="42" width="34" height="34" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><text x="127" y="63" font-size="11" text-anchor="middle" fill="#0f1f3d">6</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Leerder teken ʼn net vir ʼn vierkantige piramide met 1 vierkant en 3 driehoeke. Is hierdie net geldig? Indien nie, verduidelik die fout.', answer: 'Nee, die net is ongeldig. ʼn Vierkantige piramide het V = 4 + 1 = 5 vlakke: 1 vierkantige basis en 4 driehoekige sy-vlakke. Die leerder se net het slegs 3 driehoeke in plaas van 4, dus het een kant van die vierkant geen driehoek vas nie en kan die net nie in ʼn geslote vierkantige piramide vou nie.', checkMode: 'self' },

        // Blok E: deursnitte van prismas (16-18)
        { difficulty: 'Hard', question: 'ʼn Heksagonale prisma word deur ʼn vlak gesny wat parallel aan sy heksagonale basis is, wat reguit dwarsdeur die prisma sny. Watter vorm het die deursnit?', answer: 'heksagoon', checkMode: 'auto', correctAnswer: 'heksagoon', correctAnswers: ['heksagoon', 'ʼn heksagoon'], explanation: 'ʼn Deursnit parallel aan die basis van ʼn prisma is altyd identies in vorm aan die basis. Aangesien die basis ʼn heksagoon is, is die deursnit ʼn heksagoon ✓' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma wat regop op ʼn driehoekige basis staan, word reguit dwarsoor gesny, parallel aan die grond, halfpad op. Watter vorm het die deursnit, en verander die grootte daarvan na gelang van die hoogte van die sny?', answer: 'Die deursnit is ʼn driehoek, identies in vorm en grootte aan die driehoekige basis, ongeag waar langs die hoogte die sny gemaak word — ʼn prisma het dieselfde deursnitvorm en -grootte die hele lengte deur, dus verander die hoogte van die sny nie die driehoek se grootte nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma word deur ʼn vlak gesny wat parallel aan sy reghoekige basis is. Watter vorm sal die deursnit hê, en waarom?', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek'], explanation: 'Om ʼn prisma parallel aan sy basis te sny, gee altyd ʼn deursnit identies in vorm aan daardie basis, want die prisma het dieselfde deursnitvorm die hele lengte deur. Aangesien die basis ʼn reghoek is, is die deursnit ʼn reghoek ✓' },

        // Blok F: prisma vs piramide / multi-stap redenering (19-20)
        { difficulty: 'Hard', question: 'ʼn Tienhoekige prisma en ʼn tienhoekige piramide het albei ʼn basis met 10 sye. Vergelyk hulle aantal vlakke, rande en hoekpunte, en verduidelik waarom die waardes verskil al is die basis dieselfde.', answer: 'Tienhoekige prisma: V = 12, R = 30, H = 20. Tienhoekige piramide: V = 11, R = 20, H = 11. Die prisma het in elke kategorie meer vlakke, rande en hoekpunte, want dit het twee identiese basisse wat deur reghoekige sy-vlakke verbind word, terwyl die piramide net een basis het met driehoekige sy-vlakke wat by ʼn enkele apeks ontmoet — die tweede basis en sy ekstra rande/hoekpunte maak die prisma se waardes groter.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Trofee-vervaardiger vergelyk ʼn vyfhoekige prisma en ʼn vyfhoekige piramide, albei met ʼn basis van 5 sye. Die trofee met minder rande is goedkoper om in metaal te giet. Vind die aantal rande vir elke voorwerp, en gee aan watter een goedkoper is om te giet.', answer: 'vyfhoekige piramide, 10 rande', checkMode: 'auto', correctAnswer: 'vyfhoekigepiramide10', correctAnswers: ['vyfhoekigepiramide10', 'vyfhoekigepiramide', 'piramide10'], explanation: 'Vyfhoekige prisma: R = basissye × 3 = 5 × 3 = 15.\nVyfhoekige piramide: R = basissye × 2 = 5 × 2 = 10.\n10 < 15, dus is die vyfhoekige piramide goedkoper om te giet — 10 rande ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering van 3D-voorwerpe, Euler se formule, nette en deursnitte volkome onder die knie.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die afdelings hierbo weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het 3D-voorwerpe onder die knie.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
