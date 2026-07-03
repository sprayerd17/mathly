import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (factorising roles) ──────────────────────────────────────
// common factor / first square / numbers found → blue   (#2563eb)
// remaining expression / factorised form       → green  (#16a34a)
// second square / common factor in trinomials  → orange (#ea580c)
// step labels / checks                         → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Faktorisering van Algebraïese Uitdrukkings',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — FACTORISING USING COMMON FACTORS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'common-factors',
      title: 'Faktorisering deur Gemeenskaplike Faktore',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Faktorisering beteken om ʼn uitdrukking te skryf as ʼn <strong>produk van sy faktore</strong> — die omgekeerde van uitbreiding. Ons vind die <strong>grootste gemene faktor (GGF)</strong> van al die terme en skryf dit buite hakies, met die oorblywende dele binne.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemeenskaplike faktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oorblywende uitdrukking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die GGF te vind en uit te faktoriseer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${bl('GGF')} van die numeriese koëffisiënte van al die terme.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${bl('GGF')} van enige veranderlike dele — die laagste mag van elke veranderlike wat in elke term voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('GGF')} buite die hakies en deel elke term daardeur om die ${gr('oorblywende uitdrukking')} binne die hakies te kry.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer jou antwoord</p>` +
        `<p style="margin:0;color:#1e3a8a;">Brei altyd jou antwoord uit om te bevestig dat dit ooreenstem met die oorspronklike uitdrukking. As ${bl('GGF')} × ${gr('hakie')} = oorspronklike uitdrukking, is jou faktorisering korrek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer 6x² + 9x.',
          answer: `${bl('3x')}(${gr('2x + 3')})`,
          steps: [
            `Vind die ${bl('GGF')} van 6x² en 9x. GGF van 6 en 9 is 3; GGF van x² en x is x. Dus ${bl('GGF = 3x')}.`,
            `Faktoriseer ${bl('3x')} uit: deel elke term deur ${bl('3x')} om die ${gr('oorblywende uitdrukking')} te kry: 6x² ÷ 3x = ${gr('2x')} en 9x ÷ 3x = ${gr('3')}.`,
            `Skryf die gefaktoriseerde vorm: ${bl('3x')}(${gr('2x + 3')}).`,
            `<strong>Kontroleer:</strong> ${bl('3x')} × ${gr('2x')} = 6x² en ${bl('3x')} × ${gr('3')} = 9x → 6x² + 9x ✓`,
          ],
        },
        {
          question: 'Faktoriseer 12x³ − 8x² + 4x.',
          answer: `${bl('4x')}(${gr('3x² − 2x + 1')})`,
          steps: [
            `Vind die ${bl('GGF')} van 12x³, 8x² en 4x. GGF van 12, 8 en 4 is 4; GGF van x³, x² en x is x. Dus ${bl('GGF = 4x')}.`,
            `Faktoriseer ${bl('4x')} uit: 12x³ ÷ 4x = ${gr('3x²')}, 8x² ÷ 4x = ${gr('2x')}, 4x ÷ 4x = ${gr('1')}.`,
            `Skryf die gefaktoriseerde vorm: ${bl('4x')}(${gr('3x² − 2x + 1')}).`,
            `<strong>Kontroleer:</strong> ${bl('4x')} × ${gr('3x²')} = 12x³, ${bl('4x')} × ${gr('−2x')} = −8x², ${bl('4x')} × ${gr('1')} = 4x → 12x³ − 8x² + 4x ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the HCF of algebraic terms and factor it out of an expression" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing 6x² + 9x with HCF 3x in blue factored out to give 3x(2x+3) with the remaining expression in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — FACTORISING THE DIFFERENCE OF TWO SQUARES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'difference-of-two-squares',
      title: 'Faktorisering van die Verskil van Twee Kwadrate',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Die patroon van die <strong>verskil van twee kwadrate</strong> lui dat a² − b² = (a − b)(a + b). Ons herken hierdie patroon wanneer ʼn uitdrukking ʼn <strong>aftrekking van twee volkome kwadrate</strong> is, en faktoriseer dienooreenkomstig.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste kwadraat (a²)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede kwadraat (b²)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gefaktoriseerde vorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die patroon</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('a²')} − ${or('b²')} = ${gr('(a − b)(a + b)')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die patroon te herken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Die uitdrukking moet ʼn <strong>aftrekking</strong> (verskil) wees, nie ʼn optelling nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Albei terme moet <strong>volkome kwadrate</strong> wees — ʼn getal of uitdrukking wat ontstaan deur iets te kwadreer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Vind die vierkantswortel van elke term (a en b), en skryf dan die ${gr('gefaktoriseerde vorm')} (a − b)(a + b).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Belangrik: optelling kan nie op hierdie manier gefaktoriseer word nie</p>` +
        `<p style="margin:0;color:#991b1b;">Die verskil van twee kwadrate werk slegs vir <strong>aftrekking</strong>. ʼn Uitdrukking soos x² + 16 kan nie met hierdie patroon gefaktoriseer word nie, aangesien dit ʼn optelling is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer x² − 25.',
          answer: `${gr('(x − 5)(x + 5)')}`,
          steps: [
            `Herken die patroon: ${bl('x²')} − ${or('25')} is ʼn verskil van twee kwadrate aangesien ${bl('x²')} = (x)² en ${or('25')} = (5)².`,
            `Identifiseer a = x en b = 5.`,
            `Pas die patroon a² − b² = (a − b)(a + b) toe: ${gr('(x − 5)(x + 5)')}.`,
            `<strong>Kontroleer:</strong> (x − 5)(x + 5) = x² + 5x − 5x − 25 = x² − 25 ✓`,
          ],
        },
        {
          question: 'Sipho faktoriseer 9x² − 16 en kry (3x − 4)(3x + 4). Kontroleer sy antwoord.',
          answer: `Sipho is korrek — ${gr('(3x − 4)(3x + 4)')}`,
          steps: [
            `Kontroleer of 9x² en 16 volkome kwadrate is: ${bl('9x²')} = (3x)² en ${or('16')} = (4)². Albei is volkome kwadrate en die uitdrukking is ʼn aftrekking — die patroon geld.`,
            `Deur a² − b² = (a − b)(a + b) toe te pas met a = 3x en b = 4, kry ons ${gr('(3x − 4)(3x + 4)')}.`,
            `Sipho is <strong>korrek</strong>. ✓`,
            `<strong>Verifieer deur uit te brei:</strong> (3x − 4)(3x + 4) = 9x² + 12x − 12x − 16 = 9x² − 16 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to recognise and factorise a difference of two squares using the pattern a squared minus b squared equals (a minus b)(a plus b)" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing x² minus 25 with first square in blue and second square in orange giving factorised form (x minus 5)(x plus 5) in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — FACTORISING TRINOMIALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'trinomials',
      title: 'Faktorisering van Trinome',
      icon: '()',
      explanation:
        `<p style="margin-bottom:16px;">Ons faktoriseer trinome van die vorm <strong>x² + bx + c</strong> deur twee getalle te vind wat vermenigvuldig om <strong>c</strong> te gee en optel om <strong>b</strong> te gee. Vir trinome van die vorm <strong>ax² + bx + c</strong> waar a ʼn gemeenskaplike faktor is, faktoriseer ons eers a uit, en faktoriseer dan die oorblywende trinoom.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gevonde getalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gefaktoriseerde hakies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemeenskaplike faktor')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Faktorisering van x² + bx + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind twee ${bl('getalle')} wat <strong>vermenigvuldig</strong> om c (die konstante term) te gee en <strong>optel</strong> om b (die koëffisiënt van x) te gee.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${gr('gefaktoriseerde vorm')}: (x + eerste getal)(x + tweede getal).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer</strong> deur jou antwoord uit te brei — dit moet gelyk wees aan die oorspronklike trinoom.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wanneer a ≠ 1 maar a ʼn gemeenskaplike faktor is</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;font-size:14px;">As elke term ʼn ${or('gemeenskaplike faktor')} a deel, <strong>faktoriseer dit eers uit</strong>: skryf ${or('a')}(x² + …). Faktoriseer dan die trinoom binne die hakies soos normaalweg.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekenreëls vir die twee getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">As c positief is en b positief is → is albei getalle <strong>positief</strong>.<br>As c positief is en b negatief is → is albei getalle <strong>negatief</strong>.<br>As c negatief is → is een getal positief en een <strong>negatief</strong>; die groter absolute waarde het dieselfde teken as b.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Faktoriseer x² + 7x + 12.',
          answer: `${gr('(x + 3)(x + 4)')}`,
          steps: [
            `Vind twee ${bl('getalle')} wat vermenigvuldig na 12 en optel na 7.`,
            `Lys faktorpare van 12: 1 × 12, 2 × 6, ${bl('3 × 4')}. Kontroleer somme: 3 + 4 = ${bl('7')} ✓`,
            `Die twee getalle is ${bl('3')} en ${bl('4')}.`,
            `Skryf die gefaktoriseerde vorm: ${gr('(x + 3)(x + 4)')}.`,
            `<strong>Kontroleer:</strong> (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓`,
          ],
        },
        {
          question: 'Faktoriseer x² − 2x − 15.',
          answer: `${gr('(x − 5)(x + 3)')}`,
          steps: [
            `Vind twee ${bl('getalle')} wat vermenigvuldig na −15 en optel na −2.`,
            `Aangesien die produk negatief is, het die getalle teenoorgestelde tekens. Probeer ${bl('−5 en 3')}: (−5) × 3 = −15 ✓ en (−5) + 3 = ${bl('−2')} ✓`,
            `Die twee getalle is ${bl('−5')} en ${bl('3')}.`,
            `Skryf die gefaktoriseerde vorm: ${gr('(x − 5)(x + 3)')}.`,
            `<strong>Kontroleer:</strong> (x − 5)(x + 3) = x² + 3x − 5x − 15 = x² − 2x − 15 ✓`,
          ],
        },
        {
          question: 'Faktoriseer 2x² + 10x + 12.',
          answer: `${or('2')}${gr('(x + 2)(x + 3)')}`,
          steps: [
            `Al drie terme is deelbaar deur ${or('2')} — faktoriseer eers die ${or('gemeenskaplike faktor')} uit: ${or('2')}(x² + 5x + 6).`,
            `Faktoriseer nou die trinoom x² + 5x + 6: vind twee ${bl('getalle')} wat vermenigvuldig na 6 en optel na 5.`,
            `Probeer ${bl('2 en 3')}: 2 × 3 = 6 ✓ en 2 + 3 = ${bl('5')} ✓`,
            `Skryf die ${gr('gefaktoriseerde trinoom')}: ${gr('(x + 2)(x + 3)')}.`,
            `Finale antwoord: ${or('2')}${gr('(x + 2)(x + 3)')}.`,
            `<strong>Kontroleer:</strong> 2(x + 2)(x + 3) = 2(x² + 5x + 6) = 2x² + 10x + 12 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to factorise trinomials of the form x squared plus bx plus c by finding two numbers that multiply to c and add to b" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the trinomial x² + 7x + 12 with the two numbers 3 and 4 in blue and the factorised form (x+3)(x+4) in green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — HCF common factor ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer 8x² + 12x.',
      answer: '4x(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '4x(2x+3)',
      correctAnswers: ['4x(2x+3)', '4x(2x + 3)'],
      explanation: 'GGF van 8x² en 12x is 4x.\n8x² ÷ 4x = 2x en 12x ÷ 4x = 3.\nGefaktoriseer: 4x(2x + 3) ✓',
    },

    // ── Q2 Medium — three-term common factor ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 15x³ − 10x² + 5x.',
      answer: '5x(3x² − 2x + 1)',
      checkMode: 'auto',
      correctAnswer: '5x(3x²-2x+1)',
      correctAnswers: ['5x(3x²-2x+1)', '5x(3x² - 2x + 1)', '5x(3x²−2x+1)', '5x(3x² − 2x + 1)'],
      explanation: 'GGF van 15x³, 10x² en 5x is 5x.\n15x³ ÷ 5x = 3x², 10x² ÷ 5x = 2x, 5x ÷ 5x = 1.\nGefaktoriseer: 5x(3x² − 2x + 1) ✓',
    },

    // ── Q3 Hard — check a learner's common factor answer ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho faktoriseer 6x² − 9x en kry 3(2x − 3). Kontroleer sy antwoord.',
      answer: 'Hy het ʼn x gemis — die korrekte faktorisering is 3x(2x − 3), aangesien 3x die volledige gemeenskaplike faktor is, nie net 3 nie.',
      checkMode: 'self',
    },

    // ── Q4 Easy — difference of two squares ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer x² − 49.',
      answer: '(x − 7)(x + 7)',
      checkMode: 'auto',
      correctAnswer: '(x-7)(x+7)',
      correctAnswers: ['(x-7)(x+7)', '(x − 7)(x + 7)', '(x+7)(x-7)', '(x + 7)(x − 7)'],
      explanation: 'Herken x² − 49 = x² − 7².\nVerskil van kwadrate: a² − b² = (a − b)(a + b).\nGefaktoriseer: (x − 7)(x + 7) ✓',
    },

    // ── Q5 Medium — difference of two squares with coefficient ───────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 4x² − 9.',
      answer: '(2x − 3)(2x + 3)',
      checkMode: 'auto',
      correctAnswer: '(2x-3)(2x+3)',
      correctAnswers: ['(2x-3)(2x+3)', '(2x − 3)(2x + 3)', '(2x+3)(2x-3)', '(2x + 3)(2x − 3)'],
      explanation: '4x² = (2x)² en 9 = (3)².\nVerskil van kwadrate: (2x − 3)(2x + 3) ✓',
    },

    // ── Q6 Hard — check a learner's difference of squares answer ─────────────
    {
      difficulty: 'Hard',
      question: 'Lerato faktoriseer 16x² − 25y² en kry (4x − 5y)(4x + 5y). Kontroleer haar antwoord.',
      answer: 'Sy is korrek — 16x² = (4x)² en 25y² = (5y)², so die verskil van kwadrate gee (4x − 5y)(4x + 5y).',
      checkMode: 'self',
    },

    // ── Q7 Easy — trinomial with positive terms ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Faktoriseer x² + 9x + 20.',
      answer: '(x + 4)(x + 5)',
      checkMode: 'auto',
      correctAnswer: '(x+4)(x+5)',
      correctAnswers: ['(x+4)(x+5)', '(x + 4)(x + 5)', '(x+5)(x+4)', '(x + 5)(x + 4)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na 20 en optel na 9: 4 en 5.\nGefaktoriseer: (x + 4)(x + 5) ✓',
    },

    // ── Q8 Medium — trinomial with negative constant ──────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer x² − 3x − 10.',
      answer: '(x − 5)(x + 2)',
      checkMode: 'auto',
      correctAnswer: '(x-5)(x+2)',
      correctAnswers: ['(x-5)(x+2)', '(x − 5)(x + 2)', '(x+2)(x-5)', '(x + 2)(x − 5)'],
      explanation: 'Vind twee getalle wat vermenigvuldig na −10 en optel na −3: −5 en 2.\nGefaktoriseer: (x − 5)(x + 2) ✓',
    },

    // ── Q9 Hard — check a learner's trinomial answer ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo faktoriseer x² + x − 12 en kry (x + 4)(x − 3). Kontroleer sy antwoord.',
      answer: 'Hy is korrek — 4 en −3 vermenigvuldig na −12 en tel op na 1.',
      checkMode: 'self',
    },

    // ── Q10 Medium — trinomial with common factor ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer 3x² + 15x + 18.',
      answer: '3(x + 2)(x + 3)',
      checkMode: 'auto',
      correctAnswer: '3(x+2)(x+3)',
      correctAnswers: ['3(x+2)(x+3)', '3(x + 2)(x + 3)', '3(x+3)(x+2)', '3(x + 3)(x + 2)'],
      explanation: 'Faktoriseer 3 uit: 3(x² + 5x + 6).\nVind twee getalle wat vermenigvuldig na 6 en optel na 5: 2 en 3.\nGefaktoriseer: 3(x + 2)(x + 3) ✓',
    },

    // ── Q11 Hard — full factorisation with common factor shown ────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 2x² − 8x − 10 volledig, en toon die gemeenskaplike-faktor-stap.',
      answer: 'Faktoriseer 2 uit: 2(x² − 4x − 5). Faktoriseer trinoom: 2(x − 5)(x + 1).',
      checkMode: 'self',
    },

    // ── Q12 Medium — difference of two squares (larger square) ───────────────
    {
      difficulty: 'Medium',
      question: 'Faktoriseer x² − 64.',
      answer: '(x − 8)(x + 8)',
      checkMode: 'auto',
      correctAnswer: '(x-8)(x+8)',
      correctAnswers: ['(x-8)(x+8)', '(x − 8)(x + 8)', '(x+8)(x-8)', '(x + 8)(x − 8)'],
      explanation: 'Herken x² − 64 = x² − 8².\nVerskil van kwadrate: (x − 8)(x + 8) ✓',
    },

    // ── Q13 Hard — addition cannot use difference of squares ──────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê x² + 16 kan met die verskil van twee kwadrate gefaktoriseer word. Is sy korrek? Verduidelik.',
      answer: 'Nee — die verskil van twee kwadrate vereis aftrekking (a² − b²), maar x² + 16 is ʼn optelling, so dit kan nie op hierdie manier gefaktoriseer word nie.',
      checkMode: 'self',
    },

    // ── Q14 Hard — combined common factor and difference of squares ───────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer 5x² − 20 volledig, en identifiseer beide die gemeenskaplike faktor en die verskil-van-kwadrate-patroon wat gebruik is.',
      answer: 'Faktoriseer 5 uit: 5(x² − 4). Herken verskil van kwadrate: 5(x − 2)(x + 2).',
      checkMode: 'self',
    },

    // ── Q15 Hard — factorise and verify by expanding ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Faktoriseer x² − 5x − 24 en verifieer jou antwoord deur dit weer uit te brei.',
      answer: 'Vind getalle wat vermenigvuldig na −24 en optel na −5: −8 en 3. Gefaktoriseer: (x − 8)(x + 3). Verifieer deur uit te brei: x² + 3x − 8x − 24 = x² − 5x − 24 ✓',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het faktorisering van algebraïese uitdrukkings bemeester.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van faktorisering. Gaan enige gemiste vrae weer deur en mik vir volpunte.' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
