import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mass units) ─────────────────────────────────────────────
// mg (milligrams) → blue   (#2563eb)
// g  (grams)      → green  (#16a34a)
// kg (kilograms)  → orange (#ea580c)
// t  (tonnes)     → red    (#dc2626)
const bl = (s: string) => `<span style="color:#2563eb;font-weight:700">${s}</span>`
const gr = (s: string) => `<span style="color:#16a34a;font-weight:700">${s}</span>`
const or = (s: string) => `<span style="color:#ea580c;font-weight:700">${s}</span>`
const re = (s: string) => `<span style="color:#dc2626;font-weight:700">${s}</span>`

export const topicData: TopicData = {
  title: 'Massa',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTI-STEP CONVERSIONS AND MIXED UNITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Meerstap-omskakelings en Gemengde Eenhede',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Jy ken reeds die sleutelfeite ${bl('1 000 mg = 1 g')}, ${gr('1 000 g = 1 kg')} en ${or('1 000 kg = 1 t')}. Vanjaar kombineer ons hierdie feite om direk om te skakel tussen eenhede wat ${bl('twee stappe uitmekaar')} is (soos mg na kg, of g na t), en om massametings met ${gr('gemengde eenhede')} te skryf — byvoorbeeld deur 2,4 kg as "2 kg 400 g" uit te druk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('g')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kg')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('t')}</span>` +
        `</div>` +

        // ── Conversion chain ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die omskakelingsketting</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${re('t')} ${re('× 1 000')} → ${or('kg')} ${or('× 1 000')} → ${gr('g')} ${gr('× 1 000')} → ${bl('mg')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">Om twee stappe te spring (bv. t direk na g), vermenigvuldig met <strong>albei</strong> omskakelingsfaktore agtereenvolgens: ${re('1 t = 1 000 kg = 1 000 000 g')} (1 000 × 1 000). In die ander rigting, deel deur albei faktore agtereenvolgens.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omskakeling na gemengde eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om 2,4 kg as kg en g te skryf: die heelgetaldeel (2) bly as ${or('kg')}, en die desimale deel (0,4) word na ${gr('g')} omgeskakel deur met 1 000 te vermenigvuldig → ${gr('400 g')}. Dus 2,4 kg = <strong>2 kg 400 g</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 2,5 t direk om na g.',
          answer: `2,5 t = ${re('2 500 000 g')}`,
          steps: [
            `Om van ${re('t')} na ${gr('g')} te gaan beteken twee stappe spring: t → kg → g.`,
            `Vermenigvuldig met albei faktore: ${re('1 000 × 1 000 = 1 000 000')}.`,
            `${re('2,5 × 1 000 000 = 2 500 000')}.`,
            `<strong>Antwoord:</strong> 2,5 t = ${re('2 500 000 g')}. ✓`,
          ],
        },
        {
          question: 'Skryf 5,75 kg met gemengde eenhede (kg en g).',
          answer: `5,75 kg = ${or('5 kg 750 g')}`,
          steps: [
            `Die heelgetaldeel, 5, bly as ${or('kg')}.`,
            `Die desimale deel, 0,75, word na ${gr('g')} omgeskakel: ${gr('0,75 × 1 000 = 750 g')}.`,
            `<strong>Antwoord:</strong> 5,75 kg = ${or('5 kg 750 g')}. ✓`,
          ],
        },
        {
          question: 'Skakel 4 200 mg direk om na g.',
          answer: `4 200 mg = ${gr('4,2 g')}`,
          steps: [
            `Om van ${bl('mg')} na ${gr('g')} te gaan: deel deur 1 000.`,
            `${bl('4 200 ÷ 1 000 = 4,2')}.`,
            `<strong>Antwoord:</strong> 4 200 mg = ${gr('4,2 g')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skakel 3 t direk om na kg.',
          answer: '3000 kg',
          checkMode: 'auto',
          correctAnswer: '3000',
          correctAnswers: ['3000', '3 000', '3000kg', '3 000 kg'],
          explanation: '1 t = 1 000 kg.\n3 × 1 000 = 3 000 kg ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf 7,2 kg met gemengde eenhede (kg en g).',
              correctAnswer: '7 kg 200 g',
              correctAnswers: ['7 kg 200 g', '7kg200g', '7 kg200g'],
              explanation: '0,2 kg = 0,2 × 1 000 = 200 g.\n7,2 kg = 7 kg 200 g ✓',
            },
            {
              label: 'b) Skakel 1,8 t direk om na kg.',
              correctAnswer: '1800',
              correctAnswers: ['1800', '1 800', '1800kg', '1 800 kg'],
              explanation: '1,8 × 1 000 = 1 800 kg ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Afleweringstrok dra ʼn lading van 3,08 t.\n\na) Skryf hierdie massa met gemengde eenhede (t en kg).\nb) Skakel hierdie massa direk om na g.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gemengde eenhede (t en kg)',
              correctAnswer: '3 t 80 kg',
              correctAnswers: ['3 t 80 kg', '3t80kg', '3 t80kg'],
              explanation: '0,08 t = 0,08 × 1 000 = 80 kg.\n3,08 t = 3 t 80 kg ✓',
            },
            {
              label: 'b) Massa in g',
              correctAnswer: '3080000',
              correctAnswers: ['3080000', '3 080 000'],
              explanation: '1 t = 1 000 000 g.\n3,08 × 1 000 000 = 3 080 000 g ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the full mass conversion chain from tonnes to kilograms to grams to milligrams, demonstrating how to jump two steps at once and how to convert a decimal kilogram measurement into mixed kg and g units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING WITH MASS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-mass-in-context',
      title: 'Berekeninge met Massa in Konteks',
      icon: '🧺',
      explanation:
        `<p style="margin-bottom:16px;">Massaprobleme behels dikwels ${or('die skalering van ʼn resep')} op of af, of die uitwerk van die ${gr('koste per eenheid van massa')}. Wanneer ʼn resep geskaleer word, word elke bestanddeel se massa met dieselfde skaalfaktor vermenigvuldig. Wanneer pryse vergelyk word, moet ons dikwels die ${gr('prys per kilogram')} vind om te sien watter opsie beter waarde bied.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaalfaktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('prys per kg')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die beter waarde vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om twee verskillend-grootte pakkies te vergelyk, deel die ${or('prys')} deur die ${bl('massa')} vir elkeen om die ${gr('prys per kilogram (of per gram)')} te vind. Die opsie met die laagste prys per eenheid bied die beter waarde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Resep vir 8 muffins benodig 240 g meel. Sipho wil 20 muffins maak. Hoeveel meel benodig hy?',
          answer: `${gr('600 g meel')}`,
          steps: [
            `Vind die ${or('skaalfaktor')}: ${or('20 ÷ 8 = 2,5')}.`,
            `Vermenigvuldig die hoeveelheid meel met die skaalfaktor: ${gr('240 × 2,5 = 600 g')}.`,
            `<strong>Antwoord:</strong> Sipho benodig ${gr('600 g')} meel. ✓`,
          ],
        },
        {
          question: 'ʼn 2 kg-sak rys kos R58, en ʼn 5 kg-sak kos R135. Watter sak bied beter waarde per kg?',
          answer: `${gr('Die 5 kg-sak')} is beter waarde`,
          steps: [
            `2 kg-sak: ${or('R58 ÷ 2 = R29')} per kg.`,
            `5 kg-sak: ${or('R135 ÷ 5 = R27')} per kg.`,
            `Vergelyk: ${gr('R27')} per kg is minder as ${or('R29')} per kg.`,
            `<strong>Antwoord:</strong> Die ${gr('5 kg-sak')} bied beter waarde. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Resep vir 6 koekies benodig 90 g botter. Hoeveel botter word benodig vir 12 koekies?',
          answer: '180 g',
          checkMode: 'auto',
          correctAnswer: '180',
          correctAnswers: ['180', '180g', '180 g'],
          explanation: 'Skaalfaktor = 12 ÷ 6 = 2.\n90 × 2 = 180 g ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn 1,5 kg-boks graankos kos R54.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die prys per kg.',
              correctAnswer: '36',
              correctAnswers: ['36', 'R36'],
              explanation: 'R54 ÷ 1,5 = R36 per kg ✓',
            },
            {
              label: 'b) Teen dieselfde prys per kg, vind die koste van ʼn 4 kg-boks.',
              correctAnswer: '144',
              correctAnswers: ['144', 'R144'],
              explanation: 'R36 × 4 = R144 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Bakkery se resep vir 15 rolletjies benodig 450 g meel en 60 g botter. Die bakkery wil 45 rolletjies maak.\n\na) Vind die skaalfaktor.\nb) Vind die massa meel benodig (g).\nc) Vind die massa botter benodig (g).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skaalfaktor',
              correctAnswer: '3',
              explanation: '45 ÷ 15 = 3 ✓',
            },
            {
              label: 'b) Massa meel benodig (g)',
              correctAnswer: '1350',
              explanation: '450 × 3 = 1 350 g ✓',
            },
            {
              label: 'c) Massa botter benodig (g)',
              correctAnswer: '180',
              explanation: '60 × 3 = 180 g ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to scale a recipe up using a scale factor, followed by an example comparing the price per kilogram of two different package sizes to find the better value" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD MASS PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-mass-problems',
      title: 'Werklike-Wêreld Massaprobleme',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Baie werklike-wêreld massaprobleme vereis dat jy ${or('tussen eenhede omskakel')} voordat jy kan optel, aftrek, vermenigvuldig of deel. Kyk altyd of al die gegewe massas in ${gr('dieselfde eenheid')} is voordat jy bereken.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">ʼn Eenvoudige probleemoplossingskontrolelys</p>` +
        `<p style="margin:0;color:#9a3412;">1) Wat word gevra, en in watter eenheid? 2) Is al die gegewe massas in ${or('dieselfde eenheid')}? Skakel eers om indien nie. 3) Watter berekening(s) word benodig? 4) Maak jou finale antwoord sin vir die situasie?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kruideniersak bevat ʼn 1,2 kg-sak rys, ʼn 750 g-sak suiker, en ʼn 500 g-pakkie pasta. Vind die totale massa, in kg.',
          answer: `Totaal = ${gr('2,45 kg')}`,
          steps: [
            `Skakel alles om na ${or('dieselfde eenheid')} (kg): 750 g = 0,75 kg, 500 g = 0,5 kg.`,
            `Tel die drie massas op: ${gr('1,2 + 0,75 + 0,5 = 2,45 kg')}.`,
            `<strong>Antwoord:</strong> Totale massa = ${gr('2,45 kg')}. ✓`,
          ],
        },
        {
          question: 'ʼn Afleweringsbestelwa kan ʼn maksimum van 1,5 t dra. Dit dra reeds 8 kratte van 85 kg elk. Hoeveel meer massa (in kg) kan dit dra?',
          answer: `${gr('820 kg meer')}`,
          steps: [
            `Skakel die maksimum lading om na kg: ${or('1,5 t = 1 500 kg')}.`,
            `Vind die massa wat reeds gelaai is: ${or('8 × 85 = 680 kg')}.`,
            `Trek af: ${gr('1 500 − 680 = 820 kg')}.`,
            `<strong>Antwoord:</strong> Die bestelwa kan ${gr('820 kg meer')} dra. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Geskenkmandjie bevat ʼn 900 g-boks tee, ʼn 1,1 kg-fles konfyt, en ʼn 600 g-sak koffie. Vind die totale massa, in kg.',
          answer: '2.6 kg',
          checkMode: 'auto',
          correctAnswer: '2.6',
          correctAnswers: ['2.6', '2,6', '2.6kg', '2,6kg'],
          explanation: '900 g = 0,9 kg, 600 g = 0,6 kg.\n0,9 + 1,1 + 0,6 = 2,6 kg ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Hyser het ʼn maksimum gewigsperk van 800 kg. 6 mense, elk met ʼn gemiddelde massa van 70 kg, is reeds in die hyser.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Vind die totale massa van die 6 mense (kg).',
              correctAnswer: '420',
              explanation: '6 × 70 = 420 kg ✓',
            },
            {
              label: 'b) Vind die oorblywende massatoelaag (kg).',
              correctAnswer: '380',
              explanation: '800 − 420 = 380 kg ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Boer oes 2,4 t mielies. Dit word in sakke van 25 kg elk verpak, en die boer verkoop elke sak vir R110.\n\na) Skakel die totale oes om na kg.\nb) Vind hoeveel sakke gevul kan word.\nc) Vind die totale bedrag verdien deur al die sakke te verkoop.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Totale oes in kg',
              correctAnswer: '2400',
              correctAnswers: ['2400', '2 400'],
              explanation: '2,4 t × 1 000 = 2 400 kg ✓',
            },
            {
              label: 'b) Aantal sakke',
              correctAnswer: '96',
              explanation: '2 400 ÷ 25 = 96 sakke ✓',
            },
            {
              label: 'c) Totale bedrag verdien',
              correctAnswer: '10560',
              correctAnswers: ['10560', 'R10560', 'R10 560', '10 560'],
              explanation: '96 × R110 = R10 560 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world mass word problem, converting between units before adding, subtracting, multiplying or dividing to reach the final answer" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het massa baasgeraak.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan dit weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het massa baasgeraak.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan dit weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
