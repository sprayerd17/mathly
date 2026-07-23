import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ─────────────────────────────────────────────────────────
// Shared with Grade 6 (kept visually consistent):
//   green  → prime factors / common values          (#16a34a)
//   blue   → factors / multiples / numbers in play   (#2563eb)
//   orange → HCF / LCM final answers                 (#ea580c)
//   red    → shared prime factors / final results    (#dc2626)
// New for Grade 7 divisibility work:
//   purple → the divisibility rule itself             (#7c3aed)
//   teal   → the digit(s) we test (digit sum, last two digits, alternating sum) (#0d9488)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const te = (t: string) => `<span style="color:#0d9488;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Eienskappe van Getalle',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVISIBILITY RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'divisibility-rules',
      title: 'Deelbaarheidsreëls',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 het jy faktorbome gebruik om getalle in priemfaktore op te breek. Maar hoe weet jy, met net ʼn oogopslag, of ʼn groot getal soos 5 148 eers deur 3, 4 of 9 gedeel kan word? <strong>Deelbaarheidsreëls</strong> is kortpaaie wat jou toelaat om te toets of een getal presies (sonder res) in ʼn ander deel — sonder om die werklike deling te doen. Om hierdie reëls te ken, maak faktorbome, die vereenvoudiging van breuke en die vind van die GGD en KGV van groot getalle baie vinniger.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('die reël')}</span>` +
        `<span style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:6px;padding:3px 10px;font-size:13px;">${te('die syfer(s) wat ons toets')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('die gevolgtrekking')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Deelbaarheidsreël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kortpad-toets wat jou vertel of ʼn getal presies in ʼn ander getal deel, sonder om die volle deling te doen.</p>` +
        `</div>` +

        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0d9488;margin-bottom:4px;">Syfersom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die resultaat wanneer al die syfers van ʼn getal bymekaargetel word. Voorbeeld: die syfersom van 234 is 2 + 3 + 4 = 9.</p>` +
        `</div>` +

        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0d9488;margin-bottom:4px;">Alternerende syfersom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel en trek syfers een na die ander af, van regs af begin. Word gebruik om deelbaarheid deur 11 te toets.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Presies deelbaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Een getal deel in ʼn ander sonder ʼn res. Voorbeeld: 20 is presies deelbaar deur 4, want 20 ÷ 4 = 5 met res 0.</p>` +
        `</div>` +

        `</div>` +

        // ── The rules table ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die omvattende deelbaarheidsreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('2')} as sy ${te('laaste syfer')} ewe is (0, 2, 4, 6 of 8). <em>Waarom:</em> elke veelvoud van 10 is reeds deelbaar deur 2, dus besluit net die laaste syfer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('3')} as sy ${te('syfersom')} deelbaar is deur 3. <em>Waarom:</em> 10, 100, 1 000, … laat elkeen ʼn res van 1 wanneer dit deur 3 gedeel word, dus is die res van ʼn getal wanneer dit deur 3 gedeel word dieselfde as die res van sy syfersom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('4')} as sy ${te('laaste twee syfers')} (as ʼn tweesyfer-getal) deelbaar is deur 4. <em>Waarom:</em> 100 is deelbaar deur 4, dus is elke honderd, duisend, ensovoorts reeds deelbaar deur 4 — net die laaste twee syfers is belangrik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('5')} as sy ${te('laaste syfer')} 0 of 5 is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">6</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('6')} as dit deelbaar is deur beide 2 <strong>en</strong> 3 (aangesien 6 = 2 × 3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">8</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('8')} as sy ${te('laaste drie syfers')} (as ʼn getal) deelbaar is deur 8. <em>Waarom:</em> 1 000 is deelbaar deur 8, dus is net die laaste drie syfers belangrik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">9</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('9')} as sy ${te('syfersom')} deelbaar is deur 9. <em>Waarom:</em> dieselfde redenasie as die reël vir 3, aangesien 10, 100, 1 000, … elkeen ook ʼn res van 1 laat wanneer dit deur 9 gedeel word.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">10</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('10')} as sy ${te('laaste syfer')} 0 is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">11</span>` +
        `<p style="margin:0;font-size:14px;">ʼn Getal is deelbaar deur ${pu('11')} as sy ${te('alternerende syfersom')} (tel ʼn syfer, trek die volgende af, tel die volgende, ensovoorts, van regs af begin) deelbaar is deur 11 (0 ingesluit). <em>Waarom:</em> magte van 10 wissel tussen ʼn res van 1 en ʼn res van −1 (d.w.s. 10) wanneer dit deur 11 gedeel word, dus weerspieël die afwisselende optel en aftrek van syfers hierdie patroon.</p>` +
        `</div>` +

        `</div>` +

        // ── Worked reasoning box ─────────────────────────────────────────────
        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f766e;margin-bottom:6px;">Waarom die syfersom-reël werk (3 en 9)</p>` +
        `<p style="margin:0;color:#134e4a;">Neem die getal 345. Ons kan dit skryf as 3 × 100 + 4 × 10 + 5. Aangesien 100 = 99 + 1 en 10 = 9 + 1, word dit 3 × 99 + 3 + 4 × 9 + 4 + 5. Die dele "3 × 99" en "4 × 9" is reeds veelvoude van beide 3 en 9, dus beïnvloed hulle nooit of die hele getal deelbaar is deur 3 of 9 nie — net wat oorbly, tel: ${te('3 + 4 + 5 = 12')}, die ${te('syfersom')}. Aangesien 12 deelbaar is deur 3 maar nie deur 9 nie, is 345 deelbaar deur 3 maar nie deur 9 nie. Dit is presies waarom ons net die syfersom hoef te kontroleer!</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Kombineer reëls om groter delers te toets</p>` +
        `<p style="margin:0;color:#7c2d12;">Party delers is nie priemgetalle nie, dus kan jy hulle in hul faktore opbreek en elkeen kontroleer. Deelbaar deur 6 beteken deelbaar deur 2 <strong>en</strong> 3. Daar is geen kortpad-kombinasie vir 7 nie, dus is dit vir 7 gewoonlik vinnigste om net te deel.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 4131 — divisibility by 3 and 9 via digit sum ─────────
        {
          question: 'Is 4 131 deelbaar deur 3? Is dit deelbaar deur 9?',
          answer: `${re('4 131 is deelbaar deur 3, maar NIE deur 9 nie')}`,
          steps: [
            `Vind die ${te('syfersom')}: 4 + 1 + 3 + 1 = ${te('9')}.`,
            `Is 9 deelbaar deur 3? Ja (9 ÷ 3 = 3) — dus volgens die ${pu('deelbaarheidsreël vir 3')}, ${re('is 4 131 deelbaar deur 3')}.`,
            `Is 9 deelbaar deur 9? Ja (9 ÷ 9 = 1) — dus volgens die ${pu('deelbaarheidsreël vir 9')}, ${re('is 4 131 ook deelbaar deur 9')}.`,
            `Kontroleer deur te deel: 4 131 ÷ 3 = 1 377 ✓ en 4 131 ÷ 9 = 459 ✓ — albei deel presies, wat die reël bevestig.`,
          ],
        },

        // ── Example 2: 3124 — divisibility by 4 via last two digits ─────────
        {
          question: 'Is 3 124 deelbaar deur 4? Is dit deelbaar deur 8?',
          answer: `${re('3 124 is deelbaar deur 4, maar NIE deur 8 nie')}`,
          steps: [
            `Vir deelbaarheid deur 4, kyk net na die ${te('laaste twee syfers')}: ${te('24')}.`,
            `Is 24 deelbaar deur 4? Ja (24 ÷ 4 = 6) — dus volgens die ${pu('deelbaarheidsreël vir 4')}, ${re('is 3 124 deelbaar deur 4')}.`,
            `Vir deelbaarheid deur 8, kyk na die ${te('laaste drie syfers')}: ${te('124')}. Is 124 deelbaar deur 8? 124 ÷ 8 = 15,5 — nie presies nie, dus ${re('is 3 124 NIE deelbaar deur 8 nie')}.`,
            `Kontroleer deur te deel: 3 124 ÷ 4 = 781 ✓ (presies), wat die reël bevestig.`,
          ],
        },

        // ── Example 3: 5148 — the full comprehensive check ──────────────────
        {
          question: 'Toets of 5 148 deelbaar is deur 2, 3, 4, 5, 6, 8, 9, 10 en 11.',
          answer: `${re('Deelbaar deur 2, 3, 4, 6, 9, 11. NIE deelbaar deur 5, 8, 10 nie.')}`,
          steps: [
            `${pu('÷2')}: laaste syfer is ${te('8')} (ewe) → ${re('deelbaar')}.`,
            `${pu('÷3')}: syfersom = 5+1+4+8 = ${te('18')}, en 18 ÷ 3 = 6 → ${re('deelbaar')}.`,
            `${pu('÷4')}: laaste twee syfers ${te('48')}, en 48 ÷ 4 = 12 → ${re('deelbaar')}.`,
            `${pu('÷5')}: laaste syfer is ${te('8')}, nie 0 of 5 nie → ${re('NIE deelbaar nie')}.`,
            `${pu('÷6')}: deelbaar deur beide 2 en 3 (hierbo getoon) → ${re('deelbaar')}.`,
            `${pu('÷8')}: laaste drie syfers ${te('148')}, en 148 ÷ 8 = 18,5 → ${re('NIE deelbaar nie')}.`,
            `${pu('÷9')}: syfersom = ${te('18')}, en 18 ÷ 9 = 2 → ${re('deelbaar')}.`,
            `${pu('÷10')}: laaste syfer is ${te('8')}, nie 0 nie → ${re('NIE deelbaar nie')}.`,
            `${pu('÷11')}: alternerende som van regs af: 8 − 4 + 1 − 5 = ${te('0')}, en 0 is deelbaar deur 11 → ${re('deelbaar')}.`,
            `Kontroleer: 5 148 ÷ 11 = 468 ✓ presies, wat die reël bevestig.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — digit sum rule for 3 and 9 ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is 5 823 deelbaar deur 3? Is dit deelbaar deur 9? (Antwoord: ja/nee, ja/nee)',
          answer: 'Ja, ja',
          checkMode: 'auto',
          correctAnswer: 'ja, ja',
          correctAnswers: ['ja, ja', 'ja ja', 'ja/ja'],
          explanation: 'Syfersom: 5+8+2+3 = 18\n18 is deelbaar deur 3 (18÷3=6) → deelbaar deur 3\n18 is deelbaar deur 9 (18÷9=2) → deelbaar deur 9\nBeide: Ja, Ja ✓',
        },

        // ── Q2 Medium — last two digits rule for 4 ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Is 7 106 deelbaar deur 4? Verduidelik met die laaste-twee-syfers-reël, en gee dan die antwoord as ja of nee.',
          answer: 'Nee',
          checkMode: 'auto',
          correctAnswer: 'nee',
          explanation: 'Laaste twee syfers van 7 106 is 06 (d.w.s. 6)\n6 is nie deelbaar deur 4 nie (6÷4=1,5)\nDus is 7 106 NIE deelbaar deur 4 nie\nKontroleer: 7106÷4 = 1776,5 (nie presies nie) ✓',
        },

        // ── Q3 Hard — alternating sum rule for 11, with reasoning ────────────
        {
          difficulty: 'Hard',
          question: 'Gebruik die alternerende-syfersom-reël om te toets of 9 163 deelbaar is deur 11. Wys jou alternerende som en verduidelik jou gevolgtrekking.',
          answer: 'Alternerende som (van regs af): 3 - 6 + 1 - 9 = -11. Aangesien -11 deelbaar is deur 11, IS 9 163 deelbaar deur 11 (9163 ÷ 11 = 833).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat elke deelbaarheidsreël demonstreer met ʼn uitgewerkte getal, insluitend waarom die syfersom-reël werk vir 3 en 9 en waarom die alternerende-som-reël werk vir 11',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — HCF AND LCM OF THREE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hcf-lcm-three-numbers',
      title: 'GGD en KGV van Drie Getalle',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 het jy die GGD en KGV van <strong>twee</strong> getalle gevind. Nou brei ons dit uit na <strong>drie</strong> getalle gelyktydig. Om faktore of veelvoude vir drie getalle te lys, word stadig en deurmekaar, dus word <strong>priemfaktorisering</strong> die beste metode — dit skaal maklik op, ongeag hoeveel getalle jy mee werk. Die stappe is dieselfde as vir twee getalle, net toegepas oor al drie faktoriserings saam.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('die drie getalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('priemfaktore oor al drie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('GGD / KGV')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">GGD van drie getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste getal wat presies in al drie gegewe getalle deel.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">KGV van drie getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste getal wat ʼn veelvoud van al drie gegewe getalle is.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Gemeenskaplik aan al drie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir die GGD moet ʼn priemfaktor in <strong>al drie</strong> faktoriserings voorkom om te tel — nie net in twee daarvan nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Laagste / hoogste mag</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vir die GGD neem die laagste mag van elke gedeelde priemfaktor oor al drie getalle; vir die KGV neem die hoogste mag van elke priemfaktor wat in enige van die drie voorkom.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: HCF of three numbers ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Om die GGD van drie getalle te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elk van die ${bl('drie getalle')} as ʼn produk van priemfaktore deur ʼn faktorboom te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${re('priemfaktore wat in AL DRIE')} faktoriserings voorkom — ʼn faktor tel net as dit gemeenskaplik is aan elkeen van die drie getalle.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Neem vir elke gedeelde priemfaktor die <strong>laagste mag</strong> waarmee dit oor die drie getalle voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Vermenigvuldig daardie laagste magte saam — die resultaat is die ${or('GGD')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: LCM of three numbers ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Om die KGV van drie getalle te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf elk van die ${bl('drie getalle')} as ʼn produk van priemfaktore.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Lys elke ${re('priemfaktor')} wat in <strong>enige</strong> van die drie faktoriserings voorkom (dit hoef nie gedeel te word nie).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Neem vir elke priemfaktor die <strong>hoogste mag</strong> waarmee dit onder die drie getalle voorkom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Vermenigvuldig daardie hoogste magte saam — die resultaat is die ${or('KGV')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Wees versigtig met die GGD — "gemeenskaplik aan al drie" is strenger</p>` +
        `<p style="margin:0;color:#7c2d12;">ʼn Algemene fout is om ʼn priemfaktor by die GGD in te sluit net omdat dit deur twee van die drie getalle gedeel word. Vir die GGD moet ʼn priemfaktor in <strong>elkeen</strong> van die drie getalle voorkom — as selfs een getal daardie faktor kortkom, kan dit nie deel van die GGD wees nie.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: HCF of 12, 18, 24 ─────────────────────────────────────
        {
          question: 'Vind die GGD van 12, 18 en 24 deur priemfaktorisering te gebruik.',
          answer: `${or('GGD')} = ${or('6')}`,
          steps: [
            `Skryf elke getal as ʼn produk van priemfaktore: ${bl('12')} = ${re('2² × 3')}, ${bl('18')} = ${re('2 × 3²')}, ${bl('24')} = ${re('2³ × 3')}.`,
            `${re('2')} kom in al drie voor — laagste mag is ${re('2¹')} (van 18).`,
            `${re('3')} kom in al drie voor — laagste mag is ${re('3¹')} (van 12 en 24).`,
            `${or('GGD')} = ${re('2')} × ${re('3')} = ${or('6')} ✓`,
          ],
        },

        // ── Example 5: LCM of 12, 18, 24 ─────────────────────────────────────
        {
          question: 'Vind die KGV van 12, 18 en 24 deur priemfaktorisering te gebruik.',
          answer: `${or('KGV')} = ${or('72')}`,
          steps: [
            `Deur dieselfde faktoriserings te gebruik: ${bl('12')} = ${re('2² × 3')}, ${bl('18')} = ${re('2 × 3²')}, ${bl('24')} = ${re('2³ × 3')}.`,
            `Hoogste mag van ${re('2')} oor al drie: ${re('2³')} (van 24).`,
            `Hoogste mag van ${re('3')} oor al drie: ${re('3²')} (van 18).`,
            `${or('KGV')} = ${re('2³')} × ${re('3²')} = ${re('8')} × ${re('9')} = ${or('72')} ✓`,
          ],
        },

        // ── Example 6: HCF and LCM of 24, 36, 60 ─────────────────────────────
        {
          question: 'Vind die GGD en KGV van 24, 36 en 60.',
          answer: `${or('GGD')} = ${or('12')}, ${or('KGV')} = ${or('360')}`,
          steps: [
            `Priemfaktoriseer elke getal: ${bl('24')} = ${re('2³ × 3')}, ${bl('36')} = ${re('2² × 3²')}, ${bl('60')} = ${re('2² × 3 × 5')}.`,
            `${re('Vir die GGD')}: ${re('2')} kom in al drie voor (laagste mag ${re('2²')}); ${re('3')} kom in al drie voor (laagste mag ${re('3¹')}); ${re('5')} kom slegs in een getal voor, dus word dit uitgesluit.`,
            `${or('GGD')} = ${re('2²')} × ${re('3')} = ${re('4')} × ${re('3')} = ${or('12')} ✓`,
            `${re('Vir die KGV')}: neem die hoogste mag van elke priemfaktor wat enige plek voorkom — ${re('2³')} (van 24), ${re('3²')} (van 36), ${re('5¹')} (van 60).`,
            `${or('KGV')} = ${re('2³')} × ${re('3²')} × ${re('5')} = ${re('8')} × ${re('9')} × ${re('5')} = ${or('360')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — HCF of three small numbers ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die GGD van 6, 9 en 12 deur priemfaktorisering te gebruik.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: '6 = 2 × 3\n9 = 3²\n12 = 2² × 3\nSlegs 3 kom in al drie getalle voor, laagste mag 3¹\nGGD = 3 ✓',
        },

        // ── Q5 Medium — LCM of three numbers ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die KGV van 8, 12 en 20 deur priemfaktorisering te gebruik.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: '8 = 2³\n12 = 2² × 3\n20 = 2² × 5\nHoogste magte: 2³, 3¹, 5¹\nKGV = 2³ × 3 × 5 = 8 × 3 × 5 = 120 ✓',
        },

        // ── Q6 Hard — HCF and LCM of three numbers (two-part) ────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die GGD en KGV van 16, 24 en 40.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) GGD van 16, 24 en 40',
              correctAnswer: '8',
              explanation: '16 = 2⁴\n24 = 2³ × 3\n40 = 2³ × 5\nSlegs 2 kom in al drie voor, laagste mag 2³\nGGD = 2³ = 8 ✓',
            },
            {
              label: 'b) KGV van 16, 24 en 40',
              correctAnswer: '240',
              explanation: '16 = 2⁴\n24 = 2³ × 3\n40 = 2³ × 5\nHoogste magte: 2⁴, 3¹, 5¹\nKGV = 2⁴ × 3 × 5 = 16 × 3 × 5 = 240 ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'Drie priemfaktoriseringsbome langs mekaar vir 24, 36 en 60, met die drie getalle in blou, priemfaktore wat almal deel omkring in rooi, en die finale GGD- en KGV-antwoorde in oranje',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 195" width="100%" style="max-width:560px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<g transform="translate(10,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">24</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">12</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">6</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">24 = 2³×3</text>` +
        `</g>` +
        `<g transform="translate(150,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">36</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">18</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">9</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">36 = 2²×3²</text>` +
        `</g>` +
        `<g transform="translate(290,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">60</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">30</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">15</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(107,114,128,0.12)" stroke="#6b7280" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">5</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">60 = 2²×3×5</text>` +
        `</g>` +
        `<text x="220" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Gedeelde (rooi) priemfaktore, laagste magte: 2² × 3 → GGD = 12</text>` +
        `<text x="220" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Hoogste mag van elke priemfaktor: 2³ × 3² × 5 → KGV = 360</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om die GGD- en KGV-priemfaktoriseringsmetode van twee getalle na drie getalle uit te brei, met kleurgekodeerde gedeelde priemfaktore en hoogste/laagste magte',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — APPLYING HCF AND LCM TO SOLVE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'applying-hcf-lcm',
      title: 'Die GGD en KGV Toepas om Probleme op te los',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">Die GGD en KGV is nie net abstrakte oefeninge nie — hulle los werklike probleme op. Die ${or('KGV')} gee ons die <strong>kleinste gemene noemer (KGN)</strong> wanneer breuke met ongelyke noemers bygetel of afgetrek word, en dit vertel ons wanneer herhalende gebeurtenisse weer saamval. Die ${or('GGD')} vertel ons die grootste gelyke groepe waarin ons dinge kan verdeel sonder dat iets oorbly. In Graad 7 brei ons hierdie klassieke probleme uit na <strong>drie hoeveelhede</strong> gelyktydig.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike noemers / hoeveelhede')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('KGN / KGV / GGD')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ekwivalente breuke / finale antwoord')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kleinste gemene noemer (KGN)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die KGV van die noemers van twee of meer breuke. Om die KGN as die gemene noemer te gebruik, hou die getalle so klein as moontlik.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ekwivalente breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Breuk met dieselfde waarde geskryf met ʼn ander noemer. Vermenigvuldig die teller en noemer met dieselfde getal om te omskep.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Saamvallende gebeurtenisse (KGV-probleme)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer twee of meer herhalende gebeurtenisse (soos busse, alarms of flikkerende ligte) weer saam gebeur — gevind deur die KGV van hul herhalingstye te gebruik.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Gelyke groepering (GGD-probleme)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om verskillende hoeveelhede in die grootste moontlike aantal identiese groepe te verdeel met niks oor nie — gevind deur die GGD te gebruik.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: Using LCM for fractions ──────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die KGV gebruik om breuke met ongelyke noemers bymekaar te tel</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${or('KGV')} van al die ${bl('noemers')} — dit is die ${or('KGN')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skakel elke breuk om na ʼn ${gr('ekwivalente breuk')} met die ${or('KGN')} as sy noemer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Tel of trek die tellers, terwyl die ${or('KGN')} as die noemer behou word. Vereenvoudig die ${gr('finale antwoord')} indien moontlik.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Twee klassieke woordprobleem-tipes</p>` +
        `<p style="margin:0;color:#14532d;">As die probleem gaan oor <strong>verdeling in gelyke groepe met niks oor nie</strong>, het jy die ${or('GGD')} nodig. As die probleem gaan oor <strong>gebeurtenisse wat herhaal en weer saamval</strong>, het jy die ${or('KGV')} nodig. Om die vraag noukeurig te lees om te sien watter tipe dit is, is dikwels die moeilikste deel!</p>` +
        `</div>` +

        // ── Tip box 2 ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Drie hoeveelhede, dieselfde idee</p>` +
        `<p style="margin:0;color:#7c2d12;">Wanneer ʼn probleem jou drie hoeveelhede gee in plaas van twee — drie noemers, drie pakkiegroottes, of drie herhalende gebeurtenisse — verander die metode nie. Jy vind eenvoudig die ${or('GGD')} of ${or('KGV')} van al drie getalle gelyktydig, deur priemfaktorisering te gebruik soos jy in die vorige afdeling geleer het.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Adding three fractions using the LCD ──────────────────
        {
          question: 'Bereken 1/4 + 1/6 + 1/9, en gee jou antwoord in die eenvoudigste vorm.',
          answer: `${gr('19/36')}`,
          steps: [
            `Vind die ${or('KGN')}: priemfaktoriseer die ${bl('noemers')} — 4 = 2², 6 = 2 × 3, 9 = 3². Hoogste magte: 2² en 3² → ${or('KGV = 4 × 9 = 36')}.`,
            `Skakel elke breuk om na noemer 36: 1/4 = ${gr('9/36')} (× 9), 1/6 = ${gr('6/36')} (× 6), 1/9 = ${gr('4/36')} (× 4).`,
            `Tel die tellers: ${gr('9/36 + 6/36 + 4/36')} = ${gr('19/36')}.`,
            `19 en 36 deel geen gemene faktor buiten 1 nie, dus is ${gr('19/36')} reeds in eenvoudigste vorm ✓`,
          ],
        },

        // ── Example 8: LCM coinciding-events problem with THREE quantities ───
        {
          question: 'Drie waarskuwingsligte flikker aan die begin van ʼn toets. Die rooi lig flikker elke 8 sekondes, die geel lig elke 12 sekondes, en die groen lig elke 18 sekondes. As al drie saam flikker aan die begin, na hoeveel sekondes sal hulle weer saam flikker?',
          answer: `Hulle sal weer saam flikker na ${or('72')} sekondes`,
          steps: [
            `Dit is ʼn "herhalende gebeurtenisse val weer saam"-probleem, dus het ons die ${or('KGV')} van ${bl('8, 12 en 18')} nodig.`,
            `Priemfaktoriseer: 8 = 2³, 12 = 2² × 3, 18 = 2 × 3².`,
            `Neem die hoogste mag van elke priemfaktor: 2³ (van 8) en 3² (van 18).`,
            `${or('KGV')} = 2³ × 3² = 8 × 9 = ${or('72')}.`,
            `<strong>Antwoord:</strong> Al drie ligte sal weer saam flikker na ${or('72')} sekondes ✓`,
          ],
        },

        // ── Example 9: HCF equal-grouping problem with THREE quantities ──────
        {
          question: 'ʼn Bakkery het 48 sjokoladekoekies, 72 vanieljekoekies en 96 aarbeikoekies. Die eienaar wil hulle in identiese bokse verpak sodat elke boks dieselfde aantal van elke geur het, met niks oor nie. Wat is die grootste aantal bokse wat sy kan maak, en hoeveel van elke geur sal in ʼn boks wees?',
          answer: `Sy kan ${or('24')} bokse maak — elk met ${gr('2')} sjokolade-, ${gr('3')} vanielje-, en ${gr('4')} aarbeikoekies`,
          steps: [
            `Dit is ʼn "verdeling in gelyke groepe met niks oor nie"-probleem, dus het ons die ${or('GGD')} van ${bl('48, 72 en 96')} nodig.`,
            `Priemfaktoriseer: 48 = 2⁴ × 3, 72 = 2³ × 3², 96 = 2⁵ × 3.`,
            `Die enigste priemfaktor gemeenskaplik aan al drie is 2, met laagste mag 2³. 3 kom ook in al drie voor, met laagste mag 3¹.`,
            `${or('GGD')} = 2³ × 3 = 8 × 3 = ${or('24')}.`,
            `<strong>Antwoord:</strong> Sy kan ${or('24')} bokse maak, elk met 48 ÷ 24 = ${gr('2')} sjokolade-, 72 ÷ 24 = ${gr('3')} vanielje-, en 96 ÷ 24 = ${gr('4')} aarbeikoekies ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — LCD to add two fractions ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 2/9 + 5/12, en gee jou antwoord as ʼn enkele breuk oor die KGN.',
          answer: '23/36',
          checkMode: 'auto',
          correctAnswer: '23/36',
          correctAnswers: ['23/36', '23 / 36'],
          explanation: '9 = 3², 12 = 2² × 3\nKGV (KGN) = 2² × 3² = 36\n2/9 = 8/36, 5/12 = 15/36\n8/36 + 15/36 = 23/36 ✓ (reeds in eenvoudigste vorm)',
        },

        // ── Q8 Medium — LCM coinciding-events with three quantities ───────────
        {
          difficulty: 'Medium',
          question: 'Drie sirenes klink saam om 08:00. Sirene A klink elke 15 minute, Sirene B elke 20 minute, en Sirene C elke 25 minute. Na hoeveel minute sal al drie weer saam klink?',
          answer: '300',
          checkMode: 'auto',
          correctAnswer: '300',
          explanation: '15 = 3 × 5, 20 = 2² × 5, 25 = 5²\nHoogste magte: 2², 3¹, 5²\nKGV = 4 × 3 × 25 = 300\nHulle klink weer saam na 300 minute ✓',
        },

        // ── Q9 Hard — HCF equal-grouping word problem, three quantities ───────
        {
          difficulty: 'Hard',
          question: 'ʼn Liefdadigheidsorganisasie pak geskenkmandjies met 36 blikkies boontjies, 60 blikkies sop en 84 blikkies groente. Hulle wil hê elke mandjie moet identies wees, met al die blikkies gebruik en niks oor nie. Wat is die grootste aantal mandjies wat hulle kan maak, en hoeveel van elke tipe blikkie sal in ʼn mandjie wees? Wys jou werk.',
          answer: 'GGD van 36, 60 en 84 = 12 (36=2²×3², 60=2²×3×5, 84=2²×3×7; gemeenskaplik: 2²×3=12). Hulle kan 12 mandjies maak, elk met 3 blikkies boontjies, 5 blikkies sop, en 7 blikkies groente.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Breukstaafdiagram wat 1/4, 1/6 en 1/9 wys omgeskakel na ekwivalente breuke oor die KGV van 36, met die individuele stawe in groen en die gekombineerde totaalstaaf in blou',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="118" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Noemers omgeskakel na 36stes (die KGV)</text>` +
        `<rect x="20" y="22" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="22" width="54" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="34" font-size="11" font-weight="700" fill="#16a34a">1/4 = 9/36</text>` +
        `<rect x="20" y="50" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="50" width="36" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="62" font-size="11" font-weight="700" fill="#16a34a">1/6 = 6/36</text>` +
        `<rect x="20" y="78" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="78" width="24" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="90" font-size="11" font-weight="700" fill="#16a34a">1/9 = 4/36</text>` +
        `<line x1="20" y1="102" x2="236" y2="102" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>` +
        `<rect x="20" y="112" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="112" width="114" height="16" fill="rgba(37,99,235,0.35)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="242" y="124" font-size="12" font-weight="700" fill="#2563eb">= 19/36</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat wys hoe om die KGV as die laagste gemeenskaplike noemer te gebruik om breuke op te tel, en hoe om GGD/KGV-woordprobleme met drie hoeveelhede op te los, soos die pak van mandjies en saamvallende flikkerende ligte',
    },
  ],
  resultsConfig: {
    totalMarks: 10,
    messages: [
      { minScore: 10, message: 'Uitstekend! Jy het deelbaarheidsreëls en die GGD/KGV van drie getalle bemeester.' },
      { minScore: 8, message: 'Goeie werk! Jy het ʼn sterk begrip van eienskappe van getalle.' },
      { minScore: 6, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 10, message: 'Uitstekend! Jy het deelbaarheidsreëls en die GGD/KGV van drie getalle bemeester.' },
    { minScore: 8, message: 'Goeie werk! Jy het ʼn sterk begrip van eienskappe van getalle.' },
    { minScore: 6, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Faktore & veelvoude | 4-7 Priem vs saamgesteld &
    // priemfaktorisering | 8-10 Deelbaarheidsreëls | 11-13 GGD | 14-16 KGV |
    // 17-19 Vierkant-/kubusgetalle & wortels / multi-stap redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Lys al die faktore van 36.', answer: '1, 2, 3, 4, 6, 9, 12, 18, 36', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 9, 12, 18, 36', correctAnswers: ['1, 2, 3, 4, 6, 9, 12, 18, 36', '1,2,3,4,6,9,12,18,36'], explanation: 'Toets elke heelgetal van 1 af: 36 ÷ 1 = 36, ÷2 = 18, ÷3 = 12, ÷4 = 9, ÷6 = 6 (ontmoet in die middel).\nFaktore van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 ✓' },
        { difficulty: 'Easy', question: 'Skryf die eerste ses veelvoude van 9.', answer: '9, 18, 27, 36, 45, 54', checkMode: 'auto', correctAnswer: '9, 18, 27, 36, 45, 54', correctAnswers: ['9, 18, 27, 36, 45, 54', '9,18,27,36,45,54'], explanation: 'Vermenigvuldig 9 met 1, 2, 3, 4, 5, 6: 9, 18, 27, 36, 45, 54 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kafee verkoop pasteitjies in pakke van 6. Sipho wil presies 48 pasteitjies koop. Is 48 ʼn veelvoud van 6? Verduidelik, en sê hoeveel pakke hy nodig het.', answer: 'Ja, 48 is ʼn veelvoud van 6 want 48 ÷ 6 = 8 presies. Hy het 8 pakke nodig.', checkMode: 'self', explanation: '48 ÷ 6 = 8 sonder res, dus is 48 ʼn veelvoud van 6 (ewekansig, 6 is ʼn faktor van 48). Sipho het 8 pakke nodig om presies 48 pasteitjies te kry.' },
        { difficulty: 'Easy-Medium', question: 'Thandi lys die faktore van 28 as 1, 2, 4, 7, 14. Sy sê dit is die volledige lys. Is sy korrek?', answer: 'Nee — sy kort 28 self. Die volledige lys faktore van 28 is 1, 2, 4, 7, 14, 28, aangesien elke getal ʼn faktor van homself is.', checkMode: 'self', explanation: '28 ÷ 1 = 28, ÷2 = 14, ÷4 = 7, ÷7 = 4, ÷14 = 2, ÷28 = 1. Die volledige faktorlys is 1, 2, 4, 7, 14, 28. Thandi het vergeet dat 28 altyd ʼn faktor van homself is.' },
        { difficulty: 'Medium', question: 'Is 41 ʼn priemgetal of ʼn saamgestelde getal? Gee ʼn kort rede.', answer: 'Priem — sy enigste faktore is 1 en 41, so dit kan nie in kleiner heelgetal-faktore verdeel word nie.', checkMode: 'self', explanation: '41 is nie deelbaar deur 2, 3 of 5 nie (om tot by die vierkantswortel, ongeveer 6,4, te toets is genoeg). Sy enigste faktore is 1 en 41, dus is dit priem.' },
        { difficulty: 'Medium', question: 'Gebruik ʼn faktorboom om 90 as ʼn produk van sy priemfaktore te skryf, met eksponente.', answer: '2 x 3² x 5', checkMode: 'auto', correctAnswer: '2 x 3² x 5', correctAnswers: ['2 x 3² x 5', '2 x 3^2 x 5', '2 × 3² × 5', '2 × 3^2 × 5'], explanation: 'Faktorboom: 90 → 9 × 10 → 3 × 3 × 2 × 5\nPriemfaktore: 2, 3, 3, 5\n3 verskyn twee keer → 3²\nPriemfaktorisering: 90 = 2 × 3² × 5 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 126 as 126 → 2 × 63 → 2 × 7 × 9 → 2 × 7 × 3 × 3, en skryf toe die finale antwoord as 2 × 3 × 7². Vind die fout en gee die korrekte priemfaktorisering.', answer: '2 x 3² x 7', checkMode: 'auto', correctAnswer: '2 x 3² x 7', correctAnswers: ['2 x 3² x 7', '2 x 3^2 x 7', '2 × 3² × 7', '2 × 3^2 × 7'], explanation: 'Die priemfaktore wat gevind is (2, 7, 3, 3) is korrek, maar die leerder het die eksponent op die verkeerde priemfaktor geplaas — 3 verskyn twee keer, nie 7 nie. Dit moet 3² wees, nie 7² nie.\nKorrekte priemfaktorisering: 126 = 2 × 3² × 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin het ʼn oppervlakte van 200 m² met sye wat heelgetalle is. Skryf 200 as ʼn produk van priemfaktore, en gebruik dit dan om te verduidelik waarom die tuin 8 m by 25 m kan meet.', answer: '200 = 2³ × 5². Aangesien 8 = 2³ en 25 = 5², gee die vermenigvuldiging 2³ × 5² = 200, so 8 m × 25 m is ʼn geldige paar heelgetal-afmetings.', checkMode: 'self', explanation: '200 = 2 × 100 = 2 × 2 × 50 = 2 × 2 × 2 × 25 = 2³ × 5². Aangesien 8 × 25 = 200, en 8 = 2³, 25 = 5², stem dit presies ooreen met die priemfaktorisering, wat bevestig dat 8 m by 25 m geldig is.' },
        { difficulty: 'Medium', question: 'Toets of 3 216 deelbaar is deur 3, deur 4, en deur 9. Wys jou syfersom en laaste-twee-syfers werk.', answer: 'Deelbaar deur 3 en deur 4, maar NIE deur 9 nie.', checkMode: 'auto', correctAnswer: 'deelbaar deur 3 en 4, nie deur 9 nie', correctAnswers: ['deelbaar deur 3 en 4, nie deur 9 nie', 'ja, ja, nee', 'ja ja nee'], explanation: 'Syfersom van 3216 = 3+2+1+6 = 12. 12 ÷ 3 = 4 presies → deelbaar deur 3. 12 ÷ 9 = 1,33 → NIE deelbaar deur 9 nie.\nLaaste twee syfers: 16. 16 ÷ 4 = 4 presies → deelbaar deur 4.\nDus: deelbaar deur 3 ✓, deelbaar deur 4 ✓, NIE deelbaar deur 9 nie ✗' },
        { difficulty: 'Medium', question: 'ʼn Leerder toets of 5 720 deelbaar is deur 8 deur te kyk of die volle getal 5720 ÷ 8 ʼn heelgetal gee, in plaas daarvan om die laaste-drie-syfers-reël te gebruik. Verduidelik die kortpad-reël wat hulle moes gebruik het, en sê dan of 5 720 deelbaar is deur 8.', answer: 'Die laaste-drie-syfers-reël: kontroleer of die laaste drie syfers (720) deelbaar is deur 8, aangesien 1000 reeds deelbaar is deur 8. 720 ÷ 8 = 90 presies, dus IS 5 720 deelbaar deur 8.', checkMode: 'self', explanation: 'Die reël vir 8 sê ʼn mens moet net die laaste drie syfers kontroleer, want 1 000 is reeds ʼn veelvoud van 8, dus beïnvloed hoër plekwaardes nooit deelbaarheid deur 8 nie. Laaste drie syfers van 5720 is 720, en 720 ÷ 8 = 90 presies, dus is 5720 deelbaar deur 8. (Volledige toets: 5720 ÷ 8 = 715, wat dit bevestig.)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 54 en 90 deur faktore te lys.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Faktore van 54: 1, 2, 3, 6, 9, 18, 27, 54\nFaktore van 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90\nGemene faktore: 1, 2, 3, 6, 9, 18\nGGD = 18 ✓ (18 deel presies in beide 54 en 90: 54÷18=3, 90÷18=5)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 75 en 100 deur priemfaktorisering te gebruik.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '75 = 3 × 5²\n100 = 2² × 5²\nGedeelde priemfaktor: 5 (laagste mag 5²)\nGGD = 5² = 25 ✓ (kontroleer: 75÷25=3 presies, 100÷25=4 presies)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Blomwinkel het 64 rose en 96 lelies. Sy wil identiese ruikers maak met al die blomme sonder dat iets oorbly. Wat is die maksimum aantal ruikers wat sy kan maak, en hoeveel van elke blom per ruiker?', answer: '32 ruikers, elk met 2 rose en 3 lelies', checkMode: 'auto', correctAnswer: '32 ruikers, elk met 2 rose en 3 lelies', correctAnswers: ['32 ruikers, elk met 2 rose en 3 lelies', '32 ruikers met 2 rose en 3 lelies elk'], explanation: '64 = 2⁶\n96 = 2⁵ × 3\nGedeelde priemfaktor: 2 (laagste mag 2⁵)\nGGD = 2⁵ = 32 ruikers (kontroleer: 32 deel presies in 64 en 96)\nRose per ruiker: 64 ÷ 32 = 2. Lelies per ruiker: 96 ÷ 32 = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 15 en 20 deur veelvoude te lys.', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'Veelvoude van 15: 15, 30, 45, 60\nVeelvoude van 20: 20, 40, 60\nKleinste gedeelde veelvoud: 60\nKGV = 60 ✓ (kontroleer: 60÷15=4 presies, 60÷20=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 24 en 36 deur priemfaktorisering te gebruik.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: '24 = 2³ × 3\n36 = 2² × 3²\nHoogste magte: 2³ (van 24), 3² (van 36)\nKGV = 2³ × 3² = 8 × 9 = 72 ✓ (kontroleer: 72÷24=3 presies, 72÷36=2 presies)' },
        { difficulty: 'Medium-Hard', question: 'Twee afleweringsbakkies vertrek saam vanaf die depot. Bakkie A keer elke 18 minute na die depot terug, Bakkie B elke 24 minute. Na hoeveel minute sal hulle weer saam by die depot wees?', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Vind die KGV van 18 en 24.\n18 = 2 × 3²\n24 = 2³ × 3\nHoogste magte: 2³ (van 24), 3² (van 18)\nKGV = 2³ × 3² = 8 × 9 = 72\nHulle sal weer saam wees na 72 minute ✓ (kontroleer: 72÷18=4 presies, 72÷24=3 presies)' },
        { difficulty: 'Hard', question: 'Is 225 ʼn volkome vierkant? Is 216 ʼn volkome kubus? Wys hoe jy dit weet vir elkeen.', answer: '225 is ʼn volkome vierkant (15² = 225). 216 is ʼn volkome kubus (6³ = 216).', checkMode: 'auto', correctAnswer: '225 is ʼn volkome vierkant (15²=225); 216 is ʼn volkome kubus (6³=216)', correctAnswers: ['ja en ja', '225 is ʼn volkome vierkant, 216 is ʼn volkome kubus'], explanation: '15 × 15 = 225, dus is 225 = 15² ʼn volkome vierkant.\n6 × 6 × 6 = 216, dus is 216 = 6³ ʼn volkome kubus.\nBeide klop presies ✓' },
        { difficulty: 'Hard', question: 'Vind die GGD en KGV van 20, 30 en 50.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGD van 20, 30 en 50', correctAnswer: '10', explanation: '20 = 2² × 5\n30 = 2 × 3 × 5\n50 = 2 × 5²\nSlegs 2 en 5 kom in al drie voor: laagste mag van 2 is 2¹, laagste mag van 5 is 5¹\nGGD = 2 × 5 = 10 ✓ (kontroleer: 10 deel presies in 20, 30 en 50)' }, { label: 'b) KGV van 20, 30 en 50', correctAnswer: '300', explanation: '20 = 2² × 5\n30 = 2 × 3 × 5\n50 = 2 × 5²\nHoogste magte: 2² (van 20), 3¹ (van 30), 5² (van 50)\nKGV = 2² × 3 × 5² = 4 × 3 × 25 = 300 ✓ (kontroleer: 300 is presies deelbaar deur 20, 30 en 50)' } ] },
        { difficulty: 'Hard', question: 'Palesa sê dat 49, omdat dit onewe is, nie ʼn volkome vierkant kan wees nie. Is sy korrek? Verduidelik, en noem die twee kleinste onewe volkome vierkante groter as 1.', answer: 'Nee — Palesa is verkeerd. 49 = 7² is ʼn volkome vierkant al is dit onewe. Die twee kleinste onewe volkome vierkante groter as 1 is 9 (3²) en 25 (5²).', checkMode: 'self', explanation: '49 = 7 × 7 = 7², dus IS 49 ʼn volkome vierkant al is dit onewe. Trouens, ʼn onewe getal in die kwadraat is altyd onewe (onewe × onewe = onewe), dus is baie volkome vierkante onewe. Die kleinste volkome vierkante groter as 1 is 4, 9, 16, 25, 36, 49 — die onewe getalle hieronder is 9 en 25.' },
        { difficulty: 'Hard', question: 'ʼn Skool lê vierkantige teëls om ʼn reghoekige binneplein van 63 m by 84 m te bedek, met die grootste moontlike heelgetal-vierkantteëls sonder om te sny. Vind die teëllengte, en sê dan hoeveel teëls altesaam nodig is.', answer: 'Teëllengte = 21 m; 12 teëls altesaam nodig', checkMode: 'auto', correctAnswer: '21 m teëls, 12 teëls altesaam', correctAnswers: ['21 m, 12 teëls', 'teëllengte 21m, 12 teëls altesaam', '21 m teëls, 12 teëls nodig'], explanation: 'Die grootste vierkantteël-sylengte is die GGD van 63 en 84.\n63 = 3² × 7\n84 = 2² × 3 × 7\nGedeelde priemfaktore: 3 (laagste mag 3¹) en 7 (mag 1)\nGGD = 3 × 7 = 21 m per teëlkant (kontroleer: 63÷21=3 presies, 84÷21=4 presies)\nLangs die 63 m kant: 63 ÷ 21 = 3 teëls. Langs die 84 m kant: 84 ÷ 21 = 4 teëls.\nTotale teëls = 3 × 4 = 12 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het faktore, veelvoude, deelbaarheid, GGD, KGV en vierkant-/kubusgetalle bemeester.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van eienskappe van getalle.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Lys al die faktore van 48.', answer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', correctAnswers: ['1, 2, 3, 4, 6, 8, 12, 16, 24, 48', '1,2,3,4,6,8,12,16,24,48'], explanation: 'Toets elke heelgetal van 1 af: 48 ÷ 1 = 48, ÷2 = 24, ÷3 = 16, ÷4 = 12, ÷6 = 8 (ontmoet in die middel).\nFaktore van 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 ✓' },
        { difficulty: 'Easy', question: 'Skryf die eerste ses veelvoude van 7.', answer: '7, 14, 21, 28, 35, 42', checkMode: 'auto', correctAnswer: '7, 14, 21, 28, 35, 42', correctAnswers: ['7, 14, 21, 28, 35, 42', '7,14,21,28,35,42'], explanation: 'Vermenigvuldig 7 met 1, 2, 3, 4, 5, 6: 7, 14, 21, 28, 35, 42 ✓' },
        { difficulty: 'Easy', question: 'ʼn Bakkery verkoop broodrolletjies in sakke van 8. Naledi wil presies 56 rolletjies koop. Is 56 ʼn veelvoud van 8? Verduidelik, en sê hoeveel sakke sy nodig het.', answer: 'Ja, 56 is ʼn veelvoud van 8 want 56 ÷ 8 = 7 presies. Sy het 7 sakke nodig.', checkMode: 'self', explanation: '56 ÷ 8 = 7 sonder res, dus is 56 ʼn veelvoud van 8 (ewekansig, 8 is ʼn faktor van 56). Naledi het 7 sakke nodig om presies 56 rolletjies te kry.' },
        { difficulty: 'Easy-Medium', question: 'Kagiso lys die faktore van 32 as 1, 2, 4, 8, 16. Hy sê dit is die volledige lys. Is hy korrek?', answer: 'Nee — hy kort 32 self. Die volledige lys faktore van 32 is 1, 2, 4, 8, 16, 32, aangesien elke getal ʼn faktor van homself is.', checkMode: 'self', explanation: '32 ÷ 1 = 32, ÷2 = 16, ÷4 = 8, ÷8 = 4, ÷16 = 2, ÷32 = 1. Die volledige faktorlys is 1, 2, 4, 8, 16, 32. Kagiso het vergeet dat 32 altyd ʼn faktor van homself is.' },
        { difficulty: 'Medium', question: 'Is 43 ʼn priemgetal of ʼn saamgestelde getal? Gee ʼn kort rede.', answer: 'Priem — sy enigste faktore is 1 en 43, so dit kan nie in kleiner heelgetal-faktore verdeel word nie.', checkMode: 'self', explanation: '43 is nie deelbaar deur 2, 3 of 5 nie (om tot by die vierkantswortel, ongeveer 6,6, te toets is genoeg). Sy enigste faktore is 1 en 43, dus is dit priem.' },
        { difficulty: 'Medium', question: 'Gebruik ʼn faktorboom om 126 as ʼn produk van sy priemfaktore te skryf, met eksponente.', answer: '2 x 3² x 7', checkMode: 'auto', correctAnswer: '2 x 3² x 7', correctAnswers: ['2 x 3² x 7', '2 x 3^2 x 7', '2 × 3² × 7', '2 × 3^2 × 7'], explanation: 'Faktorboom: 126 → 2 × 63 → 2 × 7 × 9 → 2 × 7 × 3 × 3\nPriemfaktore: 2, 3, 3, 7\n3 verskyn twee keer → 3²\nPriemfaktorisering: 126 = 2 × 3² × 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 175 as 175 → 5 × 35 → 5 × 5 × 7, en skryf toe die finale antwoord as 5 × 7². Vind die fout en gee die korrekte priemfaktorisering.', answer: '5² x 7', checkMode: 'auto', correctAnswer: '5² x 7', correctAnswers: ['5² x 7', '5^2 x 7', '5² × 7', '5^2 × 7'], explanation: 'Die priemfaktore wat gevind is (5, 5, 7) is korrek, maar die leerder het die eksponent op die verkeerde priemfaktor geplaas — 5 verskyn twee keer, nie 7 nie. Dit moet 5² wees, nie 7² nie.\nKorrekte priemfaktorisering: 175 = 5² × 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige saalvloer het ʼn oppervlakte van 300 m² met sye wat heelgetalle is. Skryf 300 as ʼn produk van priemfaktore, en gebruik dit dan om te verduidelik waarom die saal 12 m by 25 m kan meet.', answer: '300 = 2² × 3 × 5². Aangesien 12 = 2² × 3 en 25 = 5², gee die vermenigvuldiging 2² × 3 × 5² = 300, so 12 m × 25 m is ʼn geldige paar heelgetal-afmetings.', checkMode: 'self', explanation: '300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2² × 3 × 5². Aangesien 12 × 25 = 300, en 12 = 2² × 3, 25 = 5², stem dit presies ooreen met die priemfaktorisering, wat bevestig dat 12 m by 25 m geldig is.' },
        { difficulty: 'Medium', question: 'Toets of 4 712 deelbaar is deur 3, deur 4, en deur 8. Wys jou syfersom en laaste-syfers werk.', answer: 'Deelbaar deur 4 en deur 8, maar NIE deur 3 nie.', checkMode: 'auto', correctAnswer: 'deelbaar deur 4 en 8, nie deur 3 nie', correctAnswers: ['deelbaar deur 4 en 8, nie deur 3 nie', 'nee, ja, ja'], explanation: 'Syfersom van 4712 = 4+7+1+2 = 14. 14 ÷ 3 = 4,67 → NIE deelbaar deur 3 nie.\nLaaste twee syfers: 12. 12 ÷ 4 = 3 presies → deelbaar deur 4.\nLaaste drie syfers: 712. 712 ÷ 8 = 89 presies → deelbaar deur 8.\nDus: NIE deelbaar deur 3 nie ✗, deelbaar deur 4 ✓, deelbaar deur 8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder toets of 6 156 deelbaar is deur 9 deur te kyk of dit "soos ʼn veelvoud van 9 lyk" sonder om syfers op te tel. Verduidelik die korrekte syfersom-kortpad, en sê dan of 6 156 deelbaar is deur 9.', answer: 'Die syfersom-reël: tel al die syfers bymekaar, en kontroleer of daardie som deelbaar is deur 9. Syfersom van 6156 is 6+1+5+6 = 18, en 18 ÷ 9 = 2 presies, dus IS 6 156 deelbaar deur 9.', checkMode: 'self', explanation: 'Die reël vir 9 sê ʼn mens moet al die syfers optel en toets of daardie syfersom deelbaar is deur 9, want 10, 100, 1000 ens. laat elkeen ʼn res van 1 wanneer dit deur 9 gedeel word. Syfersom van 6156 = 6+1+5+6 = 18, en 18 ÷ 9 = 2 presies, dus is 6156 deelbaar deur 9. (Volledige toets: 6156 ÷ 9 = 684, wat dit bevestig.)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 42 en 63 deur faktore te lys.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Faktore van 42: 1, 2, 3, 6, 7, 14, 21, 42\nFaktore van 63: 1, 3, 7, 9, 21, 63\nGemene faktore: 1, 3, 7, 21\nGGD = 21 ✓ (21 deel presies in beide 42 en 63: 42÷21=2, 63÷21=3)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 80 en 120 deur priemfaktorisering te gebruik.', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: '80 = 2⁴ × 5\n120 = 2³ × 3 × 5\nGedeelde priemfaktore: 2 (laagste mag 2³) en 5 (laagste mag 5¹)\nGGD = 2³ × 5 = 8 × 5 = 40 ✓ (kontroleer: 80÷40=2 presies, 120÷40=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Cateraar het 56 muffins en 70 broodjies. Sy wil identiese skinkborde maak met al die kos sonder dat iets oorbly. Wat is die maksimum aantal skinkborde wat sy kan maak, en hoeveel van elke item per skinkbord?', answer: '14 skinkborde, elk met 4 muffins en 5 broodjies', checkMode: 'auto', correctAnswer: '14 skinkborde, elk met 4 muffins en 5 broodjies', correctAnswers: ['14 skinkborde, elk met 4 muffins en 5 broodjies', '14 skinkborde met 4 muffins en 5 broodjies elk'], explanation: '56 = 2³ × 7\n70 = 2 × 5 × 7\nGedeelde priemfaktore: 2 (laagste mag 2¹) en 7 (mag 1)\nGGD = 2 × 7 = 14 skinkborde (kontroleer: 14 deel presies in 56 en 70)\nMuffins per skinkbord: 56 ÷ 14 = 4. Broodjies per skinkbord: 70 ÷ 14 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 9 en 15 deur veelvoude te lys.', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'Veelvoude van 9: 9, 18, 27, 36, 45\nVeelvoude van 15: 15, 30, 45\nKleinste gedeelde veelvoud: 45\nKGV = 45 ✓ (kontroleer: 45÷9=5 presies, 45÷15=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 18 en 30 deur priemfaktorisering te gebruik.', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: '18 = 2 × 3²\n30 = 2 × 3 × 5\nHoogste magte: 2¹ (gedeel), 3² (van 18), 5¹ (van 30)\nKGV = 2 × 3² × 5 = 2 × 9 × 5 = 90 ✓ (kontroleer: 90÷18=5 presies, 90÷30=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'Twee draffers begin saam op ʼn baan. Draffer A voltooi ʼn rondte elke 15 minute, Draffer B elke 25 minute. Na hoeveel minute sal hulle weer saam by die beginpunt wees?', answer: '75', checkMode: 'auto', correctAnswer: '75', explanation: 'Vind die KGV van 15 en 25.\n15 = 3 × 5\n25 = 5²\nHoogste magte: 3¹ (van 15), 5² (van 25)\nKGV = 3 × 5² = 3 × 25 = 75\nHulle sal weer saam wees na 75 minute ✓ (kontroleer: 75÷15=5 presies, 75÷25=3 presies)' },
        { difficulty: 'Hard', question: 'Is 196 ʼn volkome vierkant? Is 343 ʼn volkome kubus? Wys hoe jy dit weet vir elkeen.', answer: '196 is ʼn volkome vierkant (14² = 196). 343 is ʼn volkome kubus (7³ = 343).', checkMode: 'auto', correctAnswer: '196 is ʼn volkome vierkant (14²=196); 343 is ʼn volkome kubus (7³=343)', correctAnswers: ['ja en ja', '196 is ʼn volkome vierkant, 343 is ʼn volkome kubus'], explanation: '14 × 14 = 196, dus is 196 = 14² ʼn volkome vierkant.\n7 × 7 × 7 = 343, dus is 343 = 7³ ʼn volkome kubus.\nBeide klop presies ✓' },
        { difficulty: 'Hard', question: 'Vind die GGD en KGV van 18, 24 en 30.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGD van 18, 24 en 30', correctAnswer: '6', explanation: '18 = 2 × 3²\n24 = 2³ × 3\n30 = 2 × 3 × 5\nSlegs 2 en 3 kom in al drie voor: laagste mag van 2 is 2¹, laagste mag van 3 is 3¹\nGGD = 2 × 3 = 6 ✓ (kontroleer: 6 deel presies in 18, 24 en 30)' }, { label: 'b) KGV van 18, 24 en 30', correctAnswer: '360', explanation: '18 = 2 × 3²\n24 = 2³ × 3\n30 = 2 × 3 × 5\nHoogste magte: 2³ (van 24), 3² (van 18), 5¹ (van 30)\nKGV = 2³ × 3² × 5 = 8 × 9 × 5 = 360 ✓ (kontroleer: 360 is presies deelbaar deur 18, 24 en 30)' } ] },
        { difficulty: 'Hard', question: 'Tumi sê dat 125, omdat dit onewe is, nie ʼn volkome kubus kan wees nie. Is sy korrek? Verduidelik, en noem die twee kleinste onewe volkome kubusse groter as 1.', answer: 'Nee — Tumi is verkeerd. 125 = 5³ is ʼn volkome kubus al is dit onewe. Die twee kleinste onewe volkome kubusse groter as 1 is 27 (3³) en 125 (5³).', checkMode: 'self', explanation: '125 = 5 × 5 × 5 = 5³, dus IS 125 ʼn volkome kubus al is dit onewe. Trouens, ʼn onewe getal in die derde mag is altyd onewe (onewe × onewe × onewe = onewe), dus is baie volkome kubusse onewe. Die kleinste volkome kubusse groter as 1 is 8, 27, 64, 125, 216 — die onewe getalle hieronder is 27 en 125.' },
        { difficulty: 'Hard', question: 'ʼn Boer verdeel ʼn reghoekige lap grond van 56 m by 70 m in die grootste moontlike heelgetal-vierkantpersele sonder om grond te vermors. Vind die perseellengte, en sê dan hoeveel persele altesaam nodig is.', answer: 'Perseellengte = 14 m; 20 persele altesaam nodig', checkMode: 'auto', correctAnswer: '14 m persele, 20 persele altesaam', correctAnswers: ['14 m, 20 persele', 'perseellengte 14m, 20 persele altesaam', '14 m persele, 20 persele nodig'], explanation: 'Die grootste vierkantperseel-sylengte is die GGD van 56 en 70.\n56 = 2³ × 7\n70 = 2 × 5 × 7\nGedeelde priemfaktore: 2 (laagste mag 2¹) en 7 (mag 1)\nGGD = 2 × 7 = 14 m per perseelkant (kontroleer: 56÷14=4 presies, 70÷14=5 presies)\nLangs die 56 m kant: 56 ÷ 14 = 4 persele. Langs die 70 m kant: 70 ÷ 14 = 5 persele.\nTotale persele = 4 × 5 = 20 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan faktore, veelvoude, deelbaarheid, GGD, KGV en vierkant-/kubusgetalle met selfvertroue toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiout, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Lys al die faktore van 60.', answer: '1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', correctAnswers: ['1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', '1,2,3,4,5,6,10,12,15,20,30,60'], explanation: 'Toets elke heelgetal van 1 af: 60 ÷ 1 = 60, ÷2 = 30, ÷3 = 20, ÷4 = 15, ÷5 = 12, ÷6 = 10 (ontmoet in die middel).\nFaktore van 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 ✓' },
        { difficulty: 'Easy', question: 'Skryf die eerste ses veelvoude van 11.', answer: '11, 22, 33, 44, 55, 66', checkMode: 'auto', correctAnswer: '11, 22, 33, 44, 55, 66', correctAnswers: ['11, 22, 33, 44, 55, 66', '11,22,33,44,55,66'], explanation: 'Vermenigvuldig 11 met 1, 2, 3, 4, 5, 6: 11, 22, 33, 44, 55, 66 ✓' },
        { difficulty: 'Easy', question: 'ʼn Skryfbehoeftewinkel verkoop potlode in bokse van 12. Ayesha wil presies 84 potlode koop. Is 84 ʼn veelvoud van 12? Verduidelik, en sê hoeveel bokse sy nodig het.', answer: 'Ja, 84 is ʼn veelvoud van 12 want 84 ÷ 12 = 7 presies. Sy het 7 bokse nodig.', checkMode: 'self', explanation: '84 ÷ 12 = 7 sonder res, dus is 84 ʼn veelvoud van 12 (ewekansig, 12 is ʼn faktor van 84). Ayesha het 7 bokse nodig om presies 84 potlode te kry.' },
        { difficulty: 'Easy-Medium', question: 'Bongani lys die faktore van 50 as 1, 2, 5, 10, 25. Hy sê dit is die volledige lys. Is hy korrek?', answer: 'Nee — hy kort 50 self. Die volledige lys faktore van 50 is 1, 2, 5, 10, 25, 50, aangesien elke getal ʼn faktor van homself is.', checkMode: 'self', explanation: '50 ÷ 1 = 50, ÷2 = 25, ÷5 = 10, ÷10 = 5, ÷25 = 2, ÷50 = 1. Die volledige faktorlys is 1, 2, 5, 10, 25, 50. Bongani het vergeet dat 50 altyd ʼn faktor van homself is.' },
        { difficulty: 'Medium', question: 'Is 47 ʼn priemgetal of ʼn saamgestelde getal? Gee ʼn kort rede.', answer: 'Priem — sy enigste faktore is 1 en 47, so dit kan nie in kleiner heelgetal-faktore verdeel word nie.', checkMode: 'self', explanation: '47 is nie deelbaar deur 2, 3 of 5 nie (om tot by die vierkantswortel, ongeveer 6,9, te toets is genoeg). Sy enigste faktore is 1 en 47, dus is dit priem.' },
        { difficulty: 'Medium', question: 'Gebruik ʼn faktorboom om 300 as ʼn produk van sy priemfaktore te skryf, met eksponente.', answer: '2² x 3 x 5²', checkMode: 'auto', correctAnswer: '2² x 3 x 5²', correctAnswers: ['2² x 3 x 5²', '2^2 x 3 x 5^2', '2² × 3 × 5²', '2^2 × 3 × 5^2'], explanation: 'Faktorboom: 300 → 3 × 100 → 3 × 10 × 10 → 3 × 2 × 5 × 2 × 5\nPriemfaktore: 2, 2, 3, 5, 5\n2 verskyn twee keer, 5 verskyn twee keer → 2² en 5²\nPriemfaktorisering: 300 = 2² × 3 × 5² ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder faktoriseer 245 as 245 → 5 × 49 → 5 × 7 × 7, en skryf toe die finale antwoord as 5² × 7. Vind die fout en gee die korrekte priemfaktorisering.', answer: '5 x 7²', checkMode: 'auto', correctAnswer: '5 x 7²', correctAnswers: ['5 x 7²', '5 x 7^2', '5 × 7²', '5 × 7^2'], explanation: 'Die priemfaktore wat gevind is (5, 7, 7) is korrek, maar die leerder het die eksponent op die verkeerde priemfaktor geplaas — 7 verskyn twee keer, nie 5 nie. Dit moet 7² wees, nie 5² nie.\nKorrekte priemfaktorisering: 245 = 5 × 7² ✓' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige sportveld het ʼn oppervlakte van 128 m² met sye wat heelgetalle is. Skryf 128 as ʼn produk van priemfaktore, en gebruik dit dan om te verduidelik waarom die veld 8 m by 16 m kan meet.', answer: '128 = 2⁷. Aangesien 8 = 2³ en 16 = 2⁴, gee die vermenigvuldiging 2³ × 2⁴ = 2⁷ = 128, so 8 m × 16 m is ʼn geldige paar heelgetal-afmetings.', checkMode: 'self', explanation: '128 = 2 × 64 = 2 × 2 × 32 = ... = 2⁷ (sewe faktore van 2, aangesien 2⁷ = 128). Aangesien 8 × 16 = 128, en 8 = 2³, 16 = 2⁴, gee die optel van eksponente 2³⁺⁴ = 2⁷, wat presies ooreenstem met die priemfaktorisering en bevestig dat 8 m by 16 m geldig is.' },
        { difficulty: 'Medium', question: 'Toets of 8 271 deelbaar is deur 3, deur 9, en deur 2. Wys jou syfersom en laaste-syfer werk.', answer: 'Deelbaar deur 3 en deur 9, maar NIE deur 2 nie.', checkMode: 'auto', correctAnswer: 'deelbaar deur 3 en 9, nie deur 2 nie', correctAnswers: ['deelbaar deur 3 en 9, nie deur 2 nie', 'ja, ja, nee'], explanation: 'Syfersom van 8271 = 8+2+7+1 = 18. 18 ÷ 3 = 6 presies → deelbaar deur 3. 18 ÷ 9 = 2 presies → deelbaar deur 9.\nLaaste syfer: 1, wat onewe is → NIE deelbaar deur 2 nie.\nDus: deelbaar deur 3 ✓, deelbaar deur 9 ✓, NIE deelbaar deur 2 nie ✗' },
        { difficulty: 'Medium', question: 'ʼn Leerder toets of 2 937 deelbaar is deur 11 deur te raai, sonder om die alternerende syfersom te gebruik. Verduidelik die korrekte alternerende-som-kortpad, en sê dan of 2 937 deelbaar is deur 11.', answer: 'Die alternerende syfersom-reël: begin van regs af, tel en trek syfers afwisselend af, en kontroleer of die resultaat deelbaar is deur 11 (0 ingesluit). Vir 2937: 7 − 3 + 9 − 2 = 11, en 11 is deelbaar deur 11, dus IS 2 937 deelbaar deur 11.', checkMode: 'self', explanation: 'Die reël vir 11 sê ʼn mens moet afwisselend syfers van regs af optel en aftrek, want magte van 10 wissel tussen ʼn res van 1 en ʼn res van -1 wanneer dit deur 11 gedeel word. Vir 2937: 7 − 3 + 9 − 2 = 11, en 11 ÷ 11 = 1 presies, dus is 2937 deelbaar deur 11. (Volledige toets: 2937 ÷ 11 = 267, wat dit bevestig.)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 28 en 70 deur faktore te lys.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Faktore van 28: 1, 2, 4, 7, 14, 28\nFaktore van 70: 1, 2, 5, 7, 10, 14, 35, 70\nGemene faktore: 1, 2, 7, 14\nGGD = 14 ✓ (14 deel presies in beide 28 en 70: 28÷14=2, 70÷14=5)' },
        { difficulty: 'Medium-Hard', question: 'Vind die GGD van 96 en 144 deur priemfaktorisering te gebruik.', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: '96 = 2⁵ × 3\n144 = 2⁴ × 3²\nGedeelde priemfaktore: 2 (laagste mag 2⁴) en 3 (laagste mag 3¹)\nGGD = 2⁴ × 3 = 16 × 3 = 48 ✓ (kontroleer: 96÷48=2 presies, 144÷48=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Liefdadigheidsorganisasie het 72 sapboksies en 120 pakkies aartappelskyfies. Hulle wil identiese sorgpakkies maak met al die items sonder dat iets oorbly. Wat is die maksimum aantal sorgpakkies wat hulle kan maak, en hoeveel van elke item per pakkie?', answer: '24 sorgpakkies, elk met 3 sapboksies en 5 pakkies aartappelskyfies', checkMode: 'auto', correctAnswer: '24 sorgpakkies, elk met 3 sapboksies en 5 pakkies aartappelskyfies', correctAnswers: ['24 sorgpakkies, elk met 3 sapboksies en 5 pakkies aartappelskyfies', '24 pakkies met 3 sapboksies en 5 skyfies elk'], explanation: '72 = 2³ × 3²\n120 = 2³ × 3 × 5\nGedeelde priemfaktore: 2 (laagste mag 2³) en 3 (laagste mag 3¹)\nGGD = 2³ × 3 = 8 × 3 = 24 sorgpakkies (kontroleer: 24 deel presies in 72 en 120)\nSapboksies per pakkie: 72 ÷ 24 = 3. Skyfiepakkies per pakkie: 120 ÷ 24 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 12 en 16 deur veelvoude te lys.', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'Veelvoude van 12: 12, 24, 36, 48\nVeelvoude van 16: 16, 32, 48\nKleinste gedeelde veelvoud: 48\nKGV = 48 ✓ (kontroleer: 48÷12=4 presies, 48÷16=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'Vind die KGV van 21 en 28 deur priemfaktorisering te gebruik.', answer: '84', checkMode: 'auto', correctAnswer: '84', explanation: '21 = 3 × 7\n28 = 2² × 7\nHoogste magte: 2² (van 28), 3¹ (van 21), 7¹ (gedeel)\nKGV = 2² × 3 × 7 = 4 × 3 × 7 = 84 ✓ (kontroleer: 84÷21=4 presies, 84÷28=3 presies)' },
        { difficulty: 'Medium-Hard', question: 'Twee sekuriteitswagte begin hul rondtes saam. Wag A voltooi ʼn rondte elke 20 minute, Wag B elke 32 minute. Na hoeveel minute sal hulle weer saam ʼn rondte begin?', answer: '160', checkMode: 'auto', correctAnswer: '160', explanation: 'Vind die KGV van 20 en 32.\n20 = 2² × 5\n32 = 2⁵\nHoogste magte: 2⁵ (van 32), 5¹ (van 20)\nKGV = 2⁵ × 5 = 32 × 5 = 160\nHulle sal weer saam begin na 160 minute ✓ (kontroleer: 160÷20=8 presies, 160÷32=5 presies)' },
        { difficulty: 'Hard', question: 'Is 324 ʼn volkome vierkant? Is 512 ʼn volkome kubus? Wys hoe jy dit weet vir elkeen.', answer: '324 is ʼn volkome vierkant (18² = 324). 512 is ʼn volkome kubus (8³ = 512).', checkMode: 'auto', correctAnswer: '324 is ʼn volkome vierkant (18²=324); 512 is ʼn volkome kubus (8³=512)', correctAnswers: ['ja en ja', '324 is ʼn volkome vierkant, 512 is ʼn volkome kubus'], explanation: '18 × 18 = 324, dus is 324 = 18² ʼn volkome vierkant.\n8 × 8 × 8 = 512, dus is 512 = 8³ ʼn volkome kubus.\nBeide klop presies ✓' },
        { difficulty: 'Hard', question: 'Vind die GGD en KGV van 14, 21 en 28.', answer: '', checkMode: 'auto', parts: [ { label: 'a) GGD van 14, 21 en 28', correctAnswer: '7', explanation: '14 = 2 × 7\n21 = 3 × 7\n28 = 2² × 7\nSlegs 7 kom in al drie voor, met laagste mag 7¹ (2 en 3 kom nie in al drie voor nie)\nGGD = 7 ✓ (kontroleer: 7 deel presies in 14, 21 en 28)' }, { label: 'b) KGV van 14, 21 en 28', correctAnswer: '84', explanation: '14 = 2 × 7\n21 = 3 × 7\n28 = 2² × 7\nHoogste magte: 2² (van 28), 3¹ (van 21), 7¹ (gedeel)\nKGV = 2² × 3 × 7 = 4 × 3 × 7 = 84 ✓ (kontroleer: 84 is presies deelbaar deur 14, 21 en 28)' } ] },
        { difficulty: 'Hard', question: 'Lindiwe sê dat 27, omdat dit onewe is, nie as ʼn mag van 3 geskryf kan word nie. Is sy korrek? Verduidelik, en gee 27 as ʼn mag van 3.', answer: 'Nee — Lindiwe is verkeerd. 27 = 3³, ʼn mag van 3, al is 27 onewe. Onewe grondtalle tot enige mag gee altyd onewe resultate, so dit is verwag, nie ʼn teenstrydigheid nie.', checkMode: 'self', explanation: '3³ = 3 × 3 × 3 = 27, dus IS 27 ʼn mag van 3 (en ook ʼn volkome kubus). Aangesien 3 onewe is, sal enige mag van 3 ook onewe wees (onewe × onewe × ... = onewe), dus is daar geen teenstrydigheid nie — Lindiwe se redenasie dat "onewe getalle nie magte kan wees nie" is eenvoudig verkeerd.' },
        { difficulty: 'Hard', question: 'ʼn Landskapswerker verdeel ʼn reghoekige grasperk van 72 m by 120 m in die grootste moontlike heelgetal-vierkantafdelings sonder om gras te vermors. Vind die afdelinglengte, en sê dan hoeveel afdelings altesaam nodig is.', answer: 'Afdelinglengte = 24 m; 15 afdelings altesaam nodig', checkMode: 'auto', correctAnswer: '24 m afdelings, 15 afdelings altesaam', correctAnswers: ['24 m, 15 afdelings', 'afdelinglengte 24m, 15 afdelings altesaam', '24 m afdelings, 15 afdelings nodig'], explanation: 'Die grootste vierkantafdeling-sylengte is die GGD van 72 en 120.\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\nGedeelde priemfaktore: 2 (laagste mag 2³) en 3 (laagste mag 3¹)\nGGD = 2³ × 3 = 8 × 3 = 24 m per afdelingkant (kontroleer: 72÷24=3 presies, 120÷24=5 presies)\nLangs die 72 m kant: 72 ÷ 24 = 3 afdelings. Langs die 120 m kant: 120 ÷ 24 = 5 afdelings.\nTotale afdelings = 3 × 5 = 15 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan faktore, veelvoude, deelbaarheid, GGD, KGV en vierkant-/kubusgetalle op werklike probleme en multi-stap redenasie toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
