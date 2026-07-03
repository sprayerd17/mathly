import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (whole number roles) ─────────────────────────────────────
// properties / prime factors / ratio → blue   (#2563eb)
// calculations / HCF / profit        → green  (#16a34a)
// undefined results / loss           → red    (#dc2626)
// LCM / VAT                          → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Hele Getalle',
  grade: 8,
  // @ts-ignore — subject field extends base type for Grade 8 topics
  subject: 'Mathematics',
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — EIENSKAPPE VAN HELE GETALLE EN DIE DELINGSEIENSKAP VAN NUL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-division-zero',
      title: 'Eienskappe van Hele Getalle en die Delingseienskap van Nul',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die <strong>kommutatiewe</strong>, <strong>assosiatiewe</strong> en <strong>distributiewe</strong> eienskappe van hele getalle. ʼn Nuwe reël in Graad 8 is die <strong>delingseienskap van nul</strong> — enige getal gedeel deur 0 is <strong>onbepaald</strong>, want daar is geen getal wat, vermenigvuldig met 0, ʼn nie-nul resultaat gee nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eienskappe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekeninge')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onbepaald')}</span>` +
        `</div>` +

        // ── Three properties ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie eienskappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">K</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Kommutatiewe eienskap</strong> — die volgorde van getalle beïnvloed nie die resultaat vir optelling en vermenigvuldiging nie.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('a + b = b + a')} &nbsp;&nbsp; ${gr('a × b = b × a')}</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">A</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Assosiatiewe eienskap</strong> — die groepering van getalle beïnvloed nie die resultaat vir optelling en vermenigvuldiging nie.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('(a + b) + c = a + (b + c)')} &nbsp;&nbsp; ${gr('(a × b) × c = a × (b × c)')}</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">D</span>` +
        `<div>` +
        `<p style="margin:0 0 4px;font-size:14px;"><strong style="color:#2563eb;">Distributiewe eienskap</strong> — vermenigvuldiging versprei oor optelling en aftrekking.</p>` +
        `<p style="margin:0;font-size:13px;color:#1e3a8a;">${gr('a(b + c) = ab + ac')} &nbsp;&nbsp; ${gr('a(b − c) = ab − ac')}</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Division property of zero ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Delingseienskap van nul</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">0 ÷ enige getal = 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Nul gedeel deur enige nie-nul getal is altyd ${gr('0')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">enige getal ÷ 0 = onbepaald</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deling deur nul is ${re('onbepaald')} — geen getal vermenigvuldig met 0 kan ʼn nie-nul resultaat gee nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Waarom is deling deur nul onbepaald?</p>` +
        `<p style="margin:0;color:#991b1b;">Vra jouself: watter getal × 0 = 12? Daar is geen antwoord nie — enigiets vermenigvuldig met 0 is 0, nooit 12 nie. Omdat ons geen antwoord kan vind nie, sê ons die resultaat is ${re('onbepaald')}, nie nul nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die distributiewe eienskap om 7(15 + 9) te bereken.',
          answer: `${gr('7(15 + 9) = 168')}`,
          steps: [
            `Identifiseer die ${bl('distributiewe eienskap')}: ${bl('a(b + c) = ab + ac')}. Hier is a = 7, b = 15, c = 9.`,
            `${bl('Versprei:')} ${gr('(7 × 15) + (7 × 9)')}`,
            `${gr('Bereken elke deel:')} 7 × 15 = ${gr('105')} &nbsp; en &nbsp; 7 × 9 = ${gr('63')}`,
            `${gr('Tel die dele bymekaar:')} ${gr('105 + 63 = 168')}`,
            `<strong>Antwoord:</strong> ${gr('7(15 + 9) = 168')} ✓`,
          ],
        },
        {
          question: 'Sipho sê 12 ÷ 0 = 0. Is hy korrek?',
          answer: `${re('Nee — 12 ÷ 0 is onbepaald')}`,
          steps: [
            `Sipho beweer 12 ÷ 0 = 0. Om te toets, gebruik die ${bl('inverse bewerking')}: as 12 ÷ 0 = 0, dan moet 0 × 0 gelyk wees aan 12.`,
            `${re('Maar 0 × 0 = 0, nie 12 nie.')} Daar is geen getal wat, wanneer dit met 0 vermenigvuldig word, 12 gee nie.`,
            `Daarom is 12 ÷ 0 ${re('onbepaald')} — Sipho is ${re('verkeerd')}.`,
            `<strong>Antwoord:</strong> ${re('Nee')} — deling deur 0 is altyd ${re('onbepaald')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — distributiewe eienskap ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die distributiewe eienskap om 6(12+8) te bereken.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: 'Pas die distributiewe eienskap toe: 6(12+8) = (6×12) + (6×8) = 72 + 48 = 120 ✓',
        },

        // ── V2 Maklik — deling deur nul ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is 9÷0?',
          answer: 'onbepaald',
          checkMode: 'auto',
          correctAnswer: 'onbepaald',
          correctAnswers: ['onbepaald', 'Onbepaald'],
          explanation: 'Deling deur nul is onbepaald — geen getal vermenigvuldig met 0 gee 9 nie. Daarom is 9÷0 onbepaald.',
        },

        // ── V3 Medium — nul gedeel deur ʼn getal ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho sê 0÷5=5. Is hy korrek? Verduidelik.',
          answer: 'Nee — 0 gedeel deur enige nie-nul getal is 0, nie 5 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die kommutatiewe, assosiatiewe en distributiewe eienskappe van hele getalle en die delingseienskap van nul verduidelik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visuele tabel wat al drie eienskappe met voorbeelde toon, met die delingsreël vir nul rooi uitgelig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — PRIEMFAKTORE, KGV EN GGF
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-factors-lcm-hcf',
      title: 'Priemfaktore, KGV en GGF',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien om <strong>priemfaktore</strong> van 3-syfer hele getalle te vind, en gebruik <strong>priemfaktorisering</strong>, inspeksie, of faktoriseringsmetodes om die <strong>KGV</strong> (Kleinste Gemene Veelvoud) en <strong>GGF</strong> (Grootste Gemene Faktor) van getalle tot 3 syfers te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('priemfaktore')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('GGF')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('KGV')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Priemgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met presies twee faktore: 1 en homself. Voorbeelde: 2, 3, 5, 7, 11, 13…</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Priemfaktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om ʼn getal as ʼn produk van sy ${bl('priemfaktore')} te skryf deur ʼn faktorboom of herhaalde deling te gebruik.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">GGF</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Grootste Gemene Faktor')} — gebruik die ${bl('priemfaktore')} wat aan al die getalle gemeen is, elkeen geneem tot sy <em>laagste</em> mag.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">KGV</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Kleinste Gemene Veelvoud')} — gebruik al die ${bl('priemfaktore')} wat in enige getal voorkom, elkeen geneem tot sy <em>hoogste</em> mag.</p>` +
        `</div>` +

        `</div>` +

        // ── Method reminder ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">GGF teenoor KGV — vinnige reël</p>` +
        `<p style="margin:0;color:#1e3a8a;">${gr('GGF')} → gemeenskaplike faktore, <em>laagste</em> eksponente. &nbsp;|&nbsp; ${or('KGV')} → alle faktore, <em>hoogste</em> eksponente.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die GGF van 120, 300 en 900 deur priemfaktore te gebruik.',
          answer: `${gr('GGF = 60')}`,
          steps: [
            `${bl('Faktoriseer 120:')} 120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15 = 2 × 2 × 2 × 3 × 5 = ${bl('2³ × 3 × 5')}`,
            `${bl('Faktoriseer 300:')} 300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2 × 2 × 3 × 5 × 5 = ${bl('2² × 3 × 5²')}`,
            `${bl('Faktoriseer 900:')} 900 = 2 × 450 = 2 × 2 × 225 = 2 × 2 × 9 × 25 = 2 × 2 × 3 × 3 × 5 × 5 = ${bl('2² × 3² × 5²')}`,
            `${gr('Vind gemeenskaplike faktore met laagste magte:')} 2 kom in al drie voor — laagste mag is ${gr('2²')}. 3 kom in al drie voor — laagste mag is ${gr('3¹')}. 5 kom in al drie voor — laagste mag is ${gr('5¹')}.`,
            `${gr('GGF')} = ${gr('2² × 3 × 5')} = ${gr('4 × 3 × 5')} = ${gr('60')}`,
            `<strong>Antwoord:</strong> ${gr('GGF(120, 300, 900) = 60')} ✓`,
          ],
        },
        {
          question: 'Vind die KGV van 18 en 24.',
          answer: `${or('KGV = 72')}`,
          steps: [
            `${bl('Faktoriseer 18:')} 18 = 2 × 9 = ${bl('2 × 3²')}`,
            `${bl('Faktoriseer 24:')} 24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3 = ${bl('2³ × 3')}`,
            `${or('Vind alle faktore met hoogste magte:')} 2 kom in albei voor — hoogste mag is ${or('2³')}. 3 kom in albei voor — hoogste mag is ${or('3²')}.`,
            `${or('KGV')} = ${or('2³ × 3²')} = ${or('8 × 9')} = ${or('72')}`,
            `<strong>Antwoord:</strong> ${or('KGV(18, 24) = 72')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Medium — GGF van twee getalle ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die GGF van 144 en 180.',
          answer: '36',
          checkMode: 'auto',
          correctAnswer: '36',
          explanation: '144 = 2⁴ × 3². 180 = 2² × 3² × 5. Gemeenskaplike faktore met laagste magte: 2² × 3² = 4 × 9 = 36. GGF(144, 180) = 36 ✓',
        },

        // ── V5 Medium — KGV van twee getalle ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die KGV van 15 en 20.',
          answer: '60',
          checkMode: 'auto',
          correctAnswer: '60',
          explanation: '15 = 3 × 5. 20 = 2² × 5. KGV gebruik alle faktore met hoogste magte: 2² × 3 × 5 = 4 × 3 × 5 = 60. KGV(15, 20) = 60 ✓',
        },

        // ── V6 Moeilik — GGF van drie getalle deur priemfaktorisering ──────────
        {
          difficulty: 'Hard',
          question: 'Vind die GGF van 90, 150 en 210 deur priemfaktorisering te gebruik.',
          answer: '90=2×3²×5. 150=2×3×5². 210=2×3×5×7. Gemeenskaplike faktore met laagste magte: 2×3×5=30.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat priemfaktorisering met ʼn faktorboom wys en hoe om GGF en KGV vanaf priemfaktore te vind" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Faktorboom vir 120 300 en 900 met GGF groen uitgelig en KGV oranje uitgelig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERHOUDING, KOERS EN PROPORSIE IN FINANSIËLE KONTEKSTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ratio-rate-proportion-financial',
      title: 'Verhouding, Koers en Proporsie in Finansiële Kontekste',
      icon: '💰',
      explanation:
        `<p style="margin-bottom:16px;">Ons los probleme op wat <strong>verhouding</strong> (om hoeveelhede van dieselfde soort te vergelyk), <strong>koers</strong> (om hoeveelhede van verskillende soorte te vergelyk, dikwels spoed, afstand of tyd), en om ʼn getal in ʼn gegewe verhouding te vermeerder of verminder, betrek. Ons pas ook hele getalle, persentasies en desimale toe op finansiële kontekste, insluitend wins, verlies, korting, BTW, begrotings, lenings, enkelvoudige rente, huurkoop en wisselkoerse.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('wins')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verlies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('BTW')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('verhouding')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verhouding</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk hoeveelhede van <em>dieselfde</em> soort. Geskryf as ${bl('a : b')} of as ʼn breuk. Vereenvoudig altyd deur deur die GGF te deel.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Koers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk hoeveelhede van <em>verskillende</em> soorte. Algemene voorbeelde: km/h, R/kg, liter/uur.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Wins</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Wins = verkoopprys − kosprys')}. Persentasiewins = wins ÷ kosprys × 100.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Verlies</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Verlies = kosprys − verkoopprys')}. ʼn Verlies vind plaas wanneer die verkoopprys minder is as die kosprys.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">BTW</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('BTW = koers × prys uitsluitend BTW')}. In Suid-Afrika is BTW 15%. Totale prys = prys + BTW.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vermeerder/verminder in ʼn verhouding</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om te vermeerder in verhouding ${bl('a : b')}: nuwe = oorspronklike ÷ b × a. Om te verminder: nuwe = oorspronklike ÷ a × b.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vermeerder teenoor verminder in ʼn verhouding</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn getal vermeerder word in verhouding ${bl('a : b')} (a &gt; b), deel deur die kleiner deel en vermenigvuldig met die groter deel. Wanneer verminder (a &lt; b), deel deur die groter en vermenigvuldig met die kleiner.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Winkel koop ʼn baadjie vir R200 en verkoop dit vir R260. Vind die wins en die persentasiewins.',
          answer: `${gr('Wins = R60')}; ${gr('Persentasiewins = 30%')}`,
          steps: [
            `${gr('Wins')} = verkoopprys − kosprys = ${gr('R260 − R200')} = ${gr('R60')}`,
            `Persentasiewins = wins ÷ kosprys × 100 = ${gr('60 ÷ 200 × 100')}`,
            `= ${gr('0,30 × 100')} = ${gr('30%')}`,
            `<strong>Antwoord:</strong> ${gr('Wins = R60')} en ${gr('persentasiewins = 30%')} ✓`,
          ],
        },
        {
          question: 'ʼn Item kos R150 uitsluitend 15% BTW. Vind die prys insluitend BTW.',
          answer: `${or('Totale prys = R172,50')}`,
          steps: [
            `${or('BTW-bedrag')} = ${or('BTW-koers × prys uitsluitend BTW')} = ${or('0,15 × R150')} = ${or('R22,50')}`,
            `Totale prys = prys uitsluitend BTW + BTW = R150 + ${or('R22,50')} = ${or('R172,50')}`,
            `<strong>Antwoord:</strong> ${or('R172,50')} ✓`,
          ],
        },
        {
          question: 'Lerato vermeerder R480 in die verhouding 5 : 4. Vind die nuwe bedrag.',
          answer: `${bl('Nuwe bedrag = R600')}`,
          steps: [
            `Die ${bl('verhouding 5 : 4')} beteken ons vermeerder van 4 dele na 5 dele (die nuwe waarde is groter).`,
            `Nuwe bedrag = oorspronklike ÷ kleiner deel × groter deel = R480 ÷ ${bl('4')} × ${bl('5')}`,
            `= ${gr('R120')} × ${bl('5')} = ${bl('R600')}`,
            `<strong>Antwoord:</strong> ${bl('R600')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Maklik — wins ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Winkel koop ʼn item vir R80 en verkoop dit vir R100. Vind die wins.',
          answer: 'R20',
          checkMode: 'auto',
          correctAnswer: 'R20',
          correctAnswers: ['R20', '20'],
          explanation: 'Wins = verkoopprys − kosprys = R100 − R80 = R20 ✓',
        },

        // ── V8 Medium — persentasiewins ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die persentasiewins op die item in Vraag 7.',
          answer: '25%',
          checkMode: 'auto',
          correctAnswer: '25%',
          correctAnswers: ['25%', '25'],
          explanation: 'Persentasiewins = wins ÷ kosprys × 100 = R20 ÷ R80 × 100 = 0,25 × 100 = 25% ✓',
        },

        // ── V9 Medium — prys insluitend BTW ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Item kos R200 uitsluitend 15% BTW. Vind die prys insluitend BTW.',
          answer: 'R230',
          checkMode: 'auto',
          correctAnswer: 'R230',
          correctAnswers: ['R230', '230'],
          explanation: 'BTW = 15% × R200 = 0,15 × R200 = R30. Prys insluitend BTW = R200 + R30 = R230 ✓',
        },

        // ── V10 Moeilik — verminder in ʼn verhouding (foutopsporing) ───────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om R600 in die verhouding 3:2 te verminder gee R900. Is sy korrek? Verduidelik.',
          answer: 'Nee — verminder beteken die nuwe bedrag behoort kleiner te wees. 600÷3×2=400, nie 900 nie.',
          checkMode: 'self',
        },

        // ── V11 Medium — enkelvoudige rente ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Lening van R5000 het enkelvoudige rente van 8% per jaar. Vind die rente na 2 jaar.',
          answer: 'R800',
          checkMode: 'auto',
          correctAnswer: 'R800',
          correctAnswers: ['R800', '800'],
          explanation: 'Enkelvoudige rente = P × i × n = R5 000 × 0,08 × 2 = R800 ✓',
        },

        // ── V12 Moeilik — huurkoop ──────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo koop meubels deur huurkoop, en betaal ʼn deposito van R500 en 12 paaiemente van R350. Vind die totale bedrag betaal.',
          answer: 'R4700',
          checkMode: 'auto',
          correctAnswer: 'R4700',
          correctAnswers: ['R4700', '4700'],
          explanation: 'Totaal = deposito + (aantal paaiemente × maandelikse betaling) = R500 + (12 × R350) = R500 + R4 200 = R4 700 ✓',
        },

        // ── V13 Maklik — vermeerder in ʼn verhouding ─────────────────────────
        {
          difficulty: 'Easy',
          question: 'Amahle vermeerder R240 in die verhouding 5:3. Vind die nuwe bedrag.',
          answer: 'R400',
          checkMode: 'auto',
          correctAnswer: 'R400',
          correctAnswers: ['R400', '400'],
          explanation: 'Vermeerder in verhouding 5:3 beteken deel deur 3 en vermenigvuldig met 5. R240 ÷ 3 × 5 = R80 × 5 = R400 ✓',
        },

        // ── V14 Moeilik — korting dan BTW ─────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Winkel bied ʼn korting van 20% op ʼn R650-item, en voeg dan 15% BTW by die verminderde prys. Vind die finale prys.',
          answer: 'Kortingsbedrag=0,2×650=R130. Verminderde prys=650-130=R520. BTW=0,15×520=R78. Finale prys=520+78=R598.',
          checkMode: 'self',
        },

        // ── V15 Moeilik — wisselkoers ──────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho ruil R3000 om vir Amerikaanse dollar teen ʼn wisselkoers van R18,50 per dollar. Hoeveel dollar ontvang hy, afgerond na die naaste dollar?',
          answer: '162',
          checkMode: 'auto',
          correctAnswer: '162',
          explanation: 'Dollar = R3 000 ÷ R18,50 = 162,16... ≈ 162 (afgerond na die naaste dollar) ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verhouding, koers, proporsie, wins, verlies, BTW en om ʼn hoeveelheid in ʼn gegewe verhouding te vermeerder of verminder dek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Opsommingsdiagram wat wins-, verlies-, BTW- en verhoudingsvermeerdering-of-vermindering-formules toon met kleurgekodeerde etikette" />',
    },

  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het hele getalle bemeester.' },
    { minScore: 12, message: 'Puik werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
}
