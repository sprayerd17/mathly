import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (Pythagoras roles) ────────────────────────────────────────
// hypotenuse / unknown  → red    (#dc2626)
// legs / known values   → blue   (#2563eb)
// conclusion            → green  (#16a34a)
// squares / surd form   → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Die Stelling van Pythagoras',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DEVELOPING THE THEOREM OF PYTHAGORAS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'developing-theorem-of-pythagoras',
      title: 'Ontwikkeling van die Stelling van Pythagoras',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek die verwantskap tussen die lengtes van die sye van ʼn reghoekige driehoek. Die Stelling van Pythagoras stel dat in ʼn reghoekige driehoek die kwadraat van die <strong>skuinssy</strong> (die langste sy, oorkant die regte hoek) gelyk is aan die som van die kwadrate van die ander twee sye:</p>` +

        `<div style="text-align:center;margin-bottom:20px;padding:16px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#0f1f3d;margin:0;">${bl('a')}² + ${bl('b')}² = ${re('c')}²</p>` +
        `<p style="font-size:14px;color:#6b7280;margin-top:8px;margin-bottom:0;">waar ${re('c')} die skuinssy is en ${bl('a')}, ${bl('b')} die sye is</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sye (a, b)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('skuinssy (c)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadrate')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sye (a en b)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die twee korter sye van ʼn reghoekige driehoek wat die regte hoek vorm.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Skuinssy (c)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die langste sy van ʼn reghoekige driehoek, altyd oorkant die regte hoek.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kwadraat van ʼn sy</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Sy vermenigvuldig met homself — bv. ${or('3²')} = 3 × 3 = ${or('9')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om die skuinssy te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Soek na die klein vierkantjie wat in die hoek van die driehoek geteken is — dit dui die <strong>regte hoek</strong> aan. Die sy direk oorkant daardie vierkantjie is altyd die ${re('skuinssy')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoekige driehoek het sye van 3 cm en 4 cm. Bepaal die skuinssy met behulp van die Stelling van Pythagoras.',
          answer: `Die skuinssy is ${re('5')} cm`,
          steps: [
            `Skryf die Stelling van Pythagoras neer: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Vervang die bekende sylengtes: ${re('c')}² = ${bl('3')}² + ${bl('4')}² = ${or('9')} + ${or('16')} = ${or('25')}`,
            `Bepaal ${re('c')} deur die vierkantswortel te trek: ${re('c')} = √${or('25')} = ${re('5')} cm`,
            `<strong>Antwoord:</strong> Die skuinssy is ${re('5')} cm ✓. Kyk na die diagram hieronder wat hierdie driehoek wys.`,
          ],
        },
        {
          question: 'Sipho meet ʼn reghoekige driehoek met sye 5 cm en 12 cm. Bepaal die skuinssy.',
          answer: `Die skuinssy is ${re('13')} cm`,
          steps: [
            `Skryf die Stelling van Pythagoras neer: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Vervang: ${re('c')}² = ${bl('5')}² + ${bl('12')}² = ${or('25')} + ${or('144')} = ${or('169')}`,
            `Bepaal ${re('c')}: ${re('c')} = √${or('169')} = ${re('13')} cm`,
            `<strong>Antwoord:</strong> Die skuinssy is ${re('13')} cm ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoekige driehoek het sye 6 cm en 8 cm. Bepaal die skuinssy.',
          answer: '10 cm',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10', '10cm', '10 cm'],
          explanation: 'c² = a² + b² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige driehoek het sye 9 cm en 12 cm. Bepaal die skuinssy.',
          answer: '15 cm',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15', '15cm', '15 cm'],
          explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn driehoek met sye 5 cm, 12 cm en 13 cm is reghoekig. Kontroleer sy bewering.',
          answer: '13² = 169. 5² + 12² = 25 + 144 = 169. Aangesien hulle gelyk is, is die driehoek reghoekig — Sipho is korrek.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Is ʼn driehoek met sye 4 cm, 5 cm en 6 cm reghoekig? Verduidelik.',
          answer: 'Langste sy in die kwadraat: 6² = 36. Som van die ander twee: 4² + 5² = 16 + 25 = 41. Aangesien 36 ≠ 41, is hierdie driehoek nie reghoekig nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 13 cm en een sy van 5 cm. Bepaal die ander sy.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12cm', '12 cm'],
          explanation: 'a² = c² − b² = 13² − 5² = 169 − 25 = 144\na = √144 = 12 cm ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A right-angled triangle with legs labelled 3 cm and 4 cm, and hypotenuse labelled as the unknown side c, with a small square marking the right angle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply the Theorem of Pythagoras to find the hypotenuse of a right-angled triangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DETERMINING WHETHER A TRIANGLE IS RIGHT-ANGLED
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-right-angled-triangle',
      title: 'Bepaal of ʼn Driehoek Reghoekig Is',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Gegewe die drie sylengtes van ʼn driehoek, kan ons bepaal of dit reghoekig is deur te kyk of die kwadraat van die ${bl('langste sy')} gelyk is aan die ${or('som van die kwadrate')} van die ander twee sye. As die voorwaarde geld, is die driehoek reghoekig; indien nie, is dit nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('langste sy')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('som van kwadrate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolgtrekking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode — drie stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} die langste sy en kwadreer dit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Tel')} die kwadrate van die ander twee sye bymekaar.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vergelyk:')} as die twee resultate gelyk is, is die driehoek reghoekig; indien nie, is dit nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Toets altyd die langste sy</p>` +
        `<p style="margin:0;color:#1e3a8a;">Jy moet altyd die <strong>langste</strong> sy kwadreer en dit vergelyk met die ${or('som van die kwadrate')} van die ander twee. As jy enige ander sy toets, sal jy die verkeerde antwoord kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Driehoek het sye 6 cm, 8 cm en 10 cm. Is dit reghoekig?',
          answer: `${gr('Ja, die driehoek is reghoekig')}`,
          steps: [
            `Identifiseer die langste sy: ${bl('10')} cm. Kwadreer dit: ${bl('10')}² = ${or('100')}`,
            `Tel die kwadrate van die ander twee sye bymekaar: ${bl('6')}² + ${bl('8')}² = ${or('36')} + ${or('64')} = ${or('100')}`,
            `Vergelyk: ${or('100')} = ${or('100')} ✓ — die voorwaarde ${bl('langste')}² = ${or('som van ander kwadrate')} word bevredig.`,
            `<strong>Gevolgtrekking:</strong> ${gr('Die driehoek is reghoekig.')} ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn driehoek met sye 5 cm, 7 cm en 9 cm. Is dit reghoekig?',
          answer: `${gr('Nee, die driehoek is nie reghoekig nie')}`,
          steps: [
            `Identifiseer die langste sy: ${bl('9')} cm. Kwadreer dit: ${bl('9')}² = ${or('81')}`,
            `Tel die kwadrate van die ander twee sye bymekaar: ${bl('5')}² + ${bl('7')}² = ${or('25')} + ${or('49')} = ${or('74')}`,
            `Vergelyk: ${or('81')} ≠ ${or('74')} — die voorwaarde word nie bevredig nie.`,
            `<strong>Gevolgtrekking:</strong> ${gr('Die driehoek is nie reghoekig nie.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 7 cm en 24 cm.',
          answer: '25 cm',
          checkMode: 'auto',
          correctAnswer: '25',
          correctAnswers: ['25', '25cm', '25 cm'],
          explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 4 cm en 6 cm, en los jou antwoord in wortelvorm.',
          answer: '√52 cm',
          checkMode: 'auto',
          correctAnswer: '√52',
          correctAnswers: ['√52', '√52cm', '√52 cm'],
          explanation: 'c² = 4² + 6² = 16 + 36 = 52\nAangesien 52 nie ʼn volkome vierkant is nie, is c = √52 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato sê √52 kan vereenvoudig word. Vereenvoudig dit indien moontlik.',
          answer: 'Ja — √52 = √(4 × 13) = 2√13.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 20 cm en een sy van 16 cm. Bepaal die ander sy.',
          answer: '12 cm',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12', '12cm', '12 cm'],
          explanation: 'a² = c² − b² = 20² − 16² = 400 − 256 = 144\na = √144 = 12 cm ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo leun ʼn leer teen ʼn muur. Die basis van die leer is 2.5 m van die muur af, en die leer is 6 m lank. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?',
          answer: '5.45 m',
          checkMode: 'auto',
          correctAnswer: '5.45',
          correctAnswers: ['5.45', '5.45m', '5.45 m'],
          explanation: 'hoogte² = 6² − 2.5² = 36 − 6.25 = 29.75\nhoogte = √29.75 ≈ 5.45 m ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Two triangles side by side — first labelled right-angled (6 cm, 8 cm, 10 cm) with tick confirming equality of squares, second labelled not right-angled (5 cm, 7 cm, 9 cm) with cross" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to test whether a triangle is right-angled using the converse of the Theorem of Pythagoras" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING MISSING LENGTHS AND SOLVING PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-missing-lengths',
      title: 'Bereken Ontbrekende Lengtes en Los Probleme Op',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik die Stelling van Pythagoras om ʼn ontbrekende lengte in ʼn reghoekige driehoek te bereken, en los irrasionale antwoorde waar nodig in <strong>wortelvorm</strong>, en los werklike-lewe-probleme op wat onbekende lengtes in meetkundige figure met reghoekige driehoeke behels.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende waardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('wortelvorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee gevalle</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Bepaal die skuinssy</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Gebruik ${re('c')}² = ${bl('a')}² + ${bl('b')}² direk. Kwadreer albei ${bl('bekende sye')}, tel dit bymekaar, en trek dan die vierkantswortel.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">As die resultaat nie ʼn volkome vierkant is nie, laat dit as ${or('√antwoord')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Bepaal ʼn ontbrekende sy</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Herrangskik: ${re('a')}² = ${bl('c')}² − ${bl('b')}². Trek die ${bl('bekende sy in die kwadraat')} af van die ${bl('skuinssy in die kwadraat')}, en trek dan die vierkantswortel.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;font-style:italic;">Trek altyd af — moet nooit optel nie — wanneer jy ʼn sy bepaal.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Wortelvorm</p>` +
        `<p style="margin:0;color:#9a3412;">Wanneer die antwoord nie ʼn volkome vierkant is nie, skryf dit as ${or('√n')} (ʼn wortelvorm). Jy kan vereenvoudig as die getal onder die wortelteken ʼn volkome-vierkant-faktor het — bv. ${or('√50')} = ${or('√(25 × 2)')} = ${or('5√2')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 15 cm en een sy van 9 cm. Bepaal die ander sy.',
          answer: `Die ontbrekende sy is ${re('12')} cm`,
          steps: [
            `Herrangskik die Stelling van Pythagoras om ʼn sy te bepaal: ${re('a')}² = ${bl('c')}² − ${bl('b')}²`,
            `Vervang: ${re('a')}² = ${bl('15')}² − ${bl('9')}² = ${or('225')} − ${or('81')} = ${or('144')}`,
            `Trek die vierkantswortel: ${re('a')} = √${or('144')} = ${re('12')} cm`,
            `<strong>Antwoord:</strong> Die ontbrekende sy is ${re('12')} cm ✓`,
          ],
        },
        {
          question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 2 cm en 3 cm, en los die antwoord in wortelvorm.',
          answer: `Die skuinssy is ${or('√13')} cm`,
          steps: [
            `Skryf die Stelling van Pythagoras neer: ${re('c')}² = ${bl('a')}² + ${bl('b')}²`,
            `Vervang: ${re('c')}² = ${bl('2')}² + ${bl('3')}² = ${or('4')} + ${or('9')} = ${or('13')}`,
            `Aangesien 13 nie ʼn volkome vierkant is nie, laat die antwoord in wortelvorm: ${re('c')} = ${or('√13')} cm`,
            `<strong>Antwoord:</strong> ${or('√13')} cm ✓`,
          ],
        },
        {
          question: 'Thabo leun ʼn leer teen ʼn muur. Die basis van die leer is 3 m van die muur af, en die leer is 7 m lank. Hoe hoog teen die muur reik dit?',
          answer: `Die leer reik ${or('√40')} ≈ ${re('6.32')} m teen die muur op`,
          steps: [
            `Identifiseer die driehoek: die leer (${bl('7 m')}) is die skuinssy, die basis (${bl('3 m')}) is een sy, en die hoogte (${re('h')}) is die onbekende sy.`,
            `Herrangskik: ${re('h')}² = ${bl('c')}² − ${bl('basis')}² = ${bl('7')}² − ${bl('3')}² = ${or('49')} − ${or('9')} = ${or('40')}`,
            `Bepaal ${re('h')}: ${re('h')} = ${or('√40')} ≈ ${re('6.32')} m (tot 2 desimale plekke)`,
            `<strong>Antwoord:</strong> Die leer reik ongeveer ${re('6.32')} m teen die muur op ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'ʼn Reghoekige lap grond is 30 m by 40 m. Bepaal die lengte van sy diagonaal.',
          answer: '50 m',
          checkMode: 'auto',
          correctAnswer: '50',
          correctAnswers: ['50', '50m', '50 m'],
          explanation: 'Die diagonaal verdeel die reghoek in twee reghoekige driehoeke met sye 30 m en 40 m.\nc² = 30² + 40² = 900 + 1 600 = 2 500\nc = √2 500 = 50 m ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê enige driehoek met drie heelgetalsye moet reghoekig wees. Is sy korrek? Verduidelik.',
          answer: 'Nee — byvoorbeeld ʼn driehoek met sye 4 cm, 5 cm en 6 cm het heelgetalsye maar is nie reghoekig nie, aangesien 6² ≠ 4² + 5².',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Driehoek het sye 8 cm, 15 cm en 17 cm. Is dit reghoekig? Wys jou werk.',
          answer: '17² = 289. 8² + 15² = 64 + 225 = 289. Aangesien hulle gelyk is, is die driehoek reghoekig.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Bepaal die ontbrekende sy van ʼn reghoekige driehoek met skuinssy 25 cm en een sy 24 cm, en los enige irrasionale deel indien nodig in wortelvorm.',
          answer: '7 cm',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7', '7cm', '7 cm'],
          explanation: 'a² = c² − b² = 25² − 24² = 625 − 576 = 49\na = √49 = 7 cm ✓\n(Aangesien 49 ʼn volkome vierkant is, is die antwoord ʼn heelgetal.)',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho se reghoekige driehoek het sye 5 cm en 5 cm. Bepaal die skuinssy in wortelvorm, en vereenvoudig dit dan.',
          answer: 'c² = 5² + 5² = 25 + 25 = 50. c = √50 = √(25 × 2) = 5√2 cm.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A ladder leaning against a wall forming a right-angled triangle, with the base (3 m), ladder length (7 m), and unknown height labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find a missing side of a right-angled triangle using the Theorem of Pythagoras, including surd form answers" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het die Stelling van Pythagoras bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy is op die regte pad — gaan enige gemiste vrae weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer nog ʼn keer.' },
  ],
}
