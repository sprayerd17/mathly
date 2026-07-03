import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (exponent roles) ─────────────────────────────────────────
// negative exponent → orange  (#ea580c)
// reciprocal / rule → blue    (#2563eb)
// simplified answer → green   (#16a34a)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eksponente',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — EXTENDING LAWS OF EXPONENTS TO INTEGER EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'integer-exponents',
      title: 'Uitbreiding van die Wette van Eksponente na Heelgetal-eksponente',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 8 het jy die vyf wette van eksponente vir natuurlike getal-eksponente opgestel. Ons ${bl('brei')} nou hierdie wette uit om ${or('heelgetal (negatiewe) eksponente')} in te sluit. Die sleutelreël is ${or('a⁻ᵏ')} = ${bl('1 / aᵏ')} — ʼn ${or('negatiewe eksponent')} beteken jy neem die ${bl('resiprook')} van die grondgetal verhef tot die positiewe weergawe van daardie eksponent. Die resultaat is altyd ʼn ${gr('positiewe breuk')} wanneer die grondgetal groter as 1 is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negatiewe eksponent')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('resiprook')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die sleutelreël</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">As a ≠ 0 en k ʼn positiewe heelgetal is:&nbsp;&nbsp;${or('a⁻ᵏ')} = ${bl('1 / aᵏ')}</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vinnige voorbeelde</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('5⁻¹')} = ${bl('1/5')} = ${gr('0.2')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('3⁻²')} = ${bl('1/3²')} = ${gr('1/9')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Algemene wanopvatting</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${or('Negatiewe eksponent')} maak <strong>nie</strong> die resultaat negatief nie — dit beteken neem die ${bl('resiprook')}. Byvoorbeeld, ${or('2⁻³')} = ${gr('1/8')}, wat ʼn positiewe breuk is. Skryf nooit ${or('2⁻³')} = −8 nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig 2⁻³.',
          answer: `${or('2⁻³')} = ${bl('1/2³')} = ${gr('1/8')}`,
          steps: [
            `Pas die reël ${or('a⁻ᵏ')} = ${bl('1/aᵏ')} toe: ${or('2⁻³')} = ${bl('1/2³')}`,
            `Bereken die noemer: 2³ = 2 × 2 × 2 = 8`,
            `<strong>Antwoord:</strong> ${or('2⁻³')} = ${bl('1/8')} = ${gr('1/8')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig 5² × 5⁻⁴.',
          answer: `5² × ${or('5⁻⁴')} = ${bl('5⁻²')} = ${gr('1/25')}`,
          steps: [
            `Dieselfde grondgetal — ${bl('tel die eksponente bymekaar')}: 5² × ${or('5⁻⁴')} = 5^(2 + (${or('−4')})) = ${bl('5⁻²')}`,
            `Pas die ${or('negatiewe-eksponentreël')} toe: ${bl('5⁻²')} = ${bl('1/5²')}`,
            `Bereken: 5² = 25`,
            `<strong>Antwoord:</strong> 5² × ${or('5⁻⁴')} = ${gr('1/25')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vereenvoudig 3⁻².',
          answer: '1/9',
          checkMode: 'auto',
          correctAnswer: '1/9',
          explanation: 'Pas a⁻ᵏ = 1/aᵏ toe:\n3⁻² = 1/3² = 1/9 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 4³ × 4⁻⁵.',
          answer: '1/16',
          checkMode: 'auto',
          correctAnswer: '1/16',
          explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n4³ × 4⁻⁵ = 4^(3 + (−5)) = 4⁻²\nPas negatiewe-eksponentreël toe:\n4⁻² = 1/4² = 1/16 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê 2⁻⁴ = −16. Is hy korrek? Verduidelik.',
          answer: 'Nee — 2⁻⁴ = 1/2⁴ = 1/16, ʼn positiewe breuk, nie −16 nie. ʼn Negatiewe eksponent maak nie die resultaat negatief nie; dit beteken neem die resiprook van die grondgetal verhef tot die positiewe eksponent.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die negatiewe-eksponentreël a⁻ᵏ = 1/aᵏ toe te pas met uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die verband tussen negatiewe eksponente en resiproke wys met kleurgekodeerde voorbeelde" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SCIENTIFIC NOTATION WITH NEGATIVE EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scientific-notation',
      title: 'Wetenskaplike Notasie met Negatiewe Eksponente',
      icon: '×10ⁿ',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei wetenskaplike notasie uit om ${or('negatiewe eksponente')} in te sluit, wat gebruik word om <strong>baie klein getalle</strong> te skryf as ʼn waarde tussen 1 en 10 vermenigvuldig met ʼn ${or('negatiewe mag van 10')}. Wanneer ons die ${bl('desimale punt na regs skuif')}, is die eksponent ${or('negatief')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('desimale skuif')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negatiewe eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Klein getal na wetenskaplike notasie omskakel</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stap 1 — Skuif die desimaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Skuif die desimale punt na regs')} totdat jy ʼn getal tussen 1 en 10 het. Tel die aantal plekke wat geskuif is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Stap 2 — Skryf die eksponent</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Aangesien jy die desimaal <em>na regs</em> geskuif het (wat die getal groter maak), is die eksponent ${or('negatief')}. Dit is gelyk aan die aantal plekke wat geskuif is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Stap 3 — Skryf in wetenskaplike notasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skryf die ${gr('finale vorm')}: (getal tussen 1 en 10) × 10^(${or('negatiewe eksponent')}).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Groot teenoor klein getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die desimaal na <strong>links</strong> te skuif (groot getalle, groter as 10) gee ʼn <strong>positiewe</strong> eksponent. Om die desimaal na ${bl('regs')} te skuif (klein getalle, kleiner as 1) gee ʼn ${or('negatiewe eksponent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf 0.00045 in wetenskaplike notasie.',
          answer: `0.00045 = ${gr('4.5 × 10⁻⁴')}`,
          steps: [
            `${bl('Skuif die desimale punt na regs')} totdat jy ʼn getal tussen 1 en 10 kry: 0.00045 → 4.5 (${bl('4 plekke na regs')} geskuif)`,
            `Aangesien ons die desimaal na regs geskuif het, is die eksponent ${or('negatief')}: die eksponent is ${or('−4')}`,
            `<strong>Antwoord:</strong> 0.00045 = ${gr('4.5 × 10⁻⁴')} ✓`,
          ],
        },
        {
          question: 'Sipho skryf 0.0072 in wetenskaplike notasie as 7.2 × 10⁻³. Kontroleer sy antwoord.',
          answer: `${gr('7.2 × 10⁻³')} is korrek`,
          steps: [
            `${bl('Skuif die desimale punt na regs')} vanaf 0.0072 totdat jy ʼn getal tussen 1 en 10 kry: 0.0072 → 7.2 (${bl('3 plekke na regs')} geskuif)`,
            `Aangesien ons die desimaal na regs geskuif het, is die eksponent ${or('negatief')}: die eksponent is ${or('−3')}`,
            `Sipho het ${gr('7.2 × 10⁻³')} geskryf — dit stem ooreen. Sy antwoord is ${gr('korrek')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 0.0036 in wetenskaplike notasie.',
          answer: '3.6 × 10⁻³',
          checkMode: 'auto',
          correctAnswer: '3.6 × 10⁻³',
          correctAnswers: ['3.6 × 10⁻³', '3.6×10⁻³', '3.6x10⁻³', '3.6 x 10⁻³', '3.6e-3'],
          explanation: 'Skuif die desimaal 3 plekke na regs: 0.0036 → 3.6\nNa regs skuif → negatiewe eksponent van −3\nAntwoord: 3.6 × 10⁻³ ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skryf 0.000089 in wetenskaplike notasie.',
          answer: '8.9 × 10⁻⁵',
          checkMode: 'auto',
          correctAnswer: '8.9 × 10⁻⁵',
          correctAnswers: ['8.9 × 10⁻⁵', '8.9×10⁻⁵', '8.9x10⁻⁵', '8.9 x 10⁻⁵', '8.9e-5'],
          explanation: 'Skuif die desimaal 5 plekke na regs: 0.000089 → 8.9\nNa regs skuif → negatiewe eksponent van −5\nAntwoord: 8.9 × 10⁻⁵ ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato skakel 0.00056 om na wetenskaplike notasie en kry 5.6 × 10⁻⁴. Kontroleer haar antwoord.',
          answer: 'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0.00056 kry jy 5.6, wat 5.6 × 10⁻⁴ bevestig.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om klein desimale getalle na wetenskaplike notasie om te skakel deur negatiewe eksponente te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat desimale-puntskuif na regs wys met negatiewe-eksponent-annotasie vir klein getalle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING CALCULATIONS AND PROBLEMS USING ALL LAWS OF EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponent-calculations',
      title: 'Berekeninge en Probleme Oplos deur Al die Wette van Eksponente te Gebruik',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas nou <strong>al vier bewerkings</strong> toe op getalle in eksponensiële vorm, deur al die wette van eksponente te gebruik, insluitend ${or('heelgetal (negatiewe) eksponente')}. Ons los ook werklike-lewe-probleme op wat eksponensiële notasie behels, soos wetenskaplike metings en baie klein hoeveelhede.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eksponentwette')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('negatiewe eksponente')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wette van eksponente — volledige opsomming</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig dieselfde grondgetal:')} aᵐ × aⁿ = a^(m+n) — <em>tel</em> die eksponente bymekaar</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Deel dieselfde grondgetal:')} aᵐ ÷ aⁿ = a^(m−n) — <em>trek</em> die eksponente van mekaar af</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Mag van ʼn mag:')} (aᵐ)ⁿ = a^(m×n) — <em>vermenigvuldig</em> die eksponente</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Negatiewe eksponent:')} ${or('a⁻ᵏ')} = 1/aᵏ — neem die ${or('resiprook')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Nul-eksponent:</strong> a⁰ = 1 vir enige a ≠ 0</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk vir rekenkunde met wetenskaplike notasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy getalle in wetenskaplike notasie vermenigvuldig, vermenigvuldig die voorste getalle en ${bl('tel die mag van 10 bymekaar')}. Kontroleer altyd dat die voorste getal in jou ${gr('finale antwoord')} tussen 1 en 10 is — pas die mag aan indien nodig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vereenvoudig (3⁻²)³.',
          answer: `(${or('3⁻²')})³ = ${bl('3⁻⁶')} = ${gr('1/729')}`,
          steps: [
            `${bl('Mag-van-ʼn-mag-reël:')} vermenigvuldig die eksponente: (${or('3⁻²')})³ = 3^(${or('−2')} × 3) = ${bl('3⁻⁶')}`,
            `Pas die ${or('negatiewe-eksponentreël')} toe: ${bl('3⁻⁶')} = 1/3⁶`,
            `Bereken: 3⁶ = 729`,
            `<strong>Antwoord:</strong> (${or('3⁻²')})³ = ${gr('1/729')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig 4³ ÷ 4⁻².',
          answer: `4³ ÷ ${or('4⁻²')} = ${bl('4⁵')} = ${gr('1024')}`,
          steps: [
            `${bl('Deel-dieselfde-grondgetal-reël:')} trek die eksponente van mekaar af: 4³ ÷ ${or('4⁻²')} = 4^(3 − (${or('−2')})) = 4^(3 + 2) = ${bl('4⁵')}`,
            `Bereken: 4⁵ = 4 × 4 × 4 × 4 × 4 = 1024`,
            `<strong>Antwoord:</strong> 4³ ÷ ${or('4⁻²')} = ${gr('1024')} ✓`,
          ],
        },
        {
          question: 'Lerato bereken die massa van ʼn virus as 2 × 10⁻⁷ gram. As sy 5 virusse het, bepaal die totale massa in wetenskaplike notasie.',
          answer: `Totale massa = ${gr('1 × 10⁻⁶ gram')}`,
          steps: [
            `Vermenigvuldig: 5 × (2 × ${or('10⁻⁷')}) = (5 × 2) × ${or('10⁻⁷')} = 10 × ${or('10⁻⁷')}`,
            `${bl('Vermenigvuldig dieselfde grondgetal:')} 10 × ${or('10⁻⁷')} = 10¹ × ${or('10⁻⁷')} = 10^(1 + (${or('−7')})) = ${bl('10⁻⁶')}`,
            `Pas aan na wetenskaplike notasie: 10 is nie tussen 1 en 10 nie, dus herskryf 10 × ${or('10⁻⁷')} = 1 × 10¹ × ${or('10⁻⁷')} = 1 × ${bl('10⁻⁶')}`,
            `<strong>Antwoord:</strong> Totale massa = ${gr('1 × 10⁻⁶ gram')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig (2⁻³)².',
          answer: '1/64',
          checkMode: 'auto',
          correctAnswer: '1/64',
          explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(2⁻³)² = 2^(−3 × 2) = 2⁻⁶\nPas negatiewe-eksponentreël toe:\n2⁻⁶ = 1/2⁶ = 1/64 ✓',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 6² ÷ 6⁻¹.',
          answer: '216',
          checkMode: 'auto',
          correctAnswer: '216',
          explanation: 'Deel dieselfde grondgetal — trek eksponente van mekaar af:\n6² ÷ 6⁻¹ = 6^(2 − (−1)) = 6^(2 + 1) = 6³\nBereken: 6³ = 216 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê 5⁰ = 5. Is hy korrek? Verduidelik.',
          answer: 'Nee — enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 5⁰ = 1, nie 5 nie.',
          checkMode: 'self',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Bakterium het ʼn massa van 3 × 10⁻¹² gram. Bepaal die totale massa van 4 bakterieë in wetenskaplike notasie.',
          answer: '1.2 × 10⁻¹¹ gram',
          checkMode: 'auto',
          correctAnswer: '1.2 × 10⁻¹¹ gram',
          correctAnswers: ['1.2 × 10⁻¹¹ gram', '1.2×10⁻¹¹ gram', '1.2x10⁻¹¹ gram', '1.2e-11 gram', '1.2 × 10⁻¹¹'],
          explanation: 'Vermenigvuldig: 4 × (3 × 10⁻¹²) = 12 × 10⁻¹²\nPas aan na wetenskaplike notasie: 12 × 10⁻¹² = 1.2 × 10¹ × 10⁻¹² = 1.2 × 10⁻¹¹ gram ✓',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 7⁻¹ × 7³.',
          answer: '49',
          checkMode: 'auto',
          correctAnswer: '49',
          explanation: 'Vermenigvuldig dieselfde grondgetal — tel eksponente bymekaar:\n7⁻¹ × 7³ = 7^(−1 + 3) = 7² = 49 ✓',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê (3⁻¹)⁻² is gelyk aan 9. Is sy korrek? Verduidelik.',
          answer: 'Ja — (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9.',
          checkMode: 'self',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig 10⁻³ × 10⁵ ÷ 10⁻¹.',
          answer: '1000',
          checkMode: 'auto',
          correctAnswer: '1000',
          explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n10⁻³ × 10⁵ = 10^(−3 + 5) = 10²\n10² ÷ 10⁻¹ = 10^(2 − (−1)) = 10³ = 1000 ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sandkorrel het ʼn massa van ongeveer 5 × 10⁻⁵ gram. Bepaal die massa van 1000 sandkorrels in wetenskaplike notasie.',
          answer: '5 × 10⁻² gram',
          checkMode: 'auto',
          correctAnswer: '5 × 10⁻² gram',
          correctAnswers: ['5 × 10⁻² gram', '5×10⁻² gram', '5x10⁻² gram', '5e-2 gram', '5 × 10⁻²'],
          explanation: 'Vermenigvuldig: 1000 × (5 × 10⁻⁵)\n= 5000 × 10⁻⁵\n= 5 × 10³ × 10⁻⁵\n= 5 × 10^(3 + (−5))\n= 5 × 10⁻² gram ✓',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê negatiewe eksponente maak altyd ʼn getal kleiner as 1. Is hy korrek? Verduidelik met redenasie.',
          answer: 'Ja (vir ʼn grondgetal groter as 1) — ʼn negatiewe eksponent verteenwoordig ʼn resiprook, wat ʼn breuk kleiner as 1 gee wanneer die grondgetal groter as 1 is.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om al die wette van eksponente, insluitend negatiewe eksponente, in berekeninge en werklike-lewe-probleme toe te pas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Opsommingsdiagram van al vyf wette van eksponente met kleurgekodeerde voorbeelde, insluitend negatiewe en nul-eksponente" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het eksponente bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
