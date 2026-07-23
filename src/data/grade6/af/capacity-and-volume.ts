import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (capacity/volume roles) ───────────────────────────────────
// capacity  → blue    (#2563eb)
// volume    → green   (#16a34a)
// ml        → orange  (#ea580c)
// litres    → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Inhoud en Volume',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTI-STEP CONVERSIONS AND MIXED UNITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Meerstap-omskakelings en Gemengde Eenhede',
      icon: '🧴',
      explanation:
        `<p style="margin-bottom:16px;">Jy ken reeds die sleutelfeite ${or('1 000 ml = 1 l')} en ${re('1 000 l = 1 kl')}. Vanjaar kombineer ons hierdie feite om direk tussen ${or('ml')} en ${re('kl')} om te skakel, en om inhoudmetings met ${bl('gemengde eenhede')} te skryf — byvoorbeeld, om 2,3 l as "2 l 300 ml" uit te druk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ml')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('l')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">kl</span>` +
        `</div>` +

        // ── Conversion chain ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die omskakelingsketting</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">kl ${re('× 1 000')} → ${re('l')} ${or('× 1 000')} → ${or('ml')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">Om twee stappe op ʼn slag te maak (kl direk na ml), vermenigvuldig met <strong>albei</strong> omskakelingsfaktore agter mekaar: ${re('1 kl = 1 000 l = 1 000 000 ml')} (1 000 × 1 000). Om die ander kant toe te gaan, deel deur albei faktore agter mekaar.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omskakeling na gemengde eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om 2,3 l as l en ml te skryf: die heelgetaldeel (2) bly as ${re('l')}, en die desimale deel (0,3) word na ${or('ml')} omgeskakel deur met 1 000 te vermenigvuldig → ${or('300 ml')}. Dus 2,3 l = <strong>2 l 300 ml</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 1,5 kl direk na ml om.',
          answer: `1,5 kl = ${or('1 500 000 ml')}`,
          steps: [
            `Om van kl na ${or('ml')} te gaan beteken twee stappe op ʼn slag: kl → l → ml.`,
            `Vermenigvuldig met albei faktore: 1 000 × 1 000 = 1 000 000.`,
            `1,5 × 1 000 000 = 1 500 000.`,
            `<strong>Antwoord:</strong> 1,5 kl = ${or('1 500 000 ml')}. ✓`,
          ],
        },
        {
          question: 'Skryf 4,65 l met gemengde eenhede (l en ml).',
          answer: `4,65 l = ${re('4 l 650 ml')}`,
          steps: [
            `Die heelgetaldeel, 4, bly as ${re('l')}.`,
            `Die desimale deel, 0,65, word na ${or('ml')} omgeskakel: ${or('0,65 × 1 000 = 650 ml')}.`,
            `<strong>Antwoord:</strong> 4,65 l = ${re('4 l 650 ml')}. ✓`,
          ],
        },
        {
          question: 'Skakel 2 500 000 ml direk na kl om.',
          answer: `2 500 000 ml = ${re('2,5 kl')}`,
          steps: [
            `Om van ${or('ml')} na kl te gaan: deel deur 1 000 000.`,
            `2 500 000 ÷ 1 000 000 = 2,5.`,
            `<strong>Antwoord:</strong> 2 500 000 ml = ${re('2,5 kl')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skakel 2 kl direk na l om.',
          answer: '2000 l',
          checkMode: 'auto',
          correctAnswer: '2000',
          correctAnswers: ['2000', '2 000', '2000l', '2 000 l'],
          explanation: '1 kl = 1 000 l.\n2 × 1 000 = 2 000 l ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf 6,4 l met gemengde eenhede (l en ml).',
              correctAnswer: '6 l 400 ml',
              correctAnswers: ['6 l 400 ml', '6l400ml', '6 l400ml'],
              explanation: '0,4 l = 0,4 × 1 000 = 400 ml.\n6,4 l = 6 l 400 ml ✓',
            },
            {
              label: 'b) Skakel 0,8 kl direk na l om.',
              correctAnswer: '800',
              correctAnswers: ['800', '800l', '800 l'],
              explanation: '0,8 × 1 000 = 800 l ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Watertenk hou 2,25 kl water.\n\na) Skryf hierdie inhoud met gemengde eenhede (kl en l).\nb) Skakel hierdie inhoud direk na ml om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gemengde eenhede (kl en l)',
              correctAnswer: '2 kl 250 l',
              correctAnswers: ['2 kl 250 l', '2kl250l', '2 kl250l'],
              explanation: '0,25 kl = 0,25 × 1 000 = 250 l.\n2,25 kl = 2 kl 250 l ✓',
            },
            {
              label: 'b) Inhoud in ml',
              correctAnswer: '2250000',
              correctAnswers: ['2250000', '2 250 000'],
              explanation: '1 kl = 1 000 000 ml.\n2,25 × 1 000 000 = 2 250 000 ml ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat die volle omskakelingsketting vir inhoud van kiloliter na liter na milliliter wys, met hoe om twee stappe op ʼn slag te spring en hoe om ʼn desimale litermeting na gemengde liter- en milliliter-eenhede om te skakel',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — RELATING CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relating-capacity-and-volume',
      title: 'Inhoud en Volume Verbind',
      icon: '🧊',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Inhoud')} is die hoeveelheid wat ʼn houer kan hou, gemeet in ${or('ml')}, ${re('l')} of kl. ${gr('Volume')} is die hoeveelheid ruimte wat ʼn 3D-voorwerp inneem, gemeet in ${gr('cm³')} of ${gr('m³')}. Hierdie twee idees is direk verbind deur een sleutelfeit: ${gr('1 cm³ = 1 ml')}. Dit beteken as jy die volume van ʼn houer in cm³ ken, weet jy onmiddellik hoeveel vloeistof dit in ml kan hou!</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('inhoud')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">1 cm³ = 1 ml</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kubusvormige houer met ʼn volume van 1 cm³ hou presies 1 ml vloeistof.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">1 m³ = 1 000 l = 1 kl</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Houer met ʼn volume van 1 m³ hou presies 1 kiloliter (1 000 liter) vloeistof.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hierdie verband gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om te vind hoeveel ʼn reghoekige houer kan hou: 1) bereken sy ${gr('volume')} met ${gr('V = lengte × breedte × hoogte')} (in cm), 2) daardie getal cm³ is gelyk aan dieselfde getal ${bl('ml')}, 3) skakel om na liter indien nodig deur deur 1 000 te deel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoekige houer is 20 cm lank, 10 cm breed en 15 cm hoog. Vind sy inhoud in ml.',
          answer: `Inhoud = ${bl('3 000 ml')}`,
          steps: [
            `Bereken die ${gr('volume')}: ${gr('V = 20 × 10 × 15 = 3 000 cm³')}.`,
            `Gebruik die feit ${gr('1 cm³ = 1 ml')}: ${bl('3 000 cm³ = 3 000 ml')}.`,
            `<strong>Antwoord:</strong> Inhoud = ${bl('3 000 ml')}. ✓`,
          ],
        },
        {
          question: 'ʼn Vistenk is ʼn reghoekige prisma 50 cm lank, 30 cm breed en 40 cm hoog. Vind sy inhoud in liter.',
          answer: `Inhoud = ${bl('60 l')}`,
          steps: [
            `Bereken die ${gr('volume')}: ${gr('V = 50 × 30 × 40 = 60 000 cm³')}.`,
            `Skakel om na ml: ${bl('60 000 cm³ = 60 000 ml')}.`,
            `Skakel om na liter: ${bl('60 000 ÷ 1 000 = 60 l')}.`,
            `<strong>Antwoord:</strong> Inhoud = ${bl('60 l')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Boks het ʼn volume van 500 cm³. Vind sy inhoud in ml.',
          answer: '500 ml',
          checkMode: 'auto',
          correctAnswer: '500',
          correctAnswers: ['500', '500ml', '500 ml'],
          explanation: '1 cm³ = 1 ml, so 500 cm³ = 500 ml ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige houer is 25 cm lank, 20 cm breed en 10 cm hoog.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind sy volume (cm³).',
              correctAnswer: '5000',
              correctAnswers: ['5000', '5 000'],
              explanation: '25 × 20 × 10 = 5 000 cm³ ✓',
            },
            {
              label: 'b) Vind sy inhoud in liter.',
              correctAnswer: '5',
              correctAnswers: ['5', '5l', '5 l'],
              explanation: '5 000 cm³ = 5 000 ml = 5 000 ÷ 1 000 = 5 l ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoekige watertenk is 2 m lank, 1,5 m breed en 1 m hoog.\n\na) Vind die volume van die tenk in m³.\nb) Vind sy inhoud in kiloliter.\nc) Vind sy inhoud in liter.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volume (m³)',
              correctAnswer: '3',
              explanation: 'V = 2 × 1,5 × 1 = 3 m³ ✓',
            },
            {
              label: 'b) Inhoud (kl)',
              correctAnswer: '3',
              correctAnswers: ['3', '3kl', '3 kl'],
              explanation: '1 m³ = 1 kl, so 3 m³ = 3 kl ✓',
            },
            {
              label: 'c) Inhoud (l)',
              correctAnswer: '3000',
              correctAnswers: ['3000', '3 000'],
              explanation: '3 kl × 1 000 = 3 000 l ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ʼn kubus van presies 1 kubieke sentimeter wys wat met presies 1 milliliter water gevul word, en dan wys hoe om die inhoud van ʼn reghoekige tenk te vind deur eers sy volume te bereken',

      diagramPlaceholder:
        'Diagram wat ʼn klein 1 cm-kubus langs ʼn meetsilinder met 1 ml gemerk wys, met ʼn pyl en gelykaan-teken wat hulle verbind om te wys 1 kubieke sentimeter is gelyk aan 1 ml',

      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,80 70,80 85,65 45,65" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><polygon points="70,80 85,65 85,105 70,120" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><rect x="30" y="80" width="40" height="40" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="55" y="52" font-size="13" fill="#16a34a" font-weight="700" text-anchor="middle">1 cm³</text><line x1="30" y1="128" x2="70" y2="128" stroke="#374151" stroke-width="1"/><text x="50" y="140" font-size="11" fill="#374151" text-anchor="middle">1 cm</text><text x="115" y="106" font-size="26" fill="#0f1f3d" font-weight="700" text-anchor="middle">=</text><ellipse cx="165" cy="65" rx="20" ry="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="145" y1="65" x2="145" y2="130" stroke="#0f1f3d" stroke-width="2"/><line x1="185" y1="65" x2="185" y2="130" stroke="#0f1f3d" stroke-width="2"/><path d="M145,130 A20,6 0 0 0 185,130" fill="none" stroke="#0f1f3d" stroke-width="2"/><ellipse cx="165" cy="130" rx="20" ry="6" fill="#93c5fd"/><rect x="145" y="120" width="40" height="10" fill="#93c5fd"/><ellipse cx="165" cy="120" rx="20" ry="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/><text x="196" y="124" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">1 ml</text><text x="165" y="52" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">meetsilinder</text><text x="110" y="148" font-size="12" fill="#374151" text-anchor="middle"><tspan x="110">1 cm³ ruimte hou presies</tspan><tspan x="110" dy="15">1 ml vloeistof</tspan></text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD CAPACITY PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-capacity-problems',
      title: 'Werklike-Wêreld Inhoudprobleme',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Baie werklike-wêreld inhoudprobleme vereis dat jy ${or('tussen eenhede omskakel')} voordat jy kan optel, aftrek, vermenigvuldig of deel. Kyk altyd of al die gegewe inhoude in ${re('dieselfde eenheid')} is voordat jy bereken.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">ʼn Eenvoudige probleemoplossing-kontrolelys</p>` +
        `<p style="margin:0;color:#9a3412;">1) Wat word gevra, en in watter eenheid? 2) Is al die gegewe inhoude in ${or('dieselfde eenheid')}? Skakel eers om indien nie. 3) Watter berekening(s) word benodig? 4) Maak jou finale antwoord sin vir die situasie?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kan hou 1,5 l vrugtesap. Dit word gelykop in 6 glase uitgeskink. Hoeveel vrugtesap, in ml, kry elke glas?',
          answer: `Elke glas kry ${re('250 ml')}`,
          steps: [
            `Skakel die totaal om na ${or('ml')}: ${or('1,5 l = 1 500 ml')}.`,
            `Deel gelykop tussen 6 glase: ${re('1 500 ÷ 6 = 250 ml')}.`,
            `<strong>Antwoord:</strong> Elke glas kry ${re('250 ml')}. ✓`,
          ],
        },
        {
          question: 'ʼn Swembad hou 45 kl water. Water word teen 500 l per uur ingepomp. Hoeveel uur sal dit neem om die leë swembad vol te maak?',
          answer: `${re('90 uur')}`,
          steps: [
            `Skakel die swembad se inhoud om na liter: ${or('45 kl = 45 000 l')}.`,
            `Deel deur die pomptempo: ${re('45 000 ÷ 500 = 90 uur')}.`,
            `<strong>Antwoord:</strong> Dit sal ${re('90 uur')} neem. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn 2 l bottel vrugtesap word gelykop in 8 bekers uitgeskink. Hoeveel vrugtesap, in ml, kry elke beker?',
          answer: '250 ml',
          checkMode: 'auto',
          correctAnswer: '250',
          correctAnswers: ['250', '250ml', '250 ml'],
          explanation: '2 l = 2 000 ml.\n2 000 ÷ 8 = 250 ml ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Tenk het ʼn inhoud van 12 kl. Water word teen ʼn tempo van 300 l per uur ingepomp.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel die tenk se inhoud om na liter.',
              correctAnswer: '12000',
              correctAnswers: ['12000', '12 000'],
              explanation: '12 kl × 1 000 = 12 000 l ✓',
            },
            {
              label: 'b) Vind hoeveel uur dit neem om die leë tenk vol te maak.',
              correctAnswer: '40',
              explanation: '12 000 ÷ 300 = 40 uur ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Sapresep maak 3,6 l sap met ʼn mengsel van 2 dele water tot 1 deel konsentraat.\n\na) Vind die totale aantal dele in die mengsel.\nb) Vind die volume konsentraat wat gebruik word, in ml (1 deel = totaal ÷ totale aantal dele).\nc) Vind die volume water wat gebruik word, in ml.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Totale aantal dele',
              correctAnswer: '3',
              explanation: '2 dele water + 1 deel konsentraat = 3 dele in totaal ✓',
            },
            {
              label: 'b) Volume konsentraat (ml)',
              correctAnswer: '1200',
              correctAnswers: ['1200', '1 200'],
              explanation: '3,6 l = 3 600 ml.\n1 deel = 3 600 ÷ 3 = 1 200 ml ✓',
            },
            {
              label: 'c) Volume water (ml)',
              correctAnswer: '2400',
              correctAnswers: ['2400', '2 400'],
              explanation: '2 dele = 2 × 1 200 = 2 400 ml ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat ʼn multistap-woordprobleem oor inhoud uit die regte lewe deurwerk, met omskakeling tussen eenhede voordat daar gedeel word om ʼn hoeveelheid gelyk te verdeel of ʼn vultempo te vind',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het inhoud en volume onder die knie.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het inhoud en volume onder die knie.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Basiese eenheidomskakelings | 4-7 Meerstap kl↔ml & gemengde eenhede |
    // 8-10 Volume van reghoekige prismas | 11-14 Volume verbind met inhoud |
    // 15-19 Werklike-wêreld probleme (deel, tempo, mengsels, vergelykings)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Skakel 0,45 l na milliliter om.', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 0,45 × 1 000 = 450 ml.' },
        { difficulty: 'Easy', question: 'ʼn Medisynebottel bevat 2 500 ml stroop. Skryf hierdie hoeveelheid in liter.', checkMode: 'auto', correctAnswer: '2,5l', correctAnswers: ['2,5l', '2,5 l', '2,5', '2.5l', '2.5 l', '2.5'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 2 500 ÷ 1 000 = 2,5 l.' },
        { difficulty: 'Easy', question: 'ʼn Plaas se watertenk word tot 2,7 kl gevul. Hoeveel liter is dit?', checkMode: 'auto', correctAnswer: '2700l', correctAnswers: ['2700l', '2700 l', '2700'], explanation: 'Om kiloliter na liter om te skakel, vermenigvuldig met 1 000. 2,7 × 1 000 = 2 700 l.' },
        { difficulty: 'Easy', question: 'ʼn Opgaardam hou 3 800 l water. Skakel dit na kiloliter om.', checkMode: 'auto', correctAnswer: '3,8kl', correctAnswers: ['3,8kl', '3,8 kl', '3,8', '3.8kl', '3.8 kl', '3.8'], explanation: 'Om liter na kiloliter om te skakel, deel deur 1 000. 3 800 ÷ 1 000 = 3,8 kl.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Brandstoftenker vervoer 1,2 kl diesel. Skakel dit direk na milliliter om.', checkMode: 'auto', correctAnswer: '1200000ml', correctAnswers: ['1200000ml', '1200000 ml', '1200000', '1 200 000ml', '1 200 000 ml', '1 200 000'], explanation: 'kl na ml is ʼn twee-stap sprong: vermenigvuldig met 1 000 000. 1,2 × 1 000 000 = 1 200 000 ml.' },
        { difficulty: 'Medium', question: 'ʼn Waterreservoir bevat 2 300 000 ml water. Skakel dit direk na kiloliter om.', checkMode: 'auto', correctAnswer: '2,3kl', correctAnswers: ['2,3kl', '2,3 kl', '2,3', '2.3kl', '2.3 kl', '2.3'], explanation: 'ml na kl is ʼn twee-stap sprong: deel deur 1 000 000. 2 300 000 ÷ 1 000 000 = 2,3 kl.' },
        { difficulty: 'Medium', question: 'Skryf 3,85 l met gemengde eenhede (l en ml).', checkMode: 'auto', correctAnswer: '3l850ml', correctAnswers: ['3l850ml', '3 l 850 ml', '3l 850ml', '3 l850 ml'], explanation: 'Die heelgetaldeel, 3, bly as liter. Die desimale deel, 0,85, word na ml omgeskakel: 0,85 × 1 000 = 850 ml. Dus 3,85 l = 3 l 850 ml.' },
        { difficulty: 'Medium', question: 'Zinhle sê dat 0,6 kl gelyk is aan 6 000 ml omdat sy 0,6 met 10 000 vermenigvuldig het. Is Zinhle korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Zinhle is verkeerd. Om kl direk na ml om te skakel, moet jy met 1 000 000 vermenigvuldig, nie 10 000 nie. Die korrekte berekening is 0,6 × 1 000 000 = 600 000 ml. Zinhle het ʼn veels te klein omskakelingsfaktor gebruik, en daarom is haar antwoord 100 keer te klein.' },
        { difficulty: 'Medium', question: 'ʼn Skoenboks is 12 cm lank, 8 cm breed en 5 cm hoog. Bereken sy volume.', checkMode: 'auto', correctAnswer: '480cm3', correctAnswers: ['480cm3', '480 cm3', '480', '480cm³', '480 cm³'], explanation: 'Volume van ʼn reghoekige prisma: V = l × b × h. V = 12 × 8 × 5 = 480 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Stoorhouer het ʼn volume van 2 400 cm³. Dit is 20 cm lank en 12 cm breed. Vind sy hoogte.', checkMode: 'auto', correctAnswer: '10cm', correctAnswers: ['10cm', '10 cm', '10'], explanation: 'Aangesien V = l × b × h, is hoogte = V ÷ (l × b). Hoogte = 2 400 ÷ (20 × 12) = 2 400 ÷ 240 = 10 cm.' },
        { difficulty: 'Medium', question: 'Boks A is 10 cm by 8 cm by 6 cm. Boks B is 12 cm by 6 cm by 7 cm. Watter boks het die groter volume, en met hoeveel?', checkMode: 'auto', correctAnswer: 'B24cm3', correctAnswers: ['B24cm3', 'B, 24cm3', 'B 24cm3', 'Boks B 24cm3', 'boksB24cm3', 'B24cm³'], explanation: 'Boks A: 10 × 8 × 6 = 480 cm³. Boks B: 12 × 6 × 7 = 504 cm³. Boks B is groter, met 504 − 480 = 24 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige vistenk is 40 cm lank, 25 cm breed en 30 cm hoog. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '30l', correctAnswers: ['30l', '30 l', '30'], explanation: 'Volume: V = 40 × 25 × 30 = 30 000 cm³. Aangesien 1 cm³ = 1 ml, is dit 30 000 ml. Skakel om na liter: 30 000 ÷ 1 000 = 30 l.' },
        { difficulty: 'Medium', question: 'Kabelo sê ʼn reghoekige watertenk wat 5 m by 3 m by 1,5 m meet, het ʼn inhoud van 22,5 liter. Is Kabelo korrek? Verduidelik.', checkMode: 'self', answer: 'Kabelo is verkeerd. Die volume is V = 5 × 3 × 1,5 = 22,5 m³, maar 1 m³ = 1 kl = 1 000 l, nie 1 l nie. Die inhoud is dus 22,5 kl, wat gelyk is aan 22 500 l — nie 22,5 liter nie. Kabelo het vergeet om van kubieke meter volume na die veel groter eenheid liter om te skakel.' },
        { difficulty: 'Medium', question: 'ʼn Watertenk het ʼn inhoud van 8 000 l. Vind sy volume in m³.', checkMode: 'auto', correctAnswer: '8m3', correctAnswers: ['8m3', '8 m3', '8', '8m³', '8 m³'], explanation: 'Aangesien 1 m³ = 1 000 l, deel deur 1 000: 8 000 ÷ 1 000 = 8 m³.' },
        { difficulty: 'Medium', question: 'ʼn Swembad is 5 m lank, 3 m breed en 1,5 m diep. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '22500l', correctAnswers: ['22500l', '22500 l', '22500', '22 500l', '22 500 l', '22 500'], explanation: 'Volume: V = 5 × 3 × 1,5 = 22,5 m³. Aangesien 1 m³ = 1 000 l, is die inhoud = 22,5 × 1 000 = 22 500 l.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kan hou 18 l limonade. Dit word gelykop tussen 12 klein bottels gedeel. Hoeveel milliliter kry elke bottel?', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500 ml', '1500', '1,5l', '1,5 l'], explanation: 'Skakel om na ml: 18 × 1 000 = 18 000 ml. Deel gelykop: 18 000 ÷ 12 = 1 500 ml per bottel.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tenk met ʼn inhoud van 6 kl word teen ʼn tempo van 250 l per uur gevul. Hoeveel uur sal dit neem om die leë tenk vol te maak?', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 uur'], explanation: 'Skakel die tenk se inhoud om na liter: 6 × 1 000 = 6 000 l. Deel deur die tempo: 6 000 ÷ 250 = 24 uur.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sapresep meng konsentraat en water in die verhouding 3 : 2 om altesaam 5 l sap te maak. Vind die volume konsentraat wat benodig word, in ml.', checkMode: 'auto', correctAnswer: '3000ml', correctAnswers: ['3000ml', '3000 ml', '3000', '3l', '3 l'], explanation: 'Totale dele = 3 + 2 = 5. Totale sap in ml: 5 × 1 000 = 5 000 ml. Een deel = 5 000 ÷ 5 = 1 000 ml. Konsentraat = 3 dele = 3 × 1 000 = 3 000 ml.' },
        { difficulty: 'Hard', question: 'ʼn Brandstoftenker begin met ʼn vol vrag van 40 kl. Na aflewerings het dit 27,5 kl oor. Hoeveel kiloliter brandstof is afgelewer?', checkMode: 'auto', correctAnswer: '12,5', correctAnswers: ['12,5', '12,5kl', '12,5 kl', '12.5', '12.5kl', '12.5 kl'], explanation: 'Afgeleweerde brandstof = beginhoeveelheid − oorblywende hoeveelheid = 40 − 27,5 = 12,5 kl.' },
        { difficulty: 'Hard', question: 'ʼn Waterreservoir hou 45 kl. ʼn Pomp kan 3 000 l per uur beweeg, hetsy om dit te vul of te dreineer. As die reservoir leeg begin, hoeveel uur neem dit om heeltemal vol te word, en hoeveel liter beweeg die pomp altesaam?', checkMode: 'self', answer: 'Skakel die reservoir se inhoud om na liter: 45 × 1 000 = 45 000 l. Tyd om te vul = 45 000 ÷ 3 000 = 15 uur. Aangesien die reservoir leeg begin en vol eindig, beweeg die pomp presies 45 000 liter altesaam oor daardie 15 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue tussen ml, l en kl omskakel, volume bereken, en werklike-wêreld inhoudprobleme oplos.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip van inhoud en volume — kyk enige gemiste vrae weer na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakelings en volume weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, nuwe bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Koeldrankblik hou 0,85 l vloeistof. Skakel dit na milliliter om.', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850 ml', '850'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 0,85 × 1 000 = 850 ml.' },
        { difficulty: 'Easy', question: 'Skakel 4 200 ml na liter om.', checkMode: 'auto', correctAnswer: '4,2l', correctAnswers: ['4,2l', '4,2 l', '4,2', '4.2l', '4.2 l', '4.2'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 4 200 ÷ 1 000 = 4,2 l.' },
        { difficulty: 'Easy', question: 'ʼn Watertenk word tot 1,35 kl gevul. Hoeveel liter is dit?', checkMode: 'auto', correctAnswer: '1350l', correctAnswers: ['1350l', '1350 l', '1350'], explanation: 'Om kiloliter na liter om te skakel, vermenigvuldig met 1 000. 1,35 × 1 000 = 1 350 l.' },
        { difficulty: 'Easy', question: 'ʼn Dam bevat 6 500 l water. Skakel dit na kiloliter om.', checkMode: 'auto', correctAnswer: '6,5kl', correctAnswers: ['6,5kl', '6,5 kl', '6,5', '6.5kl', '6.5 kl', '6.5'], explanation: 'Om liter na kiloliter om te skakel, deel deur 1 000. 6 500 ÷ 1 000 = 6,5 kl.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Waterreservoir hou 2,4 kl. Skakel dit direk na milliliter om.', checkMode: 'auto', correctAnswer: '2400000ml', correctAnswers: ['2400000ml', '2400000 ml', '2400000', '2 400 000ml', '2 400 000 ml', '2 400 000'], explanation: 'kl na ml is ʼn twee-stap sprong: vermenigvuldig met 1 000 000. 2,4 × 1 000 000 = 2 400 000 ml.' },
        { difficulty: 'Medium', question: 'ʼn Brandstoftenker vervoer 750 000 ml petrol. Skakel dit direk na kiloliter om.', checkMode: 'auto', correctAnswer: '0,75kl', correctAnswers: ['0,75kl', '0,75 kl', '0,75', '0.75kl', '0.75 kl', '0.75'], explanation: 'ml na kl is ʼn twee-stap sprong: deel deur 1 000 000. 750 000 ÷ 1 000 000 = 0,75 kl.' },
        { difficulty: 'Medium', question: 'Skryf 5,08 l met gemengde eenhede (l en ml).', checkMode: 'auto', correctAnswer: '5l80ml', correctAnswers: ['5l80ml', '5 l 80 ml', '5l 80ml', '5 l80 ml'], explanation: 'Die heelgetaldeel, 5, bly as liter. Die desimale deel, 0,08, word na ml omgeskakel: 0,08 × 1 000 = 80 ml. Dus 5,08 l = 5 l 80 ml.' },
        { difficulty: 'Medium', question: 'Themba sê dat 0,15 kl gelyk is aan 15 000 ml omdat hy 0,15 met 100 000 vermenigvuldig het. Is Themba korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Themba is verkeerd. Om kl direk na ml om te skakel, moet jy met 1 000 000 vermenigvuldig, nie 100 000 nie. Die korrekte berekening is 0,15 × 1 000 000 = 150 000 ml. Themba se omskakelingsfaktor was 10 keer te klein, en daarom is sy antwoord 10 keer te klein.' },
        { difficulty: 'Medium', question: 'ʼn Stoorhouer is 15 cm lank, 10 cm breed en 6 cm hoog. Bereken sy volume.', checkMode: 'auto', correctAnswer: '900cm3', correctAnswers: ['900cm3', '900 cm3', '900', '900cm³', '900 cm³'], explanation: 'Volume van ʼn reghoekige prisma: V = l × b × h. V = 15 × 10 × 6 = 900 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Skoenboks het ʼn volume van 3 000 cm³. Dit is 25 cm lank en 10 cm breed. Vind sy hoogte.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], explanation: 'Aangesien V = l × b × h, is hoogte = V ÷ (l × b). Hoogte = 3 000 ÷ (25 × 10) = 3 000 ÷ 250 = 12 cm.' },
        { difficulty: 'Medium', question: 'Houer P meet 9 cm by 9 cm by 9 cm. Houer Q meet 10 cm by 8 cm by 10 cm. Watter houer het die groter volume, en met hoeveel?', checkMode: 'auto', correctAnswer: 'Q71cm3', correctAnswers: ['Q71cm3', 'Q, 71cm3', 'Q 71cm3', 'Houer Q 71cm3', 'houerQ71cm3', 'Q71cm³'], explanation: 'Houer P: 9 × 9 × 9 = 729 cm³. Houer Q: 10 × 8 × 10 = 800 cm³. Houer Q is groter, met 800 − 729 = 71 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige akwarium is 60 cm lank, 30 cm breed en 35 cm hoog. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '63l', correctAnswers: ['63l', '63 l', '63'], explanation: 'Volume: V = 60 × 30 × 35 = 63 000 cm³. Aangesien 1 cm³ = 1 ml, is dit 63 000 ml. Skakel om na liter: 63 000 ÷ 1 000 = 63 l.' },
        { difficulty: 'Medium', question: 'Naledi sê ʼn verkoelerboks wat 45 cm by 25 cm by 20 cm meet, het ʼn inhoud van 22 500 ml. Is Naledi korrek? Verduidelik.', checkMode: 'self', answer: 'Naledi is korrek. Die volume is V = 45 × 25 × 20 = 22 500 cm³. Aangesien 1 cm³ = 1 ml, is die inhoud presies 22 500 ml. Haar berekening pas die volume-na-inhoud reël korrek toe.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige watertenk het ʼn inhoud van 12 000 l. Vind sy volume in m³.', checkMode: 'auto', correctAnswer: '12m3', correctAnswers: ['12m3', '12 m3', '12', '12m³', '12 m³'], explanation: 'Aangesien 1 m³ = 1 000 l, deel deur 1 000: 12 000 ÷ 1 000 = 12 m³.' },
        { difficulty: 'Medium', question: 'ʼn Swembad is 4 m lank, 2,5 m breed en 1,2 m diep. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '12000l', correctAnswers: ['12000l', '12000 l', '12000', '12 000l', '12 000 l', '12 000'], explanation: 'Volume: V = 4 × 2,5 × 1,2 = 12 m³. Aangesien 1 m³ = 1 000 l, is die inhoud = 12 × 1 000 = 12 000 l.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Houer hou 15 l vrugtepons. Dit word gelykop tussen 25 klein bekers gedeel. Hoeveel milliliter kry elke beker?', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'Skakel om na ml: 15 × 1 000 = 15 000 ml. Deel gelykop: 15 000 ÷ 25 = 600 ml per beker.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tenk met ʼn inhoud van 4,5 kl word teen ʼn tempo van 150 l per uur gevul. Hoeveel uur sal dit neem om die leë tenk vol te maak?', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 uur'], explanation: 'Skakel die tenk se inhoud om na liter: 4,5 × 1 000 = 4 500 l. Deel deur die tempo: 4 500 ÷ 150 = 30 uur.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Heuningdouresep meng konsentraat en water in die verhouding 1 : 5 om altesaam 6 l drankie te maak. Vind die volume konsentraat wat benodig word, in ml.', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000 ml', '1000', '1l', '1 l'], explanation: 'Totale dele = 1 + 5 = 6. Totale drankie in ml: 6 × 1 000 = 6 000 ml. Een deel = 6 000 ÷ 6 = 1 000 ml. Konsentraat = 1 deel = 1 000 ml.' },
        { difficulty: 'Hard', question: 'Tenk X het ʼn inhoud van 8 kl en 3,6 kl is daaruit gedreineer. Tenk Y het ʼn inhoud van 7,5 kl en 2,9 kl is daaruit gedreineer. Watter tenk het meer water oor, en met hoeveel kiloliter?', checkMode: 'auto', correctAnswer: 'Y0,2kl', correctAnswers: ['Y0,2kl', 'Y, 0,2kl', 'Y 0,2kl', 'Tenk Y 0,2kl', 'tenkY0,2kl', 'Y0.2kl'], explanation: 'Tenk X oor: 8 − 3,6 = 4,4 kl. Tenk Y oor: 7,5 − 2,9 = 4,6 kl. Tenk Y het meer oor, met 4,6 − 4,4 = 0,2 kl.' },
        { difficulty: 'Hard', question: 'ʼn Waterreservoir hou 36 kl. ʼn Pomp kan 2 400 l per uur beweeg, hetsy om dit te vul of te dreineer. As die reservoir leeg begin, hoeveel uur neem dit om heeltemal vol te word, en hoeveel liter beweeg die pomp altesaam?', checkMode: 'self', answer: 'Skakel die reservoir se inhoud om na liter: 36 × 1 000 = 36 000 l. Tyd om te vul = 36 000 ÷ 2 400 = 15 uur. Aangesien die reservoir leeg begin en vol eindig, beweeg die pomp presies 36 000 liter altesaam oor daardie 15 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue tussen ml, l en kl omskakel, volume bereken, en werklike-wêreld inhoudprobleme oplos.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn stewige begrip — kyk enige gemiste vrae weer na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakelings en volume weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-wêreld kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Klein sapbottel hou 0,6 l. Skakel dit na milliliter om.', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 0,6 × 1 000 = 600 ml.' },
        { difficulty: 'Easy', question: 'ʼn Koeldrankbottel hou 3 400 ml. Skryf hierdie hoeveelheid in liter.', checkMode: 'auto', correctAnswer: '3,4l', correctAnswers: ['3,4l', '3,4 l', '3,4', '3.4l', '3.4 l', '3.4'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 3 400 ÷ 1 000 = 3,4 l.' },
        { difficulty: 'Easy', question: 'ʼn Munisipale watertenk word tot 4,25 kl gevul. Hoeveel liter is dit?', checkMode: 'auto', correctAnswer: '4250l', correctAnswers: ['4250l', '4250 l', '4250'], explanation: 'Om kiloliter na liter om te skakel, vermenigvuldig met 1 000. 4,25 × 1 000 = 4 250 l.' },
        { difficulty: 'Easy', question: 'ʼn Dam hou 9 200 l water. Skakel dit na kiloliter om.', checkMode: 'auto', correctAnswer: '9,2kl', correctAnswers: ['9,2kl', '9,2 kl', '9,2', '9.2kl', '9.2 kl', '9.2'], explanation: 'Om liter na kiloliter om te skakel, deel deur 1 000. 9 200 ÷ 1 000 = 9,2 kl.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Brandstoftenker vervoer 3,6 kl diesel. Skakel dit direk na milliliter om.', checkMode: 'auto', correctAnswer: '3600000ml', correctAnswers: ['3600000ml', '3600000 ml', '3600000', '3 600 000ml', '3 600 000 ml', '3 600 000'], explanation: 'kl na ml is ʼn twee-stap sprong: vermenigvuldig met 1 000 000. 3,6 × 1 000 000 = 3 600 000 ml.' },
        { difficulty: 'Medium', question: 'ʼn Waterreservoir bevat 1 850 000 ml water. Skakel dit direk na kiloliter om.', checkMode: 'auto', correctAnswer: '1,85kl', correctAnswers: ['1,85kl', '1,85 kl', '1,85', '1.85kl', '1.85 kl', '1.85'], explanation: 'ml na kl is ʼn twee-stap sprong: deel deur 1 000 000. 1 850 000 ÷ 1 000 000 = 1,85 kl.' },
        { difficulty: 'Medium', question: 'Skryf 7,06 l met gemengde eenhede (l en ml).', checkMode: 'auto', correctAnswer: '7l60ml', correctAnswers: ['7l60ml', '7 l 60 ml', '7l 60ml', '7 l60 ml'], explanation: 'Die heelgetaldeel, 7, bly as liter. Die desimale deel, 0,06, word na ml omgeskakel: 0,06 × 1 000 = 60 ml. Dus 7,06 l = 7 l 60 ml.' },
        { difficulty: 'Medium', question: 'Refilwe sê dat 0,025 kl gelyk is aan 250 ml omdat sy 0,025 met 10 000 vermenigvuldig het. Is Refilwe korrek? Verduidelik die fout, indien enige.', checkMode: 'self', answer: 'Refilwe is verkeerd. Om kl direk na ml om te skakel, moet jy met 1 000 000 vermenigvuldig, nie 10 000 nie. Die korrekte berekening is 0,025 × 1 000 000 = 25 000 ml. Refilwe se omskakelingsfaktor was 100 keer te klein, en daarom is haar antwoord 100 keer te klein.' },
        { difficulty: 'Medium', question: 'ʼn Stoorhouer is 20 cm lank, 15 cm breed en 8 cm hoog. Bereken sy volume.', checkMode: 'auto', correctAnswer: '2400cm3', correctAnswers: ['2400cm3', '2400 cm3', '2400', '2400cm³', '2400 cm³', '2 400cm3', '2 400 cm3'], explanation: 'Volume van ʼn reghoekige prisma: V = l × b × h. V = 20 × 15 × 8 = 2 400 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Skoenboks het ʼn volume van 1 800 cm³. Dit is 15 cm lank en 8 cm breed. Vind sy hoogte.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], explanation: 'Aangesien V = l × b × h, is hoogte = V ÷ (l × b). Hoogte = 1 800 ÷ (15 × 8) = 1 800 ÷ 120 = 15 cm.' },
        { difficulty: 'Medium', question: 'Houer M meet 14 cm by 6 cm by 6 cm. Houer N meet 8 cm by 8 cm by 8 cm. Watter houer het die groter volume, en met hoeveel?', checkMode: 'auto', correctAnswer: 'N8cm3', correctAnswers: ['N8cm3', 'N, 8cm3', 'N 8cm3', 'Houer N 8cm3', 'houerN8cm3', 'N8cm³'], explanation: 'Houer M: 14 × 6 × 6 = 504 cm³. Houer N: 8 × 8 × 8 = 512 cm³. Houer N is groter, met 512 − 504 = 8 cm³.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige vistenk is 50 cm lank, 20 cm breed en 25 cm hoog. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '25l', correctAnswers: ['25l', '25 l', '25'], explanation: 'Volume: V = 50 × 20 × 25 = 25 000 cm³. Aangesien 1 cm³ = 1 ml, is dit 25 000 ml. Skakel om na liter: 25 000 ÷ 1 000 = 25 l.' },
        { difficulty: 'Medium', question: 'Bongani sê ʼn verkoelerboks wat 20 cm by 15 cm by 8 cm meet, het ʼn inhoud van 2 400 ml. Is Bongani korrek? Verduidelik.', checkMode: 'self', answer: 'Bongani is korrek. Die volume is V = 20 × 15 × 8 = 2 400 cm³. Aangesien 1 cm³ = 1 ml, is die inhoud presies 2 400 ml. Sy berekening pas die volume-na-inhoud reël korrek toe.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige watertenk het ʼn inhoud van 15 000 l. Vind sy volume in m³.', checkMode: 'auto', correctAnswer: '15m3', correctAnswers: ['15m3', '15 m3', '15', '15m³', '15 m³'], explanation: 'Aangesien 1 m³ = 1 000 l, deel deur 1 000: 15 000 ÷ 1 000 = 15 m³.' },
        { difficulty: 'Medium', question: 'ʼn Swembad is 6 m lank, 3 m breed en 1,5 m diep. Vind sy inhoud in liter.', checkMode: 'auto', correctAnswer: '27000l', correctAnswers: ['27000l', '27000 l', '27000', '27 000l', '27 000 l', '27 000'], explanation: 'Volume: V = 6 × 3 × 1,5 = 27 m³. Aangesien 1 m³ = 1 000 l, is die inhoud = 27 × 1 000 = 27 000 l.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kan hou 21 l ystee. Dit word gelykop tussen 14 bottels gedeel. Hoeveel milliliter kry elke bottel?', checkMode: 'auto', correctAnswer: '1500ml', correctAnswers: ['1500ml', '1500 ml', '1500', '1,5l', '1,5 l'], explanation: 'Skakel om na ml: 21 × 1 000 = 21 000 ml. Deel gelykop: 21 000 ÷ 14 = 1 500 ml per bottel.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Tenk met ʼn inhoud van 4,8 kl word teen ʼn tempo van 400 l per uur gevul. Hoeveel uur sal dit neem om die leë tenk vol te maak?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 uur'], explanation: 'Skakel die tenk se inhoud om na liter: 4,8 × 1 000 = 4 800 l. Deel deur die tempo: 4 800 ÷ 400 = 12 uur.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Konsentraatdrankresep meng konsentraat en water in die verhouding 1 : 3 om altesaam 4 l drankie te maak. Vind die volume konsentraat wat benodig word, in ml.', checkMode: 'auto', correctAnswer: '1000ml', correctAnswers: ['1000ml', '1000 ml', '1000', '1l', '1 l'], explanation: 'Totale dele = 1 + 3 = 4. Totale drankie in ml: 4 × 1 000 = 4 000 ml. Een deel = 4 000 ÷ 4 = 1 000 ml. Konsentraat = 1 deel = 1 000 ml.' },
        { difficulty: 'Hard', question: 'Tenk M het ʼn inhoud van 12 kl en 4 750 l is daaruit gedreineer. Tenk N het ʼn inhoud van 11,5 kl en 4 200 l is daaruit gedreineer. Watter tenk het meer water oor, en met hoeveel liter?', checkMode: 'auto', correctAnswer: 'N50l', correctAnswers: ['N50l', 'N, 50l', 'N 50l', 'Tenk N 50l', 'tenkN50l'], explanation: 'Tenk M oor: 12 000 − 4 750 = 7 250 l. Tenk N oor: 11 500 − 4 200 = 7 300 l. Tenk N het meer oor, met 7 300 − 7 250 = 50 l.' },
        { difficulty: 'Hard', question: 'ʼn Waterreservoir hou 27 kl. ʼn Pomp kan 1 800 l per uur beweeg, hetsy om dit te vul of te dreineer. As die reservoir leeg begin, hoeveel uur neem dit om heeltemal vol te word, en hoeveel liter beweeg die pomp altesaam?', checkMode: 'self', answer: 'Skakel die reservoir se inhoud om na liter: 27 × 1 000 = 27 000 l. Tyd om te vul = 27 000 ÷ 1 800 = 15 uur. Aangesien die reservoir leeg begin en vol eindig, beweeg die pomp presies 27 000 liter altesaam oor daardie 15 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan eenheidomskakelings, volumeberekeninge en inhoudprobleemoplossing op werklike-wêreld situasies toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn stewige begrip van hierdie vaardighede — kyk enige gemiste vrae weer na.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor volume en werklike-wêreld probleme weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ] as PracticeSet[],
}
