import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (common fractions roles) ──────────────────────────────────
// conversion steps → blue   (#2563eb)
// operations       → orange (#ea580c)
// final answer     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — AL VIER BEWERKINGS MET BREUKE EN GEMENGDE GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'all-four-operations',
      title: 'Al Vier Bewerkings met Breuke en Gemengde Getalle',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Ons konsolideer optelling, aftrekking, vermenigvuldiging en deling van gewone breuke en gemengde getalle, en pas hierdie vaardighede met selfvertroue in veelstap-probleme toe sonder om elke individuele bewerking apart te verduidelik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omskakelingstappe')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewerkings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 2⅓ + 1½ − ¾.',
          answer: gr('3 1/12'),
          steps: [
            `${bl('Skakel om na onegte breuke:')} 2⅓ = ${bl('7/3')}, &nbsp; 1½ = ${bl('3/2')}. Uitdrukking: 7/3 ${or('+')} 3/2 ${or('−')} ¾.`,
            `${bl('KGV van 3, 2 en 4 = 12.')} Skryf ekwivalente breuke: 7/3 = 28/12, &nbsp; 3/2 = 18/12, &nbsp; 3/4 = 9/12.`,
            `${or('Bereken:')} 28/12 ${or('+')} 18/12 ${or('−')} 9/12 = 37/12.`,
            `${gr('Skakel om na ʼn gemengde getal:')} 37/12 = ${gr('3 1/12')}.`,
          ],
        },
        {
          question: 'Bereken ⅗ × 2½ ÷ ¾.',
          answer: gr('2'),
          steps: [
            `${bl('Skakel die gemengde getal om:')} 2½ = ${bl('5/2')}. Uitdrukking: 3/5 ${or('×')} 5/2 ${or('÷')} 3/4.`,
            `${or('Vermenigvuldig die eerste twee breuke:')} 3/5 × 5/2 = 15/10 = ${or('3/2')}.`,
            `${or('Deel deur ¾ — vermenigvuldig met sy resiprook:')} 3/2 ${or('×')} 4/3 = 12/6 = ${gr('2')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat veelstap-berekenings met gewone breuke en gemengde getalle wys deur al vier bewerkings te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KWADRATE, KUBUSSE EN WORTELS VAN GEWONE BREUKE IN VEELSTAP-PROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots',
      title: 'Kwadrate, Kubusse en Wortels van Gewone Breuke in Veelstap-Probleme',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas kwadrate, kubusse, vierkantswortels en kubuswortels van gewone breuke toe binne groter saamgestelde berekenings, en integreer hierdie vaardighede met ander breukbewerkings.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwadrate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('wortels')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken (⅔)² + 1/9.',
          answer: gr('5/9'),
          steps: [
            `${bl('Kwadreer die breuk:')} (2/3)² = ${bl('4/9')}.`,
            `${or('Tel op:')} 4/9 ${or('+')} 1/9 = ${gr('5/9')}.`,
          ],
        },
        {
          question: 'Sipho bereken √(4/25) × (½)³.',
          answer: gr('1/20'),
          steps: [
            `${or('Vind die vierkantswortel:')} √(4/25) = ${or('2/5')}.`,
            `${bl('Kubeer die breuk:')} (1/2)³ = ${bl('1/8')}.`,
            `${or('Vermenigvuldig:')} 2/5 ${or('×')} 1/8 = 2/40 = ${gr('1/20')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kwadrate, kubusse, vierkantswortels en kubuswortels van gewone breuke in veelstap-probleme toe te pas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat die kwadrering en vierkantswortel-trekking van ʼn gewone breuk wys met teller en noemer apart hanteer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — PROBLEME MET BREUKE, GEMENGDE GETALLE EN PERSENTASIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fractions-mixed-numbers-percentages',
      title: 'Oplos van Probleme met Breuke, Gemengde Getalle en Persentasies',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike-lewe, veelstap-probleme op wat gewone breuke, gemengde getalle en persentasies saam behels, en pas ons volle reeks breukvaardighede in konteks toe.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato het 3½ meter lint. Sy gebruik 40% daarvan vir een geskenk en ¼ van die oorblyfsel vir ʼn tweede geskenk. Hoeveel lint bly oor?',
          answer: gr('1.575 m'),
          steps: [
            `${or('40% van 3.5 m:')} 0.4 × 3.5 = ${or('1.4 m')} gebruik vir die eerste geskenk.`,
            `${bl('Oorblyfsel:')} 3.5 − 1.4 = ${bl('2.1 m')}.`,
            `${bl('¼ van 2.1 m:')} 2.1 ÷ 4 = ${bl('0.525 m')} gebruik vir die tweede geskenk.`,
            `${gr('Oor:')} 2.1 − 0.525 = ${gr('1.575 m')}.`,
          ],
        },
        {
          question: 'Thabo verdien R4 800. Hy spaar ⅓ daarvan en spandeer 25% van die oorblyfsel aan kos. Hoeveel het hy na albei oor?',
          answer: gr('R2 400'),
          steps: [
            `${bl('Gespaar:')} ⅓ × 4 800 = ${bl('R1 600')}.`,
            `${bl('Oorblyfsel:')} 4 800 − 1 600 = ${bl('R3 200')}.`,
            `${or('Kos:')} 25% × 3 200 = ${or('R800')}.`,
            `${gr('Oor:')} 3 200 − 800 = ${gr('R2 400')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat veelstap werklike-lewe-probleme wys wat gewone breuke, gemengde getalle en persentasies kombineer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Staafmodel wat ʼn hoeveelheid wys wat eers deur ʼn breuk en dan deur ʼn persentasie van die oorblyfsel verdeel word" />',
    },
  ],

  topicPractice: [
    // ── V1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken ¾ + ⅔.',
      answer: '1 5/12',
      checkMode: 'auto',
      correctAnswer: '1 5/12',
      explanation: 'KGV van 4 en 3 is 12.\n¾ = 9/12, ⅔ = 8/12.\n9/12 + 8/12 = 17/12 = 1 5/12 ✓',
    },

    // ── V2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 2½ − 1¾.',
      answer: '3/4',
      checkMode: 'auto',
      correctAnswer: '3/4',
      explanation: 'Skakel om: 2½ = 5/2 = 10/4, 1¾ = 7/4.\n10/4 − 7/4 = 3/4 ✓',
    },

    // ── V3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bereken 1⅓ × ⅖ ÷ ⅓ en kry 1⅗. Gaan sy antwoord na.',
      answer: 'Skakel om: 4/3 × 2/5 ÷ 1/3 = 4/3 × 2/5 × 3/1 = 24/15 = 1 3/5. Hy is korrek.',
      checkMode: 'self',
    },

    // ── V4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken (⅗)².',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: '(3/5)² = 3²/5² = 9/25 ✓',
    },

    // ── V5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken √(9/16) + ¼.',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: '√(9/16) = 3/4.\n3/4 + 1/4 = 4/4 = 1 ✓',
    },

    // ── V6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die kubus van ⅔ en tel dit by ⅓.',
      answer: '(2/3)³ = 8/27. 8/27 + 1/3 = 8/27 + 9/27 = 17/27.',
      checkMode: 'self',
    },

    // ── V7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato het 4¼ liter verf. Sy gebruik ⅓ daarvan op een muur. Hoeveel bly oor?',
      answer: '2 5/6 liter',
      checkMode: 'auto',
      correctAnswer: '2 5/6',
      correctAnswers: ['2 5/6', '17/6', '2.833'],
      explanation: '4¼ = 17/4. Gebruik: 1/3 × 17/4 = 17/12.\nOor: 17/4 − 17/12 = 51/12 − 17/12 = 34/12 = 2 10/12 = 2 5/6 liter ✓',
    },

    // ── V8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo verdien R6 000. Hy spaar ¼ daarvan en spandeer 30% van die oorblyfsel aan vervoer. Hoeveel het hy na albei oor?',
      answer: 'Gespaar = 1 500. Oorblyfsel = 4 500. Vervoer = 30% × 4 500 = 1 350. Oor = 4 500 − 1 350 = 3 150.',
      checkMode: 'self',
    },

    // ── V9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken ⅚ ÷ (½)².',
      answer: '3 1/3',
      checkMode: 'auto',
      correctAnswer: '3 1/3',
      correctAnswers: ['3 1/3', '10/3', '3.333'],
      explanation: '(1/2)² = 1/4.\n5/6 ÷ 1/4 = 5/6 × 4 = 20/6 = 10/3 = 3 1/3 ✓',
    },

    // ── V10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê (½)³ is groter as (½)². Is sy korrek? Verduidelik.',
      answer: 'Nee — (1/2)³ = 1/8 is kleiner as (1/2)² = 1/4, aangesien die vermenigvuldiging van breuke kleiner as 1 met hulself die resultaat elke keer kleiner maak.',
      checkMode: 'self',
    },

    // ── V11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 2⅔ × ¾ − ½.',
      answer: '1 1/2',
      checkMode: 'auto',
      correctAnswer: '3/2',
      correctAnswers: ['3/2', '1 1/2', '1½', '1.5'],
      explanation: '2⅔ = 8/3. 8/3 × 3/4 = 24/12 = 2. 2 − 1/2 = 3/2 = 1½ ✓',
    },

    // ── V12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Resep het 2¼ koppies meel nodig. Sipho wil 60% van die resep maak. Hoeveel koppies het hy nodig?',
      answer: '1 7/20 koppies',
      checkMode: 'auto',
      correctAnswer: '1 7/20',
      correctAnswers: ['1 7/20', '27/20', '1.35'],
      explanation: '2¼ = 9/4. 60% = 3/5.\n3/5 × 9/4 = 27/20 = 1 7/20 koppies ✓',
    },

    // ── V13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken √(1/9) + (2/3)² − 1/9.',
      answer: '4/9',
      checkMode: 'self',
    },

    // ── V14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het R3 600. Sy spandeer ⅙ aan huur en dan ¼ van wat oorbly aan kos. Hoeveel het sy oor?',
      answer: 'Huur = 600. Oorblyfsel = 3 000. Kos = ¼ × 3 000 = 750. Oor = 3 000 − 750 = 2 250.',
      checkMode: 'self',
    },

    // ── V15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die optelling van twee breuke kleiner as 1 kan nooit ʼn antwoord groter as 1 gee nie. Is hy korrek? Verduidelik met ʼn voorbeeld.',
      answer: 'Nee — byvoorbeeld ¾ + ⅔ = 1 5/12, wat groter is as 1, alhoewel albei breuke individueel kleiner as 1 was.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het gewone breuke bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk deur die gids weer.' },
    ],
  },
}
