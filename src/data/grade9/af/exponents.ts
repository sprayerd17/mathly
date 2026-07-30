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
        `<p style="margin-bottom:16px;">In Graad 8 het jy die vyf wette van eksponente vir natuurlike getal-eksponente opgestel. Ons ${bl('brei')} nou hierdie wette uit om ${or('heelgetal (negatiewe) eksponente')} in te sluit. Die sleutelreël is ${or('a⁻ᵏ')} = ${bl('1 / aᵏ')} — ʼn ${or('negatiewe eksponent')} beteken jy neem die ${bl('resiprook')} van die grondtal verhef tot die positiewe weergawe van daardie eksponent. Die resultaat is altyd ʼn ${gr('positiewe breuk')} wanneer die grondtal groter as 1 is.</p>` +

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
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('5⁻¹')} = ${bl('1/5')} = ${gr('0,2')}</p>` +
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
            `Dieselfde grondtal — ${bl('tel die eksponente bymekaar')}: 5² × ${or('5⁻⁴')} = 5^(2 + (${or('−4')})) = ${bl('5⁻²')}`,
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
          checkMode: 'auto',
          options: ['1/9', '-9', '1/6', '9'],
          correctIndex: 0,
          explanation: 'Pas a⁻ᵏ = 1/aᵏ toe: 3⁻² = 1/3² = 1/9. (Die ander opsies verwar die negatiewe teken met ʼn negatiewe resultaat, vermenigvuldig die grondtal met die eksponent in plaas van dit tot die mag te verhef, of vergeet om die resiprook te neem.)',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 4³ × 4⁻⁵.',
          checkMode: 'auto',
          options: ['65536', '1/16', '-16', '1/8'],
          correctIndex: 1,
          explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 4³ × 4⁻⁵ = 4^(3 + (−5)) = 4⁻² = 1/4² = 1/16. (Die ander opsies tel die eksponente asof albei positief was, vergeet om die resiprook te neem, of vermenigvuldig die grondtal met die eksponent in plaas daarvan om dit te kwadreer.)',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê 2⁻⁴ = −16. Watter stelling evalueer 2⁻⁴ korrek en verduidelik sy fout?',
          checkMode: 'auto',
          options: [
            '2⁻⁴ = −16 — Sipho is korrek, aangesien die eksponent negatief is.',
            '2⁻⁴ = 16 — negatiewe eksponente word geïgnoreer sodra die grondtal genoeg gekwadreer is.',
            '2⁻⁴ = 1/16 — ʼn negatiewe eksponent beteken neem die resiprook, nie maak die waarde negatief nie.',
            '2⁻⁴ = −1/16 — die resiprook moet ook die negatiewe teken dra.',
          ],
          correctIndex: 2,
          explanation: 'ʼn Negatiewe eksponent beteken resiprook, nie negatiewe waarde nie: 2⁻⁴ = 1/2⁴ = 1/16. Sipho het die negatiewe teken op die eksponent verkeerdelik behandel asof dit die antwoord negatief maak.',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om die negatiewe-eksponentreël a⁻ᵏ = 1/aᵏ toe te pas met uitgewerkte voorbeelde',

      diagramPlaceholder:
        'Reeks wat 2³ tot by 2⁻² wys, elkeen gedeel deur 2, met die negatiewe-eksponent-blokke uitgelig om te wys dat hulle resiproke gee',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 150" width="100%" style="max-width:560px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="240" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Elke stap deel deur 2 — negatiewe eksponente gee resiproke</text>` +
        `<rect x="21" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="50" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2³</text>` +
        `<text x="50" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">8</text>` +
        `<rect x="97" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="126" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2²</text>` +
        `<text x="126" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">4</text>` +
        `<rect x="173" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="202" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2¹</text>` +
        `<text x="202" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">2</text>` +
        `<rect x="249" y="62" width="58" height="36" rx="4" fill="rgba(15,31,61,0.05)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="278" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">2⁰</text>` +
        `<text x="278" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">1</text>` +
        `<rect x="325" y="62" width="58" height="36" rx="4" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="354" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">2⁻¹</text>` +
        `<text x="354" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">1/2</text>` +
        `<rect x="401" y="62" width="58" height="36" rx="4" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="430" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">2⁻²</text>` +
        `<text x="430" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">1/4</text>` +
        `<line x1="82" y1="80" x2="94" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="94,80 88,77 88,83" fill="#6b7280"/>` +
        `<text x="88" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="158" y1="80" x2="170" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="170,80 164,77 164,83" fill="#6b7280"/>` +
        `<text x="164" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="234" y1="80" x2="246" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="246,80 240,77 240,83" fill="#6b7280"/>` +
        `<text x="240" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="310" y1="80" x2="322" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="322,80 316,77 316,83" fill="#6b7280"/>` +
        `<text x="316" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="386" y1="80" x2="398" y2="80" stroke="#6b7280" stroke-width="1.5"/><polygon points="398,80 392,77 392,83" fill="#6b7280"/>` +
        `<text x="392" y="72" text-anchor="middle" font-size="7" fill="#6b7280">÷2</text>` +
        `<line x1="325" y1="104" x2="459" y2="104" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="325" y1="104" x2="325" y2="108" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="459" y1="104" x2="459" y2="108" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="392" y="120" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">negatiewe eksponent → resiprook</text>` +
        `</svg>`,
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
          question: 'Skryf 0,00045 in wetenskaplike notasie.',
          answer: `0,00045 = ${gr('4,5 × 10⁻⁴')}`,
          steps: [
            `${bl('Skuif die desimale punt na regs')} totdat jy ʼn getal tussen 1 en 10 kry: 0,00045 → 4,5 (${bl('4 plekke na regs')} geskuif)`,
            `Aangesien ons die desimaal na regs geskuif het, is die eksponent ${or('negatief')}: die eksponent is ${or('−4')}`,
            `<strong>Antwoord:</strong> 0,00045 = ${gr('4,5 × 10⁻⁴')} ✓`,
          ],
        },
        {
          question: 'Sipho skryf 0,0072 in wetenskaplike notasie as 7,2 × 10⁻³. Kontroleer sy antwoord.',
          answer: `${gr('7,2 × 10⁻³')} is korrek`,
          steps: [
            `${bl('Skuif die desimale punt na regs')} vanaf 0,0072 totdat jy ʼn getal tussen 1 en 10 kry: 0,0072 → 7,2 (${bl('3 plekke na regs')} geskuif)`,
            `Aangesien ons die desimaal na regs geskuif het, is die eksponent ${or('negatief')}: die eksponent is ${or('−3')}`,
            `Sipho het ${gr('7,2 × 10⁻³')} geskryf — dit stem ooreen. Sy antwoord is ${gr('korrek')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 0,0036 in wetenskaplike notasie.',
          checkMode: 'auto',
          options: ['3,6 × 10⁻³', '3,6 × 10³', '36 × 10⁻⁴', '3,6 × 10⁻⁴'],
          correctIndex: 0,
          explanation: 'Skuif die desimaal 3 plekke na regs: 0,0036 → 3,6. Na regs skuif gee ʼn negatiewe eksponent: 3,6 × 10⁻³. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skryf 0,000089 in wetenskaplike notasie.',
          checkMode: 'auto',
          options: ['8,9 × 10⁻⁵', '8,9 × 10⁵', '89 × 10⁻⁶', '8,9 × 10⁻⁴'],
          correctIndex: 0,
          explanation: 'Skuif die desimaal 5 plekke na regs: 0,000089 → 8,9. Na regs skuif gee ʼn negatiewe eksponent: 8,9 × 10⁻⁵. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato skakel 0,00056 om na wetenskaplike notasie en kry 5,6 × 10⁻⁴. Watter stelling kontroleer haar antwoord korrek?',
          checkMode: 'auto',
          options: [
            'Verkeerd — die eksponent moet positief wees, wat 5,6 × 10⁴ gee.',
            'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0,00056 kry jy 5,6, dus is 5,6 × 10⁻⁴ reg.',
            'Verkeerd — deur die desimaal slegs 3 plekke te skuif kry jy 5,6 × 10⁻³.',
            'Verkeerd — die voorste getal moet 0,56 wees, wat 0,56 × 10⁻³ gee.',
          ],
          correctIndex: 1,
          explanation: 'Deur die desimale punt 4 plekke na regs te skuif vanaf 0,00056 kry jy 5,6, en na regs skuif gee ʼn negatiewe eksponent van −4, dus is 5,6 × 10⁻⁴ korrek.',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om klein desimale getalle na wetenskaplike notasie om te skakel deur negatiewe eksponente te gebruik',

      diagramPlaceholder:
        'Die desimale punt in 0,00045 wat 4 plekke na regs spring om as 4,5 × 10⁻⁴ te land',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#0f1f3d">Skuif die desimale punt na regs gee ʼn negatiewe eksponent</text>` +
        `<text x="20" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="34" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#ea580c">,</text>` +
        `<text x="48" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="62" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="76" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">0</text>` +
        `<text x="90" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">4</text>` +
        `<text x="104" y="40" font-family="monospace" font-size="20" font-weight="700" fill="#374151">5</text>` +
        `<path d="M34,44 Q42.75,24 51.5,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M51.5,44 Q60.25,24 69,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M69,44 Q77.5,24 86.5,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<path d="M86.5,44 Q95.25,24 104,44" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="104,44 98,40 98,48" fill="#ea580c"/>` +
        `<text x="69" y="66" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">4 plekke na regs</text>` +
        `<text x="130" y="98" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">4,5 × 10⁻⁴</text>` +
        `<text x="130" y="115" text-anchor="middle" font-size="9" fill="#6b7280">0,00045 in wetenskaplike notasie</text>` +
        `</svg>`,
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
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig dieselfde grondtal:')} aᵐ × aⁿ = a^(m+n) — <em>tel</em> die eksponente bymekaar</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Deel dieselfde grondtal:')} aᵐ ÷ aⁿ = a^(m−n) — <em>trek</em> die eksponente van mekaar af</p>` +
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
            `${bl('Deel-dieselfde-grondtal-reël:')} trek die eksponente van mekaar af: 4³ ÷ ${or('4⁻²')} = 4^(3 − (${or('−2')})) = 4^(3 + 2) = ${bl('4⁵')}`,
            `Bereken: 4⁵ = 4 × 4 × 4 × 4 × 4 = 1024`,
            `<strong>Antwoord:</strong> 4³ ÷ ${or('4⁻²')} = ${gr('1024')} ✓`,
          ],
        },
        {
          question: 'Lerato bereken die massa van ʼn virus as 2 × 10⁻⁷ gram. As sy 5 virusse het, bepaal die totale massa in wetenskaplike notasie.',
          answer: `Totale massa = ${gr('1 × 10⁻⁶ gram')}`,
          steps: [
            `Vermenigvuldig: 5 × (2 × ${or('10⁻⁷')}) = (5 × 2) × ${or('10⁻⁷')} = 10 × ${or('10⁻⁷')}`,
            `${bl('Vermenigvuldig dieselfde grondtal:')} 10 × ${or('10⁻⁷')} = 10¹ × ${or('10⁻⁷')} = 10^(1 + (${or('−7')})) = ${bl('10⁻⁶')}`,
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
          checkMode: 'auto',
          options: ['1/2', '-64', '1/64', '64'],
          correctIndex: 2,
          explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (2⁻³)² = 2^(−3 × 2) = 2⁻⁶ = 1/64. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om dit te vermenigvuldig, los die resiprookstap uit, of ignoreer die negatiewe teken heeltemal.)',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 6² ÷ 6⁻¹.',
          checkMode: 'auto',
          options: ['6', '1/36', '36', '216'],
          correctIndex: 3,
          explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 6² ÷ 6⁻¹ = 6^(2 − (−1)) = 6³ = 216. (Die ander opsies vergeet om die teken om te draai wanneer ʼn negatiewe getal afgetrek word, vermenigvuldig die eksponente in plaas daarvan om af te trek, of maak ʼn fout met die mag.)',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê 5⁰ = 5. Watter stelling evalueer 5⁰ korrek?',
          checkMode: 'auto',
          options: [
            'Hy is verkeerd — enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 5⁰ = 1.',
            'Hy is korrek — 5⁰ = 5, want enige getal tot die mag 0 bly dieselfde.',
            'Hy is verkeerd — 5⁰ = 0, want enigiets tot die mag 0 is nul.',
            'Hy is verkeerd — 5⁰ is ongedefinieerd vir nie-nul grondtalle.',
          ],
          correctIndex: 0,
          explanation: 'Enige nie-nul getal tot die mag 0 is gelyk aan 1, dus 5⁰ = 1, nie 5 of 0 nie.',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Bakterium het ʼn massa van 3 × 10⁻¹² gram. Bepaal die totale massa van 4 bakterieë in wetenskaplike notasie.',
          checkMode: 'auto',
          options: ['12 × 10⁻¹² gram', '1,2 × 10⁻¹¹ gram', '1,2 × 10⁻¹² gram', '1,2 × 10⁻¹³ gram'],
          correctIndex: 1,
          explanation: 'Vermenigvuldig: 4 × (3 × 10⁻¹²) = 12 × 10⁻¹². Pas aan na wetenskaplike notasie: 12 × 10⁻¹² = 1,2 × 10¹ × 10⁻¹² = 1,2 × 10⁻¹¹ gram. (Die ander opsies laat die voorste getal buite 1–10, of verskuif die eksponent in die verkeerde rigting.)',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vereenvoudig 7⁻¹ × 7³.',
          checkMode: 'auto',
          options: ['1/343', '2401', '49', '7'],
          correctIndex: 2,
          explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 7⁻¹ × 7³ = 7^(−1 + 3) = 7² = 49. (Die ander opsies vermenigvuldig die eksponente in plaas daarvan om dit bymekaar te tel, ignoreer die negatiewe teken, of maak ʼn foutjie met die mag.)',
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê (3⁻¹)⁻² is gelyk aan 9. Watter stelling evalueer (3⁻¹)⁻² korrek?',
          checkMode: 'auto',
          options: [
            'Sy is verkeerd — (3⁻¹)⁻² = 3^(−1 + −2) = 3⁻³ = 1/27.',
            'Sy is verkeerd — die twee negatiewe eksponente kanselleer om 3⁰ = 1 te gee.',
            'Sy is verkeerd — (3⁻¹)⁻² = −9, aangesien een negatiewe teken moet oorbly.',
            'Sy is korrek — (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9.',
          ],
          correctIndex: 3,
          explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (3⁻¹)⁻² = 3^(−1 × −2) = 3² = 9. Amahle is korrek.',
        },

        // ── Q13 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig 10⁻³ × 10⁵ ÷ 10⁻¹.',
          checkMode: 'auto',
          options: ['1000', '10', '1/1000', '100'],
          correctIndex: 0,
          explanation: 'Werk van links na regs: 10⁻³ × 10⁵ = 10^(−3 + 5) = 10². Dan 10² ÷ 10⁻¹ = 10^(2 − (−1)) = 10³ = 1000. (Die ander opsies vergeet om die teken om te draai by deling deur ʼn negatiewe eksponent, keer die finale antwoord om, of maak ʼn fout met die mag.)',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sandkorrel het ʼn massa van ongeveer 5 × 10⁻⁵ gram. Bepaal die massa van 1000 sandkorrels in wetenskaplike notasie.',
          checkMode: 'auto',
          options: ['5 × 10⁻⁸ gram', '5 × 10⁻² gram', '5 × 10⁻³ gram', '5000 × 10⁻⁵ gram'],
          correctIndex: 1,
          explanation: 'Vermenigvuldig: 1000 × (5 × 10⁻⁵) = 5 × 10³ × 10⁻⁵ = 5 × 10^(3 + (−5)) = 5 × 10⁻² gram. (Die ander opsies trek die eksponente af in plaas daarvan om dit bymekaar te tel, tel die mag van 10 in 1000 verkeerd, of laat die antwoord onaangepas na wetenskaplike notasie.)',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê negatiewe eksponente maak altyd ʼn getal kleiner as 1. Watter stelling verduidelik die beste of hy korrek is?',
          checkMode: 'auto',
          options: [
            'Ja, altyd — ʼn negatiewe eksponent maak enige getal kleiner as 1, ongeag die grondtal.',
            'Nee — ʼn negatiewe eksponent maak die resultaat altyd negatief, nie noodwendig kleiner as 1 nie.',
            'Ja, mits die grondtal groter as 1 is — ʼn negatiewe eksponent gee ʼn resiprook, wat ʼn breuk kleiner as 1 is wanneer die grondtal groter as 1 is.',
            'Nee — die grootte van die resultaat hang nooit af van die teken van die eksponent nie, slegs van die grondtal.',
          ],
          correctIndex: 2,
          explanation: 'ʼn Negatiewe eksponent beteken neem die resiprook: a⁻ᵏ = 1/aᵏ. As a > 1, dan is aᵏ > 1, dus is die resiprook 1/aᵏ ʼn breuk kleiner as 1 — maar dit hang af van die voorwaarde dat die grondtal groter as 1 is, dus benodig Sipho se bewering daardie voorwaarde.',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om al die wette van eksponente, insluitend negatiewe eksponente, in berekeninge en werklike-lewe-probleme toe te pas',
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
        { difficulty: 'Easy', question: 'Vereenvoudig 2⁻⁴.', checkMode: 'auto', options: ['1/16', '-16', '1/8', '16'], correctIndex: 0, explanation: 'Pas a⁻ᵏ = 1/aᵏ toe: 2⁻⁴ = 1/2⁴ = 1/16. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Skryf 5⁻³ as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', options: ['-125', '1/125', '1/15', '125'], correctIndex: 1, explanation: 'Pas die negatiewe-eksponentreël toe: 5⁻³ = 1/5³ = 1/125. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 10⁻²?', checkMode: 'auto', options: ['-100', '1/20', '1/100', '100'], correctIndex: 2, explanation: '10⁻² = 1/10² = 1/100. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Medium', question: 'Bereken 6⁻² en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['-36', '1/12', '36', '1/36'], correctIndex: 3, explanation: '6⁻² = 1/6² = 1/36. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 3⁵ × 3⁻².', checkMode: 'auto', options: ['27', '2187', '1/59049', '1/27'], correctIndex: 0, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 3⁵ × 3⁻² = 3^(5 + (−2)) = 3³ = 27. (Die ander opsies tel die eksponente asof albei positief was, vermenigvuldig die eksponente in plaas daarvan om dit bymekaar te tel, of draai die teken van die verkeerde eksponent om.)' },
        { difficulty: 'Medium', question: 'Vereenvoudig 2⁻³ × 2⁷.', checkMode: 'auto', options: ['1024', '16', '1/1024', '-16'], correctIndex: 1, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 2⁻³ × 2⁷ = 2^(−3 + 7) = 2⁴ = 16. (Die ander opsies tel die eksponente asof albei positief was, trek af in plaas daarvan om bymekaar te tel, of pas ʼn negatiewe teken verkeerdelik op die finale antwoord toe.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 6⁴ × 6⁻⁶, en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['36', '-36', '1/36', '1/12'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 6⁴ × 6⁻⁶ = 6^(4 + (−6)) = 6⁻² = 1/6² = 1/36. (Die ander opsies keer die aftrekkingsvolgorde om, vergeet om die resiprook te neem nadat ʼn negatiewe eksponent gevind is, of bereken 6² verkeerdelik as 12 in plaas van 36.)' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 5² ÷ 5⁻³.', checkMode: 'auto', options: ['1/5', '1/15625', '1/3125', '3125'], correctIndex: 3, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 5² ÷ 5⁻³ = 5^(2 − (−3)) = 5⁵ = 3125. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 7⁻² ÷ 7⁻⁵.', checkMode: 'auto', options: ['343', '1/823543', '282475249', '1/343'], correctIndex: 0, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 7⁻² ÷ 7⁻⁵ = 7^(−2 − (−5)) = 7³ = 343. (Die ander opsies vergeet om die teken van die tweede negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻¹ ÷ 3², en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['3', '1/27', '1/9', '27'], correctIndex: 1, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 3⁻¹ ÷ 3² = 3^(−1 − 2) = 3⁻³ = 1/27. (Die ander opsies tel bymekaar in plaas daarvan om af te trek, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die aftrekkingsvolgorde om.)' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (6⁻²)².', checkMode: 'auto', options: ['1', '1296', '1/1296', '36'], correctIndex: 2, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (6⁻²)² = 6^(−2 × 2) = 6⁻⁴ = 1/1296. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, laat die negatiewe teken weg, of gebruik slegs die buitenste eksponent en ignoreer die binneste.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (5⁻¹)⁻³.', checkMode: 'auto', options: ['1/625', '1/125', '15', '125'], correctIndex: 3, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (5⁻¹)⁻³ = 5^(−1 × −3) = 5³ = 125. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, hanteer een van die negatiewe tekens verkeerd, of bereken 5³ verkeerd.)' },
        { difficulty: 'Hard', question: 'Bereken (3²)⁻², en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['1/81', '1', '81', '1/9'], correctIndex: 0, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (3²)⁻² = 3^(2 × −2) = 3⁻⁴ = 1/81. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, laat die negatiewe teken weg, of ignoreer die binneste eksponent.)' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,00052 in wetenskaplike notasie.', checkMode: 'auto', options: ['5,2 × 10⁴', '5,2 × 10⁻⁴', '52 × 10⁻⁵', '5,2 × 10⁻³'], correctIndex: 1, explanation: 'Skuif die desimaal 4 plekke na regs: 0,00052 → 5,2. Na regs skuif gee ʼn negatiewe eksponent: 5,2 × 10⁻⁴. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Medium', question: 'Skryf 0,0000078 in wetenskaplike notasie.', checkMode: 'auto', options: ['7,8 × 10⁶', '78 × 10⁻⁷', '7,8 × 10⁻⁶', '7,8 × 10⁻⁵'], correctIndex: 2, explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000078 → 7,8. Na regs skuif gee ʼn negatiewe eksponent: 7,8 × 10⁻⁶. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Hard', question: 'Zanele skryf 0,000416 in wetenskaplike notasie as 4,16 × 10⁻⁴. Watter stelling kontroleer haar antwoord korrek?', checkMode: 'auto', options: ['Verkeerd — die eksponent moet positief wees, wat 4,16 × 10⁴ gee.', 'Verkeerd — deur die desimaal slegs 3 plekke te skuif kry jy 4,16 × 10⁻³.', 'Verkeerd — die voorste getal moet 41,6 wees, wat 41,6 × 10⁻⁵ gee.', 'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0,000416 kry jy 4,16, wat 4,16 × 10⁻⁴ bevestig.'], correctIndex: 3, explanation: 'Deur die desimaal 4 plekke na regs te skuif vanaf 0,000416 kry jy 4,16, en na regs skuif gee ʼn negatiewe eksponent van −4, dus is 4,16 × 10⁻⁴ korrek.' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 2⁷ × 2⁻⁴ ÷ 2².', checkMode: 'auto', options: ['2', '512', '32', '8'], correctIndex: 0, explanation: 'Werk van links na regs: 2⁷ × 2⁻⁴ = 2^(7 + (−4)) = 2³. Dan 2³ ÷ 2² = 2^(3 − 2) = 2¹ = 2. (Die ander opsies ignoreer die negatiewe teken in die eerste stap, tel bymekaar in plaas daarvan om af te trek in die tweede stap, of vergeet die delingstap heeltemal.)' },
        { difficulty: 'Hard', question: 'ʼn Huidsel het ʼn massa van 3 × 10⁻⁸ gram. Bepaal die totale massa van 5 huidselle in wetenskaplike notasie.', checkMode: 'auto', options: ['15 × 10⁻⁸ gram', '1,5 × 10⁻⁷ gram', '1,5 × 10⁻⁹ gram', '8 × 10⁻⁸ gram'], correctIndex: 1, explanation: 'Vermenigvuldig: 5 × (3 × 10⁻⁸) = 15 × 10⁻⁸. Pas aan na wetenskaplike notasie: 15 × 10⁻⁸ = 1,5 × 10¹ × 10⁻⁸ = 1,5 × 10⁻⁷ gram. (Die ander opsies laat die voorste getal buite 1–10, verskuif die eksponent in die verkeerde rigting, of tel die voorste getalle bymekaar in plaas daarvan om te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Karabo sê 4⁻¹ × 4⁰ × 4³ vereenvoudig tot 4². Watter stelling evalueer dit korrek?', checkMode: 'auto', options: ['Hy is verkeerd — ʼn nul-eksponent maak die hele produk nul, dus is die antwoord 0.', 'Hy is verkeerd — die eksponente moet vermenigvuldig word, nie bymekaar getel word nie, wat 4⁰ = 1 gee.', 'Hy is korrek — deur die eksponente bymekaar te tel kry jy −1 + 0 + 3 = 2, dus 4⁻¹ × 4⁰ × 4³ = 4² = 16.', 'Hy is verkeerd — 4⁻¹ maak die hele uitdrukking negatief, dus is die antwoord −4².'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: −1 + 0 + 3 = 2, dus 4⁻¹ × 4⁰ × 4³ = 4² = 16. Karabo is korrek.' },
        { difficulty: 'Hard', question: 'Vereenvoudig 10⁻³ × 10⁶ ÷ 10².', checkMode: 'auto', options: ['10000000', '100000', '1000', '10'], correctIndex: 3, explanation: 'Werk van links na regs: 10⁻³ × 10⁶ = 10^(−3 + 6) = 10³. Dan 10³ ÷ 10² = 10^(3 − 2) = 10¹ = 10. (Die ander opsies ignoreer die negatiewe teken in die eerste stap, tel bymekaar in plaas daarvan om af te trek in die tweede stap, of vergeet die delingstap heeltemal.)' },
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
        { difficulty: 'Easy', question: 'Vereenvoudig 8⁻².', checkMode: 'auto', options: ['1/64', '-64', '1/16', '64'], correctIndex: 0, explanation: 'Pas a⁻ᵏ = 1/aᵏ toe: 8⁻² = 1/8² = 1/64. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Skryf 4⁻⁴ as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', options: ['-256', '1/256', '1/16', '256'], correctIndex: 1, explanation: 'Pas die negatiewe-eksponentreël toe: 4⁻⁴ = 1/4⁴ = 1/256. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 3⁻³?', checkMode: 'auto', options: ['-27', '1/9', '1/27', '27'], correctIndex: 2, explanation: '3⁻³ = 1/3³ = 1/27. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Medium', question: 'Bereken 9⁻² en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['-81', '1/18', '81', '1/81'], correctIndex: 3, explanation: '9⁻² = 1/9² = 1/81. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 4⁶ × 4⁻⁴.', checkMode: 'auto', options: ['16', '1048576', '1/16', '-16'], correctIndex: 0, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 4⁶ × 4⁻⁴ = 4^(6 + (−4)) = 4² = 16. (Die ander opsies tel die eksponente asof albei positief was, draai die teken van die verkeerde eksponent om, of pas ʼn negatiewe teken verkeerdelik op die finale antwoord toe.)' },
        { difficulty: 'Medium', question: 'Vereenvoudig 3⁻² × 3⁶.', checkMode: 'auto', options: ['6561', '81', '1/6561', '-81'], correctIndex: 1, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 3⁻² × 3⁶ = 3^(−2 + 6) = 3⁴ = 81. (Die ander opsies tel die eksponente asof albei positief was, trek af in plaas daarvan om bymekaar te tel, of pas ʼn negatiewe teken verkeerdelik op die finale antwoord toe.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5³ × 5⁻⁶, en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['125', '-125', '1/125', '1/15'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 5³ × 5⁻⁶ = 5^(3 + (−6)) = 5⁻³ = 1/5³ = 1/125. (Die ander opsies keer die aftrekkingsvolgorde om, vergeet om die resiprook te neem nadat ʼn negatiewe eksponent gevind is, of bereken 5³ verkeerd.)' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 9¹ ÷ 9⁻³.', checkMode: 'auto', options: ['1/81', '1/729', '1/6561', '6561'], correctIndex: 3, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 9¹ ÷ 9⁻³ = 9^(1 − (−3)) = 9⁴ = 6561. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 6⁻¹ ÷ 6⁻⁴.', checkMode: 'auto', options: ['216', '1/7776', '1296', '1/216'], correctIndex: 0, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 6⁻¹ ÷ 6⁻⁴ = 6^(−1 − (−4)) = 6³ = 216. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 2⁻² ÷ 2³, en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['2', '1/32', '1/64', '32'], correctIndex: 1, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 2⁻² ÷ 2³ = 2^(−2 − 3) = 2⁻⁵ = 1/32. (Die ander opsies tel bymekaar in plaas daarvan om af te trek, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die aftrekkingsvolgorde om.)' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (3⁻²)².', checkMode: 'auto', options: ['1', '81', '1/81', '9'], correctIndex: 2, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (3⁻²)² = 3^(−2 × 2) = 3⁻⁴ = 1/81. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, laat die negatiewe teken weg, of gebruik slegs die buitenste eksponent en ignoreer die binneste.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (2⁻¹)⁻⁴.', checkMode: 'auto', options: ['1/32', '1/16', '8', '16'], correctIndex: 3, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (2⁻¹)⁻⁴ = 2^(−1 × −4) = 2⁴ = 16. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, hanteer een van die negatiewe tekens verkeerd, of bereken 2⁴ verkeerd.)' },
        { difficulty: 'Hard', question: 'Bereken (4²)⁻², en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['1/256', '1', '256', '1/16'], correctIndex: 0, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (4²)⁻² = 4^(2 × −2) = 4⁻⁴ = 1/256. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, laat die negatiewe teken weg, of ignoreer die binneste eksponent.)' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,0000031 in wetenskaplike notasie.', checkMode: 'auto', options: ['3,1 × 10⁶', '3,1 × 10⁻⁶', '31 × 10⁻⁷', '3,1 × 10⁻⁵'], correctIndex: 1, explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000031 → 3,1. Na regs skuif gee ʼn negatiewe eksponent: 3,1 × 10⁻⁶. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Medium', question: 'Skryf 0,0000091 in wetenskaplike notasie.', checkMode: 'auto', options: ['9,1 × 10⁶', '91 × 10⁻⁷', '9,1 × 10⁻⁶', '9,1 × 10⁻⁵'], correctIndex: 2, explanation: 'Skuif die desimaal 6 plekke na regs: 0,0000091 → 9,1. Na regs skuif gee ʼn negatiewe eksponent: 9,1 × 10⁻⁶. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Hard', question: 'Thabo skryf 0,000029 in wetenskaplike notasie as 2,9 × 10⁻⁵. Watter stelling kontroleer sy antwoord korrek?', checkMode: 'auto', options: ['Verkeerd — die eksponent moet positief wees, wat 2,9 × 10⁵ gee.', 'Verkeerd — deur die desimaal slegs 4 plekke te skuif kry jy 2,9 × 10⁻⁴.', 'Verkeerd — die voorste getal moet 29 wees, wat 29 × 10⁻⁶ gee.', 'Korrek — deur die desimaal 5 plekke na regs te skuif vanaf 0,000029 kry jy 2,9, wat 2,9 × 10⁻⁵ bevestig.'], correctIndex: 3, explanation: 'Deur die desimaal 5 plekke na regs te skuif vanaf 0,000029 kry jy 2,9, en na regs skuif gee ʼn negatiewe eksponent van −5, dus is 2,9 × 10⁻⁵ korrek.' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻² × 3⁵ ÷ 3⁻¹.', checkMode: 'auto', options: ['81', '9', '6561', '27'], correctIndex: 0, explanation: 'Werk van links na regs: 3⁻² × 3⁵ = 3^(−2 + 5) = 3³. Dan 3³ ÷ 3⁻¹ = 3^(3 − (−1)) = 3⁴ = 81. (Die ander opsies vergeet om die teken in die delingstap om te draai, ignoreer die negatiewe teken in die eerste stap, of vergeet die delingstap heeltemal.)' },
        { difficulty: 'Hard', question: 'ʼn Bakterium het ʼn massa van 6 × 10⁻¹¹ gram. Bepaal die totale massa van 3 bakterieë in wetenskaplike notasie.', checkMode: 'auto', options: ['18 × 10⁻¹¹ gram', '1,8 × 10⁻¹⁰ gram', '1,8 × 10⁻¹² gram', '9 × 10⁻¹¹ gram'], correctIndex: 1, explanation: 'Vermenigvuldig: 3 × (6 × 10⁻¹¹) = 18 × 10⁻¹¹. Pas aan na wetenskaplike notasie: 18 × 10⁻¹¹ = 1,8 × 10¹ × 10⁻¹¹ = 1,8 × 10⁻¹⁰ gram. (Die ander opsies laat die voorste getal buite 1–10, verskuif die eksponent in die verkeerde rigting, of tel die voorste getalle bymekaar in plaas daarvan om te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Amahle sê 6⁻² × 6⁵ is gelyk aan 216. Watter stelling evalueer dit korrek?', checkMode: 'auto', options: ['Sy is verkeerd — die eksponente moet vermenigvuldig word, wat 6⁻¹⁰ gee.', 'Sy is verkeerd — ʼn negatiewe eksponent maak die hele produk negatief, dus is die antwoord −216.', 'Sy is korrek — deur die eksponente bymekaar te tel kry jy −2 + 5 = 3, dus 6⁻² × 6⁵ = 6³ = 216.', 'Sy is verkeerd — die antwoord moet ʼn breuk wees, 1/216, aangesien een eksponent negatief is.'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: −2 + 5 = 3, dus 6⁻² × 6⁵ = 6³ = 216. Amahle is korrek.' },
        { difficulty: 'Hard', question: 'Vereenvoudig 5⁻² × 5⁴ ÷ 5⁻¹.', checkMode: 'auto', options: ['5', '78125', '25', '125'], correctIndex: 3, explanation: 'Werk van links na regs: 5⁻² × 5⁴ = 5^(−2 + 4) = 5². Dan 5² ÷ 5⁻¹ = 5^(2 − (−1)) = 5³ = 125. (Die ander opsies vergeet om die teken in die delingstap om te draai, ignoreer die negatiewe teken in die eerste stap, of vergeet die delingstap heeltemal.)' },
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
        { difficulty: 'Easy', question: 'Vereenvoudig 10⁻³.', checkMode: 'auto', options: ['1/1000', '-1000', '1/30', '1000'], correctIndex: 0, explanation: 'Pas a⁻ᵏ = 1/aᵏ toe: 10⁻³ = 1/10³ = 1/1000. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Skryf 2⁻⁶ as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', options: ['-64', '1/64', '1/12', '64'], correctIndex: 1, explanation: 'Pas die negatiewe-eksponentreël toe: 2⁻⁶ = 1/2⁶ = 1/64. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Easy', question: 'Wat is die waarde van 5⁻²?', checkMode: 'auto', options: ['-25', '1/10', '1/25', '25'], correctIndex: 2, explanation: '5⁻² = 1/5² = 1/25. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },
        { difficulty: 'Medium', question: 'Bereken 6⁻³ en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['-216', '1/18', '216', '1/216'], correctIndex: 3, explanation: '6⁻³ = 1/6³ = 1/216. (Die ander opsies draai die teken om, vermenigvuldig die grondtal met die eksponent, of vergeet die resiprook.)' },

        // Blok 2 — Vermenigvuldigingswet met negatiewe eksponente (V5-7)
        { difficulty: 'Medium', question: 'Vereenvoudig 7⁻³ × 7⁻¹.', checkMode: 'auto', options: ['1/2401', '2401', '1/49', '343'], correctIndex: 0, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 7⁻³ × 7⁻¹ = 7^(−3 + (−1)) = 7⁻⁴ = 1/7⁴ = 1/2401. (Die ander opsies vergeet die resiprook, trek af in plaas daarvan om bymekaar te tel, of vermenigvuldig die eksponente in plaas daarvan om dit bymekaar te tel.)' },
        { difficulty: 'Medium', question: 'Vereenvoudig 2⁵ × 2⁻⁸.', checkMode: 'auto', options: ['8192', '1/8', '-8', '1/6'], correctIndex: 1, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 2⁵ × 2⁻⁸ = 2^(5 + (−8)) = 2⁻³ = 1/2³ = 1/8. (Die ander opsies tel die eksponente asof albei positief was, vergeet die resiprook, of bereken 2³ verkeerd.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 9⁻¹ × 9⁻², en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['729', '9', '1/729', '81'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: 9⁻¹ × 9⁻² = 9^(−1 + (−2)) = 9⁻³ = 1/9³ = 1/729. (Die ander opsies vergeet die resiprook, trek af in plaas daarvan om bymekaar te tel, of vermenigvuldig die eksponente in plaas daarvan om dit bymekaar te tel.)' },

        // Blok 3 — Delingswet met negatiewe eksponente (V8-10)
        { difficulty: 'Medium', question: 'Vereenvoudig 9² ÷ 9⁻¹.', checkMode: 'auto', options: ['9', '1/81', '1/729', '729'], correctIndex: 3, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 9² ÷ 9⁻¹ = 9^(2 − (−1)) = 9³ = 729. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Medium', question: 'Bepaal die waarde van 7³ ÷ 7⁻².', checkMode: 'auto', options: ['16807', '7', '1/117649', '1/16807'], correctIndex: 0, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 7³ ÷ 7⁻² = 7^(3 − (−2)) = 7⁵ = 16807. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die volgorde om en gee die resiprook.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig 3⁻³ ÷ 3⁻¹, en gee jou antwoord as ʼn breuk.', checkMode: 'auto', options: ['1/81', '1/9', '27', '9'], correctIndex: 1, explanation: 'Dieselfde grondtal — trek die eksponente van mekaar af: 3⁻³ ÷ 3⁻¹ = 3^(−3 − (−1)) = 3⁻² = 1/9. (Die ander opsies vergeet om die teken van die negatiewe eksponent om te draai, vermenigvuldig die eksponente in plaas daarvan om af te trek, of keer die aftrekkingsvolgorde om.)' },

        // Blok 4 — Mag van ʼn mag met negatiewe eksponente (V11-13)
        { difficulty: 'Medium', question: 'Vereenvoudig (6⁻¹)⁻².', checkMode: 'auto', options: ['1/216', '1/36', '36', '12'], correctIndex: 2, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (6⁻¹)⁻² = 6^(−1 × −2) = 6² = 36. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, hanteer een van die negatiewe tekens verkeerd, of bereken 6² verkeerd.)' },
        { difficulty: 'Hard', question: 'Vereenvoudig (10⁻²)².', checkMode: 'auto', options: ['1', '10000', '1/100', '1/10000'], correctIndex: 3, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (10⁻²)² = 10^(−2 × 2) = 10⁻⁴ = 1/10000. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, laat die negatiewe teken weg, of gebruik slegs die buitenste eksponent en ignoreer die binneste.)' },
        { difficulty: 'Hard', question: 'Bereken (5⁻²)⁻¹, en gee jou antwoord as ʼn heelgetal.', checkMode: 'auto', options: ['25', '1/125', '1/25', '10'], correctIndex: 0, explanation: 'Mag van ʼn mag — vermenigvuldig die eksponente: (5⁻²)⁻¹ = 5^(−2 × −1) = 5² = 25. (Die ander opsies tel die eksponente bymekaar in plaas daarvan om te vermenigvuldig, hanteer een van die negatiewe tekens verkeerd, of bereken 5² verkeerd.)' },

        // Blok 5 — Wetenskaplike notasie met negatiewe eksponente (V14-16)
        { difficulty: 'Easy', question: 'Skryf 0,000000605 in wetenskaplike notasie.', checkMode: 'auto', options: ['6,05 × 10⁷', '6,05 × 10⁻⁷', '60,5 × 10⁻⁸', '6,05 × 10⁻⁶'], correctIndex: 1, explanation: 'Skuif die desimaal 7 plekke na regs: 0,000000605 → 6,05. Na regs skuif gee ʼn negatiewe eksponent: 6,05 × 10⁻⁷. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Medium', question: 'Skryf 0,0000004 in wetenskaplike notasie.', checkMode: 'auto', options: ['4 × 10⁷', '40 × 10⁻⁸', '4 × 10⁻⁷', '4 × 10⁻⁶'], correctIndex: 2, explanation: 'Skuif die desimaal 7 plekke na regs: 0,0000004 → 4. Na regs skuif gee ʼn negatiewe eksponent: 4 × 10⁻⁷. (Die ander opsies gebruik ʼn positiewe eksponent, laat die voorste getal buite 1–10, of tel die aantal plekke verkeerd.)' },
        { difficulty: 'Hard', question: 'Lerato skryf 0,000625 in wetenskaplike notasie as 6,25 × 10⁻⁴. Watter stelling kontroleer haar antwoord korrek?', checkMode: 'auto', options: ['Verkeerd — die eksponent moet positief wees, wat 6,25 × 10⁴ gee.', 'Verkeerd — deur die desimaal slegs 3 plekke te skuif kry jy 6,25 × 10⁻³.', 'Verkeerd — die voorste getal moet 62,5 wees, wat 62,5 × 10⁻⁵ gee.', 'Korrek — deur die desimaal 4 plekke na regs te skuif vanaf 0,000625 kry jy 6,25, wat 6,25 × 10⁻⁴ bevestig.'], correctIndex: 3, explanation: 'Deur die desimaal 4 plekke na regs te skuif vanaf 0,000625 kry jy 6,25, en na regs skuif gee ʼn negatiewe eksponent van −4, dus is 6,25 × 10⁻⁴ korrek.' },

        // Blok 6 — Gekombineerde wette, meerstap- en werklike-lewe-probleme (V17-20)
        { difficulty: 'Hard', question: 'Vereenvoudig 7² × 7⁻³ ÷ 7⁻².', checkMode: 'auto', options: ['7', '1/343', '823543', '1/7'], correctIndex: 0, explanation: 'Werk van links na regs: 7² × 7⁻³ = 7^(2 + (−3)) = 7⁻¹. Dan 7⁻¹ ÷ 7⁻² = 7^(−1 − (−2)) = 7¹ = 7. (Die ander opsies vergeet om die teken in die delingstap om te draai, ignoreer die negatiewe teken in die eerste stap, of vergeet die delingstap heeltemal.)' },
        { difficulty: 'Hard', question: 'ʼn Haar het ʼn breedte van 8 × 10⁻⁵ meter. Bepaal die gesamentlike breedte van 200 hare langs mekaar geplaas, in wetenskaplike notasie.', checkMode: 'auto', options: ['1600 × 10⁻⁵ meter', '1,6 × 10⁻² meter', '1,6 × 10² meter', '208 × 10⁻⁵ meter'], correctIndex: 1, explanation: 'Vermenigvuldig: 200 × (8 × 10⁻⁵) = 1600 × 10⁻⁵ = 1,6 × 10³ × 10⁻⁵ = 1,6 × 10⁻² meter. (Die ander opsies laat die voorste getal buite 1–10, verskuif die eksponent in die verkeerde rigting, of tel die voorste getalle bymekaar in plaas daarvan om te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Sipho sê 2⁻⁴ × 2⁶ is gelyk aan 4. Watter stelling evalueer dit korrek?', checkMode: 'auto', options: ['Hy is verkeerd — die eksponente moet vermenigvuldig word, wat 2⁻²⁴ gee.', 'Hy is verkeerd — ʼn negatiewe eksponent maak die produk negatief, dus is die antwoord −4.', 'Hy is korrek — deur die eksponente bymekaar te tel kry jy −4 + 6 = 2, dus 2⁻⁴ × 2⁶ = 2² = 4.', 'Hy is verkeerd — die antwoord moet ʼn breuk wees, 1/4, aangesien een eksponent negatief is.'], correctIndex: 2, explanation: 'Dieselfde grondtal — tel die eksponente bymekaar: −4 + 6 = 2, dus 2⁻⁴ × 2⁶ = 2² = 4. Sipho is korrek.' },
        { difficulty: 'Hard', question: 'Vereenvoudig 6⁻³ × 6⁷ ÷ 6².', checkMode: 'auto', options: ['46656', '1679616', '1296', '36'], correctIndex: 3, explanation: 'Werk van links na regs: 6⁻³ × 6⁷ = 6^(−3 + 7) = 6⁴. Dan 6⁴ ÷ 6² = 6^(4 − 2) = 6² = 36. (Die ander opsies tel bymekaar in plaas daarvan om af te trek in die finale stap, ignoreer die negatiewe teken in die eerste stap, of vergeet die delingstap heeltemal.)' },
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
