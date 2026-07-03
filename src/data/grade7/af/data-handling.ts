import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: stem → blue, leaf → green, sample → orange, population → red
// Section 2: mean → blue, median → green, mode → orange, range → red
// Section 3: bars/slices use all colours; percentages → orange
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Data Insamel en Organiseer',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 7 stel ons vrae, kies gepaste databronne, en organiseer data met behulp van telmerke, tabelle en <strong>stingel-en-blaar-diagrams</strong>. Ons onderskei tussen ʼn ${or('steekproef')} (ʼn kleiner groep) en ʼn ${re('populasie')} (die hele groep wat bestudeer word).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stingels')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('blare')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('steekproef')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('populasie')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Populasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die hele groep wat bestudeer word — elke lid word ingesluit.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Steekproef</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kleiner groep gekies uit die populasie om die geheel te verteenwoordig.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stingel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die voorste syfer(s) van ʼn waarde — gewoonlik die tiene-syfer in ʼn stingel-en-blaar-diagram.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Blaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die laaste syfer van ʼn waarde — gewoonlik die ene-syfer in ʼn stingel-en-blaar-diagram.</p>` +
        `</div>` +

        `</div>` +

        // ── Stem-and-leaf guide ──────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn stingel-en-blaar-diagram te bou</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Lys al die ${bl('stingels')} (tiene-syfers) in volgorde van kleinste na grootste af in die linkerkolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf vir elke waarde sy ${gr('blaar')} (ene-syfer) regs van die ooreenstemmende ${bl('stingel')} neer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Voeg ʼn sleutel by, bv. <strong>${bl('4')} | ${gr('5')} = 45</strong>, sodat lesers weet wat ${bl('stingel')} en ${gr('blaar')} beteken.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Verteenwoordigende steekproewe</p>` +
        `<p style="margin:0;color:#7c2d12;">ʼn ${or('Steekproef')} is net nuttig as dit die ${re('populasie')} goed verteenwoordig. Om slegs uit een subgroep te kies (bv. een klaskamer) kan <strong>vooroordeel</strong> veroorsaak en tot misleidende gevolgtrekkings lei.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wil weet wat die gunstelingsport van sy skool is. Moet hy 20 leerders van een klas vra, of 20 leerders regoor al die grade?',
          answer: `Vra 20 leerders regoor al die grade — dit gee ʼn meer ${or('verteenwoordigende steekproef')} van die hele skool se ${re('populasie')}`,
          steps: [
            `Om leerders regoor al die grade te vra, gee ʼn meer ${or('verteenwoordigende steekproef')} van die hele skool se ${re('populasie')} as net een klas.`,
          ],
        },
        {
          question: 'Organiseer hierdie data in ʼn stingel-en-blaar-diagram — toetstellings: 45, 52, 48, 61, 57, 63, 49.',
          answer: `${bl('4')} | ${gr('5 8 9')} &nbsp; ${bl('5')} | ${gr('2 7')} &nbsp; ${bl('6')} | ${gr('1 3')}`,
          steps: [
            `Identifiseer die ${bl('stingels')} (tiene-syfers): die waardes wissel van 45 tot 63, dus is die stingels ${bl('4')}, ${bl('5')} en ${bl('6')}.`,
            `Lys die ${gr('blare')} (ene-syfers) vir elke stingel:<br>
            ${bl('4')} | ${gr('5, 8, 9')} &nbsp; (van 45, 48, 49)<br>
            ${bl('5')} | ${gr('2, 7')} &nbsp;&nbsp;&nbsp;&nbsp; (van 52, 57)<br>
            ${bl('6')} | ${gr('1, 3')} &nbsp;&nbsp;&nbsp;&nbsp; (van 61, 63)`,
            `Voeg ʼn sleutel by: ${bl('4')} | ${gr('5')} = 45`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Navorser wil die gemiddelde lengte van Graad 7-leerders in Suid-Afrika bepaal. Sy meet 50 leerders van een skool in Kaapstad.\n\na) Wat is die populasie in hierdie studie?\nb) Wat is die steekproef?',
          answer: 'a) Al die Graad 7-leerders in Suid-Afrika\nb) Die 50 leerders wat by een skool in Kaapstad gemeet is',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Skep ʼn stingel-en-blaar-diagram vir die volgende data:\n\n23, 31, 27, 35, 22, 38, 29, 34, 21, 36',
          answer: '2 | 1 2 3 7 9\n3 | 1 4 5 6 8\nSleutel: 2 | 1 = 21',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Graad 7-klas het die volgende punte in ʼn toets behaal:\n58, 72, 65, 81, 74, 63, 79, 68, 55, 77, 82, 60\n\na) Organiseer die data in ʼn stingel-en-blaar-diagram.\nb) Hoeveel leerders het in die 70s behaal?\nc) Was hierdie klas die hele Graad 7-populasie of ʼn steekproef? Verduidelik.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Stingel-en-blaar-diagram (skryf stingels en blare neer)',
              correctAnswer: '5|58 6|0358 7|2479 8|12',
              correctAnswers: [
                '5|5 8\n6|0 3 5 8\n7|2 4 7 9\n8|1 2',
                '5|58\n6|0358\n7|2479\n8|12',
                '5|5,8\n6|0,3,5,8\n7|2,4,7,9\n8|1,2',
              ],
              explanation: 'Stingels: 5, 6, 7, 8\n5 | 5 8    (55, 58)\n6 | 0 3 5 8   (60, 63, 65, 68)\n7 | 2 4 7 9   (72, 74, 77, 79)\n8 | 1 2    (81, 82)\nSleutel: 5 | 5 = 55',
            },
            {
              label: 'b) Hoeveel leerders het in die 70s behaal?',
              correctAnswer: '4',
              explanation: 'Die blare op stingel 7 is 2, 4, 7, 9 — dit is 4 leerders wat in die 70s behaal het.',
            },
            {
              label: 'c) Populasie of steekproef? (tik "steekproef" of "populasie")',
              correctAnswer: 'steekproef',
              explanation: 'Hierdie klas is ʼn steekproef — dit is net een klas, nie elke Graad 7-leerder in die skool of land nie.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om stap vir stap ʼn stingel-en-blaar-diagram te bou en hoe om ʼn verteenwoordigende steekproef te kies" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Stingel-en-blaar-diagram vir toetstellings 45 52 48 61 57 63 49 met stingels in blou en blare in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MEASURES OF CENTRAL TENDENCY AND RANGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'central-tendency-range',
      title: 'Maatstawwe van Sentrale Neiging en Variasiewydte',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons som numeriese data op met behulp van die ${bl('gemiddelde')} (gemiddeld), ${gr('mediaan')} (middelste waarde) en ${or('modus')} (mees voorkomende waarde). Die ${re('variasiewydte')} is die verskil tussen die grootste en kleinste waardes, en dit wys die <strong>verspreiding</strong> van die data.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddelde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('modus')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('variasiewydte')}</span>` +
        `</div>` +

        // ── Definitions ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Definisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gemiddelde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel al die waardes bymekaar, en deel dan deur die aantal waardes.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Mediaan</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rangskik die data; die middelste waarde is die mediaan. By ʼn ewe aantal waardes, bereken die gemiddeld van die twee middelste waardes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Modus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat die meeste voorkom. ʼn Datastel kan meer as een modus hê, of glad geen modus nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Variasiewydte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Grootste waarde min kleinste waarde — dit wys hoe versprei die data is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rangskik altyd eers die data</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy die ${gr('mediaan')} of ${or('modus')} vind, rangskik die data van kleinste na grootste. Dit maak dit baie makliker om die middelste waarde en herhaalde waardes raak te sien.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die gemiddelde van 14, 8, 19, 11, 13.',
          answer: `${bl('Gemiddelde')} = ${bl('13')}`,
          steps: [
            `Tel al die waardes bymekaar: 14 + 8 + 19 + 11 + 13 = ${bl('65')}`,
            `Tel die waardes: daar is <strong>5</strong> waardes.`,
            `Deel die som deur die telling: ${bl('65')} ÷ 5 = ${bl('13')}`,
            `<strong>Antwoord:</strong> ${bl('Gemiddelde')} = ${bl('13')} ✓`,
          ],
        },
        {
          question: 'Vind die mediaan van 22, 15, 30, 18, 25.',
          answer: `${gr('Mediaan')} = ${gr('22')}`,
          steps: [
            `Rangskik die waardes van kleinste na grootste: 15, 18, ${gr('22')}, 25, 30`,
            `Daar is <strong>5</strong> waardes, dus is die middelste waarde die 3de een.`,
            `Die 3de waarde is ${gr('22')}.`,
            `<strong>Antwoord:</strong> ${gr('Mediaan')} = ${gr('22')} ✓`,
          ],
        },
        {
          question: 'Vind die variasiewydte van 45, 12, 38, 29, 52.',
          answer: `${re('Variasiewydte')} = ${re('40')}`,
          steps: [
            `Identifiseer die grootste waarde: <strong>52</strong>`,
            `Identifiseer die kleinste waarde: <strong>12</strong>`,
            `Trek af: ${re('Variasiewydte')} = 52 − 12 = ${re('40')}`,
            `<strong>Antwoord:</strong> ${re('Variasiewydte')} = ${re('40')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vind die gemiddelde van die volgende waardes:\n\n6, 14, 9, 11, 10',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Som: 6 + 14 + 9 + 11 + 10 = 50\nAantal waardes: 5\nGemiddelde: 50 ÷ 5 = 10 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Vir die datastel 3, 7, 7, 8, 12, 15, 15, 15, 20, vind:',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gemiddelde',
              correctAnswer: '11.33',
              correctAnswers: ['11.33', '11⅓', '102/9', '34/3'],
              explanation: 'Som: 3+7+7+8+12+15+15+15+20 = 102\nAantal waardes: 9\nGemiddelde: 102 ÷ 9 ≈ 11.33 ✓',
            },
            {
              label: 'b) Mediaan',
              correctAnswer: '12',
              explanation: 'Data is reeds gerangskik: 3, 7, 7, 8, 12, 15, 15, 15, 20\n9 waardes → middelste is die 5de waarde = 12 ✓',
            },
            {
              label: 'c) Modus',
              correctAnswer: '15',
              explanation: '15 kom drie keer voor — meer as enige ander waarde.\nModus = 15 ✓',
            },
            {
              label: 'd) Variasiewydte',
              correctAnswer: '17',
              explanation: 'Grootste: 20, kleinste: 3\nVariasiewydte: 20 − 3 = 17 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Die ouderdomme van spelers in ʼn sokkerspan is: 16, 17, 15, 18, 17, 16, 19, 17, 15, 16.\n\na) Vind die gemiddelde, mediaan en modus.\nb) Watter maatstaf verteenwoordig die tipiese ouderdom die beste? Verduidelik.\nc) ʼn Nuwe speler van 30 jaar oud sluit aan. Herbereken die gemiddelde. Wat merk jy op?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gemiddelde',
              correctAnswer: '16.6',
              correctAnswers: ['16.6', '16.60'],
              explanation: 'Som: 16+17+15+18+17+16+19+17+15+16 = 166\nGemiddelde: 166 ÷ 10 = 16.6 ✓',
            },
            {
              label: 'a) Mediaan',
              correctAnswer: '16.5',
              correctAnswers: ['16.5'],
              explanation: 'Gerangskik: 15, 15, 16, 16, 16, 17, 17, 17, 18, 19\n10 waardes → gemiddeld van 5de en 6de: (16+17)÷2 = 16.5 ✓',
            },
            {
              label: 'a) Modus',
              correctAnswer: '16 and 17',
              correctAnswers: ['16 and 17', '16, 17', '17 and 16', '16 en 17', '17 en 16'],
              explanation: '16 kom 3 keer voor; 17 kom 3 keer voor. Albei is modusse (bimodaal). ✓',
            },
            {
              label: 'c) Nuwe gemiddelde nadat ʼn speler van 30 jaar aansluit',
              correctAnswer: '17.8',
              correctAnswers: ['17.8'],
              explanation: 'Nuwe som: 166 + 30 = 196\nNuwe aantal waardes: 11\nNuwe gemiddelde: 196 ÷ 11 ≈ 17.8\nDie gemiddelde het merkbaar toegeneem omdat 30 ʼn uitskieter is — baie groter as al die ander waardes. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die gemiddelde mediaan modus en variasiewydte te bereken met stap-vir-stap uitgewerkte voorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat ʼn datastel wys met die gemiddelde gemerk in blou mediaan in groen modus in oranje en variasiewydte gewys as ʼn rooi dubbelkop-pyl" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REPRESENTING AND INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'representing-interpreting-data',
      title: 'Data Voorstel en Interpreteer',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons stel data voor met behulp van staafgrafieke, dubbelstaafgrafieke, histogramme en sirkelgrafieke. Wanneer ons data interpreteer, lees ons titels, asse en skale noukeurig, en ontleed dan neigings, sentrale neigings en soek na moontlike vooroordeel of foute in die data.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('groep A / kategorie 1')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('groep B / kategorie 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasies / etikette')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kategorie 3')}</span>` +
        `</div>` +

        // ── Graph types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes grafieke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Staafgrafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk kategorieë met stawe van gelyke breedte. Elke staaf verteenwoordig een kategorie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Dubbelstaafgrafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vergelyk twee groepe langs mekaar vir dieselfde kategorieë. Gebruik ʼn kleursleutel.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Histogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Soos ʼn staafgrafiek maar vir gegroepeerde numeriese data — stawe raak mekaar omdat die data aaneenlopend is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sirkelgrafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wys hoe ʼn geheel in dele verdeel word. Elke skyf is ʼn persentasie of breuk van 360°.</p>` +
        `</div>` +

        `</div>` +

        // ── Interpretation checklist ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Interpretasiekontrolelys</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lees die titel</strong> — verstaan waaroor die grafiek gaan en watter groep bestudeer is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lees die asse en skaal</strong> — kontroleer wat elke as meet en wat elke eenheid of interval verteenwoordig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identifiseer neigings</strong> — kyk watter kategorie die hoogste/laagste is, patrone, en verskille tussen groepe.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kontroleer vir vooroordeel</strong> — oorweeg of die steekproef verteenwoordigend was en of die skaal misleidend kan wees.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sirkelgrafiekberekening</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om ʼn getal van ʼn sirkelgrafiek-persentasie te vind: vermenigvuldig die ${or('persentasie')} (as ʼn desimaal) met die totaal. Byvoorbeeld, ${or('35%')} van 80 = 0.35 × 80 = 28.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Dubbelstaafgrafiek vergelyk seuns en dogters se toetstellings oor 4 vakke. Hoe sou jy identifiseer watter groep oor die algemeen beter presteer het?',
          answer: `Vergelyk staafhoogtes per vak; die groep met meer vakke waar die ${bl('staaf')} langer is, het oor die algemeen beter presteer`,
          steps: [
            `Vergelyk die hoogte van elke paar stawe per vak — die langer staaf in elke paar wys watter groep hoër in daardie vak behaal het.`,
            `Tel hoeveel vakke elke groep lei — die groep met meer wenoorwinnings het in die meeste vakke beter presteer.`,
            `Vir die algehele neiging, tel die verskille op: as ${bl('seuns se stawe')} deurgaans langer is, het seuns oor die algemeen beter presteer; as ${gr('dogters se stawe')} deurgaans langer is, het dogters oor die algemeen beter presteer.`,
          ],
        },
        {
          question: 'Lerato se sirkelgrafiek wys 40% verkies sokker, 35% verkies netbal en 25% verkies swem in ʼn opname van 80 leerders. Hoeveel verkies netbal?',
          answer: `${or('35%')} van 80 = ${gr('28')} leerders verkies netbal`,
          steps: [
            `Identifiseer die persentasie vir netbal: ${or('35%')}`,
            `Skakel die persentasie om na ʼn desimaal: ${or('35%')} = ${or('0.35')}`,
            `Vermenigvuldig met die totale aantal leerders: ${or('0.35')} × 80 = ${gr('28')}`,
            `<strong>Antwoord:</strong> ${gr('28')} leerders verkies netbal ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Sirkelgrafiek wys dat 60% van leerders Wiskunde verkies en 40% verkies Engels. As 50 leerders opgeneem is, hoeveel verkies Wiskunde?',
          answer: '30',
          checkMode: 'auto',
          correctAnswer: '30',
          explanation: '60% van 50 = 0.60 × 50 = 30 leerders verkies Wiskunde ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Dubbelstaafgrafiek wys die volgende aantal boeke gelees per maand deur seuns en dogters:\n\nJanuarie: Seuns 12, Dogters 15\nFebruarie: Seuns 18, Dogters 14\nMaart: Seuns 16, Dogters 20\nApril: Seuns 11, Dogters 13',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) In watter maand het seuns die meeste gelees?',
              correctAnswer: 'February',
              correctAnswers: ['February', 'Februarie'],
              explanation: 'Seuns: Jan 12, Feb 18, Mrt 16, Apr 11. Die hoogste waarde is 18 in Februarie. ✓',
            },
            {
              label: 'b) Totale boeke gelees deur dogters oor 4 maande',
              correctAnswer: '62',
              explanation: 'Dogters totaal: 15 + 14 + 20 + 13 = 62 boeke ✓',
            },
            {
              label: 'c) Watter groep het oor die algemeen meer boeke gelees? (tik "seuns" of "dogters")',
              correctAnswer: 'girls',
              correctAnswers: ['girls', 'dogters'],
              explanation: 'Seuns totaal: 12+18+16+11 = 57\nDogters totaal: 15+14+20+13 = 62\nDogters het oor die algemeen meer boeke gelees (62 > 57). ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Opname van 200 Graad 7-leerders het oor hul gunstelingvak gevra. Die resultate was:\n\nWiskunde: 70 leerders\nWetenskap: 50 leerders\nEngels: 40 leerders\nGeskiedenis: 24 leerders\nKuns: 16 leerders\n\na) Druk elke vak as ʼn persentasie van die totaal uit.\nb) Watter vak sou die grootste skyf in ʼn sirkelgrafiek hê?\nc) Watter hoek (in grade) sou die Wiskunde-skyf in ʼn sirkelgrafiek hê?\nd) ʼn Koerantopskrif sê "70% van leerders is lief vir Wiskunde." Is dit akkuraat? Verduidelik.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Persentasie vir Wiskunde',
              correctAnswer: '35%',
              correctAnswers: ['35%', '35'],
              explanation: '70 ÷ 200 × 100 = 35% ✓',
            },
            {
              label: 'a) Persentasie vir Wetenskap',
              correctAnswer: '25%',
              correctAnswers: ['25%', '25'],
              explanation: '50 ÷ 200 × 100 = 25% ✓',
            },
            {
              label: 'b) Watter vak het die grootste skyf?',
              correctAnswer: 'Mathematics',
              correctAnswers: ['Mathematics', 'Wiskunde'],
              explanation: 'Wiskunde het 70 leerders (35%) — die hoogste telling, dus het dit die grootste skyf. ✓',
            },
            {
              label: 'c) Hoek vir die Wiskunde-skyf (in grade)',
              correctAnswer: '126',
              correctAnswers: ['126', '126°'],
              explanation: 'Hoek = persentasie × 360° = 0.35 × 360° = 126° ✓',
            },
            {
              label: 'd) Is die opskrif akkuraat? (tik "ja" of "nee")',
              correctAnswer: 'no',
              correctAnswers: ['no', 'nee'],
              explanation: 'Nee — slegs 35% (70 uit 200) verkies Wiskunde, nie 70% nie. Die opskrif is onakkuraat en misleidend. ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om staafgrafieke dubbelstaafgrafieke en sirkelgrafieke te lees en hoe om waardes van persentasies te bereken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Langs mekaar: dubbelstaafgrafiek met blou en groen stawe vir twee groepe oor vier kategorieë, en ʼn sirkelgrafiek met gekleurde skywe en oranje persentasie-etikette" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — sample vs population ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die verskil tussen ʼn steekproef en ʼn populasie?',
      answer: 'ʼn Populasie is die hele groep wat bestudeer word, terwyl ʼn steekproef ʼn kleiner groep is wat uit die populasie gekies is.',
      checkMode: 'self',
    },

    // ── Q2 Medium — stem-and-leaf display ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Organiseer in ʼn stingel-en-blaar-diagram: 34, 28, 41, 37, 25, 46.',
      answer: '2 | 5 8\n3 | 4 7\n4 | 1 6',
      checkMode: 'self',
    },

    // ── Q3 Hard — sampling bias ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho doen ʼn opname net onder sy vriende oor hul gunsteling-roomysgeur. Waarom kan dit vooroordeel veroorsaak?',
      answer: 'Sy vriende deel dalk soortgelyke smake, dus verteenwoordig die steekproef nie die breër populasie regverdig nie.',
      checkMode: 'self',
    },

    // ── Q4 Easy — mean ──────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die gemiddelde van 6, 10, 8, 12, 14.',
      answer: '10',
      checkMode: 'auto',
      correctAnswer: '10',
      explanation: 'Som: 6 + 10 + 8 + 12 + 14 = 50\nAantal waardes: 5\nGemiddelde: 50 ÷ 5 = 10 ✓',
    },

    // ── Q5 Easy — median ────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die mediaan van 9, 15, 7, 20, 12.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Rangskik: 7, 9, 12, 15, 20\n5 waardes → middelste is die 3de waarde = 12 ✓',
    },

    // ── Q6 Medium — mode ────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die modus van 5, 8, 5, 9, 5, 3.',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      explanation: '5 kom drie keer voor — meer as enige ander waarde.\nModus = 5 ✓',
    },

    // ── Q7 Medium — range ───────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die variasiewydte van 18, 42, 9, 35, 27.',
      answer: '33',
      checkMode: 'auto',
      correctAnswer: '33',
      explanation: 'Grootste: 42, kleinste: 9\nVariasiewydte: 42 − 9 = 33 ✓',
    },

    // ── Q8 Hard — mean vs median ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê die mediaan is altyd dieselfde as die gemiddelde. Is sy korrek? Verduidelik met ʼn voorbeeld.',
      answer: 'Nee — vir die data 1, 2, 3, 4, 100: gemiddelde = 22, mediaan = 3. Hulle is gewoonlik verskillend tensy die data eweredig versprei is.',
      checkMode: 'self',
    },

    // ── Q9 Easy — bar graph requirements ───────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Staafgrafiek wys verkope vir 4 dae. Wat moet elke staafgrafiek hê?',
      answer: 'ʼn Titel, geëtiketteerde asse en ʼn konstante skaal.',
      checkMode: 'self',
    },

    // ── Q10 Medium — pie chart calculation ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sirkelgrafiek wys 60% verkies tee, 25% verkies koffie en 15% verkies sap, uit 120 mense opgeneem. Hoeveel verkies koffie?',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: '25% van 120 = 0.25 × 120 = 30 ✓',
    },

    // ── Q11 Hard — double bar graph interpretation ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo se dubbelstaafgrafiek vergelyk Kwartaal 1- en Kwartaal 2-tellings vir 5 leerders. Drie leerders wys langer Kwartaal 2-stawe. Wat dui dit aan?',
      answer: 'Dit dui aan dat daardie drie leerders tussen Kwartaal 1 en Kwartaal 2 verbeter het.',
      checkMode: 'self',
    },

    // ── Q12 Medium — mean and range (multi-part) ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Datastel is 12, 15, 18, 21, 24. Vind die gemiddelde en die variasiewydte.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Gemiddelde',
          correctAnswer: '18',
          explanation: 'Som: 12 + 15 + 18 + 21 + 24 = 90\nAantal waardes: 5\nGemiddelde: 90 ÷ 5 = 18 ✓',
        },
        {
          label: 'b) Variasiewydte',
          correctAnswer: '12',
          explanation: 'Grootste: 24, kleinste: 12\nVariasiewydte: 24 − 12 = 12 ✓',
        },
      ],
    },

    // ── Q13 Hard — mode in stem-and-leaf ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê ʼn stingel-en-blaar-diagram kan die modus maklik wys. Is sy korrek? Verduidelik.',
      answer: 'Ja — die modus is die mees herhaalde blaarwaarde, wat maklik is om raak te sien aangesien die data reeds gerangskik is.',
      checkMode: 'self',
    },

    // ── Q14 Hard — mean and spread ─────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Klas van 30 leerders het toetstellings met ʼn gemiddelde van 65%. As 5 leerders 100% behaal het en die res laer gemiddeld het, wat mag dit oor die verspreiding van tellings aandui?',
      answer: 'Dit dui op ʼn wye variasiewydte of moontlike uitskieters, aangesien hoë tellings van ʼn paar leerders die gemiddelde kan optrek ten spyte daarvan dat die meeste leerders laer behaal het.',
      checkMode: 'self',
    },

    // ── Q15 Hard — graph interpretation ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om ʼn grafiek te lees beteken net om na die hoogste staaf te kyk. Waarom is dit ʼn onvolledige benadering?',
      answer: 'Om ʼn grafiek behoorlik te lees vereis dat jy die titel, asse, skaal en algehele neiging kontroleer, nie net die hoogste enkele waarde identifiseer nie.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het datahantering bemeester.' },
      { minPercent: 75, message: 'Puik werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 33, message: 'Uitstekend! ʼn Volpunt-telling — jy het Datahantering vir Graad 7 heeltemal bemeester. Hou so aan!' },
    { minScore: 27, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van datahantering. Gaan enige gemiste dele deur en jy sal dit perfek kry.' },
    { minScore: 20, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 12, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling deur, en probeer dan weer." },
  ],
}
