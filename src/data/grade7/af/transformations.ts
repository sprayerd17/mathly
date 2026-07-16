import type { TopicData, PracticeSet } from '@/src/data/grade4/en/numbers-operations'

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

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetry',
      title: 'Simmetrie',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Simmetrielyn</strong> verdeel ʼn 2D-figuur in twee helftes wat presiese spieëlbeelde van mekaar is — vou die figuur langs daardie lyn en die twee helftes val presies op mekaar. Jy weet reeds hoe om ʼn enkele lyn met die voutoets te toets. In Graad 7 moet jy <strong>elke</strong> simmetrielyn van ʼn figuur kan vind en teken, insluitend figure met verskeie simmetrielyne en figure met glad geen.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('simmetrielyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('figuur')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('passende helftes')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Simmetrielyne in verskillende figure</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reëlmatige veelhoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reëlmatige veelhoek met n gelyke sye het altyd presies n simmetrielyne — byvoorbeeld, ʼn reëlmatige vyfhoek (5 sye) het 5, en ʼn reëlmatige agthoek (8 sye) het 8.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verskeie lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sommige figure het verskeie simmetrielyne wat in verskillende rigtings loop — vertikaal, horisontaal, en diagonaal — almal tegelyk.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Geen simmetrielyne nie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Baie figure — skalene driehoeke, onreëlmatige vorms, en die meeste letters van die alfabet — het nul simmetrielyne.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find and draw all lines of symmetry ─────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om al die simmetrielyne in ʼn figuur te vind en te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Soek na moontlike lyne')} — vertikale, horisontale, en diagonale lyne deur hoekpunte, hoeke, of die middelpunte van sye.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Pas die voutoets toe')} op elke moontlike lyn — kyk of elke punt aan een kant ʼn passende punt dieselfde afstand weg aan die ander kant het.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Teken en tel')} — teken elke bevestigde simmetrielyn met ʼn liniaal deur die figuur, en tel hulle om die totaal te gee.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die reël vir reëlmatige veelhoeke — en die uitsonderings</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir ʼn <strong>reëlmatige</strong> veelhoek (al die sye en al die hoeke gelyk) met n sye, is die aantal simmetrielyne altyd n — ʼn sirkel, met oneindig baie "sye", het oneindig baie simmetrielyne. Maar die reël benodig reëlmatigheid: ʼn skalene driehoek het steeds 3 sye, maar 0 simmetrielyne, want sy sye is nie gelyk nie. Baie letters — F, G, J, L, N, P, Q, R, S en Z — het ook 0 simmetrielyne, alhoewel party van hulle (soos N, S en Z) eerder rotasiesimmetrie het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reëlmatige agthoek (8 gelyke sye en 8 gelyke hoeke) het al sy simmetrielyne ingeteken. Hoeveel simmetrielyne het dit, en watter twee tipes lyne is dit?',
          answer: `${or('8 simmetrielyne')}: 4 deur pare teenoorgestelde hoekpunte, en 4 deur die middelpunte van pare teenoorgestelde sye`,
          steps: [
            `ʼn Reëlmatige veelhoek met n gelyke sye het n simmetrielyne — vir ʼn agthoek, n = 8.`,
            `Omdat 8 ʼn ewe getal is, verdeel die lyne ewe in twee groepe: die helfte gaan deur twee teenoorgestelde hoekpunte, en die helfte gaan deur die middelpunte van twee teenoorgestelde sye.`,
            `8 ÷ 2 = 4, dus is daar 4 hoekpunt-tot-hoekpunt-lyne en 4 middelpunt-tot-middelpunt-lyne.`,
            `<strong>Antwoord:</strong> ${or('8 simmetrielyne')} in totaal ✓`,
          ],
        },
        {
          question: 'Die hoofletters N en A word in hul standaard bloklettervorm geteken. Het enige van die letters ʼn simmetrielyn?',
          answer: `N het ${re('0 simmetrielyne')}; A het ${gr('1 simmetrielyn')} (vertikaal)`,
          steps: [
            `Probeer om N vertikaal, horisontaal, en diagonaal te vou — in elke geval pas die diagonale streep en die twee opregte strepe nie presies op mekaar nie.`,
            `N het ${re('0 simmetrielyne')} — al karteer dit op homself wanneer dit 180° gedraai word, is dit rotasiesimmetrie, nie lynsimmetrie nie.`,
            `Probeer om A vertikaal in die middel te vou — die twee skuins strepe en die dwarsbalk pas presies.`,
            `<strong>Antwoord:</strong> A het ${gr('1 simmetrielyn')}: ʼn enkele vertikale lyn deur die middel ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — regular polygon rule ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye en 5 gelyke hoeke. Hoeveel simmetrielyne het dit?',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5', 'vyf'],
          explanation: 'ʼn Reëlmatige veelhoek met n gelyke sye het n simmetrielyne. ʼn Vyfhoek het 5 sye, dus het dit 5 simmetrielyne — elkeen loop van een hoekpunt deur die middelpunt na die middelpunt van die teenoorgestelde sy.',
        },

        // ── Q2 Medium — letters H and T ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Kyk na die hoof bloklletters H en T.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel simmetrielyne het die letter H?',
              correctAnswer: '2',
              correctAnswers: ['2', 'twee'],
              explanation: 'H het beide ʼn vertikale simmetrielyn (deur die middel van die twee opregte strepe) en ʼn horisontale simmetrielyn (deur die middel van die dwarsbalk) — 2 lyne in totaal.',
            },
            {
              label: 'b) Hoeveel simmetrielyne het die letter T?',
              correctAnswer: '1',
              correctAnswers: ['1', 'een'],
              explanation: 'T het net 1 simmetrielyn — ʼn enkele vertikale lyn deur die middel van die opregte streep en die middel van die boonste balk.',
            },
          ],
        },

        // ── Q3 Hard — why the polygon rule needs regularity ────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reëlmatige seshoek het 6 simmetrielyne en ʼn reëlmatige negehoek (9 sye) het 9 simmetrielyne, maar ʼn skalene driehoek (3 ongelyke sye) het 0 simmetrielyne, al het dit ook 3 sye. Verduidelik waarom die reël "n sye = n simmetrielyne" vir reëlmatige veelhoeke werk, maar nie vir die skalene driehoek nie.',
          answer: 'Die reël "n sye = n simmetrielyne" geld slegs vir reëlmatige veelhoeke, waar al die sye en al die hoeke gelyk is. Hierdie gelykheid is presies wat maak dat elke moontlike voulyn twee passende spieëlbeeld-helftes gee. ʼn Skalene driehoek het 3 sye, net soos ʼn gelyksydige driehoek, maar sy drie sye is almal verskillende lengtes, dus kan geen voulyn — vertikaal, horisontaal, of andersins — ooit twee helftes gee wat ware spieëlbeelde van mekaar is nie. Om net die aantal sye te tel is nie genoeg nie; die sye (en hoeke) moet werklik gelyk wees vir die veelhoekreël om te geld.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om al die simmetrielyne in reëlmatige veelhoeke en letters van die alfabet te vind en te teken, met voorbeelde van verskeie simmetrielyne en voorbeelde met geen" />',

      diagramSvg:
        '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="110,30 176.6,78.4 151.2,156.6 68.8,156.6 43.4,78.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="110" y1="30" x2="110" y2="156.6" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="176.6" y1="78.4" x2="56.1" y2="117.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="151.2" y1="156.6" x2="76.7" y2="54.2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="68.8" y1="156.6" x2="143.3" y2="54.2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="43.4" y1="78.4" x2="163.9" y2="117.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<text x="110" y="18" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Reëlmatige vyfhoek</text>' +
        '<text x="110" y="188" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">5 simmetrielyne</text>' +
        '</svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — ENLARGEMENTS AND REDUCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'enlargement-reduction',
      title: 'Vergrotings en Verkleinings',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Vergroting</strong> verander die grootte van ʼn vorm met ʼn <strong>skaalfaktor</strong>, sonder om die vorm te verander. As die skaalfaktor groter as 1 is, word die vorm groter; as dit tussen 0 en 1 is, word die vorm kleiner — dit word dikwels ʼn <strong>verkleining</strong> genoem, alhoewel dit steeds as ʼn tipe vergroting geklassifiseer word. Die beeld is <strong>gelykvormig</strong> aan die objek: ooreenstemmende hoeke bly presies gelyk, en ooreenstemmende sye is almal in dieselfde verhouding, die skaalfaktor.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('objek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('beeld')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt van vergroting')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('skaalfaktor')}</span>` +
        `</div>` +

        // ── Key properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vorm word behou</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('beeld')} is gelykvormig aan die ${bl('objek')} — elke hoek bly presies dieselfde. Slegs die grootte verander.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt van vergroting</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste ${or('punt')} waarvandaan elke beeldpunt op ʼn reguit straal lê, deur die ooreenstemmende objekpunt.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Skaalfaktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${pu('Skaalfaktor')} = beeldlengte ÷ ooreenstemmende objeklengte — dieselfde verhouding geld vir elke paar ooreenstemmende sye.</p>` +
        `</div>` +

        `</div>` +

        // ── How to draw an enlargement/reduction on a grid ─────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn vergroting of verkleining op ʼn rooster te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Merk die middelpunt van vergroting')} — dit is die vaste punt waarvandaan die vorm vergroot of verklein word.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Teken ʼn straal')} vanaf die middelpunt deur elke hoekpunt van die ${bl('objek')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Merk en verbind die beeldpunte')} — vermenigvuldig langs elke straal die afstand vanaf die middelpunt na die objekhoekpunt met die ${pu('skaalfaktor')}, merk die nuwe punt daardie afstand vanaf die middelpunt, en verbind dan die beeldhoekpunte in dieselfde volgorde.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Koördinaatreëls</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vanaf die <strong>oorsprong</strong> met skaalfaktor k: (x, y) → (kx, ky). Vanaf ʼn <strong>algemene middelpunt</strong> (a, b) met skaalfaktor k: (x, y) → (a + k(x − a), b + k(y − b)). As k &gt; 1, word die vorm vergroot (groter). As 0 &lt; k &lt; 1, word die vorm verklein (kleiner). In albei gevalle is die objek en beeld gelykvormig, nie kongruent nie, tensy k = 1.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Driehoek ABC het hoekpunte A(1, 1), B(1, 3) en C(3, 1). Dit word met skaalfaktor 2 vanaf die oorsprong vergroot. Vind die beeldkoördinate en beskryf hoe om dit op ʼn rooster te teken.',
          answer: `A'(2, 2), B'(2, 6), C'(6, 2)`,
          steps: [
            `Die ${or('middelpunt van vergroting')} is die oorsprong (0, 0), en die skaalfaktor is 2, dus gebruik die reël (x, y) → (2x, 2y).`,
            `A(1, 1) → A'(2, 2). B(1, 3) → B'(2, 6). C(3, 1) → C'(6, 2).`,
            `Om dit te teken: teken vanaf die oorsprong ʼn straal deur elke ${bl('objek')}hoekpunt. Omdat die skaalfaktor 2 is, lê elke ${gr('beeld')}hoekpunt presies twee keer so ver van die oorsprong as die ooreenstemmende objekhoekpunt, op dieselfde straal.`,
            `<strong>Antwoord:</strong> Beeldhoekpunte = A'(2, 2), B'(2, 6), C'(6, 2) — die beeld is gelykvormig aan die objek, met elke sy twee keer so lank ✓`,
          ],
        },
        {
          question: 'ʼn Model-motor is ʼn vergroting van ʼn werklike motor. ʼn Deur op die werklike motor is 90 cm hoog, en die ooreenstemmende deur op die model is 15 cm hoog. Vind die skaalfaktor, en gebruik dit dan om die lengte van ʼn enjinkap te vind wat 150 cm op die werklike motor meet.',
          answer: `Skaalfaktor = ${pu('1/6')}; model-enjinkap = 25 cm`,
          steps: [
            `${pu('Skaalfaktor')} = beeldlengte ÷ objeklengte = 15 ÷ 90 = 1/6.`,
            `Omdat die model kleiner as die werklike motor is, is dit ʼn verkleining (die skaalfaktor is tussen 0 en 1).`,
            `Model-enjinkap = werklike enjinkap × skaalfaktor = 150 × 1/6 = 25 cm.`,
            `<strong>Antwoord:</strong> Skaalfaktor = ${pu('1/6')}; model-enjinkap = ${gr('25 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — enlarge a point from the origin ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt M is by (4, 2). Dit word met skaalfaktor 3 vanaf die oorsprong vergroot. Vind die koördinate van die beeld M′.',
          answer: '(12, 6)',
          checkMode: 'auto',
          correctAnswer: '(12, 6)',
          correctAnswers: ['(12, 6)', '(12,6)'],
          explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 3: (x, y) → (3x, 3y).\nM(4, 2) → M\'(3×4, 3×2) = (12, 6) ✓',
        },

        // ── Q2 Medium — scale factor as a ratio of corresponding sides ────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek word vergroot. ʼn Sy op die objek meet 5 cm, en die ooreenstemmende sy op die beeld meet 20 cm.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Wat is die skaalfaktor van die vergroting?',
              correctAnswer: '4',
              correctAnswers: ['4', 'x4', 'skaalfaktor 4'],
              explanation: 'Skaalfaktor = beeldlengte ÷ objeklengte = 20 ÷ 5 = 4.',
            },
            {
              label: 'b) ʼn Ander sy op die objek meet 3 cm. Wat is die lengte van die ooreenstemmende sy op die beeld?',
              correctAnswer: '12',
              correctAnswers: ['12', '12cm', '12 cm'],
              explanation: 'Beeldlengte = objeklengte × skaalfaktor = 3 × 4 = 12 cm.',
            },
          ],
        },

        // ── Q3 Hard — congruent vs similar after a reduction ──────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoek word met ʼn skaalfaktor van 1/4 verklein om ʼn kleiner reghoek te vorm. Verduidelik of die objek en beeld kongruent of gelykvormig is, en beskryf wat met die hoeke en die sylengtes gebeur.',
          answer: 'Die objek en beeld is gelykvormig, nie kongruent nie (tensy die skaalfaktor presies 1 is). ʼn Verkleining met skaalfaktor 1/4 behou dieselfde vorm: al die hoeke bly presies dieselfde grootte (ʼn reghoek se hoeke bly steeds almal 90°), maar elke sylengte word met 1/4 vermenigvuldig, dus is die beeld ʼn kwart van die grootte van die objek in elke rigting. Omdat die grootte verander het, is die twee reghoeke nie kongruent nie — maar omdat die vorm (en al die hoeke) behou is, is hulle gelykvormig.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vorm op ʼn rooster te vergroot en te verklein deur strale vanaf ʼn middelpunt van vergroting te gebruik, ʼn skaalfaktor toe te pas, en ooreenstemmende sye en hoeke tussen die objek en die beeld te vergelyk" />',

      diagramSvg:
        '<svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="30" y1="190" x2="30" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="50" y1="190" x2="50" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="70" y1="190" x2="70" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="90" y1="190" x2="90" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="110" y1="190" x2="110" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="130" y1="190" x2="130" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="150" y1="190" x2="150" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="170" y1="190" x2="170" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="190" y1="190" x2="190" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="190" x2="190" y2="190" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="170" x2="190" y2="170" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="150" x2="190" y2="150" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="130" x2="190" y2="130" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="110" x2="190" y2="110" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="90" x2="190" y2="90" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="70" x2="190" y2="70" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="50" x2="190" y2="50" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="30" x2="190" y2="30" stroke="#e5e7eb" stroke-width="1"/>' +
        '<line x1="30" y1="190" x2="190" y2="190" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="30" y1="190" x2="30" y2="30" stroke="#374151" stroke-width="1.5"/>' +
        '<line x1="30" y1="190" x2="70" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="30" y1="190" x2="70" y2="70" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<line x1="30" y1="190" x2="150" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,3"/>' +
        '<polygon points="50,170 50,130 90,170" fill="none" stroke="#2563eb" stroke-width="2.5"/>' +
        '<polygon points="70,150 70,70 150,150" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="30" cy="190" r="4" fill="#ea580c"/>' +
        '<text x="8" y="184" font-size="11" font-weight="700" fill="#ea580c">O</text>' +
        '<text x="54" y="166" font-size="10" font-weight="700" fill="#2563eb">A(1,1)</text>' +
        '<text x="54" y="126" font-size="10" font-weight="700" fill="#2563eb">B(1,3)</text>' +
        '<text x="94" y="166" font-size="10" font-weight="700" fill="#2563eb">C(3,1)</text>' +
        '<text x="74" y="146" font-size="10" font-weight="700" fill="#16a34a">A\'(2,2)</text>' +
        '<text x="74" y="66" font-size="10" font-weight="700" fill="#16a34a">B\'(2,6)</text>' +
        '<text x="154" y="146" font-size="10" font-weight="700" fill="#16a34a">C\'(6,2)</text>' +
        '<text x="110" y="16" font-size="12" font-weight="700" fill="#7c3aed" text-anchor="middle">Skaalfaktor k = 2</text>' +
        '</svg>',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — reflection over a vertical line ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Punt by (2, 4) word oor die lyn x = 6 gereflekteer. Vind die beeld.',
      checkMode: 'auto',
      correctAnswer: '(10, 4)',
      correctAnswers: ['(10, 4)', '(10,4)'],
      explanation: 'Spieëllyn: x = 6 (vertikaal — slegs x verander).\nAfstand vanaf objek tot spieël: 6 − 2 = 4 eenhede.\nBeeld is 4 eenhede aan die ander kant: 6 + 4 = 10.\ny bly dieselfde: 4.\nBeeld = (10, 4) ✓',
    },

    // ── Q2 Medium — reflection over a horizontal line ────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (5, 9) word oor die lyn y = 4 gereflekteer. Vind die beeld.',
      checkMode: 'auto',
      correctAnswer: '(5, -1)',
      correctAnswers: ['(5, -1)', '(5,-1)', '(5, −1)', '(5,−1)'],
      explanation: 'Spieëllyn: y = 4 (horisontaal — slegs y verander).\nAfstand vanaf objek tot spieël: 9 − 4 = 5 eenhede.\nBeeld is 5 eenhede aan die ander kant: 4 − 5 = −1.\nx bly dieselfde: 5.\nBeeld = (5, −1) ✓',
    },

    // ── Q3 Hard — evaluate a claim about reflection ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die reflekteer van ʼn punt verander sy afstand vanaf die spieëllyn. Is hy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — die beeld is altyd dieselfde loodregte afstand vanaf die spieëllyn as die oorspronklike punt.',
    },

    // ── Q4 Easy — basic translation ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Punt by (3, 5) word met (2, 4) getransleer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(5, 9)',
      correctAnswers: ['(5, 9)', '(5,9)'],
      explanation: 'Nuwe x: 3 + 2 = 5.\nNuwe y: 5 + 4 = 9.\nNuwe posisie = (5, 9) ✓',
    },

    // ── Q5 Medium — translation with negative components ─────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (−3, 6) word met (5, −2) getransleer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(2, 4)',
      correctAnswers: ['(2, 4)', '(2,4)'],
      explanation: 'Nuwe x: −3 + 5 = 2.\nNuwe y: 6 + (−2) = 4.\nNuwe posisie = (2, 4) ✓',
    },

    // ── Q6 Hard — combining two translations ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato transleer ʼn vorm met (4, −3) en dan weer met (−1, 5). Wat is die netto translasie?',
      checkMode: 'self',
      answer: 'Tel die translasies bymekaar: (4 + (−1), −3 + 5) = (3, 2). Die netto translasie is (3, 2).',
    },

    // ── Q7 Easy — quarter turn ────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel grade is ʼn kwartdraai?',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 grade'],
      explanation: 'ʼn Kwartdraai = 90°. ʼn Halwe draai = 180°. ʼn Volle draai = 360°.',
    },

    // ── Q8 Medium — 90° clockwise rotation ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (4, 1) word 90° kloksgewys om die oorsprong geroteer met (x, y) → (y, −x). Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(1, -4)',
      correctAnswers: ['(1, -4)', '(1,-4)', '(1, −4)', '(1,−4)'],
      explanation: 'Reël: (x, y) → (y, −x).\nNuwe x = y = 1.\nNuwe y = −x = −4.\nNuwe punt = (1, −4) ✓',
    },

    // ── Q9 Hard — 180° rotation with explanation ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo roteer ʼn punt by (−2, 3) met 180° om die oorsprong. Vind die nuwe posisie en verduidelik die reël wat gebruik is.',
      checkMode: 'self',
      answer: 'Nuwe posisie = (2, −3), met die reël (x, y) → (−x, −y) vir ʼn 180°-rotasie.',
    },

    // ── Q10 Medium — 180° rotation ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Punt by (6, −4) word 180° om die oorsprong geroteer. Vind die nuwe posisie.',
      checkMode: 'auto',
      correctAnswer: '(-6, 4)',
      correctAnswers: ['(-6, 4)', '(-6,4)', '(−6, 4)', '(−6,4)'],
      explanation: 'Reël: (x, y) → (−x, −y).\nNuwe x = −6.\nNuwe y = −(−4) = 4.\nNuwe punt = (−6, 4) ✓',
    },

    // ── Q11 Hard — evaluate a claim about rotation ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê rotasie verander altyd die grootte van ʼn vorm. Is sy korrek? Verduidelik.',
      checkMode: 'self',
      answer: 'Nee — rotasie hou die vorm kongruent (dieselfde grootte), en verander slegs die oriëntasie.',
    },

    // ── Q12 Hard — combined translation and reflection ────────────────────────
    {
      difficulty: 'Hard',
      question: "ʼn Driehoek se hoekpunt by (1, 2) word met (3, 1) getransleer en dan oor die lyn x = 8 gereflekteer. Vind die finale posisie.",
      checkMode: 'self',
      answer: 'Ná translasie: (1 + 3, 2 + 1) = (4, 3). Afstand vanaf die spieëllyn x = 8: 8 − 4 = 4 eenhede. Gereflekteerde posisie: 8 + 4 = 12. Finale posisie = (12, 3).',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE
  // Vaardigheidsblokke (dieselfde relatiewe posisie in elke stel):
  //   Blok A (V1-3)   Benoem/identifiseer transformasietipe, beskryf ʼn
  //                    karteering, kongruent vs gelykvormig konsep
  //   Blok B (V4-7)   Refleksie met koördinate (x-as, y-as, gegewe lyn)
  //   Blok C (V8-10)  Translasie met koördinate
  //   Blok D (V11-14) Rotasie (90°/180°/270°) om die oorsprong
  //   Blok E (V15-17) Vergroting/verkleining met ʼn skaalfaktor
  //   Blok F (V18-20) Multi-stap kombinasies / kongruent vs gelykvormig redenering
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok A — Benoem/identifiseer transformasietipe (V1-3) ────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm word om ʼn vaste middelpunt gedraai deur ʼn gegewe hoek, sonder om sy grootte te verander. Watter tipe transformasie is dit?',
          answer: 'rotasie',
          checkMode: 'auto',
          correctAnswer: 'rotasie',
          correctAnswers: ['rotasie', 'ʼn rotasie'],
          explanation: 'Om ʼn vorm om ʼn vaste middelpunt deur ʼn hoek te draai, word ʼn rotasie genoem.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm word groter of kleiner gemaak deur ʼn skaalfaktor te gebruik, terwyl dieselfde vorm behou word. Watter tipe transformasie is dit?',
          answer: 'vergroting',
          checkMode: 'auto',
          correctAnswer: 'vergroting',
          correctAnswers: ['vergroting', 'ʼn vergroting', 'vergroting/verkleining'],
          explanation: 'Om die grootte van ʼn vorm met ʼn skaalfaktor te verander (dit groter of kleiner te maak terwyl dieselfde vorm behou word) word ʼn vergroting genoem. As die skaalfaktor kleiner as 1 is, word dit soms ʼn verkleining genoem, maar dit word steeds as ʼn vergroting geklassifiseer.',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek A het hoekpunte (1, 1), (4, 1), (1, 5). Driehoek B het hoekpunte (2, 1), (5, 1), (2, 5). Beskryf die enkele transformasie wat driehoek A op driehoek B karteer.',
          answer: 'Translasie met (1, 0)',
          checkMode: 'auto',
          correctAnswer: 'Translasie met (1, 0)',
          correctAnswers: ['Translasie met (1, 0)', 'translasie (1,0)', 'translasie van (1,0)', 'transleer met (1,0)', '(1, 0)', '(1,0)'],
          explanation: 'Vergelyk ooreenstemmende hoekpunte: (1,1) → (2,1) is +1 in x, 0 in y. (4,1) → (5,1) is dieselfde skuif. (1,5) → (2,5) is weer dieselfde skuif.\nElke punt beweeg met dieselfde bedrag in dieselfde rigting, en die vorm draai of flip nie, dus is dit ʼn translasie met (1, 0) ✓',
        },

        // ── Blok B — Refleksie met koördinate (V4-7) ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt P is by (4, 7). Dit word oor die x-as gereflekteer, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(4, -7)',
          checkMode: 'auto',
          correctAnswer: '(4, -7)',
          correctAnswers: ['(4, -7)', '(4,-7)', '(4, −7)', '(4,−7)'],
          explanation: 'Refleksie oor die x-as: (x, y) → (x, −y).\nP(4, 7) → P\'(4, −7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="160.7" font-size="11" fill="#374151">x</text><text x="32.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="26.0" y="65.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="26.0" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="152.7" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="47.3" r="4" fill="#2563eb"/><text x="126.0" y="41.3" font-size="12" font-weight="700" fill="#2563eb">P(4, 7)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Punt Q is by (3, 5). Dit word oor die y-as gereflekteer, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(-3, 5)',
          checkMode: 'auto',
          correctAnswer: '(-3, 5)',
          correctAnswers: ['(-3, 5)', '(-3,5)', '(−3, 5)', '(−3,5)'],
          explanation: 'Refleksie oor die y-as: (x, y) → (−x, y).\nQ(3, 5) → Q\'(−3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#374151" stroke-width="1.5"/><text x="73.7" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="131.4" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="181.1" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="75.7" y="148.0" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="75.7" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="85.7" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="156.3" cy="102.0" r="4" fill="#2563eb"/><text x="163.3" y="96.0" font-size="12" font-weight="700" fill="#2563eb">Q(3, 5)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt R is by (2, 6). Dit word oor die vertikale lyn x = 5 gereflekteer, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Spieëllyn x = 5. Afstand van R tot die lyn: 5 − 2 = 3 eenhede.\nDie beeld is 3 eenhede aan die ander kant: 5 + 3 = 8.\nDie y-koördinaat bly dieselfde.\nR\' = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="61.3" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="94.1" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="143.9" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="168.7" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="193.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="63.3" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="63.3" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="63.3" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="63.3" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="63.3" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="63.3" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="135.4" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 5</text><circle cx="94.1" cy="68.9" r="4" fill="#2563eb"/><text x="101.1" y="62.9" font-size="12" font-weight="700" fill="#2563eb">R(2, 6)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Driehoek ABC het hoekpunte A(2, 3), B(5, 3), C(5, 6), soos gewys. Dit word oor die x-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(2,-3) B'(5,-3) C'(5,-6)",
          checkMode: 'auto',
          correctAnswer: "A'(2,-3) B'(5,-3) C'(5,-6)",
          correctAnswers: ["A'(2,-3) B'(5,-3) C'(5,-6)", "A'(2, -3) B'(5, -3) C'(5, -6)", "A'(2,−3) B'(5,−3) C'(5,−6)"],
          explanation: "Refleksie oor die x-as: (x, y) → (x, −y).\nA(2, 3) → A'(2, −3).\nB(5, 3) → B'(5, −3).\nC(5, 6) → C'(5, −6). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="69.5" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="141.0" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><polygon points="104.5,102.0 148.0,102.0 148.0,59.0" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="104.5" cy="102.0" r="4" fill="#2563eb"/><circle cx="148.0" cy="102.0" r="4" fill="#2563eb"/><circle cx="148.0" cy="59.0" r="4" fill="#2563eb"/><text x="111.5" y="96.0" font-size="12" font-weight="700" fill="#2563eb">A(2, 3)</text><text x="155.0" y="96.0" font-size="12" font-weight="700" fill="#2563eb">B(5, 3)</text><text x="155.0" y="53.0" font-size="12" font-weight="700" fill="#2563eb">C(5, 6)</text></svg>',
        },

        // ── Blok C — Translasie met koördinate (V8-10) ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (3, 4). Dit word 5 eenhede regs en 2 eenhede op getransleer, soos gewys. Vind die nuwe koördinate van A\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Translasie van (5, 2): (x, y) → (x + 5, y + 2).\nA(3, 4) → A\'(3 + 5, 4 + 2) = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="43.6" y1="188.0" x2="43.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="55.2" y1="188.0" x2="55.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="78.4" y1="188.0" x2="78.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.2" y1="188.0" x2="113.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.8" y1="188.0" x2="124.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="188.0" x2="159.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="182.8" y1="188.0" x2="182.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="194.4" y1="188.0" x2="194.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="43.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="90.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="113.2" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="136.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="159.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="182.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="206.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="60.8" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="60.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="101.6" cy="95.4" r="4" fill="#2563eb"/><line x1="101.6" y1="95.4" x2="136.2" y2="79.6" stroke="#ea580c" stroke-width="2.5"/><polygon points="136.2,79.6 132.3,84.2 130.2,79.5" fill="#ea580c"/><text x="122.3" y="95.1" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">5 right, 2 up</text><text x="108.6" y="89.4" font-size="12" font-weight="700" fill="#2563eb">A(3, 4)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek ABC het hoekpunte A(1, 1), B(3, 1), C(1, 4), soos gewys. Dit word met (−2, 3) getransleer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(-1,4) B'(1,4) C'(-1,7)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,4) B'(1,4) C'(-1,7)",
          correctAnswers: ["A'(-1,4) B'(1,4) C'(-1,7)", "A'(-1, 4) B'(1, 4) C'(-1, 7)", "A'(−1,4) B'(1,4) C'(−1,7)"],
          explanation: "Translasie van (−2, 3): (x, y) → (x − 2, y + 3).\nA(1, 1) → A'(−1, 4).\nB(3, 1) → B'(1, 4).\nC(1, 4) → C'(−1, 7). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="96.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="75.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="133.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="162.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="191.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="98.5" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="98.5" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="98.5" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="98.5" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="98.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><polygon points="119.0,125.5 148.0,125.5 119.0,78.5" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="119.0" cy="125.5" r="4" fill="#2563eb"/><circle cx="148.0" cy="125.5" r="4" fill="#2563eb"/><circle cx="119.0" cy="78.5" r="4" fill="#2563eb"/><line x1="119.0" y1="125.5" x2="99.0" y2="93.1" stroke="#ea580c" stroke-width="2.5"/><polygon points="99.0,93.1 104.1,96.4 99.7,99.1" fill="#ea580c"/><text x="117.2" y="104.2" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (-2, 3)</text><text x="126.0" y="119.5" font-size="12" font-weight="700" fill="#2563eb">A(1, 1)</text><text x="155.0" y="119.5" font-size="12" font-weight="700" fill="#2563eb">B(3, 1)</text><text x="126.0" y="72.5" font-size="12" font-weight="700" fill="#2563eb">C(1, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Student transleer die punt (5, −2) met (−3, 4) en skryf die beeld as (8, 2). Is dit korrek? Indien nie, vind die korrekte beeld.',
          answer: 'Nee, die korrekte beeld is (2, 2).',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)', 'Nee, (2,2)', 'Nee, die korrekte beeld is (2, 2).'],
          explanation: 'Korrekte reël: (x, y) → (x + (−3), y + 4).\n(5, −2) → (5 − 3, −2 + 4) = (2, 2).\nDie student het 3 bygetel in plaas daarvan om dit van die x-koördinaat af te trek, wat 8 in plaas van 2 gee. Die korrekte beeld is (2, 2) ✓',
        },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (4, 2). Dit word 90° kloksgewys om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (y, −x) om die beeld A\' te vind.',
          answer: '(2, -4)',
          checkMode: 'auto',
          correctAnswer: '(2, -4)',
          correctAnswers: ['(2, -4)', '(2,-4)', '(2, −4)', '(2,−4)'],
          explanation: 'Reël: (x, y) → (y, −x).\nA(4, 2) → A\'(2, −4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="79.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="67.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="142.7" cy="92.4" r="4" fill="#2563eb"/><text x="149.7" y="86.4" font-size="12" font-weight="700" fill="#2563eb">A(4, 2)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt B is by (3, −5). Dit word 180° om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.',
          answer: '(-3, 5)',
          checkMode: 'auto',
          correctAnswer: '(-3, 5)',
          correctAnswers: ['(-3, 5)', '(-3,5)', '(−3, 5)', '(−3,5)'],
          explanation: 'Reël: (x, y) → (−x, −y).\nB(3, −5) → B\'(−3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="66.9" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="74.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-8</text><text x="78.2" y="159.7" font-size="8" fill="#9ca3af" text-anchor="end">-6</text><text x="78.2" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="78.2" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">2</text><circle cx="84.2" cy="62.9" r="3.5" fill="#ea580c"/><text x="72.2" y="76.9" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="136.4" cy="141.1" r="4" fill="#2563eb"/><text x="143.4" y="135.1" font-size="12" font-weight="700" fill="#2563eb">B(3, -5)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt C is by (2, 6). Dit word 270° kloksgewys om die oorsprong geroteer, soos gewys. Vind die beeld C\' (270° kloksgewys gee dieselfde beeld as 90° anti-kloksgewys: (x, y) → (−y, x)).',
          answer: '(-6, 2)',
          checkMode: 'auto',
          correctAnswer: '(-6, 2)',
          correctAnswers: ['(-6, 2)', '(-6,2)', '(−6, 2)', '(−6,2)'],
          explanation: 'ʼn 270° kloksgewyse rotasie is dieselfde as ʼn 90° anti-kloksgewyse rotasie: (x, y) → (−y, x).\nC(2, 6) → C\'(−6, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="90.0" cy="145.0" r="3.5" fill="#ea580c"/><text x="78.0" y="159.0" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="128.7" cy="59.0" r="4" fill="#2563eb"/><text x="135.7" y="53.0" font-size="12" font-weight="700" fill="#2563eb">C(2, 6)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Driehoek ABC het hoekpunte A(1, 2), B(4, 2), C(4, 5), soos gewys. Dit word 90° kloksgewys om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(2,-1) B'(2,-4) C'(5,-4)",
          checkMode: 'auto',
          correctAnswer: "A'(2,-1) B'(2,-4) C'(5,-4)",
          correctAnswers: ["A'(2,-1) B'(2,-4) C'(5,-4)", "A'(2, -1) B'(2, -4) C'(5, -4)", "A'(2,−1) B'(2,−4) C'(5,−4)"],
          explanation: "Reël vir 90° kloksgewys: (x, y) → (y, −x).\nA(1, 2) → A'(2, −1).\nB(4, 2) → B'(2, −4).\nC(4, 5) → C'(5, −4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="84.2" cy="141.1" r="3.5" fill="#ea580c"/><text x="72.2" y="155.1" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="101.6,109.8 153.8,109.8 153.8,62.9" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="109.8" r="4" fill="#2563eb"/><circle cx="153.8" cy="109.8" r="4" fill="#2563eb"/><circle cx="153.8" cy="62.9" r="4" fill="#2563eb"/><text x="108.6" y="103.8" font-size="12" font-weight="700" fill="#2563eb">A(1, 2)</text><text x="160.8" y="103.8" font-size="12" font-weight="700" fill="#2563eb">B(4, 2)</text><text x="160.8" y="56.9" font-size="12" font-weight="700" fill="#2563eb">C(4, 5)</text></svg>',
        },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ──────────
        {
          difficulty: 'Easy-Medium',
          question: 'Punt P is by (2, 3). Dit word met skaalfaktor 2 vanaf die oorsprong vergroot, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(4, 6)',
          checkMode: 'auto',
          correctAnswer: '(4, 6)',
          correctAnswers: ['(4, 6)', '(4,6)'],
          explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 2: (x, y) → (2x, 2y).\nP(2, 3) → P\'(2×2, 2×3) = (4, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="90.0" y1="136.4" x2="140.3" y2="69.3" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="90.0" cy="136.4" r="3.5" fill="#ea580c"/><text x="78.0" y="150.4" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="128.7" cy="84.8" r="4" fill="#2563eb"/><text x="135.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">P(2, 3)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt Q is by (4, 3). Dit word met skaalfaktor 3 vanaf die middelpunt (1, 1) vergroot, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(10, 7)',
          checkMode: 'auto',
          correctAnswer: '(10, 7)',
          correctAnswers: ['(10, 7)', '(10,7)'],
          explanation: 'Vergroting vanaf middelpunt (1, 1) met skaalfaktor 3: (x, y) → (1 + 3(x − 1), 1 + 3(y − 1)).\nQ(4, 3): nuwe x = 1 + 3(4 − 1) = 1 + 9 = 10. nuwe y = 1 + 3(3 − 1) = 1 + 6 = 7.\nQ\' = (10, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="95.3" y1="119.2" x2="157.0" y2="74.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="119.2" r="3.5" fill="#ea580c"/><text x="101.3" y="113.2" font-size="11" font-weight="700" fill="#ea580c">centre (1, 1)</text><circle cx="142.7" cy="84.8" r="4" fill="#2563eb"/><text x="149.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">Q(4, 3)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Punt R is by (8, 6). Dit word met skaalfaktor 0,5 vanaf die oorsprong verklein, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(4, 3)',
          checkMode: 'auto',
          correctAnswer: '(4, 3)',
          correctAnswers: ['(4, 3)', '(4,3)'],
          explanation: 'Verkleining vanaf die oorsprong met skaalfaktor 0,5: (x, y) → (0,5x, 0,5y).\nR(8, 6) → R\'(0,5×8, 0,5×6) = (4, 3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="173.7" x2="206.0" y2="173.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="116.3" x2="206.0" y2="116.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="87.7" x2="206.0" y2="87.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="30.3" x2="206.0" y2="30.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="61.3" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="94.1" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="119.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="143.9" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="168.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="193.6" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="63.3" y="176.7" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="63.3" y="119.3" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="63.3" y="90.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="63.3" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="63.3" y="33.3" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="69.3" y1="145.0" x2="198.5" y2="33.2" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="69.3" cy="145.0" r="3.5" fill="#ea580c"/><text x="57.3" y="159.0" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="168.7" cy="59.0" r="4" fill="#2563eb"/><text x="175.7" y="53.0" font-size="12" font-weight="700" fill="#2563eb">R(8, 6)</text></svg>',
        },

        // ── Blok F — Multi-stap / kongruent vs gelykvormig (V18-20) ──────────
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (1, 3). Dit word met (4, −1) getransleer, en die resultaat word dan oor die x-as gereflekteer. Vind die finale posisie.',
          answer: '(5, -2)',
          checkMode: 'auto',
          correctAnswer: '(5, -2)',
          correctAnswers: ['(5, -2)', '(5,-2)', '(5, −2)', '(5,−2)'],
          explanation: 'Stap 1 — transleer met (4, −1): (1 + 4, 3 − 1) = (5, 2).\nStap 2 — reflekteer oor die x-as: (5, 2) → (5, −2).\nFinale posisie = (5, −2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (2, 5). Dit word 90° kloksgewys om die oorsprong geroteer, en die resultaat word dan met (−3, 4) getransleer. Vind die finale posisie.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)'],
          explanation: 'Stap 1 — roteer 90° kloksgewys: (x, y) → (y, −x). (2, 5) → (5, −2).\nStap 2 — transleer met (−3, 4): (5 − 3, −2 + 4) = (2, 2).\nFinale posisie = (2, 2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vorm word met skaalfaktor 3 vergroot. Die beeld word dan met die oorspronklike vorm vergelyk. Is die twee vorms kongruent, gelykvormig, of nie een van die twee nie? Verduidelik jou antwoord.',
          checkMode: 'self',
          answer: 'Gelykvormig, nie kongruent nie. ʼn Vergroting verander die grootte van ʼn vorm (alle sye word met die skaalfaktor vermenigvuldig) maar behou dieselfde vorm en gelyke hoeke, dus is die objek en beeld gelykvormig maar nie kongruent nie — kongruente vorms moet presies dieselfde grootte wees, wat slegs waar is wanneer die skaalfaktor 1 of −1 is.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die benoem van transformasies, refleksie, translasie, rotasie en vergroting van vorms op die koördinaatvlak bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste van hierdie — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die koördinaatreëls vir refleksie, rotasie en vergroting, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok A — Benoem/identifiseer transformasietipe (V1-3) ────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm skuif na ʼn nuwe posisie sonder om te draai of te flip, met elke punt wat dieselfde afstand in dieselfde rigting beweeg. Watter tipe transformasie is dit?',
          answer: 'translasie',
          checkMode: 'auto',
          correctAnswer: 'translasie',
          correctAnswers: ['translasie', 'ʼn translasie'],
          explanation: 'Om ʼn vorm te skuif sonder om dit te draai of te flip, sodat elke punt dieselfde afstand in dieselfde rigting beweeg, word ʼn translasie genoem.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm word oor ʼn lyn geflip sodat die beeld ʼn spieëlbeeld van die objek is. Watter tipe transformasie is dit?',
          answer: 'refleksie',
          checkMode: 'auto',
          correctAnswer: 'refleksie',
          correctAnswers: ['refleksie', 'ʼn refleksie'],
          explanation: 'Om ʼn vorm oor ʼn lyn te flip om ʼn spieëlbeeld te produseer, word ʼn refleksie genoem.',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek A het hoekpunte (1, 1), (4, 1), (1, 3). Driehoek B het hoekpunte (1, −1), (4, −1), (1, −3). Beskryf die enkele transformasie wat driehoek A op driehoek B karteer.',
          answer: 'Refleksie oor die x-as',
          checkMode: 'auto',
          correctAnswer: 'Refleksie oor die x-as',
          correctAnswers: ['Refleksie oor die x-as', 'refleksie oor x-as', 'gereflekteer oor die x-as'],
          explanation: 'Vergelyk ooreenstemmende hoekpunte: (1,1) → (1,−1), (4,1) → (4,−1), (1,3) → (1,−3).\nElke y-koördinaat het van teken verander terwyl elke x-koördinaat dieselfde gebly het — dit is die reël vir refleksie oor die x-as: (x, y) → (x, −y) ✓',
        },

        // ── Blok B — Refleksie met koördinate (V4-7) ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt P is by (6, 2). Dit word oor die y-as gereflekteer, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(-6, 2)',
          checkMode: 'auto',
          correctAnswer: '(-6, 2)',
          correctAnswers: ['(-6, 2)', '(-6,2)', '(−6, 2)', '(−6,2)'],
          explanation: 'Refleksie oor die y-as: (x, y) → (−x, y).\nP(6, 2) → P\'(−6, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="41.7" y1="188.0" x2="41.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="80.3" y1="188.0" x2="80.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="99.7" y1="188.0" x2="99.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="138.3" y1="188.0" x2="138.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="157.7" y1="188.0" x2="157.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="196.3" y1="188.0" x2="196.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="127.5" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="41.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-8</text><text x="61.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="80.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="99.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="138.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="157.7" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="177.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="196.3" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="113.0" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="83.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="123.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="177.0" cy="80.5" r="4" fill="#2563eb"/><text x="184.0" y="74.5" font-size="12" font-weight="700" fill="#2563eb">P(6, 2)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Punt Q is by (5, 9). Dit word oor die x-as gereflekteer, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(5, -9)',
          checkMode: 'auto',
          correctAnswer: '(5, -9)',
          correctAnswers: ['(5, -9)', '(5,-9)', '(5, −9)', '(5,−9)'],
          explanation: 'Refleksie oor die x-as: (x, y) → (x, −y).\nQ(5, 9) → Q\'(5, −9) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="165.5" font-size="11" fill="#374151">x</text><text x="75.5" y="173.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="173.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="138.1" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="111.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="26.0" y="85.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="26.0" y="58.7" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="26.0" y="32.2" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="157.5" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="42.5" r="4" fill="#2563eb"/><text x="126.0" y="36.5" font-size="12" font-weight="700" fill="#2563eb">Q(5, 9)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt R is by (3, 1). Dit word oor die horisontale lyn y = 4 gereflekteer, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(3, 7)',
          checkMode: 'auto',
          correctAnswer: '(3, 7)',
          correctAnswers: ['(3, 7)', '(3,7)'],
          explanation: 'Spieëllyn y = 4. Afstand van R tot die lyn: 4 − 1 = 3 eenhede.\nDie beeld is 3 eenhede aan die ander kant: 4 + 3 = 7.\nDie x-koördinaat bly dieselfde.\nR\' = (3, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="91.4" font-size="11" font-weight="700" fill="#dc2626">y = 4</text><circle cx="136.4" cy="135.1" r="4" fill="#2563eb"/><text x="143.4" y="129.1" font-size="12" font-weight="700" fill="#2563eb">R(3, 1)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Driehoek ABC het hoekpunte A(1, 2), B(4, 2), C(4, 5), soos gewys. Dit word oor die y-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(-1,2) B'(-4,2) C'(-4,5)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,2) B'(-4,2) C'(-4,5)",
          correctAnswers: ["A'(-1,2) B'(-4,2) C'(-4,5)", "A'(-1, 2) B'(-4, 2) C'(-4, 5)", "A'(−1,2) B'(−4,2) C'(−4,5)"],
          explanation: "Refleksie oor die y-as: (x, y) → (−x, y).\nA(1, 2) → A'(−1, 2).\nB(4, 2) → B'(−4, 2).\nC(4, 5) → C'(−4, 5). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="44.4" y1="188.0" x2="44.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="56.9" y1="188.0" x2="56.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="69.3" y1="188.0" x2="69.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="81.7" y1="188.0" x2="81.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="94.1" y1="188.0" x2="94.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="106.6" y1="188.0" x2="106.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="131.4" y1="188.0" x2="131.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="143.9" y1="188.0" x2="143.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="156.3" y1="188.0" x2="156.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="168.7" y1="188.0" x2="168.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="181.1" y1="188.0" x2="181.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="193.6" y1="188.0" x2="193.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="44.4" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="69.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="94.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="143.9" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="168.7" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="193.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="113.0" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="113.0" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="113.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="123.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><polygon points="131.4,109.8 168.7,109.8 168.7,62.9" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="131.4" cy="109.8" r="4" fill="#2563eb"/><circle cx="168.7" cy="109.8" r="4" fill="#2563eb"/><circle cx="168.7" cy="62.9" r="4" fill="#2563eb"/><text x="138.4" y="103.8" font-size="12" font-weight="700" fill="#2563eb">A(1, 2)</text><text x="175.7" y="103.8" font-size="12" font-weight="700" fill="#2563eb">B(4, 2)</text><text x="175.7" y="56.9" font-size="12" font-weight="700" fill="#2563eb">C(4, 5)</text></svg>',
        },

        // ── Blok C — Translasie met koördinate (V8-10) ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (−2, 6). Dit word 4 eenhede regs en 5 eenhede af getransleer, soos gewys. Vind die nuwe koördinate van A\'.',
          answer: '(2, 1)',
          checkMode: 'auto',
          correctAnswer: '(2, 1)',
          correctAnswers: ['(2, 1)', '(2,1)'],
          explanation: 'Translasie van (4, −5): (x, y) → (x + 4, y − 5).\nA(−2, 6) → A\'(−2 + 4, 6 − 5) = (2, 1) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="160.7" font-size="11" fill="#374151">x</text><text x="111.0" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="84.2" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="153.8" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="188.6" y="168.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="113.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="113.0" y="128.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="113.0" y="97.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="113.0" y="65.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="113.0" y="34.6" font-size="8" fill="#9ca3af" text-anchor="end">8</text><circle cx="84.2" cy="62.9" r="4" fill="#2563eb"/><line x1="84.2" y1="62.9" x2="109.5" y2="91.3" stroke="#ea580c" stroke-width="2.5"/><polygon points="109.5,91.3 103.9,88.9 107.8,85.5" fill="#ea580c"/><text x="93.0" y="80.5" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">4 right, 5 down</text><text x="91.2" y="56.9" font-size="12" font-weight="700" fill="#2563eb">A(-2, 6)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek ABC het hoekpunte A(2, 2), B(5, 2), C(2, 5), soos gewys. Dit word met (3, −4) getransleer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(5,-2) B'(8,-2) C'(5,1)",
          checkMode: 'auto',
          correctAnswer: "A'(5,-2) B'(8,-2) C'(5,1)",
          correctAnswers: ["A'(5,-2) B'(8,-2) C'(5,1)", "A'(5, -2) B'(8, -2) C'(5, 1)", "A'(5,−2) B'(8,−2) C'(5,1)"],
          explanation: "Translasie van (3, −4): (x, y) → (x + 3, y − 4).\nA(2, 2) → A'(5, −2).\nB(5, 2) → B'(8, −2).\nC(2, 5) → C'(5, 1). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="157.6" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="101.6" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="136.4" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="171.2" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="60.8" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="122.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="87.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="53.4" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><polygon points="101.6,119.2 153.8,119.2 101.6,67.6" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="119.2" r="4" fill="#2563eb"/><circle cx="153.8" cy="119.2" r="4" fill="#2563eb"/><circle cx="101.6" cy="67.6" r="4" fill="#2563eb"/><line x1="101.6" y1="119.2" x2="124.6" y2="149.5" stroke="#ea580c" stroke-width="2.5"/><polygon points="124.6,149.5 119.2,146.7 123.3,143.6" fill="#ea580c"/><text x="108.2" y="138.1" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (3, -4)</text><text x="108.6" y="113.2" font-size="12" font-weight="700" fill="#2563eb">A(2, 2)</text><text x="160.8" y="113.2" font-size="12" font-weight="700" fill="#2563eb">B(5, 2)</text><text x="108.6" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(2, 5)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Student transleer die punt (4, 3) met (−6, −1) en skryf die beeld as (10, 2). Is dit korrek? Indien nie, vind die korrekte beeld.',
          answer: 'Nee, die korrekte beeld is (-2, 2).',
          checkMode: 'auto',
          correctAnswer: '(-2, 2)',
          correctAnswers: ['(-2, 2)', '(-2,2)', '(−2, 2)', '(−2,2)', 'Nee, (-2,2)', 'Nee, die korrekte beeld is (-2, 2).'],
          explanation: 'Korrekte reël: (x, y) → (x + (−6), y + (−1)).\n(4, 3) → (4 − 6, 3 − 1) = (−2, 2).\nDie student het by die x-koördinaat afgetrek in plaas van bygetel, wat 10 in plaas van −2 gee. Die korrekte beeld is (−2, 2) ✓',
        },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (5, 1). Dit word 90° anti-kloksgewys om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (−y, x) om die beeld A\' te vind.',
          answer: '(-1, 5)',
          checkMode: 'auto',
          correctAnswer: '(-1, 5)',
          correctAnswers: ['(-1, 5)', '(-1,5)', '(−1, 5)', '(−1,5)'],
          explanation: 'Reël: (x, y) → (−y, x).\nA(5, 1) → A\'(−1, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="127.5" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="61.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="148.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="177.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="135.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="84.0" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="83.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><circle cx="90.0" cy="123.5" r="3.5" fill="#ea580c"/><text x="78.0" y="137.5" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="102.0" r="4" fill="#2563eb"/><text x="169.5" y="96.0" font-size="12" font-weight="700" fill="#2563eb">A(5, 1)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt B is by (−4, 7). Dit word 180° om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.',
          answer: '(4, -7)',
          checkMode: 'auto',
          correctAnswer: '(4, -7)',
          correctAnswers: ['(4, -7)', '(4,-7)', '(4, −7)', '(4,−7)'],
          explanation: 'Reël: (x, y) → (−x, −y).\nB(−4, 7) → B\'(4, −7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="145.8" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-6</text><text x="84.2" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-4</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="147.8" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="147.8" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="147.8" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="147.8" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="147.8" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="147.8" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="153.8" cy="148.3" r="3.5" fill="#ea580c"/><text x="141.8" y="162.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="84.2" cy="55.7" r="4" fill="#2563eb"/><text x="91.2" y="49.7" font-size="12" font-weight="700" fill="#2563eb">B(-4, 7)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt C is by (3, 4). Dit word 270° anti-kloksgewys om die oorsprong geroteer, soos gewys. Vind die beeld C\' (270° anti-kloksgewys gee dieselfde beeld as 90° kloksgewys: (x, y) → (y, −x)).',
          answer: '(4, -3)',
          checkMode: 'auto',
          correctAnswer: '(4, -3)',
          correctAnswers: ['(4, -3)', '(4,-3)', '(4, −3)', '(4,−3)'],
          explanation: 'ʼn 270° anti-kloksgewyse rotasie is dieselfde as ʼn 90° kloksgewyse rotasie: (x, y) → (y, −x).\nC(3, 4) → C\'(4, −3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="84.2" cy="136.4" r="3.5" fill="#ea580c"/><text x="72.2" y="150.4" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="136.4" cy="67.6" r="4" fill="#2563eb"/><text x="143.4" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(3, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Driehoek ABC het hoekpunte A(2, 1), B(5, 1), C(5, 3), soos gewys. Dit word 180° om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(-2,-1) B'(-5,-1) C'(-5,-3)",
          checkMode: 'auto',
          correctAnswer: "A'(-2,-1) B'(-5,-1) C'(-5,-3)",
          correctAnswers: ["A'(-2,-1) B'(-5,-1) C'(-5,-3)", "A'(-2, -1) B'(-5, -1) C'(-5, -3)", "A'(−2,−1) B'(−5,−1) C'(−5,−3)"],
          explanation: "Reël vir 180°: (x, y) → (−x, −y).\nA(2, 1) → A'(−2, −1).\nB(5, 1) → B'(−5, −1).\nC(5, 3) → C'(−5, −3). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="73.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="73.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="79.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="67.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="111.1,111.6 158.5,111.6 158.5,73.3" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="111.1" cy="111.6" r="4" fill="#2563eb"/><circle cx="158.5" cy="111.6" r="4" fill="#2563eb"/><circle cx="158.5" cy="73.3" r="4" fill="#2563eb"/><text x="118.1" y="105.6" font-size="12" font-weight="700" fill="#2563eb">A(2, 1)</text><text x="165.5" y="105.6" font-size="12" font-weight="700" fill="#2563eb">B(5, 1)</text><text x="165.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">C(5, 3)</text></svg>',
        },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ──────────
        {
          difficulty: 'Easy-Medium',
          question: 'Punt P is by (1, 2). Dit word met skaalfaktor 3 vanaf die oorsprong vergroot, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(3, 6)',
          checkMode: 'auto',
          correctAnswer: '(3, 6)',
          correctAnswers: ['(3, 6)', '(3,6)'],
          explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 3: (x, y) → (3x, 3y).\nP(1, 2) → P\'(3×1, 3×2) = (3, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="53.8" y1="188.0" x2="53.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="97.2" y1="188.0" x2="97.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="140.8" y1="188.0" x2="140.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="184.2" y1="188.0" x2="184.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="97.2" y1="188.0" x2="97.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="89.2" y="184.0" font-size="11" fill="#374151">y</text><text x="53.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="140.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="184.2" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="91.2" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="91.2" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="91.2" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="91.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="97.2" y1="130.7" x2="125.5" y2="81.0" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="97.2" cy="130.7" r="3.5" fill="#ea580c"/><text x="85.2" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="119.0" cy="92.4" r="4" fill="#2563eb"/><text x="126.0" y="86.4" font-size="12" font-weight="700" fill="#2563eb">P(1, 2)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt Q is by (5, 4). Dit word met skaalfaktor 2 vanaf die middelpunt (2, 2) vergroot, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(8, 6)',
          checkMode: 'auto',
          correctAnswer: '(8, 6)',
          correctAnswers: ['(8, 6)', '(8,6)'],
          explanation: 'Vergroting vanaf middelpunt (2, 2) met skaalfaktor 2: (x, y) → (2 + 2(x − 2), 2 + 2(y − 2)).\nQ(5, 4): nuwe x = 2 + 2(5 − 2) = 2 + 6 = 8. nuwe y = 2 + 2(4 − 2) = 2 + 4 = 6.\nQ\' = (8, 6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="157.6" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="165.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="57.6" y="122.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="87.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="53.4" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="57.6" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="95.3" y1="119.2" x2="157.0" y2="74.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="119.2" r="3.5" fill="#ea580c"/><text x="101.3" y="113.2" font-size="11" font-weight="700" fill="#ea580c">centre (2, 2)</text><circle cx="142.7" cy="84.8" r="4" fill="#2563eb"/><text x="149.7" y="78.8" font-size="12" font-weight="700" fill="#2563eb">Q(5, 4)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Punt R is by (6, 10). Dit word met skaalfaktor 0,5 vanaf die oorsprong verklein, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(3, 5)',
          checkMode: 'auto',
          correctAnswer: '(3, 5)',
          correctAnswers: ['(3, 5)', '(3,5)'],
          explanation: 'Verkleining vanaf die oorsprong met skaalfaktor 0,5: (x, y) → (0,5x, 0,5y).\nR(6, 10) → R\'(0,5×6, 0,5×10) = (3, 5) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="177.2" x2="206.0" y2="177.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="155.8" x2="206.0" y2="155.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="134.2" x2="206.0" y2="134.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="112.8" x2="206.0" y2="112.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="91.2" x2="206.0" y2="91.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="69.8" x2="206.0" y2="69.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="48.2" x2="206.0" y2="48.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="26.8" x2="206.0" y2="26.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="155.8" x2="206.0" y2="155.8" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="159.8" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="167.8" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="180.2" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="137.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="115.8" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="94.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="69.5" y="72.8" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="69.5" y="51.2" font-size="8" fill="#9ca3af" text-anchor="end">10</text><text x="69.5" y="29.8" font-size="8" fill="#9ca3af" text-anchor="end">12</text><line x1="75.5" y1="155.8" x2="188.6" y2="16.0" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="75.5" cy="155.8" r="3.5" fill="#ea580c"/><text x="63.5" y="169.8" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="48.2" r="4" fill="#2563eb"/><text x="169.5" y="42.2" font-size="12" font-weight="700" fill="#2563eb">R(6, 10)</text></svg>',
        },

        // ── Blok F — Multi-stap / kongruent vs gelykvormig (V18-20) ──────────
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (3, 4). Dit word oor die y-as gereflekteer, en die resultaat word dan met (5, −2) getransleer. Vind die finale posisie.',
          answer: '(2, 2)',
          checkMode: 'auto',
          correctAnswer: '(2, 2)',
          correctAnswers: ['(2, 2)', '(2,2)'],
          explanation: 'Stap 1 — reflekteer oor die y-as: (3, 4) → (−3, 4).\nStap 2 — transleer met (5, −2): (−3 + 5, 4 − 2) = (2, 2).\nFinale posisie = (2, 2) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (2, 1). Dit word met skaalfaktor 3 vanaf die oorsprong vergroot, en die resultaat word dan oor die x-as gereflekteer. Vind die finale posisie.',
          answer: '(6, -3)',
          checkMode: 'auto',
          correctAnswer: '(6, -3)',
          correctAnswers: ['(6, -3)', '(6,-3)', '(6, −3)', '(6,−3)'],
          explanation: 'Stap 1 — vergroot met skaalfaktor 3 vanaf die oorsprong: (2, 1) → (6, 3).\nStap 2 — reflekteer oor die x-as: (6, 3) → (6, −3).\nFinale posisie = (6, −3) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vorm word gereflekteer en dan getransleer. Die finale beeld word dan met die oorspronklike vorm vergelyk. Is die twee vorms kongruent, gelykvormig, of nie een van die twee nie? Verduidelik jou antwoord.',
          checkMode: 'self',
          answer: 'Kongruent (en dus ook gelykvormig). Refleksie en translasie is albei transformasies wat grootte en vorm behou — geen lengtes of hoeke verander nie. Aangesien die beeld presies dieselfde grootte en vorm as die objek is, is die twee vorms kongruent.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die benoem van transformasies, refleksie, translasie, rotasie en vergroting van vorms op die koördinaatvlak bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste van hierdie — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die koördinaatreëls vir refleksie, rotasie en vergroting, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok A — Benoem/identifiseer transformasietipe (V1-3) ────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm word kleiner gemaak deur ʼn skaalfaktor tussen 0 en 1 te gebruik, terwyl dieselfde vorm behou word. Wat word hierdie tipe transformasie gewoonlik genoem?',
          answer: 'verkleining',
          checkMode: 'auto',
          correctAnswer: 'verkleining',
          correctAnswers: ['verkleining', 'ʼn verkleining', 'vergroting', 'ʼn vergroting'],
          explanation: 'Om ʼn vorm kleiner te maak met ʼn skaalfaktor tussen 0 en 1 word gewoonlik ʼn verkleining genoem. Dit is steeds ʼn tipe vergroting — ʼn vergroting met ʼn skaalfaktor kleiner as 1.',
        },
        {
          difficulty: 'Easy',
          question: 'In ʼn rotasie, wat noem ons die vaste punt waarom die vorm draai?',
          answer: 'middelpunt van rotasie',
          checkMode: 'auto',
          correctAnswer: 'middelpunt van rotasie',
          correctAnswers: ['middelpunt van rotasie', 'die middelpunt van rotasie', 'middelpunt'],
          explanation: 'Die vaste punt waarom ʼn vorm in ʼn rotasie draai, word die middelpunt van rotasie genoem. Elke punt op die vorm bly dieselfde afstand vanaf hierdie middelpunt.',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek A het hoekpunte (1, 1), (4, 1), (1, 3). Driehoek B het hoekpunte (2, 2), (8, 2), (2, 6). Beskryf die enkele transformasie wat driehoek A op driehoek B karteer.',
          answer: 'Vergroting met skaalfaktor 2 vanaf die oorsprong',
          checkMode: 'auto',
          correctAnswer: 'Vergroting met skaalfaktor 2 vanaf die oorsprong',
          correctAnswers: ['Vergroting met skaalfaktor 2 vanaf die oorsprong', 'vergroting skaalfaktor 2', 'vergroting van skaalfaktor 2 vanaf die oorsprong', 'skaalfaktor 2 vergroting'],
          explanation: 'Vergelyk ooreenstemmende hoekpunte: (1,1) → (2,2), (4,1) → (8,2), (1,3) → (2,6).\nElke koördinaat is met 2 vermenigvuldig, en die oorsprong (0,0) sou op homself karteer, dus is dit ʼn vergroting met skaalfaktor 2 vanaf die oorsprong ✓',
        },

        // ── Blok B — Refleksie met koördinate (V4-7) ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt P is by (7, 3). Dit word oor die x-as gereflekteer, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(7, -3)',
          checkMode: 'auto',
          correctAnswer: '(7, -3)',
          correctAnswers: ['(7, -3)', '(7,-3)', '(7, −3)', '(7,−3)'],
          explanation: 'Refleksie oor die x-as: (x, y) → (x, −y).\nP(7, 3) → P\'(7, −3) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="163.4" x2="206.0" y2="163.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="114.3" x2="206.0" y2="114.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="89.7" x2="206.0" y2="89.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="65.1" x2="206.0" y2="65.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="40.6" x2="206.0" y2="40.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="142.9" font-size="11" fill="#374151">x</text><text x="75.5" y="150.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="162.5" y="150.9" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="26.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="26.0" y="92.7" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="26.0" y="43.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><line x1="32.0" y1="138.9" x2="206.0" y2="138.9" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="134.9" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><circle cx="119.0" cy="65.1" r="4" fill="#2563eb"/><text x="126.0" y="59.1" font-size="12" font-weight="700" fill="#2563eb">P(7, 3)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Punt Q is by (2, 8). Dit word oor die y-as gereflekteer, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(-2, 8)',
          checkMode: 'auto',
          correctAnswer: '(-2, 8)',
          correctAnswers: ['(-2, 8)', '(-2,8)', '(−2, 8)', '(−2,8)'],
          explanation: 'Refleksie oor die y-as: (x, y) → (−x, y).\nQ(2, 8) → Q\'(−2, 8) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="148.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="206.0" y="200.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="84.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="94.0" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 0</text><circle cx="148.0" cy="102.0" r="4" fill="#2563eb"/><text x="155.0" y="96.0" font-size="12" font-weight="700" fill="#2563eb">Q(2, 8)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt R is by (1, 4). Dit word oor die vertikale lyn x = 6 gereflekteer, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(11, 4)',
          checkMode: 'auto',
          correctAnswer: '(11, 4)',
          correctAnswers: ['(11, 4)', '(11,4)'],
          explanation: 'Spieëllyn x = 6. Afstand van R tot die lyn: 6 − 1 = 5 eenhede.\nDie beeld is 5 eenhede aan die ander kant: 6 + 5 = 11.\nDie y-koördinaat bly dieselfde.\nR\' = (11, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="42.2" y1="188.0" x2="42.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="52.5" y1="188.0" x2="52.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="62.7" y1="188.0" x2="62.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.9" y1="188.0" x2="72.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="83.2" y1="188.0" x2="83.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="93.4" y1="188.0" x2="93.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="103.6" y1="188.0" x2="103.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.9" y1="188.0" x2="113.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.1" y1="188.0" x2="124.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="134.4" y1="188.0" x2="134.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="144.6" y1="188.0" x2="144.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="154.8" y1="188.0" x2="154.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="165.1" y1="188.0" x2="165.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="175.3" y1="188.0" x2="175.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="185.5" y1="188.0" x2="185.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="195.8" y1="188.0" x2="195.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="62.7" y1="188.0" x2="62.7" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="54.7" y="184.0" font-size="11" fill="#374151">y</text><text x="42.2" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="83.2" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="103.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="124.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="144.6" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="165.1" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="185.5" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="206.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">14</text><text x="56.7" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="56.7" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="56.7" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="56.7" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="56.7" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="124.1" y1="188.0" x2="124.1" y2="16.0" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="128.1" y="28.0" font-size="11" font-weight="700" fill="#dc2626">x = 6</text><circle cx="72.9" cy="78.5" r="4" fill="#2563eb"/><text x="79.9" y="72.5" font-size="12" font-weight="700" fill="#2563eb">R(1, 4)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Driehoek ABC het hoekpunte A(3, 1), B(6, 1), C(6, 4), soos gewys. Dit word oor die x-as gereflekteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(3,-1) B'(6,-1) C'(6,-4)",
          checkMode: 'auto',
          correctAnswer: "A'(3,-1) B'(6,-1) C'(6,-4)",
          correctAnswers: ["A'(3,-1) B'(6,-1) C'(6,-4)", "A'(3, -1) B'(6, -1) C'(6, -4)", "A'(3,−1) B'(6,−1) C'(6,−4)"],
          explanation: "Refleksie oor die x-as: (x, y) → (x, −y).\nA(3, 1) → A'(3, −1).\nB(6, 1) → B'(6, −1).\nC(6, 4) → C'(6, −4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="45.4" y1="188.0" x2="45.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="58.8" y1="188.0" x2="58.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.2" y1="188.0" x2="72.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="85.5" y1="188.0" x2="85.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="98.9" y1="188.0" x2="98.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="112.3" y1="188.0" x2="112.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="125.7" y1="188.0" x2="125.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="139.1" y1="188.0" x2="139.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="152.5" y1="188.0" x2="152.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="165.8" y1="188.0" x2="165.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="179.2" y1="188.0" x2="179.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="192.6" y1="188.0" x2="192.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="170.8" x2="206.0" y2="170.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="153.6" x2="206.0" y2="153.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="119.2" x2="206.0" y2="119.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="84.8" x2="206.0" y2="84.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="67.6" x2="206.0" y2="67.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="50.4" x2="206.0" y2="50.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="33.2" x2="206.0" y2="33.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="72.2" y1="188.0" x2="72.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="140.4" font-size="11" fill="#374151">x</text><text x="64.2" y="184.0" font-size="11" fill="#374151">y</text><text x="45.4" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="98.9" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="125.7" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="152.5" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="179.2" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="206.0" y="148.4" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="66.2" y="173.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="66.2" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="66.2" y="70.6" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="66.2" y="36.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><line x1="32.0" y1="136.4" x2="206.0" y2="136.4" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="166.0" y="132.4" font-size="11" font-weight="700" fill="#dc2626">y = 0</text><polygon points="112.3,119.2 152.5,119.2 152.5,67.6" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="112.3" cy="119.2" r="4" fill="#2563eb"/><circle cx="152.5" cy="119.2" r="4" fill="#2563eb"/><circle cx="152.5" cy="67.6" r="4" fill="#2563eb"/><text x="119.3" y="113.2" font-size="12" font-weight="700" fill="#2563eb">A(3, 1)</text><text x="159.5" y="113.2" font-size="12" font-weight="700" fill="#2563eb">B(6, 1)</text><text x="159.5" y="61.6" font-size="12" font-weight="700" fill="#2563eb">C(6, 4)</text></svg>',
        },

        // ── Blok C — Translasie met koördinate (V8-10) ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (6, −3). Dit word 4 eenhede links en 7 eenhede op getransleer, soos gewys. Vind die nuwe koördinate van A\'.',
          answer: '(2, 4)',
          checkMode: 'auto',
          correctAnswer: '(2, 4)',
          correctAnswers: ['(2, 4)', '(2,4)'],
          explanation: 'Translasie van (−4, 7): (x, y) → (x − 4, y + 7).\nA(6, −3) → A\'(6 − 4, −3 + 7) = (2, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="112.6" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="120.6" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-6</text><text x="57.6" y="164.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="57.6" y="138.1" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="57.6" y="85.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="58.7" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="32.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="158.5" cy="148.3" r="4" fill="#2563eb"/><line x1="158.5" y1="148.3" x2="137.1" y2="116.9" stroke="#ea580c" stroke-width="2.5"/><polygon points="137.1,116.9 142.3,120.0 138.1,122.9" fill="#ea580c"/><text x="151.7" y="129.9" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">4 left, 7 up</text><text x="165.5" y="142.3" font-size="12" font-weight="700" fill="#2563eb">A(6, -3)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Driehoek ABC het hoekpunte A(0, 1), B(3, 1), C(0, 3), soos gewys. Dit word met (2, 2) getransleer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(2,3) B'(5,3) C'(2,5)",
          checkMode: 'auto',
          correctAnswer: "A'(2,3) B'(5,3) C'(2,5)",
          correctAnswers: ["A'(2,3) B'(5,3) C'(2,5)", "A'(2, 3) B'(5, 3) C'(2, 5)"],
          explanation: "Translasie van (2, 2): (x, y) → (x + 2, y + 2).\nA(0, 1) → A'(2, 3).\nB(3, 1) → B'(5, 3).\nC(0, 3) → C'(2, 5). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="149.0" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="157.0" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="191.0" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="62.0" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><polygon points="90.0,123.5 148.0,123.5 90.0,80.5" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="90.0" cy="123.5" r="4" fill="#2563eb"/><circle cx="148.0" cy="123.5" r="4" fill="#2563eb"/><circle cx="90.0" cy="80.5" r="4" fill="#2563eb"/><line x1="90.0" y1="123.5" x2="115.4" y2="95.2" stroke="#ea580c" stroke-width="2.5"/><polygon points="115.4,95.2 113.7,101.0 109.9,97.6" fill="#ea580c"/><text x="109.5" y="115.5" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">translate (2, 2)</text><text x="97.0" y="117.5" font-size="12" font-weight="700" fill="#2563eb">A(0, 1)</text><text x="155.0" y="117.5" font-size="12" font-weight="700" fill="#2563eb">B(3, 1)</text><text x="97.0" y="74.5" font-size="12" font-weight="700" fill="#2563eb">C(0, 3)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Student transleer die punt (1, 5) met (3, −6) en skryf die beeld as (−2, 11). Is dit korrek? Indien nie, vind die korrekte beeld.',
          answer: 'Nee, die korrekte beeld is (4, -1).',
          checkMode: 'auto',
          correctAnswer: '(4, -1)',
          correctAnswers: ['(4, -1)', '(4,-1)', '(4, −1)', '(4,−1)', 'Nee, (4,-1)', 'Nee, die korrekte beeld is (4, -1).'],
          explanation: 'Korrekte reël: (x, y) → (x + 3, y + (−6)).\n(1, 5) → (1 + 3, 5 − 6) = (4, −1).\nDie student het die tekens van die skuiwe omgeruil (−3 vir x en +6 vir y gebruik in plaas van +3 en −6), wat (−2, 11) in plaas daarvan gee. Die korrekte beeld is (4, −1) ✓',
        },

        // ── Blok D — Rotasie om die oorsprong (V11-14) ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Punt A is by (6, 3). Dit word 90° kloksgewys om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (y, −x) om die beeld A\' te vind.',
          answer: '(3, -6)',
          checkMode: 'auto',
          correctAnswer: '(3, -6)',
          correctAnswers: ['(3, -6)', '(3,-6)', '(3, −6)', '(3,−6)'],
          explanation: 'Reël: (x, y) → (y, −x).\nA(6, 3) → A\'(3, −6) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="46.5" y1="188.0" x2="46.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="61.0" y1="188.0" x2="61.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="104.5" y1="188.0" x2="104.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="133.5" y1="188.0" x2="133.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="162.5" y1="188.0" x2="162.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="177.0" y1="188.0" x2="177.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="191.5" y1="188.0" x2="191.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="75.5" y1="188.0" x2="75.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="67.5" y="184.0" font-size="11" fill="#374151">y</text><text x="46.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="104.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="133.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="162.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="191.5" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="69.5" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="69.5" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="69.5" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="69.5" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="75.5" cy="130.7" r="3.5" fill="#ea580c"/><text x="63.5" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="162.5" cy="73.3" r="4" fill="#2563eb"/><text x="169.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">A(6, 3)</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Punt B is by (5, −2). Dit word 180° om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (−x, −y) om die beeld B\' te vind.',
          answer: '(-5, 2)',
          checkMode: 'auto',
          correctAnswer: '(-5, 2)',
          correctAnswers: ['(-5, 2)', '(-5,2)', '(−5, 2)', '(−5,2)'],
          explanation: 'Reël: (x, y) → (−x, −y).\nB(5, −2) → B\'(−5, 2) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="166.5" x2="206.0" y2="166.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="145.0" x2="206.0" y2="145.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="123.5" x2="206.0" y2="123.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="59.0" x2="206.0" y2="59.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="37.5" x2="206.0" y2="37.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="80.5" x2="206.0" y2="80.5" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="84.5" font-size="11" fill="#374151">x</text><text x="71.5" y="184.0" font-size="11" fill="#374151">y</text><text x="47.8" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="111.1" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="142.7" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="174.4" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="206.0" y="92.5" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="73.5" y="169.5" font-size="8" fill="#9ca3af" text-anchor="end">-4</text><text x="73.5" y="126.5" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="73.5" y="40.5" font-size="8" fill="#9ca3af" text-anchor="end">2</text><circle cx="79.5" cy="80.5" r="3.5" fill="#ea580c"/><text x="67.5" y="94.5" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="158.5" cy="123.5" r="4" fill="#2563eb"/><text x="165.5" y="117.5" font-size="12" font-weight="700" fill="#2563eb">B(5, -2)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt C is by (4, 7). Dit word 90° anti-kloksgewys om die oorsprong geroteer, soos gewys. Gebruik die reël (x, y) → (−y, x) om die beeld C\' te vind.',
          answer: '(-7, 4)',
          checkMode: 'auto',
          correctAnswer: '(-7, 4)',
          correctAnswers: ['(-7, 4)', '(-7,4)', '(−7, 4)', '(−7,4)'],
          explanation: 'Reël: (x, y) → (−y, x).\nC(4, 7) → C\'(−7, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="174.8" x2="206.0" y2="174.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="161.5" x2="206.0" y2="161.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="135.1" x2="206.0" y2="135.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.8" x2="206.0" y2="121.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="108.6" x2="206.0" y2="108.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="95.4" x2="206.0" y2="95.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.2" x2="206.0" y2="82.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="68.9" x2="206.0" y2="68.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="55.7" x2="206.0" y2="55.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="42.5" x2="206.0" y2="42.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="29.2" x2="206.0" y2="29.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="148.3" x2="206.0" y2="148.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="152.3" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="160.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="177.8" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="124.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="98.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="71.9" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="78.2" y="45.5" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">10</text><circle cx="84.2" cy="148.3" r="3.5" fill="#ea580c"/><text x="72.2" y="162.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="153.8" cy="55.7" r="4" fill="#2563eb"/><text x="160.8" y="49.7" font-size="12" font-weight="700" fill="#2563eb">C(4, 7)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Driehoek ABC het hoekpunte A(1, 1), B(4, 1), C(4, 3), soos gewys. Dit word 90° anti-kloksgewys om die oorsprong geroteer. Vind die koördinate van die beeld A\'B\'C\'.',
          answer: "A'(-1,1) B'(-1,4) C'(-3,4)",
          checkMode: 'auto',
          correctAnswer: "A'(-1,1) B'(-1,4) C'(-3,4)",
          correctAnswers: ["A'(-1,1) B'(-1,4) C'(-3,4)", "A'(-1, 1) B'(-1, 4) C'(-3, 4)", "A'(−1,1) B'(−1,4) C'(−3,4)"],
          explanation: "Reël vir 90° anti-kloksgewys: (x, y) → (−y, x).\nA(1, 1) → A'(−1, 1).\nB(4, 1) → B'(−1, 4).\nC(4, 3) → C'(−3, 4). ✓",
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="49.4" y1="188.0" x2="49.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="119.0" y1="188.0" x2="119.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="153.8" y1="188.0" x2="153.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="188.6" y1="188.0" x2="188.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="84.2" y1="188.0" x2="84.2" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="134.7" font-size="11" fill="#374151">x</text><text x="76.2" y="184.0" font-size="11" fill="#374151">y</text><text x="49.4" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="119.0" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="153.8" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="188.6" y="142.7" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="78.2" y="171.9" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="78.2" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="78.2" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="78.2" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><circle cx="84.2" cy="130.7" r="3.5" fill="#ea580c"/><text x="72.2" y="144.7" font-size="11" font-weight="700" fill="#ea580c">O</text><polygon points="101.6,111.6 153.8,111.6 153.8,73.3" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="101.6" cy="111.6" r="4" fill="#2563eb"/><circle cx="153.8" cy="111.6" r="4" fill="#2563eb"/><circle cx="153.8" cy="73.3" r="4" fill="#2563eb"/><text x="108.6" y="105.6" font-size="12" font-weight="700" fill="#2563eb">A(1, 1)</text><text x="160.8" y="105.6" font-size="12" font-weight="700" fill="#2563eb">B(4, 1)</text><text x="160.8" y="67.3" font-size="12" font-weight="700" fill="#2563eb">C(4, 3)</text></svg>',
        },

        // ── Blok E — Vergroting/verkleining met skaalfaktor (V15-17) ──────────
        {
          difficulty: 'Easy-Medium',
          question: 'Punt P is by (3, 5). Dit word met skaalfaktor 2 vanaf die oorsprong vergroot, soos gewys. Vind die koördinate van die beeld P\'.',
          answer: '(6, 10)',
          checkMode: 'auto',
          correctAnswer: '(6, 10)',
          correctAnswers: ['(6, 10)', '(6,10)'],
          explanation: 'Vergroting vanaf die oorsprong met skaalfaktor 2: (x, y) → (2x, 2y).\nP(3, 5) → P\'(2×3, 2×5) = (6, 10) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="51.3" y1="188.0" x2="51.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="70.7" y1="188.0" x2="70.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="109.3" y1="188.0" x2="109.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="128.7" y1="188.0" x2="128.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="167.3" y1="188.0" x2="167.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="186.7" y1="188.0" x2="186.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="172.4" x2="206.0" y2="172.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="156.7" x2="206.0" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="125.5" x2="206.0" y2="125.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="109.8" x2="206.0" y2="109.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="94.2" x2="206.0" y2="94.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="78.5" x2="206.0" y2="78.5" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="62.9" x2="206.0" y2="62.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="47.3" x2="206.0" y2="47.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="31.6" x2="206.0" y2="31.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="141.1" x2="206.0" y2="141.1" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="145.1" font-size="11" fill="#374151">x</text><text x="82.0" y="184.0" font-size="11" fill="#374151">y</text><text x="51.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="128.7" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="167.3" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="206.0" y="153.1" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="84.0" y="175.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="84.0" y="112.8" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="84.0" y="81.5" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="84.0" y="50.3" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="84.0" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="90.0" y1="141.1" x2="165.4" y2="39.5" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="90.0" cy="141.1" r="3.5" fill="#ea580c"/><text x="78.0" y="155.1" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="148.0" cy="62.9" r="4" fill="#2563eb"/><text x="155.0" y="56.9" font-size="12" font-weight="700" fill="#2563eb">P(3, 5)</text></svg>',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Punt Q is by (6, 5). Dit word met skaalfaktor 2 vanaf die middelpunt (2, 3) vergroot, soos gewys. Vind die koördinate van die beeld Q\'.',
          answer: '(10, 7)',
          checkMode: 'auto',
          correctAnswer: '(10, 7)',
          correctAnswers: ['(10, 7)', '(10,7)'],
          explanation: 'Vergroting vanaf middelpunt (2, 3) met skaalfaktor 2: (x, y) → (2 + 2(x − 2), 3 + 2(y − 3)).\nQ(6, 5): nuwe x = 2 + 2(6 − 2) = 2 + 8 = 10. nuwe y = 3 + 2(5 − 3) = 3 + 4 = 7.\nQ\' = (10, 7) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="47.8" y1="188.0" x2="47.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="79.5" y1="188.0" x2="79.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="95.3" y1="188.0" x2="95.3" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="111.1" y1="188.0" x2="111.1" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="126.9" y1="188.0" x2="126.9" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="142.7" y1="188.0" x2="142.7" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="158.5" y1="188.0" x2="158.5" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="174.4" y1="188.0" x2="174.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="190.2" y1="188.0" x2="190.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="63.6" y1="188.0" x2="63.6" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="172.9" font-size="11" fill="#374151">x</text><text x="55.6" y="184.0" font-size="11" fill="#374151">y</text><text x="32.0" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="95.3" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="126.9" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="158.5" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="190.2" y="180.9" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="57.6" y="133.7" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="57.6" y="95.4" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="57.6" y="57.2" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="57.6" y="19.0" font-size="8" fill="#9ca3af" text-anchor="end">8</text><line x1="95.3" y1="111.6" x2="177.5" y2="61.9" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="95.3" cy="111.6" r="3.5" fill="#ea580c"/><text x="101.3" y="105.6" font-size="11" font-weight="700" fill="#ea580c">centre (2, 3)</text><circle cx="158.5" cy="73.3" r="4" fill="#2563eb"/><text x="165.5" y="67.3" font-size="12" font-weight="700" fill="#2563eb">Q(6, 5)</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'Punt R is by (9, 12). Dit word met skaalfaktor 1/3 vanaf die oorsprong verklein, soos gewys. Vind die koördinate van die beeld R\'.',
          answer: '(3, 4)',
          checkMode: 'auto',
          correctAnswer: '(3, 4)',
          correctAnswers: ['(3, 4)', '(3,4)'],
          explanation: 'Verkleining vanaf die oorsprong met skaalfaktor 1/3: (x, y) → (x/3, y/3).\nR(9, 12) → R\'(9÷3, 12÷3) = (3, 4) ✓',
          diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="32.0" y1="188.0" x2="32.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="43.6" y1="188.0" x2="43.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="55.2" y1="188.0" x2="55.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="78.4" y1="188.0" x2="78.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="90.0" y1="188.0" x2="90.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="101.6" y1="188.0" x2="101.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="113.2" y1="188.0" x2="113.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="124.8" y1="188.0" x2="124.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="136.4" y1="188.0" x2="136.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="148.0" y1="188.0" x2="148.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="159.6" y1="188.0" x2="159.6" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="171.2" y1="188.0" x2="171.2" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="182.8" y1="188.0" x2="182.8" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="194.4" y1="188.0" x2="194.4" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="206.0" y1="188.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="188.0" x2="206.0" y2="188.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="178.4" x2="206.0" y2="178.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="168.9" x2="206.0" y2="168.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="149.8" x2="206.0" y2="149.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="140.2" x2="206.0" y2="140.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="130.7" x2="206.0" y2="130.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="121.1" x2="206.0" y2="121.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="111.6" x2="206.0" y2="111.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="102.0" x2="206.0" y2="102.0" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="92.4" x2="206.0" y2="92.4" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="82.9" x2="206.0" y2="82.9" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="73.3" x2="206.0" y2="73.3" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="63.8" x2="206.0" y2="63.8" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="54.2" x2="206.0" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="44.7" x2="206.0" y2="44.7" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="35.1" x2="206.0" y2="35.1" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="25.6" x2="206.0" y2="25.6" stroke="#e5e7eb" stroke-width="1"/><line x1="32.0" y1="16.0" x2="206.0" y2="16.0" stroke="#e5e7eb" stroke-width="1"/><line x1="66.8" y1="188.0" x2="66.8" y2="16.0" stroke="#374151" stroke-width="1.5"/><line x1="32.0" y1="159.3" x2="206.0" y2="159.3" stroke="#374151" stroke-width="1.5"/><text x="210.0" y="163.3" font-size="11" fill="#374151">x</text><text x="58.8" y="184.0" font-size="11" fill="#374151">y</text><text x="43.6" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">-2</text><text x="90.0" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">2</text><text x="113.2" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">4</text><text x="136.4" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">6</text><text x="159.6" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">8</text><text x="182.8" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">10</text><text x="206.0" y="171.3" font-size="8" fill="#9ca3af" text-anchor="middle">12</text><text x="60.8" y="181.4" font-size="8" fill="#9ca3af" text-anchor="end">-2</text><text x="60.8" y="143.2" font-size="8" fill="#9ca3af" text-anchor="end">2</text><text x="60.8" y="124.1" font-size="8" fill="#9ca3af" text-anchor="end">4</text><text x="60.8" y="105.0" font-size="8" fill="#9ca3af" text-anchor="end">6</text><text x="60.8" y="85.9" font-size="8" fill="#9ca3af" text-anchor="end">8</text><text x="60.8" y="66.8" font-size="8" fill="#9ca3af" text-anchor="end">10</text><text x="60.8" y="47.7" font-size="8" fill="#9ca3af" text-anchor="end">12</text><text x="60.8" y="28.6" font-size="8" fill="#9ca3af" text-anchor="end">14</text><line x1="66.8" y1="159.3" x2="202.5" y2="10.3" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/><circle cx="66.8" cy="159.3" r="3.5" fill="#ea580c"/><text x="54.8" y="173.3" font-size="11" font-weight="700" fill="#ea580c">O</text><circle cx="171.2" cy="44.7" r="4" fill="#2563eb"/><text x="178.2" y="38.7" font-size="12" font-weight="700" fill="#2563eb">R(9, 12)</text></svg>',
        },

        // ── Blok F — Multi-stap / kongruent vs gelykvormig (V18-20) ──────────
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (−1, 2). Dit word met (5, 1) getransleer, en die resultaat word dan 180° om die oorsprong geroteer. Vind die finale posisie.',
          answer: '(-4, -3)',
          checkMode: 'auto',
          correctAnswer: '(-4, -3)',
          correctAnswers: ['(-4, -3)', '(-4,-3)', '(−4, −3)', '(−4,−3)'],
          explanation: 'Stap 1 — transleer met (5, 1): (−1 + 5, 2 + 1) = (4, 3).\nStap 2 — roteer 180° om die oorsprong: (4, 3) → (−4, −3).\nFinale posisie = (−4, −3) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Punt begin by (2, 3). Dit word oor die y-as gereflekteer, en die resultaat word dan met skaalfaktor 2 vanaf die oorsprong vergroot. Vind die finale posisie.',
          answer: '(-4, 6)',
          checkMode: 'auto',
          correctAnswer: '(-4, 6)',
          correctAnswers: ['(-4, 6)', '(-4,6)', '(−4, 6)', '(−4,6)'],
          explanation: 'Stap 1 — reflekteer oor die y-as: (2, 3) → (−2, 3).\nStap 2 — vergroot met skaalfaktor 2 vanaf die oorsprong: (−2, 3) → (−4, 6).\nFinale posisie = (−4, 6) ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Vorm word 90° om die oorsprong geroteer. Die beeld word dan met die oorspronklike vorm vergelyk. Is die twee vorms kongruent, gelykvormig, of nie een van die twee nie? Verduidelik jou antwoord.',
          checkMode: 'self',
          answer: 'Kongruent (en dus ook gelykvormig). ʼn Rotasie behou grootte en vorm — elke punt bly dieselfde afstand vanaf die middelpunt van rotasie, en geen lengtes of hoeke verander nie, slegs die oriëntasie. Aangesien die beeld presies dieselfde grootte en vorm as die objek is, is die twee vorms kongruent.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die benoem van transformasies, refleksie, translasie, rotasie en vergroting van vorms op die koördinaatvlak bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van die meeste van hierdie — hersien enige gemiste vrae.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die koördinaatreëls vir refleksie, rotasie en vergroting, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ] satisfies PracticeSet[],

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
