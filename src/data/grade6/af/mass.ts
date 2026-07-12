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
        '<VideoPlaceholder label="Kort video wat die volle omskakelingsketting vir massa van ton na kilogram na gram na milligram wys, met hoe om twee stappe op ʼn slag te spring en hoe om ʼn desimale kilogrammeting na gemengde kg- en g-eenhede om te skakel" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn resep op te skaal met ʼn skaalfaktor, gevolg deur ʼn voorbeeld wat die prys per kilogram van twee verskillende pakgroottes vergelyk om die beter waarde te vind" />',
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
          answer: '2,6 kg',
          checkMode: 'auto',
          correctAnswer: '2,6',
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
        '<VideoPlaceholder label="Kort video wat ʼn multistap-woordprobleem oor massa uit die regte lewe deurwerk, met omskakeling tussen eenhede voordat daar opgetel, afgetrek, vermenigvuldig of gedeel word om die finale antwoord te kry" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings t↔kg↔g↔mg (0-4, Maklik) — brug t↔g en mg↔kg
        { difficulty: 'Easy', question: 'Skakel 4,5 t direk om na g.', answer: '4500000 g', checkMode: 'auto', correctAnswer: '4500000', correctAnswers: ['4500000', '4 500 000', '4500000g', '4 500 000 g'], explanation: 'Om van t direk na g te spring, vermenigvuldig met 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n4,5 × 1 000 000 = 4 500 000 g ✓' },
        { difficulty: 'Easy', question: 'ʼn Vragskip word gelaai met 7,25 t vrag. Wat is hierdie massa in gram?', answer: '7250000 g', checkMode: 'auto', correctAnswer: '7250000', correctAnswers: ['7250000', '7 250 000', '7250000g', '7 250 000 g'], explanation: '1 t = 1 000 000 g.\n7,25 × 1 000 000 = 7 250 000 g ✓' },
        { difficulty: 'Easy', question: 'Skakel 2 800 000 mg direk om na kg.', answer: '2,8 kg', checkMode: 'auto', correctAnswer: '2,8', correctAnswers: ['2,8', '2.8', '2,8kg', '2,8 kg'], explanation: 'Om van mg direk na kg te spring, deel deur 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n2 800 000 ÷ 1 000 000 = 2,8 kg ✓' },
        { difficulty: 'Easy', question: 'ʼn Fabriek stoor 3,2 kg van ʼn aktiewe bestanddeel in bulkvorm. Druk hierdie massa in milligram uit.', answer: '3200000 mg', checkMode: 'auto', correctAnswer: '3200000', correctAnswers: ['3200000', '3 200 000', '3200000mg', '3 200 000 mg'], explanation: '1 kg = 1 000 000 mg.\n3,2 × 1 000 000 = 3 200 000 mg ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder skakel 0,6 t na g om soos volg: "0,6 × 1 000 = 600 g." Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het net een keer met 1 000 vermenigvuldig, wat t na kg omskakel, nie t na g nie. Om van t na g te gaan is twee stappe uitmekaar, so albei faktore van 1 000 word benodig: 0,6 × 1 000 × 1 000 = 600 000 g, nie 600 g nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede (5-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Skryf 5,75 kg met gemengde eenhede (kg en g).', answer: '5 kg 750 g', checkMode: 'auto', correctAnswer: '5 kg 750 g', correctAnswers: ['5 kg 750 g', '5kg750g', '5 kg750g'], explanation: 'Die heelgetaldeel, 5, bly as kg. Die desimale deel, 0,75, word na g omgeskakel: 0,75 × 1 000 = 750 g.\n5,75 kg = 5 kg 750 g ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Afleweringsnota toon ʼn pakkie se massa as "8 kg 60 g". Skryf dit as ʼn enkele desimale getal kilogram.', answer: '8,06 kg', checkMode: 'auto', correctAnswer: '8,06', correctAnswers: ['8,06', '8.06', '8,06kg', '8,06 kg'], explanation: '60 g = 60 ÷ 1 000 = 0,06 kg.\n8 kg 60 g = 8,06 kg ✓' },
        { difficulty: 'Medium', question: 'Watter is swaarder: 4 kg 250 g of 4,3 kg? Verduidelik hoe jy weet.', answer: '4,3 kg is swaarder. Skakel om na dieselfde vorm: 4 kg 250 g = 4,25 kg, en 4,3 kg is meer as 4,25 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf 5,75 kg as "5 kg 75 g". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het vergeet om die desimale deel met 1 000 te vermenigvuldig om dit na gram om te skakel. Die desimale deel 0,75 beteken 0,75 × 1 000 = 750 g, nie 75 g nie. Dus 5,75 kg = 5 kg 750 g, nie 5 kg 75 g nie.', checkMode: 'self' },

        // Blok 3 — Resepte volgens massa skaleer (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Koekie-resep vir 8 koekies benodig 150 g meel. Bongi wil 20 koekies maak. Vind die skaalfaktor, en bereken dan hoeveel meel sy benodig.', answer: '375 g', checkMode: 'auto', correctAnswer: '375', correctAnswers: ['375', '375g', '375 g'], explanation: 'Skaalfaktor = 20 ÷ 8 = 2,5.\n150 × 2,5 = 375 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Koek-resep vir 8 mense gebruik 320 g meel en 160 g suiker. Nadia wil vir 20 mense bak. Vind die massa meel en suiker wat sy benodig.', answer: 'Meel: 800 g, Suiker: 400 g', checkMode: 'auto', correctAnswer: '800,400', correctAnswers: ['800,400', '800g,400g', 'meel800gsuiker400g', '800 g, 400 g'], explanation: 'Skaalfaktor = 20 ÷ 8 = 2,5.\nMeel: 320 × 2,5 = 800 g. Suiker: 160 × 2,5 = 400 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Broodrolletjie-resep is met ʼn faktor van 4 opgeskaal vir ʼn skoolbasaar, en benodig nou 720 g suiker. Hoeveel suiker het die oorspronklike resep benodig?', answer: '180 g', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180g', '180 g'], explanation: '"Opgeskaal" beteken die oorspronklike is met 4 vermenigvuldig, so terugwerk beteken deel: 720 ÷ 4 = 180 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakker skaleer ʼn resep van 6 rolletjies na 15 rolletjies. Sy bereken die skaalfaktor as 15 − 6 = 9. Is haar metode korrek? Verduidelik die fout en gee die korrekte skaalfaktor.', answer: 'Nee, haar metode is verkeerd. ʼn Skaalfaktor word gevind deur die nuwe hoeveelheid deur die oorspronklike hoeveelheid te deel, nie af te trek nie. Die korrekte skaalfaktor is 15 ÷ 6 = 2,5.', checkMode: 'self' },

        // Blok 4 — Prys per kilogram en waardevergelykings (13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn 1,5 kg-sak rys kos R58,50. Vind die prys per kilogram.', answer: 'R39', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', 'R39'], explanation: 'R58,50 ÷ 1,5 = R39 per kg ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop ʼn 2 kg-sak rys vir R84, en ʼn 5 kg-sak vir R195. Watter sak bied beter waarde, en met hoeveel per kg?', answer: '5 kg-sak is beter waarde, met R3 per kg', checkMode: 'auto', correctAnswer: '5kg-sak, R3 per kg', correctAnswers: ['5kg,3', '5 kg-sak met R3 per kg', '5kgsakbetermetr3perkg', '5 kg-sak, R3 per kg'], explanation: '2 kg-sak: R84 ÷ 2 = R42 per kg. 5 kg-sak: R195 ÷ 5 = R39 per kg.\nR42 − R39 = R3. Die 5 kg-sak is beter waarde, met R3 per kg ✓' },
        { difficulty: 'Medium', question: 'Rys kos R23,60 per kilogram by ʼn plaasstalletjie. Vind die koste om 3,5 kg te koop.', answer: 'R82,60', checkMode: 'auto', correctAnswer: '82,60', correctAnswers: ['82,60', '82.60', '82,6', 'R82,60', 'R82,6'], explanation: 'R23,60 × 3,5 = R82,60 ✓' },

        // Blok 5 — Meerstap werklike-wêreld massaprobleme (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Kruideniersak bevat ʼn 1,4 kg-sak mieliemeel, ʼn 650 g-sak lensies, en ʼn 300 g-sak neute. Vind die totale massa, in kg.', answer: '2,35 kg', checkMode: 'auto', correctAnswer: '2,35', correctAnswers: ['2,35', '2.35', '2,35kg', '2,35 kg'], explanation: 'Skakel om na kg: 650 g = 0,65 kg, 300 g = 0,3 kg.\n1,4 + 0,65 + 0,3 = 2,35 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsbestelwa kan ʼn maksimum van 2 t dra. Dit dra reeds 12 kratte van 95 kg elk. Hoeveel meer massa, in kg, kan dit nog dra?', answer: '860 kg', checkMode: 'auto', correctAnswer: '860', correctAnswers: ['860', '860kg', '860 kg'], explanation: 'Skakel die perk om na kg: 2 t = 2 000 kg. Massa reeds gelaai: 12 × 95 = 1 140 kg.\n2 000 − 1 140 = 860 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer verpak mielies in 8 sakke van 4,5 kg elk en verkoop dit teen R14,80 per kilogram. Vind die totale massa verpak, en die totale bedrag verdien.', answer: '36 kg, R532,80', checkMode: 'auto', correctAnswer: '36,532,80', correctAnswers: ['36kg,r532,80', '36 kg, R532,80', '36,532.80', '36kg r532,80'], explanation: 'Totale massa: 8 × 4,5 = 36 kg.\nTotaal verdien: 36 × R14,80 = R532,80 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel ʼn 750 g-sak hawermout direk by ʼn 1,2 kg-sak rys, en skryf die totaal as "1,2 + 750 = 751,2 kg". Verduidelik die fout en gee die korrekte totale massa in kg.', answer: 'Die leerder het die getalle bymekaargetel sonder om eers na dieselfde eenheid om te skakel. 750 g moet eers na kg omgeskakel word: 750 g = 0,75 kg. Tel dan op: 1,2 + 0,75 = 1,95 kg, nie 751,2 kg nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het massa-omskakelings, gemengde eenhede, skalering en werklike-wêreld massaprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en gemengde-eenheidreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings t↔kg↔g↔mg (0-4, Maklik) — brug kg↔mg en g↔t
        { difficulty: 'Easy', question: 'Skakel 2,75 kg direk om na mg.', answer: '2750000 mg', checkMode: 'auto', correctAnswer: '2750000', correctAnswers: ['2750000', '2 750 000', '2750000mg', '2 750 000 mg'], explanation: 'Om van kg direk na mg te spring, vermenigvuldig met 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n2,75 × 1 000 000 = 2 750 000 mg ✓' },
        { difficulty: 'Easy', question: 'ʼn Apteek stoor 3,6 t rou materiaal by sy pakhuis. Druk hierdie massa in gram uit.', answer: '3600000 g', checkMode: 'auto', correctAnswer: '3600000', correctAnswers: ['3600000', '3 600 000', '3600000g', '3 600 000 g'], explanation: '1 t = 1 000 000 g.\n3,6 × 1 000 000 = 3 600 000 g ✓' },
        { difficulty: 'Easy', question: 'Skakel 5 250 000 mg direk om na kg.', answer: '5,25 kg', checkMode: 'auto', correctAnswer: '5,25', correctAnswers: ['5,25', '5.25', '5,25kg', '5,25 kg'], explanation: 'Om van mg direk na kg te spring, deel deur 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n5 250 000 ÷ 1 000 000 = 5,25 kg ✓' },
        { difficulty: 'Easy', question: 'Skakel 6 400 000 g direk om na t.', answer: '6,4 t', checkMode: 'auto', correctAnswer: '6,4', correctAnswers: ['6,4', '6.4', '6,4t', '6,4 t'], explanation: 'Om van g direk na t te spring, deel deur 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n6 400 000 ÷ 1 000 000 = 6,4 t ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder skakel 0,085 t na g om soos volg: "0,085 × 1 000 = 85 g." Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het net een keer met 1 000 vermenigvuldig, wat t na kg omskakel, nie t na g nie. Om van t na g te gaan benodig albei faktore van 1 000: 0,085 × 1 000 × 1 000 = 85 000 g, nie 85 g nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede (5-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Skryf 6,25 kg met gemengde eenhede (kg en g).', answer: '6 kg 250 g', checkMode: 'auto', correctAnswer: '6 kg 250 g', correctAnswers: ['6 kg 250 g', '6kg250g', '6 kg250g'], explanation: 'Die heelgetaldeel, 6, bly as kg. Die desimale deel, 0,25, word na g omgeskakel: 0,25 × 1 000 = 250 g.\n6,25 kg = 6 kg 250 g ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Resepetiket toon ʼn mengsel se massa as "2 kg 80 g". Skryf dit as ʼn enkele desimale getal kilogram.', answer: '2,08 kg', checkMode: 'auto', correctAnswer: '2,08', correctAnswers: ['2,08', '2.08', '2,08kg', '2,08 kg'], explanation: '80 g = 80 ÷ 1 000 = 0,08 kg.\n2 kg 80 g = 2,08 kg ✓' },
        { difficulty: 'Medium', question: 'Watter is swaarder: 2 kg 600 g of 2,65 kg? Verduidelik hoe jy weet.', answer: '2,65 kg is swaarder. Skakel om na dieselfde vorm: 2 kg 600 g = 2,6 kg, en 2,65 kg is meer as 2,6 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Pakkieskaal wys 1,5 kg. ʼn Leerder skryf dit met gemengde eenhede as "1 kg 5 g". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het vergeet om die desimale deel met 1 000 te vermenigvuldig om dit na gram om te skakel. Die desimale deel 0,5 beteken 0,5 × 1 000 = 500 g, nie 5 g nie. Dus 1,5 kg = 1 kg 500 g, nie 1 kg 5 g nie.', checkMode: 'self' },

        // Blok 3 — Resepte volgens massa skaleer (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Muffin-resep vir 12 muffins benodig 180 g botter. Thabo wil 18 muffins maak. Vind die skaalfaktor, en bereken dan hoeveel botter hy benodig.', answer: '270 g', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270', '270g', '270 g'], explanation: 'Skaalfaktor = 18 ÷ 12 = 1,5.\n180 × 1,5 = 270 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Pannekoek-resep vir 12 porsies gebruik 300 g meel en 180 g botter. Zanele wil 18 porsies maak. Vind die massa meel en botter wat sy benodig.', answer: 'Meel: 450 g, Botter: 270 g', checkMode: 'auto', correctAnswer: '450,270', correctAnswers: ['450,270', '450g,270g', 'meel450gbotter270g', '450 g, 270 g'], explanation: 'Skaalfaktor = 18 ÷ 12 = 1,5.\nMeel: 300 × 1,5 = 450 g. Botter: 180 × 1,5 = 270 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Koek-resep is met ʼn faktor van 1,5 opgeskaal, en benodig nou 375 g suiker. Hoeveel suiker het die oorspronklike resep benodig?', answer: '250 g', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', '250g', '250 g'], explanation: '"Opgeskaal" beteken die oorspronklike is met 1,5 vermenigvuldig, so terugwerk beteken deel: 375 ÷ 1,5 = 250 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakker skaleer ʼn resep van 12 muffins na 30 muffins. Hy bereken die skaalfaktor as 30 − 12 = 18. Is sy metode korrek? Verduidelik die fout en gee die korrekte skaalfaktor.', answer: 'Nee, sy metode is verkeerd. ʼn Skaalfaktor word gevind deur die nuwe hoeveelheid deur die oorspronklike hoeveelheid te deel, nie af te trek nie. Die korrekte skaalfaktor is 30 ÷ 12 = 2,5.', checkMode: 'self' },

        // Blok 4 — Prys per kilogram en waardevergelykings (13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn 2,5 kg-boks mieliemeel kos R76,50. Vind die prys per kilogram.', answer: 'R30,60', checkMode: 'auto', correctAnswer: '30,60', correctAnswers: ['30,60', '30.60', '30,6', 'R30,60', 'R30,6'], explanation: 'R76,50 ÷ 2,5 = R30,60 per kg ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop ʼn 750 g-boks graankos vir R33, en ʼn 1,5 kg-boks vir R60. Watter boks bied beter waarde, en met hoeveel per kg?', answer: '1,5 kg-boks is beter waarde, met R4 per kg', checkMode: 'auto', correctAnswer: '1,5kg-boks, R4 per kg', correctAnswers: ['1,5kg,4', '1.5kg,4', '1,5 kg-boks met R4 per kg', '1,5kgboksbetermetr4perkg', '1,5 kg-boks, R4 per kg'], explanation: '750 g-boks: 750 g = 0,75 kg, dus R33 ÷ 0,75 = R44 per kg. 1,5 kg-boks: R60 ÷ 1,5 = R40 per kg.\nR44 − R40 = R4. Die 1,5 kg-boks is beter waarde, met R4 per kg ✓' },
        { difficulty: 'Medium', question: 'Mieliemeel kos R18,40 per kilogram by ʼn spazawinkel. Vind die koste om 4 kg te koop.', answer: 'R73,60', checkMode: 'auto', correctAnswer: '73,60', correctAnswers: ['73,60', '73.60', '73,6', 'R73,60', 'R73,6'], explanation: 'R18,40 × 4 = R73,60 ✓' },

        // Blok 5 — Meerstap werklike-wêreld massaprobleme (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Geskenkmandjie bevat ʼn 2,6 kg-vrugtekoek, ʼn 480 g-fles konfyt, en ʼn 750 g-boks koekies. Vind die totale massa, in kg.', answer: '3,83 kg', checkMode: 'auto', correctAnswer: '3,83', correctAnswers: ['3,83', '3.83', '3,83kg', '3,83 kg'], explanation: 'Skakel om na kg: 480 g = 0,48 kg, 750 g = 0,75 kg.\n2,6 + 0,48 + 0,75 = 3,83 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Hyser het ʼn maksimum gewigsperk van 900 kg. 7 mense, elk met ʼn gemiddelde massa van 68 kg, is reeds in die hyser. Hoeveel meer massa, in kg, kan die hyser nog dra?', answer: '424 kg', checkMode: 'auto', correctAnswer: '424', correctAnswers: ['424', '424kg', '424 kg'], explanation: 'Massa reeds in die hyser: 7 × 68 = 476 kg.\n900 − 476 = 424 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Markverkoper verpak uie in 15 bokse van 2,4 kg elk en verkoop dit teen R9,60 per kilogram. Vind die totale massa verpak, en die totale bedrag verdien.', answer: '36 kg, R345,60', checkMode: 'auto', correctAnswer: '36,345,60', correctAnswers: ['36kg,r345,60', '36 kg, R345,60', '36,345.60', '36kg r345,60'], explanation: 'Totale massa: 15 × 2,4 = 36 kg.\nTotaal verdien: 36 × R9,60 = R345,60 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel ʼn 480 g-blik boontjies direk by ʼn 2,1 kg-boks groente, en skryf die totaal as "2,1 + 480 = 482,1 kg". Verduidelik die fout en gee die korrekte totale massa in kg.', answer: 'Die leerder het die getalle bymekaargetel sonder om eers na dieselfde eenheid om te skakel. 480 g moet eers na kg omgeskakel word: 480 g = 0,48 kg. Tel dan op: 2,1 + 0,48 = 2,58 kg, nie 482,1 kg nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het massa-omskakelings, gemengde eenhede, skalering en werklike-wêreld massaprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en gemengde-eenheidreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings t↔kg↔g↔mg (0-4, Maklik) — brug t↔g en mg↔kg weer, nuwe getalle
        { difficulty: 'Easy', question: 'Skakel 8,4 t direk om na g.', answer: '8400000 g', checkMode: 'auto', correctAnswer: '8400000', correctAnswers: ['8400000', '8 400 000', '8400000g', '8 400 000 g'], explanation: 'Om van t direk na g te spring, vermenigvuldig met 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n8,4 × 1 000 000 = 8 400 000 g ✓' },
        { difficulty: 'Easy', question: 'ʼn Vragskip word gelaai met 12,5 t vrag. Wat is hierdie massa in gram?', answer: '12500000 g', checkMode: 'auto', correctAnswer: '12500000', correctAnswers: ['12500000', '12 500 000', '12500000g', '12 500 000 g'], explanation: '1 t = 1 000 000 g.\n12,5 × 1 000 000 = 12 500 000 g ✓' },
        { difficulty: 'Easy', question: 'Skakel 1 950 000 mg direk om na kg.', answer: '1,95 kg', checkMode: 'auto', correctAnswer: '1,95', correctAnswers: ['1,95', '1.95', '1,95kg', '1,95 kg'], explanation: 'Om van mg direk na kg te spring, deel deur 1 000 twee keer: 1 000 × 1 000 = 1 000 000.\n1 950 000 ÷ 1 000 000 = 1,95 kg ✓' },
        { difficulty: 'Easy', question: 'ʼn Laboratorium stoor 4,6 kg van ʼn chemiese stof. Druk hierdie massa in milligram uit.', answer: '4600000 mg', checkMode: 'auto', correctAnswer: '4600000', correctAnswers: ['4600000', '4 600 000', '4600000mg', '4 600 000 mg'], explanation: '1 kg = 1 000 000 mg.\n4,6 × 1 000 000 = 4 600 000 mg ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder skakel 0,045 t na g om soos volg: "0,045 × 1 000 = 45 g." Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het net een keer met 1 000 vermenigvuldig, wat t na kg omskakel, nie t na g nie. Om van t na g te gaan benodig albei faktore van 1 000: 0,045 × 1 000 × 1 000 = 45 000 g, nie 45 g nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede (5-8, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Skryf 9,05 kg met gemengde eenhede (kg en g).', answer: '9 kg 50 g', checkMode: 'auto', correctAnswer: '9 kg 50 g', correctAnswers: ['9 kg 50 g', '9kg50g', '9 kg50g'], explanation: 'Die heelgetaldeel, 9, bly as kg. Die desimale deel, 0,05, word na g omgeskakel: 0,05 × 1 000 = 50 g.\n9,05 kg = 9 kg 50 g ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Pakkieskaal-lesing wys "7 kg 125 g". Skryf dit as ʼn enkele desimale getal kilogram.', answer: '7,125 kg', checkMode: 'auto', correctAnswer: '7,125', correctAnswers: ['7,125', '7.125', '7,125kg', '7,125 kg'], explanation: '125 g = 125 ÷ 1 000 = 0,125 kg.\n7 kg 125 g = 7,125 kg ✓' },
        { difficulty: 'Medium', question: 'Watter is swaarder: 5 kg 80 g of 5,5 kg? Verduidelik hoe jy weet.', answer: '5,5 kg is swaarder. Skakel om na dieselfde vorm: 5 kg 80 g = 5,08 kg, en 5,5 kg is meer as 5,08 kg.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Resepetiket toon ʼn massa van 3,4 kg. ʼn Leerder skryf dit met gemengde eenhede as "3 kg 4 g". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die leerder het vergeet om die desimale deel met 1 000 te vermenigvuldig om dit na gram om te skakel. Die desimale deel 0,4 beteken 0,4 × 1 000 = 400 g, nie 4 g nie. Dus 3,4 kg = 3 kg 400 g, nie 3 kg 4 g nie.', checkMode: 'self' },

        // Blok 3 — Resepte volgens massa skaleer (9-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Broodrolletjie-resep vir 6 rolletjies benodig 400 g meel. Karabo wil 21 rolletjies maak. Vind die skaalfaktor, en bereken dan hoeveel meel sy benodig.', answer: '1400 g', checkMode: 'auto', correctAnswer: '1400', correctAnswers: ['1400', '1 400', '1400g', '1 400 g'], explanation: 'Skaalfaktor = 21 ÷ 6 = 3,5.\n400 × 3,5 = 1 400 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Broodrolletjie-resep vir 6 rolletjies gebruik 400 g meel en 12 g gis. ʼn Bakkery wil 21 rolletjies maak. Vind die massa meel en gis benodig.', answer: 'Meel: 1400 g, Gis: 42 g', checkMode: 'auto', correctAnswer: '1400,42', correctAnswers: ['1400,42', '1400g,42g', 'meel1400ggis42g', '1 400 g, 42 g'], explanation: 'Skaalfaktor = 21 ÷ 6 = 3,5.\nMeel: 400 × 3,5 = 1 400 g. Gis: 12 × 3,5 = 42 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Koekie-resep is met ʼn faktor van 3,5 opgeskaal, en benodig nou 1 050 g meel. Hoeveel meel het die oorspronklike resep benodig?', answer: '300 g', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300', '300g', '300 g'], explanation: '"Opgeskaal" beteken die oorspronklike is met 3,5 vermenigvuldig, so terugwerk beteken deel: 1 050 ÷ 3,5 = 300 g ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakker skaleer ʼn resep van 10 rolletjies na 25 rolletjies. Sy bereken die skaalfaktor as 25 − 10 = 15. Is haar metode korrek? Verduidelik die fout en gee die korrekte skaalfaktor.', answer: 'Nee, haar metode is verkeerd. ʼn Skaalfaktor word gevind deur die nuwe hoeveelheid deur die oorspronklike hoeveelheid te deel, nie af te trek nie. Die korrekte skaalfaktor is 25 ÷ 10 = 2,5.', checkMode: 'self' },

        // Blok 4 — Prys per kilogram en waardevergelykings (13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn 3 kg-sak sojabone kos R99. Vind die prys per kilogram.', answer: 'R33', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', 'R33'], explanation: 'R99 ÷ 3 = R33 per kg ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop ʼn 1 kg-sak meel vir R21, en ʼn 2,5 kg-sak vir R58. Watter sak bied beter waarde, en met hoeveel per kg?', answer: '1 kg-sak is beter waarde, met R2,20 per kg', checkMode: 'auto', correctAnswer: '1kg-sak, R2,20 per kg', correctAnswers: ['1kg,2,20', '1kg,2.20', '1 kg-sak met R2,20 per kg', '1kgsakbetermetr2,20perkg', '1 kg-sak, R2,20 per kg', '1kg,2,2'], explanation: '1 kg-sak: R21 ÷ 1 = R21 per kg. 2,5 kg-sak: R58 ÷ 2,5 = R23,20 per kg.\nR23,20 − R21 = R2,20. Aangesien R21 minder is as R23,20, is die 1 kg-sak beter waarde, met R2,20 per kg ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkelier sê: "ʼn 3 kg-sak sojabone teen R99 is beter waarde as ʼn 5 kg-sak teen R150, want R99 is ʼn kleiner bedrag om te betaal." Is die winkelier korrek? Verduidelik, deur die prys per kg te gebruik.', answer: 'Nee, die winkelier is verkeerd. Om net die totale prys te vergelyk, wys nie watter beter waarde is nie — jy moet die prys per kilogram vergelyk. 3 kg-sak: R99 ÷ 3 = R33 per kg. 5 kg-sak: R150 ÷ 5 = R30 per kg. Aangesien R30 minder is as R33, is die 5 kg-sak eintlik die beter waarde.', checkMode: 'self' },

        // Blok 5 — Meerstap werklike-wêreld massaprobleme (16-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Piekniekmandjie bevat ʼn 3,2 kg-braaikuiken, ʼn 275 g-blok kaas, en ʼn 900 g-brood. Vind die totale massa, in kg.', answer: '4,375 kg', checkMode: 'auto', correctAnswer: '4,375', correctAnswers: ['4,375', '4.375', '4,375kg', '4,375 kg'], explanation: 'Skakel om na kg: 275 g = 0,275 kg, 900 g = 0,9 kg.\n3,2 + 0,275 + 0,9 = 4,375 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Lugredery laat ʼn bagasietoelaag van 23 kg per tas toe, vir 2 tasse. ʼn Reisiger het een tas gepak wat 19,5 kg weeg, en ʼn ander wat 21,8 kg weeg. Hoeveel van die totale toelaag is onbenut, in kg?', answer: '4,7 kg', checkMode: 'auto', correctAnswer: '4,7', correctAnswers: ['4,7', '4.7', '4,7kg', '4,7 kg'], explanation: 'Totale toelaag: 23 × 2 = 46 kg. Totaal gepak: 19,5 + 21,8 = 41,3 kg.\n46 − 41,3 = 4,7 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Vrugteverkoper verpak appels in 6 kratte van 3,5 kg elk en verkoop dit teen R11,20 per kilogram. Vind die totale massa verpak, en die totale bedrag verdien.', answer: '21 kg, R235,20', checkMode: 'auto', correctAnswer: '21,235,20', correctAnswers: ['21kg,r235,20', '21 kg, R235,20', '21,235.20', '21kg r235,20'], explanation: 'Totale massa: 6 × 3,5 = 21 kg.\nTotaal verdien: 21 × R11,20 = R235,20 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel ʼn 900 g-sak rys direk by ʼn 1,8 kg-sak mieliemeel, en skryf die totaal as "1,8 + 900 = 901,8 kg". Verduidelik die fout en gee die korrekte totale massa in kg.', answer: 'Die leerder het die getalle bymekaargetel sonder om eers na dieselfde eenheid om te skakel. 900 g moet eers na kg omgeskakel word: 900 g = 0,9 kg. Tel dan op: 1,8 + 0,9 = 2,7 kg, nie 901,8 kg nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het massa-omskakelings, gemengde eenhede, skalering en werklike-wêreld massaprobleme baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik seker van die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en gemengde-eenheidreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
