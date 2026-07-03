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
        '<VideoPlaceholder label="Kort video wat verduidelik wat heelgetalle is, hoe hulle op ʼn getallelyn geplaas word, en voorbeelde van negatiewe getalle uit die alledaagse lewe" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn van -10 tot +10 met negatiewe heelgetalle in rooi uitgelig, nul in groen uitgelig, en positiewe heelgetalle in blou uitgelig" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om heelgetalle op ʼn getallelyn van kleinste na grootste te orden, insluitend negatiewe getalle" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat die versameling -12, -5, 0, 3, 7 in volgorde geplaas toon met pyle wat die kleinste links en die grootste regs aandui" />',
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
        '<VideoPlaceholder label="Kort video wat die optel en aftrek van heelgetalle met ʼn getallelyn demonstreer, wat dieselfde teken, verskillende tekens, en aftrek van negatiewe getalle dek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat -7 + (-4) = -11 toon met pyle wat vanaf -7 na links beweeg vir 4 verdere stappe, dieselfde-teken-bewerking kleurgekodeer in blou" />',
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
        '<VideoPlaceholder label="Kort video wat die tekenreëls vir die vermenigvuldiging en deling van heelgetalle verduidelik met uitgewerkte voorbeelde wat dieselfde teken en verskillende tekens toon" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tekenreëltabel vir vermenigvuldiging en deling wat al vier kombinasies toon: positief maal positief, negatief maal negatief, positief maal negatief, negatief maal positief" />',
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
}
