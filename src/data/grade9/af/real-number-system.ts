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
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CLASSIFYING NUMBERS IN THE REAL NUMBER SYSTEM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'classifying-real-numbers',
      title: 'Klassifisering van Getalle in die Reële Getallestelsel',
      icon: 'ℝ',
      explanation:
        `<p style="margin-bottom:16px;">Die reële getallestelsel sluit verskeie soorte getalle in. ${bl('Natuurlike getalle')} is teltalle (1, 2, 3 ...). <strong>Hele getalle</strong> sluit 0 en die natuurlike getalle in. ${gr('Heelgetalle')} sluit ook negatiewe getalle in. ${or('Rasionale getalle')} kan as ʼn breuk geskryf word (insluitend alle heelgetalle, breuke, en eindigende of herhalende desimale). ${re('Irrasionale getalle')} kan nie as presiese breuke geskryf word nie — hul desimale gaan vir ewig voort sonder om te herhaal, soos π of √2.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('natuurlike getalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('heelgetalle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rasionale getalle')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrasionale getalle')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Natuurlike Getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Teltalle wat by 1 begin: {1, 2, 3, 4, ...}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Hele Getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Natuurlike getalle plus nul: {0, 1, 2, 3, ...}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Heelgetalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Alle hele getalle en hul negatiewe: {..., −2, −1, 0, 1, 2, ...}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rasionale Getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Enige getal wat as ʼn breuk p/q geskryf kan word waar q ≠ 0. Sluit alle heelgetalle, breuke, en eindigende of herhalende desimale in.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Irrasionale Getalle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Getalle waarvan die desimale uitbreiding nie-eindigend en nie-herhalend is. Kan nie as ʼn breuk geskryf word nie. Voorbeelde: π, √2, √3.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: die versamelings is genes</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke ${bl('natuurlike getal')} is ook ʼn hele getal, ʼn ${gr('heelgetal')}, en ʼn ${or('rasionale getal')}. Die ${re('irrasionale getalle')} is apart — hulle is reële getalle wat <em>nie</em> rasionaal is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Klassifiseer die getal −7.',
          answer: `−7 is ʼn ${gr('heelgetal')} en ʼn ${or('rasionale getal')}`,
          steps: [
            `−7 is ʼn negatiewe hele getal, dus is dit ʼn ${gr('heelgetal')}.`,
            `Dit is ook ${or('rasionaal')}, aangesien dit as die breuk −7/1 geskryf kan word.`,
            `Dit is <strong>nie</strong> ʼn ${bl('natuurlike getal')} of ʼn hele getal nie, aangesien daardie versamelings negatiewe getalle uitsluit.`,
            `<strong>Klassifikasie:</strong> ${gr('heelgetal')} en ${or('rasionale getal')} ✓`,
          ],
        },
        {
          question: 'Sipho sê √16 is irrasionaal. Is hy korrek?',
          answer: `Nee — √16 = ${bl('4')}, wat ${or('rasionaal')} is`,
          steps: [
            `Bereken: √16 = <strong>4</strong> (want 4 × 4 = 16).`,
            `4 is ʼn ${bl('natuurlike getal')}, ʼn hele getal, ʼn ${gr('heelgetal')}, en dus ook ${or('rasionaal')}.`,
            `Sipho is verkeerd. Nie alle vierkantswortels is ${re('irrasionaal')} nie — slegs vierkantswortels van nie-volkome vierkante is ${re('irrasionaal')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Klassifiseer die getal 12. Lys al die versamelings waaraan dit behoort.',
          answer: 'Dit is ʼn natuurlike getal, hele getal, heelgetal, en rasionale getal.',
          checkMode: 'self',
        },
        {
          difficulty: 'Easy',
          question: 'Klassifiseer die getal −5. Lys al die versamelings waaraan dit behoort.',
          answer: 'Dit is ʼn heelgetal en ʼn rasionale getal, maar nie ʼn natuurlike getal of hele getal nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho sê alle vierkantswortels is irrasionaal. Is hy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — vierkantswortels van volkome vierkante soos √25 = 5 is rasionaal. Slegs vierkantswortels van nie-volkome vierkante is irrasionaal.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Klassifiseer die getal 0 in terme van natuurlike getalle, hele getalle, heelgetalle en rasionale getalle.',
          answer: '0 is ʼn hele getal, ʼn heelgetal, en ʼn rasionale getal, maar dit is nie ʼn natuurlike getal nie (wat by 1 begin).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Nested Venn-style diagram showing natural numbers inside whole numbers, inside integers, inside rational numbers, with irrational numbers as a separate circle, all inside the real number system" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the real number system and how to classify numbers as natural, whole, integer, rational or irrational" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — IDENTIFYING RATIONAL AND IRRATIONAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-irrational-numbers',
      title: 'Identifisering van Rasionale en Irrasionale Getalle',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Om te bepaal of ʼn getal ${or('rasionaal')} is, kyk of dit as ʼn breuk geskryf kan word, of of die desimaal ${bl('eindig')} of in ʼn patroon ${gr('herhaal')}. ${re('Irrasionale')} getalle het desimale wat vir ewig voortgaan sonder ʼn herhalende patroon. Vierkantswortels van nie-volkome vierkante (soos √2, √3, √5) is ${re('irrasionaal')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eindigende desimale')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('herhalende desimale')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie-herhalende desimale')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn getal te toets</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Eindig')} — die desimaal eindig na ʼn eindige aantal syfers (bv. 0,75 = 3/4). ${or('Rasionaal')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Herhaal')} — die desimaal het ʼn blok syfers wat onbepaald herhaal (bv. 0,333... = 1/3). ${or('Rasionaal')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Nie-herhalend en nie-eindigend')} — die desimaal gaan vir ewig voort sonder ʼn patroon (bv. π, √2). ${re('Irrasionaal')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Vierkantswortels: die sleutelvraag</p>` +
        `<p style="margin:0;color:#7c2d12;">Is die getal onder die vierkantswortelteken ʼn <strong>volkome vierkant</strong>? Indien ja, is die resultaat ${or('rasionaal')}. Indien nie, is die resultaat ${re('irrasionaal')}. Volkome vierkante: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ...</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Is 0,333... (herhalend) rasionaal of irrasionaal?',
          answer: `0,333... is ${or('rasionaal')}`,
          steps: [
            `Die desimaal 0,333... het ʼn ${gr('herhalende')} patroon — die syfer 3 herhaal onbepaald.`,
            `ʼn ${gr('Herhalende')} desimaal kan altyd as ʼn breuk uitgedruk word: 0,333... = 1/3.`,
            `Aangesien dit as ʼn breuk geskryf kan word, is dit ${or('rasionaal')}. ✓`,
          ],
        },
        {
          question: 'Lerato sê π is rasionaal omdat dit ʼn waarde van 3,14 het. Is sy korrek?',
          answer: `Nee — π is ${re('irrasionaal')}`,
          steps: [
            `3,14 is slegs ʼn <strong>benadering</strong> van π, wat vir gerief in berekeninge gebruik word.`,
            `Die werklike desimale waarde van π gaan vir ewig voort sonder enige ${gr('herhalende')} patroon: 3,14159265358979...`,
            `Omdat π ${re('nie-eindigend en nie-herhalend')} is, kan dit nie as ʼn presiese breuk geskryf word nie. Dit is ${re('irrasionaal')}.`,
            `Lerato is verkeerd. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: 'Is √25 rasionaal of irrasionaal?',
          answer: 'rasionaal',
          checkMode: 'auto',
          correctAnswer: 'rasionaal',
          explanation: '√25 = 5, wat ʼn hele getal is en dus rasionaal. 25 is ʼn volkome vierkant, dus is sy vierkantswortel rasionaal.',
        },
        {
          difficulty: 'Easy',
          question: 'Is 0,75 rasionaal of irrasionaal?',
          answer: 'rasionaal',
          checkMode: 'auto',
          correctAnswer: 'rasionaal',
          explanation: '0,75 is ʼn eindigende desimaal. Dit kan as die breuk 3/4 geskryf word, dus is dit rasionaal.',
        },
        {
          difficulty: 'Medium',
          question: 'Is 0,101001000100001... (nie-herhalend) rasionaal of irrasionaal?',
          answer: 'irrasionaal',
          checkMode: 'auto',
          correctAnswer: 'irrasionaal',
          explanation: 'Hierdie desimaal is nie-eindigend en nie-herhalend — daar is geen blok syfers wat in ʼn patroon herhaal nie. Dit kan nie as ʼn breuk geskryf word nie, dus is dit irrasionaal.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato sê 22/7 is presies gelyk aan π. Is sy korrek? Verduidelik.',
          answer: 'Nee — 22/7 is ʼn rasionale benadering van π, maar π self is irrasionaal en sy presiese waarde kan nie as ʼn breuk geskryf word nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Klassifiseer √7.',
          answer: 'irrasionaal',
          checkMode: 'auto',
          correctAnswer: 'irrasionaal',
          explanation: '7 is nie ʼn volkome vierkant nie, dus kan √7 nie as ʼn hele getal of eenvoudige breuk uitgedruk word nie. Sy desimale waarde is 2,6457513..., wat nie-eindigend en nie-herhalend is. Daarom is √7 irrasionaal.',
        },
        {
          difficulty: 'Easy',
          question: 'Is −3/4 ʼn rasionale getal?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          explanation: '−3/4 is direk as ʼn breuk p/q geskryf waar p = −3 en q = 4. Enige getal wat as ʼn breuk uitgedruk kan word, is rasionaal.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing examples of terminating decimals, repeating decimals and non-repeating non-terminating decimals, illustrating which are rational and which are irrational" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify rational and irrational numbers including how to test decimals and square roots" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PROPERTIES AND OPERATIONS ACROSS THE REAL NUMBER SYSTEM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-real-number-system',
      title: 'Eienskappe en Bewerkings oor die Reële Getallestelsel',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas ons kennis van getalsoorte toe wanneer ons berekeninge uitvoer, en herken dat bewerkings tussen sekere getalsoorte voorspelbare resultate lewer — byvoorbeeld, die som van twee ${or('rasionale')} getalle is altyd ${or('rasionaal')}, maar kombinasies wat ${re('irrasionale')} getalle behels, kan ${re('irrasionaal')} of soms ${bl('rasionaal')} wees.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rasionale resultaat')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrasionale resultaat')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('berekeningstappe')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir bewerkings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Rasionaal')} + ${bl('Rasionaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Altyd ${bl('rasionaal')}. Voorbeeld: 1/2 + 1/3 = 5/6.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${bl('Rasionaal')} + ${re('Irrasionaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Altyd ${re('irrasionaal')}. Voorbeeld: 3 + √2 is irrasionaal.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;">${re('Irrasionaal')} + ${re('Irrasionaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gewoonlik ${re('irrasionaal')}, maar kan ${bl('rasionaal')} wees. Voorbeeld: √5 − √5 = 0.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${re('Irrasionaal')} × ${re('Irrasionaal')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kan ${bl('rasionaal')} of ${re('irrasionaal')} wees. Voorbeeld: √3 × √3 = 3 (${bl('rasionaal')}); √2 × √3 = √6 (${re('irrasionaal')}).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudig altyd eers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy die resultaat klassifiseer, vereenvoudig die uitdrukking heeltemal. ʼn Vierkantswortel wat tot ʼn hele getal vereenvoudig, is ${bl('rasionaal')}, selfs al het dit aanvanklik nie ${bl('rasionaal')} gelyk nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo tel √2 + 3 op. Is die resultaat rasionaal of irrasionaal?',
          answer: `Die resultaat is ${re('irrasionaal')}`,
          steps: [
            `${or('Identifiseer die soorte:')} 3 is ʼn ${bl('rasionale')} getal. √2 is ʼn ${re('irrasionale')} getal (2 is nie ʼn volkome vierkant nie).`,
            `${or('Pas die reël toe:')} Om ʼn ${bl('rasionale')} getal by ʼn ${re('irrasionale')} getal te tel, gee altyd ʼn ${re('irrasionale')} resultaat.`,
            `Die nie-herhalende desimale patroon van √2 word behou — geen hoeveelheid optelling van ʼn rasionale getal kan dit laat eindig of herhaal nie.`,
            `<strong>Gevolgtrekking:</strong> √2 + 3 is ${re('irrasionaal')} ✓`,
          ],
        },
        {
          question: 'Amahle vermenigvuldig √3 × √3. Is die resultaat rasionaal of irrasionaal?',
          answer: `Die resultaat is ${bl('rasionaal')} — √3 × √3 = ${bl('3')}`,
          steps: [
            `${or('Bereken:')} √3 × √3 = (√3)² = <strong>3</strong>.`,
            `${or('Klassifiseer:')} 3 is ʼn hele getal, dus ${bl('rasionaal')}.`,
            `Om ʼn irrasionale getal met homself te vermenigvuldig (die kwadraat van ʼn vierkantswortel) kanselleer die wortelteken en lewer ʼn ${bl('rasionale')} resultaat.`,
            `<strong>Gevolgtrekking:</strong> √3 × √3 = ${bl('3')}, wat ${bl('rasionaal')} is ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Hard',
          question: 'Thabo tel 4 + √5 op. Is die resultaat rasionaal of irrasionaal? Verduidelik.',
          answer: 'Irrasionaal — om ʼn rasionale getal by ʼn irrasionale getal te tel, lewer altyd ʼn irrasionale resultaat.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bereken √9 × √16 en klassifiseer die resultaat.',
          answer: '12, wat rasionaal is',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: '√9 = 3 en √16 = 4. Dus √9 × √16 = 3 × 4 = 12. Aangesien 12 ʼn hele getal is, is dit rasionaal.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê √2 × √8 sal irrasionaal wees omdat albei getalle irrasionaal is. Is sy korrek?',
          answer: 'Nee — √2 × √8 = √16 = 4, wat rasionaal is. Om twee irrasionale getalle te vermenigvuldig, kan soms ʼn rasionale resultaat lewer.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Is die som van twee rasionale getalle altyd rasionaal?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          explanation: 'Ja — die som van twee rasionale getalle is altyd rasionaal. As a = p/q en b = r/s, dan is a + b = (ps + rq)/(qs), wat ook ʼn breuk is en dus rasionaal.',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho sê om twee irrasionale getalle af te trek, gee altyd ʼn irrasionale resultaat. Is hy korrek? Gee ʼn voorbeeld om jou antwoord te ondersteun.',
          answer: 'Nee — byvoorbeeld √5 − √5 = 0, wat rasionaal is, selfs al was albei getalle irrasionaal.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing the results of adding, subtracting and multiplying rational and irrational numbers with examples of each combination" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing examples of operations involving rational and irrational numbers and how to classify the results" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het die reële getallestelsel bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy het ʼn sterk begrip — hersien enige gemiste vrae en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Hersien die studiegids en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids en jy sal dit kry.' },
  ],
}
