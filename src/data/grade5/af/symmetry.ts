import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (symmetry roles) ─────────────────────────────────────────
// line of symmetry → blue   (#2563eb)
// symmetrical      → green  (#16a34a)
// not symmetrical  → red    (#dc2626)
// number of lines  → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Simmetrie',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS SYMMETRY?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-symmetry',
      title: 'Wat is Simmetrie?',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Vorm het simmetrie wanneer dit presies in die helfte gevou kan word en albei kante pas perfek. Die vouliyn word die ${bl('simmetrielyn')} genoem. As albei kante spieëlbeelde van mekaar is, is die vorm ${gr('simmetries')}. As die twee kante nie pas nie, is die vorm ${re('nie simmetries nie')}. Sommige vorms het meer as een ${bl('simmetrielyn')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simmetrielyn')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simmetries')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie simmetries nie')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Het ʼn vierkant ʼn simmetrielyn?',
          answer: `Ja — ʼn vierkant het ${bl('4 simmetrielyne')}`,
          steps: [
            `Vou die vierkant in die helfte van links na regs. Albei kante pas perfek. Dit is ʼn ${bl('simmetrielyn')}.`,
            `ʼn Vierkant het eintlik 4 ${bl('simmetrielyne')} — horisontaal, vertikaal, en twee diagonale.`,
          ],
        },
        {
          question: 'Het die letter A ʼn simmetrielyn?',
          answer: `Ja — die letter A het ${bl('een simmetrielyn')}`,
          steps: [
            `Trek ʼn vertikale lyn deur die middel van die letter A. Die linkerkant en regterkant is spieëlbeelde.`,
            `Ja, die letter A het een ${bl('simmetrielyn')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — yes/no line of symmetry ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Het ʼn sirkel ʼn simmetrielyn?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja'],
          explanation: 'ʼn Sirkel het oneindig baie simmetrielyne — enige reguit lyn deur die middelpunt verdeel dit in twee bypassende helftes.',
        },

        // ── Q2 Medium — count lines of symmetry in a square ─────────────────
        {
          difficulty: 'Medium',
          question: 'Hoeveel simmetrielyne het ʼn vierkant?',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'ʼn Vierkant het 4 simmetrielyne — een vertikaal, een horisontaal, en twee diagonale (hoek tot hoek).',
        },

        // ── Q3 Hard — evaluate a misconception about a rectangle ─────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn reghoek het 4 simmetrielyne net soos ʼn vierkant. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn reghoek het slegs 2 simmetrielyne. Die diagonale voue pas nie omdat die sye verskillende lengtes het, anders as by ʼn vierkant.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagramme wat ʼn vierkant met al 4 simmetrielyne in blou uitgelig wys, en die letter A met sy vertikale simmetrielyn in blou uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat simmetrie is, hoe om ʼn simmetrielyn te identifiseer deur te vou, en voorbeelde van simmetriese en nie-simmetriese vorms" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINES OF SYMMETRY IN SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'lines-of-symmetry-in-shapes',
      title: 'Simmetrielyne in Vorms',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Verskillende vorms het verskillende getalle ${bl('simmetrielyne')}. ʼn ${bl('Simmetrielyn')} kan ${or('vertikaal')} (op en af), ${or('horisontaal')} (links en regs), of ${or('diagonaal')} (hoek tot hoek) wees. Om al die ${bl('simmetrielyne')} in ʼn vorm te vind, probeer dit in elke rigting vou en tel hoeveel keer albei kante perfek pas.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aantal lyne')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormnaam')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Types of lines ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes simmetrielyne</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Vertikaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Loop op en af deur die middel van die vorm.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Horisontaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Loop links en regs oor die middel van die vorm.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Diagonaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Loop van hoek tot hoek oor die vorm.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om simmetrielyne te tel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Probeer om die vorm in <strong>elke</strong> rigting te vou — vertikaal, horisontaal, en diagonaal. Elke keer wat albei kante perfek pas, tel dit as ${or('een simmetrielyn')}. Hou aan totdat jy al die moontlike voue probeer het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Hoeveel simmetrielyne het ʼn ${bl('reghoek')}?`,
          answer: `ʼn ${bl('Reghoek')} het ${gr('2 simmetrielyne')}`,
          steps: [
            `Probeer ʼn ${or('vertikale')} vou deur die middel van die ${bl('reghoek')} — albei kante pas. Dit is ${or('1')} lyn.`,
            `Probeer ʼn ${or('horisontale')} vou oor die middel — albei kante pas. Dit is ${or('2')} lyne.`,
            `Probeer ʼn ${or('diagonale')} vou van hoek tot hoek — die kante pas nie. Diagonale voue is nie simmetrielyne vir ʼn ${bl('reghoek')} nie.`,
            `ʼn ${bl('Reghoek')} het ${gr('2 simmetrielyne')}.`,
          ],
        },
        {
          question: `Hoeveel simmetrielyne het ʼn ${bl('gelyksydige driehoek')}?`,
          answer: `ʼn ${bl('Gelyksydige driehoek')} het ${gr('3 simmetrielyne')}`,
          steps: [
            `ʼn ${bl('Gelyksydige driehoek')} het ${or('3')} gelyke sye.`,
            `Vou van elke hoek na die middel van die teenoorgestelde sy. Elke vou gee ʼn perfekte pas.`,
            `Daar is ${or('3')} hoeke, so daar is ${or('3')} voue wat elk ʼn perfekte pas gee.`,
            `ʼn ${bl('Gelyksydige driehoek')} het ${gr('3 simmetrielyne')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — yes/no symmetry in a letter ───────────────────────────
        {
          difficulty: 'Easy',
          question: 'Het die letter H ʼn simmetrielyn?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja'],
          explanation: 'Die letter H het 2 simmetrielyne — een horisontaal en een vertikaal. Albei helftes pas wanneer dit langs enige van die lyne gevou word.',
        },

        // ── Q5 Medium — count lines in an equilateral triangle ───────────────
        {
          difficulty: 'Medium',
          question: 'Hoeveel simmetrielyne het ʼn gelyksydige driehoek?',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'ʼn Gelyksydige driehoek het 3 gelyke sye en 3 simmetrielyne — een vanaf elke hoek na die middelpunt van die teenoorgestelde sy.',
        },

        // ── Q6 Hard — count lines in a regular hexagon ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo teken ʼn reëlmatige seshoek. Hoeveel simmetrielyne het dit?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — 3 deur teenoorgestelde hoekpunte en 3 deur die middelpunte van teenoorgestelde sye.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagramme wat ʼn reghoek met sy 2 simmetrielyne in blou uitgelig wys, en ʼn gelyksydige driehoek met al 3 simmetrielyne in blou uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om al die simmetrielyne in verskillende vorms te vind deur vertikale horisontale en diagonale voue te probeer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SYMMETRY IN REAL LIFE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry-in-real-life',
      title: 'Simmetrie in die Werklike Lewe',
      icon: '🦋',
      explanation:
        `<p style="margin-bottom:16px;">Simmetrie verskyn oral om ons in die alledaagse lewe. Skoenlappers, blare, gesigte, en geboue het dikwels ${bl('simmetrielyne')}. Wanneer iets gebalanseerd en eweredig aan albei kante lyk, is dit waarskynlik ${gr('simmetries')}. Om simmetrie te herken help ons in kuns, ontwerp, en die natuur.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simmetrielyn')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simmetries')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie simmetries nie')}</span>` +
        `</div>` +

        // ── Examples in nature and design ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Waar sien ons simmetrie?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Die natuur')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skoenlappervlerke, blare, en blomme is dikwels ${gr('simmetries')} met ʼn ${bl('simmetrielyn')} deur die middel.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Geboue')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Baie geboue en brûe word ontwerp om ${gr('simmetries')} te wees sodat hulle gebalanseerd lyk en struktureel sterk is.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Onreëlmatige vorms')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verkreukelde stuk papier of ʼn onreëlmatige rots is ${re('nie simmetries nie')} — geen vou sal bypassende kante gee nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om simmetrie in die werklike lewe te toets</p>` +
        `<p style="margin:0;color:#1e3a8a;">Verbeel jou dat jy die voorwerp langs ʼn denkbeeldige ${bl('simmetrielyn')} vou. As albei helftes presies op mekaar sou val, is die voorwerp ${gr('simmetries')}. As die helftes nie pas nie, is die voorwerp ${re('nie simmetries nie')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato kyk na ʼn skoenlapper. Is dit simmetries?',
          answer: `Ja — ʼn skoenlapper is ${gr('simmetries')} met een ${bl('vertikale simmetrielyn')}`,
          steps: [
            `Trek ʼn denkbeeldige ${bl('simmetrielyn')} deur die middel van die skoenlapper van kop tot stert.`,
            `Die linkervlerk en regtervlerk is spieëlbeelde van mekaar.`,
            `Ja, ʼn skoenlapper is ${gr('simmetries')} met een ${bl('vertikale simmetrielyn')}.`,
          ],
        },
        {
          question: 'Amahle teken ʼn huisvorm — ʼn vierkant met ʼn driehoekige dak. Hoeveel simmetrielyne het dit?',
          answer: `Die huisvorm het ${bl('1 simmetrielyn')}`,
          steps: [
            `Probeer ʼn ${bl('vertikale')} vou deur die middel — die linker- en regterkant pas perfek. Dit is ʼn ${bl('simmetrielyn')}.`,
            `Probeer ʼn horisontale vou — die boonste driehoek en die onderste vierkant pas ${re('nie')}. Dit is ${re('nie ʼn simmetrielyn nie')}.`,
            `Die huisvorm het ${bl('1 simmetrielyn')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — symmetry in nature ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is ʼn skoenlapper simmetries?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja'],
          explanation: 'Ja — ʼn skoenlapper het een vertikale simmetrielyn deur die middel van sy lyf. Die linker- en regtervlerk is spieëlbeelde van mekaar.',
        },

        // ── Q8 Medium — name real-life symmetrical objects ──────────────────
        {
          difficulty: 'Medium',
          question: 'Noem twee voorwerpe uit die alledaagse lewe wat ʼn simmetrielyn het.',
          answer: 'Enige twee korrekte voorbeelde soos ʼn blaar, ʼn gesig, ʼn venster, ʼn deur, ʼn ster.',
          checkMode: 'self',
        },

        // ── Q9 Hard — evaluate a misconception about a scalene triangle ──────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn skalene driehoek het ten minste een simmetrielyn. Is sy korrek? Verduidelik.',
          answer: 'Nee — ʼn skalene driehoek het geen simmetrielyne nie omdat al drie sye verskillende lengtes het, so geen vou sal twee bypassende helftes gee nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn skoenlapper met sy vertikale simmetrielyn in blou uitgelig wys, en ʼn huisvorm met sy enkele vertikale simmetrielyn in blou uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat voorbeelde van simmetrie in die alledaagse lewe wys, insluitend skoenlappers blare geboue, en hoe om die simmetrielyn in elkeen te identifiseer" />',
    },
  ],
  topicPractice: [],
  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Perfek! Jy het simmetrie baasgeraak.' },
      { minPercent: 75, message: 'Uitstekende werk! Jy het ʼn sterk begrip van simmetrie.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
