import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (place value roles) ──────────────────────────────────────
// hundred millions  → purple  (#7c3aed)
// ten millions      → red     (#dc2626)
// millions          → orange  (#ea580c)
// hundred thousands → yellow  (#ca8a04)
// ten thousands     → green   (#16a34a)
// thousands         → blue    (#2563eb)
// hundreds          → purple  (#7c3aed)   (same as hundred millions)
// tens              → green   (#16a34a)   (same as ten thousands)
// units             → blue    (#2563eb)   (same as thousands)
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Hele Getalle',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PLEKWAARDE TOT EN MET 9-SYFERGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-9-digit',
      title: 'Plekwaarde tot en met 9-Syfergetalle',
      icon: '#',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 werk ons met hele getalle tot by 999&nbsp;999&nbsp;999 — dit is nege honderd nege en negentig miljoen, nege honderd nege en negentig duisend, nege honderd nege en negentig. Elke syfer in ʼn getal het ʼn <strong>plekwaarde</strong>. Van regs af is die posisies: ${bl('ene')}, ${gr('tiene')}, ${pu('honderde')}, ${bl('duisende')}, ${gr('tienduisende')}, ${ye('honderdduisende')}, ${or('miljoene')}, ${re('tien miljoene')} en ${pu('honderd miljoene')}. Ons kan getalle in <strong>uitgebreide notasie</strong> skryf om die waarde van elke syfer apart te toon.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('honderd miljoene / honderde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tien miljoene')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('miljoene')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fef08a;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('honderdduisende')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tienduisende / tiene')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('duisende / ene')}</span>` +
        `</div>` +

        // ── Place value chart ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Plekwaardeposisies</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="width:100%;border-collapse:collapse;font-size:13px;text-align:center;min-width:560px;">` +
        `<thead>` +
        `<tr>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#7c3aed;font-weight:700;">Honderd<br/>Miljoene</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#dc2626;font-weight:700;">Tien<br/>Miljoene</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#ea580c;font-weight:700;">Miljoene</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#ca8a04;font-weight:700;">Honderd<br/>Duisende</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#16a34a;font-weight:700;">Tien<br/>Duisende</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#2563eb;font-weight:700;">Duisende</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#7c3aed;font-weight:700;">Honderde</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#16a34a;font-weight:700;">Tiene</th>` +
        `<th style="padding:8px 6px;border:1px solid #e2e8f0;background:#f8fafc;color:#2563eb;font-weight:700;">Ene</th>` +
        `</tr>` +
        `</thead>` +
        `<tbody>` +
        `<tr>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#7c3aed;font-weight:700;">100 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#dc2626;font-weight:700;">10 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#ea580c;font-weight:700;">1 000 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#ca8a04;font-weight:700;">100 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#16a34a;font-weight:700;">10 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#2563eb;font-weight:700;">1 000</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#7c3aed;font-weight:700;">100</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#16a34a;font-weight:700;">10</td>` +
        `<td style="padding:8px 6px;border:1px solid #e2e8f0;color:#2563eb;font-weight:700;">1</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Expanded notation ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Uitgebreide notasie</p>` +
        `<p style="margin-bottom:12px;">Om ʼn getal in uitgebreide notasie te skryf, skryf die waarde van elke nie-nul syfer apart en tel hulle bymekaar:</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:1em;font-weight:700;color:#374151;word-break:break-word;">` +
        `325 407 819 = ${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: nulle in uitgebreide notasie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Syfers met ʼn waarde van <strong>nul</strong> word nie in uitgebreide notasie geskryf nie, want om 0 by te tel verander die totaal nie. Byvoorbeeld, die ${gr('0')} in die ${gr('tienduisende')}-kolom van 325 407 819 dra ${gr('0')} × 10 000 = 0 by, so dit word weggelaat.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf die plekwaarde van elke syfer in 4 728 356.',
          answer:
            `${or('4')} miljoene, ${ye('7')} honderdduisende, ${gr('2')} tienduisende, ${bl('8')} duisende, ${pu('3')} honderde, ${gr('5')} tiene, ${bl('6')} ene`,
          steps: [
            `Van regs af — ${bl('6')} is in die ${bl('ene')}-plek = ${bl('6')}.`,
            `${gr('5')} is in die ${gr('tiene')}-plek = ${gr('50')}.`,
            `${pu('3')} is in die ${pu('honderde')}-plek = ${pu('300')}.`,
            `${bl('8')} is in die ${bl('duisende')}-plek = ${bl('8 000')}.`,
            `${gr('2')} is in die ${gr('tienduisende')}-plek = ${gr('20 000')}.`,
            `${ye('7')} is in die ${ye('honderdduisende')}-plek = ${ye('700 000')}.`,
            `${or('4')} is in die ${or('miljoene')}-plek = ${or('4 000 000')}.`,
          ],
        },
        {
          question: 'Skryf 325 407 819 in uitgebreide notasie.',
          answer:
            `${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}`,
          steps: [
            `${pu('300 000 000')} + ${re('20 000 000')} + ${or('5 000 000')} + ${ye('400 000')} + ${bl('7 000')} + ${pu('800')} + ${gr('10')} + ${bl('9')}`,
            `Elke syfer word geskryf as sy volle waarde en bymekaar getel. Die ${gr('0')} in die ${gr('tienduisende')}-plek dra 0 by en word nie ingesluit nie.`,
          ],
        },
        {
          question: 'Wat is die waarde van die syfer 7 in 274 863 109?',
          answer: `Die waarde van ${re('7')} in 274 863 109 is ${re('70 000 000')}`,
          steps: [
            `Vind die syfer ${re('7')} in die getal 274&nbsp;863&nbsp;109.`,
            `Dit is in die ${re('tien miljoene')}-plek.`,
            `Die waarde van ${re('7')} in hierdie getal is ${re('7')} × 10&nbsp;000&nbsp;000 = ${re('70 000 000')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — plekwaarde van ʼn syfer ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die plekwaarde van die syfer 5 in 5 324 871?',
          answer: '5 000 000',
          checkMode: 'auto',
          correctAnswer: '5 000 000',
          explanation: 'Van regs af: ene, tiene, honderde, duisende, tienduisende, honderdduisende, miljoene. Die syfer 5 is die syfer heel links — dit is in die miljoene-plek. Sy waarde is 5 × 1 000 000 = 5 000 000.',
        },

        // ── V2 Maklik — uitgebreide notasie ───────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf 4 302 715 in uitgebreide notasie.',
          answer: '4 000 000 + 300 000 + 2 000 + 700 + 10 + 5',
          checkMode: 'self',
        },

        // ── V3 Medium — waarde van ʼn syfer in ʼn 9-syfergetal ──────────────────────
        {
          difficulty: 'Medium',
          question: 'Wat is die waarde van die syfer 8 in 348 921 076?',
          answer: '800 000 000',
          checkMode: 'auto',
          correctAnswer: '800 000 000',
          explanation: 'Vind die syfer 8 in 348 921 076. Tel posisies van regs af — dit val in die honderd miljoene-plek. Sy waarde is 8 × 100 000 000 = 800 000 000.',
        },

        // ── V4 Moeilik — redenering oor plekwaarde ─────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die syfer 6 in 267 431 het ʼn waarde van 600. Is hy korrek? Verduidelik.',
          answer: 'Nee — die syfer 6 is in die tienduisende-plek, so sy waarde is 60 000 nie 600 nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Plekwaardetabel wat al 9 posisies van honderd miljoene tot ene toon met elke kolom kleur-gekodeer en voorbeeldsyfers van 325 407 819 in elke kolom geplaas" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat plekwaarde in 9-syfer hele getalle verduidelik met behulp van ʼn kleur-gekodeerde plekwaardetabel en wys hoe om getalle in uitgebreide notasie te skryf" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN VAN HELE GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-whole-numbers',
      title: 'Vergelyk en Orden van Hele Getalle',
      icon: '⇔',
      explanation:
        `<p style="margin-bottom:16px;">Om hele getalle te <strong>vergelyk</strong>, kyk ons eers na die <strong>aantal syfers</strong> — ʼn getal met meer syfers is altyd groter. As twee getalle dieselfde aantal syfers het, vergelyk ons <strong>syfer vir syfer vanaf links</strong>. Ons gebruik die simbole ${gr('>')} (groter as), ${re('<')} (kleiner as) en ${bl('=')} (gelyk aan) om die verwantskap tussen getalle te wys. Om getalle te <strong>orden</strong> rangskik ons hulle van kleinste na grootste (<em>stygende volgorde</em>) of grootste na kleinste (<em>dalende volgorde</em>).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('> groter as')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('< kleiner as')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('= gelyk aan')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sleutelsyfer wat vergelyk word')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls om hele getalle te vergelyk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel die syfers</strong> — ʼn getal met meer syfers is altyd groter. Geen syfer-vir-syfer vergelyking is nodig nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Dieselfde aantal syfers?</strong> Vergelyk syfer vir syfer vanaf <strong>links</strong>. Die eerste posisie waar die syfers verskil, bepaal watter getal groter is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Alle syfers gelyk?</strong> Skryf ${bl('=')} tussen die twee getalle.</p>` +
        `</div>` +

        `</div>` +

        // ── Symbols box ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vergelykingsimbole</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#16a34a;margin-bottom:4px;">&gt;</p>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Groter as</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die oop punt wys na die <strong>groter</strong> getal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#dc2626;margin-bottom:4px;">&lt;</p>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Kleiner as</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die punt wys na die <strong>kleiner</strong> getal.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-size:2em;font-weight:700;color:#2563eb;margin-bottom:4px;">=</p>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelyk aan</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Albei getalle het presies dieselfde <strong>waarde</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Ordering tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Stygende en dalende volgorde</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stygende volgorde</strong> — kleinste na grootste (getalle gaan op). <strong>Dalende volgorde</strong> — grootste na kleinste (getalle gaan af). Begin altyd deur die syfers te tel om getalle te groepeer, vergelyk dan binne elke groep syfer vir syfer vanaf links.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vergelyk 4 728 350 en 4 736 200. Watter is groter?',
          answer: `4 728 350 ${re('<')} 4 736 200`,
          steps: [
            `Albei getalle het <strong>7 syfers</strong> — dus vergelyk ons syfer vir syfer vanaf links.`,
            `Miljoene-plek: albei het ${bl('4')} — ${bl('gelyk')}.`,
            `Honderdduisende-plek: albei het ${bl('7')} — ${bl('gelyk')}.`,
            `Tienduisende-plek: eerste getal het ${or('2')}, tweede het ${or('3')}. Aangesien ${or('3')} ${gr('>')} ${or('2')}, is die tweede getal groter.`,
            `<strong>Antwoord:</strong> 4 728 350 ${re('<')} 4 736 200 ✓`,
          ],
        },
        {
          question: 'Orden hierdie getalle in stygende volgorde: 3 421 000,  987 654,  3 419 500,  12 450 000.',
          answer: `987 654 ${re('<')} 3 419 500 ${re('<')} 3 421 000 ${re('<')} 12 450 000`,
          steps: [
            `Tel die syfers in elke getal.<br>987 654 het <strong>6 syfers</strong> — minste syfers, dus is dit die <strong>kleinste</strong>.<br>3 419 500 en 3 421 000 het elk <strong>7 syfers</strong>.<br>12 450 000 het <strong>8 syfers</strong> — meeste syfers, dus is dit die <strong>grootste</strong>.`,
            `Vergelyk die twee 7-syfergetalle: 3 419 500 vs 3 421 000.<br>Miljoene: albei het ${bl('3')} — ${bl('gelyk')}.<br>Honderdduisende: albei het ${bl('4')} — ${bl('gelyk')}.<br>Tienduisende: ${or('1')} vs ${or('2')} — aangesien ${or('1')} ${re('<')} ${or('2')}, is die getal 3 419 500 kleiner.`,
            `<strong>Stygende volgorde:</strong> 987 654 ${re('<')} 3 419 500 ${re('<')} 3 421 000 ${re('<')} 12 450 000 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V5 Maklik — vergelyk twee getalle ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter is groter — 4 328 100 of 4 319 800?',
          answer: '4 328 100',
          checkMode: 'auto',
          correctAnswer: '4 328 100',
          explanation: 'Albei getalle het 7 syfers. Vergelyk syfer vir syfer vanaf links.\nMiljoene: albei 4 — gelyk.\nHonderdduisende: albei 3 — gelyk.\nTienduisende: 2 vs 1 — aangesien 2 > 1, is die getal 4 328 100 groter.',
        },

        // ── V6 Medium — dalende volgorde ─────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Orden in dalende volgorde: 2 341 000, 987 234, 2 340 999, 15 000 000.',
          answer: '15 000 000, 2 341 000, 2 340 999, 987 234',
          checkMode: 'self',
        },

        // ── V7 Moeilik — redenering oor vergelyking van getalle ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê 9 999 999 is groter as 10 000 000 omdat 9 groter as 1 is. Is sy korrek? Verduidelik.',
          answer: 'Nee — ons vergelyk getalle eers volgens die aantal syfers. 10 000 000 het 8 syfers en 9 999 999 het 7 syfers, dus is 10 000 000 groter.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Sy-aan-sy syfervergelyking van 4 728 350 en 4 736 200 met elke ooreenstemmende posisie in kolomme belyn en die verskillende tienduisende-syfers in oranje uitgelig met ʼn kleiner-as-simbool in rooi tussen die twee getalle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om groot hele getalle te vergelyk en te orden deur eers syfers te tel en dan syfer vir syfer vanaf links te vergelyk met behulp van die groter-as, kleiner-as en gelyk-aan-simbole" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — AFRONDING VAN HELE GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-off-whole-numbers',
      title: 'Afronding van Hele Getalle',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Afronding beteken om ʼn getal met ʼn eenvoudiger getal te vervang wat naby aan die oorspronklike is. Ons rond af na die naaste <strong>10, 100, 1 000, 10 000, 100 000</strong> of <strong>1 000 000</strong>. Om af te rond, kyk na die syfer onmiddellik regs van die plek waarna jy afrond. As daardie syfer <strong>5 of meer</strong> is, rond op. As daardie syfer <strong>4 of minder</strong> is, rond af — hou die syfer dieselfde en vervang alle syfers regs daarvan met nulle.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('afrondingsyfer')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('syfer regs daarvan')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rond op')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('rond af')}</span>` +
        `</div>` +

        // ── Two rounding rules ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee afrondingsreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Rond op')} — syfer regs daarvan is 5 of meer</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Tel 1 by die ${bl('afrondingsyfer')}. Vervang alle syfers regs daarvan met nulle.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Die ${or('syfer regs daarvan')} is ${or('5, 6, 7, 8')} of ${or('9')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${re('Rond af')} — syfer regs daarvan is 4 of minder</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Hou die ${bl('afrondingsyfer')} dieselfde. Vervang alle syfers regs daarvan met nulle.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Die ${or('syfer regs daarvan')} is ${or('0, 1, 2, 3')} of ${or('4')}.</p>` +
        `</div>` +

        `</div>` +

        // ── How to round step by step ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om af te rond — stap vir stap</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identifiseer die ${bl('afrondingsyfer')}</strong> — vind die syfer in die plek waarna jy afrond (bv. die duisende-syfer as jy na die naaste 1 000 afrond).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kyk na die ${or('syfer regs daarvan')}</strong> — dit is die syfer onmiddellik regs van die ${bl('afrondingsyfer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Pas die reël toe</strong> — as die ${or('syfer regs daarvan')} ${gr('5 of meer')} is, ${gr('rond op')}. As dit ${re('4 of minder')} is, ${re('rond af')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vervang met nulle</strong> — skryf nulle in alle plekke regs van die ${bl('afrondingsyfer')}. Hou alle syfers links onveranderd.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelherinnering</p>` +
        `<p style="margin:0;color:#1e3a8a;">Net die ${or('syfer onmiddellik regs')} van die ${bl('afrondingsyfer')} bepaal of jy op- of afrond. Al die ander syfers regs word eenvoudig nulle.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Rond 3 847 215 af na die naaste 1 000 000.',
          answer: `3 847 215 afgerond na die naaste miljoen is ${gr('4 000 000')}`,
          steps: [
            `Ons rond af na die naaste miljoen. Die ${bl('afrondingsyfer')} is die miljoene-syfer — dit is ${bl('3')}.`,
            `Kyk na die syfer onmiddellik regs daarvan — die honderdduisende-syfer is ${or('8')}.`,
            `Aangesien ${or('8')} 5 of meer is, ${gr('rond ons op')} — tel die miljoene-syfer van ${bl('3')} na ${gr('4')} op.`,
            `Vervang alle syfers regs daarvan met nulle.`,
            `<strong>Antwoord:</strong> 3 847 215 afgerond na die naaste miljoen is ${gr('4 000 000')} ✓`,
          ],
        },
        {
          question: 'Rond 2 453 620 af na die naaste 10 000.',
          answer: `2 453 620 afgerond na die naaste tienduisend is ${re('2 450 000')}`,
          steps: [
            `Ons rond af na die naaste tienduisend. Die ${bl('afrondingsyfer')} is die tienduisende-syfer — dit is ${bl('5')}.`,
            `Kyk na die syfer regs daarvan — die duisende-syfer is ${or('3')}.`,
            `Aangesien ${or('3')} minder as 5 is, ${re('rond ons af')} — hou die tienduisende-syfer as ${bl('5')}.`,
            `Vervang alle syfers regs daarvan met nulle.`,
            `<strong>Antwoord:</strong> 2 453 620 afgerond na die naaste tienduisend is ${re('2 450 000')} ✓`,
          ],
        },
        {
          question: 'Rond 76 500 af na die naaste 1 000.',
          answer: `76 500 afgerond na die naaste duisend is ${gr('77 000')}`,
          steps: [
            `Die ${bl('afrondingsyfer')} is die duisende-syfer — dit is ${bl('6')}.`,
            `Kyk na die honderde-syfer — dit is ${or('5')}.`,
            `Aangesien ${or('5')} 5 of meer is, ${gr('rond ons op')} — tel die duisende-syfer van ${bl('6')} na ${gr('7')} op.`,
            `Vervang alle syfers regs daarvan met nulle.`,
            `<strong>Antwoord:</strong> 76 500 afgerond na die naaste duisend is ${gr('77 000')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V8 Maklik — afronding na die naaste miljoen ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Rond 3 456 789 af na die naaste miljoen.',
          answer: '3 000 000',
          checkMode: 'auto',
          correctAnswer: '3 000 000',
          explanation: 'Die afrondingsyfer is die miljoene-syfer — dit is 3. Die syfer regs daarvan (honderdduisende) is 4. Aangesien 4 minder as 5 is, rond ons af — hou die miljoene-syfer as 3 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 3 000 000.',
        },

        // ── V9 Medium — afronding na die naaste tienduisend ─────────────────
        {
          difficulty: 'Medium',
          question: 'Rond 7 845 320 af na die naaste tienduisend.',
          answer: '7 850 000',
          checkMode: 'auto',
          correctAnswer: '7 850 000',
          explanation: 'Die afrondingsyfer is die tienduisende-syfer — dit is 4. Die syfer regs daarvan (duisende) is 5. Aangesien 5 5 of meer is, rond ons op — tel die tienduisende-syfer van 4 na 5 op en vervang alle syfers regs daarvan met nulle.\nAntwoord: 7 850 000.',
        },

        // ── V10 Moeilik — redenering oor afronding ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle rond 4 500 000 af na die naaste miljoen en kry 5 000 000. Is sy korrek? Verduidelik.',
          answer: 'Ja — die honderdduisende-syfer is 5, dus rond ons op. 4 500 000 afgerond na die naaste miljoen is 5 000 000.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat 3 847 215 tussen 3 000 000 en 4 000 000 posisioneer met die middelpunt by 3 500 000 gemerk en ʼn pyl wat na 4 000 000 wys om afronding op te illustreer met die afrondingsyfer in blou en die bepalende syfer in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om hele getalle na die naaste 10 100 1 000 10 000 100 000 en 1 000 000 af te rond met behulp van die kleur-gekodeerde syfer-regs-daarvan-reël" />',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VEELVOUDE EN FAKTORE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiples-and-factors',
      title: 'Veelvoude en Faktore',
      icon: '×',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Veelvoud')} van ʼn getal is wat ons kry wanneer ons daardie getal met 1, 2, 3, 4 ensovoorts vermenigvuldig. Die ${bl('veelvoude')} van 3 is 3, 6, 9, 12, 15 ensovoorts. ʼn ${gr('Faktor')} van ʼn getal is enige getal wat presies sonder ʼn res daarin deel. Die ${gr('faktore')} van 12 is 1, 2, 3, 4, 6 en 12. Die ${or('grootste gemene faktor (GGF)')} is die grootste ${gr('faktor')} wat twee getalle deel. Die ${re('kleinste gemene veelvoud (KGV)')} is die kleinste ${bl('veelvoud')} wat twee getalle deel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veelvoude')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('faktore')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGF')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('KGV')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Veelvoud</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat van ʼn getal met 1, 2, 3, 4 ensovoorts te vermenigvuldig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Faktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Enige getal wat presies sonder ʼn res in ʼn ander getal deel.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Grootste Gemene Faktor (GGF)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste faktor wat twee of meer getalle deel.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Kleinste Gemene Veelvoud (KGV)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste veelvoud wat twee of meer getalle deel.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find factors ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om al die faktore van ʼn getal te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Begin by 1')}</strong> — Skryf 1 × die getal. Beide 1 en die getal self is altyd ${gr('faktore')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Werk opwaarts')}</strong> — Probeer 2, 3, 4, … in volgorde. As die getal presies deel, is beide die deler en die kwosiënt ${gr('faktore')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Stop wanneer die faktore ontmoet')}</strong> — Stop wanneer die twee ${gr('faktore')} in ʼn paar gelyk is of oorkruis. Lys alle ${gr('faktore')} in stygende volgorde.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">GGF en KGV in die alledaagse lewe</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${or('GGF')} is nuttig wanneer jy dinge in die grootste gelyke groepe wil verdeel wat moontlik is. Die ${re('KGV')} is nuttig wanneer jy die eerste keer wil vind wanneer twee herhalende gebeurtenisse gelyktydig saamval.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lys al die faktore van 36.',
          answer: `Die ${gr('faktore')} van 36 is ${gr('1, 2, 3, 4, 6, 9, 12, 18')} en ${gr('36')}`,
          steps: [
            `Vind alle getalle wat presies in 36 deel.`,
            `${gr('1')} × 36 = 36 — dus is ${gr('1')} en ${gr('36')} faktore.`,
            `${gr('2')} × 18 = 36 — dus is ${gr('2')} en ${gr('18')} faktore.`,
            `${gr('3')} × 12 = 36 — dus is ${gr('3')} en ${gr('12')} faktore.`,
            `${gr('4')} × 9 = 36 — dus is ${gr('4')} en ${gr('9')} faktore.`,
            `${gr('6')} × 6 = 36 — dus is ${gr('6')} ʼn faktor (die paar ontmoet hier, dus stop ons).`,
            `<strong>Die ${gr('faktore')} van 36 is: ${gr('1, 2, 3, 4, 6, 9, 12, 18, 36')} ✓</strong>`,
          ],
        },
        {
          question: 'Vind die GGF van 24 en 36.',
          answer: `Die ${or('GGF')} van 24 en 36 is ${or('12')}`,
          steps: [
            `Lys die ${gr('faktore')} van 24: ${gr('1, 2, 3, 4, 6, 8, 12, 24')}.`,
            `Lys die ${gr('faktore')} van 36: ${gr('1, 2, 3, 4, 6, 9, 12, 18, 36')}.`,
            `Vind die gemene faktore — getalle wat in <strong>albei</strong> lyste voorkom: ${or('1, 2, 3, 4, 6, 12')}.`,
            `Die grootste van hierdie gemene ${gr('faktore')} is ${or('12')}.`,
            `<strong>Die ${or('GGF')} van 24 en 36 is ${or('12')} ✓</strong>`,
          ],
        },
        {
          question: 'Vind die KGV van 4 en 6.',
          answer: `Die ${re('KGV')} van 4 en 6 is ${re('12')}`,
          steps: [
            `Lys die ${bl('veelvoude')} van 4: ${bl('4, 8, 12, 16, 20, 24')}, …`,
            `Lys die ${bl('veelvoude')} van 6: ${bl('6, 12, 18, 24')}, …`,
            `Vind die kleinste ${bl('veelvoud')} wat in <strong>albei</strong> lyste voorkom.`,
            `Die kleinste ${bl('veelvoud')} wat in albei lyste voorkom, is ${re('12')}.`,
            `<strong>Die ${re('KGV')} van 4 en 6 is ${re('12')} ✓</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V11 Maklik — eerste vyf veelvoude ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Lys die eerste 5 veelvoude van 7.',
          answer: '7, 14, 21, 28, 35',
          checkMode: 'auto',
          correctAnswer: '7, 14, 21, 28, 35',
          explanation: '7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\nEerste 5 veelvoude van 7: 7, 14, 21, 28, 35.',
        },

        // ── V12 Medium — GGF ─────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die GGF van 18 en 30.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'Faktore van 18: 1, 2, 3, 6, 9, 18.\nFaktore van 30: 1, 2, 3, 5, 6, 10, 15, 30.\nGemene faktore: 1, 2, 3, 6.\nDie grootste gemene faktor is 6.\nGGF van 18 en 30 = 6.',
        },

        // ── V13 Moeilik — KGV ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die KGV van 6 en 8.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Veelvoude van 6: 6, 12, 18, 24, 30, …\nVeelvoude van 8: 8, 16, 24, 32, …\nDie kleinste veelvoud wat in albei lyste voorkom, is 24.\nKGV van 6 en 8 = 24.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Faktorpare van 36 getoon as vermenigvuldigingspare met elke faktor in groen uitgelig en ʼn Venn-diagram wat faktore van 24 en 36 toon met gemene faktore in oranje in die oorvleuelende deel en GGF van 12 geëtiketteer" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om al die faktore van ʼn getal met faktorpare te lys en hoe om die GGF en KGV van twee getalle te vind met behulp van lyste van faktore en veelvoude" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — PRIEMGETALLE EN SAAMGESTELDE GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'prime-and-composite-numbers',
      title: 'Priemgetalle en Saamgestelde Getalle',
      icon: '★',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${gr('Priemgetal')} is ʼn getal met presies twee faktore — 1 en homself. Voorbeelde van ${gr('priemgetalle')} is ${gr('2')}, ${gr('3')}, ${gr('5')}, ${gr('7')}, ${gr('11')} en ${gr('13')}. Die getal 1 is nie priem nie omdat dit net een faktor het. ʼn ${re('Saamgestelde getal')} is ʼn getal met meer as twee faktore. Voorbeelde is ${re('4')}, ${re('6')}, ${re('8')}, ${re('9')} en ${re('10')}. Elke ${re('saamgestelde getal')} kan as ʼn produk van ${or('priemgetalle')} geskryf word — dit word ${bl('priemfaktorisering')} genoem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('priemgetalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('saamgestelde getalle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('priemfaktore')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('produknotasie')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Priemgetal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met presies twee faktore — 1 en homself. Voorbeelde: ${gr('2, 3, 5, 7, 11, 13')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Saamgestelde getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal met meer as twee faktore. Voorbeelde: ${re('4, 6, 8, 9, 10')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Priemfaktorisering</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${re('Saamgestelde getal')} as ʼn ${bl('produk')} van sy ${or('priemfaktore')} skryf. Voorbeeld: ${bl('36 = 2² × 3²')}.</p>` +
        `</div>` +

        `</div>` +

        // ── How to test for primality ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om te toets of ʼn getal priem is</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Begin by 2</strong> — Probeer om die getal deur elke ${gr('priem')} te deel: 2, 3, 5, 7, ensovoorts.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Gebruik deelbaarheidskortpaaie</strong> — ewe getalle is deelbaar deur ${or('2')}; as die syfersom deelbaar is deur ${or('3')}, is die getal ook; as dit op 0 of 5 eindig, is dit deelbaar deur ${or('5')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Stop wanneer ʼn faktor gevind word</strong> — as enige getal presies daarin deel, is die getal ${re('saamgesteld')}. As geen ${or('priem')} tot by die vierkantswortel daarin deel nie, is die getal ${gr('priem')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: 1 is nie priem of saamgesteld nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die getal 1 het net een faktor (homself), dus voldoen dit nie aan die definisie van ʼn ${gr('priemgetal')} of ʼn ${re('saamgestelde getal')} nie. Die kleinste ${gr('priemgetal')} is ${gr('2')} — die enigste ewe ${gr('priem')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 37 ʼn priemgetal?',
          answer: `${gr('37')} is ʼn ${gr('priemgetal')}`,
          steps: [
            `Kyk of enige getal anders as 1 en 37 presies in 37 deel.`,
            `Probeer ${or('2')} — 37 is onewe, dus deel ${or('2')} nie in 37 nie.`,
            `Probeer ${or('3')} — syfersom: 3 + 7 = 10, wat nie deelbaar is deur 3 nie, dus deel ${or('3')} nie in 37 nie.`,
            `Probeer ${or('5')} — 37 eindig nie op 0 of 5 nie, dus deel ${or('5')} nie in 37 nie.`,
            `Probeer ${or('7')} — ${or('7')} × 5 = 35, ${or('7')} × 6 = 42, dus deel ${or('7')} nie presies in 37 nie.`,
            `Aangesien geen getal presies in 37 deel nie, is dit ʼn ${gr('priemgetal')} ✓`,
          ],
        },
        {
          question: 'Skryf 36 as ʼn produk van sy priemfaktore.',
          answer: `${bl('36 = 2 × 2 × 3 × 3 = 2² × 3²')}`,
          steps: [
            `Deel 36 deur die kleinste ${gr('priem')} — 36 ÷ ${or('2')} = 18.`,
            `Deel 18 deur ${or('2')} — 18 ÷ ${or('2')} = 9.`,
            `Deel 9 deur die volgende ${gr('priem')} — 9 ÷ ${or('3')} = 3.`,
            `Deel 3 deur ${or('3')} — 3 ÷ ${or('3')} = 1.`,
            `Die ${or('priemfaktore')} is ${or('2, 2, 3, 3')}.`,
            `Skryf die ${bl('produknotasie')}: ${bl('36 = 2 × 2 × 3 × 3 = 2² × 3²')} ✓`,
          ],
        },
        {
          question: 'Lys al die priemgetalle tussen 20 en 40.',
          answer: `Die ${gr('priemgetalle')} tussen 20 en 40 is ${gr('23')}, ${gr('29')}, ${gr('31')} en ${gr('37')}`,
          steps: [
            `Kyk na elke getal — ${re('21')} = ${or('3')} × ${or('7')}, ${re('22')} = ${or('2')} × ${or('11')}, albei ${re('saamgesteld')}.`,
            `${gr('23')} het geen faktore anders as 1 en 23 nie — ${gr('priem')} ✓`,
            `${re('24')}, ${re('25')}, ${re('26')}, ${re('27')} en ${re('28')} is almal ${re('saamgesteld')}.`,
            `${gr('29')} het geen faktore anders as 1 en 29 nie — ${gr('priem')} ✓`,
            `${re('30')} is ${re('saamgesteld')}. ${gr('31')} het geen faktore anders as 1 en 31 nie — ${gr('priem')} ✓`,
            `${re('32')}, ${re('33')}, ${re('34')}, ${re('35')} en ${re('36')} is almal ${re('saamgesteld')}.`,
            `${gr('37')} het geen faktore anders as 1 en 37 nie — ${gr('priem')} ✓`,
            `${re('38')} en ${re('39')} is ${re('saamgesteld')}.`,
            `Die ${gr('priemgetalle')} tussen 20 en 40 is ${gr('23')}, ${gr('29')}, ${gr('31')} en ${gr('37')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V14 Maklik — priem of saamgesteld ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is 51 ʼn priemgetal?',
          answer: 'nee',
          checkMode: 'auto',
          correctAnswer: 'nee',
          explanation: 'Toets vir faktore: 51 ÷ 3 = 17 presies (syfersom: 5 + 1 = 6, wat deelbaar is deur 3).\nAangesien 51 = 3 × 17, het dit faktore anders as 1 en homself.\n51 is ʼn saamgestelde getal, nie priem nie.',
        },

        // ── V15 Moeilik — priemfaktorisering ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Skryf 48 as ʼn produk van sy priemfaktore.',
          answer: '2 x 2 x 2 x 2 x 3',
          checkMode: 'auto',
          correctAnswer: '2 x 2 x 2 x 2 x 3',
          explanation: 'Deel herhaaldelik deur die kleinste priem:\n48 ÷ 2 = 24\n24 ÷ 2 = 12\n12 ÷ 2 = 6\n6 ÷ 2 = 3\n3 ÷ 3 = 1\nPriemfaktore: 2, 2, 2, 2, 3.\n48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Faktorboom vir 36 wat priemfaktorisering toon — 36 verdeel in 2 en 18, dan 18 in 2 en 9, dan 9 in 3 en 3 met priemfaktore in oranje uitgelig en die finale produknotasie 2 kwadraat maal 3 kwadraat in blou" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen priemgetalle en saamgestelde getalle verduidelik en priemfaktorisering demonstreer met behulp van ʼn faktorboom vir 36 met kleur-gekodeerde priemfaktore in oranje en produknotasie in blou" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — plekwaarde van ʼn syfer ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die plekwaarde van die syfer 5 in 5 324 871?',
      answer: '5 000 000',
      checkMode: 'auto',
      correctAnswer: '5 000 000',
      explanation: 'Van regs af: ene, tiene, honderde, duisende, tienduisende, honderdduisende, miljoene. Die syfer 5 is die syfer heel links — dit is in die miljoene-plek. Sy waarde is 5 × 1 000 000 = 5 000 000.',
    },

    // ── V2 Maklik — uitgebreide notasie ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 4 302 715 in uitgebreide notasie.',
      answer: '4 000 000 + 300 000 + 2 000 + 700 + 10 + 5',
      checkMode: 'self',
    },

    // ── V3 Medium — waarde van ʼn syfer in ʼn 9-syfergetal ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Wat is die waarde van die syfer 8 in 348 921 076?',
      answer: '800 000 000',
      checkMode: 'auto',
      correctAnswer: '800 000 000',
      explanation: 'Vind die syfer 8 in 348 921 076. Tel posisies van regs af — dit val in die honderd miljoene-plek. Sy waarde is 8 × 100 000 000 = 800 000 000.',
    },

    // ── V4 Moeilik — redenering oor plekwaarde ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die syfer 6 in 267 431 het ʼn waarde van 600. Is hy korrek? Verduidelik.',
      answer: 'Nee — die syfer 6 is in die tienduisende-plek, so sy waarde is 60 000 nie 600 nie.',
      checkMode: 'self',
    },

    // ── V5 Maklik — vergelyk twee getalle ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter is groter — 4 328 100 of 4 319 800?',
      answer: '4 328 100',
      checkMode: 'auto',
      correctAnswer: '4 328 100',
      explanation: 'Albei getalle het 7 syfers. Vergelyk syfer vir syfer vanaf links.\nMiljoene: albei 4 — gelyk.\nHonderdduisende: albei 3 — gelyk.\nTienduisende: 2 vs 1 — aangesien 2 > 1, is die getal 4 328 100 groter.',
    },

    // ── V6 Medium — dalende volgorde ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Orden in dalende volgorde: 2 341 000, 987 234, 2 340 999, 15 000 000.',
      answer: '15 000 000, 2 341 000, 2 340 999, 987 234',
      checkMode: 'self',
    },

    // ── V7 Moeilik — redenering oor vergelyking van getalle ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê 9 999 999 is groter as 10 000 000 omdat 9 groter as 1 is. Is sy korrek? Verduidelik.',
      answer: 'Nee — ons vergelyk getalle eers volgens die aantal syfers. 10 000 000 het 8 syfers en 9 999 999 het 7 syfers, dus is 10 000 000 groter.',
      checkMode: 'self',
    },

    // ── V8 Maklik — afronding na die naaste miljoen ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Rond 3 456 789 af na die naaste miljoen.',
      answer: '3 000 000',
      checkMode: 'auto',
      correctAnswer: '3 000 000',
      explanation: 'Die afrondingsyfer is die miljoene-syfer — dit is 3. Die syfer regs daarvan (honderdduisende) is 4. Aangesien 4 minder as 5 is, rond ons af — hou die miljoene-syfer as 3 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 3 000 000.',
    },

    // ── V9 Medium — afronding na die naaste tienduisend ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Rond 7 845 320 af na die naaste tienduisend.',
      answer: '7 850 000',
      checkMode: 'auto',
      correctAnswer: '7 850 000',
      explanation: 'Die afrondingsyfer is die tienduisende-syfer — dit is 4. Die syfer regs daarvan (duisende) is 5. Aangesien 5 5 of meer is, rond ons op — tel die tienduisende-syfer van 4 na 5 op en vervang alle syfers regs daarvan met nulle.\nAntwoord: 7 850 000.',
    },

    // ── V10 Moeilik — redenering oor afronding ──────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle rond 4 500 000 af na die naaste miljoen en kry 5 000 000. Is sy korrek? Verduidelik.',
      answer: 'Ja — die honderdduisende-syfer is 5, dus rond ons op. 4 500 000 afgerond na die naaste miljoen is 5 000 000.',
      checkMode: 'self',
    },

    // ── V11 Maklik — eerste vyf veelvoude ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Lys die eerste 5 veelvoude van 7.',
      answer: '7, 14, 21, 28, 35',
      checkMode: 'auto',
      correctAnswer: '7, 14, 21, 28, 35',
      explanation: '7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\nEerste 5 veelvoude van 7: 7, 14, 21, 28, 35.',
    },

    // ── V12 Medium — GGF ─────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die GGF van 18 en 30.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Faktore van 18: 1, 2, 3, 6, 9, 18.\nFaktore van 30: 1, 2, 3, 5, 6, 10, 15, 30.\nGemene faktore: 1, 2, 3, 6.\nDie grootste gemene faktor is 6.\nGGF van 18 en 30 = 6.',
    },

    // ── V13 Moeilik — KGV ───────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die KGV van 6 en 8.',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: 'Veelvoude van 6: 6, 12, 18, 24, 30, …\nVeelvoude van 8: 8, 16, 24, 32, …\nDie kleinste veelvoud wat in albei lyste voorkom, is 24.\nKGV van 6 en 8 = 24.',
    },

    // ── V14 Maklik — priem of saamgesteld ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is 51 ʼn priemgetal?',
      answer: 'nee',
      checkMode: 'auto',
      correctAnswer: 'nee',
      explanation: 'Toets vir faktore: 51 ÷ 3 = 17 presies (syfersom: 5 + 1 = 6, wat deelbaar is deur 3).\nAangesien 51 = 3 × 17, het dit faktore anders as 1 en homself.\n51 is ʼn saamgestelde getal, nie priem nie.',
    },

    // ── V15 Moeilik — priemfaktorisering ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Skryf 48 as ʼn produk van sy priemfaktore.',
      answer: '2 x 2 x 2 x 2 x 3',
      checkMode: 'auto',
      correctAnswer: '2 x 2 x 2 x 2 x 3',
      explanation: 'Deel herhaaldelik deur die kleinste priem:\n48 ÷ 2 = 24\n24 ÷ 2 = 12\n12 ÷ 2 = 6\n6 ÷ 2 = 3\n3 ÷ 3 = 1\nPriemfaktore: 2, 2, 2, 2, 3.\n48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minScore: 15, message: 'Uitstekend! Jy het hele getalle volkome bemeester.' },
      { minScore: 12, message: 'Uitstekende werk! Jy het ʼn sterk begrip van hele getalle.' },
      { minScore: 8, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! ʼn Perfekte telling — jy het hele getalle vir Graad 6 heeltemal bemeester. Hou so aan!' },
    { minScore: 12, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van hele getalle. Hersien enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 4, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer weer.' },
  ],
}

