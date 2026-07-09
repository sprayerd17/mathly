import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (probability likelihood levels) ───────────────────────────
// impossible     → red    (#dc2626)
// unlikely       → orange (#ea580c)
// equally likely → yellow (#ca8a04)
// likely         → blue   (#2563eb)
// certain        → green  (#16a34a)
const im = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const un = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const eq = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const li = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const ce = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING PROBABILITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-probability',
      title: 'Waarskynlikheid Verstaan',
      icon: '🎲',
      explanation:
        `<p style="margin-bottom:16px;">Waarskynlikheid vertel ons <strong>hoe waarskynlik dit is dat iets sal gebeur</strong>. Ons beskryf waarskynlikheid met woorde — ${im('onmoontlik')}, ${un('onwaarskynlik')}, ${eq('ewe waarskynlik')}, ${li('waarskynlik')} en ${ce('seker')}. Iets is ${im('onmoontlik')} as dit nooit kan gebeur nie. Iets is ${ce('seker')} as dit altyd sal gebeur. Iets is ${eq('ewe waarskynlik')} as dit dieselfde kans het om te gebeur as om nie te gebeur nie. Ons kan waarskynlikheid wys op ʼn <strong>skaal van 0 tot 1</strong> waar 0 onmoontlik beteken en 1 seker beteken.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${im('onmoontlik')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('onwaarskynlik')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fde047;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('ewe waarskynlik')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('waarskynlik')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('seker')}</span>` +
        `</div>` +

        // ── Probability scale ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidskaal</p>` +
        `<div style="margin-bottom:20px;padding:16px 20px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;">` +
        `<div style="display:flex;align-items:center;margin-bottom:10px;">` +
        `<div style="flex:1;height:16px;background:linear-gradient(to right,#dc2626,#ea580c,#ca8a04,#2563eb,#16a34a);border-radius:8px;"></div>` +
        `</div>` +
        `<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;">` +
        `<span style="color:#dc2626;">0<br>${im('onmoontlik')}</span>` +
        `<span style="color:#ea580c;text-align:center;">${un('onwaarskynlik')}</span>` +
        `<span style="color:#ca8a04;text-align:center;">½<br>${eq('ewe waarskynlik')}</span>` +
        `<span style="color:#2563eb;text-align:center;">${li('waarskynlik')}</span>` +
        `<span style="color:#16a34a;text-align:right;">1<br>${ce('seker')}</span>` +
        `</div>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Onmoontlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Iets wat <strong>nooit</strong> kan gebeur nie. Waarskynlikheid = 0.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Onwaarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Iets wat <strong>kan</strong> gebeur maar waarskynlik nie sal nie. Waarskynlikheid is tussen 0 en ½.</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde047;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">Ewe waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde kans om te gebeur as om <strong>nie</strong> te gebeur nie. Waarskynlikheid = ½.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Waarskynlik</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Iets wat <strong>waarskynlik</strong> sal gebeur. Waarskynlikheid is tussen ½ en 1.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Seker</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Iets wat <strong>altyd</strong> sal gebeur. Waarskynlikheid = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou die skaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">${im('Onmoontlike')} gebeurtenisse het ʼn waarskynlikheid van <strong>0</strong>. ${ce('Sekere')} gebeurtenisse het ʼn waarskynlikheid van <strong>1</strong>. Alles anders val iewers tussenin — hoe nader aan 1, hoe waarskynliker is dit om te gebeur.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn gewone dobbelsteen met getalle 1 tot 6. Beskryf die waarskynlikheid om ʼn 7 te gooi.',
          answer: `Om ʼn 7 te gooi is ${im('onmoontlik')} — die waarskynlikheid is 0`,
          steps: [
            `ʼn Gewone dobbelsteen het net die getalle 1 tot 6.`,
            `Die getal 7 verskyn nie op die dobbelsteen nie.`,
            `Dit is ${im('onmoontlik')} om ʼn 7 te gooi.`,
            `Die waarskynlikheid is <strong>0</strong>.`,
          ],
        },
        {
          question: 'Lerato kies ʼn kaart uit ʼn sak wat slegs rooi kaarte bevat. Beskryf die waarskynlikheid om ʼn rooi kaart te kies.',
          answer: `Om ʼn rooi kaart te kies is ${ce('seker')} — die waarskynlikheid is 1`,
          steps: [
            `Elke kaart in die sak is rooi.`,
            `Maak nie saak watter kaart sy kies nie, dit sal altyd rooi wees.`,
            `Dit is ${ce('seker')} dat sy ʼn rooi kaart sal kies.`,
            `Die waarskynlikheid is <strong>1</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — impossible ─────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter woord beskryf die waarskynlikheid van iets wat nooit sal gebeur nie?',
          answer: 'onmoontlik',
          checkMode: 'auto',
          correctAnswer: 'onmoontlik',
          explanation: 'Iets wat nooit sal gebeur nie het ʼn waarskynlikheid van 0. Ons beskryf dit as onmoontlik.',
        },

        // ── Q2 Easy — certain ────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter woord beskryf die waarskynlikheid van iets wat altyd sal gebeur?',
          answer: 'seker',
          checkMode: 'auto',
          correctAnswer: 'seker',
          explanation: 'Iets wat altyd sal gebeur het ʼn waarskynlikheid van 1. Ons beskryf dit as seker.',
        },

        // ── Q3 Medium — probability scale ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Plaas hierdie gebeurtenisse op ʼn waarskynlikheidskaal van onmoontlik tot seker — ʼn getal kleiner as 10 gooi op ʼn gewone dobbelsteen, ʼn 7 gooi op ʼn gewone dobbelsteen, ʼn ewe getal gooi op ʼn gewone dobbelsteen.',
          answer: 'Om ʼn 7 te gooi is onmoontlik. Om ʼn ewe getal te gooi is ewe waarskynlik. Om ʼn getal kleiner as 10 te gooi is seker.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Waarskynlikheidskaal van 0 tot 1 kleurgekodeer — onmoontlik in rooi by 0, onwaarskynlik in oranje, ewe waarskynlik in geel op die halfpadpunt, waarskynlik in blou, seker in groen by 1" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat waarskynlikheid verduidelik met alledaagse voorbeelde en wys hoe om gebeurtenisse op die waarskynlikheidskaal van 0 tot 1 te plaas" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PROBABILITY AS A FRACTION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-as-fraction',
      title: 'Waarskynlikheid as ʼn Breuk',
      icon: '½',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan waarskynlikheid as ʼn breuk skryf. Die aantal maniere waarop die gebeurtenis kan gebeur kom bo — dit word die ${ce('gunstige uitkomste')} genoem. Die totale aantal moontlike uitkomste kom onder — dit is die ${li('totale uitkomste')}. Waarskynlikheid = aantal ${ce('gunstige uitkomste')} gedeel deur ${li('totale aantal uitkomste')}. Die ${un('waarskynlikheid')} van ʼn gebeurtenis val altyd tussen 0 en 1. Hoe hoër die breuk, hoe waarskynliker is dit dat die gebeurtenis sal plaasvind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('gunstige uitkomste')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('totale uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('waarskynlikheidsbreuk')}</span>` +
        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die waarskynlikheidsformule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${un('Waarskynlikheid')} = <span style="display:inline-block;text-align:center;vertical-align:middle;line-height:1.6;"><span style="display:block;border-bottom:2px solid #374151;padding-bottom:2px;">${ce('aantal gunstige uitkomste')}</span><span style="display:block;padding-top:2px;">${li('totale aantal uitkomste')}</span></span></p>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelfeite</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gunstige uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die aantal maniere waarop die gebeurtenis wat jy wil hê <strong>kan gebeur</strong>. Dit kom bo op die breuk.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Totale uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die moontlike dinge wat <strong>kan gebeur</strong>. Dit kom onder op die breuk.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Waarskynlikheidsbreuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Altyd tussen <strong>0</strong> (onmoontlik) en <strong>1</strong> (seker). Hoe hoër die breuk, hoe waarskynliker.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tel altyd noukeurig</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy die breuk skryf, tel alle uitkomste noukeurig. Die ${ce('gunstige uitkomste')} moet in die telling vir ${li('totale uitkomste')} ingesluit word — moet hulle nooit apart tel nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sak bevat 3 rooi balle en 2 blou balle. Wat is die waarskynlikheid om ʼn rooi bal te kies?',
          answer: `Die waarskynlikheid om ʼn rooi bal te kies is ${un('3/5')}`,
          steps: [
            `Tel die ${ce('gunstige uitkomste')} — daar is ${ce('3')} rooi balle.`,
            `Tel die ${li('totale uitkomste')} — daar is 3 + 2 = ${li('5')} balle altesaam.`,
            `${un('Waarskynlikheid')} = ${ce('3')} ÷ ${li('5')} = ${un('3/5')}`,
            `Die waarskynlikheid om ʼn rooi bal te kies is ${un('3/5')}.`,
          ],
        },
        {
          question: 'Sipho gooi ʼn dobbelsteen genommer 1 tot 6. Wat is die waarskynlikheid om ʼn ewe getal te gooi?',
          answer: `Die waarskynlikheid om ʼn ewe getal te gooi is ${un('3/6')} = ${un('1/2')}`,
          steps: [
            `Lys die ewe getalle op ʼn dobbelsteen — 2, 4, 6. Dit is ${ce('3')} gunstige uitkomste.`,
            `${li('Totale uitkomste')} = ${li('6')} (enige getal van 1 tot 6 kan gegooi word).`,
            `${un('Waarskynlikheid')} = ${ce('3')} ÷ ${li('6')} = ${un('3/6')} = ${un('1/2')}`,
            `Die waarskynlikheid om ʼn ewe getal te gooi is ${un('1/2')}.`,
          ],
        },
        {
          question: 'Amahle het 5 groen fiches, 3 geel fiches en 2 blou fiches in ʼn sak. Wat is die waarskynlikheid om ʼn geel fiche te kies?',
          answer: `Die waarskynlikheid om ʼn geel fiche te kies is ${un('3/10')}`,
          steps: [
            `${ce('Gunstige uitkomste')} = ${ce('3')} geel fiches.`,
            `${li('Totale uitkomste')} = 5 + 3 + 2 = ${li('10')}.`,
            `${un('Waarskynlikheid')} = ${ce('3')} ÷ ${li('10')} = ${un('3/10')}`,
            `Die waarskynlikheid om ʼn geel fiche te kies is ${un('3/10')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — bag probability fraction ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Sak het 2 rooi balle en 2 blou balle. Wat is die waarskynlikheid om ʼn rooi bal te kies?',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          correctAnswers: ['1/2', '2/4'],
          explanation: 'Gunstige uitkomste = 2 rooi balle. Totale uitkomste = 2 + 2 = 4 balle.\nWaarskynlikheid = 2/4 = 1/2.',
        },

        // ── Q5 Medium — dice greater than 4 ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Dobbelsteen genommer 1 tot 6 word gegooi. Wat is die waarskynlikheid om ʼn getal groter as 4 te gooi?',
          answer: '1/3',
          checkMode: 'auto',
          correctAnswer: '1/3',
          correctAnswers: ['1/3', '2/6'],
          explanation: 'Getalle groter as 4 op ʼn dobbelsteen is 5 en 6 — dit is 2 gunstige uitkomste.\nTotale uitkomste = 6.\nWaarskynlikheid = 2/6 = 1/3.',
        },

        // ── Q6 Hard — not red counter ────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sak bevat 4 groen, 3 geel en 1 rooi fiche. Wat is die waarskynlikheid om ʼn fiche te kies wat nie rooi is nie?',
          answer: '7/8',
          checkMode: 'auto',
          correctAnswer: '7/8',
          explanation: 'Totale fiches = 4 + 3 + 1 = 8.\nFiches wat nie rooi is nie = 4 groen + 3 geel = 7.\nWaarskynlikheid = 7/8.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Breukdiagram wat die waarskynlikheidsformule wys met gunstige uitkomste in groen bo en totale uitkomste in blou onder, geïllustreer met ʼn sak gekleurde balle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om waarskynlikheid as ʼn breuk te skryf met sakke gekleurde balle en ʼn dobbelsteen, met stap-vir-stap werk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — LISTING OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Uitkomste Lys',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${li('Uitkoms')} is ʼn moontlike resultaat van ʼn eksperiment. Om alle moontlike ${li('uitkomste')} te lys help ons om ${im('waarskynlikheid')} korrek te bereken. Wanneer ons ʼn muntstuk opgooi is daar ${un('2')} moontlike ${li('uitkomste')} — kop of stert. Wanneer ons ʼn dobbelsteen gooi is daar ${un('6')} moontlike ${li('uitkomste')} — 1, 2, 3, 4, 5 of 6. Lys altyd alle moontlike ${li('uitkomste')} voordat jy ${im('waarskynlikheid')} bereken sodat jy nie een mis nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('uitkomste')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('gunstige uitkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('totale uitkomste')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${im('waarskynlikheid')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Uitkoms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Een moontlike resultaat van ʼn eksperiment. Wanneer ʼn muntstuk opgegooi word is die ${li('uitkomste')} <strong>kop</strong> of <strong>stert</strong>.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gunstige uitkoms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${li('Uitkoms')} wat ooreenstem met wat jy soek. As jy kop wil hê, dan is ${ce('kop')} ʼn ${ce('gunstige uitkoms')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Totale uitkomste</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die telling van <strong>alle</strong> moontlike gelyste ${li('uitkomste')}. Vir ʼn dobbelsteen is die ${un('totaal')} ${un('6')}. Vir ʼn muntstuk is die ${un('totaal')} ${un('2')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Waarskynlikheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${im('Waarskynlikheid')} = ${ce('gunstige uitkomste')} ÷ ${un('totale uitkomste')}. Lys altyd eers alle ${li('uitkomste')} sodat die ${un('totaal')} korrek is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lys voordat jy bereken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skryf altyd alle moontlike ${li('uitkomste')} neer <strong>voordat</strong> jy ${im('waarskynlikheid')} bereken. Op hierdie manier sal jy nooit ʼn ${li('uitkoms')} mis nie en jou ${un('totale uitkomste')} sal altyd korrek wees.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo gooi ʼn muntstuk op en gooi terselfdertyd ʼn dobbelsteen. Lys alle moontlike uitkomste.',
          answer: `Daar is ${un('12')} moontlike ${li('uitkomste')}: ${li('Kop-1, Kop-2, Kop-3, Kop-4, Kop-5, Kop-6, Stert-1, Stert-2, Stert-3, Stert-4, Stert-5, Stert-6')}`,
          steps: [
            `Die muntstuk kan op kop of stert val — ${un('2')} ${li('opsies')}.`,
            `Die dobbelsteen kan 1, 2, 3, 4, 5 of 6 wys — ${un('6')} ${li('opsies')}.`,
            `${un('Totale uitkomste')} = 2 × 6 = ${un('12')}.`,
            `Lys hulle: ${li('Kop-1, Kop-2, Kop-3, Kop-4, Kop-5, Kop-6, Stert-1, Stert-2, Stert-3, Stert-4, Stert-5, Stert-6')}.`,
          ],
        },
        {
          question: 'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Lerato draai dit een keer. Wat is die waarskynlikheid om op blou of groen te land?',
          answer: `Die ${im('waarskynlikheid')} om op blou of groen te land is ${im('2/4')} = ${im('1/2')}`,
          steps: [
            `Lys alle ${li('uitkomste')} — ${li('rooi, blou, groen, geel')}.`,
            `${un('Totale uitkomste')} = ${un('4')}.`,
            `${ce('Gunstige uitkomste')} = ${ce('blou of groen')} = ${ce('2')}.`,
            `${im('Waarskynlikheid')} = ${ce('2')} ÷ ${un('4')} = ${im('2/4')} = ${im('1/2')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — list dice outcomes ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho gooi ʼn dobbelsteen genommer 1 tot 6. Lys alle moontlike uitkomste.',
          answer: 'Die moontlike uitkomste is 1, 2, 3, 4, 5 en 6. Daar is altesaam 6 moontlike uitkomste.',
          checkMode: 'self',
        },

        // ── Q8 Medium — spinner red or blue ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Wieletjie het 5 gelyke afdelings — 2 rooi, 1 blou, 1 groen en 1 geel. Wat is die waarskynlikheid om op rooi of blou te land?',
          answer: '3/5',
          checkMode: 'auto',
          correctAnswer: '3/5',
          explanation: 'Gunstige uitkomste = 2 rooi + 1 blou = 3.\nTotale uitkomste = 5.\nWaarskynlikheid = 3/5.',
        },

        // ── Q9 Hard — combined outcomes ──────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato gooi ʼn muntstuk op en draai ʼn wieletjie met 3 gelyke afdelings genommer 1, 2 en 3. Hoeveel moontlike uitkomste is daar altesaam?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Die muntstuk het 2 uitkomste (kop, stert). Die wieletjie het 3 uitkomste (1, 2, 3).\nTotale uitkomste = 2 × 3 = 6.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Roosterdiagram wat al 12 uitkomste wys wanneer ʼn muntstuk opgegooi en ʼn dobbelsteen gegooi word — kop-ry en stert-ry elk met 6 dobbelsteenuitkomste, alle uitkomste in blou uitgelig" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om alle moontlike uitkomste vir ʼn muntstuk-en-dobbelsteen-eksperiment te lys met ʼn tabel en hoe om die lys te gebruik om waarskynlikheid te bereken" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBABILITY EXPERIMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'probability-experiments',
      title: 'Waarskynlikheidseksperimente',
      icon: '🧪',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Waarskynlikheidseksperiment</strong> is wanneer ons werklik ʼn aktiwiteit uitvoer en die resultate aanteken. Die resultate wat ons van die eksperiment kry, word ${un('eksperimentele waarskynlikheid')} genoem. Die waarskynlikheid wat ons met breuke bereken, word ${li('teoretiese waarskynlikheid')} genoem. Wanneer ons ʼn eksperiment baie keer doen, kom die ${un('eksperimentele')} resultate nader aan die ${li('teoretiese waarskynlikheid')}. Dit is waarom ʼn groter ${ce('aantal proewe')} ons meer betroubare resultate gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${un('eksperimentele waarskynlikheid')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${li('teoretiese waarskynlikheid')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${ce('aantal proewe')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Eksperimentele waarskynlikheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarskynlikheid wat ons kry deur die eksperiment <strong>werklik te doen</strong> en aan te teken wat gebeur. Dit is die aantal kere wat die gebeurtenis plaasvind gedeel deur die totale aantal proewe.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Teoretiese waarskynlikheid</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarskynlikheid wat ons <strong>bereken</strong> met die formule — gunstige uitkomste ÷ totale uitkomste. Dit is die verwagte resultaat as alles perfek regverdig is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Aantal proewe</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeveel keer die eksperiment uitgevoer word. Hoe meer ${ce('proewe')} ons doen, hoe nader kom die ${un('eksperimentele waarskynlikheid')} aan die ${li('teoretiese waarskynlikheid')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Meer proewe — meer betroubaar</p>` +
        `<p style="margin:0;color:#1e3a8a;">Met slegs ʼn paar ${ce('proewe')} kan die ${un('eksperimentele waarskynlikheid')} baie verskil van die ${li('teoretiese waarskynlikheid')}. Namate die ${ce('aantal proewe')} toeneem, kom die twee waardes al hoe nader aan mekaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho gooi ʼn muntstuk 10 keer op en kry 7 keer kop en 3 keer stert. Wat is die eksperimentele waarskynlikheid om kop te kry? Hoe vergelyk dit met die teoretiese waarskynlikheid?',
          answer: `${un('Eksperimentele waarskynlikheid')} van kop = ${un('7/10')} — hoër as die ${li('teoretiese waarskynlikheid')} van ${li('1/2')} weens die klein ${ce('aantal proewe')}`,
          steps: [
            `${un('Eksperimentele waarskynlikheid')} van kop = aantal koppe ÷ ${ce('totale aantal opgooie')} = ${un('7')} ÷ ${ce('10')} = ${un('7/10')}.`,
            `${li('Teoretiese waarskynlikheid')} van kop = ${li('1')} ÷ ${li('2')} = ${li('1/2')} = ${li('5/10')}.`,
            `Die ${un('eksperimentele resultaat')} van ${un('7/10')} is hoër as die ${li('teoretiese')} ${li('5/10')}.`,
            `Dit kan gebeur met slegs ${ce('10 opgooie')} — met meer ${ce('opgooie')} sou die resultate nader aan ${li('1/2')} kom.`,
          ],
        },
        {
          question: 'Amahle gooi ʼn dobbelsteen 30 keer. Sy gooi presies 4 keer ʼn 6. Wat is die eksperimentele waarskynlikheid om ʼn 6 te gooi en wat is die teoretiese waarskynlikheid?',
          answer: `${un('Eksperimentele waarskynlikheid')} = ${un('4/30')} = ${un('2/15')} — naby aan die ${li('teoretiese waarskynlikheid')} van ${li('1/6')} maar nie presies dieselfde nie`,
          steps: [
            `${un('Eksperimentele waarskynlikheid')} = aantal 6's ÷ ${ce('totale aantal gooie')} = ${un('4')} ÷ ${ce('30')} = ${un('4/30')} = ${un('2/15')}.`,
            `${li('Teoretiese waarskynlikheid')} = ${li('1')} ÷ ${li('6')} = ${li('1/6')}.`,
            `Hierdie is naby aan mekaar maar nie presies dieselfde nie weens die klein ${ce('aantal proewe')}.`,
            `Met ${ce('600 gooie')} sou die resultate baie nader aan ${li('1/6')} wees.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — experimental probability ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo gooi ʼn muntstuk 20 keer op en kry 9 keer kop. Wat is die eksperimentele waarskynlikheid om kop te kry?',
          answer: '9/20',
          checkMode: 'auto',
          correctAnswer: '9/20',
          explanation: 'Eksperimentele waarskynlikheid = aantal koppe ÷ totale opgooie = 9 ÷ 20 = 9/20.',
        },

        // ── Q11 Medium — is 1 three in 12 rolls unusual ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Die teoretiese waarskynlikheid om ʼn 3 op ʼn dobbelsteen te gooi is 1/6. Amahle gooi die dobbelsteen 12 keer en gooi slegs een keer ʼn 3. Is dit ongewoon? Verduidelik.',
          answer: 'Nie noodwendig nie — met slegs 12 gooie kan die resultate redelik wissel. Die teoretiese waarskynlikheid van 1/6 beteken ons verwag ongeveer 2 drieë in 12 gooie, maar om slegs 1 te kry is nie ongewoon nie. Meer gooie sou resultate nader aan 1/6 gee.',
          checkMode: 'self',
        },

        // ── Q12 Hard — experimental vs theoretical ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Sak het 5 rooi en 5 blou fiches. Sipho kies ʼn fiche, teken die kleur aan en sit dit terug. Hy doen dit 20 keer en kry 13 keer rooi. Wat is die eksperimentele waarskynlikheid vir rooi en hoe vergelyk dit met die teoretiese waarskynlikheid?',
          answer: 'Eksperimentele waarskynlikheid = 13/20. Teoretiese waarskynlikheid = 5/10 = 1/2 = 10/20. Die eksperimentele resultaat is hoër as verwag, maar dit kan gebeur met slegs 20 proewe. Meer proewe sou die resultaat nader aan 1/2 bring.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Staafgrafiek wat eksperimentele waarskynlikheidsresultate vir 10 en 30 proewe vergelyk met die teoretiese waarskynlikheidslyn — oranje stawe vir eksperimentele resultate en blou lyn vir teoretiese waarskynlikheid" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn waarskynlikheidseksperiment met ʼn muntstuk en dobbelsteen wys, eksperimentele resultate met teoretiese waarskynlikheid vergelyk en verduidelik waarom meer proewe resultate nader aan die teoretiese waarde gee" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het al Graad 5 voltooi en waarskynlikheid onder die knie.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van waarskynlikheid.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 woordeskat & 0-1 skaal | 4-9 waarskynlikheid as breuk |
    // 10-13 uitkomste lys | 14-16 vergelyk & redeneer |
    // 17-18 foutopsporing | 19-20 eksperimenteel vs teoreties
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Sipho vra sy juffrou of dit môre by die skool in Johannesburg gaan sneeu in die somer. Watter enkele woord beskryf die waarskynlikheid dat dit gebeur?', answer: 'onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Sneeu in Johannesburg in die somer gebeur eintlik nooit nie, dus is hierdie gebeurtenis onmoontlik — waarskynlikheid 0.' },
        { difficulty: 'Easy', question: 'Watter woord beskryf die waarskynlikheid dat die son môreoggend sal opkom?', answer: 'seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Die son kom elke oggend op, dus gebeur dit altyd — dit is seker, waarskynlikheid 1.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word een keer opgegooi. Watter woord beskryf die kans dat dit op kop val die beste — onmoontlik, onwaarskynlik, ewe waarskynlik, waarskynlik, of seker?', answer: 'ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik', 'ewe waarskynlik'], explanation: 'ʼn Regverdige muntstuk het dieselfde kans om op kop te val as op stert, dus is dit ewe waarskynlik — waarskynlikheid 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Plaas hierdie drie gebeurtenisse in volgorde van MINS waarskynlik na MEES waarskynlik: (A) ʼn rooi bal kies uit ʼn sak van 9 rooi en 1 blou bal, (B) ʼn blou bal kies uit dieselfde sak, (C) enige gekleurde bal kies uit daardie sak.', answer: 'B, A, C', checkMode: 'auto', correctAnswer: 'BAC', correctAnswers: ['BAC', 'B, A, C'], explanation: 'B (blou) het slegs 1 uit 10 kanse — mins waarskynlik. A (rooi) het 9 uit 10 kanse — baie waarskynlik. C (enige kleur) gebeur altyd omdat die sak net rooi en blou balle het — seker, dus mees waarskynlik. Volgorde: B, A, C.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 5 oranje fiches en 3 pers fiches. Wat is die waarskynlikheid om ʼn oranje fiche te kies?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'Gunstige uitkomste = 5 oranje fiches. Totale uitkomste = 5 + 3 = 8. Waarskynlikheid = 5/8.' },
        { difficulty: 'Easy-Medium', question: 'Zanele draai ʼn wieletjie met 6 gelyke afdelings genommer 1 tot 6. Skryf, as ʼn breuk, haar kans dat dit op ʼn getal groter as 4 land.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Getalle groter as 4 op die wieletjie is 5 en 6 — dit is 2 gunstige uitkomste. Totale uitkomste = 6. Waarskynlikheid = 2/6 = 1/3.' },
        { difficulty: 'Medium', question: 'ʼn Trekking verkoop altesaam 80 kaartjies. Aisha koop 4 van die kaartjies. Wat is die waarskynlikheid dat een van Aisha se kaartjies as die wenner uitgetrek word?', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20', '4/80'], explanation: 'Gunstige uitkomste = 4 kaartjies wat aan Aisha behoort. Totale uitkomste = 80 kaartjies. Waarskynlikheid = 4/80, wat vereenvoudig na 1/20.' },
        { difficulty: 'Medium', question: 'ʼn Lekkergoedfles het 10 toffies en 15 pepermente, wat 25 lekkers altesaam maak. Skryf die waarskynlikheid om ʼn toffie te kies as ʼn breuk in sy eenvoudigste vorm.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '10/25'], explanation: 'Waarskynlikheid = 10/25. As jy bo en onder deur 5 deel, kry jy 2/5, wat nie verder vereenvoudig kan word nie.' },
        { difficulty: 'Medium', question: 'ʼn Boks het 15 albasters: 6 rooi en 9 blou. Wat is die waarskynlikheid om ʼn albaster te kies wat NIE rooi is nie?', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '9/15'], explanation: 'Albasters wat nie rooi is nie = 9 blou albasters. Totaal = 15. Waarskynlikheid = 9/15 = 3/5. (Dit stem ooreen met om direk ʼn blou albaster te kies.)' },
        { difficulty: 'Medium', question: 'Thabo gooi ʼn muntstuk op en gooi terselfdertyd ʼn 6-sydige dobbelsteen. Lys alle moontlike uitkomste, en sê dan hoeveel daar altesaam is.', answer: 'Kop-1, Kop-2, Kop-3, Kop-4, Kop-5, Kop-6, Stert-1, Stert-2, Stert-3, Stert-4, Stert-5, Stert-6 — 12 uitkomste altesaam', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Die muntstuk het 2 uitkomste (kop, stert) en die dobbelsteen het 6 uitkomste (1-6). Met die tel-beginsel: totale uitkomste = 2 × 6 = 12.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie is in 4 gelyke afdelings verdeel, gekleur rooi, blou, groen en geel, en word terselfdertyd gedraai as ʼn muntstuk opgegooi word. Hoeveel moontlike uitkomste is daar altesaam?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Die wieletjie het 4 uitkomste en die muntstuk het 2 uitkomste. Totale uitkomste = 4 × 2 = 8.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1 tot 8. Zanele wil die waarskynlikheid weet om op ʼn veelvoud van 3 te land. Lys eers die gunstige uitkomste, en gee dan die waarskynlikheid.', answer: 'Gunstige uitkomste is 3 en 6, dus waarskynlikheid = 2/8 = 1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '2/8'], explanation: 'As jy noukeurig lys, is die veelvoude van 3 van 1 tot 8 slegs 3 en 6 — dit is 2 gunstige uitkomste (9 is nie op die wieletjie nie). Totale uitkomste = 8. Waarskynlikheid = 2/8 = 1/4. ʼn Algemene fout is om te vergeet watter veelvoude werklik binne die 1-8 reeks val.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 3 groen fiches en 3 wit fiches. Lys elke moontlike uitkoms wanneer jy een fiche kies, en sê hoeveel uitkomste daar is.', answer: 'Die uitkomste is: groen, groen, groen, wit, wit, wit — maar aangesien ons uitkomste volgens kleur beskryf, is daar 2 duidelike uitkomste (groen of wit), al is daar 6 individuele fiches', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sak A het 4 rooi fiches uit 10 fiches altesaam. Sak B het 6 rooi fiches uit 15 fiches altesaam. Watter sak gee ʼn beter kans om ʼn rooi fiche te kies, of is hulle dieselfde?', answer: 'Hulle gee dieselfde kans', checkMode: 'auto', correctAnswer: 'dieselfde', correctAnswers: ['dieselfde', 'gelyk'], explanation: 'Sak A: waarskynlikheid = 4/10 = 2/5. Sak B: waarskynlikheid = 6/15 = 2/5. Albei breuke vereenvoudig na 2/5, dus gee die twee sakke presies dieselfde kans om rooi te kies.' },
        { difficulty: 'Medium', question: 'Vergelyk hierdie twee wieletjies: Wieletjie X het 4 gelyke afdelings met 1 rooi gekleur. Wieletjie Y het 8 gelyke afdelings met 3 rooi gekleur. Watter wieletjie gee ʼn beter kans om op rooi te land? Verduidelik jou redenasie met breuke.', answer: 'Wieletjie Y gee ʼn beter kans. Wieletjie X: waarskynlikheid van rooi = 1/4 = 2/8. Wieletjie Y: waarskynlikheid van rooi = 3/8. Aangesien 3/8 groter is as 2/8, het Wieletjie Y die beter kans om op rooi te land.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Weerberig sê daar is ʼn "hoë kans" op reën môre en ʼn "baie lae kans" op hael. Verduidelik in jou eie woorde wat hierdie twee waarskynlikheidsbeskrywings ons vertel oor hoe waarskynlik elke gebeurtenis is, en plaas hulle ongeveer op die 0 tot 1 skaal.', answer: 'ʼn "Hoë kans" op reën beteken reën sal waarskynlik gebeur, dus is die waarskynlikheid nader aan 1 (miskien ongeveer 0,7 tot 0,9). ʼn "Baie lae kans" op hael beteken hael is onwaarskynlik, dus is die waarskynlikheid nader aan 0 (miskien ongeveer 0,05 tot 0,1). Albei gebeurtenisse is moontlik, net nie ewe waarskynlik nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato het ʼn sak met 4 geel en 2 pienk fiches, 6 altesaam. Sy sê: "Die waarskynlikheid om pienk te kies is 2, want daar is 2 pienk fiches." Verduidelik wat Lerato verkeerd gedoen het en gee die korrekte waarskynlikheid.', answer: 'Lerato het slegs die aantal gunstige uitkomste geskryf en vergeet om deur die totaal te deel. Die korrekte waarskynlikheid is 2/6 = 1/3, nie 2 nie.', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Waarskynlikheid moet altyd gunstige uitkomste ÷ totale uitkomste wees, en moet tussen 0 en 1 wees. Lerato het net die gunstige uitkomste (2) genoem sonder om deur die totaal (6) te deel. Korrekte waarskynlikheid = 2/6 = 1/3.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen genommer 1 tot 6 word een keer gegooi. Kagiso beweer: "Daar is 6 getalle op die dobbelsteen, en 2 daarvan is ewe getalle, dus is die waarskynlikheid om ʼn ewe getal te gooi 2/6." Is Kagiso se finale antwoord korrek, al klink sy metode redelik? Verduidelik en gee die korrekte waarskynlikheid.', answer: 'Kagiso het die ewe getalle verkeerd getel. Die korrekte waarskynlikheid is 1/2, nie 2/6 nie.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: 'Die ewe getalle op ʼn dobbelsteen genommer 1 tot 6 is 2, 4 en 6 — dit is 3 gunstige uitkomste, nie 2 nie. Waarskynlikheid = 3/6 = 1/2. Kagiso het die gunstige uitkomste te min getel.' },
        { difficulty: 'Hard', question: 'Sipho gooi ʼn dobbelsteen 24 keer en teken presies 3 keer ʼn 6 aan. Wat is die eksperimentele waarskynlikheid om ʼn 6 te gooi, en wat is die teoretiese waarskynlikheid? Is hulle dieselfde?', answer: 'Eksperimentele waarskynlikheid = 1/8. Teoretiese waarskynlikheid = 1/6. Hulle is naby aan mekaar maar nie dieselfde nie, hoofsaaklik omdat 24 gooie ʼn redelik klein aantal proewe is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle gooi ʼn muntstuk 50 keer op en kry 32 keer kop. Bereken die eksperimentele waarskynlikheid van kop en die teoretiese waarskynlikheid van kop, en verduidelik dan in een of twee sinne waarom hulle verskil.', answer: 'Eksperimentele waarskynlikheid = 32/50 = 16/25. Teoretiese waarskynlikheid = 1/2 (25/50). Hierdie verskil omdat 50 opgooie nie ʼn baie groot aantal proewe is nie, dus kan toevallige wisseling die resultate weg van die verwagte 1/2 stoot. Met baie meer opgooie sou die eksperimentele resultaat waarskynlik nader aan 1/2 beweeg.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy verstaan waarskynlikheidswoorde, breuke en eksperimente regtig goed.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Is dit onmoontlik, onwaarskynlik, ewe waarskynlik, waarskynlik, of seker dat ʼn gewone dobbelsteen genommer 1 tot 6 die getal 9 sal wys wanneer dit gegooi word?', answer: 'onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Die getal 9 verskyn nie op ʼn dobbelsteen genommer 1 tot 6 nie, dus is dit onmoontlik om ʼn 9 te gooi — waarskynlikheid 0.' },
        { difficulty: 'Easy', question: 'ʼn Sak bevat slegs groen fiches. Lindiwe steek haar hand in en kies een fiche. Watter woord beskryf die waarskynlikheid dat sy ʼn groen fiche kies?', answer: 'seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Elke fiche in die sak is groen, dus sal die kies van ʼn groen fiche altyd gebeur — dit is seker, waarskynlikheid 1.' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het 2 gelyke afdelings, een swart en een wit. Watter woord beskryf die kans dat die wieletjie op swart land die beste?', answer: 'ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik', 'ewe waarskynlik'], explanation: 'Met 2 gelyke afdelings het swart en wit elk dieselfde kans om geland te word — dit is ewe waarskynlik, waarskynlikheid 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie drie gebeurtenisse van MEES waarskynlik na MINS waarskynlik: (A) ʼn getal kleiner as 7 gooi op ʼn gewone dobbelsteen, (B) die getal 6 gooi op ʼn gewone dobbelsteen, (C) die getal 8 gooi op ʼn gewone dobbelsteen.', answer: 'A, B, C', checkMode: 'auto', correctAnswer: 'ABC', correctAnswers: ['ABC', 'A, B, C'], explanation: 'ʼn Dobbelsteen genommer 1 tot 6 wys altyd ʼn getal kleiner as 7, dus is A seker — mees waarskynlik. B (ʼn 6 gooi) het ʼn 1 uit 6 kans — moontlik maar nie waarskynlik nie. C (ʼn 8 gooi) is onmoontlik aangesien 8 nie op die dobbelsteen is nie — mins waarskynlik. Volgorde: A, B, C.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie het 6 gelyke afdelings: 2 is pienk en 4 is grys. Wat is die waarskynlikheid dat die wieletjie op pienk land?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Gunstige uitkomste = 2 pienk afdelings. Totale uitkomste = 6 afdelings. Waarskynlikheid = 2/6 = 1/3.' },
        { difficulty: 'Easy-Medium', question: 'Kagiso gooi ʼn dobbelsteen genommer 1 tot 6 een keer. Skryf, as ʼn breuk, sy kans om ʼn getal kleiner as 3 te gooi.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '2/6'], explanation: 'Getalle kleiner as 3 op die dobbelsteen is 1 en 2 — dit is 2 gunstige uitkomste. Totale uitkomste = 6. Waarskynlikheid = 2/6 = 1/3.' },
        { difficulty: 'Medium', question: 'ʼn Skoolfees se trekking verkoop 60 kaartjies. Lindiwe koop 3 daarvan. Wat is die waarskynlikheid dat een van Lindiwe se kaartjies die prys wen?', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20', '3/60'], explanation: 'Gunstige uitkomste = 3 kaartjies wat aan Lindiwe behoort. Totale uitkomste = 60 kaartjies. Waarskynlikheid = 3/60, wat vereenvoudig na 1/20.' },
        { difficulty: 'Medium', question: 'ʼn Lekkergoedfles het 8 suurlemoen-lekkers en 12 lemmetjie-lekkers, 20 lekkers altesaam. Skryf die waarskynlikheid om ʼn suurlemoen-lekker te kies in sy eenvoudigste vorm.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '8/20'], explanation: 'Waarskynlikheid = 8/20. As jy bo en onder deur 4 deel, kry jy 2/5, wat nie verder vereenvoudig kan word nie.' },
        { difficulty: 'Medium', question: 'ʼn Kissie het 14 appels, waarvan 6 groen is en die res rooi. Wat is die waarskynlikheid om ʼn appel te kies wat NIE groen is nie?', answer: '4/7', checkMode: 'auto', correctAnswer: '4/7', correctAnswers: ['4/7', '8/14'], explanation: 'Appels wat nie groen is nie = 14 − 6 = 8 rooi appels. Totaal = 14. Waarskynlikheid = 8/14 = 4/7.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie genommer 1, 2, 3 word gedraai terwyl ʼn muntstuk terselfdertyd opgegooi word. Lys elke moontlike uitkoms, en sê dan hoeveel daar altesaam is.', answer: '1-Kop, 2-Kop, 3-Kop, 1-Stert, 2-Stert, 3-Stert — 6 uitkomste altesaam', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Die wieletjie het 3 uitkomste en die muntstuk het 2 uitkomste. Met die tel-beginsel: totale uitkomste = 3 × 2 = 6.' },
        { difficulty: 'Medium', question: 'Twee gewone 6-sydige dobbelstene word saam gegooi — een rooi dobbelsteen en een blou dobbelsteen. Hoeveel moontlike uitkomspare is daar altesaam?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Elke dobbelsteen het 6 uitkomste. Met die tel-beginsel: totale uitkomste = 6 × 6 = 36.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 10 gelyke afdelings genommer 1 tot 10. Vind die waarskynlikheid om op ʼn veelvoud van 4 te land deur eers die gunstige uitkomste te lys.', answer: 'Gunstige uitkomste is 4 en 8, dus waarskynlikheid = 2/10 = 1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5', '2/10'], explanation: 'As jy noukeurig lys, is die veelvoude van 4 van 1 tot 10 gelyk aan 4 en 8 — dit is 2 gunstige uitkomste (12 is nie op die wieletjie nie). Totale uitkomste = 10. Waarskynlikheid = 2/10 = 1/5. Dit is maklik om per ongeluk ʼn veelvoud soos 12 in te sluit wat buite die wieletjie se reeks is, dus voorkom eers lys hierdie fout.' },
        { difficulty: 'Medium', question: 'ʼn Kissie het 2 blou penne en 2 swart penne. Lys elke moontlike uitkoms wanneer jy een pen kies, beskryf volgens kleur, en sê hoeveel duidelike kleur-uitkomste daar is.', answer: 'Die duidelike kleur-uitkomste is blou en swart, dus is daar 2 duidelike uitkomste, al is daar 4 individuele penne', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sak A het 3 geel fiches uit 8 fiches altesaam. Sak B het 5 geel fiches uit 12 fiches altesaam. Watter sak gee die beter kans om geel te kies?', answer: 'Sak B', checkMode: 'auto', correctAnswer: 'SakB', correctAnswers: ['sakB', 'sak b', 'b'], explanation: 'Sak A: waarskynlikheid = 3/8 = 0,375. Sak B: waarskynlikheid = 5/12 ≈ 0,417. Vergelyk as ekwivalente breuke met noemer 24: 3/8 = 9/24 en 5/12 = 10/24. Aangesien 10/24 groter is as 9/24, gee Sak B die beter kans om geel te kies.' },
        { difficulty: 'Medium', question: 'Twee wieletjies word vergelyk: Wieletjie P het 6 gelyke afdelings met 2 oranje gekleur. Wieletjie Q het 9 gelyke afdelings met 4 oranje gekleur. Watter wieletjie gee ʼn beter kans om op oranje te land? Wys jou werk met breuke.', answer: 'Wieletjie Q gee ʼn beter kans. Wieletjie P: waarskynlikheid van oranje = 2/6 = 1/3. Wieletjie Q: waarskynlikheid van oranje = 4/9. As gelykwaardige breuke met noemer 18 vergelyk: 1/3 = 6/18 en 4/9 = 8/18. Aangesien 8/18 > 6/18, gee Wieletjie Q die beter kans om op oranje te land.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vriend vertel jou ʼn gebeurtenis is "amper seker" om te gebeur, terwyl ʼn ander gebeurtenis "vyftig-vyftig" is. Verduidelik wat hierdie twee frases oor waarskynlikheid vertel, en ongeveer waar jy elkeen op die 0 tot 1 skaal sal plaas.', answer: '"Amper seker" beteken die gebeurtenis sal baie waarskynlik gebeur, dus is die waarskynlikheid naby aan 1 (miskien ongeveer 0,9 tot 0,99), maar nie presies 1 nie omdat dit nie gewaarborg is nie. "Vyftig-vyftig" beteken die gebeurtenis is ewe waarskynlik om te gebeur of nie te gebeur nie, dus is die waarskynlikheid presies 1/2 (0,5), reg in die middel van die skaal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 5 oranje en 3 wit fiches, 8 altesaam. Bongani sê: "Die waarskynlikheid om wit te kies is 3, want daar is 3 wit fiches." Watter fout het Bongani gemaak, en wat is die korrekte waarskynlikheid?', answer: 'Bongani het slegs die telling van gunstige uitkomste gegee en nie deur die totaal gedeel nie. Die korrekte waarskynlikheid is 3/8, nie 3 nie.', checkMode: 'auto', correctAnswer: '3/8', correctAnswers: ['3/8'], explanation: 'Waarskynlikheid moet altyd gunstige uitkomste ÷ totale uitkomste wees en moet tussen 0 en 1 lê. Bongani het net die gunstige uitkomste (3) geskryf in plaas daarvan om deur die totaal (8) te deel. Korrekte waarskynlikheid = 3/8.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen genommer 1 tot 6 word een keer gegooi. Naledi sê: "Die getalle groter as 3 is 4, 5 en 6, maar ek gaan ook 3 self tel aangesien dit naby is, dus is die waarskynlikheid 4/6." Is Naledi se redenasie korrek? Verduidelik en gee die korrekte waarskynlikheid.', answer: 'Naledi is verkeerd om 3 in te sluit, aangesien 3 nie groter as 3 is nie. Die korrekte waarskynlikheid is 3/6 = 1/2, nie 4/6 nie.', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2', '3/6'], explanation: '"Groter as 3" beteken streng meer as 3, dus tel slegs 4, 5 en 6 — dit is 3 gunstige uitkomste, nie 4 nie. Waarskynlikheid = 3/6 = 1/2. Naledi het die getal 3 self verkeerdelik ingesluit.' },
        { difficulty: 'Hard', question: 'Lerato draai ʼn 4-kleur-wieletjie (rooi, blou, groen, geel, almal gelyke afdelings) 40 keer en land 15 keer op rooi. Vind die eksperimentele waarskynlikheid van rooi en die teoretiese waarskynlikheid van rooi, en sê of hulle naby aan mekaar is.', answer: 'Eksperimentele waarskynlikheid = 15/40 = 3/8. Teoretiese waarskynlikheid = 1/4 (10/40). Hierdie is taamlik verskillend — 3/8 is aansienlik hoër as 1/4 — wat kan gebeur met slegs 40 draaie. Meer draaie sou die eksperimentele resultaat waarskynlik nader aan 1/4 bring.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo kies ʼn kaart uit ʼn sak van 20 kaarte (10 genommerde kaarte en 10 letterkaarte), teken aan of dit ʼn getal of letter is, en sit dit terug. Hy doen dit 45 keer en kry 21 keer ʼn getalkaart. Bereken die eksperimentele waarskynlikheid van ʼn getalkaart en die teoretiese waarskynlikheid, en verduidelik dan waarom hulle mag verskil.', answer: 'Eksperimentele waarskynlikheid = 21/45 = 7/15. Teoretiese waarskynlikheid = 10/20 = 1/2. Hierdie is naby aan mekaar maar nie identies nie — 7/15 is effens minder as 1/2 — wat normaal is met ʼn matige aantal proewe soos 45. Met baie meer proewe sou die eksperimentele waarskynlikheid waarskynlik nader aan 1/2 stabiliseer.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met waarskynlikheidswoorde, breuke, uitkomste en eksperimente werk.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiout, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Wieletjie het 5 gelyke afdelings, almal blou gekleur. Watter woord beskryf die waarskynlikheid om op rooi te land?', answer: 'onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Daar is geen rooi afdeling op die wieletjie nie, dus kan om op rooi te land nooit gebeur nie — dit is onmoontlik, waarskynlikheid 0.' },
        { difficulty: 'Easy', question: 'ʼn Boks bevat 12 potlode en niks anders nie. Zinhle steek haar hand sonder om te kyk in en trek iets uit. Watter woord beskryf die waarskynlikheid dat sy ʼn potlood uittrek?', answer: 'seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Aangesien die boks slegs potlode bevat, sal wat sy ook al uittrek altyd ʼn potlood wees — dit is seker, waarskynlikheid 1.' },
        { difficulty: 'Easy', question: 'ʼn Sak het 4 wit balle en 4 swart balle. Watter woord beskryf die kans om ʼn wit bal te kies die beste?', answer: 'ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik', 'ewe waarskynlik'], explanation: 'Met gelyke getalle wit en swart balle het om wit te kies dieselfde kans as om swart te kies — dit is ewe waarskynlik, waarskynlikheid 1/2.' },
        { difficulty: 'Easy-Medium', question: 'Rangskik hierdie gebeurtenisse van MINS waarskynlik na MEES waarskynlik: (A) ʼn gestreepte sokkie kies uit ʼn laai van 1 gestreepte sokkie en 19 gewone sokkies, (B) enige sokkie kies uit daardie laai, (C) ʼn gewone sokkie kies uit daardie laai.', answer: 'A, C, B', checkMode: 'auto', correctAnswer: 'ACB', correctAnswers: ['ACB', 'A, C, B'], explanation: 'A (gestreep) het slegs 1 uit 20 kanse — mins waarskynlik. C (gewoon) het 19 uit 20 kanse — baie waarskynlik. B (enige sokkie) gebeur altyd aangesien die laai net sokkies bevat — seker, mees waarskynlik. Volgorde: A, C, B.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sak het 7 silwer krale en 5 goue krale. Wat is die waarskynlikheid om ʼn goue kraal te kies?', answer: '5/12', checkMode: 'auto', correctAnswer: '5/12', correctAnswers: ['5/12'], explanation: 'Gunstige uitkomste = 5 goue krale. Totale uitkomste = 7 + 5 = 12. Waarskynlikheid = 5/12.' },
        { difficulty: 'Easy-Medium', question: 'Musa draai ʼn wieletjie met 9 gelyke afdelings genommer 1 tot 9. Gee, as ʼn breuk, die kans dat dit op ʼn getal groter as 6 land.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3', '3/9'], explanation: 'Getalle groter as 6 op die wieletjie is 7, 8 en 9 — dit is 3 gunstige uitkomste. Totale uitkomste = 9. Waarskynlikheid = 3/9 = 1/3.' },
        { difficulty: 'Medium', question: 'ʼn Skool se trekking druk 500 kaartjies. Musa se klas koop 20 daarvan saam. Wat is die waarskynlikheid dat die wenkaartjie aan Musa se klas behoort?', answer: '1/25', checkMode: 'auto', correctAnswer: '1/25', correctAnswers: ['1/25', '20/500'], explanation: 'Gunstige uitkomste = 20 kaartjies wat deur Musa se klas gekoop is. Totale uitkomste = 500 kaartjies. Waarskynlikheid = 20/500, wat vereenvoudig na 1/25.' },
        { difficulty: 'Medium', question: 'ʼn Pakkie het 9 sjokoladekoekies en 12 gewone koekies, 21 koekies altesaam. Skryf die waarskynlikheid om ʼn sjokoladekoekie te kies in sy eenvoudigste vorm.', answer: '3/7', checkMode: 'auto', correctAnswer: '3/7', correctAnswers: ['3/7', '9/21'], explanation: 'Waarskynlikheid = 9/21. As jy bo en onder deur 3 deel, kry jy 3/7, wat nie verder vereenvoudig kan word nie.' },
        { difficulty: 'Medium', question: 'ʼn Fles het 18 knope, waarvan 5 geel is en die res ʼn mengsel van ander kleure. Wat is die waarskynlikheid om ʼn knoop te kies wat NIE geel is nie?', answer: '13/18', checkMode: 'auto', correctAnswer: '13/18', correctAnswers: ['13/18'], explanation: 'Knope wat nie geel is nie = 18 − 5 = 13. Totaal = 18. Waarskynlikheid = 13/18.' },
        { difficulty: 'Medium', question: 'ʼn Muntstuk word twee keer agtermekaar opgegooi. Lys alle moontlike uitkomste vir die twee opgooie, en sê dan hoeveel daar is.', answer: 'Kop-Kop, Kop-Stert, Stert-Kop, Stert-Stert — 4 uitkomste altesaam', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Die eerste opgooi het 2 uitkomste en die tweede opgooi het 2 uitkomste. Met die tel-beginsel: totale uitkomste = 2 × 2 = 4.' },
        { difficulty: 'Medium', question: 'ʼn Muntstuk word opgegooi en ʼn wieletjie met 3 gelyke afdelings (gemerk A, B, C) word terselfdertyd gedraai. Hoeveel moontlike uitkomspare is daar altesaam?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Die muntstuk het 2 uitkomste en die wieletjie het 3 uitkomste. Met die tel-beginsel: totale uitkomste = 2 × 3 = 6.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 12 gelyke afdelings genommer 1 tot 12. Vind die waarskynlikheid om op ʼn veelvoud van 5 te land deur eers die gunstige uitkomste te lys.', answer: 'Gunstige uitkomste is 5 en 10, dus waarskynlikheid = 2/12 = 1/6', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6', '2/12'], explanation: 'As jy noukeurig lys, is die veelvoude van 5 van 1 tot 12 gelyk aan 5 en 10 — dit is 2 gunstige uitkomste (15 is nie op die wieletjie nie). Totale uitkomste = 12. Waarskynlikheid = 2/12 = 1/6. Deur eers te lys voorkom jy om per ongeluk 15 te tel, wat buite die wieletjie se reeks is.' },
        { difficulty: 'Medium', question: 'ʼn Bak het 3 rooi appels en 2 groen appels. Lys elke moontlike uitkoms wanneer jy een appel kies, beskryf volgens kleur, en sê hoeveel duidelike kleur-uitkomste daar is.', answer: 'Die duidelike kleur-uitkomste is rooi en groen, dus is daar 2 duidelike uitkomste, al is daar 5 individuele appels', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sak A het 2 blou fiches uit 6 fiches altesaam. Sak B het 3 blou fiches uit 9 fiches altesaam. Watter sak gee ʼn beter kans om blou te kies, of is hulle dieselfde?', answer: 'Hulle gee dieselfde kans', checkMode: 'auto', correctAnswer: 'dieselfde', correctAnswers: ['dieselfde', 'gelyk'], explanation: 'Sak A: waarskynlikheid = 2/6 = 1/3. Sak B: waarskynlikheid = 3/9 = 1/3. Albei breuke vereenvoudig na 1/3, dus gee die twee sakke presies dieselfde kans om blou te kies.' },
        { difficulty: 'Medium', question: 'Twee wieletjies word vergelyk vir die kans om op groen te land: Wieletjie M het 5 gelyke afdelings met 1 groen gekleur. Wieletjie N het 10 gelyke afdelings met 3 groen gekleur. Watter wieletjie gee ʼn beter kans? Verduidelik jou redenasie met breuke.', answer: 'Wieletjie N gee ʼn beter kans. Wieletjie M: waarskynlikheid van groen = 1/5 = 2/10. Wieletjie N: waarskynlikheid van groen = 3/10. Aangesien 3/10 groter is as 2/10, het Wieletjie N die beter kans om op groen te land.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sportkommentator sê ʼn span het "baie min kans" om te wen, terwyl die ander span "amper seker gaan wen". Verduidelik wat hierdie frases ons vertel oor die waarskynlikheid dat elke span wen, en ongeveer waar elkeen op die 0 tot 1 skaal sal sit.', answer: '"Baie min kans" beteken om te wen is onwaarskynlik vir daardie span, dus is die waarskynlikheid naby aan 0 (miskien ongeveer 0,05 tot 0,15). "Amper seker gaan wen" beteken die ander span sal baie waarskynlik wen, dus is die waarskynlikheid naby aan 1 (miskien ongeveer 0,85 tot 0,95). Saam behoort die twee waarskynlikhede naby aan 1 op te tel, aangesien een span (of ʼn gelykop-uitslag) moet gebeur.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 6 blou en 4 rooi fiches, 10 altesaam. Palesa sê: "Die waarskynlikheid om rooi te kies is 4, want daar is 4 rooi fiches." Identifiseer Palesa se fout en gee die korrekte waarskynlikheid.', answer: 'Palesa het slegs die telling van gunstige uitkomste geskryf en vergeet om deur die totaal te deel. Die korrekte waarskynlikheid is 4/10 = 2/5, nie 4 nie.', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '4/10'], explanation: 'Waarskynlikheid moet altyd gunstige uitkomste ÷ totale uitkomste wees en moet tussen 0 en 1 wees. Palesa het net die gunstige uitkomste (4) genoem sonder om deur die totaal (10) te deel. Korrekte waarskynlikheid = 4/10 = 2/5.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen genommer 1 tot 6 word een keer gegooi. Tumi sê: "Die getalle kleiner as 5 is 1, 2, 3 en 4, maar ek gaan ook 5 tel aangesien dit naby is, dus is die waarskynlikheid 5/6." Is Tumi se redenasie korrek? Verduidelik en gee die korrekte waarskynlikheid.', answer: 'Tumi is verkeerd om 5 in te sluit, aangesien 5 nie kleiner as 5 is nie. Die korrekte waarskynlikheid is 4/6 = 2/3, nie 5/6 nie.', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ['2/3', '4/6'], explanation: '"Kleiner as 5" beteken streng minder as 5, dus tel slegs 1, 2, 3 en 4 — dit is 4 gunstige uitkomste, nie 5 nie. Waarskynlikheid = 4/6 = 2/3. Tumi het die getal 5 self verkeerdelik ingesluit.' },
        { difficulty: 'Hard', question: 'Amahle gooi ʼn dobbelsteen 60 keer en teken presies 8 keer ʼn 1 aan. Vind die eksperimentele waarskynlikheid om ʼn 1 te gooi en die teoretiese waarskynlikheid, en sê of hulle naby aan mekaar is.', answer: 'Eksperimentele waarskynlikheid = 8/60 = 2/15. Teoretiese waarskynlikheid = 1/6 (10/60). Hierdie is redelik naby aan mekaar — 2/15 is effens laer as 1/6 — wat normaal is met 60 gooie. Met selfs meer gooie sou die eksperimentele resultaat na verwagting nader aan 1/6 kom.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho trek ʼn albaster uit ʼn sak van 12 albasters (4 rooi, 4 blou, 4 groen), teken die kleur aan, en sit dit terug. Hy doen dit 36 keer en trek 15 keer rooi. Bereken die eksperimentele waarskynlikheid van rooi en die teoretiese waarskynlikheid, en verduidelik dan waarom die resultate dalk nie presies ooreenstem nie.', answer: 'Eksperimentele waarskynlikheid = 15/36 = 5/12. Teoretiese waarskynlikheid = 4/12 = 1/3 (12/36). Die eksperimentele resultaat (5/12) is ietwat hoër as die teoretiese resultaat (1/3), wat kan gebeur met ʼn matige aantal proewe soos 36. Met baie meer proewe sou die eksperimentele waarskynlikheid na verwagting nader aan 1/3 stabiliseer.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan waarskynlikheidswoorde, breuke, uitkomste en eksperimente op werklike probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
