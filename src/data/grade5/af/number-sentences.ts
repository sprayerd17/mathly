import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// numbers            → blue   (#2563eb)
// operation symbols  → red    (#dc2626)
// = < >              → green  (#16a34a)
// missing value □    → orange (#ea580c)
const nu = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const op = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const eq = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const mv = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Getalsinne',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VERGELYKINGS EN ONGELYKHEDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equations-and-inequalities',
      title: 'Vergelykings en Ongelykhede',
      icon: '=',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:16px;">ʼn <strong>Getalsin</strong> is ʼn wiskundige stelling wat ${nu('getalle')} en simbole gebruik om ʼn verwantskap te toon. ʼn <strong>Vergelyking</strong> gebruik ${eq('=')} en ʼn <strong>ongelykheid</strong> gebruik ${eq('&lt;')} of ${eq('&gt;')}. Getalsinne kan <span style="color:#16a34a;font-weight:700">waar</span> of <span style="color:#dc2626;font-weight:700">onwaar</span> wees — jy bereken albei kante om uit te vind watter een.</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('getalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('bewerkingsimbole')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('= &lt; &gt;')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;color:#16a34a;font-weight:700;">waar</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;color:#dc2626;font-weight:700;">onwaar</span>` +
        `</div>` +

        // ── Two types heading ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee soorte getalsinne</p>` +

        // ── Equation and Inequality cards ─────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Vergelyking</p>` +
        `<p style="font-size:20px;margin-bottom:10px;letter-spacing:2px;">${nu('4')} ${op('×')} ${nu('25')} ${eq('=')} ${nu('100')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik ${eq('=')} om te wys dat <strong>albei kante gelyk is</strong>. Die linkerkant en die regterkant balanseer presies.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 18px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:10px;">Ongelykheid</p>` +
        `<p style="font-size:20px;margin-bottom:10px;letter-spacing:2px;">${nu('3')} ${op('×')} ${nu('40')} ${eq('&gt;')} ${nu('100')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gebruik ${eq('&gt;')} of ${eq('&lt;')} om te wys dat <strong>een kant groter is as die ander</strong>. Die kante balanseer nie.</p>` +
        `</div>` +

        `</div>` +

        // ── How to check heading ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om te bepaal of ʼn getalsin waar of onwaar is</p>` +

        // ── 3 steps ───────────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bereken albei kante</strong> — werk die waarde aan die linkerkant van die simbool en die waarde aan die regterkant apart uit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vergelyk die resultate</strong> — plaas die twee waardes langs mekaar en kyk na die simbool tussen hulle.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Besluit of die simbool korrek is</strong> — as die simbool ooreenstem met die verwantskap tussen die twee waardes, is die sin <span style="color:#16a34a;font-weight:700">waar</span>. Indien nie, is dit <span style="color:#dc2626;font-weight:700">onwaar</span>.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wat beteken die simbole?</p>` +
        `<p style="margin:0;color:#1e3a8a;">${eq('=')} — albei kante het <strong>dieselfde waarde</strong>. &nbsp; ${eq('&gt;')} — die linkerkant is <strong>groter</strong>. &nbsp; ${eq('&lt;')} — die linkerkant is <strong>kleiner</strong>. Die spits punt van ${eq('&lt;')} en ${eq('&gt;')} wys altyd na die kleiner getal.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: equation — true or false? ──────────────────────────────
        {
          question: `Is ${nu('6')} ${op('×')} ${nu('35')} ${eq('=')} ${nu('7')} ${op('×')} ${nu('30')} waar of onwaar?`,
          answer: `<span style="color:#16a34a;font-weight:700">Waar</span> — ${nu('210')} ${eq('=')} ${nu('210')} ✓`,
          steps: [
            `<strong>Linkerkant:</strong> ${nu('6')} ${op('×')} ${nu('35')} = ${nu('210')}`,
            `<strong>Regterkant:</strong> ${nu('7')} ${op('×')} ${nu('30')} = ${nu('210')}`,
            `<strong>Vergelyk:</strong> Is ${nu('210')} ${eq('=')} ${nu('210')}? <span style="color:#16a34a;font-weight:700">Ja ✓</span> — albei kante is gelyk.`,
            `<strong>Antwoord:</strong> <span style="color:#16a34a;font-weight:700">Waar.</span> Die vergelyking is korrek.`,
          ],
        },

        // ── Example 2: inequality — true or false? ────────────────────────────
        {
          question: `Is ${nu('450')} ${op('÷')} ${nu('9')} ${eq('&gt;')} ${nu('4')} ${op('×')} ${nu('12')} waar of onwaar?`,
          answer: `<span style="color:#16a34a;font-weight:700">Waar</span> — ${nu('50')} ${eq('&gt;')} ${nu('48')} ✓`,
          steps: [
            `<strong>Linkerkant:</strong> ${nu('450')} ${op('÷')} ${nu('9')} = ${nu('50')}`,
            `<strong>Regterkant:</strong> ${nu('4')} ${op('×')} ${nu('12')} = ${nu('48')}`,
            `<strong>Vergelyk:</strong> Is ${nu('50')} ${eq('&gt;')} ${nu('48')}? <span style="color:#16a34a;font-weight:700">Ja ✓</span> — 50 is groter as 48.`,
            `<strong>Antwoord:</strong> <span style="color:#16a34a;font-weight:700">Waar.</span> Die ongelykheid is korrek.`,
          ],
        },

        // ── Example 3: writing your own true number sentence ──────────────────
        {
          question: `Skryf jou eie ware getalsin met ${op('×')} en ${eq('&gt;')}.`,
          answer: `${nu('8')} ${op('×')} ${nu('15')} ${eq('&gt;')} ${nu('100')} — want ${nu('120')} ${eq('&gt;')} ${nu('100')} ✓`,
          steps: [
            `<strong>Kies ʼn vermenigvuldiging wat jy ken:</strong> ${nu('8')} ${op('×')} ${nu('15')} = ${nu('120')}`,
            `<strong>Kies ʼn getal kleiner as ${nu('120')} vir die regterkant:</strong> byvoorbeeld, ${nu('100')}.`,
            `<strong>Skryf die getalsin:</strong> ${nu('8')} ${op('×')} ${nu('15')} ${eq('&gt;')} ${nu('100')}`,
            `<strong>Kontroleer:</strong> Bereken die linkerkant — ${nu('8')} ${op('×')} ${nu('15')} = ${nu('120')}. Is ${nu('120')} ${eq('&gt;')} ${nu('100')}? <span style="color:#16a34a;font-weight:700">Ja ✓</span> — die getalsin is <span style="color:#16a34a;font-weight:700">waar</span>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — true or false ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf waar of onwaar vir elke getalsin:\n\na) 8 × 25 = 200\nb) 450 ÷ 9 > 60\nc) 6 × 35 = 7 × 30',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × 25 = 200',
              correctAnswer: 'waar',
              explanation: 'Bereken: 8 × 25 = 200.\nDie linkerkant is gelyk aan die regterkant, dus is die getalsin waar ✓',
            },
            {
              label: 'b) 450 ÷ 9 > 60',
              correctAnswer: 'onwaar',
              explanation: 'Bereken: 450 ÷ 9 = 50.\nIs 50 > 60? Nee — 50 is kleiner as 60.\nDie korrekte simbool is <, nie >. Die getalsin is onwaar.',
            },
            {
              label: 'c) 6 × 35 = 7 × 30',
              correctAnswer: 'waar',
              explanation: 'Linkerkant: 6 × 35 = 210.\nRegterkant: 7 × 30 = 210.\nAlbei kante is gelyk aan 210, dus is die getalsin waar ✓',
            },
          ],
        },

        // ── Q2 Medium — write the correct symbol ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skryf die korrekte simbool (=, < of >) om elke getalsin waar te maak:\n\na) 9 × 45 ___ 400\nb) 720 ÷ 8 ___ 9 × 10\nc) 7 × 84 ___ 6 × 98',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 9 × 45 ___ 400',
              correctAnswer: '>',
              explanation: 'Bereken die linkerkant: 9 × 45 = 405.\nVergelyk: 405 > 400.\nDie korrekte simbool is >.',
            },
            {
              label: 'b) 720 ÷ 8 ___ 9 × 10',
              correctAnswer: '=',
              explanation: 'Linkerkant: 720 ÷ 8 = 90.\nRegterkant: 9 × 10 = 90.\nAlbei kante is gelyk aan 90, dus is die korrekte simbool =.',
            },
            {
              label: 'c) 7 × 84 ___ 6 × 98',
              correctAnswer: '=',
              explanation: 'Linkerkant: 7 × 84 = 588.\nRegterkant: 6 × 98 = 588.\nAlbei kante is gelyk aan 588, dus is die korrekte simbool =.',
            },
          ],
        },

        // ── Q3 Hard — reasoning: is Lerato correct? ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê 12 × 75 > 8 × 115 omdat 12 groter is as 8. Is sy korrek? Wys jou werk.',
          answer: 'Stap 1: Bereken 12 × 75 = 900.\nStap 2: Bereken 8 × 115 = 920.\nStap 3: Vergelyk: 900 < 920.\n\nLerato is verkeerd. 12 × 75 = 900, wat kleiner is as 8 × 115 = 920.\nJy kan nie getalsinne vergelyk deur net na een getal te kyk nie — jy moet eers albei kante bereken.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om te bepaal of ʼn getalsin waar of onwaar is deur albei kante te bereken en te vergelyk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OOP GETALSINNE EN ONTBREKENDE WAARDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'open-number-sentences',
      title: 'Oop Getalsinne en Ontbrekende Waardes',
      icon: '□',

      explanation:
        // ── Intro ─────────────────────────────────────────────────────────────
        `<p style="margin-bottom:14px;">ʼn <strong>Oop getalsin</strong> het ʼn ${mv('ontbrekende waarde')} wat deur ʼn ${mv('□')} (blokkie) of ʼn letter aangedui word. Jy moet die getal vind wat die sin waar maak. In Graad 5 is die ontbrekende waardes groter en gebruik ons <strong>inverse bewerkings</strong> met groter getalle om hulle te vind.</p>` +

        `<p style="margin-bottom:20px;padding:12px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;font-size:15px;">` +
        `Byvoorbeeld: &nbsp;${mv('□')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')} &nbsp; — vind die waarde van ${mv('□')}.` +
        `</p>` +

        // ── Colour key ────────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${mv('ontbrekende waarde □')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('bekende getalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('bewerkingsimbole')}</span>` +
        `</div>` +

        // ── Inverse operations heading ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:1.02em;">Inverse bewerkings</p>` +
        `<p style="margin-bottom:12px;font-size:14px;color:#374151;">ʼn Inverse bewerking is die <strong>teenoorgestelde</strong> van ʼn ander — dit maak ongedaan wat die eerste bewerking gedoen het. Ons gebruik die inverse om agteruit te werk en die ${mv('ontbrekende waarde')} te vind.</p>` +

        // ── Inverse pairs cards ───────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:22px;margin-bottom:8px;letter-spacing:4px;">${op('+')} &nbsp;↔&nbsp; ${op('−')}</p>` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:14px;">Optelling ↔ Aftrekking</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Hulle maak mekaar ongedaan. As ʼn sin ${op('+')} gebruik, vind ${mv('□')} met ${op('−')}, en andersom.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;text-align:center;">` +
        `<p style="font-size:22px;margin-bottom:8px;letter-spacing:4px;">${op('×')} &nbsp;↔&nbsp; ${op('÷')}</p>` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:6px;font-size:14px;">Vermenigvuldiging ↔ Deling</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Hulle maak mekaar ongedaan. As ʼn sin ${op('×')} gebruik, vind ${mv('□')} met ${op('÷')}, en andersom.</p>` +
        `</div>` +

        `</div>` +

        // ── Method heading ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om die ontbrekende waarde te vind</p>` +

        // ── 2 method steps ────────────────────────────────────────────────────
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Gebruik die inverse bewerking</strong> — kyk na die bewerking in die getalsin en pas die teenoorgestelde daarvan toe om die ${mv('□')} te isoleer en die waarde daarvan te bereken.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer deur terug te vervang</strong> — vervang ${mv('□')} met jou antwoord in die oorspronklike getalsin. As albei kante gelyk is, is jou antwoord korrek.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd jou antwoord</p>` +
        `<p style="margin:0;color:#1e3a8a;">Nadat jy ${mv('□')} gevind het, sit jou antwoord terug in die oorspronklike getalsin. As albei kante gelyk is, is jy klaar. Indien nie, gaan terug en kontroleer jou inverse berekening.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: addition → subtraction ────────────────────────────────
        {
          question: `Vind die ontbrekende waarde: ${mv('□')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('4 544')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die inverse:</strong> Die sin gebruik ${op('+')}, dus is die inverse ${op('−')}. Trek die bekende getal van die totaal af om ${mv('□')} te vind.`,
            `<strong>Stap 2 — Bereken:</strong> ${mv('□')} ${eq('=')} ${nu('8 000')} ${op('−')} ${nu('3 456')} ${eq('=')} ${nu('4 544')}`,
            `<strong>Kontroleer:</strong> ${nu('4 544')} ${op('+')} ${nu('3 456')} ${eq('=')} ${nu('8 000')} <span style="color:#16a34a;font-weight:700">✓</span> — korrek!`,
          ],
        },

        // ── Example 5: multiplication → division ─────────────────────────────
        {
          question: `Vind die ontbrekende waarde: ${nu('7')} ${op('×')} ${mv('□')} ${eq('=')} ${nu('4 284')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('612')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die inverse:</strong> Die sin gebruik ${op('×')}, dus is die inverse ${op('÷')}. Deel die produk deur die bekende faktor om ${mv('□')} te vind.`,
            `<strong>Stap 2 — Bereken:</strong> ${mv('□')} ${eq('=')} ${nu('4 284')} ${op('÷')} ${nu('7')} ${eq('=')} ${nu('612')}`,
            `<strong>Kontroleer:</strong> ${nu('7')} ${op('×')} ${nu('612')} ${eq('=')} ${nu('4 284')} <span style="color:#16a34a;font-weight:700">✓</span> — korrek!`,
          ],
        },

        // ── Example 6: division → multiplication ─────────────────────────────
        {
          question: `Vind die ontbrekende waarde: ${mv('□')} ${op('÷')} ${nu('12')} ${eq('=')} ${nu('144')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('1 728')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die inverse:</strong> Die sin gebruik ${op('÷')}, dus is die inverse ${op('×')}. Vermenigvuldig die kwosiënt met die deler om ${mv('□')} te vind.`,
            `<strong>Stap 2 — Bereken:</strong> ${mv('□')} ${eq('=')} ${nu('144')} ${op('×')} ${nu('12')} ${eq('=')} ${nu('1 728')}`,
            `<strong>Kontroleer:</strong> ${nu('1 728')} ${op('÷')} ${nu('12')} ${eq('=')} ${nu('144')} <span style="color:#16a34a;font-weight:700">✓</span> — korrek!`,
          ],
        },

        // ── Example 7: subtraction (□ is subtracted from total) ──────────────
        {
          question: `Vind die ontbrekende waarde: ${nu('9 450')} ${op('−')} ${mv('□')} ${eq('=')} ${nu('3 867')}`,
          answer: `${mv('□')} ${eq('=')} ${nu('5 583')}`,
          steps: [
            `<strong>Stap 1 — Identifiseer die inverse:</strong> ${mv('□')} word van ${nu('9 450')} afgetrek. Om ${mv('□')} te vind, trek die resultaat van die totaal af: ${nu('9 450')} ${op('−')} ${nu('3 867')}.`,
            `<strong>Stap 2 — Bereken:</strong> ${mv('□')} ${eq('=')} ${nu('9 450')} ${op('−')} ${nu('3 867')} ${eq('=')} ${nu('5 583')}`,
            `<strong>Kontroleer:</strong> ${nu('9 450')} ${op('−')} ${nu('5 583')} ${eq('=')} ${nu('3 867')} <span style="color:#16a34a;font-weight:700">✓</span> — korrek!`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — single missing value ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die ontbrekende waarde:\n□ + 2 347 = 6 000',
          answer: '3653',
          checkMode: 'auto',
          correctAnswer: '3653',
          explanation: 'Inverse bewerking: □ = 6 000 − 2 347 = 3 653.\nKontroleer: 3 653 + 2 347 = 6 000 ✓',
        },

        // ── Q5 Medium — three missing values ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die ontbrekende waarde in elke getalsin.\n\na) 8 × □ = 3 456\nb) □ ÷ 11 = 132\nc) 7 500 − □ = 2 847',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × □ = 3 456',
              correctAnswer: '432',
              explanation: 'Inverse bewerking: □ = 3 456 ÷ 8 = 432.\nKontroleer: 8 × 432 = 3 456 ✓',
            },
            {
              label: 'b) □ ÷ 11 = 132',
              correctAnswer: '1452',
              explanation: 'Inverse bewerking: □ = 132 × 11 = 1 452.\nKontroleer: 1 452 ÷ 11 = 132 ✓',
            },
            {
              label: 'c) 7 500 − □ = 2 847',
              correctAnswer: '4653',
              explanation: 'Inverse bewerking: □ = 7 500 − 2 847 = 4 653.\nKontroleer: 7 500 − 4 653 = 2 847 ✓',
            },
          ],
        },

        // ── Q6 Hard — fact family reasoning ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Die antwoord van ʼn vermenigvuldiging is 4 368. Een van die getalle is 12. Vind die ander getal en skryf die volledige getalsin. Skryf dan twee delingsfeite uit dieselfde feitefamilie.',
          answer: 'Stap 1: Vind die ander getal deur die inverse bewerking te gebruik:\n  4 368 ÷ 12 = 364\n\nStap 2: Volledige getalsin:\n  12 × 364 = 4 368\n\nStap 3: Twee delingsfeite uit dieselfde feitefamilie:\n  4 368 ÷ 12 = 364\n  4 368 ÷ 364 = 12\n\nDie ander getal is 364.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om ontbrekende waardes in oop getalsinne te vind deur inverse bewerkings met groter getalle te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — WOORDPROBLEME OMSKAKEL NA GETALSINNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'word-problems-number-sentences',
      title: 'Woordprobleme Omskakel na Getalsinne',
      icon: '→',

      explanation:
        `<p style="margin-bottom:14px;">Enige woordprobleem kan in ʼn <strong>getalsin</strong> omgeskakel word voordat jy dit oplos. Deur die ${mv('sleutelwoorde')} raak te sien, weet jy watter bewerking om te gebruik, dan skryf jy die ${nu('getalsin')} met ʼn blokkie vir die onbekende, en los dit uiteindelik op om die ${eq('oplossing')} te kry. Dit maak selfs ingewikkelde probleme baie makliker om te hanteer.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${mv('sleutelwoorde')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('getalsin')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelwoorde en die bewerkings wat hulle voorstel</p>` +

        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('+')} Optelling</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('som, totaal, altesaam, meer as, verhoog met, bygevoeg by')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('−')} Aftrekking</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('verskil, oor, oorblywend, minder as, verminder met, nadat sommige oor is')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('×')} Vermenigvuldiging</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('keer, produk, groepe van, elk, per, dieselfde hoeveelheid elke keer')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">${op('÷')} Deling</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">${mv('gelykop deel, verdeel, hoeveel elk, per, kwosiënt')}</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vyf-stap metode</p>` +

        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lees die probleem noukeurig</strong> — verstaan watter inligting jy gegee word en wat jy moet vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identifiseer die ${mv('sleutelwoorde')}</strong> — onderstreep die woorde wat jou vertel watter bewerking om te gebruik.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Skryf die ${nu('getalsin')}</strong> — vervang die onbekende met ʼn blokkie en skryf die volledige vergelyking.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Los op met inverse bewerkings</strong> — vind die waarde van die blokkie om die ${eq('oplossing')} te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer of die antwoord sinvol is</strong> — vervang terug in die getalsin en vra jouself of die antwoord redelik is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Skryf altyd die volledige ${nu('getalsin')} voordat jy begin bereken. ʼn Duidelike getalsin hou jou georganiseerd en help jou om foute te vermy.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `ʼn Skool het ${nu('4 800')} leerders. Nadat ${mv('sommige leerders vertrek het')} is daar ${nu('3 654')} ${mv('oor')}. Hoeveel leerders het vertrek?`,
          answer: `${eq('1 146')} leerders het vertrek`,
          steps: [
            `<strong>${mv('Sleutelwoorde')}:</strong> "${mv('nadat sommige leerders vertrek het')}" en "${mv('oor')}" — dit dui op aftrekking.`,
            `<strong>${nu('Getalsin')}:</strong> ${nu('4 800')} ${op('−')} ${mv('□')} ${eq('=')} ${nu('3 654')}`,
            `<strong>Inverse bewerking:</strong> ${mv('□')} ${eq('=')} ${nu('4 800')} ${op('−')} ${nu('3 654')} ${eq('=')} ${eq('1 146')}`,
            `<strong>Antwoord:</strong> ${eq('1 146')} leerders het vertrek.`,
            `<strong>Kontroleer:</strong> ${nu('4 800')} ${op('−')} ${eq('1 146')} ${eq('=')} ${nu('3 654')} <span style="color:#16a34a;font-weight:700">✓</span> — die antwoord is sinvol.`,
          ],
        },

        {
          question: `Thabo verdien ${mv('dieselfde bedrag elke week')}. Na ${nu('8')} weke het hy ${nu('R12 400')} verdien. Hoeveel verdien hy ${mv('per')} week?`,
          answer: `Thabo verdien ${eq('R1 550')} per week`,
          steps: [
            `<strong>${mv('Sleutelwoorde')}:</strong> "${mv('dieselfde bedrag elke week')}" en "${mv('per')}" — gelyke groepe dui op vermenigvuldiging. Ons moet die bedrag per groep vind, dus gebruik ons deling.`,
            `<strong>${nu('Getalsin')}:</strong> ${nu('8')} ${op('×')} ${mv('□')} ${eq('=')} ${nu('12 400')}`,
            `<strong>Inverse bewerking:</strong> ${mv('□')} ${eq('=')} ${nu('12 400')} ${op('÷')} ${nu('8')} ${eq('=')} ${eq('1 550')}`,
            `<strong>Antwoord:</strong> Thabo verdien ${eq('R1 550')} per week.`,
            `<strong>Kontroleer:</strong> ${nu('8')} ${op('×')} ${eq('1 550')} ${eq('=')} ${nu('12 400')} <span style="color:#16a34a;font-weight:700">✓</span> — die antwoord is sinvol.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Boks het ʼn aantal boeke. Nadat 234 meer bygevoeg is, is daar 891 boeke. Hoeveel boeke was daar aan die begin?\n\na) Skryf die getalsin.\nb) Los dit op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf die getalsin',
              checkMode: 'self',
              answer: '□ + 234 = 891',
            },
            {
              label: 'b) Los op',
              correctAnswer: '657',
              explanation: 'Inverse bewerking: □ = 891 − 234 = 657\nKontroleer: 657 + 234 = 891 ✓\nDaar was 657 boeke aan die begin.',
            },
          ],
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho verdien elke dag dieselfde bedrag. Na 9 dae het hy R4 185 verdien. Hoeveel verdien hy per dag?\n\na) Skryf die getalsin.\nb) Los op met inverse bewerkings.\nc) Kontroleer jou antwoord.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf die getalsin',
              checkMode: 'self',
              answer: '9 × □ = 4 185',
            },
            {
              label: 'b) Los op',
              correctAnswers: ['465', 'r465', '4185÷9=465'],
              explanation: 'Inverse bewerking: □ = 4 185 ÷ 9 = 465\nSipho verdien R465 per dag.',
            },
            {
              label: 'c) Kontroleer jou antwoord',
              checkMode: 'self',
              answer: '9 × 465 = 4 185 ✓ — die antwoord is korrek.',
            },
          ],
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Fabriek vervaardig 8 400 items per week en werk 6 dae. In ʼn spesiale week werk hulle 7 dae teen dieselfde daaglikse tempo.\n\na) Skryf ʼn getalsin om die daaglikse produksietempo te vind.\nb) Los dit op.\nc) Skryf ʼn getalsin vir die totale produksie in die spesiale week.\nd) Hoeveel meer items word in die spesiale week vervaardig?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Getalsin vir daaglikse tempo',
              checkMode: 'self',
              answer: '6 × □ = 8 400',
            },
            {
              label: 'b) Daaglikse produksietempo',
              correctAnswers: ['1400', '8400÷6=1400'],
              explanation: 'Inverse bewerking: □ = 8 400 ÷ 6 = 1 400 items per dag.',
            },
            {
              label: 'c) Getalsin vir spesiale week',
              checkMode: 'self',
              answer: '7 × 1 400 = 9 800',
            },
            {
              label: 'd) Ekstra items vervaardig',
              correctAnswers: ['1400', '9800-8400=1400'],
              explanation: 'Spesiale week − normale week: 9 800 − 8 400 = 1 400 meer items.',
            },
          ],
        },
      ],

      videoPlaceholder: '',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — EIENSKAPPE VAN BEWERKINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-of-operations',
      title: 'Eienskappe van Bewerkings',
      icon: '≡',

      explanation:
        `<p style="margin-bottom:14px;">Bewerkings het spesiale reëls wat <strong>eienskappe</strong> genoem word. Om hierdie eienskappe te ken help jou om berekeninge te herrangskik en te vereenvoudig sodat jy probleme vinniger kan oplos. Daar is drie hoofeienskappe in Graad 5.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${nu('Kommutatief')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${eq('Assosiatief')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${op('Distributief')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">${nu('Kommutatiewe Eienskap')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">Die volgorde van getalle verander nie die antwoord vir ${op('+')} en ${op('×')} nie.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;"><em>a</em> ${op('+')} <em>b</em> ${eq('=')} <em>b</em> ${op('+')} <em>a</em> &nbsp;&nbsp; en &nbsp;&nbsp; <em>a</em> ${op('×')} <em>b</em> ${eq('=')} <em>b</em> ${op('×')} <em>a</em></p>` +
        `<p style="font-size:14px;margin-bottom:8px;">Voorbeeld: &nbsp; ${nu('234')} ${op('+')} ${nu('567')} ${eq('=')} ${nu('567')} ${op('+')} ${nu('234')} &nbsp; en &nbsp; ${nu('25')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('8')} ${op('×')} ${nu('25')}</p>` +
        `<p style="font-size:13px;color:#dc2626;font-weight:600;margin:0;">⚠ Dit werk NIE vir aftrekking of deling nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 18px;margin-bottom:14px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:6px;">${eq('Assosiatiewe Eienskap')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">Die groepering van getalle verander nie die antwoord vir ${op('+')} en ${op('×')} nie.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;">(<em>a</em> ${op('+')} <em>b</em>) ${op('+')} <em>c</em> ${eq('=')} <em>a</em> ${op('+')} (<em>b</em> ${op('+')} <em>c</em>) &nbsp;&nbsp; en &nbsp;&nbsp; (<em>a</em> ${op('×')} <em>b</em>) ${op('×')} <em>c</em> ${eq('=')} <em>a</em> ${op('×')} (<em>b</em> ${op('×')} <em>c</em>)</p>` +
        `<p style="font-size:14px;margin:0;">Voorbeeld: &nbsp; (${nu('25')} ${op('×')} ${nu('4')}) ${op('×')} ${nu('3')} ${eq('=')} ${nu('25')} ${op('×')} (${nu('4')} ${op('×')} ${nu('3')}) ${eq('=')} ${nu('300')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:16px 18px;margin-bottom:20px;">` +
        `<p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:6px;">${op('Distributiewe Eienskap')}</p>` +
        `<p style="font-weight:600;color:#0f1f3d;margin-bottom:8px;font-size:15px;">Om ʼn getal te vermenigvuldig met ʼn groep getalle wat bymekaar getel is, gee dieselfde resultaat as om elkeen apart te vermenigvuldig.</p>` +
        `<p style="font-family:monospace;font-size:14px;margin-bottom:8px;padding:8px 12px;background:white;border-radius:6px;"><em>a</em> ${op('×')} (<em>b</em> ${op('+')} <em>c</em>) ${eq('=')} (<em>a</em> ${op('×')} <em>b</em>) ${op('+')} (<em>a</em> ${op('×')} <em>c</em>)</p>` +
        `<p style="font-size:14px;margin:0;">Voorbeeld: &nbsp; ${nu('6')} ${op('×')} (${nu('30')} ${op('+')} ${nu('4')}) ${eq('=')} ${nu('6')} ${op('×')} ${nu('30')} ${op('+')} ${nu('6')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('180')} ${op('+')} ${nu('24')} ${eq('=')} ${nu('204')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom is hierdie eienskappe belangrik?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Hierdie eienskappe laat jou toe om getalle te <strong>herrangskik en hergroepeer</strong> om berekeninge makliker te maak. Soek groeperings wat jou vriendelike getalle gee soos veelvoude van ${nu('10')} of ${nu('100')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Gebruik die ${eq('assosiatiewe eienskap')} om ${nu('25')} ${op('×')} ${nu('8')} ${op('×')} ${nu('4')} maklik te bereken.`,
          answer: `${nu('800')}`,
          steps: [
            `<strong>Soek na vriendelike groeperings:</strong> ${nu('25')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('100')} — ʼn mooi ronde getal. Groepeer hierdie twee eerste.`,
            `<strong>Pas die ${eq('assosiatiewe eienskap')} toe:</strong> (${nu('25')} ${op('×')} ${nu('4')}) ${op('×')} ${nu('8')} ${eq('=')} ${nu('100')} ${op('×')} ${nu('8')}`,
            `<strong>Bereken:</strong> ${nu('100')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('800')}`,
            `<strong>Antwoord: ${nu('800')}</strong> — baie makliker as ${nu('25')} ${op('×')} ${nu('8')} ${eq('=')} ${nu('200')}, dan ${nu('200')} ${op('×')} ${nu('4')} ${eq('=')} ${nu('800')}.`,
          ],
        },

        {
          question: `Gebruik die ${op('distributiewe eienskap')} om ${nu('7')} ${op('×')} ${nu('98')} te bereken.`,
          answer: `${nu('686')}`,
          steps: [
            `<strong>Breek die getal in dele:</strong> ${nu('98')} ${eq('=')} ${nu('100')} ${op('−')} ${nu('2')} — makliker getalle om mee te werk.`,
            `<strong>Pas die ${op('distributiewe eienskap')} toe:</strong> ${nu('7')} ${op('×')} ${nu('98')} ${eq('=')} ${nu('7')} ${op('×')} ${nu('100')} ${op('−')} ${nu('7')} ${op('×')} ${nu('2')}`,
            `<strong>Bereken elke deel:</strong> ${nu('7')} ${op('×')} ${nu('100')} ${eq('=')} ${nu('700')} &nbsp; en &nbsp; ${nu('7')} ${op('×')} ${nu('2')} ${eq('=')} ${nu('14')}`,
            `<strong>Kombineer:</strong> ${nu('700')} ${op('−')} ${nu('14')} ${eq('=')} ${nu('686')}`,
            `<strong>Antwoord: ${nu('686')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die kommutatiewe eienskap om 47 × 25 te herskryf en bereken die antwoord. Wys dat albei volgordes dieselfde resultaat gee.',
          answer: '1175',
          checkMode: 'auto',
          correctAnswers: ['1175', '25x47=1175', '47x25=1175'],
          explanation: 'Kommutatiewe eienskap: a × b = b × a, dus 47 × 25 = 25 × 47.\nBereken: 25 × 47 = 25 × 40 + 25 × 7 = 1 000 + 175 = 1 175.\nAlbei volgordes gee dieselfde antwoord: 1 175 ✓',
        },

        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Gebruik die assosiatiewe eienskap om elke berekening makliker te maak. Hergroepeer die getalle voordat jy bereken.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 25 × 6 × 4',
              correctAnswer: '600',
              explanation: 'Hergroepeer: (25 × 4) × 6 = 100 × 6 = 600\n25 × 4 gee die vriendelike getal 100, wat die res maklik maak.',
            },
            {
              label: 'b) (17 + 83) + 246',
              correctAnswer: '346',
              explanation: '17 + 83 = 100 (ʼn vriendelike ronde getal).\n100 + 246 = 346.',
            },
            {
              label: 'c) 5 × 8 × 20',
              correctAnswer: '800',
              explanation: 'Hergroepeer: (5 × 20) × 8 = 100 × 8 = 800\n5 × 20 gee die vriendelike getal 100.',
            },
          ],
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Gebruik die distributiewe eienskap om elk van die volgende te bereken. Wys jou werk.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 8 × 97',
              correctAnswers: ['776', '800-24=776', '8x100-8x3=800-24=776'],
              explanation: '8 × 97 = 8 × (100 − 3)\n= 8 × 100 − 8 × 3\n= 800 − 24\n= 776 ✓',
            },
            {
              label: 'b) 6 × 204',
              correctAnswers: ['1224', '1200+24=1224', '6x200+6x4=1200+24=1224'],
              explanation: '6 × 204 = 6 × (200 + 4)\n= 6 × 200 + 6 × 4\n= 1 200 + 24\n= 1 224 ✓',
            },
            {
              label: 'c) Waarom maak die distributiewe eienskap hierdie berekeninge makliker?',
              checkMode: 'self',
              answer: 'Die distributiewe eienskap breek ʼn moeilike getal op in maklike dele — veelvoude van 10 of 100 wat maklik is om mentaal te vermenigvuldig. Byvoorbeeld, 97 word 100 − 3, en 204 word 200 + 4.',
            },
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat die kommutatiewe, assosiatiewe en distributiewe eienskappe verduidelik met voorbeelde wat wys hoe hulle berekeninge makliker maak',
    },
  ],

  scoreMessages: [
    { minScore: 28, message: 'Volpunte! Jy het Getalsinne baasgeraak.' },
    { minScore: 21, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit baasgeraak het.' },
    { minScore: 14, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
