import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (division roles) ─────────────────────────────────────────
// dividend       → red     (#dc2626)
// divisor        → blue    (#2563eb)
// quotient       → green   (#16a34a)
// remainder      → orange  (#ea580c)
// estimated digit→ purple  (#7c3aed)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Deling',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVISION AS THE INVERSE OF MULTIPLICATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-inverse-multiplication',
      title: 'Deling as die Inverse van Vermenigvuldiging',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Deling en vermenigvuldiging is <strong>inverse bewerkings</strong> — hulle maak mekaar ongedaan, net soos optelling en aftrekking mekaar ongedaan maak. In Graad 5 gebruik ons hierdie verwantskap om groter getalle vinnig te deel deur aan die ooreenstemmende vermenigvuldigingsfeit te dink.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deeltal')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('deler')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwosiënt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('res')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Deeltal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal wat gedeel word — dit is die beginhoeveelheid.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Deler</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getal waarmee jy deel — hoeveel gelyke groepe ons maak.</p>` +
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

        // ── Fact family ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Feitefamilies</p>` +
        `<p style="margin-bottom:12px;">Een vermenigvuldigingsfeit gee jou <strong>twee delingsfeite</strong> gratis. Hierdie drie feite vorm ʼn <strong>feitefamilie</strong>:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Vermenigvuldiging</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">8 × 9 = ${re('72')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Delingsfeit 1</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('72')} ÷ ${bl('9')} = ${gr('8')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">⟶</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Delingsfeit 2</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('72')} ÷ ${bl('8')} = ${gr('9')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom vermenigvuldigingstafels belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy jou vermenigvuldigingstafels tot by <strong>12 × 12</strong> ken, kan jy die meeste delingsvrae onmiddellik oplos — dink net aan die ooreenstemmende vermenigvuldigingsfeit en die antwoord is klaar daar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die feitefamilie vir 11 × 12 = 132 om twee delingsfeite te skryf.',
          answer: `${re('132')} ÷ ${bl('12')} = ${gr('11')} en ${re('132')} ÷ ${bl('11')} = ${gr('12')}`,
          steps: [
            `Begin met die vermenigvuldigingsfeit: <strong>11 × 12 = ${re('132')}</strong>. Die produk ${re('132')} word die ${re('deeltal')} in albei delingsfeite.`,
            `<strong>Delingsfeit 1:</strong> Wissel die produk en een van die faktore om. Gebruik ${bl('12')} as die ${bl('deler')}:<br>${re('132')} ÷ ${bl('12')} = ${gr('11')}`,
            `<strong>Delingsfeit 2:</strong> Gebruik nou ${bl('11')} as die ${bl('deler')}:<br>${re('132')} ÷ ${bl('11')} = ${gr('12')}`,
            `<strong>Kontroleer:</strong> Albei antwoorde werk omdat 11 × 12 en 12 × 11 altwee gelyk is aan 132. ✓`,
          ],
        },
        {
          question: 'Bereken 144 ÷ 12 met vermenigvuldigingstafels.',
          answer: `${re('144')} ÷ ${bl('12')} = ${gr('12')}`,
          steps: [
            `Skryf die deling: ${re('144')} ÷ ${bl('12')} = ?`,
            `<strong>Dink:</strong> Watter getal maal ${bl('12')} is gelyk aan ${re('144')}?<br>Vra jouself: "__ × 12 = 144"`,
            `Onthou die 12×-tafel: ${bl('12')} × ${gr('12')} = ${re('144')}`,
            `Dus ${re('144')} ÷ ${bl('12')} = ${gr('12')} ✓`,
          ],
        },
        {
          question: 'Bereken 108 ÷ 9.',
          answer: `${re('108')} ÷ ${bl('9')} = ${gr('12')}`,
          steps: [
            `Skryf die deling: ${re('108')} ÷ ${bl('9')} = ?`,
            `<strong>Dink:</strong> Watter getal maal ${bl('9')} is gelyk aan ${re('108')}?<br>Vra jouself: "__ × 9 = 108"`,
            `Onthou die 9×-tafel: ${bl('9')} × ${gr('12')} = ${re('108')}`,
            `Dus ${re('108')} ÷ ${bl('9')} = ${gr('12')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — two division facts from a fact family ──────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die feitefamilie vir 9 × 12 = 108 om twee delingsfeite te skryf.',
          answer: '108 ÷ 12 = 9\n108 ÷ 9 = 12',
          checkMode: 'self',
        },

        // ── Q2 Medium — three multiplication-table divisions ─────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken elkeen van die volgende met jou vermenigvuldigingstafels.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 132 ÷ 11 =',
              correctAnswer: '12',
              explanation: 'Dink: watter getal × 11 = 132?\n11 × 12 = 132, dus 132 ÷ 11 = 12 ✓',
            },
            {
              label: 'b) 144 ÷ 12 =',
              correctAnswer: '12',
              explanation: 'Dink: watter getal × 12 = 144?\n12 × 12 = 144, dus 144 ÷ 12 = 12 ✓',
            },
            {
              label: 'c) 121 ÷ 11 =',
              correctAnswer: '11',
              explanation: 'Dink: watter getal × 11 = 121?\n11 × 11 = 121, dus 121 ÷ 11 = 11 ✓',
            },
          ],
        },

        // ── Q3 Hard — find the dividend and write full fact family ────────────
        {
          difficulty: 'Hard',
          question: 'Die antwoord op ʼn deling is 11. Die deler is 12. Wat is die deeltal? Skryf die volledige feitefamilie vir hierdie drie getalle.',
          answer: 'Stap 1: Deeltal = kwosiënt × deler = 11 × 12 = 132\n\nVolledige feitefamilie:\n11 × 12 = 132\n12 × 11 = 132\n132 ÷ 12 = 11\n132 ÷ 11 = 12',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe vermenigvuldiging-feitefamilies help om delingsprobleme met groter getalle tot by 12 x 12 op te los" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIVIDING A 4-DIGIT NUMBER BY A 1-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division-4-digit',
      title: 'Deel ʼn 4-Syfergetal deur ʼn 1-Syfergetal',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 5 gebruik ons <strong>langdeling</strong> om 4-syfergetalle deur ʼn 1-syfergetal te deel. Die stappe is dieselfde as dié wat jy in Graad 4 gebruik het — ons pas dit net op groter getalle toe. Werk van <strong>links na regs</strong>, een syfer op ʼn slag.</p>` +

        // ── Colour key (long division step colours) ──────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermenigvuldig')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('trek af')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bring af')}</span>` +
        `</div>` +

        // ── 5 steps reference ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 5 langdelingstappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Deel')} — Kyk na die syfer heel links. As dit kleiner as die deler is, sluit die volgende syfer ook in, en deel dan.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vermenigvuldig')} — Vermenigvuldig die kwosiëntsyfer wat jy so pas geskryf het met die deler. Skryf die resultaat daaronder.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Trek af')} — Trek die produk af van die syfers bo dit. Skryf die verskil onder die lyn.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bring af')} — Bring die volgende syfer van die deeltal af en voeg dit regs van jou aftrekkingsresultaat by.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Herhaal</strong> — Herhaal stappe 1–4 totdat alle syfers gebruik is. Wat ook al aan die einde oorbly, is die res.</p>` +
        `</div>` +

        `</div>` +

        // ── Zero in quotient tip ─────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Let wel: nul in die kwosiënt</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die getal wat jy deel kleiner as die deler is, skryf <strong>0</strong> in die kwosiënt, ${bl('vermenigvuldig')} (0 × deler = 0), ${gr('trek af')} (niks verander nie), en ${or('bring')} dan die volgende syfer ${or('af')}. Slaan nooit hierdie nul oor nie — dit is deel van jou antwoord.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: 2 436 ÷ 4 = 609 ──────────────────────────────────────
        {
          question: 'Bereken 2 436 ÷ 4.',
          answer: `${re('2 436')} ÷ ${bl('4')} = ${gr('609')}`,
          steps: [
            `${re('Deel:')} Kyk na die eerste syfer — <strong>2</strong>. Aangesien 2 &lt; 4 kan ons nog nie deel nie. Neem die eerste twee syfers: <strong>24</strong>. 24 ÷ ${bl('4')} = ${gr('6')}. Skryf ${gr('6')} in die kwosiënt bo die 4.`,
            `${bl('Vermenigvuldig:')} ${gr('6')} × ${bl('4')} = ${bl('24')}. Skryf ${bl('24')} onder die 24 in die deeltal.`,
            `${gr('Trek af:')} 24 − ${bl('24')} = ${gr('0')}. Skryf ${gr('0')} onder die lyn.`,
            `${or('Bring af:')} Bring die volgende syfer <strong>3</strong> af → ons het nou <strong>${or('03')}</strong>. ${re('Deel:')} 03 ÷ ${bl('4')} = ${gr('0')} res 3. Skryf ${gr('0')} in die kwosiënt bo die 3. ${bl('Vermenigvuldig:')} ${gr('0')} × ${bl('4')} = ${bl('0')}. ${gr('Trek af:')} 03 − ${bl('0')} = ${gr('3')}.`,
            `${or('Bring af:')} Bring die laaste syfer <strong>6</strong> af → ons het nou <strong>${or('36')}</strong>. ${re('Deel:')} 36 ÷ ${bl('4')} = ${gr('9')}. Skryf ${gr('9')} in die kwosiënt bo die 6.`,
            `${bl('Vermenigvuldig:')} ${gr('9')} × ${bl('4')} = ${bl('36')}. Skryf ${bl('36')} daaronder. ${gr('Trek af:')} 36 − ${bl('36')} = ${gr('0')}. Geen res.`,
            `<strong>Antwoord:</strong> ${re('2 436')} ÷ ${bl('4')} = ${gr('609')} ✓`,
          ],
        },

        // ── Example 5: 3 752 ÷ 8 = 469 ──────────────────────────────────────
        {
          question: 'Bereken 3 752 ÷ 8.',
          answer: `${re('3 752')} ÷ ${bl('8')} = ${gr('469')}`,
          steps: [
            `${re('Deel:')} 3 &lt; 8, dus neem ons die eerste twee syfers: <strong>37</strong>. 37 ÷ ${bl('8')} = ${gr('4')} res 5. Skryf ${gr('4')} in die kwosiënt.`,
            `${bl('Vermenigvuldig:')} ${gr('4')} × ${bl('8')} = ${bl('32')}. Skryf ${bl('32')} onder 37. ${gr('Trek af:')} 37 − ${bl('32')} = ${gr('5')}.`,
            `${or('Bring af:')} Bring <strong>5</strong> af → ons het nou <strong>${or('55')}</strong>. ${re('Deel:')} 55 ÷ ${bl('8')} = ${gr('6')} res 7. Skryf ${gr('6')} in die kwosiënt.`,
            `${bl('Vermenigvuldig:')} ${gr('6')} × ${bl('8')} = ${bl('48')}. Skryf ${bl('48')} onder 55. ${gr('Trek af:')} 55 − ${bl('48')} = ${gr('7')}.`,
            `${or('Bring af:')} Bring <strong>2</strong> af → ons het nou <strong>${or('72')}</strong>. ${re('Deel:')} 72 ÷ ${bl('8')} = ${gr('9')}. Skryf ${gr('9')} in die kwosiënt.`,
            `${bl('Vermenigvuldig:')} ${gr('9')} × ${bl('8')} = ${bl('72')}. Skryf ${bl('72')} daaronder. ${gr('Trek af:')} 72 − ${bl('72')} = ${gr('0')}. Geen res.`,
            `<strong>Antwoord:</strong> ${re('3 752')} ÷ ${bl('8')} = ${gr('469')} ✓`,
          ],
        },

        // ── Example 6: 5 043 ÷ 7 = 720 r3, with inverse check ───────────────
        {
          question: 'Bereken 5 043 ÷ 7 en kontroleer jou antwoord deur die inverse bewerking te gebruik.',
          answer: `${re('5 043')} ÷ ${bl('7')} = ${gr('720')} res ${or('3')}`,
          steps: [
            `${re('Deel:')} 5 &lt; 7, dus neem ons die eerste twee syfers: <strong>50</strong>. 50 ÷ ${bl('7')} = ${gr('7')} res 1. Skryf ${gr('7')} in die kwosiënt.`,
            `${bl('Vermenigvuldig:')} ${gr('7')} × ${bl('7')} = ${bl('49')}. Skryf ${bl('49')} onder 50. ${gr('Trek af:')} 50 − ${bl('49')} = ${gr('1')}.`,
            `${or('Bring af:')} Bring <strong>4</strong> af → ons het nou <strong>${or('14')}</strong>. ${re('Deel:')} 14 ÷ ${bl('7')} = ${gr('2')}. Skryf ${gr('2')} in die kwosiënt.`,
            `${bl('Vermenigvuldig:')} ${gr('2')} × ${bl('7')} = ${bl('14')}. Skryf ${bl('14')} daaronder. ${gr('Trek af:')} 14 − ${bl('14')} = ${gr('0')}.`,
            `${or('Bring af:')} Bring <strong>3</strong> af → ons het nou <strong>${or('03')}</strong>. ${re('Deel:')} 03 ÷ ${bl('7')} = ${gr('0')} res ${or('3')}. Skryf ${gr('0')} in die kwosiënt. ${bl('Vermenigvuldig:')} ${gr('0')} × ${bl('7')} = ${bl('0')}. ${gr('Trek af:')} 03 − ${bl('0')} = ${or('3')}. Dit is die res.`,
            `<strong>Kwosiënt:</strong> ${gr('720')} &nbsp; <strong>Res:</strong> ${or('3')}`,
            `<strong>Kontroleer met die inverse:</strong> (${gr('kwosiënt')} × ${bl('deler')}) + ${or('res')} = ${re('deeltal')}<br>${gr('720')} × ${bl('7')} = 5 040 &nbsp;→&nbsp; 5 040 + ${or('3')} = ${re('5 043')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — single 4-digit ÷ 1-digit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 1 848 ÷ 4 met langdeling.',
          answer: '462',
          checkMode: 'auto',
          correctAnswer: '462',
          explanation: 'Stap 1: 1 < 4 — neem 18. 18 ÷ 4 = 4 res 2. Skryf 4.\nStap 2: 4 × 4 = 16. 18 − 16 = 2. Bring 4 af → 24.\nStap 3: 24 ÷ 4 = 6. Skryf 6.\nStap 4: 6 × 4 = 24. 24 − 24 = 0. Bring 8 af → 8.\nStap 5: 8 ÷ 4 = 2. Skryf 2.\nStap 6: 2 × 4 = 8. 8 − 8 = 0. Geen res.\nAntwoord: 1 848 ÷ 4 = 462 ✓',
        },

        // ── Q5 Medium — two 4-digit ÷ 1-digit calculations ───────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken elkeen van die volgende met langdeling.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 3 276 ÷ 6 =',
              correctAnswer: '546',
              explanation: 'Stap 1: 3 < 6 — neem 32. 32 ÷ 6 = 5 res 2. Skryf 5.\nStap 2: 5 × 6 = 30. 32 − 30 = 2. Bring 7 af → 27.\nStap 3: 27 ÷ 6 = 4 res 3. Skryf 4.\nStap 4: 4 × 6 = 24. 27 − 24 = 3. Bring 6 af → 36.\nStap 5: 36 ÷ 6 = 6. Skryf 6.\nStap 6: 6 × 6 = 36. 36 − 36 = 0.\nAntwoord: 546. Kontroleer: 546 × 6 = 3 276 ✓',
            },
            {
              label: 'b) 4 536 ÷ 9 =',
              correctAnswer: '504',
              explanation: 'Stap 1: 4 < 9 — neem 45. 45 ÷ 9 = 5. Skryf 5.\nStap 2: 5 × 9 = 45. 45 − 45 = 0. Bring 3 af → 03.\nStap 3: 03 ÷ 9 = 0 res 3. Skryf 0.\nStap 4: 0 × 9 = 0. 03 − 0 = 3. Bring 6 af → 36.\nStap 5: 36 ÷ 9 = 4. Skryf 4.\nStap 6: 4 × 9 = 36. 36 − 36 = 0.\nAntwoord: 504. Kontroleer: 504 × 9 = 4 536 ✓',
            },
          ],
        },

        // ── Q6 Hard — word problem with inverse check ────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Fabriek vervaardig 5 824 items in 8 uur.\n\na) Hoeveel items vervaardig dit per uur?\nb) Kontroleer jou antwoord deur die inverse bewerking te gebruik.\nc) As die fabriek 12 uur teen dieselfde tempo werk, hoeveel items sal dit vervaardig?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Items per uur',
              correctAnswer: '728',
              explanation: 'Stap 1: 5 < 8 — neem 58. 58 ÷ 8 = 7 res 2. Skryf 7.\nStap 2: 7 × 8 = 56. 58 − 56 = 2. Bring 2 af → 22.\nStap 3: 22 ÷ 8 = 2 res 6. Skryf 2.\nStap 4: 2 × 8 = 16. 22 − 16 = 6. Bring 4 af → 64.\nStap 5: 64 ÷ 8 = 8. Skryf 8.\nStap 6: 8 × 8 = 64. 64 − 64 = 0.\nAntwoord: 5 824 ÷ 8 = 728 items per uur ✓',
            },
            {
              label: 'b) Inverse kontrole',
              correctAnswer: '728x8=5824',
              correctAnswers: ['728x8=5824', '5824'],
              explanation: 'Inverse kontrole: kwosiënt × deler = deeltal\n728 × 8 = 5 824 ✓\nDit bevestig dat 728 items per uur korrek is.',
            },
            {
              label: 'c) Items in 12 uur',
              correctAnswer: '8736',
              correctAnswers: ['8736', '728x12=8736'],
              explanation: 'Tempo × tyd = totale items\n728 × 12 = 8 736\n(728 × 10 = 7 280) + (728 × 2 = 1 456) = 8 736 items ✓',
            },
          ],
        },
      ],

      diagramPlaceholder: 'Langdeling-uitleg wat 2 436 gedeel deur 4 wys met elke stap kleur-gekodeer — deel rooi, vermenigvuldig blou, trek af groen, bring af oranje',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="71" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">6</text><text x="97" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">0</text><text x="123" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">9</text><line x1="32" y1="20" x2="140" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="32" y1="20" x2="32" y2="100" stroke="#0f1f3d" stroke-width="2"/><text x="18" y="40" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="45" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">2</text><text x="71" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">4</text><text x="97" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">3</text><text x="123" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="38" y="50" font-weight="700" font-size="13" fill="#2563eb">− 24</text><line x1="38" y1="55" x2="84" y2="55" stroke="#0f1f3d" stroke-width="1.5"/><text x="71" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="97" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">3</text><text x="84" y="82" font-weight="700" font-size="13" fill="#2563eb">− 0</text><line x1="84" y1="87" x2="110" y2="87" stroke="#0f1f3d" stroke-width="1.5"/><text x="97" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">3</text><text x="123" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">6</text><text x="84" y="114" font-weight="700" font-size="13" fill="#2563eb">− 36</text><line x1="84" y1="119" x2="136" y2="119" stroke="#0f1f3d" stroke-width="1.5"/><text x="123" y="132" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="110" y="155" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">2 436 ÷ 4 = 609</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap-vir-stap langdeling van ʼn 4-syfergetal deur ʼn 1-syfergetal met kleur-gekodeerde stappe wys" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DIVIDING A 3-DIGIT NUMBER BY A 2-DIGIT NUMBER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division-3-digit-2-digit',
      title: 'Deel ʼn 3-Syfergetal deur ʼn 2-Syfergetal',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer die deler <strong>twee syfers</strong> het, kan jy nie die antwoord direk in ʼn vermenigvuldigingstafel opsoek nie. In plaas daarvan gebruik jy <strong>skatting</strong> om elke kwosiëntsyfer te vind. Die langdelingstappe is presies dieselfde — die enigste verskil is dat jy nou eers die kwosiëntsyfer <em>skat</em>, en dan kontroleer en aanpas indien nodig.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermenigvuldig')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('trek af')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bring af')}</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('geskatte syfer')}</span>` +
        `</div>` +

        // ── Estimation strategy ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skattingstrategie</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#7c3aed;">Rond af</strong> — Rond die 2-syfer deler af na die naaste 10. Dit gee jou ʼn eenvoudiger getal om mee te werk.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#7c3aed;">Skat</strong> — Deel die gedeeltelike deeltal deur die afgeronde deler. Dit gee jou jou ${pu('geskatte syfer')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Probeer')} — ${bl('Vermenigvuldig')} jou ${pu('geskatte syfer')} met die <em>werklike</em> deler. Skryf die produk onder die gedeeltelike deeltal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Kontroleer en pas aan')} — ${gr('Trek af')} en kontroleer die resultaat. Pas jou skatting op of af aan indien nodig (sien reëls hieronder).</p>` +
        `</div>` +

        `</div>` +

        // ── Adjustment rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Pas jou skatting aan</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Produk is te groot → verminder met 1</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">As ${pu('geskatte syfer')} × deler <strong>&gt;</strong> gedeeltelike deeltal, is jou skatting te hoog.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Verlaag die ${pu('syfer')} met 1 en vermenigvuldig weer.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Res ≥ deler → verhoog met 1</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">As die res na aftrekking <strong>≥</strong> die deler is, is jou skatting te laag.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Verhoog die ${pu('syfer')} met 1 en probeer weer.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Probeer en aanpassing is normaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">Dit is heeltemal aanvaarbaar om ʼn syfer te probeer, te vind dit werk nie, en aan te pas. ${bl('Vermenigvuldig')} altyd terug om te kontroleer. Wanneer daar geen res oorbly nie, of die res kleiner as die deler is, is jou ${pu('skatting')} korrek.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: 756 ÷ 12 = 63 ────────────────────────────────────────
        {
          question: 'Bereken 756 ÷ 12.',
          answer: `${re('756')} ÷ ${bl('12')} = ${pu('63')}`,
          steps: [
            `${re('Deel:')} 7 &lt; 12, dus neem ons die eerste twee syfers: <strong>75</strong>. Hoeveel keer pas ${bl('12')} in 75?`,
            `${pu('Skat:')} Rond ${bl('12')} af na 10. 75 ÷ 10 = 7,5. Probeer ${pu('6')} (gaan effens laer aangesien 12 &gt; 10). ${bl('Vermenigvuldig:')} ${pu('6')} × ${bl('12')} = ${bl('72')}. Kontroleer: ${bl('72')} ≤ 75 ✓. Skryf ${pu('6')} in die kwosiënt.`,
            `${gr('Trek af:')} 75 − ${bl('72')} = ${gr('3')}.`,
            `${or('Bring af:')} Bring <strong>6</strong> af → ons het nou <strong>${or('36')}</strong>.`,
            `${re('Deel:')} 36 ÷ ${bl('12')} = ${pu('3')} presies (dink: 3 × 12 = 36). Skryf ${pu('3')} in die kwosiënt. ${bl('Vermenigvuldig:')} ${pu('3')} × ${bl('12')} = ${bl('36')}. ${gr('Trek af:')} 36 − ${bl('36')} = ${gr('0')}. Geen res.`,
            `<strong>Antwoord:</strong> ${re('756')} ÷ ${bl('12')} = ${pu('63')} ✓`,
          ],
        },

        // ── Example 8: 924 ÷ 11 = 84 ────────────────────────────────────────
        {
          question: 'Bereken 924 ÷ 11.',
          answer: `${re('924')} ÷ ${bl('11')} = ${pu('84')}`,
          steps: [
            `${re('Deel:')} 9 &lt; 11, dus neem ons die eerste twee syfers: <strong>92</strong>. Hoeveel keer pas ${bl('11')} in 92?`,
            `${pu('Skat:')} Rond ${bl('11')} af na 10. 92 ÷ 10 ≈ 9. Probeer ${pu('8')} (effens laer aangesien 11 &gt; 10). ${bl('Vermenigvuldig:')} ${pu('8')} × ${bl('11')} = ${bl('88')}. Kontroleer: ${bl('88')} ≤ 92 ✓. Skryf ${pu('8')} in die kwosiënt.`,
            `${gr('Trek af:')} 92 − ${bl('88')} = ${gr('4')}. Kontroleer: 4 &lt; 11 ✓ — die res is kleiner as die deler, dus is die skatting korrek.`,
            `${or('Bring af:')} Bring <strong>4</strong> af → ons het nou <strong>${or('44')}</strong>.`,
            `${re('Deel:')} 44 ÷ ${bl('11')} = ${pu('4')} presies (dink: 4 × 11 = 44). Skryf ${pu('4')} in die kwosiënt. ${bl('Vermenigvuldig:')} ${pu('4')} × ${bl('11')} = ${bl('44')}. ${gr('Trek af:')} 44 − ${bl('44')} = ${gr('0')}. Geen res.`,
            `<strong>Antwoord:</strong> ${re('924')} ÷ ${bl('11')} = ${pu('84')} ✓`,
          ],
        },

        // ── Example 9: 845 ÷ 13 = 65 ────────────────────────────────────────
        {
          question: 'Bereken 845 ÷ 13.',
          answer: `${re('845')} ÷ ${bl('13')} = ${pu('65')}`,
          steps: [
            `${re('Deel:')} 8 &lt; 13, dus neem ons die eerste twee syfers: <strong>84</strong>. Hoeveel keer pas ${bl('13')} in 84?`,
            `${pu('Skat:')} Rond ${bl('13')} af na 10. 84 ÷ 10 ≈ 8. Probeer ${pu('6')} (pas af aan — 13 is aansienlik groter as 10). ${bl('Vermenigvuldig:')} ${pu('6')} × ${bl('13')} = ${bl('78')}. Kontroleer: ${bl('78')} ≤ 84 ✓. Kontroleer ook: 7 × 13 = 91 &gt; 84 — dus is ${pu('6')} die korrekte syfer. Skryf ${pu('6')} in die kwosiënt.`,
            `${gr('Trek af:')} 84 − ${bl('78')} = ${gr('6')}. Kontroleer: 6 &lt; 13 ✓ — die res is kleiner as die deler, dus is die skatting korrek.`,
            `${or('Bring af:')} Bring <strong>5</strong> af → ons het nou <strong>${or('65')}</strong>.`,
            `${re('Deel:')} 65 ÷ ${bl('13')} = ${pu('5')} presies (dink: 5 × 13 = 65). Skryf ${pu('5')} in die kwosiënt. ${bl('Vermenigvuldig:')} ${pu('5')} × ${bl('13')} = ${bl('65')}. ${gr('Trek af:')} 65 − ${bl('65')} = ${gr('0')}. Geen res.`,
            `<strong>Antwoord:</strong> ${re('845')} ÷ ${bl('13')} = ${pu('65')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — single 3-digit ÷ 2-digit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken met langdeling en wys elke stap:\n624 ÷ 12',
          answer: '52',
          checkMode: 'auto',
          correctAnswer: '52',
          explanation: 'Stap 1: 6 < 12 — neem 62. Skat: 62 ÷ 10 ≈ 6. Probeer 5: 5 × 12 = 60 ≤ 62 ✓.\nStap 2: 62 − 60 = 2. Bring 4 af → 24.\nStap 3: 24 ÷ 12 = 2 presies (2 × 12 = 24). 24 − 24 = 0. Geen res.\nAntwoord: 624 ÷ 12 = 52 ✓',
        },

        // ── Q8 Medium — two 3-digit ÷ 2-digit calculations ──────────────────
        {
          difficulty: 'Medium',
          question: 'Bereken met langdeling en wys elke stap.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 858 ÷ 11 =',
              correctAnswer: '78',
              explanation: 'Stap 1: 8 < 11 — neem 85. Skat: 85 ÷ 10 ≈ 8. Probeer 7: 7 × 11 = 77 ≤ 85 ✓.\nStap 2: 85 − 77 = 8. Bring 8 af → 88.\nStap 3: 88 ÷ 11 = 8 presies (8 × 11 = 88). 88 − 88 = 0. Geen res.\nAntwoord: 858 ÷ 11 = 78 ✓',
            },
            {
              label: 'b) 884 ÷ 13 =',
              correctAnswer: '68',
              explanation: 'Stap 1: 8 < 13 — neem 88. Skat: 88 ÷ 10 ≈ 8. Probeer 6: 6 × 13 = 78 ≤ 88 ✓. Kontroleer: 7 × 13 = 91 > 88 — dus is 6 korrek.\nStap 2: 88 − 78 = 10. Bring 4 af → 104.\nStap 3: 104 ÷ 13 = 8 presies (8 × 13 = 104). 104 − 104 = 0. Geen res.\nAntwoord: 884 ÷ 13 = 68 ✓',
            },
          ],
        },

        // ── Q9 Hard — word problem with inverse and reasoning ────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Skool het 936 leerders om gelyk in klasse van 12 te verdeel.\n\na) Hoeveel klasse is daar?\nb) Kontroleer jou antwoord deur die inverse bewerking te gebruik.\nc) As 3 meer leerders by die skool aansluit, kan hulle by bestaande klasse gevoeg word sonder om ʼn nuwe klas te skep?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Aantal klasse',
              correctAnswer: '78',
              explanation: 'Stap 1: 9 < 12 — neem 93. Skat: 93 ÷ 10 ≈ 9. Probeer 7: 7 × 12 = 84 ≤ 93 ✓. Kontroleer: 8 × 12 = 96 > 93 — dus is 7 korrek.\nStap 2: 93 − 84 = 9. Bring 6 af → 96.\nStap 3: 96 ÷ 12 = 8 presies (8 × 12 = 96). 96 − 96 = 0. Geen res.\nAntwoord: 936 ÷ 12 = 78 klasse ✓',
            },
            {
              label: 'b) Inverse kontrole (kwosiënt × deler)',
              correctAnswer: '936',
              correctAnswers: ['936', '78x12=936', '78×12=936', '78 x 12 = 936', '78 × 12 = 936'],
              explanation: 'Inverse kontrole: kwosiënt × deler = deeltal\n78 × 12 = 936 ✓\nDit bevestig dat 78 klasse korrek is.',
            },
            {
              label: 'c) Kan 3 meer leerders bysluit sonder ʼn nuwe klas?',
              correctAnswer: 'Ja',
              checkMode: 'self',
              answer: 'Ja — daar is 78 klasse en slegs 3 ekstra leerders, dus kan elk van 3 klasse 1 ekstra leerder opneem. Geen nuwe klas is nodig nie.',
            },
          ],
        },
      ],

      diagramPlaceholder: 'Langdeling-uitleg wat 756 gedeel deur 12 wys met skatting getoon vir elke stap en kleur-gekodeerde werk',
      diagramSvg: '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><text x="85" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#7c3aed">6</text><text x="115" y="14" font-weight="700" font-size="16" text-anchor="middle" fill="#7c3aed">3</text><line x1="40" y1="20" x2="150" y2="20" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="95" stroke="#0f1f3d" stroke-width="2"/><text x="18" y="40" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">12</text><text x="55" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">7</text><text x="85" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">5</text><text x="115" y="36" font-weight="700" font-size="16" text-anchor="middle" fill="#0f1f3d">6</text><text x="45" y="50" font-weight="700" font-size="13" fill="#2563eb">− 72</text><line x1="45" y1="55" x2="100" y2="55" stroke="#0f1f3d" stroke-width="1.5"/><text x="85" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">3</text><text x="115" y="68" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">6</text><text x="78" y="82" font-weight="700" font-size="13" fill="#2563eb">− 36</text><line x1="78" y1="87" x2="130" y2="87" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="100" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">0</text><text x="95" y="122" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">756 ÷ 12 = 63</text><text x="95" y="142" font-size="10" text-anchor="middle" fill="#6b7280">Skat: rond 12 af na 10, probeer dan en pas aan</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn 3-syfergetal deur ʼn 2-syfergetal te deel met skatting en langdeling" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — REMAINDERS AND WHAT THEY MEAN IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'remainders-in-context',
      title: 'Reste en Wat Hulle in Konteks Beteken',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer jy deel en daar is ʼn ${or('res')}, moet jy besluit wat om daarmee te doen. Die regte keuse hang af van wat die vraag vra — dit staan bekend as die lees van die <span style="color:#dc2626;font-weight:700">konteks</span>. Daar is drie maniere om ʼn ${or('res')} te hanteer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kwosiënt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('res')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('konteksbesluit')}</span>` +
        `</div>` +

        // ── Three types ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie soorte res-situasies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">1. ${re('Rond af')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Gebruik die ${gr('kwosiënt')} as jou antwoord en ignoreer die ${or('res')}.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>Wanneer:</strong> jy nie ʼn gebroke of gedeeltelike item kan gebruik nie.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: Hoeveel <strong>volle bokse</strong> kan jy vul?</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">2. ${re('Rond op')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Tel <strong>1</strong> by die ${gr('kwosiënt')} omdat die ${or('res')} steeds ingesluit moet word.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>Wanneer:</strong> alles moet inpas, selfs die oorblywende hoeveelheid.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: Hoeveel <strong>busse word benodig</strong>?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;margin-bottom:6px;font-size:1em;">3. ${re('Skryf as ʼn breuk')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Skryf die ${or('res')} as ʼn breuk van die deler.</p>` +
        `<p style="color:#374151;font-size:13px;margin-bottom:4px;"><strong>Wanneer:</strong> jy deel en elke persoon kry deel van wat oorbly.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: Hoeveel kry <strong>elke persoon</strong>?</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Kontroleer altyd die konteks</p>` +
        `<p style="margin:0;color:#991b1b;">Lees die vraag noukeurig weer voordat jy jou finale antwoord skryf. Die ${re('konteks')} vertel jou of jy moet ${re('afrond')}, ${re('oprond')}, of die ${re('res as ʼn breuk skryf')}.` +
        ` Die ${or('res')} self verander nie — net wat jy daarmee doen, verander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: '456 leerders moet in rye van 14 gesit word. Hoeveel volle rye is daar en hoeveel leerders bly oor?',
          answer: `${gr('32')} volle rye met ${or('8')} leerders wat oorbly — ${re('rond af')} aangesien ons nie ʼn gedeeltelike ry kan hê nie`,
          steps: [
            `Deel: ${re('456')} ÷ ${bl('14')} = ${gr('32')} res ${or('8')}`,
            `${re('Konteksbesluit:')} Die vraag vra vir <strong>volle rye</strong>. Jy kan nie ${or('8')} mense in ʼn ry ontwerp vir 14 sit nie, dus bly die ${or('res')} eenvoudig oor. ${re('Rond af')} — die antwoord is ${gr('32')} volle rye.`,
          ],
        },
        {
          question: '348 leerders moet per bus reis. Elke bus hou 45 leerders. Hoeveel busse word benodig?',
          answer: `${gr('8')} busse word benodig — ${re('rond op')} sodat almal ʼn sitplek het`,
          steps: [
            `Deel: ${re('348')} ÷ ${bl('45')} = ${gr('7')} res ${or('33')}`,
            `${re('Konteksbesluit:')} 7 busse vervoer 7 × 45 = 315 leerders, maar ${or('33')} leerders het steeds vervoer nodig. Ons het nog een bus nodig. ${re('Rond op')} — die antwoord is ${gr('8')} busse.`,
          ],
        },
        {
          question: 'R875 word gelyk verdeel tussen 4 vriende. Hoeveel kry elke vriend?',
          answer: `Elke vriend kry R${gr('218')}.${or('75')}`,
          steps: [
            `Deel: ${re('875')} ÷ ${bl('4')} = ${gr('218')} res ${or('3')}`,
            `${re('Konteksbesluit:')} Geld kan in kleiner dele verdeel word (sent). Skryf die ${or('res')} as ʼn breuk: ${or('3')} ÷ ${bl('4')} = ${or('0,75')}. Elke vriend kry dus R${gr('218')} + R${or('0,75')} = <strong>R218,75</strong>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — remainder calculation ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Bereken 275 ÷ 8 en skryf die res.',
          answer: '34 res 3',
          checkMode: 'auto',
          correctAnswer: '34 remainder 3',
          correctAnswers: ['34 remainder 3', '34 res 3', '34 r 3', '34r3', '34 rem 3'],
          explanation: 'Stap 1: 2 < 8 — neem 27. 27 ÷ 8 = 3 (3 × 8 = 24). 27 − 24 = 3. Bring 5 af → 35.\nStap 2: 35 ÷ 8 = 4 (4 × 8 = 32). 35 − 32 = 3. Dit is die res.\nAntwoord: 275 ÷ 8 = 34 res 3 ✓',
        },

        // ── Q11 Medium — transport word problem with remainder ───────────────
        {
          difficulty: 'Medium',
          question: '247 leerders moet per minibus reis. Elke minibus hou 15 leerders.\n\na) Hoeveel volle minibusse word benodig?\nb) Hoeveel leerders bly oor?\nc) Hoeveel minibusse in totaal word benodig sodat almal ʼn sitplek het?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Volle minibusse',
              correctAnswer: '16',
              explanation: 'Stap 1: 2 < 15 — neem 24. 24 ÷ 15 = 1 (1 × 15 = 15). 24 − 15 = 9. Bring 7 af → 97.\nStap 2: 97 ÷ 15 = 6 (6 × 15 = 90). 97 − 90 = 7. Res is 7.\nAntwoord: 16 volle minibusse (vervoer 16 × 15 = 240 leerders).',
            },
            {
              label: 'b) Leerders wat oorbly',
              correctAnswer: '7',
              explanation: 'Die res van 247 ÷ 15 = 16 res 7.\n7 leerders bly oor nadat 16 minibusse gevul is.',
            },
            {
              label: 'c) Totale aantal minibusse benodig',
              correctAnswer: '17',
              explanation: 'Konteksbesluit: die 7 oorblywende leerders het steeds sitplekke nodig. Rond op — voeg nog 1 minibus by.\nTotaal: 16 + 1 = 17 minibusse sodat al 247 leerders ʼn sitplek het.',
            },
          ],
        },

        // ── Q12 Hard — sharing money with remainder as fraction ──────────────
        {
          difficulty: 'Hard',
          question: 'R1 250 word gelyk verdeel tussen 6 vriende.\n\na) Hoeveel kry elke vriend as ʼn heelgetal met res?\nb) Skryf die res as ʼn breuk.\nc) Hoeveel kry elke vriend in rand en sent?\nd) Hoeveel geld bly oor as jy net heelrand-bedrae gee?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Heelgetal met res',
              correctAnswer: '208 remainder 2',
              correctAnswers: ['208 remainder 2', '208 res 2', '208 r 2', '208r2', '208 rem 2'],
              explanation: 'Stap 1: 1 < 6 — neem 12. 12 ÷ 6 = 2. 12 − 12 = 0. Bring 5 af → 05.\nStap 2: 05 ÷ 6 = 0 (0 × 6 = 0). 05 − 0 = 5. Bring 0 af → 50.\nStap 3: 50 ÷ 6 = 8 (8 × 6 = 48). 50 − 48 = 2. Res is 2.\nAntwoord: 1 250 ÷ 6 = 208 res 2 ✓',
            },
            {
              label: 'b) Res as ʼn breuk',
              correctAnswer: '1/3',
              correctAnswers: ['1/3', '2/6'],
              explanation: 'Res is 2 uit 6 gelyke dele.\nAs ʼn breuk: 2/6 = 1/3.\nElke vriend kry ʼn ekstra 1/3 van ʼn rand bo-op R208.',
            },
            {
              label: 'c) Bedrag in rand en sent',
              correctAnswer: 'R208,33',
              correctAnswers: ['R208.33', '208.33', 'R208,33', '208,33'],
              explanation: 'Res-breuk: 2 ÷ 6 = 0,333... ≈ 0,33 (na die naaste sent).\nElke vriend kry R208 + R0,33 = R208,33.',
            },
            {
              label: 'd) Geld wat oorbly (slegs heelrand)',
              correctAnswer: 'R2',
              correctAnswers: ['R2', '2', 'R 2'],
              explanation: 'As jy elke vriend presies R208 gee: 6 × 208 = R1 248.\nGeld wat oorbly: R1 250 − R1 248 = R2.',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — DIVISION WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-word-problems',
      title: 'Deling Woordprobleme',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Delingwoordprobleme kom in die alledaagse lewe voor. Voordat jy bereken, identifiseer of die probleem <strong>deling</strong> (ʼn totaal in gelyke groepe verdeel) of <strong>groepering</strong> (vind hoeveel groepe van ʼn gegewe grootte in ʼn totaal pas) is. Kyk vir ${or('sleutelwoorde')} wat jou vertel watter tipe dit is.</p>` +

        // ── Key words ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelwoorde om na te kyk</p>` +
        `<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        [
          'gelyk gedeel', 'deel', 'verdeel', 'elk', 'per',
          'hoeveel groepe', 'hoeveel elk', 'versprei',
        ].map(w => `<span style="background:#fed7aa;border-radius:6px;padding:3px 10px;font-size:14px;font-weight:700;color:#ea580c;">${w}</span>`).join('<span style="color:#9ca3af;font-size:1.1em;">·</span>') +
        `</div>` +

        // ── Sharing vs Grouping ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Deling teenoor Groepering</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Delingsverdeling</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy ken die totaal en die aantal groepe. Jy vind <strong>hoeveel in elke groep gaan</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: R4 752 ${or('gelyk gedeel')} tussen 8 werkers — hoeveel ${or('elk')}?</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Groeperingsverdeling</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy ken die totaal en die grootte van elke groep. Jy vind <strong>hoeveel groepe</strong> daar is.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: 3 648 lemoene verpak in bokse van 12 — ${or('hoeveel groepe')}?</p>` +
        `</div>` +

        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">3-stap strategie vir woordprobleme</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Vind die ${or('sleutelwoord')} en besluit: deling of groepering.<br><strong>Stap 2</strong> — Skryf die delings-getalsin.<br><strong>Stap 3</strong> — Bereken en skryf jou antwoord in ʼn volledige sin.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Boer oes 3 648 lemoene en verpak dit in bokse van 12. Hoeveel bokse vul hy?',
          answer: `Die boer vul ${gr('304')} bokse`,
          steps: [
            `${or('Sleutelwoord:')} <em>"verpak in bokse van"</em> — dit is ʼn <strong>groeperingsverdeling</strong>. Ons weet elke groep hou 12 en wil weet hoeveel groepe daar is.`,
            `Skryf die getalsin: ${re('3 648')} ÷ ${bl('12')} = ?`,
            `Bereken: ${re('3 648')} ÷ ${bl('12')} = ${gr('304')}`,
            `<strong>Antwoord:</strong> Die boer vul ${gr('304')} bokse.`,
          ],
        },
        {
          question: 'R4 752 word gelyk verdeel tussen 8 werkers. Hoeveel ontvang elke werker?',
          answer: `Elke werker ontvang R${gr('594')}`,
          steps: [
            `${or('Sleutelwoord:')} <em>"gelyk verdeel"</em> — dit is ʼn <strong>delingsverdeling</strong>. Ons ken die totaal (R4 752) en die aantal groepe (8 werkers) en wil weet hoeveel elkeen kry.`,
            `Skryf die getalsin: ${re('4 752')} ÷ ${bl('8')} = ?`,
            `Bereken: ${re('4 752')} ÷ ${bl('8')} = ${gr('594')}`,
            `<strong>Antwoord:</strong> Elke werker ontvang R${gr('594')}.`,
          ],
        },
        {
          question: 'ʼn Skool het 2 184 oefenboeke om gelyk tussen 24 klaskamers te versprei. Hoeveel boeke kry elke klaskamer en hoeveel bly oor?',
          answer: `Elke klaskamer kry ${gr('91')} boeke met niks oor nie`,
          steps: [
            `${or('Sleutelwoord:')} <em>"gelyk versprei"</em> — dit is ʼn <strong>delingsverdeling</strong>. Ons wil weet hoeveel boeke elke klaskamer kry.`,
            `Skryf die getalsin: ${re('2 184')} ÷ ${bl('24')} = ?`,
            `Bereken: ${re('2 184')} ÷ ${bl('24')} = ${gr('91')}`,
            `<strong>Kontroleer:</strong> ${gr('91')} × ${bl('24')} = 2 184 ✓ — geen res nie.`,
            `<strong>Antwoord:</strong> Elke klaskamer kry ${gr('91')} boeke met niks oor nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy — grouping word problem ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Boer oes 2 184 appels en verpak dit in sakkies van 8. Hoeveel volle sakkies vul hy?',
          answer: '273',
          checkMode: 'auto',
          correctAnswer: '273',
          explanation: 'Sleutelwoord: "verpak in sakkies van" — groeperingsverdeling.\n2 184 ÷ 8:\nStap 1: 2 < 8 — neem 21. 21 ÷ 8 = 2 (2 × 8 = 16). 21 − 16 = 5. Bring 8 af → 58.\nStap 2: 58 ÷ 8 = 7 (7 × 8 = 56). 58 − 56 = 2. Bring 4 af → 24.\nStap 3: 24 ÷ 8 = 3 (3 × 8 = 24). 24 − 24 = 0. Geen res.\nAntwoord: 273 volle sakkies. Kontroleer: 273 × 8 = 2 184 ✓',
        },

        // ── Q14 Medium — sharing with changed conditions ──────────────────────
        {
          difficulty: 'Medium',
          question: 'R3 456 word gelyk verdeel tussen 12 werkers.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel ontvang elke werker?',
              correctAnswer: 'R288',
              correctAnswers: ['R288', '288'],
              explanation: '3 456 ÷ 12:\nStap 1: 3 < 12 — neem 34. 34 ÷ 12 = 2 (2 × 12 = 24). 34 − 24 = 10. Bring 5 af → 105.\nStap 2: 105 ÷ 12 = 8 (8 × 12 = 96). 105 − 96 = 9. Bring 6 af → 96.\nStap 3: 96 ÷ 12 = 8 (8 × 12 = 96). 96 − 96 = 0. Geen res.\nAntwoord: R288 per werker. Kontroleer: 288 × 12 = 3 456 ✓',
            },
            {
              label: 'b) As 2 werkers afwesig is en die geld tussen die oorblywende werkers verdeel word, hoeveel ontvang elke werker?',
              correctAnswer: 'R345,60',
              correctAnswers: ['R345.60', '345.60', 'R345,60', '345,60', 'R345.6', '345.6'],
              explanation: 'Oorblywende werkers: 12 − 2 = 10.\n3 456 ÷ 10 = 345,6 → R345,60 (deling deur 10 skuif die desimale punt een plek).\nAntwoord: R345,60 per werker ✓',
            },
            {
              label: 'c) Hoeveel meer kry elke werker in scenario b in vergelyking met scenario a?',
              correctAnswer: 'R57,60',
              correctAnswers: ['R57.60', '57.60', 'R57,60', '57,60', 'R57.6', '57.6'],
              explanation: 'Verskil: R345,60 − R288,00 = R57,60.\nElke werker ontvang R57,60 meer in scenario b ✓',
            },
          ],
        },

        // ── Q15 Hard — multi-step stationery problem ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Skool bestel 2 496 oefenboeke om gelyk tussen sy 24 klaskamers te versprei.\n\na) Hoeveel boeke kry elke klaskamer?\nb) Die skool het ook 384 penne om gelyk tussen 16 klaskamers te versprei. Hoeveel penne per klaskamer?\nc) Wat is die totale aantal skryfbehoeftes (boeke en penne) wat elke klaskamer ontvang as alle klaskamers albei kry?\nd) As boeke R8 elk kos en penne R3 elk kos, wat is die totale koste van skryfbehoeftes vir een klaskamer?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Boeke per klaskamer',
              correctAnswer: '104',
              explanation: '2 496 ÷ 24:\nStap 1: 2 < 24 — neem 24. 24 ÷ 24 = 1 (1 × 24 = 24). 24 − 24 = 0. Bring 9 af → 09.\nStap 2: 9 ÷ 24 = 0 (0 × 24 = 0). 9 − 0 = 9. Bring 6 af → 96.\nStap 3: 96 ÷ 24 = 4 (4 × 24 = 96). 96 − 96 = 0. Geen res.\nAntwoord: 104 boeke per klaskamer. Kontroleer: 104 × 24 = 2 496 ✓',
            },
            {
              label: 'b) Penne per klaskamer',
              correctAnswer: '24',
              explanation: '384 ÷ 16:\nStap 1: 3 < 16 — neem 38. 38 ÷ 16 = 2 (2 × 16 = 32). 38 − 32 = 6. Bring 4 af → 64.\nStap 2: 64 ÷ 16 = 4 (4 × 16 = 64). 64 − 64 = 0. Geen res.\nAntwoord: 24 penne per klaskamer. Kontroleer: 24 × 16 = 384 ✓',
            },
            {
              label: 'c) Totale skryfbehoeftes per klaskamer',
              correctAnswer: '128',
              explanation: 'Totale items: 104 boeke + 24 penne = 128 items per klaskamer ✓',
            },
            {
              label: 'd) Totale koste vir een klaskamer',
              checkMode: 'self',
              answer: 'Boeke: 104 × R8 = R832\nPenne: 24 × R3 = R72\nTotaal: R832 + R72 = R904 per klaskamer',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om reste in konteks te interpreteer en delingwoordprobleme op te los deur deling- en groeperingsituasies te identifiseer" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-2 Feitefamilies | 3-6 Langdeling 4-syfer÷1-syfer |
    // 7-10 Langdeling 3-syfer÷2-syfer (skatting) | 11-14 Reste in konteks |
    // 15-17 Woordprobleme: deling teenoor groepering | 18-19 Multi-stap gemengd
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 7 × 8 = 56 om twee delingsfeite te skryf.', answer: '56 ÷ 8 = 7\n56 ÷ 7 = 8', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 132 ÷ 11 met jou vermenigvuldigingstafels.', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Dink: watter getal × 11 = 132? 11 × 12 = 132, dus 132 ÷ 11 = 12.' },
        { difficulty: 'Easy', question: 'Die kwosiënt van ʼn deling is 9 en die deler is 12. Wat is die deeltal? Skryf die vermenigvuldigingsfeit wat jy gebruik het.', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '9x12=108', '9×12=108', '12x9=108'], explanation: 'Deeltal = kwosiënt × deler = 9 × 12 = 108. Kontroleer: 108 ÷ 12 = 9 ✓' },
        { difficulty: 'Easy', question: 'Bereken 2 952 ÷ 4 met langdeling.', answer: '738', checkMode: 'auto', correctAnswer: '738', correctAnswers: ['738'], explanation: 'Stap 1: 2 < 4 — neem 29. 29 ÷ 4 = 7 res 1. Skryf 7.\nStap 2: 7 × 4 = 28. 29 − 28 = 1. Bring 5 af → 15.\nStap 3: 15 ÷ 4 = 3 res 3. Skryf 3.\nStap 4: 3 × 4 = 12. 15 − 12 = 3. Bring 2 af → 32.\nStap 5: 32 ÷ 4 = 8. Skryf 8.\nStap 6: 8 × 4 = 32. 32 − 32 = 0. Geen res.\nAntwoord: 2 952 ÷ 4 = 738 ✓' },
        { difficulty: 'Easy', question: 'Bereken elkeen van die volgende met langdeling en wys die nul-plekhouer waar nodig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 4 005 ÷ 5 =', correctAnswer: '801', explanation: 'Stap 1: 4 < 5 — neem 40. 40 ÷ 5 = 8. Skryf 8.\nStap 2: 8 × 5 = 40. 40 − 40 = 0. Bring 0 af → 00.\nStap 3: 00 ÷ 5 = 0. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 5 = 0. 00 − 0 = 0. Bring 5 af → 05.\nStap 5: 05 ÷ 5 = 1. Skryf 1.\nStap 6: 1 × 5 = 5. 05 − 5 = 0. Geen res.\nAntwoord: 4 005 ÷ 5 = 801 ✓' },
          { label: 'b) 6 318 ÷ 9 =', correctAnswer: '702', explanation: 'Stap 1: 6 < 9 — neem 63. 63 ÷ 9 = 7. Skryf 7.\nStap 2: 7 × 9 = 63. 63 − 63 = 0. Bring 1 af → 01.\nStap 3: 01 ÷ 9 = 0 res 1. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 9 = 0. 01 − 0 = 1. Bring 8 af → 18.\nStap 5: 18 ÷ 9 = 2. Skryf 2.\nStap 6: 2 × 9 = 18. 18 − 18 = 0. Geen res.\nAntwoord: 6 318 ÷ 9 = 702 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Bereken 4 832 ÷ 7 met langdeling en kontroleer dan jou antwoord deur die inverse bewerking te gebruik.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt en res', correctAnswer: '690 remainder 2', correctAnswers: ['690 remainder 2', '690 res 2', '690 r 2', '690r2', '690 rem 2'], explanation: 'Stap 1: 4 < 7 — neem 48. 48 ÷ 7 = 6 res 6. Skryf 6.\nStap 2: 6 × 7 = 42. 48 − 42 = 6. Bring 3 af → 63.\nStap 3: 63 ÷ 7 = 9. Skryf 9.\nStap 4: 9 × 7 = 63. 63 − 63 = 0. Bring 2 af → 02.\nStap 5: 02 ÷ 7 = 0 res 2. Skryf 0 (nul-plekhouer).\nAntwoord: 4 832 ÷ 7 = 690 res 2 ✓' },
          { label: 'b) Inverse kontrole', correctAnswer: '690x7+2=4832', correctAnswers: ['690x7+2=4832', '4832', '690×7+2=4832'], explanation: 'Inverse kontrole: (kwosiënt × deler) + res = deeltal\n690 × 7 = 4 830, en 4 830 + 2 = 4 832 ✓' },
        ] },
        { difficulty: 'Easy', question: 'ʼn Verpakkingsmaatskappy verdeel 4 816 blikkies gelyk tussen 8 afleweringsvragmotors. Hoeveel blikkies dra elke vragmotor?', answer: '602', checkMode: 'auto', correctAnswer: '602', correctAnswers: ['602'], explanation: '4 816 ÷ 8: Stap 1: 4 < 8 — neem 48. 48 ÷ 8 = 6. Skryf 6.\nStap 2: 6 × 8 = 48. 48 − 48 = 0. Bring 1 af → 01.\nStap 3: 01 ÷ 8 = 0 res 1. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 8 = 0. 01 − 0 = 1. Bring 6 af → 16.\nStap 5: 16 ÷ 8 = 2. Skryf 2.\nStap 6: 2 × 8 = 16. 16 − 16 = 0. Geen res.\nAntwoord: 4 816 ÷ 8 = 602 blikkies per vragmotor ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap:\n728 ÷ 13', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: 'Stap 1: 7 < 13 — neem 72. Skat: 72 ÷ 10 ≈ 7. Probeer 5: 5 × 13 = 65 ≤ 72 ✓. Kontroleer: 6 × 13 = 78 > 72 — dus is 5 korrek.\nStap 2: 72 − 65 = 7. Bring 8 af → 78.\nStap 3: 78 ÷ 13 = 6 presies (6 × 13 = 78). 78 − 78 = 0. Geen res.\nAntwoord: 728 ÷ 13 = 56 ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 702 ÷ 26 =', correctAnswer: '27', explanation: 'Stap 1: 7 < 26 — neem 70. Skat: 70 ÷ 30 ≈ 2. Probeer 2: 2 × 26 = 52 ≤ 70 ✓. Kontroleer: 3 × 26 = 78 > 70 — dus is 2 korrek.\nStap 2: 70 − 52 = 18. Bring 2 af → 182.\nStap 3: 182 ÷ 26 = 7 presies (7 × 26 = 182). 182 − 182 = 0. Geen res.\nAntwoord: 702 ÷ 26 = 27 ✓' },
          { label: 'b) 874 ÷ 34 =', correctAnswer: '25 remainder 24', correctAnswers: ['25 remainder 24', '25 res 24', '25 r 24', '25r24', '25 rem 24'], explanation: 'Stap 1: 8 < 34 — neem 87. Skat: 87 ÷ 30 ≈ 2. Probeer 2: 2 × 34 = 68 ≤ 87 ✓. Kontroleer: 3 × 34 = 102 > 87 — dus is 2 korrek.\nStap 2: 87 − 68 = 19. Bring 4 af → 194.\nStap 3: 194 ÷ 34 — skat 194 ÷ 30 ≈ 6. Probeer 5: 5 × 34 = 170 ≤ 194 ✓. Kontroleer: 6 × 34 = 204 > 194 — dus is 5 korrek.\nStap 4: 194 − 170 = 24. Aangesien 24 < 34, is dit die finale res.\nAntwoord: 874 ÷ 34 = 25 res 24 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder deel 936 ÷ 18 en skat die eerste kwosiëntsyfer as 6, en skryf "6 × 18 = 108, maar 108 > 93, so dit kan nie reg wees nie." Vind die korrekte eerste syfer, en voltooi dan die deling om 936 ÷ 18 te vind.', answer: '936 ÷ 18 = 52', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52'], explanation: 'Die leerder is korrek dat 6 te hoog is, aangesien ons slegs "93" as die eerste gedeeltelike deeltal neem (9 < 18, dus gebruik twee syfers 93), en 6 × 18 = 108 > 93. Probeer 5: 5 × 18 = 90 ≤ 93 ✓.\nStap 1: 93 − 90 = 3. Bring 6 af → 36.\nStap 2: 36 ÷ 18 = 2 presies (2 × 18 = 36). 36 − 36 = 0. Geen res.\nAntwoord: 936 ÷ 18 = 52 ✓' },
        { difficulty: 'Medium', question: 'Bereken 275 ÷ 13 en skryf die res.', answer: '21 remainder 2', checkMode: 'auto', correctAnswer: '21 remainder 2', correctAnswers: ['21 remainder 2', '21 res 2', '21 r 2', '21r2', '21 rem 2'], explanation: 'Stap 1: 2 < 13 — neem 27. Skat: 27 ÷ 10 ≈ 2. Probeer 2: 2 × 13 = 26 ≤ 27 ✓.\nStap 2: 27 − 26 = 1. Bring 5 af → 15.\nStap 3: 15 ÷ 13 = 1 res 2. Probeer 1: 1 × 13 = 13 ≤ 15 ✓.\nStap 4: 15 − 13 = 2. Aangesien 2 < 13, is dit die finale res.\nAntwoord: 275 ÷ 13 = 21 res 2 ✓' },
        { difficulty: 'Medium', question: '437 leerders moet met minibusse na ʼn skooluitstappie reis. Elke minibus hou 15 leerders.\n\na) Hoeveel volle minibusse word benodig?\nb) Hoeveel leerders bly oor?\nc) Hoeveel minibusse in totaal word benodig sodat almal ʼn sitplek het?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle minibusse', correctAnswer: '29', explanation: '437 ÷ 15: Stap 1: 4 < 15 — neem 43. Skat 43 ÷ 10 ≈ 4. Probeer 2: 2 × 15 = 30 ≤ 43 ✓. Kontroleer: 3 × 15 = 45 > 43 — dus is 2 korrek.\nStap 2: 43 − 30 = 13. Bring 7 af → 137.\nStap 3: 137 ÷ 15 — skat ≈ 13. Probeer 9: 9 × 15 = 135 ≤ 137 ✓. Res 2 < 15, korrek.\nAntwoord: 29 volle minibusse (vervoer 29 × 15 = 435 leerders).' },
          { label: 'b) Leerders wat oorbly', correctAnswer: '2', explanation: 'Die res van 437 ÷ 15 = 29 res 2.\n2 leerders bly oor nadat 29 minibusse gevul is.' },
          { label: 'c) Totale aantal minibusse benodig', correctAnswer: '30', explanation: 'Konteksbesluit: die 2 oorblywende leerders het steeds sitplekke nodig, dus rond op. Totaal: 29 + 1 = 30 minibusse sodat al 437 leerders ʼn sitplek het.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Boer pluk 250 appels en wil dit in kratte verpak wat elk 9 appels hou. Verduidelik in jou eie woorde waarom die aantal volle kratte nie eenvoudig 250 ÷ 9 afgerond na die naaste heelgetal is nie, en sê hoeveel volle kratte hy kan pak.', answer: '250 ÷ 9 = 27 res 7. Hy kan slegs 27 volle kratte pak, want die 7 oorblywende appels is nie genoeg om nog ʼn krat te vul nie. Afronding na die naaste heelgetal sou 28 gee (aangesien 27,78 opwaarts afrond), maar dit sou verkeerd wees — jy kan nie ʼn krat as vol tel as dit net 7 uit 9 appels het nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie het R950 ingesamel om gelyk tussen 8 vrywilligers verdeel te word.\n\na) Hoeveel kry elke vrywilliger as ʼn heelrand-bedrag, en wat is die res?\nb) Skryf die res as ʼn breuk van R8.\nc) Hoeveel ontvang elke vrywilliger in rand en sent?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelrand-bedrag met res', correctAnswer: '118 remainder 6', correctAnswers: ['118 remainder 6', '118 res 6', '118 r 6', '118r6', '118 rem 6'], explanation: '950 ÷ 8: Stap 1: 9 ÷ 8 = 1 res 1. Bring 5 af → 15. Stap 2: 15 ÷ 8 = 1 res 7. Bring 0 af → 70. Stap 3: 70 ÷ 8 = 8 res 6.\nAntwoord: 950 ÷ 8 = 118 res 6.' },
          { label: 'b) Res as ʼn breuk', correctAnswer: '6/8', correctAnswers: ['6/8', '3/4'], explanation: 'Res is 6 uit 8 gelyke dele: 6/8 = 3/4.' },
          { label: 'c) Bedrag in rand en sent', correctAnswer: 'R118,75', correctAnswers: ['R118,75', '118,75', 'R118.75', '118.75'], explanation: 'Res-breuk: 6 ÷ 8 = 0,75. Elke vrywilliger kry R118 + R0,75 = R118,75.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Saal het 365 stoele om in rye te rangskik.\n\nScenario A: rye van 14 stoele.\nScenario B: rye van 20 stoele.\n\na) Hoeveel volle rye en hoeveel oorblywende stoele in Scenario A?\nb) Hoeveel volle rye en hoeveel oorblywende stoele in Scenario B?\nc) Watter scenario vermors die minste stoele as oorskot?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rye van 14)', correctAnswer: '26 remainder 1', correctAnswers: ['26 remainder 1', '26 res 1', '26 r 1', '26r1', '26 rem 1'], explanation: '365 ÷ 14: Stap 1: 3 < 14 — neem 36. Skat 36 ÷ 10 ≈ 3. Probeer 2: 2 × 14 = 28 ≤ 36 ✓. Kontroleer 3 × 14 = 42 > 36 — dus is 2 korrek. Stap 2: 36 − 28 = 8. Bring 5 af → 85. Stap 3: 85 ÷ 14 — probeer 6: 6 × 14 = 84 ≤ 85 ✓. Res: 85 − 84 = 1.\nAntwoord: 365 ÷ 14 = 26 res 1.' },
          { label: 'b) Scenario B (rye van 20)', correctAnswer: '18 remainder 5', correctAnswers: ['18 remainder 5', '18 res 5', '18 r 5', '18r5', '18 rem 5'], explanation: '365 ÷ 20: Stap 1: 36 ÷ 20 = 1 res 16. Bring 5 af → 165. Stap 2: 165 ÷ 20 = 8 res 5.\nAntwoord: 365 ÷ 20 = 18 res 5.' },
          { label: 'c) Watter een vermors die minste stoele', correctAnswer: 'Scenario A', correctAnswers: ['Scenario A', 'A', 'scenario a'], explanation: 'Scenario A laat slegs 1 stoel ongebruik, terwyl Scenario B 5 stoele ongebruik laat. Scenario A vermors die minste stoele as oorskot.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Bakker het 195 muffins en wil weet hoeveel bokse van 6 sy kan vul. Is dit ʼn delingsituasie of ʼn groeperingsituasie? Skryf die getalsin en los op, en sê hoeveel volle bokse en hoeveel muffins oorbly.', answer: 'Dit is ʼn groeperingsituasie — ons ken die grootte van elke groep (6) en wil weet hoeveel groepe daar is. Getalsin: 195 ÷ 6 = ?\n195 ÷ 6 = 32 res 3.\nSy kan 32 volle bokse vul, met 3 muffins wat oorbly.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pluimveeboer versamel 621 eiers en verpak dit in skaaltjies van 6 eiers elk.\n\na) Is dit deling of groepering? Skryf een woord.\nb) Skryf die getalsin en bereken hoeveel volle skaaltjies verpak word.\nc) Hoeveel eiers bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Deling of groepering', correctAnswer: 'groepering', correctAnswers: ['groepering', 'Groepering'], explanation: 'Ons ken die grootte van elke groep (6 eiers per skaaltjie) en wil die aantal groepe (skaaltjies) vind — dit is groepering.' },
          { label: 'b) Volle skaaltjies', correctAnswer: '103', explanation: '621 ÷ 6: Stap 1: 6 ÷ 6 = 1. Bring 2 af → 02. Stap 2: 02 ÷ 6 = 0 res 2. Bring 1 af → 21. Stap 3: 21 ÷ 6 = 3 res 3.\nAntwoord: 621 ÷ 6 = 103 res 3, dus 103 volle skaaltjies.' },
          { label: 'c) Eiers wat oorbly', correctAnswer: '3', explanation: 'Die res van 621 ÷ 6 = 103 res 3, dus bly 3 eiers oor.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Skool het 480 lekkers vir ʼn fondsinsameling.\n\nScenario A: Die lekkers word gelyk tussen 8 klasse verdeel. Hoeveel lekkers kry elke klas?\nScenario B: Die lekkers word in sakkies van 16 verpak om te verkoop. Hoeveel sakkies word gemaak?\n\na) Antwoord vir Scenario A.\nb) Antwoord vir Scenario B.\nc) Watter scenario is ʼn delingsituasie en watter is ʼn groeperingsituasie?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '480 ÷ 8 = 60 lekkers per klas (deling: ons ken die aantal groepe, 8 klasse, en vind die hoeveelheid per groep).' },
          { label: 'b) Scenario B', correctAnswer: '30', explanation: '480 ÷ 16 = 30 sakkies (groepering: ons ken die grootte van elke groep, 16 lekkers per sakkie, en vind die aantal groepe).' },
          { label: 'c) Deling teenoor groepering', checkMode: 'self', answer: 'Scenario A is deling — die totaal (480) word gelyk verdeel tussen ʼn bekende aantal klasse (8), en ons vind hoeveel lekkers elke klas kry.\nScenario B is groepering — ons ken die grootte van elke sakkie (16) en vind hoeveel sakkies (groepe) uit die totaal gemaak kan word.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Saal het 840 stoele wat in rye van 23 stoele elk vir ʼn gradeplegtigheid gerangskik moet word.\n\na) Hoeveel volle rye kan gemaak word?\nb) Hoeveel stoele bly oor?\nc) Die organiseerder wil GEEN oorblywende stoele rondstaan hê nie — sy beplan om ekstra stoele by te voeg om nog een volledige ry te maak. Hoeveel ekstra stoele moet sy leen, en hoeveel rye sal daar in totaal wees?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle rye', correctAnswer: '36', explanation: '840 ÷ 23: Stap 1: 8 < 23 — neem 84. Skat 84 ÷ 20 ≈ 4. Probeer 3: 3 × 23 = 69 ≤ 84 ✓. Kontroleer 4 × 23 = 92 > 84 — dus is 3 korrek. Stap 2: 84 − 69 = 15. Bring 0 af → 150. Stap 3: 150 ÷ 23 — skat ≈ 7. Probeer 6: 6 × 23 = 138 ≤ 150 ✓. Kontroleer 7 × 23 = 161 > 150 — dus is 6 korrek. Res: 150 − 138 = 12.\nAntwoord: 840 ÷ 23 = 36 res 12, dus 36 volle rye.' },
          { label: 'b) Stoele wat oorbly', correctAnswer: '12', explanation: 'Die res van 840 ÷ 23 = 36 res 12, dus bly 12 stoele oor.' },
          { label: 'c) Ekstra stoele benodig en totale rye', correctAnswer: '11 extra chairs, 37 rows', correctAnswers: ['11 extra chairs, 37 rows', '11 en 37', '11,37', '11,37 rye'], explanation: 'ʼn Volle ry benodig 23 stoele. Sy het reeds 12 oorblywende stoele, dus benodig sy 23 − 12 = 11 meer stoele om nog een ry te voltooi. Totale rye: 36 + 1 = 37 rye.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Stadion bestel 1 043 ekstra sitplekke om by bestaande rye van 24 sitplekke elk te voeg, en elke nuwe sitplek kos R25 om te installeer.\n\na) Hoeveel volle nuwe rye van 24 kan uit die 1 043 sitplekke gemaak word?\nb) Hoeveel sitplekke bly oor nadat die volle rye gemaak is?\nc) As daardie oorblywende sitplekke ook geïnstalleer word (nie vermors nie), wat is die totale installasiekoste vir al 1 043 sitplekke?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle nuwe rye', correctAnswer: '43', explanation: '1 043 ÷ 24: Stap 1: 10 < 24 — neem 104. Skat 104 ÷ 20 ≈ 5. Probeer 4: 4 × 24 = 96 ≤ 104 ✓. Kontroleer 5 × 24 = 120 > 104 — dus is 4 korrek. Stap 2: 104 − 96 = 8. Bring 3 af → 83. Stap 3: 83 ÷ 24 — skat ≈ 4. Probeer 3: 3 × 24 = 72 ≤ 83 ✓. Kontroleer 4 × 24 = 96 > 83 — dus is 3 korrek. Res: 83 − 72 = 11.\nAntwoord: 1 043 ÷ 24 = 43 res 11, dus 43 volle rye.' },
          { label: 'b) Sitplekke wat oorbly', correctAnswer: '11', explanation: 'Die res van 1 043 ÷ 24 = 43 res 11, dus bly 11 sitplekke oor.' },
          { label: 'c) Totale installasiekoste', correctAnswer: 'R26075', correctAnswers: ['R26075', '26075', 'R26 075', '26 075'], explanation: 'Al 1 043 sitplekke word geïnstalleer (in volle rye of nie), dus is die koste eenvoudig 1 043 × R25 = R26 075. (Kontroleer: 1 000 × 25 = 25 000, plus 43 × 25 = 1 075, dus 25 000 + 1 075 = 26 075.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het feitefamilies, langdeling, reste in konteks en delingwoordprobleme bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde bloklayout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 9 × 8 = 72 om twee delingsfeite te skryf.', answer: '72 ÷ 8 = 9\n72 ÷ 9 = 8', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 121 ÷ 11 met jou vermenigvuldigingstafels.', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Dink: watter getal × 11 = 121? 11 × 11 = 121, dus 121 ÷ 11 = 11.' },
        { difficulty: 'Easy', question: 'Die kwosiënt van ʼn deling is 7 en die deler is 11. Wat is die deeltal? Skryf die vermenigvuldigingsfeit wat jy gebruik het.', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77', '7x11=77', '7×11=77', '11x7=77'], explanation: 'Deeltal = kwosiënt × deler = 7 × 11 = 77. Kontroleer: 77 ÷ 11 = 7 ✓' },
        { difficulty: 'Easy', question: 'Bereken 5 184 ÷ 6 met langdeling.', answer: '864', checkMode: 'auto', correctAnswer: '864', correctAnswers: ['864'], explanation: 'Stap 1: 5 < 6 — neem 51. 51 ÷ 6 = 8 res 3. Skryf 8.\nStap 2: 8 × 6 = 48. 51 − 48 = 3. Bring 8 af → 38.\nStap 3: 38 ÷ 6 = 6 res 2. Skryf 6.\nStap 4: 6 × 6 = 36. 38 − 36 = 2. Bring 4 af → 24.\nStap 5: 24 ÷ 6 = 4. Skryf 4.\nStap 6: 4 × 6 = 24. 24 − 24 = 0. Geen res.\nAntwoord: 5 184 ÷ 6 = 864 ✓' },
        { difficulty: 'Easy', question: 'Bereken elkeen van die volgende met langdeling en wys die nul-plekhouer waar nodig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 3 608 ÷ 4 =', correctAnswer: '902', explanation: 'Stap 1: 3 < 4 — neem 36. 36 ÷ 4 = 9. Skryf 9.\nStap 2: 9 × 4 = 36. 36 − 36 = 0. Bring 0 af → 00.\nStap 3: 00 ÷ 4 = 0. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 4 = 0. 00 − 0 = 0. Bring 8 af → 08.\nStap 5: 08 ÷ 4 = 2. Skryf 2.\nStap 6: 2 × 4 = 8. 08 − 8 = 0. Geen res.\nAntwoord: 3 608 ÷ 4 = 902 ✓' },
          { label: 'b) 4 536 ÷ 8 =', correctAnswer: '567', explanation: 'Stap 1: 4 < 8 — neem 45. 45 ÷ 8 = 5 res 5. Skryf 5.\nStap 2: 5 × 8 = 40. 45 − 40 = 5. Bring 3 af → 53.\nStap 3: 53 ÷ 8 = 6 res 5. Skryf 6.\nStap 4: 6 × 8 = 48. 53 − 48 = 5. Bring 6 af → 56.\nStap 5: 56 ÷ 8 = 7. Skryf 7.\nStap 6: 7 × 8 = 56. 56 − 56 = 0. Geen res.\nAntwoord: 4 536 ÷ 8 = 567 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Bereken 6 027 ÷ 9 met langdeling en kontroleer dan jou antwoord deur die inverse bewerking te gebruik.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt en res', correctAnswer: '669 remainder 6', correctAnswers: ['669 remainder 6', '669 res 6', '669 r 6', '669r6', '669 rem 6'], explanation: 'Stap 1: 6 < 9 — neem 60. 60 ÷ 9 = 6 res 6. Skryf 6.\nStap 2: 6 × 9 = 54. 60 − 54 = 6. Bring 2 af → 62.\nStap 3: 62 ÷ 9 = 6 res 8. Skryf 6.\nStap 4: 6 × 9 = 54. 62 − 54 = 8. Bring 7 af → 87.\nStap 5: 87 ÷ 9 = 9 res 6. Skryf 9.\nAntwoord: 6 027 ÷ 9 = 669 res 6 ✓' },
          { label: 'b) Inverse kontrole', correctAnswer: '669x9+6=6027', correctAnswers: ['669x9+6=6027', '6027', '669×9+6=6027'], explanation: 'Inverse kontrole: (kwosiënt × deler) + res = deeltal\n669 × 9 = 6 021, en 6 021 + 6 = 6 027 ✓' },
        ] },
        { difficulty: 'Easy', question: 'ʼn Bottelaanleg deel 3 612 bottels gelyk tussen 6 afleweringskratte. Hoeveel bottels gaan in elke krat?', answer: '602', checkMode: 'auto', correctAnswer: '602', correctAnswers: ['602'], explanation: '3 612 ÷ 6: Stap 1: 3 < 6 — neem 36. 36 ÷ 6 = 6. Skryf 6.\nStap 2: 6 × 6 = 36. 36 − 36 = 0. Bring 1 af → 01.\nStap 3: 01 ÷ 6 = 0 res 1. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 6 = 0. 01 − 0 = 1. Bring 2 af → 12.\nStap 5: 12 ÷ 6 = 2. Skryf 2.\nStap 6: 2 × 6 = 12. 12 − 12 = 0. Geen res.\nAntwoord: 3 612 ÷ 6 = 602 bottels per krat ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap:\n975 ÷ 15', answer: '65', checkMode: 'auto', correctAnswer: '65', correctAnswers: ['65'], explanation: 'Stap 1: 9 < 15 — neem 97. Skat: 97 ÷ 10 ≈ 9. Probeer 6: 6 × 15 = 90 ≤ 97 ✓. Kontroleer: 7 × 15 = 105 > 97 — dus is 6 korrek.\nStap 2: 97 − 90 = 7. Bring 5 af → 75.\nStap 3: 75 ÷ 15 = 5 presies (5 × 15 = 75). 75 − 75 = 0. Geen res.\nAntwoord: 975 ÷ 15 = 65 ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 598 ÷ 26 =', correctAnswer: '23', explanation: 'Stap 1: 5 < 26 — neem 59. Skat: 59 ÷ 30 ≈ 2. Probeer 2: 2 × 26 = 52 ≤ 59 ✓. Kontroleer: 3 × 26 = 78 > 59 — dus is 2 korrek.\nStap 2: 59 − 52 = 7. Bring 8 af → 78.\nStap 3: 78 ÷ 26 = 3 presies (3 × 26 = 78). 78 − 78 = 0. Geen res.\nAntwoord: 598 ÷ 26 = 23 ✓' },
          { label: 'b) 713 ÷ 23 =', correctAnswer: '31', explanation: 'Stap 1: 7 < 23 — neem 71. Skat: 71 ÷ 20 ≈ 3. Probeer 3: 3 × 23 = 69 ≤ 71 ✓. Kontroleer: 4 × 23 = 92 > 71 — dus is 3 korrek.\nStap 2: 71 − 69 = 2. Bring 3 af → 23.\nStap 3: 23 ÷ 23 = 1 presies (1 × 23 = 23). 23 − 23 = 0. Geen res.\nAntwoord: 713 ÷ 23 = 31 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder deel 816 ÷ 24 en skat die eerste kwosiëntsyfer as 4, en skryf "4 × 24 = 96, maar 96 > 81, so dit kan nie reg wees nie." Vind die korrekte eerste syfer, en voltooi dan die deling om 816 ÷ 24 te vind.', answer: '816 ÷ 24 = 34', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34'], explanation: 'Die leerder is korrek dat 4 te hoog is, aangesien ons "81" as die eerste gedeeltelike deeltal neem (8 < 24, dus gebruik twee syfers 81), en 4 × 24 = 96 > 81. Probeer 3: 3 × 24 = 72 ≤ 81 ✓.\nStap 1: 81 − 72 = 9. Bring 6 af → 96.\nStap 2: 96 ÷ 24 = 4 presies (4 × 24 = 96). 96 − 96 = 0. Geen res.\nAntwoord: 816 ÷ 24 = 34 ✓' },
        { difficulty: 'Medium', question: 'Bereken 346 ÷ 11 en skryf die res.', answer: '31 remainder 5', checkMode: 'auto', correctAnswer: '31 remainder 5', correctAnswers: ['31 remainder 5', '31 res 5', '31 r 5', '31r5', '31 rem 5'], explanation: 'Stap 1: 3 < 11 — neem 34. Skat: 34 ÷ 10 ≈ 3. Probeer 3: 3 × 11 = 33 ≤ 34 ✓.\nStap 2: 34 − 33 = 1. Bring 6 af → 16.\nStap 3: 16 ÷ 11 = 1 res 5. Probeer 1: 1 × 11 = 11 ≤ 16 ✓.\nStap 4: 16 − 11 = 5. Aangesien 5 < 11, is dit die finale res.\nAntwoord: 346 ÷ 11 = 31 res 5 ✓' },
        { difficulty: 'Medium', question: '528 toeriste moet met ʼn toerbus vir ʼn dagtoer reis. Elke bus hou 17 toeriste.\n\na) Hoeveel volle busse word benodig?\nb) Hoeveel toeriste bly oor?\nc) Hoeveel busse in totaal word benodig sodat almal ʼn sitplek het?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle busse', correctAnswer: '31', explanation: '528 ÷ 17: Stap 1: 5 < 17 — neem 52. Skat 52 ÷ 20 ≈ 2. Probeer 3: 3 × 17 = 51 ≤ 52 ✓. Kontroleer: 4 × 17 = 68 > 52 — dus is 3 korrek.\nStap 2: 52 − 51 = 1. Bring 8 af → 18.\nStap 3: 18 ÷ 17 — probeer 1: 1 × 17 = 17 ≤ 18 ✓. Res 1 < 17, korrek.\nAntwoord: 31 volle busse (vervoer 31 × 17 = 527 toeriste).' },
          { label: 'b) Toeriste wat oorbly', correctAnswer: '1', explanation: 'Die res van 528 ÷ 17 = 31 res 1.\n1 toeris bly oor nadat 31 busse gevul is.' },
          { label: 'c) Totale aantal busse benodig', correctAnswer: '32', explanation: 'Konteksbesluit: die 1 oorblywende toeris het steeds ʼn sitplek nodig, dus rond op. Totaal: 31 + 1 = 32 busse sodat al 528 toeriste ʼn sitplek het.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Winkelier het 256 lekkers en wil dit in flesse verpak wat elk 9 lekkers hou. Verduidelik in jou eie woorde waarom die aantal volle flesse nie eenvoudig 256 ÷ 9 afgerond na die naaste heelgetal is nie, en sê hoeveel volle flesse hy kan pak.', answer: '256 ÷ 9 = 28 res 4. Hy kan slegs 28 volle flesse pak, want die 4 oorblywende lekkers is nie genoeg om nog ʼn fles te vul nie. Afronding na die naaste heelgetal sou hier ook 28 gee (28,44 rond af), maar die redenasie bly belangrik — jy kan nie ʼn fles as vol tel as dit net 4 uit 9 lekkers het nie, ongeag hoe die desimaal afrond.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Gemeenskapsgroep het R930 ingesamel om gelyk tussen 8 helpers verdeel te word.\n\na) Hoeveel kry elke helper as ʼn heelrand-bedrag, en wat is die res?\nb) Skryf die res as ʼn breuk van R8.\nc) Hoeveel ontvang elke helper in rand en sent?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelrand-bedrag met res', correctAnswer: '116 remainder 2', correctAnswers: ['116 remainder 2', '116 res 2', '116 r 2', '116r2', '116 rem 2'], explanation: '930 ÷ 8: Stap 1: 9 ÷ 8 = 1 res 1. Bring 3 af → 13. Stap 2: 13 ÷ 8 = 1 res 5. Bring 0 af → 50. Stap 3: 50 ÷ 8 = 6 res 2.\nAntwoord: 930 ÷ 8 = 116 res 2.' },
          { label: 'b) Res as ʼn breuk', correctAnswer: '2/8', correctAnswers: ['2/8', '1/4'], explanation: 'Res is 2 uit 8 gelyke dele: 2/8 = 1/4.' },
          { label: 'c) Bedrag in rand en sent', correctAnswer: 'R116,25', correctAnswers: ['R116,25', '116,25', 'R116.25', '116.25'], explanation: 'Res-breuk: 2 ÷ 8 = 0,25. Elke helper kry R116 + R0,25 = R116,25.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Bioskoop het 482 kaartjies om vir twee verskillende vertonings te verkoop, in rye gesetel.\n\nScenario A: rye van 15 sitplekke.\nScenario B: rye van 20 sitplekke.\n\na) Hoeveel volle rye en hoeveel oorblywende sitplekke in Scenario A?\nb) Hoeveel volle rye en hoeveel oorblywende sitplekke in Scenario B?\nc) Watter scenario vermors die minste sitplekke as oorskot?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rye van 15)', correctAnswer: '32 remainder 2', correctAnswers: ['32 remainder 2', '32 res 2', '32 r 2', '32r2', '32 rem 2'], explanation: '482 ÷ 15: Stap 1: 48 ÷ 15 = 3 res 3. Bring 2 af → 32. Stap 2: 32 ÷ 15 = 2 res 2.\nAntwoord: 482 ÷ 15 = 32 res 2.' },
          { label: 'b) Scenario B (rye van 20)', correctAnswer: '24 remainder 2', correctAnswers: ['24 remainder 2', '24 res 2', '24 r 2', '24r2', '24 rem 2'], explanation: '482 ÷ 20: Stap 1: 48 ÷ 20 = 2 res 8. Bring 2 af → 82. Stap 2: 82 ÷ 20 = 4 res 2.\nAntwoord: 482 ÷ 20 = 24 res 2.' },
          { label: 'c) Watter een vermors die minste sitplekke', correctAnswer: 'equal', correctAnswers: ['equal', 'gelyk', 'albei dieselfde', 'geeneen'], explanation: 'Albei scenario’s laat presies 2 sitplekke ongebruik, dus vermors geeneen minder as die ander nie — hulle is ewe doeltreffend.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Kroeskoek-bakker het 256 muffins en wil weet hoeveel bokse van 9 sy kan vul. Is dit ʼn delingsituasie of ʼn groeperingsituasie? Skryf die getalsin en los op, en sê hoeveel volle bokse en hoeveel muffins oorbly.', answer: 'Dit is ʼn groeperingsituasie — ons ken die grootte van elke groep (9) en wil weet hoeveel groepe daar is. Getalsin: 256 ÷ 9 = ?\n256 ÷ 9 = 28 res 4.\nSy kan 28 volle bokse vul, met 4 muffins wat oorbly.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Suiwelplaas versamel 615 liter melk en giet dit in houers wat elk 18 liter hou.\n\na) Is dit deling of groepering? Skryf een woord.\nb) Skryf die getalsin en bereken hoeveel volle houers gevul word.\nc) Hoeveel liter bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Deling of groepering', correctAnswer: 'groepering', correctAnswers: ['groepering', 'Groepering'], explanation: 'Ons ken die grootte van elke groep (18 liter per houer) en wil die aantal groepe (houers) vind — dit is groepering.' },
          { label: 'b) Volle houers', correctAnswer: '34', explanation: '615 ÷ 18: Stap 1: 6 < 18 — neem 61. Skat 61 ÷ 20 ≈ 3. Probeer 3: 3 × 18 = 54 ≤ 61 ✓. Stap 2: 61 − 54 = 7. Bring 5 af → 75. Stap 3: 75 ÷ 18 — skat ≈ 3. Probeer 4: 4 × 18 = 72 ≤ 75 ✓. Kontroleer 5 × 18 = 90 > 75 — dus is 4 korrek.\nAntwoord: 615 ÷ 18 = 34 res 3, dus 34 volle houers.' },
          { label: 'c) Liter wat oorbly', correctAnswer: '3', explanation: 'Die res van 615 ÷ 18 = 34 res 3, dus bly 3 liter oor.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Skool het 540 potlode vir ʼn skryfbehoefte-veldtog.\n\nScenario A: Die potlode word gelyk tussen 9 klasse verdeel. Hoeveel potlode kry elke klas?\nScenario B: Die potlode word in pakkies van 15 verpak om te verkoop. Hoeveel pakkies word gemaak?\n\na) Antwoord vir Scenario A.\nb) Antwoord vir Scenario B.\nc) Watter scenario is ʼn delingsituasie en watter is ʼn groeperingsituasie?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '540 ÷ 9 = 60 potlode per klas (deling: ons ken die aantal groepe, 9 klasse, en vind die hoeveelheid per groep).' },
          { label: 'b) Scenario B', correctAnswer: '36', explanation: '540 ÷ 15 = 36 pakkies (groepering: ons ken die grootte van elke groep, 15 potlode per pakkie, en vind die aantal groepe).' },
          { label: 'c) Deling teenoor groepering', checkMode: 'self', answer: 'Scenario A is deling — die totaal (540) word gelyk verdeel tussen ʼn bekende aantal klasse (9), en ons vind hoeveel potlode elke klas kry.\nScenario B is groepering — ons ken die grootte van elke pakkie (15) en vind hoeveel pakkies (groepe) uit die totaal gemaak kan word.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Stadion bestel 1 043 ekstra stoele om by bestaande rye van 24 sitplekke elk in ʼn ander saal te voeg, en elke nuwe sitplek kos R18 om te installeer.\n\na) Hoeveel volle nuwe rye van 24 kan uit die 1 043 stoele gemaak word?\nb) Hoeveel stoele bly oor nadat die volle rye gemaak is?\nc) As daardie oorblywende stoele ook geïnstalleer word, wat is die totale installasiekoste vir al 1 043 stoele?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle nuwe rye', correctAnswer: '43', explanation: '1 043 ÷ 24: Stap 1: 10 < 24 — neem 104. Skat 104 ÷ 20 ≈ 5. Probeer 4: 4 × 24 = 96 ≤ 104 ✓. Kontroleer 5 × 24 = 120 > 104 — dus is 4 korrek. Stap 2: 104 − 96 = 8. Bring 3 af → 83. Stap 3: 83 ÷ 24 — probeer 3: 3 × 24 = 72 ≤ 83 ✓. Kontroleer 4 × 24 = 96 > 83 — dus is 3 korrek. Res: 83 − 72 = 11.\nAntwoord: 1 043 ÷ 24 = 43 res 11, dus 43 volle rye.' },
          { label: 'b) Stoele wat oorbly', correctAnswer: '11', explanation: 'Die res van 1 043 ÷ 24 = 43 res 11, dus bly 11 stoele oor.' },
          { label: 'c) Totale installasiekoste', correctAnswer: 'R18774', correctAnswers: ['R18774', '18774', 'R18 774', '18 774'], explanation: 'Al 1 043 stoele word geïnstalleer, dus is die koste 1 043 × R18 = R18 774. (Kontroleer: 1 000 × 18 = 18 000, plus 43 × 18 = 774, dus 18 000 + 774 = 18 774.)' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Skryfbehoeftevoorsiener het 1 310 potlode om in bokse van 25 potlode elk te verpak, en elke volle boks word vir R18 verkoop.\n\na) Hoeveel volle bokse van 25 kan verpak word?\nb) Hoeveel potlode bly oor?\nc) Wat is die totale geld verdien uit die verkoop van slegs die volle bokse?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle bokse', correctAnswer: '52', explanation: '1 310 ÷ 25: Stap 1: 13 < 25 — neem 131. Skat 131 ÷ 25 ≈ 5. Probeer 5: 5 × 25 = 125 ≤ 131 ✓. Stap 2: 131 − 125 = 6. Bring 0 af → 60. Stap 3: 60 ÷ 25 — probeer 2: 2 × 25 = 50 ≤ 60 ✓. Kontroleer 3 × 25 = 75 > 60 — dus is 2 korrek. Res: 60 − 50 = 10.\nAntwoord: 1 310 ÷ 25 = 52 res 10, dus 52 volle bokse.' },
          { label: 'b) Potlode wat oorbly', correctAnswer: '10', explanation: 'Die res van 1 310 ÷ 25 = 52 res 10, dus bly 10 potlode oor.' },
          { label: 'c) Geld uit volle bokse', correctAnswer: 'R936', correctAnswers: ['R936', '936'], explanation: 'Slegs volle bokse word verkoop: 52 × R18 = R936. (Kontroleer: 50 × 18 = 900, plus 2 × 18 = 36, dus 900 + 36 = 936.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan langdeling, reste in konteks en delingwoordprobleme met vertroue toepas.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde bloklayout, meer werklike kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 6 × 9 = 54 om twee delingsfeite te skryf.', answer: '54 ÷ 9 = 6\n54 ÷ 6 = 9', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Bereken 108 ÷ 12 met jou vermenigvuldigingstafels.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Dink: watter getal × 12 = 108? 12 × 9 = 108, dus 108 ÷ 12 = 9.' },
        { difficulty: 'Easy', question: 'Die kwosiënt van ʼn deling is 8 en die deler is 9. Wat is die deeltal? Skryf die vermenigvuldigingsfeit wat jy gebruik het.', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '8x9=72', '8×9=72', '9x8=72'], explanation: 'Deeltal = kwosiënt × deler = 8 × 9 = 72. Kontroleer: 72 ÷ 9 = 8 ✓' },
        { difficulty: 'Easy', question: 'Bereken 4 025 ÷ 5 met langdeling.', answer: '805', checkMode: 'auto', correctAnswer: '805', correctAnswers: ['805'], explanation: 'Stap 1: 4 < 5 — neem 40. 40 ÷ 5 = 8. Skryf 8.\nStap 2: 8 × 5 = 40. 40 − 40 = 0. Bring 2 af → 02.\nStap 3: 02 ÷ 5 = 0 res 2. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 5 = 0. 02 − 0 = 2. Bring 5 af → 25.\nStap 5: 25 ÷ 5 = 5. Skryf 5.\nStap 6: 5 × 5 = 25. 25 − 25 = 0. Geen res.\nAntwoord: 4 025 ÷ 5 = 805 ✓' },
        { difficulty: 'Easy', question: 'Bereken elkeen van die volgende met langdeling en wys die nul-plekhouer waar nodig.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 7 236 ÷ 9 =', correctAnswer: '804', explanation: 'Stap 1: 7 < 9 — neem 72. 72 ÷ 9 = 8. Skryf 8.\nStap 2: 8 × 9 = 72. 72 − 72 = 0. Bring 3 af → 03.\nStap 3: 03 ÷ 9 = 0 res 3. Skryf 0 (nul-plekhouer).\nStap 4: 0 × 9 = 0. 03 − 0 = 3. Bring 6 af → 36.\nStap 5: 36 ÷ 9 = 4. Skryf 4.\nStap 6: 4 × 9 = 36. 36 − 36 = 0. Geen res.\nAntwoord: 7 236 ÷ 9 = 804 ✓' },
          { label: 'b) 5 544 ÷ 7 =', correctAnswer: '792', explanation: 'Stap 1: 5 < 7 — neem 55. 55 ÷ 7 = 7 res 6. Skryf 7.\nStap 2: 7 × 7 = 49. 55 − 49 = 6. Bring 4 af → 64.\nStap 3: 64 ÷ 7 = 9 res 1. Skryf 9.\nStap 4: 9 × 7 = 63. 64 − 63 = 1. Bring 4 af → 14.\nStap 5: 14 ÷ 7 = 2. Skryf 2.\nStap 6: 2 × 7 = 14. 14 − 14 = 0. Geen res.\nAntwoord: 5 544 ÷ 7 = 792 ✓' },
        ] },
        { difficulty: 'Easy', question: 'Bereken 3 417 ÷ 6 met langdeling en kontroleer dan jou antwoord deur die inverse bewerking te gebruik.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kwosiënt en res', correctAnswer: '569 remainder 3', correctAnswers: ['569 remainder 3', '569 res 3', '569 r 3', '569r3', '569 rem 3'], explanation: 'Stap 1: 3 < 6 — neem 34. 34 ÷ 6 = 5 res 4. Skryf 5.\nStap 2: 5 × 6 = 30. 34 − 30 = 4. Bring 1 af → 41.\nStap 3: 41 ÷ 6 = 6 res 5. Skryf 6.\nStap 4: 6 × 6 = 36. 41 − 36 = 5. Bring 7 af → 57.\nStap 5: 57 ÷ 6 = 9 res 3. Skryf 9.\nAntwoord: 3 417 ÷ 6 = 569 res 3 ✓' },
          { label: 'b) Inverse kontrole', correctAnswer: '569x6+3=3417', correctAnswers: ['569x6+3=3417', '3417', '569×6+3=3417'], explanation: 'Inverse kontrole: (kwosiënt × deler) + res = deeltal\n569 × 6 = 3 414, en 3 414 + 3 = 3 417 ✓' },
        ] },
        { difficulty: 'Easy', question: 'ʼn Pakhuis deel 2 415 blikkies gelyk tussen 7 stoorrakke. Hoeveel blikkies gaan op elke rak?', answer: '345', checkMode: 'auto', correctAnswer: '345', correctAnswers: ['345'], explanation: '2 415 ÷ 7: Stap 1: 2 < 7 — neem 24. 24 ÷ 7 = 3 res 3. Skryf 3.\nStap 2: 3 × 7 = 21. 24 − 21 = 3. Bring 1 af → 31.\nStap 3: 31 ÷ 7 = 4 res 3. Skryf 4.\nStap 4: 4 × 7 = 28. 31 − 28 = 3. Bring 5 af → 35.\nStap 5: 35 ÷ 7 = 5. Skryf 5.\nStap 6: 5 × 7 = 35. 35 − 35 = 0. Geen res.\nAntwoord: 2 415 ÷ 7 = 345 blikkies per rak ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap:\n884 ÷ 17', answer: '52', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52'], explanation: 'Stap 1: 8 < 17 — neem 88. Skat: 88 ÷ 20 ≈ 4. Probeer 5: 5 × 17 = 85 ≤ 88 ✓. Kontroleer: 6 × 17 = 102 > 88 — dus is 5 korrek.\nStap 2: 88 − 85 = 3. Bring 4 af → 34.\nStap 3: 34 ÷ 17 = 2 presies (2 × 17 = 34). 34 − 34 = 0. Geen res.\nAntwoord: 884 ÷ 17 = 52 ✓' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en wys elke stap.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) 546 ÷ 21 =', correctAnswer: '26', explanation: 'Stap 1: 5 < 21 — neem 54. Skat: 54 ÷ 20 ≈ 2. Probeer 2: 2 × 21 = 42 ≤ 54 ✓. Kontroleer: 3 × 21 = 63 > 54 — dus is 2 korrek.\nStap 2: 54 − 42 = 12. Bring 6 af → 126.\nStap 3: 126 ÷ 21 = 6 presies (6 × 21 = 126). 126 − 126 = 0. Geen res.\nAntwoord: 546 ÷ 21 = 26 ✓' },
          { label: 'b) 912 ÷ 19 =', correctAnswer: '48', explanation: 'Stap 1: 9 < 19 — neem 91. Skat: 91 ÷ 20 ≈ 4. Probeer 4: 4 × 19 = 76 ≤ 91 ✓. Kontroleer: 5 × 19 = 95 > 91 — dus is 4 korrek.\nStap 2: 91 − 76 = 15. Bring 2 af → 152.\nStap 3: 152 ÷ 19 = 8 presies (8 × 19 = 152). 152 − 152 = 0. Geen res.\nAntwoord: 912 ÷ 19 = 48 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder deel 759 ÷ 12 en skat die eerste kwosiëntsyfer as 7, en skryf "7 × 12 = 84, maar 84 > 75, so dit kan nie reg wees nie." Vind die korrekte eerste syfer, en voltooi dan die deling om 759 ÷ 12 te vind.', answer: '759 ÷ 12 = 63 remainder 3', checkMode: 'auto', correctAnswer: '63 remainder 3', correctAnswers: ['63 remainder 3', '63 res 3', '63 r 3', '63r3', '63 rem 3'], explanation: 'Die leerder is korrek dat 7 te hoog is, aangesien ons "75" as die eerste gedeeltelike deeltal neem (7 < 12, dus gebruik twee syfers 75), en 7 × 12 = 84 > 75. Probeer 6: 6 × 12 = 72 ≤ 75 ✓.\nStap 1: 75 − 72 = 3. Bring 9 af → 39.\nStap 2: 39 ÷ 12 — probeer 3: 3 × 12 = 36 ≤ 39 ✓. Kontroleer 4 × 12 = 48 > 39 — dus is 3 korrek. Res: 39 − 36 = 3.\nAntwoord: 759 ÷ 12 = 63 res 3 ✓' },
        { difficulty: 'Medium', question: 'Bereken 413 ÷ 17 en skryf die res.', answer: '24 remainder 5', checkMode: 'auto', correctAnswer: '24 remainder 5', correctAnswers: ['24 remainder 5', '24 res 5', '24 r 5', '24r5', '24 rem 5'], explanation: 'Stap 1: 4 < 17 — neem 41. Skat: 41 ÷ 20 ≈ 2. Probeer 2: 2 × 17 = 34 ≤ 41 ✓.\nStap 2: 41 − 34 = 7. Bring 3 af → 73.\nStap 3: 73 ÷ 17 = 4 res 5. Probeer 4: 4 × 17 = 68 ≤ 73 ✓.\nStap 4: 73 − 68 = 5. Aangesien 5 < 17, is dit die finale res.\nAntwoord: 413 ÷ 17 = 24 res 5 ✓' },
        { difficulty: 'Medium', question: '364 werkers moet met ʼn pendelbus na ʼn mynterrein reis. Elke pendelbus hou 13 werkers.\n\na) Hoeveel volle pendelbusse word benodig?\nb) Hoeveel werkers bly oor?\nc) Hoeveel pendelbusse in totaal word benodig sodat almal ʼn sitplek het?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle pendelbusse', correctAnswer: '28', explanation: '364 ÷ 13: Stap 1: 3 < 13 — neem 36. Skat 36 ÷ 10 ≈ 3. Probeer 2: 2 × 13 = 26 ≤ 36 ✓. Kontroleer: 3 × 13 = 39 > 36 — dus is 2 korrek.\nStap 2: 36 − 26 = 10. Bring 4 af → 104.\nStap 3: 104 ÷ 13 = 8 presies (8 × 13 = 104). 104 − 104 = 0. Geen res.\nAntwoord: 28 volle pendelbusse (vervoer 28 × 13 = 364 werkers presies).' },
          { label: 'b) Werkers wat oorbly', correctAnswer: '0', explanation: 'Die res van 364 ÷ 13 = 28 res 0.\nGeen werkers bly oor nie — 28 pendelbusse pas almal presies in.' },
          { label: 'c) Totale aantal pendelbusse benodig', correctAnswer: '28', explanation: 'Konteksbesluit: aangesien daar geen res is nie, is geen ekstra pendelbus nodig nie. Totaal: 28 pendelbusse vir al 364 werkers.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Bibliotekaris het 287 boeke en wil weet hoeveel kratte wat elk 8 boeke hou sy benodig. Verduidelik in jou eie woorde waarom die aantal kratte benodig nie eenvoudig 287 ÷ 8 afgerond na die naaste heelgetal is nie, en sê hoeveel kratte sy nodig het sodat elke boek êrens inpas.', answer: '287 ÷ 8 = 35 res 7. As sy net 35 kratte gebruik, sou 7 boeke nêrens inpas nie. Aangesien elke boek verpak moet word (geeneen kan uitgelaat word nie), moet sy OPWAARTS afrond en 36 kratte gebruik — al sou 35,875 in elk geval na 36 afrond volgens gewone afrondingsreëls, is die werklike rede dat ʼn gedeeltelik-gevulde krat steeds nodig is, nie afronding van desimale nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Stokvel het R1 100 ingesamel om gelyk tussen 8 lede verdeel te word.\n\na) Hoeveel kry elke lid as ʼn heelrand-bedrag, en wat is die res?\nb) Skryf die res as ʼn breuk van R8.\nc) Hoeveel ontvang elke lid in rand en sent?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Heelrand-bedrag met res', correctAnswer: '137 remainder 4', correctAnswers: ['137 remainder 4', '137 res 4', '137 r 4', '137r4', '137 rem 4'], explanation: '1 100 ÷ 8: Stap 1: 11 ÷ 8 = 1 res 3. Bring 0 af → 30. Stap 2: 30 ÷ 8 = 3 res 6. Bring 0 af → 60. Stap 3: 60 ÷ 8 = 7 res 4.\nAntwoord: 1 100 ÷ 8 = 137 res 4.' },
          { label: 'b) Res as ʼn breuk', correctAnswer: '4/8', correctAnswers: ['4/8', '1/2'], explanation: 'Res is 4 uit 8 gelyke dele: 4/8 = 1/2.' },
          { label: 'c) Bedrag in rand en sent', correctAnswer: 'R137,50', correctAnswers: ['R137,50', '137,50', 'R137.50', '137.50', 'R137,5', '137,5', 'R137.5', '137.5'], explanation: 'Res-breuk: 4 ÷ 8 = 0,5. Elke lid kry R137 + R0,50 = R137,50.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Troueplek het 517 gaste om in rye te sit.\n\nScenario A: rye van 16 sitplekke.\nScenario B: rye van 25 sitplekke.\n\na) Hoeveel volle rye en hoeveel oorblywende gaste in Scenario A?\nb) Hoeveel volle rye en hoeveel oorblywende gaste in Scenario B?\nc) Watter scenario benodig ʼn ekstra gedeeltelik-gevulde ry vir minder oorblywende gaste?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A (rye van 16)', correctAnswer: '32 remainder 5', correctAnswers: ['32 remainder 5', '32 res 5', '32 r 5', '32r5', '32 rem 5'], explanation: '517 ÷ 16: Stap 1: 51 ÷ 16 = 3 res 3. Bring 7 af → 37. Stap 2: 37 ÷ 16 = 2 res 5.\nAntwoord: 517 ÷ 16 = 32 res 5.' },
          { label: 'b) Scenario B (rye van 25)', correctAnswer: '20 remainder 17', correctAnswers: ['20 remainder 17', '20 res 17', '20 r 17', '20r17', '20 rem 17'], explanation: '517 ÷ 25: Stap 1: 51 ÷ 25 = 2 res 1. Bring 7 af → 17. Stap 2: 17 ÷ 25 = 0 res 17.\nAntwoord: 517 ÷ 25 = 20 res 17.' },
          { label: 'c) Watter scenario het minder oorblywende gaste', correctAnswer: 'Scenario A', correctAnswers: ['Scenario A', 'A', 'scenario a'], explanation: 'Scenario A laat slegs 5 gaste onversorg in ʼn gedeeltelik-gevulde ry, terwyl Scenario B 17 laat. Scenario A het minder oorblywende gaste.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Blommis het 287 blomme en wil weet hoeveel bosse van 8 sy kan maak. Is dit ʼn delingsituasie of ʼn groeperingsituasie? Skryf die getalsin en los op, en sê hoeveel volle bosse en hoeveel blomme oorbly.', answer: 'Dit is ʼn groeperingsituasie — ons ken die grootte van elke groep (8) en wil weet hoeveel groepe daar is. Getalsin: 287 ÷ 8 = ?\n287 ÷ 8 = 35 res 7.\nSy kan 35 volle bosse maak, met 7 blomme wat oorbly.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Pakhuis het 925 blikkies verf en verpak dit op palette wat elk 27 blikkies hou.\n\na) Is dit deling of groepering? Skryf een woord.\nb) Skryf die getalsin en bereken hoeveel volle palette verpak word.\nc) Hoeveel blikkies bly oor?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Deling of groepering', correctAnswer: 'groepering', correctAnswers: ['groepering', 'Groepering'], explanation: 'Ons ken die grootte van elke groep (27 blikkies per palet) en wil die aantal groepe (palette) vind — dit is groepering.' },
          { label: 'b) Volle palette', correctAnswer: '34', explanation: '925 ÷ 27: Stap 1: 9 < 27 — neem 92. Skat 92 ÷ 30 ≈ 3. Probeer 3: 3 × 27 = 81 ≤ 92 ✓. Stap 2: 92 − 81 = 11. Bring 5 af → 115. Stap 3: 115 ÷ 27 — skat ≈ 4. Probeer 4: 4 × 27 = 108 ≤ 115 ✓. Kontroleer 5 × 27 = 135 > 115 — dus is 4 korrek.\nAntwoord: 925 ÷ 27 = 34 res 7, dus 34 volle palette.' },
          { label: 'c) Blikkies wat oorbly', correctAnswer: '7', explanation: 'Die res van 925 ÷ 27 = 34 res 7, dus bly 7 blikkies oor.' },
        ] },
        { difficulty: 'Medium-Hard', question: 'ʼn Kerk het 360 gesangboeke vir ʼn spesiale diens.\n\nScenario A: Die gesangboeke word gelyk tussen 6 afdelings van die kerk verdeel. Hoeveel boeke kry elke afdeling?\nScenario B: Die gesangboeke word in bokse van 12 vir berging verpak. Hoeveel bokse word gemaak?\n\na) Antwoord vir Scenario A.\nb) Antwoord vir Scenario B.\nc) Watter scenario is ʼn delingsituasie en watter is ʼn groeperingsituasie?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Scenario A', correctAnswer: '60', explanation: '360 ÷ 6 = 60 gesangboeke per afdeling (deling: ons ken die aantal groepe, 6 afdelings, en vind die hoeveelheid per groep).' },
          { label: 'b) Scenario B', correctAnswer: '30', explanation: '360 ÷ 12 = 30 bokse (groepering: ons ken die grootte van elke groep, 12 boeke per boks, en vind die aantal groepe).' },
          { label: 'c) Deling teenoor groepering', checkMode: 'self', answer: 'Scenario A is deling — die totaal (360) word gelyk verdeel tussen ʼn bekende aantal afdelings (6), en ons vind hoeveel gesangboeke elke afdeling kry.\nScenario B is groepering — ons ken die grootte van elke boks (12) en vind hoeveel bokse (groepe) uit die totaal gemaak kan word.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Konferensiesentrum het 759 stoele wat in rye van 12 stoele elk gerangskik moet word, en ontvang afsonderlik ʼn aflewering van 2 295 ekstra stoele om by rye van 40 sitplekke elk in die hoofsaal te voeg (elke nuwe sitplek kos R14 om te installeer).\n\nDeur die 2 295 stoele en rye van 40 te gebruik:\na) Hoeveel volle nuwe rye van 40 kan gemaak word?\nb) Hoeveel stoele bly oor nadat die volle rye gemaak is?\nc) As daardie oorblywende stoele ook geïnstalleer word, wat is die totale installasiekoste vir al 2 295 stoele?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle nuwe rye', correctAnswer: '57', explanation: '2 295 ÷ 40: Stap 1: 22 < 40 — neem 229. Skat 229 ÷ 40 ≈ 5. Probeer 5: 5 × 40 = 200 ≤ 229 ✓. Stap 2: 229 − 200 = 29. Bring 5 af → 295. Stap 3: 295 ÷ 40 — probeer 7: 7 × 40 = 280 ≤ 295 ✓. Kontroleer 8 × 40 = 320 > 295 — dus is 7 korrek. Res: 295 − 280 = 15.\nAntwoord: 2 295 ÷ 40 = 57 res 15, dus 57 volle rye.' },
          { label: 'b) Stoele wat oorbly', correctAnswer: '15', explanation: 'Die res van 2 295 ÷ 40 = 57 res 15, dus bly 15 stoele oor.' },
          { label: 'c) Totale installasiekoste', correctAnswer: 'R32130', correctAnswers: ['R32130', '32130', 'R32 130', '32 130'], explanation: 'Al 2 295 stoele word geïnstalleer, dus is die koste 2 295 × R14 = R32 130. (Kontroleer: 2 000 × 14 = 28 000, plus 295 × 14 = 4 130, dus 28 000 + 4 130 = 32 130.)' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Vrugte-uitvoerder het 2 295 mangoʼs om in kratte van 40 mangoʼs elk te verpak, en elke volle krat word vir R150 verkoop.\n\na) Hoeveel volle kratte van 40 kan verpak word?\nb) Hoeveel mangoʼs bly oor?\nc) Wat is die totale geld verdien uit die verkoop van slegs die volle kratte?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volle kratte', correctAnswer: '57', explanation: '2 295 ÷ 40: Stap 1: 22 < 40 — neem 229. Skat ≈ 5. Probeer 5: 5 × 40 = 200 ≤ 229 ✓. Stap 2: 229 − 200 = 29. Bring 5 af → 295. Stap 3: 295 ÷ 40 — probeer 7: 7 × 40 = 280 ≤ 295 ✓. Kontroleer 8 × 40 = 320 > 295 — dus is 7 korrek. Res: 295 − 280 = 15.\nAntwoord: 2 295 ÷ 40 = 57 res 15, dus 57 volle kratte.' },
          { label: 'b) Mangoʼs wat oorbly', correctAnswer: '15', explanation: 'Die res van 2 295 ÷ 40 = 57 res 15, dus bly 15 mangoʼs oor.' },
          { label: 'c) Geld uit volle kratte', correctAnswer: 'R8550', correctAnswers: ['R8550', '8550', 'R8 550', '8 550'], explanation: 'Slegs volle kratte word verkoop: 57 × R150 = R8 550. (Kontroleer: 50 × 150 = 7 500, plus 7 × 150 = 1 050, dus 7 500 + 1 050 = 8 550.)' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan langdeling, reste in konteks en delingwoordprobleme op werklike situasies toepas.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou so aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 33, message: 'Uitstekend! ʼn Perfekte telling — jy het deling vir Graad 5 volkome bemeester. Hou so aan!' },
    { minScore: 27, message: 'Puik werk! Jy het ʼn baie sterk begrip van deling. Hersien enige gemiste dele en jy sal dit perfek hê.' },
    { minScore: 20, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 12, message: 'Goeie poging! Werk terug deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke kenner was eens ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
}
