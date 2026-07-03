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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a rectangle with its diagonal drawn, forming a right-angled triangle with the length, width and diagonal labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify the right-angled triangle inside a geometric figure and apply the Theorem of Pythagoras to find unknown lengths" />',
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
          question: 'ʼn Leer is 8.5 m lank en reik tot by ʼn venster 7.5 m teen ʼn muur op. Bepaal die afstand vanaf die basis van die leer tot die muur.',
          answer: `Die basisafstand = ${bl('4 m')}`,
          steps: [
            `Die leer is die ${re('skuinssy')} (8.5 m). Die muurhoogte is ʼn ${bl('bekende sy')} (7.5 m). Die ${bl('basisafstand')} is die onbekende sy.`,
            `Pas die stelling toe: ${bl('basis')}² = ${re('8.5')}² − ${bl('7.5')}² = ${re('72.25')} − ${bl('56.25')} = 16`,
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a rectangular field with diagonal path shown alongside the two-side route, with measurements labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve multi-step Pythagoras problems in real-life contexts and combined shapes, including the algebraic approach for an unknown hypotenuse" />',
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
      answer: 'Nee — die diagonaal van ʼn vierkant vorm die skuinssy van ʼn reghoekige driehoek met albei sye gelyk aan 5 cm. Diagonaal = √(5² + 5²) = √50 ≈ 7.07 cm, nie 5 cm nie.',
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
      answer: 'Laat sy = x, skuinssy = x + 5.\n144 + x² = (x + 5)².\n144 + x² = x² + 10x + 25.\n119 = 10x.\nx = 11.9 cm. Skuinssy = 16.9 cm.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Leer leun teen ʼn muur, en reik 6 m teen die muur op, met sy basis 4.5 m van die muur af. Bepaal die lengte van die leer tot 2 desimale plekke.',
      answer: '7.5',
      checkMode: 'auto',
      correctAnswer: '7.5',
      correctAnswers: ['7.5', '7.50', '7.5m', '7.50m', '7.5 m', '7.50 m'],
      explanation: 'leer² = 6² + 4.5² = 36 + 20.25 = 56.25. leer = √56.25 = 7.5 m ✓',
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
}
