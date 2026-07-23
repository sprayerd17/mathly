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

// ─── Gedeelde "Kyk vorentoe"-verrykingsbanier ─────────────────────────────
// CAPS Graad 6-verduidelikingsnotas stel: leerders hoef nie formules vir
// omtrek, oppervlakte of volume te ken of toe te pas nie. Graad 6-volumewerk
// gaan oor kubusse/reghoekige prismas tel of pak om ʼn houer te vul of ʼn
// stapel te bou, en volume as "aantal kubusse/blokke" te gee — plus
// ondersoek waarom dit dieselfde is as lengte × breedte × hoogte, nie die
// formule op sy eie toepas nie. Behou hier as duidelik gemerkte verryking.
const lookingAhead = (title: string, body: string) =>
  `<div style="background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
  `<p style="font-weight:700;color:#7c3aed;margin-bottom:6px;">🔭 Kyk vorentoe: ${title}</p>` +
  `<p style="margin:0;color:#581c87;">${body}</p>` +
  `</div>`

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
        lookingAhead(
          'Volume = lengte × breedte × hoogte as ʼn formule gebruik',
          'CAPS Graad 6 wil hê jy moet kubusse tel of pak om ʼn houer te vul of ʼn stapel te bou, en volume as "aantal kubusse/blokke" gee — terwyl jy ondersoek waarom dit dieselfde uitwerk as lengte × breedte × hoogte. Om die formule direk op getalle toe te pas, sonder om fisies te tel of kubusse voor te stel, is Graad 7+-werk.'
        ) +
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
        'Kort video wat die volume van reghoekige prismas en kubusse verduidelik met die formule Volume = lengte x breedte x hoogte, met kleurgekodeerde dimensies',

      diagramPlaceholder:
        '3D-diagram van ʼn reghoekige prisma gemerk met lengte in blou, breedte in rooi en hoogte in groen, wat die volumeformule en die kubieke-eenheid-notasie wys',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,70 110,70 140,50 70,50" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,70 140,50 140,110 110,130" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="70" width="70" height="60" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="130" x2="110" y2="130" stroke="#2563eb" stroke-width="2.5"/><line x1="110" y1="70" x2="110" y2="130" stroke="#16a34a" stroke-width="2.5"/><line x1="110" y1="70" x2="140" y2="50" stroke="#dc2626" stroke-width="2.5"/><text x="75" y="146" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">lengte</text><text x="124" y="100" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle" transform="rotate(-90 124 100)">hoogte</text><text x="128" y="40" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">breedte</text><text x="95" y="160" font-size="13" fill="#374151" text-anchor="middle">V = lengte × breedte × hoogte</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING VOLUME IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'volume-in-context',
      title: 'Volume in Konteks Bereken',
      icon: '📦',
      explanation:
        lookingAhead(
          'die volumeformule op werklike-lewe probleme toepas',
          'Hierdie afdeling bou voort op die Graad 7+-volumeformule van die vorige afdeling. Die CAPS Graad 6-manier om ʼn werklike houer te hanteer is om jou voor te stel of te tel hoeveel kubusse/blokke dit sou vul, nie om getalle in V = l × b × h in te vul nie.'
        ) +
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
        'Kort video wat werklike-lewe volumeprobleme oplos, insluitend houers en pakprobleme, en wys hoe om die volumeformule in konteks toe te pas',

      diagramPlaceholder:
        'Diagram wat die groot boks (30 cm by 20 cm by 15 cm) langs die klein kubus (5 cm by 5 cm by 5 cm) wys, met die volumeberekenings gemerk',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="15,65 65,65 83,51 33,51" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.2"/><polygon points="65,65 83,51 83,76 65,90" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2.2"/><rect x="15" y="65" width="50" height="25" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2.2"/><polygon points="150,75 170,75 180,67 160,67" fill="#fff7ed" stroke="#0f1f3d" stroke-width="2"/><polygon points="170,75 180,67 180,87 170,95" fill="#fdba74" stroke="#0f1f3d" stroke-width="2"/><rect x="150" y="75" width="20" height="20" fill="#fed7aa" stroke="#0f1f3d" stroke-width="2"/><text x="49" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">30 × 20 × 15 cm</text><text x="49" y="123" font-size="12" fill="#374151" text-anchor="middle">= 9 000 cm³</text><text x="165" y="112" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 × 5 × 5 cm</text><text x="165" y="127" font-size="12" fill="#374151" text-anchor="middle">= 125 cm³</text><text x="110" y="148" font-size="12" fill="#ea580c" text-anchor="middle"><tspan x="110">9 000 ÷ 125 =</tspan><tspan x="110" dy="15">72 klein kubusse pas in</tspan></text></svg>',
    },
  ],
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! Jy het volume onder die knie.' },
    { minScore: 7, message: 'Goeie werk!' },
    { minScore: 5, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-4 Direkte volume (prismas/kubusse) | 5-8 Desimale & ontbrekende dimensie |
    // 9-12 Woordprobleme | 13-15 Foutopsporing | 16-17 Vergelyk volumes |
    // 18-19 Multi-stap inpak
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Boks is 7 cm lank, 4 cm breed en 3 cm hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '84cm3', correctAnswers: ['84cm3', '84 cm3', '84', '84cm³', '84 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 7 × 4 × 3\n7 × 4 = 28, dan 28 × 3 = 84\nAntwoord: 84 cm³' },
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 6 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '216cm3', correctAnswers: ['216cm3', '216 cm3', '216', '216cm³', '216 cm³'], explanation: 'ʼn Kubus het al die sye gelyk.\nVolume = sy × sy × sy\nV = 6 × 6 × 6 = 36 × 6 = 216\nAntwoord: 216 cm³' },
        { difficulty: 'Easy', question: 'ʼn Stoorkamer is soos ʼn reghoekige prisma gevorm: 9 m lank, 4 m breed en 2 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '72m3', correctAnswers: ['72m3', '72 m3', '72', '72m³', '72 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 9 × 4 × 2\n9 × 4 = 36, dan 36 × 2 = 72\nAntwoord: 72 m³' },
        { difficulty: 'Easy', question: 'ʼn Kubusvormige krat het sye van 3 m. Bereken die volume.', checkMode: 'auto', correctAnswer: '27m3', correctAnswers: ['27m3', '27 m3', '27', '27m³', '27 m³'], explanation: 'Volume = sy × sy × sy\nV = 3 × 3 × 3 = 9 × 3 = 27\nAntwoord: 27 m³' },
        { difficulty: 'Easy', question: 'ʼn Tas het ʼn hoogte van 3 cm, ʼn breedte van 5 cm en ʼn lengte van 8 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '120cm3', correctAnswers: ['120cm3', '120 cm3', '120', '120cm³', '120 cm³'], explanation: 'Dit maak nie saak in watter volgorde die dimensies gegee word nie — vermenigvuldig al drie.\nV = lengte × breedte × hoogte = 8 × 5 × 3\n8 × 5 = 40, dan 40 × 3 = 120\nAntwoord: 120 cm³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stoorbak is 2,5 m lank, 4 m breed en 3 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '30m3', correctAnswers: ['30m3', '30 m3', '30', '30m³', '30 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 2,5 × 4 × 3\n2,5 × 4 = 10, dan 10 × 3 = 30\nAntwoord: 30 m³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Plantbak is 1,5 m lank, 2 m breed en 2,5 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '7,5m3', correctAnswers: ['7.5m3', '7,5m3', '7.5 m3', '7,5 m3', '7.5', '7,5', '7.5m³', '7,5m³', '7.5 m³', '7,5 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 1,5 × 2 × 2,5\n1,5 × 2 = 3, dan 3 × 2,5 = 7,5\nAntwoord: 7,5 m³' },
        { difficulty: 'Medium', question: 'ʼn Krat het ʼn volume van 180 cm³. Dit is 9 cm lank en 5 cm breed. Bereken die hoogte.', checkMode: 'auto', correctAnswer: '4cm', correctAnswers: ['4cm', '4 cm', '4'], explanation: 'Aangesien V = l × b × h, is hoogte = V ÷ (l × b).\nHoogte = 180 ÷ (9 × 5) = 180 ÷ 45 = 4\nAntwoord: 4 cm' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige stoorboks het ʼn volume van 216 cm³. Gebruik die feit dat 6³ = 216 om die lengte van een sy te vind.', checkMode: 'auto', correctAnswer: '6cm', correctAnswers: ['6cm', '6 cm', '6'], explanation: 'Aangesien die boks ʼn kubus is, is V = sy × sy × sy = sy³.\nOns benodig ʼn getal wat, wanneer dit gekubeer word, 216 gee.\n6 × 6 × 6 = 216, dus is die sylengte 6 cm.\nAntwoord: 6 cm' },
        { difficulty: 'Medium', question: 'ʼn Watertenk is 4 m lank, 3 m breed en 2 m hoog. Hoeveel water kan dit hou?', checkMode: 'auto', correctAnswer: '24m3', correctAnswers: ['24m3', '24 m3', '24', '24m³', '24 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 4 × 3 × 2\n4 × 3 = 12, dan 12 × 2 = 24\nAntwoord: die tenk kan 24 m³ water hou' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige swembad is 8 m lank, 5 m breed en 2 m diep. Bereken die volume.', checkMode: 'auto', correctAnswer: '80m3', correctAnswers: ['80m3', '80 m3', '80', '80m³', '80 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 8 × 5 × 2\n8 × 5 = 40, dan 40 × 2 = 80\nAntwoord: 80 m³' },
        { difficulty: 'Medium', question: 'ʼn Vistenk is 60 cm lank, 30 cm breed en 40 cm hoog. Wat is die volume?', checkMode: 'auto', correctAnswer: '72000cm3', correctAnswers: ['72000cm3', '72000 cm3', '72000', '72 000cm3', '72 000 cm3', '72 000cm³', '72 000 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 60 × 30 × 40\n60 × 30 = 1 800, dan 1 800 × 40 = 72 000\nAntwoord: 72 000 cm³' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sandput is 3 m lank, 2 m breed en 0,5 m diep. Hoeveel sand word benodig om dit heeltemal te vul?', checkMode: 'auto', correctAnswer: '3m3', correctAnswers: ['3m3', '3 m3', '3', '3m³', '3 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 3 × 2 × 0,5\n3 × 2 = 6, dan 6 × 0,5 = 3\nAntwoord: 3 m³ sand word benodig' },
        { difficulty: 'Medium', question: 'Katlego sê ʼn kubus met sye van 4 cm het ʼn volume van 48 cm³, want sy het 4 + 4 + 4 = 12 opgetel en toe met 4 vermenigvuldig. Is Katlego korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Katlego is verkeerd. Volume van ʼn kubus = sy × sy × sy, nie sy + sy + sy en dan × sy nie. Die korrekte berekening is 4 × 4 × 4 = 64 cm³. Katlego het optelling in plaas van vermenigvuldiging vir die eerste twee sye gebruik.' },
        { difficulty: 'Medium', question: 'Boitumelo bereken die volume van ʼn boks wat 5 cm lank, 3 cm breed en 2 cm hoog is. Sy vermenigvuldig slegs die lengte en breedte en kry 15 cm³ as haar finale antwoord. Is sy korrek? Verduidelik.', checkMode: 'self', answer: 'Boitumelo is verkeerd. Sy het slegs lengte × breedte (5 × 3 = 15) vermenigvuldig, wat die oppervlakte van die basis gee, nie die volume nie. Sy het vergeet om met die hoogte te vermenigvuldig. Die korrekte volume is 5 × 3 × 2 = 30 cm³.' },
        { difficulty: 'Medium', question: 'Gegewe ʼn kubus met sye van 7 cm, bereken Farhaan die volume as 7 × 3 = 21 cm³. Is Farhaan korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Farhaan is verkeerd. Om die volume van ʼn kubus te vind, moet jy die sylengte kubeer (dit drie keer met homself vermenigvuldig), nie met 3 vermenigvuldig nie. Die korrekte volume is 7 × 7 × 7 = 343 cm³.' },
        { difficulty: 'Medium-Hard', question: 'Boks A meet 6 cm by 5 cm by 4 cm. Boks B meet 8 cm by 3 cm by 5 cm. Watter boks het die groter volume, of is hulle gelyk?', checkMode: 'self', answer: 'Boks A: 6 × 5 × 4 = 120 cm³. Boks B: 8 × 3 × 5 = 120 cm³. Die twee bokse het gelyke volume, al lyk hulle dimensies redelik verskillend.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige krat het sye van 5 cm. ʼn Reghoekige krat meet 4 cm by 6 cm by 5 cm. Watter krat het die groter volume?', checkMode: 'self', answer: 'Kubus: 5 × 5 × 5 = 125 cm³. Reghoekige krat: 4 × 6 × 5 = 120 cm³. Die kubusvormige krat het die groter volume, met 5 cm³.' },
        { difficulty: 'Hard', question: 'ʼn Krat wat 60 cm lank, 40 cm breed en 30 cm hoog is, word met klein kubusse van 10 cm sye gepak. Hoeveel klein kubusse pas binne-in, as daar geen gemorste spasie is nie?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 kubusse'], explanation: 'Volume van krat = 60 × 40 × 30 = 72 000 cm³\nVolume van een klein kubus = 10 × 10 × 10 = 1 000 cm³\nAantal kubusse = 72 000 ÷ 1 000 = 72\nAntwoord: 72 klein kubusse pas binne-in' },
        { difficulty: 'Hard', question: 'ʼn Tenk wat 100 cm lank, 60 cm breed en 50 cm hoog is, moet met emmers gevul word wat elk 6 000 cm³ hou. Hoeveel volle emmers word benodig?', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 emmers'], explanation: 'Volume van tenk = 100 × 60 × 50 = 300 000 cm³\nElke emmer hou 6 000 cm³\nAantal emmers = 300 000 ÷ 6 000 = 50\nAntwoord: 50 emmers word benodig' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan volume selfvertroue bereken vir prismas en kubusse, en dit toepas op werklike-lewe probleme.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van volume — gaan gemiste vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor volume weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // Blokke: 0-4 Direkte volume (prismas/kubusse) | 5-8 Desimale & ontbrekende dimensie |
    // 9-12 Woordprobleme | 13-15 Foutopsporing | 16-17 Vergelyk volumes |
    // 18-19 Multi-stap inpak
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Graanboks is 9 cm lank, 6 cm breed en 4 cm hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '216cm3', correctAnswers: ['216cm3', '216 cm3', '216', '216cm³', '216 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 9 × 6 × 4\n9 × 6 = 54, dan 54 × 4 = 216\nAntwoord: 216 cm³' },
        { difficulty: 'Easy', question: 'ʼn Houtkubus het sye van 8 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '512cm3', correctAnswers: ['512cm3', '512 cm3', '512', '512cm³', '512 cm³'], explanation: 'Volume = sy × sy × sy\nV = 8 × 8 × 8 = 64 × 8 = 512\nAntwoord: 512 cm³' },
        { difficulty: 'Easy', question: 'ʼn Vraghouer is 12 m lank, 5 m breed en 3 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '180m3', correctAnswers: ['180m3', '180 m3', '180', '180m³', '180 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 12 × 5 × 3\n12 × 5 = 60, dan 60 × 3 = 180\nAntwoord: 180 m³' },
        { difficulty: 'Easy', question: 'ʼn Kubusvormige stoortenk het sye van 7 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '343cm3', correctAnswers: ['343cm3', '343 cm3', '343', '343cm³', '343 cm³'], explanation: 'Volume = sy × sy × sy\nV = 7 × 7 × 7 = 49 × 7 = 343\nAntwoord: 343 cm³' },
        { difficulty: 'Easy', question: 'ʼn Tuinskuur het ʼn hoogte van 4 m, ʼn lengte van 6 m en ʼn breedte van 3 m. Bereken die volume.', checkMode: 'auto', correctAnswer: '72m3', correctAnswers: ['72m3', '72 m3', '72', '72m³', '72 m³'], explanation: 'Dit maak nie saak in watter volgorde die dimensies gegee word nie — vermenigvuldig al drie.\nV = lengte × breedte × hoogte = 6 × 3 × 4\n6 × 3 = 18, dan 18 × 4 = 72\nAntwoord: 72 m³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Pennesak is 3,5 cm hoog, 2 cm breed en 4 cm lank. Bereken die volume.', checkMode: 'auto', correctAnswer: '28cm3', correctAnswers: ['28cm3', '28 cm3', '28', '28cm³', '28 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 4 × 2 × 3,5\n4 × 2 = 8, dan 8 × 3,5 = 28\nAntwoord: 28 cm³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stoorkas is 2,5 m lank, 4 m breed en 1,5 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '15m3', correctAnswers: ['15m3', '15 m3', '15', '15m³', '15 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 2,5 × 4 × 1,5\n2,5 × 4 = 10, dan 10 × 1,5 = 15\nAntwoord: 15 m³' },
        { difficulty: 'Medium', question: 'ʼn Boks het ʼn volume van 336 cm³. Dit is 8 cm lank en 6 cm breed. Bereken die hoogte.', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7 cm', '7'], explanation: 'Aangesien V = l × b × h, is hoogte = V ÷ (l × b).\nHoogte = 336 ÷ (8 × 6) = 336 ÷ 48 = 7\nAntwoord: 7 cm' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige geskenkboks het ʼn volume van 125 cm³. Gebruik die feit dat 5³ = 125 om die lengte van een sy te vind.', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm', '5'], explanation: 'Aangesien die boks ʼn kubus is, is V = sy³.\nOns benodig ʼn getal wat, wanneer dit gekubeer word, 125 gee.\n5 × 5 × 5 = 125, dus is die sylengte 5 cm.\nAntwoord: 5 cm' },
        { difficulty: 'Medium', question: 'ʼn Waterbak vir beeste is 2 m lank, 0,5 m breed en 0,4 m diep. Hoeveel water kan dit hou?', checkMode: 'auto', correctAnswer: '0,4m3', correctAnswers: ['0.4m3', '0,4m3', '0.4 m3', '0,4 m3', '0.4', '0,4', '0.4m³', '0,4m³', '0.4 m³', '0,4 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 2 × 0,5 × 0,4\n2 × 0,5 = 1, dan 1 × 0,4 = 0,4\nAntwoord: die bak kan 0,4 m³ water hou' },
        { difficulty: 'Medium', question: 'ʼn Stoorhouer meet 1,2 m lank, 1 m breed en 1 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '1,2m3', correctAnswers: ['1.2m3', '1,2m3', '1.2 m3', '1,2 m3', '1.2', '1,2', '1.2m³', '1,2m³', '1.2 m³', '1,2 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 1,2 × 1 × 1\n1,2 × 1 = 1,2, dan 1,2 × 1 = 1,2\nAntwoord: 1,2 m³' },
        { difficulty: 'Medium', question: 'ʼn Vragboks meet 50 cm lank, 40 cm breed en 30 cm hoog. Wat is die volume?', checkMode: 'auto', correctAnswer: '60000cm3', correctAnswers: ['60000cm3', '60000 cm3', '60000', '60 000cm3', '60 000 cm3', '60 000cm³', '60 000 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 50 × 40 × 30\n50 × 40 = 2 000, dan 2 000 × 30 = 60 000\nAntwoord: 60 000 cm³' },
        { difficulty: 'Medium', question: 'ʼn Plantbak is 1,5 m lank, 0,6 m breed en 0,4 m diep. Hoeveel grond word benodig om dit heeltemal te vul?', checkMode: 'auto', correctAnswer: '0,36m3', correctAnswers: ['0.36m3', '0,36m3', '0.36 m3', '0,36 m3', '0.36', '0,36', '0.36m³', '0,36m³', '0.36 m³', '0,36 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 1,5 × 0,6 × 0,4\n1,5 × 0,6 = 0,9, dan 0,9 × 0,4 = 0,36\nAntwoord: 0,36 m³ grond word benodig' },
        { difficulty: 'Medium', question: 'Naledi sê ʼn boks wat 6 cm lank, 4 cm breed en 2 cm hoog is, het ʼn volume van 12 cm³, want sy het 6 + 4 + 2 = 12 opgetel. Is Naledi korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Naledi is verkeerd. Volume word gevind deur die drie dimensies te vermenigvuldig, nie op te tel nie. Die korrekte berekening is 6 × 4 × 2 = 48 cm³. Naledi het optelling in plaas van vermenigvuldiging gebruik.' },
        { difficulty: 'Medium', question: 'ʼn Boks is 9 cm lank, 2 cm breed en 5 cm hoog. Zola vermenigvuldig slegs die lengte en breedte, kry 18 cm³, en gee dit as die volume. Is Zola korrek? Verduidelik.', checkMode: 'self', answer: 'Zola is verkeerd. Om slegs lengte × breedte (9 × 2 = 18) te vermenigvuldig, gee die oppervlakte van die basis, nie die volume nie — die hoogte moet ook ingesluit word. Die korrekte volume is 9 × 2 × 5 = 90 cm³.' },
        { difficulty: 'Medium', question: 'Mpho bereken die volume van ʼn kubusvormige boks met 10 cm sye en skryf die antwoord as "1 000" neer. Is Mpho se antwoord heeltemal korrek? Verduidelik.', checkMode: 'self', answer: 'Die getal is korrek (10 × 10 × 10 = 1 000), maar die antwoord is onvolledig omdat dit die kubieke eenheid ontbreek. Volume moet altyd met kubieke eenhede geskryf word, dus is die korrekte antwoord 1 000 cm³, nie net 1 000 nie.' },
        { difficulty: 'Medium-Hard', question: 'Boks A meet 7 cm by 4 cm by 3 cm. Boks B meet 6 cm by 5 cm by 3 cm. Watter boks het die groter volume, en met hoeveel?', checkMode: 'self', answer: 'Boks A: 7 × 4 × 3 = 84 cm³. Boks B: 6 × 5 × 3 = 90 cm³. Boks B het die groter volume, met 90 − 84 = 6 cm³.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige waterhouer het sye van 6 cm. ʼn Reghoekige waterhouer meet 5 cm by 5 cm by 7 cm. Watter houer het die groter volume?', checkMode: 'self', answer: 'Kubus: 6 × 6 × 6 = 216 cm³. Reghoekige houer: 5 × 5 × 7 = 175 cm³. Die kubusvormige houer het die groter volume, met 216 − 175 = 41 cm³.' },
        { difficulty: 'Hard', question: 'ʼn Stoorkamer is 4 m lank, 3 m breed en 2,5 m hoog. Dit sal met bokse gevul word wat elk 1 m by 1 m by 0,5 m meet. Hoeveel bokse word benodig om die kamer heeltemal te vul?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 bokse'], explanation: 'Volume van kamer = 4 × 3 × 2,5 = 30 m³\nVolume van een boks = 1 × 1 × 0,5 = 0,5 m³\nAantal bokse = 30 ÷ 0,5 = 60\nAntwoord: 60 bokse word benodig' },
        { difficulty: 'Hard', question: 'ʼn Krat wat 90 cm lank, 60 cm breed en 50 cm hoog is, word met kleiner bokse van 30 cm by 20 cm by 10 cm gepak. Hoeveel klein bokse pas binne-in, as daar geen gemorste spasie is nie?', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 bokse'], explanation: 'Volume van krat = 90 × 60 × 50 = 270 000 cm³\nVolume van een klein boks = 30 × 20 × 10 = 6 000 cm³\nAantal bokse = 270 000 ÷ 6 000 = 45\nAntwoord: 45 klein bokse pas binne-in' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan volume selfvertroue bereken vir prismas en kubusse, en dit toepas op werklike-lewe probleme.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn stewige begrip — gaan gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor volume weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // Blokke: 0-4 Direkte volume (prismas/kubusse) | 5-8 Desimale & ontbrekende dimensie |
    // 9-12 Woordprobleme | 13-15 Foutopsporing | 16-17 Vergelyk volumes |
    // 18-19 Multi-stap inpak
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Skoenboks is 10 cm lank, 6 cm breed en 5 cm hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '300cm3', correctAnswers: ['300cm3', '300 cm3', '300', '300cm³', '300 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 10 × 6 × 5\n10 × 6 = 60, dan 60 × 5 = 300\nAntwoord: 300 cm³' },
        { difficulty: 'Easy', question: 'ʼn Kubusvormige blok het sye van 9 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '729cm3', correctAnswers: ['729cm3', '729 cm3', '729', '729cm³', '729 cm³'], explanation: 'Volume = sy × sy × sy\nV = 9 × 9 × 9 = 81 × 9 = 729\nAntwoord: 729 cm³' },
        { difficulty: 'Easy', question: 'ʼn Klaskamer is 7 m lank, 5 m breed en 2 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '70m3', correctAnswers: ['70m3', '70 m3', '70', '70m³', '70 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 7 × 5 × 2\n7 × 5 = 35, dan 35 × 2 = 70\nAntwoord: 70 m³' },
        { difficulty: 'Easy', question: 'ʼn Kubusvormige krat het sye van 4 m. Bereken die volume.', checkMode: 'auto', correctAnswer: '64m3', correctAnswers: ['64m3', '64 m3', '64', '64m³', '64 m³'], explanation: 'Volume = sy × sy × sy\nV = 4 × 4 × 4 = 16 × 4 = 64\nAntwoord: 64 m³' },
        { difficulty: 'Easy', question: 'ʼn Gereedskapkis het ʼn breedte van 10 cm, ʼn hoogte van 4 cm en ʼn lengte van 6 cm. Bereken die volume.', checkMode: 'auto', correctAnswer: '240cm3', correctAnswers: ['240cm3', '240 cm3', '240', '240cm³', '240 cm³'], explanation: 'Dit maak nie saak in watter volgorde die dimensies gegee word nie — vermenigvuldig al drie.\nV = lengte × breedte × hoogte = 6 × 10 × 4\n6 × 10 = 60, dan 60 × 4 = 240\nAntwoord: 240 cm³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Laai is 3 cm hoog, 2 cm breed en 4,5 cm lank. Bereken die volume.', checkMode: 'auto', correctAnswer: '27cm3', correctAnswers: ['27cm3', '27 cm3', '27', '27cm³', '27 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 4,5 × 2 × 3\n4,5 × 2 = 9, dan 9 × 3 = 27\nAntwoord: 27 cm³' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stoorlosie is 3,5 m lank, 2 m breed en 2 m hoog. Bereken die volume.', checkMode: 'auto', correctAnswer: '14m3', correctAnswers: ['14m3', '14 m3', '14', '14m³', '14 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 3,5 × 2 × 2\n3,5 × 2 = 7, dan 7 × 2 = 14\nAntwoord: 14 m³' },
        { difficulty: 'Medium', question: 'ʼn Krat het ʼn volume van 150 cm³. Dit is 5 cm breed en 6 cm hoog. Bereken die lengte.', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm', '5'], explanation: 'Aangesien V = l × b × h, is lengte = V ÷ (b × h).\nLengte = 150 ÷ (5 × 6) = 150 ÷ 30 = 5\nAntwoord: 5 cm' },
        { difficulty: 'Medium', question: 'ʼn Kubusvormige krat het ʼn volume van 343 cm³. Gebruik die feit dat 7³ = 343 om die lengte van een sy te vind.', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7 cm', '7'], explanation: 'Aangesien die krat ʼn kubus is, is V = sy³.\nOns benodig ʼn getal wat, wanneer dit gekubeer word, 343 gee.\n7 × 7 × 7 = 343, dus is die sylengte 7 cm.\nAntwoord: 7 cm' },
        { difficulty: 'Medium', question: 'ʼn Opgaardam is 10 m lank, 8 m breed en 3 m diep. Hoeveel water kan dit hou?', checkMode: 'auto', correctAnswer: '240m3', correctAnswers: ['240m3', '240 m3', '240', '240m³', '240 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 10 × 8 × 3\n10 × 8 = 80, dan 80 × 3 = 240\nAntwoord: die opgaardam kan 240 m³ water hou' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige swembad is 15 m lank, 7 m breed en 2 m diep. Bereken die volume.', checkMode: 'auto', correctAnswer: '210m3', correctAnswers: ['210m3', '210 m3', '210', '210m³', '210 m³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 15 × 7 × 2\n15 × 7 = 105, dan 105 × 2 = 210\nAntwoord: 210 m³' },
        { difficulty: 'Medium', question: 'ʼn Stoorhouer is 80 cm lank, 50 cm breed en 40 cm hoog. Hoeveel grond kan dit hou?', checkMode: 'auto', correctAnswer: '160000cm3', correctAnswers: ['160000cm3', '160000 cm3', '160000', '160 000cm3', '160 000 cm3', '160 000cm³', '160 000 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 80 × 50 × 40\n80 × 50 = 4 000, dan 4 000 × 40 = 160 000\nAntwoord: die houer kan 160 000 cm³ grond hou' },
        { difficulty: 'Medium', question: 'ʼn Geskenkboks meet 25 cm lank, 15 cm breed en 10 cm hoog. Wat is die volume?', checkMode: 'auto', correctAnswer: '3750cm3', correctAnswers: ['3750cm3', '3750 cm3', '3750', '3 750cm3', '3 750 cm3', '3 750cm³', '3 750 cm³'], explanation: 'Volume = lengte × breedte × hoogte\nV = 25 × 15 × 10\n25 × 15 = 375, dan 375 × 10 = 3 750\nAntwoord: 3 750 cm³' },
        { difficulty: 'Medium', question: 'Gegewe ʼn kubus met sye van 5 m, sê Tebogo die volume is 15 m³ omdat hy 5 × 3 bereken het. Is Tebogo korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Tebogo is verkeerd. Om die volume van ʼn kubus te vind, moet jy die sylengte kubeer (dit drie keer met homself vermenigvuldig), nie met 3 vermenigvuldig nie. Die korrekte volume is 5 × 5 × 5 = 125 m³.' },
        { difficulty: 'Medium', question: 'ʼn Boks is 8 cm lank, 6 cm breed en 3 cm hoog. Palesa vermenigvuldig slegs die lengte en breedte, kry 48 cm³, en gee dit as die finale volume. Is Palesa korrek? Verduidelik.', checkMode: 'self', answer: 'Palesa is verkeerd. Om slegs lengte × breedte (8 × 6 = 48) te vermenigvuldig, gee die oppervlakte van die basis, nie die volume nie — die hoogte moet ook ingesluit word. Die korrekte volume is 8 × 6 × 3 = 144 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Boks (nie ʼn kubus nie) is 4 cm lank, 9 cm breed en 2 cm hoog. Kagiso hanteer dit soos ʼn kubus en bereken 4 × 4 × 4 = 64 cm³. Is Kagiso korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Kagiso is verkeerd. Die boks is nie ʼn kubus nie, dus is die sye nie almal gelyk nie — om net een dimensie te kubeer is die verkeerde metode. Die korrekte volume is lengte × breedte × hoogte = 4 × 9 × 2 = 72 cm³.' },
        { difficulty: 'Medium-Hard', question: 'Boks A meet 9 cm by 4 cm by 5 cm. Boks B meet 8 cm by 5 cm by 6 cm. Watter boks het die groter volume, en met hoeveel?', checkMode: 'self', answer: 'Boks A: 9 × 4 × 5 = 180 cm³. Boks B: 8 × 5 × 6 = 240 cm³. Boks B het die groter volume, met 240 − 180 = 60 cm³.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kubusvormige krat het sye van 8 cm. ʼn Reghoekige krat meet 6 cm by 8 cm by 9 cm. Watter krat het die groter volume?', checkMode: 'self', answer: 'Kubus: 8 × 8 × 8 = 512 cm³. Reghoekige krat: 6 × 8 × 9 = 432 cm³. Die kubusvormige krat het die groter volume, met 512 − 432 = 80 cm³.' },
        { difficulty: 'Hard', question: 'ʼn Krat wat 120 cm lank, 80 cm breed en 60 cm hoog is, word met kleiner bokse gepak wat elk 20 cm by 20 cm by 20 cm meet. Hoeveel klein bokse pas binne-in, as daar geen gemorste spasie is nie?', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 bokse'], explanation: 'Volume van krat = 120 × 80 × 60 = 576 000 cm³\nVolume van een klein boks = 20 × 20 × 20 = 8 000 cm³\nAantal bokse = 576 000 ÷ 8 000 = 72\nAntwoord: 72 klein bokse pas binne-in' },
        { difficulty: 'Hard', question: 'ʼn Tenk wat 150 cm lank, 100 cm breed en 60 cm hoog is, moet met emmers gevul word wat elk 9 000 cm³ hou. Hoeveel volle emmers word benodig?', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100 emmers'], explanation: 'Volume van tenk = 150 × 100 × 60 = 900 000 cm³\nElke emmer hou 9 000 cm³\nAantal emmers = 900 000 ÷ 9 000 = 100\nAntwoord: 100 emmers word benodig' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan volumeberekeninge, desimale redenering en multi-stap probleemoplossing op werklike-lewe situasies toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan gemiste vrae na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor volume weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
