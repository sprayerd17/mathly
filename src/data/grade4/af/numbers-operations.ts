export type WorkedExample = {
  title?: string
  question: string
  answer: string
  steps: string[]
}

export type PracticeQuestion = {
  question: string
  answer: string
  options: string[]
  correctIndex: number
}

export type Section = {
  id: string
  title: string
  icon: string
  explanation: string
  workedExamples: WorkedExample[]
  practiceQuestions: PracticeQuestion[]
  openQuestions?: OpenQuestion[]
  videoPlaceholder?: string
  diagramPlaceholder?: string
  diagramSvg?: string
}

export type QuestionPart = {
  label: string
  correctAnswer?: string
  correctAnswers?: string[]
  explanation?: string
  checkMode?: 'auto' | 'self'
  answer?: string
}

export type OpenQuestion = {
  difficulty: 'Easy' | 'Easy-Medium' | 'Medium' | 'Medium-Hard' | 'Hard'
  question: string
  // Required for checkMode 'self' (shown directly to the student to self-mark
  // against); 'auto' mode grades against correctAnswer/correctAnswers instead
  // and never renders this field, so it doesn't need to be set there.
  answer?: string
  checkMode: 'auto' | 'self'
  correctAnswer?: string
  correctAnswers?: string[]
  explanation?: string
  parts?: QuestionPart[]
  // When both are present (no `parts`), the question renders as multiple
  // choice — one correct option out of `options`, auto-graded by comparing
  // the student's pick to `correctIndex` (no self-mark step, since that's
  // exactly the honesty gap MC was introduced to close).
  options?: string[]
  correctIndex?: number
  // Raw inline SVG markup. When consecutive questions in a practice set share
  // the exact same diagramSvg string, the UI renders it once as a shared
  // "exam style" diagram above that run of questions instead of repeating it
  // per question card.
  diagramSvg?: string
}

export type ScoreMessage = {
  minScore: number
  message: string
}

export type ResultsConfigMessage = {
  minScore?: number
  minPercent?: number
  upTo?: number
  message?: string
  text?: string
}

export type ResultsConfig = {
  totalMarks: number
  messages: ResultsConfigMessage[]
}

export type PracticeSet = {
  name: string
  questions: OpenQuestion[]
  scoreMessages?: ScoreMessage[]
}

export type TopicData = {
  title: string
  grade: number
  sections: Section[]
  topicPractice?: OpenQuestion[]
  practiceSets?: PracticeSet[]
  scoreMessages?: ScoreMessage[]
  resultsConfig?: ResultsConfig
  resultsSummary?: ResultsConfig
}

