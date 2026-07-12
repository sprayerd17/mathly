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
        '<VideoPlaceholder label="Kort video wat wys hoe om direkte eweredigheidsprobleme op te stel en op te los met behulp van gelyke verhoudings en kruisvermenigvuldiging" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee hoeveelhede in direkte eweredigheid wys, met ʼn tabel van waardes en ʼn reguitlyngrafiek deur die oorsprong" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om omgekeerde eweredigheidsprobleme te identifiseer en op te los met behulp van die konstante-produk-metode" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat direkte en omgekeerde eweredigheid vergelyk met tabelle en grafieke — reguit lyn deur die oorsprong vir direk, kromme vir omgekeerd" />',
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
          correctAnswer: 'R4494,40',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om kommissie, totale huurkoste en saamgestelde rente stap vir stap te bereken met uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat enkelvoudige rente (konstante groei) en saamgestelde rente (groeiende totaal elke jaar) oor verskeie jare vergelyk" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het verhouding, koers en proporsie bemeester.' },
    { minScore: 11, message: 'Puik werk! Jy het ʼn sterk begrip van verhouding, koers en proporsie. Hersien enige gemiste vrae en jy sal dit perfek onder die knie hê.' },
    { minScore: 8, message: 'Goeie poging! Hersien die afdelings en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids afdeling vir afdeling, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae) — geen diagramme nie, suiwer woordprobleem/numeriese inhoud
    // Blok 1 (0-2):   Verhoudings tot eenvoudigste vorm vereenvoudig
    // Blok 2 (3-6):   ʼn Bedrag in ʼn gegewe verhouding verdeel
    // Blok 3 (7-10):  Direkte proporsie woordprobleme
    // Blok 4 (11-13): Indirekte (omgekeerde) proporsie woordprobleme
    // Blok 5 (14-16): Koersprobleme (eenheidskoers, spoed/afstand/tyd)
    // Blok 6 (17-19): Skaal/kaart-probleme en ʼn gekombineerde multi-stap probleem
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 24 : 36 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'GGF van 24 en 36 is 12.\n24 ÷ 12 = 2 en 36 ÷ 12 = 3.\nEenvoudigste vorm: 2 : 3' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 18 : 42 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '3:7', correctAnswers: ['3:7', '3 : 7'], answer: '3 : 7', explanation: 'GGF van 18 en 42 is 6.\n18 ÷ 6 = 3 en 42 ÷ 6 = 7.\nEenvoudigste vorm: 3 : 7' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 150 : 90 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '5:3', correctAnswers: ['5:3', '5 : 3'], answer: '5 : 3', explanation: 'GGF van 150 en 90 is 30.\n150 ÷ 30 = 5 en 90 ÷ 30 = 3.\nEenvoudigste vorm: 5 : 3' },

        // Blok 2 — ʼn Bedrag in ʼn gegewe verhouding verdeel (Medium)
        { difficulty: 'Medium', question: 'Verdeel R360 tussen Thabo en Lerato in die verhouding 4 : 5. Vind Thabo se deel.', checkMode: 'auto', correctAnswer: 'R160', correctAnswers: ['R160', '160'], answer: 'R160', explanation: 'Totale dele = 4 + 5 = 9.\nWaarde van 1 deel = 360 ÷ 9 = R40.\nThabo se deel = 4 × R40 = R160' },
        { difficulty: 'Medium', question: 'Verdeel R600 tussen drie vriende in die verhouding 2 : 3 : 5. Vind die grootste deel.', checkMode: 'auto', correctAnswer: 'R300', correctAnswers: ['R300', '300'], answer: 'R300', explanation: 'Totale dele = 2 + 3 + 5 = 10.\nWaarde van 1 deel = 600 ÷ 10 = R60.\nGrootste deel = 5 × R60 = R300' },
        { difficulty: 'Medium', question: 'Verdeel R200 tussen Sipho en Amahle in die verhouding 3 : 5. Vind Amahle se deel.', checkMode: 'auto', correctAnswer: 'R125', correctAnswers: ['R125', '125'], answer: 'R125', explanation: 'Totale dele = 3 + 5 = 8.\nWaarde van 1 deel = 200 ÷ 8 = R25.\nAmahle se deel = 5 × R25 = R125' },
        { difficulty: 'Medium', question: 'ʼn Klas van 40 leerders word in twee groepe verdeel in die verhouding seuns tot meisies van 3 : 5. Hoeveel meisies is in die klas?', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 meisies'], answer: '25', explanation: 'Totale dele = 3 + 5 = 8.\nWaarde van 1 deel = 40 ÷ 8 = 5.\nMeisies = 5 × 5 = 25' },

        // Blok 3 — Direkte proporsie woordprobleme (Medium/Hard)
        { difficulty: 'Medium', question: 'As 5 kg rys R85 kos, vind die koste van 8 kg deur direkte proporsie te gebruik.', checkMode: 'auto', correctAnswer: 'R136', correctAnswers: ['R136', '136'], answer: 'R136', explanation: 'Stel gelyke verhoudings op: 5/85 = 8/x.\nKruisvermenigvuldig: 5x = 8 × 85 = 680.\nx = 680 ÷ 5 = 136.\nKoste = R136 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool koop 12 handboeke vir R540. Gebruik direkte proporsie om die koste van 20 handboeke te vind.', checkMode: 'auto', correctAnswer: 'R900', correctAnswers: ['R900', '900'], answer: 'R900', explanation: 'Stel gelyke verhoudings op: 12/540 = 20/x.\nKruisvermenigvuldig: 12x = 20 × 540 = 10 800.\nx = 10 800 ÷ 12 = 900.\nKoste = R900 ✓' },
        { difficulty: 'Hard', question: 'Die wisselkoers is 6 Amerikaanse dollar vir R114. Gebruik direkte proporsie om te vind hoeveel rand 15 Amerikaanse dollar werd is.', checkMode: 'auto', correctAnswer: 'R285', correctAnswers: ['R285', '285'], answer: 'R285', explanation: 'Stel gelyke verhoudings op: 6/114 = 15/x.\nKruisvermenigvuldig: 6x = 15 × 114 = 1 710.\nx = 1 710 ÷ 6 = 285.\nWaarde = R285 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 400 g meel vir elke 250 ml melk. Gebruik direkte proporsie om te vind hoeveel meel benodig word vir 625 ml melk.', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1 000g', '1 000 g', '1kg', '1 kg'], answer: '1 000 g', explanation: 'Stel gelyke verhoudings op: 250/400 = 625/x.\nKruisvermenigvuldig: 250x = 625 × 400 = 250 000.\nx = 250 000 ÷ 250 = 1 000.\nMeel benodig = 1 000 g ✓' },

        // Blok 4 — Indirekte (omgekeerde) proporsie woordprobleme (Hard)
        { difficulty: 'Hard', question: '4 werkers kan ʼn muur in 18 dae bou. Hoeveel dae sal 6 werkers neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 dae'], answer: '12 dae', explanation: 'x₁y₁ = x₂y₂.\n4 × 18 = 6 × y₂.\n72 = 6y₂.\ny₂ = 72 ÷ 6 = 12 dae ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen 90 km/h en neem 4 uur vir ʼn reis. Vind die tyd geneem as dit teen 60 km/h ry.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 uur'], answer: '6 uur', explanation: 'x₁y₁ = x₂y₂.\n90 × 4 = 60 × y₂.\n360 = 60y₂.\ny₂ = 360 ÷ 60 = 6 uur ✓' },
        { difficulty: 'Hard', question: '10 krane vul ʼn tenk in 8 uur. Hoe lank sal 16 krane neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 uur'], answer: '5 uur', explanation: 'x₁y₁ = x₂y₂.\n10 × 8 = 16 × y₂.\n80 = 16y₂.\ny₂ = 80 ÷ 16 = 5 uur ✓' },

        // Blok 5 — Koersprobleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Winkel verkoop 12 identiese items vir R156. Vind die prys van een item (die eenheidskoers).', checkMode: 'auto', correctAnswer: 'R13', correctAnswers: ['R13', '13'], answer: 'R13', explanation: 'Eenheidskoers = totale koste ÷ aantal items.\n156 ÷ 12 = 13.\nPrys per item = R13 ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen ʼn konstante spoed van 72 km/h vir 3,5 uur. Vind die afstand afgelê.', checkMode: 'auto', correctAnswer: '252', correctAnswers: ['252', '252km', '252 km'], answer: '252 km', explanation: 'Afstand = spoed × tyd.\nAfstand = 72 × 3,5 = 252 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tik 210 woorde in 3,5 minute teen ʼn konstante tempo. Hoe lank sal dit neem om 480 woorde teen dieselfde tempo te tik?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 minute'], answer: '8 minute', explanation: 'Tempo = 210 ÷ 3,5 = 60 woorde per minuut.\nTyd vir 480 woorde = 480 ÷ 60 = 8 minute ✓' },

        // Blok 6 — Skaal/kaart-probleme en gekombineerde multi-stap (Hard)
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 50 000. Die afstand tussen twee dorpe op die kaart is 6 cm. Vind die werklike afstand in km.', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3km', '3 km'], answer: '3 km', explanation: 'Werklike afstand = 6 × 50 000 = 300 000 cm.\nSkakel om na km: 300 000 ÷ 100 000 = 3 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 20 000. Twee landmerke is 3 km uit mekaar in werklikheid. Vind die afstand tussen hulle op die kaart, in cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'Skakel 3 km om na cm: 3 × 100 000 = 300 000 cm.\nKaartafstand = 300 000 ÷ 20 000 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'Sement, sand en klip word in die verhouding 1 : 2 : 3 gemeng om 240 kg beton te maak. Vind die massa sand benodig. As die werk opgeskaal word na 3 keer die lotgrootte, vind die nuwe massa sand benodig.', answer: 'Totale dele = 1 + 2 + 3 = 6.\nWaarde van 1 deel = 240 ÷ 6 = 40 kg.\nSand (2 dele) = 2 × 40 = 80 kg.\nOpgeskaalde totaal = 240 × 3 = 720 kg, so sand skaal op dieselfde manier: 80 × 3 = 240 kg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhouding, verdeling, proporsie, koers en skaal-probleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor omgekeerde proporsie of skaal na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor direkte en indirekte proporsie weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 28 : 42 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'GGF van 28 en 42 is 14.\n28 ÷ 14 = 2 en 42 ÷ 14 = 3.\nEenvoudigste vorm: 2 : 3' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 20 : 45 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '4:9', correctAnswers: ['4:9', '4 : 9'], answer: '4 : 9', explanation: 'GGF van 20 en 45 is 5.\n20 ÷ 5 = 4 en 45 ÷ 5 = 9.\nEenvoudigste vorm: 4 : 9' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 126 : 84 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2', '3 : 2'], answer: '3 : 2', explanation: 'GGF van 126 en 84 is 42.\n126 ÷ 42 = 3 en 84 ÷ 42 = 2.\nEenvoudigste vorm: 3 : 2' },

        // Blok 2 — ʼn Bedrag in ʼn gegewe verhouding verdeel (Medium)
        { difficulty: 'Medium', question: 'Verdeel R280 tussen Sipho en Naledi in die verhouding 3 : 4. Vind Sipho se deel.', checkMode: 'auto', correctAnswer: 'R120', correctAnswers: ['R120', '120'], answer: 'R120', explanation: 'Totale dele = 3 + 4 = 7.\nWaarde van 1 deel = 280 ÷ 7 = R40.\nSipho se deel = 3 × R40 = R120' },
        { difficulty: 'Medium', question: 'Verdeel R450 tussen drie liefdadigheidsorganisasies in die verhouding 1 : 2 : 2. Vind die waarde van elk van die twee gelyke (groter) dele.', checkMode: 'auto', correctAnswer: 'R180', correctAnswers: ['R180', '180'], answer: 'R180', explanation: 'Totale dele = 1 + 2 + 2 = 5.\nWaarde van 1 deel = 450 ÷ 5 = R90.\nElke groter deel = 2 × R90 = R180' },
        { difficulty: 'Medium', question: 'Verdeel R336 tussen Buhle en Kagiso in die verhouding 4 : 3. Vind Buhle se deel.', checkMode: 'auto', correctAnswer: 'R192', correctAnswers: ['R192', '192'], answer: 'R192', explanation: 'Totale dele = 4 + 3 = 7.\nWaarde van 1 deel = 336 ÷ 7 = R48.\nBuhle se deel = 4 × R48 = R192' },
        { difficulty: 'Medium', question: 'ʼn Plaas het 1 050 hoenders en eende in die verhouding 3 : 4. Hoeveel eende is op die plaas?', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '600 eende'], answer: '600', explanation: 'Totale dele = 3 + 4 = 7.\nWaarde van 1 deel = 1 050 ÷ 7 = 150.\nEende = 4 × 150 = 600' },

        // Blok 3 — Direkte proporsie woordprobleme (Medium/Hard)
        { difficulty: 'Medium', question: 'As 4 kg rys R76 kos, vind die koste van 9 kg deur direkte proporsie te gebruik.', checkMode: 'auto', correctAnswer: 'R171', correctAnswers: ['R171', '171'], answer: 'R171', explanation: 'Stel gelyke verhoudings op: 4/76 = 9/x.\nKruisvermenigvuldig: 4x = 9 × 76 = 684.\nx = 684 ÷ 4 = 171.\nKoste = R171 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool koop 15 handboeke vir R675. Gebruik direkte proporsie om die koste van 24 handboeke te vind.', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', '1 080'], answer: 'R1 080', explanation: 'Stel gelyke verhoudings op: 15/675 = 24/x.\nKruisvermenigvuldig: 15x = 24 × 675 = 16 200.\nx = 16 200 ÷ 15 = 1 080.\nKoste = R1 080 ✓' },
        { difficulty: 'Hard', question: 'Die wisselkoers is 8 Amerikaanse dollar vir R152. Gebruik direkte proporsie om te vind hoeveel rand 20 Amerikaanse dollar werd is.', checkMode: 'auto', correctAnswer: 'R380', correctAnswers: ['R380', '380'], answer: 'R380', explanation: 'Stel gelyke verhoudings op: 8/152 = 20/x.\nKruisvermenigvuldig: 8x = 20 × 152 = 3 040.\nx = 3 040 ÷ 8 = 380.\nWaarde = R380 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 480 g meel vir elke 300 ml melk. Gebruik direkte proporsie om te vind hoeveel meel benodig word vir 750 ml melk.', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1 200g', '1 200 g', '1,2kg'], answer: '1 200 g', explanation: 'Stel gelyke verhoudings op: 300/480 = 750/x.\nKruisvermenigvuldig: 300x = 750 × 480 = 360 000.\nx = 360 000 ÷ 300 = 1 200.\nMeel benodig = 1 200 g ✓' },

        // Blok 4 — Indirekte (omgekeerde) proporsie woordprobleme (Hard)
        { difficulty: 'Hard', question: '6 werkers kan ʼn muur in 15 dae bou. Hoeveel dae sal 9 werkers neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 dae'], answer: '10 dae', explanation: 'x₁y₁ = x₂y₂.\n6 × 15 = 9 × y₂.\n90 = 9y₂.\ny₂ = 90 ÷ 9 = 10 dae ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen 80 km/h en neem 6 uur vir ʼn reis. Vind die tyd geneem as dit teen 96 km/h ry.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 uur'], answer: '5 uur', explanation: 'x₁y₁ = x₂y₂.\n80 × 6 = 96 × y₂.\n480 = 96y₂.\ny₂ = 480 ÷ 96 = 5 uur ✓' },
        { difficulty: 'Hard', question: '12 krane vul ʼn tenk in 9 uur. Hoe lank sal 18 krane neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 uur'], answer: '6 uur', explanation: 'x₁y₁ = x₂y₂.\n12 × 9 = 18 × y₂.\n108 = 18y₂.\ny₂ = 108 ÷ 18 = 6 uur ✓' },

        // Blok 5 — Koersprobleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Winkel verkoop 12 identiese items vir R204. Vind die prys van een item (die eenheidskoers).', checkMode: 'auto', correctAnswer: 'R17', correctAnswers: ['R17', '17'], answer: 'R17', explanation: 'Eenheidskoers = totale koste ÷ aantal items.\n204 ÷ 12 = 17.\nPrys per item = R17 ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen ʼn konstante spoed van 84 km/h vir 2,5 uur. Vind die afstand afgelê.', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210km', '210 km'], answer: '210 km', explanation: 'Afstand = spoed × tyd.\nAfstand = 84 × 2,5 = 210 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tik 180 woorde in 3 minute teen ʼn konstante tempo. Hoe lank sal dit neem om 420 woorde teen dieselfde tempo te tik?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 minute'], answer: '7 minute', explanation: 'Tempo = 180 ÷ 3 = 60 woorde per minuut.\nTyd vir 420 woorde = 420 ÷ 60 = 7 minute ✓' },

        // Blok 6 — Skaal/kaart-probleme en gekombineerde multi-stap (Hard)
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 25 000. Die afstand tussen twee dorpe op die kaart is 8 cm. Vind die werklike afstand in km.', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2km', '2 km'], answer: '2 km', explanation: 'Werklike afstand = 8 × 25 000 = 200 000 cm.\nSkakel om na km: 200 000 ÷ 100 000 = 2 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 40 000. Twee landmerke is 6 km uit mekaar in werklikheid. Vind die afstand tussen hulle op die kaart, in cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: 'Skakel 6 km om na cm: 6 × 100 000 = 600 000 cm.\nKaartafstand = 600 000 ÷ 40 000 = 15 cm ✓' },
        { difficulty: 'Hard', question: 'Rooi, blou en geel verf word in die verhouding 2 : 3 : 5 gemeng om 300 L van ʼn spesiale kleur te maak. Vind die volume blou verf benodig. As die lot opgeskaal word na 2 keer die grootte, vind die nuwe volume blou verf benodig.', answer: 'Totale dele = 2 + 3 + 5 = 10.\nWaarde van 1 deel = 300 ÷ 10 = 30 L.\nBlou verf (3 dele) = 3 × 30 = 90 L.\nOpgeskaalde totaal = 300 × 2 = 600 L, so blou verf skaal op dieselfde manier: 90 × 2 = 180 L.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhouding, verdeling, proporsie, koers en skaal-probleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor omgekeerde proporsie of skaal na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor direkte en indirekte proporsie weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig (Easy)
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 32 : 48 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '2:3', correctAnswers: ['2:3', '2 : 3'], answer: '2 : 3', explanation: 'GGF van 32 en 48 is 16.\n32 ÷ 16 = 2 en 48 ÷ 16 = 3.\nEenvoudigste vorm: 2 : 3' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 27 : 63 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '3:7', correctAnswers: ['3:7', '3 : 7'], answer: '3 : 7', explanation: 'GGF van 27 en 63 is 9.\n27 ÷ 9 = 3 en 63 ÷ 9 = 7.\nEenvoudigste vorm: 3 : 7' },
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 180 : 120 tot sy eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2', '3 : 2'], answer: '3 : 2', explanation: 'GGF van 180 en 120 is 60.\n180 ÷ 60 = 3 en 120 ÷ 60 = 2.\nEenvoudigste vorm: 3 : 2' },

        // Blok 2 — ʼn Bedrag in ʼn gegewe verhouding verdeel (Medium)
        { difficulty: 'Medium', question: 'Verdeel R420 tussen Amahle en Thabo in die verhouding 5 : 7. Vind Amahle se deel.', checkMode: 'auto', correctAnswer: 'R175', correctAnswers: ['R175', '175'], answer: 'R175', explanation: 'Totale dele = 5 + 7 = 12.\nWaarde van 1 deel = 420 ÷ 12 = R35.\nAmahle se deel = 5 × R35 = R175' },
        { difficulty: 'Medium', question: 'Verdeel R360 tussen drie neefs/niggies in die verhouding 2 : 3 : 4. Vind die kleinste deel.', checkMode: 'auto', correctAnswer: 'R80', correctAnswers: ['R80', '80'], answer: 'R80', explanation: 'Totale dele = 2 + 3 + 4 = 9.\nWaarde van 1 deel = 360 ÷ 9 = R40.\nKleinste deel = 2 × R40 = R80' },
        { difficulty: 'Medium', question: 'Verdeel R440 tussen Lerato en Sipho in die verhouding 3 : 8. Vind Sipho se deel.', checkMode: 'auto', correctAnswer: 'R320', correctAnswers: ['R320', '320'], answer: 'R320', explanation: 'Totale dele = 3 + 8 = 11.\nWaarde van 1 deel = 440 ÷ 11 = R40.\nSipho se deel = 8 × R40 = R320' },
        { difficulty: 'Medium', question: 'ʼn Tuin het 725 rosebosse en struike in die verhouding 3 : 2. Hoeveel rosebosse is daar?', checkMode: 'auto', correctAnswer: '435', correctAnswers: ['435', '435 rosebosse'], answer: '435', explanation: 'Totale dele = 3 + 2 = 5.\nWaarde van 1 deel = 725 ÷ 5 = 145.\nRosebosse = 3 × 145 = 435' },

        // Blok 3 — Direkte proporsie woordprobleme (Medium/Hard)
        { difficulty: 'Medium', question: 'As 6 kg rys R108 kos, vind die koste van 10 kg deur direkte proporsie te gebruik.', checkMode: 'auto', correctAnswer: 'R180', correctAnswers: ['R180', '180'], answer: 'R180', explanation: 'Stel gelyke verhoudings op: 6/108 = 10/x.\nKruisvermenigvuldig: 6x = 10 × 108 = 1 080.\nx = 1 080 ÷ 6 = 180.\nKoste = R180 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool koop 18 handboeke vir R720. Gebruik direkte proporsie om die koste van 25 handboeke te vind.', checkMode: 'auto', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], answer: 'R1 000', explanation: 'Stel gelyke verhoudings op: 18/720 = 25/x.\nKruisvermenigvuldig: 18x = 25 × 720 = 18 000.\nx = 18 000 ÷ 18 = 1 000.\nKoste = R1 000 ✓' },
        { difficulty: 'Hard', question: 'Die wisselkoers is 5 Amerikaanse dollar vir R95. Gebruik direkte proporsie om te vind hoeveel rand 18 Amerikaanse dollar werd is.', checkMode: 'auto', correctAnswer: 'R342', correctAnswers: ['R342', '342'], answer: 'R342', explanation: 'Stel gelyke verhoudings op: 5/95 = 18/x.\nKruisvermenigvuldig: 5x = 18 × 95 = 1 710.\nx = 1 710 ÷ 5 = 342.\nWaarde = R342 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep gebruik 320 g meel vir elke 200 ml melk. Gebruik direkte proporsie om te vind hoeveel meel benodig word vir 550 ml melk.', checkMode: 'auto', correctAnswer: '880g', correctAnswers: ['880g', '880', '880 g'], answer: '880 g', explanation: 'Stel gelyke verhoudings op: 200/320 = 550/x.\nKruisvermenigvuldig: 200x = 550 × 320 = 176 000.\nx = 176 000 ÷ 200 = 880.\nMeel benodig = 880 g ✓' },

        // Blok 4 — Indirekte (omgekeerde) proporsie woordprobleme (Hard)
        { difficulty: 'Hard', question: '8 werkers kan ʼn muur in 21 dae bou. Hoeveel dae sal 12 werkers neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14 dae'], answer: '14 dae', explanation: 'x₁y₁ = x₂y₂.\n8 × 21 = 12 × y₂.\n168 = 12y₂.\ny₂ = 168 ÷ 12 = 14 dae ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen 75 km/h en neem 8 uur vir ʼn reis. Vind die tyd geneem as dit teen 60 km/h ry.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 uur'], answer: '10 uur', explanation: 'x₁y₁ = x₂y₂.\n75 × 8 = 60 × y₂.\n600 = 60y₂.\ny₂ = 600 ÷ 60 = 10 uur ✓' },
        { difficulty: 'Hard', question: '15 krane vul ʼn tenk in 6 uur. Hoe lank sal 9 krane neem, met die aanname van omgekeerde proporsie?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 uur'], answer: '10 uur', explanation: 'x₁y₁ = x₂y₂.\n15 × 6 = 9 × y₂.\n90 = 9y₂.\ny₂ = 90 ÷ 9 = 10 uur ✓' },

        // Blok 5 — Koersprobleme (Hard)
        { difficulty: 'Hard', question: 'ʼn Winkel verkoop 15 identiese items vir R270. Vind die prys van een item (die eenheidskoers).', checkMode: 'auto', correctAnswer: 'R18', correctAnswers: ['R18', '18'], answer: 'R18', explanation: 'Eenheidskoers = totale koste ÷ aantal items.\n270 ÷ 15 = 18.\nPrys per item = R18 ✓' },
        { difficulty: 'Hard', question: 'ʼn Motor ry teen ʼn konstante spoed van 96 km/h vir 1,75 uur. Vind die afstand afgelê.', checkMode: 'auto', correctAnswer: '168', correctAnswers: ['168', '168km', '168 km'], answer: '168 km', explanation: 'Afstand = spoed × tyd.\nAfstand = 96 × 1,75 = 168 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder tik 240 woorde in 4 minute teen ʼn konstante tempo. Hoe lank sal dit neem om 540 woorde teen dieselfde tempo te tik?', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 minute'], answer: '9 minute', explanation: 'Tempo = 240 ÷ 4 = 60 woorde per minuut.\nTyd vir 540 woorde = 540 ÷ 60 = 9 minute ✓' },

        // Blok 6 — Skaal/kaart-probleme en gekombineerde multi-stap (Hard)
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 200 000. Die afstand tussen twee dorpe op die kaart is 4,5 cm. Vind die werklike afstand in km.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9km', '9 km'], answer: '9 km', explanation: 'Werklike afstand = 4,5 × 200 000 = 900 000 cm.\nSkakel om na km: 900 000 ÷ 100 000 = 9 km ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart het ʼn skaal van 1 : 100 000. Twee landmerke is 8 km uit mekaar in werklikheid. Vind die afstand tussen hulle op die kaart, in cm.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'Skakel 8 km om na cm: 8 × 100 000 = 800 000 cm.\nKaartafstand = 800 000 ÷ 100 000 = 8 cm ✓' },
        { difficulty: 'Hard', question: 'Lemoen-, appel- en mangosap word in die verhouding 3 : 4 : 5 gemeng om 360 L van ʼn vrugtemengsel te maak. Vind die volume appelsap benodig. As die lot opgeskaal word na 4 keer die grootte, vind die nuwe volume appelsap benodig.', answer: 'Totale dele = 3 + 4 + 5 = 12.\nWaarde van 1 deel = 360 ÷ 12 = 30 L.\nAppelsap (4 dele) = 4 × 30 = 120 L.\nOpgeskaalde totaal = 360 × 4 = 1 440 L, so appelsap skaal op dieselfde manier: 120 × 4 = 480 L.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhouding, verdeling, proporsie, koers en skaal-probleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor omgekeerde proporsie of skaal na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor direkte en indirekte proporsie weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
