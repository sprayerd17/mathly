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
          correctAnswer: '31,4cm',
          correctAnswers: ['31.4cm', '31.4 cm', '31.4', '31,4cm', '31,4 cm', '31,4'],
          explanation: 'O = 2πr = 2 × 3,14 × 5 = 31,4 cm ✓',
        },

        // ── V2 Medium — oppervlakte gegewe radius ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn sirkel met radius 7 cm (π = 3,14).',
          answer: '153,86 cm²',
          checkMode: 'auto',
          correctAnswer: '153,86cm²',
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
          correctAnswer: '22,61m',
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
        'Kort video wat wys hoe om die omtrek- en oppervlakteformules vir sirkels te gebruik met π = 3,14, met uitgewerkte voorbeelde',

      diagramPlaceholder:
        'Diagram van ʼn sirkel met radius gemerk in blou, deursnee gemerk in rooi, omtrek gemerk in groen en oppervlaktegebied gemerk in oranje',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="110" cy="120" r="78" fill="#fed7aa" fill-opacity="0.4" stroke="#16a34a" stroke-width="3"/>' +
        '<line x1="32" y1="120" x2="188" y2="120" stroke="#dc2626" stroke-width="2.5"/>' +
        '<line x1="110" y1="120" x2="110" y2="42" stroke="#2563eb" stroke-width="2.5"/>' +
        '<circle cx="110" cy="120" r="3.5" fill="#374151"/>' +
        '<text x="110" y="16" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">Omtrek</text>' +
        '<text x="118" y="78" font-size="13" font-weight="700" fill="#2563eb">Radius</text>' +
        '<text x="60" y="136" font-size="13" font-weight="700" fill="#dc2626">Deursnee</text>' +
        '<text x="150" y="165" font-size="13" font-weight="700" fill="#ea580c">Oppervlakte</text>' +
        '</svg>',
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
          correctAnswer: '45,87cm²',
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
        'Kort video wat wys hoe om ʼn L-vorm en ʼn vyfhoek in reghoeke en driehoeke te ontbind om die totale oppervlakte te vind',

      diagramPlaceholder:
        'ʼn Vyfhoekvorm verdeel in ʼn reghoek en ʼn driehoek, met elke gedeelte gemerk met sy dimensies',

      diagramSvg:
        '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="40,170 180,170 180,90 110,30 40,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="40" y1="90" x2="180" y2="90" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,4"/>' +
        '<line x1="110" y1="30" x2="110" y2="90" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<rect x="104" y="84" width="8" height="8" fill="none" stroke="#9ca3af" stroke-width="1.2"/>' +
        '<text x="110" y="135" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">Reghoek</text>' +
        '<text x="130" y="65" text-anchor="start" font-size="12" font-weight="700" fill="#7c3aed">Driehoek</text>' +
        '<text x="110" y="188" text-anchor="middle" font-size="12" fill="#374151">basis = 8 cm</text>' +
        '<text x="20" y="132" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90 20 132)">hoogte = 5 cm</text>' +
        '<text x="152" y="55" text-anchor="middle" font-size="11" fill="#374151">hoogte = 3 cm</text>' +
        '</svg>',
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
          correctAnswer: '24,62m²',
          correctAnswers: ['24.62m²', '24.62 m²', '24.62', '24,62m²', '24,62 m²', '24,62'],
          explanation: 'O = πr² = 3,14 × 2,8² = 3,14 × 7,84 = 24,6176 ≈ 24,62 m² ✓',
        },

        // ── V15 Hard — omheining van sirkelvormige veld gegewe deursnee ────────
        {
          difficulty: 'Hard',
          question: 'Thabo wil ʼn sirkelvormige veld met deursnee 14 m omhein. Vind die lengte heining benodig tot 2 desimale plekke (π = 3,14).',
          answer: '43,96 m',
          checkMode: 'auto',
          correctAnswer: '43,96m',
          correctAnswers: ['43.96m', '43.96 m', '43.96', '43,96m', '43,96 m', '43,96'],
          explanation: 'r = 14 ÷ 2 = 7 m\nO = 2πr = 2 × 3,14 × 7 = 43,96 m ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om werklike-lewe omtrek- en oppervlakteprobleme met sirkels op te los en hoe om tussen SI-oppervlakte-eenhede om te reken',
    },
  ],

  practiceSets: [
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Oppervlakte en omtrek van driehoeke ───────────────────────
        { difficulty: 'Easy', question: 'ʼn Driehoekige vlag het ʼn basis van 12 cm en ʼn hoogte van 9 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '54 cm²', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 cm²', '54cm²'], explanation: 'O = ½ × b × h = 0,5 × 12 × 9 = 54 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige tuinbedding het sye van 8 m, 9 m en 7 m, soos getoon. Bereken die omtrek daarvan.', answer: '24 m', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 m', '24m'], explanation: 'Tel al drie sye bymekaar: O = 8 + 9 + 7 = 24 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">9 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige seil het ʼn oppervlakte van 54 m². Die basis daarvan is 12 m. Vind die hoogte, soos getoon.', answer: '9 m', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 m', '9m'], explanation: 'O = ½ × b × h\n54 = ½ × 12 × h\n54 = 6h\nh = 9 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="124" y="90.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="start">?</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 54 m²</text></svg>' },

        // ── Blok 2: Oppervlakte en omtrek van parallelogramme en trapesiums ───
        { difficulty: 'Easy', question: 'ʼn Parallelogramvormige teël het ʼn basis van 14 cm en ʼn hoogte van 8 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '112 cm²', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112', '112 cm²', '112cm²'], explanation: 'O = b × h = 14 × 8 = 112 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogramvormige erf het skuinssye van 9 m en 6 m, soos getoon. Bereken die omtrek daarvan.', answer: '30 m', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 m', '30m'], explanation: 'ʼn Parallelogram het twee pare gelyke sye.\nO = 2(9 + 6) = 2(15) = 30 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesiumvormige tuinbedding het parallelle sye van 10 m en 16 m, en ʼn hoogte van 6 m, soos getoon. Vind die oppervlakte daarvan.', answer: '78 m²', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78 m²', '78m²'], explanation: 'O = ½ × (a + b) × h = 0,5 × (10 + 16) × 6 = 0,5 × 26 × 6 = 78 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">16 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">6 m</text></svg>' },

        // ── Blok 3: Omtrek van sirkels ──────────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige horlosiewyserplaat het ʼn radius van 6 cm, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '37,68 cm', checkMode: 'auto', correctAnswer: '37,68cm', correctAnswers: ['37.68cm', '37.68 cm', '37.68', '37,68cm', '37,68 cm', '37,68'], explanation: 'O = 2πr = 2 × 3,14 × 6 = 37,68 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafel het ʼn deursnee van 10 cm, soos getoon. Vind die omtrek daarvan tot 2 desimale plekke (π = 3,14).', answer: '31,4 cm', checkMode: 'auto', correctAnswer: '31,4cm', correctAnswers: ['31.4cm', '31.4 cm', '31.4', '31,4cm', '31,4 cm', '31,4'], explanation: 'O = πd = 3,14 × 10 = 31,4 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige atletiekbaan het ʼn omtrek van 37,68 m (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '6 m', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 m', '6m'], explanation: 'O = 2πr\n37,68 = 2 × 3,14 × r\n37,68 = 6,28r\nr = 6 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 37.68 m</text></svg>' },

        // ── Blok 4: Oppervlakte van sirkels ──────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige onderlegger het ʼn radius van 5 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '78,5 cm²', checkMode: 'auto', correctAnswer: '78,5cm²', correctAnswers: ['78.5cm²', '78.5 cm²', '78.5', '78,5cm²', '78,5 cm²', '78,5'], explanation: 'O = πr² = 3,14 × 5² = 3,14 × 25 = 78,5 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige pizza het ʼn deursnee van 12 cm, soos getoon. Vind die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '113,04 cm²', checkMode: 'auto', correctAnswer: '113,04cm²', correctAnswers: ['113.04cm²', '113.04 cm²', '113.04', '113,04cm²', '113,04 cm²', '113,04'], explanation: 'r = d ÷ 2 = 12 ÷ 2 = 6 cm\nO = πr² = 3,14 × 6² = 3,14 × 36 = 113,04 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">12 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige dam het ʼn oppervlakte van 200,96 m² (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '8 m', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 m', '8m'], explanation: 'O = πr²\n200,96 = 3,14 × r²\nr² = 200,96 ÷ 3,14 = 64\nr = √64 = 8 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 200.96 m²</text></svg>' },

        // ── Blok 5: Oppervlakte van saamgestelde 2D-figure ──────────────────────
        { difficulty: 'Medium', question: 'ʼn Huisvormige bord bestaan uit ʼn reghoek 16 cm breed en 10 cm hoog, met ʼn driehoekige dak bo-op met basis 16 cm en hoogte 5 cm, soos getoon. Vind die totale oppervlakte van die bord.', answer: '200 cm²', checkMode: 'auto', correctAnswer: '200', correctAnswers: ['200', '200 cm²', '200cm²'], explanation: 'Reghoek-oppervlakte = 16 × 10 = 160 cm²\nDriehoek-oppervlakte = ½ × 16 × 5 = 40 cm²\nTotaal = 160 + 40 = 200 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">5 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">10 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vorm bestaan uit ʼn reghoek 14 cm by 9 cm met ʼn halfsirkel met radius 4 cm uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '100,88 cm²', checkMode: 'auto', correctAnswer: '100,88cm²', correctAnswers: ['100.88cm²', '100.88 cm²', '100.88', '100,88cm²', '100,88 cm²', '100,88'], explanation: 'Reghoek-oppervlakte = 14 × 9 = 126 cm²\nHalfsirkel-oppervlakte = ½ × π × 4² = ½ × 3,14 × 16 = 25,12 cm²\nOorblywende oppervlakte = 126 − 25,12 = 100,88 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">9 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 15 m by 12 m, soos getoon, met ʼn reghoekige hoek van 6 m by 5 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '150 m²', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 m²', '150m²'], explanation: 'Buitenste reghoek = 15 × 12 = 180 m²\nOntbrekende hoek = 6 × 5 = 30 m²\nVloeroppervlakte = 180 − 30 = 150 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">12 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">5 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn L-vormige patio bestaan uit ʼn reghoek van 10 m by 6 m saam met ʼn reghoek van 4 m by 3 m, soos getoon. Vind die totale oppervlakte daarvan.', answer: '72 m²', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 m²', '72m²'], explanation: 'Oppervlakte 1 = 10 × 6 = 60 m²\nOppervlakte 2 = 4 × 3 = 12 m²\nTotaal = 60 + 12 = 72 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">6 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">3 m</text></svg>' },

        // ── Blok 6: Toegepaste / veelstap werklike-lewe woordprobleme ─────────
        { difficulty: 'Hard', question: 'ʼn Boer wil ʼn reghoekige land van 22 m by 14 m omhein, met draad wat R25 per meter kos. Bereken die totale koste van die draad.', answer: 'R1800', checkMode: 'auto', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Omtrek = 2 × (22 + 14) = 2 × 36 = 72 m\nKoste = 72 × R25 = R1 800 ✓' },
        { difficulty: 'Hard', question: 'ʼn Atleet hardloop 4 rondtes van ʼn sirkelvormige baan met radius 35 m, soos getoon. Vind die totale afstand hardgeloop tot 2 desimale plekke (π = 3,14).', answer: '879,2 m', checkMode: 'auto', correctAnswer: '879,2m', correctAnswers: ['879.2m', '879.2 m', '879.2', '879,2m', '879,2 m', '879,2'], explanation: 'Een rondte = O = 2πr = 2 × 3,14 × 35 = 219,8 m\nTotale afstand = 4 × 219,8 = 879,2 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">4 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Naledi sê ʼn sirkel met radius 7 cm het ʼn groter oppervlakte as ʼn vierkant met sye van 12 cm. Is sy korrek? Wys jou berekeninge om te verduidelik.', answer: 'Ja — die sirkel het ʼn oppervlakte van πr² = 3,14 × 7² = 153,86 cm², terwyl die vierkant ʼn oppervlakte van 12² = 144 cm² het. Aangesien 153,86 cm² groter is as 144 cm², is Naledi korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 3 m, soos getoon. Bemarking kos R45 per m². Vind die totale koste om die blombedding met bemarking te bedek, tot die naaste rand (π = 3,14).', answer: 'R1272', checkMode: 'auto', correctAnswer: 'R1272', correctAnswers: ['R1272', '1272', 'R1271.70', 'R1 272'], explanation: 'O = πr² = 3,14 × 3² = 3,14 × 9 = 28,26 m²\nKoste = 28,26 × R45 = R1 271,70 ≈ R1 272 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte en omtrek van driehoeke, vierhoeke, sirkels en saamgestelde figure bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige gemiste vrae weer deur en probeer ʼn ander stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Oppervlakte en omtrek van driehoeke ───────────────────────
        { difficulty: 'Easy', question: 'ʼn Driehoekige banier het ʼn basis van 15 cm en ʼn hoogte van 8 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '60 cm²', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 cm²', '60cm²'], explanation: 'O = ½ × b × h = 0,5 × 15 × 8 = 60 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige blombedding het sye van 10 m, 11 m en 9 m, soos getoon. Bereken die omtrek daarvan.', answer: '30 m', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 m', '30m'], explanation: 'Tel al drie sye bymekaar: O = 10 + 11 + 9 = 30 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">11 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">9 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige seil het ʼn oppervlakte van 84 m². Die basis daarvan is 14 m. Vind die hoogte, soos getoon.', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m', '12m'], explanation: 'O = ½ × b × h\n84 = ½ × 14 × h\n84 = 7h\nh = 12 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">14 m</text><text x="124" y="90.0" font-size="15" fill="#ea580c" font-weight="700" text-anchor="start">?</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 84 m²</text></svg>' },

        // ── Blok 2: Oppervlakte en omtrek van parallelogramme en trapesiums ───
        { difficulty: 'Easy', question: 'ʼn Parallelogramvormige teël het ʼn basis van 18 cm en ʼn hoogte van 10 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '180 cm²', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 cm²', '180cm²'], explanation: 'O = b × h = 18 × 10 = 180 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">10 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogramvormige erf het skuinssye van 11 m en 7 m, soos getoon. Bereken die omtrek daarvan.', answer: '36 m', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 m', '36m'], explanation: 'ʼn Parallelogram het twee pare gelyke sye.\nO = 2(11 + 7) = 2(18) = 36 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">7 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesiumvormige tuinbedding het parallelle sye van 8 m en 14 m, en ʼn hoogte van 5 m, soos getoon. Vind die oppervlakte daarvan.', answer: '55 m²', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 m²', '55m²'], explanation: 'O = ½ × (a + b) × h = 0,5 × (8 + 14) × 5 = 0,5 × 22 × 5 = 55 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">14 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">5 m</text></svg>' },

        // ── Blok 3: Omtrek van sirkels ──────────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige horlosiewyserplaat het ʼn radius van 9 cm, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '56,52 cm', checkMode: 'auto', correctAnswer: '56,52cm', correctAnswers: ['56.52cm', '56.52 cm', '56.52', '56,52cm', '56,52 cm', '56,52'], explanation: 'O = 2πr = 2 × 3,14 × 9 = 56,52 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafel het ʼn deursnee van 20 cm, soos getoon. Vind die omtrek daarvan tot 2 desimale plekke (π = 3,14).', answer: '62,8 cm', checkMode: 'auto', correctAnswer: '62,8cm', correctAnswers: ['62.8cm', '62.8 cm', '62.8', '62,8cm', '62,8 cm', '62,8'], explanation: 'O = πd = 3,14 × 20 = 62,8 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">20 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige atletiekbaan het ʼn omtrek van 62,8 m (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 m', '10m'], explanation: 'O = 2πr\n62,8 = 2 × 3,14 × r\n62,8 = 6,28r\nr = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 62.8 m</text></svg>' },

        // ── Blok 4: Oppervlakte van sirkels ──────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige onderlegger het ʼn radius van 9 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '254,34 cm²', checkMode: 'auto', correctAnswer: '254,34cm²', correctAnswers: ['254.34cm²', '254.34 cm²', '254.34', '254,34cm²', '254,34 cm²', '254,34'], explanation: 'O = πr² = 3,14 × 9² = 3,14 × 81 = 254,34 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige pizza het ʼn deursnee van 18 cm, soos getoon. Vind die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '254,34 cm²', checkMode: 'auto', correctAnswer: '254,34cm²', correctAnswers: ['254.34cm²', '254.34 cm²', '254.34', '254,34cm²', '254,34 cm²', '254,34'], explanation: 'r = d ÷ 2 = 18 ÷ 2 = 9 cm\nO = πr² = 3,14 × 9² = 3,14 × 81 = 254,34 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">18 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige dam het ʼn oppervlakte van 113,04 m² (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '6 m', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 m', '6m'], explanation: 'O = πr²\n113,04 = 3,14 × r²\nr² = 113,04 ÷ 3,14 = 36\nr = √36 = 6 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 113.04 m²</text></svg>' },

        // ── Blok 5: Oppervlakte van saamgestelde 2D-figure ──────────────────────
        { difficulty: 'Medium', question: 'ʼn Huisvormige bord bestaan uit ʼn reghoek 18 cm breed en 11 cm hoog, met ʼn driehoekige dak bo-op met basis 18 cm en hoogte 6 cm, soos getoon. Vind die totale oppervlakte van die bord.', answer: '252 cm²', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252 cm²', '252cm²'], explanation: 'Reghoek-oppervlakte = 18 × 11 = 198 cm²\nDriehoek-oppervlakte = ½ × 18 × 6 = 54 cm²\nTotaal = 198 + 54 = 252 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">6 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">11 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vorm bestaan uit ʼn reghoek 16 cm by 10 cm met ʼn halfsirkel met radius 3 cm uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '145,87 cm²', checkMode: 'auto', correctAnswer: '145,87cm²', correctAnswers: ['145.87cm²', '145.87 cm²', '145.87', '145,87cm²', '145,87 cm²', '145,87'], explanation: 'Reghoek-oppervlakte = 16 × 10 = 160 cm²\nHalfsirkel-oppervlakte = ½ × π × 3² = ½ × 3,14 × 9 = 14,13 cm²\nOorblywende oppervlakte = 160 − 14,13 = 145,87 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">10 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">3 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 17 m by 13 m, soos getoon, met ʼn reghoekige hoek van 7 m by 4 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '193 m²', checkMode: 'auto', correctAnswer: '193', correctAnswers: ['193', '193 m²', '193m²'], explanation: 'Buitenste reghoek = 17 × 13 = 221 m²\nOntbrekende hoek = 7 × 4 = 28 m²\nVloeroppervlakte = 221 − 28 = 193 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">17 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">13 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">7 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn L-vormige patio bestaan uit ʼn reghoek van 12 m by 5 m saam met ʼn reghoek van 6 m by 4 m, soos getoon. Vind die totale oppervlakte daarvan.', answer: '84 m²', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 m²', '84m²'], explanation: 'Oppervlakte 1 = 12 × 5 = 60 m²\nOppervlakte 2 = 6 × 4 = 24 m²\nTotaal = 60 + 24 = 84 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">5 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">4 m</text></svg>' },

        // ── Blok 6: Toegepaste / veelstap werklike-lewe woordprobleme ─────────
        { difficulty: 'Hard', question: 'ʼn Boer wil ʼn reghoekige land van 26 m by 16 m omhein, met draad wat R20 per meter kos. Bereken die totale koste van die draad.', answer: 'R1680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'Omtrek = 2 × (26 + 16) = 2 × 42 = 84 m\nKoste = 84 × R20 = R1 680 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer ry 3 rondtes van ʼn sirkelvormige baan met deursnee 70 m, soos getoon. Vind die totale afstand gery tot 2 desimale plekke (π = 3,14).', answer: '659,4 m', checkMode: 'auto', correctAnswer: '659,4m', correctAnswers: ['659.4m', '659.4 m', '659.4', '659,4m', '659,4 m', '659,4'], explanation: 'r = 70 ÷ 2 = 35 m\nEen rondte = O = 2πr = 2 × 3,14 × 35 = 219,8 m\nTotale afstand = 3 × 219,8 = 659,4 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">70 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">3 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Kagiso sê ʼn sirkel met radius 6 cm het ʼn groter oppervlakte as ʼn vierkant met sye van 11 cm. Is hy korrek? Wys jou berekeninge om te verduidelik.', answer: 'Nee — die sirkel het ʼn oppervlakte van πr² = 3,14 × 6² = 113,04 cm², terwyl die vierkant ʼn oppervlakte van 11² = 121 cm² het. Aangesien 113,04 cm² kleiner is as 121 cm², is Kagiso verkeerd.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 2,5 m, soos getoon. Bemarking kos R60 per m². Vind die totale koste om die blombedding met bemarking te bedek, tot die naaste rand (π = 3,14).', answer: 'R1178', checkMode: 'auto', correctAnswer: 'R1178', correctAnswers: ['R1178', '1178', 'R1177.50', 'R1 178'], explanation: 'O = πr² = 3,14 × 2,5² = 3,14 × 6,25 = 19,625 m²\nKoste = 19,625 × R60 = R1 177,50 ≈ R1 178 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">2.5 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte en omtrek van driehoeke, vierhoeke, sirkels en saamgestelde figure bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige gemiste vrae weer deur en probeer ʼn ander stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Oppervlakte en omtrek van driehoeke ───────────────────────
        { difficulty: 'Easy', question: 'ʼn Driehoekige vlaggie het ʼn basis van 20 cm en ʼn hoogte van 11 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '110 cm²', checkMode: 'auto', correctAnswer: '110', correctAnswers: ['110', '110 cm²', '110cm²'], explanation: 'O = ½ × b × h = 0,5 × 20 × 11 = 110 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">11 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige blombedding het sye van 9 m, 10 m en 8 m, soos getoon. Bereken die omtrek daarvan.', answer: '27 m', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 m', '27m'], explanation: 'Tel al drie sye bymekaar: O = 9 + 10 + 8 = 27 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="45,150 175,150 130,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="87.5" y="168" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 m</text><text x="180" y="98" font-size="13" fill="#dc2626" font-weight="700" text-anchor="start">10 m</text><text x="70" y="90" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="end">8 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Driehoekige seil het ʼn oppervlakte van 45 m². Die hoogte daarvan is 9 m. Vind die basis, soos getoon.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 m', '10m'], explanation: 'O = ½ × b × h\n45 = ½ × b × 9\n45 = 4,5b\nb = 10 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="30,150 190,150 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110.0" y="172" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="124" y="90.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 m</text><text x="110" y="18" font-size="12" fill="#374151" text-anchor="middle">Area = 45 m²</text></svg>' },

        // ── Blok 2: Oppervlakte en omtrek van parallelogramme en trapesiums ───
        { difficulty: 'Easy', question: 'ʼn Parallelogramvormige teël het ʼn basis van 16 cm en ʼn hoogte van 9 cm, soos getoon. Vind die oppervlakte daarvan.', answer: '144 cm²', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 cm²', '144cm²'], explanation: 'O = b × h = 16 × 9 = 144 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="40" x2="165" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="157" y="142" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="115.0" y="170" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">16 cm</text><text x="179" y="98.0" font-size="14" fill="#dc2626" font-weight="700" text-anchor="start">9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Parallelogramvormige erf het skuinssye van 13 m en 8 m, soos getoon. Bereken die omtrek daarvan.', answer: '42 m', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 m', '42m'], explanation: 'ʼn Parallelogram het twee pare gelyke sye.\nO = 2(13 + 8) = 2(21) = 42 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,150 175,150 165,40 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="115.0" y="170" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 m</text><text x="30" y="93" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">8 m</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Trapesiumvormige tuinbedding het parallelle sye van 12 m en 18 m, en ʼn hoogte van 7 m, soos getoon. Vind die oppervlakte daarvan.', answer: '105 m²', checkMode: 'auto', correctAnswer: '105', correctAnswers: ['105', '105 m²', '105m²'], explanation: 'O = ½ × (a + b) × h = 0,5 × (12 + 18) × 7 = 0,5 × 30 × 7 = 105 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="70,45 150,45 190,145 30,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="145" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="137" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="110.0" y="33" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 m</text><text x="110.0" y="163" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">18 m</text><text x="124" y="98" font-size="13" fill="#7c3aed" font-weight="700" text-anchor="start">7 m</text></svg>' },

        // ── Blok 3: Omtrek van sirkels ──────────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige horlosiewyserplaat het ʼn radius van 4 cm, soos getoon. Vind die omtrek daarvan (π = 3,14).', answer: '25,12 cm', checkMode: 'auto', correctAnswer: '25,12cm', correctAnswers: ['25.12cm', '25.12 cm', '25.12', '25,12cm', '25,12 cm', '25,12'], explanation: 'O = 2πr = 2 × 3,14 × 4 = 25,12 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige tafel het ʼn deursnee van 16 cm, soos getoon. Vind die omtrek daarvan tot 2 desimale plekke (π = 3,14).', answer: '50,24 cm', checkMode: 'auto', correctAnswer: '50,24cm', correctAnswers: ['50.24cm', '50.24 cm', '50.24', '50,24cm', '50,24 cm', '50,24'], explanation: 'O = πd = 3,14 × 16 = 50,24 cm ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">16 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige atletiekbaan het ʼn omtrek van 75,36 m (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m', '12m'], explanation: 'O = 2πr\n75,36 = 2 × 3,14 × r\n75,36 = 6,28r\nr = 12 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Circumference = 75.36 m</text></svg>' },

        // ── Blok 4: Oppervlakte van sirkels ──────────────────────────────────────
        { difficulty: 'Easy', question: 'ʼn Sirkelvormige onderlegger het ʼn radius van 6 cm, soos getoon. Vind die oppervlakte daarvan (π = 3,14).', answer: '113,04 cm²', checkMode: 'auto', correctAnswer: '113,04cm²', correctAnswers: ['113.04cm²', '113.04 cm²', '113.04', '113,04cm²', '113,04 cm²', '113,04'], explanation: 'O = πr² = 3,14 × 6² = 3,14 × 36 = 113,04 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelvormige pizza het ʼn deursnee van 22 cm, soos getoon. Vind die oppervlakte daarvan tot 2 desimale plekke (π = 3,14).', answer: '379,94 cm²', checkMode: 'auto', correctAnswer: '379,94cm²', correctAnswers: ['379.94cm²', '379.94 cm²', '379.94', '379,94cm²', '379,94 cm²', '379,94'], explanation: 'r = d ÷ 2 = 22 ÷ 2 = 11 cm\nO = πr² = 3,14 × 11² = 3,14 × 121 = 379,94 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="45" y1="95" x2="175" y2="95" stroke="#dc2626" stroke-width="2"/><text x="110" y="88" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle">22 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige dam het ʼn oppervlakte van 153,86 m² (π = 3,14). Vind die radius daarvan, soos getoon.', answer: '7 m', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 m', '7m'], explanation: 'O = πr²\n153,86 = 3,14 × r²\nr² = 153,86 ÷ 3,14 = 49\nr = √49 = 7 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><text x="142" y="88" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="110" y="175" font-size="12" fill="#374151" text-anchor="middle">Area = 153.86 m²</text></svg>' },

        // ── Blok 5: Oppervlakte van saamgestelde 2D-figure ──────────────────────
        { difficulty: 'Medium', question: 'ʼn Huisvormige bord bestaan uit ʼn reghoek 20 cm breed en 9 cm hoog, met ʼn driehoekige dak bo-op met basis 20 cm en hoogte 7 cm, soos getoon. Vind die totale oppervlakte van die bord.', answer: '250 cm²', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', '250 cm²', '250cm²'], explanation: 'Reghoek-oppervlakte = 20 × 9 = 180 cm²\nDriehoek-oppervlakte = ½ × 20 × 7 = 70 cm²\nTotaal = 180 + 70 = 250 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="75" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="35,75 185,75 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="75" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,4"/><rect x="102" y="67" width="8" height="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="130" y="65" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="start">7 cm</text><text x="110" y="160" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="19" y="107.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 107.5)">9 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vorm bestaan uit ʼn reghoek 18 cm by 8 cm met ʼn halfsirkel met radius 4 cm uit een kant gesny, soos getoon. Vind die oorblywende oppervlakte tot 2 desimale plekke (π = 3,14).', answer: '118,88 cm²', checkMode: 'auto', correctAnswer: '118,88cm²', correctAnswers: ['118.88cm²', '118.88 cm²', '118.88', '118,88cm²', '118,88 cm²', '118,88'], explanation: 'Reghoek-oppervlakte = 18 × 8 = 144 cm²\nHalfsirkel-oppervlakte = ½ × π × 4² = ½ × 3,14 × 16 = 25,12 cm²\nOorblywende oppervlakte = 144 − 25,12 = 118,88 cm² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M185,60 A30,30 0 0 0 185,120" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18 cm</text><text x="19" y="92.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 92.5)">8 cm</text><text x="170" y="93" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">4 cm</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn L-vormige kamer het ʼn buitenste reghoek van 19 m by 14 m, soos getoon, met ʼn reghoekige hoek van 8 m by 6 m wat ontbreek. Vind die vloeroppervlakte van die kamer.', answer: '218 m²', checkMode: 'auto', correctAnswer: '218', correctAnswers: ['218', '218 m²', '218m²'], explanation: 'Buitenste reghoek = 19 × 14 = 266 m²\nOntbrekende hoek = 8 × 6 = 48 m²\nVloeroppervlakte = 266 − 48 = 218 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="137" y="90" width="48" height="40" fill="none" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="110.0" y="25" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">19 m</text><text x="19" y="82.5" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 82.5)">14 m</text><text x="161" y="102" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">8 m</text><text x="161" y="118" font-size="11" fill="#7c3aed" font-weight="700" text-anchor="middle">6 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn L-vormige patio bestaan uit ʼn reghoek van 11 m by 7 m saam met ʼn reghoek van 5 m by 3 m, soos getoon. Vind die totale oppervlakte daarvan.', answer: '92 m²', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92 m²', '92m²'], explanation: 'Oppervlakte 1 = 11 × 7 = 77 m²\nOppervlakte 2 = 5 × 3 = 15 m²\nTotaal = 77 + 15 = 92 m² ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="35,80 120,80 120,35 185,35 185,140 35,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="80" x2="120" y2="80" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><text x="77.5" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 m</text><text x="19" y="110" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 19 110)">7 m</text><text x="152.5" y="27" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">5 m</text><text x="198" y="58" font-size="12" fill="#7c3aed" font-weight="700" text-anchor="middle">3 m</text></svg>' },

        // ── Blok 6: Toegepaste / veelstap werklike-lewe woordprobleme ─────────
        { difficulty: 'Hard', question: 'ʼn Boer wil ʼn reghoekige land van 24 m by 15 m omhein, met draad wat R30 per meter kos. Bereken die totale koste van die draad.', answer: 'R2340', checkMode: 'auto', correctAnswer: 'R2340', correctAnswers: ['R2340', '2340', 'R2 340', '2 340'], explanation: 'Omtrek = 2 × (24 + 15) = 2 × 39 = 78 m\nKoste = 78 × R30 = R2 340 ✓' },
        { difficulty: 'Hard', question: 'ʼn Atleet hardloop 5 rondtes van ʼn sirkelvormige baan met radius 35 m, soos getoon. Vind die totale afstand hardgeloop tot 2 desimale plekke (π = 3,14).', answer: '1099 m', checkMode: 'auto', correctAnswer: '1099m', correctAnswers: ['1099m', '1099 m', '1099', '1099,0m', '1099,0 m'], explanation: 'Een rondte = O = 2πr = 2 × 3,14 × 35 = 219,8 m\nTotale afstand = 5 × 219,8 = 1099 m ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">35 m</text><text x="110" y="178" font-size="12" fill="#374151" text-anchor="middle">5 laps</text></svg>' },
        { difficulty: 'Hard', question: 'Palesa sê ʼn sirkel met radius 8 cm het ʼn groter oppervlakte as ʼn vierkant met sye van 14 cm. Is sy korrek? Wys jou berekeninge om te verduidelik.', answer: 'Ja — die sirkel het ʼn oppervlakte van πr² = 3,14 × 8² = 200,96 cm², terwyl die vierkant ʼn oppervlakte van 14² = 196 cm² het. Aangesien 200,96 cm² groter is as 196 cm², is Palesa korrek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sirkelvormige blombedding het ʼn radius van 4 m, soos getoon. Bemarking kos R35 per m². Vind die totale koste om die blombedding met bemarking te bedek, tot die naaste rand (π = 3,14).', answer: 'R1758', checkMode: 'auto', correctAnswer: 'R1758', correctAnswers: ['R1758', '1758', 'R1758.40', 'R1 758'], explanation: 'O = πr² = 3,14 × 4² = 3,14 × 16 = 50,24 m²\nKoste = 50,24 × R35 = R1 758,40 ≈ R1 758 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="95" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="95" x2="175" y2="95" stroke="#2563eb" stroke-width="2"/><text x="142" y="88" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">4 m</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het oppervlakte en omtrek van driehoeke, vierhoeke, sirkels en saamgestelde figure bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan enige gemiste vrae weer deur en probeer ʼn ander stel.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en omtrek van 2D-vorms bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van die inhoud. Gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
  ],
}
