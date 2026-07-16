import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// [IMAGE: A 6x6 grid showing shape A — a small rectangle with corners at (1,1), (2,1), (2,2), (1,2). Shape B is the same rectangle translated to (4,3), (5,3), (5,4), (4,4). Shape C is shape A reflected over a vertical mirror line at x=4 giving corners at (6,1), (7,1), (7,2), (6,2).]

// ─── Colour helpers (transformation roles) ────────────────────────────────────
// object      → red     (#dc2626)
// translation → blue    (#2563eb)
// reflection  → green   (#16a34a)
// rotation    → orange  (#ea580c)
// image       → purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformasies',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE TRANSFORMATIONS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-transformations',
      title: 'Wat is Transformasies?',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Transformasie</strong> is wanneer ons ʼn vorm op ʼn spesifieke manier beweeg of verander. Die oorspronklike vorm word die ${re('objek')} genoem en die nuwe vorm ná die transformasie word die ${pu('beeld')} genoem. Die ${pu('beeld')} is dieselfde grootte en vorm as die ${re('objek')}, tensy ons dit groter of kleiner maak. Daar is drie hooftipes transformasies — ${bl('translasie')} (gly), ${gr('refleksie')} (flip) en ${or('rotasie')} (draai).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('objek')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('translasie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('refleksie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rotasie')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('beeld')}</span>` +
        `</div>` +

        // ── Three types ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie tipes transformasies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Translasie (gly)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vorm gly na ʼn nuwe posisie sonder om te draai of te flip. Die ${re('objek')} en ${pu('beeld')} lyk presies dieselfde — net die posisie verander.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Refleksie (flip)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vorm word oor ʼn <strong>spieëllyn</strong> geflip. Die ${pu('beeld')} is ʼn spieëlbeeld van die ${re('objek')} — dieselfde grootte, maar dit kyk in die teenoorgestelde rigting.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rotasie (draai)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vorm draai om ʼn vaste punt wat die <strong>middelpunt van rotasie</strong> genoem word. Die ${pu('beeld')} is dieselfde grootte en vorm, maar kyk in ʼn ander rigting.</p>` +
        `</div>` +

        `</div>` +

        // ── Object and image tip ─────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Objek en beeld</p>` +
        `<p style="margin:0;color:#991b1b;">Identifiseer altyd die ${re('objek')} (oorspronklike vorm) en die ${pu('beeld')} (nuwe vorm) voordat jy besluit watter transformasie toegepas is. In elke transformasie is die ${pu('beeld')} kongruent aan die ${re('objek')} — dit het dieselfde grootte en vorm, tensy ʼn grootteverandering (vergroting of verkleining) toegepas word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho skuif ʼn driehoek 3 blokke na regs. Watter tipe transformasie is dit?',
          answer: `Dit is ʼn ${bl('translasie')} van 3 blokke na regs`,
          steps: [
            `Om ʼn vorm te skuif sonder om te draai of te flip, word ʼn ${bl('translasie')} genoem. Die ${re('objek')} beweeg na ʼn nuwe posisie, maar bly presies dieselfde grootte en vorm.`,
            `Die driehoek het <strong>3 blokke na regs</strong> beweeg — dit is nie geflip of gedraai nie. Die ${pu('beeld')} lyk identies aan die ${re('objek')}.`,
            `<strong>Antwoord:</strong> Dit is ʼn ${bl('translasie')} van 3 blokke na regs.`,
          ],
        },
        {
          question: 'Amahle flip ʼn vorm oor ʼn spieëllyn. Watter tipe transformasie is dit?',
          answer: `Dit is ʼn ${gr('refleksie')}`,
          steps: [
            `Om ʼn vorm oor ʼn spieëllyn te flip, word ʼn ${gr('refleksie')} genoem. Die spieëllyn is die lyn van ${gr('refleksie')}.`,
            `Die ${pu('beeld')} is ʼn spieëlbeeld van die ${re('oorspronklike')}. Die vorm bly dieselfde grootte, maar kyk in die teenoorgestelde rigting.`,
            `<strong>Antwoord:</strong> Dit is ʼn ${gr('refleksie')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — type of transformation that slides ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter tipe transformasie beweeg ʼn vorm sonder om dit te draai of te flip?',
          answer: 'translasie',
          checkMode: 'auto',
          correctAnswer: 'translasie',
        },

        // ── Q2 Easy — name for the original shape ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat noem ons die oorspronklike vorm voor ʼn transformasie?',
          answer: 'objek',
          checkMode: 'auto',
          correctAnswer: 'objek',
        },
      ],

      diagramPlaceholder:
        'Drie diagramme langs mekaar wat dieselfde driehoek wys wat ʼn translasie (gly na regs), ʼn refleksie (flip oor ʼn vertikale spieëllyn) en ʼn rotasie (90 grade draai) ondergaan, met die objek in rooi en die beeld in pers',
      diagramSvg:
        '<svg viewBox="0 0 400 145" xmlns="http://www.w3.org/2000/svg"><polygon points="20,90 50,90 35,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="75,90 105,90 90,55" fill="none" stroke="#7c3aed" stroke-width="2.5"/><path d="M 52 72 L 73 72 M 68 68 L 73 72 L 68 76" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="65" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Translasie</text><line x1="195" y1="40" x2="195" y2="100" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="150,90 180,90 165,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="240,90 210,90 225,55" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="195" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Refleksie</text><polygon points="290,90 320,90 305,55" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="305,75 305,105 340,90" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="305" cy="90" r="3" fill="#ea580c"/><text x="310" y="118" font-weight="700" font-size="12" text-anchor="middle" fill="#0f1f3d">Rotasie</text><rect x="140" y="128" width="10" height="10" fill="#dc2626"/><text x="155" y="137" font-size="11" fill="#0f1f3d">Objek</text><rect x="210" y="128" width="10" height="10" fill="#7c3aed"/><text x="225" y="137" font-size="11" fill="#0f1f3d">Beeld</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die drie tipes transformasies bekendstel — translasie, refleksie en rotasie — met eenvoudige vormvoorbeelde wat die objek in rooi en die beeld in pers wys" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translasie',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Translasie</strong> is wanneer ons ʼn vorm van een posisie na ʼn ander skuif sonder om dit te draai of te flip. Elke punt op die vorm beweeg dieselfde afstand in dieselfde rigting. Ons beskryf ʼn translasie deur te sê hoe ver die vorm links of regs beweeg en hoe ver dit op of af beweeg. Die vorm en sy ${pu('beeld')} is identies — dieselfde grootte, dieselfde vorm, dieselfde oriëntasie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horisontale beweging')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertikale beweging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('beginposisie')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('eindposisie')}</span>` +
        `</div>` +

        // ── How to describe a translation ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn translasie te beskryf</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horisontale beweging (links of regs)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Beweeg na <strong>regs</strong> beteken ons <strong>tel by</strong> die horisontale koördinaat. Beweeg na <strong>links</strong> beteken ons <strong>trek af</strong> van die horisontale koördinaat.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertikale beweging (op of af)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Beweeg <strong>op</strong> beteken ons <strong>tel by</strong> die vertikale koördinaat. Beweeg <strong>af</strong> beteken ons <strong>trek af</strong> van die vertikale koördinaat.</p>` +
        `</div>` +

        `</div>` +

        // ── Key rule tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelreël</p>` +
        `<p style="margin:0;color:#1e3a8a;">In ʼn translasie beweeg elke punt van die vorm met <strong>presies dieselfde hoeveelheid</strong> in dieselfde rigting. Die ${pu('beeld')} is altyd kongruent aan die ${re('objek')} — dit het dieselfde grootte, vorm en oriëntasie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Vierkant het sy onderste-linker hoekpunt by (1, 1). Dit word 4 stappe regs en 2 stappe op getransleer. Waar is die onderste-linker hoekpunt van die beeld?',
          answer: `Die onderste-linker hoekpunt van die beeld is by ${pu('(5, 3)')}`,
          steps: [
            `Begin by ${or('(1, 1)')} — dit is die beginposisie van die onderste-linker hoekpunt.`,
            `${bl('Horisontale beweging:')} Beweeg 4 stappe regs — tel 4 by die horisontale koördinaat: ${bl('1 + 4 = 5')}.`,
            `${gr('Vertikale beweging:')} Beweeg 2 stappe op — tel 2 by die vertikale koördinaat: ${gr('1 + 2 = 3')}.`,
            `<strong>Antwoord:</strong> Die onderste-linker hoekpunt van die beeld is by ${pu('(5, 3)')}. ✓`,
          ],
        },
        {
          question: 'Lerato transleer ʼn driehoek 3 stappe links en 1 stap af. Die boonste hoekpunt van die driehoek is by (5, 4). Waar eindig die boonste hoekpunt?',
          answer: `Die boonste hoekpunt van die beeld is by ${pu('(2, 3)')}`,
          steps: [
            `Begin by ${or('(5, 4)')} — dit is die beginposisie van die boonste hoekpunt.`,
            `${bl('Horisontale beweging:')} Beweeg 3 stappe links — trek 3 af van die horisontale koördinaat: ${bl('5 − 3 = 2')}.`,
            `${gr('Vertikale beweging:')} Beweeg 1 stap af — trek 1 af van die vertikale koördinaat: ${gr('4 − 1 = 3')}.`,
            `<strong>Antwoord:</strong> Die boonste hoekpunt van die beeld is by ${pu('(2, 3)')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Medium — translate a single corner ────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vorm A het sy hoekpunt by (1,1). Dit word 3 stappe regs en 2 stappe op getransleer. Waar eindig daardie hoekpunt?',
          answer: '(4,3)',
          checkMode: 'auto',
          correctAnswer: '(4,3)',
          explanation: 'Horisontaal: 1 + 3 = 4. Vertikaal: 1 + 2 = 3. Die hoekpunt beweeg na (4,3). ✓',
        },

        // ── Q4 Medium — describe translation from grid ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Beskryf, deur die rooster hierbo te gebruik, die translasie van Vorm A na Vorm B.',
          answer: 'Vorm A beweeg 3 stappe regs en 2 stappe op om Vorm B te word.',
          checkMode: 'self',
        },

        // ── Q5 Hard — two translations in a row ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Punt is by (2,4). Dit word 3 regs en 2 af getransleer, en dan weer 1 links en 3 op getransleer. Waar eindig dit?',
          answer: '(4,5)',
          checkMode: 'auto',
          correctAnswer: '(4,5)',
          explanation: 'Eerste translasie: (2+3, 4−2) = (5, 2). Tweede translasie: (5−1, 2+3) = (4, 5). ✓',
        },
      ],

      diagramPlaceholder:
        'Rooster wat ʼn vierkant wys wat 4 stappe regs en 2 stappe op getransleer word, met die beginposisie in oranje gemerk, horisontale beweging in blou, vertikale beweging in groen, en die eindposisie in pers',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="20" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="40" y1="50" x2="40" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="50" x2="60" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="80" y1="50" x2="80" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="50" x2="100" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="50" x2="120" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="50" x2="140" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="160" y1="50" x2="160" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="50" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="50" x2="180" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="90" x2="180" y2="90" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="130" x2="180" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="150" x2="180" y2="150" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="170" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><rect x="40" y="130" width="20" height="20" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="120" y="90" width="20" height="20" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5"/><line x1="60" y1="140" x2="134" y2="140" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><path d="M 128 136 L 136 140 L 128 144" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="140" x2="140" y2="106" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3"/><path d="M 136 112 L 140 104 L 144 112" fill="none" stroke="#16a34a" stroke-width="2"/><text x="50" y="122" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">Begin</text><text x="95" y="132" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">+4 regs</text><text x="156" y="126" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">+2 op</text><text x="130" y="82" font-weight="700" font-size="11" text-anchor="middle" fill="#7c3aed">Einde</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm stap vir stap op ʼn rooster te transleer, met horisontale beweging in blou en vertikale beweging in groen, beginposisie in oranje en eindposisie in pers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Refleksie',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Refleksie</strong> is wanneer ons ʼn vorm oor ʼn <strong>${re('spieëllyn')}</strong> flip. Die ${re('spieëllyn')} kan ${re('vertikaal')} (op en af) of ${re('horisontaal')} (links en regs) wees. Elke punt op die ${gr('beeld')} is dieselfde afstand vanaf die ${re('spieëllyn')} as die ooreenstemmende punt op die ${bl('objek')}, maar aan die teenoorgestelde kant. Die ${gr('beeld')} is ʼn spieëlbeeld van die oorspronklike — soos wanneer jy in ʼn spieël kyk. Die grootte van die vorm verander nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('spieëllyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beeld')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('afstand vanaf spieëllyn')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor refleksie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Spieëllyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('spieëllyn')} is die lyn waaroor ons die vorm flip. Dit kan vertikaal (op en af) of horisontaal (links en regs) wees.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Objek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('objek')} is die oorspronklike vorm voor die refleksie. Elke punt op die ${bl('objek')} het ʼn ooreenstemmende punt op die ${gr('beeld')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Beeld</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('beeld')} is die nuwe vorm ná die refleksie. Dit is dieselfde grootte as die ${bl('objek')} — net die posisie en oriëntasie verander.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Afstand vanaf spieëllyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke punt op die ${bl('objek')} is dieselfde ${or('afstand')} vanaf die ${re('spieëllyn')} as sy ooreenstemmende punt op die ${gr('beeld')}, maar aan die teenoorgestelde kant.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: die grootte verander nooit</p>` +
        `<p style="margin:0;color:#1e3a8a;">Ná ʼn refleksie is die ${gr('beeld')} altyd dieselfde grootte as die ${bl('objek')}. Net die posisie verander — die ${gr('beeld')} is ʼn spieëlbeeld, soos jou refleksie in ʼn spieël. Die ${re('spieëllyn')} is presies halfpad tussen ooreenstemmende punte op die ${bl('objek')} en die ${gr('beeld')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt is by (2, 3). Dit word oor ʼn vertikale spieëllyn by x = 4 gereflekteer. Waar is die beeldpunt?',
          answer: `Die ${gr('beeld')}punt is by ${gr('(6, 3)')}`,
          steps: [
            `Identifiseer die ${bl('objek')}punt: ${bl('(2, 3)')}. Die ${re('spieëllyn')} is ʼn vertikale lyn by x = ${re('4')}.`,
            `Vind die ${or('afstand')} vanaf die ${bl('objek')}punt tot die ${re('spieëllyn')}: ${re('4')} − ${bl('2')} = ${or('2')} eenhede. Die ${bl('objek')} is ${or('2')} eenhede links van die ${re('spieëllyn')}.`,
            `Die ${gr('beeld')} moet dieselfde ${or('afstand')} (${or('2')} eenhede) aan die teenoorgestelde kant wees — regs van die ${re('spieëllyn')}: ${re('4')} + ${or('2')} = ${gr('6')}.`,
            `Die vertikale posisie verander nie — die y-koördinaat bly dieselfde: ${gr('3')}.`,
            `<strong>Antwoord:</strong> Die ${gr('beeld')}punt is by ${gr('(6, 3)')} — dieselfde vertikale posisie, gespieëlde horisontale posisie. ✓`,
          ],
        },
        {
          question: 'Thabo teken ʼn vlagvorm en reflekteer dit oor ʼn horisontale spieëllyn. Wat gebeur met die vorm?',
          answer: `Die ${gr('beeld')} is dieselfde grootte as die ${bl('objek')}, maar is onderstebo geflip`,
          steps: [
            `ʼn ${re('horisontale spieëllyn')} loop links en regs (sy tot sy). Om daaroor te reflekteer, flip die vorm <strong>op of af</strong>.`,
            `Elke punt op die ${bl('objek')} beweeg na die teenoorgestelde kant van die ${re('spieëllyn')} — dieselfde ${or('afstand')} weg, maar in die teenoorgestelde vertikale rigting.`,
            `Die bokant van die ${bl('objek')} word die onderkant van die ${gr('beeld')}. Die onderkant van die ${bl('objek')} word die bokant van die ${gr('beeld')}.`,
            `Die vorm bly dieselfde grootte — die ${gr('beeld')} is kongruent aan die ${bl('objek')}. Dit is nou onderstebo in vergelyking met die oorspronklike.`,
            `<strong>Antwoord:</strong> Die ${gr('beeld')} is ʼn spieëlbeeld van die ${bl('objek')} — dieselfde grootte, maar onderstebo geflip oor die ${re('horisontale spieëllyn')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy — type of transformation that flips ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter tipe transformasie flip ʼn vorm oor ʼn spieëllyn?',
          answer: 'refleksie',
          checkMode: 'auto',
          correctAnswer: 'refleksie',
        },

        // ── Q7 Medium — reflect over vertical mirror line ─────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Punt is by (1,3) en word oor ʼn vertikale spieëllyn by x=4 gereflekteer. Waar is die beeldpunt?',
          answer: '(7,3)',
          checkMode: 'auto',
          correctAnswer: '(7,3)',
          explanation: 'Afstand vanaf objek tot spieëllyn: 4 − 1 = 3 eenhede na links. Beeld is 3 eenhede regs van x=4: 4 + 3 = 7. Die y-koördinaat bly dieselfde. Beeldpunt: (7,3). ✓',
        },

        // ── Q8 Hard — reflection does not change size ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato reflekteer ʼn driehoek oor ʼn vertikale spieëllyn. Sy sê die beeld is ʼn ander grootte as die objek. Is sy korrek? Verduidelik.',
          answer: 'Nee — ʼn refleksie verander nooit die grootte van die vorm nie. Die beeld is altyd dieselfde grootte as die objek, dit kyk net in die teenoorgestelde rigting.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Rooster wat ʼn punt by (2,3) wys wat oor ʼn vertikale spieëllyn by x=4 gereflekteer word om ʼn beeld by (6,3) te gee, met die spieëllyn in rooi, objek in blou, beeld in groen, en afstand vanaf die spieëllyn in oranje gemerk',
      diagramSvg:
        '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="20" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="40" y1="50" x2="40" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="50" x2="60" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="80" y1="50" x2="80" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="50" x2="100" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="50" x2="120" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="50" x2="140" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="160" y1="50" x2="160" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="50" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="50" x2="180" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="90" x2="180" y2="90" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="130" x2="180" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="150" x2="180" y2="150" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="170" x2="180" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="45" x2="100" y2="175" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4"/><line x1="60" y1="110" x2="140" y2="110" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="60" y1="105" x2="60" y2="115" stroke="#ea580c" stroke-width="1.5"/><line x1="100" y1="105" x2="100" y2="115" stroke="#ea580c" stroke-width="1.5"/><line x1="140" y1="105" x2="140" y2="115" stroke="#ea580c" stroke-width="1.5"/><text x="80" y="102" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">2</text><text x="120" y="102" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">2</text><circle cx="60" cy="110" r="5" fill="#2563eb"/><circle cx="140" cy="110" r="5" fill="#16a34a"/><text x="60" y="128" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">Objek (2,3)</text><text x="140" y="128" font-weight="700" font-size="11" text-anchor="middle" fill="#16a34a">Beeld (6,3)</text><text x="100" y="40" font-weight="700" font-size="11" text-anchor="middle" fill="#dc2626">Spieëllyn x=4</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm oor ʼn vertikale en ʼn horisontale spieëllyn te reflekteer, met die spieëllyn in rooi, objek in blou, beeld in groen, en afstand vanaf die spieëllyn in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotasie',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Rotasie</strong> is wanneer ons ʼn vorm om ʼn vaste punt draai wat die ${or('middelpunt van rotasie')} genoem word. Ons beskryf ʼn rotasie deur te sê hoe ver dit draai en in watter rigting — ${bl('kloksgewys')} (dieselfde rigting as die horlosiewysers beweeg) of ${re('anti-kloksgewys')} (die teenoorgestelde rigting). Ons meet rotasie in ${gr('grade')}. ʼn Kwartdraai is ${gr('90 grade')}. ʼn Halwe draai is ${gr('180 grade')}. ʼn Volle draai is ${gr('360 grade')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kloksgewys')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('anti-kloksgewys')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt van rotasie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('grade')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor rotasie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kloksgewys</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${bl('Kloksgewyse')} rotasie draai die vorm in dieselfde rigting as die horlosiewysers beweeg — na regs as jy van bo af kyk.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Anti-kloksgewys</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${re('Anti-kloksgewyse')} rotasie draai die vorm in die teenoorgestelde rigting van die horlosiewysers — na links as jy van bo af kyk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt van rotasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('middelpunt van rotasie')} is die vaste punt waarom die vorm draai. Elke punt op die vorm bly dieselfde afstand vanaf hierdie vaste punt.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Grade</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ons meet die hoeveelheid draai in ${gr('grade')}. ʼn Kwartdraai = ${gr('90°')}, ʼn halwe draai = ${gr('180°')}, ʼn driekwartdraai = ${gr('270°')}, ʼn volle draai = ${gr('360°')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Spesiale geval: 180 grade</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${gr('180-grade')} rotasie gee dieselfde resultaat, of jy nou ${bl('kloksgewys')} of ${re('anti-kloksgewys')} draai — die beeld eindig altyd in dieselfde posisie. Dit maak nie saak watter rigting jy kies nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho draai ʼn pyl wat Noord toe wys ʼn kwartdraai kloksgewys. In watter rigting wys dit nou?',
          answer: `Die pyl wys nou ${bl('Oos')}`,
          steps: [
            `Die pyl begin deur Noord toe te wys.`,
            `ʼn Kwartdraai ${bl('kloksgewys')} beweeg dit na regs.`,
            `Noord wat ʼn kwartdraai ${bl('kloksgewys')} draai, wys Oos.`,
            `<strong>Antwoord:</strong> Die pyl wys nou ${bl('Oos')}. ✓`,
          ],
        },
        {
          question: 'Amahle draai ʼn vorm 180 grade. Wat merk jy op oor die beeld in vergelyking met die objek?',
          answer: `ʼn ${gr('180-grade')} rotasie lyk asof die objek terselfdertyd horisontaal en vertikaal geflip is`,
          steps: [
            `ʼn ${gr('180-grade')} rotasie is ʼn halwe draai.`,
            `Die vorm draai onderstebo.`,
            `Dit maak nie saak of jy ${bl('kloksgewys')} of ${re('anti-kloksgewys')} draai nie — ${gr('180 grade')} gee dieselfde resultaat.`,
            `<strong>Antwoord:</strong> Die beeld lyk asof die objek terselfdertyd horisontaal en vertikaal geflip is. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy — degrees in a quarter turn ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Hoeveel grade is ʼn kwartdraai?',
          answer: '90',
          checkMode: 'auto',
          correctAnswer: '90',
        },

        // ── Q10 Medium — rotate arrow anticlockwise ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho draai ʼn pyl wat Oos toe wys ʼn kwartdraai anti-kloksgewys. In watter rigting wys dit nou?',
          answer: 'Noord',
          checkMode: 'auto',
          correctAnswer: 'Noord',
          explanation: 'Oos wat ʼn kwartdraai anti-kloksgewys draai, wys Noord. ✓',
        },

        // ── Q11 Hard — rotate arrow 180 degrees ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Pyl wys Suid. Thabo draai dit 180 grade kloksgewys. In watter rigting wys dit nou?',
          answer: 'Noord',
          checkMode: 'auto',
          correctAnswer: 'Noord',
          explanation: 'ʼn 180-grade rotasie keer die rigting om. Suid wat 180 grade draai, wys Noord. ✓',
        },

        // ── Q12 Hard — translation vs rotation compared ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn translasie en ʼn rotasie is dieselfde omdat die vorm nie van grootte verander nie. Is sy korrek? Verduidelik.',
          answer: 'Nie heeltemal nie — albei behou dieselfde grootte, maar hulle is verskillende transformasies. ʼn Translasie skuif die vorm sonder om dit te draai. ʼn Rotasie draai die vorm om ʼn vaste punt. Die oriëntasie van die vorm verander in ʼn rotasie, maar nie in ʼn translasie nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Diagram wat ʼn pyl wys wat Noord toe wys en 90 grade kloksgewys gedraai word om Oos toe te wys, en ʼn vorm wat 180 grade gedraai word, met die middelpunt van rotasie in oranje gemerk, kloksgewyse rigting in blou, anti-kloksgewys in rooi, en grade in groen',
      diagramSvg:
        '<svg viewBox="0 0 300 145" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="90" r="4" fill="#ea580c"/><line x1="70" y1="90" x2="70" y2="52" stroke="#dc2626" stroke-width="3"/><path d="M 64 60 L 70 48 L 76 60" fill="none" stroke="#dc2626" stroke-width="3"/><line x1="70" y1="90" x2="108" y2="90" stroke="#7c3aed" stroke-width="3"/><path d="M 100 84 L 112 90 L 100 96" fill="none" stroke="#7c3aed" stroke-width="3"/><path d="M 70 60 A 30 30 0 0 1 100 90" fill="none" stroke="#2563eb" stroke-width="1.8"/><text x="98" y="63" font-weight="700" font-size="11" fill="#16a34a">90°</text><text x="70" y="135" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Pyl — 90° kloksgewys</text><circle cx="220" cy="90" r="4" fill="#ea580c"/><polygon points="220,55 210,75 230,75" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="220,125 230,105 210,105" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="248" y="94" font-weight="700" font-size="11" fill="#16a34a">180°</text><text x="220" y="135" font-weight="700" font-size="11" text-anchor="middle" fill="#0f1f3d">Vorm — 180° draai</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm om ʼn middelpunt van rotasie te draai, met demonstrasies van kwartdraaie kloksgewys en anti-kloksgewys en ʼn halwe draai van 180 grade, met kloksgewys in blou, anti-kloksgewys in rooi, middelpunt van rotasie in oranje, en grade in groen" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Identifiseer die transformasie & terminologie | 4-7 Transleer ʼn punt/vorm |
    // 8-11 Reflekteer oor ʼn spieëllyn | 12-15 Draai om ʼn middelpunt |
    // 16-19 Vergelyk, regverdig en identifiseer die fout
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek gly 5 blokke na links sonder om te draai of te flip. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'translasie', correctAnswers: ['translasie'], explanation: 'Om ʼn vorm te skuif sonder om te draai of te flip, is altyd ʼn translasie.' },
        { difficulty: 'Easy', question: 'ʼn Vlagvorm word oor ʼn lyn geflip sodat dit in die teenoorgestelde rigting kyk, soos ʼn spieëlbeeld. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'refleksie', correctAnswers: ['refleksie'], explanation: 'Om ʼn vorm oor ʼn lyn te flip om ʼn spieëlbeeld te vorm, is ʼn refleksie.' },
        { difficulty: 'Easy', question: 'Wat noem ons die vaste punt waarom ʼn vorm draai tydens ʼn rotasie?', checkMode: 'auto', correctAnswer: 'middelpunt van rotasie', correctAnswers: ['middelpunt van rotasie', 'middelpuntvanrotasie'], explanation: 'Die vaste punt waarom ʼn vorm draai, word die middelpunt van rotasie genoem. Elke punt op die vorm bly dieselfde afstand vanaf hierdie punt.' },
        { difficulty: 'Easy', question: 'In ʼn refleksie, wat noem ons die lyn waaroor ʼn vorm geflip word?', checkMode: 'auto', correctAnswer: 'spieëllyn', correctAnswers: ['spieëllyn', 'spieellyn'], explanation: 'Die lyn waaroor ʼn vorm in ʼn refleksie geflip word, word die spieëllyn (of lyn van refleksie) genoem.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (3,2). Dit word 5 stappe na regs getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(8,2)', correctAnswers: ['(8,2)', '8,2'], explanation: 'Beweeg na regs beteken ons tel by die horisontale koördinaat: 3 + 5 = 8. Die vertikale koördinaat bly dieselfde. Nuwe punt: (8,2). ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (4,1). Dit word 6 stappe op getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(4,7)', correctAnswers: ['(4,7)', '4,7'], explanation: 'Beweeg op beteken ons tel by die vertikale koördinaat: 1 + 6 = 7. Die horisontale koördinaat bly dieselfde. Nuwe punt: (4,7). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt begin by (2,7). Dit word 4 stappe regs en 3 stappe af getransleer. Waar eindig die hoekpunt?', checkMode: 'auto', correctAnswer: '(6,4)', correctAnswers: ['(6,4)', '6,4'], explanation: 'Horisontaal: regs beteken tel by, so 2 + 4 = 6. Vertikaal: af beteken trek af, so 7 − 3 = 4. Nuwe punt: (6,4). ✓' },
        { difficulty: 'Medium', question: 'ʼn Robot op ʼn roosterspeletjie begin op blokkie (1,1). Dit ontvang die opdrag "6 regs, 2 op" van die beheerder. Op watter blokkie land dit?', checkMode: 'auto', correctAnswer: '(7,3)', correctAnswers: ['(7,3)', '7,3'], explanation: 'Regs tel by die horisontale koördinaat: 1 + 6 = 7. Op tel by die vertikale koördinaat: 1 + 2 = 3. Die robot land op (7,3). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (1,2). Dit word oor ʼn vertikale spieëllyn by x = 3 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(5,2)', correctAnswers: ['(5,2)', '5,2'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 3 − 1 = 2 eenhede links van die lyn. Die beeld moet 2 eenhede aan die teenoorgestelde kant wees: 3 + 2 = 5. Die y-koördinaat bly dieselfde. Beeldpunt: (5,2). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (3,2). Dit word oor ʼn horisontale spieëllyn by y = 5 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(3,8)', correctAnswers: ['(3,8)', '3,8'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 5 − 2 = 3 eenhede onder die lyn. Die beeld moet 3 eenhede aan die teenoorgestelde kant wees: 5 + 3 = 8. Die x-koördinaat bly dieselfde. Beeldpunt: (3,8). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt is by (2,4). Die spieëllyn vir hierdie refleksie is ʼn vertikale lyn by x = 6, ver van die hoekpunt af. Waar land die beeld van die hoekpunt?', checkMode: 'auto', correctAnswer: '(10,4)', correctAnswers: ['(10,4)', '10,4'], explanation: 'Afstand vanaf die hoekpunt tot die spieëllyn: 6 − 2 = 4 eenhede links van die lyn. Die beeld is 4 eenhede aan die teenoorgestelde kant: 6 + 4 = 10. Die y-koördinaat bly dieselfde. Beeldpunt: (10,4). ✓' },
        { difficulty: 'Medium', question: 'ʼn Kunstenaar ontwerp ʼn simmetriese embleem. Een punt van die patroon is by (5,2), en die kunstenaar reflekteer dit oor ʼn horisontale spieëllyn by y = 6 om die ooreenstemmende helfte te voltooi. Waar land die gereflekteerde punt?', checkMode: 'auto', correctAnswer: '(5,10)', correctAnswers: ['(5,10)', '5,10'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 6 − 2 = 4 eenhede onder die lyn. Die beeld is 4 eenhede aan die teenoorgestelde kant: 6 + 4 = 10. Die x-koördinaat bly dieselfde. Beeldpunt: (5,10). ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pyl wys Oos. Dit word ʼn kwartdraai kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'ʼn Kwartdraai kloksgewys beweeg die rigting een stap om die kompas kloksgewys: Oos → Suid. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Windwyser wys Wes. Dit draai ʼn kwartdraai anti-kloksgewys. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'ʼn Kwartdraai anti-kloksgewys beweeg die rigting een stap om die kompas teen die horlosierigting: Wes → Suid. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vorm kyk Noord toe. Dit word 180 grade gedraai. In watter rigting kyk dit nou — en sou die antwoord verander as die rotasie anti-kloksgewys was in plaas van kloksgewys?', checkMode: 'auto', correctAnswer: 'Suid, nee', correctAnswers: ['Suid, nee', 'suid nee', 'suidnee', 'suid, dit sou nie verander nie', 'Suid dit sou nie verander nie'], explanation: 'ʼn 180-grade rotasie keer die rigting altyd om: Noord → Suid. ʼn 180-grade draai eindig in dieselfde posisie of jy kloksgewys of anti-kloksgewys draai, so die rigting sou nie verander nie. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wyserpyl begin deur Suid toe te wys en word ʼn driekwartdraai (270 grade) kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'ʼn Driekwartdraai kloksgewys beweeg die rigting drie stappe om die kompas kloksgewys: Suid → Wes → Noord → Oos. ✓' },
        { difficulty: 'Hard', question: 'Kagiso sê: "ʼn Translasie en ʼn rotasie moet dieselfde transformasie wees, want in albei bly die beeld kongruent aan die objek." Is Kagiso korrek? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Nee, Kagiso is nie korrek nie. Dit is waar dat beide ʼn translasie en ʼn rotasie die beeld kongruent aan die objek hou (dieselfde grootte en vorm). Maar hulle is verskillende transformasies: ʼn translasie skuif die vorm in ʼn reguit lyn sonder om te verander watter kant dit kyk, terwyl ʼn rotasie die vorm om ʼn vaste middelpunt draai, wat wel die oriëntasie (die rigting waarin dit kyk) verander. Dat kongruensie behoue bly, maak nie twee transformasies dieselfde nie — jy moet ook kyk na wat met die oriëntasie van die vorm gebeur.' },
        { difficulty: 'Hard', question: 'ʼn Punt begin by (2,3). Dit word eers 3 stappe regs en 1 stap op getransleer, en dan word die punt wat verkry is oor ʼn vertikale spieëllyn by x = 7 gereflekteer. Wat is die finale posisie van die punt? Wys albei stappe.', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '9,4'], explanation: 'Stap 1 — translasie: (2 + 3, 3 + 1) = (5,4). Stap 2 — refleksie oor x = 7: afstand vanaf (5,4) tot die spieëllyn is 7 − 5 = 2, dus is die beeld 2 eenhede aan die ander kant: 7 + 2 = 9. Finale punt: (9,4). ✓' },
        { difficulty: 'Hard', question: 'Thandeka reflekteer ʼn reghoek oor ʼn spieëllyn en sê: "Die beeld is nou ʼn ander vorm, al is dit steeds ʼn reghoek, want dit kyk nou die ander kant toe." Beskryf sy ʼn verandering in grootte, vorm, of oriëntasie? Verduidelik waarom die reghoek steeds kongruent aan die oorspronklike is.', checkMode: 'self', answer: 'Thandeka beskryf ʼn verandering in oriëntasie, nie grootte of vorm nie. ʼn Refleksie flip ʼn vorm sodat dit in die teenoorgestelde rigting kyk (soos ʼn spieëlbeeld), maar dit verander nie hoe groot die vorm is of watter vorm dit is nie — ʼn reghoek bly ʼn reghoek met presies dieselfde sylengtes en hoeke. Omdat die grootte en vorm onveranderd bly, is die beeld steeds kongruent aan die objek; net die posisie en die rigting waarin dit kyk, het verander.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn refleksie en ʼn rotasie. Albei hou die vorm kongruent, maar verduidelik een duidelike manier hoe jy, net deur na die objek en beeld te kyk, kan sê of ʼn refleksie of ʼn rotasie gebruik is. Regverdig dan waarom die beeld in albei gevalle kongruent aan die objek is.', checkMode: 'self', answer: 'Een duidelike manier is om te kyk of die vorm "geflip" (spieëlbeeld) is, of net "gedraai" is. In ʼn refleksie lyk die beeld soos ʼn spieëlbeeld van die objek — byvoorbeeld, as die objek ʼn etiket het wat regs kyk, lyk die gereflekteerde beeld dikwels agterstevoor oor die spieëllyn, en daar is ʼn reguit spieëllyn presies halfpad tussen ooreenstemmende punte op die objek en die beeld. In ʼn rotasie lyk die beeld asof die objek net om ʼn vaste middelpunt gedraai is — dit is nie ʼn spieëlbeeld nie, net gedraai om ʼn nuwe rigting te kyk. In albei gevalle is die beeld kongruent aan die objek omdat geen van die twee transformasies die vorm groter, kleiner of ʼn ander vorm maak nie — net die oriëntasie verander.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue transformasies identifiseer, transleer, reflekteer en draai, en jou redenasie soos ʼn kenner verduidelik.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van transformasies. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde vir translasie, refleksie en rotasie weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids, afdeling vir afdeling, en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reghoek draai om ʼn vaste punt totdat dit ʼn nuwe rigting kyk, sonder om van grootte te verander. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'rotasie', correctAnswers: ['rotasie'], explanation: 'Om ʼn vorm om ʼn vaste punt te draai, is altyd ʼn rotasie.' },
        { difficulty: 'Easy', question: 'In ʼn transformasie, wat noem ons die nuwe vorm wat ontstaan nadat die transformasie toegepas is?', checkMode: 'auto', correctAnswer: 'beeld', correctAnswers: ['beeld'], explanation: 'Die nuwe vorm ná ʼn transformasie word die beeld genoem. Dit is kongruent aan die oorspronklike objek.' },
        { difficulty: 'Easy', question: 'ʼn Sterretjie-vorm word 4 blokke af en 2 blokke regs beweeg, sonder om te draai of te flip. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'translasie', correctAnswers: ['translasie'], explanation: 'Om ʼn vorm in ʼn reguit rigting te skuif sonder om te draai of te flip, is ʼn translasie.' },
        { difficulty: 'Easy', question: 'Wat noem ons die oorspronklike vorm voordat enige transformasie daarop toegepas word?', checkMode: 'auto', correctAnswer: 'objek', correctAnswers: ['objek'], explanation: 'Die beginvorm, voordat die transformasie gebeur, word die objek genoem.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (2,6). Dit word 4 stappe na regs getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(6,6)', correctAnswers: ['(6,6)', '6,6'], explanation: 'Beweeg na regs beteken ons tel by die horisontale koördinaat: 2 + 4 = 6. Die vertikale koördinaat bly dieselfde. Nuwe punt: (6,6). ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (5,3). Dit word 3 stappe op getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(5,6)', correctAnswers: ['(5,6)', '5,6'], explanation: 'Beweeg op beteken ons tel by die vertikale koördinaat: 3 + 3 = 6. Die horisontale koördinaat bly dieselfde. Nuwe punt: (5,6). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt begin by (8,9). Dit word 5 stappe links en 2 stappe af getransleer. Waar eindig die hoekpunt?', checkMode: 'auto', correctAnswer: '(3,7)', correctAnswers: ['(3,7)', '3,7'], explanation: 'Horisontaal: links beteken trek af, so 8 − 5 = 3. Vertikaal: af beteken trek af, so 9 − 2 = 7. Nuwe punt: (3,7). ✓' },
        { difficulty: 'Medium', question: 'In ʼn videospeletjie begin ʼn karakterstuk op blokkie (2,2). Die speler druk die opdrag "3 regs, 5 op". Op watter blokkie eindig die karakter?', checkMode: 'auto', correctAnswer: '(5,7)', correctAnswers: ['(5,7)', '5,7'], explanation: 'Regs tel by die horisontale koördinaat: 2 + 3 = 5. Op tel by die vertikale koördinaat: 2 + 5 = 7. Die karakter eindig op (5,7). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (2,3). Dit word oor ʼn vertikale spieëllyn by x = 5 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(8,3)', correctAnswers: ['(8,3)', '8,3'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 5 − 2 = 3 eenhede links van die lyn. Die beeld is 3 eenhede aan die teenoorgestelde kant: 5 + 3 = 8. Die y-koördinaat bly dieselfde. Beeldpunt: (8,3). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (1,1). Dit word oor ʼn horisontale spieëllyn by y = 4 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(1,7)', correctAnswers: ['(1,7)', '1,7'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 4 − 1 = 3 eenhede onder die lyn. Die beeld is 3 eenhede aan die teenoorgestelde kant: 4 + 3 = 7. Die x-koördinaat bly dieselfde. Beeldpunt: (1,7). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt is by (3,5). Die spieëllyn vir hierdie refleksie is ʼn vertikale lyn by x = 8, ver van die hoekpunt af. Waar land die beeld van die hoekpunt?', checkMode: 'auto', correctAnswer: '(13,5)', correctAnswers: ['(13,5)', '13,5'], explanation: 'Afstand vanaf die hoekpunt tot die spieëllyn: 8 − 3 = 5 eenhede links van die lyn. Die beeld is 5 eenhede aan die teenoorgestelde kant: 8 + 5 = 13. Die y-koördinaat bly dieselfde. Beeldpunt: (13,5). ✓' },
        { difficulty: 'Medium', question: 'ʼn Teëlmaker ontwerp ʼn simmetriese patroon vir ʼn badkamervloer. Een punt op die teël is by (4,3), en dit word oor ʼn horisontale spieëllyn by y = 7 gereflekteer om die ooreenstemmende helfte te teken. Waar land die gereflekteerde punt?', checkMode: 'auto', correctAnswer: '(4,11)', correctAnswers: ['(4,11)', '4,11'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 7 − 3 = 4 eenhede onder die lyn. Die beeld is 4 eenhede aan die teenoorgestelde kant: 7 + 4 = 11. Die x-koördinaat bly dieselfde. Beeldpunt: (4,11). ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pyl wys Noord. Dit word ʼn kwartdraai kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'ʼn Kwartdraai kloksgewys beweeg die rigting een stap om die kompas kloksgewys: Noord → Oos. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Plafonwaaier se lem wys Suid. Dit draai ʼn kwartdraai anti-kloksgewys. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Oos', correctAnswers: ['Oos', 'oos'], explanation: 'ʼn Kwartdraai anti-kloksgewys beweeg die rigting een stap om die kompas teen die horlosierigting: Suid → Oos. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vlag kyk Oos toe. Dit word 180 grade gedraai. In watter rigting kyk dit nou — en sou die antwoord verander as die rotasie anti-kloksgewys was in plaas van kloksgewys?', checkMode: 'auto', correctAnswer: 'Wes, nee', correctAnswers: ['Wes, nee', 'wes nee', 'wesnee', 'wes, dit sou nie verander nie', 'Wes dit sou nie verander nie'], explanation: 'ʼn 180-grade rotasie keer die rigting altyd om: Oos → Wes. ʼn 180-grade draai eindig in dieselfde posisie of jy kloksgewys of anti-kloksgewys draai, so die rigting sou nie verander nie. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kompasnaald begin deur Wes toe te wys en word ʼn driekwartdraai (270 grade) kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Suid', correctAnswers: ['Suid', 'suid'], explanation: 'ʼn Driekwartdraai kloksgewys beweeg die rigting drie stappe om die kompas kloksgewys: Wes → Noord → Oos → Suid. ✓' },
        { difficulty: 'Hard', question: 'Zanele sê: "ʼn Refleksie en ʼn rotasie moet dieselfde transformasie wees, want in albei is die beeld dieselfde grootte as die objek." Is Zanele korrek? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Nee, Zanele is nie korrek nie. Dit is waar dat beide ʼn refleksie en ʼn rotasie die beeld dieselfde grootte as die objek hou. Maar hulle werk verskillend: ʼn refleksie flip die vorm oor ʼn spieëllyn om ʼn spieëlbeeld te vorm, terwyl ʼn rotasie die vorm om ʼn vaste middelpunt draai sonder om dit te flip. Die manier waarop die oriëntasie verander, is in elke geval anders, dus beteken dieselfde grootte nie dieselfde transformasie nie — jy moet ook kyk of die vorm geflip of net gedraai is.' },
        { difficulty: 'Hard', question: 'ʼn Punt begin by (1,2). Dit word eers 4 stappe regs en 3 stappe op getransleer, en dan word die punt wat verkry is oor ʼn vertikale spieëllyn by x = 9 gereflekteer. Wat is die finale posisie van die punt? Wys albei stappe.', checkMode: 'auto', correctAnswer: '(13,5)', correctAnswers: ['(13,5)', '13,5'], explanation: 'Stap 1 — translasie: (1 + 4, 2 + 3) = (5,5). Stap 2 — refleksie oor x = 9: afstand vanaf (5,5) tot die spieëllyn is 9 − 5 = 4, dus is die beeld 4 eenhede aan die ander kant: 9 + 4 = 13. Finale punt: (13,5). ✓' },
        { difficulty: 'Hard', question: 'Bongani transleer ʼn driehoek en sê: "Die beeld is nou ʼn heeltemal ander driehoek, want dit is op ʼn nuwe plek." Beskryf hy ʼn verandering in grootte, vorm, of posisie? Verduidelik waarom die driehoek steeds kongruent aan die oorspronklike is.', checkMode: 'self', answer: 'Bongani beskryf ʼn verandering in posisie, nie grootte of vorm nie. ʼn Translasie skuif ʼn vorm na ʼn nuwe plek op die rooster sonder om te draai of te flip, dus bly die grootte, vorm en oriëntasie almal presies dieselfde — net die posisie verander. Omdat niks aan die grootte of vorm verander het nie, is die beeld steeds kongruent aan (ʼn presiese identiese kopie van) die objek; dit het net na ʼn nuwe plek geskuif.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn translasie en ʼn rotasie. Albei hou die vorm kongruent, maar verduidelik een duidelike manier hoe jy, net deur na die objek en beeld te kyk, kan sê of ʼn translasie of ʼn rotasie gebruik is. Regverdig dan waarom die beeld in albei gevalle kongruent aan die objek is.', checkMode: 'self', answer: 'Een duidelike manier is om te kyk of die vorm nog steeds in dieselfde rigting kyk. In ʼn translasie kyk die objek en beeld presies dieselfde kant toe — elke deel van die vorm het net dieselfde afstand in dieselfde rigting geskuif, so lyne wat horisontaal was, bly horisontaal. In ʼn rotasie verander die vorm se oriëntasie — dit word om ʼn vaste middelpunt gedraai om ʼn nuwe rigting te kyk, so lyne wat horisontaal in die objek was, kan nou vertikaal of skuins in die beeld wees. In albei gevalle is die beeld kongruent aan die objek omdat geen van die twee transformasies die vorm groter, kleiner of ʼn ander vorm maak nie — net die posisie en/of oriëntasie verander.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue transformasies identifiseer, transleer, reflekteer en draai, en jou redenasie soos ʼn kenner verduidelik.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van transformasies. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde vir translasie, refleksie en rotasie weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids, afdeling vir afdeling, en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Blaarpatroon word oor ʼn reguit lyn geflip sodat sy spieëlbeeld aan die ander kant verskyn. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'refleksie', correctAnswers: ['refleksie'], explanation: 'Om ʼn vorm oor ʼn lyn te flip om sy spieëlbeeld te vorm, is ʼn refleksie.' },
        { difficulty: 'Easy', question: 'ʼn Wiel draai ʼn kwartdraai kloksgewys om sy middelbout. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'rotasie', correctAnswers: ['rotasie'], explanation: 'Om ʼn vorm om ʼn vaste punt te draai, is ʼn rotasie.' },
        { difficulty: 'Easy', question: 'ʼn Pion op ʼn skaakbord gly 2 blokkies vorentoe sonder om te draai. Watter tipe transformasie is dit?', checkMode: 'auto', correctAnswer: 'translasie', correctAnswers: ['translasie'], explanation: 'Om ʼn stuk in ʼn reguit rigting te skuif sonder om te draai of te flip, is ʼn translasie.' },
        { difficulty: 'Easy', question: 'Waar of onwaar: in elke transformasie wat in Graad 5 gedek word (translasie, refleksie, rotasie), is die beeld altyd kongruent aan die objek, tensy die vorm doelbewus groter of kleiner gemaak word.', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: 'Waar — translasies, refleksies en rotasies behou almal die grootte en vorm van die objek. Die beeld is kongruent aan die objek; net die posisie en/of oriëntasie verander.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (3,4). Dit word 6 stappe na regs getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(9,4)', correctAnswers: ['(9,4)', '9,4'], explanation: 'Beweeg na regs beteken ons tel by die horisontale koördinaat: 3 + 6 = 9. Die vertikale koördinaat bly dieselfde. Nuwe punt: (9,4). ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Punt is by (7,8). Dit word 4 stappe af getransleer. Waar eindig dit?', checkMode: 'auto', correctAnswer: '(7,4)', correctAnswers: ['(7,4)', '7,4'], explanation: 'Beweeg af beteken ons trek af van die vertikale koördinaat: 8 − 4 = 4. Die horisontale koördinaat bly dieselfde. Nuwe punt: (7,4). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt begin by (1,3). Dit word 5 stappe regs en 4 stappe op getransleer. Waar eindig die hoekpunt?', checkMode: 'auto', correctAnswer: '(6,7)', correctAnswers: ['(6,7)', '6,7'], explanation: 'Horisontaal: regs beteken tel by, so 1 + 5 = 6. Vertikaal: op beteken tel by, so 3 + 4 = 7. Nuwe punt: (6,7). ✓' },
        { difficulty: 'Medium', question: 'ʼn Aflewerings-robot op ʼn pakhuisrooster begin op blokkie (3,5). Dit volg die opdrag "2 links, 4 af" om ʼn rak te bereik. Op watter blokkie eindig dit?', checkMode: 'auto', correctAnswer: '(1,1)', correctAnswers: ['(1,1)', '1,1'], explanation: 'Links trek af van die horisontale koördinaat: 3 − 2 = 1. Af trek af van die vertikale koördinaat: 5 − 4 = 1. Die robot eindig op (1,1). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (4,5). Dit word oor ʼn vertikale spieëllyn by x = 6 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(8,5)', correctAnswers: ['(8,5)', '8,5'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 6 − 4 = 2 eenhede links van die lyn. Die beeld is 2 eenhede aan die teenoorgestelde kant: 6 + 2 = 8. Die y-koördinaat bly dieselfde. Beeldpunt: (8,5). ✓' },
        { difficulty: 'Medium', question: 'ʼn Punt is by (2,3). Dit word oor ʼn horisontale spieëllyn by y = 8 gereflekteer. Waar is die beeldpunt?', checkMode: 'auto', correctAnswer: '(2,13)', correctAnswers: ['(2,13)', '2,13'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 8 − 3 = 5 eenhede onder die lyn. Die beeld is 5 eenhede aan die teenoorgestelde kant: 8 + 5 = 13. Die x-koördinaat bly dieselfde. Beeldpunt: (2,13). ✓' },
        { difficulty: 'Medium', question: 'ʼn Vorm se hoekpunt is by (6,2). Die spieëllyn vir hierdie refleksie is ʼn vertikale lyn by x = 10, ver van die hoekpunt af. Waar land die beeld van die hoekpunt?', checkMode: 'auto', correctAnswer: '(14,2)', correctAnswers: ['(14,2)', '14,2'], explanation: 'Afstand vanaf die hoekpunt tot die spieëllyn: 10 − 6 = 4 eenhede links van die lyn. Die beeld is 4 eenhede aan die teenoorgestelde kant: 10 + 4 = 14. Die y-koördinaat bly dieselfde. Beeldpunt: (14,2). ✓' },
        { difficulty: 'Medium', question: 'ʼn Spieël in ʼn badkamer hang so dat sy onderste rand as ʼn horisontale spieëllyn by y = 9 dien. ʼn Punt op ʼn tandeborsel-houer is by (3,4), en sy refleksie verskyn in die spieël. Waar land die gereflekteerde punt?', checkMode: 'auto', correctAnswer: '(3,14)', correctAnswers: ['(3,14)', '3,14'], explanation: 'Afstand vanaf die punt tot die spieëllyn: 9 − 4 = 5 eenhede onder die lyn. Die beeld is 5 eenhede aan die teenoorgestelde kant: 9 + 5 = 14. Die x-koördinaat bly dieselfde. Beeldpunt: (3,14). ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Padtekenpyl wys Suid. Dit word ʼn kwartdraai kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'ʼn Kwartdraai kloksgewys beweeg die rigting een stap om die kompas kloksgewys: Suid → Wes. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Windwyser wys Oos. Dit draai ʼn kwartdraai anti-kloksgewys. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Noord', correctAnswers: ['Noord', 'noord'], explanation: 'ʼn Kwartdraai anti-kloksgewys beweeg die rigting een stap om die kompas teen die horlosierigting: Oos → Noord. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Karretjie op ʼn speelgoedbaan kyk Wes toe. Dit word 180 grade gedraai. In watter rigting kyk dit nou — en sou die antwoord verander as die rotasie anti-kloksgewys was in plaas van kloksgewys?', checkMode: 'auto', correctAnswer: 'Oos, nee', correctAnswers: ['Oos, nee', 'oos nee', 'oosnee', 'oos, dit sou nie verander nie', 'Oos dit sou nie verander nie'], explanation: 'ʼn 180-grade rotasie keer die rigting altyd om: Wes → Oos. ʼn 180-grade draai eindig in dieselfde posisie of jy kloksgewys of anti-kloksgewys draai, so die rigting sou nie verander nie. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Propellerlem begin deur Noord toe te wys en word ʼn driekwartdraai (270 grade) kloksgewys gedraai. In watter rigting wys dit nou?', checkMode: 'auto', correctAnswer: 'Wes', correctAnswers: ['Wes', 'wes'], explanation: 'ʼn Driekwartdraai kloksgewys beweeg die rigting drie stappe om die kompas kloksgewys: Noord → Oos → Suid → Wes. ✓' },
        { difficulty: 'Hard', question: 'Sipho sê: "ʼn Translasie en ʼn refleksie moet dieselfde transformasie wees, want in albei is die objek en beeld presies dieselfde grootte." Is Sipho korrek? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Nee, Sipho is nie korrek nie. Dit is waar dat beide ʼn translasie en ʼn refleksie die objek en beeld dieselfde grootte hou. Maar hulle is verskillend: ʼn translasie skuif die vorm sonder om te verander watter kant dit kyk, terwyl ʼn refleksie die vorm oor ʼn spieëllyn flip sodat dit ʼn spieëlbeeld word, wat sy oriëntasie omkeer. Dieselfde grootte beteken nie dieselfde transformasie nie — jy moet ook kyk of die vorm geflip is, of net na ʼn nuwe posisie geskuif het.' },
        { difficulty: 'Hard', question: 'ʼn Punt begin by (3,4). Dit word eers 2 stappe regs en 1 stap af getransleer, en dan word die punt wat verkry is oor ʼn vertikale spieëllyn by x = 10 gereflekteer. Wat is die finale posisie van die punt? Wys albei stappe.', checkMode: 'auto', correctAnswer: '(15,3)', correctAnswers: ['(15,3)', '15,3'], explanation: 'Stap 1 — translasie: (3 + 2, 4 − 1) = (5,3). Stap 2 — refleksie oor x = 10: afstand vanaf (5,3) tot die spieëllyn is 10 − 5 = 5, dus is die beeld 5 eenhede aan die ander kant: 10 + 5 = 15. Finale punt: (15,3). ✓' },
        { difficulty: 'Hard', question: 'Amahle draai ʼn vierkant 90 grade en sê: "Dit is nie meer ʼn vierkant nie, want dit kyk nou ʼn ander kant toe." Beskryf sy ʼn verandering in grootte, vorm, of oriëntasie? Verduidelik waarom die vierkant steeds kongruent aan die oorspronklike is.', checkMode: 'self', answer: 'Amahle beskryf ʼn verandering in oriëntasie, nie grootte of vorm nie. ʼn Rotasie draai ʼn vorm om ʼn vaste middelpunt, wat die rigting waarin dit kyk, verander, maar dit verander nie hoe groot die vorm is of watter vorm dit is nie — ʼn vierkant bly ʼn vierkant met presies dieselfde sylengtes en hoeke. Omdat die grootte en vorm onveranderd bly, is die beeld steeds kongruent aan die objek; dit is net gedraai om ʼn nuwe rigting te kyk.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn refleksie en ʼn translasie deur ʼn spesifieke voorbeeld te gebruik: ʼn vlagvorm met ʼn pyl daarop gedruk wat regs wys. Verduidelik wat met die rigting van die pyl in elke transformasie sou gebeur, en waarom dit jou help om die twee transformasies van mekaar te onderskei.', checkMode: 'self', answer: 'As die vlag getransleer word, wys die pyl steeds presies dieselfde kant toe (regs) — net sy posisie op die rooster verander, want ʼn translasie skuif net die vorm sonder om te draai of te flip. As die vlag oor ʼn spieëllyn gereflekteer word, word die pyl se rigting gespieël — ʼn pyl wat regs wys, kan byvoorbeeld in die beeld links wys, want ʼn refleksie flip die hele vorm in ʼn spieëlbeeld van homself. Om te kyk of ʼn rigtingaanduiding soos ʼn pyl dieselfde kant toe bly wys of geflip word, is ʼn betroubare manier om ʼn translasie van ʼn refleksie te onderskei. In albei gevalle bly die vlag kongruent aan die oorspronklike, want geen van die twee transformasies verander sy grootte nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan translasie, refleksie en rotasie op werklike probleme toepas en jou redenasie met selfvertroue regverdig.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van transformasies. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde vir translasie, refleksie en rotasie weer deur, en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids, afdeling vir afdeling, en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 5, message: 'Uitstekend! ʼn Volpunt-telling — jy het transformasies vir Graad 5 heeltemal bemeester. Hou so aan!' },
    { minScore: 4, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van transformasies. Gaan die dele wat jy gemis het weer deur en jy sal dit perfek kry.' },
    { minScore: 3, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 2, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het transformasies bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van transformasies.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
