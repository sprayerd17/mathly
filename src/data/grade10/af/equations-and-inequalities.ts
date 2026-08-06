import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (equation roles) ─────────────────────────────────────────
// LCM / rearranged equation / substitution steps   → blue   (#2563eb)
// expanded / factorised brackets / other variables → orange (#ea580c)
// solution / isolated subject / intersection point → green  (#16a34a)
// inequality sign flip                             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
// Stacked numerator/denominator fraction notation instead of a plain "n/d"
// slash — renders as an actual fraction bar via the site's existing
// whitelisted-HTML pipeline.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Vergelykings en Ongelykhede',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SOLVING LINEAR EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-equations',
      title: 'Lineêre Vergelykings Oplos',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die oplos van <strong>lineêre vergelykings</strong>, insluitend dié met breuke en hakies, deur albei kante te vereenvoudig, gelyksoortige terme bymekaar te bring, en die veranderlike te isoleer deur inverse bewerkings te gebruik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('KGV / deur vermenigvuldig')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('uitgebreide hakies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Ontslae raak van breuke')} — Vermenigvuldig albei kante met die ${bl('KGV')} (kleinste gemene veelvoud) van al die noemers om breuke eers te verwyder, voor enigiets anders.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Brei hakies uit')} — Pas die distributiewe wet toe om enige hakies aan albei kante te verwyder.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bring gelyksoortige terme bymekaar</strong> — Skuif al die veranderlike terme na een kant en al die konstantes na die ander kant.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isoleer die veranderlike')} — Deel albei kante deur die koëffisiënt van die veranderlike om die ${gr('oplossing')} te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die KGV vir breuke vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Lys die veelvoude van elke noemer en vind die kleinste een wat hulle deel. Deur elke term aan albei kante met die ${bl('KGV')} te vermenigvuldig, word alle breuke in een stap uitgeskakel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: (2x − 3)/3 = (x + 2)/6',
          answer: `x = ${gr('8/3')}`,
          steps: [
            `Die noemers is 3 en 6. Die ${bl('KGV is 6')}. Vermenigvuldig elke term aan albei kante met ${bl('6')}:<br>${bl('6')} × (2x − 3)/3 = ${bl('6')} × (x + 2)/6 &nbsp;→&nbsp; ${bl('2')}(2x − 3) = x + 2`,
            `${or('Brei die hakies uit:')} ${or('4x − 6')} = x + 2`,
            `Trek x van albei kante af: 3x − 6 = 2`,
            `Tel 6 by albei kante: 3x = 8`,
            `Deel albei kante deur 3: x = ${gr('8/3')} ✓`,
          ],
        },
        {
          question: 'Los op vir x: 3(x − 2) = 2(x + 5)',
          answer: `x = ${gr('16')}`,
          steps: [
            `${or('Brei albei hakies uit:')} ${or('3x − 6')} = ${or('2x + 10')}`,
            `Trek 2x van albei kante af: x − 6 = 10`,
            `Tel 6 by albei kante: x = ${gr('16')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om lineêre vergelykings met breuke en hakies op te los deur die KGV en inverse bewerkings te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING QUADRATIC EQUATIONS BY FACTORISATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-equations-factorisation',
      title: 'Kwadratiese Vergelykings Oplos deur Faktorisering',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">Ons los kwadratiese vergelykings op deur eers te <strong>herrangskik</strong> sodat die vergelyking gelyk is aan nul, die uitdrukking te <strong>faktoriseer</strong>, en dan die <strong>nulproduk-eienskap</strong> toe te pas om albei oplossings te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('herrangskikte vergelyking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gefaktoriseerde hakies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Herrangskik')} — Skuif al die terme na een kant sodat die vergelyking gelyk is aan ${bl('nul')}: ax² + bx + c = 0.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Faktoriseer')} — Skryf die uitdrukking as ʼn produk van ${or('twee hakies')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Nulproduk-eienskap')} — As A × B = 0, dan is A = 0 óf B = 0. Stel elke faktor gelyk aan nul om albei ${gr('oplossings')} te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Die regte faktore vind (a × c-metode)</p>` +
        `<p style="margin:0;color:#9a3412;">Vir ax² + bx + c, vind twee getalle wat <strong>vermenigvuldig tot a × c</strong> en <strong>optel tot b</strong>. Gebruik hierdie getalle om die middelste term te splits, en faktoriseer dan deur te groepeer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: x² − 5x − 14 = 0',
          answer: `x = ${gr('7')} óf x = ${gr('−2')}`,
          steps: [
            `Die vergelyking is reeds ${bl('gelyk aan nul:')} ${bl('x² − 5x − 14 = 0')}`,
            `${or('Faktoriseer:')} Vind twee getalle wat vermenigvuldig tot −14 en optel tot −5. Daardie getalle is <strong>−7</strong> en <strong>2</strong> (−7 × 2 = −14, −7 + 2 = −5).`,
            `Skryf die ${or('gefaktoriseerde hakies:')} ${or('(x − 7)(x + 2)')} = 0`,
            `Pas die nulproduk-eienskap toe: x − 7 = 0 &nbsp;óf&nbsp; x + 2 = 0`,
            `Oplossings: x = ${gr('7')} óf x = ${gr('−2')} ✓`,
          ],
        },
        {
          question: 'Los op vir x: 2x² + 3x = 20',
          answer: `x = ${gr('−4')} óf x = ${gr('5/2')}`,
          steps: [
            `${bl('Herrangskik')} sodat dit gelyk is aan nul: ${bl('2x² + 3x − 20 = 0')}`,
            `${or('Faktoriseer')} met die a × c-metode: a × c = 2 × (−20) = −40. Vind twee getalle wat vermenigvuldig tot −40 en optel tot 3: <strong>−5</strong> en <strong>8</strong>.`,
            `Splits die middelste term: ${or('2x² − 5x + 8x − 20')} = 0`,
            `Groepeer: x(2x − 5) + 4(2x − 5) = 0`,
            `${or('Gefaktoriseerde vorm:')} ${or('(x + 4)(2x − 5)')} = 0`,
            `Stel elke faktor gelyk aan nul: x + 4 = 0 &nbsp;óf&nbsp; 2x − 5 = 0`,
            `Oplossings: x = ${gr('−4')} óf x = ${gr('5/2')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om kwadratiese vergelykings op te los deur faktorisering met die nulproduk-eienskap en die a×c-metode',

      diagramPlaceholder:
        'X-boks-diagram vir 2x² + 3x − 20 = 0 wat a×c = −40 bo, b = 3 onder, en die twee getalle −5 en 8 aan die kante wys, wat deur splitsing en groepering lei tot die gefaktoriseerde vorm (x + 4)(2x − 5) = 0 en oplossings x = −4 óf x = 5/2',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 250" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="110" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">2x² + 3x − 20 = 0</text>` +
        `<rect x="60" y="30" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="60" y1="30" x2="160" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="160" y1="30" x2="60" y2="130" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="110" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">a×c = −40</text>` +
        `<text x="110" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">b = 3</text>` +
        `<text x="80" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">−5</text>` +
        `<text x="140" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">8</text>` +
        `<text x="110" y="150" text-anchor="middle" font-size="11" fill="#6b7280">−5 × 8 = −40 en −5 + 8 = 3</text>` +
        `<text x="110" y="172" text-anchor="middle" font-size="12" fill="#0f1f3d">Splits: 2x² <tspan fill="#2563eb" font-weight="700">− 5x + 8x</tspan> − 20</text>` +
        `<text x="110" y="192" text-anchor="middle" font-size="12" fill="#0f1f3d">Groepeer: x(2x − 5) + 4(2x − 5)</text>` +
        `<text x="110" y="212" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">= (x + 4)(2x − 5) = 0</text>` +
        `<text x="110" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">x = −4 óf x = 5/2</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THE QUADRATIC FORMULA AND THE DISCRIMINANT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-formula-discriminant',
      title: 'Die Kwadratiese Formule en die Diskriminant',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ʼn kwadratiese trinoom in <strong>ax² + bx + c = 0</strong> nie maklik faktoriseer met die a × c-metode nie, kan ons altyd die oplossings vind deur die <strong>kwadratiese formule</strong> te gebruik: x = (−b ± √(b² − 4ac)) / 2a. Die uitdrukking onder die vierkantswortel, <strong>b² − 4ac</strong>, word die <strong>diskriminant</strong> genoem (geskryf as Δ), en die teken daarvan wys hoeveel reële oplossings die vergelyking het — nog voordat ons klaar opgelos het.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vervang a, b, c')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('diskriminant')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing(s)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('geen reële oplossings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer a, b en c')} — Skryf die vergelyking in standaardvorm ax² + bx + c = 0 en lees die waardes van a, b en c af.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Bereken eers die ${or('diskriminant')} — Δ = b² − 4ac. Die teken daarvan wys watter soort oplossings jy kan verwag, nog voordat jy verder gaan.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vervang in die formule</strong> — Vervang ${bl('a, b, c')} en die ${or('diskriminant')} in x = (−b ± √(b² − 4ac)) / 2a.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vereenvoudig')} — Vereenvoudig die vierkantswortel (of los dit in eenvoudigste wortelvorm) en vereenvoudig die breuk om die finale ${gr('oplossing(s)')} te gee.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die diskriminant en die aard van die wortels</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Δ > 0')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee verskillende reële wortels — die grafiek sny die x-as by twee verskillende punte.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Δ = 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Een herhaalde (gelyke) reële wortel — die grafiek raak die x-as by net een punt.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Δ < 0')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Geen reële wortels nie — jy sou die vierkantswortel van ʼn negatiewe getal nodig gehad het, wat nie reëel is nie. Die grafiek raak nooit die x-as nie.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x met die kwadratiese formule, en los jou antwoord in eenvoudigste wortelvorm: x² − 4x − 3 = 0',
          answer: `x = ${gr('2 ± √7')}`,
          steps: [
            `${bl('Identifiseer a, b en c:')} ${bl('a = 1, b = −4, c = −3')}`,
            `Bereken die ${or('diskriminant')}: ${or('Δ = (−4)² − 4(1)(−3) = 16 + 12 = 28')}`,
            `Vervang in die formule: x = (−(−4) ± √28) / 2(1) = (4 ± √28) / 2`,
            `Vereenvoudig die wortel: √28 = 2√7, dus x = (4 ± 2√7) / 2`,
            `${gr('Oplossings:')} x = ${gr('2 ± √7')} ✓`,
          ],
        },
        {
          question: 'Wys dat 2x² − 3x + 5 = 0 geen reële oplossings het nie.',
          answer: `${re('Geen reële oplossings nie')} — Δ = ${re('−31')} < 0`,
          steps: [
            `${bl('Identifiseer a, b en c:')} ${bl('a = 2, b = −3, c = 5')}`,
            `Bereken die ${or('diskriminant')}: ${or('Δ = (−3)² − 4(2)(5) = 9 − 40 = −31')}`,
            `Aangesien ${re('Δ = −31 < 0')}, sou ons √(−31) nodig gehad het, en die vierkantswortel van ʼn negatiewe getal is nie ʼn reële getal nie.`,
            `${re('Daar is geen reële oplossings nie')} — die grafiek van y = 2x² − 3x + 5 sny nooit die x-as nie ✓`,
          ],
        },
        {
          question: 'Gebruik die diskriminant om te wys dat 4x² − 12x + 9 = 0 twee gelyke reële wortels het, en los dan op vir x.',
          answer: `x = ${gr('3/2')} (gelyke wortels)`,
          steps: [
            `${bl('Identifiseer a, b en c:')} ${bl('a = 4, b = −12, c = 9')}`,
            `Bereken die ${or('diskriminant')}: ${or('Δ = (−12)² − 4(4)(9) = 144 − 144 = 0')}`,
            `Aangesien Δ = 0, het die vergelyking twee gelyke reële wortels.`,
            `Vervang in die formule: x = (−(−12) ± √0) / 2(4) = 12 / 8`,
            `${gr('Oplossing:')} x = ${gr('3/2')} ✓ (Let op 4x² − 12x + 9 = (2x − 3)², wat die herhaalde wortel bevestig.)`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om die kwadratiese formule te gebruik en hoe die diskriminant die aantal reële oplossings aandui',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING LITERAL EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'literal-equations',
      title: 'Letterlike Vergelykings Oplos (Die Onderwerp van ʼn Formule Verander)',
      icon: '∀',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Letterlike vergelyking</strong> bevat meer as een veranderlike. Ons los op vir een veranderlike <em>in terme van die ander</em> — dit staan ook bekend as <em>die onderwerp van die formule verander</em>. Ons gebruik dieselfde inverse-bewerkingsbeginsels as by gewone vergelykings, en behandel die ander veranderlikes as konstantes.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onderwerp-veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ander veranderlikes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('geïsoleerde onderwerp')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Identifiseer die ${bl('veranderlike wat geïsoleer moet word')} — dit word die nuwe onderwerp aan die linkerkant.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Behandel ${or('al die ander veranderlikes')} asof hulle konstantes is — pas dieselfde inverse bewerkings toe wat jy met getalle sou gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Isoleer die onderwerp')} volledig — die finale antwoord druk ${gr('die onderwerp')} in terme van die ander veranderlikes uit.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vierkantswortels en gekwadreerde veranderlikes</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die ${bl('onderwerp-veranderlike')} gekwadreer is, deel eers om die gekwadreerde term te isoleer, en trek dan die vierkantswortel van albei kante as die finale stap.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir r in V = πr²h (in terme van V, π en h).',
          answer: `${gr('r')} = √(V / (πh))`,
          steps: [
            `Identifiseer die ${bl('onderwerp-veranderlike:')} ${bl('r')}. Die formule is V = π${bl('r')}²${or('h')}.`,
            `Deel albei kante deur ${or('πh')}: V / (${or('πh')}) = ${bl('r')}²`,
            `Trek die vierkantswortel van albei kante: ${gr('r')} = √(V / (${or('πh')})) ✓`,
          ],
        },
        {
          question: 'Los op vir h in A = 2πr² + 2πrh (in terme van A, π en r).',
          answer: `${gr('h')} = (A − 2πr²) / (2πr)`,
          steps: [
            `Identifiseer die ${bl('onderwerp-veranderlike:')} ${bl('h')}. Die formule is A = 2π${or('r')}² + 2π${or('r')}${bl('h')}.`,
            `Trek 2π${or('r')}² van albei kante af: A − 2π${or('r')}² = 2π${or('r')}${bl('h')}`,
            `Deel albei kante deur 2π${or('r')}: ${gr('h')} = (A − 2π${or('r')}²) / (2π${or('r')}) ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om die onderwerp van ʼn formule te verander deur inverse bewerkings te gebruik en ander veranderlikes as konstantes te behandel',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — LINEAR INEQUALITIES AND SIMULTANEOUS EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inequalities-simultaneous-equations',
      title: 'Lineêre Ongelykhede en Gelyktydige Vergelykings Oplos',
      icon: '≤',
      explanation:
        `<p style="margin-bottom:16px;">Om <strong>lineêre ongelykhede</strong> op te los volg dieselfde stappe as lineêre vergelykings, <strong>BEHALWE</strong> dat wanneer albei kante met ʼn <em>negatiewe getal</em> vermenigvuldig of gedeel word, dit die ${re('ongelykheidsteken omkeer')}. <strong>Gelyktydige vergelykings</strong> (twee vergelykings, twee onbekendes) kan numeries, algebraïes (substitusie of eliminasie), of grafies (deur die snypunt te vind) opgelos word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('ongelykheidsteken omkeer')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('substitusie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('snypunt')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kritieke reël vir ongelykhede</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Keer die ongelykheidsteken om')} wanneer jy met ʼn negatiewe getal vermenigvuldig of deel</p>` +
        `<p style="margin:0;color:#991b1b;">Voorbeeld: −2x ≤ 4 &nbsp;→&nbsp; deel deur −2 &nbsp;→&nbsp; ${re('x ≥ −2')} (die teken keer om van ≤ na ≥)</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Metodes vir gelyktydige vergelykings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Substitusie')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Druk een veranderlike in terme van die ander uit, en ${bl('substitueer')} dit dan in die tweede vergelyking.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Eliminasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die vergelykings bymekaar of trek hulle van mekaar af om een veranderlike te elimineer, en los dan op vir die ander.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Grafies')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Trek albei lyne op dieselfde asse. Die ${gr('snypunt')} is die gelyktydige oplossing.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: 3 − 2x ≤ 7',
          answer: `x ${gr('≥')} −2`,
          steps: [
            `Trek 3 van albei kante af: −2x ≤ 4`,
            `Deel albei kante deur −2 — ${re('die ongelykheidsteken keer om:')} x ${re('≥')} −2`,
            `Antwoord: x ${gr('≥')} −2 ✓`,
          ],
        },
        {
          question: 'Los gelyktydig op deur substitusie: 2x + y = 10 en x − y = 2',
          answer: `x = ${gr('4')}, y = ${gr('2')}`,
          steps: [
            `Druk uit die tweede vergelyking x in terme van y uit: ${bl('x = y + 2')}`,
            `${bl('Substitueer')} ${bl('x = y + 2')} in die eerste vergelyking: 2(y + 2) + y = 10`,
            `Brei uit: 2y + 4 + y = 10 &nbsp;→&nbsp; 3y + 4 = 10`,
            `Trek 4 af: 3y = 6 &nbsp;→&nbsp; y = ${gr('2')}`,
            `Vervang terug: x = ${gr('2')} + 2 = ${gr('4')}`,
            `Oplossing: x = ${gr('4')}, y = ${gr('2')} ✓ &nbsp; Kontroleer: 2(4) + 2 = 10 ✓ en 4 − 2 = 2 ✓`,
          ],
        },
        {
          question: 'Los grafies op: y = x + 3 en y = −x + 7',
          answer: `Snypunt: ${gr('(2, 5)')}`,
          steps: [
            `Trek albei lyne op dieselfde Cartesiese vlak. Die lyn y = x + 3 het gradiënt 1 en y-afsnit 3. Die lyn y = −x + 7 het gradiënt −1 en y-afsnit 7.`,
            `Die punt waar die lyne mekaar sny, is die gelyktydige oplossing. Algebraïes: stel x + 3 = −x + 7`,
            `Tel x by albei kante: 2x + 3 = 7 &nbsp;→&nbsp; 2x = 4 &nbsp;→&nbsp; x = 2`,
            `Vervang x = 2: y = 2 + 3 = 5`,
            `${gr('Snypunt:')} ${gr('(2, 5)')} ✓ &nbsp; Sien die diagram hieronder.`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om lineêre ongelykhede op te los, insluitend tekenomkering, en hoe om gelyktydige vergelykings deur substitusie en grafies op te los',

      diagramPlaceholder:
        'Cartesiese vlak wat die lyne y = x + 3 (blou) en y = −x + 7 (oranje) wys wat by die punt (2, 5) sny, gemerk in groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" style="max-width:280px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<g stroke="#e5e7eb" stroke-width="1">` +
        `<line x1="30" y1="20" x2="30" y2="200"/><line x1="50" y1="20" x2="50" y2="200"/><line x1="70" y1="20" x2="70" y2="200"/>` +
        `<line x1="90" y1="20" x2="90" y2="200"/><line x1="110" y1="20" x2="110" y2="200"/><line x1="130" y1="20" x2="130" y2="200"/>` +
        `<line x1="150" y1="20" x2="150" y2="200"/><line x1="170" y1="20" x2="170" y2="200"/><line x1="190" y1="20" x2="190" y2="200"/>` +
        `<line x1="20" y1="30" x2="200" y2="30"/><line x1="20" y1="50" x2="200" y2="50"/><line x1="20" y1="70" x2="200" y2="70"/>` +
        `<line x1="20" y1="90" x2="200" y2="90"/><line x1="20" y1="110" x2="200" y2="110"/><line x1="20" y1="130" x2="200" y2="130"/>` +
        `<line x1="20" y1="150" x2="200" y2="150"/><line x1="20" y1="170" x2="200" y2="170"/>` +
        `</g>` +
        `<line x1="20" y1="190" x2="205" y2="190" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="210,190 202,186 202,194" fill="#0f1f3d"/>` +
        `<line x1="30" y1="205" x2="30" y2="15" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="30,10 26,18 34,18" fill="#0f1f3d"/>` +
        `<text x="212" y="203" font-size="11" fill="#0f1f3d">x</text>` +
        `<text x="20" y="10" font-size="11" fill="#0f1f3d">y</text>` +
        `<line x1="30" y1="130" x2="130" y2="30" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="134" y="26" font-size="11" font-weight="700" fill="#2563eb">y = x + 3</text>` +
        `<line x1="30" y1="50" x2="170" y2="190" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="34" y="44" font-size="11" font-weight="700" fill="#ea580c">y = −x + 7</text>` +
        `<circle cx="70" cy="90" r="4.5" fill="#16a34a"/>` +
        `<text x="78" y="86" font-size="12" font-weight="700" fill="#16a34a">(2, 5)</text>` +
        `<text x="110" y="215" text-anchor="middle" font-size="10" fill="#6b7280">Die lyne sny waar albei vergelykings waar is</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — QUADRATIC AND RATIONAL INEQUALITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-rational-inequalities',
      title: 'Kwadratiese en Rasionale Ongelykhede',
      icon: '≠',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Kwadratiese ongelykheid</strong> (soos x² − x − 6 > 0) word opgelos deur die <strong>kritieke waardes</strong> te vind waar die uitdrukking gelyk is aan nul, dit op ʼn getallelyn te merk, en <strong>elke interval te toets</strong> om te sien waar die uitdrukking positief of negatief is. ʼn <strong>Rasionale ongelykheid</strong> (ʼn breuk vergelyk met nul) benodig kritieke waardes van <strong>albei</strong> die teller en die noemer — en die waarde wat die noemer nul maak, moet <strong>altyd</strong> van die oplossingstel uitgesluit word, aangesien die uitdrukking daar onbepaald is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kritieke waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('intervaltoetsing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale oplossing')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('altyd uitgesluit')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie — kwadratiese ongelykhede</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Keer om indien nodig')} — As die koëffisiënt van x² negatief is, vermenigvuldig of deel eers albei kante met −1 sodat a positief is, en ${re('keer die ongelykheidsteken om')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${bl('kritieke waardes')} — Faktoriseer en stel elke faktor gelyk aan nul om te vind waar die uitdrukking gelyk is aan nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Trek ʼn <strong>tekendiagram</strong> — Merk die ${bl('kritieke waardes')} op ʼn getallelyn en ${or('toets ʼn waarde uit elke interval')} om te sien of die uitdrukking daar positief of negatief is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die oplossingstel')} — Kies die interval(le) wat aan die oorspronklike ongelykheid voldoen, en gebruik ≤ of ≥ om die kritieke waardes in te sluit waar toepaslik.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Onthou: keer die teken om wanneer die leidende koëffisiënt negatief is')}</p>` +
        `<p style="margin:0;color:#991b1b;">Voorbeeld: −x² + 4x + 5 ≥ 0 &nbsp;→&nbsp; vermenigvuldig met −1 en keer om &nbsp;→&nbsp; ${re('x² − 4x − 5 ≤ 0')} &nbsp;→&nbsp; faktoriseer en los soos gewoonlik op.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelstrategie — rasionale ongelykhede</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind ${bl('kritieke waardes')} van <strong>albei</strong> dele — Stel die teller gelyk aan nul, EN stel die noemer gelyk aan nul.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Merk die waardes en ${or('toets elke interval')} — Gebruik die tekendiagram presies soos by ʼn kwadratiese ongelykheid.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Sluit altyd die noemer-nul-waarde uit')} — Selfs al word ≤ of ≥ gebruik en die tekenpatroon lyk asof dit ingesluit moet word, maak daardie waarde die uitdrukking onbepaald en kan dit ${re('nooit')} deel van die oplossingstel wees nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die oplossingstel')} — Die teller-nul-waarde kan ingesluit word (oop of toe sirkel, afhangend van die ongelykheid), maar die noemer-nul-waarde word altyd met ʼn ${re('oop sirkel')} aangedui.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Getallelyn-notasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn <strong>Oop sirkel</strong> beteken die waarde word uitgesluit (nie deel van die oplossing nie); ʼn <strong>toe (volgemaakte) sirkel</strong> beteken die waarde word ingesluit. ʼn Noemer-nul-waarde word altyd met ʼn oop sirkel aangedui, ongeag wat die ongelykheidsteken is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op vir x: −x² + 4x + 5 ≥ 0',
          answer: `${gr('−1 ≤ x ≤ 5')}`,
          steps: [
            `${re('Vermenigvuldig albei kante met −1 en keer die ongelykheid om:')} ${re('x² − 4x − 5 ≤ 0')}`,
            `Vind die ${bl('kritieke waardes')} deur te faktoriseer: (x − 5)(x + 1) = 0, dus ${bl('x = 5')} óf ${bl('x = −1')}`,
            `${or('Toets die intervalle:')} vir x < −1 is die uitdrukking positief; vir −1 < x < 5 is dit negatief; vir x > 5 is dit positief.`,
            `Ons benodig die uitdrukking ≤ 0, dus wil ons die interval waar dit negatief of nul is — die kritieke waardes ingesluit, aangesien die ongelykheid ≤ is.`,
            `${gr('Oplossing:')} ${gr('−1 ≤ x ≤ 5')} ✓`,
          ],
        },
        {
          question: 'Los op vir x: (x − 2)/(x + 1) ≤ 0. Onthou om enige waarde wat die noemer nul maak, uit te sluit.',
          answer: `${gr('−1 < x ≤ 2')}`,
          steps: [
            `Vind die ${bl('kritieke waardes')}: teller nul by ${bl('x = 2')}; noemer nul by ${re('x = −1')} (hierdie waarde moet uitgesluit word).`,
            `${or('Toets die intervalle:')} vir x < −1 is die uitdrukking positief; vir −1 < x < 2 is dit negatief; vir x > 2 is dit positief.`,
            `Ons benodig die uitdrukking ≤ 0, dus wil ons waar dit negatief of nul is. x = 2 gee presies nul, dus word dit ingesluit; x = −1 word ${re('altyd uitgesluit')} aangesien die uitdrukking daar onbepaald is.`,
            `${gr('Oplossing:')} ${gr('−1 < x ≤ 2')} ✓`,
          ],
        },
        {
          question: 'Los op vir x: (2x + 1)/(x − 3) ≥ 0. Verduidelik waarom x = 3 altyd van die oplossingstel uitgesluit moet word.',
          answer: `${gr('x ≤ −1/2 óf x > 3')}`,
          steps: [
            `Vind die ${bl('kritieke waardes')}: teller nul by ${bl('x = −1/2')}; noemer nul by ${re('x = 3')}.`,
            `${or('Toets die intervalle:')} vir x < −1/2 is die uitdrukking positief; vir −1/2 < x < 3 is dit negatief; vir x > 3 is dit positief.`,
            `Ons benodig die uitdrukking ≥ 0, dus wil ons waar dit positief of nul is. x = −1/2 gee presies nul, dus word dit ingesluit.`,
            `${re('x = 3 moet altyd uitgesluit word')}, selfs al is die uitdrukking hier positief aan albei kante daarvan — by x = 3 is die noemer nul, dus is die uitdrukking onbepaald en kan dit nooit deel van die oplossing wees nie, ongeag die tekenpatroon aan weerskante daarvan.`,
            `${gr('Oplossing:')} ${gr('x ≤ −1/2 óf x > 3')} ✓`,
          ],
        },
      ],


      videoPlaceholder:
        'Kort video wat wys hoe om kwadratiese ongelykhede met ʼn tekendiagram op te los en hoe om rasionale ongelykhede op te los deur altyd die noemer-nul-waarde uit te sluit',

      diagramPlaceholder:
        'Getallelyn wat die oplossing vir (2x + 1)/(x − 3) ≥ 0 wys: ʼn toe (volgemaakte) sirkel by x = −1/2 met skadu na links, en ʼn oop sirkel by x = 3 (altyd uitgesluit, noemer nul) met skadu na regs',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" width="100%" style="max-width:320px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="50" x2="205" y2="50" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="10,50 18,46 18,54" fill="#0f1f3d"/>` +
        `<polygon points="210,50 202,46 202,54" fill="#0f1f3d"/>` +
        `<line x1="18" y1="50" x2="70" y2="50" stroke="#16a34a" stroke-width="5"/>` +
        `<line x1="150" y1="50" x2="202" y2="50" stroke="#16a34a" stroke-width="5"/>` +
        `<circle cx="70" cy="50" r="6" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="70" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">−1/2</text>` +
        `<circle cx="150" cy="50" r="6" fill="white" stroke="#dc2626" stroke-width="2.5"/>` +
        `<text x="150" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">3 (uitgesluit)</text>` +
        `<text x="110" y="16" text-anchor="middle" font-size="11" fill="#6b7280">Oplossing: x ≤ −1/2 óf x > 3</text>` +
        `</svg>`,
    },
  ],

  topicPractice: [
    // ── Q1 Easy — factorisation, simple trinomial ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: x² − 9x + 20 = 0',
      checkMode: 'auto',
      options: ['x = 4 of x = 5', 'x = -4 of x = -5', 'x = -4 of x = 5', 'x = 4 of x = -5'],
      correctIndex: 0,
      explanation: 'Vind twee getalle wat vermenigvuldig tot 20 en optel tot −9: −4 en −5. Dus (x−4)(x−5)=0, wat x=4 of x=5 gee. Om die tekens van die faktore om te keer (die ander opsies) gee getalle wat nie meer tot +20 vermenigvuldig of tot −9 optel nie.',
    },

    // ── Q2 Easy — factorisation with negative constant ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Los op vir x: x² + 2x − 15 = 0',
      checkMode: 'auto',
      options: ['x = 5 of x = -3', 'x = -5 of x = 3', 'x = -3 of x = -5', 'x = 15 of x = -1'],
      correctIndex: 1,
      explanation: 'Vind twee getalle wat vermenigvuldig tot −15 en optel tot 2: 5 en −3. Dus (x+5)(x−3)=0, wat x=−5 of x=3 gee. Om albei tekens om te keer (opsie A) of die verkeerde faktorpaar van 15 te gebruik (opsie D) is algemene foute.',
    },

    // ── Q3 Medium — factorisation with a≠1 (a×c method) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: 2x² − x − 6 = 0',
      checkMode: 'auto',
      options: ['x = 3/2 of x = -2', 'x = -2/3 of x = 3', 'x = -3/2 of x = 2', 'x = 3/2 of x = 2'],
      correctIndex: 2,
      explanation: 'a×c = 2×(−6) = −12. Vind twee getalle wat vermenigvuldig tot −12 en optel tot −1: −4 en 3. Splits: 2x²−4x+3x−6=0 → 2x(x−2)+3(x−2)=0 → (2x+3)(x−2)=0, wat x=−3/2 of x=2 gee. Om die tekens van die wortels om te keer (opsie A) of die verkeerde faktorpaar te gebruik (opsie B) is algemene foute.',
    },

    // ── Q4 Medium — rearrange before factorising ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: x² = 7x − 12',
      checkMode: 'auto',
      options: ['x = -3 of x = -4', 'x = 12 of x = -1', 'x = 2 of x = 5', 'x = 3 of x = 4'],
      correctIndex: 3,
      explanation: 'Herrangskik na x²−7x+12=0. Vind twee getalle wat vermenigvuldig tot 12 en optel tot −7: −3 en −4. Dus (x−3)(x−4)=0, wat x=3 of x=4 gee. Om nie korrek te herrangskik nie (opsie A) of ʼn rekenfout in die faktorpaar (opsie C) is algemene foute.',
    },

    // ── Q5 Medium — factorisation with fractional root ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: 3x² + 5x − 2 = 0',
      checkMode: 'auto',
      options: ['x = 1/3 of x = -2', 'x = -1/3 of x = 2', 'x = 1/3 of x = 2', 'x = 3 of x = -2'],
      correctIndex: 0,
      explanation: 'a×c = 3×(−2) = −6. Vind twee getalle wat vermenigvuldig tot −6 en optel tot 5: 6 en −1. Splits: 3x²+6x−x−2=0 → 3x(x+2)−1(x+2)=0 → (3x−1)(x+2)=0, wat x=1/3 of x=−2 gee. Tekenfoute (opsie B) of om die koëffisiënt 3 te laat val wanneer x geïsoleer word (opsie D) is algemene foute.',
    },

    // ── Q6 Medium — quadratic formula, irrational roots ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die kwadratiese formule om vir x op te los (korrek tot 2 desimale plekke): x² + 4x − 7 = 0',
      checkMode: 'auto',
      options: ['x ≈ -0,68 of x ≈ -7,32', 'x ≈ 1,32 of x ≈ -5,32', 'x ≈ 5,32 of x ≈ -1,32', 'x ≈ 1,32 of x ≈ 4,68'],
      correctIndex: 1,
      explanation: 'a=1, b=4, c=−7. Diskriminant = 4²−4(1)(−7) = 16+28 = 44. x = (−4±√44)/2 = −2±√11 ≈ 1,32 of ≈ −5,32. Om te vergeet om die −b-term deur 2a te deel (opsie A), of die verkeerde teken vir −b te gebruik (opsie C), is algemene foute.',
    },

    // ── Q7 Medium — quadratic formula, irrational roots (leave in surd form) ──
    {
      difficulty: 'Medium',
      question: 'Los op vir x met die kwadratiese formule, en los jou antwoord in eenvoudigste wortelvorm: 2x² − 3x − 4 = 0',
      checkMode: 'auto',
      options: ['x = (3 ± √41) / 2', 'x = (-3 ± √41) / 4', 'x = (3 ± √41) / 4', 'x = (3 ± √25) / 4'],
      correctIndex: 2,
      explanation: 'a=2, b=−3, c=−4. Diskriminant = (−3)²−4(2)(−4) = 9+32 = 41. x = (−(−3)±√41)/(2×2) = (3±√41)/4. Om te vergeet om a in die noemer te verdubbel (opsie A), of ʼn tekenfout op −b (opsie B), is algemene foute.',
    },

    // ── Q8 Hard — discriminant shows no real solutions ────────────────────────
    {
      difficulty: 'Hard',
      question: 'Wat is die diskriminant van x² + 2x + 5 = 0, en wat sê dit oor die oplossings?',
      checkMode: 'auto',
      options: [
        'Δ = 24, dus is daar twee verskillende reële oplossings (Δ > 0)',
        'Δ = -16, dus is daar een herhaalde reële oplossing',
        'Δ = 4, dus is daar twee verskillende reële oplossings (Δ > 0)',
        'Δ = -16, dus is daar geen reële oplossings nie (Δ < 0)',
      ],
      correctIndex: 3,
      explanation: 'Diskriminant = b²−4ac = 2²−4(1)(5) = 4−20 = −16. Aangesien Δ < 0, is die vierkantswortel van ʼn negatiewe getal nie reëel nie, dus het hierdie vergelyking geen reële oplossings nie. Tekenfoute wanneer 4ac bereken word (opsie A), of om Δ<0 met Δ=0 te verwar (opsie B), is algemene foute.',
    },

    // ── Q9 Hard — quadratic formula, irrational roots ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x met die kwadratiese formule, en los jou antwoord in eenvoudigste wortelvorm: 3x² − 2x − 2 = 0',
      checkMode: 'auto',
      options: ['x = (1 ± √7) / 3', 'x = (-1 ± √7) / 3', 'x = (1 ± √10) / 3', 'x = (1 ± √7) / 6'],
      correctIndex: 0,
      explanation: 'a=3, b=−2, c=−2. Diskriminant = (−2)²−4(3)(−2) = 4+24 = 28. x = (2±√28)/6 = (2±2√7)/6 = (1±√7)/3 na vereenvoudiging. Tekenfoute op −b (opsie B) of rekenfoute in die diskriminant (opsie C) is algemene foute.',
    },

    // ── Q10 Medium — discriminant shows equal roots ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die diskriminant om te toon dat x² − 6x + 9 = 0 twee gelyke reële wortels het, en los dan vir x op.',
      checkMode: 'auto',
      options: [
        'Δ = 36, dus is daar twee verskillende reële wortels; x = 3 of x = -3',
        'Δ = 0, dus is daar twee gelyke reële wortels; x = 3',
        'Δ = 0, dus is daar twee gelyke reële wortels; x = -3',
        'Δ = -36, dus is daar geen reële wortels nie',
      ],
      correctIndex: 1,
      explanation: 'Diskriminant = (−6)²−4(1)(9) = 36−36 = 0, dus is daar twee gelyke reële wortels. Faktoriseer: (x−3)²=0, dus x=3. Om die −4ac-term te vergeet (opsie A), of ʼn tekenfout in die finale wortel (opsie C), is algemene foute.',
    },

    // ── Q11 Medium — quadratic inequality (>), roots outside ──────────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: x² − x − 6 > 0',
      checkMode: 'auto',
      options: ['-2 < x < 3', 'x > -2 of x < 3', 'x < -2 of x > 3', 'x ≤ -2 of x ≥ 3'],
      correctIndex: 2,
      explanation: 'Faktoriseer: (x−3)(x+2)>0. Kritieke waardes: x=−2 en x=3. Aangesien die parabool opwaarts oopmaak, is dit positief buite die wortels: x<−2 of x>3. Om die interval tussen die wortels te kies (opsie A) of die verkeerde grenstipe te gebruik (opsie D) is algemene foute.',
    },

    // ── Q12 Medium — quadratic inequality (≥), between roots after rearranging ─
    {
      difficulty: 'Medium',
      question: 'Los op vir x: −x² + 2x + 8 ≥ 0',
      checkMode: 'auto',
      options: ['x ≤ -2 of x ≥ 4', '-4 ≤ x ≤ 2', '-2 < x < 4', '-2 ≤ x ≤ 4'],
      correctIndex: 3,
      explanation: 'Vermenigvuldig albei kante met −1 en keer die ongelykheidsteken om: x²−2x−8≤0. Faktoriseer: (x−4)(x+2)≤0. Kritieke waardes: x=−2 en x=4. Aangesien hierdie parabool (na omkering) opwaarts oopmaak, is dit ≤0 tussen die wortels: −2≤x≤4. Om te vergeet om die ongelykheidsteken om te keer (opsie A) is die klassieke fout hier.',
    },

    // ── Q13 Hard — quadratic inequality (<), a≠1 ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op vir x: 2x² + 3x − 2 < 0',
      checkMode: 'auto',
      options: ['-2 < x < 1/2', 'x < -2 of x > 1/2', '-1/2 < x < 2', '-2 ≤ x ≤ 1/2'],
      correctIndex: 0,
      explanation: 'Faktoriseer: (2x−1)(x+2)<0. Kritieke waardes: x=1/2 en x=−2. Aangesien die parabool opwaarts oopmaak, is dit negatief tussen die wortels: −2<x<1/2. Om die buitenste interval te kies (opsie B) of die verkeerde grenstipe te gebruik (opsie D) is algemene foute.',
    },

    // ── Q14 Medium — quadratic inequality (≤), perfect trinomial ──────────────
    {
      difficulty: 'Medium',
      question: 'Los op vir x: x² − 5x + 6 ≤ 0',
      checkMode: 'auto',
      options: ['x ≤ 2 of x ≥ 3', '2 ≤ x ≤ 3', '-3 ≤ x ≤ -2', '2 < x < 3'],
      correctIndex: 1,
      explanation: 'Faktoriseer: (x−2)(x−3)≤0. Kritieke waardes: x=2 en x=3. Aangesien die parabool opwaarts oopmaak, is dit ≤0 tussen die wortels: 2≤x≤3. Om die buitenste interval te kies (opsie A) of streng ongelykhede te gebruik (opsie D) is algemene foute.',
    },

    // ── Q15 Hard — rational inequality, strict, both critical values excluded ──
    {
      difficulty: 'Hard',
      question: `Los op vir x: ${frac('x − 1', 'x + 2')} > 0. Onthou om enige waarde wat die noemer nul maak, uit te sluit.`,
      checkMode: 'auto',
      options: ['-2 < x < 1', 'x ≤ -2 of x ≥ 1', 'x < -2 of x > 1', '1 < x'],
      correctIndex: 2,
      explanation: 'Kritieke waardes: x=1 (teller nul) en x=−2 (noemer nul, altyd uitgesluit). Toetsing van die intervalle toon die uitdrukking is positief wanneer x<−2 of x>1. Om x=−2 in te sluit (opsie B) is ʼn ernstige fout aangesien die uitdrukking daar onbepaald is; om ʼn tak van die oplossing weg te laat (opsie D) mis deel van die oplossing.',
    },

    // ── Q16 Hard — rational inequality, ≤, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: `Los op vir x: ${frac('x + 3', 'x − 2')} ≤ 0. Onthou om enige waarde wat die noemer nul maak, uit te sluit.`,
      checkMode: 'auto',
      options: ['-3 < x ≤ 2', '-3 ≤ x ≤ 2', 'x ≤ -3 of x > 2', '-3 ≤ x < 2'],
      correctIndex: 3,
      explanation: 'Kritieke waardes: x=−3 (teller nul, ingesluit aangesien die uitdrukking daar gelyk is aan 0) en x=2 (noemer nul, moet altyd uitgesluit word). Toetsing van die intervalle toon die uitdrukking is negatief of nul vir −3≤x<2. Om x=2 in te sluit (opsie B) is ʼn ernstige fout aangesien die uitdrukking daar onbepaald is.',
    },

    // ── Q17 Hard — rational inequality, ≥, one boundary included ──────────────
    {
      difficulty: 'Hard',
      question: `Los op vir x: ${frac('2x − 1', 'x + 4')} ≥ 0. Onthou dat die waarde wat die noemer nul maak, altyd uitgesluit moet word.`,
      checkMode: 'auto',
      options: ['x < -4 of x ≥ 1/2', '-4 ≤ x ≤ 1/2', 'x ≤ -4 of x ≥ 1/2', 'x < -4 of x > 1/2'],
      correctIndex: 0,
      explanation: 'Kritieke waardes: teller nul by x=1/2 (ingesluit, aangesien die uitdrukking daar gelyk is aan nul) en noemer nul by x=−4 (altyd uitgesluit, aangesien die uitdrukking daar onbepaald is). Toetsing van die intervalle gee x<−4 of x≥1/2. Om x=−4 in te sluit (opsie C) is ʼn ernstige fout, ongeag die tekenpatroon daar naby.',
    },

    // ── Q18 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Los gelyktydig op vir x en y: y = x + 1 en y = x² − 1',
      checkMode: 'auto',
      options: ['x=2,y=3 of x=1,y=0', 'x=2,y=3 of x=-1,y=0', 'x=-2,y=-1 of x=1,y=0', 'x=2,y=1 of x=-1,y=0'],
      correctIndex: 1,
      explanation: 'Stel x+1 = x²−1, dus x²−x−2=0, wat (x−2)(x+1)=0 gee, dus x=2 of x=−1. Vervang in y=x+1: as x=2, is y=3; as x=−1, is y=0. Kontroleer: (2)²−1=3 ✓ en (−1)²−1=0 ✓. Om nie korrek terug te vervang om y te vind nie (opsies A en D) is ʼn algemene fout.',
    },

    // ── Q19 Medium — simultaneous linear-quadratic, two integer solutions ─────
    {
      difficulty: 'Medium',
      question: 'Los gelyktydig op vir x en y: y = 2x − 3 en y = x² − 4x + 5',
      checkMode: 'auto',
      options: ['x=2,y=1 of x=4,y=13', 'x=-2,y=-7 of x=-4,y=-11', 'x=2,y=1 of x=4,y=5', 'x=2,y=5 of x=4,y=1'],
      correctIndex: 2,
      explanation: 'Stel 2x−3 = x²−4x+5, dus x²−6x+8=0, wat (x−2)(x−4)=0 gee, dus x=2 of x=4. Vervang in y=2x−3: as x=2, is y=1; as x=4, is y=5. Kontroleer: (2)²−4(2)+5=1 ✓ en (4)²−4(4)+5=5 ✓. Om die gepaarde y-waardes te verwissel (opsie D) is ʼn algemene fout.',
    },

    // ── Q20 Hard — simultaneous linear-quadratic, irrational solutions ────────
    {
      difficulty: 'Hard',
      question: 'Los gelyktydig op vir x en y, en los jou antwoorde in eenvoudigste wortelvorm: x + y = 5 en y = x² − 3x + 1',
      checkMode: 'auto',
      options: [
        'x=1+√5, y=4+√5 of x=1-√5, y=4-√5',
        'x=2+√5, y=3-√5 of x=2-√5, y=3+√5',
        'x=1+√20, y=4-√20 of x=1-√20, y=4+√20',
        'x=1+√5, y=4-√5 of x=1-√5, y=4+√5',
      ],
      correctIndex: 3,
      explanation: 'Uit die eerste vergelyking, y=5−x. Vervang: 5−x=x²−3x+1, dus x²−2x−4=0. Met die kwadratiese formule: x=(2±√20)/2=1±√5. As x=1+√5, is y=5−(1+√5)=4−√5. As x=1−√5, is y=5−(1−√5)=4+√5. Om te vergeet om √20 deur 2 te deel (opsie C) of om die gepaarde y-waardes te verwissel (opsie A) is algemene foute.',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! ʼn Volpunt — jy het vergelykings en ongelykhede vir Graad 10 volkome bemeester. Hou so aan!' },
      { minScore: 15, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van die inhoud. Hersien enige gemiste dele en jy sal dit perfek kry.' },
      { minScore: 11, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
      { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! ʼn Volpunt — jy het vergelykings en ongelykhede vir Graad 10 volkome bemeester. Hou so aan!' },
    { minScore: 15, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van die inhoud. Hersien enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 11, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Lineêre vergelykings met hakies / breuke (posisies 0-2)
        { difficulty: 'Easy', question: 'Los op vir x: 4(x − 3) = 20', checkMode: 'auto', options: ['x = 9', 'x = 5,75', 'x = 2', 'x = 8'], correctIndex: 3, explanation: 'Brei uit: 4x − 12 = 20. Tel 12 by albei kante: 4x = 32. Deel deur 4: x = 8. Om te vergeet om die 4 oor die hakie te versprei (opsie B), of ʼn tekenfout wanneer x geïsoleer word (opsie C), is algemene foute.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x: 5x − 2(x + 1) = 13', checkMode: 'auto', options: ['x = 11/3', 'x = 5', 'x = 3', 'x = 15'], correctIndex: 1, explanation: 'Brei uit (die minusteken keer albei tekens in die hakie om): 5x − 2x − 2 = 13. Bring gelyksoortige terme bymekaar: 3x − 2 = 13. Tel 2 by: 3x = 15. Deel deur 3: x = 5. Om te vergeet om die negatiewe teken oor elke term in die hakie te versprei (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium', question: `Los op vir x: ${frac('3x + 1', '4')} = ${frac('x − 2', '2')}`, checkMode: 'auto', options: ['x = -3', 'x = -1,5', 'x = -5', 'x = 3'], correctIndex: 2, explanation: 'Die KGV van 4 en 2 is 4. Vermenigvuldig elke term met 4: (3x + 1) = 2(x − 2). Brei uit: 3x + 1 = 2x − 4. Trek 2x af: x + 1 = −4. Trek 1 af: x = −5. Om te vergeet om die 2 te versprei, of ʼn tekenfout wanneer die hakie uitgebrei word, is algemene foute.' },

        // Blok B — Kwadratiese vergelykings deur faktorisering (posisies 3-5)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 3x − 10 = 0', checkMode: 'auto', options: ['x = -5 of x = 2', 'x = -5 of x = -2', 'x = 10 of x = -1', 'x = 5 of x = -2'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot −10 en optel tot −3: −5 en 2, dus (x−5)(x+2)=0, wat x=5 of x=−2 gee. Verwarring met tekens wanneer die faktore geskryf word (opsies A en B), of om die verkeerde faktorpaar van 10 te gebruik (opsie C), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: 2x² − 7x + 3 = 0', checkMode: 'auto', options: ['x = 3 of x = 1/2', 'x = -3 of x = -1/2', 'x = 3 of x = -1/2', 'x = 1/3 of x = -6'], correctIndex: 0, explanation: 'a×c = 2×3 = 6. Vind twee getalle wat vermenigvuldig tot 6 en optel tot −7: −6 en −1. Splits: 2x²−6x−x+3=0 → 2x(x−3)−1(x−3)=0 → (2x−1)(x−3)=0, wat x=1/2 of x=3 gee. Tekenfoute (opsies B en C), of om die verkeerde faktorpaar van 6 te gebruik (opsie D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² + 4x = 21', checkMode: 'auto', options: ['x = -3 of x = 7', 'x = 3 of x = -7', 'x = -3 of x = -7', 'x = 21 of x = -1'], correctIndex: 1, explanation: 'Herrangskik: x²+4x−21=0. Vind twee getalle wat vermenigvuldig tot −21 en optel tot 4: 7 en −3, dus (x+7)(x−3)=0, wat x=−7 of x=3 gee. Verwarring met tekens (opsies A en C) of om die verkeerde faktorpaar van 21 te gebruik (opsie D) is algemene foute.' },

        // Blok C — Gelyktydige lineêre vergelykings (posisies 6-9)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: x + y = 9 en x − y = 3', checkMode: 'auto', options: ['x=3,y=6', 'x=9,y=0', 'x=6,y=3', 'x=6,y=2'], correctIndex: 2, explanation: 'Tel die vergelykings bymekaar: 2x = 12, dus x = 6. Vervang in x + y = 9: 6 + y = 9, dus y = 3. Om x en y te verwissel (opsie A), of ʼn rekenfout in enige stap (opsies B en D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y deur substitusie: y = x − 1 en 3x + y = 15', checkMode: 'auto', options: ['x=3,5; y=2,5', 'x=3,y=4', 'x=5,y=4', 'x=4,y=3'], correctIndex: 3, explanation: 'Vervang y = x − 1 in 3x + y = 15: 3x + x − 1 = 15. Kombineer: 4x − 1 = 15, dus 4x = 16, x = 4. Vervang terug: y = 4 − 1 = 3. ʼn Tekenfout wanneer vervang word (opsie A), of om te verwar watter veranderlike watter is (opsie B), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y deur eliminasie: 2x + 3y = 16 en 2x − y = 4', checkMode: 'auto', options: ['x=3,5; y=3', 'x=0,5; y=-3', 'x=2,y=3', 'x=3,5; y=4'], correctIndex: 0, explanation: 'Trek die tweede vergelyking van die eerste af: (2x + 3y) − (2x − y) = 16 − 4, dus 4y = 12, y = 3. Vervang y = 3 in 2x − y = 4: 2x − 3 = 4, dus 2x = 7, x = 3,5. ʼn Tekenfout wanneer die vergelykings afgetrek word (opsie B), of om in die verkeerde vergelyking te vervang (opsie C), is algemene foute.' },
        { difficulty: 'Hard', question: 'Twee getalle het ʼn som van 20 en ʼn verskil van 6. Wat is die twee getalle?', checkMode: 'auto', options: ['14 en 6', '13 en 7', '10 en 10', '13 en 6'], correctIndex: 1, explanation: 'Laat die getalle x en y wees, met x > y. x + y = 20 en x − y = 6. Tel die vergelykings bymekaar: 2x = 26, dus x = 13. Vervang in x + y = 20: 13 + y = 20, dus y = 7. Die getalle is 13 en 7. Om nie albei vergelykings saam te gebruik nie (opsie C), of ʼn rekenfout wanneer opgetel word (opsie A), is algemene foute.' },

        // Blok D — Lineêre ongelykhede, insl. tekenomkering en getallelyn-beskrywing (posisies 10-12)
        { difficulty: 'Easy', question: 'Los op vir x: 3x − 5 > 10', checkMode: 'auto', options: ['x < 5', 'x > 15', 'x > 5', 'x > -5'], correctIndex: 2, explanation: 'Tel 5 by albei kante: 3x > 15. Deel deur 3: x > 5 (geen omkering nodig nie aangesien ons deur ʼn positiewe getal gedeel het). Om die ongelykheidsteken onnodig om te keer (opsie A), of om te vergeet om deur 3 te deel (opsie B), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: −4x + 3 ≤ 15', checkMode: 'auto', options: ['x ≤ -3', 'x ≥ 3', 'x ≥ -12', 'x ≥ -3'], correctIndex: 3, explanation: 'Trek 3 van albei kante af: −4x ≤ 12. Deel albei kante deur −4 — die ongelykheidsteken keer om: x ≥ −3. Om te vergeet om die ongelykheidsteken om te keer wanneer deur ʼn negatiewe getal gedeel word (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: 5 − 2x < 3(x − 5). Beskryf hoe jy die oplossingstel op ʼn getallelyn sou voorstel.', checkMode: 'auto', options: ['x > 4', 'x > 2', 'x < 4', 'x > 5'], correctIndex: 0, explanation: 'Brei die regterkant uit: 5 − 2x < 3x − 15. Tel 2x by albei kante: 5 < 5x − 15. Tel 15 by: 20 < 5x. Deel deur 5: 4 < x, d.w.s. x > 4. Om te vergeet om die 3 oor albei terme in die hakie te versprei (3(x−5) = 3x−5 in plaas van 3x−15) gee die algemene verkeerde antwoord x>2 (opsie B). Op ʼn getallelyn word die ware oplossing met ʼn oop sirkel by 4 en skadu wat regs na positiewe oneindigheid strek, aangedui, aangesien 4 self nie ingesluit is nie.' },

        // Blok E — Gelyktydige lineêr-kwadratiese stelsels (posisies 13-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = x + 2 en y = x² − 4', checkMode: 'auto', options: ['x=-3,y=-1 of x=2,y=4', 'x=3,y=5 of x=-2,y=0', 'x=3,y=0 of x=-2,y=5', 'x=3,y=5 of x=-2,y=2'], correctIndex: 1, explanation: 'Stel x + 2 = x² − 4, dus x² − x − 6 = 0. Faktoriseer: (x − 3)(x + 2) = 0, dus x = 3 of x = −2. As x = 3: y = 5. As x = −2: y = 0. Kontroleer: 3² − 4 = 5 ✓ en (−2)² − 4 = 0 ✓. Tekenfoute in die faktorisering (opsie A), of om te verwar watter y-waarde by watter x hoort (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y: y = 3x − 2 en y = x² + 2x − 8', checkMode: 'auto', options: ['x=-3,y=-11 of x=2,y=4', 'x=3,y=-8 of x=-2,y=7', 'x=3,y=7 of x=-2,y=-8', 'x=3,y=7 of x=-2,y=-6'], correctIndex: 2, explanation: 'Stel 3x − 2 = x² + 2x − 8, dus x² − x − 6 = 0. Faktoriseer: (x − 3)(x + 2) = 0, dus x = 3 of x = −2. As x = 3: y = 3(3) − 2 = 7. As x = −2: y = 3(−2) − 2 = −8. Kontroleer: 3² + 2(3) − 8 = 7 ✓ en (−2)² + 2(−2) − 8 = −8 ✓. Om die gepaarde y-waardes te verwissel (opsie B), of ʼn rekenfout wanneer y bereken word (opsie D), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en los jou antwoorde in eenvoudigste wortelvorm: y = x + 4 en y = x² + x − 2', checkMode: 'auto', options: ['x=√6, y=-√6+4 of x=-√6, y=√6+4', 'x=2√2, y=2√2+4 of x=-2√2, y=-2√2+4', 'x=√6, y=√6 of x=-√6, y=-√6', 'x=√6, y=√6+4 of x=-√6, y=-√6+4'], correctIndex: 3, explanation: 'Vervang die eerste vergelyking in die tweede: x + 4 = x² + x − 2. Vereenvoudig: 4 = x² − 2, dus x² = 6, x = ±√6. As x = √6: y = √6 + 4. As x = −√6: y = −√6 + 4. Om die gepaarde y-waardes te verwissel (opsie A), of om te vergeet om die 4 by y te tel (opsie C), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: 2x + y = 7 en y = x² − 3x + 5', checkMode: 'auto', options: ['x=2,y=3 of x=-1,y=9', 'x=2,y=9 of x=-1,y=3', 'x=-2,y=11 of x=1,y=5', 'x=2,y=3 of x=-1,y=8'], correctIndex: 0, explanation: 'Uit die eerste vergelyking, y = 7 − 2x. Vervang: 7 − 2x = x² − 3x + 5. Herrangskik: x² − x − 2 = 0. Faktoriseer: (x − 2)(x + 1) = 0, dus x = 2 of x = −1. As x = 2: y = 3. As x = −1: y = 9. Kontroleer: 2² − 3(2) + 5 = 3 ✓ en (−1)² − 3(−1) + 5 = 9 ✓. Om die gepaarde y-waardes te verwissel (opsie B), of ʼn tekenfout in die faktorisering (opsie C), is algemene foute.' },

        // Blok F — Woordprobleme en toepassings in die styl van letterlike vergelykings (posisies 17-19)
        { difficulty: 'Medium', question: 'Die lengte van ʼn reghoek is 5 cm meer as sy wydte. As die omtrek 34 cm is, stel ʼn vergelyking op in terme van die wydte w en los op vir w.', checkMode: 'auto', options: ['w = 14,5', 'w = 6', 'w = 11', 'w = 7'], correctIndex: 1, explanation: 'Omtrek = 2(lengte + wydte) = 2((w + 5) + w) = 34. Vereenvoudig: 2(2w + 5) = 34, dus 4w + 10 = 34. Trek 10 af: 4w = 24. Deel deur 4: w = 6. Om die faktor 2 in die omtrekformule te vergeet (opsie A), of om die lengte in plaas van die wydte te rapporteer (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getal vermeerder met 3, dan verdubbel, gee dieselfde resultaat as die getal verminder met 1, dan verdriedubbel. Vind die getal.', checkMode: 'auto', options: ['x = 3', 'x = 6', 'x = 9', 'x = 15'], correctIndex: 2, explanation: 'Laat die getal x wees. Vergelyking: 2(x + 3) = 3(x − 1). Brei uit: 2x + 6 = 3x − 3. Trek 2x af: 6 = x − 3. Tel 3 by: x = 9. Kontroleer: 2(9 + 3) = 24 en 3(9 − 1) = 24 ✓. ʼn Tekenfout wanneer uitgebrei word (opsie A), of om nie ten volle te versprei nie (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'ʼn Skool huur stoele vir ʼn matriekafskeid teen ʼn opstelfooi van R500 plus R15 per stoel. Sipho het ʼn begroting van R1 400. Stel ʼn ongelykheid op vir die aantal stoele c wat hy kan bekostig, en los op vir c.', checkMode: 'auto', options: ['c ≤ 93', 'c ≤ 65', 'c ≥ 60', 'c ≤ 60'], correctIndex: 3, explanation: 'Totale koste: 500 + 15c ≤ 1400. Trek 500 af: 15c ≤ 900. Deel deur 15: c ≤ 60. Sipho kan hoogstens 60 stoele bekostig. Om te vergeet om die opstelfooi eers af te trek (opsie A), of om die ongelykheidsteken onnodig om te keer (opsie C), is algemene foute.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, gelyktydige stelsels, en ongelykhede bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor gelyktydige stelsels of ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor faktorisering en gelyktydige vergelykings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Lineêre vergelykings met hakies / breuke (posisies 0-2)
        { difficulty: 'Easy', question: 'Los op vir x: 3(x − 4) = 15', checkMode: 'auto', options: ['x = 9', 'x = 19/3', 'x = 1', 'x = 8'], correctIndex: 0, explanation: 'Brei uit: 3x − 12 = 15. Tel 12 by albei kante: 3x = 27. Deel deur 3: x = 9. Om te vergeet om die 3 oor die hakie te versprei (opsie B), of ʼn tekenfout wanneer x geïsoleer word (opsie C), is algemene foute.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x: 6x − 3(x + 2) = 12', checkMode: 'auto', options: ['x = 2', 'x = 6', 'x = 4', 'x = 18'], correctIndex: 1, explanation: 'Brei uit (die minusteken keer albei tekens in die hakie om): 6x − 3x − 6 = 12. Bring gelyksoortige terme bymekaar: 3x − 6 = 12. Tel 6 by: 3x = 18. Deel deur 3: x = 6. Om te vergeet om die negatiewe teken oor elke term in die hakie te versprei (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium', question: `Los op vir x: ${frac('2x − 1', '3')} = ${frac('x + 4', '5')}`, checkMode: 'auto', options: ['x = 1', 'x = -1', 'x = 17/7', 'x = -13'], correctIndex: 2, explanation: 'Die KGV van 3 en 5 is 15. Vermenigvuldig elke term met 15: 5(2x − 1) = 3(x + 4). Brei uit: 10x − 5 = 3x + 12. Trek 3x af: 7x − 5 = 12. Tel 5 by: 7x = 17. Deel deur 7: x = 17/7. Om te vergeet om albei kante met die korrekte KGV-faktor te vermenigvuldig, of ʼn tekenfout wanneer uitgebrei word, is algemene foute.' },

        // Blok B — Kwadratiese vergelykings deur faktorisering (posisies 3-5)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 2x − 8 = 0', checkMode: 'auto', options: ['x = -4 of x = 2', 'x = -4 of x = -2', 'x = 8 of x = -1', 'x = 4 of x = -2'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot −8 en optel tot −2: −4 en 2, dus (x−4)(x+2)=0, wat x=4 of x=−2 gee. Verwarring met tekens (opsies A en B), of om die verkeerde faktorpaar van 8 te gebruik (opsie C), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: 3x² − 5x − 2 = 0', checkMode: 'auto', options: ['x = 2 of x = -1/3', 'x = -2 of x = 1/3', 'x = 2 of x = 1/3', 'x = -1/6 of x = 6'], correctIndex: 0, explanation: 'a×c = 3×(−2) = −6. Vind twee getalle wat vermenigvuldig tot −6 en optel tot −5: −6 en 1. Splits: 3x²−6x+x−2=0 → 3x(x−2)+1(x−2)=0 → (3x+1)(x−2)=0, wat x=−1/3 of x=2 gee. Tekenfoute (opsies B en C), of om die verkeerde faktorpaar van 6 te gebruik (opsie D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² + 3x = 18', checkMode: 'auto', options: ['x = -3 of x = 6', 'x = 3 of x = -6', 'x = -3 of x = -6', 'x = 18 of x = -1'], correctIndex: 1, explanation: 'Herrangskik: x²+3x−18=0. Vind twee getalle wat vermenigvuldig tot −18 en optel tot 3: 6 en −3, dus (x+6)(x−3)=0, wat x=−6 of x=3 gee. Verwarring met tekens (opsies A en C), of om die verkeerde faktorpaar van 18 te gebruik (opsie D), is algemene foute.' },

        // Blok C — Gelyktydige lineêre vergelykings (posisies 6-9)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: x + y = 11 en x − y = 5', checkMode: 'auto', options: ['x=3,y=8', 'x=8,y=2', 'x=8,y=3', 'x=11,y=0'], correctIndex: 2, explanation: 'Tel die vergelykings bymekaar: 2x = 16, dus x = 8. Vervang in x + y = 11: 8 + y = 11, dus y = 3. Om x en y te verwissel (opsie A), of ʼn rekenfout (opsies B en D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y deur substitusie: y = 2x + 1 en 2x + y = 13', checkMode: 'auto', options: ['x=3,5; y=8', 'x=7,y=3', 'x=4,y=9', 'x=3,y=7'], correctIndex: 3, explanation: 'Vervang y = 2x + 1 in 2x + y = 13: 2x + 2x + 1 = 13. Kombineer: 4x + 1 = 13, dus 4x = 12, x = 3. Vervang terug: y = 2(3) + 1 = 7. ʼn Tekenfout wanneer vervang word (opsie A), of om te verwar watter veranderlike watter is (opsie B), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y deur eliminasie: 3x + 2y = 18 en 3x − y = 3', checkMode: 'auto', options: ['x=8/3; y=5', 'x=1,y=5', 'x=8/3; y=-5', 'x=8/3; y=6'], correctIndex: 0, explanation: 'Trek die tweede vergelyking van die eerste af: (3x + 2y) − (3x − y) = 18 − 3, dus 3y = 15, y = 5. Vervang y = 5 in 3x − y = 3: 3x − 5 = 3, dus 3x = 8, x = 8/3. ʼn Tekenfout wanneer teruggevervang word (opsie C), of ʼn rekenfout (opsie D), is algemene foute.' },
        { difficulty: 'Hard', question: 'Twee getalle het ʼn som van 24 en ʼn verskil van 8. Wat is die twee getalle?', checkMode: 'auto', options: ['17 en 7', '16 en 8', '12 en 12', '16 en 9'], correctIndex: 1, explanation: 'Laat die getalle x en y wees, met x > y. x + y = 24 en x − y = 8. Tel die vergelykings bymekaar: 2x = 32, dus x = 16. Vervang in x + y = 24: 16 + y = 24, dus y = 8. Die getalle is 16 en 8. Om nie albei vergelykings saam te gebruik nie (opsie C), of ʼn rekenfout wanneer opgetel word (opsie A), is algemene foute.' },

        // Blok D — Lineêre ongelykhede, insl. tekenomkering en getallelyn-beskrywing (posisies 10-12)
        { difficulty: 'Easy', question: 'Los op vir x: 2x − 7 > 9', checkMode: 'auto', options: ['x < 8', 'x > 16', 'x > 8', 'x > -8'], correctIndex: 2, explanation: 'Tel 7 by albei kante: 2x > 16. Deel deur 2: x > 8 (geen omkering nodig nie aangesien ons deur ʼn positiewe getal gedeel het). Om die ongelykheidsteken onnodig om te keer (opsie A), of om te vergeet om deur 2 te deel (opsie B), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: −3x + 4 ≥ 19', checkMode: 'auto', options: ['x ≥ -5', 'x ≤ 5', 'x ≤ -25', 'x ≤ -5'], correctIndex: 3, explanation: 'Trek 4 van albei kante af: −3x ≥ 15. Deel albei kante deur −3 — die ongelykheidsteken keer om: x ≤ −5. Om te vergeet om die ongelykheidsteken om te keer wanneer deur ʼn negatiewe getal gedeel word (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: 8 − 3x ≤ 2(x + 4). Beskryf hoe jy die oplossingstel op ʼn getallelyn sou voorstel.', checkMode: 'auto', options: ['x ≥ 0', 'x ≥ 4/5', 'x ≤ 0', 'x ≥ 1'], correctIndex: 0, explanation: 'Brei die regterkant uit: 8 − 3x ≤ 2x + 8. Trek 8 van albei kante af: −3x ≤ 2x. Trek 2x af: −5x ≤ 0. Deel deur −5 — die teken keer om: x ≥ 0. Om te vergeet om die 2 oor albei terme in die hakie te versprei (opsie B), of om te vergeet om die ongelykheid om te keer wanneer deur −5 gedeel word (opsie C), is algemene foute. Op ʼn getallelyn word dit met ʼn vol (toe) sirkel by 0 en skadu wat regs na positiewe oneindigheid strek, aangedui, aangesien 0 self ingesluit is.' },

        // Blok E — Gelyktydige lineêr-kwadratiese stelsels (posisies 13-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = x + 3 en y = x² − 3', checkMode: 'auto', options: ['x=-3,y=0 of x=2,y=5', 'x=3,y=6 of x=-2,y=1', 'x=3,y=1 of x=-2,y=6', 'x=3,y=6 of x=-2,y=2'], correctIndex: 1, explanation: 'Stel x + 3 = x² − 3, dus x² − x − 6 = 0. Faktoriseer: (x − 3)(x + 2) = 0, dus x = 3 of x = −2. As x = 3: y = 6. As x = −2: y = 1. Kontroleer: 3² − 3 = 6 ✓ en (−2)² − 3 = 1 ✓. Tekenfoute in die faktorisering (opsie A), of om die gepaarde y-waardes te verwissel (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y: y = 4x − 3 en y = x² + x − 3', checkMode: 'auto', options: ['x=0,y=-3 of x=-3,y=-15', 'x=0,y=9 of x=3,y=-3', 'x=0,y=-3 of x=3,y=9', 'x=0,y=-3 of x=3,y=10'], correctIndex: 2, explanation: 'Stel 4x − 3 = x² + x − 3, dus x² − 3x = 0. Faktoriseer: x(x − 3) = 0, dus x = 0 of x = 3. As x = 0: y = −3. As x = 3: y = 9. Kontroleer: 0² + 0 − 3 = −3 ✓ en 3² + 3 − 3 = 9 ✓. ʼn Tekenfout op die tweede wortel (opsie A), of om die gepaarde y-waardes te verwissel (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en los jou antwoorde in eenvoudigste wortelvorm: y = x + 2 en y = x² + x − 6', checkMode: 'auto', options: ['x=2√2, y=-2√2+2 of x=-2√2, y=2√2+2', 'x=√6, y=√6+2 of x=-√6, y=-√6+2', 'x=2√2, y=2√2 of x=-2√2, y=-2√2', 'x=2√2, y=2√2+2 of x=-2√2, y=-2√2+2'], correctIndex: 3, explanation: 'Vervang die eerste vergelyking in die tweede: x + 2 = x² + x − 6. Vereenvoudig: 2 = x² − 6, dus x² = 8, x = ±√8 = ±2√2. As x = 2√2: y = 2√2 + 2. As x = −2√2: y = −2√2 + 2. Om die gepaarde y-waardes te verwissel (opsie A), of ʼn rekenfout in die konstante term (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: 3x + y = 11 en y = x² − 2x − 1', checkMode: 'auto', options: ['x=3,y=2 of x=-4,y=23', 'x=-3,y=20 of x=4,y=-1', 'x=3,y=23 of x=-4,y=2', 'x=3,y=2 of x=-4,y=22'], correctIndex: 0, explanation: 'Uit die eerste vergelyking, y = 11 − 3x. Vervang: 11 − 3x = x² − 2x − 1. Herrangskik: x² + x − 12 = 0. Faktoriseer: (x + 4)(x − 3) = 0, dus x = −4 of x = 3. As x = 3: y = 2. As x = −4: y = 23. Kontroleer: 3² − 2(3) − 1 = 2 ✓ en (−4)² − 2(−4) − 1 = 23 ✓. ʼn Tekenfout in die faktorisering (opsie B), of om die gepaarde y-waardes te verwissel (opsie C), is algemene foute.' },

        // Blok F — Woordprobleme en toepassings in die styl van letterlike vergelykings (posisies 17-19)
        { difficulty: 'Medium', question: 'Die lengte van ʼn reghoek is 4 cm meer as sy wydte. As die omtrek 28 cm is, stel ʼn vergelyking op in terme van die wydte w en los op vir w.', checkMode: 'auto', options: ['w = 12', 'w = 5', 'w = 9', 'w = 6'], correctIndex: 1, explanation: 'Omtrek = 2(lengte + wydte) = 2((w + 4) + w) = 28. Vereenvoudig: 2(2w + 4) = 28, dus 4w + 8 = 28. Trek 8 af: 4w = 20. Deel deur 4: w = 5. Om die faktor 2 in die omtrekformule te vergeet (opsie A), of om die lengte in plaas van die wydte te rapporteer (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getal vermeerder met 4, dan verdubbel, gee dieselfde resultaat as die getal verminder met 2, dan verdriedubbel. Vind die getal.', checkMode: 'auto', options: ['x = 2', 'x = 10', 'x = 14', 'x = 20'], correctIndex: 2, explanation: 'Laat die getal x wees. Vergelyking: 2(x + 4) = 3(x − 2). Brei uit: 2x + 8 = 3x − 6. Trek 2x af: 8 = x − 6. Tel 6 by: x = 14. Kontroleer: 2(14 + 4) = 36 en 3(14 − 2) = 36 ✓. ʼn Tekenfout wanneer uitgebrei word (opsie A), of om nie ten volle te versprei nie (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'ʼn Saal hef ʼn opstelfooi van R800 plus R25 per gas vir ʼn Graad 10-afskeid. Die komitee het ʼn begroting van R3 800. Stel ʼn ongelykheid op vir die aantal gaste g wat hulle kan bekostig, en los op vir g.', checkMode: 'auto', options: ['g ≤ 152', 'g ≤ 128', 'g ≥ 120', 'g ≤ 120'], correctIndex: 3, explanation: 'Totale koste: 800 + 25g ≤ 3800. Trek 800 af: 25g ≤ 3000. Deel deur 25: g ≤ 120. Die komitee kan hoogstens 120 gaste bekostig. Om te vergeet om die opstelfooi eers af te trek (opsie A), of om die ongelykheidsteken onnodig om te keer (opsie C), is algemene foute.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, gelyktydige stelsels, en ongelykhede bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor gelyktydige stelsels of ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor faktorisering en gelyktydige vergelykings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Lineêre vergelykings met hakies / breuke (posisies 0-2)
        { difficulty: 'Easy', question: 'Los op vir x: 5(x − 2) = 25', checkMode: 'auto', options: ['x = 7', 'x = 5,4', 'x = 3', 'x = 8'], correctIndex: 0, explanation: 'Brei uit: 5x − 10 = 25. Tel 10 by albei kante: 5x = 35. Deel deur 5: x = 7. Om te vergeet om die 5 oor die hakie te versprei (opsie B), of ʼn tekenfout wanneer x geïsoleer word (opsie C), is algemene foute.' },
        { difficulty: 'Easy-Medium', question: 'Los op vir x: 7x − 4(x − 1) = 22', checkMode: 'auto', options: ['x = 26/3', 'x = 6', 'x = 8', 'x = 18'], correctIndex: 1, explanation: 'Brei uit (die minusteken keer albei tekens in die hakie om): 7x − 4x + 4 = 22. Bring gelyksoortige terme bymekaar: 3x + 4 = 22. Trek 4 af: 3x = 18. Deel deur 3: x = 6. Om te vergeet om die negatiewe teken oor elke term in die hakie te versprei (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium', question: `Los op vir x: ${frac('4x − 3', '5')} = ${frac('x + 6', '2')}`, checkMode: 'auto', options: ['x = 12/7', 'x = -8', 'x = 12', 'x = -33'], correctIndex: 2, explanation: 'Die KGV van 5 en 2 is 10. Vermenigvuldig elke term met 10: 2(4x − 3) = 5(x + 6). Brei uit: 8x − 6 = 5x + 30. Trek 5x af: 3x − 6 = 30. Tel 6 by: 3x = 36. Deel deur 3: x = 12. Om te vergeet om albei kante met die korrekte KGV-faktor te vermenigvuldig, of ʼn tekenfout wanneer uitgebrei word, is algemene foute.' },

        // Blok B — Kwadratiese vergelykings deur faktorisering (posisies 3-5)
        { difficulty: 'Easy', question: 'Los op vir x: x² − 4x − 21 = 0', checkMode: 'auto', options: ['x = -7 of x = 3', 'x = -7 of x = -3', 'x = 21 of x = -1', 'x = 7 of x = -3'], correctIndex: 3, explanation: 'Vind twee getalle wat vermenigvuldig tot −21 en optel tot −4: −7 en 3, dus (x−7)(x+3)=0, wat x=7 of x=−3 gee. Verwarring met tekens (opsies A en B), of om die verkeerde faktorpaar van 21 te gebruik (opsie C), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: 4x² − 4x − 3 = 0', checkMode: 'auto', options: ['x = 3/2 of x = -1/2', 'x = -3/2 of x = 1/2', 'x = 3/2 of x = 1/2', 'x = 1/4 of x = -3'], correctIndex: 0, explanation: 'a×c = 4×(−3) = −12. Vind twee getalle wat vermenigvuldig tot −12 en optel tot −4: −6 en 2. Splits: 4x²−6x+2x−3=0 → 2x(2x−3)+1(2x−3)=0 → (2x+1)(2x−3)=0, wat x=−1/2 of x=3/2 gee. Tekenfoute (opsies B en C), of om die verkeerde faktorpaar van 12 te gebruik (opsie D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: x² + 2x = 24', checkMode: 'auto', options: ['x = -4 of x = 6', 'x = 4 of x = -6', 'x = -4 of x = -6', 'x = 24 of x = -1'], correctIndex: 1, explanation: 'Herrangskik: x²+2x−24=0. Vind twee getalle wat vermenigvuldig tot −24 en optel tot 2: 6 en −4, dus (x+6)(x−4)=0, wat x=−6 of x=4 gee. Verwarring met tekens (opsies A en C), of om die verkeerde faktorpaar van 24 te gebruik (opsie D), is algemene foute.' },

        // Blok C — Gelyktydige lineêre vergelykings (posisies 6-9)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: x + y = 14 en x − y = 2', checkMode: 'auto', options: ['x=6,y=8', 'x=8,y=5', 'x=8,y=6', 'x=14,y=0'], correctIndex: 2, explanation: 'Tel die vergelykings bymekaar: 2x = 16, dus x = 8. Vervang in x + y = 14: 8 + y = 14, dus y = 6. Om x en y te verwissel (opsie A), of ʼn rekenfout (opsies B en D), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y deur substitusie: y = 3x − 4 en x + y = 12', checkMode: 'auto', options: ['x=2,y=2', 'x=8,y=4', 'x=5,y=11', 'x=4,y=8'], correctIndex: 3, explanation: 'Vervang y = 3x − 4 in x + y = 12: x + 3x − 4 = 12. Kombineer: 4x − 4 = 12, dus 4x = 16, x = 4. Vervang terug: y = 3(4) − 4 = 8. ʼn Tekenfout wanneer vervang word (opsie A), of om te verwar watter veranderlike watter is (opsie B), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y deur eliminasie: 4x + 3y = 26 en 4x − y = 6', checkMode: 'auto', options: ['x=2,75; y=5', 'x=1,y=6', 'x=2,75; y=-5', 'x=2,75; y=6'], correctIndex: 0, explanation: 'Trek die tweede vergelyking van die eerste af: (4x + 3y) − (4x − y) = 26 − 6, dus 4y = 20, y = 5. Vervang y = 5 in 4x − y = 6: 4x − 5 = 6, dus 4x = 11, x = 2,75. ʼn Tekenfout wanneer teruggevervang word (opsie C), of ʼn rekenfout (opsie D), is algemene foute.' },
        { difficulty: 'Hard', question: 'Twee getalle het ʼn som van 30 en ʼn verskil van 12. Wat is die twee getalle?', checkMode: 'auto', options: ['22 en 8', '21 en 9', '15 en 15', '21 en 10'], correctIndex: 1, explanation: 'Laat die getalle x en y wees, met x > y. x + y = 30 en x − y = 12. Tel die vergelykings bymekaar: 2x = 42, dus x = 21. Vervang in x + y = 30: 21 + y = 30, dus y = 9. Die getalle is 21 en 9. Om nie albei vergelykings saam te gebruik nie (opsie C), of ʼn rekenfout wanneer opgetel word (opsie A), is algemene foute.' },

        // Blok D — Lineêre ongelykhede, insl. tekenomkering en getallelyn-beskrywing (posisies 10-12)
        { difficulty: 'Easy', question: 'Los op vir x: 4x − 3 > 13', checkMode: 'auto', options: ['x < 4', 'x > 16', 'x > 4', 'x > -4'], correctIndex: 2, explanation: 'Tel 3 by albei kante: 4x > 16. Deel deur 4: x > 4 (geen omkering nodig nie aangesien ons deur ʼn positiewe getal gedeel het). Om die ongelykheidsteken onnodig om te keer (opsie A), of om te vergeet om deur 4 te deel (opsie B), is algemene foute.' },
        { difficulty: 'Medium', question: 'Los op vir x: −5x + 2 ≤ 22', checkMode: 'auto', options: ['x ≤ -4', 'x ≥ 4', 'x ≥ -20', 'x ≥ -4'], correctIndex: 3, explanation: 'Trek 2 van albei kante af: −5x ≤ 20. Deel albei kante deur −5 — die ongelykheidsteken keer om: x ≥ −4. Om te vergeet om die ongelykheidsteken om te keer wanneer deur ʼn negatiewe getal gedeel word (opsie A) is die klassieke fout hier.' },
        { difficulty: 'Medium-Hard', question: 'Los op vir x: 10 − x ≥ 2(x − 1). Beskryf hoe jy die oplossingstel op ʼn getallelyn sou voorstel.', checkMode: 'auto', options: ['x ≤ 4', 'x ≤ 11/3', 'x ≥ 4', 'x ≤ 3'], correctIndex: 0, explanation: 'Brei die regterkant uit: 10 − x ≥ 2x − 2. Tel x by albei kante: 10 ≥ 3x − 2. Tel 2 by: 12 ≥ 3x. Deel deur 3: 4 ≥ x, d.w.s. x ≤ 4. Om te vergeet om die 2 oor albei terme in die hakie te versprei (opsie B), of om die ongelykheid onnodig om te keer wanneer deur ʼn positiewe getal gedeel word (opsie C), is algemene foute. Op ʼn getallelyn word dit met ʼn vol (toe) sirkel by 4 en skadu wat links na negatiewe oneindigheid strek, aangedui, aangesien 4 self ingesluit is.' },

        // Blok E — Gelyktydige lineêr-kwadratiese stelsels (posisies 13-16)
        { difficulty: 'Medium', question: 'Los gelyktydig op vir x en y: y = x + 1 en y = x² − 5', checkMode: 'auto', options: ['x=-3,y=-2 of x=2,y=3', 'x=3,y=4 of x=-2,y=-1', 'x=3,y=-1 of x=-2,y=4', 'x=3,y=4 of x=-2,y=-3'], correctIndex: 1, explanation: 'Stel x + 1 = x² − 5, dus x² − x − 6 = 0. Faktoriseer: (x − 3)(x + 2) = 0, dus x = 3 of x = −2. As x = 3: y = 4. As x = −2: y = −1. Kontroleer: 3² − 5 = 4 ✓ en (−2)² − 5 = −1 ✓. Tekenfoute in die faktorisering (opsie A), of om die gepaarde y-waardes te verwissel (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'Los gelyktydig op vir x en y: y = 5x − 4 en y = x² + 2x − 4', checkMode: 'auto', options: ['x=0,y=-4 of x=-3,y=-19', 'x=0,y=11 of x=3,y=-4', 'x=0,y=-4 of x=3,y=11', 'x=0,y=-4 of x=3,y=12'], correctIndex: 2, explanation: 'Stel 5x − 4 = x² + 2x − 4, dus x² − 3x = 0. Faktoriseer: x(x − 3) = 0, dus x = 0 of x = 3. As x = 0: y = −4. As x = 3: y = 11. Kontroleer: 0² + 2(0) − 4 = −4 ✓ en 3² + 2(3) − 4 = 11 ✓. ʼn Tekenfout op die tweede wortel (opsie A), of om die gepaarde y-waardes te verwissel (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y, en los jou antwoorde in eenvoudigste wortelvorm: y = x + 5 en y = x² + x − 1', checkMode: 'auto', options: ['x=√6, y=-√6+5 of x=-√6, y=√6+5', 'x=2, y=7 of x=-2, y=3', 'x=√6, y=√6 of x=-√6, y=-√6', 'x=√6, y=√6+5 of x=-√6, y=-√6+5'], correctIndex: 3, explanation: 'Vervang die eerste vergelyking in die tweede: x + 5 = x² + x − 1. Vereenvoudig: 5 = x² − 1, dus x² = 6, x = ±√6. As x = √6: y = √6 + 5. As x = −√6: y = −√6 + 5. Om die gepaarde y-waardes te verwissel (opsie A), of ʼn rekenfout in die konstante term (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'Los gelyktydig op vir x en y: 2x + y = 9 en y = x² − x − 3', checkMode: 'auto', options: ['x=3,y=3 of x=-4,y=17', 'x=-3,y=15 of x=4,y=1', 'x=3,y=17 of x=-4,y=3', 'x=3,y=3 of x=-4,y=16'], correctIndex: 0, explanation: 'Uit die eerste vergelyking, y = 9 − 2x. Vervang: 9 − 2x = x² − x − 3. Herrangskik: x² + x − 12 = 0. Faktoriseer: (x + 4)(x − 3) = 0, dus x = −4 of x = 3. As x = 3: y = 9 − 2(3) = 3. As x = −4: y = 9 − 2(−4) = 17. Kontroleer: 3² − 3 − 3 = 3 ✓ en (−4)² − (−4) − 3 = 17 ✓. ʼn Tekenfout in die faktorisering (opsie B), of om die gepaarde y-waardes te verwissel (opsie C), is algemene foute.' },

        // Blok F — Woordprobleme en toepassings in die styl van letterlike vergelykings (posisies 17-19)
        { difficulty: 'Medium', question: 'Die lengte van ʼn reghoek is 6 cm meer as sy wydte. As die omtrek 40 cm is, stel ʼn vergelyking op in terme van die wydte w en los op vir w.', checkMode: 'auto', options: ['w = 17', 'w = 7', 'w = 13', 'w = 8'], correctIndex: 1, explanation: 'Omtrek = 2(lengte + wydte) = 2((w + 6) + w) = 40. Vereenvoudig: 2(2w + 6) = 40, dus 4w + 12 = 40. Trek 12 af: 4w = 28. Deel deur 4: w = 7. Om die faktor 2 in die omtrekformule te vergeet (opsie A), of om die lengte in plaas van die wydte te rapporteer (opsie C), is algemene foute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getal vermeerder met 5, dan verdubbel, gee dieselfde resultaat as die getal verminder met 3, dan verdriedubbel. Vind die getal.', checkMode: 'auto', options: ['x = 1', 'x = 14', 'x = 19', 'x = 25'], correctIndex: 2, explanation: 'Laat die getal x wees. Vergelyking: 2(x + 5) = 3(x − 3). Brei uit: 2x + 10 = 3x − 9. Trek 2x af: 10 = x − 9. Tel 9 by: x = 19. Kontroleer: 2(19 + 5) = 48 en 3(19 − 3) = 48 ✓. ʼn Tekenfout wanneer uitgebrei word (opsie A), of om nie ten volle te versprei nie (opsie B), is algemene foute.' },
        { difficulty: 'Hard', question: 'ʼn Konferensiesentrum hef ʼn opstelfooi van R600 plus R20 per afgevaardigde. Die organiseerder het ʼn begroting van R2 600. Stel ʼn ongelykheid op vir die aantal afgevaardigdes d wat hulle kan bekostig, en los op vir d.', checkMode: 'auto', options: ['d ≤ 130', 'd ≤ 110', 'd ≥ 100', 'd ≤ 100'], correctIndex: 3, explanation: 'Totale koste: 600 + 20d ≤ 2600. Trek 600 af: 20d ≤ 2000. Deel deur 20: d ≤ 100. Die organiseerder kan hoogstens 100 afgevaardigdes bekostig. Om te vergeet om die opstelfooi eers af te trek (opsie A), of om die ongelykheidsteken onnodig om te keer (opsie C), is algemene foute.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het lineêre en kwadratiese vergelykings, gelyktydige stelsels, en ongelykhede bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor gelyktydige stelsels of ongelykhede en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor faktorisering en gelyktydige vergelykings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
