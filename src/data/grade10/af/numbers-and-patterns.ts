import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (shared across all three sections) ────────────────────────
// numerator / real solutions / general term → blue   (#2563eb)
// denominator / common difference           → orange (#ea580c)
// recurring pattern / specific term         → green  (#16a34a)
// non-real (no solution)                    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Getalle en Patrone',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — IDENTIFYING RATIONAL NUMBERS AND CONVERTING DECIMAL FORMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-numbers-decimal-forms',
      title: 'Identifisering van Rasionale Getalle en Omskakeling van Desimale Vorme',
      icon: '⅓',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Rasionale getal</strong> kan in die vorm ${bl('a')}/${or('b')} geskryf word, waar ${bl('a')} en ${or('b')} heelgetalle is en ${or('b')} ≠ 0. Ons identifiseer watter getalle rasionaal is, en ons skakel om tussen eindigende of herhalende desimale en hul breukvorm ${bl('a')}/${or('b')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teller')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('noemer')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('herhalende patroon')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteldefinisies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Eindigende desimaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Desimaal wat na ʼn eindige aantal syfers eindig — byvoorbeeld, 0,75 of 3,5. Hierdie kan altyd as ʼn breuk geskryf word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Herhalende desimaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Desimaal waarin een of meer syfers vir ewig herhaal — byvoorbeeld, ${gr('0,333...')} of ${gr('0,142857142857...')}. Hierdie is ook rasionaal.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Irrasionale getal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal wat nie as ${bl('a')}/${or('b')} geskryf kan word met heelgetalle ${bl('a')} en ${or('b')} nie. Voorbeelde: π, √2. Hul desimale eindig of herhaal nooit nie.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakeling van ʼn herhalende desimaal na ʼn breuk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Laat <strong>x</strong> gelyk wees aan die herhalende desimaal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Vermenigvuldig altwee kante met ʼn mag van 10 wat die ${gr('herhalende blok')} verby die desimaalkomma skuif.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Trek die oorspronklike vergelyking af om die ${gr('herhalende deel')} te elimineer, en los dan vir <strong>x</strong> op.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die breukstreep maak nie outomaties ʼn getal rasionaal nie</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om iets met ʼn breukstreep te skryf, maak dit nie outomaties rasionaal nie. Beide die ${bl('teller')} en die ${or('noemer')} moet heelgetalle wees. π/2 lyk soos ʼn breuk, maar is irrasionaal omdat π nie ʼn heelgetal is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 0,75 om na ʼn breuk.',
          answer: `0,75 = ${bl('3')}/${or('4')}`,
          steps: [
            `Skryf die desimaal oor sy plekwaarde: 0,75 = ${bl('75')}/${or('100')}.`,
            `Vind die GGF van ${bl('75')} en ${or('100')}. Die GGF is 25.`,
            `Vereenvoudig deur albei deur 25 te deel: ${bl('75')} ÷ 25 = ${bl('3')} en ${or('100')} ÷ 25 = ${or('4')}.`,
            `<strong>Antwoord:</strong> 0,75 = ${bl('3')}/${or('4')} ✓`,
          ],
        },
        {
          question: 'Skakel die herhalende desimaal 0,333… om na ʼn breuk.',
          answer: `${gr('0,333…')} = ${bl('1')}/${or('3')}`,
          steps: [
            `Laat <strong>x</strong> = ${gr('0,333…')}`,
            `Vermenigvuldig altwee kante met 10: <strong>10x</strong> = ${gr('3,333…')}`,
            `Trek die oorspronklike vergelyking af: 10x − x = ${gr('3,333…')} − ${gr('0,333…')} = 3. Dus <strong>9x = 3</strong>.`,
            `Los op vir x: x = ${bl('3')}/${or('9')} = ${bl('1')}/${or('3')}.`,
            `<strong>Antwoord:</strong> ${gr('0,333…')} = ${bl('1')}/${or('3')} ✓`,
          ],
        },
        {
          question: 'Sipho sê π/2 is rasionaal omdat dit as ʼn breuk geskryf is. Is hy korrek?',
          answer: 'Nee — π/2 is irrasionaal.',
          steps: [
            `Vir ʼn getal om rasionaal te wees, moet dit uitdrukbaar wees as ${bl('a')}/${or('b')} waar beide ${bl('a')} en ${or('b')} <strong>heelgetalle</strong> is.`,
            `In π/2 is die ${bl('teller')} π — en π is ʼn irrasionale getal, nie ʼn heelgetal nie.`,
            `Die breukstreep alleen maak nie ʼn getal rasionaal nie. Aangesien π self irrasionaal is, is π/2 ook irrasionaal, al is dit met ʼn breukstreep geskryf.`,
            `<strong>Antwoord:</strong> Nee — Sipho is verkeerd. π/2 is irrasionaal. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel 0,6 om na ʼn breuk in eenvoudigste vorm.',
          answer: '3/5',
          checkMode: 'auto',
          correctAnswer: '3/5',
          explanation: '0,6 = 6/10. Die GGF van 6 en 10 is 2. As ons albei deur 2 deel: 6 ÷ 2 = 3, 10 ÷ 2 = 5. Dus 0,6 = 3/5 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel die herhalende desimaal 0,222... om na ʼn breuk.',
          answer: '2/9',
          checkMode: 'auto',
          correctAnswer: '2/9',
          explanation: 'Laat x = 0,222... Vermenigvuldig altwee kante met 10: 10x = 2,222... Trek die oorspronklike af: 9x = 2. Dus x = 2/9 ✓',
        },

        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Skakel 0,454545... (herhalend) om na ʼn breuk, en toon jou volledige metode.',
          answer: 'Laat x=0,454545... Dan 100x=45,454545... Trek af: 100x-x=45. 99x=45. x=45/99=5/11.',
          checkMode: 'self',
        },

        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is √4 rasionaal of irrasionaal?',
          answer: 'rasionaal',
          checkMode: 'auto',
          correctAnswer: 'rasionaal',
          explanation: '√4 = 2, wat ʼn heelgetal is. Dit kan as 2/1 geskryf word, ʼn breuk van twee heelgetalle, dus is dit rasionaal ✓',
        },

        // ── Q5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho sê 0,125 is irrasionaal omdat dit baie desimale plekke het. Is hy korrek? Verduidelik.',
          answer: 'Nee — 0,125 is ʼn eindigende desimaal, wat beteken dit kan as ʼn presiese breuk geskryf word (125/1000=1/8), wat dit rasionaal maak.',
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê elke herhalende desimaal kan na ʼn breuk omgeskakel word. Is sy korrek? Verduidelik.',
          answer: 'Ja — herhalende desimale is per definisie rasionale getalle, en alle rasionale getalle kan as ʼn breuk a/b uitgedruk word.',
          checkMode: 'self',
        },

        // ── Q15 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel 0,8333... (herhalend vanaf die 3) om na ʼn breuk.',
          answer: '5/6',
          checkMode: 'auto',
          correctAnswer: '5/6',
          explanation: 'Laat x = 0,8333... Dan 10x = 8,333... Trek af: 10x − x = 7,5. Dus 9x = 7,5, x = 7,5/9 = 75/90 = 5/6 ✓',
        },

        // ── Q19 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Skakel 1,272727... (herhalend vanaf die 27) om na ʼn gemengde getalbreuk.',
          answer: 'Laat x=1,272727... Dan 100x=127,2727... Trek af: 100x-x=126. 99x=126. x=126/99=14/11=1 en 3/11.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing rational numbers (terminating and recurring decimals as fractions) alongside irrational numbers such as π and √2 to contrast the two sets" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert a terminating decimal and a recurring decimal to fraction form a over b using the algebraic method" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — NON-REAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'non-real-numbers',
      title: 'Nie-reële Getalle',
      icon: 'ℂ',
      explanation:
        `<p style="margin-bottom:16px;">Nie-reële getalle ontstaan wanneer ons probeer om vergelykings soos x² = −1 op te los, waar geen reële getal in die kwadraat ʼn negatiewe resultaat gee nie. Hierdie getalle behoort tot die versameling <strong>komplekse getalle</strong>, wat later in meer diepte bestudeer word — op hierdie vlak herken ons eenvoudig dat sulke vergelykings ${re('geen reële oplossings')} het nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reële oplossings')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nie-reële / geen reële oplossing')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Waarom kwadrering nooit ʼn negatiewe resultaat gee nie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positief × Positief</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(+3)² = (+3)(+3) = ${bl('+9')} — ʼn positiewe resultaat.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Negatief × Negatief</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(−3)² = (−3)(−3) = ${bl('+9')} — ook ʼn positiewe resultaat.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Gevolgtrekking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om enige reële getal in die kwadraat te bring, gee altyd ʼn ${bl('nie-negatiewe')} resultaat. Dus het x² = negatief ${re('geen reële oplossing')} nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Op Graad 10-vlak</p>` +
        `<p style="margin:0;color:#991b1b;">Jy hoef net te <em>herken</em> wanneer ʼn vergelyking ${re('geen reële oplossings')} het nie omdat dit die vierkantswortel van ʼn negatiewe getal vereis. Daar word nie van jou verwag om reeds met komplekse getalle te werk nie — verklaar eenvoudig dat die vergelyking ${re('geen reële oplossings')} het nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Het x² = −9 ʼn reële oplossing?',
          answer: `${re('Geen reële oplossing')} — x² = −9 het geen reële oplossings nie.`,
          steps: [
            `Om x² = −9 op te los, sou ons x = ±√(−9) nodig hê.`,
            `Daar is geen reële getal wat, wanneer dit in die kwadraat gebring word, ʼn negatiewe resultaat gee nie — om enige reële getal in die kwadraat te bring, gee altyd ʼn ${bl('nie-negatiewe')} resultaat.`,
            `Hierdie vergelyking het ${re('geen reële oplossings')} nie. (Slegs nie-reële/komplekse oplossings bestaan, wat buite die omvang van hierdie kursus val.)`,
            `<strong>Antwoord:</strong> x² = −9 het ${re('geen reële oplossings')} nie. ✓`,
          ],
        },
        {
          question: 'Lerato sê x² = 4 en x² = −4 het altwee twee reële oplossings. Is sy korrek?',
          answer: `Nee — slegs x² = 4 het ${bl('twee reële oplossings')}; x² = −4 het ${re('geen reële oplossings')} nie.`,
          steps: [
            `Beskou x² = 4: ons benodig x = ±√4 = ±2. Beide ${bl('x = 2')} en ${bl('x = −2')} is reële getalle. ✓ Twee ${bl('reële oplossings')}.`,
            `Beskou x² = −4: ons sou x = ±√(−4) nodig hê. Geen reële getal in die kwadraat gee −4 nie, aangesien om enige reële getal in die kwadraat te bring ʼn ${bl('nie-negatiewe')} resultaat gee.`,
            `Daarom het x² = −4 ${re('geen reële oplossings')} nie.`,
            `<strong>Antwoord:</strong> Lerato is verkeerd. x² = 4 het twee ${bl('reële oplossings')}, maar x² = −4 het ${re('geen reële oplossings')} nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q6 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Het x²=-16 ʼn reële oplossing?',
          answer: 'nee',
          checkMode: 'auto',
          correctAnswer: 'nee',
          correctAnswers: ['nee', 'Nee', 'geen reële oplossing', 'Geen reële oplossing'],
          explanation: 'Om enige reële getal in die kwadraat te bring, gee altyd ʼn nie-negatiewe resultaat. x² = −16 het geen reële oplossing nie omdat die vierkantswortel van ʼn negatiewe getal nie reëel is nie ✓',
        },

        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato los x²=25 op en sê daar is slegs een oplossing, x=5. Is sy korrek? Verduidelik.',
          answer: 'Nee — daar is twee oplossings, x=5 en x=-5, aangesien altwee in die kwadraat 25 gee.',
          checkMode: 'self',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Verduidelik waarom x²+1=0 geen reële oplossings het nie.',
          answer: 'Hierdie vergelyking vereis x²=-1, maar geen reële getal in die kwadraat kan ʼn negatiewe resultaat lewer nie, dus is daar geen reële oplossing nie.',
          checkMode: 'self',
        },

        // ── Q16 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê nie-reële oplossings kom slegs by kwadratiese vergelykings voor. Is dit oor die algemeen waar op hierdie vlak? Verduidelik.',
          answer: 'Meestal ja op hierdie vlak — vergelykings soos x²=negatiewe getal lewer nie-reële resultate, terwyl liniêre vergelykings met reële koëffisiënte tipies reële oplossings het.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number system diagram showing Real numbers containing Rational and Irrational subsets, with Complex numbers as the outer set that includes non-real numbers" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining why squaring a real number can never give a negative result and what it means for an equation to have no real solution" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING LINEAR NUMBER PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'linear-number-patterns',
      title: 'Ondersoek van Liniêre Getalpatrone',
      icon: '→',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek getalpatrone waar daar ʼn <strong>konstante verskil</strong> tussen opeenvolgende terme is, wat beteken die algemene term (n-de term) is liniêr, van die vorm T<sub>n</sub> = ${or('d')}n + c, waar ${or('d')} die ${or('gemeenskaplike verskil')} is en c ʼn konstante is wat gevind word deur agteruit vanaf die patroon te werk.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemeenskaplike verskil')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('algemene term (Tₙ)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('spesifieke termwaarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Bepaling van die algemene term T<sub>n</sub> = ${or('d')}n + c</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Vind die ${or('gemeenskaplike verskil')} <em>d</em> deur enige term van die volgende term af te trek.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${bl('algemene vorm')}: ${bl('Tₙ')} = ${or('d')}n + c.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Vervang ʼn bekende term (gewoonlik n = 1) om die konstante c te vind, en skryf dan die finale ${bl('reël')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Vervang die verlangde posisienommer in die reël om ʼn ${gr('spesifieke term')} te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Positiewe teenoor negatiewe gemeenskaplike verskil</p>` +
        `<p style="margin:0;color:#78350f;">As die terme toeneem, is die ${or('gemeenskaplike verskil')} <strong>positief</strong> en die ry gaan op. As die terme afneem, is die ${or('gemeenskaplike verskil')} <strong>negatief</strong> en die ry gaan af. Kontroleer altyd met meer as een paar opeenvolgende terme.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die n-de term van die patroon 5, 9, 13, 17.',
          answer: `${bl('Tₙ')} = ${or('4')}n + 1`,
          steps: [
            `Vind die ${or('gemeenskaplike verskil')}: 9 − 5 = ${or('4')}, 13 − 9 = ${or('4')}, 17 − 13 = ${or('4')}. Die ${or('gemeenskaplike verskil')} is ${or('4')}.`,
            `Skryf die ${bl('algemene vorm')}: ${bl('Tₙ')} = ${or('4')}n + c.`,
            `Vervang n = 1 met T₁ = 5: ${or('4')}(1) + c = 5 → c = 5 − 4 = 1.`,
            `<strong>Reël:</strong> ${bl('Tₙ')} = ${or('4')}n + 1 ✓`,
          ],
        },
        {
          question: 'Vind die 5de en die n-de term van die patroon 10, 7, 4, 1.',
          answer: `${bl('Tₙ')} = ${or('−3')}n + 13; 5de term = ${gr('−2')}`,
          steps: [
            `Vind die ${or('gemeenskaplike verskil')}: 7 − 10 = ${or('−3')}, 4 − 7 = ${or('−3')}. Die ${or('gemeenskaplike verskil')} is ${or('−3')}.`,
            `Skryf die ${bl('algemene vorm')}: ${bl('Tₙ')} = ${or('−3')}n + c.`,
            `Vervang n = 1 met T₁ = 10: ${or('−3')}(1) + c = 10 → c = 10 + 3 = 13.`,
            `<strong>Reël:</strong> ${bl('Tₙ')} = ${or('−3')}n + 13 ✓`,
            `Vind die ${gr('5de term')}: T₅ = ${or('−3')}(5) + 13 = −15 + 13 = ${gr('−2')} ✓`,
          ],
        },
        {
          question: 'As die patroon MATHSMATHSMATHS… voortduur, wat is die 267ste letter?',
          answer: `Die ${gr('267ste')} letter is ${gr('A')}.`,
          steps: [
            `Identifiseer die herhalende blok: M-A-T-H-S. Die blok het <strong>5 letters</strong> en herhaal elke ${or('5')} posisies.`,
            `Deel 267 deur ${or('5')} om die posisie binne die siklus te vind: 267 ÷ ${or('5')} = 53 res <strong>2</strong>.`,
            `ʼn Res van 2 beteken die 267ste letter is in posisie 2 van die herhalende blok MATHS.`,
            `Posisie 2 in MATHS is <strong>A</strong>.`,
            `<strong>Antwoord:</strong> Die ${gr('267ste')} letter is ${gr('A')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon 6, 11, 16, 21.',
          answer: '26',
          checkMode: 'auto',
          correctAnswer: '26',
          explanation: 'Gemeenskaplike verskil = 11 − 6 = 5. Elke term neem met 5 toe. Volgende term: 21 + 5 = 26 ✓',
        },

        // ── Q10 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die n-de term van die patroon 4, 10, 16, 22.',
          answer: 'Tₙ=6n-2',
          checkMode: 'auto',
          correctAnswer: 'Tₙ=6n-2',
          correctAnswers: ['Tₙ=6n-2', 'Tₙ = 6n - 2', '6n-2', '6n - 2'],
          explanation: 'Gemeenskaplike verskil = 6. Algemene vorm: Tₙ = 6n + c. Deur T₁ = 4 te vervang: 6(1) + c = 4, dus c = −2. Reël: Tₙ = 6n − 2 ✓',
        },

        // ── Q11 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die 5de en die n-de term van die patroon 15, 11, 7, 3.',
          answer: 'Gemeenskaplike verskil=-4. Tₙ=-4n+c. Met n=1: -4+c=15, c=19. Reël: Tₙ=-4n+19. 5de term: -4(5)+19=-1.',
          checkMode: 'self',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Thabo se patroon is 8, 13, 18, 23. Vind die 20ste term.",
          answer: '103',
          checkMode: 'auto',
          correctAnswer: '103',
          explanation: 'Gemeenskaplike verskil = 5. Tₙ = 5n + c. T₁: 5(1) + c = 8, c = 3. Reël: Tₙ = 5n + 3. T₂₀ = 5(20) + 3 = 100 + 3 = 103 ✓',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'As die patroon XYZXYZXYZ... voortduur, wat is die 50ste letter?',
          answer: 'Die patroon herhaal elke 3 letters. 50÷3=16 res 2. Die 2de letter in XYZ is Y. Die 50ste letter is Y.',
          checkMode: 'self',
        },

        // ── Q17 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die 100ste term van die patroon 2, 6, 10, 14.',
          answer: '398',
          checkMode: 'auto',
          correctAnswer: '398',
          explanation: 'Gemeenskaplike verskil = 4. Tₙ = 4n + c. T₁: 4(1) + c = 2, c = −2. Reël: Tₙ = 4n − 2. T₁₀₀ = 4(100) − 2 = 400 − 2 = 398 ✓',
        },

        // ── Q18 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon het n-de term Tₙ=5n-3. Vind watter termnommer ʼn waarde van 47 gee.',
          answer: '5n-3=47. 5n=50. n=10. Die 10de term is gelyk aan 47.',
          checkMode: 'self',
        },

        // ── Q20 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato se patroon is 20, 14, 8, 2. Vind die termnommer wanneer die waarde die eerste keer negatief word.",
          answer: 'Gemeenskaplike verskil=-6. Tₙ=-6n+26. Stel Tₙ<0: -6n+26<0. -6n<-26. n>4,33. Die 5de term is die eerste negatiewe term: T₅=-6(5)+26=-4.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Table showing a linear pattern with term numbers n and term values T-n, arrows indicating the constant common difference between consecutive terms, and the general term formula T-n equals dn plus c labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the common difference, set up the general term formula T-n equals dn plus c, and use it to calculate any specific term in a linear number pattern" />',
    },
  ],
  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het getalle en patrone bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het getalle en patrone bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
