import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (ratio roles) ─────────────────────────────────────────
// first quantity   → blue   (#2563eb)
// second quantity  → red    (#dc2626)
// HCF              → orange (#ea580c)
// simplified ratio → green  (#16a34a)
// total            → purple (#7c3aed)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Verhouding en Koers',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A RATIO?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-ratio',
      title: 'Wat is ʼn Verhouding?',
      icon: ':',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Verhouding <strong>vergelyk twee of meer hoeveelhede van dieselfde soort</strong>. Ons skryf ʼn verhouding met ʼn dubbelpunt — byvoorbeeld ${bl('3')}:${re('5')} beteken vir elke ${bl('3')} van een ding is daar ${re('5')} van ʼn ander. Die <strong>volgorde van ʼn verhouding is belangrik</strong> — ${bl('3')}:${re('5')} is anders as ${re('5')}:${bl('3')}. Ons kan ʼn verhouding <strong>vereenvoudig</strong> deur al die dele deur hul ${or('GGF')} te deel, net soos wanneer ʼn breuk vereenvoudig word. ʼn Verhouding het geen eenhede nie — ons skryf net die getalle.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede hoeveelheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vereenvoudigde verhouding')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite oor verhoudings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Geskryf met ʼn dubbelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verhouding word geskryf as ${bl('a')}:${re('b')} — die dubbelpunt skei die twee hoeveelhede wat vergelyk word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Volgorde is belangrik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('3')}:${re('5')} en ${re('5')}:${bl('3')} is <strong>verskillende verhoudings</strong>. Pas die volgorde altyd by die vraag aan.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Vereenvoudig met die GGF</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel al die dele van die verhouding deur hul ${or('Grootste Gemene Faktor')} om dit in eenvoudigste vorm te skryf.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Geen eenhede nie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Verhouding vergelyk hoeveelhede van <strong>dieselfde soort</strong> — die eenhede kanselleer uit en ons skryf net die getalle.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn verhouding te vereenvoudig</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vind die ${or('GGF')} van al die getalle in die verhouding, en deel dan elke deel daardeur. Die ${gr('vereenvoudigde verhouding')} wys dieselfde verwantskap met die kleinste moontlike heelgetalle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak bevat 12 rooi en 8 blou albasters. Skryf die verhouding van rooi tot blou in eenvoudigste vorm.',
          answer: `${gr('3:2')}`,
          steps: [
            `Skryf die verhouding: ${bl('12')}:${re('8')}.`,
            `Vind die ${or('GGF')} van ${bl('12')} en ${re('8')} — ${or('GGF = 4')}.`,
            `Deel altwee deur ${or('4')}: ${bl('12')} ÷ ${or('4')} = ${bl('3')} en ${re('8')} ÷ ${or('4')} = ${re('2')}.`,
            `Vereenvoudigde verhouding = ${gr('3:2')}`,
          ],
        },
        {
          question: 'Vereenvoudig die verhouding 45:30:15.',
          answer: `${gr('3:2:1')}`,
          steps: [
            `Vind die ${or('GGF')} van ${bl('45')}, ${re('30')} en 15 — ${or('GGF = 15')}.`,
            `Deel al drie deur ${or('15')}: ${bl('45')} ÷ ${or('15')} = ${gr('3')}, ${re('30')} ÷ ${or('15')} = ${gr('2')}, 15 ÷ ${or('15')} = ${gr('1')}.`,
            `Vereenvoudigde verhouding = ${gr('3:2:1')}`,
          ],
        },
        {
          question: 'Sipho meng sement en sand in die verhouding 1:3. As hy 5 sakke sement gebruik, hoeveel sakke sand het hy nodig?',
          answer: `Sipho het ${re('15')} sakke sand nodig`,
          steps: [
            `Die verhouding is ${bl('1')}:${re('3')} — vir elke ${bl('1')} sak sement is daar ${re('3')} sakke sand.`,
            `Sipho gebruik ${bl('5')} sakke sement, dus vermenigvuldig altwee dele met 5: ${bl('1')} × 5 = ${bl('5')} en ${re('3')} × 5 = ${re('15')}.`,
            `Hy het ${re('15')} sakke sand nodig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing a ratio of red to blue marbles with the HCF highlighted and the step by step simplification from 12:8 to 3:2" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a ratio is, how to write it using a colon, and how to simplify a ratio by dividing by the HCF" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — EQUIVALENT RATIOS AND DIVIDING IN A RATIO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-ratios-dividing',
      title: 'Ekwivalente Verhoudings en Verdeling Volgens ʼn Verhouding',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Ekwivalente verhoudings</strong> is verhoudings wat dieselfde waarde het — net soos ekwivalente breuke. Ons maak ekwivalente verhoudings deur al die dele met dieselfde getal te vermenigvuldig of te deel. Om ʼn bedrag volgens ʼn gegewe <strong>verhouding te verdeel</strong> moet ons (1) die ${or('totale aantal dele')} vind deur die verhoudingsgetalle bymekaar te tel, (2) die ${bl('waarde van een deel')} vind deur die totale bedrag deur die aantal dele te deel, en (3) vermenigvuldig om ${gr('elke aandeel')} te vind. ${re('Kontroleer')} jou antwoord altyd deur al die aandele bymekaar te tel — hulle moet gelyk wees aan die oorspronklike bedrag.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totale dele')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('waarde van een deel')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('elke aandeel')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ekwivalente verhoudings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig of deel al die dele met dieselfde getal om ʼn ekwivalente verhouding te maak — net soos ekwivalente breuke.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stap 1 — Totale dele</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel al die getalle in die verhouding bymekaar om die ${or('totale aantal dele')} te vind.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Stap 2 — Een deel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel die totale bedrag deur die ${or('totale dele')} om die ${bl('waarde van een deel')} te vind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Stap 3 — Elke aandeel &amp; kontroleer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die ${bl('waarde van een deel')} met elke verhoudingsgetal om ${gr('elke aandeel')} te kry, en ${re('kontroleer')} dan deur al die aandele bymekaar te tel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Vinnige metode om volgens ʼn verhouding te verdeel</p>` +
        `<p style="margin:0;color:#14532d;">${or('Totale dele')} = som van verhoudingsgetalle → ${bl('een deel')} = totale bedrag ÷ ${or('totale dele')} → ${gr('elke aandeel')} = verhoudingsgetal × ${bl('een deel')} → ${re('kontroleer')}: aandele moet weer optel tot die oorspronklike totaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 2:3 en 8:12 ekwivalente verhoudings?',
          answer: `Ja — ${gr('8:12 = 2:3')}`,
          steps: [
            `Vermenigvuldig altwee dele van 2:3 met 4: 2 × 4 = ${bl('8')} en 3 × 4 = ${or('12')}.`,
            `Dus ${bl('8')}:${or('12')} = 2:3.`,
            `${re('Ja')}, hulle is ekwivalente verhoudings.`,
          ],
        },
        {
          question: 'Verdeel R240 in die verhouding 3:5.',
          answer: `Eerste aandeel = ${gr('R90')}, tweede aandeel = ${gr('R150')}`,
          steps: [
            `${or('Totale dele')} = 3 + 5 = ${or('8 dele')}.`,
            `${bl('Waarde van een deel')} = R240 ÷ ${or('8')} = ${bl('R30')}.`,
            `${gr('Eerste aandeel')} = 3 × ${bl('R30')} = ${gr('R90')}.`,
            `${gr('Tweede aandeel')} = 5 × ${bl('R30')} = ${gr('R150')}.`,
            `${re('Kontroleer')}: ${re('R90 + R150 = R240')}. Korrek ✓`,
          ],
        },
        {
          question: 'Lerato, Amahle en Sipho verdeel prysgeld van R1 800 in die verhouding 2:3:4. Hoeveel kry elke persoon?',
          answer: `Lerato = ${gr('R400')}, Amahle = ${gr('R600')}, Sipho = ${gr('R800')}`,
          steps: [
            `${or('Totale dele')} = 2 + 3 + 4 = ${or('9 dele')}.`,
            `${bl('Een deel')} = R1 800 ÷ ${or('9')} = ${bl('R200')}.`,
            `${gr('Lerato')}: 2 × ${bl('R200')} = ${gr('R400')}.`,
            `${gr('Amahle')}: 3 × ${bl('R200')} = ${gr('R600')}.`,
            `${gr('Sipho')}: 4 × ${bl('R200')} = ${gr('R800')}.`,
            `${re('Kontroleer')}: ${re('R400 + R600 + R800 = R1 800')}. Korrek ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing equivalent ratios as scaled rows (2:3 and 8:12) alongside a bar model for dividing R240 in the ratio 3:5 with each part labelled R30" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to check if two ratios are equivalent and how to divide an amount in a ratio using the total parts method with a worked R1 800 three-way split example" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — WHAT IS A RATE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-rate',
      title: 'Wat is ʼn Koers?',
      icon: '/',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Koers <strong>vergelyk twee hoeveelhede van verskillende soorte</strong>. Anders as ʼn verhouding het ʼn koers altyd eenhede. Algemene voorbeelde van koerse is spoed in ${bl('km')} ${or('per')} ${re('uur')}, prys in ${bl('rand')} ${or('per')} ${re('kilogram')} en hartklop in ${bl('slae')} ${or('per')} ${re('minuut')}. Die woord ${or('per')} beteken <em>vir elke een</em> — so ${bl('60 km')} ${or('per')} ${re('uur')} beteken ${bl('60 km')} vir elke ${re('1 uur')}. ʼn ${gr('Eenheidskoers')} is ʼn koers waar die ${re('tweede hoeveelheid')} 1 is. Om ʼn ${gr('eenheidskoers')} te vind, deel ons die ${bl('eerste hoeveelheid')} deur die ${re('tweede')}.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste hoeveelheid')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede hoeveelheid')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('per')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('eenheidskoers')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Eerste hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('eerste hoeveelheid')} is die bedrag wat gemeet word — soos afstand, rand, of slae.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Tweede hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('tweede hoeveelheid')} is waarteen die eerste hoeveelheid gemeet word — soos ure, kilogram, of minute.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Per</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('Per')} beteken <em>vir elke een</em>. Dit koppel die twee hoeveelhede in ʼn koers — byvoorbeeld ${bl('60 km')} ${or('per')} ${re('uur')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Eenheidskoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${gr('Eenheidskoers')} het ${re('1')} as die ${re('tweede hoeveelheid')}. Vind dit deur die ${bl('eerste hoeveelheid')} deur die ${re('tweede hoeveelheid')} te deel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Hoe om ʼn eenheidskoers te vind</p>` +
        `<p style="margin:0;color:#14532d;">Deel die ${bl('eerste hoeveelheid')} deur die ${re('tweede hoeveelheid')}: ${gr('eenheidskoers')} = ${bl('eerste hoeveelheid')} ÷ ${re('tweede hoeveelheid')}. Die antwoord het altyd eenhede — skryf hulle in jou finale antwoord.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Motor ry 240 km in 3 uur. Wat is sy spoed in km per uur?',
          answer: `Die motor ry teen ${gr('80 km per uur')}`,
          steps: [
            `Spoed is ʼn koers — ${bl('km')} ${or('per')} ${re('uur')}.`,
            `Deel afstand deur tyd: ${bl('240')} ÷ ${re('3')} = ${gr('80')}.`,
            `Die motor ry teen ${gr('80 km per uur')}.`,
          ],
        },
        {
          question: 'Sipho verdien R1 350 vir 9 uur se werk. Wat is sy uurlikse koers?',
          answer: `Sipho verdien ${gr('R150 per uur')}`,
          steps: [
            `Koers = ${bl('totaal verdien')} ÷ ${re('ure gewerk')}.`,
            `${bl('1 350')} ÷ ${re('9')} = ${gr('R150')}.`,
            `Sipho verdien ${gr('R150')} ${or('per')} ${re('uur')}.`,
          ],
        },
        {
          question: 'Appels kos R24.50 vir 5 kg. Wat is die prys per kilogram?',
          answer: `Appels kos ${gr('R4.90 per kilogram')}`,
          steps: [
            `Prys ${or('per')} ${re('kg')} = ${bl('totale koste')} ÷ ${re('kg')}.`,
            `${bl('24.50')} ÷ ${re('5')} = ${gr('R4.90')}.`,
            `Appels kos ${gr('R4.90')} ${or('per')} ${re('kilogram')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing a rate as two quantities of different kinds — for example a car travelling 240 km in 3 hours with arrows pointing to the unit rate of 80 km per hour" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a rate is, how it differs from a ratio, what per means, and how to calculate a unit rate by dividing the first quantity by the second" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — SOLVING RATE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-rate-problems',
      title: 'Los Koersprobleme Op',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">Sodra ons die ${bl('eenheidskoers')} ken, kan ons baie verskillende probleme oplos. Om die ${pu('totaal')} te vind, ${gr('vermenigvuldig')} ons die ${bl('eenheidskoers')} met die ${or('hoeveelheid')}. Om die ${or('hoeveelheid')} te vind, ${re('deel')} ons die ${pu('totaal')} deur die ${bl('eenheidskoers')}. Lees die probleem altyd noukeurig om te identifiseer wat gegee is en wat gevind moet word. Skryf jou antwoord met die korrekte eenhede.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eenheidskoers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoeveelheid')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldig')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('totaal')}</span>` +
        `</div>` +

        // ── Two key operations ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee sleutelbewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Vermenigvuldig')} — Vind die totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy die ${bl('eenheidskoers')} en die ${or('hoeveelheid')} ken, ${gr('vermenigvuldig')} om die ${pu('totaal')} te vind.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${pu('Totaal')} = ${bl('eenheidskoers')} × ${or('hoeveelheid')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Deel')} — Vind die hoeveelheid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Wanneer jy die ${pu('totaal')} en die ${bl('eenheidskoers')} ken, ${re('deel')} om die ${or('hoeveelheid')} te vind.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">${or('Hoeveelheid')} = ${pu('totaal')} ÷ ${bl('eenheidskoers')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd jou eenhede</p>` +
        `<p style="margin:0;color:#1e3a8a;">Lees die probleem noukeurig om te identifiseer wat gegee is en wat gevind moet word. Skryf jou antwoord met die korrekte eenhede — die ${bl('eenheidskoers')} vertel jou reeds in watter eenhede die antwoord moet wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kraan drup teen ʼn koers van 3 liter per uur. Hoeveel water drup in 8 uur?',
          answer: `Die kraan drup ${pu('24 liter')} in 8 uur`,
          steps: [
            `Ons ken die ${bl('eenheidskoers')} (${bl('3 liter per uur')}) en die ${or('hoeveelheid')} (${or('8 uur')}). Ons moet die ${pu('totaal')} vind.`,
            `${gr('Vermenigvuldig')}: ${bl('3')} × ${or('8')} = ${pu('24')} liter.`,
            `Die kraan drup ${pu('24 liter')} in 8 uur.`,
          ],
        },
        {
          question: 'Lerato ry teen 90 km per uur. Hoe lank sal dit haar neem om 360 km te reis?',
          answer: `Dit sal Lerato ${or('4 uur')} neem`,
          steps: [
            `Ons ken die ${bl('eenheidskoers')} (${bl('90 km per uur')}) en die ${pu('totale')} afstand (${pu('360 km')}). Ons moet die ${or('hoeveelheid')} (tyd) vind.`,
            `${re('Deel')}: ${pu('360')} ÷ ${bl('90')} = ${or('4')} uur.`,
            `Dit sal Lerato ${or('4 uur')} neem.`,
          ],
        },
        {
          question: 'Thabo koop 7 kg rys teen R8.50 per kg. Hy koop ook 3 kg suiker teen R12.40 per kg. Wat is die totale koste?',
          answer: `Die totale koste is ${pu('R96.70')}`,
          steps: [
            `Koste van rys: ${gr('vermenigvuldig')} ${or('7')} × ${bl('R8.50')} = R59.50.`,
            `Koste van suiker: ${gr('vermenigvuldig')} ${or('3')} × ${bl('R12.40')} = R37.20.`,
            `${pu('Totaal')}: R59.50 + R37.20 = ${pu('R96.70')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing two rate problems side by side — one multiplying unit rate by quantity to get the total and one dividing the total by the unit rate to get the quantity" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve rate problems by identifying what is given and what is needed then choosing to multiply or divide using the unit rate" />',
    },
  ],
  topicPractice: [

    // ── Q1 Easy — simplify 6:9 ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vereenvoudig die verhouding 6:9.',
      correctAnswer: '2:3',
      explanation: 'GGF van 6 en 9 is 3.\n6 ÷ 3 = 2 en 9 ÷ 3 = 3.\nVereenvoudigde verhouding = 2:3 ✓',
      answer: '2:3',
    },

    // ── Q2 Easy — simplify 20:12 ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vereenvoudig die verhouding 20:12.',
      correctAnswer: '5:3',
      explanation: 'GGF van 20 en 12 is 4.\n20 ÷ 4 = 5 en 12 ÷ 4 = 3.\nVereenvoudigde verhouding = 5:3 ✓',
      answer: '5:3',
    },

    // ── Q3 Medium — girls to boys ratio ──────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Klas het 18 meisies en 12 seuns. Skryf die verhouding van meisies tot seuns in eenvoudigste vorm.',
      correctAnswer: '3:2',
      explanation: 'GGF van 18 en 12 is 6.\n18 ÷ 6 = 3 en 12 ÷ 6 = 2.\nVerhouding van meisies tot seuns = 3:2 ✓',
      answer: '3:2',
    },

    // ── Q4 Medium — equivalent ratios ────────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Is 3:4 en 15:20 ekwivalente verhoudings?',
      correctAnswer: 'ja',
      correctAnswers: ['ja', 'Ja', 'JA'],
      explanation: 'Vermenigvuldig altwee dele van 3:4 met 5: 3 × 5 = 15 en 4 × 5 = 20.\nDus 15:20 = 3:4.\nJa, hulle is ekwivalente verhoudings ✓',
      answer: 'ja',
    },

    // ── Q5 Hard — use a ratio to find a missing quantity ─────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Sipho meng sap en water in die verhouding 2:5. Hy gebruik 8 liter sap. Hoeveel liter water het hy nodig?',
      correctAnswer: '20',
      correctAnswers: ['20', '20 liter', '20L'],
      explanation: 'Verhouding sap:water = 2:5.\nSkaalfaktor = 8 ÷ 2 = 4.\nWater = 5 × 4 = 20 liter ✓',
      answer: '20',
    },

    // ── Q6 Medium — divide R360 in ratio 3:5 ─────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Verdeel R360 in die verhouding 3:5.',
      answer: '',
      parts: [
        {
          label: 'a) Eerste aandeel',
          correctAnswer: 'R135',
          correctAnswers: ['R135', '135'],
          explanation: 'Totale dele = 3 + 5 = 8.\nEen deel = R360 ÷ 8 = R45.\nEerste aandeel = 3 × R45 = R135 ✓',
        },
        {
          label: 'b) Tweede aandeel',
          correctAnswer: 'R225',
          correctAnswers: ['R225', '225'],
          explanation: 'Totale dele = 3 + 5 = 8.\nEen deel = R360 ÷ 8 = R45.\nTweede aandeel = 5 × R45 = R225 ✓\nKontroleer: R135 + R225 = R360 ✓',
        },
      ],
    },

    // ── Q7 Hard — three-way split R2 100 in ratio 2:3:2 ──────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Lerato, Amahle en Thabo verdeel R2 100 in die verhouding 2:3:2. Hoeveel kry elke persoon?',
      answer: '',
      parts: [
        {
          label: "a) Lerato se aandeel",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nLerato = 2 × R300 = R600 ✓',
        },
        {
          label: "b) Amahle se aandeel",
          correctAnswer: 'R900',
          correctAnswers: ['R900', '900'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nAmahle = 3 × R300 = R900 ✓',
        },
        {
          label: "c) Thabo se aandeel",
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Totale dele = 2 + 3 + 2 = 7.\nEen deel = R2 100 ÷ 7 = R300.\nThabo = 2 × R300 = R600 ✓\nKontroleer: R600 + R900 + R600 = R2 100 ✓',
        },
      ],
    },

    // ── Q8 Easy — speed calculation ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Motor ry 150 km in 2 uur. Wat is sy spoed in km per uur?',
      correctAnswer: '75',
      correctAnswers: ['75', '75km/h', '75 km/h', '75km per uur', '75 km per uur'],
      explanation: 'Spoed = afstand ÷ tyd.\n150 ÷ 2 = 75 km/h ✓',
      answer: '75 km/h',
    },

    // ── Q9 Medium — price per kilogram ───────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Piesangs kos R18 vir 3 kg. Wat is die prys per kilogram?',
      correctAnswer: 'R6',
      correctAnswers: ['R6', '6', 'R6/kg', 'R6 per kg'],
      explanation: 'Prys per kg = totale koste ÷ kg.\nR18 ÷ 3 = R6 per kilogram ✓',
      answer: 'R6',
    },

    // ── Q10 Hard — compare hourly rates (self-check) ──────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Sipho verdien R2 250 vir 15 uur se werk. Lerato verdien R1 960 vir 14 uur se werk. Wie het die beter uurlikse koers?',
      answer: 'Sipho: 2 250 ÷ 15 = R150 per uur.\nLerato: 1 960 ÷ 14 = R140 per uur.\nSipho het die beter uurlikse koers.',
    },

    // ── Q11 Medium — time to fill a tank ─────────────────────────────────────
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Kraan vul ʼn tenk teen 12 liter per minuut. Hoe lank sal dit neem om ʼn 180 liter tenk te vul?',
      correctAnswer: '15',
      correctAnswers: ['15', '15 minute', '15min', '15 min'],
      explanation: 'Tyd = totale volume ÷ koers.\n180 ÷ 12 = 15 minute ✓',
      answer: '15 minute',
    },

    // ── Q12 Hard — total journey time ────────────────────────────────────────
    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question: 'Amahle ry 270 km teen 90 km per uur en dan 120 km teen 60 km per uur. Wat is die totale tyd vir haar reis?',
      correctAnswer: '5',
      correctAnswers: ['5', '5 uur', '5h', '5 ure'],
      explanation: 'Tyd vir eerste deel: 270 ÷ 90 = 3 uur.\nTyd vir tweede deel: 120 ÷ 60 = 2 uur.\nTotale tyd = 3 + 2 = 5 uur ✓',
      answer: '5 uur',
    },

  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het verhouding en koers baasgeraak.' },
      { minPercent: 75, message: 'Uitstekende werk! Jy het ʼn sterk begrip van verhouding en koers.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: "Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn slag." },
    ],
  },
}
