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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn binoom met ʼn trinoom te vermenigvuldig deur distribusie te gebruik, kleurgekodeer met die eerste term blou en die tweede term oranje, en dan gelyksoortige terme groen saamgevoeg" />',

      diagramPlaceholder:
        'Distribusiediagram vir (x + 2)(x² + 3x − 5) wat ses pyle wys van elke binoomterm (x en +2) na elke trinoomterm (x², 3x, −5), kleurgekodeer blou vir x en oranje vir +2',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 205" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">(x + 2)(x² + 3x − 5)</text>` +
        `<rect x="45" y="24" width="50" height="30" rx="6" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="70" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">x</text>` +
        `<rect x="165" y="24" width="50" height="30" rx="6" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="190" y="44" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">+2</text>` +
        `<rect x="8" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="35" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">x²</text>` +
        `<rect x="100" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="127" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">3x</text>` +
        `<rect x="192" y="150" width="55" height="30" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="219" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">−5</text>` +
        `<line x1="70" y1="54" x2="35" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="70" y1="54" x2="127" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="70" y1="54" x2="219" y2="150" stroke="#2563eb" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="35" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="127" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="190" y1="54" x2="219" y2="150" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="130" y="196" text-anchor="middle" font-size="11" fill="#6b7280">Elke binoomterm vermenigvuldig elke trinoomterm — ses produkte</text>` +
        `</svg>`,
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
        '<VideoPlaceholder label="Kort video wat wys hoe om trinome te faktoriseer deur die som-produk-metode te gebruik vir a=1 en die a×c-metode vir a≠1, kleurgekodeer met die a×c-waarde oranje en gesplitste terme blou" />',

      diagramPlaceholder:
        'X-boks-diagram vir 3x² + 11x + 6 wat a×c = 18 bo, b = 11 onder, en die twee getalle 9 en 2 aan die kante wys, wat lei tot die splitsing en gefaktoriseerde vorm (3x + 2)(x + 3)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 230" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">3x² + 11x + 6</text>` +
        `<rect x="60" y="30" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="60" y1="30" x2="160" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="160" y1="30" x2="60" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="110" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a×c = 18</text>` +
        `<text x="110" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">b = 11</text>` +
        `<text x="80" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">9</text>` +
        `<text x="140" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="110" y="150" text-anchor="middle" font-size="11" fill="#6b7280">9 × 2 = 18 en 9 + 2 = 11</text>` +
        `<text x="110" y="172" text-anchor="middle" font-size="12" fill="#0f1f3d">Splits: 3x² + <tspan fill="#2563eb" font-weight="700">9x + 2x</tspan> + 6</text>` +
        `<text x="110" y="192" text-anchor="middle" font-size="12" fill="#0f1f3d">Groepeer: 3x(x + 3) + 2(x + 3)</text>` +
        `<text x="110" y="212" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">= (3x + 2)(x + 3)</text>` +
        `</svg>`,
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn vierterm-uitdrukking te faktoriseer deur in pare te groepeer, met die eerste paar kleurgekodeer rooi en die tweede paar pers, en die gemeenskaplike binoom groen" />',

      diagramPlaceholder:
        'Vloeidiagram vir x³ + 3x² − 4x − 12 wat die eerste paar rooi, tweede paar pers, hul gefaktoriseerde vorme, wat saamkom by die gemeenskaplike binoomfaktor, en die finale volledig gefaktoriseerde antwoord in groen wys',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 265" width="100%" style="max-width:360px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="55" y="6" width="170" height="28" rx="6" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="140" y="25" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">x³ + 3x² − 4x − 12</text>` +
        `<line x1="140" y1="34" x2="140" y2="48" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="48" x2="70" y2="62" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="48" x2="210" y2="62" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="62" width="100" height="26" rx="6" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="70" y="79" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">x³ + 3x²</text>` +
        `<rect x="160" y="62" width="100" height="26" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.5"/>` +
        `<text x="210" y="79" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">−4x − 12</text>` +
        `<line x1="70" y1="88" x2="70" y2="102" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="210" y1="88" x2="210" y2="102" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="102" width="100" height="26" rx="6" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="70" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">x²(x + 3)</text>` +
        `<rect x="160" y="102" width="100" height="26" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.5"/>` +
        `<text x="210" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">−4(x + 3)</text>` +
        `<line x1="70" y1="128" x2="140" y2="146" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="210" y1="128" x2="140" y2="146" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="70" y="146" width="140" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="140" y="165" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(x + 3)(x² − 4)</text>` +
        `<line x1="140" y1="174" x2="140" y2="192" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="140,200 135,191 145,191" fill="#0f1f3d"/>` +
        `<text x="150" y="188" font-size="9" font-style="italic" fill="#6b7280">x² − 4 = (x−2)(x+2)</text>` +
        `<rect x="55" y="206" width="170" height="28" rx="6" fill="rgba(22,163,74,0.1)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="140" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">(x + 3)(x − 2)(x + 2)</text>` +
        `<text x="140" y="250" text-anchor="middle" font-size="10" fill="#6b7280">Groepering in pare vind die gemeenskaplike binoomfaktor</text>` +
        `</svg>`,
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
        '<VideoPlaceholder label="Kort video wat wys hoe om algebraïese breuke met monoomnoemers te vereenvoudig, optel en aftrek deur die KGV te gebruik, kleurgekodeer oranje, met omgeskakelde breuke blou en die vereenvoudigde antwoord groen" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Brei binoom × trinoom uit
    // Blok 2 (3-5):   Faktoriseer trinoom (a = 1)
    // Blok 3 (6-9):   Faktoriseer trinoom (a ≠ 1) — a×c-metode
    // Blok 4 (10-12): Faktoriseer deur groepering in pare
    // Blok 5 (13-15): Vereenvoudig ʼn enkele algebraïese breuk (faktoriseer en kanselleer)
    // Blok 6 (16-19): Optel/aftrek van algebraïese breuke met KGV / multi-stap / foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Brei binoom × trinoom uit (Easy)
        { difficulty: 'Easy', question: 'Brei (x + 1)(x² + 2x + 3) uit.', checkMode: 'auto', correctAnswer: 'x³+3x²+5x+3', correctAnswers: ['x³+3x²+5x+3', 'x^3+3x^2+5x+3'], answer: 'x³ + 3x² + 5x + 3', explanation: 'Distribueer x: x³+2x²+3x. Distribueer +1: x²+2x+3. Voeg saam: x³+(2+1)x²+(3+2)x+3 = x³+3x²+5x+3.' },
        { difficulty: 'Easy', question: 'Brei (x + 4)(x² − 3x + 2) uit.', checkMode: 'auto', correctAnswer: 'x³+x²-10x+8', correctAnswers: ['x³+x²-10x+8', 'x³+x²−10x+8', 'x^3+x^2-10x+8', 'x^3+x^2−10x+8'], answer: 'x³ + x² − 10x + 8', explanation: 'Distribueer x: x³-3x²+2x. Distribueer +4: 4x²-12x+8. Voeg saam: x³+(-3+4)x²+(2-12)x+8 = x³+x²-10x+8.' },
        { difficulty: 'Medium', question: 'Brei (2x − 1)(x² + 3x − 4) uit.', checkMode: 'auto', correctAnswer: '2x³+5x²-11x+4', correctAnswers: ['2x³+5x²-11x+4', '2x³+5x²−11x+4', '2x^3+5x^2-11x+4', '2x^3+5x^2−11x+4'], answer: '2x³ + 5x² − 11x + 4', explanation: 'Distribueer 2x: 2x³+6x²-8x. Distribueer -1: -x²-3x+4. Voeg saam: 2x³+(6-1)x²+(-8-3)x+4 = 2x³+5x²-11x+4.' },

        // Blok 2 — Faktoriseer trinoom a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Faktoriseer x² + 9x + 20.', checkMode: 'auto', correctAnswer: '(x+4)(x+5)', correctAnswers: ['(x+4)(x+5)', '(x+5)(x+4)'], answer: '(x + 4)(x + 5)', explanation: 'Vind twee getalle wat vermenigvuldig na 20 en optel na 9: 4 en 5. Antwoord: (x+4)(x+5). Kontroleer: x²+5x+4x+20 = x²+9x+20 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 4x − 21.', checkMode: 'auto', correctAnswer: '(x-7)(x+3)', correctAnswers: ['(x-7)(x+3)', '(x+3)(x-7)'], answer: '(x − 7)(x + 3)', explanation: 'Vind twee getalle wat vermenigvuldig na -21 en optel na -4: -7 en 3. Antwoord: (x-7)(x+3). Kontroleer: x²+3x-7x-21 = x²-4x-21 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 13x + 40.', checkMode: 'auto', correctAnswer: '(x-8)(x-5)', correctAnswers: ['(x-8)(x-5)', '(x-5)(x-8)'], answer: '(x − 8)(x − 5)', explanation: 'Vind twee getalle wat vermenigvuldig na 40 en optel na -13: -8 en -5. Antwoord: (x-8)(x-5). Kontroleer: x²-5x-8x+40 = x²-13x+40 ✓' },

        // Blok 3 — Faktoriseer trinoom a ≠ 1, a×c-metode (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 2x² + 9x + 4.', checkMode: 'auto', correctAnswer: '(x+4)(2x+1)', correctAnswers: ['(x+4)(2x+1)', '(2x+1)(x+4)'], answer: '(2x + 1)(x + 4)', explanation: 'a×c = 2×4 = 8. Getalle wat vermenigvuldig na 8 en optel na 9: 8 en 1. Splits: 2x²+8x+x+4. Groepeer: 2x(x+4)+1(x+4) = (2x+1)(x+4).' },
        { difficulty: 'Medium', question: 'Faktoriseer 3x² − 5x − 2.', checkMode: 'auto', correctAnswer: '(x-2)(3x+1)', correctAnswers: ['(x-2)(3x+1)', '(3x+1)(x-2)'], answer: '(3x + 1)(x − 2)', explanation: 'a×c = 3×(-2) = -6. Getalle wat vermenigvuldig na -6 en optel na -5: -6 en 1. Splits: 3x²-6x+x-2. Groepeer: 3x(x-2)+1(x-2) = (3x+1)(x-2).' },
        { difficulty: 'Medium', question: 'Faktoriseer 4x² − 4x − 3.', checkMode: 'auto', correctAnswer: '(2x-3)(2x+1)', correctAnswers: ['(2x-3)(2x+1)', '(2x+1)(2x-3)'], answer: '(2x − 3)(2x + 1)', explanation: 'a×c = 4×(-3) = -12. Getalle wat vermenigvuldig na -12 en optel na -4: -6 en 2. Splits: 4x²-6x+2x-3. Groepeer: 2x(2x-3)+1(2x-3) = (2x-3)(2x+1).' },
        { difficulty: 'Hard', question: 'Faktoriseer 6x² + 7x − 3.', checkMode: 'auto', correctAnswer: '(2x+3)(3x-1)', correctAnswers: ['(2x+3)(3x-1)', '(3x-1)(2x+3)'], answer: '(2x + 3)(3x − 1)', explanation: 'a×c = 6×(-3) = -18. Getalle wat vermenigvuldig na -18 en optel na 7: 9 en -2. Splits: 6x²+9x-2x-3. Groepeer: 3x(2x+3)-1(2x+3) = (2x+3)(3x-1).' },

        // Blok 4 — Faktoriseer deur groepering in pare (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: 4x² + 12x + 3x + 9.', checkMode: 'auto', correctAnswer: '(x+3)(4x+3)', correctAnswers: ['(x+3)(4x+3)', '(4x+3)(x+3)'], answer: '(x + 3)(4x + 3)', explanation: 'Groepeer: (4x²+12x)+(3x+9). Faktoriseer elke paar: 4x(x+3)+3(x+3). Gemeenskaplike binoom: (x+3)(4x+3).' },
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: ax + 3a + bx + 3b.', checkMode: 'auto', correctAnswer: '(a+b)(x+3)', correctAnswers: ['(a+b)(x+3)', '(x+3)(a+b)'], answer: '(a + b)(x + 3)', explanation: 'Groepeer: (ax+3a)+(bx+3b). Faktoriseer elke paar: a(x+3)+b(x+3). Gemeenskaplike binoom: (a+b)(x+3).' },
        { difficulty: 'Hard', question: 'Faktoriseer x³ + 2x² − 9x − 18 volledig.', checkMode: 'auto', correctAnswer: '(x-3)(x+2)(x+3)', correctAnswers: ['(x-3)(x+2)(x+3)', '(x+2)(x-3)(x+3)', '(x+2)(x+3)(x-3)', '(x+3)(x+2)(x-3)', '(x+3)(x-3)(x+2)', '(x-3)(x+3)(x+2)'], answer: '(x − 3)(x + 3)(x + 2)', explanation: 'Groepeer: (x³+2x²)+(-9x-18). Faktoriseer: x²(x+2)-9(x+2). Gemeenskaplike binoom: (x+2)(x²-9). Herken x²-9 as ʼn verskil van kwadrate: (x-3)(x+3). Finaal: (x+2)(x-3)(x+3).' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (10x² + 15x) / 5x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x+3', correctAnswers: ['2x+3', '2x + 3'], answer: '2x + 3', explanation: 'Faktoriseer die teller: 10x²+15x = 5x(2x+3). Kanselleer die gemeenskaplike faktor 5x: 2x+3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (6x² − 9x) / 3x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Faktoriseer die teller: 6x²-9x = 3x(2x-3). Kanselleer die gemeenskaplike faktor 3x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x² + 7x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+7', correctAnswers: ['x+7', 'x + 7'], answer: 'x + 7', explanation: 'Faktoriseer die teller: x²+7x = x(x+7). Kanselleer die gemeenskaplike faktor x: x+7 (x ≠ 0).' },

        // Blok 6 — Optel/aftrek met KGV / multi-stap / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Bereken 3/x + 4/(2x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '5/x', correctAnswers: ['5/x'], answer: '5/x', explanation: 'Die KGV van x en 2x is 2x. Skakel om: 6/(2x)+4/(2x) = 10/(2x). Vereenvoudig: 10/(2x) = 5/x.' },
        { difficulty: 'Hard', question: 'Bereken 5/x² − 3/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(5-3x)/x²', correctAnswers: ['(5-3x)/x²', '(5−3x)/x²', '(5-3x)/x^2', '(5−3x)/x^2'], answer: '(5 − 3x)/x²', explanation: 'Die KGV van x² en x is x². 5/x² het reeds die KGV as noemer. Skakel om: 3/x = 3x/x². Kombineer: (5-3x)/x².' },
        { difficulty: 'Hard', question: 'Bereken 2/(3x) + 1/(4x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '11/(12x)', correctAnswers: ['11/(12x)', '11/12x'], answer: '11/(12x)', explanation: 'Die KGV van 3x en 4x is 12x. Skakel om: 8/(12x)+3/(12x) = 11/(12x).' },
        { difficulty: 'Hard', question: 'Vereenvoudig volledig: (x² − 9)/(x + 3) &nbsp;(x ≠ −3).', checkMode: 'auto', correctAnswer: 'x-3', correctAnswers: ['x-3', 'x − 3'], answer: 'x − 3', explanation: 'Herken x²-9 as ʼn verskil van kwadrate: x²-9 = (x-3)(x+3). Skryf die breuk as (x-3)(x+3)/(x+3) en kanselleer (x+3): x-3.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die uitbrei, faktorisering en vereenvoudiging van algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die a×c-metode of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor faktorisering en groepering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Brei binoom × trinoom uit (Easy)
        { difficulty: 'Easy', question: 'Brei (x + 2)(x² + x + 4) uit.', checkMode: 'auto', correctAnswer: 'x³+3x²+6x+8', correctAnswers: ['x³+3x²+6x+8', 'x^3+3x^2+6x+8'], answer: 'x³ + 3x² + 6x + 8', explanation: 'Distribueer x: x³+x²+4x. Distribueer +2: 2x²+2x+8. Voeg saam: x³+(1+2)x²+(4+2)x+8 = x³+3x²+6x+8.' },
        { difficulty: 'Easy', question: 'Brei (x + 5)(x² − 2x + 1) uit.', checkMode: 'auto', correctAnswer: 'x³+3x²-9x+5', correctAnswers: ['x³+3x²-9x+5', 'x³+3x²−9x+5', 'x^3+3x^2-9x+5', 'x^3+3x^2−9x+5'], answer: 'x³ + 3x² − 9x + 5', explanation: 'Distribueer x: x³-2x²+x. Distribueer +5: 5x²-10x+5. Voeg saam: x³+(-2+5)x²+(1-10)x+5 = x³+3x²-9x+5.' },
        { difficulty: 'Medium', question: 'Brei (3x − 2)(x² + x − 5) uit.', checkMode: 'auto', correctAnswer: '3x³+x²-17x+10', correctAnswers: ['3x³+x²-17x+10', '3x³+x²−17x+10', '3x^3+x^2-17x+10', '3x^3+x^2−17x+10'], answer: '3x³ + x² − 17x + 10', explanation: 'Distribueer 3x: 3x³+3x²-15x. Distribueer -2: -2x²-2x+10. Voeg saam: 3x³+(3-2)x²+(-15-2)x+10 = 3x³+x²-17x+10.' },

        // Blok 2 — Faktoriseer trinoom a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Faktoriseer x² + 10x + 21.', checkMode: 'auto', correctAnswer: '(x+3)(x+7)', correctAnswers: ['(x+3)(x+7)', '(x+7)(x+3)'], answer: '(x + 3)(x + 7)', explanation: 'Vind twee getalle wat vermenigvuldig na 21 en optel na 10: 3 en 7. Antwoord: (x+3)(x+7). Kontroleer: x²+7x+3x+21 = x²+10x+21 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 2x − 24.', checkMode: 'auto', correctAnswer: '(x-6)(x+4)', correctAnswers: ['(x-6)(x+4)', '(x+4)(x-6)'], answer: '(x − 6)(x + 4)', explanation: 'Vind twee getalle wat vermenigvuldig na -24 en optel na -2: -6 en 4. Antwoord: (x-6)(x+4). Kontroleer: x²+4x-6x-24 = x²-2x-24 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 12x + 35.', checkMode: 'auto', correctAnswer: '(x-7)(x-5)', correctAnswers: ['(x-7)(x-5)', '(x-5)(x-7)'], answer: '(x − 7)(x − 5)', explanation: 'Vind twee getalle wat vermenigvuldig na 35 en optel na -12: -7 en -5. Antwoord: (x-7)(x-5). Kontroleer: x²-5x-7x+35 = x²-12x+35 ✓' },

        // Blok 3 — Faktoriseer trinoom a ≠ 1, a×c-metode (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 2x² + 11x + 5.', checkMode: 'auto', correctAnswer: '(x+5)(2x+1)', correctAnswers: ['(x+5)(2x+1)', '(2x+1)(x+5)'], answer: '(2x + 1)(x + 5)', explanation: 'a×c = 2×5 = 10. Getalle wat vermenigvuldig na 10 en optel na 11: 10 en 1. Splits: 2x²+10x+x+5. Groepeer: 2x(x+5)+1(x+5) = (2x+1)(x+5).' },
        { difficulty: 'Medium', question: 'Faktoriseer 3x² + 2x − 8.', checkMode: 'auto', correctAnswer: '(x+2)(3x-4)', correctAnswers: ['(x+2)(3x-4)', '(3x-4)(x+2)'], answer: '(3x − 4)(x + 2)', explanation: 'a×c = 3×(-8) = -24. Getalle wat vermenigvuldig na -24 en optel na 2: 6 en -4. Splits: 3x²+6x-4x-8. Groepeer: 3x(x+2)-4(x+2) = (3x-4)(x+2).' },
        { difficulty: 'Medium', question: 'Faktoriseer 4x² + 4x − 3.', checkMode: 'auto', correctAnswer: '(2x-1)(2x+3)', correctAnswers: ['(2x-1)(2x+3)', '(2x+3)(2x-1)'], answer: '(2x − 1)(2x + 3)', explanation: 'a×c = 4×(-3) = -12. Getalle wat vermenigvuldig na -12 en optel na 4: 6 en -2. Splits: 4x²+6x-2x-3. Groepeer: 2x(2x+3)-1(2x+3) = (2x-1)(2x+3).' },
        { difficulty: 'Hard', question: 'Faktoriseer 6x² − 13x + 6.', checkMode: 'auto', correctAnswer: '(2x-3)(3x-2)', correctAnswers: ['(2x-3)(3x-2)', '(3x-2)(2x-3)'], answer: '(2x − 3)(3x − 2)', explanation: 'a×c = 6×6 = 36. Getalle wat vermenigvuldig na 36 en optel na -13: -9 en -4. Splits: 6x²-9x-4x+6. Groepeer: 3x(2x-3)-2(2x-3) = (2x-3)(3x-2).' },

        // Blok 4 — Faktoriseer deur groepering in pare (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: 3x² + 15x + 2x + 10.', checkMode: 'auto', correctAnswer: '(x+5)(3x+2)', correctAnswers: ['(x+5)(3x+2)', '(3x+2)(x+5)'], answer: '(x + 5)(3x + 2)', explanation: 'Groepeer: (3x²+15x)+(2x+10). Faktoriseer elke paar: 3x(x+5)+2(x+5). Gemeenskaplike binoom: (x+5)(3x+2).' },
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: 2ax − 2ay + bx − by.', checkMode: 'auto', correctAnswer: '(2a+b)(x-y)', correctAnswers: ['(2a+b)(x-y)', '(x-y)(2a+b)'], answer: '(2a + b)(x − y)', explanation: 'Groepeer: (2ax-2ay)+(bx-by). Faktoriseer elke paar: 2a(x-y)+b(x-y). Gemeenskaplike binoom: (2a+b)(x-y).' },
        { difficulty: 'Hard', question: 'Faktoriseer x³ + 5x² − 4x − 20 volledig.', checkMode: 'auto', correctAnswer: '(x-2)(x+2)(x+5)', correctAnswers: ['(x-2)(x+2)(x+5)', '(x+2)(x-2)(x+5)', '(x+2)(x+5)(x-2)', '(x+5)(x+2)(x-2)', '(x+5)(x-2)(x+2)', '(x-2)(x+5)(x+2)'], answer: '(x − 2)(x + 2)(x + 5)', explanation: 'Groepeer: (x³+5x²)+(-4x-20). Faktoriseer: x²(x+5)-4(x+5). Gemeenskaplike binoom: (x+5)(x²-4). Herken x²-4 as ʼn verskil van kwadrate: (x-2)(x+2). Finaal: (x+5)(x-2)(x+2).' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (12x² + 8x) / 4x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '3x+2', correctAnswers: ['3x+2', '3x + 2'], answer: '3x + 2', explanation: 'Faktoriseer die teller: 12x²+8x = 4x(3x+2). Kanselleer die gemeenskaplike faktor 4x: 3x+2 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (10x² − 15x) / 5x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Faktoriseer die teller: 10x²-15x = 5x(2x-3). Kanselleer die gemeenskaplike faktor 5x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x² + 9x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+9', correctAnswers: ['x+9', 'x + 9'], answer: 'x + 9', explanation: 'Faktoriseer die teller: x²+9x = x(x+9). Kanselleer die gemeenskaplike faktor x: x+9 (x ≠ 0).' },

        // Blok 6 — Optel/aftrek met KGV / multi-stap / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Bereken 5/x + 3/(2x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '13/(2x)', correctAnswers: ['13/(2x)', '13/2x'], answer: '13/(2x)', explanation: 'Die KGV van x en 2x is 2x. Skakel om: 10/(2x)+3/(2x) = 13/(2x).' },
        { difficulty: 'Hard', question: 'Bereken 7/x² − 2/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(7-2x)/x²', correctAnswers: ['(7-2x)/x²', '(7−2x)/x²', '(7-2x)/x^2', '(7−2x)/x^2'], answer: '(7 − 2x)/x²', explanation: 'Die KGV van x² en x is x². 7/x² het reeds die KGV as noemer. Skakel om: 2/x = 2x/x². Kombineer: (7-2x)/x².' },
        { difficulty: 'Hard', question: 'Bereken 3/(2x) + 1/(5x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '17/(10x)', correctAnswers: ['17/(10x)', '17/10x'], answer: '17/(10x)', explanation: 'Die KGV van 2x en 5x is 10x. Skakel om: 15/(10x)+2/(10x) = 17/(10x).' },
        { difficulty: 'Hard', question: 'Vereenvoudig volledig: (x² − 16)/(x + 4) &nbsp;(x ≠ −4).', checkMode: 'auto', correctAnswer: 'x-4', correctAnswers: ['x-4', 'x − 4'], answer: 'x − 4', explanation: 'Herken x²-16 as ʼn verskil van kwadrate: x²-16 = (x-4)(x+4). Skryf die breuk as (x-4)(x+4)/(x+4) en kanselleer (x+4): x-4.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die uitbrei, faktorisering en vereenvoudiging van algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die a×c-metode of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor faktorisering en groepering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Brei binoom × trinoom uit (Easy)
        { difficulty: 'Easy', question: 'Brei (x + 3)(x² + x + 2) uit.', checkMode: 'auto', correctAnswer: 'x³+4x²+5x+6', correctAnswers: ['x³+4x²+5x+6', 'x^3+4x^2+5x+6'], answer: 'x³ + 4x² + 5x + 6', explanation: 'Distribueer x: x³+x²+2x. Distribueer +3: 3x²+3x+6. Voeg saam: x³+(1+3)x²+(2+3)x+6 = x³+4x²+5x+6.' },
        { difficulty: 'Easy', question: 'Brei (x + 6)(x² − 4x + 3) uit.', checkMode: 'auto', correctAnswer: 'x³+2x²-21x+18', correctAnswers: ['x³+2x²-21x+18', 'x³+2x²−21x+18', 'x^3+2x^2-21x+18', 'x^3+2x^2−21x+18'], answer: 'x³ + 2x² − 21x + 18', explanation: 'Distribueer x: x³-4x²+3x. Distribueer +6: 6x²-24x+18. Voeg saam: x³+(-4+6)x²+(3-24)x+18 = x³+2x²-21x+18.' },
        { difficulty: 'Medium', question: 'Brei (2x + 3)(x² − 2x − 3) uit.', checkMode: 'auto', correctAnswer: '2x³-x²-12x-9', correctAnswers: ['2x³-x²-12x-9', '2x³−x²−12x−9', '2x^3-x^2-12x-9', '2x^3−x^2−12x−9'], answer: '2x³ − x² − 12x − 9', explanation: 'Distribueer 2x: 2x³-4x²-6x. Distribueer +3: 3x²-6x-9. Voeg saam: 2x³+(-4+3)x²+(-6-6)x-9 = 2x³-x²-12x-9.' },

        // Blok 2 — Faktoriseer trinoom a = 1 (Easy/Medium)
        { difficulty: 'Easy', question: 'Faktoriseer x² + 11x + 18.', checkMode: 'auto', correctAnswer: '(x+2)(x+9)', correctAnswers: ['(x+2)(x+9)', '(x+9)(x+2)'], answer: '(x + 2)(x + 9)', explanation: 'Vind twee getalle wat vermenigvuldig na 18 en optel na 11: 2 en 9. Antwoord: (x+2)(x+9). Kontroleer: x²+9x+2x+18 = x²+11x+18 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 5x − 14.', checkMode: 'auto', correctAnswer: '(x-7)(x+2)', correctAnswers: ['(x-7)(x+2)', '(x+2)(x-7)'], answer: '(x − 7)(x + 2)', explanation: 'Vind twee getalle wat vermenigvuldig na -14 en optel na -5: -7 en 2. Antwoord: (x-7)(x+2). Kontroleer: x²+2x-7x-14 = x²-5x-14 ✓' },
        { difficulty: 'Medium', question: 'Faktoriseer x² − 14x + 45.', checkMode: 'auto', correctAnswer: '(x-9)(x-5)', correctAnswers: ['(x-9)(x-5)', '(x-5)(x-9)'], answer: '(x − 9)(x − 5)', explanation: 'Vind twee getalle wat vermenigvuldig na 45 en optel na -14: -9 en -5. Antwoord: (x-9)(x-5). Kontroleer: x²-5x-9x+45 = x²-14x+45 ✓' },

        // Blok 3 — Faktoriseer trinoom a ≠ 1, a×c-metode (Medium)
        { difficulty: 'Medium', question: 'Faktoriseer 2x² + 7x + 3.', checkMode: 'auto', correctAnswer: '(x+3)(2x+1)', correctAnswers: ['(x+3)(2x+1)', '(2x+1)(x+3)'], answer: '(2x + 1)(x + 3)', explanation: 'a×c = 2×3 = 6. Getalle wat vermenigvuldig na 6 en optel na 7: 6 en 1. Splits: 2x²+6x+x+3. Groepeer: 2x(x+3)+1(x+3) = (2x+1)(x+3).' },
        { difficulty: 'Medium', question: 'Faktoriseer 3x² − 7x − 6.', checkMode: 'auto', correctAnswer: '(x-3)(3x+2)', correctAnswers: ['(x-3)(3x+2)', '(3x+2)(x-3)'], answer: '(3x + 2)(x − 3)', explanation: 'a×c = 3×(-6) = -18. Getalle wat vermenigvuldig na -18 en optel na -7: -9 en 2. Splits: 3x²-9x+2x-6. Groepeer: 3x(x-3)+2(x-3) = (3x+2)(x-3).' },
        { difficulty: 'Medium', question: 'Faktoriseer 4x² − 9x + 2.', checkMode: 'auto', correctAnswer: '(x-2)(4x-1)', correctAnswers: ['(x-2)(4x-1)', '(4x-1)(x-2)'], answer: '(x − 2)(4x − 1)', explanation: 'a×c = 4×2 = 8. Getalle wat vermenigvuldig na 8 en optel na -9: -8 en -1. Splits: 4x²-8x-x+2. Groepeer: 4x(x-2)-1(x-2) = (x-2)(4x-1).' },
        { difficulty: 'Hard', question: 'Faktoriseer 6x² + 5x − 6.', checkMode: 'auto', correctAnswer: '(2x+3)(3x-2)', correctAnswers: ['(2x+3)(3x-2)', '(3x-2)(2x+3)'], answer: '(2x + 3)(3x − 2)', explanation: 'a×c = 6×(-6) = -36. Getalle wat vermenigvuldig na -36 en optel na 5: 9 en -4. Splits: 6x²+9x-4x-6. Groepeer: 3x(2x+3)-2(2x+3) = (2x+3)(3x-2).' },

        // Blok 4 — Faktoriseer deur groepering in pare (Medium/Hard)
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: 2x² + 10x + 3x + 15.', checkMode: 'auto', correctAnswer: '(x+5)(2x+3)', correctAnswers: ['(x+5)(2x+3)', '(2x+3)(x+5)'], answer: '(x + 5)(2x + 3)', explanation: 'Groepeer: (2x²+10x)+(3x+15). Faktoriseer elke paar: 2x(x+5)+3(x+5). Gemeenskaplike binoom: (x+5)(2x+3).' },
        { difficulty: 'Medium', question: 'Faktoriseer deur groepering: 3px − 3py + qx − qy.', checkMode: 'auto', correctAnswer: '(3p+q)(x-y)', correctAnswers: ['(3p+q)(x-y)', '(x-y)(3p+q)'], answer: '(3p + q)(x − y)', explanation: 'Groepeer: (3px-3py)+(qx-qy). Faktoriseer elke paar: 3p(x-y)+q(x-y). Gemeenskaplike binoom: (3p+q)(x-y).' },
        { difficulty: 'Hard', question: 'Faktoriseer x³ − 3x² − 25x + 75 volledig.', checkMode: 'auto', correctAnswer: '(x-3)(x-5)(x+5)', correctAnswers: ['(x-3)(x-5)(x+5)', '(x-5)(x-3)(x+5)', '(x-5)(x+5)(x-3)', '(x+5)(x-5)(x-3)', '(x+5)(x-3)(x-5)', '(x-3)(x+5)(x-5)'], answer: '(x − 3)(x − 5)(x + 5)', explanation: 'Groepeer: (x³-3x²)+(-25x+75). Faktoriseer: x²(x-3)-25(x-3). Gemeenskaplike binoom: (x-3)(x²-25). Herken x²-25 as ʼn verskil van kwadrate: (x-5)(x+5). Finaal: (x-3)(x-5)(x+5).' },

        // Blok 5 — Vereenvoudig ʼn enkele algebraïese breuk (Hard)
        { difficulty: 'Hard', question: 'Vereenvoudig (14x² + 21x) / 7x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x+3', correctAnswers: ['2x+3', '2x + 3'], answer: '2x + 3', explanation: 'Faktoriseer die teller: 14x²+21x = 7x(2x+3). Kanselleer die gemeenskaplike faktor 7x: 2x+3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (8x² − 12x) / 4x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '2x-3', correctAnswers: ['2x-3', '2x − 3'], answer: '2x − 3', explanation: 'Faktoriseer die teller: 8x²-12x = 4x(2x-3). Kanselleer die gemeenskaplike faktor 4x: 2x-3 (x ≠ 0).' },
        { difficulty: 'Hard', question: 'Vereenvoudig (x² + 5x) / x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: 'x+5', correctAnswers: ['x+5', 'x + 5'], answer: 'x + 5', explanation: 'Faktoriseer die teller: x²+5x = x(x+5). Kanselleer die gemeenskaplike faktor x: x+5 (x ≠ 0).' },

        // Blok 6 — Optel/aftrek met KGV / multi-stap / foutopsporing (Hard)
        { difficulty: 'Hard', question: 'Bereken 4/x + 5/(2x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '13/(2x)', correctAnswers: ['13/(2x)', '13/2x'], answer: '13/(2x)', explanation: 'Die KGV van x en 2x is 2x. Skakel om: 8/(2x)+5/(2x) = 13/(2x).' },
        { difficulty: 'Hard', question: 'Bereken 3/x² − 2/x &nbsp;(x ≠ 0).', checkMode: 'auto', correctAnswer: '(3-2x)/x²', correctAnswers: ['(3-2x)/x²', '(3−2x)/x²', '(3-2x)/x^2', '(3−2x)/x^2'], answer: '(3 − 2x)/x²', explanation: 'Die KGV van x² en x is x². 3/x² het reeds die KGV as noemer. Skakel om: 2/x = 2x/x². Kombineer: (3-2x)/x².' },
        { difficulty: 'Hard', question: 'Bereken 5/(3x) + 1/(2x) &nbsp;(x ≠ 0), en vereenvoudig volledig.', checkMode: 'auto', correctAnswer: '13/(6x)', correctAnswers: ['13/(6x)', '13/6x'], answer: '13/(6x)', explanation: 'Die KGV van 3x en 2x is 6x. Skakel om: 10/(6x)+3/(6x) = 13/(6x).' },
        { difficulty: 'Hard', question: 'Vereenvoudig volledig: (x² − 25)/(x + 5) &nbsp;(x ≠ −5).', checkMode: 'auto', correctAnswer: 'x-5', correctAnswers: ['x-5', 'x − 5'], answer: 'x − 5', explanation: 'Herken x²-25 as ʼn verskil van kwadrate: x²-25 = (x-5)(x+5). Skryf die breuk as (x-5)(x+5)/(x+5) en kanselleer (x+5): x-5.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die uitbrei, faktorisering en vereenvoudiging van algebraïese uitdrukkings bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor die a×c-metode of algebraïese breuke na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor faktorisering en groepering weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
