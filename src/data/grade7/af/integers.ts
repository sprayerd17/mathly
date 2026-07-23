import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (integer roles) ──────────────────────────────────────────
// positive integer      → blue    (#2563eb)
// negative integer      → red     (#dc2626)
// zero / sign change    → green   (#16a34a)
// different-sign ops    → orange  (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Heelgetalle',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS HEELGETALLE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-integers',
      title: 'Wat is Heelgetalle?',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">Heelgetalle is <strong>alle hele getalle</strong>, insluitend ${bl('positiewe getalle')}, ${re('negatiewe getalle')} en ${gr('nul')}. ${re('Negatiewe getalle')} is getalle kleiner as nul, geskryf met ʼn minusteken — byvoorbeeld ${re('-5')}. Heelgetalle word gebruik om dinge soos temperatuur onder nul, skuld, of posisies onder seespieël voor te stel. Hoe verder links ʼn getal op ʼn getallelyn is, hoe kleiner is sy waarde.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('positiewe heelgetalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe heelgetalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('nul')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positiewe heelgetalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hele getalle groter as nul. Geskryf sonder ʼn teken: ${bl('1')}, ${bl('2')}, ${bl('3')}, …</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negatiewe heelgetalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hele getalle kleiner as nul. Geskryf met ʼn minusteken: ${re('-1')}, ${re('-2')}, ${re('-3')}, …</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Nul</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Nul')} is nie positief of negatief nie. Dit lê in die middel van die getallelyn.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Getallelyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat heelgetalle in volgorde toon. Beweeg ${re('links')} = word kleiner. Beweeg ${bl('regs')} = word groter.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou die getallelyn se rigting</p>` +
        `<p style="margin:0;color:#1e3a8a;">Getalle word groter soos jy <strong>regs</strong> beweeg en kleiner soos jy <strong>links</strong> beweeg. So ${re('-10')} is altyd kleiner as ${re('-1')}, en ${re('-1')} is altyd kleiner as ${bl('+1')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is −8 groter of kleiner as −3?',
          answer: `${re('-8')} is kleiner as ${re('-3')}`,
          steps: [
            `Plaas albei getalle op ʼn getallelyn.`,
            `${re('-8')} is verder links as ${re('-3')} op die getallelyn.`,
            `Hoe verder links ʼn getal is, hoe kleiner is sy waarde.`,
            `<strong>Antwoord:</strong> ${re('-8')} is kleiner as ${re('-3')} ✓`,
          ],
        },
        {
          question: 'Sipho skuld R150. Skryf dit as ʼn heelgetal.',
          answer: `${re('-150')}`,
          steps: [
            `Om geld te skuld beteken Sipho het minder as nul — dit word voorgestel deur ʼn ${re('negatiewe')} heelgetal.`,
            `${re('Negatiewe')} getalle word met ʼn minusteken geskryf.`,
            `<strong>Antwoord:</strong> Sipho se balans is ${re('-R150')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat verduidelik wat heelgetalle is, hoe hulle op ʼn getallelyn geplaas word, en voorbeelde van negatiewe getalle uit die alledaagse lewe',

      diagramPlaceholder:
        'Getallelyn van -10 tot +10 met negatiewe heelgetalle in rooi uitgelig, nul in groen uitgelig, en positiewe heelgetalle in blou uitgelig',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 85" width="100%" style="max-width:480px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="80" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">negatiewe heelgetalle</text>` +
        `<text x="260" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">positiewe heelgetalle</text>` +
        `<line x1="20" y1="50" x2="170" y2="50" stroke="#dc2626" stroke-width="3"/>` +
        `<line x1="170" y1="50" x2="320" y2="50" stroke="#2563eb" stroke-width="3"/>` +
        `<polygon points="12,50 22,45 22,55" fill="#dc2626"/>` +
        `<polygon points="328,50 318,45 318,55" fill="#2563eb"/>` +
        `<line x1="20" y1="44" x2="20" y2="56" stroke="#dc2626" stroke-width="2"/>` +
        `<line x1="95" y1="44" x2="95" y2="56" stroke="#dc2626" stroke-width="2"/>` +
        `<circle cx="170" cy="50" r="5" fill="#16a34a"/>` +
        `<line x1="245" y1="44" x2="245" y2="56" stroke="#2563eb" stroke-width="2"/>` +
        `<line x1="320" y1="44" x2="320" y2="56" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="20" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-10</text>` +
        `<text x="95" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-5</text>` +
        `<text x="170" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="245" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">5</text>` +
        `<text x="320" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">10</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ORDEN VAN HEELGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ordering-integers',
      title: 'Orden van Heelgetalle',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Om heelgetalle te orden plaas ons hulle op ʼn getallelyn van kleinste na grootste, van links na regs. ${re('Negatiewe getalle')} is altyd kleiner as ${bl('positiewe getalle')}. Onder ${re('negatiewe getalle')} is die een verder van nul af eintlik kleiner — byvoorbeeld ${re('-10')} is kleiner as ${re('-2')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe getalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('nul')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('positiewe getalle')}</span>` +
        `</div>` +

        // ── Ordering rules ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir die orden van heelgetalle</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Negatiewe getalle')} is altyd minder as ${gr('nul')} en minder as ${bl('positiewe getalle')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Nul')} is groter as alle ${re('negatiewe getalle')} en kleiner as alle ${bl('positiewe getalle')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Onder ${re('negatiewe getalle')} is dié met die groter syfer eintlik die <strong>kleiner</strong> heelgetal (dit is verder van nul af aan die linkerkant).</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Pas op vir negatiewe getalle</p>` +
        `<p style="margin:0;color:#991b1b;">By ${re('negatiewe getalle')} geld: hoe groter die syfer, hoe <strong>kleiner</strong> die heelgetal. ${re('-100')} &lt; ${re('-10')} &lt; ${re('-1')}. Gebruik altyd ʼn getallelyn om te kontroleer as jy onseker is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Orden van kleinste na grootste: −5, 3, −12, 0, 7.',
          answer: `${re('-12')}, ${re('-5')}, ${gr('0')}, ${bl('3')}, ${bl('7')}`,
          steps: [
            `Plaas al die getalle op ʼn getallelyn.`,
            `Begin met die mees negatiewe (verste links): ${re('-12')}`,
            `Volgende: ${re('-5')} — minder negatief, nader aan nul as ${re('-12')}`,
            `Dan: ${gr('0')} — skei die negatiewe van die positiewe getalle`,
            `Dan die positiewe getalle in stygende volgorde: ${bl('3')}, ${bl('7')}`,
            `<strong>Volgorde:</strong> ${re('-12')}, ${re('-5')}, ${gr('0')}, ${bl('3')}, ${bl('7')} ✓`,
          ],
        },
        {
          question: 'Lerato sê −20 is groter as −5 omdat 20 groter as 5 is. Is sy korrek?',
          answer: `Lerato is verkeerd. ${re('-20')} is kleiner as ${re('-5')}`,
          steps: [
            `Op ʼn getallelyn is ${re('-20')} verder links as ${re('-5')}.`,
            `Hoe verder links ʼn getal is, hoe kleiner is sy waarde.`,
            `Alhoewel 20 &gt; 5 as positiewe getalle, keer die ${re('negatiewe')} teken die volgorde om.`,
            `${re('-20')} is eintlik kleiner as ${re('-5')}.`,
            `<strong>Antwoord:</strong> Lerato is verkeerd. ${re('-20')} &lt; ${re('-5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om heelgetalle op ʼn getallelyn van kleinste na grootste te orden, insluitend negatiewe getalle',

      diagramPlaceholder:
        'Getallelyn wat die versameling -12, -5, 0, 3, 7 in volgorde geplaas toon met pyle wat die kleinste links en die grootste regs aandui',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 95" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="55" x2="280" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,55 22,50 22,60" fill="#0f1f3d"/>` +
        `<polygon points="286,55 278,50 278,60" fill="#0f1f3d"/>` +
        `<circle cx="20" cy="55" r="5" fill="#dc2626"/>` +
        `<circle cx="116" cy="55" r="5" fill="#dc2626"/>` +
        `<circle cx="184" cy="55" r="5" fill="#16a34a"/>` +
        `<circle cx="225" cy="55" r="5" fill="#2563eb"/>` +
        `<circle cx="280" cy="55" r="5" fill="#2563eb"/>` +
        `<text x="20" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-12</text>` +
        `<text x="116" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-5</text>` +
        `<text x="184" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">0</text>` +
        `<text x="225" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">3</text>` +
        `<text x="280" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">7</text>` +
        `<line x1="40" y1="76" x2="256" y2="76" stroke="#16a34a" stroke-width="1.5"/>` +
        `<polygon points="262,76 254,72 254,80" fill="#16a34a"/>` +
        `<text x="20" y="88" text-anchor="middle" font-size="9" fill="#6b7280">kleinste</text>` +
        `<text x="280" y="88" text-anchor="middle" font-size="9" fill="#6b7280">grootste</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — OPTEL EN AFTREK VAN HEELGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'adding-subtracting-integers',
      title: 'Optel en Aftrek van Heelgetalle',
      icon: '+−',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons heelgetalle optel, en albei getalle het <strong>dieselfde teken</strong>, tel ons hulle waardes bymekaar en hou die teken. As hulle <strong>verskillende tekens</strong> het, trek ons die kleiner waarde van die groter af en hou die teken van die groter waarde. Om ʼn heelgetal af te trek is dieselfde as om sy teenoorgestelde by te tel — byvoorbeeld ${bl('5')} − (${re('-3')}) word ${bl('5')} + ${bl('3')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dieselfde teken — tel waardes bymekaar')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verskillende tekens — trek waardes af')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tekenverandering — aftrek word optel')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir optel en aftrek</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Dieselfde tekens → tel bymekaar</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Tel')} die waardes bymekaar en hou die gemeenskaplike teken.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeelde: ${re('-3')} + (${re('-4')}) = ${re('-7')}&nbsp;&nbsp; ${bl('+3')} + ${bl('+4')} = ${bl('+7')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Verskillende tekens → trek af</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${or('Trek')} die kleiner waarde van die groter af. Hou die teken van die getal met die groter waarde.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: ${bl('+9')} + (${re('-15')}) → 15 − 9 = 6 → ${re('-6')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Aftrek van ʼn negatiewe getal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${gr('Aftrek van ʼn negatiewe getal')} is dieselfde as om ʼn positiewe getal by te tel.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: ${re('-8')} − (${re('-3')}) → ${re('-8')} + ${bl('+3')} = ${re('-5')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Twee minustekens maak ʼn plusteken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy twee minustekens langs mekaar sien (soos − −), ${gr('kanselleer hulle')} en word ʼn plusteken. Skryf die som altyd eers oor sodat daar net een bewerkingsteken voor elke getal is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken −7 + (−4).',
          answer: `${re('-11')}`,
          steps: [
            `Albei getalle is ${re('negatief')} — hulle het ${bl('dieselfde teken')}.`,
            `${bl('Dieselfde tekens:')} tel die waardes bymekaar — 7 + 4 = 11`,
            `Hou die ${re('negatiewe')} teken.`,
            `<strong>Antwoord:</strong> ${re('-7')} + (${re('-4')}) = ${re('-11')} ✓`,
          ],
        },
        {
          question: 'Bereken 9 + (−15).',
          answer: `${re('-6')}`,
          steps: [
            `${or('Verskillende tekens:')} ${bl('+9')} en ${re('-15')}.`,
            `${or('Trek')} die kleiner waarde van die groter af: 15 − 9 = 6`,
            `Hou die teken van die getal met die groter waarde — ${re('-15')} het die groter waarde, dus is die antwoord ${re('negatief')}.`,
            `<strong>Antwoord:</strong> ${bl('9')} + (${re('-15')}) = ${re('-6')} ✓`,
          ],
        },
        {
          question: 'Bereken −8 − (−3).',
          answer: `${re('-5')}`,
          steps: [
            `${gr('Aftrek van ʼn negatiewe getal')} is dieselfde as om ʼn positiewe getal by te tel.`,
            `Skryf oor: ${re('-8')} − (${re('-3')}) word ${re('-8')} + ${bl('3')}`,
            `Nou het ons ${or('verskillende tekens')}: ${or('trek')} kleiner van groter af — 8 − 3 = 5`,
            `Hou die teken van ${re('-8')} (die getal met die groter waarde): die antwoord is ${re('negatief')}.`,
            `<strong>Antwoord:</strong> ${re('-8')} − (${re('-3')}) = ${re('-5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die optel en aftrek van heelgetalle met ʼn getallelyn demonstreer, wat dieselfde teken, verskillende tekens, en aftrek van negatiewe getalle dek',

      diagramPlaceholder:
        'Getallelyn wat -7 + (-4) = -11 toon met pyle wat vanaf -7 na links beweeg vir 4 verdere stappe, dieselfde-teken-bewerking kleurgekodeer in blou',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="60" x2="280" y2="60" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,60 22,55 22,65" fill="#0f1f3d"/>` +
        `<polygon points="286,60 278,55 278,65" fill="#0f1f3d"/>` +
        `<path d="M128,60 Q117,40 106,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M106,60 Q96,40 85,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M85,60 Q74,40 63,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<path d="M63,60 Q53,40 42,60" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="42,60 50,53 50,63" fill="#2563eb"/>` +
        `<circle cx="128" cy="60" r="5" fill="#dc2626"/>` +
        `<circle cx="42" cy="60" r="5" fill="#dc2626"/>` +
        `<circle cx="280" cy="60" r="4" fill="#6b7280"/>` +
        `<text x="128" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">-7</text>` +
        `<text x="42" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626">-11</text>` +
        `<text x="280" y="80" text-anchor="middle" font-size="11" fill="#6b7280">0</text>` +
        `<text x="85" y="30" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">4 stappe van -1 (selfde teken)</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VERMENIGVULDIG EN DEEL VAN HEELGETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-dividing-integers',
      title: 'Vermenigvuldig en Deel van Heelgetalle',
      icon: '×÷',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons twee heelgetalle met <strong>dieselfde teken</strong> vermenigvuldig of deel, is die antwoord ${gr('positief')}. Wanneer die tekens <strong>verskillend</strong> is, is die antwoord ${re('negatief')}. Hierdie reël geld of jy vermenigvuldig of deel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('dieselfde teken → positiewe antwoord')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verskillende tekens → negatiewe antwoord')}</span>` +
        `</div>` +

        // ── Sign rules ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tekenreëls vir vermenigvuldiging en deling</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin-bottom:4px;">${bl('+')} × ${bl('+')} = ${gr('+')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">positief × positief = ${gr('positief')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#16a34a;margin-bottom:4px;">${re('-')} × ${re('-')} = ${gr('+')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">negatief × negatief = ${gr('positief')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#dc2626;margin-bottom:4px;">${bl('+')} × ${re('-')} = ${re('-')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">positief × negatief = ${re('negatief')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#dc2626;margin-bottom:4px;">${re('-')} × ${bl('+')} = ${re('-')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">negatief × positief = ${re('negatief')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dieselfde reëls geld vir deling</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die tekenreëls hierbo geld vir <strong>beide vermenigvuldiging en deling</strong>. Bepaal eers die teken van die antwoord, en bereken dan die waarde met net die syfers.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bereken −6 × −4.',
          answer: `${gr('24')}`,
          steps: [
            `Albei getalle het ${gr('dieselfde teken')} (albei ${re('negatief')}).`,
            `Dieselfde tekens → ${gr('positiewe')} antwoord.`,
            `Vermenigvuldig die waardes: 6 × 4 = 24`,
            `<strong>Antwoord:</strong> ${re('-6')} × ${re('-4')} = ${gr('24')} ✓`,
          ],
        },
        {
          question: 'Bereken −36 ÷ 9.',
          answer: `${re('-4')}`,
          steps: [
            `${re('Verskillende tekens:')} ${re('-36')} en ${bl('+9')}.`,
            `Verskillende tekens → ${re('negatiewe')} antwoord.`,
            `Deel die waardes: 36 ÷ 9 = 4`,
            `<strong>Antwoord:</strong> ${re('-36')} ÷ ${bl('9')} = ${re('-4')} ✓`,
          ],
        },
        {
          question: 'Bereken 8 × −5.',
          answer: `${re('-40')}`,
          steps: [
            `${re('Verskillende tekens:')} ${bl('+8')} en ${re('-5')}.`,
            `Verskillende tekens → ${re('negatiewe')} antwoord.`,
            `Vermenigvuldig die waardes: 8 × 5 = 40`,
            `<strong>Antwoord:</strong> ${bl('8')} × ${re('-5')} = ${re('-40')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        'Kort video wat die tekenreëls vir die vermenigvuldiging en deling van heelgetalle verduidelik met uitgewerkte voorbeelde wat dieselfde teken en verskillende tekens toon',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — vergelyking van negatiewe heelgetalle ─────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is −9 groter of kleiner as −2?',
      answer: 'kleiner',
      checkMode: 'auto',
      correctAnswer: 'kleiner',
      explanation: '−9 is verder links op die getallelyn as −2, dus is −9 kleiner as −2.',
    },

    // ── V2 Maklik — skryf ʼn alledaagse situasie as ʼn negatiewe heelgetal ──────────
    {
      difficulty: 'Easy',
      question: 'Skryf die skuld van R85 as ʼn heelgetal.',
      answer: '-85',
      checkMode: 'auto',
      correctAnswer: '-85',
      explanation: 'Om geld te skuld beteken die waarde is minder as nul — dit is ʼn negatiewe heelgetal. Om R85 te skuld word geskryf as −85.',
    },

    // ── V3 Medium — orden van heelgetalle ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Orden van kleinste na grootste: −8, 4, −15, 0, 6.',
      answer: '−15, −8, 0, 4, 6',
      checkMode: 'self',
    },

    // ── V4 Moeilik — regstel van ʼn wanopvatting oor negatiewe heelgetalle ───────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê −30 is groter as −10. Is hy korrek? Verduidelik.',
      answer: 'Nee — −30 is verder links op die getallelyn as −10, dus is −30 eintlik kleiner as −10.',
      checkMode: 'self',
    },

    // ── V5 Maklik — optel van twee negatiewe heelgetalle ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken −5 + (−9).',
      answer: '-14',
      checkMode: 'auto',
      correctAnswer: '-14',
      explanation: 'Albei getalle is negatief (dieselfde teken). Tel die waardes bymekaar: 5 + 9 = 14. Hou die negatiewe teken. Antwoord: −14.',
    },

    // ── V6 Maklik — optel van heelgetalle met verskillende tekens ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 12 + (−7).',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 12 − 7 = 5. Hou die positiewe teken (12 het die groter waarde). Antwoord: 5.',
    },

    // ── V7 Medium — aftrek van ʼn negatiewe heelgetal ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken −8 − (−6).',
      answer: '-2',
      checkMode: 'auto',
      correctAnswer: '-2',
      explanation: 'Aftrek van ʼn negatiewe getal word optel van ʼn positiewe getal: −8 − (−6) = −8 + 6. Verskillende tekens: 8 − 6 = 2. Hou die negatiewe teken (−8 het die groter waarde). Antwoord: −2.',
    },

    // ── V8 Medium — optel van ʼn positiewe by ʼn negatiewe getal ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken −14 + 9.',
      answer: '-5',
      checkMode: 'auto',
      correctAnswer: '-5',
      explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 14 − 9 = 5. Hou die negatiewe teken (−14 het die groter waarde). Antwoord: −5.',
    },

    // ── V9 Moeilik — regstel van ʼn aftrekfout ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato bereken −10 − (−15) en kry −25. Is sy korrek? Verduidelik.',
      answer: 'Nee — aftrek van ʼn negatiewe getal word optel van ʼn positiewe getal: −10 − (−15) = −10 + 15 = 5, nie −25 nie.',
      checkMode: 'self',
    },

    // ── V10 Maklik — vermenigvuldig twee negatiewe heelgetalle ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken −7 × −3.',
      answer: '21',
      checkMode: 'auto',
      correctAnswer: '21',
      explanation: 'Albei getalle is negatief (dieselfde teken). Dieselfde tekens gee ʼn positiewe antwoord. 7 × 3 = 21. Antwoord: 21.',
    },

    // ── V11 Maklik — deel met verskillende tekens ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken −36 ÷ 6.',
      answer: '-6',
      checkMode: 'auto',
      correctAnswer: '-6',
      explanation: 'Verskillende tekens (−36 en +6). Verskillende tekens gee ʼn negatiewe antwoord. 36 ÷ 6 = 6. Antwoord: −6.',
    },

    // ── V12 Medium — vermenigvuldig met verskillende tekens ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 8 × −9.',
      answer: '-72',
      checkMode: 'auto',
      correctAnswer: '-72',
      explanation: 'Verskillende tekens (+8 en −9). Verskillende tekens gee ʼn negatiewe antwoord. 8 × 9 = 72. Antwoord: −72.',
    },

    // ── V13 Medium — deel van twee negatiewe heelgetalle ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken −48 ÷ −8.',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Albei getalle is negatief (dieselfde teken). Dieselfde tekens gee ʼn positiewe antwoord. 48 ÷ 8 = 6. Antwoord: 6.',
    },

    // ── V14 Moeilik — regstel van ʼn wanopvatting oor tekenreëls ────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die vermenigvuldiging van twee negatiewe getalle gee altyd ʼn negatiewe antwoord. Is hy korrek? Verduidelik.',
      answer: 'Nee — die vermenigvuldiging van twee negatiewe getalle gee ʼn positiewe antwoord omdat die tekens dieselfde is. Dieselfde tekens gee altyd ʼn positiewe resultaat.',
      checkMode: 'self',
    },

    // ── V15 Moeilik — gekombineerde vermenigvuldiging en deling ───────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken −6 × 4 ÷ −2.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Werk van links na regs. Eerste: −6 × 4 = −24 (verskillende tekens → negatief). Dan: −24 ÷ −2 = 12 (dieselfde tekens → positief). Antwoord: 12.',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het heelgetalle volkome bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-4 Optel/aftrek van heelgetalle | 5-8 Vermenigvuldiging/deling
    // (tekenreëls) | 9-12 Bewerkingsvolgorde (BODMAS) met gemengde heelgetalle |
    // 13-15 Orden/vergelyk heelgetalle | 16-18 Woordprobleme uit die alledaagse
    // lewe (temperatuur, hoogte, bankbalans) | 19-20 Multi-stap/foutopsporing
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Bereken −12 + 8.', answer: '-4', checkMode: 'auto', correctAnswer: '-4', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 12 − 8 = 4. Hou die teken van die groter waarde (−12), dus is die antwoord negatief. Antwoord: −4.' },
        { difficulty: 'Easy', question: 'Bereken 15 + (−23).', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 23 − 15 = 8. Hou die teken van die groter waarde (−23), dus is die antwoord negatief. Antwoord: −8.' },
        { difficulty: 'Medium', question: 'Bereken −9 − (−14).', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Aftrek van ʼn negatiewe getal word optel van ʼn positiewe getal: −9 − (−14) = −9 + 14. Verskillende tekens: 14 − 9 = 5. Hou die teken van die groter waarde (14), dus is die antwoord positief. Antwoord: 5.' },
        { difficulty: 'Medium', question: 'Thabo bereken −6 − 10 en sê die antwoord is −4. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — albei getalle is negatief (dieselfde teken), dus tel ons die waardes bymekaar en hou die negatiewe teken: −6 − 10 = −16, nie −4 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken −8 × 7.', answer: '-56', checkMode: 'auto', correctAnswer: '-56', explanation: 'Verskillende tekens (−8 en +7) gee ʼn negatiewe antwoord. 8 × 7 = 56. Antwoord: −56.' },
        { difficulty: 'Easy', question: 'Bereken −63 ÷ (−9).', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 63 ÷ 9 = 7. Antwoord: 7.' },
        { difficulty: 'Medium', question: 'Bereken −5 × (−6).', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 5 × 6 = 30. Antwoord: 30.' },
        { difficulty: 'Medium', question: 'Bereken 42 ÷ (−6).', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Verskillende tekens (+42 en −6) gee ʼn negatiewe antwoord. 42 ÷ 6 = 7. Antwoord: −7.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om −3 × 4 + 5 te bereken.', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Vermenigvuldiging voor optelling: −3 × 4 = −12. Dan −12 + 5 = −7.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om 20 − 3 × (−4) te bereken.', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'Vermenigvuldiging voor aftrekking: 3 × (−4) = −12. Dan 20 − (−12) = 20 + 12 = 32.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om (−6 + 2) × (−3) te bereken.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Hakies eerste: −6 + 2 = −4. Dan −4 × (−3) = 12 (dieselfde tekens → positief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om −10 + 6 × (−2) − 3 te bereken.', answer: '-25', checkMode: 'auto', correctAnswer: '-25', explanation: 'Vermenigvuldiging eerste: 6 × (−2) = −12. Werk dan van links na regs: −10 + (−12) = −22, en −22 − 3 = −25.' },
        { difficulty: 'Medium', question: 'Orden hierdie heelgetalle van kleinste na grootste: −8, 3, −15, 0, −1.', answer: '−15, −8, −1, 0, 3', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: −17 of −21?', answer: '-17', checkMode: 'auto', correctAnswer: '-17', explanation: '−17 is nader aan nul (verder regs) op die getallelyn as −21, dus is −17 die groter heelgetal.' },
        { difficulty: 'Medium-Hard', question: 'Karabo sê −40 is groter as −25 omdat 40 groter as 25 is. Is hy korrek? Verduidelik.', answer: 'Nee — op ʼn getallelyn is −40 verder links as −25, dus is −40 eintlik kleiner as −25. ʼn Groter syfer by ʼn negatiewe getal maak dit kleiner, nie groter nie.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Die temperatuur die nag was −4°C. Teen middagete het dit met 9°C gestyg. Wat was die middagete-temperatuur?', answer: '5°C', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5°c', '5c'], explanation: 'Begin by −4°C en styg met 9°C: −4 + 9 = 5. Die middagete-temperatuur was 5°C.' },
        { difficulty: 'Medium', question: 'ʼn Duiker swem op ʼn diepte van 85 m onder seespieël, geskryf as −85 m. Sy styg 32 m na die oppervlak toe. Wat is haar nuwe posisie, as ʼn heelgetal?', answer: '-53', checkMode: 'auto', correctAnswer: '-53', explanation: 'Om na die oppervlak te styg beteken jy tel by die diepte: −85 + 32 = −53. Haar nuwe posisie is −53 m.' },
        { difficulty: 'Medium', question: 'Zanele se bankrekening is R450 in die rooi, geskryf as −R450. Sy maak ʼn deposito van R320. Wat is haar nuwe balans?', answer: '-R130', checkMode: 'auto', correctAnswer: '-130', correctAnswers: ['-130', '-r130'], explanation: 'Tel die deposito by die balans: −450 + 320 = −130. Haar nuwe balans is −R130 (steeds R130 in die rooi).' },
        { difficulty: 'Hard', question: 'Bereken −5 × (−3 + 8) ÷ 5.', answer: '-5', checkMode: 'auto', correctAnswer: '-5', explanation: 'Hakies eerste: −3 + 8 = 5. Dan −5 × 5 = −25 (verskillende tekens → negatief). Laastens −25 ÷ 5 = −5.' },
        { difficulty: 'Hard', question: 'Zola bereken −2 × 5 − (−6) en sê die antwoord is 16. Is sy korrek? Wys die korrekte werk.', answer: 'Nee — eerste −2 × 5 = −10 (verskillende tekens → negatief). Dan −10 − (−6) = −10 + 6 = −4, nie 16 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het heelgetalbewerkings, bewerkingsvolgorde en werklike-lewe heelgetalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Bereken −18 + 11.', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 18 − 11 = 7. Hou die teken van die groter waarde (−18), dus is die antwoord negatief. Antwoord: −7.' },
        { difficulty: 'Easy', question: 'Bereken 24 + (−37).', answer: '-13', checkMode: 'auto', correctAnswer: '-13', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 37 − 24 = 13. Hou die teken van die groter waarde (−37), dus is die antwoord negatief. Antwoord: −13.' },
        { difficulty: 'Medium', question: 'Bereken −13 − (−19).', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'Aftrek van ʼn negatiewe getal word optel van ʼn positiewe getal: −13 − (−19) = −13 + 19. Verskillende tekens: 19 − 13 = 6. Hou die teken van die groter waarde (19), dus is die antwoord positief. Antwoord: 6.' },
        { difficulty: 'Medium', question: 'Naledi bereken −8 − 15 en sê die antwoord is −7. Is sy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — albei getalle is negatief (dieselfde teken), dus tel ons die waardes bymekaar en hou die negatiewe teken: −8 − 15 = −23, nie −7 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken −9 × 6.', answer: '-54', checkMode: 'auto', correctAnswer: '-54', explanation: 'Verskillende tekens (−9 en +6) gee ʼn negatiewe antwoord. 9 × 6 = 54. Antwoord: −54.' },
        { difficulty: 'Easy', question: 'Bereken −72 ÷ (−8).', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 72 ÷ 8 = 9. Antwoord: 9.' },
        { difficulty: 'Medium', question: 'Bereken −7 × (−4).', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 7 × 4 = 28. Antwoord: 28.' },
        { difficulty: 'Medium', question: 'Bereken 54 ÷ (−9).', answer: '-6', checkMode: 'auto', correctAnswer: '-6', explanation: 'Verskillende tekens (+54 en −9) gee ʼn negatiewe antwoord. 54 ÷ 9 = 6. Antwoord: −6.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om −4 × 5 + 6 te bereken.', answer: '-14', checkMode: 'auto', correctAnswer: '-14', explanation: 'Vermenigvuldiging voor optelling: −4 × 5 = −20. Dan −20 + 6 = −14.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om 18 − 4 × (−3) te bereken.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Vermenigvuldiging voor aftrekking: 4 × (−3) = −12. Dan 18 − (−12) = 18 + 12 = 30.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om (−8 + 3) × (−2) te bereken.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: 'Hakies eerste: −8 + 3 = −5. Dan −5 × (−2) = 10 (dieselfde tekens → positief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om −9 + 5 × (−3) − 4 te bereken.', answer: '-28', checkMode: 'auto', correctAnswer: '-28', explanation: 'Vermenigvuldiging eerste: 5 × (−3) = −15. Werk dan van links na regs: −9 + (−15) = −24, en −24 − 4 = −28.' },
        { difficulty: 'Medium', question: 'Orden hierdie heelgetalle van kleinste na grootste: −6, 5, −19, 0, −2.', answer: '−19, −6, −2, 0, 5', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: −23 of −14?', answer: '-14', checkMode: 'auto', correctAnswer: '-14', explanation: '−14 is nader aan nul (verder regs) op die getallelyn as −23, dus is −14 die groter heelgetal.' },
        { difficulty: 'Medium-Hard', question: 'Zanele sê −55 is groter as −38 omdat 55 groter as 38 is. Is sy korrek? Verduidelik.', answer: 'Nee — op ʼn getallelyn is −55 verder links as −38, dus is −55 eintlik kleiner as −38. ʼn Groter syfer by ʼn negatiewe getal maak dit kleiner, nie groter nie.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Die temperatuur die nag was −6°C. Teen middagete het dit met 15°C gestyg. Wat was die middagete-temperatuur?', answer: '9°C', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°c', '9c'], explanation: 'Begin by −6°C en styg met 15°C: −6 + 15 = 9. Die middagete-temperatuur was 9°C.' },
        { difficulty: 'Medium', question: 'ʼn Duikboot vaar op ʼn diepte van 120 m onder seespieël, geskryf as −120 m. Dit styg 45 m na die oppervlak toe. Wat is sy nuwe posisie, as ʼn heelgetal?', answer: '-75', checkMode: 'auto', correctAnswer: '-75', explanation: 'Om na die oppervlak te styg beteken jy tel by die diepte: −120 + 45 = −75. Sy nuwe posisie is −75 m.' },
        { difficulty: 'Medium', question: 'Bongani se bankrekening is R600 in die rooi, geskryf as −R600. Hy maak ʼn deposito van R250. Wat is sy nuwe balans?', answer: '-R350', checkMode: 'auto', correctAnswer: '-350', correctAnswers: ['-350', '-r350'], explanation: 'Tel die deposito by die balans: −600 + 250 = −350. Sy nuwe balans is −R350 (steeds R350 in die rooi).' },
        { difficulty: 'Hard', question: 'Bereken −4 × (−2 + 9) ÷ 7.', answer: '-4', checkMode: 'auto', correctAnswer: '-4', explanation: 'Hakies eerste: −2 + 9 = 7. Dan −4 × 7 = −28 (verskillende tekens → negatief). Laastens −28 ÷ 7 = −4.' },
        { difficulty: 'Hard', question: 'Bongi bereken −3 × 4 − (−8) en sê die antwoord is −20. Is sy korrek? Wys die korrekte werk.', answer: 'Nee — eerste −3 × 4 = −12 (verskillende tekens → negatief). Dan −12 − (−8) = −12 + 8 = −4, nie −20 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het heelgetalbewerkings, bewerkingsvolgorde en werklike-lewe heelgetalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit as Stel 1/2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Bereken −25 + 17.', answer: '-8', checkMode: 'auto', correctAnswer: '-8', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 25 − 17 = 8. Hou die teken van die groter waarde (−25), dus is die antwoord negatief. Antwoord: −8.' },
        { difficulty: 'Easy', question: 'Bereken 19 + (−26).', answer: '-7', checkMode: 'auto', correctAnswer: '-7', explanation: 'Verskillende tekens: trek die kleiner waarde van die groter af. 26 − 19 = 7. Hou die teken van die groter waarde (−26), dus is die antwoord negatief. Antwoord: −7.' },
        { difficulty: 'Medium', question: 'Bereken −11 − (−20).', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Aftrek van ʼn negatiewe getal word optel van ʼn positiewe getal: −11 − (−20) = −11 + 20. Verskillende tekens: 20 − 11 = 9. Hou die teken van die groter waarde (20), dus is die antwoord positief. Antwoord: 9.' },
        { difficulty: 'Medium', question: 'Sipho bereken −7 − 12 en sê die antwoord is −5. Is hy korrek? Verduidelik en gee die korrekte antwoord.', answer: 'Nee — albei getalle is negatief (dieselfde teken), dus tel ons die waardes bymekaar en hou die negatiewe teken: −7 − 12 = −19, nie −5 nie.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken −11 × 5.', answer: '-55', checkMode: 'auto', correctAnswer: '-55', explanation: 'Verskillende tekens (−11 en +5) gee ʼn negatiewe antwoord. 11 × 5 = 55. Antwoord: −55.' },
        { difficulty: 'Easy', question: 'Bereken −84 ÷ (−7).', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 84 ÷ 7 = 12. Antwoord: 12.' },
        { difficulty: 'Medium', question: 'Bereken −8 × (−9).', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Dieselfde tekens (albei negatief) gee ʼn positiewe antwoord. 8 × 9 = 72. Antwoord: 72.' },
        { difficulty: 'Medium', question: 'Bereken 63 ÷ (−7).', answer: '-9', checkMode: 'auto', correctAnswer: '-9', explanation: 'Verskillende tekens (+63 en −7) gee ʼn negatiewe antwoord. 63 ÷ 7 = 9. Antwoord: −9.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om −6 × 3 + 7 te bereken.', answer: '-11', checkMode: 'auto', correctAnswer: '-11', explanation: 'Vermenigvuldiging voor optelling: −6 × 3 = −18. Dan −18 + 7 = −11.' },
        { difficulty: 'Medium', question: 'Gebruik die korrekte bewerkingsvolgorde om 25 − 5 × (−2) te bereken.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Vermenigvuldiging voor aftrekking: 5 × (−2) = −10. Dan 25 − (−10) = 25 + 10 = 35.' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om (−9 + 4) × (−4) te bereken.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: 'Hakies eerste: −9 + 4 = −5. Dan −5 × (−4) = 20 (dieselfde tekens → positief).' },
        { difficulty: 'Hard', question: 'Gebruik die korrekte bewerkingsvolgorde om −8 + 7 × (−3) − 5 te bereken.', answer: '-34', checkMode: 'auto', correctAnswer: '-34', explanation: 'Vermenigvuldiging eerste: 7 × (−3) = −21. Werk dan van links na regs: −8 + (−21) = −29, en −29 − 5 = −34.' },
        { difficulty: 'Medium', question: 'Orden hierdie heelgetalle van kleinste na grootste: −10, 2, −17, 0, −4.', answer: '−17, −10, −4, 0, 2', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter is groter: −31 of −12?', answer: '-12', checkMode: 'auto', correctAnswer: '-12', explanation: '−12 is nader aan nul (verder regs) op die getallelyn as −31, dus is −12 die groter heelgetal.' },
        { difficulty: 'Medium-Hard', question: 'Mpho sê −62 is groter as −29 omdat 62 groter as 29 is. Is hy korrek? Verduidelik.', answer: 'Nee — op ʼn getallelyn is −62 verder links as −29, dus is −62 eintlik kleiner as −29. ʼn Groter syfer by ʼn negatiewe getal maak dit kleiner, nie groter nie.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Die temperatuur die nag was −8°C. Teen middagete het dit met 21°C gestyg. Wat was die middagete-temperatuur?', answer: '13°C', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13°c', '13c'], explanation: 'Begin by −8°C en styg met 21°C: −8 + 21 = 13. Die middagete-temperatuur was 13°C.' },
        { difficulty: 'Medium', question: 'ʼn Duiker swem op ʼn diepte van 60 m onder seespieël, geskryf as −60 m. Sy daal ʼn verdere 25 m. Wat is haar nuwe posisie, as ʼn heelgetal?', answer: '-85', checkMode: 'auto', correctAnswer: '-85', explanation: 'Om verder te daal beteken jy trek af van die diepte: −60 − 25 = −85. Haar nuwe posisie is −85 m.' },
        { difficulty: 'Medium', question: 'Tumi se bankrekening is R310 in die rooi, geskryf as −R310. Hy trek ʼn verdere R140 uit. Wat is sy nuwe balans?', answer: '-R450', checkMode: 'auto', correctAnswer: '-450', correctAnswers: ['-450', '-r450'], explanation: 'Trek die verdere onttrekking van die balans af: −310 − 140 = −450. Sy nuwe balans is −R450 (R450 in die rooi).' },
        { difficulty: 'Hard', question: 'Bereken −6 × (−4 + 10) ÷ 4.', answer: '-9', checkMode: 'auto', correctAnswer: '-9', explanation: 'Hakies eerste: −4 + 10 = 6. Dan −6 × 6 = −36 (verskillende tekens → negatief). Laastens −36 ÷ 4 = −9.' },
        { difficulty: 'Hard', question: 'Tumi bereken −5 × 6 − (−10) en sê die antwoord is −40. Is hy korrek? Wys die korrekte werk.', answer: 'Nee — eerste −5 × 6 = −30 (verskillende tekens → negatief). Dan −30 − (−10) = −30 + 10 = −20, nie −40 nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het heelgetalbewerkings, bewerkingsvolgorde en werklike-lewe heelgetalprobleme bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
