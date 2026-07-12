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
        '<VideoPlaceholder label="Kort video wat stap vir stap langdeling van ʼn 4-syfergetal deur ʼn 2-syfergetal wys, met kleurgekodeerde stappe" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om te deel en die res uit te druk as ʼn heelgetal-res, as ʼn breuk, en as ʼn desimaal, met kleurgekodeerde uitgewerkte voorbeelde" />',
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
        '<VideoPlaceholder label="Kort video wat die hoofrekene-metode wys vir deling deur veelvoude van 10 en 100 deur die deler in sy nie-nul-syfer en mag van 10 te verdeel" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om delingswoordprobleme op te los deur sleutelwoorde te identifiseer, die deling uit te voer, en te besluit wat om met die res te doen" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Langdeling 2-syferdelers (presies) | 4-8 Reste op drie maniere |
    // 9-12 Hoofrekene-deling deur veelvoude van 10/100/1000 | 13-16 Woordprobleme: res-besluite |
    // 17-19 Gemengde meerstap-redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Bereken 936 ÷ 17.', answer: '55 res 1', checkMode: 'auto', correctAnswer: '55 res 1', correctAnswers: ['55 res 1', '55r1', '55 r 1', '55 remainder 1'], explanation: 'Stap 1: 9 < 17 — neem 93. 93 ÷ 17 = 5 (5 × 17 = 85). 93 − 85 = 8. Bring 6 af → 86.\nStap 2: 86 ÷ 17 = 5 (5 × 17 = 85). 86 − 85 = 1. Res: 1.\nAntwoord: 936 ÷ 17 = 55 res 1.' },
        { difficulty: 'Easy', question: 'Voltooi die langdeling hieronder om 2 408 ÷ 28 te vind.\n\n  ___\n28)2408\n  −252\n  ----\n   88\n  −84\n  ----\n    ?', answer: '86', checkMode: 'auto', correctAnswer: '86', correctAnswers: ['86'], explanation: 'Stap 1: 2 < 28, neem 24 — steeds < 28, neem 240. 240 ÷ 28 = 8 (8 × 28 = 224). 240 − 224 = 16. Bring 8 af → 168.\nStap 2: 168 ÷ 28 = 6 (6 × 28 = 168). 168 − 168 = 0. Geen res.\nAntwoord: 2 408 ÷ 28 = 86.' },
        { difficulty: 'Easy', question: 'ʼn Liefdadigheidsorganisasie pak 3 216 blikkies kos gelyk in 24 bokse vir ʼn skoolskenkingsdrywe. Hoeveel blikkies gaan in elke boks?', answer: '134', checkMode: 'auto', correctAnswer: '134', correctAnswers: ['134'], explanation: 'Stap 1: 3 < 24 — neem 32. 32 ÷ 24 = 1 (1 × 24 = 24). 32 − 24 = 8. Bring 1 af → 81.\nStap 2: 81 ÷ 24 = 3 (3 × 24 = 72). 81 − 72 = 9. Bring 6 af → 96.\nStap 3: 96 ÷ 24 = 4 (4 × 24 = 96). 96 − 96 = 0. Geen res.\nAntwoord: 3 216 ÷ 24 = 134 blikkies per boks.' },
        { difficulty: 'Easy', question: 'Bereken 78 624 ÷ 96. Let mooi op vir ʼn nul-syfer in die kwosiënt.', answer: '819', checkMode: 'auto', correctAnswer: '819', correctAnswers: ['819'], explanation: 'Stap 1: 78 < 96 — neem 786. 786 ÷ 96 = 8 (8 × 96 = 768). 786 − 768 = 18. Bring 2 af → 182.\nStap 2: 182 ÷ 96 = 1 (1 × 96 = 96). 182 − 96 = 86. Bring 4 af → 864.\nStap 3: 864 ÷ 96 = 9 (9 × 96 = 864). 864 − 864 = 0. Geen res.\nAntwoord: 78 624 ÷ 96 = 819.' },
        { difficulty: 'Easy-Medium', question: 'Bereken 452 ÷ 7 en gee jou antwoord as ʼn heelgetal-res (met R).', answer: '64 R 4', checkMode: 'auto', correctAnswer: '64 R 4', correctAnswers: ['64 R 4', '64r4', '64 r 4', '64 res 4'], explanation: 'Stap 1: 4 < 7 — neem 45. 45 ÷ 7 = 6 (6 × 7 = 42). 45 − 42 = 3. Bring 2 af → 32.\nStap 2: 32 ÷ 7 = 4 (4 × 7 = 28). 32 − 28 = 4. Res: 4.\nAntwoord: 452 ÷ 7 = 64 R 4.' },
        { difficulty: 'Easy-Medium', question: '13 vriende deel 561 plakkers so gelyk moontlik. Druk uit hoeveel plakkers elke vriend kry as ʼn breuk (res oor deler).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelgetaldeel en res', correctAnswer: '43 res 2', correctAnswers: ['43 res 2', '43r2', '43 r 2', '43 remainder 2'], explanation: '561 ÷ 13: Stap 1: 56 ÷ 13 = 4 (4 × 13 = 52). 56 − 52 = 4. Bring 1 af → 41.\nStap 2: 41 ÷ 13 = 3 (3 × 13 = 39). 41 − 39 = 2. Res: 2.\nAntwoord: 561 ÷ 13 = 43 res 2.' },
          { label: 'b) As ʼn breuk', correctAnswer: '43 2/13', correctAnswers: ['43 2/13', '43en2/13', '2/13'], explanation: 'Skryf die res oor die deler: elke vriend kry 43 volle plakkers en 2/13 van ʼn plakker, dus 43 2/13 plakkers.' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe deel 725 deur 8 om R725 prysgeld tussen 8 spanlede te verdeel. Druk die bedrag wat elke lid kry as ʼn desimaal uit, afgerond tot 1 desimale plek.', answer: '90,6', checkMode: 'auto', correctAnswer: '90,6', correctAnswers: ['90,6', 'R90,6', '90.6'], explanation: '725 ÷ 8: Stap 1: 72 ÷ 8 = 9 (9 × 8 = 72). 72 − 72 = 0. Bring 5 af → 05.\nStap 2: 05 ÷ 8 = 0 res 5. Skryf 0. Bring ʼn nul af (desimaal) → 50.\nStap 3: 50 ÷ 8 = 6 res 2 → 90,6 tot dusver. Gaan voort: bring nog ʼn nul af → 20. 20 ÷ 8 = 2 res 4, wat 90,62... gee.\nAfgerond tot 1 desimale plek: 90,6.' },
        { difficulty: 'Medium', question: 'Bongani sê: "4 230 ÷ 13 = 325 res 5, dus as ʼn breuk is dit 325 5/18." Is Bongani korrek? Verduidelik die fout, indien enige, en gee die korrekte breukvorm.', answer: 'Bongani is verkeerd. Die breuk moet die res oor die DELER wees, nie ʼn ander getal nie. Aangesien 4 230 ÷ 13 = 325 res 5, is die korrekte breukvorm 325 5/13, nie 325 5/18 nie. Hy het die verkeerde noemer gebruik.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee leerders deel lengtes heiningdraad. Ayanda bereken 238 ÷ 5 en druk die res as ʼn breuk uit. Zola bereken 890 ÷ 7 en druk die res as ʼn breuk uit. Wie se res-breuk is groter, 3/5 of 1/7?', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ["Ayanda se", 'Ayanda', '3/5'], explanation: '238 ÷ 5 = 47 res 3, dus is Ayanda se breuk 3/5 = 0,6.\n890 ÷ 7 = 127 res 1, dus is Zola se breuk 1/7 ≈ 0,14.\nAangesien 0,6 > 0,14, is Ayanda se res-breuk (3/5) groter.' },
        { difficulty: 'Medium', question: 'ʼn Yster- en hardewarewinkel het 315 m tou om in lengtes van 6 m vir kliënte te sny.\n\na) Hoeveel volle lengtes van 6 m kan gesny word?\nb) Hoeveel meter tou bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle lengtes van 6 m', correctAnswer: '52', explanation: '315 ÷ 6: Stap 1: 31 ÷ 6 = 5 (5 × 6 = 30). 31 − 30 = 1. Bring 5 af → 15.\nStap 2: 15 ÷ 6 = 2 (2 × 6 = 12). 15 − 12 = 3. Res: 3.\nAntwoord: 315 ÷ 6 = 52 res 3, dus 52 volle lengtes.' },
          { label: 'b) Meter wat oorbly', correctAnswer: '3', explanation: 'Die res van 315 ÷ 6 = 52 res 3, dus bly 3 m tou oor.' },
        ] },
        { difficulty: 'Medium', question: 'Bereken 33 600 ÷ 240, en wys jou twee hoofrekene-stappe.', answer: '140', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140'], explanation: 'Stap 1: Verdeel 240 in 24 × 10. Deel 33 600 eers deur 24: 33 600 ÷ 24 = 1 400.\nStap 2: Deel deur 10: 1 400 ÷ 10 = 140.\nAntwoord: 33 600 ÷ 240 = 140.' },
        { difficulty: 'Medium', question: 'Nomvula sê: "720 000 ÷ 900 = 8 000, want 72 ÷ 9 = 8 en dan hou jy net die nulle." Is sy korrek? Verduidelik enige fout en gee die korrekte antwoord.', answer: 'Nomvula is verkeerd. Sy het 72 gedeel deur 9 korrek uitgewerk om 8 te kry, maar 900 = 9 × 100, dus moet jy ná deling deur 9 ook deur 100 deel, nie net "die nulle hou" sonder om te kyk hoeveel nie. 720 000 ÷ 9 = 80 000, en dan 80 000 ÷ 100 = 800. Die korrekte antwoord is 800, nie 8 000 nie — sy het twee ekstra nulle van haar kortpad vergeet om te verwyder.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie het R280 000 om gelyk tussen 7 000 vloedgeteisterde huishoudings te verdeel. Hoeveel ontvang elke huishouding?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'R40'], explanation: 'Verdeel 7 000 in 7 × 1 000.\nStap 1: 280 000 ÷ 7 = 40 000.\nStap 2: 40 000 ÷ 1 000 = 40.\nAntwoord: R280 000 ÷ 7 000 = R40 per huishouding.' },
        { difficulty: 'Medium', question: 'ʼn Skool bestel 2 664 oefenboeke om gelyk tussen 37 klasse verdeel te word. Hoeveel oefenboeke ontvang elke klas?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '2 664 ÷ 37: Stap 1: 266 ÷ 37 = 7 (7 × 37 = 259). 266 − 259 = 7. Bring 4 af → 74.\nStap 2: 74 ÷ 37 = 2 (2 × 37 = 74). 74 − 74 = 0. Geen res.\nAntwoord: 2 664 ÷ 37 = 72 oefenboeke per klas.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Boer het 960 kg mielies om in sakke te pak wat elk 45 kg hou.\n\na) Hoeveel volle sakke kan gepak word?\nb) Hoeveel kilogram bly oor?\nc) Die boer wil elke kilogram inpak, selfs al is een sak nie heeltemal vol nie. Hoeveel sakke het hy in totaal nodig?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle sakke', correctAnswer: '21', explanation: '960 ÷ 45: Stap 1: 96 ÷ 45 = 2 (2 × 45 = 90). 96 − 90 = 6. Bring 0 af → 60.\nStap 2: 60 ÷ 45 = 1 (1 × 45 = 45). 60 − 45 = 15. Res: 15.\nAntwoord: 960 ÷ 45 = 21 res 15, dus 21 volle sakke.' },
          { label: 'b) Kilogram wat oorbly', correctAnswer: '15', explanation: 'Die res van 960 ÷ 45 = 21 res 15, dus bly 15 kg oor.' },
          { label: 'c) Totale sakke benodig', correctAnswer: '22', explanation: 'Rond op omdat die oorblywende mielies steeds in ʼn sak gepak moet word (al is dit nie vol nie). Totaal: 21 + 1 = 22 sakke.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Thandeka sê: "9 576 lekkers gedeel tussen 42 leerders beteken elkeen kry 227 lekkers, want 9 576 ÷ 42 rond af na die naaste heelgetal en ek het die oorskot laat val." Kontroleer haar deling en verduidelik of haar afrondingsbesluit (afrond) die regte keuse vir hierdie situasie was.', answer: '9 576 ÷ 42 = 228 presies (228 × 42 = 9 576), dus is daar geen res om te laat val nie — Thandeka het ʼn rekenfout gemaak, nie net ʼn afrondingsfout nie. Tog, wanneer lekkers gedeel word en daar IS ʼn res, is afrond gewoonlik korrek omdat jy nie deel van ʼn lekker kan uitdeel nie — maar hier geld dit nie aangesien die deling presies is.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Meubelverskuiwingsmaatskappy moet 3 480 bokse skuif met ʼn hyser wat 24 bokse per rit dra.\n\na) Hoeveel ritte moet die hyser maak om elke boks te skuif?\nb) Hoeveel bokse is in die laaste (gedeeltelike of volle) rit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal ritte', correctAnswer: '145', explanation: '3 480 ÷ 24: Stap 1: 34 ÷ 24 = 1 (1 × 24 = 24). 34 − 24 = 10. Bring 8 af → 108.\nStap 2: 108 ÷ 24 = 4 (4 × 24 = 96). 108 − 96 = 12. Bring 0 af → 120.\nStap 3: 120 ÷ 24 = 5 (5 × 24 = 120). 120 − 120 = 0. Geen res.\nAntwoord: 3 480 ÷ 24 = 145 presies, dus 145 ritte.' },
          { label: 'b) Bokse in die laaste rit', correctAnswer: '24', explanation: 'Aangesien 3 480 ÷ 24 = 145 presies (geen res), dra elke rit — insluitend die laaste — ʼn volle 24 bokse.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Maatskappy moet 58 968 kg goedere vervoer met vragmotors wat elk 42 kg dra... vereenvoudig eers deur op te let dat albei getalle ʼn gemeenskaplike faktor van 6 deel, en kontroleer dan jou finale antwoord deur terug te vermenigvuldig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vereenvoudigde deling (deel eers albei deur 6)', correctAnswer: '9828 gedeel deur 7', correctAnswers: ['9828 gedeel deur 7', '9828/7', '9 828 ÷ 7', '9828 ÷ 7'], explanation: '58 968 ÷ 6 = 9 828 en 42 ÷ 6 = 7, dus is die vereenvoudigde deling 9 828 ÷ 7.' },
          { label: 'b) Finale kwosiënt', correctAnswer: '1404', correctAnswers: ['1404', '1 404'], explanation: '9 828 ÷ 7: Stap 1: 98 ÷ 7 = 14 (14 × 7 = 98). 98 − 98 = 0. Bring 2 af → 02.\nStap 2: 02 ÷ 7 = 0 res 2. Bring 8 af → 28.\nStap 3: 28 ÷ 7 = 4 (4 × 7 = 28). 28 − 28 = 0.\nAntwoord: 9 828 ÷ 7 = 1 404, dus 58 968 ÷ 42 = 1 404.\nKontroleer: 1 404 × 42 = 58 968 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee afleweringspanne verdeel pakkies. Span A deel 18 720 pakkies gelyk tussen 52 bakkies. Span B deel 15 048 pakkies gelyk tussen 36 bakkies. Watter span gee elke bakkie meer pakkies, en met hoeveel?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Pakkies per bakkie vir Span A', correctAnswer: '360', explanation: '18 720 ÷ 52: Stap 1: 187 ÷ 52 = 3 (3 × 52 = 156). 187 − 156 = 31. Bring 2 af → 312.\nStap 2: 312 ÷ 52 = 6 (6 × 52 = 312). 312 − 312 = 0. Bring 0 af → 0. 0 ÷ 52 = 0.\nAntwoord: 18 720 ÷ 52 = 360.' },
          { label: 'b) Pakkies per bakkie vir Span B', correctAnswer: '418', explanation: '15 048 ÷ 36: Stap 1: 150 ÷ 36 = 4 (4 × 36 = 144). 150 − 144 = 6. Bring 4 af → 64.\nStap 2: 64 ÷ 36 = 1 (1 × 36 = 36). 64 − 36 = 28. Bring 8 af → 288.\nStap 3: 288 ÷ 36 = 8 (8 × 36 = 288). 288 − 288 = 0.\nAntwoord: 15 048 ÷ 36 = 418.' },
          { label: 'c) Watter span kry meer, en met hoeveel', correctAnswer: 'Span B met 58', correctAnswers: ['Span B met 58', 'Span B, 58', 'B met 58'], explanation: 'Span A: 360 pakkies per bakkie. Span B: 418 pakkies per bakkie. Aangesien 418 > 360, kry Span B meer, met 418 − 360 = 58 pakkies per bakkie.' },
        ] },
        { difficulty: 'Hard', question: 'Katlego kontroleer ʼn deling en beweer: "37 485 ÷ 45 = 833, en ek weet dit is reg want 833 × 45 = 37 485." Verifieer of haar vermenigvuldigingskontrole akkuraat is, en verifieer afsonderlik dat die oorspronklike deling korrek is deur dit self uit te voer.', answer: 'Vermenigvuldigingskontrole: 833 × 45 = 833 × 40 + 833 × 5 = 33 320 + 4 165 = 37 485. Dit stem ooreen, dus is die kontrole akkuraat.\nDelingskontrole (van voor af uitgewerk): 37 485 ÷ 45 — Stap 1: 374 ÷ 45 = 8 (8 × 45 = 360), res 14. Bring 8 af → 148. Stap 2: 148 ÷ 45 = 3 (3 × 45 = 135), res 13. Bring 5 af → 135. Stap 3: 135 ÷ 45 = 3 (3 × 45 = 135), res 0. Kwosiënt: 833.\nBeide die deling en die vermenigvuldigingskontrole bevestig dat 37 485 ÷ 45 = 833 korrek is.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het langdeling, reste op drie maniere, hoofrekene-delingskortpaaie en delingwoordprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Bereken 1 560 ÷ 24.', answer: '65', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65'], explanation: 'Stap 1: 15 < 24 — neem 156. 156 ÷ 24 = 6 (6 × 24 = 144). 156 − 144 = 12. Bring 0 af → 120.\nStap 2: 120 ÷ 24 = 5 (5 × 24 = 120). 120 − 120 = 0. Geen res.\nAntwoord: 1 560 ÷ 24 = 65.' },
        { difficulty: 'Easy', question: 'Voltooi die langdeling hieronder om 4 590 ÷ 27 te vind.\n\n  ___\n27)4590\n  −27\n  ---\n  189\n −189\n  ---\n    0', answer: '170', checkMode: 'auto', correctAnswer: '170', correctAnswers: ['170'], explanation: 'Stap 1: 4 < 27 — neem 45. 45 ÷ 27 = 1 (1 × 27 = 27). 45 − 27 = 18. Bring 9 af → 189.\nStap 2: 189 ÷ 27 = 7 (7 × 27 = 189). 189 − 189 = 0. Bring 0 af → 0. 0 ÷ 27 = 0.\nAntwoord: 4 590 ÷ 27 = 170.' },
        { difficulty: 'Easy', question: 'ʼn Bakkery deel 2 408 broodrolletjies gelyk tussen 28 krat vir aflewering. Hoeveel rolletjies gaan in elke krat?', answer: '86', checkMode: 'auto', correctAnswer: '86', correctAnswers: ['86'], explanation: 'Stap 1: 24 < 28 — neem 240. 240 ÷ 28 = 8 (8 × 28 = 224). 240 − 224 = 16. Bring 8 af → 168.\nStap 2: 168 ÷ 28 = 6 (6 × 28 = 168). 168 − 168 = 0. Geen res.\nAntwoord: 2 408 ÷ 28 = 86 rolletjies per krat.' },
        { difficulty: 'Easy', question: 'Bereken 45 936 ÷ 68... let noukeurig op in geval enige syfer in die kwosiënt ʼn nul is.', answer: '675 res 36', checkMode: 'auto', correctAnswer: '675 res 36', correctAnswers: ['675 res 36', '675r36', '675 r 36', '675 remainder 36'], explanation: 'Stap 1: 45 < 68 — neem 459. 459 ÷ 68 = 6 (6 × 68 = 408). 459 − 408 = 51. Bring 3 af → 513.\nStap 2: 513 ÷ 68 = 7 (7 × 68 = 476). 513 − 476 = 37. Bring 6 af → 376.\nStap 3: 376 ÷ 68 = 5 (5 × 68 = 340). 376 − 340 = 36. Res: 36.\nAntwoord: 45 936 ÷ 68 = 675 res 36.' },
        { difficulty: 'Easy-Medium', question: 'Bereken 548 ÷ 7 en gee jou antwoord as ʼn heelgetal-res (met R).', answer: '78 R 2', checkMode: 'auto', correctAnswer: '78 R 2', correctAnswers: ['78 R 2', '78r2', '78 r 2', '78 res 2'], explanation: 'Stap 1: 54 ÷ 7 = 7 (7 × 7 = 49). 54 − 49 = 5. Bring 8 af → 58.\nStap 2: 58 ÷ 7 = 8 (8 × 7 = 56). 58 − 56 = 2. Res: 2.\nAntwoord: 548 ÷ 7 = 78 R 2.' },
        { difficulty: 'Easy-Medium', question: '9 leerders deel 683 albasters so gelyk moontlik. Druk uit hoeveel albasters elke leerder kry as ʼn breuk (res oor deler).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelgetaldeel en res', correctAnswer: '75 res 8', correctAnswers: ['75 res 8', '75r8', '75 r 8', '75 remainder 8'], explanation: '683 ÷ 9: Stap 1: 68 ÷ 9 = 7 (7 × 9 = 63). 68 − 63 = 5. Bring 3 af → 53.\nStap 2: 53 ÷ 9 = 5 (5 × 9 = 45). 53 − 45 = 8. Res: 8.\nAntwoord: 683 ÷ 9 = 75 res 8.' },
          { label: 'b) As ʼn breuk', correctAnswer: '75 8/9', correctAnswers: ['75 8/9', '75en8/9', '8/9'], explanation: 'Skryf die res oor die deler: elke leerder kry 75 volle albasters en 8/9 van ʼn albaster, dus 75 8/9 albasters.' },
        ] },
        { difficulty: 'Medium', question: 'Sibusiso deel 327 deur 4 om R327 tuckshop-wins tussen 4 helpers te verdeel. Druk die bedrag wat elke helper kry as ʼn desimaal uit, afgerond tot 1 desimale plek.', answer: '81,8', checkMode: 'auto', correctAnswer: '81,8', correctAnswers: ['81,8', 'R81,8', '81.8'], explanation: '327 ÷ 4: Stap 1: 32 ÷ 4 = 8 (8 × 4 = 32). 32 − 32 = 0. Bring 7 af → 07.\nStap 2: 07 ÷ 4 = 1 res 3. Skryf 1. Bring ʼn nul af (desimaal) → 30.\nStap 3: 30 ÷ 4 = 7 res 2, wat 81,7... gee. Gaan voort: bring nog ʼn nul af → 20. 20 ÷ 4 = 5 res 0, wat 81,75 gee.\nAfgerond tot 1 desimale plek: 81,8.' },
        { difficulty: 'Medium', question: 'Precious sê: "6 489 ÷ 13 = 499 res 2, dus as ʼn breuk is dit 499 2/15." Is Precious korrek? Verduidelik die fout, indien enige, en gee die korrekte breukvorm.', answer: 'Precious is verkeerd. Die breuk moet die res oor die DELER wees, nie ʼn ander getal nie. Aangesien 6 489 ÷ 13 = 499 res 2, is die korrekte breukvorm 499 2/13, nie 499 2/15 nie. Sy het die verkeerde noemer gebruik.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee leerders deel lengtes lint. Karabo bereken 56 ÷ 3 en druk die res as ʼn breuk uit. Palesa bereken 37 ÷ 4 en druk die res as ʼn breuk uit. Wie se res-breuk is groter, 2/3 of 1/4?', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ["Karabo se", 'Karabo', '2/3'], explanation: '56 ÷ 3 = 18 res 2, dus is Karabo se breuk 2/3 ≈ 0,67.\n37 ÷ 4 = 9 res 1, dus is Palesa se breuk 1/4 = 0,25.\nAangesien 0,67 > 0,25, is Karabo se res-breuk (2/3) groter.' },
        { difficulty: 'Medium', question: 'ʼn Gemeenskapstuin het 546 m besproeiingspyp om in lengtes van 12 m te sny.\n\na) Hoeveel volle lengtes van 12 m kan gesny word?\nb) Hoeveel meter pyp bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle lengtes van 12 m', correctAnswer: '45', explanation: '546 ÷ 12: Stap 1: 54 ÷ 12 = 4 (4 × 12 = 48). 54 − 48 = 6. Bring 6 af → 66.\nStap 2: 66 ÷ 12 = 5 (5 × 12 = 60). 66 − 60 = 6. Res: 6.\nAntwoord: 546 ÷ 12 = 45 res 6, dus 45 volle lengtes.' },
          { label: 'b) Meter wat oorbly', correctAnswer: '6', explanation: 'Die res van 546 ÷ 12 = 45 res 6, dus bly 6 m pyp oor.' },
        ] },
        { difficulty: 'Medium', question: 'Bereken 24 600 ÷ 300, en wys jou twee hoofrekene-stappe.', answer: '82', checkMode: 'auto', correctAnswer: '82', correctAnswers: ['82'], explanation: 'Stap 1: Verdeel 300 in 3 × 100. Deel 24 600 eers deur 3: 24 600 ÷ 3 = 8 200.\nStap 2: Deel deur 100: 8 200 ÷ 100 = 82.\nAntwoord: 24 600 ÷ 300 = 82.' },
        { difficulty: 'Medium', question: 'Sizwe sê: "630 000 ÷ 900 = 7 000, want 63 ÷ 9 = 7 en dan hou jy net die nulle." Is hy korrek? Verduidelik enige fout en gee die korrekte antwoord.', answer: 'Sizwe is verkeerd. Hy het 63 gedeel deur 9 korrek uitgewerk om 7 te kry, maar 900 = 9 × 100, dus moet jy ná deling deur 9 ook deur 100 deel, nie net "die nulle hou" sonder om te kyk hoeveel nie. 630 000 ÷ 9 = 70 000, en dan 70 000 ÷ 100 = 700. Die korrekte antwoord is 700, nie 7 000 nie — hy het vergeet om twee ekstra nulle van sy kortpad te verwyder.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Rampfonds het R320 000 om gelyk tussen 8 000 huishoudings ná ʼn storm te verdeel. Hoeveel ontvang elke huishouding?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', 'R40'], explanation: 'Verdeel 8 000 in 8 × 1 000.\nStap 1: 320 000 ÷ 8 = 40 000.\nStap 2: 40 000 ÷ 1 000 = 40.\nAntwoord: R320 000 ÷ 8 000 = R40 per huishouding.' },
        { difficulty: 'Medium', question: 'ʼn Drukkersmaatskappy bestel 3 654 plakkate om gelyk tussen 29 skole verdeel te word. Hoeveel plakkate ontvang elke skool?', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '3 654 ÷ 29: Stap 1: 36 ÷ 29 = 1 (1 × 29 = 29). 36 − 29 = 7. Bring 5 af → 75.\nStap 2: 75 ÷ 29 = 2 (2 × 29 = 58). 75 − 58 = 17. Bring 4 af → 174.\nStap 3: 174 ÷ 29 = 6 (6 × 29 = 174). 174 − 174 = 0. Geen res.\nAntwoord: 3 654 ÷ 29 = 126 plakkate per skool.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Markboer het 1 080 kg uie om in sakke te pak wat elk 54 kg hou.\n\na) Hoeveel volle sakke kan gepak word?\nb) Hoeveel kilogram bly oor?\nc) Die boer wil elke kilogram inpak, selfs al is een sak nie heeltemal vol nie. Hoeveel sakke het hy in totaal nodig?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle sakke', correctAnswer: '20', explanation: '1 080 ÷ 54: Stap 1: 108 ÷ 54 = 2 (2 × 54 = 108). 108 − 108 = 0. Bring 0 af → 0.\nStap 2: 0 ÷ 54 = 0. Geen res.\nAntwoord: 1 080 ÷ 54 = 20 presies, dus 20 volle sakke met niks oor nie.' },
          { label: 'b) Kilogram wat oorbly', correctAnswer: '0', explanation: 'Die deling is presies: 1 080 ÷ 54 = 20 res 0, dus bly 0 kg oor.' },
          { label: 'c) Totale sakke benodig', correctAnswer: '20', explanation: 'Aangesien daar geen res is nie, word geen ekstra sak benodig nie. Totaal: 20 sakke presies.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Fikile sê: "9 150 potlode gedeel tussen 25 klaskamers beteken elke klaskamer kry 367 potlode, want 9 150 ÷ 25 rond af na die naaste heelgetal en ek het die oorskot laat val." Kontroleer haar deling en verduidelik of haar afrondingsbesluit (afrond) die regte keuse vir hierdie situasie was.', answer: '9 150 ÷ 25 = 366 presies (366 × 25 = 9 150), dus is daar geen res om te laat val nie — Fikile het ʼn rekenfout gemaak, nie net ʼn afrondingsfout nie. Tog, wanneer items soos potlode gedeel word en daar IS ʼn res, is afrond gewoonlik korrek omdat jy nie deel van ʼn potlood kan uitdeel nie — maar hier geld dit nie aangesien die deling presies is.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pakhuis moet 4 116 krat skuif met ʼn vurkhyser wat 42 krat per rit dra.\n\na) Hoeveel ritte moet die vurkhyser maak om elke krat te skuif?\nb) Hoeveel krat is in die laaste (gedeeltelike of volle) rit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal ritte', correctAnswer: '98', explanation: '4 116 ÷ 42: Stap 1: 41 < 42 — neem 411. 411 ÷ 42 = 9 (9 × 42 = 378). 411 − 378 = 33. Bring 6 af → 336.\nStap 2: 336 ÷ 42 = 8 (8 × 42 = 336). 336 − 336 = 0. Geen res.\nAntwoord: 4 116 ÷ 42 = 98 presies, dus 98 ritte.' },
          { label: 'b) Krat in die laaste rit', correctAnswer: '42', explanation: 'Aangesien 4 116 ÷ 42 = 98 presies (geen res), dra elke rit — insluitend die laaste — ʼn volle 42 krat.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Logistiekmaatskappy moet 68 880 kg voorraad vervoer met vragmotors wat elk 60 kg dra... vereenvoudig eers deur op te let dat albei getalle ʼn gemeenskaplike faktor van 10 deel, en kontroleer dan jou finale antwoord deur terug te vermenigvuldig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vereenvoudigde deling (deel eers albei deur 10)', correctAnswer: '6888 gedeel deur 6', correctAnswers: ['6888 gedeel deur 6', '6888/6', '6 888 ÷ 6', '6888 ÷ 6'], explanation: '68 880 ÷ 10 = 6 888 en 60 ÷ 10 = 6, dus is die vereenvoudigde deling 6 888 ÷ 6.' },
          { label: 'b) Finale kwosiënt', correctAnswer: '1148', correctAnswers: ['1148', '1 148'], explanation: '6 888 ÷ 6: Stap 1: 68 ÷ 6 = 11 (11 × 6 = 66). 68 − 66 = 2. Bring 8 af → 28.\nStap 2: 28 ÷ 6 = 4 (4 × 6 = 24). 28 − 24 = 4. Bring 8 af → 48.\nStap 3: 48 ÷ 6 = 8 (8 × 6 = 48). 48 − 48 = 0.\nAntwoord: 6 888 ÷ 6 = 1 148, dus 68 880 ÷ 60 = 1 148.\nKontroleer: 1 148 × 60 = 68 880 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee plaaskoöperasies verdeel kunsmissakke. Koöperasie A deel 12 768 sakke gelyk tussen 24 vragmotors. Koöperasie B deel 6 552 sakke gelyk tussen 39 vragmotors. Watter koöperasie gee elke vragmotor meer sakke, en met hoeveel?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sakke per vragmotor vir Koöperasie A', correctAnswer: '532', explanation: '12 768 ÷ 24: Stap 1: 127 ÷ 24 = 5 (5 × 24 = 120). 127 − 120 = 7. Bring 6 af → 76.\nStap 2: 76 ÷ 24 = 3 (3 × 24 = 72). 76 − 72 = 4. Bring 8 af → 48.\nStap 3: 48 ÷ 24 = 2 (2 × 24 = 48). 48 − 48 = 0.\nAntwoord: 12 768 ÷ 24 = 532.' },
          { label: 'b) Sakke per vragmotor vir Koöperasie B', correctAnswer: '168', explanation: '6 552 ÷ 39: Stap 1: 65 ÷ 39 = 1 (1 × 39 = 39). 65 − 39 = 26. Bring 5 af → 265.\nStap 2: 265 ÷ 39 = 6 (6 × 39 = 234). 265 − 234 = 31. Bring 2 af → 312.\nStap 3: 312 ÷ 39 = 8 (8 × 39 = 312). 312 − 312 = 0.\nAntwoord: 6 552 ÷ 39 = 168.' },
          { label: 'c) Watter koöperasie kry meer, en met hoeveel', correctAnswer: 'Koöperasie A met 364', correctAnswers: ['Koöperasie A met 364', 'Koöperasie A, 364', 'A met 364'], explanation: 'Koöperasie A: 532 sakke per vragmotor. Koöperasie B: 168 sakke per vragmotor. Aangesien 532 > 168, kry Koöperasie A meer, met 532 − 168 = 364 sakke per vragmotor.' },
        ] },
        { difficulty: 'Hard', question: 'Zanele kontroleer ʼn deling en beweer: "84 048 ÷ 48 = 1 751, en ek weet dit is reg want 1 751 × 48 = 84 048." Verifieer of haar vermenigvuldigingskontrole akkuraat is, en verifieer afsonderlik dat die oorspronklike deling korrek is deur dit self uit te voer.', answer: 'Vermenigvuldigingskontrole: 1 751 × 48 = 1 751 × 50 − 1 751 × 2 = 87 550 − 3 502 = 84 048. Dit stem ooreen, dus is die kontrole akkuraat.\nDelingskontrole (van voor af uitgewerk): 84 048 ÷ 48 — Stap 1: 840 ÷ 48 = 17 (17 × 48 = 816), res 24. Bring 4 af → 244. Stap 2: 244 ÷ 48 = 5 (5 × 48 = 240), res 4. Bring 8 af → 48. Stap 3: 48 ÷ 48 = 1, res 0. Kwosiënt: 1 751.\nBeide die deling en die vermenigvuldigingskontrole bevestig dat 84 048 ÷ 48 = 1 751 korrek is.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het langdeling, reste op drie maniere, hoofrekene-delingskortpaaie en delingwoordprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout as Stel 1 en 2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Bereken 918 ÷ 17.', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54'], explanation: 'Stap 1: 91 ÷ 17 = 5 (5 × 17 = 85). 91 − 85 = 6. Bring 8 af → 68.\nStap 2: 68 ÷ 17 = 4 (4 × 17 = 68). 68 − 68 = 0. Geen res.\nAntwoord: 918 ÷ 17 = 54.' },
        { difficulty: 'Easy', question: 'Voltooi die langdeling hieronder om 9 384 ÷ 29 te vind.\n\n   ___\n29)9384\n  −87\n  ---\n   68\n  −58\n  ---\n  104\n  −87\n  ---\n   17', answer: '323 res 17', checkMode: 'auto', correctAnswer: '323 res 17', correctAnswers: ['323 res 17', '323r17', '323 r 17', '323 remainder 17'], explanation: 'Stap 1: 93 ÷ 29 = 3 (3 × 29 = 87). 93 − 87 = 6. Bring 8 af → 68.\nStap 2: 68 ÷ 29 = 2 (2 × 29 = 58). 68 − 58 = 10. Bring 4 af → 104.\nStap 3: 104 ÷ 29 = 3 (3 × 29 = 87). 104 − 87 = 17. Res: 17.\nAntwoord: 9 384 ÷ 29 = 323 res 17.' },
        { difficulty: 'Easy', question: 'ʼn Skryfbehoefte-verskaffer pak 6 072 penne gelyk in 33 bokse vir ʼn voorraadbestelling. Hoeveel penne gaan in elke boks?', answer: '184', checkMode: 'auto', correctAnswer: '184', correctAnswers: ['184'], explanation: 'Stap 1: 60 ≥ 33. 60 ÷ 33 = 1 (1 × 33 = 33). 60 − 33 = 27. Bring 7 af → 277.\nStap 2: 277 ÷ 33 = 8 (8 × 33 = 264). 277 − 264 = 13. Bring 2 af → 132.\nStap 3: 132 ÷ 33 = 4 (4 × 33 = 132). 132 − 132 = 0. Geen res.\nAntwoord: 6 072 ÷ 33 = 184 penne per boks.' },
        { difficulty: 'Easy', question: 'Bereken 12 432 ÷ 42. Let mooi op vir ʼn nul-syfer in die kwosiënt.', answer: '296', checkMode: 'auto', correctAnswer: '296', correctAnswers: ['296'], explanation: 'Stap 1: 124 ÷ 42 = 2 (2 × 42 = 84). 124 − 84 = 40. Bring 3 af → 403.\nStap 2: 403 ÷ 42 = 9 (9 × 42 = 378). 403 − 378 = 25. Bring 2 af → 252.\nStap 3: 252 ÷ 42 = 6 (6 × 42 = 252). 252 − 252 = 0. Geen res.\nAntwoord: 12 432 ÷ 42 = 296.' },
        { difficulty: 'Easy-Medium', question: 'Bereken 890 ÷ 7 en gee jou antwoord as ʼn heelgetal-res (met R).', answer: '127 R 1', checkMode: 'auto', correctAnswer: '127 R 1', correctAnswers: ['127 R 1', '127r1', '127 r 1', '127 res 1'], explanation: 'Stap 1: 89 ÷ 7 = 12 (12 × 7 = 84). 89 − 84 = 5. Bring 0 af → 50.\nStap 2: 50 ÷ 7 = 7 (7 × 7 = 49). 50 − 49 = 1. Res: 1.\nAntwoord: 890 ÷ 7 = 127 R 1.' },
        { difficulty: 'Easy-Medium', question: '9 leerders deel 561 knikkers so gelyk moontlik. Druk uit hoeveel knikkers elke leerder kry as ʼn breuk (res oor deler).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelgetaldeel en res', correctAnswer: '62 res 3', correctAnswers: ['62 res 3', '62r3', '62 r 3', '62 remainder 3'], explanation: '561 ÷ 9: Stap 1: 56 ÷ 9 = 6 (6 × 9 = 54). 56 − 54 = 2. Bring 1 af → 21.\nStap 2: 21 ÷ 9 = 2 (2 × 9 = 18). 21 − 18 = 3. Res: 3.\nAntwoord: 561 ÷ 9 = 62 res 3.' },
          { label: 'b) As ʼn breuk', correctAnswer: '62 3/9', correctAnswers: ['62 3/9', '62en3/9', '3/9', '62 1/3', '1/3'], explanation: 'Skryf die res oor die deler: elke leerder kry 62 volle knikkers en 3/9 (wat vereenvoudig na 1/3) van ʼn knikker, dus 62 3/9 (of 62 1/3) knikkers.' },
        ] },
        { difficulty: 'Medium', question: 'Mpho deel 315 deur 6 om R315 rafelgeld tussen 6 vrywilligers te verdeel. Druk die bedrag wat elke vrywilliger kry as ʼn desimaal uit.', answer: '52,5', checkMode: 'auto', correctAnswer: '52,5', correctAnswers: ['52,5', 'R52,5', '52.5'], explanation: '315 ÷ 6: Stap 1: 31 ÷ 6 = 5 (5 × 6 = 30). 31 − 30 = 1. Bring 5 af → 15.\nStap 2: 15 ÷ 6 = 2 res 3. Skryf 2 → 52 res 3. Bring ʼn nul af (desimaal) → 30.\nStap 3: 30 ÷ 6 = 5 res 0, wat presies 52,5 gee.\nAntwoord: 315 ÷ 6 = 52,5.' },
        { difficulty: 'Medium', question: 'Given sê: "2 450 ÷ 17 = 144 res 2, dus as ʼn breuk is dit 144 2/12." Is Given korrek? Verduidelik die fout, indien enige, en gee die korrekte breukvorm.', answer: 'Given is verkeerd. Die breuk moet die res oor die DELER wees, nie ʼn ander getal nie. Aangesien 2 450 ÷ 17 = 144 res 2, is die korrekte breukvorm 144 2/17, nie 144 2/12 nie. Hy het die verkeerde noemer gebruik.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee leerders deel lengtes tou. Refilwe bereken 41 ÷ 3 en druk die res as ʼn breuk uit. Tebogo bereken 63 ÷ 7 en druk die res as ʼn breuk uit. Wie se res-breuk is groter, 2/3 of 0/7?', answer: '2/3', checkMode: 'auto', correctAnswer: '2/3', correctAnswers: ["Refilwe se", 'Refilwe', '2/3'], explanation: '41 ÷ 3 = 13 res 2, dus is Refilwe se breuk 2/3 ≈ 0,67.\n63 ÷ 7 = 9 res 0, dus is Tebogo se breuk 0/7 = 0 (die deling is presies, glad geen res nie).\nAangesien 0,67 > 0, is Refilwe se res-breuk (2/3) groter.' },
        { difficulty: 'Medium', question: 'ʼn Heiningkontrakteur het 4 230 m draadheining om in lengtes van 13 m vir ʼn plaasgrens te sny.\n\na) Hoeveel volle lengtes van 13 m kan gesny word?\nb) Hoeveel meter draad bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle lengtes van 13 m', correctAnswer: '325', explanation: '4 230 ÷ 13: Stap 1: 42 ÷ 13 = 3 (3 × 13 = 39). 42 − 39 = 3. Bring 3 af → 33.\nStap 2: 33 ÷ 13 = 2 (2 × 13 = 26). 33 − 26 = 7. Bring 0 af → 70.\nStap 3: 70 ÷ 13 = 5 (5 × 13 = 65). 70 − 65 = 5. Res: 5.\nAntwoord: 4 230 ÷ 13 = 325 res 5, dus 325 volle lengtes.' },
          { label: 'b) Meter wat oorbly', correctAnswer: '5', explanation: 'Die res van 4 230 ÷ 13 = 325 res 5, dus bly 5 m draad oor.' },
        ] },
        { difficulty: 'Medium', question: 'Bereken 96 000 ÷ 600, en wys jou twee hoofrekene-stappe.', answer: '160', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160'], explanation: 'Stap 1: Verdeel 600 in 6 × 100. Deel 96 000 eers deur 6: 96 000 ÷ 6 = 16 000.\nStap 2: Deel deur 100: 16 000 ÷ 100 = 160.\nAntwoord: 96 000 ÷ 600 = 160.' },
        { difficulty: 'Medium', question: 'Andile sê: "560 000 ÷ 7 000 = 80, want 56 ÷ 7 = 8 en dan voeg jy net een nul by." Is hy korrek? Verduidelik jou redenasie, insluitend hoeveel nulle regtig bygevoeg of verwyder moet word.', answer: 'Andile is eintlik hierdie keer korrek, maar kom ons kyk mooi na sy redenasie. 7 000 = 7 × 1 000. As jy 560 000 eers deur 7 deel, kry jy 80 000, en as jy dan deur 1 000 deel (drie nulle verwyder), kry jy 80. So 560 000 ÷ 7 000 = 80 is korrek — maar sy verduideliking van "voeg net een nul by" is misleidend, want die regte proses is: deel deur 7 (56 ÷ 7 = 8, met die ekstra nulle as 80 000 gehou), deel dan deur 1 000 (verwyder drie nulle om 80 te kry). Die antwoord is reg, maar die redenasie het die tweestap-verdeling nodig om betroubaar vir ander probleme te wees.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Skenker het R126 000 om gelyk tussen 3 000 leerders vir ʼn beursaanvulling te verdeel. Hoeveel ontvang elke leerder?', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', 'R42'], explanation: 'Verdeel 3 000 in 3 × 1 000.\nStap 1: 126 000 ÷ 3 = 42 000.\nStap 2: 42 000 ÷ 1 000 = 42.\nAntwoord: R126 000 ÷ 3 000 = R42 per leerder.' },
        { difficulty: 'Medium', question: 'ʼn Uitgewer bestel 7 395 werkboeke om gelyk tussen 29 skole verdeel te word. Hoeveel werkboeke ontvang elke skool?', answer: '255', checkMode: 'auto', correctAnswer: '255', correctAnswers: ['255'], explanation: '7 395 ÷ 29: Stap 1: 73 ÷ 29 = 2 (2 × 29 = 58). 73 − 58 = 15. Bring 9 af → 159.\nStap 2: 159 ÷ 29 = 5 (5 × 29 = 145). 159 − 145 = 14. Bring 5 af → 145.\nStap 3: 145 ÷ 29 = 5 (5 × 29 = 145). 145 − 145 = 0. Geen res.\nAntwoord: 7 395 ÷ 29 = 255 werkboeke per skool.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Groentekoöperasie het 9 520 kg aartappels om in sakke te pak wat elk 340 kg hou.\n\na) Hoeveel volle sakke kan gepak word?\nb) Hoeveel kilogram bly oor?\nc) Die koöperasie wil elke kilogram inpak, selfs al is een sak nie heeltemal vol nie. Hoeveel sakke het dit in totaal nodig?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle sakke', correctAnswer: '28', explanation: '9 520 ÷ 340: deel eers albei deur 10: 952 ÷ 34 = 28 (28 × 34 = 952). 952 − 952 = 0. Geen res.\nAntwoord: 9 520 ÷ 340 = 28 presies, dus 28 volle sakke met niks oor nie.' },
          { label: 'b) Kilogram wat oorbly', correctAnswer: '0', explanation: 'Die deling is presies: 9 520 ÷ 340 = 28 res 0, dus bly 0 kg oor.' },
          { label: 'c) Totale sakke benodig', correctAnswer: '28', explanation: 'Aangesien daar geen res is nie, word geen ekstra sak benodig nie. Totaal: 28 sakke presies.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Lwazi sê: "9 750 saailinge gedeel tussen 25 kwekerye beteken elke kwekery kry 391 saailinge, want 9 750 ÷ 25 rond af na die naaste heelgetal en ek het die oorskot laat val." Kontroleer sy deling en verduidelik of sy afrondingsbesluit (afrond) die regte keuse vir hierdie situasie was.', answer: '9 750 ÷ 25 = 390 presies (390 × 25 = 9 750), dus is daar geen res om te laat val nie — Lwazi het ʼn rekenfout gemaak, nie net ʼn afrondingsfout nie. Tog, wanneer items soos saailinge gedeel word en daar IS ʼn res, is afrond gewoonlik korrek omdat jy nie deel van ʼn saailing kan uitdeel nie — maar hier geld dit nie aangesien die deling presies is.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Koeriersdepot moet 7 350 pakkies skuif met ʼn bussie wat 25 pakkies per rit dra.\n\na) Hoeveel ritte moet die bussie maak om elke pakkie te skuif?\nb) Hoeveel pakkies is in die laaste (gedeeltelike of volle) rit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Aantal ritte', correctAnswer: '294', explanation: '7 350 ÷ 25: Stap 1: 73 ÷ 25 = 2 (2 × 25 = 50). 73 − 50 = 23. Bring 5 af → 235.\nStap 2: 235 ÷ 25 = 9 (9 × 25 = 225). 235 − 225 = 10. Bring 0 af → 100.\nStap 3: 100 ÷ 25 = 4 (4 × 25 = 100). 100 − 100 = 0. Geen res.\nAntwoord: 7 350 ÷ 25 = 294 presies, dus 294 ritte.' },
          { label: 'b) Pakkies in die laaste rit', correctAnswer: '25', explanation: 'Aangesien 7 350 ÷ 25 = 294 presies (geen res), dra elke rit — insluitend die laaste — ʼn volle 25 pakkies.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Konstruksieverskaffer moet 19 872 kg sement vervoer met vragmotors wat elk 36 kg dra... vereenvoudig eers deur op te let dat albei getalle ʼn gemeenskaplike faktor van 4 deel, en kontroleer dan jou finale antwoord deur terug te vermenigvuldig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Vereenvoudigde deling (deel eers albei deur 4)', correctAnswer: '4968 gedeel deur 9', correctAnswers: ['4968 gedeel deur 9', '4968/9', '4 968 ÷ 9', '4968 ÷ 9'], explanation: '19 872 ÷ 4 = 4 968 en 36 ÷ 4 = 9, dus is die vereenvoudigde deling 4 968 ÷ 9.' },
          { label: 'b) Finale kwosiënt', correctAnswer: '552', correctAnswers: ['552'], explanation: '4 968 ÷ 9: Stap 1: 49 ÷ 9 = 5 (5 × 9 = 45). 49 − 45 = 4. Bring 6 af → 46.\nStap 2: 46 ÷ 9 = 5 (5 × 9 = 45). 46 − 45 = 1. Bring 8 af → 18.\nStap 3: 18 ÷ 9 = 2 (2 × 9 = 18). 18 − 18 = 0.\nAntwoord: 4 968 ÷ 9 = 552, dus 19 872 ÷ 36 = 552.\nKontroleer: 552 × 36 = 19 872 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee bouers verdeel bakstene. Bouer A deel 13 284 bakstene gelyk tussen 52 palette. Bouer B deel 15 960 bakstene gelyk tussen 38 palette. Watter bouer gee elke palet meer bakstene, en met hoeveel?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Bakstene per palet vir Bouer A', correctAnswer: '255 res 24', correctAnswers: ['255 res 24', '255r24', '255 r 24', '255 remainder 24', '255'], explanation: '13 284 ÷ 52: Stap 1: 132 ÷ 52 = 2 (2 × 52 = 104). 132 − 104 = 28. Bring 8 af → 288.\nStap 2: 288 ÷ 52 = 5 (5 × 52 = 260). 288 − 260 = 28. Bring 4 af → 284.\nStap 3: 284 ÷ 52 = 5 (5 × 52 = 260). 284 − 260 = 24. Res: 24.\nAntwoord: 13 284 ÷ 52 = 255 res 24.' },
          { label: 'b) Bakstene per palet vir Bouer B', correctAnswer: '420', explanation: '15 960 ÷ 38: Stap 1: 159 ÷ 38 = 4 (4 × 38 = 152). 159 − 152 = 7. Bring 6 af → 76.\nStap 2: 76 ÷ 38 = 2 (2 × 38 = 76). 76 − 76 = 0. Bring 0 af → 0. 0 ÷ 38 = 0.\nAntwoord: 15 960 ÷ 38 = 420 presies.' },
          { label: 'c) Watter bouer kry meer volle bakstene per palet, en met hoeveel', correctAnswer: 'Bouer B met 165', correctAnswers: ['Bouer B met 165', 'Bouer B, 165', 'B met 165'], explanation: 'Bouer A: 255 volle bakstene per palet (met 24 oor onverdeel). Bouer B: 420 bakstene per palet presies. Aangesien 420 > 255, kry Bouer B meer volle bakstene per palet, met 420 − 255 = 165 bakstene.' },
        ] },
        { difficulty: 'Hard', question: 'Thabiso kontroleer ʼn deling en beweer: "41 850 ÷ 50 = 837, en ek weet dit is reg want 837 × 50 = 41 850." Verifieer of haar vermenigvuldigingskontrole akkuraat is, en verifieer afsonderlik dat die oorspronklike deling korrek is deur die hoofrekene-kortpad vir deel deur ʼn veelvoud van 10 te gebruik.', answer: 'Vermenigvuldigingskontrole: 837 × 50 = 837 × 100 ÷ 2 = 83 700 ÷ 2 = 41 850. Dit stem ooreen, dus is die kontrole akkuraat.\nDelingskontrole met die hoofrekene-kortpad: 50 = 5 × 10, dus deel 41 850 eers deur 5: 41 850 ÷ 5 = 8 370. Deel dan deur 10 (verwyder een nul): 8 370 ÷ 10 = 837.\nBeide die kortpad-deling en die vermenigvuldigingskontrole bevestig dat 41 850 ÷ 50 = 837 korrek is.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het langdeling, reste op drie maniere, hoofrekene-delingskortpaaie en delingwoordprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige vrae wat jy verkeerd gehad het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
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
