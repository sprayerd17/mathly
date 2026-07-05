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

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Reghoekige driehoek met sye gemerk 3 cm en 4 cm, en die skuinssy gemerk as die onbekende sy c, met ʼn klein vierkantjie wat die regte hoek aandui" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die Stelling van Pythagoras toe te pas om die skuinssy van ʼn reghoekige driehoek te vind" />',
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

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Twee driehoeke langs mekaar — eerste gemerk reghoekig (6 cm, 8 cm, 10 cm) met ʼn regmerkie wat gelykheid van kwadrate bevestig, tweede gemerk nie-reghoekig (5 cm, 7 cm, 9 cm) met ʼn kruisie" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om te toets of ʼn driehoek reghoekig is met behulp van die omgekeerde van die Stelling van Pythagoras" />',
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

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Leer wat teen ʼn muur leun en ʼn reghoekige driehoek vorm, met die basis (3 m), leerlengte (7 m), en onbekende hoogte gemerk" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn ontbrekende sy van ʼn reghoekige driehoek te vind met behulp van die Stelling van Pythagoras, insluitend antwoorde in wortelvorm" />',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDBEGINSELS: BEPAAL DIE SKUINSSY OF ʼN ONTBREKENDE SY (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondbeginsels',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het sye 3 cm en 4 cm. Bepaal die skuinssy.', answer: '5 cm', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'c² = 3² + 4² = 9 + 16 = 25\nc = √25 = 5 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het sye 6 cm en 8 cm. Bepaal die skuinssy.', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], explanation: 'c² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het sye 9 cm en 12 cm. Bepaal die skuinssy.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het sye 8 cm en 15 cm. Bepaal die skuinssy.', answer: '17 cm', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17cm', '17 cm'], explanation: 'c² = 8² + 15² = 64 + 225 = 289\nc = √289 = 17 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 20 cm en 21 cm. Bepaal die skuinssy.', answer: '29 cm', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29cm', '29 cm'], explanation: 'c² = 20² + 21² = 400 + 441 = 841\nc = √841 = 29 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 12 cm en 16 cm. Bepaal die skuinssy.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'c² = 12² + 16² = 144 + 256 = 400\nc = √400 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 18 cm en 24 cm. Bepaal die skuinssy.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'c² = 18² + 24² = 324 + 576 = 900\nc = √900 = 30 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 21 cm en 28 cm. Bepaal die skuinssy.', answer: '35 cm', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35cm', '35 cm'], explanation: 'c² = 21² + 28² = 441 + 784 = 1 225\nc = √1 225 = 35 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 15 cm en 20 cm. Bepaal die skuinssy.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'c² = 15² + 20² = 225 + 400 = 625\nc = √625 = 25 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 24 cm en 32 cm. Bepaal die skuinssy.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40cm', '40 cm'], explanation: 'c² = 24² + 32² = 576 + 1 024 = 1 600\nc = √1 600 = 40 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 16 cm en 30 cm. Bepaal die skuinssy.', answer: '34 cm', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34', '34cm', '34 cm'], explanation: 'c² = 16² + 30² = 256 + 900 = 1 156\nc = √1 156 = 34 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het sye 10 cm en 24 cm. Bepaal die skuinssy.', answer: '26 cm', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm', '26 cm'], explanation: 'c² = 10² + 24² = 100 + 576 = 676\nc = √676 = 26 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 5 cm en een sy van 3 cm. Bepaal die ander sy.', answer: '4 cm', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'a² = c² − b² = 5² − 3² = 25 − 9 = 16\na = √16 = 4 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 13 cm en een sy van 5 cm. Bepaal die ander sy.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'a² = c² − b² = 13² − 5² = 169 − 25 = 144\na = √144 = 12 cm ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 15 cm en een sy van 9 cm. Bepaal die ander sy.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'a² = c² − b² = 15² − 9² = 225 − 81 = 144\na = √144 = 12 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 17 cm en een sy van 8 cm. Bepaal die ander sy.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'a² = c² − b² = 17² − 8² = 289 − 64 = 225\na = √225 = 15 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 25 cm en een sy van 7 cm. Bepaal die ander sy.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 25² − 7² = 625 − 49 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 29 cm en een sy van 20 cm. Bepaal die ander sy.', answer: '21 cm', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21cm', '21 cm'], explanation: 'a² = c² − b² = 29² − 20² = 841 − 400 = 441\na = √441 = 21 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 20 cm en een sy van 12 cm. Bepaal die ander sy.', answer: '16 cm', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16cm', '16 cm'], explanation: 'a² = c² − b² = 20² − 12² = 400 − 144 = 256\na = √256 = 16 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 26 cm en een sy van 10 cm. Bepaal die ander sy.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 26² − 10² = 676 − 100 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 30 cm en een sy van 18 cm. Bepaal die ander sy.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'a² = c² − b² = 30² − 18² = 900 − 324 = 576\na = √576 = 24 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 34 cm en een sy van 16 cm. Bepaal die ander sy.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], explanation: 'a² = c² − b² = 34² − 16² = 1 156 − 256 = 900\na = √900 = 30 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 35 cm en een sy van 21 cm. Bepaal die ander sy.', answer: '28 cm', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28cm', '28 cm'], explanation: 'a² = c² − b² = 35² − 21² = 1 225 − 441 = 784\na = √784 = 28 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 25 cm en een sy van 15 cm. Bepaal die ander sy.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20cm', '20 cm'], explanation: 'a² = c² − b² = 25² − 15² = 625 − 225 = 400\na = √400 = 20 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek het ʼn skuinssy van 40 cm en een sy van 24 cm. Bepaal die ander sy.', answer: '32 cm', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], explanation: 'a² = c² − b² = 40² − 24² = 1 600 − 576 = 1 024\na = √1 024 = 32 cm ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die basiese beginsels van die Stelling van Pythagoras bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy pas die stelling met selfvertroue toe — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — OMGEKEERDE VAN DIE STELLING EN WORTELVORM-ANTWOORDE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Omgekeerde en Wortelvorm',
      questions: [
        { difficulty: 'Easy', question: 'Is ʼn driehoek met sye 6 cm, 8 cm en 10 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '10² = 100. 6² + 8² = 36 + 64 = 100. Aangesien hulle gelyk is, is die driehoek reghoekig ✓' },
        { difficulty: 'Easy', question: 'Is ʼn driehoek met sye 5 cm, 7 cm en 9 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '9² = 81. 5² + 7² = 25 + 49 = 74. Aangesien 81 ≠ 74, is die driehoek nie reghoekig nie ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 9 cm, 12 cm en 15 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '15² = 225. 9² + 12² = 81 + 144 = 225. Gelyk, dus is dit reghoekig ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 7 cm, 10 cm en 13 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '13² = 169. 7² + 10² = 49 + 100 = 149. Aangesien 169 ≠ 149, is dit nie reghoekig nie ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 8 cm, 15 cm en 17 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '17² = 289. 8² + 15² = 64 + 225 = 289. Gelyk, dus is dit reghoekig ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 10 cm, 11 cm en 15 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '15² = 225. 10² + 11² = 100 + 121 = 221. Aangesien 225 ≠ 221, is dit nie reghoekig nie ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 20 cm, 21 cm en 29 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '29² = 841. 20² + 21² = 400 + 441 = 841. Gelyk, dus is dit reghoekig ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 12 cm, 13 cm en 18 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '18² = 324. 12² + 13² = 144 + 169 = 313. Aangesien 324 ≠ 313, is dit nie reghoekig nie ✓' },
        { difficulty: 'Hard', question: 'Is ʼn driehoek met sye 9 cm, 40 cm en 41 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '41² = 1 681. 9² + 40² = 81 + 1 600 = 1 681. Gelyk, dus is dit reghoekig ✓' },
        { difficulty: 'Hard', question: 'Is ʼn driehoek met sye 13 cm, 14 cm en 20 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '20² = 400. 13² + 14² = 169 + 196 = 365. Aangesien 400 ≠ 365, is dit nie reghoekig nie ✓' },
        { difficulty: 'Hard', question: 'Is ʼn driehoek met sye 11 cm, 12 cm en 16 cm reghoekig? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: '16² = 256. 11² + 12² = 121 + 144 = 265. Aangesien 256 ≠ 265, is dit nie reghoekig nie ✓' },
        { difficulty: 'Hard', question: 'Is ʼn driehoek met sye 18 cm, 24 cm en 30 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '30² = 900. 18² + 24² = 324 + 576 = 900. Gelyk, dus is dit reghoekig ✓' },
        { difficulty: 'Hard', question: 'Sipho sê ʼn driehoek met sye 5 cm, 12 cm en 13 cm is reghoekig. Kontroleer sy bewering en verduidelik.', answer: '13² = 169. 5² + 12² = 25 + 144 = 169. Aangesien hulle gelyk is, is die driehoek reghoekig — Sipho is korrek.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 2 cm en 3 cm, en los die antwoord in wortelvorm.', answer: '√13 cm', checkMode: 'auto', correctAnswer: '√13', correctAnswers: ['√13', '√13cm', '√13 cm'], explanation: 'c² = 2² + 3² = 4 + 9 = 13\nAangesien 13 nie ʼn volkome vierkant is nie, is c = √13 cm ✓' },
        { difficulty: 'Medium', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 1 cm en 2 cm, en los die antwoord in wortelvorm.', answer: '√5 cm', checkMode: 'auto', correctAnswer: '√5', correctAnswers: ['√5', '√5cm', '√5 cm'], explanation: 'c² = 1² + 2² = 1 + 4 = 5\nc = √5 cm ✓' },
        { difficulty: 'Medium', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 1 cm en 4 cm, en los die antwoord in wortelvorm.', answer: '√17 cm', checkMode: 'auto', correctAnswer: '√17', correctAnswers: ['√17', '√17cm', '√17 cm'], explanation: 'c² = 1² + 4² = 1 + 16 = 17\nc = √17 cm ✓' },
        { difficulty: 'Medium', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 2 cm en 5 cm, en los die antwoord in wortelvorm.', answer: '√29 cm', checkMode: 'auto', correctAnswer: '√29', correctAnswers: ['√29', '√29cm', '√29 cm'], explanation: 'c² = 2² + 5² = 4 + 25 = 29\nc = √29 cm ✓' },
        { difficulty: 'Medium', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 3 cm en 5 cm, en los die antwoord in wortelvorm.', answer: '√34 cm', checkMode: 'auto', correctAnswer: '√34', correctAnswers: ['√34', '√34cm', '√34 cm'], explanation: 'c² = 3² + 5² = 9 + 25 = 34\nc = √34 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 3 cm en 7 cm, en los die antwoord in wortelvorm.', answer: '√58 cm', checkMode: 'auto', correctAnswer: '√58', correctAnswers: ['√58', '√58cm', '√58 cm'], explanation: 'c² = 3² + 7² = 9 + 49 = 58\nc = √58 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 5 cm en 6 cm, en los die antwoord in wortelvorm.', answer: '√61 cm', checkMode: 'auto', correctAnswer: '√61', correctAnswers: ['√61', '√61cm', '√61 cm'], explanation: 'c² = 5² + 6² = 25 + 36 = 61\nc = √61 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 4 cm en 7 cm, en los die antwoord in wortelvorm.', answer: '√65 cm', checkMode: 'auto', correctAnswer: '√65', correctAnswers: ['√65', '√65cm', '√65 cm'], explanation: 'c² = 4² + 7² = 16 + 49 = 65\nc = √65 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 6 cm en 7 cm, en los die antwoord in wortelvorm.', answer: '√85 cm', checkMode: 'auto', correctAnswer: '√85', correctAnswers: ['√85', '√85cm', '√85 cm'], explanation: 'c² = 6² + 7² = 36 + 49 = 85\nc = √85 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 4 cm en 6 cm. Vereenvoudig jou wortelvorm-antwoord so ver as moontlik.', answer: '2√13 cm', checkMode: 'auto', correctAnswer: '2√13', correctAnswers: ['2√13', '2√13cm', '2√13 cm'], explanation: 'c² = 4² + 6² = 16 + 36 = 52\nc = √52 = √(4 × 13) = 2√13 cm ✓' },
        { difficulty: 'Hard', question: 'Bepaal die skuinssy van ʼn reghoekige driehoek met sye 5 cm en 9 cm, afgerond tot 2 desimale plekke.', answer: '10,30 cm', checkMode: 'auto', correctAnswer: '10.30', correctAnswers: ['10.30', '10.3', '10.30cm', '10.3cm', '10.30 cm', '10.3 cm', '10,30', '10,3', '10,30cm', '10,3cm', '10,30 cm', '10,3 cm'], explanation: 'c² = 5² + 9² = 25 + 81 = 106\nc = √106 ≈ 10,30 cm ✓' },
        { difficulty: 'Medium', question: 'Is ʼn driehoek met sye 10 cm, 24 cm en 26 cm reghoekig? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '26² = 676. 10² + 24² = 100 + 576 = 676. Aangesien hulle gelyk is, is die driehoek reghoekig ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die omgekeerde van die stelling en wortelvorm-antwoorde bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die omgekeerde en wortels weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WERKLIKE-LEWE TOEPASSINGS (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Werklike-Lewe Toepassings',
      questions: [
        { difficulty: 'Medium', question: 'Thabo leun ʼn leer teen ʼn muur. Die basis van die leer is 2,5 m van die muur af, en die leer is 6 m lank. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '5,45 m', checkMode: 'auto', correctAnswer: '5.45', correctAnswers: ['5.45', '5.45m', '5.45 m', '5,45', '5,45m', '5,45 m'], explanation: 'hoogte² = 6² − 2,5² = 36 − 6,25 = 29,75\nhoogte = √29,75 ≈ 5,45 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 7 m lank leun teen ʼn muur met sy basis 3 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '6,32 m', checkMode: 'auto', correctAnswer: '6.32', correctAnswers: ['6.32', '6.32m', '6.32 m', '6,32', '6,32m', '6,32 m'], explanation: 'hoogte² = 7² − 3² = 49 − 9 = 40\nhoogte = √40 ≈ 6,32 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 4 m lank leun teen ʼn muur met sy basis 1,5 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '3,71 m', checkMode: 'auto', correctAnswer: '3.71', correctAnswers: ['3.71', '3.71m', '3.71 m', '3,71', '3,71m', '3,71 m'], explanation: 'hoogte² = 4² − 1,5² = 16 − 2,25 = 13,75\nhoogte = √13,75 ≈ 3,71 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 7 m lank leun teen ʼn muur met sy basis 2,4 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '6,58 m', checkMode: 'auto', correctAnswer: '6.58', correctAnswers: ['6.58', '6.58m', '6.58 m', '6,58', '6,58m', '6,58 m'], explanation: 'hoogte² = 7² − 2,4² = 49 − 5,76 = 43,24\nhoogte = √43,24 ≈ 6,58 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Leer 8,5 m lank leun teen ʼn muur met sy basis 3,5 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '7,75 m', checkMode: 'auto', correctAnswer: '7.75', correctAnswers: ['7.75', '7.75m', '7.75 m', '7,75', '7,75m', '7,75 m'], explanation: 'hoogte² = 8,5² − 3,5² = 72,25 − 12,25 = 60\nhoogte = √60 ≈ 7,75 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Leer 10,5 m lank leun teen ʼn muur met sy basis 4,5 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '9,49 m', checkMode: 'auto', correctAnswer: '9.49', correctAnswers: ['9.49', '9.49m', '9.49 m', '9,49', '9,49m', '9,49 m'], explanation: 'hoogte² = 10,5² − 4,5² = 110,25 − 20,25 = 90\nhoogte = √90 ≈ 9,49 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 3,5 m lank leun teen ʼn muur met sy basis 1,2 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '3,29 m', checkMode: 'auto', correctAnswer: '3.29', correctAnswers: ['3.29', '3.29m', '3.29 m', '3,29', '3,29m', '3,29 m'], explanation: 'hoogte² = 3,5² − 1,2² = 12,25 − 1,44 = 10,81\nhoogte = √10,81 ≈ 3,29 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 6 m lank leun teen ʼn muur met sy basis 2,8 m van die muur af. Hoe hoog teen die muur reik dit (tot 2 desimale plekke)?', answer: '5,31 m', checkMode: 'auto', correctAnswer: '5.31', correctAnswers: ['5.31', '5.31m', '5.31 m', '5,31', '5,31m', '5,31 m'], explanation: 'hoogte² = 6² − 2,8² = 36 − 7,84 = 28,16\nhoogte = √28,16 ≈ 5,31 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Leer 13 m lank leun teen ʼn muur met sy basis 5 m van die muur af. Hoe hoog teen die muur reik dit?', answer: '12 m', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12m', '12 m'], explanation: 'hoogte² = 13² − 5² = 169 − 25 = 144\nhoogte = √144 = 12 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Leer 6,5 m lank leun teen ʼn muur met sy basis 6 m van die muur af. Hoe hoog teen die muur reik dit?', answer: '2,50 m', checkMode: 'auto', correctAnswer: '2.50', correctAnswers: ['2.50', '2.5', '2.50m', '2.5m', '2.50 m', '2.5 m', '2,50', '2,5', '2,50m', '2,5m', '2,50 m', '2,5 m'], explanation: 'hoogte² = 6,5² − 6² = 42,25 − 36 = 6,25\nhoogte = √6,25 = 2,5 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige lap grond is 30 m by 40 m. Bepaal die lengte van sy diagonaal.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'Die diagonaal verdeel die reghoek in twee reghoekige driehoeke met sye 30 m en 40 m.\nc² = 30² + 40² = 900 + 1 600 = 2 500\nc = √2 500 = 50 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige TV-skerm is 9 cm by 12 cm (verkleinde model). Bepaal die lengte van sy diagonaal.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 cm ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige hek is 20 m by 15 m (verkleinde model). Bepaal die lengte van sy diagonale steunbalk.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 20² + 15² = 400 + 225 = 625\nc = √625 = 25 m ✓' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige deur is 6 m by 8 m (verkleinde model). Bepaal die lengte van sy diagonaal.', answer: '10 m', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10m', '10 m'], explanation: 'c² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportbaan is 24 m by 32 m. Bepaal die lengte van sy diagonaal.', answer: '40 m', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40m', '40 m'], explanation: 'c² = 24² + 32² = 576 + 1 024 = 1 600\nc = √1 600 = 40 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin is 5 m by 12 m. Bepaal die lengte van sy diagonale paadjie.', answer: '13 m', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], explanation: 'c² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige muurpaneel is 7 m by 24 m. Bepaal die lengte van sy diagonale stut.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 7² + 24² = 49 + 576 = 625\nc = √625 = 25 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige banier is 12 m by 35 m. Bepaal die lengte van sy diagonaal.', answer: '37 m', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37m', '37 m'], explanation: 'c² = 12² + 35² = 144 + 1 225 = 1 369\nc = √1 369 = 37 m ✓' },
        { difficulty: 'Medium', question: 'Bepaal die afstand tussen die punte (0, 0) en (3, 4) op ʼn rooster.', answer: '5 eenhede', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 eenhede', '5eenhede', '5 units', '5units'], explanation: 'Horisontale afstand = 3, vertikale afstand = 4 — hierdie vorm die sye van ʼn reghoekige driehoek.\nd² = 3² + 4² = 9 + 16 = 25\nd = √25 = 5 eenhede ✓' },
        { difficulty: 'Medium', question: 'Bepaal die afstand tussen die punte (1, 1) en (4, 5) op ʼn rooster.', answer: '5 eenhede', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 eenhede', '5eenhede', '5 units', '5units'], explanation: 'Horisontale afstand = 4 − 1 = 3, vertikale afstand = 5 − 1 = 4.\nd² = 3² + 4² = 9 + 16 = 25\nd = √25 = 5 eenhede ✓' },
        { difficulty: 'Hard', question: 'Bepaal die afstand tussen die punte (2, 3) en (7, 15) op ʼn rooster.', answer: '13 eenhede', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 eenhede', '13eenhede', '13 units', '13units'], explanation: 'Horisontale afstand = 7 − 2 = 5, vertikale afstand = 15 − 3 = 12.\nd² = 5² + 12² = 25 + 144 = 169\nd = √169 = 13 eenhede ✓' },
        { difficulty: 'Hard', question: 'Bepaal die afstand tussen die punte (−2, 1) en (4, 9) op ʼn rooster.', answer: '10 eenhede', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 eenhede', '10eenhede', '10 units', '10units'], explanation: 'Horisontale afstand = 4 − (−2) = 6, vertikale afstand = 9 − 1 = 8.\nd² = 6² + 8² = 36 + 64 = 100\nd = √100 = 10 eenhede ✓' },
        { difficulty: 'Medium', question: 'ʼn Vertikale paal is 5 m hoog. ʼn Draad loop van die bopunt van die paal na ʼn punt op die grond 12 m van sy basis af. Bepaal die lengte van die draad.', answer: '13 m', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13m', '13 m'], explanation: 'c² = 5² + 12² = 25 + 144 = 169\nc = √169 = 13 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Vertikale paal is 9 m hoog. ʼn Draad loop van die bopunt van die paal na ʼn punt op die grond 12 m van sy basis af. Bepaal die lengte van die draad.', answer: '15 m', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15m', '15 m'], explanation: 'c² = 9² + 12² = 81 + 144 = 225\nc = √225 = 15 m ✓' },
        { difficulty: 'Medium', question: 'ʼn Vertikale paal is 20 m hoog. ʼn Draad loop van die bopunt van die paal na ʼn punt op die grond 15 m van sy basis af. Bepaal die lengte van die draad.', answer: '25 m', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25m', '25 m'], explanation: 'c² = 20² + 15² = 400 + 225 = 625\nc = √625 = 25 m ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan die stelling met selfvertroue op werklike-lewe-probleme toepas.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die leer- en diagonaal-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MULTI-STAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Multi-Stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 10 cm en ʼn basis van 12 cm. Bepaal die hoogte van die driehoek (vanaf die apeks tot die middelpunt van die basis).', answer: '8 cm', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'Die hoogte verdeel die basis in twee gelyke helftes van 6 cm elk, en vorm ʼn reghoekige driehoek met skuinssy 10 cm.\nh² = 10² − 6² = 100 − 36 = 64\nh = √64 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 13 cm en ʼn basis van 10 cm. Bepaal die hoogte van die driehoek.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], explanation: 'Half die basis = 5 cm.\nh² = 13² − 5² = 169 − 25 = 144\nh = √144 = 12 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 17 cm en ʼn basis van 16 cm. Bepaal die hoogte van die driehoek.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], explanation: 'Half die basis = 8 cm.\nh² = 17² − 8² = 289 − 64 = 225\nh = √225 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 25 cm en ʼn basis van 14 cm. Bepaal die hoogte van die driehoek.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], explanation: 'Half die basis = 7 cm.\nh² = 25² − 7² = 625 − 49 = 576\nh = √576 = 24 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 20 cm en ʼn basis van 24 cm. Bepaal die hoogte, en gebruik dit dan om die oppervlakte van die driehoek te bereken.', answer: 'Hoogte = 16 cm; Oppervlakte = 192 cm²', checkMode: 'auto', correctAnswer: '192', correctAnswers: ['192', '192cm²', '192 cm²', '16 cm; 192 cm²', 'hoogte=16, oppervlakte=192'], explanation: 'Half die basis = 12 cm.\nh² = 20² − 12² = 400 − 144 = 256\nh = √256 = 16 cm.\nOppervlakte = ½ × basis × hoogte = ½ × 24 × 16 = 192 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Gelykbenige driehoek het twee gelyke sye van 15 cm en ʼn basis van 18 cm. Bepaal die hoogte, en gebruik dit dan om die oppervlakte van die driehoek te bereken.', answer: 'Hoogte = 12 cm; Oppervlakte = 108 cm²', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108cm²', '108 cm²', '12 cm; 108 cm²', 'hoogte=12, oppervlakte=108'], explanation: 'Half die basis = 9 cm.\nh² = 15² − 9² = 225 − 81 = 144\nh = √144 = 12 cm.\nOppervlakte = ½ × 18 × 12 = 108 cm² ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige boks het ʼn basis van 3 cm by 4 cm en ʼn hoogte van 12 cm. Bepaal die lengte van die diagonaal oor die basis, en bepaal dan die lengte van die diagonaal vanaf een onderste hoek na die teenoorgestelde boonste hoek (die ruimtediagonaal).', answer: 'Basisdiagonaal = 5 cm; Ruimtediagonaal = 13 cm', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13cm', '13 cm', '5 cm; 13 cm', 'basis=5, ruimte=13'], explanation: 'Basisdiagonaal: d² = 3² + 4² = 9 + 16 = 25, d = 5 cm.\nRuimtediagonaal: gebruik die basisdiagonaal (5 cm) en die hoogte (12 cm) as die twee sye van ʼn nuwe reghoekige driehoek: D² = 5² + 12² = 25 + 144 = 169, D = √169 = 13 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige boks het ʼn basis van 6 cm by 8 cm en ʼn hoogte van 24 cm. Bepaal die lengte van die ruimtediagonaal (vanaf een onderste hoek na die teenoorgestelde boonste hoek).', answer: '26 cm', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26cm', '26 cm'], explanation: 'Basisdiagonaal: d² = 6² + 8² = 36 + 64 = 100, d = 10 cm.\nRuimtediagonaal: D² = 10² + 24² = 100 + 576 = 676, D = √676 = 26 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige boks het ʼn basis van 9 cm by 12 cm en ʼn hoogte van 20 cm. Bepaal die lengte van die ruimtediagonaal (vanaf een onderste hoek na die teenoorgestelde boonste hoek).', answer: '25 cm', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25cm', '25 cm'], explanation: 'Basisdiagonaal: d² = 9² + 12² = 81 + 144 = 225, d = 15 cm.\nRuimtediagonaal: D² = 15² + 20² = 225 + 400 = 625, D = √625 = 25 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Vertikale paal is 7 m hoog. ʼn Draad loop van die bopunt van die paal na ʼn punt op die grond 24 m van sy basis af. As 4 identiese drade nodig is om die paal te ondersteun, bepaal die totale lengte draad benodig.', answer: '100 m', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100m', '100 m'], explanation: 'Een draad: c² = 7² + 24² = 49 + 576 = 625, c = 25 m.\nVier drade: 4 × 25 = 100 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Vertikale paal is 8 m hoog en ʼn draad loop van die bopunt na ʼn punt 6 m van die basis af. As draad R15 per meter kos, bepaal die totale koste van een draad.', answer: 'R150', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', 'R150'], explanation: 'c² = 8² + 6² = 64 + 36 = 100, c = 10 m.\nKoste = 10 × R15 = R150 ✓' },
        { difficulty: 'Hard', question: 'ʼn Vertikale paal is 20 m hoog. Stutdrade loop van die bopunt van die paal na twee punte op die grond, elk 15 m van die basis af, aan teenoorgestelde kante van die paal. Bepaal die totale lengte van albei stutdrade saam.', answer: '50 m', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50m', '50 m'], explanation: 'Een draad: c² = 20² + 15² = 400 + 225 = 625, c = 25 m.\nTwee drade: 2 × 25 = 50 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 9 m by 12 m. ʼn Tuinier wil die omtrek omhein en ook ʼn diagonale paadjie regoor dit bou. Bepaal die totale lengte heining en paadjie benodig (omtrek + diagonaal).', answer: '57 m', checkMode: 'auto', correctAnswer: '57', correctAnswers: ['57', '57m', '57 m'], explanation: 'Omtrek = 2 × (9 + 12) = 42 m.\nDiagonaal: d² = 9² + 12² = 81 + 144 = 225, d = 15 m.\nTotaal = 42 + 15 = 57 m ✓' },
        { difficulty: 'Hard', question: 'ʼn Brandweerwa se leer begin heeltemal ingetrek (lengte 0 m) by die basis van ʼn gebou en strek teen ʼn tempo van 0,5 m per sekonde uit. Dit moet ʼn venster 8 m teen die muur bereik, met sy basis vas 6 m van die gebou af. Hoeveel sekondes sal dit neem om tot presies die regte lengte uit te strek?', answer: '20 sekondes', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 sekondes', '20s'], explanation: 'Vereiste leerlengte (skuinssy): c² = 6² + 8² = 36 + 64 = 100, c = 10 m.\nTyd = afstand ÷ tempo = 10 ÷ 0,5 = 20 sekondes ✓' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die skuinssy van ʼn reghoekige driehoek altyd die langste sy is.', answer: 'Aangesien c² = a² + b² en beide a² en b² positief is, moet c² groter wees as a² alleen en groter as b² alleen. Dit beteken c moet groter wees as beide a en b, so die skuinssy is altyd die langste sy.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê as jy die lengte van albei sye van ʼn reghoekige driehoek verdubbel, verdubbel die skuinssy ook. Is hy korrek? Verduidelik met behulp van algebra.', answer: 'Ja, hy is korrek. As die oorspronklike sye a en b is, is die nuwe sye 2a en 2b. Die nuwe skuinssy is c\' = √((2a)² + (2b)²) = √(4a² + 4b²) = √(4(a² + b²)) = 2√(a² + b²) = 2c. Die skuinssy verdubbel dus ook.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho sê as jy die skuinssy en die omtrek van ʼn reghoekige driehoek ken, kan jy altyd albei sye bepaal. Verduidelik hoe dit gedoen kan word.', answer: 'As die skuinssy c is en die omtrek P is, dan is a + b = P − c. Saam met die Pythagoras-vergelyking a² + b² = c² het jy twee vergelykings met twee onbekendes (a en b), wat gelyktydig opgelos kan word (bv. deur substitusie) om albei sylengtes te bepaal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Voordat jy toets of drie gegewe sylengtes ʼn reghoekige driehoek vorm, verduidelik wat jy eers moet nagaan, en waarom.', answer: 'Jy moet eers nagaan of die drie lengtes hoegenaamd ʼn driehoek kan vorm, deur die driehoeksongelykheid te gebruik: die som van die twee korter sye moet groter wees as die langste sy. As dit nie geld nie, bestaan daar glad geen driehoek nie, so dit kan ook nie reghoekig wees nie — om die Pythagoras-voorwaarde te toets sou sinloos wees.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Skip vaar 8 km oos, en dan 6 km noord. Hoe ver is die skip van sy beginpunt af?', answer: '10 km', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10km', '10 km'], explanation: 'Die oos- en noord-sye vorm ʼn regte hoek.\nd² = 8² + 6² = 64 + 36 = 100\nd = √100 = 10 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Skip vaar 15 km oos, en dan 20 km noord. Hoe ver is die skip van sy beginpunt af?', answer: '25 km', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25km', '25 km'], explanation: 'd² = 15² + 20² = 225 + 400 = 625\nd = √625 = 25 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het ʼn diagonaal van 10 cm. Gebruik die Stelling van Pythagoras om die lengte van elke sy van die vierkant te bepaal (tot 2 desimale plekke).', answer: '7,07 cm', checkMode: 'auto', correctAnswer: '7.07', correctAnswers: ['7.07', '7.07cm', '7.07 cm', '7,07', '7,07cm', '7,07 cm'], explanation: 'Vir ʼn vierkant met sy s, geld die diagonaal d² = s² + s² = 2s².\n10² = 2s² → 100 = 2s² → s² = 50 → s = √50 ≈ 7,07 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het ʼn diagonaal van 12 cm. Gebruik die Stelling van Pythagoras om die lengte van elke sy van die vierkant te bepaal (tot 2 desimale plekke).', answer: '8,49 cm', checkMode: 'auto', correctAnswer: '8.49', correctAnswers: ['8.49', '8.49cm', '8.49 cm', '8,49', '8,49cm', '8,49 cm'], explanation: 'd² = 2s² → 12² = 2s² → 144 = 2s² → s² = 72 → s = √72 ≈ 8,49 cm ✓' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het sye in die verhouding 3:4 en ʼn skuinssy van 20 cm. Bepaal die lengte van elke sy.', answer: '12 cm en 16 cm', checkMode: 'auto', correctAnswer: '12 cm en 16 cm', correctAnswers: ['12 cm en 16 cm', '12 en 16', '12cm en 16cm', '12, 16'], explanation: 'Laat die sye 3x en 4x wees. Dan (3x)² + (4x)² = 20² → 9x² + 16x² = 400 → 25x² = 400 → x² = 16 → x = 4.\nSye = 3(4) = 12 cm en 4(4) = 16 cm ✓ (toets: 12² + 16² = 144 + 256 = 400 = 20²)' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het sye in die verhouding 5:12 en ʼn skuinssy van 39 cm. Bepaal die lengte van elke sy.', answer: '15 cm en 36 cm', checkMode: 'auto', correctAnswer: '15 cm en 36 cm', correctAnswers: ['15 cm en 36 cm', '15 en 36', '15cm en 36cm', '15, 36'], explanation: 'Laat die sye 5x en 12x wees. Dan (5x)² + (12x)² = 39² → 25x² + 144x² = 1 521 → 169x² = 1 521 → x² = 9 → x = 3.\nSye = 5(3) = 15 cm en 12(3) = 36 cm ✓ (toets: 15² + 36² = 225 + 1 296 = 1 521 = 39²)' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige driehoek het sye in die verhouding 8:15 en ʼn skuinssy van 34 cm. Bepaal die lengte van elke sy.', answer: '16 cm en 30 cm', checkMode: 'auto', correctAnswer: '16 cm en 30 cm', correctAnswers: ['16 cm en 30 cm', '16 en 30', '16cm en 30cm', '16, 30'], explanation: 'Laat die sye 8x en 15x wees. Dan (8x)² + (15x)² = 34² → 64x² + 225x² = 1 156 → 289x² = 1 156 → x² = 4 → x = 2.\nSye = 8(2) = 16 cm en 15(2) = 30 cm ✓ (toets: 16² + 30² = 256 + 900 = 1 156 = 34²)' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap en gekombineerde Pythagoras-probleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die multi-stap-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
