import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (unit of length roles) ────────────────────────────────────
// mm (millimeter) → blou   (#2563eb)
// cm (sentimeter) → groen  (#16a34a)
// m  (meter)      → oranje (#ea580c)
// km (kilometer)  → rooi   (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Lengte',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VEELSTAP-OMSKAKELINGS EN GEMENGDE EENHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-conversions-mixed-units',
      title: 'Veelstap-omskakelings en Gemengde Eenhede',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Jy weet reeds hoe om tussen ${bl('millimeter')}, ${gr('sentimeter')}, ${or('meter')} en ${re('kilometer')} om te skakel deur die sleutelfeite ${gr('10 mm = 1 cm')}, ${or('100 cm = 1 m')} en ${re('1 000 m = 1 km')} te gebruik. Vanjaar kombineer ons hierdie feite om direk tussen eenhede wat ${bl('twee stappe uitmekaar')} is (soos mm na m, of cm na km) om te skakel, en om metings met ${or('gemengde eenhede')} te skryf — byvoorbeeld, om 2,35 km as "2 km 350 m" uit te druk.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('m')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('km')}</span>` +
        `</div>` +

        // ── Twee-stap omskakelingsketting ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die omskakelingsketting</p>` +
        `<div style="text-align:center;font-size:1.05em;font-weight:700;color:#0f1f3d;margin-bottom:20px;padding:12px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;">${re('km')} ${re('× 1 000')} → ${or('m')} ${or('× 100')} → ${gr('cm')} ${gr('× 10')} → ${bl('mm')}</div>` +

        `<p style="margin-bottom:16px;color:#374151;">Om twee stappe te spring (bv. km direk na cm), vermenigvuldig eenvoudig met <strong>albei</strong> omskakelingsfaktore agtermekaar: ${re('1 km = 1 000 m = 100 000 cm')} (1 000 × 100). In die ander rigting, deel deur albei faktore agtermekaar.</p>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omskakeling na gemengde eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om 2,35 km as km en m te skryf: die heelgetaldeel (2) bly ${re('km')}, en die desimale deel (0,35) word na ${or('m')} omgeskakel deur met 1 000 te vermenigvuldig → ${or('350 m')}. Dus 2,35 km = <strong>2 km 350 m</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 4,2 km direk om na cm.',
          answer: `4,2 km = ${re('420 000 cm')}`,
          steps: [
            `Om van ${re('km')} na ${gr('cm')} te gaan, beteken om twee stappe te spring: km → m → cm.`,
            `Vermenigvuldig met albei faktore: ${re('1 000 × 100 = 100 000')}.`,
            `${re('4,2 × 100 000 = 420 000')}.`,
            `<strong>Antwoord:</strong> 4,2 km = ${re('420 000 cm')}. ✓`,
          ],
        },
        {
          question: 'Skryf 3,65 km met gemengde eenhede (km en m).',
          answer: `3,65 km = ${or('3 km 650 m')}`,
          steps: [
            `Die heelgetaldeel, 3, bly ${re('km')}.`,
            `Die desimale deel, 0,65, word na ${or('m')} omgeskakel: ${or('0,65 × 1 000 = 650 m')}.`,
            `<strong>Antwoord:</strong> 3,65 km = ${or('3 km 650 m')}. ✓`,
          ],
        },
        {
          question: 'Skakel 3 500 mm direk om na m.',
          answer: `3 500 mm = ${or('3,5 m')}`,
          steps: [
            `Om van ${bl('mm')} na ${or('m')} te gaan, beteken om twee stappe te spring: mm → cm → m.`,
            `Deel deur albei faktore: ${bl('10 × 100 = 1 000')}.`,
            `${bl('3 500 ÷ 1 000 = 3,5')}.`,
            `<strong>Antwoord:</strong> 3 500 mm = ${or('3,5 m')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Skakel 2 km direk om na cm.',
          answer: '200 000 cm',
          checkMode: 'auto',
          correctAnswer: '200000',
          correctAnswers: ['200000', '200 000', '200000cm', '200 000 cm'],
          explanation: '1 km = 100 000 cm.\n2 × 100 000 = 200 000 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf 5,4 km met gemengde eenhede (km en m).',
              correctAnswer: '5 km 400 m',
              correctAnswers: ['5 km 400 m', '5km400m', '5 km400m'],
              explanation: '0,4 km = 0,4 × 1 000 = 400 m.\n5,4 km = 5 km 400 m ✓',
            },
            {
              label: 'b) Skakel 6 200 mm direk om na m.',
              correctAnswer: '6.2',
              correctAnswers: ['6.2', '6,2', '6.2m', '6,2m'],
              explanation: '1 000 mm = 1 m.\n6 200 ÷ 1 000 = 6,2 m ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Padteken wys die afstand na ʼn dorp as 12,08 km.\n\na) Skryf hierdie afstand met gemengde eenhede (km en m).\nb) Skakel hierdie afstand direk om na cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gemengde eenhede (km en m)',
              correctAnswer: '12 km 80 m',
              correctAnswers: ['12 km 80 m', '12km80m', '12 km80m'],
              explanation: '0,08 km = 0,08 × 1 000 = 80 m.\n12,08 km = 12 km 80 m ✓',
            },
            {
              label: 'b) Afstand in cm',
              correctAnswer: '1208000',
              correctAnswers: ['1208000', '1 208 000'],
              explanation: '1 km = 100 000 cm.\n12,08 × 100 000 = 1 208 000 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the full length conversion chain from km to m to cm to mm, demonstrating how to jump two steps at once and how to convert a decimal kilometre measurement into mixed km and m units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — BEREKEN MET LENGTE IN KONTEKS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length-in-context',
      title: 'Bereken met Lengte in Konteks',
      icon: '🗺️',
      explanation:
        `<p style="margin-bottom:16px;">Lengteprobleme kombineer dikwels verskeie metings, of verbind lengte met ander idees soos ${or('skaal')} en ${gr('tempo')}. ʼn ${or('Skaal')} op ʼn kaart of diagram vertel ons hoe ʼn getekende afstand met ʼn werklike afstand verband hou — byvoorbeeld, ʼn skaal van ${or('1 : 100 000')} beteken elke 1 cm op die kaart verteenwoordig 100 000 cm (wat 1 km is) in werklikheid.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kaart-/skaalafstand')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('werklike afstand')}</span>` +
        `</div>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Werk met ʼn skaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Skaal van ${or('1 : 100 000')} beteken: kaartafstand × 100 000 = ${gr('werklike afstand')} (in dieselfde eenheid). Kontroleer altyd of die antwoord daarna na ʼn meer sinvolle eenheid omgeskakel moet word, soos km in plaas van cm.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kaart het ʼn skaal van 1 : 50 000. Die afstand tussen twee dorpe op die kaart is 6 cm. Bepaal die werklike afstand in km.',
          answer: `Werklike afstand = ${gr('3 km')}`,
          steps: [
            `Vermenigvuldig die kaartafstand met die skaal: ${or('6 × 50 000 = 300 000 cm')}.`,
            `Skakel om na km: ${gr('300 000 ÷ 100 000 = 3 km')}.`,
            `<strong>Antwoord:</strong> Die werklike afstand is ${gr('3 km')}. ✓`,
          ],
        },
        {
          question: 'Sipho stap 4 keer om ʼn reghoekige veld. Die veld is 120 m lank en 80 m breed. Bepaal die totale afstand wat hy stap, in km.',
          answer: `Totale afstand = ${gr('1,6 km')}`,
          steps: [
            `Bepaal die omtrek van die veld: ${or('P = 2 × (120 + 80) = 2 × 200 = 400 m')}.`,
            `Vermenigvuldig met 4 lopies: ${or('400 × 4 = 1 600 m')}.`,
            `Skakel om na km: ${gr('1 600 ÷ 1 000 = 1,6 km')}.`,
            `<strong>Antwoord:</strong> Sipho stap ${gr('1,6 km')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Kaart het ʼn skaal van 1 : 10 000. Die afstand tussen twee skole op die kaart is 8 cm. Bepaal die werklike afstand in meter.',
          answer: '800 m',
          checkMode: 'auto',
          correctAnswer: '800',
          correctAnswers: ['800', '800m', '800 m'],
          explanation: '8 × 10 000 = 80 000 cm.\n80 000 cm ÷ 100 = 800 m ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige tuin is 15 m lank en 9 m breed. Lerato stap 3 keer om die rand van die tuin.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die omtrek van die tuin (m).',
              correctAnswer: '48',
              explanation: 'P = 2 × (15 + 9) = 2 × 24 = 48 m ✓',
            },
            {
              label: 'b) Bepaal die totale afstand wat Lerato stap (m).',
              correctAnswer: '144',
              explanation: '48 × 3 = 144 m ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Argitektoniese plan van ʼn huis word geteken op ʼn skaal van 1 : 200. ʼn Muur meet 3,5 cm op die plan.\n\na) Bepaal die werklike lengte van die muur in meter.\nb) As 4 identiese mure ʼn vierkantige kamer vorm, bepaal die omtrek van die kamer in meter.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Werklike lengte van die muur (m)',
              correctAnswer: '7',
              explanation: '3,5 × 200 = 700 cm.\n700 ÷ 100 = 7 m ✓',
            },
            {
              label: 'b) Omtrek van die vierkantige kamer (m)',
              correctAnswer: '28',
              explanation: '7 × 4 = 28 m ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to use a map scale to find real-world distances from a drawn measurement, followed by a perimeter example involving multiple laps around a field" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — LENGTEPROBLEME UIT DIE WERKLIKE LEWE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-length-problems',
      title: 'Lengteprobleme uit die Werklike Lewe',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Baie lengteprobleme uit die werklike lewe vereis dat jy die ${or('korrekte eenheid')} kies, ${gr('tussen eenhede omskakel')}, en dan ʼn berekening uitvoer — dikwels meer as een bewerking agtermekaar. Lees elke probleem noukeurig om presies te bepaal wat gevra word voordat jy begin bereken.</p>` +

        // ── Wenkboks ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">ʼn Eenvoudige probleemoplossings-kontrolelys</p>` +
        `<p style="margin:0;color:#9a3412;">1) Wat word gevra, en in watter eenheid? 2) Is al die gegewe metings in ${or('dieselfde eenheid')}? Skakel eers om indien nie. 3) Watter berekening(s) is nodig? 4) Maak jou finale antwoord sin vir die situasie?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thandi koop 3 stukke lint: 1,25 m, 85 cm en 0,4 m. Bepaal die totale lengte lint wat sy koop, in meter.',
          answer: `Totaal = ${gr('2,5 m')}`,
          steps: [
            `Skakel alles om na ${or('dieselfde eenheid')} (meter): 85 cm = 0,85 m.`,
            `Tel die drie lengtes op: ${gr('1,25 + 0,85 + 0,4 = 2,5 m')}.`,
            `<strong>Antwoord:</strong> Totale lint = ${gr('2,5 m')}. ✓`,
          ],
        },
        {
          question: 'ʼn Lint van 4,5 m lank word in gelyke stukke gesny, elk 30 cm lank. Hoeveel stukke kan gesny word?',
          answer: `${gr('15 stukke')}`,
          steps: [
            `Skakel die totale lengte om na ${or('dieselfde eenheid')} as die stukke (cm): ${or('4,5 m = 450 cm')}.`,
            `Deel die totaal deur die lengte van elke stuk: ${gr('450 ÷ 30 = 15')}.`,
            `<strong>Antwoord:</strong> ${gr('15 stukke')} kan gesny word. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Tou van 6 m lank word in stukke gesny wat elk 75 cm lank is. Hoeveel stukke kan gesny word?',
          answer: '8 stukke',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: '6 m = 600 cm.\n600 ÷ 75 = 8 stukke ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Kagiso koop gordynmateriaal: 2,3 m vir die sitkamer en 145 cm vir die slaapkamer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die totale lengte materiaal gekoop, in meter.',
              correctAnswer: '3.75',
              correctAnswers: ['3.75', '3,75'],
              explanation: '145 cm = 1,45 m.\n2,3 + 1,45 = 3,75 m ✓',
            },
            {
              label: 'b) As materiaal R60 per meter kos, bepaal die totale koste.',
              correctAnswer: '225',
              correctAnswers: ['225', 'R225'],
              explanation: '3,75 × R60 = R225 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Skool omhein ʼn reghoekige sportveld 90 m lank en 45 m breed, en laat ʼn 3 m gaping vir ʼn hek. Heining kos R85 per meter.\n\na) Bepaal die omtrek van die veld (m).\nb) Bepaal die lengte heining benodig, na die gaping uitgelaat is (m).\nc) Bepaal die totale koste van die heining.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Omtrek van die veld (m)',
              correctAnswer: '270',
              explanation: 'P = 2 × (90 + 45) = 2 × 135 = 270 m ✓',
            },
            {
              label: 'b) Lengte heining benodig (m)',
              correctAnswer: '267',
              explanation: '270 − 3 = 267 m ✓',
            },
            {
              label: 'c) Totale koste van die heining',
              correctAnswer: '22695',
              correctAnswers: ['22695', 'R22695', 'R22 695', '22 695'],
              explanation: '267 × R85 = R22 695 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world length word problem, converting between units before adding, subtracting, or dividing to reach the final answer" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het lengte bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het lengte bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
  ],
}
