import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic equation roles) ────────────────────────────────
// hakies / gegewe vergelyking / elke faktor / x-terme / herrangskik → blou   (#2563eb)
// bewerking toegepas / nulproduk-eienskap / faktorisering            → oranje (#ea580c)
// oplossing(s)                                                       → groen  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Vergelykings',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING MULTI-STEP LINEAR EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-multi-step-linear-equations',
      title: 'Meerstap-lineêre Vergelykings Oplos',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 8 het jy vergelykings soos ${bl('5x + 9 = 34')} opgelos deur inverse bewerkings te gebruik. Nou brei ons dit uit na vergelykings wat ${bl('hakies')} bevat. Voordat jy x kan isoleer, moet jy eers die hakies ${or('uitbrei')} deur die distributiewe eienskap te gebruik, en dan enige ${or('soortgelyke terme kombineer')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hakies / gegewe vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewerking toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stap-vir-stap metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Brei uit')} — Vermenigvuldig enige hakies uit deur die distributiewe eienskap te gebruik. Let mooi op die teken wanneer ʼn hakie deur ʼn minus-teken voorafgegaan word.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vereenvoudig')} — Kombineer enige soortgelyke terme aan dieselfde kant van die vergelyking.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Los op')} — Gebruik inverse bewerkings om x te isoleer, presies soos jy in Graad 8 gedoen het.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let op die teken wanneer jy ʼn hakie aftrek</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn hakie deur ʼn minus-teken voorafgegaan word, soos ${bl('−3(x − 2)')}, vermenigvuldig die minus-teken in <strong>elke</strong> term binne-in: ${or('−3(x − 2) = −3x + 6')}, nie −3x − 6 nie. Kontroleer hierdie teken altyd twee keer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los 3(x + 2) = 21 op.',
          answer: `${gr('x = 5')}`,
          steps: [
            `${bl('Brei die hakie uit:')} ${or('3(x + 2) = 3x + 6')}`,
            `Die vergelyking is nou: ${or('3x + 6 = 21')}`,
            `Trek 6 van albei kante af: ${or('3x = 15')}`,
            `Deel albei kante deur 3: ${gr('x = 5')}`,
            `Kontroleer: 3(5 + 2) = 3 × 7 = 21 ✓`,
          ],
        },
        {
          question: 'Los 5x − 3(x − 2) = 16 op.',
          answer: `${gr('x = 5')}`,
          steps: [
            `${bl('Brei die hakie uit:')} ${or('−3(x − 2) = −3x + 6')} (die minus-teken keer albei tekens binne-in om)`,
            `Die vergelyking is nou: ${or('5x − 3x + 6 = 16')}`,
            `Kombineer soortgelyke terme: ${or('2x + 6 = 16')}`,
            `Trek 6 van albei kante af: ${or('2x = 10')}`,
            `Deel albei kante deur 2: ${gr('x = 5')}`,
            `Kontroleer: 5(5) − 3(5 − 2) = 25 − 3(3) = 25 − 9 = 16 ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los 2(x + 3) = 16 op.',
          answer: 'x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=5',
          correctAnswers: ['x=5', 'x = 5', '5'],
          explanation: 'Brei uit: 2x + 6 = 16.\nTrek 6 af: 2x = 10.\nDeel deur 2: x = 5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los 3(2x − 1) = 15 op.',
          answer: 'x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=3',
          correctAnswers: ['x=3', 'x = 3', '3'],
          explanation: 'Brei uit: 6x − 3 = 15.\nTel 3 by: 6x = 18.\nDeel deur 6: x = 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los 6(x − 2) − 2(x + 1) = 14 op.',
          answer: 'x = 7',
          checkMode: 'auto',
          correctAnswer: 'x=7',
          correctAnswers: ['x=7', 'x = 7', '7'],
          explanation: 'Brei albei hakies uit: 6x − 12 − 2x − 2 = 14.\nKombineer soortgelyke terme: 4x − 14 = 14.\nTel 14 by: 4x = 28.\nDeel deur 4: x = 7 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om hakies uit te brei deur die distributiewe eienskap te gebruik, gelyksoortige terme saam te voeg, en dan ʼn veelstap-lineêre vergelyking met inverse bewerkings op te los',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — VARIABLES ON BOTH SIDES AND EQUATIONS WITH FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'variables-both-sides-fractions',
      title: 'Veranderlikes aan Albei Kante en Vergelykings met Breuke',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Sommige vergelykings het die veranderlike ${bl('x')} aan albei kante. Om hierdie op te los, skuif eers al die ${bl('x')}-terme na een kant deur op te tel of af te trek, en los dan soos gewoonlik op. Ander vergelykings behels ${or('breuke')} — vermenigvuldig albei kante met die noemer om die breuk uit te skakel voordat jy oplos.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-terme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewerking toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee nuwe vergelykingtipes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Veranderlikes aan Albei Kante</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir ${bl('5x + 3 = 2x + 18')}, trek eers ${bl('2x')} van albei kante af: ${or('3x + 3 = 18')}. Los nou op soos ʼn gewone tweestap-vergelyking.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Vergelykings met Breuke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir ${or('(x + 4) ÷ 2 = 9')}, vermenigvuldig eers albei kante met 2 om die breuk uit te skakel: ${or('x + 4 = 18')}. Los nou op soos ʼn gewone vergelyking.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kies na watter kant om die x-terme te skuif</p>` +
        `<p style="margin:0;color:#1e3a8a;">Trek die ${bl('kleiner x-term')} van albei kante af — dit hou die oorblywende x-term ${gr('positief')}, wat makliker is om mee te werk. In ${bl('5x + 3 = 2x + 18')}, trek ${bl('2x')} af (nie 5x nie) aangesien 2x kleiner is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los 5x + 3 = 2x + 18 op.',
          answer: `${gr('x = 5')}`,
          steps: [
            `Trek ${bl('2x')} van albei kante af: ${or('3x + 3 = 18')}`,
            `Trek 3 van albei kante af: ${or('3x = 15')}`,
            `Deel albei kante deur 3: ${gr('x = 5')}`,
            `Kontroleer: 5(5) + 3 = 28, en 2(5) + 18 = 28 ✓`,
          ],
        },
        {
          question: 'Los x ÷ 3 + 2 = 7 op.',
          answer: `${gr('x = 15')}`,
          steps: [
            `Trek 2 van albei kante af: ${or('x ÷ 3 = 5')}`,
            `Vermenigvuldig albei kante met 3: ${gr('x = 15')}`,
            `Kontroleer: 15 ÷ 3 + 2 = 5 + 2 = 7 ✓`,
          ],
        },
        {
          question: 'Los (x + 4) ÷ 2 = 9 op.',
          answer: `${gr('x = 14')}`,
          steps: [
            `Vermenigvuldig albei kante met 2 om die breuk uit te skakel: ${or('x + 4 = 18')}`,
            `Trek 4 van albei kante af: ${gr('x = 14')}`,
            `Kontroleer: (14 + 4) ÷ 2 = 18 ÷ 2 = 9 ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los 4x + 5 = x + 17 op.',
          answer: 'x = 4',
          checkMode: 'auto',
          correctAnswer: 'x=4',
          correctAnswers: ['x=4', 'x = 4', '4'],
          explanation: 'Trek x van albei kante af: 3x + 5 = 17.\nTrek 5 af: 3x = 12.\nDeel deur 3: x = 4 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los x ÷ 4 + 3 = 8 op.',
          answer: 'x = 20',
          checkMode: 'auto',
          correctAnswer: 'x=20',
          correctAnswers: ['x=20', 'x = 20', '20'],
          explanation: 'Trek 3 van albei kante af: x ÷ 4 = 5.\nVermenigvuldig albei kante met 4: x = 20 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los elk van die volgende op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Los 7x − 2 = 3x + 18 op.',
              correctAnswer: 'x=5',
              correctAnswers: ['x=5', 'x = 5', '5'],
              explanation: 'Trek 3x van albei kante af: 4x − 2 = 18.\nTel 2 by: 4x = 20.\nDeel deur 4: x = 5 ✓',
            },
            {
              label: 'b) Los (2x − 1) ÷ 3 = 5 op.',
              correctAnswer: 'x=8',
              correctAnswers: ['x=8', 'x = 8', '8'],
              explanation: 'Vermenigvuldig albei kante met 3: 2x − 1 = 15.\nTel 1 by: 2x = 16.\nDeel deur 2: x = 8 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn vergelyking met veranderlikes aan albei kante op te los deur die kleiner x-term oor te skuif, gevolg deur ʼn voorbeeld wat ʼn breuk uitklaar deur albei kante te vermenigvuldig',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING EQUATIONS USING FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-factorisation',
      title: 'Vergelykings Oplos deur Faktorisering',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die oplos van vergelykings uit deur <strong>faktorisering</strong> te gebruik. Wanneer ʼn vergelyking gefaktoriseer kan word, stel ons elke faktor gelyk aan nul, aangesien enige getal vermenigvuldig met nul, nul gee.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gefaktoriseerde hakies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('elke oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stap-vir-stap metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Herrangskik')} — Maak seker die een kant van die vergelyking is gelyk aan nul voordat jy begin.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Faktoriseer')} — Vind twee getalle wat vermenigvuldig tot die konstante term en optel tot die koëffisiënt van x. Skryf die uitdrukking as ${bl('twee hakies')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Stel elke faktor gelyk aan nul')} — As ${bl('(x + a)(x + b)')} = 0, dan is x + a = 0 óf x + b = 0, wat ${or('twee oplossings')} gee.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom ons nul aan een kant nodig het</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die nulproduk-eienskap werk slegs wanneer die produk gelyk is aan <strong>nul</strong>. Herrangskik altyd die vergelyking sodat die een kant gelyk is aan nul voordat jy faktoriseer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los x² + 5x + 6 = 0 op deur te faktoriseer.',
          answer: `${or('x = −2')} óf ${or('x = −3')}`,
          steps: [
            `${bl('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot 6 en optel tot 5. Daardie getalle is 2 en 3.<br>${bl('(x + 2)(x + 3)')} = 0`,
            `Stel elke faktor gelyk aan nul: x + 2 = 0 óf x + 3 = 0`,
            `Los elke vergelyking op: ${or('x = −2')} óf ${or('x = −3')}`,
          ],
        },
        {
          question: 'Los x² − 9x + 20 = 0 op.',
          answer: `${or('x = 4')} óf ${or('x = 5')}`,
          steps: [
            `${bl('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot 20 en optel tot −9. Daardie getalle is −4 en −5.<br>${bl('(x − 4)(x − 5)')} = 0`,
            `Stel elke faktor gelyk aan nul: x − 4 = 0 óf x − 5 = 0`,
            `Los elke vergelyking op: ${or('x = 4')} óf ${or('x = 5')}`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los x² + 7x + 10 = 0 op deur te faktoriseer.',
          answer: 'x = −2 of x = −5',
          checkMode: 'auto',
          correctAnswer: 'x=-2 of x=-5',
          correctAnswers: ['x=-2 of x=-5', 'x=-5 of x=-2', 'x = -2 of x = -5', 'x = -5 of x = -2', '-2 of -5', '-5 of -2'],
          explanation: 'Faktoriseer: vind getalle wat vermenigvuldig tot 10, en optel tot 7 → 2 en 5.\n(x + 2)(x + 5) = 0\nx + 2 = 0 of x + 5 = 0\nx = −2 of x = −5 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los x² − 8x + 15 = 0 op.',
          answer: 'x = 3 of x = 5',
          checkMode: 'auto',
          correctAnswer: 'x=3 of x=5',
          correctAnswers: ['x=3 of x=5', 'x=5 of x=3', 'x = 3 of x = 5', 'x = 5 of x = 3', '3 of 5', '5 of 3'],
          explanation: 'Faktoriseer: vind getalle wat vermenigvuldig tot 15, en optel tot −8 → −3 en −5.\n(x − 3)(x − 5) = 0\nx − 3 = 0 of x − 5 = 0\nx = 3 of x = 5 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho los x² + 3x − 10 = 0 op en kry x = 2 of x = −5. Is hy korrek?',
          answer: 'Hy is korrek — faktoriseer deur getalle te vind wat vermenigvuldig tot −10 en optel tot 3: dit is 5 en −2. Dus (x + 5)(x − 2) = 0, wat x = −5 of x = 2 gee. Albei van Sipho se oplossings is korrek.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn kwadratiese vergelyking op te los deur dit in twee hakies te faktoriseer en die nulproduk-eienskap toe te pas',

      diagramPlaceholder:
        'Vloeidiagram wat wys hoe (x + 2)(x + 3) = 0 vertak in twee nulproduk-vergelykings x + 2 = 0 en x + 3 = 0, wat lei tot die twee oplossings x = −2 en x = −3',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 185" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="55" y="6" width="150" height="28" rx="6" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">(x + 2)(x + 3) = 0</text>` +
        `<line x1="130" y1="34" x2="130" y2="48" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="130" y1="48" x2="65" y2="64" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="130" y1="48" x2="195" y2="64" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="45" text-anchor="middle" font-size="10" font-style="italic" fill="#6b7280">óf</text>` +
        `<rect x="20" y="64" width="90" height="26" rx="6" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">x + 2 = 0</text>` +
        `<rect x="150" y="64" width="90" height="26" rx="6" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="195" y="81" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">x + 3 = 0</text>` +
        `<line x1="65" y1="90" x2="65" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="65,118 60,109 70,109" fill="#0f1f3d"/>` +
        `<line x1="195" y1="90" x2="195" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="195,118 190,109 200,109" fill="#0f1f3d"/>` +
        `<rect x="30" y="120" width="70" height="28" rx="6" fill="rgba(234,88,12,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">x = −2</text>` +
        `<rect x="160" y="120" width="70" height="28" rx="6" fill="rgba(234,88,12,0.1)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="195" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#ea580c">x = −3</text>` +
        `<text x="130" y="172" text-anchor="middle" font-size="11" fill="#6b7280">Twee oplossings uit een gefaktoriseerde vergelyking</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — EQUATIONS OF THE FORM 'PRODUCT OF FACTORS = 0'
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-of-factors-zero',
      title: "Vergelykings van die Vorm 'Produk van Faktore = 0'",
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons los vergelykings op wat reeds in gefaktoriseerde vorm gegee is, deur te besef dat as ʼn produk van faktore gelyk is aan nul, minstens een van die faktore gelyk aan nul moet wees — dit staan bekend as die <strong>nulproduk-eienskap</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('elke faktor')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nulproduk-eienskap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die nulproduk-eienskap</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;font-size:1.05em;color:#374151;">As ${bl('A')} × ${bl('B')} = ${or('0')}, dan is ${bl('A')} = ${or('0')} óf ${bl('B')} = ${or('0')}</p>` +
        `<p style="margin:8px 0 0;font-size:13px;color:#6b7280;">Dit beteken: wanneer ʼn produk van faktore gelyk is aan nul, moet <strong>minstens een</strong> van die faktore nul wees. Stel elke faktor gelyk aan nul en los op.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene fout om te vermy</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Verkeerd — ʼn oplossing word gemis</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir x(x − 6) = 0, om slegs x = 6 te skryf, mis die oplossing x = 0. Die faktor "x" gee die vergelyking x = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Korrek — albei oplossings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir x(x − 6) = 0: ${bl('x')} = 0 óf ${bl('x − 6')} = 0, wat ${gr('x = 0')} óf ${gr('x = 6')} gee.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Elke faktor gee ʼn oplossing</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel die aantal faktore — dit is die maksimum aantal oplossings. Werk deur <strong>elke</strong> faktor, insluitend los veranderlike-faktore soos x of 2x.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los (x − 7)(x + 2) = 0 op.',
          answer: `${gr('x = 7')} óf ${gr('x = −2')}`,
          steps: [
            `${or('Nulproduk-eienskap:')} As ${bl('(x − 7)')} × ${bl('(x + 2)')} = 0, dan is ${bl('x − 7')} = 0 óf ${bl('x + 2')} = 0`,
            `Los ${bl('x − 7')} = 0 op: ${gr('x = 7')}`,
            `Los ${bl('x + 2')} = 0 op: ${gr('x = −2')}`,
            `Oplossings: ${gr('x = 7')} óf ${gr('x = −2')} ✓`,
          ],
        },
        {
          question: 'Sipho los x(x − 6) = 0 op en kry slegs x = 6. Is hy korrek?',
          answer: `Nee — Sipho mis ʼn oplossing. Die korrekte oplossings is ${gr('x = 0')} óf ${gr('x = 6')}`,
          steps: [
            `${or('Nulproduk-eienskap:')} As ${bl('x')} × ${bl('(x − 6)')} = 0, dan is ${bl('x')} = 0 óf ${bl('x − 6')} = 0`,
            `Los ${bl('x')} = 0 op: ${gr('x = 0')}`,
            `Los ${bl('x − 6')} = 0 op: ${gr('x = 6')}`,
            `Sipho het vergeet dat die faktor ${bl('x')} self die oplossing ${gr('x = 0')} gee. Hy is verkeerd — daar is twee oplossings: ${gr('x = 0')} óf ${gr('x = 6')} ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Los (x − 4)(x + 9) = 0 op.',
          answer: 'x = 4 of x = −9',
          checkMode: 'auto',
          correctAnswer: 'x=4 of x=-9',
          correctAnswers: ['x=4 of x=-9', 'x=-9 of x=4', 'x = 4 of x = -9', 'x = -9 of x = 4', '4 of -9', '-9 of 4'],
          explanation: 'Nulproduk-eienskap: (x − 4) = 0 of (x + 9) = 0.\nx − 4 = 0 → x = 4\nx + 9 = 0 → x = −9\nOplossings: x = 4 of x = −9 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los x(x + 8) = 0 op.',
          answer: 'x = 0 of x = −8',
          checkMode: 'auto',
          correctAnswer: 'x=0 of x=-8',
          correctAnswers: ['x=0 of x=-8', 'x=-8 of x=0', 'x = 0 of x = -8', 'x = -8 of x = 0', '0 of -8', '-8 of 0'],
          explanation: 'Nulproduk-eienskap: x = 0 of (x + 8) = 0.\nx = 0\nx + 8 = 0 → x = −8\nOplossings: x = 0 of x = −8 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato los (2x − 6)(x + 3) = 0 op en kry x = 3 of x = −3. Kontroleer haar antwoord. Is sy korrek?',
          answer: 'Sy is korrek — 2x − 6 = 0 gee 2x = 6, dus x = 3. En x + 3 = 0 gee x = −3. Albei oplossings is x = 3 of x = −3, wat ooreenstem met wat Lerato geskryf het.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om die nulproduk-eienskap toe te pas om vergelykings op te los wat reeds in gefaktoriseerde vorm gegee is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SOLVING EQUATIONS REQUIRING FACTORISATION FIRST
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-factorise-first',
      title: 'Vergelykings Oplos wat Eers Faktorisering Vereis',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons los kwadratiese vergelykings op wat eers <strong>herrangskik en gefaktoriseer</strong> moet word voordat die nulproduk-eienskap toegepas kan word, wat dikwels die verskil van twee vierkante of gemeenskaplike faktor-metodes eers vereis.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('herrangskikking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('faktorisering')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Faktoriseringsmetodes op ʼn oogopslag</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gemeenskaplike faktor</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Haal eers die hoogste gemeenskaplike faktor uit.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">bv. 2x² − 8x = ${or('2x')}(x − 4)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Verskil van twee vierkante</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">a² − b² = (a − b)(a + b)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">bv. x² − 16 = ${or('(x − 4)(x + 4)')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Trinoom-faktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Vind twee getalle wat vermenigvuldig tot c en optel tot b.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">bv. x² + 4x − 21 = ${or('(x + 7)(x − 3)')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Herrangskik altyd eers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skuif al die terme na een kant sodat die vergelyking gelyk is aan nul. Eers dan kan jy ${or('faktoriseer')} en die nulproduk-eienskap toepas om die ${gr('oplossings')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los x² − 16 = 0 op.',
          answer: `${gr('x = 4')} óf ${gr('x = −4')}`,
          steps: [
            `${bl('Herken')} dit as ʼn verskil van twee vierkante: x² − 16 = x² − 4²`,
            `${or('Faktoriseer:')} ${or('(x − 4)(x + 4)')} = 0`,
            `Stel elke faktor gelyk aan nul: x − 4 = 0 óf x + 4 = 0`,
            `Oplossings: ${gr('x = 4')} óf ${gr('x = −4')} ✓`,
          ],
        },
        {
          question: 'Los 2x² − 8x = 0 op.',
          answer: `${gr('x = 0')} óf ${gr('x = 4')}`,
          steps: [
            `${bl('Herrangskik:')} Die een kant is reeds nul.`,
            `${or('Haal die gemeenskaplike faktor uit:')} ${or('2x')}(x − 4) = 0`,
            `Stel elke faktor gelyk aan nul: 2x = 0 óf x − 4 = 0`,
            `Oplossings: ${gr('x = 0')} óf ${gr('x = 4')} ✓`,
          ],
        },
        {
          question: 'Lerato los x² + 4x − 21 = 0 op. Wys die volledige werk.',
          answer: `${gr('x = −7')} óf ${gr('x = 3')}`,
          steps: [
            `${bl('Herrangskik:')} Die een kant is reeds nul.`,
            `${or('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot −21 en optel tot 4. Daardie getalle is 7 en −3.<br>${or('(x + 7)(x − 3)')} = 0`,
            `Stel elke faktor gelyk aan nul: x + 7 = 0 óf x − 3 = 0`,
            `Oplossings: ${gr('x = −7')} óf ${gr('x = 3')} ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Los x² − 36 = 0 op.',
          answer: 'x = 6 of x = −6',
          checkMode: 'auto',
          correctAnswer: 'x=6 of x=-6',
          correctAnswers: ['x=6 of x=-6', 'x=-6 of x=6', 'x = 6 of x = -6', 'x = -6 of x = 6', '6 of -6', '-6 of 6'],
          explanation: 'Herken as verskil van twee vierkante: x² − 36 = x² − 6²\nFaktoriseer: (x − 6)(x + 6) = 0\nx − 6 = 0 of x + 6 = 0\nx = 6 of x = −6 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los 3x² − 12x = 0 op deur eers die gemeenskaplike faktor uit te haal.',
          answer: 'Haal 3x uit: 3x(x − 4) = 0. Stel elke faktor gelyk aan nul: 3x = 0 of x − 4 = 0. Oplossings: x = 0 of x = 4.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Los x² + x − 12 = 0 op.',
          answer: 'x = −4 of x = 3',
          checkMode: 'auto',
          correctAnswer: 'x=-4 of x=3',
          correctAnswers: ['x=-4 of x=3', 'x=3 of x=-4', 'x = -4 of x = 3', 'x = 3 of x = -4', '-4 of 3', '3 of -4'],
          explanation: 'Faktoriseer: vind getalle wat vermenigvuldig tot −12, en optel tot 1 → 4 en −3.\n(x + 4)(x − 3) = 0\nx + 4 = 0 of x − 3 = 0\nx = −4 of x = 3 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo los x² − 49 = 0 op en kry slegs x = 7. Is hy korrek? Verduidelik.',
          answer: 'Nee — Thabo mis ʼn oplossing. x² − 49 = 0 is ʼn verskil van twee vierkante: (x − 7)(x + 7) = 0. Dit gee x − 7 = 0 of x + 7 = 0, dus x = 7 of x = −7. Thabo het die negatiewe oplossing vergeet.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Los x² − 10x + 24 = 0 op.',
          answer: 'x = 4 of x = 6',
          checkMode: 'auto',
          correctAnswer: 'x=4 of x=6',
          correctAnswers: ['x=4 of x=6', 'x=6 of x=4', 'x = 4 of x = 6', 'x = 6 of x = 4', '4 of 6', '6 of 4'],
          explanation: 'Faktoriseer: vind getalle wat vermenigvuldig tot 24, en optel tot −10 → −4 en −6.\n(x − 4)(x − 6) = 0\nx − 4 = 0 of x − 6 = 0\nx = 4 of x = 6 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Los 5x² − 45 = 0 op, en identifiseer die gemeenskaplike faktor- en verskil-van-vierkante-stappe.',
          answer: 'Stap 1: Haal die gemeenskaplike faktor 5 uit: 5(x² − 9) = 0.\nStap 2: Herken die verskil van vierkante: 5(x − 3)(x + 3) = 0.\nStap 3: Stel elke faktor gelyk aan nul: x − 3 = 0 of x + 3 = 0.\nOplossings: x = 3 of x = −3.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê elke kwadratiese vergelyking het presies twee oplossings. Is sy altyd korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nie altyd nie — sommige kwadratiese vergelykings het slegs een herhaalde oplossing (byvoorbeeld x² = 0 gee slegs x = 0), en sommige het glad geen reële oplossings nie (byvoorbeeld x² + 1 = 0). Amahle is verkeerd as ʼn algemene stelling.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Los x² + 2x − 35 = 0 op en verifieer jou antwoord deur terug te vervang in die oorspronklike vergelyking.',
          answer: 'Faktoriseer: vind getalle wat vermenigvuldig tot −35, en optel tot 2 → 7 en −5.\n(x + 7)(x − 5) = 0\nx = −7 of x = 5.\nVerifieer x = 5: 25 + 10 − 35 = 0 ✓\nVerifieer x = −7: 49 − 14 − 35 = 0 ✓',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Los 4x² − 16x = 0 op, en wys al die stappe volledig, insluitend faktorisering.',
          answer: 'x = 0 of x = 4',
          checkMode: 'auto',
          correctAnswer: 'x=0 of x=4',
          correctAnswers: ['x=0 of x=4', 'x=4 of x=0', 'x = 0 of x = 4', 'x = 4 of x = 0', '0 of 4', '4 of 0'],
          explanation: 'Haal die gemeenskaplike faktor 4x uit: 4x(x − 4) = 0.\nStel elke faktor gelyk aan nul: 4x = 0 of x − 4 = 0.\n4x = 0 → x = 0\nx − 4 = 0 → x = 4\nOplossings: x = 0 of x = 4 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn kwadratiese vergelyking te herrangskik, gemeenskaplike faktor- en verskil-van-vierkante-faktorisering toe te pas, en dan die nulproduk-eienskap te gebruik',
    },
  ],
  scoreMessages: [
    { minScore: 22, message: 'Uitstekend! Jy het algebraïese vergelykings baasgeraak.' },
    { minScore: 16, message: 'Goeie werk!' },
    { minScore: 11, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Meerstap-lineêre vergelykings met hakies (posisies 0-2)
        { difficulty: 'Medium', question: 'Los op: 4(x + 3) = 32', checkMode: 'auto', options: ['x = 5', 'x = 8', 'x = 11', 'x = -5'], correctIndex: 0, explanation: '4(x + 3) = 32 → Brei uit: 4x + 12 = 32 → 4x = 20 → x = 5. (x = 8 vergeet om die 3 af te trek nadat deur 4 gedeel is; x = 11 tel 3 by in plaas daarvan om dit af te trek; x = −5 keer die aftrekkingsvolgorde om.)' },
        { difficulty: 'Medium', question: 'Los op: 7x − 2(x − 4) = 38', checkMode: 'auto', options: ['x = -6', 'x = 6', 'x = 30', 'x = 8'], correctIndex: 1, explanation: '7x − 2(x − 4) = 38 → Brei uit (keer albei tekens binne-in om): 7x − 2x + 8 = 38 → 5x + 8 = 38 → 5x = 30 → x = 6. (x = −6 keer die teken van die korrekte antwoord om; x = 30 vergeet om aan die einde deur 5 te deel; x = 8 is ʼn klein rekenfout wanneer terme gekombineer word.)' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 5(x − 2) = 3x + 8 op deur 5x − 2 = 3x + 8 te skryf, en vergeet om die 2 met 5 te vermenigvuldig. Wat is die korrekte waarde van x?', checkMode: 'auto', options: ['x = 5', 'x = -9', 'x = 9', 'x = 18'], correctIndex: 2, explanation: 'Brei die hakie volledig uit: 5x − 10 = 3x + 8 → 2x − 10 = 8 → 2x = 18 → x = 9. Kontroleer: 5(9 − 2) = 35 en 3(9) + 8 = 35 ✓ (x = 5 is wat die leerder se foutiewe vergelyking gee; x = −9 keer die teken om; x = 18 vergeet om aan die einde deur 2 te deel.)' },

        // Blok B — Veranderlikes aan albei kante en vergelykings met breuke (posisies 3-5)
        { difficulty: 'Medium', question: 'Los op: 6x + 7 = 3x + 22', checkMode: 'auto', options: ['x = -5', 'x = 15', 'x = 7', 'x = 5'], correctIndex: 3, explanation: '6x + 7 = 3x + 22 → Trek 3x af: 3x + 7 = 22 → 3x = 15 → x = 5. (x = −5 keer die teken om; x = 15 vergeet om deur 3 te deel; x = 7 is ʼn klein glips wanneer die konstante afgetrek word.)' },
        { difficulty: 'Medium', question: 'Los op: (x + 5) ÷ 3 = 8', checkMode: 'auto', options: ['x = 19', 'x = 24', 'x = 3', 'x = -19'], correctIndex: 0, explanation: '(x + 5) ÷ 3 = 8 → Vermenigvuldig albei kante met 3: x + 5 = 24 → x = 19. (x = 24 vergeet om die 5 af te trek; x = 3 trek per ongeluk 5 van 8 af in plaas daarvan om met 3 te vermenigvuldig; x = −19 keer die teken om.)' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/2 + x/5 = 7', checkMode: 'auto', options: ['x = 70', 'x = 10', 'x = -10', 'x = 12'], correctIndex: 1, explanation: 'Vermenigvuldig elke term met die kleinste gemene deler, 10: 5x + 2x = 70 → 7x = 70 → x = 10. (x = 70 vergeet om aan die einde deur 7 te deel; x = −10 keer die teken om; x = 12 is ʼn klein rekenfout.)' },

        // Blok C — Kwadratiese vergelykings oplos deur ʼn trinoom te faktoriseer (posisies 6-9)
        { difficulty: 'Medium', question: 'Los x² + 9x + 18 = 0 op deur te faktoriseer.', checkMode: 'auto', options: ['x = 3 of x = 6', 'x = 3 of x = -6', 'x = -3 of x = -6', 'x = -3 of x = 6'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig tot 18, en optel tot 9 → 3 en 6. (x + 3)(x + 6) = 0 → x = −3 of x = −6. (Die ander opsies vergeet dat (x + a)(x + b) = 0 x = −a gee, nie x = a nie — die klassieke tekenfout met hierdie metode.)' },
        { difficulty: 'Medium', question: 'Los x² − 11x + 24 = 0 op.', checkMode: 'auto', options: ['x = -3 of x = -8', 'x = -3 of x = 8', 'x = 3 of x = -8', 'x = 3 of x = 8'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot 24, en optel tot −11 → −3 en −8. (x − 3)(x − 8) = 0 → x = 3 of x = 8. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium-Hard', question: 'Los x² − 2x − 15 = 0 op.', checkMode: 'auto', options: ['x = 5 of x = -3', 'x = -5 of x = 3', 'x = -5 of x = -3', 'x = 5 of x = 3'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig tot −15, en optel tot −2 → −5 en 3. (x − 5)(x + 3) = 0 → x = 5 of x = −3. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Hard', question: 'Kabelo los x² + 6x − 16 = 0 op en kry x = 2 of x = −8. Watter een van hierdie is die korrekte oplossingstel?', checkMode: 'auto', options: ['x = -2 of x = 8', 'x = 2 of x = -8', 'x = 2 of x = 8', 'x = -2 of x = -8'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig tot −16 en optel tot 6: 8 en −2. Dus (x + 8)(x − 2) = 0, wat x = −8 of x = 2 gee — Kabelo is korrek. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok D — Nulproduk-eienskap (posisies 10-12)
        { difficulty: 'Medium', question: 'Los (x − 5)(x + 8) = 0 op.', checkMode: 'auto', options: ['x = -5 of x = 8', 'x = -5 of x = -8', 'x = 5 of x = -8', 'x = 5 of x = 8'], correctIndex: 2, explanation: 'Nulproduk-eienskap: x − 5 = 0 of x + 8 = 0 → x = 5 of x = −8. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium', question: 'Los x(x − 9) = 0 op.', checkMode: 'auto', options: ['x = 9', 'x = 0 of x = -9', 'x = -9', 'x = 0 of x = 9'], correctIndex: 3, explanation: 'Nulproduk-eienskap: x = 0 of x − 9 = 0 → x = 0 of x = 9. (x = 9 alleen vergeet dat die los faktor x ook ʼn oplossing gee; die ander kry die teken van die tweede wortel verkeerd.)' },
        { difficulty: 'Hard', question: 'Bongani los x(x + 7) = 0 op en skryf slegs x = −7 as die antwoord. Wat is die korrekte volledige oplossing?', checkMode: 'auto', options: ['x = 0 of x = -7', 'x = -7', 'x = 0 of x = 7', 'x = 7'], correctIndex: 0, explanation: 'Nulproduk-eienskap: x = 0 of x + 7 = 0 → x = 0 of x = −7. Bongani het vergeet dat die los veranderlike-faktor x ook ʼn oplossing gee. (x = −7 alleen is Bongani se onvolledige antwoord; die ander kry ook die teken verkeerd.)' },

        // Blok E — Eers faktoriseer: gemeenskaplike faktor en verskil van vierkante (posisies 13-16)
        { difficulty: 'Medium', question: 'Los x² − 25 = 0 op.', checkMode: 'auto', options: ['x = 5', 'x = 5 of x = -5', 'x = 25', 'x = -5'], correctIndex: 1, explanation: 'Verskil van twee vierkante: x² − 25 = x² − 5² → (x − 5)(x + 5) = 0 → x = 5 of x = −5. (x = 5 of x = −5 alleen mis elk een oplossing; x = 25 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Medium', question: 'Los 3x² − 21x = 0 op deur eers die gemeenskaplike faktor uit te haal.', checkMode: 'auto', options: ['x = 7', 'x = 0 of x = -7', 'x = 0 of x = 7', 'x = 0 of x = 21'], correctIndex: 2, explanation: 'Haal die gemeenskaplike faktor 3x uit: 3x(x − 7) = 0 → x = 0 of x = 7. (x = 7 alleen vergeet die oplossing x = 0; die tekenomgekeerde en ongedeelde opsies is ook verkeerd.)' },
        { difficulty: 'Medium-Hard', question: 'Los 2x² − 32 = 0 op deur eers die gemeenskaplike faktor uit te haal, en dan die verskil van vierkante toe te pas.', checkMode: 'auto', options: ['x = 4', 'x = 16', 'x = -4', 'x = 4 of x = -4'], correctIndex: 3, explanation: '2(x² − 16) = 0 → 2(x − 4)(x + 4) = 0 → x = 4 of x = −4. (x = 4 of x = −4 alleen mis elk een oplossing; x = 16 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Hard', question: 'Los x² + 5x = 24 op, en wys die herrangskikkingstap voordat jy faktoriseer.', checkMode: 'auto', options: ['x = -8 of x = 3', 'x = 8 of x = -3', 'x = 8 of x = 3', 'x = -8 of x = -3'], correctIndex: 0, explanation: 'Herrangskik: x² + 5x − 24 = 0. Vind twee getalle wat vermenigvuldig tot −24, en optel tot 5 → 8 en −3. (x + 8)(x − 3) = 0 → x = −8 of x = 3. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok F — Toegepaste woordprobleme en foutopsporing wat lineêre en kwadratiese vaardighede meng (posisies 17-19)
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin het ʼn lengte wat 3 m meer as sy wydte is. As die oppervlakte 40 m² is, wat is die wydte w? (Verwerp enige negatiewe oplossing, aangesien wydte nie negatief kan wees nie.)', checkMode: 'auto', options: ['w = -8', 'w = 5', 'w = 8', 'w = 4'], correctIndex: 1, explanation: 'w(w + 3) = 40 → w² + 3w − 40 = 0 → (w + 8)(w − 5) = 0 → w = −8 of w = 5. Wydte kan nie negatief wees nie, dus w = 5. (w = −8 is die verworpe wortel; w = 8 is die lengte, nie die wydte nie; w = 4 kom van ʼn faktoriseringsglips.)' },
        { difficulty: 'Medium', question: 'Twee keer ʼn getal, vermeerder met 9, is gelyk aan die getal vermeerder met 16. Vind die getal.', checkMode: 'auto', options: ['x = -7', 'x = 16', 'x = 7', 'x = 9'], correctIndex: 2, explanation: 'Laat die getal x wees. 2x + 9 = x + 16 → x + 9 = 16 → x = 7. (x = −7 keer die teken om; x = 16 vergeet om die 9 af te trek; x = 9 is ʼn klein rekenfout.)' },
        { difficulty: 'Hard', question: 'Zanele los x² − 6x = 0 op en sê die enigste oplossing is x = 6, omdat sy albei kante deur x deel om x − 6 = 0 te kry. Wat is die korrekte oplossing?', checkMode: 'auto', options: ['x = 6', 'x = 0', 'x = 0 of x = -6', 'x = 0 of x = 6'], correctIndex: 3, explanation: 'Om deur x te deel mag nie — x kan nul wees, en deling deur nul is onbepaald, sodat dit stilweg die oplossing x = 0 laat verval. Faktoriseer eerder: x(x − 6) = 0 → x = 0 of x = 6. (x = 6 is Zanele se onvolledige antwoord; x = 0 alleen mis die ander oplossing; die tekenomgekeerde opsie is ook verkeerd.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, insluitend faktorisering en die nulproduk-eienskap, baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor faktorisering of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor trinoom-faktorisering en die nulproduk-eienskap weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Meerstap-lineêre vergelykings met hakies (posisies 0-2)
        { difficulty: 'Medium', question: 'Los op: 5(x + 4) = 45', checkMode: 'auto', options: ['x = 5', 'x = 9', 'x = 13', 'x = -5'], correctIndex: 0, explanation: '5(x + 4) = 45 → Brei uit: 5x + 20 = 45 → 5x = 25 → x = 5. (x = 9 vergeet om die 4 af te trek nadat deur 5 gedeel is; x = 13 tel 4 by in plaas daarvan om dit af te trek; x = −5 keer die aftrekkingsvolgorde om.)' },
        { difficulty: 'Medium', question: 'Los op: 8x − 3(x − 5) = 50', checkMode: 'auto', options: ['x = -7', 'x = 7', 'x = 35', 'x = 9'], correctIndex: 1, explanation: '8x − 3(x − 5) = 50 → Brei uit (keer albei tekens binne-in om): 8x − 3x + 15 = 50 → 5x + 15 = 50 → 5x = 35 → x = 7. (x = −7 keer die teken van die korrekte antwoord om; x = 35 vergeet om aan die einde deur 5 te deel; x = 9 is ʼn klein rekenfout wanneer terme gekombineer word.)' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 6(x − 3) = 2x + 10 op deur 6x − 3 = 2x + 10 te skryf, en vergeet om die 3 met 6 te vermenigvuldig. Wat is die korrekte waarde van x?', checkMode: 'auto', options: ['x = 3,25', 'x = -7', 'x = 7', 'x = 28'], correctIndex: 2, explanation: 'Brei die hakie volledig uit: 6x − 18 = 2x + 10 → 4x − 18 = 10 → 4x = 28 → x = 7. Kontroleer: 6(7 − 3) = 24 en 2(7) + 10 = 24 ✓ (x = 3,25 is wat die leerder se foutiewe vergelyking gee; x = −7 keer die teken om; x = 28 vergeet om aan die einde deur 4 te deel.)' },

        // Blok B — Veranderlikes aan albei kante en vergelykings met breuke (posisies 3-5)
        { difficulty: 'Medium', question: 'Los op: 7x + 4 = 2x + 29', checkMode: 'auto', options: ['x = -5', 'x = 25', 'x = 7', 'x = 5'], correctIndex: 3, explanation: '7x + 4 = 2x + 29 → Trek 2x af: 5x + 4 = 29 → 5x = 25 → x = 5. (x = −5 keer die teken om; x = 25 vergeet om deur 5 te deel; x = 7 is ʼn klein glips wanneer die konstante afgetrek word.)' },
        { difficulty: 'Medium', question: 'Los op: (x + 8) ÷ 4 = 9', checkMode: 'auto', options: ['x = 28', 'x = 36', 'x = 1', 'x = -28'], correctIndex: 0, explanation: '(x + 8) ÷ 4 = 9 → Vermenigvuldig albei kante met 4: x + 8 = 36 → x = 28. (x = 36 vergeet om die 8 af te trek; x = 1 trek per ongeluk 8 van 9 af in plaas daarvan om met 4 te vermenigvuldig; x = −28 keer die teken om.)' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/3 + x/6 = 9', checkMode: 'auto', options: ['x = 54', 'x = 18', 'x = -18', 'x = 20'], correctIndex: 1, explanation: 'Vermenigvuldig elke term met die kleinste gemene deler, 6: 2x + x = 54 → 3x = 54 → x = 18. (x = 54 vergeet om aan die einde deur 3 te deel; x = −18 keer die teken om; x = 20 is ʼn klein rekenfout.)' },

        // Blok C — Kwadratiese vergelykings oplos deur ʼn trinoom te faktoriseer (posisies 6-9)
        { difficulty: 'Medium', question: 'Los x² + 8x + 15 = 0 op deur te faktoriseer.', checkMode: 'auto', options: ['x = 3 of x = 5', 'x = 3 of x = -5', 'x = -3 of x = -5', 'x = -3 of x = 5'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig tot 15, en optel tot 8 → 3 en 5. (x + 3)(x + 5) = 0 → x = −3 of x = −5. (Die ander opsies vergeet dat (x + a)(x + b) = 0 x = −a gee, nie x = a nie.)' },
        { difficulty: 'Medium', question: 'Los x² − 13x + 36 = 0 op.', checkMode: 'auto', options: ['x = -4 of x = -9', 'x = -4 of x = 9', 'x = 4 of x = -9', 'x = 4 of x = 9'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot 36, en optel tot −13 → −4 en −9. (x − 4)(x − 9) = 0 → x = 4 of x = 9. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium-Hard', question: 'Los x² − 3x − 18 = 0 op.', checkMode: 'auto', options: ['x = 6 of x = -3', 'x = -6 of x = 3', 'x = -6 of x = -3', 'x = 6 of x = 3'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig tot −18, en optel tot −3 → −6 en 3. (x − 6)(x + 3) = 0 → x = 6 of x = −3. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Hard', question: 'Palesa los x² + 2x − 24 = 0 op en kry x = 4 of x = −6. Watter een van hierdie is die korrekte oplossingstel?', checkMode: 'auto', options: ['x = -4 of x = 6', 'x = 4 of x = -6', 'x = 4 of x = 6', 'x = -4 of x = -6'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig tot −24 en optel tot 2: 6 en −4. Dus (x + 6)(x − 4) = 0, wat x = −6 of x = 4 gee — Palesa is korrek. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok D — Nulproduk-eienskap (posisies 10-12)
        { difficulty: 'Medium', question: 'Los (x − 6)(x + 4) = 0 op.', checkMode: 'auto', options: ['x = -6 of x = 4', 'x = -6 of x = -4', 'x = 6 of x = -4', 'x = 6 of x = 4'], correctIndex: 2, explanation: 'Nulproduk-eienskap: x − 6 = 0 of x + 4 = 0 → x = 6 of x = −4. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium', question: 'Los x(x − 11) = 0 op.', checkMode: 'auto', options: ['x = 11', 'x = 0 of x = -11', 'x = -11', 'x = 0 of x = 11'], correctIndex: 3, explanation: 'Nulproduk-eienskap: x = 0 of x − 11 = 0 → x = 0 of x = 11. (x = 11 alleen vergeet dat die los faktor x ook ʼn oplossing gee; die ander kry die teken van die tweede wortel verkeerd.)' },
        { difficulty: 'Hard', question: 'Tumelo los x(x + 9) = 0 op en skryf slegs x = −9 as die antwoord. Wat is die korrekte volledige oplossing?', checkMode: 'auto', options: ['x = 0 of x = -9', 'x = -9', 'x = 0 of x = 9', 'x = 9'], correctIndex: 0, explanation: 'Nulproduk-eienskap: x = 0 of x + 9 = 0 → x = 0 of x = −9. Tumelo het vergeet dat die los veranderlike-faktor x ook ʼn oplossing gee. (x = −9 alleen is Tumelo se onvolledige antwoord; die ander kry ook die teken verkeerd.)' },

        // Blok E — Eers faktoriseer: gemeenskaplike faktor en verskil van vierkante (posisies 13-16)
        { difficulty: 'Medium', question: 'Los x² − 49 = 0 op.', checkMode: 'auto', options: ['x = 7', 'x = 7 of x = -7', 'x = 49', 'x = -7'], correctIndex: 1, explanation: 'Verskil van twee vierkante: x² − 49 = x² − 7² → (x − 7)(x + 7) = 0 → x = 7 of x = −7. (x = 7 of x = −7 alleen mis elk een oplossing; x = 49 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Medium', question: 'Los 4x² − 20x = 0 op deur eers die gemeenskaplike faktor uit te haal.', checkMode: 'auto', options: ['x = 5', 'x = 0 of x = -5', 'x = 0 of x = 5', 'x = 0 of x = 20'], correctIndex: 2, explanation: 'Haal die gemeenskaplike faktor 4x uit: 4x(x − 5) = 0 → x = 0 of x = 5. (x = 5 alleen vergeet die oplossing x = 0; die tekenomgekeerde en ongedeelde opsies is ook verkeerd.)' },
        { difficulty: 'Medium-Hard', question: 'Los 3x² − 48 = 0 op deur eers die gemeenskaplike faktor uit te haal, en dan die verskil van vierkante toe te pas.', checkMode: 'auto', options: ['x = 4', 'x = 16', 'x = -4', 'x = 4 of x = -4'], correctIndex: 3, explanation: '3(x² − 16) = 0 → 3(x − 4)(x + 4) = 0 → x = 4 of x = −4. (x = 4 of x = −4 alleen mis elk een oplossing; x = 16 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Hard', question: 'Los x² + 4x = 21 op, en wys die herrangskikkingstap voordat jy faktoriseer.', checkMode: 'auto', options: ['x = -7 of x = 3', 'x = 7 of x = -3', 'x = 7 of x = 3', 'x = -7 of x = -3'], correctIndex: 0, explanation: 'Herrangskik: x² + 4x − 21 = 0. Vind twee getalle wat vermenigvuldig tot −21, en optel tot 4 → 7 en −3. (x + 7)(x − 3) = 0 → x = −7 of x = 3. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok F — Toegepaste woordprobleme en foutopsporing wat lineêre en kwadratiese vaardighede meng (posisies 17-19)
        { difficulty: 'Hard', question: 'ʼn Reghoekige blombedding het ʼn lengte wat 4 m meer as sy wydte is. As die oppervlakte 45 m² is, wat is die wydte w? (Verwerp enige negatiewe oplossing, aangesien wydte nie negatief kan wees nie.)', checkMode: 'auto', options: ['w = -9', 'w = 5', 'w = 9', 'w = 6'], correctIndex: 1, explanation: 'w(w + 4) = 45 → w² + 4w − 45 = 0 → (w + 9)(w − 5) = 0 → w = −9 of w = 5. Wydte kan nie negatief wees nie, dus w = 5. (w = −9 is die verworpe wortel; w = 9 is die lengte, nie die wydte nie; w = 6 kom van ʼn faktoriseringsglips.)' },
        { difficulty: 'Medium', question: 'Drie keer ʼn getal, verminder met 5, is gelyk aan die getal vermeerder met 11. Vind die getal.', checkMode: 'auto', options: ['x = -8', 'x = 16', 'x = 8', 'x = 10'], correctIndex: 2, explanation: 'Laat die getal x wees. 3x − 5 = x + 11 → 2x − 5 = 11 → 2x = 16 → x = 8. (x = −8 keer die teken om; x = 16 vergeet om aan die einde deur 2 te deel; x = 10 is ʼn klein rekenfout.)' },
        { difficulty: 'Hard', question: 'Kagiso los x² − 8x = 0 op en sê die enigste oplossing is x = 8, omdat hy albei kante deur x deel om x − 8 = 0 te kry. Wat is die korrekte oplossing?', checkMode: 'auto', options: ['x = 8', 'x = 0', 'x = 0 of x = -8', 'x = 0 of x = 8'], correctIndex: 3, explanation: 'Om deur x te deel mag nie — x kan nul wees, en deling deur nul is onbepaald, sodat dit stilweg die oplossing x = 0 laat verval. Faktoriseer eerder: x(x − 8) = 0 → x = 0 of x = 8. (x = 8 is Kagiso se onvolledige antwoord; x = 0 alleen mis die ander oplossing; die tekenomgekeerde opsie is ook verkeerd.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, insluitend faktorisering en die nulproduk-eienskap, baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor faktorisering of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor trinoom-faktorisering en die nulproduk-eienskap weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Meerstap-lineêre vergelykings met hakies (posisies 0-2)
        { difficulty: 'Medium', question: 'Los op: 6(x + 5) = 54', checkMode: 'auto', options: ['x = 4', 'x = 9', 'x = 14', 'x = -4'], correctIndex: 0, explanation: '6(x + 5) = 54 → Brei uit: 6x + 30 = 54 → 6x = 24 → x = 4. (x = 9 vergeet om die 5 af te trek nadat deur 6 gedeel is; x = 14 tel 5 by in plaas daarvan om dit af te trek; x = −4 keer die aftrekkingsvolgorde om.)' },
        { difficulty: 'Medium', question: 'Los op: 9x − 4(x − 3) = 47', checkMode: 'auto', options: ['x = -7', 'x = 7', 'x = 35', 'x = 9'], correctIndex: 1, explanation: '9x − 4(x − 3) = 47 → Brei uit (keer albei tekens binne-in om): 9x − 4x + 12 = 47 → 5x + 12 = 47 → 5x = 35 → x = 7. (x = −7 keer die teken van die korrekte antwoord om; x = 35 vergeet om aan die einde deur 5 te deel; x = 9 is ʼn klein rekenfout wanneer terme gekombineer word.)' },
        { difficulty: 'Hard', question: 'ʼn Leerder los 4(x − 6) = 2x − 4 op deur 4x − 6 = 2x − 4 te skryf, en vergeet om die 6 met 4 te vermenigvuldig. Wat is die korrekte waarde van x?', checkMode: 'auto', options: ['x = 1', 'x = -10', 'x = 10', 'x = 20'], correctIndex: 2, explanation: 'Brei die hakie volledig uit: 4x − 24 = 2x − 4 → 2x − 24 = −4 → 2x = 20 → x = 10. Kontroleer: 4(10 − 6) = 16 en 2(10) − 4 = 16 ✓ (x = 1 is wat die leerder se foutiewe vergelyking gee; x = −10 keer die teken om; x = 20 vergeet om aan die einde deur 2 te deel.)' },

        // Blok B — Veranderlikes aan albei kante en vergelykings met breuke (posisies 3-5)
        { difficulty: 'Medium', question: 'Los op: 8x + 3 = 3x + 38', checkMode: 'auto', options: ['x = -7', 'x = 35', 'x = 9', 'x = 7'], correctIndex: 3, explanation: '8x + 3 = 3x + 38 → Trek 3x af: 5x + 3 = 38 → 5x = 35 → x = 7. (x = −7 keer die teken om; x = 35 vergeet om deur 5 te deel; x = 9 is ʼn klein glips wanneer die konstante afgetrek word.)' },
        { difficulty: 'Medium', question: 'Los op: (x + 6) ÷ 5 = 7', checkMode: 'auto', options: ['x = 29', 'x = 35', 'x = 1', 'x = -29'], correctIndex: 0, explanation: '(x + 6) ÷ 5 = 7 → Vermenigvuldig albei kante met 5: x + 6 = 35 → x = 29. (x = 35 vergeet om die 6 af te trek; x = 1 trek per ongeluk 6 van 7 af in plaas daarvan om met 5 te vermenigvuldig; x = −29 keer die teken om.)' },
        { difficulty: 'Medium-Hard', question: 'Los op: x/4 + x/3 = 14', checkMode: 'auto', options: ['x = 168', 'x = 24', 'x = -24', 'x = 26'], correctIndex: 1, explanation: 'Vermenigvuldig elke term met die kleinste gemene deler, 12: 3x + 4x = 168 → 7x = 168 → x = 24. (x = 168 vergeet om aan die einde deur 7 te deel; x = −24 keer die teken om; x = 26 is ʼn klein rekenfout.)' },

        // Blok C — Kwadratiese vergelykings oplos deur ʼn trinoom te faktoriseer (posisies 6-9)
        { difficulty: 'Medium', question: 'Los x² + 10x + 21 = 0 op deur te faktoriseer.', checkMode: 'auto', options: ['x = 3 of x = 7', 'x = 3 of x = -7', 'x = -3 of x = -7', 'x = -3 of x = 7'], correctIndex: 2, explanation: 'Vind twee getalle wat vermenigvuldig tot 21, en optel tot 10 → 3 en 7. (x + 3)(x + 7) = 0 → x = −3 of x = −7. (Die ander opsies vergeet dat (x + a)(x + b) = 0 x = −a gee, nie x = a nie.)' },
        { difficulty: 'Medium', question: 'Los x² − 12x + 35 = 0 op.', checkMode: 'auto', options: ['x = -5 of x = -7', 'x = -5 of x = 7', 'x = 5 of x = -7', 'x = 5 of x = 7'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot 35, en optel tot −12 → −5 en −7. (x − 5)(x − 7) = 0 → x = 5 of x = 7. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium-Hard', question: 'Los x² − 4x − 21 = 0 op.', checkMode: 'auto', options: ['x = 7 of x = -3', 'x = -7 of x = 3', 'x = -7 of x = -3', 'x = 7 of x = 3'], correctIndex: 0, explanation: 'Vind twee getalle wat vermenigvuldig tot −21, en optel tot −4 → −7 en 3. (x − 7)(x + 3) = 0 → x = 7 of x = −3. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Hard', question: 'Naledi los x² + 3x − 28 = 0 op en kry x = 4 of x = −7. Watter een van hierdie is die korrekte oplossingstel?', checkMode: 'auto', options: ['x = -4 of x = 7', 'x = 4 of x = -7', 'x = 4 of x = 7', 'x = -4 of x = -7'], correctIndex: 1, explanation: 'Vind twee getalle wat vermenigvuldig tot −28 en optel tot 3: 7 en −4. Dus (x + 7)(x − 4) = 0, wat x = −7 of x = 4 gee — Naledi is korrek. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok D — Nulproduk-eienskap (posisies 10-12)
        { difficulty: 'Medium', question: 'Los (x − 8)(x + 3) = 0 op.', checkMode: 'auto', options: ['x = -8 of x = 3', 'x = -8 of x = -3', 'x = 8 of x = -3', 'x = 8 of x = 3'], correctIndex: 2, explanation: 'Nulproduk-eienskap: x − 8 = 0 of x + 3 = 0 → x = 8 of x = −3. (Die ander opsies keer die teken van een of albei wortels om.)' },
        { difficulty: 'Medium', question: 'Los x(x − 13) = 0 op.', checkMode: 'auto', options: ['x = 13', 'x = 0 of x = -13', 'x = -13', 'x = 0 of x = 13'], correctIndex: 3, explanation: 'Nulproduk-eienskap: x = 0 of x − 13 = 0 → x = 0 of x = 13. (x = 13 alleen vergeet dat die los faktor x ook ʼn oplossing gee; die ander kry die teken van die tweede wortel verkeerd.)' },
        { difficulty: 'Hard', question: 'Mpho los x(x + 5) = 0 op en skryf slegs x = −5 as die antwoord. Wat is die korrekte volledige oplossing?', checkMode: 'auto', options: ['x = 0 of x = -5', 'x = -5', 'x = 0 of x = 5', 'x = 5'], correctIndex: 0, explanation: 'Nulproduk-eienskap: x = 0 of x + 5 = 0 → x = 0 of x = −5. Mpho het vergeet dat die los veranderlike-faktor x ook ʼn oplossing gee. (x = −5 alleen is Mpho se onvolledige antwoord; die ander kry ook die teken verkeerd.)' },

        // Blok E — Eers faktoriseer: gemeenskaplike faktor en verskil van vierkante (posisies 13-16)
        { difficulty: 'Medium', question: 'Los x² − 81 = 0 op.', checkMode: 'auto', options: ['x = 9', 'x = 9 of x = -9', 'x = 81', 'x = -9'], correctIndex: 1, explanation: 'Verskil van twee vierkante: x² − 81 = x² − 9² → (x − 9)(x + 9) = 0 → x = 9 of x = −9. (x = 9 of x = −9 alleen mis elk een oplossing; x = 81 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Medium', question: 'Los 5x² − 30x = 0 op deur eers die gemeenskaplike faktor uit te haal.', checkMode: 'auto', options: ['x = 6', 'x = 0 of x = -6', 'x = 0 of x = 6', 'x = 0 of x = 30'], correctIndex: 2, explanation: 'Haal die gemeenskaplike faktor 5x uit: 5x(x − 6) = 0 → x = 0 of x = 6. (x = 6 alleen vergeet die oplossing x = 0; die tekenomgekeerde en ongedeelde opsies is ook verkeerd.)' },
        { difficulty: 'Medium-Hard', question: 'Los 2x² − 50 = 0 op deur eers die gemeenskaplike faktor uit te haal, en dan die verskil van vierkante toe te pas.', checkMode: 'auto', options: ['x = 5', 'x = 25', 'x = -5', 'x = 5 of x = -5'], correctIndex: 3, explanation: '2(x² − 25) = 0 → 2(x − 5)(x + 5) = 0 → x = 5 of x = −5. (x = 5 of x = −5 alleen mis elk een oplossing; x = 25 vergeet om die vierkantswortel te trek.)' },
        { difficulty: 'Hard', question: 'Los x² + 6x = 16 op, en wys die herrangskikkingstap voordat jy faktoriseer.', checkMode: 'auto', options: ['x = -8 of x = 2', 'x = 8 of x = -2', 'x = 8 of x = 2', 'x = -8 of x = -2'], correctIndex: 0, explanation: 'Herrangskik: x² + 6x − 16 = 0. Vind twee getalle wat vermenigvuldig tot −16, en optel tot 6 → 8 en −2. (x + 8)(x − 2) = 0 → x = −8 of x = 2. (Die ander opsies keer die teken van een of albei wortels om.)' },

        // Blok F — Toegepaste woordprobleme en foutopsporing wat lineêre en kwadratiese vaardighede meng (posisies 17-19)
        { difficulty: 'Hard', question: 'ʼn Reghoekige groentetuin het ʼn lengte wat 5 m meer as sy wydte is. As die oppervlakte 36 m² is, wat is die wydte w? (Verwerp enige negatiewe oplossing, aangesien wydte nie negatief kan wees nie.)', checkMode: 'auto', options: ['w = -9', 'w = 4', 'w = 9', 'w = 6'], correctIndex: 1, explanation: 'w(w + 5) = 36 → w² + 5w − 36 = 0 → (w + 9)(w − 4) = 0 → w = −9 of w = 4. Wydte kan nie negatief wees nie, dus w = 4. (w = −9 is die verworpe wortel; w = 9 is die lengte, nie die wydte nie; w = 6 kom van ʼn faktoriseringsglips.)' },
        { difficulty: 'Medium', question: 'Vier keer ʼn getal, verminder met 7, is gelyk aan die getal vermeerder met 20. Vind die getal.', checkMode: 'auto', options: ['x = -9', 'x = 27', 'x = 9', 'x = 11'], correctIndex: 2, explanation: 'Laat die getal x wees. 4x − 7 = x + 20 → 3x − 7 = 20 → 3x = 27 → x = 9. (x = −9 keer die teken om; x = 27 vergeet om aan die einde deur 3 te deel; x = 11 is ʼn klein rekenfout.)' },
        { difficulty: 'Hard', question: 'Refilwe los x² − 10x = 0 op en sê die enigste oplossing is x = 10, omdat sy albei kante deur x deel om x − 10 = 0 te kry. Wat is die korrekte oplossing?', checkMode: 'auto', options: ['x = 10', 'x = 0', 'x = 0 of x = -10', 'x = 0 of x = 10'], correctIndex: 3, explanation: 'Om deur x te deel mag nie — x kan nul wees, en deling deur nul is onbepaald, sodat dit stilweg die oplossing x = 0 laat verval. Faktoriseer eerder: x(x − 10) = 0 → x = 0 of x = 10. (x = 10 is Refilwe se onvolledige antwoord; x = 0 alleen mis die ander oplossing; die tekenomgekeerde opsie is ook verkeerd.)' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, insluitend faktorisering en die nulproduk-eienskap, baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Gaan enige gemiste vrae oor faktorisering of breuke weer deur en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor trinoom-faktorisering en die nulproduk-eienskap weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
