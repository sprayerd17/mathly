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


      openQuestions: [],

      videoPlaceholder:
        'Kort video wat verduidelik wat ʼn funksie is, hoe om funksies uit tabelle en grafieke te identifiseer, en hoe om tussen die vier voorstellings om te skakel',
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
            `Die voltooide grafiek is ʼn reguit lyn deur ${gr('(0, −4)')} en ${gr('(2, 2)')}, met ${bl('gradiënt')} 3 en ${or('y-afsnit')} −4.`,
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


      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat die lyn y = 3x − 4 wys deur punte (0, −4) en (2, 2), met die gradiënt en die y-afsnit gemerk',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="105.4" y1="220" x2="178.6" y2="0" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="206" r="3.5" fill="#ea580c"/><text x="116" y="200" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="158" cy="62" r="3.5" fill="#16a34a"/><text x="164" y="56" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">(2, 2)</text><text x="150" y="132" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">a = 3</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die gradiënt en y-afsnit van ʼn lineêre funksie te identifiseer, twee punte te vind, en die reguitlyngrafiek te teken',
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


      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlakke langs mekaar: links wys y = x² − 4 met die draaipunt en x-afsnitte gemerk; regs vergelyk y = x² en y = 4x² op dieselfde asse om die breedteverskil te wys',
      diagramSvg:
        '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M50,56 L62,110 L74,152 L86,182 L98,200 L110,206 L122,200 L134,182 L146,152 L158,110 L170,56" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="206" r="3.5" fill="#2563eb"/><text x="118" y="196" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="62" cy="110" r="3" fill="#2563eb"/><text x="62" y="98" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">(-2, 0)</text><circle cx="158" cy="110" r="3" fill="#2563eb"/><text x="158" y="98" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">(2, 0)</text><line x1="254" y1="2" x2="254" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="278" y1="2" x2="278" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="302" y1="2" x2="302" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="326" y1="2" x2="326" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="350" y1="2" x2="350" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="374" y1="2" x2="374" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="398" y1="2" x2="398" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="422" y1="2" x2="422" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="446" y1="2" x2="446" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="206" x2="458" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="182" x2="458" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="158" x2="458" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="134" x2="458" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="110" x2="458" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="86" x2="458" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="62" x2="458" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="38" x2="458" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="14" x2="458" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="110" x2="458" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="350" y1="2" x2="350" y2="218" stroke="#374151" stroke-width="1.5"/><text x="450" y="104" font-size="11" fill="#374151">x</text><text x="356" y="12" font-size="11" fill="#374151">y</text><path d="M302,14 L314,56 L326,86 L338,104 L350,110 L362,104 L374,86 L386,56 L398,14" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M326,14 L332,56 L338,86 L344,104 L350,110 L356,104 L362,86 L368,56 L374,14" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="298" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">y = x²</text><text x="330" y="30" font-size="11" fill="#16a34a" font-weight="700" text-anchor="start">y = 4x²</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn kwadratiese funksie te teken deur die draaipunt te vind en simmetriese paare punte te merk, en hoe die verandering van a en q die parabool beïnvloed',
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
            `Die grafiek het albei ${bl('vertakkings')} van die hiperbool wat die ${rd('vertikale asimptoot')} by x = 0 en die ${or('horisontale asimptoot')} by y = 2 nader, maar nooit raak nie.`,
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


      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat die grafiek van y = 3/x + 2 wys met albei takke van die hiperbool, die horisontale asimptoot by y = 2 as ʼn oranje kortstreeplyn, en die vertikale asimptoot x = 0 in rooi gemerk',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="46" font-size="11" fill="#374151">y</text><text x="116" y="30" font-size="11" fill="#dc2626" font-weight="700">x = 0</text><line x1="14" y1="62" x2="206" y2="62" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="200" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M137.9,0 L141.2,6.6 L146,14 L153.2,22 L162.8,29.3 L174.8,35.3 L189.2,39.8 L206,44 L219.9,46.3" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M0.1,77.7 L26,88.6 L50,98.8 L66.8,102 L78.8,117.4 L86,134 L92,158 L96.8,192.9 L99.1,220" fill="none" stroke="#2563eb" stroke-width="2.5"/></svg>',

      videoPlaceholder:
        'Kort video wat die hiperboliese funksie y=a/x+q verduidelik — hoe om die vertikale en horisontale asimptote te identifiseer, watter kwadrante die takke beslaan op grond van die teken van a, en hoe om die grafiek te teken',
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


      openQuestions: [],

      diagramPlaceholder:
        'Cartesiese vlak wat y = 3ˣ (eksponensiële groei) en y = (1/3)ˣ (eksponensiële verval) vergelyk, met die gedeelde horisontale asimptoot by y = 0 en die y-afsnit by (0, 1) gemerk',
      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="14" y1="110" x2="206" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="18" y="102" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">y = 0</text><path d="M62,107.3 L74,105.4 L86,102 L98,96.1 L110,86 L122,68.8 L134,38 L143.2,0" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M158,107.3 L146,105.4 L134,102 L122,96.1 L110,86 L98,68.8 L86,38 L76.8,0" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="110" cy="86" r="3.5" fill="#16a34a"/><text x="116" y="80" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">(0, 1)</text><text x="146" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">y = 3ˣ</text><text x="73" y="10" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">y = (1/3)ˣ</text></svg>',

      videoPlaceholder:
        'Kort video wat die eksponensiële funksie y=a·bˣ+q verduidelik — hoe om groei teenoor verval van die grondtal b te onderskei, die horisontale asimptoot en y-afsnit te vind, en hoe die verandering van q die grafiek verskuif',
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
          question: 'ʼn Bevolking groei volgens P = 1000(1,05)ᵗ. Vind die bevolking na 5 jaar.',
          answer: `P ≈ ${gr('1 276')}`,
          steps: [
            `Identifiseer die ${bl('bekende waardes')}: aanvangsbevolking = ${bl('1 000')}, groeibasis = ${bl('1,05')}, tyd = ${bl('t = 5')} jaar.`,
            `Vervang in die formule: P = ${bl('1 000')} × (${bl('1,05')})⁵.`,
            `Bereken: (1,05)⁵ ≈ 1,2763, dus P ≈ 1 000 × 1,2763 ≈ 1 276.`,
            `${gr('Finale antwoord')}: Die bevolking na 5 jaar is ongeveer ${gr('1 276')} (afgerond na die naaste heel getal).`,
          ],
        },
      ],


      openQuestions: [],

      videoPlaceholder:
        'Kort video wat probleemoplossingstrategieë vir voorgeskrewe funksies deurwerk — hoe om ʼn grafiek te lees om parameters te identifiseer, bekende punte te vervang om onbekendes te vind, en die finale vergelyking te verifieer',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — identify whether y=x² is a function ─────────────────────────
    { difficulty: 'Easy', question: 'Is y=x² ʼn funksie?', checkMode: 'auto', options: ['Ja — elke x-waarde gee presies een y-waarde', 'Nee — elke x-waarde gee twee y-waardes, positief en negatief', 'Nee — sommige x-waardes lewer glad nie ʼn y-waarde nie', 'Ja, maar slegs wanneer x positief is'], correctIndex: 0, explanation: 'Vir elke waarde van x lewer y=x² presies een uitsetwaarde, wat voldoen aan die definisie van ʼn funksie. Kwadrering skep nie twee uitsette nie — dit gee altyd ʼn enkele nie-negatiewe getal.' },

    // ── Q2 Medium — identify non-function from a table ────────────────────────
    { difficulty: 'Medium', question: 'Sipho het ʼn tabel waar x=3 beide y=6 en y=9 gee. Is dit ʼn funksie?', checkMode: 'auto', options: ['Ja — ʼn relasie hoef net iewers ooreenstemmende waardes te hê om ʼn funksie te wees', 'Nee — een inset kan nie twee verskillende uitsette hê nie', 'Nee — omdat 6 en 9 nie faktore van 3 is nie', 'Ja — solank die meeste insette een uitset het, tel dit steeds'], correctIndex: 1, explanation: 'Een inset (x=3) koppel aan twee verskillende uitsette (y=6 en y=9). Dit oortree die definisie dat elke inset presies een uitset moet gee — een enkele uitsondering is genoeg om die hele relasie te diskwalifiseer.' },

    // ── Q3 Hard — vertical line test ──────────────────────────────────────────
    { difficulty: 'Hard', question: 'Lerato sê ʼn vertikale lyngrafiek (soos x=5) is ʼn funksie. Is sy korrek?', checkMode: 'auto', options: ['Ja — elke punt op die lyn het dieselfde x-waarde, dus voldoen dit aan die definisie', 'Ja — vertikale lyne is altyd funksies aangesien hulle reguit lyne is', 'Nee — ʼn vertikale lyn het een x-waarde gepaar met oneindig baie y-waardes, wat die funksiedefinisie oortree', 'Nee — ʼn vertikale lyn het geen y-afsnit nie, dus kan dit nie ʼn funksie wees nie'], correctIndex: 2, explanation: 'ʼn Vertikale lyn soos x=5 koppel ʼn enkele x-waarde aan elke moontlike y-waarde — oneindig baie uitsette vir een inset. Dit oortree direk die een-uitset-per-inset-reël, dus is dit nie ʼn funksie nie (dit faal die vertikale-lyntoets).' },

    // ── Q4 Easy — read gradient and y-intercept ───────────────────────────────
    { difficulty: 'Easy', question: 'Identifiseer die gradiënt en y-afsnit van y=5x−2.', checkMode: 'auto', options: ['gradiënt=−2, y-afsnit=5', 'gradiënt=5, y-afsnit=2', 'gradiënt=2, y-afsnit=−5', 'gradiënt=5, y-afsnit=−2'], correctIndex: 3, explanation: 'Vergelyk y=5x−2 met y=ax+q: die gradiënt a=5 en die y-afsnit q=−2. Om te verwar watter getal watter een is, of die teken van −2 te verloor, gee die verkeerde antwoorde.' },

    // ── Q5 Medium — write equation from gradient and y-intercept ─────────────
    { difficulty: 'Medium', question: 'Vind die vergelyking van ʼn lyn met gradiënt 4 wat deur (0,−7) gaan.', checkMode: 'auto', options: ['y=4x−7', 'y=−7x+4', 'y=4x+7', 'y=7x−4'], correctIndex: 0, explanation: 'Die y-afsnit is −7 (die lyn gaan deur (0,−7)) en die gradiënt is 4, wat y=4x−7 gee. Om die gradiënt en y-afsnit te verwissel, of die teken te verloor, gee die verkeerde opsies.' },

    // ── Q6 Hard — find linear equation from two points ────────────────────────
    { difficulty: 'Hard', question: 'ʼn Lyn gaan deur (0,3) en (4,11). Vind sy vergelyking.', checkMode: 'auto', options: ['y=3x+2', 'y=2x+3', 'y=2x+11', 'y=8x+3'], correctIndex: 1, explanation: 'Die y-afsnit is 3 (vanaf (0,3)). Gradiënt=(11−3)/(4−0)=8/4=2. Vergelyking: y=2x+3. Die ander opsies verwar gradiënt/afsnit of bereken die gradiënt verkeerd.' },

    // ── Q7 Easy — find turning point of a quadratic ───────────────────────────
    { difficulty: 'Easy', question: 'Vind die draaipunt van y=x²+5.', checkMode: 'auto', options: ['(5, 0)', '(0, 0)', '(0, 5)', '(1, 5)'], correctIndex: 2, explanation: 'Vir y=ax²+q, is die draaipunt (0, q). Hier is q=5, dus is die draaipunt (0, 5). (0,0) ignoreer die vertikale verskuiwing, en (5,0) verwissel die koördinate.' },

    // ── Q8 Medium — direction of opening of a parabola ───────────────────────
    { difficulty: 'Medium', question: 'Open y=−3x² opwaarts of afwaarts?', checkMode: 'auto', options: ['Opwaarts, want die grootte van die koëffisiënt is groter as 1', 'Opwaarts, want −3 word by x² getel', 'Kan nie bepaal word sonder meer inligting nie', 'Afwaarts, want a=−3 is negatief'], correctIndex: 3, explanation: 'Aangesien a=−3<0, open die parabool afwaarts. Die grootte van |a| (3) beïnvloed die breedte, nie die rigting nie — slegs die teken van a bepaal opwaarts vs afwaarts.' },

    // ── Q9 Hard — compare widths of two parabolas ─────────────────────────────
    { difficulty: 'Hard', question: 'Vergelyk die breedte van y=2x² en y=0,5x². Watter een is nouer?', checkMode: 'auto', options: ['y=2x² is nouer, aangesien |2|>|0,5| die parabool steiler/nouer maak', 'y=0,5x² is nouer, aangesien deling deur 2 die grafiek horisontaal saamdruk', 'Hulle is dieselfde breedte, aangesien albei positiewe parabole is', 'y=2x² is wyer, aangesien groter koëffisiënte die grafiek uitrek'], correctIndex: 0, explanation: 'ʼn Groter |a| maak ʼn parabool nouer/steiler. Aangesien |2|>|0,5|, is y=2x² nouer as y=0,5x². Dit is maklik om "groter a → nouer" met "groter a → wyer" te verwar.' },

    // ── Q10 Easy — asymptotes of a hyperbola ─────────────────────────────────
    { difficulty: 'Easy', question: 'Vind die asimptote van y=4/x+3.', checkMode: 'auto', options: ['x=4 en y=3', 'x=0 en y=3', 'x=3 en y=0', 'x=0 en y=4'], correctIndex: 1, explanation: 'Die vertikale asimptoot is altyd x=0 vir y=a/x+q. Die horisontale asimptoot is y=q=3. Om a met die asimptootwaarde te verwar, of x en y te verwissel, gee die verkeerde opsies.' },

    // ── Q11 Medium — quadrants of a hyperbola ────────────────────────────────
    { difficulty: 'Medium', question: 'In watter kwadrante lê die vertakkings van y=−5/x?', checkMode: 'auto', options: ['Eerste en derde kwadrante', 'Eerste en tweede kwadrante', 'Tweede en vierde kwadrante', 'Derde en vierde kwadrante'], correctIndex: 2, explanation: 'Aangesien a=−5<0, lê die vertakkings in kwadrante 2 en 4. ʼn Positiewe a sou die vertakkings in kwadrante 1 en 3 plaas.' },

    // ── Q12 Hard — vertical asymptote with vertical shift ────────────────────
    { difficulty: 'Hard', question: 'Thabo sê y=2/x en y=2/x+5 het dieselfde vertikale asimptoot. Is hy korrek?', checkMode: 'auto', options: ['Nee — die optel van 5 skuif die vertikale asimptoot na x=5', 'Nee — die optel van 5 verander die waarde van a, wat die vertikale asimptoot skuif', 'Kan nie bepaal word sonder ʼn grafiek nie', 'Ja — albei het ʼn vertikale asimptoot by x=0, aangesien die optel van 5 die grafiek slegs vertikaal skuif'], correctIndex: 3, explanation: 'Die vertikale asimptoot van y=a/x+q is altyd x=0, ongeag q. Die optel van 5 (verandering van q) skuif slegs die horisontale asimptoot en die hele grafiek vertikaal — dit skuif nooit die vertikale asimptoot nie.' },

    // ── Q13 Easy — horizontal asymptote of exponential ───────────────────────
    { difficulty: 'Easy', question: 'Vind die horisontale asimptoot van y=3·2ˣ+4.', checkMode: 'auto', options: ['y=4', 'y=3', 'y=2', 'y=7'], correctIndex: 0, explanation: 'Die horisontale asimptoot van y=a·bˣ+q is y=q=4. Om a of b vir q aan te sien, of a+q op te tel, gee die verkeerde opsies.' },

    // ── Q14 Medium — growth vs decay ──────────────────────────────────────────
    { difficulty: 'Medium', question: 'Verteenwoordig y=(1/2)ˣ groei of verval?', checkMode: 'auto', options: ['Groei, aangesien die basis ʼn breuk is', 'Verval, aangesien 0<1/2<1', 'Groei, aangesien 1/2 positief is', 'Nie een nie — die funksie is konstant'], correctIndex: 1, explanation: 'Aangesien 0<b=1/2<1, verteenwoordig die funksie eksponensiële verval. ʼn Basis groter as 1 gee groei; ʼn positiewe basis alleen waarborg nie groei nie.' },

    // ── Q15 Hard — y-intercept of exponential with q ─────────────────────────
    { difficulty: 'Hard', question: 'Vind die y-afsnit van y=5·3ˣ−2.', checkMode: 'auto', options: ['y=5', 'y=−2', 'y=3', 'y=13'], correctIndex: 2, explanation: 'By x=0: y=5(3⁰)−2=5(1)−2=3. Om net a te rapporteer, net q, of om die −2 te vergeet, gee die verkeerde opsies.' },

    // ── Q16 Hard — find a and q for a linear function ─────────────────────────
    { difficulty: 'Hard', question: 'ʼn Lyn y=ax+q gaan deur (0,−2) en (3,7). Vind a en q.', checkMode: 'auto', options: ['a=−2, q=3', 'a=9, q=−2', 'a=3, q=7', 'a=3, q=−2'], correctIndex: 3, explanation: 'q=−2 (die y-afsnit, vanaf die punt (0,−2)). a=(7−(−2))/(3−0)=9/3=3. Dus a=3 en q=−2.' },

    // ── Q17 Hard — find a for a quadratic given turning point and one point ───
    { difficulty: 'Hard', question: 'ʼn Kwadratiese funksie y=ax²+q het draaipunt (0,2) en gaan deur (2,10). Vind a.', checkMode: 'auto', options: ['a=2', 'a=4', 'a=8', 'a=5'], correctIndex: 0, explanation: 'Vervang (2,10) in y=ax²+2: 10=a(4)+2, dus 8=4a, wat a=2 gee.' },

    // ── Q18 Hard — exponential population growth calculation ──────────────────
    { difficulty: 'Hard', question: 'ʼn Bevolking groei volgens P=500(1,08)ᵗ. Vind die bevolking na 6 jaar, afgerond na die naaste heel getal.', checkMode: 'auto', options: ['740', '793', '840', '750'], correctIndex: 1, explanation: 'P=500(1,08)⁶=500×1,58687...≈793.' },

    // ── Q19 Hard — relate two quadratics by reflection ───────────────────────
    { difficulty: 'Hard', question: 'Lerato vergelyk y=x²−4 en y=−x²+4. Hoe hou hierdie twee grafieke met mekaar verband?', checkMode: 'auto', options: ['Hulle is identiese grafieke, net anders geskryf', 'Hulle het verskillende draaipunte, by (0,4) en (0,−4) onderskeidelik, met geen ander verband nie', 'Hulle is spieëlbeelde van mekaar om die x-as — een open opwaarts met draaipunt (0,−4), die ander open afwaarts met draaipunt (0,4)', 'Hulle is spieëlbeelde van mekaar om die y-as'], correctIndex: 2, explanation: 'y=x²−4 open opwaarts (a=1>0) met draaipunt (0,−4). y=−x²+4 open afwaarts (a=−1<0) met draaipunt (0,4). Om die hele uitdrukking te negeer, spieël ʼn grafiek om die x-as, nie die y-as nie.' },

    // ── Q20 Hard — find a and q for a hyperbola ───────────────────────────────
    { difficulty: 'Hard', question: 'ʼn Hiperbool y=a/x+q het ʼn horisontale asimptoot by y=−1 en gaan deur (2,1). Vind a en q.', checkMode: 'auto', options: ['a=2, q=−1', 'a=6, q=1', 'a=1, q=2', 'a=4, q=−1'], correctIndex: 3, explanation: 'q=−1 (vanaf die horisontale asimptoot). Vervang (2,1): 1=a/2−1, dus 2=a/2, wat a=4 gee. Dus a=4 en q=−1.' },
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (1-3):   Kwadratiese funksie y=ax²+q — draaipunt / rigting / x-afsnitte
    // Blok 2 (4-6):   Hiperbool y=a/x+q — asimptote / kwadrante
    // Blok 3 (7-9):   Eksponensiële funksie y=a·bˣ+q — asimptoot / groei-verval / y-afsnit
    // Blok 4 (10-12): Transformasies van a- en q-parameters (algebrãies)
    // Blok 5 (13-16): [DIAGRAM] Skets-beskrywing-na-vergelyking (parabool/hiperbool/eksponensiële)
    // Blok 6 (17-20): Definisieversameling/waardeversameling en gemengde moeilike toepassing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — kwadratiese kenmerke vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die draaipunt van y = x² − 9.', checkMode: 'auto', options: ['(0, −9)', '(9, 0)', '(0, 9)', '(−9, 0)'], correctIndex: 0, explanation: 'Vir y = ax² + q, is die draaipunt (0, q). Hier is q = −9, dus is die draaipunt (0, −9). Om koördinate te verwissel of die teken te verloor, gee die verkeerde opsies.' },
        { difficulty: 'Easy', question: 'Open y = −2x² + 8 opwaarts of afwaarts?', checkMode: 'auto', options: ['Afwaarts, omdat 8 positief is', 'Afwaarts, omdat a = −2 negatief is', 'Opwaarts, omdat |−2| < 8', 'Opwaarts, omdat die y-afsnit positief is'], correctIndex: 1, explanation: 'Aangesien a = −2 < 0, open die parabool afwaarts. Die teken van q (hier +8) beïnvloed die vertikale posisie, nie die rigting nie — slegs die teken van a bepaal dit.' },
        { difficulty: 'Easy', question: 'Vind die x-afsnitte van y = x² − 16.', checkMode: 'auto', options: ['(16, 0) en (−16, 0)', '(8, 0) en (−8, 0)', '(4, 0) en (−4, 0)', '(0, 4) en (0, −4)'], correctIndex: 2, explanation: 'Stel y = 0: 0 = x² − 16, dus x² = 16, wat x = ±4 gee. Die x-afsnitte is (4, 0) en (−4, 0). Om 16 self te gebruik, dit te halveer na 8, of die x/y-koördinate te verwissel, is die slaggate hier.' },

        // Blok 2 — hiperbool-kenmerke vanaf vergelyking (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die asimptote van y = 6/x − 1.', checkMode: 'auto', options: ['x = 0 en y = 1', 'x = −1 en y = 0', 'x = 6 en y = −1', 'x = 0 en y = −1'], correctIndex: 3, explanation: 'Die vertikale asimptoot is altyd x = 0 vir y = a/x + q. Die horisontale asimptoot is y = q = −1.' },
        { difficulty: 'Easy-Medium', question: 'In watter kwadrante lê die vertakkings van y = −4/x?', checkMode: 'auto', options: ['Tweede en vierde kwadrante', 'Eerste en derde kwadrante', 'Eerste en tweede kwadrante', 'Derde en vierde kwadrante'], correctIndex: 0, explanation: 'Aangesien a = −4 < 0, lê die vertakkings in kwadrante 2 en 4.' },
        { difficulty: 'Easy-Medium', question: 'Vind die horisontale asimptoot van y = 3/x + 7.', checkMode: 'auto', options: ['y = 3', 'y = 7', 'y = 0', 'y = 10'], correctIndex: 1, explanation: 'Die horisontale asimptoot van y = a/x + q is y = q = 7.' },

        // Blok 3 — eksponensiële kenmerke vanaf vergelyking (Medium)
        { difficulty: 'Medium', question: 'Vind die horisontale asimptoot van y = 3·2ˣ + 1.', checkMode: 'auto', options: ['y = 3', 'y = 2', 'y = 1', 'y = 4'], correctIndex: 2, explanation: 'Die horisontale asimptoot van y = a·bˣ + q is y = q = 1.' },
        { difficulty: 'Medium', question: 'Verteenwoordig y = 5·(1/2)ˣ − 3 groei of verval, en wat is die horisontale asimptoot?', checkMode: 'auto', options: ['Groei; y = −3', 'Groei; y = 5', 'Verval; y = 5', 'Verval; y = −3'], correctIndex: 3, explanation: 'Aangesien 0 < b = 1/2 < 1, verteenwoordig dit eksponensiële verval. Die horisontale asimptoot is y = q = −3.' },
        { difficulty: 'Medium', question: 'Vind die y-afsnit van y = 2·3ˣ + 4.', checkMode: 'auto', options: ['(0, 6)', '(0, 4)', '(0, 2)', '(0, 9)'], correctIndex: 0, explanation: 'Stel x = 0: y = 2(3⁰) + 4 = 2(1) + 4 = 6. Die y-afsnit is (0, 6).' },

        // Blok 4 — transformasies van a en q (Medium)
        { difficulty: 'Medium', question: 'Vir y = ax² + q, as a toeneem van 2 na 5 (albei positief), wat gebeur met die parabool?', checkMode: 'auto', options: ['Die parabool word wyer, aangesien ʼn groter a dit uitrek', 'Die parabool word nouer, aangesien ʼn groter |a| dit steiler maak — die rigting en draaipunt bly dieselfde', 'Die draaipunt skuif na regs', 'Die parabool swaai om afwaarts te open'], correctIndex: 1, explanation: 'ʼn Groter |a| maak ʼn parabool nouer/steiler. Aangesien a toeneem van 2 na 5 (albei positief), word die parabool nouer — die rigting van opening en die draaipunt word nie geraak nie.' },
        { difficulty: 'Medium', question: 'Vir y = a/x + q, as q verander van 3 na −2, wat gebeur met die grafiek?', checkMode: 'auto', options: ['Die vertikale asimptoot skuif van x = 3 na x = −2', 'Die vertakkings beweeg van kwadrante 1 en 3 na kwadrante 2 en 4', 'Die horisontale asimptoot skuif van y = 3 na y = −2 — die hele grafiek skuif 5 eenhede af', 'Niks verander nie, aangesien q nie die grafiek beïnvloed nie'], correctIndex: 2, explanation: 'Die horisontale asimptoot van y = a/x + q is altyd y = q, dus skuif dit van y = 3 na y = −2 — die grafiek skuif 5 eenhede af. Die vertikale asimptoot (x = 0) en die vorm van die vertakkings word nie geraak nie aangesien a onveranderd bly.' },
        { difficulty: 'Medium', question: 'Vir y = a·bˣ + q, as q toeneem (meer positief word), wat gebeur met die horisontale asimptoot?', checkMode: 'auto', options: ['Die horisontale asimptoot skuif afwaarts', 'Die basis b neem ook toe', 'Die vertikale asimptoot skuif opwaarts', 'Die horisontale asimptoot skuif opwaarts, aangesien dit altyd by y = q is'], correctIndex: 3, explanation: 'Die horisontale asimptoot van ʼn eksponensiële funksie y = a·bˣ + q is altyd by y = q. Soos q toeneem, skuif die asimptoot (en die hele grafiek) opwaarts. Eksponensiële funksies het geen vertikale asimptoot nie.' },

        // Blok 5 — [DIAGRAM] skets-beskrywing-na-vergelyking (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, −2) en gaan deur die punt (2, 6). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = 2x² − 2', 'y = x² + 2', 'y = 8x² − 2', 'y = 2x² + 2'], correctIndex: 0, explanation: 'Die draaipunt (0, −2) gee q = −2. Vervang (2, 6): 6 = a(2)² − 2, dus 8 = 4a, wat a = 2 gee. Vergelyking: y = 2x² − 2. Om die teken van die draaipunt verkeerd te lees, of te vergeet om 8 deur 4 te deel, lewer die ander opsies.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M86,38 L89,60.5 L92,80 L95,96.5 L98,110 L101,120.5 L104,128 L107,132.5 L110,134 L113,132.5 L116,128 L119,120.5 L122,110 L125,96.5 L128,80 L131,60.5 L134,38" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="134" r="3.5" fill="#2563eb"/><text x="116" y="150" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -2)</text><circle cx="134" cy="38" r="3.5" fill="#2563eb"/><text x="141" y="30" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, 6)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die hiperbool wat getoon word, het ʼn horisontale asimptoot by y = 1 en gaan deur die punt (1, 4). Vind die vergelyking van die hiperbool in die vorm y = a/x + q.', checkMode: 'auto', options: ['y = 4/x + 1', 'y = 3/x + 1', 'y = 3/x − 1', 'y = 4/x − 1'], correctIndex: 1, explanation: 'Die horisontale asimptoot y = 1 gee q = 1. Vervang (1, 4): 4 = a/1 + 1, dus a = 3. Vergelyking: y = 3/x + 1. Om die punt se y-waarde direk as a te gebruik, of die teken van q om te draai, gee die verkeerde opsies.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="98" x2="203.12" y2="98" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="92" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 1</text><path d="M115.76,23 L117.44,39.94 L119.12,50.63 L120.8,58 L122.48,63.38 L124.16,67.49 L125.84,70.73 L127.52,73.34 L129.2,75.5 L130.88,77.31 L132.56,78.85 L134.24,80.18 L135.92,81.33 L137.6,82.35 L139.28,83.25 L140.96,84.05 L142.64,84.76 L144.32,85.41 L146,86 L147.68,86.54 L149.36,87.02 L151.04,87.47 L152.72,87.89 L154.4,88.27 L156.08,88.63 L157.76,88.95 L159.44,89.26 L161.12,89.55 L162.8,89.82 L164.48,90.07 L166.16,90.31 L167.84,90.53 L169.52,90.74 L171.2,90.94 L172.88,91.13 L174.56,91.31 L176.24,91.48 L177.92,91.64 L179.6,91.79 L181.28,91.94 L182.96,92.08 L184.64,92.21 L186.32,92.34 L188,92.46 L189.68,92.58 L191.36,92.69 L193.04,92.8 L194.72,92.9 L196.4,93 L198.08,93.1 L199.76,93.19 L201.44,93.28 L203.12,93.36 L204.8,93.44 L206.48,93.52 L208.16,93.6 L209.84,93.67 L211.52,93.74 L213.2,93.81 L214.88,93.88 L216.56,93.95 L218.24,94.01 L219.92,94.07 L221.6,94.13 L223.28,94.19 L224.96,94.24 L226.64,94.3 L228.32,94.35 L230,94.4" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M-10,101.6 L-8.32,101.65 L-6.64,101.7 L-4.96,101.76 L-3.28,101.81 L-1.6,101.87 L0.08,101.93 L1.76,101.99 L3.44,102.05 L5.12,102.12 L6.8,102.19 L8.48,102.26 L10.16,102.33 L11.84,102.4 L13.52,102.48 L15.2,102.56 L16.88,102.64 L18.56,102.72 L20.24,102.81 L21.92,102.9 L23.6,103 L25.28,103.1 L26.96,103.2 L28.64,103.31 L30.32,103.42 L32,103.54 L33.68,103.66 L35.36,103.79 L37.04,103.92 L38.72,104.06 L40.4,104.21 L42.08,104.36 L43.76,104.52 L45.44,104.69 L47.12,104.87 L48.8,105.06 L50.48,105.26 L52.16,105.47 L53.84,105.69 L55.52,105.93 L57.2,106.18 L58.88,106.45 L60.56,106.74 L62.24,107.05 L63.92,107.38 L65.6,107.73 L67.28,108.11 L68.96,108.53 L70.64,108.98 L72.32,109.46 L74,110 L75.68,110.59 L77.36,111.24 L79.04,111.95 L80.72,112.75 L82.4,113.65 L84.08,114.67 L85.76,115.82 L87.44,117.15 L89.12,118.69 L90.8,120.5 L92.48,122.66 L94.16,125.27 L95.84,128.51 L97.52,132.62 L99.2,138 L100.88,145.37 L102.56,156.06 L104.24,173 L105.92,203.88" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="122" cy="62" r="3.5" fill="#2563eb"/><text x="129" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 4)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die eksponensiële grafiek wat getoon word, het basis 2, ʼn horisontale asimptoot by y = 2, en gaan deur die punt (0, 5). Vind die vergelyking in die vorm y = a·2ˣ + q.', checkMode: 'auto', options: ['y = 5·2ˣ', 'y = 3·2ˣ + 5', 'y = 3·2ˣ + 2', 'y = 5·2ˣ + 2'], correctIndex: 2, explanation: 'Die horisontale asimptoot y = 2 gee q = 2. Vervang (0, 5): 5 = a(2⁰) + 2 = a + 2, dus a = 3. Vergelyking: y = 3·2ˣ + 2. Om die y-afsnitwaarde direk as a te gebruik, sonder om eers q af te trek, gee die verkeerde opsies.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="86" x2="203.12" y2="86" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="80" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M-10,85.96 L-7.33,85.96 L-4.67,85.95 L-2,85.94 L0.67,85.93 L3.33,85.92 L6,85.91 L8.67,85.9 L11.33,85.88 L14,85.86 L16.67,85.84 L19.33,85.81 L22,85.78 L24.67,85.74 L27.33,85.7 L30,85.65 L32.67,85.59 L35.33,85.52 L38,85.44 L40.67,85.34 L43.33,85.23 L46,85.11 L48.67,84.96 L51.33,84.78 L54,84.58 L56.67,84.35 L59.33,84.07 L62,83.75 L64.67,83.38 L67.33,82.94 L70,82.43 L72.67,81.83 L75.33,81.14 L78,80.33 L80.67,79.39 L83.33,78.28 L86,77 L88.67,75.5 L91.33,73.75 L94,71.71 L96.67,69.33 L99.33,66.56 L102,63.32 L104.67,59.54 L107.33,55.14 L110,50 L112.67,44 L115.33,37.01 L118,28.85 L120.67,19.34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="50" r="3.5" fill="#2563eb"/><text x="116" y="42" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 5)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, 4) en gaan deur die punt (−1, 1). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = 3x² + 4', 'y = −3x² − 4', 'y = −2x² + 4', 'y = −3x² + 4'], correctIndex: 3, explanation: 'Die draaipunt (0, 4) gee q = 4. Vervang (−1, 1): 1 = a(−1)² + 4, dus 1 = a + 4, wat a = −3 gee. Vergelyking: y = −3x² + 4. Om die negatiewe teken op a of op q te laat val, lewer die ander opsies.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M86,206 L89,172.25 L92,143 L95,118.25 L98,98 L101,82.25 L104,71 L107,64.25 L110,62 L113,64.25 L116,71 L119,82.25 L122,98 L125,118.25 L128,143 L131,172.25 L134,206" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="62" r="3.5" fill="#2563eb"/><text x="116" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text><circle cx="98" cy="98" r="3.5" fill="#2563eb"/><text x="91" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">(-1, 1)</text></svg>' },

        // Blok 6 — definisieversameling/waardeversameling en gemengde moeilike toepassing (Hard)
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = x² + 3.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ. Waardeversameling: y ≥ 3', 'Definisieversameling: x ≥ 3. Waardeversameling: y ∈ ℝ', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ≤ 3', 'Definisieversameling: x ≠ 0. Waardeversameling: y ≥ 3'], correctIndex: 0, explanation: 'Definisieversameling: x ∈ ℝ (alle reële getalle, aangesien daar geen beperking is nie). Waardeversameling: y ≥ 3, aangesien die parabool opwaarts open met draaipunt (0, 3), dus is die minimum y-waarde 3. Om te verwar watter veranderlike die beperking geld, of die rigting van die ongelykheid, gee die verkeerde opsies.' },
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = 4/x − 2.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ, x ≠ −2. Waardeversameling: y ∈ ℝ, y ≠ 0', 'Definisieversameling: x ∈ ℝ, x ≠ 0. Waardeversameling: y ∈ ℝ, y ≠ −2', 'Definisieversameling: x ∈ ℝ, x ≠ 4. Waardeversameling: y ∈ ℝ, y ≠ −2', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ∈ ℝ, y ≠ −2'], correctIndex: 1, explanation: 'Definisieversameling: x ∈ ℝ, x ≠ 0 (die funksie is onbepaald by x = 0). Waardeversameling: y ∈ ℝ, y ≠ −2 (y kan nooit gelyk wees aan die horisontale asimptootwaarde nie). Om die uitgesluite x-waarde met q te verwar, of die beperking te vergeet, gee die verkeerde opsies.' },
        { difficulty: 'Hard', question: 'ʼn Hiperbool y = a/x + q het asimptote x = 0 en y = 3, en gaan deur die punt (2, 5). Vind a en q, en gee die vergelyking.', checkMode: 'auto', options: ['y = 5/x + 3', 'y = 4/x + 2', 'y = 4/x + 3', 'y = 2/x + 3'], correctIndex: 2, explanation: 'q = 3 (vanaf die horisontale asimptoot). Vervang (2, 5): 5 = a/2 + 3, dus 2 = a/2, wat a = 4 gee. Vergelyking: y = 4/x + 3.' },
        { difficulty: 'Hard', question: 'ʼn Bakterieskolonie groei volgens N = 200(1,15)ᵗ, waar t die tyd in ure is. Vind N na 4 uur, afgerond na die naaste heel getal.', checkMode: 'auto', options: ['300', '320', '400', '350'], correctIndex: 3, explanation: 'N = 200(1,15)⁴ = 200 × 1,74900625 ≈ 349,8, wat afrond na 350.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het parabole, hiperbole en eksponensiële funksies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor asimptote of draaipunte weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van vergelykings vanaf sleutelkenmerke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — kwadratiese kenmerke vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die draaipunt van y = x² + 7.', checkMode: 'auto', options: ['(0, 7)', '(7, 0)', '(0, −7)', '(1, 7)'], correctIndex: 0, explanation: 'Vir y = ax² + q, is die draaipunt (0, q). Hier is q = 7, dus is die draaipunt (0, 7).' },
        { difficulty: 'Easy', question: 'Open y = 3x² − 12 opwaarts of afwaarts?', checkMode: 'auto', options: ['Afwaarts, aangesien 12 > 3', 'Opwaarts, aangesien a = 3 > 0', 'Afwaarts, aangesien q negatief is', 'Opwaarts, aangesien die x-afsnitte positief is'], correctIndex: 1, explanation: 'Aangesien a = 3 > 0, open die parabool opwaarts. Die teken van q (hier −12) beïnvloed die vertikale posisie, nie die rigting nie.' },
        { difficulty: 'Easy', question: 'Vind die x-afsnitte van y = x² − 25.', checkMode: 'auto', options: ['(25, 0) en (−25, 0)', '(0, 5) en (0, −5)', '(5, 0) en (−5, 0)', '(10, 0) en (−10, 0)'], correctIndex: 2, explanation: 'Stel y = 0: 0 = x² − 25, dus x² = 25, wat x = ±5 gee. Die x-afsnitte is (5, 0) en (−5, 0).' },

        // Blok 2 — hiperbool-kenmerke vanaf vergelyking (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die asimptote van y = 8/x + 4.', checkMode: 'auto', options: ['x = 4 en y = 0', 'x = 8 en y = 4', 'x = 0 en y = 8', 'x = 0 en y = 4'], correctIndex: 3, explanation: 'Die vertikale asimptoot is altyd x = 0. Die horisontale asimptoot is y = q = 4.' },
        { difficulty: 'Easy-Medium', question: 'In watter kwadrante lê die vertakkings van y = 7/x?', checkMode: 'auto', options: ['Eerste en derde kwadrante', 'Tweede en vierde kwadrante', 'Eerste en tweede kwadrante', 'Derde en vierde kwadrante'], correctIndex: 0, explanation: 'Aangesien a = 7 > 0, lê die vertakkings in kwadrante 1 en 3.' },
        { difficulty: 'Easy-Medium', question: 'Vind die horisontale asimptoot van y = 2/x − 5.', checkMode: 'auto', options: ['y = 2', 'y = −5', 'y = 0', 'y = 5'], correctIndex: 1, explanation: 'Die horisontale asimptoot van y = a/x + q is y = q = −5.' },

        // Blok 3 — eksponensiële kenmerke vanaf vergelyking (Medium)
        { difficulty: 'Medium', question: 'Vind die horisontale asimptoot van y = 4·3ˣ − 2.', checkMode: 'auto', options: ['y = 4', 'y = 3', 'y = −2', 'y = 2'], correctIndex: 2, explanation: 'Die horisontale asimptoot van y = a·bˣ + q is y = q = −2.' },
        { difficulty: 'Medium', question: 'Verteenwoordig y = 6·(1/4)ˣ + 1 groei of verval, en wat is die horisontale asimptoot?', checkMode: 'auto', options: ['Groei; y = 1', 'Verval; y = 6', 'Groei; y = 6', 'Verval; y = 1'], correctIndex: 3, explanation: 'Aangesien 0 < b = 1/4 < 1, verteenwoordig dit eksponensiële verval. Die horisontale asimptoot is y = q = 1.' },
        { difficulty: 'Medium', question: 'Vind die y-afsnit van y = 5·2ˣ − 1.', checkMode: 'auto', options: ['(0, 4)', '(0, 5)', '(0, −1)', '(0, 9)'], correctIndex: 0, explanation: 'Stel x = 0: y = 5(2⁰) − 1 = 5(1) − 1 = 4. Die y-afsnit is (0, 4).' },

        // Blok 4 — transformasies van a en q (Medium)
        { difficulty: 'Medium', question: 'Vir y = ax² + q, as a verander van −1 na −4 (die parabool open steeds afwaarts), wat gebeur met die vorm?', checkMode: 'auto', options: ['Die parabool word wyer, aangesien ʼn afnemende |a| dit platter maak', 'Die parabool word nouer/steiler, aangesien |a| toeneem van 1 na 4 — dit bly afwaarts open', 'Die parabool swaai om opwaarts te open', 'Die draaipunt beweeg weg van die oorsprong'], correctIndex: 1, explanation: 'Die parabool word nouer/steiler, aangesien |a| toeneem van 1 na 4. Dit bly afwaarts open aangesien a negatief bly.' },
        { difficulty: 'Medium', question: 'Vir y = a/x + q, as a van teken verander van positief na negatief (q onveranderd), wat gebeur met die grafiek?', checkMode: 'auto', options: ['Die horisontale asimptoot verander van waarde', 'Die vertikale asimptoot se teken draai om', 'Die vertakkings beweeg van kwadrante 1 en 3 na kwadrante 2 en 4 — die grafiek word gespieël', 'Die grafiek word ʼn reguit lyn'], correctIndex: 2, explanation: 'Wanneer a van teken verander van positief na negatief, beweeg die vertakkings van kwadrante 1 en 3 na kwadrante 2 en 4 — die grafiek word gespieël. Die asimptote (x = 0 en y = q) bly dieselfde aangesien slegs die teken van a verander het.' },
        { difficulty: 'Medium', question: 'Vir y = a·bˣ + q, as q afneem (meer negatief word), wat gebeur met die horisontale asimptoot?', checkMode: 'auto', options: ['Die horisontale asimptoot skuif opwaarts', 'Die basis b neem ook af', 'Niks verander nie aangesien slegs q verander het', 'Die horisontale asimptoot skuif afwaarts, aangesien dit altyd by y = q is'], correctIndex: 3, explanation: 'Die horisontale asimptoot is altyd by y = q. Soos q afneem (meer negatief word), skuif die asimptoot — en die hele grafiek — afwaarts.' },

        // Blok 5 — [DIAGRAM] skets-beskrywing-na-vergelyking (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, 1) en gaan deur die punt (3, 10). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = x² + 1', 'y = 3x² + 1', 'y = x² + 3', 'y = 9x² + 1'], correctIndex: 0, explanation: 'Die draaipunt (0, 1) gee q = 1. Vervang (3, 10): 10 = a(3)² + 1, dus 9 = 9a, wat a = 1 gee. Vergelyking: y = x² + 1.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="56" y1="2" x2="56" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="2" x2="74" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="2" x2="92" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="128" y1="2" x2="128" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="146" y1="2" x2="146" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="164" y1="2" x2="164" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="200" x2="218" y2="200" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="164" x2="218" y2="164" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="146" x2="218" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="128" x2="218" y2="128" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="92" x2="218" y2="92" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="74" x2="218" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="56" x2="218" y2="56" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="20" x2="218" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M83,20 L85.7,35.39 L88.4,49.16 L91.1,61.31 L93.8,71.84 L96.5,80.75 L99.2,88.04 L101.9,93.71 L104.6,97.76 L107.3,100.19 L110,101 L112.7,100.19 L115.4,97.76 L118.1,93.71 L120.8,88.04 L123.5,80.75 L126.2,71.84 L128.9,61.31 L131.6,49.16 L134.3,35.39 L137,20" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="101" r="3.5" fill="#2563eb"/><text x="116" y="117" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 1)</text><circle cx="137" cy="20" r="3.5" fill="#2563eb"/><text x="144" y="12" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 10)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die hiperbool wat getoon word, het ʼn horisontale asimptoot by y = −3 en gaan deur die punt (1, 2). Vind die vergelyking van die hiperbool in die vorm y = a/x + q.', checkMode: 'auto', options: ['y = 2/x − 3', 'y = 5/x − 3', 'y = 5/x + 3', 'y = 2/x + 3'], correctIndex: 1, explanation: 'Die horisontale asimptoot y = −3 gee q = −3. Vervang (1, 2): 2 = a/1 − 3, dus a = 5. Vergelyking: y = 5/x − 3.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="146" x2="203.12" y2="146" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="140" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = -3</text><path d="M115.76,21 L117.44,49.23 L119.12,67.05 L120.8,79.33 L122.48,88.31 L124.16,95.15 L125.84,100.55 L127.52,104.9 L129.2,108.5 L130.88,111.52 L132.56,114.09 L134.24,116.3 L135.92,118.22 L137.6,119.91 L139.28,121.41 L140.96,122.74 L142.64,123.94 L144.32,125.02 L146,126 L147.68,126.89 L149.36,127.71 L151.04,128.46 L152.72,129.15 L154.4,129.78 L156.08,130.38 L157.76,130.92 L159.44,131.44 L161.12,131.92 L162.8,132.36 L164.48,132.78 L166.16,133.18 L167.84,133.55 L169.52,133.9 L171.2,134.24 L172.88,134.55 L174.56,134.85 L176.24,135.13 L177.92,135.4 L179.6,135.66 L181.28,135.9 L182.96,136.13 L184.64,136.35 L186.32,136.57 L188,136.77 L189.68,136.96 L191.36,137.15 L193.04,137.33 L194.72,137.5 L196.4,137.67 L198.08,137.83 L199.76,137.98 L201.44,138.13 L203.12,138.27 L204.8,138.41 L206.48,138.54 L208.16,138.67 L209.84,138.79 L211.52,138.91 L213.2,139.02 L214.88,139.14 L216.56,139.24 L218.24,139.35 L219.92,139.45 L221.6,139.55 L223.28,139.64 L224.96,139.74 L226.64,139.83 L228.32,139.91 L230,140" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M-10,152 L-8.32,152.09 L-6.64,152.17 L-4.96,152.26 L-3.28,152.36 L-1.6,152.45 L0.08,152.55 L1.76,152.65 L3.44,152.76 L5.12,152.86 L6.8,152.98 L8.48,153.09 L10.16,153.21 L11.84,153.33 L13.52,153.46 L15.2,153.59 L16.88,153.73 L18.56,153.87 L20.24,154.02 L21.92,154.17 L23.6,154.33 L25.28,154.5 L26.96,154.67 L28.64,154.85 L30.32,155.04 L32,155.23 L33.68,155.43 L35.36,155.65 L37.04,155.87 L38.72,156.1 L40.4,156.34 L42.08,156.6 L43.76,156.87 L45.44,157.15 L47.12,157.45 L48.8,157.76 L50.48,158.1 L52.16,158.45 L53.84,158.82 L55.52,159.22 L57.2,159.64 L58.88,160.08 L60.56,160.56 L62.24,161.08 L63.92,161.63 L65.6,162.22 L67.28,162.85 L68.96,163.54 L70.64,164.29 L72.32,165.11 L74,166 L75.68,166.98 L77.36,168.06 L79.04,169.26 L80.72,170.59 L82.4,172.09 L84.08,173.78 L85.76,175.7 L87.44,177.91 L89.12,180.48 L90.8,183.5 L92.48,187.1 L94.16,191.45 L95.84,196.85 L97.52,203.69" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="122" cy="86" r="3.5" fill="#2563eb"/><text x="129" y="78" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, 2)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die eksponensiële grafiek wat getoon word, het basis 2, ʼn horisontale asimptoot by y = 0, en gaan deur die punt (0, 4). Vind die vergelyking in die vorm y = a·2ˣ + q.', checkMode: 'auto', options: ['y = 4·2ˣ + 4', 'y = 2·2ˣ', 'y = 4·2ˣ', 'y = 4·2ˣ − 4'], correctIndex: 2, explanation: 'Die horisontale asimptoot y = 0 gee q = 0. Vervang (0, 4): 4 = a(2⁰) + 0 = a, dus a = 4. Vergelyking: y = 4·2ˣ.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="110" x2="203.12" y2="110" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="104" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 0</text><path d="M-10,109.95 L-7.33,109.95 L-4.67,109.94 L-2,109.93 L0.67,109.91 L3.33,109.9 L6,109.88 L8.67,109.86 L11.33,109.84 L14,109.81 L16.67,109.78 L19.33,109.74 L22,109.7 L24.67,109.65 L27.33,109.59 L30,109.53 L32.67,109.45 L35.33,109.36 L38,109.25 L40.67,109.13 L43.33,108.98 L46,108.81 L48.67,108.61 L51.33,108.38 L54,108.11 L56.67,107.8 L59.33,107.43 L62,107 L64.67,106.5 L67.33,105.92 L70,105.24 L72.67,104.44 L75.33,103.52 L78,102.44 L80.67,101.18 L83.33,99.71 L86,98 L88.67,96 L91.33,93.67 L94,90.95 L96.67,87.78 L99.33,84.08 L102,79.76 L104.67,74.73 L107.33,68.85 L110,62 L112.67,54.01 L115.33,44.68 L118,33.8 L120.67,21.12" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="62" r="3.5" fill="#2563eb"/><text x="116" y="54" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 4)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, −5) en gaan deur die punt (2, −1). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = 4x² − 5', 'y = x² + 5', 'y = −x² − 5', 'y = x² − 5'], correctIndex: 3, explanation: 'Die draaipunt (0, −5) gee q = −5. Vervang (2, −1): −1 = a(2)² − 5, dus 4 = 4a, wat a = 1 gee. Vergelyking: y = x² − 5.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M68,23 L71,43.25 L74,62 L77,79.25 L80,95 L83,109.25 L86,122 L89,133.25 L92,143 L95,151.25 L98,158 L101,163.25 L104,167 L107,169.25 L110,170 L113,169.25 L116,167 L119,163.25 L122,158 L125,151.25 L128,143 L131,133.25 L134,122 L137,109.25 L140,95 L143,79.25 L146,62 L149,43.25 L152,23" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="170" r="3.5" fill="#2563eb"/><text x="116" y="186" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -5)</text><circle cx="134" cy="122" r="3.5" fill="#2563eb"/><text x="141" y="114" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(2, -1)</text></svg>' },

        // Blok 6 — definisieversameling/waardeversameling en gemengde moeilike toepassing (Hard)
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = −2x² − 1.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ. Waardeversameling: y ≤ −1', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ≥ −1', 'Definisieversameling: x ≤ −1. Waardeversameling: y ∈ ℝ', 'Definisieversameling: x ∈ ℝ, x ≠ 0. Waardeversameling: y ≤ −1'], correctIndex: 0, explanation: 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ≤ −1, aangesien die parabool afwaarts open (a = −2 < 0) met draaipunt (0, −1), dus is die maksimum y-waarde −1.' },
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = −3/x + 5.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ, x ≠ 5. Waardeversameling: y ∈ ℝ, y ≠ 0', 'Definisieversameling: x ∈ ℝ, x ≠ 0. Waardeversameling: y ∈ ℝ, y ≠ 5', 'Definisieversameling: x ∈ ℝ, x ≠ −3. Waardeversameling: y ∈ ℝ, y ≠ 5', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ∈ ℝ, y ≠ 5'], correctIndex: 1, explanation: 'Definisieversameling: x ∈ ℝ, x ≠ 0 (onbepaald waar die noemer nul is). Waardeversameling: y ∈ ℝ, y ≠ 5 (y kan nooit gelyk wees aan die horisontale asimptootwaarde nie).' },
        { difficulty: 'Hard', question: 'ʼn Hiperbool y = a/x + q het asimptote x = 0 en y = −2, en gaan deur die punt (1, 3). Vind a en q, en gee die vergelyking.', checkMode: 'auto', options: ['y = 3/x − 2', 'y = 5/x + 2', 'y = 5/x − 2', 'y = 1/x − 2'], correctIndex: 2, explanation: 'q = −2 (vanaf die horisontale asimptoot). Vervang (1, 3): 3 = a/1 − 2, dus a = 5. Vergelyking: y = 5/x − 2.' },
        { difficulty: 'Hard', question: 'ʼn Belegging groei volgens A = 1500(1,06)ᵗ, waar t die tyd in jare is. Vind A na 5 jaar, afgerond na die naaste rand.', checkMode: 'auto', options: ['R1 800', 'R1 950', 'R2 100', 'R2 007'], correctIndex: 3, explanation: 'A = 1500(1,06)⁵ = 1500 × 1,3382255... ≈ 2007,34, wat afrond na R2 007.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het parabole, hiperbole en eksponensiële funksies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor asimptote of draaipunte weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van vergelykings vanaf sleutelkenmerke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — kwadratiese kenmerke vanaf vergelyking (Easy)
        { difficulty: 'Easy', question: 'Vind die draaipunt van y = x² − 6.', checkMode: 'auto', options: ['(0, −6)', '(6, 0)', '(0, 6)', '(−6, 0)'], correctIndex: 0, explanation: 'Vir y = ax² + q, is die draaipunt (0, q). Hier is q = −6, dus is die draaipunt (0, −6).' },
        { difficulty: 'Easy', question: 'Open y = −4x² + 2 opwaarts of afwaarts?', checkMode: 'auto', options: ['Opwaarts, aangesien 2 positief is', 'Afwaarts, aangesien a = −4 negatief is', 'Opwaarts, aangesien |−4| > 2', 'Afwaarts, aangesien die y-afsnit positief is'], correctIndex: 1, explanation: 'Aangesien a = −4 < 0, open die parabool afwaarts. Die teken van q (+2) bepaal die vertikale posisie, nie die rigting nie.' },
        { difficulty: 'Easy', question: 'Vind die x-afsnitte van y = x² − 36.', checkMode: 'auto', options: ['(0, 6) en (0, −6)', '(18, 0) en (−18, 0)', '(6, 0) en (−6, 0)', '(12, 0) en (−12, 0)'], correctIndex: 2, explanation: 'Stel y = 0: 0 = x² − 36, dus x² = 36, wat x = ±6 gee. Die x-afsnitte is (6, 0) en (−6, 0).' },

        // Blok 2 — hiperbool-kenmerke vanaf vergelyking (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die asimptote van y = −3/x + 6.', checkMode: 'auto', options: ['x = −3 en y = 6', 'x = 6 en y = 0', 'x = 0 en y = −3', 'x = 0 en y = 6'], correctIndex: 3, explanation: 'Die vertikale asimptoot is altyd x = 0. Die horisontale asimptoot is y = q = 6.' },
        { difficulty: 'Easy-Medium', question: 'In watter kwadrante lê die vertakkings van y = −9/x?', checkMode: 'auto', options: ['Tweede en vierde kwadrante', 'Eerste en derde kwadrante', 'Eerste en tweede kwadrante', 'Derde en vierde kwadrante'], correctIndex: 0, explanation: 'Aangesien a = −9 < 0, lê die vertakkings in kwadrante 2 en 4.' },
        { difficulty: 'Easy-Medium', question: 'Vind die horisontale asimptoot van y = 10/x − 4.', checkMode: 'auto', options: ['y = 10', 'y = −4', 'y = 0', 'y = 4'], correctIndex: 1, explanation: 'Die horisontale asimptoot van y = a/x + q is y = q = −4.' },

        // Blok 3 — eksponensiële kenmerke vanaf vergelyking (Medium)
        { difficulty: 'Medium', question: 'Vind die horisontale asimptoot van y = 2·5ˣ + 3.', checkMode: 'auto', options: ['y = 2', 'y = 5', 'y = 3', 'y = 8'], correctIndex: 2, explanation: 'Die horisontale asimptoot van y = a·bˣ + q is y = q = 3.' },
        { difficulty: 'Medium', question: 'Verteenwoordig y = 8·(1/3)ˣ − 2 groei of verval, en wat is die horisontale asimptoot?', checkMode: 'auto', options: ['Groei; y = −2', 'Verval; y = 8', 'Groei; y = 8', 'Verval; y = −2'], correctIndex: 3, explanation: 'Aangesien 0 < b = 1/3 < 1, verteenwoordig dit eksponensiële verval. Die horisontale asimptoot is y = q = −2.' },
        { difficulty: 'Medium', question: 'Vind die y-afsnit van y = 3·4ˣ + 2.', checkMode: 'auto', options: ['(0, 5)', '(0, 3)', '(0, 2)', '(0, 12)'], correctIndex: 0, explanation: 'Stel x = 0: y = 3(4⁰) + 2 = 3(1) + 2 = 5. Die y-afsnit is (0, 5).' },

        // Blok 4 — transformasies van a en q (Medium)
        { difficulty: 'Medium', question: 'Vir y = ax² + q, as q verander van −3 na 6, wat gebeur met die draaipunt?', checkMode: 'auto', options: ['Die draaipunt bly by (0, −3), aangesien slegs die breedte verander', 'Die draaipunt beweeg van (0, −3) na (0, 6) — die hele parabool skuif 9 eenhede op', 'Die draaipunt beweeg na (9, 0)', 'Die parabool swaai om afwaarts te open'], correctIndex: 1, explanation: 'Die draaipunt beweeg van (0, −3) na (0, 6) — die hele parabool skuif 9 eenhede op. Breedte en rigting van opening word nie geraak nie aangesien a onveranderd bly.' },
        { difficulty: 'Medium', question: 'Vir y = a/x + q, as |a| toeneem terwyl a positief bly, wat gebeur met die vertakkings?', checkMode: 'auto', options: ['Die vertakkings beweeg na kwadrante 2 en 4', 'Die vertikale asimptoot beweeg verder van die oorsprong af', 'Die vertakkings beweeg verder van die asse af, en rek uitwaarts, terwyl hulle in kwadrante 1 en 3 bly', 'Die vertakkings beweeg nader aan die oorsprong, en krimp inwaarts'], correctIndex: 2, explanation: 'Soos |a| toeneem (a bly positief), beweeg die vertakkings verder weg van die asimptote/asse — die kurwe rek uitwaarts, terwyl dit in kwadrante 1 en 3 bly. Die asimptote word nie geraak nie.' },
        { difficulty: 'Medium', question: 'Vir y = a·bˣ + q, as die basis b verander van ʼn waarde groter as 1 na ʼn waarde tussen 0 en 1 (a en q onveranderd), wat gebeur met die grafiek?', checkMode: 'auto', options: ['Die horisontale asimptoot beweeg na ʼn nuwe waarde', 'Die grafiek word ʼn reguit lyn', 'Die y-afsnit verdwyn', 'Die grafiek verander van groei na verval, terwyl die horisontale asimptoot y = q dieselfde bly'], correctIndex: 3, explanation: 'Die grafiek verander van eksponensiële groei na eksponensiële verval — in plaas daarvan om steil te styg soos x toeneem, daal die kurwe nou. Die horisontale asimptoot y = q word nie geraak nie aangesien slegs b verander het.' },

        // Blok 5 — [DIAGRAM] skets-beskrywing-na-vergelyking (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, 3) en gaan deur die punt (1, −2). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = −5x² + 3', 'y = 5x² + 3', 'y = −5x² − 3', 'y = −2x² + 3'], correctIndex: 0, explanation: 'Die draaipunt (0, 3) gee q = 3. Vervang (1, −2): −2 = a(1)² + 3, dus a = −5. Vergelyking: y = −5x² + 3. Om die teken op a of q te laat val, of om nie 3 volledig af te trek nie, gee die verkeerde opsies.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M95,167.75 L98,134 L101,107.75 L104,89 L107,77.75 L110,74 L113,77.75 L116,89 L119,107.75 L122,134 L125,167.75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="74" r="3.5" fill="#2563eb"/><text x="116" y="66" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 3)</text><circle cx="122" cy="134" r="3.5" fill="#2563eb"/><text x="129" y="150" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(1, -2)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die hiperbool wat getoon word, het ʼn horisontale asimptoot by y = 2 en gaan deur die punt (−1, −3). Vind die vergelyking van die hiperbool in die vorm y = a/x + q.', checkMode: 'auto', options: ['y = 3/x + 2', 'y = 5/x + 2', 'y = 5/x − 2', 'y = −5/x + 2'], correctIndex: 1, explanation: 'Die horisontale asimptoot y = 2 gee q = 2. Vervang (−1, −3): −3 = a/(−1) + 2, dus −3 = −a + 2, wat a = 5 gee. Vergelyking: y = 5/x + 2.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="86" x2="203.12" y2="86" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="80" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 2</text><path d="M102.56,182.77 L100.88,164.95 L99.2,152.67 L97.52,143.69 L95.84,136.85 L94.16,131.45 L92.48,127.1 L90.8,123.5 L89.12,120.48 L87.44,117.91 L85.76,115.7 L84.08,113.78 L82.4,112.09 L80.72,110.59 L79.04,109.26 L77.36,108.06 L75.68,106.98 L74,106 L72.32,105.11 L70.64,104.29 L68.96,103.54 L67.28,102.85 L65.6,102.22 L63.92,101.63 L62.24,101.08 L60.56,100.56 L58.88,100.08 L57.2,99.64 L55.52,99.22 L53.84,98.82 L52.16,98.45 L50.48,98.1 L48.8,97.76 L47.12,97.45 L45.44,97.15 L43.76,96.87 L42.08,96.6 L40.4,96.34 L38.72,96.1 L37.04,95.87 L35.36,95.65 L33.68,95.43 L32,95.23 L30.32,95.04 L28.64,94.85 L26.96,94.67 L25.28,94.5 L23.6,94.33 L21.92,94.17 L20.24,94.02 L18.56,93.87 L16.88,93.73 L15.2,93.59 L13.52,93.46 L11.84,93.33 L10.16,93.21 L8.48,93.09 L6.8,92.98 L5.12,92.86 L3.44,92.76 L1.76,92.65 L0.08,92.55 L-1.6,92.45 L-3.28,92.36 L-4.96,92.26 L-6.64,92.17 L-8.32,92.09 L-10,92" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M230,80 L228.32,79.91 L226.64,79.83 L224.96,79.74 L223.28,79.64 L221.6,79.55 L219.92,79.45 L218.24,79.35 L216.56,79.24 L214.88,79.14 L213.2,79.02 L211.52,78.91 L209.84,78.79 L208.16,78.67 L206.48,78.54 L204.8,78.41 L203.12,78.27 L201.44,78.13 L199.76,77.98 L198.08,77.83 L196.4,77.67 L194.72,77.5 L193.04,77.33 L191.36,77.15 L189.68,76.96 L188,76.77 L186.32,76.57 L184.64,76.35 L182.96,76.13 L181.28,75.9 L179.6,75.66 L177.92,75.4 L176.24,75.13 L174.56,74.85 L172.88,74.55 L171.2,74.24 L169.52,73.9 L167.84,73.55 L166.16,73.18 L164.48,72.78 L162.8,72.36 L161.12,71.92 L159.44,71.44 L157.76,70.92 L156.08,70.38 L154.4,69.78 L152.72,69.15 L151.04,68.46 L149.36,67.71 L147.68,66.89 L146,66 L144.32,65.02 L142.64,63.94 L140.96,62.74 L139.28,61.41 L137.6,59.91 L135.92,58.22 L134.24,56.3 L132.56,54.09 L130.88,51.52 L129.2,48.5 L127.52,44.9 L125.84,40.55 L124.16,35.15 L122.48,28.31 L120.8,19.33" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="98" cy="146" r="3.5" fill="#2563eb"/><text x="91" y="162" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">(-1, -3)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die eksponensiële grafiek wat getoon word, het basis 3, ʼn horisontale asimptoot by y = 1, en gaan deur die punt (0, 6). Vind die vergelyking in die vorm y = a·3ˣ + q.', checkMode: 'auto', options: ['y = 6·3ˣ', 'y = 6·3ˣ + 1', 'y = 5·3ˣ + 1', 'y = 5·3ˣ − 1'], correctIndex: 2, explanation: 'Die horisontale asimptoot y = 1 gee q = 1. Vervang (0, 6): 6 = a(3⁰) + 1 = a + 1, dus a = 5. Vergelyking: y = 5·3ˣ + 1.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="14" y1="2" x2="14" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="38" y1="2" x2="38" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="2" x2="62" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="86" y1="2" x2="86" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="2" x2="134" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="158" y1="2" x2="158" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="2" x2="182" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="2" x2="206" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="206" x2="218" y2="206" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="182" x2="218" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="158" x2="218" y2="158" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="134" x2="218" y2="134" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="86" x2="218" y2="86" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="62" x2="218" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="38" x2="218" y2="38" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="14" x2="218" y2="14" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><line x1="16.88" y1="98" x2="203.12" y2="98" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/><text x="204.08" y="92" font-size="12" fill="#ea580c" font-weight="700" text-anchor="end">y = 1</text><path d="M-10,98 L-7.33,98 L-4.67,98 L-2,98 L0.67,98 L3.33,98 L6,98 L8.67,97.99 L11.33,97.99 L14,97.99 L16.67,97.99 L19.33,97.99 L22,97.98 L24.67,97.98 L27.33,97.97 L30,97.96 L32.67,97.95 L35.33,97.94 L38,97.92 L40.67,97.89 L43.33,97.87 L46,97.83 L48.67,97.78 L51.33,97.72 L54,97.64 L56.67,97.55 L59.33,97.42 L62,97.26 L64.67,97.05 L67.33,96.79 L70,96.46 L72.67,96.03 L75.33,95.49 L78,94.8 L80.67,93.91 L83.33,92.78 L86,91.33 L88.67,89.49 L91.33,87.14 L94,84.13 L96.67,80.3 L99.33,75.4 L102,69.16 L104.67,61.18 L107.33,51 L110,38 L112.67,21.41" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="38" r="3.5" fill="#2563eb"/><text x="116" y="30" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, 6)</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Die parabool wat getoon word, het ʼn draaipunt by (0, −4) en gaan deur die punt (3, 5). Vind die vergelyking van die parabool in die vorm y = ax² + q.', checkMode: 'auto', options: ['y = 9x² − 4', 'y = x² + 4', 'y = −x² − 4', 'y = x² − 4'], correctIndex: 3, explanation: 'Die draaipunt (0, −4) gee q = −4. Vervang (3, 5): 5 = a(3)² − 4, dus 9 = 9a, wat a = 1 gee. Vergelyking: y = x² − 4.', diagramSvg: '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="2" x2="20" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="2" x2="50" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="80" y1="2" x2="80" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="2" x2="110" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="2" x2="140" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="170" y1="2" x2="170" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="2" x2="200" y2="218" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="200" x2="218" y2="200" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="170" x2="218" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="140" x2="218" y2="140" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="80" x2="218" y2="80" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="50" x2="218" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="20" x2="218" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="2" y1="110" x2="218" y2="110" stroke="#374151" stroke-width="1.5"/><line x1="110" y1="2" x2="110" y2="218" stroke="#374151" stroke-width="1.5"/><text x="210" y="104" font-size="11" fill="#374151">x</text><text x="116" y="12" font-size="11" fill="#374151">y</text><path d="M74.25,22.19 L77,41.1 L79.75,58.49 L82.5,74.38 L85.25,88.74 L88,101.6 L90.75,112.94 L93.5,122.78 L96.25,131.09 L99,137.9 L101.75,143.19 L104.5,146.98 L107.25,149.24 L110,150 L112.75,149.24 L115.5,146.98 L118.25,143.19 L121,137.9 L123.75,131.09 L126.5,122.78 L129.25,112.94 L132,101.6 L134.75,88.74 L137.5,74.38 L140.25,58.49 L143,41.1 L145.75,22.19" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="150" r="3.5" fill="#2563eb"/><text x="116" y="166" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(0, -4)</text><circle cx="140" cy="60" r="3.5" fill="#2563eb"/><text x="147" y="52" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">(3, 5)</text></svg>' },

        // Blok 6 — definisieversameling/waardeversameling en gemengde moeilike toepassing (Hard)
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = 5x² + 2.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ. Waardeversameling: y ≥ 2', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ≤ 2', 'Definisieversameling: x ≥ 2. Waardeversameling: y ∈ ℝ', 'Definisieversameling: x ∈ ℝ, x ≠ 0. Waardeversameling: y ≥ 2'], correctIndex: 0, explanation: 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ≥ 2, aangesien die parabool opwaarts open (a = 5 > 0) met draaipunt (0, 2), dus is die minimum y-waarde 2.' },
        { difficulty: 'Hard', question: 'Gee die definisieversameling en waardeversameling van y = 6/x + 1.', checkMode: 'auto', options: ['Definisieversameling: x ∈ ℝ, x ≠ 6. Waardeversameling: y ∈ ℝ, y ≠ 1', 'Definisieversameling: x ∈ ℝ, x ≠ 0. Waardeversameling: y ∈ ℝ, y ≠ 1', 'Definisieversameling: x ∈ ℝ, x ≠ 1. Waardeversameling: y ∈ ℝ, y ≠ 0', 'Definisieversameling: x ∈ ℝ. Waardeversameling: y ∈ ℝ, y ≠ 1'], correctIndex: 1, explanation: 'Definisieversameling: x ∈ ℝ, x ≠ 0 (onbepaald waar die noemer nul is). Waardeversameling: y ∈ ℝ, y ≠ 1 (y kan nooit gelyk wees aan die horisontale asimptootwaarde nie).' },
        { difficulty: 'Hard', question: 'ʼn Hiperbool y = a/x + q het asimptote x = 0 en y = 4, en gaan deur die punt (−1, 1). Vind a en q, en gee die vergelyking.', checkMode: 'auto', options: ['y = 1/x + 4', 'y = 3/x − 4', 'y = 3/x + 4', 'y = −3/x + 4'], correctIndex: 2, explanation: 'q = 4 (vanaf die horisontale asimptoot). Vervang (−1, 1): 1 = a/(−1) + 4, dus 1 = −a + 4, wat a = 3 gee. Vergelyking: y = 3/x + 4.' },
        { difficulty: 'Hard', question: 'ʼn Radioaktiewe stof verval volgens M = 800(0,92)ᵗ, waar t die tyd in jare is. Vind M na 6 jaar, afgerond na die naaste heel getal.', checkMode: 'auto', options: ['520', '450', '600', '485'], correctIndex: 3, explanation: 'M = 800(0,92)⁶ = 800 × 0,606355... ≈ 485,08, wat afrond na 485.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het parabole, hiperbole en eksponensiële funksies bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor asimptote of draaipunte weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van vergelykings vanaf sleutelkenmerke weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
