import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ────────────────────────────────────────────────────────────
// blue   → known ratio / constant product / commission   (#2563eb)
// red    → unknown value / decreasing quantity            (#dc2626)
// green  → proportional relationship / compound interest (#16a34a)
// orange → rentals                                        (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Verhouding, Koers en Proporsie',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIRECT PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'direct-proportion',
      title: 'Direkte Proporsie',
      icon: '∝',
      explanation:
        `<p style="margin-bottom:16px;">Twee hoeveelhede is in <strong>direkte proporsie</strong> as hulle teen dieselfde koers toeneem of afneem — soos die een toeneem, neem die ander proporsioneel toe (hul verhouding bly konstant). Ons los direkte proporsie-probleme op deur die verwantskap y = kx te gebruik, of deur gelyke verhoudings op te stel.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende verhouding')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('proporsionele verwantskap')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelverwantskap</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Formule</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('y')} = ${bl('k')}${gr('x')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">of</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Gelyke verhoudings</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('x₁')}/y₁ = ${bl('x₂')}/${re('y₂')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Oplos met gelyke verhoudings — kruisvermenigvuldiging</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Stel op')} — Skryf die twee verhoudings as gelyke breuke: ${bl('x₁/y₁')} = ${bl('x₂')}/${re('y₂')}, waar ${re('y₂')} die onbekende waarde is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kruisvermenigvuldig')} — Vermenigvuldig die teller van elke breuk met die noemer van die ander: x₁ × ${re('y₂')} = x₂ × y₁.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Los op')} — Deel altwee kante deur die bekende koëffisiënt om ${re('y₂')} te isoleer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Direkte proporsie herken</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy een hoeveelheid verdubbel en die ander verdubbel ook, het jy ${gr('direkte proporsie')}. Die verhouding tussen die twee hoeveelhede bly altyd ${bl('konstant')}. Grafieke van direkte proporsie gaan deur die oorsprong en vorm ʼn reguit lyn.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'As 4 kg appels R72 kos, vind die koste van 7 kg deur direkte proporsie te gebruik.',
          answer: `Koste van 7 kg = ${gr('R126')}`,
          steps: [
            `<strong>Stel gelyke verhoudings op:</strong> ${bl('4/72')} = ${bl('7')}/${re('x')}. Die ${bl('bekende verhouding')} is 4 kg vir R72; ${re('x')} is die koste van 7 kg.`,
            `<strong>Kruisvermenigvuldig:</strong> 4 × ${re('x')} = 7 × 72`,
            `4${re('x')} = 504`,
            `${re('x')} = 504 ÷ 4 = ${gr('126')}`,
            `<strong>Antwoord:</strong> Koste van 7 kg = ${gr('R126')} ✓`,
          ],
        },
        {
          question: 'Sipho verdien R450 vir 6 uur se werk. Gebruik direkte proporsie om sy verdienste vir 9 uur te vind.',
          answer: `Sipho verdien ${gr('R675')} vir 9 uur`,
          steps: [
            `<strong>Stel gelyke verhoudings op:</strong> ${bl('6/450')} = ${bl('9')}/${re('x')}. Die ${bl('bekende verhouding')} is 6 uur wat R450 verdien.`,
            `<strong>Kruisvermenigvuldig:</strong> 6 × ${re('x')} = 9 × 450`,
            `6${re('x')} = 4 050`,
            `${re('x')} = 4 050 ÷ 6 = ${gr('675')}`,
            `<strong>Antwoord:</strong> Sipho verdien ${gr('R675')} vir 9 uur ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'As 3 kg suiker R45 kos, vind die koste van 5 kg deur direkte proporsie te gebruik.',
          answer: 'R75',
          checkMode: 'auto',
          correctAnswer: 'R75',
          correctAnswers: ['R75', '75'],
          explanation: 'Stel gelyke verhoudings op: 3/45 = 5/x.\nKruisvermenigvuldig: 3x = 5 × 45 = 225.\nx = 225 ÷ 3 = 75.\nKoste = R75 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho verdien R600 vir 8 uur se werk. Vind sy verdienste vir 12 uur deur direkte proporsie te gebruik.',
          answer: 'R900',
          checkMode: 'auto',
          correctAnswer: 'R900',
          correctAnswers: ['R900', '900'],
          explanation: 'Stel gelyke verhoudings op: 8/600 = 12/x.\nKruisvermenigvuldig: 8x = 12 × 600 = 7 200.\nx = 7 200 ÷ 8 = 900.\nVerdienste = R900 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato sê om die ure gewerk te verdubbel, verdubbel altyd die verdienste, met die aanname van ʼn konstante uurlikse koers. Is sy korrek? Verduidelik.',
          answer: 'Ja — dit is direkte proporsie; as die koers per uur dieselfde bly, verdubbel die verdubbeling van ure die totale verdienste.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and solve direct proportion problems using equal ratios and cross multiplication" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two quantities in direct proportion with a table of values and a straight-line graph through the origin" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INDIRECT (INVERSE) PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'indirect-proportion',
      title: 'Indirekte (Omgekeerde) Proporsie',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">Twee hoeveelhede is in <strong>indirekte (of omgekeerde) proporsie</strong> as die een toeneem terwyl die ander teen ʼn verwante koers afneem — hul produk bly konstant. Ons los op deur die verwantskap xy = k te gebruik, wat beteken x₁y₁ = x₂y₂.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('konstante produk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toenemende hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('afnemende hoeveelheid')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelverwantskap</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Formule</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">x × y = ${bl('k')} (konstant)</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">dus</div>` +
        `<div style="text-align:center;min-width:140px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Gelyke produkte</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('x₁')} × ${re('y₁')} = ${gr('x₂')} × ${re('y₂')}</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omgekeerde proporsie-probleme oplos</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vind die konstante')} — Vermenigvuldig die eerste paar waardes: ${bl('k')} = x₁ × y₁.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Stel die vergelyking op')} — Skryf ${bl('k')} = ${gr('x₂')} × ${re('y₂')}, deur die ${bl('konstante')} en die ${gr('nuwe hoeveelheid')} te vervang.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Los op')} — Deel die ${bl('konstante')} deur die ${gr('nuwe hoeveelheid')} om die ${re('ontbrekende waarde')} te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Direkte proporsie</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Soos die een hoeveelheid toeneem, ${gr('neem')} die ander teen dieselfde koers ${gr('toe')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Verhouding bly konstant: x₁/y₁ = x₂/y₂</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Omgekeerde proporsie</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Soos die een hoeveelheid toeneem, ${re('neem')} die ander teen ʼn verwante koers ${re('af')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Produk bly konstant: x₁ × y₁ = x₂ × y₂</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Sleuteltoets vir omgekeerde proporsie</p>` +
        `<p style="margin:0;color:#14532d;">As jy een hoeveelheid verdubbel en die ander ${re('halveer')}, het jy omgekeerde proporsie. Die ${bl('produk')} van die twee hoeveelhede is altyd dieselfde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '5 werkers kan ʼn taak in 12 dae voltooi. Hoeveel dae sal 8 werkers neem, met die aanname van omgekeerde proporsie?',
          answer: `8 werkers neem ${gr('7,5')} dae — die ${bl('konstante produk')} is ${bl('60')}`,
          steps: [
            `<strong>Vind die konstante:</strong> ${bl('k')} = x₁ × y₁ = ${bl('5')} × 12 = ${bl('60')}. Dit is die totale hoeveelheid werk.`,
            `<strong>Stel op:</strong> ${bl('60')} = ${gr('8')} × ${re('y₂')}`,
            `${re('y₂')} = ${bl('60')} ÷ ${gr('8')} = ${gr('7,5')} dae`,
            `<strong>Antwoord:</strong> 8 werkers neem ${gr('7,5')} dae ✓`,
          ],
        },
        {
          question: "Lerato se motor ry teen 80 km/h en neem 6 uur vir ʼn reis. As sy teen 100 km/h ry, hoe lank sal dieselfde reis neem?",
          answer: `Teen 100 km/h neem die reis ${gr('4,8')} uur — die ${bl('konstante')} (afstand) is ${bl('480')} km`,
          steps: [
            `<strong>Vind die konstante:</strong> ${bl('afstand')} = spoed × tyd = ${bl('80')} × 6 = ${bl('480')} km.`,
            `<strong>Stel op:</strong> ${bl('480')} = ${gr('100')} × ${re('y₂')}`,
            `${re('y₂')} = ${bl('480')} ÷ ${gr('100')} = ${gr('4,8')} uur`,
            `<strong>Antwoord:</strong> Teen 100 km/h neem die reis ${gr('4,8')} uur ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: '6 werkers voltooi ʼn taak in 10 dae. Hoeveel dae sal 15 werkers neem, met die aanname van omgekeerde proporsie?',
          answer: '4 dae',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 dae'],
          explanation: 'x₁y₁ = x₂y₂.\n6 × 10 = 15 × y₂.\n60 = 15y₂.\ny₂ = 60 ÷ 15 = 4 dae ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Motor ry teen 60 km/h en neem 5 uur vir ʼn reis. Vind die tyd geneem as dit teen 75 km/h ry.',
          answer: '4 uur',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 uur'],
          explanation: 'x₁y₁ = x₂y₂.\n60 × 5 = 75 × y₂.\n300 = 75y₂.\ny₂ = 300 ÷ 75 = 4 uur ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo sê omgekeerde proporsie beteken soos een hoeveelheid verdubbel, verdubbel die ander ook. Is hy korrek? Verduidelik.',
          answer: 'Nee — in omgekeerde proporsie, soos een hoeveelheid verdubbel, halveer die ander, aangesien hul produk konstant bly.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify and solve inverse proportion problems using the constant product method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing direct and inverse proportion with tables and graphs — straight line through origin for direct, curve for inverse" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING FINANCIAL PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'financial-problems',
      title: 'Finansiële Probleme Oplos — Kommissie, Huur en Saamgestelde Rente',
      icon: 'R',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei finansiële probleemoplossing uit om <strong>kommissie</strong> (ʼn persentasie verdien op verkope), <strong>huur</strong> (gereelde betalings vir die gebruik van iets), en <strong>saamgestelde rente</strong> in te sluit, waar rente bereken word op die groeiende totaal (hoofsom plus vorige rente) eerder as net die oorspronklike bedrag.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kommissie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('huur')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('saamgestelde rente')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie finansiële begrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kommissie</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">ʼn Persentasie van totale verkope verdien as betaling.</p>` +
        `<p style="color:#1e40af;font-size:13px;font-weight:600;margin:0;">Kommissie = koers% × totale verkope</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Huur</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">ʼn Vaste koers gereeld betaal vir die gebruik van ʼn item of eiendom.</p>` +
        `<p style="color:#c2410c;font-size:13px;font-weight:600;margin:0;">Totale huur = koers × aantal tydperke</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Saamgestelde Rente</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Rente bereken op die groeiende totaal elke tydperk.</p>` +
        `<p style="color:#15803d;font-size:13px;font-weight:600;margin:0;">Bedrag = P × (1 + i)ⁿ</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Saamgestelde rente stap vir stap</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0 0 10px;font-size:14px;">Vermenigvuldig die ${gr('groeiende totaal')} met (1 + i) elke jaar, waar i die rentekoers as ʼn desimaal is:</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Begin</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.2em;">→</div>` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Jaar 1</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')} × (1+i)</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.2em;">→</div>` +
        `<div style="text-align:center;min-width:100px;padding:8px 12px;background:white;border:1.5px solid #bbf7d0;border-radius:8px;">` +
        `<p style="font-size:0.7em;font-weight:700;color:#6b7280;text-transform:uppercase;margin-bottom:2px;">Jaar 2</p>` +
        `<p style="font-size:1em;font-weight:700;margin:0;">${gr('P')} × (1+i)²</p>` +
        `</div>` +
        `</div>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Enkelvoudige teenoor saamgestelde rente</p>` +
        `<p style="margin:0;color:#14532d;">Enkelvoudige rente word altyd bereken op slegs die oorspronklike hoofsom, sodat die rente wat elke jaar verdien word dieselfde is. ${gr('Saamgestelde rente')} word bereken op die groeiende totaal, sodat dit met verloop van tyd meer verdien — veral oor baie jare.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo verdien ʼn kommissie van 5% op verkope van R24 000. Vind sy kommissie.',
          answer: `Kommissie = ${bl('R1 200')}`,
          steps: [
            `${bl('Kommissie')} = koers% × totale verkope`,
            `= 5% × 24 000`,
            `= 0,05 × 24 000`,
            `= ${bl('R1 200')} ✓`,
          ],
        },
        {
          question: 'Amahle huur toerusting vir R350 per week. Vind die totale huurkoste vir 6 weke.',
          answer: `Totale huur = ${or('R2 100')}`,
          steps: [
            `${or('Totale huur')} = koers × aantal tydperke`,
            `= R350 × 6`,
            `= ${or('R2 100')} ✓`,
          ],
        },
        {
          question: 'Sipho belê R5 000 teen 8% saamgestelde rente per jaar. Vind die bedrag na 2 jaar.',
          answer: `Bedrag na 2 jaar = ${gr('R5 832')}`,
          steps: [
            `Na jaar 1: 5 000 × 1,08 = ${gr('R5 400')}`,
            `Na jaar 2: ${gr('5 400')} × 1,08 = ${gr('R5 832')}`,
            `<strong>Antwoord:</strong> Bedrag na 2 jaar = ${gr('R5 832')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Amahle verdien ʼn kommissie van 6% op verkope van R18 000. Vind haar kommissie.',
          answer: 'R1 080',
          checkMode: 'auto',
          correctAnswer: 'R1080',
          correctAnswers: ['R1080', '1080', 'R1 080', '1 080'],
          explanation: 'Kommissie = 6% × 18 000 = 0,06 × 18 000 = R1 080 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Sipho huur ʼn motor vir R420 per dag. Vind die totale koste vir 5 dae.',
          answer: 'R2 100',
          checkMode: 'auto',
          correctAnswer: 'R2100',
          correctAnswers: ['R2100', '2100', 'R2 100', '2 100'],
          explanation: 'Totale koste = R420 × 5 = R2 100 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Lerato belê R4 000 teen 6% saamgestelde rente per jaar. Vind die bedrag na 2 jaar.',
          answer: 'R4 494,40',
          checkMode: 'auto',
          correctAnswer: 'R4494.40',
          correctAnswers: ['R4494.40', '4494.40', 'R4 494.40', 'R4494,40'],
          explanation: 'Na jaar 1: 4 000 × 1,06 = 4 240.\nNa jaar 2: 4 240 × 1,06 = 4 494,40.\nBedrag = R4 494,40 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo belê R6 000 teen 10% saamgestelde rente per jaar vir 3 jaar. Vind die finale bedrag.',
          answer: 'Jaar 1: 6 000 × 1,1 = 6 600.\nJaar 2: 6 600 × 1,1 = 7 260.\nJaar 3: 7 260 × 1,1 = 7 986.\nFinale bedrag = R7 986.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Verkoopspersoon verdien 8% kommissie op verkope van R32 000. Vind die kommissie verdien.',
          answer: 'R2 560',
          checkMode: 'auto',
          correctAnswer: 'R2560',
          correctAnswers: ['R2560', '2560', 'R2 560', '2 560'],
          explanation: 'Kommissie = 8% × 32 000 = 0,08 × 32 000 = R2 560 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê saamgestelde rente verdien altyd meer as enkelvoudige rente oor dieselfde tydperk. Is sy korrek? Verduidelik.',
          answer: 'Ja — saamgestelde rente verdien ook rente op voorheen verdiende rente, sodat dit vinniger groei as enkelvoudige rente, wat slegs rente op die oorspronklike hoofsom bereken.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: '8 krane vul ʼn tenk in 6 uur. Hoe lank sal 12 krane neem, met die aanname van omgekeerde proporsie?',
          answer: '4 uur',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4 uur'],
          explanation: 'x₁y₁ = x₂y₂.\n8 × 6 = 12 × y₂.\n48 = 12y₂.\ny₂ = 48 ÷ 12 = 4 uur ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho vergelyk enkelvoudige en saamgestelde rente op R5 000 teen 8% vir 2 jaar. Vind die verskil tussen die twee metodes.',
          answer: 'Enkelvoudige rente: 5 000 × 0,08 × 2 = 800. Totaal = 5 800.\nSaamgestelde rente: 5 000 × 1,08² = 5 832.\nVerskil = 5 832 − 5 800 = R32.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Huurmaatskappy vra R280 per week vir die eerste 4 weke, en bied dan ʼn korting van 10% op weeklikse koerse vir enige addisionele weke. Vind die totale koste vir 7 weke.',
          answer: 'Eerste 4 weke: 280 × 4 = 1 120.\nVerdiskonteerde koers = 280 × 0,9 = 252.\nAddisionele 3 weke: 252 × 3 = 756.\nTotaal = 1 120 + 756 = R1 876.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate commission, total rental costs and compound interest step by step with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing simple interest (constant growth) and compound interest (growing total each year) over multiple years" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het verhouding, koers en proporsie bemeester.' },
    { minScore: 11, message: 'Puik werk! Jy het ʼn sterk begrip van verhouding, koers en proporsie. Hersien enige gemiste vrae en jy sal dit perfek onder die knie hê.' },
    { minScore: 8, message: 'Goeie poging! Hersien die afdelings en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
  ],
}
