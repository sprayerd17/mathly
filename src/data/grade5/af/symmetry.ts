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
        'Diagramme wat ʼn vierkant met al 4 simmetrielyne in blou uitgelig wys, en die letter A met sy vertikale simmetrielyn in blou uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 250 135" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="80" height="80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="16" x2="60" y2="104" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="16" y1="60" x2="104" y2="60" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="20" y1="20" x2="100" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="100" y1="20" x2="20" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="60" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Vierkant — 4 lyne</text><line x1="160" y1="100" x2="190" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="220" y1="100" x2="190" y2="20" stroke="#0f1f3d" stroke-width="3"/><line x1="172" y1="70" x2="208" y2="70" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="15" x2="190" y2="105" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="190" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Letter A — 1 lyn</text></svg>',

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
        'Diagramme wat ʼn reghoek met sy 2 simmetrielyne in blou uitgelig wys, en ʼn gelyksydige driehoek met al 3 simmetrielyne in blou uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 280 135" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="35" width="110" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="30" x2="70" y2="100" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="10" y1="65" x2="130" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="70" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Reghoek — 2 lyne</text><polygon points="210,25 165,105 255,105" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="25" x2="210" y2="105" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="165" y1="105" x2="232.5" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="255" y1="105" x2="187.5" y2="65" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="210" y="118" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Driehoek — 3 lyne</text></svg>',

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
        'Diagram wat ʼn skoenlapper met sy vertikale simmetrielyn in blou uitgelig wys, en ʼn huisvorm met sy enkele vertikale simmetrielyn in blou uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 300 135" xmlns="http://www.w3.org/2000/svg"><path d="M70,30 Q30,20 25,55 Q30,85 70,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,30 Q110,20 115,55 Q110,85 70,70 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,68 Q48,74 42,94 Q56,99 70,84 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><path d="M70,68 Q92,74 98,94 Q84,99 70,84 Z" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="70" y1="25" x2="70" y2="95" stroke="#0f1f3d" stroke-width="3"/><circle cx="70" cy="22" r="4" fill="#0f1f3d"/><line x1="70" y1="10" x2="70" y2="108" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="70" y="122" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Skoenlapper — 1 lyn</text><polygon points="230,30 190,70 270,70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="195" y="70" width="70" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="25" x2="230" y2="115" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><text x="230" y="128" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Huisvorm — 1 lyn</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat voorbeelde van simmetrie in die alledaagse lewe wys, insluitend skoenlappers blare geboue, en hoe om die simmetrielyn in elkeen te identifiseer" />',
    },
  ],
  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Het ʼn vierkant ʼn simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'ʼn Vierkant kan gevou word sodat albei helftes perfek pas — byvoorbeeld reguit deur die middel. Dit het ʼn simmetrielyn (trouens, dit het 4).' },
        { difficulty: 'Easy', question: 'Kyk na die letter M. As jy dit presies in die middel vou, pas die twee helftes?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Om die letter M in die middel te vou (vertikaal) gee twee bypassende helftes, so M het ʼn simmetrielyn.' },
        { difficulty: 'Easy', question: 'ʼn Sirkel word presies deur die middelpunt gesny. Sal die twee helftes altyd pas, ongeag in watter rigting die snit gemaak word?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Elke reguit snit deur die middelpunt van ʼn sirkel skep twee identiese helftes, so ʼn sirkel het ʼn simmetrielyn in elke rigting deur die middelpunt.' },
        { difficulty: 'Easy', question: 'Het die letter F ʼn simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Geen vou van die letter F gee bypassende helftes nie — die horisontale arms steek net aan een kant uit, so F is nie simmetries nie.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn vierkant?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Vierkant het 4 simmetrielyne: een vertikaal, een horisontaal, en twee diagonaal (hoek tot hoek).' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoek word geteken wat duidelik langer as breed is (nie ʼn vierkant nie). Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Nie-vierkantige reghoek het 2 simmetrielyne: een vertikaal en een horisontaal. Die diagonale werk nie omdat die sye ongelyke lengtes het nie.' },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het ʼn gelyksydige driehoek (al 3 sye gelyk)?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'ʼn Gelyksydige driehoek het 3 simmetrielyne, een vanaf elke hoek na die middelpunt van die teenoorgestelde sy.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige seshoek het 6 gelyke sye en 6 gelyke hoeke. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — 3 wat deur pare teenoorgestelde hoekpunte loop, en 3 wat deur die middelpunte van pare teenoorgestelde sye loop.' },
        { difficulty: 'Medium', question: 'Watter tipe simmetrielyn het die letter T — vertikaal, horisontaal, of diagonaal?', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal'], explanation: 'Die letter T het een simmetrielyn wat reguit op en af deur die middel van die stam loop — dit is ʼn vertikale lyn.' },
        { difficulty: 'Medium', question: 'Het ʼn (nie-vierkantige) reghoek ʼn diagonale simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Nee — om ʼn reghoek langs ʼn diagonaal te vou maak nie die twee driehoekige helftes pas nie, omdat die reghoek se sye verskillende lengtes het. Slegs die vertikale en horisontale lyne is simmetrielyne.' },
        { difficulty: 'Medium', question: 'Die letter H het twee simmetrielyne. Watter tipes is dit?', checkMode: 'auto', correctAnswer: 'vertikaalenhorisontaal', correctAnswers: ['vertikaalenhorisontaal', 'vertikaal en horisontaal', 'horisontaal en vertikaal', 'horisontaalenvertikaal'], explanation: 'Die letter H kan van bo na onder gevou word (ʼn horisontale lyn) of van links na regs (ʼn vertikale lyn) en steeds pas, so dit het een vertikale en een horisontale simmetrielyn.' },
        { difficulty: 'Medium', question: 'ʼn Stopteken is in die vorm van ʼn reëlmatige agthoek (8 gelyke sye). Is ʼn stopteken simmetries?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn reëlmatige agthoek het 8 simmetrielyne, so ʼn stopteken is simmetries ongeag watter van daardie 8 maniere jy dit vou.' },
        { difficulty: 'Medium', question: 'Priya kyk na ʼn vlieërvorm wat in die lug vlieg — ʼn diamantagtige vorm wat slegs simmetries is langs sy lang vertikale diagonaal. Hoeveel simmetrielyne het hierdie vlieërvorm?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Tipiese vlieërvorm het net 1 simmetrielyn — die lang diagonaal van bo na onder. Die kort diagonaal skep nie bypassende helftes nie, omdat die boonste en onderste driehoeke verskillende groottes het.' },
        { difficulty: 'Medium', question: 'ʼn Hartvorm wat vir ʼn kaart geteken word, is perfek eweredig aan albei kante. Noem twee ander werklike-lewe voorwerpe, buiten ʼn hart, wat gewoonlik ook ʼn simmetrielyn het.', answer: 'Enige twee redelike voorbeelde soos ʼn skoenlapper, ʼn blaar, ʼn gesig, ʼn venster, ʼn vyfpuntige ster, of ʼn stopteken.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele kyk na ʼn eenvoudige driehoekige padwaarskuwingsteken, wat ʼn gelykbenige driehoek is wat opwaarts wys (twee gelyke skuins sye, een plat basis). Het dit ʼn simmetrielyn, en indien wel, watter tipe?', checkMode: 'auto', correctAnswer: 'javertikaal', correctAnswers: ['javertikaal', 'ja, vertikaal', 'ja vertikaal'], explanation: 'Ja — ʼn gelykbenige driehoek het 1 simmetrielyn: ʼn vertikale lyn vanaf die boonste punt reguit af na die middel van die basis.' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Reghoek het 4 simmetrielyne omdat dit 4 sye het, net soos ʼn vierkant." Is dit korrek? Verduidelik die fout.', answer: 'Nee, dit is nie korrek nie. ʼn Reghoek (wat nie ʼn vierkant is nie) het slegs 2 simmetrielyne — die vertikale en horisontale een. Die diagonale voue pas nie omdat ʼn reghoek se sye nie almal dieselfde lengte is soos by ʼn vierkant nie. Om 4 sye te hê beteken nie outomaties 4 simmetrielyne nie; die vorm se sye en hoeke moet presies ooreenstem wanneer dit gevou word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê: "ʼn Skalene driehoek (al drie sye verskillende lengtes) het steeds een simmetrielyn, want elke driehoek het ten minste een." Wys waarom Thabo verkeerd is.', answer: 'Thabo is verkeerd. ʼn Skalene driehoek het 0 simmetrielyne. Aangesien al drie sye verskillende lengtes het, kan geen vou ooit die twee helftes laat pas nie — elke moontlike vou los onbypassende sye of hoeke. Nie elke driehoek het ʼn simmetrielyn nie; slegs gelyksydige (3 lyne) en gelykbenige (1 lyn) driehoeke het.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle sê ʼn windpomp-vorm met 4 identiese lemme rondom ʼn middelpunt, wat almal in dieselfde rotasierigting wys, het 4 simmetrielyne "omdat dit dieselfde lyk as jy dit draai." Is sy korrek oor simmetrielyne? Verduidelik.', answer: 'Nee, Amahle verwar rotasiesimmetrie met lynsimmetrie. Dit is waar dat die windpomp dieselfde lyk nadat dit gedraai is (dit is rotasiesimmetrie), maar dit beteken nie dit het ʼn simmetrielyn nie. Omdat al die lemme in dieselfde rotasierigting wys (soos ʼn draaiende waaier), gee geen reguit vou twee bypassende spieëlhelftes nie — om dit te vou sou die rigting waarin die lemme wys, omkeer, so dit het eintlik 0 simmetrielyne.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn reëlmatige seshoek en ʼn nie-vierkantige reghoek. Watter vorm het meer simmetrielyne, en met hoeveel?', checkMode: 'auto', correctAnswer: 'seshoekmet4', correctAnswers: ['seshoekmet4', 'seshoek met 4', 'die seshoek met 4', 'seshoek, 4 meer'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne, terwyl ʼn nie-vierkantige reghoek 2 het. Die verskil is 6 − 2 = 4, so die seshoek het 4 meer simmetrielyne as die reghoek.' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm word gemaak van ʼn vierkant met ʼn gelyksydige driehoek presies gesentreer bo-op vasgeheg (soos ʼn eenvoudige huistekening). Verduidelik hoeveel simmetrielyne hierdie saamgestelde vorm het en waarom ʼn horisontale vou nie werk nie, al is die vierkant en driehoek elk afsonderlik simmetries.', answer: 'Die saamgestelde huisvorm het net 1 simmetrielyn — ʼn enkele vertikale lyn reguit deur die middel, deur die punt van die driehoek en die middel van die vierkant daaronder. ʼn Horisontale vou werk nie omdat die driehoekdak net bo-op sit en die vierkantige liggaam net onder is nie — om horisontaal te vou sou probeer om die spits driehoekvorm teen die plat vierkantvorm te laat pas, en dit is heeltemal verskillende vorms, so die boonste en onderste kant pas nooit nie. Al het die vierkant alleen 4 simmetrielyne en die driehoek alleen 3, verwyder die kombinasie in een saamgestelde vorm al behalwe die een lyn wat hulle in gemeen het — die vertikale een.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfek! Jy het ʼn baie goeie begrip van simmetrielyne in vorms, letters, en werklike-lewe voorwerpe.' },
        { minScore: 15, message: 'Uitstekende werk! Jy verstaan simmetrie goed — kyk na enige vraag wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor simmetrielyne en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reghoek word op die bord geteken. Het dit ten minste een simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn reghoek het 2 simmetrielyne, een vertikaal en een horisontaal, al is dit nie ʼn vierkant nie.' },
        { difficulty: 'Easy', question: 'Sipho vou die letter A presies in die middel. Pas die twee helftes?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — om die letter A vertikaal in die middel te vou gee twee bypassende helftes, so A het ʼn simmetrielyn.' },
        { difficulty: 'Easy', question: 'Het die letter G ʼn simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Nee — die krul aan die onderkant van die letter G breek enige moontlike ooreenstemming, so geen vou gee twee identiese helftes nie.' },
        { difficulty: 'Easy', question: 'Kyk na ʼn gewone sirkel wat op papier geteken is. Is dit moontlik om dit te vou sodat die twee helftes NIE pas nie?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Nee — ʼn sirkel pas altyd perfek ongeag waar jy dit deur die middelpunt vou, so daar is geen manier om dit in twee onbypassende helftes te vou nie.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye en 5 gelyke hoeke. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Reëlmatige vyfhoek het 5 simmetrielyne — een vanaf elke hoek na die middelpunt van die teenoorgestelde sy.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn gelyksydige driehoek?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'ʼn Gelyksydige driehoek het 3 gelyke sye, wat dit 3 simmetrielyne gee — een vanaf elke hoekpunt na die middelpunt van die teenoorgestelde sy.' },
        { difficulty: 'Medium', question: 'ʼn Gelykbenige driehoek het twee gelyke sye en een ander sy. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Gelykbenige driehoek het net 1 simmetrielyn — die lyn vanaf die boonste hoekpunt (waar die twee gelyke sye ontmoet) reguit af na die middelpunt van die basis.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige seshoek word met ʼn vierkant vergelyk. Hoeveel simmetrielyne het die seshoek alleen?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne, 3 deur teenoorgestelde hoeke en 3 deur die middelpunte van teenoorgestelde sye.' },
        { difficulty: 'Medium', question: 'Watter tipe simmetrielyn het die letter B — vertikaal, horisontaal, of diagonaal?', checkMode: 'auto', correctAnswer: 'horisontaal', correctAnswers: ['horisontaal'], explanation: 'Die letter B vou netjies langs ʼn horisontale lyn deur die middel, so sy enkele simmetrielyn is horisontaal.' },
        { difficulty: 'Medium', question: 'Het ʼn vierkant ʼn diagonale simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn vierkant het 2 diagonale simmetrielyne (hoek tot hoek) benewens sy vertikale en horisontale lyne, wat dit in totaal 4 simmetrielyne gee.' },
        { difficulty: 'Medium', question: 'Die letter X word gevou en pas langs meer as een tipe lyn. Noem die twee tipes simmetrielyne wat die letter X het.', checkMode: 'auto', correctAnswer: 'vertikaalenhorisontaal', correctAnswers: ['vertikaalenhorisontaal', 'vertikaal en horisontaal', 'horisontaal en vertikaal', 'horisontaalenvertikaal'], explanation: 'Die letter X het ʼn vertikale simmetrielyn (bo na onder) en ʼn horisontale simmetrielyn (links na regs), so dit het in totaal 2 simmetrielyne.' },
        { difficulty: 'Medium', question: 'ʼn Vyfpuntige ster-versiering hang aan ʼn klaskamermuur. Is ʼn reëlmatige vyfpuntige ster simmetries?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn reëlmatige vyfpuntige ster het 5 simmetrielyne, een deur elke punt en die middelpunt van die teenoorgestelde sy.' },
        { difficulty: 'Medium', question: 'ʼn Skoenlapper land op ʼn blom. Nomvula sê die skoenlapper se vlerke is spieëlbeelde van mekaar. Langs watter tipe lyn lê die skoenlapper se simmetrie?', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal'], explanation: 'Die skoenlapper se simmetrielyn loop deur die middel van sy lyf van kop tot stert — dit is tipies ʼn vertikale lyn, met die linkervlerk wat die regtervlerk spieël.' },
        { difficulty: 'Medium', question: 'Kyk na ʼn gewone venster wat uit vier gelyke ruite in ʼn 2×2-rooster bestaan, met ʼn kruisvormige raam in die middel. Verduidelik in woorde waarom hierdie vensterontwerp simmetries is, en noem ten minste een simmetrielyn.', answer: 'Die venster is simmetries omdat dit langs ʼn vertikale lyn deur die middel van die kruisraam gevou kan word en die linker- en regterruite pas, en dit kan ook langs ʼn horisontale lyn oor die middel van die kruisraam gevou word en die boonste en onderste ruite pas. Omdat albei die vertikale en horisontale voue werk, het die venster ten minste 2 simmetrielyne.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Plus-tekenvorm (soos ʼn hospitaalkruis, met vier gelyke arms van dieselfde wydte en lengte) word op ʼn kaart geteken. Hoeveel simmetrielyne het hierdie plusteken?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Simmetriese plusteken met vier gelyke arms het 4 simmetrielyne: een vertikaal, een horisontaal, en twee diagonaal — dieselfde getal as ʼn vierkant, omdat die vorm eweredig binne ʼn vierkantige buitelyn pas.' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Reëlmatige seshoek het net 3 simmetrielyne, want dit het net 3 pare teenoorgestelde hoeke." Verduidelik wat die leerder mis.', answer: 'Die leerder tel net die 3 lyne wat deur pare teenoorgestelde hoeke loop, maar vergeet die ander 3 lyne wat deur die middelpunte van pare teenoorgestelde sye loop. ʼn Reëlmatige seshoek het eintlik 6 simmetrielyne in totaal — 3 deur teenoorgestelde hoeke plus 3 deur teenoorgestelde sy-middelpunte — nie net 3 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso beweer: "ʼn Sirkel het presies 4 simmetrielyne, net soos ʼn vierkant, aangesien ʼn sirkel ʼn bietjie soos ʼn afgeronde vierkant lyk." Is Kagiso korrek? Verduidelik.', answer: 'Nee, Kagiso is nie korrek nie. ʼn Sirkel het oneindig baie simmetrielyne, nie net 4 nie — enige reguit lyn wat deur die middelpunt van ʼn sirkel getrek word, in enige rigting, skep twee bypassende helftes. ʼn Vierkant het net 4 simmetrielyne omdat sy reguit sye en hoeke die moontlike voue beperk, maar ʼn sirkel het geen hoeke of reguit sye om dit te beperk nie, so elke rigting deur die middelpunt werk.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lindiwe sê: "ʼn Parallelogram (soos ʼn reghoek wat sywaarts skuins getrek is, sonder regte hoeke) het steeds 2 simmetrielyne net soos ʼn reghoek, omdat dit 2 pare parallelle sye het." Is sy korrek? Verduidelik.', answer: 'Nee, Lindiwe is nie korrek nie. ʼn Skuins parallelogram (een wat nie ʼn reghoek of ruit is nie) het 0 simmetrielyne. Al het dit 2 pare parallelle sye, maak om dit vertikaal, horisontaal, of langs ʼn diagonaal te vou nooit die twee helftes presies pas nie, omdat die skuinsheid beteken teenoorgestelde hoeke is nie spieëlbeelde van mekaar nie. Parallelle sye alleen is nie genoeg om ʼn simmetrielyn te waarborg nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn reëlmatige vyfhoek en ʼn vierkant. Watter vorm het meer simmetrielyne, en met hoeveel?', checkMode: 'auto', correctAnswer: 'vyfhoekmet1', correctAnswers: ['vyfhoekmet1', 'vyfhoek met 1', 'die vyfhoek met 1', 'vyfhoek, 1 meer'], explanation: 'ʼn Reëlmatige vyfhoek het 5 simmetrielyne, en ʼn vierkant het 4. Die verskil is 5 − 4 = 1, so die vyfhoek het presies 1 meer simmetrielyn as die vierkant.' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm word gemaak van ʼn reghoek met ʼn halfsirkel presies gesentreer aan een kort kant vasgeheg (soos ʼn eenvoudige deur met ʼn boogvormige bopunt). Verduidelik hoeveel simmetrielyne hierdie saamgestelde vorm het en waarom die vorm nie ʼn horisontale simmetrielyn kan hê nie, al het die reghoekdeel alleen wel een.', answer: 'Die saamgestelde deurvorm het net 1 simmetrielyn — ʼn enkele vertikale lyn deur die middel, deur die middel van die boog en die middel van die reghoek daaronder. Dit kan nie ʼn horisontale simmetrielyn hê nie, want die halfsirkel is net aan die bopunt van die reghoek vasgeheg en nie aan die onderkant nie — om horisontaal te vou sou probeer om die geboë boog teen ʼn plat reghoekrand te laat pas, en dit is verskillende vorms, so die boonste en onderste kant pas nooit nie. Al het ʼn gewone reghoek alleen sowel ʼn vertikale as ʼn horisontale simmetrielyn, verwyder die aanheg van die halfsirkel aan net een kant die horisontale lyn, en laat net die vertikale lyn oor wat die twee vorms in gemeen het.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan simmetrielyne in vorms, letters, en voorwerpe met selfvertroue identifiseer, tel, en klassifiseer.' },
        { minScore: 15, message: 'Uitstekende werk! Kyk na enige vraag wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor simmetrie en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Kyk na ʼn gewone sirkel. Het dit ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn sirkel het oneindig baie simmetrielyne, aangesien enige lyn deur die middelpunt dit in twee bypassende helftes verdeel.' },
        { difficulty: 'Easy', question: 'Bongani vou die letter T presies in die middel. Pas die twee helftes perfek?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — die letter T vou netjies in die middel, met albei kante van die boonste balk en die stam wat presies pas.' },
        { difficulty: 'Easy', question: 'Het die letter N ʼn simmetrielyn? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Nee — die diagonale streep van die letter N loop van een hoek na die teenoorgestelde hoek, so geen vertikale, horisontale, of diagonale vou gee twee bypassende helftes nie.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant word langs een van sy diagonale gevou. Pas die twee driehoekige helftes?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — aangesien al vier sye van ʼn vierkant gelyk is, gee om langs enige diagonaal te vou twee identiese driehoekige helftes.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn reëlmatige seshoek?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — 3 deur pare teenoorgestelde hoeke en 3 deur die middelpunte van pare teenoorgestelde sye.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige hek is twee keer so lank as wat dit hoog is. Hoeveel simmetrielyne het hierdie reghoek?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'Enige nie-vierkantige reghoek, ongeag sy presiese verhoudings, het 2 simmetrielyne — een vertikaal en een horisontaal.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek-wapenskild word vir ʼn skoolwapen ontwerp. Hoeveel simmetrielyne het ʼn reëlmatige vyfhoek?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Reëlmatige vyfhoek het 5 simmetrielyne, elkeen vanaf ʼn hoek na die middelpunt van die teenoorgestelde sy.' },
        { difficulty: 'Medium', question: 'ʼn Skalene driehoek het drie sye wat almal verskillende lengtes het. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: 'ʼn Skalene driehoek het 0 simmetrielyne, want met al drie sye verskillende lengtes kan geen vou ooit twee bypassende helftes gee nie.' },
        { difficulty: 'Medium', question: 'Watter tipe simmetrielyn het die letter W — vertikaal, horisontaal, of diagonaal?', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal'], explanation: 'Die letter W vou netjies van bo na onder in die middel, so sy enkele simmetrielyn is vertikaal.' },
        { difficulty: 'Medium', question: 'Het ʼn gelyksydige driehoek ʼn horisontale simmetrielyn wanneer dit geteken word met een plat sy onder en een punt bo? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Nee — ʼn gelyksydige driehoek wat punt-op geteken is, het 3 simmetrielyne, maar elkeen loop vanaf ʼn hoek na die middelpunt van die teenoorgestelde sy. Met die plat sy onder is die vertikale lyn deur die boonste punt een daarvan, maar die ander twee is diagonaal, en geeneen van die drie is suiwer horisontaal nie.' },
        { difficulty: 'Medium', question: 'Die hoofletter I (geteken as ʼn gewone vertikale streep met ʼn boonste en onderste balkie van gelyke wydte) het twee simmetrielyne. Noem albei tipes.', checkMode: 'auto', correctAnswer: 'vertikaalenhorisontaal', correctAnswers: ['vertikaalenhorisontaal', 'vertikaal en horisontaal', 'horisontaal en vertikaal', 'horisontaalenvertikaal'], explanation: 'Hierdie styl van die letter I het ʼn vertikale lyn deur die middel van die streep en ʼn horisontale lyn deur die middel van die balkie, so dit het een vertikale en een horisontale simmetrielyn.' },
        { difficulty: 'Medium', question: 'ʼn Tradisionele Suid-Afrikaanse kraalwerkpatroon gebruik ʼn diamant (ruit) motief met twee simmetrielyne langs sy diagonale. Is hierdie diamantvorm simmetries?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — ʼn ruit (diamantvorm) het 2 simmetrielyne, albei langs sy diagonale, omdat teenoorgestelde sye gelyk is en teenoorgestelde hoeke ooreenstem.' },
        { difficulty: 'Medium', question: 'Musa kyk na ʼn blaar met ʼn duidelike middelnerf wat deur die middel loop, met die blaarrande wat eweredig aan albei kante krul. Langs watter tipe lyn wys hierdie blaar simmetrie?', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal'], explanation: 'Die blaar se simmetrielyn loop langs die middelnerf vanaf die steel na die punt — dit word tipies as ʼn vertikale lyn geteken, met elke kant van die blaar wat die ander spieël.' },
        { difficulty: 'Medium', question: 'ʼn Verkeer-toegeeteken is in die vorm van ʼn driehoek wat afwaarts wys met twee gelyke skuins sye. ʼn Bestuurder beweer dit het geen simmetrielyne nie omdat dit af in plaas van op wys. Verduidelik of die bestuurder korrek is.', answer: 'Die bestuurder is nie korrek nie. Die rigting waarin die driehoek wys, verander nie of dit simmetries is nie — dit is steeds ʼn gelykbenige driehoek met twee gelyke sye, so dit het steeds presies 1 simmetrielyn. Daardie lyn loop eenvoudig vertikaal vanaf die onderste punt reguit op na die middelpunt van die boonste (plat) sy, in plaas van bo-na-onder. Om ʼn simmetriese vorm te draai of om te keer, verwyder nie sy simmetrie nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Eenvoudige papiersneeuvlokkie word so gesny dat dit 6 identiese herhalende afdelings rondom sy middelpunt het, soos ʼn reëlmatige seshoek se patroon. Hoeveel simmetrielyne sou jy verwag hierdie sneeuvlokkie-ontwerp het?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Ontwerp met 6 identiese herhalende afdelings, gerangskik soos ʼn reëlmatige seshoek, het 6 simmetrielyne, wat ooreenstem met die seshoek se eie getal.' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Gelykbenige driehoek het 2 simmetrielyne, een deur elk van sy twee gelyke sye." Verduidelik waarom dit verkeerd is en gee die korrekte getal.', answer: 'Dit is verkeerd. ʼn Gelykbenige driehoek het net 1 simmetrielyn, nie 2 nie. Daardie enkele lyn loop vanaf die hoekpunt waar die twee gelyke sye ontmoet, reguit af na die middelpunt van die derde (ongelyke) sy. Die twee gelyke sye self is nie simmetrielyne nie — hulle is bloot sye van die driehoek, en om langs ʼn sy te vou verdeel die driehoek glad nie in twee bypassende helftes nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Palesa sê: "ʼn Reghoek en ʼn ruit (diamant) het albei presies 2 simmetrielyne, so hulle simmetrielyne moet dieselfde tipe wees." Is Palesa korrek? Verduidelik.', answer: 'Palesa is net gedeeltelik korrek. Dit is waar dat sowel ʼn reghoek as ʼn ruit elk presies 2 simmetrielyne het, maar die tipes lyne verskil. ʼn Reghoek se 2 simmetrielyne is vertikaal en horisontaal (deur die middelpunte van sy sye), terwyl ʼn ruit se 2 simmetrielyne sy twee diagonale is (hoek tot hoek). Om dieselfde getal simmetrielyne te hê, beteken nie die lyne is dieselfde tipe nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gegee ʼn woord in hoofletters, "TAM", beweer ʼn leerder die hele woord het ʼn simmetrielyn "omdat elke individuele letter (T, A, M) sy eie simmetrielyn het." Verduidelik waarom hierdie redenasie foutief is, al is elke letter individueel simmetries.', answer: 'Die redenasie is foutief omdat elke letter wat sy eie simmetrielyn het, nie beteken die hele woord het een nie. Vir die hele woord "TAM" om ʼn simmetrielyn te hê, sou om die hele woord langs een enkele lyn te vou nodig wees dat die linkerkant van die woord presies op die regterkant land — maar die letters T, A, en M is verskillende vorms wat langs mekaar in ʼn ry sit, nie gespieël rondom ʼn gedeelde middelpunt nie. So alhoewel T, A, en M elk individueel simmetries is, het die woord "TAM" as geheel 0 simmetrielyne.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn sirkel en ʼn reëlmatige seshoek. Watter een het meer simmetrielyne, en hoe sou jy die verskil beskryf?', checkMode: 'auto', correctAnswer: 'sirkelmeer', correctAnswers: ['sirkelmeer', 'sirkel het meer', 'die sirkel, oneindig', 'sirkel, oneindig baie meer'], explanation: 'ʼn Sirkel het oneindig baie simmetrielyne, terwyl ʼn reëlmatige seshoek net 6 het. Die sirkel het dus meer — trouens, aangesien die sirkel se simmetrielyne nooit opraak nie, het dit oneindig baie meer as die seshoek se vaste 6.' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde logo word gemaak van ʼn reëlmatige seshoek met ʼn gelyksydige driehoek presies gesentreer bo-op een van sy sye vasgeheg (na buite wysend, soos ʼn punt wat by een rand bygevoeg is). Verduidelik hoeveel simmetrielyne hierdie saamgestelde vorm het en waarom die meeste van die seshoek se oorspronklike 6 lyne verlore gaan.', answer: 'Die saamgestelde logo het net 1 simmetrielyn — die enkele vertikale lyn wat deur die punt van die vasgehegte driehoek, deur die middelpunt van die seshoek, en deur die middelpunt van die seshoek se teenoorgestelde sy loop. Die meeste van die seshoek se oorspronklike 6 simmetrielyne gaan verlore omdat die driehoek net aan een sy vasgeheg is, wat die eweredige, gebalanseerde patroon breek wat die seshoek nodig gehad het vir sy ander 5 lyne om te werk — byvoorbeeld, ʼn lyn deur ʼn paar seshoek-hoeke wat nie met die driehoek belyn is nie, sou nou die driehoek se uitsteeksel aan een kant van die vou hê, maar niks wat daarmee ooreenstem aan die ander kant nie. Net die een lyn wat toevallig deur beide die driehoek se punt en die teenoorgestelde sy se middelpunt loop, gee steeds twee bypassende helftes.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan alles wat jy oor simmetrie weet met selfvertroue toepas op vorms, letters, en werklike-lewe ontwerpe.' },
        { minScore: 15, message: 'Uitstekende werk! Kyk na enige vraag wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor simmetrie en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit maak!' },
      ],
    },
  ],

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
