import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (ratio-and-rate roles) ────────────────────────────────────
// Section 1 – Ratio:      first quantity → blue   second quantity → red
//                         total parts   → orange  shares         → green
// Section 2 – Rate:       distance      → blue    time           → orange
//                         rate          → green   comparison     → red
// Section 3 – Proportion: known ratio   → blue    unknown value  → red
//                         cross mult.   → orange
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Verhouding en Koers',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — RATIO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ratio',
      title: 'Verhouding',
      icon: ':',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Verhouding vergelyk twee of meer hoeveelhede van <strong>dieselfde soort</strong>. In Graad 7 vereenvoudig ons verhoudings, vind ekwivalente verhoudings en verdeel bedrae volgens ʼn gegewe verhouding. Ons los ook probleme op met verhoudings van drie of meer dele en vergelyk verhoudings deur hulle met ʼn gemeenskaplike term te skryf.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede hoeveelheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totale dele')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aandele')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">ʼn Verhouding vereenvoudig</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel altwee terme deur hul grootste gemene faktor (GGF) totdat geen gemene faktor oorbly nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Verdeel volgens ʼn verhouding</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die totale aantal dele, bereken een deel, en vermenigvuldig dan met elke verhoudingsgetal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Ekwivalente verhoudings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig of deel altwee terme met dieselfde getal om ʼn ekwivalente verhouding te skep.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Verhoudings vergelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skryf altwee verhoudings met dieselfde eerste term deur ekwivalente verhoudings te gebruik, en vergelyk dan die oorblywende terme.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Verdeel volgens ʼn verhouding — die metode</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1:</strong> Tel die verhoudingsdele bymekaar om die ${or('totale aantal dele')} te vind.<br><strong>Stap 2:</strong> Deel die totale bedrag deur die ${or('totale dele')} om die waarde van een deel te vind.<br><strong>Stap 3:</strong> Vermenigvuldig een deel met elke verhoudingsgetal om die ${gr('aandele')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Verdeel R750 in die verhouding 2:3.',
          answer: `${bl('Eerste aandeel')} = ${gr('R300')}, ${re('Tweede aandeel')} = ${gr('R450')}`,
          steps: [
            `Vind die ${or('totale aantal dele')}: ${bl('2')} + ${re('3')} = ${or('5')} dele.`,
            `Vind die waarde van een deel: 750 ÷ ${or('5')} = 150.`,
            `${bl('Eerste aandeel')} = ${bl('2')} × 150 = ${gr('R300')}.`,
            `${re('Tweede aandeel')} = ${re('3')} × 150 = ${gr('R450')}.`,
            `<strong>Kontroleer:</strong> ${gr('R300')} + ${gr('R450')} = R750 ✓`,
          ],
        },
        {
          question: 'Vergelyk die verhoudings 3:4 en 5:8 deur hulle met dieselfde eerste term te skryf.',
          answer: `${re('5:8')} is die groter verhouding`,
          steps: [
            `Vind die KGV van die eerste terme (${bl('3')} en ${bl('5')}): KGV = ${or('15')}.`,
            `Skryf ${bl('3')}:4 as ʼn ekwivalente verhouding met eerste term ${or('15')}: vermenigvuldig altwee terme met ${or('15')} ÷ ${bl('3')} = 5 → ${or('15')}:20.`,
            `Skryf ${bl('5')}:8 as ʼn ekwivalente verhouding met eerste term ${or('15')}: vermenigvuldig altwee terme met ${or('15')} ÷ ${bl('5')} = 3 → ${or('15')}:24.`,
            `Vergelyk: ${or('15')}:20 teenoor ${or('15')}:24. Aangesien 24 > 20, is die verhouding ${re('5:8')} die groter verhouding.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide an amount in a given ratio and how to compare ratios using equivalent forms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing R750 divided into 5 equal parts with 2 parts coloured blue for first share and 3 parts coloured red for second share" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — RATE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rate',
      title: 'Koers',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Koers vergelyk twee hoeveelhede van <strong>verskillende soorte</strong> en het altyd eenhede. In Graad 7 bereken ons koerse insluitend spoed, bereken eenheidskoerse en gebruik koerse om meerstap-werklike-lewe-probleme op te los wat tyd, afstand en koste betrek.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('afstand')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('koers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vergelyking')}</span>` +
        `</div>` +

        // ── Key formulas ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Spoed</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Spoed')} = ${bl('Afstand')} ÷ ${or('Tyd')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Afstand</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Afstand')} = ${gr('Spoed')} × ${or('Tyd')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Tyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Tyd')} = ${bl('Afstand')} ÷ ${gr('Spoed')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eenheidskoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel die totaal deur die aantal eenhede om die ${gr('koers')} vir een eenheid te vind (bv. koste per item, km/h).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Verhouding teenoor Koers</p>` +
        `<p style="margin:0;color:#14532d;">ʼn <strong>Verhouding</strong> vergelyk hoeveelhede van <em>dieselfde soort</em> (bv. 3 seuns : 5 meisies). ʼn <strong>${gr('Koers')}</strong> vergelyk hoeveelhede van <em>verskillende soorte</em> en toon altyd eenhede (bv. 70 km/${or('h')}, R25 per kg, R120/${or('uur')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Motor ry 315 km in 4,5 uur. Vind sy gemiddelde spoed.',
          answer: `Gemiddelde spoed = ${gr('70 km/h')}`,
          steps: [
            `Skryf die formule: ${gr('Spoed')} = ${bl('Afstand')} ÷ ${or('Tyd')}.`,
            `Vervang die waardes: ${gr('Spoed')} = ${bl('315 km')} ÷ ${or('4,5 h')}.`,
            `Bereken: 315 ÷ 4,5 = ${gr('70')}.`,
            `<strong>Antwoord:</strong> Die gemiddelde spoed is ${gr('70 km/h')} ✓`,
          ],
        },
        {
          question: 'Sipho verdien R2 880 vir 24 uur se werk. Lerato verdien R3 250 vir 26 uur se werk. Wie verdien meer per uur?',
          answer: `${re('Lerato')} verdien meer per uur teen ${gr('R125/h')}`,
          steps: [
            `Bereken Sipho se eenheidskoers: ${gr('Koers')} = R2 880 ÷ ${or('24 h')} = ${gr('R120/h')}.`,
            `Bereken Lerato se eenheidskoers: ${gr('Koers')} = R3 250 ÷ ${or('26 h')} = ${gr('R125/h')}.`,
            `${re('Vergelyk:')} ${gr('R120/h')} teenoor ${gr('R125/h')} — aangesien 125 > 120, verdien ${re('Lerato')} meer per uur.`,
            `<strong>Antwoord:</strong> ${re('Lerato')} verdien meer per uur teen ${gr('R125/h')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate speed using the distance-time formula and how to find and compare unit rates" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Speed triangle diagram showing Distance at the top and Speed and Time at the bottom with colour coded labels" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROPORTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proportion',
      title: 'Proporsie',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Proporsie beskryf die verwantskap tussen twee verhoudings wat gelyk is. Ons gebruik proporsie om probleme op te los waar hoeveelhede teen dieselfde koers verander. Ons kan <strong>kruisvermenigvuldiging</strong> gebruik om vir ʼn onbekende waarde in ʼn proporsie op te los.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bekende verhouding')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbekende waarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kruisvermenigvuldiging')}</span>` +
        `</div>` +

        // ── Cross multiplication method ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kruisvermenigvuldigingsmetode</p>` +
        `<p style="margin-bottom:12px;">In ʼn proporsie <strong>a/b = c/d</strong> is die kruisprodukte gelyk: <strong>a × d = b × c</strong>. Gebruik dit om ʼn onbekende waarde te vind.</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('a')} / ${bl('b')} = ${re('c')} / ${re('x')}</p>` +
        `<p style="font-size:0.9em;color:#6b7280;margin-bottom:8px;">Kruisvermenigvuldig ↓</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:4px;">${or('a × x')} = ${or('b × c')}</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('x')} = ${or('b × c')} ÷ ${bl('a')}</p>` +
        `</div>` +

        // ── Method cards ─────────────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Die proporsie opstel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Skryf die ${bl('bekende verhouding')} as ʼn breuk, skryf dan die ooreenstemmende tweede verhouding met die ${re('onbekende (x)')} in die ooreenstemmende posisie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Kruisvermenigvuldig om op te los</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die teller van elke breuk met die noemer van die ander (die ${or('kruisprodukte')}), los dan op vir ${re('x')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Hou eenhede altyd konsekwent</p>` +
        `<p style="margin:0;color:#14532d;">Plaas dieselfde soort hoeveelheid in dieselfde posisie in altwee breuke. Boeke oor koste aan altwee kante, of ure oor betaling aan altwee kante — moenie dit ooit verwar nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'As 4 boeke R220 kos, hoeveel sal 7 boeke kos?',
          answer: `7 boeke kos ${re('R385')}`,
          steps: [
            `Stel die proporsie op: ${bl('4')} / ${bl('220')} = 7 / ${re('x')}.`,
            `${or('Kruisvermenigvuldig:')} ${bl('4')} × ${re('x')} = ${bl('220')} × 7.`,
            `Vereenvoudig die regterkant: ${or('4x')} = ${or('1 540')}.`,
            `Los op vir ${re('x')}: ${re('x')} = 1 540 ÷ 4 = ${re('385')}.`,
            `<strong>Antwoord:</strong> 7 boeke kos ${re('R385')} ✓`,
          ],
        },
        {
          question: 'ʼn Resep gebruik 3 koppies meel vir 12 muffins. Hoeveel meel word benodig vir 20 muffins?',
          answer: `${re('5 koppies')} meel word benodig vir 20 muffins`,
          steps: [
            `Stel die proporsie op: ${bl('3')} / ${bl('12')} = ${re('x')} / 20.`,
            `${or('Kruisvermenigvuldig:')} ${bl('12')} × ${re('x')} = ${bl('3')} × 20.`,
            `Vereenvoudig die regterkant: ${or('12x')} = ${or('60')}.`,
            `Los op vir ${re('x')}: ${re('x')} = 60 ÷ 12 = ${re('5')}.`,
            `<strong>Antwoord:</strong> ${re('5 koppies')} meel word benodig vir 20 muffins ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and solve a proportion using cross multiplication with real-life examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two equal fractions side by side with arrows crossing to show cross multiplication highlighted in orange" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — simplify a ratio ───────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vereenvoudig die verhouding 24:36.',
      answer: '2:3',
      checkMode: 'auto',
      correctAnswer: '2:3',
      explanation: 'GGF van 24 en 36 is 12.\n24 ÷ 12 = 2 en 36 ÷ 12 = 3.\nVereenvoudigde verhouding: 2:3 ✓',
    },

    // ── Q2 Medium — divide in a ratio (two parts) ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Verdeel R900 in die verhouding 4:5.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Eerste aandeel',
          correctAnswer: 'R400',
          correctAnswers: ['R400', '400'],
          explanation: 'Totale dele: 4 + 5 = 9. Een deel: 900 ÷ 9 = R100.\nEerste aandeel: 4 × 100 = R400 ✓',
        },
        {
          label: 'b) Tweede aandeel',
          correctAnswer: 'R500',
          correctAnswers: ['R500', '500'],
          explanation: 'Totale dele: 4 + 5 = 9. Een deel: 900 ÷ 9 = R100.\nTweede aandeel: 5 × 100 = R500 ✓',
        },
      ],
    },

    // ── Q3 Hard — three-way share ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho, Lerato en Thabo deel R2 400 in die verhouding 3:4:5. Hoeveel kry elkeen?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Sipho',
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Totale dele: 3 + 4 + 5 = 12. Een deel: 2 400 ÷ 12 = R200.\nSipho: 3 × 200 = R600 ✓',
        },
        {
          label: 'b) Lerato',
          correctAnswer: 'R800',
          correctAnswers: ['R800', '800'],
          explanation: 'Totale dele: 3 + 4 + 5 = 12. Een deel: 2 400 ÷ 12 = R200.\nLerato: 4 × 200 = R800 ✓',
        },
        {
          label: 'c) Thabo',
          correctAnswer: 'R1000',
          correctAnswers: ['R1000', '1000', 'R1 000', '1 000'],
          explanation: 'Totale dele: 3 + 4 + 5 = 12. Een deel: 2 400 ÷ 12 = R200.\nThabo: 5 × 200 = R1 000 ✓',
        },
      ],
    },

    // ── Q4 Medium — compare ratios (self-check) ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vergelyk 2:5 en 3:7 deur hulle met dieselfde eerste term te skryf. Watter verhouding is groter?',
      answer: 'KGV van 2 en 3 is 6. 2:5 word 6:15. 3:7 word 6:14. Aangesien 15 > 14, is 2:5 die groter verhouding.',
      checkMode: 'self',
    },

    // ── Q5 Easy — calculate speed ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Motor ry 240 km in 3 uur. Vind sy spoed.',
      answer: '80 km/h',
      checkMode: 'auto',
      correctAnswer: '80km/h',
      correctAnswers: ['80km/h', '80 km/h', '80'],
      explanation: 'Spoed = Afstand ÷ Tyd = 240 ÷ 3 = 80 km/h ✓',
    },

    // ── Q6 Medium — compare unit rates (self-check) ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle verdien R1 800 vir 15 uur. Thabo verdien R2 240 vir 16 uur. Wie verdien meer per uur?',
      answer: 'Amahle: 1800 ÷ 15 = R120/h. Thabo: 2240 ÷ 16 = R140/h. Thabo verdien meer per uur.',
      checkMode: 'self',
    },

    // ── Q7 Hard — total travel time (two segments) ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato ry 280 km teen ʼn koers van 70 km/h en dan 150 km teen 50 km/h. Vind haar totale reistyd.',
      answer: '7 uur',
      checkMode: 'auto',
      correctAnswer: '7',
      correctAnswers: ['7', '7 hours', '7 uur'],
      explanation: 'Tyd 1: 280 ÷ 70 = 4 uur.\nTyd 2: 150 ÷ 50 = 3 uur.\nTotaal: 4 + 3 = 7 uur ✓',
    },

    // ── Q8 Easy — unit rate and proportion ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'As 5 penne R45 kos, hoeveel kos 8 penne?',
      answer: 'R72',
      checkMode: 'auto',
      correctAnswer: 'R72',
      correctAnswers: ['R72', '72'],
      explanation: 'Eenheidskoers: R45 ÷ 5 = R9 per pen.\n8 penne: 8 × 9 = R72 ✓',
    },

    // ── Q9 Medium — proportion (recipe) ──────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Resep gebruik 4 koppies suiker vir 16 muffins. Hoeveel suiker word benodig vir 28 muffins?',
      answer: '7 koppies',
      checkMode: 'auto',
      correctAnswer: '7',
      correctAnswers: ['7', '7 cups', '7 koppies'],
      explanation: 'Eenheidskoers: 4 ÷ 16 = 0,25 koppies per muffin.\n28 × 0,25 = 7 koppies ✓',
    },

    // ── Q10 Hard — inverse proportion reasoning (self-check) ─────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om die aantal werkers te verdubbel, halveer altyd die tyd om ʼn taak te voltooi. Is dit waar in proporsieprobleme? Verduidelik.',
      answer: 'Dit geld vir omgekeerde proporsie, nie direkte proporsie nie. As werkers en tyd omgekeerd eweredig is, halveer die verdubbeling van werkers wel die tyd, met die aanname van gelyke werkskoerse.',
      checkMode: 'self',
    },

    // ── Q11 Hard — map scale ──────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Kaart het ʼn skaal van 1:50 000. As ʼn afstand op die kaart 6 cm is, vind die werklike afstand in km.',
      answer: '3 km',
      checkMode: 'auto',
      correctAnswer: '3',
      correctAnswers: ['3', '3km', '3 km'],
      explanation: 'Werklike afstand = 6 × 50 000 = 300 000 cm.\nOmskep: 300 000 cm ÷ 100 000 = 3 km ✓',
    },

    // ── Q12 Hard — ratio and quantity ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle meng verf in die verhouding 2:7 (blou tot wit). Sy het 3,5 liter blou verf. Hoeveel wit verf het sy nodig?',
      answer: '12,25 liter',
      checkMode: 'auto',
      correctAnswer: '12.25',
      correctAnswers: ['12.25', '12.25 litres', '12,25', '12,25 liter'],
      explanation: 'Wit = blou × (7 ÷ 2) = 3,5 × 3,5 = 12,25 liter ✓',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het verhouding en koers baasgeraak.' },
      { minPercent: 75, message: 'Uitstekende werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het verhouding en koers baasgeraak.' },
    { minScore: 9, message: 'Uitstekende werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
  ],
}
