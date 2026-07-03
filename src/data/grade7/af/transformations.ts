import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (transformation roles) ────────────────────────────────────
// mirror line / red axis  → red     (#dc2626)
// object / original (S3) → blue    (#2563eb)
// image (S1 & S3)        → green   (#16a34a)
// original (S2) / centre → orange  (#ea580c)
// image (S2)             → purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Transformasies',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REFLECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reflection',
      title: 'Refleksie',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Refleksie</strong> flip ʼn vorm oor ʼn spieëllyn, genoem die <strong>spieëllyn</strong>. Die beeld is <strong>kongruent</strong> aan (presies dieselfde grootte en vorm as) die objek, maar omgekeer. Elke punt op die beeld is dieselfde loodregte afstand vanaf die spieëllyn as die ooreenstemmende punt op die objek.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('spieëllyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beeld')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe van ʼn refleksie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Spieëllyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste lyn waaroor die vorm geflip word. Algemene spieëllyne is x = k en y = k.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelyke afstand</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die objek en beeld is dieselfde loodregte afstand vanaf die spieëllyn, aan teenoorgestelde kante.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kongruent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beeld is dieselfde grootte en vorm as die objek — slegs die oriëntasie (watter kant toe dit kyk) verander.</p>` +
        `</div>` +

        `</div>` +

        // ── How to reflect over a vertical or horizontal line ─────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn punt te reflekteer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Identifiseer die spieëllyn')} — let op of dit vertikaal (x = k) of horisontaal (y = k) is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind die loodregte afstand')} — meet hoe ver die ${bl('objek')}punt vanaf die ${re('spieëllyn')} is. Slegs die koördinaat wat loodreg op die lyn staan, verander.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Plaas die beeld')} — beweeg dieselfde afstand aan die teenoorgestelde kant van die ${re('spieëllyn')}. Die ander koördinaat bly dieselfde.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vinnige reël</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om oor die lyn <strong>x = k</strong> te reflekteer, verander slegs die x-koördinaat: nuwe x = 2k − (ou x). Om oor <strong>y = k</strong> te reflekteer, verander slegs die y-koördinaat: nuwe y = 2k − (ou y). Die ander koördinaat bly dieselfde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt by (3, 5) word oor die lyn x = 7 gereflekteer. Vind die beeld.',
          answer: `Beeldpunt = ${gr('(11, 5)')}`,
          steps: [
            `Identifiseer die ${re('spieëllyn')}: <strong>x = 7</strong> — dit is ʼn vertikale lyn, so slegs die x-koördinaat verander.`,
            `Vind die loodregte afstand vanaf die ${bl('objek')} tot die ${re('spieëllyn')}: afstand = 7 − ${bl('3')} = <strong>4 eenhede</strong>.`,
            `Die ${gr('beeld')} is 4 eenhede aan die ander kant van die spieël: 7 + 4 = ${gr('11')}.`,
            `Die y-koördinaat bly dieselfde: <strong>5</strong>.`,
            `<strong>Antwoord:</strong> ${gr('Beeldpunt = (11, 5)')} ✓`,
          ],
        },
        {
          question: 'ʼn Punt by (2, 8) word oor die lyn y = 3 gereflekteer. Vind die beeld.',
          answer: `Beeldpunt = ${gr('(2, −2)')}`,
          steps: [
            `Identifiseer die ${re('spieëllyn')}: <strong>y = 3</strong> — dit is ʼn horisontale lyn, so slegs die y-koördinaat verander.`,
            `Vind die loodregte afstand vanaf die ${bl('objek')} tot die ${re('spieëllyn')}: afstand = ${bl('8')} − 3 = <strong>5 eenhede</strong>.`,
            `Die ${gr('beeld')} is 5 eenhede onder die spieëllyn: 3 − 5 = ${gr('−2')}.`,
            `Die x-koördinaat bly dieselfde: <strong>2</strong>.`,
            `<strong>Antwoord:</strong> ${gr('Beeldpunt = (2, −2)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — reflect a point over a vertical line ───────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Punt by (6, 4) word oor die lyn x = 2 gereflekteer. Vind die beeldpunt.',
          answer: '(-2, 4)',
          checkMode: 'auto',
          correctAnswer: '(-2, 4)',
          correctAnswers: ['(-2, 4)', '(-2,4)', '(−2, 4)', '(−2,4)'],
          explanation: 'Spieëllyn: x = 2 (vertikaal — slegs x verander).\nAfstand vanaf objek tot spieël: 6 − 2 = 4 eenhede.\nBeeld is 4 eenhede aan die ander kant: 2 − 4 = −2.\ny bly dieselfde: 4.\nBeeldpunt = (−2, 4) ✓',
        },

        // ── Q2 Medium — reflect two points over different mirror lines ────────
        {
          difficulty: 'Medium',
          question: 'Reflekteer elke punt oor die gegewe spieëllyn.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Punt (1, 5) gereflekteer oor x = 4',
              correctAnswer: '(7, 5)',
              correctAnswers: ['(7, 5)', '(7,5)'],
              explanation: 'Spieëllyn: x = 4 (vertikaal).\nAfstand: 4 − 1 = 3 eenhede.\nBeeld x: 4 + 3 = 7.\ny bly dieselfde: 5.\nBeeld = (7, 5) ✓',
            },
            {
              label: 'b) Punt (3, 10) gereflekteer oor y = 6',
              correctAnswer: '(3, 2)',
              correctAnswers: ['(3, 2)', '(3,2)'],
              explanation: 'Spieëllyn: y = 6 (horisontaal).\nAfstand: 10 − 6 = 4 eenhede.\nBeeld y: 6 − 4 = 2.\nx bly dieselfde: 3.\nBeeld = (3, 2) ✓',
            },
          ],
        },

        // ── Q3 Hard — reflect a triangle and explain properties ───────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Driehoek het hoekpunte by A(1, 2), B(4, 2) en C(4, 6).\n\na) Reflekteer die driehoek oor die lyn x = 5 en skryf die beeldkoördinate neer.\nb) Wat bly dieselfde en wat verander ná ʼn refleksie?\nc) Is die beeld kongruent aan die objek? Verduidelik.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Beeldkoördinate A', B', C'",
              correctAnswer: "A'(9,2) B'(6,2) C'(6,6)",
              correctAnswers: ["A'(9,2) B'(6,2) C'(6,6)", "A'(9, 2) B'(6, 2) C'(6, 6)", "(9,2)(6,2)(6,6)"],
              explanation: "Spieëllyn: x = 5 (vertikaal).\nA(1, 2): afstand = 5 − 1 = 4. Beeld x = 5 + 4 = 9. A'(9, 2).\nB(4, 2): afstand = 5 − 4 = 1. Beeld x = 5 + 1 = 6. B'(6, 2).\nC(4, 6): afstand = 5 − 4 = 1. Beeld x = 5 + 1 = 6. C'(6, 6). ✓",
            },
            {
              label: 'b) Wat bly dieselfde en wat verander?',
              checkMode: 'self',
              answer: 'Die y-koördinate (loodreg op die spieël) en die afstande bly dieselfde. Die x-koördinate verander — elke punt beweeg na die teenoorgestelde kant van die spieëllyn teen dieselfde afstand.',
            },
            {
              label: 'c) Is die beeld kongruent aan die objek?',
              checkMode: 'self',
              answer: 'Ja — refleksie behou grootte en vorm. Die beeld is kongruent aan die objek; slegs die oriëntasie word omgekeer (dit is ʼn spieëlbeeld).',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn punt en ʼn vorm oor ʼn vertikale of horisontale spieëllyn op ʼn koördinaatrooster te reflekteer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Koördinaatrooster wat die punt (3,5) gereflekteer oor die spieëllyn x=7 (rooi) na beeldpunt (11,5) (groen) wys, met die objek in blou en die gelyke afstande gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TRANSLATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'translation',
      title: 'Translasie',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Translasie</strong> skuif ʼn vorm na ʼn nuwe posisie sonder om dit te draai of te flip. Ons beskryf ʼn translasie met ʼn <strong>horisontale skuif</strong> en ʼn <strong>vertikale skuif</strong>, dikwels geskryf as ʼn geordende paar of vektor.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horisontale skuif')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertikale skuif')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('oorspronklike')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('beeld')}</span>` +
        `</div>` +

        // ── Key ideas ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Horisontale skuif</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die ${bl('horisontale skuif')} by die x-koördinaat. Positief beweeg regs; negatief beweeg links.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vertikale skuif</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die ${gr('vertikale skuif')} by die y-koördinaat. Positief beweeg op; negatief beweeg af.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vorm bly onveranderd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${pu('beeld')} is kongruent aan die ${or('oorspronklike')} — grootte, vorm en oriëntasie word almal behou.</p>` +
        `</div>` +

        `</div>` +

        // ── How to translate a point ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn punt met (a, b) te transleer</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">(x, y) → (x + ${bl('a')}, y + ${gr('b')})</p>` +
        `</div>` +

        // ── Sign reminder ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenherinnering</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die ${bl('horisontale skuif')} <strong>negatief</strong> is, beweeg die vorm <strong>links</strong>. As die ${gr('vertikale skuif')} <strong>negatief</strong> is, beweeg die vorm <strong>af</strong>. Tel altyd op (selfs al is die waarde negatief).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt by (4, 6) word met (3, −2) getransleer. Vind die nuwe posisie.',
          answer: `Nuwe posisie = ${pu('(7, 4)')}`,
          steps: [
            `Skryf die translasie: ${or('(4, 6)')} getransleer met (${bl('3')}, ${gr('−2')}).`,
            `Nuwe x: ${or('4')} + ${bl('3')} = ${pu('7')}.`,
            `Nuwe y: ${or('6')} + ${gr('(−2)')} = ${pu('4')}.`,
            `<strong>Antwoord:</strong> Nuwe posisie = ${pu('(7, 4)')} ✓`,
          ],
        },
        {
          question: 'Sipho transleer ʼn vorm met een hoekpunt by (−2, 5) met (5, 3). Vind die nuwe hoekpuntposisie.',
          answer: `Nuwe posisie = ${pu('(3, 8)')}`,
          steps: [
            `Skryf die translasie: ${or('(−2, 5)')} getransleer met (${bl('5')}, ${gr('3')}).`,
            `Nuwe x: ${or('−2')} + ${bl('5')} = ${pu('3')}.`,
            `Nuwe y: ${or('5')} + ${gr('3')} = ${pu('8')}.`,
            `<strong>Antwoord:</strong> Nuwe hoekpuntposisie = ${pu('(3, 8)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — translate a single point ───────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Punt by (7, 3) word met (−4, 5) getransleer. Vind die nuwe posisie.',
          answer: '(3, 8)',
          checkMode: 'auto',
          correctAnswer: '(3, 8)',
          correctAnswers: ['(3, 8)', '(3,8)'],
          explanation: 'Nuwe x: 7 + (−4) = 3.\nNuwe y: 3 + 5 = 8.\nNuwe posisie = (3, 8) ✓',
        },

        // ── Q5 Medium — two translations ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Pas elke translasie toe.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Punt (−3, 4) getransleer met (6, −7)',
              correctAnswer: '(3, -3)',
              correctAnswers: ['(3, -3)', '(3,-3)', '(3, −3)', '(3,−3)'],
              explanation: 'Nuwe x: −3 + 6 = 3.\nNuwe y: 4 + (−7) = −3.\nNuwe posisie = (3, −3) ✓',
            },
            {
              label: 'b) Punt (5, −2) getransleer met (−5, 2)',
              correctAnswer: '(0, 0)',
              correctAnswers: ['(0, 0)', '(0,0)', 'oorsprong'],
              explanation: 'Nuwe x: 5 + (−5) = 0.\nNuwe y: −2 + 2 = 0.\nNuwe posisie = (0, 0) — die oorsprong ✓',
            },
          ],
        },

        // ── Q6 Hard — translate a quadrilateral and reason about properties ───
        {
          difficulty: 'Hard',
          question: 'ʼn Vierhoek het hoekpunte by P(1, 1), Q(4, 1), R(4, 3) en S(1, 3).\n\na) Transleer die vierhoek met (−3, 4) en skryf al die beeldhoekpunte neer.\nb) Wat is die lengtes van PQ en P\'Q\'? Wat vertel dit jou?\nc) Beskryf die translasie wat die beeld terug na die oorspronklike posisie sal beweeg.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Beeldhoekpunte P', Q', R', S'",
              correctAnswer: "P'(-2,5) Q'(1,5) R'(1,7) S'(-2,7)",
              correctAnswers: ["P'(-2,5) Q'(1,5) R'(1,7) S'(-2,7)", "P'(−2,5) Q'(1,5) R'(1,7) S'(−2,7)"],
              explanation: "Translasie: (−3, 4).\nP(1,1): (1−3, 1+4) = P'(−2, 5).\nQ(4,1): (4−3, 1+4) = Q'(1, 5).\nR(4,3): (4−3, 3+4) = R'(1, 7).\nS(1,3): (1−3, 3+4) = S'(−2, 7). ✓",
            },
            {
              label: 'b) Lengte van PQ en lengte van P\'Q\'',
              correctAnswer: '3',
              correctAnswers: ['3', '3 eenhede', 'albei 3', 'albei 3 eenhede'],
              explanation: "PQ: vanaf (1,1) na (4,1) → lengte = 4 − 1 = 3 eenhede.\nP'Q': vanaf (−2,5) na (1,5) → lengte = 1 − (−2) = 3 eenhede.\nBeide is 3 eenhede — translasie behou lengte (die beeld is kongruent aan die objek). ✓",
            },
            {
              label: 'c) Omgekeerde translasie',
              checkMode: 'self',
              answer: 'Transleer met (3, −4) — die teenoorgestelde van elke komponent. Dit maak die oorspronklike translasie ongedaan en bring elke punt terug na sy beginposisie.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn punt en ʼn vorm op ʼn koördinaatrooster te transleer met ʼn horisontale en vertikale skuif" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Koördinaatrooster wat die oorspronklike punt (4,6) in oranje wys wat met (3,−2) getransleer word, met die horisontale skuif in blou en vertikale skuif in groen na die beeldpunt (7,4) in pers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ROTATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rotation',
      title: 'Rotasie',
      icon: '↺',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Rotasie</strong> draai ʼn vorm om ʼn vaste <strong>middelpunt</strong> deur ʼn gegewe hoek, in ʼn kloksgewyse of anti-kloksgewyse rigting. Algemene rotasies is 90°, 180° en 270°. Die vorm en beeld is <strong>kongruent</strong> — slegs die oriëntasie verander.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt van rotasie')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('geroteerde beeld')}</span>` +
        `</div>` +

        // ── Rotation rules about the origin ──────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rotasiereëls om die oorsprong (0, 0)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#2563eb;">90° kloksgewys</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (y, −x)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#2563eb;">90° anti-kloksgewys</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−y, x)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#dc2626;">180°</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−x, −y)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<div style="min-width:160px;font-size:14px;font-weight:700;color:#16a34a;">270° kloksgewys</div>` +
        `<p style="margin:0;font-size:14px;">(x, y) → (−y, x) &nbsp;[dieselfde as 90° anti-kloksgewys]</p>` +
        `</div>` +

        `</div>` +

        // ── Properties ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eienskappe van rotasie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt van rotasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste ${or('punt')} waarom die vorm draai. Die algemeenste middelpunt is die oorsprong (0, 0).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoek en rigting</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gee altyd die hoek (bv. 90°) en die rigting (kloksgewys of anti-kloksgewys) aan.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kongruent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('beeld')} is dieselfde grootte en vorm as die ${bl('oorspronklike')} — slegs die oriëntasie verander.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kloksgewys teenoor anti-kloksgewys</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kloksgewys is dieselfde rigting waarin die horlosiewysers draai. Anti-kloksgewys is die teenoorgestelde. ʼn <strong>90° kloksgewyse</strong> rotasie is dieselfde as ʼn <strong>270° anti-kloksgewyse</strong> rotasie — hulle land op dieselfde beeld.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Punt by (3, 2) word 90° kloksgewys om die oorsprong geroteer. Vind die nuwe posisie met die reël (x, y) → (y, −x).',
          answer: `${gr('Nuwe punt = (2, −3)')}`,
          steps: [
            `${bl('Oorspronklike punt:')} (${bl('3')}, ${bl('2')}).`,
            `Pas die 90° kloksgewyse reël toe: (x, y) → (y, −x).`,
            `Nuwe x = ${bl('y')} = ${gr('2')}.`,
            `Nuwe y = −${bl('x')} = −${bl('3')} = ${gr('−3')}.`,
            `<strong>Antwoord:</strong> ${gr('Nuwe punt = (2, −3)')} ✓`,
          ],
        },
        {
          question: 'Lerato roteer ʼn vorm 180° om die oorsprong. ʼn Punt begin by (4, −5). Vind die nuwe posisie met die reël (x, y) → (−x, −y).',
          answer: `${gr('Nuwe punt = (−4, 5)')}`,
          steps: [
            `${bl('Oorspronklike punt:')} (${bl('4')}, ${bl('−5')}).`,
            `Pas die 180°-rotasiereël toe: (x, y) → (−x, −y).`,
            `Nuwe x = −${bl('4')} = ${gr('−4')}.`,
            `Nuwe y = −(${bl('−5')}) = ${gr('5')}.`,
            `<strong>Antwoord:</strong> ${gr('Nuwe punt = (−4, 5)')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — 90° clockwise rotation ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Punt by (5, 3) word 90° kloksgewys om die oorsprong geroteer. Gebruik die reël (x, y) → (y, −x) om die nuwe posisie te vind.',
          answer: '(3, -5)',
          checkMode: 'auto',
          correctAnswer: '(3, -5)',
          correctAnswers: ['(3, -5)', '(3,-5)', '(3, −5)', '(3,−5)'],
          explanation: 'Reël: (x, y) → (y, −x).\nNuwe x = y = 3.\nNuwe y = −x = −5.\nNuwe punt = (3, −5) ✓',
        },

        // ── Q8 Medium — two rotations about the origin ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Pas elke rotasie om die oorsprong toe.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Punt (4, 7) geroteer 90° anti-kloksgewys — reël (x, y) → (−y, x)',
              correctAnswer: '(-7, 4)',
              correctAnswers: ['(-7, 4)', '(-7,4)', '(−7, 4)', '(−7,4)'],
              explanation: 'Reël: (x, y) → (−y, x).\nNuwe x = −y = −7.\nNuwe y = x = 4.\nNuwe punt = (−7, 4) ✓',
            },
            {
              label: 'b) Punt (−3, 6) geroteer 180° — reël (x, y) → (−x, −y)',
              correctAnswer: '(3, -6)',
              correctAnswers: ['(3, -6)', '(3,-6)', '(3, −6)', '(3,−6)'],
              explanation: 'Reël: (x, y) → (−x, −y).\nNuwe x = −(−3) = 3.\nNuwe y = −6.\nNuwe punt = (3, −6) ✓',
            },
          ],
        },

        // ── Q9 Hard — rotate a triangle by 90° and 180° ───────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Driehoek het hoekpunte by A(2, 1), B(5, 1) en C(5, 4).\n\na) Roteer die driehoek 90° kloksgewys om die oorsprong. Skryf al die beeldhoekpunte neer.\nb) Roteer die oorspronklike driehoek 180° om die oorsprong. Skryf al die beeldhoekpunte neer.\nc) Watter rotasie sal die 90° kloksgewyse beeld terug na die oorspronklike posisie karteer?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) 90° kloksgewyse beeldhoekpunte A', B', C'",
              correctAnswer: "A'(1,-2) B'(1,-5) C'(4,-5)",
              correctAnswers: ["A'(1,-2) B'(1,-5) C'(4,-5)", "A'(1,−2) B'(1,−5) C'(4,−5)"],
              explanation: "Reël: (x, y) → (y, −x).\nA(2,1) → A'(1, −2).\nB(5,1) → B'(1, −5).\nC(5,4) → C'(4, −5). ✓",
            },
            {
              label: "b) 180°-beeldhoekpunte A'', B'', C''",
              correctAnswer: "A''(-2,-1) B''(-5,-1) C''(-5,-4)",
              correctAnswers: ["A''(-2,-1) B''(-5,-1) C''(-5,-4)", "A''(−2,−1) B''(−5,−1) C''(−5,−4)"],
              explanation: "Reël: (x, y) → (−x, −y).\nA(2,1) → A''(−2, −1).\nB(5,1) → B''(−5, −1).\nC(5,4) → C''(−5, −4). ✓",
            },
            {
              label: "c) Rotasie om die 90° kloksgewyse beeld terug na die oorspronklike te karteer",
              checkMode: 'self',
              answer: "ʼn 90° anti-kloksgewyse rotasie (of ewe veel 270° kloksgewys) om die oorsprong karteer die beeld terug na die oorspronklike posisie, want dit maak die 90° kloksgewyse rotasie ongedaan.",
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn punt en ʼn vorm om die oorsprong 90° en 180° te roteer met koördinaatreëls, met kloksgewyse en anti-kloksgewyse voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Koördinaatrooster wat die oorspronklike punt (3,2) in blou wys wat 90° kloksgewys om die oorsprong (oranje) geroteer word na die beeldpunt (2,−3) in groen, met die boog van rotasie gemerk" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — reflection over a vertical line ────────────────────────────
    {
      number: 1,
      difficulty: 'Easy',
      question: 'ʼn Punt by (2, 4) word oor die lyn x = 6 gereflekteer. Vind die beeld.',
      checkMode: 'auto',
      correctAnswer: '(10, 4)',
      correctAnswers: ['(10, 4)', '(10,4)'],
      explanation: 'Spieëllyn: x = 6 (vertikaal — slegs x verander).\nAfstand vanaf objek tot spieël: 6 − 2 = 4 eenhede.\nBeeld is 4 eenhede aan die ander kant: 6 + 4 = 10.\ny bly dieselfde: 4.\nBeeld = (10, 4) ✓',
    },

    // ── Q2 Medium — reflection over a horizontal line ────────────────────────
    {
      number: 2,
      difficulty: 'Medium',
      question: 'ʼn Punt by (5, 9) word oor die lyn y = 4 gereflekteer. Vind die beeld.',
      checkMode: 'auto',
      correctAnswer: '(5, -1)',
      correctAnswers: ['(5, -1)', '(5,-1)', '(5, −1)', '(5,−1)'],
      explanation: 'Spieëllyn: y = 4 (horisontaal — slegs y verander).\nAfstand vanaf objek tot spieël: 9 − 4 = 5 eenhede.\nBeeld is 5 eenhede aan die ander kant: 4 − 5 = −1.\nx bly dieselfde: 5.\nBeeld = (5, −1) ✓',
    },

    // ── Q3 Hard — evaluate a claim about reflection ───────────────────────────
    {
      number: 3,
      difficulty: 'Hard',
      question: 'Sipho sê die reflekteer van ʼn punt verander sy afstand vanaf die spieëllyn. Is hy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — die beeld is altyd dieselfde loodregte afstand vanaf die spieëllyn as die oorspronklike punt.',
    },

    // ── Q4 Easy — basic translation ───────────────────────────────────────────
    {
      number: 4,
      difficulty: 'Easy',
      question: 'ʼn Punt by (3, 5) word met (2, 4) getransleer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(5, 9)',
      correctAnswers: ['(5, 9)', '(5,9)'],
      explanation: 'Nuwe x: 3 + 2 = 5.\nNuwe y: 5 + 4 = 9.\nNuwe posisie = (5, 9) ✓',
    },

    // ── Q5 Medium — translation with negative components ─────────────────────
    {
      number: 5,
      difficulty: 'Medium',
      question: 'ʼn Punt by (−3, 6) word met (5, −2) getransleer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(2, 4)',
      correctAnswers: ['(2, 4)', '(2,4)'],
      explanation: 'Nuwe x: −3 + 5 = 2.\nNuwe y: 6 + (−2) = 4.\nNuwe posisie = (2, 4) ✓',
    },

    // ── Q6 Hard — combining two translations ──────────────────────────────────
    {
      number: 6,
      difficulty: 'Hard',
      question: 'Lerato transleer ʼn vorm met (4, −3) en dan weer met (−1, 5). Wat is die netto translasie?',
      checkMode: 'self',
      answer: 'Tel die translasies bymekaar: (4 + (−1), −3 + 5) = (3, 2). Die netto translasie is (3, 2).',
    },

    // ── Q7 Easy — quarter turn ────────────────────────────────────────────────
    {
      number: 7,
      difficulty: 'Easy',
      question: 'Hoeveel grade is ʼn kwartdraai?',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 grade'],
      explanation: 'ʼn Kwartdraai = 90°. ʼn Halwe draai = 180°. ʼn Volle draai = 360°.',
    },

    // ── Q8 Medium — 90° clockwise rotation ────────────────────────────────────
    {
      number: 8,
      difficulty: 'Medium',
      question: 'ʼn Punt by (4, 1) word 90° kloksgewys om die oorsprong geroteer met (x, y) → (y, −x). Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(1, -4)',
      correctAnswers: ['(1, -4)', '(1,-4)', '(1, −4)', '(1,−4)'],
      explanation: 'Reël: (x, y) → (y, −x).\nNuwe x = y = 1.\nNuwe y = −x = −4.\nNuwe punt = (1, −4) ✓',
    },

    // ── Q9 Hard — 180° rotation with explanation ──────────────────────────────
    {
      number: 9,
      difficulty: 'Hard',
      question: 'Thabo roteer ʼn punt by (−2, 3) met 180° om die oorsprong. Vind die nuwe posisie en verduidelik die reël wat gebruik is.',
      checkMode: 'self',
      answer: 'Nuwe posisie = (2, −3), met die reël (x, y) → (−x, −y) vir ʼn 180°-rotasie.',
    },

    // ── Q10 Medium — 180° rotation ────────────────────────────────────────────
    {
      number: 10,
      difficulty: 'Medium',
      question: 'ʼn Punt by (6, −4) word 180° om die oorsprong geroteer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(-6, 4)',
      correctAnswers: ['(-6, 4)', '(-6,4)', '(−6, 4)', '(−6,4)'],
      explanation: 'Reël: (x, y) → (−x, −y).\nNuwe x = −6.\nNuwe y = −(−4) = 4.\nNuwe punt = (−6, 4) ✓',
    },

    // ── Q11 Hard — evaluate a claim about rotation ────────────────────────────
    {
      number: 11,
      difficulty: 'Hard',
      question: 'Amahle sê rotasie verander altyd die grootte van ʼn vorm. Is sy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — rotasie hou die vorm kongruent (dieselfde grootte), en verander slegs die oriëntasie.',
    },

    // ── Q12 Hard — combined translation and reflection ────────────────────────
    {
      number: 12,
      difficulty: 'Hard',
      question: "ʼn Driehoek se hoekpunt by (1, 2) word met (3, 1) getransleer en dan oor die lyn x = 8 gereflekteer. Vind die finale posisie.",
      checkMode: 'self',
      answer: 'Ná translasie: (1 + 3, 2 + 1) = (4, 3). Afstand vanaf die spieëllyn x = 8: 8 − 4 = 4 eenhede. Gereflekteerde posisie: 8 + 4 = 12. Finale posisie = (12, 3).',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het transformasies bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 21, message: 'Uitstekend! ʼn Perfekte telling — jy het transformasies vir Graad 7 heeltemal bemeester. Hou so aan!' },
    { minScore: 17, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van transformasies. Hersien enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 12, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 7, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
}
