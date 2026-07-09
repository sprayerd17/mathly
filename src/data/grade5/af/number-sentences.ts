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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // Blokke: 0-3 Waar/Onwaar | 4-6 Kies die simbool | 7-10 Ontbrekende waarde |
    // 11-14 Woordprobleme | 15-17 Eienskappe | 18-19 Foutopsporing & multi-stap
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is hierdie getalsin waar of onwaar?\n6 × 120 = 720', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '6 × 120 = 720. Die linkerkant is gelyk aan die regterkant, dus is die getalsin waar ✓', answer: 'Waar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Skryf waar of onwaar: 450 − 180 = 260', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'Onwaar'], explanation: '450 − 180 = 270, nie 260 nie. Aangesien 270 ≠ 260, is die getalsin onwaar.', answer: 'Onwaar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'ʼn Winkelbord beweer: "9 × 36 is meer as 300." Is dit waar of onwaar?', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '9 × 36 = 324. Is 324 > 300? Ja ✓ — die bewering is waar.', answer: 'Waar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 840 ÷ 8 < 11 × 9 waar of onwaar?', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'Onwaar'], explanation: 'Linkerkant: 840 ÷ 8 = 105. Regterkant: 11 × 9 = 99. Is 105 < 99? Nee — 105 is groter as 99, dus is die getalsin onwaar.', answer: 'Onwaar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Skryf die korrekte simbool (=, < of >): 18 × 17 ___ 64 × 2 + 200', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 18 × 17 = 306. Regterkant: 64 × 2 + 200 = 128 + 200 = 328. Is 306 < 328? Ja ✓ — die korrekte simbool is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Voeg =, < of > in om dit waar te maak: 7 × 89 ___ 6 × 98', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 7 × 89 = 623. Regterkant: 6 × 98 = 588. Is 623 < 588? Nee — 623 is eintlik groter as 588, dus is die korrekte simbool >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Onderwyser skryf 612 ÷ 9 ___ 13 × 34 op die bord en vra die klas om die ontbrekende simbool in te vul. Wat kom in die gaping?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 612 ÷ 9 = 68. Regterkant: 13 × 34 = 442. Aangesien 68 < 442, is die korrekte simbool <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Vind die ontbrekende waarde:\n□ ÷ 5 = 483', correctAnswer: '2415', correctAnswers: ['2415', '2 415'], explanation: 'Die inverse van ÷ is ×. □ = 483 × 5 = 2 415.\nKontroleer: 2 415 ÷ 5 = 483 ✓', answer: '2 415' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Los op vir die ontbrekende waarde:\n8 × □ = 4 800', correctAnswer: '600', correctAnswers: ['600'], explanation: 'Die inverse van × is ÷. □ = 4 800 ÷ 8 = 600.\nKontroleer: 8 × 600 = 4 800 ✓', answer: '600' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Die blokkie staan hierdie keer aan die begin:\n□ − 340 = 125', correctAnswer: '465', correctAnswers: ['465'], explanation: 'Die inverse van aftrek van 340 is om 340 terug te tel. □ = 125 + 340 = 465.\nKontroleer: 465 − 340 = 125 ✓', answer: '465' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Een getalsin in ʼn feitefamilie is 63 × 8 = 504. Skryf ʼn delingsfeit uit dieselfde feitefamilie wat 63 as die antwoord het.', correctAnswer: '504÷8=63', correctAnswers: ['504÷8=63', '504/8=63', '504÷8'], explanation: 'ʼn Feitefamilie deel dieselfde drie getalle: 63, 8 en 504. Aangesien 63 × 8 = 504, is een ooreenstemmende delingsfeit 504 ÷ 8 = 63.', answer: '504 ÷ 8 = 63' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Naledi koop ʼn skooltas vir R340 en ʼn potloodsakkie. Altesaam spandeer sy R465. Skryf ʼn getalsin met ʼn blokkie vir die prys van die potloodsakkie, los dit dan op.', correctAnswer: '125', correctAnswers: ['125', 'r125', '340+□=465'], explanation: 'Getalsin: 340 + □ = 465.\nInverse bewerking: □ = 465 − 340 = 125.\nDie potloodsakkie kos R125.', answer: 'R125' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Kratjie hou dieselfde aantal lemoene in elke laag. Daar is 6 lae en 750 lemoene altesaam. Hoeveel lemoene is in een laag?', correctAnswer: '125', correctAnswers: ['125', '6×□=750'], explanation: 'Getalsin: 6 × □ = 750.\n"Dieselfde aantal...in elke laag" dui op gelyke groepe, dus deel ons om die vermenigvuldiging ongedaan te maak: □ = 750 ÷ 6 = 125.\nElke laag het 125 lemoene.', answer: '125 lemoene' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Bus ry elke dag dieselfde afstand. Na 18 dae het dit 720 km afgelê. Hoe ver ry dit per dag?', correctAnswer: '40', correctAnswers: ['40', '18×□=720'], explanation: 'Getalsin: 18 × □ = 720.\n"Dieselfde afstand...per dag" vertel ons om die waarde van een groep te vind, dus deel ons: □ = 720 ÷ 18 = 40.\nDie bus ry 40 km per dag.', answer: '40 km' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Zanele spaar elke week dieselfde bedrag. Na 6 weke het sy R450, en na 9 weke verwag sy R675 as sy teen dieselfde tempo bly spaar. Hoeveel spaar sy elke week, en pas R675 by daardie tempo?', correctAnswer: '75', correctAnswers: ['75', 'r75', 'ja'], explanation: 'Weeklikse tempo: 450 ÷ 6 = R75 per week.\nKontroleer vir 9 weke: 9 × 75 = 675.\nJa, R675 pas by die tempo van R75 per week.', answer: 'R75 per week; ja, R675 pas' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die kommutatiewe eienskap om 25 × 18 te bereken deur die volgorde om te ruil. Wat is die antwoord?', correctAnswer: '450', correctAnswers: ['450'], explanation: 'Kommutatiewe eienskap: a × b = b × a, dus 25 × 18 = 18 × 25.\n18 × 25 = 18 × 20 + 18 × 5 = 360 + 90 = 450.\nAlbei volgordes gee 450.', answer: '450' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die distributiewe eienskap om 47 × 99 te bereken. Wys die vriendelike-getal-uiteensetting.', correctAnswer: '4653', correctAnswers: ['4653'], explanation: '47 × 99 = 47 × (100 − 1) = 47 × 100 − 47 × 1 = 4 700 − 47 = 4 653.', answer: '4 653' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'ʼn Leerder wil 6 × 25 × 4 vinnig bereken. Watter twee getalle moet eers gegroepeer word deur die assosiatiewe eienskap te gebruik, en waarom maak dit die berekening makliker? Gee ook die finale antwoord.', answer: 'Groepeer 25 en 4 eerste: 25 × 4 = 100, ʼn vriendelike ronde getal.\nDan (25 × 4) × 6 = 100 × 6 = 600.\nOm 25 en 4 eerste te groepeer is makliker omdat hulle produk ʼn veelvoud van 100 is, wat maklik is om met enige ander getal te vermenigvuldig. Die finale antwoord is 600.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder beweer: "By 15 × 22, aangesien 15 < 18, moet 15 × 22 minder wees as 18 × 22 — en ek hoef nie eers iets te bereken nie." Evalueer of hierdie redenasie geldig is, en indien wel, verduidelik waarom dit werk sonder ʼn volledige berekening.', answer: 'Die redenasie is inderdaad geldig hier, maar die leerder moet steeds verstaan waarom. Wanneer twee positiewe getalle met dieselfde positiewe faktor (22 in hierdie geval) vermenigvuldig word, bly die ongelykheid tussen die ander faktore behoue: aangesien 15 < 18, volg dit dat 15 × 22 < 18 × 22. Dit werk omdat die vermenigvuldiging van albei kante van ʼn ongelykheid met dieselfde positiewe getal nie die rigting van die ongelykheid verander nie.\n\nHierdie redenasie werk egter net wanneer produkte vergelyk word wat ʼn gemeenskaplike faktor deel wat met dieselfde bedrag vermenigvuldig word. Dit sou NIE werk om byvoorbeeld 15 × 22 met 18 × 15 te vergelyk nie, omdat die getalle wat vermenigvuldig word aan elke kant verskil — jy sal albei kante moet bereken om seker te wees. In hierdie spesifieke geval, deur te kontroleer: 15 × 22 = 330 en 18 × 22 = 396, en inderdaad 330 < 396, wat die bewering bevestig — maar net omdat dieselfde faktor (22) aan albei kante voorkom.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Gemeenskapsaal vra dieselfde huurgeld vir elke funksie. In een maand is 8 funksies gehou en die saal het altesaam R4 800 verdien. In ʼn besiger maand het die saal funksies gehuisves en R6 000 verdien. Skryf ʼn getalsin om die fooi per funksie te vind, los dit op, gebruik dan daardie fooi (deur ʼn eienskap van bewerkings toe te pas om die werk te vereenvoudig) om te vind hoeveel funksies in die besiger maand gehou is. Verduidelik ten slotte waarom jou antwoord redelik is.', answer: 'Stap 1 — Vind die fooi per funksie met behulp van die eerste maand se syfers:\nGetalsin: 8 × □ = 4 800\n□ = 4 800 ÷ 8 = 600\nDie fooi per funksie is R600.\n\nStap 2 — Vind die aantal funksies in die besiger maand:\nGetalsin: 600 × □ = 6 000\nDeur die distributiewe eienskap te gebruik om te vereenvoudig: 600 × 10 = 6 000, dus □ = 10.\nKontroleer deur substitusie: 600 × 10 = 6 000 ✓\n\nStap 3 — Redelikheid:\n10 funksies is meer as die 8 funksies in die eerste maand, wat sin maak omdat die probleem sê dit was ʼn "besiger maand" en dit meer geld verdien het (R6 000 vergeleke met R4 800) teen dieselfde fooi per funksie. Die antwoord pas by die konteks van die probleem.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het waar/onwaar-getalsinne, simbole, ontbrekende waardes, woordprobleme en eienskappe van bewerkings baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // Blokke: 0-3 Waar/Onwaar | 4-6 Kies die simbool | 7-10 Ontbrekende waarde |
    // 11-14 Woordprobleme | 15-17 Eienskappe | 18-19 Foutopsporing & multi-stap
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Skryf waar of onwaar: 8 × 45 = 360', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '8 × 45 = 360. Die linkerkant is gelyk aan die regterkant, dus is die getalsin waar ✓', answer: 'Waar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is hierdie getalsin waar of onwaar?\n630 ÷ 9 = 68', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'Onwaar'], explanation: '630 ÷ 9 = 70, nie 68 nie. Aangesien 70 ≠ 68, is die getalsin onwaar.', answer: 'Onwaar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Sipho sê: "12 × 14 is minder as 170." Is hy korrek?', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '12 × 14 = 168. Is 168 < 170? Ja ✓ — Sipho is korrek.', answer: 'Waar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 930 − 540 > 15 × 16 waar of onwaar?', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: 'Linkerkant: 930 − 540 = 390. Regterkant: 15 × 16 = 240. Is 390 > 240? Ja ✓ — die getalsin is waar.', answer: 'Waar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Skryf die korrekte simbool (=, < of >): 13 × 19 ___ 450 ÷ 6', correctAnswer: '>', correctAnswers: ['>'], explanation: 'Linkerkant: 13 × 19 = 247. Regterkant: 450 ÷ 6 = 75. Is 247 > 75? Ja ✓ — die korrekte simbool is >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Voeg =, < of > in om dit waar te maak: 9 × 63 ___ 7 × 81', correctAnswer: '=', correctAnswers: ['='], explanation: 'Linkerkant: 9 × 63 = 567. Regterkant: 7 × 81 = 567. Albei kante is gelyk aan 567, dus is die korrekte simbool =.', answer: '=' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Vraestel lees: 144 ÷ 12 ___ 21 × 7. Watter simbool hoort in die gaping?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 144 ÷ 12 = 12. Regterkant: 21 × 7 = 147. Aangesien 12 < 147, is die korrekte simbool <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Vind die ontbrekende waarde:\n□ ÷ 9 = 35', correctAnswer: '315', correctAnswers: ['315'], explanation: 'Die inverse van ÷ is ×. □ = 35 × 9 = 315.\nKontroleer: 315 ÷ 9 = 35 ✓', answer: '315' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Los op vir die ontbrekende waarde:\n17 × □ = 391', correctAnswer: '23', correctAnswers: ['23'], explanation: 'Die inverse van × is ÷. □ = 391 ÷ 17 = 23.\nKontroleer: 17 × 23 = 391 ✓', answer: '23' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Watter waarde van □ maak 225 − □ = 87 waar?', correctAnswer: '138', correctAnswers: ['138'], explanation: 'Hier word □ van 225 afgetrek. Om □ te vind, trek die resultaat van die totaal af: □ = 225 − 87 = 138.\nKontroleer: 225 − 138 = 87 ✓', answer: '138' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Een getalsin in ʼn feitefamilie is 9 × 400 = 3 600. Skryf ʼn delingsfeit uit dieselfde feitefamilie wat 400 as die antwoord het.', correctAnswer: '3600÷9=400', correctAnswers: ['3600÷9=400', '3600/9=400', '3600÷9'], explanation: 'Die feitefamilie deel die getalle 9, 400 en 3 600. Aangesien 9 × 400 = 3 600, is die ooreenstemmende delingsfeit 3 600 ÷ 9 = 400.', answer: '3 600 ÷ 9 = 400' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Bakkery het brode gehad. Nadat 225 brode verkoop is, het 87 brode oorgebly. Skryf ʼn getalsin met ʼn blokkie vir die aantal brode aan die begin, los dit dan op.', correctAnswer: '312', correctAnswers: ['312', '□-225=87'], explanation: 'Getalsin: □ − 225 = 87.\nInverse bewerking: □ = 87 + 225 = 312.\nDaar was 312 brode aan die begin.', answer: '312 brode' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Groentetuin word in 6 gelyke persele verdeel. Saam gebruik die persele 612 meter heining. Hoeveel meter heining gebruik een perseel?', correctAnswer: '102', correctAnswers: ['102', '6×□=612'], explanation: 'Getalsin: 6 × □ = 612.\n"Gelyke persele" dui op gelyke groepe; om een groep te vind deel ons: □ = 612 ÷ 6 = 102.\nElke perseel gebruik 102 meter heining.', answer: '102 meter' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Tenk vul teen ʼn konstante tempo. Na 9 uur hou dit 3 600 liter, bereken uit ʼn tempo van 400 liter per uur. As dit teen daardie tempo nog 2 uur lank aanhou vul, hoeveel liter sal dit altesaam hou?', correctAnswer: '4400', correctAnswers: ['4400', '3600+800=4400'], explanation: 'Tempo-kontrole: 3 600 ÷ 9 = 400 liter per uur ✓ (pas by die gegewe tempo).\n2 addisionele ure: 2 × 400 = 800 liter.\nTotaal: 3 600 + 800 = 4 400 liter.', answer: '4 400 liter' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Skryfbehoeftewinkel verkoop penne in pakke. 12 pakke kos altesaam R168, en ʼn skool bestel genoeg pakke om presies R252 teen dieselfde prys per pak te spandeer. Hoeveel pakke het die skool bestel?', correctAnswer: '18', correctAnswers: ['18', '252÷14=18'], explanation: 'Prys per pak: 168 ÷ 12 = R14.\nAantal pakke bestel: 252 ÷ 14 = 18.\nDie skool het 18 pakke bestel.', answer: '18 pakke' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die assosiatiewe eienskap om 36 × 25 makliker te maak. Hergroepeer 36 as (4 × 9) sodat jy die 4 eers met die 25 kan paar. Wat is die antwoord?', correctAnswer: '900', correctAnswers: ['900'], explanation: '36 × 25 = (4 × 9) × 25 = 9 × (4 × 25) = 9 × 100 = 900.\nOm 4 met 25 te paar gee die vriendelike getal 100.', answer: '900' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die distributiewe eienskap om 14 × 99 te bereken. Wys die vriendelike-getal-uiteensetting.', correctAnswer: '1386', correctAnswers: ['1386'], explanation: '14 × 99 = 14 × (100 − 1) = 14 × 100 − 14 × 1 = 1 400 − 14 = 1 386.', answer: '1 386' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'Om 4 × 50 × 5 mentaal te bereken, watter twee faktore sou jy eers vermenigvuldig, en watter eienskap laat jou toe om die volgorde van groepering te kies? Gee die finale antwoord.', answer: 'Vermenigvuldig 4 en 5 eerste (of 50 met enige van 4 of 5, maar 4 × 5 = 20 is die vriendelikste paring hier aangesien 20 × 50 maklik is).\nDeur die assosiatiewe eienskap te gebruik, kan die groepering van faktore verander word sonder om die antwoord te beïnvloed: (4 × 5) × 50 = 20 × 50 = 1 000.\nDie finale antwoord is 1 000.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder wat 225 − □ = 87 oplos, skryf: "□ = 225 + 87 = 312, want om aftrekking ongedaan te maak moet jy altyd optel." Is hierdie werk korrek vir hierdie spesifieke getalsin? Vind die fout (indien enige) en gee die korrekte waarde van □.', answer: 'Hierdie werk is verkeerd vir hierdie getalsin. Die fout is dat die leerder 225 − □ = 87 dieselfde behandel het as □ − 225 = 87, maar hulle is verskillend! Hier word die blokkie VAN 225 afgetrek, nie andersom nie.\n\nOm □ in 225 − □ = 87 te vind, trek die resultaat van die beginwaarde af: □ = 225 − 87 = 138.\n\nKontroleer: 225 − 138 = 87 ✓ — dit bevestig dat 138 korrek is, nie 312 nie.\n\nDie leerder se reël "altyd optel om aftrekking ongedaan te maak" werk net wanneer die blokkie die eerste getal in die sin is (soos □ − 225 = 87, wat wel □ = 87 + 225 = 312 gee). Wanneer die blokkie van ʼn totaal afgetrek word, moet jy eerder die antwoord van die totaal aftrek.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Boer verkoop 12 kratte appels vir ʼn totaal van R168, almal teen dieselfde prys per kratjie. Die volgende week verhoog die boer die prys sodat 17 kratte nou vir ʼn totaal verkoop wat DIESELFDE prys-tot-kratte-verhouding opgeskaal behou, en pas die distributiewe eienskap toe deur die nuwe prys as 14 × (100 − 1) = R1 386 te skryf vir ʼn groot 99-krat groothandelbestelling teen die nuwe tarief per kratjie. Bereken die oorspronklike prys per kratjie, bevestig dat die nuwe prys per kratjie R14 is, en verduidelik of R1 386 vir 99 kratte teen R14 elk redelik is.', answer: 'Stap 1 — Oorspronklike prys per kratjie:\n168 ÷ 12 = R14 per kratjie.\n\nStap 2 — Bevestig nuwe prys:\nDie probleem stel dat die nuwe prys per kratjie ook R14 is (die tarief het in hierdie geval dieselfde gebly), wat ooreenstem met ons berekening.\n\nStap 3 — Kontroleer die 99-krat bestelling met die distributiewe eienskap:\n14 × 99 = 14 × (100 − 1) = 14 × 100 − 14 × 1 = 1 400 − 14 = 1 386.\n\nStap 4 — Redelikheid:\nR1 386 vir 99 kratte teen R14 elk is redelik omdat 99 baie naby aan 100 is, en 100 kratte teen R14 sou R1 400 kos. Aangesien ons een kratjie minder as 100 koop, behoort die totaal R14 minder as R1 400 te wees, wat presies R1 386 gee. Die antwoord pas by die patroon en die grootte van die betrokke getalle.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het waar/onwaar-getalsinne, simbole, ontbrekende waardes, woordprobleme en eienskappe van bewerkings baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // Blokke: 0-3 Waar/Onwaar | 4-6 Kies die simbool | 7-10 Ontbrekende waarde |
    // 11-14 Woordprobleme | 15-17 Eienskappe | 18-19 Foutopsporing & multi-stap
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', checkMode: 'auto', question: 'Skryf waar of onwaar: 7 × 60 = 420', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '7 × 60 = 420. Die linkerkant is gelyk aan die regterkant, dus is die getalsin waar ✓', answer: 'Waar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'Is hierdie getalsin waar of onwaar?\n560 ÷ 8 = 65', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'Onwaar'], explanation: '560 ÷ 8 = 70, nie 65 nie. Aangesien 70 ≠ 65, is die getalsin onwaar.', answer: 'Onwaar' },
        { difficulty: 'Easy', checkMode: 'auto', question: 'ʼn Plakkaat beweer: "13 × 13 is groter as 150." Kontroleer hierdie bewering — is dit waar of onwaar?', correctAnswer: 'waar', correctAnswers: ['waar', 'Waar'], explanation: '13 × 13 = 169. Is 169 > 150? Ja ✓ — die bewering is waar.', answer: 'Waar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Is 720 − 260 < 21 × 11 waar of onwaar?', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'Onwaar'], explanation: 'Linkerkant: 720 − 260 = 460. Regterkant: 21 × 11 = 231. Is 460 < 231? Nee, 460 is groter as 231, dus is die stelling onwaar.', answer: 'Onwaar' },
        { difficulty: 'Easy-Medium', checkMode: 'auto', question: 'Skryf die korrekte simbool (=, < of >): 14 × 17 ___ 532 ÷ 7', correctAnswer: '>', correctAnswers: ['>'], explanation: 'Linkerkant: 14 × 17 = 238. Regterkant: 532 ÷ 7 = 76. Is 238 > 76? Ja ✓ — die korrekte simbool is >.', answer: '>' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Voeg =, < of > in om dit waar te maak: 11 × 11 ___ 144 × 2', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 11 × 11 = 121. Regterkant: 144 × 2 = 288. Is 121 < 288? Ja ✓ — die korrekte simbool is <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Werkblad vra vir die ontbrekende simbool in 6 × 76 ___ 9 × 84. Wat kom in die gaping?', correctAnswer: '<', correctAnswers: ['<'], explanation: 'Linkerkant: 6 × 76 = 456. Regterkant: 9 × 84 = 756. Aangesien 456 < 756, is die korrekte simbool <.', answer: '<' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Vind die ontbrekende waarde:\n□ ÷ 12 = 72', correctAnswer: '864', correctAnswers: ['864'], explanation: 'Die inverse van ÷ is ×. □ = 72 × 12 = 864.\nKontroleer: 864 ÷ 12 = 72 ✓', answer: '864' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Los op vir die ontbrekende waarde:\n15 × □ = 435', correctAnswer: '29', correctAnswers: ['29'], explanation: 'Die inverse van × is ÷. □ = 435 ÷ 15 = 29.\nKontroleer: 15 × 29 = 435 ✓', answer: '29' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Watter waarde van □ maak 196 − □ = 58 waar?', correctAnswer: '138', correctAnswers: ['138'], explanation: 'Om □ te vind, trek die resultaat van die beginwaarde af: □ = 196 − 58 = 138.\nKontroleer: 196 − 138 = 58 ✓', answer: '138' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Een getalsin in ʼn feitefamilie is 1 080 ÷ 9 = 120. Skryf ʼn vermenigvuldigingsfeit uit dieselfde feitefamilie wat 1 080 as die antwoord het.', correctAnswer: '9×120=1080', correctAnswers: ['9×120=1080', '9x120=1080', '120×9=1080', '120x9=1080'], explanation: 'Die feitefamilie deel die getalle 9, 120 en 1 080. Aangesien 1 080 ÷ 9 = 120, is die ooreenstemmende vermenigvuldigingsfeit 9 × 120 = 1 080 (of ewe geldig 120 × 9 = 1 080).', answer: '9 × 120 = 1 080' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Spysenier het ʼn boks servette gehad. Nadat 196 servette by ʼn funksie gebruik is, het 58 servette oorgebly. Skryf ʼn getalsin met ʼn blokkie vir die beginaantal servette, los dit dan op.', correctAnswer: '254', correctAnswers: ['254', '□-196=58'], explanation: 'Getalsin: □ − 196 = 58.\nInverse bewerking: □ = 58 + 196 = 254.\nDaar was 254 servette aan die begin.', answer: '254 servette' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Liefdadigheidsorganisasie pak kospakkies gelykop in 12 bokse. Altesaam hou die bokse 864 pakkies. Hoeveel pakkies is in een boks?', correctAnswer: '72', correctAnswers: ['72', '12×□=864'], explanation: 'Getalsin: 12 × □ = 864.\n"Gelykop in bokse" dui op gelyke groepe, dus deel ons: □ = 864 ÷ 12 = 72.\nElke boks hou 72 pakkies.', answer: '72 pakkies' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Fietsryer ry elke dag dieselfde afstand vir ʼn week (7 dae) en lê altesaam 735 km af. As sy die volgende twee weke 11 dae lank teen dieselfde daaglikse afstand ry, hoe ver sal sy in daardie 11 dae reis?', correctAnswer: '1155', correctAnswers: ['1155', '105×11=1155'], explanation: 'Daaglikse afstand: 735 ÷ 7 = 105 km per dag.\nAfstand oor 11 dae: 105 × 11 = 1 155 km.', answer: '1 155 km' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'ʼn Drukkerymaatskappy vra dieselfde tarief per plakkaat. Om 15 plakkate te druk kos R435, en ʼn skool bestel genoeg plakkate om R1 015 teen dieselfde tarief te spandeer. Hoeveel plakkate het die skool bestel?', correctAnswer: '35', correctAnswers: ['35', '1015÷29=35'], explanation: 'Prys per plakkaat: 435 ÷ 15 = R29.\nAantal plakkate bestel: 1 015 ÷ 29 = 35.\nDie skool het 35 plakkate bestel.', answer: '35 plakkate' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die assosiatiewe eienskap om 11 × 300 makliker te maak deur 300 as (3 × 100) te hergroepeer. Wat is die antwoord?', correctAnswer: '3300', correctAnswers: ['3300', '3 300'], explanation: '11 × 300 = 11 × (3 × 100) = (11 × 3) × 100 = 33 × 100 = 3 300.', answer: '3 300' },
        { difficulty: 'Medium-Hard', checkMode: 'auto', question: 'Gebruik die distributiewe eienskap om 32 × 99 te bereken. Wys die vriendelike-getal-uiteensetting.', correctAnswer: '3168', correctAnswers: ['3168'], explanation: '32 × 99 = 32 × (100 − 1) = 32 × 100 − 32 × 1 = 3 200 − 32 = 3 168.', answer: '3 168' },
        { difficulty: 'Medium-Hard', checkMode: 'self', question: 'Om 25 × 4 × 17 mentaal te bereken, watter twee faktore moet eers gegroepeer word, en watter eienskap regverdig die verandering in groepering? Gee die finale antwoord.', answer: 'Groepeer 25 en 4 eerste, aangesien 25 × 4 = 100, ʼn vriendelike ronde getal.\nDie assosiatiewe eienskap laat toe dat die groepering van faktore verander word sonder om die antwoord te beïnvloed: (25 × 4) × 17 = 100 × 17 = 1 700.\nDie finale antwoord is 1 700.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Leerder beweer: "Aangesien 6 × 76 = 456 en 9 × 84 = 756, en 456 < 756, bewys dit dat wanneer die eerste faktor kleiner IS EN die tweede faktor kleiner is, die produk altyd kleiner sal wees." Evalueer hierdie algemene bewering — is dit altyd waar? Regverdig jou antwoord met redenasie of ʼn teenvoorbeeld.', answer: 'Die bewering geld toevallig in hierdie spesifieke voorbeeld, maar dit is NIE altyd waar as ʼn algemene reël vir alle getalle nie.\n\nWanneer twee produkte vergelyk word waar BEIDE faktore aan een kant kleiner as of gelyk is aan die ooreenstemmende faktore aan die ander kant (en alle getalle positief is), sal die produk met kleiner faktore inderdaad kleiner of gelyk wees — hierdie deel is eintlik ʼn ware wiskundige reël, soortgelyk aan die redenasie dat kleiner × kleiner ≤ groter × groter wanneer ooreenstemmende positiewe faktore vergelyk word.\n\nDie leerder se bewering is egter te los gestel as "die eerste faktor is kleiner EN die tweede faktor is kleiner" sonder om te spesifiseer dat dit vir BEIDE faktore in dieselfde rigting moet geld in vergelyking met die ander kant. As ʼn leerder dit verkeerdelik toepas om onverwante pare te vergelyk (byvoorbeeld, om 6 × 84 met 9 × 76 te vergelyk, waar 6 < 9 maar 84 > 76), kan die uitkoms enige kant toe gaan en moet bereken word: 6 × 84 = 504 en 9 × 76 = 684, dus geld 504 < 684 steeds hier, maar dit moet gekontroleer word, nie aangeneem word nie, wanneer die twee produkte nie ʼn duidelike "beide kleiner" of "beide groter" patroon deel nie. Kortom: bereken altyd om seker te wees, eerder as om op ʼn kortpad te vertrou wat maklik verkeerd toegepas kan word.' },
        { difficulty: 'Hard', checkMode: 'self', question: 'ʼn Skoolsaal kan teen R120 per uur gehuur word. Verlede maand is dit vir altesaam 9 uur gehuur en het R1 080 verdien. Hierdie maand verdien die saal R3 240 uit besprekings teen dieselfde uurlikse tarief. Bereken hoeveel uur die saal hierdie maand gehuur is, gebruik die distributiewe eienskap om jou antwoord te bevestig (deur die aantal ure as 30 − 3 te skryf), en verduidelik of hierdie maand se totaal redelik is in vergelyking met verlede maand.', answer: 'Stap 1 — Bevestig verlede maand se uurlikse tarief:\n1 080 ÷ 9 = R120 per uur ✓ (pas by die gegewe tarief).\n\nStap 2 — Vind hierdie maand se aantal ure teen dieselfde tarief:\n3 240 ÷ 120 = 27 uur.\n\nStap 3 — Bevestig met die distributiewe eienskap:\n120 × 27 = 120 × (30 − 3) = 120 × 30 − 120 × 3 = 3 600 − 360 = 3 240 ✓ — dit stem ooreen met die bedrag verdien, wat bevestig dat 27 uur korrek is.\n\nStap 4 — Redelikheid:\n27 uur is presies 3 keer verlede maand se 9 uur, en die verdienste (R3 240) is ook presies 3 keer verlede maand se R1 080. Dit maak saam sin — as die saal 3 keer soveel bespreek is teen dieselfde tarief, behoort dit 3 keer soveel geld te verdien. Die antwoord is redelik.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het waar/onwaar-getalsinne, simbole, ontbrekende waardes, woordprobleme en eienskappe van bewerkings baasgeraak.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 28, message: 'Volpunte! Jy het Getalsinne baasgeraak.' },
    { minScore: 21, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit baasgeraak het.' },
    { minScore: 14, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
