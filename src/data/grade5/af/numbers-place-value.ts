import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour palette for 6-digit place value ──────────────────────────────────
// Hundred Thousands — purple  (#7c3aed / bg #ede9fe / border #c4b5fd)
// Ten Thousands     — red     (#dc2626 / bg #fee2e2 / border #fca5a5)
// Thousands         — orange  (#ea580c / bg #ffedd5 / border #fed7aa)
// Hundreds          — yellow  (#ca8a04 / bg #fef9c3 / border #fde68a)
// Tens              — green   (#16a34a / bg #dcfce7 / border #86efac)
// Units             — blue    (#2563eb / bg #dbeafe / border #93c5fd)

const TABLE_HEADER = `<div style="overflow-x:auto;margin-top:16px;margin-bottom:4px"><table style="border-collapse:collapse;font-size:0.88em;width:100%"><thead><tr><th style="padding:9px 10px;background:#ede9fe;color:#7c3aed;border:2px solid #c4b5fd;font-weight:700;text-align:center">Honderdduisende</th><th style="padding:9px 10px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Tienduisende</th><th style="padding:9px 10px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Duisende</th><th style="padding:9px 10px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:9px 10px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:9px 10px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene</th></tr></thead>`

function tableRow(digits: string[], small = false): string {
  const p = small ? '8px 9px' : '11px 10px'
  const fs = small ? '1.1em' : '1.25em'
  const colours = [
    { bg: '#ede9fe', color: '#7c3aed', border: '#c4b5fd' },
    { bg: '#fee2e2', color: '#dc2626', border: '#fca5a5' },
    { bg: '#ffedd5', color: '#ea580c', border: '#fed7aa' },
    { bg: '#fef9c3', color: '#ca8a04', border: '#fde68a' },
    { bg: '#dcfce7', color: '#16a34a', border: '#86efac' },
    { bg: '#dbeafe', color: '#2563eb', border: '#93c5fd' },
  ]
  const cells = digits.map((d, i) => {
    const c = colours[i]
    return `<td style="padding:${p};background:${c.bg};color:${c.color};border:2px solid ${c.border};font-weight:800;font-size:${fs};text-align:center">${d}</td>`
  }).join('')
  return `<tbody><tr>${cells}</tr></tbody></table></div>`
}

const SMALL_HEADER = `<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:0.84em"><thead><tr><th style="padding:7px 9px;background:#ede9fe;color:#7c3aed;border:2px solid #c4b5fd;font-weight:700;text-align:center">Honderdduisende</th><th style="padding:7px 9px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Tienduisende</th><th style="padding:7px 9px;background:#ffedd5;color:#ea580c;border:2px solid #fed7aa;font-weight:700;text-align:center">Duisende</th><th style="padding:7px 9px;background:#fef9c3;color:#ca8a04;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:7px 9px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:7px 9px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene</th></tr></thead>`

