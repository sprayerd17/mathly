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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Getalreekse (volgende/ontbrekende term) | 4-7 Algemene reël/nde
    // term (woorde + algebraïes) | 8-11 Inset-uitset-vloeidiagramme/funksietabelle |
    // 12-14 Geometriese/groeiende patrone [DIAGRAM-GEMERK] | 15-16 Beskryf/brei uit
    // + foutopsporing | 17-19 Multi-stap/werklike-lewe woordprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Getalreekse (volgende/ontbrekende term) ──────────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 4, 9, 14, 19, 24, ?', answer: '29', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29'], explanation: 'Die konstante verskil is 5 (9−4=5, 14−9=5, 19−14=5, 24−19=5). Volgende term: 24 + 5 = 29 ✓' },
        { difficulty: 'Easy', question: 'ʼn Watertenk begin met 500 liter en verloor 50 liter per dag deur ʼn lek: 500, 450, 400, 350. Hoeveel liter sal die volgende dag oor wees?', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300', '300 liter', '300 l'], explanation: 'Die reël is trek elke keer 50 af. 350 − 50 = 300 liter ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 9, ?, 23, 30.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Die bekende verskil is 30 − 23 = 7, dus is die reël tel elke keer 7 by. 9 + 7 = 16. Kontroleer: 23 − 16 = 7 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "verdubbel die term, tel dan 1 by", en begin by 3: 3, 7, 15, 31. Wat is die volgende term?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63'], explanation: 'Pas die reël toe op 31: 31 × 2 = 62, tel dan 1 by: 62 + 1 = 63 ✓' },

        // ── Blok 2: Algemene reël/nde term (woorde + algebraïes) ─────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 5, 9, 13, 17 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'tel elke keer 4 by', checkMode: 'self', answer: 'Begin by 5 en tel elke keer 4 by om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '4n+1', correctAnswers: ['4n+1', '4n + 1'], explanation: 'Konstante verskil = 4. Vervang n=1: 4(1)+c=5 → c=1. Reël: nde term = 4n+1. Kontroleer: 4(2)+1=9 ✓, 4(3)+1=13 ✓, 4(4)+1=17 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-termreël vir die patroon 4, 10, 16, 22.', answer: 'nde term = 6n − 2', checkMode: 'auto', correctAnswer: '6n-2', correctAnswers: ['6n-2', '6n − 2', 'nde term=6n-2', 'nde term = 6n − 2'], explanation: 'Konstante verskil = 6. Vervang n=1: 6(1)+c=4 → c=−2. Reël: nde term = 6n − 2. Kontroleer: 6(2)−2=10 ✓, 6(3)−2=16 ✓, 6(4)−2=22 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 3, 6, 11, 18. Die verskille is nie konstant nie, dus is hierdie patroon kwadraties.\n\na) Vind die nde-termreël.\nb) Vind die 20ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+2', correctAnswers: ['n²+2', 'n^2+2', 'nde term=n²+2'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+2: 1+2=3 ✓, 4+2=6 ✓, 9+2=11 ✓, 16+2=18 ✓' },
          { label: 'b) 20ste term', correctAnswer: '402', explanation: '20² + 2 = 400 + 2 = 402.' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula sê die patroon 6, 10, 14, 18 het die reël nde term = 4n. Kontroleer haar reël vir elke term. Is sy korrek, en indien nie, wat is die korrekte reël?', answer: 'Nomvula is verkeerd. Kontroleer n=1: 4(1)=4, maar die werklike eerste term is 6 ✗ — haar reël werk nie eens vir die eerste term nie, dus is dit van die begin af verkeerd. Sy het waarskynlik net die konstante verskil gebruik en die beginaanpassing vergeet. Die konstante verskil is inderdaad 4 (10−6=4, 14−10=4, 18−14=4), dus begin die reël met 4n. Vervang n=1: 4(1)+c=6 → c=2. Die korrekte reël is nde term = 4n + 2. Kontroleer: 4(1)+2=6 ✓, 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓', checkMode: 'self' },

        // ── Blok 3: Inset-uitset-vloeidiagramme/funksietabelle ────────────────
        { difficulty: 'Easy', question: 'Voltooi die tabel met die reël y = 3x + 2 vir x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '5', explanation: 'y = 3(1)+2 = 3+2 = 5' },
          { label: 'x = 2, y =', correctAnswer: '8', explanation: 'y = 3(2)+2 = 6+2 = 8' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 3(3)+2 = 9+2 = 11' },
          { label: 'x = 4, y =', correctAnswer: '14', explanation: 'y = 3(4)+2 = 12+2 = 14' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien pas "vermenigvuldig met 3, trek dan 2 af" op elke inset toe. Voltooi die uitsette vir insette 2, 5 en 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 2, uitset =', correctAnswer: '4', explanation: '2 × 3 = 6, trek dan 2 af: 6 − 2 = 4' },
          { label: 'b) Inset 5, uitset =', correctAnswer: '13', explanation: '5 × 3 = 15, trek dan 2 af: 15 − 2 = 13' },
          { label: 'c) Inset 8, uitset =', correctAnswer: '22', explanation: '8 × 3 = 24, trek dan 2 af: 24 − 2 = 22' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  2,  4,  6,  8\nUitset: 9, 17, 25, 33', answer: 'uitset = 4 × inset + 1', checkMode: 'auto', correctAnswer: 'uitset = 4 × inset + 1', correctAnswers: ['uitset = 4 × inset + 1', 'uitset = 4 x inset + 1', '4 × inset + 1', '4 x inset + 1', '4n + 1'], explanation: 'Verskille in uitset: 17−9=8, 25−17=8, 33−25=8, oor ʼn gaping van 2 insette, dus 8 ÷ 2 = 4. Probeer uitset = 4 × inset + c: 4×2=8, 9−8=1. Reël: uitset = 4 × inset + 1. Kontroleer: 4(4)+1=17 ✓, 4(6)+1=25 ✓, 4(8)+1=33 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksiemasjien gebruik die reël uitset = 6 × inset − 4. Watter inset gee ʼn uitset van 50?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Stel op: 6 × inset − 4 = 50. Tel 4 by albei kante: 6 × inset = 54. Deel deur 6: inset = 9. Kontroleer: 6(9)−4 = 54−4 = 50 ✓' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ────────────
        { difficulty: 'Medium', question: 'ʼn Patroon van driehoeke word met vuurhoutjies gebou, soos getoon. Patroon 1 is ʼn enkele driehoek van 3 vuurhoutjies. Patroon 2 het twee driehoeke langs mekaar in ʼn ry, wat een vuurhoutjie tussen hulle deel, en gebruik 5 vuurhoutjies in totaal. Patroon 3 het drie driehoeke in ʼn ry, wat 7 vuurhoutjies in totaal gebruik. Hoeveel vuurhoutjies word vir Patroon 6 benodig?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 vuurhoutjies'], explanation: 'Die patroon neem elke keer met 2 vuurhoutjies toe: 3, 5, 7 (verskille van 2). Reël: vuurhoutjies = 2n + 1. Kontroleer: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Patroon 6: 2(6)+1 = 12+1 = 13 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 vuurhoutjies</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 vuurhoutjies</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 vuurhoutjies</text></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Groeiende puntpatroon, soos getoon, volg hierdie struktuur: Patroon 1 het 2 punte. Patroon 2 het 5 punte. Patroon 3 het 8 punte, waar elke nuwe patroon 3 meer punte as die vorige byvoeg in ʼn konstante trapvormige rangskikking. Vind die reël vir die aantal punte by patroon n, en gebruik dit dan om die aantal punte in Patroon 12 te vind.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël (punte = a × n + b)', correctAnswer: 'punte = 3n − 1', correctAnswers: ['punte = 3n − 1', 'punte = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Konstante verskil van 3 elke keer (2,5,8). Vervang n=1: 3(1)+c=2 → c=−1. Reël: punte = 3n − 1. Kontroleer: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Punte in Patroon 12', correctAnswer: '35', explanation: '3(12) − 1 = 36 − 1 = 35 punte.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 punte</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 punte</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 punte</text></g></svg>' },
        { difficulty: 'Hard', question: 'ʼn Patroon van los vierkante word met vuurhoutjies gebou, soos getoon — elke vierkant staan afsonderlik en deel geen kante met die ander nie. Patroon 1 het 1 vierkant gemaak van 4 vuurhoutjies. Patroon 2 het 2 los vierkante gemaak van 8 vuurhoutjies. Patroon 3 het 3 los vierkante gemaak van 12 vuurhoutjies. Zinhle sê Patroon 15 sal 56 vuurhoutjies benodig. Kontroleer haar antwoord met die reël, en verbeter dit indien sy verkeerd is.', answer: 'Zinhle is verkeerd. Aangesien elke vierkant afsonderlik is (geen gedeelde kante nie), is die aantal vuurhoutjies altyd 4 keer die patroonnommer: vuurhoutjies = 4n. Kontroleer: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. Vir Patroon 15: 4 × 15 = 60 vuurhoutjies, nie 56 nie. Zinhle het waarskynlik die verkeerde reël gebruik (moontlik een vir gedeelde/verbinde vierkante in plaas van los vierkante). Die korrekte antwoord is 60 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 vuurhoutjies</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 vuurhoutjies</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 vuurhoutjies</text></g></svg>' },

        // ── Blok 5: Beskryf/brei patrone uit + foutopsporing ──────────────────
        { difficulty: 'Medium', question: 'Brei die patroon 5, 11, 17, 23 uit deur die volgende twee terme neer te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '29,35', correctAnswers: ['29,35', '29, 35'], explanation: 'Konstante verskil = 6. 23+6=29, 29+6=35.' },
          { label: 'b) Reël in woorde', correctAnswer: 'tel elke keer 6 by', checkMode: 'self', answer: 'Begin by 5 en tel elke keer 6 by om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'Bongani sê die patroon 5, 11, 17, 23 het die reël nde term = 5n + 1, omdat dit vir die eerste term werk. Toets sy reël teen elke term in die patroon. Is hy korrek?', answer: 'Bongani is verkeerd. Kontroleer n=1: 5(1)+1=6, nie 5 nie ✗ — sy reël werk nie eens vir die eerste term nie, dus is dit van die begin af verkeerd. Die konstante verskil is inderdaad 6 (11−5=6, 17−11=6, 23−17=6), dus behoort die reël met 6n te begin. Vervang n=1: 6(1)+c=5 → c=−1. Die korrekte reël is nde term = 6n − 1. Kontroleer: 6(1)−1=5 ✓, 6(2)−1=11 ✓, 6(3)−1=17 ✓, 6(4)−1=23 ✓. Dit wys waarom ʼn reël teen elke term getoets moet word, en nie net aanvaar moet word na ʼn vlugtige kyk nie.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe woordprobleme ────────────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Gimnasium vra ʼn eenmalige aansluitingsfooi van R80 plus R35 per maand, volgens die reël: koste = 35 × maande + 80. Voltooi die tabel vir 2, 5 en 8 maande.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 2 maande', correctAnswer: '150', explanation: '35 × 2 + 80 = 70 + 80 = 150' },
          { label: 'b) Koste vir 5 maande', correctAnswer: '255', explanation: '35 × 5 + 80 = 175 + 80 = 255' },
          { label: 'c) Koste vir 8 maande', correctAnswer: '360', explanation: '35 × 8 + 80 = 280 + 80 = 360' },
        ] },
        { difficulty: 'Hard', question: 'Met die gimnasiumreël koste = 35 × maande + 80, na hoeveel volle maande sal die totale koste eers minstens R430 bereik?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10'], explanation: 'Stel op: 35 × maande + 80 ≥ 430, dus 35 × maande ≥ 350, wat maande ≥ 10 gee. Kontroleer: 9 maande gee 35(9)+80 = 395 (te min). 10 maande gee 35(10)+80 = 430 ✓. 10 maande is die eerste om minstens R430 te bereik.' },
        { difficulty: 'Hard', question: 'ʼn Teater rangskik sitplekke in rye volgens die reël: sitplekke = 4 × rynommer + 10. Ry 1 het 14 sitplekke, ry 2 het 18 sitplekke, en so meer.\n\na) Hoeveel sitplekke is in ry 15?\nb) As ʼn ry 78 sitplekke het, watter rynommer is dit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sitplekke in ry 15', correctAnswer: '70', explanation: '4 × 15 + 10 = 60 + 10 = 70 sitplekke.' },
          { label: 'b) Rynommer vir 78 sitplekke', correctAnswer: '17', explanation: 'Stel op: 4 × ry + 10 = 78. Trek 10 af: 4 × ry = 68. Deel deur 4: ry = 17. Kontroleer: 4(17)+10=78 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalreekse, nde-termreëls, inset-uitsettabelle en geometriese patrone bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokuitleg as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Getalreekse (volgende/ontbrekende term) ──────────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 6, 13, 20, 27, 34, ?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41'], explanation: 'Die konstante verskil is 7 (13−6=7, 20−13=7, 27−20=7, 34−27=7). Volgende term: 34 + 7 = 41 ✓' },
        { difficulty: 'Easy', question: 'ʼn Kampeerplek se gasbottel begin met 720 g gas en gebruik 60 g elke uur: 720, 660, 600, 540. Hoeveel gram sal die volgende uur oor wees?', answer: '480', checkMode: 'auto', correctAnswer: '480', correctAnswers: ['480', '480 g', '480g'], explanation: 'Die reël is trek elke keer 60 af. 540 − 60 = 480 g ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 11, ?, 27, 35.', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19'], explanation: 'Die bekende verskil is 35 − 27 = 8, dus is die reël tel elke keer 8 by. 11 + 8 = 19. Kontroleer: 27 − 19 = 8 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "verdubbel die term, tel dan 3 by", en begin by 2: 2, 7, 17, 37. Wat is die volgende term?', answer: '77', checkMode: 'auto', correctAnswer: '77', correctAnswers: ['77'], explanation: 'Pas die reël toe op 37: 37 × 2 = 74, tel dan 3 by: 74 + 3 = 77 ✓' },

        // ── Blok 2: Algemene reël/nde term (woorde + algebraïes) ─────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 7, 12, 17, 22 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'tel elke keer 5 by', checkMode: 'self', answer: 'Begin by 7 en tel elke keer 5 by om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '5n+2', correctAnswers: ['5n+2', '5n + 2'], explanation: 'Konstante verskil = 5. Vervang n=1: 5(1)+c=7 → c=2. Reël: nde term = 5n+2. Kontroleer: 5(2)+2=12 ✓, 5(3)+2=17 ✓, 5(4)+2=22 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-termreël vir die patroon 5, 13, 21, 29.', answer: 'nde term = 8n − 3', checkMode: 'auto', correctAnswer: '8n-3', correctAnswers: ['8n-3', '8n − 3', 'nde term=8n-3', 'nde term = 8n − 3'], explanation: 'Konstante verskil = 8. Vervang n=1: 8(1)+c=5 → c=−3. Reël: nde term = 8n − 3. Kontroleer: 8(2)−3=13 ✓, 8(3)−3=21 ✓, 8(4)−3=29 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 4, 7, 12, 19. Die verskille is nie konstant nie, dus is hierdie patroon kwadraties.\n\na) Vind die nde-termreël.\nb) Vind die 22ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+3', correctAnswers: ['n²+3', 'n^2+3', 'nde term=n²+3'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+3: 1+3=4 ✓, 4+3=7 ✓, 9+3=12 ✓, 16+3=19 ✓' },
          { label: 'b) 22ste term', correctAnswer: '487', explanation: '22² + 3 = 484 + 3 = 487.' },
        ] },
        { difficulty: 'Hard', question: 'Thabo sê die patroon 8, 17, 26, 35 het die reël nde term = 8n. Kontroleer sy reël vir elke term. Is hy korrek, en indien nie, wat is die korrekte reël?', answer: 'Thabo is verkeerd. Kontroleer n=1: 8(1)=8 ✓ (hierdie een pas toevallig), maar kontroleer n=2: 8(2)=16, nie 17 nie ✗ — sy reël faal vanaf die tweede term. Die konstante verskil is inderdaad 9 (17−8=9, 26−17=9, 35−26=9), dus behoort die reël met 9n te begin. Vervang n=1: 9(1)+c=8 → c=−1. Die korrekte reël is nde term = 9n − 1. Kontroleer: 9(1)−1=8 ✓, 9(2)−1=17 ✓, 9(3)−1=26 ✓, 9(4)−1=35 ✓. Dit wys waarom ʼn reël wat by die eerste term pas nie outomaties korrek is nie.', checkMode: 'self' },

        // ── Blok 3: Inset-uitset-vloeidiagramme/funksietabelle ────────────────
        { difficulty: 'Easy', question: 'Voltooi die tabel met die reël y = 4x − 1 vir x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '3', explanation: 'y = 4(1)−1 = 4−1 = 3' },
          { label: 'x = 2, y =', correctAnswer: '7', explanation: 'y = 4(2)−1 = 8−1 = 7' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 4(3)−1 = 12−1 = 11' },
          { label: 'x = 4, y =', correctAnswer: '15', explanation: 'y = 4(4)−1 = 16−1 = 15' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien pas "vermenigvuldig met 4, trek dan 3 af" op elke inset toe. Voltooi die uitsette vir insette 2, 5 en 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 2, uitset =', correctAnswer: '5', explanation: '2 × 4 = 8, trek dan 3 af: 8 − 3 = 5' },
          { label: 'b) Inset 5, uitset =', correctAnswer: '17', explanation: '5 × 4 = 20, trek dan 3 af: 20 − 3 = 17' },
          { label: 'c) Inset 8, uitset =', correctAnswer: '29', explanation: '8 × 4 = 32, trek dan 3 af: 32 − 3 = 29' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  2,  4,  6,  8\nUitset: 13, 23, 33, 43', answer: 'uitset = 5 × inset + 3', checkMode: 'auto', correctAnswer: 'uitset = 5 × inset + 3', correctAnswers: ['uitset = 5 × inset + 3', 'uitset = 5 x inset + 3', '5 × inset + 3', '5 x inset + 3', '5n + 3'], explanation: 'Verskille in uitset: 23−13=10, 33−23=10, 43−33=10, oor ʼn gaping van 2 insette, dus 10 ÷ 2 = 5. Probeer uitset = 5 × inset + c: 5×2=10, 13−10=3. Reël: uitset = 5 × inset + 3. Kontroleer: 5(4)+3=23 ✓, 5(6)+3=33 ✓, 5(8)+3=43 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksiemasjien gebruik die reël uitset = 7 × inset − 3. Watter inset gee ʼn uitset van 53?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Stel op: 7 × inset − 3 = 53. Tel 3 by albei kante: 7 × inset = 56. Deel deur 7: inset = 8. Kontroleer: 7(8)−3 = 56−3 = 53 ✓' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ────────────
        { difficulty: 'Medium', question: 'ʼn Patroon van driehoeke word met vuurhoutjies gebou, soos getoon. Patroon 1 is ʼn enkele driehoek van 3 vuurhoutjies. Patroon 2 het twee driehoeke langs mekaar in ʼn ry, wat een vuurhoutjie tussen hulle deel, en gebruik 5 vuurhoutjies in totaal. Patroon 3 het drie driehoeke in ʼn ry, wat 7 vuurhoutjies in totaal gebruik. Hoeveel vuurhoutjies word vir Patroon 9 benodig?', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19 vuurhoutjies'], explanation: 'Die patroon neem elke keer met 2 vuurhoutjies toe: 3, 5, 7 (verskille van 2). Reël: vuurhoutjies = 2n + 1. Kontroleer: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Patroon 9: 2(9)+1 = 18+1 = 19 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 vuurhoutjies</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 vuurhoutjies</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 vuurhoutjies</text></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Groeiende puntpatroon, soos getoon, volg hierdie struktuur: Patroon 1 het 2 punte. Patroon 2 het 5 punte. Patroon 3 het 8 punte, waar elke nuwe patroon 3 meer punte as die vorige byvoeg in ʼn konstante trapvormige rangskikking. Vind die reël vir die aantal punte by patroon n, en gebruik dit dan om die aantal punte in Patroon 10 te vind.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël (punte = a × n + b)', correctAnswer: 'punte = 3n − 1', correctAnswers: ['punte = 3n − 1', 'punte = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Konstante verskil van 3 elke keer (2,5,8). Vervang n=1: 3(1)+c=2 → c=−1. Reël: punte = 3n − 1. Kontroleer: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Punte in Patroon 10', correctAnswer: '29', explanation: '3(10) − 1 = 30 − 1 = 29 punte.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 punte</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 punte</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 punte</text></g></svg>' },
        { difficulty: 'Hard', question: 'ʼn Patroon van los vierkante word met vuurhoutjies gebou, soos getoon — elke vierkant staan afsonderlik en deel geen kante met die ander nie. Patroon 1 het 1 vierkant gemaak van 4 vuurhoutjies. Patroon 2 het 2 los vierkante gemaak van 8 vuurhoutjies. Patroon 3 het 3 los vierkante gemaak van 12 vuurhoutjies. Kagiso sê Patroon 11 sal 40 vuurhoutjies benodig. Kontroleer sy antwoord met die reël, en verbeter dit indien hy verkeerd is.', answer: 'Kagiso is verkeerd. Aangesien elke vierkant afsonderlik is (geen gedeelde kante nie), is die aantal vuurhoutjies altyd 4 keer die patroonnommer: vuurhoutjies = 4n. Kontroleer: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. Vir Patroon 11: 4 × 11 = 44 vuurhoutjies, nie 40 nie. Kagiso het waarskynlik verkeerd getel of die reël verkeerd toegepas. Die korrekte antwoord is 44 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 vuurhoutjies</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 vuurhoutjies</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 vuurhoutjies</text></g></svg>' },

        // ── Blok 5: Beskryf/brei patrone uit + foutopsporing ──────────────────
        { difficulty: 'Medium', question: 'Brei die patroon 8, 17, 26, 35 uit deur die volgende twee terme neer te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '44,53', correctAnswers: ['44,53', '44, 53'], explanation: 'Konstante verskil = 9. 35+9=44, 44+9=53.' },
          { label: 'b) Reël in woorde', correctAnswer: 'tel elke keer 9 by', checkMode: 'self', answer: 'Begin by 8 en tel elke keer 9 by om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'Precious sê die patroon 8, 17, 26, 35 het die reël nde term = 8n + 1, omdat dit vir die eerste term werk. Toets haar reël teen elke term in die patroon. Is sy korrek?', answer: 'Precious is verkeerd. Kontroleer n=1: 8(1)+1=9, nie 8 nie ✗ — haar reël werk nie eens vir die eerste term nie, dus is dit van die begin af verkeerd. Die konstante verskil is inderdaad 9 (17−8=9, 26−17=9, 35−26=9), dus behoort die reël met 9n te begin. Vervang n=1: 9(1)+c=8 → c=−1. Die korrekte reël is nde term = 9n − 1. Kontroleer: 9(1)−1=8 ✓, 9(2)−1=17 ✓, 9(3)−1=26 ✓, 9(4)−1=35 ✓. Dit wys waarom ʼn reël teen elke term getoets moet word, en nie net aanvaar moet word na ʼn vlugtige kyk nie.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe woordprobleme ────────────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Selfoonherstelwinkel vra ʼn uitroepfooi van R60 plus R45 per uur arbeid, volgens die reël: koste = 45 × ure + 60. Voltooi die tabel vir 2, 5 en 7 ure.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 2 ure', correctAnswer: '150', explanation: '45 × 2 + 60 = 90 + 60 = 150' },
          { label: 'b) Koste vir 5 ure', correctAnswer: '285', explanation: '45 × 5 + 60 = 225 + 60 = 285' },
          { label: 'c) Koste vir 7 ure', correctAnswer: '375', explanation: '45 × 7 + 60 = 315 + 60 = 375' },
        ] },
        { difficulty: 'Hard', question: 'Met die herstelwinkel se reël koste = 45 × ure + 60, na hoeveel volle ure sal die totale koste eers minstens R555 bereik?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11'], explanation: 'Stel op: 45 × ure + 60 ≥ 555, dus 45 × ure ≥ 495, wat ure ≥ 11 gee. Kontroleer: 10 ure gee 45(10)+60 = 510 (te min). 11 ure gee 45(11)+60 = 555 ✓. 11 ure is die eerste om minstens R555 te bereik.' },
        { difficulty: 'Hard', question: 'ʼn Stadion rangskik sitplekke in rye volgens die reël: sitplekke = 3 × rynommer + 12. Ry 1 het 15 sitplekke, ry 2 het 18 sitplekke, en so meer.\n\na) Hoeveel sitplekke is in ry 18?\nb) As ʼn ry 66 sitplekke het, watter rynommer is dit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sitplekke in ry 18', correctAnswer: '66', explanation: '3 × 18 + 12 = 54 + 12 = 66 sitplekke.' },
          { label: 'b) Rynommer vir 66 sitplekke', correctAnswer: '18', explanation: 'Stel op: 3 × ry + 12 = 66. Trek 12 af: 3 × ry = 54. Deel deur 3: ry = 18. Kontroleer: 3(18)+12=66 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalreekse, nde-termreëls, inset-uitsettabelle en geometriese patrone bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokuitleg as Stel 1 en 2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Getalreekse (volgende/ontbrekende term) ──────────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 8, 15, 22, 29, 36, ?', answer: '43', checkMode: 'auto', correctAnswer: '43', correctAnswers: ['43'], explanation: 'Die konstante verskil is 7 (15−8=7, 22−15=7, 29−22=7, 36−29=7). Volgende term: 36 + 7 = 43 ✓' },
        { difficulty: 'Easy', question: 'ʼn Dam begin met 810 kiloliter water en verloor 80 kiloliter per dag deur verdamping: 810, 730, 650, 570. Hoeveel kiloliter sal die volgende dag oor wees?', answer: '490', checkMode: 'auto', correctAnswer: '490', correctAnswers: ['490', '490 kiloliter', '490 kl'], explanation: 'Die reël is trek elke keer 80 af. 570 − 80 = 490 kiloliter ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 6, ?, 24, 33.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Die bekende verskil is 33 − 24 = 9, dus is die reël tel elke keer 9 by. 6 + 9 = 15. Kontroleer: 24 − 15 = 9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig die term met 3, tel dan 2 by", en begin by 1: 1, 5, 17, 53. Wat is die volgende term?', answer: '161', checkMode: 'auto', correctAnswer: '161', correctAnswers: ['161'], explanation: 'Pas die reël toe op 53: 53 × 3 = 159, tel dan 2 by: 159 + 2 = 161 ✓' },

        // ── Blok 2: Algemene reël/nde term (woorde + algebraïes) ─────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 6, 10, 14, 18 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'tel elke keer 4 by', checkMode: 'self', answer: 'Begin by 6 en tel elke keer 4 by om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '4n+2', correctAnswers: ['4n+2', '4n + 2'], explanation: 'Konstante verskil = 4. Vervang n=1: 4(1)+c=6 → c=2. Reël: nde term = 4n+2. Kontroleer: 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-termreël vir die patroon 9, 20, 31, 42.', answer: 'nde term = 11n − 2', checkMode: 'auto', correctAnswer: '11n-2', correctAnswers: ['11n-2', '11n − 2', 'nde term=11n-2', 'nde term = 11n − 2'], explanation: 'Konstante verskil = 11. Vervang n=1: 11(1)+c=9 → c=−2. Reël: nde term = 11n − 2. Kontroleer: 11(2)−2=20 ✓, 11(3)−2=31 ✓, 11(4)−2=42 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 2, 5, 10, 17. Die verskille is nie konstant nie, dus is hierdie patroon kwadraties.\n\na) Vind die nde-termreël.\nb) Vind die 24ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+1', correctAnswers: ['n²+1', 'n^2+1', 'nde term=n²+1'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+1: 1+1=2 ✓, 4+1=5 ✓, 9+1=10 ✓, 16+1=17 ✓' },
          { label: 'b) 24ste term', correctAnswer: '577', explanation: '24² + 1 = 576 + 1 = 577.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle sê die patroon 4, 13, 22, 31 het die reël nde term = 4n. Kontroleer haar reël vir elke term. Is sy korrek, en indien nie, wat is die korrekte reël?', answer: 'Amahle is verkeerd. Kontroleer n=1: 4(1)=4 ✓ (hierdie een pas toevallig), maar kontroleer n=2: 4(2)=8, nie 13 nie ✗ — haar reël faal vanaf die tweede term. Die konstante verskil is inderdaad 9 (13−4=9, 22−13=9, 31−22=9), dus behoort die reël met 9n te begin. Vervang n=1: 9(1)+c=4 → c=−5. Die korrekte reël is nde term = 9n − 5. Kontroleer: 9(1)−5=4 ✓, 9(2)−5=13 ✓, 9(3)−5=22 ✓, 9(4)−5=31 ✓. Dit wys waarom ʼn reël wat by die eerste term pas nie outomaties korrek is nie.', checkMode: 'self' },

        // ── Blok 3: Inset-uitset-vloeidiagramme/funksietabelle ────────────────
        { difficulty: 'Easy', question: 'Voltooi die tabel met die reël y = 2x + 5 vir x = 1, 2, 3, 4.', answer: '', checkMode: 'auto', parts: [
          { label: 'x = 1, y =', correctAnswer: '7', explanation: 'y = 2(1)+5 = 2+5 = 7' },
          { label: 'x = 2, y =', correctAnswer: '9', explanation: 'y = 2(2)+5 = 4+5 = 9' },
          { label: 'x = 3, y =', correctAnswer: '11', explanation: 'y = 2(3)+5 = 6+5 = 11' },
          { label: 'x = 4, y =', correctAnswer: '13', explanation: 'y = 2(4)+5 = 8+5 = 13' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien pas "vermenigvuldig met 5, trek dan 4 af" op elke inset toe. Voltooi die uitsette vir insette 2, 5 en 8.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 2, uitset =', correctAnswer: '6', explanation: '2 × 5 = 10, trek dan 4 af: 10 − 4 = 6' },
          { label: 'b) Inset 5, uitset =', correctAnswer: '21', explanation: '5 × 5 = 25, trek dan 4 af: 25 − 4 = 21' },
          { label: 'c) Inset 8, uitset =', correctAnswer: '36', explanation: '8 × 5 = 40, trek dan 4 af: 40 − 4 = 36' },
        ] },
        { difficulty: 'Medium-Hard', question: 'Vind die reël vir hierdie inset-uitsettabel.\n\nInset:  2,  4,  6,  8\nUitset: 7, 13, 19, 25', answer: 'uitset = 3 × inset + 1', checkMode: 'auto', correctAnswer: 'uitset = 3 × inset + 1', correctAnswers: ['uitset = 3 × inset + 1', 'uitset = 3 x inset + 1', '3 × inset + 1', '3 x inset + 1', '3n + 1'], explanation: 'Verskille in uitset: 13−7=6, 19−13=6, 25−19=6, oor ʼn gaping van 2 insette, dus 6 ÷ 2 = 3. Probeer uitset = 3 × inset + c: 3×2=6, 7−6=1. Reël: uitset = 3 × inset + 1. Kontroleer: 3(4)+1=13 ✓, 3(6)+1=19 ✓, 3(8)+1=25 ✓' },
        { difficulty: 'Hard', question: 'ʼn Funksiemasjien gebruik die reël uitset = 8 × inset − 5. Watter inset gee ʼn uitset van 59?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Stel op: 8 × inset − 5 = 59. Tel 5 by albei kante: 8 × inset = 64. Deel deur 8: inset = 8. Kontroleer: 8(8)−5 = 64−5 = 59 ✓' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ────────────
        { difficulty: 'Medium', question: 'ʼn Patroon van driehoeke word met vuurhoutjies gebou, soos getoon. Patroon 1 is ʼn enkele driehoek van 3 vuurhoutjies. Patroon 2 het twee driehoeke langs mekaar in ʼn ry, wat een vuurhoutjie tussen hulle deel, en gebruik 5 vuurhoutjies in totaal. Patroon 3 het drie driehoeke in ʼn ry, wat 7 vuurhoutjies in totaal gebruik. Hoeveel vuurhoutjies word vir Patroon 20 benodig?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 vuurhoutjies'], explanation: 'Die patroon neem elke keer met 2 vuurhoutjies toe: 3, 5, 7 (verskille van 2). Reël: vuurhoutjies = 2n + 1. Kontroleer: 2(1)+1=3 ✓, 2(2)+1=5 ✓, 2(3)+1=7 ✓. Patroon 20: 2(20)+1 = 40+1 = 41 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="13" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="13" y="82" font-size="11" fill="#374151" text-anchor="middle">3 vuurhoutjies</text></g><g transform="translate(78,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><text x="17" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="17" y="82" font-size="11" fill="#374151" text-anchor="middle">5 vuurhoutjies</text></g><g transform="translate(141,30)"><line x1="4" y1="48" x2="13" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="31" y1="15" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="4" y1="48" x2="22" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><line x1="13" y1="15" x2="31" y2="15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="22" y1="48" x2="40" y2="48" stroke="#0f1f3d" stroke-width="2.5"/><text x="22" y="68" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="22" y="82" font-size="11" fill="#374151" text-anchor="middle">7 vuurhoutjies</text></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Groeiende puntpatroon, soos getoon, volg hierdie struktuur: Patroon 1 het 2 punte. Patroon 2 het 5 punte. Patroon 3 het 8 punte, waar elke nuwe patroon 3 meer punte as die vorige byvoeg in ʼn konstante trapvormige rangskikking. Vind die reël vir die aantal punte by patroon n, en gebruik dit dan om die aantal punte in Patroon 14 te vind.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël (punte = a × n + b)', correctAnswer: 'punte = 3n − 1', correctAnswers: ['punte = 3n − 1', 'punte = 3n - 1', '3n-1', '3n − 1', '3 × n − 1'], explanation: 'Konstante verskil van 3 elke keer (2,5,8). Vervang n=1: 3(1)+c=2 → c=−1. Reël: punte = 3n − 1. Kontroleer: 3(2)−1=5 ✓, 3(3)−1=8 ✓' },
          { label: 'b) Punte in Patroon 14', correctAnswer: '41', explanation: '3(14) − 1 = 42 − 1 = 41 punte.' },
        ], diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><text x="10" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="10" y="109" font-size="11" fill="#374151" text-anchor="middle">2 punte</text></g><g transform="translate(78,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">5 punte</text></g><g transform="translate(141,15)"><circle cx="10" cy="70" r="5" fill="#2563eb"/><circle cx="10" cy="55" r="5" fill="#2563eb"/><circle cx="10" cy="40" r="5" fill="#2563eb"/><circle cx="25" cy="40" r="5" fill="#2563eb"/><circle cx="40" cy="40" r="5" fill="#2563eb"/><circle cx="10" cy="25" r="5" fill="#2563eb"/><circle cx="25" cy="25" r="5" fill="#2563eb"/><circle cx="40" cy="25" r="5" fill="#2563eb"/><text x="25" y="95" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="25" y="109" font-size="11" fill="#374151" text-anchor="middle">8 punte</text></g></svg>' },
        { difficulty: 'Hard', question: 'ʼn Patroon van los vierkante word met vuurhoutjies gebou, soos getoon — elke vierkant staan afsonderlik en deel geen kante met die ander nie. Patroon 1 het 1 vierkant gemaak van 4 vuurhoutjies. Patroon 2 het 2 los vierkante gemaak van 8 vuurhoutjies. Patroon 3 het 3 los vierkante gemaak van 12 vuurhoutjies. Themba sê Patroon 9 sal 32 vuurhoutjies benodig. Kontroleer sy antwoord met die reël, en verbeter dit indien hy verkeerd is.', answer: 'Themba is verkeerd. Aangesien elke vierkant afsonderlik is (geen gedeelde kante nie), is die aantal vuurhoutjies altyd 4 keer die patroonnommer: vuurhoutjies = 4n. Kontroleer: 4(1)=4 ✓, 4(2)=8 ✓, 4(3)=12 ✓. Vir Patroon 9: 4 × 9 = 36 vuurhoutjies, nie 32 nie. Themba het waarskynlik verkeerd getel. Die korrekte antwoord is 36 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(15,20)"><rect x="8" y="40" width="24" height="24" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="20" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 1</text><text x="20" y="104" font-size="11" fill="#374151" text-anchor="middle">4 vuurhoutjies</text></g><g transform="translate(70,20)"><rect x="4" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="34" y="40" width="20" height="20" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="29" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 2</text><text x="29" y="104" font-size="11" fill="#374151" text-anchor="middle">8 vuurhoutjies</text></g><g transform="translate(133,20)"><rect x="0" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="26" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="52" y="40" width="18" height="18" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="35" y="90" font-size="11" fill="#374151" text-anchor="middle">Patroon 3</text><text x="35" y="104" font-size="11" fill="#374151" text-anchor="middle">12 vuurhoutjies</text></g></svg>' },

        // ── Blok 5: Beskryf/brei patrone uit + foutopsporing ──────────────────
        { difficulty: 'Medium', question: 'Brei die patroon 4, 13, 22, 31 uit deur die volgende twee terme neer te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '40,49', correctAnswers: ['40,49', '40, 49'], explanation: 'Konstante verskil = 9. 31+9=40, 40+9=49.' },
          { label: 'b) Reël in woorde', correctAnswer: 'tel elke keer 9 by', checkMode: 'self', answer: 'Begin by 4 en tel elke keer 9 by om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'Sizwe sê die patroon 4, 13, 22, 31 het die reël nde term = 4n + 1, omdat dit vir die eerste term werk. Toets sy reël teen elke term in die patroon. Is hy korrek?', answer: 'Sizwe is verkeerd. Kontroleer n=1: 4(1)+1=5, nie 4 nie ✗ — sy reël werk nie eens vir die eerste term nie, dus is dit van die begin af verkeerd. Die konstante verskil is inderdaad 9 (13−4=9, 22−13=9, 31−22=9), dus behoort die reël met 9n te begin. Vervang n=1: 9(1)+c=4 → c=−5. Die korrekte reël is nde term = 9n − 5. Kontroleer: 9(1)−5=4 ✓, 9(2)−5=13 ✓, 9(3)−5=22 ✓, 9(4)−5=31 ✓. Dit wys waarom ʼn reël teen elke term getoets moet word, en nie net aanvaar moet word na ʼn vlugtige kyk nie.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe woordprobleme ────────────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Bestuurskool vra ʼn registrasiefooi van R100 plus R30 per les, volgens die reël: koste = 30 × lesse + 100. Voltooi die tabel vir 3, 6 en 9 lesse.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 3 lesse', correctAnswer: '190', explanation: '30 × 3 + 100 = 90 + 100 = 190' },
          { label: 'b) Koste vir 6 lesse', correctAnswer: '280', explanation: '30 × 6 + 100 = 180 + 100 = 280' },
          { label: 'c) Koste vir 9 lesse', correctAnswer: '370', explanation: '30 × 9 + 100 = 270 + 100 = 370' },
        ] },
        { difficulty: 'Hard', question: 'Met die bestuurskool se reël koste = 30 × lesse + 100, na hoeveel volle lesse sal die totale koste eers minstens R460 bereik?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Stel op: 30 × lesse + 100 ≥ 460, dus 30 × lesse ≥ 360, wat lesse ≥ 12 gee. Kontroleer: 11 lesse gee 30(11)+100 = 430 (te min). 12 lesse gee 30(12)+100 = 460 ✓. 12 lesse is die eerste om minstens R460 te bereik.' },
        { difficulty: 'Hard', question: 'ʼn Bioskoop rangskik sitplekke in rye volgens die reël: sitplekke = 5 × rynommer + 8. Ry 1 het 13 sitplekke, ry 2 het 18 sitplekke, en so meer.\n\na) Hoeveel sitplekke is in ry 20?\nb) As ʼn ry 88 sitplekke het, watter rynommer is dit?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Sitplekke in ry 20', correctAnswer: '108', explanation: '5 × 20 + 8 = 100 + 8 = 108 sitplekke.' },
          { label: 'b) Rynommer vir 88 sitplekke', correctAnswer: '16', explanation: 'Stel op: 5 × ry + 8 = 88. Trek 8 af: 5 × ry = 80. Deel deur 5: ry = 16. Kontroleer: 5(16)+8=88 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalreekse, nde-termreëls, inset-uitsettabelle en geometriese patrone bemeester — ʼn volpunt!' },
        { minScore: 15, message: 'Puik werk! Jy het ʼn sterk begrip van patrone en funksies. Gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor reëls en tabelle weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal dit kry!' },
      ],
    },
  ],

  scoreMessages: [
    { minScore: 18, message: 'Uitstekend! ʼn Volpunt — jy het patrone, funksies en verwantskappe vir Graad 7 volkome bemeester. Hou so aan!' },
    { minScore: 14, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van hierdie onderwerp. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 6, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
