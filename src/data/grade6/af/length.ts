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
              correctAnswer: '6,2',
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
        'Kort video wat die volle omskakelingsketting vir lengte van km na m na cm na mm wys, met hoe om twee stappe op ʼn slag te spring en hoe om ʼn desimale kilometermeting na gemengde km- en m-eenhede om te skakel',
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
        'Kort video wat wys hoe om ʼn kaartskaal te gebruik om werklike afstande vanaf ʼn getekende meting te vind, gevolg deur ʼn omtrekvoorbeeld met verskeie rondtes om ʼn veld',
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
              correctAnswer: '3,75',
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
        'Kort video wat ʼn multistap-woordprobleem oor lengte uit die regte lewe deurwerk, met omskakeling tussen eenhede voordat daar opgetel, afgetrek of gedeel word om die finale antwoord te kry',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'ʼn Padteken wys die afstand na die volgende dorp as 5,4 km. Skakel hierdie afstand direk om na cm.', answer: '540 000 cm', checkMode: 'auto', correctAnswer: '540000', correctAnswers: ['540000', '540 000', '540000cm', '540 000 cm'], explanation: 'Om van km direk na cm te spring, vermenigvuldig met 1 000 en dan 100: 1 000 × 100 = 100 000.\n5,4 × 100 000 = 540 000 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Nuwe potlood meet 720 mm wanneer verskeie potlode agtermekaar gelê word. Skakel hierdie lengte direk om na m.', answer: '0,72 m', checkMode: 'auto', correctAnswer: '0,72', correctAnswers: ['0,72', '0.72', '0,72m', '0.72m'], explanation: 'Om van mm direk na m te spring, deel deur 10 en dan 100: 10 × 100 = 1 000.\n720 ÷ 1 000 = 0,72 m ✓' },
        { difficulty: 'Easy', question: 'Die verspringbaan by ʼn skool se sportveld is 3,6 m van die afspringbord tot die verste kant. Skakel hierdie lengte direk om na mm.', answer: '3 600 mm', checkMode: 'auto', correctAnswer: '3600', correctAnswers: ['3600', '3 600', '3600mm', '3 600 mm'], explanation: 'Om van m direk na mm te spring, vermenigvuldig met 100 en dan 10: 100 × 10 = 1 000.\n3,6 × 1 000 = 3 600 mm ✓' },
        { difficulty: 'Easy', question: 'ʼn Padteken aan die rand van die dorp meet ʼn gedeelte teerpad as 8 200 cm lank. Skakel hierdie lengte direk om na km.', answer: '0,082 km', checkMode: 'auto', correctAnswer: '0,082', correctAnswers: ['0,082', '0.082', '0,082km', '0.082km'], explanation: 'Om van cm direk na km te spring, deel deur 100 en dan 1 000: 100 × 1 000 = 100 000.\n8 200 ÷ 100 000 = 0,082 km ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder sê: "Om van km na mm te gaan, kan ek net met 1 000 vermenigvuldig, want dit is die km-na-m-faktor." Met hierdie metode skakel hulle 3 km om na "3 000 mm". Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het net een omskakelingsfaktor gebruik. Om van km na mm te gaan is drie stappe uitmekaar (km → m → cm → mm), so al die faktore moet gekombineer word: 1 000 × 100 × 10 = 1 000 000. Die korrekte omskakeling is 3 × 1 000 000 = 3 000 000 mm, nie 3 000 mm nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'ʼn Padteken gee die afstand na die volgende russtop as 6,75 km. Skryf hierdie afstand met gemengde eenhede (km en m).', answer: '6 km 750 m', checkMode: 'auto', correctAnswer: '6 km 750 m', correctAnswers: ['6 km 750 m', '6km750m', '6 km750m'], explanation: 'Die heelgetaldeel, 6, bly km. Die desimale deel, 0,75, word na m omgeskakel: 0,75 × 1 000 = 750 m.\n6,75 km = 6 km 750 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Wedloopafstand word op ʼn wenspaal-banier vertoon as "5 km 300 m". Skryf hierdie afstand as ʼn enkele desimale getal in km.', answer: '5,3 km', checkMode: 'auto', correctAnswer: '5,3', correctAnswers: ['5,3', '5.3', '5,3km', '5.3km'], explanation: '300 m = 300 ÷ 1 000 = 0,3 km.\n5 km 300 m = 5,3 km ✓' },
        { difficulty: 'Easy', question: 'ʼn Wandeltoepassing wys ʼn roetelengte van 4,9 km. ʼn Wandelaar skryf dit met gemengde eenhede as "4 km 90 m". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die wandelaar het ʼn fout gemaak. Die desimale deel, 0,9, moet met 1 000 vermenigvuldig word om dit na meter om te skakel: 0,9 × 1 000 = 900 m, nie 90 m nie. Dus 4,9 km = 4 km 900 m, nie 4 km 90 m nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Twee wandelroete-tekens wys die oorblywende afstand as "4 km 250 m" en "4,3 km". Watter afstand is groter?', answer: '4,3 km is groter', checkMode: 'auto', correctAnswer: '4,3 km', correctAnswers: ['4,3 km', '4.3 km', '4,3km', '4.3km'], explanation: 'Skakel albei na dieselfde vorm om: 4 km 250 m = 4,25 km. Vergelyk 4,25 km en 4,3 km: 4,3 km is groter as 4,25 km.\nDus is 4,3 km die groter afstand ✓' },

        // Blok 3 — Omtrek van reghoeke/vierkante (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 60 m, width 35 m
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld is 60 m lank en 35 m breed, soos hieronder getoon. Bepaal die omtrek van die veld, en bepaal dan die totale afstand wat gedek word deur 4 lopies daar rondom.', answer: 'Omtrek = 190 m, totale afstand = 760 m', checkMode: 'auto', correctAnswer: '190,760', correctAnswers: ['190,760', '190m,760m', '190, 760', '190 m, 760 m'], explanation: 'Omtrek: P = 2 × (60 + 35) = 2 × 95 = 190 m.\nTotale afstand vir 4 lopies: 190 × 4 = 760 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">60 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">35 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Groentetuin word omhein op ʼn reghoekige stuk grond van 40 m by 22 m, soos hieronder getoon. ʼn Boer stap 6 keer om die buitenste rand terwyl hy die heining kontroleer. Bepaal die omtrek van die stuk grond, en die totale afstand gestap, in km.', answer: 'Omtrek = 124 m, totale afstand = 0,744 km', checkMode: 'auto', correctAnswer: '124,0,744', correctAnswers: ['124,0.744', '124m,0.744km', '124, 0.744', '124 m, 0.744 km', '124,0,744', '124 m, 0,744 km'], explanation: 'Omtrek: P = 2 × (40 + 22) = 2 × 62 = 124 m.\nTotale afstand vir 6 lopies: 124 × 6 = 744 m = 0,744 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">40 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">22 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige saalvloer het ʼn omtrek van 120 m. Die saal is 42 m lank, soos hieronder getoon. Bepaal die breedte.', answer: '18 m', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18m', '18 m'], explanation: 'Helfte van die omtrek = lengte + breedte: 120 ÷ 2 = 60 m.\nBreedte = 60 − 42 = 18 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">42 m</text><text x="16" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 6 68 A 12 16 0 0 1 6 100" fill="none" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Tennisbaan is 26 m lank en 14 m breed (die omliggende uitloopgebied ingesluit). ʼn Leerder bereken die omtrek as "26 + 14 = 40 m". Verduidelik die fout en gee die korrekte omtrek.', answer: 'Die leerder het net die lengte en breedte een keer opgetel, en vergeet dat ʼn reghoek twee lengtes en twee breedtes het. Die omtrek van ʼn reghoek word bereken met P = 2 × (lengte + breedte). Die korrekte omtrek is P = 2 × (26 + 14) = 2 × 40 = 80 m, nie 40 m nie.', checkMode: 'self' },

        // Blok 4 — Kaartskaal-probleme (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:25 000, map distance 9 cm
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 25 000. Die afstand tussen twee dorpe op die kaart is 9 cm, soos hieronder getoon. Bepaal die werklike afstand in km.', answer: '2,25 km', checkMode: 'auto', correctAnswer: '2,25', correctAnswers: ['2,25', '2.25', '2,25km', '2.25km'], explanation: 'Vermenigvuldig die kaartafstand met die skaal: 9 × 25 000 = 225 000 cm.\nSkakel om na km: 225 000 ÷ 100 000 = 2,25 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Skaal 1 : 25 000</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 25 000. Twee dorpe is werklik 5 km uitmekaar. Bepaal die afstand tussen hulle op die kaart, in cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'Skakel die werklike afstand om na cm: 5 km = 500 000 cm.\nDeel deur die skaal: 500 000 ÷ 25 000 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolsaal se vloerplan word geteken op ʼn skaal van 1 : 150. Op die plan meet elk van die 4 identiese mure van die (vierkantige) saal 9 cm.\n\na) Bepaal die werklike lengte van een muur, in meter.\nb) Bepaal die omtrek van die saal, in meter.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Werklike lengte van een muur (m)', correctAnswer: '13,5', correctAnswers: ['13,5', '13.5', '13,5m', '13.5m'], explanation: '9 × 150 = 1 350 cm.\n1 350 ÷ 100 = 13,5 m ✓' },
          { label: 'b) Omtrek van die saal (m)', correctAnswer: '54', correctAnswers: ['54', '54m', '54 m'], explanation: '13,5 × 4 = 54 m ✓' },
        ] },

        // Blok 5 — Optel/aftrek van lengtes met gemengde eenhede (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vir ʼn kostuum koop Ayesha 1,85 m blou lint, 60 cm goue lint en 220 cm wit lint. Bepaal die totale lengte lint wat sy koop, in meter.', answer: '4,65 m', checkMode: 'auto', correctAnswer: '4,65', correctAnswers: ['4,65', '4.65', '4,65m', '4.65m'], explanation: 'Skakel alles om na dieselfde eenheid (meter): 60 cm = 0,6 m, 220 cm = 2,2 m.\nTel die drie lengtes op: 1,85 + 0,6 + 2,2 = 4,65 m ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kleinhoewe benodig 52,4 m heining om ʼn kraal te omhein, maar ʼn 2,4 m gaping word gelaat vir ʼn hek. Hoeveel heiningdraad moet werklik gekoop word?', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'Trek die hekgaping van die totale afstand af: 52,4 − 2,4 = 50 m ✓' },

        // Blok 6 — Veelstap lengteprobleme uit die werklike lewe (18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Rol tou is 8,4 m lank. ʼn Voortrekkerleier sny dit in gelyke stukke, elk 60 cm lank, vir ʼn knoopbind-aktiwiteit.\n\na) Hoeveel stukke kan gesny word?\nb) ʼn Kleremaker koop afsonderlik 6,5 m gordynmateriaal teen R48 per meter. Bepaal die totale koste van die materiaal.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal stukke tou', correctAnswer: '14', correctAnswers: ['14', '14 stukke'], explanation: 'Skakel die totale lengte om na dieselfde eenheid as die stukke (cm): 8,4 m = 840 cm.\nDeel die totaal deur die lengte van elke stuk: 840 ÷ 60 = 14 stukke ✓' },
          { label: 'b) Totale koste van die materiaal', correctAnswer: '312', correctAnswers: ['312', 'R312'], explanation: '6,5 × R48 = R312 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Vierkantige tuin het sye van 20 m. Dit word heeltemal omhein, behalwe vir ʼn 2,5 m gaping vir ʼn hek. Heining kos R38 per meter.\n\na) Bepaal die omtrek van die tuin (m).\nb) Bepaal die lengte heining benodig, na die gaping uitgelaat is (m).\nc) Bepaal die totale koste van die heining.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Omtrek van die tuin (m)', correctAnswer: '80', correctAnswers: ['80', '80m', '80 m'], explanation: 'P = 4 × 20 = 80 m ✓' },
          { label: 'b) Lengte heining benodig (m)', correctAnswer: '77,5', correctAnswers: ['77,5', '77.5', '77,5m', '77.5m'], explanation: '80 − 2,5 = 77,5 m ✓' },
          { label: 'c) Totale koste van die heining', correctAnswer: '2945', correctAnswers: ['2945', 'R2945', 'R2 945', '2 945'], explanation: '77,5 × R38 = R2 945 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het lengte-omskakelings, gemengde eenhede, omtrek en skaalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik selfversekerd met die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en omtrekreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'ʼn Padteken wys die afstand na die volgende dorp as 3,15 km. Skakel hierdie afstand direk om na cm.', answer: '315 000 cm', checkMode: 'auto', correctAnswer: '315000', correctAnswers: ['315000', '315 000', '315000cm', '315 000 cm'], explanation: 'Om van km direk na cm te spring, vermenigvuldig met 1 000 en dan 100: 1 000 × 100 = 100 000.\n3,15 × 100 000 = 315 000 cm ✓' },
        { difficulty: 'Easy', question: 'Die breedte van ʼn klaskamer se deurkosyn word gemeet as 940 mm. Skakel hierdie lengte direk om na m.', answer: '0,94 m', checkMode: 'auto', correctAnswer: '0,94', correctAnswers: ['0,94', '0.94', '0,94m', '0.94m'], explanation: 'Om van mm direk na m te spring, deel deur 10 en dan 100: 10 × 100 = 1 000.\n940 ÷ 1 000 = 0,94 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Netbalbaanmerk word gemeet as 1,8 m vanaf die middelsirkel tot die dwarslyn. Skakel hierdie lengte direk om na mm.', answer: '1 800 mm', checkMode: 'auto', correctAnswer: '1800', correctAnswers: ['1800', '1 800', '1800mm', '1 800 mm'], explanation: 'Om van m direk na mm te spring, vermenigvuldig met 100 en dan 10: 100 × 10 = 1 000.\n1,8 × 1 000 = 1 800 mm ✓' },
        { difficulty: 'Easy', question: 'ʼn Padteken teken ʼn gedeelte nuut-geteerde pad aan as 15 400 cm lank. Skakel hierdie lengte direk om na km.', answer: '0,154 km', checkMode: 'auto', correctAnswer: '0,154', correctAnswers: ['0,154', '0.154', '0,154km', '0.154km'], explanation: 'Om van cm direk na km te spring, deel deur 100 en dan 1 000: 100 × 1 000 = 100 000.\n15 400 ÷ 100 000 = 0,154 km ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder sê: "Om van cm na mm te gaan, kan ek net deur 1 000 deel, want dit is dieselfde as twee eenhede opgaan." Met hierdie metode skakel hulle 400 cm om na "0,4 mm". Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het die rigting van die omskakeling verwar, en ook die verkeerde faktor gebruik. Om van cm na mm te gaan beteken die eenheid word kleiner, so jy moet vermenigvuldig, nie deel nie. Net een stap is nodig: 1 cm = 10 mm. Die korrekte omskakeling is 400 × 10 = 4 000 mm, nie 0,4 mm nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'ʼn Fietsryroetekaart gee die afstand na die volgende kontrolepunt as 2,4 km. Skryf hierdie afstand met gemengde eenhede (km en m).', answer: '2 km 400 m', checkMode: 'auto', correctAnswer: '2 km 400 m', correctAnswers: ['2 km 400 m', '2km400m', '2 km400m'], explanation: 'Die heelgetaldeel, 2, bly km. Die desimale deel, 0,4, word na m omgeskakel: 0,4 × 1 000 = 400 m.\n2,4 km = 2 km 400 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Roetekaart wys die afstand vanaf die parkeerterrein tot die piek as "8 km 125 m". Skryf hierdie afstand as ʼn enkele desimale getal in km.', answer: '8,125 km', checkMode: 'auto', correctAnswer: '8,125', correctAnswers: ['8,125', '8.125', '8,125km', '8.125km'], explanation: '125 m = 125 ÷ 1 000 = 0,125 km.\n8 km 125 m = 8,125 km ✓' },
        { difficulty: 'Easy', question: 'ʼn GPS-horlosie wys ʼn afstand van 5,15 km. Die hardloper skryf dit met gemengde eenhede as "5 km 15 m". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die hardloper het ʼn fout gemaak. Die desimale deel, 0,15, moet met 1 000 vermenigvuldig word om dit na meter om te skakel: 0,15 × 1 000 = 150 m, nie 15 m nie. Dus 5,15 km = 5 km 150 m, nie 5 km 15 m nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Twee wedloopafstand-merkers wys "6 km 700 m" en "6,65 km" oorblywend. Watter afstand is groter?', answer: '6 km 700 m is groter', checkMode: 'auto', correctAnswer: '6 km 700 m', correctAnswers: ['6 km 700 m', '6km700m', '6 km700m'], explanation: 'Skakel albei na dieselfde vorm om: 6 km 700 m = 6,7 km. Vergelyk 6,7 km en 6,65 km: 6,7 km is groter as 6,65 km.\nDus is 6 km 700 m die groter afstand ✓' },

        // Blok 3 — Omtrek van reghoeke/vierkante (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 70 m, width 45 m
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld is 70 m lank en 45 m breed, soos hieronder getoon. Bepaal die omtrek van die veld, en bepaal dan die totale afstand wat gedek word deur 3 lopies daar rondom.', answer: 'Omtrek = 230 m, totale afstand = 690 m', checkMode: 'auto', correctAnswer: '230,690', correctAnswers: ['230,690', '230m,690m', '230, 690', '230 m, 690 m'], explanation: 'Omtrek: P = 2 × (70 + 45) = 2 × 115 = 230 m.\nTotale afstand vir 3 lopies: 230 × 3 = 690 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">70 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">45 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Basketbalbaan-oefengebied word uitgemerk op ʼn reghoekige gedeelte van die skoolgronde van 34 m by 17 m, soos hieronder getoon. ʼn Afrigter stap 8 keer om die buitenste rand terwyl hy kegels opsit. Bepaal die omtrek van die gedeelte, en die totale afstand gestap, in km.', answer: 'Omtrek = 102 m, totale afstand = 0,816 km', checkMode: 'auto', correctAnswer: '102,0,816', correctAnswers: ['102,0.816', '102m,0.816km', '102, 0.816', '102 m, 0.816 km', '102,0,816', '102 m, 0,816 km'], explanation: 'Omtrek: P = 2 × (34 + 17) = 2 × 51 = 102 m.\nTotale afstand vir 8 lopies: 102 × 8 = 816 m = 0,816 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">34 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">17 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige biblioteekvloer het ʼn omtrek van 84 m. Die vloer is 19 m breed, soos hieronder getoon. Bepaal die lengte.', answer: '23 m', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23', '23m', '23 m'], explanation: 'Helfte van die omtrek = lengte + breedte: 84 ÷ 2 = 42 m.\nLengte = 42 − 19 = 23 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 90 18 A 20 12 0 0 1 130 18" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">19 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Hokkievelds-stoorkamer is 32 m lank en 21 m breed. ʼn Leerder bereken die omtrek as "32 × 21 = 672 m". Verduidelik die fout en gee die korrekte omtrek.', answer: 'Die leerder het die lengte en breedte vermenigvuldig, wat die oppervlakte gee, nie die omtrek nie. Die omtrek van ʼn reghoek word bereken met P = 2 × (lengte + breedte). Die korrekte omtrek is P = 2 × (32 + 21) = 2 × 53 = 106 m, nie 672 m nie.', checkMode: 'self' },

        // Blok 4 — Kaartskaal-probleme (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:25 000, map distance 12 cm
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 25 000. Die afstand tussen twee dorpe op die kaart is 12 cm, soos hieronder getoon. Bepaal die werklike afstand in km.', answer: '3 km', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], explanation: 'Vermenigvuldig die kaartafstand met die skaal: 12 × 25 000 = 300 000 cm.\nSkakel om na km: 300 000 ÷ 100 000 = 3 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">12 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Skaal 1 : 25 000</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 25 000. Twee dorpe is werklik 8 km uitmekaar. Bepaal die afstand tussen hulle op die kaart, in cm.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'Skakel die werklike afstand om na cm: 8 km = 800 000 cm.\nDeel deur die skaal: 800 000 ÷ 25 000 = 32 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Saal se vloerplan word geteken op ʼn skaal van 1 : 100. Op die plan meet elk van die 4 identiese mure van die (vierkantige) saal 14 cm.\n\na) Bepaal die werklike lengte van een muur, in meter.\nb) Bepaal die omtrek van die saal, in meter.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Werklike lengte van een muur (m)', correctAnswer: '14', correctAnswers: ['14', '14m', '14 m'], explanation: '14 × 100 = 1 400 cm.\n1 400 ÷ 100 = 14 m ✓' },
          { label: 'b) Omtrek van die saal (m)', correctAnswer: '56', correctAnswers: ['56', '56m', '56 m'], explanation: '14 × 4 = 56 m ✓' },
        ] },

        // Blok 5 — Optel/aftrek van lengtes met gemengde eenhede (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vir ʼn skoolproduksie koop Junaid 3,2 m rooi gordynmateriaal, 75 cm swart materiaal en 145 cm goue materiaal. Bepaal die totale lengte materiaal wat hy koop, in meter.', answer: '5,4 m', checkMode: 'auto', correctAnswer: '5,4', correctAnswers: ['5,4', '5.4', '5,4m', '5.4m'], explanation: 'Skakel alles om na dieselfde eenheid (meter): 75 cm = 0,75 m, 145 cm = 1,45 m.\nTel die drie lengtes op: 3,2 + 0,75 + 1,45 = 5,4 m ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Hondeversorgingsentrum benodig 68,5 m heining om ʼn oefenwerf te omhein, maar ʼn 3,5 m gaping word gelaat vir ʼn hek. Hoeveel heiningdraad moet werklik gekoop word?', answer: '65 m', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65m', '65 m'], explanation: 'Trek die hekgaping van die totale afstand af: 68,5 − 3,5 = 65 m ✓' },

        // Blok 6 — Veelstap lengteprobleme uit die werklike lewe (18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Bol tou is 9,6 m lank. ʼn Tuinier sny dit in gelyke stukke, elk 80 cm lank, om tamatieplante vas te bind.\n\na) Hoeveel stukke kan gesny word?\nb) ʼn Hardewarewinkel verkoop afsonderlik ketting per meter teen R36 per meter. Bepaal die totale koste van 8,5 m ketting.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal stukke tou', correctAnswer: '12', correctAnswers: ['12', '12 stukke'], explanation: 'Skakel die totale lengte om na dieselfde eenheid as die stukke (cm): 9,6 m = 960 cm.\nDeel die totaal deur die lengte van elke stuk: 960 ÷ 80 = 12 stukke ✓' },
          { label: 'b) Totale koste van die ketting', correctAnswer: '306', correctAnswers: ['306', 'R306'], explanation: '8,5 × R36 = R306 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Vierkantige groentetuin het sye van 15 m. Dit word heeltemal omhein, behalwe vir ʼn 1,5 m gaping vir ʼn hek. Heining kos R55 per meter.\n\na) Bepaal die omtrek van die tuin (m).\nb) Bepaal die lengte heining benodig, na die gaping uitgelaat is (m).\nc) Bepaal die totale koste van die heining.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Omtrek van die tuin (m)', correctAnswer: '60', correctAnswers: ['60', '60m', '60 m'], explanation: 'P = 4 × 15 = 60 m ✓' },
          { label: 'b) Lengte heining benodig (m)', correctAnswer: '58,5', correctAnswers: ['58,5', '58.5', '58,5m', '58.5m'], explanation: '60 − 1,5 = 58,5 m ✓' },
          { label: 'c) Totale koste van die heining', correctAnswer: '3217,5', correctAnswers: ['3217,5', '3217.5', 'R3217,5', 'R3 217,50', '3 217,5', 'R3217.5', 'R3 217.50'], explanation: '58,5 × R55 = R3 217,50 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het lengte-omskakelings, gemengde eenhede, omtrek en skaalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik selfversekerd met die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en omtrekreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Tweestap-eenheidsomskakelings mm-cm-m-km (0-4, Easy)
        { difficulty: 'Easy', question: 'ʼn Padteken wys die afstand na die volgende dorp as 6,4 km. Skakel hierdie afstand direk om na cm.', answer: '640 000 cm', checkMode: 'auto', correctAnswer: '640000', correctAnswers: ['640000', '640 000', '640000cm', '640 000 cm'], explanation: 'Om van km direk na cm te spring, vermenigvuldig met 1 000 en dan 100: 1 000 × 100 = 100 000.\n6,4 × 100 000 = 640 000 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Stel kleurpotlode, agtermekaar gelê, meet 560 mm. Skakel hierdie lengte direk om na m.', answer: '0,56 m', checkMode: 'auto', correctAnswer: '0,56', correctAnswers: ['0,56', '0.56', '0,56m', '0.56m'], explanation: 'Om van mm direk na m te spring, deel deur 10 en dan 100: 10 × 100 = 1 000.\n560 ÷ 1 000 = 0,56 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Sokkerdoelpaal is 4,25 m breed. Skakel hierdie lengte direk om na mm.', answer: '4 250 mm', checkMode: 'auto', correctAnswer: '4250', correctAnswers: ['4250', '4 250', '4250mm', '4 250 mm'], explanation: 'Om van m direk na mm te spring, vermenigvuldig met 100 en dan 10: 100 × 10 = 1 000.\n4,25 × 1 000 = 4 250 mm ✓' },
        { difficulty: 'Easy', question: 'ʼn Padteken teken ʼn gedeelte gruispad aan as 62 000 cm. Skakel hierdie lengte direk om na km.', answer: '0,62 km', checkMode: 'auto', correctAnswer: '0,62', correctAnswers: ['0,62', '0.62', '0,62km', '0.62km'], explanation: 'Om van cm direk na km te spring, deel deur 100 en dan 1 000: 100 × 1 000 = 100 000.\n62 000 ÷ 100 000 = 0,62 km ✓' },
        { difficulty: 'Easy', question: 'ʼn Leerder sê: "Om van m na km te gaan, vermenigvuldig ek net met 1 000." Met hierdie metode skakel hulle 4 m om na "4 000 km". Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die leerder het die korrekte faktor gebruik, maar die verkeerde bewerking. Om van ʼn kleiner eenheid (m) na ʼn groter eenheid (km) te gaan beteken die getal moet kleiner word, so jy moet deel, nie vermenigvuldig nie. Die korrekte omskakeling is 4 ÷ 1 000 = 0,004 km, nie 4 000 km nie.', checkMode: 'self' },

        // Blok 2 — Gemengde eenhede km/m (5-8, Easy)
        { difficulty: 'Easy', question: 'ʼn Wegwyser by ʼn natuurreservaat gee die afstand na die volgende uitkykpunt as 9,15 km. Skryf hierdie afstand met gemengde eenhede (km en m).', answer: '9 km 150 m', checkMode: 'auto', correctAnswer: '9 km 150 m', correctAnswers: ['9 km 150 m', '9km150m', '9 km150m'], explanation: 'Die heelgetaldeel, 9, bly km. Die desimale deel, 0,15, word na m omgeskakel: 0,15 × 1 000 = 150 m.\n9,15 km = 9 km 150 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Parkrun-uitslaeblad wys ʼn baanlengte van "3 km 600 m". Skryf hierdie afstand as ʼn enkele desimale getal in km.', answer: '3,6 km', checkMode: 'auto', correctAnswer: '3,6', correctAnswers: ['3,6', '3.6', '3,6km', '3.6km'], explanation: '600 m = 600 ÷ 1 000 = 0,6 km.\n3 km 600 m = 3,6 km ✓' },
        { difficulty: 'Easy', question: 'ʼn Wandeltoepassing wys ʼn afstand van 7,09 km wat afgelê is. Die wandelaar skryf dit met gemengde eenhede as "7 km 9 m". Is dit korrek? Verduidelik die fout.', answer: 'Nee, die wandelaar het ʼn fout gemaak. Die desimale deel, 0,09, moet met 1 000 vermenigvuldig word om dit na meter om te skakel: 0,09 × 1 000 = 90 m, nie 9 m nie. Dus 7,09 km = 7 km 90 m, nie 7 km 9 m nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Twee wandelroete-tekens wys die afstand na die waterval as "7 km 450 m" en "7,5 km". Watter afstand is groter?', answer: '7,5 km is groter', checkMode: 'auto', correctAnswer: '7,5 km', correctAnswers: ['7,5 km', '7.5 km', '7,5km', '7.5km'], explanation: 'Skakel albei na dieselfde vorm om: 7 km 450 m = 7,45 km. Vergelyk 7,45 km en 7,5 km: 7,5 km is groter as 7,45 km.\nDus is 7,5 km die groter afstand ✓' },

        // Blok 3 — Omtrek van reghoeke/vierkante (9-12, Medium, DIAGRAM-FLAGGED)
        // Diagram data: rectangular field, length 55 m, width 38 m
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld is 55 m lank en 38 m breed, soos hieronder getoon. Bepaal die omtrek van die veld, en bepaal dan die totale afstand wat gedek word deur 5 lopies daar rondom.', answer: 'Omtrek = 186 m, totale afstand = 930 m', checkMode: 'auto', correctAnswer: '186,930', correctAnswers: ['186,930', '186m,930m', '186, 930', '186 m, 930 m'], explanation: 'Omtrek: P = 2 × (55 + 38) = 2 × 93 = 186 m.\nTotale afstand vir 5 lopies: 186 × 5 = 930 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">55 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">38 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Rugby-oefenveld word uitgemerk op ʼn reghoekige gedeelte van die skoolgronde van 48 m by 27 m, soos hieronder getoon. ʼn Afrigter stap 5 keer om die buitenste rand terwyl hy oefeninge opsit. Bepaal die omtrek van die gedeelte, en die totale afstand gestap, in km.', answer: 'Omtrek = 150 m, totale afstand = 0,75 km', checkMode: 'auto', correctAnswer: '150,0,75', correctAnswers: ['150,0.75', '150m,0.75km', '150, 0.75', '150 m, 0.75 km', '150,0,75', '150 m, 0,75 km'], explanation: 'Omtrek: P = 2 × (48 + 27) = 2 × 75 = 150 m.\nTotale afstand vir 5 lopies: 150 × 5 = 750 m = 0,75 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="50" width="150" height="65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">48 m</text><text x="18" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb" transform="rotate(-90 18 86)">27 m</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige saalvloer het ʼn omtrek van 150 m. Die saal is 55 m lank, soos hieronder getoon. Bepaal die breedte.', answer: '20 m', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20m', '20 m'], explanation: 'Helfte van die omtrek = lengte + breedte: 150 ÷ 2 = 75 m.\nBreedte = 75 − 55 = 20 m ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="45" width="150" height="75" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">55 m</text><text x="16" y="90" text-anchor="middle" font-size="16" font-weight="700" fill="#ea580c">?</text><path d="M 6 68 A 12 16 0 0 1 6 100" fill="none" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Rekenaarlaboratorium is 40 m lank en 17 m breed. ʼn Leerder bereken die omtrek as "40 × 17 = 680 m". Verduidelik die fout en gee die korrekte omtrek.', answer: 'Die leerder het die lengte en breedte vermenigvuldig, wat die oppervlakte gee, nie die omtrek nie. Die omtrek van ʼn reghoek word bereken met P = 2 × (lengte + breedte). Die korrekte omtrek is P = 2 × (40 + 17) = 2 × 57 = 114 m, nie 680 m nie.', checkMode: 'self' },

        // Blok 4 — Kaartskaal-probleme (13-15, Medium, DIAGRAM-FLAGGED)
        // Diagram data: map scale 1:40 000, map distance 7.5 cm
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 40 000. Die afstand tussen twee dorpe op die kaart is 7,5 cm, soos hieronder getoon. Bepaal die werklike afstand in km.', answer: '3 km', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], explanation: 'Vermenigvuldig die kaartafstand met die skaal: 7,5 × 40 000 = 300 000 cm.\nSkakel om na km: 300 000 ÷ 100 000 = 3 km ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="80" r="5" fill="#0f1f3d"/><circle cx="180" cy="80" r="5" fill="#0f1f3d"/><line x1="40" y1="80" x2="180" y2="80" stroke="#0f1f3d" stroke-width="2"/><text x="40" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp A</text><text x="180" y="105" text-anchor="middle" font-size="12" fill="#374151">Dorp B</text><text x="110" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">7,5 cm</text><text x="110" y="140" text-anchor="middle" font-size="13" fill="#374151">Skaal 1 : 40 000</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kaart het ʼn skaal van 1 : 40 000. Twee dorpe is werklik 4,8 km uitmekaar. Bepaal die afstand tussen hulle op die kaart, in cm.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'Skakel die werklike afstand om na cm: 4,8 km = 480 000 cm.\nDeel deur die skaal: 480 000 ÷ 40 000 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Saal se vloerplan word geteken op ʼn skaal van 1 : 120. Op die plan meet elk van die 4 identiese mure van die (vierkantige) saal 18 cm.\n\na) Bepaal die werklike lengte van een muur, in meter.\nb) Bepaal die omtrek van die saal, in meter.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Werklike lengte van een muur (m)', correctAnswer: '21,6', correctAnswers: ['21,6', '21.6', '21,6m', '21.6m'], explanation: '18 × 120 = 2 160 cm.\n2 160 ÷ 100 = 21,6 m ✓' },
          { label: 'b) Omtrek van die saal (m)', correctAnswer: '86,4', correctAnswers: ['86,4', '86.4', '86,4m', '86.4m'], explanation: '21,6 × 4 = 86,4 m ✓' },
        ] },

        // Blok 5 — Optel/aftrek van lengtes met gemengde eenhede (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Vir ʼn markstalletjie-vertoning koop Karabo 2,6 m groen lint, 95 cm geel lint en 165 cm rooi lint. Bepaal die totale lengte lint wat sy koop, in meter.', answer: '5,2 m', checkMode: 'auto', correctAnswer: '5,2', correctAnswers: ['5,2', '5.2', '5,2m', '5.2m'], explanation: 'Skakel alles om na dieselfde eenheid (meter): 95 cm = 0,95 m, 165 cm = 1,65 m.\nTel die drie lengtes op: 2,6 + 0,95 + 1,65 = 5,2 m ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kleuterskool benodig 74,8 m heining om ʼn speelarea te omhein, maar ʼn 2,8 m gaping word gelaat vir ʼn hek. Hoeveel heiningdraad moet werklik gekoop word?', answer: '72 m', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72m', '72 m'], explanation: 'Trek die hekgaping van die totale afstand af: 74,8 − 2,8 = 72 m ✓' },

        // Blok 6 — Veelstap lengteprobleme uit die werklike lewe (18-19, Hard)
        { difficulty: 'Hard', question: 'ʼn Spoel draad is 13,5 m lank. ʼn Elektrisiën sny dit in gelyke stukke, elk 45 cm lank, vir ʼn bedradingswerk.\n\na) Hoeveel stukke kan gesny word?\nb) ʼn Materiaalwinkel verkoop afsonderlik kantversiering teen R64 per meter. Bepaal die totale koste van 4,5 m kantversiering.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal stukke draad', correctAnswer: '30', correctAnswers: ['30', '30 stukke'], explanation: 'Skakel die totale lengte om na dieselfde eenheid as die stukke (cm): 13,5 m = 1 350 cm.\nDeel die totaal deur die lengte van elke stuk: 1 350 ÷ 45 = 30 stukke ✓' },
          { label: 'b) Totale koste van die kantversiering', correctAnswer: '288', correctAnswers: ['288', 'R288'], explanation: '4,5 × R64 = R288 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Vierkantige sportbaan het sye van 28 m. Dit word heeltemal omhein, behalwe vir ʼn 3 m gaping vir ʼn ingang. Heining kos R42,50 per meter.\n\na) Bepaal die omtrek van die baan (m).\nb) Bepaal die lengte heining benodig, na die gaping uitgelaat is (m).\nc) Bepaal die totale koste van die heining.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Omtrek van die baan (m)', correctAnswer: '112', correctAnswers: ['112', '112m', '112 m'], explanation: 'P = 4 × 28 = 112 m ✓' },
          { label: 'b) Lengte heining benodig (m)', correctAnswer: '109', correctAnswers: ['109', '109m', '109 m'], explanation: '112 − 3 = 109 m ✓' },
          { label: 'c) Totale koste van die heining', correctAnswer: '4632,5', correctAnswers: ['4632,5', '4632.5', 'R4632,5', 'R4 632,50', '4 632,5', 'R4632.5', 'R4 632.50'], explanation: '109 × R42,50 = R4 632,50 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het lengte-omskakelings, gemengde eenhede, omtrek en skaalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy is redelik selfversekerd met die meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die omskakelingsketting en omtrekreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
