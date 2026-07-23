import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (graphs roles) ───────────────────────────────────────────
// y-intercept / plotted points → blue   (#2563eb)
// x-intercept / gradient       → orange (#ea580c)
// gradient / line / equation   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Grafieke',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — x-INTERCEPT, y-INTERCEPT AND GRADIENT OF LINEAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'intercepts-and-gradient',
      title: 'x-Afsny, y-Afsny en Gradiënt van Lineêre Grafieke',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>y-afsny</strong> is waar ʼn lyn die y-as sny (waar x = 0). Die <strong>x-afsny</strong> is waar ʼn lyn die x-as sny (waar y = 0). Die <strong>gradiënt</strong> beskryf die steilheid en rigting van ʼn lyn — bereken as (verandering in y) ÷ (verandering in x) tussen enige twee punte op die lyn.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('y-afsny')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('x-afsny')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gradiënt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">y-Afsny</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Waar die lyn die y-as sny.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Hoe om dit te vind:</strong> Stel x = 0 en los op vir y.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">x-Afsny</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Waar die lyn die x-as sny.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Hoe om dit te vind:</strong> Stel y = 0 en los op vir x.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gradiënt</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Steilheid en rigting van die lyn.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Formule:</strong> (y₂ − y₁) ÷ (x₂ − x₁)</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gradiëntformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('gradiënt')} = (y₂ − y₁) ÷ (x₂ − x₁) = ${gr('verandering in y')} ÷ ${gr('verandering in x')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die teken van die gradiënt wys die rigting</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn <strong>Positiewe gradiënt</strong> beteken die lyn styg van links na regs. ʼn <strong>Negatiewe gradiënt</strong> beteken die lyn daal van links na regs. ʼn <strong>Nul-gradiënt</strong> beteken die lyn is horisontaal. ʼn <strong>Vertikale lyn</strong> het ʼn onbepaalde gradiënt.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die x-afsny en y-afsny van y = 2x − 6.',
          answer: `${bl('y-afsny: (0, −6)')}   ${or('x-afsny: (3, 0)')}`,
          steps: [
            `${bl('y-afsny:')} Stel x = 0: y = 2(0) − 6 = −6. Die y-afsny is ${bl('(0, −6)')}.`,
            `${or('x-afsny:')} Stel y = 0: 0 = 2x − 6. Tel 6 by albei kante: 2x = 6. Deel deur 2: x = 3. Die x-afsny is ${or('(3, 0)')}.`,
            `Sien die diagram hieronder wat albei afsnypunte wys.`,
          ],
        },
        {
          question: 'Vind die gradiënt van die lyn wat deur (1, 3) en (4, 12) gaan.',
          answer: `${gr('Gradiënt = 3')}`,
          steps: [
            `Identifiseer die twee punte: (x₁, y₁) = (1, 3) en (x₂, y₂) = (4, 12).`,
            `Pas die gradiëntformule toe: gradiënt = (y₂ − y₁) ÷ (x₂ − x₁) = (12 − 3) ÷ (4 − 1) = ${gr('9 ÷ 3 = 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — y-intercept ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die y-afsny van y = 3x + 7.',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Stel x = 0: y = 3(0) + 7 = 7. Die y-afsny is 7.',
        },

        // ── Q2 Easy — x-intercept ────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die x-afsny van y = 2x − 8.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Stel y = 0: 0 = 2x − 8. Dus 2x = 8, x = 4. Die x-afsny is 4.',
        },

        // ── Q3 Medium — gradient between two points ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die gradiënt van die lyn deur (2, 5) en (6, 17).',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Gradiënt = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3.',
        },

        // ── Q4 Hard — horizontal vs vertical gradient ────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die gradiënt van ʼn horisontale lyn is onbepaald. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn horisontale lyn het ʼn gradiënt van 0, aangesien daar geen verandering in y is nie. ʼn Vertikale lyn is die een met ʼn onbepaalde gradiënt.',
          checkMode: 'self',
        },

        // ── Q5 Medium — both intercepts ──────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind albei afsnypunte van y = −3x + 9.',
          answer: 'y-afsny: (0, 9). x-afsny: stel y = 0, x = 3, dus (3, 0).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Cartesiese vlak wat die lyn y = 2x − 6 wys, met die x-afsnit by (3, 0) en y-afsnit by (0, −6) duidelik gemerk',

      diagramSvg:
        '<svg viewBox="0 0 180 230" xmlns="http://www.w3.org/2000/svg"><text x="90" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = 2x − 6</text><line x1="20" y1="70" x2="160" y2="70" stroke="#0f1f3d" stroke-width="2"/><polygon points="164,70 156,66 156,74" fill="#0f1f3d"/><text x="160" y="64" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="60" y1="225" x2="60" y2="20" stroke="#0f1f3d" stroke-width="2"/><polygon points="60,16 56,24 64,24" fill="#0f1f3d"/><text x="66" y="24" font-size="9" fill="#0f1f3d">y</text><line x1="42" y1="214" x2="132" y2="34" stroke="#16a34a" stroke-width="2.5"/><circle cx="114" cy="70" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="118" y="62" font-size="9" font-weight="700" fill="#ea580c">(3, 0)</text><circle cx="60" cy="178" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="10" y="192" font-size="9" font-weight="700" fill="#2563eb">(0, −6)</text></svg>',

      videoPlaceholder:
        'Kort video wat y-afsnit, x-afsnit en gradiënt van lineêre grafieke verduidelik met uitgewerkte voorbeelde',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DRAWING LINEAR GRAPHS FROM GIVEN EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-linear-graphs',
      title: 'Lineêre Grafieke uit Gegewe Vergelykings Teken',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons teken reguit-lyn-grafieke uit gegewe vergelykings deur die afsnypunte te vind of ʼn <strong>tabel van geordende pare</strong> te gebruik, en dan die punte te stip en met ʼn reguit lyn te verbind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gestipte punte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verbindingslyn')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee metodes om lineêre grafieke te teken</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Metode 1: Afsnymetode</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Vind die ${bl('x-afsny')} en ${bl('y-afsny')}, stip albei ${bl('punte')} en teken die ${gr('lyn')} deur hulle.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die beste wanneer die afsnypunte maklike heeltallige waardes is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Metode 2: Tabel van waardes</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Kies ten minste 3 x-waardes, vervang elkeen in die vergelyking om y te vind, stip dan die ${bl('geordende pare')} en teken die ${gr('lyn')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gebruik altyd drie punte as ʼn kontrole — hulle moet kollineêr wees.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gebruik altyd ʼn liniaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Lineêre grafiek is altyd ʼn <strong>reguit lyn</strong> — gebruik ʼn liniaal om dit te teken. Verleng die ${gr('lyn')} verby die gestipte ${bl('punte')} om te wys dat dit in albei rigtings voortgaan.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Teken die grafiek van y = −x + 4 deur die afsnypunte te vind.',
          answer: `${bl('(0, 4)')} en ${bl('(4, 0)')} gestip en verbind met ʼn ${gr('reguit lyn')}`,
          steps: [
            `${bl('y-afsny')} (stel x = 0): y = −(0) + 4 = 4. Stip die punt ${bl('(0, 4)')}.`,
            `${bl('x-afsny')} (stel y = 0): 0 = −x + 4. Dus x = 4. Stip die punt ${bl('(4, 0)')}.`,
            `Teken die ${gr('reguit lyn')} deur ${bl('(0, 4)')} en ${bl('(4, 0)')}. Sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Sipho teken y = 3x met ʼn tabel van waardes vir x = −1, 0 en 1.',
          answer: `Punte ${bl('(−1, −3)')}, ${bl('(0, 0)')} en ${bl('(1, 3)')} gestip en verbind met ʼn ${gr('reguit lyn')}`,
          steps: [
            `x = −1: y = 3(−1) = −3. Punt: ${bl('(−1, −3)')}.`,
            `x = 0: y = 3(0) = 0. Punt: ${bl('(0, 0)')}.`,
            `x = 1: y = 3(1) = 3. Punt: ${bl('(1, 3)')}.`,
            `Deur hierdie punte te stip en te verbind, sien ons ʼn ${gr('reguit lyn')} wat deur die oorsprong gaan met gradiënt 3.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Hard — intercepts for drawing ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato teken y = 2x − 4 met sy afsnypunte. Vind die twee punte wat sy sou stip.',
          answer: 'y-afsny (0, −4). x-afsny (2, 0).',
          checkMode: 'self',
        },

        // ── Q7 Medium — gradient between two points ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die gradiënt van die lyn deur (−1, 2) en (3, 14).',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Gradiënt = (14 − 2) ÷ (3 − (−1)) = 12 ÷ 4 = 3.',
        },

        // ── Q8 Hard — equation from two points ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Lyn gaan deur (0, 3) en (4, 15). Vind sy vergelyking.',
          answer: 'y-afsny = 3. Gradiënt = (15 − 3) ÷ 4 = 3. Vergelyking: y = 3x + 3.',
          checkMode: 'self',
        },

        // ── Q9 Medium — equation from gradient and y-intercept ───────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Grafiek sny die y-as by −2 en het ʼn gradiënt van 5. Skryf sy vergelyking.',
          answer: 'y=5x-2',
          checkMode: 'auto',
          correctAnswer: 'y=5x-2',
          correctAnswers: ['y=5x-2', 'y = 5x - 2', 'y = 5x − 2', 'y=5x−2'],
          explanation: 'Deur y = mx + c te gebruik met m = 5 en c = −2: y = 5x − 2.',
        },

        // ── Q10 Hard — equation and x-intercept, two parts ───────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo lees ʼn grafiek en vind die gradiënt is −2 met ʼn y-afsny van 6. Skryf die vergelyking en vind die x-afsny.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf die vergelyking',
              correctAnswer: 'y=-2x+6',
              correctAnswers: ['y=-2x+6', 'y = -2x + 6', 'y = −2x + 6', 'y=−2x+6'],
              explanation: 'Deur y = mx + c te gebruik met m = −2 en c = 6: y = −2x + 6.',
            },
            {
              label: 'b) Vind die x-afsny',
              correctAnswer: '3',
              correctAnswers: ['3', 'x=3', 'x = 3'],
              explanation: 'Stel y = 0: 0 = −2x + 6. Dus 2x = 6, x = 3. Die x-afsny is 3.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'ʼn Cartesiese vlak wat die lyn y = −x + 4 wys, geteken met behulp van sy x-afsnit (4, 0) en y-afsnit (0, 4)',

      diagramSvg:
        '<svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = −x + 4</text><line x1="15" y1="150" x2="185" y2="150" stroke="#0f1f3d" stroke-width="2"/><polygon points="189,150 181,146 181,154" fill="#0f1f3d"/><text x="185" y="144" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="50" y1="200" x2="50" y2="25" stroke="#0f1f3d" stroke-width="2"/><polygon points="50,21 46,29 54,29" fill="#0f1f3d"/><text x="56" y="29" font-size="9" fill="#0f1f3d">y</text><line x1="30" y1="50" x2="170" y2="190" stroke="#16a34a" stroke-width="2.5"/><circle cx="130" cy="150" r="4" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="134" y="145" font-size="9" font-weight="700" fill="#ea580c">(4, 0)</text><circle cx="50" cy="70" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="8" y="60" font-size="9" font-weight="700" fill="#2563eb">(0, 4)</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn reguitlyngrafiek te teken met behulp van die afsnitmetode en ʼn tabel van waardes',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DETERMINING EQUATIONS FROM GIVEN LINEAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'determining-equations',
      title: 'Vergelykings uit Gegewe Lineêre Grafieke Bepaal',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ʼn lineêre grafiek (of twee bekende punte daarop) gegee word, bepaal ons die vergelyking daarvan deur die <strong>gradiënt</strong> te bereken en die <strong>y-afsny</strong> te identifiseer, en dan die vergelyking in die vorm y = mx + c te skryf.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('y-afsny (c)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gradiënt (m)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om die vergelyking y = mx + c te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind c (y-afsny)')} — Lees die y-afsny van die grafiek af, of vervang x = 0 in die vergelyking om te vind waar die lyn die y-as sny.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vind m (gradiënt)')} — Gebruik die formule m = (y₂ − y₁) ÷ (x₂ − x₁) met enige twee bekende punte op die lyn.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die vergelyking')} — Vervang m en c in y = mx + c om die ${gr('finale vergelyking')} te skryf.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">As geen punt op die y-as is nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy twee punte gegee word en geeneen het x = 0 nie, bereken eers die ${or('gradiënt')}, vervang dan een punt in y = ${or('m')}x + ${bl('c')} en los op vir ${bl('c')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Lyn gaan deur (0, 5) en (2, 9). Vind sy vergelyking.',
          answer: `${gr('y = 2x + 5')}`,
          steps: [
            `${bl('y-afsny (c):')} Die punt (0, 5) het x = 0, dus c = ${bl('5')}.`,
            `${or('Gradiënt (m):')} m = (9 − 5) ÷ (2 − 0) = 4 ÷ 2 = ${or('2')}.`,
            `${gr('Vergelyking:')} y = ${or('2')}x + ${bl('5')} → ${gr('y = 2x + 5')}.`,
          ],
        },
        {
          question: 'Lerato lees ʼn grafiek wat wys die lyn sny die y-as by −3 en het ʼn gradiënt van −4. Skryf die vergelyking.',
          answer: `${gr('y = −4x − 3')}`,
          steps: [
            `${bl('y-afsny (c):')} c = ${bl('−3')} (van die grafiek afgelees).`,
            `${or('Gradiënt (m):')} m = ${or('−4')} (van die grafiek afgelees).`,
            `${gr('Vergelyking:')} y = ${or('−4')}x + (${bl('−3')}) → ${gr('y = −4x − 3')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium — gradient through origin ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die gradiënt van die lyn deur (0, 0) en (5, 20).',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Gradiënt = (20 − 0) ÷ (5 − 0) = 20 ÷ 5 = 4.',
        },

        // ── Q12 Hard — y-intercept of y=4x ───────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn lyn met vergelyking y = 4x het geen y-afsny nie. Is sy korrek? Verduidelik.',
          answer: 'Nee — dit het wel ʼn y-afsny, naamlik 0 (die lyn gaan deur die oorsprong (0, 0)).',
          checkMode: 'self',
        },

        // ── Q13 Hard — gradient and equation from intercepts ─────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Lyn het ʼn x-afsny by (5, 0) en ʼn y-afsny by (0, 10). Vind sy gradiënt en vergelyking.',
          answer: 'Gradiënt = (0 − 10) ÷ (5 − 0) = −2. Vergelyking: y = −2x + 10.',
          checkMode: 'self',
        },

        // ── Q14 Hard — parallel lines ─────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê twee lyne met dieselfde gradiënt maar verskillende y-afsnypunte sal nooit sny nie. Is hy korrek? Verduidelik.',
          answer: 'Ja — lyne met dieselfde gradiënt is parallel, wat beteken hulle sny nooit nie, aangesien hulle altyd dieselfde afstand van mekaar handhaaf.',
          checkMode: 'self',
        },

        // ── Q15 Hard — full equation from two points ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Lyn gaan deur (−2, 1) en (2, 17). Vind sy vergelyking, en wys die gradiënt- en y-afsnyberekenings.',
          answer: 'Gradiënt = (17 − 1) ÷ (2 − (−2)) = 16 ÷ 4 = 4. Deur punt (2, 17) te gebruik: 17 = 4(2) + c. c = 9. Vergelyking: y = 4x + 9.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Cartesiese vlak wat ʼn lyn wys wat deur (0, 5) en (2, 9) gaan, met die gradiëntdriehoek (opgaan van 4, aanloop van 2) tussen die punte gemerk',

      diagramSvg:
        '<svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg"><text x="80" y="12" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">y = 2x + 5</text><line x1="25" y1="165" x2="115" y2="165" stroke="#0f1f3d" stroke-width="2"/><polygon points="119,165 111,161 111,169" fill="#0f1f3d"/><text x="115" y="159" font-size="9" fill="#0f1f3d" text-anchor="end">x</text><line x1="45" y1="183" x2="45" y2="10" stroke="#0f1f3d" stroke-width="2"/><polygon points="45,6 41,14 49,14" fill="#0f1f3d"/><text x="52" y="21" font-size="9" fill="#0f1f3d">y</text><line x1="38" y1="109" x2="83" y2="19" stroke="#16a34a" stroke-width="2.5"/><circle cx="45" cy="95" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="8" y="91" font-size="9" font-weight="700" fill="#2563eb">(0, 5)</text><circle cx="73" cy="39" r="4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="78" y="35" font-size="9" font-weight="700" fill="#2563eb">(2, 9)</text><line x1="45" y1="95" x2="73" y2="95" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><line x1="73" y1="95" x2="73" y2="39" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><text x="59" y="108" font-size="8" font-weight="700" fill="#ea580c" text-anchor="middle">aanloop 2</text><text x="79" y="70" font-size="8" font-weight="700" fill="#ea580c">opgaan 4</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die vergelyking van ʼn lineêre grafiek vanaf twee bekende punte te bepaal deur y = mx + c te gebruik',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het grafieke bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-1):   y-afsny / x-afsny vanaf ʼn gegewe vergelyking
    // Blok 2 (2-4):   Gradiënt tussen twee punte
    // Blok 3 (5-8):   Vergelyking van ʼn lyn (y = mx + c) vanaf gradiënt/punte
    // Blok 4 (9-11):  [DIAGRAM] Gradiënt/x-afsny/vergelyking van ʼn beskryfde
    //                 getekende lyn aflees
    // Blok 5 (12-15): [DIAGRAM] Reisgrafieke / afstand-tyd-grafieke vertolk
    // Blok 6 (16-19): Woordprobleem-toepassing, albei afsnypunte, foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — y-afsny / x-afsny vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die y-afsny van y = 4x + 9.', checkMode: 'auto', correctAnswer: '9', answer: '9', explanation: 'Stel x = 0: y = 4(0) + 9 = 9. Die y-afsny is 9.' },
        { difficulty: 'Easy', question: 'Vind die x-afsny van y = 3x − 9.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Stel y = 0: 0 = 3x − 9. Dus 3x = 9, x = 3. Die x-afsny is 3.' },

        // Blok 2 — gradiënt tussen twee punte (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (2, 5) en (5, 17).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradiënt = (17 − 5) ÷ (5 − 2) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (−1, 3) en (3, 15).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (15 − 3) ÷ (3 − (−1)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Vind die gradiënt van die lyn deur (0, −4) en (6, 8).', checkMode: 'auto', correctAnswer: '2', answer: '2', explanation: 'Gradiënt = (8 − (−4)) ÷ (6 − 0) = 12 ÷ 6 = 2.' },

        // Blok 3 — vergelyking van ʼn lyn y = mx + c (Medium)
        { difficulty: 'Medium', question: 'ʼn Lyn het ʼn gradiënt van 6 en ʼn y-afsny van −4. Skryf sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=6x-4', correctAnswers: ['y=6x-4', 'y = 6x - 4', 'y = 6x − 4', 'y=6x−4'], answer: 'y = 6x − 4', explanation: 'Deur y = mx + c te gebruik met m = 6 en c = −4: y = 6x − 4.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (0, 7) en (4, 23). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=4x+7', correctAnswers: ['y=4x+7', 'y = 4x + 7'], answer: 'y = 4x + 7', explanation: 'y-afsny: (0, 7) het x = 0, dus c = 7.\nGradiënt: m = (23 − 7) ÷ (4 − 0) = 16 ÷ 4 = 4.\nVergelyking: y = 4x + 7.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (2, 11) en (5, 20). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=3x+5', correctAnswers: ['y=3x+5', 'y = 3x + 5'], answer: 'y = 3x + 5', explanation: 'Gradiënt: m = (20 − 11) ÷ (5 − 2) = 9 ÷ 3 = 3.\nVervang (2, 11): 11 = 3(2) + c, dus c = 5.\nVergelyking: y = 3x + 5.' },
        { difficulty: 'Medium', question: 'Vind die x-afsny van y = −4x + 12.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Stel y = 0: 0 = −4x + 12. Dus 4x = 12, x = 3. Die x-afsny is 3.' },

        // Blok 4 — [DIAGRAM] gradiënt/x-afsny/vergelyking van beskryfde getekende lyn aflees (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, 2) en (3, 11) gaan. Vind die gradiënt van die lyn.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (11 − 2) ÷ (3 − 0) = 9 ÷ 3 = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="94.55" x2="210" y2="94.55" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="44.08" x2="210" y2="44.08" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="100.43" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="143.57" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">3</text><text x="53.29" y="97.05" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="46.58" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="155.01" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,138.45 206.12,20.36" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="124.83" r="4" fill="#2563eb"/><text x="64.29" y="117.83" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 2)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(3, 11)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, 6) en (4, −2) gaan. Vind die x-afsny van die lyn.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (−2 − 6) ÷ (4 − 0) = −8 ÷ 4 = −2. Vergelyking: y = −2x + 6. Stel y = 0: 0 = −2x + 6, dus x = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="117.26" x2="210" y2="117.26" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="47.86" x2="210" y2="47.86" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="117.26" x2="210" y2="117.26" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="127.26" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="127.26" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="50.36" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="127.26" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 6)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, -2)</text></svg>' },
        { difficulty: 'Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (−1, −5) en (2, 4) gaan. Vind die vergelyking van die lyn.', checkMode: 'auto', correctAnswer: 'y=3x-2', correctAnswers: ['y=3x-2', 'y = 3x - 2', 'y = 3x − 2', 'y=3x−2'], answer: 'y = 3x − 2', explanation: 'Gradiënt: m = (4 − (−5)) ÷ (2 − (−1)) = 9 ÷ 3 = 3.\nVervang (2, 4): 4 = 3(2) + c, dus c = −2.\nVergelyking: y = 3x − 2.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="83.33" x2="210" y2="83.33" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="21.65" x2="210" y2="21.65" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="83.33" x2="210" y2="83.33" stroke="#374151" stroke-width="1.5"/><line x1="100.43" y1="165" x2="100.43" y2="14" stroke="#374151" stroke-width="1.5"/><text x="57.29" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">-1</text><text x="143.57" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="186.71" y="93.33" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="96.43" y="147.51" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="96.43" y="24.15" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="96.43" y="93.33" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-1, -5)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 4)</text></svg>' },

        // Blok 5 — [DIAGRAM] reisgrafieke / afstand-tyd-grafieke vertolk (Hard)
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn huurmotor wat teen ʼn konstante spoed van 60 km/h vir 2,5 uur ry. Watter afstand lê die huurmotor af?', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 km'], answer: '150 km', explanation: 'Afstand = spoed × tyd = 60 × 2,5 = 150 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">60 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">2,5 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn reguit lyn vanaf (0, 0) na (3, 180), waar x tyd in ure is en y afstand in kilometer is. Vind die spoed wat deur die grafiek voorgestel word.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Spoed = gradiënt = (180 − 0) ÷ (3 − 0) = 180 ÷ 3 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(3, 180)</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn fietsryer wat teen ʼn konstante 80 km/h vir 2 uur ry, dan vir 1 uur rus, en dan die laaste 150 km van die reis in 2,5 uur aflê. Vind die fietsryer se spoed op die laaste gedeelte van die reis.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Spoed = afstand ÷ tyd = 150 ÷ 2,5 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 91.14,97.23" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="58.57" y="123.12" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">80 km/h</text><polyline points="91.14,97.23 119.71,97.23" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="105.43" y="91.23" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rus 1 h</text><polyline points="119.71,97.23 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="151.43" y="57.46" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">150 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="91.14" cy="97.23" r="2.8" fill="#0f1f3d"/><circle cx="119.71" cy="97.23" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="91.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5,5 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn bus wat teen 80 km/h vir 2 uur ry, en dan teen 50 km/h vir ʼn verdere 1,5 uur. Vind die totale afstand afgelê.', checkMode: 'auto', correctAnswer: '235', correctAnswers: ['235', '235 km'], answer: '235 km', explanation: 'Eerste gedeelte: 80 × 2 = 160 km. Tweede gedeelte: 50 × 1,5 = 75 km. Totaal: 160 + 75 = 235 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 123.8,75.6" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="74.9" y="112.3" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">80 km/h</text><polyline points="123.8,75.6 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="153.47" y="46.65" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">50 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="123.8" cy="75.6" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="123.8" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">3,5 h</text></svg>' },

        // Blok 6 — woordprobleem-toepassing, albei afsnypunte, foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Loodgieter hef fooie volgens die formule K = 15n + 200, waar K die totale koste in rand is en n die aantal ure gewerk is. Vind die koste van ʼn werk wat 10 uur neem.', checkMode: 'auto', correctAnswer: '350', correctAnswers: ['350', 'R350'], answer: 'R350', explanation: 'Vervang n = 10: K = 15(10) + 200 = 150 + 200 = 350. Die koste is R350.' },
        { difficulty: 'Hard', question: 'ʼn Lyn het die vergelyking y = 5x − 20. Vind albei die y-afsny en die x-afsny.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vind die y-afsny', correctAnswer: '-20', correctAnswers: ['-20', '−20'], explanation: 'Stel x = 0: y = 5(0) − 20 = −20. Die y-afsny is −20.' },
          { label: 'b) Vind die x-afsny', correctAnswer: '4', correctAnswers: ['4', 'x=4', 'x = 4'], explanation: 'Stel y = 0: 0 = 5x − 20. Dus 5x = 20, x = 4. Die x-afsny is 4.' },
        ] },
        { difficulty: 'Hard', question: 'Thandiwe sê die lyn y = −2x + 8 het ʼn gradiënt van 2. Is sy korrek? Verduidelik en gee die korrekte gradiënt.', answer: 'Nee — sy het die verkeerde teken. In y = mx + c is die koëffisiënt van x die gradiënt. Hier is m = −2, dus is die gradiënt −2, nie 2 nie. Die negatiewe teken beteken die lyn daal van links na regs.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer moet 240 km teen ʼn konstante gemiddelde spoed van 60 km/h reis. Hoe lank sal die reis neem?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 uur'], answer: '4 uur', explanation: 'Tyd = afstand ÷ spoed = 240 ÷ 60 = 4 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gradiënte, vergelykings van lyne en die vertolking van grafieke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor reisgrafieke of vergelykings van lyne na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gradiënt en y = mx + c weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — y-afsny / x-afsny vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die y-afsny van y = 5x + 6.', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: 'Stel x = 0: y = 5(0) + 6 = 6. Die y-afsny is 6.' },
        { difficulty: 'Easy', question: 'Vind die x-afsny van y = 4x − 12.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Stel y = 0: 0 = 4x − 12. Dus 4x = 12, x = 3. Die x-afsny is 3.' },

        // Blok 2 — gradiënt tussen twee punte (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (1, 6) en (4, 18).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradiënt = (18 − 6) ÷ (4 − 1) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (−2, 1) en (2, 13).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (13 − 1) ÷ (2 − (−2)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Vind die gradiënt van die lyn deur (0, 5) en (5, −5).', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], answer: '−2', explanation: 'Gradiënt = (−5 − 5) ÷ (5 − 0) = −10 ÷ 5 = −2.' },

        // Blok 3 — vergelyking van ʼn lyn y = mx + c (Medium)
        { difficulty: 'Medium', question: 'ʼn Lyn het ʼn gradiënt van 7 en ʼn y-afsny van −5. Skryf sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=7x-5', correctAnswers: ['y=7x-5', 'y = 7x - 5', 'y = 7x − 5', 'y=7x−5'], answer: 'y = 7x − 5', explanation: 'Deur y = mx + c te gebruik met m = 7 en c = −5: y = 7x − 5.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (0, 4) en (3, 25). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=7x+4', correctAnswers: ['y=7x+4', 'y = 7x + 4'], answer: 'y = 7x + 4', explanation: 'y-afsny: (0, 4) het x = 0, dus c = 4.\nGradiënt: m = (25 − 4) ÷ (3 − 0) = 21 ÷ 3 = 7.\nVergelyking: y = 7x + 4.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (1, 9) en (4, 18). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=3x+6', correctAnswers: ['y=3x+6', 'y = 3x + 6'], answer: 'y = 3x + 6', explanation: 'Gradiënt: m = (18 − 9) ÷ (4 − 1) = 9 ÷ 3 = 3.\nVervang (1, 9): 9 = 3(1) + c, dus c = 6.\nVergelyking: y = 3x + 6.' },
        { difficulty: 'Medium', question: 'Vind die x-afsny van y = −5x + 20.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Stel y = 0: 0 = −5x + 20. Dus 5x = 20, x = 4. Die x-afsny is 4.' },

        // Blok 4 — [DIAGRAM] gradiënt/x-afsny/vergelyking van beskryfde getekende lyn aflees (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, 4) en (2, 14) gaan. Vind die gradiënt van die lyn.', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: 'Gradiënt = (14 − 4) ÷ (2 − 0) = 10 ÷ 2 = 5.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="105.36" x2="210" y2="105.36" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="65.71" x2="210" y2="65.71" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.05" x2="210" y2="26.05" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="145.01" x2="210" y2="145.01" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="186.71" y="155.01" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="53.29" y="107.86" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="68.21" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="28.55" font-size="7.5" fill="#374151" text-anchor="end">15</text><text x="53.29" y="155.01" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,125.19 206.12,22.09" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="113.29" r="4" fill="#2563eb"/><text x="64.29" y="106.29" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 14)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, 8) en (6, −4) gaan. Vind die x-afsny van die lyn.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradiënt = (−4 − 8) ÷ (6 − 0) = −12 ÷ 6 = −2. Vergelyking: y = −2x + 8. Stel y = 0: 0 = −2x + 8, dus x = 4.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="154.27" x2="210" y2="154.27" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="108" x2="210" y2="108" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="61.74" x2="210" y2="61.74" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="15.48" x2="210" y2="15.48" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="108" x2="210" y2="108" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="100.43" y="118" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="143.57" y="118" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="186.71" y="118" font-size="7.5" fill="#374151" text-anchor="middle">6</text><text x="53.29" y="156.77" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="53.29" y="64.24" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="17.98" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="118" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 8)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(6, -4)</text></svg>' },
        { difficulty: 'Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (−2, −7) en (1, 2) gaan. Vind die vergelyking van die lyn.', checkMode: 'auto', correctAnswer: 'y=3x-1', correctAnswers: ['y=3x-1', 'y = 3x - 1', 'y = 3x − 1', 'y=3x−1'], answer: 'y = 3x − 1', explanation: 'Gradiënt: m = (2 − (−7)) ÷ (1 − (−2)) = 9 ÷ 3 = 3.\nVervang (1, 2): 2 = 3(1) + c, dus c = −1.\nVergelyking: y = 3x − 1.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="100.43" y1="14" x2="100.43" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="143.57" y1="14" x2="143.57" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="120.34" x2="210" y2="120.34" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58.66" x2="210" y2="58.66" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="58.66" x2="210" y2="58.66" stroke="#374151" stroke-width="1.5"/><line x1="143.57" y1="165" x2="143.57" y2="14" stroke="#374151" stroke-width="1.5"/><text x="57.29" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">-2</text><text x="100.43" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">-1</text><text x="186.71" y="68.66" font-size="7.5" fill="#374151" text-anchor="middle">1</text><text x="139.57" y="122.84" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="139.57" y="68.66" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-2, -7)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(1, 2)</text></svg>' },

        // Blok 5 — [DIAGRAM] reisgrafieke / afstand-tyd-grafieke vertolk (Hard)
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn huurmotor wat teen ʼn konstante spoed van 50 km/h vir 3,5 uur ry. Watter afstand lê die huurmotor af?', checkMode: 'auto', correctAnswer: '175', correctAnswers: ['175', '175 km'], answer: '175 km', explanation: 'Afstand = spoed × tyd = 50 × 3,5 = 175 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">50 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">3,5 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn reguit lyn vanaf (0, 0) na (4, 220), waar x tyd in ure is en y afstand in kilometer is. Vind die spoed wat deur die grafiek voorgestel word.', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 km/h'], answer: '55 km/h', explanation: 'Spoed = gradiënt = (220 − 0) ÷ (4 − 0) = 220 ÷ 4 = 55 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, 220)</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn fietsryer wat teen ʼn konstante 70 km/h vir 1,5 uur ry, dan vir 0,5 uur rus, en dan die laaste 120 km van die reis in 2 uur aflê. Vind die fietsryer se spoed op die laaste gedeelte van die reis.', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 km/h'], answer: '60 km/h', explanation: 'Spoed = afstand ÷ tyd = 120 ÷ 2 = 60 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 92.93,103.72" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="59.46" y="126.36" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">70 km/h</text><polyline points="92.93,103.72 112.57,103.72" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="102.75" y="97.72" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rus 0,5 h</text><polyline points="112.57,103.72 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="147.86" y="60.71" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">120 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="92.93" cy="103.72" r="2.8" fill="#0f1f3d"/><circle cx="112.57" cy="103.72" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="92.93" y="175" font-size="7.5" fill="#374151" text-anchor="middle">1,5 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">4 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn bus wat teen 60 km/h vir 3 uur ry, en dan teen 40 km/h vir ʼn verdere 2 uur. Vind die totale afstand afgelê.', checkMode: 'auto', correctAnswer: '260', correctAnswers: ['260', '260 km'], answer: '260 km', explanation: 'Eerste gedeelte: 60 × 3 = 180 km. Tweede gedeelte: 40 × 2 = 80 km. Totaal: 180 + 80 = 260 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 128.29,74.1" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="77.14" y="111.55" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">60 km/h</text><polyline points="128.29,74.1 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="155.71" y="45.9" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">40 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="128.29" cy="74.1" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="128.29" y="175" font-size="7.5" fill="#374151" text-anchor="middle">3 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },

        // Blok 6 — woordprobleem-toepassing, albei afsnypunte, foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Loodgieter hef fooie volgens die formule K = 20n + 150, waar K die totale koste in rand is en n die aantal ure gewerk is. Vind die koste van ʼn werk wat 8 uur neem.', checkMode: 'auto', correctAnswer: '310', correctAnswers: ['310', 'R310'], answer: 'R310', explanation: 'Vervang n = 8: K = 20(8) + 150 = 160 + 150 = 310. Die koste is R310.' },
        { difficulty: 'Hard', question: 'ʼn Lyn het die vergelyking y = 4x − 24. Vind albei die y-afsny en die x-afsny.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vind die y-afsny', correctAnswer: '-24', correctAnswers: ['-24', '−24'], explanation: 'Stel x = 0: y = 4(0) − 24 = −24. Die y-afsny is −24.' },
          { label: 'b) Vind die x-afsny', correctAnswer: '6', correctAnswers: ['6', 'x=6', 'x = 6'], explanation: 'Stel y = 0: 0 = 4x − 24. Dus 4x = 24, x = 6. Die x-afsny is 6.' },
        ] },
        { difficulty: 'Hard', question: 'Katlego sê die lyn y = −3x + 9 het ʼn gradiënt van 3. Is hy korrek? Verduidelik en gee die korrekte gradiënt.', answer: 'Nee — hy het die verkeerde teken. In y = mx + c is die koëffisiënt van x die gradiënt. Hier is m = −3, dus is die gradiënt −3, nie 3 nie. Die negatiewe teken beteken die lyn daal van links na regs.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer moet 210 km teen ʼn konstante gemiddelde spoed van 70 km/h reis. Hoe lank sal die reis neem?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 uur'], answer: '3 uur', explanation: 'Tyd = afstand ÷ spoed = 210 ÷ 70 = 3 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gradiënte, vergelykings van lyne en die vertolking van grafieke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor reisgrafieke of vergelykings van lyne na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gradiënt en y = mx + c weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — y-afsny / x-afsny vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die y-afsny van y = 2x + 11.', checkMode: 'auto', correctAnswer: '11', answer: '11', explanation: 'Stel x = 0: y = 2(0) + 11 = 11. Die y-afsny is 11.' },
        { difficulty: 'Easy', question: 'Vind die x-afsny van y = 6x − 18.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Stel y = 0: 0 = 6x − 18. Dus 6x = 18, x = 3. Die x-afsny is 3.' },

        // Blok 2 — gradiënt tussen twee punte (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (3, 4) en (6, 16).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Gradiënt = (16 − 4) ÷ (6 − 3) = 12 ÷ 3 = 4.' },
        { difficulty: 'Easy-Medium', question: 'Vind die gradiënt van die lyn deur (−3, −4) en (1, 8).', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (8 − (−4)) ÷ (1 − (−3)) = 12 ÷ 4 = 3.' },
        { difficulty: 'Medium', question: 'Vind die gradiënt van die lyn deur (0, 7) en (4, −1).', checkMode: 'auto', correctAnswer: '-2', correctAnswers: ['-2', '−2'], answer: '−2', explanation: 'Gradiënt = (−1 − 7) ÷ (4 − 0) = −8 ÷ 4 = −2.' },

        // Blok 3 — vergelyking van ʼn lyn y = mx + c (Medium)
        { difficulty: 'Medium', question: 'ʼn Lyn het ʼn gradiënt van 8 en ʼn y-afsny van −6. Skryf sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=8x-6', correctAnswers: ['y=8x-6', 'y = 8x - 6', 'y = 8x − 6', 'y=8x−6'], answer: 'y = 8x − 6', explanation: 'Deur y = mx + c te gebruik met m = 8 en c = −6: y = 8x − 6.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (0, 3) en (5, 28). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=5x+3', correctAnswers: ['y=5x+3', 'y = 5x + 3'], answer: 'y = 5x + 3', explanation: 'y-afsny: (0, 3) het x = 0, dus c = 3.\nGradiënt: m = (28 − 3) ÷ (5 − 0) = 25 ÷ 5 = 5.\nVergelyking: y = 5x + 3.' },
        { difficulty: 'Medium', question: 'ʼn Lyn gaan deur (3, 14) en (6, 26). Vind sy vergelyking.', checkMode: 'auto', correctAnswer: 'y=4x+2', correctAnswers: ['y=4x+2', 'y = 4x + 2'], answer: 'y = 4x + 2', explanation: 'Gradiënt: m = (26 − 14) ÷ (6 − 3) = 12 ÷ 3 = 4.\nVervang (3, 14): 14 = 4(3) + c, dus c = 2.\nVergelyking: y = 4x + 2.' },
        { difficulty: 'Medium', question: 'Vind die x-afsny van y = −6x + 24.', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: 'Stel y = 0: 0 = −6x + 24. Dus 6x = 24, x = 4. Die x-afsny is 4.' },

        // Blok 4 — [DIAGRAM] gradiënt/x-afsny/vergelyking van beskryfde getekende lyn aflees (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, −1) en (4, 11) gaan. Vind die gradiënt van die lyn.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (11 − (−1)) ÷ (4 − 0) = 12 ÷ 4 = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="135.76" x2="210" y2="135.76" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="43.24" x2="210" y2="43.24" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="135.76" x2="210" y2="135.76" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="122" y="145.76" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="186.71" y="145.76" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="92" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="45.74" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="145.76" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, -1)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(4, 11)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (0, 9) en (5, −6) gaan. Vind die x-afsny van die lyn.', checkMode: 'auto', correctAnswer: '3', answer: '3', explanation: 'Gradiënt = (−6 − 9) ÷ (5 − 0) = −15 ÷ 5 = −3. Vergelyking: y = −3x + 9. Stel y = 0: 0 = −3x + 9, dus x = 3.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="57.29" y1="14" x2="57.29" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="109.06" y1="14" x2="109.06" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="160.82" y1="14" x2="160.82" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="137.61" x2="210" y2="137.61" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.58" x2="210" y2="26.58" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#374151" stroke-width="1.5"/><line x1="57.29" y1="165" x2="57.29" y2="14" stroke="#374151" stroke-width="1.5"/><text x="109.06" y="110.6" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="160.82" y="110.6" font-size="7.5" fill="#374151" text-anchor="middle">4</text><text x="53.29" y="140.11" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="53.29" y="66.09" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="53.29" y="29.08" font-size="7.5" fill="#374151" text-anchor="end">10</text><text x="53.29" y="110.6" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,17.33 206.12,161.67" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="33.99" r="4" fill="#2563eb"/><text x="64.29" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 9)</text><circle cx="186.71" cy="145.01" r="4" fill="#2563eb"/><text x="179.71" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(5, -6)</text></svg>' },
        { difficulty: 'Hard', question: 'Die getoonde grafiek is ʼn reguit lyn wat deur (−3, −11) en (2, 4) gaan. Vind die vergelyking van die lyn.', checkMode: 'auto', correctAnswer: 'y=3x-2', correctAnswers: ['y=3x-2', 'y = 3x - 2', 'y = 3x − 2', 'y=3x−2'], answer: 'y = 3x − 2', explanation: 'Gradiënt: m = (4 − (−11)) ÷ (2 − (−3)) = 15 ÷ 5 = 3.\nVervang (2, 4): 4 = 3(2) + c, dus c = −2.\nVergelyking: y = 3x − 2.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="83.18" y1="14" x2="83.18" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="134.94" y1="14" x2="134.94" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="186.71" y1="14" x2="186.71" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="137.61" x2="210" y2="137.61" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="100.6" x2="210" y2="100.6" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="26.58" x2="210" y2="26.58" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="63.59" x2="210" y2="63.59" stroke="#374151" stroke-width="1.5"/><line x1="134.94" y1="165" x2="134.94" y2="14" stroke="#374151" stroke-width="1.5"/><text x="83.18" y="73.59" font-size="7.5" fill="#374151" text-anchor="middle">-2</text><text x="186.71" y="73.59" font-size="7.5" fill="#374151" text-anchor="middle">2</text><text x="130.94" y="140.11" font-size="7.5" fill="#374151" text-anchor="end">-10</text><text x="130.94" y="103.1" font-size="7.5" fill="#374151" text-anchor="end">-5</text><text x="130.94" y="29.08" font-size="7.5" fill="#374151" text-anchor="end">5</text><text x="130.94" y="73.59" font-size="6.5" fill="#374151" text-anchor="end">0</text><polyline points="37.88,161.67 206.12,17.33" fill="none" stroke="#9ca3af" stroke-width="1.5"/><circle cx="57.29" cy="145.01" r="4" fill="#2563eb"/><text x="64.29" y="138.01" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(-3, -11)</text><circle cx="186.71" cy="33.99" r="4" fill="#2563eb"/><text x="179.71" y="26.99" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(2, 4)</text></svg>' },

        // Blok 5 — [DIAGRAM] reisgrafieke / afstand-tyd-grafieke vertolk (Hard)
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn huurmotor wat teen ʼn konstante spoed van 45 km/h vir 4 uur ry. Watter afstand lê die huurmotor af?', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 km'], answer: '180 km', explanation: 'Afstand = spoed × tyd = 45 × 4 = 180 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="3" fill="#0f1f3d"/><circle cx="187.04" cy="33.7" r="3" fill="#0f1f3d"/><text x="118.52" y="93.35" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">45 km/h</text><text x="187.04" y="175" font-size="8" fill="#2563eb" font-weight="700" text-anchor="middle">4 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die afstand-tyd-grafiek wys ʼn reguit lyn vanaf (0, 0) na (5, 275), waar x tyd in ure is en y afstand in kilometer is. Vind die spoed wat deur die grafiek voorgestel word.', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 km/h'], answer: '55 km/h', explanation: 'Spoed = gradiënt = (275 − 0) ÷ (5 − 0) = 275 ÷ 5 = 55 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 187.04,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="34" cy="165" r="4" fill="#2563eb"/><text x="40" y="159" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="start">(0, 0)</text><circle cx="187.04" cy="33.7" r="4" fill="#2563eb"/><text x="181.04" y="27.7" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="end">(5, 275)</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn fietsryer wat teen ʼn konstante 90 km/h vir 1 uur ry, dan vir 1,5 uur rus, en dan die laaste 100 km van die reis in 2,5 uur aflê. Vind die fietsryer se spoed op die laaste gedeelte van die reis.', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 km/h'], answer: '40 km/h', explanation: 'Spoed = afstand ÷ tyd = 100 ÷ 2,5 = 40 km/h.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 65.43,102.8" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="45.71" y="125.9" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">90 km/h</text><polyline points="65.43,102.8 112.57,102.8" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="89" y="96.8" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">rus 1,5 h</text><polyline points="112.57,102.8 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="147.86" y="60.25" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">100 km</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="65.43" cy="102.8" r="2.8" fill="#0f1f3d"/><circle cx="112.57" cy="102.8" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="65.43" y="175" font-size="7.5" fill="#374151" text-anchor="middle">1 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },
        { difficulty: 'Hard', question: 'Die reisgrafiek wys ʼn bus wat teen 70 km/h vir 2 uur ry, en dan teen 30 km/h vir ʼn verdere 3 uur. Vind die totale afstand afgelê.', checkMode: 'auto', correctAnswer: '230', correctAnswers: ['230', '230 km'], answer: '230 km', explanation: 'Eerste gedeelte: 70 × 2 = 140 km. Tweede gedeelte: 30 × 3 = 90 km. Totaal: 140 + 90 = 230 km.' , diagramSvg: '<svg viewBox="0 0 220 195" xmlns="http://www.w3.org/2000/svg"><line x1="78" y1="14" x2="78" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="127.25" x2="210" y2="127.25" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="122" y1="14" x2="122" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="166" y1="14" x2="166" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="51.75" x2="210" y2="51.75" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="210" y1="14" x2="210" y2="165" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="14" x2="210" y2="14" stroke="#9ca3af" stroke-width="0.5" opacity="0.5"/><line x1="34" y1="165" x2="216" y2="165" stroke="#374151" stroke-width="1.5"/><line x1="34" y1="165" x2="34" y2="10" stroke="#374151" stroke-width="1.5"/><text x="122" y="193" font-size="8" fill="#374151" text-anchor="middle">tyd (ure)</text><text x="8" y="89.5" font-size="8" fill="#374151" text-anchor="middle" transform="rotate(-90 8 89.5)">afstand (km)</text><polyline points="34,165 96.86,85.08" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="61.43" y="117.04" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">70 km/h</text><polyline points="96.86,85.08 191.14,33.7" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="140" y="51.39" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">30 km/h</text><circle cx="34" cy="165" r="2.8" fill="#0f1f3d"/><circle cx="96.86" cy="85.08" r="2.8" fill="#0f1f3d"/><circle cx="191.14" cy="33.7" r="2.8" fill="#0f1f3d"/><text x="96.86" y="175" font-size="7.5" fill="#374151" text-anchor="middle">2 h</text><text x="191.14" y="175" font-size="7.5" fill="#374151" text-anchor="middle">5 h</text></svg>' },

        // Blok 6 — woordprobleem-toepassing, albei afsnypunte, foutopsporing (Hard)
        { difficulty: 'Hard', question: 'ʼn Loodgieter hef fooie volgens die formule K = 25n + 100, waar K die totale koste in rand is en n die aantal ure gewerk is. Vind die koste van ʼn werk wat 6 uur neem.', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', 'R250'], answer: 'R250', explanation: 'Vervang n = 6: K = 25(6) + 100 = 150 + 100 = 250. Die koste is R250.' },
        { difficulty: 'Hard', question: 'ʼn Lyn het die vergelyking y = 6x − 30. Vind albei die y-afsny en die x-afsny.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vind die y-afsny', correctAnswer: '-30', correctAnswers: ['-30', '−30'], explanation: 'Stel x = 0: y = 6(0) − 30 = −30. Die y-afsny is −30.' },
          { label: 'b) Vind die x-afsny', correctAnswer: '5', correctAnswers: ['5', 'x=5', 'x = 5'], explanation: 'Stel y = 0: 0 = 6x − 30. Dus 6x = 30, x = 5. Die x-afsny is 5.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle sê die lyn y = −4x + 16 het ʼn gradiënt van 4. Is sy korrek? Verduidelik en gee die korrekte gradiënt.', answer: 'Nee — sy het die verkeerde teken. In y = mx + c is die koëffisiënt van x die gradiënt. Hier is m = −4, dus is die gradiënt −4, nie 4 nie. Die negatiewe teken beteken die lyn daal van links na regs.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Fietsryer moet 315 km teen ʼn konstante gemiddelde spoed van 45 km/h reis. Hoe lank sal die reis neem?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 uur'], answer: '7 uur', explanation: 'Tyd = afstand ÷ spoed = 315 ÷ 45 = 7 uur.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gradiënte, vergelykings van lyne en die vertolking van grafieke bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor reisgrafieke of vergelykings van lyne na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor gradiënt en y = mx + c weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
