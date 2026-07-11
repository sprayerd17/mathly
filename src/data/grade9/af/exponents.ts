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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Negatiewe eksponent → resiprook (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 2⁻⁴.', answer: '1/16', checkMode: 'auto', correctAnswer: '1/16', explanation: 'Pas a⁻ᵏ = 1/aᵏ toe:\n2⁻⁴ = 1/2⁴ = 1/16 ✓' },
        { difficulty: 'Easy', question: 'Skryf 5⁻³ as ʼn breuk in eenvoudigste vorm.', answer: '1/125', checkMode: 'auto', correctAnswer: '1/125', explanation: 'Pas die negatiewe-eksponentreël toe:\n5⁻³ = 1/5³ = 1/125 ✓' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 10⁻²?', answer: '1/100', checkMode: 'auto', correctAnswer: '1/100', correctAnswers: ['1/100', '0,01'], explanation: '10⁻² = 1/10² = 1/100 ✓' },
        { difficulty: 'Medium', question: 'Bereken 6⁻² en gee jou antwoord as ʼn breuk.', answer: '1/36', checkMode: 'auto', correctAnswer: '1/36', explanation: '6⁻² = 1/6² = 1/36 ✓' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 3⁵ × 3⁻².', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n3⁵ × 3⁻² = 3^(5 + (−2)) = 3³ = 27 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 2⁻³ × 2⁷.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n2⁻³ × 2⁷ = 2^(−3 + 7) = 2⁴ = 16 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 6⁴ × 6⁻⁶, en gee jou antwoord as ʼn breuk.', answer: '1/36', checkMode: 'auto', correctAnswer: '1/36', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n6⁴ × 6⁻⁶ = 6^(4 + (−6)) = 6⁻² = 1/6² = 1/36 ✓' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 5² ÷ 5⁻³.', answer: '3125', checkMode: 'auto', correctAnswer: '3125', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n5² ÷ 5⁻³ = 5^(2 − (−3)) = 5⁵ = 3125 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 7⁻² ÷ 7⁻⁵.', answer: '343', checkMode: 'auto', correctAnswer: '343', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n7⁻² ÷ 7⁻⁵ = 7^(−2 − (−5)) = 7³ = 343 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻¹ ÷ 3², en gee jou antwoord as ʼn breuk.', answer: '1/27', checkMode: 'auto', correctAnswer: '1/27', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n3⁻¹ ÷ 3² = 3^(−1 − 2) = 3⁻³ = 1/27 ✓' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (6⁻²)².', answer: '1/1296', checkMode: 'auto', correctAnswer: '1/1296', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(6⁻²)² = 6^(−2 × 2) = 6⁻⁴ = 1/1296 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (5⁻¹)⁻³.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(5⁻¹)⁻³ = 5^(−1 × −3) = 5³ = 125 ✓' },
        { difficulty: 'Hard', question: 'Bereken (3²)⁻², en gee jou antwoord as ʼn breuk.', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(3²)⁻² = 3^(2 × −2) = 3⁻⁴ = 1/81 ✓' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,00052 in wetenskaplike notasie.', answer: '5,2 × 10⁻⁴', checkMode: 'auto', correctAnswer: '5,2 × 10⁻⁴', correctAnswers: ['5,2 × 10⁻⁴', '5,2×10⁻⁴', '5,2x10⁻⁴', '5,2 x 10⁻⁴', '5,2e-4'], explanation: 'Skuif die desimaal 4 plekke na regs: 0,00052 → 5,2\nNa regs skuif → negatiewe eksponent van −4\nAntwoord: 5,2 × 10⁻⁴ ✓' },
        { difficulty: 'Medium', question: 'Skryf 0,0000078 in wetenskaplike notasie.', answer: '7,8 × 10⁻⁶', checkMode: 'auto', correctAnswer: '7,8 × 10⁻⁶', correctAnswers: ['7,8 × 10⁻⁶', '7,8×10⁻⁶', '7,8x10⁻⁶', '7,8 x 10⁻⁶', '7,8e-6'], explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000078 → 7,8\nNa regs skuif → negatiewe eksponent van −6\nAntwoord: 7,8 × 10⁻⁶ ✓' },
        { difficulty: 'Hard', question: 'Zanele skryf 0,000416 in wetenskaplike notasie as 4,16 × 10⁻⁴. Kontroleer haar antwoord.', answer: 'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0,000416 kry jy 4,16, wat 4,16 × 10⁻⁴ bevestig.', checkMode: 'self' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 2⁷ × 2⁻⁴ ÷ 2².', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n2⁷ × 2⁻⁴ = 2^(7 + (−4)) = 2³\n2³ ÷ 2² = 2^(3 − 2) = 2¹ = 2 ✓' },
        { difficulty: 'Hard', question: 'ʼn Huidsel het ʼn massa van 3 × 10⁻⁸ gram. Bepaal die totale massa van 5 huidselle in wetenskaplike notasie.', answer: '1,5 × 10⁻⁷ gram', checkMode: 'auto', correctAnswer: '1,5 × 10⁻⁷ gram', correctAnswers: ['1,5 × 10⁻⁷ gram', '1,5×10⁻⁷ gram', '1,5x10⁻⁷ gram', '1,5e-7 gram', '1,5 × 10⁻⁷'], explanation: 'Vermenigvuldig: 5 × (3 × 10⁻⁸) = 15 × 10⁻⁸\nPas aan na wetenskaplike notasie: 15 × 10⁻⁸ = 1,5 × 10¹ × 10⁻⁸ = 1,5 × 10⁻⁷ gram ✓' },
        { difficulty: 'Hard', question: 'Karabo sê 4⁻¹ × 4⁰ × 4³ vereenvoudig tot 4². Is hy korrek? Verduidelik.', answer: 'Ja — deur die eksponente bymekaar te tel kry jy −1 + 0 + 3 = 2, dus 4⁻¹ × 4⁰ × 4³ = 4² = 16.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 10⁻³ × 10⁶ ÷ 10².', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n10⁻³ × 10⁶ = 10^(−3 + 6) = 10³\n10³ ÷ 10² = 10^(3 − 2) = 10¹ = 10 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het heelgetal-eksponente en wetenskaplike notasie bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 9, message: 'Goeie poging! Gaan negatiewe eksponente en die wette van eksponente weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Negatiewe eksponent → resiprook (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 8⁻².', answer: '1/64', checkMode: 'auto', correctAnswer: '1/64', explanation: 'Pas a⁻ᵏ = 1/aᵏ toe:\n8⁻² = 1/8² = 1/64 ✓' },
        { difficulty: 'Easy', question: 'Skryf 4⁻⁴ as ʼn breuk in eenvoudigste vorm.', answer: '1/256', checkMode: 'auto', correctAnswer: '1/256', explanation: 'Pas die negatiewe-eksponentreël toe:\n4⁻⁴ = 1/4⁴ = 1/256 ✓' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 3⁻³?', answer: '1/27', checkMode: 'auto', correctAnswer: '1/27', explanation: '3⁻³ = 1/3³ = 1/27 ✓' },
        { difficulty: 'Medium', question: 'Bereken 9⁻² en gee jou antwoord as ʼn breuk.', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: '9⁻² = 1/9² = 1/81 ✓' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 4⁶ × 4⁻⁴.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n4⁶ × 4⁻⁴ = 4^(6 + (−4)) = 4² = 16 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 3⁻² × 3⁶.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n3⁻² × 3⁶ = 3^(−2 + 6) = 3⁴ = 81 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5³ × 5⁻⁶, en gee jou antwoord as ʼn breuk.', answer: '1/125', checkMode: 'auto', correctAnswer: '1/125', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n5³ × 5⁻⁶ = 5^(3 + (−6)) = 5⁻³ = 1/5³ = 1/125 ✓' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 9¹ ÷ 9⁻³.', answer: '6561', checkMode: 'auto', correctAnswer: '6561', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n9¹ ÷ 9⁻³ = 9^(1 − (−3)) = 9⁴ = 6561 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 6⁻¹ ÷ 6⁻⁴.', answer: '216', checkMode: 'auto', correctAnswer: '216', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n6⁻¹ ÷ 6⁻⁴ = 6^(−1 − (−4)) = 6³ = 216 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 2⁻² ÷ 2³, en gee jou antwoord as ʼn breuk.', answer: '1/32', checkMode: 'auto', correctAnswer: '1/32', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n2⁻² ÷ 2³ = 2^(−2 − 3) = 2⁻⁵ = 1/32 ✓' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (3⁻²)².', answer: '1/81', checkMode: 'auto', correctAnswer: '1/81', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(3⁻²)² = 3^(−2 × 2) = 3⁻⁴ = 1/81 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (2⁻¹)⁻⁴.', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(2⁻¹)⁻⁴ = 2^(−1 × −4) = 2⁴ = 16 ✓' },
        { difficulty: 'Hard', question: 'Bereken (4²)⁻², en gee jou antwoord as ʼn breuk.', answer: '1/256', checkMode: 'auto', correctAnswer: '1/256', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(4²)⁻² = 4^(2 × −2) = 4⁻⁴ = 1/256 ✓' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,0000031 in wetenskaplike notasie.', answer: '3,1 × 10⁻⁶', checkMode: 'auto', correctAnswer: '3,1 × 10⁻⁶', correctAnswers: ['3,1 × 10⁻⁶', '3,1×10⁻⁶', '3,1x10⁻⁶', '3,1 x 10⁻⁶', '3,1e-6'], explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000031 → 3,1\nNa regs skuif → negatiewe eksponent van −6\nAntwoord: 3,1 × 10⁻⁶ ✓' },
        { difficulty: 'Medium', question: 'Skryf 0,0000091 in wetenskaplike notasie.', answer: '9,1 × 10⁻⁶', checkMode: 'auto', correctAnswer: '9,1 × 10⁻⁶', correctAnswers: ['9,1 × 10⁻⁶', '9,1×10⁻⁶', '9,1x10⁻⁶', '9,1 x 10⁻⁶', '9,1e-6'], explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000091 → 9,1\nNa regs skuif → negatiewe eksponent van −6\nAntwoord: 9,1 × 10⁻⁶ ✓' },
        { difficulty: 'Hard', question: 'Thabo skryf 0,000029 in wetenskaplike notasie as 2,9 × 10⁻⁵. Kontroleer sy antwoord.', answer: 'Korrek — deur die desimaal 5 plekke na regs te skuif vanaf 0,000029 kry jy 2,9, wat 2,9 × 10⁻⁵ bevestig.', checkMode: 'self' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻² × 3⁵ ÷ 3⁻¹.', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n3⁻² × 3⁵ = 3^(−2 + 5) = 3³\n3³ ÷ 3⁻¹ = 3^(3 − (−1)) = 3⁴ = 81 ✓' },
        { difficulty: 'Hard', question: 'ʼn Bakterium het ʼn massa van 6 × 10⁻¹¹ gram. Bepaal die totale massa van 3 bakterieë in wetenskaplike notasie.', answer: '1,8 × 10⁻¹⁰ gram', checkMode: 'auto', correctAnswer: '1,8 × 10⁻¹⁰ gram', correctAnswers: ['1,8 × 10⁻¹⁰ gram', '1,8×10⁻¹⁰ gram', '1,8x10⁻¹⁰ gram', '1,8e-10 gram', '1,8 × 10⁻¹⁰'], explanation: 'Vermenigvuldig: 3 × (6 × 10⁻¹¹) = 18 × 10⁻¹¹\nPas aan na wetenskaplike notasie: 18 × 10⁻¹¹ = 1,8 × 10¹ × 10⁻¹¹ = 1,8 × 10⁻¹⁰ gram ✓' },
        { difficulty: 'Hard', question: 'Amahle sê 6⁻² × 6⁵ is gelyk aan 216. Is sy korrek? Verduidelik.', answer: 'Ja — deur die eksponente bymekaar te tel kry jy −2 + 5 = 3, dus 6⁻² × 6⁵ = 6³ = 216.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5⁻² × 5⁴ ÷ 5⁻¹.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n5⁻² × 5⁴ = 5^(−2 + 4) = 5²\n5² ÷ 5⁻¹ = 5^(2 − (−1)) = 5³ = 125 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het heelgetal-eksponente en wetenskaplike notasie bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 9, message: 'Goeie poging! Gaan negatiewe eksponente en die wette van eksponente weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Negatiewe eksponent → resiprook (V1-4)
        { difficulty: 'Easy', question: 'Vereenvoudig 10⁻³.', answer: '1/1000', checkMode: 'auto', correctAnswer: '1/1000', correctAnswers: ['1/1000', '0,001'], explanation: 'Pas a⁻ᵏ = 1/aᵏ toe:\n10⁻³ = 1/10³ = 1/1000 ✓' },
        { difficulty: 'Easy', question: 'Skryf 2⁻⁶ as ʼn breuk in eenvoudigste vorm.', answer: '1/64', checkMode: 'auto', correctAnswer: '1/64', explanation: 'Pas die negatiewe-eksponentreël toe:\n2⁻⁶ = 1/2⁶ = 1/64 ✓' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 5⁻²?', answer: '1/25', checkMode: 'auto', correctAnswer: '1/25', explanation: '5⁻² = 1/5² = 1/25 ✓' },
        { difficulty: 'Medium', question: 'Bereken 6⁻³ en gee jou antwoord as ʼn breuk.', answer: '1/216', checkMode: 'auto', correctAnswer: '1/216', explanation: '6⁻³ = 1/6³ = 1/216 ✓' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 7⁻³ × 7⁻¹.', answer: '1/2401', checkMode: 'auto', correctAnswer: '1/2401', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n7⁻³ × 7⁻¹ = 7^(−3 + (−1)) = 7⁻⁴ = 1/7⁴ = 1/2401 ✓' },
        { difficulty: 'Medium', question: 'Vereenvoudig 2⁵ × 2⁻⁸.', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n2⁵ × 2⁻⁸ = 2^(5 + (−8)) = 2⁻³ = 1/2³ = 1/8 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 9⁻¹ × 9⁻², en gee jou antwoord as ʼn breuk.', answer: '1/729', checkMode: 'auto', correctAnswer: '1/729', explanation: 'Dieselfde grondgetal — tel eksponente bymekaar:\n9⁻¹ × 9⁻² = 9^(−1 + (−2)) = 9⁻³ = 1/9³ = 1/729 ✓' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 9² ÷ 9⁻¹.', answer: '729', checkMode: 'auto', correctAnswer: '729', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n9² ÷ 9⁻¹ = 9^(2 − (−1)) = 9³ = 729 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 7³ ÷ 7⁻².', answer: '16807', checkMode: 'auto', correctAnswer: '16807', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n7³ ÷ 7⁻² = 7^(3 − (−2)) = 7⁵ = 16807 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻³ ÷ 3⁻¹, en gee jou antwoord as ʼn breuk.', answer: '1/9', checkMode: 'auto', correctAnswer: '1/9', explanation: 'Dieselfde grondgetal — trek eksponente van mekaar af:\n3⁻³ ÷ 3⁻¹ = 3^(−3 − (−1)) = 3⁻² = 1/9 ✓' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (6⁻¹)⁻².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(6⁻¹)⁻² = 6^(−1 × −2) = 6² = 36 ✓' },
        { difficulty: 'Hard', question: 'Vereenvoudig (10⁻²)².', answer: '1/10000', checkMode: 'auto', correctAnswer: '1/10000', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(10⁻²)² = 10^(−2 × 2) = 10⁻⁴ = 1/10000 ✓' },
        { difficulty: 'Hard', question: 'Bereken (5⁻²)⁻¹, en gee jou antwoord as ʼn heelgetal.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: 'Mag van ʼn mag — vermenigvuldig eksponente:\n(5⁻²)⁻¹ = 5^(−2 × −1) = 5² = 25 ✓' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,000000605 in wetenskaplike notasie.', answer: '6,05 × 10⁻⁷', checkMode: 'auto', correctAnswer: '6,05 × 10⁻⁷', correctAnswers: ['6,05 × 10⁻⁷', '6,05×10⁻⁷', '6,05x10⁻⁷', '6,05 x 10⁻⁷', '6,05e-7'], explanation: 'Skuif die desimaal 7 plekke na regs: 0,000000605 → 6,05\nNa regs skuif → negatiewe eksponent van −7\nAntwoord: 6,05 × 10⁻⁷ ✓' },
        { difficulty: 'Medium', question: 'Skryf 0,0000004 in wetenskaplike notasie.', answer: '4 × 10⁻⁷', checkMode: 'auto', correctAnswer: '4 × 10⁻⁷', correctAnswers: ['4 × 10⁻⁷', '4×10⁻⁷', '4x10⁻⁷', '4 x 10⁻⁷', '4e-7', '4,0 × 10⁻⁷'], explanation: 'Skuif die desimaal 7 plekke na regs: 0,0000004 → 4\nNa regs skuif → negatiewe eksponent van −7\nAntwoord: 4 × 10⁻⁷ ✓' },
        { difficulty: 'Hard', question: 'Lerato skryf 0,000625 in wetenskaplike notasie as 6,25 × 10⁻⁴. Kontroleer haar antwoord.', answer: 'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0,000625 kry jy 6,25, wat 6,25 × 10⁻⁴ bevestig.', checkMode: 'self' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 7² × 7⁻³ ÷ 7⁻².', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n7² × 7⁻³ = 7^(2 + (−3)) = 7⁻¹\n7⁻¹ ÷ 7⁻² = 7^(−1 − (−2)) = 7¹ = 7 ✓' },
        { difficulty: 'Hard', question: 'ʼn Haar het ʼn breedte van 8 × 10⁻⁵ meter. Bepaal die gesamentlike breedte van 200 hare langs mekaar geplaas, in wetenskaplike notasie.', answer: '1,6 × 10⁻² meter', checkMode: 'auto', correctAnswer: '1,6 × 10⁻² meter', correctAnswers: ['1,6 × 10⁻² meter', '1,6×10⁻² meter', '1,6x10⁻² meter', '1,6e-2 meter', '1,6 × 10⁻²', '1,6 × 10⁻² m'], explanation: 'Vermenigvuldig: 200 × (8 × 10⁻⁵) = 1600 × 10⁻⁵\nPas aan na wetenskaplike notasie: 1600 × 10⁻⁵ = 1,6 × 10³ × 10⁻⁵ = 1,6 × 10⁻² meter ✓' },
        { difficulty: 'Hard', question: 'Sipho sê 2⁻⁴ × 2⁶ is gelyk aan 4. Is hy korrek? Verduidelik.', answer: 'Ja — deur die eksponente bymekaar te tel kry jy −4 + 6 = 2, dus 2⁻⁴ × 2⁶ = 2² = 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vereenvoudig 6⁻³ × 6⁷ ÷ 6².', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Pas vermenigvuldig/deel met dieselfde grondgetal van links na regs toe:\n6⁻³ × 6⁷ = 6^(−3 + 7) = 6⁴\n6⁴ ÷ 6² = 6^(4 − 2) = 6² = 36 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het heelgetal-eksponente en wetenskaplike notasie bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — gaan enige gemiste vrae weer deur.' },
        { minScore: 9, message: 'Goeie poging! Gaan negatiewe eksponente en die wette van eksponente weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
