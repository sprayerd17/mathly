import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        '<VideoPlaceholder label="Short video showing the full capacity conversion chain from kilolitres to litres to millilitres, demonstrating how to jump two steps at once and how to convert a decimal litre measurement into mixed litre and millilitre units" />',
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
        '<VideoPlaceholder label="Short video showing a cube of exactly 1 cubic centimetre being filled with exactly 1 millilitre of water, then demonstrating how to find the capacity of a rectangular tank by first calculating its volume" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a small 1cm cube next to a measuring cylinder with 1ml marked, with an arrow and equals sign connecting them to show 1 cm cubed equals 1 ml" />',
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
        '<VideoPlaceholder label="Short video working through a multi-step real-world capacity word problem, converting between units before dividing to share a quantity equally or find a filling rate" />',
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
}
