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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn bedrag in ʼn gegewe verhouding te verdeel en hoe om verhoudings te vergelyk deur ekwivalente vorme te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele voorstelling wat R750 in 5 gelyke dele verdeel wys, met 2 dele in blou vir die eerste aandeel en 3 dele in rooi vir die tweede aandeel" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om spoed met die afstand-tyd-formule te bereken en hoe om eenheidskoerse te vind en te vergelyk" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Spoed-driehoek-diagram wat Afstand bo-aan wys en Spoed en Tyd onder-aan, met kleurgekodeerde merkers" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn proporsie op te stel en op te los met kruisvermenigvuldiging, met voorbeelde uit die alledaagse lewe" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee gelyke breuke langs mekaar wys met pyle wat kruis om kruisvermenigvuldiging in oranje uit te lig" />',
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
      correctAnswer: '12,25',
      correctAnswers: ['12.25', '12.25 litres', '12,25', '12,25 liter'],
      explanation: 'Wit = blou × (7 ÷ 2) = 3,5 × 3,5 = 12,25 liter ✓',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig & verhoudings uit konteks skryf (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 84:56.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 84 en 56 is 28.\n84 ÷ 28 = 3 en 56 ÷ 28 = 2.\nVereenvoudigde verhouding = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Netbalklub het 45 senior spelers en 30 junior spelers. Skryf die verhouding van senior tot junior spelers in eenvoudigste vorm.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 45 en 30 is 15.\n45 ÷ 15 = 3 en 30 ÷ 15 = 2.\nVerhouding van senior tot junior spelers = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Vrugteplaas het 42 lemoenbome, 70 suurlemoenbome en 98 nartjiebome. Skryf die verhouding van lemoen tot suurlemoen tot nartjiebome in eenvoudigste vorm.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'GGF van 42, 70 en 98 is 14.\n42 ÷ 14 = 3, 70 ÷ 14 = 5, 98 ÷ 14 = 7.\nVereenvoudigde verhouding = 3:5:7 ✓' },

        // Blok 2 — Ekwivalente verhoudings / ontbrekende term vind (Easy-Medium) — posisies 3-5
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende waarde: 5:8 = x:56', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', 'x = 35'], explanation: 'Vind die skaalfaktor: 56 ÷ 8 = 7.\nVermenigvuldig die eerste term met dieselfde faktor: 5 × 7 = 35.\nx = 35 ✓' },
        { difficulty: 'Medium', question: 'ʼn Vrugtepons-resep gebruik sap en koeldrank in die verhouding 3:5. ʼn Spyseneraar moet 45 koppies koeldrank vir ʼn groot geleentheid gebruik. Hoeveel koppies sap word benodig?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 koppies'], explanation: 'Verhouding sap:koeldrank = 3:5.\nSkaalfaktor = 45 ÷ 5 = 9.\nSap benodig = 3 × 9 = 27 koppies ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 7:12 — 21:36 of 21:35?', answer: '21:36', checkMode: 'auto', correctAnswer: '21:36', correctAnswers: ['21:36', '21:36 only', '21:36 slegs'], explanation: 'Vermenigvuldig altwee dele van 7:12 met 3: 7 × 3 = 21 en 12 × 3 = 36.\nDus 21:36 = 7:12.\n21:35 is nie ekwivalent nie, aangesien 35 ÷ 12 nie ʼn heelgetal-skaalfaktor gee nie.\n21:36 is ekwivalent aan 7:12 ✓' },

        // Blok 3 — ʼn Bedrag in ʼn verhouding verdeel: 2 dele (Medium) — posisies 6-8
        { difficulty: 'Medium', question: 'Verdeel R1 560 in die verhouding 5:8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Totale dele = 5 + 8 = 13.\nEen deel = R1 560 ÷ 13 = R120.\nEerste aandeel = 5 × R120 = R600 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R960', correctAnswers: ['R960', '960'], explanation: 'Totale dele = 5 + 8 = 13.\nEen deel = R1 560 ÷ 13 = R120.\nTweede aandeel = 8 × R120 = R960 ✓\nKontroleer: R600 + R960 = R1 560 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Kleremaker het 130 m stof om tussen Graad 7A en Graad 7B vir ʼn naaiwerkprojek te verdeel, in die verhouding 7:6. Hoeveel meter ontvang elke klas?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Graad 7A', correctAnswer: '70', correctAnswers: ['70', '70m', '70 m'], explanation: 'Totale dele = 7 + 6 = 13.\nEen deel = 130 ÷ 13 = 10 m.\nGraad 7A = 7 × 10 = 70 m ✓' },
          { label: 'b) Graad 7B', correctAnswer: '60', correctAnswers: ['60', '60m', '60 m'], explanation: 'Totale dele = 7 + 6 = 13.\nEen deel = 130 ÷ 13 = 10 m.\nGraad 7B = 6 × 10 = 60 m ✓\nKontroleer: 70 + 60 = 130 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee werkswinkels deel ʼn aflewering van stoele in die verhouding 5:4. Die werkswinkel met die kleiner aandeel ontvang 68 stoele. Hoeveel stoele is altesaam afgelewer?', answer: '153', checkMode: 'auto', correctAnswer: '153', correctAnswers: ['153'], explanation: 'Die kleiner aandeel stem ooreen met die "4"-deel van die verhouding.\nEen deel = 68 ÷ 4 = 17.\nTotale dele = 5 + 4 = 9.\nTotale stoele = 9 × 17 = 153 ✓\nKontroleer: aandele is 5 × 17 = 85 en 4 × 17 = 68, en 85 + 68 = 153 ✓' },

        // Blok 4 — ʼn Bedrag in ʼn verhouding verdeel: 3 dele (Medium-Hard) — posisies 9-11
        { difficulty: 'Medium', question: 'Verdeel R3 600 in die verhouding 4:5:9.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R800', correctAnswers: ['R800', '800'], explanation: 'Totale dele = 4 + 5 + 9 = 18.\nEen deel = R3 600 ÷ 18 = R200.\nEerste aandeel = 4 × R200 = R800 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], explanation: 'Totale dele = 4 + 5 + 9 = 18.\nEen deel = R3 600 ÷ 18 = R200.\nTweede aandeel = 5 × R200 = R1 000 ✓' },
          { label: 'c) Derde aandeel', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Totale dele = 4 + 5 + 9 = 18.\nEen deel = R3 600 ÷ 18 = R200.\nDerde aandeel = 9 × R200 = R1 800 ✓\nKontroleer: R800 + R1 000 + R1 800 = R3 600 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Drie besigheidsvennote, Naledi, Kagiso en Refiloe, deel ʼn wins van R4 800 in die verhouding 3:5:4 op grond van hoeveel elkeen belê het. Hoeveel ontvang elke vennoot?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Naledi se aandeel", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Totale dele = 3 + 5 + 4 = 12.\nEen deel = R4 800 ÷ 12 = R400.\nNaledi = 3 × R400 = R1 200 ✓' },
          { label: "b) Kagiso se aandeel", correctAnswer: 'R2000', correctAnswers: ['R2000', '2000', 'R2 000', '2 000'], explanation: 'Totale dele = 3 + 5 + 4 = 12.\nEen deel = R4 800 ÷ 12 = R400.\nKagiso = 5 × R400 = R2 000 ✓' },
          { label: "c) Refiloe se aandeel", correctAnswer: 'R1600', correctAnswers: ['R1600', '1600', 'R1 600', '1 600'], explanation: 'Totale dele = 3 + 5 + 4 = 12.\nEen deel = R4 800 ÷ 12 = R400.\nRefiloe = 4 × R400 = R1 600 ✓\nKontroleer: R1 200 + R2 000 + R1 600 = R4 800 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Leerder verdeel R1 200 in die verhouding 2:3:5 en skryf: "Totale dele = 2 + 3 + 5 = 10, een deel = R1 200 ÷ 10 = R120, dus is die aandele R120, R360 en R600." Kontroleer of die aandele werklik optel tot R1 200, en verbeter enige fout.', answer: 'Die waarde van een deel (R120) is korrek, maar die aandele is verkeerd vermenigvuldig. Die korrekte aandele is 2 × R120 = R240, 3 × R120 = R360, en 5 × R120 = R600. Kontroleer: R240 + R360 + R600 = R1 200 ✓. Die leerder het slegs op die eerste aandeel gefouteer — R120 moes R240 gewees het.', checkMode: 'self' },

        // Blok 5 — Eenheidskoers & koers-woordprobleme, insl. beste-koop-vergelykings (Medium) — posisies 12-15
        { difficulty: 'Medium', question: 'ʼn Weerballon styg 522 m in 6 minute teen ʼn konstante koers. Wat is sy stygingskoers in meter per minuut?', answer: '87 m/min', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87', '87m/min', '87 m/min', '87 meter per minuut'], explanation: 'Koers = afstand ÷ tyd.\n522 ÷ 6 = 87 m/min ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop rys in twee groottes: ʼn 2,5 kg sak vir R87,50 en ʼn 4 kg sak vir R128. Watter sak gee die goedkoopste prys per kilogram?', answer: '4 kg sak', checkMode: 'auto', correctAnswer: '4 kg sak', correctAnswers: ['4 kg sak', 'die 4 kg sak', '4kg sak', 'tweede sak', '4 kg'], explanation: '2,5 kg sak: R87,50 ÷ 2,5 = R35 per kg.\n4 kg sak: R128 ÷ 4 = R32 per kg.\nR32 is minder as R35, dus gee die 4 kg sak die goedkoopste prys per kilogram ✓' },
        { difficulty: 'Medium', question: 'Zanele tik 342 woorde in 6 minute teen ʼn konstante spoed. Teen hierdie koers, hoeveel woorde sou sy in 10 minute kon tik?', answer: '570', checkMode: 'auto', correctAnswer: '570', correctAnswers: ['570', '570 woorde'], explanation: 'Eenheidskoers = 342 ÷ 6 = 57 woorde per minuut.\nIn 10 minute: 57 × 10 = 570 woorde ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder vergelyk twee internetpakkette: Pakket A gee 15 GB vir R225, Pakket B gee 24 GB vir R336. Hulle sluit af dat Pakket A goedkoper is omdat R225 ʼn kleiner totale prys is. Verduidelik waarom hierdie redenasie foutief is en sê watter pakket werklik beter waarde bied.', answer: 'Om net totale pryse te vergelyk is misleidend omdat die pakkette verskillende hoeveelhede data bied. Ons benodig die prys per GB (eenheidskoers) om regverdig te vergelyk: Pakket A = R225 ÷ 15 = R15 per GB, Pakket B = R336 ÷ 24 = R14 per GB. Aangesien R14 minder is as R15, bied Pakket B werklik beter waarde per GB, al is sy totale prys hoër.', checkMode: 'self' },

        // Blok 6 — Direkte eweredigheid & meerstap-/kaartskaal-woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: '4 identiese masjiene vervaardig 560 stene in een skof, almal teen dieselfde konstante koers. Met die aanname van direkte eweredigheid, hoeveel stene sou 7 van hierdie masjiene in een skof vervaardig?', answer: '980', checkMode: 'auto', correctAnswer: '980', correctAnswers: ['980', '980 stene'], explanation: 'Stene en aantal masjiene is direk eweredig (dieselfde koers per masjien).\nEenheidskoers = 560 ÷ 4 = 140 stene per masjien.\n7 masjiene: 7 × 140 = 980 stene ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart word teen ʼn skaal van 1:25 000 geteken. Die afstand tussen twee dorpe op die kaart is 8,4 cm. Vind die werklike afstand tussen die dorpe in kilometer.', answer: '2,1 km', checkMode: 'auto', correctAnswer: '2,1', correctAnswers: ['2.1', '2.1km', '2.1 km', '2,1', '2,1km', '2,1 km'], explanation: 'Werklike afstand = 8,4 × 25 000 = 210 000 cm.\nSkakel om na km: 210 000 ÷ 100 000 = 2,1 km ✓' },
        { difficulty: 'Hard', question: "Mnr. Dlamini se bakkie gebruik 8,4 liter petrol vir elke 100 km gery. Petrol kos R21,50 per liter. Hoeveel sal die petrol kos vir ʼn 350 km-rit?", answer: 'R632,10', checkMode: 'auto', correctAnswer: 'R632,10', correctAnswers: ['R632.10', '632.10', '632.1', 'R632.1', 'R632,10', '632,10', '632,1', 'R632,1'], explanation: 'Petrol benodig = (8,4 ÷ 100) × 350 = 29,4 liter.\nKoste = 29,4 × R21,50 = R632,10 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep vir 12 muffins gebruik 180 g meel en 90 g suiker. Zola wil 30 muffins volgens dieselfde resepverhoudings maak. Hoeveel gram meel en hoeveel gram suiker het sy nodig?', answer: 'Skaalfaktor = 30 ÷ 12 = 2,5.\nMeel: 180 × 2,5 = 450 g.\nSuiker: 90 × 2,5 = 225 g.\nZola het 450 g meel en 225 g suiker nodig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling in ʼn verhouding, koerse en eweredigheid baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Jy is selfversekerd met die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die verdeling van ʼn bedrag in ʼn verhouding en eenheidskoerse, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig & verhoudings uit konteks skryf (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 108:72.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 108 en 72 is 36.\n108 ÷ 36 = 3 en 72 ÷ 36 = 2.\nVereenvoudigde verhouding = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Hokkieklub het 60 senior lede en 40 junior lede. Skryf die verhouding van senior tot junior lede in eenvoudigste vorm.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 60 en 40 is 20.\n60 ÷ 20 = 3 en 40 ÷ 20 = 2.\nVerhouding van senior tot junior lede = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Gemeenskapstuin het 54 tamatieplante, 90 boontjieplante en 126 spinasieplante. Skryf die verhouding van tamatie tot boontjie tot spinasieplante in eenvoudigste vorm.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'GGF van 54, 90 en 126 is 18.\n54 ÷ 18 = 3, 90 ÷ 18 = 5, 126 ÷ 18 = 7.\nVereenvoudigde verhouding = 3:5:7 ✓' },

        // Blok 2 — Ekwivalente verhoudings / ontbrekende term vind (Easy-Medium) — posisies 3-5
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende waarde: 4:9 = x:63', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', 'x = 28'], explanation: 'Vind die skaalfaktor: 63 ÷ 9 = 7.\nVermenigvuldig die eerste term met dieselfde faktor: 4 × 7 = 28.\nx = 28 ✓' },
        { difficulty: 'Medium', question: 'ʼn Verfmengsel gebruik blou verf en wit verf in die verhouding 5:8. ʼn Versierder moet 40 liter blou verf vir ʼn groot muur gebruik. Hoeveel liter wit verf word benodig?', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 liter'], explanation: 'Verhouding blou:wit = 5:8.\nSkaalfaktor = 40 ÷ 5 = 8.\nWit verf benodig = 8 × 8 = 64 liter ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 9:15 — 27:45 of 27:40?', answer: '27:45', checkMode: 'auto', correctAnswer: '27:45', correctAnswers: ['27:45', '27:45 only', '27:45 slegs'], explanation: 'Vermenigvuldig altwee dele van 9:15 met 3: 9 × 3 = 27 en 15 × 3 = 45.\nDus 27:45 = 9:15.\n27:40 is nie ekwivalent nie, aangesien 40 ÷ 15 nie ʼn heelgetal-skaalfaktor gee nie.\n27:45 is ekwivalent aan 9:15 ✓' },

        // Blok 3 — ʼn Bedrag in ʼn verhouding verdeel: 2 dele (Medium) — posisies 6-8
        { difficulty: 'Medium', question: 'Verdeel R1 350 in die verhouding 4:5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Totale dele = 4 + 5 = 9.\nEen deel = R1 350 ÷ 9 = R150.\nEerste aandeel = 4 × R150 = R600 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R750', correctAnswers: ['R750', '750'], explanation: 'Totale dele = 4 + 5 = 9.\nEen deel = R1 350 ÷ 9 = R150.\nTweede aandeel = 5 × R150 = R750 ✓\nKontroleer: R600 + R750 = R1 350 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Drukkersmaatskappy het 154 m bannermateriaal om tussen twee bestellings te verdeel, in die verhouding 8:3. Hoeveel meter ontvang elke bestelling?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste bestelling', correctAnswer: '112', correctAnswers: ['112', '112m', '112 m'], explanation: 'Totale dele = 8 + 3 = 11.\nEen deel = 154 ÷ 11 = 14 m.\nEerste bestelling = 8 × 14 = 112 m ✓' },
          { label: 'b) Tweede bestelling', correctAnswer: '42', correctAnswers: ['42', '42m', '42 m'], explanation: 'Totale dele = 8 + 3 = 11.\nEen deel = 154 ÷ 11 = 14 m.\nTweede bestelling = 3 × 14 = 42 m ✓\nKontroleer: 112 + 42 = 154 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee spaza-winkels deel ʼn grootmaatbestelling bottelwater in die verhouding 8:3. Die winkel met die groter aandeel ontvang 136 bottels. Hoeveel bottels is altesaam bestel?', answer: '187', checkMode: 'auto', correctAnswer: '187', correctAnswers: ['187'], explanation: 'Die groter aandeel stem ooreen met die "8"-deel van die verhouding.\nEen deel = 136 ÷ 8 = 17.\nTotale dele = 8 + 3 = 11.\nTotale bottels = 11 × 17 = 187 ✓' },

        // Blok 4 — ʼn Bedrag in ʼn verhouding verdeel: 3 dele (Medium-Hard) — posisies 9-11
        { difficulty: 'Medium', question: 'Verdeel R4 200 in die verhouding 3:4:7.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R900', correctAnswers: ['R900', '900'], explanation: 'Totale dele = 3 + 4 + 7 = 14.\nEen deel = R4 200 ÷ 14 = R300.\nEerste aandeel = 3 × R300 = R900 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Totale dele = 3 + 4 + 7 = 14.\nEen deel = R4 200 ÷ 14 = R300.\nTweede aandeel = 4 × R300 = R1 200 ✓' },
          { label: 'c) Derde aandeel', correctAnswer: 'R2100', correctAnswers: ['R2100', '2100', 'R2 100', '2 100'], explanation: 'Totale dele = 3 + 4 + 7 = 14.\nEen deel = R4 200 ÷ 14 = R300.\nDerde aandeel = 7 × R300 = R2 100 ✓\nKontroleer: R900 + R1 200 + R2 100 = R4 200 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Drie besigheidsvennote, Bongani, Precious en Sibusiso, deel ʼn wins van R5 400 in die verhouding 3:2:4 op grond van hoeveel elkeen belê het. Hoeveel ontvang elke vennoot?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Bongani se aandeel", correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Totale dele = 3 + 2 + 4 = 9.\nEen deel = R5 400 ÷ 9 = R600.\nBongani = 3 × R600 = R1 800 ✓' },
          { label: "b) Precious se aandeel", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Totale dele = 3 + 2 + 4 = 9.\nEen deel = R5 400 ÷ 9 = R600.\nPrecious = 2 × R600 = R1 200 ✓' },
          { label: "c) Sibusiso se aandeel", correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R2 400', '2 400'], explanation: 'Totale dele = 3 + 2 + 4 = 9.\nEen deel = R5 400 ÷ 9 = R600.\nSibusiso = 4 × R600 = R2 400 ✓\nKontroleer: R1 800 + R1 200 + R2 400 = R5 400 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Leerder verdeel R2 400 in die verhouding 3:5:4 en skryf: "Totale dele = 3 + 5 + 4 = 12, een deel = R2 400 ÷ 12 = R200, dus is die aandele R600, R1 000 en R800." Kontroleer of die aandele werklik optel tot R2 400, en verbeter enige fout.', answer: 'Die waarde van een deel (R200) is korrek, en die aandele is ook korrek: 3 × R200 = R600, 5 × R200 = R1 000, en 4 × R200 = R800. Kontroleer: R600 + R1 000 + R800 = R2 400 ✓. Die leerder het geen fout gemaak nie — die werk en die aandele is almal korrek.', checkMode: 'self' },

        // Blok 5 — Eenheidskoers & koers-woordprobleme, insl. beste-koop-vergelykings (Medium) — posisies 12-15
        { difficulty: 'Medium', question: 'ʼn Vlieër styg 456 m in 8 minute teen ʼn konstante koers. Wat is sy stygingskoers in meter per minuut?', answer: '57 m/min', checkMode: 'auto', correctAnswer: '57', correctAnswers: ['57', '57m/min', '57 m/min', '57 meter per minuut'], explanation: 'Koers = afstand ÷ tyd.\n456 ÷ 8 = 57 m/min ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop vrugtesap in twee groottes: ʼn 1,5 L bottel vir R34,50 en ʼn 2 L bottel vir R42. Watter bottel gee die goedkoopste prys per liter?', answer: '2 L bottel', checkMode: 'auto', correctAnswer: '2 L bottel', correctAnswers: ['2 L bottel', 'die 2 L bottel', '2L bottel', 'tweede bottel', '2 L'], explanation: '1,5 L bottel: R34,50 ÷ 1,5 = R23 per liter.\n2 L bottel: R42 ÷ 2 = R21 per liter.\nR21 is minder as R23, dus gee die 2 L bottel die goedkoopste prys per liter ✓' },
        { difficulty: 'Medium', question: 'ʼn Drukker druk 189 bladsye in 7 minute teen ʼn konstante spoed. Teen hierdie koers, hoeveel bladsye sou dit in 12 minute kon druk?', answer: '324', checkMode: 'auto', correctAnswer: '324', correctAnswers: ['324', '324 bladsye'], explanation: 'Eenheidskoers = 189 ÷ 7 = 27 bladsye per minuut.\nIn 12 minute: 27 × 12 = 324 bladsye ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder vergelyk twee datapakkette: Pakket A gee 12 GB vir R216, Pakket B gee 20 GB vir R320. Hulle sluit af dat Pakket A goedkoper is omdat R216 ʼn kleiner totale prys is. Verduidelik waarom hierdie redenasie foutief is en sê watter pakket werklik beter waarde bied.', answer: 'Om net totale pryse te vergelyk is misleidend omdat die pakkette verskillende hoeveelhede data bied. Ons benodig die prys per GB (eenheidskoers) om regverdig te vergelyk: Pakket A = R216 ÷ 12 = R18 per GB, Pakket B = R320 ÷ 20 = R16 per GB. Aangesien R16 minder is as R18, bied Pakket B werklik beter waarde per GB, al is sy totale prys hoër.', checkMode: 'self' },

        // Blok 6 — Direkte eweredigheid & meerstap-/kaartskaal-woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: '5 identiese verwers kan 240 vierkante meter muur in een dag verf, almal teen dieselfde konstante koers. Met die aanname van direkte eweredigheid, hoeveel vierkante meter sou 8 van hierdie verwers in een dag kon verf?', answer: '384', checkMode: 'auto', correctAnswer: '384', correctAnswers: ['384', '384 vierkante meter', '384 m²'], explanation: 'Oppervlakte geverf en aantal verwers is direk eweredig (dieselfde koers per verwer).\nEenheidskoers = 240 ÷ 5 = 48 vierkante meter per verwer.\n8 verwers: 8 × 48 = 384 vierkante meter ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart word teen ʼn skaal van 1:20 000 geteken. Die afstand tussen twee skole op die kaart is 12 cm. Vind die werklike afstand tussen die skole in kilometer.', answer: '2,4 km', checkMode: 'auto', correctAnswer: '2,4', correctAnswers: ['2.4', '2.4km', '2.4 km', '2,4', '2,4km', '2,4 km'], explanation: 'Werklike afstand = 12 × 20 000 = 240 000 cm.\nSkakel om na km: 240 000 ÷ 100 000 = 2,4 km ✓' },
        { difficulty: 'Hard', question: "Mev. Nkosi se motor gebruik 7,5 liter petrol vir elke 100 km gery. Petrol kos R22,80 per liter. Hoeveel sal die petrol kos vir ʼn 420 km-rit?", answer: 'R718,20', checkMode: 'auto', correctAnswer: 'R718,20', correctAnswers: ['R718.20', '718.20', '718.2', 'R718.2', 'R718,20', '718,20', '718,2', 'R718,2'], explanation: 'Petrol benodig = (7,5 ÷ 100) × 420 = 31,5 liter.\nKoste = 31,5 × R22,80 = R718,20 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep vir 15 muffins gebruik 225 g meel en 75 g botter. Kabelo wil 24 muffins volgens dieselfde resepverhoudings maak. Hoeveel gram meel en hoeveel gram botter het hy nodig?', answer: 'Skaalfaktor = 24 ÷ 15 = 1,6.\nMeel: 225 × 1,6 = 360 g.\nBotter: 75 × 1,6 = 120 g.\nKabelo het 360 g meel en 120 g botter nodig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling in ʼn verhouding, koerse en eweredigheid baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Jy is selfversekerd met die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die verdeling van ʼn bedrag in ʼn verhouding en eenheidskoerse, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Verhoudings vereenvoudig & verhoudings uit konteks skryf (Easy) — posisies 0-2
        { difficulty: 'Easy', question: 'Vereenvoudig die verhouding 96:64.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 96 en 64 is 32.\n96 ÷ 32 = 3 en 64 ÷ 32 = 2.\nVereenvoudigde verhouding = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Krieketklub het 75 senior lede en 50 junior lede. Skryf die verhouding van senior tot junior lede in eenvoudigste vorm.', answer: '3:2', checkMode: 'auto', correctAnswer: '3:2', correctAnswers: ['3:2'], explanation: 'GGF van 75 en 50 is 25.\n75 ÷ 25 = 3 en 50 ÷ 25 = 2.\nVerhouding van senior tot junior lede = 3:2 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kwekery het 33 roosbome, 55 hortensiabome en 77 varings. Skryf die verhouding van roos tot hortensia tot varings in eenvoudigste vorm.', answer: '3:5:7', checkMode: 'auto', correctAnswer: '3:5:7', correctAnswers: ['3:5:7'], explanation: 'GGF van 33, 55 en 77 is 11.\n33 ÷ 11 = 3, 55 ÷ 11 = 5, 77 ÷ 11 = 7.\nVereenvoudigde verhouding = 3:5:7 ✓' },

        // Blok 2 — Ekwivalente verhoudings / ontbrekende term vind (Easy-Medium) — posisies 3-5
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende waarde: 6:11 = x:77', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', 'x = 42'], explanation: 'Vind die skaalfaktor: 77 ÷ 11 = 7.\nVermenigvuldig die eerste term met dieselfde faktor: 6 × 7 = 42.\nx = 42 ✓' },
        { difficulty: 'Medium', question: 'ʼn Vrugtekordiaal-mengsel gebruik water en sapkonsentraat in die verhouding 7:2. ʼn Spyseneraar moet 18 koppies sapkonsentraat vir ʼn groot lot gebruik. Hoeveel koppies water word benodig?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', '63 koppies'], explanation: 'Verhouding water:sap = 7:2.\nSkaalfaktor = 18 ÷ 2 = 9.\nWater benodig = 7 × 9 = 63 koppies ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie verhoudings is ekwivalent aan 8:14 — 32:56 of 32:50?', answer: '32:56', checkMode: 'auto', correctAnswer: '32:56', correctAnswers: ['32:56', '32:56 only', '32:56 slegs'], explanation: 'Vermenigvuldig altwee dele van 8:14 met 4: 8 × 4 = 32 en 14 × 4 = 56.\nDus 32:56 = 8:14.\n32:50 is nie ekwivalent nie, aangesien 50 ÷ 14 nie ʼn heelgetal-skaalfaktor gee nie.\n32:56 is ekwivalent aan 8:14 ✓' },

        // Blok 3 — ʼn Bedrag in ʼn verhouding verdeel: 2 dele (Medium) — posisies 6-8
        { difficulty: 'Medium', question: 'Verdeel R2 100 in die verhouding 7:5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R1225', correctAnswers: ['R1225', '1225', 'R1 225', '1 225'], explanation: 'Totale dele = 7 + 5 = 12.\nEen deel = R2 100 ÷ 12 = R175.\nEerste aandeel = 7 × R175 = R1 225 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R875', correctAnswers: ['R875', '875'], explanation: 'Totale dele = 7 + 5 = 12.\nEen deel = R2 100 ÷ 12 = R175.\nTweede aandeel = 5 × R175 = R875 ✓\nKontroleer: R1 225 + R875 = R2 100 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Hardewarewinkel het 121 m tou om tussen twee bestellings te verdeel, in die verhouding 7:4. Hoeveel meter ontvang elke bestelling?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste bestelling', correctAnswer: '77', correctAnswers: ['77', '77m', '77 m'], explanation: 'Totale dele = 7 + 4 = 11.\nEen deel = 121 ÷ 11 = 11 m.\nEerste bestelling = 7 × 11 = 77 m ✓' },
          { label: 'b) Tweede bestelling', correctAnswer: '44', correctAnswers: ['44', '44m', '44 m'], explanation: 'Totale dele = 7 + 4 = 11.\nEen deel = 121 ÷ 11 = 11 m.\nTweede bestelling = 4 × 11 = 44 m ✓\nKontroleer: 77 + 44 = 121 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee klinieke deel ʼn aflewering van gesigmaskers in die verhouding 9:4. Die kliniek met die kleiner aandeel ontvang 52 bokse. Hoeveel bokse is altesaam afgelewer?', answer: '169', checkMode: 'auto', correctAnswer: '169', correctAnswers: ['169'], explanation: 'Die kleiner aandeel stem ooreen met die "4"-deel van die verhouding.\nEen deel = 52 ÷ 4 = 13.\nTotale dele = 9 + 4 = 13.\nTotale bokse = 13 × 13 = 169 ✓' },

        // Blok 4 — ʼn Bedrag in ʼn verhouding verdeel: 3 dele (Medium-Hard) — posisies 9-11
        { difficulty: 'Medium', question: 'Verdeel R3 900 in die verhouding 2:5:6.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Eerste aandeel', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Totale dele = 2 + 5 + 6 = 13.\nEen deel = R3 900 ÷ 13 = R300.\nEerste aandeel = 2 × R300 = R600 ✓' },
          { label: 'b) Tweede aandeel', correctAnswer: 'R1500', correctAnswers: ['R1500', '1500', 'R1 500', '1 500'], explanation: 'Totale dele = 2 + 5 + 6 = 13.\nEen deel = R3 900 ÷ 13 = R300.\nTweede aandeel = 5 × R300 = R1 500 ✓' },
          { label: 'c) Derde aandeel', correctAnswer: 'R1800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Totale dele = 2 + 5 + 6 = 13.\nEen deel = R3 900 ÷ 13 = R300.\nDerde aandeel = 6 × R300 = R1 800 ✓\nKontroleer: R600 + R1 500 + R1 800 = R3 900 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Drie besigheidsvennote, Palesa, Given en Onthatile, deel ʼn wins van R6 600 in die verhouding 5:4:2 op grond van hoeveel elkeen belê het. Hoeveel ontvang elke vennoot?', answer: '', checkMode: 'auto', parts: [
          { label: "a) Palesa se aandeel", correctAnswer: 'R3000', correctAnswers: ['R3000', '3000', 'R3 000', '3 000'], explanation: 'Totale dele = 5 + 4 + 2 = 11.\nEen deel = R6 600 ÷ 11 = R600.\nPalesa = 5 × R600 = R3 000 ✓' },
          { label: "b) Given se aandeel", correctAnswer: 'R2400', correctAnswers: ['R2400', '2400', 'R2 400', '2 400'], explanation: 'Totale dele = 5 + 4 + 2 = 11.\nEen deel = R6 600 ÷ 11 = R600.\nGiven = 4 × R600 = R2 400 ✓' },
          { label: "c) Onthatile se aandeel", correctAnswer: 'R1200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Totale dele = 5 + 4 + 2 = 11.\nEen deel = R6 600 ÷ 11 = R600.\nOnthatile = 2 × R600 = R1 200 ✓\nKontroleer: R3 000 + R2 400 + R1 200 = R6 600 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Leerder verdeel R1 800 in die verhouding 4:3:2 en skryf: "Totale dele = 4 + 3 + 2 = 9, een deel = R1 800 ÷ 9 = R200, dus is die aandele R800, R600 en R400." Kontroleer of die aandele werklik optel tot R1 800, en verbeter enige fout.', answer: 'Die waarde van een deel (R200) is korrek: 4 × R200 = R800, 3 × R200 = R600, en 2 × R200 = R400. Kontroleer: R800 + R600 + R400 = R1 800 ✓. Die leerder het geen fout gemaak nie — al drie aandele en die totaal is korrek.', checkMode: 'self' },

        // Blok 5 — Eenheidskoers & koers-woordprobleme, insl. beste-koop-vergelykings (Medium) — posisies 12-15
        { difficulty: 'Medium', question: 'ʼn Stapper se rustende harttempo word oor 6 minute op 522 slae gemeet. Wat is hierdie koers in slae per minuut?', answer: '87 slae/min', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87', '87 slae/min', '87 slae per minuut'], explanation: 'Koers = totale slae ÷ tyd.\n522 ÷ 6 = 87 slae per minuut ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel verkoop waspoeier in twee groottes: ʼn 3 kg boks vir R148,50 en ʼn 5 kg boks vir R230. Watter boks gee die goedkoopste prys per kilogram?', answer: '5 kg boks', checkMode: 'auto', correctAnswer: '5 kg boks', correctAnswers: ['5 kg boks', 'die 5 kg boks', '5kg boks', 'tweede boks', '5 kg'], explanation: '3 kg boks: R148,50 ÷ 3 = R49,50 per kg.\n5 kg boks: R230 ÷ 5 = R46 per kg.\nR46 is minder as R49,50, dus gee die 5 kg boks die goedkoopste prys per kilogram ✓' },
        { difficulty: 'Medium', question: 'ʼn Fabrieksmasjien stik 522 hemde in 6 uur teen ʼn konstante koers. Teen hierdie koers, hoeveel hemde sou dit in 9 uur kon stik?', answer: '783', checkMode: 'auto', correctAnswer: '783', correctAnswers: ['783', '783 hemde'], explanation: 'Eenheidskoers = 522 ÷ 6 = 87 hemde per uur.\nIn 9 uur: 87 × 9 = 783 hemde ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder vergelyk twee lugtydbondels: Bondel A gee 18 GB vir R270, Bondel B gee 25 GB vir R350. Hulle sluit af dat Bondel A goedkoper is omdat R270 ʼn kleiner totale prys is. Verduidelik waarom hierdie redenasie foutief is en sê watter bondel werklik beter waarde bied.', answer: 'Om net totale pryse te vergelyk is misleidend omdat die bondels verskillende hoeveelhede data bied. Ons benodig die prys per GB (eenheidskoers) om regverdig te vergelyk: Bondel A = R270 ÷ 18 = R15 per GB, Bondel B = R350 ÷ 25 = R14 per GB. Aangesien R14 minder is as R15, bied Bondel B werklik beter waarde per GB, al is sy totale prys hoër.', checkMode: 'self' },

        // Blok 6 — Direkte eweredigheid & meerstap-/kaartskaal-woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: '6 identiese bakkers kan 450 brode in een skof bak, almal teen dieselfde konstante koers. Met die aanname van direkte eweredigheid, hoeveel brode sou 9 van hierdie bakkers in een skof kon bak?', answer: '675', checkMode: 'auto', correctAnswer: '675', correctAnswers: ['675', '675 brode'], explanation: 'Brode gebak en aantal bakkers is direk eweredig (dieselfde koers per bakker).\nEenheidskoers = 450 ÷ 6 = 75 brode per bakker.\n9 bakkers: 9 × 75 = 675 brode ✓' },
        { difficulty: 'Hard', question: 'ʼn Kaart word teen ʼn skaal van 1:40 000 geteken. Die afstand tussen twee damme op die kaart is 5,5 cm. Vind die werklike afstand tussen die damme in kilometer.', answer: '2,2 km', checkMode: 'auto', correctAnswer: '2,2', correctAnswers: ['2.2', '2.2km', '2.2 km', '2,2', '2,2km', '2,2 km'], explanation: 'Werklike afstand = 5,5 × 40 000 = 220 000 cm.\nSkakel om na km: 220 000 ÷ 100 000 = 2,2 km ✓' },
        { difficulty: 'Hard', question: "Mnr. Botha se trok gebruik 9 liter diesel vir elke 100 km gery. Diesel kos R23,40 per liter. Hoeveel sal die diesel kos vir ʼn 250 km-rit?", answer: 'R526,50', checkMode: 'auto', correctAnswer: 'R526,50', correctAnswers: ['R526.50', '526.50', '526.5', 'R526.5', 'R526,50', '526,50', '526,5', 'R526,5'], explanation: 'Diesel benodig = (9 ÷ 100) × 250 = 22,5 liter.\nKoste = 22,5 × R23,40 = R526,50 ✓' },
        { difficulty: 'Hard', question: 'ʼn Resep vir 20 koekies gebruik 300 g meel en 100 g botter. Naledi wil 16 koekies volgens dieselfde resepverhoudings maak. Hoeveel gram meel en hoeveel gram botter het sy nodig?', answer: 'Skaalfaktor = 16 ÷ 20 = 0,8.\nMeel: 300 × 0,8 = 240 g.\nBotter: 100 × 0,8 = 80 g.\nNaledi het 240 g meel en 80 g botter nodig.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het verhoudings, ekwivalente verhoudings, verdeling in ʼn verhouding, koerse en eweredigheid baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Jy is selfversekerd met die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die verdeling van ʼn bedrag in ʼn verhouding en eenheidskoerse, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
