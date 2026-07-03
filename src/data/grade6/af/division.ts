import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (division roles — Grade 6) ────────────────────────────────
// dividend  → blue   (#2563eb)
// divisor   → red    (#dc2626)
// quotient  → green  (#16a34a)
// remainder → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Deling',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVIDING BY 2-DIGIT NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-by-2-digit-numbers',
      title: 'Deel deur 2-Syfergetalle',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 6 deel ons groot getalle deur <strong>2-syfergetalle</strong> met behulp van <strong>langdeling</strong>. Langdeling werk deur stap vir stap van links na regs te deel. Ons vra hoeveel keer die deler in die eerste syfers van die getal pas. Ons skryf die antwoord bo-aan, vermenigvuldig terug, trek af en bring die volgende syfer af. Ons herhaal totdat alle syfers gebruik is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deeltal')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deler')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwosiënt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('res')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Deeltal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat gedeel word — dit is die beginhoeveelheid.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Deler</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal waarmee ons deel — hoeveel gelyke groepe ons maak.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kwosiënt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die antwoord op ʼn deling — hoeveel is in elke groep.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Res</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wat oorbly nadat jy so gelyk moontlik gedeel het.</p>` +
        `</div>` +

        `</div>` +

        // ── Long division steps ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die langdelingstappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Deel</strong> — Kyk na die syfer heel links van die ${bl('deeltal')}. As dit kleiner as die ${re('deler')} is, sluit die volgende syfer ook in, en deel dan.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Vermenigvuldig</strong> — Vermenigvuldig die ${gr('kwosiënt')}syfer wat jy so pas geskryf het met die ${re('deler')}. Skryf die resultaat daaronder.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#dc2626;">Trek af</strong> — Trek die produk af van die syfers bo dit. Skryf die verskil onder die lyn.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Bring af</strong> — Bring die volgende syfer van die ${bl('deeltal')} af en voeg dit regs van jou aftrekkingsresultaat by.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Herhaal</strong> — Herhaal stappe 1–4 totdat alle syfers gebruik is. Wat ook al aan die einde oorbly, is die ${or('res')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let wel: nul in die kwosiënt</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die getal wat jy deel kleiner as die ${re('deler')} is, skryf <strong>${gr('0')}</strong> in die ${gr('kwosiënt')}, vermenigvuldig (0 × deler = 0), trek af (niks verander nie), en bring dan die volgende syfer af. Slaan nooit hierdie nul oor nie — dit is deel van jou antwoord.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 4 896 ÷ 12 = 408 ─────────────────────────────────────
        {
          question: 'Bereken 4 896 ÷ 12.',
          answer: `${bl('4 896')} ÷ ${re('12')} = ${gr('408')}`,
          steps: [
            `Hoeveel keer pas ${re('12')} in 4? Nul keer — gebruik die eerste twee syfers: <strong>48</strong>. ${re('12')} pas presies 4 keer in 48. Skryf ${gr('4')} in die kwosiënt bo-aan.`,
            `${gr('4')} × ${re('12')} = 48. Skryf 48 daaronder. Trek af: 48 − 48 = 0.`,
            `Bring <strong>9</strong> af. ${re('12')} pas nul keer in 9 — skryf ${gr('0')} in die kwosiënt bo-aan. ${gr('0')} × ${re('12')} = 0. Trek af: 9 − 0 = 9.`,
            `Bring <strong>6</strong> af om <strong>96</strong> te kry. ${re('12')} pas presies 8 keer in 96. Skryf ${gr('8')} in die kwosiënt bo-aan. ${gr('8')} × ${re('12')} = 96. Trek af: 96 − 96 = 0. Geen res.`,
            `<strong>Antwoord:</strong> ${bl('4 896')} ÷ ${re('12')} = ${gr('408')} ✓`,
          ],
        },

        // ── Example 2: 7 345 ÷ 15 = 489 remainder 10 ────────────────────────
        {
          question: 'Bereken 7 345 ÷ 15.',
          answer: `${bl('7 345')} ÷ ${re('15')} = ${gr('489')} res ${or('10')}`,
          steps: [
            `${re('15')} pas nul keer in 7 — gebruik die eerste twee syfers: <strong>73</strong>. ${re('15')} pas vier keer in 73 — ${gr('4')} × ${re('15')} = 60. Skryf ${gr('4')} in die kwosiënt bo-aan. Trek af: 73 − 60 = 13.`,
            `Bring <strong>4</strong> af om <strong>134</strong> te kry. ${re('15')} pas agt keer in 134 — ${gr('8')} × ${re('15')} = 120. Skryf ${gr('8')} in die kwosiënt bo-aan. Trek af: 134 − 120 = 14.`,
            `Bring <strong>5</strong> af om <strong>145</strong> te kry. ${re('15')} pas nege keer in 145 — ${gr('9')} × ${re('15')} = 135. Skryf ${gr('9')} in die kwosiënt bo-aan. Trek af: 145 − 135 = ${or('10')}.`,
            `Alle syfers is gebruik. Die ${or('res')} is ${or('10')}, wat kleiner as die ${re('deler')} ${re('15')} is, dus stop ons.`,
            `<strong>Antwoord:</strong> ${bl('7 345')} ÷ ${re('15')} = ${gr('489')} res ${or('10')} ✓`,
          ],
        },

        // ── Example 3: 8 760 ÷ 24 = 365 (word problem) ──────────────────────
        {
          question: 'Sipho het R8 760 om gelyk tussen 24 mense te deel. Hoeveel kry elke persoon?',
          answer: `Elke persoon kry ${gr('R365')}`,
          steps: [
            `Skryf die deling: ${bl('8 760')} ÷ ${re('24')} = ? ${re('24')} in 8 — nul keer, gebruik die eerste twee syfers: <strong>87</strong>. ${re('24')} in 87 — drie keer: ${gr('3')} × ${re('24')} = 72. Skryf ${gr('3')} in die kwosiënt bo-aan. Trek af: 87 − 72 = 15.`,
            `Bring <strong>6</strong> af om <strong>156</strong> te kry. ${re('24')} in 156 — ses keer: ${gr('6')} × ${re('24')} = 144. Skryf ${gr('6')} in die kwosiënt bo-aan. Trek af: 156 − 144 = 12.`,
            `Bring <strong>0</strong> af om <strong>120</strong> te kry. ${re('24')} in 120 — vyf keer: ${gr('5')} × ${re('24')} = 120. Skryf ${gr('5')} in die kwosiënt bo-aan. Trek af: 120 − 120 = 0. Geen res.`,
            `<strong>Kontroleer:</strong> (${gr('kwosiënt')} × ${re('deler')}) = ${re('deeltal')}<br>${gr('365')} × ${re('24')} = ${bl('8 760')} ✓`,
            `<strong>Antwoord:</strong> Elke persoon kry ${gr('R365')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Long division layout showing 4 896 divided by 12 with each step colour coded — dividend in blue divisor in red quotient in green remainder in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing step by step long division of a 4-digit number by a 2-digit number with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING WITH REMAINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-with-remainders',
      title: 'Deel met Reste',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Soms deel ʼn getal nie presies nie en kry ons ʼn ${or('res')}. Die ${or('res')} is altyd kleiner as die ${re('deler')}. Ons kan die res op drie maniere uitdruk — as ʼn heelgetal-res geskryf met <strong>R</strong>, as ʼn breuk deur die res oor die deler te skryf, of as ʼn desimaal deur die deling voort te sit met ʼn desimale punt en nulle. Lees die vraag altyd noukeurig om te besluit hoe om die res uit te druk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('res as heelgetal')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('res as breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('res as desimaal')}</span>` +
        `</div>` +

        // ── Three ways to express a remainder ────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie maniere om ʼn res uit te druk</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('1. Heelgetal-res (R)')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf die oorblywende hoeveelheid na die kwosiënt met die letter R.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 452 ÷ 7 = 64 ${or('R 4')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('2. Res as ʼn breuk')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf die res oor die deler om ʼn breuk te vorm.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 4 567 ÷ 13 = 351 ${bl('4/13')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('3. Res as ʼn desimaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Deel voort met ʼn desimale punt en nulle na die deeltal.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 1 250 ÷ 24 ≈ ${gr('52,1')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Lees die vraag altyd noukeurig</p>` +
        `<p style="margin:0;color:#92400e;">Die vraag vertel jou watter vorm om te gebruik. As dit sê <em>"druk uit as ʼn breuk"</em> gebruik ${bl('breukvorm')}. As dit sê <em>"druk uit as ʼn desimaal"</em> gebruik ${gr('desimale vorm')}. As dit vra <em>"hoeveel bly oor"</em> gebruik die ${or('heelgetal-res')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 4 567 ÷ 13, remainder as fraction ─────────────────────
        {
          question: 'Bereken 4 567 ÷ 13 en druk die res as ʼn breuk uit.',
          answer: `${bl('4 567')} ÷ ${re('13')} = ${gr('351')} en ${bl('4/13')}`,
          steps: [
            `Voer langdeling van ${bl('4 567')} ÷ ${re('13')} uit.`,
            `${re('13')} in 4 — nul keer, gebruik die eerste twee syfers: <strong>45</strong>. ${re('13')} in 45 = ${gr('3')} res 6. Skryf ${gr('3')} in die kwosiënt. ${gr('3')} × ${re('13')} = 39. Trek af: 45 − 39 = 6.`,
            `Bring <strong>6</strong> af om <strong>66</strong> te kry. ${re('13')} in 66 = ${gr('5')} res 1. Skryf ${gr('5')} in die kwosiënt. ${gr('5')} × ${re('13')} = 65. Trek af: 66 − 65 = 1.`,
            `Bring <strong>7</strong> af om <strong>17</strong> te kry. ${re('13')} in 17 = ${gr('1')} res ${or('4')}. Skryf ${gr('1')} in die kwosiënt. ${gr('1')} × ${re('13')} = 13. Trek af: 17 − 13 = ${or('4')}.`,
            `Alle syfers is gebruik. Die kwosiënt is ${gr('351')} met ${or('res 4')}.`,
            `Druk uit as ʼn breuk: skryf die ${or('res')} oor die ${re('deler')}: ${bl('4/13')}. <strong>Antwoord: ${gr('351')} en ${bl('4/13')}</strong>`,
          ],
        },

        // ── Example 5: 452 ÷ 7, stickers word problem ─────────────────────────
        {
          question: '7 kinders deel 452 plakkers gelyk. Hoeveel kry elke kind en hoeveel bly oor?',
          answer: `Elke kind kry ${gr('64')} plakkers met ${or('4')} wat oorbly`,
          steps: [
            `Skryf die deling: ${bl('452')} ÷ ${re('7')} = ?`,
            `${re('7')} in 4 — nul keer, gebruik die eerste twee syfers: <strong>45</strong>. ${re('7')} in 45 = ${gr('6')} res 3. Skryf ${gr('6')} in die kwosiënt. ${gr('6')} × ${re('7')} = 42. Trek af: 45 − 42 = 3.`,
            `Bring <strong>2</strong> af om <strong>32</strong> te kry. ${re('7')} in 32 = ${gr('4')} res ${or('4')}. Skryf ${gr('4')} in die kwosiënt. ${gr('4')} × ${re('7')} = 28. Trek af: 32 − 28 = ${or('4')}.`,
            `Alle syfers is gebruik. Die ${or('res')} is ${or('4')}, wat kleiner as die ${re('deler')} ${re('7')} is, dus stop ons.`,
            `<strong>Antwoord:</strong> Elke kind kry ${gr('64')} plakkers met ${or('4')} wat oorbly.`,
          ],
        },

        // ── Example 6: 1 250 ÷ 24, remainder as decimal ──────────────────────
        {
          question: 'Lerato deel 1 250 deur 24. Druk die antwoord as ʼn desimaal tot een desimale plek uit.',
          answer: `${bl('1 250')} ÷ ${re('24')} ≈ ${gr('52,1')}`,
          steps: [
            `Voer langdeling van ${bl('1 250')} ÷ ${re('24')} uit.`,
            `${re('24')} in 12 — nul keer. Gebruik die eerste drie syfers: <strong>125</strong>. ${re('24')} in 125 = ${gr('5')} res 5. Skryf ${gr('5')} in die kwosiënt. ${gr('5')} × ${re('24')} = 120. Trek af: 125 − 120 = 5.`,
            `Bring <strong>0</strong> af om <strong>50</strong> te kry. ${re('24')} in 50 = ${gr('2')} res ${or('2')}. Skryf ${gr('2')} in die kwosiënt. ${gr('2')} × ${re('24')} = 48. Trek af: 50 − 48 = ${or('2')}.`,
            `Alle syfers is gebruik. Kwosiënt tot dusver: ${gr('52')} met ${or('res 2')}.`,
            `Om die desimaal te kry, plaas ʼn desimale punt en gaan voort: bring ʼn nul af om <strong>20</strong> te kry. ${re('24')} in 20 — nul komma iets, skryf <strong>${gr('0')}</strong> na die desimale punt. Bring nog ʼn nul af om <strong>200</strong> te kry. ${re('24')} in 200 = ${gr('8')} res 8. Skryf ${gr('8')}. Die desimale deel gee ${gr('52,08')}.`,
            `Afgerond tot een desimale plek: <strong>${gr('52,1')}</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples showing the same remainder expressed three ways — as a whole number remainder in orange, as a fraction in blue, and as a decimal in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide and express the remainder as a whole number remainder, as a fraction, and as a decimal with colour coded worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DIVISION BY MULTIPLES OF 10 AND 100
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-by-multiples-of-10-and-100',
      title: 'Deling deur Veelvoude van 10 en 100',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons deur <strong>10</strong> deel, verwyder ons ${or('een nul')} van die einde van die getal, of skuif die desimale punt een plek na links. Wanneer ons deur <strong>100</strong> deel, verwyder ons ${or('twee nulle')} of skuif die desimale punt twee plekke na links. Wanneer ons deur <strong>veelvoude van 10</strong> soos 20, 30 of 400 deel, ${bl('deel ons eers deur die nie-nul-syfer')} en dan ${bl('deel ons deur die toepaslike mag van 10')}. Dit is ʼn vinnige hoofrekene-metode wat langdeling heeltemal vermy.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('nulle verwyder')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('delingstappe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Two rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die hoofrekene-delingsreëls</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Deel deur 10 of 100</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Verwyder ${or('een nul')} wanneer jy deur 10 deel. Verwyder ${or('twee nulle')} wanneer jy deur 100 deel.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">4 50${or('0')} ÷ 10 = 450 &nbsp;|&nbsp; 4 5${or('00')} ÷ 100 = 45</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Deel deur veelvoude van 10</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Stap 1:')} Deel deur die nie-nul-syfer. ${bl('Stap 2:')} Deel die resultaat deur 10, 100, of 1 000 soos benodig.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">6 000 ÷ 20 → ${bl('6 000 ÷ 2 = 3 000')} → ${bl('3 000 ÷ 10')} = ${gr('300')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Waarom dit werk</p>` +
        `<p style="margin:0;color:#14532d;">ʼn Veelvoud soos 300 = 3 × 100. Deel deur 300 is dieselfde as ${bl('eers deur 3 deel')} en dan ${bl('deur 100 deel')}. Jy kom by dieselfde ${gr('finale antwoord')} uit op enige manier — maar die hoofrekene-stappe is baie makliker om te hanteer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: 45 600 ÷ 100 = 456 ───────────────────────────────────
        {
          question: 'Bereken 45 600 ÷ 100.',
          answer: `45 600 ÷ 100 = ${gr('456')}`,
          steps: [
            `Deel deur 100 beteken om ${or('twee nulle')} te verwyder.`,
            `45 6${or('00')} ÷ 100 = ${gr('456')} ✓`,
          ],
        },

        // ── Example 8: 84 000 ÷ 300 = 280 ───────────────────────────────────
        {
          question: 'Bereken 84 000 ÷ 300.',
          answer: `84 000 ÷ 300 = ${gr('280')}`,
          steps: [
            `${bl('Verdeel 300 in 3 × 100.')} Ons kan eers deur 3 deel, dan deur 100.`,
            `${bl('Deel eers 84 000 deur 3:')} 84 000 ÷ 3 = 28 000.`,
            `${bl('Deel dan deur 100:')} 28 0${or('00')} ÷ 100 = ${gr('280')} (verwyder ${or('twee nulle')}).`,
            `<strong>Antwoord:</strong> 84 000 ÷ 300 = ${gr('280')} ✓`,
          ],
        },

        // ── Example 9: 360 000 ÷ 4 000 = 90 (word problem) ──────────────────
        {
          question: 'Amahle deel 360 000 deur 4 000.',
          answer: `360 000 ÷ 4 000 = ${gr('90')}`,
          steps: [
            `${bl('Verdeel 4 000 in 4 × 1 000.')} Ons kan eers deur 4 deel, dan deur 1 000.`,
            `${bl('Deel 360 000 deur 4:')} 360 000 ÷ 4 = 90 000.`,
            `${bl('Deel deur 1 000:')} 90 ${or('000')} ÷ 1 000 = ${gr('90')} (verwyder ${or('drie nulle')}).`,
            `<strong>Antwoord:</strong> 360 000 ÷ 4 000 = ${gr('90')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three worked examples showing division by multiples of 10 and 100 — zeros removed highlighted in orange, division steps in blue, final answers in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the mental method for dividing by multiples of 10 and 100 by splitting the divisor into its non-zero digit and power of 10" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROBLEM SOLVING WITH DIVISION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'problem-solving-with-division',
      title: 'Probleemoplossing met Deling',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer jy delingwoordprobleme oplos, soek na ${or('sleutelwoorde')} soos <em>gelyk deel</em>, <em>verdeel</em>, <em>elk</em>, <em>per</em>, <em>gemiddeld</em> en <em>hoeveel groepe</em>. Hierdie woorde vertel ons om te ${bl('deel')}. Lees die vraag noukeurig om te besluit wat om met die res te doen — soms ${re('rond ons op')}, soms ${re('rond ons af')} en soms ${re('druk ons dit as ʼn breuk uit')}. Skryf jou antwoord altyd in ʼn volledige sin met die korrekte eenheid.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sleutelwoorde')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deling')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('res-besluit')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelwoorde om na te kyk</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        [
          'gelyk deel', 'verdeel', 'elk', 'per', 'gemiddeld', 'hoeveel groepe',
        ].map(w => `<span style="background:#fed7aa;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#ea580c;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── What to do with the remainder ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wat om met die res te doen</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Rond af')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Gebruik die ${gr('kwosiënt')} as jou antwoord en ignoreer die res.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Gebruik wanneer jy nie deel van ʼn item kan gebruik nie — bv. <em>hoeveel volle bokse</em>?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Rond op')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Tel 1 by die ${gr('kwosiënt')} — die oorblywende hoeveelheid moet steeds hanteer word.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Gebruik wanneer alles moet inpas — bv. <em>hoeveel ritte word benodig</em>?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">${re('Druk uit as ʼn breuk')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf die res oor die deler wanneer daar gedeel word en elke deel tel.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Gebruik wanneer die oorblywende hoeveelheid verder verdeel kan word — bv. geld.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Skryf altyd ʼn volledige sin</p>` +
        `<p style="margin:0;color:#14532d;">Skryf ná elke delingwoordprobleem jou ${gr('finale antwoord')} in ʼn volledige sin met die korrekte eenheid — byvoorbeeld: "Elke klas het <strong>52 leerders</strong>" of "Die vragmotor het <strong>34 ritte</strong> nodig."</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 10: 1 248 ÷ 24 = 52 ──────────────────────────────────────
        {
          question: 'ʼn Skool het 1 248 leerders gelyk verdeel in 24 klasse. Hoeveel leerders is in elke klas?',
          answer: `Elke klas het ${gr('52')} leerders`,
          steps: [
            `${or('Sleutelwoord:')} <em>"gelyk verdeel"</em> — dit vertel ons om te ${bl('deel')}.`,
            `Skryf die ${bl('deling:')} ${bl('1 248')} ÷ ${bl('24')} = ?`,
            `${bl('Deel:')} 24 in 12 — nul keer, dus gebruik die eerste drie syfers: <strong>124</strong>. 24 in 124 = <strong>5</strong> res 4 (5 × 24 = 120; 124 − 120 = 4).`,
            `Bring <strong>8</strong> af om <strong>48</strong> te kry. 24 in 48 = <strong>2</strong> presies (2 × 24 = 48; 48 − 48 = 0). Geen res.`,
            `${re('Res-besluit:')} Die deling is presies — geen afronding nodig nie.`,
            `<strong>${gr('Antwoord:')} Elke klas het ${gr('52')} leerders.</strong>`,
          ],
        },

        // ── Example 11: 4 750 ÷ 35 = 135 remainder 25 ────────────────────────
        {
          question: 'Thabo het R4 750 en wil soveel boeke as moontlik teen R35 elk koop. Hoeveel boeke kan hy koop en hoeveel geld sal hy oor hê?',
          answer: `Thabo kan ${gr('135')} boeke koop en sal ${gr('R25')} oor hê`,
          steps: [
            `${or('Sleutelwoorde:')} <em>"koop soveel as moontlik"</em> en <em>"elk"</em> — dit is groeperings-${bl('deling')}.`,
            `Skryf die ${bl('deling:')} ${bl('4 750')} ÷ ${bl('35')} = ?`,
            `${bl('Deel:')} 35 in 4 — nul keer, gebruik die eerste twee syfers: <strong>47</strong>. 35 in 47 = <strong>1</strong> (1 × 35 = 35; 47 − 35 = 12). Bring <strong>5</strong> af → <strong>125</strong>. 35 in 125 = <strong>3</strong> (3 × 35 = 105; 125 − 105 = 20). Bring <strong>0</strong> af → <strong>200</strong>. 35 in 200 = <strong>5</strong> (5 × 35 = 175; 200 − 175 = 25). Res: <strong>25</strong>.`,
            `Kwosiënt: <strong>135</strong> res <strong>25</strong>.`,
            `${re('Res-besluit:')} ${re('Rond af')} — Thabo kan nie deel van ʼn boek koop nie, dus bly die res van R25 eenvoudig oor.`,
            `<strong>${gr('Antwoord:')} Thabo kan ${gr('135')} boeke koop en sal ${gr('R25')} oor hê.</strong>`,
          ],
        },

        // ── Example 12: 25 000 ÷ 750 → 34 trips ──────────────────────────────
        {
          question: 'ʼn Vragmotor vervoer 25 000 kg goedere in gelyke ladings van 750 kg per rit. Hoeveel ritte word benodig?',
          answer: `Die vragmotor het ${gr('34')} ritte nodig`,
          steps: [
            `${or('Sleutelwoorde:')} <em>"gelyke ladings"</em> en <em>"per rit"</em> — dit is groeperings-${bl('deling')}.`,
            `Skryf die ${bl('deling:')} ${bl('25 000')} ÷ ${bl('750')} = ?`,
            `${bl('Vereenvoudig:')} Deel albei getalle deur 10 → ${bl('2 500')} ÷ ${bl('75')}.`,
            `${bl('Deel:')} 75 in 250 = <strong>3</strong> (3 × 75 = 225; 250 − 225 = 25). Bring <strong>0</strong> af → <strong>250</strong>. 75 in 250 = <strong>3</strong> (3 × 75 = 225; 250 − 225 = 25). Kwosiënt: <strong>33</strong> res <strong>25</strong>.`,
            `${re('Res-besluit:')} ${re('Rond op')} — daar is steeds goedere oor na 33 ritte, dus het die vragmotor nog een rit nodig vir die oorblywende goedere.`,
            `<strong>${gr('Antwoord:')} Die vragmotor het ${gr('34')} ritte nodig.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three word problem scenarios showing key words highlighted in orange, division working in blue, remainder decision in red, and final answer in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve division word problems by identifying key words, performing the division, and deciding what to do with the remainder" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — 936 ÷ 12 ───────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 936 ÷ 12.',
      answer: '78',
      checkMode: 'auto',
      correctAnswer: '78',
      explanation: 'Stap 1: 9 < 12 — neem 93. 93 ÷ 12 = 7 (7 × 12 = 84). 93 − 84 = 9. Bring 6 af → 96.\nStap 2: 96 ÷ 12 = 8 (8 × 12 = 96). 96 − 96 = 0. Geen res.\nAntwoord: 936 ÷ 12 = 78 ✓',
    },

    // ── Q2 Easy — 1 248 ÷ 16 ─────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 1 248 ÷ 16.',
      answer: '78',
      checkMode: 'auto',
      correctAnswer: '78',
      explanation: 'Stap 1: 1 < 16 — neem 12. 12 < 16 — neem 124. 124 ÷ 16 = 7 (7 × 16 = 112). 124 − 112 = 12. Bring 8 af → 128.\nStap 2: 128 ÷ 16 = 8 (8 × 16 = 128). 128 − 128 = 0. Geen res.\nAntwoord: 1 248 ÷ 16 = 78 ✓',
    },

    // ── Q3 Medium — 4 875 ÷ 25 ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 4 875 ÷ 25.',
      answer: '195',
      checkMode: 'auto',
      correctAnswer: '195',
      explanation: 'Stap 1: 4 < 25 — neem 48. 48 ÷ 25 = 1 (1 × 25 = 25). 48 − 25 = 23. Bring 7 af → 237.\nStap 2: 237 ÷ 25 = 9 (9 × 25 = 225). 237 − 225 = 12. Bring 5 af → 125.\nStap 3: 125 ÷ 25 = 5 (5 × 25 = 125). 125 − 125 = 0. Geen res.\nAntwoord: 4 875 ÷ 25 = 195 ✓',
    },

    // ── Q4 Medium — 7 392 ÷ 32 ───────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 7 392 ÷ 32.',
      answer: '231',
      checkMode: 'auto',
      correctAnswer: '231',
      explanation: 'Stap 1: 7 < 32 — neem 73. 73 ÷ 32 = 2 (2 × 32 = 64). 73 − 64 = 9. Bring 9 af → 99.\nStap 2: 99 ÷ 32 = 3 (3 × 32 = 96). 99 − 96 = 3. Bring 2 af → 32.\nStap 3: 32 ÷ 32 = 1 (1 × 32 = 32). 32 − 32 = 0. Geen res.\nAntwoord: 7 392 ÷ 32 = 231 ✓',
    },

    // ── Q5 Hard — 45 864 ÷ 24 ────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 45 864 ÷ 24.',
      answer: '1 911',
      checkMode: 'auto',
      correctAnswer: '1911',
      correctAnswers: ['1911', '1 911'],
      explanation: 'Stap 1: 4 < 24 — neem 45. 45 ÷ 24 = 1 (1 × 24 = 24). 45 − 24 = 21. Bring 8 af → 218.\nStap 2: 218 ÷ 24 = 9 (9 × 24 = 216). 218 − 216 = 2. Bring 6 af → 26.\nStap 3: 26 ÷ 24 = 1 (1 × 24 = 24). 26 − 24 = 2. Bring 4 af → 24.\nStap 4: 24 ÷ 24 = 1 (1 × 24 = 24). 24 − 24 = 0. Geen res.\nAntwoord: 45 864 ÷ 24 = 1 911. Kontroleer: 1 911 × 24 = 45 864 ✓',
    },

    // ── Q6 Hard — Sipho's answer check ───────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê 5 460 ÷ 14 = 390. Kontroleer sy antwoord. Is hy korrek?',
      answer: 'Kontroleer deur te vermenigvuldig: 390 × 14 = 5 460. Ja, Sipho is korrek.',
      checkMode: 'self',
    },

    // ── Q7 Easy — 45 000 ÷ 100 ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken 45 000 ÷ 100.',
      answer: '450',
      checkMode: 'auto',
      correctAnswer: '450',
      explanation: 'Deel deur 100 beteken om twee nulle te verwyder.\n45 000 ÷ 100 = 450 ✓',
    },

    // ── Q8 Medium — 72 000 ÷ 400 ─────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bereken 72 000 ÷ 400.',
      answer: '180',
      checkMode: 'auto',
      correctAnswer: '180',
      explanation: 'Verdeel 400 in 4 × 100.\nStap 1: 72 000 ÷ 4 = 18 000.\nStap 2: 18 000 ÷ 100 = 180 (verwyder twee nulle).\nAntwoord: 72 000 ÷ 400 = 180 ✓',
    },

    // ── Q9 Hard — 840 000 ÷ 2 000 ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bereken 840 000 ÷ 2 000.',
      answer: '420',
      checkMode: 'auto',
      correctAnswer: '420',
      explanation: 'Verdeel 2 000 in 2 × 1 000.\nStap 1: 840 000 ÷ 2 = 420 000.\nStap 2: 420 000 ÷ 1 000 = 420 (verwyder drie nulle).\nAntwoord: 840 000 ÷ 2 000 = 420 ✓',
    },

    // ── Q10 Medium — 576 learners in 18 groups ────────────────────────────────
    {
      difficulty: 'Medium',
      question: '576 leerders word gelyk in 18 groepe verdeel. Hoeveel leerders is in elke groep?',
      answer: '32',
      checkMode: 'auto',
      correctAnswer: '32',
      explanation: 'Stap 1: 5 < 18 — neem 57. 57 ÷ 18 = 3 (3 × 18 = 54). 57 − 54 = 3. Bring 6 af → 36.\nStap 2: 36 ÷ 18 = 2 (2 × 18 = 36). 36 − 36 = 0. Geen res.\nAntwoord: 576 ÷ 18 = 32 leerders per groep ✓',
    },

    // ── Q11 Hard — Lerato buying items (two parts) ────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het R6 250 en wil soveel items as moontlik teen R45 elk koop.\n\na) Hoeveel items kan sy koop?\nb) Hoeveel geld sal sy oor hê?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Hoeveel items kan sy koop?',
          correctAnswer: '138',
          explanation: 'Stap 1: 6 < 45 — neem 62. 62 ÷ 45 = 1 (1 × 45 = 45). 62 − 45 = 17. Bring 5 af → 175.\nStap 2: 175 ÷ 45 = 3 (3 × 45 = 135). 175 − 135 = 40. Bring 0 af → 400.\nStap 3: 400 ÷ 45 = 8 (8 × 45 = 360). 400 − 360 = 40. Res: 40.\nKwosiënt: 138. Kontroleer: 138 × 45 = 6 210. 6 250 − 6 210 = 40 ✓\nLerato kan 138 items koop.',
        },
        {
          label: 'b) Hoeveel geld sal sy oor hê?',
          correctAnswer: 'R40',
          correctAnswers: ['R40', '40'],
          explanation: 'Die res van 6 250 ÷ 45 = 138 res 40.\nLerato sal R40 oor hê.',
        },
      ],
    },

    // ── Q12 Hard — factory packing boxes (two parts) ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Fabriek moet 15 750 items in bokse van 48 verpak.\n\na) Hoeveel volle bokse sal daar wees?\nb) Hoeveel items sal onverpak bly?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Hoeveel volle bokse sal daar wees?',
          correctAnswer: '328',
          explanation: 'Stap 1: 15 < 48 — neem 157. 157 ÷ 48 = 3 (3 × 48 = 144). 157 − 144 = 13. Bring 5 af → 135.\nStap 2: 135 ÷ 48 = 2 (2 × 48 = 96). 135 − 96 = 39. Bring 0 af → 390.\nStap 3: 390 ÷ 48 = 8 (8 × 48 = 384). 390 − 384 = 6. Res: 6.\nKwosiënt: 328. Kontroleer: 328 × 48 = 15 744. 15 750 − 15 744 = 6 ✓\nDaar sal 328 volle bokse wees.',
        },
        {
          label: 'b) Hoeveel items sal onverpak bly?',
          correctAnswer: '6',
          explanation: 'Die res van 15 750 ÷ 48 = 328 res 6.\n6 items sal onverpak bly.',
        },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het deling volkome bemeester.' },
      { minScore: 9, message: 'Puik werk! Jy het ʼn sterk begrip van deling.' },
      { minScore: 6, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minScore: 0, message: 'Hou so aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
