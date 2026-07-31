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
        'Kort video wat wys hoe om BODMAS toe te pas met heelgetalbewerkings insluitend kwadrate, kubusse, vierkantswortels en kubuswortels',
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
        { difficulty: 'Easy', question: 'Bereken −7 × (−8).', checkMode: 'auto', options: ['56', '-56', '-15', '1'], correctIndex: 0, explanation: 'Negatief × negatief = positief.\n−7 × (−8) = 56 ✓ (−56 verwissel die teken; −15 en 1 kom van optel of aftrek in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken −54 ÷ 6.', checkMode: 'auto', options: ['9', '-9', '-8', '-60'], correctIndex: 1, explanation: 'Negatief ÷ positief = negatief.\n−54 ÷ 6 = −9 ✓ (9 verwissel die teken; −8 kom van ʼn delingsfout; −60 kom van aftrek in plaas van deel.)' },
        { difficulty: 'Easy', question: 'Bereken −9 × 7.', checkMode: 'auto', options: ['63', '-2', '-63', '-56'], correctIndex: 2, explanation: 'Negatief × positief = negatief.\n−9 × 7 = −63 ✓ (63 verwissel die teken; −2 kom van optel in plaas van vermenigvuldig; −56 kom van ʼn vermenigvuldigingsfout.)' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −6².', checkMode: 'auto', options: ['36', '-12', '12', '-36'], correctIndex: 3, explanation: '−6² beteken −(6²), dus word slegs die 6 gekwadreer.\n−6² = −(36) = −36 ✓ (36 kom van die kwadrering van die hele −6 asof dit (−6)² is; ±12 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−6)².', checkMode: 'auto', options: ['36', '-36', '-12', '12'], correctIndex: 0, explanation: 'Die hakies beteken die hele −6 word gekwadreer.\n(−6)² = (−6) × (−6) = 36 ✓ (−36 vergeet dat die hakies die teken beskerm; ±12 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Medium', question: 'Bereken (−3)³.', checkMode: 'auto', options: ['27', '-27', '-9', '9'], correctIndex: 1, explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−3)³ = (−3)(−3)(−3) = −27 ✓ (27 neem verkeerdelik aan dat ʼn onewe mag ʼn positiewe resultaat gee; ±9 kom van kwadrering in plaas van kubering.)' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √64 + ∛(−27).', checkMode: 'auto', options: ['11', '-5', '5', '-11'], correctIndex: 2, explanation: '√64 = 8 (positiewe vierkantswortel).\n∛(−27) = −3 (negatiewe kubuswortel, aangesien (−3)³ = −27).\n8 + (−3) = 5 ✓ (11 ignoreer die negatiewe teken onder die kubuswortel; −5 en −11 kom van verdere tekenfoute.)' },
        { difficulty: 'Medium', question: 'Bereken −8² + (−3)³.', checkMode: 'auto', options: ['37', '-37', '91', '-91'], correctIndex: 3, explanation: '−8² = −(64) = −64 (slegs die 8 word gekwadreer).\n(−3)³ = −27.\n−64 + (−27) = −91 ✓ (37 kom van die kwadrering van die hele −8 as (−8)²; −37 behou net een tekenfout; 91 maak albei tekenfoute.)' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √36 − (−5)².', checkMode: 'auto', options: ['-19', '31', '-31', '19'], correctIndex: 0, explanation: '√36 = 6.\n(−5)² = 25 (ewe mag van ʼn negatiewe getal is positief).\n6 − 25 = −19 ✓ (31 laat die hakies weg en behandel −5² as −25, dus 6 − (−25) = 31; −31 en 19 kom van verdere volgorde-foute.)' },
        { difficulty: 'Medium', question: 'Bereken −40 ÷ (−8) + (−2)³.', checkMode: 'auto', options: ['-13', '-3', '13', '3'], correctIndex: 1, explanation: 'Deling eerste: −40 ÷ (−8) = 5.\n(−2)³ = −8.\n5 + (−8) = −3 ✓ (−13 kom van ʼn delingstekenfout; 13 van ʼn kubustekenfout; 3 deur albei foute te maak.)' },
        { difficulty: 'Medium', question: 'Bereken −3² × (−2)².', checkMode: 'auto', options: ['36', '-5', '-36', '5'], correctIndex: 2, explanation: '−3² = −(9) = −9 (slegs die 3 word gekwadreer).\n(−2)² = 4.\n−9 × 4 = −36 ✓ (36 kom van die kwadrering van die hele −3 as (−3)²; −5 en 5 kom van optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Bereken −18 + (−7) × 3 − (−10).', checkMode: 'auto', options: ['-65', '-49', '13', '-29'], correctIndex: 3, explanation: 'Vermenigvuldiging eerste: (−7) × 3 = −21.\n−18 + (−21) − (−10) = −18 − 21 + 10 = −29 ✓ (−65 ignoreer BODMAS en werk van links na regs; −49 vergeet dat aftrekking van ʼn negatiewe getal optelling word; 13 maak ʼn vermenigvuldigingstekenfout.)' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −5(9 − 4) te bereken.', checkMode: 'auto', options: ['-25', '-65', '25', '-49'], correctIndex: 0, explanation: '−5(9 − 4) = (−5 × 9) − (−5 × 4) = −45 − (−20) = −45 + 20 = −25 ✓ (−65 vergeet dat aftrekking van ʼn negatiewe getal optelling word; 25 laat die negatiewe teken heeltemal weg; −49 verdeel slegs na die eerste term.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −5(−8 + 3) te bereken.', checkMode: 'auto', options: ['-55', '25', '43', '-25'], correctIndex: 1, explanation: '−5(−8 + 3) = (−5 × −8) + (−5 × 3) = 40 + (−15) = 25 ✓ (−55 maak ʼn tekenfout by die eerste produk; 43 verdeel slegs na die eerste term; −25 verwissel eers die teken binne die hakies.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 6(−4 + 7) te bereken.', checkMode: 'auto', options: ['-66', '-17', '18', '-18'], correctIndex: 2, explanation: '6(−4 + 7) = (6 × −4) + (6 × 7) = −24 + 42 = 18 ✓ (−66 verwissel eers die teken binne die hakies; −17 verdeel slegs na die eerste term; −18 maak ʼn finale tekenfout.)' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −23.', checkMode: 'auto', options: ['-23', '1/23', '-1/23', '23'], correctIndex: 3, explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−23 + 23 = 0, dus is die additiewe inverse van −23 gelyk aan 23 ✓ (−23 verwar die inverse met die oorspronklike getal; die breuke verwar dit met die vermenigvuldigende inverse.)' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −8.', checkMode: 'auto', options: ['-1/8', '1/8', '8', '-8'], correctIndex: 0, explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−8 × (−1/8) = 1, dus is die vermenigvuldigende inverse van −8 gelyk aan −1/8 ✓ (1/8 laat die teken weg; 8 en −8 verwar dit met die additiewe inverse.)' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Watter paar heelgetalle het ʼn som van −2 en ʼn produk van −35?', checkMode: 'auto', options: ['−5 en 7', '5 en −7', '5 en 7', '−5 en −7'], correctIndex: 1, explanation: '5 + (−7) = −2 en 5 × (−7) = −35 ✓ (−5 en 7 gee die regte produk maar die verkeerde som; 5 en 7 en −5 en −7 gee albei die verkeerde teken by die produk.)' },
        { difficulty: 'Hard', question: 'Zinhle sê −3² − (−4)³ = −55. Wat is die korrekte waarde?', checkMode: 'auto', options: ['-55', '73', '55', '-73'], correctIndex: 2, explanation: '−3² = −9 (slegs die 3 word gekwadreer) en (−4)³ = −64.\n−3² − (−4)³ = −9 − (−64) = −9 + 64 = 55 ✓ (−55 is Zinhle se foutiewe bewering; 73 en −73 kom van die kwadrering van die hele −3 as (−3)² = 9.)' },
        { difficulty: 'Hard', question: "Karabo se rekeningsaldo verander met −95, dan +140, dan −15 oor drie maande. Vind haar totale verandering.", checkMode: 'auto', options: ['250', '220', '60', '30'], correctIndex: 3, explanation: '−95 + 140 + (−15).\n−95 + 140 = 45. Dan 45 − 15 = 30.\nKarabo se saldo het met R30 toegeneem in totaal ✓ (250 en 220 verwissel die teken van een of albei negatiewe veranderinge; 60 behandel die finale −15 as +15.)' },
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
        { difficulty: 'Easy', question: 'Bereken −6 × (−9).', checkMode: 'auto', options: ['54', '-54', '-15', '3'], correctIndex: 0, explanation: 'Negatief × negatief = positief.\n−6 × (−9) = 54 ✓ (−54 verwissel die teken; −15 en 3 kom van optel of aftrek in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken −48 ÷ 8.', checkMode: 'auto', options: ['6', '-6', '-5', '-56'], correctIndex: 1, explanation: 'Negatief ÷ positief = negatief.\n−48 ÷ 8 = −6 ✓ (6 verwissel die teken; −5 kom van ʼn delingsfout; −56 kom van aftrek in plaas van deel.)' },
        { difficulty: 'Easy', question: 'Bereken −8 × 6.', checkMode: 'auto', options: ['48', '-2', '-48', '-42'], correctIndex: 2, explanation: 'Negatief × positief = negatief.\n−8 × 6 = −48 ✓ (48 verwissel die teken; −2 kom van optel in plaas van vermenigvuldig; −42 kom van ʼn vermenigvuldigingsfout.)' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −4².', checkMode: 'auto', options: ['16', '-8', '8', '-16'], correctIndex: 3, explanation: '−4² beteken −(4²), dus word slegs die 4 gekwadreer.\n−4² = −(16) = −16 ✓ (16 kom van die kwadrering van die hele −4 asof dit (−4)² is; ±8 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−4)².', checkMode: 'auto', options: ['16', '-16', '-8', '8'], correctIndex: 0, explanation: 'Die hakies beteken die hele −4 word gekwadreer.\n(−4)² = (−4) × (−4) = 16 ✓ (−16 vergeet dat die hakies die teken beskerm; ±8 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Medium', question: 'Bereken (−5)³.', checkMode: 'auto', options: ['125', '-125', '-25', '25'], correctIndex: 1, explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−5)³ = (−5)(−5)(−5) = −125 ✓ (125 neem verkeerdelik aan dat ʼn onewe mag ʼn positiewe resultaat gee; ±25 kom van kwadrering in plaas van kubering.)' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √81 + ∛(−125).', checkMode: 'auto', options: ['14', '-4', '4', '-14'], correctIndex: 2, explanation: '√81 = 9 (positiewe vierkantswortel).\n∛(−125) = −5 (negatiewe kubuswortel, aangesien (−5)³ = −125).\n9 + (−5) = 4 ✓ (14 ignoreer die negatiewe teken onder die kubuswortel; −4 en −14 kom van verdere tekenfoute.)' },
        { difficulty: 'Medium', question: 'Bereken −6² + (−4)³.', checkMode: 'auto', options: ['-28', '28', '100', '-100'], correctIndex: 3, explanation: '−6² = −(36) = −36 (slegs die 6 word gekwadreer).\n(−4)³ = −64.\n−36 + (−64) = −100 ✓ (−28 kom van die kwadrering van die hele −6 as (−6)²; 28 behou net een tekenfout; 100 maak albei tekenfoute.)' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √49 − (−6)².', checkMode: 'auto', options: ['-29', '43', '29', '-43'], correctIndex: 0, explanation: '√49 = 7.\n(−6)² = 36 (ewe mag van ʼn negatiewe getal is positief).\n7 − 36 = −29 ✓ (43 laat die hakies weg en behandel −6² as −36, dus 7 − (−36) = 43; 29 en −43 kom van verdere volgorde-foute.)' },
        { difficulty: 'Medium', question: 'Bereken −45 ÷ (−9) + (−3)³.', checkMode: 'auto', options: ['-32', '-22', '32', '22'], correctIndex: 1, explanation: 'Deling eerste: −45 ÷ (−9) = 5.\n(−3)³ = −27.\n5 + (−27) = −22 ✓ (−32 kom van ʼn delingstekenfout; 32 van ʼn kubustekenfout; 22 deur albei foute te maak.)' },
        { difficulty: 'Medium', question: 'Bereken −4² × (−3)².', checkMode: 'auto', options: ['144', '-7', '-144', '7'], correctIndex: 2, explanation: '−4² = −(16) = −16 (slegs die 4 word gekwadreer).\n(−3)² = 9.\n−16 × 9 = −144 ✓ (144 kom van die kwadrering van die hele −4 as (−4)²; −7 en 7 kom van optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Bereken −22 + (−6) × 4 − (−12).', checkMode: 'auto', options: ['-100', '-58', '14', '-34'], correctIndex: 3, explanation: 'Vermenigvuldiging eerste: (−6) × 4 = −24.\n−22 + (−24) − (−12) = −22 − 24 + 12 = −34 ✓ (−100 ignoreer BODMAS en werk van links na regs; −58 vergeet dat aftrekking van ʼn negatiewe getal optelling word; 14 maak ʼn vermenigvuldigingstekenfout.)' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −4(7 − 6) te bereken.', checkMode: 'auto', options: ['-4', '-52', '-34', '4'], correctIndex: 0, explanation: '−4(7 − 6) = (−4 × 7) − (−4 × 6) = −28 − (−24) = −28 + 24 = −4 ✓ (−52 vergeet dat aftrekking van ʼn negatiewe getal optelling word; 4 laat die negatiewe teken heeltemal weg; −34 verdeel slegs na die eerste term.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −6(−5 + 2) te bereken.', checkMode: 'auto', options: ['-42', '18', '32', '-18'], correctIndex: 1, explanation: '−6(−5 + 2) = (−6 × −5) + (−6 × 2) = 30 + (−12) = 18 ✓ (−42 maak ʼn tekenfout by die eerste produk; 32 verdeel slegs na die eerste term; −18 verwissel eers die teken binne die hakies.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 7(−3 + 8) te bereken.', checkMode: 'auto', options: ['-77', '-13', '35', '-35'], correctIndex: 2, explanation: '7(−3 + 8) = (7 × −3) + (7 × 8) = −21 + 56 = 35 ✓ (−77 verwissel eers die teken binne die hakies; −13 verdeel slegs na die eerste term; −35 maak ʼn finale tekenfout.)' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −31.', checkMode: 'auto', options: ['-31', '1/31', '-1/31', '31'], correctIndex: 3, explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−31 + 31 = 0, dus is die additiewe inverse van −31 gelyk aan 31 ✓ (−31 verwar die inverse met die oorspronklike getal; die breuke verwar dit met die vermenigvuldigende inverse.)' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −10.', checkMode: 'auto', options: ['-1/10', '1/10', '10', '-10'], correctIndex: 0, explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−10 × (−1/10) = 1, dus is die vermenigvuldigende inverse van −10 gelyk aan −1/10 ✓ (1/10 laat die teken weg; 10 en −10 verwar dit met die additiewe inverse.)' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Watter paar heelgetalle het ʼn som van 1 en ʼn produk van −42?', checkMode: 'auto', options: ['−7 en 6', '7 en −6', '7 en 6', '−7 en −6'], correctIndex: 1, explanation: '7 + (−6) = 1 en 7 × (−6) = −42 ✓ (−7 en 6 gee die regte produk maar die verkeerde som; 7 en 6 en −7 en −6 gee albei die verkeerde teken by die produk.)' },
        { difficulty: 'Hard', question: 'Bandile sê −4² − (−3)³ = −5. Wat is die korrekte waarde?', checkMode: 'auto', options: ['-5', '43', '11', '-43'], correctIndex: 2, explanation: '−4² = −16 (slegs die 4 word gekwadreer) en (−3)³ = −27.\n−4² − (−3)³ = −16 − (−27) = −16 + 27 = 11 ✓ (−5 is Bandile se foutiewe bewering; 43 en −43 kom van die kwadrering van die hele −4 as (−4)² = 16.)' },
        { difficulty: 'Hard', question: "Naledi se rekeningsaldo verander met −130, dan +210, dan −25 oor drie maande. Vind haar totale verandering.", checkMode: 'auto', options: ['315', '105', '365', '55'], correctIndex: 3, explanation: '−130 + 210 + (−25).\n−130 + 210 = 80. Dan 80 − 25 = 55.\nNaledi se saldo het met R55 toegeneem in totaal ✓ (315 en 365 verwissel die teken van een of albei negatiewe veranderinge; 105 behandel die finale −25 as +25.)' },
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
        { difficulty: 'Easy', question: 'Bereken −5 × (−12).', checkMode: 'auto', options: ['60', '-60', '-17', '7'], correctIndex: 0, explanation: 'Negatief × negatief = positief.\n−5 × (−12) = 60 ✓ (−60 verwissel die teken; −17 en 7 kom van optel of aftrek in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken −72 ÷ 9.', checkMode: 'auto', options: ['8', '-8', '-7', '-81'], correctIndex: 1, explanation: 'Negatief ÷ positief = negatief.\n−72 ÷ 9 = −8 ✓ (8 verwissel die teken; −7 kom van ʼn delingsfout; −81 kom van aftrek in plaas van deel.)' },
        { difficulty: 'Easy', question: 'Bereken −6 × 11.', checkMode: 'auto', options: ['66', '5', '-66', '-55'], correctIndex: 2, explanation: 'Negatief × positief = negatief.\n−6 × 11 = −66 ✓ (66 verwissel die teken; 5 kom van optel in plaas van vermenigvuldig; −55 kom van ʼn vermenigvuldigingsfout.)' },

        // Blok 2 — Kwadrate, kubusse en wortels van heelgetalle (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Bereken −7².', checkMode: 'auto', options: ['49', '-14', '14', '-49'], correctIndex: 3, explanation: '−7² beteken −(7²), dus word slegs die 7 gekwadreer.\n−7² = −(49) = −49 ✓ (49 kom van die kwadrering van die hele −7 asof dit (−7)² is; ±14 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Easy-Medium', question: 'Bereken (−7)².', checkMode: 'auto', options: ['49', '-49', '-14', '14'], correctIndex: 0, explanation: 'Die hakies beteken die hele −7 word gekwadreer.\n(−7)² = (−7) × (−7) = 49 ✓ (−49 vergeet dat die hakies die teken beskerm; ±14 kom van verdubbeling in plaas van kwadrering.)' },
        { difficulty: 'Medium', question: 'Bereken (−4)³.', checkMode: 'auto', options: ['64', '-64', '-16', '16'], correctIndex: 1, explanation: 'ʼn Onewe mag van ʼn negatiewe getal bly negatief.\n(−4)³ = (−4)(−4)(−4) = −64 ✓ (64 neem verkeerdelik aan dat ʼn onewe mag ʼn positiewe resultaat gee; ±16 kom van kwadrering in plaas van kubering.)' },

        // Blok 3 — Kombinasie van wortels en magte (Medium)
        { difficulty: 'Medium', question: 'Bereken √100 + ∛(−64).', checkMode: 'auto', options: ['14', '-6', '6', '-14'], correctIndex: 2, explanation: '√100 = 10 (positiewe vierkantswortel).\n∛(−64) = −4 (negatiewe kubuswortel, aangesien (−4)³ = −64).\n10 + (−4) = 6 ✓ (14 ignoreer die negatiewe teken onder die kubuswortel; −6 en −14 kom van verdere tekenfoute.)' },
        { difficulty: 'Medium', question: 'Bereken −9² + (−2)³.', checkMode: 'auto', options: ['73', '-73', '89', '-89'], correctIndex: 3, explanation: '−9² = −(81) = −81 (slegs die 9 word gekwadreer).\n(−2)³ = −8.\n−81 + (−8) = −89 ✓ (73 kom van die kwadrering van die hele −9 as (−9)²; −73 behou net een tekenfout; 89 maak albei tekenfoute.)' },

        // Blok 4 — BODMAS meerstap-berekeninge (Medium)
        { difficulty: 'Medium', question: 'Bereken √64 − (−4)².', checkMode: 'auto', options: ['-8', '24', '8', '-24'], correctIndex: 0, explanation: '√64 = 8.\n(−4)² = 16 (ewe mag van ʼn negatiewe getal is positief).\n8 − 16 = −8 ✓ (24 laat die hakies weg en behandel −4² as −16, dus 8 − (−16) = 24; 8 en −24 kom van verdere volgorde-foute.)' },
        { difficulty: 'Medium', question: 'Bereken −60 ÷ (−12) + (−2)⁴.', checkMode: 'auto', options: ['11', '21', '-11', '-21'], correctIndex: 1, explanation: 'Deling eerste: −60 ÷ (−12) = 5.\n(−2)⁴ = 16 (ewe mag van ʼn negatiewe getal is positief).\n5 + 16 = 21 ✓ (11 kom van ʼn delingstekenfout; −11 van ʼn magstekenfout; −21 deur albei foute te maak.)' },
        { difficulty: 'Medium', question: 'Bereken −2² × (−5)².', checkMode: 'auto', options: ['100', '21', '-100', '-21'], correctIndex: 2, explanation: '−2² = −(4) = −4 (slegs die 2 word gekwadreer).\n(−5)² = 25.\n−4 × 25 = −100 ✓ (100 kom van die kwadrering van die hele −2 as (−2)²; 21 en −21 kom van optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Bereken −27 + (−5) × 6 − (−14).', checkMode: 'auto', options: ['-178', '-71', '17', '-43'], correctIndex: 3, explanation: 'Vermenigvuldiging eerste: (−5) × 6 = −30.\n−27 + (−30) − (−14) = −27 − 30 + 14 = −43 ✓ (−178 ignoreer BODMAS en werk van links na regs; −71 vergeet dat aftrekking van ʼn negatiewe getal optelling word; 17 maak ʼn vermenigvuldigingstekenfout.)' },

        // Blok 5 — Distributiewe eienskap (Medium)
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −3(11 − 4) te bereken.', checkMode: 'auto', options: ['-21', '-45', '-37', '21'], correctIndex: 0, explanation: '−3(11 − 4) = (−3 × 11) − (−3 × 4) = −33 − (−12) = −33 + 12 = −21 ✓ (−45 vergeet dat aftrekking van ʼn negatiewe getal optelling word; −37 verdeel slegs na die eerste term; 21 laat die negatiewe teken heeltemal weg.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om −8(−3 + 5) te bereken.', checkMode: 'auto', options: ['64', '-16', '29', '16'], correctIndex: 1, explanation: '−8(−3 + 5) = (−8 × −3) + (−8 × 5) = 24 + (−40) = −16 ✓ (64 verwissel eers die teken binne die hakies; 29 verdeel slegs na die eerste term; 16 maak ʼn finale tekenfout.)' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 9(−2 + 6) te bereken.', checkMode: 'auto', options: ['-72', '-12', '36', '-36'], correctIndex: 2, explanation: '9(−2 + 6) = (9 × −2) + (9 × 6) = −18 + 54 = 36 ✓ (−72 verwissel eers die teken binne die hakies; −12 verdeel slegs na die eerste term; −36 maak ʼn finale tekenfout.)' },

        // Blok 6 — Additiewe en vermenigvuldigende inverse (Medium)
        { difficulty: 'Medium', question: 'Vind die additiewe inverse van −42.', checkMode: 'auto', options: ['-42', '1/42', '-1/42', '42'], correctIndex: 3, explanation: 'Die additiewe inverse is die getal wat tot 0 optel.\n−42 + 42 = 0, dus is die additiewe inverse van −42 gelyk aan 42 ✓ (−42 verwar die inverse met die oorspronklike getal; die breuke verwar dit met die vermenigvuldigende inverse.)' },
        { difficulty: 'Medium', question: 'Vind die vermenigvuldigende inverse van −12.', checkMode: 'auto', options: ['-1/12', '1/12', '12', '-12'], correctIndex: 0, explanation: 'Die vermenigvuldigende inverse is die getal waarmee jy vermenigvuldig om 1 te kry.\n−12 × (−1/12) = 1, dus is die vermenigvuldigende inverse van −12 gelyk aan −1/12 ✓ (1/12 laat die teken weg; 12 en −12 verwar dit met die additiewe inverse.)' },

        // Blok 7 — Werklike-lewe meerstap-probleme / foutopsporing / redenering (Hard)
        { difficulty: 'Hard', question: 'Watter paar heelgetalle het ʼn som van −4 en ʼn produk van −60?', checkMode: 'auto', options: ['−6 en 10', '6 en −10', '6 en 10', '−6 en −10'], correctIndex: 1, explanation: '6 + (−10) = −4 en 6 × (−10) = −60 ✓ (−6 en 10 gee die regte produk maar die verkeerde som; 6 en 10 en −6 en −10 gee albei die verkeerde teken by die produk.)' },
        { difficulty: 'Hard', question: 'Sizwe sê −5² − (−2)³ = −33. Wat is die korrekte waarde?', checkMode: 'auto', options: ['-33', '33', '-17', '17'], correctIndex: 2, explanation: '−5² = −25 (slegs die 5 word gekwadreer) en (−2)³ = −8.\n−5² − (−2)³ = −25 − (−8) = −25 + 8 = −17 ✓ (−33 is Sizwe se foutiewe bewering; 33 kom van die kwadrering van die hele −5 as (−5)² = 25; 17 verwissel die finale teken.)' },
        { difficulty: 'Hard', question: "Palesa se rekeningsaldo verander met −150, dan +260, dan −45 oor drie maande. Vind haar totale verandering.", checkMode: 'auto', options: ['365', '260', '455', '65'], correctIndex: 3, explanation: '−150 + 260 + (−45).\n−150 + 260 = 110. Dan 110 − 45 = 65.\nPalesa se saldo het met R65 toegeneem in totaal ✓ (365 en 455 verwissel die teken van een of albei negatiewe veranderinge; 260 stop halfpad deur die berekening.)' },
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
