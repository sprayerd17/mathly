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

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om lineêre vergelykings met breuke en hakies op te los deur die KGV en inverse bewerkings te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stap-vir-stap uitleg wat wys hoe om (2x−3)/3 = (x+2)/6 op te los met kleurgekodeerde stappe: KGV blou, uitgebreide hakies oranje, oplossing groen" />',
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

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om kwadratiese vergelykings op te los deur faktorisering met die nulproduk-eienskap en die a×c-metode" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Uitleg wat die a×c-metode wys om 2x²+3x−20=0 te faktoriseer met herrangskikte vergelyking in blou, gefaktoriseerde hakies in oranje, en oplossings in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING LITERAL EQUATIONS
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

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die onderwerp van ʼn formule te verander deur inverse bewerkings te gebruik en ander veranderlikes as konstantes te behandel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Twee uitgewerkte voorbeelde wat letterlike-vergelyking-herrangskikking wys met onderwerp-veranderlike in blou, ander veranderlikes in oranje, en geïsoleerde onderwerp in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — LINEAR INEQUALITIES AND SIMULTANEOUS EQUATIONS
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

      practiceQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om lineêre ongelykhede op te los, insluitend tekenomkering, en hoe om gelyktydige vergelykings deur substitusie en grafies op te los" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesiese vlak wat twee lyne y=x+3 en y=−x+7 wys wat by punt (2,5) sny, met die snypunt duidelik in groen gemerk" />',
    },
  ],

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Volpunt — jy het vergelykings en ongelykhede vir Graad 10 volkome bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van die inhoud. Hersien enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
}
