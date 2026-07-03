import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic equations roles) ───────────────────────────────
// unknown variable  → blue   (#2563eb)
// known values      → green  (#16a34a)
// equation          → orange (#ea580c)
// first step        → blue   (#2563eb)
// second step       → green  (#16a34a)
// check             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraïese Vergelykings',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WRITING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'writing-equations',
      title: 'Vergelykings Skryf',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Vergelyking</strong> is ʼn wiskundige stelling wat wys dat twee uitdrukkings gelyk is, verbind deur ʼn gelykaanteken. Om ʼn vergelyking van ʼn woordprobleem te skryf, identifiseer ons die onbekende, ken dit ʼn veranderlike toe, en skakel die woorde om in wiskundige simbole.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onbekende veranderlike')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bekende waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Veranderlike</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Letter wat ʼn onbekende waarde voorstel — die hoeveelheid wat ons probeer vind.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Konstante</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Vaste getal waarvan die waarde nie verander nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Uitdrukking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kombinasie van veranderlikes en konstantes met bewerkings — geen gelykaanteken nie.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee uitdrukkings verbind deur ʼn gelykaanteken, wat wys dat hulle dieselfde waarde het.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps for writing equations ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn vergelyking te skryf</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Vind die onbekende hoeveelheid. Dit word jou ${bl('veranderlike')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Ken toe')} — Laat ʼn letter die onbekende voorstel. Skryf ʼn duidelike "laat"-stelling (bv. "Laat ${bl('n')} = die onbekende getal").</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skakel om')} — Skakel die woorde om in ʼn ${or('vergelyking')} met wiskundige simbole.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Woordwenke omskakel</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>"vermenigvuldig met"</strong> → × &nbsp;|&nbsp; <strong>"verhoog met / meer as"</strong> → + &nbsp;|&nbsp; <strong>"verminder met / minder as"</strong> → − &nbsp;|&nbsp; <strong>"is gelyk aan / gee / is"</strong> → =</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf ʼn vergelyking vir: ʼn getal vermenigvuldig met 5 en dan verhoog met 8 is gelyk aan 33.',
          answer: `${or(`5${bl('n')} + ${gr('8')} = ${gr('33')}` )}`,
          steps: [
            `Laat die getal ${bl('n')} wees (die onbekende veranderlike).`,
            `"ʼn Getal vermenigvuldig met ${gr('5')}" → ${gr('5')} × ${bl('n')} = ${or(`5${bl('n')}`)}`,
            `"Dan verhoog met ${gr('8')}" → ${or(`5${bl('n')}`)} + ${gr('8')}`,
            `"Is gelyk aan ${gr('33')}" → skryf die gelykaanteken en ${gr('33')}: ${or(`5${bl('n')} + ${gr('8')} = ${gr('33')}` )}`,
          ],
        },
        {
          question: 'Sipho het 4 meer albasters as Lerato. Saam het hulle 36. Skryf ʼn vergelyking vir Lerato se albasters.',
          answer: `${or(`${bl('m')} + (${bl('m')} + ${gr('4')}) = ${gr('36')}` )}`,
          steps: [
            `Laat Lerato ${bl('m')} albasters hê (die onbekende veranderlike).`,
            `Sipho het ${gr('4')} meer as Lerato → Sipho het ${bl('m')} + ${gr('4')} albasters.`,
            `Saam het hulle ${gr('36')} → tel albei hoeveelhede bymekaar: ${bl('m')} + (${bl('m')} + ${gr('4')}) = ${gr('36')}`,
            `Dit vereenvoudig tot ${or(`2${bl('m')} + ${gr('4')} = ${gr('36')}` )} (ons sal dit later oplos).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — write a simple addition equation ───────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf ʼn vergelyking vir: ʼn getal verhoog met 9 is gelyk aan 27.',
          answer: 'Laat die getal n wees.\nn + 9 = 27',
          checkMode: 'self',
        },

        // ── Q2 Medium — two-person equation with context ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho het 5 meer lekkers as Thabo. Saam het hulle 41 lekkers. Skryf ʼn vergelyking met Thabo se lekkers as die veranderlike.',
          answer: 'Laat Thabo s lekkers hê.\nSipho het s + 5 lekkers.\nSaam: s + (s + 5) = 41',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om onbekendes in woordprobleme te identifiseer en sinne stap vir stap om te skakel in algebraïese vergelykings" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn woordprobleem in dele verdeel wys met die onbekende veranderlike uitgelig in blou, bekende waardes in groen, en die finale vergelyking in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING ONE-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-one-step-equations',
      title: 'Een-stap Vergelykings Oplos',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn een-stap vergelyking op te los, gebruik ons die <strong>inverse bewerking</strong> om die veranderlike te isoleer. Wat ons ook al aan een kant van die vergelyking doen, moet ons aan die ander kant doen, sodat die vergelyking gebalanseer bly.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse bewerking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `</div>` +

        // ── Inverse operation pairs ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Inverse bewerkingspare</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:1em;">+ en −</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As die vergelyking ʼn getal optel, ${or('trek')} dit van albei kante af.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:1em;">× en ÷</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As die vergelyking ʼn veranderlike vermenigvuldig, ${or('deel')} albei kante deur daardie getal.</p>` +
        `</div>` +

        `</div>` +

        // ── Balance principle ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die balansbeginsel</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer')} — Bepaal watter bewerking op die ${bl('veranderlike')} toegepas is (bv. optelling, vermenigvuldiging).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Pas die inverse toe')} — Voer die teenoorgestelde bewerking op <strong>albei kante</strong> van die vergelyking uit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Skryf die oplossing')} — Die ${bl('veranderlike')} staan nou alleen. Skryf ${bl('veranderlike')} = ${gr('waarde')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dink aan ʼn balansskaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Vergelyking is soos ʼn gebalanseerde skaal. Wat jy ook al aan een kant doen, jy <strong>moet</strong> aan die ander kant doen — anders kantel die skaal en is die vergelyking nie meer waar nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: x + 14 = 29.',
          answer: `${bl('x')} = ${gr('15')}`,
          steps: [
            `Vergelyking: ${bl('x')} + ${gr('14')} = ${gr('29')}`,
            `${or('Inverse bewerking:')} ${gr('14')} is by ${bl('x')} getel, dus ${or('trek 14')} van albei kante af.`,
            `${bl('x')} = ${gr('29')} − ${gr('14')} = ${gr('15')}`,
            `<strong>Oplossing:</strong> ${bl('x')} = ${gr('15')} ✓`,
          ],
        },
        {
          question: 'Los op: 7y = 63.',
          answer: `${bl('y')} = ${gr('9')}`,
          steps: [
            `Vergelyking: ${gr('7')}${bl('y')} = ${gr('63')}`,
            `${or('Inverse bewerking:')} ${bl('y')} is met ${gr('7')} vermenigvuldig, dus ${or('deel albei kante deur 7')}.`,
            `${bl('y')} = ${gr('63')} ÷ ${gr('7')} = ${gr('9')}`,
            `<strong>Oplossing:</strong> ${bl('y')} = ${gr('9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Easy — solve an addition equation ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Los op: x + 18 = 35',
          answer: '17',
          checkMode: 'auto',
          correctAnswer: '17',
          explanation: 'x + 18 = 35\nTrek 18 van albei kante af (inverse van optelling):\nx = 35 − 18 = 17\nKontroleer: 17 + 18 = 35 ✓',
        },

        // ── Q4 Easy — solve a multiplication equation ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Los op: 9y = 72',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: '9y = 72\nDeel albei kante deur 9 (inverse van vermenigvuldiging):\ny = 72 ÷ 9 = 8\nKontroleer: 9 × 8 = 72 ✓',
        },

        // ── Q5 Medium — solve a subtraction equation ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Los op: p − 23 = 46',
          answer: '69',
          checkMode: 'auto',
          correctAnswer: '69',
          explanation: 'p − 23 = 46\nTel 23 by albei kante (inverse van aftrekking):\np = 46 + 23 = 69\nKontroleer: 69 − 23 = 46 ✓',
        },

        // ── Q6 Hard — identify and explain a common error ────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die oplossing van 5x = 45 is x = 225 omdat hy vermenigvuldig het in plaas van deel. Is hy reg? Verduidelik.',
          answer: 'Nee — om x te isoleer deel ons albei kante deur 5, wat x = 9 gee, nie 225 nie.\nKontroleer: 5 × 9 = 45 ✓\nSipho het die fout gemaak om 45 × 5 te vermenigvuldig in plaas van te deel.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om een-stap vergelykings op te los met inverse bewerkings terwyl albei kante gebalanseer bly" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Balansskaal-diagram wat x + 14 = 29 wys met die inverse bewerking wat 14 van albei kante aftrek om x te isoleer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING TWO-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-two-step-equations',
      title: 'Twee-stap Vergelykings Oplos',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Twee-stap vergelyking benodig <strong>twee inverse bewerkings</strong>. Ons maak eers optelling of aftrekking ongedaan, en dan maak ons vermenigvuldiging of deling ongedaan. Kontroleer die oplossing altyd deur dit terug te vervang in die oorspronklike vergelyking.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste stap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tweede stap')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee-stap strategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Eerste stap')} — Maak die optelling of aftrekking ongedaan. Tel of trek die konstante van albei kante af.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Tweede stap')} — Maak die vermenigvuldiging of deling ongedaan. Deel of vermenigvuldig albei kante met die koëffisiënt.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Kontroleer')} — Vervang jou antwoord terug in die oorspronklike vergelyking. Albei kante moet gelyk wees.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Kontroleer jou antwoord altyd</p>` +
        `<p style="margin:0;color:#991b1b;">Deur jou oplossing terug te vervang in die oorspronklike vergelyking, vang jy rekenkundige foute raak. As die linkerkant nie gelyk is aan die regterkant nie, werk die probleem stap vir stap weer deur.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Los op: 4x + 7 = 31.',
          answer: `x = ${gr('6')}`,
          steps: [
            `Vergelyking: 4x + 7 = 31`,
            `${bl('Eerste stap:')} Trek 7 van albei kante af: 4x = 31 − 7 = 24`,
            `${gr('Tweede stap:')} Deel albei kante deur 4: x = 24 ÷ 4 = 6`,
            `${re('Kontroleer:')} 4(6) + 7 = 24 + 7 = 31 ✓`,
          ],
        },
        {
          question: 'Los op: 3y − 5 = 22.',
          answer: `y = ${gr('9')}`,
          steps: [
            `Vergelyking: 3y − 5 = 22`,
            `${bl('Eerste stap:')} Tel 5 by albei kante: 3y = 22 + 5 = 27`,
            `${gr('Tweede stap:')} Deel albei kante deur 3: y = 27 ÷ 3 = 9`,
            `${re('Kontroleer:')} 3(9) − 5 = 27 − 5 = 22 ✓`,
          ],
        },
        {
          question: 'Amahle dink aan ʼn getal, vermenigvuldig dit met 6 en trek 9 af om 33 te kry. Vind die getal.',
          answer: `n = ${gr('7')}`,
          steps: [
            `Laat die getal n wees. Skryf die vergelyking: 6n − 9 = 33`,
            `${bl('Eerste stap:')} Tel 9 by albei kante: 6n = 33 + 9 = 42`,
            `${gr('Tweede stap:')} Deel albei kante deur 6: n = 42 ÷ 6 = 7`,
            `${re('Kontroleer:')} 6(7) − 9 = 42 − 9 = 33 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — solve a two-step addition equation ───────────────────
        {
          difficulty: 'Medium',
          question: 'Los op: 3x + 8 = 29',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: '3x + 8 = 29\nEerste stap: trek 8 van albei kante af → 3x = 21\nTweede stap: deel albei kante deur 3 → x = 7\nKontroleer: 3(7) + 8 = 21 + 8 = 29 ✓',
        },

        // ── Q8 Medium — solve a two-step subtraction equation ────────────────
        {
          difficulty: 'Medium',
          question: 'Los op: 5y − 12 = 33',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: '5y − 12 = 33\nEerste stap: tel 12 by albei kante → 5y = 45\nTweede stap: deel albei kante deur 5 → y = 9\nKontroleer: 5(9) − 12 = 45 − 12 = 33 ✓',
        },

        // ── Q9 Hard — word problem with full working ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato dink aan ʼn getal, vermenigvuldig dit met 4 en tel 11 by om 47 te kry. Vind die getal.',
          answer: 'Vergelyking: 4n + 11 = 47\nTrek 11 af: 4n = 36\nDeel deur 4: n = 9\nKontroleer: 4(9) + 11 = 36 + 11 = 47 ✓',
          checkMode: 'self',
        },

        // ── Q10 Hard — money word problem ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo het geld. Nadat hy R85 spandeer het, het hy R240 oor. Hoeveel het hy aan die begin gehad?',
          answer: 'R325',
          checkMode: 'auto',
          correctAnswer: 'R325',
          correctAnswers: ['R325', '325'],
          explanation: 'Laat m = Thabo se beginbedrag.\nm − 85 = 240\nTel 85 by albei kante:\nm = 240 + 85 = 325\nThabo het met R325 begin ✓',
        },

        // ── Q11 Hard — find the number (two-step) ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Getal vermenigvuldig met 7 en dan verminder met 15 is gelyk aan 41. Vind die getal.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Laat n = die getal.\n7n − 15 = 41\nEerste stap: tel 15 by albei kante → 7n = 56\nTweede stap: deel albei kante deur 7 → n = 8\nKontroleer: 7(8) − 15 = 56 − 15 = 41 ✓',
        },

        // ── Q12 Hard — sharing stickers between two people ───────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle en haar broer het saam 64 plakkers. Amahle het 3 keer soveel as haar broer.\n\na) Hoeveel plakkers het haar broer?\nb) Hoeveel plakkers het Amahle?',
          answer: 'Laat broer x plakkers hê. Amahle het 3x plakkers.\nx + 3x = 64\n4x = 64\nx = 16\na) Broer het 16 plakkers.\nb) Amahle het 3 × 16 = 48 plakkers.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om twee-stap vergelykings op te los deur eers optelling of aftrekking ongedaan te maak, dan vermenigvuldiging of deling, met ʼn kontrole deur substitusie" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stap-vir-stap diagram wat 4x + 7 = 31 oplos, met eerste stap in blou wat 7 aftrek, dan tweede stap in groen wat deur 4 deel, en kontrole in rooi" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het algebraïese vergelykings baasgeraak.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
