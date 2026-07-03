import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (pattern roles) ───────────────────────────────────────────
// pattern term / table value / rule verification → blue   (#2563eb)
// difference / pattern context                  → orange (#ea580c)
// algebraic rule / prediction                   → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numeriese en Geometriese Patrone',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INVESTIGATING AND EXTENDING PATTERNS REPRESENTED ALGEBRAICALLY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-extending-patterns-algebraically',
      title: 'Ondersoek en Uitbreiding van Patrone Algebraïes Voorgestel',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek en brei numeriese en geometriese patrone uit, en stel verwantskappe voor nie net in woorde nie, maar <strong>algebraïes voorgestel</strong>, insluitend patrone van die leerder se eie skepping, en toets reëls teen verskeie terme ter verifikasie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('patroonterme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verskille')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('algebraïese reël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vind van ʼn algebraïese reël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skryf die terme uit')} en vind die <strong>eerste verskille</strong> — trek elke term af van die volgende.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vind die <strong>tweede verskille</strong> — trek elke eerste verskil af van die volgende. As hulle ${or('konstant')} is, is die patroon <strong>kwadraties</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Toets ʼn reël')} — vervang n = 1, 2, 3 in jou voorgestelde formule en kontroleer of dit met al die terme ooreenstem. Pas aan en verifieer totdat dit bevestig is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelfeit: tweede verskille en kwadratiese patrone</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die tweede verskille konstant is en gelyk is aan <em>d</em>, dan is die koëffisiënt van n² in die algebraïese reël <strong>d ÷ 2</strong>. Byvoorbeeld, ʼn konstante tweede verskil van 4 beteken die voorste term is <strong>2n²</strong>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Patroon is 4, 11, 22, 37. Vind die algebraïese reël.',
          answer: `nde term = ${gr('2n² + n + 1')}`,
          steps: [
            `Skryf die ${bl('patroonterme')} uit: ${bl('4')}, ${bl('11')}, ${bl('22')}, ${bl('37')}.`,
            `Vind die eerste verskille: ${or('7')}, ${or('11')}, ${or('15')} — ${or('neem met 4 toe')}, wat die konstante tweede verskil is. Dit bevestig ʼn kwadratiese verwantskap met ʼn voorste koëffisiënt van 4 ÷ 2 = 2.`,
            `Toets ${gr('2n² + n + 1')}: n = 1 gee 2 + 1 + 1 = ${bl('4')} ✓, n = 2 gee 8 + 2 + 1 = ${bl('11')} ✓, n = 3 gee 18 + 3 + 1 = ${bl('22')} ✓.`,
            `Reël bevestig: nde term = ${gr('2n² + n + 1')} ✓`,
          ],
        },
        {
          question: 'Sipho skep sy eie patroon: 5, 13, 25, 41. Vind die reël.',
          answer: `nde term = ${gr('2n² + n + 2')}`,
          steps: [
            `Skryf die ${bl('patroonterme')} uit: ${bl('5')}, ${bl('13')}, ${bl('25')}, ${bl('41')}.`,
            `Vind die eerste verskille: ${or('8')}, ${or('12')}, ${or('16')} — ${or('neem met 4 toe')}. Die konstante tweede verskil van 4 bevestig ʼn kwadratiese patroon met ʼn voorste koëffisiënt van 2.`,
            `Toets ${gr('2n² + n + 2')}: n = 1 gee 2 + 1 + 2 = ${bl('5')} ✓, n = 2 gee 8 + 2 + 2 = ${bl('13')} ✓, n = 3 gee 18 + 3 + 2 = ${bl('25')} ✓.`,
            `Reël: nde term = ${gr('2n² + n + 2')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon 3, 8, 15, 24.',
          answer: '35',
          checkMode: 'auto',
          correctAnswer: '35',
          explanation: 'Eerste verskille: 5, 7, 9 — neem met 2 toe. Die volgende verskil is 11. Dus is die volgende term 24 + 11 = 35.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die algebraïese reël vir die patroon 2, 9, 20, 35.',
          answer: '2n²-n+1',
          checkMode: 'auto',
          correctAnswer: '2n²-n+1',
          explanation: 'Eerste verskille: 7, 11, 15 — neem met 4 toe. Die konstante tweede verskil bevestig ʼn kwadratiese patroon met ʼn voorste koëffisiënt van 2. Toets 2n²-n+1: n=1 gee 2, n=2 gee 9, n=3 gee 20, n=4 gee 35 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho sê die patroon 1, 6, 15, 28 volg die reël 2n²-n. Verifieer dit vir n=1,2,3,4.',
          answer: 'n=1: 2-1=1 ✓. n=2: 8-2=6 ✓. n=3: 18-3=15 ✓. n=4: 32-4=28 ✓. Die reël is geverifieer.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Geometriese patroon van kolletjies lewer 1, 5, 12, 22 (pentagonale getalle). Vind die 6de term met die reël (3n²-n)/2.',
          answer: '51',
          checkMode: 'auto',
          correctAnswer: '51',
          explanation: 'Vir n=6: (3(36)-6)/2 = (108-6)/2 = 102/2 = 51.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato het ʼn patroon van groeiende vierkante met 1,4,9,16 kolletjies. Verifieer die reël n² vir n=6 en verduidelik die patroonvorm.',
          answer: 'n=6: 6²=36 kolletjies. Die patroon vorm toenemend groter vierkantige roosters van kolletjies namate n toeneem.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the algebraic rule for numeric patterns by calculating first and second differences and testing formulas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a numeric pattern sequence with first differences (orange) and second differences highlighted, leading to an algebraic rule (green)" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PATTERNS REPRESENTED IN DIAGRAMS, TABLES AND ALGEBRAIC LANGUAGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-diagrams-tables-algebraic-language',
      title: 'Patrone Voorgestel in Diagramme, Tabelle en Algebraïese Taal',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">Ons beweeg buigsaam tussen <strong>verskillende voorstellings</strong> van dieselfde patroon — fisiese/diagramvorm, tabelle, en algebraïese uitdrukkings — en beskryf en regverdig die algemene reël oor al die vorms heen.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tabelwaardes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('diagrampatroon')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('algebraïese reël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Drie voorstellings van dieselfde patroon</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Diagram / fisiese vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Visuele rangskikking van kolletjies, teëls, stokkies of vorms wat ${gr('groei')} volgens ʼn reël.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Tabel van waardes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Tabel met rye vir n (stapnommer) en die ooreenstemmende termwaarde — dit wys die verwantskap duidelik.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Algebraïese uitdrukking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Formule met n wat ${or('enige term genereer')} in die reeks — die kragtigste voorstelling.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Beweging tussen voorstellings</p>` +
        `<p style="margin:0;color:#14532d;">Begin by watter voorstelling jy ook al gegee word. Bou ʼn ${bl('tabel van waardes')} as jy slegs ʼn ${gr('diagram')} het. Gebruik dan die tabel om die ${or('algebraïese reël')} te vind deur verskille te bereken. Verifieer die reël altyd deur dit terug in die formule te vervang.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Geometriese patroon van kolletjies vorm pentagonale getalle: 1, 5, 12, 22. Stel dit voor in ʼn tabel en vind die algebraïese reël.',
          answer: `nde term = ${or('(3n² − n) / 2')}`,
          steps: [
            `Bou ʼn ${bl('tabel van waardes')}: n = 1, 2, 3, 4 en ooreenstemmende term = ${bl('1')}, ${bl('5')}, ${bl('12')}, ${bl('22')}.`,
            `Vind die eerste verskille: ${or('4')}, ${or('7')}, ${or('10')} — ${or('neem met 3 toe')}. Die konstante tweede verskil is 3, wat ʼn voorste koëffisiënt van 3 ÷ 2 gee.`,
            `Die reël is nde term = ${or('(3n² − n) / 2')}. Verifieer: n=1 → (3-1)/2=1 ✓, n=2 → (12-2)/2=5 ✓, n=3 → (27-3)/2=12 ✓, n=4 → (48-4)/2=22 ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn patroon voorgestel as groeiende vierkante: 1, 4, 9, 16 kolletjies. Druk dit algebraïes uit en verifieer vir n=5.',
          answer: `nde term = ${or('n²')}`,
          steps: [
            `Bou ʼn ${bl('tabel')}: n = 1, 2, 3, 4 en term = ${bl('1')}, ${bl('4')}, ${bl('9')}, ${bl('16')}. Dit is n² — herken dit as volkome vierkante.`,
            `Die ${or('algebraïese reël')} is nde term = ${or('n²')}. Vir n = 5: 5² = ${gr('25')} kolletjies. Sien die diagram hieronder wat die groei van die kolletjiepatroon wys.`,
            `Verifieer: elke stap vorm ʼn groter ${gr('vierkantige rooster')} van kolletjies. n=1 gee ʼn 1×1-rooster, n=2 gee ʼn 2×2-rooster, n=5 gee ʼn 5×5-rooster van 25 kolletjies ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon 5, 12, 21, 32.',
          answer: '45',
          checkMode: 'auto',
          correctAnswer: '45',
          explanation: 'Eerste verskille: 7, 9, 11 — neem met 2 toe. Die volgende verskil is 13. Dus is die volgende term 32 + 13 = 45.',
        },
        {
          difficulty: 'Medium',
          question: 'Verifieer dat die reël n²+2n werk vir die patroon 3, 8, 15, 24 by n=4.',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          explanation: 'n=4: 4²+2(4)=16+8=24 ✓. Die reël n²+2n gee 24 by n=4, wat ooreenstem met die 4de term van die patroon.',
        },
        {
          difficulty: 'Hard',
          question: "Thabo se patroon van gestapelde stoele volg bene=3n+1. Vind die aantal bene benodig vir 12 gestapelde stoele.",
          answer: '37',
          checkMode: 'auto',
          correctAnswer: '37',
          explanation: 'bene = 3(12)+1 = 36+1 = 37 bene.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die reël vir die patroon 4, 13, 28, 49.',
          answer: '3n²+n',
          checkMode: 'auto',
          correctAnswer: '3n²+n',
          explanation: 'Eerste verskille: 9, 15, 21 — neem met 6 toe. Tweede verskil = 6, dus is die koëffisiënt van n² gelyk aan 3. Toets 3n²+n: n=1 gee 4, n=2 gee 14, n=3 gee 30, n=4 gee 52. Reël: 3n²+n.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê die patroon 2, 7, 16, 29 volg die reël 2n²-n+1. Verifieer vir n=1,2,3,4.',
          answer: 'n=1: 2-1+1=2 ✓. n=2: 8-2+1=7 ✓. n=3: 18-3+1=16 ✓. n=4: 32-4+1=29 ✓. Die reël is geverifieer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to move between diagram, table and algebraic representations of the same pattern, with a worked example for pentagonal numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a growing square dot pattern showing steps 1 through 4, with dots arranged to visually confirm n² for each step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — JUSTIFYING GENERAL RULES AND SOLVING PATTERN PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'justifying-general-rules-solving-pattern-problems',
      title: 'Regverdiging van Algemene Reëls en Oplossing van Patroonprobleme',
      icon: 'ƒ',
      explanation:
        `<p style="margin-bottom:16px;">Ons <strong>regverdig algemene reëls</strong> vir patrone deur algebraïese redenering te gebruik, pas meerstap-verifikasie toe, en los werklike-lewe-probleme op wat vereis dat patrone geïdentifiseer en uitgebrei word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reëlverifikasie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('patroonkonteks')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('voorspelling')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn reël te verifieer en te regverdig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Vervang')} n = 1, 2, 3, 4 (ten minste) in die voorgestelde reël en bereken die uitset vir elkeen.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vergelyk')} elke berekende waarde met die ooreenstemmende term in die ${or('patroonkonteks')}. Merk ✓ vir ʼn ooreenstemming en ✗ vir ʼn wanpassing.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">As al die terme ooreenstem, is die reël geverifieer. Gebruik dit om ʼn ${gr('voorspelling')} te maak vir enige latere term deur die verlangde waarde van n te vervang.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Werklike-lewe patroonprobleme</p>` +
        `<p style="margin:0;color:#1e3a8a;">Lees die ${or('konteks')} versigtig om die patroon te identifiseer. Bou ʼn tabel van waardes vir ʼn paar stappe, vind die reël, verifieer dit, en gebruik dit dan om die waarde by die verlangde stap te voorspel. Gee jou ${gr('antwoord altyd in konteks')} (bv. "25 bene word benodig").</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo beweer die patroon 3, 10, 21, 36 volg die reël 2n²+n. Verifieer dit vir n=1,2,3,4.',
          answer: `Die reël ${bl('2n² + n')} is ${gr('geverifieer')} vir al vier terme`,
          steps: [
            `${bl('Vervang')} n = 1: 2(1)² + 1 = 2 + 1 = 3 ✓`,
            `${bl('Vervang')} n = 2: 2(4) + 2 = 8 + 2 = 10 ✓`,
            `${bl('Vervang')} n = 3: 2(9) + 3 = 18 + 3 = 21 ✓`,
            `${bl('Vervang')} n = 4: 2(16) + 4 = 32 + 4 = 36 ✓`,
            `Al vier terme stem ooreen — die reël ${bl('2n² + n')} is geverifieer ✓`,
          ],
        },
        {
          question: 'Amahle stapel stoele in ʼn patroon — 1 stoel benodig 4 bene, 2 gestapelde stoele deel bene en benodig 7 bene, 3 gestapel benodig 10 bene. Vind die reël en voorspel 8 gestapelde stoele.',
          answer: `Reël: bene = ${or('3n + 1')} → vir n = 8: ${gr('25 bene')}`,
          steps: [
            `Identifiseer die ${or('patroonkonteks')}: 1 stoel → 4 bene, 2 stoele → 7 bene, 3 stoele → 10 bene. Die eerste verskille is ${or('3, 3')} — konstant, dus is dit ʼn lineêre patroon.`,
            `ʼn Konstante verskil van 3 beteken die reël het die vorm 3n + c. Vervang n = 1: 3(1) + c = 4 → c = 1. Reël: bene = ${or('3n + 1')}.`,
            `${gr('Voorspel')} vir n = 8: bene = 3(8) + 1 = 24 + 1 = ${gr('25 bene')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Gebruik die reël 2n²+3 om die 5de term te vind.',
          answer: '53',
          checkMode: 'auto',
          correctAnswer: '53',
          explanation: 'n=5: 2(25)+3=50+3=53.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Patroon begin met 6, 16, 30, 48. Vind die reël.',
          answer: '2n²+4n',
          checkMode: 'auto',
          correctAnswer: '2n²+4n',
          explanation: 'Eerste verskille: 10, 14, 18 — neem met 4 toe. Tweede verskil=4, koëffisiënt van n²=2. Toets 2n²+4n: n=1 gee 6 ✓, n=2 gee 16 ✓, n=3 gee 30 ✓, n=4 gee 48 ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho sê alle kwadratiese patrone het ʼn konstante tweede verskil. Is hy korrek? Verduidelik met die patroon 3,8,15,24.',
          answer: 'Ja — eerste verskille is 5,7,9 (nie konstant nie), maar tweede verskille (7-5=2, 9-7=2) is konstant by 2, wat ʼn kwadratiese patroon bevestig.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Vind die 15de term van die patroon met reël n²+n+1.',
          answer: '241',
          checkMode: 'auto',
          correctAnswer: '241',
          explanation: 'n=15: 15²+15+1=225+15+1=241.',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato sê die patroon 6, 14, 26, 42 volg die reël 2n²+2n+2. Verifieer dit vir n=1 en n=4.',
          answer: 'n=1: 2+2+2=6 ✓. n=4: 32+8+2=42 ✓. Die reël is geverifieer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to verify an algebraic rule by substitution and how to solve real-life pattern problems by identifying the rule and making predictions" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the stacked chairs pattern for steps 1 through 4, with legs counted and the rule legs=3n+1 annotated" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
