import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (time units) ─────────────────────────────────────────────
// seconds  → blue   (#2563eb)
// minutes  → green  (#16a34a)
// hours    → orange (#ea580c)
// days     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Tyd',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time',
      title: 'Eenhede van Tyd',
      icon: '⏱',
      explanation:
        `<p style="margin-bottom:16px;">Ons meet tyd met verskillende eenhede, afhangend van hoe lank iets vat. Die hoofeenhede van tyd is ${bl('sekondes')} (s), ${gr('minute')} (min), ${or('ure')} (h), ${re('dae')}, weke, maande en jare. Om te weet hoe om tussen hierdie eenhede om te skakel, is ʼn belangrike vaardigheid.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sekondes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minute')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ure')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('dae')}</span>` +
        `</div>` +

        // ── Conversion facts ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Belangrike omskakelingsfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sekondes → Minute</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('60 sekondes')} = ${gr('1 minuut')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minute → Ure</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('60 minute')} = ${or('1 uur')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ure → Dae</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('24 ure')} = ${re('1 dag')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Dae → Weke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('7 dae')} = 1 week</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Maande → Jare</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 maande = 1 jaar<br>${re('365 dae')} = 1 jaar</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Skrikkeljaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('366 dae')} — gebeur elke 4 jaar</p>` +
        `</div>` +

        `</div>` +

        // ── Converting tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Omskakeling tussen eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy van ʼn <strong>groter eenheid na ʼn kleiner eenheid</strong> omskakel (bv. ${gr('minute')} → ${bl('sekondes')}), <strong>vermenigvuldig</strong> jy met die omskakelingsgetal.<br>Wanneer jy van ʼn <strong>kleiner eenheid na ʼn groter eenheid</strong> omskakel (bv. ${bl('sekondes')} → ${gr('minute')}), <strong>deel</strong> jy deur die omskakelingsgetal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho poets sy tande vir 2 minute. Hoeveel sekondes is dit?',
          answer: `2 ${gr('minute')} = 120 ${bl('sekondes')}`,
          steps: [
            `Ons skakel om van ʼn groter eenheid (${gr('minute')}) na ʼn kleiner eenheid (${bl('sekondes')}). Wanneer ons van groter na kleiner gaan, <strong>vermenigvuldig</strong> ons.`,
            `Gebruik die omskakelingsfeit: 1 ${gr('minuut')} = ${bl('60 sekondes')}.`,
            `2 ${gr('minute')} = 2 × ${bl('60')} = ${bl('120 sekondes')}.`,
            `<strong>Antwoord:</strong> Sipho poets sy tande vir ${bl('120 sekondes')}.`,
          ],
        },
        {
          question: 'ʼn Fliek is 150 minute lank. Hoe lank is dit in ure en minute?',
          answer: `150 ${gr('minute')} = 2 ${or('ure')} en 30 ${gr('minute')}`,
          steps: [
            `Ons skakel ${gr('minute')} om na ${or('ure')} en ${gr('minute')}. Gebruik die omskakelingsfeit: 1 ${or('uur')} = ${gr('60 minute')}.`,
            `Deel 150 deur 60 om die aantal volle ure te vind: 150 ÷ 60 = <strong>2 res 30</strong>.`,
            `Die kwosiënt 2 vertel ons daar is 2 volle ${or('ure')}. Die res 30 vertel ons daar is 30 ${gr('minute')} oor.`,
            `<strong>Antwoord:</strong> Die fliek is ${or('2 ure')} en ${gr('30 minute')} lank.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'Die tydeenhede in volgorde van kleinste na grootste — sekondes (blou), minute (groen), ure (oranje), dae (rooi) — met die omskakelingsgetalle tussen elke eenheid',
      diagramSvg:
        '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="80" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">sekondes</text><rect x="140" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="80" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">minute</text><rect x="270" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="310" y="80" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">ure</text><rect x="400" y="58" width="80" height="34" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="440" y="80" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">dae</text><line x1="95" y1="48" x2="135" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="139,48 131,43 131,53" fill="#dc2626"/><text x="115" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷60</text><line x1="225" y1="48" x2="265" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="269,48 261,43 261,53" fill="#dc2626"/><text x="245" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷60</text><line x1="355" y1="48" x2="395" y2="48" stroke="#dc2626" stroke-width="2"/><polygon points="399,48 391,43 391,53" fill="#dc2626"/><text x="375" y="38" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷24</text><line x1="135" y1="105" x2="95" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="91,105 99,100 99,110" fill="#16a34a"/><text x="115" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×60</text><line x1="265" y1="105" x2="225" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="221,105 229,100 229,110" fill="#16a34a"/><text x="245" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×60</text><line x1="395" y1="105" x2="355" y2="105" stroke="#16a34a" stroke-width="2"/><polygon points="351,105 359,100 359,110" fill="#16a34a"/><text x="375" y="122" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">×24</text></svg>',

      videoPlaceholder:
        'Kort video wat die tydeenhede verduidelik en hoe om tussen hulle om te skakel deur te vermenigvuldig of te deel met kleurgekodeerde eenhede',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING THE TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-the-time',
      title: 'Tyd Lees',
      icon: '🕐',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan tyd op ʼn <strong>analoog horlosie</strong> of ʼn <strong>digitale horlosie</strong> lees. ʼn Analoog horlosie het twee wysers — die kort ${bl('uurwyser')} en die lang ${gr('minuutwyser')}. Die ${gr('minuutwyser')} vat 60 minute om heeltemal om te gaan. Elke syfer op die horlosie verteenwoordig 5 minute. ʼn Digitale horlosie wys die tyd met syfers wat deur ʼn dubbelpunt geskei word — byvoorbeeld 3:45 beteken 3 ure en 45 minute. Ons gebruik ook ${or('vm.')} vir tye tussen middernag en middag en ${re('nm.')} vir tye tussen middag en middernag.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uurwyser')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minuutwyser')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vm.')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nm.')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Uurwyser (kort)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('uurwyser')} wys na die huidige uur. Dit beweeg stadig — een volle draai elke 12 ure.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minuutwyser (lank)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('minuutwyser')} wys na die minute. Elke syfer waarna dit wys, verteenwoordig 5 minute. Een volle draai = 60 minute.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">vm. — voor middag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('vm.')} dek middernag (12:00 vm.) tot net voor middag (11:59 vm.). Oggendtye gebruik ${or('vm.')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">nm. — na middag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('nm.')} dek middag (12:00 nm.) tot net voor middernag (11:59 nm.). Middag- en aandtye gebruik ${re('nm.')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die minuutwyser lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vermenigvuldig die syfer waarna die ${gr('minuutwyser')} wys met <strong>5</strong> om die minute te kry. Byvoorbeeld: ${gr('minuutwyser')} by 9 → 9 × 5 = 45 minute oor die uur.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die uurwyser wys na 4 en die minuutwyser wys na 6 op ʼn analoog horlosie. Wat is die tyd?',
          answer: `Die tyd is ${bl('4')}:${gr('30')} of half vyf`,
          steps: [
            `Die ${bl('uurwyser')} by 4 beteken dit is ${bl('4')} ure.`,
            `Die ${gr('minuutwyser')} by 6 beteken 6 × 5 = ${gr('30')} minute oor die uur.`,
            `<strong>Antwoord:</strong> Die tyd is ${bl('4')}:${gr('30')} of half vyf.`,
          ],
        },
        {
          question: 'Skryf 7:15 vm. in woorde.',
          answer: `Kwart oor sewe in die oggend`,
          steps: [
            `7:15 ${or('vm.')} beteken 15 minute oor 7 in die oggend — ${or('vm.')} vertel ons dit is voor middag.`,
            `15 minute oor die uur word <strong>kwart oor</strong> genoem (want 15 minute is ʼn kwart van 60 minute).`,
            `<strong>Antwoord:</strong> Kwart oor sewe in die oggend.`,
          ],
        },
        {
          question: 'Wat is die verskil tussen 6:20 vm. en 6:20 nm.?',
          answer: `Hulle is 12 ure uitmekaar`,
          steps: [
            `${or('vm.')} beteken voor middag — 6:20 ${or('vm.')} is vroeg in die oggend.`,
            `${re('nm.')} beteken na middag — 6:20 ${re('nm.')} is in die aand.`,
            `<strong>Antwoord:</strong> Hulle is 12 ure uitmekaar, al lyk die syfers dieselfde.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'ʼn Analoë horlosie wat die kort uurwyster in blou na 4 wys en die lang minuutwyster in groen na 6 wys, met die tyd 4:30 geëtiketteer',
      diagramSvg:
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="90" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="49" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">12</text><text x="123" y="55" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="140" y="72" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">2</text><text x="146" y="95" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">3</text><text x="140" y="118" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">4</text><text x="123" y="135" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">5</text><text x="100" y="145" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">6</text><text x="77" y="135" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">7</text><text x="60" y="118" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">8</text><text x="54" y="95" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">9</text><text x="60" y="72" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">10</text><text x="77" y="55" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">11</text><line x1="100" y1="90" x2="121.2" y2="111.2" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/><line x1="100" y1="90" x2="100" y2="135" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="90" r="3.5" fill="#0f1f3d"/><text x="100" y="182" font-size="18" font-weight="700" fill="#0f1f3d" text-anchor="middle">4:30</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om tyd op ʼn analoë horlosie te lees deur die blou uurwyster en die groen minuutwyster te gebruik, en hoe vm en nm gebruik word',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-time',
      title: 'Tyd Bereken',
      icon: '⏰',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan bereken hoeveel tyd tussen twee tye verloop het of die ${re('eindtyd')} vind wanneer ons die ${bl('begintyd')} en die ${gr('tydsduur')} ken. Wanneer jy tyd bereken, werk altyd in dieselfde eenhede. ʼn Nuttige metode is om van die ${bl('begintyd')} na die ${re('eindtyd')} op te tel in stappe. Onthou dat tyd nie in grondtal 10 werk nie — daar is 60 minute in ʼn uur, nie 100 nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('begintyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindtyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tydsduur')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Begintyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('begintyd')} is wanneer die gebeurtenis begin. Ons tel vorentoe van hier af.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eindtyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('eindtyd')} is wanneer die gebeurtenis eindig. Ons tel op tot by hierdie tyd.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tydsduur</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('tydsduur')} is hoe lank iets vat — die verskil tussen die ${bl('begin')}- en ${re('eind')}tye.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Totale tyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('totaal')} is die gekombineerde tyd wanneer jy twee of meer ${gr('tydsduurtes')} bymekaartel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tyd is nie grondtal 10 nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy tyd optel of aftrek, onthou daar is <strong>60 minute in ʼn uur</strong>, nie 100 nie. As jou minute tot 60 of meer optel, skakel die ekstra minute om na ure. Byvoorbeeld: 45 minute + 20 minute = 65 minute = 1 uur 5 minute.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato begin haar huiswerk om 3:30 nm. en eindig om 5:10 nm. Hoe lank het sy gevat?',
          answer: `Lerato het ${or('1 uur 40 minute')} gevat`,
          steps: [
            `Tel op van die ${bl('begintyd')} (${bl('3:30 nm.')}) na die ${re('eindtyd')} (${re('5:10 nm.')}) in stappe.`,
            `Van ${bl('3:30')} tot ${bl('4:30')} is ${gr('1 uur')}.`,
            `Van ${bl('4:30')} tot ${re('5:10')} is ${gr('40 minute')}.`,
            `<strong>Antwoord:</strong> ${or('Totale tyd')} = ${gr('1 uur')} + ${gr('40 minute')} = ${or('1 uur 40 minute')}.`,
          ],
        },
        {
          question: 'ʼn Trein vertrek om 8:45 vm. en die reis vat 2 ure 30 minute. Hoe laat kom dit aan?',
          answer: `Die trein kom om ${re('11:15 vm.')} aan`,
          steps: [
            `${bl('Begintyd:')} ${bl('8:45 vm.')} Tel die ${gr('tydsduur')} by: ${gr('2 ure 30 minute')}.`,
            `Tel eers die ure by: ${bl('8:45')} + ${gr('2 ure')} = <strong>10:45</strong>.`,
            `Tel die minute by: <strong>10:45</strong> + ${gr('30 minute')} = ${re('11:15')}.`,
            `<strong>Antwoord:</strong> Die trein kom om ${re('11:15 vm.')} aan.`,
          ],
        },
        {
          question: 'Sipho kyk twee flieks. Die eerste is 1 uur 45 minute lank en die tweede is 2 ure 20 minute lank. Hoe lank kyk hy flieks in totaal?',
          answer: `Sipho kyk flieks vir ${or('4 ure 5 minute')} in totaal`,
          steps: [
            `Tel die ure by: ${gr('1 uur')} + ${gr('2 ure')} = <strong>3 ure</strong>.`,
            `Tel die minute by: ${gr('45 minute')} + ${gr('20 minute')} = <strong>65 minute</strong>.`,
            `Skakel 65 minute om: 65 = 60 + 5 = ${gr('1 uur')} 5 minute.`,
            `Tel die omgeskakelde uur by die uretotaal: <strong>3 ure</strong> + ${gr('1 uur')} 5 minute = ${or('4 ure 5 minute')}.`,
            `<strong>Antwoord:</strong> Sipho kyk flieks vir ${or('4 ure 5 minute')} in totaal.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om verstreke tyd te bereken deur van die begintyd in blou tot die eindtyd in rooi op te tel deur ure en minute stappe in groen te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — READING CALENDARS AND TIMETABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-calendars-and-timetables',
      title: 'Kalenders en Roosters Lees',
      icon: '📅',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Kalender wys al die ${bl('dae')}, weke en maande in ʼn jaar. Ons gebruik kalenders om gebeurtenisse te beplan en uit te vind op watter ${bl('dag')} ʼn ${or('datum')} val. ʼn Rooster wys wanneer gebeurtenisse in volgorde plaasvind. Ons gebruik roosters vir skoolskedules, bustye en treintye. Wanneer jy ʼn rooster lees, vind altyd die korrekte ry en kolom om die regte inligting te kry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dae')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('datums')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tydsduur')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kalender</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kalender wys al die ${bl('dae')}, weke en maande in ʼn jaar. Gebruik dit om te vind op watter ${bl('dag')} ʼn ${or('datum')} val of om vooruit te beplan.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Datums</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${or('Datum')} vertel ons die presiese dag in ʼn maand. Om ʼn ${or('datum')} op ʼn kalender te vind, gebruik die kolom vir die ${bl('dag')} en die ry vir die week.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rooster</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Rooster wys gebeurtenisse in ${gr('tyd')}sorde. Vind die korrekte ry en kolom waar ʼn vak en ʼn ${gr('tyd')} ontmoet om die regte inligting te kry.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Tydsduur</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('tydsduur')} vertel ons hoe lank ʼn les of gebeurtenis duur. Tel die ${re('tydsduur')} by die begin${gr('tyd')} om die eind${gr('tyd')} te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Rooster lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vind altyd die korrekte <strong>ry</strong> (die vak of gebeurtenis) en die korrekte <strong>kolom</strong> (die ${bl('dag')} of ${gr('tyd')}) om die regte inligting te kry. Kyk altyd albei twee keer na voordat jy jou antwoord skryf.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kalender wys dat 1 Maart ʼn Maandag is. Op watter dag is 15 Maart?',
          answer: `Die ${or('15de van Maart')} val op ʼn ${bl('Maandag')}`,
          steps: [
            `Tel van die ${or('1ste')} tot die ${or('15de')} — dit is <strong>14 ${bl('dae')} later</strong>.`,
            `14 ${bl('dae')} = 2 volle weke (7 + 7 = 14).`,
            `Twee weke na ${bl('Maandag')} is ook ʼn ${bl('Maandag')} — die byvoeg van ʼn volle aantal weke land altyd op dieselfde ${bl('dag')}.`,
            `<strong>Antwoord:</strong> Die ${or('15de van Maart')} val op ʼn ${bl('Maandag')}.`,
          ],
        },
        {
          question: 'ʼn Skoolrooster wys dat Wiskunde om 8:00 vm. begin en 45 minute duur. Engels begin reg na Wiskunde. Hoe laat begin Engels?',
          answer: `Engels begin om ${gr('8:45 vm.')}`,
          steps: [
            `Wiskunde begin om ${gr('8:00 vm.')} en duur ${re('45 minute')}.`,
            `Tel die ${re('tydsduur')} by die begin${gr('tyd')}: ${gr('8:00')} + ${re('45 minute')}.`,
            `${gr('8:00')} + ${re('45 minute')} = ${gr('8:45 vm.')}.`,
            `<strong>Antwoord:</strong> Engels begin om ${gr('8:45 vm.')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        'ʼn Maartkalender met die 1ste uitgelig in blou as Maandag en die 15de uitgelig in oranje, langs ʼn skoolrooster wat wys dat Wiskunde om 8:00 vm en Engels om 8:45 vm begin (albei in groen) met die 45 minute tydsduur in rooi gemerk',
      diagramSvg:
        '<svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg"><text x="99" y="16" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Maart</text><text x="27" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">M</text><text x="51" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">D</text><text x="75" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">W</text><text x="99" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">D</text><text x="123" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">V</text><text x="147" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">S</text><text x="171" y="42" font-size="9" font-weight="700" fill="#6b7280" text-anchor="middle">S</text><rect x="15" y="48" width="168" height="66" fill="none" stroke="#cbd5e1" stroke-width="1"/><line x1="39" y1="48" x2="39" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="63" y1="48" x2="63" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="87" y1="48" x2="87" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="111" y1="48" x2="111" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="135" y1="48" x2="135" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="159" y1="48" x2="159" y2="114" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="70" x2="183" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="92" x2="183" y2="92" stroke="#cbd5e1" stroke-width="1"/><rect x="15" y="48" width="24" height="22" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/><rect x="15" y="92" width="24" height="22" fill="#ea580c" fill-opacity="0.15" stroke="#ea580c" stroke-width="2"/><text x="27" y="63" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="51" y="63" font-size="10" fill="#374151" text-anchor="middle">2</text><text x="75" y="63" font-size="10" fill="#374151" text-anchor="middle">3</text><text x="99" y="63" font-size="10" fill="#374151" text-anchor="middle">4</text><text x="123" y="63" font-size="10" fill="#374151" text-anchor="middle">5</text><text x="147" y="63" font-size="10" fill="#374151" text-anchor="middle">6</text><text x="171" y="63" font-size="10" fill="#374151" text-anchor="middle">7</text><text x="27" y="85" font-size="10" fill="#374151" text-anchor="middle">8</text><text x="51" y="85" font-size="10" fill="#374151" text-anchor="middle">9</text><text x="75" y="85" font-size="10" fill="#374151" text-anchor="middle">10</text><text x="99" y="85" font-size="10" fill="#374151" text-anchor="middle">11</text><text x="123" y="85" font-size="10" fill="#374151" text-anchor="middle">12</text><text x="147" y="85" font-size="10" fill="#374151" text-anchor="middle">13</text><text x="171" y="85" font-size="10" fill="#374151" text-anchor="middle">14</text><text x="27" y="107" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><text x="51" y="107" font-size="10" fill="#374151" text-anchor="middle">16</text><text x="75" y="107" font-size="10" fill="#374151" text-anchor="middle">17</text><text x="99" y="107" font-size="10" fill="#374151" text-anchor="middle">18</text><text x="123" y="107" font-size="10" fill="#374151" text-anchor="middle">19</text><text x="147" y="107" font-size="10" fill="#374151" text-anchor="middle">20</text><text x="171" y="107" font-size="10" fill="#374151" text-anchor="middle">21</text><text x="285" y="16" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Skoolrooster</text><rect x="220" y="50" width="120" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="230" y="66" font-size="11" font-weight="700" fill="#0f1f3d">Wiskunde</text><text x="300" y="66" font-size="10" font-weight="700" fill="#16a34a">8:00 vm</text><rect x="220" y="98" width="120" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="230" y="114" font-size="11" font-weight="700" fill="#0f1f3d">Engels</text><text x="290" y="114" font-size="10" font-weight="700" fill="#16a34a">8:45 vm</text><line x1="280" y1="74" x2="280" y2="98" stroke="#dc2626" stroke-width="2"/><text x="292" y="90" font-size="10" font-weight="700" fill="#dc2626">45 min</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn kalender te lees om die dag te vind waarop ʼn datum val en hoe om ʼn rooster te gebruik om begin- en eindtye te vind deur kleurgekodeerde dae blou, datums oranje, tye groen en duur rooi te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TIME PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-problems-in-context',
      title: 'Tydprobleme in Konteks',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik tyd elke dag om te beplan, te organiseer en probleme op te los. Wanneer jy tydprobleme oplos, lees die vraag noukeurig om te besluit wat jy moet vind — ʼn ${bl('begintyd')}, ʼn ${re('eindtyd')} of ʼn ${gr('tydsduur')}. Skryf jou antwoord duidelik met die korrekte eenheid. Onthou dat 60 minute ʼn uur maak, so wanneer jou minute tot meer as 60 optel, moet jy omskakel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('begintyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('eindtyd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('elke stap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Begintyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('begintyd')} is wanneer die gebeurtenis begin. Tel vorentoe van hier af om die eindtyd of totale tyd te vind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Eindtyd</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('eindtyd')} is wanneer die gebeurtenis eindig. Tel al die ${gr('stappe')} by die ${bl('begintyd')} om by die ${re('eindtyd')} uit te kom.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Elke stap</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke ${gr('stap')} is ʼn individuele tydsbedrag wat jy optel. Werk deur die ${gr('stappe')} een op ʼn slag om foute te vermy.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('totaal')} is die gekombineerde tyd. As jou minute tot 60 of meer optel, skakel die ekstra minute om na ure.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">60 minute = 1 uur</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jou minute tot meer as 60 optel, skakel die ekstra minute om na ure. Werk in klein ${gr('stappe')} — tel eers die ure by, dan die minute — om elke deel duidelik te volg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle vertrek van die huis af om 7:15 vm. Sy stap 25 minute na die bushalte en wag dan 10 minute vir die bus. Die busrit vat 35 minute. Hoe laat kom sy by die skool aan?',
          answer: `Amahle kom by die skool aan om ${re('8:25 vm.')}`,
          steps: [
            `${bl('Begintyd:')} Amahle vertrek van die huis af om ${bl('7:15 vm.')}`,
            `${gr('Stap 1 — Stap:')} ${bl('7:15')} + ${gr('25 minute')} = <strong>7:40</strong>.`,
            `${gr('Stap 2 — Wag:')} <strong>7:40</strong> + ${gr('10 minute')} = <strong>7:50</strong>.`,
            `${gr('Stap 3 — Busrit:')} <strong>7:50</strong> + ${gr('35 minute')} = ${re('8:25')}. (7:50 + 10 = 8:00, dan 8:00 + 25 = 8:25)`,
            `<strong>Antwoord:</strong> Amahle kom by die skool aan om ${re('8:25 vm.')}`,
          ],
        },
        {
          question: 'ʼn Sportdag begin om 9:00 vm. en eindig om 2:30 nm. Hoe lank is die sportdag?',
          answer: `Die sportdag duur ${or('5 ure 30 minute')}`,
          steps: [
            `Tel van die ${bl('begintyd')} (${bl('9:00 vm.')}) na die ${re('eindtyd')} (${re('2:30 nm.')}).`,
            `${gr('Stap 1:')} Van ${bl('9:00 vm.')} tot ${re('2:00 nm.')} is ${gr('5 ure')}.`,
            `${gr('Stap 2:')} Van ${re('2:00 nm.')} tot ${re('2:30 nm.')} is ${gr('30 minute')}.`,
            `<strong>Antwoord:</strong> Die sportdag duur ${or('5 ure')} + ${or('30 minute')} = ${or('5 ure 30 minute')}.`,
          ],
        },
        {
          question: 'Thabo oefen elke dag 40 minute kitaar. Hoeveel ure en minute oefen hy in een week?',
          answer: `Thabo oefen ${or('4 ure 40 minute')} per week`,
          steps: [
            `${gr('Stap 1:')} Vermenigvuldig die daaglikse oefening met die aantal dae: 7 × ${gr('40 minute')} = ${gr('280 minute')}.`,
            `${gr('Stap 2:')} Skakel ${gr('280 minute')} om na ure en minute: 280 ÷ 60 = <strong>4 res 40</strong> — dit is 4 volle ure en 40 minute oor.`,
            `<strong>Antwoord:</strong> Thabo oefen ${or('4 ure 40 minute')} per week.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om tydprobleme in konteks op te los deur van die begintyd in blou deur elke stap in groen vorentoe te tel om die eindtyd in rooi te bereik en die totaal in oranje af te lees',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sekondes is daar in 1 minuut?',
      answer: '60',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: '1 minuut = 60 sekondes.',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel ure is daar in 1 dag?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: '1 dag = 24 ure.',
    },

    // ── Q3 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Fliek is 120 minute lank. Hoe lank is dit in ure?',
      answer: '2 ure',
      checkMode: 'auto',
      correctAnswer: '2 ure',
      correctAnswers: ['2 ure', '2'],
      explanation: '120 minute ÷ 60 = 2 ure.',
    },

    // ── Q4 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê daar is 400 minute in ʼn dag. Is hy korrek? Verduidelik.',
      answer: 'Nee — daar is 24 ure in ʼn dag en 60 minute in ʼn uur. 24 × 60 = 1 440 minute in ʼn dag.',
      checkMode: 'self',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Die minuutwyser wys na 9 op ʼn horlosie. Hoeveel minute oor die uur is dit?',
      answer: '45',
      checkMode: 'auto',
      correctAnswer: '45',
      explanation: '9 × 5 = 45 minute oor die uur.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 2:30 nm. in woorde.',
      answer: 'half drie in die middag',
      checkMode: 'auto',
      correctAnswer: 'half drie in die middag',
      explanation: '2:30 nm. — 30 minute oor 2 in die middag is half drie in die middag.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato word om 6:15 vm. wakker. Haar horlosie wys die uurwyser tussen 6 en 7 en die minuutwyser wys na 3. Is haar horlosie korrek? Verduidelik.',
      answer: 'Ja — die minuutwyser by 3 beteken 15 minute oor. Die uurwyser tussen 6 en 7 beteken dit is na 6 maar voor 7. Die horlosie wys 6:15 wat korrek is.',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Amahle begin om 4:00 nm. lees en lees vir 45 minute. Hoe laat maak sy klaar?',
      answer: '4:45 nm.',
      checkMode: 'auto',
      correctAnswer: '4:45 nm.',
      explanation: '4:00 nm. + 45 minute = 4:45 nm.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Bus vertrek om 9:20 vm. en kom 1 uur 50 minute later aan. Hoe laat kom dit aan?',
      answer: '11:10 vm.',
      checkMode: 'auto',
      correctAnswer: '11:10 vm.',
      explanation: '9:20 vm. + 1 uur = 10:20 vm. 10:20 vm. + 50 minute = 11:10 vm.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo begin om 5:45 nm. kook. Die ete vat 1 uur 30 minute. Hoe laat sal die ete gereed wees?',
      answer: '7:15 nm.',
      checkMode: 'auto',
      correctAnswer: '7:15 nm.',
      explanation: '5:45 nm. + 1 uur = 6:45 nm. 6:45 nm. + 30 minute = 7:15 nm.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: '1 Junie is ʼn Woensdag. Watter dag is 8 Junie?',
      answer: 'Woensdag',
      checkMode: 'auto',
      correctAnswer: 'Woensdag',
      explanation: 'Die 8ste is 7 dae na die 1ste. 7 dae = 1 volle week, so die dag bly dieselfde — Woensdag.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho het Wiskunde van 8:00 tot 8:45, Engels van 8:45 tot 9:30 en Wetenskap van 9:45 tot 10:30. Hoeveel tyd spandeer hy in totaal in die klas?',
      answer: '2 ure 15 minute',
      checkMode: 'auto',
      correctAnswer: '2 ure 15 minute',
      explanation: 'Wiskunde: 8:00 tot 8:45 = 45 minute. Engels: 8:45 tot 9:30 = 45 minute. Wetenskap: 9:45 tot 10:30 = 45 minute. Totaal: 45 + 45 + 45 = 135 minute = 2 ure 15 minute.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato oefen elke dag 30 minute klavier. Hoeveel ure oefen sy in 2 weke?',
      answer: '7 ure',
      checkMode: 'auto',
      correctAnswer: '7 ure',
      correctAnswers: ['7 ure', '7'],
      explanation: '2 weke = 14 dae. 14 × 30 minute = 420 minute. 420 ÷ 60 = 7 ure.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Skoolgebeurtenis begin om 10:15 vm. en elk van die 4 items vat 25 minute met ʼn 10-minute-pouse tussen elke item. Hoe laat eindig die gebeurtenis?',
      answer: '4 items × 25 minute = 100 minute. 3 pouses × 10 minute = 30 minute. Totaal = 130 minute = 2 ure 10 minute. 10:15 vm. + 2 ure 10 minute = 12:25 nm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle vertrek van die huis af om 7:20 vm. Sy stap 15 minute na die taxistaanplek, wag 20 minute en die taxirit vat 40 minute. Sy stap dan 5 minute na die skool. Hoe laat kom sy aan?',
      answer: '8:40 vm.',
      checkMode: 'auto',
      correctAnswer: '8:40 vm.',
      explanation: '7:20 vm. + 15 minute = 7:35 vm. 7:35 vm. + 20 minute = 7:55 vm. 7:55 vm. + 40 minute = 8:35 vm. 8:35 vm. + 5 minute = 8:40 vm.',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het tyd baasgeraak.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van tyd.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Eenhede & Omskakelings | 4-7 Horlosies Lees |
    // 8-12 Verlope Tyd & Tydsduurte | 13-15 Kalenders & Roosters |
    // 16-17 Multi-Stap Werklike Situasies | 18-19 Redenering & Foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel sekondes is daar in 1 minuut?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 sekondes', '60 s'], explanation: 'Per definisie is 1 minuut = 60 sekondes.' },
        { difficulty: 'Easy', question: 'Hoeveel dae is daar in 1 week?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 dae'], explanation: 'Per definisie is 1 week = 7 dae.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Fliek duur 195 minute. Hoe lank is dit in ure en minute?', checkMode: 'auto', correctAnswer: '3 ure 15 minute', correctAnswers: ['3 ure 15 minute', '3u15min', '3 u 15 min', '3 ure en 15 minute'], explanation: '195 ÷ 60 = 3 res 15. Dus is 195 minute = 3 ure en 15 minute.' },
        { difficulty: 'Medium', question: 'ʼn Padrit duur 3 dae en 5 ure. Hoeveel ure is dit in totaal?', checkMode: 'auto', correctAnswer: '77 ure', correctAnswers: ['77 ure', '77u', '77'], explanation: '3 dae = 3 × 24 = 72 ure. Tel die ekstra 5 ure by: 72 + 5 = 77 ure.' },
        { difficulty: 'Medium', question: 'Katlego sê: "Daar is 400 minute in ʼn dag." Is sy korrek? Verduidelik jou redenasie en gee die korrekte getal as sy verkeerd is.', checkMode: 'self', answer: 'Nee, Katlego is nie korrek nie. Daar is 24 ure in ʼn dag en 60 minute in elke uur, so die korrekte berekening is 24 × 60 = 1 440 minute in ʼn dag. Sy het dit dalk verwar met ʼn kleiner, ongerelateerde getal — 400 minute is net omtrent 6 ure en 40 minute, baie minder as ʼn volle dag.' },
        { difficulty: 'Easy', question: 'Op ʼn analoog horlosie wys die uurwyser presies na 8 en die minuutwyser presies na 12. Wat is die tyd?', checkMode: 'auto', correctAnswer: '8:00', correctAnswers: ['8:00', '8 uur', 'agt uur'], explanation: 'Die minuutwyser by 12 beteken dit is presies op die uur. Die uurwyser by 8 beteken die tyd is 8 uur.' },
        { difficulty: 'Easy-Medium', question: 'Skryf 9:45 in woorde, met "kwart voor"-taal.', checkMode: 'auto', correctAnswer: 'kwart voor tien', correctAnswers: ['kwart voor tien', 'ʼn kwart voor tien', 'kwart voor 10'], explanation: '45 minute oor 9 is dieselfde as 15 minute voor 10, wat ons "kwart voor tien" noem.' },
        { difficulty: 'Medium', question: 'ʼn Digitale horlosie wys 12:20. Boitumelo sê dit moet in die dag wees, want "12 beteken altyd middag." Is haar redenasie korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, haar redenasie is foutief. Die getal 12 alleen vertel ons nie of dit dag of nag is nie — ons het die vm./nm.-etiket nodig. 12:20 vm. is net na middernag (baie vroeg in die oggend/nag), terwyl 12:20 nm. net na middag is. Sonder die vm./nm.-etiket kan ons nie weet watter een dit is nie.' },
        { difficulty: 'Medium', question: 'Nomsa se horlosie wys die uurwyser tussen 5 en 6, en die minuutwyser wys na die 4. Is dit korrek om hierdie horlosie as 5:20 te lees? Verduidelik hoekom of hoekom nie.', checkMode: 'self', answer: 'Ja, hierdie lesing is korrek. Die minuutwyser by die 4 beteken 4 × 5 = 20 minute oor die uur. Die uurwyser tussen 5 en 6 (nog nie by 6 nie) bevestig dat die uur nog 5 is, want die uurwyser bereik eers 6 sodra ʼn volle 60 minute verloop het. Dus is die tyd 5:20.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Kookklas begin om 2:50 nm. en duur 55 minute. Hoe laat eindig dit?', checkMode: 'auto', correctAnswer: '3:45 nm.', correctAnswers: ['3:45 nm.', '3:45nm.', '15:45'], explanation: '2:50 nm. + 55 minute: tel eers 10 minute by om by 3:00 nm. te kom, tel dan die oorblywende 45 minute by om by 3:45 nm. te kom.' },
        { difficulty: 'Medium', question: 'Palesa se kunsklas begin om 4:40 nm. Sy kyk na die horlosie wanneer dit klaar is en dit wys 6:05 nm. Hoe lank het die klas geduur?', checkMode: 'auto', correctAnswer: '1 uur 25 minute', correctAnswers: ['1 uur 25 minute', '1u25min', '1 u 25 min', '85 minute'], explanation: 'Van 4:40 nm. tot 5:40 nm. is 1 uur. Van 5:40 nm. tot 6:05 nm. is 25 minute. Totaal: 1 uur + 25 minute = 1 uur 25 minute.' },
        { difficulty: 'Medium', question: 'Sibusiso spandeer 25 minute om sy kamer op te ruim en dan 50 minute om huiswerk te doen, die een na die ander. Wat is die totale tyd wat hy op albei take spandeer, in ure en minute?', checkMode: 'auto', correctAnswer: '1 uur 15 minute', correctAnswers: ['1 uur 15 minute', '1u15min', '1 u 15 min', '75 minute'], explanation: '25 + 50 = 75 minute. Aangesien 75 minute meer as 60 is, skakel om: 75 minute = 60 minute + 15 minute = 1 uur 15 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skoollesblok begin om 9:15 vm. Eers is daar Lees vir 20 minute, dan ʼn pouse van 10 minute, dan Skryf vir 35 minute. Hoe laat eindig die blok?', checkMode: 'auto', correctAnswer: '10:20 vm.', correctAnswers: ['10:20 vm.', '10:20vm.', '10:20'], explanation: 'Totale tydsduur: 20 + 10 + 35 = 65 minute = 1 uur 5 minute. As jy om 9:15 vm. begin en 1 uur bytel, kry jy 10:15 vm., en as jy dan die oorblywende 5 minute bytel, kry jy 10:20 vm.' },
        { difficulty: 'Medium', question: 'ʼn Kalender wys dat die 1ste van ʼn maand ʼn Dinsdag is. Watter dag van die week is die 22ste van daardie maand?', checkMode: 'auto', correctAnswer: 'Dinsdag', correctAnswers: ['Dinsdag'], explanation: 'Van die 1ste tot die 22ste is 21 dae later. 21 ÷ 7 = 3 presies, so 21 dae is presies 3 volle weke. Om ʼn volle aantal weke by te tel, land altyd op dieselfde dag, so die 22ste is ook ʼn Dinsdag.' },
        { difficulty: 'Medium', question: 'ʼn Naweekmark is elke Saterdag oop. As die mark op die 4de van ʼn maand oop is, sal dit ook op die 25ste van dieselfde maand oop wees? Verduidelik deur die aantal dae tussen die twee datums te gebruik.', checkMode: 'self', answer: 'Ja. Van die 4de tot die 25ste is 21 dae. 21 ÷ 7 = 3, so dit is presies 3 volle weke. Aangesien die byvoeg van ʼn volle aantal weke altyd op dieselfde dag van die week land, val die 25ste op dieselfde dag as die 4de — ʼn Saterdag — so die mark sal ook op die 25ste oop wees.' },
        { difficulty: 'Medium', question: 'ʼn Skoolrooster wys dat die Musiekles om 1:15 nm. begin en 50 minute duur. Hoe laat eindig die Musiekles?', checkMode: 'auto', correctAnswer: '2:05 nm.', correctAnswers: ['2:05 nm.', '2:05nm.', '2:05'], explanation: '1:15 nm. + 50 minute: tel 45 minute by om by 2:00 nm. te kom, tel dan die oorblywende 5 minute by om by 2:05 nm. te kom.' },
        { difficulty: 'Hard', question: 'Lindiwe haal ʼn bus wat 18 minute vat en stap dan 12 minute om by die werk te kom. Sy reis hierdie selfde roete werk toe en huis toe, 5 dae per week. Hoeveel ure spandeer sy daardie week in totaal om te reis?', checkMode: 'auto', correctAnswer: '5 ure', correctAnswers: ['5 ure', '5u', '5'], explanation: 'Een rigting: 18 + 12 = 30 minute. ʼn Retoerrit (daarheen en terug) is 30 × 2 = 60 minute = 1 uur per dag. Oor 5 dae: 1 × 5 = 5 ure.' },
        { difficulty: 'Hard', question: 'Tumi oefen elke dag 25 minute viool. Hoeveel ure en minute oefen sy oor 6 dae?', checkMode: 'auto', correctAnswer: '2 ure 30 minute', correctAnswers: ['2 ure 30 minute', '2u30min', '2 u 30 min', '150 minute'], explanation: '25 × 6 = 150 minute. Skakel om na ure en minute: 150 ÷ 60 = 2 res 30, so 150 minute = 2 ure 30 minute.' },
        { difficulty: 'Hard', question: 'Twee taxiroetes gaan van die huis af dorp toe. Roete A vat 25 minute na die taxistaanplek plus ʼn 40 minuut-rit. Roete B vat ʼn 1 uur-rit plus ʼn 10 minuut-stap aan die einde. Watter roete is vinniger, en met hoeveel minute?', checkMode: 'auto', correctAnswer: 'Roete A met 5 minute', correctAnswers: ['Roete A met 5 minute', 'Roete A, 5 minute', 'A met 5 minute', 'roete a 5 minute'], explanation: 'Roete A: 25 + 40 = 65 minute. Roete B: 60 + 10 = 70 minute. Vergelyk: 65 minute is minder as 70 minute, so Roete A is vinniger, met 70 − 65 = 5 minute.' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken hoe lank ʼn skoolsaamtrek geduur het. Dit het by 3 ure 50 minute (as verlope tyd vanaf middernag) begin en nog 2 ure 25 minute se aktiwiteite geduur, en die leerder skryf die totaal as "5 ure 75 minute." Verduidelik wat verkeerd is met hierdie antwoord en gee die korrek omgeskakelde totaal.', checkMode: 'self', answer: 'Die leerder het die ure en minute korrek bygetel (3 + 2 = 5 ure, en 50 + 25 = 75 minute), maar het vergeet om om te skakel, want ʼn geldige tydtotaal kan nie 75 minute hê nie — minute moet altyd minder as 60 wees. Aangesien 75 minute = 60 minute + 15 minute = 1 uur 15 minute, moet hierdie ekstra uur by die uretotaal getel word: 5 ure + 1 uur 15 minute = 6 ure 15 minute. Die korrek omgeskakelde antwoord is 6 ure 15 minute.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het eenhede, horlosies lees, verlope tyd en kalenders baasgeraak.' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van tyd — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor verlope tyd en omskakeling weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel minute is daar in 1 uur?', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 minute', '60 min'], explanation: 'Per definisie is 1 uur = 60 minute.' },
        { difficulty: 'Easy', question: 'Hoeveel maande is daar in 1 jaar?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 maande'], explanation: 'Per definisie is 1 jaar = 12 maande.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vlug duur 175 minute. Skryf hierdie tydsduur in ure en minute.', checkMode: 'auto', correctAnswer: '2 ure 55 minute', correctAnswers: ['2 ure 55 minute', '2u55min', '2 u 55 min', '2 ure en 55 minute'], explanation: '175 ÷ 60 = 2 res 55. Dus is 175 minute = 2 ure en 55 minute.' },
        { difficulty: 'Medium', question: 'ʼn Konstruksieprojek sal 2 weke en 3 dae vat om te voltooi. Hoeveel dae is dit in totaal?', checkMode: 'auto', correctAnswer: '17 dae', correctAnswers: ['17 dae', '17'], explanation: '2 weke = 2 × 7 = 14 dae. Tel die ekstra 3 dae by: 14 + 3 = 17 dae.' },
        { difficulty: 'Medium', question: 'Karabo sê: "Daar is 800 sekondes in ʼn dag." Is hy korrek? Verduidelik jou redenasie en gee die korrekte getal as hy verkeerd is.', checkMode: 'self', answer: 'Nee, Karabo is nie korrek nie. Daar is 24 ure in ʼn dag, 60 minute in elke uur, en 60 sekondes in elke minuut, so die korrekte berekening is 24 × 60 × 60 = 86 400 sekondes in ʼn dag. 800 sekondes is net omtrent 13 minute, baie minder as ʼn volle dag.' },
        { difficulty: 'Easy', question: 'Op ʼn analoog horlosie wys die uurwyser presies na 3 en die minuutwyser presies na 12. Wat is die tyd?', checkMode: 'auto', correctAnswer: '3:00', correctAnswers: ['3:00', '3 uur', 'drie uur'], explanation: 'Die minuutwyser by 12 beteken dit is presies op die uur. Die uurwyser by 3 beteken die tyd is 3 uur.' },
        { difficulty: 'Easy-Medium', question: 'Skryf 4:15 in woorde, met "kwart oor"-taal.', checkMode: 'auto', correctAnswer: 'kwart oor vier', correctAnswers: ['kwart oor vier', 'ʼn kwart oor vier', 'kwart oor 4'], explanation: '15 minute oor 4 is een kwart van die pad om die horlosie, so ons sê "kwart oor vier".' },
        { difficulty: 'Medium', question: 'ʼn Digitale horlosie wys 6:10. Gegewe dat dit beskryf word as "net na sonsondergang", moet dit heel waarskynlik as 6:10 vm. of 6:10 nm. geskryf word? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Dit moet heel waarskynlik as 6:10 nm. geskryf word. Sonsondergang gebeur in die aand, lank na middag, en nm. dek alle tye van middag (12:00 nm.) tot net voor middernag. 6:10 vm. sou vroeg in die oggend wees, voor sonop in die meeste gevalle, so dit pas nie by "net na sonsondergang" nie.' },
        { difficulty: 'Medium', question: 'Met ʼn uurwyser tussen 10 en 11, en ʼn minuutwyser wat na die 8 wys, lees ʼn leerder hierdie horlosie as 10:40. Is dit korrek? Verduidelik hoekom of hoekom nie.', checkMode: 'self', answer: 'Ja, hierdie lesing is korrek. Die minuutwyser by die 8 beteken 8 × 5 = 40 minute oor die uur. Die uurwyser tussen 10 en 11 (nog nie by 11 nie) bevestig dat die uur nog 10 is, want die uurwyser bereik eers die volgende syfer sodra ʼn volle 60 minute verloop het. Dus is die tyd 10:40.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Swemles begin om 11:20 vm. en duur 40 minute. Hoe laat eindig dit?', checkMode: 'auto', correctAnswer: '12:00 nm.', correctAnswers: ['12:00 nm.', '12:00nm.', 'middag', '12 nm.'], explanation: '11:20 vm. + 40 minute: tel 40 minute direk by, want 20 + 40 = 60 presies, wat by 12:00 nm. (middag) uitkom.' },
        { difficulty: 'Medium', question: 'Mpho se sokkeroefening begin om 5:30 nm. Sy kyk na die horlosie wanneer dit eindig en dit wys 7:15 nm. Hoe lank het die oefening geduur?', checkMode: 'auto', correctAnswer: '1 uur 45 minute', correctAnswers: ['1 uur 45 minute', '1u45min', '1 u 45 min', '105 minute'], explanation: 'Van 5:30 nm. tot 6:30 nm. is 1 uur. Van 6:30 nm. tot 7:15 nm. is 45 minute. Totaal: 1 uur + 45 minute = 1 uur 45 minute.' },
        { difficulty: 'Medium', question: 'Andile spandeer 45 minute om die motor te was en dan 35 minute om die gras te sny, die een na die ander. Wat is die totale tyd wat hy op albei take spandeer, in ure en minute?', checkMode: 'auto', correctAnswer: '1 uur 20 minute', correctAnswers: ['1 uur 20 minute', '1u20min', '1 u 20 min', '80 minute'], explanation: '45 + 35 = 80 minute. Aangesien 80 minute meer as 60 is, skakel om: 80 minute = 60 minute + 20 minute = 1 uur 20 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skoollesblok begin om 10:00 vm. Eers is daar Kuns vir 30 minute, dan ʼn pouse van 15 minute, dan LO vir 40 minute. Hoe laat eindig die blok?', checkMode: 'auto', correctAnswer: '11:25 vm.', correctAnswers: ['11:25 vm.', '11:25vm.', '11:25'], explanation: 'Totale tydsduur: 30 + 15 + 40 = 85 minute = 1 uur 25 minute. As jy om 10:00 vm. begin en 1 uur bytel, kry jy 11:00 vm., en as jy dan die oorblywende 25 minute bytel, kry jy 11:25 vm.' },
        { difficulty: 'Medium', question: 'ʼn Kalender wys dat die 1ste van ʼn maand ʼn Vrydag is. Watter dag van die week is die 29ste van daardie maand?', checkMode: 'auto', correctAnswer: 'Vrydag', correctAnswers: ['Vrydag'], explanation: 'Van die 1ste tot die 29ste is 28 dae later. 28 ÷ 7 = 4 presies, so 28 dae is presies 4 volle weke. Om ʼn volle aantal weke by te tel, land altyd op dieselfde dag, so die 29ste is ook ʼn Vrydag.' },
        { difficulty: 'Medium', question: 'ʼn Biblioteek hou elke Woensdag ʼn storievertelsessie. As ʼn sessie op die 3de van ʼn maand plaasvind, sal daar ook een op die 24ste van dieselfde maand wees? Verduidelik deur die aantal dae tussen die twee datums te gebruik.', checkMode: 'self', answer: 'Ja. Van die 3de tot die 24ste is 21 dae. 21 ÷ 7 = 3, so dit is presies 3 volle weke. Aangesien die byvoeg van ʼn volle aantal weke altyd op dieselfde dag van die week land, val die 24ste op dieselfde dag as die 3de — ʼn Woensdag — so daar sal ook op die 24ste ʼn sessie wees.' },
        { difficulty: 'Medium', question: 'ʼn Skoolrooster wys dat die oggendsaamtrek om 8:30 vm. begin en 20 minute duur. Hoe laat eindig die saamtrek?', checkMode: 'auto', correctAnswer: '8:50 vm.', correctAnswers: ['8:50 vm.', '8:50vm.', '8:50'], explanation: '8:30 vm. + 20 minute = 8:50 vm., want 30 + 20 = 50 minute, wat nog binne dieselfde uur is.' },
        { difficulty: 'Hard', question: 'Zanele oefen elke dag 20 minute blokfluit. Hoeveel ure en minute oefen sy oor 5 dae?', checkMode: 'auto', correctAnswer: '1 uur 40 minute', correctAnswers: ['1 uur 40 minute', '1u40min', '1 u 40 min', '100 minute'], explanation: '20 × 5 = 100 minute. Skakel om na ure en minute: 100 ÷ 60 = 1 res 40, so 100 minute = 1 uur 40 minute.' },
        { difficulty: 'Hard', question: 'ʼn Reis het drie dele: ʼn 45 minuut-treinrit, ʼn 15 minuut-wag, en ʼn 20 minuut-busrit. Wat is die totale reistyd, in ure en minute?', checkMode: 'auto', correctAnswer: '1 uur 20 minute', correctAnswers: ['1 uur 20 minute', '1u20min', '1 u 20 min', '80 minute'], explanation: '45 + 15 + 20 = 80 minute. Aangesien 80 minute meer as 60 is, skakel om: 80 minute = 60 minute + 20 minute = 1 uur 20 minute.' },
        { difficulty: 'Hard', question: 'Twee leerders beplan hoe om spelwoorde vir ʼn toets te oefen. Plan A is 3 sessies van 20 minute elk. Plan B is 2 sessies van 35 minute elk. Watter plan gee meer totale oefentyd, en met hoeveel minute?', checkMode: 'auto', correctAnswer: 'Plan B met 10 minute', correctAnswers: ['Plan B met 10 minute', 'Plan B, 10 minute', 'B met 10 minute', 'plan b 10 minute'], explanation: 'Plan A: 3 × 20 = 60 minute. Plan B: 2 × 35 = 70 minute. Vergelyk: 70 minute is meer as 60 minute, so Plan B gee meer oefentyd, met 70 − 60 = 10 minute.' },
        { difficulty: 'Hard', question: 'ʼn Leerder bereken 4 ure 10 minute min 1 uur 45 minute deur die ure en minute apart af te trek: 4 − 1 = 3 ure, en aangesien 10 minder as 45 is, skryf hulle net "3 ure" en ignoreer die minute, wat ʼn finale antwoord van "3 ure" gee. Verduidelik wat verkeerd is met hierdie metode en gee die korrekte antwoord.', checkMode: 'self', answer: 'Die leerder kan nie 45 minute direk van 10 minute aftrek nie, want 10 is kleiner as 45, so om die minute bloot te ignoreer is verkeerd — jy kan nie ʼn deel van die aftrekking oorslaan nie. In plaas daarvan moet jy 1 uur van die ure-kolom leen en dit omskakel na 60 minute: 4 ure 10 minute word 3 ure 70 minute. Trek nou af: 3 − 1 = 2 ure, en 70 − 45 = 25 minute. Die korrekte antwoord is 2 ure 25 minute, nie 3 ure nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue eenhede omskakel, horlosies lees en verlope tyd bereken.' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn stewige begrip — gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde oor die omskakeling van minute na ure weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel ure is daar in 1 dag?', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 ure'], explanation: 'Per definisie is 1 dag = 24 ure.' },
        { difficulty: 'Easy', question: 'Hoeveel dae het ʼn skrikkeljaar?', checkMode: 'auto', correctAnswer: '366', correctAnswers: ['366', '366 dae'], explanation: 'ʼn Normale jaar het 365 dae, maar ʼn skrikkeljaar het een ekstra dag, wat 366 dae gee.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Dokumentêr duur 210 minute. Skryf hierdie tydsduur in ure en minute.', checkMode: 'auto', correctAnswer: '3 ure 30 minute', correctAnswers: ['3 ure 30 minute', '3u30min', '3 u 30 min', '3 ure en 30 minute'], explanation: '210 ÷ 60 = 3 res 30. Dus is 210 minute = 3 ure en 30 minute.' },
        { difficulty: 'Medium', question: 'ʼn Fees duur presies 4 weke. Hoeveel dae is dit?', checkMode: 'auto', correctAnswer: '28 dae', correctAnswers: ['28 dae', '28'], explanation: '1 week = 7 dae, so 4 weke = 4 × 7 = 28 dae.' },
        { difficulty: 'Medium', question: 'Themba sê: "ʼn Normale jaar en ʼn skrikkeljaar het altyd albei 365 dae." Verduidelik wat verkeerd is met hierdie stelling.', checkMode: 'self', answer: 'Hierdie stelling is verkeerd. ʼn Normale jaar het 365 dae, maar ʼn skrikkeljaar het een ekstra dag bygevoeg (gewoonlik by Februarie), wat dit 366 dae gee in plaas van 365. Skrikkeljare gebeur ongeveer elke 4 jaar, so nie elke jaar het dieselfde aantal dae nie.' },
        { difficulty: 'Easy', question: 'Op ʼn analoog horlosie wys die uurwyser presies na 11 en die minuutwyser presies na 12. Wat is die tyd?', checkMode: 'auto', correctAnswer: '11:00', correctAnswers: ['11:00', '11 uur', 'elf uur'], explanation: 'Die minuutwyser by 12 beteken dit is presies op die uur. Die uurwyser by 11 beteken die tyd is 11 uur.' },
        { difficulty: 'Easy-Medium', question: 'Skryf 7:30 in woorde, met "half"-taal.', checkMode: 'auto', correctAnswer: 'half agt', correctAnswers: ['half agt', 'half 8'], explanation: '30 minute oor 7 is presies halfpad om die horlosie, so ons sê "half agt".' },
        { difficulty: 'Medium', question: 'ʼn Digitale horlosie wys 12:05. Lebo sê: "Dit moet 12:05 nm. wees, want 12 kom net na 11, en 11 is in die oggend." Verduidelik hoekom haar redenasie nie korrek bepaal of dit vm. of nm. is nie.', checkMode: 'self', answer: 'Haar redenasie is foutief. Alhoewel 11 vm. in die oggend is, is die uur na 11 vm. eintlik 12 nm. (middag) — dit is een van die min plekke waar die nommering nie bloot opwaarts voortgaan nie, want nm. begin amptelik by 12:00 nm., nie 1:00 nm. nie. 12:05 kan egter steeds vm. of nm. wees, afhangend van konteks: 12:05 vm. is net na middernag, terwyl 12:05 nm. net na middag is. Haar verduideliking kom toevallig by ʼn algemene antwoord uit, maar om die verkeerde rede — die werklike bepaling het die vm./nm.-etiket of ekstra konteks nodig, nie ʼn patroon van "kom na 11" nie.' },
        { difficulty: 'Medium', question: 'Met ʼn uurwyser tussen 2 en 3, en ʼn minuutwyser wat na die 11 wys, lees ʼn leerder hierdie horlosie as 2:55. Is dit korrek? Verduidelik hoekom of hoekom nie.', checkMode: 'self', answer: 'Ja, hierdie lesing is korrek. Die minuutwyser by die 11 beteken 11 × 5 = 55 minute oor die uur. Die uurwyser tussen 2 en 3 (nog nie by 3 nie) bevestig dat die uur nog 2 is, want die uurwyser bereik eers die volgende syfer sodra ʼn volle 60 minute verloop het. Dus is die tyd 2:55.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Dramarepetisie begin om 3:40 nm. en duur 50 minute. Hoe laat eindig dit?', checkMode: 'auto', correctAnswer: '4:30 nm.', correctAnswers: ['4:30 nm.', '4:30nm.', '16:30'], explanation: '3:40 nm. + 50 minute: tel eers 20 minute by om by 4:00 nm. te kom, tel dan die oorblywende 30 minute by om by 4:30 nm. te kom.' },
        { difficulty: 'Medium', question: 'Sipho begin sy skaakwedstryd om 9:05 vm. Hy kyk na die horlosie wanneer die wedstryd eindig en dit wys 12:40 nm. Hoe lank het die wedstryd geduur?', checkMode: 'auto', correctAnswer: '3 ure 35 minute', correctAnswers: ['3 ure 35 minute', '3u35min', '3 u 35 min', '215 minute'], explanation: 'Van 9:05 vm. tot 12:05 nm. is 3 ure. Van 12:05 nm. tot 12:40 nm. is 35 minute. Totaal: 3 ure + 35 minute = 3 ure 35 minute.' },
        { difficulty: 'Medium', question: 'Ayanda spandeer 20 minute om ʼn kraam op te sit en dan 45 minute en 30 minute op twee verdere take, die een na die ander. Wat is die totale tyd wat sy op al drie take spandeer, in ure en minute?', checkMode: 'auto', correctAnswer: '1 uur 35 minute', correctAnswers: ['1 uur 35 minute', '1u35min', '1 u 35 min', '95 minute'], explanation: '20 + 45 + 30 = 95 minute. Aangesien 95 minute meer as 60 is, skakel om: 95 minute = 60 minute + 35 minute = 1 uur 35 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skoollesblok begin om 1:40 nm. Eers is daar Aardrykskunde vir 25 minute, dan ʼn pouse van 5 minute, dan Geskiedenis vir 40 minute. Hoe laat eindig die blok?', checkMode: 'auto', correctAnswer: '2:50 nm.', correctAnswers: ['2:50 nm.', '2:50nm.', '2:50'], explanation: 'Totale tydsduur: 25 + 5 + 40 = 70 minute = 1 uur 10 minute. As jy om 1:40 nm. begin en 1 uur bytel, kry jy 2:40 nm., en as jy dan die oorblywende 10 minute bytel, kry jy 2:50 nm.' },
        { difficulty: 'Medium', question: 'ʼn Kalender wys dat die 1ste van ʼn maand ʼn Sondag is. Watter dag van die week is die 30ste van daardie maand?', checkMode: 'auto', correctAnswer: 'Maandag', correctAnswers: ['Maandag'], explanation: 'Van die 1ste tot die 30ste is 29 dae later. 29 ÷ 7 = 4 res 1, so 29 dae is 4 volle weke plus 1 ekstra dag. Vier volle weke land terug op Sondag, en 1 ekstra dag na Sondag is Maandag, so die 30ste is ʼn Maandag.' },
        { difficulty: 'Medium', question: 'ʼn Kliniek hou elke Donderdag ʼn ondersoekdag. As ʼn ondersoekdag op die 6de van ʼn maand plaasvind, sal daar ook een op die 27ste van dieselfde maand wees? Verduidelik deur die aantal dae tussen die twee datums te gebruik.', checkMode: 'self', answer: 'Ja. Van die 6de tot die 27ste is 21 dae. 21 ÷ 7 = 3, so dit is presies 3 volle weke. Aangesien die byvoeg van ʼn volle aantal weke altyd op dieselfde dag van die week land, val die 27ste op dieselfde dag as die 6de — ʼn Donderdag — so daar sal ook op die 27ste ʼn ondersoekdag wees.' },
        { difficulty: 'Medium', question: 'ʼn Skoolrooster wys dat die naskoolse Swemsessie om 3:50 nm. begin en 25 minute duur. Hoe laat eindig die Swemsessie?', checkMode: 'auto', correctAnswer: '4:15 nm.', correctAnswers: ['4:15 nm.', '4:15nm.', '4:15'], explanation: '3:50 nm. + 25 minute: tel 10 minute by om by 4:00 nm. te kom, tel dan die oorblywende 15 minute by om by 4:15 nm. te kom.' },
        { difficulty: 'Hard', question: 'Kagiso lees elke dag 15 minute vir 12 dae aaneen. Hoeveel ure het sy in totaal gelees?', checkMode: 'auto', correctAnswer: '3 ure', correctAnswers: ['3 ure', '3u', '3'], explanation: '15 × 12 = 180 minute. Skakel om na ure: 180 ÷ 60 = 3 ure presies.' },
        { difficulty: 'Hard', question: 'ʼn Multi-vlugreis het drie dele: ʼn 2 uur 20 minuut-vlug, ʼn 1 uur 35 minuut-oorstaptyd, en ʼn 1 uur 50 minuut-vlug. Wat is die totale reistyd, in ure en minute?', checkMode: 'auto', correctAnswer: '5 ure 45 minute', correctAnswers: ['5 ure 45 minute', '5u45min', '5 u 45 min', '345 minute'], explanation: 'Tel die ure by: 2 + 1 + 1 = 4 ure. Tel die minute by: 20 + 35 + 50 = 105 minute. Skakel 105 minute om: 1 uur 45 minute. Totaal: 4 ure + 1 uur 45 minute = 5 ure 45 minute.' },
        { difficulty: 'Hard', question: 'Om by ʼn vriend se huis te kom, is een opsie ʼn direkte bus wat 50 minute vat. Die ander opsie is om 15 minute te stap, 8 minute vir ʼn trein te wag, en 30 minute met die trein te ry. Watter opsie is vinniger, en met hoeveel minute?', checkMode: 'auto', correctAnswer: 'die direkte bus met 3 minute', correctAnswers: ['die direkte bus met 3 minute', 'direkte bus met 3 minute', 'bus met 3 minute', 'die bus, 3 minute'], explanation: 'Direkte bus: 50 minute. Stap + wag + trein: 15 + 8 + 30 = 53 minute. Vergelyk: 50 minute is minder as 53 minute, so die direkte bus is vinniger, met 53 − 50 = 3 minute.' },
        { difficulty: 'Hard', question: 'ʼn Leerder tel 2 ure 50 minute en 1 uur 35 minute bymekaar. Hulle tel die ure by (2 + 1 = 3) en die minute by (50 + 35 = 85), en skryf dan die finale antwoord as "3 ure 85 minute." Verduidelik wat verkeerd is met hierdie antwoord en gee die korrek omgeskakelde totaal.', checkMode: 'self', answer: 'Die ure en minute is korrek bygetel (3 ure en 85 minute), maar die antwoord is nie omgeskakel nie, en ʼn geldige tydtotaal kan nie 85 minute hê nie, want minute moet altyd minder as 60 wees. Aangesien 85 minute = 60 minute + 25 minute = 1 uur 25 minute, moet hierdie ekstra uur na die uretotaal geskuif word: 3 ure + 1 uur 25 minute = 4 ure 25 minute. Die korrek omgeskakelde antwoord is 4 ure 25 minute.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitmuntend! Jy het ʼn diep, buigsame begrip van tyd oor elke vaardigheidsgebied.' },
        { minScore: 15, message: 'Puik werk! Jy hanteer die meeste tydprobleme met selfvertroue — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan verlope tyd, kalenders en multi-stap probleme weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
