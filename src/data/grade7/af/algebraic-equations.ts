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
        'Balansskaal-diagram wat x + 14 = 29 wys met die inverse bewerking wat 14 van albei kante aftrek om x te isoleer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 220" width="100%" style="max-width:320px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="120" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">x + 14 = 29</text>` +
        `<polygon points="110,70 130,70 120,50" fill="#0f1f3d"/>` +
        `<line x1="70" y1="50" x2="170" y2="50" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<line x1="70" y1="50" x2="70" y2="68" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="170" y1="50" x2="170" y2="68" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="50" y="68" width="40" height="16" fill="rgba(37,99,235,0.12)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="150" y="68" width="40" height="16" fill="rgba(22,163,74,0.12)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="70" y="79" text-anchor="middle" font-size="9"><tspan fill="#2563eb" font-weight="700">x</tspan><tspan fill="#16a34a" font-weight="700"> + 14</tspan></text>` +
        `<text x="170" y="79" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">29</text>` +
        `<line x1="120" y1="92" x2="120" y2="170" stroke="#ea580c" stroke-width="2"/>` +
        `<polygon points="120,176 114,166 126,166" fill="#ea580c"/>` +
        `<text x="150" y="134" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">trek 14 af</text>` +
        `<text x="150" y="146" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">van albei kante</text>` +
        `<polygon points="110,200 130,200 120,180" fill="#0f1f3d"/>` +
        `<line x1="70" y1="180" x2="170" y2="180" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<line x1="70" y1="180" x2="70" y2="198" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="170" y1="180" x2="170" y2="198" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="50" y="198" width="40" height="16" fill="rgba(37,99,235,0.12)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="150" y="198" width="40" height="16" fill="rgba(22,163,74,0.12)" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="70" y="209" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">x</text>` +
        `<text x="170" y="209" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">15</text>` +
        `</svg>`,
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
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Een-stap vergelykings: optelling/aftrekking (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Los op: x + 16 = 39', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'x + 16 = 39\nTrek 16 van albei kante af (inverse van optelling):\nx = 39 − 16 = 23\nKontroleer: 23 + 16 = 39 ✓' },
        { difficulty: 'Easy', question: 'Los op: y − 27 = 54', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'y − 27 = 54\nTel 27 by albei kante (inverse van aftrekking):\ny = 54 + 27 = 81\nKontroleer: 81 − 27 = 54 ✓' },
        { difficulty: 'Easy-Medium', question: 'Thabo het ʼn bedrag lugtyd. Hy koop nog R18 lugtyd en het nou R47 in totaal. Skryf ʼn vergelyking met m vir sy beginlugtyd, en los dit op.', answer: 'm + 18 = 47\nTrek 18 van albei kante af:\nm = 47 − 18 = 29\nThabo het met R29 begin.', checkMode: 'self' },

        // Blok 2 — Een-stap vergelykings: vermenigvuldiging/deling (Easy) — posisies 3-5
        { difficulty: 'Easy', question: 'Los op: 7x = 84', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '7x = 84\nDeel albei kante deur 7 (inverse van vermenigvuldiging):\nx = 84 ÷ 7 = 12\nKontroleer: 7 × 12 = 84 ✓' },
        { difficulty: 'Easy', question: 'Los op: n ÷ 9 = 13', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: 'n ÷ 9 = 13\nVermenigvuldig albei kante met 9 (inverse van deling):\nn = 13 × 9 = 117\nKontroleer: 117 ÷ 9 = 13 ✓' },
        { difficulty: 'Easy-Medium', question: 'Ses identiese notaboeke kos R138 in totaal. Skryf ʼn vergelyking vir die prys p van een notaboek, en los dit op.', answer: '6p = 138\nDeel albei kante deur 6:\np = 138 ÷ 6 = 23\nElke notaboek kos R23.', checkMode: 'self' },

        // Blok 3 — Twee-stap vergelykings (Medium) — posisies 6-9
        { difficulty: 'Medium', question: 'Los op: 5x + 9 = 54', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5x + 9 = 54\nStap 1: trek 9 van albei kante af → 5x = 45\nStap 2: deel albei kante deur 5 → x = 9\nKontroleer: 5(9) + 9 = 45 + 9 = 54 ✓' },
        { difficulty: 'Medium', question: 'Los op: 6y − 11 = 37', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '6y − 11 = 37\nStap 1: tel 11 by albei kante → 6y = 48\nStap 2: deel albei kante deur 6 → y = 8\nKontroleer: 6(8) − 11 = 48 − 11 = 37 ✓' },
        { difficulty: 'Medium', question: 'ʼn Student los 3x + 10 = 40 op deur eers albei kante deur 3 te deel, en kry x + 10 = 13,33, en trek dan 10 af om x = 3,33 te kry. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die fout is om die bewerkings in die verkeerde volgorde ongedaan te maak. Omdat 10 bygetel is nadat met 3 vermenigvuldig is, moet ons eers die optelling ongedaan maak: trek 10 van albei kante af om 3x = 30 te kry, en deel dan deur 3 om x = 10 te kry. Kontroleer: 3(10) + 10 = 30 + 10 = 40 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Getal word met 7 vermenigvuldig, en dan word 15 bygetel, wat ʼn antwoord van 64 gee. Vind die getal.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Laat n = die getal.\n7n + 15 = 64\nStap 1: trek 15 van albei kante af → 7n = 49\nStap 2: deel albei kante deur 7 → n = 7\nKontroleer: 7(7) + 15 = 49 + 15 = 64 ✓' },

        // Blok 4 — Vergelykings met hakies / gelyksoortige terme (Medium-Hard) — posisies 10-13
        { difficulty: 'Medium', question: 'Los op: 3(x + 4) = 27', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '3(x + 4) = 27\nVermenigvuldig die hakie uit: 3x + 12 = 27\nTrek 12 van albei kante af: 3x = 15\nDeel albei kante deur 3: x = 5\nKontroleer: 3(5 + 4) = 3(9) = 27 ✓' },
        { difficulty: 'Medium', question: 'Los op: 2x + 3x − 5 = 35', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '2x + 3x − 5 = 35\nVersamel eers gelyksoortige terme: 5x − 5 = 35\nTel 5 by albei kante: 5x = 40\nDeel albei kante deur 5: x = 8\nKontroleer: 2(8) + 3(8) − 5 = 16 + 24 − 5 = 35 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 4(y − 2) = 32', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '4(y − 2) = 32\nVermenigvuldig die hakie uit: 4y − 8 = 32\nTel 8 by albei kante: 4y = 40\nDeel albei kante deur 4: y = 10\nKontroleer: 4(10 − 2) = 4(8) = 32 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 5x − 2x + 9 = 30 op deur dadelik 3x = 30 te skryf, en los die "+ 9" uit. Verduidelik die fout en los die vergelyking korrek op.', answer: 'Die student het die x-terme korrek versamel (5x − 2x = 3x), maar het vergeet om die "+ 9" in die vergelyking te behou — dit moet steeds hanteer word voordat gedeel word. Korrekte metode: versamel gelyksoortige terme om 3x + 9 = 30 te kry, trek 9 van albei kante af om 3x = 21 te kry, en deel dan deur 3 om x = 7 te kry. Kontroleer: 5(7) − 2(7) + 9 = 35 − 14 + 9 = 30 ✓', checkMode: 'self' },

        // Blok 5 — Vergelykings uit woordprobleme vorm en oplos (Medium-Hard) — posisies 14-17
        { difficulty: 'Medium', question: 'Twee getalle tel op tot 58. Die groter getal is 6 meer as die kleiner getal. Vorm ʼn vergelyking met x vir die kleiner getal, en vind albei getalle.', answer: 'x + (x + 6) = 58\n2x + 6 = 58\n2x = 52\nx = 26\nDie kleiner getal is 26 en die groter getal is 26 + 6 = 32.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Die omtrek van ʼn reghoek is 38 cm. Die lengte is 9 cm meer as die breedte. As die breedte w is, vorm en los ʼn vergelyking op om die breedte en die lengte te vind.', answer: '2((w + 9) + w) = 38\n2(2w + 9) = 38\n4w + 18 = 38\n4w = 20\nw = 5\nDie breedte is 5 cm en die lengte is 5 + 9 = 14 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Drie opeenvolgende heelgetalle tel op tot 72. Laat die kleinste heelgetal n wees. Vorm ʼn vergelyking en vind al drie heelgetalle.', answer: 'n + (n + 1) + (n + 2) = 72\n3n + 3 = 72\n3n = 69\nn = 23\nDie drie opeenvolgende heelgetalle is 23, 24 en 25.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Toegang tot ʼn skermparty kos ʼn vaste R25, plus R5 vir elke rit, r. ʼn Leerder het R180 in totaal spandeer. Vorm ʼn vergelyking en vind hoeveel ritte die leerder gery het.', answer: '5r + 25 = 180', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', 'r = 31', '5r + 25 = 180, r = 31'], explanation: 'Laat r = die aantal ritte.\n5r + 25 = 180\nTrek 25 van albei kante af: 5r = 155\nDeel albei kante deur 5: r = 31\nDie leerder het 31 ritte gery.' },

        // Blok 6 — Kontroleer oplossings deur substitusie / foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Medium', question: 'Is x = 8 ʼn oplossing vir 4x − 7 = 25? Wys jou kontrole deur substitusie.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang x = 8 in 4x − 7 = 25.\n4(8) − 7 = 32 − 7 = 25 ✓\nAlbei kante is gelyk aan 25, dus is x = 8 ʼn oplossing.' },
        { difficulty: 'Hard', question: 'ʼn Student los 5(x − 3) = 25 op sonder om die hakie eers uit te vermenigvuldig — hulle skryf 5x − 3 = 25 en kry x = 5,6. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die student het vergeet om die 5 oor albei terme binne die hakie te versprei — die 3 moet ook met 5 vermenigvuldig word, en nie net as "− 3" gelaat word nie. Korrekte metode: vermenigvuldig die hakie uit om 5x − 15 = 25 te kry, tel 15 by albei kante om 5x = 40 te kry, en deel dan deur 5 om x = 8 te kry. Kontroleer: 5(8 − 3) = 5(5) = 25 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het een-stap, twee-stap, en hakievergelykings baasgeraak, plus die vorm van vergelykings uit woordprobleme.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor hakies of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en gelyksoortige terme weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Een-stap vergelykings: optelling/aftrekking (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Los op: p + 24 = 71', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'p + 24 = 71\nTrek 24 van albei kante af (inverse van optelling):\np = 71 − 24 = 47\nKontroleer: 47 + 24 = 71 ✓' },
        { difficulty: 'Easy', question: 'Los op: t − 35 = 19', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 't − 35 = 19\nTel 35 by albei kante (inverse van aftrekking):\nt = 19 + 35 = 54\nKontroleer: 54 − 35 = 19 ✓' },
        { difficulty: 'Easy-Medium', question: 'Lindiwe het ʼn bedrag spaargeld. Sy spandeer R55 en het R118 oor. Skryf ʼn vergelyking met s vir haar beginspaargeld, en los dit op.', answer: 's − 55 = 118\nTel 55 by albei kante:\ns = 118 + 55 = 173\nLindiwe het met R173 begin.', checkMode: 'self' },

        // Blok 2 — Een-stap vergelykings: vermenigvuldiging/deling (Easy) — posisies 3-5
        { difficulty: 'Easy', question: 'Los op: 12y = 156', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '12y = 156\nDeel albei kante deur 12 (inverse van vermenigvuldiging):\ny = 156 ÷ 12 = 13\nKontroleer: 12 × 13 = 156 ✓' },
        { difficulty: 'Easy', question: 'Los op: m ÷ 8 = 21', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'm ÷ 8 = 21\nVermenigvuldig albei kante met 8 (inverse van deling):\nm = 21 × 8 = 168\nKontroleer: 168 ÷ 8 = 21 ✓' },
        { difficulty: 'Easy-Medium', question: 'Nege identiese konsertkaartjies kos R504 in totaal. Skryf ʼn vergelyking vir die prys t van een kaartjie, en los dit op.', answer: '9t = 504\nDeel albei kante deur 9:\nt = 504 ÷ 9 = 56\nElke kaartjie kos R56.', checkMode: 'self' },

        // Blok 3 — Twee-stap vergelykings (Medium) — posisies 6-9
        { difficulty: 'Medium', question: 'Los op: 8x + 13 = 93', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '8x + 13 = 93\nStap 1: trek 13 van albei kante af → 8x = 80\nStap 2: deel albei kante deur 8 → x = 10\nKontroleer: 8(10) + 13 = 80 + 13 = 93 ✓' },
        { difficulty: 'Medium', question: 'Los op: 9y − 16 = 65', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '9y − 16 = 65\nStap 1: tel 16 by albei kante → 9y = 81\nStap 2: deel albei kante deur 9 → y = 9\nKontroleer: 9(9) − 16 = 81 − 16 = 65 ✓' },
        { difficulty: 'Medium', question: 'ʼn Student los 4x + 18 = 54 op deur eers albei kante deur 4 te deel, en kry x + 18 = 13,5, en trek dan 18 af om x = −4,5 te kry. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die fout is om die bewerkings in die verkeerde volgorde ongedaan te maak. Omdat 18 bygetel is nadat met 4 vermenigvuldig is, moet ons eers die optelling ongedaan maak: trek 18 van albei kante af om 4x = 36 te kry, en deel dan deur 4 om x = 9 te kry. Kontroleer: 4(9) + 18 = 36 + 18 = 54 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Getal word met 6 vermenigvuldig, en dan word 22 bygetel, wat ʼn antwoord van 100 gee. Vind die getal.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Laat n = die getal.\n6n + 22 = 100\nStap 1: trek 22 van albei kante af → 6n = 78\nStap 2: deel albei kante deur 6 → n = 13\nKontroleer: 6(13) + 22 = 78 + 22 = 100 ✓' },

        // Blok 4 — Vergelykings met hakies / gelyksoortige terme (Medium-Hard) — posisies 10-13
        { difficulty: 'Medium', question: 'Los op: 4(x + 3) = 44', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4(x + 3) = 44\nVermenigvuldig die hakie uit: 4x + 12 = 44\nTrek 12 van albei kante af: 4x = 32\nDeel albei kante deur 4: x = 8\nKontroleer: 4(8 + 3) = 4(11) = 44 ✓' },
        { difficulty: 'Medium', question: 'Los op: 3x + 4x − 6 = 50', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '3x + 4x − 6 = 50\nVersamel eers gelyksoortige terme: 7x − 6 = 50\nTel 6 by albei kante: 7x = 56\nDeel albei kante deur 7: x = 8\nKontroleer: 3(8) + 4(8) − 6 = 24 + 32 − 6 = 50 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 5(y − 3) = 45', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '5(y − 3) = 45\nVermenigvuldig die hakie uit: 5y − 15 = 45\nTel 15 by albei kante: 5y = 60\nDeel albei kante deur 5: y = 12\nKontroleer: 5(12 − 3) = 5(9) = 45 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 6x − 3x + 8 = 41 op deur dadelik 3x = 41 te skryf, en los die "+ 8" uit. Verduidelik die fout en los die vergelyking korrek op.', answer: 'Die student het die x-terme korrek versamel (6x − 3x = 3x), maar het vergeet om die "+ 8" in die vergelyking te behou — dit moet steeds hanteer word voordat gedeel word. Korrekte metode: versamel gelyksoortige terme om 3x + 8 = 41 te kry, trek 8 van albei kante af om 3x = 33 te kry, en deel dan deur 3 om x = 11 te kry. Kontroleer: 6(11) − 3(11) + 8 = 66 − 33 + 8 = 41 ✓', checkMode: 'self' },

        // Blok 5 — Vergelykings uit woordprobleme vorm en oplos (Medium-Hard) — posisies 14-17
        { difficulty: 'Medium', question: 'Twee getalle tel op tot 85. Die groter getal is 9 meer as die kleiner getal. Vorm ʼn vergelyking met x vir die kleiner getal, en vind albei getalle.', answer: 'x + (x + 9) = 85\n2x + 9 = 85\n2x = 76\nx = 38\nDie kleiner getal is 38 en die groter getal is 38 + 9 = 47.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Die omtrek van ʼn reghoek is 46 cm. Die lengte is 7 cm meer as die breedte. As die breedte w is, vorm en los ʼn vergelyking op om die breedte en die lengte te vind.', answer: '2((w + 7) + w) = 46\n2(2w + 7) = 46\n4w + 14 = 46\n4w = 32\nw = 8\nDie breedte is 8 cm en die lengte is 8 + 7 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Drie opeenvolgende heelgetalle tel op tot 108. Laat die kleinste heelgetal n wees. Vorm ʼn vergelyking en vind al drie heelgetalle.', answer: 'n + (n + 1) + (n + 2) = 108\n3n + 3 = 108\n3n = 105\nn = 35\nDie drie opeenvolgende heelgetalle is 35, 36 en 37.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Toegang tot ʼn pretpark kos ʼn vaste R30, plus R6 vir elke speletjie, r. ʼn Leerder het R138 in totaal spandeer. Vorm ʼn vergelyking en vind hoeveel speletjies die leerder gespeel het.', answer: '6r + 30 = 138', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'r = 18', '6r + 30 = 138, r = 18'], explanation: 'Laat r = die aantal speletjies.\n6r + 30 = 138\nTrek 30 van albei kante af: 6r = 108\nDeel albei kante deur 6: r = 18\nDie leerder het 18 speletjies gespeel.' },

        // Blok 6 — Kontroleer oplossings deur substitusie / foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Medium', question: 'Is y = 11 ʼn oplossing vir 6y − 15 = 51? Wys jou kontrole deur substitusie.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang y = 11 in 6y − 15 = 51.\n6(11) − 15 = 66 − 15 = 51 ✓\nAlbei kante is gelyk aan 51, dus is y = 11 ʼn oplossing.' },
        { difficulty: 'Hard', question: 'ʼn Student los 4(x − 5) = 24 op sonder om die hakie eers uit te vermenigvuldig — hulle skryf 4x − 5 = 24 en kry x = 7,25. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die student het vergeet om die 4 oor albei terme binne die hakie te versprei — die 5 moet ook met 4 vermenigvuldig word, en nie net as "− 5" gelaat word nie. Korrekte metode: vermenigvuldig die hakie uit om 4x − 20 = 24 te kry, tel 20 by albei kante om 4x = 44 te kry, en deel dan deur 4 om x = 11 te kry. Kontroleer: 4(11 − 5) = 4(6) = 24 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het een-stap, twee-stap, en hakievergelykings baasgeraak, plus die vorm van vergelykings uit woordprobleme.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor hakies of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en gelyksoortige terme weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Een-stap vergelykings: optelling/aftrekking (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Los op: a + 29 = 61', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'a + 29 = 61\nTrek 29 van albei kante af (inverse van optelling):\na = 61 − 29 = 32\nKontroleer: 32 + 29 = 61 ✓' },
        { difficulty: 'Easy', question: 'Los op: c − 42 = 38', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: 'c − 42 = 38\nTel 42 by albei kante (inverse van aftrekking):\nc = 38 + 42 = 80\nKontroleer: 80 − 42 = 38 ✓' },
        { difficulty: 'Easy-Medium', question: 'Kagiso het al ʼn aantal punte hierdie seisoen behaal. Hy behaal nog 15 punte in die laaste rondte en het nou 52 punte in totaal. Skryf ʼn vergelyking met k vir sy beginpunte, en los dit op.', answer: 'k + 15 = 52\nTrek 15 van albei kante af:\nk = 52 − 15 = 37\nKagiso het die laaste rondte met 37 punte begin.', checkMode: 'self' },

        // Blok 2 — Een-stap vergelykings: vermenigvuldiging/deling (Easy) — posisies 3-5
        { difficulty: 'Easy', question: 'Los op: 15z = 225', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: '15z = 225\nDeel albei kante deur 15 (inverse van vermenigvuldiging):\nz = 225 ÷ 15 = 15\nKontroleer: 15 × 15 = 225 ✓' },
        { difficulty: 'Easy', question: 'Los op: w ÷ 11 = 17', answer: '187', checkMode: 'auto', correctAnswer: '187', explanation: 'w ÷ 11 = 17\nVermenigvuldig albei kante met 11 (inverse van deling):\nw = 17 × 11 = 187\nKontroleer: 187 ÷ 11 = 17 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vyf identiese sakke rys weeg 65 kg in totaal. Skryf ʼn vergelyking vir die gewig r van een sak, en los dit op.', answer: '5r = 65\nDeel albei kante deur 5:\nr = 65 ÷ 5 = 13\nElke sak weeg 13 kg.', checkMode: 'self' },

        // Blok 3 — Twee-stap vergelykings (Medium) — posisies 6-9
        { difficulty: 'Medium', question: 'Los op: 7x + 6 = 62', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '7x + 6 = 62\nStap 1: trek 6 van albei kante af → 7x = 56\nStap 2: deel albei kante deur 7 → x = 8\nKontroleer: 7(8) + 6 = 56 + 6 = 62 ✓' },
        { difficulty: 'Medium', question: 'Los op: 5y − 14 = 51', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '5y − 14 = 51\nStap 1: tel 14 by albei kante → 5y = 65\nStap 2: deel albei kante deur 5 → y = 13\nKontroleer: 5(13) − 14 = 65 − 14 = 51 ✓' },
        { difficulty: 'Medium', question: 'ʼn Student los 6x + 9 = 63 op deur eers albei kante deur 6 te deel, en kry x + 9 = 10,5, en trek dan 9 af om x = 1,5 te kry. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die fout is om die bewerkings in die verkeerde volgorde ongedaan te maak. Omdat 9 bygetel is nadat met 6 vermenigvuldig is, moet ons eers die optelling ongedaan maak: trek 9 van albei kante af om 6x = 54 te kry, en deel dan deur 6 om x = 9 te kry. Kontroleer: 6(9) + 9 = 54 + 9 = 63 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Getal word met 8 vermenigvuldig, en dan word 19 bygetel, wat ʼn antwoord van 155 gee. Vind die getal.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Laat n = die getal.\n8n + 19 = 155\nStap 1: trek 19 van albei kante af → 8n = 136\nStap 2: deel albei kante deur 8 → n = 17\nKontroleer: 8(17) + 19 = 136 + 19 = 155 ✓' },

        // Blok 4 — Vergelykings met hakies / gelyksoortige terme (Medium-Hard) — posisies 10-13
        { difficulty: 'Medium', question: 'Los op: 2(x + 7) = 30', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '2(x + 7) = 30\nVermenigvuldig die hakie uit: 2x + 14 = 30\nTrek 14 van albei kante af: 2x = 16\nDeel albei kante deur 2: x = 8\nKontroleer: 2(8 + 7) = 2(15) = 30 ✓' },
        { difficulty: 'Medium', question: 'Los op: 4x + 2x − 9 = 39', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4x + 2x − 9 = 39\nVersamel eers gelyksoortige terme: 6x − 9 = 39\nTel 9 by albei kante: 6x = 48\nDeel albei kante deur 6: x = 8\nKontroleer: 4(8) + 2(8) − 9 = 32 + 16 − 9 = 39 ✓' },
        { difficulty: 'Medium-Hard', question: 'Los op: 3(y − 5) = 18', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: '3(y − 5) = 18\nVermenigvuldig die hakie uit: 3y − 15 = 18\nTel 15 by albei kante: 3y = 33\nDeel albei kante deur 3: y = 11\nKontroleer: 3(11 − 5) = 3(6) = 18 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 7x − 4x + 5 = 35 op deur dadelik 3x = 35 te skryf, en los die "+ 5" uit. Verduidelik die fout en los die vergelyking korrek op.', answer: 'Die student het die x-terme korrek versamel (7x − 4x = 3x), maar het vergeet om die "+ 5" in die vergelyking te behou — dit moet steeds hanteer word voordat gedeel word. Korrekte metode: versamel gelyksoortige terme om 3x + 5 = 35 te kry, trek 5 van albei kante af om 3x = 30 te kry, en deel dan deur 3 om x = 10 te kry. Kontroleer: 7(10) − 4(10) + 5 = 70 − 40 + 5 = 35 ✓', checkMode: 'self' },

        // Blok 5 — Vergelykings uit woordprobleme vorm en oplos (Medium-Hard) — posisies 14-17
        { difficulty: 'Medium', question: 'Twee getalle tel op tot 96. Die groter getal is 14 meer as die kleiner getal. Vorm ʼn vergelyking met x vir die kleiner getal, en vind albei getalle.', answer: 'x + (x + 14) = 96\n2x + 14 = 96\n2x = 82\nx = 41\nDie kleiner getal is 41 en die groter getal is 41 + 14 = 55.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Die omtrek van ʼn reghoek is 54 cm. Die lengte is 11 cm meer as die breedte. As die breedte w is, vorm en los ʼn vergelyking op om die breedte en die lengte te vind.', answer: '2((w + 11) + w) = 54\n2(2w + 11) = 54\n4w + 22 = 54\n4w = 32\nw = 8\nDie breedte is 8 cm en die lengte is 8 + 11 = 19 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Drie opeenvolgende heelgetalle tel op tot 135. Laat die kleinste heelgetal n wees. Vorm ʼn vergelyking en vind al drie heelgetalle.', answer: 'n + (n + 1) + (n + 2) = 135\n3n + 3 = 135\n3n = 132\nn = 44\nDie drie opeenvolgende heelgetalle is 44, 45 en 46.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Toegang tot ʼn waterpark kos ʼn vaste R15, plus R7 vir elke rit, r. ʼn Leerder het R92 in totaal spandeer. Vorm ʼn vergelyking en vind hoeveel ritte die leerder gery het.', answer: '7r + 15 = 92', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'r = 11', '7r + 15 = 92, r = 11'], explanation: 'Laat r = die aantal ritte.\n7r + 15 = 92\nTrek 15 van albei kante af: 7r = 77\nDeel albei kante deur 7: r = 11\nDie leerder het 11 ritte gery.' },

        // Blok 6 — Kontroleer oplossings deur substitusie / foutopsporing (Hard) — posisies 18-19
        { difficulty: 'Medium', question: 'Is x = 9 ʼn oplossing vir 5x − 13 = 47? Wys jou kontrole deur substitusie, en gee die korrekte oplossing as dit nie is nie.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Vervang x = 9 in 5x − 13 = 47.\n5(9) − 13 = 45 − 13 = 32\nIs 32 = 47? Nee.\nx = 9 is nie ʼn oplossing nie. Los korrek op: 5x − 13 = 47 → 5x = 60 → x = 12. Kontroleer: 5(12) − 13 = 60 − 13 = 47 ✓' },
        { difficulty: 'Hard', question: 'ʼn Student los 6(x − 4) = 30 op sonder om die hakie eers uit te vermenigvuldig — hulle skryf 6x − 4 = 30 en kry x = 5,67. Verduidelik die fout en gee die korrekte oplossing.', answer: 'Die student het vergeet om die 6 oor albei terme binne die hakie te versprei — die 4 moet ook met 6 vermenigvuldig word, en nie net as "− 4" gelaat word nie. Korrekte metode: vermenigvuldig die hakie uit om 6x − 24 = 30 te kry, tel 24 by albei kante om 6x = 54 te kry, en deel dan deur 6 om x = 9 te kry. Kontroleer: 6(9 − 4) = 6(5) = 30 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het een-stap, twee-stap, en hakievergelykings baasgeraak, plus die vorm van vergelykings uit woordprobleme.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor hakies of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en gelyksoortige terme weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het algebraïese vergelykings baasgeraak.' },
    { minScore: 9, message: 'Goeie werk!' },
    { minScore: 6, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
