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
        '<VideoPlaceholder label="Short video showing how to find the volume and surface area of a triangular prism using the triangular base area and the length of the prism" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a triangular prism labelling the triangular base, height, length and three rectangular faces with colour coded measurements" />',
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
          correctAnswer: '1.2',
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
        '<VideoPlaceholder label="Short video showing how to solve real-life problems involving volume and capacity with SI unit conversions between cm³, m³, litres and kilolitres" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the chain of SI unit conversions for area, volume and capacity with multiplication and division factors labelled in orange" />',
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
        '<VideoPlaceholder label="Short video showing how surface area scales by the square and volume scales by the cube of the scale factor, with worked comparisons using cubes and rectangular prisms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing a small cube and a large cube showing how surface area and volume change at different rates when all dimensions are scaled up by the same factor" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en volume van 3D-voorwerpe bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip. Gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer die vrae nog ʼn keer.' },
  ],
}
