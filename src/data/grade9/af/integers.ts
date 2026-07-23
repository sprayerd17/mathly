import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer topic roles) ─────────────────────────────────────
// squares / square roots  → blue   (#2563eb)
// cubes / cube roots      → orange (#ea580c)
// final answer            → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Heelgetalle',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING CALCULATIONS WITH INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-calculations',
      title: 'Hersiening van Berekeninge met Heelgetalle',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Ons konsolideer al vier bewerkings met heelgetalle — optelling, aftrekking, vermenigvuldiging en deling — insluitend berekeninge wat <strong>kwadrate</strong>, <strong>kubusse</strong>, <strong>vierkantswortels</strong> en <strong>kubuswortels</strong> van heelgetalle behels, dikwels gekombineer in meerstap-probleme.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwadrate / vierkantswortels')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kubusse / kubuswortels')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Key rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tekenreëls vir bewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vermenigvuldiging &amp; Deling</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde tekens → <strong>positief</strong>.<br>Verskillende tekens → <strong>negatief</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Magte van negatiewe getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ewe mag → <strong>positief</strong>.<br>Onewe mag → <strong>negatief</strong>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Let op: −4² teenoor (−4)²</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">−4² = −16 (kwadreer slegs die 4).<br>(−4)² = 16 (kwadreer die hele −4).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Wortels van heelgetalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('√36')} = 6 (positiewe vierkantswortel).<br>${or('∛(−8)')} = −2 (negatiewe kubuswortel).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Pas BODMAS toe</p>` +
        `<p style="margin:0;color:#1e3a8a;">Volg altyd die volgorde van bewerkings: <strong>B</strong>rackets (hakies) → <strong>O</strong>rders (magte en wortels) → <strong>D</strong>ivision en <strong>M</strong>ultiplication (deling en vermenigvuldiging, van links na regs) → <strong>A</strong>ddition en <strong>S</strong>ubtraction (optelling en aftrekking, van links na regs).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken −5 × (−3) + (−2)³.',
          answer: `${gr('7')}`,
          steps: [
            `<strong>Vermenigvuldiging eerste (BODMAS):</strong> −5 × (−3) = <strong>15</strong> (negatief × negatief = positief).`,
            `<strong>${or('Kubus')}:</strong> (−2)³ = ${or('−8')} (ʼn negatiewe getal tot ʼn onewe mag bly negatief).`,
            `<strong>Tel op:</strong> 15 + (−8) = ${gr('7')} ✓`,
          ],
        },
        {
          question: 'Bereken (√36 − (−4)) ÷ 2.',
          answer: `${gr('5')}`,
          steps: [
            `<strong>${bl('Vierkantswortel')}:</strong> ${bl('√36')} = ${bl('6')}.`,
            `<strong>Hakies — trek ʼn negatiewe getal af:</strong> 6 − (−4) = 6 + 4 = 10.`,
            `<strong>Deel:</strong> 10 ÷ 2 = ${gr('5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken −8 × (−6).',
          answer: '48',
          checkMode: 'auto',
          correctAnswer: '48',
          explanation: 'Negatief × negatief = positief.\n−8 × (−6) = 48 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −4² + (−3)³.',
          answer: '−43',
          checkMode: 'auto',
          correctAnswer: '-43',
          explanation: '−4² = −(4²) = −16 (die kwadraat geld slegs vir die 4, nie die negatiewe teken nie).\n(−3)³ = −27 (negatief tot die derde mag bly negatief).\n−16 + (−27) = −43 ✓',
        },

        // ── Q3 Hard (self) ───────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê −4² = 16. Is hy korrek? Verduidelik.',
          answer: 'Nee — −4² beteken −(4²) = −16, nie (−4)² = 16 nie. Sonder hakies om die negatiewe teken word slegs die 4 gekwadreer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om BODMAS toe te pas met heelgetalbewerkings insluitend kwadrate kubusse vierkantswortels en kubuswortels',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — REVISING PROPERTIES AND INVERSES OF INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-properties-inverses',
      title: 'Hersiening van Eienskappe en Inverse van Heelgetalle',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">Ons konsolideer die <strong>kommutatiewe</strong>, <strong>assosiatiewe</strong> en <strong>distributiewe</strong> eienskappe van optelling en vermenigvuldiging vir heelgetalle, en hersien <strong>additiewe</strong> en <strong>vermenigvuldigende inverse</strong>, en pas dit toe in meerstap-berekeninge.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('distributiewe eienskap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('additiewe inverse')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldigende inverse')}</span>` +
        `</div>` +

        // ── Properties ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eienskappe van heelgetalle</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Kommutatief</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a + b = b + a &nbsp;en&nbsp; a × b = b × a.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Assosiatief</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a + b) + c = a + (b + c) — groepering verander nie die resultaat nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Distributief')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a(b + c) = ${bl('ab + ac')}. Vermenigvuldig elke term binne die hakies.</p>` +
        `</div>` +

        `</div>` +

        // ── Inverses ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Additiewe en vermenigvuldigende inverse</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Additiewe inverse')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat jy optel om <strong>0</strong> te kry.<br>Die additiewe inverse van a is −a.<br>Voorbeeld: die additiewe inverse van −9 is <strong>9</strong>, aangesien −9 + 9 = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Vermenigvuldigende inverse')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal waarmee jy vermenigvuldig om <strong>1</strong> te kry.<br>Die vermenigvuldigende inverse van a is 1/a.<br>Voorbeeld: die vermenigvuldigende inverse van −6 is <strong>−1/6</strong>, aangesien −6 × −1/6 = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Additiewe teenoor vermenigvuldigende inverse — moenie dit verwar nie</p>` +
        `<p style="margin:0;color:#7c2d12;">Die ${or('additiewe inverse')} van −9 is <strong>9</strong> (optel om 0 te kry). Die ${gr('vermenigvuldigende inverse')} van −9 is <strong>−1/9</strong> (vermenigvuldig om 1 te kry). Hulle is baie verskillend!</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die distributiewe eienskap om −4(7 − 3) te bereken.',
          answer: `${gr('−16')}`,
          steps: [
            `<strong>${bl('Verdeel')}:</strong> ${bl('−4(7 − 3)')} = (${bl('−4 × 7')}) − (${bl('−4 × 3')}) = −28 − (−12).`,
            `<strong>Vereenvoudig:</strong> −28 − (−12) = −28 + 12 = ${gr('−16')} ✓`,
          ],
        },
        {
          question: 'Sipho sê die additiewe inverse van −9 is 1/9. Is hy korrek?',
          answer: `Nee — die ${or('additiewe inverse')} van −9 is 9 (aangesien −9 + 9 = 0). Die waarde 1/9 is nie korrek nie — selfs die ${gr('vermenigvuldigende inverse')} van −9 is −1/9, nie 1/9 nie.`,
          steps: [
            `<strong>Definisie:</strong> Die ${or('additiewe inverse')} van ʼn getal is wat jy daarby optel om 0 te kry.`,
            `<strong>Toets Sipho se bewering:</strong> −9 + 1/9 ≠ 0, dus is 1/9 <strong>nie</strong> die ${or('additiewe inverse')} nie.`,
            `<strong>Korrekte ${or('additiewe inverse')}:</strong> −9 + <strong>9</strong> = 0, dus is die ${or('additiewe inverse')} van −9 <strong>9</strong>.`,
            `<strong>Let wel:</strong> 1/9 is nie eens die ${gr('vermenigvuldigende inverse')} nie — dit sou −1/9 wees, aangesien −9 × (−1/9) = 1.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die distributiewe eienskap om −5(8 + 3) te bereken.',
          answer: '−55',
          checkMode: 'auto',
          correctAnswer: '-55',
          explanation: '−5(8 + 3) = (−5 × 8) + (−5 × 3) = −40 + (−15) = −55 ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die additiewe inverse van −17.',
          answer: '17',
          checkMode: 'auto',
          correctAnswer: '17',
          explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−17 + 17 = 0, dus is die additiewe inverse van −17 gelyk aan 17 ✓',
        },

        // ── Q6 Hard (self) ───────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê die vermenigvuldigende inverse van −6 is 1/6. Is sy korrek? Verduidelik.',
          answer: 'Nee — die vermenigvuldigende inverse van −6 is −1/6, aangesien −6 × (−1/6) = 1, nie −6 × (1/6) = −1 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat die distributiewe eienskap en die verskil tussen additiewe en vermenigvuldigende inverse vir heelgetalle verduidelik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING MULTI-STEP PROBLEMS WITH INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-multi-step-problems',
      title: 'Oplos van Meerstap-probleme met Heelgetalle',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Ons los werklike-lewe en abstrakte probleme op wat meervoudige bewerkings met heelgetalle behels, en pas ons kennis van <strong>volgorde van bewerkings (BODMAS)</strong> en <strong>heelgetalreëls</strong> saam toe.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('volgorde van bewerkings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('heelgetaltekens')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── BODMAS steps ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">BODMAS-volgorde van bewerkings</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Hakies</strong> — vereenvoudig alles binne hakies eerste.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Orders</strong> — bereken magte, wortels, kwadrate en kubusse.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Deling &amp; Vermenigvuldiging</strong> — werk van links na regs.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Optelling &amp; Aftrekking</strong> — werk van links na regs.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Strategie vir werklike-lewe probleme</p>` +
        `<p style="margin:0;color:#14532d;">Skryf eers ʼn getalsin, pas dan BODMAS toe. Positiewe veranderinge word bygetel, negatiewe veranderinge word afgetrek — die ${or('teken van elke heelgetal')} wys jou die rigting van die verandering.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken −3² + (−2) × 5 − (−8).',
          answer: `${gr('−11')}`,
          steps: [
            `<strong>${bl('Orders eerste')}:</strong> ${or('−3²')} = ${or('−9')} (dit is −(3²), nie (−3)² nie, dus is die resultaat negatief).`,
            `<strong>${bl('Vermenigvuldiging')}:</strong> (−2) × 5 = ${or('−10')}.`,
            `<strong>${bl('Optelling en aftrekking')} (van links na regs):</strong> −9 + (−10) − (−8) = −9 − 10 + 8 = ${gr('−11')} ✓`,
          ],
        },
        {
          question: "Lerato se bankbalans verander met −150, dan +320, dan −75 oor drie maande. Vind haar totale verandering.",
          answer: `Haar balans het ${gr('met R95 toegeneem')} in totaal.`,
          steps: [
            `<strong>Skryf die getalsin:</strong> −150 + 320 + (${or('−75')}).`,
            `<strong>Bereken van links na regs:</strong> −150 + 320 = 170. Dan 170 + (${or('−75')}) = 170 − 75 = ${gr('95')}.`,
            `<strong>Antwoord:</strong> Haar balans het ${gr('met R95 toegeneem')} in totaal ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken √81 − (−5)².',
          answer: '−16',
          checkMode: 'auto',
          correctAnswer: '-16',
          explanation: '√81 = 9 (vierkantswortel).\n(−5)² = 25 (ewe mag van ʼn negatiewe getal is positief).\n9 − 25 = −16 ✓',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken −2³ + √64 ÷ (−4).',
          answer: '−10',
          checkMode: 'auto',
          correctAnswer: '-10',
          explanation: '−2³ = −(2³) = −8.\n√64 = 8.\nBODMAS — deling voor optelling: 8 ÷ (−4) = −2.\n−8 + (−2) = −10 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −7 + (−12) × 2 − (−5).',
          answer: '−26',
          checkMode: 'auto',
          correctAnswer: '-26',
          explanation: 'Vermenigvuldiging eerste: (−12) × 2 = −24.\n−7 + (−24) − (−5) = −7 − 24 + 5 = −26 ✓',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo se spaargeld verander met −200, dan +450, dan −120 oor drie maande. Vind sy totale verandering.",
          answer: 'R130',
          checkMode: 'auto',
          correctAnswer: '130',
          correctAnswers: ['130', 'R130'],
          explanation: '−200 + 450 + (−120).\n−200 + 450 = 250. Dan 250 − 120 = 130.\nThabo se spaargeld het met R130 toegeneem in totaal ✓',
        },

        // ── Q11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken (−3)² × (−2)³.',
          answer: '−72',
          checkMode: 'auto',
          correctAnswer: '-72',
          explanation: '(−3)² = 9 (ewe mag → positief).\n(−2)³ = −8 (onewe mag → negatief).\n9 × (−8) = −72 ✓',
        },

        // ── Q12 Hard (self) ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê (−2)⁴ en −2⁴ gee dieselfde resultaat. Is sy korrek? Verduidelik.',
          answer: 'Nee — (−2)⁴ = 16 (positief, aangesien ʼn ewe mag van ʼn negatiewe getal positief is), maar −2⁴ = −(2⁴) = −16. Hulle is verskillend.',
          checkMode: 'self',
        },

        // ── Q13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken −36 ÷ (−9) + (−3)².',
          answer: '13',
          checkMode: 'auto',
          correctAnswer: '13',
          explanation: 'BODMAS — deling eerste: −36 ÷ (−9) = 4 (negatief ÷ negatief = positief).\nDan (−3)² = 9.\n4 + 9 = 13 ✓',
        },

        // ── Q14 Hard (self) ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind twee heelgetalle waarvan die som −3 is en die produk −40 is.',
          answer: '5 en −8, aangesien 5 + (−8) = −3 en 5 × (−8) = −40.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken −5² + (−2)⁴ − √25.',
          answer: '−14',
          checkMode: 'auto',
          correctAnswer: '-14',
          explanation: '−5² = −(5²) = −25.\n(−2)⁴ = 16 (ewe mag → positief).\n√25 = 5.\n−25 + 16 − 5 = −14 ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om BODMAS toe te pas met gemengde heelgetalbewerkings in meerstap abstrakte en werklike-lewe probleme',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het heelgetalle baasgeraak.' },
    { minScore: 11, message: 'Goeie werk! Jy het 75% of hoër behaal — hou aan werk vir volpunte.' },
    { minScore: 8, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids en jy sal daar uitkom.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Tekenreëls — vermenigvuldiging en deling van heelgetalle
    // Blok 2 (3-5):   Kwadrate, kubusse en wortels van heelgetalle
    // Blok 3 (6-7):   Kombinasie van wortels/magte in een berekening
    // Blok 4 (8-11):  BODMAS meerstap-berekeninge
    // Blok 5 (12-14): Distributiewe eienskap
    // Blok 6 (15-16): Additiewe en vermenigvuldigende inverse
    // Blok 7 (17-19): Werklike-lewe meerstap-probleme / foutopsporing / redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Tekenreëls: vermenigvuldiging en deling (Easy)
        { difficulty: 'Easy', question: 'Bereken −7 × (−8).', checkMode: 'auto', correctAnswer: '56', answer: '56', explanation: 'Negatief × negatief = positief.\n−7 × (−8) = 56 ✓' },
        { difficulty: 'Easy', question: 'Bereken −54 ÷ 6.', checkMode: 'auto', correctAnswer: '-9', correctAnswers: ['-9', '−9'], answer: '−9', explanation: 'Negatief ÷ positief = negatief.\n−54 ÷ 6 = −9 ✓' },
        { difficulty: 'Easy', question: 'Bereken −9 × 7.', checkMode: 'auto', correctAnswer: '-63', correctAnswers: ['-63', '−63'], answer: '−63', explanation: 'Negatief × positief = negatief.\n−9 × 7 = −63 ✓' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −6².', checkMode: 'auto', correctAnswer: '-36', correctAnswers: ['-36', '−36'], answer: '−36', explanation: '−6² beteken −(6²), dus word slegs die 6 gekwadreer.\n−6² = −(36) = −36 ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−6)².', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: 'Die hakies beteken die hele −6 word gekwadreer.\n(−6)² = (−6) × (−6) = 36 ✓' },
        { difficulty: 'Medium', question: 'Bereken (−3)³.', checkMode: 'auto', correctAnswer: '-27', correctAnswers: ['-27', '−27'], answer: '−27', explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−3)³ = (−3)(−3)(−3) = −27 ✓' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √64 + ∛(−27).', checkMode: 'auto', correctAnswer: '5', answer: '5', explanation: '√64 = 8 (positiewe vierkantswortel).\n∛(−27) = −3 (negatiewe kubuswortel, aangesien (−3)³ = −27).\n8 + (−3) = 5 ✓' },
        { difficulty: 'Medium', question: 'Bereken −8² + (−3)³.', checkMode: 'auto', correctAnswer: '-91', correctAnswers: ['-91', '−91'], answer: '−91', explanation: '−8² = −(64) = −64 (slegs die 8 word gekwadreer).\n(−3)³ = −27.\n−64 + (−27) = −91 ✓' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √36 − (−5)².', checkMode: 'auto', correctAnswer: '-19', correctAnswers: ['-19', '−19'], answer: '−19', explanation: '√36 = 6.\n(−5)² = 25 (ewe mag van ʼn negatiewe getal is positief).\n6 − 25 = −19 ✓' },
        { difficulty: 'Medium', question: 'Bereken −40 ÷ (−8) + (−2)³.', checkMode: 'auto', correctAnswer: '-3', correctAnswers: ['-3', '−3'], answer: '−3', explanation: 'Deling eerste: −40 ÷ (−8) = 5.\n(−2)³ = −8.\n5 + (−8) = −3 ✓' },
        { difficulty: 'Medium', question: 'Bereken −3² × (−2)².', checkMode: 'auto', correctAnswer: '-36', correctAnswers: ['-36', '−36'], answer: '−36', explanation: '−3² = −(9) = −9 (slegs die 3 word gekwadreer).\n(−2)² = 4.\n−9 × 4 = −36 ✓' },
        { difficulty: 'Medium', question: 'Bereken −18 + (−7) × 3 − (−10).', checkMode: 'auto', correctAnswer: '-29', correctAnswers: ['-29', '−29'], answer: '−29', explanation: 'Vermenigvuldiging eerste: (−7) × 3 = −21.\n−18 + (−21) − (−10) = −18 − 21 + 10 = −29 ✓' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −5(9 − 4) te bereken.', checkMode: 'auto', correctAnswer: '-25', correctAnswers: ['-25', '−25'], answer: '−25', explanation: '−5(9 − 4) = (−5 × 9) − (−5 × 4) = −45 − (−20) = −45 + 20 = −25 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −5(−8 + 3) te bereken.', checkMode: 'auto', correctAnswer: '25', answer: '25', explanation: '−5(−8 + 3) = (−5 × −8) + (−5 × 3) = 40 + (−15) = 25 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 6(−4 + 7) te bereken.', checkMode: 'auto', correctAnswer: '18', answer: '18', explanation: '6(−4 + 7) = (6 × −4) + (6 × 7) = −24 + 42 = 18 ✓' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −23.', checkMode: 'auto', correctAnswer: '23', answer: '23', explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−23 + 23 = 0, dus is die additiewe inverse van −23 gelyk aan 23 ✓' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −8.', checkMode: 'auto', correctAnswer: '-1/8', correctAnswers: ['-1/8', '−1/8'], answer: '−1/8', explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−8 × (−1/8) = 1, dus is die vermenigvuldigende inverse van −8 gelyk aan −1/8 ✓' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Vind twee heelgetalle waarvan die som −2 is en die produk −35 is.', answer: '5 en −7, aangesien 5 + (−7) = −2 en 5 × (−7) = −35.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zinhle sê −3² − (−4)³ = −55. Is sy korrek? Wys die korrekte berekening.', answer: 'Nee — −3² = −9 (slegs die 3 word gekwadreer) en (−4)³ = −64. Dus is −3² − (−4)³ = −9 − (−64) = −9 + 64 = 55, nie −55 nie. Zinhle het waarskynlik die hele −3 per ongeluk gekwadreer.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Karabo se rekeningsaldo verander met −95, dan +140, dan −15 oor drie maande. Vind haar totale verandering.", answer: 'R30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'R30'], explanation: '−95 + 140 + (−15).\n−95 + 140 = 45. Dan 45 − 15 = 30.\nKarabo se saldo het met R30 toegeneem in totaal ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het berekeninge met heelgetalle baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het oor BODMAS of inverse en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor kwadrate, kubusse en wortels, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Tekenreëls: vermenigvuldiging en deling (Easy)
        { difficulty: 'Easy', question: 'Bereken −6 × (−9).', checkMode: 'auto', correctAnswer: '54', answer: '54', explanation: 'Negatief × negatief = positief.\n−6 × (−9) = 54 ✓' },
        { difficulty: 'Easy', question: 'Bereken −48 ÷ 8.', checkMode: 'auto', correctAnswer: '-6', correctAnswers: ['-6', '−6'], answer: '−6', explanation: 'Negatief ÷ positief = negatief.\n−48 ÷ 8 = −6 ✓' },
        { difficulty: 'Easy', question: 'Bereken −8 × 6.', checkMode: 'auto', correctAnswer: '-48', correctAnswers: ['-48', '−48'], answer: '−48', explanation: 'Negatief × positief = negatief.\n−8 × 6 = −48 ✓' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −4².', checkMode: 'auto', correctAnswer: '-16', correctAnswers: ['-16', '−16'], answer: '−16', explanation: '−4² beteken −(4²), dus word slegs die 4 gekwadreer.\n−4² = −(16) = −16 ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−4)².', checkMode: 'auto', correctAnswer: '16', answer: '16', explanation: 'Die hakies beteken die hele −4 word gekwadreer.\n(−4)² = (−4) × (−4) = 16 ✓' },
        { difficulty: 'Medium', question: 'Bereken (−5)³.', checkMode: 'auto', correctAnswer: '-125', correctAnswers: ['-125', '−125'], answer: '−125', explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−5)³ = (−5)(−5)(−5) = −125 ✓' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √81 + ∛(−125).', checkMode: 'auto', correctAnswer: '4', answer: '4', explanation: '√81 = 9 (positiewe vierkantswortel).\n∛(−125) = −5 (negatiewe kubuswortel, aangesien (−5)³ = −125).\n9 + (−5) = 4 ✓' },
        { difficulty: 'Medium', question: 'Bereken −6² + (−4)³.', checkMode: 'auto', correctAnswer: '-100', correctAnswers: ['-100', '−100'], answer: '−100', explanation: '−6² = −(36) = −36 (slegs die 6 word gekwadreer).\n(−4)³ = −64.\n−36 + (−64) = −100 ✓' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √49 − (−6)².', checkMode: 'auto', correctAnswer: '-29', correctAnswers: ['-29', '−29'], answer: '−29', explanation: '√49 = 7.\n(−6)² = 36 (ewe mag van ʼn negatiewe getal is positief).\n7 − 36 = −29 ✓' },
        { difficulty: 'Medium', question: 'Bereken −45 ÷ (−9) + (−3)³.', checkMode: 'auto', correctAnswer: '-22', correctAnswers: ['-22', '−22'], answer: '−22', explanation: 'Deling eerste: −45 ÷ (−9) = 5.\n(−3)³ = −27.\n5 + (−27) = −22 ✓' },
        { difficulty: 'Medium', question: 'Bereken −4² × (−3)².', checkMode: 'auto', correctAnswer: '-144', correctAnswers: ['-144', '−144'], answer: '−144', explanation: '−4² = −(16) = −16 (slegs die 4 word gekwadreer).\n(−3)² = 9.\n−16 × 9 = −144 ✓' },
        { difficulty: 'Medium', question: 'Bereken −22 + (−6) × 4 − (−12).', checkMode: 'auto', correctAnswer: '-34', correctAnswers: ['-34', '−34'], answer: '−34', explanation: 'Vermenigvuldiging eerste: (−6) × 4 = −24.\n−22 + (−24) − (−12) = −22 − 24 + 12 = −34 ✓' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −4(7 − 6) te bereken.', checkMode: 'auto', correctAnswer: '-4', correctAnswers: ['-4', '−4'], answer: '−4', explanation: '−4(7 − 6) = (−4 × 7) − (−4 × 6) = −28 − (−24) = −28 + 24 = −4 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −6(−5 + 2) te bereken.', checkMode: 'auto', correctAnswer: '18', answer: '18', explanation: '−6(−5 + 2) = (−6 × −5) + (−6 × 2) = 30 + (−12) = 18 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 7(−3 + 8) te bereken.', checkMode: 'auto', correctAnswer: '35', answer: '35', explanation: '7(−3 + 8) = (7 × −3) + (7 × 8) = −21 + 56 = 35 ✓' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −31.', checkMode: 'auto', correctAnswer: '31', answer: '31', explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−31 + 31 = 0, dus is die additiewe inverse van −31 gelyk aan 31 ✓' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −10.', checkMode: 'auto', correctAnswer: '-1/10', correctAnswers: ['-1/10', '−1/10'], answer: '−1/10', explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−10 × (−1/10) = 1, dus is die vermenigvuldigende inverse van −10 gelyk aan −1/10 ✓' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Vind twee heelgetalle waarvan die som 1 is en die produk −42 is.', answer: '7 en −6, aangesien 7 + (−6) = 1 en 7 × (−6) = −42.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bandile sê −4² − (−3)³ = −5. Is hy korrek? Wys die korrekte berekening.', answer: 'Nee — −4² = −16 (slegs die 4 word gekwadreer) en (−3)³ = −27. Dus is −4² − (−3)³ = −16 − (−27) = −16 + 27 = 11, nie −5 nie. Bandile het waarskynlik die hele −4 per ongeluk gekwadreer.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Naledi se rekeningsaldo verander met −130, dan +210, dan −25 oor drie maande. Vind haar totale verandering.", answer: 'R55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', 'R55'], explanation: '−130 + 210 + (−25).\n−130 + 210 = 80. Dan 80 − 25 = 55.\nNaledi se saldo het met R55 toegeneem in totaal ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het berekeninge met heelgetalle baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het oor BODMAS of inverse en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor kwadrate, kubusse en wortels, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Tekenreëls: vermenigvuldiging en deling (Easy)
        { difficulty: 'Easy', question: 'Bereken −5 × (−12).', checkMode: 'auto', correctAnswer: '60', answer: '60', explanation: 'Negatief × negatief = positief.\n−5 × (−12) = 60 ✓' },
        { difficulty: 'Easy', question: 'Bereken −72 ÷ 9.', checkMode: 'auto', correctAnswer: '-8', correctAnswers: ['-8', '−8'], answer: '−8', explanation: 'Negatief ÷ positief = negatief.\n−72 ÷ 9 = −8 ✓' },
        { difficulty: 'Easy', question: 'Bereken −6 × 11.', checkMode: 'auto', correctAnswer: '-66', correctAnswers: ['-66', '−66'], answer: '−66', explanation: 'Negatief × positief = negatief.\n−6 × 11 = −66 ✓' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −7².', checkMode: 'auto', correctAnswer: '-49', correctAnswers: ['-49', '−49'], answer: '−49', explanation: '−7² beteken −(7²), dus word slegs die 7 gekwadreer.\n−7² = −(49) = −49 ✓' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−7)².', checkMode: 'auto', correctAnswer: '49', answer: '49', explanation: 'Die hakies beteken die hele −7 word gekwadreer.\n(−7)² = (−7) × (−7) = 49 ✓' },
        { difficulty: 'Medium', question: 'Bereken (−4)³.', checkMode: 'auto', correctAnswer: '-64', correctAnswers: ['-64', '−64'], answer: '−64', explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−4)³ = (−4)(−4)(−4) = −64 ✓' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √100 + ∛(−64).', checkMode: 'auto', correctAnswer: '6', answer: '6', explanation: '√100 = 10 (positiewe vierkantswortel).\n∛(−64) = −4 (negatiewe kubuswortel, aangesien (−4)³ = −64).\n10 + (−4) = 6 ✓' },
        { difficulty: 'Medium', question: 'Bereken −9² + (−2)³.', checkMode: 'auto', correctAnswer: '-89', correctAnswers: ['-89', '−89'], answer: '−89', explanation: '−9² = −(81) = −81 (slegs die 9 word gekwadreer).\n(−2)³ = −8.\n−81 + (−8) = −89 ✓' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √64 − (−4)².', checkMode: 'auto', correctAnswer: '-8', correctAnswers: ['-8', '−8'], answer: '−8', explanation: '√64 = 8.\n(−4)² = 16 (ewe mag van ʼn negatiewe getal is positief).\n8 − 16 = −8 ✓' },
        { difficulty: 'Medium', question: 'Bereken −60 ÷ (−12) + (−2)⁴.', checkMode: 'auto', correctAnswer: '21', answer: '21', explanation: 'Deling eerste: −60 ÷ (−12) = 5.\n(−2)⁴ = 16 (ewe mag van ʼn negatiewe getal is positief).\n5 + 16 = 21 ✓' },
        { difficulty: 'Medium', question: 'Bereken −2² × (−5)².', checkMode: 'auto', correctAnswer: '-100', correctAnswers: ['-100', '−100'], answer: '−100', explanation: '−2² = −(4) = −4 (slegs die 2 word gekwadreer).\n(−5)² = 25.\n−4 × 25 = −100 ✓' },
        { difficulty: 'Medium', question: 'Bereken −27 + (−5) × 6 − (−14).', checkMode: 'auto', correctAnswer: '-43', correctAnswers: ['-43', '−43'], answer: '−43', explanation: 'Vermenigvuldiging eerste: (−5) × 6 = −30.\n−27 + (−30) − (−14) = −27 − 30 + 14 = −43 ✓' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −3(11 − 4) te bereken.', checkMode: 'auto', correctAnswer: '-21', correctAnswers: ['-21', '−21'], answer: '−21', explanation: '−3(11 − 4) = (−3 × 11) − (−3 × 4) = −33 − (−12) = −33 + 12 = −21 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −8(−3 + 5) te bereken.', checkMode: 'auto', correctAnswer: '-16', correctAnswers: ['-16', '−16'], answer: '−16', explanation: '−8(−3 + 5) = (−8 × −3) + (−8 × 5) = 24 + (−40) = −16 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 9(−2 + 6) te bereken.', checkMode: 'auto', correctAnswer: '36', answer: '36', explanation: '9(−2 + 6) = (9 × −2) + (9 × 6) = −18 + 54 = 36 ✓' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −42.', checkMode: 'auto', correctAnswer: '42', answer: '42', explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−42 + 42 = 0, dus is die additiewe inverse van −42 gelyk aan 42 ✓' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −12.', checkMode: 'auto', correctAnswer: '-1/12', correctAnswers: ['-1/12', '−1/12'], answer: '−1/12', explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−12 × (−1/12) = 1, dus is die vermenigvuldigende inverse van −12 gelyk aan −1/12 ✓' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Vind twee heelgetalle waarvan die som −4 is en die produk −60 is.', answer: '6 en −10, aangesien 6 + (−10) = −4 en 6 × (−10) = −60.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sizwe sê −5² − (−2)³ = −33. Is hy korrek? Wys die korrekte berekening.', answer: 'Nee — −5² = −25 (slegs die 5 word gekwadreer) en (−2)³ = −8. Dus is −5² − (−2)³ = −25 − (−8) = −25 + 8 = −17, nie −33 nie. Sizwe het waarskynlik ʼn tekenfout gemaak toe hy ʼn negatiewe getal afgetrek het.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Palesa se rekeningsaldo verander met −150, dan +260, dan −45 oor drie maande. Vind haar totale verandering.", answer: 'R65', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65', 'R65'], explanation: '−150 + 260 + (−45).\n−150 + 260 = 110. Dan 110 − 45 = 65.\nPalesa se saldo het met R65 toegeneem in totaal ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het berekeninge met heelgetalle baasgeraak.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige vrae wat jy verkeerd gehad het oor BODMAS of inverse en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Hersien die uitgewerkte voorbeelde oor kwadrate, kubusse en wortels, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
