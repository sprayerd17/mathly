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
        'Kort video wat die kommutatiewe, assosiatiewe en distributiewe eienskappe van hele getalle en die delingseienskap van nul verduidelik',
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
        'Kort video wat priemfaktorisering met ʼn faktorboom wys en hoe om GGF en KGV vanaf priemfaktore te vind',

      diagramPlaceholder:
        'Faktorboom vir 120 wat vertak na sy priemfaktore 2, 2, 2, 3 en 5, wat ooreenstem met die uitgewerkte voorbeeld se priemfaktorisering',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 190" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="130" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">120</text>` +
        `<line x1="130" y1="26" x2="70" y2="52" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<line x1="130" y1="26" x2="190" y2="52" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<text x="70" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">12</text>` +
        `<text x="190" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">10</text>` +
        `<line x1="70" y1="66" x2="40" y2="92" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<line x1="70" y1="66" x2="100" y2="92" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<line x1="190" y1="66" x2="160" y2="92" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<line x1="190" y1="66" x2="220" y2="92" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<circle cx="40" cy="100" r="11" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="40" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="100" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<circle cx="160" cy="100" r="11" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="160" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<circle cx="220" cy="100" r="11" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="220" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">5</text>` +
        `<line x1="100" y1="106" x2="85" y2="132" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<line x1="100" y1="106" x2="115" y2="132" stroke="#94a3b8" stroke-width="1.5"/>` +
        `<circle cx="85" cy="140" r="11" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="85" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<circle cx="115" cy="140" r="11" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="115" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="130" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5</text>` +
        `<text x="130" y="185" text-anchor="middle" font-size="8" fill="#6b7280">(priemfaktorisering)</text>` +
        `</svg>`,
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

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Spoedformule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Spoed = Afstand ÷ Tyd')}. Herrangskik om afstand (Spoed × Tyd) of tyd (Afstand ÷ Spoed) te vind.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Prys per eenheid (beste waarde)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel die prys deur die hoeveelheid om die ${bl('eenheidsprys')} te vind. Vergelyk eenheidspryse om te sien watter opsie die beste koop is.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">ʼn Bedrag in ʼn verhouding verdeel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die verhoudingsdele bymekaar om die ${bl('totale dele')} te vind. Deel die bedrag deur die totale dele om ${bl('een deel')} te vind, en vermenigvuldig dan met elke verhoudingsgetal.</p>` +
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
        {
          question: 'ʼn Minibustaxi ry 180 km in 2,5 uur teen ʼn konstante spoed. Vind sy gemiddelde spoed.',
          answer: `${bl('Gemiddelde spoed = 72 km/h')}`,
          steps: [
            `Skryf die formule: ${bl('Spoed = Afstand ÷ Tyd')}.`,
            `Vervang die waardes: Spoed = ${bl('180 km')} ÷ ${bl('2,5 h')}.`,
            `Bereken: 180 ÷ 2,5 = ${bl('72')}.`,
            `<strong>Antwoord:</strong> Die gemiddelde spoed is ${bl('72 km/h')} ✓`,
          ],
        },
        {
          question: 'ʼn Winkel verkoop rys in ʼn 3 kg-sak vir R45 en ʼn 5 kg-sak vir R70. Watter sak gee die goedkoopste prys per kilogram?',
          answer: `${bl('Die 5 kg-sak is goedkoper')} (R14/kg teenoor R15/kg)`,
          steps: [
            `Vind die ${bl('eenheidsprys')} van die 3 kg-sak: R45 ÷ 3 = ${bl('R15 per kg')}.`,
            `Vind die ${bl('eenheidsprys')} van die 5 kg-sak: R70 ÷ 5 = ${bl('R14 per kg')}.`,
            `Vergelyk: R14 per kg is minder as R15 per kg, dus is die 5 kg-sak die beste koop.`,
            `<strong>Antwoord:</strong> ${bl('Die 5 kg-sak')} gee die goedkoopste prys per kilogram ✓`,
          ],
        },
        {
          question: 'Thabo, Lerato en Sipho verdeel R840 in die verhouding 3:4:5. Vind elke persoon se aandeel.',
          answer: `Thabo = ${bl('R210')}, Lerato = ${bl('R280')}, Sipho = ${bl('R350')}`,
          steps: [
            `Vind die ${bl('totale dele')}: 3 + 4 + 5 = ${bl('12')}.`,
            `Vind die waarde van ${bl('een deel')}: R840 ÷ 12 = ${bl('R70')}.`,
            `Thabo se aandeel = 3 × R70 = ${bl('R210')}. Lerato se aandeel = 4 × R70 = ${bl('R280')}. Sipho se aandeel = 5 × R70 = ${bl('R350')}.`,
            `<strong>Kontroleer:</strong> R210 + R280 + R350 = R840 ✓`,
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

        // ── V16 Maklik — spoedberekening ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Motor ry 240 km in 4 uur teen ʼn konstante spoed. Vind sy gemiddelde spoed.',
          answer: '60 km/h',
          checkMode: 'auto',
          correctAnswer: '60km/h',
          correctAnswers: ['60km/h', '60 km/h', '60'],
          explanation: 'Spoed = Afstand ÷ Tyd = 240 ÷ 4 = 60 km/h ✓',
        },

        // ── V17 Medium — prys per eenheid / beste waarde ─────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Winkel verkoop boontjies in ʼn 2 kg-pakkie vir R38 en ʼn 4,5 kg-pakkie vir R81. Watter pakkie gee die goedkoopste prys per kilogram?',
          answer: '4,5 kg-pakkie',
          checkMode: 'auto',
          correctAnswer: '4,5 kg-pakkie',
          correctAnswers: ['4,5 kg-pakkie', 'die 4,5 kg-pakkie', '4.5 kg-pakkie', 'die 4.5 kg-pakkie', '4,5kg-pakkie', '4.5kg-pakkie'],
          explanation: '2 kg-pakkie: R38 ÷ 2 = R19 per kg. 4,5 kg-pakkie: R81 ÷ 4,5 = R18 per kg. R18 is minder as R19, dus is die 4,5 kg-pakkie die beste koop ✓',
        },

        // ── V18 Medium — ʼn bedrag in ʼn 2-deel-verhouding verdeel ────────────
        {
          difficulty: 'Medium',
          question: 'Verdeel R560 tussen Palesa en Kagiso in die verhouding 3:5. Hoeveel ontvang elkeen?',
          answer: 'Totale dele = 3+5 = 8. Een deel = 560÷8 = R70. Palesa = 3×70 = R210. Kagiso = 5×70 = R350. Kontroleer: R210+R350 = R560.',
          checkMode: 'self',
        },

        // ── V19 Moeilik — ʼn bedrag in ʼn 3-deel-verhouding verdeel ───────────
        {
          difficulty: 'Hard',
          question: 'Naledi, Kagiso en Zanele verdeel ʼn besigheidswins van R960 in die verhouding 2:3:5. Hoeveel ontvang elkeen?',
          answer: 'Totale dele = 2+3+5 = 10. Een deel = 960÷10 = R96. Naledi = 2×96 = R192. Kagiso = 3×96 = R288. Zanele = 5×96 = R480. Kontroleer: R192+R288+R480 = R960.',
          checkMode: 'self',
        },

        // ── V20 Medium — verdeel in ʼn verhouding (enkele aandeel, outo-nagegaan) ──
        {
          difficulty: 'Medium',
          question: 'R750 word tussen Naledi en Zanele verdeel in die verhouding 2:3. Vind Zanele se aandeel (die groter aandeel).',
          answer: 'R450',
          checkMode: 'auto',
          correctAnswer: 'R450',
          correctAnswers: ['R450', '450'],
          explanation: 'Totale dele = 2+3 = 5. Een deel = R750 ÷ 5 = R150. Zanele se aandeel = 3 × R150 = R450 ✓',
        },

        // ── V21 Moeilik — koersfout-opsporing ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê ʼn motor wat 150 km in 2,5 uur ry, het ʼn spoed van 75 km/h. Is sy korrek? Verduidelik.',
          answer: 'Nee — Spoed = Afstand ÷ Tyd = 150 ÷ 2,5 = 60 km/h, nie 75 km/h nie. Lerato is verkeerd.',
          checkMode: 'self',
        },

        // ── V22 Medium — afstand vind vanaf spoed en tyd ──────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Bus ry teen ʼn konstante spoed van 80 km/h vir 3,5 uur. Vind die afstand afgelê.',
          answer: '280 km',
          checkMode: 'auto',
          correctAnswer: '280km',
          correctAnswers: ['280km', '280 km', '280'],
          explanation: 'Afstand = Spoed × Tyd = 80 × 3,5 = 280 km ✓',
        },
      ],

      videoPlaceholder:
        'Kort video wat verhouding, koers, proporsie, wins, verlies, BTW, spoed en prys per eenheid bereken, en om ʼn bedrag in ʼn gegewe verhouding te verdeel of te vermeerder of verminder dek',
    },

  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het hele getalle bemeester.' },
    { minScore: 12, message: 'Puik werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1: Bewerkingsvolgorde / BODMAS (V1-4)
    // Blok 2: Eienskappe van bewerkings (V5-8)
    // Blok 3: Foutopsporing / kritiek (V9-11)
    // Blok 4: Meerstap-woordprobleme (V12-15)
    // Blok 5: Groot-getal meerstap-berekeninge (V16-18)
    // Blok 6: Gemengde / toegepaste redenasie (V19-20)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Bewerkingsvolgorde / BODMAS
        { difficulty: 'Easy', question: 'Bereken: 8 + 6 × 5', answer: '38', checkMode: 'auto', correctAnswer: '38', explanation: 'Vermenigvuldiging voor optelling: 6 × 5 = 30, dan 8 + 30 = 38 ✓' },
        { difficulty: 'Easy', question: 'Bereken: (14 − 6) × 3 + 7', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Hakies eerste: 14 − 6 = 8. Vermenigvuldig dan: 8 × 3 = 24. Tel dan by: 24 + 7 = 31 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 40 − 24 ÷ 4 + 2 × 3', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: 'Deling en vermenigvuldiging eerste: 24 ÷ 4 = 6 en 2 × 3 = 6. Werk dan van links na regs: 40 − 6 + 6 = 34 + 6 = 40 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 3² + 4 × 5', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Magte eerste: 3² = 9. Vermenigvuldig dan: 4 × 5 = 20. Tel dan by: 9 + 20 = 29 ✓' },

        // Blok 2 — Eienskappe van bewerkings
        { difficulty: 'Easy', question: 'Gebruik die distributiewe eienskap om 8 × (50 + 3) as twee afsonderlike produkte te skryf, en bereken dan die antwoord.', answer: '(8×50)+(8×3) = 400+24 = 424', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gebruik die assosiatiewe eienskap om (7 × 25) × 4 te bereken deur te hergroepeer om die berekening makliker te maak. Wat is die antwoord?', answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'Die assosiatiewe eienskap laat ons hergroepeer: 7 × (25 × 4) = 7 × 100 = 700. Die oorspronklike volgorde gee ook (7 × 25) × 4 = 175 × 4 = 700 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 12 × (20 − 3) te bereken.', answer: '204', checkMode: 'auto', correctAnswer: '204', explanation: 'Versprei: 12 × (20 − 3) = (12 × 20) − (12 × 3) = 240 − 36 = 204 ✓' },
        { difficulty: 'Medium', question: 'Nomvula sê 25 × (8 + 2) gee dieselfde antwoord of sy die hakies eerste bereken of die distributiewe eienskap gebruik. Wys albei metodes en gee die antwoord.', answer: 'Hakies eerste: 25×(8+2)=25×10=250. Distributief: (25×8)+(25×2)=200+50=250. Albei gee 250, so Nomvula is korrek.', checkMode: 'self' },

        // Blok 3 — Foutopsporing / kritiek
        { difficulty: 'Medium', question: 'Zanele bereken 6 + 4 × 2 deur van links na regs te werk en kry (6+4) × 2 = 20. Wat is die korrekte antwoord, en wat het sy verkeerd gedoen?', answer: '14. Sy moes vermenigvuldiging voor optelling gedoen het: 6+4×2 = 6+8 = 14, nie eers optel nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Bongani bereken 30 − (10 − 4) deur die hakies te ignoreer en skryf 30 − 10 − 4 = 16. Wat is die korrekte antwoord?', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: 'Hakies moet eerste bereken word: 10 − 4 = 6, dan 30 − 6 = 24. Bongani se metode om die hakies te verwyder is verkeerd ✓' },
        { difficulty: 'Hard', question: 'Kagiso sê 5 × (6 + 4) is dieselfde as 5 × 6 + 4. Bereken albei uitdrukkings en verduidelik of hy korrek is.', answer: '5×(6+4)=5×10=50. 5×6+4=30+4=34. Hulle is nie gelyk nie, so Kagiso is verkeerd — die hakies verander watter getalle vermenigvuldig word.', checkMode: 'self' },

        // Blok 4 — Meerstap-woordprobleme
        { difficulty: 'Easy', question: 'Thabo koop 4 pakkies appels met 12 appels in elke pakkie. Hy eet 9 appels. Hoeveel appels het hy oor?', answer: '39', checkMode: 'auto', correctAnswer: '39', explanation: 'Totale appels = 4 × 12 = 48. Appels oor = 48 − 9 = 39 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bioskoop verkoop 45 kinderkaartjies teen R15 elk en 12 volwasse kaartjies teen R25 elk. Wat is die totale bedrag ingesamel?', answer: 'R975', checkMode: 'auto', correctAnswer: 'R975', correctAnswers: ['R975', '975'], explanation: 'Kinderkaartjies: 45 × R15 = R675. Volwasse kaartjies: 12 × R25 = R300. Totaal = R675 + R300 = R975 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skryfbehoeftewinkel het 6 bokse van 24 potlode. Die winkel verkoop 38 potlode. Hoeveel potlode is oor?', answer: '106', checkMode: 'auto', correctAnswer: '106', explanation: 'Totale potlode = 6 × 24 = 144. Potlode oor = 144 − 38 = 106 ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool huur 8 busse wat elk 54 leerders vervoer, en 3 minibusse wat elk 29 leerders vervoer, vir ʼn uitstappie. Hoeveel leerders kan altesaam vervoer word?', answer: '519', checkMode: 'auto', correctAnswer: '519', explanation: 'Busse: 8 × 54 = 432. Minibusse: 3 × 29 = 87. Totaal = 432 + 87 = 519 ✓' },

        // Blok 5 — Groot-getal meerstap-berekeninge
        { difficulty: 'Medium', question: 'ʼn Pakhuis het reeds 3 200 items in voorraad en ontvang 4 500 meer items per lewering vir 2 leverings. Bereken: 3 200 + 4 500 × 2.', answer: '12200', checkMode: 'auto', correctAnswer: '12200', correctAnswers: ['12200', '12 200'], explanation: 'Vermenigvuldiging eerste: 4 500 × 2 = 9 000. Tel dan by: 3 200 + 9 000 = 12 200 ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer oes 1 250 kg mielies per hektaar van 8 hektaar, en verkoop dan 3 600 kg by die plaaslike mark. Hoeveel kilogram mielies bly oor?', answer: '6400', checkMode: 'auto', correctAnswer: '6400', correctAnswers: ['6400', '6 400'], explanation: 'Totaal geoes = 1 250 × 8 = 10 000 kg. Oorblywend = 10 000 − 3 600 = 6 400 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Munisipaliteit begin die jaar met 15 000 huishoudings met waterverbindings. Dit koppel elke jaar ʼn ekstra 2 400 huishoudings aan vir die volgende 5 jaar. Bereken die totale aantal gekoppelde huishoudings na 5 jaar, en wys jou werk deur die korrekte bewerkingsvolgorde te gebruik.', answer: '15000+2400×5. Vermenigvuldiging eerste: 2400×5=12000. Tel dan by: 15000+12000=27000 huishoudings.', checkMode: 'self' },

        // Blok 6 — Gemengde / toegepaste redenasie
        { difficulty: 'Medium', question: 'ʼn Leerder sê 6 × (3 + 2) gee dieselfde resultaat as 6 × 3 + 6 × 2. Bereken albei kante en sê of dit die distributiewe eienskap hier bevestig.', answer: '6×(3+2)=6×5=30. 6×3+6×2=18+12=30. Albei is gelyk aan 30, wat die distributiewe eienskap bevestig.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 3 × (120 − 45) + 18 deur die korrekte bewerkingsvolgorde te gebruik, en wys elke stap.', answer: '243', checkMode: 'auto', correctAnswer: '243', explanation: 'Hakies eerste: 120 − 45 = 75. Vermenigvuldig dan: 3 × 75 = 225. Tel dan by: 225 + 18 = 243 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het bewerkingsvolgorde en die eienskappe van hele getalle bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 9, message: 'Goeie poging! Hersien BODMAS en die distributiewe eienskap, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Bewerkingsvolgorde / BODMAS
        { difficulty: 'Easy', question: 'Bereken: 9 + 7 × 4', answer: '37', checkMode: 'auto', correctAnswer: '37', explanation: 'Vermenigvuldiging voor optelling: 7 × 4 = 28, dan 9 + 28 = 37 ✓' },
        { difficulty: 'Easy', question: 'Bereken: (18 − 9) × 4 + 5', answer: '41', checkMode: 'auto', correctAnswer: '41', explanation: 'Hakies eerste: 18 − 9 = 9. Vermenigvuldig dan: 9 × 4 = 36. Tel dan by: 36 + 5 = 41 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 50 − 36 ÷ 6 + 3 × 4', answer: '56', checkMode: 'auto', correctAnswer: '56', explanation: 'Deling en vermenigvuldiging eerste: 36 ÷ 6 = 6 en 3 × 4 = 12. Werk dan van links na regs: 50 − 6 + 12 = 44 + 12 = 56 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 4² + 5 × 6', answer: '46', checkMode: 'auto', correctAnswer: '46', explanation: 'Magte eerste: 4² = 16. Vermenigvuldig dan: 5 × 6 = 30. Tel dan by: 16 + 30 = 46 ✓' },

        // Blok 2 — Eienskappe van bewerkings
        { difficulty: 'Easy', question: 'Gebruik die distributiewe eienskap om 6 × (40 + 7) as twee afsonderlike produkte te skryf, en bereken dan die antwoord.', answer: '(6×40)+(6×7) = 240+42 = 282', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gebruik die assosiatiewe eienskap om (4 × 50) × 6 te bereken deur te hergroepeer om die berekening makliker te maak. Wat is die antwoord?', answer: '1200', checkMode: 'auto', correctAnswer: '1200', correctAnswers: ['1200', '1 200'], explanation: 'Die assosiatiewe eienskap laat ons hergroepeer: 4 × (50 × 6) = 4 × 300 = 1 200. Die oorspronklike volgorde gee ook (4 × 50) × 6 = 200 × 6 = 1 200 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 15 × (30 − 2) te bereken.', answer: '420', checkMode: 'auto', correctAnswer: '420', explanation: 'Versprei: 15 × (30 − 2) = (15 × 30) − (15 × 2) = 450 − 30 = 420 ✓' },
        { difficulty: 'Medium', question: 'Sipho sê 30 × (6 + 4) gee dieselfde antwoord of hy die hakies eerste bereken of die distributiewe eienskap gebruik. Wys albei metodes en gee die antwoord.', answer: 'Hakies eerste: 30×(6+4)=30×10=300. Distributief: (30×6)+(30×4)=180+120=300. Albei gee 300, so Sipho is korrek.', checkMode: 'self' },

        // Blok 3 — Foutopsporing / kritiek
        { difficulty: 'Medium', question: 'Amahle bereken 5 + 6 × 3 deur van links na regs te werk en kry (5+6) × 3 = 33. Wat is die korrekte antwoord, en wat het sy verkeerd gedoen?', answer: '23. Sy moes vermenigvuldiging voor optelling gedoen het: 5+6×3 = 5+18 = 23, nie eers optel nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lindiwe bereken 50 − (12 − 7) deur die hakies te ignoreer en skryf 50 − 12 − 7 = 31. Wat is die korrekte antwoord?', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'Hakies moet eerste bereken word: 12 − 7 = 5, dan 50 − 5 = 45. Lindiwe se metode om die hakies te verwyder is verkeerd ✓' },
        { difficulty: 'Hard', question: 'Tumelo sê 7 × (4 + 5) is dieselfde as 7 × 4 + 5. Bereken albei uitdrukkings en verduidelik of hy korrek is.', answer: '7×(4+5)=7×9=63. 7×4+5=28+5=33. Hulle is nie gelyk nie, so Tumelo is verkeerd — die hakies verander watter getalle vermenigvuldig word.', checkMode: 'self' },

        // Blok 4 — Meerstap-woordprobleme
        { difficulty: 'Easy', question: 'Lerato koop 5 pakkies appels met 14 appels in elke pakkie. Sy eet 11 appels. Hoeveel appels het sy oor?', answer: '59', checkMode: 'auto', correctAnswer: '59', explanation: 'Totale appels = 5 × 14 = 70. Appels oor = 70 − 11 = 59 ✓' },
        { difficulty: 'Medium', question: 'ʼn Teater verkoop 38 kinderkaartjies teen R18 elk en 15 volwasse kaartjies teen R22 elk. Wat is die totale bedrag ingesamel?', answer: 'R1014', checkMode: 'auto', correctAnswer: 'R1014', correctAnswers: ['R1014', '1014', 'R1 014', '1 014'], explanation: 'Kinderkaartjies: 38 × R18 = R684. Volwasse kaartjies: 15 × R22 = R330. Totaal = R684 + R330 = R1 014 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skryfbehoeftewinkel het 9 bokse van 18 penne. Die winkel verkoop 47 penne. Hoeveel penne is oor?', answer: '115', checkMode: 'auto', correctAnswer: '115', explanation: 'Totale penne = 9 × 18 = 162. Penne oor = 162 − 47 = 115 ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool huur 6 busse wat elk 63 leerders vervoer, en 4 minibusse wat elk 35 leerders vervoer, vir ʼn uitstappie. Hoeveel leerders kan altesaam vervoer word?', answer: '518', checkMode: 'auto', correctAnswer: '518', explanation: 'Busse: 6 × 63 = 378. Minibusse: 4 × 35 = 140. Totaal = 378 + 140 = 518 ✓' },

        // Blok 5 — Groot-getal meerstap-berekeninge
        { difficulty: 'Medium', question: 'ʼn Pakhuis het reeds 2 900 items in voorraad en ontvang 5 200 meer items per lewering vir 2 leverings. Bereken: 2 900 + 5 200 × 2.', answer: '13300', checkMode: 'auto', correctAnswer: '13300', correctAnswers: ['13300', '13 300'], explanation: 'Vermenigvuldiging eerste: 5 200 × 2 = 10 400. Tel dan by: 2 900 + 10 400 = 13 300 ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer oes 1 800 kg mielies per hektaar van 6 hektaar, en verkoop dan 4 200 kg by die plaaslike mark. Hoeveel kilogram mielies bly oor?', answer: '6600', checkMode: 'auto', correctAnswer: '6600', correctAnswers: ['6600', '6 600'], explanation: 'Totaal geoes = 1 800 × 6 = 10 800 kg. Oorblywend = 10 800 − 4 200 = 6 600 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Munisipaliteit begin die jaar met 22 000 huishoudings met elektrisiteitverbindings. Dit koppel elke jaar ʼn ekstra 3 100 huishoudings aan vir die volgende 4 jaar. Bereken die totale aantal gekoppelde huishoudings na 4 jaar, en wys jou werk deur die korrekte bewerkingsvolgorde te gebruik.', answer: '22000+3100×4. Vermenigvuldiging eerste: 3100×4=12400. Tel dan by: 22000+12400=34400 huishoudings.', checkMode: 'self' },

        // Blok 6 — Gemengde / toegepaste redenasie
        { difficulty: 'Medium', question: 'ʼn Leerder sê 8 × (5 + 3) gee dieselfde resultaat as 8 × 5 + 8 × 3. Bereken albei kante en sê of dit die distributiewe eienskap hier bevestig.', answer: '8×(5+3)=8×8=64. 8×5+8×3=40+24=64. Albei is gelyk aan 64, wat die distributiewe eienskap bevestig.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 4 × (85 − 29) + 25 deur die korrekte bewerkingsvolgorde te gebruik, en wys elke stap.', answer: '249', checkMode: 'auto', correctAnswer: '249', explanation: 'Hakies eerste: 85 − 29 = 56. Vermenigvuldig dan: 4 × 56 = 224. Tel dan by: 224 + 25 = 249 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het bewerkingsvolgorde en die eienskappe van hele getalle bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 9, message: 'Goeie poging! Hersien BODMAS en die distributiewe eienskap, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Bewerkingsvolgorde / BODMAS
        { difficulty: 'Easy', question: 'Bereken: 7 + 9 × 6', answer: '61', checkMode: 'auto', correctAnswer: '61', explanation: 'Vermenigvuldiging voor optelling: 9 × 6 = 54, dan 7 + 54 = 61 ✓' },
        { difficulty: 'Easy', question: 'Bereken: (20 − 11) × 5 + 9', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 'Hakies eerste: 20 − 11 = 9. Vermenigvuldig dan: 9 × 5 = 45. Tel dan by: 45 + 9 = 54 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 60 − 45 ÷ 9 + 4 × 5', answer: '75', checkMode: 'auto', correctAnswer: '75', explanation: 'Deling en vermenigvuldiging eerste: 45 ÷ 9 = 5 en 4 × 5 = 20. Werk dan van links na regs: 60 − 5 + 20 = 55 + 20 = 75 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 5² + 6 × 4', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: 'Magte eerste: 5² = 25. Vermenigvuldig dan: 6 × 4 = 24. Tel dan by: 25 + 24 = 49 ✓' },

        // Blok 2 — Eienskappe van bewerkings
        { difficulty: 'Easy', question: 'Gebruik die distributiewe eienskap om 9 × (60 + 4) as twee afsonderlike produkte te skryf, en bereken dan die antwoord.', answer: '(9×60)+(9×4) = 540+36 = 576', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Gebruik die assosiatiewe eienskap om (5 × 20) × 9 te bereken deur te hergroepeer om die berekening makliker te maak. Wat is die antwoord?', answer: '900', checkMode: 'auto', correctAnswer: '900', explanation: 'Die assosiatiewe eienskap laat ons hergroepeer: 5 × (20 × 9) = 5 × 180 = 900. Die oorspronklike volgorde gee ook (5 × 20) × 9 = 100 × 9 = 900 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die distributiewe eienskap om 18 × (40 − 3) te bereken.', answer: '666', checkMode: 'auto', correctAnswer: '666', explanation: 'Versprei: 18 × (40 − 3) = (18 × 40) − (18 × 3) = 720 − 54 = 666 ✓' },
        { difficulty: 'Medium', question: 'Naledi sê 40 × (5 + 3) gee dieselfde antwoord of sy die hakies eerste bereken of die distributiewe eienskap gebruik. Wys albei metodes en gee die antwoord.', answer: 'Hakies eerste: 40×(5+3)=40×8=320. Distributief: (40×5)+(40×3)=200+120=320. Albei gee 320, so Naledi is korrek.', checkMode: 'self' },

        // Blok 3 — Foutopsporing / kritiek
        { difficulty: 'Medium', question: 'Palesa bereken 8 + 3 × 7 deur van links na regs te werk en kry (8+3) × 7 = 77. Wat is die korrekte antwoord, en wat het sy verkeerd gedoen?', answer: '29. Sy moes vermenigvuldiging voor optelling gedoen het: 8+3×7 = 8+21 = 29, nie eers optel nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Mpho bereken 45 − (15 − 6) deur die hakies te ignoreer en skryf 45 − 15 − 6 = 24. Wat is die korrekte antwoord?', answer: '36', checkMode: 'auto', correctAnswer: '36', explanation: 'Hakies moet eerste bereken word: 15 − 6 = 9, dan 45 − 9 = 36. Mpho se metode om die hakies te verwyder is verkeerd ✓' },
        { difficulty: 'Hard', question: 'Katlego sê 9 × (3 + 6) is dieselfde as 9 × 3 + 6. Bereken albei uitdrukkings en verduidelik of hy korrek is.', answer: '9×(3+6)=9×9=81. 9×3+6=27+6=33. Hulle is nie gelyk nie, so Katlego is verkeerd — die hakies verander watter getalle vermenigvuldig word.', checkMode: 'self' },

        // Blok 4 — Meerstap-woordprobleme
        { difficulty: 'Easy', question: 'Zinhle koop 6 pakkies appels met 15 appels in elke pakkie. Sy eet 13 appels. Hoeveel appels het sy oor?', answer: '77', checkMode: 'auto', correctAnswer: '77', explanation: 'Totale appels = 6 × 15 = 90. Appels oor = 90 − 13 = 77 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bioskoop verkoop 52 kinderkaartjies teen R12 elk en 20 volwasse kaartjies teen R17 elk. Wat is die totale bedrag ingesamel?', answer: 'R964', checkMode: 'auto', correctAnswer: 'R964', correctAnswers: ['R964', '964'], explanation: 'Kinderkaartjies: 52 × R12 = R624. Volwasse kaartjies: 20 × R17 = R340. Totaal = R624 + R340 = R964 ✓' },
        { difficulty: 'Medium', question: 'ʼn Boekwinkel het 7 bokse van 32 boeke. Die winkel verkoop 56 boeke. Hoeveel boeke is oor?', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'Totale boeke = 7 × 32 = 224. Boeke oor = 224 − 56 = 168 ✓' },
        { difficulty: 'Hard', question: 'ʼn Skool huur 5 busse wat elk 84 leerders vervoer, en 6 minibusse wat elk 41 leerders vervoer, vir ʼn uitstappie. Hoeveel leerders kan altesaam vervoer word?', answer: '666', checkMode: 'auto', correctAnswer: '666', explanation: 'Busse: 5 × 84 = 420. Minibusse: 6 × 41 = 246. Totaal = 420 + 246 = 666 ✓' },

        // Blok 5 — Groot-getal meerstap-berekeninge
        { difficulty: 'Medium', question: 'ʼn Pakhuis het reeds 4 100 items in voorraad en ontvang 3 700 meer items per lewering vir 2 leverings. Bereken: 4 100 + 3 700 × 2.', answer: '11500', checkMode: 'auto', correctAnswer: '11500', correctAnswers: ['11500', '11 500'], explanation: 'Vermenigvuldiging eerste: 3 700 × 2 = 7 400. Tel dan by: 4 100 + 7 400 = 11 500 ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer oes 2 100 kg mielies per hektaar van 5 hektaar, en verkoop dan 3 800 kg by die plaaslike mark. Hoeveel kilogram mielies bly oor?', answer: '6700', checkMode: 'auto', correctAnswer: '6700', correctAnswers: ['6700', '6 700'], explanation: 'Totaal geoes = 2 100 × 5 = 10 500 kg. Oorblywend = 10 500 − 3 800 = 6 700 kg ✓' },
        { difficulty: 'Hard', question: 'ʼn Munisipaliteit begin die jaar met 18 500 huishoudings met waterverbindings. Dit koppel elke jaar ʼn ekstra 2 600 huishoudings aan vir die volgende 6 jaar. Bereken die totale aantal gekoppelde huishoudings na 6 jaar, en wys jou werk deur die korrekte bewerkingsvolgorde te gebruik.', answer: '18500+2600×6. Vermenigvuldiging eerste: 2600×6=15600. Tel dan by: 18500+15600=34100 huishoudings.', checkMode: 'self' },

        // Blok 6 — Gemengde / toegepaste redenasie
        { difficulty: 'Medium', question: 'ʼn Leerder sê 9 × (6 + 2) gee dieselfde resultaat as 9 × 6 + 9 × 2. Bereken albei kante en sê of dit die distributiewe eienskap hier bevestig.', answer: '9×(6+2)=9×8=72. 9×6+9×2=54+18=72. Albei is gelyk aan 72, wat die distributiewe eienskap bevestig.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bereken 5 × (96 − 38) + 30 deur die korrekte bewerkingsvolgorde te gebruik, en wys elke stap.', answer: '320', checkMode: 'auto', correctAnswer: '320', explanation: 'Hakies eerste: 96 − 38 = 58. Vermenigvuldig dan: 5 × 58 = 290. Tel dan by: 290 + 30 = 320 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het bewerkingsvolgorde en die eienskappe van hele getalle bemeester.' },
        { minScore: 14, message: 'Puik werk! Jy is seker van die meeste hiervan — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 9, message: 'Goeie poging! Hersien BODMAS en die distributiewe eienskap, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
