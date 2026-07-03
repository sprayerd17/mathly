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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the line y=2x-6, with the x-intercept at (3,0) and y-intercept at (0,-6) clearly marked]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining y-intercept, x-intercept and gradient of linear graphs with worked examples" />',
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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing the line y=-x+4 plotted using its x-intercept (4,0) and y-intercept (0,4)]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a straight-line graph using the intercept method and a table of values" />',
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
        '<DiagramPlaceholder label="[Diagram needed: a Cartesian plane showing a line passing through (0,5) and (2,9), with the gradient triangle (rise of 4, run of 2) marked between the points]" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to determine the equation of a linear graph from two known points using y = mx + c" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het grafieke bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
