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
        'Visuele voorstelling wat die kwadrering en vierkantswortel-trekking van ʼn gewone breuk wys deur die teller en noemer apart te hanteer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 170" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="10" y="25" font-size="11" fill="#6b7280">Kwadreer:</text>` +
        `<text x="70" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">2</text>` +
        `<line x1="55" y1="32" x2="85" y2="32" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="70" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="120" y="28" text-anchor="middle" font-size="8" fill="#6b7280">kwadreer bo &amp; onder</text>` +
        `<line x1="95" y1="35" x2="140" y2="35" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="146,35 138,31 138,39" fill="#0f1f3d"/>` +
        `<text x="185" y="25" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4</text>` +
        `<line x1="170" y1="32" x2="200" y2="32" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="185" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">9</text>` +
        `<line x1="10" y1="85" x2="310" y2="85" stroke="#e2e8f0" stroke-width="1"/>` +
        `<text x="10" y="115" font-size="11" fill="#6b7280">Worteltrek:</text>` +
        `<text x="48" y="121" font-size="18" font-weight="700" fill="#2563eb">√</text>` +
        `<text x="85" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">4</text>` +
        `<line x1="70" y1="115" x2="100" y2="115" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="85" y="131" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">25</text>` +
        `<text x="135" y="108" text-anchor="middle" font-size="8" fill="#6b7280">wortel bo &amp; onder</text>` +
        `<line x1="110" y1="118" x2="155" y2="118" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="161,118 153,114 153,122" fill="#0f1f3d"/>` +
        `<text x="200" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">2</text>` +
        `<line x1="185" y1="115" x2="215" y2="115" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="200" y="131" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="160" y="160" text-anchor="middle" font-size="9" fill="#6b7280">Kwadreer of trek die wortel van teller en noemer apart</text>` +
        `</svg>`,
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
          answer: gr('1,575 m'),
          steps: [
            `${or('40% van 3,5 m:')} 0,4 × 3,5 = ${or('1,4 m')} gebruik vir die eerste geskenk.`,
            `${bl('Oorblyfsel:')} 3,5 − 1,4 = ${bl('2,1 m')}.`,
            `${bl('¼ van 2,1 m:')} 2,1 ÷ 4 = ${bl('0,525 m')} gebruik vir die tweede geskenk.`,
            `${gr('Oor:')} 2,1 − 0,525 = ${gr('1,575 m')}.`,
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
        'Staafmodel wat ʼn hoeveelheid wys wat eers deur ʼn breuk verdeel word, en dan ʼn persentasie van wat oorbly',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 145" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="160" y="12" text-anchor="middle" font-size="9" fill="#6b7280">Totale hoeveelheid</text>` +
        `<rect x="20" y="18" width="280" height="24" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="18" width="112" height="24" fill="rgba(234,88,12,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="132" y="18" width="168" height="24" fill="rgba(22,163,74,0.15)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="76" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#7c2d12">gebruik (breuk)</text>` +
        `<text x="216" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">oorblyfsel</text>` +
        `<line x1="216" y1="42" x2="160" y2="72" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<polygon points="160,78 155,68 165,70" fill="#0f1f3d"/>` +
        `<text x="255" y="60" text-anchor="middle" font-size="8" fill="#6b7280">oorblyfsel word die nuwe geheel</text>` +
        `<text x="160" y="69" text-anchor="middle" font-size="9" fill="#6b7280">Oorblyfsel = nuwe 100%</text>` +
        `<rect x="20" y="75" width="280" height="24" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="75" width="70" height="24" fill="rgba(234,88,12,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="90" y="75" width="210" height="24" fill="rgba(22,163,74,0.25)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="55" y="91" text-anchor="middle" font-size="9" font-weight="700" fill="#7c2d12">gebruik (%)</text>` +
        `<text x="195" y="91" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">oor</text>` +
        `<text x="160" y="130" text-anchor="middle" font-size="10" fill="#6b7280">Eers ʼn breuk, dan ʼn persentasie van wat oorbly</text>` +
        `</svg>`,
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

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Bloklayout per stel: 1-3 veelstap-uitdrukkings met breuke/gemengde getalle
  // en hakies wat die korrekte bewerkingsvolgorde vereis (Medium/Hard) | 4-6
  // kwadrate, kubusse en wortels van breuke geïntegreer in groter uitdrukkings
  // (Medium-Hard/Hard) | 7-9 enkelstap gekombineerde breuk-en-persentasie
  // woordprobleme (Medium-Hard/Hard) | 10-13 veelstap werklike-lewe-probleme
  // met opeenvolgende breuk- en persentasieverminderings van geld/tyd/
  // hoeveelhede (Hard) | 14-17 breuke met eksponente/wortels in konteks
  // (oppervlakte, geld) plus komplekse veelstap woordprobleme (Hard) | 18-20
  // foutopsporing, kritiek en vergelyking/rangskikking (Hard)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1: veelstap-uitdrukkings met bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 2⅓ × ¾ + ½, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '2 1/4', checkMode: 'auto', correctAnswer: '2 1/4', correctAnswers: ['2 1/4', '9/4', '2¼'], explanation: 'Stap 1: Skakel die gemengde getal om: 2⅓ = 7/3.\nStap 2: Vermenigvuldiging voor optelling: 7/3 × 3/4 = 21/12 = 7/4.\nStap 3: Tel op: 7/4 + 1/2 = 7/4 + 2/4 = 9/4.\nAntwoord: 9/4 = 2 1/4 ✓' },
        { difficulty: 'Hard', question: 'Bereken (⅚ − ¼) × ⅔ − 1/9.', answer: '5/18', checkMode: 'auto', correctAnswer: '5/18', correctAnswers: ['5/18'], explanation: 'Stap 1: Werk eers die hakie uit: 5/6 − 1/4. KGV van 6 en 4 is 12: 10/12 − 3/12 = 7/12.\nStap 2: Vermenigvuldig: 7/12 × 2/3 = 14/36 = 7/18.\nStap 3: Trek af: 7/18 − 1/9 = 7/18 − 2/18 = 5/18.\nAntwoord: 5/18 ✓' },
        { difficulty: 'Hard', question: 'Bereken 3½ − (⅔ + ⅙) × ⅗.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Stap 1: Werk die hakie uit: 2/3 + 1/6 = 4/6 + 1/6 = 5/6.\nStap 2: Vermenigvuldig: 5/6 × 3/5 = 15/30 = 1/2.\nStap 3: Trek af van 3½ = 7/2: 7/2 − 1/2 = 6/2 = 3.\nAntwoord: 3 ✓' },

        // Blok 2: kwadrate, kubusse en wortels geïntegreer in groter uitdrukkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (⅖)² + 3/10.', answer: '23/50', checkMode: 'auto', correctAnswer: '23/50', correctAnswers: ['23/50'], explanation: 'Stap 1: Kwadreer die breuk: (2/5)² = 4/25.\nStap 2: Vind die KGV van 25 en 10: KGV = 50. Skakel om: 4/25 = 8/50, 3/10 = 15/50.\nStap 3: Tel die tellers op: 8 + 15 = 23.\nAntwoord: 23/50 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(16/25) × ¾ + ⅕.', answer: '4/5', checkMode: 'auto', correctAnswer: '4/5', correctAnswers: ['4/5'], explanation: 'Stap 1: Vind die vierkantswortel: √(16/25) = √16/√25 = 4/5.\nStap 2: Vermenigvuldig: 4/5 × 3/4 = 12/20 = 3/5.\nStap 3: Tel op: 3/5 + 1/5 = 4/5.\nAntwoord: 4/5 ✓' },
        { difficulty: 'Hard', question: 'Bereken (½)³ + (⅔)² − ¼.', answer: '23/72', checkMode: 'auto', correctAnswer: '23/72', correctAnswers: ['23/72'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/2)³ = 1/8.\nStap 2: Kwadreer die tweede breuk: (2/3)² = 4/9.\nStap 3: Tel op met KGV van 8 en 9 = 72: 1/8 = 9/72, 4/9 = 32/72, dus 9/72 + 32/72 = 41/72.\nStap 4: Trek 1/4 = 18/72 af: 41/72 − 18/72 = 23/72.\nAntwoord: 23/72 ✓' },

        // Blok 3: enkelstap gekombineerde breuk-en-persentasie woordprobleme (V7-9)
        { difficulty: 'Medium-Hard', question: 'ʼn Beker bevat 3⅗ liter sap. As 20% van die sap uitgegooi word, hoeveel liter is dit?', answer: '18/25 liter', checkMode: 'auto', correctAnswer: '18/25', correctAnswers: ['18/25', '0,72', '0,72 liter', '18/25 liter'], explanation: 'Stap 1: Skakel die gemengde getal om: 3⅗ = 18/5.\nStap 2: Skryf 20% as ʼn breuk: 20% = 1/5.\nStap 3: Vermenigvuldig: 1/5 × 18/5 = 18/25.\nAntwoord: 18/25 liter (= 0,72 liter) ✓' },
        { difficulty: 'Hard', question: 'Bereken ⅜ van R960. Bereken dan 25% van daardie resultaat.', answer: 'R90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'R90'], explanation: 'Stap 1: Bereken 3/8 van R960: 3/8 × 960 = R360.\nStap 2: Bereken 25% van R360: 1/4 × 360 = R90.\nAntwoord: R90 ✓' },
        { difficulty: 'Hard', question: '⅖ van ʼn getal is 24. Wat is 75% van dieselfde getal?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: 'Stap 1: Vind die getal: as 2/5 daarvan 24 is, is die getal 24 ÷ 2/5 = 24 × 5/2 = 60.\nStap 2: Vind 75% van 60: 3/4 × 60 = 45.\nAntwoord: 45 ✓' },

        // Blok 4: veelstap werklike-lewe-probleme met opeenvolgende verminderings (V10-13)
        { difficulty: 'Hard', question: 'Thabo verdien R5 400 vir vakansiewerk. Hy spaar ⅓ daarvan, en spandeer dan 20% van wat oorbly aan data. Hoeveel het hy oor?', answer: 'R2 880', checkMode: 'auto', correctAnswer: '2880', correctAnswers: ['2880', 'R2880', 'R2 880'], explanation: 'Stap 1: Spaargeld: 1/3 × 5 400 = R1 800. Oorblyfsel: 5 400 − 1 800 = R3 600.\nStap 2: Data: 20% × 3 600 = R720. Oorblyfsel: 3 600 − 720 = R2 880.\nAntwoord: R2 880 ✓' },
        { difficulty: 'Hard', question: 'Sarah het 3¾ uur vrye tyd. Sy spandeer ⅖ daarvan om te studeer, en dan ⅓ van wat oorbly om te rus. Hoeveel tyd bly oor?', answer: '1 1/2 uur', checkMode: 'auto', correctAnswer: '1 1/2', correctAnswers: ['1 1/2', '3/2', '1,5', '1½ uur'], explanation: 'Stap 1: Skakel om: 3¾ = 15/4. Studeer: 2/5 × 15/4 = 30/20 = 3/2. Oorblyfsel: 15/4 − 3/2 = 15/4 − 6/4 = 9/4.\nStap 2: Rus: 1/3 × 9/4 = 9/12 = 3/4. Oorblyfsel: 9/4 − 3/4 = 6/4 = 3/2.\nAntwoord: 1 1/2 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool het 720 leerders. ⅝ van hulle speel sport. Van diegene wat sport speel, speel 40% sokker. Hoeveel leerders speel sokker?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180'], explanation: 'Stap 1: Leerders wat sport speel: 5/8 × 720 = 450.\nStap 2: Van hulle, sokkerspelers: 40% × 450 = 180.\nAntwoord: 180 leerders ✓' },
        { difficulty: 'Hard', question: 'ʼn Blik bevat 2½ liter verf. 30% word op een muur gebruik, en dan ¼ van wat oorbly op ʼn tweede muur. Hoeveel verf bly oor?', answer: '1 5/16 liter', checkMode: 'auto', correctAnswer: '1 5/16', correctAnswers: ['1 5/16', '21/16', '1,3125', '1 5/16 liter'], explanation: 'Stap 1: Skakel om: 2½ = 5/2. Eerste muur: 30% × 5/2 = 3/10 × 5/2 = 15/20 = 3/4. Oorblyfsel: 5/2 − 3/4 = 10/4 − 3/4 = 7/4.\nStap 2: Tweede muur: 1/4 × 7/4 = 7/16. Oorblyfsel: 7/4 − 7/16 = 28/16 − 7/16 = 21/16.\nAntwoord: 1 5/16 liter ✓' },

        // Blok 5: breuke met eksponente/wortels in konteks plus komplekse veelstap probleme (V14-17)
        { difficulty: 'Hard', question: 'ʼn Vierkantige landjie het ʼn sylengte van 2⅔ m. Bereken die oppervlakte van die landjie, en trek dan ½ m² af vir ʼn hek. Wat is die oorblywende oppervlakte?', answer: '6 11/18 m²', checkMode: 'auto', correctAnswer: '6 11/18', correctAnswers: ['6 11/18', '119/18', '6 11/18 m²'], explanation: 'Stap 1: Skakel om: 2⅔ = 8/3. Oppervlakte = (8/3)² = 64/9.\nStap 2: Trek 1/2 af: KGV van 9 en 2 is 18. 64/9 = 128/18, 1/2 = 9/18. 128/18 − 9/18 = 119/18.\nAntwoord: 119/18 = 6 11/18 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Besigheid sit √(1/16) van sy wins van R2 800 opsy vir herstelwerk. Dit spandeer dan ⅗ van wat oorbly aan lone. Hoeveel wins bly oor?', answer: 'R840', checkMode: 'auto', correctAnswer: '840', correctAnswers: ['840', 'R840'], explanation: 'Stap 1: √(1/16) = 1/4. Herstelwerk: 1/4 × 2 800 = R700. Oorblyfsel: 2 800 − 700 = R2 100.\nStap 2: Lone: 3/5 × 2 100 = R1 260. Oorblyfsel: 2 100 − 1 260 = R840.\nAntwoord: R840 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik ¾ koppie meel per bondel muffins. Zinhle bak 2⅓ bondels, en voeg dan ʼn ekstra (½)² koppie meel by om te bestrooi. Hoeveel meel gebruik sy in totaal?', answer: '2 koppies', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 koppies'], explanation: 'Stap 1: Meel vir die bondels: 3/4 × 2⅓ = 3/4 × 7/3 = 21/12 = 7/4.\nStap 2: Ekstra om te bestrooi: (1/2)² = 1/4.\nStap 3: Tel op: 7/4 + 1/4 = 8/4 = 2.\nAntwoord: 2 koppies ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige landjie het ʼn lengte van 4½ m. Sy breedte is ⅔ van die lengte. Bereken die oppervlakte van die landjie, en trek dan (⅓)² van die oppervlakte af vir ʼn paadjie. Watter oppervlakte bly oor?', answer: '12 m²', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 m²'], explanation: 'Stap 1: Breedte = 2/3 × 4 1/2 = 2/3 × 9/2 = 18/6 = 3 m. Oppervlakte = 4 1/2 × 3 = 9/2 × 3 = 27/2 m².\nStap 2: Paadjiebreuk: (1/3)² = 1/9. Paadjie-oppervlakte: 1/9 × 27/2 = 27/18 = 3/2 m².\nStap 3: Oorblywende oppervlakte: 27/2 − 3/2 = 24/2 = 12 m².\nAntwoord: 12 m² ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Bongani bereken ½ + ¼ × ⅔ deur eers ½ en ¼ op te tel, en dan met ⅔ te vermenigvuldig, en kry ½ as sy antwoord. Wat is die korrekte antwoord as die regte bewerkingsvolgorde gebruik word?', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3'], explanation: 'Stap 1: Vermenigvuldiging moet voor optelling gedoen word: 1/4 × 2/3 = 2/12 = 1/6.\nStap 2: Tel op: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.\nAntwoord: 2/3 ✓ (Bongani was verkeerd om eers op te tel — daar was geen hakie om ½ + ¼ nie.)' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: (⅔)², 5/9, √¼ + ⅙.', answer: '(2/3)^2, 5/9, sqrt(1/4)+1/6', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle sê (¾)² + (¼)² gee dieselfde antwoord as (¾ + ¼)². Bereken albei kante en verduidelik of sy korrek is.', answer: 'Nee — (3/4)² + (1/4)² = 9/16 + 1/16 = 10/16 = 5/8, maar (3/4 + 1/4)² = 1² = 1. Die twee uitdrukkings is nie gelyk nie, omdat kwadrering nie oor optelling versprei nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn rotsvaste begrip van Graad 9 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1: veelstap-uitdrukkings met bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 1⅗ × ⅔ + ¼, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '1 19/60', checkMode: 'auto', correctAnswer: '1 19/60', correctAnswers: ['1 19/60', '79/60'], explanation: 'Stap 1: Skakel die gemengde getal om: 1⅗ = 8/5.\nStap 2: Vermenigvuldiging voor optelling: 8/5 × 2/3 = 16/15.\nStap 3: Tel op: 16/15 + 1/4. KGV van 15 en 4 is 60: 64/60 + 15/60 = 79/60.\nAntwoord: 79/60 = 1 19/60 ✓' },
        { difficulty: 'Hard', question: 'Bereken (¾ − ⅙) × ⅖ − 1/10.', answer: '2/15', checkMode: 'auto', correctAnswer: '2/15', correctAnswers: ['2/15'], explanation: 'Stap 1: Werk eers die hakie uit: 3/4 − 1/6. KGV van 4 en 6 is 12: 9/12 − 2/12 = 7/12.\nStap 2: Vermenigvuldig: 7/12 × 2/5 = 14/60 = 7/30.\nStap 3: Trek af: 7/30 − 1/10 = 7/30 − 3/30 = 4/30 = 2/15.\nAntwoord: 2/15 ✓' },
        { difficulty: 'Hard', question: 'Bereken 4¼ − (⅗ + 1/10) × 2/7.', answer: '4 1/20', checkMode: 'auto', correctAnswer: '4 1/20', correctAnswers: ['4 1/20', '81/20'], explanation: 'Stap 1: Werk die hakie uit: 3/5 + 1/10 = 6/10 + 1/10 = 7/10.\nStap 2: Vermenigvuldig: 7/10 × 2/7 = 14/70 = 1/5.\nStap 3: Trek af van 4¼ = 17/4: 17/4 − 1/5. KGV van 4 en 5 is 20: 85/20 − 4/20 = 81/20.\nAntwoord: 81/20 = 4 1/20 ✓' },

        // Blok 2: kwadrate, kubusse en wortels geïntegreer in groter uitdrukkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (⅗)² + 2/15.', answer: '37/75', checkMode: 'auto', correctAnswer: '37/75', correctAnswers: ['37/75'], explanation: 'Stap 1: Kwadreer die breuk: (3/5)² = 9/25.\nStap 2: Vind die KGV van 25 en 15: KGV = 75. Skakel om: 9/25 = 27/75, 2/15 = 10/75.\nStap 3: Tel die tellers op: 27 + 10 = 37.\nAntwoord: 37/75 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(9/49) × 7/6 + ⅓.', answer: '5/6', checkMode: 'auto', correctAnswer: '5/6', correctAnswers: ['5/6'], explanation: 'Stap 1: Vind die vierkantswortel: √(9/49) = √9/√49 = 3/7.\nStap 2: Vermenigvuldig: 3/7 × 7/6 = 21/42 = 1/2.\nStap 3: Tel op: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.\nAntwoord: 5/6 ✓' },
        { difficulty: 'Hard', question: 'Bereken (⅓)³ + (¾)² − ⅙.', answer: '187/432', checkMode: 'auto', correctAnswer: '187/432', correctAnswers: ['187/432'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/3)³ = 1/27.\nStap 2: Kwadreer die tweede breuk: (3/4)² = 9/16.\nStap 3: Tel op met KGV van 27 en 16 = 432: 1/27 = 16/432, 9/16 = 243/432, dus 16/432 + 243/432 = 259/432.\nStap 4: Trek 1/6 = 72/432 af: 259/432 − 72/432 = 187/432.\nAntwoord: 187/432 ✓' },

        // Blok 3: enkelstap gekombineerde breuk-en-persentasie woordprobleme (V7-9)
        { difficulty: 'Medium-Hard', question: 'ʼn Tenk bevat 4⅖ liter water. As 15% van die water uitlek, hoeveel liter is dit?', answer: '33/50 liter', checkMode: 'auto', correctAnswer: '33/50', correctAnswers: ['33/50', '0,66', '0,66 liter', '33/50 liter'], explanation: 'Stap 1: Skakel die gemengde getal om: 4⅖ = 22/5.\nStap 2: Skryf 15% as ʼn breuk: 15% = 3/20.\nStap 3: Vermenigvuldig: 3/20 × 22/5 = 66/100 = 33/50.\nAntwoord: 33/50 liter (= 0,66 liter) ✓' },
        { difficulty: 'Hard', question: 'Bereken 5/12 van R840. Bereken dan 40% van daardie resultaat.', answer: 'R140', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', 'R140'], explanation: 'Stap 1: Bereken 5/12 van R840: 5/12 × 840 = R350.\nStap 2: Bereken 40% van R350: 2/5 × 350 = R140.\nAntwoord: R140 ✓' },
        { difficulty: 'Hard', question: '⅜ van ʼn getal is 45. Wat is 60% van dieselfde getal?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: 'Stap 1: Vind die getal: as 3/8 daarvan 45 is, is die getal 45 ÷ 3/8 = 45 × 8/3 = 120.\nStap 2: Vind 60% van 120: 3/5 × 120 = 72.\nAntwoord: 72 ✓' },

        // Blok 4: veelstap werklike-lewe-probleme met opeenvolgende verminderings (V10-13)
        { difficulty: 'Hard', question: 'Palesa verdien R7 200 vir vryskutwerk. Sy spaar ¼ daarvan, en spandeer dan 15% van wat oorbly aan data. Hoeveel het sy oor?', answer: 'R4 590', checkMode: 'auto', correctAnswer: '4590', correctAnswers: ['4590', 'R4590', 'R4 590'], explanation: 'Stap 1: Spaargeld: 1/4 × 7 200 = R1 800. Oorblyfsel: 7 200 − 1 800 = R5 400.\nStap 2: Data: 15% × 5 400 = R810. Oorblyfsel: 5 400 − 810 = R4 590.\nAntwoord: R4 590 ✓' },
        { difficulty: 'Hard', question: 'Katlego het 5⅓ uur vrye tyd. Hy spandeer ⅜ daarvan om te oefen, en dan ⅖ van wat oorbly om te rus. Hoeveel tyd bly oor?', answer: '2 uur', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2 uur'], explanation: 'Stap 1: Skakel om: 5⅓ = 16/3. Oefen: 3/8 × 16/3 = 48/24 = 2. Oorblyfsel: 16/3 − 2 = 16/3 − 6/3 = 10/3.\nStap 2: Rus: 2/5 × 10/3 = 20/15 = 4/3. Oorblyfsel: 10/3 − 4/3 = 6/3 = 2.\nAntwoord: 2 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool het 960 leerders. ¾ van hulle speel sport. Van diegene wat sport speel, speel 25% netbal. Hoeveel leerders speel netbal?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180'], explanation: 'Stap 1: Leerders wat sport speel: 3/4 × 960 = 720.\nStap 2: Van hulle, netbalspelers: 25% × 720 = 180.\nAntwoord: 180 leerders ✓' },
        { difficulty: 'Hard', question: 'ʼn Blik bevat 3⅕ liter verf. 40% word op een muur gebruik, en dan ⅕ van wat oorbly op ʼn tweede muur. Hoeveel verf bly oor?', answer: '1 67/125 liter', checkMode: 'auto', correctAnswer: '1 67/125', correctAnswers: ['1 67/125', '192/125', '1,536', '1 67/125 liter'], explanation: 'Stap 1: Skakel om: 3⅕ = 16/5. Eerste muur: 40% × 16/5 = 2/5 × 16/5 = 32/25. Oorblyfsel: 16/5 − 32/25 = 80/25 − 32/25 = 48/25.\nStap 2: Tweede muur: 1/5 × 48/25 = 48/125. Oorblyfsel: 48/25 − 48/125 = 240/125 − 48/125 = 192/125.\nAntwoord: 192/125 = 1 67/125 liter ✓' },

        // Blok 5: breuke met eksponente/wortels in konteks plus komplekse veelstap probleme (V14-17)
        { difficulty: 'Hard', question: 'ʼn Vierkantige landjie het ʼn sylengte van 3⅓ m. Bereken die oppervlakte van die landjie, en trek dan ⅓ m² af vir ʼn hek. Wat is die oorblywende oppervlakte?', answer: '10 7/9 m²', checkMode: 'auto', correctAnswer: '10 7/9', correctAnswers: ['10 7/9', '97/9', '10 7/9 m²'], explanation: 'Stap 1: Skakel om: 3⅓ = 10/3. Oppervlakte = (10/3)² = 100/9.\nStap 2: Trek 1/3 af: 1/3 = 3/9. 100/9 − 3/9 = 97/9.\nAntwoord: 97/9 = 10 7/9 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Besigheid sit √(1/9) van sy wins van R3 600 opsy vir herstelwerk. Dit spandeer dan ⅖ van wat oorbly aan lone. Hoeveel wins bly oor?', answer: 'R1 440', checkMode: 'auto', correctAnswer: '1440', correctAnswers: ['1440', 'R1440', 'R1 440'], explanation: 'Stap 1: √(1/9) = 1/3. Herstelwerk: 1/3 × 3 600 = R1 200. Oorblyfsel: 3 600 − 1 200 = R2 400.\nStap 2: Lone: 2/5 × 2 400 = R960. Oorblyfsel: 2 400 − 960 = R1 440.\nAntwoord: R1 440 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik ⅔ koppie suiker per bondel koekies. Naledi bak 1¾ bondels, en voeg dan ʼn ekstra (⅓)² koppie suiker by vir ʼn versiering. Hoeveel suiker gebruik sy in totaal?', answer: '1 5/18 koppies', checkMode: 'auto', correctAnswer: '1 5/18', correctAnswers: ['1 5/18', '23/18', '1 5/18 koppies'], explanation: 'Stap 1: Suiker vir die bondels: 2/3 × 1¾ = 2/3 × 7/4 = 14/12 = 7/6.\nStap 2: Ekstra vir die versiering: (1/3)² = 1/9.\nStap 3: Tel op met KGV van 6 en 9 = 18: 7/6 = 21/18, 1/9 = 2/18, dus 21/18 + 2/18 = 23/18.\nAntwoord: 23/18 = 1 5/18 koppies ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige landjie het ʼn lengte van 4 m. Sy breedte is ⅝ van die lengte. Bereken die oppervlakte van die landjie, en trek dan (¼)² van die oppervlakte af vir ʼn paadjie. Watter oppervlakte bly oor?', answer: '9 3/8 m²', checkMode: 'auto', correctAnswer: '9 3/8', correctAnswers: ['9 3/8', '75/8', '9 3/8 m²'], explanation: 'Stap 1: Breedte = 5/8 × 4 = 20/8 = 5/2 m. Oppervlakte = 4 × 5/2 = 10 m².\nStap 2: Paadjiebreuk: (1/4)² = 1/16. Paadjie-oppervlakte: 1/16 × 10 = 10/16 = 5/8 m².\nStap 3: Oorblywende oppervlakte: 10 − 5/8 = 80/8 − 5/8 = 75/8 m².\nAntwoord: 75/8 = 9 3/8 m² ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Nomsa bereken ⅓ + ⅙ × ¾ deur eers ⅓ en ⅙ op te tel, en dan met ¾ te vermenigvuldig, en kry 3/8 as haar antwoord. Wat is die korrekte antwoord as die regte bewerkingsvolgorde gebruik word?', answer: '11/24', checkMode: 'auto', correctAnswer: '11/24', correctAnswers: ['11/24'], explanation: 'Stap 1: Vermenigvuldiging moet voor optelling gedoen word: 1/6 × 3/4 = 3/24 = 1/8.\nStap 2: Tel op: 1/3 + 1/8. KGV van 3 en 8 is 24: 8/24 + 3/24 = 11/24.\nAntwoord: 11/24 ✓ (Nomsa was verkeerd om eers op te tel — daar was geen hakie om ⅓ + ⅙ nie.)' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: (¾)², 5/8, √⅑ + ¼.', answer: '(3/4)^2, sqrt(1/9)+1/4, 5/8', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê (⅔)² + (⅓)² gee dieselfde antwoord as (⅔ + ⅓)². Bereken albei kante en verduidelik of hy korrek is.', answer: 'Nee — (2/3)² + (1/3)² = 4/9 + 1/9 = 5/9, maar (2/3 + 1/3)² = 1² = 1. Die twee uitdrukkings is nie gelyk nie, omdat kwadrering nie oor optelling versprei nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn rotsvaste begrip van Graad 9 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1, vars getalle/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1: veelstap-uitdrukkings met bewerkingsvolgorde (V1-3)
        { difficulty: 'Medium', question: 'Bereken 3¼ × ⅖ + ¼, deur die korrekte bewerkingsvolgorde te gebruik.', answer: '1 11/20', checkMode: 'auto', correctAnswer: '1 11/20', correctAnswers: ['1 11/20', '31/20'], explanation: 'Stap 1: Skakel die gemengde getal om: 3¼ = 13/4.\nStap 2: Vermenigvuldiging voor optelling: 13/4 × 2/5 = 26/20 = 13/10.\nStap 3: Tel op: 13/10 + 1/4. KGV van 10 en 4 is 20: 26/20 + 5/20 = 31/20.\nAntwoord: 31/20 = 1 11/20 ✓' },
        { difficulty: 'Hard', question: 'Bereken (⅞ − ⅓) × ⅗ − ⅙.', answer: '19/120', checkMode: 'auto', correctAnswer: '19/120', correctAnswers: ['19/120'], explanation: 'Stap 1: Werk eers die hakie uit: 7/8 − 1/3. KGV van 8 en 3 is 24: 21/24 − 8/24 = 13/24.\nStap 2: Vermenigvuldig: 13/24 × 3/5 = 39/120 = 13/40.\nStap 3: Trek af: 13/40 − 1/6. KGV van 40 en 6 is 120: 39/120 − 20/120 = 19/120.\nAntwoord: 19/120 ✓' },
        { difficulty: 'Hard', question: 'Bereken 5⅓ − (½ + ¼) × 2/9.', answer: '5 1/6', checkMode: 'auto', correctAnswer: '5 1/6', correctAnswers: ['5 1/6', '31/6'], explanation: 'Stap 1: Werk die hakie uit: 1/2 + 1/4 = 2/4 + 1/4 = 3/4.\nStap 2: Vermenigvuldig: 3/4 × 2/9 = 6/36 = 1/6.\nStap 3: Trek af van 5⅓ = 16/3: 16/3 − 1/6 = 32/6 − 1/6 = 31/6.\nAntwoord: 31/6 = 5 1/6 ✓' },

        // Blok 2: kwadrate, kubusse en wortels geïntegreer in groter uitdrukkings (V4-6)
        { difficulty: 'Medium-Hard', question: 'Bereken (⅘)² − 3/25.', answer: '13/25', checkMode: 'auto', correctAnswer: '13/25', correctAnswers: ['13/25'], explanation: 'Stap 1: Kwadreer die breuk: (4/5)² = 16/25.\nStap 2: Trek af: 16/25 − 3/25 = 13/25.\nAntwoord: 13/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bereken √(25/36) × ⅗ + ⅙.', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3'], explanation: 'Stap 1: Vind die vierkantswortel: √(25/36) = √25/√36 = 5/6.\nStap 2: Vermenigvuldig: 5/6 × 3/5 = 15/30 = 1/2.\nStap 3: Tel op: 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.\nAntwoord: 2/3 ✓' },
        { difficulty: 'Hard', question: 'Bereken (¼)³ + (½)² − ⅛.', answer: '9/64', checkMode: 'auto', correctAnswer: '9/64', correctAnswers: ['9/64'], explanation: 'Stap 1: Kubeer die eerste breuk: (1/4)³ = 1/64.\nStap 2: Kwadreer die tweede breuk: (1/2)² = 1/4.\nStap 3: Tel op met KGV van 64 en 4 = 64: 1/4 = 16/64, dus 1/64 + 16/64 = 17/64.\nStap 4: Trek 1/8 = 8/64 af: 17/64 − 8/64 = 9/64.\nAntwoord: 9/64 ✓' },

        // Blok 3: enkelstap gekombineerde breuk-en-persentasie woordprobleme (V7-9)
        { difficulty: 'Medium-Hard', question: 'ʼn Sak bevat 2⅘ kg rys. As 35% van die rys gebruik word, hoeveel kilogram is dit?', answer: '49/50 kg', checkMode: 'auto', correctAnswer: '49/50', correctAnswers: ['49/50', '0,98', '0,98 kg', '49/50 kg'], explanation: 'Stap 1: Skakel die gemengde getal om: 2⅘ = 14/5.\nStap 2: Skryf 35% as ʼn breuk: 35% = 7/20.\nStap 3: Vermenigvuldig: 7/20 × 14/5 = 98/100 = 49/50.\nAntwoord: 49/50 kg (= 0,98 kg) ✓' },
        { difficulty: 'Hard', question: 'Bereken 7/10 van R650. Bereken dan 20% van daardie resultaat.', answer: 'R91', checkMode: 'auto', correctAnswer: '91', correctAnswers: ['91', 'R91'], explanation: 'Stap 1: Bereken 7/10 van R650: 7/10 × 650 = R455.\nStap 2: Bereken 20% van R455: 1/5 × 455 = R91.\nAntwoord: R91 ✓' },
        { difficulty: 'Hard', question: '⅚ van ʼn getal is 150. Wat is 40% van dieselfde getal?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: 'Stap 1: Vind die getal: as 5/6 daarvan 150 is, is die getal 150 ÷ 5/6 = 150 × 6/5 = 180.\nStap 2: Vind 40% van 180: 2/5 × 180 = 72.\nAntwoord: 72 ✓' },

        // Blok 4: veelstap werklike-lewe-probleme met opeenvolgende verminderings (V10-13)
        { difficulty: 'Hard', question: 'Vusi verdien R8 400 vir deeltydse werk. Hy spaar ⅖ daarvan, en spandeer dan 10% van wat oorbly aan lugtyd. Hoeveel het hy oor?', answer: 'R4 536', checkMode: 'auto', correctAnswer: '4536', correctAnswers: ['4536', 'R4536', 'R4 536'], explanation: 'Stap 1: Spaargeld: 2/5 × 8 400 = R3 360. Oorblyfsel: 8 400 − 3 360 = R5 040.\nStap 2: Lugtyd: 10% × 5 040 = R504. Oorblyfsel: 5 040 − 504 = R4 536.\nAntwoord: R4 536 ✓' },
        { difficulty: 'Hard', question: 'Aisha het 6⅖ uur vrye tyd. Sy spandeer ¼ daarvan aan huistake, en dan ⅓ van wat oorbly aan huiswerk. Hoeveel tyd bly oor?', answer: '3 1/5 uur', checkMode: 'auto', correctAnswer: '3 1/5', correctAnswers: ['3 1/5', '16/5', '3,2', '3⅕ uur'], explanation: 'Stap 1: Skakel om: 6⅖ = 32/5. Huistake: 1/4 × 32/5 = 32/20 = 8/5. Oorblyfsel: 32/5 − 8/5 = 24/5.\nStap 2: Huiswerk: 1/3 × 24/5 = 24/15 = 8/5. Oorblyfsel: 24/5 − 8/5 = 16/5.\nAntwoord: 16/5 = 3 1/5 uur ✓' },
        { difficulty: 'Hard', question: 'ʼn Skoolfees word deur 840 leerders bygewoon. ⅚ van hulle woon dit by. Van diegene wat dit bywoon, koop 30% kos. Hoeveel leerders koop kos?', answer: '210', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210'], explanation: 'Stap 1: Leerders wat dit bywoon: 5/6 × 840 = 700.\nStap 2: Van hulle, leerders wat kos koop: 30% × 700 = 210.\nAntwoord: 210 leerders ✓' },
        { difficulty: 'Hard', question: 'ʼn Blik bevat 4⅘ liter verf. 25% word op een muur gebruik, en dan ⅙ van wat oorbly op ʼn tweede muur. Hoeveel verf bly oor?', answer: '3 liter', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 liter'], explanation: 'Stap 1: Skakel om: 4⅘ = 24/5. Eerste muur: 25% × 24/5 = 1/4 × 24/5 = 6/5. Oorblyfsel: 24/5 − 6/5 = 18/5.\nStap 2: Tweede muur: 1/6 × 18/5 = 18/30 = 3/5. Oorblyfsel: 18/5 − 3/5 = 15/5 = 3.\nAntwoord: 3 liter ✓' },

        // Blok 5: breuke met eksponente/wortels in konteks plus komplekse veelstap probleme (V14-17)
        { difficulty: 'Hard', question: 'ʼn Vierkantige landjie het ʼn sylengte van 2½ m. Bereken die oppervlakte van die landjie, en trek dan ¾ m² af vir ʼn hek. Wat is die oorblywende oppervlakte?', answer: '5 1/2 m²', checkMode: 'auto', correctAnswer: '5 1/2', correctAnswers: ['5 1/2', '11/2', '5 1/2 m²'], explanation: 'Stap 1: Skakel om: 2½ = 5/2. Oppervlakte = (5/2)² = 25/4.\nStap 2: Trek 3/4 af: 25/4 − 3/4 = 22/4 = 11/2.\nAntwoord: 11/2 = 5 1/2 m² ✓' },
        { difficulty: 'Hard', question: 'ʼn Besigheid sit √(1/25) van sy wins van R4 500 opsy vir herstelwerk. Dit spandeer dan ⅓ van wat oorbly aan lone. Hoeveel wins bly oor?', answer: 'R2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', 'R2400', 'R2 400'], explanation: 'Stap 1: √(1/25) = 1/5. Herstelwerk: 1/5 × 4 500 = R900. Oorblyfsel: 4 500 − 900 = R3 600.\nStap 2: Lone: 1/3 × 3 600 = R1 200. Oorblyfsel: 3 600 − 1 200 = R2 400.\nAntwoord: R2 400 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik ⅝ koppie meel per bondel pannekoeke. Lerato maak 2⅖ bondels, en voeg dan ʼn ekstra (¼)² koppie meel by om te bestrooi. Hoeveel meel gebruik sy in totaal?', answer: '1 9/16 koppies', checkMode: 'auto', correctAnswer: '1 9/16', correctAnswers: ['1 9/16', '25/16', '1 9/16 koppies'], explanation: 'Stap 1: Meel vir die bondels: 5/8 × 2⅖ = 5/8 × 12/5 = 60/40 = 3/2.\nStap 2: Ekstra om te bestrooi: (1/4)² = 1/16.\nStap 3: Tel op: 3/2 + 1/16 = 24/16 + 1/16 = 25/16.\nAntwoord: 25/16 = 1 9/16 koppies ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige landjie het ʼn lengte van 5 m. Sy breedte is ⅗ van die lengte. Bereken die oppervlakte van die landjie, en trek dan (⅕)² van die oppervlakte af vir ʼn paadjie. Watter oppervlakte bly oor?', answer: '14 2/5 m²', checkMode: 'auto', correctAnswer: '14 2/5', correctAnswers: ['14 2/5', '72/5', '14,4', '14⅖ m²'], explanation: 'Stap 1: Breedte = 3/5 × 5 = 3 m. Oppervlakte = 5 × 3 = 15 m².\nStap 2: Paadjiebreuk: (1/5)² = 1/25. Paadjie-oppervlakte: 1/25 × 15 = 15/25 = 3/5 m².\nStap 3: Oorblywende oppervlakte: 15 − 3/5 = 75/5 − 3/5 = 72/5 m².\nAntwoord: 72/5 = 14 2/5 m² ✓' },

        // Blok 6: foutopsporing, kritiek en vergelyking/rangskikking (V18-20)
        { difficulty: 'Hard', question: 'Katlego bereken ⅖ + ¼ × ⅘ deur eers ⅖ en ¼ op te tel, en dan met ⅘ te vermenigvuldig, en kry 13/25 as sy antwoord. Wat is die korrekte antwoord as die regte bewerkingsvolgorde gebruik word?', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5'], explanation: 'Stap 1: Vermenigvuldiging moet voor optelling gedoen word: 1/4 × 4/5 = 4/20 = 1/5.\nStap 2: Tel op: 2/5 + 1/5 = 3/5.\nAntwoord: 3/5 ✓ (Katlego was verkeerd om eers op te tel — daar was geen hakie om ⅖ + ¼ nie.)' },
        { difficulty: 'Hard', question: 'Rangskik hierdie van kleinste na grootste: ⅗, (⅖)², √1/16 + ⅜.', answer: '(2/5)^2, sqrt(1/16)+3/8, 3/5', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thandiwe sê (⅗)² + (⅖)² gee dieselfde antwoord as (⅗ + ⅖)². Bereken albei kante en verduidelik of sy korrek is.', answer: 'Nee — (3/5)² + (2/5)² = 9/25 + 4/25 = 13/25, maar (3/5 + 2/5)² = 1² = 1. Die twee uitdrukkings is nie gelyk nie, omdat kwadrering nie oor optelling versprei nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het ʼn rotsvaste begrip van Graad 9 gewone breuke.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Hersien die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
