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
        'Geneste diagram wat natuurlike getalle binne hele getalle, binne heelgetalle, binne rasionale getalle wys, met irrasionale getalle as ʼn aparte versameling, alles binne die reële getalle',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 225" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="15" width="280" height="200" rx="14" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="18" y="30" font-size="10" font-weight="700" fill="#0f1f3d">Reële Getalle (ℝ)</text>` +
        `<rect x="25" y="42" width="160" height="150" rx="12" fill="rgba(234,88,12,0.05)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="33" y="58" font-size="9" font-weight="700" fill="#ea580c">Rasionaal (ℚ)</text>` +
        `<rect x="38" y="68" width="125" height="105" rx="10" fill="rgba(22,163,74,0.06)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="46" y="84" font-size="8.5" font-weight="700" fill="#16a34a">Heelgetalle (ℤ)</text>` +
        `<rect x="50" y="94" width="90" height="62" rx="8" fill="rgba(107,114,128,0.08)" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="58" y="108" font-size="7.5" font-weight="700" fill="#6b7280">Hele (ℕ₀)</text>` +
        `<rect x="62" y="118" width="55" height="28" rx="6" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="89.5" y="135" text-anchor="middle" font-size="6.5" font-weight="700" fill="#2563eb">Natuurlik (ℕ)</text>` +
        `<rect x="200" y="90" width="75" height="60" rx="10" fill="rgba(220,38,38,0.05)" stroke="#dc2626" stroke-width="1.5"/>` +
        `<text x="237.5" y="115" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">Irrasionaal</text>` +
        `<text x="237.5" y="128" text-anchor="middle" font-size="7" fill="#dc2626">(π, √2, √3)</text>` +
        `</svg>`,

      videoPlaceholder:
        'Kort video wat die reële getallestelsel verduidelik en hoe om getalle as natuurlik, heelgetal, geheel, rasionaal of irrasionaal te klassifiseer',
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

      videoPlaceholder:
        'Kort video wat wys hoe om rasionale en irrasionale getalle te identifiseer, insluitend hoe om desimale en vierkantswortels te toets',
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

      videoPlaceholder:
        'Kort video wat voorbeelde wys van bewerkings met rasionale en irrasionale getalle en hoe om die resultate te klassifiseer',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het die reële getallestelsel bemeester.' },
    { minScore: 11, message: 'Goeie werk! Jy het ʼn sterk begrip — hersien enige gemiste vrae en probeer weer.' },
    { minScore: 8, message: 'Goeie poging! Hersien die studiegids en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die gids en jy sal dit kry.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Klassifiseer ʼn getal — lys al die versamelings
    // Blok 2 (3-5):   Rasionaal of irrasionaal? (desimale en vierkantswortels)
    // Blok 3 (6-9):   Identifiseer die irrasionale getal in ʼn lys
    // Blok 4 (10-12): Skryf ʼn herhalende desimaal as ʼn breuk
    // Blok 5 (13-15): Rangskik ʼn stel reële getalle
    // Blok 6 (16-19): Waar/onwaar-redenasie oor eienskappe van getalversamelings
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Klassifiseer ʼn getal (Easy)
        { difficulty: 'Easy', question: 'Klassifiseer die getal 9. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Natuurlike getal, hele getal, heelgetal, rasionale getal.', explanation: '9 is ʼn positiewe teltal, dus is dit natuurlik, ʼn hele getal, ʼn heelgetal, en kan as 9/1 geskryf word, dus is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal −14. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Heelgetal, rasionale getal (nie natuurlike getal of hele getal nie).', explanation: '−14 is negatief, dus kan dit nie natuurlik of ʼn hele getal wees nie. Dit is ʼn heelgetal, en aangesien dit as −14/1 geskryf kan word, is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal 0. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Hele getal, heelgetal, rasionale getal (nie ʼn natuurlike getal nie).', explanation: '0 is nie ʼn natuurlike getal nie (natuurlike getalle begin by 1), maar dit is ʼn hele getal, ʼn heelgetal, en rasionaal aangesien dit as 0/1 geskryf kan word.' },

        // Blok 2 — Rasionaal of irrasionaal? (Easy/Medium)
        { difficulty: 'Easy', question: 'Is 0,8 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '0,8 is ʼn eindigende desimaal — dit kan as 4/5 geskryf word, dus is dit rasionaal.' },
        { difficulty: 'Easy', question: 'Is √36 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '√36 = 6, aangesien 6 × 6 = 36. 36 is ʼn volkome vierkant, dus is sy vierkantswortel ʼn hele getal en daarom rasionaal.' },
        { difficulty: 'Medium', question: 'Is √13 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], answer: 'irrasionaal', explanation: '13 is nie ʼn volkome vierkant nie (3² = 9 en 4² = 16), dus kan √13 nie tot ʼn hele getal vereenvoudig word nie. Sy desimale waarde is nie-eindigend en nie-herhalend, dus is dit irrasionaal.' },

        // Blok 3 — Identifiseer die irrasionale getal in ʼn lys (Medium/Hard)
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: 7, √21, 3/5, √25?', checkMode: 'auto', correctAnswer: '√21', correctAnswers: ['√21', 'sqrt21', '√(21)'], answer: '√21', explanation: '7 is ʼn heelgetal (rasionaal), 3/5 is reeds ʼn breuk (rasionaal), √25 = 5 (rasionaal). 21 is nie ʼn volkome vierkant nie, dus is √21 irrasionaal.' },
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: √49, −6, π, 0,25?', checkMode: 'auto', correctAnswer: 'π', correctAnswers: ['π', 'pi'], answer: 'π', explanation: '√49 = 7 (rasionaal), −6 is ʼn heelgetal (rasionaal), 0,25 is ʼn eindigende desimaal (rasionaal). π is nie-eindigend en nie-herhalend, dus is dit irrasionaal.' },
        { difficulty: 'Hard', question: 'Zinhle lys 4/9, √50, 8, en 1,6 en sê √50 is die enigste irrasionale getal. Is sy korrek?', checkMode: 'self', answer: 'Ja, sy is korrek.', explanation: '4/9 is ʼn breuk (rasionaal), 8 is ʼn heelgetal (rasionaal), 1,6 is ʼn eindigende desimaal (rasionaal). 50 is nie ʼn volkome vierkant nie, dus is √50 irrasionaal. Zinhle is korrek.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom √64 by die rasionale getalle hoort, al bevat dit ʼn vierkantswortelteken.', checkMode: 'self', answer: '√64 = 8, wat ʼn hele getal is, dus is dit rasionaal.', explanation: 'Al lyk die uitdrukking √64 asof dit irrasionaal kan wees, is 64 ʼn volkome vierkant (8 × 8 = 64), dus vereenvoudig √64 presies tot 8 — ʼn hele getal, wat rasionaal is. Slegs vierkantswortels van nie-volkome vierkante is irrasionaal.' },

        // Blok 4 — Skryf ʼn herhalende desimaal as ʼn breuk (Medium/Hard)
        { difficulty: 'Medium', question: 'Skryf 0,777... (7 herhalend) as ʼn breuk.', checkMode: 'auto', correctAnswer: '7/9', correctAnswers: ['7/9'], answer: '7/9', explanation: 'Laat x = 0,777...\n10x = 7,777...\n10x − x = 7,777... − 0,777...\n9x = 7\nx = 7/9' },
        { difficulty: 'Medium', question: 'Skryf 0,454545... (45 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '5/11', correctAnswers: ['5/11', '45/99'], answer: '5/11', explanation: 'Laat x = 0,454545...\n100x = 45,454545...\n100x − x = 45,454545... − 0,454545...\n99x = 45\nx = 45/99 = 5/11 (deur die GGD, 9, te deel)' },
        { difficulty: 'Hard', question: 'Skryf 0,1666... (6 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '1/6', correctAnswers: ['1/6'], answer: '1/6', explanation: 'Laat x = 0,1666...\n10x = 1,666...\n100x = 16,666...\n100x − 10x = 16,666... − 1,666...\n90x = 15\nx = 15/90 = 1/6 (deur die GGD, 15, te deel)' },

        // Blok 5 — Rangskik ʼn stel reële getalle (Hard)
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van kleinste na grootste: −3, √2, 0,5, −1,5, √9.', checkMode: 'auto', correctAnswer: '−3, −1,5, 0,5, √2, √9', correctAnswers: ['−3, −1,5, 0,5, √2, √9', '-3, -1,5, 0,5, √2, √9'], answer: '−3, −1,5, 0,5, √2, √9', explanation: '√2 ≈ 1,41 en √9 = 3. Rangorde: −3 < −1,5 < 0,5 < √2 (≈1,41) < √9 (=3).' },
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van grootste na kleinste: 4, −2, π, −4,5, 0.', checkMode: 'auto', correctAnswer: '4, π, 0, −2, −4,5', correctAnswers: ['4, π, 0, −2, −4,5', '4, π, 0, -2, -4,5'], answer: '4, π, 0, −2, −4,5', explanation: 'π ≈ 3,14. As ons 4 en π vergelyk: 4 > 3,14, dus is 4 die grootste. Rangorde van grootste na kleinste: 4 > π (≈3,14) > 0 > −2 > −4,5.' },
        { difficulty: 'Hard', question: 'Gegee die getalle √17, 4, −√1, 3,9 en −5, rangskik hulle van kleinste na grootste.', checkMode: 'auto', correctAnswer: '−5, −√1, 3,9, 4, √17', correctAnswers: ['−5, −√1, 3,9, 4, √17', '-5, -√1, 3,9, 4, √17', '-5, -1, 3,9, 4, √17'], answer: '−5, −√1, 3,9, 4, √17', explanation: '−√1 = −1. √17 ≈ 4,12. Rangorde: −5 < −1 < 3,9 < 4 < √17 (≈4,12).' },

        // Blok 6 — Waar/onwaar-redenasie oor eienskappe van getalversamelings (Hard)
        { difficulty: 'Hard', question: 'Waar of onwaar: die som van ʼn rasionale getal en ʼn irrasionale getal is altyd irrasionaal.', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar'], answer: 'waar', explanation: 'Waar. As jy ʼn rasionale getal plus ʼn irrasionale getal as ʼn breuk kon skryf, sou die aftrekking van die rasionale deel beteken dat die irrasionale getal ook ʼn breuk is — ʼn teenstrydigheid. Die som is dus altyd irrasionaal.' },
        { difficulty: 'Hard', question: 'Waar of onwaar: elke heelgetal is ʼn rasionale getal.', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar'], answer: 'waar', explanation: 'Waar. Enige heelgetal n kan as die breuk n/1 geskryf word, dus voldoen elke heelgetal aan die definisie van ʼn rasionale getal.' },
        { difficulty: 'Hard', question: 'Karabo sê √2 + √2 = 2√2, en aangesien hy twee irrasionale getalle bygetel het, moet die antwoord irrasionaal wees. Is hy korrek?', checkMode: 'self', answer: 'Ja, hy is korrek.', explanation: '√2 + √2 = 2√2. Aangesien √2 irrasionaal is, bly dit irrasionaal wanneer dit met die rasionale getal 2 vermenigvuldig word (2√2 kan nie as ʼn presiese breuk geskryf word nie). Karabo is korrek, maar let daarop dat dit nie beteken dat die optelling van twee irrasionale getalle altyd irrasionaal is nie — dit hang van die spesifieke getalle af, soos √5 − √5 = 0 wys.' },
        { difficulty: 'Hard', question: 'Thandeka sê 0,3333... is irrasionaal omdat die syfers nooit ophou nie. Verduidelik waarom sy verkeerd is.', checkMode: 'self', answer: 'Sy is verkeerd — 0,3333... is rasionaal omdat dit in ʼn patroon herhaal.', explanation: 'ʼn Desimaal is slegs irrasionaal as dit nie-eindigend EN nie-herhalend is. 0,3333... eindig nie, maar dit herhaal wel (die syfer 3 herhaal vir ewig), dus kan dit as die breuk 1/3 geskryf word. Dit is rasionaal.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering en rangskikking van reële getalle bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor herhalende desimale of rangskikking en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor rasionale en irrasionale getalle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Klassifiseer ʼn getal (Easy)
        { difficulty: 'Easy', question: 'Klassifiseer die getal 15. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Natuurlike getal, hele getal, heelgetal, rasionale getal.', explanation: '15 is ʼn positiewe teltal, dus is dit natuurlik, ʼn hele getal, ʼn heelgetal, en kan as 15/1 geskryf word, dus is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal −20. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Heelgetal, rasionale getal (nie natuurlike getal of hele getal nie).', explanation: '−20 is negatief, dus kan dit nie natuurlik of ʼn hele getal wees nie. Dit is ʼn heelgetal, en aangesien dit as −20/1 geskryf kan word, is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal −1. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Heelgetal, rasionale getal (nie natuurlike getal of hele getal nie).', explanation: '−1 is negatief, dus kan dit nie natuurlik of ʼn hele getal wees nie. Dit is ʼn heelgetal, en aangesien dit as −1/1 geskryf kan word, is dit ook rasionaal.' },

        // Blok 2 — Rasionaal of irrasionaal? (Easy/Medium)
        { difficulty: 'Easy', question: 'Is 0,45 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '0,45 is ʼn eindigende desimaal — dit kan as 9/20 geskryf word, dus is dit rasionaal.' },
        { difficulty: 'Easy', question: 'Is √64 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '√64 = 8, aangesien 8 × 8 = 64. 64 is ʼn volkome vierkant, dus is sy vierkantswortel ʼn hele getal en daarom rasionaal.' },
        { difficulty: 'Medium', question: 'Is √19 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], answer: 'irrasionaal', explanation: '19 is nie ʼn volkome vierkant nie (4² = 16 en 5² = 25), dus kan √19 nie tot ʼn hele getal vereenvoudig word nie. Sy desimale waarde is nie-eindigend en nie-herhalend, dus is dit irrasionaal.' },

        // Blok 3 — Identifiseer die irrasionale getal in ʼn lys (Medium/Hard)
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: √30, 9, 2/3, √100?', checkMode: 'auto', correctAnswer: '√30', correctAnswers: ['√30', 'sqrt30', '√(30)'], answer: '√30', explanation: '9 is ʼn heelgetal (rasionaal), 2/3 is reeds ʼn breuk (rasionaal), √100 = 10 (rasionaal). 30 is nie ʼn volkome vierkant nie, dus is √30 irrasionaal.' },
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: √81, −11, 22/7, √2?', checkMode: 'auto', correctAnswer: '√2', correctAnswers: ['√2', 'sqrt2', '√(2)'], answer: '√2', explanation: '√81 = 9 (rasionaal), −11 is ʼn heelgetal (rasionaal), 22/7 is reeds ʼn breuk (rasionaal). 2 is nie ʼn volkome vierkant nie, dus is √2 irrasionaal.' },
        { difficulty: 'Hard', question: 'Mpho lys 5/6, √45, −3, en 2,4 en sê √45 is die enigste irrasionale getal. Is sy korrek?', checkMode: 'self', answer: 'Ja, sy is korrek.', explanation: '5/6 is ʼn breuk (rasionaal), −3 is ʼn heelgetal (rasionaal), 2,4 is ʼn eindigende desimaal (rasionaal). 45 is nie ʼn volkome vierkant nie, dus is √45 irrasionaal. Mpho is korrek.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom √100 by die rasionale getalle hoort, al bevat dit ʼn vierkantswortelteken.', checkMode: 'self', answer: '√100 = 10, wat ʼn hele getal is, dus is dit rasionaal.', explanation: 'Al lyk die uitdrukking √100 asof dit irrasionaal kan wees, is 100 ʼn volkome vierkant (10 × 10 = 100), dus vereenvoudig √100 presies tot 10 — ʼn hele getal, wat rasionaal is. Slegs vierkantswortels van nie-volkome vierkante is irrasionaal.' },

        // Blok 4 — Skryf ʼn herhalende desimaal as ʼn breuk (Medium/Hard)
        { difficulty: 'Medium', question: 'Skryf 0,888... (8 herhalend) as ʼn breuk.', checkMode: 'auto', correctAnswer: '8/9', correctAnswers: ['8/9'], answer: '8/9', explanation: 'Laat x = 0,888...\n10x = 8,888...\n10x − x = 8,888... − 0,888...\n9x = 8\nx = 8/9' },
        { difficulty: 'Medium', question: 'Skryf 0,272727... (27 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '3/11', correctAnswers: ['3/11', '27/99'], answer: '3/11', explanation: 'Laat x = 0,272727...\n100x = 27,272727...\n100x − x = 27,272727... − 0,272727...\n99x = 27\nx = 27/99 = 3/11 (deur die GGD, 9, te deel)' },
        { difficulty: 'Hard', question: 'Skryf 0,2333... (3 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '7/30', correctAnswers: ['7/30'], answer: '7/30', explanation: 'Laat x = 0,2333...\n10x = 2,333...\n100x = 23,333...\n100x − 10x = 23,333... − 2,333...\n90x = 21\nx = 21/90 = 7/30 (deur die GGD, 3, te deel)' },

        // Blok 5 — Rangskik ʼn stel reële getalle (Hard)
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van kleinste na grootste: 3, −√5, 2,25, −3, √1.', checkMode: 'auto', correctAnswer: '−3, −√5, √1, 2,25, 3', correctAnswers: ['−3, −√5, √1, 2,25, 3', '-3, -√5, √1, 2,25, 3', '-3, -√5, 1, 2,25, 3'], answer: '−3, −√5, √1, 2,25, 3', explanation: '√5 ≈ 2,24, dus −√5 ≈ −2,24. √1 = 1. Rangorde: −3 < −√5 (≈−2,24) < √1 (=1) < 2,25 < 3.' },
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van grootste na kleinste: 5, −6, √8, 0,9, −2.', checkMode: 'auto', correctAnswer: '5, √8, 0,9, −2, −6', correctAnswers: ['5, √8, 0,9, −2, −6', '5, √8, 0,9, -2, -6'], answer: '5, √8, 0,9, −2, −6', explanation: '√8 ≈ 2,83. Rangorde van grootste na kleinste: 5 > √8 (≈2,83) > 0,9 > −2 > −6.' },
        { difficulty: 'Hard', question: 'Gegee die getalle √99, 10, −√9, 8,7 en −6, rangskik hulle van kleinste na grootste.', checkMode: 'auto', correctAnswer: '−6, −√9, 8,7, √99, 10', correctAnswers: ['−6, −√9, 8,7, √99, 10', '-6, -√9, 8,7, √99, 10', '-6, -3, 8,7, √99, 10'], answer: '−6, −√9, 8,7, √99, 10', explanation: '−√9 = −3. √99 ≈ 9,95. Rangorde: −6 < −3 < 8,7 < √99 (≈9,95) < 10.' },

        // Blok 6 — Waar/onwaar-redenasie oor eienskappe van getalversamelings (Hard)
        { difficulty: 'Hard', question: 'Waar of onwaar: alle rasionale getalle is heelgetalle.', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar'], answer: 'onwaar', explanation: 'Onwaar. Rasionale getalle sluit breuke soos 1/2 in wat nie heelgetalle is nie. Alle heelgetalle is rasionaal, maar nie alle rasionale getalle is heelgetalle nie.' },
        { difficulty: 'Hard', question: 'Waar of onwaar: die produk van twee irrasionale getalle is altyd irrasionaal.', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar'], answer: 'onwaar', explanation: 'Onwaar. Byvoorbeeld, √2 × √2 = 2, wat rasionaal is, alhoewel albei faktore irrasionaal was.' },
        { difficulty: 'Hard', question: 'Prakash sê elke eindigende desimaal is irrasionaal omdat dit syfers ná die desimaalkomma het. Is hy korrek?', checkMode: 'self', answer: 'Nee, hy is verkeerd.', explanation: 'ʼn Eindigende desimaal eindig altyd na ʼn eindige aantal syfers en kan as ʼn breuk geskryf word (bv. 0,5 = 1/2), wat dit rasionaal maak. Syfers ná die desimaalkomma maak nie ʼn getal irrasionaal nie — slegs nie-eindigende, nie-herhalende desimale is irrasionaal.' },
        { difficulty: 'Hard', question: 'Ayanda sê √9 + √16 moet irrasionaal wees omdat albei getalle vierkantsworteltekens het. Verduidelik waarom sy verkeerd is.', checkMode: 'self', answer: 'Sy is verkeerd — √9 + √16 = 3 + 4 = 7, wat rasionaal is.', explanation: 'ʼn Vierkantswortelteken maak nie outomaties ʼn getal irrasionaal nie. 9 en 16 is albei volkome vierkante, dus is √9 = 3 en √16 = 4, albei hele getalle. Hul som, 7, is rasionaal.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering en rangskikking van reële getalle bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor herhalende desimale of rangskikking en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor rasionale en irrasionale getalle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Klassifiseer ʼn getal (Easy)
        { difficulty: 'Easy', question: 'Klassifiseer die getal 20. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Natuurlike getal, hele getal, heelgetal, rasionale getal.', explanation: '20 is ʼn positiewe teltal, dus is dit natuurlik, ʼn hele getal, ʼn heelgetal, en kan as 20/1 geskryf word, dus is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal −8. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Heelgetal, rasionale getal (nie natuurlike getal of hele getal nie).', explanation: '−8 is negatief, dus kan dit nie natuurlik of ʼn hele getal wees nie. Dit is ʼn heelgetal, en aangesien dit as −8/1 geskryf kan word, is dit ook rasionaal.' },
        { difficulty: 'Easy', question: 'Klassifiseer die getal −100. Lys al die versamelings waaraan dit behoort.', checkMode: 'self', answer: 'Heelgetal, rasionale getal (nie natuurlike getal of hele getal nie).', explanation: '−100 is negatief, dus kan dit nie natuurlik of ʼn hele getal wees nie. Dit is ʼn heelgetal, en aangesien dit as −100/1 geskryf kan word, is dit ook rasionaal.' },

        // Blok 2 — Rasionaal of irrasionaal? (Easy/Medium)
        { difficulty: 'Easy', question: 'Is 0,125 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '0,125 is ʼn eindigende desimaal — dit kan as 1/8 geskryf word, dus is dit rasionaal.' },
        { difficulty: 'Easy', question: 'Is √81 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'rasionaal', correctAnswers: ['rasionaal'], answer: 'rasionaal', explanation: '√81 = 9, aangesien 9 × 9 = 81. 81 is ʼn volkome vierkant, dus is sy vierkantswortel ʼn hele getal en daarom rasionaal.' },
        { difficulty: 'Medium', question: 'Is √23 rasionaal of irrasionaal?', checkMode: 'auto', correctAnswer: 'irrasionaal', correctAnswers: ['irrasionaal'], answer: 'irrasionaal', explanation: '23 is nie ʼn volkome vierkant nie (4² = 16 en 5² = 25), dus kan √23 nie tot ʼn hele getal vereenvoudig word nie. Sy desimale waarde is nie-eindigend en nie-herhalend, dus is dit irrasionaal.' },

        // Blok 3 — Identifiseer die irrasionale getal in ʼn lys (Medium/Hard)
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: √40, 11, 5/8, √121?', checkMode: 'auto', correctAnswer: '√40', correctAnswers: ['√40', 'sqrt40', '√(40)'], answer: '√40', explanation: '11 is ʼn heelgetal (rasionaal), 5/8 is reeds ʼn breuk (rasionaal), √121 = 11 (rasionaal). 40 is nie ʼn volkome vierkant nie, dus is √40 irrasionaal.' },
        { difficulty: 'Medium', question: 'Watter van hierdie getalle is irrasionaal: √144, −9, 7/9, √6?', checkMode: 'auto', correctAnswer: '√6', correctAnswers: ['√6', 'sqrt6', '√(6)'], answer: '√6', explanation: '√144 = 12 (rasionaal), −9 is ʼn heelgetal (rasionaal), 7/9 is reeds ʼn breuk (rasionaal). 6 is nie ʼn volkome vierkant nie, dus is √6 irrasionaal.' },
        { difficulty: 'Hard', question: 'Sizwe lys 3/7, √28, −5, en 4,8 en sê √28 is die enigste irrasionale getal. Is hy korrek?', checkMode: 'self', answer: 'Ja, hy is korrek.', explanation: '3/7 is ʼn breuk (rasionaal), −5 is ʼn heelgetal (rasionaal), 4,8 is ʼn eindigende desimaal (rasionaal). 28 is nie ʼn volkome vierkant nie, dus is √28 irrasionaal. Sizwe is korrek.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom √144 by die rasionale getalle hoort, al bevat dit ʼn vierkantswortelteken.', checkMode: 'self', answer: '√144 = 12, wat ʼn hele getal is, dus is dit rasionaal.', explanation: 'Al lyk die uitdrukking √144 asof dit irrasionaal kan wees, is 144 ʼn volkome vierkant (12 × 12 = 144), dus vereenvoudig √144 presies tot 12 — ʼn hele getal, wat rasionaal is. Slegs vierkantswortels van nie-volkome vierkante is irrasionaal.' },

        // Blok 4 — Skryf ʼn herhalende desimaal as ʼn breuk (Medium/Hard)
        { difficulty: 'Medium', question: 'Skryf 0,111... (1 herhalend) as ʼn breuk.', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9'], answer: '1/9', explanation: 'Laat x = 0,111...\n10x = 1,111...\n10x − x = 1,111... − 0,111...\n9x = 1\nx = 1/9' },
        { difficulty: 'Medium', question: 'Skryf 0,636363... (63 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '7/11', correctAnswers: ['7/11', '63/99'], answer: '7/11', explanation: 'Laat x = 0,636363...\n100x = 63,636363...\n100x − x = 63,636363... − 0,636363...\n99x = 63\nx = 63/99 = 7/11 (deur die GGD, 9, te deel)' },
        { difficulty: 'Hard', question: 'Skryf 0,484848... (48 herhalend) as ʼn breuk in eenvoudigste vorm.', checkMode: 'auto', correctAnswer: '16/33', correctAnswers: ['16/33', '48/99'], answer: '16/33', explanation: 'Laat x = 0,484848...\n100x = 48,484848...\n100x − x = 48,484848... − 0,484848...\n99x = 48\nx = 48/99 = 16/33 (deur die GGD, 3, te deel)' },

        // Blok 5 — Rangskik ʼn stel reële getalle (Hard)
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van kleinste na grootste: −1, √7, −√4, 3,5, 0.', checkMode: 'auto', correctAnswer: '−√4, −1, 0, √7, 3,5', correctAnswers: ['−√4, −1, 0, √7, 3,5', '-√4, -1, 0, √7, 3,5', '-2, -1, 0, √7, 3,5'], answer: '−√4, −1, 0, √7, 3,5', explanation: '−√4 = −2. √7 ≈ 2,65. As ons √7 en 3,5 vergelyk: 2,65 < 3,5. Rangorde: −2 < −1 < 0 < √7 (≈2,65) < 3,5.' },
        { difficulty: 'Hard', question: 'Rangskik hierdie getalle van grootste na kleinste: 6, −7, √20, 1,2, −4.', checkMode: 'auto', correctAnswer: '6, √20, 1,2, −4, −7', correctAnswers: ['6, √20, 1,2, −4, −7', '6, √20, 1,2, -4, -7'], answer: '6, √20, 1,2, −4, −7', explanation: '√20 ≈ 4,47. Rangorde van grootste na kleinste: 6 > √20 (≈4,47) > 1,2 > −4 > −7.' },
        { difficulty: 'Hard', question: 'Gegee die getalle √80, 9, −√1, 6,5 en −7, rangskik hulle van kleinste na grootste.', checkMode: 'auto', correctAnswer: '−7, −√1, 6,5, √80, 9', correctAnswers: ['−7, −√1, 6,5, √80, 9', '-7, -√1, 6,5, √80, 9', '-7, -1, 6,5, √80, 9'], answer: '−7, −√1, 6,5, √80, 9', explanation: '−√1 = −1. √80 ≈ 8,94. Rangorde: −7 < −1 < 6,5 < √80 (≈8,94) < 9.' },

        // Blok 6 — Waar/onwaar-redenasie oor eienskappe van getalversamelings (Hard)
        { difficulty: 'Hard', question: 'Waar of onwaar: nul is ʼn natuurlike getal.', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar'], answer: 'onwaar', explanation: 'Onwaar. Natuurlike getalle begin tel by 1. Nul is ʼn hele getal, maar dit is nie ʼn natuurlike getal nie.' },
        { difficulty: 'Hard', question: 'Waar of onwaar: elke hele getal is ʼn heelgetal.', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar'], answer: 'waar', explanation: 'Waar. Die hele getalle (0, 1, 2, 3, ...) is almal binne die heelgetalle ingesluit, wat ook die negatiewe hele getalle bevat.' },
        { difficulty: 'Hard', question: 'Nomvula sê √4 moet irrasionaal wees omdat dit ʼn vierkantswortelteken het. Is sy korrek?', checkMode: 'self', answer: 'Nee, sy is verkeerd.', explanation: '√4 = 2, want 2 × 2 = 4. 4 is ʼn volkome vierkant, dus vereenvoudig √4 presies tot die hele getal 2, wat rasionaal is. ʼn Vierkantswortelteken alleen maak nie ʼn getal irrasionaal nie.' },
        { difficulty: 'Hard', question: 'Lindiwe sê π − π = 0, en aangesien albei terme irrasionaal was, het sy ʼn irrasionale antwoord verwag. Verduidelik waarom die resultaat eintlik rasionaal is.', checkMode: 'self', answer: '0 is rasionaal, al is π irrasionaal.', explanation: 'Om ʼn irrasionale getal van homself af te trek, kanselleer dit altyd presies na 0, wat rasionaal is. Dit wys dat die kombinasie van twee irrasionale getalle nie altyd ʼn irrasionale resultaat gee nie — dit hang af van die spesifieke getalle betrokke.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die klassifisering en rangskikking van reële getalle bemeester.' },
        { minScore: 14, message: 'Goeie werk! Hersien enige gemiste vrae oor herhalende desimale of rangskikking en probeer weer.' },
        { minScore: 9, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor rasionale en irrasionale getalle weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
