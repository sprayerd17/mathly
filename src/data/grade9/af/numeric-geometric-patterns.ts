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
          answer: `nde term = ${gr('2n² + 2n + 1')}`,
          steps: [
            `Skryf die ${bl('patroonterme')} uit: ${bl('5')}, ${bl('13')}, ${bl('25')}, ${bl('41')}.`,
            `Vind die eerste verskille: ${or('8')}, ${or('12')}, ${or('16')} — ${or('neem met 4 toe')}. Die konstante tweede verskil van 4 bevestig ʼn kwadratiese patroon met ʼn voorste koëffisiënt van 2.`,
            `Toets ${gr('2n² + 2n + 1')}: n = 1 gee 2 + 2 + 1 = ${bl('5')} ✓, n = 2 gee 8 + 4 + 1 = ${bl('13')} ✓, n = 3 gee 18 + 6 + 1 = ${bl('25')} ✓, n = 4 gee 32 + 8 + 1 = ${bl('41')} ✓.`,
            `Reël: nde term = ${gr('2n² + 2n + 1')} ✓`,
          ],
        },
      ],


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
          answer: '2n²+n-1',
          checkMode: 'auto',
          correctAnswer: '2n²+n-1',
          explanation: 'Eerste verskille: 7, 11, 15 — neem met 4 toe. Die konstante tweede verskil bevestig ʼn kwadratiese patroon met ʼn voorste koëffisiënt van 2. Toets 2n²+n-1: n=1 gee 2+1-1=2, n=2 gee 8+2-1=9, n=3 gee 18+3-1=20, n=4 gee 32+4-1=35 ✓',
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
        'Kort video wat wys hoe om die algebraïese reël vir numeriese patrone te vind deur eerste en tweede verskille te bereken en formules te toets',

      diagramPlaceholder:
        'ʼn Verskille-piramide vir die ry 4, 11, 22, 37 wat die terme (blou), eerste verskille (oranje) en konstante tweede verskille (groen) wys, wat lei tot die algebraïese reël 2n² + n + 1',

      diagramSvg:
        '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg"><text x="130" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Die reël vind</text><line x1="30" y1="47" x2="53" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="47" x2="67" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="90" y1="47" x2="113" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="47" x2="127" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="150" y1="47" x2="173" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="210" y1="47" x2="187" y2="63" stroke="#9ca3af" stroke-width="1"/><line x1="60" y1="89" x2="83" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="120" y1="89" x2="97" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="120" y1="89" x2="143" y2="105" stroke="#9ca3af" stroke-width="1"/><line x1="180" y1="89" x2="157" y2="105" stroke="#9ca3af" stroke-width="1"/><rect x="15" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="30" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4</text><rect x="75" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="90" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">11</text><rect x="135" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="150" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">22</text><rect x="195" y="21" width="30" height="26" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/><text x="210" y="39" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">37</text><rect x="45" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="60" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">7</text><rect x="105" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="120" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">11</text><rect x="165" y="63" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="180" y="81" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><rect x="75" y="105" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="90" y="123" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">4</text><rect x="135" y="105" width="30" height="26" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.2"/><text x="150" y="123" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">4</text><line x1="120" y1="131" x2="120" y2="145" stroke="#16a34a" stroke-width="2"/><polygon points="120,150 116,142 124,142" fill="#16a34a"/><rect x="45" y="150" width="150" height="24" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="120" y="166" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">nde term = 2n² + n + 1</text></svg>',
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
          answer: '3n²+1',
          checkMode: 'auto',
          correctAnswer: '3n²+1',
          explanation: 'Eerste verskille: 9, 15, 21 — neem met 6 toe. Tweede verskil = 6, dus is die koëffisiënt van n² gelyk aan 3. Toets 3n²+1: n=1 gee 3+1=4 ✓, n=2 gee 12+1=13 ✓, n=3 gee 27+1=28 ✓, n=4 gee 48+1=49 ✓. Reël: 3n²+1.',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê die patroon 2, 7, 16, 29 volg die reël 2n²-n+1. Verifieer vir n=1,2,3,4.',
          answer: 'n=1: 2-1+1=2 ✓. n=2: 8-2+1=7 ✓. n=3: 18-3+1=16 ✓. n=4: 32-4+1=29 ✓. Die reël is geverifieer.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om tussen diagram-, tabel- en algebraïese voorstellings van dieselfde patroon te beweeg, met ʼn uitgewerkte voorbeeld vir vyfhoekgetalle',

      diagramPlaceholder:
        'ʼn Groeiende vierkant-kolletjiepatroon wat stappe 1 tot 4 wys, met kolletjies gerangskik om n² vir elke stap visueel te bevestig',

      diagramSvg:
        '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="85" cy="35" r="3.2" fill="#0f1f3d"/><circle cx="95" cy="35" r="3.2" fill="#0f1f3d"/><circle cx="85" cy="45" r="3.2" fill="#0f1f3d"/><circle cx="95" cy="45" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="31" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="40" r="3.2" fill="#0f1f3d"/><circle cx="146" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="155" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="164" cy="49" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="28" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="36" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="44" r="3.2" fill="#0f1f3d"/><circle cx="213" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="221" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="229" cy="52" r="3.2" fill="#0f1f3d"/><circle cx="237" cy="52" r="3.2" fill="#0f1f3d"/><text x="30" y="70" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="30" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">1×1 = 1</text><text x="90" y="70" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="90" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">2×2 = 4</text><text x="155" y="70" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text><text x="155" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">3×3 = 9</text><text x="225" y="70" font-size="10" fill="#374151" text-anchor="middle">Stadium 4</text><text x="225" y="83" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">4×4 = 16</text></svg>',
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
        'Kort video wat wys hoe om ʼn algebraïese reël deur substitusie te verifieer en hoe om werklike-lewe patroonprobleme op te los deur die reël te identifiseer en voorspellings te maak',

      diagramPlaceholder:
        'ʼn Diagram wat die gestapelde-stoele-patroon vir stappe 1 tot 4 wys, met stoele en bene getel en die reël bene = 3n + 1 aangedui',

      diagramSvg:
        '<svg viewBox="0 0 300 85" xmlns="http://www.w3.org/2000/svg"><text x="150" y="10" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">bene = 3n + 1</text><rect x="24" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="21" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="27" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="33" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="39" cy="44" r="2.6" fill="#0f1f3d"/><text x="30" y="60" font-size="9" fill="#374151" text-anchor="middle">Stadium 1</text><text x="30" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">bene = 4</text><rect x="88" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="96" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="77" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="83" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="89" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="95" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="101" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="107" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="113" cy="44" r="2.6" fill="#0f1f3d"/><text x="95" y="60" font-size="9" fill="#374151" text-anchor="middle">Stadium 2</text><text x="95" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">bene = 7</text><rect x="159" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="167" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="175" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="143" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="149" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="155" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="161" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="167" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="173" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="179" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="185" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="191" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="197" cy="44" r="2.6" fill="#0f1f3d"/><text x="170" y="60" font-size="9" fill="#374151" text-anchor="middle">Stadium 3</text><text x="170" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">bene = 10</text><rect x="235" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="243" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="251" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><rect x="259" y="17" width="6" height="6" fill="none" stroke="#0f1f3d" stroke-width="1.2"/><circle cx="214" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="220" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="226" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="232" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="238" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="244" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="250" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="256" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="262" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="268" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="274" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="280" cy="44" r="2.6" fill="#0f1f3d"/><circle cx="286" cy="44" r="2.6" fill="#0f1f3d"/><text x="250" y="60" font-size="9" fill="#374151" text-anchor="middle">Stadium 4</text><text x="250" y="72" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">bene = 13</text></svg>',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Volgende term van ʼn LINEÊRE numeriese ry
    // Blok 2 (3-5):   Volgende term van ʼn KWADRATIESE numeriese ry
    // Blok 3 (6-9):   Vind die algebraïese (nde term) reël vir ʼn kwadratiese patroon
    // Blok 4 (10-12): Geometriese groeipatroon (vorms/teëls/kolletjies) — BENODIG DIAGRAM
    // Blok 5 (13-14): Verifieer ʼn voorgestelde reël deur vervanging (self-toets)
    // Blok 6 (15-19): Werklike-lewe patroonkonteksprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Volgende term, lineêre ry (Easy)
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 4, 9, 14, 19.', checkMode: 'auto', options: ['24', '23', '25', '29'], correctIndex: 0, explanation: 'Eerste verskille: 5, 5, 5 — konstant, dus is dit ʼn lineêre patroon met ʼn gemeenskaplike verskil van 5. Die volgende term is 19 + 5 = 24. (23 gebruik ʼn verskil van 4, 25 gebruik ʼn verskil van 6, en 29 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 7, 15, 23, 31.', checkMode: 'auto', options: ['38', '39', '40', '47'], correctIndex: 1, explanation: 'Eerste verskille: 8, 8, 8 — konstant. Die volgende term is 31 + 8 = 39. (38 gebruik ʼn verskil van 7, 40 gebruik ʼn verskil van 9, en 47 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 6, 13, 20, 27.', checkMode: 'auto', options: ['33', '35', '34', '41'], correctIndex: 2, explanation: 'Eerste verskille: 7, 7, 7 — konstant. Die volgende term is 27 + 7 = 34. (33 gebruik ʼn verskil van 6, 35 gebruik ʼn verskil van 8, en 41 tel per ongeluk die verskil twee keer by.)' },

        // Blok 2 — Volgende term, kwadratiese ry (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 2, 6, 12, 20.', checkMode: 'auto', options: ['28', '29', '32', '30'], correctIndex: 3, explanation: 'Eerste verskille: 4, 6, 8 — neem elke keer met 2 toe. Die volgende verskil is 10, dus is die 5de term 20 + 10 = 30. (28 neem verkeerdelik aan dat die verskil konstant bly by 8, 29 neem aan dat die verskille net met 1 toeneem, en 32 gebruik ʼn verkeerde volgende verskil van 12.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 1, 4, 9, 16.', checkMode: 'auto', options: ['25', '23', '26', '28'], correctIndex: 0, explanation: 'Dit is volkome vierkante: 1², 2², 3², 4². Die 5de term is 5² = 25. (23 neem verkeerdelik aan dat die verskil konstant bly by 7, 26 neem aan dat die verskille met 3 toeneem, en 28 gebruik ʼn verkeerde volgende verskil.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 3, 9, 19, 33.', checkMode: 'auto', options: ['47', '51', '53', '55'], correctIndex: 1, explanation: 'Eerste verskille: 6, 10, 14 — neem elke keer met 4 toe. Die volgende verskil is 18, dus is die 5de term 33 + 18 = 51. (47 neem verkeerdelik aan dat die verskil konstant bly by 14, 53 neem aan dat die verskille met 6 toeneem, en 55 gebruik ʼn verkeerde volgende verskil van 22.)' },

        // Blok 3 — Vind die algebraïese reël (kwadraties) (Medium)
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 5, 10, 17, 26.', checkMode: 'auto', options: ['n²+2n+1', 'n²+n+3', 'n²+2n+2', '2n²+n-1'], correctIndex: 2, explanation: 'Eerste verskille: 5, 7, 9 — neem met 2 toe. Die konstante tweede verskil van 2 gee ʼn voorste koëffisiënt van 2 ÷ 2 = 1. Toets n²+2n+2: n=1 gee 5, n=2 gee 10, n=3 gee 17, n=4 gee 26. Reël: n²+2n+2. (n²+2n+1 het die verkeerde konstante term, n²+n+3 het die verkeerde lineêre koëffisiënt, en 2n²+n-1 het die verkeerde voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 3, 12, 27, 48.', checkMode: 'auto', options: ['3n²+n', '6n²', '3n²-3n', '3n²'], correctIndex: 3, explanation: 'Eerste verskille: 9, 15, 21 — neem met 6 toe. Die konstante tweede verskil van 6 gee ʼn voorste koëffisiënt van 6 ÷ 2 = 3. Toets 3n²: n=1 gee 3, n=2 gee 12, n=3 gee 27, n=4 gee 48. Reël: 3n². (3n²+n voeg verkeerdelik ʼn lineêre term by, 6n² verdubbel die voorste koëffisiënt, en 3n²-3n het ʼn tekenfout.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 2, 11, 26, 47.', checkMode: 'auto', options: ['3n²-1', '3n²-2', '3n²+n-1', '6n²-1'], correctIndex: 0, explanation: 'Eerste verskille: 9, 15, 21 — neem met 6 toe. Die konstante tweede verskil van 6 gee ʼn voorste koëffisiënt van 3. Toets 3n²-1: n=1 gee 2, n=2 gee 11, n=3 gee 26, n=4 gee 47. Reël: 3n²-1. (3n²-2 het die verkeerde konstante term, 3n²+n-1 voeg verkeerdelik ʼn lineêre term by, en 6n²-1 verdubbel die voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: "ʼn Patroon volg die reël n²+3n. Vind die 6de term.", checkMode: 'auto', options: ['39', '54', '40', '114'], correctIndex: 1, explanation: 'Vervang n=6: 6²+3(6) = 36+18 = 54. (39 vergeet om die tweede term met n te vermenigvuldig, 40 vervang per ongeluk n=5 in plaas van n=6, en 114 verruil die koëffisiënte om 3n²+n te kry.)' },

        // Blok 4 — Geometriese groeipatroon (BENODIG DIAGRAM)
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende patroon van vierkante. Stadium 1 het 4 vierkante, Stadium 2 het 7 vierkante, Stadium 3 het 10 vierkante. Hoeveel vierkante sal Stadium 6 hê?", checkMode: 'auto', options: ['18', '16', '19', '22'], correctIndex: 2, explanation: 'Eerste verskille: 3, 3 — konstant. Reël: vierkante = 3n+1. Vir Stadium 6: 3(6)+1 = 18+1 = 19 vierkante. (18 laat die +1 konstante weg, 16 gebruik Stadium 5 in plaas van Stadium 6, en 22 gebruik Stadium 7 in plaas van Stadium 6.)', diagramSvg: '<svg viewBox="0 0 270 110" xmlns="http://www.w3.org/2000/svg"><rect x="40.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="51.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="40.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="40.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="141.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="152.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="231.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="242.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="253.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="22.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="220.0" y="88.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="40" y="98" font-size="11" fill="#374151" text-anchor="middle">Stadium 1</text><text x="130" y="98" font-size="11" fill="#374151" text-anchor="middle">Stadium 2</text><text x="220" y="98" font-size="11" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1 tot 4 van ʼn groeiende driehoekige patroon van kolletjies. Stadium 1 het 1 kolletjie, Stadium 2 het 3 kolletjies, Stadium 3 het 6 kolletjies, Stadium 4 het 10 kolletjies. Hoeveel kolletjies sal Stadium 7 hê?", checkMode: 'auto', options: ['21', '36', '49', '28'], correctIndex: 3, explanation: "Dit is die driehoekige-getal-patroon met reël kolletjies = n(n+1)/2. Vir Stadium 7: 7(8)/2 = 56/2 = 28 kolletjies. (21 gebruik per ongeluk n=6, 36 gebruik per ongeluk n=8, en 49 gebruik verkeerdelik n² = 7² in plaas van die driehoekige-getal-formule.)", diagramSvg: '<svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg"><circle cx="35.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="95.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="89.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="100.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="165.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="159.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="170.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="154.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="165.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="176.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="230.0" cy="20.0" r="3.2" fill="#0f1f3d"/><circle cx="224.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="235.5" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="219.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="230.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="241.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="213.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="224.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="235.5" cy="50.0" r="3.2" fill="#0f1f3d"/><circle cx="246.5" cy="50.0" r="3.2" fill="#0f1f3d"/><text x="35" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="95" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="165" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text><text x="230" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 4</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende patroon van vuurhoutjie-driehoeke wat in ʼn ry saamgevoeg is. Stadium 1 gebruik 3 vuurhoutjies, Stadium 2 gebruik 5 vuurhoutjies, Stadium 3 gebruik 7 vuurhoutjies. Hoeveel vuurhoutjies sal Stadium 9 nodig hê?", checkMode: 'auto', options: ['19', '18', '17', '21'], correctIndex: 0, explanation: 'Eerste verskille: 2, 2 — konstant. Reël: vuurhoutjies = 2n+1. Vir Stadium 9: 2(9)+1 = 18+1 = 19 vuurhoutjies. (18 laat die +1 konstante weg, 17 gebruik Stadium 8 in plaas van Stadium 9, en 21 gebruik Stadium 10 in plaas van Stadium 9.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><line x1="10.0" y1="55.0" x2="23.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="10.0" y1="55.0" x2="36.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="23.0" y1="39.0" x2="36.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="90.0" y1="55.0" x2="103.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="103.0" y1="39.0" x2="116.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="116.0" y1="55.0" x2="129.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="90.0" y1="55.0" x2="116.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="103.0" y1="39.0" x2="129.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="175.0" y1="55.0" x2="188.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="201.0" y1="55.0" x2="227.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="188.0" y1="39.0" x2="201.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="214.0" y1="39.0" x2="227.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="201.0" y1="55.0" x2="214.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="175.0" y1="55.0" x2="201.0" y2="55.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><line x1="188.0" y1="39.0" x2="214.0" y2="39.0" stroke="#0f1f3d" stroke-width="2" stroke-linecap="round"/><text x="16" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="103" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="194" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },

        // Blok 5 — Verifieer ʼn voorgestelde reël deur vervanging (Hard)
        { difficulty: 'Hard', question: 'Zinhle beweer die patroon 4, 15, 32, 55 volg die reël 3n²+2n-1. Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['30 — nie geverifieer nie', '32 — geverifieer', '29 — nie geverifieer nie', '35 — nie geverifieer nie'], correctIndex: 1, explanation: 'Vervang n=3: 3(3)²+2(3)-1 = 27+6-1 = 32, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (30 en 29 kom van rekenfoute, en 35 gebruik per ongeluk n=4.)' },
        { difficulty: 'Hard', question: 'Bongani beweer die patroon 1, 6, 13, 22 volg die reël n²+2n-2. Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['15 — nie geverifieer nie', '11 — nie geverifieer nie', '13 — geverifieer', '22 — nie geverifieer nie'], correctIndex: 2, explanation: 'Vervang n=3: 3²+2(3)-2 = 9+6-2 = 13, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (15 vergeet om 2 af te trek, 11 het ʼn tekenfout, en 22 gebruik per ongeluk n=4.)' },

        // Blok 6 — Werklike-lewe patroonkonteksprobleme (Hard)
        { difficulty: 'Hard', question: "Tafels word in ʼn ry teenmekaar geskuif vir ʼn funksie. 1 tafel bied plek vir 6 mense, 2 tafels saamgevoeg bied plek vir 10 mense, 3 tafels saamgevoeg bied plek vir 14 mense. Vind die reël en voorspel hoeveel mense 9 saamgevoegde tafels sal huisves.", checkMode: 'auto', options: ['34', '42', '37', '38'], correctIndex: 3, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: setels = 4n+2. Vir 9 tafels: 4(9)+2 = 36+2 = 38 mense. (34 gebruik per ongeluk n=8, 42 gebruik per ongeluk n=10, en 37 gebruik die verkeerde konstante +1 in plaas van +2.)' },
        { difficulty: 'Hard', question: "ʼn Vierkantige patio word omraam deur wit teëls, waar die aantal randteëls die reël 4n+4 volg, waar n die syaflengte van die patio in teëls is. Watter waarde gee die reël vir n=5, en bevestig dit 24 randteëls?", checkMode: 'auto', options: ['24 — ja, bevestig', '20 — nee, reël gee 20', '28 — nee, reël gee 28', '9 — nee, reël gee 9'], correctIndex: 0, explanation: '4(5)+4 = 20+4 = 24, wat bevestig dat die reël 24 randteëls gee wanneer n=5. (20 vergeet die +4 konstante, 28 gebruik per ongeluk n=6, en 9 vergeet om n met 4 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: "ʼn Patroon van heksagonale-getal-kolletjies lewer 1, 7, 19, 37. Vind die algebraïese reël en voorspel die aantal kolletjies in Stadium 5.", checkMode: 'auto', options: ['60', '61', '76', '46'], correctIndex: 1, explanation: "Eerste verskille: 6, 12, 18 — neem met 6 toe. Die konstante tweede verskil van 6 gee ʼn voorste koëffisiënt van 3, dus is die reël 3n²-3n+1. Verifieer: n=1 gee 1, n=2 gee 7, n=3 gee 19, n=4 gee 37 ✓. Vir Stadium 5: 3(25)-3(5)+1 = 75-15+1 = 61 kolletjies. (60 vergeet die +1 konstante, 76 het ʼn tekenfout op die lineêre term, en 46 ekstrapoleer verkeerdelik vanaf die verskille sonder om die reël te gebruik.)" },
        { difficulty: 'Hard', question: "ʼn Ry stoele word rondom vierkantige tafels uitgesit, volgens die reël stoele = 2n+4, waar n die aantal tafels is. Voorspel die aantal stoele benodig vir 15 tafels.", checkMode: 'auto', options: ['30', '36', '34', '19'], correctIndex: 2, explanation: 'stoele = 2(15)+4 = 30+4 = 34 stoele. (30 vergeet die +4 konstante, 36 gebruik per ongeluk n=16, en 19 vergeet om n met 2 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Gebruik die reël n²-n+5 om die 20ste term van die patroon te vind.', checkMode: 'auto', options: ['380', '425', '400', '385'], correctIndex: 3, explanation: 'n=20: 20²-20+5 = 400-20+5 = 385. (380 vergeet die +5 konstante, 425 het ʼn tekenfout op die lineêre term, en 400 gebruik slegs die n²-term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan deur enige gemiste vrae oor die vind van reëls of geometriese groeipatrone en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor eerste en tweede verskille, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Volgende term, lineêre ry (Easy)
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 5, 11, 17, 23.', checkMode: 'auto', options: ['29', '28', '30', '35'], correctIndex: 0, explanation: 'Eerste verskille: 6, 6, 6 — konstant. Die volgende term is 23 + 6 = 29. (28 gebruik ʼn verskil van 5, 30 gebruik ʼn verskil van 7, en 35 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 9, 17, 25, 33.', checkMode: 'auto', options: ['40', '41', '42', '49'], correctIndex: 1, explanation: 'Eerste verskille: 8, 8, 8 — konstant. Die volgende term is 33 + 8 = 41. (40 gebruik ʼn verskil van 7, 42 gebruik ʼn verskil van 9, en 49 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 4, 10, 16, 22.', checkMode: 'auto', options: ['27', '29', '28', '34'], correctIndex: 2, explanation: 'Eerste verskille: 6, 6, 6 — konstant. Die volgende term is 22 + 6 = 28. (27 gebruik ʼn verskil van 5, 29 gebruik ʼn verskil van 7, en 34 tel per ongeluk die verskil twee keer by.)' },

        // Blok 2 — Volgende term, kwadratiese ry (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 3, 7, 13, 21.', checkMode: 'auto', options: ['29', '30', '33', '31'], correctIndex: 3, explanation: 'Eerste verskille: 4, 6, 8 — neem elke keer met 2 toe. Die volgende verskil is 10, dus is die 5de term 21 + 10 = 31. (29 neem verkeerdelik aan dat die verskil konstant bly by 8, 30 neem aan dat die verskille net met 1 toeneem, en 33 gebruik ʼn verkeerde volgende verskil van 12.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 2, 5, 10, 17.', checkMode: 'auto', options: ['26', '24', '25', '27'], correctIndex: 0, explanation: 'Eerste verskille: 3, 5, 7 — neem elke keer met 2 toe. Die volgende verskil is 9, dus is die 5de term 17 + 9 = 26. (24 neem verkeerdelik aan dat die verskil konstant bly by 7, 25 neem aan dat die verskille net met 1 toeneem, en 27 gebruik ʼn verkeerde volgende verskil van 10.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 4, 12, 24, 40.', checkMode: 'auto', options: ['56', '60', '58', '64'], correctIndex: 1, explanation: 'Eerste verskille: 8, 12, 16 — neem elke keer met 4 toe. Die volgende verskil is 20, dus is die 5de term 40 + 20 = 60. (56 neem verkeerdelik aan dat die verskil konstant bly by 16, 58 neem aan dat die verskille net met 2 toeneem, en 64 gebruik ʼn verkeerde volgende verskil van 24.)' },

        // Blok 3 — Vind die algebraïese reël (kwadraties) (Medium)
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 6, 11, 18, 27.', checkMode: 'auto', options: ['n²+2n+2', 'n²+n+4', 'n²+2n+3', '2n²+n-2'], correctIndex: 2, explanation: 'Eerste verskille: 5, 7, 9 — neem met 2 toe. Die konstante tweede verskil van 2 gee ʼn voorste koëffisiënt van 1. Toets n²+2n+3: n=1 gee 6, n=2 gee 11, n=3 gee 18, n=4 gee 27. Reël: n²+2n+3. (n²+2n+2 het die verkeerde konstante term, n²+n+4 het die verkeerde lineêre koëffisiënt, en 2n²+n-2 het die verkeerde voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 4, 16, 36, 64.', checkMode: 'auto', options: ['4n²+4n', '8n²', '4n²-4n', '4n²'], correctIndex: 3, explanation: 'Eerste verskille: 12, 20, 28 — neem met 8 toe. Die konstante tweede verskil van 8 gee ʼn voorste koëffisiënt van 8 ÷ 2 = 4. Toets 4n²: n=1 gee 4, n=2 gee 16, n=3 gee 36, n=4 gee 64. Reël: 4n². (4n²+4n voeg verkeerdelik ʼn lineêre term by, 8n² verdubbel die voorste koëffisiënt, en 4n²-4n het ʼn tekenfout.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 3, 14, 31, 54.', checkMode: 'auto', options: ['3n²+2n-2', '3n²+2n-3', '3n²+n-2', '6n²+2n-2'], correctIndex: 0, explanation: 'Eerste verskille: 11, 17, 23 — neem met 6 toe. Die konstante tweede verskil van 6 gee ʼn voorste koëffisiënt van 3. Toets 3n²+2n-2: n=1 gee 3, n=2 gee 14, n=3 gee 31, n=4 gee 54. Reël: 3n²+2n-2. (3n²+2n-3 het die verkeerde konstante term, 3n²+n-2 het die verkeerde lineêre koëffisiënt, en 6n²+2n-2 verdubbel die voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: "ʼn Patroon volg die reël n²+5n. Vind die 7de term.", checkMode: 'auto', options: ['54', '84', '66', '91'], correctIndex: 1, explanation: 'Vervang n=7: 7²+5(7) = 49+35 = 84. (54 vergeet om die tweede term met n te vermenigvuldig, 66 vervang per ongeluk n=6 in plaas van n=7, en 91 kom van ʼn rekenfout by optelling.)' },

        // Blok 4 — Geometriese groeipatroon (BENODIG DIAGRAM)
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende patroon van pentagone wat rand-aan-rand saamgevoeg is. Stadium 1 wys 5 sye, Stadium 2 wys 9 sye, Stadium 3 wys 13 sye. Hoeveel sye sal Stadium 7 wys?", checkMode: 'auto', options: ['28', '25', '29', '33'], correctIndex: 2, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: sye = 4n+1. Vir Stadium 7: 4(7)+1 = 28+1 = 29 sye. (28 laat die +1 konstante weg, 25 gebruik Stadium 6 in plaas van Stadium 7, en 33 gebruik Stadium 8 in plaas van Stadium 7.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><polygon points="30.0,29.0 42.4,38.0 37.6,52.5 22.4,52.5 17.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="105.0,29.0 117.4,38.0 112.6,52.5 97.4,52.5 92.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="125.2,29.0 137.5,38.0 132.8,52.5 117.5,52.5 112.8,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="195.0,29.0 207.4,38.0 202.6,52.5 187.4,52.5 182.6,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="215.2,29.0 227.5,38.0 222.8,52.5 207.5,52.5 202.8,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><polygon points="235.3,29.0 247.7,38.0 242.9,52.5 227.7,52.5 222.9,38.0" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><text x="30" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="30" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">5 sye</text><text x="115" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="115" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">9 sye</text><text x="215" y="80" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text><text x="215" y="93" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">13 sye</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende sterteël-patroon. Stadium 1 gebruik 2 teëls, Stadium 2 gebruik 6 teëls, Stadium 3 gebruik 10 teëls. Hoeveel teëls sal Stadium 8 gebruik?", checkMode: 'auto', options: ['32', '26', '34', '30'], correctIndex: 3, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: teëls = 4n−2. Vir Stadium 8: 4(8)−2 = 32−2 = 30 teëls. (32 laat die −2 konstante weg, 26 gebruik Stadium 7 in plaas van Stadium 8, en 34 gebruik Stadium 9 in plaas van Stadium 8.)', diagramSvg: '<svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg"><rect x="30.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="30.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="60.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="110.0" y="30.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="100.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="120.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="50.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="60.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="30.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="195.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="215.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="70.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="205.0" y="20.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><rect x="225.0" y="40.0" width="9" height="9" fill="none" stroke="#0f1f3d" stroke-width="1.4"/><text x="30" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="110" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="205" y="90" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende heksagon-teël-randpatroon. Stadium 1 het 6 randteëls, Stadium 2 het 10 randteëls, Stadium 3 het 14 randteëls. Hoeveel randteëls sal Stadium 11 hê?", checkMode: 'auto', options: ['46', '44', '42', '50'], correctIndex: 0, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: teëls = 4n+2. Vir Stadium 11: 4(11)+2 = 44+2 = 46 teëls. (44 laat die +2 konstante weg, 42 gebruik Stadium 10 in plaas van Stadium 11, en 50 gebruik Stadium 12 in plaas van Stadium 11.)', diagramSvg: '<svg viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg"><polygon points="26.0,15.0 23.0,20.2 17.0,20.2 14.0,15.0 17.0,9.8 23.0,9.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="26.0,23.7 23.0,28.9 17.0,28.9 14.0,23.7 17.0,18.5 23.0,18.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="26.0,32.4 23.0,37.6 17.0,37.6 14.0,32.4 17.0,27.2 23.0,27.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,15.0 32.3,20.2 26.3,20.2 23.3,15.0 26.3,9.8 32.3,9.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,23.7 32.3,28.9 26.3,28.9 23.3,23.7 26.3,18.5 32.3,18.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="35.3,32.4 32.3,37.6 26.3,37.6 23.3,32.4 26.3,27.2 32.3,27.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,12.0 78.0,17.2 72.0,17.2 69.0,12.0 72.0,6.8 78.0,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,20.7 78.0,25.9 72.0,25.9 69.0,20.7 72.0,15.5 78.0,15.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,29.4 78.0,34.6 72.0,34.6 69.0,29.4 72.0,24.2 78.0,24.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="81.0,38.1 78.0,43.3 72.0,43.3 69.0,38.1 72.0,32.9 78.0,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="90.3,12.0 87.3,17.2 81.3,17.2 78.3,12.0 81.3,6.8 87.3,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="90.3,38.1 87.3,43.3 81.3,43.3 78.3,38.1 81.3,32.9 87.3,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,12.0 96.6,17.2 90.6,17.2 87.6,12.0 90.6,6.8 96.6,6.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,20.7 96.6,25.9 90.6,25.9 87.6,20.7 90.6,15.5 96.6,15.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,29.4 96.6,34.6 90.6,34.6 87.6,29.4 90.6,24.2 96.6,24.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="99.6,38.1 96.6,43.3 90.6,43.3 87.6,38.1 90.6,32.9 96.6,32.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,8.0 153.0,13.2 147.0,13.2 144.0,8.0 147.0,2.8 153.0,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,16.7 153.0,21.9 147.0,21.9 144.0,16.7 147.0,11.5 153.0,11.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,25.4 153.0,30.6 147.0,30.6 144.0,25.4 147.0,20.2 153.0,20.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,34.1 153.0,39.3 147.0,39.3 144.0,34.1 147.0,28.9 153.0,28.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="156.0,42.8 153.0,48.0 147.0,48.0 144.0,42.8 147.0,37.6 153.0,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="165.3,8.0 162.3,13.2 156.3,13.2 153.3,8.0 156.3,2.8 162.3,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="165.3,42.8 162.3,48.0 156.3,48.0 153.3,42.8 156.3,37.6 162.3,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="174.6,8.0 171.6,13.2 165.6,13.2 162.6,8.0 165.6,2.8 171.6,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="174.6,42.8 171.6,48.0 165.6,48.0 162.6,42.8 165.6,37.6 171.6,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,8.0 180.9,13.2 174.9,13.2 171.9,8.0 174.9,2.8 180.9,2.8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,16.7 180.9,21.9 174.9,21.9 171.9,16.7 174.9,11.5 180.9,11.5" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,25.4 180.9,30.6 174.9,30.6 171.9,25.4 174.9,20.2 180.9,20.2" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,34.1 180.9,39.3 174.9,39.3 171.9,34.1 174.9,28.9 180.9,28.9" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><polygon points="183.9,42.8 180.9,48.0 174.9,48.0 171.9,42.8 174.9,37.6 180.9,37.6" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="25" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="84" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="164" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },

        // Blok 5 — Verifieer ʼn voorgestelde reël deur vervanging (Hard)
        { difficulty: 'Hard', question: 'Sipho beweer die patroon 2, 9, 20, 35 volg die reël 2n²+n-1. Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['21 — nie geverifieer nie', '20 — geverifieer', '14 — nie geverifieer nie', '35 — nie geverifieer nie'], correctIndex: 1, explanation: 'Vervang n=3: 2(3)²+3-1 = 18+3-1 = 20, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (21 vergeet om 1 af te trek, 14 het ʼn tekenfout, en 35 gebruik per ongeluk n=4.)' },
        { difficulty: 'Hard', question: 'Amahle beweer die patroon 3, 8, 15, 24 volg die reël n²+2n. Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['12 — nie geverifieer nie', '24 — nie geverifieer nie', '15 — geverifieer', '16 — nie geverifieer nie'], correctIndex: 2, explanation: 'Vervang n=3: 3²+2(3) = 9+6 = 15, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (12 vergeet om die tweede term met n te vermenigvuldig, 24 gebruik per ongeluk n=4, en 16 kom van ʼn rekenfout by optelling.)' },

        // Blok 6 — Werklike-lewe patroonkonteksprobleme (Hard)
        { difficulty: 'Hard', question: "Lessenaars word in ʼn ry teenmekaar geskuif in ʼn klaskamer. 1 lessenaar bied plek vir 5 mense, 2 lessenaars saamgevoeg bied plek vir 9 mense, 3 lessenaars saamgevoeg bied plek vir 13 mense. Vind die reël en voorspel hoeveel mense 10 saamgevoegde lessenaars sal huisves.", checkMode: 'auto', options: ['40', '37', '45', '41'], correctIndex: 3, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: setels = 4n+1. Vir 10 lessenaars: 4(10)+1 = 40+1 = 41 mense. (40 laat die +1 konstante weg, 37 gebruik per ongeluk n=9, en 45 gebruik per ongeluk n=11.)' },
        { difficulty: 'Hard', question: "ʼn Reghoekige tuin word omraam deur plaveiselteëls, waar die aantal randteëls die reël 6n+2 volg, waar n die syaflengte van die tuin in teëls is. Watter waarde gee die reël vir n=6, en bevestig dit 38 randteëls?", checkMode: 'auto', options: ['38 — ja, bevestig', '36 — nee, reël gee 36', '44 — nee, reël gee 44', '8 — nee, reël gee 8'], correctIndex: 0, explanation: '6(6)+2 = 36+2 = 38, wat bevestig dat die reël 38 randteëls gee wanneer n=6. (36 vergeet die +2 konstante, 44 gebruik per ongeluk n=7, en 8 vergeet om n met 6 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: "ʼn Patroon van diamantvormige kolletjie-rangskikkings lewer 1, 5, 13, 25. Vind die algebraïese reël en voorspel die aantal kolletjies in Stadium 6.", checkMode: 'auto', options: ['60', '61', '85', '36'], correctIndex: 1, explanation: "Eerste verskille: 4, 8, 12 — neem met 4 toe. Die konstante tweede verskil van 4 gee ʼn voorste koëffisiënt van 2, dus is die reël 2n²-2n+1. Verifieer: n=1 gee 1, n=2 gee 5, n=3 gee 13, n=4 gee 25 ✓. Vir Stadium 6: 2(36)-2(6)+1 = 72-12+1 = 61 kolletjies. (60 vergeet die +1 konstante, 85 het ʼn tekenfout op die lineêre term, en 36 gebruik slegs die n²-term.)" },
        { difficulty: 'Hard', question: "Heiningpale word langs ʼn reguit heining geplaas, volgens die reël pale = 3n+2, waar n die aantal heiningdele is. Voorspel die aantal pale benodig vir 20 dele.", checkMode: 'auto', options: ['60', '65', '62', '22'], correctIndex: 2, explanation: 'pale = 3(20)+2 = 60+2 = 62 pale. (60 laat die +2 konstante weg, 65 gebruik per ongeluk n=21, en 22 vergeet om n met 3 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Gebruik die reël 2n²-n+3 om die 18de term van die patroon te vind.', checkMode: 'auto', options: ['630', '669', '648', '633'], correctIndex: 3, explanation: 'n=18: 2(18²)-18+3 = 2(324)-18+3 = 648-18+3 = 633. (630 vergeet die +3 konstante, 669 het ʼn tekenfout op die lineêre term, en 648 gebruik slegs die 2n²-term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan deur enige gemiste vrae oor die vind van reëls of geometriese groeipatrone en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor eerste en tweede verskille, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Volgende term, lineêre ry (Easy)
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 8, 14, 20, 26.', checkMode: 'auto', options: ['32', '31', '33', '38'], correctIndex: 0, explanation: 'Eerste verskille: 6, 6, 6 — konstant. Die volgende term is 26 + 6 = 32. (31 gebruik ʼn verskil van 5, 33 gebruik ʼn verskil van 7, en 38 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 6, 16, 26, 36.', checkMode: 'auto', options: ['45', '46', '47', '56'], correctIndex: 1, explanation: 'Eerste verskille: 10, 10, 10 — konstant. Die volgende term is 36 + 10 = 46. (45 gebruik ʼn verskil van 9, 47 gebruik ʼn verskil van 11, en 56 tel per ongeluk die verskil twee keer by.)' },
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon 9, 16, 23, 30.', checkMode: 'auto', options: ['36', '38', '37', '44'], correctIndex: 2, explanation: 'Eerste verskille: 7, 7, 7 — konstant. Die volgende term is 30 + 7 = 37. (36 gebruik ʼn verskil van 6, 38 gebruik ʼn verskil van 8, en 44 tel per ongeluk die verskil twee keer by.)' },

        // Blok 2 — Volgende term, kwadratiese ry (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 4, 9, 16, 25.', checkMode: 'auto', options: ['34', '35', '38', '36'], correctIndex: 3, explanation: 'Dit is (n+1)²: 2², 3², 4², 5². Die 5de term is 6² = 36. (34 neem verkeerdelik aan dat die verskil konstant bly by 9, 35 neem aan dat die verskille net met 1 toeneem, en 38 gebruik ʼn verkeerde volgende verskil van 13.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 3, 6, 11, 18.', checkMode: 'auto', options: ['27', '25', '26', '29'], correctIndex: 0, explanation: 'Eerste verskille: 3, 5, 7 — neem elke keer met 2 toe. Die volgende verskil is 9, dus is die 5de term 18 + 9 = 27. (25 neem verkeerdelik aan dat die verskil konstant bly by 7, 26 neem aan dat die verskille net met 1 toeneem, en 29 gebruik ʼn verkeerde volgende verskil van 11.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die 5de term in die patroon 5, 15, 29, 47.', checkMode: 'auto', options: ['65', '69', '67', '73'], correctIndex: 1, explanation: 'Eerste verskille: 10, 14, 18 — neem elke keer met 4 toe. Die volgende verskil is 22, dus is die 5de term 47 + 22 = 69. (65 neem verkeerdelik aan dat die verskil konstant bly by 18, 67 neem aan dat die verskille net met 2 toeneem, en 73 gebruik ʼn verkeerde volgende verskil van 26.)' },

        // Blok 3 — Vind die algebraïese reël (kwadraties) (Medium)
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 7, 12, 19, 28.', checkMode: 'auto', options: ['n²+2n+3', 'n²+n+5', 'n²+2n+4', '2n²+n-1'], correctIndex: 2, explanation: 'Eerste verskille: 5, 7, 9 — neem met 2 toe. Die konstante tweede verskil van 2 gee ʼn voorste koëffisiënt van 1. Toets n²+2n+4: n=1 gee 7, n=2 gee 12, n=3 gee 19, n=4 gee 28. Reël: n²+2n+4. (n²+2n+3 het die verkeerde konstante term, n²+n+5 het die verkeerde lineêre koëffisiënt, en 2n²+n-1 het die verkeerde voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 5, 20, 45, 80.', checkMode: 'auto', options: ['5n²+5n', '10n²', '5n²-5n', '5n²'], correctIndex: 3, explanation: 'Eerste verskille: 15, 25, 35 — neem met 10 toe. Die konstante tweede verskil van 10 gee ʼn voorste koëffisiënt van 10 ÷ 2 = 5. Toets 5n²: n=1 gee 5, n=2 gee 20, n=3 gee 45, n=4 gee 80. Reël: 5n². (5n²+5n voeg verkeerdelik ʼn lineêre term by, 10n² verdubbel die voorste koëffisiënt, en 5n²-5n het ʼn tekenfout.)' },
        { difficulty: 'Medium', question: 'Vind die algebraïese reël vir die patroon 4, 17, 36, 61.', checkMode: 'auto', options: ['3n²+4n-3', '3n²+4n-4', '3n²+3n-3', '6n²+4n-3'], correctIndex: 0, explanation: 'Eerste verskille: 13, 19, 25 — neem met 6 toe. Die konstante tweede verskil van 6 gee ʼn voorste koëffisiënt van 3. Toets 3n²+4n-3: n=1 gee 4, n=2 gee 17, n=3 gee 36, n=4 gee 61. Reël: 3n²+4n-3. (3n²+4n-4 het die verkeerde konstante term, 3n²+3n-3 het die verkeerde lineêre koëffisiënt, en 6n²+4n-3 verdubbel die voorste koëffisiënt.)' },
        { difficulty: 'Medium', question: "ʼn Patroon volg die reël n²+4n. Vind die 8ste term.", checkMode: 'auto', options: ['68', '96', '77', '104'], correctIndex: 1, explanation: 'Vervang n=8: 8²+4(8) = 64+32 = 96. (68 vergeet om die tweede term met n te vermenigvuldig, 77 vervang per ongeluk n=7 in plaas van n=8, en 104 kom van ʼn rekenfout by optelling.)' },

        // Blok 4 — Geometriese groeipatroon (BENODIG DIAGRAM)
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende patroon van plus-vormige teëlkruise. Stadium 1 het 5 teëls, Stadium 2 het 9 teëls, Stadium 3 het 13 teëls. Hoeveel teëls sal Stadium 9 hê?", checkMode: 'auto', options: ['36', '33', '37', '41'], correctIndex: 2, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: teëls = 4n+1. Vir Stadium 9: 4(9)+1 = 36+1 = 37 teëls. (36 laat die +1 konstante weg, 33 gebruik Stadium 8 in plaas van Stadium 9, en 41 gebruik Stadium 10 in plaas van Stadium 9.)', diagramSvg: '<svg viewBox="0 0 270 112" xmlns="http://www.w3.org/2000/svg"><rect x="35.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="46.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="24.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="35.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="35.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="141.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="119.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="152.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="108.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="130.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="236.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="214.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="44.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="66.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="247.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="203.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="33.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="77.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="258.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="192.0" y="55.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="22.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="88.0" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="35" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="130" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="225" y="102" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende driehoekige rand van kolletjies. Stadium 1 het 3 kolletjies, Stadium 2 het 7 kolletjies, Stadium 3 het 11 kolletjies. Hoeveel kolletjies sal Stadium 10 hê?", checkMode: 'auto', options: ['40', '35', '43', '39'], correctIndex: 3, explanation: 'Eerste verskille: 4, 4 — konstant. Reël: kolletjies = 4n−1. Vir Stadium 10: 4(10)−1 = 40−1 = 39 kolletjies. (40 laat die −1 konstante weg, 35 gebruik Stadium 9 in plaas van Stadium 10, en 43 gebruik Stadium 11 in plaas van Stadium 10.)', diagramSvg: '<svg viewBox="0 0 260 105" xmlns="http://www.w3.org/2000/svg"><circle cx="30.0" cy="15.0" r="3.2" fill="#0f1f3d"/><circle cx="20.0" cy="33.0" r="3.2" fill="#0f1f3d"/><circle cx="40.0" cy="33.0" r="3.2" fill="#0f1f3d"/><circle cx="120.0" cy="15.0" r="3.2" fill="#0f1f3d"/><circle cx="111.0" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="129.0" cy="30.0" r="3.2" fill="#0f1f3d"/><circle cx="102.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="114.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="126.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="138.0" cy="45.0" r="3.2" fill="#0f1f3d"/><circle cx="220.0" cy="10.0" r="3.2" fill="#0f1f3d"/><circle cx="211.0" cy="25.0" r="3.2" fill="#0f1f3d"/><circle cx="229.0" cy="25.0" r="3.2" fill="#0f1f3d"/><circle cx="202.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="238.0" cy="40.0" r="3.2" fill="#0f1f3d"/><circle cx="193.0" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="203.8" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="214.6" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="225.4" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="236.2" cy="55.0" r="3.2" fill="#0f1f3d"/><circle cx="247.0" cy="55.0" r="3.2" fill="#0f1f3d"/><text x="30" y="95" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="120" y="95" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="220" y="95" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },
        { difficulty: 'Medium', question: "Die diagram wys Stadiums 1, 2 en 3 van ʼn groeiende patroon van L-vormige teëls. Stadium 1 het 5 teëls, Stadium 2 het 8 teëls, Stadium 3 het 11 teëls. Hoeveel teëls sal Stadium 12 hê?", checkMode: 'auto', options: ['38', '36', '35', '41'], correctIndex: 0, explanation: 'Eerste verskille: 3, 3 — konstant. Reël: teëls = 3n+2. Vir Stadium 12: 3(12)+2 = 36+2 = 38 teëls. (36 laat die +2 konstante weg, 35 gebruik Stadium 11 in plaas van Stadium 12, en 41 gebruik Stadium 13 in plaas van Stadium 12.)', diagramSvg: '<svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg"><rect x="15.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="15.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="15.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="24.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="33.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="90.0" y="42.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="99.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="108.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="117.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="126.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="24.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="33.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="42.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="180.0" y="51.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="189.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="198.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="207.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="216.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="225.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><rect x="234.0" y="15.0" width="8" height="8" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="24" y="100" font-size="10" fill="#374151" text-anchor="middle">Stadium 1</text><text x="108" y="100" font-size="10" fill="#374151" text-anchor="middle">Stadium 2</text><text x="207" y="100" font-size="10" fill="#374151" text-anchor="middle">Stadium 3</text></svg>' },

        // Blok 5 — Verifieer ʼn voorgestelde reël deur vervanging (Hard)
        { difficulty: 'Hard', question: 'Lerato beweer die patroon 4, 13, 28, 49 volg die reël 3n²+1. Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['27 — nie geverifieer nie', '28 — geverifieer', '13 — nie geverifieer nie', '30 — nie geverifieer nie'], correctIndex: 1, explanation: 'Vervang n=3: 3(3)²+1 = 27+1 = 28, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (27 vergeet die +1 konstante, 13 gebruik per ongeluk n=2, en 30 kom van ʼn rekenfout.)' },
        { difficulty: 'Hard', question: 'Thabo beweer die patroon 2, 8, 18, 32 volg die reël 2n². Watter waarde gee die reël vir n=3, en is die reël geverifieer?', checkMode: 'auto', options: ['9 — nie geverifieer nie', '32 — nie geverifieer nie', '18 — geverifieer', '16 — nie geverifieer nie'], correctIndex: 2, explanation: 'Vervang n=3: 2(3)² = 2(9) = 18, wat ooreenstem met die 3de term van die patroon, dus is die reël geverifieer. (9 vergeet om met 2 te vermenigvuldig, 32 gebruik per ongeluk n=4, en 16 kom van ʼn rekenfout.)' },

        // Blok 6 — Werklike-lewe patroonkonteksprobleme (Hard)
        { difficulty: 'Hard', question: "Banke word in ʼn ry teenmekaar geskuif by ʼn stadion. 1 bank bied plek vir 4 mense, 2 banke saamgevoeg bied plek vir 7 mense, 3 banke saamgevoeg bied plek vir 10 mense. Vind die reël en voorspel hoeveel mense 11 saamgevoegde banke sal huisves.", checkMode: 'auto', options: ['33', '31', '37', '34'], correctIndex: 3, explanation: 'Eerste verskille: 3, 3 — konstant. Reël: setels = 3n+1. Vir 11 banke: 3(11)+1 = 33+1 = 34 mense. (33 laat die +1 konstante weg, 31 gebruik per ongeluk n=10, en 37 gebruik per ongeluk n=12.)' },
        { difficulty: 'Hard', question: "ʼn Vierkantige binnehof word omraam deur plaveiselteëls, waar die aantal randteëls die reël 5n+3 volg, waar n die syaflengte van die binnehof in teëls is. Watter waarde gee die reël vir n=7, en bevestig dit 38 randteëls?", checkMode: 'auto', options: ['38 — ja, bevestig', '35 — nee, reël gee 35', '43 — nee, reël gee 43', '10 — nee, reël gee 10'], correctIndex: 0, explanation: '5(7)+3 = 35+3 = 38, wat bevestig dat die reël 38 randteëls gee wanneer n=7. (35 vergeet die +3 konstante, 43 gebruik per ongeluk n=8, en 10 vergeet om n met 5 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: "ʼn Patroon van stervormige kolletjie-rangskikkings lewer 2, 6, 14, 26. Vind die algebraïese reël en voorspel die aantal kolletjies in Stadium 6.", checkMode: 'auto', options: ['60', '62', '86', '36'], correctIndex: 1, explanation: "Eerste verskille: 4, 8, 12 — neem met 4 toe. Die konstante tweede verskil van 4 gee ʼn voorste koëffisiënt van 2, dus is die reël 2n²-2n+2. Verifieer: n=1 gee 2, n=2 gee 6, n=3 gee 14, n=4 gee 26 ✓. Vir Stadium 6: 2(36)-2(6)+2 = 72-12+2 = 62 kolletjies. (60 vergeet die +2 konstante, 86 het ʼn tekenfout op die lineêre term, en 36 gebruik slegs die n²-term.)" },
        { difficulty: 'Hard', question: "Sporte word langs ʼn leerraam vasgemaak, volgens die reël sporte = 2n+3, waar n die aantal raamdele is. Voorspel die aantal sporte benodig vir 25 dele.", checkMode: 'auto', options: ['50', '55', '53', '28'], correctIndex: 2, explanation: 'sporte = 2(25)+3 = 50+3 = 53 sporte. (50 laat die +3 konstante weg, 55 gebruik per ongeluk n=26, en 28 vergeet om n met 2 te vermenigvuldig.)' },
        { difficulty: 'Hard', question: 'Gebruik die reël 2n²+n-4 om die 16de term van die patroon te vind.', checkMode: 'auto', options: ['508', '492', '512', '524'], correctIndex: 3, explanation: 'n=16: 2(16²)+16-4 = 2(256)+16-4 = 512+16-4 = 524. (508 vergeet die lineêre +n-term, 492 het ʼn tekenfout op die lineêre term, en 512 gebruik slegs die 2n²-term.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan deur enige gemiste vrae oor die vind van reëls of geometriese groeipatrone en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan deur die uitgewerkte voorbeelde oor eerste en tweede verskille, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
