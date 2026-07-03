import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// unknown variable → blue   (#2563eb)
// equation         → orange (#ea580c)
// solution         → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Vergelykings',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SETTING UP AND SOLVING EQUATIONS BY INSPECTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'setting-up-solving-by-inspection',
      title: 'Vergelykings Opstel en Oplos deur Inspeksie',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien hoe om vergelykings op te stel om probleemsituasies te beskryf, hulle te analiseer en te interpreteer, en op te los deur <strong>inspeksie</strong> — deur te vra watter waarde die vergelyking waar maak.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onbekende veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernidees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onbekende veranderlike</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Letter soos ${bl('x')} wat die waarde voorstel wat ons probeer vind.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Wiskundige stelling wat wys dat twee uitdrukkings gelyk is, bv. ${or('4x + 7 = 31')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Oplossing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde van die veranderlike wat die vergelyking waar maak — bv. ${gr('x = 6')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Oplos deur inspeksie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vra jouself: <em>"Watter waarde van ${bl('x')} maak hierdie vergelyking waar?"</em> Probeer waardes totdat jy die een vind wat werk, of gebruik redenering om dit direk af te lei.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho dink aan ʼn getal, vermenigvuldig dit met 4 en tel 7 by om 31 te kry. Vind die getal.',
          answer: `${gr('x = 6')}`,
          steps: [
            `Laat die onbekende getal ${bl('x')} wees. Stel die ${or('vergelyking')} op: ${or('4x + 7 = 31')}.`,
            `Deur inspeksie: ${or('4x')} = 31 − 7 = 24, dus benodig ons ${bl('x')} sodat 4 × ${bl('x')} = 24.`,
            `Vra: watter getal vermenigvuldig met 4 gee 24? Antwoord: ${gr('x = 6')}.`,
            `Kontroleer: 4(${gr('6')}) + 7 = 24 + 7 = 31 ✓`,
          ],
        },
        {
          question: 'Stel ʼn vergelyking op vir "ʼn getal verminder met 9 is gelyk aan 15" en los op.',
          answer: `${gr('x = 24')}`,
          steps: [
            `Laat die onbekende getal ${bl('x')} wees. Stel die ${or('vergelyking')} op: ${or('x − 9 = 15')}.`,
            `Deur inspeksie: vra watter getal minus 9 gee 15.`,
            `Antwoord: ${gr('x = 24')}. Kontroleer: 24 − 9 = 15 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om vergelykings uit woordprobleme op te stel en deur inspeksie op te los" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling van ʼn vergelykingsbalans met die onbekende veranderlike aan die een kant en die oplossing aan die ander kant" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING ADDITIVE AND MULTIPLICATIVE INVERSES AND LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'additive-multiplicative-inverses-exponents',
      title: 'Additiewe en Multiplikatiewe Inverses en Eksponentwette Gebruik om Vergelykings Op te Los',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die oplos van vergelykings uit deur <strong>additiewe inverses</strong> (die teenoorgestelde optel om ʼn term uit te kanselleer) en <strong>multiplikatiewe inverses</strong> (met die resiprook vermenigvuldig) te gebruik, sowel as die toepassing van <strong>eksponentwette</strong> waar vergelykings eksponensiële terme bevat.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('additiewe inverse')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplikatiewe inverse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eksponentwette')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Additiewe Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('additiewe inverse')} van ʼn getal is sy teenoorgestelde. Om ʼn getal en sy additiewe inverse bymekaar te tel, gee altyd 0. bv. 8 + (${bl('−8')}) = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Multiplikatiewe Inverse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('multiplikatiewe inverse')} (resiprook) van ʼn getal gee 1 wanneer dit vermenigvuldig word. bv. ¾ × ${or('4/3')} = 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eksponentwette</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer jy x² = k oplos, pas ${gr('vierkantswortel')} op albei kante toe: x = ±√k. Onthou beide die positiewe en negatiewe wortel.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Goue reël: wat jy ook al aan een kant doen, doen aan die ander kant</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om ʼn vergelyking gebalanseer te hou, pas dieselfde bewerking op albei kante toe. Gebruik die ${bl('additiewe inverse')} om ʼn konstante uit te skakel, en die ${or('multiplikatiewe inverse')} om ʼn koëffisiënt uit te skakel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x + 8 = 15 deur die additiewe inverse te gebruik.',
          answer: `x = ${gr('7')}`,
          steps: [
            `Die ${bl('additiewe inverse')} van 8 is ${bl('−8')}. Tel ${bl('−8')} by albei kante:`,
            `x + 8 + (${bl('−8')}) = 15 + (${bl('−8')})`,
            `x + 0 = 7`,
            `x = ${gr('7')}. Kontroleer: ${gr('7')} + 8 = 15 ✓`,
          ],
        },
        {
          question: 'Los op: ¾x = 9 deur die multiplikatiewe inverse te gebruik.',
          answer: `x = ${gr('12')}`,
          steps: [
            `Die ${or('multiplikatiewe inverse')} van ¾ is ${or('4/3')}. Vermenigvuldig albei kante met ${or('4/3')}:`,
            `${or('4/3')} × ¾x = 9 × ${or('4/3')}`,
            `1x = 36/3 = 12`,
            `x = ${gr('12')}. Kontroleer: ¾ × ${gr('12')} = 9 ✓`,
          ],
        },
        {
          question: 'Los op: x² = 49.',
          answer: `x = ${gr('±7')}`,
          steps: [
            `Hierdie vergelyking bevat ʼn eksponent. Pas die ${gr('vierkantswortel')} op albei kante toe:`,
            `√(x²) = √49`,
            `x = ${gr('±7')} — daar is twee oplossings aangesien beide 7² = 49 en (−7)² = 49.`,
            `Kontroleer: (${gr('7')})² = 49 ✓ en (${gr('−7')})² = 49 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om additiewe en multiplikatiewe inverses te gebruik om vergelykings op te los, en hoe om vergelykings met vierkantsterme op te los" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Balansdiagram wat additiewe en multiplikatiewe inverse-stappe wys wat op albei kante van ʼn vergelyking toegepas word" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SUBSTITUTION TO GENERATE TABLES OF ORDERED PAIRS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'substitution-ordered-pairs',
      title: 'Substitusie om Tabelle van Georde Pare te Genereer',
      icon: '(x,y)',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik <strong>substitusie</strong> in vergelykings om <strong>tabelle van georde pare</strong> te genereer, wat algebraïese vergelykings met hul grafiese voorstelling verbind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-waardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('georde pare')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe substitusie werk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Kies ʼn ${bl('x-waarde')} uit jou tabel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vervang die ${bl('x-waarde')} in die vergelyking en bereken die ${gr('y-waarde')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die resultaat as ʼn ${or('georde paar')} (${bl('x')}, ${gr('y')}) — x kom altyd eerste.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algebra aan grafieke koppel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke ${or('georde paar')} (${bl('x')}, ${gr('y')}) stel ʼn punt op die koördinaatvlak voor. Deur hierdie punte te stip, word die vorm van die grafiek van die vergelyking sigbaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik y = 3x − 2 om georde pare te genereer vir x = 0, 1, 2, 3.',
          answer: `${or('(0, −2), (1, 1), (2, 4), (3, 7)')}`,
          steps: [
            `${bl('x = 0')}: y = 3(${bl('0')}) − 2 = 0 − 2 = ${gr('−2')}. Georde paar: ${or('(0, −2)')}`,
            `${bl('x = 1')}: y = 3(${bl('1')}) − 2 = 3 − 2 = ${gr('1')}. Georde paar: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = 3(${bl('2')}) − 2 = 6 − 2 = ${gr('4')}. Georde paar: ${or('(2, 4)')}`,
            `${bl('x = 3')}: y = 3(${bl('3')}) − 2 = 9 − 2 = ${gr('7')}. Georde paar: ${or('(3, 7)')}`,
          ],
        },
        {
          question: 'Lerato vervang x = −1, 0, 1, 2 in y = −2x + 3. Vind die georde pare.',
          answer: `${or('(−1, 5), (0, 3), (1, 1), (2, −1)')}`,
          steps: [
            `${bl('x = −1')}: y = −2(${bl('−1')}) + 3 = 2 + 3 = ${gr('5')}. Georde paar: ${or('(−1, 5)')}`,
            `${bl('x = 0')}: y = −2(${bl('0')}) + 3 = 0 + 3 = ${gr('3')}. Georde paar: ${or('(0, 3)')}`,
            `${bl('x = 1')}: y = −2(${bl('1')}) + 3 = −2 + 3 = ${gr('1')}. Georde paar: ${or('(1, 1)')}`,
            `${bl('x = 2')}: y = −2(${bl('2')}) + 3 = −4 + 3 = ${gr('−1')}. Georde paar: ${or('(2, −1)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om x-waardes in ʼn vergelyking te vervang om ʼn tabel van georde pare te genereer en die punte te stip" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tabel van x- en y-waardes langs ʼn koördinaatrooster wat die gestipte georde pare wys wat ʼn reguit lyn vorm" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x + 12 = 27 deur inspeksie.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Vra: watter getal by 12 getel gee 27? Antwoord: x = 15. Kontroleer: 15 + 12 = 27 ✓',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho dink aan ʼn getal, vermenigvuldig dit met 5 en trek 8 af om 32 te kry. Vind die getal.',
      answer: '8',
      checkMode: 'auto',
      correctAnswer: '8',
      explanation: 'Vergelyking: 5x − 8 = 32. Deur inspeksie: 5x = 40, dus x = 8. Kontroleer: 5(8) − 8 = 40 − 8 = 32 ✓',
    },

    // ── Q3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato stel die vergelyking 3x − 6 = 21 op vir ʼn getalprobleem en los x = 9 op. Kontroleer haar antwoord.',
      answer: 'Korrek — deur x = 9 te vervang: 3(9) − 6 = 27 − 6 = 21.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op: x − 15 = 22 deur die additiewe inverse te gebruik.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Tel 15 (die additiewe inverse van −15) by albei kante: x = 22 + 15 = 37. Kontroleer: 37 − 15 = 22 ✓',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: ²⁄₃x = 10 deur die multiplikatiewe inverse te gebruik.',
      answer: '15',
      checkMode: 'auto',
      correctAnswer: '15',
      explanation: 'Vermenigvuldig albei kante met 3/2 (die multiplikatiewe inverse van 2/3): x = 10 × 3/2 = 30/2 = 15. Kontroleer: (2/3)(15) = 10 ✓',
    },

    // ── Q6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: x² = 64 en verduidelik waarom daar twee oplossings is.',
      answer: 'x = ±8, aangesien beide 8² = 64 en (−8)² = 64.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: 5x + 9 = 34.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: '5x + 9 = 34 → 5x = 34 − 9 = 25 → x = 25 ÷ 5 = 5. Kontroleer: 5(5) + 9 = 25 + 9 = 34 ✓',
    },

    // ── Q8 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die oplossing van x² = 36 gee net x = 6. Is hy reg? Verduidelik.',
      answer: 'Nee — daar is twee oplossings, x = 6 en x = −6, aangesien albei in die kwadraat 36 gee.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Genereer georde pare deur y = 2x + 5 te gebruik vir x = 0, 1, 2, 3.',
      answer: '(0, 5), (1, 7), (2, 9), (3, 11).',
      checkMode: 'self',
    },

    // ── Q10 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik y = 4x − 1 om y te vind wanneer x = 3.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: 'y = 4(3) − 1 = 12 − 1 = 11 ✓',
    },

    // ── Q11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle genereer ʼn tabel vir y = −x + 6 deur x = −2, −1, 0, 1 te gebruik en kry (−2, 8), (−1, 7), (0, 6), (1, 5). Kontroleer haar tabel.',
      answer: 'Korrek — elke waarde word gevind deur x in die vergelyking te vervang.',
      checkMode: 'self',
    },

    // ── Q12 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: 4x − 7 = 21.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: '4x − 7 = 21 → 4x = 28 → x = 7. Kontroleer: 4(7) − 7 = 28 − 7 = 21 ✓',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: ³⁄₅x = 18 deur die multiplikatiewe inverse te gebruik.',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'Vermenigvuldig albei kante met 5/3 (die multiplikatiewe inverse van 3/5): x = 18 × 5/3 = 90/3 = 30. Kontroleer: (3/5)(30) = 18 ✓',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om x + (−9) = 14 op te los is dieselfde as om x − 9 = 14 op te los. Is hy reg? Verduidelik.',
      answer: 'Ja — om ʼn negatiewe getal by te tel is dieselfde as om daardie getal af te trek, dus is die twee vergelykings ekwivalent.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Genereer georde pare deur y = x² − 3 te gebruik vir x = 0, 1, 2, 3.',
      answer: '(0, −3), (1, −2), (2, 1), (3, 6)',
      checkMode: 'auto',
      correctAnswer: '(0,-3),(1,-2),(2,1),(3,6)',
      correctAnswers: [
        '(0,-3),(1,-2),(2,1),(3,6)',
        '(0, -3), (1, -2), (2, 1), (3, 6)',
        '(0,−3),(1,−2),(2,1),(3,6)',
      ],
      explanation: 'x=0: y=0−3=−3. x=1: y=1−3=−2. x=2: y=4−3=1. x=3: y=9−3=6.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het algebraïese vergelykings baasgeraak.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van algebraïese vergelykings.' },
      { minPercent: 50, message: 'Goeie poging, gaan die afdelings weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
