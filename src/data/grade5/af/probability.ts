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
          correctAnswer: 'impossible',
          explanation: 'Iets wat nooit sal gebeur nie het ʼn waarskynlikheid van 0. Ons beskryf dit as onmoontlik.',
        },

        // ── Q2 Easy — certain ────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter woord beskryf die waarskynlikheid van iets wat altyd sal gebeur?',
          answer: 'seker',
          checkMode: 'auto',
          correctAnswer: 'certain',
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
}
