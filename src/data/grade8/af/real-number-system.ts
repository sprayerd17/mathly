import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (real number system roles) ────────────────────────────────
// natural numbers  → blue   (#2563eb)
// integers         → green  (#16a34a)
// rational numbers → orange (#ea580c)
// irrational       → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Getalle en die Reële Getallestelsel',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INTRODUCING THE NUMBER SYSTEMS (N, N0, Z, Q)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'introducing-number-systems',
      title: 'Bekendstelling van die Getallestelsels',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Getalle kan in groepe gesorteer word, genoem <strong>versamelings</strong>. Elke versameling bou voort op die vorige een, deur meer getalle by te voeg. Ons begin met die getalle wat ons vir tel gebruik, en voeg al hoe meer soorte getalle by totdat ons by die ${or('rasionale getalle')} kom — elke getal wat as ʼn breuk geskryf kan word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('natuurlike getalle (N)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('heelgetalle (Z)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rasionale getalle (Q)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier versamelings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Natuurlike Getalle (N)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die teltalle, wat by 1 begin: {1, 2, 3, 4, ...}. Dit is die eerste getalle waarmee ons ooit leer tel.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Hele Getalle (N₀)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die natuurlike getalle, plus 0: {0, 1, 2, 3, ...}. Die klein nulletjie in N₀ herinner ons daaraan dat nul bygevoeg is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Heelgetalle (Z)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Al die hele getalle saam met hul negatiewe: {..., −3, −2, −1, 0, 1, 2, 3, ...}. Nou kan getalle onder nul gaan.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rasionale Getalle (Q)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Enige getal wat as ʼn breuk a/b geskryf kan word, waar a en b heelgetalle is en b ≠ 0. Dit sluit alle heelgetalle in (bv. 5 = 5/1), gewone breuke (bv. 3/4), en desimale wat eindig of herhaal (bv. 0,5 of 0,333...).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: elke versameling pas binne die volgende (geneste versamelings)</p>` +
        `<p style="margin:0 0 8px 0;color:#1e3a8a;">Elke ${bl('natuurlike getal')} is ook ʼn hele getal. Elke hele getal is ook ʼn ${gr('heelgetal')}. Elke ${gr('heelgetal')} is ook ʼn ${or('rasionale getal')}. Dink daaraan soos bokse binne bokse:</p>` +
        `<p style="margin:0;color:#1e3a8a;font-family:monospace;font-size:14px;">${bl('N')} (1, 2, 3, ...) ⊂ N₀ (0, 1, 2, ...) ⊂ ${gr('Z')} (..., −1, 0, 1, ...) ⊂ ${or('Q')} (alle breuke a/b)</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="margin:0;color:#854d0e;font-size:14px;"><strong>Wenk:</strong> om te kyk of ʼn getal aan ʼn kleiner versameling behoort, vra "is dit ʼn teltal?" dan "is dit nul of positief?" dan "is dit ʼn hele getal (geen breukdeel nie)?" Werk van die grootste versameling (Q) af na die kleinste (N) wat nog pas.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Aan watter van hierdie versamelings behoort die getal 6: N, N₀, Z, Q?',
          answer: '6 behoort aan al vier versamelings: N, N₀, Z en Q',
          steps: [
            `Is 6 ʼn teltal? Ja — dus 6 ∈ ${bl('N')}.`,
            `Aangesien dit in N is, is dit outomaties ook in die hele getalle: 6 ∈ N₀.`,
            `Aangesien dit ʼn hele getal is, is dit outomaties ʼn ${gr('heelgetal')}: 6 ∈ Z.`,
            `Aangesien dit ʼn heelgetal is, kan dit as 6/1 geskryf word, dus is dit outomaties ${or('rasionaal')}: 6 ∈ Q.`,
            `<strong>Gevolgtrekking:</strong> 6 behoort aan N, N₀, Z en Q ✓`,
          ],
        },
        {
          question: 'Aan watter van hierdie versamelings behoort die getal −4: N, N₀, Z, Q?',
          answer: '−4 behoort slegs aan Z en Q',
          steps: [
            `Is −4 ʼn teltal (1, 2, 3, ...)? Nee — dit is negatief, dus −4 ∉ N.`,
            `Is −4 ʼn hele getal (0, 1, 2, ...)? Nee — hele getalle kan nie negatief wees nie, dus −4 ∉ N₀.`,
            `Is −4 ʼn ${gr('heelgetal')}? Ja — heelgetalle sluit negatiewe hele getalle in: −4 ∈ Z.`,
            `Is −4 ${or('rasionaal')}? Ja — dit kan as −4/1 geskryf word: −4 ∈ Q.`,
            `<strong>Gevolgtrekking:</strong> −4 behoort slegs aan Z en Q ✓`,
          ],
        },
        {
          question: 'Verduidelik waarom elke natuurlike getal ook ʼn rasionale getal is.',
          answer: 'Elke natuurlike getal kan as ʼn breuk oor 1 geskryf word, dus pas dit by die definisie van ʼn rasionale getal.',
          steps: [
            `ʼn ${bl('Natuurlike getal')} soos 9 is ʼn teltal.`,
            `ʼn ${or('Rasionale getal')} is enige getal wat as ʼn breuk a/b geskryf kan word, met b ≠ 0.`,
            `9 kan as 9/1 geskryf word, wat presies by hierdie definisie pas.`,
            `Omdat dit vir enige natuurlike getal werk, is die hele versameling N binne Q vervat. Dit is wat "geneste versamelings" beteken. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is 15 ʼn natuurlike getal?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          explanation: '15 is ʼn positiewe teltal, dus behoort dit aan die natuurlike getalle (N).',
        },
        {
          difficulty: 'Medium',
          question: 'Lys al die versamelings (N, N₀, Z, Q) waaraan die getal 0 behoort, en verduidelik waarom dit nie in elke versameling is nie.',
          answer: '0 behoort aan N₀, Z en Q, maar nie aan N nie, omdat die natuurlike getalle by 1 begin tel, nie by 0 nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Thandiwe sê elke heelgetal is ʼn natuurlike getal. Is sy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — byvoorbeeld −2 is ʼn heelgetal maar nie ʼn natuurlike getal nie, aangesien natuurlike getalle nie negatief kan wees nie. Dit is eerder andersom: elke natuurlike getal is ʼn heelgetal, nie elke heelgetal is ʼn natuurlike getal nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Nested boxes diagram showing natural numbers inside whole numbers, inside integers, inside rational numbers, labelled N, N0, Z and Q" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing natural numbers, whole numbers, integers and rational numbers and showing how each set fits inside the next" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INTRODUCING IRRATIONAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'introducing-irrational-numbers',
      title: 'Bekendstelling van Irrasionale Getalle',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">Tot dusver was elke getal wat ons teëgekom het ${or('rasionaal')} — dit kon as ʼn breuk a/b geskryf word. Maar daar is nog ʼn soort getal wat <strong>nie</strong> as enige presiese breuk geskryf kan word nie: die ${re('irrasionale getalle')}. Dit is ʼn splinternuwe idee in Graad 8!</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rasionaal (pas in ʼn breuk)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrasionaal (geen presiese breuk nie)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wat maak ʼn getal irrasionaal?</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="margin:0;color:#7f1d1d;">ʼn ${re('Irrasionale getal')} is ʼn getal waarvan die desimale vorm <strong>vir ewig</strong> voortgaan, met syfers wat <strong>nooit in ʼn herhalende patroon inskik nie</strong>. Omdat dit nooit herhaal of eindig nie, is dit onmoontlik om dit as ʼn presiese breuk a/b te skryf.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Klassieke voorbeelde</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">√2</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 1,41421356... 2 is nie ʼn volkome vierkant nie, dus eindig of herhaal sy vierkantswortel nooit.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">√3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 1,73205080... 3 is ook nie ʼn volkome vierkant nie, dus is √3 ook irrasionaal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">π (pi)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 3,14159265... Pi se desimale syfers eindig nooit en herhaal nooit, al rond ons dit dikwels af na 3,14.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wees versigtig! Nie elke vierkantswortel is irrasionaal nie</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="margin:0 0 8px 0;color:#7c2d12;">As die getal onder die vierkantswortelteken ʼn <strong>volkome vierkant</strong> is (1, 4, 9, 16, 25, 36, ...), vereenvoudig die vierkantswortel na ʼn hele getal — en hele getalle is altyd ${or('rasionaal')}.</p>` +
        `<p style="margin:0;color:#7c2d12;">${or('√4 = 2')} (rasionaal) — maar ${re('√5 = 2,2360679...')} (irrasionaal, aangesien 5 nie ʼn volkome vierkant is nie). ${or('√9 = 3')} (rasionaal) — maar ${re('√10 = 3,1622776...')} (irrasionaal, aangesien 10 nie ʼn volkome vierkant is nie).</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn desimaal te toets: rasionaal of irrasionaal?</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Eindig die desimaal (stop dit)? Byvoorbeeld 0,6 of 0,125. Dan is dit ${or('rasionaal')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Herhaal die desimaal in ʼn duidelike patroon vir ewig? Byvoorbeeld 0,333... of 0,454545... Dan is dit steeds ${or('rasionaal')} (0,333... = 1/3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Gaan die desimaal vir ewig voort met <strong>geen herhalende patroon</strong> heeltemal nie? Dan is dit ${re('irrasionaal')}.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Is √2 rasionaal of irrasionaal?',
          answer: `√2 is ${re('irrasionaal')}`,
          steps: [
            `Kontroleer: is 2 ʼn volkome vierkant (1, 4, 9, 16, ...)? Nee.`,
            `Aangesien 2 nie ʼn volkome vierkant is nie, vereenvoudig √2 nie na ʼn hele getal nie.`,
            `Sy desimale waarde is 1,41421356..., wat vir ewig voortgaan sonder ʼn herhalende patroon.`,
            `<strong>Gevolgtrekking:</strong> √2 is ${re('irrasionaal')} ✓`,
          ],
        },
        {
          question: 'Is √9 rasionaal of irrasionaal?',
          answer: `√9 is ${or('rasionaal')}, want √9 = 3`,
          steps: [
            `Kontroleer: is 9 ʼn volkome vierkant? Ja — 3 × 3 = 9.`,
            `Dus vereenvoudig √9 presies na die hele getal 3.`,
            `3 kan as die breuk 3/1 geskryf word, dus is dit ${or('rasionaal')}.`,
            `<strong>Gevolgtrekking:</strong> √9 is ${or('rasionaal')}, NIE irrasionaal nie, al bevat dit ʼn vierkantswortelteken ✓`,
          ],
        },
        {
          question: 'Is 0,333... (herhalend) rasionaal of irrasionaal? Verduidelik deur die desimaaltoets te gebruik.',
          answer: `0,333... is ${or('rasionaal')}`,
          steps: [
            `Kyk na die desimaal: die syfer 3 herhaal vir ewig in ʼn duidelike, voorspelbare patroon.`,
            `ʼn Herhalende desimaal (selfs een wat nooit tegnies "eindig" nie) kan altyd as ʼn presiese breuk geskryf word: 0,333... = 1/3.`,
            `Omdat dit as ʼn breuk geskryf kan word, is dit ${or('rasionaal')} — herhaal is nie dieselfde as irrasionaal nie.`,
            `<strong>Gevolgtrekking:</strong> 0,333... is ${or('rasionaal')}, omdat dit in ʼn patroon herhaal ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is √4 rasionaal of irrasionaal?',
          answer: 'rasionaal',
          checkMode: 'auto',
          correctAnswer: 'rasionaal',
          explanation: '√4 = 2, wat ʼn hele getal is. Aangesien 4 ʼn volkome vierkant is, vereenvoudig sy vierkantswortel na ʼn rasionale getal.',
        },
        {
          difficulty: 'Medium',
          question: 'Is √5 rasionaal of irrasionaal?',
          answer: 'irrasionaal',
          checkMode: 'auto',
          correctAnswer: 'irrasionaal',
          explanation: '5 is nie ʼn volkome vierkant nie, dus kan √5 nie na ʼn hele getal vereenvoudig word nie. Sy desimaal, 2,2360679..., gaan vir ewig voort sonder ʼn herhalende patroon, dus is dit irrasionaal.',
        },
        {
          difficulty: 'Hard',
          question: 'Karabo sê 0,333... kan nie rasionaal wees nie, omdat die desimaal nooit eindig nie. Is sy korrek? Verduidelik wat werklik bepaal of ʼn desimaal rasionaal of irrasionaal is.',
          answer: 'Nee — ʼn desimaal is rasionaal as dit eindig OF in ʼn patroon herhaal, selfs al eindig dit nooit tegnies nie. 0,333... herhaal die syfer 3 vir ewig, dus is dit rasionaal en gelyk aan 1/3. Slegs desimale wat vir ewig voortgaan sonder ʼn herhalende patroon is irrasionaal.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing perfect squares like 4, 9, 16, 25 whose square roots are rational whole numbers, against non-perfect squares like 2, 3, 5, 7 whose square roots are irrational" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing irrational numbers for the first time, using pi and square roots of non-perfect squares as examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CLASSIFYING NUMBERS INTO THE CORRECT SET(S)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'classifying-numbers',
      title: 'Klassifisering van Getalle in die Korrekte Versamelings',
      icon: '🗂️',
      explanation:
        `<p style="margin-bottom:16px;">Noudat ons al vyf groepe ken — ${bl('natuurlike getalle (N)')}, hele getalle (N₀), ${gr('heelgetalle (Z)')}, ${or('rasionale getalle (Q)')}, en ${re('irrasionale getalle')} — kan ons oefen om enige gegewe getal in die versameling(s) waaraan dit behoort te sorteer. Sommige getalle behoort aan verskeie versamelings gelyktydig (soos 7, wat N, N₀, Z en Q is), terwyl irrasionale getalle nooit aan enige van die ander vier versamelings behoort nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('N / N0')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Z')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Q')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrasionaal')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Stap-vir-stap klassifikasie-kontrolelys</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vereenvoudig eers die getal indien moontlik (bv. werk enige vierkantswortels uit). Kontroleer dan: gaan die desimaal vir ewig voort met <strong>geen herhalende patroon</strong>? Indien ja, is dit ${re('irrasionaal')} en behoort dit NIE aan N, N0, Z of Q nie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Indien dit nie irrasionaal is nie, behoort dit aan ${or('Q')} (rasionaal). Elke breuk, eindigende desimaal en herhalende desimaal is hier.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Is dit ook ʼn hele getal (geen breuk-/desimale deel nie)? Indien ja, is dit ook ʼn ${gr('heelgetal (Z)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Is dit nul of positief? Indien ja, is dit ook ʼn hele getal (N0). Is dit positief (nie nul nie)? Indien ja, is dit ook ʼn ${bl('natuurlike getal (N)')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="margin:0;color:#854d0e;font-size:14px;"><strong>Wenk:</strong> vereenvoudig altyd vierkantswortels voordat jy klassifiseer! √16 mag met die eerste oogopslag "irrasionaal" lyk, maar dit vereenvoudig na 4, wat N, N0, Z en Q is. Los ʼn vierkantswortel eers as ${re('irrasionaal')} sodra jy bevestig het dat die getal onder die wortel nie ʼn volkome vierkant is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Klassifiseer elk van die volgende getalle in al die versamelings waaraan hulle behoort: 8, −3, 3/4, √16, √7.',
          answer: '8: N, N0, Z, Q. −3: Z, Q. 3/4: Q. √16 = 4: N, N0, Z, Q. √7: irrasionaal.',
          steps: [
            `<strong>8</strong>: ʼn positiewe teltal sonder ʼn breukdeel, dus is dit ${bl('N')}, N0, ${gr('Z')} en ${or('Q')}.`,
            `<strong>−3</strong>: negatief, dus nie N of N0 nie. Dit is ʼn hele getal met ʼn negatiewe teken, dus is dit ${gr('Z')} en ${or('Q')} (= −3/1).`,
            `<strong>3/4</strong>: reeds ʼn breuk wat nie ʼn hele getal is nie, dus is dit slegs ${or('Q')}.`,
            `<strong>√16</strong>: vereenvoudig eers — √16 = 4. Klassifiseer nou 4: dit is ${bl('N')}, N0, ${gr('Z')} en ${or('Q')}.`,
            `<strong>√7</strong>: 7 is nie ʼn volkome vierkant nie, dus √7 = 2,6457513... (nie-eindigend, nie-herhalend). Dit is ${re('irrasionaal')} en behoort aan geeneen van N, N0, Z, Q nie.`,
          ],
        },
        {
          question: 'Zanele sê die getal 0 kan nie aan enige versameling behoort nie, omdat dit "niks" is. Klassifiseer 0 korrek.',
          answer: '0 behoort aan N0, Z en Q, maar nie aan N nie.',
          steps: [
            `0 is nie ʼn teltal nie, aangesien tel by 1 begin, dus 0 ∉ ${bl('N')}.`,
            `0 word by definisie by die hele getalle ingesluit, dus 0 ∈ N0.`,
            `0 is ook ʼn ${gr('heelgetal')} (dit sit in die middel van die heelgetalle), dus 0 ∈ Z.`,
            `0 kan as 0/1 geskryf word, dus 0 ∈ ${or('Q')} (rasionaal).`,
            `Zanele is verkeerd — 0 is ʼn baie belangrike getal en behoort aan drie van die vier getalversamelings. ✓`,
          ],
        },
        {
          question: 'Klassifiseer √20 volledig en toon jou redenasie.',
          answer: `√20 is ${re('irrasionaal')}`,
          steps: [
            `Kontroleer: is 20 ʼn volkome vierkant? Die naaste volkome vierkante is 16 (4²) en 25 (5²) — 20 is nie een van hulle nie.`,
            `Aangesien 20 nie ʼn volkome vierkant is nie, kan √20 nie na ʼn hele getal vereenvoudig word nie.`,
            `Sy desimale waarde is 4,4721359..., wat nie-eindigend en nie-herhalend is.`,
            `<strong>Gevolgtrekking:</strong> √20 is ${re('irrasionaal')}, en behoort nie aan N, N0, Z of Q nie ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Klassifiseer die getal 5. Aan watter versamelings behoort dit: N, N0, Z, Q, of irrasionaal?',
          answer: 'N, N0, Z en Q — dit is ʼn positiewe hele teltal, dus behoort dit aan al vier die rasionaal-verwante versamelings.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Klassifiseer √36. Aan watter versamelings behoort dit?',
          answer: 'N, N0, Z en Q',
          checkMode: 'auto',
          correctAnswer: 'N, N0, Z en Q',
          explanation: '√36 = 6, aangesien 36 ʼn volkome vierkant is (6 × 6 = 36). 6 is ʼn positiewe hele getal, dus behoort dit aan N, N0, Z en Q — dit is rasionaal, nie irrasionaal nie.',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Getallelyn toon −6, 0, 2/5, √10 en 9. Sorteer elke getal in elke versameling waaraan dit behoort (N, N0, Z, Q, irrasionaal), en verduidelik waarom √10 anders is as die res.',
          answer: '−6: Z, Q. 0: N0, Z, Q. 2/5: Q. 9: N, N0, Z, Q. √10 is irrasionaal (10 is nie ʼn volkome vierkant nie, dus eindig of herhaal sy desimaal 3,16227766... nooit), dus behoort dit glad nie aan N, N0, Z of Q nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Sorting diagram or flowchart showing a list of example numbers being sorted step by step into N, N0, Z, Q or irrational using the classification checklist" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through several examples of classifying given numbers into natural, whole, integer, rational or irrational" />',
    },
  ],
  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het ʼn stewige grondslag in die reële getallestelsel.' },
      { minPercent: 75, message: 'Goeie werk! Jy verstaan die meeste van die getalversamelings — hersien enigiets wat jy gemis het en probeer weer.' },
      { minPercent: 55, message: 'Goeie poging! Gaan weer deur die studiegids, veral die klassifikasie-kontrolelys, en probeer weer.' },
      { minPercent: 0, message: 'Hou aan oefen — werk weer deur die gids, met fokus op die verskil tussen rasionale en irrasionale getalle.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! Jy het ʼn stewige grondslag in die reële getallestelsel.' },
    { minScore: 7, message: 'Goeie werk! Jy verstaan die meeste van die getalversamelings — hersien enigiets wat jy gemis het en probeer weer.' },
    { minScore: 5, message: 'Goeie poging! Gaan weer deur die studiegids, veral die klassifikasie-kontrolelys, en probeer weer.' },
    { minScore: 0, message: 'Hou aan oefen — werk weer deur die gids, met fokus op die verskil tussen rasionale en irrasionale getalle.' },
  ],
}
