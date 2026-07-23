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

      videoPlaceholder:
        'Kort video wat plekwaarde in 9-syfer hele getalle verduidelik met behulp van ʼn kleur-gekodeerde plekwaardetabel en wys hoe om getalle in uitgebreide notasie te skryf',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — EIENSKAPPE VAN HELE GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-whole-numbers',
      title: 'Eienskappe van Hele Getalle',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">Hele getalle volg reëls — genoem <strong>eienskappe</strong> — wat altyd werk, ongeag watter getalle jy gebruik. As jy hierdie eienskappe ken, help dit jou om jou werk na te gaan en baie vinniger in jou kop te bereken, deur getalle te herrangskik, te hergroepeer of in vriendeliker dele op te breek voordat jy optel of vermenigvuldig.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kommutatiewe eienskap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('assosiatiewe eienskap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('distributiewe eienskap')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('identiteitselemente')}</span>` +
        `</div>` +

        // ── The properties ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die eienskappe van hele getalle</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Kommutatiewe eienskap')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a + b = b + a &nbsp;en&nbsp; a × b = b × a. Jy kan getalle in <strong>enige volgorde</strong> optel of vermenigvuldig en steeds dieselfde antwoord kry.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Assosiatiewe eienskap')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(a + b) + c = a + (b + c) &nbsp;en&nbsp; (a × b) × c = a × (b × c). Jy kan getalle verskillend <strong>groepeer</strong> en steeds dieselfde antwoord kry.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Distributiewe eienskap')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a × (b + c) = (a × b) + (a × c). Om ʼn som met ʼn getal te vermenigvuldig gee dieselfde antwoord as om elke deel <strong>apart</strong> te vermenigvuldig en dan bymekaar te tel.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Identiteitselemente')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">a + 0 = a (${re('0 is die additiewe identiteit')}). a × 1 = a (${re('1 is die vermenigvuldigende identiteit')}). Om 0 by te tel of met 1 te vermenigvuldig verander ʼn getal nooit nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Using properties to calculate mentally ───────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gebruik eienskappe om in jou kop te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Herrangskik</strong> — gebruik die ${bl('kommutatiewe eienskap')} om getalle wat maklik saamgevoeg kan word (soos ʼn paar wat tot 10, 100 of 1 000 optel) langs mekaar te bring.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hergroepeer</strong> — gebruik die ${gr('assosiatiewe eienskap')} om die vriendelike paar eerste te kombineer, voordat jy die res hanteer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Breek op</strong> — gebruik die ${or('distributiewe eienskap')} om ʼn lastige getal in vriendeliker dele op te breek, vermenigvuldig elke deel, en tel (of trek) dan die resultate.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Vinnige truuk: vermenigvuldig met 99</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om ${or('6 × 99')} in jou kop te bereken, dink aan 99 as 100 − 1. Deur die ${or('distributiewe eienskap')} te gebruik: 6 × 99 = 6 × 100 − 6 × 1 = 600 − 6 = ${or('594')}. Getalle naby ʼn veelvoud van 10 of 100 is baie makliker om mee te vermenigvuldig nadat jy hulle so opgebreek het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die eienskappe van hele getalle om 37 + 58 + 63 in jou kop te bereken.',
          answer: `37 + 58 + 63 = ${gr('158')}`,
          steps: [
            `Gebruik die ${bl('kommutatiewe eienskap')} om die getalle te herrangskik sodat die vriendelike paar saam is: 37 + 58 + 63 = 37 + 63 + 58.`,
            `Gebruik die ${gr('assosiatiewe eienskap')} om die vriendelike paar eerste op te tel: (37 + 63) + 58.`,
            `37 + 63 = 100.`,
            `100 + 58 = ${gr('158')}.`,
          ],
        },
        {
          question: 'Gebruik die distributiewe eienskap om 6 × 99 in jou kop te bereken.',
          answer: `6 × 99 = ${or('594')}`,
          steps: [
            `Dink aan 99 as 100 − 1.`,
            `Gebruik die ${or('distributiewe eienskap')}: 6 × 99 = 6 × (100 − 1) = (6 × 100) − (6 × 1).`,
            `6 × 100 = 600 en 6 × 1 = 6.`,
            `600 − 6 = ${or('594')}.`,
          ],
        },
        {
          question: 'Watter eienskap wys (12 × 5) × 2 = 12 × (5 × 2)? Kontroleer dat albei kante dieselfde antwoord gee.',
          answer: `Dit wys die ${gr('assosiatiewe eienskap')} van vermenigvuldiging — albei kante is gelyk aan ${gr('120')}`,
          steps: [
            `Linkerkant: (12 × 5) × 2 = 60 × 2 = 120.`,
            `Regterkant: 12 × (5 × 2) = 12 × 10 = 120.`,
            `Albei kante is gelyk aan ${gr('120')}, al was die getalle verskillend gegroepeer.`,
            `Dit wys die ${gr('assosiatiewe eienskap')} van vermenigvuldiging.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — kommutatiewe eienskap invul ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die kommutatiewe eienskap om te voltooi: 24 + 39 = 39 + ___',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Die kommutatiewe eienskap sê a + b = b + a, so die volgorde van die getalle kan omgeruil word sonder om die antwoord te verander. 24 + 39 = 39 + 24.',
        },

        // ── V2 Maklik — noem die identiteitseienskap ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter eienskap wys 0 + 17 = 17?',
          answer: 'identiteitseienskap van optelling',
          checkMode: 'auto',
          correctAnswer: 'identiteitseienskap van optelling',
          correctAnswers: ['identiteitseienskap van optelling', 'additiewe identiteitseienskap', 'die additiewe identiteitseienskap', 'identiteitseienskap'],
          explanation: 'Om 0 by enige getal op te tel, verander die getal nie. Dit is die identiteitseienskap van optelling (of additiewe identiteitseienskap) — 0 word die additiewe identiteit genoem.',
        },

        // ── V3 Medium — distributiewe eienskap in jou kop ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik die distributiewe eienskap om 8 × 103 in jou kop te bereken. Wys jou werk.',
          answer: '8 × 103 = 8 × 100 + 8 × 3 = 800 + 24 = 824',
          checkMode: 'self',
        },

        // ── V4 Medium-Hard — kombineer kommutatiewe en assosiatiewe eienskappe ───
        {
          difficulty: 'Medium-Hard',
          question: 'Gebruik die eienskappe van hele getalle om 25 + 48 + 75 in jou kop te bereken. Wys watter eienskap jy by elke stap gebruik het.',
          answer: 'Kommutatiewe eienskap om te herrangskik: 25 + 75 + 48. Assosiatiewe eienskap om die vriendelike paar te groepeer: (25 + 75) + 48 = 100 + 48 = 148.',
          checkMode: 'self',
        },

        // ── V5 Moeilik — wanopvatting oor aftrekking ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Katlego sê aftrekking is kommutatief omdat 10 − 4 en 4 − 10 albei dieselfde twee getalle gebruik. Is hy korrek? Verduidelik met die twee berekeninge.',
          answer: 'Nee — 10 − 4 = 6 maar 4 − 10 = −6. Hierdie is nie gelyk nie, so aftrekking is NIE kommutatief nie. Die kommutatiewe eienskap geld net vir optelling en vermenigvuldiging, nie vir aftrekking of deling nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Die distributiewe eienskap as ʼn area-model: 7 × 12 word opgesplit in 7 × 10 en 7 × 2, waarna die twee kleiner produkte bymekaar getel word.',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 140" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="6" y="58" font-size="12" font-weight="700" fill="#0f1f3d">7</text>` +
        `<rect x="20" y="10" width="140" height="90" fill="rgba(37,99,235,0.12)" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<rect x="160" y="10" width="28" height="90" fill="rgba(234,88,12,0.15)" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<text x="90" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">10</text>` +
        `<text x="174" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">2</text>` +
        `<text x="110" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">7×12 = 70 + 14 = 84</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat die kommutatiewe, assosiatiewe en distributiewe eienskappe van hele getalle verduidelik, asook die additiewe en vermenigvuldigende identiteite, met voorbeelde van hoe om elke eienskap te gebruik om in jou kop te bereken',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERGELYK EN ORDEN VAN HELE GETALLE
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
        'Sy-aan-sy syfervergelyking van 4 728 350 en 4 736 200 met elke ooreenstemmende posisie in kolomme belyn en die verskillende tienduisende-syfers in oranje uitgelig met ʼn kleiner-as-simbool in rooi tussen die twee getalle',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 100" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="44" y="10" font-size="7" text-anchor="middle" fill="#6b7280">M</text>` +
        `<text x="76" y="10" font-size="7" text-anchor="middle" fill="#6b7280">HD</text>` +
        `<text x="108" y="10" font-size="7" text-anchor="middle" fill="#ea580c">TD</text>` +
        `<text x="140" y="10" font-size="7" text-anchor="middle" fill="#6b7280">D</text>` +
        `<text x="172" y="10" font-size="7" text-anchor="middle" fill="#6b7280">H</text>` +
        `<text x="204" y="10" font-size="7" text-anchor="middle" fill="#6b7280">T</text>` +
        `<text x="236" y="10" font-size="7" text-anchor="middle" fill="#6b7280">E</text>` +
        `<rect x="30" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="62" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="94" y="14" width="28" height="28" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<rect x="126" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="158" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="190" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="222" y="14" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="44" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="76" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="108" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">2</text>` +
        `<text x="140" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="172" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="204" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">5</text>` +
        `<text x="236" y="33" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">0</text>` +
        `<rect x="30" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="62" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="94" y="54" width="28" height="28" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<rect x="126" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="158" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="190" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="222" y="54" width="28" height="28" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="44" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="76" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="108" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">3</text>` +
        `<text x="140" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">6</text>` +
        `<text x="172" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="204" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">0</text>` +
        `<text x="236" y="73" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">0</text>` +
        `<text x="258" y="56" font-size="24" font-weight="700" fill="#dc2626">&lt;</text>` +
        `<text x="145" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4 728 350 &lt; 4 736 200</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om groot hele getalle te vergelyk en te orden deur eers syfers te tel en dan syfer vir syfer vanaf links te vergelyk met behulp van die groter-as, kleiner-as en gelyk-aan-simbole',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — AFRONDING VAN HELE GETALLE
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
        'Getallelyn wat 3 847 215 tussen 3 000 000 en 4 000 000 posisioneer met die middelpunt by 3 500 000 gemerk en ʼn pyl wat na 4 000 000 wys om afronding op te illustreer',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 130" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="70" x2="220" y2="70" stroke="#0f1f3d" stroke-width="2.5"/>` +
        `<line x1="20" y1="63" x2="20" y2="77" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="120" y1="63" x2="120" y2="77" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="220" y1="63" x2="220" y2="77" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="2" y="93" font-size="9" font-weight="700" fill="#0f1f3d">3 000 000</text>` +
        `<text x="120" y="93" text-anchor="middle" font-size="9" font-weight="700" fill="#6b7280">3 500 000</text>` +
        `<text x="238" y="93" text-anchor="end" font-size="9" font-weight="700" fill="#16a34a">4 000 000</text>` +
        `<circle cx="189" cy="70" r="4" fill="#2563eb"/>` +
        `<text x="189" y="60" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">3 847 215</text>` +
        `<text x="203" y="28" text-anchor="middle" font-size="8" font-weight="700" fill="#16a34a">rond op</text>` +
        `<line x1="189" y1="38" x2="212" y2="38" stroke="#16a34a" stroke-width="2.5"/>` +
        `<polygon points="220,38 210,33 210,43" fill="#16a34a"/>` +
        `<text x="120" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">3 847 215 rond op na 4 000 000</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om hele getalle na die naaste 10 100 1 000 10 000 100 000 en 1 000 000 af te rond met behulp van die kleur-gekodeerde syfer-regs-daarvan-reël',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VEELVOUDE EN FAKTORE
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
        'Venn-diagram wat die faktore van 24 en 36 vergelyk, met die gemene faktore in die oorvleuelende deel en die grootste gemene faktor van 12 in oranje uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<circle cx="95" cy="95" r="70" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="165" cy="95" r="70" fill="rgba(22,163,74,0.08)" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="60" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Faktore van 24</text>` +
        `<text x="200" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">Faktore van 36</text>` +
        `<text x="50" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="50" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">24</text>` +
        `<text x="210" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">9</text>` +
        `<text x="210" y="95" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">18</text>` +
        `<text x="210" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1f3d">36</text>` +
        `<text x="115" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="145" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="115" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="145" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<text x="115" y="110" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">6</text>` +
        `<circle cx="145" cy="107" r="11" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="145" y="111" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">12</text>` +
        `<text x="130" y="165" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">GGF(24, 36) = 12</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om al die faktore van ʼn getal met faktorpare te lys en hoe om die GGF en KGV van twee getalle te vind met behulp van lyste van faktore en veelvoude',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — PRIEMGETALLE EN SAAMGESTELDE GETALLE
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
        'Faktorboom vir 36 wat priemfaktorisering toon — 36 verdeel in 2 en 18, dan 18 in 2 en 9, dan 9 in 3 en 3 met priemfaktore in oranje uitgelig en die finale produknotasie 2 kwadraat maal 3 kwadraat in blou',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 170" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="120" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">36</text>` +
        `<line x1="112" y1="28" x2="76" y2="48" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="128" y1="28" x2="164" y2="48" stroke="#0f1f3d" stroke-width="2"/>` +
        `<circle cx="70" cy="58" r="13" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="70" y="63" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">2</text>` +
        `<text x="170" y="63" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">18</text>` +
        `<line x1="162" y1="67" x2="140" y2="83" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="178" y1="67" x2="200" y2="83" stroke="#0f1f3d" stroke-width="2"/>` +
        `<circle cx="136" cy="93" r="13" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="136" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">2</text>` +
        `<text x="204" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="#0f1f3d">9</text>` +
        `<line x1="197" y1="102" x2="180" y2="118" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="211" y1="102" x2="228" y2="118" stroke="#0f1f3d" stroke-width="2"/>` +
        `<circle cx="178" cy="128" r="13" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="178" y="133" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">3</text>` +
        `<circle cx="232" cy="128" r="13" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<text x="232" y="133" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">3</text>` +
        `<text x="140" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">36 = 2 × 2 × 3 × 3 = 2² × 3²</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat die verskil tussen priemgetalle en saamgestelde getalle verduidelik en priemfaktorisering demonstreer met behulp van ʼn faktorboom vir 36 met kleur-gekodeerde priemfaktore in oranje en produknotasie in blou',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Plekwaarde & uitgebreide notasie | 4-7 Vergelyk & orden |
    // 8-10 Afronding | 11-14 Veelvoude, faktore, GGF & KGV |
    // 15-19 Priem- en saamgestelde getalle, priemfaktorisering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die plekwaarde van die syfer 6 in 6 481 203?', answer: '6 000 000', checkMode: 'auto', correctAnswer: '6 000 000', explanation: 'Die syfer 6 is die syfer heel links in hierdie 7-syfergetal, dus is dit in die miljoene-plek.\nSy waarde is 6 × 1 000 000 = 6 000 000 ✓' },
        { difficulty: 'Easy', question: 'Skryf 528 694 371 in uitgebreide notasie.', answer: '500 000 000 + 20 000 000 + 8 000 000 + 600 000 + 90 000 + 4 000 + 300 + 70 + 1', checkMode: 'self', explanation: 'Elke nie-nul syfer word geskryf as sy volle waarde en bymekaar getel: 5 in honderd miljoene = 500 000 000, 2 in tien miljoene = 20 000 000, 8 in miljoene = 8 000 000, 6 in honderdduisende = 600 000, 9 in tienduisende = 90 000, 4 in duisende = 4 000, 3 in honderde = 300, 7 in tiene = 70, 1 in ene = 1.' },
        { difficulty: 'Easy', question: 'ʼn Getal het ʼn 4 in die honderdduisende-plek, ʼn 7 in die duisende-plek, en nulle oral anders, tot en met die honderdduisende. Wat is die getal?', answer: '407 000', checkMode: 'auto', correctAnswer: '407 000', explanation: '4 in honderdduisende = 400 000. 7 in duisende = 7 000. Al die ander syfers is 0.\n400 000 + 7 000 = 407 000 ✓' },
        { difficulty: 'Easy', question: 'Palesa sê die getal 3 809 214 het 8 syfers. Is sy korrek? Verduidelik.', answer: 'Nee — 3 809 214 het net 7 syfers: 3, 8, 0, 9, 2, 1, 4. Palesa het verkeerd getel.', checkMode: 'self', explanation: 'As jy die syfers een vir een tel: 3-8-0-9-2-1-4 gee presies 7 syfers, nie 8 nie. Dit is maklik om verkeerd te tel wanneer ʼn getal ʼn nul bevat, maar die nul tel steeds net as een syfer.' },
        { difficulty: 'Easy', question: 'Watter is groter — 6 245 800 of 6 249 500?', answer: '6 249 500', checkMode: 'auto', correctAnswer: '6 249 500', explanation: 'Albei getalle het 7 syfers, dus vergelyk syfer vir syfer vanaf links.\nMiljoene: albei 6 — gelyk. Honderdduisende: albei 2 — gelyk. Tienduisende: albei 4 — gelyk.\nDuisende: 5 vs 9 — aangesien 9 > 5, is die getal 6 249 500 groter ✓' },
        { difficulty: 'Easy', question: 'ʼn Boer het 84 500 kg mielies laaste seisoen verkoop en 138 200 kg hierdie seisoen. In watter seisoen het hy meer verkoop?', answer: 'Hierdie seisoen', checkMode: 'auto', correctAnswer: 'Hierdie seisoen', correctAnswers: ['hierdie seisoen', 'Hierdie seisoen (138 200 kg)'], explanation: '84 500 het 5 syfers. 138 200 het 6 syfers. ʼn Getal met meer syfers is altyd groter, dus is 138 200 kg meer as 84 500 kg — hierdie seisoen was die verkope groter ✓' },
        { difficulty: 'Easy', question: 'Bonga vergelyk 45 678 en 9 999 999 en sê 45 678 is groter omdat dit "soos ʼn normale getal lyk." Is hy korrek?', answer: 'Nee — 9 999 999 het 7 syfers terwyl 45 678 net 5 syfers het. ʼn Getal met meer syfers is altyd groter, dus is 9 999 999 baie groter as 45 678.', checkMode: 'self', explanation: 'As ons syfers tel: 45 678 het 5 syfers, 9 999 999 het 7 syfers. Aangesien 9 999 999 meer syfers het, moet dit die groter getal wees, ongeag hoe die syfers lyk. Bonga is verkeerd.' },
        { difficulty: 'Easy', question: 'Orden hierdie getalle van kleinste na grootste: 512 300, 89 750, 512 030, 1 200 000.', answer: '89 750, 512 030, 512 300, 1 200 000', checkMode: 'auto', correctAnswer: '89 750, 512 030, 512 300, 1 200 000', explanation: 'Tel syfers: 89 750 het 5 syfers (kleinste). 512 300 en 512 030 het elk 6 syfers. 1 200 000 het 7 syfers (grootste).\nVergelyk die twee 6-syfergetalle: 512 300 vs 512 030 — honderde-plek: 3 vs 0, dus 512 030 < 512 300.\nVolgorde: 89 750, 512 030, 512 300, 1 200 000 ✓' },
        { difficulty: 'Medium', question: 'Rond 68 432 915 af na die naaste tienduisend.', answer: '68 430 000', checkMode: 'auto', correctAnswer: '68 430 000', explanation: 'Die afrondingsyfer is die tienduisende-syfer — dit is 3. Die syfer regs daarvan (duisende) is 2. Aangesien 2 minder as 5 is, rond ons af — hou die tienduisende-syfer as 3 en vervang alle syfers regs daarvan met nulle.\nAntwoord: 68 430 000 ✓' },
        { difficulty: 'Medium', question: 'ʼn Stadion het ʼn bywoning van 45 728 toeskouers by ʼn groot wedstryd gehad. Rond hierdie syfer af na die naaste duisend vir die koerantopskrif.', answer: '46 000', checkMode: 'auto', correctAnswer: '46 000', explanation: 'Die afrondingsyfer is die duisende-syfer — dit is 5. Die syfer regs daarvan (honderde) is 7. Aangesien 7 5 of meer is, rond ons op — tel die duisende-syfer van 5 na 6 op.\nAfgeronde bywoning: 46 000 toeskouers ✓' },
        { difficulty: 'Medium', question: 'Thandeka rond 82 500 af na die naaste duisend en kry 82 000, en sê "die honderde-syfer is 5, dus bly dit dieselfde." Is sy korrek?', answer: 'Nee — wanneer die syfer regs daarvan presies 5 is, rond ons OP, nie hou dit dieselfde nie. 82 500 afgerond na die naaste duisend is 83 000.', checkMode: 'self', explanation: 'Die afrondingsyfer is die duisende-syfer (2). Die syfer regs daarvan is 5, wat onder die "5 of meer, rond op"-reël val — dit beteken nie "bly dieselfde" nie. So 82 500 rond op na 83 000, nie af na 82 000 nie. Thandeka het die klassieke grens-5-fout gemaak.' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsfondsinsameling het R596 400 ingesamel. Rond hierdie bedrag af na die naaste R10 000, en skat dan hoeveel R50 000-projektoelaes daardie afgeronde bedrag kan befonds (ignoreer enige oorskot).', answer: 'R600 000, wat 12 toelaes kan befonds', checkMode: 'auto', correctAnswer: 'R600 000, wat 12 toelaes kan befonds', correctAnswers: ['R600 000, 12 toelaes', '600 000, 12', '12 toelaes'], explanation: 'Rond 596 400 af na die naaste 10 000: die afrondingsyfer (tienduisende) is 9, die syfer regs daarvan (duisende) is 6, dus rond ons op — 596 400 → 600 000.\nR600 000 ÷ R50 000 = 12 toelaes ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys die eerste 6 veelvoude van 9.', answer: '9, 18, 27, 36, 45, 54', checkMode: 'auto', correctAnswer: '9, 18, 27, 36, 45, 54', explanation: '9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27, 9 × 4 = 36, 9 × 5 = 45, 9 × 6 = 54\nEerste 6 veelvoude van 9: 9, 18, 27, 36, 45, 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys al die faktore van 40.', answer: '1, 2, 4, 5, 8, 10, 20, 40', checkMode: 'auto', correctAnswer: '1, 2, 4, 5, 8, 10, 20, 40', correctAnswers: ['1, 2, 4, 5, 8, 10, 20, 40', '1,2,4,5,8,10,20,40'], explanation: '40 ÷ 1 = 40, ÷2 = 20, ÷4 = 10, ÷5 = 8 (ontmoet in die middel).\nFaktore van 40: 1, 2, 4, 5, 8, 10, 20, 40 ✓' },
        { difficulty: 'Medium-Hard', question: 'Twee taxiroetes vertrek saam by dieselfde staanplek. Roete A vertrek elke 15 minute en Roete B vertrek elke 20 minute. Na hoeveel minute sal hulle weer saam vertrek?', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'Dit is ʼn KGV-probleem: vind die KGV van 15 en 20.\nVeelvoude van 15: 15, 30, 45, 60\nVeelvoude van 20: 20, 40, 60\nKleinste gedeelde veelvoud: 60\nHulle sal weer saam vertrek na 60 minute ✓' },
        { difficulty: 'Medium-Hard', question: 'Kagiso probeer die faktore van 28 vind. Hy lys 1, 2, 4, 7, 28 en stop. Het hy al die faktore gevind?', answer: 'Nee — hy het 14 uitgelaat. Die volledige lys van faktore van 28 is 1, 2, 4, 7, 14, 28.', checkMode: 'self', explanation: '28 ÷ 1 = 28, ÷2 = 14, ÷4 = 7 — dus moet 14 ook ʼn faktor wees aangesien 4 × 7 = 28 reeds voorkom, maar 14 (sy paarmaat met 2) is uitgelaat. Volledige lys: 1, 2, 4, 7, 14, 28. Kagiso het vergeet om die faktorpaar-maat vir 2 in te sluit.' },
        { difficulty: 'Hard', question: 'Is 59 ʼn priemgetal? Regverdig jou antwoord met deelbaarheidstoetse vir 2, 3 en 5.', answer: 'Ja, 59 is priem — dit is nie deelbaar deur 2 nie (onewe), nie deelbaar deur 3 nie (syfersom 5+9=14, nie ʼn veelvoud van 3 nie), en nie deelbaar deur 5 nie (eindig nie op 0 of 5 nie), en geen ander getal onder sy vierkantswortel deel presies daarin nie.', checkMode: 'self', explanation: '59 is onewe, dus deel 2 nie daarin nie. Syfersom = 5 + 9 = 14, nie deelbaar deur 3 nie. Dit eindig nie op 0 of 5 nie, dus deel 5 nie daarin nie. As ons tot by die vierkantswortel toets (ongeveer 7,7) — 7 deel ook nie in 59 nie (7 × 8 = 56, 7 × 9 = 63). Dus is 59 priem ✓' },
        { difficulty: 'Hard', question: 'Skryf 72 as ʼn produk van sy priemfaktore, met indeksnotasie (eksponente).', answer: '2³ x 3²', checkMode: 'auto', correctAnswer: '2³ x 3²', correctAnswers: ['2³ x 3²', '2^3 x 3^2', '2³ × 3²', '2^3 × 3²'], explanation: '72 ÷ 2 = 36, 36 ÷ 2 = 18, 18 ÷ 2 = 9, 9 ÷ 3 = 3, 3 ÷ 3 = 1\nPriemfaktore: 2, 2, 2, 3, 3\n2 kom drie keer voor, 3 kom twee keer voor\n72 = 2³ × 3² ✓' },
        { difficulty: 'Hard', question: 'Zola sê 1 is ʼn priemgetal omdat "niks anders presies daarin pas behalwe homself nie." Is sy korrek?', answer: 'Nee — 1 is nie priem of saamgesteld nie. ʼn Priemgetal moet presies TWEE faktore hê (1 en homself), maar 1 het net EEN faktor (homself), dus voldoen dit nie aan die definisie van priem nie.', checkMode: 'self', explanation: 'ʼn Priemgetal word gedefinieer as ʼn getal met presies twee verskillende faktore: 1 en homself. Vir die getal 1 sou daardie twee dieselfde getal wees, wat net een faktor in totaal gee. Aangesien 1 nie presies twee faktore het nie, word dit van priem uitgesluit volgens definisie — dit is nie priem of saamgesteld nie.' },
        { difficulty: 'Hard', question: 'Vind die priemfaktorisering van beide 60 en 84, en gebruik dit om die GGF van 60 en 84 te bepaal.', answer: '60 = 2² x 3 x 5, 84 = 2² x 3 x 7, GGF = 12', checkMode: 'auto', correctAnswer: '60 = 2² x 3 x 5, 84 = 2² x 3 x 7, GGF = 12', correctAnswers: ['GGF = 12', '12'], explanation: '60 = 2 × 2 × 3 × 5 = 2² × 3 × 5\n84 = 2 × 2 × 3 × 7 = 2² × 3 × 7\nGedeelde priemfaktore: 2 (laagste mag 2²) en 3 (laagste mag 3¹)\nGGF = 2² × 3 = 4 × 3 = 12 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het ʼn rotsvaste begrip van hele getalle — plekwaarde, afronding, faktore en priemgetalle. Hou so aan!' },
        { minScore: 15, message: 'Uitstekende werk! Jy verstaan hele getalle duidelik — hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor plekwaarde, afronding, faktore en priemgetalle, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — elke wiskundige het iewers begin! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokuitleg as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 4 in 245 678?', answer: '40 000', checkMode: 'auto', correctAnswer: '40 000', explanation: 'Die syfer 4 is in die tienduisende-plek van 245 678.\nSy waarde is 4 × 10 000 = 40 000 ✓' },
        { difficulty: 'Easy', question: 'Skryf 704 918 263 in uitgebreide notasie.', answer: '700 000 000 + 4 000 000 + 900 000 + 10 000 + 8 000 + 200 + 60 + 3', checkMode: 'self', explanation: '7 in honderd miljoene = 700 000 000, 0 in tien miljoene dra niks by nie, 4 in miljoene = 4 000 000, 9 in honderdduisende = 900 000, 1 in tienduisende = 10 000, 8 in duisende = 8 000, 2 in honderde = 200, 6 in tiene = 60, 3 in ene = 3.' },
        { difficulty: 'Easy', question: 'ʼn Getal het ʼn 9 in die tien miljoene-plek, ʼn 3 in die honderde-plek, en nulle oral anders. Wat is die getal?', answer: '90 000 300', checkMode: 'auto', correctAnswer: '90 000 300', explanation: '9 in tien miljoene = 90 000 000. 3 in honderde = 300. Al die ander syfers is 0.\n90 000 000 + 300 = 90 000 300 ✓' },
        { difficulty: 'Easy', question: 'Mpho skryf die getal ses miljoen, veertig duisend, vyf as 6 040 005. Is sy getal korrek?', answer: 'Ja — 6 000 000 + 40 000 + 5 = 6 040 005, wat presies ooreenstem met "ses miljoen, veertig duisend, vyf."', checkMode: 'self', explanation: 'Ses miljoen = 6 000 000. Veertig duisend = 40 000. Vyf = 5. As ons dit optel: 6 000 000 + 40 000 + 5 = 6 040 005. Mpho is korrek — die nulle hou korrek die honderdduisende-, duisende-, honderde- en tiene-plekke.' },
        { difficulty: 'Easy', question: 'Watter is kleiner — 3 720 600 of 3 718 900?', answer: '3 718 900', checkMode: 'auto', correctAnswer: '3 718 900', explanation: 'Albei getalle het 7 syfers, dus vergelyk syfer vir syfer vanaf links.\nMiljoene: albei 3 — gelyk. Honderdduisende: albei 7 — gelyk.\nTienduisende: 2 vs 1 — aangesien 1 < 2, is die getal 3 718 900 kleiner ✓' },
        { difficulty: 'Easy', question: 'Dorp A het ʼn bevolking van 256 900 en Dorp B het ʼn bevolking van 98 400. Watter dorp het meer mense?', answer: 'Dorp A', checkMode: 'auto', correctAnswer: 'Dorp A', correctAnswers: ['Dorp A (256 900)', 'dorp a'], explanation: '256 900 het 6 syfers, terwyl 98 400 5 syfers het. ʼn Getal met meer syfers is altyd groter, dus het Dorp A (256 900) meer mense as Dorp B (98 400) ✓' },
        { difficulty: 'Easy', question: 'Gegewe 618 200 en 6 182 000, sê Reabetswe hierdie is basies dieselfde getal aangesien die syfers "6, 1, 8, 2" in albei voorkom. Is sy korrek?', answer: 'Nee — 618 200 het 6 syfers terwyl 6 182 000 7 syfers het. Om dieselfde voorste syfers te hê maak nie getalle gelyk nie; 6 182 000 is tien keer groter as 618 200.', checkMode: 'self', explanation: '618 200 het 6 syfers, 6 182 000 het 7 syfers — ʼn getal met meer syfers is altyd groter. Trouens, 6 182 000 is presies 10 keer 618 200. Om dieselfde voorste syfers te deel is irrelevant vir die grootte-vergelyking; Reabetswe is verkeerd.' },
        { difficulty: 'Easy', question: 'Orden hierdie getalle van grootste na kleinste: 74 300, 743 000, 74 030, 7 430 000.', answer: '7 430 000, 743 000, 74 300, 74 030', checkMode: 'auto', correctAnswer: '7 430 000, 743 000, 74 300, 74 030', explanation: 'Tel syfers: 7 430 000 het 7 syfers (grootste). 743 000 het 6 syfers. 74 300 en 74 030 het elk 5 syfers.\nVergelyk die twee 5-syfergetalle: 74 300 vs 74 030 — tiene-plek: 0 vs 3, dus 74 300 > 74 030.\nVolgorde: 7 430 000, 743 000, 74 300, 74 030 ✓' },
        { difficulty: 'Medium', question: 'Rond 245 678 af na die naaste duisend.', answer: '246 000', checkMode: 'auto', correctAnswer: '246 000', explanation: 'Die afrondingsyfer is die duisende-syfer — dit is 5. Die syfer regs daarvan (honderde) is 6. Aangesien 6 5 of meer is, rond ons op — tel die duisende-syfer van 5 na 6 op.\nAntwoord: 246 000 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool se fondsinsamelingsveldtog het R823 456 ingesamel. Rond hierdie bedrag af na die naaste R100 vir die skoolnuusbrief.', answer: 'R823 500', checkMode: 'auto', correctAnswer: 'R823 500', explanation: 'Die afrondingsyfer is die honderde-syfer — dit is 4. Die syfer regs daarvan (tiene) is 5. Aangesien 5 5 of meer is, rond ons op — tel die honderde-syfer van 4 na 5 op.\nAfgeronde bedrag: R823 500 ✓' },
        { difficulty: 'Medium', question: 'Kagiso rond 34 200 af na die naaste tienduisend en kry 40 000, en sê "die tienduisende-syfer is 3, dus rond dit beslis op." Is hy korrek?', answer: 'Nee — 34 200 afgerond na die naaste tienduisend is 30 000. Die syfer regs van die tienduisende-syfer is 4 (duisende), en aangesien 4 minder as 5 is, rond ons af, nie op nie.', checkMode: 'self', explanation: 'Die afrondingsyfer is die tienduisende-syfer (3). Die syfer regs daarvan is 4 (duisende), wat minder as 5 is, dus rond ons AF, en hou die tienduisende-syfer as 3: 34 200 → 30 000. Kagiso het verkeerdelik in die verkeerde rigting afgerond.' },
        { difficulty: 'Medium', question: 'ʼn Distrik het ʼn bevolking van 1 248 700 mense by die laaste sensus aangeteken. Rond dit af na die naaste 100 000, en skat dan hoeveel skole van 5 000 leerders elk daardie afgeronde bevolking teoreties sou kon vul (ignoreer enige oorskot).', answer: '1 200 000, wat 240 skole sou kon vul', checkMode: 'auto', correctAnswer: '1 200 000, wat 240 skole sou kon vul', correctAnswers: ['1 200 000, 240 skole', '1 200 000, 240', '240 skole'], explanation: 'Rond 1 248 700 af na die naaste 100 000: die afrondingsyfer (honderdduisende) is 2, die syfer regs daarvan (tienduisende) is 4, dus rond ons af — 1 248 700 → 1 200 000.\n1 200 000 ÷ 5 000 = 240 skole ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys die eerste 6 veelvoude van 11.', answer: '11, 22, 33, 44, 55, 66', checkMode: 'auto', correctAnswer: '11, 22, 33, 44, 55, 66', explanation: '11 × 1 = 11, 11 × 2 = 22, 11 × 3 = 33, 11 × 4 = 44, 11 × 5 = 55, 11 × 6 = 66\nEerste 6 veelvoude van 11: 11, 22, 33, 44, 55, 66 ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys al die faktore van 32.', answer: '1, 2, 4, 8, 16, 32', checkMode: 'auto', correctAnswer: '1, 2, 4, 8, 16, 32', correctAnswers: ['1, 2, 4, 8, 16, 32', '1,2,4,8,16,32'], explanation: '32 ÷ 1 = 32, ÷2 = 16, ÷4 = 8 (ontmoet in die middel).\nFaktore van 32: 1, 2, 4, 8, 16, 32 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Bakker het 36 muffins en 60 koekies. Sy wil hulle op skinkborde rangskik met die grootste moontlike gelyke aantal van elke item per skinkbord, met alles gebruik en niks oor nie. Hoeveel skinkborde het sy nodig?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Dit is ʼn GGF-probleem: vind die GGF van 36 en 60.\nFaktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nFaktore van 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\nGemene faktore: 1, 2, 3, 4, 6, 12\nGGF = 12, dus benodig sy 12 skinkborde ✓' },
        { difficulty: 'Medium-Hard', question: 'Naledi sê 6 is ʼn faktor van 42 maar nie ʼn veelvoud van 42 nie. Is sy korrek?', answer: 'Ja — 42 ÷ 6 = 7 presies, dus is 6 ʼn faktor van 42. Maar die veelvoude van 42 (42, 84, 126 …) is almal baie groter as 6, dus is 6 nie ʼn veelvoud van 42 nie.', checkMode: 'self', explanation: '6 is ʼn faktor van 42 omdat 6 × 7 = 42 presies, sonder ʼn res. ʼn Veelvoud van 42 moet 42 keer ʼn heelgetal wees (42, 84, 126, …), en 6 is kleiner as 42, dus kan dit nie ʼn veelvoud van 42 wees nie. Naledi is korrek.' },
        { difficulty: 'Hard', question: 'Is 91 ʼn priemgetal? Regverdig jou antwoord met deelbaarheidstoetse vir 2, 3, 5 en 7.', answer: 'Nee, 91 is saamgesteld — dit is nie deelbaar deur 2, 3 of 5 nie, maar 91 ÷ 7 = 13 presies, dus is 7 en 13 faktore van 91 buiten 1 en 91.', checkMode: 'self', explanation: '91 is onewe (nie deelbaar deur 2 nie). Syfersom = 9 + 1 = 10, nie deelbaar deur 3 nie. Eindig nie op 0 of 5 nie (nie deelbaar deur 5 nie). As ons 7 toets: 7 × 13 = 91 presies. Aangesien 91 faktore anders as 1 en homself het, is dit saamgesteld, nie priem nie.' },
        { difficulty: 'Hard', question: 'Skryf 100 as ʼn produk van sy priemfaktore, met indeksnotasie (eksponente).', answer: '2² x 5²', checkMode: 'auto', correctAnswer: '2² x 5²', correctAnswers: ['2² x 5²', '2^2 x 5^2', '2² × 5²', '2^2 × 5²'], explanation: '100 ÷ 2 = 50, 50 ÷ 2 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1\nPriemfaktore: 2, 2, 5, 5\n2 kom twee keer voor, 5 kom twee keer voor\n100 = 2² × 5² ✓' },
        { difficulty: 'Hard', question: 'Tumi sê 21 is ʼn priemgetal omdat dit onewe is en nie op 0 of 5 eindig nie. Is hy korrek?', answer: 'Nee — 21 is saamgesteld. Alhoewel dit onewe is en nie op 0 of 5 eindig nie, is dit deelbaar deur 3 en 7 (21 = 3 × 7), dus het dit meer as twee faktore.', checkMode: 'self', explanation: 'Onewe wees sluit slegs deelbaarheid deur 2 uit, en nie op 0 of 5 eindig sluit slegs deelbaarheid deur 5 uit. Tumi het vergeet om deelbaarheid deur 3 te toets: syfersom 2 + 1 = 3, wat deelbaar is deur 3, dus 21 = 3 × 7. Aangesien 21 faktore 1, 3, 7 en 21 het, is dit saamgesteld, nie priem nie.' },
        { difficulty: 'Hard', question: 'Vind die priemfaktorisering van beide 90 en 60, en gebruik dit om die KGV van 90 en 60 te bepaal.', answer: '90 = 2 x 3² x 5, 60 = 2² x 3 x 5, KGV = 180', checkMode: 'auto', correctAnswer: '90 = 2 x 3² x 5, 60 = 2² x 3 x 5, KGV = 180', correctAnswers: ['KGV = 180', '180'], explanation: '90 = 2 × 3 × 3 × 5 = 2 × 3² × 5\n60 = 2 × 2 × 3 × 5 = 2² × 3 × 5\nAlle priemfaktore met die hoogste mag: 2² (van 60), 3² (van 90), 5¹ (gedeel)\nKGV = 2² × 3² × 5 = 4 × 9 × 5 = 180 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan plekwaarde, afronding, faktore en priemgetalle met vertroue op ʼn wye reeks probleme toepas.' },
        { minScore: 15, message: 'Uitstekende werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokuitleg, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die plekwaarde van die syfer 3 in 812 356 940?', answer: '300 000', checkMode: 'auto', correctAnswer: '300 000', explanation: 'As ons van regs af tel in 812 356 940, val die syfer 3 in die honderdduisende-plek.\nSy waarde is 3 × 100 000 = 300 000 ✓' },
        { difficulty: 'Easy', question: 'Skryf 390 062 508 in uitgebreide notasie.', answer: '300 000 000 + 90 000 000 + 60 000 + 2 000 + 500 + 8', checkMode: 'self', explanation: '3 in honderd miljoene = 300 000 000, 9 in tien miljoene = 90 000 000, 0 in miljoene dra niks by nie, 0 in honderdduisende dra niks by nie, 6 in tienduisende = 60 000, 2 in duisende = 2 000, 5 in honderde = 500, 0 in tiene dra niks by nie, 8 in ene = 8.' },
        { difficulty: 'Easy', question: 'ʼn Getal het ʼn 8 in die miljoene-plek, ʼn 5 in die tiene-plek, en nulle oral anders. Wat is die getal?', answer: '8 000 050', checkMode: 'auto', correctAnswer: '8 000 050', explanation: '8 in miljoene = 8 000 000. 5 in tiene = 50. Al die ander syfers is 0.\n8 000 000 + 50 = 8 000 050 ✓' },
        { difficulty: 'Easy', question: 'Sizwe sê dat in die getal 5 026 741 die nul geen waarde het nie en net weggelaat kan word wanneer die getal geskryf word. Is hy korrek?', answer: 'Nee — die nul hou die honderdduisende-plek. As dit verwyder word, verander die getal na 526 741, wat ʼn heeltemal ander (en baie kleiner) getal is.', checkMode: 'self', explanation: 'Alhoewel die nul self 0 × 100 000 = 0 bydra tot die uitgebreide notasie-som, is dit noodsaaklik as ʼn plekhouer om elke ander syfer in sy korrekte posisie te hou. As dit verwyder word, val die getal ineen na 526 741 (6 syfers in plaas van 7), wat verkeerd is. Sizwe is verkeerd.' },
        { difficulty: 'Easy', question: 'Watter is groter — 91 480 200 of 9 999 999?', answer: '91 480 200', checkMode: 'auto', correctAnswer: '91 480 200', explanation: '91 480 200 het 8 syfers, terwyl 9 999 999 net 7 syfers het. ʼn Getal met meer syfers is altyd groter, dus is 91 480 200 groter ✓' },
        { difficulty: 'Easy', question: 'ʼn Maatskappy se jaarlikse begroting is R2 450 000 en ʼn mededinger se begroting is R980 600. Watter maatskappy het die groter begroting?', answer: 'Die eerste maatskappy', checkMode: 'auto', correctAnswer: 'Die eerste maatskappy', correctAnswers: ['eerste maatskappy', 'R2 450 000'], explanation: 'R2 450 000 het 7 syfers, terwyl R980 600 6 syfers het. ʼn Getal met meer syfers is altyd groter, dus is die eerste maatskappy se begroting van R2 450 000 groter ✓' },
        { difficulty: 'Easy', question: 'Wanneer hy 512 400 en 59 800 vergelyk, lyn Vusi die syfers op as "51" vs "59" en sê 59 800 is groter omdat 9 > 1. Is hy korrek?', answer: 'Nee — 512 400 het 6 syfers terwyl 59 800 net 5 syfers het, dus is 512 400 die groter getal. Jy moet eers syfers tel en net syfer vir syfer vergelyk wanneer die getalle DIESELFDE aantal syfers het.', checkMode: 'self', explanation: 'Vusi het die syfers verkeerdelik opgelyn sonder om eers te tel hoeveel syfers elke getal het. 512 400 het 6 syfers, 59 800 het 5 syfers — aangesien hulle verskillende syferaantal het, is die een met meer syfers (512 400) outomaties groter, ongeag wat die voorste syfers is.' },
        { difficulty: 'Easy', question: 'Orden hierdie getalle van kleinste na grootste: 6 003 200, 603 200, 6 030 200, 630 200.', answer: '603 200, 630 200, 6 003 200, 6 030 200', checkMode: 'auto', correctAnswer: '603 200, 630 200, 6 003 200, 6 030 200', explanation: 'Tel syfers: 603 200 en 630 200 het elk 6 syfers. 6 003 200 en 6 030 200 het elk 7 syfers.\nVergelyk die twee 6-syfergetalle: 603 200 vs 630 200 — tienduisende-plek: 0 vs 3, dus 603 200 < 630 200.\nVergelyk die twee 7-syfergetalle: 6 003 200 vs 6 030 200 — honderdduisende-plek: 0 vs 3, dus 6 003 200 < 6 030 200.\nVolgorde: 603 200, 630 200, 6 003 200, 6 030 200 ✓' },
        { difficulty: 'Medium', question: 'Rond 5 648 219 af na die naaste honderdduisend.', answer: '5 600 000', checkMode: 'auto', correctAnswer: '5 600 000', explanation: 'Die afrondingsyfer is die honderdduisende-syfer — dit is 6. Die syfer regs daarvan (tienduisende) is 4. Aangesien 4 minder as 5 is, rond ons af — hou die honderdduisende-syfer as 6.\nAntwoord: 5 600 000 ✓' },
        { difficulty: 'Medium', question: 'ʼn Veldloopwedloop dek ʼn afstand van 18 350 m. Rond hierdie afstand af na die naaste 100 m vir die geleentheidsplakkaat.', answer: '18 400 m', checkMode: 'auto', correctAnswer: '18 400 m', correctAnswers: ['18 400', '18400 m'], explanation: 'Die afrondingsyfer is die honderde-syfer — dit is 3. Die syfer regs daarvan (tiene) is 5. Aangesien 5 5 of meer is, rond ons op — tel die honderde-syfer van 3 na 4 op.\nAfgeronde afstand: 18 400 m ✓' },
        { difficulty: 'Medium', question: 'Anele rond 7 499 999 af na die naaste miljoen en kry 7 000 000, en sê "die getal is minder as 7 500 000, dus moet dit afrond." Is haar redenasie en antwoord korrek?', answer: 'Ja — die honderdduisende-syfer is 4, wat minder as 5 is, dus rond ons af. 7 499 999 afgerond na die naaste miljoen is inderdaad 7 000 000.', checkMode: 'self', explanation: 'Die afrondingsyfer is die miljoene-syfer (7). Die syfer regs daarvan (honderdduisende) is 4, wat minder as 5 is, dus rond ons af, en hou die miljoene-syfer as 7: 7 499 999 → 7 000 000. Anele se redenasie en antwoord is albei korrek.' },
        { difficulty: 'Medium', question: 'ʼn Stad het 912 345 678 liter water gebruik in ʼn jaar oor alle huishoudings. Rond dit af na die naaste miljoen liter, en skat dan hoeveel jare van 90 000 000 liter dit sou neem teen daardie afgeronde tempo om weer daardie totaal te bereik (ignoreer enige oorskot).', answer: '912 000 000 liter, wat ongeveer 10 jaar is teen 90 000 000 liter per jaar', checkMode: 'auto', correctAnswer: '912 000 000 liter, wat ongeveer 10 jaar is teen 90 000 000 liter per jaar', correctAnswers: ['912 000 000, 10 jaar', '912 000 000 liter, 10 jaar', '10 jaar'], explanation: 'Rond 912 345 678 af na die naaste miljoen: die afrondingsyfer (miljoene) is 2, die syfer regs daarvan (honderdduisende) is 3, dus rond ons af — 912 345 678 → 912 000 000.\n912 000 000 ÷ 90 000 000 = 10,13…, dus ongeveer 10 jaar ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys die eerste 6 veelvoude van 13.', answer: '13, 26, 39, 52, 65, 78', checkMode: 'auto', correctAnswer: '13, 26, 39, 52, 65, 78', explanation: '13 × 1 = 13, 13 × 2 = 26, 13 × 3 = 39, 13 × 4 = 52, 13 × 5 = 65, 13 × 6 = 78\nEerste 6 veelvoude van 13: 13, 26, 39, 52, 65, 78 ✓' },
        { difficulty: 'Medium-Hard', question: 'Lys al die faktore van 54.', answer: '1, 2, 3, 6, 9, 18, 27, 54', checkMode: 'auto', correctAnswer: '1, 2, 3, 6, 9, 18, 27, 54', correctAnswers: ['1, 2, 3, 6, 9, 18, 27, 54', '1,2,3,6,9,18,27,54'], explanation: '54 ÷ 1 = 54, ÷2 = 27, ÷3 = 18, ÷6 = 9 (ontmoet in die middel).\nFaktore van 54: 1, 2, 3, 6, 9, 18, 27, 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Verkoper het 45 lemoene en 63 appels. Sy wil identiese vrugtesakke pak met al die vrugte gebruik en niks oor nie, met elke sak die grootste moontlike gelyke deel. Hoeveel sakke kan sy maak?', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Dit is ʼn GGF-probleem: vind die GGF van 45 en 63.\nFaktore van 45: 1, 3, 5, 9, 15, 45\nFaktore van 63: 1, 3, 7, 9, 21, 63\nGemene faktore: 1, 3, 9\nGGF = 9, dus kan sy 9 identiese vrugtesakke maak ✓' },
        { difficulty: 'Medium-Hard', question: 'Het 8 meer faktore as 9? Lys elke stel faktore om te kyk.', answer: 'Ja — 8 het 4 faktore (1, 2, 4, 8) terwyl 9 net 3 faktore het (1, 3, 9).', checkMode: 'self', explanation: 'Faktore van 8: 1, 2, 4, 8 — dit is 4 faktore.\nFaktore van 9: 1, 3, 9 — dit is 3 faktore.\nAangesien 4 > 3, het die getal 8 meer faktore as 9.' },
        { difficulty: 'Hard', question: 'Is 83 ʼn priemgetal? Regverdig jou antwoord met deelbaarheidstoetse vir 2, 3, 5 en 7.', answer: 'Ja, 83 is priem — dit is onewe (nie deelbaar deur 2 nie), syfersom 8+3=11 is nie deelbaar deur 3 nie, dit eindig nie op 0 of 5 nie (nie deelbaar deur 5 nie), 83 ÷ 7 is nie presies nie (7×11=77, 7×12=84), en om tot by sy vierkantswortel (ongeveer 9,1) te toets is genoeg.', checkMode: 'self', explanation: '83 is onewe, dus deel 2 nie daarin nie. Syfersom = 8 + 3 = 11, nie deelbaar deur 3 nie. Eindig nie op 0 of 5 nie, dus deel 5 nie daarin nie. As ons 7 toets: 7 × 11 = 77, 7 × 12 = 84 — geeneen is gelyk aan 83 nie. Aangesien die vierkantswortel van 83 ongeveer 9,1 is, hoef ons net priemgetalle tot by 9 te toets (2, 3, 5, 7), en geen deel presies daarin nie, dus is 83 priem ✓' },
        { difficulty: 'Hard', question: 'Skryf 60 as ʼn produk van sy priemfaktore, met indeksnotasie (eksponente).', answer: '2² x 3 x 5', checkMode: 'auto', correctAnswer: '2² x 3 x 5', correctAnswers: ['2² x 3 x 5', '2^2 x 3 x 5', '2² × 3 × 5', '2^2 × 3 × 5'], explanation: '60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1\nPriemfaktore: 2, 2, 3, 5\n2 kom twee keer voor, 3 en 5 kom elk een keer voor\n60 = 2² × 3 × 5 ✓' },
        { difficulty: 'Hard', question: 'Gegewe die getal 62, sê Ntando dit moet priem wees omdat dit nie in sy 2-, 3-, 4-, 5-tafels voorkom wat hy in sy kop nagegaan het nie. Is hy korrek?', answer: 'Nee — 62 is saamgesteld. Dit IS deelbaar deur 2 (62 = 2 × 31), aangesien dit ʼn ewe getal is. Ntando het ʼn fout gemaak deur deelbaarheid deur 2 na te gaan — enige ewe getal groter as 2 is outomaties saamgesteld.', checkMode: 'self', explanation: '62 is ʼn ewe getal (dit eindig op 2), dus is dit deelbaar deur 2: 62 = 2 × 31. Aangesien 62 faktore 1, 2, 31 en 62 het (meer as net 1 en homself), is dit saamgesteld, nie priem nie. Ntando het waarskynlik ʼn geestesfoutjie gemaak — enige ewe getal groter as 2 kan nooit priem wees nie.' },
        { difficulty: 'Hard', question: 'Vind die priemfaktorisering van beide 36 en 54, en gebruik dit om beide die GGF en KGV van 36 en 54 te bepaal.', answer: '36 = 2² x 3², 54 = 2 x 3³, GGF = 18, KGV = 108', checkMode: 'auto', correctAnswer: '36 = 2² x 3², 54 = 2 x 3³, GGF = 18, KGV = 108', correctAnswers: ['GGF = 18, KGV = 108', 'GGF 18 KGV 108'], explanation: '36 = 2 × 2 × 3 × 3 = 2² × 3²\n54 = 2 × 3 × 3 × 3 = 2 × 3³\nGGF: gedeelde priemgetalle teen laagste mag — 2¹ en 3² → GGF = 2 × 9 = 18\nKGV: alle priemgetalle teen hoogste mag — 2² en 3³ → KGV = 4 × 27 = 108 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan plekwaarde, afronding, faktore en priemgetalle op werklike-lewe probleme en multi-stap redenering toepas.' },
        { minScore: 15, message: 'Uitstekende werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}