export const topicData: TopicData = {
  title: 'Getalle, Bewerkings en Verwantskappe',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS HEELGETALLE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-whole-numbers',
      title: 'Wat is Heelgetalle?',
      icon: '🌍',
      explanation:
        'Heelgetalle is die getalle wat ons gebruik om te tel: 0, 1, 2, 3, 4, 5 … en hulle gaan ewig voort — jy kan altyd nog een meer tel! ' +
        'Heelgetalle sluit nie breuke in (soos ½) of desimale getalle (soos 3,5) nie. Hulle is altyd volledige, heel hoeveelhede sonder iets wat oorskiet. ' +
        'Hier is drie alledaagse voorbeelde wat jy elke dag sien: 12 appels in ʼn sak — jy tel 12 hele appels, nooit ʼn halwe appel nie. ' +
        '3 450 leerders in ʼn skool — daar is nie so iets soos ʼn halwe leerder nie! ' +
        '10 000 meter in ʼn wedloop — die volle wedloopafstand, sonder enige dele wat oorskiet. ' +
        'Nul (0) is die kleinste heelgetal en is net so belangrik soos enige ander. ' +
        'Wanneer jy 1, 2, 3, 4 … tel, tel jy vorentoe in heelgetalle. Jy kan ook terugwaarts tel: 5, 4, 3, 2, 1, 0.',
      workedExamples: [
        {
          question: 'Is 7 ʼn heelgetal? Wat van 2½?',
          answer: '7 is ʼn heelgetal. 2½ is NIE ʼn heelgetal nie.',
          steps: [
            '7 is ʼn volledige, telbare hoeveelheid sonder ʼn breuk- of desimale deel — dit is ʼn heelgetal.',
            '2½ het ʼn breukdeel (die ½) wat bygevoeg is — dit is NIE ʼn heelgetal nie.',
            'Heelgetalle kom altyd uit die lys 0, 1, 2, 3, 4, 5 … — nooit 2½ of 3,7 nie.',
          ],
        },
        {
          question: 'Skryf al die heelgetalle tussen 5 en 10.',
          answer: '6, 7, 8, 9',
          steps: [
            '"Tussen" beteken ons sluit 5 of 10 self nie in nie.',
            'Tel van net na 5: die volgende heelgetal is 6, dan 7, dan 8, dan 9.',
            'Stop voor 10 — 10 word nie ingesluit nie omdat die vraag "tussen 5 en 10" sê.',
            'Antwoord: 6, 7, 8, 9.',
          ],
        },
        {
          question: 'ʼn Klas het botteldoppe versamel. Sipho het 14 versamel, Amira het 9 versamel en Lebo het 21 versamel. Is al hierdie heelgetalle?',
          answer: 'Ja — 14, 9 en 21 is almal heelgetalle.',
          steps: [
            'ʼn Heelgetal is enige volledige telgetal wat by 0 begin: 0, 1, 2, 3 …',
            '14 ✓ — ʼn volledige, telbare hoeveelheid.',
            '9 ✓ — ʼn volledige, telbare hoeveelheid.',
            '21 ✓ — ʼn volledige, telbare hoeveelheid.',
            'Al drie is heelgetalle. Jy kan nie ʼn halwe botteldop versamel nie!',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — PLEKWAARDE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value',
      title: 'Plekwaarde',
      icon: '📍',
      explanation: `<p>Elke syfer in ʼn getal het ʼn waarde wat afhang van sy <strong>posisie</strong>. Dit word <strong>plekwaarde</strong> genoem. Een plek na links beweeg maak ʼn syfer tien keer groter.</p>
<p style="margin-top:14px">Ons gebruik vier kolomme vir viersyfergetalle. Elke kolom het sy eie kleur — leer hierdie kleure want ons gebruik hulle in elke voorbeeld hieronder:</p>
<div style="overflow-x:auto;margin-top:16px;margin-bottom:16px"><table style="border-collapse:collapse;font-size:0.95em;width:100%"><thead><tr><th style="padding:10px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Duisende</th><th style="padding:10px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:10px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:10px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene</th></tr></thead><tbody><tr><td style="padding:12px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.3em;text-align:center">4</td><td style="padding:12px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.3em;text-align:center">3</td><td style="padding:12px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.3em;text-align:center">2</td><td style="padding:12px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.3em;text-align:center">7</td></tr></tbody></table></div>
<p>Die getal wat in die tabel getoon word, is <strong>4 327</strong>. Die <span style="color:#dc2626;font-weight:700">4</span> sit in die Duisende-kolom, dus is dit werd <span style="color:#dc2626;font-weight:700">4 000</span>. Die <span style="color:#d97706;font-weight:700">3</span> sit in die Honderde-kolom, dus is dit werd <span style="color:#d97706;font-weight:700">300</span>. Die <span style="color:#16a34a;font-weight:700">2</span> sit in die Tiene-kolom, dus is dit werd <span style="color:#16a34a;font-weight:700">20</span>. Die <span style="color:#2563eb;font-weight:700">7</span> sit in die Ene-kolom, dus is dit werd <span style="color:#2563eb;font-weight:700">7</span>.</p>
<p style="margin-top:14px">Ons kan dit in <strong>uitgebreide notasie</strong> skryf — die getal opbreek om die waarde van elke syfer te toon:</p>
<p style="margin-top:10px;font-size:1.05em;padding:8px 0">4 327 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">4 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">300</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">20</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">7</span></p>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Plekwaardetabel wat 4 327 toon met elke syfer kleur-gekodeer — Duisende rooi, Honderde geel, Tiene groen, Ene blou</div>`,
      workedExamples: [
        {
          question: 'Skryf 7 054 in ʼn plekwaardetabel en in uitgebreide notasie. Wys elke stap.',
          answer: '7 054 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">7 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">0</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">50</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">4</span>',
          steps: [
            'Plaas elke syfer in die korrekte kolom:<br><br><div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:0.9em"><thead><tr><th style="padding:8px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Duisende</th><th style="padding:8px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:8px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:8px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Ene</th></tr></thead><tbody><tr><td style="padding:10px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.2em;text-align:center">7</td><td style="padding:10px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.2em;text-align:center">0</td><td style="padding:10px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.2em;text-align:center">5</td><td style="padding:10px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.2em;text-align:center">4</td></tr></tbody></table></div>',
            '<span style="color:#dc2626;font-weight:700">7</span> is in die Duisende-kolom → sy waarde is <span style="color:#dc2626;font-weight:700">7 000</span>.',
            '<span style="color:#d97706;font-weight:700">0</span> is in die Honderde-kolom → sy waarde is <span style="color:#d97706;font-weight:700">0</span> (daar is geen honderde in hierdie getal nie).',
            '<span style="color:#16a34a;font-weight:700">5</span> is in die Tiene-kolom → sy waarde is <span style="color:#16a34a;font-weight:700">50</span>.',
            '<span style="color:#2563eb;font-weight:700">4</span> is in die Ene-kolom → sy waarde is <span style="color:#2563eb;font-weight:700">4</span>.',
            'Skryf in uitgebreide notasie: <span style="color:#dc2626;font-weight:700">7 000</span> + <span style="color:#d97706;font-weight:700">0</span> + <span style="color:#16a34a;font-weight:700">50</span> + <span style="color:#2563eb;font-weight:700">4</span> = 7 054.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — TEL VORENTOE EN TERUGWAARTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-forwards-backwards',
      title: 'Tel Vorentoe en Terugwaarts',
      icon: '↕️',
      explanation: `<p>Om <strong>vorentoe te tel</strong> beteken om elke keer dieselfde getal by te tel om die volgende getal te kry. Om <strong>terugwaarts te tel</strong> beteken om elke keer dieselfde getal af te trek. Die getal wat jy bytel of aftrek, word die <strong>interval</strong> genoem.</p>
<p style="margin-top:14px"><strong>Tel in 1e</strong> — tel 1 elke keer by:</p>
<p style="margin-top:4px;padding-left:12px">1 → 2 → 3 → 4 → 5 &nbsp; (elke getal is 1 meer as die een voor dit)</p>
<p style="margin-top:14px"><strong>Tel in 10e</strong> — tel 10 elke keer by:</p>
<p style="margin-top:4px;padding-left:12px">10 → 20 → 30 → 40 → 50 &nbsp; (elke getal is 10 meer as die een voor dit)</p>
<p style="margin-top:14px"><strong>Tel in 100e</strong> — tel 100 elke keer by:</p>
<p style="margin-top:4px;padding-left:12px">100 → 200 → 300 → 400 → 500 &nbsp; (elke getal is 100 meer as die een voor dit)</p>
<p style="margin-top:14px"><strong>Tel in 1 000e</strong> — tel 1 000 elke keer by:</p>
<p style="margin-top:4px;padding-left:12px">1 000 → 2 000 → 3 000 → 4 000 → 5 000 &nbsp; (elke getal is 1 000 meer as die een voor dit)</p>
<p style="margin-top:14px">Om <strong>terugwaarts te tel</strong>, gebruik dieselfde intervalle maar <em>trek</em> elke keer af in plaas van by te tel.</p>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Getallelyn wat vorentoe-telling in 100e toon van 1 200 tot 1 700 met pyle tussen elke getal</div>`,
      workedExamples: [
        {
          question: 'Tel vorentoe in 100e vanaf 1 200. Skryf die volgende 5 getalle.',
          answer: '1 200, 1 300, 1 400, 1 500, 1 600, 1 700',
          steps: [
            'Ons tel vorentoe in 100e, dus tel ons 100 elke keer by.',
            'Begin by 1 200.',
            '1 200 + 100 = 1 300.',
            '1 300 + 100 = 1 400.',
            '1 400 + 100 = 1 500.',
            '1 500 + 100 = 1 600.',
            '1 600 + 100 = 1 700.',
            'Die reeks is: 1 200, 1 300, 1 400, 1 500, 1 600, 1 700.',
          ],
        },
        {
          question: 'Tel terugwaarts in 1 000e vanaf 9 000. Skryf die volgende 5 getalle.',
          answer: '9 000, 8 000, 7 000, 6 000, 5 000, 4 000',
          steps: [
            'Ons tel terugwaarts in 1 000e, dus trek ons 1 000 elke keer af.',
            'Begin by 9 000.',
            '9 000 − 1 000 = 8 000.',
            '8 000 − 1 000 = 7 000.',
            '7 000 − 1 000 = 6 000.',
            '6 000 − 1 000 = 5 000.',
            '5 000 − 1 000 = 4 000.',
            'Die reeks is: 9 000, 8 000, 7 000, 6 000, 5 000, 4 000.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VERGELYK EN ORDEN GETALLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering',
      title: 'Vergelyk en Orden Getalle',
      icon: '⚖️',
      explanation: `<p>Ons gebruik drie simbole om getalle te vergelyk:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li><strong>&lt;</strong> &nbsp; beteken <strong>kleiner as</strong> &nbsp;— voorbeeld: 3 &lt; 7 &nbsp;(3 is kleiner as 7)</li>
<li><strong>&gt;</strong> &nbsp; beteken <strong>groter as</strong> &nbsp;— voorbeeld: 7 &gt; 3 &nbsp;(7 is groter as 3)</li>
<li><strong>=</strong> &nbsp; beteken <strong>gelyk aan</strong> &nbsp;— voorbeeld: 5 = 5</li>
</ul>
<p style="margin-top:14px">💡 <strong>Geheue-wenk:</strong> Die oop mond van &lt; of &gt; wys altyd na die <strong>groter</strong> getal — soos ʼn honger krokodil wat altyd die groter maaltyd wil eet!</p>
<p style="margin-top:16px">Volg hierdie stappe wanneer jy enige twee getalle vergelyk:</p>
<p style="margin-top:10px"><strong>Stap 1</strong> — Tel die syfers. Meer syfers = groter getal. ʼn 4-syfer getal is altyd groter as ʼn 3-syfer getal.</p>
<p style="margin-top:10px"><strong>Stap 2</strong> — As beide getalle dieselfde aantal syfers het, vergelyk die <span style="color:#dc2626;font-weight:700">duisende</span>-syfers eerste. Die groter <span style="color:#dc2626;font-weight:700">duisende</span>-syfer beteken die groter getal.</p>
<p style="margin-top:10px"><strong>Stap 3</strong> — As die <span style="color:#dc2626;font-weight:700">duisende</span>-syfers gelyk is, vergelyk die <span style="color:#d97706;font-weight:700">honderde</span>-syfers. As dié ook gelyk is, vergelyk die <span style="color:#16a34a;font-weight:700">tiene</span>-syfers. As dié ook gelyk is, vergelyk die <span style="color:#2563eb;font-weight:700">ene</span>-syfers.</p>`,
      workedExamples: [
        {
          question: 'Vergelyk 3 456 en 3 512. Watter is groter? Skryf jou antwoord met < of >.',
          answer: '<span>3 456 &lt; 3 512 &nbsp;(3 456 is kleiner as 3 512)</span>',
          steps: [
            '<strong>Stap 1 — Tel die syfers:</strong> 3 456 het 4 syfers en 3 512 het 4 syfers. Dieselfde aantal syfers — gaan na Stap 2.',
            '<strong>Stap 2 — Vergelyk die duisende-syfers:</strong> <span style="color:#dc2626;font-weight:700">3</span> 456 vs <span style="color:#dc2626;font-weight:700">3</span> 512. Beide duisende-syfers is <span style="color:#dc2626;font-weight:700">3</span> — hulle is gelyk. Gaan na Stap 3.',
            '<strong>Stap 3 — Vergelyk die honderde-syfers:</strong> 3 <span style="color:#d97706;font-weight:700">4</span>56 vs 3 <span style="color:#d97706;font-weight:700">5</span>12. Die honderde-syfer van 3 456 is <span style="color:#d97706;font-weight:700">4</span> en van 3 512 is <span style="color:#d97706;font-weight:700">5</span>.',
            'Aangesien <span style="color:#d97706;font-weight:700">4</span> &lt; <span style="color:#d97706;font-weight:700">5</span>, is die getal 3 456 kleiner as 3 512.',
            'Antwoord: 3 456 &lt; 3 512.',
          ],
        },
        {
          question: 'Orden hierdie getalle van kleinste na grootste: 2 341, 987, 2 098, 3 001.',
          answer: '987,  2 098,  2 341,  3 001',
          steps: [
            '<strong>Stap 1 — Tel die syfers:</strong> 987 het <strong>3 syfers</strong>. Die ander (2 341, 2 098, 3 001) het almal <strong>4 syfers</strong>. Minder syfers = kleiner getal, dus kom 987 eerste.',
            '<strong>Stap 2 — Vergelyk die 4-syfer getalle by hul duisende-syfers:</strong> <span style="color:#dc2626;font-weight:700">2</span> 341, <span style="color:#dc2626;font-weight:700">2</span> 098, <span style="color:#dc2626;font-weight:700">3</span> 001. Duisende-syfers is <span style="color:#dc2626;font-weight:700">2</span>, <span style="color:#dc2626;font-weight:700">2</span> en <span style="color:#dc2626;font-weight:700">3</span>. Dus is 3 001 die grootste.',
            '<strong>Stap 3 — Vergelyk 2 341 en 2 098 (dieselfde duisende-syfer):</strong> Vergelyk honderde — 2 <span style="color:#d97706;font-weight:700">3</span>41 vs 2 <span style="color:#d97706;font-weight:700">0</span>98. Honderde-syfer van 2 341 is <span style="color:#d97706;font-weight:700">3</span> en van 2 098 is <span style="color:#d97706;font-weight:700">0</span>. Aangesien <span style="color:#d97706;font-weight:700">0</span> &lt; <span style="color:#d97706;font-weight:700">3</span>, is 2 098 &lt; 2 341.',
            'Finale volgorde van kleinste na grootste: 987,  2 098,  2 341,  3 001.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — AFRONDING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-off',
      title: 'Afronding',
      icon: '🎯',
      explanation: `<p>Soms het ons nie ʼn presiese getal nodig nie — ons het ʼn getal nodig wat <strong>naby genoeg</strong> is en maklik om mee te werk. Ons noem dit <strong>afronding</strong>.</p>
<p style="margin-top:14px">Daar is een eenvoudige reël vir afronding:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li>As die <strong>bepalende syfer</strong> <strong>0, 1, 2, 3 of 4</strong> is — <strong>rond af</strong> (die syfer in die kolom waarna jy afrond, bly dieselfde)</li>
<li>As die <strong>bepalende syfer</strong> <strong>5, 6, 7, 8 of 9</strong> is — <strong>rond op</strong> (tel 1 by die syfer in die kolom waarna jy afrond)</li>
</ul>
<p style="margin-top:16px">Die <strong>bepalende syfer</strong> is die syfer net regs van die kolom waarna jy afrond. Hier is watter syfer om na te kyk:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li><strong>Afronding na die naaste 10</strong> — kyk na die <span style="color:#2563eb;font-weight:700">ene-syfer</span> (die blou kolom). Vervang die ene-syfer met 0.</li>
<li><strong>Afronding na die naaste 100</strong> — kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> (die groen kolom). Vervang die tiene- en ene-syfers met 0.</li>
</ul>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Getallelyn wat 3 467 tussen 3 460 en 3 470 toon met ʼn pyl wat na 3 470 wys</div>`,
      workedExamples: [
        {
          question: 'Rond 3 467 af na die naaste 10.',
          answer: '3 470',
          steps: [
            '<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 10, dus kyk ons na die <span style="color:#2563eb;font-weight:700">ene-syfer</span>. In 3 467 is die ene-syfer <span style="color:#2563eb;font-weight:700">7</span>.',
            '<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is <span style="color:#2563eb;font-weight:700">7</span>. Omdat 7 5 of meer is, <strong>rond ons op</strong> — tel 1 by die tiene-syfer.',
            '<strong>Stap 3 — Vervang en skryf die antwoord.</strong> Die tiene-syfer was 6. Tel 1 by: 6 + 1 = 7. Vervang die ene-syfer met 0.',
            'Antwoord: <strong>3 470</strong>.',
          ],
        },
        {
          question: 'Rond 5 234 af na die naaste 100.',
          answer: '5 200',
          steps: [
            '<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 100, dus kyk ons na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>. In 5 234 is die tiene-syfer <span style="color:#16a34a;font-weight:700">3</span>.',
            '<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is <span style="color:#16a34a;font-weight:700">3</span>. Omdat 3 kleiner as 5 is, <strong>rond ons af</strong> — die honderde-syfer bly dieselfde.',
            '<strong>Stap 3 — Vervang en skryf die antwoord.</strong> Die honderde-syfer bly as 2. Vervang beide die tiene- en ene-syfers met 0.',
            'Antwoord: <strong>5 200</strong>.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — STEL GETALLE VOOR OP ʼN GETALLELYN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'number-line',
      title: 'Stel Getalle voor op ʼn Getallelyn',
      icon: '📏',
      explanation: `<p>ʼn <strong>Getallelyn</strong> is ʼn reguit lyn met getalle wat op gelyke spasiëring daarop geskryf is. Die getalle neem altyd toe van links na regs — kleiner getalle is aan die linkerkant en groter getalle is aan die regterkant.</p>
<p style="margin-top:14px">Die gelyke spasiëring tussen die getalle word <strong>intervalle</strong> genoem. As ʼn getallelyn van 0 na 1 000 gaan met merke by elke 100, is die interval 100.</p>
<p style="margin-top:14px">Sommige getalle val <strong>presies op ʼn merk</strong>. Ander val <strong>tussen twee merke</strong>. Om te vind waar ʼn getal tussen twee merke sit:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li>Kyk na die twee merke aan weerskante van jou getal.</li>
<li>As jou getal presies in die middel is, is dit die <strong>halfpadpunt</strong>.</li>
<li>Om die halfpadpunt te bereken: <strong>tel die twee merke bymekaar en deel deur 2</strong>.</li>
</ul>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Getallelyn van 0 tot 10 000 in intervalle van 1 000 met 6 000 en 8 500 gemerk met kolletjies en etikette</div>`,
      workedExamples: [
        {
          question: 'ʼn Getallelyn gaan van 0 na 10 000 in intervalle van 1 000. Plaas 6 000 en 8 500 op die getallelyn.',
          answer: '6 000 val presies op die 6 000-merk. 8 500 val presies halfpad tussen 8 000 en 9 000.',
          steps: [
            '<strong>Stap 1 — Teken die getallelyn.</strong> Merk die punte 0, 1 000, 2 000, 3 000, 4 000, 5 000, 6 000, 7 000, 8 000, 9 000, 10 000 op gelyke spasiëring.',
            '<strong>Stap 2 — Plaas 6 000.</strong> Die getal 6 000 is ʼn veelvoud van 1 000, dus val dit <strong>presies op die 6 000-merk</strong>. Plaas ʼn kolletjie direk op dié merk en etiketteer dit 6 000.',
            '<strong>Stap 3 — Plaas 8 500.</strong> Die getal 8 500 is nie ʼn veelvoud van 1 000 nie. Dit sit tussen 8 000 en 9 000. Vra: is 8 500 nader aan 8 000 of 9 000, of is dit in die middel?',
            '<strong>Stap 4 — Vind die halfpadpunt tussen 8 000 en 9 000.</strong> Tel die twee merke bymekaar: 8 000 + 9 000 = 17 000. Deel deur 2: 17 000 ÷ 2 = 8 500.',
            'Omdat 8 500 gelyk is aan die halfpadpunt, sit dit <strong>presies halfpad tussen 8 000 en 9 000</strong>. Plaas ʼn kolletjie in die middel van dié interval en etiketteer dit 8 500.',
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },
  ],
  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Heelgetalle en plekwaarde | 4-7 Syferwaarde en samestelling |
    // 8-10 Telpatrone | 11-13 Vergelyk/orden | 14-16 Afronding |
    // 17-19 Getallelyne en kern-redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Watter een van hierdie getalle is ʼn heelgetal?', checkMode: 'auto', options: ['8', '3½', '8,5', '½'], correctIndex: 0, explanation: '8 is ʼn volledige telgetal sonder ʼn breuk- of desimale deel, dus is dit ʼn heelgetal. 3½ het ʼn breukdeel, 8,5 het ʼn desimale deel, en ½ is op sy eie ʼn breuk — geeneen hiervan is heelgetalle nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 6 en 11, geskei deur kommas.', checkMode: 'auto', options: ['6, 7, 8, 9, 10, 11', '7, 8, 9, 10', '7, 8, 9', '6, 7, 8, 9, 10'], correctIndex: 1, explanation: '"Tussen" sluit nie 6 of 11 self in nie. Deur van net na 6 tot net voor 11 te tel, kry jy 7, 8, 9, 10. Om 6 en/of 11 in te sluit, of te vroeg te stop, is algemene foute.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 4 in die Duisende-kolom, 3 in die Honderde-kolom, 2 in die Tiene-kolom en 7 in die Ene-kolom. Wat is die getal?', checkMode: 'auto', options: ['7 234', '4 237', '4 327', '3 427'], correctIndex: 2, explanation: 'Deur die kolomme van links na regs te lees (Duisende, Honderde, Tiene, Ene) kry jy 4 327. 7 234 lees die syfers agterstevoor, 4 237 verwissel die Tiene- en Ene-syfers, en 3 427 verwissel die Duisende- en Honderde-syfers.' },
        { difficulty: 'Easy', question: 'Skryf die getal 4 327 in uitgebreide notasie.', checkMode: 'auto', options: ['4 000 + 300 + 2 + 7', '4 000 + 30 + 20 + 7', '4 000 + 300 + 20 + 70', '4 000 + 300 + 20 + 7'], correctIndex: 3, explanation: '4 is in die Duisende-kolom (4 000), 3 is in die Honderde-kolom (300), 2 is in die Tiene-kolom (20), 7 is in die Ene-kolom (7). Die verkeerde opsies vergeet om die Tiene- of Honderde-syfer met sy kolom te vermenigvuldig, of voeg ʼn ekstra nul by die Ene-syfer.' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 6 in 6 431?', checkMode: 'auto', options: ['6 000', '600', '60', '6'], correctIndex: 0, explanation: 'Die syfer 6 is in die Duisende-kolom, dus is sy waarde 6 × 1 000 = 6 000. 600 en 60 sou sy waarde wees in die Honderde- of Tiene-kolom, en 6 ignoreer plekwaarde heeltemal.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Liefdadigheidskonsert het 6 194 kaartjies verkoop. Kyk na die syfer 9 in die kaartjietotaal — in watter kolom is dit, en wat is sy waarde?', checkMode: 'auto', options: ['Ene-kolom; waarde is 9', 'Tiene-kolom; waarde is 90', 'Honderde-kolom; waarde is 900', 'Tiene-kolom; waarde is 9'], correctIndex: 1, explanation: 'Die syfer 9 in 6 194 is in die Tiene-kolom, dus is sy waarde 9 × 10 = 90. Die verkeerde opsies kies die verkeerde kolom, of die regte kolom met die verkeerde waarde.' },
        { difficulty: 'Easy-Medium', question: 'Skryf die getal wat 4 duisende, 0 honderde, 8 tiene en 3 ene het.', checkMode: 'auto', options: ['4 803', '4 038', '4 083', '483'], correctIndex: 2, explanation: 'Plaas elke syfer in sy kolom: 4 duisende, 0 honderde, 8 tiene, 3 ene → 4 083. 4 803 verwissel die Honderde- en Tiene-syfers, 4 038 verwissel die Tiene- en Ene-syfers, en 483 laat die 0 Honderde-syfer weg in plaas daarvan om dit as ʼn plekhouer te hou.' },
        { difficulty: 'Medium', question: 'Zanele sê: "Die waarde van ʼn syfer is net die syfer self — dit maak nie saak waar dit in die getal is nie." Sy gebruik dit om te beweer dat die syfer 6 in 6 431 net 6 werd is. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Ja — ʼn syfer se waarde verander nooit, ongeag waar dit is nie.', 'Ja — aangesien 6 431 vier syfers het, is elke syfer 6 werd.', 'Nee — die 6 is in die Ene-kolom, dus is dit 6 werd.', 'Nee — die 6 is in die Duisende-kolom, dus is dit 6 000 werd, nie net 6 nie.'], correctIndex: 3, explanation: 'ʼn Syfer se waarde hang af van sy posisie (plekwaarde). Die 6 in 6 431 is in die Duisende-kolom, dus is dit 6 000 werd, nie net 6 nie — Zanele ignoreer plekwaarde.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 1e vanaf 4 996. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', options: ['4 997, 4 998, 4 999, 5 000', '4 997, 4 998, 4 999, 4 000', '4 996, 4 997, 4 998, 4 999', '4 997, 4 998, 5 999, 5 000'], correctIndex: 0, explanation: 'Tel 1 elke keer by: 4 996 + 1 = 4 997, dan 4 998, 4 999, 5 000. ʼn Algemene fout is om te dink die duisende-syfer spring terug na 4 000 in plaas daarvan om na 5 000 oor te dra, of om die reeks by 4 996 self te begin in plaas van die volgende getal.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 100e vanaf 9 200. Skryf die volgende 5 getalle, geskei deur kommas.', checkMode: 'auto', options: ['9 100, 9 000, 8 900, 8 800, 8 600', '9 100, 9 000, 8 900, 8 800, 8 700', '9 100, 9 000, 8 900, 8 700, 8 600', '9 200, 9 100, 9 000, 8 900, 8 800'], correctIndex: 1, explanation: 'Trek 100 elke keer af: 9 200 − 100 = 9 100, dan 9 000, 8 900, 8 800, 8 700. Die verkeerde opsies trek op ʼn stadium 200 af, slaan ʼn waarde oor, of herhaal die begingetal 9 200 in plaas daarvan om met die eerste nuwe term te begin.' },
        { difficulty: 'Medium', question: 'ʼn Getalpatroon gaan: 1 250, 1 350, 1 450 …\n\nWatter opsie gee die reël en die volgende 2 getalle korrek?', checkMode: 'auto', options: ['Tel 50 by; volgende 2 getalle: 1 500, 1 550', 'Tel 110 by; volgende 2 getalle: 1 560, 1 670', 'Tel 100 by; volgende 2 getalle: 1 550, 1 650', 'Tel 100 by; volgende 2 getalle: 1 450, 1 550'], correctIndex: 2, explanation: 'Elke getal is 100 meer as die een voor dit: 1 350 − 1 250 = 100, 1 450 − 1 350 = 100. Gaan voort: 1 450 + 100 = 1 550, 1 550 + 100 = 1 650. Die verkeerde opsies gebruik die verkeerde interval of herhaal 1 450 in plaas daarvan om daarvandaan voort te gaan.' },
        { difficulty: 'Medium', question: 'Skryf kleiner as, groter as, of gelyk aan: 3 456 en 3 654.', checkMode: 'auto', options: ['groter as', 'gelyk aan', 'kan nie vergelyk word nie omdat albei getalle met 3 begin', 'kleiner as'], correctIndex: 3, explanation: 'Vergelyk die honderde-syfers aangesien die duisende-syfers ooreenstem: 3 4__ vs 3 6__. Aangesien 4 < 6, is 3 456 kleiner as 3 654. Getalle met dieselfde voorste syfer kan steeds vergelyk word — kyk net na die volgende kolom.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 5 148, 876, 5 481, 2 019', checkMode: 'auto', options: ['876, 2 019, 5 481, 5 148', '5 148, 5 481, 876, 2 019', '2 019, 876, 5 148, 5 481', '876, 2 019, 5 148, 5 481'], correctIndex: 3, explanation: '876 het 3 syfers, dus is dit die kleinste. 2 019 het 4 syfers met 2 duisende. 5 148 en 5 481 het albei 5 duisende — vergelyk honderde: 1 < 4, dus is 5 148 < 5 481. Korrekte volgorde: 876, 2 019, 5 148, 5 481. Die verkeerde opsies verwissel 5 148 en 5 481, ignoreer syfer-telling wanneer 876 geplaas word, of vergelyk voorste syfers sonder om te kyk hoeveel syfers elke getal het.' },
        { difficulty: 'Medium', question: 'Thabo sê 3 987 is groter as 4 001 omdat die syfer 9 groter as 0 is. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Ja — 9 is ʼn groter syfer as 0, dus is sy redenasie geldig.', 'Nee — jy moet eers die duisende-syfer vergelyk; 4 001 het 4 duisende teenoor 3 987 se 3 duisende, dus is 4 001 groter.', 'Ja — 3 987 het meer syfers wat nie nul is nie, dus is dit groter.', 'Nee — 3 987 en 4 001 is eintlik gelyk.'], correctIndex: 1, explanation: 'Jy moet altyd die hoogste plekwaarde eerste vergelyk. 3 987 het 3 duisende en 4 001 het 4 duisende. Aangesien 4 > 3, is 4 001 groter, maak nie saak wat die ander syfers is nie — Thabo het die verkeerde kolom vergelyk.' },
        { difficulty: 'Medium', question: 'ʼn Bakker het 3 456 gram meel nodig vir ʼn groot bestelling. Rond hierdie massa af na die naaste 10 gram sodat dit netjies op die resepkaart pas.', checkMode: 'auto', options: ['3 450', '3 400', '3 460', '3 470'], correctIndex: 2, explanation: 'Die ene-syfer is 6 (≥ 5), dus rond ons op: 3 456 → 3 460. 3 450 rond verkeerdelik af, 3 400 rond na die naaste 100 af in plaas van 10, en 3 470 tel een tiental te veel by.' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsgeleentheid het R5 234 ingesamel. Die nuusbrief wil die totaal afgerond na die naaste R100 rapporteer. Watter bedrag moet dit druk?', checkMode: 'auto', options: ['R5 300', 'R5 000', 'R5 230', 'R5 200'], correctIndex: 3, explanation: 'Die tiene-syfer is 3 (< 5), dus rond ons af: 5 234 → 5 200. R5 300 rond verkeerdelik op, R5 000 rond na die naaste 1 000 af, en R5 230 rond na die naaste 10 af in plaas van 100.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat afronding van 5 999 na die naaste 10 die getal amper onveranderd laat, "want ons rond net die ene af." Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Die leerder is verkeerd — 5 999 rond op na 6 000, en die tiene-, honderde- en duisende-syfers verander almal weens oordrag.', 'Die leerder is reg — 5 999 rond af na 5 990, en verander net die ene-syfer.', 'Die leerder is verkeerd — 5 999 rond af na 5 990 omdat 9 ʼn onewe syfer is.', 'Die leerder is reg — afronding na die naaste 10 verander nooit meer as een syfer nie.'], correctIndex: 0, explanation: 'Die ene-syfer is 9 (≥ 5), dus rond ons op: 5 999 → 6 000. Al is die ene-kolom die "beslissende syfer," veroorsaak die opronding dat die tiene-, honderde- en duisende-syfers almal verander weens oordrag — die leerder se bewering is misleidend.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 0 na 1 000 in intervalle van 100. Tussen watter twee getalle sit 650?', checkMode: 'auto', options: ['500, 600', '600, 700', '650, 700', '600, 650'], correctIndex: 1, explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 650 val tussen die 600-merk en die 700-merk. Die ander opsies kies óf die verkeerde paar merke óf gebruik 650 self as een van die merke, wat nie toegelaat word nie aangesien slegs veelvoude van 100 gemerk is.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 3 000 na 4 000 in intervalle van 100. Watter getal is halfpad tussen 3 400 en 3 500?', checkMode: 'auto', options: ['3 400', '3 500', '3 450', '3 900'], correctIndex: 2, explanation: 'Tel die twee merke bymekaar: 3 400 + 3 500 = 6 900. Deel deur 2: 6 900 ÷ 2 = 3 450. Om een van die eindpunte (3 400 of 3 500) te kies, ignoreer dat halfpad presies in die middel beteken, en 3 900 tel verkeerdelik op in plaas daarvan om te deel.' },
        { difficulty: 'Hard', question: 'ʼn Konsertsaal het 3 847 mense by ʼn vertoning gehad. Die saalbestuurder wil ʼn maklik-leesbare skatting afgerond na die naaste 100 wys, terwyl ʼn nuusverslag dieselfde skare na die naaste 10 afrond vir ʼn "finale telling". Watter opsie gee albei afgeronde getalle korrek en identifiseer watter een nader aan die werklike skare van 3 847 is?', checkMode: 'auto', options: ['Naaste 100 = 3 900; Naaste 10 = 3 850; die naaste-100-skatting is nader.', 'Naaste 100 = 3 800; Naaste 10 = 3 840; die naaste-10-skatting is nader.', 'Naaste 100 = 3 800; Naaste 10 = 3 850; albei skattings is ewe naby.', 'Naaste 100 = 3 800; Naaste 10 = 3 850; die naaste-10-skatting is nader.'], correctIndex: 3, explanation: 'Naaste 100: tiene-syfer 4 (< 5), rond af → 3 800. Naaste 10: ene-syfer 7 (≥ 5), rond op → 3 850. Afstande vanaf 3 847: 3 847 − 3 800 = 47, terwyl 3 850 − 3 847 = 3. Aangesien 3 < 47, is die naaste-10-skatting nader.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het plekwaarde, vergelyking, afronding en getallelyne bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiuit as Stel 1, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Watter een van hierdie getalle is ʼn heelgetal?', checkMode: 'auto', options: ['4¾', '15', '15,75', '¾'], correctIndex: 1, explanation: '15 is ʼn volledige telgetal sonder ʼn breuk- of desimale deel, dus is dit ʼn heelgetal. 4¾ het ʼn breukdeel, 15,75 het ʼn desimale deel, en ¾ is op sy eie ʼn breuk — geeneen hiervan is heelgetalle nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 20 en 26, geskei deur kommas.', checkMode: 'auto', options: ['20, 21, 22, 23, 24, 25, 26', '21, 22, 23, 24', '21, 22, 23, 24, 25', '20, 21, 22, 23, 24, 25'], correctIndex: 2, explanation: '"Tussen" sluit nie 20 of 26 self in nie. Deur van net na 20 tot net voor 26 te tel, kry jy 21, 22, 23, 24, 25. Om 20 en/of 26 in te sluit, of een getal te vroeg te stop, is algemene foute.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 7 in die Duisende-kolom, 0 in die Honderde-kolom, 5 in die Tiene-kolom en 4 in die Ene-kolom. Wat is die getal?', checkMode: 'auto', options: ['5 704', '7 504', '7 045', '7 054'], correctIndex: 3, explanation: 'Deur die kolomme van links na regs te lees (Duisende, Honderde, Tiene, Ene) kry jy 7 054. 5 704 lees die syfers in die verkeerde volgorde, 7 504 verwissel die Honderde- en Tiene-syfers, en 7 045 verwissel die Tiene- en Ene-syfers.' },
        { difficulty: 'Easy', question: 'Skryf die getal 7 054 in uitgebreide notasie.', checkMode: 'auto', options: ['7 000 + 0 + 50 + 4', '7 000 + 0 + 5 + 4', '7 000 + 500 + 50 + 4', '7 000 + 0 + 50 + 40'], correctIndex: 0, explanation: '7 000 (Duisende) + 0 (Honderde) + 50 (Tiene) + 4 (Ene) = 7 054. Die verkeerde opsies vergeet om die Tiene-syfer met 10 te vermenigvuldig, voeg verkeerdelik ʼn Honderde-waarde by wat nie daar is nie, of voeg ʼn ekstra nul by die Ene-syfer.' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 6 in 2 640?', checkMode: 'auto', options: ['6 000', '600', '60', '6'], correctIndex: 1, explanation: 'Die syfer 6 in 2 640 is in die Honderde-kolom, dus is sy waarde 6 × 100 = 600. 6 000 en 60 sou sy waarde wees in die Duisende- of Tiene-kolom, en 6 ignoreer plekwaarde heeltemal.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Muntoutomaat het vanjaar 3 516 verkope aangeteken. Kyk na die syfer 6 in daardie totaal — in watter kolom is dit, en wat is sy waarde?', checkMode: 'auto', options: ['Tiene-kolom; waarde is 60', 'Honderde-kolom; waarde is 600', 'Ene-kolom; waarde is 6', 'Tiene-kolom; waarde is 6'], correctIndex: 2, explanation: 'Die syfer 6 in 3 516 is in die Ene-kolom, dus is sy waarde 6 × 1 = 6. Die verkeerde opsies kies die verkeerde kolom, of die regte kolom met die verkeerde waarde.' },
        { difficulty: 'Easy-Medium', question: 'Skryf die getal wat 5 duisende, 2 honderde, 1 tien en 8 ene het.', checkMode: 'auto', options: ['5 128', '5 281', '5 812', '5 218'], correctIndex: 3, explanation: 'Plaas elke syfer in sy kolom: 5 duisende, 2 honderde, 1 tien, 8 ene → 5 218. Die verkeerde opsies verwissel die Honderde-/Tiene-syfers of die Tiene-/Ene-syfers, of plaas die Honderde-syfer heeltemal verkeerd.' },
        { difficulty: 'Medium', question: 'Kagiso sê: "3 062 en 3 620 moet gelyk wees, want hulle gebruik presies dieselfde vier syfers." Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Nee — posisie maak saak; in 3 062 is die 6 60 werd, maar in 3 620 is die 6 600 werd, dus is 3 620 groter.', 'Ja — om dieselfde syfers te gebruik beteken altyd die getalle is gelyk.', 'Nee — 3 062 en 3 620 kan nie vergelyk word nie omdat hul syfers in ʼn ander volgorde is.', 'Ja — 3 062 is groter omdat sy syfers in toenemende volgorde gelys is.'], correctIndex: 0, explanation: 'Om dieselfde syfers te gebruik maak nie getalle gelyk nie — posisie maak saak. In 3 062 is die 6 60 werd, maar in 3 620 is die 6 600 werd. As jy kolom vir kolom vergelyk, is 3 620 groter as 3 062.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 10e vanaf 2 345. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', options: ['2 345, 2 355, 2 365, 2 375', '2 355, 2 365, 2 375, 2 385', '2 355, 2 365, 2 385, 2 395', '2 355, 2 465, 2 475, 2 485'], correctIndex: 1, explanation: 'Tel 10 elke keer by: 2 345 + 10 = 2 355, dan 2 365, 2 375, 2 385. Die verkeerde opsies herhaal die begingetal in plaas van die volgende term, slaan ʼn stap oor, of tel per ongeluk 100 by een van die terme in plaas van 10.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 1 000e vanaf 6 000. Skryf die volgende 4 getalle, geskei deur kommas.', checkMode: 'auto', options: ['7 000, 8 000, 9 000, 9 999', '6 000, 7 000, 8 000, 9 000', '7 000, 8 000, 9 000, 10 000', '7 000, 8 000, 9 000, 1 000'], correctIndex: 2, explanation: 'Tel 1 000 elke keer by: 6 000 + 1 000 = 7 000, dan 8 000, 9 000, 10 000 — ʼn nuwe syfer verskyn sodra ons oor 9 999 beweeg. Die verkeerde opsies stop een stap te vroeg, begin weer by 6 000, of skryf per ongeluk 1 000 in plaas van 10 000 vir die laaste term.' },
        { difficulty: 'Medium', question: 'ʼn Getalpatroon gaan: 8 400, 8 300, 8 200 …\n\nWatter opsie gee die reël en die volgende 2 getalle korrek?', checkMode: 'auto', options: ['Trek 100 af; volgende 2: 8 300, 8 200', 'Tel 100 by; volgende 2: 8 300, 8 400', 'Trek 200 af; volgende 2: 8 000, 7 800', 'Trek 100 af; volgende 2: 8 100, 8 000'], correctIndex: 3, explanation: 'Elke getal is 100 minder as die een voor dit: 8 400 − 8 300 = 100, 8 300 − 8 200 = 100. Gaan voort: 8 200 − 100 = 8 100, 8 100 − 100 = 8 000. Die verkeerde opsies herhaal vorige terme, tel by in plaas van af te trek, of gebruik die verkeerde interval.' },
        { difficulty: 'Medium', question: 'Skryf kleiner as, groter as, of gelyk aan: 7 001 en 7 001.', checkMode: 'auto', options: ['gelyk aan', 'kleiner as', 'groter as', 'kan nie vergelyk word nie omdat albei getalle dieselfde syfers het'], correctIndex: 0, explanation: 'Elke syfer is dieselfde in albei getalle, dus is 7 001 = 7 001. Getalle met identiese syfers in elke kolom is altyd gelyk, nie "onmoontlik om te vergelyk" nie.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 5 032, 4 999, 5 320, 4 909', checkMode: 'auto', options: ['4999, 4909, 5032, 5320', '4 909, 4 999, 5 032, 5 320', '4 909, 4 999, 5 320, 5 032', '5 032, 5 320, 4 909, 4 999'], correctIndex: 1, explanation: 'Vergelyk eers die duisende: 4 909 en 4 999 (4 duisende) is kleiner as 5 032 en 5 320 (5 duisende). Vergelyk dan binne elke paar deur honderde/tiene: 4 909 < 4 999 en 5 032 < 5 320. Korrekte volgorde: 4 909, 4 999, 5 032, 5 320. Die verkeerde opsies verwissel 4 909 en 4 999, verwissel 5 032 en 5 320, of plaas die 5-duisende-getalle eerste.' },
        { difficulty: 'Medium', question: 'Naledi sê dat 6 083 kleiner is as 5 999 omdat 0 kleiner is as 9 in die honderde-kolom. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Ja — 0 is kleiner as 9, dus is haar redenasie korrek.', 'Ja — 6 083 het meer syfers na die 6, dus moet dit kleiner wees.', 'Nee — jy moet eers die duisende-syfer vergelyk; 6 083 het 6 duisende en 5 999 het 5 duisende, dus is 6 083 groter.', 'Nee — 6 083 en 5 999 is eintlik gelyk.'], correctIndex: 2, explanation: 'Jy moet altyd eers die duisende-syfer vergelyk. 6 083 het 6 duisende en 5 999 het 5 duisende. Aangesien 6 > 5, is 6 083 groter, maak nie saak wat die honderde-syfers is nie — Naledi het die verkeerde kolom vergelyk.' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsbestelwa het vanmaand 6 784 km gery. Rond hierdie afstand af na die naaste 10 km vir die bestuurder se logboek.', checkMode: 'auto', options: ['6 790', '6 800', '6 770', '6 780'], correctIndex: 3, explanation: 'Die ene-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780. 6 790 rond verkeerdelik op, 6 800 rond na die naaste 100 af in plaas van 10, en 6 770 trek een tiental te veel af.' },
        { difficulty: 'Medium', question: 'ʼn Plaas het 7 849 kg mielies geoes. Die koöperasie wil dit afgerond na die naaste 100 kg rapporteer. Watter syfer moet op die verslag verskyn?', checkMode: 'auto', options: ['7 800 kg', '7 900 kg', '7 000 kg', '7 850 kg'], correctIndex: 0, explanation: 'Die tiene-syfer is 4 (< 5), dus rond ons af: 7 849 → 7 800. 7 900 kg rond verkeerdelik op, 7 000 kg rond na die naaste 1 000 af, en 7 850 kg rond na die naaste 10 af in plaas van 100.' },
        { difficulty: 'Medium', question: 'ʼn Leerder rond 1 499 af na die naaste 100 en skryf 1 400, met die argument "die eerste syfer is 1, dus moet dit afrond." Watter stelling evalueer die leerder se bewering korrek?', checkMode: 'auto', options: ['Die leerder is reg — aangesien die getal met 1 begin, rond dit altyd af.', 'Die leerder is verkeerd — 1 499 rond op na 1 500 omdat die tiene-syfer (9) beslissend is, nie die duisende-syfer nie.', 'Die leerder is reg — 1 499 rond af na 1 400 omdat die honderde-syfer 4 is.', 'Die leerder is verkeerd — 1 499 rond af na 1 000 omdat die duisende-syfer 1 is.'], correctIndex: 1, explanation: 'Om na die naaste 100 af te rond, moet jy die tiene-syfer nagaan, nie die duisende-syfer nie. In 1 499 is die tiene-syfer 9 (≥ 5), dus rond ons op: 1 499 → 1 500 (die honderde- en tiene-syfers verander weens oordrag).' },
        { difficulty: 'Hard', question: 'ʼn Padreis word op ʼn getallelyn gemerk van 0 km tot 1 000 km in intervalle van 100 km. ʼn Russtop is by 380 km. Tussen watter twee merke val dit?', checkMode: 'auto', options: ['200, 300', '300, 380', '300, 400', '380, 400'], correctIndex: 2, explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 380 val tussen die 300-merk en die 400-merk. Die ander opsies kies óf die verkeerde paar merke óf gebruik 380 self as ʼn merk, wat nie toegelaat word nie aangesien slegs veelvoude van 100 gemerk is.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 8 000 na 9 000 in intervalle van 100. Watter getal is halfpad tussen 8 200 en 8 300?', checkMode: 'auto', options: ['8 200', '8 300', '8 500', '8 250'], correctIndex: 3, explanation: 'Tel die twee merke bymekaar: 8 200 + 8 300 = 16 500. Deel deur 2: 16 500 ÷ 2 = 8 250. Om ʼn eindpunt te kies, ignoreer dat halfpad presies in die middel beteken, en 8 500 tel verkeerdelik op in plaas daarvan om te deel.' },
        { difficulty: 'Hard', question: 'ʼn Biblioteek het aangeteken dat 3 299 boeke hierdie maand uitgeneem is. Een assistent rond dit af na die naaste 10 vir die weeklikse plakkaat, terwyl die hoofbibliotekaris dit na die naaste 100 afrond vir die jaarverslag. Watter opsie gee albei afgeronde getalle korrek en identifiseer watter een nader aan die werklike 3 299 boeke is?', checkMode: 'auto', options: ['Naaste 10 = 3 300; Naaste 100 = 3 300; albei skattings is ewe naby omdat hulle na dieselfde getal afrond.', 'Naaste 10 = 3 290; Naaste 100 = 3 300; die naaste-10-skatting is nader.', 'Naaste 10 = 3 300; Naaste 100 = 3 200; die naaste-100-skatting is nader.', 'Naaste 10 = 3 300; Naaste 100 = 3 300; die naaste-10-skatting is altyd nader, ongeag die getalle.'], correctIndex: 0, explanation: 'Naaste 10: ene-syfer 9 (≥ 5), rond op → 3 300. Naaste 100: tiene-syfer 9 (≥ 5), rond op → 3 300. Aangesien albei afrondings op 3 300 land, is geeneen hier meer akkuraat nie — hulle is presies dieselfde afstand (1) van 3 299 af.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue plekwaarde, vergelyking, afronding en getallelyne hanteer.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiuit, meer werklike-lewe konteks en redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Watter een van hierdie getalle is ʼn heelgetal?', checkMode: 'auto', options: ['9⅓', '9,33', '100', '⅓'], correctIndex: 2, explanation: '100 is ʼn volledige telgetal sonder ʼn breuk- of desimale deel, dus is dit ʼn heelgetal. 9⅓ het ʼn breukdeel, 9,33 het ʼn desimale deel, en ⅓ is op sy eie ʼn breuk — geeneen hiervan is heelgetalle nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 45 en 50, geskei deur kommas.', checkMode: 'auto', options: ['45, 46, 47, 48, 49, 50', '46, 47, 48', '45, 46, 47, 48, 49', '46, 47, 48, 49'], correctIndex: 3, explanation: '"Tussen" sluit nie 45 of 50 self in nie. Deur van net na 45 tot net voor 50 te tel, kry jy 46, 47, 48, 49. Om 45 en/of 50 in te sluit, of een getal te vroeg te stop, is algemene foute.' },
        { difficulty: 'Easy', question: 'ʼn Biblioteek het 1 406 boeke op een rak. Watter stelling identifiseer korrek die kolom van die syfer 4 en gee 1 406 in uitgebreide notasie?', checkMode: 'auto', options: ['4 is in die Honderde-kolom; 1 406 = 1 000 + 400 + 0 + 6', '4 is in die Tiene-kolom; 1 406 = 1 000 + 40 + 0 + 6', '4 is in die Honderde-kolom; 1 406 = 1 000 + 40 + 0 + 6', '4 is in die Duisende-kolom; 1 406 = 1 000 + 400 + 0 + 6'], correctIndex: 0, explanation: '1 is in die Duisende-kolom (1 000), 4 is in die Honderde-kolom (400), 0 is in die Tiene-kolom (0), 6 is in die Ene-kolom (6). Die verkeerde opsies plaas die 4 in die verkeerde kolom of vergeet om dit met 100 te vermenigvuldig.' },
        { difficulty: 'Easy', question: 'ʼn Winkel het hierdie week 6 235 brode verkoop. Skryf 6 235 in uitgebreide notasie.', checkMode: 'auto', options: ['6 000 + 20 + 30 + 5', '6 000 + 200 + 30 + 5', '6 000 + 200 + 3 + 5', '6 000 + 200 + 30 + 50'], correctIndex: 1, explanation: '6 000 (Duisende) + 200 (Honderde) + 30 (Tiene) + 5 (Ene) = 6 235. Die verkeerde opsies onderskat die Honderde-syfer, onderskat die Tiene-syfer, of voeg ʼn ekstra nul by die Ene-syfer.' },
        { difficulty: 'Easy', question: 'ʼn Skool het 4 327 leerders ingeskryf. Wat is die waarde van die syfer 4 in 4 327?', checkMode: 'auto', options: ['400', '40', '4 000', '4'], correctIndex: 2, explanation: 'Die syfer 4 is in die Duisende-kolom van 4 327, dus is sy waarde 4 000. 400 en 40 sou sy waarde wees in die Honderde- of Tiene-kolom, en 4 ignoreer plekwaarde heeltemal.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Resepteboek se gewildste resep het nommer 5 872. Wat is die waarde van die syfer 5 in 5 872?', checkMode: 'auto', options: ['500', '50', '5', '5 000'], correctIndex: 3, explanation: 'Die syfer 5 is in die Duisende-kolom, dus is sy waarde 5 × 1 000 = 5 000. 500 en 50 sou sy waarde wees in die Honderde- of Tiene-kolom, en 5 ignoreer plekwaarde heeltemal.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stadion se kaartjietoonbord moet ʼn getal wys wat uit 9 duisende, 0 honderde, 0 tiene en 6 ene bestaan. Watter getal moet dit wys?', checkMode: 'auto', options: ['9 006', '9 060', '9 600', '906'], correctIndex: 0, explanation: 'Plaas elke syfer in sy kolom: 9 duisende, 0 honderde, 0 tiene, 6 ene → 9 006. Die verkeerde opsies skuif die 6 na die verkeerde kolom, of laat ʼn plekhouernul weg en verloor ʼn syfer.' },
        { difficulty: 'Medium', question: 'Bongani sê: "In die prys R4 083 is die syfer 8 R8 werd, want 8 beteken altyd net 8." Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Ja — 8 beteken altyd net 8, maak nie saak waar dit sit nie.', 'Nee — die 8 is in die Tiene-kolom, dus is dit R80 werd, nie R8 nie.', 'Ja — aangesien R4 083 vier syfers het, moet die 8 presies R8 werd wees.', 'Nee — die 8 is in die Honderde-kolom, dus is dit R800 werd.'], correctIndex: 1, explanation: 'ʼn Syfer se waarde hang af van waar dit in die getal sit, nie net die syfer self nie. In R4 083 is die 8 in die Tiene-kolom, dus is dit R80 werd, nie R8 nie.' },
        { difficulty: 'Medium', question: 'ʼn Beurtkrag-skedule tel af in stappe elke 10 minute, vanaf 8 080 minute wat oorbly in ʼn projek-aftelling. Skryf die volgende 4 afteltellings, geskei deur kommas.', checkMode: 'auto', options: ['8 070, 8 060, 8 050, 8 030', '8 080, 8 070, 8 060, 8 050', '8 070, 8 060, 8 050, 8 040', '8 070, 7 060, 7 050, 7 040'], correctIndex: 2, explanation: 'Trek 10 elke keer af: 8 080 − 10 = 8 070, dan 8 060, 8 050, 8 040. Die verkeerde opsies trek op ʼn stadium ʼn ekstra 10 af, herhaal die begingetal in plaas van die volgende term, of laat per ongeluk 1 000 val by latere terme.' },
        { difficulty: 'Medium', question: 'ʼn Sakgeld-spaartrekker begin by R3 000 en groei elke maand met R1 000 vir die volgende 4 maande. Skryf die spaartotaal na elk van die volgende 4 maande, geskei deur kommas.', checkMode: 'auto', options: ['R3 000, R4 000, R5 000, R6 000', 'R4 000, R5 000, R6 000, R7 100', 'R4 000, R4 500, R5 000, R5 500', 'R4 000, R5 000, R6 000, R7 000'], correctIndex: 3, explanation: 'Tel 1 000 elke keer by: 3 000 + 1 000 = 4 000, dan 5 000, 6 000, 7 000. Die verkeerde opsies herhaal die beginbedrag in plaas van die volgende maand, gebruik die verkeerde interval, of maak ʼn rekenfout by die laaste term.' },
        { difficulty: 'Medium', question: 'ʼn Markdag-verkoper se daaglikse inkomste volg ʼn patroon: R2 200, R2 350, R2 500 …\n\nWatter opsie gee die reël en die volgende 2 bedrae korrek?', checkMode: 'auto', options: ['Tel R150 by; volgende 2 bedrae: R2 650, R2 800', 'Tel R100 by; volgende 2 bedrae: R2 600, R2 700', 'Tel R150 by; volgende 2 bedrae: R2 500, R2 650', 'Tel R300 by; volgende 2 bedrae: R2 800, R3 100'], correctIndex: 0, explanation: 'Elke bedrag is 150 meer as die een voor dit: 2 350 − 2 200 = 150, 2 500 − 2 350 = 150. Gaan voort: 2 500 + 150 = 2 650, 2 650 + 150 = 2 800. Die verkeerde opsies gebruik die verkeerde interval of herhaal 2 500 in plaas daarvan om daarvandaan voort te gaan.' },
        { difficulty: 'Medium', question: 'Lerato het R2 087 gespaar en Sipho het R9 302 gespaar. Skryf kleiner as, groter as, of gelyk aan vir: Lerato se spaargeld en Sipho se spaargeld.', checkMode: 'auto', options: ['groter as', 'kleiner as', 'gelyk aan', 'kan nie vergelyk word nie omdat dit verskillende bedrae geld is'], correctIndex: 1, explanation: 'Vergelyk die duisende-syfers: 2 087 het 2 duisende, 9 302 het 9 duisende. Aangesien 2 < 9, is Lerato se spaargeld minder as Sipho s\'n.' },
        { difficulty: 'Medium', question: 'Vier sportspanne het hierdie seisoentotale punte behaal: 6 234, 987, 6 432, 1 023. Orden die spanne se punte van kleinste na grootste, geskei deur kommas.', checkMode: 'auto', options: ['987, 1 023, 6 432, 6 234', '6 234, 6 432, 987, 1 023', '987, 1 023, 6 234, 6 432', '1 023, 987, 6 234, 6 432'], correctIndex: 2, explanation: '987 het 3 syfers, dus is dit die kleinste. 1 023 het 4 syfers met 1 duisend. 6 234 en 6 432 het albei 6 duisende — vergelyk honderde: 2 < 4, dus is 6 234 < 6 432. Korrekte volgorde: 987, 1 023, 6 234, 6 432. Die verkeerde opsies verwissel 6 234 en 6 432, ignoreer syfer-telling deur die kleiner getalle eerste te plaas, of verwissel 987 en 1 023.' },
        { difficulty: 'Medium', question: 'Twee naburige dorpe het bevolkings van 4 001 en 3 987. ʼn Leerder beweer die dorp met 3 987 mense is groter omdat dit ʼn 9 in die honderde-kolom het. Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Ja — 9 is groter as 0, dus geld die redenasie.', 'Ja — 3 987 het ʼn 9 daarin, en 4 001 nie, dus moet 3 987 groter wees.', 'Nee — 4 001 en 3 987 het eintlik gelyke bevolkings.', 'Nee — die duisende-syfer moet eerste vergelyk word; 4 001 het 4 duisende en 3 987 het net 3 duisende, dus is 4 001 groter.'], correctIndex: 3, explanation: 'Die duisende-syfer moet eerste vergelyk word. 4 001 het 4 duisende en 3 987 het net 3 duisende. Aangesien 4 > 3, is die dorp met 4 001 mense groter, maak nie saak wat die kleiner kolomme se syfers wys nie.' },
        { difficulty: 'Medium', question: 'ʼn Hardloper het ʼn wedloop van 2 350 meter voltooi. Rond hierdie afstand af na die naaste 100 meter.', checkMode: 'auto', options: ['2 400', '2 300', '2 350', '2 360'], correctIndex: 0, explanation: 'Die tiene-syfer is 5 (≥ 5), dus rond ons op: 2 350 → 2 400. 2 300 rond verkeerdelik af, 2 350 laat die getal onafgerond, en 2 360 rond na die naaste 10 af in plaas van 100.' },
        { difficulty: 'Medium', question: 'ʼn Skenkingsveldtog het 6 784 blikkies kos ingesamel. Rond hierdie getal af na die naaste 10 om in ʼn eenvoudige verslag te skryf.', checkMode: 'auto', options: ['6 790', '6 780', '6 800', '6 770'], correctIndex: 1, explanation: 'Die ene-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780. 6 790 rond verkeerdelik op, 6 800 rond na die naaste 100 af in plaas van 10, en 6 770 trek een tiental te veel af.' },
        { difficulty: 'Medium', question: 'ʼn Motorhandelaar het hierdie jaar 9 450 motors verkoop. Rond hierdie getal af na die naaste 1 000 vir die jaarverslag.', checkMode: 'auto', options: ['9 500', '10 000', '9 000', '9 450'], correctIndex: 2, explanation: 'Die honderde-syfer is 4 (< 5), dus rond ons af: 9 450 → 9 000. 9 500 rond na die naaste 100 af in plaas van 1 000, 10 000 rond verkeerdelik op, en 9 450 laat die getal onafgerond.' },
        { difficulty: 'Hard', question: 'ʼn Bioskoop se sitplekkaart is op ʼn getallelyn gemerk van 0 tot 1 000 in intervalle van 100. Sitplek nommer 720 moet vinnig gevind word. Tussen watter twee merke val dit?', checkMode: 'auto', options: ['600, 700', '700, 720', '720, 800', '700, 800'], correctIndex: 3, explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 720 val tussen die 700-merk en die 800-merk. Die ander opsies kies óf die verkeerde paar merke óf gebruik 720 self as ʼn merk, wat nie toegelaat word nie aangesien slegs veelvoude van 100 gemerk is.' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheids-opspoorder is ʼn getallelyn van 5 000 tot 6 000 in intervalle van 100. Watter skenkingsbedrag sit presies halfpad tussen 5 400 en 5 500?', checkMode: 'auto', options: ['5 450', '5 400', '5 500', '5 900'], correctIndex: 0, explanation: 'Tel die twee merke bymekaar: 5 400 + 5 500 = 10 900. Deel deur 2: 10 900 ÷ 2 = 5 450. Om ʼn eindpunt te kies, ignoreer dat halfpad presies in die middel beteken, en 5 900 tel verkeerdelik op in plaas daarvan om te deel.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 4 763 skape. Hy rond dit af na die naaste 10 vir ʼn vinnige koptelling, en apart na die naaste 100 vir die koöperasie se amptelike verslag. Watter opsie gee albei afgeronde getalle korrek en identifiseer watter een van die twee nader aan sy werklike trop van 4 763 is?', checkMode: 'auto', options: ['Naaste 10 = 4 770; Naaste 100 = 4 800; die naaste-100-skatting is nader.', 'Naaste 10 = 4 760; Naaste 100 = 4 800; die naaste-10-skatting is nader.', 'Naaste 10 = 4 760; Naaste 100 = 4 700; die naaste-100-skatting is nader.', 'Naaste 10 = 4 760; Naaste 100 = 4 800; albei skattings is ewe naby.'], correctIndex: 1, explanation: 'Naaste 10: ene-syfer 3 (< 5), rond af → 4 760. Naaste 100: tiene-syfer 6 (≥ 5), rond op → 4 800. Afstande vanaf 4 763: 4 763 − 4 760 = 3, terwyl 4 800 − 4 763 = 37. Aangesien 3 < 37, is die naaste-10-skatting nader.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan plekwaarde, vergelyking, afronding en getallelyne op werklike-lewe probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
