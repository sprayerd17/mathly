import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ──────────────────────────────────────
// impossible / red keyword    → red    (#dc2626)
// certain / favourable / trials → green (#16a34a)
// outcomes / total / theoretical → blue (#2563eb)
// relative frequency / fraction  → orange (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PROBABILITY SCALE AND LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-scale-listing-outcomes',
      title: 'Waarskynlikheidskaal en Uitkomste Lys',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Waarskynlikheid beskryf hoe waarskynlik dit is dat ʼn gebeurtenis sal plaasvind, op ʼn skaal van ${re('0')} (${re('onmoontlik')}) tot ${gr('1')} (${gr('seker')}). Vir eksperimente met ewe waarskynlike uitkomste lys ons alle moontlike ${bl('uitkomste')} voordat ons waarskynlikheid bereken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('onmoontlik')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('seker')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('uitkomste')}</span>` +
        `</div>` +

        // ── The probability scale ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidskaal</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onmoontlik — 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan nooit plaasvind nie. Waarskynlikheid = ${re('0')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Onwaarskynlik — nader aan 0</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis kan gebeur, maar sal waarskynlik nie.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Ewe waarskynlik — ½</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis het dieselfde kans om te gebeur as om nie te gebeur nie. Waarskynlikheid = ½.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Waarskynlik — nader aan 1</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal waarskynlik gebeur.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Seker — 1</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gebeurtenis sal altyd plaasvind. Waarskynlikheid = ${gr('1')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Listing outcomes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Alle moontlike uitkomste lys</p>` +
        `<p style="margin-bottom:12px;">Voordat enige waarskynlikheid bereken word, lys altyd elke moontlike ${bl('uitkoms')} van die eksperiment. Hierdie volledige lys word die <strong>steekproefruimte</strong> genoem.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Ewe waarskynlike uitkomste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Uitkomste is <strong>ewe waarskynlik</strong> wanneer elkeen dieselfde kans het om voor te kom — byvoorbeeld, elke vlak van ʼn regverdige dobbelsteen. Slegs wanneer uitkomste ewe waarskynlik is, kan ons die breukformule in die volgende afdeling gebruik.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn gewone dobbelsteen. Lys alle moontlike uitkomste.',
          answer: `Moontlike ${bl('uitkomste')}: ${bl('1, 2, 3, 4, 5, 6')}`,
          steps: [
            `ʼn Dobbelsteen het 6 vlakke genommer 1 tot 6.`,
            `Elke vlak is ʼn moontlike ${bl('uitkoms')}: <strong>${bl('1')}, ${bl('2')}, ${bl('3')}, ${bl('4')}, ${bl('5')}, ${bl('6')}</strong>.`,
            `<strong>Antwoord:</strong> Die moontlike ${bl('uitkomste')} is ${bl('1, 2, 3, 4, 5, 6')} — daar is altesaam 6 ewe waarskynlike uitkomste.`,
          ],
        },
        {
          question: 'ʼn Sak het slegs blou balle. Wat is die waarskynlikheid om ʼn blou bal te kies?',
          answer: `Waarskynlikheid = ${gr('1')} — dit is ${gr('seker')}`,
          steps: [
            `Elke bal in die sak is blou.`,
            `Hierdie gebeurtenis sal <strong>altyd</strong> plaasvind — dit is ${gr('seker')}.`,
            `<strong>Antwoord:</strong> Waarskynlikheid = ${gr('1')}. ʼn Gebeurtenis wat altyd plaasvind het ʼn waarskynlikheid van ${gr('1')} op die waarskynlikheidskaal.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die waarskynlikheidskaal van 0 tot 1 verduidelik en wys hoe om alle moontlike uitkomste van ʼn eksperiment te lys" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Waarskynlikheidskaal van 0 tot 1 wat onmoontlik by 0, ewekansig by die helfte, en seker by 1 wys, met kleurgekodeerde merkers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-a-fraction',
      title: 'Waarskynlikheid as ʼn Breuk',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Waarskynlikheid = ${gr('gunstige uitkomste')} ÷ ${bl('totale uitkomste')}. Ons gebruik hierdie definisie om die ${or('waarskynlikheid')} van enkelvoudige gebeurtenisse met ewe waarskynlike uitkomste te bereken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gunstige uitkomste')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('totale uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('waarskynlikheidsbreuk')}</span>` +
        `</div>` +

        // ── Formula ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidsformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${or('W(gebeurtenis)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">${gr('aantal gunstige uitkomste')}</span><span style="display:block;padding-top:2px;">${bl('totale aantal uitkomste')}</span></span></p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gunstige uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die uitkomste wat ooreenstem met die gebeurtenis waarvoor jy die waarskynlikheid bereken.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Totale uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Alle moontlike uitkomste in die steekproefruimte — gevind deur hulle eers te lys.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Waarskynlikheidsbreuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die breuk wat die waarskynlikheid voorstel — altyd tussen 0 en 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig altyd jou breuk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Nadat jy die ${or('waarskynlikheidsbreuk')} bereken het, vereenvoudig dit tot sy laagste terme waar moontlik — byvoorbeeld, 4/6 = 2/3. Albei vorme is korrek, maar vereenvoudigde breuke word verkies.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak het 5 rooi en 3 blou albasters. Vind die waarskynlikheid om ʼn blou albaster te kies.',
          answer: `${or('W(blou)')} = ${or('3/8')}`,
          steps: [
            `Tel die ${gr('gunstige uitkomste')}: daar is ${gr('3')} blou albasters.`,
            `Tel die ${bl('totale uitkomste')}: 5 rooi + 3 blou = ${bl('8')} albasters altesaam.`,
            `Pas die formule toe: ${or('W(blou)')} = ${gr('3')} ÷ ${bl('8')} = ${or('3/8')}.`,
            `<strong>Antwoord:</strong> ${or('W(blou)')} = ${or('3/8')}. Die breuk is reeds in sy eenvoudigste vorm.`,
          ],
        },
        {
          question: 'Lerato gooi ʼn dobbelsteen. Vind die waarskynlikheid om ʼn getal groter as 2 te gooi.',
          answer: `${or('W(groter as 2)')} = ${or('4/6')} = ${or('2/3')}`,
          steps: [
            `Lys alle ${bl('totale uitkomste')}: 1, 2, 3, 4, 5, 6 → ${bl('6')} uitkomste.`,
            `Identifiseer die ${gr('gunstige uitkomste')} (groter as 2): 3, 4, 5, 6 → ${gr('4')} uitkomste.`,
            `Pas die formule toe: ${or('W(> 2)')} = ${gr('4')} ÷ ${bl('6')} = ${or('4/6')}.`,
            `Vereenvoudig: ${or('4/6')} = ${or('2/3')}.`,
            `<strong>Antwoord:</strong> ${or('W(> 2)')} = ${or('2/3')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om waarskynlikheid as ʼn breuk te bereken deur gunstige uitkomste oor totale uitkomste te gebruik, met uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn sak met 5 rooi en 3 blou albasters wat gunstige uitkomste in groen uitgelig wys en totale uitkomste in blou" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — RELATIVE FREQUENCY AND COMPARING WITH PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'relative-frequency',
      title: 'Relatiewe Frekwensie en Vergelyking met Waarskynlikheid',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">${or('Relatiewe frekwensie')} is die resultaat van werklik ʼn eksperiment uitvoer, bereken as die aantal kere wat ʼn gebeurtenis voorkom gedeel deur die ${gr('totale aantal proewe')}. Ons vergelyk ${or('relatiewe frekwensie')} met ${bl('teoretiese waarskynlikheid')}, en besef dat met meer ${gr('proewe')} die ${or('relatiewe frekwensie')} geneig is om nader aan die ${bl('teoretiese waarskynlikheid')} te kom.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('relatiewe frekwensie')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teoretiese waarskynlikheid')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal proewe')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:8px;">${or('Relatiewe Frekwensie')} (uit eksperiment)</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${or('RF')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">aantal kere wat gebeurtenis voorgekom het</span><span style="display:block;padding-top:2px;">${gr('totale aantal proewe')}</span></span></p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:8px;">${bl('Teoretiese Waarskynlikheid')} (uit teorie)</p>` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">${bl('W(gebeurtenis)')} = <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">gunstige uitkomste</span><span style="display:block;padding-top:2px;">totale uitkomste</span></span></p>` +
        `</div>` +

        `</div>` +

        // ── Key insight ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wat die vergelyking ons vertel</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Die ${or('relatiewe frekwensie')} en ${bl('teoretiese waarskynlikheid')} is selde identies — klein verskille word verwag.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Met meer ${gr('proewe')} kom die ${or('relatiewe frekwensie')} nader aan die ${bl('teoretiese waarskynlikheid')} — dit is die <strong>Wet van Groot Getalle</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">As die ${or('relatiewe frekwensie')} baie ver van die ${bl('teoretiese waarskynlikheid')} af is, is die eksperiment moontlik nie regverdig nie, of die ${gr('aantal proewe')} mag te klein wees.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Teorie vs eksperiment</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Teoretiese waarskynlikheid')} is wat ons <em>verwag</em> gebaseer op wiskunde. ${or('Relatiewe frekwensie')} is wat <em>werklik gebeur het</em> in ʼn eksperiment. Geeneen is verkeerd nie — hulle is twee verskillende maniere om waarskynlikheid te meet.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo gooi ʼn muntstuk 50 keer op en kry 28 keer kop. Vind die relatiewe frekwensie van kop en vergelyk dit met die teoretiese waarskynlikheid.',
          answer: `${or('Relatiewe frekwensie')} = ${or('0.56')}; ${bl('Teoretiese waarskynlikheid')} = ${bl('0.5')} — naby maar nie gelyk nie`,
          steps: [
            `Bereken die ${or('relatiewe frekwensie')}: aantal koppe ÷ ${gr('totale proewe')} = 28 ÷ ${gr('50')} = ${or('0.56')}.`,
            `Bereken die ${bl('teoretiese waarskynlikheid')}: ʼn regverdige muntstuk het 1 gunstige uitkoms (kop) uit 2 totale uitkomste → ${bl('W(kop)')} = 1 ÷ 2 = ${bl('0.5')}.`,
            `Vergelyk: ${or('0.56')} teenoor ${bl('0.5')}. Die ${or('relatiewe frekwensie')} is naby aan, maar nie presies gelyk aan, die ${bl('teoretiese waarskynlikheid')} nie.`,
            `<strong>Antwoord:</strong> Dit word verwag met ʼn beperkte ${gr('aantal proewe')} (${gr('50')}). Met baie meer opgooie sou die ${or('relatiewe frekwensie')} nader aan ${bl('0.5')} beweeg.`,
          ],
        },
        {
          question: 'Amahle gooi ʼn dobbelsteen 60 keer en kry presies 8 keer ʼn 6. Vind die relatiewe frekwensie en vergelyk dit met die teoretiese waarskynlikheid.',
          answer: `${or('Relatiewe frekwensie')} = ${or('2/15 ≈ 0.133')}; ${bl('Teoretiese waarskynlikheid')} = ${bl('1/6 ≈ 0.167')} — waardes is naby aan mekaar`,
          steps: [
            `Bereken die ${or('relatiewe frekwensie')}: 8 ÷ ${gr('60')} = ${or('2/15')} ≈ ${or('0.133')}.`,
            `Bereken die ${bl('teoretiese waarskynlikheid')}: 1 gunstige uitkoms (ʼn 6 gooi) uit 6 totale uitkomste → ${bl('W(6)')} = ${bl('1/6')} ≈ ${bl('0.167')}.`,
            `Vergelyk: ${or('0.133')} teenoor ${bl('0.167')}. Die waardes is naby aan mekaar, wat wys dat die eksperiment redelik ooreenstem met die verwagte waarskynlikheid.`,
            `<strong>Antwoord:</strong> Die klein verskil is normaal vir ${gr('60')} proewe. Die ${or('relatiewe frekwensie')} van ${or('2/15')} is redelik naby aan die ${bl('teoretiese waarskynlikheid')} van ${bl('1/6')}, wat bevestig dat die dobbelsteen regverdig lyk.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat relatiewe frekwensie uit ʼn eksperiment vergelyk met teoretiese waarskynlikheid en wys hoe meer proewe die twee waardes nader aan mekaar bring" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tabel wat relatiewe frekwensie en teoretiese waarskynlikheid vir ʼn muntstuk-opgooi-eksperiment oor 10, 50 en 200 proewe vergelyk en konvergensie wys" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — listing outcomes ────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Lys alle moontlike uitkomste wanneer ʼn muntstuk opgegooi word.',
      answer: 'kop, stert',
      checkMode: 'auto',
      correctAnswer: 'heads, tails',
      correctAnswers: ['heads, tails', 'heads and tails', 'tails, heads', 'tails and heads'],
      explanation: 'ʼn Muntstuk het twee kante: kop en stert. Daar is altesaam 2 moontlike uitkomste.',
    },

    // ── Q2 Easy — certain event ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Sak het slegs groen balle. Wat is die waarskynlikheid om ʼn groen bal te kies?',
      answer: '1',
      checkMode: 'auto',
      correctAnswer: '1',
      explanation: 'Al die balle is groen, dus is die gebeurtenis seker — W(groen) = 1.',
    },

    // ── Q3 Medium — probability as a fraction ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 4 rooi en 6 geel fiches. Vind die waarskynlikheid om ʼn rooi fiche te kies.',
      answer: '2/5',
      checkMode: 'auto',
      correctAnswer: '2/5',
      correctAnswers: ['2/5', '4/10'],
      explanation: 'Gunstige uitkomste: 4 rooi. Totale uitkomste: 4 + 6 = 10. W(rooi) = 4/10 = 2/5.',
    },

    // ── Q4 Medium — probability of odd number ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Dobbelsteen word gegooi. Vind die waarskynlikheid om ʼn onewe getal te gooi.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '3/6'],
      explanation: 'Onewe getalle op ʼn dobbelsteen: 1, 3, 5 — 3 gunstige uitkomste uit 6 totaal. W(onewe) = 3/6 = 1/2.',
    },

    // ── Q5 Hard — probability scale reasoning ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die waarskynlikheid van ʼn gebeurtenis kan groter as 1 wees. Is hy korrek? Verduidelik.',
      answer: 'Nee — waarskynlikheid is altyd tussen 0 en 1, aangesien jy nie meer gunstige uitkomste as totale uitkomste kan hê nie.',
      checkMode: 'self',
    },

    // ── Q6 Easy — spinner probability ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1–5. Vind die waarskynlikheid om op 3 te land.',
      answer: '1/5',
      checkMode: 'auto',
      correctAnswer: '1/5',
      explanation: '1 gunstige uitkoms (op 3 land) uit 5 ewe waarskynlike uitkomste. W(3) = 1/5.',
    },

    // ── Q7 Medium — complement probability ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 2 rooi, 3 blou en 5 groen albasters. Vind die waarskynlikheid om ʼn albaster te kies wat nie groen is nie.',
      answer: '1/2',
      checkMode: 'auto',
      correctAnswer: '1/2',
      correctAnswers: ['1/2', '5/10'],
      explanation: 'Nie groen nie: 2 rooi + 3 blou = 5. Totaal: 2 + 3 + 5 = 10. W(nie groen nie) = 5/10 = 1/2.',
    },

    // ── Q8 Hard — relative frequency vs theoretical ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 40 keer op en kry 24 keer kop. Vind die relatiewe frekwensie van kop en vergelyk dit met die teoretiese waarskynlikheid.',
      answer: 'Relatiewe frekwensie = 24/40 = 0.6. Teoretiese waarskynlikheid = 0.5. Die resultaat is hoër as verwag, maar aanvaarbaar met ʼn beperkte aantal proewe.',
      checkMode: 'self',
    },

    // ── Q9 Medium — relative frequency calculation ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo gooi ʼn dobbelsteen 30 keer en kry presies 4 keer ʼn 5. Vind die relatiewe frekwensie om ʼn 5 te gooi.',
      answer: '2/15',
      checkMode: 'auto',
      correctAnswer: '2/15',
      correctAnswers: ['2/15', '4/30'],
      explanation: 'Relatiewe frekwensie = aantal kere wat gebeurtenis voorgekom het ÷ totale proewe = 4 ÷ 30 = 2/15.',
    },

    // ── Q10 Hard — law of large numbers reasoning ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê met meer proewe is relatiewe frekwensie altyd presies gelyk aan teoretiese waarskynlikheid. Is sy korrek? Verduidelik.',
      answer: 'Nee — relatiewe frekwensie neig om nader aan teoretiese waarskynlikheid te kom met meer proewe, maar dit pas selde presies daarby weens natuurlike variasie.',
      checkMode: 'self',
    },

    // ── Q11 Medium — probability with replacement ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 6 wit en 4 swart balle. As Sipho een kies, dit terugsit, en weer kies, vind die waarskynlikheid dat hy albei kere wit kies.',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: 'W(wit) = 6/10 = 3/5. Met terugsetting: W(wit en wit) = 3/5 × 3/5 = 9/25.',
    },

    // ── Q12 Hard — compound condition probability ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Boks het 8 kaarte genommer 1 tot 8. Vind die waarskynlikheid om ʼn getal te kies wat beide ewe en groter as 4 is.',
      answer: 'Ewe getalle groter as 4 is 6 en 8 — 2 gunstige uitkomste. Totaal = 8. Waarskynlikheid = 2/8 = 1/4.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het al Graad 7 voltooi en waarskynlikheid onder die knie.' },
      { minScore: 9, message: 'Goeie werk!' },
      { minScore: 6, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die studiegids.' },
    ],
  },
}
