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
        'Geneste-reghoeke-diagram wat N binne N0 binne Z binne Q wys, elkeen gemerk met sy naam en ʼn kort voorbeeld',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="10" width="240" height="180" rx="10" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="20" y="26" font-size="10" font-weight="700" fill="#ea580c">Q — rasionale getalle</text>` +
        `<text x="20" y="38" font-size="8" fill="#ea580c">bv. 3/4, 0,5</text>` +
        `<rect x="40" y="44" width="180" height="138" rx="8" fill="none" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="50" y="60" font-size="10" font-weight="700" fill="#16a34a">Z — heelgetalle</text>` +
        `<text x="50" y="72" font-size="8" fill="#16a34a">bv. −3, −1</text>` +
        `<rect x="70" y="78" width="120" height="96" rx="8" fill="none" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="80" y="94" font-size="9.5" font-weight="700" fill="#374151">N0 — hele getalle</text>` +
        `<text x="80" y="106" font-size="8" fill="#374151">bv. 0</text>` +
        `<rect x="100" y="112" width="60" height="54" rx="6" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="130" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">N</text>` +
        `<text x="130" y="154" text-anchor="middle" font-size="7.5" fill="#2563eb">1, 2, 3...</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat natuurlike getalle, heelgetalle, gehele getalle en rasionale getalle bekendstel en wys hoe elke versameling binne die volgende pas',
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
        'Getallelyn van 0 tot 4 wat wys hoe √4 en √9 presies op heelgetal-merke val (rasionaal), terwyl √5 tussen 2 en 3 val sonder ʼn presiese posisie (irrasionaal)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="55" x2="280" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,55 22,50 22,60" fill="#0f1f3d"/>` +
        `<polygon points="286,55 278,50 278,60" fill="#0f1f3d"/>` +
        `<line x1="20" y1="50" x2="20" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="80" y1="50" x2="80" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="50" x2="140" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="200" y1="50" x2="200" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="260" y1="50" x2="260" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="20" y="75" text-anchor="middle" font-size="10" fill="#6b7280">0</text>` +
        `<text x="80" y="75" text-anchor="middle" font-size="10" fill="#6b7280">1</text>` +
        `<text x="140" y="75" text-anchor="middle" font-size="10" fill="#6b7280">2</text>` +
        `<text x="200" y="75" text-anchor="middle" font-size="10" fill="#6b7280">3</text>` +
        `<text x="260" y="75" text-anchor="middle" font-size="10" fill="#6b7280">4</text>` +
        `<circle cx="140" cy="55" r="5" fill="#ea580c"/>` +
        `<text x="140" y="35" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c">√4 = 2</text>` +
        `<circle cx="200" cy="55" r="5" fill="#ea580c"/>` +
        `<text x="200" y="35" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c">√9 = 3</text>` +
        `<circle cx="154" cy="55" r="5" fill="white" stroke="#dc2626" stroke-width="2"/>` +
        `<line x1="154" y1="61" x2="154" y2="93" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>` +
        `<text x="154" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">√5 ≈ 2,24</text>` +
        `<text x="154" y="118" text-anchor="middle" font-size="7.5" fill="#dc2626">(tussen 2 en 3 — irrasionaal)</text>` +
        `<text x="150" y="134" text-anchor="middle" font-size="8" fill="#6b7280">Volkome vierkante val op heelgetalle — ander nie</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat irrasionale getalle vir die eerste keer bekendstel, met pi en vierkantswortels van nie-volkome vierkante as voorbeelde',
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

      videoPlaceholder:
        'Kort video wat verskeie voorbeelde deurwerk van die klassifisering van gegewe getalle in natuurlik, heel, geheel, rasionaal of irrasionaal',
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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Klassifisering van getalle volgens tipe (N/N0/Z/Q) | 4-7
    // Rasionaal vs irrasionaal vanaf desimale (eindigend/herhalend vs
    // nie-herhalend) | 8-11 Wortelgetalle — rasionaal of irrasionaal |
    // 12-14 Volledige multi-versameling klassifikasie | 15-17
    // Vergelyking/rangskikking oor die hiërargie | 18-19 Foutopsporing /
    // multi-stap redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Klassifisering van getalle volgens tipe (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 12 ʼn natuurlike getal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: '12 is ʼn positiewe teltal, dus behoort dit aan die natuurlike getalle (N). ✓' },
        { difficulty: 'Easy', question: 'Is −8 ʼn natuurlike getal? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee'], explanation: 'Natuurlike getalle is die positiewe teltalle {1, 2, 3, ...}. −8 is negatief, dus is dit NIE ʼn natuurlike getal nie. ✓' },
        { difficulty: 'Easy', question: 'Aan watter versameling behoort 0 wat natuurlike getalle (N) nie insluit nie: hele getalle (N0) of slegs heelgetalle?', checkMode: 'auto', correctAnswer: 'hele getalle', correctAnswers: ['hele getalle', 'N0', 'hele getalle (N0)'], explanation: 'Hele getalle (N0) is die natuurlike getalle plus 0: {0, 1, 2, 3, ...}. Natuurlike getalle begin by 1 tel, dus is 0 in N0 maar nie in N nie. ✓' },
        { difficulty: 'Easy', question: 'Is −5 ʼn heelgetal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: 'Heelgetalle (Z) sluit al die hele getalle saam met hul negatiewe in: {..., −2, −1, 0, 1, 2, ...}. −5 pas hierdie definisie. ✓' },

        // Blok 2 — Rasionaal vs irrasionaal vanaf desimale (eindigend/herhalend vs nie-herhalend)
        { difficulty: 'Easy-Medium', question: 'Is 0,375 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '0,375 is ʼn eindigende desimaal (dit stop), dus kan dit as ʼn presiese breuk geskryf word: 0,375 = 3/8. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'Die desimaal 0,454545... herhaal die paar "45" vir ewig. Is hierdie getal rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: 'ʼn Desimaal wat in ʼn duidelike patroon vir ewig herhaal, is steeds rasionaal, al eindig dit nooit tegnies nie. 0,454545... = 5/11, dus is dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Getal het die desimale waarde 0,12112111211112..., waar die aantal 1\'e tussen elke 2 al hoe meer word. Is hierdie getal rasionaal of irrasionaal? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Irrasionaal. Die desimaal eindig nooit nie en, alhoewel dit ʼn mate van struktuur het, sluit die syfers nooit in ʼn vaste herhalende patroon in nie (die gapings van 1\'e word al hoe groter), dus kan dit nie as ʼn presiese breuk geskryf word nie.' },
        { difficulty: 'Medium', question: 'Sipho sê elke desimaal wat "vir ewig voortgaan" moet irrasionaal wees. Verduidelik waarom dit nie altyd waar is nie, deur 0,222... as voorbeeld te gebruik.', checkMode: 'self', answer: 'Sipho is verkeerd. ʼn Desimaal is slegs irrasionaal as dit vir ewig voortgaan SONDER om ooit in ʼn patroon te herhaal. 0,222... gaan vir ewig voort, maar die syfer 2 herhaal elke keer, dus is dit eintlik rasionaal — dit is gelyk aan 2/9. Slegs nie-eindigende, nie-herhalende desimale is irrasionaal.' },

        // Blok 3 — Wortelgetalle: rasionaal of irrasionaal
        { difficulty: 'Medium', question: 'Is √16 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '16 is ʼn volkome vierkant (4 × 4 = 16), dus √16 = 4, ʼn hele getal. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Medium', question: 'Is √17 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], explanation: '17 is nie ʼn volkome vierkant nie (die naaste volkome vierkante is 16 en 25), dus kan √17 nie na ʼn hele getal vereenvoudig word nie. Sy desimaal, 4,1231056..., is nie-eindigend en nie-herhalend, dus is dit irrasionaal. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √49: is dit rasionaal of irrasionaal, en waarna vereenvoudig dit?', checkMode: 'self', answer: 'Rasionaal. 49 is ʼn volkome vierkant (7 × 7 = 49), dus √49 = 7, wat ʼn hele getal is en dus rasionaal.' },
        { difficulty: 'Medium-Hard', question: 'Tussen √40 en √50 lyk een meer "irrasionaal" as die ander, maar klassifiseer BEIDE getalle as rasionaal of irrasionaal, en toon jou redenasie vir elkeen.', checkMode: 'self', answer: 'Albei is irrasionaal. 40 is nie ʼn volkome vierkant nie (tussen 36 = 6² en 49 = 7²), dus √40 = 6,3245553... is nie-eindigend en nie-herhalend. 50 is ook nie ʼn volkome vierkant nie (tussen 49 = 7² en 64 = 8²), dus √50 = 7,0710678... is ook nie-eindigend en nie-herhalend. Geeneen vereenvoudig na ʼn hele getal nie, dus is albei irrasionaal.' },

        // Blok 4 — Volledige multi-versameling klassifikasie
        { difficulty: 'Medium', question: 'Klassifiseer die getal 14 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '14 is ʼn positiewe hele teltal sonder ʼn breukdeel, dus behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √81 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '81 is ʼn volkome vierkant (9 × 9 = 81), dus √81 = 9. Aangesien 9 ʼn positiewe hele getal is, behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn toon −7, 0, 5/8, √29 en 20. Sorteer elke getal in elke versameling waaraan dit behoort (N, N0, Z, Q, irrasionaal), en verduidelik waarom √29 in geeneen van N, N0, Z of Q pas nie.', checkMode: 'self', answer: '−7: Z, Q. 0: N0, Z, Q. 5/8: slegs Q. 20: N, N0, Z, Q. √29 is irrasionaal omdat 29 nie ʼn volkome vierkant is nie (tussen 25 = 5² en 36 = 6²), dus eindig of herhaal sy desimaal, 5,3851648..., nooit nie — dus behoort dit glad nie aan N, N0, Z of Q nie.' },

        // Blok 5 — Vergelyking / rangskikking oor die hiërargie
        { difficulty: 'Medium', question: 'Wat is groter: √17 of 4? Verduidelik hoe jy dit weet sonder ʼn sakrekenaar.', checkMode: 'self', answer: '√17 is groter as 4. Aangesien 16 < 17, weet ons √16 < √17, en √16 = 4, dus moet √17 groter as 4 wees (in werklikheid √17 ≈ 4,12).' },
        { difficulty: 'Medium', question: 'Rangskik hierdie getalle van kleinste na grootste: √25, 4,9, √16, 5,1.', checkMode: 'auto', correctAnswer: '√16, 4,9, √25, 5,1', correctAnswers: ['√16, 4,9, √25, 5,1', 'sqrt16, 4,9, sqrt25, 5,1'], explanation: '√16 = 4, 4,9 = 4,9, √25 = 5, 5,1 = 5,1. Die rangskikking van die waardes 4, 4,9, 5, 5,1 van kleinste na grootste gee √16, 4,9, √25, 5,1. ✓' },
        { difficulty: 'Medium-Hard', question: 'Plaas √10 en 3,5 in volgorde van kleinste na grootste, en toon hoe jy hulle vergelyk het.', checkMode: 'self', answer: '√10, 3,5. √10 ≈ 3,1622776..., wat kleiner is as 3,5, aangesien 3,1622776 < 3,5. Dus is die volgorde van kleinste na grootste √10, dan 3,5.' },

        // Blok 6 — Foutopsporing / multi-stap redenasie
        { difficulty: 'Hard', question: 'Ayesha sê √64 is irrasionaal omdat dit ʼn vierkantswortelteken voor het. Is sy korrek? Verduidelik wat sy verkeerd verstaan het.', checkMode: 'self', answer: 'Nee, Ayesha is verkeerd. ʼn Vierkantswortelteken maak ʼn getal nie outomaties irrasionaal nie — jy moet kontroleer of die getal onder die wortel ʼn volkome vierkant is. 64 is ʼn volkome vierkant (8 × 8 = 64), dus √64 = 8, ʼn hele getal, wat rasionaal is. Ayesha het "bevat ʼn wortelteken" met "is irrasionaal" verwar.' },
        { difficulty: 'Hard', question: 'ʼn Leerder klassifiseer die getal 6/3 as "slegs rasionaal, nie ʼn heelgetal nie, omdat dit as ʼn breuk geskryf is". Identifiseer die fout in hierdie redenasie en gee die volledige, korrekte klassifikasie.', checkMode: 'self', answer: 'Die fout is dat die leerder nie eers die breuk vereenvoudig het nie. 6/3 vereenvoudig na 2, wat ʼn positiewe hele getal is. Dus behoort 6/3 eintlik aan N, N0, Z en Q — nie net Q nie. Vereenvoudig altyd ʼn breuk voordat jy dit klassifiseer, aangesien die vereenvoudigde vorm kan wys dat dit aan meer versamelings behoort as wat dit aanvanklik lyk.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering van getalle oor die reële getallestelsel bemeester.' },
        { minScore: 14, message: 'Goeie werk! Jy verstaan die meeste van die getalversamelings — hersien enigiets wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die klassifikasie-kontrolelys en die rasionaal/irrasionaal-desimaaltoets, en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids, met fokus op volkome vierkante en die desimaaltoets.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokstruktuur as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Klassifisering van getalle volgens tipe (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 25 ʼn natuurlike getal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: '25 is ʼn positiewe teltal, dus behoort dit aan die natuurlike getalle (N). ✓' },
        { difficulty: 'Easy', question: 'Is −11 ʼn hele getal? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee'], explanation: 'Hele getalle (N0) is {0, 1, 2, 3, ...} — hulle kan nie negatief wees nie. −11 is negatief, dus is dit NIE ʼn hele getal nie. ✓' },
        { difficulty: 'Easy', question: 'Noem die kleinste versameling (N, N0 of Z) waaraan die getal 0 behoort.', checkMode: 'auto', correctAnswer: 'N0', correctAnswers: ['N0', 'hele getalle', 'N nul'], explanation: '0 is nie in N nie (tel begin by 1), maar dit word by definisie by die hele getalle (N0) ingesluit, dus is N0 die kleinste versameling wat 0 bevat. ✓' },
        { difficulty: 'Easy', question: 'Is −20 ʼn heelgetal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: 'Heelgetalle (Z) sluit al die hele getalle saam met hul negatiewe in, dus pas −20 hierdie definisie. ✓' },

        // Blok 2 — Rasionaal vs irrasionaal vanaf desimale
        { difficulty: 'Easy-Medium', question: 'Is 0,65 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '0,65 is ʼn eindigende desimaal, dus kan dit as ʼn presiese breuk geskryf word: 0,65 = 13/20. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'Die desimaal 0,363636... herhaal die paar "36" vir ewig. Is hierdie getal rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: 'ʼn Desimaal wat in ʼn duidelike patroon vir ewig herhaal, is steeds rasionaal. 0,363636... = 4/11, dus is dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Getal het die desimale waarde 0,20200200020002..., waar die aantal nulle tussen elke 2 al hoe meer word. Is hierdie getal rasionaal of irrasionaal? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Irrasionaal. Alhoewel die desimaal ʼn mate van sigbare patroon het, sluit die syfers nooit in ʼn VASTE herhalende blok in nie — die gapings van nulle word al hoe groter — dus eindig dit nooit en herhaal dit ook nooit werklik nie, wat beteken dit kan nie as ʼn presiese breuk geskryf word nie.' },
        { difficulty: 'Medium', question: 'Lindiwe sê ʼn desimaal is slegs rasionaal as dit heeltemal stop. Verduidelik waarom dit nie die volle prentjie is nie, deur 0,777... as voorbeeld te gebruik.', checkMode: 'self', answer: 'Lindiwe is verkeerd. ʼn Desimaal is rasionaal as dit eindig OF vir ewig in ʼn patroon herhaal. 0,777... stop nooit nie, maar die syfer 7 herhaal elke keer, dus is dit rasionaal — dit is gelyk aan 7/9. Slegs desimale wat nòg eindig nòg herhaal, is irrasionaal.' },

        // Blok 3 — Wortelgetalle: rasionaal of irrasionaal
        { difficulty: 'Medium', question: 'Is √25 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '25 is ʼn volkome vierkant (5 × 5 = 25), dus √25 = 5, ʼn hele getal. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Medium', question: 'Is √29 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], explanation: '29 is nie ʼn volkome vierkant nie (die naaste volkome vierkante is 25 en 36), dus kan √29 nie na ʼn hele getal vereenvoudig word nie. Sy desimaal, 5,3851648..., is nie-eindigend en nie-herhalend, dus is dit irrasionaal. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √144: is dit rasionaal of irrasionaal, en waarna vereenvoudig dit?', checkMode: 'self', answer: 'Rasionaal. 144 is ʼn volkome vierkant (12 × 12 = 144), dus √144 = 12, wat ʼn hele getal is en dus rasionaal.' },
        { difficulty: 'Medium-Hard', question: 'Klassifiseer BEIDE √64 en √70 as rasionaal of irrasionaal, en toon jou redenasie vir elkeen.', checkMode: 'self', answer: '√64 is rasionaal: 64 is ʼn volkome vierkant (8 × 8 = 64), dus √64 = 8, ʼn hele getal. √70 is irrasionaal: 70 is nie ʼn volkome vierkant nie (tussen 64 = 8² en 81 = 9²), dus √70 = 8,3666002... is nie-eindigend en nie-herhalend.' },

        // Blok 4 — Volledige multi-versameling klassifikasie
        { difficulty: 'Medium', question: 'Klassifiseer die getal 23 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '23 is ʼn positiewe hele teltal sonder ʼn breukdeel, dus behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √100 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '100 is ʼn volkome vierkant (10 × 10 = 100), dus √100 = 10. Aangesien 10 ʼn positiewe hele getal is, behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn toon −9, 0, 3/7, √50 en 15. Sorteer elke getal in elke versameling waaraan dit behoort (N, N0, Z, Q, irrasionaal), en verduidelik waarom √50 in geeneen van N, N0, Z of Q pas nie.', checkMode: 'self', answer: '−9: Z, Q. 0: N0, Z, Q. 3/7: slegs Q. 15: N, N0, Z, Q. √50 is irrasionaal omdat 50 nie ʼn volkome vierkant is nie (tussen 49 = 7² en 64 = 8²), dus eindig of herhaal sy desimaal, 7,0710678..., nooit nie — dus behoort dit glad nie aan N, N0, Z of Q nie.' },

        // Blok 5 — Vergelyking / rangskikking oor die hiërargie
        { difficulty: 'Medium', question: 'Wat is kleiner: √29 of 5? Verduidelik hoe jy dit weet sonder ʼn sakrekenaar.', checkMode: 'self', answer: '5 is kleiner as √29. Aangesien 25 < 29, weet ons √25 < √29, en √25 = 5, dus moet 5 kleiner as √29 wees (in werklikheid √29 ≈ 5,39).' },
        { difficulty: 'Medium', question: 'Rangskik hierdie getalle van kleinste na grootste: √36, 5,9, √49, 6,2.', checkMode: 'auto', correctAnswer: '5,9, √36, 6,2, √49', correctAnswers: ['5,9, √36, 6,2, √49', '5,9, sqrt36, 6,2, sqrt49'], explanation: '√36 = 6, 5,9 = 5,9, √49 = 7, 6,2 = 6,2. Die rangskikking van die waardes 5,9, 6, 6,2, 7 van kleinste na grootste gee 5,9, √36 (6), 6,2, √49 (7). ✓' },
        { difficulty: 'Medium-Hard', question: 'Plaas √11 en 3,4 in volgorde van kleinste na grootste, en toon hoe jy hulle vergelyk het.', checkMode: 'self', answer: '√11, 3,4. √11 ≈ 3,3166247..., wat kleiner is as 3,4, aangesien 3,3166 < 3,4. Dus is die volgorde van kleinste na grootste √11, dan 3,4.' },

        // Blok 6 — Foutopsporing / multi-stap redenasie
        { difficulty: 'Hard', question: 'Themba sê √121 is irrasionaal omdat dit ʼn vierkantswortelteken voor het. Is hy korrek? Verduidelik wat hy verkeerd verstaan het.', checkMode: 'self', answer: 'Nee, Themba is verkeerd. ʼn Vierkantswortelteken maak ʼn getal nie outomaties irrasionaal nie — jy moet kontroleer of die getal onder die wortel ʼn volkome vierkant is. 121 is ʼn volkome vierkant (11 × 11 = 121), dus √121 = 11, ʼn hele getal, wat rasionaal is. Themba het "bevat ʼn wortelteken" met "is irrasionaal" verwar.' },
        { difficulty: 'Hard', question: 'ʼn Leerder klassifiseer die getal 12/4 as "slegs rasionaal, nie ʼn heelgetal nie, omdat dit as ʼn breuk geskryf is". Identifiseer die fout in hierdie redenasie en gee die volledige, korrekte klassifikasie.', checkMode: 'self', answer: 'Die fout is dat die leerder nie eers die breuk vereenvoudig het nie. 12/4 vereenvoudig na 3, wat ʼn positiewe hele getal is. Dus behoort 12/4 eintlik aan N, N0, Z en Q — nie net Q nie. Vereenvoudig altyd ʼn breuk voordat jy dit klassifiseer, aangesien die vereenvoudigde vorm kan wys dat dit aan meer versamelings behoort as wat dit aanvanklik lyk.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan getalle met selfvertroue oor die reële getallestelsel klassifiseer.' },
        { minScore: 14, message: 'Goeie werk! Hersien enigiets wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die klassifikasie-kontrolelys en die rasionaal/irrasionaal-desimaaltoets, en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids, met fokus op volkome vierkante en die desimaaltoets.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokstruktuur, meer werklike-wêreld kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Klassifisering van getalle volgens tipe (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 40 ʼn natuurlike getal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: '40 is ʼn positiewe teltal, dus behoort dit aan die natuurlike getalle (N). ✓' },
        { difficulty: 'Easy', question: 'Is −3 ʼn natuurlike getal? Antwoord ja of nee.', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee'], explanation: 'Natuurlike getalle is die positiewe teltalle {1, 2, 3, ...}. −3 is negatief, dus is dit NIE ʼn natuurlike getal nie. ✓' },
        { difficulty: 'Easy', question: 'ʼn Temperatuurlesing van 0°C word op ʼn termometer aangeteken. Aan watter versameling(s) — N, N0, Z, Q — behoort die getal 0?', checkMode: 'auto', correctAnswer: 'N0, Z en Q', correctAnswers: ['N0, Z en Q', 'N0, Z, Q'], explanation: '0 is nie in N nie (tel begin by 1), maar dit is in N0 by definisie, dit is ʼn heelgetal, en dit kan as 0/1 geskryf word, dus is dit ook in Q. Dus behoort 0 aan N0, Z en Q. ✓' },
        { difficulty: 'Easy', question: 'Is −14 ʼn heelgetal?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja'], explanation: 'Heelgetalle (Z) sluit al die hele getalle saam met hul negatiewe in, dus pas −14 hierdie definisie. ✓' },

        // Blok 2 — Rasionaal vs irrasionaal vanaf desimale
        { difficulty: 'Easy-Medium', question: 'Is 0,425 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '0,425 is ʼn eindigende desimaal, dus kan dit as ʼn presiese breuk geskryf word: 0,425 = 17/40. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'Die desimaal 0,222... herhaal die syfer 2 vir ewig. Is hierdie getal rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: 'ʼn Desimaal wat in ʼn duidelike patroon vir ewig herhaal, is steeds rasionaal. 0,222... = 2/9, dus is dit rasionaal. ✓' },
        { difficulty: 'Easy-Medium', question: 'ʼn Getal het die desimale waarde 0,30300300030000300003..., waar die aantal nulle tussen elke 3 elke keer met een toeneem. Is hierdie getal rasionaal of irrasionaal? Verduidelik jou redenasie.', checkMode: 'self', answer: 'Irrasionaal. Alhoewel daar ʼn mate van sigbare struktuur is, sluit die syfers nooit in ʼn VASTE blok wat identies vir ewig herhaal nie — die gapings word al hoe groter — dus eindig die desimaal nooit en herhaal dit ook nooit werklik nie, wat beteken dit kan nie as ʼn presiese breuk geskryf word nie.' },
        { difficulty: 'Medium', question: 'Bongani sê ʼn desimaal moet irrasionaal wees as dit meer as 10 syfers na die desimale punt het. Verduidelik waarom hierdie redenasie foutief is, deur die herhalende voorbeeld 0,583583583... te gebruik.', checkMode: 'self', answer: 'Bongani is verkeerd. Die LENGTE van ʼn desimaal bepaal nie of dit rasionaal of irrasionaal is nie — wat saak maak, is of dit eindig of in ʼn patroon herhaal. 0,583583583... het baie syfers, maar die blok "583" herhaal vir ewig, dus is dit rasionaal (dit is gelyk aan 583/999). ʼn Desimaal is slegs irrasionaal as dit vir ewig voortgaan sonder enige herhalende patroon, ongeag hoeveel syfers gewys word.' },

        // Blok 3 — Wortelgetalle: rasionaal of irrasionaal
        { difficulty: 'Medium', question: 'Is √169 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], explanation: '169 is ʼn volkome vierkant (13 × 13 = 169), dus √169 = 13, ʼn hele getal. Dit maak dit rasionaal. ✓' },
        { difficulty: 'Medium', question: 'Is √90 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], explanation: '90 is nie ʼn volkome vierkant nie (die naaste volkome vierkante is 81 en 100), dus kan √90 nie na ʼn hele getal vereenvoudig word nie. Sy desimaal, 9,4868329..., is nie-eindigend en nie-herhalend, dus is dit irrasionaal. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √196: is dit rasionaal of irrasionaal, en waarna vereenvoudig dit?', checkMode: 'self', answer: 'Rasionaal. 196 is ʼn volkome vierkant (14 × 14 = 196), dus √196 = 14, wat ʼn hele getal is en dus rasionaal.' },
        { difficulty: 'Medium-Hard', question: 'Klassifiseer BEIDE √121 en √130 as rasionaal of irrasionaal, en toon jou redenasie vir elkeen.', checkMode: 'self', answer: '√121 is rasionaal: 121 is ʼn volkome vierkant (11 × 11 = 121), dus √121 = 11, ʼn hele getal. √130 is irrasionaal: 130 is nie ʼn volkome vierkant nie (tussen 121 = 11² en 144 = 12²), dus √130 = 11,4017542... is nie-eindigend en nie-herhalend.' },

        // Blok 4 — Volledige multi-versameling klassifikasie
        { difficulty: 'Medium', question: 'Klassifiseer die getal 31 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '31 is ʼn positiewe hele teltal sonder ʼn breukdeel, dus behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium', question: 'Klassifiseer √225 in elke versameling waaraan dit behoort (N, N0, Z, Q, of irrasionaal).', checkMode: 'auto', correctAnswer: 'N, N0, Z en Q', correctAnswers: ['N, N0, Z en Q', 'N, N0, Z, Q'], explanation: '225 is ʼn volkome vierkant (15 × 15 = 225), dus √225 = 15. Aangesien 15 ʼn positiewe hele getal is, behoort dit aan N, N0, Z en Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Getallelyn toon −12, 0, 7/9, √110 en 18. Sorteer elke getal in elke versameling waaraan dit behoort (N, N0, Z, Q, irrasionaal), en verduidelik waarom √110 in geeneen van N, N0, Z of Q pas nie.', checkMode: 'self', answer: '−12: Z, Q. 0: N0, Z, Q. 7/9: slegs Q. 18: N, N0, Z, Q. √110 is irrasionaal omdat 110 nie ʼn volkome vierkant is nie (tussen 100 = 10² en 121 = 11²), dus eindig of herhaal sy desimaal, 10,4880885..., nooit nie — dus behoort dit glad nie aan N, N0, Z of Q nie.' },

        // Blok 5 — Vergelyking / rangskikking oor die hiërargie
        { difficulty: 'Medium', question: 'Wat is groter: √40 of 6? Verduidelik hoe jy dit weet sonder ʼn sakrekenaar.', checkMode: 'self', answer: '√40 is groter as 6. Aangesien 36 < 40, weet ons √36 < √40, en √36 = 6, dus moet √40 groter as 6 wees (in werklikheid √40 ≈ 6,32).' },
        { difficulty: 'Medium', question: 'Rangskik hierdie getalle van kleinste na grootste: √100, 9,8, √81, 10,3.', checkMode: 'auto', correctAnswer: '√81, 9,8, √100, 10,3', correctAnswers: ['√81, 9,8, √100, 10,3', 'sqrt81, 9,8, sqrt100, 10,3'], explanation: '√100 = 10, 9,8 = 9,8, √81 = 9, 10,3 = 10,3. Die rangskikking van die waardes 10, 9,8, 9, 10,3 van kleinste na grootste gee √81 (9), 9,8, √100 (10), 10,3. ✓' },
        { difficulty: 'Medium-Hard', question: 'Plaas √17 en 4,2 in volgorde van kleinste na grootste, en toon hoe jy hulle vergelyk het.', checkMode: 'self', answer: '√17, 4,2. √17 ≈ 4,1231056..., wat kleiner is as 4,2, aangesien 4,1231 < 4,2. Dus is die volgorde van kleinste na grootste √17, dan 4,2.' },

        // Blok 6 — Foutopsporing / multi-stap redenasie
        { difficulty: 'Hard', question: 'Naledi sê √225 is irrasionaal omdat dit ʼn vierkantswortelteken voor het. Is sy korrek? Verduidelik wat sy verkeerd verstaan het.', checkMode: 'self', answer: 'Nee, Naledi is verkeerd. ʼn Vierkantswortelteken maak ʼn getal nie outomaties irrasionaal nie — jy moet kontroleer of die getal onder die wortel ʼn volkome vierkant is. 225 is ʼn volkome vierkant (15 × 15 = 225), dus √225 = 15, ʼn hele getal, wat rasionaal is. Naledi het "bevat ʼn wortelteken" met "is irrasionaal" verwar.' },
        { difficulty: 'Hard', question: 'ʼn Leerder klassifiseer die getal 20/5 as "slegs rasionaal, nie ʼn heelgetal nie, omdat dit as ʼn breuk geskryf is". Identifiseer die fout in hierdie redenasie en gee die volledige, korrekte klassifikasie.', checkMode: 'self', answer: 'Die fout is dat die leerder nie eers die breuk vereenvoudig het nie. 20/5 vereenvoudig na 4, wat ʼn positiewe hele getal is. Dus behoort 20/5 eintlik aan N, N0, Z en Q — nie net Q nie. Vereenvoudig altyd ʼn breuk voordat jy dit klassifiseer, aangesien die vereenvoudigde vorm kan wys dat dit aan meer versamelings behoort as wat dit aanvanklik lyk.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Manjifiek! Jy het ʼn diep, betroubare begrip van die reële getallestelsel.' },
        { minScore: 14, message: 'Goeie werk! Hersien enigiets wat jy gemis het en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Hersien die klassifikasie-kontrolelys en die rasionaal/irrasionaal-desimaaltoets, en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids, met fokus op volkome vierkante en die desimaaltoets.' },
      ],
    },
  ],
}
