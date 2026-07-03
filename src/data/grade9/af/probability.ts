import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability roles) ───────────────────────────────────────
// rows / first branch / predicted frequency → blue   (#2563eb)
// columns / second branch / explanation     → green  (#16a34a)
// favourable outcomes / combined prob / actual frequency → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TWO-WAY TABLES FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'two-way-tables-compound-events',
      title: 'Tweerigting-tabelle vir Saamgestelde Gebeurtenisse',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Saamgestelde gebeurtenis</strong> behels twee of meer gebeurtenisse wat saam plaasvind. ʼn <strong>Tweerigting-tabel</strong> orden die uitkomste van twee gebeurtenisse in ${bl('rye')} en ${gr('kolomme')}, wat dit maklik maak om ${or('gunstige uitkomste')} te tel en die waarskynlikheid vir gekombineerde gebeurtenisse te bereken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kolomme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gunstige uitkomste')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn tweerigting-tabel te gebruik</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Merk die rye')} met die uitkomste van die eerste gebeurtenis en ${gr('merk die kolomme')} met die uitkomste van die tweede gebeurtenis.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vul elke sel in')} met die gekombineerde uitkoms. Die totale aantal selle is die totale aantal uitkomste in die steekproefruimte.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Tel die gunstige uitkomste')} — die selle wat ooreenstem met die gebeurtenis wat jy soek — en deel deur die totale aantal uitkomste.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarskynlikheidsformule</p>` +
        `<p style="margin:0;color:#1e3a8a;">W(gebeurtenis) = ${or('aantal gunstige uitkomste')} ÷ totale aantal uitkomste. Die tweerigting-tabel maak dit maklik om albei hierdie waardes direk af te lees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn muntstuk op en gooi ʼn dobbelsteen. Gebruik ʼn tweerigting-tabel om die waarskynlikheid te vind om kop EN ʼn getal groter as 4 te kry.',
          answer: `W(kop EN >4) = ${or('2')} ÷ 12 = ${or('1/6')}`,
          steps: [
            `Stel die tweerigting-tabel op met ${bl('2 rye')} (kop, stert) en ${gr('6 kolomme')} (1, 2, 3, 4, 5, 6). Dit gee ʼn totaal van 2 × 6 = <strong>12 uitkomste</strong> in die steekproefruimte.`,
            `${or('Gunstige uitkomste')} is die selle waar kop verskyn EN die dobbelsteen ʼn getal groter as 4 wys. Die getalle groter as 4 is 5 en 6, dus is die gunstige selle (kop, 5) en (kop, 6). Dit gee ${or('2 gunstige uitkomste')}.`,
            `W(kop EN >4) = ${or('2')} ÷ 12 = <strong>1/6</strong>.`,
            `Sien die diagram hieronder wat hierdie tweerigting-tabel wys.`,
          ],
        },
        {
          question: 'ʼn Tweerigting-tabel wys 30 leerders volgens geslag (manlik/vroulik) en gunsteling-vak (Wiskunde/Engels). 12 seuns verkies Wiskunde, 8 seuns verkies Engels, 6 meisies verkies Wiskunde, 4 meisies verkies Engels. Vind die waarskynlikheid dat ʼn lukraak gekose leerder vroulik is EN Wiskunde verkies.',
          answer: `W(vroulik EN Wiskunde) = ${or('6')} ÷ 30 = ${or('1/5')}`,
          steps: [
            `Lees die totaal van die tabel af: ${bl('rye')} is manlik en vroulik, ${gr('kolomme')} is Wiskunde en Engels. Totale leerders = 12 + 8 + 6 + 4 = <strong>30</strong>.`,
            `${or('Gunstige uitkomste')} = die sel vir vroulik EN Wiskunde = <strong>6</strong> leerders.`,
            `W(vroulik EN Wiskunde) = ${or('6')} ÷ 30 = <strong>1/5</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to set up and use a two-way table to list all outcomes of a compound event and calculate probability" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a two-way table with coin flip outcomes (heads/tails) as rows and dice outcomes (1-6) as columns, with all 12 combinations shown in the grid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TREE DIAGRAMS FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tree-diagrams-compound-events',
      title: 'Boomdiagramme vir Saamgestelde Gebeurtenisse',
      icon: '🌳',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Boomdiagram</strong> stel al die moontlike uitkomste van twee of meer gebeurtenisse visueel voor deur middel van vertakkende paaie. Elke ${bl('tak')} stel ʼn moontlike uitkoms voor, en ons vermenigvuldig waarskynlikhede langs elke tak-pad om die waarskynlikheid van ʼn spesifieke gekombineerde uitkoms te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste tak')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tweede tak')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gekombineerde waarskynlikheid')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn boomdiagram te teken en te gebruik</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Teken die eerste stel takke')} — een tak vir elke moontlike uitkoms van die eerste gebeurtenis. Skryf die waarskynlikheid op elke tak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Teken die tweede stel takke')} vanaf die einde van elke eerste tak — een vir elke moontlike uitkoms van die tweede gebeurtenis. Skryf die waarskynlikheid op elke tak.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vermenigvuldig langs die pad')} — om die waarskynlikheid van ʼn spesifieke gekombineerde uitkoms te vind, vermenigvuldig die waarskynlikhede op elke tak langs daardie pad.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelreël: vermenigvuldig langs takke, tel oor paaie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vermenigvuldig waarskynlikhede ${bl('langs')} ʼn enkele pad om die waarskynlikheid van daardie gekombineerde uitkoms te kry. As die gebeurtenis op meer as een pad kan gebeur, ${or('tel')} die waarskynlikhede van daardie paaie bymekaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato gooi ʼn muntstuk twee keer op. Gebruik ʼn boomdiagram om die waarskynlikheid te vind om albei kere kop te kry.',
          answer: `W(kop albei kere) = ${or('1/2 × 1/2')} = ${or('1/4')}`,
          steps: [
            `${bl('Eerste tak:')} Die muntstuk kan kop (K) of stert (S) wys, elk met waarskynlikheid ${bl('1/2')}.`,
            `${gr('Tweede tak:')} Van elke eerste uitkoms af kan die muntstuk weer kop of stert wys, elk met waarskynlikheid ${gr('1/2')}.`,
            `Volg die kop-dan-kop-pad: ${or('1/2 × 1/2')} = ${or('1/4')}.`,
            `Daar is 4 finale uitkomste (KK, KS, SK, SS), elk met waarskynlikheid 1/4, wat ons antwoord bevestig.`,
            `Sien die diagram hieronder wat hierdie boomdiagram wys.`,
          ],
        },
        {
          question: 'ʼn Sak het 3 rooi en 2 blou balle. Thabo kies een bal, sit dit terug, en kies weer. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om albei kere rooi te kies.',
          answer: `W(rooi albei kere) = ${or('3/5 × 3/5')} = ${or('9/25')}`,
          steps: [
            `${bl('Eerste tak:')} W(rooi) = ${bl('3/5')}, W(blou) = ${bl('2/5')}. (3 rooi uit 5 in totaal.)`,
            `${gr('Tweede tak:')} Aangesien die bal teruggesit word, is die waarskynlikhede dieselfde as voorheen. W(rooi) = ${gr('3/5')}, W(blou) = ${gr('2/5')}.`,
            `Volg die rooi-dan-rooi-pad: ${or('3/5 × 3/5')} = ${or('9/25')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to draw a tree diagram for a compound event and multiply probabilities along branch paths" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a tree diagram showing two coin flips, with branches for heads and tails at each stage, and probabilities labelled on each branch leading to four final outcomes" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PREDICTING RELATIVE FREQUENCY AND COMPARING WITH THEORETICAL
    //             PROBABILITY FOR COMPOUND EVENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'predicting-relative-frequency',
      title: 'Relatiewe Frekwensie Voorspel en Vergelyk met Teoretiese Waarskynlikheid vir Saamgestelde Gebeurtenisse',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons bepaal die waarskynlikhede vir uitkomste van saamgestelde gebeurtenisse en <strong>voorspel hulle relatiewe frekwensie</strong> in eenvoudige eksperimente, en vergelyk dan die ${bl('relatiewe frekwensie')} met die berekende ${or('teoretiese waarskynlikheid')} en ${gr('verduidelik enige moontlike verskille')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('voorspelde frekwensie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('werklike frekwensie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verduideliking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Voorspelde (verwagte) frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Teoretiese waarskynlikheid × aantal proewe. Dit is die aantal kere wat ons <em>verwag</em> dat ʼn uitkoms sal voorkom.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Werklike (relatiewe) frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die aantal kere wat die uitkoms <em>werklik</em> in die eksperiment voorgekom het. Dit mag van die voorspelde frekwensie verskil.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Waarom hulle verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Toevallige variasie in ʼn beperkte aantal proewe beteken werklike resultate stem selde presies met voorspellings ooreen. Met meer proewe neig resultate om nader aan die teoretiese waarde te kom.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die wet van groot getalle</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hoe meer proewe jy uitvoer, hoe nader sal die ${or('werklike frekwensie')} aan die ${bl('voorspelde frekwensie')} wees. Klein verskille is verwag en normaal — dit beteken nie dat die teoretiese waarskynlikheid verkeerd is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle voorspel dat twee muntstukke 80 keer opgooi ongeveer 20 keer kop-kop behoort te gee (aangesien waarskynlikheid = 1/4). Sy kry 23. Verduidelik die verskil.',
          answer: `${bl('Verwag: 20')}. ${or('Werklik: 23')}. ${gr('Klein variasie is normaal weens toevalligheid oor ʼn beperkte aantal proewe.')}`,
          steps: [
            `Bereken die ${bl('voorspelde frekwensie')}: 80 × 1/4 = ${bl('20')}. Ons verwag kop-kop ongeveer 20 keer.`,
            `${or('Werklike frekwensie')}: Amahle het ${or('23')} kop-kop-resultate gekry.`,
            `${gr('Verduidelik die verskil')}: ${gr('Om 23 te kry is naby die verwagte 20 maar nie presies nie — hierdie klein variasie is normaal weens toevalligheid oor ʼn beperkte aantal proewe.')} Met meer opgooie sal die resultaat waarskynlik nader aan 20 beweeg.`,
          ],
        },
        {
          question: 'Sipho gebruik ʼn tweerigting-tabel vir die gooi van twee dobbelstene, en voorspel dat om ʼn som van 7 te kry ongeveer 1/6 van die tyd oor 180 worpe (30 keer) behoort te gebeur. Hy kry 35. Is dit verbasend?',
          answer: `${bl('Verwag: 30')}. ${or('Werklik: 35')}. ${gr('Nie verbasend nie — natuurlike variasie kan met beperkte proewe voorkom.')}`,
          steps: [
            `Bereken die ${bl('voorspelde frekwensie')}: 180 × 1/6 = ${bl('30')}. Ons verwag ʼn som van 7 ongeveer 30 keer.`,
            `${or('Werklike frekwensie')}: Sipho het op ${or('35')} worpe ʼn som van 7 gekry.`,
            `${gr('Is dit verbasend?')} ${gr('Om 35 te kry is heelwat hoër as verwag, maar met ʼn beperkte aantal proewe kan hierdie soort variasie natuurlik voorkom. Meer worpe sal die resultaat waarskynlik nader aan 30 bring.')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to predict relative frequency for compound events and compare with theoretical probability, explaining natural variation" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a comparison showing predicted frequency versus actual frequency for a two-coin flip experiment over multiple trials, illustrating how results converge with more trials" />',
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // TOPIC PRACTICE — Q1 through Q15
  // ─────────────────────────────────────────────────────────────────────────
  topicPractice: [
    // ── Q1 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word opgegooi en ʼn dobbelsteen word gegooi. Hoeveel uitkomste is daar in totaal?',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'ʼn Muntstuk het 2 uitkomste (kop, stert) en ʼn dobbelsteen het 6 uitkomste (1–6). Totale uitkomste = 2 × 6 = 12.',
    },

    // ── Q2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik ʼn tweerigting-tabel vir ʼn muntstuk-opgooi en dobbelsteen-worp, en vind die waarskynlikheid om stert EN ʼn ewe getal te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'Totale uitkomste = 12. Ewe getalle op ʼn dobbelsteen is 2, 4, 6. Gunstige uitkomste (stert EN ewe) = 3. W = 3/12 = 1/4.',
    },

    // ── Q3 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho se tweerigting-tabel wys 40 leerders: 15 seuns hou van sport, 5 seuns hou van kuns, 12 meisies hou van sport, 8 meisies hou van kuns. Vind die waarskynlikheid dat ʼn leerder ʼn seun is wat van kuns hou.",
      answer: 'Totaal = 40. Gunstig (seun en kuns) = 5. Waarskynlikheid = 5/40 = 1/8.',
      checkMode: 'self',
    },

    // ── Q4 Easy ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Muntstuk word twee keer opgegooi. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om albei kere stert te kry.',
      answer: '1/4',
      checkMode: 'auto',
      correctAnswer: '1/4',
      explanation: 'W(stert eerste) = 1/2. W(stert tweede) = 1/2. Gekombineerd: 1/2 × 1/2 = 1/4.',
    },

    // ── Q5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 4 rooi en 6 blou balle. Lerato kies een, sit dit terug, en kies weer. Vind die waarskynlikheid om albei kere blou te kies.',
      answer: '9/25',
      checkMode: 'auto',
      correctAnswer: '9/25',
      explanation: 'W(blou) = 6/10 = 3/5. Aangesien dit teruggesit word, is W(blou weer) = 3/5. Gekombineerd: 3/5 × 3/5 = 9/25.',
    },

    // ── Q6 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê ʼn boomdiagram vir 3 muntstuk-opgooie sal 8 finale takke hê. Is hy korrek? Verduidelik.',
      answer: 'Ja — elke opgooi verdubbel die aantal takke (2 × 2 × 2 = 8), aangesien elke opgooi 2 moontlike uitkomste het.',
      checkMode: 'self',
    },

    // ── Q7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 4 gelyke afdelings (1, 2, 3, 4) en word twee keer gedraai. Vind die waarskynlikheid om albei kere ʼn 2 te kry deur ʼn boomdiagram-benadering te gebruik.',
      answer: '1/16',
      checkMode: 'auto',
      correctAnswer: '1/16',
      explanation: 'W(2 op eerste draai) = 1/4. W(2 op tweede draai) = 1/4. Gekombineerd: 1/4 × 1/4 = 1/16.',
    },

    // ── Q8 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se tweerigting-tabel wys 50 mense: 18 mans verkies tee, 12 mans verkies koffie, 14 vrouens verkies tee, 6 vrouens verkies koffie. Vind die waarskynlikheid dat iemand ʼn vrou is wat koffie verkies.",
      answer: 'Totaal = 50. Gunstig = 6. Waarskynlikheid = 6/50 = 3/25.',
      checkMode: 'self',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee dobbelstene word gegooi. Gebruik ʼn tweerigting-tabel-benadering om die waarskynlikheid te vind om ʼn som van 9 te kry.',
      answer: '1/9',
      checkMode: 'auto',
      correctAnswer: '1/9',
      correctAnswers: ['1/9', '4/36'],
      explanation: 'Totale uitkomste = 36. Pare wat tot 9 optel: (3,6), (4,5), (5,4), (6,3) = 4 gunstige uitkomste. W = 4/36 = 1/9.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho voorspel dat twee muntstukke 60 keer opgooi ongeveer 30 keer kop-stert (in enige volgorde) behoort te gee. Hy kry 27. Is dit redelik? Verduidelik.',
      answer: 'Verwag = 60 × 1/2 = 30 (aangesien W(kop-stert of stert-kop) = 1/2). Om 27 te kry is naby, wat normale variasie van beperkte proewe wys.',
      checkMode: 'self',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sak het 5 groen en 3 geel albasters. Lerato kies een, sit dit terug, en kies weer. Vind die waarskynlikheid om een groen en een geel te kies (in enige volgorde).',
      answer: '15/32',
      checkMode: 'auto',
      correctAnswer: '15/32',
      explanation: 'W(groen dan geel) = 5/8 × 3/8 = 15/64. W(geel dan groen) = 3/8 × 5/8 = 15/64. Gekombineerd (enige volgorde) = 15/64 + 15/64 = 30/64 = 15/32.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo gebruik ʼn boomdiagram vir die kies van 2 balle (sonder vervanging) uit ʼn sak van 3 rooi en 2 blou. Vind die waarskynlikheid om albei kere rooi te kies.',
      answer: 'W(rooi eerste) = 3/5. W(rooi tweede, sonder vervanging) = 2/4 = 1/2. Gekombineerd: 3/5 × 1/2 = 3/10.',
      checkMode: 'self',
    },

    // ── Q13 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle se tweerigting-tabel vir 2 dobbelsteen-worpe voorspel ʼn som van 7 ongeveer 1/6 van die tyd oor 120 worpe (20 keer). Sy kry 24. Is dit verbasend? Verduidelik.",
      answer: 'Verwag = 120 × 1/6 = 20. Om 24 te kry is heelwat hoër maar aanneemlik met natuurlike variasie; meer worpe sal die resultate waarskynlik nader aan 20 bring.',
      checkMode: 'self',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om ʼn tweerigting-tabel en ʼn boomdiagram vir dieselfde saamgestelde gebeurtenis te gebruik, sal altyd dieselfde waarskynlikheidsantwoord gee. Is hy korrek? Verduidelik.',
      answer: 'Ja — albei metodes orden dieselfde onderliggende steekproefruimte en waarskynlikhede, net in verskillende visuele formate, dus behoort hulle altyd konsekwente resultate te lewer.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Sak het 4 rooi en 6 blou balle. Twee balle word sonder vervanging gekies. Gebruik ʼn boomdiagram-benadering om die waarskynlikheid te vind om een rooi en een blou te kry (in enige volgorde).',
      answer: 'W(rooi dan blou) = 4/10 × 6/9 = 24/90. W(blou dan rooi) = 6/10 × 4/9 = 24/90. Gekombineerd (enige volgorde) = 24/90 + 24/90 = 48/90 = 8/15.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 9 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
