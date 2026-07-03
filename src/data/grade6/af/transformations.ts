import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Section 1 — Reflection) ─────────────────────────────────
// mirror line  → red     (#dc2626)
// object       → blue    (#2563eb)
// image        → green   (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

// ─── Colour helpers (Section 2 — Translation) ────────────────────────────────
// horizontal movement → blue    (#2563eb)   (reuses bl)
// vertical movement   → green   (#16a34a)   (reuses gr)
// original            → orange  (#ea580c)
// image               → purple  (#7c3aed)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

// ─── Colour helpers (Section 3 — Rotation) ───────────────────────────────────
// clockwise            → blue    (#2563eb)   (reuses bl)
// anticlockwise        → red     (#dc2626)   (reuses re)
// centre of rotation   → orange  (#ea580c)   (reuses or)
// degrees              → green   (#16a34a)   (reuses gr)

export const topicData: TopicData = {
  title: 'Transformasies',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Refleksie',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Refleksie</strong> flip ʼn vorm oor ʼn <strong>spieëllyn</strong>. Die beeld is dieselfde grootte as die objek, maar kyk in die teenoorgestelde rigting. Elke punt op die beeld is dieselfde afstand vanaf die spieëllyn as die ooreenstemmende punt op die objek. Spieëllyne kan vertikaal, horisontaal of diagonaal wees.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('spieëllyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beeld')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe van refleksies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Spieëllyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die simmetrielyn waaroor die vorm geflip word. Elke punt op die ${re('beeld')} is dieselfde afstand vanaf die ${re('spieëllyn')} as die ooreenstemmende punt op die ${bl('objek')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Objek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die oorspronklike vorm voordat die transformasie toegepas word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Beeld</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die nuwe vorm ná die transformasie. Dieselfde grootte as die objek, maar in die geflipte posisie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gelyke afstande vanaf die spieëllyn</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die ${gr('beeld')} van enige punt te vind, meet die <strong>loodregte afstand</strong> vanaf die punt tot die ${re('spieëllyn')}, en plaas dan die beeld dieselfde afstand aan die ander kant. Die ${re('spieëllyn')} sit presies halfpad tussen die ${bl('objek')} en die ${gr('beeld')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt by (2, 3) word oor ʼn vertikale spieëllyn by x = 5 gereflekteer. Vind die beeldpunt.',
          answer: `${gr('Beeldpunt is (8, 3)')}`,
          steps: [
            `Identifiseer die ${re('spieëllyn')}: x = 5 (ʼn vertikale lyn).`,
            `Vind die afstand vanaf die ${bl('objek')}punt tot die ${re('spieëllyn')}: 5 − 2 = <strong>3 eenhede</strong>.`,
            `Die ${gr('beeld')} is 3 eenhede aan die ander kant van die ${re('spieëllyn')}: 5 + 3 = <strong>8</strong>.`,
            `Die y-koördinaat bly dieselfde in ʼn vertikale refleksie.`,
            `<strong>Antwoord:</strong> ${gr('Beeldpunt is (8, 3)')} ✓`,
          ],
        },
        {
          question: 'Sipho reflekteer ʼn driehoek oor ʼn horisontale spieëllyn. Wat gebeur met die vorm?',
          answer: `${gr('Die vorm flip onderstebo — dieselfde grootte, maar oriëntasie is vertikaal gespieël')}`,
          steps: [
            `ʼn Horisontale ${re('spieëllyn')} loop links-na-regs, so die flip is in die vertikale rigting.`,
            `Die ${gr('beeld')} flip onderstebo — wat bo-aan die ${bl('objek')} was, is nou onder-aan die ${gr('beeld')}.`,
            `<strong>Die grootte bly dieselfde</strong> — ʼn refleksie rek of krimp die vorm nie.`,
            `<strong>Antwoord:</strong> ${gr('Die vorm flip onderstebo. Die grootte bly dieselfde, maar die oriëntasie word vertikaal gespieël.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Koördinaatrooster wat ʼn puntobjek in blou wys wat oor ʼn vertikale spieëllyn in rooi gereflekteer word om ʼn beeldpunt in groen te vorm, met gelyke afstande aan albei kante gemerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm oor vertikale, horisontale en diagonale spieëllyne op ʼn koördinaatrooster te reflekteer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translasie',
      icon: '➡️',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Translasie</strong> skuif ʼn vorm na ʼn nuwe posisie sonder om dit te draai of te flip. Elke punt beweeg dieselfde afstand in dieselfde rigting. Ons beskryf ʼn translasie deur te sê hoe ver <strong>links/regs</strong> en <strong>op/af</strong> dit beweeg.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horisontale beweging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertikale beweging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oorspronklike')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('beeld')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe van translasies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Links / Regs</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${bl('Regs')}</strong> → tel by die x-koördinaat. <strong>${bl('Links')}</strong> → trek af van die x-koördinaat.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Op / Af</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Op')}</strong> → tel by die y-koördinaat. <strong>${gr('Af')}</strong> → trek af van die y-koördinaat.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vorm bly onveranderd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${pu('beeld')} is dieselfde grootte en oriëntasie as die ${or('oorspronklike')} — net die posisie verander.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#5b21b6;margin-bottom:6px;">Elke punt beweeg op dieselfde manier</p>` +
        `<p style="margin:0;color:#4c1d95;">Om ʼn vorm te transleer, pas dieselfde ${bl('links/regs')}- en ${gr('op/af')}-beweging op <em>elke</em> punt toe. Die vorm draai of flip nie — dit gly as een eenheid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vorm se hoekpunt by (2, 3) word 4 regs en 3 op getransleer. Vind die nuwe posisie.',
          answer: `${pu('Nuwe posisie is (6, 6)')}`,
          steps: [
            `Begin met die ${or('oorspronklike')} hoekpunt by (2, 3).`,
            `Pas die ${bl('horisontale beweging')} toe: 2 + 4 = <strong>6</strong> (beweeg regs tel by x).`,
            `Pas die ${gr('vertikale beweging')} toe: 3 + 3 = <strong>6</strong> (beweeg op tel by y).`,
            `<strong>Antwoord:</strong> ${pu('Nuwe posisie is (6, 6)')} ✓`,
          ],
        },
        {
          question: 'Lerato transleer ʼn punt by (7, 5) met 2 links en 4 af. Vind die nuwe posisie.',
          answer: `${pu('Nuwe posisie is (5, 1)')}`,
          steps: [
            `Begin met die ${or('oorspronklike')} punt by (7, 5).`,
            `Pas die ${bl('horisontale beweging')} toe: 7 − 2 = <strong>5</strong> (beweeg links trek af van x).`,
            `Pas die ${gr('vertikale beweging')} toe: 5 − 4 = <strong>1</strong> (beweeg af trek af van y).`,
            `<strong>Antwoord:</strong> ${pu('Nuwe posisie is (5, 1)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Koördinaatrooster wat ʼn oorspronklike vorm in oranje wys wat na ʼn nuwe posisie as ʼn pers beeld gly, met horisontale beweging in blou en vertikale beweging in groen gewys" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm op ʼn koördinaatrooster te transleer deur dit ʼn gegewe aantal eenhede regs of links en op of af te beweeg" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotasie',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Rotasie</strong> draai ʼn vorm om ʼn vaste <strong>middelpunt</strong>. Ons beskryf rotasie deur die <strong>hoek gedraai</strong> en die <strong>rigting</strong> — kloksgewys of anti-kloksgewys. ʼn Kwartdraai is ${gr('90°')}, ʼn halwe draai is ${gr('180°')}, en ʼn volle draai is ${gr('360°')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kloksgewys')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('anti-kloksgewys')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt van rotasie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('grade')}</span>` +
        `</div>` +

        // ── Quarter-turn compass reference ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kompasrigting-verwysing (${bl('kloksgewyse')} draaie)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Kloksgewys')} vanaf Noord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Noord → Oos → Suid → Wes → Noord<br>Elke stap = ${gr('90°')} ${bl('kloksgewys')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Anti-kloksgewys')} vanaf Noord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Noord → Wes → Suid → Oos → Noord<br>Elke stap = ${gr('90°')} ${re('anti-kloksgewys')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Halwe draai — ${gr('180°')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${gr('180°')} draai land in die <strong>teenoorgestelde rigting</strong>, ongeag of dit ${bl('kloksgewys')} of ${re('anti-kloksgewys')} is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Die middelpunt van rotasie bly vas</p>` +
        `<p style="margin:0;color:#78350f;">Elke punt in die vorm draai om dieselfde ${or('middelpunt van rotasie')} deur presies dieselfde hoek. Die afstand vanaf elke punt tot die ${or('middelpunt')} verander nie — net die rigting verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Pyl wys Oos. Draai dit 90° kloksgewys. In watter rigting wys dit nou?',
          answer: `${bl('Die pyl wys Suid')}`,
          steps: [
            `Begin: die pyl wys <strong>Oos</strong>.`,
            `ʼn ${gr('90°')} ${bl('kloksgewyse')} draai beweeg een stap ${bl('kloksgewys')} om die kompas: Oos → Suid.`,
            `<strong>Antwoord:</strong> ${bl('Die pyl wys Suid')} ✓`,
          ],
        },
        {
          question: 'Amahle draai ʼn vorm 180°. Wat gebeur met die beeld?',
          answer: `${gr('Die vorm draai onderstebo — die resultaat is dieselfde of dit kloksgewys of anti-kloksgewys gedraai word')}`,
          steps: [
            `ʼn ${gr('180°')} rotasie is ʼn <strong>halwe draai</strong>.`,
            `Die vorm draai onderstebo — elke punt eindig in die posisie reg teenoor die ${or('middelpunt van rotasie')}.`,
            `ʼn ${gr('180°')} draai ${bl('kloksgewys')} en ʼn ${gr('180°')} draai ${re('anti-kloksgewys')} gee presies dieselfde <strong>resultaat</strong>, want albei is halwe draaie.`,
            `<strong>Antwoord:</strong> ${gr('Die vorm draai onderstebo ongeag of dit kloksgewys of anti-kloksgewys gedraai word, aangesien albei dieselfde resultaat by 180° gee.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn pyl wys wat 90 grade kloksgewys om ʼn middelpunt van rotasie in oranje gedraai word, met kloksgewyse rigting in blou en die hoek in groen gemerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm 90 en 180 grade kloksgewys en anti-kloksgewys om ʼn vaste middelpunt van rotasie te draai" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter tipe transformasie flip ʼn vorm oor ʼn spieëllyn?',
      answer: 'refleksie',
      checkMode: 'auto',
      correctAnswer: 'refleksie',
      explanation: 'ʼn Refleksie flip ʼn vorm oor ʼn spieëllyn. Die beeld is dieselfde grootte en vorm, maar kyk in die teenoorgestelde rigting.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter tipe transformasie skuif ʼn vorm sonder om dit te draai?',
      answer: 'translasie',
      checkMode: 'auto',
      correctAnswer: 'translasie',
      explanation: 'ʼn Translasie skuif ʼn vorm na ʼn nuwe posisie sonder om dit te draai of te flip. Elke punt beweeg dieselfde afstand in dieselfde rigting.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (3, 4) word oor ʼn vertikale spieëllyn by x = 6 gereflekteer. Vind die beeldpunt.',
      answer: '(9, 4)',
      checkMode: 'auto',
      correctAnswer: '(9, 4)',
      correctAnswers: ['(9, 4)', '(9,4)', '9, 4', '9,4'],
      explanation: 'Afstand vanaf x = 3 tot spieëllyn x = 6: 6 − 3 = 3 eenhede.\nBeeld is 3 eenhede aan die ander kant: 6 + 3 = 9.\nDie y-koördinaat bly dieselfde in ʼn vertikale refleksie.\nAntwoord: (9, 4) ✓',
    },

    // ── Q4 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (5, 2) word 3 regs en 2 op getransleer. Vind die nuwe posisie.',
      answer: '(8, 4)',
      checkMode: 'auto',
      correctAnswer: '(8, 4)',
      correctAnswers: ['(8, 4)', '(8,4)', '8, 4', '8,4'],
      explanation: 'Horisontale beweging (regs): 5 + 3 = 8.\nVertikale beweging (op): 2 + 2 = 4.\nAntwoord: (8, 4) ✓',
    },

    // ── Q5 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê dat die reflekteer van ʼn vorm sy grootte verander. Is hy korrek? Verduidelik.',
      answer: 'Nee — refleksie behou dieselfde grootte, net die oriëntasie verander na ʼn spieëlbeeld.',
      checkMode: 'self',
    },

    // ── Q6 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel grade is ʼn halwe draai?',
      answer: '180',
      checkMode: 'auto',
      correctAnswer: '180',
      correctAnswers: ['180', '180°', '180 grade'],
      explanation: 'ʼn Halwe draai is 180°. Dit is presies die helfte van ʼn volle draai (360°).',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Pyl wys Noord. Draai dit 90 grade anti-kloksgewys. In watter rigting wys dit?',
      answer: 'Wes',
      checkMode: 'auto',
      correctAnswer: 'Wes',
      correctAnswers: ['Wes', 'wes'],
      explanation: 'Anti-kloksgewys vanaf Noord: Noord → Wes → Suid → Oos.\nEen stap anti-kloksgewys (90°) vanaf Noord land op Wes.\nAntwoord: Wes ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Vorm word 270 grade kloksgewys gedraai. Lerato sê dit is dieselfde as om 90 grade anti-kloksgewys te draai. Is sy korrek? Verduidelik.',
      answer: 'Ja — 270 kloksgewys en 90 anti-kloksgewys eindig albei by dieselfde posisie aangesien 360 − 270 = 90.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo transleer ʼn punt by (4, 6) met 5 links en 3 af, en transleer dit dan weer met 2 regs en 1 op. Vind die finale posisie.',
      answer: '(1, 4)',
      checkMode: 'auto',
      correctAnswer: '(1, 4)',
      correctAnswers: ['(1, 4)', '(1,4)', '1, 4', '1,4'],
      explanation: 'Eerste translasie — 5 links en 3 af:\n(4 − 5, 6 − 3) = (−1, 3)\nTweede translasie — 2 regs en 1 op:\n(−1 + 2, 3 + 1) = (1, 4)\nAntwoord: (1, 4) ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het transformasies bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
