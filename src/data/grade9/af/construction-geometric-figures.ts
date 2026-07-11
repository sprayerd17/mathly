import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// interior angles / diagonals / triangles formed → blue   (#2563eb)
// exterior angle / intersection point / vertex   → orange (#ea580c)
// remote angles / right angles / total angle sum → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Konstruksie van Meetkundige Figure',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — DIE BUITEHOEKSTELLING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exterior-angle-theorem',
      title: 'Die Buitehoekstelling',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Deur konstruksie ondersoek ons die verband tussen die buitehoek van ʼn driehoek en sy binnehoeke. Die <strong>Buitehoekstelling</strong> bepaal dat ʼn buitehoek van ʼn driehoek gelyk is aan die som van die twee binnehoeke wat nie daaraan grens nie (die twee 'oorstaande' binnehoeke).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('binnehoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('buitehoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oorstaande hoeke')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernidee</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Binnehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die drie ${bl('hoeke binne')} die driehoek. Twee daarvan is die <em>oorstaande</em> hoeke ten opsigte van enige gegewe buitehoek.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Buitehoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gevorm deur een sy van die driehoek te verleng. Dit is ${or('buite')} die driehoek, langs een binnehoek.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Oorstaande binnehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('twee binnehoeke')} wat <em>nie</em> aan die buitehoek grens nie. Hul som is altyd gelyk aan die buitehoek.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die stelling</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('Buitehoek')} = ${gr('oorstaande hoek 1')} + ${gr('oorstaande hoek 2')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het binnehoeke van 50° en 65°. Bereken die buitehoek by die derde hoekpunt.',
          answer: `${or('Buitehoek')} = ${bl('50°')} + ${bl('65°')} = ${or('115°')}`,
          steps: [
            `Die ${or('buitehoek')} is gelyk aan die som van die twee ${gr('oorstaande binnehoeke')}: ${bl('50')} + ${bl('65')} = ${or('115°')}.`,
            `Sien die diagram hieronder wat hierdie verband wys.`,
          ],
        },
        {
          question: 'Sipho het ʼn driehoek waarvan een buitehoek 120° is, en een van die oorstaande binnehoeke is 45°. Bereken die ander oorstaande binnehoek.',
          answer: `Die ander ${gr('oorstaande binnehoek')} = ${gr('75°')}`,
          steps: [
            `${or('120')} = ${gr('45')} + x.`,
            `x = ${gr('75°')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Exterior Angle Theorem and showing how an exterior angle of a triangle equals the sum of the two remote interior angles" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a triangle with one side extended to show an exterior angle, with the two remote interior angles clearly labelled and the exterior angle marked" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ONDERSOEK VAN DIAGONALE IN VIERHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'diagonals-in-quadrilaterals',
      title: 'Ondersoek van Diagonale in Vierhoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Deur konstruksie ondersoek ons die diagonale van reghoeke, vierkante, parallelogramme, ruite en vlieërs — en kyk of diagonale <strong>gelyk in lengte</strong> is, of hulle <strong>mekaar halveer</strong>, en of hulle <strong>teen regte hoeke sny</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('diagonale')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('snypunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('regte hoeke')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie vrae om oor enige vierhoek se diagonale te vra</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Is die ${bl('diagonale gelyk in lengte')}? (bv. reghoek: ja; ruit: nie altyd nie)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Halveer die ${bl('diagonale')} mekaar by die ${or('snypunt')}? (bv. parallelogram: ja; vlieër: een halveer die ander)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Ontmoet die ${bl('diagonale')} teen ${gr('regte hoeke (90°)')}? (bv. ruit: ja; reghoek: nee)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Konstruksiewenk</p>` +
        `<p style="margin:0;color:#14532d;">Teken elke vierhoek versigtig met ʼn liniaal en passer. Trek dan albei ${bl('diagonale')} en meet met ʼn liniaal en gradeboog om lengtegelykheid, halvering, en die hoek by die ${or('snypunt')} te kontroleer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Ondersoek die diagonale van ʼn reghoek deur konstruksie. Wat merk jy op?',
          answer: `Die ${bl('diagonale')} is gelyk in lengte en halveer mekaar, maar ontmoet nie teen ${gr('regte hoeke')} nie`,
          steps: [
            `Deur albei ${bl('diagonale')} van ʼn reghoek te teken, sien ons hulle is gelyk in lengte en halveer mekaar (sny by hul middelpunte), maar sny nie teen ${gr('regte hoeke')} nie, tensy dit ʼn vierkant is.`,
          ],
        },
        {
          question: 'Lerato konstrueer die diagonale van ʼn ruit. Wat merk sy op?',
          answer: `Die ${bl('diagonale')} halveer mekaar EN sny teen ${gr('regte hoeke (90°)')}`,
          steps: [
            `Die ${bl('diagonale')} van ʼn ruit halveer mekaar EN sny teen ${gr('regte hoeke (90°)')}, alhoewel hulle nie noodwendig gelyk in lengte is nie, tensy dit ʼn vierkant is.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video investigating the diagonals of rectangles, squares, parallelograms, rhombi and kites — comparing length, bisection and perpendicularity" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: side-by-side constructions of a rectangle and a rhombus, each with both diagonals drawn, labelling whether they are equal, bisecting, or perpendicular" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — ONDERSOEK VAN DIE SOM VAN BINNEHOEKE VAN VEELHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sum-interior-angles-polygons',
      title: 'Ondersoek van die Som van Binnehoeke van Veelhoeke deur Konstruksie',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Deur konstruksie (deur ${bl('diagonale')} vanaf een ${or('hoekpunt')} te trek om ʼn veelhoek in ${bl('driehoeke')} te verdeel), ondersoek en bevestig ons die formule vir die ${gr('som van binnehoeke')} van enige veelhoek: (aantal sye − 2) × 180°.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gevormde driehoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('totale hoeksom')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Som van binnehoeke')} = (n − 2) × 180°</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:6px;margin-bottom:0;">waar <strong>n</strong> = aantal sye, en (n − 2) = aantal ${bl('driehoeke')} gevorm vanaf een ${or('hoekpunt')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Konstruksiemetode — stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Kies een ${or('hoekpunt')} van die veelhoek as jou beginpunt.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Trek ${bl('diagonale')} vanaf daardie ${or('hoekpunt')} na elke nie-aangrensende hoekpunt. Dit verdeel die veelhoek in ${bl('driehoeke')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Tel die ${bl('driehoeke')} wat gevorm is (altyd n − 2). Vermenigvuldig met 180° om die ${gr('totale hoeksom')} te kry.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom werk dit so?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke ${bl('driehoek')} het ʼn hoeksom van presies 180°. Omdat die ${bl('driehoeke')} die veelhoek perfek opvul sonder gapings of oorvleueling, is die ${gr('totale hoeksom')} van die veelhoek = (aantal ${bl('driehoeke')}) × 180°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Deur diagonale vanaf een hoekpunt van ʼn heksagoon te trek, hoeveel driehoeke word gevorm, en wat bevestig dit oor die hoeksom?',
          answer: `${bl('4 driehoeke')} word gevorm; ${gr('totale hoeksom')} = ${gr('720°')}`,
          steps: [
            `ʼn Heksagoon (6 sye) kan in ${bl('4 driehoeke')} verdeel word vanaf een ${or('hoekpunt')}. Aangesien elke driehoek 180° het, is die ${gr('totaal')} = ${bl('4')} × 180° = ${gr('720°')}, wat die formule (6 − 2) × 180 = ${gr('720°')} bevestig.`,
          ],
        },
        {
          question: 'Thabo verdeel ʼn sewehoek (7 sye) in driehoeke vanaf een hoekpunt. Hoeveel driehoeke word gevorm, en wat is die totale hoeksom?',
          answer: `${bl('5 driehoeke')} word gevorm; ${gr('totale hoeksom')} = ${gr('900°')}`,
          steps: [
            `ʼn Sewehoek vorm ${bl('5 driehoeke')} vanaf een ${or('hoekpunt')} (7 − 2 = 5). ${gr('Totaal')} = ${bl('5')} × 180° = ${gr('900°')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide polygons into triangles from one vertex and use this to confirm the interior angle sum formula" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a hexagon with diagonals drawn from one vertex, dividing it into 4 triangles, each triangle shaded a different colour" />',
    },
  ],

  topicPractice: [
    {
      difficulty: 'Easy',
      question: 'ʼn Driehoek het binnehoeke van 40° en 75°. Bereken die buitehoek by die derde hoekpunt.',
      answer: '115°',
      checkMode: 'auto',
      correctAnswer: '115',
      correctAnswers: ['115', '115°'],
      explanation: 'Die buitehoek is gelyk aan die som van die twee oorstaande binnehoeke: 40 + 75 = 115°.',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het ʼn buitehoek van 130° en een oorstaande binnehoek van 55°. Bereken die ander oorstaande binnehoek.',
      answer: '75°',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75°'],
      explanation: '130 = 55 + x, dus x = 130 − 55 = 75°.',
    },
    {
      difficulty: 'Hard',
      question: 'Sipho sê die buitehoekstelling geld slegs vir reghoekige driehoeke. Is hy korrek? Verduidelik.',
      answer: 'Nee — die buitehoekstelling geld vir alle driehoeke, nie net reghoekige driehoeke nie.',
      checkMode: 'self',
    },
    {
      difficulty: 'Easy',
      question: 'Wat doen die diagonale van ʼn reghoek wanneer dit gekonstrueer word?',
      answer: 'Hulle is gelyk in lengte en halveer mekaar (sny by hul middelpunte).',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'Lerato konstrueer ʼn ruit en trek sy diagonale. Watter twee eienskappe wys hulle?',
      answer: 'Hulle halveer mekaar en sny teen regte hoeke.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Thabo sê die diagonale van ʼn parallelogram is altyd gelyk in lengte. Is hy korrek? Verduidelik.',
      answer: 'Nee — die diagonale van ʼn algemene parallelogram halveer mekaar, maar is nie noodwendig gelyk nie; slegs spesiale parallelogramme soos reghoeke het gelyke diagonale.',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'Deur diagonale vanaf een hoekpunt van ʼn agthoek (8 sye) te trek, hoeveel driehoeke word gevorm?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Aantal driehoeke = aantal sye − 2 = 8 − 2 = 6.',
    },
    {
      difficulty: 'Hard',
      question: 'Bereken die som van binnehoeke van ʼn agthoek deur die driehoekmetode wat in Vraag 7 beskryf is, te gebruik.',
      answer: '6 driehoeke × 180° = 1080°, wat ooreenstem met die formule (8−2)×180 = 1080°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Vyfhoek se diagonale vanaf een hoekpunt vorm hoeveel driehoeke?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
      explanation: 'Aantal driehoeke = aantal sye − 2 = 5 − 2 = 3.',
    },
    {
      difficulty: 'Hard',
      question: 'Amahle sê ʼn vlieër se diagonale is altyd gelyk in lengte. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn vlieër se diagonale is oor die algemeen nie gelyk nie; een diagonaal (die simmetrie-as) halveer die ander, maar hulle is nie gelyke lengtes nie.',
      checkMode: 'self',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het ʼn buitehoek van 95°. As een oorstaande binnehoek 38° is, bereken die ander.',
      answer: '57°',
      checkMode: 'auto',
      correctAnswer: '57',
      correctAnswers: ['57', '57°'],
      explanation: '95 = 38 + x, dus x = 95 − 38 = 57°.',
    },
    {
      difficulty: 'Hard',
      question: 'Sipho trek diagonale vanaf een hoekpunt van ʼn tienhoek (10 sye). Hoeveel driehoeke word gevorm, en wat is die totale hoeksom?',
      answer: '8 driehoeke word gevorm (10−2=8). Totaal = 8×180 = 1440°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk die diagonale van ʼn vierkant en ʼn ruit. Wat het hulle in gemeen, en wat is anders?',
      answer: 'Albei het diagonale wat mekaar teen regte hoeke halveer. ʼn Vierkant se diagonale is ook gelyk in lengte, terwyl ʼn algemene ruit se diagonale nie noodwendig gelyk is nie.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'ʼn Driehoek het twee oorstaande binnehoeke in die verhouding 2:3, met ʼn gekombineerde buitehoek van 100°. Bereken albei binnehoeke.',
      answer: 'Totale dele = 5. Een deel = 100 ÷ 5 = 20. Hoeke: 40° en 60°.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question: 'Thabo sê jy kan die som van binnehoeke van enige veelhoek vind deur dit in driehoeke te verdeel vanaf een hoekpunt, en dan die aantal driehoeke met 180° te vermenigvuldig. Is dit altyd waar? Verduidelik.',
      answer: 'Ja — hierdie metode werk vir enige konvekse veelhoek, aangesien die aantal driehoeke gevorm vanaf een hoekpunt altyd (aantal sye − 2) is.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Uitstekend! Jy het konstruksie van meetkundige figure bemeester.' },
      { minScore: 11, message: 'Goeie werk!' },
      { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het konstruksie van meetkundige figure bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Buitehoekstelling (berekening & algebraïese redenasie) |
    // 4-6 Diagonaaleienskappe van vierhoeke (vergelykende redenasie) |
    // 7-10 Som van binnehoeke van veelhoeke deur driehoeksverdeling (voorwaarts
    // & omgekeerd) | 11-13 Kongruensievoorwaardes formeel toegepas (SSS/SAS/
    // ASA/RHS bewysagtige redenasie) | 14-16 Konstruksie van figure vanuit
    // gekombineerde gegewe inligting | 17-19 Ontleding van ʼn reeds
    // gekonstrueerde figuur (diagram-bewus)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het binnehoeke van 55° en 70°. Bereken die buitehoek by die derde hoekpunt.', answer: '125°', checkMode: 'auto', correctAnswer: '125', correctAnswers: ['125', '125°'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee oorstaande binnehoeke: 55° + 70° = 125°.' },
        { difficulty: 'Medium', question: 'ʼn Buitehoek van ʼn driehoek is 140°, en een van die oorstaande binnehoeke is 65°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°'], explanation: '140° = 65° + x, dus x = 140° − 65° = 75°.' },
        { difficulty: 'Medium', question: 'Die twee oorstaande binnehoeke van ʼn driehoek is in die verhouding 3:4, en die buitehoek by die derde hoekpunt is 105°. Bereken die grootte van elke oorstaande binnehoek.', answer: '45° en 60°', checkMode: 'self', explanation: 'Totale dele = 3 + 4 = 7. Een deel = 105° ÷ 7 = 15°. Hoeke: 3 × 15° = 45° en 4 × 15° = 60°. Kontrole: 45° + 60° = 105°.' },
        { difficulty: 'Hard', question: 'Sipho beweer dat as jy een sy van ʼn driehoek by elk van sy drie hoekpunte een vir een verleng, die drie buitehoeke wat gevorm word altyd tot 360° optel, ongeag die driehoek. Is hy korrek? Verduidelik met behulp van die buitehoekstelling.', answer: 'Ja — elke buitehoek is gelyk aan 180° min sy aangrensende binnehoek, dus is die som van al drie buitehoeke 3×180° min die som van al drie binnehoeke: 540° − 180° = 360°. Dit geld vir elke driehoek, aangesien binnehoeke altyd tot 180° optel.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato konstrueer ʼn reghoek en ʼn ruit en trek die diagonale van elk. Vergelyk wat sy behoort op te merk oor lengtegelykheid en loodregtheid vir die twee vorms.', answer: 'Die reghoek se diagonale is gelyk in lengte, maar ontmoet nie teen regte hoeke nie (tensy dit ʼn vierkant is). Die ruit se diagonale ontmoet teen regte hoeke, maar is nie noodwendig gelyk in lengte nie (tensy dit ʼn vierkant is). Albei stelle diagonale halveer mekaar.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo sê die diagonale van ʼn vlieër halveer altyd mekaar. Is hy korrek? Verduidelik wat werklik gebeur.', answer: 'Nee — in ʼn vlieër halveer slegs een diagonaal (die simmetrie-as) die ander; die ander diagonaal halveer nie die simmetrie-as nie, tensy die vlieër toevallig ʼn ruit is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle konstrueer ʼn parallelogram wat nie ʼn reghoek is nie. Verduidelik watter diagonaaleienskappe dit met ʼn reghoek deel, en watter eienskap hulle onderskei.', answer: 'Albei vorms het diagonale wat mekaar halveer. ʼn Algemene parallelogram se diagonale is egter nie gelyk in lengte nie, terwyl ʼn reghoek se diagonale altyd gelyk is — daardie ongelyke-lengte-diagonaal is wat ʼn nie-reghoekige parallelogram van ʼn reghoek onderskei.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Deur diagonale vanaf een hoekpunt van ʼn negehoek (9 sye) te trek, hoeveel driehoeke word gevorm, en wat is die totale binnehoeksom?', answer: '7 driehoeke; totale hoeksom = 1260°', checkMode: 'auto', correctAnswer: '1260', correctAnswers: ['1260', '1260°', '7 driehoeke, 1260°', '7, 1260'], explanation: 'Gevormde driehoeke = 9 − 2 = 7. Totale hoeksom = 7 × 180° = 1260°, wat ooreenstem met die formule (9−2)×180 = 1260°.' },
        { difficulty: 'Hard', question: 'ʼn Veelhoek het ʼn binnehoeksom van 1800°. Gebruik die driehoeksverdelingsformule om die aantal sye van die veelhoek te bepaal.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 sye'], explanation: '(n − 2) × 180° = 1800°, dus n − 2 = 1800° ÷ 180° = 10, wat n = 12 gee.' },
        { difficulty: 'Hard', question: 'Diagonale wat vanaf een hoekpunt van ʼn veelhoek getrek word, vorm 9 driehoeke. Hoeveel sye het die veelhoek, en wat is sy binnehoeksom?', answer: '11 sye; hoeksom = 1620°', checkMode: 'self', explanation: 'Aantal sye = aantal driehoeke + 2 = 9 + 2 = 11. Hoeksom = 9 × 180° = 1620°, wat ooreenstem met (11−2)×180 = 1620°.' },
        { difficulty: 'Hard', question: 'Sipho sê die driehoeksverdelingsmetode (deur diagonale vanaf een hoekpunt te trek om driehoeke te vorm) werk slegs vir reëlmatige veelhoeke. Is hy korrek? Verduidelik.', answer: 'Nee — die driehoeksverdelingsmetode werk vir enige konvekse veelhoek, reëlmatig of onreëlmatig, want die aantal driehoeke wat vanaf een hoekpunt gevorm word, is altyd gelyk aan (aantal sye − 2), ongeag of die sye en hoeke gelyk is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het al drie pare ooreenstemmende sye gelyk in lengte. Verduidelik, deur die SSS-voorwaarde te gebruik, waarom dit alleen genoeg is om te bewys dat die driehoeke kongruent is.', answer: 'Sodra al drie sylengtes van ʼn driehoek vasgestel is, is daar slegs een moontlike driehoekvorm wat daaruit gevorm kan word (die vorm is rigied) — dus, as twee driehoeke al drie ooreenstemmende sylengtes deel, moet hulle identies wees in vorm en grootte, wat beteken dat alle ooreenstemmende hoeke ook outomaties gelyk is. Geen hoeke hoef gemeet of gegee te word nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk twee pare ooreenstemmende sye gelyk, plus een paar gelyke hoeke wat NIE die hoek tussen daardie twee sye is nie (SSA). Lerato sê dit bewys altyd kongruensie, net soos SAS. Is sy korrek? Verduidelik met redenasie.', answer: 'Nee — SSA is nie ʼn betroubare kongruensievoorwaarde nie. Anders as SAS (waar die hoek ingesluit is tussen die twee bekende sye, wat die driehoek uniek vasstel), kan die derde sy by SSA soms vanuit twee verskillende geldige posisies geteken word, wat twee verskillende driehoeke oplewer wat albei aan dieselfde gegewe metings voldoen. Slegs SSS, SAS, ASA en RHS waarborg betroubaar kongruensie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek moet gekonstrueer en kongruent bewys word aan ʼn ander reghoekige driehoek deur RHS te gebruik. Verduidelik watter drie stukke inligting moet ooreenstem, en waarom RHS as ʼn aparte voorwaarde van SAS beskou word.', answer: 'Die regte hoek, die skuinssylengte, en die lengte van een ander sy moet almal tussen die twee driehoeke ooreenstem. RHS word apart van SAS beskou omdat die regte hoek nie die hoek is wat ingesluit is tussen die skuinssy en die gegewe sy nie — dit is ʼn nie-ingeslote hoek — tog waarborg die vaste regte hoek, gekombineer met die stelling van Pythagoras, steeds dat die derde sy (en dus die hele driehoek) uniek bepaal word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek word gekonstrueer met binnehoeke van 92°, 88°, 101°, en ʼn onbekende vierde hoek. Bereken die vierde hoek sodat die konstruksie meetkundig geldig is.', answer: '79°', checkMode: 'auto', correctAnswer: '79', correctAnswers: ['79', '79°'], explanation: 'Binnehoeke van ʼn vierhoek som tot 360°: 360° − 92° − 88° − 101° = 79°.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek word deur ASA gekonstrueer met hoek A = 48° en hoek B = 77°, met die sy AB tussen hulle as die basis. Bereken hoek C, en gee die grootte van die buitehoek by C.', answer: 'Hoek C = 55°; buitehoek by C = 125°', checkMode: 'self', explanation: 'Hoek C = 180° − 48° − 77° = 55°. Die buitehoek by C is gelyk aan die som van die oorstaande binnehoeke: 48° + 77° = 125° (konsekwent, aangesien dit ook gelyk is aan 180° − 55°).' },
        { difficulty: 'Hard', question: 'ʼn Leerder wil ʼn driehoek met sye 6 cm, 8 cm en 13 cm deur SSS konstrueer. Bepaal of hierdie konstruksie moontlik is, en toon jou redenasie.', answer: 'Moontlik — die twee korter sye, 6 cm + 8 cm = 14 cm, is groter as die langste sy, 13 cm, dus sal die passerbôë kruis en die driehoek kan gekonstrueer word.', checkMode: 'self', explanation: 'Driehoeksongelykheidkontrole: 6 + 8 = 14 > 13, dus bestaan ʼn geldige driehoek.' },
        { difficulty: 'Medium', question: 'Die reghoekige driehoek wat getoon word, is gekonstrueer met die regte hoek by X, skuinssy YZ = 17 cm, en sy XY = 8 cm. Gee die kongruensievoorwaarde wat van toepassing is, en bereken die lengte van sy XZ.', answer: 'RHS; XZ = 15 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '15', '15 cm', 'RHS, 15 cm'], explanation: 'Dit is die RHS-voorwaarde. Volgens Pythagoras: 8² + XZ² = 17², dus XZ² = 289 − 64 = 225, wat XZ = 15 cm gee.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,68 155,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="104" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">XY = 8 cm</text><text x="95" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">XZ = ?</text><text x="105" y="98" font-size="13" fill="#2563eb" font-weight="700">YZ = 17 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">X</text><text x="35" y="60" font-size="12" fill="#374151" text-anchor="middle">Y</text><text x="160" y="145" font-size="12" fill="#374151">Z</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek wat getoon word, is die buitehoek by een hoekpunt gemerk as 118°, en een van die oorstaande binnehoeke is gemerk as 65°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '53°', checkMode: 'auto', correctAnswer: '53', correctAnswers: ['53', '53°'], explanation: 'Volgens die buitehoekstelling: 118° = 65° + x, dus x = 118° − 65° = 53°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">118°</text></svg>' },
        { difficulty: 'Hard', question: 'Die reghoek wat getoon word, het albei diagonale geteken en gemerk, elk 13 cm, wat by ʼn gemerkte snypunt kruis. ʼn Leerder beweer dit bevestig dat die diagonale van ʼn reghoek altyd gelyk in lengte is. Is die leerder se gevolgtrekking korrek, en bewys hierdie een konstruksie dit in die algemeen?', answer: 'Die leerder se waarneming is konsekwent met die bekende eienskap (reghoek-diagonale is altyd gelyk in lengte), maar ʼn enkele konstruksie illustreer die eienskap slegs vir een spesifieke reghoek — dit bewys nie dat die eienskap vir elke moontlike reghoek in die algemeen geld nie. Die algemene bewys berus daarop dat ʼn reghoek se twee diagonale ooreenstemmende sye is van twee kongruente reghoekige driehoeke wat deur die diagonaal gevorm word, bewys kongruent deur RHS of SAS.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="40" width="150" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="40" x2="185" y2="130" stroke="#2563eb" stroke-width="2"/><line x1="35" y1="130" x2="185" y2="40" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="85" r="2.5" fill="#0f1f3d"/><text x="75" y="75" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="145" y="75" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het buitehoeke, diagonaaleienskappe, veelhoek-hoeksomme en formele kongruensieredenasie bemeester.' },
        { minScore: 13, message: 'Goeie werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het binnehoeke van 48° en 82°. Bereken die buitehoek by die derde hoekpunt.', answer: '130°', checkMode: 'auto', correctAnswer: '130', correctAnswers: ['130', '130°'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee oorstaande binnehoeke: 48° + 82° = 130°.' },
        { difficulty: 'Medium', question: 'ʼn Buitehoek van ʼn driehoek is 150°, en een van die oorstaande binnehoeke is 85°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '65°', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: '150° = 85° + x, dus x = 150° − 85° = 65°.' },
        { difficulty: 'Medium', question: 'Die twee oorstaande binnehoeke van ʼn driehoek is in die verhouding 2:5, en die buitehoek by die derde hoekpunt is 98°. Bereken die grootte van elke oorstaande binnehoek.', answer: '28° en 70°', checkMode: 'self', explanation: 'Totale dele = 2 + 5 = 7. Een deel = 98° ÷ 7 = 14°. Hoeke: 2 × 14° = 28° en 5 × 14° = 70°. Kontrole: 28° + 70° = 98°.' },
        { difficulty: 'Hard', question: 'Lerato beweer dat as jy een sy van ʼn driehoek by elk van sy drie hoekpunte een vir een verleng, die drie buitehoeke wat gevorm word altyd tot 360° optel, ongeag die driehoek se vorm. Is sy korrek? Verduidelik met behulp van die buitehoekstelling.', answer: 'Ja — elke buitehoek is gelyk aan 180° min sy aangrensende binnehoek, dus is die som van al drie buitehoeke 3×180° min die som van al drie binnehoeke: 540° − 180° = 360°. Dit geld vir elke driehoek, aangesien binnehoeke altyd tot 180° optel.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Thabo konstrueer ʼn vierkant en ʼn algemene parallelogram en trek die diagonale van elk. Vergelyk wat hy behoort op te merk oor lengtegelykheid en halvering vir die twee vorms.', answer: 'Die vierkant se diagonale is gelyk in lengte, halveer mekaar, EN ontmoet teen regte hoeke. Die algemene parallelogram se diagonale halveer mekaar, maar is nie gelyk in lengte nie en ontmoet nie teen regte hoeke nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Amahle sê die diagonale van ʼn ruit is altyd gelyk in lengte, net soos ʼn reghoek s\'n. Is sy korrek? Verduidelik wat werklik gebeur.', answer: 'Nee — ʼn ruit se diagonale halveer mekaar en ontmoet teen regte hoeke, maar is nie noodwendig gelyk in lengte nie; slegs ʼn ruit wat ook ʼn vierkant is, het gelyke diagonale.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho konstrueer ʼn vlieër. Verduidelik watter diagonaaleienskap dit met ʼn ruit deel, en watter eienskap hulle onderskei.', answer: 'Beide ʼn vlieër en ʼn ruit het diagonale wat teen regte hoeke sny. ʼn Ruit se diagonale halveer egter mekaar heeltemal, terwyl slegs een diagonaal (die simmetrie-as) in ʼn vlieër die ander halveer — die ander diagonaal word nie gehalveer nie, tensy die vlieër ook ʼn ruit is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Deur diagonale vanaf een hoekpunt van ʼn tienhoek (10 sye) te trek, hoeveel driehoeke word gevorm, en wat is die totale binnehoeksom?', answer: '8 driehoeke; totale hoeksom = 1440°', checkMode: 'auto', correctAnswer: '1440', correctAnswers: ['1440', '1440°', '8 driehoeke, 1440°', '8, 1440'], explanation: 'Gevormde driehoeke = 10 − 2 = 8. Totale hoeksom = 8 × 180° = 1440°, wat ooreenstem met die formule (10−2)×180 = 1440°.' },
        { difficulty: 'Hard', question: 'ʼn Veelhoek het ʼn binnehoeksom van 2160°. Gebruik die driehoeksverdelingsformule om die aantal sye van die veelhoek te bepaal.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 sye'], explanation: '(n − 2) × 180° = 2160°, dus n − 2 = 2160° ÷ 180° = 12, wat n = 14 gee.' },
        { difficulty: 'Hard', question: 'Diagonale wat vanaf een hoekpunt van ʼn veelhoek getrek word, vorm 11 driehoeke. Hoeveel sye het die veelhoek, en wat is sy binnehoeksom?', answer: '13 sye; hoeksom = 1980°', checkMode: 'self', explanation: 'Aantal sye = aantal driehoeke + 2 = 11 + 2 = 13. Hoeksom = 11 × 180° = 1980°, wat ooreenstem met (13−2)×180 = 1980°.' },
        { difficulty: 'Hard', question: 'Thabo sê die driehoeksverdelingsmetode (deur diagonale vanaf een hoekpunt te trek om driehoeke te vorm) werk slegs vir veelhoeke met ʼn ewe aantal sye. Is hy korrek? Verduidelik.', answer: 'Nee — die driehoeksverdelingsmetode werk vir enige konvekse veelhoek, of dit ʼn onewe of ewe aantal sye het, want die aantal driehoeke wat vanaf een hoekpunt gevorm word, is altyd gelyk aan (aantal sye − 2).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende hoeke gelyk, saam met die ingeslote sy tussen daardie hoeke gelyk in lengte. Verduidelik, deur die ASA-voorwaarde te gebruik, waarom dit alleen genoeg is om te bewys dat die driehoeke kongruent is.', answer: 'As twee hoeke vasgestel is, word die derde hoek outomaties bepaal omdat hoeke in ʼn driehoek tot 180° som. Gekombineer met die vaste ingeslote sy tussen die twee bekende hoeke, is daar slegs een moontlike driehoekvorm en -grootte wat gevorm kan word — dus moet die driehoeke identies wees, en alle oorblywende sye en hoeke is outomaties ook gelyk.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk twee pare ooreenstemmende sye gelyk, plus een paar gelyke hoeke wat NIE die hoek tussen daardie twee sye is nie (SSA). Thabo sê dit bewys altyd kongruensie, net soos SAS. Is hy korrek? Verduidelik met redenasie.', answer: 'Nee — SSA is nie ʼn betroubare kongruensievoorwaarde nie. Anders as SAS (waar die hoek ingesluit is tussen die twee bekende sye, wat die driehoek uniek vasstel), kan die derde sy by SSA soms vanuit twee verskillende geldige posisies geteken word, wat twee verskillende driehoeke oplewer wat albei aan dieselfde gegewe metings voldoen. Slegs SSS, SAS, ASA en RHS waarborg betroubaar kongruensie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek moet gekonstrueer en kongruent bewys word aan ʼn ander reghoekige driehoek deur RHS te gebruik. Verduidelik watter drie stukke inligting moet ooreenstem, en waarom RHS as ʼn aparte voorwaarde van SAS beskou word.', answer: 'Die regte hoek, die skuinssylengte, en die lengte van een ander sy moet almal tussen die twee driehoeke ooreenstem. RHS word apart van SAS beskou omdat die regte hoek nie die hoek is wat ingesluit is tussen die skuinssy en die gegewe sy nie — dit is ʼn nie-ingeslote hoek — tog waarborg die vaste regte hoek, gekombineer met die stelling van Pythagoras, steeds dat die derde sy (en dus die hele driehoek) uniek bepaal word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek word gekonstrueer met binnehoeke van 100°, 95°, 88°, en ʼn onbekende vierde hoek. Bereken die vierde hoek sodat die konstruksie meetkundig geldig is.', answer: '77°', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77', '77°'], explanation: 'Binnehoeke van ʼn vierhoek som tot 360°: 360° − 100° − 95° − 88° = 77°.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek word deur ASA gekonstrueer met hoek A = 55° en hoek B = 63°, met die sy AB tussen hulle as die basis. Bereken hoek C, en gee die grootte van die buitehoek by C.', answer: 'Hoek C = 62°; buitehoek by C = 118°', checkMode: 'self', explanation: 'Hoek C = 180° − 55° − 63° = 62°. Die buitehoek by C is gelyk aan die som van die oorstaande binnehoeke: 55° + 63° = 118° (konsekwent, aangesien dit ook gelyk is aan 180° − 62°).' },
        { difficulty: 'Hard', question: 'ʼn Leerder wil ʼn driehoek met sye 5 cm, 9 cm en 12 cm deur SSS konstrueer. Bepaal of hierdie konstruksie moontlik is, en toon jou redenasie.', answer: 'Moontlik — die twee korter sye, 5 cm + 9 cm = 14 cm, is groter as die langste sy, 12 cm, dus sal die passerbôë kruis en die driehoek kan gekonstrueer word.', checkMode: 'self', explanation: 'Driehoeksongelykheidkontrole: 5 + 9 = 14 > 12, dus bestaan ʼn geldige driehoek.' },
        { difficulty: 'Medium', question: 'Die reghoekige driehoek wat getoon word, is gekonstrueer met die regte hoek by P, skuinssy QR = 25 cm, en sy PQ = 15 cm. Gee die kongruensievoorwaarde wat van toepassing is, en bereken die lengte van sy PR.', answer: 'RHS; PR = 20 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '20', '20 cm', 'RHS, 20 cm'], explanation: 'Dit is die RHS-voorwaarde. Volgens Pythagoras: 15² + PR² = 25², dus PR² = 625 − 225 = 400, wat PR = 20 cm gee.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,60 175,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">PQ = 15 cm</text><text x="105" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">PR = ?</text><text x="115" y="92" font-size="13" fill="#2563eb" font-weight="700">QR = 25 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">P</text><text x="35" y="52" font-size="12" fill="#374151" text-anchor="middle">Q</text><text x="180" y="145" font-size="12" fill="#374151">R</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek wat getoon word, is die buitehoek by een hoekpunt gemerk as 132°, en een van die oorstaande binnehoeke is gemerk as 59°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '73°', checkMode: 'auto', correctAnswer: '73', correctAnswers: ['73', '73°'], explanation: 'Volgens die buitehoekstelling: 132° = 59° + x, dus x = 132° − 59° = 73°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">59°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">132°</text></svg>' },
        { difficulty: 'Hard', question: 'Die ruit wat getoon word, het albei diagonale geteken, wat duidelik teen ʼn regte hoek by die snypunt sny. ʼn Leerder beweer dit bevestig dat die diagonale van ʼn ruit altyd teen regte hoeke ontmoet. Is die leerder se gevolgtrekking korrek, en bewys hierdie een konstruksie dit in die algemeen?', answer: 'Die leerder se waarneming is konsekwent met die bekende eienskap (ruit-diagonale ontmoet altyd teen regte hoeke), maar ʼn enkele konstruksie illustreer die eienskap slegs vir een spesifieke ruit — dit bewys nie dat die eienskap vir elke moontlike ruit in die algemeen geld nie. Die algemene bewys berus daarop dat ʼn ruit se diagonale twee pare kongruente driehoeke vorm (bewys deur SSS, aangesien al vier sye gelyk is), en die gelyke aangrensende hoeke by die snypunt moet elk 90° wees omdat hulle op ʼn reguit lyn lê en gelyk is.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 175,85 110,145 45,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="145" stroke="#2563eb" stroke-width="2"/><line x1="45" y1="85" x2="175" y2="85" stroke="#2563eb" stroke-width="2"/><rect x="100" y="75" width="10" height="10" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="80" font-size="13" fill="#ea580c" font-weight="700">90°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan buitehoeke, diagonaaleienskappe, veelhoek-hoeksomme en formele kongruensieredenasie met selfvertroue toepas.' },
        { minScore: 13, message: 'Goeie werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-wêreld kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek het binnehoeke van 63° en 59°. Bereken die buitehoek by die derde hoekpunt.', answer: '122°', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°'], explanation: 'Volgens die buitehoekstelling is die buitehoek gelyk aan die som van die twee oorstaande binnehoeke: 63° + 59° = 122°.' },
        { difficulty: 'Medium', question: 'ʼn Buitehoek van ʼn driehoek is 110°, en een van die oorstaande binnehoeke is 42°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '68°', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68°'], explanation: '110° = 42° + x, dus x = 110° − 42° = 68°.' },
        { difficulty: 'Medium', question: 'Die twee oorstaande binnehoeke van ʼn driehoek is in die verhouding 1:2, en die buitehoek by die derde hoekpunt is 90°. Bereken die grootte van elke oorstaande binnehoek.', answer: '30° en 60°', checkMode: 'self', explanation: 'Totale dele = 1 + 2 = 3. Een deel = 90° ÷ 3 = 30°. Hoeke: 1 × 30° = 30° en 2 × 30° = 60°. Kontrole: 30° + 60° = 90°.' },
        { difficulty: 'Hard', question: 'Amahle beweer dat as jy een sy van ʼn driehoek by elk van sy drie hoekpunte een vir een verleng, die drie buitehoeke wat gevorm word altyd tot 360° optel, ongeag die driehoek se vorm. Is sy korrek? Verduidelik met behulp van die buitehoekstelling.', answer: 'Ja — elke buitehoek is gelyk aan 180° min sy aangrensende binnehoek, dus is die som van al drie buitehoeke 3×180° min die som van al drie binnehoeke: 540° − 180° = 360°. Dit geld vir elke driehoek, aangesien binnehoeke altyd tot 180° optel.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sipho konstrueer ʼn reghoek en ʼn vlieër en trek die diagonale van elk. Vergelyk wat hy behoort op te merk oor lengtegelykheid en halvering vir die twee vorms.', answer: 'Die reghoek se diagonale is gelyk in lengte en halveer mekaar (maar ontmoet nie teen regte hoeke nie). Die vlieër se diagonale is oor die algemeen nie gelyk in lengte nie, en slegs een diagonaal (die simmetrie-as) halveer die ander — hulle ontmoet wel teen regte hoeke.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato sê die diagonale van ʼn parallelogram ontmoet altyd teen regte hoeke, net soos ʼn ruit s\'n. Is sy korrek? Verduidelik wat werklik gebeur.', answer: 'Nee — ʼn algemene parallelogram se diagonale halveer mekaar, maar ontmoet nie teen regte hoeke nie; slegs ʼn parallelogram wat ook ʼn ruit (of vierkant) is, het diagonale wat teen regte hoeke ontmoet.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo konstrueer ʼn vierkant. Verduidelik watter diagonaaleienskappe dit met beide ʼn reghoek en ʼn ruit deel.', answer: 'ʼn Vierkant se diagonale is gelyk in lengte (ʼn eienskap wat met reghoeke gedeel word) EN ontmoet teen regte hoeke terwyl hulle mekaar halveer (ʼn eienskap wat met ruite gedeel word). ʼn Vierkant is die enigste vierhoek van hierdie drie wat al hierdie diagonaaleienskappe gelyktydig het.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Deur diagonale vanaf een hoekpunt van ʼn 11-sydige veelhoek te trek, hoeveel driehoeke word gevorm, en wat is die totale binnehoeksom?', answer: '9 driehoeke; totale hoeksom = 1620°', checkMode: 'auto', correctAnswer: '1620', correctAnswers: ['1620', '1620°', '9 driehoeke, 1620°', '9, 1620'], explanation: 'Gevormde driehoeke = 11 − 2 = 9. Totale hoeksom = 9 × 180° = 1620°, wat ooreenstem met die formule (11−2)×180 = 1620°.' },
        { difficulty: 'Hard', question: 'ʼn Veelhoek het ʼn binnehoeksom van 1980°. Gebruik die driehoeksverdelingsformule om die aantal sye van die veelhoek te bepaal.', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 sye'], explanation: '(n − 2) × 180° = 1980°, dus n − 2 = 1980° ÷ 180° = 11, wat n = 13 gee.' },
        { difficulty: 'Hard', question: 'Diagonale wat vanaf een hoekpunt van ʼn veelhoek getrek word, vorm 7 driehoeke. Hoeveel sye het die veelhoek, en wat is sy binnehoeksom?', answer: '9 sye; hoeksom = 1260°', checkMode: 'self', explanation: 'Aantal sye = aantal driehoeke + 2 = 7 + 2 = 9. Hoeksom = 7 × 180° = 1260°, wat ooreenstem met (9−2)×180 = 1260°.' },
        { difficulty: 'Hard', question: 'Amahle sê die driehoeksverdelingsmetode (deur diagonale vanaf een hoekpunt te trek om driehoeke te vorm) werk nie vir holrondige (nie-konvekse) veelhoeke nie. Is sy korrek? Verduidelik.', answer: 'Ja — vir ʼn holronde veelhoek is minstens een binnehoek groter as 180°, wat beteken dat diagonale wat vanaf een hoekpunt getrek word buite die veelhoek kan beweeg pleks van dit netjies in driehoeke te verdeel wat dit presies opvul. Die eenvoudige (n − 2) driehoeksverdeling vanaf een hoekpunt werk slegs betroubaar vir konvekse veelhoeke.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het al drie pare ooreenstemmende sye gelyk in lengte. Verduidelik, deur die SSS-voorwaarde te gebruik, waarom dit alleen genoeg is om te bewys dat die driehoeke kongruent is.', answer: 'Sodra al drie sylengtes van ʼn driehoek vasgestel is, is daar slegs een moontlike driehoekvorm wat daaruit gevorm kan word (die vorm is rigied) — dus, as twee driehoeke al drie ooreenstemmende sylengtes deel, moet hulle identies wees in vorm en grootte, wat beteken dat alle ooreenstemmende hoeke ook outomaties gelyk is. Geen hoeke hoef gemeet of gegee te word nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het twee pare ooreenstemmende sye gelyk, met die hoek tussen daardie twee sye ook gelyk (SAS). Sipho sê dit alleen bewys kongruensie. Is hy korrek? Verduidelik waarom die posisie van die hoek saak maak.', answer: 'Ja — SAS is ʼn betroubare kongruensievoorwaarde omdat die ingeslote hoek (die hoek tussen die twee bekende sye) die driehoek uniek vasstel: sodra twee sye en die hoek tussen hulle vasgestel is, is daar slegs een moontlike posisie vir die derde sy, dus kan slegs een driehoek gevorm word. Dit verskil van SSA, waar ʼn nie-ingeslote hoek soms twee verskillende driehoeke kan toelaat.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek moet gekonstrueer en kongruent bewys word aan ʼn ander reghoekige driehoek deur RHS te gebruik. Verduidelik watter drie stukke inligting moet ooreenstem, en waarom RHS as ʼn aparte voorwaarde van SAS beskou word.', answer: 'Die regte hoek, die skuinssylengte, en die lengte van een ander sy moet almal tussen die twee driehoeke ooreenstem. RHS word apart van SAS beskou omdat die regte hoek nie die hoek is wat ingesluit is tussen die skuinssy en die gegewe sy nie — dit is ʼn nie-ingeslote hoek — tog waarborg die vaste regte hoek, gekombineer met die stelling van Pythagoras, steeds dat die derde sy (en dus die hele driehoek) uniek bepaal word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek word gekonstrueer met binnehoeke van 84°, 99°, 92°, en ʼn onbekende vierde hoek. Bereken die vierde hoek sodat die konstruksie meetkundig geldig is.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°'], explanation: 'Binnehoeke van ʼn vierhoek som tot 360°: 360° − 84° − 99° − 92° = 85°.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek word deur ASA gekonstrueer met hoek A = 40° en hoek B = 95°, met die sy AB tussen hulle as die basis. Bereken hoek C, en gee die grootte van die buitehoek by C.', answer: 'Hoek C = 45°; buitehoek by C = 135°', checkMode: 'self', explanation: 'Hoek C = 180° − 40° − 95° = 45°. Die buitehoek by C is gelyk aan die som van die oorstaande binnehoeke: 40° + 95° = 135° (konsekwent, aangesien dit ook gelyk is aan 180° − 45°).' },
        { difficulty: 'Hard', question: 'ʼn Leerder wil ʼn driehoek met sye 7 cm, 10 cm en 16 cm deur SSS konstrueer. Bepaal of hierdie konstruksie moontlik is, en toon jou redenasie.', answer: 'Moontlik — die twee korter sye, 7 cm + 10 cm = 17 cm, is groter as die langste sy, 16 cm, dus sal die passerbôë kruis en die driehoek kan gekonstrueer word.', checkMode: 'self', explanation: 'Driehoeksongelykheidkontrole: 7 + 10 = 17 > 16, dus bestaan ʼn geldige driehoek.' },
        { difficulty: 'Medium', question: 'Die reghoekige driehoek wat getoon word, is gekonstrueer met die regte hoek by L, skuinssy MN = 20 cm, en sy LM = 12 cm. Gee die kongruensievoorwaarde wat van toepassing is, en bereken die lengte van sy LN.', answer: 'RHS; LN = 16 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '16', '16 cm', 'RHS, 16 cm'], explanation: 'Dit is die RHS-voorwaarde. Volgens Pythagoras: 12² + LN² = 20², dus LN² = 400 − 144 = 256, wat LN = 16 cm gee.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 35,64 160,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="128" width="12" height="12" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="102" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">LM = 12 cm</text><text x="97" y="158" font-size="13" fill="#ea580c" font-weight="700" text-anchor="middle">LN = ?</text><text x="100" y="95" font-size="13" fill="#2563eb" font-weight="700">MN = 20 cm</text><text x="35" y="155" font-size="12" fill="#374151" text-anchor="middle">L</text><text x="35" y="56" font-size="12" fill="#374151" text-anchor="middle">M</text><text x="165" y="145" font-size="12" fill="#374151">N</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek wat getoon word, is die buitehoek by een hoekpunt gemerk as 141°, en een van die oorstaande binnehoeke is gemerk as 76°. Bereken die grootte van die ander oorstaande binnehoek.', answer: '65°', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', '65°'], explanation: 'Volgens die buitehoekstelling: 141° = 76° + x, dus x = 141° − 76° = 65°.', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">76°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#2563eb" font-weight="700">141°</text></svg>' },
        { difficulty: 'Hard', question: 'Die vierkant wat getoon word, het albei diagonale geteken, gemerk as gelyk in lengte en kruis by ʼn gemerkte regte hoek by die snypunt. ʼn Leerder beweer dit bevestig dat vierkante die enigste vierhoek is met diagonale wat gelyk EN loodreg is. Is die leerder se gevolgtrekking korrek, en bewys hierdie een konstruksie dit in die algemeen?', answer: 'Die leerder se gevolgtrekking is in beginsel korrek — onder die algemene vierhoeke wat bestudeer word (reghoek, ruit, parallelogram, vlieër, vierkant), kombineer slegs die vierkant gelyke-lengte-diagonale met loodregte diagonale. ʼn Enkele konstruksie illustreer dit egter slegs vir een spesifieke vierkant — dit bewys nie op sigself die algemene eienskap nie. ʼn Volledige bewys sal moet toon dat ʼn vierkant beide die reghoek se gelyke-diagonaal-eienskap en die ruit se loodregte-diagonaal-eienskap gelyktydig bevredig, aangesien ʼn vierkant beide ʼn reghoek en ʼn ruit is.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,25 175,90 110,155 45,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="155" stroke="#2563eb" stroke-width="2"/><line x1="45" y1="90" x2="175" y2="90" stroke="#2563eb" stroke-width="2"/><rect x="100" y="80" width="10" height="10" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="85" font-size="13" fill="#ea580c" font-weight="700">90°</text><text x="120" y="55" font-size="12" fill="#2563eb" font-weight="700">d</text><text x="145" y="82" font-size="12" fill="#2563eb" font-weight="700">d</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy het ʼn sterk begrip van buitehoeke, diagonaaleienskappe, veelhoek-hoeksomme en formele kongruensieredenasie.' },
        { minScore: 13, message: 'Goeie werk! Gaan weer deur enige gemiste vrae en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