// ─── Purple span helpers ──────────────────────────────────────────────────────
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Heelgetalle — Tel, Orden en Plekwaarde',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PLEKWAARDE TOT EN MET 6 SYFERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-6-digits',
      title: 'Plekwaarde tot en met 6 Syfers',
      icon: '🔢',
      explanation:
        `<p>In Graad 5 werk ons met getalle tot by <strong>100 000</strong> en verder. Elke syfer in ʼn getal het ʼn waarde wat afhang van sy <strong>posisie</strong>. Dit word <strong>plekwaarde</strong> genoem. Een plek na links beweeg maak ʼn syfer <strong>tien keer groter</strong>.</p>` +
        `<p style="margin-top:14px">Ons gebruik <strong>ses kolomme</strong> in ons plekwaardetabel. Elke kolom het sy eie kleur — leer hierdie kleure want ons gebruik hulle in elke voorbeeld hieronder:</p>` +
        TABLE_HEADER + tableRow(['4', '5', '3', '2', '7', '6']) +
        `<p style="margin-top:16px">Die getal wat gewys word, is <strong>453 276</strong>. Hier is wat elke syfer werd is:</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.4">` +
        `<li>Die ${pu('4')} is in die Honderdduisende-kolom → sy waarde is ${pu('400 000')}</li>` +
        `<li>Die ${re('5')} is in die Tienduisende-kolom → sy waarde is ${re('50 000')}</li>` +
        `<li>Die ${or('3')} is in die Duisende-kolom → sy waarde is ${or('3 000')}</li>` +
        `<li>Die ${ye('2')} is in die Honderde-kolom → sy waarde is ${ye('200')}</li>` +
        `<li>Die ${gr('7')} is in die Tiene-kolom → sy waarde is ${gr('70')}</li>` +
        `<li>Die ${bl('6')} is in die Ene-kolom → sy waarde is ${bl('6')}</li>` +
        `</ul>` +
        `<p style="margin-top:18px">Ons kan dit in <strong>uitgebreide notasie</strong> skryf — die getal opbreek om die waarde van elke syfer te toon:</p>` +
        `<p style="margin-top:10px;font-size:1.05em;padding:10px 0">453 276 &nbsp;=&nbsp; ${pu('400 000')} &nbsp;+&nbsp; ${re('50 000')} &nbsp;+&nbsp; ${or('3 000')} &nbsp;+&nbsp; ${ye('200')} &nbsp;+&nbsp; ${gr('70')} &nbsp;+&nbsp; ${bl('6')}</p>`,
      workedExamples: [
        {
          question: 'Skryf 806 054 in ʼn plekwaardetabel en in uitgebreide notasie. Wys elke stap.',
          answer:
            `${pu('800 000')} + ${re('0')} + ${or('6 000')} + ${ye('0')} + ${gr('50')} + ${bl('4')}`,
          steps: [
            `Plaas elke syfer van 806 054 in die korrekte kolom:<br><br>` +
            SMALL_HEADER + tableRow(['8', '0', '6', '0', '5', '4'], true),

            `${pu('8')} is in die Honderdduisende-kolom → sy waarde is ${pu('800 000')}.`,

            `${re('0')} is in die Tienduisende-kolom → sy waarde is ${re('0')} (daar is geen tienduisende in hierdie getal nie).`,

            `${or('6')} is in die Duisende-kolom → sy waarde is ${or('6 000')}.`,

            `${ye('0')} is in die Honderde-kolom → sy waarde is ${ye('0')} (daar is geen honderde in hierdie getal nie).`,

            `${gr('5')} is in die Tiene-kolom → sy waarde is ${gr('50')}.`,

            `${bl('4')} is in die Ene-kolom → sy waarde is ${bl('4')}.`,

            `Skryf in uitgebreide notasie: ${pu('800 000')} + ${re('0')} + ${or('6 000')} + ${ye('0')} + ${gr('50')} + ${bl('4')} = 806 054.`,
          ],
        },
        {
          question: 'Wat is die waarde van die syfer 7 in 374 812?',
          answer: `Die waarde van 7 is ${re('70 000')}`,
          steps: [
            `<strong>Stap 1 — Plaas 374 812 in die plekwaardetabel om te sien waar die 7 sit:</strong><br><br>` +
            SMALL_HEADER + tableRow(['3', '7', '4', '8', '1', '2'], true),

            `<strong>Stap 2 — Lees die kolom af.</strong> Die syfer ${re('7')} is in die ${re('Tienduisende')}-kolom.`,

            `<strong>Stap 3 — Werk die waarde uit.</strong> ʼn Syfer in die Tienduisende-kolom is werd syfer × 10 000. Dus ${re('7')} × 10 000 = ${re('70 000')}.`,

            `<strong>Antwoord:</strong> Die waarde van die syfer 7 in 374 812 is ${re('70 000')}.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Plekwaardetabel wat 453 276 toon met elke syfer kleur-gekodeer in sy kolom — honderdduisende pers, tienduisende rooi, duisende oranje, honderde geel, tiene groen, ene blou',
      videoPlaceholder:
        'Kort video wat die plekwaarde van 6-syfergetalle verduidelik met behulp van ʼn kleur-gekodeerde plekwaardetabel',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — TEL VORENTOE EN TERUGWAARTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-forwards-backwards',
      title: 'Tel Vorentoe en Terugwaarts',
      icon: '↔️',
      explanation:
        `<p>In Graad 5 tel ons in <strong>groter intervalle</strong> as Graad 4. ʼn <span style="color:#dc2626;font-weight:700">interval</span> is die grootte van die sprong tussen getalle. Elke nuwe getal in die <span style="color:#2563eb;font-weight:700">patroon</span> word gevind deur dieselfde interval by te tel (vorentoe tel) of af te trek (terugwaarts tel).</p>` +
        `<p style="margin-top:16px"><strong>Ons tel in hierdie intervalle:</strong></p>` +
        `<div style="margin-top:12px;padding:14px 18px;background:#eff6ff;border-radius:10px;border:2px solid #bfdbfe">` +
        `<p style="font-weight:700;margin-bottom:8px;color:#0f1f3d">Hersiening vanaf Graad 4</p>` +
        `<ul style="margin-left:20px;list-style:disc;line-height:2.6">` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">2e</span>: <span style="color:#2563eb;font-weight:700">2, 4, 6, 8, 10, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">3e</span>: <span style="color:#2563eb;font-weight:700">3, 6, 9, 12, 15, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">4e</span>: <span style="color:#2563eb;font-weight:700">4, 8, 12, 16, 20, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">5e</span>: <span style="color:#2563eb;font-weight:700">5, 10, 15, 20, 25, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">10e</span>: <span style="color:#2563eb;font-weight:700">10, 20, 30, 40, 50, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">100e</span>: <span style="color:#2563eb;font-weight:700">100, 200, 300, 400, 500, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">1 000e</span>: <span style="color:#2563eb;font-weight:700">1 000, 2 000, 3 000, 4 000, 5 000, …</span></li>` +
        `</ul>` +
        `</div>` +
        `<div style="margin-top:14px;padding:14px 18px;background:#fef2f2;border-radius:10px;border:2px solid #fca5a5">` +
        `<p style="font-weight:700;margin-bottom:8px;color:#dc2626">Nuut in Graad 5</p>` +
        `<ul style="margin-left:20px;list-style:disc;line-height:2.6">` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">10 000e</span>: <span style="color:#2563eb;font-weight:700">10 000, 20 000, 30 000, 40 000, 50 000, …</span></li>` +
        `<li>Tel in <span style="color:#dc2626;font-weight:700">100 000e</span>: <span style="color:#2563eb;font-weight:700">100 000, 200 000, 300 000, 400 000, 500 000, …</span></li>` +
        `</ul>` +
        `</div>` +
        `<p style="margin-top:16px">Om ʼn patroon voort te sit, vind eers die <span style="color:#dc2626;font-weight:700">interval</span> — trek enige term af van die een daarna. Tel of trek dan daardie <span style="color:#dc2626;font-weight:700">interval</span> steeds by of af om die volgende getalle in die <span style="color:#2563eb;font-weight:700">patroon</span> te kry.</p>`,
      workedExamples: [
        {
          question: 'Tel vorentoe in 10 000e vanaf 30 000. Skryf die volgende 5 getalle.',
          answer:
            `${bl('40 000')}, ${bl('50 000')}, ${bl('60 000')}, ${bl('70 000')}, ${bl('80 000')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die interval.</strong> Ons tel vorentoe in <span style="color:#dc2626;font-weight:700">10 000e</span>, dus is die interval <span style="color:#dc2626;font-weight:700">+10 000</span>.`,
            `<strong>Stap 2 — Tel die interval by elke term:</strong><br>30 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">40 000</span>`,
            `40 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">50 000</span>`,
            `50 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">60 000</span>`,
            `60 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">70 000</span>`,
            `70 000 + <span style="color:#dc2626;font-weight:700">10 000</span> = <span style="color:#2563eb;font-weight:700">80 000</span>`,
            `<strong>Antwoord: </strong><span style="color:#2563eb;font-weight:700">40 000, 50 000, 60 000, 70 000, 80 000</span>`,
          ],
        },
        {
          question: 'Tel terugwaarts in 100 000e vanaf 700 000. Skryf die volgende 4 getalle.',
          answer:
            `${bl('600 000')}, ${bl('500 000')}, ${bl('400 000')}, ${bl('300 000')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die interval.</strong> Ons tel terugwaarts in <span style="color:#dc2626;font-weight:700">100 000e</span>, dus is die interval <span style="color:#dc2626;font-weight:700">−100 000</span>.`,
            `<strong>Stap 2 — Trek die interval van elke term af:</strong><br>700 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">600 000</span>`,
            `600 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">500 000</span>`,
            `500 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">400 000</span>`,
            `400 000 − <span style="color:#dc2626;font-weight:700">100 000</span> = <span style="color:#2563eb;font-weight:700">300 000</span>`,
            `<strong>Antwoord: </strong><span style="color:#2563eb;font-weight:700">600 000, 500 000, 400 000, 300 000</span>`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — GETALLE VOORSTEL OP ʼN GETALLELYN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'number-line',
      title: 'Getalle Voorstel op ʼn Getallelyn',
      icon: '📏',
      explanation:
        `<p>Groot getalle kan op ʼn <strong>getallelyn</strong> gewys word. ʼn Getallelyn het <span style="color:#2563eb;font-weight:700">gemerkte intervalle</span> wat op gelyke afstande van mekaar geplaas is. Om ʼn getal te plaas wat tussen twee merke val, <strong>skat</strong> jy sy <span style="color:#16a34a;font-weight:700">posisie</span> deur uit te werk hoe ver dit tussen daardie twee gemerkte intervalle sit.</p>` +
        `<p style="margin-top:16px"><strong>Hoe om ʼn getal op ʼn getallelyn te plaas:</strong></p>` +
        `<ol style="margin-top:10px;margin-left:20px;list-style:decimal;line-height:2.4">` +
        `<li>Vind die twee naaste <span style="color:#2563eb;font-weight:700">gemerkte intervalle</span> aan weerskante van jou getal.</li>` +
        `<li>Werk uit hoe ver jou getal van elk van daardie twee merke is.</li>` +
        `<li>Merk sy <span style="color:#16a34a;font-weight:700">geskatte posisie</span> in die regte plek tussen die twee merke.</li>` +
        `</ol>` +
        `<p style="margin-top:14px">ʼn Nuttige kortpad: as jou getal <strong>presies halfpad</strong> tussen twee merke is, plaas dit reg in die middel van daardie gaping. Die halfpadpunt tussen twee getalle word gevind deur hulle bymekaar te tel en deur 2 te deel.</p>`,
      workedExamples: [
        {
          question: 'ʼn Getallelyn gaan van 0 na 100 000 in intervalle van 10 000. Waar sit 65 000?',
          answer:
            `${gr('65 000')} sit presies halfpad tussen ${bl('60 000')} en ${bl('70 000')}`,
          steps: [
            `<strong>Stap 1 — Vind die naaste gemerkte intervalle.</strong> Die <span style="color:#2563eb;font-weight:700">gemerkte intervalle</span> op hierdie getallelyn is 0, 10 000, 20 000, 30 000, … 60 000, 70 000, … 100 000. Die getal 65 000 val tussen <span style="color:#2563eb;font-weight:700">60 000</span> en <span style="color:#2563eb;font-weight:700">70 000</span>.`,
            `<strong>Stap 2 — Vind die halfpadpunt.</strong> Halfpad tussen <span style="color:#2563eb;font-weight:700">60 000</span> en <span style="color:#2563eb;font-weight:700">70 000</span>:<br>(60 000 + 70 000) ÷ 2 = 130 000 ÷ 2 = <span style="color:#16a34a;font-weight:700">65 000</span>.`,
            `<strong>Stap 3 — Trek ʼn gevolgtrekking.</strong> Omdat 65 000 presies gelyk is aan die halfpadpunt, sit dit reg in die middel van die gaping.`,
            `<strong>Antwoord:</strong> <span style="color:#16a34a;font-weight:700">65 000</span> sit presies halfpad tussen <span style="color:#2563eb;font-weight:700">60 000</span> en <span style="color:#2563eb;font-weight:700">70 000</span>.`,
          ],
        },
        {
          question: 'ʼn Getallelyn gaan van 40 000 na 50 000 in intervalle van 1 000. Waar sit 46 500?',
          answer:
            `${gr('46 500')} sit presies halfpad tussen ${bl('46 000')} en ${bl('47 000')}`,
          steps: [
            `<strong>Stap 1 — Vind die naaste gemerkte intervalle.</strong> Die <span style="color:#2563eb;font-weight:700">gemerkte intervalle</span> is 40 000, 41 000, 42 000, … 46 000, 47 000, … 50 000. Die getal 46 500 val tussen <span style="color:#2563eb;font-weight:700">46 000</span> en <span style="color:#2563eb;font-weight:700">47 000</span>.`,
            `<strong>Stap 2 — Vind die halfpadpunt.</strong> Halfpad tussen <span style="color:#2563eb;font-weight:700">46 000</span> en <span style="color:#2563eb;font-weight:700">47 000</span>:<br>(46 000 + 47 000) ÷ 2 = 93 000 ÷ 2 = <span style="color:#16a34a;font-weight:700">46 500</span>.`,
            `<strong>Stap 3 — Trek ʼn gevolgtrekking.</strong> Omdat 46 500 presies gelyk is aan die halfpadpunt, sit dit reg in die middel van die gaping.`,
            `<strong>Antwoord:</strong> <span style="color:#16a34a;font-weight:700">46 500</span> sit presies halfpad tussen <span style="color:#2563eb;font-weight:700">46 000</span> en <span style="color:#2563eb;font-weight:700">47 000</span>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Getallelyn van 0 tot 100 000 in intervalle van 10 000 met 65 000 gemerk halfpad tussen 60 000 en 70 000',
      videoPlaceholder:
        'Kort video wat wys hoe om groot getalle op ʼn getallelyn te plaas deur die naaste intervalmerke te vind en die posisie te skat',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK, ORDEN EN AFRONDING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-rounding',
      title: 'Vergelyk, Orden en Afronding',
      icon: '⚖️',
      explanation:
        `<p>Om twee getalle te <strong>vergelyk</strong>, begin altyd by die <strong>hoogste plekwaardekolom</strong> en werk regs, een kolom op ʼn slag, totdat jy twee syfers vind wat verskil. Dit is die <strong>bepalende kolom</strong>. Ons wys die bepalende syfer in <span style="color:#dc2626;font-weight:700">rooi</span> en gelyke syfers wat reeds nagegaan is in <span style="color:#2563eb;font-weight:700">blou</span>.</p>` +
        `<p style="margin-top:14px">Gebruik hierdie simbole om jou antwoord te skryf:</p>` +
        `<ul style="margin-top:8px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li><strong>&lt;</strong> &nbsp;beteken <strong>kleiner as</strong> &nbsp;— die oop mond wys altyd na die groter getal</li>` +
        `<li><strong>&gt;</strong> &nbsp;beteken <strong>groter as</strong></li>` +
        `<li><strong>=</strong> &nbsp;beteken <strong>gelyk aan</strong></li>` +
        `</ul>` +
        `<p style="margin-top:16px"><strong>Om ʼn lys getalle van kleinste na grootste te orden:</strong></p>` +
        `<p style="margin-top:8px"><strong>Stap 1</strong> — Orden volgens aantal syfers. Minder syfers = kleiner getal. ʼn 4-syfergetal is altyd kleiner as ʼn 5-syfergetal.</p>` +
        `<p style="margin-top:6px"><strong>Stap 2</strong> — Getalle met dieselfde aantal syfers: vergelyk vanaf die hoogste kolom. Vind die bepalende kolom om hulle te rangskik.</p>` +
        `<div style="margin-top:24px;padding-top:20px;border-top:2px solid #e2e8f0">` +
        `<p style="font-size:1.05em;font-weight:700;color:#0f1f3d">Afronding</p>` +
        `<p style="margin-top:10px">Dieselfde reël van Graad 4 geld vir groter getalle. Vind die <strong>bepalende syfer</strong> — die syfer <em>onmiddellik regs</em> van die kolom waarna jy afrond.</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Bepalende syfer <strong>0 – 4</strong> → <strong>rond af</strong> (die afrondingskolom bly dieselfde)</li>` +
        `<li>Bepalende syfer <strong>5 – 9</strong> → <strong>rond op</strong> (tel 1 by die afrondingskolom)</li>` +
        `<li>Vervang alle syfers regs van die afrondingskolom met <strong>0</strong></li>` +
        `</ul>` +
        `<p style="margin-top:14px">Die bepalende syfer word gewys in die kleur van sy plekwaardekolom:</p>` +
        `<ul style="margin-top:8px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Naaste <strong>1 000</strong> → kyk na die <span style="color:#ca8a04;font-weight:700">honderde-syfer (geel)</span></li>` +
        `<li>Naaste <strong>10 000</strong> → kyk na die <span style="color:#ea580c;font-weight:700">duisende-syfer (oranje)</span></li>` +
        `</ul>` +
        `</div>`,
      workedExamples: [
        // ── UV3: Vergelyk 74 382 en 74 529 ────────────────────────────────────
        {
          question: 'Vergelyk 74 382 en 74 529. Watter is groter? Skryf jou antwoord met &lt; of &gt;.',
          answer:
            `74 529 is groter. &nbsp; <span style="color:#2563eb;font-weight:700">74</span> <span style="color:#dc2626;font-weight:700">3</span>82 &lt; <span style="color:#2563eb;font-weight:700">74</span> <span style="color:#dc2626;font-weight:700">5</span>29`,
          steps: [
            `<strong>Stap 1 — Tel die syfers:</strong> 74 382 het 5 syfers en 74 529 het 5 syfers. Dieselfde aantal syfers — vergelyk vanaf die hoogste kolom.`,
            `<strong>Stap 2 — Tienduisende:</strong> ${bl('7')}4 382 vs ${bl('7')}4 529. Beide het ${bl('7')} — gelyk. Beweeg regs.`,
            `<strong>Stap 3 — Duisende:</strong> ${bl('7')}${bl('4')} 382 vs ${bl('7')}${bl('4')} 529. Beide het ${bl('4')} — gelyk. Beweeg regs.`,
            `<strong>Stap 4 — Honderde (bepalende kolom):</strong> ${bl('7')}${bl('4')} ${re('3')}82 vs ${bl('7')}${bl('4')} ${re('5')}29. Die syfers is ${re('3')} en ${re('5')}. Aangesien ${re('3')} &lt; ${re('5')}, is die getal 74 382 kleiner.`,
            `<strong>Antwoord:</strong> 74 529 is groter. Skryf as: ${bl('74')} ${re('3')}82 &lt; ${bl('74')} ${re('5')}29.`,
          ],
        },

        // ── UV4: Orden van kleinste na grootste ───────────────────────────────
        {
          question: 'Orden van kleinste na grootste: 52 341, &nbsp;9 876, &nbsp;52 099, &nbsp;100 452.',
          answer: '9 876 &nbsp; &lt; &nbsp; 52 099 &nbsp; &lt; &nbsp; 52 341 &nbsp; &lt; &nbsp; 100 452',
          steps: [
            `<strong>Stap 1 — Tel die syfers in elke getal:</strong><br>• 9 876 → 4 syfers (minste syfers = kleinste getal)<br>• 52 341 → 5 syfers<br>• 52 099 → 5 syfers<br>• 100 452 → 6 syfers (meeste syfers = grootste getal)`,
            `<strong>Stap 2 — Plaas die 4-syfer- en 6-syfergetalle:</strong> 9 876 is kleinste en 100 452 is grootste. Die twee 5-syfergetalle (52 341 en 52 099) sit tussenin.`,
            `<strong>Stap 3 — Vergelyk die twee 5-syfergetalle:</strong><br>52 341 vs 52 099.<br>Tienduisende: ${bl('5')} vs ${bl('5')} — gelyk. Beweeg regs.<br>Duisende: ${bl('5')}${bl('2')} vs ${bl('5')}${bl('2')} — gelyk. Beweeg regs.<br>Honderde: ${bl('52')} ${re('3')}41 vs ${bl('52')} ${re('0')}99. Die syfers is ${re('3')} en ${re('0')}. Aangesien ${re('0')} &lt; ${re('3')}, is die getal 52 099 kleiner.`,
            `<strong>Antwoord:</strong> 9 876 &nbsp;&lt;&nbsp; 52 099 &nbsp;&lt;&nbsp; 52 341 &nbsp;&lt;&nbsp; 100 452.`,
          ],
        },

        // ── UV5: Rond 47 836 af na naaste 1 000 ───────────────────────────────
        {
          question: 'Rond 47 836 af na die naaste 1 000.',
          answer: '48 000',
          steps: [
            `<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 1 000, dus kyk ons na die syfer een plek regs — die ${ye('honderde-syfer')}. In 47 836 is die honderde-syfer ${ye('8')}.`,
            `<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is ${ye('8')}. Omdat 8 5 of meer is, <strong>rond ons op</strong> — tel 1 by die duisende-syfer.`,
            `<strong>Stap 3 — Bereken.</strong> Die duisende-syfer is 7. Tel 1 by: 7 + 1 = 8. Vervang alle syfers regs van die duisende-kolom met 0.`,
            `<strong>Antwoord: 48 000.</strong>`,
          ],
        },

        // ── UV6: Rond 234 500 af na naaste 10 000 ─────────────────────────────
        {
          question: 'Rond 234 500 af na die naaste 10 000.',
          answer: '230 000',
          steps: [
            `<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 10 000, dus kyk ons na die syfer een plek regs — die ${or('duisende-syfer')}. In 234 500 is die duisende-syfer ${or('4')}.`,
            `<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is ${or('4')}. Omdat 4 kleiner as 5 is, <strong>rond ons af</strong> — die tienduisende-syfer bly dieselfde.`,
            `<strong>Stap 3 — Bereken.</strong> Die tienduisende-syfer bly as 3. Vervang alle syfers regs van die tienduisende-kolom met 0.`,
            `<strong>Antwoord: 230 000.</strong>`,
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om groot getalle tot by 100 000 te vergelyk, te orden en af te rond met behulp van plekwaarde',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VEELVOUDE EN FAKTORE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-factors',
      title: 'Veelvoude en Faktore',
      icon: '🧮',
      explanation:
        `<p>ʼn <strong>Veelvoud</strong> is die resultaat van ʼn getal met enige heelgetal te vermenigvuldig. Veelvoude is die getalle wat jy sê wanneer jy in ʼn tafel tel.</p>` +
        `<p style="margin-top:12px">Veelvoude van ${re('6')}:</p>` +
        `<p style="margin-top:6px;padding:10px 16px;background:#eff6ff;border-radius:8px;font-size:1.02em;line-height:2">${bl('6')}, ${bl('12')}, ${bl('18')}, ${bl('24')}, ${bl('30')}, ${bl('36')}, …</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>ʼn Getal het <strong>oneindig baie</strong> veelvoude — die lys eindig nooit.</li>` +
        `<li>Die <strong>eerste veelvoud</strong> van enige getal is die getal self (${re('6')} × 1 = ${bl('6')}).</li>` +
        `</ul>` +
        `<div style="margin-top:22px;padding-top:18px;border-top:2px solid #e2e8f0">` +
        `<p>ʼn <strong>Faktor</strong> van ʼn getal is ʼn getal wat <strong>presies sonder ʼn res</strong> daarin deel.</p>` +
        `<p style="margin-top:12px">Faktore van ${re('24')}:</p>` +
        `<p style="margin-top:6px;padding:10px 16px;background:#f0fdf4;border-radius:8px;font-size:1.02em;line-height:2">${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('8')}, ${gr('12')}, ${gr('24')}</p>` +
        `<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">` +
        `<li>Elke getal het ten minste <strong>twee faktore</strong>: 1 en homself.</li>` +
        `<li>Om alle faktore te vind: deel die getal deur 1, 2, 3, 4, … in volgorde en skryf elke getal neer wat <strong>sonder ʼn res</strong> deel.</li>` +
        `</ul>` +
        `</div>`,
      workedExamples: [
        // ── UV7: Faktore van 36 ───────────────────────────────────────────────
        {
          question: 'Vind al die faktore van 36.',
          answer:
            `Faktore van ${re('36')}: ${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('9')}, ${gr('12')}, ${gr('18')}, ${gr('36')}`,
          steps: [
            `<strong>Deel ${re('36')} deur 1:</strong> &nbsp;36 ÷ 1 = 36 presies ✓ &nbsp;→ ${gr('1')} en ${gr('36')} is albei faktore (1 × 36 = 36).`,
            `<strong>Deel ${re('36')} deur 2:</strong> &nbsp;36 ÷ 2 = 18 presies ✓ &nbsp;→ ${gr('2')} en ${gr('18')} is albei faktore (2 × 18 = 36).`,
            `<strong>Deel ${re('36')} deur 3:</strong> &nbsp;36 ÷ 3 = 12 presies ✓ &nbsp;→ ${gr('3')} en ${gr('12')} is albei faktore (3 × 12 = 36).`,
            `<strong>Deel ${re('36')} deur 4:</strong> &nbsp;36 ÷ 4 = 9 presies ✓ &nbsp;→ ${gr('4')} en ${gr('9')} is albei faktore (4 × 9 = 36).`,
            `<strong>Deel ${re('36')} deur 5:</strong> &nbsp;36 ÷ 5 = 7,2 ✗ &nbsp;→ 5 is nie ʼn faktor nie (daar is ʼn res).`,
            `<strong>Deel ${re('36')} deur 6:</strong> &nbsp;36 ÷ 6 = 6 presies ✓ &nbsp;→ ${gr('6')} is ʼn faktor. Ons stop hier omdat 6 × 6 = 36 — ons het nou al die faktore gepaar.`,
            `<strong>Antwoord — al die faktore van ${re('36')} in volgorde:</strong> ${gr('1')}, ${gr('2')}, ${gr('3')}, ${gr('4')}, ${gr('6')}, ${gr('9')}, ${gr('12')}, ${gr('18')}, ${gr('36')}.`,
          ],
        },

        // ── UV8: Is 7 ʼn faktor van 56? ────────────────────────────────────────
        {
          question: 'Is 7 ʼn faktor van 56?',
          answer: `Ja — ${gr('7')} is ʼn faktor van ${re('56')} omdat 56 ÷ 7 = 8 sonder ʼn res.`,
          steps: [
            `<strong>Stap 1 — Deel ${re('56')} deur 7:</strong> &nbsp;56 ÷ 7 = 8. Kontroleer: 7 × 8 = 56 presies ✓ — geen res nie.`,
            `<strong>Stap 2 — Trek ʼn gevolgtrekking:</strong> Omdat ${re('56')} ÷ ${gr('7')} geen res laat nie, deel ${gr('7')} presies in ${re('56')}.`,
            `<strong>Antwoord:</strong> Ja, ${gr('7')} is ʼn faktor van ${re('56')}. Ons kan dit ook skryf as ${gr('7')} × 8 = ${re('56')}.`,
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — PRIEMGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-numbers',
      title: 'Priemgetalle',
      icon: '⭐',
      explanation:
        `<p>ʼn <strong>Priemgetal</strong> is ʼn getal met <strong>presies 2 faktore</strong> — 1 en homself. Dit is al. Niks anders deel presies daarin nie.</p>` +
        `<p style="margin-top:12px">Voorbeelde van priemgetalle: ${bl('2')}, ${bl('3')}, ${bl('5')}, ${bl('7')}, ${bl('11')}, ${bl('13')}</p>` +
        `<p style="margin-top:16px">ʼn <strong>Saamgestelde getal</strong> het <strong>meer as 2 faktore</strong> — ander getalle deel ook presies daarin.</p>` +
        `<p style="margin-top:10px">Voorbeelde van saamgestelde getalle: ${re('4')} (faktore: 1, 2, 4) &nbsp;·&nbsp; ${re('9')} (faktore: 1, 3, 9) &nbsp;·&nbsp; ${re('15')} (faktore: 1, 3, 5, 15)</p>` +
        `<p style="margin-top:16px">Die getal <strong>1</strong> is <strong>nie priem of saamgesteld nie</strong>. Dit het net een faktor (homself), dus pas dit by geen van die twee definisies nie.</p>` +
        `<p style="margin-top:20px;font-weight:700;color:#0f1f3d">Alle priemgetalle tot en met 100:</p>` +
        `<p style="margin-top:8px;padding:12px 16px;background:#eff6ff;border-radius:8px;line-height:2.4;font-size:0.97em">${[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97].map(n => bl(String(n))).join(', ')}</p>` +
        `<p style="margin-top:16px">💡 ${bl('2')} is die <strong>enigste ewe priemgetal</strong>. Elke ander ewe getal het 2 as ʼn faktor — wat dit ten minste 3 faktore gee — dus is alle ander ewe getalle saamgesteld.</p>`,
      workedExamples: [
        // ── UV9: Is 47 priem? ─────────────────────────────────────────────────
        {
          question: 'Is 47 ʼn priemgetal?',
          answer: `Ja — ${bl('47')} is ʼn priemgetal. Sy enigste faktore is 1 en 47.`,
          steps: [
            `<strong>Stap 1 — Wat om na te gaan:</strong> ʼn Priemgetal het geen faktore tussen 2 en homself nie. Ons hoef net deelgetalle tot by die vierkantswortel van 47 te toets (wat ongeveer 6,8 is), dus toets ons 2, 3, 5 en 7.`,
            `<strong>Stap 2 — Toets elke deelgetal:</strong><br>47 ÷ 2 = 23,5 &nbsp;✗ (nie presies nie)<br>47 ÷ 3 = 15,67 ✗ (nie presies nie)<br>47 ÷ 5 = 9,4 &nbsp;&nbsp;✗ (nie presies nie)<br>47 ÷ 7 = 6,7 &nbsp;&nbsp;✗ (nie presies nie)`,
            `<strong>Stap 3 — Trek ʼn gevolgtrekking:</strong> Geen getal tussen 2 en 7 deel presies in 47 nie. So het 47 geen faktore behalwe 1 en 47 nie.`,
            `<strong>Antwoord:</strong> Ja, ${bl('47')} is ʼn priemgetal — sy enigste faktore is 1 en 47.`,
          ],
        },

        // ── UV10: Is 51 priem? ────────────────────────────────────────────────
        {
          question: 'Is 51 ʼn priemgetal?',
          answer: `Nee — ${re('51')} is ʼn saamgestelde getal. Dit het 4 faktore: 1, 3, 17 en 51.`,
          steps: [
            `<strong>Stap 1 — Toets deelgetalle vanaf 2:</strong> Gaan na of enige getal van 2 af opwaarts presies in 51 deel.`,
            `<strong>Stap 2 — Toets 3:</strong> 51 ÷ 3 = 17 presies ✓ — 3 deel in ${re('51')} sonder ʼn res.`,
            `<strong>Stap 3 — Trek ʼn gevolgtrekking:</strong> Omdat ${re('51')} ʼn faktor het buiten 1 en homself, kan dit nie priem wees nie. Sy volle lys faktore is: 1, 3, 17, 51 — dit is 4 faktore.`,
            `<strong>Antwoord:</strong> Nee, ${re('51')} is <strong>nie</strong> ʼn priemgetal nie. Dit is ʼn <strong>saamgestelde getal</strong>.`,
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Rooster van getalle van 1 tot 100 met priemgetalle uitgelig in blou en saamgestelde getalle in ʼn ligter kleur wat die verspreiding van priemgetalle tot by 100 toon',
      videoPlaceholder:
        'Kort video wat veelvoude, faktore en priemgetalle verduidelik met voorbeelde wat wys hoe om al die faktore van ʼn getal te vind',
    },
  ],

  topicPractice: [

    // ── Afdeling 1: Plekwaarde tot en met 6 Syfers ────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Skryf die getal 304 052 in uitgebreide notasie.',
      correctAnswer: '300000+4000+50+2',
      explanation:
        '304 052 in uitgebreide notasie:\n\n' +
        '• 3 is in die Honderdduisende-kolom → 300 000\n' +
        '• 0 is in die Tienduisende-kolom → 0 (nulterme word weggelaat)\n' +
        '• 4 is in die Duisende-kolom → 4 000\n' +
        '• 0 is in die Honderde-kolom → 0 (nulterme word weggelaat)\n' +
        '• 5 is in die Tiene-kolom → 50\n' +
        '• 2 is in die Ene-kolom → 2\n\n' +
        '304 052 = 300 000 + 4 000 + 50 + 2',
      answer: '300 000 + 4 000 + 50 + 2',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Wat is die waarde van die gegewe syfer in elke getal?\n\n' +
        'a) Die syfer 8 in 384 621\n' +
        'b) Die syfer 5 in 450 093\n' +
        'c) Die syfer 2 in 726 415',
      parts: [
        {
          label: 'a)',
          correctAnswer: '80000',
          explanation:
            'In 384 621 is die syfer 8 in die Tienduisende-kolom.\n' +
            'Waarde = 8 × 10 000 = 80 000',
        },
        {
          label: 'b)',
          correctAnswer: '50000',
          explanation:
            'In 450 093 is die syfer 5 in die Tienduisende-kolom.\n' +
            'Waarde = 5 × 10 000 = 50 000',
        },
        {
          label: 'c)',
          correctAnswer: '20000',
          explanation:
            'In 726 415 is die syfer 2 in die Tienduisende-kolom.\n' +
            'Waarde = 2 × 10 000 = 20 000',
        },
      ],
      answer: 'a) 80 000\nb) 50 000\nc) 20 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getal het 4 honderdduisende, 0 tienduisende, 7 duisende, 3 honderde, 0 tiene en 9 ene.\n\n' +
        'a) Skryf die getal\n' +
        'b) Skryf dit in uitgebreide notasie\n' +
        'c) Wat is die waarde van die syfer 7?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '407309',
          explanation:
            'Plaas elke deel in sy kolom:\n' +
            '• 4 honderdduisende → 400 000\n' +
            '• 0 tienduisende → 0\n' +
            '• 7 duisende → 7 000\n' +
            '• 3 honderde → 300\n' +
            '• 0 tiene → 0\n' +
            '• 9 ene → 9\n\n' +
            'Lees die kolomme van links na regs: 407 309',
        },
        {
          label: 'b)',
          correctAnswer: '400000+7000+300+9',
          explanation:
            '407 309 = 400 000 + 0 + 7 000 + 300 + 0 + 9\n\n' +
            'Nulterme word weggelaat, dus is die uitgebreide notasie:\n' +
            '400 000 + 7 000 + 300 + 9',
        },
        {
          label: 'c)',
          correctAnswer: '7000',
          explanation:
            'Die syfer 7 is in die Duisende-kolom.\n' +
            'Waarde = 7 × 1 000 = 7 000',
        },
      ],
      answer: 'a) 407 309\nb) 400 000 + 7 000 + 300 + 9\nc) 7 000',
    },

    // ── Afdeling 2: Vergelyk, Orden en Afronding ────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Rond 63 847 af na die naaste 1 000.',
      correctAnswer: '64000',
      explanation:
        'Afronding van 63 847 na die naaste 1 000:\n\n' +
        'Stap 1: Vind die bepalende syfer. Afronding na die naaste 1 000 beteken ons kyk na die honderde-syfer. In 63 847 is die honderde-syfer 8.\n' +
        'Stap 2: 8 is 5 of meer → rond op.\n' +
        'Stap 3: Tel 1 by die duisende-syfer: 3 + 1 = 4. Vervang honderde, tiene en ene met 0.\n\n' +
        '63 847 → 64 000',
      answer: '64 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'a) Rond 284 632 af na die naaste 10 000\n' +
        'b) Rond 57 499 af na die naaste 100\n' +
        'c) Orden van kleinste na grootste: 43 218,  8 954,  43 098,  100 001',
      parts: [
        {
          label: 'a)',
          correctAnswer: '280000',
          explanation:
            'Afronding van 284 632 na die naaste 10 000:\n' +
            'Bepalende syfer = duisende-syfer = 4.\n' +
            '4 is kleiner as 5 → rond af.\n' +
            'Die tienduisende-syfer bly as 8. Vervang duisende, honderde, tiene en ene met 0.\n\n' +
            '284 632 → 280 000',
        },
        {
          label: 'b)',
          correctAnswer: '57500',
          explanation:
            'Afronding van 57 499 na die naaste 100:\n' +
            'Bepalende syfer = tiene-syfer = 9.\n' +
            '9 is 5 of meer → rond op.\n' +
            'Tel 1 by die honderde-syfer: 4 + 1 = 5. Vervang tiene en ene met 0.\n\n' +
            '57 499 → 57 500',
        },
        {
          label: 'c)',
          // "8 954, 43 098, 43 218, 100 001" → strip spaces/commas → "89544309843218100001"
          correctAnswer: '89544309843218100001',
          explanation:
            'Stap 1 — Tel die syfers:\n' +
            '• 8 954 het 4 syfers → kleinste\n' +
            '• 43 218 en 43 098 het elk 5 syfers\n' +
            '• 100 001 het 6 syfers → grootste\n\n' +
            'Stap 2 — Vergelyk die twee 5-syfergetalle (43 218 en 43 098):\n' +
            '• Tienduisende: 4 = 4 → gelyk, beweeg regs\n' +
            '• Duisende: 3 = 3 → gelyk, beweeg regs\n' +
            '• Honderde: 2 vs 0 → 0 is kleiner, dus 43 098 < 43 218\n\n' +
            'Orden van kleinste na grootste: 8 954,  43 098,  43 218,  100 001',
        },
      ],
      answer: 'a) 280 000\nb) 57 500\nc) 8 954, 43 098, 43 218, 100 001',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sipho sê 345 678 afgerond na die naaste 10 000 is 350 000.\n' +
        'Lerato sê dit is 340 000.\n\n' +
        'Wie is korrek? Wys jou werk.',
      answer:
        'Sipho is korrek. 345 678 afgerond na die naaste 10 000 is 350 000.\n\n' +
        'Stap 1: Afronding na die naaste 10 000, dus kyk na die bepalende syfer — die duisende-syfer.\n' +
        'In 345 678 is die duisende-syfer 5.\n\n' +
        'Stap 2: 5 is 5 of meer → rond op.\n\n' +
        'Stap 3: Tel 1 by die tienduisende-syfer: 4 + 1 = 5.\n' +
        'Vervang duisende, honderde, tiene en ene met 0.\n\n' +
        '345 678 → 350 000 ✓\n\n' +
        'Lerato het afgerond na onder (die tienduisende-syfer as 4 gehou), maar die bepalende syfer van 5 beteken ons moet altyd opgerond.',
    },

    // ── Afdeling 2: Tel Vorentoe en Terugwaarts ────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Tel vorentoe in 10 000e vanaf 20 000. Skryf die volgende 5 getalle.',
      correctAnswer: '3000040000500006000070000',
      explanation:
        'Begin by 20 000 en tel elke keer 10 000 by:\n\n' +
        '20 000 + 10 000 = 30 000\n' +
        '30 000 + 10 000 = 40 000\n' +
        '40 000 + 10 000 = 50 000\n' +
        '50 000 + 10 000 = 60 000\n' +
        '60 000 + 10 000 = 70 000\n\n' +
        'Die volgende 5 getalle is: 30 000, 40 000, 50 000, 60 000, 70 000',
      answer: '30 000, 40 000, 50 000, 60 000, 70 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Beantwoord die volgende:\n\n' +
        'a) Tel terugwaarts in 100 000e vanaf 600 000. Skryf die volgende 4 getalle.\n' +
        'b) Tel vorentoe in 10 000e vanaf 45 000. Skryf die volgende 4 getalle.\n' +
        'c) Watter getal kom voor 300 000 wanneer jy in 100 000e tel?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '500000400000300000200000',
          explanation:
            'Begin by 600 000 en trek elke keer 100 000 af:\n\n' +
            '600 000 − 100 000 = 500 000\n' +
            '500 000 − 100 000 = 400 000\n' +
            '400 000 − 100 000 = 300 000\n' +
            '300 000 − 100 000 = 200 000\n\n' +
            'Die volgende 4 getalle is: 500 000, 400 000, 300 000, 200 000',
        },
        {
          label: 'b)',
          correctAnswer: '55000650007500085000',
          explanation:
            'Begin by 45 000 en tel elke keer 10 000 by:\n\n' +
            '45 000 + 10 000 = 55 000\n' +
            '55 000 + 10 000 = 65 000\n' +
            '65 000 + 10 000 = 75 000\n' +
            '75 000 + 10 000 = 85 000\n\n' +
            'Die volgende 4 getalle is: 55 000, 65 000, 75 000, 85 000',
        },
        {
          label: 'c)',
          correctAnswer: '200000',
          explanation:
            'Wanneer jy in 100 000e tel, gaan die reeks: … 100 000, 200 000, 300 000, 400 000 …\n\n' +
            'Die getal wat voor 300 000 kom, is 200 000.\n\n' +
            'Kontroleer: 200 000 + 100 000 = 300 000 ✓',
        },
      ],
      answer: 'a) 500 000, 400 000, 300 000, 200 000\nb) 55 000, 65 000, 75 000, 85 000\nc) 200 000',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Patroon tel terugwaarts in 10 000e. Die 3de getal in die patroon is 470 000.\n\n' +
        'a) Wat is die 1ste getal?\n' +
        'b) Wat is die 6de getal?\n' +
        'c) Wat is die 10de getal?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '490000',
          explanation:
            'Die patroon tel terugwaarts in 10 000e. Om van die 3de term terug na die 1ste term te gaan, tel twee keer 10 000 by:\n\n' +
            '3de getal: 470 000\n' +
            '2de getal: 470 000 + 10 000 = 480 000\n' +
            '1ste getal: 480 000 + 10 000 = 490 000',
        },
        {
          label: 'b)',
          correctAnswer: '440000',
          explanation:
            'Begin by die 1ste getal (490 000) en trek vyf keer 10 000 af om by die 6de te kom:\n\n' +
            '1ste: 490 000 → 2de: 480 000 → 3de: 470 000\n' +
            '4de: 460 000 → 5de: 450 000 → 6de: 440 000',
        },
        {
          label: 'c)',
          correctAnswer: '400000',
          explanation:
            'Die 10de getal is 9 stappe onder die 1ste getal:\n\n' +
            '10de getal = 490 000 − (9 × 10 000)\n' +
            '= 490 000 − 90 000\n' +
            '= 400 000',
        },
      ],
      answer: 'a) 490 000\nb) 440 000\nc) 400 000',
    },

    // ── Afdeling 3: Getalle Voorstel op ʼn Getallelyn ──────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Getallelyn gaan van 0 na 100 000 in intervalle van 10 000. Tussen watter twee getalle sit 73 000?',
      correctAnswers: ['7000080000', '70000and80000', '70000to80000', '70000-80000'],
      correctAnswer: '7000080000',
      explanation:
        'Die gemerkte intervalle op hierdie getallelyn is: 0, 10 000, 20 000, … 70 000, 80 000, … 100 000.\n\n' +
        '73 000 val tussen 70 000 en 80 000 omdat:\n' +
        '70 000 < 73 000 < 80 000\n\n' +
        '73 000 is 3 000 bo 70 000 en 7 000 onder 80 000, dus sit dit nader aan die 70 000-merk.',
      answer: '70 000 en 80 000',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Getallelyn gaan van 50 000 na 60 000 in intervalle van 1 000.\n\n' +
        'a) Waar sit 54 500?\n' +
        'b) Watter getal is driekwart van die pad tussen 50 000 en 60 000?\n' +
        'c) Watter getal is halfpad tussen 57 000 en 58 000?',
      parts: [
        {
          label: 'a)',
          correctAnswers: ['5400055000', '54000and55000', '54000to55000', '54000-55000', 'halfwaybetween54000and55000', 'between54000and55000'],
          correctAnswer: '5400055000',
          explanation:
            'Die gemerkte intervalle rondom 54 500 is 54 000 en 55 000.\n\n' +
            'Halfpadpunt: (54 000 + 55 000) ÷ 2 = 54 500\n\n' +
            '54 500 sit presies halfpad tussen 54 000 en 55 000.',
        },
        {
          label: 'b)',
          correctAnswer: '57500',
          explanation:
            'Driekwart van die pad vanaf 50 000 na 60 000:\n\n' +
            'Afstand = 60 000 − 50 000 = 10 000\n' +
            '¾ van 10 000 = 7 500\n' +
            '50 000 + 7 500 = 57 500',
        },
        {
          label: 'c)',
          correctAnswer: '57500',
          explanation:
            'Halfpad tussen 57 000 en 58 000:\n\n' +
            '(57 000 + 58 000) ÷ 2 = 115 000 ÷ 2 = 57 500',
        },
      ],
      answer: 'a) Halfpad tussen 54 000 en 55 000\nb) 57 500\nc) 57 500',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getallelyn gaan van 200 000 na 300 000 in intervalle van 10 000.\n\n' +
        'a) Hoeveel intervalle is daar?\n' +
        'b) Waar sit 265 000?\n' +
        'c) Watter getal is twee derdes van die pad tussen 200 000 en 300 000?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '10',
          explanation:
            'Die aantal intervalle = (einde − begin) ÷ intervalgrootte\n\n' +
            '= (300 000 − 200 000) ÷ 10 000\n' +
            '= 100 000 ÷ 10 000\n' +
            '= 10 intervalle',
        },
        {
          label: 'b)',
          correctAnswers: ['260000270000', '260000and270000', '260000to270000', '260000-270000', 'halfwaybetween260000and270000', 'between260000and270000'],
          correctAnswer: '260000270000',
          explanation:
            'Die gemerkte intervalle rondom 265 000 is 260 000 en 270 000.\n\n' +
            'Halfpadpunt: (260 000 + 270 000) ÷ 2 = 265 000\n\n' +
            '265 000 sit presies halfpad tussen 260 000 en 270 000.',
        },
        {
          label: 'c)',
          correctAnswers: ['266667', '266666', '266500', '266000', '267000'],
          correctAnswer: '266667',
          explanation:
            'Twee derdes van die pad vanaf 200 000 na 300 000:\n\n' +
            'Afstand = 300 000 − 200 000 = 100 000\n' +
            '⅔ van 100 000 = 66 667 (afgerond na die naaste heelgetal)\n' +
            '200 000 + 66 667 = 266 667\n\n' +
            'Enige antwoord tussen 266 000 en 267 000 word aanvaar.',
        },
      ],
      answer: 'a) 10\nb) Halfpad tussen 260 000 en 270 000\nc) 266 667 (enige antwoord van 266 000 tot 267 000 word aanvaar)',
    },

    // ── Afdeling 3: Veelvoude en Faktore ────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Lys die eerste 5 veelvoude van 8.',
      correctAnswer: '816243240',
      explanation:
        'Veelvoude van 8 word gevind deur 8 met 1, 2, 3, 4, 5 te vermenigvuldig:\n\n' +
        '8 × 1 = 8\n' +
        '8 × 2 = 16\n' +
        '8 × 3 = 24\n' +
        '8 × 4 = 32\n' +
        '8 × 5 = 40\n\n' +
        'Eerste 5 veelvoude van 8: 8, 16, 24, 32, 40',
      answer: '8, 16, 24, 32, 40',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Beantwoord die volgende:\n\n' +
        'a) Lys al die faktore van 48\n' +
        'b) Is 9 ʼn faktor van 72?\n' +
        'c) Wat is die kleinste veelvoud van 7 wat groter is as 50?',
      parts: [
        {
          label: 'a)',
          correctAnswer: '12346812162448',
          explanation:
            'Faktore van 48 is getalle wat sonder ʼn res in 48 deel:\n\n' +
            '48 ÷ 1 = 48 ✓ → 1 en 48\n' +
            '48 ÷ 2 = 24 ✓ → 2 en 24\n' +
            '48 ÷ 3 = 16 ✓ → 3 en 16\n' +
            '48 ÷ 4 = 12 ✓ → 4 en 12\n' +
            '48 ÷ 5 = 9,6 ✗ (nie presies nie)\n' +
            '48 ÷ 6 = 8 ✓ → 6 en 8\n\n' +
            'Al die faktore van 48 in volgorde: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48',
        },
        {
          label: 'b)',
          correctAnswer: 'ja',
          explanation:
            '72 ÷ 9 = 8 presies — geen res nie.\n\n' +
            'Kontroleer: 9 × 8 = 72 ✓\n\n' +
            'Ja — 9 is ʼn faktor van 72.',
        },
        {
          label: 'c)',
          correctAnswer: '56',
          explanation:
            'Lys veelvoude van 7 totdat jy verby 50 gaan:\n\n' +
            '7 × 7 = 49 (nie groter as 50 nie)\n' +
            '7 × 8 = 56 ✓ (groter as 50)\n\n' +
            'Die kleinste veelvoud van 7 wat groter is as 50, is 56.',
        },
      ],
      answer: 'a) 1, 2, 3, 4, 6, 8, 12, 16, 24, 48\nb) Ja\nc) 56',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo sê 6 is ʼn faktor van 90 omdat 90 ÷ 6 = 14 res 6. Is hy korrek? Wys jou werk en lys al die faktore van 90.',
      answer:
        'Stap 1: Deel 90 deur 6\n90 ÷ 6 = 15 presies — daar is geen res nie.\n\n' +
        'Stap 2: Thabo het ʼn berekeningsfout gemaak.\n' +
        '6 × 14 = 84, en 90 − 84 = 6. Dus was Thabo se deling verkeerd.\n' +
        '6 × 15 = 90 presies ✓\n\n' +
        'Thabo is verkeerd in sy werk, maar sy gevolgtrekking is korrek — 6 IS ʼn faktor van 90.\n\n' +
        'Faktore van 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90',
    },

    // ── Afdeling 4: Priemgetalle ─────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Is 13 ʼn priemgetal? Skryf ja of nee en gee ʼn rede.',
      answer:
        'Ja — 13 is ʼn priemgetal.\n\n' +
        'ʼn Priemgetal het presies 2 faktore: 1 en homself.\n\n' +
        '13 ÷ 2 = 6,5 ✗,  13 ÷ 3 ≈ 4,3 ✗\n' +
        'Geen getal tussen 2 en 12 deel presies in 13 nie.\n\n' +
        'Faktore van 13: slegs 1 en 13. Dit is presies 2 faktore, dus is 13 priem.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Lys al die priemgetalle tussen 20 en 40.',
      correctAnswer: '23293137',
      explanation:
        'Toets elke onewe getal tussen 20 en 40:\n\n' +
        '21 = 3 × 7 ✗ (saamgesteld)\n' +
        '23: nie deelbaar deur 2, 3 of 5 nie ✓ — priem\n' +
        '25 = 5 × 5 ✗ (saamgesteld)\n' +
        '27 = 3 × 9 ✗ (saamgesteld)\n' +
        '29: nie deelbaar deur 2, 3 of 5 nie ✓ — priem\n' +
        '31: nie deelbaar deur 2, 3 of 5 nie ✓ — priem\n' +
        '33 = 3 × 11 ✗ (saamgesteld)\n' +
        '35 = 5 × 7 ✗ (saamgesteld)\n' +
        '37: nie deelbaar deur 2, 3 of 5 nie ✓ — priem\n' +
        '39 = 3 × 13 ✗ (saamgesteld)\n\n' +
        'Priemgetalle tussen 20 en 40: 23, 29, 31, 37',
      answer: '23, 29, 31, 37',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'Beantwoord die volgende:\n\n' +
        'b) Is 1 ʼn priemgetal? Verduidelik waarom of waarom nie.\n' +
        'c) Hoekom is 2 die enigste ewe priemgetal?',
      answer:
        'b) Nee — 1 is nie ʼn priemgetal nie.\n' +
        '1 het net een faktor: homself. ʼn Priemgetal moet presies 2 faktore hê (1 en homself). Aangesien 1 net een faktor het, pas dit nie by die definisie van priem nie.\n\n' +
        'c) 2 is die enigste ewe priemgetal omdat alle ander ewe getalle 2 as ʼn faktor het. Dit beteken hulle het ten minste 3 faktore (1, 2, en hulself), wat hulle saamgesteld maak.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato sê alle onewe getalle is priem. Is sy korrek? Gee twee voorbeelde om jou antwoord te ondersteun.',
      answer:
        'Nee — Lerato is verkeerd. Onewe getalle kan saamgesteld wees.\n\n' +
        'Voorbeeld 1: 9 = 3 × 3\nFaktore van 9: 1, 3, 9 (drie faktore) → 9 is onewe maar nie priem nie.\n\n' +
        'Voorbeeld 2: 15 = 3 × 5\nFaktore van 15: 1, 3, 5, 15 (vier faktore) → 15 is onewe maar nie priem nie.\n\n' +
        'Beide 9 en 15 is onewe getalle met meer as 2 faktore, dus is hulle saamgesteld, nie priem nie.',
    },

  ],

  scoreMessages: [
    { minScore: 35, message: 'Volpunte! Jy het Heelgetalle onder die knie.' },
    { minScore: 27, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het na en jy sal dit onder die knie hê.' },
    { minScore: 18, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer deeglik deur die studiegids en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Plekwaarde & uitgebreide notasie | 4-7 Telpatrone |
    // 8-10 Getallelynposisie | 11-14 Vergelyk/orden | 15-16 Afronding |
    // 17-19 Veelvoude/faktore/priemgetalle toegepaste redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'In die getal 384 726, wat is die waarde van die syfer 8?', checkMode: 'auto', correctAnswer: '80000', correctAnswers: ['80000', '80 000'], explanation: 'Die syfer 8 sit in die Tienduisende-kolom. Sy waarde is 8 × 10 000 = 80 000.' },
        { difficulty: 'Easy', question: 'Skryf 507 230 in uitgebreide notasie.', checkMode: 'auto', correctAnswer: '500000+7000+200+30', correctAnswers: ['500000+7000+200+30'], explanation: '5 is in die Honderdduisende-kolom (500 000), 0 is in die Tienduisende-kolom, 7 is in die Duisende-kolom (7 000), 2 is in die Honderde-kolom (200), 3 is in die Tiene-kolom (30), 0 is in die Ene-kolom. Nulterme word weggelaat: 507 230 = 500 000 + 7 000 + 200 + 30.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 6 honderdduisende, 2 tienduisende, 0 duisende, 0 honderde, 4 tiene en 1 eenheid. Skryf die getal.', checkMode: 'auto', correctAnswer: '620041', correctAnswers: ['620041', '620 041'], explanation: 'Plaas elke deel in sy kolom: 600 000 + 20 000 + 0 + 0 + 40 + 1 = 620 041.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getal is gemaak van 5 honderdduisende, 0 tienduisende, 7 duisende, 2 honderde, 0 tiene en 6 ene. Wat is die getal, en wat is die waarde van sy duisende-syfer?', checkMode: 'auto', correctAnswer: '5072067000', correctAnswers: ['5072067000', '507206 en 7000', '507 206, 7 000'], explanation: 'Bou die getal kolom vir kolom: 500 000 + 0 + 7 000 + 200 + 0 + 6 = 507 206. Die duisende-syfer is 7, dus is sy waarde 7 × 1 000 = 7 000.' },
        { difficulty: 'Easy', question: 'Tel vorentoe in 10 000e vanaf 240 000. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', correctAnswer: '250000260000270000280000', correctAnswers: ['250000260000270000280000'], explanation: 'Tel elke keer 10 000 by: 240 000 + 10 000 = 250 000, dan 260 000, 270 000, 280 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon lui: 15 000, 25 000, 35 000, ___. Wat is die ontbrekende getal?', checkMode: 'auto', correctAnswer: '45000', correctAnswers: ['45000', '45 000'], explanation: 'Die interval is 25 000 − 15 000 = 10 000. Gaan voort: 35 000 + 10 000 = 45 000.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 100 000e vanaf 850 000. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', correctAnswer: '750000650000550000450000', correctAnswers: ['750000650000550000450000'], explanation: 'Trek elke keer 100 000 af: 850 000 − 100 000 = 750 000, dan 650 000, 550 000, 450 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Ry tel terugwaarts in 10 000e. Sy 3de term is 560 000. Wat is die 1ste term van die ry?', checkMode: 'auto', correctAnswer: '580000', correctAnswers: ['580000', '580 000'], explanation: 'Terugwaartse telling beteken elke term is 10 000 minder as die vorige, dus om terug te werk na vroeëre terme moet ons 10 000 bytel. Van die 3de term na die 1ste term is 2 stappe terug: 560 000 + 10 000 = 570 000 (2de term), 570 000 + 10 000 = 580 000 (1ste term).' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn loop van 300 000 na 400 000 in intervalle van 100 000. Tussen watter twee merke sit 328 000?', checkMode: 'auto', correctAnswer: '300000400000', correctAnswers: ['300000400000', '300000en400000', '300 000 en 400 000'], explanation: 'Die enigste merke op hierdie stuk is 300 000 en 400 000, aangesien die intervalle 100 000 uitmekaar is. 300 000 < 328 000 < 400 000, dus sit 328 000 tussen 300 000 en 400 000, nader aan 300 000.' },
        { difficulty: 'Medium', question: 'Watter getal is presies halfpad tussen 450 000 en 550 000?', checkMode: 'auto', correctAnswer: '500000', correctAnswers: ['500000', '500 000'], explanation: 'Tel die twee eindpunte bymekaar en deel deur 2: (450 000 + 550 000) ÷ 2 = 1 000 000 ÷ 2 = 500 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn gaan van 200 000 na 300 000. Watter getal sit een kwart van die pad vanaf 200 000 na 300 000?', checkMode: 'auto', correctAnswer: '225000', correctAnswers: ['225000', '225 000'], explanation: 'Die afstand vanaf 200 000 na 300 000 is 100 000. Een kwart van daardie afstand is 100 000 ÷ 4 = 25 000. Tel dit by die beginpunt: 200 000 + 25 000 = 225 000.' },
        { difficulty: 'Medium', question: 'Vergelyk 456 213 en 456 231 met &lt;, &gt; of =.', checkMode: 'auto', correctAnswer: '456213<456231', correctAnswers: ['456213<456231', '<'], explanation: 'Die eerste vier syfers (4, 5, 6, 2) is dieselfde in albei getalle. Die bepalende kolom is die tiene: 1 vs 3. Aangesien 1 < 3, is 456 213 < 456 231.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste, geskei deur kommas: 356 210, 9 876, 356 102, 1 000 000.', checkMode: 'auto', correctAnswer: '98763561023562101000000', correctAnswers: ['98763561023562101000000'], explanation: '9 876 het 4 syfers, dus is dit kleinste. 1 000 000 het 7 syfers, dus is dit grootste. Die twee 6-syfergetalle 356 210 en 356 102 deel hul eerste vier syfers (3, 5, 6, 2); die bepalende kolom is die tiene: 1 vs 0, dus 356 102 < 356 210. Orden: 9 876, 356 102, 356 210, 1 000 000.' },
        { difficulty: 'Medium', question: 'ʼn Leerder vergelyk 512 340 en 509 870 en sê 509 870 is groter "omdat 9 groter is as die 1 langsaan." Verduidelik wat verkeerd is met hierdie redenasie, en sê watter getal werklik groter is.', checkMode: 'self', answer: 'Die leerder het die verkeerde bepalende kolom gekies. Jy moet altyd eers by die hoogste plekwaardekolom begin vergelyk — hier die Honderdduisende-kolom — nie sommer na ʼn kolom spring wat toevallig groter lyk nie. In 512 340 is die honderdduisende-syfer 5; in 509 870 is die honderdduisende-syfer ook 5, dus gelyk daar. Beweeg na die Tienduisende-kolom: 512 340 het 1, en 509 870 het 0. Aangesien 1 > 0, is 512 340 groter — die leerder se vergelyking by die honderde-kolom het veels te laat gekom en was nooit eintlik die bepalende kolom nie.' },
        { difficulty: 'Medium', question: 'ʼn Krieketstadion rapporteer 172 480 toeskouers het ʼn toernooi bygewoon. Rond hierdie syfer af na die naaste 10 000 vir ʼn opskrifsamevatting.', checkMode: 'auto', correctAnswer: '170000', correctAnswers: ['170000', '170 000'], explanation: 'Afronding na die naaste 10 000 beteken ons kyk na die duisende-syfer. In 172 480 is die duisende-syfer 2, wat kleiner as 5 is, dus rond ons af: 172 480 → 170 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skoolfondsinsameling het vanjaar R482 650 ingesamel en verlede jaar R479 300. Rond albei totale af na die naaste R10 000 en sê of vanjaar se afgeronde totaal groter, kleiner, of dieselfde is as verlede jaar s\'n.', checkMode: 'auto', correctAnswer: '480000en480000dieselfde', correctAnswers: ['480000en480000dieselfde', '480000 480000 dieselfde', 'R480 000 en R480 000, dieselfde'], explanation: 'Vanjaar: duisende-syfer van 482 650 is 2, rond af → 480 000. Verlede jaar: duisende-syfer van 479 300 is 9, rond op → 480 000. Albei afgeronde totale is R480 000, dus is hulle dieselfde ná afronding, al was die werklike totale verskillend.' },
        { difficulty: 'Hard', question: 'Zanele beweer dat 91 ʼn priemgetal is omdat dit onewe is en nie op 0 of 5 eindig nie. Is sy korrek? Wys werk om jou antwoord te ondersteun.', checkMode: 'self', answer: 'Nee, Zanele is verkeerd — 91 is nie priem nie. Onewe wees en nie op 0 of 5 eindig nie, sluit slegs 2 en 5 as faktore uit; dit sê niks oor ander moontlike faktore nie. Toets deelbaarheid: 91 ÷ 7 = 13 presies, sonder ʼn res. Dus het 91 faktore 1, 7, 13 en 91 — dit is 4 faktore, nie 2 nie. Aangesien ʼn priemgetal presies 2 faktore moet hê, is 91 saamgesteld, nie priem nie. Zanele se toets (onewe, eindig nie op 0 of 5 nie) is nie ʼn geldige manier om vir priemgetalle te toets nie.' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheidsorganisasie wil presies 84 potlode en 60 liniale in identiese geskenksakkies verpak, met elke potlood en liniaal gebruik en niks oor nie. Wat is die grootste aantal geskenksakkies wat hulle kan maak?', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Dit vereis die hoogste gemene faktor (HGF) van 84 en 60. Faktore van 84: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84. Faktore van 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. Die hoogste getal wat in albei lyste voorkom, is 12. Dus is die grootste aantal identiese geskenksakkies 12 (elk met 7 potlode en 5 liniale).' },
        { difficulty: 'Hard', question: 'ʼn Getal het 4 honderdduisende, 8 tienduisende en 0 in elke ander kolom. Rond hierdie getal af na die naaste 100 000, en sê dan of die getal self priem, saamgesteld, of nie een van die twee is nie. Verduidelik jou redenasie vir die priem/saamgesteld-deel.', checkMode: 'self', answer: 'Die getal is 480 000 (4 honderdduisende + 8 tienduisende, alle ander kolomme nul). Afronding van 480 000 na die naaste 100 000: die bepalende syfer is die tienduisende-syfer, 8, wat 5 of meer is, dus rond ons op: 480 000 → 500 000. Vir die priem/saamgesteld-toets: 480 000 is ewe (dit eindig op 0), en elke ewe getal groter as 2 het ten minste drie faktore — 1, 2, en homself — dus kan dit nie priem wees nie. 480 000 is saamgesteld, nie priem nie (en beslis nie "geeneen nie", aangesien dit baie groter as 1 is).' },
        { difficulty: 'Hard', question: 'ʼn Groentetuinier wil rye plant sodat elke ry dieselfde aantal wortelplantjies het, deur al 132 plantjies te gebruik met niks oor nie, en wil meer as 6 rye maar minder as 20 rye hê. Hoeveel rye moet sy plant, en hoeveel plantjies per ry?', checkMode: 'auto', correctAnswer: '12rye11plantjies', correctAnswers: ['12rye11plantjies', '12 rye van 11', '12 en 11', '11rye12plantjies', '11 rye van 12', '11 en 12'], explanation: 'Ons benodig faktorpare van 132 waar een faktor tussen 6 en 20 is. Faktore van 132: 1, 2, 3, 4, 6, 11, 12, 22, 33, 44, 66, 132. Die faktorpare tussen 6 en 20 is 11 en 12 (11 × 12 = 132). Dus moet sy óf 11 rye van 12 plantjies plant, óf 12 rye van 11 plantjies — albei voldoen aan "meer as 6, minder as 20" rye.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het plekwaarde, patrone, getallelyne, vergelyking, afronding, veelvoude en faktore onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaguit as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'In die getal 645 910, wat is die waarde van die syfer 9?', checkMode: 'auto', correctAnswer: '900', correctAnswers: ['900'], explanation: 'Die syfer 9 sit in die Honderde-kolom. Sy waarde is 9 × 100 = 900.' },
        { difficulty: 'Easy', question: 'Skryf 340 608 in uitgebreide notasie.', checkMode: 'auto', correctAnswer: '300000+40000+600+8', correctAnswers: ['300000+40000+600+8'], explanation: '3 is in die Honderdduisende-kolom (300 000), 4 is in die Tienduisende-kolom (40 000), 0 duisende, 6 is in die Honderde-kolom (600), 0 tiene, 8 is in die Ene-kolom (8). Nulterme word weggelaat: 340 608 = 300 000 + 40 000 + 600 + 8.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 0 honderdduisende, 8 tienduisende, 3 duisende, 4 honderde, 0 tiene en 5 ene. Skryf die getal.', checkMode: 'auto', correctAnswer: '83405', correctAnswers: ['83405', '83 405'], explanation: 'Plaas elke deel in sy kolom: 0 + 80 000 + 3 000 + 400 + 0 + 5 = 83 405.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getal het 2 honderdduisende, 9 tienduisende, 0 duisende, 4 honderde, 1 tien en 3 ene. Skryf die getal, en gee die waarde van sy tienduisende-syfer.', checkMode: 'auto', correctAnswer: '29041390000', correctAnswers: ['29041390000', '290413 en 90000', '290 413, 90 000'], explanation: 'Bou kolom vir kolom: 200 000 + 90 000 + 0 + 400 + 10 + 3 = 290 413. Die tienduisende-syfer is 9, dus is sy waarde 9 × 10 000 = 90 000.' },
        { difficulty: 'Easy', question: 'Tel vorentoe in 100 000e vanaf 120 000. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', correctAnswer: '220000320000420000520000', correctAnswers: ['220000320000420000520000'], explanation: 'Tel elke keer 100 000 by: 120 000 + 100 000 = 220 000, dan 320 000, 420 000, 520 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon lui: 480 000, 470 000, 460 000, ___. Wat is die ontbrekende getal?', checkMode: 'auto', correctAnswer: '450000', correctAnswers: ['450000', '450 000'], explanation: 'Die interval is 470 000 − 480 000 = −10 000 (terugwaartse telling in 10 000e). Gaan voort: 460 000 − 10 000 = 450 000.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 1 000e vanaf 205 000. Skryf die volgende 5 getalle, geskei deur kommas.', checkMode: 'auto', correctAnswer: '204000203000202000201000200000', correctAnswers: ['204000203000202000201000200000'], explanation: 'Trek elke keer 1 000 af: 205 000 − 1 000 = 204 000, dan 203 000, 202 000, 201 000, 200 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Ry tel vorentoe in 10 000e. Sy 4de term is 90 000. Wat is die 1ste term van die ry?', checkMode: 'auto', correctAnswer: '60000', correctAnswers: ['60000', '60 000'], explanation: 'Vorentoe telling beteken elke term is 10 000 meer as die vorige, dus om terug te werk na vroeëre terme moet ons 10 000 aftrek. Van die 4de term na die 1ste term is 3 stappe terug: 90 000 − 10 000 = 80 000 (3de), 80 000 − 10 000 = 70 000 (2de), 70 000 − 10 000 = 60 000 (1ste).' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn loop van 450 000 na 460 000 in intervalle van 1 000. Tussen watter twee merke sit 452 000?', checkMode: 'auto', correctAnswer: '452000453000', correctAnswers: ['452000453000', '452000en453000', '452 000 en 453 000'], explanation: 'Die merke op hierdie stuk is 450 000, 451 000, 452 000, 453 000 … 460 000. Die getal 452 000 val presies op ʼn merk, dus sit dit tussen die 452 000- en 453 000-merke, reg op die 452 000-merk.' },
        { difficulty: 'Medium', question: 'Watter getal is presies halfpad tussen 700 000 en 800 000?', checkMode: 'auto', correctAnswer: '750000', correctAnswers: ['750000', '750 000'], explanation: 'Tel die twee eindpunte bymekaar en deel deur 2: (700 000 + 800 000) ÷ 2 = 1 500 000 ÷ 2 = 750 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn gaan van 300 000 na 600 000. Watter getal sit een derde van die pad vanaf 300 000 na 600 000?', checkMode: 'auto', correctAnswer: '400000', correctAnswers: ['400000', '400 000'], explanation: 'Die afstand vanaf 300 000 na 600 000 is 300 000. Een derde van daardie afstand is 300 000 ÷ 3 = 100 000. Tel dit by die beginpunt: 300 000 + 100 000 = 400 000.' },
        { difficulty: 'Medium', question: 'Vergelyk 728 145 en 728 154 met &lt;, &gt; of =.', checkMode: 'auto', correctAnswer: '728145<728154', correctAnswers: ['728145<728154', '<'], explanation: 'Die eerste vier syfers (7, 2, 8, 1) is dieselfde in albei getalle. Die bepalende kolom is die tiene: 4 vs 5. Aangesien 4 < 5, is 728 145 < 728 154.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste, geskei deur kommas: 87 654, 876 540, 87 546, 876 450.', checkMode: 'auto', correctAnswer: '8754687654876450876540', correctAnswers: ['8754687654876450876540'], explanation: '87 546 en 87 654 het 5 syfers, dus is hulle kleiner as die twee 6-syfergetalle 876 450 en 876 540. Vergelyk die 5-syferpaar: 87 546 vs 87 654 — die tiene-syfer is 4 vs 5, dus 87 546 < 87 654. Vergelyk die 6-syferpaar: 876 450 vs 876 540 — die tiene-syfer is 5 vs 4, dus 876 450 < 876 540. Orden: 87 546, 87 654, 876 450, 876 540.' },
        { difficulty: 'Medium', question: 'ʼn Leerder orden drie getalle as 62 481 &lt; 6 248 &lt; 624 810, en verduidelik "Ek het die eerste syfers vergelyk en hulle was almal 6, so ek het hulle net gelaat in die volgorde waarin ek hulle gekry het." Verduidelik die fout en gee die korrekte volgorde van kleinste na grootste.', checkMode: 'self', answer: 'Die leerder se metode is foutief omdat ooreenstemmende eerste syfers nie beteken die getalle is reeds in volgorde nie — jy moet eers die totale aantal syfers tel, aangesien meer syfers altyd ʼn groter getal beteken (vir positiewe heelgetalle). Hier: 6 248 het 4 syfers, 62 481 het 5 syfers, en 624 810 het 6 syfers. Dus, ongeag hoe die voorste syfer lyk, is die korrekte volgorde van kleinste na grootste 6 248, 62 481, 624 810 — nie die volgorde wat die leerder gelys het nie, wat 6 248 verkeerdelik in die middel geplaas het.' },
        { difficulty: 'Medium', question: 'ʼn Dorp se bevolking is aangeteken as 156 420 mense. Rond hierdie syfer af na die naaste 1 000 vir ʼn nuusberig.', checkMode: 'auto', correctAnswer: '156000', correctAnswers: ['156000', '156 000'], explanation: 'Afronding na die naaste 1 000 beteken ons kyk na die honderde-syfer. In 156 420 is die honderde-syfer 4, wat kleiner as 5 is, dus rond ons af: 156 420 → 156 000.' },
        { difficulty: 'Medium-Hard', question: 'Twee naburige dorpe rapporteer bevolkings van 156 420 en 163 900. Rond albei syfers af na die naaste 10 000 en sê watter dorp die groter afgeronde bevolking het.', checkMode: 'auto', correctAnswer: '160000en160000dieselfde', correctAnswers: ['160000en160000dieselfde', '160000 160000 dieselfde', '160 000 en 160 000, dieselfde'], explanation: 'Eerste dorp: duisende-syfer van 156 420 is 6, rond op → 160 000. Tweede dorp: duisende-syfer van 163 900 is 3, rond af → 160 000. Albei afgeronde bevolkings is 160 000, dus lyk die dorpe ewe groot ná afronding, al verskil hul werklike bevolkings met 7 480 mense.' },
        { difficulty: 'Hard', question: 'Sipho beweer dat 57 ʼn priemgetal is omdat "dit nie lyk of dit voor die hand liggende faktore het nie." Is hy korrek? Wys werk om jou antwoord te ondersteun.', checkMode: 'self', answer: 'Nee, Sipho is verkeerd — 57 is nie priem nie. "Lyk nie of dit faktore het nie" is nie ʼn wiskundige toets nie. Toets deelbaarheid stelselmatig: 57 ÷ 3 = 19 presies, sonder ʼn res. Dus het 57 faktore 1, 3, 19 en 57 — dit is 4 faktore, nie 2 nie. Aangesien ʼn priemgetal presies 2 faktore moet hê, is 57 saamgesteld, nie priem nie. ʼn Vinnige syfersom-toets sou dit uitgewys het: 5 + 7 = 12, en aangesien 12 deelbaar is deur 3, is 57 dit ook.' },
        { difficulty: 'Hard', question: 'ʼn Onderwyser wil presies 90 potlode en presies 36 liniale in identiese skryfbehoeftepakkies verdeel, met elke item gebruik en niks oor nie. Wat is die grootste aantal pakkies wat sy kan maak?', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Dit vereis die hoogste gemene faktor (HGF) van 90 en 36. Faktore van 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90. Faktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Die hoogste getal wat in albei lyste voorkom, is 18. Dus is die grootste aantal identiese pakkies 18 (elk met 5 potlode en 2 liniale).' },
        { difficulty: 'Hard', question: 'ʼn Getal het 3 honderdduisende, 6 tienduisende en 0 in elke ander kolom. Rond hierdie getal af na die naaste 100 000, en sê dan of die getal self priem, saamgesteld, of nie een van die twee is nie. Verduidelik jou redenasie vir die priem/saamgesteld-deel.', checkMode: 'self', answer: 'Die getal is 360 000 (3 honderdduisende + 6 tienduisende, alle ander kolomme nul). Afronding van 360 000 na die naaste 100 000: die bepalende syfer is die tienduisende-syfer, 6, wat 5 of meer is, dus rond ons op: 360 000 → 400 000. Vir die priem/saamgesteld-toets: 360 000 is ewe (dit eindig op 0), en elke ewe getal groter as 2 het ten minste drie faktore — 1, 2, en homself — dus kan dit nie priem wees nie. 360 000 is saamgesteld, nie priem nie.' },
        { difficulty: 'Hard', question: 'ʼn Busmaatskappy wil presies 60 leerders in gelyke groepe vir ʼn uitstappie plaas, met meer as 4 groepe maar minder as 15 groepe, en geen leerder oor nie. Hoeveel groepe moet hulle maak, en hoeveel leerders per groep?', checkMode: 'auto', correctAnswer: '5groepe12leerders', correctAnswers: ['5groepe12leerders', '5 groepe van 12', '5 en 12', '6groepe10leerders', '6 groepe van 10', '6 en 10', '10groepe6leerders', '10 groepe van 6', '10 en 6', '12groepe5leerders', '12 groepe van 5', '12 en 5'], explanation: 'Ons benodig faktorpare van 60 waar een faktor streng tussen 4 en 15 is. Faktore van 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. Die faktore streng tussen 4 en 15 is 5, 6, 10 en 12 — wat pare (5, 12), (6, 10), (10, 6) en (12, 5) gee. Enige hiervan werk, byvoorbeeld 6 groepe van 10 leerders of 12 groepe van 5 leerders.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met plekwaarde, patrone, getallelyne, vergelyking, afronding, veelvoude en faktore werk.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaguit, meer werklike-wêreld kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Stadion se bywoningsteller wys 178 942. Wat is die waarde van die syfer 7?', checkMode: 'auto', correctAnswer: '70000', correctAnswers: ['70000', '70 000'], explanation: 'Die syfer 7 sit in die Tienduisende-kolom. Sy waarde is 7 × 10 000 = 70 000.' },
        { difficulty: 'Easy', question: 'Skryf 906 015 in uitgebreide notasie.', checkMode: 'auto', correctAnswer: '900000+6000+15', correctAnswers: ['900000+6000+15', '900000+6000+10+5'], explanation: '9 is in die Honderdduisende-kolom (900 000), 0 tienduisende, 6 is in die Duisende-kolom (6 000), 0 honderde, 1 is in die Tiene-kolom (10), 5 is in die Ene-kolom (5). Nulterme word weggelaat: 906 015 = 900 000 + 6 000 + 10 + 5.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 8 honderdduisende, 3 tienduisende, 0 duisende, 5 honderde, 9 tiene en 0 ene. Skryf die getal.', checkMode: 'auto', correctAnswer: '830590', correctAnswers: ['830590', '830 590'], explanation: 'Plaas elke deel in sy kolom: 800 000 + 30 000 + 0 + 500 + 90 + 0 = 830 590.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Boerekoöperasie rapporteer ʼn getal gemaak van 1 honderdduisend, 0 tienduisende, 4 duisende, 0 honderde, 2 tiene en 8 ene mielesakke. Skryf die getal, en gee die waarde van sy ene-syfer.', checkMode: 'auto', correctAnswer: '1040288', correctAnswers: ['1040288', '104028 en 8', '104 028, 8'], explanation: 'Bou kolom vir kolom: 100 000 + 0 + 4 000 + 0 + 20 + 8 = 104 028. Die ene-syfer is 8, dus is sy waarde eenvoudig 8.' },
        { difficulty: 'Easy', question: 'Tel terugwaarts in 10 000e vanaf 95 000. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', correctAnswer: '85000750006500055000', correctAnswers: ['85000750006500055000'], explanation: 'Trek elke keer 10 000 af: 95 000 − 10 000 = 85 000, dan 75 000, 65 000, 55 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Patroon lui: 610 000, 620 000, 630 000, ___. Wat is die ontbrekende getal?', checkMode: 'auto', correctAnswer: '640000', correctAnswers: ['640000', '640 000'], explanation: 'Die interval is 620 000 − 610 000 = 10 000. Gaan voort: 630 000 + 10 000 = 640 000.' },
        { difficulty: 'Medium', question: 'ʼn Spaardoelwit tel op in 100 000e vanaf 340 000. Skryf die volgende 3 bedrae, geskei deur kommas.', checkMode: 'auto', correctAnswer: '440000540000640000', correctAnswers: ['440000540000640000'], explanation: 'Tel elke keer 100 000 by: 340 000 + 100 000 = 440 000, dan 540 000, 640 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Ry tel terugwaarts in 50 000e. Sy 5de term is 250 000. Wat is die 1ste term van die ry?', checkMode: 'auto', correctAnswer: '450000', correctAnswers: ['450000', '450 000'], explanation: 'Terugwaartse telling beteken elke term is 50 000 minder as die vorige, dus om terug te werk na vroeëre terme moet ons 50 000 bytel. Van die 5de term na die 1ste term is 4 stappe terug: 250 000 + 50 000 = 300 000 (4de), 300 000 + 50 000 = 350 000 (3de), 350 000 + 50 000 = 400 000 (2de), 400 000 + 50 000 = 450 000 (1ste).' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn loop van 570 000 na 580 000 in intervalle van 1 000. Tussen watter twee merke sit 573 000?', checkMode: 'auto', correctAnswer: '573000574000', correctAnswers: ['573000574000', '573000en574000', '573 000 en 574 000'], explanation: 'Die merke op hierdie stuk is 570 000, 571 000, 572 000, 573 000, 574 000 … 580 000. Die getal 573 000 val presies op ʼn merk, dus sit dit tussen die 573 000- en 574 000-merke, reg op die 573 000-merk.' },
        { difficulty: 'Medium', question: 'Watter getal is presies halfpad tussen 120 000 en 130 000?', checkMode: 'auto', correctAnswer: '125000', correctAnswers: ['125000', '125 000'], explanation: 'Tel die twee eindpunte bymekaar en deel deur 2: (120 000 + 130 000) ÷ 2 = 250 000 ÷ 2 = 125 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn gaan van 400 000 na 800 000. Watter getal sit drie kwart van die pad vanaf 400 000 na 800 000?', checkMode: 'auto', correctAnswer: '700000', correctAnswers: ['700000', '700 000'], explanation: 'Die afstand vanaf 400 000 na 800 000 is 400 000. Drie kwart van daardie afstand is (3 ÷ 4) × 400 000 = 300 000. Tel dit by die beginpunt: 400 000 + 300 000 = 700 000.' },
        { difficulty: 'Medium', question: 'Vergelyk 903 217 en 903 271 met &lt;, &gt; of =.', checkMode: 'auto', correctAnswer: '903217<903271', correctAnswers: ['903217<903271', '<'], explanation: 'Die eerste vier syfers (9, 0, 3, 2) is dieselfde in albei getalle. Die bepalende kolom is die tiene: 1 vs 7. Aangesien 1 < 7, is 903 217 < 903 271.' },
        { difficulty: 'Medium', question: 'Orden van kleinste na grootste, geskei deur kommas: 45 690, 456 900, 45 609, 456 090.', checkMode: 'auto', correctAnswer: '4560945690456090456900', correctAnswers: ['4560945690456090456900'], explanation: '45 609 en 45 690 het 5 syfers, dus is hulle kleiner as die twee 6-syfergetalle 456 090 en 456 900. Vergelyk die 5-syferpaar: 45 609 vs 45 690 — die tiene-syfer is 0 vs 9, dus 45 609 < 45 690. Vergelyk die 6-syferpaar: 456 090 vs 456 900 — die honderde-syfer is 0 vs 9, dus 456 090 < 456 900. Orden: 45 609, 45 690, 456 090, 456 900.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê 340 501 is groter as 340 510 "omdat 5 voor 1 kom as jy van links na regs lees, so die eerste getal wen." Verduidelik die fout in hierdie redenasie en sê watter getal werklik groter is.', checkMode: 'self', answer: 'Die leerder vergelyk nie die plekwaardekolomme korrek nie — leesvolgorde alleen bepaal nie grootte nie. Albei getalle deel dieselfde syfers in die Honderdduisende-, Tienduisende-, Duisende- en Honderde-kolomme (3, 4, 0, 5). Die bepalende kolom is die Tiene-kolom: 340 501 het 0 tiene, terwyl 340 510 1 tien het. Aangesien 0 < 1, is 340 510 eintlik die groter getal, nie 340 501 soos die leerder beweer het nie. Die leerder se redenasie oor "5 wat eerste kom" het plekwaarde heeltemal geïgnoreer.' },
        { difficulty: 'Medium', question: 'ʼn Konsertfees het 738 420 kaartjies oor die hele seisoen verkoop. Rond hierdie syfer af na die naaste 10 000 vir die promotor se verslag.', checkMode: 'auto', correctAnswer: '740000', correctAnswers: ['740000', '740 000'], explanation: 'Afronding na die naaste 10 000 beteken ons kyk na die duisende-syfer. In 738 420 is die duisende-syfer 8, wat 5 of meer is, dus rond ons op: 738 420 → 740 000.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Liefdadigheidsorganisasie sê hulle het "omtrent R700 000" vanjaar ingesamel nadat hulle hul presiese totaal van R673 500 na die naaste R100 000 afgerond het. ʼn Vrywilliger rond dieselfde totaal apart af na die naaste R10 000. Bereken die vrywilliger se afgeronde syfer, en verduidelik watter van die twee afrondings ʼn akkurater beeld van die werklike totaal gee.', checkMode: 'auto', correctAnswer: '670000', correctAnswers: ['670000', '670 000'], explanation: 'Afronding van R673 500 na die naaste R10 000: die bepalende syfer is die duisende-syfer, 3, wat kleiner as 5 is, dus rond ons af: 673 500 → 670 000. Vergelyk afstande vanaf die werklike totaal van R673 500: |673 500 − 700 000| = 26 500, terwyl |673 500 − 670 000| = 3 500. Aangesien 3 500 baie kleiner as 26 500 is, is die afronding na die naaste R10 000 van R670 000 baie akkurater as die liefdadigheidsorganisasie se "omtrent R700 000".' },
        { difficulty: 'Hard', question: 'Thabo beweer dat 119 ʼn priemgetal is omdat dit nie deelbaar is deur 2, 3, of 5 nie. Is hy korrek? Wys werk om jou antwoord te ondersteun.', checkMode: 'self', answer: 'Nee, Thabo is verkeerd — 119 is nie priem nie. Om net 2, 3 en 5 te toets is nie genoeg nie; jy moet voortgaan om deelgetalle tot by die vierkantswortel van die getal te toets (ongeveer 10,9 vir 119), wat beteken jy moet ook 7 toets. Toets: 119 ÷ 7 = 17 presies, sonder ʼn res. Dus het 119 faktore 1, 7, 17 en 119 — dit is 4 faktore, nie 2 nie. Aangesien ʼn priemgetal presies 2 faktore moet hê, is 119 saamgesteld, nie priem nie. Thabo het te vroeg opgehou toets.' },
        { difficulty: 'Hard', question: 'ʼn Skool wil presies 72 stoele en presies 48 tafels in identiese rye vir ʼn saal rangskik, met elke stoel en tafel gebruik en niks oor nie. Wat is die grootste aantal identiese rye wat hulle kan maak?', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Dit vereis die hoogste gemene faktor (HGF) van 72 en 48. Faktore van 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72. Faktore van 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. Die hoogste getal wat in albei lyste voorkom, is 24. Dus is die grootste aantal identiese rye 24 (elk met 3 stoele en 2 tafels).' },
        { difficulty: 'Hard', question: 'ʼn Getal het 7 honderdduisende, 5 tienduisende en 0 in elke ander kolom. Rond hierdie getal af na die naaste 100 000, en sê dan of die getal self priem, saamgesteld, of nie een van die twee is nie. Verduidelik jou redenasie vir die priem/saamgesteld-deel.', checkMode: 'self', answer: 'Die getal is 750 000 (7 honderdduisende + 5 tienduisende, alle ander kolomme nul). Afronding van 750 000 na die naaste 100 000: die bepalende syfer is die tienduisende-syfer, 5, wat 5 of meer is, dus rond ons op: 750 000 → 800 000. Vir die priem/saamgesteld-toets: 750 000 is ewe (dit eindig op 0), en elke ewe getal groter as 2 het ten minste drie faktore — 1, 2, en homself — dus kan dit nie priem wees nie. 750 000 is saamgesteld, nie priem nie.' },
        { difficulty: 'Hard', question: 'ʼn Restaurateur wil presies 100 muffins in gelyke bokse verdeel, met meer as 5 bokse maar minder as 25 bokse, en geen muffin oor nie. Hoeveel bokse moet hy gebruik, en hoeveel muffins per boks?', checkMode: 'auto', correctAnswer: '10bokse10muffins', correctAnswers: ['10bokse10muffins', '10 bokse van 10', '10 en 10', '20bokse5muffins', '20 bokse van 5', '20 en 5'], explanation: 'Ons benodig faktorpare van 100 waar een faktor streng tussen 5 en 25 is. Faktore van 100: 1, 2, 4, 5, 10, 20, 25, 50, 100. Die faktore streng tussen 5 en 25 is 10 en 20 — wat pare (10, 10) en (20, 5) gee. Enigeen werk: 10 bokse van 10 muffins, of 20 bokse van 5 muffins.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan plekwaarde, patrone, getallelyne, vergelyking, afronding, veelvoude en faktore op werklike-wêreld probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd gehad het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
