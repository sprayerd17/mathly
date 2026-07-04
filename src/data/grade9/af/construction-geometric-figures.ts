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
}
