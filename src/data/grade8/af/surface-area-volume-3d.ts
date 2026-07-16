import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// triangle area   → blue    (#2563eb)   section 1
// length          → orange  (#ea580c)   section 1
// surface area    → green   (#16a34a)   section 1 / blue section 3
// unit conversion → orange  (#ea580c)   section 2
// calculations    → blue    (#2563eb)   section 2
// final answer    → green   (#16a34a)   section 2
// surface area    → blue    (#2563eb)   section 3
// volume          → green   (#16a34a)   section 3
// scale factor    → orange  (#ea580c)   section 3
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Oppervlakte en Volume van 3D-voorwerpe',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA AND VOLUME OF TRIANGULAR PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangular-prism-surface-area-volume',
      title: 'Oppervlakte en Volume van Driehoekige Prismas',
      icon: '▲',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien oppervlakte- en volumeformules vir <strong>kubusse</strong> en <strong>reghoekige prismas</strong>, en brei dit uit na <strong>driehoekige prismas</strong>. ʼn Driehoekige prisma het twee identiese driehoekige vlakke en drie reghoekige vlakke. Vir ʼn driehoekige prisma geld: <strong>Volume = oppervlakte van driehoekige basis × lengte</strong> en <strong>Oppervlakte = (2 × driehoek-oppervlakte) + (omtrek van driehoek × lengte)</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('driehoek-oppervlakte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('lengte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Volume van ʼn driehoekige prisma</p>` +
        `<p style="margin:0;font-size:15px;color:#374151;">V = ${bl('oppervlakte van driehoekige basis')} × ${or('lengte')}</p>` +
        `<p style="margin:6px 0 0;font-size:13px;color:#6b7280;">${bl('Driehoek-oppervlakte')} = ½ × basis × hoogte van die driehoek</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Oppervlakte van ʼn driehoekige prisma</p>` +
        `<p style="margin:0;font-size:15px;color:#374151;">${gr('O')} = (2 × ${bl('driehoek-oppervlakte')}) + (omtrek van driehoek × ${or('lengte')})</p>` +
        `<p style="margin:6px 0 0;font-size:13px;color:#6b7280;">Die omtrek van die driehoek is die som van al drie sye.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hersiening: kubusse en reghoekige prismas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Kubus (sy = s)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">Volume = s³</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = 6 × s²</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">Reghoekige prisma (l × b × h)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">Volume = l × b × h</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">O = 2(lb + lh + bh)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Onthou die eenhede</p>` +
        `<p style="margin:0;color:#9a3412;">Volume is altyd in <strong>kubieke eenhede</strong> (cm³, m³). Oppervlakte is altyd in <strong>vierkante eenhede</strong> (cm², m²). Moenie die twee ooit meng nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 6 cm en hoogte 4 cm, en ʼn lengte van 10 cm. Vind die volume daarvan.',
          answer: `Volume = ${gr('120 cm³')}`,
          steps: [
            `Vind die ${bl('oppervlakte van die driehoekige basis')}: ${bl('Driehoek-oppervlakte')} = ½ × 6 × 4 = ${bl('12 cm²')}`,
            `Pas die volumeformule toe: V = ${bl('driehoek-oppervlakte')} × ${or('lengte')} = ${bl('12')} × ${or('10')} = ${gr('120 cm³')}`,
            `<strong>Antwoord:</strong> Die volume van die prisma is ${gr('120 cm³')} ✓`,
          ],
        },
        {
          question: 'Vind die oppervlakte van dieselfde prisma as die driehoek se drie sye 6 cm, 5 cm en 5 cm is.',
          answer: `${gr('O')} = ${gr('184 cm²')}`,
          steps: [
            `Die ${bl('driehoek-oppervlakte')} van Voorbeeld 1 is ${bl('12 cm²')}.`,
            `Vind die omtrek van die driehoek: 6 + 5 + 5 = 16 cm.`,
            `Pas die oppervlakteformule toe: ${gr('O')} = (2 × ${bl('12')}) + (16 × ${or('10')}) = ${bl('24')} + ${or('160')} = ${gr('184 cm²')}`,
            `<strong>Antwoord:</strong> Die oppervlakte is ${gr('184 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 8 cm, hoogte 5 cm, en lengte 12 cm. Vind die volume daarvan.',
          answer: '240 cm³',
          checkMode: 'auto',
          correctAnswer: '240',
          correctAnswers: ['240', '240cm³', '240 cm³'],
          explanation: 'Driehoek-oppervlakte = ½ × 8 × 5 = 20 cm².\nVolume = 20 × 12 = 240 cm³ ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn driehoekige prisma met driehoeksye 5 cm, 5 cm en 6 cm, lengte 10 cm, en driehoek-oppervlakte 12 cm².',
          answer: '184 cm²',
          checkMode: 'auto',
          correctAnswer: '184',
          correctAnswers: ['184', '184cm²', '184 cm²'],
          explanation: 'O = (2 × 12) + ((5 + 5 + 6) × 10) = 24 + 160 = 184 cm² ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken die volume van ʼn driehoekige prisma met basis 4 cm, hoogte 3 cm en lengte 8 cm, en kry 96 cm³. Gaan sy antwoord na.',
          answer: 'Driehoek-oppervlakte = ½ × 4 × 3 = 6 cm².\nVolume = 6 × 8 = 48 cm³.\nHy is verkeerd — die korrekte volume is 48 cm³, nie 96 cm³ nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die volume en oppervlakte van ʼn driehoekige prisma te vind deur die driehoekige basisoppervlakte en die lengte van die prisma te gebruik" />',

      diagramPlaceholder:
        'Diagram van ʼn driehoekige prisma wat die driehoekige basis, hoogte en lengte merk',

      diagramSvg:
        '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="50,70 110,70 80,5" fill="none" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="3,3"/>' +
        '<line x1="20" y1="90" x2="50" y2="70" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="3,3"/>' +
        '<line x1="80" y1="90" x2="110" y2="70" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="50" y1="25" x2="80" y2="5" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<polygon points="20,90 80,90 50,25" fill="#eff6ff" fill-opacity="0.6" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="50" y1="25" x2="50" y2="90" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="3,3"/>' +
        '<text x="50" y="108" font-size="11" font-weight="700" text-anchor="middle" fill="#2563eb">basis</text>' +
        '<text x="30" y="58" font-size="11" font-weight="700" fill="#2563eb">hoogte</text>' +
        '<text x="98" y="76" font-size="11" font-weight="700" fill="#ea580c">lengte</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING PROBLEMS INVOLVING SURFACE AREA, VOLUME AND CAPACITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surface-area-volume-capacity-si-units',
      title: 'Probleme Oplos rondom Oppervlakte, Volume en Kapasiteit, met SI-eenheidomskakelings',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike-lewe probleme op rondom <strong>oppervlakte, volume en kapasiteit</strong> (met of sonder ʼn sakrekenaar), en skakel om tussen SI-eenhede insluitend mm²↔cm²↔m²↔km², mm³↔cm³↔m³, en ml (cm³)↔l↔kl. Kapasiteit is die hoeveelheid wat ʼn houer kan hou, gemeet in milliliter, liter en kiloliter.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eenheidomskakeling')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('berekeninge')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI-eenheidomskakelings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Oppervlakte-eenhede</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 100')} mm² → cm² &nbsp;|&nbsp; ${or('÷ 100')} cm² → mm²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 10 000')} cm² → m² &nbsp;|&nbsp; ${or('÷ 10 000')} m² → cm²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('× 1 000 000')} m² → km² &nbsp;|&nbsp; ${or('÷ 1 000 000')} km² → m²</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Volume-eenhede</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('× 1 000')} mm³ → cm³ &nbsp;|&nbsp; ${or('÷ 1 000')} cm³ → mm³</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('× 1 000 000')} cm³ → m³ &nbsp;|&nbsp; ${or('÷ 1 000 000')} m³ → cm³</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:8px;">Kapasiteit-eenhede</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('1 cm³ = 1 ml')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0 0 4px;">${or('1 000 ml = 1 liter (l)')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('1 000 l = 1 kiloliter (kl)')} &nbsp;|&nbsp; ${or('1 m³ = 1 kl = 1 000 l')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die verband tussen volume en kapasiteit</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Houer met volume <strong>1 m³</strong> hou presies <strong>1 kiloliter (1 000 liter)</strong> vloeistof. Dit is die sleutelverband tussen volume en kapasiteit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 5 000 cm³ om na liter.',
          answer: `${gr('5 liter')}`,
          steps: [
            `Onthou die ${or('omskakeling')}: ${or('1 000 cm³ = 1 liter')}.`,
            `${bl('Bereken')}: 5 000 ÷ ${or('1 000')} = ${gr('5 liter')}`,
            `<strong>Antwoord:</strong> 5 000 cm³ = ${gr('5 liter')} ✓`,
          ],
        },
        {
          question: 'ʼn Reghoekige tenk is 2 m by 1,5 m by 1 m. Vind die volume daarvan in kubieke meter, en skakel dit dan om na kiloliter.',
          answer: `Volume = ${gr('3 m³')} = ${gr('3 kl')}`,
          steps: [
            `${bl('Bereken die volume')}: V = ${bl('2 × 1,5 × 1')} = ${bl('3 m³')}`,
            `Pas die ${or('omskakeling')} toe: ${or('1 m³ = 1 kl')}`,
            `${bl('3 m³')} = ${gr('3 kl')}`,
            `<strong>Antwoord:</strong> Die volume is ${gr('3 m³')} = ${gr('3 kl')} ✓`,
          ],
        },
        {
          question: "Sipho se watertenk is ʼn reghoekige prisma 1,2 m by 0,8 m by 1 m. Vind die kapasiteit daarvan in liter.",
          answer: `Kapasiteit = ${gr('960 liter')}`,
          steps: [
            `${bl('Bereken die volume')}: V = ${bl('1,2 × 0,8 × 1')} = ${bl('0,96 m³')}`,
            `Pas die ${or('omskakeling')} toe: ${or('1 m³ = 1 000 liter')}`,
            `${gr('Kapasiteit')} = ${bl('0,96')} × ${or('1 000')} = ${gr('960 liter')}`,
            `<strong>Antwoord:</strong> Sipho se tenk hou ${gr('960 liter')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 3 000 cm³ om na liter.',
          answer: '3 liter',
          checkMode: 'auto',
          correctAnswer: '3',
          correctAnswers: ['3', '3 liter', '3l', '3 l', '3 litres', '3 litre'],
          explanation: '1 000 cm³ = 1 liter.\n3 000 ÷ 1 000 = 3 liter ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige tenk is 1,5 m by 1 m by 0,8 m. Vind die volume daarvan in kubieke meter.',
          answer: '1,2 m³',
          checkMode: 'auto',
          correctAnswer: '1,2',
          correctAnswers: ['1.2', '1.2m³', '1.2 m³', '1,2', '1,2m³', '1,2 m³'],
          explanation: 'Volume = 1,5 × 1 × 0,8 = 1,2 m³ ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Skakel die tenk se volume in Vraag 5 om na kiloliter en liter.",
          answer: '1,2 m³ = 1,2 kl = 1 200 liter, aangesien 1 m³ = 1 kl = 1 000 liter.',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Lerato se watertenk is 1 m by 0,6 m by 0,5 m. Vind die kapasiteit daarvan in liter.",
          answer: '300 liter',
          checkMode: 'auto',
          correctAnswer: '300',
          correctAnswers: ['300', '300 liter', '300l', '300 l', '300 litres', '300 litre'],
          explanation: 'Volume = 1 × 0,6 × 0,5 = 0,3 m³.\nKapasiteit = 0,3 × 1 000 = 300 liter ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om werklike-lewe probleme met volume en kapasiteit op te los, met SI-eenheidomskakelings tussen cm³, m³, liter en kiloliter" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE INTERRELATIONSHIP BETWEEN SURFACE AREA AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interrelationship-surface-area-volume',
      title: 'Die Verband tussen Oppervlakte en Volume',
      icon: '⚖',
      explanation:
        `<p style="margin-bottom:16px;">Ons beskryf die verband tussen <strong>oppervlakte</strong> en <strong>volume</strong> van kubusse, reghoekige prismas en driehoekige prismas. Soos ʼn vorm se dimensies vergroot, <strong>groei volume vinniger as oppervlakte</strong> — omdat volume met die <em>derdemag</em> van dimensies verband hou terwyl oppervlakte met die <em>tweedemag</em> daarvan verband hou.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oppervlakte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skaalfaktor-reëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">${bl('Oppervlakte')}-skaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As al die dimensies met ${or('skaalfaktor k')} vermenigvuldig word, word die oppervlakte met <strong>${or('k')}²</strong> vermenigvuldig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">${gr('Volume')}-skaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As al die dimensies met ${or('skaalfaktor k')} vermenigvuldig word, word die volume met <strong>${or('k')}³</strong> vermenigvuldig.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom volume vinniger groei</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Oppervlakte')} skaleer volgens die kwadraat van die ${or('skaalfaktor')} (2D), terwyl ${gr('volume')} volgens die derdemag skaleer (3D). Vir enige ${or('k > 1')}, is k³ &gt; k² — dus groei ${gr('volume')} altyd proporsioneel meer as ${bl('oppervlakte')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kubus het sye van 2 cm. Verdubbel die sye na 4 cm. Vergelyk hoe die oppervlakte en volume verander.',
          answer: `${bl('O')} het 4× vergroot (${or('2²')}), ${gr('Volume')} het 8× vergroot (${or('2³')})`,
          steps: [
            `<strong>Oorspronklike kubus (sy = 2 cm):</strong><br>${bl('O')} = 6 × 2² = 6 × 4 = ${bl('24 cm²')}<br>${gr('Volume')} = 2³ = ${gr('8 cm³')}`,
            `<strong>Nuwe kubus (sy = 4 cm), ${or('skaalfaktor k = 2')}:</strong><br>${bl('O')} = 6 × 4² = 6 × 16 = ${bl('96 cm²')}<br>${gr('Volume')} = 4³ = ${gr('64 cm³')}`,
            `<strong>Vergelyk:</strong> ${bl('O')} het met ${or('k²')} = ${or('2²')} = ${or('4')} keer vergroot (24 × 4 = 96 ✓). ${gr('Volume')} het met ${or('k³')} = ${or('2³')} = ${or('8')} keer vergroot (8 × 8 = 64 ✓).`,
            `<strong>Gevolgtrekking:</strong> Om al die sye te verdubbel, vermenigvuldig ${bl('oppervlakte')} met 4 maar vermenigvuldig ${gr('volume')} met 8 — ${gr('volume')} groei twee keer so vinnig as ${bl('oppervlakte')}.`,
          ],
        },
        {
          question: 'Lerato sê om al die dimensies van ʼn reghoekige prisma te verdubbel, vergroot volume altyd meer as oppervlakte. Is sy korrek?',
          answer: `Ja — ${gr('volume')} groei altyd proporsioneel meer as ${bl('oppervlakte')} vir enige ${or('skaalfaktor')} groter as 1`,
          steps: [
            `Wanneer al die dimensies met ${or('skaalfaktor k')} vermenigvuldig word, word ${bl('oppervlakte')} met ${or('k')}² vermenigvuldig.`,
            `${gr('Volume')} word met ${or('k')}³ vermenigvuldig.`,
            `Vir enige ${or('k > 1')}, is k³ &gt; k² — dus groei ${gr('volume')} altyd proporsioneel meer.`,
            `<strong>Gevolgtrekking:</strong> Ja, Lerato is korrek — ${bl('oppervlakte')} skaleer volgens die kwadraat van die ${or('skaalfaktor')}, terwyl ${gr('volume')} volgens die derdemag skaleer, dus groei ${gr('volume')} altyd proporsioneel meer vir enige ${or('skaalfaktor')} groter as 1.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo sê om ʼn kubus se sye te verdubbel, verdubbel die volume daarvan. Is hy korrek? Verduidelik met berekeninge.",
          answer: 'Nee — om die sye te verdubbel, vermenigvuldig die volume met 2³ = 8, nie 2 nie. ʼn Kubus van 2 cm het byvoorbeeld ʼn volume van 8 cm³, en ʼn kubus van 4 cm het ʼn volume van 64 cm³, wat 8 keer groter is.',
          checkMode: 'self',
        },

        // ── Q9 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Kubus het sye van 3 cm. Vind die oppervlakte en die volume daarvan.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Oppervlakte',
              correctAnswer: '54',
              correctAnswers: ['54', '54cm²', '54 cm²'],
              explanation: 'O = 6 × 3² = 6 × 9 = 54 cm² ✓',
            },
            {
              label: 'b) Volume',
              correctAnswer: '27',
              correctAnswers: ['27', '27cm³', '27 cm³'],
              explanation: 'Volume = 3³ = 27 cm³ ✓',
            },
          ],
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "ʼn Kubus se sye vergroot van 3 cm na 9 cm (skaalfaktor 3). Vergelyk hoe die oppervlakte en volume verander.",
          answer: 'Oppervlakte vergroot met 3² = 9 keer.\nVolume vergroot met 3³ = 27 keer.',
          checkMode: 'self',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 8 m³ om na liter.',
          answer: '8 000 liter',
          checkMode: 'auto',
          correctAnswer: '8000',
          correctAnswers: ['8000', '8 000', '8000 litres', '8 000 litres', '8000 liter', '8 000 liter'],
          explanation: '1 m³ = 1 000 liter.\n8 × 1 000 = 8 000 liter ✓',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn reghoekige prisma met dubbele lengte, breedte en hoogte sal ook presies dubbele oppervlakte hê. Is sy korrek? Verduidelik.',
          answer: 'Nee — oppervlakte vergroot volgens die skaalfaktor in die kwadraat, dus om al die dimensies te verdubbel vergroot die oppervlakte met 2² = 4 keer, nie 2 keer nie.',
          checkMode: 'self',
        },

        // ── Q13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoekige prisma het ʼn driehoek-oppervlakte van 15 cm² en lengte 9 cm. Vind die volume daarvan.',
          answer: '135 cm³',
          checkMode: 'auto',
          correctAnswer: '135',
          correctAnswers: ['135', '135cm³', '135 cm³'],
          explanation: 'Volume = driehoek-oppervlakte × lengte = 15 × 9 = 135 cm³ ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Skakel 2 500 000 cm³ om na m³ en dan na kiloliter.',
          answer: '2 500 000 cm³ ÷ 1 000 000 = 2,5 m³, wat gelyk is aan 2,5 kl aangesien 1 m³ = 1 kl.',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Kubus het ʼn volume van 125 cm³. Vind die lengte van elke sy, en vind dan die oppervlakte.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Lengte van elke sy',
              correctAnswer: '5',
              correctAnswers: ['5', '5cm', '5 cm'],
              explanation: 'Volume = s³ = 125. Dus s = ∛125 = 5 cm ✓',
            },
            {
              label: 'b) Oppervlakte',
              correctAnswer: '150',
              correctAnswers: ['150', '150cm²', '150 cm²'],
              explanation: 'O = 6 × s² = 6 × 5² = 6 × 25 = 150 cm² ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe oppervlakte volgens die kwadraat skaleer en volume volgens die derdemag van die skaalfaktor, met uitgewerkte vergelykings met kubusse en reghoekige prismas" />',

      diagramPlaceholder:
        'Diagram wat ʼn klein kubus en ʼn groot kubus vergelyk en wys hoe oppervlakte en volume teen verskillende tempos verander wanneer al die dimensies met dieselfde faktor vergroot word',

      diagramSvg:
        '<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="165" y="16" font-size="12" font-weight="700" text-anchor="middle" fill="#0f1f3d">Skaalfaktor k = 2</text>' +
        '<g transform="translate(70,75)">' +
        '<polygon points="-12,-12 12,-12 12,12 -12,12" fill="none" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="-4" y1="-20" x2="20" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="20" y1="-20" x2="20" y2="4" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="20" y1="4" x2="-4" y2="4" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<line x1="-4" y1="4" x2="-4" y2="-20" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<line x1="-12" y1="-12" x2="-4" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="12" y1="-12" x2="20" y2="-20" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="12" y1="12" x2="20" y2="4" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="-12" y1="12" x2="-4" y2="4" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,3"/>' +
        '<text x="0" y="36" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">2 cm</text>' +
        '<text x="0" y="49" font-size="9.5" text-anchor="middle"><tspan fill="#2563eb">O 24 cm²</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">V 8 cm³</tspan></text>' +
        '</g>' +
        '<text x="165" y="82" font-size="18" font-weight="700" text-anchor="middle" fill="#ea580c">×2</text>' +
        '<text x="165" y="112" font-size="10.5" text-anchor="middle"><tspan fill="#2563eb">Opp ×4</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">Volume ×8</tspan></text>' +
        '<g transform="translate(260,95)">' +
        '<polygon points="-24,-24 24,-24 24,24 -24,24" fill="none" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-8" y1="-40" x2="40" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="40" y1="-40" x2="40" y2="8" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="40" y1="8" x2="-8" y2="8" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-8" y1="8" x2="-8" y2="-40" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<line x1="-24" y1="-24" x2="-8" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="24" y1="-24" x2="40" y2="-40" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="24" y1="24" x2="40" y2="8" stroke="#0f1f3d" stroke-width="2.2"/>' +
        '<line x1="-24" y1="24" x2="-8" y2="8" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="3,3"/>' +
        '<text x="0" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="#0f1f3d">4 cm</text>' +
        '<text x="0" y="57" font-size="9.5" text-anchor="middle"><tspan fill="#2563eb">O 96 cm²</tspan><tspan fill="#6b7280"> · </tspan><tspan fill="#16a34a">V 64 cm³</tspan></text>' +
        '</g>' +
        '</svg>',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en volume van 3D-voorwerpe bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip. Gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer die vrae nog ʼn keer.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blokke: 0-2 Oppervlakte van reghoekige prismas/kubusse [diagram-bewus] |
    // 3-5 Volume van reghoekige prismas/kubusse [diagram-bewus] | 6-8
    // Oppervlakte van driehoekige prismas [diagram-bewus] | 9-11 Volume van
    // driehoekige prismas [diagram-bewus] | 12-15 Omgekeerde/ontbrekende-
    // dimensie vrae [diagram-bewus] | 16-19 Toegepaste/multi-stap werklike-
    // lewe woordprobleme [sommige diagram-bewus]
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Oppervlakte van reghoekige prismas/kubusse ──────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 6 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '216 cm²', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'O = 6 × s² = 6 × 6² = 6 × 36 = 216 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 8 cm, breedte 5 cm en hoogte 3 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '158 cm²', checkMode: 'auto', correctAnswer: '158', correctAnswers: ['158', '158cm²', '158 cm²'], explanation: 'O = 2(lb + lh + bh) = 2(8×5 + 8×3 + 5×3) = 2(40 + 24 + 15) = 2 × 79 = 158 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Opbergkubus het sye van 9 cm, soos getoon. Palesa sê die oppervlakte daarvan is 81 cm² omdat sy net een vlak bereken het en dit verkeerd vermenigvuldig het. Vind die korrekte oppervlakte en verduidelik haar fout.', answer: 'O = 6 × 9² = 6 × 81 = 486 cm². Palesa het vergeet om met 6 te vermenigvuldig vir al die vlakke — sy het net die oppervlakte van een vlak (9² = 81 cm²) bereken en daar opgehou, in plaas daarvan om al 6 identiese vlakke van die kubus in te sluit.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">9 cm</text></svg>' },

        // ── Blok 2: Volume van reghoekige prismas/kubusse ───────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 4 cm, soos getoon. Vind die volume daarvan.', answer: '64 cm³', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64cm³', '64 cm³'], explanation: 'Volume = s³ = 4³ = 64 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">4 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 9 cm, breedte 4 cm en hoogte 3 cm, soos getoon. Vind die volume daarvan.', answer: '108 cm³', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108cm³', '108 cm³'], explanation: 'Volume = l × b × h = 9 × 4 × 3 = 108 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige opbergkis het sye van 6 cm, soos getoon. Vind sowel die oppervlakte as die volume daarvan.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Oppervlakte', correctAnswer: '216', correctAnswers: ['216', '216cm²', '216 cm²'], explanation: 'O = 6 × 6² = 6 × 36 = 216 cm² ✓' }, { label: 'b) Volume', correctAnswer: '216', correctAnswers: ['216', '216cm³', '216 cm³'], explanation: 'Volume = 6³ = 216 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">6 cm</text></svg>' },

        // ── Blok 3: Oppervlakte van driehoekige prismas ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn regte-hoek driehoekige basis met die twee korter sye 6 cm en 8 cm (so die langste sy is 10 cm), en ʼn lengte van 15 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '408 cm²', checkMode: 'auto', correctAnswer: '408', correctAnswers: ['408', '408cm²', '408 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 6 × 8 = 24 cm² (die 6 cm en 8 cm sye ontmoet by die regte hoek).\nOmtrek van driehoek = 6 + 8 + 10 = 24 cm.\nO = (2 × 24) + (24 × 15) = 48 + 360 = 408 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">8 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">10 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">15 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Driehoekige prisma het ʼn gelykbenige driehoekige basis met basis 10 cm, hoogte 12 cm, en gelyke skuinssye van 13 cm elk, en ʼn lengte van 20 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '840 cm²', checkMode: 'auto', correctAnswer: '840', correctAnswers: ['840', '840cm²', '840 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 10 × 12 = 60 cm².\nOmtrek van driehoek = 13 + 13 + 10 = 36 cm.\nO = (2 × 60) + (36 × 20) = 120 + 720 = 840 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">12 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">13 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">20 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo bereken die oppervlakte van ʼn driehoekige prisma met driehoeksye 6 cm, 8 cm en 10 cm, driehoek-oppervlakte 24 cm², en lengte 15 cm. Hy skryf O = 24 + (24 × 15) = 384 cm². Vind die korrekte oppervlakte en verduidelik sy fout.', answer: 'Die korrekte oppervlakte is (2 × 24) + (24 × 15) = 48 + 360 = 408 cm². Thabo het vergeet om die driehoek-oppervlakte te verdubbel — ʼn prisma het TWEE driehoekige eindvlakke, nie een nie, dus benodig die formule 2 × driehoek-oppervlakte, nie net die driehoek-oppervlakte een keer nie.', checkMode: 'self' },

        // ── Blok 4: Volume van driehoekige prismas ───────────────────────────
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 9 cm en hoogte 4 cm, en ʼn lengte van 14 cm, soos getoon. Vind die volume daarvan.', answer: '252 cm³', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252cm³', '252 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 9 × 4 = 18 cm².\nVolume = 18 × 14 = 252 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">4 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">14 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 7 cm en hoogte 6 cm, en ʼn lengte van 11 cm, soos getoon. Vind die volume daarvan.', answer: '231 cm³', checkMode: 'auto', correctAnswer: '231', correctAnswers: ['231', '231cm³', '231 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 7 × 6 = 21 cm².\nVolume = 21 × 11 = 231 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">6 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Verduidelik, in woorde, die twee stappe wat nodig is om die volume van ʼn driehoekige prisma te vind, en pas dit dan toe op ʼn prisma met driehoekige basis 8 cm basis en 5 cm hoogte, en lengte 10 cm.', answer: 'Vind eers die oppervlakte van die driehoekige basis deur ½ × basis × hoogte te gebruik. Vermenigvuldig dan daardie driehoek-oppervlakte met die lengte van die prisma. Driehoek-oppervlakte = ½ × 8 × 5 = 20 cm². Volume = 20 × 10 = 200 cm³.', checkMode: 'self' },

        // ── Blok 5: Omgekeerde/ontbrekende-dimensie vrae ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Kubus het ʼn volume van 343 cm³. Vind die lengte van elke sy.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'Volume = s³ = 343. Dus s = ∛343 = 7 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma het ʼn volume van 180 cm³. Die lengte daarvan is 9 cm en die breedte is 5 cm. Vind die hoogte.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'Volume = l × b × h, dus 180 = 9 × 5 × h = 45 × h.\nh = 180 ÷ 45 = 4 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubus het ʼn totale oppervlakte van 294 cm². Vind die lengte van elke sy.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'O = 6s², dus 294 = 6s².\ns² = 294 ÷ 6 = 49.\ns = √49 = 7 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma het ʼn volume van 200 cm³ en ʼn driehoekige basisoppervlakte van 20 cm². Vind die lengte van die prisma.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = driehoek-oppervlakte × lengte, dus 200 = 20 × lengte.\nLengte = 200 ÷ 20 = 10 cm ✓' },

        // ── Blok 6: Toegepaste/multi-stap werklike-lewe woordprobleme ───────
        { difficulty: 'Medium', question: 'ʼn Geskenkboks in die vorm van ʼn reghoekige prisma meet 12 cm by 8 cm by 5 cm, soos getoon. Zanele wil dit heeltemal in geskenkpapier toedraai. Hoeveel papier het sy minstens nodig?', answer: '392 cm²', checkMode: 'auto', correctAnswer: '392', correctAnswers: ['392', '392cm²', '392 cm²'], explanation: 'Om die boks heeltemal toe te draai beteken om die totale oppervlakte daarvan te bedek.\nO = 2(lb + lh + bh) = 2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 2 × 196 = 392 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: "ʼn Vistenk in die vorm van ʼn reghoekige prisma meet 50 cm by 30 cm by 20 cm, soos getoon. Vind die tenk se kapasiteit in liter (1 000 cm³ = 1 liter).", answer: '30 liter', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 liter', '30l', '30 l', '30 litres', '30 litre'], explanation: 'Volume = 50 × 30 × 20 = 30 000 cm³.\nKapasiteit = 30 000 ÷ 1 000 = 30 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">30 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Seiltent het driehoekige endmure met basis 8 m en hoogte 3 m, en gelyke skuinssye van 5 m elk, met die tent 4 m lank, soos getoon. Vind die volume lug binne die tent en die totale oppervlakte seil wat nodig is (insluitend die twee driehoekige eindes, maar nie die grond nie).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume lug binne', correctAnswer: '48', correctAnswers: ['48', '48m³', '48 m³'], explanation: 'Driehoek-oppervlakte = ½ × 8 × 3 = 12 m².\nVolume = 12 × 4 = 48 m³ ✓' }, { label: 'b) Totale oppervlakte seil', correctAnswer: '96', correctAnswers: ['96', '96m²', '96 m²'], explanation: 'Omtrek van driehoek = 5 + 5 + 8 = 18 m.\nO = (2 × 12) + (18 × 4) = 24 + 72 = 96 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">3 m</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">4 m</text></svg>' },
        { difficulty: 'Hard', question: "ʼn Kubusvormige watertenk het sye van 6 m. ʼn Groter kubusvormige tenk het sye van 12 m — presies dubbel. Bongani sê die groter tenk sal presies dubbel soveel water hou. Is hy korrek? Vergelyk die twee tenks se volumes om dit na te gaan.", answer: 'Nee — die klein tenk (sy 6 m) het volume 6³ = 216 m³, en die groot tenk (sy 12 m) het volume 12³ = 1 728 m³. Dit is 1 728 ÷ 216 = 8 keer meer, nie dubbel nie. Om al die dimensies van ʼn kubus te verdubbel, vermenigvuldig die volume daarvan met 2³ = 8, dus is Bongani verkeerd.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte en volume van reghoekige en driehoekige prismas bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer die vrae nog ʼn keer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — dieselfde bloklegging as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Oppervlakte van reghoekige prismas/kubusse ──────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 7 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '294 cm²', checkMode: 'auto', correctAnswer: '294', correctAnswers: ['294', '294cm²', '294 cm²'], explanation: 'O = 6 × s² = 6 × 7² = 6 × 49 = 294 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">7 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 10 cm, breedte 6 cm en hoogte 4 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '248 cm²', checkMode: 'auto', correctAnswer: '248', correctAnswers: ['248', '248cm²', '248 cm²'], explanation: 'O = 2(lb + lh + bh) = 2(10×6 + 10×4 + 6×4) = 2(60 + 40 + 24) = 2 × 124 = 248 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Opbergkubus het sye van 11 cm, soos getoon. Amahle sê die oppervlakte daarvan is 121 cm² omdat sy net een vlak bereken het en daar opgehou het. Vind die korrekte oppervlakte en verduidelik haar fout.', answer: 'O = 6 × 11² = 6 × 121 = 726 cm². Amahle het vergeet om met 6 te vermenigvuldig vir al die vlakke — sy het net die oppervlakte van een vlak (11² = 121 cm²) bereken en daar opgehou, in plaas daarvan om al 6 identiese vlakke van die kubus in te sluit.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">11 cm</text></svg>' },

        // ── Blok 2: Volume van reghoekige prismas/kubusse ───────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 5 cm, soos getoon. Vind die volume daarvan.', answer: '125 cm³', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125cm³', '125 cm³'], explanation: 'Volume = s³ = 5³ = 125 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 12 cm, breedte 5 cm en hoogte 4 cm, soos getoon. Vind die volume daarvan.', answer: '240 cm³', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240', '240cm³', '240 cm³'], explanation: 'Volume = l × b × h = 12 × 5 × 4 = 240 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige opbergkis het sye van 10 cm, soos getoon. Vind sowel die oppervlakte as die volume daarvan.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Oppervlakte', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'O = 6 × 10² = 6 × 100 = 600 cm² ✓' }, { label: 'b) Volume', correctAnswer: '1000', correctAnswers: ['1000', '1 000', '1000cm³', '1000 cm³', '1 000 cm³'], explanation: 'Volume = 10³ = 1 000 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">10 cm</text></svg>' },

        // ── Blok 3: Oppervlakte van driehoekige prismas ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn regte-hoek driehoekige basis met die twee korter sye 9 cm en 12 cm (so die langste sy is 15 cm), en ʼn lengte van 18 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '756 cm²', checkMode: 'auto', correctAnswer: '756', correctAnswers: ['756', '756cm²', '756 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 9 × 12 = 54 cm² (die 9 cm en 12 cm sye ontmoet by die regte hoek).\nOmtrek van driehoek = 9 + 12 + 15 = 36 cm.\nO = (2 × 54) + (36 × 18) = 108 + 648 = 756 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">12 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">15 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">18 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Driehoekige prisma het ʼn gelykbenige driehoekige basis met basis 8 cm, hoogte 3 cm, en gelyke skuinssye van 5 cm elk, en ʼn lengte van 10 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '204 cm²', checkMode: 'auto', correctAnswer: '204', correctAnswers: ['204', '204cm²', '204 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 8 × 3 = 12 cm².\nOmtrek van driehoek = 5 + 5 + 8 = 18 cm.\nO = (2 × 12) + (18 × 10) = 24 + 180 = 204 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">3 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Lindiwe bereken die oppervlakte van ʼn driehoekige prisma met driehoeksye 9 cm, 12 cm en 15 cm, driehoek-oppervlakte 54 cm², en lengte 18 cm. Sy skryf O = 54 + (36 × 18) = 702 cm². Vind die korrekte oppervlakte en verduidelik haar fout.', answer: 'Die korrekte oppervlakte is (2 × 54) + (36 × 18) = 108 + 648 = 756 cm². Lindiwe het vergeet om die driehoek-oppervlakte te verdubbel — ʼn prisma het TWEE driehoekige eindvlakke, nie een nie, dus benodig die formule 2 × driehoek-oppervlakte, nie net die driehoek-oppervlakte een keer nie.', checkMode: 'self' },

        // ── Blok 4: Volume van driehoekige prismas ───────────────────────────
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 10 cm en hoogte 5 cm, en ʼn lengte van 16 cm, soos getoon. Vind die volume daarvan.', answer: '400 cm³', checkMode: 'auto', correctAnswer: '400', correctAnswers: ['400', '400cm³', '400 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 10 × 5 = 25 cm².\nVolume = 25 × 16 = 400 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">5 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">16 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 8 cm en hoogte 9 cm, en ʼn lengte van 12 cm, soos getoon. Vind die volume daarvan.', answer: '432 cm³', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', '432cm³', '432 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 8 × 9 = 36 cm².\nVolume = 36 × 12 = 432 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">9 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Verduidelik, in woorde, die twee stappe wat nodig is om die volume van ʼn driehoekige prisma te vind, en pas dit dan toe op ʼn prisma met driehoekige basis 6 cm basis en 4 cm hoogte, en lengte 9 cm.', answer: 'Vind eers die oppervlakte van die driehoekige basis deur ½ × basis × hoogte te gebruik. Vermenigvuldig dan daardie driehoek-oppervlakte met die lengte van die prisma. Driehoek-oppervlakte = ½ × 6 × 4 = 12 cm². Volume = 12 × 9 = 108 cm³.', checkMode: 'self' },

        // ── Blok 5: Omgekeerde/ontbrekende-dimensie vrae ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Kubus het ʼn volume van 512 cm³. Vind die lengte van elke sy.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'Volume = s³ = 512. Dus s = ∛512 = 8 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma het ʼn volume van 210 cm³. Die lengte daarvan is 7 cm en die breedte is 6 cm. Vind die hoogte.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'Volume = l × b × h, dus 210 = 7 × 6 × h = 42 × h.\nh = 210 ÷ 42 = 5 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubus het ʼn totale oppervlakte van 384 cm². Vind die lengte van elke sy.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'O = 6s², dus 384 = 6s².\ns² = 384 ÷ 6 = 64.\ns = √64 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma het ʼn volume van 270 cm³ en ʼn driehoekige basisoppervlakte van 27 cm². Vind die lengte van die prisma.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = driehoek-oppervlakte × lengte, dus 270 = 27 × lengte.\nLengte = 270 ÷ 27 = 10 cm ✓' },

        // ── Blok 6: Toegepaste/multi-stap werklike-lewe woordprobleme ───────
        { difficulty: 'Medium', question: 'ʼn Geskenkboks in die vorm van ʼn reghoekige prisma meet 15 cm by 10 cm by 6 cm, soos getoon. Sipho wil dit heeltemal in geskenkpapier toedraai. Hoeveel papier het hy minstens nodig?', answer: '600 cm²', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600cm²', '600 cm²'], explanation: 'Om die boks heeltemal toe te draai beteken om die totale oppervlakte daarvan te bedek.\nO = 2(lb + lh + bh) = 2(15×10 + 15×6 + 10×6) = 2(150 + 90 + 60) = 2 × 300 = 600 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Medium', question: "ʼn Vistenk in die vorm van ʼn reghoekige prisma meet 40 cm by 25 cm by 20 cm, soos getoon. Vind die tenk se kapasiteit in liter (1 000 cm³ = 1 liter).", answer: '20 liter', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 liter', '20l', '20 l', '20 litres', '20 litre'], explanation: 'Volume = 40 × 25 × 20 = 20 000 cm³.\nKapasiteit = 20 000 ÷ 1 000 = 20 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Seiltent het driehoekige endmure met basis 6 m en hoogte 4 m, en gelyke skuinssye van 5 m elk, met die tent 7 m lank, soos getoon. Vind die volume lug binne die tent en die totale oppervlakte seil wat nodig is (insluitend die twee driehoekige eindes, maar nie die grond nie).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume lug binne', correctAnswer: '84', correctAnswers: ['84', '84m³', '84 m³'], explanation: 'Driehoek-oppervlakte = ½ × 6 × 4 = 12 m².\nVolume = 12 × 7 = 84 m³ ✓' }, { label: 'b) Totale oppervlakte seil', correctAnswer: '136', correctAnswers: ['136', '136m²', '136 m²'], explanation: 'Omtrek van driehoek = 5 + 5 + 6 = 16 m.\nO = (2 × 12) + (16 × 7) = 24 + 112 = 136 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 m</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">4 m</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">5 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'Twee geskenkbokse het presies dieselfde volume van 1 000 cm³. Boks A is ʼn kubus met sye van 10 cm. Boks B is ʼn reghoekige prisma 20 cm by 5 cm by 10 cm. Zola sê albei bokse benodig dieselfde hoeveelheid geskenkpapier omdat hulle volumes gelyk is. Is sy korrek? Vergelyk hulle oppervlaktes om dit na te gaan.', answer: 'Nee — Boks A (die kubus) het oppervlakte 2(10×10 + 10×10 + 10×10) = 6 × 100 = 600 cm², terwyl Boks B oppervlakte 2(20×5 + 20×10 + 5×10) = 2(100 + 200 + 50) = 700 cm² het. Al het albei bokse dieselfde volume (1 000 cm³), benodig Boks B meer geskenkpapier omdat gelyke volumes nie gelyke oppervlaktes waarborg nie — die vorm maak saak.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue oppervlakte- en volumeformules op reghoekige en driehoekige prismas toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — dieselfde bloklegging, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Oppervlakte van reghoekige prismas/kubusse ──────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 5 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '150 cm²', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150cm²', '150 cm²'], explanation: 'O = 6 × s² = 6 × 5² = 6 × 25 = 150 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">5 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 12 cm, breedte 7 cm en hoogte 5 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '358 cm²', checkMode: 'auto', correctAnswer: '358', correctAnswers: ['358', '358cm²', '358 cm²'], explanation: 'O = 2(lb + lh + bh) = 2(12×7 + 12×5 + 7×5) = 2(84 + 60 + 35) = 2 × 179 = 358 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Opbergkubus het sye van 8 cm, soos getoon. Karabo sê die oppervlakte daarvan is 64 cm² omdat hy net een vlak bereken het en daar opgehou het. Vind die korrekte oppervlakte en verduidelik sy fout.', answer: 'O = 6 × 8² = 6 × 64 = 384 cm². Karabo het vergeet om met 6 te vermenigvuldig vir al die vlakke — hy het net die oppervlakte van een vlak (8² = 64 cm²) bereken en daar opgehou, in plaas daarvan om al 6 identiese vlakke van die kubus in te sluit.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">8 cm</text></svg>' },

        // ── Blok 2: Volume van reghoekige prismas/kubusse ───────────────────
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 3 cm, soos getoon. Vind die volume daarvan.', answer: '27 cm³', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27cm³', '27 cm³'], explanation: 'Volume = s³ = 3³ = 27 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">3 cm</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige houer het lengte 11 cm, breedte 6 cm en hoogte 2 cm, soos getoon. Vind die volume daarvan.', answer: '132 cm³', checkMode: 'auto', correctAnswer: '132', correctAnswers: ['132', '132cm³', '132 cm³'], explanation: 'Volume = l × b × h = 11 × 6 × 2 = 132 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige opbergkis het sye van 12 cm, soos getoon. Vind sowel die oppervlakte as die volume daarvan.', answer: '', checkMode: 'auto', parts: [ { label: 'a) Oppervlakte', correctAnswer: '864', correctAnswers: ['864', '864cm²', '864 cm²'], explanation: 'O = 6 × 12² = 6 × 144 = 864 cm² ✓' }, { label: 'b) Volume', correctAnswer: '1728', correctAnswers: ['1728', '1 728', '1728cm³', '1728 cm³', '1 728 cm³'], explanation: 'Volume = 12³ = 1 728 cm³ ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="35" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="45" y1="60" x2="70" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="60" x2="160" y2="35" stroke="#0f1f3d" stroke-width="1.6"/><line x1="135" y1="150" x2="160" y2="125" stroke="#0f1f3d" stroke-width="1.6"/><rect x="45" y="60" width="90" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="31" y="105" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 31 105)">12 cm</text></svg>' },

        // ── Blok 3: Oppervlakte van driehoekige prismas ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn regte-hoek driehoekige basis met die twee korter sye 5 cm en 12 cm (so die langste sy is 13 cm), en ʼn lengte van 20 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '660 cm²', checkMode: 'auto', correctAnswer: '660', correctAnswers: ['660', '660cm²', '660 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 5 × 12 = 30 cm² (die 5 cm en 12 cm sye ontmoet by die regte hoek).\nOmtrek van driehoek = 5 + 12 + 13 = 30 cm.\nO = (2 × 30) + (30 × 20) = 60 + 600 = 660 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">12 cm</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">13 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">20 cm</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Driehoekige prisma het ʼn gelykbenige driehoekige basis met basis 12 cm, hoogte 8 cm, en gelyke skuinssye van 10 cm elk, en ʼn lengte van 14 cm, soos getoon. Vind die totale oppervlakte daarvan.', answer: '544 cm²', checkMode: 'auto', correctAnswer: '544', correctAnswers: ['544', '544cm²', '544 cm²'], explanation: 'Driehoek-oppervlakte = ½ × 12 × 8 = 48 cm².\nOmtrek van driehoek = 10 + 10 + 12 = 32 cm.\nO = (2 × 48) + (32 × 14) = 96 + 448 = 544 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="102.5" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="94.5" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="115" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text><text x="50" y="97" font-size="11" fill="#16a34a" font-weight="700" text-anchor="end">10 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">14 cm</text></svg>' },
        { difficulty: 'Hard', question: 'Mpho bereken die oppervlakte van ʼn driehoekige prisma met driehoeksye 5 cm, 12 cm en 13 cm, driehoek-oppervlakte 30 cm², en lengte 20 cm. Hy skryf O = 30 + (30 × 20) = 630 cm². Vind die korrekte oppervlakte en verduidelik sy fout.', answer: 'Die korrekte oppervlakte is (2 × 30) + (30 × 20) = 60 + 600 = 660 cm². Mpho het vergeet om die driehoek-oppervlakte te verdubbel — ʼn prisma het TWEE driehoekige eindvlakke, nie een nie, dus benodig die formule 2 × driehoek-oppervlakte, nie net die driehoek-oppervlakte een keer nie.', checkMode: 'self' },

        // ── Blok 4: Volume van driehoekige prismas ───────────────────────────
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 14 cm en hoogte 6 cm, en ʼn lengte van 9 cm, soos getoon. Vind die volume daarvan.', answer: '378 cm³', checkMode: 'auto', correctAnswer: '378', correctAnswers: ['378', '378cm³', '378 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 14 × 6 = 42 cm².\nVolume = 42 × 9 = 378 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">6 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige prisma het ʼn driehoekige basis met basis 6 cm en hoogte 7 cm, en ʼn lengte van 13 cm, soos getoon. Vind die volume daarvan.', answer: '273 cm³', checkMode: 'auto', correctAnswer: '273', correctAnswers: ['273', '273cm³', '273 cm³'], explanation: 'Driehoek-oppervlakte = ½ × 6 × 7 = 21 cm².\nVolume = 21 × 13 = 273 cm³ ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 90,120 185,120" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="75" y1="50" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="75,50 55,150 150,150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="50" x2="75" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="75" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="61" y="105" font-size="12" fill="#dc2626" font-weight="700" text-anchor="end">7 cm</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">13 cm</text></svg>' },
        { difficulty: 'Medium', question: 'Verduidelik, in woorde, die twee stappe wat nodig is om die volume van ʼn driehoekige prisma te vind, en pas dit dan toe op ʼn prisma met driehoekige basis 12 cm basis en 5 cm hoogte, en lengte 6 cm.', answer: 'Vind eers die oppervlakte van die driehoekige basis deur ½ × basis × hoogte te gebruik. Vermenigvuldig dan daardie driehoek-oppervlakte met die lengte van die prisma. Driehoek-oppervlakte = ½ × 12 × 5 = 30 cm². Volume = 30 × 6 = 180 cm³.', checkMode: 'self' },

        // ── Blok 5: Omgekeerde/ontbrekende-dimensie vrae ─────────────────────
        { difficulty: 'Medium', question: 'ʼn Kubus het ʼn volume van 1 000 cm³. Vind die lengte van elke sy.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'Volume = s³ = 1 000. Dus s = ∛1 000 = 10 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige prisma het ʼn volume van 360 cm³. Die lengte daarvan is 10 cm en die breedte is 6 cm. Vind die hoogte.', answer: '6 cm', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'Volume = l × b × h, dus 360 = 10 × 6 × h = 60 × h.\nh = 360 ÷ 60 = 6 cm ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubus het ʼn totale oppervlakte van 150 cm². Vind die lengte van elke sy.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'O = 6s², dus 150 = 6s².\ns² = 150 ÷ 6 = 25.\ns = √25 = 5 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige prisma het ʼn volume van 175 cm³ en ʼn driehoekige basisoppervlakte van 25 cm². Vind die lengte van die prisma.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'Volume = driehoek-oppervlakte × lengte, dus 175 = 25 × lengte.\nLengte = 175 ÷ 25 = 7 cm ✓' },

        // ── Blok 6: Toegepaste/multi-stap werklike-lewe woordprobleme ───────
        { difficulty: 'Medium', question: 'ʼn Geskenkboks in die vorm van ʼn reghoekige prisma meet 14 cm by 9 cm by 6 cm, soos getoon. Naledi wil dit heeltemal in geskenkpapier toedraai. Hoeveel papier het sy minstens nodig?', answer: '528 cm²', checkMode: 'auto', correctAnswer: '528', correctAnswers: ['528', '528cm²', '528 cm²'], explanation: 'Om die boks heeltemal toe te draai beteken om die totale oppervlakte daarvan te bedek.\nO = 2(lb + lh + bh) = 2(14×9 + 14×6 + 9×6) = 2(126 + 84 + 54) = 2 × 264 = 528 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">6 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: "ʼn Vistenk in die vorm van ʼn reghoekige prisma meet 60 cm by 25 cm by 20 cm, soos getoon. Vind die tenk se kapasiteit in liter (1 000 cm³ = 1 liter).", answer: '30 liter', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 liter', '30l', '30 l', '30 litres', '30 litre'], explanation: 'Volume = 60 × 25 × 20 = 30 000 cm³.\nKapasiteit = 30 000 ÷ 1 000 = 30 liter ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60 cm</text><text x="26" y="97.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">20 cm</text><text x="173.5" y="38.5" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Watertrog het ʼn regte-hoek driehoekige deursnee met die twee korter sye 8 m en 15 m (so die langste sy is 17 m), en die trog is 25 m lank, soos getoon. Vind die volume water wat die trog kan hou en die totale oppervlakte metaal wat nodig is om dit te bou (insluitend die twee driehoekige eindes).', answer: '', checkMode: 'auto', parts: [ { label: 'a) Volume wat die trog kan hou', correctAnswer: '1500', correctAnswers: ['1500', '1 500', '1500m³', '1500 m³', '1 500 m³'], explanation: 'Driehoek-oppervlakte = ½ × 8 × 15 = 60 m² (die 8 m en 15 m sye ontmoet by die regte hoek).\nVolume = 60 × 25 = 1 500 m³ ✓' }, { label: 'b) Totale oppervlakte metaal', correctAnswer: '1120', correctAnswers: ['1120', '1 120', '1120m²', '1120 m²', '1 120 m²'], explanation: 'Omtrek van driehoek = 8 + 15 + 17 = 40 m.\nO = (2 × 60) + (40 × 25) = 120 + 1 000 = 1 120 m² ✓' } ], diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="90,120 185,120 90,50" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="55" y1="150" x2="90" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="150" x2="185" y2="120" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55" y1="80" x2="90" y2="50" stroke="#0f1f3d" stroke-width="1.6"/><polygon points="55,150 150,150 55,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="55" y="138" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="102.5" y="165" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="38" y="115" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 38 115)">15 m</text><text x="112" y="107" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">17 m</text><text x="168.5" y="133" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">25 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sapkarton is ʼn reghoekige prisma 10 cm by 10 cm by 10 cm, wat ʼn volume van 1 000 cm³ gee. ʼn Tweede karton is 20 cm by 5 cm by 10 cm, wat ook ʼn volume van 1 000 cm³ gee. Sibusiso sê omdat die volumes ooreenstem, moet die twee kartonne dieselfde hoeveelheid karton gebruik. Is hy korrek? Vergelyk hulle oppervlaktes om dit na te gaan.', answer: 'Nee — die eerste karton het oppervlakte 6 × 10² = 600 cm², terwyl die tweede oppervlakte 2(20×5 + 20×10 + 5×10) = 2(100 + 200 + 50) = 700 cm² het. Al hou albei kartonne dieselfde volume (1 000 cm³), benodig die tweede meer karton omdat gelyke volumes nie gelyke oppervlaktes waarborg nie — die vorm maak saak.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy kan oppervlakte- en volumeformules met selfvertroue op werklike-lewe probleme en redenering toepas.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
