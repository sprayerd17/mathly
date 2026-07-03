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
        '<DiagramPlaceholder label="Drie diagramme langs mekaar wat dieselfde driehoek wys wat ʼn translasie (gly na regs), ʼn refleksie (flip oor ʼn vertikale spieëllyn) en ʼn rotasie (90 grade draai) ondergaan, met die objek in rooi en die beeld in pers" />',

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
        '<DiagramPlaceholder label="Rooster wat ʼn vierkant wys wat 4 stappe regs en 2 stappe op getransleer word, met die beginposisie in oranje gemerk, horisontale beweging in blou, vertikale beweging in groen, en die eindposisie in pers" />',

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
        '<DiagramPlaceholder label="Rooster wat ʼn punt by (2,3) wys wat oor ʼn vertikale spieëllyn by x=4 gereflekteer word om ʼn beeld by (6,3) te gee, met die spieëllyn in rooi, objek in blou, beeld in groen, en afstand vanaf die spieëllyn in oranje gemerk" />',

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
        '<DiagramPlaceholder label="Diagram wat ʼn pyl wys wat Noord toe wys en 90 grade kloksgewys gedraai word om Oos toe te wys, en ʼn vorm wat 180 grade gedraai word, met die middelpunt van rotasie in oranje gemerk, kloksgewyse rigting in blou, anti-kloksgewys in rooi, en grade in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm om ʼn middelpunt van rotasie te draai, met demonstrasies van kwartdraaie kloksgewys en anti-kloksgewys en ʼn halwe draai van 180 grade, met kloksgewys in blou, anti-kloksgewys in rooi, middelpunt van rotasie in oranje, en grade in groen" />',
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
