import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// radius         → blue    (#2563eb)
// diameter       → red     (#dc2626)
// circumference  → green   (#16a34a)
// area / units   → orange  (#ea580c)
// shape 2        → purple  (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Oppervlakte en Omtrek van 2D-vorms',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — OPPERVLAKTE EN OMTREK VAN SIRKELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'area-circumference-circles',
      title: 'Oppervlakte en Omtrek van Sirkels',
      icon: 'π',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik die verwantskappe tussen ${bl('radius')}, ${re('deursnee')} en ${gr('omtrek')} — ${gr('Omtrek')} = 2π${bl('r')} of π${re('d')} — en tussen ${bl('radius')} en ${or('oppervlakte')} — ${or('Oppervlakte')} = π${bl('r')}² — om sirkelmetings te bereken, met π ≈ 3,14, tot minstens 2 desimale plekke.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deursnee')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omtrek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Radius')} en ${re('Deursnee')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('d')} = 2${bl('r')} &nbsp;|&nbsp; ${bl('r')} = ${re('d')} ÷ 2</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Omtrek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('O')} = 2π${bl('r')} = π${re('d')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Oppervlakte')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('O')} = π${bl('r')}²</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vind altyd eers die radius</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy die ${re('deursnee')} kry, deel dit deur 2 om die ${bl('radius')} te vind voordat jy dit in enige formule vervang. Beide die ${gr('omtrek')}-formule en die ${or('oppervlakte')}-formule gebruik die ${bl('radius')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die omtrek van ʼn sirkel met radius 8 cm (π = 3,14).',
          answer: `${gr('Omtrek')} = ${gr('50,24 cm')}`,
          steps: [
            `Skryf die formule: ${gr('O')} = 2π${bl('r')}`,
            `Vervang: ${gr('O')} = 2 × 3,14 × ${bl('8')}`,
            `Bereken: ${gr('O')} = 6,28 × 8 = ${gr('50,24 cm')}`,
          ],
        },
        {
          question: 'Vind die oppervlakte van ʼn sirkel met deursnee 10 cm (π = 3,14).',
          answer: `${or('Oppervlakte')} = ${or('78,5 cm²')}`,
          steps: [
            `Vind die ${bl('radius')}: ${bl('r')} = ${re('d')} ÷ 2 = ${re('10')} ÷ 2 = ${bl('5 cm')}`,
            `Skryf die formule: ${or('O')} = π${bl('r')}²`,
            `Vervang: ${or('O')} = 3,14 × ${bl('5')}²`,
            `Bereken: ${or('O')} = 3,14 × 25 = ${or('78,5 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Easy — omtrek gegewe radius ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die omtrek van ʼn sirkel met radius 5 cm (π = 3,14).',
          answer: '31,4 cm',
          checkMode: 'auto',
          correctAnswer: '31.4cm',
          correctAnswers: ['31.4cm', '31.4 cm', '31.4', '31,4cm', '31,4 cm', '31,4'],
          explanation: 'O = 2πr = 2 × 3,14 × 5 = 31,4 cm ✓',
        },

        // ── V2 Medium — oppervlakte gegewe radius ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn sirkel met radius 7 cm (π = 3,14).',
          answer: '153,86 cm²',
          checkMode: 'auto',
          correctAnswer: '153.86cm²',
          correctAnswers: ['153.86cm²', '153.86 cm²', '153.86', '153,86cm²', '153,86 cm²', '153,86'],
          explanation: 'O = πr² = 3,14 × 7² = 3,14 × 49 = 153,86 cm² ✓',
        },

        // ── V3 Hard — omtrekvergelyking ────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn sirkel met deursnee 10 cm het dieselfde omtrek as een met radius 10 cm. Is hy korrek? Verduidelik.',
          answer: 'Nee — omtrek hang af van radius (of deursnee). ʼn Deursnee van 10 cm gee ʼn radius van 5 cm en omtrek van 31,4 cm, terwyl ʼn radius van 10 cm ʼn omtrek van 62,8 cm gee. Dit is verskillend.',
          checkMode: 'self',
        },

        // ── V4 Medium — omtrek tot 2 desimale plekke ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Sirkelvormige swembad het ʼn radius van 3,6 m. Vind die omtrek tot 2 desimale plekke (π = 3,14).',
          answer: '22,61 m',
          checkMode: 'auto',
          correctAnswer: '22.61m',
          correctAnswers: ['22.61m', '22.61 m', '22.61', '22,61m', '22,61 m', '22,61'],
          explanation: 'O = 2πr = 2 × 3,14 × 3,6 = 22,608 ≈ 22,61 m ✓',
        },

        // ── V5 Hard — effek van radius verdubbeling ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om die radius van ʼn sirkel te verdubbel, verdubbel die oppervlakte daarvan. Is sy korrek? Verduidelik met berekeninge.',
          answer: 'Nee — oppervlakte hang af van r², dus verdubbeling van die radius verviervoudig die oppervlakte (aangesien 2² = 4), nie verdubbel dit nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the circumference and area formulas for circles using π = 3.14 with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a circle with radius labelled blue, diameter labelled red, circumference labelled green and area region labelled orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ONTBINDING VAN VEELHOEKE IN REGHOEKE EN DRIEHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'decomposing-polygons',
      title: 'Ontbinding van Veelhoeke in Reghoeke en Driehoeke',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">Ons bereken die oppervlaktes van meer komplekse veelhoeke, tot minstens 2 desimale plekke, deur hulle te <strong>ontbind</strong> (te verdeel) in eenvoudiger vorms soos ${bl('reghoeke')} en ${pu('driehoeke')}, elke oppervlakte apart te vind, en dit bymekaar te tel vir die ${gr('totale oppervlakte')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vorm 1')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('vorm 2')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('totale oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Oppervlakteformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oppervlakte = lengte × breedte</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">${pu('Driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oppervlakte = ½ × basis × hoogte</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Totale oppervlakte')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die oppervlaktes van elke gedeelte bymekaar</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Bepaal hoe om die vorm in ${bl('reghoeke')} en/of ${pu('driehoeke')} te verdeel.<br><strong>Stap 2</strong> — Vind die oppervlakte van elke gedeelte apart.<br><strong>Stap 3</strong> — Tel (of trek af) die oppervlaktes om die ${gr('totale oppervlakte')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn L-vormige figuur bestaan uit ʼn reghoek van 6 cm by 4 cm en ʼn reghoek van 3 cm by 2 cm. Vind die totale oppervlakte.',
          answer: `${gr('Totale oppervlakte')} = ${gr('30 cm²')}`,
          steps: [
            `${bl('Oppervlakte 1')} = 6 × 4 = ${bl('24 cm²')}`,
            `${pu('Oppervlakte 2')} = 3 × 2 = ${pu('6 cm²')}`,
            `${gr('Totale oppervlakte')} = ${bl('24')} + ${pu('6')} = ${gr('30 cm²')}`,
          ],
        },
        {
          question: 'ʼn Vyfhoek word verdeel in ʼn reghoek (8 cm by 5 cm) en ʼn driehoek (basis 8 cm, hoogte 3 cm) bo-op. Vind die totale oppervlakte.',
          answer: `${gr('Totale oppervlakte')} = ${gr('52 cm²')}`,
          steps: [
            `${bl('Reghoek-oppervlakte')} = 8 × 5 = ${bl('40 cm²')}`,
            `${pu('Driehoek-oppervlakte')} = ½ × 8 × 3 = ${pu('12 cm²')}`,
            `${gr('Totale oppervlakte')} = ${bl('40')} + ${pu('12')} = ${gr('52 cm²')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V6 Medium — L-vormige figuur ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn L-vormige figuur bestaan uit ʼn reghoek van 5 cm by 3 cm en ʼn reghoek van 2 cm by 4 cm. Vind die totale oppervlakte.',
          answer: '23 cm²',
          checkMode: 'auto',
          correctAnswer: '23cm²',
          correctAnswers: ['23cm²', '23 cm²', '23'],
          explanation: 'Oppervlakte 1 = 5 × 3 = 15 cm²\nOppervlakte 2 = 2 × 4 = 8 cm²\nTotaal = 15 + 8 = 23 cm² ✓',
        },

        // ── V7 Hard — vyfhoek ontbind in reghoek en driehoek ──────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Vyfhoek word verdeel in ʼn reghoek (6 cm by 4 cm) en ʼn driehoek (basis 6 cm, hoogte 2 cm). Vind die totale oppervlakte.',
          answer: '30 cm²',
          checkMode: 'auto',
          correctAnswer: '30cm²',
          correctAnswers: ['30cm²', '30 cm²', '30'],
          explanation: 'Reghoek-oppervlakte = 6 × 4 = 24 cm²\nDriehoek-oppervlakte = ½ × 6 × 2 = 6 cm²\nTotaal = 24 + 6 = 30 cm² ✓',
        },

        // ── V8 Medium — reghoek met halfsirkel verwyder ────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Vorm bestaan uit ʼn reghoek (10 cm by 6 cm) met ʼn halfsirkel (radius 3 cm) uit een kant gesny. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).',
          answer: '45,87 cm²',
          checkMode: 'auto',
          correctAnswer: '45.87cm²',
          correctAnswers: ['45.87cm²', '45.87 cm²', '45.87', '45,87cm²', '45,87 cm²', '45,87'],
          explanation: 'Reghoek-oppervlakte = 10 × 6 = 60 cm²\nHalfsirkel-oppervlakte = ½ × π × 3² = ½ × 3,14 × 9 = 14,13 cm²\nOorblywende oppervlakte = 60 − 14,13 = 45,87 cm² ✓',
        },

        // ── V9 Hard — reghoek met driehoek bygevoeg bo-op ───────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Tuin is gevorm soos ʼn reghoek (8 m by 5 m) met ʼn driehoekige gedeelte (basis 8 m, hoogte 3 m) bo-op bygevoeg. Vind die totale oppervlakte.',
          answer: '52 m²',
          checkMode: 'auto',
          correctAnswer: '52m²',
          correctAnswers: ['52m²', '52 m²', '52'],
          explanation: 'Reghoek-oppervlakte = 8 × 5 = 40 m²\nDriehoek-oppervlakte = ½ × 8 × 3 = 12 m²\nTotaal = 40 + 12 = 52 m² ✓',
        },

        // ── V10 Hard — onreëlmatige veelhoek-redenasie ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê dis onmoontlik om die oppervlakte van ʼn onreëlmatige veelhoek presies te bereken. Is sy korrek? Verduidelik.',
          answer: 'Nee — onreëlmatige veelhoeke kan ontbind (verdeel) word in eenvoudiger vorms soos reghoeke en driehoeke, en hulle oppervlaktes bereken en bymekaar getel word vir ʼn presiese totaal.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to decompose an L-shape and a pentagon into rectangles and triangles to find the total area" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="A pentagon shape split into a rectangle and triangle with each section labelled with its dimensions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPLOS VAN PROBLEME MET OMTREK EN OPPERVLAKTE, MET SAKREKENAARGEBRUIK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-perimeter-area-problems',
      title: 'Oplos van Probleme met Omtrek en Oppervlakte, met Sakrekenaargebruik',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike-lewe probleme op wat omtrek en oppervlakte van veelhoeke en sirkels behels, deur tot minstens 2 desimale plekke te bereken, ʼn sakrekenaar te gebruik waar toepaslik, en tussen SI-eenhede om te reken (mm² ↔ cm² ↔ m² ↔ km²).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eenhede omgeskakel')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('berekeninge')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">SI-eenheidomskakelings vir oppervlakte</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">mm² ↔ cm²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 100')} / ${or('× 100')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">cm² ↔ m²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 10 000')} / ${or('× 10 000')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;">` +
        `<p style="font-size:0.8em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">m² ↔ km²</p>` +
        `<p style="font-size:0.9em;font-weight:700;color:#374151;margin:0;">${or('÷ 1 000 000')} / ${or('× 1 000 000')}</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Probleemoplossingstappe</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Lees noukeurig: bepaal of jy omtrek (afstand rondom) of oppervlakte (bedekte oppervlak) nodig het.<br><strong>Stap 2</strong> — ${bl('Bereken')} met die korrekte formule, tot minstens 2 desimale plekke.<br><strong>Stap 3</strong> — ${or('Skakel eenhede om')} indien nodig.<br><strong>Stap 4</strong> — Skryf jou ${gr('finale antwoord')} met die korrekte eenheid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkelvormige tuin het ʼn radius van 3,5 m. Vind die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).',
          answer: `${gr('Oppervlakte')} = ${gr('38,47 m²')}`,
          steps: [
            `Skryf die formule: ${bl('O')} = π${bl('r')}²`,
            `Vervang: ${bl('O')} = 3,14 × ${bl('3,5')}²`,
            `Bereken: ${bl('O')} = 3,14 × 12,25 = ${bl('38,465')} ≈ ${gr('38,47 m²')}`,
          ],
        },
        {
          question: 'Skakel 25 000 cm² om na m².',
          answer: `${gr('2,5 m²')}`,
          steps: [
            `Onthou die omskakeling: ${or('1 m² = 10 000 cm²')}`,
            `Deel: ${bl('25 000')} ÷ ${or('10 000')} = ${gr('2,5 m²')}`,
          ],
        },
        {
          question: 'Sipho wil ʼn sirkelvormige swembad met radius 4,2 m omhein. Vind die lengte heining benodig (die omtrek) tot 2 desimale plekke (π = 3,14).',
          answer: `${gr('Omtrek')} = ${gr('26,38 m')}`,
          steps: [
            `Skryf die formule: ${bl('O')} = 2π${bl('r')}`,
            `Vervang: ${bl('O')} = 2 × 3,14 × ${bl('4,2')}`,
            `Bereken: ${bl('O')} = 6,28 × 4,2 = ${bl('26,376')} ≈ ${gr('26,38 m')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V11 Easy — eenheidomskakeling cm² na m² ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 30 000 cm² om na m².',
          answer: '3 m²',
          checkMode: 'auto',
          correctAnswer: '3m²',
          correctAnswers: ['3m²', '3 m²', '3'],
          explanation: '1 m² = 10 000 cm²\n30 000 ÷ 10 000 = 3 m² ✓',
        },

        // ── V12 Medium — eenheidomskakeling km² na m² ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 4,5 km² om na m².',
          answer: '4 500 000 m²',
          checkMode: 'auto',
          correctAnswer: '4500000m²',
          correctAnswers: ['4500000m²', '4 500 000 m²', '4500000', '4,500,000m²'],
          explanation: '1 km² = 1 000 000 m²\n4,5 × 1 000 000 = 4 500 000 m² ✓',
        },

        // ── V13 Medium — eenheidomskakeling m² na cm² ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 0,75 m² om na cm².',
          answer: '7 500 cm²',
          checkMode: 'auto',
          correctAnswer: '7500cm²',
          correctAnswers: ['7500cm²', '7 500 cm²', '7500'],
          explanation: '1 m² = 10 000 cm²\n0,75 × 10 000 = 7 500 cm² ✓',
        },

        // ── V14 Hard — sirkelvormige tuin-oppervlakte tot 2 desimale plekke ────
        {
          difficulty: 'Hard',
          question: 'ʼn Sirkelvormige tuin het radius 2,8 m. Vind die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).',
          answer: '24,62 m²',
          checkMode: 'auto',
          correctAnswer: '24.62m²',
          correctAnswers: ['24.62m²', '24.62 m²', '24.62', '24,62m²', '24,62 m²', '24,62'],
          explanation: 'O = πr² = 3,14 × 2,8² = 3,14 × 7,84 = 24,6176 ≈ 24,62 m² ✓',
        },

        // ── V15 Hard — omheining van sirkelvormige veld gegewe deursnee ────────
        {
          difficulty: 'Hard',
          question: 'Thabo wil ʼn sirkelvormige veld met deursnee 14 m omhein. Vind die lengte heining benodig tot 2 desimale plekke (π = 3,14).',
          answer: '43,96 m',
          checkMode: 'auto',
          correctAnswer: '43.96m',
          correctAnswers: ['43.96m', '43.96 m', '43.96', '43,96m', '43,96 m', '43,96'],
          explanation: 'r = 14 ÷ 2 = 7 m\nO = 2πr = 2 × 3,14 × 7 = 43,96 m ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve real-life perimeter and area problems involving circles and how to convert between SI area units" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a circular garden with radius labelled and a unit conversion scale from mm² to cm² to m² to km²" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en omtrek van 2D-vorms bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van die inhoud. Gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
  ],
}
