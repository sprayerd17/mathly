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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Waarskynlikheidskaal/Taal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Weer-app wys ʼn 0% kans op reën vandag. Watter woord van die waarskynlikheidskaal beskryf dit die beste?', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'ʼn Waarskynlikheid van 0% (0) beteken die gebeurtenis kan glad nie plaasvind nie — dit is onmoontlik ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Naledi ʼn rooi kaart uit ʼn stel kies, is 3/4. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: '3/4 = 3 ÷ 4 = 0,75. As persentasie: 0,75 × 100 = 75% ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het ʼn waarskynlikheid van 0,2 om op groen te land. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '2/10'], explanation: '0,2 = 2/10, wat vereenvoudig tot 1/5 ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 6 rooi fiches, 9 blou fiches en 5 groen fiches. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '6/20'], explanation: 'Gunstige uitkomste = 6 rooi fiches.\nTotale uitkomste = 6 + 9 + 5 = 20 fiches.\nW(rooi) = 6/20 = 3/10 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings, soos gewys: 3 oranje afdelings en 5 turkoois afdelings. Vind die waarskynlikheid om op oranje te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,375', correctAnswers: ['0,375', '0.375', '3/8'], explanation: 'Gunstige uitkomste = 3 oranje afdelings.\nTotale uitkomste = 8 afdelings.\nW(oranje) = 3/8 = 0,375 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#ea580c" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#0d9488" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sak het altesaam 10 fiches, soos gewys: 3 is swart en die res is wit. Vind die waarskynlikheid om ʼn swart fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '30%', correctAnswers: ['30%', '30'], explanation: 'Gunstige uitkomste = 3 swart fiches.\nTotale uitkomste = 10 fiches.\nW(swart) = 3/10 = 0,3 = 30% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="58" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="84" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings verdeel tussen drie spanne: Span A het 4 afdelings, Span B het 3 afdelings, en Span C het 1 afdeling. Vind die waarskynlikheid om op Span B of Span C te land.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '4/8'], explanation: 'Gunstige uitkomste = Span B + Span C = 3 + 1 = 4 afdelings.\nTotale uitkomste = 8 afdelings.\nW(B of C) = 4/8 = 1/2 ✓' },

        // Blok 3 — Steekproefruimtes vir Saamgestelde Gebeurtenisse Lys (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 4 gelyke afdelings in rooi, groen, blou en geel word gedraai, soos gewys. Gebruik die leë rooster, met muntstuk-uitkomste langs die kant en wieletjie-uitkomste langs die bo-kant, om die waarskynlikheid van kop en rooi te vind.', checkMode: 'auto', correctAnswer: '1/8', correctAnswers: ['1/8'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 4 wieletjie-uitkomste = 8.\nGunstige uitkomste = 1 (kop en rooi).\nW(kop en rooi) = 1/8 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="89.5" y1="82" x2="89.5" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="127.0" y1="82" x2="127.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="164.5" y1="82" x2="164.5" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="70.8" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Ro</text><text x="108.2" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gr</text><text x="145.8" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Bl</text><text x="183.2" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Ge</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 7.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '6/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — dit is 6 gunstige uitkomste.\nW(som van 7) = 6/36 = 1/6 ✓' },
        { difficulty: 'Medium', question: 'ʼn Klerewinkel laat Zinhle 1 van 3 T-hemp kleure en 1 van 4 kortbroek kleure kies om ʼn drag te maak. Hoeveel verskillende dragte is moontlik, en wat is die waarskynlikheid dat Zinhle ewekansig met een spesifieke dragkombinasie eindig?', checkMode: 'auto', correctAnswer: '12 dragte, 1/12', correctAnswers: ['12 dragte, 1/12', '12, 1/12', '12 en 1/12'], explanation: 'Totale dragte = 3 T-hemp kleure × 4 kortbroek kleure = 12.\nW(een spesifieke drag) = 1/12, aangesien daar slegs 1 gunstige uitkoms uit 12 totaal is ✓' },
        { difficulty: 'Medium', question: 'ʼn Student lys die steekproefruimte vir twee keer ʼn muntstuk opgooi as: KK, KS, SS. Verduidelik wat verkeerd is met hierdie lys, en gee die korrekte totale aantal uitkomste.', checkMode: 'self', answer: 'Die student mis die uitkoms SK (stert dan kop). Aangesien die volgorde saak maak, is KS en SK verskillende uitkomste en moet albei apart gelys word. Die korrekte steekproefruimte is KK, KS, SK, SS — dit is 4 uitkomste, nie 3 nie.' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening (11-13, Medium)
        { difficulty: 'Medium', question: 'Kaarte genommer 1 tot 20 word in ʼn boks geplaas. Vind die waarskynlikheid om ʼn priemgetal te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '8/20'], explanation: 'Priemgetalle van 1-20: 2, 3, 5, 7, 11, 13, 17, 19 — dit is 8 gunstige uitkomste.\nTotale uitkomste = 20.\nW(priemgetal) = 8/20 = 2/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings genommer 1 tot 12. Vind die waarskynlikheid om op ʼn veelvoud van 3 te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,333', correctAnswers: ['0,333', '0.333', '1/3', '0,33', '0.33'], explanation: 'Veelvoude van 3 van 1-12: 3, 6, 9, 12 — dit is 4 gunstige uitkomste.\nTotale uitkomste = 12.\nW(veelvoud van 3) = 4/12 = 1/3 ≈ 0,33 ✓' },
        { difficulty: 'Medium', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om die skoppe-aas (een spesifieke kaart) te trek.', checkMode: 'auto', correctAnswer: '1/52', correctAnswers: ['1/52'], explanation: 'Gunstige uitkomste = 1 (slegs een skoppe-aas in die stel).\nTotale uitkomste = 52 kaarte.\nW(skoppe-aas) = 1/52 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie uit Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Kagiso gooi ʼn muntstuk 200 keer op en teken kop 112 keer aan. Vind die relatiewe frekwensie van kop as ʼn persentasie.', checkMode: 'auto', correctAnswer: '56%', correctAnswers: ['56%', '56'], explanation: 'Relatiewe frekwensie = aantal koppe ÷ totale proewe = 112 ÷ 200 = 0,56 = 56% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie met 4 gelyke kleur-afdelings word 150 keer gedraai. Die tabel hieronder wys die resultate:\nRooi: 45, Blou: 38, Groen: 34, Geel: 33.\nVind die relatiewe frekwensie om op rooi te land, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '45/150'], explanation: 'Relatiewe frekwensie = aantal rooi resultate ÷ totale proewe = 45 ÷ 150 = 3/10 ✓' },
        { difficulty: 'Medium-Hard', question: 'Ayanda sê relatiewe frekwensie en teoretiese waarskynlikheid word op dieselfde manier bereken, sodat hulle altyd presies dieselfde waarde sal gee. Is Ayanda korrek? Verduidelik die verskil tussen die twee.', checkMode: 'self', answer: 'Nee, Ayanda is nie korrek nie. Teoretiese waarskynlikheid word bereken deur te redeneer oor ewe waarskynlike uitkomste (gunstige uitkomste ÷ totale uitkomste) voordat enige eksperiment plaasvind. Relatiewe frekwensie word bereken uit werklike eksperimentele resultate (aantal kere wat ʼn gebeurtenis voorgekom het ÷ totale aantal proewe). Hulle word op ʼn soortgelyke manier bereken, maar relatiewe frekwensie hang af van wat werklik in ʼn eksperiment gebeur het, sodat dit kan wissel en gewoonlik naby aan, maar nie presies gelyk aan nie, die teoretiese waarskynlikheid is.' },

        // Blok 6 — Multi-Stap / Vergelykingsredenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Twee leerders gooi elkeen ʼn dobbelsteen en teken aan hoe gereeld hulle ʼn ses kry. Leerder A gooi 60 keer en kry 8 keer ʼn ses. Leerder B gooi 90 keer en kry 20 keer ʼn ses. Wie se relatiewe frekwensie is nader aan die teoretiese waarskynlikheid om ʼn ses te gooi? Wys jou werk.', checkMode: 'self', answer: 'Teoretiese waarskynlikheid om ʼn ses te gooi = 1/6 ≈ 0,1667 (16,67%). Leerder A: relatiewe frekwensie = 8/60 = 2/15 ≈ 0,1333 (13,33%), ʼn verskil van ongeveer 3,34 persentasiepunte van die teoretiese waarde. Leerder B: relatiewe frekwensie = 20/90 = 2/9 ≈ 0,2222 (22,22%), ʼn verskil van ongeveer 5,55 persentasiepunte. Aangesien 3,34 < 5,55, is Leerder A se relatiewe frekwensie nader aan die teoretiese waarskynlikheid.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi fiches en 7 blou fiches. Thandiwe kies ʼn fiche, teken die kleur aan, sit dit terug, en kies weer. Vind die waarskynlikheid dat sy albei kere ʼn rooi fiche kies.', checkMode: 'auto', correctAnswer: '9/100', correctAnswers: ['9/100'], explanation: 'W(rooi) elke keer = 3/10, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(rooi albei kere) = 3/10 × 3/10 = 9/100 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fondsinsameling het 250 kaartjies, en Bandile koop 5 daarvan. Slegs 1 kaartjie wen die hoofprys, en ʼn tweede, ander kaartjie wen ʼn kleiner prys. Vind die waarskynlikheid dat Bandile die hoofprys wen EN die waarskynlikheid dat ʼn kaartjie wat hy NIE besit nie die kleiner prys wen, verduidelik dan watter waarskynlikheid groter is.', checkMode: 'self', answer: 'W(Bandile wen hoofprys) = 5/250 = 1/50 = 0,02, aangesien hy 5 van die 250 kaartjies besit en slegs 1 kaartjie wen. W(ʼn kaartjie wat Bandile nie besit nie wen die kleiner prys) = 245/250 = 49/50 = 0,98, aangesien 245 van die 250 kaartjies nie syne is nie. Die tweede waarskynlikheid (0,98) is baie groter as die eerste (0,02), omdat Bandile slegs ʼn klein deel van die totale kaartjies besit, sodat dit baie waarskynliker is dat iemand anders se kaartjie getrek word.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheid as breuke, desimale en persentasies, steekproefruimtes, en relatiewe frekwensie onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 7 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidsformule en relatiewe frekwensie afdelings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Waarskynlikheidskaal/Taal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Fondsinsameling waarborg dat elke enkele kaartjie wat verkoop word ʼn prys sal wen. Watter woord van die waarskynlikheidskaal beskryf die kans om ʼn prys te wen die beste?', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Aangesien elke kaartjie ʼn prys wen, sal die gebeurtenis altyd plaasvind — dit is seker ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Thabo ʼn vokaalkaart uit ʼn stel kies, is 2/5. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: '2/5 = 2 ÷ 5 = 0,4. As persentasie: 0,4 × 100 = 40% ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het ʼn waarskynlikheid van 0,35 om op pers te land. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '35/100'], explanation: '0,35 = 35/100, wat vereenvoudig tot 7/20 ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 7 rooi fiches en 13 blou fiches. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20'], explanation: 'Gunstige uitkomste = 7 rooi fiches.\nTotale uitkomste = 7 + 13 = 20 fiches.\nW(rooi) = 7/20 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings, soos gewys: 6 geel afdelings en 2 pienk afdelings. Vind die waarskynlikheid om op geel te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,75', correctAnswers: ['0,75', '0.75', '3/4'], explanation: 'Gunstige uitkomste = 6 geel afdelings.\nTotale uitkomste = 8 afdelings.\nW(geel) = 6/8 = 3/4 = 0,75 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#ca8a04" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#db2777" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#db2777" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sak het altesaam 10 fiches, soos gewys: 4 is swart en die res is wit. Vind die waarskynlikheid om ʼn swart fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Gunstige uitkomste = 4 swart fiches.\nTotale uitkomste = 10 fiches.\nW(swart) = 4/10 = 0,4 = 40% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="90" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="58" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="84" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings verdeel tussen drie spanne: Span A het 1 afdeling, Span B het 4 afdelings, en Span C het 3 afdelings. Vind die waarskynlikheid om op Span B of Span C te land.', checkMode: 'auto', correctAnswer: '7/8', correctAnswers: ['7/8'], explanation: 'Gunstige uitkomste = Span B + Span C = 4 + 3 = 7 afdelings.\nTotale uitkomste = 8 afdelings.\nW(B of C) = 7/8 ✓' },

        // Blok 3 — Steekproefruimtes vir Saamgestelde Gebeurtenisse Lys (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 3 gelyke afdelings in oranje, wit en grys word gedraai, soos gewys. Gebruik die leë rooster, met muntstuk-uitkomste langs die kant en wieletjie-uitkomste langs die bo-kant, om die waarskynlikheid van stert en grys te vind.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 3 wieletjie-uitkomste = 6.\nGunstige uitkomste = 1 (stert en grys).\nW(stert en grys) = 1/6 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="102.0" y1="82" x2="102.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="152.0" y1="82" x2="152.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="77.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Or</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">W</text><text x="177.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">Gy</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 6.', checkMode: 'auto', correctAnswer: '5/36', correctAnswers: ['5/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 6: (1,5), (2,4), (3,3), (4,2), (5,1) — dit is 5 gunstige uitkomste.\nW(som van 6) = 5/36 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skryfbehoeftewinkel laat Sipho 1 van 3 penkleure en 1 van 5 notaboekomslae kies om ʼn stel te maak. Hoeveel verskillende stelle is moontlik, en wat is die waarskynlikheid dat Sipho ewekansig met een spesifieke stelkombinasie eindig?', checkMode: 'auto', correctAnswer: '15 stelle, 1/15', correctAnswers: ['15 stelle, 1/15', '15, 1/15', '15 en 1/15'], explanation: 'Totale stelle = 3 penkleure × 5 notaboekomslae = 15.\nW(een spesifieke stel) = 1/15, aangesien daar slegs 1 gunstige uitkoms uit 15 totaal is ✓' },
        { difficulty: 'Medium', question: 'ʼn Student lys die steekproefruimte vir ʼn dobbelsteen gooi en ʼn muntstuk opgooi as: 1K, 2K, 3K, 4K, 5K, 6K. Verduidelik wat verkeerd is met hierdie lys, en gee die korrekte totale aantal uitkomste.', checkMode: 'self', answer: 'Die student mis al die uitkomste waar die muntstuk op stert land: 1S, 2S, 3S, 4S, 5S, 6S. Die korrekte steekproefruimte moet elke dobbelsteengetal met albei muntstuk-uitkomste paar, wat 1K, 2K, 3K, 4K, 5K, 6K, 1S, 2S, 3S, 4S, 5S, 6S gee — dit is 12 uitkomste (6 × 2 = 12), nie 6 nie.' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening (11-13, Medium)
        { difficulty: 'Medium', question: 'Kaarte genommer 1 tot 25 word in ʼn boks geplaas. Vind die waarskynlikheid om ʼn volkome vierkantgetal te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '5/25'], explanation: 'Volkome vierkante van 1-25: 1, 4, 9, 16, 25 — dit is 5 gunstige uitkomste.\nTotale uitkomste = 25.\nW(volkome vierkant) = 5/25 = 1/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 16 gelyke afdelings genommer 1 tot 16. Vind die waarskynlikheid om op ʼn veelvoud van 4 te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,25', correctAnswers: ['0,25', '0.25', '1/4'], explanation: 'Veelvoude van 4 van 1-16: 4, 8, 12, 16 — dit is 4 gunstige uitkomste.\nTotale uitkomste = 16.\nW(veelvoud van 4) = 4/16 = 1/4 = 0,25 ✓' },
        { difficulty: 'Medium', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om enige heer te trek (daar is 4 here in die stel). Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/13', correctAnswers: ['1/13', '4/52'], explanation: 'Gunstige uitkomste = 4 here.\nTotale uitkomste = 52 kaarte.\nW(heer) = 4/52 = 1/13 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie uit Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Palesa gooi ʼn muntstuk 250 keer op en teken kop 145 keer aan. Vind die relatiewe frekwensie van kop as ʼn persentasie.', checkMode: 'auto', correctAnswer: '58%', correctAnswers: ['58%', '58'], explanation: 'Relatiewe frekwensie = aantal koppe ÷ totale proewe = 145 ÷ 250 = 0,58 = 58% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie met 4 gelyke kleur-afdelings word 150 keer gedraai. Die tabel hieronder wys die resultate:\nRooi: 42, Blou: 60, Groen: 25, Geel: 23.\nVind die relatiewe frekwensie om op blou te land, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '60/150'], explanation: 'Relatiewe frekwensie = aantal blou resultate ÷ totale proewe = 60 ÷ 150 = 2/5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Sibusiso sê relatiewe frekwensie en teoretiese waarskynlikheid word op dieselfde manier bereken, sodat hulle altyd presies dieselfde waarde sal gee. Is Sibusiso korrek? Verduidelik die verskil tussen die twee.', checkMode: 'self', answer: 'Nee, Sibusiso is nie korrek nie. Teoretiese waarskynlikheid word bereken deur te redeneer oor ewe waarskynlike uitkomste (gunstige uitkomste ÷ totale uitkomste) voordat enige eksperiment plaasvind. Relatiewe frekwensie word bereken uit werklike eksperimentele resultate (aantal kere wat ʼn gebeurtenis voorgekom het ÷ totale aantal proewe). Hulle word op ʼn soortgelyke manier bereken, maar relatiewe frekwensie hang af van wat werklik in ʼn eksperiment gebeur het, sodat dit kan wissel en gewoonlik naby aan, maar nie presies gelyk aan nie, die teoretiese waarskynlikheid is.' },

        // Blok 6 — Multi-Stap / Vergelykingsredenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Twee leerders gooi elkeen ʼn muntstuk op en teken aan hoe gereeld hulle kop kry. Leerder A gooi 80 keer op en kry 38 keer kop. Leerder B gooi 120 keer op en kry 68 keer kop. Wie se relatiewe frekwensie is nader aan die teoretiese waarskynlikheid om kop te kry? Wys jou werk.', checkMode: 'self', answer: 'Teoretiese waarskynlikheid om kop te kry = 1/2 = 0,5 (50%). Leerder A: relatiewe frekwensie = 38/80 = 19/40 = 0,475 (47,5%), ʼn verskil van 2,5 persentasiepunte van die teoretiese waarde. Leerder B: relatiewe frekwensie = 68/120 = 17/30 ≈ 0,5667 (56,67%), ʼn verskil van ongeveer 6,67 persentasiepunte. Aangesien 2,5 < 6,67, is Leerder A se relatiewe frekwensie nader aan die teoretiese waarskynlikheid.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 4 rooi fiches en 6 blou fiches. Karabo kies ʼn fiche, teken die kleur aan, sit dit terug, en kies weer. Vind die waarskynlikheid dat sy albei kere ʼn rooi fiche kies.', checkMode: 'auto', correctAnswer: '4/25', correctAnswers: ['4/25'], explanation: 'W(rooi) elke keer = 4/10 = 2/5, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(rooi albei kere) = 2/5 × 2/5 = 4/25 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fondsinsameling het 300 kaartjies, en Nomvula koop 6 daarvan. Slegs 1 kaartjie wen die hoofprys, en ʼn tweede, ander kaartjie wen ʼn kleiner prys. Vind die waarskynlikheid dat Nomvula die hoofprys wen EN die waarskynlikheid dat ʼn kaartjie wat sy NIE besit nie die kleiner prys wen, verduidelik dan watter waarskynlikheid groter is.', checkMode: 'self', answer: 'W(Nomvula wen hoofprys) = 6/300 = 1/50 = 0,02, aangesien sy 6 van die 300 kaartjies besit en slegs 1 kaartjie wen. W(ʼn kaartjie wat Nomvula nie besit nie wen die kleiner prys) = 294/300 = 49/50 = 0,98, aangesien 294 van die 300 kaartjies nie hare is nie. Die tweede waarskynlikheid (0,98) is baie groter as die eerste (0,02), omdat Nomvula slegs ʼn klein deel van die totale kaartjies besit, sodat dit baie waarskynliker is dat iemand anders se kaartjie getrek word.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheid as breuke, desimale en persentasies, steekproefruimtes, en relatiewe frekwensie onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 7 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidsformule en relatiewe frekwensie afdelings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Waarskynlikheidskaal/Taal as Breuk, Desimaal, Persentasie (0-2, Easy)
        { difficulty: 'Easy', question: 'ʼn Boks bevat slegs geel albasters. Watter woord van die waarskynlikheidskaal beskryf die kans om ʼn albaster te kies wat NIE geel is nie die beste?', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Aangesien elke albaster geel is, kan die kies van ʼn albaster wat nie geel is nie nooit gebeur nie — dit is onmoontlik ✓' },
        { difficulty: 'Easy', question: 'Die waarskynlikheid dat Lindiwe ʼn konsonantkaart uit ʼn stel kies, is 5/8. Skryf hierdie waarskynlikheid as ʼn persentasie.', checkMode: 'auto', correctAnswer: '62,5%', correctAnswers: ['62,5%', '62.5%', '62,5', '62.5'], explanation: '5/8 = 5 ÷ 8 = 0,625. As persentasie: 0,625 × 100 = 62,5% ✓' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het ʼn waarskynlikheid van 0,75 om op wit te land. Skryf hierdie waarskynlikheid as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4', '75/100'], explanation: '0,75 = 75/100, wat vereenvoudig tot 3/4 ✓' },

        // Blok 2 — Waarskynlikheid van ʼn Wieletjie/Sak Fiches (3-6, Easy-Medium) — DIAGRAM-FLAGGED at 4, 5
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 9 rooi fiches en 11 blou fiches. Vind die waarskynlikheid om ʼn rooi fiche te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '9/20', correctAnswers: ['9/20'], explanation: 'Gunstige uitkomste = 9 rooi fiches.\nTotale uitkomste = 9 + 11 = 20 fiches.\nW(rooi) = 9/20 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings, soos gewys: 5 pers afdelings en 3 wit afdelings. Vind die waarskynlikheid om op pers te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,625', correctAnswers: ['0,625', '0.625', '5/8'], explanation: 'Gunstige uitkomste = 5 pers afdelings.\nTotale uitkomste = 8 afdelings.\nW(pers) = 5/8 = 0,625 ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 110 95 L 110.0 40.0 A 55 55 0 0 1 148.9 56.1 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 56.1 A 55 55 0 0 1 165.0 95.0 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 165.0 95.0 A 55 55 0 0 1 148.9 133.9 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 148.9 133.9 A 55 55 0 0 1 110.0 150.0 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 110.0 150.0 A 55 55 0 0 1 71.1 133.9 Z" fill="#7c3aed" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 133.9 A 55 55 0 0 1 55.0 95.0 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 55.0 95.0 A 55 55 0 0 1 71.1 56.1 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 110 95 L 71.1 56.1 A 55 55 0 0 1 110.0 40.0 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="110" cy="95" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="95" r="7" fill="#0f1f3d"/><path d="M 110 88 L 104 103 L 116 103 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sak het altesaam 10 fiches, soos gewys: 7 is swart en die res is wit. Vind die waarskynlikheid om ʼn swart fiche te kies, en gee jou antwoord as ʼn persentasie.', checkMode: 'auto', correctAnswer: '70%', correctAnswers: ['70%', '70'], explanation: 'Gunstige uitkomste = 7 swart fiches.\nTotale uitkomste = 10 fiches.\nW(swart) = 7/10 = 0,7 = 70% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><path d="M 45 55 L 40 155 Q 40 165 50 165 L 170 165 Q 180 165 180 155 L 175 55 Z" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/><path d="M 75 55 Q 75 30 110 30 Q 145 30 145 55" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="58" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="136" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="162" cy="90" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="58" cy="115" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="84" cy="115" r="9" fill="#111827" stroke="#0f1f3d" stroke-width="1"/><circle cx="110" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="136" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="162" cy="115" r="9" fill="#f8fafc" stroke="#0f1f3d" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings verdeel tussen drie spanne: Span A het 2 afdelings, Span B het 1 afdeling, en Span C het 5 afdelings. Vind die waarskynlikheid om op Span A of Span B te land.', checkMode: 'auto', correctAnswer: '3/8', correctAnswers: ['3/8'], explanation: 'Gunstige uitkomste = Span A + Span B = 2 + 1 = 3 afdelings.\nTotale uitkomste = 8 afdelings.\nW(A of B) = 3/8 ✓' },

        // Blok 3 — Steekproefruimtes vir Saamgestelde Gebeurtenisse Lys (7-10, Medium) — DIAGRAM-FLAGGED at 7
        { difficulty: 'Medium', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 5 gelyke afdelings genommer 1 tot 5 word gedraai, soos gewys. Gebruik die leë rooster, met muntstuk-uitkomste langs die kant en wieletjie-uitkomste langs die bo-kant, om die waarskynlikheid van kop en 5 te vind.', checkMode: 'auto', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: 'Totale uitkomste = 2 muntstuk-uitkomste × 5 wieletjie-uitkomste = 10.\nGunstige uitkomste = 1 (kop en 5).\nW(kop en 5) = 1/10 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="48" width="184" height="94" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="18" y1="82" x2="202" y2="82" stroke="#0f1f3d" stroke-width="2"/><line x1="52" y1="48" x2="52" y2="142" stroke="#0f1f3d" stroke-width="2"/><line x1="82.0" y1="82" x2="82.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="112.0" y1="82" x2="112.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="142.0" y1="82" x2="142.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="172.0" y1="82" x2="172.0" y2="142" stroke="#9ca3af" stroke-width="1"/><line x1="18" y1="112" x2="202" y2="112" stroke="#9ca3af" stroke-width="1"/><text x="67.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">1</text><text x="97.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">2</text><text x="127.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3</text><text x="157.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><text x="187.0" y="70.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5</text><text x="35.0" y="102.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><text x="35.0" y="132.0" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">S</text></svg>' },
        { difficulty: 'Medium', question: 'Twee gewone dobbelstene word saam gegooi. Vind die waarskynlikheid dat die twee dobbelstene getalle wys wat optel tot 5.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9', '4/36'], explanation: 'Totale uitkomste = 6 × 6 = 36.\nPare wat optel tot 5: (1,4), (2,3), (3,2), (4,1) — dit is 4 gunstige uitkomste.\nW(som van 5) = 4/36 = 1/9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kitskoswinkel laat Ntando 1 van 4 burgertipes en 1 van 6 drankgeure kies om ʼn ete te maak. Hoeveel verskillende etes is moontlik, en wat is die waarskynlikheid dat Ntando ewekansig met een spesifieke etekombinasie eindig?', checkMode: 'auto', correctAnswer: '24 etes, 1/24', correctAnswers: ['24 etes, 1/24', '24, 1/24', '24 en 1/24'], explanation: 'Totale etes = 4 burgertipes × 6 drankgeure = 24.\nW(een spesifieke ete) = 1/24, aangesien daar slegs 1 gunstige uitkoms uit 24 totaal is ✓' },
        { difficulty: 'Medium', question: 'ʼn Student lys die steekproefruimte vir twee dobbelstene gooi en teken slegs die totale 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 as die "moontlike uitkomste" aan, elkeen slegs een keer. Verduidelik wat verkeerd is met hierdie benadering, en gee die korrekte totale aantal uitkomste.', checkMode: 'self', answer: 'Die student het slegs die moontlike totale gelys, nie die werklike uitkomste van die twee dobbelstene nie. Elke totaal is nie ewe waarskynlik nie — byvoorbeeld, ʼn totaal van 7 kan op 6 verskillende maniere gebeur (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), terwyl ʼn totaal van 2 slegs op 1 manier kan gebeur (1+1). Om die steekproefruimte korrek te lys, moet elke geordende paar dobbelsteenresultate getel word, wat 6 × 6 = 36 totale uitkomste gee, nie 11 nie.' },

        // Blok 4 — Teoretiese Waarskynlikheidsberekening (11-13, Medium)
        { difficulty: 'Medium', question: 'Kaarte genommer 1 tot 30 word in ʼn boks geplaas. Vind die waarskynlikheid om ʼn veelvoud van 5 te kies. Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '6/30'], explanation: 'Veelvoude van 5 van 1-30: 5, 10, 15, 20, 25, 30 — dit is 6 gunstige uitkomste.\nTotale uitkomste = 30.\nW(veelvoud van 5) = 6/30 = 1/5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 18 gelyke afdelings genommer 1 tot 18. Vind die waarskynlikheid om op ʼn veelvoud van 6 te land, en gee jou antwoord as ʼn desimaal.', checkMode: 'auto', correctAnswer: '0,167', correctAnswers: ['0,167', '0.167', '1/6', '0,17', '0.17'], explanation: 'Veelvoude van 6 van 1-18: 6, 12, 18 — dit is 3 gunstige uitkomste.\nTotale uitkomste = 18.\nW(veelvoud van 6) = 3/18 = 1/6 ≈ 0,17 ✓' },
        { difficulty: 'Medium', question: 'ʼn Standaard stel van 52 speelkaarte word geskommel. Vind die waarskynlikheid om enige hartkaart te trek (daar is 13 hartkaarte in die stel). Gee jou antwoord as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '13/52'], explanation: 'Gunstige uitkomste = 13 hartkaarte.\nTotale uitkomste = 52 kaarte.\nW(hartkaart) = 13/52 = 1/4 ✓' },

        // Blok 5 — Eksperimentele Waarskynlikheid / Relatiewe Frekwensie uit Data (14-16, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Zamani gooi ʼn muntstuk 400 keer op en teken kop 210 keer aan. Vind die relatiewe frekwensie van kop as ʼn persentasie.', checkMode: 'auto', correctAnswer: '52,5%', correctAnswers: ['52,5%', '52.5%', '52,5', '52.5'], explanation: 'Relatiewe frekwensie = aantal koppe ÷ totale proewe = 210 ÷ 400 = 0,525 = 52,5% ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie met 4 gelyke kleur-afdelings word 150 keer gedraai. Die tabel hieronder wys die resultate:\nRooi: 36, Blou: 40, Groen: 39, Geel: 35.\nVind die relatiewe frekwensie om op rooi te land, as ʼn vereenvoudigde breuk.', checkMode: 'auto', correctAnswer: '6/25', correctAnswers: ['6/25', '36/150'], explanation: 'Relatiewe frekwensie = aantal rooi resultate ÷ totale proewe = 36 ÷ 150 = 6/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Buhle sê relatiewe frekwensie en teoretiese waarskynlikheid word op dieselfde manier bereken, sodat hulle altyd presies dieselfde waarde sal gee. Is Buhle korrek? Verduidelik die verskil tussen die twee.', checkMode: 'self', answer: 'Nee, Buhle is nie korrek nie. Teoretiese waarskynlikheid word bereken deur te redeneer oor ewe waarskynlike uitkomste (gunstige uitkomste ÷ totale uitkomste) voordat enige eksperiment plaasvind. Relatiewe frekwensie word bereken uit werklike eksperimentele resultate (aantal kere wat ʼn gebeurtenis voorgekom het ÷ totale aantal proewe). Hulle word op ʼn soortgelyke manier bereken, maar relatiewe frekwensie hang af van wat werklik in ʼn eksperiment gebeur het, sodat dit kan wissel en gewoonlik naby aan, maar nie presies gelyk aan nie, die teoretiese waarskynlikheid is.' },

        // Blok 6 — Multi-Stap / Vergelykingsredenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Twee leerders draai elkeen ʼn wieletjie met 5 afdelings en teken aan hoe gereeld hulle op rooi land. Leerder A draai 50 keer en land 8 keer op rooi. Leerder B draai 100 keer en land 22 keer op rooi. Wie se relatiewe frekwensie is nader aan die teoretiese waarskynlikheid om op rooi te land? Wys jou werk.', checkMode: 'self', answer: 'Teoretiese waarskynlikheid om op rooi te land = 1/5 = 0,2 (20%), aangesien rooi 1 van die 5 gelyke afdelings is. Leerder A: relatiewe frekwensie = 8/50 = 4/25 = 0,16 (16%), ʼn verskil van 4 persentasiepunte van die teoretiese waarde. Leerder B: relatiewe frekwensie = 22/100 = 11/50 = 0,22 (22%), ʼn verskil van 2 persentasiepunte. Aangesien 2 < 4, is Leerder B se relatiewe frekwensie nader aan die teoretiese waarskynlikheid.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi fiches en 5 blou fiches. Amahle kies ʼn fiche, teken die kleur aan, sit dit terug, en kies weer. Vind die waarskynlikheid dat sy albei kere ʼn rooi fiche kies.', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '25/100'], explanation: 'W(rooi) elke keer = 5/10 = 1/2, aangesien die fiche teruggesit word (onafhanklike gebeurtenisse).\nW(rooi albei kere) = 1/2 × 1/2 = 1/4 ✓' },
        { difficulty: 'Hard', question: 'ʼn Fondsinsameling het 400 kaartjies, en Mpho koop 8 daarvan. Slegs 1 kaartjie wen die hoofprys, en ʼn tweede, ander kaartjie wen ʼn kleiner prys. Vind die waarskynlikheid dat Mpho die hoofprys wen EN die waarskynlikheid dat ʼn kaartjie wat hy NIE besit nie die kleiner prys wen, verduidelik dan watter waarskynlikheid groter is.', checkMode: 'self', answer: 'W(Mpho wen hoofprys) = 8/400 = 1/50 = 0,02, aangesien hy 8 van die 400 kaartjies besit en slegs 1 kaartjie wen. W(ʼn kaartjie wat Mpho nie besit nie wen die kleiner prys) = 392/400 = 49/50 = 0,98, aangesien 392 van die 400 kaartjies nie syne is nie. Die tweede waarskynlikheid (0,98) is baie groter as die eerste (0,02), omdat Mpho slegs ʼn klein deel van die totale kaartjies besit, sodat dit baie waarskynliker is dat iemand anders se kaartjie getrek word.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het waarskynlikheid as breuke, desimale en persentasies, steekproefruimtes, en relatiewe frekwensie onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van Graad 7 waarskynlikheid — hersien enige vrae wat jy gemis het.' },
        { minScore: 10, message: 'Goeie poging! Hersien die waarskynlikheidsformule en relatiewe frekwensie afdelings, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
