import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (volume roles) ───────────────────────────────────────────
// length  → blue   (#2563eb)
// width   → red    (#dc2626)
// height  → green  (#16a34a)
// volume  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Volume',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — VOLUME OF RECTANGULAR PRISMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-rectangular-prisms',
      title: 'Volume van Reghoekige Prismas',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Volume is die hoeveelheid spasie wat ʼn 3D-voorwerp inneem, gemeet in <strong>kubieke eenhede</strong> soos cm³ of m³. Vir ʼn <strong>reghoekige prisma</strong> geld: Volume = lengte × breedte × hoogte. ʼn <strong>Kubus</strong> is ʼn spesiale reghoekige prisma waar al die sye gelyk is, dus Volume = sy × sy × sy.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('lengte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('breedte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoogte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('volume')}</span>` +
        `</div>` +

        // ── Formula: rectangular prism ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formule — Reghoekige Prisma</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin-bottom:6px;">${or('Volume')} = ${bl('lengte')} × ${re('breedte')} × ${gr('hoogte')}</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('V')} = ${bl('l')} × ${re('b')} × ${gr('h')}</p>` +
        `</div>` +

        // ── Formula: cube ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spesiale geval — Kubus</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.85em;font-weight:600;color:#6b7280;margin-bottom:8px;">Wanneer al die sye gelyk is (sy = s):</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin-bottom:6px;">${or('Volume')} = ${bl('sy')} × ${re('sy')} × ${gr('sy')}</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('V')} = s³</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Gebruik altyd kubieke eenhede</p>` +
        `<p style="margin:0;color:#7c2d12;">Volume word altyd gemeet in <strong>kubieke eenhede</strong>. As die metings in cm is, moet jou antwoord in <strong>cm³</strong> wees. As dit in m is, moet die antwoord in <strong>m³</strong> wees. Skryf nooit volume neer sonder sy eenheid nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Boks is 8 cm lank, 5 cm breed en 4 cm hoog. Bereken die volume.',
          answer: `${or('Volume')} = ${bl('8')} × ${re('5')} × ${gr('4')} = ${or('160 cm³')}`,
          steps: [
            `Skryf die formule neer: ${or('Volume')} = ${bl('lengte')} × ${re('breedte')} × ${gr('hoogte')}`,
            `Vervang die metings: ${or('V')} = ${bl('8')} × ${re('5')} × ${gr('4')}`,
            `Bereken stap vir stap: ${bl('8')} × ${re('5')} = 40, dan 40 × ${gr('4')} = ${or('160')}`,
            `<strong>Antwoord:</strong> ${or('Volume = 160 cm³')} ✓`,
          ],
        },
        {
          question: 'ʼn Kubus het sye van 6 cm. Bereken die volume.',
          answer: `${or('Volume')} = ${bl('6')} × ${re('6')} × ${gr('6')} = ${or('216 cm³')}`,
          steps: [
            `ʼn Kubus het al die sye gelyk, dus ${bl('lengte')} = ${re('breedte')} = ${gr('hoogte')} = 6 cm`,
            `Skryf die formule neer: ${or('Volume')} = ${bl('sy')} × ${re('sy')} × ${gr('sy')}`,
            `Vervang: ${or('V')} = ${bl('6')} × ${re('6')} × ${gr('6')}`,
            `Bereken: ${bl('6')} × ${re('6')} = 36, dan 36 × ${gr('6')} = ${or('216')}`,
            `<strong>Antwoord:</strong> ${or('Volume = 216 cm³')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — volume of a rectangular box ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Boks is 6 cm lank, 4 cm breed en 3 cm hoog. Bereken die volume.',
          answer: '72 cm³',
          checkMode: 'auto',
          correctAnswer: '72',
          explanation: 'Volume = lengte × breedte × hoogte\nV = 6 × 4 × 3\n6 × 4 = 24, dan 24 × 3 = 72\nAntwoord: 72 cm³ ✓',
        },

        // ── Q2 Easy — volume of a cube ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Kubus het sye van 5 cm. Bereken die volume.',
          answer: '125 cm³',
          checkMode: 'auto',
          correctAnswer: '125',
          explanation: 'ʼn Kubus het al die sye gelyk.\nVolume = sy × sy × sy\nV = 5 × 5 × 5 = 25 × 5 = 125\nAntwoord: 125 cm³ ✓',
        },

        // ── Q3 Medium — volume of a rectangular prism in metres ──────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige prisma is 10 m lank, 6 m breed en 2 m hoog. Bereken die volume.',
          answer: '120 m³',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Volume = lengte × breedte × hoogte\nV = 10 × 6 × 2\n10 × 6 = 60, dan 60 × 2 = 120\nAntwoord: 120 m³ ✓',
        },

        // ── Q4 Hard — identify and explain an error ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn kubus met sye van 4 cm het ʼn volume van 48 cm³. Is hy korrek? Verduidelik.',
          answer: 'Nee — Volume = 4 × 4 × 4 = 64 cm³, nie 48 cm³ nie. Hy het waarskynlik per ongeluk 4 × 4 × 3 vermenigvuldig.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining volume of rectangular prisms and cubes using the formula Volume = length x width x height with colour coded dimensions" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="3D diagram of a rectangular prism labelled with length blue width red and height green showing the volume formula and cubic unit annotation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING VOLUME IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-in-context',
      title: 'Volume in Konteks Bereken',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik volumeformules om <strong>werklike-lewe probleme</strong> op te los wat houers, bokse en berging behels. Kyk altyd na of al die metings in ${bl('dieselfde eenheid')} is voordat jy bereken. Volume-antwoorde moet altyd in <strong>kubieke eenhede</strong> geskryf word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dimensies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volumeformule')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('finale antwoord')}</span>` +
        `</div>` +

        // ── Steps for context problems ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om volumeprobleme in konteks op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer die dimensies')} — vind die lengte, breedte en hoogte (of sy vir ʼn kubus) uit die probleem. Maak seker hulle is almal in dieselfde eenheid.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf en pas die formule toe')} — skryf V = l × b × h en vervang die waardes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skryf die finale antwoord')} — sluit die korrekte kubieke eenheid in en beantwoord die vraag in konteks.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kyk eers na jou eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy vermenigvuldig, maak seker dat al drie ${bl('dimensies')} dieselfde eenheid gebruik. Indien nie, skakel eers om. ʼn Algemene fout is om cm en m in dieselfde berekening te meng.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Watertenk is 2 m lank, 1,5 m breed en 1 m hoog. Hoeveel water kan dit hou?',
          answer: `${or('Volume = 3 m³')}`,
          steps: [
            `${bl('Identifiseer die dimensies:')} lengte = ${bl('2 m')}, breedte = ${bl('1,5 m')}, hoogte = ${bl('1 m')}. Al die metings is in meter ✓`,
            `${gr('Skryf die formule neer:')} ${gr('V = l × b × h')}`,
            `Vervang: V = ${bl('2')} × ${bl('1,5')} × ${bl('1')}`,
            `Bereken: ${bl('2')} × ${bl('1,5')} = 3, dan 3 × ${bl('1')} = ${or('3')}`,
            `<strong>Antwoord:</strong> ${or('Die tenk kan 3 m³ water hou')} ✓`,
          ],
        },
        {
          question: 'Sipho pak ʼn boks wat 30 cm lank, 20 cm breed en 15 cm hoog is met kleiner kubusse van 5 cm sye. Hoeveel klein kubusse pas binne-in?',
          answer: `${or('72 klein kubusse')}`,
          steps: [
            `${gr('Vind die volume van die groot boks:')} V = ${bl('30')} × ${bl('20')} × ${bl('15')} = ${or('9 000 cm³')}`,
            `${gr('Vind die volume van een klein kubus:')} V = ${bl('5')} × ${bl('5')} × ${bl('5')} = ${or('125 cm³')}`,
            `${gr('Deel om die aantal klein kubusse te vind:')} 9 000 ÷ 125 = ${or('72')}`,
            `<strong>Antwoord:</strong> ${or('72 klein kubusse')} pas binne-in die boks ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium — water tank capacity ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Watertenk is 3 m lank, 2 m breed en 1,5 m hoog. Hoeveel water kan dit hou?',
          answer: '9 m³',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Volume = lengte × breedte × hoogte\nV = 3 × 2 × 1,5\n3 × 2 = 6, dan 6 × 1,5 = 9\nAntwoord: Die tenk kan 9 m³ water hou ✓',
        },

        // ── Q6 Hard — packing small cubes into a large box ───────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato pak ʼn boks wat 40 cm lank, 30 cm breed en 20 cm hoog is met klein kubusse van 10 cm sye. Hoeveel klein kubusse pas binne-in?',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Volume van boks = 40 × 30 × 20 = 24 000 cm³\nVolume van klein kubus = 10 × 10 × 10 = 1 000 cm³\nAantal kubusse = 24 000 ÷ 1 000 = 24\nAntwoord: 24 klein kubusse pas binne-in ✓',
        },

        // ── Q7 Medium — volume of a swimming pool ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Swembad is 12 m lank, 6 m breed en 1,5 m diep. Bereken die volume daarvan.',
          answer: '108 m³',
          checkMode: 'auto',
          correctAnswer: '108',
          explanation: 'Volume = lengte × breedte × hoogte\nV = 12 × 6 × 1,5\n12 × 6 = 72, dan 72 × 1,5 = 108\nAntwoord: 108 m³ ✓',
        },

        // ── Q8 Hard — compare volumes of two boxes ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle het twee bokse — Boks A is 5 cm by 5 cm by 5 cm en Boks B is 4 cm by 6 cm by 5 cm. Watter een het die groter volume?',
          answer: 'Boks A = 125 cm³. Boks B = 120 cm³. Boks A het die groter volume.',
          checkMode: 'self',
        },

        // ── Q9 Hard — number of buckets needed to fill a container ───────────
        {
          difficulty: 'Hard',
          question: 'Thabo wil ʼn houer van 50 cm by 30 cm by 20 cm vul met emmers wat elk 5 000 cm³ hou. Hoeveel emmers het hy nodig?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Volume van houer = 50 × 30 × 20 = 30 000 cm³\nElke emmer hou 5 000 cm³\nAantal emmers = 30 000 ÷ 5 000 = 6\nAntwoord: Thabo het 6 emmers nodig ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video solving real-life volume problems including containers and packing problems showing how to apply the volume formula in context" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side diagram showing the large box 30cm by 20cm by 15cm and the small cube 5cm by 5cm by 5cm with volume calculations labelled" />',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! Jy het volume onder die knie.' },
    { minScore: 7, message: 'Goeie werk!' },
    { minScore: 5, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
