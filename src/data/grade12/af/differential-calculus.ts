import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// indeterminate form   → red     (#dc2626)
// factorised form      → blue    (#2563eb)
// limit / derivative   → green   (#16a34a)
// simplified numerator → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Differensiaalrekening',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — AN INTUITIVE UNDERSTANDING OF LIMITS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'limits-intuitive',
      title: 'ʼn Intuïtiewe Begrip van Limiete',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Limiet</strong> beskryf die waarde waarnatoe ʼn funksie beweeg soos die invoer ʼn bepaalde waarde nader — selfs al is die funksie nie by daardie presiese punt gedefinieer nie. Ons skryf lim<sub>x→a</sub> f(x) = L om te beteken "soos x nader en nader aan <em>a</em> kom, kom f(x) nader en nader aan <em>L</em>". Limiete is die grondslag van differensiaalrekening, aangesien die afgeleide gedefinieer word as ʼn spesifieke limiet.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbepaalde vorm')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gefaktoriseerde vorm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('limietwaarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onbepaalde vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer direkte vervanging 0/0 gee, kan ons nie die antwoord direk aflees nie — ons moet eers vereenvoudig. Dit word ʼn <strong>onbepaalde vorm</strong> genoem.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Faktorisering om die limiet te vind</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Faktoriseer die teller, kanselleer die gemeenskaplike faktor wat die 0/0 veroorsaak, en vervang dan om die limiet te vind.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Limietwaarde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde L waarnatoe f(x) beweeg soos x → a. Die funksie hoef nie by x = a gedefinieer te wees vir die limiet om te bestaan nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Limietnotasie</p>` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">lim<sub>x→a</sub> f(x) = ${gr('L')}</p>` +
        `<p style="color:#6b7280;font-size:13px;margin-top:6px;margin-bottom:0;">"Soos x na a nader, nader f(x) na ${gr('L')}"</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Limiet gaan oor nadering, nie aankoms nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die limiet beskryf waarnatoe f(x) <em>op pad</em> is, nie noodwendig die waarde by x = a nie. ʼn Funksie kan ʼn limiet by ʼn punt hê waar dit ongedefinieerd is of ʼn gat in die grafiek het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken lim(x→2) van (x² − 4)/(x − 2).',
          answer: `lim<sub>x→2</sub> (x² − 4)/(x − 2) = ${gr('4')}`,
          steps: [
            `<strong>Direkte vervanging:</strong> Vervang x = 2: (2² − 4)/(2 − 2) = ${re('0/0')} — dit is ʼn ${re('onbepaalde vorm')}. Ons kan nie die antwoord direk aflees nie.`,
            `<strong>Faktoriseer die teller:</strong> x² − 4 = ${bl('(x − 2)(x + 2)')}. Die uitdrukking word ${bl('(x − 2)(x + 2)')} / (x − 2).`,
            `<strong>Kanselleer die gemeenskaplike faktor:</strong> Kanselleer (x − 2) uit die teller en noemer — die uitdrukking vereenvoudig na ${bl('x + 2')}.`,
            `<strong>Vervang x = 2:</strong> ${bl('x + 2')} = 2 + 2 = ${gr('4')}.`,
            `<strong>Antwoord:</strong> lim<sub>x→2</sub> (x² − 4)/(x − 2) = ${gr('4')} ✓`,
          ],
        },
        {
          question: 'Bereken lim(h→0) van [(x + h)² − x²] / h.',
          answer: `lim<sub>h→0</sub> [(x + h)² − x²] / h = ${gr('2x')}`,
          steps: [
            `<strong>Brei die teller uit:</strong> (x + h)² = x² + 2xh + h². Dus (x + h)² − x² = ${bl('2xh + h²')}.`,
            `<strong>Faktoriseer h uit die teller:</strong> ${bl('2xh + h²')} = ${bl('h(2x + h)')}. Die uitdrukking word ${bl('h(2x + h)')} / h.`,
            `<strong>Kanselleer h:</strong> ${bl('h(2x + h)')} / h = ${bl('2x + h')} (geldig aangesien h ≠ 0 wanneer die limiet bereken word).`,
            `<strong>Vervang h = 0:</strong> ${bl('2x + h')} → ${gr('2x')}.`,
            `<strong>Antwoord:</strong> lim<sub>h→0</sub> [(x + h)² − x²] / h = ${gr('2x')} ✓`,
          ],
        },
        {
          question: 'Sipho sê lim(x→3) van (x² − 9)/(x − 3) is ongedefinieerd aangesien die noemer 0 is by x = 3. Is hy korrek?',
          answer: `Nee — die limiet bestaan en is gelyk aan ${gr('6')}`,
          steps: [
            `<strong>Sipho se fout:</strong> Hy het "die funksie is ongedefinieerd by x = 3" verwar met "die limiet bestaan nie". ${re('Dit is nie dieselfde ding nie.')} ʼn Limiet kan bestaan selfs al is die funksie ongedefinieerd by daardie punt.`,
            `<strong>Faktoriseer die teller:</strong> x² − 9 = ${bl('(x − 3)(x + 3)')}. Die uitdrukking word ${bl('(x − 3)(x + 3)')} / (x − 3).`,
            `<strong>Kanselleer (x − 3):</strong> Die uitdrukking vereenvoudig na ${bl('x + 3')}.`,
            `<strong>Vervang x = 3:</strong> ${bl('x + 3')} = 3 + 3 = ${gr('6')}.`,
            `<strong>Gevolgtrekking:</strong> Sipho is <strong>verkeerd</strong>. lim<sub>x→3</sub> (x² − 9)/(x − 3) = ${gr('6')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — direct limit by factorising ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken lim(x→3) van (x² − 9)/(x − 3).',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Direkte vervanging gee (9−9)/(3−3) = 0/0 — onbepaalde vorm.\nFaktoriseer die teller: x²−9 = (x−3)(x+3). Kanselleer (x−3) om x+3 te kry.\nVervang x=3: 3+3 = 6 ✓',
        },

        // ── Q2 Medium — limit of a cubic difference quotient ──────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken lim(h→0) van [(x+h)³ − x³]/h.',
          answer: '3x²',
          checkMode: 'auto',
          correctAnswer: '3x²',
          correctAnswers: ['3x²', '3x^2'],
          explanation: 'Brei uit: (x+h)³ = x³+3x²h+3xh²+h³.\nTeller: (x³+3x²h+3xh²+h³)−x³ = h(3x²+3xh+h²).\nDeel deur h: 3x²+3xh+h².\nSoos h→0: 3x² ✓',
        },

        // ── Q3 Hard — conceptual error correction ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê lim(x→2) van (x−2)/(x²−4) is ongedefinieerd omdat die teller en noemer albei nul is by x=2. Is hy korrek? Verduidelik.',
          answer: 'Nee — faktoriseer die noemer: (x−2)(x+2). Kanselleer (x−2): 1/(x+2). Limiet soos x→2 = 1/4.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn limiet is, hoe om ʼn onbepaalde vorm te herken, en hoe om limiete deur faktorisering te bereken" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIFFERENTIATION FROM FIRST PRINCIPLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'first-principles',
      title: 'Differensiasie vanuit Eerste Beginsels',
      icon: "f'",
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>afgeleide</strong> van ʼn funksie f(x), geskryf f'(x) of dy/dx, meet die oombliklike koers van verandering van f by enige punt. Dit word gedefinieer met behulp van die <strong>eerste-beginsels-formule</strong>: f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h. Hierdie formule bereken die gradiënt van die raaklyn aan die kurwe by enige punt x deur die limiet van die gradiënt van ʼn snylyn te vind soos die twee punte oneindig na aan mekaar beweeg.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('f(x+h) vervanging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vereenvoudigde teller')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('limietresultaat')}</span>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Eerste-beginsels-formule</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">f'(x) = lim<sub>h→0</sub> [ ${bl('f(x+h)')} − f(x) ] / h</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eerste beginsels toepas: stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vervang f(x+h)')} — Vervang elke x in die funksie met (x + h) en brei uit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vereenvoudig die teller')} — Trek f(x) af, brei ten volle uit, en versamel gelyksoortige terme sodat alle h-vrye terme kanselleer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Deel deur h')} — Faktoriseer h uit die teller en kanselleer met die noemer. Dit verwyder die deling deur nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Neem die limiet')} — Vervang h = 0 in die vereenvoudigde uitdrukking. Die resultaat is f'(x).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Brei altyd ten volle uit voordat jy h kanselleer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die sleutelstap is om ${bl('f(x+h)')} ten volle uit te brei sodat alle h-vrye terme met f(x) kanselleer, en slegs terme met h in die teller oorbly. Probeer nooit om h te kanselleer voordat jy uitgebrei het nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die afgeleide van f(x) = x² vanuit eerste beginsels.',
          answer: `f'(x) = ${gr('2x')}`,
          steps: [
            `<strong>Skryf die formule:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Vervang ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('(x+h)²')} = ${bl('x² + 2xh + h²')}.`,
            `<strong>Trek f(x) af:</strong> ${bl('x² + 2xh + h²')} − x² = ${or('2xh + h²')}.`,
            `<strong>Deel deur h:</strong> ${or('(2xh + h²)')} / h = ${or('h(2x + h)')} / h = ${or('2x + h')}.`,
            `<strong>Neem die limiet (h → 0):</strong> ${or('2x + h')} → ${gr('2x')}.`,
            `<strong>Antwoord:</strong> f'(x) = ${gr('2x')} ✓`,
          ],
        },
        {
          question: 'Vind die afgeleide van f(x) = 3x + 5 vanuit eerste beginsels.',
          answer: `f'(x) = ${gr('3')}`,
          steps: [
            `<strong>Skryf die formule:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Vervang ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('3(x+h) + 5')} = ${bl('3x + 3h + 5')}.`,
            `<strong>Trek f(x) af:</strong> (${bl('3x + 3h + 5')}) − (3x + 5) = ${or('3h')}.`,
            `<strong>Deel deur h:</strong> ${or('3h')} / h = ${or('3')}.`,
            `<strong>Neem die limiet (h → 0):</strong> ${or('3')} → ${gr('3')} (konstant — geen h-terme bly oor nie).`,
            `<strong>Antwoord:</strong> f'(x) = ${gr('3')} ✓`,
          ],
        },
        {
          question: 'Vind die afgeleide van f(x) = x³ vanuit eerste beginsels.',
          answer: `f'(x) = ${gr('3x²')}`,
          steps: [
            `<strong>Skryf die formule:</strong> f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
            `<strong>Vervang ${bl('f(x+h)')}:</strong> ${bl('f(x+h)')} = ${bl('(x+h)³')}.`,
            `<strong>Brei ${bl('(x+h)³')} uit:</strong> ${bl('x³ + 3x²h + 3xh² + h³')}.`,
            `<strong>Trek f(x) af:</strong> (${bl('x³ + 3x²h + 3xh² + h³')}) − x³ = ${or('3x²h + 3xh² + h³')}.`,
            `<strong>Deel deur h:</strong> ${or('h(3x² + 3xh + h²)')} / h = ${or('3x² + 3xh + h²')}.`,
            `<strong>Neem die limiet (h → 0):</strong> ${or('3x² + 3xh + h²')} → ${gr('3x²')}.`,
            `<strong>Antwoord:</strong> f'(x) = ${gr('3x²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — derivative of x² from first principles ──────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die afgeleide van f(x) = x² vanuit eerste beginsels.',
          answer: "f'(x) = 2x",
          checkMode: 'auto',
          correctAnswer: '2x',
          correctAnswers: ['2x', "f'(x)=2x", "f'(x) = 2x"],
          explanation: "f'(x) = lim(h→0) [(x+h)²−x²]/h\n= lim(h→0) [x²+2xh+h²−x²]/h\n= lim(h→0) [2xh+h²]/h\n= lim(h→0) (2x+h)\n= 2x ✓",
        },

        // ── Q5 Medium — derivative of a linear function from first principles ──
        {
          difficulty: 'Medium',
          question: 'Vind die afgeleide van f(x) = 4x + 7 vanuit eerste beginsels.',
          answer: "f'(x) = 4",
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', "f'(x)=4", "f'(x) = 4"],
          explanation: "f'(x) = lim(h→0) [(4(x+h)+7)−(4x+7)]/h\n= lim(h→0) [4x+4h+7−4x−7]/h\n= lim(h→0) 4h/h\n= lim(h→0) 4\n= 4 ✓",
        },

        // ── Q6 Hard — derivative of a quadratic from first principles ─────────
        {
          difficulty: 'Hard',
          question: 'Vind die afgeleide van f(x) = x² + 3x vanuit eerste beginsels, en wys alle stappe.',
          answer: "f'(x) = lim(h→0) [(x+h)²+3(x+h)−x²−3x]/h = lim(h→0) [2xh+h²+3h]/h = lim(h→0) (2x+h+3) = 2x+3.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat differensiasie vanuit eerste beginsels vir f(x) = x² en f(x) = x³ stap vir stap demonstreer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — RULES OF DIFFERENTIATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'differentiation-rules',
      title: 'Reëls van Differensiasie',
      icon: 'd/dx',
      explanation:
        `<p style="margin-bottom:16px;">In plaas daarvan om altyd eerste beginsels te gebruik, pas ons die volgende reëls toe om polinome vinnig en doeltreffend te differensieer. <strong>Let wel:</strong> uitdrukkings moet uitgebrei of vereenvoudig word tot afsonderlike terme voordat jy differensieer.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('magsreël toegepas')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vereenvoudigde uitdrukking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('afgeleide')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier reëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;">Konstante reël</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (c) = 0</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die afgeleide van enige konstante is nul.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Magsreël</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (xⁿ) = nxⁿ⁻¹</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Vermenigvuldig met die eksponent, verminder dan die eksponent met 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Konstante-veelvoud-reël</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx (c·f(x)) = c·f'(x)</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Die konstante faktor bly onveranderd deurgaans.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Som-/verskilreël</p>` +
        `<p style="font-family:monospace;font-size:14px;color:#374151;margin-bottom:4px;">d/dx [f ± g] = f' ± g'</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Differensieer elke term afsonderlik en kombineer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Vereenvoudig voordat jy differensieer</p>` +
        `<p style="margin:0;color:#991b1b;">As die uitdrukking breuke of produkte bevat, brei dit uit of herskryf dit as ʼn som van individuele terme (met negatiewe eksponente waar nodig) voordat jy die reëls toepas. Jy kan nie die reëls term-vir-term op ʼn produk of breuk toepas sonder om eers te vereenvoudig nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Differensieer f(x) = 5x³ − 4x² + 7x − 3.',
          answer: `f'(x) = ${gr('15x² − 8x + 7')}`,
          steps: [
            `<strong>Pas die magsreël op elke term toe:</strong>`,
            `${bl('d/dx(5x³)')} = ${bl('5 · 3 · x²')} = 15x²`,
            `${bl('d/dx(−4x²)')} = ${bl('−4 · 2 · x')} = −8x`,
            `${bl('d/dx(7x)')} = ${bl('7 · 1')} = 7`,
            `${bl('d/dx(−3)')} = 0 (konstante reël)`,
            `<strong>Kombineer alle terme:</strong> f'(x) = ${gr('15x² − 8x + 7')} ✓`,
          ],
        },
        {
          question: 'Differensieer f(x) = (x² + 3) / x.',
          answer: `f'(x) = ${gr('1 − 3/x²')}`,
          steps: [
            `<strong>Vereenvoudig eers — deel elke term deur x:</strong>`,
            `(x² + 3) / x = x²/x + 3/x = ${or('x + 3x⁻¹')}`,
            `<strong>Pas die magsreël op elke term van ${or('x + 3x⁻¹')} toe:</strong>`,
            `${bl('d/dx(x)')} = 1`,
            `${bl('d/dx(3x⁻¹)')} = ${bl('3 · (−1) · x⁻²')} = −3x⁻²`,
            `<strong>Kombineer en herskryf:</strong> f'(x) = 1 − 3x⁻² = ${gr('1 − 3/x²')} ✓`,
          ],
        },
        {
          question: 'Differensieer f(x) = (2x − 1)(x + 3).',
          answer: `f'(x) = ${gr('4x + 5')}`,
          steps: [
            `<strong>Brei die produk eers uit:</strong>`,
            `(2x − 1)(x + 3) = 2x² + 6x − x − 3 = ${or('2x² + 5x − 3')}`,
            `<strong>Pas die magsreël op elke term van ${or('2x² + 5x − 3')} toe:</strong>`,
            `${bl('d/dx(2x²)')} = 4x`,
            `${bl('d/dx(5x)')} = 5`,
            `${bl('d/dx(−3)')} = 0`,
            `<strong>Kombineer:</strong> f'(x) = ${gr('4x + 5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — differentiate a polynomial using the rules ───────────────
        {
          difficulty: 'Easy',
          question: 'Differensieer f(x) = 6x⁴ − 3x² + 8x − 5.',
          answer: "f'(x) = 24x³ − 6x + 8",
          checkMode: 'auto',
          correctAnswer: '24x³-6x+8',
          correctAnswers: ['24x³-6x+8', '24x^3-6x+8', '24x³ − 6x + 8', '24x^3 - 6x + 8'],
          explanation: 'Pas die magsreël op elke term toe:\nd/dx(6x⁴) = 24x³\nd/dx(−3x²) = −6x\nd/dx(8x) = 8\nd/dx(−5) = 0\nf\'(x) = 24x³ − 6x + 8 ✓',
        },

        // ── Q8 Medium — differentiate a rational function by simplifying first ─
        {
          difficulty: 'Medium',
          question: 'Differensieer f(x) = (x² + 4)/x deur eers te vereenvoudig.',
          answer: "f'(x) = 1 − 4/x²",
          checkMode: 'auto',
          correctAnswer: '1-4/x²',
          correctAnswers: ['1-4/x²', '1-4/x^2', '1 − 4/x²', '1 - 4/x^2'],
          explanation: 'Vereenvoudig: (x²+4)/x = x + 4x⁻¹.\nDifferensieer: d/dx(x) = 1, d/dx(4x⁻¹) = −4x⁻².\nf\'(x) = 1 − 4x⁻² = 1 − 4/x² ✓',
        },

        // ── Q9 Hard — differentiate a squared binomial by expanding first ──────
        {
          difficulty: 'Hard',
          question: 'Differensieer f(x) = (3x − 2)², deur eers uit te brei.',
          answer: "Brei uit: 9x²−12x+4. f'(x) = 18x−12.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die konstante-, mag-, konstante-veelvoud- en som/verskil-reëls toe te pas om polinome en vereenvoudigde rasionale uitdrukkings te differensieer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — EQUATIONS OF TANGENTS TO CURVES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-equations',
      title: 'Vergelykings van Raaklyne aan Kurwes',
      icon: '∥',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>gradiënt van die raaklyn</strong> aan ʼn kurwe y = f(x) by ʼn spesifieke punt x = a word gegee deur f'(a) — die afgeleide geëvalueer by daardie punt. Ons gebruik dan die <strong>punt-gradiëntvorm</strong> van ʼn reguit lyn (y − y₁ = m(x − x₁)) om die vergelyking van die raaklyn te skryf, deur die gradiënt m = f'(a) en die punt (a, f(a)) te vervang.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('afgeleide (gradiënt)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('punt op die kurwe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('raaklynvergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die raaklynvergelyking vind: stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Differensieer f(x)')} om f'(x) te vind, vervang dan x = a om die gradiënt m = f'(a) te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vind die punt')} — as slegs x = a gegee is, bereken y₁ = f(a) om die punt (a, y₁) te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die raaklynvergelyking')} deur y − y₁ = m(x − x₁) te gebruik en vereenvoudig na die vorm y = mx + c.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Punt-gradiëntvorm</p>` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">y − y₁ = ${bl('m')}(x − x₁)&nbsp;&nbsp; waar &nbsp;&nbsp;${bl('m')} = ${bl("f'(a)")}&nbsp;&nbsp; en &nbsp;&nbsp;${or('(x₁, y₁)')} = ${or('(a, f(a))')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vind altyd eers die punt as slegs x gegee is</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn vraag slegs x = a gee, vervang dit terug in die oorspronklike funksie f(x) om die y-koördinaat te vind voordat jy die raaklynvergelyking skryf. Om hierdie stap oor te slaan is ʼn algemene fout.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die vergelyking van die raaklyn aan y = x² by die punt (3, 9).',
          answer: `${gr('y = 6x − 9')}`,
          steps: [
            `<strong>Vind die gradiënt:</strong> ${bl("f'(x)")} = ${bl('2x')}.`,
            `<strong>Evalueer by x = 3:</strong> ${bl("f'(3)")} = ${bl('2(3)')} = ${bl('6')}. Die gradiënt van die raaklyn is ${bl('m = 6')}.`,
            `<strong>Gebruik die gegewe punt</strong> ${or('(3, 9)')}${or('')}: y − y₁ = m(x − x₁) → y − ${or('9')} = ${bl('6')}(x − ${or('3')}).`,
            `<strong>Vereenvoudig:</strong> y = ${bl('6')}x − 18 + ${or('9')} = ${gr('6x − 9')}.`,
            `<strong>Antwoord:</strong> ${gr('y = 6x − 9')} ✓`,
          ],
        },
        {
          question: 'Vind die vergelyking van die raaklyn aan y = x³ − 2x by x = 1.',
          answer: `${gr('y = x − 2')}`,
          steps: [
            `<strong>Vind die y-koördinaat:</strong> f(1) = 1³ − 2(1) = 1 − 2 = ${or('−1')}. Punt: ${or('(1, −1)')}.`,
            `<strong>Differensieer:</strong> ${bl("f'(x)")} = ${bl('3x² − 2')}.`,
            `<strong>Evalueer by x = 1:</strong> ${bl("f'(1)")} = ${bl('3(1)² − 2')} = ${bl('1')}. Gradiënt: ${bl('m = 1')}.`,
            `<strong>Skryf die raaklynvergelyking:</strong> y − ${or('(−1)')} = ${bl('1')}(x − ${or('1')}) → y + 1 = x − 1.`,
            `<strong>Vereenvoudig:</strong> ${gr('y = x − 2')} ✓`,
          ],
        },
        {
          question: 'Lerato vind die vergelyking van die raaklyn aan y = 2x² + 3x − 1 by die punt waar x = 2.',
          answer: `${gr('y = 11x − 9')}`,
          steps: [
            `<strong>Vind die y-koördinaat:</strong> f(2) = 2(4) + 3(2) − 1 = 8 + 6 − 1 = ${or('13')}. Punt: ${or('(2, 13)')}.`,
            `<strong>Differensieer:</strong> ${bl("f'(x)")} = ${bl('4x + 3')}.`,
            `<strong>Evalueer by x = 2:</strong> ${bl("f'(2)")} = ${bl('4(2) + 3')} = ${bl('11')}. Gradiënt: ${bl('m = 11')}.`,
            `<strong>Skryf die raaklynvergelyking:</strong> y − ${or('13')} = ${bl('11')}(x − ${or('2')}) → y = ${bl('11')}x − 22 + ${or('13')}.`,
            `<strong>Vereenvoudig:</strong> ${gr('y = 11x − 9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium — tangent equation given a point ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vergelyking van die raaklyn aan y = x² + 1 by die punt (2, 5).',
          answer: 'y = 4x − 3',
          checkMode: 'auto',
          correctAnswer: 'y=4x-3',
          correctAnswers: ['y=4x-3', 'y = 4x - 3', 'y=4x−3', '4x-3'],
          explanation: "f'(x) = 2x. f'(2) = 4. Gradiënt m = 4.\nRaaklyn: y−5 = 4(x−2) → y = 4x−8+5 = 4x−3 ✓",
        },

        // ── Q11 Hard — tangent given only x-value ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die vergelyking van die raaklyn aan y = x³ − 4x by x = −1.',
          answer: "f(−1) = −1+4 = 3. Punt: (−1, 3). f'(x) = 3x²−4. f'(−1) = 3−4 = −1. Raaklyn: y−3 = −1(x+1). y = −x+2.",
          checkMode: 'self',
        },

        // ── Q12 Hard — conceptual: tangent at a turning point ─────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê die raaklyn aan ʼn kurwe by sy draaipunt is altyd horisontaal. Is sy korrek? Verduidelik.',
          answer: 'Ja — by ʼn draaipunt is die gradiënt van die kurwe nul, wat beteken die afgeleide is gelyk aan nul, wat beteken die raaklyn ʼn gradiënt van nul het en dus horisontaal is.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die vergelyking van ʼn raaklyn aan ʼn kurwe te vind deur gebruik te maak van differensiasie en die punt-gradiënt formule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — SKETCHING GRAPHS OF CUBIC FUNCTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cubic-sketching',
      title: 'Skets van Grafieke van Derdegraadse Funksies',
      icon: '∿',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn derdegraadse funksie y = f(x) te skets, vind ons stelselmatig: (1) <strong>x-afsnitte</strong> deur f(x) = 0 op te los met die Faktorstelling, (2) <strong>y-afsnit</strong> deur x = 0 te stel, (3) <strong>stilstandspunte (draaipunte)</strong> deur f'(x) = 0 op te los en elkeen te klassifiseer as ʼn plaaslike maksimum of minimum deur die teken van f'(x) aan weerskante te toets (of deur die tweede afgeleide te gebruik), en (4) die <strong>eindgedrag</strong> gebaseer op die teken van die leidende koëffisiënt.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-afsnitte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('stilstandspunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rigting van die kurwe')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Derdegraadse funksie skets: stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('x-afsnitte')} — Gebruik die Faktorstelling om ʼn wortel te vind, faktoriseer dan ten volle en los f(x) = 0 op.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>y-afsnit</strong> — Vervang x = 0 in f(x).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Stilstandspunte')} — Los f'(x) = 0 op. Toets f'(x) aan weerskante om as plaaslike maksimum of minimum te klassifiseer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Eindgedrag')} — Positiewe leidende koëffisiënt: styg na regs. Negatiewe leidende koëffisiënt: daal na regs.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tekentabel-kortpad om stilstandspunte te klassifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kies toetswaardes net links en regs van elke stilstandspunt en kyk of f'(x) positief (toenemend) of negatief (afnemend) is. ʼn Verandering van + na − is ʼn plaaslike maksimum; − na + is ʼn plaaslike minimum.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skets y = x³ − 3x².',
          answer: `Plaaslike maksimum by ${or('(0, 0)')}, plaaslike minimum by ${or('(2, −4)')}; ${bl('x-afsnitte')} by x = 0 en x = 3`,
          steps: [
            `<strong>y-afsnit:</strong> f(0) = 0. y-afsnit: (0, 0).`,
            `<strong>${bl('x-afsnitte')}:</strong> x³ − 3x² = ${bl('x²(x − 3)')} = 0. Dus ${bl('x = 0')} (herhaalde wortel) en ${bl('x = 3')}.`,
            `<strong>Differensieer:</strong> f'(x) = 3x² − 6x = ${or('3x(x − 2)')}.`,
            `<strong>${or('Stilstandspunte')}:</strong> f'(x) = 0 → ${or('x = 0')} en ${or('x = 2')}. f(0) = 0, f(2) = 8 − 12 = ${or('−4')}.`,
            `<strong>Klassifiseer met ʼn tekentabel:</strong> f'(−1) = 3(−1)(−3) = 9 > 0 (toenemend). f'(1) = 3(1)(−1) = −3 < 0 (afnemend). f'(3) = 3(3)(1) = 9 > 0 (toenemend). Dus is ${or('x = 0 ʼn plaaslike maksimum')} en ${or('x = 2 ʼn plaaslike minimum')}.`,
            `<strong>${gr('Eindgedrag')}:</strong> Die leidende koëffisiënt is positief (+1), dus die ${gr('kurwe styg na regs en daal na links')}.`,
            `<strong>Skets:</strong> Teken die afsnitte ${bl('(0,0)')} en ${bl('(3,0)')}, merk die stilstandspunte ${or('(0,0)')} (plaaslike maksimum) en ${or('(2,−4)')} (plaaslike minimum), teken dan die ${gr('S-vormige kurwe')} in ooreenstemming met die eindgedrag.`,
          ],
        },
        {
          question: 'Sipho moet y = −x³ + 3x skets.',
          answer: `Plaaslike maksimum by ${or('(1, 2)')}, plaaslike minimum by ${or('(−1, −2)')}; ${bl('x-afsnitte')} by x = 0, x = √3, x = −√3`,
          steps: [
            `<strong>y-afsnit:</strong> f(0) = 0. y-afsnit: (0, 0).`,
            `<strong>${bl('x-afsnitte')}:</strong> −x³ + 3x = ${bl('−x(x² − 3)')} = 0. Dus ${bl('x = 0')}, ${bl('x = √3')} ≈ 1,73, en ${bl('x = −√3')} ≈ −1,73.`,
            `<strong>Differensieer:</strong> f'(x) = −3x² + 3 = ${or('−3(x² − 1)')}.`,
            `<strong>${or('Stilstandspunte')}:</strong> f'(x) = 0 → x² = 1 → ${or('x = ±1')}. f(1) = −1 + 3 = ${or('2')}, f(−1) = 1 − 3 = ${or('−2')}.`,
            `<strong>Klassifiseer:</strong> f'(0) = 3 > 0, f'(2) = −9 < 0, dus ${or('x = 1 is ʼn plaaslike maksimum (2)')}. f'(−2) = −9 < 0, f'(0) = 3 > 0, dus ${or('x = −1 is ʼn plaaslike minimum (−2)')}.`,
            `<strong>${gr('Eindgedrag')}:</strong> Die leidende koëffisiënt is negatief (−1), dus die ${gr('kurwe daal na regs en styg na links')}.`,
            `<strong>Skets:</strong> Teken die ${bl('drie x-afsnitte')}, merk die ${or('stilstandspunte')} (1, 2) en (−1, −2), teken dan die ${gr('omgekeerde S-kurwe')} wat oor die algemeen van links na regs daal.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Hard — interpret increasing/decreasing from a diagram ──────────
        {
          difficulty: 'Hard',
          question: 'Die grafiek hieronder wys ʼn kubieke funksie f. Gebruik die diagram om die intervalle te beskryf waar die funksie toenemend is en waar dit afnemend is.',
          answer: 'Die funksie neem toe vir x < (plaaslike maksimum se x-waarde) en x > (plaaslike minimum se x-waarde), en neem af tussen die plaaslike maksimum en plaaslike minimum — verwys na die werklike draaipunt-x-waardes op die diagram vir presiese intervalle.',
          checkMode: 'self',
          diagramSvg: `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="8" y1="100" x2="230" y2="100" stroke="#94a3b8" stroke-width="1.5" /><polygon points="230,100 223,96 223,104" fill="#94a3b8" /><line x1="104" y1="192" x2="104" y2="20" stroke="#94a3b8" stroke-width="1.5" /><polygon points="104,20 100,27 108,27" fill="#94a3b8" /><path d="M20,179.3 L32,133.1 L44,100 L56,78.5 L68,66.7 L80,63.1 L92,65.7 L104,73 L116,83.2 L128,94.5 L140,105.2 L152,113.6 L164,118 L176,116.6 L188,107.8 L200,89.7 L212,60.7 L218,41.5" fill="none" stroke="#0f1f3d" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" /><circle cx="44" cy="100" r="3.5" fill="#2563eb" /><circle cx="134" cy="100" r="3.5" fill="#2563eb" /><circle cx="194" cy="100" r="3.5" fill="#2563eb" /><text x="44" y="114" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">-2</text><text x="134" y="114" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="194" y="114" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><circle cx="80" cy="63" r="3.5" fill="#ea580c" /><circle cx="168" cy="118" r="3.5" fill="#ea580c" /><text x="80" y="50" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">lokale maks</text><text x="168" y="134" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">lokale min</text><text x="50" y="155" font-size="16" font-weight="700" fill="#16a34a" text-anchor="middle">↗</text><text x="124" y="155" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">↘</text><text x="193" y="155" font-size="16" font-weight="700" fill="#16a34a" text-anchor="middle">↗</text><text x="234" y="104" font-size="11" fill="#64748b" text-anchor="end">x</text><text x="108" y="24" font-size="11" fill="#64748b" text-anchor="start">f(x)</text></svg>`,
        },

        // ── Q14 Hard — find and classify stationary points ────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die stilstandspunte van y = x³ − 6x² + 9x en klassifiseer elkeen as ʼn plaaslike maksimum of minimum.',
          answer: "f'(x) = 3x²−12x+9 = 3(x²−4x+3) = 3(x−1)(x−3) = 0. x=1 of x=3. f(1) = 1−6+9 = 4 (plaaslike maksimum). f(3) = 27−54+27 = 0 (plaaslike minimum).",
          checkMode: 'self',
        },

        // ── Q15 Hard — sketch a cubic showing intercepts and stationary points ─
        {
          difficulty: 'Hard',
          question: 'Skets y = x³ − 6x² + 9x, en toon die afsnitte en stilstandspunte.',
          answer: 'y-afsnit: 0. x-afsnitte: x(x²−6x+9) = x(x−3)² = 0, dus x=0 of x=3 (herhaal). Stilstandspunte vanaf Vraag 14: (1, 4) plaaslike maksimum, (3, 0) plaaslike minimum (raak die x-as). Positiewe leidende koëffisiënt.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om afsnitte en stilstandspunte te vind en ʼn kubieke funksie stap vir stap te skets" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — OPTIMISATION AND RATES OF CHANGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'optimisation',
      title: 'Optimering en Koerse van Verandering',
      icon: '★',
      explanation:
        `<p style="margin-bottom:16px;">Wiskundige analise word gebruik om werklike-lewe <strong>optimeringsprobleme</strong> op te los — om die maksimum of minimum waarde van ʼn hoeveelheid (soos oppervlakte, volume, wins of koste) te vind, onderworpe aan beperkings. Die metode is: skryf ʼn vergelyking vir die hoeveelheid wat geoptimeer moet word in terme van een veranderlike, differensieer en stel gelyk aan nul om die stilstandspunt te vind, verifieer dan of dit ʼn maksimum of minimum is, en beantwoord die vraag in konteks.</p>` +
        `<p style="margin-bottom:16px;"><strong>Koers-van-verandering</strong>-probleme gebruik die afgeleide om te bepaal hoe vinnig een hoeveelheid verander relatief tot ʼn ander, insluitend die gemiddelde koers van verandering (gradiënt van ʼn snylyn) en die oombliklike koers van verandering (gradiënt van ʼn raaklyn).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('beperkingsvergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geoptimeerde funksie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kritieke punt (maks/min)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Optimeringsmetode: stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer die beperking')} — Skryf die beperkingsvergelyking wat jou veranderlikes verbind, en gebruik dit om een veranderlike in terme van die ander uit te druk.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skryf die doelfunksie')} — Druk die hoeveelheid wat gemaksimeer of geminimeer moet word uit in terme van slegs een veranderlike.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Differensieer, stel gelyk aan nul')} — Los op vir die ${gr('kritieke punt')}, verifieer of dit ʼn maksimum of minimum is, en beantwoord dan in konteks.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Beantwoord altyd in konteks</p>` +
        `<p style="margin:0;color:#991b1b;">ʼn Optimeringsantwoord is nie volledig totdat jy verduidelik wat die maksimum of minimum waarde beteken in die werklike-lewe konteks van die probleem nie, insluitend eenhede. Moenie by die kritieke x-waarde stop nie — vervang terug om die werklike geoptimeerde hoeveelheid te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Boer het 40 m heining en wil ʼn reghoekige tuin teen ʼn muur toemaak (een kant het geen heining nodig nie). Vind die dimensies wat die oppervlakte maksimeer.',
          answer: `Dimensies: ${gr('10 m × 20 m')}, maksimum oppervlakte = ${gr('200 m²')}`,
          steps: [
            `<strong>${bl('Beperking')}:</strong> Slegs drie kante het heining nodig. Laat die twee loodregte kante elk lengte x hê. Dan het die parallelle kant (teenoor die muur) lengte ${bl('40 − 2x')}.`,
            `<strong>${or('Doelfunksie')}:</strong> Oppervlakte A = x(${bl('40 − 2x')}) = ${or('40x − 2x²')}.`,
            `<strong>Differensieer:</strong> dA/dx = 40 − 4x.`,
            `<strong>${gr('Kritieke punt')}:</strong> Stel dA/dx = 0 → 40 − 4x = 0 → ${gr('x = 10')}.`,
            `<strong>Maksimum oppervlakte:</strong> A = 10(40 − 20) = ${gr('200 m²')}.`,
            `<strong>Antwoord:</strong> Dimensies is ${gr('10 m by 20 m')}, wat ʼn maksimum oppervlakte van ${gr('200 m²')} gee ✓`,
          ],
        },
        {
          question: 'Die hoogte van ʼn bal (in meter) na t sekondes word gegee deur h(t) = −5t² + 20t + 2. Vind die maksimum hoogte en wanneer dit voorkom.',
          answer: `Maksimum hoogte = ${gr('22 m')} by t = ${gr('2 sekondes')}`,
          steps: [
            `<strong>${or('Doelfunksie')}:</strong> h(t) = ${or('−5t² + 20t + 2')}.`,
            `<strong>Differensieer:</strong> h'(t) = −10t + 20.`,
            `<strong>${gr('Kritieke punt')}:</strong> Stel h'(t) = 0 → −10t + 20 = 0 → ${gr('t = 2 sekondes')}.`,
            `<strong>Verifieer maksimum:</strong> h''(t) = −10 < 0, wat ʼn maksimum bevestig.`,
            `<strong>Maksimum hoogte:</strong> h(2) = −5(4) + 20(2) + 2 = −20 + 40 + 2 = ${gr('22 m')}.`,
            `<strong>Antwoord:</strong> Die bal bereik ʼn maksimum hoogte van ${gr('22 m')} by ${gr('t = 2 sekondes')} ✓`,
          ],
        },
        {
          question: 'ʼn Silindriese blik moet ʼn volume van 500 cm³ hê. Vind die radius wat die totale oppervlakte minimeer.',
          answer: `Optimale radius ≈ ${gr('4,30 cm')}`,
          steps: [
            `<strong>${bl('Beperking')}:</strong> Volume V = πr²h = ${bl('500')}, dus h = ${bl('500 / (πr²)')}.`,
            `<strong>${or('Doelfunksie')}:</strong> Oppervlakte S = 2πr² + 2πrh = 2πr² + 2πr · ${bl('500/(πr²)')} = ${or('2πr² + 1000/r')}.`,
            `<strong>Differensieer:</strong> dS/dr = 4πr − 1000/r².`,
            `<strong>${gr('Kritieke punt')}:</strong> Stel dS/dr = 0 → 4πr = 1000/r² → 4πr³ = 1000 → r³ = 1000/(4π) ≈ 79,58 → ${gr('r ≈ 4,30 cm')}.`,
            `<strong>Verifieer minimum:</strong> Die tweede afgeleide d²S/dr² = 4π + 2000/r³ > 0, wat ʼn minimum bevestig.`,
            `<strong>Antwoord:</strong> Die radius wat die oppervlakte minimeer is ${gr('r ≈ 4,30 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q16 Hard — fencing optimisation ───────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Boer het 60 m heining om ʼn reghoekige area teen ʼn reguit muur toe te maak. Vind die dimensies en maksimum oppervlakte.',
          answer: 'Laat die loodregte kant = x. Parallelle kant = 60−2x. A = x(60−2x) = 60x−2x². dA/dx = 60−4x = 0. x = 15. Maksimum oppervlakte = 15×30 = 450 m².',
          checkMode: 'self',
        },

        // ── Q17 Hard — rocket height: max value and time ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Die hoogte van ʼn vuurpyl na t sekondes is h(t) = −4t² + 24t + 10. Vind die maksimum hoogte en die tyd wat dit neem om dit te bereik.',
          answer: 'Maksimum hoogte by t = 3 sekondes, h = 46 m.',
          checkMode: 'self',
        },

        // ── Q18 Hard — open box optimisation ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle wil ʼn oop boks maak van ʼn 20 cm by 20 cm stuk karton deur gelyke vierkante uit elke hoek te sny en die kante op te vou. Vind die grootte van die vierkant wat gesny moet word om die volume te maksimeer.',
          answer: 'Laat die snygrootte = x. Volume = x(20−2x)² = x(400−80x+4x²) = 400x−80x²+4x³. dV/dx = 400−160x+12x² = 0. Deel deur 4: 3x²−40x+100 = 0. x = (40±√(1600−1200))/6 = (40±20)/6. x = 10/3 ≈ 3,33 cm of x = 10 (verwerp aangesien 2x = 20 geen basis laat nie). x ≈ 3,33 cm.',
          checkMode: 'self',
        },

        // ── Q19 Hard — conceptual: when does max occur? ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die maksimum van ʼn funksie kom altyd voor waar die afgeleide gelyk is aan nul. Is hy korrek? Verduidelik.',
          answer: 'Nie altyd nie — die afgeleide is gelyk aan nul by stilstandspunte, maar hierdie kan plaaslike maksima, plaaslike minima, of buigpunte wees; ook kan globale maksima op ʼn geslote interval by die eindpunte voorkom, waar die afgeleide nie nul hoef te wees nie.',
          checkMode: 'self',
        },

        // ── Q20 Hard — average vs instantaneous rate of change ────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die gemiddelde koers van verandering van f(x) = x³ tussen x = 1 en x = 3, en vergelyk dit met die oombliklike koers van verandering by x = 2.',
          answer: 'Gemiddelde koers = (f(3)−f(1))/(3−1) = (27−1)/2 = 13. Oombliklik: f\'(x) = 3x². f\'(2) = 12. Die gemiddelde koers (13) is effens hoër as die oombliklike koers by die middelpunt (12).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat optimering met behulp van differensiaalrekene demonstreer — die heiningprobleem en die vallende voorwerp word stap vir stap uitgewerk" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-2 Eerste beginsels (Maklik) | 3-6 Magsreël-differensiasie (Maklik-Medium) |
    // 7-10 Vergelyking van 'n raaklyn (Medium) | 11-13 Stilstandspunte (Medium-Moeilik) |
    // 14-16 Identifisering van kurwe-skets-kenmerke (Moeilik) | 17-19 Optimeringswoordprobleme (Moeilik)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = x² vanuit eerste beginsels.", answer: "f'(x) = 2x", checkMode: 'auto', correctAnswer: '2x', correctAnswers: ['2x', "f'(x)=2x", "f'(x) = 2x"], explanation: "f'(x) = lim(h→0) [(x+h)²−x²]/h = lim(h→0) [2xh+h²]/h = lim(h→0) (2x+h) = 2x ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = 5x + 2 vanuit eerste beginsels.", answer: "f'(x) = 5", checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', "f'(x)=5", "f'(x) = 5"], explanation: "f'(x) = lim(h→0) [(5(x+h)+2)−(5x+2)]/h = lim(h→0) 5h/h = lim(h→0) 5 = 5 ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = x² − 4x vanuit eerste beginsels.", answer: "f'(x) = 2x − 4", checkMode: 'auto', correctAnswer: '2x-4', correctAnswers: ['2x-4', '2x − 4', "f'(x)=2x-4"], explanation: "f(x+h) = (x+h)²−4(x+h) = x²+2xh+h²−4x−4h. Trek f(x) af: 2xh+h²−4h. Deel deur h: 2x+h−4. Soos h→0: 2x−4 ✓" },

        { difficulty: 'Easy', question: 'Differensieer f(x) = 4x³ − 2x² + 6x − 5.', answer: "f'(x) = 12x² − 4x + 6", checkMode: 'auto', correctAnswer: '12x²-4x+6', correctAnswers: ['12x²-4x+6', '12x^2-4x+6', '12x² − 4x + 6', '12x^2 - 4x + 6'], explanation: 'Pas die magsreël op elke term toe: d/dx(4x³)=12x², d/dx(−2x²)=−4x, d/dx(6x)=6, d/dx(−5)=0. f\'(x)=12x²−4x+6 ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (x² + 5)/x deur eers te vereenvoudig.', answer: "f'(x) = 1 − 5/x²", checkMode: 'auto', correctAnswer: '1-5/x²', correctAnswers: ['1-5/x²', '1-5/x^2', '1 − 5/x²', '1 - 5/x^2'], explanation: 'Vereenvoudig: (x²+5)/x = x+5x⁻¹. Differensieer: d/dx(x)=1, d/dx(5x⁻¹)=−5x⁻². f\'(x)=1−5x⁻²=1−5/x² ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (2x + 1)(x − 4).', answer: "f'(x) = 4x − 7", checkMode: 'auto', correctAnswer: '4x-7', correctAnswers: ['4x-7', '4x − 7'], explanation: 'Brei eers uit: (2x+1)(x−4) = 2x²−8x+x−4 = 2x²−7x−4. Differensieer: f\'(x)=4x−7 ✓' },
        { difficulty: 'Medium', question: 'Differensieer f(x) = (4x − 3)², deur eers uit te brei.', answer: "f'(x) = 32x − 24", checkMode: 'auto', correctAnswer: '32x-24', correctAnswers: ['32x-24', '32x − 24'], explanation: 'Brei uit: (4x−3)² = 16x²−24x+9. Differensieer: f\'(x) = 32x−24 ✓' },

        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x² by die punt (2, 4).', answer: 'y = 4x − 4', checkMode: 'auto', correctAnswer: 'y=4x-4', correctAnswers: ['y=4x-4', 'y = 4x - 4', 'y=4x−4', '4x-4'], explanation: "f'(x)=2x. f'(2)=4. Gradiënt m=4. Raaklyn: y−4=4(x−2) → y=4x−8+4=4x−4 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ − 3x by x = 2.', answer: 'y = 9x − 16', checkMode: 'auto', correctAnswer: 'y=9x-16', correctAnswers: ['y=9x-16', 'y = 9x - 16', 'y=9x−16'], explanation: "f(2)=8−6=2. Punt (2,2). f'(x)=3x²−3. f'(2)=12−3=9. Raaklyn: y−2=9(x−2) → y=9x−18+2=9x−16 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = 2x² − 5x + 1 by die punt waar x = 1.', answer: 'y = −x − 1', checkMode: 'auto', correctAnswer: 'y=-x-1', correctAnswers: ['y=-x-1', 'y = -x - 1', 'y=−x−1'], explanation: "f(1)=2−5+1=−2. Punt (1,−2). f'(x)=4x−5. f'(1)=4−5=−1. Raaklyn: y−(−2)=−1(x−1) → y=−x+1−2=−x−1 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ + 2x by x = −1.', answer: 'y = 5x + 2', checkMode: 'auto', correctAnswer: 'y=5x+2', correctAnswers: ['y=5x+2', 'y = 5x + 2'], explanation: "f(−1)=−1−2=−3. Punt (−1,−3). f'(x)=3x²+2. f'(−1)=3+2=5. Raaklyn: y−(−3)=5(x+1) → y=5x+5−3=5x+2 ✓" },

        { difficulty: 'Medium-Hard', question: 'Vind die stilstandspunte van y = 2x³ − 3x² − 12x en klassifiseer elkeen as ʼn plaaslike maksimum of minimum.', answer: 'Plaaslike maksimum by (−1, 7), plaaslike minimum by (2, −20)', checkMode: 'self', explanation: "f'(x)=6x²−6x−12=6(x²−x−2)=6(x−2)(x+1)=0. x=2 of x=−1. f(−1)=−2−3+12=7 (plaaslike maksimum). f(2)=16−12−24=−20 (plaaslike minimum)." },
        { difficulty: 'Medium-Hard', question: 'Sipho sê elke stilstandspunt van ʼn derdegraadse funksie moet óf ʼn plaaslike maksimum óf ʼn plaaslike minimum wees. Is hy korrek? Verduidelik.', answer: 'Nie noodwendig nie — ʼn derdegraadse funksie kan ook ʼn stilstands-buigpunt hê, waar f\'(x) = 0 maar die teken van f\'(x) verander nie aan weerskante nie, sodat die punt nóg ʼn maksimum nóg ʼn minimum is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die x-waardes van die stilstandspunte van y = x³ − 3x² en gebruik ʼn tekentabel vir f\'(x) om elkeen as ʼn plaaslike maksimum of minimum te klassifiseer.', answer: 'x = 0 (plaaslike maksimum), x = 2 (plaaslike minimum)', checkMode: 'self', explanation: "f'(x)=3x²−6x=3x(x−2)=0. x=0 of x=2. f'(−1)=9>0, f'(1)=−3<0, dus is x=0 ʼn plaaslike maksimum. f'(3)=9>0, dus is x=2 ʼn plaaslike minimum." },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het stilstandspunte by x = −1 en x = 3, ʼn y-afsnit van 2, en ʼn positiewe leidende koëffisiënt. Sê of die funksie toenemend of afnemend is op die interval −1 < x < 3, en beskryf die eindgedrag van die grafiek.', answer: 'Die funksie is afnemend op −1 < x < 3 (tussen ʼn plaaslike maksimum by x=−1 en ʼn plaaslike minimum by x=3). Aangesien die leidende koëffisiënt positief is, styg die grafiek na regs en daal dit na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het x-afsnitte by x = −2, x = 1 en x = 4, en ʼn negatiewe leidende koëffisiënt. Sê wat die teken van f(x) is vir x < −2, en beskryf die eindgedrag van die grafiek.', answer: 'Vir x < −2 is f(x) positief (die grafiek is bo die x-as voor die eerste wortel, aangesien die grafiek na links styg met ʼn negatiewe leidende koëffisiënt). Die grafiek daal na regs en styg na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het ʼn plaaslike maksimum by (−2, 10) en ʼn plaaslike minimum by (1, −5), met geen ander stilstandspunte nie. Sê op watter interval(le) f(x) toenemend is.', answer: 'f(x) is toenemend vir x < −2 en vir x > 1 (oral behalwe tussen die plaaslike maksimum en plaaslike minimum, waar dit afnemend is).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'ʼn Boer het 80 m heining om ʼn reghoekige area teen ʼn reguit muur toe te maak (geen heining is nodig teen die muur nie). Vind die dimensies wat die oppervlakte maksimeer, en gee die maksimum oppervlakte.', answer: 'Dimensies: 20 m by 40 m, maksimum oppervlakte = 800 m²', checkMode: 'self', explanation: 'Laat die twee loodregte kante elk lengte x hê. Parallelle kant = 80−2x. A = x(80−2x) = 80x−2x². dA/dx = 80−4x = 0. x = 20. Parallelle kant = 40. Maksimum oppervlakte = 20×40 = 800 m².' },
        { difficulty: 'Hard', question: 'Die hoogte van ʼn bal bo die grond (in meter) na t sekondes is h(t) = −5t² + 30t + 3. Vind die maksimum hoogte wat bereik word en die tyd waarop dit voorkom.', answer: 'Maksimum hoogte = 48 m by t = 3 sekondes', checkMode: 'self', explanation: "h'(t)=−10t+30=0. t=3. h(3)=−45+90+3=48 m." },
        { difficulty: 'Hard', question: 'Thabo wil ʼn oop boks maak van ʼn 24 cm by 24 cm stuk karton deur gelyke vierkante uit elke hoek te sny en die kante op te vou. Vind die grootte van die vierkant wat gesny moet word om die volume van die boks te maksimeer, en gee die maksimum volume.', answer: 'Vierkantgrootte = 4 cm, maksimum volume = 1024 cm³', checkMode: 'self', explanation: 'Laat die snygrootte = x. Volume V = x(24−2x)² = 4x³−96x²+576x. dV/dx = 12x²−192x+576 = 0. Deel deur 12: x²−16x+48=0. (x−4)(x−12)=0. x=4 of x=12 (verwerp, want die kant sal 0 wees). V(4) = 4(16)² = 4×256 = 1024 cm³.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het differensiaalrekening bemeester — eerste beginsels, differensiasiereëls, raaklyne, kurweskets en optimering.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die gids weer en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegging as Stel 1, vars getalle
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = 3x² vanuit eerste beginsels.", answer: "f'(x) = 6x", checkMode: 'auto', correctAnswer: '6x', correctAnswers: ['6x', "f'(x)=6x", "f'(x) = 6x"], explanation: "f'(x) = lim(h→0) [3(x+h)²−3x²]/h = lim(h→0) [6xh+3h²]/h = lim(h→0) (6x+3h) = 6x ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = 2x − 7 vanuit eerste beginsels.", answer: "f'(x) = 2", checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', "f'(x)=2", "f'(x) = 2"], explanation: "f'(x) = lim(h→0) [(2(x+h)−7)−(2x−7)]/h = lim(h→0) 2h/h = lim(h→0) 2 = 2 ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = x² + 2x vanuit eerste beginsels.", answer: "f'(x) = 2x + 2", checkMode: 'auto', correctAnswer: '2x+2', correctAnswers: ['2x+2', '2x + 2', "f'(x)=2x+2"], explanation: "f(x+h) = (x+h)²+2(x+h) = x²+2xh+h²+2x+2h. Trek f(x) af: 2xh+h²+2h. Deel deur h: 2x+h+2. Soos h→0: 2x+2 ✓" },

        { difficulty: 'Easy', question: 'Differensieer f(x) = 3x³ − 5x² + 4x − 2.', answer: "f'(x) = 9x² − 10x + 4", checkMode: 'auto', correctAnswer: '9x²-10x+4', correctAnswers: ['9x²-10x+4', '9x^2-10x+4', '9x² − 10x + 4', '9x^2 - 10x + 4'], explanation: 'Pas die magsreël op elke term toe: d/dx(3x³)=9x², d/dx(−5x²)=−10x, d/dx(4x)=4, d/dx(−2)=0. f\'(x)=9x²−10x+4 ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (x² + 7)/x deur eers te vereenvoudig.', answer: "f'(x) = 1 − 7/x²", checkMode: 'auto', correctAnswer: '1-7/x²', correctAnswers: ['1-7/x²', '1-7/x^2', '1 − 7/x²', '1 - 7/x^2'], explanation: 'Vereenvoudig: (x²+7)/x = x+7x⁻¹. Differensieer: d/dx(x)=1, d/dx(7x⁻¹)=−7x⁻². f\'(x)=1−7x⁻²=1−7/x² ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (3x − 2)(x + 5).', answer: "f'(x) = 6x + 13", checkMode: 'auto', correctAnswer: '6x+13', correctAnswers: ['6x+13', '6x + 13'], explanation: 'Brei eers uit: (3x−2)(x+5) = 3x²+15x−2x−10 = 3x²+13x−10. Differensieer: f\'(x)=6x+13 ✓' },
        { difficulty: 'Medium', question: 'Differensieer f(x) = (2x − 5)², deur eers uit te brei.', answer: "f'(x) = 8x − 20", checkMode: 'auto', correctAnswer: '8x-20', correctAnswers: ['8x-20', '8x − 20'], explanation: 'Brei uit: (2x−5)² = 4x²−20x+25. Differensieer: f\'(x) = 8x−20 ✓' },

        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x² by die punt (4, 16).', answer: 'y = 8x − 16', checkMode: 'auto', correctAnswer: 'y=8x-16', correctAnswers: ['y=8x-16', 'y = 8x - 16', 'y=8x−16'], explanation: "f'(x)=2x. f'(4)=8. Gradiënt m=8. Raaklyn: y−16=8(x−4) → y=8x−32+16=8x−16 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ − 2x by x = 2.', answer: 'y = 10x − 16', checkMode: 'auto', correctAnswer: 'y=10x-16', correctAnswers: ['y=10x-16', 'y = 10x - 16', 'y=10x−16'], explanation: "f(2)=8−4=4. Punt (2,4). f'(x)=3x²−2. f'(2)=12−2=10. Raaklyn: y−4=10(x−2) → y=10x−20+4=10x−16 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = 3x² − 4x + 2 by die punt waar x = 1.', answer: 'y = 2x − 1', checkMode: 'auto', correctAnswer: 'y=2x-1', correctAnswers: ['y=2x-1', 'y = 2x - 1'], explanation: "f(1)=3−4+2=1. Punt (1,1). f'(x)=6x−4. f'(1)=6−4=2. Raaklyn: y−1=2(x−1) → y=2x−2+1=2x−1 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ − 3x by x = −2.', answer: 'y = 9x + 16', checkMode: 'auto', correctAnswer: 'y=9x+16', correctAnswers: ['y=9x+16', 'y = 9x + 16'], explanation: "f(−2)=−8+6=−2. Punt (−2,−2). f'(x)=3x²−3. f'(−2)=12−3=9. Raaklyn: y−(−2)=9(x+2) → y=9x+18−2=9x+16 ✓" },

        { difficulty: 'Medium-Hard', question: 'Vind die stilstandspunte van y = x³ − 3x² − 9x en klassifiseer elkeen as ʼn plaaslike maksimum of minimum.', answer: 'Plaaslike maksimum by (−1, 5), plaaslike minimum by (3, −27)', checkMode: 'self', explanation: "f'(x)=3x²−6x−9=3(x²−2x−3)=3(x−3)(x+1)=0. x=3 of x=−1. f(−1)=−1−3+9=5 (plaaslike maksimum). f(3)=27−27−27=−27 (plaaslike minimum)." },
        { difficulty: 'Medium-Hard', question: 'Lerato sê ʼn stilstandspunt kan slegs voorkom waar ʼn grafiek ʼn plaaslike maksimum of minimum het. Is sy korrek? Verduidelik, met verwysing na ʼn stilstands-buigpunt.', answer: 'Nie noodwendig nie — by ʼn stilstands-buigpunt is f\'(x) = 0 maar f\'(x) verander nie van teken aan weerskante van daardie punt nie, sodat dit nóg ʼn plaaslike maksimum nóg ʼn plaaslike minimum is, al is dit steeds ʼn stilstandspunt.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die x-waardes van die stilstandspunte van y = x³ − 6x² en gebruik ʼn tekentabel vir f\'(x) om elkeen as ʼn plaaslike maksimum of minimum te klassifiseer.', answer: 'x = 0 (plaaslike maksimum), x = 4 (plaaslike minimum)', checkMode: 'self', explanation: "f'(x)=3x²−12x=3x(x−4)=0. x=0 of x=4. f'(−1)=15>0, f'(1)=−9<0, dus is x=0 ʼn plaaslike maksimum. f'(5)=15>0, dus is x=4 ʼn plaaslike minimum." },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het stilstandspunte by x = −2 en x = 1, ʼn y-afsnit van −3, en ʼn positiewe leidende koëffisiënt. Sê of die funksie toenemend of afnemend is op die interval −2 < x < 1, en beskryf die eindgedrag van die grafiek.', answer: 'Die funksie is afnemend op −2 < x < 1 (tussen ʼn plaaslike maksimum by x=−2 en ʼn plaaslike minimum by x=1). Aangesien die leidende koëffisiënt positief is, styg die grafiek na regs en daal dit na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het x-afsnitte by x = −3, x = 2 en x = 5, en ʼn positiewe leidende koëffisiënt. Sê wat die teken van f(x) is vir x > 5, en beskryf die eindgedrag van die grafiek.', answer: 'Vir x > 5 is f(x) positief (die grafiek is bo die x-as ná die laaste wortel, aangesien die grafiek na regs styg met ʼn positiewe leidende koëffisiënt). Die grafiek styg na regs en daal na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het ʼn plaaslike maksimum by (−1, 8) en ʼn plaaslike minimum by (2, −4), met geen ander stilstandspunte nie. Sê op watter interval(le) f(x) afnemend is.', answer: 'f(x) is afnemend vir −1 < x < 2 (tussen die plaaslike maksimum en die plaaslike minimum).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'ʼn Boer het 100 m heining om ʼn reghoekige area teen ʼn reguit muur toe te maak (geen heining is nodig teen die muur nie). Vind die dimensies wat die oppervlakte maksimeer, en gee die maksimum oppervlakte.', answer: 'Dimensies: 25 m by 50 m, maksimum oppervlakte = 1250 m²', checkMode: 'self', explanation: 'Laat die twee loodregte kante elk lengte x hê. Parallelle kant = 100−2x. A = x(100−2x) = 100x−2x². dA/dx = 100−4x = 0. x = 25. Parallelle kant = 50. Maksimum oppervlakte = 25×50 = 1250 m².' },
        { difficulty: 'Hard', question: 'Die hoogte van ʼn bal bo die grond (in meter) na t sekondes is h(t) = −5t² + 40t + 2. Vind die maksimum hoogte wat bereik word en die tyd waarop dit voorkom.', answer: 'Maksimum hoogte = 82 m by t = 4 sekondes', checkMode: 'self', explanation: "h'(t)=−10t+40=0. t=4. h(4)=−80+160+2=82 m." },
        { difficulty: 'Hard', question: 'Amahle wil ʼn oop boks maak van ʼn 18 cm by 18 cm stuk karton deur gelyke vierkante uit elke hoek te sny en die kante op te vou. Vind die grootte van die vierkant wat gesny moet word om die volume van die boks te maksimeer, en gee die maksimum volume.', answer: 'Vierkantgrootte = 3 cm, maksimum volume = 432 cm³', checkMode: 'self', explanation: 'Laat die snygrootte = x. Volume V = x(18−2x)² = 4x³−72x²+324x. dV/dx = 12x²−144x+324 = 0. Deel deur 12: x²−12x+27=0. (x−3)(x−9)=0. x=3 of x=9 (verwerp, want die kant sal 0 wees). V(3) = 3(12)² = 3×144 = 432 cm³.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue eerste beginsels, differensiasiereëls, raaklyne, kurweskets en optimering hanteer.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die gids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegging, vars getalle, effens moeiliker mengsel
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = 4x² vanuit eerste beginsels.", answer: "f'(x) = 8x", checkMode: 'auto', correctAnswer: '8x', correctAnswers: ['8x', "f'(x)=8x", "f'(x) = 8x"], explanation: "f'(x) = lim(h→0) [4(x+h)²−4x²]/h = lim(h→0) [8xh+4h²]/h = lim(h→0) (8x+4h) = 8x ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = 6x − 1 vanuit eerste beginsels.", answer: "f'(x) = 6", checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', "f'(x)=6", "f'(x) = 6"], explanation: "f'(x) = lim(h→0) [(6(x+h)−1)−(6x−1)]/h = lim(h→0) 6h/h = lim(h→0) 6 = 6 ✓" },
        { difficulty: 'Easy', question: "Vind f'(x) vir f(x) = x² + 5x vanuit eerste beginsels.", answer: "f'(x) = 2x + 5", checkMode: 'auto', correctAnswer: '2x+5', correctAnswers: ['2x+5', '2x + 5', "f'(x)=2x+5"], explanation: "f(x+h) = (x+h)²+5(x+h) = x²+2xh+h²+5x+5h. Trek f(x) af: 2xh+h²+5h. Deel deur h: 2x+h+5. Soos h→0: 2x+5 ✓" },

        { difficulty: 'Easy', question: 'Differensieer f(x) = 6x³ − 4x² + 2x − 8.', answer: "f'(x) = 18x² − 8x + 2", checkMode: 'auto', correctAnswer: '18x²-8x+2', correctAnswers: ['18x²-8x+2', '18x^2-8x+2', '18x² − 8x + 2', '18x^2 - 8x + 2'], explanation: 'Pas die magsreël op elke term toe: d/dx(6x³)=18x², d/dx(−4x²)=−8x, d/dx(2x)=2, d/dx(−8)=0. f\'(x)=18x²−8x+2 ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (x² + 9)/x deur eers te vereenvoudig.', answer: "f'(x) = 1 − 9/x²", checkMode: 'auto', correctAnswer: '1-9/x²', correctAnswers: ['1-9/x²', '1-9/x^2', '1 − 9/x²', '1 - 9/x^2'], explanation: 'Vereenvoudig: (x²+9)/x = x+9x⁻¹. Differensieer: d/dx(x)=1, d/dx(9x⁻¹)=−9x⁻². f\'(x)=1−9x⁻²=1−9/x² ✓' },
        { difficulty: 'Easy-Medium', question: 'Differensieer f(x) = (5x + 2)(x − 3).', answer: "f'(x) = 10x − 13", checkMode: 'auto', correctAnswer: '10x-13', correctAnswers: ['10x-13', '10x − 13'], explanation: 'Brei eers uit: (5x+2)(x−3) = 5x²−15x+2x−6 = 5x²−13x−6. Differensieer: f\'(x)=10x−13 ✓' },
        { difficulty: 'Medium', question: 'Differensieer f(x) = (3x − 1)², deur eers uit te brei.', answer: "f'(x) = 18x − 6", checkMode: 'auto', correctAnswer: '18x-6', correctAnswers: ['18x-6', '18x − 6'], explanation: 'Brei uit: (3x−1)² = 9x²−6x+1. Differensieer: f\'(x) = 18x−6 ✓' },

        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x² by die punt (−1, 1).', answer: 'y = −2x − 1', checkMode: 'auto', correctAnswer: 'y=-2x-1', correctAnswers: ['y=-2x-1', 'y = -2x - 1', 'y=−2x−1'], explanation: "f'(x)=2x. f'(−1)=−2. Gradiënt m=−2. Raaklyn: y−1=−2(x+1) → y=−2x−2+1=−2x−1 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ − 4x by x = 1.', answer: 'y = −x − 2', checkMode: 'auto', correctAnswer: 'y=-x-2', correctAnswers: ['y=-x-2', 'y = -x - 2', 'y=−x−2'], explanation: "f(1)=1−4=−3. Punt (1,−3). f'(x)=3x²−4. f'(1)=3−4=−1. Raaklyn: y−(−3)=−1(x−1) → y=−x+1−3=−x−2 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = 2x² + x − 3 by die punt waar x = 2.', answer: 'y = 9x − 11', checkMode: 'auto', correctAnswer: 'y=9x-11', correctAnswers: ['y=9x-11', 'y = 9x - 11', 'y=9x−11'], explanation: "f(2)=8+2−3=7. Punt (2,7). f'(x)=4x+1. f'(2)=8+1=9. Raaklyn: y−7=9(x−2) → y=9x−18+7=9x−11 ✓" },
        { difficulty: 'Medium', question: 'Vind die vergelyking van die raaklyn aan y = x³ + 3x by x = −1.', answer: 'y = 6x + 2', checkMode: 'auto', correctAnswer: 'y=6x+2', correctAnswers: ['y=6x+2', 'y = 6x + 2'], explanation: "f(−1)=−1−3=−4. Punt (−1,−4). f'(x)=3x²+3. f'(−1)=3+3=6. Raaklyn: y−(−4)=6(x+1) → y=6x+6−4=6x+2 ✓" },

        { difficulty: 'Medium-Hard', question: 'Vind die stilstandspunte van y = 2x³ + 3x² − 12x en klassifiseer elkeen as ʼn plaaslike maksimum of minimum.', answer: 'Plaaslike maksimum by (−2, 20), plaaslike minimum by (1, −7)', checkMode: 'self', explanation: "f'(x)=6x²+6x−12=6(x²+x−2)=6(x+2)(x−1)=0. x=−2 of x=1. f(−2)=−16+12+24=20 (plaaslike maksimum). f(1)=2+3−12=−7 (plaaslike minimum)." },
        { difficulty: 'Medium-Hard', question: 'Amahle sê die grafiek van y=f(x) kan nie ʼn stilstandspunt hê waar die kurwe nóg toenemend nóg afnemend is aan weerskante nie. Is sy korrek? Verduidelik, met verwysing na ʼn stilstands-buigpunt.', answer: 'Sy is verkeerd — by ʼn stilstands-buigpunt is f\'(x)=0 en die teken van f\'(x) is dieselfde net voor en na die punt (albei positief of albei negatief), sodat die funksie steeds toeneem (of afneem) deur die stilstandspunt in plaas daarvan om te draai.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die x-waardes van die stilstandspunte van y = x³ − 12x en gebruik ʼn tekentabel vir f\'(x) om elkeen as ʼn plaaslike maksimum of minimum te klassifiseer.', answer: 'x = −2 (plaaslike maksimum), x = 2 (plaaslike minimum)', checkMode: 'self', explanation: "f'(x)=3x²−12=3(x−2)(x+2)=0. x=−2 of x=2. f'(−3)=15>0, f'(0)=−12<0, dus is x=−2 ʼn plaaslike maksimum. f'(3)=15>0, dus is x=2 ʼn plaaslike minimum." },

        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het stilstandspunte by x = −3 en x = 0, ʼn y-afsnit van 4, en ʼn negatiewe leidende koëffisiënt. Sê of die funksie toenemend of afnemend is op die interval −3 < x < 0, en beskryf die eindgedrag van die grafiek.', answer: 'Die funksie is toenemend op −3 < x < 0 (tussen ʼn plaaslike minimum by x=−3 en ʼn plaaslike maksimum by x=0, aangesien die negatiewe leidende koëffisiënt die gewone volgorde van maksimum/minimum omkeer in vergelyking met ʼn positiewe leidende koëffisiënt). Die grafiek daal na regs en styg na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het x-afsnitte by x = −4, x = 1 en x = 3, en ʼn negatiewe leidende koëffisiënt. Sê wat die teken van f(x) is vir x > 3, en beskryf die eindgedrag van die grafiek.', answer: 'Vir x > 3 is f(x) negatief (die grafiek is onder die x-as ná die laaste wortel, aangesien die grafiek na regs daal met ʼn negatiewe leidende koëffisiënt). Die grafiek daal na regs en styg na links.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Derdegraadse grafiek y = f(x) het ʼn plaaslike minimum by (−2, −6) en ʼn plaaslike maksimum by (2, 6), met geen ander stilstandspunte nie. Sê op watter interval(le) f(x) toenemend is.', answer: 'f(x) is toenemend vir −2 < x < 2 (tussen die plaaslike minimum en die plaaslike maksimum).', checkMode: 'self' },

        { difficulty: 'Hard', question: 'ʼn Boer het 120 m heining om ʼn reghoekige area teen ʼn reguit muur toe te maak (geen heining is nodig teen die muur nie). Vind die dimensies wat die oppervlakte maksimeer, en gee die maksimum oppervlakte.', answer: 'Dimensies: 30 m by 60 m, maksimum oppervlakte = 1800 m²', checkMode: 'self', explanation: 'Laat die twee loodregte kante elk lengte x hê. Parallelle kant = 120−2x. A = x(120−2x) = 120x−2x². dA/dx = 120−4x = 0. x = 30. Parallelle kant = 60. Maksimum oppervlakte = 30×60 = 1800 m².' },
        { difficulty: 'Hard', question: 'Die hoogte van ʼn bal bo die grond (in meter) na t sekondes is h(t) = −5t² + 50t + 4. Vind die maksimum hoogte wat bereik word en die tyd waarop dit voorkom.', answer: 'Maksimum hoogte = 129 m by t = 5 sekondes', checkMode: 'self', explanation: "h'(t)=−10t+50=0. t=5. h(5)=−125+250+4=129 m." },
        { difficulty: 'Hard', question: 'Lerato wil ʼn oop boks maak van ʼn 30 cm by 30 cm stuk karton deur gelyke vierkante uit elke hoek te sny en die kante op te vou. Vind die grootte van die vierkant wat gesny moet word om die volume van die boks te maksimeer, en gee die maksimum volume.', answer: 'Vierkantgrootte = 5 cm, maksimum volume = 2000 cm³', checkMode: 'self', explanation: 'Laat die snygrootte = x. Volume V = x(30−2x)² = 4x³−120x²+900x. dV/dx = 12x²−240x+900 = 0. Deel deur 12: x²−20x+75=0. (x−5)(x−15)=0. x=5 of x=15 (verwerp, want die kant sal 0 wees). V(5) = 5(20)² = 5×400 = 2000 cm³.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan differensiasie, raaklyne, kurweskets en optimering op ʼn wye reeks probleme toepas.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Werk deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die gids weer en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het differensiaalrekening bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer.' },
  ],
}
