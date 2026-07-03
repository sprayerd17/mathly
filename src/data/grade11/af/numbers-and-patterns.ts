import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → real solutions / rational exponent / like surds / measured value / first differences
// red    → non-real / no real solution
// green  → discriminant / final value / rationalised denominator / range / quadratic rule
// orange → root taken / multiplication under root / error margin / second differences
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Getalle en Patrone',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NON-REAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'non-real-numbers',
      title: 'Nie-reële Getalle',
      icon: '𝑖',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons vergelykings soos x²=−1 probeer oplos, kom ons <strong>nie-reële (komplekse) getalle</strong> teë — geen reële getal in die kwadraat gee ʼn negatiewe resultaat nie. Ons herken hierdie situasies en verstaan dat sulke vergelykings geen reële oplossings het nie, terwyl die formele studie van komplekse getalle vir latere wiskunde bewaar word.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reële oplossings')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie-reël / geen reële oplossing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('diskriminant')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reële getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Getalle wat op die getallelyn geplaas kan word. Die kwadraat van enige reële getal is altyd nie-negatief (x² ≥ 0).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Nie-reële getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Getalle wat ontstaan wanneer ons die vierkantswortel van ʼn negatiewe waarde neem. Hulle kan nie op die reële getallelyn geplaas word nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Diskriminant (Δ = b²−4ac)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde onder die vierkantswortel in die kwadratiese formule. As Δ &lt; 0, het die vergelyking geen reële oplossings nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Onthou</p>` +
        `<p style="margin:0;color:#991b1b;">Vir enige reële getal x geld altyd x² ≥ 0. Dit beteken vergelykings van die vorm x² = (negatiewe getal) het ${re('geen reële oplossings')} nie. Ons herken en stel dit eenvoudig, eerder as om ʼn reële antwoord te probeer vind wat nie bestaan nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Het x² + 4 = 0 reële oplossings?',
          answer: `${re('Geen reële oplossings')} nie — die vergelyking het slegs nie-reële oplossings`,
          steps: [
            `Herrangskik die vergelyking: x² + 4 = 0 → x² = −4.`,
            `Oorweeg of enige ${bl('reële getal')} in die kwadraat gelyk is aan −4. Aangesien x² ≥ 0 vir alle reële x, kan kwadrering nooit ʼn negatiewe resultaat lewer nie.`,
            `<strong>Gevolgtrekking:</strong> x² = −4 het ${re('geen reële oplossing')} nie, aangesien geen reële getal in die kwadraat negatief is nie. Hierdie vergelyking het slegs nie-reële oplossings.`,
          ],
        },
        {
          question: 'Sipho los x² − 2x + 5 = 0 op met die kwadratiese formule en vind dat die diskriminant negatief is. Wat vertel dit hom?',
          answer: `ʼn Negatiewe ${gr('diskriminant')} bevestig dat daar ${re('geen reële oplossings')} is nie`,
          steps: [
            `Identifiseer die koëffisiënte: a = 1, b = −2, c = 5.`,
            `Bereken die ${gr('diskriminant')}: ${gr('Δ = b² − 4ac')} = (−2)² − 4(1)(5) = 4 − 20 = ${gr('−16')}.`,
            `Aangesien ${gr('Δ = −16 < 0')}, sou die kwadratiese formule vereis dat ons die vierkantswortel van ʼn negatiewe getal neem.`,
            `<strong>Gevolgtrekking:</strong> ʼn Negatiewe ${gr('diskriminant')} (b²−4ac &lt; 0) bevestig dat daar ${re('geen reële oplossings')} is nie — die oplossings bestaan slegs in die nie-reële (komplekse) getallestelsel.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Het x² + 9 = 0 reële oplossings?',
          answer: 'nee',
          checkMode: 'auto',
          correctAnswer: 'nee',
          correctAnswers: ['nee', 'Nee', 'geen reële oplossings', 'nee, geen reële oplossings'],
          explanation: 'Herrangskik: x²+9=0 → x²=−9. Aangesien x²≥0 vir alle reële x, gee geen reële getal in die kwadraat ʼn negatiewe resultaat nie. Dus het x²+9=0 geen reële oplossings nie.',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho los x²−4x+8=0 op met die kwadratiese formule en vind die diskriminant. Wat vertel die waarde hom oor reële oplossings?',
          answer: 'Diskriminant=16-32=-16, wat negatief is, wat bevestig dat daar geen reële oplossings is nie.',
          checkMode: 'self',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê elke kwadratiese vergelyking met ʼn negatiewe diskriminant het presies twee nie-reële oplossings. Is dit versoenbaar met wat jy weet? Verduidelik.',
          answer: 'Ja — in die komplekse getallestelsel (buite die omvang van hierdie kursus) lewer ʼn negatiewe diskriminant presies twee komplekse (nie-reële) oplossings, wat toegevoegdes (konjugate) van mekaar is.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining non-real numbers and how to identify equations with no real solutions using the discriminant" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of the number system showing real numbers on the number line and indicating that non-real solutions fall outside it, with examples of equations producing each type" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LAWS OF EXPONENTS FOR RATIONAL EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-exponents',
      title: 'Eksponentwette vir Rasionale Eksponente',
      icon: 'xᵖ⁄q',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei die eksponentwette uit na <strong>rasionale (breuk-)eksponente</strong>, waar x<sup>p/q</sup> = <sup>q</sup>√(x<sup>p</sup>) — dit wil sê, die q-de wortel van x tot die mag p. Al die vorige eksponentwette (vermenigvuldig, deel, tot ʼn mag verhef) geld steeds.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rasionale eksponent')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('wortel geneem')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale waarde')}</span>` +
        `</div>` +

        // ── Definition card ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die rasionale-eksponent-definisie</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('x<sup>p/q</sup>')} = ${or('<sup>q</sup>√(x<sup>p</sup>)')} = (${or('<sup>q</sup>√x')})${bl('<sup>p</sup>')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Die noemer van die ${bl('rasionale eksponent')} word die indeks van die ${or('wortel')}; die teller word die mag.</p>` +
        `</div>` +

        // ── Exponent laws ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eksponentwette (geld steeds)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vermenigvuldig (dieselfde grondtal)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup> — tel die eksponente bymekaar.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Deel (dieselfde grondtal)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup> — trek die eksponente af.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Tot ʼn mag verhef</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x<sup>a</sup>)<sup>b</sup> = x<sup>a×b</sup> — vermenigvuldig die eksponente.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Strategie vir rasionale eksponente</p>` +
        `<p style="margin:0;color:#7c2d12;">Wanneer jy ʼn uitdrukking met ʼn ${bl('rasionale eksponent')} evalueer, ${or('neem eers die wortel')} (die noemer vertel jou watter wortel), en verhef dan tot die mag (die teller). Deur eers die wortel te neem, bly die getalle kleiner en makliker om mee te werk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evalueer 8^(2/3).',
          answer: `8${bl('^(2/3)')} = ${gr('4')}`,
          steps: [
            `Skryf die ${bl('rasionale eksponent')} as ʼn wortel: 8${bl('^(2/3)')} = ${or('∛(8²)')} = ${or('(∛8)²')}.`,
            `${or('Neem eers die derdemagswortel')}: ${or('∛8')} = ${or('2')} (aangesien 2³ = 8).`,
            `Verhef tot die mag 2: ${or('2')}² = ${gr('4')}.`,
            `<strong>Antwoord:</strong> 8${bl('^(2/3)')} = ${gr('4')} ✓`,
          ],
        },
        {
          question: 'Vereenvoudig x^(1/2) · x^(3/2).',
          answer: `x${bl('^(1/2)')} · x${bl('^(3/2)')} = ${gr('x²')}`,
          steps: [
            `Die grondtalle is dieselfde (albei x), dus pas ons die ${bl('vermenigvuldigingswet')} toe: tel die eksponente bymekaar.`,
            `x${bl('^(1/2)')} · x${bl('^(3/2)')} = x${bl('^(1/2 + 3/2)')}.`,
            `Tel die ${bl('rasionale eksponente')} bymekaar: ½ + ³⁄₂ = ⁴⁄₂ = 2.`,
            `<strong>Antwoord:</strong> x${bl('^(1/2)')} · x${bl('^(3/2)')} = ${gr('x²')} ✓`,
          ],
        },
        {
          question: 'Lerato evalueer 16^(3/4) en kry 8. Kontroleer haar antwoord.',
          answer: `16${bl('^(3/4)')} = ${gr('8')} — Lerato is korrek`,
          steps: [
            `Skryf die ${bl('rasionale eksponent')} as ʼn wortel: 16${bl('^(3/4)')} = ${or('(⁴√16)³')}.`,
            `${or('Neem eers die vierdemagswortel')}: ${or('⁴√16')} = ${or('2')} (aangesien 2⁴ = 16).`,
            `Verhef tot die mag 3: ${or('2')}³ = ${gr('8')}.`,
            `<strong>Gevolgtrekking:</strong> 16${bl('^(3/4)')} = ${gr('8')}. Lerato is korrek ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Evalueer 4^(3/2).',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Skryf as ʼn wortel: 4^(3/2) = (√4)³. Neem eers die vierkantswortel: √4 = 2. Verhef tot die mag 3: 2³ = 8.',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Evalueer 27^(2/3).',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Skryf as ʼn wortel: 27^(2/3) = (∛27)². Neem eers die derdemagswortel: ∛27 = 3. Verhef tot die mag 2: 3² = 9.',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vereenvoudig x^(2/3) · x^(1/3), en toon die optelling van eksponente.',
          answer: 'Tel eksponente bymekaar: x^(2/3+1/3)=x^(3/3)=x¹=x.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating rational exponents, the connection between fractional powers and roots, and applying exponent laws with fractional exponents" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing the rational exponent x to the p over q equals the qth root of x to the p, with colour coded numerator power and denominator root index" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING SIMPLE SURDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surds',
      title: 'Optel, Aftrek, Vermenigvuldig en Deel van Eenvoudige Wortelvorme',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Om wortelvorme <strong>op te tel of af te trek</strong>, moet hulle eers vereenvoudig word tot <strong>eendersoortige wortelvorme</strong> (dieselfde getal onder die worteltekens) voordat hulle gekombineer word. Om te <strong>vermenigvuldig</strong>, vermenigvuldig ons die getalle onder die worteltekens met mekaar: √a × √b = √(ab). Om te <strong>deel</strong>, <em>rasionaliseer</em> ons die noemer — deur die wortelvorm uit die noemer te verwyder deur beide die teller en die noemer met die wortelvorm te vermenigvuldig.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eendersoortige wortelvorme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vermenigvuldiging onder die wortel')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gerasionaliseerde noemer')}</span>` +
        `</div>` +

        // ── Rules grid ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir wortelvorme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+/−</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Optel / aftrek:')} Wortelvorme moet ${bl('eendersoortig')} wees (dieselfde radikand). Vereenvoudig eers, en tel of trek dan die koëffisiënte af: a√n ± b√n = (a ± b)√n.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig:')} Vermenigvuldig die getalle ${or('onder die wortel')}: √a × √b = √(ab). Vereenvoudig dan die resultaat indien moontlik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Deel (rasionaliseer):')} Vermenigvuldig die teller en die noemer met die wortelvorm in die noemer om die noemer te ${gr('rasionaliseer')}: a/√b = (a√b)/b.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig eers wortelvorme</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vereenvoudig altyd elke wortelvorm voordat jy probeer optel of aftrek. Soek na die grootste volkome vierkant-faktor onder die worteltekens. Byvoorbeeld, √12 = √(4 × 3) = 2√3. Sodra dit vereenvoudig is, kan jy ${bl('eendersoortige wortelvorme')} identifiseer en kombineer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken √12 + √27.',
          answer: `√12 + √27 = ${gr('5√3')}`,
          steps: [
            `Vereenvoudig elke wortelvorm deur die grootste volkome vierkant-faktor te vind.`,
            `√12 = √(4 × 3) = ${bl('2√3')} en √27 = √(9 × 3) = ${bl('3√3')}.`,
            `Albei is nou ${bl('eendersoortige wortelvorme')} (dieselfde radikand, √3). Kombineer deur die koëffisiënte bymekaar te tel: ${bl('2√3')} + ${bl('3√3')} = ${gr('5√3')}.`,
            `<strong>Antwoord:</strong> √12 + √27 = ${gr('5√3')} ✓`,
          ],
        },
        {
          question: 'Bereken √5 × √20.',
          answer: `√5 × √20 = ${gr('10')}`,
          steps: [
            `Pas die vermenigvuldigingsreël toe: vermenigvuldig die getalle ${or('onder die wortel')}: √5 × √20 = ${or('√(5 × 20)')}.`,
            `Bereken onder die wortel: ${or('5 × 20 = 100')}, dus kry ons ${or('√100')}.`,
            `Vereenvoudig: ${or('√100')} = ${gr('10')}.`,
            `<strong>Antwoord:</strong> √5 × √20 = ${gr('10')} ✓`,
          ],
        },
        {
          question: 'Rasionaliseer en vereenvoudig 6/√3.',
          answer: `6/√3 = ${gr('2√3')}`,
          steps: [
            `Die noemer bevat ʼn wortelvorm (√3). Om te ${gr('rasionaliseer')}, vermenigvuldig beide die teller en die noemer met √3.`,
            `(6 × ${or('√3')}) / (√3 × ${or('√3')}) = ${or('6√3')} / ${gr('(√3)²')}.`,
            `Vereenvoudig die noemer: ${gr('(√3)²')} = ${gr('3')}. Dus het ons ${or('6√3')} / ${gr('3')}.`,
            `Vereenvoudig: ${or('6√3')} ÷ ${gr('3')} = ${gr('2√3')}.`,
            `<strong>Antwoord:</strong> 6/√3 = ${gr('2√3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken √8 + √18.',
          answer: '5√2',
          checkMode: 'auto',
          correctAnswer: '5√2',
          correctAnswers: ['5√2', '5√(2)', '5 √2', '5 √(2)'],
          explanation: '√8=√(4×2)=2√2. √18=√(9×2)=3√2. Albei is eendersoortige wortelvorme: 2√2+3√2=5√2.',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken √3 × √12.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: '√3×√12=√(3×12)=√36=6.',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Rasionaliseer en vereenvoudig 10/√5.',
          answer: 'Vermenigvuldig met √5/√5: 10√5/5=2√5.',
          checkMode: 'self',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê √2 + √8 = √10. Is hy korrek? Verduidelik.',
          answer: 'Nee — wortelvorme moet vereenvoudig word tot eendersoortige wortelvorme voordat hulle opgetel word. √8=2√2, dus √2+√8=√2+2√2=3√2, nie √10 nie.',
          checkMode: 'self',
        },

        // ── Q18 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (√5 + √2)(√5 − √2), en herken enige spesiale patroon.',
          answer: 'Dit stem ooreen met die verskil-van-vierkante-patroon: (√5)²−(√2)²=5−2=3.',
          checkMode: 'self',
        },

        // ── Q19 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê om ʼn noemer te rasionaliseer, verander die waarde van die oorspronklike uitdrukking. Is hy korrek? Verduidelik waarom of waarom nie.',
          answer: 'Nee — rasionalisering verander slegs die VORM van die uitdrukking (deur met ʼn breuk gelyk aan 1 te vermenigvuldig, soos √a/√a), nie die werklike waarde daarvan nie; die vereenvoudigde uitdrukking is wiskundig ekwivalent aan die oorspronklike.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify surds and then add, subtract, multiply, and rationalise the denominator when dividing surds" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step by step diagram showing surd simplification into like surds for addition, multiplication under the root, and rationalising the denominator with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ERROR MARGINS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'error-margins',
      title: 'Foutmarges',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer metings of berekeninge afgerond word, verteenwoordig ʼn <strong>foutmarge</strong> (of toleransie) die interval waarbinne die ware waarde kan lê. Ons dui foutmarges aan as <strong>± ʼn waarde</strong>, en ons bereken die maksimum en minimum moontlike waardes gegewe ʼn aangeduide meting en sy foutmarge.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemete waarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('foutmarge')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('interval (min / maks)')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Berekening van die interval</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Minimum</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Min')} = ${bl('gemete waarde')} − ${or('foutmarge')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Maksimum</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Maks')} = ${bl('gemete waarde')} + ${or('foutmarge')}</p>` +
        `</div>` +
        `</div>` +

        // ── Concepts grid ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gemete waarde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat uit ʼn meting verkry word, wat afgerond kan wees. Geskryf as ${bl('x')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Foutmarge (toleransie)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die maksimum moontlike verskil tussen die gemete waarde en die ware waarde, geskryf as ${or('± e')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Interval</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die interval van moontlike ware waardes: vanaf ${gr('(x − e)')} tot ${gr('(x + e)')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Oppervlaktes en produkte met foutmarges</p>` +
        `<p style="margin:0;color:#14532d;">Wanneer jy oppervlaktes of produkte van metings bereken wat elk ʼn ${or('foutmarge')} het, bereken die ${gr('minimum')} deur albei minimumwaardes te gebruik, en die ${gr('maksimum')} deur albei maksimumwaardes te gebruik. Die ware resultaat lê iewers binne daardie interval.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Lengte word gemeet as 15,2 cm ± 0,1 cm. Vind die interval van moontlike werklike lengtes.',
          answer: `Die werklike lengte lê tussen ${gr('15,1 cm')} en ${gr('15,3 cm')}`,
          steps: [
            `Identifiseer die ${bl('gemete waarde')}: ${bl('15,2 cm')} en die ${or('foutmarge')}: ${or('0,1 cm')}.`,
            `${gr('Minimum')} = ${bl('15,2')} − ${or('0,1')} = ${gr('15,1 cm')}.`,
            `${gr('Maksimum')} = ${bl('15,2')} + ${or('0,1')} = ${gr('15,3 cm')}.`,
            `<strong>Antwoord:</strong> Die werklike lengte lê tussen ${gr('15,1 cm')} en ${gr('15,3 cm')} ✓`,
          ],
        },
        {
          question: 'Thabo meet ʼn reghoek se sye as 8 cm ± 0,2 cm en 5 cm ± 0,1 cm. Vind die interval van moontlike oppervlaktes.',
          answer: `Die oppervlakte lê tussen ${gr('38,22 cm²')} en ${gr('41,82 cm²')}`,
          steps: [
            `Identifiseer die sye met hul ${or('foutmarges')}: lengte = ${bl('8 cm')} ± ${or('0,2 cm')}, breedte = ${bl('5 cm')} ± ${or('0,1 cm')}.`,
            `Vind die minimum afmetings: lengte${gr('_min')} = 8 − 0,2 = ${gr('7,8 cm')}, breedte${gr('_min')} = 5 − 0,1 = ${gr('4,9 cm')}.`,
            `Vind die maksimum afmetings: lengte${gr('_maks')} = 8 + 0,2 = ${gr('8,2 cm')}, breedte${gr('_maks')} = 5 + 0,1 = ${gr('5,1 cm')}.`,
            `${gr('Minimum oppervlakte')} = ${gr('7,8')} × ${gr('4,9')} = ${gr('38,22 cm²')}.`,
            `${gr('Maksimum oppervlakte')} = ${gr('8,2')} × ${gr('5,1')} = ${gr('41,82 cm²')}.`,
            `<strong>Antwoord:</strong> Die oppervlakte lê tussen ${gr('38,22 cm²')} en ${gr('41,82 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Lengte word gemeet as 24,5 cm ± 0,3 cm. Vind die minimum en maksimum moontlike lengtes.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Minimum lengte',
              correctAnswer: '24.2',
              correctAnswers: ['24.2', '24.2cm', '24.2 cm', '24,2', '24,2cm', '24,2 cm'],
              explanation: 'Minimum = 24,5 − 0,3 = 24,2 cm.',
            },
            {
              label: 'b) Maksimum lengte',
              correctAnswer: '24.8',
              correctAnswers: ['24.8', '24.8cm', '24.8 cm', '24,8', '24,8cm', '24,8 cm'],
              explanation: 'Maksimum = 24,5 + 0,3 = 24,8 cm.',
            },
          ],
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Reghoek het sye gemeet as 10 cm ± 0,2 cm en 6 cm ± 0,1 cm. Vind die interval van moontlike oppervlaktes.',
          answer: 'Minimum oppervlakte=9,8×5,9=57,82cm². Maksimum oppervlakte=10,2×6,1=62,22cm².',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining error margins, how to calculate minimum and maximum values from a measurement with a stated tolerance, and how to find the range of possible areas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line diagram showing a measured value with error margin, minimum and maximum endpoints of the range colour coded, and a rectangle example with both dimensions labelled with tolerances" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — INVESTIGATING QUADRATIC NUMBER PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-number-patterns',
      title: 'Ondersoek van Kwadratiese Getalpatrone',
      icon: 'Tₙ',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek getalpatrone waar daar ʼn <strong>konstante tweede verskil</strong> tussen opeenvolgende terme is (nie die eerste verskil nie), wat beteken die algemene term (n-de term) is <strong>kwadraties</strong>, van die vorm <strong>Tₙ = an² + bn + c</strong>. Ons vind a, b en c deur gelyktydige vergelykings op te stel en op te los met bekende terme.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste verskille')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tweede verskille')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwadratiese reël')}</span>` +
        `</div>` +

        // ── Method overview ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metode om die n-de term te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Bereken die eerste verskille')} — trek elke term van die volgende af: T₂−T₁, T₃−T₂, T₄−T₃, …</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bereken die tweede verskille')} — trek elke eerste verskil van die volgende af. As dit konstant is, is die patroon kwadraties.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vind a')} — die konstante ${or('tweede verskil')} is gelyk aan 2a, dus a = (tweede verskil) ÷ 2.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vind b en c')} — vervang twee bekende terme in Tₙ = an² + bn + c en los die gelyktydige vergelykings op.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Kontroleer altyd</p>` +
        `<p style="margin:0;color:#14532d;">Sodra jy die ${gr('kwadratiese reël')} het, vervang een of meer bekende waardes van n terug in Tₙ om te bevestig dat jou formule die korrekte terme gee. Dit vang rekenfoute in jou gelyktydige vergelykings op.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die n-de term van die patroon 2, 7, 16, 29.',
          answer: `${gr('Tₙ = 2n² − n + 1')}`,
          steps: [
            `Skryf die terme: T₁ = 2, T₂ = 7, T₃ = 16, T₄ = 29.`,
            `${bl('Eerste verskille:')} ${bl('7−2=5')}, ${bl('16−7=9')}, ${bl('29−16=13')} → eerste verskille is ${bl('5, 9, 13')}.`,
            `${or('Tweede verskille:')} ${or('9−5=4')}, ${or('13−9=4')} → konstante ${or('tweede verskil = 4')}. Die patroon is kwadraties.`,
            `Vind a: konstante ${or('tweede verskil')} = 2a → 2a = 4 → ${gr('a = 2')}.`,
            `Vervang in Tₙ = 2n² + bn + c. Gebruik T₁ = 2: 2(1)² + b(1) + c = 2 → 2 + b + c = 2 → b + c = 0.`,
            `Gebruik T₂ = 7: 2(4) + 2b + c = 7 → 8 + 2b + c = 7 → 2b + c = −1.`,
            `Trek die twee vergelykings van mekaar af: (2b + c) − (b + c) = −1 − 0 → b = −1. Dan c = 0 − b = 0 − (−1) = 1.`,
            `<strong>Antwoord:</strong> ${gr('Tₙ = 2n² − n + 1')} ✓`,
          ],
        },
        {
          question: 'Verifieer die reël uit Voorbeeld 1 vir n = 4.',
          answer: `T₄ = ${gr('29')} ✓`,
          steps: [
            `Vervang n = 4 in ${gr('Tₙ = 2n² − n + 1')}: T₄ = 2(4)² − 4 + 1.`,
            `Bereken: 2(16) − 4 + 1 = 32 − 4 + 1 = ${gr('29')}.`,
            `Die ${bl('gegewe vierde term')} is 29. Die ${gr('formule gee 29')} — die reël is geverifieer ✓`,
          ],
        },
        {
          question: 'Sipho se patroon is 1, 6, 15, 28. Vind die n-de term.',
          answer: `${gr('Tₙ = 2n² − n')}`,
          steps: [
            `Skryf die terme: T₁ = 1, T₂ = 6, T₃ = 15, T₄ = 28.`,
            `${bl('Eerste verskille:')} ${bl('6−1=5')}, ${bl('15−6=9')}, ${bl('28−15=13')} → ${bl('5, 9, 13')}.`,
            `${or('Tweede verskille:')} ${or('9−5=4')}, ${or('13−9=4')} → konstante ${or('tweede verskil = 4')}. Kwadratiese patroon.`,
            `Vind a: 2a = 4 → ${gr('a = 2')}.`,
            `Gebruik T₁ = 1: 2(1) + b(1) + c = 1 → 2 + b + c = 1 → b + c = −1.`,
            `Gebruik T₂ = 6: 2(4) + 2b + c = 6 → 8 + 2b + c = 6 → 2b + c = −2.`,
            `Trek af: b = −1. Dan c = −1 − b = −1 − (−1) = 0.`,
            `<strong>Antwoord:</strong> ${gr('Tₙ = 2n² − n')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die kwadratiese patroon 3, 8, 17, 30.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'Eerste verskille: 5,9,13. Tweede verskille: 4,4 (konstant). Volgende eerste verskil: 13+4=17. Volgende term: 30+17=47.',
        },

        // ── Q14 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die n-de term van die patroon 1, 4, 9, 16.',
          answer: 'Tₙ=n²',
          checkMode: 'auto',
          correctAnswer: 'n²',
          correctAnswers: ['n²', 'Tₙ=n²', 'T_n=n^2', 'n^2', 'Tn=n²', 'Tn=n^2'],
          explanation: 'Hierdie is volkome vierkante: 1²=1, 2²=4, 3²=9, 4²=16. Die n-de term is Tₙ=n².',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die n-de term van die patroon 3, 10, 21, 36, en toon die tweede-verskil-metode.',
          answer: 'Eerste verskille: 7,11,15. Tweede verskille: 4,4. a=2. Deur T₁=3 te gebruik: 2+b+c=3. Deur T₂=10 te gebruik: 8+2b+c=10. Trek af: 6+b=7, b=1. c=3-2-1=0. Reël: Tₙ=2n²+n.',
          checkMode: 'self',
        },

        // ── Q16 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Verifieer die reël gevind in V15 deur die 5de term te bereken en dit met die verwagte voortsetting van die patroon te vergelyk.',
          answer: 'T₅=2(25)+5=55. Die patroon se 5de term behoort die gevestigde tweede verskil van 4 vanaf die 4de term (36) te volg: volgende eerste verskil=15+4=19, dus T₅=36+19=55 ✓.',
          checkMode: 'self',
        },

        // ── Q17 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Amahle se patroon is 5, 12, 23, 38. Vind die n-de term.",
          answer: 'Tₙ=2n²+n+2',
          checkMode: 'auto',
          correctAnswer: '2n²+n+2',
          correctAnswers: ['2n²+n+2', 'Tₙ=2n²+n+2', '2n^2+n+2', 'T_n=2n^2+n+2', 'Tn=2n²+n+2'],
          explanation: 'Eerste verskille: 7,11,15. Tweede verskille: 4,4. a=2. T₁=5: 2+b+c=5→b+c=3. T₂=12: 8+2b+c=12→2b+c=4. Trek af: b=1. c=3-1=2. Reël: Tₙ=2n²+n+2. Kontroleer: T₁=2+1+2=5✓, T₂=8+2+2=12✓.',
        },

        // ── Q20 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die n-de term van die patroon 4, 9, 18, 31, en gebruik dit om die 10de term te vind.',
          answer: 'Eerste verskille: 5,9,13. Tweede verskille: 4,4. a=2. Deur T₁=4 te gebruik: 2+b+c=4. Deur T₂=9 te gebruik: 8+2b+c=9. Trek af: 6+b=5, b=-1. c=4-2-(-1)=3. Reël: Tₙ=2n²-n+3. 10de term=2(100)-10+3=193.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the nth term of a quadratic number pattern using first and second differences, then setting up and solving simultaneous equations for a, b and c" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a number pattern with first differences colour coded blue and second differences colour coded orange beneath, leading to the quadratic rule shown in green" />',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het getalle en patrone bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
