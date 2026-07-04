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

      diagramPlaceholder:
        '<DiagramPlaceholder label="A reference chart listing the divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10 and 11, with the rule in purple, the digits being tested (last digit, last two digits, digit sum, alternating sum) highlighted in teal, and worked examples for 4 131, 3 124 and 5 148 showing the conclusion in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating each divisibility rule with a worked number, including why the digit-sum rule works for 3 and 9 and why the alternating-sum rule works for 11" />',
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
        '<DiagramPlaceholder label="Three prime factorisation trees side by side for 24, 36 and 60, with the three numbers in blue, prime factors shared across all three circled in red, and the final HCF and LCM answers in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to extend the HCF and LCM prime factorisation method from two numbers to three numbers, with colour coded shared prime factors and highest/lowest powers" />',
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
        '<DiagramPlaceholder label="A fraction bar diagram showing 1/4, 1/6 and 1/9 converted to equivalent fractions over the LCD of 36 in green, alongside a bakery hamper diagram showing 48, 72 and 96 cupcakes in blue being split into 24 equal boxes using the HCF shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the LCM as the lowest common denominator to add fractions, and how to solve HCF/LCM word problems involving three quantities such as packing hampers and coinciding flashing lights" />',
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
}
