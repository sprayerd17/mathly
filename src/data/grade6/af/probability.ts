import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// impossible         → red    (#dc2626)
// unlikely           → orange (#ea580c)
// equally likely     → yellow (#ca8a04)
// likely             → blue   (#2563eb)
// certain            → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROBABILITY SCALE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-scale',
      title: 'Waarskynlikheidskaal',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Waarskynlikheid beskryf hoe waarskynlik dit is dat ʼn gebeurtenis sal plaasvind. Ons gebruik woorde soos ${re('onmoontlik')}, ${or('onwaarskynlik')}, ${ye('ewe waarskynlik')}, ${bl('waarskynlik')} en ${gr('seker')}. Op ʼn skaal van 0 tot 1 beteken <strong>0</strong> onmoontlik en <strong>1</strong> beteken seker. Gebeurtenisse kan enige plek op hierdie skaal geplaas word, afhangend van hoe waarskynlik hulle is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onmoontlik')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('onwaarskynlik')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('ewe waarskynlik')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('waarskynlik')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('seker')}</span>` +
        `</div>` +

        // ── Probability scale visual ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidskaal</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">` +
        `<span style="font-size:13px;font-weight:700;color:#dc2626;">0</span>` +
        `<span style="font-size:13px;font-weight:700;color:#ca8a04;">0.5</span>` +
        `<span style="font-size:13px;font-weight:700;color:#16a34a;">1</span>` +
        `</div>` +
        `<div style="height:12px;border-radius:6px;background:linear-gradient(to right,#dc2626,#ea580c,#ca8a04,#2563eb,#16a34a);margin-bottom:10px;"></div>` +
        `<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;">` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#dc2626;">Onmoontlik</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ea580c;">Onwaarskynlik</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#ca8a04;">Ewe waarskynlik</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#2563eb;">Waarskynlik</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#16a34a;">Seker</span>` +
        `</div>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onmoontlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan nooit plaasvind nie. Waarskynlikheid = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Onwaarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan gebeur, maar sal waarskynlik nie.</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fef08a;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">Ewe waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis het dieselfde kans om te gebeur as om nie te gebeur nie. Waarskynlikheid = 0.5.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal waarskynlik gebeur, maar is nie gewaarborg nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Seker</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal altyd plaasvind. Waarskynlikheid = 1.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Sipho kies ʼn kaart uit ʼn pak waar elke kaart ʼn hartjie is. Wat is die waarskynlikheid om ʼn hartjie te kies?',
          answer: `Dit is ${gr('seker')} — waarskynlikheid = ${gr('1')}`,
          steps: [
            `Elke kaart is ʼn hartjie, so dit sal altyd gebeur.`,
            `Dit is ${gr('seker')}, waarskynlikheid = ${gr('1')}.`,
          ],
        },
        {
          question: 'Lerato gooi ʼn gewone dobbelsteen. Wat is die waarskynlikheid om ʼn 8 te gooi?',
          answer: `Dit is ${re('onmoontlik')} — waarskynlikheid = ${re('0')}`,
          steps: [
            `ʼn Dobbelsteen het net die getalle 1 tot 6, so ʼn 8 gooi kan nooit gebeur nie.`,
            `Dit is ${re('onmoontlik')}, waarskynlikheid = ${re('0')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the probability scale from 0 to 1 with everyday examples of impossible unlikely equally likely likely and certain events" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Probability scale from 0 to 1 showing impossible red unlikely orange equally likely yellow likely blue and certain green positions" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-fraction',
      title: 'Waarskynlikheid as ʼn Breuk',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Ons skryf waarskynlikheid as ʼn breuk — ${gr('gunstige uitkomste')} oor ${bl('totale uitkomste')}. Waarskynlikheid = ${gr('aantal maniere waarop die gebeurtenis kan plaasvind')} gedeel deur ${bl('totale aantal moontlike uitkomste')}. Die waarskynlikheid is altyd tussen 0 en 1.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('totale uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('waarskynlikheidsbreuk')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidsformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('W(gebeurtenis)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;margin-left:8px;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:3px;">${gr('aantal gunstige uitkomste')}</span><span style="display:block;padding-top:3px;">${bl('totale aantal moontlike uitkomste')}</span></span></p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig altyd jou breuk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Sodra jy die ${or('waarskynlikheidsbreuk')} gevind het, vereenvoudig dit tot sy laagste terme deur die GGF te gebruik — net soos wanneer jy enige gewone breuk vereenvoudig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak het 4 rooi balle en 6 blou balle. Vind die waarskynlikheid om ʼn rooi bal te kies.',
          answer: `W(rooi) = ${or('2/5')}`,
          steps: [
            `${gr('Gunstige uitkomste')} = ${gr('4')} rooi balle.`,
            `${bl('Totale uitkomste')} = ${bl('10')} balle (4 rooi + 6 blou).`,
            `${or('Waarskynlikheid')} = ${gr('4')} ÷ ${bl('10')} = ${or('4/10')} = ${or('2/5')}.`,
          ],
        },
        {
          question: 'Amahle gooi ʼn dobbelsteen. Vind die waarskynlikheid om ʼn getal groter as 4 te gooi.',
          answer: `W(groter as 4) = ${or('1/3')}`,
          steps: [
            `${gr('Gunstige uitkomste')}: getalle groter as 4 is 5 en 6 — dit is ${gr('2')} uitkomste.`,
            `${bl('Totale uitkomste')}: ʼn dobbelsteen het ${bl('6')} vlakke.`,
            `${or('Waarskynlikheid')} = ${gr('2')} ÷ ${bl('6')} = ${or('2/6')} = ${or('1/3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to write probability as a fraction using favourable outcomes over total outcomes with worked examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a bag with 4 red and 6 blue balls labelling favourable outcomes green and total outcomes blue with the probability fraction orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Uitkomste Lys',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Uitkoms')} is ʼn moontlike resultaat van ʼn eksperiment. Ons lys alle moontlike ${bl('uitkomste')} voordat ons waarskynlikheid bereken, sodat ons nie een mis nie. Vir gekombineerde gebeurtenisse, soos ʼn muntstuk opgooi en ʼn dobbelsteen gooi, vermenigvuldig ons die aantal ${bl('uitkomste')} vir elke gebeurtenis om die ${or('totaal')} te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uitkomste')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totaal')}</span>` +
        `</div>` +

        // ── Combined events rule ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gekombineerde gebeurtenisse</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">${or('Totale uitkomste')} = aantal ${bl('uitkomste')} vir Gebeurtenis 1 <strong>×</strong> aantal ${bl('uitkomste')} vir Gebeurtenis 2.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lys altyd eers uitkomste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om alle moontlike ${bl('uitkomste')} neer te skryf help jou om die ${or('totaal')} akkuraat te tel en te sien watter ${gr('gunstig')} is. Raai nooit die totaal nie — lys of bereken dit altyd.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Hoeveel totale uitkomste is daar?',
          answer: `${or('Totale uitkomste')} = ${or('12')}`,
          steps: [
            `${bl('Muntstukuitkomste')}: kop of stert = ${bl('2')} uitkomste.`,
            `${bl('Dobbelsteenuitkomste')}: 1, 2, 3, 4, 5, 6 = ${bl('6')} uitkomste.`,
            `${or('Totale uitkomste')} = ${bl('2')} × ${bl('6')} = ${or('12')}.`,
          ],
        },
        {
          question: 'ʼn Wieletjie het 4 gelyke afdelings — rooi, blou, groen, geel. Vind die waarskynlikheid om op rooi of geel te land.',
          answer: `W(rooi of geel) = ${or('1/2')}`,
          steps: [
            `Lys ${bl('uitkomste')}: rooi, blou, groen, geel = ${or('4')} altesaam.`,
            `${gr('Gunstige uitkomste')}: rooi of geel = ${gr('2')}.`,
            `Waarskynlikheid = ${gr('2')} ÷ ${or('4')} = ${or('2/4')} = ${or('1/2')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to list all outcomes for single and combined events and use them to calculate probability" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a sample space table for flipping a coin and rolling a dice with all 12 outcomes listed outcomes blue favourable outcomes green total orange" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Waarskynlikheidskaal & Taal (0-3, Maklik) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'Watter woord beskryf ʼn gebeurtenis wat nie seker is nie, maar ʼn goeie kans het om te gebeur?', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: 'ʼn Gebeurtenis met ʼn goeie kans om te gebeur, maar nie gewaarborg is nie, word beskryf as waarskynlik ✓' },
        { difficulty: 'Easy', question: 'Zanele koop ʼn kaartjie in ʼn fondsinsameling waar 999 uit 1 000 kaartjies verloorkaartjies is. Gebruik die waarskynlikheidskaal hierbo getoon, watter woord beskryf haar kans om te wen die beste?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Slegs 1 uit 1 000 kaartjies wen, wat ʼn baie klein kans is. Dit is onwaarskynlik (dit kan gebeur, maar sal amper seker nie) ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Rangskik hierdie gebeurtenisse van minste waarskynlik na mees waarskynlik: (A) ʼn 1 gooi met ʼn gewone dobbelsteen, (B) kop opgooi met ʼn muntstuk, (C) ʼn rooi bal kies uit ʼn sak van 8 rooi balle en 2 blou balle.', checkMode: 'auto', correctAnswer: 'A, B, C', correctAnswers: ['A, B, C', 'A,B,C', 'ABC'], explanation: 'A: 1/6 ≈ 0,17.\nB: 1/2 = 0,5.\nC: 8/10 = 0,8.\nVolgorde van minste na mees waarskynlik: A, B, C ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie is verdeel in 6 gelyke afdelings. 1 afdeling is blou en 5 afdelings is wit. Gebruik die waarskynlikheidskaal hierbo getoon, waar sal om op blou te land val (onmoontlik, onwaarskynlik, ewe waarskynlik, waarskynlik, seker)?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Slegs 1 uit 6 afdelings is blou, ʼn klein breukdeel van die wieletjie (1/6 ≈ 0,17). Dit is onwaarskynlik ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Blok 2 — Waarskynlikheid as ʼn Breuk — Enkele Gebeurtenisse (4-8, Maklik-Matig) — DIAGRAM-GEMERK
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 7 rooi fiches, 5 blou fiches en 8 groen fiches, soos getoon. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20'], explanation: 'Gunstige uitkomste = 7 rooi fiches.\nTotale uitkomste = 7 + 5 + 8 = 20 fiches.\nW(rooi) = 7/20 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="72" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="94" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="94" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="94" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="116" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="116" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="116" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="138" r="8" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gewone dobbelsteen genommer 1 tot 6 word gegooi. Vind die waarskynlikheid om ʼn ewe getal te gooi.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'Ewe getalle van 1-6: 2, 4, 6 — dit is 3 gunstige uitkomste.\nTotale uitkomste op ʼn dobbelsteen = 6.\nW(ewe) = 3/6 = 1/2 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings genommer 1 tot 12. Vind die waarskynlikheid om op ʼn veelvoud van 5 te land.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], explanation: 'Veelvoude van 5 van 1-12: 5, 10 — dit is 2 gunstige uitkomste.\nTotale afdelings = 12.\nW(veelvoud van 5) = 2/12 = 1/6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolfondsinsameling verkoop 180 kaartjies. Zola koop 3 van die kaartjies, en slegs 1 kaartjie in totaal sal die hoofprys wen. Vind die waarskynlikheid dat Zola die hoofprys wen.', checkMode: 'auto', correctAnswer: '1/60', correctAnswers: ['1/60', '3/180'], explanation: 'Gunstige uitkomste = 3 kaartjies wat Zola hou.\nTotale uitkomste = 180 kaartjies.\nW(Zola wen) = 3/180 = 1/60 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fles het altesaam 24 lekkers, en 9 daarvan is NIE suurlemoengeur nie (die res is suurlemoen). Palesa kies een lekker sonder om te kyk. Vind die waarskynlikheid dat sy ʼn suurlemoengeur-lekker kies.', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8', '15/24'], explanation: 'Suurlemoenlekkers = 24 − 9 = 15.\nGunstige uitkomste = 15 suurlemoenlekkers.\nW(suurlemoen) = 15/24 = 5/8 ✓' },

        // Blok 3 — Uitkomste en Uitkomsruimtes Lys (9-13, Matig) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'Lys al die moontlike uitkomste wanneer ʼn muntstuk opgegooi word en ʼn wieletjie met 5 gelyke afdelings gemerk P, Q, R, S, T gedraai word. Die leë rooster hieronder het muntstukuitkomste langs die kant en wieletjie-uitkomste bo-oor — gebruik dit om jou te help om elke paar te lys.', checkMode: 'auto', correctAnswer: 'KP, KQ, KR, KS, KT, SP, SQ, SR, SS, ST', correctAnswers: ['KP, KQ, KR, KS, KT, SP, SQ, SR, SS, ST', 'KP,KQ,KR,KS,KT,SP,SQ,SR,SS,ST', 'KP KQ KR KS KT SP SQ SR SS ST'], explanation: 'Muntstukuitkomste: K (kop), S (stert).\nWieletjie-uitkomste: P, Q, R, S, T.\nPaar elke muntstukuitkomste met elke wieletjie-uitkomste: KP, KQ, KR, KS, KT, SP, SQ, SR, SS, ST — dit is 10 uitkomste ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82" y1="82" x2="82" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112" y1="82" x2="112" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142" y1="82" x2="142" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172" y1="82" x2="172" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">P</text><text x="97" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Q</text><text x="127" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="157" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text><text x="187" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">T</text><text x="35" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Wegneemetery bied 3 verskillende voorgeregte en 5 verskillende hoofmaaltye aan. As Musa een voorgereg en een hoofmaaltyd kies, hoeveel verskillende kombinasies is moontlik?', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Voorgereguitkomste = 3.\nHoofmaaltyduitkomste = 5.\nTotale kombinasies = 3 × 5 = 15 ✓' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 9.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 9: (3,6), (4,5), (5,4), (6,3) — dit is 4 gunstige uitkomste.\nW(som van 9) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder lys die uitkomste vir die kies van ʼn T-hemp kleur (rooi, blou of groen) en ʼn grootte (klein of medium) as: rooi-klein, rooi-medium, blou-klein, blou-medium. Verduidelik wat ontbreek in hierdie lys, en gee die totale aantal korrekte uitkomste.', checkMode: 'self', answer: 'Die leerder mis die twee kombinasies met groen: groen-klein en groen-medium. Die volledige lys behoort te wees rooi-klein, rooi-medium, blou-klein, blou-medium, groen-klein, groen-medium — dit is 6 uitkomste (3 kleure × 2 groottes = 6), nie 4 nie.' },
        { difficulty: 'Medium', question: 'Vusi gooi ʼn muntstuk twee keer op en beweer dat "stert dan kop" (SK) dieselfde uitkoms is as "kop dan stert" (KS), so net een van hulle hoef in die uitkomsruimte te verskyn. Is Vusi korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, Vusi is nie korrek nie. Die volgorde waarin die muntstuk land, maak saak, so SK en KS is twee verskillende, aparte uitkomste. Albei moet apart gelys word in die uitkomsruimte, wat 4 totale uitkomste gee: KK, KS, SK, SS — nie 3 nie.' },

        // Blok 4 — Vergelyk, Regverdig & Multi-Stap Waarskynlikheid (14-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Boks penne bevat 12 penne: 4 is blou, 4 is swart, en 4 is rooi. Themba kies een pen lukraak. Vind die waarskynlikheid dat dit NIE blou is nie, en gee aan waar dit op die waarskynlikheidskaal val.', checkMode: 'auto', correctAnswer: '2/3, waarskynlik', correctAnswers: ['2/3, waarskynlik', '2/3 waarskynlik', 'waarskynlik, 2/3', '8/12, waarskynlik'], explanation: 'Nie blou nie = swart of rooi = 4 + 4 = 8 gunstige uitkomste.\nTotale penne = 12.\nW(nie blou nie) = 8/12 = 2/3.\nAangesien 2/3 nader aan 1 (seker) as aan 0,5 (ewe waarskynlik) is, is dit waarskynlik ✓' },
        { difficulty: 'Medium-Hard', question: 'Klas A het 16 leerders uit 25 wat ʼn horlosie dra. Klas B het 15 leerders uit 24 wat ʼn horlosie dra. Watter klas het ʼn groter proporsie leerders wat ʼn horlosie dra? Wys jou berekeninge vir albei klasse en regverdig jou antwoord.', checkMode: 'self', answer: 'Klas A: W(dra ʼn horlosie) = 16/25 = 0,64. Klas B: W(dra ʼn horlosie) = 15/24 = 5/8 = 0,625. Aangesien 0,64 groter is as 0,625, het Klas A ʼn groter proporsie leerders wat ʼn horlosie dra.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 8 gelyke afdelings, en 1 afdeling word beskryf as "onwaarskynlik" om op te land deur ʼn klas wat die waarskynlikheidskaal bespreek. As slegs 1 afdeling uit die 8 hierdie beskrywing pas, skryf die waarskynlikheid om op daardie afdeling te land as ʼn breuk, en verduidelik waarom "onwaarskynlik" ʼn gepaste woord daarvoor is.', checkMode: 'self', answer: 'Die waarskynlikheid is 1/8 = 0,125. Dit is gepas om as onwaarskynlik te beskryf omdat 1/8 ʼn klein breuk is, baie nader aan 0 (onmoontlik) as aan 0,5 (ewe waarskynlik) — die gebeurtenis kan gebeur, maar sal waarskynlik nie, wat ooreenstem met die betekenis van "onwaarskynlik".' },

        // Blok 5 — Eksperimentele vs Teoretiese Waarskynlikheid & Onafhanklike Gebeurtenisse (17-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word vermoed om oneerlik te wees. Bongiwe gooi dit 60 keer en teken ʼn 6 aan by 18 van daardie gooie. ʼn Klasmaat sê dit bewys die teoretiese waarskynlikheid om ʼn 6 met hierdie dobbelsteen te gooi is presies 18/60. Is die klasmaat korrek? Verduidelik die verskil tussen eksperimentele en teoretiese waarskynlikheid.', checkMode: 'self', answer: 'Nee, die klasmaat is nie korrek nie. 18/60 = 3/10 is die eksperimentele waarskynlikheid — dit beskryf slegs wat in hierdie spesifieke stel van 60 gooie gebeur het. Die teoretiese waarskynlikheid om ʼn 6 te gooi met ʼn gewone, regverdige dobbelsteen is altyd 1/6, gebaseer op 6 ewe waarskynlike uitkomste. ʼn Resultaat soos 18/60 wat hoër is as die verwagte 1/6 (wat 10/60 sou wees) kan aandui dat die dobbelsteen oneerlik kan wees, maar ʼn enkele eksperiment kan dit nie definitief bewys nie — meer proewe sou nodig wees om verder te ondersoek.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi fiches en 7 blou fiches. Kabelo kies ʼn fiche, teken die kleur aan, sit dit terug in die sak, en kies weer. Vind die waarskynlikheid dat hy albei kere ʼn rooi fiche kies.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'W(rooi) elke keer = 3/10, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(albei kere rooi) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'ʼn Karnavalwieletjie het 8 gelyke afdelings: 1 "wen ʼn prys"-afdeling en 7 "geen prys"-afdelings. Aviwe draai dit 80 keer en land 9 keer op die "wen ʼn prys"-afdeling. Vind eers haar eksperimentele waarskynlikheid om ʼn prys te wen en die teoretiese waarskynlikheid, vind dan die waarskynlikheid dat as sy nog twee keer sou draai (met die wieletjie onveranderd), sy albei kere ʼn prys wen.', checkMode: 'self', answer: 'Eksperimentele waarskynlikheid = 9/80 = 0,1125. Teoretiese waarskynlikheid = 1/8 = 0,125 (aangesien 1 uit 8 gelyke afdelings ʼn prys wen) — die eksperimentele resultaat (0,1125) is naby aan die teoretiese resultaat (0,125), wat wys dat met genoeg proewe, eksperimentele waarskynlikheid nader aan teoretiese waarskynlikheid kom. Vir nog twee draaie (onafhanklike gebeurtenisse, aangesien die wieletjie elke keer onveranderd bly), gebruik die teoretiese waarskynlikheid: 1/8 × 1/8 = 1/64.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die waarskynlikheidskaal, breuke, uitkomsruimtes en eksperimentele waarskynlikheid onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip van waarskynlikheid — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidskaal en breukformule, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Waarskynlikheidskaal & Taal (0-3, Maklik) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'Watter woord beskryf ʼn gebeurtenis wat kan gebeur, maar waarskynlik nie sal nie?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'ʼn Gebeurtenis wat kan gebeur, maar waarskynlik nie sal nie, word beskryf as onwaarskynlik ✓' },
        { difficulty: 'Easy', question: 'ʼn Verkoopmasjien het 1 stukkende knoppie uit 20 knoppies wat almal identies lyk. Sibongile druk ʼn lukrake knoppie. Gebruik die waarskynlikheidskaal hierbo getoon, watter woord beskryf haar kans om die stukkende een te druk die beste?', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Slegs 1 uit 20 knoppies is stukkend, ʼn klein kans (1/20 = 0,05). Dit is onwaarskynlik ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Rangskik hierdie gebeurtenisse van minste waarskynlik na mees waarskynlik: (A) ʼn getal kleiner as 3 gooi met ʼn gewone dobbelsteen, (B) stert opgooi met ʼn muntstuk, (C) ʼn rooi bal kies uit ʼn sak van 1 rooi bal en 19 blou balle.', checkMode: 'auto', correctAnswer: 'C, A, B', correctAnswers: ['C, A, B', 'C,A,B', 'CAB'], explanation: 'C: 1/20 = 0,05.\nA: 2/6 = 1/3 ≈ 0,33.\nB: 1/2 = 0,5.\nVolgorde van minste na mees waarskynlik: C, A, B ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie is verdeel in 4 gelyke afdelings. 3 afdelings is oranje en 1 afdeling is grys. Gebruik die waarskynlikheidskaal hierbo getoon, waar sal om op oranje te land val (onmoontlik, onwaarskynlik, ewe waarskynlik, waarskynlik, seker)?', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: '3 uit 4 afdelings is oranje (3/4 = 0,75), meer as die helfte maar nie al die wieletjie nie. Dit is waarskynlik ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Blok 2 — Waarskynlikheid as ʼn Breuk — Enkele Gebeurtenisse (4-8, Maklik-Matig) — DIAGRAM-GEMERK
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 9 rooi fiches en 6 blou fiches, soos getoon. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '9/15'], explanation: 'Gunstige uitkomste = 9 rooi fiches.\nTotale uitkomste = 9 + 6 = 15 fiches.\nW(rooi) = 9/15 = 3/5 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="105" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gewone dobbelsteen genommer 1 tot 6 word gegooi. Vind die waarskynlikheid om ʼn onewe getal te gooi.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'Onewe getalle van 1-6: 1, 3, 5 — dit is 3 gunstige uitkomste.\nTotale uitkomste op ʼn dobbelsteen = 6.\nW(onewe) = 3/6 = 1/2 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 10 gelyke afdelings genommer 1 tot 10. Vind die waarskynlikheid om op ʼn faktor van 10 te land.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: 'Faktore van 10 van 1-10: 1, 2, 5, 10 — dit is 4 gunstige uitkomste.\nTotale afdelings = 10.\nW(faktor van 10) = 4/10 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolfondsinsameling verkoop 300 kaartjies. Palesa koop 5 van die kaartjies, en slegs 1 kaartjie in totaal sal die hoofprys wen. Vind die waarskynlikheid dat Palesa die hoofprys wen.', checkMode: 'auto', correctAnswer: '1/60', correctAnswers: ['1/60', '5/300'], explanation: 'Gunstige uitkomste = 5 kaartjies wat Palesa hou.\nTotale uitkomste = 300 kaartjies.\nW(Palesa wen) = 5/300 = 1/60 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fles het altesaam 30 lekkers, en 11 daarvan is muntgeur. Andile kies een lekker sonder om te kyk. Vind die waarskynlikheid dat hy ʼn muntgeur-lekker kies.', checkMode: 'auto', correctAnswer: '11/30', correctAnswers: ['11/30'], explanation: 'Gunstige uitkomste = 11 muntlekkers.\nTotale uitkomste = 30 lekkers.\nW(mint) = 11/30 ✓' },

        // Blok 3 — Uitkomste en Uitkomsruimtes Lys (9-13, Matig) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'Lys al die moontlike uitkomste wanneer ʼn muntstuk opgegooi word en ʼn gewone dobbelsteen genommer 1 tot 6 gegooi word. Die leë rooster hieronder het muntstukuitkomste langs die kant en dobbelsteenuitkomste bo-oor — gebruik dit om jou te help om elke paar te lys.', checkMode: 'auto', correctAnswer: 'K1, K2, K3, K4, K5, K6, S1, S2, S3, S4, S5, S6', correctAnswers: ['K1, K2, K3, K4, K5, K6, S1, S2, S3, S4, S5, S6', 'K1,K2,K3,K4,K5,K6,S1,S2,S3,S4,S5,S6', 'K1 K2 K3 K4 K5 K6 S1 S2 S3 S4 S5 S6'], explanation: 'Muntstukuitkomste: K (kop), S (stert).\nDobbelsteenuitkomste: 1, 2, 3, 4, 5, 6.\nPaar elke muntstukuitkomste met elke dobbelsteenuitkomste: K1, K2, K3, K4, K5, K6, S1, S2, S3, S4, S5, S6 — dit is 12 uitkomste ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="48" width="200" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="10" y1="82" x2="210" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="44" y1="48" x2="44" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="72" y1="82" x2="72" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="99" y1="82" x2="99" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127" y1="82" x2="127" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="82" x2="155" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="182" y1="82" x2="182" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="10" y1="112" x2="210" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="58" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="86" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="113" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="141" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="169" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="196" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6</text><text x="27" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="27" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Kafee bied 4 verskillende drankies en 3 verskillende koppiegroottes aan. As Owami een drankie en een koppiegrootte kies, hoeveel verskillende kombinasies is moontlik?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Drankie-uitkomste = 4.\nKoppiegrootte-uitkomste = 3.\nTotale kombinasies = 4 × 3 = 12 ✓' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 8.', checkMode: 'auto', correctAnswer: '5/36', correctAnswers: ['5/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 8: (2,6), (3,5), (4,4), (5,3), (6,2) — dit is 5 gunstige uitkomste.\nW(som van 8) = 5/36 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder lys die uitkomste vir die kies van ʼn bolaagsel (kaas of ham) en ʼn broodtipe (wit, bruin of rog) as: kaas-wit, kaas-bruin, ham-wit, ham-bruin. Verduidelik wat ontbreek in hierdie lys, en gee die totale aantal korrekte uitkomste.', checkMode: 'self', answer: 'Die leerder mis die twee kombinasies met rog: kaas-rog en ham-rog. Die volledige lys behoort te wees kaas-wit, kaas-bruin, kaas-rog, ham-wit, ham-bruin, ham-rog — dit is 6 uitkomste (2 bolaagsels × 3 broodtipes = 6), nie 4 nie.' },
        { difficulty: 'Medium', question: 'Lindiwe gooi ʼn dobbelsteen twee keer en beweer dat om "ʼn 3 dan ʼn 5" te kry dieselfde uitkoms is as "ʼn 5 dan ʼn 3", so net een van hulle hoef in die uitkomsruimte te verskyn. Is Lindiwe korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, Lindiwe is nie korrek nie. Die volgorde waarin die getalle gegooi word, maak saak, so "3 dan 5" en "5 dan 3" is twee verskillende, aparte uitkomste. Om hulle as dieselfde uitkoms te behandel, sou die uitkomsruimte ondertel — vir twee dobbelsteengooie is daar 6 × 6 = 36 totale geordende uitkomste, en elke kombinasie van verskillende getalle verskyn twee keer (een keer in elke volgorde).' },

        // Blok 4 — Vergelyk, Regverdig & Multi-Stap Waarskynlikheid (14-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Boks kentekens bevat 16 kentekens: 6 is ster-vormig, 6 is hart-vormig, en 4 is sirkel-vormig. Anele kies een kenteken lukraak. Vind die waarskynlikheid dat dit NIE ster-vormig is nie, en gee aan waar dit op die waarskynlikheidskaal val.', checkMode: 'auto', correctAnswer: '5/8, waarskynlik', correctAnswers: ['5/8, waarskynlik', '5/8 waarskynlik', 'waarskynlik, 5/8', '10/16, waarskynlik'], explanation: 'Nie ster nie = hart of sirkel = 6 + 4 = 10 gunstige uitkomste.\nTotale kentekens = 16.\nW(nie ster nie) = 10/16 = 5/8.\nAangesien 5/8 = 0,625 nader aan 1 (seker) as aan 0,5 (ewe waarskynlik) is, is dit waarskynlik ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sak het 6 geel fiches en 2 pers fiches. Zola sê "daar is slegs twee moontlike kleure, so om pers te kies moet ʼn waarskynlikheid van 1/2 hê." Is Zola se redenasie korrek? Verduidelik deur hierdie sak as voorbeeld te gebruik.', checkMode: 'self', answer: 'Nee, Zola se redenasie is verkeerd. Om slegs twee moontlike uitkomste te hê, beteken nie dat hulle ewe waarskynlik is nie. In hierdie sak is daar 6 geel fiches en 2 pers fiches uit 8 altesaam, so W(pers) = 2/8 = 1/4, nie 1/2 nie. Die waarskynlikheid hang af van hoeveel van elke kleur werklik in die sak is, nie net van hoeveel verskillende kleure daar bestaan nie.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 6 gelyke afdelings, en 5 daarvan word beskryf as "waarskynlik" om op te land deur ʼn klas wat die waarskynlikheidskaal bespreek. Skryf die waarskynlikheid om op een van daardie 5 afdelings te land as ʼn breuk, en verduidelik waarom "waarskynlik" ʼn gepaste woord daarvoor is.', checkMode: 'self', answer: 'Die waarskynlikheid is 5/6 ≈ 0,83. Dit is gepas om as waarskynlik te beskryf omdat 5/6 ʼn groot breuk is, baie nader aan 1 (seker) as aan 0,5 (ewe waarskynlik) — die gebeurtenis sal waarskynlik gebeur, maar is nie gewaarborg nie aangesien 1 afdeling nie deel van die gunstige groep is nie, wat ooreenstem met die betekenis van "waarskynlik".' },

        // Blok 5 — Eksperimentele vs Teoretiese Waarskynlikheid & Onafhanklike Gebeurtenisse (17-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Muntstuk word vermoed om oneerlik te wees. Thabang gooi dit 50 keer op en teken kop aan by 32 van daardie opgooie. ʼn Klasmaat sê dit bewys die teoretiese waarskynlikheid om kop te gooi met hierdie muntstuk is presies 32/50. Is die klasmaat korrek? Verduidelik die verskil tussen eksperimentele en teoretiese waarskynlikheid.', checkMode: 'self', answer: 'Nee, die klasmaat is nie korrek nie. 32/50 = 16/25 is die eksperimentele waarskynlikheid — dit beskryf slegs wat in hierdie spesifieke stel van 50 opgooie gebeur het. Die teoretiese waarskynlikheid om kop te gooi met ʼn gewone, regverdige muntstuk is altyd 1/2, gebaseer op 2 ewe waarskynlike uitkomste. ʼn Resultaat soos 32/50 wat hoër is as die verwagte 1/2 (wat 25/50 sou wees) kan aandui dat die muntstuk oneerlik kan wees, maar ʼn enkele eksperiment kan dit nie definitief bewys nie — meer proewe sou nodig wees om verder te ondersoek.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 4 rooi fiches en 6 blou fiches. Karabo kies ʼn fiche, teken die kleur aan, sit dit terug in die sak, en kies weer. Vind die waarskynlikheid dat sy albei kere ʼn rooi fiche kies.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25'], explanation: 'W(rooi) elke keer = 4/10 = 2/5, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(albei kere rooi) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'ʼn Karnavalwieletjie het 10 gelyke afdelings: 1 "wen ʼn prys"-afdeling en 9 "geen prys"-afdelings. Nomsa draai dit 100 keer en land 14 keer op die "wen ʼn prys"-afdeling. Vind eers haar eksperimentele waarskynlikheid om ʼn prys te wen en die teoretiese waarskynlikheid, vind dan die waarskynlikheid dat as sy nog twee keer sou draai (met die wieletjie onveranderd), sy albei kere ʼn prys wen.', checkMode: 'self', answer: 'Eksperimentele waarskynlikheid = 14/100 = 0,14. Teoretiese waarskynlikheid = 1/10 = 0,1 (aangesien 1 uit 10 gelyke afdelings ʼn prys wen) — die eksperimentele resultaat (0,14) is redelik naby aan die teoretiese resultaat (0,1). Vir nog twee draaie (onafhanklike gebeurtenisse, aangesien die wieletjie elke keer onveranderd bly), gebruik die teoretiese waarskynlikheid: 1/10 × 1/10 = 1/100.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die waarskynlikheidskaal, breuke, uitkomsruimtes en eksperimentele waarskynlikheid onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip van waarskynlikheid — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidskaal en breukformule, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Waarskynlikheidskaal & Taal (0-3, Maklik) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'Watter woord beskryf ʼn gebeurtenis met ʼn baie goeie kans om te gebeur, maar wat nie 100% gewaarborg is nie?', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: 'ʼn Gebeurtenis met ʼn baie goeie kans om te gebeur, maar wat nie ten volle gewaarborg is nie, word beskryf as waarskynlik ✓' },
        { difficulty: 'Easy', question: 'ʼn Nommerblokkie het die nommer 4 op al 6 vlakke. Delani gooi dit een keer. Gebruik die waarskynlikheidskaal hierbo getoon, watter woord beskryf die waarskynlikheid dat hy ʼn 4 gooi?', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Aangesien elke vlak ʼn 4 wys, sal om ʼn 4 te gooi altyd gebeur. Dit is seker ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },
        { difficulty: 'Easy', question: 'Rangskik hierdie gebeurtenisse van minste waarskynlik na mees waarskynlik: (A) ʼn blou bal kies uit ʼn sak van 15 rooi balle en 1 blou bal, (B) ʼn 6 gooi met ʼn gewone dobbelsteen, (C) kop opgooi met ʼn muntstuk.', checkMode: 'auto', correctAnswer: 'A, B, C', correctAnswers: ['A, B, C', 'A,B,C', 'ABC'], explanation: 'A: 1/16 = 0,0625.\nB: 1/6 ≈ 0,167.\nC: 1/2 = 0,5.\nVolgorde van minste na mees waarskynlik: A, B, C ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie is verdeel in 5 gelyke afdelings, en al 5 afdelings is blou gekleur. Gebruik die waarskynlikheidskaal hierbo getoon, waar sal om op rooi te land val (onmoontlik, onwaarskynlik, ewe waarskynlik, waarskynlik, seker)?', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Geen van die 5 afdelings is rooi nie, so om op rooi te land kan nooit gebeur nie. Dit is onmoontlik ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="70" x2="200" y2="70" stroke="#0f1f3d" stroke-width="2"/><line x1="20" y1="62" x2="20" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="62" x2="110" y2="78" stroke="#0f1f3d" stroke-width="2"/><line x1="200" y1="62" x2="200" y2="78" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0</text><text x="110" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">0,5</text><text x="200" y="95" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">1</text><text x="20" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onmoontlik</text><text x="65" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Onwaarskynlik</text><text x="110" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Ewe</text><text x="110" y="43" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">waarskynlik</text><text x="155" y="45" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Waarskynlik</text><text x="200" y="30" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">Seker</text><line x1="20" y1="70" x2="20" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="65" y1="70" x2="65" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="110" y1="70" x2="110" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="55" stroke="#9ca3af" stroke-width="1"/><line x1="200" y1="70" x2="200" y2="50" stroke="#9ca3af" stroke-width="1"/></svg>' },

        // Blok 2 — Waarskynlikheid as ʼn Breuk — Enkele Gebeurtenisse (4-8, Maklik-Matig) — DIAGRAM-GEMERK
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 3 rooi fiches en 9 blou fiches, soos getoon. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '3/12'], explanation: 'Gunstige uitkomste = 3 rooi fiches.\nTotale uitkomste = 3 + 9 = 12 fiches.\nW(rooi) = 3/12 = 1/4 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="83" r="8" fill="#dc2626" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="83" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="83" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="105" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="97" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><circle cx="123" cy="127" r="8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gewone dobbelsteen genommer 1 tot 6 word gegooi. Vind die waarskynlikheid om ʼn getal groter as 2 te gooi.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '4/6'], explanation: 'Getalle groter as 2 van 1-6: 3, 4, 5, 6 — dit is 4 gunstige uitkomste.\nTotale uitkomste op ʼn dobbelsteen = 6.\nW(groter as 2) = 4/6 = 2/3 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 20 gelyke afdelings genommer 1 tot 20. Vind die waarskynlikheid om op ʼn veelvoud van 4 te land.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '5/20'], explanation: 'Veelvoude van 4 van 1-20: 4, 8, 12, 16, 20 — dit is 5 gunstige uitkomste.\nTotale afdelings = 20.\nW(veelvoud van 4) = 5/20 = 1/4 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoolfondsinsameling verkoop 400 kaartjies. Kagiso koop 8 van die kaartjies, en slegs 1 kaartjie in totaal sal die hoofprys wen. Vind die waarskynlikheid dat Kagiso die hoofprys wen.', checkMode: 'auto', correctAnswer: '1/50', correctAnswers: ['1/50', '8/400'], explanation: 'Gunstige uitkomste = 8 kaartjies wat Kagiso hou.\nTotale uitkomste = 400 kaartjies.\nW(Kagiso wen) = 8/400 = 1/50 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fles het altesaam 40 lekkers, en 14 daarvan is toffiegeur. Nomvula kies een lekker sonder om te kyk. Vind die waarskynlikheid dat sy ʼn toffiegeur-lekker kies.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '14/40'], explanation: 'Gunstige uitkomste = 14 toffielekkers.\nTotale uitkomste = 40 lekkers.\nW(toffie) = 14/40 = 7/20 ✓' },

        // Blok 3 — Uitkomste en Uitkomsruimtes Lys (9-13, Matig) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'Lys al die moontlike uitkomste wanneer ʼn muntstuk opgegooi word en ʼn wieletjie met 4 gelyke afdelings gemerk rooi, blou, groen, geel gedraai word. Die leë rooster hieronder het muntstukuitkomste langs die kant en wieletjie-uitkomste (R=rooi, B=blou, G=groen, Y=geel) bo-oor — gebruik dit om jou te help om elke paar te lys.', checkMode: 'auto', correctAnswer: 'K-rooi, K-blou, K-groen, K-geel, S-rooi, S-blou, S-groen, S-geel', correctAnswers: ['K-rooi, K-blou, K-groen, K-geel, S-rooi, S-blou, S-groen, S-geel', 'Krooi,Kblou,Kgroen,Kgeel,Srooi,Sblou,Sgroen,Sgeel', 'K-rooi K-blou K-groen K-geel S-rooi S-blou S-groen S-geel'], explanation: 'Muntstukuitkomste: K (kop), S (stert).\nWieletjie-uitkomste: rooi, blou, groen, geel.\nPaar elke muntstukuitkomste met elke wieletjie-uitkomste: K-rooi, K-blou, K-groen, K-geel, S-rooi, S-blou, S-groen, S-geel — dit is 8 uitkomste ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="33" y="48" width="154" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="33" y1="82" x2="187" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="67" y1="48" x2="67" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="97" y1="82" x2="97" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127" y1="82" x2="127" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="157" y1="82" x2="157" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="33" y1="112" x2="187" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="82" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">R</text><text x="112" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><text x="142" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">G</text><text x="172" y="70" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Y</text><text x="50" y="102" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="50" y="132" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Pastarestaurant bied 5 verskillende souse en 2 verskillende pastavorms aan. As Zinhle een sous en een pastavorm kies, hoeveel verskillende kombinasies is moontlik?', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'Sousuitkomste = 5.\nPastavorm-uitkomste = 2.\nTotale kombinasies = 5 × 2 = 10 ✓' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 10.', checkMode: 'auto', correctAnswer: '1/12', correctAnswers: ['1/12', '3/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 10: (4,6), (5,5), (6,4) — dit is 3 gunstige uitkomste.\nW(som van 10) = 3/36 = 1/12 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder lys die uitkomste vir die kies van ʼn grootte (klein, medium of groot) en ʼn kleur (rooi of blou) as: klein-rooi, klein-blou, medium-rooi, medium-blou, groot-rooi. Verduidelik wat ontbreek in hierdie lys, en gee die totale aantal korrekte uitkomste.', checkMode: 'self', answer: 'Die leerder mis die kombinasie groot-blou. Die volledige lys behoort te wees klein-rooi, klein-blou, medium-rooi, medium-blou, groot-rooi, groot-blou — dit is 6 uitkomste (3 groottes × 2 kleure = 6), nie 5 nie.' },
        { difficulty: 'Medium', question: 'Sipho draai ʼn wieletjie gemerk A, B, C twee keer en beweer dat "A dan B" dieselfde uitkoms is as "B dan A", so net een van hulle hoef in die uitkomsruimte te verskyn. Is Sipho korrek? Verduidelik.', checkMode: 'self', answer: 'Nee, Sipho is nie korrek nie. Die volgorde waarin die wieletjie op elke draai land, maak saak, so "A dan B" en "B dan A" is twee verskillende, aparte uitkomste. Elke verskillende volgorde moet apart gelys word in die uitkomsruimte — vir 2 draaie van ʼn 3-afdeling wieletjie is daar 3 × 3 = 9 totale uitkomste, en om "A dan B" dieselfde as "B dan A" te behandel sou hulle ondertel.' },

        // Blok 4 — Vergelyk, Regverdig & Multi-Stap Waarskynlikheid (14-16, Matig-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Pakkie plakkers bevat 18 plakkers: 6 is ster-vormig, 6 is maan-vormig, en 6 is son-vormig. Ntando kies een plakker lukraak. Vind die waarskynlikheid dat dit NIE ster-vormig is nie, en gee aan waar dit op die waarskynlikheidskaal val.', checkMode: 'auto', correctAnswer: '2/3, waarskynlik', correctAnswers: ['2/3, waarskynlik', '2/3 waarskynlik', 'waarskynlik, 2/3', '12/18, waarskynlik'], explanation: 'Nie ster nie = maan of son = 6 + 6 = 12 gunstige uitkomste.\nTotale plakkers = 18.\nW(nie ster nie) = 12/18 = 2/3.\nAangesien 2/3 nader aan 1 (seker) as aan 0,5 (ewe waarskynlik) is, is dit waarskynlik ✓' },
        { difficulty: 'Medium-Hard', question: 'Klas A het 9 leerders uit 30 wat ʼn musiekinstrument speel. Klas B het 14 leerders uit 40 wat ʼn musiekinstrument speel. Watter klas het ʼn groter proporsie leerders wat ʼn musiekinstrument speel? Wys jou berekeninge vir albei klasse en regverdig jou antwoord.', checkMode: 'self', answer: 'Klas A: W(speel ʼn instrument) = 9/30 = 3/10 = 0,3. Klas B: W(speel ʼn instrument) = 14/40 = 7/20 = 0,35. Aangesien 0,35 groter is as 0,3, het Klas B ʼn groter proporsie leerders wat ʼn musiekinstrument speel.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sak bevat slegs groen fiches — elke enkele fiche daarin is groen. Skryf die waarskynlikheid om ʼn groen fiche te kies as ʼn breuk, en verduidelik waarom "seker" die gepaste woord vir hierdie gebeurtenis is.', checkMode: 'self', answer: 'Die waarskynlikheid is 1 (dit kan geskryf word as ʼn breuk soos 10/10 as daar 10 fiches is, maar dit vereenvoudig altyd tot 1). Dit is gepas om as seker te beskryf omdat elke moontlike uitkoms (elke fiche in die sak) groen is, so om ʼn groen fiche te kies moet elke keer gebeur — daar is geen ander moontlike resultaat nie, en ʼn waarskynlikheid van 1 beteken altyd seker.' },

        // Blok 5 — Eksperimentele vs Teoretiese Waarskynlikheid & Onafhanklike Gebeurtenisse (17-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Wieletjie word vermoed om oneerlik te wees. Refilwe draai dit 40 keer en teken aan dat dit 18 keer op "rooi" land, uit die wieletjie se 4 gelyke afdelings. ʼn Klasmaat sê dit bewys die teoretiese waarskynlikheid om op rooi te land met hierdie wieletjie is presies 18/40. Is die klasmaat korrek? Verduidelik die verskil tussen eksperimentele en teoretiese waarskynlikheid.', checkMode: 'self', answer: 'Nee, die klasmaat is nie korrek nie. 18/40 = 9/20 is die eksperimentele waarskynlikheid — dit beskryf slegs wat in hierdie spesifieke stel van 40 draaie gebeur het. Die teoretiese waarskynlikheid om op rooi te land met ʼn regverdige wieletjie met 4 gelyke afdelings is altyd 1/4, gebaseer op 4 ewe waarskynlike uitkomste. ʼn Resultaat soos 18/40 = 0,45 wat baie hoër is as die verwagte 1/4 = 0,25 kan aandui dat die wieletjie oneerlik kan wees, maar ʼn enkele eksperiment kan dit nie definitief bewys nie — meer proewe sou nodig wees om verder te ondersoek.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi fiches en 5 blou fiches. Lerato kies ʼn fiche, teken die kleur aan, sit dit terug in die sak, en kies weer. Vind die waarskynlikheid dat sy albei kere ʼn blou fiche kies.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'W(blou) elke keer = 5/10 = 1/2, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(albei kere blou) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'ʼn Karnavalwieletjie het 6 gelyke afdelings: 1 "wen ʼn prys"-afdeling en 5 "geen prys"-afdelings. Sindisiwe draai dit 90 keer en land 14 keer op die "wen ʼn prys"-afdeling. Vind eers haar eksperimentele waarskynlikheid om ʼn prys te wen en die teoretiese waarskynlikheid, vind dan die waarskynlikheid dat as sy nog twee keer sou draai (met die wieletjie onveranderd), sy albei kere ʼn prys wen.', checkMode: 'self', answer: 'Eksperimentele waarskynlikheid = 14/90 = 7/45 ≈ 0,156. Teoretiese waarskynlikheid = 1/6 ≈ 0,167 (aangesien 1 uit 6 gelyke afdelings ʼn prys wen) — die eksperimentele resultaat (ongeveer 0,156) is redelik naby aan die teoretiese resultaat (ongeveer 0,167). Vir nog twee draaie (onafhanklike gebeurtenisse, aangesien die wieletjie elke keer onveranderd bly), gebruik die teoretiese waarskynlikheid: 1/6 × 1/6 = 1/36.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die waarskynlikheidskaal, breuke, uitkomsruimtes en eksperimentele waarskynlikheid onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn goeie begrip van waarskynlikheid — hersien enige vrae wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidskaal en breukformule, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  topicPractice: [
    // ── Q1 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter woord beskryf ʼn gebeurtenis wat nooit sal gebeur nie?',
      answer: 'onmoontlik',
      checkMode: 'auto',
      correctAnswer: 'onmoontlik',
      explanation: 'ʼn Gebeurtenis wat nooit sal gebeur nie het ʼn waarskynlikheid van 0 en word beskryf as onmoontlik.',
    },

    // ── Q2 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter woord beskryf ʼn gebeurtenis wat altyd sal gebeur?',
      answer: 'seker',
      checkMode: 'auto',
      correctAnswer: 'seker',
      explanation: 'ʼn Gebeurtenis wat altyd sal gebeur het ʼn waarskynlikheid van 1 en word beskryf as seker.',
    },

    // ── Q3 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho gooi ʼn dobbelsteen. Plaas die gooi van ʼn ewe getal op die waarskynlikheidskaal.',
      answer: 'Ewe waarskynlik — 3 uit 6 uitkomste is ewe, wat presies die helfte is.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Sak het 3 rooi en 7 blou balle. Vind die waarskynlikheid om rooi te kies.',
      answer: '3/10',
      checkMode: 'auto',
      correctAnswer: '3/10',
      explanation: 'Gunstige uitkomste = 3 rooi balle.\nTotale uitkomste = 3 + 7 = 10 balle.\nW(rooi) = 3/10 ✓',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Dobbelsteen word gegooi. Vind die waarskynlikheid om ʼn getal kleiner as 3 te gooi.',
      answer: '1/3',
      checkMode: 'auto',
      correctAnswer: '1/3',
      correctAnswers: ['1/3', '2/6'],
      explanation: 'Getalle kleiner as 3: 1 en 2 — dit is 2 gunstige uitkomste.\nTotale uitkomste op ʼn dobbelsteen = 6.\nW(kleiner as 3) = 2/6 = 1/3 ✓',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die waarskynlikheid om kop te gooi met ʼn muntstuk is 1/3. Is sy korrek? Verduidelik.',
      answer: 'Nee — ʼn muntstuk het net 2 uitkomste (kop of stert), so die waarskynlikheid van kop is 1/2 en nie 1/3 nie.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Vind die waarskynlikheid om op ʼn onewe getal te land.',
      answer: '3/5',
      checkMode: 'auto',
      correctAnswer: '3/5',
      explanation: 'Onewe getalle van 1 tot 5: 1, 3, 5 — dit is 3 gunstige uitkomste.\nTotale afdelings = 5.\nW(onewe) = 3/5 ✓',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle gooi ʼn muntstuk op en draai ʼn wieletjie met 3 afdelings. Hoeveel totale uitkomste is daar?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Muntstukuitkomste: kop of stert = 2.\nWieletjie-uitkomste = 3.\nTotale uitkomste = 2 × 3 = 6 ✓',
    },

    // ── Q9 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Lys alle moontlike uitkomste wanneer ʼn gewone dobbelsteen gegooi word.',
      answer: '1,2,3,4,5,6',
      checkMode: 'auto',
      correctAnswer: '1,2,3,4,5,6',
      correctAnswers: ['1,2,3,4,5,6', '1, 2, 3, 4, 5, 6', '1 2 3 4 5 6'],
      explanation: 'ʼn Gewone dobbelsteen het 6 vlakke genommer 1 tot 6.\nAlle moontlike uitkomste: 1, 2, 3, 4, 5, 6 ✓',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 5 groen, 3 geel en 2 rooi fiches. Vind die waarskynlikheid om ʼn fiche te kies wat nie rooi is nie.',
      answer: '4/5',
      checkMode: 'auto',
      correctAnswer: '4/5',
      correctAnswers: ['4/5', '8/10'],
      explanation: 'Nie rooi nie = groen of geel = 5 + 3 = 8 gunstige uitkomste.\nTotale fiches = 5 + 3 + 2 = 10.\nW(nie rooi nie) = 8/10 = 4/5 ✓',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gooi ʼn muntstuk 20 keer op en kry 8 keer kop. Wat is die eksperimentele waarskynlikheid van kop, en hoe vergelyk dit met die teoretiese waarskynlikheid?',
      answer: 'Eksperimenteel = 8/20 = 2/5. Teoreties = 1/2. Die eksperimentele resultaat is laer as verwag, maar dit kan gebeur met ʼn klein aantal proewe.',
      checkMode: 'self',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sak het 6 rooi en 4 blou albasters. As Sipho een kies, dit terugsit, en weer kies, wat is die waarskynlikheid dat hy albei kere rooi kies?',
      answer: 'Waarskynlikheid van rooi elke keer = 6/10 = 3/5. Aangesien hy dit terugsit, vermenigvuldig: 3/5 × 3/5 = 9/25.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 6 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
