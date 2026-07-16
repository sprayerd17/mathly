import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Pythagoras roles) ───────────────────────────────────────
// known legs       → blue   (#2563eb)
// hypotenuse       → red    (#dc2626)
// height / diagonal→ orange (#ea580c)
// final comparison → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Die Stelling van Pythagoras',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — APPLYING PYTHAGORAS TO SOLVE PROBLEMS INVOLVING GEOMETRIC FIGURES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-geometric-figures',
      title: 'Toepassing van Pythagoras om Probleme met Meetkundige Figure Op te Los',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik die <strong>Stelling van Pythagoras</strong> (${re('a')}² + ${bl('b')}² = ${or('c')}²) om probleme met onbekende lengtes in meetkundige figure wat reghoekige driehoeke bevat, op te los, insluitend meer ingewikkelde figure waarin die reghoekige driehoek eers binne ʼn groter vorm geïdentifiseer moet word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende sye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('skuinssy')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoogte / diagonaal')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die stelling</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#0f1f3d;margin:0;">${re('a')}² + ${bl('b')}² = ${or('c')}²</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:8px;margin-bottom:0;">waar ${or('c')} die <strong>skuinssy</strong> is — die sy oorkant die regte hoek en altyd die langste sy</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee gevalle</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Bepaal die skuinssy</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Wanneer albei ${bl('sye')} bekend is:<br>${or('c')} = √(${re('a')}² + ${bl('b')}²)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Voorbeeld: diagonaal van ʼn reghoek</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Bepaal ʼn sy</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Wanneer die ${re('skuinssy')} en een ${bl('sy')} bekend is:<br>${bl('b')} = √(${re('c')}² − ${bl('a')}²)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Voorbeeld: hoogte van ʼn gelykbenige driehoek</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Identifiseer eers die reghoekige driehoek</p>` +
        `<p style="margin:0;color:#1e3a8a;">In ingewikkelde figure moet jy soek na die versteekte reghoekige driehoek. In ʼn reghoek skep die diagonaal een. In ʼn gelykbenige driehoek skep die hoogte vanaf die apeks na die basis twee. Sodra jy dit gevind het, benoem die sye en pas die stelling toe.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek het ʼn lengte van 12 cm en ʼn breedte van 5 cm. Bepaal die lengte van sy diagonaal.',
          answer: `Die diagonaal = ${or('13 cm')}`,
          steps: [
            `Die diagonaal vorm die ${or('skuinssy')} van ʼn reghoekige driehoek met die lengte en breedte as die twee ${bl('bekende sye')}.`,
            `Pas die stelling toe: ${or('c')}² = ${bl('12')}² + ${bl('5')}² = ${bl('144')} + ${bl('25')} = 169`,
            `${or('c')} = √169 = ${or('13')} cm. Kyk na die diagram hieronder.`,
          ],
        },
        {
          question: 'Sipho het ʼn gelykbenige driehoek met basis 10 cm en gelyke sye van 13 cm. Bepaal die hoogte.',
          answer: `Die hoogte = ${or('12 cm')}`,
          steps: [
            `Die ${or('hoogte')} verdeel die basis in twee helftes (${bl('5')} cm elke kant) en vorm ʼn regte hoek. Dit skep ʼn reghoekige driehoek met ${bl('halwe basis')} = 5 cm as een sy en ${re('gelyke sy')} = 13 cm as die skuinssy.`,
            `Pas die stelling toe: ${or('hoogte')}² = ${re('13')}² − ${bl('5')}² = ${re('169')} − ${bl('25')} = 144`,
            `${or('hoogte')} = √144 = ${or('12')} cm`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die reghoekige driehoek binne ʼn geometriese figuur te identifiseer en die Stelling van Pythagoras toe te pas om onbekende lengtes te vind" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING MULTI-STEP PROBLEMS IN REAL-LIFE AND COMBINED SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pythagoras-multi-step-problems',
      title: 'Los Meerstap-probleme in Werklike-lewe en Saamgestelde Vorms Op',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas die Stelling van Pythagoras toe binne <strong>meerstap-probleme</strong>, wat dikwels vereis dat ons eers een onbekende lengte bepaal voordat ons dit gebruik om ʼn ander te bepaal, veral in saamgestelde of samegestelde vorms.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste onbekende bepaal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede onbekende')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Meerstap-strategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Teken of benoem die figuur. Vind die reghoekige driehoek(e) en besluit watter onbekende eerste bepaal moet word.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Eerste stap')} — Pas Pythagoras toe om die eerste onbekende te bepaal. Hierdie resultaat word in die volgende stap gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vergelyk of voltooi')} — Gebruik die resultaat om die volledige vraag te beantwoord — vergelyk afstande, bereken totale, of interpreteer die konteks.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk vir algebraïese meerstap-probleme</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn onbekende sy in terme van ʼn veranderlike uitgedruk word (bv. skuinssy = x + 3), brei albei kante uit en pas die stelling toe. Die x²-terme sal uitkanselleer, wat ʼn lineêre vergelyking laat om op te los.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Leer is 8,5 m lank en reik tot by ʼn venster 7,5 m teen ʼn muur op. Bepaal die afstand vanaf die basis van die leer tot die muur.',
          answer: `Die basisafstand = ${bl('4 m')}`,
          steps: [
            `Die leer is die ${re('skuinssy')} (8,5 m). Die muurhoogte is ʼn ${bl('bekende sy')} (7,5 m). Die ${bl('basisafstand')} is die onbekende sy.`,
            `Pas die stelling toe: ${bl('basis')}² = ${re('8,5')}² − ${bl('7,5')}² = ${re('72,25')} − ${bl('56,25')} = 16`,
            `${bl('basis')} = √16 = ${bl('4')} m`,
          ],
        },
        {
          question: 'Lerato het ʼn reghoekige driehoek met een sy van 9 cm en ʼn skuinssy 3 cm langer as die ander sy. Bepaal albei onbekende lengtes.',
          answer: `Ander sy = ${bl('12 cm')}, skuinssy = ${or('15 cm')}`,
          steps: [
            `Laat die ${bl('ander sy')} = x. Dan is die ${or('skuinssy')} = x + 3.`,
            `Pas die stelling toe: ${bl('9')}² + ${bl('x')}² = (${or('x + 3')})²`,
            `81 + x² = x² + 6x + 9. Die x²-terme kanselleer uit: 81 = 6x + 9`,
            `72 = 6x, dus ${bl('x')} = 12 cm (ander sy). ${or('Skuinssy')} = 12 + 3 = ${or('15')} cm`,
          ],
        },
        {
          question: "Thabo se reghoekige lap grond is 24 m by 18 m. Hy wil diagonaal daaroor stap in plaas van om twee kante. Bepaal hoeveel korter die diagonale pad is.",
          answer: `Die diagonale pad is ${gr('12 m')} korter`,
          steps: [
            `Bepaal die ${bl('diagonaal')}: ${bl('diagonaal')}² = 24² + 18² = 576 + 324 = 900. ${bl('Diagonaal')} = √900 = ${bl('30')} m`,
            `Bepaal die ${or('twee-kant-roete')}: 24 + 18 = ${or('42')} m`,
            `${gr('Verskil')}: ${or('42')} − ${bl('30')} = ${gr('12')} m korter`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om multi-stap Pythagoras-probleme in werklike-lewe kontekste en saamgestelde vorms op te los, insluitend die algebraïese benadering vir ʼn onbekende skuinssy" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Reghoek het ʼn lengte van 8 cm en ʼn breedte van 6 cm. Bepaal die diagonaal.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      correctAnswers: ['10', '10cm', '10 cm'],
      explanation: 'c² = 8² + 6² = 64 + 36 = 100. c = √100 = 10 cm ✓',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Gelykbenige driehoek het basis 12 cm en gelyke sye van 10 cm. Bepaal die hoogte.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      correctAnswers: ['8', '8cm', '8 cm'],
      explanation: 'Die hoogte verdeel die basis in 6 cm aan elke kant.\nhoogte² = 10² − 6² = 100 − 36 = 64. hoogte = √64 = 8 cm ✓',
    },

    // ── Q3 Hard (self) ────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn vierkant met sy 5 cm het ook ʼn diagonaal van 5 cm. Is hy korrek? Verduidelik.',
      answer: 'Nee — die diagonaal van ʼn vierkant vorm die skuinssy van ʼn reghoekige driehoek met albei sye gelyk aan 5 cm. Diagonaal = √(5² + 5²) = √50 ≈ 7,07 cm, nie 5 cm nie.',
      checkMode: 'self',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Leer is 10 m lank en reik tot by ʼn venster 8 m teen ʼn muur op. Bepaal die afstand vanaf die basis tot die muur.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      correctAnswers: ['6', '6m', '6 m'],
      explanation: 'basis² = 10² − 8² = 100 − 64 = 36. basis = √36 = 6 m ✓',
    },

    // ── Q5 Hard (self) ────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het ʼn reghoekige driehoek met een sy van 6 cm en ʼn skuinssy 2 cm langer as die ander sy. Bepaal albei onbekende lengtes.',
      answer: 'Laat ander sy = x, skuinssy = x + 2.\n36 + x² = (x + 2)².\n36 + x² = x² + 4x + 4.\n32 = 4x.\nx = 8 cm (ander sy). Skuinssy = 10 cm.',
      checkMode: 'self',
    },

    // ── Q6 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige lap grond is 30 m by 40 m. Bepaal die lengte van sy diagonaal.',
      answer: '50',
      checkMode: 'auto',
      correctAnswer: '50',
      correctAnswers: ['50', '50m', '50 m'],
      explanation: 'diagonaal² = 30² + 40² = 900 + 1 600 = 2 500. diagonaal = √2 500 = 50 m ✓',
    },

    // ── Q7 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo se lap grond is 21 m by 20 m. Hy stap diagonaal in plaas van om twee kante. Bepaal hoeveel korter die diagonale pad is.",
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      correctAnswers: ['12', '12m', '12 m'],
      explanation: 'diagonaal² = 21² + 20² = 441 + 400 = 841. diagonaal = √841 = 29 m.\nTwee kante = 21 + 20 = 41 m.\nVerskil = 41 − 29 = 12 m korter ✓',
    },

    // ── Q8 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Reghoekige driehoek het sye 5 cm en 12 cm. Bepaal die skuinssy.',
      answer: '13',
      checkMode: 'auto',
      correctAnswer: '13',
      correctAnswers: ['13', '13cm', '13 cm'],
      explanation: 'c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13 cm ✓',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 17 cm en een sy van 8 cm. Bepaal die ander sy.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      correctAnswers: ['15', '15cm', '15 cm'],
      explanation: 'ander sy² = 17² − 8² = 289 − 64 = 225. ander sy = √225 = 15 cm ✓',
    },

    // ── Q10 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle het ʼn gelykbenige driehoek met basis 16 cm en hoogte 6 cm. Bepaal die lengte van elke gelyke sy.',
      answer: 'Helfte van die basis = 8 cm.\nSy² = 8² + 6² = 64 + 36 = 100.\nSy = √100 = 10 cm.',
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "ʼn TV-skerm se diagonaal is 50 cm. As sy hoogte 30 cm is, bepaal sy breedte.",
      answer: '40',
      checkMode: 'auto',
      correctAnswer: '40',
      correctAnswers: ['40', '40cm', '40 cm'],
      explanation: 'breedte² = 50² − 30² = 2 500 − 900 = 1 600. breedte = √1 600 = 40 cm ✓',
    },

    // ── Q12 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê jy kan Pythagoras gebruik om die diagonaal van enige reghoek te bepaal, ongeag sy afmetings. Is hy korrek? Verduidelik.',
      answer: 'Ja — die diagonaal van enige reghoek vorm altyd die skuinssy van ʼn reghoekige driehoek met die lengte en breedte as die twee sye, dus is Pythagoras altyd van toepassing.',
      checkMode: 'self',
    },

    // ── Q13 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Reghoekige driehoek het ʼn skuinssy 5 cm langer as een sy, en die ander sy is 12 cm. Bepaal al drie sye.',
      answer: 'Laat sy = x, skuinssy = x + 5.\n144 + x² = (x + 5)².\n144 + x² = x² + 10x + 25.\n119 = 10x.\nx = 11,9 cm. Skuinssy = 16,9 cm.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Leer leun teen ʼn muur, en reik 6 m teen die muur op, met sy basis 4,5 m van die muur af. Bepaal die lengte van die leer tot 2 desimale plekke.',
      answer: '7,5',
      checkMode: 'auto',
      correctAnswer: '7,5',
      correctAnswers: ['7.5', '7.50', '7.5m', '7.50m', '7.5 m', '7.50 m'],
      explanation: 'leer² = 6² + 4,5² = 36 + 20,25 = 56,25. leer = √56,25 = 7,5 m ✓',
    },

    // ── Q15 Hard (self) ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato se reghoekige tuin is 18 m by 24 m. Sy wil ʼn diagonale pad byvoeg. Bepaal die lengte daarvan, en bepaal dan die totale omheining benodig as sy die tuin se omtrek plus die diagonale pad omhein.",
      answer: 'Diagonaal = √(18² + 24²) = √(324 + 576) = √900 = 30 m.\nOmtrek = 2(18 + 24) = 84 m.\nTotale omheining = 84 + 30 = 114 m.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het die Stelling van Pythagoras bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan dit weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan — werk weer deur die studiegids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae) — diagramme word in die teks genoem, maar diagramSvg volg later (Fase 1)
    // Blok 1 (0-1):   Bepaal die skuinssy (twee sye gegee)
    // Blok 2 (2-3):   Bepaal 'n onbekende sy (skuinssy + een sy gegee)
    // Blok 3 (4-6):   Verifieer of 'n driehoek reghoekig is (omgekeerde)
    // Blok 4 (7-8):   Werklike lewe — leer teen 'n muur
    // Blok 5 (9-11):  Werklike lewe — diagonaal van 'n reghoek / afstand tussen twee punte
    // Blok 6 (12-19): Saamgestelde / meerstap-probleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Bepaal die skuinssy (Maklik)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee korter sye wat by die regte hoek ontmoet 6 cm en 8 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'c² = 6² + 8² = 36 + 64 = 100.\nc = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 9 cm en 12 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'c² = 9² + 12² = 81 + 144 = 225.\nc = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 10 cm en een sy (langs die regte hoek) 6 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'ander sy² = 10² − 6² = 100 − 36 = 64.\nander sy = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 17 cm en een sy 8 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'ander sy² = 17² − 8² = 289 − 64 = 225.\nander sy = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 9 cm, 12 cm en 15 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n9² + 12² = 81 + 144 = 225.\n15² = 225.\nAangesien 225 = 225, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">15 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 7 cm, 10 cm en 12 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee', 'NEE'], answer: 'Nee', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n7² + 10² = 49 + 100 = 149.\n12² = 144.\nAangesien 149 ≠ 144, is die driehoek nie reghoekig nie ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">12 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 20 cm, 21 cm en 29 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n20² + 21² = 400 + 441 = 841.\n29² = 841.\nAangesien 841 = 841, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">21 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">29 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 10 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 6 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8m', '8 m'], answer: '8 m', explanation: 'Die leer is die skuinssy (10 m). Die afstand van die muur is een sy (6 m).\nhoogte² = 10² − 6² = 100 − 36 = 64.\nhoogte = √64 = 8 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">10 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 12 m teen die muur op. Die punt van die leer is 5 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], answer: '13 m', explanation: 'Die muurhoogte (12 m) en basisafstand (5 m) is die twee sye. Die leer is die skuinssy.\nleer² = 12² + 5² = 144 + 25 = 169.\nleer = √169 = 13 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Thabo se reghoekige lap grond is 24 m lank en 18 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30m', '30 m'], answer: '30 m', explanation: 'Die diagonaal is die skuinssy van ʼn reghoekige driehoek met die lengte en breedte as die twee sye.\ndiagonaal² = 24² + 18² = 576 + 324 = 900.\ndiagonaal = √900 = 30 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Naledi stap 11 km langs een pad, en dan 60 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61km', '61 km'], answer: '61 km', explanation: 'Die twee paaie is die twee sye van ʼn reghoekige driehoek, en die reguit afstand is die skuinssy.\nafstand² = 11² + 60² = 121 + 3 600 = 3 721.\nafstand = √3 721 = 61 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 7 m breed en 5,5 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '8,9', correctAnswers: ['8.9', '8.90', '8.9m', '8.90m', '8.9 m', '8.90 m', '8,9', '8,90', '8,9m', '8,90m', '8,9 m', '8,90 m'], answer: '8,90 m', explanation: 'stut² = 7² + 5,5² = 49 + 30,25 = 79,25.\nstut = √79,25 ≈ 8,90 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5,5 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: "ʼn Reghoekige sportveld is 16 m by 12 m. Zanele kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal die diagonale afstand, en bepaal dan hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.", answer: 'Diagonaal = √(16² + 12²) = √(256 + 144) = √400 = 20 m.\nTwee-kant-roete = 16 + 12 = 28 m.\nVerskil = 28 − 20 = 8 m korter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 26 cm en ʼn breedte van 24 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'hoogte² = 26² − 24² = 676 − 576 = 100.\nhoogte = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 8 eenhede links en 6 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 eenhede'], answer: '10 eenhede', explanation: 'afstand² = 8² + 6² = 64 + 36 = 100.\nafstand = √100 = 10 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 8 cm en ʼn skuinssy 4 cm langer as die ander sy. Bepaal albei onbekende lengtes.', answer: 'Laat die ander sy = x. Dan is die skuinssy = x + 4.\n8² + x² = (x + 4)².\n64 + x² = x² + 8x + 16. Die x²-terme kanselleer uit: 64 = 8x + 16.\n48 = 8x, dus x = 6 cm (ander sy). Skuinssy = 6 + 4 = 10 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 16 cm en gelyke sye van 10 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 8 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (10 cm) as die skuinssy.\nhoogte² = 10² − 8² = 100 − 64 = 36.\nhoogte = √36 = 6 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Kagiso sê dat in ʼn reghoekige driehoek met sye 9 cm en 12 cm, die skuinssy 20 cm moet wees omdat 9 + 12 − 1 = 20. Verduidelik waarom hy verkeerd is en bepaal die korrekte skuinssy.', answer: 'Kagiso is verkeerd — die skuinssy word nie bepaal deur die sye bymekaar te tel nie, dit moet met die Stelling van Pythagoras bereken word. c² = 9² + 12² = 81 + 144 = 225, dus c = √225 = 15 cm, nie 20 cm nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Reghoekige lap grond is 20 m by 15 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die lengte van die diagonale pad, en bepaal dan die totale lengte omheining en padmateriaal benodig.", answer: 'Diagonaal = √(20² + 15²) = √(400 + 225) = √625 = 25 m.\nOmtrek = 2(20 + 15) = 70 m.\nTotale lengte = 70 + 25 = 95 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Twee leers, elk 13 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 5 m van die muur af, en die tweede s\'n is 12 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.', answer: 'Eerste leer: hoogte² = 13² − 5² = 169 − 25 = 144, dus hoogte = 12 m.\nTweede leer: hoogte² = 13² − 12² = 169 − 144 = 25, dus hoogte = 5 m.\nVerskil = 12 − 5 = 7 m hoër.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Stelling van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die omgekeerde of meerstap-probleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die bepaling van die skuinssy en ʼn onbekende sy weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Bepaal die skuinssy (Maklik)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 8 cm en 15 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], answer: '17 cm', explanation: 'c² = 8² + 15² = 64 + 225 = 289.\nc = √289 = 17 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 12 cm en 16 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], answer: '20 cm', explanation: 'c² = 12² + 16² = 144 + 256 = 400.\nc = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 13 cm en een sy (langs die regte hoek) 5 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'ander sy² = 13² − 5² = 169 − 25 = 144.\nander sy = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 25 cm en een sy 7 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'ander sy² = 25² − 7² = 625 − 49 = 576.\nander sy = √576 = 24 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 8 cm, 15 cm en 17 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n8² + 15² = 64 + 225 = 289.\n17² = 289.\nAangesien 289 = 289, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">15 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 6 cm, 9 cm en 11 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee', 'NEE'], answer: 'Nee', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n6² + 9² = 36 + 81 = 117.\n11² = 121.\nAangesien 117 ≠ 121, is die driehoek nie reghoekig nie ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">9 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">11 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 10 cm, 24 cm en 26 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n10² + 24² = 100 + 576 = 676.\n26² = 676.\nAangesien 676 = 676, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">26 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 13 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 12 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5m', '5 m'], answer: '5 m', explanation: 'Die leer is die skuinssy (13 m). Die afstand van die muur is een sy (12 m).\nhoogte² = 13² − 12² = 169 − 144 = 25.\nhoogte = √25 = 5 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">13 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 9 m teen die muur op. Die punt van die leer is 12 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], answer: '15 m', explanation: 'Die muurhoogte (9 m) en basisafstand (12 m) is die twee sye. Die leer is die skuinssy.\nleer² = 9² + 12² = 81 + 144 = 225.\nleer = √225 = 15 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Sipho se reghoekige lap grond is 30 m lank en 16 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34m', '34 m'], answer: '34 m', explanation: 'Die diagonaal is die skuinssy van ʼn reghoekige driehoek met die lengte en breedte as die twee sye.\ndiagonaal² = 30² + 16² = 900 + 256 = 1 156.\ndiagonaal = √1 156 = 34 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Amahle stap 12 km langs een pad, en dan 35 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37km', '37 km'], answer: '37 km', explanation: 'Die twee paaie is die twee sye van ʼn reghoekige driehoek, en die reguit afstand is die skuinssy.\nafstand² = 12² + 35² = 144 + 1 225 = 1 369.\nafstand = √1 369 = 37 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 9 m breed en 6 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '10,82', correctAnswers: ['10.82', '10.82m', '10.82 m', '10.8167', '10.8167m', '10.8167 m', '10,82', '10,82m', '10,82 m'], answer: '10,82 m', explanation: 'stut² = 9² + 6² = 81 + 36 = 117.\nstut = √117 ≈ 10,82 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: "ʼn Reghoekige sportveld is 20 m by 15 m. Lerato kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal die diagonale afstand, en bepaal dan hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.", answer: 'Diagonaal = √(20² + 15²) = √(400 + 225) = √625 = 25 m.\nTwee-kant-roete = 20 + 15 = 35 m.\nVerskil = 35 − 25 = 10 m korter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 20 cm en ʼn breedte van 16 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'hoogte² = 20² − 16² = 400 − 256 = 144.\nhoogte = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 5 eenhede links en 12 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 eenhede'], answer: '13 eenhede', explanation: 'afstand² = 5² + 12² = 25 + 144 = 169.\nafstand = √169 = 13 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 12 cm en ʼn skuinssy 6 cm langer as die ander sy. Bepaal albei onbekende lengtes.', answer: 'Laat die ander sy = x. Dan is die skuinssy = x + 6.\n12² + x² = (x + 6)².\n144 + x² = x² + 12x + 36. Die x²-terme kanselleer uit: 144 = 12x + 36.\n108 = 12x, dus x = 9 cm (ander sy). Skuinssy = 9 + 6 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 12 cm en gelyke sye van 10 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 6 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (10 cm) as die skuinssy.\nhoogte² = 10² − 6² = 100 − 36 = 64.\nhoogte = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Buhle sê dat in ʼn reghoekige driehoek met sye 12 cm en 16 cm, die skuinssy 27 cm moet wees omdat 12 + 16 − 1 = 27. Verduidelik waarom sy verkeerd is en bepaal die korrekte skuinssy.', answer: 'Buhle is verkeerd — die skuinssy word nie bepaal deur die sye bymekaar te tel nie, dit moet met die Stelling van Pythagoras bereken word. c² = 12² + 16² = 144 + 256 = 400, dus c = √400 = 20 cm, nie 27 cm nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Reghoekige lap grond is 16 m by 12 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die lengte van die diagonale pad, en bepaal dan die totale lengte omheining en padmateriaal benodig.", answer: 'Diagonaal = √(16² + 12²) = √(256 + 144) = √400 = 20 m.\nOmtrek = 2(16 + 12) = 56 m.\nTotale lengte = 56 + 20 = 76 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Twee leers, elk 10 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 6 m van die muur af, en die tweede s\'n is 8 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.', answer: 'Eerste leer: hoogte² = 10² − 6² = 100 − 36 = 64, dus hoogte = 8 m.\nTweede leer: hoogte² = 10² − 8² = 100 − 64 = 36, dus hoogte = 6 m.\nVerskil = 8 − 6 = 2 m hoër.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Stelling van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die omgekeerde of meerstap-probleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die bepaling van die skuinssy en ʼn onbekende sy weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Bepaal die skuinssy (Maklik)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 20 cm en 21 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], answer: '29 cm', explanation: 'c² = 20² + 21² = 400 + 441 = 841.\nc = √841 = 29 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 15 cm en 20 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], answer: '25 cm', explanation: 'c² = 15² + 20² = 225 + 400 = 625.\nc = √625 = 25 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 17 cm en een sy (langs die regte hoek) 15 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'ander sy² = 17² − 15² = 289 − 225 = 64.\nander sy = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 41 cm en een sy 9 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40cm', '40 cm'], answer: '40 cm', explanation: 'ander sy² = 41² − 9² = 1 681 − 81 = 1 600.\nander sy = √1 600 = 40 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 5 cm, 12 cm en 13 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n5² + 12² = 25 + 144 = 169.\n13² = 169.\nAangesien 169 = 169, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 9 cm, 10 cm en 14 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee', 'NEE'], answer: 'Nee', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n9² + 10² = 81 + 100 = 181.\n14² = 196.\nAangesien 181 ≠ 196, is die driehoek nie reghoekig nie ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">14 cm</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye 18 cm, 24 cm en 30 cm. Gebruik die omgekeerde van die Stelling van Pythagoras om te bepaal of dit reghoekig is. Antwoord "ja" of "nee".', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja', 'JA'], answer: 'Ja', explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy:\n18² + 24² = 324 + 576 = 900.\n30² = 900.\nAangesien 900 = 900, is die driehoek reghoekig ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">30 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 15 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 9 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12m', '12 m'], answer: '12 m', explanation: 'Die leer is die skuinssy (15 m). Die afstand van die muur is een sy (9 m).\nhoogte² = 15² − 9² = 225 − 81 = 144.\nhoogte = √144 = 12 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">15 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 8 m teen die muur op. Die punt van die leer is 15 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17m', '17 m'], answer: '17 m', explanation: 'Die muurhoogte (8 m) en basisafstand (15 m) is die twee sye. Die leer is die skuinssy.\nleer² = 8² + 15² = 64 + 225 = 289.\nleer = √289 = 17 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Kagiso se reghoekige lap grond is 20 m lank en 15 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], answer: '25 m', explanation: 'Die diagonaal is die skuinssy van ʼn reghoekige driehoek met die lengte en breedte as die twee sye.\ndiagonaal² = 20² + 15² = 400 + 225 = 625.\ndiagonaal = √625 = 25 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Zanele stap 14 km langs een pad, en dan 48 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50km', '50 km'], answer: '50 km', explanation: 'Die twee paaie is die twee sye van ʼn reghoekige driehoek, en die reguit afstand is die skuinssy.\nafstand² = 14² + 48² = 196 + 2 304 = 2 500.\nafstand = √2 500 = 50 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 8 m breed en 4,5 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '9,18', correctAnswers: ['9.18', '9.18m', '9.18 m', '9.1788', '9.1788m', '9.1788 m', '9,18', '9,18m', '9,18 m'], answer: '9,18 m', explanation: 'stut² = 8² + 4,5² = 64 + 20,25 = 84,25.\nstut = √84,25 ≈ 9,18 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">4,5 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: "ʼn Reghoekige sportveld is 24 m by 10 m. Sipho kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal die diagonale afstand, en bepaal dan hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.", answer: 'Diagonaal = √(24² + 10²) = √(576 + 100) = √676 = 26 m.\nTwee-kant-roete = 24 + 10 = 34 m.\nVerskil = 34 − 26 = 8 m korter.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 29 cm en ʼn breedte van 21 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], answer: '20 cm', explanation: 'hoogte² = 29² − 21² = 841 − 441 = 400.\nhoogte = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 9 eenhede links en 12 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 eenhede'], answer: '15 eenhede', explanation: 'afstand² = 9² + 12² = 81 + 144 = 225.\nafstand = √225 = 15 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 units</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 units</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 9 cm en ʼn skuinssy 3 cm langer as die ander sy. Bepaal albei onbekende lengtes.', answer: 'Laat die ander sy = x. Dan is die skuinssy = x + 3.\n9² + x² = (x + 3)².\n81 + x² = x² + 6x + 9. Die x²-terme kanselleer uit: 81 = 6x + 9.\n72 = 6x, dus x = 12 cm (ander sy). Skuinssy = 12 + 3 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 24 cm en gelyke sye van 20 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16cm', '16 cm'], answer: '16 cm', explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 12 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (20 cm) as die skuinssy.\nhoogte² = 20² − 12² = 400 − 144 = 256.\nhoogte = √256 = 16 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Amahle sê dat in ʼn reghoekige driehoek met sye 15 cm en 20 cm, die skuinssy 34 cm moet wees omdat 15 + 20 − 1 = 34. Verduidelik waarom sy verkeerd is en bepaal die korrekte skuinssy.', answer: 'Amahle is verkeerd — die skuinssy word nie bepaal deur die sye bymekaar te tel nie, dit moet met die Stelling van Pythagoras bereken word. c² = 15² + 20² = 225 + 400 = 625, dus c = √625 = 25 cm, nie 34 cm nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Reghoekige lap grond is 9 m by 12 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die lengte van die diagonale pad, en bepaal dan die totale lengte omheining en padmateriaal benodig.", answer: 'Diagonaal = √(9² + 12²) = √(81 + 144) = √225 = 15 m.\nOmtrek = 2(9 + 12) = 42 m.\nTotale lengte = 42 + 15 = 57 m.', checkMode: 'self', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 30,118 L 42,118 L 42,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Twee leers, elk 25 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 7 m van die muur af, en die tweede s\'n is 24 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.', answer: 'Eerste leer: hoogte² = 25² − 7² = 625 − 49 = 576, dus hoogte = 24 m.\nTweede leer: hoogte² = 25² − 24² = 625 − 576 = 49, dus hoogte = 7 m.\nVerskil = 24 − 7 = 17 m hoër.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Stelling van Pythagoras bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die omgekeerde of meerstap-probleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die bepaling van die skuinssy en ʼn onbekende sy weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
