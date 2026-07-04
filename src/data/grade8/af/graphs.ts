import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (graph roles) ────────────────────────────────────────────
// increasing / y-axis   → green  (#16a34a)
// decreasing / drops    → red    (#dc2626)
// maximum / minimum /
//   plotted points      → orange (#ea580c)
// x-axis / constant /
//   flat sections       → blue   (#2563eb)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Grafieke',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INTERPRETING GLOBAL GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-global-graphs',
      title: 'Globale Grafieke Interpreteer',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons <strong>ontleed en interpreteer globale grafieke</strong> van probleemsituasies, met die fokus op of tendense <strong>lineêr of nie-lineêr</strong> is, <strong>konstant, toenemend of afnemend</strong> is, of daar ʼn <strong>maksimum of minimum</strong> punt is, en of die data <strong>diskreet of kontinu</strong> is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toenemend')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('afnemend')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('maksimum / minimum')}</span>` +
        `</div>` +

        // ── Key features ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe om te identifiseer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Toenemend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grafiek styg van links na regs — die hoeveelheid word groter.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Afnemend</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grafiek daal van links na regs — die hoeveelheid word kleiner.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Konstant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grafiek is plat (horisontaal) — die hoeveelheid bly dieselfde.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Maksimum / Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die hoogste of laagste punt op die grafiek — waar die grafiek van rigting verander.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Lineêr teenoor Nie-lineêr</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn <strong>Lineêre</strong> grafiek is ʼn reguit lyn. ʼn <strong>Nie-lineêre</strong> grafiek is geboë.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Diskreet teenoor Kontinu</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Diskrete</strong> data het afsonderlike waardes (bv. mense). <strong>Kontinue</strong> data vloei sonder gapings (bv. temperatuur).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">ʼn Globale grafiek lees</p>` +
        `<p style="margin:0;color:#166534;">Lees die grafiek van links na regs. Beskryf elke deel apart met die terme hierbo — ${gr('toenemend')}, ${re('afnemend')}, of konstant. Merk enige ${or('maksimum')}- of ${or('minimum')}-punte. Stel vas of die grafiek lineêr of nie-lineêr is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "ʼn Grafiek wys ʼn motor se spoed oor tyd — dit styg gestadig en bly dan plat. Beskryf die tendens.",
          answer: `Die grafiek is ${gr('toenemend')} (lineêr) in die eerste gedeelte, en dan konstant in die tweede gedeelte.`,
          steps: [
            `Die ${gr('stygende')} gedeelte van die grafiek wys die spoed wat ${gr('toeneem')} — die motor versnel teen ʼn konstante koers. Hierdie gedeelte is <strong>lineêr</strong> (ʼn reguit lyn wat opwaarts loop).`,
            `Die plat gedeelte wys <strong>konstante spoed</strong> — die motor versnel of vertraag nie meer nie. Die grafiek bly horisontaal.`,
            `Sien die diagram hieronder wat hierdie grafiek wys.`,
          ],
        },
        {
          question: "Sipho se hoogte-oor-tyd-grafiek vir ʼn bal wat in die lug opgegooi word, styg en daal dan, en bereik ʼn hoogtepunt. Beskryf hierdie tendens.",
          answer: `Dit is ʼn nie-lineêre grafiek met ʼn ${or('maksimumpunt')} by die hoogtepunt, waar die bal vlugtig stilhou voordat dit val.`,
          steps: [
            `Die grafiek ${gr('neem')} eers ${gr('toe')} — die bal styg. Hierdie gedeelte buig opwaarts, dus is die grafiek <strong>nie-lineêr</strong>.`,
            `Bo-aan die kromme is daar ʼn ${or('maksimumpunt')} — die hoogste punt wat die bal bereik, waar dit vir ʼn oomblik stilhou voordat dit van rigting verander.`,
            `Na die ${or('maksimum')}, ${re('neem')} die grafiek ${re('af')} — die bal val terug.`,
            `Sien die diagram hieronder wat hierdie kromme illustreer.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is ʼn grafiek wat gestadig styg en dan plat bly, deurgaans toenemend, afnemend of konstant?',
          answer: 'Dit is toenemend in die eerste deel, en dan konstant in die tweede deel.',
          checkMode: 'self',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Grafiek vir ʼn bal wat opwaarts gegooi word, wys ʼn hoogtepunt. Wat stel hierdie hoogtepunt voor?',
          answer: 'maksimum hoogte',
          checkMode: 'auto',
          correctAnswer: 'maksimum hoogte',
          explanation: 'Die hoogtepunt van die grafiek is die hoogste punt wat die bal bereik. Dit staan bekend as die maksimumpunt — waar die grafiek ophou toeneem en begin afneem.',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ʼn grafiek wat temperatuur oor ʼn dag wys met ʼn hoogtepunt om die middag, het slegs een maksimumpunt. Is dit altyd waar vir werklike temperatuurgrafieke? Verduidelik.',
          answer: 'Nie noodwendig nie — werklike temperatuur kan wissel met verskeie plaaslike hoogtepunte, maar ʼn eenvoudige geïdealiseerde grafiek mag net een duidelike maksimum wys.',
          checkMode: 'self',
        },

        // ── Q9 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: "Is ʼn grafiek van ʼn persoon se ouderdom oor tyd toenemend, afnemend of konstant?",
          answer: 'toenemend',
          checkMode: 'auto',
          correctAnswer: 'toenemend',
          explanation: "ʼn Persoon se ouderdom neem gestadig toe oor tyd — dit neem nooit af of bly dieselfde nie. Die grafiek sou ʼn reguit lyn wees wat van links na regs styg (lineêr en toenemend).",
        },

        // ── Q10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Watertenk loop teen ʼn konstante koers leeg. Beskryf die vorm van hierdie grafiek.',
          answer: 'ʼn reguit lyn wat teen ʼn konstante koers afneem',
          checkMode: 'auto',
          correctAnswer: 'ʼn reguit lyn wat teen ʼn konstante koers afneem',
          explanation: 'Aangesien die tenk teen ʼn konstante koers leegloop, neem die volume elke minuut met dieselfde hoeveelheid af. Dit lewer ʼn reguit lyn (lineêr) wat afwaarts loop — ʼn konstante afname.',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om globale grafieke te ontleed en te interpreteer — hoe om toenemende, afnemende, konstante gedeeltes, en maksimum- en minimumpunte te identifiseer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: twee voorbeeld globale grafieke — een wat spoed teenoor tyd wys met ʼn stygende lyn wat dan plat word; een wat hoogte teenoor tyd wys vir ʼn balgooi, wat styg tot ʼn hoogtepunt en dan val, met die maksimumpunt gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PLOTTING POINTS ON THE CARTESIAN PLANE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'plotting-points-cartesian-plane',
      title: 'Punte op die Cartesiese Vlak Stip',
      icon: '📍',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik <strong>tabelle van geordende pare</strong> om punte te stip en grafieke op die <strong>Cartesiese vlak</strong> te teken. Die ${bl('x-as')} is horisontaal en die ${gr('y-as')} is vertikaal. Elke punt word gestip as (x, y) — beweeg eers regs langs die ${bl('x-as')}, en dan op of af langs die ${gr('y-as')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-as')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-as')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gestipte punte')}</span>` +
        `</div>` +

        // ── How to plot ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn geordende paar (x, y) te stip</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Begin by die oorsprong (0, 0)')} — die punt waar die x-as en y-as kruis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Beweeg <strong>${bl('x eenhede')} langs die x-as</strong> — regs as x positief is, links as x negatief is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Beweeg <strong>${gr('y eenhede')} langs die y-as</strong> — op as y positief is, af as y negatief is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Merk die ${or('punt')} met ʼn kolletjie en dui dit met sy koördinate aan.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: x voor y</p>` +
        `<p style="margin:0;color:#1e3a8a;">Gaan altyd ${bl('horisontaal eers')} (x-as), dan ${gr('vertikaal')} (y-as). Dink daaraan as: "loop eers deur die gang, klim dan die trap." Die geordende paar word altyd geskryf as (${bl('x')}, ${gr('y')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Stip die punte (1, 2), (2, 4), (3, 6) uit die tabel vir y = 2x.',
          answer: `Die ${or('punte')} (1, 2), (2, 4) en (3, 6) lê op ʼn reguit ${gr('lyn')} deur die oorsprong, wat direkte eweredigheid wys.`,
          steps: [
            `Vir (${bl('1')}, ${gr('2')}): Begin by die oorsprong. Beweeg ${bl('1 eenheid regs')} langs die x-as, dan ${gr('2 eenhede op')} langs die y-as. Merk die ${or('punt')}.`,
            `Vir (${bl('2')}, ${gr('4')}): Begin by die oorsprong. Beweeg ${bl('2 eenhede regs')}, dan ${gr('4 eenhede op')}. Merk die ${or('punt')}.`,
            `Vir (${bl('3')}, ${gr('6')}): Begin by die oorsprong. Beweeg ${bl('3 eenhede regs')}, dan ${gr('6 eenhede op')}. Merk die ${or('punt')}.`,
            `Verbind die drie ${or('gestipte punte')} — hulle vorm ʼn reguit ${gr('lyn')} deur die oorsprong, wat bevestig dat y = 2x ʼn lineêre funksie is.`,
            `Sien die diagram hieronder wat hierdie gestipte punte as ʼn reguit lyn wys.`,
          ],
        },
        {
          question: 'Lerato stip (−1, 3), (0, 1), (1, −1) vir y = −2x + 1. Beskryf die rigting van die lyn.',
          answer: `Namate ${bl('x')} toeneem, ${re('neem')} ${gr('y')} ${re('af')} — dit wys ʼn ${re('afwaarts hellende')} lyn.`,
          steps: [
            `Stip (${bl('−1')}, ${gr('3')}): Beweeg ${bl('1 eenheid links')}, dan ${gr('3 eenhede op')}.`,
            `Stip (${bl('0')}, ${gr('1')}): Bly op die y-as, beweeg ${gr('1 eenheid op')} — dit is die y-afsny.`,
            `Stip (${bl('1')}, ${re('−1')}): Beweeg ${bl('1 eenheid regs')}, dan ${re('1 eenheid af')} (y is negatief).`,
            `Namate ${bl('x')} van links na regs toeneem, ${re('neem')} ${gr('y')} ${re('af')} — die lyn hel ${re('afwaarts')}. Dit bevestig dat y = −2x + 1 ʼn negatiewe gradiënt het.`,
            `Sien die diagram hieronder vir die gestipte punte.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Stip die punt (3, 5) op ʼn Cartesiese vlak. Beskryf die stappe.',
          answer: 'Beweeg 3 eenhede regs langs die x-as, dan 5 eenhede op langs die y-as.',
          checkMode: 'self',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik y = 3x − 2, vind die geordende paar wanneer x = 2.',
          answer: '(2, 4)',
          checkMode: 'auto',
          correctAnswer: '(2,4)',
          explanation: 'Vervang x = 2 in die vergelyking: y = 3(2) − 2 = 6 − 2 = 4. Die geordende paar is (2, 4) ✓',
        },

        // ── Q6 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato stip (0, 4), (1, 2), (2, 0), (3, −2) en sê dit wys ʼn afnemende lyn. Is sy korrek? Verduidelik.',
          answer: 'Ja — namate x toeneem, neem y konsekwent af, wat ʼn afnemende (afwaarts hellende) lyn bevestig.',
          checkMode: 'self',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik y = −x + 5, genereer die geordende paar vir x = 3.',
          answer: '(3, 2)',
          checkMode: 'auto',
          correctAnswer: '(3,2)',
          explanation: 'Vervang x = 3 in die vergelyking: y = −3 + 5 = 2. Die geordende paar is (3, 2) ✓',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê alle grafieke wat deur die oorsprong (0, 0) gaan, stel direkte eweredigheid voor. Is dit oor die algemeen waar vir reguit-lyn-grafieke? Verduidelik.',
          answer: 'Ja, vir reguit lyne deur die oorsprong (y = mx) stel dit direkte eweredigheid voor aangesien y teen ʼn konstante koers relatief tot x toeneem.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om geordende pare op die Cartesiese vlak te stip en ʼn reguit lyn deur die gestipte punte te trek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: Cartesiese vlak wat punte (1,2),(2,4),(3,6) verbind deur ʼn lyn wys; ʼn tweede Cartesiese vlak wat punte (-1,3),(0,1),(1,-1) verbind deur ʼn afwaartse lyn wys" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DRAWING GLOBAL GRAPHS FROM DESCRIPTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-global-graphs',
      title: 'Globale Grafieke uit Beskrywings Teken',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">Ons <strong>teken globale grafieke</strong> vanaf gegewe beskrywings van ʼn probleemsituasie, en identifiseer sleuteleienskappe soos waar die grafiek ${gr('toeneem')}, ${re('afneem')}, ${bl('konstant')} bly, of ʼn ${or('maksimum')} of ${or('minimum')} bereik.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('stygende gedeeltes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('daling')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('plat gedeeltes')}</span>` +
        `</div>` +

        // ── Strategy ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie om vanaf ʼn beskrywing te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Lees noukeurig</strong> — identifiseer elke gebeurtenis of fase wat beskryf word. Elke fase word ʼn gedeelte van die grafiek.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Merk die asse</strong> — besluit wat op die x-as gaan (gewoonlik tyd) en wat op die y-as gaan (die hoeveelheid wat verander).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Teken elke gedeelte</strong> — ${gr('stygende')} lyn vir toenemend, ${re('dalende')} lyn vir afnemend, ${bl('plat')} lyn vir konstant. Verbind gedeeltes glad waar toepaslik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Merk sleutelpunte</strong> — dui enige ${or('maksimum')}-, ${or('minimum')}- of oorgangspunte op die grafiek aan.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Globale grafieke het nie presiese waardes nodig nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Globale grafiek wys die <strong>vorm en tendens</strong> van ʼn situasie — nie presiese numeriese waardes nie. Fokus daarop om die ${gr('rigting')}, ${bl('platheid')} en ${or('draaipunte')} korrek te kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Teken ʼn grafiek wat ʼn tenk wys wat gestadig vol loop, en dan vol bly sodra dit kapasiteit bereik.',
          answer: `Die grafiek ${gr('styg gestadig')} (lineêre toename), en word dan ${bl('plat')} by die maksimum kapasiteitsvlak.`,
          steps: [
            `Merk die asse: x-as = tyd, y-as = volume water in die tenk.`,
            `Fase 1 — Volmaak: Die tenk word teen ʼn konstante koers vol, so teken ʼn ${gr('reguit lyn wat styg')} van links na regs (lineêre toename).`,
            `Fase 2 — Vol: Sodra die tenk kapasiteit bereik, hou die volume op verander. Teken ʼn ${bl('horisontale plat lyn')} by die maksimum vlak.`,
            `Die oorgang tussen die ${gr('stygende')} gedeelte en die ${bl('plat')} gedeelte merk die ${or('maksimum')}-punt — die tenk is vol.`,
            `Sien die diagram hieronder vir hierdie vorm.`,
          ],
        },
        {
          question: 'Thabo beskryf hoe sy spaargeld gestadig groei en dan skielik daal wanneer hy iets koop. Skets hierdie grafiekvorm.',
          answer: `ʼn Gestadige ${gr('opwaartse lyn')}, gevolg deur ʼn skielike ${re('vertikale daling')}, en dan ${gr('weer stygend')}.`,
          steps: [
            `Merk die asse: x-as = tyd, y-as = hoeveelheid spaargeld (in rand).`,
            `Fase 1 — Spaar: Thabo se spaargeld ${gr('neem gestadig toe')} — teken ʼn ${gr('reguit lyn wat styg')} van links na regs.`,
            `Fase 2 — Aankoop: Wanneer Thabo iets koop, ${re('daal')} sy spaargeld ${re('skielik')} — teken ʼn ${re('skerp vertikale daling')} in die grafiek.`,
            `Fase 3 — Weer spaar: Na die aankoop, ${gr('styg')} die spaargeld ${gr('weer')} — teken nog ʼn ${gr('stygende')} lyn wat opwaarts voortgaan.`,
            `Sien die diagram hieronder wat hierdie patroon illustreer.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Beskryf die grafiek van ʼn kers wat teen ʼn konstante koers oor tyd afbrand.',
          answer: 'ʼn reguit lyn wat teen ʼn konstante koers afneem',
          checkMode: 'auto',
          correctAnswer: 'ʼn reguit lyn wat teen ʼn konstante koers afneem',
          explanation: 'Die kers se hoogte neem elke uur met dieselfde hoeveelheid af — dit is ʼn konstante koers van afname. Die grafiek is ʼn reguit lyn (lineêr) wat van links na regs afwaarts hel.',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo skets ʼn grafiek van sy spoed tydens ʼn wedloop — versnel, bly konstant, en vertraag dan aan die einde. Beskryf die drie gedeeltes.',
          answer: 'Die grafiek neem toe (versnel), word dan plat (konstante spoed), en neem dan af (vertraag).',
          checkMode: 'self',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê ʼn grafiek wat ʼn selfoonbattery wys wat laai en dan skielik uitgetrek word, sal ʼn skielike daling tot nul wys. Is dit akkuraat? Verduidelik.',
          answer: "Nie heeltemal nie — deur die battery uit te trek, stop die laaiproses (die grafiek sou plat word, nie daal nie), aangesien die batteryvlak nie verdwyn nie; dit sal slegs geleidelik afneem namate dit gebruik word.",
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Beskryf ʼn werklike lewensituasie wat ʼn grafiek met ʼn duidelike minimumpunt sou lewer.',
          answer: "Voorbeeld: ʼn persoon se streservlak tydens ʼn rustige vakansie, wat halfpad deur die reis na sy laagste punt daal voordat dit weer styg namate hulle voorberei om huis toe te gaan.",
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê ʼn diskrete grafiek (afsonderlike punte) word gebruik vir situasies soos die aantal mense in ʼn kamer oor presiese ure, terwyl ʼn kontinue grafiek vir dinge soos temperatuur gebruik word. Is sy korrek? Verduidelik.',
          answer: 'Ja — diskrete data behels afsonderlike telbare waardes (soos hele mense op spesifieke tye), terwyl kontinue data enige waarde binne ʼn reeks kan aanneem (soos temperatuur wat voortdurend verander).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn globale grafiek uit ʼn werklike-lewe beskrywing te teken, deur stygende, dalende en plat gedeeltes te identifiseer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram nodig: twee eenvoudige gesketste grafieke — een wat ʼn tenk wys wat volmaak (stygende lyn wat dan plat word); een wat spaargeld wys wat styg, skielik daal, en dan weer styg" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het grafieke bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy is amper daar — gaan enige gapings weer deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings weer deur waar jy punte laat val het en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids, afdeling vir afdeling.' },
  ],
}
