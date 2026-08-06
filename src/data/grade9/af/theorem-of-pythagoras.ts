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


      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om die reghoekige driehoek binne ʼn geometriese figuur te identifiseer en die Stelling van Pythagoras toe te pas om onbekende lengtes te vind',
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


      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om multi-stap Pythagoras-probleme in werklike-lewe kontekste en saamgestelde vorms op te los, insluitend die algebraïese benadering vir ʼn onbekende skuinssy',
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
      correctAnswers: ['7.5', '7.50', '7.5m', '7.50m', '7.5 m', '7.50 m', '7,5', '7,50', '7,5m', '7,50m', '7,5 m', '7,50 m'],
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
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee korter sye wat by die regte hoek ontmoet 6 cm en 8 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['10 cm', '14 cm', '100 cm', '5,3 cm'], correctIndex: 0, explanation: 'c² = 6² + 8² = 36 + 64 = 100.\nc = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 9 cm en 12 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['21 cm', '15 cm', '225 cm', '7,9 cm'], correctIndex: 1, explanation: 'c² = 9² + 12² = 81 + 144 = 225.\nc = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 10 cm en een sy (langs die regte hoek) 6 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['4 cm', '64 cm', '8 cm', '11,7 cm'], correctIndex: 2, explanation: 'ander sy² = 10² − 6² = 100 − 36 = 64.\nander sy = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 17 cm en een sy 8 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['9 cm', '225 cm', '18,8 cm', '15 cm'], correctIndex: 3, explanation: 'ander sy² = 17² − 8² = 289 − 64 = 225.\nander sy = √225 = 15 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 9² + 12² = 15²', 'Nee — 9² + 12² ≠ 15²', 'Ja — 9 + 12 = 15', 'Nee — 9² + 15² ≠ 12²'], correctIndex: 0, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 9² + 12² = 81 + 144 = 225, en 15² = 225. Aangesien 225 = 225, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">15 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 7² + 10² = 12²', 'Nee — 7² + 10² ≠ 12²', 'Ja — 7 + 10 = 12', 'Nee — 7² + 12² ≠ 10²'], correctIndex: 1, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 7² + 10² = 49 + 100 = 149, en 12² = 144. Aangesien 149 ≠ 144, is die driehoek nie reghoekig nie — Nee ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">12 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Nee — 20² + 21² ≠ 29²', 'Ja — 20 + 21 = 29', 'Ja — 20² + 21² = 29²', 'Nee — 20² + 29² ≠ 21²'], correctIndex: 2, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 20² + 21² = 400 + 441 = 841, en 29² = 841. Aangesien 841 = 841, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">21 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">29 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 10 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 6 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', options: ['4 m', '64 m', '11,7 m', '8 m'], correctIndex: 3, explanation: 'Die leer is die skuinssy (10 m) en die basisafstand is een sy (6 m). hoogte² = 10² − 6² = 100 − 36 = 64. hoogte = √64 = 8 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">10 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 12 m teen die muur op. Die punt van die leer is 5 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', options: ['13 m', '17 m', '169 m', '10,9 m'], correctIndex: 0, explanation: 'Die muurhoogte (12 m) en basisafstand (5 m) is die twee sye. leer² = 12² + 5² = 144 + 25 = 169. leer = √169 = 13 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Thabo se reghoekige lap grond is 24 m lank en 18 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', options: ['42 m', '30 m', '900 m', '15,9 m'], correctIndex: 1, explanation: 'Die diagonaal is die skuinssy van ʼn reghoekige driehoek met die lengte en breedte as die twee sye. diagonaal² = 24² + 18² = 576 + 324 = 900. diagonaal = √900 = 30 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Naledi ry 11 km langs een pad, en dan 60 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', options: ['71 km', '3721 km', '61 km', '59 km'], correctIndex: 2, explanation: 'Die twee paaie is die twee sye van ʼn reghoekige driehoek, en die reguit afstand is die skuinssy. afstand² = 11² + 60² = 121 + 3 600 = 3 721. afstand = √3 721 = 61 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">11 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">60 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 2,4 m breed en 1,8 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', options: ['4,20 m', '9,00 m', '1,60 m', '3,00 m'], correctIndex: 3, explanation: 'stut² = 2,4² + 1,8² = 5,76 + 3,24 = 9. stut = √9 = 3,00 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">2,4 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1,8 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportveld is 16 m by 12 m. Zanele kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.', checkMode: 'auto', options: ['8 m', '20 m', '28 m', '48 m'], correctIndex: 0, explanation: 'Diagonaal² = 16² + 12² = 256 + 144 = 400, dus diagonaal = √400 = 20 m. Twee-kant-roete = 16 + 12 = 28 m. Verskil = 28 − 20 = 8 m korter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 26 cm en ʼn breedte van 24 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', options: ['2 cm', '10 cm', '100 cm', '35,4 cm'], correctIndex: 1, explanation: 'hoogte² = 26² − 24² = 676 − 576 = 100. hoogte = √100 = 10 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">26 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 8 eenhede links en 6 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', options: ['14 eenhede', '100 eenhede', '10 eenhede', '5,3 eenhede'], correctIndex: 2, explanation: 'afstand² = 8² + 6² = 64 + 36 = 100. afstand = √100 = 10 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 250 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 eenhede</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 eenhede</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 8 cm en ʼn skuinssy 4 cm langer as die ander sy. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['4 cm', '12 cm', '10 cm', '6 cm'], correctIndex: 3, explanation: 'Laat die ander sy = x, dus die skuinssy = x + 4. 8² + x² = (x + 4)². 64 + x² = x² + 8x + 16. Die x²-terme kanselleer uit: 64 = 8x + 16, dus 48 = 8x, x = 6 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 16 cm en gelyke sye van 10 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', options: ['6 cm', '2 cm', '36 cm', '12,8 cm'], correctIndex: 0, explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 8 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (10 cm) as die skuinssy. hoogte² = 10² − 8² = 100 − 64 = 36. hoogte = √36 = 6 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Kagiso sê dat in ʼn reghoekige driehoek met sye 9 cm en 12 cm, die skuinssy 20 cm moet wees omdat 9 + 12 − 1 = 20. Wat is die korrekte lengte van die skuinssy?', checkMode: 'auto', options: ['20 cm', '15 cm', '21 cm', '225 cm'], correctIndex: 1, explanation: 'Die skuinssy word nie bepaal deur die sye bymekaar te tel nie — dit moet met die Stelling van Pythagoras bereken word. c² = 9² + 12² = 81 + 144 = 225, dus c = √225 = 15 cm, nie 20 cm nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige lap grond is 20 m by 15 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die totale lengte omheining en padmateriaal benodig.', checkMode: 'auto', options: ['70 m', '25 m', '95 m', '120 m'], correctIndex: 2, explanation: 'Diagonaal² = 20² + 15² = 400 + 225 = 625, dus diagonaal = √625 = 25 m. Omtrek = 2(20 + 15) = 70 m. Totaal = 70 + 25 = 95 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: "Twee leers, elk 13 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 5 m van die muur af, en die tweede s\'n is 12 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.", checkMode: 'auto', options: ['12 m', '5 m', '17 m', '7 m'], correctIndex: 3, explanation: 'Eerste leer: hoogte² = 13² − 5² = 169 − 25 = 144, dus hoogte = 12 m. Tweede leer: hoogte² = 13² − 12² = 169 − 144 = 25, dus hoogte = 5 m. Verskil = 12 − 5 = 7 m hoër ✓' },
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
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 8 cm en 15 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['17 cm', '23 cm', '289 cm', '12,7 cm'], correctIndex: 0, explanation: 'c² = 8² + 15² = 64 + 225 = 289.\nc = √289 = 17 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 12 cm en 16 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['28 cm', '20 cm', '400 cm', '10,6 cm'], correctIndex: 1, explanation: 'c² = 12² + 16² = 144 + 256 = 400.\nc = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 13 cm en een sy (langs die regte hoek) 5 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['8 cm', '144 cm', '12 cm', '13,9 cm'], correctIndex: 2, explanation: 'ander sy² = 13² − 5² = 169 − 25 = 144.\nander sy = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 25 cm en een sy 7 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['18 cm', '576 cm', '26 cm', '24 cm'], correctIndex: 3, explanation: 'ander sy² = 25² − 7² = 625 − 49 = 576.\nander sy = √576 = 24 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">7 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">25 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 8² + 15² = 17²', 'Nee — 8² + 15² ≠ 17²', 'Ja — 8 + 15 = 17', 'Nee — 8² + 17² ≠ 15²'], correctIndex: 0, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 8² + 15² = 64 + 225 = 289, en 17² = 289. Aangesien 289 = 289, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">15 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 6² + 9² = 11²', 'Nee — 6² + 9² ≠ 11²', 'Ja — 6 + 9 = 11', 'Nee — 6² + 11² ≠ 9²'], correctIndex: 1, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 6² + 9² = 36 + 81 = 117, en 11² = 121. Aangesien 117 ≠ 121, is die driehoek nie reghoekig nie — Nee ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">9 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">11 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Nee — 10² + 24² ≠ 26²', 'Ja — 10 + 24 = 26', 'Ja — 10² + 24² = 26²', 'Nee — 10² + 26² ≠ 24²'], correctIndex: 2, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 10² + 24² = 100 + 576 = 676, en 26² = 676. Aangesien 676 = 676, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">26 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 13 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 12 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', options: ['1 m', '25 m', '17,7 m', '5 m'], correctIndex: 3, explanation: 'Die leer is die skuinssy (13 m) en die basisafstand is een sy (12 m). hoogte² = 13² − 12² = 169 − 144 = 25. hoogte = √25 = 5 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">13 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 9 m teen die muur op. Die punt van die leer is 12 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', options: ['15 m', '21 m', '225 m', '7,9 m'], correctIndex: 0, explanation: 'Die muurhoogte (9 m) en basisafstand (12 m) is die twee sye. leer² = 9² + 12² = 81 + 144 = 225. leer = √225 = 15 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Sipho se reghoekige lap grond is 30 m lank en 16 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', options: ['46 m', '34 m', '1156 m', '25,4 m'], correctIndex: 1, explanation: 'diagonaal² = 30² + 16² = 900 + 256 = 1 156. diagonaal = √1 156 = 34 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">30 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Amahle ry 12 km langs een pad, en dan 35 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', options: ['47 km', '1369 km', '37 km', '32,9 km'], correctIndex: 2, explanation: 'afstand² = 12² + 35² = 144 + 1 225 = 1 369. afstand = √1 369 = 37 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">35 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 1,6 m breed en 1,2 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', options: ['2,80 m', '4,00 m', '1,10 m', '2,00 m'], correctIndex: 3, explanation: 'stut² = 1,6² + 1,2² = 2,56 + 1,44 = 4. stut = √4 = 2,00 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1,6 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1,2 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportveld is 20 m by 15 m. Lerato kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.', checkMode: 'auto', options: ['10 m', '25 m', '35 m', '60 m'], correctIndex: 0, explanation: 'Diagonaal² = 20² + 15² = 400 + 225 = 625, dus diagonaal = √625 = 25 m. Twee-kant-roete = 20 + 15 = 35 m. Verskil = 35 − 25 = 10 m korter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 20 cm en ʼn breedte van 16 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', options: ['4 cm', '12 cm', '144 cm', '25,6 cm'], correctIndex: 1, explanation: 'hoogte² = 20² − 16² = 400 − 256 = 144. hoogte = √144 = 12 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 5 eenhede links en 12 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', options: ['17 eenhede', '169 eenhede', '13 eenhede', '10,9 eenhede'], correctIndex: 2, explanation: 'afstand² = 5² + 12² = 25 + 144 = 169. afstand = √169 = 13 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 250 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 eenhede</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 eenhede</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 12 cm en ʼn skuinssy 6 cm langer as die ander sy. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['6 cm', '18 cm', '15 cm', '9 cm'], correctIndex: 3, explanation: 'Laat die ander sy = x, dus die skuinssy = x + 6. 12² + x² = (x + 6)². 144 + x² = x² + 12x + 36. Die x²-terme kanselleer uit: 144 = 12x + 36, dus 108 = 12x, x = 9 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 12 cm en gelyke sye van 10 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', options: ['8 cm', '4 cm', '64 cm', '11,7 cm'], correctIndex: 0, explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 6 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (10 cm) as die skuinssy. hoogte² = 10² − 6² = 100 − 36 = 64. hoogte = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">6 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Buhle sê dat in ʼn reghoekige driehoek met sye 12 cm en 16 cm, die skuinssy 27 cm moet wees omdat 12 + 16 − 1 = 27. Wat is die korrekte lengte van die skuinssy?', checkMode: 'auto', options: ['27 cm', '20 cm', '28 cm', '400 cm'], correctIndex: 1, explanation: 'Die skuinssy word nie bepaal deur die sye bymekaar te tel nie — dit moet met die Stelling van Pythagoras bereken word. c² = 12² + 16² = 144 + 256 = 400, dus c = √400 = 20 cm, nie 27 cm nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige lap grond is 16 m by 12 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die totale lengte omheining en padmateriaal benodig.', checkMode: 'auto', options: ['56 m', '20 m', '76 m', '96 m'], correctIndex: 2, explanation: 'Diagonaal² = 16² + 12² = 256 + 144 = 400, dus diagonaal = √400 = 20 m. Omtrek = 2(16 + 12) = 56 m. Totaal = 56 + 20 = 76 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">16 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: "Twee leers, elk 10 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 6 m van die muur af, en die tweede s\'n is 8 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.", checkMode: 'auto', options: ['8 m', '6 m', '14 m', '2 m'], correctIndex: 3, explanation: 'Eerste leer: hoogte² = 10² − 6² = 100 − 36 = 64, dus hoogte = 8 m. Tweede leer: hoogte² = 10² − 8² = 100 − 64 = 36, dus hoogte = 6 m. Verskil = 8 − 6 = 2 m hoër ✓' },
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
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 20 cm en 21 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['29 cm', '41 cm', '841 cm', '6,4 cm'], correctIndex: 0, explanation: 'c² = 20² + 21² = 400 + 441 = 841.\nc = √841 = 29 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die twee sye wat by die regte hoek ontmoet 15 cm en 20 cm. Bepaal die lengte van die skuinssy.', checkMode: 'auto', options: ['35 cm', '25 cm', '625 cm', '13,2 cm'], correctIndex: 1, explanation: 'c² = 15² + 20² = 225 + 400 = 625.\nc = √625 = 25 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"108\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 2 — Bepaal 'n onbekende sy (Maklik/Medium)
        { difficulty: 'Easy', question: 'In die reghoekige driehoek getoon, is die skuinssy 17 cm en een sy (langs die regte hoek) 15 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['2 cm', '64 cm', '8 cm', '22,7 cm'], correctIndex: 2, explanation: 'ander sy² = 17² − 15² = 289 − 225 = 64.\nander sy = √64 = 8 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">17 cm</text></svg>" },
        { difficulty: 'Medium', question: 'In die reghoekige driehoek getoon, is die skuinssy 41 cm en een sy 9 cm. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['32 cm', '1600 cm', '42 cm', '40 cm'], correctIndex: 3, explanation: 'ander sy² = 41² − 9² = 1 681 − 81 = 1 600.\nander sy = √1 600 = 40 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 170,140 30,50\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"100\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"16\" y=\"98\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"108\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">41 cm</text></svg>" },

        // Blok 3 — Verifieer reghoekige driehoek (omgekeerde van Pythagoras) (Medium)
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 5² + 12² = 13²', 'Nee — 5² + 12² ≠ 13²', 'Ja — 5 + 12 = 13', 'Nee — 5² + 13² ≠ 12²'], correctIndex: 0, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 5² + 12² = 25 + 144 = 169, en 13² = 169. Aangesien 169 = 169, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">5 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">12 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">13 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Ja — 9² + 10² = 14²', 'Nee — 9² + 10² ≠ 14²', 'Ja — 9 + 10 = 14', 'Nee — 9² + 14² ≠ 10²'], correctIndex: 1, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 9² + 10² = 81 + 100 = 181, en 14² = 196. Aangesien 181 ≠ 196, is die driehoek nie reghoekig nie — Nee ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">10 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">14 cm</text></svg>" },
        { difficulty: 'Medium', question: 'Watter stelling hieronder is korrek?', checkMode: 'auto', options: ['Nee — 18² + 24² ≠ 30²', 'Ja — 18 + 24 = 30', 'Ja — 18² + 24² = 30²', 'Nee — 18² + 30² ≠ 24²'], correctIndex: 2, explanation: 'Kontroleer of die som van die kwadrate van die twee korter sye gelyk is aan die kwadraat van die langste sy: 18² + 24² = 324 + 576 = 900, en 30² = 900. Aangesien 900 = 900, is die driehoek reghoekig — Ja ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"35,140 185,140 120,35\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"80\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">18 cm</text><text x=\"165\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"start\">24 cm</text><text x=\"70\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"end\">30 cm</text></svg>" },

        // Blok 4 — Werklike lewe: leer teen 'n muur (Medium)
        { difficulty: 'Medium', question: 'ʼn Leer van 15 m lank leun teen ʼn vertikale muur en vorm ʼn regte hoek met die grond. Die punt van die leer is 9 m van die muur af. Bepaal hoe hoog die leer teen die muur opreik.', checkMode: 'auto', options: ['6 m', '144 m', '17,5 m', '12 m'], correctIndex: 3, explanation: 'Die leer is die skuinssy (15 m) en die basisafstand is een sy (9 m). hoogte² = 15² − 9² = 225 − 81 = 144. hoogte = √144 = 12 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"122\" y=\"72\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">15 m</text></svg>" },
        { difficulty: 'Medium', question: 'ʼn Leer leun teen ʼn vertikale muur en reik 8 m teen die muur op. Die punt van die leer is 15 m van die muur af en vorm ʼn regte hoek met die grond. Bepaal die lengte van die leer.', checkMode: 'auto', options: ['17 m', '23 m', '289 m', '12,7 m'], correctIndex: 0, explanation: 'Die muurhoogte (8 m) en basisafstand (15 m) is die twee sye. leer² = 8² + 15² = 64 + 225 = 289. leer = √289 = 17 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"180\" y2=\"140\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 40,128 L 52,128 L 52,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"24\" y=\"85\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">8 m</text><text x=\"112\" y=\"158\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"122\" y=\"72\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\" transform=\"rotate(-52 122 72)\">?</text></svg>" },

        // Blok 5 — Werklike lewe: diagonaal van 'n reghoek / afstand tussen twee punte (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Kagiso se reghoekige lap grond is 20 m lank en 15 m breed. Bepaal die lengte van die diagonale pad oor die lap grond.', checkMode: 'auto', options: ['35 m', '25 m', '625 m', '13,2 m'], correctIndex: 1, explanation: 'diagonaal² = 20² + 15² = 400 + 225 = 625. diagonaal = √625 = 25 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'Twee reguit paaie ontmoet by ʼn regte hoek. Zanele ry 14 km langs een pad, en dan 48 km langs die ander. Bepaal die reguit afstand terug na haar beginpunt.', checkMode: 'auto', options: ['62 km', '2500 km', '50 km', '45,9 km'], correctIndex: 2, explanation: 'afstand² = 14² + 48² = 196 + 2 304 = 2 500. afstand = √2 500 = 50 km ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 30,40\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><path d=\"M 30,128 L 42,128 L 42,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">14 km</text><text x=\"14\" y=\"95\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">48 km</text><text x=\"120\" y=\"82\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Medium-Hard', question: 'ʼn Reghoekige hek is 3 m breed en 1,6 m hoog. Bepaal die lengte van ʼn diagonale stut vir die hek, tot 2 desimale plekke.', checkMode: 'auto', options: ['4,60 m', '11,56 m', '2,50 m', '3,40 m'], correctIndex: 3, explanation: 'stut² = 3² + 1,6² = 9 + 2,56 = 11,56. stut = √11,56 = 3,40 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">3 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">1,6 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },

        // Blok 6 — Saamgestelde / meerstap-probleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportveld is 24 m by 10 m. Sipho kan óf om twee kante van die veld loop óf reguit oor die diagonaal stap. Bepaal hoeveel korter dit is om die diagonaal te stap as om twee kante te loop.', checkMode: 'auto', options: ['8 m', '26 m', '34 m', '60 m'], correctIndex: 0, explanation: 'Diagonaal² = 24² + 10² = 576 + 100 = 676, dus diagonaal = √676 = 26 m. Twee-kant-roete = 24 + 10 = 34 m. Verskil = 34 − 26 = 8 m korter ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">24 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">10 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige TV-skerm het ʼn diagonaal van 29 cm en ʼn breedte van 21 cm. Bepaal die hoogte van die skerm.', checkMode: 'auto', options: ['8 cm', '20 cm', '400 cm', '35,8 cm'], correctIndex: 1, explanation: 'hoogte² = 29² − 21² = 841 − 441 = 400. hoogte = √400 = 20 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">21 cm</text><text x=\"14\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text><text x=\"130\" y=\"78\" font-size=\"13\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">29 cm</text></svg>" },
        { difficulty: 'Hard', question: 'Op ʼn rooster is punt A 9 eenhede links en 12 eenhede onder punt B. Deur hierdie as die twee loodregte sye van ʼn reghoekige driehoek te beskou, bepaal die reguit afstand AB.', checkMode: 'auto', options: ['21 eenhede', '225 eenhede', '15 eenhede', '7,9 eenhede'], correctIndex: 2, explanation: 'afstand² = 9² + 12² = 81 + 144 = 225. afstand = √225 = 15 eenhede ✓', diagramSvg: "<svg viewBox=\"0 0 250 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"40\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"188\" y=\"38\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">B</text><circle cx=\"30\" cy=\"130\" r=\"3.5\" fill=\"#0f1f3d\"/><text x=\"14\" y=\"146\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\">A</text><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><line x1=\"180\" y1=\"130\" x2=\"180\" y2=\"40\" stroke=\"#0f1f3d\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 180,118 L 168,118 L 168,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"105\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 eenhede</text><text x=\"196\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 eenhede</text><text x=\"95\" y=\"80\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het een sy van 9 cm en ʼn skuinssy 3 cm langer as die ander sy. Bepaal die lengte van die ander sy.', checkMode: 'auto', options: ['6 cm', '24 cm', '15 cm', '12 cm'], correctIndex: 3, explanation: 'Laat die ander sy = x, dus die skuinssy = x + 3. 9² + x² = (x + 3)². 81 + x² = x² + 6x + 9. Die x²-terme kanselleer uit: 81 = 6x + 9, dus 72 = 6x, x = 12 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het basis 24 cm en gelyke sye van 20 cm. Bepaal die hoogte van die driehoek, wat die basis by ʼn regte hoek by sy middelpunt ontmoet.', checkMode: 'auto', options: ['16 cm', '8 cm', '256 cm', '23,3 cm'], correctIndex: 0, explanation: 'Die hoogte verdeel die basis in twee gelyke dele van 12 cm elk, wat ʼn reghoekige driehoek vorm met die gelyke sy (20 cm) as die skuinssy. hoogte² = 20² − 12² = 400 − 144 = 256. hoogte = √256 = 16 cm ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,140 190,140 110,30\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"140\" x2=\"110\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/><path d=\"M 110,128 L 122,128 L 122,140\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"150\" y=\"158\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 cm</text><text x=\"158\" y=\"82\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">20 cm</text><text x=\"96\" y=\"88\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"end\">?</text></svg>" },
        { difficulty: 'Hard', question: 'Amahle sê dat in ʼn reghoekige driehoek met sye 15 cm en 20 cm, die skuinssy 34 cm moet wees omdat 15 + 20 − 1 = 34. Wat is die korrekte lengte van die skuinssy?', checkMode: 'auto', options: ['34 cm', '25 cm', '35 cm', '625 cm'], correctIndex: 1, explanation: 'Die skuinssy word nie bepaal deur die sye bymekaar te tel nie — dit moet met die Stelling van Pythagoras bereken word. c² = 15² + 20² = 225 + 400 = 625, dus c = √625 = 25 cm, nie 34 cm nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige lap grond is 9 m by 12 m. Die eienaar wil die omtrek van die lap grond omhein sowel as ʼn diagonale pad daaroor bou. Bepaal die totale lengte omheining en padmateriaal benodig.', checkMode: 'auto', options: ['42 m', '15 m', '57 m', '72 m'], correctIndex: 2, explanation: 'Diagonaal² = 9² + 12² = 81 + 144 = 225, dus diagonaal = √225 = 15 m. Omtrek = 2(9 + 12) = 42 m. Totaal = 42 + 15 = 57 m ✓', diagramSvg: "<svg viewBox=\"0 0 220 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"160\" height=\"90\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"40\" stroke=\"#ea580c\" stroke-width=\"2\"/><path d=\"M 190,118 L 178,118 L 178,130\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"1.5\"/><text x=\"110\" y=\"148\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">9 m</text><text x=\"14\" y=\"88\" font-size=\"14\" fill=\"#2563eb\" font-weight=\"700\" text-anchor=\"middle\">12 m</text><text x=\"120\" y=\"78\" font-size=\"15\" fill=\"#ea580c\" font-weight=\"700\" text-anchor=\"middle\">?</text></svg>" },
        { difficulty: 'Hard', question: "Twee leers, elk 15 m lank, leun teen dieselfde vertikale muur teen regte hoeke met die grond. Die eerste leer se punt is 9 m van die muur af, en die tweede s\'n is 12 m van die muur af. Bepaal hoeveel hoër die eerste leer teen die muur opreik as die tweede.", checkMode: 'auto', options: ['12 m', '9 m', '21 m', '3 m'], correctIndex: 3, explanation: 'Eerste leer: hoogte² = 15² − 9² = 225 − 81 = 144, dus hoogte = 12 m. Tweede leer: hoogte² = 15² − 12² = 225 − 144 = 81, dus hoogte = 9 m. Verskil = 12 − 9 = 3 m hoër ✓' },
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
