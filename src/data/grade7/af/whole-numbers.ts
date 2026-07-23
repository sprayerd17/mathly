import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (whole numbers roles) ────────────────────────────────────
// place values      → blue   (#2563eb)
// comparison digit  → orange (#ea580c)
// rounding decision → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Hele Getalle',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PLEKWAARDE EN ORDENING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-ordering',
      title: 'Plekwaarde en Ordening',
      icon: '#',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 7 werk ons met hele getalle, insluitend groot waardes tot in die <strong>miljarde</strong>. Ons gebruik <strong>plekwaarde</strong> om getalle te lees, te skryf en te vergelyk. Om getalle te orden, vergelyk ons syfer vir syfer vanaf links, begin by die hoogste plekwaarde. Ons hersien ook <strong>afronding</strong> na verskeie plekwaardes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('plekwaardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelykingsyfer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('afrondingsbesluit')}</span>` +
        `</div>` +

        // ── Place value table ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Plekwaardeposisies</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;width:100%;font-size:14px;min-width:560px;">` +
        `<thead>` +
        `<tr style="background:#eff6ff;">` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Miljarde</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Honderd miljoene</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Tien miljoene</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Miljoene</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Honderdduisende</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Tienduisende</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Duisende</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Honderde</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Tiene</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Ene</th>` +
        `</tr>` +
        `</thead>` +
        `<tbody>` +
        `<tr style="text-align:center;">` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Ordering and rounding rules ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir ordening en afronding</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Ordening')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk eers die aantal syfers — meer syfers beteken ʼn groter getal. As die aantal syfers gelyk is, vergelyk die ${or('syfers')} een vir een vanaf links totdat hulle verskil.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Afronding')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Identifiseer die plek waarna jy afrond. Kyk na die syfer <strong>een plek regs</strong>. As dit ${gr('5 of meer is, rond op')}. As dit minder as 5 is, rond af (hou die syfer dieselfde). Vervang alle syfers regs daarvan met nulle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lees groot getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Groepeer syfers in drie-tallle vanaf regs om groot getalle te lees: <strong>4 523 100</strong> word gelees as "vier miljoen, vyf honderd drie en twintig duisend, een honderd." Om spasies as skeitekens te gebruik (nie kommas nie) is die Suid-Afrikaanse konvensie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Orden van kleinste na grootste: 4 523 100, 4 519 800, 45 200 000.',
          answer: `${or('4 519 800')}, ${or('4 523 100')}, ${bl('45 200 000')}`,
          steps: [
            `<strong>Vergelyk die aantal syfers:</strong> ${bl('45 200 000')} het <strong>8 syfers</strong>. Beide ${or('4 523 100')} en ${or('4 519 800')} het <strong>7 syfers</strong>. Meer syfers beteken ʼn groter getal — dus is ${bl('45 200 000')} die ${bl('grootste')}.`,
            `<strong>Vergelyk die twee 7-syfergetalle syfer vir syfer:</strong> Albei begin met ${or('4')} — dieselfde. Volgende syfer: ${or('5')} teenoor ${or('5')} — dieselfde. Volgende: ${or('2')} teenoor ${or('1')} — hier verskil hulle. Aangesien ${or('1')} &lt; ${or('2')}, weet ons <strong>4 519 800 &lt; 4 523 100</strong>.`,
            `<strong>Orden (kleinste na grootste):</strong> ${gr('4 519 800')}, ${gr('4 523 100')}, ${gr('45 200 000')}`,
          ],
        },
        {
          question: 'Rond 38 462 719 af na die naaste honderdduisend.',
          answer: `${gr('38 500 000')}`,
          steps: [
            `Identifiseer die ${bl('honderdduisende')}-syfer in <strong>38 462 719</strong>: die syfer is ${bl('4')} (in die honderdduisende-posisie).`,
            `Kyk een plek regs — die ${or('tienduisende')}-syfer is ${or('6')}. Aangesien ${gr('6 ≥ 5')}, ${gr('rond ons op')}.`,
            `Rond die ${bl('4')} op na ${gr('5')} en vervang alle syfers regs daarvan met nulle. <strong>Antwoord: ${gr('38 500 000')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — ordening van groot getalle ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Orden van kleinste na grootste: 320 450, 32 045 000, 3 204 500.',
          answer: '320 450, 3 204 500, 32 045 000',
          checkMode: 'self',
        },

        // ── V2 Medium — afronding na die naaste miljoen ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Rond 67 845 230 af na die naaste miljoen.',
          answer: '68 000 000',
          checkMode: 'auto',
          correctAnswer: '68 000 000',
          explanation: 'Identifiseer die miljoene-syfer: 7.\nKyk een plek regs — die honderdduisende-syfer is 8. Aangesien 8 ≥ 5, rond ons op.\n7 rond op na 8. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 68 000 000 ✓',
        },

        // ── V3 Moeilik — wanopvatting oor afronding ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê 5 999 999 rond af na 5 000 000 na die naaste miljoen. Is hy korrek?',
          answer: 'Nee — die honderdduisende-syfer is 9, dus rond dit op na 6 000 000.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Plekwaardetabel wat 38 462 719 toon met die honderdduisende-syfer blou uitgelig, die tienduisende-syfer oranje uitgelig, en die afrondingsbesluit groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 155" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="19" y="14" font-size="7" text-anchor="middle" fill="#6b7280">TM</text>` +
        `<text x="49" y="14" font-size="7" text-anchor="middle" fill="#6b7280">M</text>` +
        `<text x="79" y="14" font-size="7" text-anchor="middle" fill="#2563eb">HD</text>` +
        `<text x="109" y="14" font-size="7" text-anchor="middle" fill="#ea580c">TD</text>` +
        `<text x="139" y="14" font-size="7" text-anchor="middle" fill="#6b7280">D</text>` +
        `<text x="169" y="14" font-size="7" text-anchor="middle" fill="#6b7280">H</text>` +
        `<text x="199" y="14" font-size="7" text-anchor="middle" fill="#6b7280">T</text>` +
        `<text x="229" y="14" font-size="7" text-anchor="middle" fill="#6b7280">E</text>` +
        `<rect x="6" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="36" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="66" y="18" width="26" height="32" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<rect x="96" y="18" width="26" height="32" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<rect x="126" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="156" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="186" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="216" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="19" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="49" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="79" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">4</text>` +
        `<text x="109" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">6</text>` +
        `<text x="139" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="169" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="199" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="229" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">9</text>` +
        `<text x="94" y="66" text-anchor="middle" font-size="8" font-weight="700" fill="#2563eb">afrondingsyfer = 4</text>` +
        `<text x="94" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">syfer regs = 6 → rond op</text>` +
        `<line x1="140" y1="86" x2="140" y2="104" stroke="#16a34a" stroke-width="2"/>` +
        `<polygon points="140,110 134,100 146,100" fill="#16a34a"/>` +
        `<text x="140" y="128" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">38 500 000</text>` +
        `<text x="140" y="144" text-anchor="middle" font-size="9" fill="#6b7280">afgerond na naaste honderdduisend</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om groot hele getalle tot in die miljarde te lees, te orden en af te rond met behulp van plekwaarde',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — BEWERKINGS MET GROOT GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-large-numbers',
      title: 'Bewerkings met Groot Getalle',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas <strong>optelling, aftrekking, vermenigvuldiging en deling</strong> toe op groot hele getalle deur dieselfde metodes te gebruik wat in vorige grade geleer is, nou met groter waardes en meer komplekse meerstap-probleme. <strong>Eers skat</strong> help om te bevestig of die finale antwoord redelik is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bewerkings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('tussenstappe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Operation strategies ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategieë vir bewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Optelling & Aftrekking')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Belyn syfers in kolomme. Werk van regs na links. Skuif oor (optelling) of leen (aftrekking) soos nodig.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vermenigvuldiging')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik lang vermenigvuldiging of breek dit in dele op. Skat eers deur af te rond om te toets of jou antwoord redelik is.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Deling')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik lang deling. Toets jou antwoord deur die kwosiënt met die deler te vermenigvuldig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Skatting')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rond elke getal af na sy hoogste plekwaarde voor jy bereken. Vergelyk die skatting met jou antwoord om foute op te spoor.</p>` +
        `</div>` +

        `</div>` +

        // ── BODMAS tip ───────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Meerstap-probleme: werk in die regte volgorde</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn probleem meer as een bewerking het, ${or('onderstreep die tussenresultaat')} na elke stap. Dit maak dit maklik om foute op te spoor en jou werk te volg. Skryf die ${gr('finale antwoord')} duidelik aan die einde.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Maatskappy verkoop 24 580 eenhede per maand. Hoeveel eenhede word in ʼn jaar verkoop?',
          answer: `${gr('294 960')} eenhede`,
          steps: [
            `Identifiseer die ${bl('bewerking')}: ʼn jaar het 12 maande, dus ${bl('vermenigvuldig')} ons: ${or('24 580 × 12')}.`,
            `${or('Skat eers:')} 25 000 × 12 = 300 000. Ons antwoord behoort naby aan 300 000 te wees.`,
            `${or('Bereken:')} 24 580 × 12<br>= 24 580 × 10 + 24 580 × 2<br>= 245 800 + 49 160<br>= ${gr('294 960')}`,
            `<strong>Toets teen die skatting:</strong> 294 960 ≈ 300 000 ✓ — die antwoord is redelik. <strong>Antwoord: ${gr('294 960')} eenhede.</strong>`,
          ],
        },
        {
          question: 'Lerato het R450 000. Sy spandeer R128 750 en verdien dan R67 300. Hoeveel het sy?',
          answer: `R${gr('388 550')}`,
          steps: [
            `Dit is ʼn ${bl('tweestap')}-probleem. Trek eers die bedrag wat spandeer is af, tel dan die bedrag wat verdien is by.`,
            `<strong>Stap 1 — trek af:</strong> ${or('450 000 − 128 750')} = ${or('321 250')}`,
            `<strong>Stap 2 — tel by:</strong> ${or('321 250 + 67 300')} = ${gr('388 550')}`,
            `<strong>Antwoord:</strong> Lerato het R${gr('388 550')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Maklik — vermenigvuldiging ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 3 450 × 24.',
          answer: '82 800',
          checkMode: 'auto',
          correctAnswer: '82 800',
          explanation: '3 450 × 24\n= 3 450 × 20 + 3 450 × 4\n= 69 000 + 13 800\n= 82 800 ✓',
        },

        // ── V5 Medium — woordprobleem met vermenigvuldiging ───────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Fabriek maak 18 750 items per week. Hoeveel items maak dit in 8 weke?',
          answer: '150 000',
          checkMode: 'auto',
          correctAnswer: '150 000',
          explanation: '18 750 × 8\n= 18 000 × 8 + 750 × 8\n= 144 000 + 6 000\n= 150 000 items ✓',
        },

        // ── V6 Moeilik — meerstap woordprobleem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het R680 000. Sy spandeer R245 500 en verdien dan R98 300. Hoeveel het sy?',
          answer: 'R532 800',
          checkMode: 'auto',
          correctAnswer: 'R532 800',
          correctAnswers: ['R532 800', '532 800', 'R532800', '532800'],
          explanation: 'Stap 1 — trek af: 680 000 − 245 500 = 434 500\nStap 2 — tel by: 434 500 + 98 300 = 532 800\nAntwoord: R532 800 ✓',
        },
      ],

      diagramPlaceholder:
        'Kolomuitleg wat 24 580 vermenigvuldig met 12 toon met tussenstappe oranje uitgelig en die finale antwoord groen uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:'Courier New',monospace;">` +
        `<text x="200" y="28" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">24 580</text>` +
        `<text x="200" y="54" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">×    12</text>` +
        `<line x1="20" y1="64" x2="200" y2="64" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="90" text-anchor="end" font-size="16" font-weight="700" fill="#ea580c">49 160</text>` +
        `<text x="150" y="102" text-anchor="end" font-size="9" fill="#ea580c">(24 580 × 2)</text>` +
        `<text x="200" y="128" text-anchor="end" font-size="16" font-weight="700" fill="#ea580c">245 800</text>` +
        `<text x="150" y="140" text-anchor="end" font-size="9" fill="#ea580c">(24 580 × 10)</text>` +
        `<line x1="20" y1="148" x2="200" y2="148" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="176" text-anchor="end" font-size="20" font-weight="700" fill="#16a34a">294 960</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om optelling, aftrekking en vermenigvuldiging toe te pas op groot hele getalle, insluitend meerstap-probleme en skatting',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — EKSPONENTE: KWADRATE EN KUBUSSE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponents-squares-cubes',
      title: 'Eksponente — Kwadrate en Kubusse',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Eksponent</strong> wys hoeveel keer ʼn getal met homself vermenigvuldig word. ʼn <strong>gekwadreerde</strong> getal word twee keer met homself vermenigvuldig, geskryf met ʼn klein <sup>2</sup> — byvoorbeeld ${bl('5')}${or('²')} = 5 × 5 = ${gr('25')}. ʼn <strong>gekubusde</strong> getal word drie keer met homself vermenigvuldig, geskryf met ʼn klein <sup>3</sup> — byvoorbeeld ${bl('3')}${or('³')} = 3 × 3 × 3 = ${gr('27')}. Die <strong>vierkantswortel</strong> van ʼn getal is die waarde wat, wanneer dit gekwadreer word, daardie getal gee. Die <strong>kubuswortel</strong> werk dieselfde vir kubusse.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grondgetal')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eksponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('antwoord')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Grondgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat met homself vermenigvuldig word. Geskryf in normale grootte.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Eksponent (indeks)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die klein verhoogde getal wat wys hoeveel keer die grondgetal met homself vermenigvuldig word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierkantswortel (√)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat, wanneer dit gekwadreer word, die oorspronklike getal gee. √64 = 8 want 8² = 64.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kubuswortel (∛)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat, wanneer dit gekubus word, die oorspronklike getal gee. ∛27 = 3 want 3³ = 27.</p>` +
        `</div>` +

        `</div>` +

        // ── Common squares and cubes ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Volmaakte kwadrate om te ken</p>` +
        `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">` +
        ['1²=1','2²=4','3²=9','4²=16','5²=25','6²=36','7²=49','8²=64','9²=81','10²=100','11²=121','12²=144'].map(s => {
          const [lhs, rhs] = s.split('=')
          return `<span style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:8px;padding:6px 12px;font-size:14px;font-weight:700;color:#1e40af;">${lhs} = ${rhs}</span>`
        }).join('') +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Volmaakte kubusse om te ken</p>` +
        `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">` +
        ['1³=1','2³=8','3³=27','4³=64','5³=125'].map(s => {
          const [lhs, rhs] = s.split('=')
          return `<span style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:6px 12px;font-size:14px;font-weight:700;color:#92400e;">${lhs} = ${rhs}</span>`
        }).join('') +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wortels en magte is inverses</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kwadreer en die vierkantswortel trek maak mekaar ongedaan — net soos vermenigvuldiging en deling. As jy jou volmaakte kwadrate en kubusse uit jou kop ken, kan jy vierkants- en kubuswortels dadelik aflees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken 8² en vind die vierkantswortel van 64.',
          answer: `${bl('8')}${or('²')} = ${gr('64')} &nbsp;|&nbsp; √${gr('64')} = ${bl('8')}`,
          steps: [
            `<strong>Bereken ${bl('8')}${or('²')}:</strong> Die ${or('eksponent')} is ${or('2')}, dus vermenigvuldig ons die ${bl('grondgetal')} twee keer met homself: ${bl('8')} × ${bl('8')} = ${gr('64')}`,
            `<strong>Vind √${gr('64')}:</strong> Ons benodig die waarde wat, wanneer dit gekwadreer word, ${gr('64')} gee. Vra: "__ × __ = 64?" Aangesien ${bl('8')} × ${bl('8')} = ${gr('64')}, is die vierkantswortel van ${gr('64')} gelyk aan ${bl('8')}.`,
            `<strong>Opsomming:</strong> ${bl('8')}${or('²')} = ${gr('64')} &nbsp;en&nbsp; √${gr('64')} = ${bl('8')} ✓`,
          ],
        },
        {
          question: 'Bereken 4³ en vind die kubuswortel van 27.',
          answer: `${bl('4')}${or('³')} = ${gr('64')} &nbsp;|&nbsp; ∛${gr('27')} = ${bl('3')}`,
          steps: [
            `<strong>Bereken ${bl('4')}${or('³')}:</strong> Die ${or('eksponent')} is ${or('3')}, dus vermenigvuldig ons die ${bl('grondgetal')} drie keer met homself: ${bl('4')} × ${bl('4')} × ${bl('4')} = 16 × 4 = ${gr('64')}`,
            `<strong>Vind ∛${gr('27')}:</strong> Ons benodig die waarde wat, wanneer dit gekubus word, ${gr('27')} gee. Vra: "__ × __ × __ = 27?" Aangesien ${bl('3')} × ${bl('3')} × ${bl('3')} = ${gr('27')}, is die kubuswortel van ${gr('27')} gelyk aan ${bl('3')}.`,
            `<strong>Opsomming:</strong> ${bl('4')}${or('³')} = ${gr('64')} &nbsp;en&nbsp; ∛${gr('27')} = ${bl('3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Maklik — kwadraat ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 9².',
          answer: '81',
          checkMode: 'auto',
          correctAnswer: '81',
          explanation: '9² = 9 × 9 = 81 ✓',
        },

        // ── V8 Maklik — kubus ────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 5³.',
          answer: '125',
          checkMode: 'auto',
          correctAnswer: '125',
          explanation: '5³ = 5 × 5 × 5 = 25 × 5 = 125 ✓',
        },

        // ── V9 Medium — vierkantswortel ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die vierkantswortel van 144.',
          answer: '12',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: '√144 = 12 want 12 × 12 = 144 ✓',
        },

        // ── V10 Medium — kubuswortel ────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die kubuswortel van 1 000.',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: '∛1 000 = 10 want 10 × 10 × 10 = 1 000 ✓',
        },

        // ── V11 Moeilik — redenering oor volmaakte kubusse ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die vierkantswortel van 81 is 9 en die kubuswortel van 81 is ook moontlik om presies te vind. Is die tweede deel korrek?',
          answer: 'Nee — 81 is nie ʼn volmaakte kubus nie. Daar is geen heelgetal wat, wanneer dit gekubus word, presies 81 gee nie.',
          checkMode: 'self',
        },

        // ── V12 Moeilik — gekombineerde berekening ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Bereken (6²) + (3³).',
          answer: '63',
          checkMode: 'auto',
          correctAnswer: '63',
          explanation: '6² = 6 × 6 = 36\n3³ = 3 × 3 × 3 = 27\n36 + 27 = 63 ✓',
        },
      ],

      diagramPlaceholder:
        'Visuele diagram wat 8 in die kwadraat as ʼn vierkant met 8 rye en 8 kolomme gelyk aan 64 toon, en 3 in die kubus as ʼn kubus met 3 lae van elk 3 by 3 gelyk aan 27, met grondgetalle blou, eksponente oranje, en antwoorde groen',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="47" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">8</text>` +
        `<text x="6" y="61" font-size="12" font-weight="700" fill="#2563eb">8</text>` +
        `<rect x="15" y="25" width="64" height="64" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 7 }, (_, i) => `<line x1="${15 + 8 * (i + 1)}" y1="25" x2="${15 + 8 * (i + 1)}" y2="89" stroke="#2563eb" stroke-width="0.75" stroke-opacity="0.4"/>`).join('') +
        Array.from({ length: 7 }, (_, i) => `<line x1="15" y1="${25 + 8 * (i + 1)}" x2="79" y2="${25 + 8 * (i + 1)}" stroke="#2563eb" stroke-width="0.75" stroke-opacity="0.4"/>`).join('') +
        `<text x="47" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">8² = 8 × 8 = 64</text>` +
        `<text x="138" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">3</text>` +
        `<text x="106" y="61" font-size="12" font-weight="700" fill="#ea580c">3</text>` +
        `<rect x="120" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="132" y1="39" x2="132" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="144" y1="39" x2="144" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="120" y1="51" x2="156" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="120" y1="63" x2="156" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<rect x="164" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="176" y1="39" x2="176" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="188" y1="39" x2="188" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="164" y1="51" x2="200" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="164" y1="63" x2="200" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<rect x="208" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="220" y1="39" x2="220" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="232" y1="39" x2="232" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="208" y1="51" x2="244" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="208" y1="63" x2="244" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<text x="182" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">3³ = 3 × 3 × 3 = 27</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat eksponente, kwadrate, kubusse, vierkantswortels en kubuswortels verduidelik met visuele modelle en uitgewerkte voorbeelde',
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Uitstekend! Jy het hele getalle bemeester.' },
    { minScore: 9, message: 'Puik werk!' },
    { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Plekwaarde, vergelyking en ordening van groot getalle (Easy-Medium) — posisies 0-3
        { difficulty: 'Easy', question: 'In die getal 5 172 946, wat is die plekwaarde van die syfer 7?', answer: 'Tienduisende', checkMode: 'auto', correctAnswer: 'tienduisende', correctAnswers: ['tienduisende', 'Tienduisende'], explanation: 'Tel plekwaardes van regs af: ene, tiene, honderde, duisende, tienduisende, honderdduisende, miljoene.\nIn 5 172 946 is die syfers 5-1-7-2-9-4-6, dus is 7 die derde syfer van links af.\nDit is die tienduisende-plek.' },
        { difficulty: 'Easy-Medium', question: 'Wat is die waarde van die syfer 3 in 632 458 000?', answer: '30 000 000', checkMode: 'auto', correctAnswer: '30 000 000', correctAnswers: ['30 000 000', '30000000'], explanation: 'In 632 458 000 is die syfer 3 in die tien miljoene-plek.\nWaarde = 3 × 10 000 000 = 30 000 000' },
        { difficulty: 'Medium', question: 'Watter getal is groter: 82 461 300 of 8 246 130?', answer: '82 461 300', checkMode: 'auto', correctAnswer: '82 461 300', correctAnswers: ['82 461 300', '82461300'], explanation: 'Vergelyk eers die aantal syfers.\n82 461 300 het 8 syfers. 8 246 130 het 7 syfers.\nMeer syfers beteken ʼn groter getal, dus is 82 461 300 groter.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste: 6 205 400, 620 540, 62 054 000.', answer: '620 540, 6 205 400, 62 054 000', checkMode: 'self' },

        // Blok 2 — Afronding na ʼn gegewe plekwaarde (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Rond 48 623 af na die naaste duisend.', answer: '49 000', checkMode: 'auto', correctAnswer: '49 000', correctAnswers: ['49 000', '49000'], explanation: 'Die duisende-syfer is 8.\nKyk een plek regs — die honderde-syfer is 6. Aangesien 6 ≥ 5, rond ons op.\n8 rond op na 9. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 49 000' },
        { difficulty: 'Easy-Medium', question: 'Rond 275 480 af na die naaste tienduisend.', answer: '280 000', checkMode: 'auto', correctAnswer: '280 000', correctAnswers: ['280 000', '280000'], explanation: 'Die tienduisende-syfer is 7.\nKyk een plek regs — die duisende-syfer is 5. Aangesien 5 ≥ 5, rond ons op.\n7 rond op na 8. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 280 000' },
        { difficulty: 'Medium', question: 'Rond 4 763 900 af na die naaste honderdduisend.', answer: '4 800 000', checkMode: 'auto', correctAnswer: '4 800 000', correctAnswers: ['4 800 000', '4800000'], explanation: 'Die honderdduisende-syfer is 7.\nKyk een plek regs — die tienduisende-syfer is 6. Aangesien 6 ≥ 5, rond ons op.\n7 rond op na 8. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 4 800 000' },
        { difficulty: 'Medium', question: 'Rond 53 218 700 af na die naaste miljoen.', answer: '53 000 000', checkMode: 'auto', correctAnswer: '53 000 000', correctAnswers: ['53 000 000', '53000000'], explanation: 'Die miljoene-syfer is 3.\nKyk een plek regs — die honderdduisende-syfer is 2. Aangesien 2 < 5, rond ons af.\nHou die 3 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 53 000 000' },

        // Blok 3 — Bewerkings met groot getalle (Easy-Hard) — posisies 8-12
        { difficulty: 'Easy', question: 'Bereken 2 340 × 16.', answer: '37 440', checkMode: 'auto', correctAnswer: '37 440', correctAnswers: ['37 440', '37440'], explanation: '2 340 × 16\n= 2 340 × 10 + 2 340 × 6\n= 23 400 + 14 040\n= 37 440' },
        { difficulty: 'Easy-Medium', question: 'Bereken 84 672 ÷ 24.', answer: '3 528', checkMode: 'auto', correctAnswer: '3 528', correctAnswers: ['3 528', '3528'], explanation: '84 672 ÷ 24 = 3 528\nToets: 3 528 × 24 = 84 672 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool het R84 350 by ʼn pretlopie ingesamel en R37 620 by ʼn bakverkoping. Hoeveel het hulle in totaal ingesamel?', answer: 'R121 970', checkMode: 'auto', correctAnswer: 'R121 970', correctAnswers: ['R121 970', '121 970', 'R121970', '121970'], explanation: '84 350 + 37 620 = 121 970\nAntwoord: R121 970' },
        { difficulty: 'Medium', question: 'ʼn Fabriek pak 3 250 bokse per dag. Hoeveel bokse pak dit in 14 dae?', answer: '45 500', checkMode: 'auto', correctAnswer: '45 500', correctAnswers: ['45 500', '45500'], explanation: '3 250 × 14\n= 3 250 × 10 + 3 250 × 4\n= 32 500 + 13 000\n= 45 500' },
        { difficulty: 'Hard', question: 'Thabo het R125 000 gespaar. Hy spandeer R38 400 op ʼn motorherstel en verdien dan R52 750 van ʼn newe-werk. Hoeveel het hy nou?', answer: 'R139 350', checkMode: 'auto', correctAnswer: 'R139 350', correctAnswers: ['R139 350', '139 350', 'R139350', '139350'], explanation: 'Stap 1 — trek af: 125 000 − 38 400 = 86 600\nStap 2 — tel by: 86 600 + 52 750 = 139 350\nAntwoord: R139 350' },

        // Blok 4 — Kwadrate en vierkantswortels (Easy-Medium) — posisies 13-15
        { difficulty: 'Easy', question: 'Bereken 7².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '7² = 7 × 7 = 49' },
        { difficulty: 'Medium', question: 'Vind die vierkantswortel van 121.', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: '√121 = 11 want 11 × 11 = 121' },
        { difficulty: 'Medium', question: 'Bereken 6² + 9².', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: '6² = 6 × 6 = 36\n9² = 9 × 9 = 81\n36 + 81 = 117' },

        // Blok 5 — Kubusse en kubuswortels (Easy-Medium) — posisies 16-17
        { difficulty: 'Easy', question: 'Bereken 4³.', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '4³ = 4 × 4 × 4 = 16 × 4 = 64' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 125.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '∛125 = 5 want 5 × 5 × 5 = 125' },

        // Blok 6 — Wanopvattings en redenering (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'ʼn Leerder rond 6 499 999 af na die naaste miljoen en kry 7 000 000. Is dit korrek? Verduidelik.', answer: 'Nee — die miljoene-syfer is 6, en die syfer een plek regs (honderdduisende) is 4, wat minder as 5 is, dus rond ons af. Die korrekte antwoord is 6 000 000, nie 7 000 000 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê dat (5 + 3)² dieselfde is as 5² + 3². Is dit korrek? Verduidelik en gee die korrekte waarde van (5 + 3)².', answer: 'Nee — (5 + 3)² = 8² = 64, maar 5² + 3² = 25 + 9 = 34. Hierdie is nie gelyk nie, dus is die kwadraat van ʼn som nie dieselfde as om elke term afsonderlik te kwadreer nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het plekwaarde, afronding, bewerkings met groot getalle, kwadrate en kubusse bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan die vrae wat jy oor afronding of bewerkings verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor plekwaarde en berekeninge met groot getalle weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Plekwaarde, vergelyking en ordening van groot getalle (Easy-Medium) — posisies 0-3
        { difficulty: 'Easy', question: 'In die getal 7 249 583, wat is die plekwaarde van die syfer 2?', answer: 'Honderdduisende', checkMode: 'auto', correctAnswer: 'honderdduisende', correctAnswers: ['honderdduisende', 'Honderdduisende'], explanation: 'Tel plekwaardes van regs af: ene, tiene, honderde, duisende, tienduisende, honderdduisende, miljoene.\nIn 7 249 583 is die syfers 7-2-4-9-5-8-3, dus is 2 die tweede syfer van links af.\nDit is die honderdduisende-plek.' },
        { difficulty: 'Easy-Medium', question: 'Wat is die waarde van die syfer 5 in 519 483 000?', answer: '500 000 000', checkMode: 'auto', correctAnswer: '500 000 000', correctAnswers: ['500 000 000', '500000000'], explanation: 'In 519 483 000 is die syfer 5 in die honderd miljoene-plek.\nWaarde = 5 × 100 000 000 = 500 000 000' },
        { difficulty: 'Medium', question: 'Watter getal is groter: 45 902 100 of 4 590 210?', answer: '45 902 100', checkMode: 'auto', correctAnswer: '45 902 100', correctAnswers: ['45 902 100', '45902100'], explanation: 'Vergelyk eers die aantal syfers.\n45 902 100 het 8 syfers. 4 590 210 het 7 syfers.\nMeer syfers beteken ʼn groter getal, dus is 45 902 100 groter.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste: 5 108 300, 510 830, 51 083 000.', answer: '510 830, 5 108 300, 51 083 000', checkMode: 'self' },

        // Blok 2 — Afronding na ʼn gegewe plekwaarde (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Rond 37 218 af na die naaste duisend.', answer: '37 000', checkMode: 'auto', correctAnswer: '37 000', correctAnswers: ['37 000', '37000'], explanation: 'Die duisende-syfer is 7.\nKyk een plek regs — die honderde-syfer is 2. Aangesien 2 < 5, rond ons af.\nHou die 7 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 37 000' },
        { difficulty: 'Easy-Medium', question: 'Rond 384 260 af na die naaste tienduisend.', answer: '380 000', checkMode: 'auto', correctAnswer: '380 000', correctAnswers: ['380 000', '380000'], explanation: 'Die tienduisende-syfer is 8.\nKyk een plek regs — die duisende-syfer is 4. Aangesien 4 < 5, rond ons af.\nHou die 8 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 380 000' },
        { difficulty: 'Medium', question: 'Rond 6 249 500 af na die naaste honderdduisend.', answer: '6 200 000', checkMode: 'auto', correctAnswer: '6 200 000', correctAnswers: ['6 200 000', '6200000'], explanation: 'Die honderdduisende-syfer is 2.\nKyk een plek regs — die tienduisende-syfer is 4. Aangesien 4 < 5, rond ons af.\nHou die 2 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 6 200 000' },
        { difficulty: 'Medium', question: 'Rond 78 512 300 af na die naaste miljoen.', answer: '79 000 000', checkMode: 'auto', correctAnswer: '79 000 000', correctAnswers: ['79 000 000', '79000000'], explanation: 'Die miljoene-syfer is 8.\nKyk een plek regs — die honderdduisende-syfer is 5. Aangesien 5 ≥ 5, rond ons op.\n8 rond op na 9. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 79 000 000' },

        // Blok 3 — Bewerkings met groot getalle (Easy-Hard) — posisies 8-12
        { difficulty: 'Easy', question: 'Bereken 4 120 × 18.', answer: '74 160', checkMode: 'auto', correctAnswer: '74 160', correctAnswers: ['74 160', '74160'], explanation: '4 120 × 18\n= 4 120 × 20 − 4 120 × 2\n= 82 400 − 8 240\n= 74 160' },
        { difficulty: 'Easy-Medium', question: 'Bereken 78 336 ÷ 24.', answer: '3 264', checkMode: 'auto', correctAnswer: '3 264', correctAnswers: ['3 264', '3264'], explanation: '78 336 ÷ 24 = 3 264\nToets: 3 264 × 24 = 78 336 ✓' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie het R56 480 in Maart ingesamel en R42 950 in April. Hoeveel het hulle in totaal ingesamel?', answer: 'R99 430', checkMode: 'auto', correctAnswer: 'R99 430', correctAnswers: ['R99 430', '99 430', 'R99430', '99430'], explanation: '56 480 + 42 950 = 99 430\nAntwoord: R99 430' },
        { difficulty: 'Medium', question: 'ʼn Bakkery bak 2 480 brode per dag. Hoeveel brode bak dit in 21 dae?', answer: '52 080', checkMode: 'auto', correctAnswer: '52 080', correctAnswers: ['52 080', '52080'], explanation: '2 480 × 21\n= 2 480 × 20 + 2 480\n= 49 600 + 2 480\n= 52 080' },
        { difficulty: 'Hard', question: 'Zanele het R95 000 gespaar. Sy spandeer R27 650 op meubels en verdien dan R41 300 van vryskutwerk. Hoeveel het sy nou?', answer: 'R108 650', checkMode: 'auto', correctAnswer: 'R108 650', correctAnswers: ['R108 650', '108 650', 'R108650', '108650'], explanation: 'Stap 1 — trek af: 95 000 − 27 650 = 67 350\nStap 2 — tel by: 67 350 + 41 300 = 108 650\nAntwoord: R108 650' },

        // Blok 4 — Kwadrate en vierkantswortels (Easy-Medium) — posisies 13-15
        { difficulty: 'Easy', question: 'Bereken 8².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '8² = 8 × 8 = 64' },
        { difficulty: 'Medium', question: 'Vind die vierkantswortel van 100.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '√100 = 10 want 10 × 10 = 100' },
        { difficulty: 'Medium', question: 'Bereken 4² + 10².', answer: '116', checkMode: 'auto', correctAnswer: '116', explanation: '4² = 4 × 4 = 16\n10² = 10 × 10 = 100\n16 + 100 = 116' },

        // Blok 5 — Kubusse en kubuswortels (Easy-Medium) — posisies 16-17
        { difficulty: 'Easy', question: 'Bereken 3³.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '3³ = 3 × 3 × 3 = 9 × 3 = 27' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 64.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '∛64 = 4 want 4 × 4 × 4 = 64' },

        // Blok 6 — Wanopvattings en redenering (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'ʼn Leerder rond 7 449 999 af na die naaste miljoen en kry 8 000 000. Is dit korrek? Verduidelik.', answer: 'Nee — die miljoene-syfer is 7, en die syfer een plek regs (honderdduisende) is 4, wat minder as 5 is, dus rond ons af. Die korrekte antwoord is 7 000 000, nie 8 000 000 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê dat (4 + 6)² dieselfde is as 4² + 6². Is dit korrek? Verduidelik en gee die korrekte waarde van (4 + 6)².', answer: 'Nee — (4 + 6)² = 10² = 100, maar 4² + 6² = 16 + 36 = 52. Hierdie is nie gelyk nie, dus is die kwadraat van ʼn som nie dieselfde as om elke term afsonderlik te kwadreer nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het plekwaarde, afronding, bewerkings met groot getalle, kwadrate en kubusse bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan die vrae wat jy oor afronding of bewerkings verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor plekwaarde en berekeninge met groot getalle weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Plekwaarde, vergelyking en ordening van groot getalle (Easy-Medium) — posisies 0-3
        { difficulty: 'Easy', question: 'In die getal 3 816 295, wat is die plekwaarde van die syfer 3?', answer: 'Miljoene', checkMode: 'auto', correctAnswer: 'miljoene', correctAnswers: ['miljoene', 'Miljoene'], explanation: 'Tel plekwaardes van regs af: ene, tiene, honderde, duisende, tienduisende, honderdduisende, miljoene.\nIn 3 816 295 is die syfers 3-8-1-6-2-9-5, dus is 3 die eerste (mees linkse) syfer.\nDit is die miljoene-plek.' },
        { difficulty: 'Easy-Medium', question: 'Wat is die waarde van die syfer 7 in 271 640 000?', answer: '70 000 000', checkMode: 'auto', correctAnswer: '70 000 000', correctAnswers: ['70 000 000', '70000000'], explanation: 'In 271 640 000 is die syfer 7 in die tien miljoene-plek.\nWaarde = 7 × 10 000 000 = 70 000 000' },
        { difficulty: 'Medium', question: 'Watter getal is groter: 36 748 200 of 3 674 820?', answer: '36 748 200', checkMode: 'auto', correctAnswer: '36 748 200', correctAnswers: ['36 748 200', '36748200'], explanation: 'Vergelyk eers die aantal syfers.\n36 748 200 het 8 syfers. 3 674 820 het 7 syfers.\nMeer syfers beteken ʼn groter getal, dus is 36 748 200 groter.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste: 4 296 700, 429 670, 42 967 000.', answer: '429 670, 4 296 700, 42 967 000', checkMode: 'self' },

        // Blok 2 — Afronding na ʼn gegewe plekwaarde (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Rond 52 384 af na die naaste duisend.', answer: '52 000', checkMode: 'auto', correctAnswer: '52 000', correctAnswers: ['52 000', '52000'], explanation: 'Die duisende-syfer is 2.\nKyk een plek regs — die honderde-syfer is 3. Aangesien 3 < 5, rond ons af.\nHou die 2 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 52 000' },
        { difficulty: 'Easy-Medium', question: 'Rond 617 350 af na die naaste tienduisend.', answer: '620 000', checkMode: 'auto', correctAnswer: '620 000', correctAnswers: ['620 000', '620000'], explanation: 'Die tienduisende-syfer is 1.\nKyk een plek regs — die duisende-syfer is 7. Aangesien 7 ≥ 5, rond ons op.\n1 rond op na 2. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 620 000' },
        { difficulty: 'Medium', question: 'Rond 8 352 600 af na die naaste honderdduisend.', answer: '8 400 000', checkMode: 'auto', correctAnswer: '8 400 000', correctAnswers: ['8 400 000', '8400000'], explanation: 'Die honderdduisende-syfer is 3.\nKyk een plek regs — die tienduisende-syfer is 5. Aangesien 5 ≥ 5, rond ons op.\n3 rond op na 4. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 8 400 000' },
        { difficulty: 'Medium', question: 'Rond 24 683 900 af na die naaste miljoen.', answer: '25 000 000', checkMode: 'auto', correctAnswer: '25 000 000', correctAnswers: ['25 000 000', '25000000'], explanation: 'Die miljoene-syfer is 4.\nKyk een plek regs — die honderdduisende-syfer is 6. Aangesien 6 ≥ 5, rond ons op.\n4 rond op na 5. Vervang alle syfers regs daarvan met nulle.\nAntwoord: 25 000 000' },

        // Blok 3 — Bewerkings met groot getalle (Easy-Hard) — posisies 8-12
        { difficulty: 'Easy', question: 'Bereken 5 230 × 17.', answer: '88 910', checkMode: 'auto', correctAnswer: '88 910', correctAnswers: ['88 910', '88910'], explanation: '5 230 × 17\n= 5 230 × 20 − 5 230 × 3\n= 104 600 − 15 690\n= 88 910' },
        { difficulty: 'Easy-Medium', question: 'Bereken 67 158 ÷ 18.', answer: '3 731', checkMode: 'auto', correctAnswer: '3 731', correctAnswers: ['3 731', '3731'], explanation: '67 158 ÷ 18 = 3 731\nToets: 3 731 × 18 = 67 158 ✓' },
        { difficulty: 'Medium', question: 'ʼn Gemeenskapstuin het R63 240 se groente in die lente verkoop en R48 970 in die somer. Hoeveel het hulle in totaal verkoop?', answer: 'R112 210', checkMode: 'auto', correctAnswer: 'R112 210', correctAnswers: ['R112 210', '112 210', 'R112210', '112210'], explanation: '63 240 + 48 970 = 112 210\nAntwoord: R112 210' },
        { difficulty: 'Medium', question: 'ʼn Drukkersmaatskappy druk 3 640 pamflette per dag. Hoeveel pamflette druk dit in 16 dae?', answer: '58 240', checkMode: 'auto', correctAnswer: '58 240', correctAnswers: ['58 240', '58240'], explanation: '3 640 × 16\n= 3 640 × 10 + 3 640 × 6\n= 36 400 + 21 840\n= 58 240' },
        { difficulty: 'Hard', question: 'Bongani het R110 000 gespaar. Hy spandeer R45 250 op ʼn skootrekenaar en verdien dan R36 800 van ʼn bonus. Hoeveel het hy nou?', answer: 'R101 550', checkMode: 'auto', correctAnswer: 'R101 550', correctAnswers: ['R101 550', '101 550', 'R101550', '101550'], explanation: 'Stap 1 — trek af: 110 000 − 45 250 = 64 750\nStap 2 — tel by: 64 750 + 36 800 = 101 550\nAntwoord: R101 550' },

        // Blok 4 — Kwadrate en vierkantswortels (Easy-Medium) — posisies 13-15
        { difficulty: 'Easy', question: 'Bereken 12².', answer: '144', checkMode: 'auto', correctAnswer: '144', explanation: '12² = 12 × 12 = 144' },
        { difficulty: 'Medium', question: 'Vind die vierkantswortel van 81.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '√81 = 9 want 9 × 9 = 81' },
        { difficulty: 'Medium', question: 'Bereken 5² + 7².', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: '5² = 5 × 5 = 25\n7² = 7 × 7 = 49\n25 + 49 = 74' },

        // Blok 5 — Kubusse en kubuswortels (Easy-Medium) — posisies 16-17
        { difficulty: 'Easy', question: 'Bereken 5³.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: '5³ = 5 × 5 × 5 = 25 × 5 = 125' },
        { difficulty: 'Medium', question: 'Vind die kubuswortel van 8.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: '∛8 = 2 want 2 × 2 × 2 = 8' },

        // Blok 6 — Wanopvattings en redenering (Hard) — posisies 18-19
        { difficulty: 'Hard', question: 'ʼn Leerder rond 2 550 000 af na die naaste honderdduisend en kry 2 500 000. Is dit korrek? Verduidelik.', answer: 'Nee — die honderdduisende-syfer is 5, en die syfer een plek regs (tienduisende) is ook 5, wat beteken ons rond op. Die korrekte antwoord is 2 600 000, nie 2 500 000 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê dat (7 − 2)² dieselfde is as 7² − 2². Is dit korrek? Verduidelik en gee die korrekte waarde van (7 − 2)².', answer: 'Nee — (7 − 2)² = 5² = 25, maar 7² − 2² = 49 − 4 = 45. Hierdie is nie gelyk nie, dus is die kwadraat van ʼn verskil nie dieselfde as om elke term afsonderlik te kwadreer nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het plekwaarde, afronding, bewerkings met groot getalle, kwadrate en kubusse bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan die vrae wat jy oor afronding of bewerkings verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor plekwaarde en berekeninge met groot getalle weer deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het hele getalle bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
