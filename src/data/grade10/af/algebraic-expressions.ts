import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// first binomial term / split terms / converted fractions → blue   (#2563eb)
// second binomial term / a×c value / LCM                 → orange (#ea580c)
// combined result / factored form / simplified answer     → green  (#16a34a)
// grouped pair 1                                          → red    (#dc2626)
// grouped pair 2                                          → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Uitdrukkings',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MULTIPLYING A BINOMIAL BY A TRINOMIAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'binomial-times-trinomial',
      title: 'ʼn Binoom met ʼn Trinoom Vermenigvuldig',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn <strong>binoom</strong> (twee terme) met ʼn <strong>trinoom</strong> (drie terme) te vermenigvuldig, distribueer ons elke term van die binoom oor elke term van die trinoom, en voeg dan gelyksoortige terme saam. Daar is altyd <strong>ses gedeeltelike produkte</strong> voordat ons vereenvoudig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste binoomterm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede binoomterm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekombineerde resultaat')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe distribusie werk</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;font-size:15px;">(${bl('a')} + ${or('b')})(c + d + e) = ${bl('ac')} + ${bl('ad')} + ${bl('ae')} + ${or('bc')} + ${or('bd')} + ${or('be')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Elke term van die binoom vermenigvuldig elke term van die trinoom — ses produkte in totaal.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Distribueer die eerste term')} — Vermenigvuldig die eerste term van die binoom met elke term van die trinoom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Distribueer die tweede term')} — Vermenigvuldig die tweede term van die binoom met elke term van die trinoom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Voeg gelyksoortige terme saam')} — Versamel terme met dieselfde mag van x en tel hulle koëffisiënte bymekaar.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Skryf jou antwoord in standaardvorm</p>` +
        `<p style="margin:0;color:#1e3a8a;">Rangskik die finale antwoord met die <strong>hoogste mag eerste</strong> (x³, dan x², dan x, dan die konstante). Dit maak gelyksoortige terme maklik om raak te sien en antwoorde maklik om na te gaan.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Brei (x + 2)(x² + 3x − 5) uit.',
          answer: `${gr('x³ + 5x² + x − 10')}`,
          steps: [
            `Identifiseer die binoomterme: ${bl('x')} en ${or('+2')}.`,
            `${bl('Distribueer x:')} ${bl('x')} × x² = ${bl('x³')}, &nbsp; ${bl('x')} × 3x = ${bl('+3x²')}, &nbsp; ${bl('x')} × (−5) = ${bl('−5x')}.`,
            `${or('Distribueer +2:')} ${or('+2')} × x² = ${or('+2x²')}, &nbsp; ${or('+2')} × 3x = ${or('+6x')}, &nbsp; ${or('+2')} × (−5) = ${or('−10')}.`,
            `Skryf al ses produkte saam: ${bl('x³ + 3x² − 5x')} + ${or('2x² + 6x − 10')}.`,
            `${gr('Voeg gelyksoortige terme saam:')} x³ &nbsp;|&nbsp; (3 + 2)x² = 5x² &nbsp;|&nbsp; (−5 + 6)x = x &nbsp;|&nbsp; −10.`,
            `<strong>Antwoord:</strong> ${gr('x³ + 5x² + x − 10')}`,
          ],
        },
        {
          question: 'Brei (2x − 1)(x² − 4x + 3) uit.',
          answer: `${gr('2x³ − 9x² + 10x − 3')}`,
          steps: [
            `Identifiseer die binoomterme: ${bl('2x')} en ${or('−1')}.`,
            `${bl('Distribueer 2x:')} ${bl('2x')} × x² = ${bl('2x³')}, &nbsp; ${bl('2x')} × (−4x) = ${bl('−8x²')}, &nbsp; ${bl('2x')} × 3 = ${bl('+6x')}.`,
            `${or('Distribueer −1:')} ${or('−1')} × x² = ${or('−x²')}, &nbsp; ${or('−1')} × (−4x) = ${or('+4x')}, &nbsp; ${or('−1')} × 3 = ${or('−3')}.`,
            `Skryf al ses produkte saam: ${bl('2x³ − 8x² + 6x')} + ${or('−x² + 4x − 3')}.`,
            `${gr('Voeg gelyksoortige terme saam:')} 2x³ &nbsp;|&nbsp; (−8 − 1)x² = −9x² &nbsp;|&nbsp; (6 + 4)x = 10x &nbsp;|&nbsp; −3.`,
            `<strong>Antwoord:</strong> ${gr('2x³ − 9x² + 10x − 3')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Brei (x + 3)(x² − 2x + 1) uit.',
          answer: 'Distribueer x: x³ − 2x² + x. Distribueer +3: 3x² − 6x + 3. Voeg saam: x³ + (−2 + 3)x² + (1 − 6)x + 3 = x³ + x² − 5x + 3.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Brei elkeen van die volgende uit.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (x − 2)(x² + 4x − 3) =',
              correctAnswer: 'x³+2x²-11x+6',
              correctAnswers: ['x³+2x²-11x+6', 'x^3+2x^2-11x+6'],
              explanation: 'Distribueer x: x³ + 4x² − 3x. Distribueer −2: −2x² − 8x + 6. Voeg saam: x³ + (4 − 2)x² + (−3 − 8)x + 6 = x³ + 2x² − 11x + 6.',
            },
            {
              label: 'b) (3x + 1)(2x² − x + 4) =',
              correctAnswer: '6x³-x²+11x+4',
              correctAnswers: ['6x³-x²+11x+4', '6x^3-x^2+11x+4'],
              explanation: 'Distribueer 3x: 6x³ − 3x² + 12x. Distribueer +1: 2x² − x + 4. Voeg saam: 6x³ + (−3 + 2)x² + (12 − 1)x + 4 = 6x³ − x² + 11x + 4.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Brei (2x − 3)(3x² + 5x − 2) uit en verifieer jou antwoord deur x = 1 in beide die oorspronklike uitdrukking en die uitgebreide vorm te vervang.',
          answer: 'Uitgebrei: 6x³ + x² − 19x + 6.\nVerifieer x = 1: Oorspronklik: (2 − 3)(3 + 5 − 2) = (−1)(6) = −6. Uitgebrei: 6 + 1 − 19 + 6 = −6. ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to multiply a binomial by a trinomial using distribution with colour coded first term blue and second term orange then combining like terms green" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Distribution diagram for (x+2)(x²+3x−5) showing six arrows from each binomial term to each trinomial term colour coded blue for x and orange for 2" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FACTORISING TRINOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-trinomials',
      title: 'Faktorisering van Trinome',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">Faktorisering keer uitbreiding om. Vir <strong>x² + bx + c</strong>, vind twee getalle wat <em>vermenigvuldig</em> om <strong>c</strong> te gee en <em>optel</em> om <strong>b</strong> te gee. Vir <strong>ax² + bx + c waar a ≠ 1</strong>, gebruik die <strong>a × c-metode</strong>: vind twee getalle wat vermenigvuldig om <strong>ac</strong> te gee en optel om <strong>b</strong> te gee, en splits dan die middelste term en faktoriseer deur groepering.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('a × c-waarde')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gesplitste terme')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gefaktoriseerde hakies')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 1 — x² + bx + c &nbsp;(a = 1)</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind twee getalle wat ${or('vermenigvuldig na c')} en optel na b.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${gr('gefaktoriseerde vorm')} as (x + p)(x + q) waar p en q jou twee getalle is.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode 2 — ax² + bx + c &nbsp;(a ≠ 1): die a × c-metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Bereken ${or('a × c')}. Vind twee getalle wat vermenigvuldig om ${or('ac')} te gee en optel om b te gee.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Splits die middelste term')} — vervang bx met twee afsonderlike terme deur jou twee getalle te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Groepeer en faktoriseer')} — faktoriseer elke paar terme, en faktoriseer dan die gemeenskaplike binoom uit.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd deur uit te brei</p>` +
        `<p style="margin:0;color:#1e3a8a;">Brei ná faktorisering jou antwoord uit om te bevestig dat dit ooreenstem met die oorspronklike uitdrukking. Dit neem net sekondes en waarborg dat jou antwoord korrek is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer x² + 2x − 15.',
          answer: `${gr('(x + 5)(x − 3)')}`,
          steps: [
            `Identifiseer a = 1, b = 2, c = −15. Aangesien a = 1, gebruik Metode 1.`,
            `Vind twee getalle wat vermenigvuldig na ${or('−15')} en optel na 2.`,
            `Toets faktorpare van 15: 1 × 15, 3 × 5. Probeer ${or('5 en −3')}: 5 × (−3) = ${or('−15')} ✓ en 5 + (−3) = 2 ✓.`,
            `Skryf die gefaktoriseerde vorm: ${gr('(x + 5)(x − 3)')}.`,
            `Kontroleer: (x + 5)(x − 3) = x² − 3x + 5x − 15 = x² + 2x − 15 ✓`,
          ],
        },
        {
          question: 'Faktoriseer 3x² + 11x + 6.',
          answer: `${gr('(3x + 2)(x + 3)')}`,
          steps: [
            `Identifiseer a = 3, b = 11, c = 6. Aangesien a ≠ 1, gebruik die a × c-metode.`,
            `Bereken ${or('a × c = 3 × 6 = 18')}.`,
            `Vind twee getalle wat vermenigvuldig na ${or('18')} en optel na 11: 9 en 2 — 9 × 2 = 18 ✓, 9 + 2 = 11 ✓.`,
            `${bl('Splits die middelste term:')} 3x² + ${bl('9x + 2x')} + 6.`,
            `Groepeer: (3x² + ${bl('9x')}) + (${bl('2x')} + 6) = ${bl('3x(x + 3)')} + ${bl('2(x + 3)')}.`,
            `Faktoriseer die gemeenskaplike binoom uit: ${gr('(3x + 2)(x + 3)')}.`,
            `Kontroleer: (3x + 2)(x + 3) = 3x² + 9x + 2x + 6 = 3x² + 11x + 6 ✓`,
          ],
        },
        {
          question: 'Faktoriseer 2x² − 7x − 15.',
          answer: `${gr('(2x + 3)(x − 5)')}`,
          steps: [
            `Identifiseer a = 2, b = −7, c = −15. Gebruik die a × c-metode.`,
            `Bereken ${or('a × c = 2 × (−15) = −30')}.`,
            `Vind twee getalle wat vermenigvuldig na ${or('−30')} en optel na −7: −10 en 3 — (−10) × 3 = −30 ✓, (−10) + 3 = −7 ✓.`,
            `${bl('Splits die middelste term:')} 2x² + ${bl('3x − 10x')} − 15.`,
            `Groepeer: (2x² + ${bl('3x')}) + (${bl('−10x')} − 15) = ${bl('x(2x + 3)')} ${bl('− 5(2x + 3)')}.`,
            `Faktoriseer die gemeenskaplike binoom uit: ${gr('(2x + 3)(x − 5)')}.`,
            `Kontroleer: (2x + 3)(x − 5) = 2x² − 10x + 3x − 15 = 2x² − 7x − 15 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Faktoriseer x² + 7x + 12.',
          answer: 'Vind twee getalle wat vermenigvuldig na 12 en optel na 7: 3 en 4.\nGefaktoriseer: (x + 3)(x + 4).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Faktoriseer elkeen van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) x² − x − 12 =',
              correctAnswer: '(x-4)(x+3)',
              correctAnswers: ['(x-4)(x+3)', '(x+3)(x-4)'],
              explanation: 'Vind getalle wat vermenigvuldig na −12 en optel na −1: −4 en 3. Antwoord: (x − 4)(x + 3).\nKontroleer: (x − 4)(x + 3) = x² + 3x − 4x − 12 = x² − x − 12 ✓',
            },
            {
              label: 'b) 2x² + 7x + 3 =',
              correctAnswer: '(2x+1)(x+3)',
              correctAnswers: ['(2x+1)(x+3)', '(x+3)(2x+1)'],
              explanation: 'a × c = 6. Getalle wat vermenigvuldig na 6 en optel na 7: 6 en 1.\nSplits: 2x² + 6x + x + 3. Groepeer: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Faktoriseer 6x² − x − 12.',
          answer: 'a × c = 6 × (−12) = −72.\nGetalle wat vermenigvuldig na −72 en optel na −1: −9 en 8.\nSplits: 6x² − 9x + 8x − 12.\nGroepeer: 3x(2x − 3) + 4(2x − 3) = (3x + 4)(2x − 3).\nKontroleer: (3x + 4)(2x − 3) = 6x² − 9x + 8x − 12 = 6x² − x − 12 ✓',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to factorise trinomials using the sum-product method for a=1 and the a×c method for a≠1 with colour coded a×c value orange and split terms blue" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Factor grid for 3x²+11x+6 showing a×c product orange, the two split numbers, split terms blue, and the resulting factored brackets green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING BY GROUPING IN PAIRS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'factorising-by-grouping',
      title: 'Faktorisering deur Groepering in Pare',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ʼn uitdrukking <strong>vier of meer terme</strong> het sonder ʼn enkele gemeenskaplike faktor oor al die terme, groepeer ons terme in <strong>pare</strong> wat ʼn gemeenskaplike faktor deel, faktoriseer elke paar, en faktoriseer dan die <strong>gemeenskaplike binoomfaktor</strong> uit.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eerste paar')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('tweede paar')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gemeenskaplike binoom')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Groepeer die eerste paar')} — plaas die eerste twee terme saam in hakies.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${pu('Groepeer die tweede paar')} — plaas die laaste twee terme in hakies. Let noukeurig op tekens.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Faktoriseer elke paar, en faktoriseer dan die ${gr('gemeenskaplike binoom')} uit albei groepe.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Groeperingsvolgorde is belangrik</p>` +
        `<p style="margin:0;color:#78350f;">Beide groepe moet dieselfde <strong>binoomfaktor</strong> lewer na faktorisering. Indien nie, probeer om die terme in ʼn ander groepering te herrangskik voordat jy tot die gevolgtrekking kom dat die uitdrukking nie op hierdie manier gefaktoriseer kan word nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer ax + ay + bx + by.',
          answer: `${gr('(x + y)(a + b)')}`,
          steps: [
            `Groepeer die terme in pare: (${re('ax + ay')}) + (${pu('bx + by')}).`,
            `Faktoriseer die ${re('eerste paar:')} ${re('a(x + y)')}.`,
            `Faktoriseer die ${pu('tweede paar:')} ${pu('b(x + y)')}.`,
            `Albei pare bevat die ${gr('gemeenskaplike binoom (x + y)')}.`,
            `Faktoriseer die gemeenskaplike binoom uit: ${gr('(x + y)(a + b)')}.`,
            `Kontroleer: (x + y)(a + b) = ax + bx + ay + by ✓`,
          ],
        },
        {
          question: 'Faktoriseer x³ + 3x² − 4x − 12.',
          answer: `${gr('(x + 3)(x − 2)(x + 2)')}`,
          steps: [
            `Groepeer die terme in pare: (${re('x³ + 3x²')}) + (${pu('−4x − 12')}).`,
            `Faktoriseer die ${re('eerste paar:')} ${re('x²(x + 3)')}.`,
            `Faktoriseer die ${pu('tweede paar:')} ${pu('−4(x + 3)')}. (Faktoriseer −4 uit sodat (x + 3) in albei groepe voorkom.)`,
            `Albei pare bevat die ${gr('gemeenskaplike binoom (x + 3)')}.`,
            `Faktoriseer die gemeenskaplike binoom uit: ${gr('(x + 3)(x² − 4)')}.`,
            `Herken dat x² − 4 ʼn <strong>verskil van kwadrate</strong> is: x² − 4 = (x − 2)(x + 2).`,
            `<strong>Antwoord:</strong> ${gr('(x + 3)(x − 2)(x + 2)')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Faktoriseer 3x + 3y + ax + ay.',
          answer: 'Groepeer: (3x + 3y) + (ax + ay).\nFaktoriseer elke paar: 3(x + y) + a(x + y).\nGemeenskaplike binoom: (x + y)(3 + a).',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Faktoriseer elkeen van die volgende deur in pare te groepeer.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2x² + 4x + 3x + 6 =',
              correctAnswer: '(2x+3)(x+2)',
              correctAnswers: ['(2x+3)(x+2)', '(x+2)(2x+3)'],
              explanation: 'Groepeer: (2x²+4x)+(3x+6). Faktoriseer: 2x(x+2)+3(x+2) = (2x+3)(x+2).',
            },
            {
              label: 'b) x³ − 2x² + 5x − 10 =',
              correctAnswer: '(x²+5)(x-2)',
              correctAnswers: ['(x²+5)(x-2)', '(x-2)(x²+5)', '(x^2+5)(x-2)', '(x-2)(x^2+5)'],
              explanation: 'Groepeer: (x³−2x²)+(5x−10). Faktoriseer: x²(x−2)+5(x−2) = (x²+5)(x−2).',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Faktoriseer x³ − x² − 4x + 4 volledig.',
          answer: 'Groepeer: (x³−x²)+(−4x+4).\nFaktoriseer: x²(x−1)−4(x−1).\nGemeenskaplike binoom: (x²−4)(x−1).\nFaktoriseer verskil van kwadrate: (x−2)(x+2)(x−1).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to factorise a four-term expression by grouping in pairs with first pair colour coded red and second pair purple and common binomial green" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Grouping diagram for x³+3x²−4x−12 showing the first pair red, second pair purple, factored groups, and the resulting common binomial factor green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SIMPLIFYING ALGEBRAIC FRACTIONS WITH MONOMIAL DENOMINATORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'algebraic-fractions-monomial',
      title: 'Algebraïese Breuke met Monoomnoemers Vereenvoudig',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">Om algebraïese breuke met <strong>monoom- (enkelterm-) noemers</strong> te <strong>vereenvoudig, optel of aftrek</strong>, vind die <strong>KGV</strong> van die noemers, skakel elke breuk om, kombineer dan en vereenvoudig deur die teller te faktoriseer waar moontlik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('KGV')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omgeskakelde breuke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe vir die optel of aftrek van algebraïese breuke</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${or('KGV')} van al die noemers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skakel elke breuk om')} — vermenigvuldig teller en noemer met wat nodig is om die KGV-noemer te bereik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Kombineer die tellers, en ${gr('vereenvoudig')} dan deur die teller te faktoriseer waar moontlik.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Gee beperkings op die veranderlike</p>` +
        `<p style="margin:0;color:#991b1b;">Die noemer van ʼn breuk kan nooit gelyk aan nul wees nie. Gee altyd beperkings soos <strong>x ≠ 0</strong> wanneer die veranderlike in die noemer voorkom. Dit is ʼn vereiste deel van ʼn volledige antwoord in Graad 10.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig (6x² + 9x) / 3x.',
          answer: `${gr('2x + 3')} &nbsp;(x ≠ 0)`,
          steps: [
            `Faktoriseer die teller: 6x² + 9x = ${bl('3x(2x + 3)')}.`,
            `Skryf die breuk: ${bl('3x(2x + 3)')} / 3x.`,
            `Kanselleer die gemeenskaplike faktor 3x (toelaatbaar aangesien x ≠ 0): ${gr('2x + 3')}.`,
            `<strong>Antwoord:</strong> ${gr('2x + 3')} &nbsp;(x ≠ 0)`,
          ],
        },
        {
          question: 'Bereken 3/x + 5/(2x).',
          answer: `${gr('11/(2x)')} &nbsp;(x ≠ 0)`,
          steps: [
            `Vind die ${or('KGV')} van x en 2x: ${or('KGV = 2x')}.`,
            `${bl('Skakel die eerste breuk om:')} 3/x = ${bl('6/(2x)')} (vermenigvuldig teller en noemer met 2).`,
            `Die tweede breuk ${bl('5/(2x)')} het reeds die KGV as sy noemer.`,
            `Kombineer: ${bl('6/(2x)')} + ${bl('5/(2x)')} = ${gr('11/(2x)')}.`,
            `<strong>Antwoord:</strong> ${gr('11/(2x)')} &nbsp;(x ≠ 0)`,
          ],
        },
        {
          question: 'Bereken 4/x² − 1/x.',
          answer: `${gr('(4 − x)/x²')} &nbsp;(x ≠ 0)`,
          steps: [
            `Vind die ${or('KGV')} van x² en x: ${or('KGV = x²')}.`,
            `Die eerste breuk ${bl('4/x²')} het reeds die KGV as sy noemer.`,
            `${bl('Skakel die tweede breuk om:')} 1/x = ${bl('x/x²')} (vermenigvuldig teller en noemer met x).`,
            `Kombineer: ${bl('4/x²')} − ${bl('x/x²')} = ${gr('(4 − x)/x²')}.`,
            `Die teller 4 − x kan nie verder gefaktoriseer word nie.`,
            `<strong>Antwoord:</strong> ${gr('(4 − x)/x²')} &nbsp;(x ≠ 0)`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig (8x² + 12x) / 4x &nbsp;(x ≠ 0).',
          answer: '2x + 3',
          checkMode: 'auto',
          correctAnswer: '2x+3',
          correctAnswers: ['2x+3', '2x + 3'],
          explanation: 'Faktoriseer teller: 8x²+12x = 4x(2x+3). Kanselleer 4x: 2x+3 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken elkeen van die volgende &nbsp;(x ≠ 0).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 2/x + 3/(2x) =',
              correctAnswer: '7/(2x)',
              correctAnswers: ['7/(2x)', '7/2x'],
              explanation: 'KGV = 2x. Skakel om: 4/(2x) + 3/(2x) = 7/(2x) ✓',
            },
            {
              label: 'b) 5/x − 2/x² =',
              correctAnswer: '(5x-2)/x²',
              correctAnswers: ['(5x-2)/x²', '(5x-2)/x^2'],
              explanation: 'KGV = x². Skakel om: 5x/x² − 2/x² = (5x−2)/x² ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Bereken 4/(3x) + 5/(6x²) − 1/(2x) &nbsp;(x ≠ 0) en vereenvoudig volledig.',
          answer: 'KGV van 3x, 6x², 2x is 6x².\nSkakel om: 8x/(6x²) + 5/(6x²) − 3x/(6x²).\nKombineer tellers: (8x + 5 − 3x)/(6x²) = (5x + 5)/(6x²).\nFaktoriseer: 5(x + 1)/(6x²).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify add and subtract algebraic fractions with monomial denominators using LCM colour coded orange with converted fractions blue and simplified answer green" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Fraction addition diagram for 3/x + 5/2x showing LCM orange, converted equivalent fractions blue, and the final simplified answer green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — Expand (x+3)(x²+2x-1) ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Brei (x+3)(x²+2x-1) uit.',
      answer: 'x³+5x²+5x-3',
      checkMode: 'auto',
      correctAnswer: 'x³+5x²+5x-3',
      correctAnswers: ['x³+5x²+5x-3', 'x^3+5x^2+5x-3'],
      explanation: 'Distribueer x: x³+2x²-x. Distribueer +3: 3x²+6x-3. Voeg saam: x³+(2+3)x²+(-1+6)x-3 = x³+5x²+5x-3.',
    },

    // ── Q2 Medium — Expand (2x-3)(x²+x+4) ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Brei (2x-3)(x²+x+4) uit.',
      answer: '2x³-x²+5x-12',
      checkMode: 'auto',
      correctAnswer: '2x³-x²+5x-12',
      correctAnswers: ['2x³-x²+5x-12', '2x^3-x^2+5x-12'],
      explanation: 'Distribueer 2x: 2x³+2x²+8x. Distribueer -3: -3x²-3x-12. Voeg saam: 2x³+(2-3)x²+(8-3)x-12 = 2x³-x²+5x-12.',
    },

    // ── Q3 Hard — Check Sipho's expansion of (x-1)(x²+x+1) ──────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho brei (x-1)(x²+x+1) uit en kry x³-1. Kontroleer sy antwoord.',
      answer: 'Korrek — deur volledig te distribueer kry ons x³+x²+x-x²-x-1=x³-1.',
      checkMode: 'self',
    },

    // ── Q4 Easy — Factorise x²-3x-10 ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer x²-3x-10.',
      answer: '(x-5)(x+2)',
      checkMode: 'auto',
      correctAnswer: '(x-5)(x+2)',
      correctAnswers: ['(x-5)(x+2)', '(x+2)(x-5)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na -10 en optel na -3: -5 en 2. Antwoord: (x-5)(x+2). Kontroleer: (x-5)(x+2)=x²+2x-5x-10=x²-3x-10 ✓',
    },

    // ── Q5 Medium — Factorise 2x²+7x+3 ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 2x²+7x+3.',
      answer: '(2x+1)(x+3)',
      checkMode: 'auto',
      correctAnswer: '(2x+1)(x+3)',
      correctAnswers: ['(2x+1)(x+3)', '(x+3)(2x+1)'],
      explanation: 'a×c=6. Getalle wat vermenigvuldig na 6 en optel na 7: 1 en 6. Splits: 2x²+x+6x+3. Groepeer: x(2x+1)+3(2x+1)=(2x+1)(x+3). Kontroleer: (2x+1)(x+3)=2x²+6x+x+3=2x²+7x+3 ✓',
    },

    // ── Q6 Hard — Factorise 6x²-13x+6 using a×c method ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 6x²-13x+6, en toon die a×c-metode duidelik.',
      answer: 'a×c=36. Getalle wat vermenigvuldig na 36 en optel na -13: -9 en -4. Splits: 6x²-9x-4x+6. Groepeer: 3x(2x-3)-2(2x-3)=(3x-2)(2x-3).',
      checkMode: 'self',
    },

    // ── Q7 Medium — Factorise by grouping: ab+ac+db+dc ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer deur groepering: ab+ac+db+dc.',
      answer: '(b+c)(a+d)',
      checkMode: 'auto',
      correctAnswer: '(b+c)(a+d)',
      correctAnswers: ['(b+c)(a+d)', '(a+d)(b+c)'],
      explanation: 'Groepeer: (ab+ac)+(db+dc). Faktoriseer: a(b+c)+d(b+c)=(b+c)(a+d).',
    },

    // ── Q8 Hard — Factorise x³-2x²-9x+18 fully ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer x³-2x²-9x+18 volledig.',
      answer: 'Groepeer: x²(x-2)-9(x-2)=(x-2)(x²-9)=(x-2)(x-3)(x+3).',
      checkMode: 'self',
    },

    // ── Q9 Easy — Simplify (4x²+8x)/4x ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig (4x²+8x)/4x.',
      answer: 'x+2',
      checkMode: 'auto',
      correctAnswer: 'x+2',
      explanation: 'Faktoriseer teller: 4x(x+2). Kanselleer 4x: x+2.',
    },

    // ── Q10 Medium — Calculate 2/x + 7/3x ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 2/x + 7/3x.',
      answer: '13/3x',
      checkMode: 'auto',
      correctAnswer: '13/(3x)',
      correctAnswers: ['13/(3x)', '13/3x'],
      explanation: 'KGV=3x. Skakel eerste breuk om: 2/x=6/3x. Tel op: 6/3x+7/3x=13/3x.',
    },

    // ── Q11 Hard — Calculate 5/x² - 2/x showing the LCM step ─────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 5/x² - 2/x, en toon die KGV-stap.',
      answer: 'KGV=x². Skakel om: 5/x² - 2x/x². Kombineer: (5-2x)/x².',
      checkMode: 'self',
    },

    // ── Q12 Medium — Factorise 4x²-9 ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 4x²-9.',
      answer: '(2x-3)(2x+3)',
      checkMode: 'auto',
      correctAnswer: '(2x-3)(2x+3)',
      correctAnswers: ['(2x-3)(2x+3)', '(2x+3)(2x-3)'],
      explanation: 'Verskil van kwadrate: (2x)²-3²=(2x-3)(2x+3). Kontroleer: (2x-3)(2x+3)=4x²-9 ✓',
    },

    // ── Q13 Hard — Lerato's claim about 3x²+12x+9 ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê 3x²+12x+9 kan nie gefaktoriseer word nie, aangesien 3 nie ʼn volkome kwadraat is nie. Is sy korrek?',
      answer: 'Nee — faktoriseer eers die gemeenskaplike faktor 3 uit: 3(x²+4x+3)=3(x+1)(x+3).',
      checkMode: 'self',
    },

    // ── Q14 Hard — Expand (x+4)(2x²-3x+5) ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Brei (x+4)(2x²-3x+5) uit.',
      answer: '2x³+5x²-7x+20',
      checkMode: 'auto',
      correctAnswer: '2x³+5x²-7x+20',
      correctAnswers: ['2x³+5x²-7x+20', '2x^3+5x^2-7x+20'],
      explanation: 'Distribueer x: 2x³-3x²+5x. Distribueer +4: 8x²-12x+20. Voeg saam: 2x³+(-3+8)x²+(5-12)x+20=2x³+5x²-7x+20.',
    },

    // ── Q15 Medium — Factorise x²-11x+24 ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer x²-11x+24.',
      answer: '(x-8)(x-3)',
      checkMode: 'auto',
      correctAnswer: '(x-8)(x-3)',
      correctAnswers: ['(x-8)(x-3)', '(x-3)(x-8)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na 24 en optel na -11: -8 en -3. Antwoord: (x-8)(x-3). Kontroleer: (x-8)(x-3)=x²-3x-8x+24=x²-11x+24 ✓',
    },

    // ── Q16 Hard — Factorise by grouping: 2x³+6x²-x-3 ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer deur groepering: 2x³+6x²-x-3.',
      answer: 'Groepeer: 2x²(x+3)-1(x+3)=(x+3)(2x²-1).',
      checkMode: 'self',
    },

    // ── Q17 Hard — Calculate 1/2x + 3/4x - 1/x ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 1/2x + 3/4x - 1/x.',
      answer: '1/4x',
      checkMode: 'auto',
      correctAnswer: '1/(4x)',
      correctAnswers: ['1/(4x)', '1/4x'],
      explanation: 'KGV=4x. Skakel om: 2/4x+3/4x-4/4x=(2+3-4)/4x=1/4x.',
    },

    // ── Q18 Hard — Factorise 5x²-20x-25 fully ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 5x²-20x-25 volledig, insluitend die gemeenskaplike faktor.',
      answer: 'Faktoriseer 5 uit: 5(x²-4x-5)=5(x-5)(x+1).',
      checkMode: 'self',
    },

    // ── Q19 Hard — Expand and simplify (x-2)(x²+2x+4) ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Brei uit en vereenvoudig (x-2)(x²+2x+4).',
      answer: 'x³-8',
      checkMode: 'auto',
      correctAnswer: 'x³-8',
      correctAnswers: ['x³-8', 'x^3-8'],
      explanation: 'Distribueer x: x³+2x²+4x. Distribueer -2: -2x²-4x-8. Voeg saam: x³+(2-2)x²+(4-4)x-8=x³-8.',
    },

    // ── Q20 Hard — Thabo's difference of cubes claim ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê (x-2)(x²+2x+4)=x³-8 is ʼn voorbeeld van ʼn spesiale faktoriseringspatroon (verskil van kubusse). Is hy korrek? Verduidelik.',
      answer: 'Ja — dit stem ooreen met die verskil-van-kubusse-patroon a³-b³=(a-b)(a²+ab+b²), waar a=x en b=2.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het algebraïese uitdrukkings bemeester.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
