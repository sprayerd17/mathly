import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (functions roles) ─────────────────────────────────────────
// independent variable (input) / gradient / turning point  → blue   (#2563eb)
// dependent variable (output) / plotted points / width     → green  (#16a34a)
// function rule / y-intercept / direction of opening       → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const rd = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Funksies',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — THE CONCEPT OF A FUNCTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'concept-of-a-function',
      title: 'Die Konsep van ʼn Funksie',
      icon: 'f(x)',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Funksie beskryf hoe ʼn ${bl('uitset')} (${bl('afhanklike veranderlike')}) afhang van ʼn ${bl('inset')} (${bl('onafhanklike veranderlike')}), en kan voorgestel word deur tabelle, grafieke, woorde of formules — deur buigsaam tussen hierdie voorstellings om te skakel. Vir ʼn verwantskap om ʼn funksie te wees, moet elke ${bl('inset')}waarde presies een ${gr('uitset')}waarde gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onafhanklike veranderlike (inset)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('afhanklike veranderlike (uitset)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('funksiereël')}</span>` +
        `</div>` +

        // ── Key concepts ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Onafhanklike veranderlike (inset)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die veranderlike waarvan jy die waarde vrylik kies — gewoonlik <em>x</em>. Dit is die oorsaak of beginwaarde.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Afhanklike veranderlike (uitset)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die veranderlike waarvan die waarde van die inset afhang — gewoonlik <em>y</em>. Dit is die resultaat of effek.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Funksiereël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die reël of formule wat die inset aan die uitset koppel — dit kan as ʼn formule geskryf word, in ʼn tabel gewys word, as ʼn grafiek geteken word, of in woorde beskryf word.</p>` +
        `</div>` +

        `</div>` +

        // ── Four representations ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vier voorstellings van ʼn funksie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Formule</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">y = 2x + 3</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Tabel</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Lys inset–uitset pare</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Grafiek</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Stip punte op ʼn Cartesiese vlak</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Woorde</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Beskryf die verwantskap in ʼn sin</p>` +
        `</div>` +

        `</div>` +

        // ── Definition tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die definisie van ʼn funksie</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Verwantskap is slegs ʼn funksie as <strong>elke</strong> ${bl('inset')}waarde <strong>presies een</strong> ${gr('uitset')}waarde lewer. As enige ${bl('inset')} twee of meer verskillende ${gr('uitsette')} gee, is die verwantskap <strong>nie</strong> ʼn funksie nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is die verwantskap y = 2x + 3 ʼn funksie?',
          answer: `Ja — y = 2x + 3 ${or('is ʼn funksie')}`,
          steps: [
            `Pas die definisie toe: vir ʼn verwantskap om ʼn funksie te wees, moet elke ${bl('inset')}waarde presies een ${gr('uitset')}waarde gee.`,
            `Kontroleer die ${or('reël')} y = 2x + 3: kies enige waarde van ${bl('x')} — byvoorbeeld, ${bl('x')} = 4. Dan is ${gr('y')} = 2(4) + 3 = ${gr('11')}. Daar is slegs een moontlike uitset.`,
            `Ongeag watter waarde van ${bl('x')} jy kies, lewer die formule presies een waarde van ${gr('y')}. Dit voldoen aan die definisie van ʼn funksie.`,
            `<strong>Antwoord:</strong> Ja — vir elke waarde van ${bl('x')} is daar presies een ooreenstemmende waarde van ${gr('y')}, wat voldoen aan die definisie van ʼn funksie.`,
          ],
        },
        {
          question: 'Sipho het ʼn tabel: x = 2 gee y = 5 en y = 8 (twee uitsette vir een inset). Is dit ʼn funksie?',
          answer: `Nee — dit ${or('is nie ʼn funksie nie')}`,
          steps: [
            `Pas die definisie toe: vir ʼn verwantskap om ʼn funksie te wees, moet elke ${bl('inset')}waarde presies een ${gr('uitset')}waarde gee.`,
            `Ondersoek die tabel: wanneer ${bl('x')} = 2, wys die tabel ${gr('y')} = 5 <strong>en</strong> ${gr('y')} = 8. Dit is twee verskillende uitsette vir dieselfde inset.`,
            `Dit oortree die definisie — ʼn funksie vereis presies een ${gr('uitset')} per ${bl('inset')}.`,
            `<strong>Antwoord:</strong> Nee — om twee verskillende ${gr('y')}-waardes vir dieselfde ${bl('x')}-waarde te hê, diskwalifiseer hierdie verwantskap daarvan om ʼn funksie te wees.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing four representations of a function: a formula, a table of values, a Cartesian graph, and a written description — with arrows linking each representation to the others" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a function is, how to identify functions from tables and graphs, and how to convert between the four representations" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LINEAR FUNCTIONS y = ax + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-functions',
      title: 'Lineêre Funksies — y = ax + q',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Lineêre funksie het die vorm y = ${bl('a')}x + ${or('q')}, wat ʼn reguit-lyngrafiek lewer. Die parameter ${bl('a')} is die <strong>gradiënt</strong> (helling) — ʼn positiewe ${bl('a')} beteken die lyn loop opwaarts van links na regs, terwyl ʼn negatiewe ${bl('a')} beteken dit loop afwaarts van links na regs. Die parameter ${or('q')} is die <strong>y-afsnit</strong>, waar die lyn die y-as sny (by x = 0).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gradiënt (a)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('y-afsnit (q)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gestipte punte')}</span>` +
        `</div>` +

        // ── Parameter cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die parameters verstaan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gradiënt — ${bl('a')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Bepaal die steilheid en rigting van die lyn.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &gt; 0 → lyn loop opwaarts van links na regs</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &lt; 0 → lyn loop afwaarts van links na regs</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Groter |${bl('a')}| → steiler lyn</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">y-afsnit — ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die waarde van y wanneer x = 0 — die punt waar die lyn die y-as sny.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &gt; 0 → lyn sny die y-as bo die oorsprong</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('q')} &lt; 0 → lyn sny die y-as onder die oorsprong</p>` +
        `</div>` +

        `</div>` +

        // ── Sketching tip ────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn lineêre funksie te skets</p>` +
        `<p style="margin:0;color:#1e3a8a;">Stip twee ${gr('punte')} op die Cartesiese vlak, en trek dan ʼn reguit lyn deur hulle. Die maklikste ${gr('punte')} om te vind, is die y-afsnit (stel x = 0) en een ander punt (kies enige gerieflike x-waarde en bereken y).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Identifiseer vir y = 3x − 4 die gradiënt en y-afsnit, en skets dan die grafiek deur twee punte te vind.',
          answer: `${bl('Gradiënt')} = 3 &nbsp; ${or('y-afsnit')} = −4 &nbsp; ${gr('Punte')}: (0, −4) en (2, 2)`,
          steps: [
            `Identifiseer die parameters: die funksie is y = ${bl('3')}x + (${or('−4')}). Dus is ${bl('a')} = ${bl('3')} en ${or('q')} = ${or('−4')}.`,
            `<strong>y-afsnit:</strong> Stel x = 0 → y = 3(0) − 4 = ${or('−4')}. Eerste ${gr('punt')}: ${gr('(0, −4)')}.`,
            `<strong>Tweede punt:</strong> Kies x = 2 → y = 3(2) − 4 = 6 − 4 = 2. Tweede ${gr('punt')}: ${gr('(2, 2)')}.`,
            `Stip ${gr('(0, −4)')} en ${gr('(2, 2)')} op ʼn Cartesiese vlak, en trek dan ʼn reguit lyn deur albei punte — die lyn loop opwaarts van links na regs omdat die ${bl('gradiënt')} = ${bl('3')} positief is.`,
            `[Diagram nodig: ʼn Cartesiese vlak wat die lyn y = 3x − 4 wys, gestip met die punte (0, −4) en (2, 2), met die ${bl('gradiënt')} en ${or('y-afsnit')} gemerk]`,
          ],
        },
        {
          question: 'Lerato vergelyk y = 2x + 1 met y = −2x + 1. Beskryf die verskil in hulle grafieke.',
          answer: `Dieselfde ${or('y-afsnit')} (1); y = 2x + 1 loop opwaarts, y = −2x + 1 loop afwaarts — hulle is spieëlbeelde van mekaar om die y-as`,
          steps: [
            `Identifiseer die parameters van elke funksie.<br>y = ${bl('2')}x + ${or('1')}: gradiënt = ${bl('2')}, y-afsnit = ${or('1')}.<br>y = ${bl('−2')}x + ${or('1')}: gradiënt = ${bl('−2')}, y-afsnit = ${or('1')}.`,
            `<strong>y-afsnitte:</strong> Albei funksies het ${or('q')} = ${or('1')}, dus sny albei lyne die y-as by dieselfde ${gr('punt')} (0, 1).`,
            `<strong>Gradiënte:</strong> y = 2x + 1 het ʼn ${bl('positiewe gradiënt')} — die lyn loop opwaarts van links na regs. y = −2x + 1 het ʼn ${bl('negatiewe gradiënt')} — die lyn loop afwaarts van links na regs.`,
            `<strong>Antwoord:</strong> Albei grafieke deel dieselfde ${or('y-afsnit')} van ${or('1')}, maar y = 2x + 1 loop opwaarts van links na regs (positiewe ${bl('gradiënt')}) terwyl y = −2x + 1 afwaarts loop van links na regs (negatiewe ${bl('gradiënt')}) — hulle is spieëlbeelde van mekaar om die y-as.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing the line y=3x−4 plotted through points (0,−4) and (2,2) with the gradient labelled in blue and the y-intercept labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify the gradient and y-intercept of a linear function, find two points, and sketch the straight-line graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — QUADRATIC FUNCTIONS y = ax² + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-functions',
      title: 'Kwadratiese Funksies — y = ax² + q',
      icon: '∩',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Kwadratiese funksie van die vorm y = ${bl('a')}x² + ${or('q')} lewer ʼn parabool (U-vormige of ∩-vormige kurwe). Die parameter ${bl('a')} beïnvloed die breedte en ${or('rigting van opening')}: ${bl('a')} &gt; 0 open opwaarts, ${bl('a')} &lt; 0 open afwaarts, en ʼn groter |${bl('a')}| maak die parabool nouer. Die parameter ${or('q')} skuif die grafiek vertikaal — die ${bl('draaipunt')} (spitspunt) is by (0, ${or('q')}) wanneer daar geen horisontale skuif is nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('draaipunt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rigting van opening')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('breedtevergelyking')}</span>` +
        `</div>` +

        // ── Parameter cards ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die parameters verstaan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parameter ${bl('a')} — rigting en breedte</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Bepaal in watter rigting die parabool open en hoe wyd of nou dit is.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &gt; 0 → open ${or('opwaarts')} (U-vorm)</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} &lt; 0 → open ${or('afwaarts')} (∩-vorm)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Groter |${bl('a')}| → ${gr('nouer')} parabool</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Parameter ${or('q')} — vertikale skuif</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skuif die hele parabool op of af.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &gt; 0 → ${bl('draaipunt')} bo die x-as</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} &lt; 0 → ${bl('draaipunt')} onder die x-as</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('Draaipunt')} is altyd by (0, ${or('q')})</p>` +
        `</div>` +

        `</div>` +

        // ── Sketching tip ────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn kwadratiese funksie te skets</p>` +
        `<p style="margin:0;color:#1e3a8a;">Begin deur die ${bl('draaipunt')} by (0, ${or('q')}) te stip. Vind dan simmetriese puntpare deur gelyke positiewe en negatiewe x-waardes in te vervang. Let op die ${or('rigting van opening')} vanaf die teken van ${bl('a')}, en vergelyk die ${gr('breedte')} met y = x² om steilheid te beoordeel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skets y = x² − 4 deur punte te stip en die draaipunt te identifiseer.',
          answer: `${bl('Draaipunt')}: (0, −4); x-afsnitte: (−2, 0) en (2, 0); parabool open ${or('opwaarts')}`,
          steps: [
            `Identifiseer die parameters: ${bl('a')} = 1 (positief → open ${or('opwaarts')}), ${or('q')} = −4.`,
            `${bl('Draaipunt')}: (0, ${or('−4')}).`,
            `Vind bykomende punte. Laat x = 2: y = (2)² − 4 = 4 − 4 = 0. Punt: (2, 0). Deur simmetrie gee x = −2 ook y = 0. Punt: (−2, 0). Dit is die x-afsnitte.`,
            `Laat x = 3: y = 9 − 4 = 5. Punt: (3, 5). Deur simmetrie is (−3, 5) ook op die grafiek.`,
            `Die parabool open ${or('opwaarts')} (${bl('a')} = 1 &gt; 0) met ${bl('draaipunt')} (0, −4) en x-afsnitte by (−2, 0) en (2, 0). Stip hierdie punte en trek ʼn gladde U-vormige kurwe deur hulle.`,
          ],
        },
        {
          question: 'Thabo vergelyk y = 2x² met y = −2x². Beskryf die verskil in hulle grafieke.',
          answer: `y = 2x² open ${or('opwaarts')}; y = −2x² open ${or('afwaarts')} — dieselfde ${gr('breedte')}, spieëlbeelde van mekaar om die x-as`,
          steps: [
            `Identifiseer die parameters.<br>y = ${bl('2')}x²: ${bl('a')} = 2, ${or('q')} = 0.<br>y = ${bl('−2')}x²: ${bl('a')} = −2, ${or('q')} = 0.`,
            `<strong>Rigting van opening:</strong> y = 2x² het ${bl('a')} = 2 &gt; 0, dus open dit ${or('opwaarts')} (U-vorm). y = −2x² het ${bl('a')} = −2 &lt; 0, dus open dit ${or('afwaarts')} (∩-vorm).`,
            `<strong>Breedte:</strong> Albei het |${bl('a')}| = 2, dus is hulle dieselfde ${gr('breedte')} — geeneen is wyer of nouer as die ander nie.`,
            `<strong>Draaipunte:</strong> Albei het ${or('q')} = 0, dus is albei ${bl('draaipunte')} by die oorsprong (0, 0).`,
            `<strong>Antwoord:</strong> y = 2x² open ${or('opwaarts')} (${bl('a')} &gt; 0); y = −2x² open ${or('afwaarts')} (${bl('a')} &lt; 0). Albei het dieselfde ${gr('breedte')} en steilheid, maar is spieëlbeelde van mekaar om die x-as.`,
          ],
        },
        {
          question: 'Vergelyk die breedtes van y = x² en y = 4x².',
          answer: `y = 4x² is ${gr('nouer')} as y = x²`,
          steps: [
            `Identifiseer die parameters.<br>y = ${bl('1')}x²: |${bl('a')}| = 1.<br>y = ${bl('4')}x²: |${bl('a')}| = 4.`,
            `Vergelyk |${bl('a')}|-waardes: aangesien |4| &gt; |1|, is die grafiek van y = 4x² ${gr('nouer')} as y = x².`,
            `Verifieer met ʼn punt: by x = 1, gee y = x² vir y = 1, terwyl y = 4x² vir y = 4 gee — die steiler styging bevestig die ${gr('nouer')} vorm.`,
            `<strong>Antwoord:</strong> Aangesien |${bl('a')}| = 4 &gt; |${bl('a')}| = 1, is die grafiek van y = 4x² ${gr('nouer')} as y = x² — dit styg steiler vanaf die ${bl('draaipunt')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side-by-side Cartesian planes showing: (left) y=x²−4 with turning point (0,−4) and x-intercepts (−2,0) and (2,0) labelled in blue; (right) y=x² and y=4x² on the same axes showing the width difference in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to sketch a quadratic function by finding the turning point and plotting symmetric pairs of points, and how changing a and q affects the parabola" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THE HYPERBOLIC FUNCTION y = a/x + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hyperbolic-functions',
      title: 'Die Hiperboliese Funksie — y = a/x + q',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Hiperboliese funksie van die vorm y = ${bl('a')}/x + ${or('q')} het twee afsonderlike geboë ${bl('vertakkings')} wat twee asimptote nader maar nooit raak nie: ʼn ${rd('vertikale asimptoot')} by x = 0, en ʼn ${or('horisontale asimptoot')} by y = ${or('q')}. Die parameter ${bl('a')} beïnvloed in watter kwadrante die vertakkings lê en hoe naby die kurwe aan die asse sit.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('vertikale asimptoot')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('horisontale asimptoot')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kurwevertakkings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die asimptote en vertakkings verstaan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertikale asimptoot</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Altyd by x = 0 (die y-as). Die ${bl('vertakkings')} nader hierdie lyn maar raak dit nooit nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Horisontale asimptoot — y = ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Soos x baie groot of baie klein word, nader y die waarde ${or('q')}. Die ${bl('vertakkings')} nader hierdie lyn maar sny dit nooit nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kurwevertakkings — ${bl('a')}</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('a')} > 0 → ${bl('vertakkings')} in kwadrante 1 en 3</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${bl('a')} < 0 → ${bl('vertakkings')} in kwadrante 2 en 4</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Sleutelfeit</p>` +
        `<p style="margin:0;color:#7f1d1d;">Die hiperbool sny nooit een van die asimptote nie. Die ${rd('vertikale asimptoot')} is altyd x = 0. Die ${or('horisontale asimptoot')} skuif op of af na gelang van ${or('q')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die asimptote van y = 3/x + 2.',
          answer: `${rd('Vertikale asimptoot')}: x = 0 &nbsp; ${or('Horisontale asimptoot')}: y = 2`,
          steps: [
            `Identifiseer die vorm: y = ${bl('a')}/x + ${or('q')}. Hier is ${bl('a')} = ${bl('3')} en ${or('q')} = ${or('2')}.`,
            `${rd('Vertikale asimptoot')}: Die noemer is x, wat gelyk is aan nul by x = 0. Die vertikale asimptoot is by x = 0.`,
            `${or('Horisontale asimptoot')}: Soos x baie groot of baie klein word, nader die term ${bl('3')}/x na 0, dus nader y die waarde ${or('q')} = ${or('2')}. Die horisontale asimptoot is by y = 2.`,
            `[Diagram nodig: die grafiek van y=3/x+2 wat albei ${bl('vertakkings')} van die hiperbool wys, met die ${rd('vertikale asimptoot')} by x=0 en ${or('horisontale asimptoot')} by y=2 as stippellyne aangedui]`,
          ],
        },
        {
          question: 'Sipho vergelyk y = 2/x met y = −2/x. Beskryf die verskil.',
          answer: `y = 2/x: ${bl('vertakkings in kwadrante 1 en 3')}; y = −2/x: ${bl('vertakkings in kwadrante 2 en 4')} — spieëlbeelde van mekaar`,
          steps: [
            `Identifiseer die parameter ${bl('a')} in elke funksie.<br>y = ${bl('2')}/x: ${bl('a')} = ${bl('2')} (positief).<br>y = ${bl('−2')}/x: ${bl('a')} = ${bl('−2')} (negatief).`,
            `Met ${bl('a')} = 2 (positief) lê die ${bl('kurwevertakkings')} in die eerste en derde kwadrante.`,
            `Met ${bl('a')} = −2 (negatief) lê die ${bl('kurwevertakkings')} in die tweede en vierde kwadrante — hulle is spieëlbeelde van mekaar om die y-as (of x-as).`,
            `Albei funksies deel dieselfde ${rd('vertikale asimptoot')} (x = 0) en ${or('horisontale asimptoot')} (y = 0), aangesien albei ${or('q')} = 0 het.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing the graph of y=3/x+2 with both branches of the hyperbola drawn in blue, the vertical asymptote at x=0 shown as a red dashed line, and the horizontal asymptote at y=2 shown as an orange dashed line" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the hyperbolic function y=a/x+q — how to identify the vertical and horizontal asymptotes, which quadrants the branches occupy based on the sign of a, and how to sketch the graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THE EXPONENTIAL FUNCTION y = a·bˣ + q
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponential-functions',
      title: 'Die Eksponensiële Funksie — y = a·bˣ + q (b > 0, b ≠ 1)',
      icon: 'eˣ',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Eksponensiële funksie van die vorm y = ${bl('a')} · ${bl('b')}ˣ + ${or('q')} lewer ʼn kurwe wat vinnig groei (as ${bl('b')} > 1) of verval (as 0 < ${bl('b')} < 1). Daar is ʼn ${or('horisontale asimptoot')} by y = ${or('q')}, wat die kurwe nader maar nooit sny nie. Die ${gr('y-afsnit')} kom voor waar x = 0.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('horisontale asimptoot')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('groei-/verval-rigting')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-afsnit')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die parameters verstaan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Basis — ${bl('b')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Bepaal ${bl('groei')} of ${bl('verval')}.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${bl('b')} > 1 → eksponensiële ${bl('groei')} (kurwe styg steil)</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">0 < ${bl('b')} < 1 → eksponensiële ${bl('verval')} (kurwe daal steil)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Horisontale asimptoot — y = ${or('q')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die kurwe nader y = ${or('q')} maar sny dit nooit nie.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:2px;">${or('q')} > 0 → asimptoot bo die x-as</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${or('q')} < 0 → asimptoot onder die x-as</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('y-afsnit')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Stel x = 0: y = ${bl('a')} · ${bl('b')}⁰ + ${or('q')} = ${bl('a')} + ${or('q')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Groei teenoor verval</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die basis ${bl('b')} > 1, toon die funksie ${bl('eksponensiële groei')} — die kurwe styg steil soos x toeneem. As 0 < ${bl('b')} < 1, toon die funksie ${bl('eksponensiële verval')} — die kurwe daal steil soos x toeneem. Die ${or('horisontale asimptoot')} y = ${or('q')} word genader soos x → −∞ (vir groei) of x → +∞ (vir verval).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf die grafiek van y = 2ˣ + 1.',
          answer: `Eksponensiële ${bl('groei')} (b = 2 > 1); ${or('horisontale asimptoot')}: y = 1; ${gr('y-afsnit')}: (0, 2)`,
          steps: [
            `Identifiseer die parameters: ${bl('a')} = 1, ${bl('b')} = 2, ${or('q')} = 1.`,
            `Aangesien ${bl('b')} = 2 > 1, toon die funksie eksponensiële ${bl('groei')} — soos x toeneem, groei y vinnig.`,
            `${or('Horisontale asimptoot')}: y = ${or('q')} = ${or('1')}. Die kurwe nader y = 1 van bo af soos x → −∞.`,
            `${gr('y-afsnit')} (x = 0): y = 2⁰ + 1 = 1 + 1 = ${gr('2')}. Die y-afsnit is by (0, 2).`,
          ],
        },
        {
          question: 'Lerato vergelyk y = 3ˣ met y = (1/3)ˣ. Beskryf die verskil.',
          answer: `y = 3ˣ toon ${bl('eksponensiële groei')}; y = (1/3)ˣ toon ${bl('eksponensiële verval')} — hulle is spieëlbeelde van mekaar om die y-as`,
          steps: [
            `Identifiseer die basis ${bl('b')} in elke funksie.<br>y = ${bl('3')}ˣ: ${bl('b')} = 3 > 1.<br>y = (${bl('1/3')})ˣ: ${bl('b')} = 1/3 waar 0 < 1/3 < 1.`,
            `y = 3ˣ groei soos x toeneem (eksponensiële ${bl('groei')}, aangesien b = 3 > 1).`,
            `y = (1/3)ˣ neem af soos x toeneem (eksponensiële ${bl('verval')}, aangesien 0 < 1/3 < 1) — hulle is spieëlbeelde van mekaar om die y-as.`,
            `Albei funksies het dieselfde ${or('horisontale asimptoot')}: y = 0 (aangesien ${or('q')} = 0 vir albei).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesian plane showing y=3ˣ rising steeply in blue (exponential growth) and y=(1/3)ˣ falling steeply in blue (exponential decay), with the horizontal asymptote at y=0 shown as an orange dashed line and the y-intercept at (0,1) marked in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the exponential function y=a·bˣ+q — how to identify growth vs decay from the base b, find the horizontal asymptote and y-intercept, and how changing q shifts the graph" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — PROBLEM SOLVING AND GRAPH WORK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-graph-work',
      title: 'Probleemoplossing en Grafiekwerk met Voorgeskrewe Funksies',
      icon: '✎',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas ons kennis van lineêre, kwadratiese, hiperboliese en eksponensiële funksies toe om werklike-lewe- en abstrakte probleme op te los, insluitend die bepaal van vergelykings uit gegewe inligting, die skets van grafieke, en die interpretasie van sleutelkenmerke (afsnitte, asimptote, draaipunte) in konteks.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende punte / waardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${rd('onbekende parameter')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie om vergelykings uit grafieke te vind</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Stap 1</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Identifiseer watter funksietipe van toepassing is aan die hand van die vorm van die grafiek of die vorm van die vergelyking.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Stap 2</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gebruik ${bl('bekende punte')} (bv. afsnitte, draaipunt) om enige parameters direk af te lees.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Stap 3</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Vervang ʼn ${bl('bekende punt')} in die vergelyking om vir die ${rd('onbekende parameter')} op te los.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Stap 4</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Skryf die ${gr('finale vergelyking')} en verifieer deur te kontroleer dat dit aan al die gegewe voorwaardes voldoen.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelkenmerke om op ʼn grafiek te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">x-afsnitte (stel y = 0), ${gr('y-afsnitte')} (stel x = 0), draaipunte (spitspunt van ʼn parabool), ${or('asimptote')} (lyne wat die kurwe nader), en ${rd('onbekende parameters')} gevind deur ʼn ${bl('bekende punt')} te vervang.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Grafiek van die vorm y = ax + q gaan deur (0, 5) en (2, 9). Vind die vergelyking.',
          answer: `${gr('y = 2x + 5')}`,
          steps: [
            `Identifiseer die vorm: y = ${rd('a')}x + ${rd('q')} (lineêre funksie).`,
            `Die punt ${bl('(0, 5)')} is die y-afsnit, dus is ${rd('q')} = 5 direk.`,
            `Gebruik die ${bl('bekende punte')} om die ${rd('gradiënt a')} te vind: ${rd('a')} = (9 − 5) / (2 − 0) = 4 / 2 = 2.`,
            `${gr('Finale vergelyking')}: ${gr('y = 2x + 5')}. Verifieer: by x = 2, y = 2(2) + 5 = 9 ✓`,
          ],
        },
        {
          question: 'Thabo het ʼn kwadratiese grafiek y = ax² + q met draaipunt (0, −3) wat deur (1, 1) gaan. Vind a.',
          answer: `${rd('a')} = 4; ${gr('vergelyking: y = 4x² − 3')}`,
          steps: [
            `Identifiseer die vorm: y = ${rd('a')}x² + ${rd('q')} (kwadratiese funksie). Die draaipunt is (0, ${rd('q')}), dus is ${rd('q')} = −3.`,
            `Vervang die ${bl('bekende punt')} ${bl('(1, 1)')} in y = ${rd('a')}x² − 3: 1 = ${rd('a')}(1)² − 3.`,
            `Los op vir die ${rd('onbekende parameter a')}: 1 = ${rd('a')} − 3 → ${rd('a')} = 4.`,
            `${gr('Finale vergelyking')}: ${gr('y = 4x² − 3')}. Verifieer: by x = 1, y = 4(1) − 3 = 1 ✓`,
          ],
        },
        {
          question: 'ʼn Bevolking groei volgens P = 1000(1.05)ᵗ. Vind die bevolking na 5 jaar.',
          answer: `P ≈ ${gr('1 276')}`,
          steps: [
            `Identifiseer die ${bl('bekende waardes')}: aanvangsbevolking = ${bl('1 000')}, groeibasis = ${bl('1.05')}, tyd = ${bl('t = 5')} jaar.`,
            `Vervang in die formule: P = ${bl('1 000')} × (${bl('1.05')})⁵.`,
            `Bereken: (1.05)⁵ ≈ 1.2763, dus P ≈ 1 000 × 1.2763 ≈ 1 276.`,
            `${gr('Finale antwoord')}: Die bevolking na 5 jaar is ongeveer ${gr('1 276')} (afgerond na die naaste heel getal).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three side-by-side sketches: (1) the line y=2x+5 with known points (0,5) and (2,9) marked in blue; (2) the parabola y=4x²−3 with turning point (0,−3) and the point (1,1) marked in blue; (3) an exponential growth curve for P=1000(1.05)ᵗ with the point at t=5 marked in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video walking through problem-solving strategies for prescribed functions — how to read a graph to identify parameters, substitute known points to find unknowns, and verify the final equation" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — identify whether y=x² is a function ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is y=x² ʼn funksie? Verduidelik.',
      answer: 'ja, aangesien elke x-waarde presies een y-waarde gee',
      checkMode: 'auto',
      correctAnswer: 'ja, aangesien elke x-waarde presies een y-waarde gee',
      explanation: 'Vir elke waarde van x lewer y=x² presies een uitsetwaarde, wat voldoen aan die definisie van ʼn funksie.',
    },

    // ── Q2 Medium — identify non-function from a table ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho het ʼn tabel waar x=3 beide y=6 en y=9 gee. Is dit ʼn funksie? Verduidelik.',
      answer: 'nee, aangesien een inset nie twee verskillende uitsette kan hê nie',
      checkMode: 'auto',
      correctAnswer: 'nee, aangesien een inset nie twee verskillende uitsette kan hê nie',
      explanation: 'Een inset (x=3) koppel aan twee verskillende uitsette. Dit oortree die definisie dat elke inset presies een uitset moet gee.',
    },

    // ── Q3 Hard — vertical line test ──────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn vertikale lyngrafiek (soos x=5) is ʼn funksie. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn vertikale lyn het een x-waarde gepaar met oneindig baie y-waardes, wat die funksiedefinisie oortree (een uitset per inset).',
      checkMode: 'self',
    },

    // ── Q4 Easy — read gradient and y-intercept ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identifiseer die gradiënt en y-afsnit van y=5x−2.',
      answer: 'gradiënt=5, y-afsnit=-2',
      checkMode: 'auto',
      correctAnswer: 'gradiënt=5, y-afsnit=-2',
      explanation: 'Vergelyk y=5x−2 met y=ax+q. Die gradiënt a=5 en die y-afsnit q=−2.',
    },

    // ── Q5 Medium — write equation from gradient and y-intercept ─────────────
    {
      difficulty: 'Medium',
      question: 'Vind die vergelyking van ʼn lyn met gradiënt 4 wat deur (0,−7) gaan.',
      answer: 'y=4x-7',
      checkMode: 'auto',
      correctAnswer: 'y=4x-7',
      explanation: 'Die y-afsnit is −7 (die lyn gaan deur (0,−7)) en die gradiënt is 4, wat y=4x−7 gee.',
    },

    // ── Q6 Hard — find linear equation from two points ────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Lyn gaan deur (0,3) en (4,11). Vind sy vergelyking.',
      answer: 'y-afsnit=3. Gradiënt=(11−3)/4=2. Vergelyking: y=2x+3.',
      checkMode: 'self',
    },

    // ── Q7 Easy — find turning point of a quadratic ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die draaipunt van y=x²+5.',
      answer: '(0,5)',
      checkMode: 'auto',
      correctAnswer: '(0,5)',
      explanation: 'Vir y=ax²+q, is die draaipunt (0,q). Hier is q=5, dus is die draaipunt (0,5).',
    },

    // ── Q8 Medium — direction of opening of a parabola ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Open y=−3x² opwaarts of afwaarts?',
      answer: 'afwaarts',
      checkMode: 'auto',
      correctAnswer: 'afwaarts',
      explanation: 'Aangesien a=−3<0, open die parabool afwaarts.',
    },

    // ── Q9 Hard — compare widths of two parabolas ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vergelyk die breedte van y=2x² en y=0.5x². Verduidelik watter een nouer is.',
      answer: 'y=2x² is nouer, aangesien |2|>|0.5|, wat die parabool steiler/nouer maak.',
      checkMode: 'self',
    },

    // ── Q10 Easy — asymptotes of a hyperbola ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die asimptote van y=4/x+3.',
      answer: 'x=0 en y=3',
      checkMode: 'auto',
      correctAnswer: 'x=0 en y=3',
      explanation: 'Die vertikale asimptoot is altyd x=0 vir y=a/x+q. Die horisontale asimptoot is y=q=3.',
    },

    // ── Q11 Medium — quadrants of a hyperbola ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In watter kwadrante lê die vertakkings van y=−5/x?',
      answer: 'tweede en vierde kwadrante',
      checkMode: 'auto',
      correctAnswer: 'tweede en vierde kwadrante',
      explanation: 'Aangesien a=−5<0, lê die vertakkings in kwadrante 2 en 4.',
    },

    // ── Q12 Hard — vertical asymptote with vertical shift ────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê y=2/x en y=2/x+5 het dieselfde vertikale asimptoot. Is hy korrek? Verduidelik.',
      answer: 'Ja — albei het ʼn vertikale asimptoot by x=0, aangesien die optel van 5 die grafiek slegs vertikaal skuif, nie horisontaal nie.',
      checkMode: 'self',
    },

    // ── Q13 Easy — horizontal asymptote of exponential ───────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die horisontale asimptoot van y=3·2ˣ+4.',
      answer: 'y=4',
      checkMode: 'auto',
      correctAnswer: 'y=4',
      explanation: 'Die horisontale asimptoot van y=a·bˣ+q is y=q=4.',
    },

    // ── Q14 Medium — growth vs decay ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Verteenwoordig y=(1/2)ˣ groei of verval?',
      answer: 'verval',
      checkMode: 'auto',
      correctAnswer: 'verval',
      explanation: 'Aangesien 0<1/2<1, verteenwoordig die funksie eksponensiële verval.',
    },

    // ── Q15 Hard — y-intercept of exponential with q ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die y-afsnit van y=5·3ˣ−2.',
      answer: 'By x=0: y=5(3⁰)−2=5(1)−2=3.',
      checkMode: 'self',
    },

    // ── Q16 Hard — find a and q for a linear function ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Lyn y=ax+q gaan deur (0,−2) en (3,7). Vind a en q.',
      answer: 'a=3, q=-2',
      checkMode: 'auto',
      correctAnswer: 'a=3, q=-2',
      explanation: 'q=−2 (y-afsnit, vanaf die punt (0,−2)). a=(7−(−2))/(3−0)=9/3=3.',
    },

    // ── Q17 Hard — find a for a quadratic given turning point and one point ───
    {
      difficulty: 'Hard',
      question: 'ʼn Kwadratiese funksie y=ax²+q het draaipunt (0,2) en gaan deur (2,10). Vind a.',
      answer: 'Vervang (2,10): 10=a(4)+2. 8=4a. a=2.',
      checkMode: 'self',
    },

    // ── Q18 Hard — exponential population growth calculation ──────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Bevolking groei volgens P=500(1.08)ᵗ. Vind die bevolking na 6 jaar, afgerond na die naaste heel getal.',
      answer: '793',
      checkMode: 'auto',
      correctAnswer: '793',
      explanation: 'P=500(1.08)⁶=500×1.58687...≈793.',
    },

    // ── Q19 Hard — relate two quadratics by reflection ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato vergelyk y=x²−4 en y=−x²+4. Beskryf hoe hierdie twee grafieke met mekaar verband hou.',
      answer: 'Hulle is spieëlbeelde van mekaar om die x-as — een open opwaarts met draaipunt (0,−4), die ander open afwaarts met draaipunt (0,4).',
      checkMode: 'self',
    },

    // ── Q20 Hard — find a and q for a hyperbola ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Hiperbool y=a/x+q het ʼn horisontale asimptoot by y=−1 en gaan deur (2,1). Vind a en q.',
      answer: 'q=−1 (horisontale asimptoot). Vervang (2,1): 1=a/2−1. 2=a/2. a=4.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het funksies bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
