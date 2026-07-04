import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// pattern terms      → blue   (#2563eb)
// common difference  → orange (#ea580c)
// rule / formula     → green  (#16a34a)
// nth term / answer  → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patrone, Funksies en Verwantskappe',
  grade: 7,
  sections: [

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NUMERIC PATTERNS AND RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'numeric-patterns-rules',
      title: 'Getalpatrone en Reëls',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Ons identifiseer die <strong>reël</strong> wat terme in ʼn getalpatroon verbind, insluitend patrone wat meer as een bewerking behels. Ons beskryf die reël in woorde en skryf dit met ʼn veranderlike om die <strong>nde term</strong> te vind — vir enige termnommer n.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('patroonterme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('konstante verskil')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('reël')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('nde term')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Patroonterme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getalle wat in die reeks voorkom, in volgorde gelys.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Konstante verskil</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die vaste hoeveelheid wat tussen opeenvolgende terme in ʼn lineêre patroon bygetel (of afgetrek) word.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Formule wat enige term in die patroon lewer wanneer jy sy posisienommer n ken.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">nde term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die algemene term by posisie n — vervang enige waarde van n om daardie term te vind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die reël vir ʼn lineêre patroon vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir ʼn patroon met ʼn <strong>konstante verskil</strong>, is die reël altyd van die vorm: ${re('nde term')} = ${or('d')} × n + c, waar ${or('d')} die konstante verskil is en c gevind word deur die eerste term te vervang.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die reël en die 10de term van die patroon 5, 9, 13, 17.',
          answer: `${gr('Reël: nde term = 4n + 1')} &nbsp;|&nbsp; ${re('10de term = 41')}`,
          steps: [
            `Vind die ${or('konstante verskil')}: 9 − 5 = 13 − 9 = 17 − 13 = ${or('4')}. Die ${bl('patroonterme')} neem elke keer met ${or('4')} toe.`,
            `Aangesien die ${or('konstante verskil')} ${or('4')} is, begin die ${gr('reël')} met ${gr('4n')}. Vervang die eerste term (n = 1): 4 × 1 + c = ${bl('5')}, dus c = 1.`,
            `${gr('Reël: nde term = 4n + 1')}. Kontroleer: 4(1)+1=${bl('5')} ✓, 4(2)+1=${bl('9')} ✓, 4(3)+1=${bl('13')} ✓, 4(4)+1=${bl('17')} ✓`,
            `Vind die ${re('10de term')}: vervang n = 10. ${re('nde term')} = 4 × 10 + 1 = 40 + 1 = ${re('41')}`,
          ],
        },
        {
          question: 'Vind die reël vir die patroon 2, 5, 10, 17.',
          answer: `${gr('Reël: nde term = n² + 1')}`,
          steps: [
            `Vind die verskille tussen opeenvolgende ${bl('patroonterme')}: 5 − 2 = ${or('3')}, 10 − 5 = ${or('5')}, 17 − 10 = ${or('7')}. Die verskille is ${or('3, 5, 7')} — nie konstant nie, dus is die patroon nie lineêr nie.`,
            `Die verskille neem elke keer met 2 toe, wat dui op ʼn verband met ${gr('vierkantsgetalle')}.`,
            `Kontroleer ${gr('n² + 1')}: n=1 gee 1²+1=${bl('2')} ✓. n=2 gee 2²+1=${bl('5')} ✓. n=3 gee 3²+1=${bl('10')} ✓. n=4 gee 4²+1=${bl('17')} ✓`,
            `${gr('Reël: nde term = n² + 1')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — find rule and 8th term ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die reël en die 8ste term van die patroon 3, 7, 11, 15.',
          answer: 'Konstante verskil = 4. Met n = 1: 4(1) + c = 3, dus c = −1.\nReël: nde term = 4n − 1\n8ste term = 4(8) − 1 = 31',
          checkMode: 'self',
        },

        // ── Q2 Medium — find rules for two patterns ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die reël vir elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 6, 11, 16, 21 — nde term =',
              correctAnswer: '5n+1',
              correctAnswers: ['5n+1', '5n + 1'],
              explanation: 'Konstante verskil = 5. Vervang n=1: 5(1)+c=6 → c=1. Reël: nde term = 5n+1 ✓',
            },
            {
              label: 'b) 1, 4, 9, 16 — nde term =',
              correctAnswer: 'n²',
              correctAnswers: ['n²', 'n^2'],
              explanation: 'Verskille: 3, 5, 7 — nie konstant nie. Kontroleer vierkantsgetalle: 1²=1, 2²=4, 3²=9, 4²=16. Reël: nde term = n² ✓',
            },
          ],
        },

        // ── Q3 Hard — quadratic nth term formula ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon het die reël nde term = 3n² − 1.\n\na) Skryf die eerste vier terme.\nb) Wat is die 20ste term?\nc) Is 299 ʼn term in hierdie patroon? Verduidelik.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Eerste vier terme',
              correctAnswer: '2,11,26,47',
              correctAnswers: ['2,11,26,47', '2, 11, 26, 47'],
              explanation: 'n=1: 3(1)²−1=2. n=2: 3(4)−1=11. n=3: 3(9)−1=26. n=4: 3(16)−1=47.',
            },
            {
              label: 'b) 20ste term',
              correctAnswer: '1199',
              explanation: '3(20)²−1 = 3(400)−1 = 1200−1 = 1199.',
            },
            {
              label: 'c) Is 299 ʼn term in die patroon?',
              correctAnswer: 'Ja',
              checkMode: 'self',
              answer: 'Stel 3n²−1=299 → 3n²=300 → n²=100 → n=10. Aangesien n=10 ʼn positiewe heelgetal is, IS 299 ʼn term — die 10de term.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die reël van ʼn getalpatroon te vind, insluitend lineêre patrone en patrone gebaseer op vierkantsgetalle" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getalpatroon met terme uitgelig in blou, konstante verskil uitgelig in oranje, en die nde-termreël geskryf in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — TABLES OF VALUES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tables-of-values',
      title: 'Tabelle van Waardes',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Tabel van waardes</strong> wys die verwantskap tussen ${bl('inset')}- en ${gr('uitset')}-waardes vir ʼn gegewe reël. Ons kan ʼn tabel gebruik om die ${or('reël')} te vind wat inset en uitset verbind, of ʼn bekende reël gebruik om ʼn tabel te voltooi.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('inset (x)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitset (y)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn tabel van waardes te gebruik</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gegewe die reël → voltooi die tabel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vervang elke ${bl('inset')}-waarde in die ${or('reël')} om die ooreenstemmende ${gr('uitset')}-waarde te bereken.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gegewe die tabel → vind die reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vind die verskille in die ${gr('uitset')}-waardes, en werk dan uit watter bewerking elke ${bl('inset')} met sy ${gr('uitset')} verbind.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Strategie om ʼn reël uit ʼn tabel te vind</p>` +
        `<p style="margin:0;color:#14532d;"><strong>Stap 1</strong> — Vind die verskille in die ${gr('uitset')}-kolom. As dit konstant is, is die ${or('reël')} lineêr.<br><strong>Stap 2</strong> — Die konstante verskil is die koëffisiënt van x: skryf ${or('y = (verskil) × x + c')}.<br><strong>Stap 3</strong> — Vervang een ${bl('inset')}–${gr('uitset')}-paar om c te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Voltooi die tabel met die reël y = 3x − 2 vir x = 1, 2, 3, 4.',
          answer: `${gr('y')}-waardes: ${gr('1, 4, 7, 10')}`,
          steps: [
            `${or('Reël: y = 3x − 2')}. Vervang ${bl('x = 1')}: y = 3(${bl('1')}) − 2 = 3 − 2 = ${gr('1')}`,
            `Vervang ${bl('x = 2')}: y = 3(${bl('2')}) − 2 = 6 − 2 = ${gr('4')}`,
            `Vervang ${bl('x = 3')}: y = 3(${bl('3')}) − 2 = 9 − 2 = ${gr('7')}`,
            `Vervang ${bl('x = 4')}: y = 3(${bl('4')}) − 2 = 12 − 2 = ${gr('10')}`,
          ],
        },
        {
          question: 'Vind die reël vir hierdie tabel — x: 1, 2, 3, 4 en y: 6, 11, 16, 21.',
          answer: `${or('Reël: y = 5x + 1')}`,
          steps: [
            `Vind die verskille in die ${gr('uitset')}-kolom: 11 − 6 = ${or('5')}, 16 − 11 = ${or('5')}, 21 − 16 = ${or('5')}. Die verskille is konstant op ${or('5')}.`,
            `Dus is die koëffisiënt van x gelyk aan 5: probeer ${or('y = 5x + c')}.`,
            `Vervang ${bl('x = 1')}, ${gr('y = 6')}: 5(${bl('1')}) + c = ${gr('6')} → c = 1.`,
            `${or('Reël: y = 5x + 1')}. Kontroleer: 5(${bl('1')})+1=${gr('6')} ✓, 5(${bl('2')})+1=${gr('11')} ✓, 5(${bl('3')})+1=${gr('16')} ✓, 5(${bl('4')})+1=${gr('21')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — complete table from given rule ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Voltooi die tabel met die reël y = 2x + 3 vir x = 1, 2, 3, 4.',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'x = 1, y =', correctAnswer: '5', explanation: 'y = 2(1)+3 = 2+3 = 5' },
            { label: 'x = 2, y =', correctAnswer: '7', explanation: 'y = 2(2)+3 = 4+3 = 7' },
            { label: 'x = 3, y =', correctAnswer: '9', explanation: 'y = 2(3)+3 = 6+3 = 9' },
            { label: 'x = 4, y =', correctAnswer: '11', explanation: 'y = 2(4)+3 = 8+3 = 11' },
          ],
        },

        // ── Q5 Medium — find rule from two tables ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die reël vir elke tabel van waardes.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) x: 1,2,3,4 → y: 4,7,10,13. Reël: y =',
              correctAnswer: '3x+1',
              correctAnswers: ['3x+1', '3x + 1'],
              explanation: 'Verskille in y: 3, 3, 3 — konstant op 3. Probeer y=3x+c: 3(1)+c=4 → c=1. Reël: y=3x+1 ✓',
            },
            {
              label: 'b) x: 1,2,3,4 → y: 8,13,18,23. Reël: y =',
              correctAnswer: '5x+3',
              correctAnswers: ['5x+3', '5x + 3'],
              explanation: 'Verskille in y: 5, 5, 5 — konstant op 5. Probeer y=5x+c: 5(1)+c=8 → c=3. Reël: y=5x+3 ✓',
            },
          ],
        },

        // ── Q6 Hard — quadratic table with second differences ─────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Tabel wys x: 1, 2, 3, 4, 5 en y: 3, 8, 15, 24, 35.\n\na) Vind die eerste verskille in y.\nb) Vind die tweede verskille.\nc) Wat vertel dit jou van die reël?\nd) Vind die reël.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Eerste verskille',
              correctAnswer: '5,7,9,11',
              correctAnswers: ['5,7,9,11', '5, 7, 9, 11'],
              explanation: '8−3=5, 15−8=7, 24−15=9, 35−24=11.',
            },
            {
              label: 'b) Tweede verskille',
              correctAnswer: '2,2,2',
              correctAnswers: ['2,2,2', '2, 2, 2'],
              explanation: '7−5=2, 9−7=2, 11−9=2. Die tweede verskille is konstant op 2.',
            },
            {
              label: 'c) Wat vertel die konstante tweede verskil jou?',
              correctAnswer: 'kwadraties',
              checkMode: 'self',
              answer: 'Konstante tweede verskille beteken die reël is kwadraties — dit behels n² (of x²).',
            },
            {
              label: 'd) Reël: y =',
              correctAnswer: 'n²+2n',
              correctAnswers: ['n²+2n', 'x²+2x', 'n^2+2n', 'x^2+2x'],
              explanation: 'Probeer y=n²+2n: 1+2=3 ✓, 4+4=8 ✓, 9+6=15 ✓, 16+8=24 ✓, 25+10=35 ✓.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn tabel van waardes met ʼn gegewe reël te voltooi en hoe om die reël uit ʼn voltooide tabel te vind" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Tabel van waardes met die insetkolom uitgelig in blou en die uitsetkolom uitgelig in groen, wat die reël wat hulle verbind in oranje geskryf wys" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EQUATIONS AND GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equations-graphs',
      title: 'Vergelykings en Grafieke',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Verwantskap tussen twee veranderlikes kan as ʼn vergelyking, ʼn tabel of ʼn grafiek voorgestel word. Ons stip punte uit ʼn tabel van waardes op ʼn <strong>Cartesiese vlak</strong> om ʼn grafiek te skep, met die ${bl('insetwaardes op die x-as')} en ${gr('uitsetwaardes op die y-as')}. Reguit-lyn-grafieke stel verwantskappe met ʼn konstante koers van verandering voor.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('x-as')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('y-as')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('punte')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('grafiekvorm')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Cartesiese vlak</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Rooster met ʼn horisontale ${bl('x-as')} (inset) en ʼn vertikale ${gr('y-as')} (uitset). Elke ${or('punt')} word geskryf as (x, y).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reguit-lyn-grafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${re('Reguit lyn')} word gevorm wanneer die koers van verandering tussen y en x konstant is — met ander woorde wanneer die eerste verskille in y gelyk is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Geboë grafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${re('Kromme')} word gevorm wanneer die koers van verandering nie konstant is nie — byvoorbeeld, reëls wat x² behels lewer ʼn parabool.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Hoe om ʼn grafiek uit ʼn reël te teken</p>` +
        `<p style="margin:0;color:#78350f;"><strong>Stap 1</strong> — Bou ʼn tabel van waardes deur ten minste 3 ${bl('x-waardes')} te kies en die ooreenstemmende ${gr('y-waardes')} te bereken.<br><strong>Stap 2</strong> — Stip elke ${or('punt')} (x, y) op die Cartesiese vlak.<br><strong>Stap 3</strong> — Verbind die ${or('punte')} om die ${re('grafiekvorm')} te wys — gebruik ʼn liniaal vir reguit lyne, en teken ʼn gladde kromme vir nie-lineêre grafieke.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik die reël y = 2x + 1 om 3 punte te vind om te stip, en beskryf die grafiekvorm.',
          answer: `Punte: ${or('(0, 1), (1, 3), (2, 5)')} — ${re('reguit-lyn-grafiek')}`,
          steps: [
            `Bou ʼn tabel. Kies ${bl('x = 0')}: y = 2(${bl('0')}) + 1 = ${gr('1')}. Punt: ${or('(0, 1)')}.`,
            `Kies ${bl('x = 1')}: y = 2(${bl('1')}) + 1 = ${gr('3')}. Punt: ${or('(1, 3)')}.`,
            `Kies ${bl('x = 2')}: y = 2(${bl('2')}) + 1 = ${gr('5')}. Punt: ${or('(2, 5)')}.`,
            `Die eerste verskille in y is konstant (${or('2')} elke keer), dus lê hierdie ${or('punte')} op ʼn ${re('reguit lyn')}. Die koers van verandering is konstant. Verbind die drie punte met ʼn reguit lyn.`,
          ],
        },
        {
          question: 'Lerato sê die reël y = x² lewer ʼn reguit-lyn-grafiek. Is sy korrek?',
          answer: `${re('Lerato is verkeerd')} — y = x² lewer ʼn kromme`,
          steps: [
            `Bou ʼn tabel. ${bl('x = 1')}: y = 1² = ${gr('1')}. ${bl('x = 2')}: y = 2² = ${gr('4')}. ${bl('x = 3')}: y = 3² = ${gr('9')}.`,
            `Vind die eerste verskille in y: 4 − 1 = ${or('3')}, 9 − 4 = ${or('5')}. Die verskille is ${or('3, 5')} — hulle is NIE konstant nie.`,
            `Omdat die koers van verandering nie konstant is nie, lê die ${or('punte')} NIE op ʼn ${re('reguit lyn')} nie.`,
            `${re('Lerato is verkeerd')} — y = x² lewer ʼn ${re('kromme')} (ʼn parabool), nie ʼn reguit lyn nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — find y-values from a rule ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die reël y = x + 3 om die y-waarde vir elke x-waarde te vind.',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'x = 0, y =', correctAnswer: '3', explanation: 'y = 0+3 = 3' },
            { label: 'x = 2, y =', correctAnswer: '5', explanation: 'y = 2+3 = 5' },
            { label: 'x = 4, y =', correctAnswer: '7', explanation: 'y = 4+3 = 7' },
          ],
        },

        // ── Q8 Medium — straight line or curve ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sê vir elke reël of die grafiek ʼn reguit lyn of ʼn kromme is, en verduidelik hoekom.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y = 4x − 1',
              correctAnswer: 'reguit lyn',
              correctAnswers: ['reguit lyn', 'reguit', 'lineêr'],
              explanation: 'Die reël is lineêr — geen magte van x nie. Die eerste verskille is konstant (4), dus lewer dit ʼn reguit lyn.',
            },
            {
              label: 'b) y = x² + 3',
              correctAnswer: 'kromme',
              correctAnswers: ['kromme', 'geboë', 'parabool'],
              explanation: 'Die reël behels x². Die eerste verskille sal nie konstant wees nie, dus is die grafiek ʼn kromme.',
            },
          ],
        },

        // ── Q9 Hard — full graph analysis ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vir die reël y = 2x + 4:\n\na) Voltooi die tabel van waardes vir x = −1, 0, 1, 2, 3.\nb) Beskryf hoe om die punte te stip en te verbind.\nc) Wat is die y-waarde wanneer x = 10?\nd) Wat is die x-waarde wanneer y = 0?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) y-waardes vir x = −1, 0, 1, 2, 3',
              correctAnswer: '2,4,6,8,10',
              correctAnswers: ['2,4,6,8,10', '2, 4, 6, 8, 10'],
              explanation: 'x=−1: 2(−1)+4=2. x=0: 0+4=4. x=1: 2+4=6. x=2: 4+4=8. x=3: 6+4=10.',
            },
            {
              label: 'b) Hoe om die punte te stip en te verbind',
              correctAnswer: 'reguit lyn',
              checkMode: 'self',
              answer: 'Stip die punte (−1, 2), (0, 4), (1, 6), (2, 8), (3, 10) op die Cartesiese vlak en verbind hulle met ʼn reguit lyn deur ʼn liniaal te gebruik.',
            },
            {
              label: 'c) y wanneer x = 10',
              correctAnswer: '24',
              explanation: 'y = 2(10)+4 = 20+4 = 24.',
            },
            {
              label: 'd) x wanneer y = 0',
              correctAnswer: '-2',
              correctAnswers: ['-2', '−2'],
              explanation: 'Stel 2x+4=0 → 2x=−4 → x=−2.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om punte uit ʼn tabel van waardes op ʼn Cartesiese vlak te stip en te beskryf of die grafiek ʼn reguit lyn of ʼn kromme is" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Cartesiese vlak met x-as in blou, y-as in groen, gestipte punte in oranje, en ʼn reguit-lyn-grafiekvorm in rooi vir die reël y is gelyk aan 2x plus 1" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — next term in a linear pattern ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind die volgende term in die patroon: 6, 11, 16, 21, ?',
      answer: '26',
      checkMode: 'auto',
      correctAnswer: '26',
      explanation: 'Die konstante verskil is 5 (11−6=5, 16−11=5, 21−16=5). Volgende term: 21+5 = 26 ✓',
    },

    // ── Q2 Medium — rule and nth term ─────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die reël en die 12de term van die patroon 3, 7, 11, 15.',
      answer: 'Konstante verskil = 4. Met n=1: 4(1)+c=3 → c=−1.\nReël: nde term = 4n − 1\n12de term = 4(12) − 1 = 48 − 1 = 47',
      checkMode: 'self',
    },

    // ── Q3 Hard — check and correct a given rule ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die patroon 4, 7, 12, 19 het die reël nde term = 3n + 1. Kontroleer sy reël vir elke term en verbeter dit indien nodig.',
      answer: 'Kontroleer n=1: 3(1)+1=4 ✓\nKontroleer n=2: 3(2)+1=7 ✓\nKontroleer n=3: 3(3)+1=10, maar die werklike term is 12 ✗\nSipho se reël is verkeerd.\nDie korrekte reël is nde term = n² + 3:\nn=1: 1+3=4 ✓, n=2: 4+3=7 ✓, n=3: 9+3=12 ✓, n=4: 16+3=19 ✓',
      checkMode: 'self',
    },

    // ── Q4 Medium — complete a table using a rule ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Voltooi die tabel met die reël y = 4x − 3 vir x = 1, 2, 3.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'x = 1, y =',
          correctAnswer: '1',
          explanation: 'y = 4(1) − 3 = 4 − 3 = 1',
        },
        {
          label: 'x = 2, y =',
          correctAnswer: '5',
          explanation: 'y = 4(2) − 3 = 8 − 3 = 5',
        },
        {
          label: 'x = 3, y =',
          correctAnswer: '9',
          explanation: 'y = 4(3) − 3 = 12 − 3 = 9',
        },
      ],
    },

    // ── Q5 Hard — find rule from a table ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Vind die reël vir hierdie tabel van waardes.\nx: 1, 2, 3, 4\ny: 4, 9, 14, 19',
      answer: '',
      checkMode: 'auto',
      correctAnswer: 'y=5x-1',
      correctAnswers: ['y=5x-1', 'y=5x−1', '5x-1', '5x−1'],
      explanation: 'Verskille in y: 9−4=5, 14−9=5, 19−14=5 — konstant op 5.\nProbeer y=5x+c: 5(1)+c=4 → c=−1.\nReël: y = 5x − 1 ✓',
    },

    // ── Q6 Easy — substitute x to find y ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die reël y = 2x + 5 om die waarde van y te vind wanneer x = 6.',
      answer: '17',
      checkMode: 'auto',
      correctAnswer: '17',
      explanation: 'y = 2(6) + 5 = 12 + 5 = 17 ✓',
    },

    // ── Q7 Medium — find x given y ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die reël y = 3x − 7 om die waarde van x te vind wanneer y = 14.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: 'Stel 3x − 7 = 14 → 3x = 21 → x = 7 ✓',
    },

    // ── Q8 Hard — straight line y-intercept misconception ────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê alle reguit-lyn-grafieke gaan deur die punt (0, 0). Is sy korrek? Verduidelik jou antwoord met ʼn voorbeeld.',
      answer: 'Nee — slegs grafieke van die vorm y = mx (sonder ʼn konstante term) gaan deur (0, 0).\nʼn Grafiek soos y = 2x + 3 gaan deur (0, 3), nie (0, 0) nie.\nDie y-afsny is gelyk aan die konstante in die reël, en dit is slegs nul wanneer daar geen konstante is nie.',
      checkMode: 'self',
    },

    // ── Q9 Medium — plot points and describe shape ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die reël y = x + 4, stip 3 punte en beskryf die vorm wat hulle vorm.',
      answer: 'Punte: (0, 4), (1, 5), (2, 6)\nHierdie drie punte vorm ʼn reguit lyn omdat die koers van verandering konstant is op 1 (die eerste verskille in y is almal gelyk aan 1).',
      checkMode: 'self',
    },

    // ── Q10 Hard — curved graph misconception ────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die reël y = x² vorm ʼn reguit-lyn-grafiek. Verduidelik hoekom dit verkeerd is.',
      answer: 'Bou ʼn tabel: x=1 → y=1, x=2 → y=4, x=3 → y=9.\nEerste verskille in y: 4−1=3, 9−4=5 — nie konstant nie.\nOmdat die verskille nie konstant is nie (1, 3, 5, 7, ...), lê die punte nie op ʼn reguit lyn nie.\ny = x² lewer ʼn kromme (parabool), nie ʼn reguit lyn nie.',
      checkMode: 'self',
    },

    // ── Q11 Medium — find rule for square number pattern ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind die reël vir die patroon 1, 4, 9, 16.',
      answer: 'nde term = n²',
      checkMode: 'auto',
      correctAnswer: 'n²',
      correctAnswers: ['n²', 'n^2', 'nde term=n²', 'nde term = n²'],
      explanation: 'Kontroleer: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓, 4²=16 ✓. Reël: nde term = n² ✓',
    },

    // ── Q12 Hard — increasing differences pattern ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo let op dat die patroon 7, 13, 21, 31 eerste verskille van 6, 8, 10 het. Vind die volgende term en verduidelik jou redenasie.',
      answer: 'Die verskille neem elke keer met 2 toe: 6, 8, 10, ...\nVolgende verskil: 10 + 2 = 12\nVolgende term: 31 + 12 = 43',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het patrone, funksies en verwantskappe bemeester.' },
      { minScore: 9, message: 'Puik werk!' },
      { minScore: 6, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Volpunt — jy het patrone, funksies en verwantskappe vir Graad 7 volkome bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van hierdie onderwerp. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
