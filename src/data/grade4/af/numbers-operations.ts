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
  answer: string
  checkMode: 'auto' | 'self'
  correctAnswer?: string
  correctAnswers?: string[]
  explanation?: string
  parts?: QuestionPart[]
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
        'Heelgetalle sluit nie breuke in (soos ½) of desimale getalle (soos 3,5) nie. Hulle is altyd volledige, heelal hoeveelhede sonder iets wat oorskiet. ' +
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
<div style="overflow-x:auto;margin-top:16px;margin-bottom:16px"><table style="border-collapse:collapse;font-size:0.95em;width:100%"><thead><tr><th style="padding:10px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Duisende</th><th style="padding:10px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:10px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:10px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Eenhede</th></tr></thead><tbody><tr><td style="padding:12px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.3em;text-align:center">4</td><td style="padding:12px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.3em;text-align:center">3</td><td style="padding:12px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.3em;text-align:center">2</td><td style="padding:12px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.3em;text-align:center">7</td></tr></tbody></table></div>
<p>Die getal wat in die tabel getoon word, is <strong>4 327</strong>. Die <span style="color:#dc2626;font-weight:700">4</span> sit in die Duisende-kolom, dus is dit werd <span style="color:#dc2626;font-weight:700">4 000</span>. Die <span style="color:#d97706;font-weight:700">3</span> sit in die Honderde-kolom, dus is dit werd <span style="color:#d97706;font-weight:700">300</span>. Die <span style="color:#16a34a;font-weight:700">2</span> sit in die Tiene-kolom, dus is dit werd <span style="color:#16a34a;font-weight:700">20</span>. Die <span style="color:#2563eb;font-weight:700">7</span> sit in die Eenhede-kolom, dus is dit werd <span style="color:#2563eb;font-weight:700">7</span>.</p>
<p style="margin-top:14px">Ons kan dit in <strong>uitgebreide notasie</strong> skryf — die getal opbreek om die waarde van elke syfer te toon:</p>
<p style="margin-top:10px;font-size:1.05em;padding:8px 0">4 327 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">4 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">300</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">20</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">7</span></p>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Plekwaardetabel wat 4 327 toon met elke syfer kleur-gekodeer — Duisende rooi, Honderde geel, Tiene groen, Eenhede blou</div>`,
      workedExamples: [
        {
          question: 'Skryf 7 054 in ʼn plekwaardetabel en in uitgebreide notasie. Wys elke stap.',
          answer: '7 054 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">7 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">0</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">50</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">4</span>',
          steps: [
            'Plaas elke syfer in die korrekte kolom:<br><br><div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:0.9em"><thead><tr><th style="padding:8px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Duisende</th><th style="padding:8px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Honderde</th><th style="padding:8px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tiene</th><th style="padding:8px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Eenhede</th></tr></thead><tbody><tr><td style="padding:10px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.2em;text-align:center">7</td><td style="padding:10px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.2em;text-align:center">0</td><td style="padding:10px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.2em;text-align:center">5</td><td style="padding:10px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.2em;text-align:center">4</td></tr></tbody></table></div>',
            '<span style="color:#dc2626;font-weight:700">7</span> is in die Duisende-kolom → sy waarde is <span style="color:#dc2626;font-weight:700">7 000</span>.',
            '<span style="color:#d97706;font-weight:700">0</span> is in die Honderde-kolom → sy waarde is <span style="color:#d97706;font-weight:700">0</span> (daar is geen honderde in hierdie getal nie).',
            '<span style="color:#16a34a;font-weight:700">5</span> is in die Tiene-kolom → sy waarde is <span style="color:#16a34a;font-weight:700">50</span>.',
            '<span style="color:#2563eb;font-weight:700">4</span> is in die Eenhede-kolom → sy waarde is <span style="color:#2563eb;font-weight:700">4</span>.',
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
<p style="margin-top:10px"><strong>Stap 3</strong> — As die <span style="color:#dc2626;font-weight:700">duisende</span>-syfers gelyk is, vergelyk die <span style="color:#d97706;font-weight:700">honderde</span>-syfers. As dié ook gelyk is, vergelyk die <span style="color:#16a34a;font-weight:700">tiene</span>-syfers. As dié ook gelyk is, vergelyk die <span style="color:#2563eb;font-weight:700">eenhede</span>-syfers.</p>`,
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
<li><strong>Afronding na die naaste 10</strong> — kyk na die <span style="color:#2563eb;font-weight:700">eenhede-syfer</span> (die blou kolom). Vervang die eenhede-syfer met 0.</li>
<li><strong>Afronding na die naaste 100</strong> — kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> (die groen kolom). Vervang die tiene- en eenhede-syfers met 0.</li>
</ul>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Getallelyn wat 3 467 tussen 3 460 en 3 470 toon met ʼn pyl wat na 3 470 wys</div>`,
      workedExamples: [
        {
          question: 'Rond 3 467 af na die naaste 10.',
          answer: '3 470',
          steps: [
            '<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 10, dus kyk ons na die <span style="color:#2563eb;font-weight:700">eenhede-syfer</span>. In 3 467 is die eenhede-syfer <span style="color:#2563eb;font-weight:700">7</span>.',
            '<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is <span style="color:#2563eb;font-weight:700">7</span>. Omdat 7 5 of meer is, <strong>rond ons op</strong> — tel 1 by die tiene-syfer.',
            '<strong>Stap 3 — Vervang en skryf die antwoord.</strong> Die tiene-syfer was 6. Tel 1 by: 6 + 1 = 7. Vervang die eenhede-syfer met 0.',
            'Antwoord: <strong>3 470</strong>.',
          ],
        },
        {
          question: 'Rond 5 234 af na die naaste 100.',
          answer: '5 200',
          steps: [
            '<strong>Stap 1 — Identifiseer die bepalende syfer.</strong> Ons rond af na die naaste 100, dus kyk ons na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>. In 5 234 is die tiene-syfer <span style="color:#16a34a;font-weight:700">3</span>.',
            '<strong>Stap 2 — Pas die afrondingsreël toe.</strong> Die bepalende syfer is <span style="color:#16a34a;font-weight:700">3</span>. Omdat 3 kleiner as 5 is, <strong>rond ons af</strong> — die honderde-syfer bly dieselfde.',
            '<strong>Stap 3 — Vervang en skryf die antwoord.</strong> Die honderde-syfer bly as 2. Vervang beide die tiene- en eenhede-syfers met 0.',
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
        { difficulty: 'Easy', question: 'Watter een van hierdie is ʼn heelgetal: 8 of 3½?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 is ʼn volledige telgetal sonder ʼn breukdeel, dus is dit ʼn heelgetal. 3½ het ʼn breukdeel, dus is dit nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 6 en 11, geskei deur kommas.', answer: '7, 8, 9, 10', checkMode: 'auto', correctAnswer: '78910', correctAnswers: ['78910'], explanation: '"Tussen" sluit nie 6 of 11 self in nie. Deur van net na 6 tot net voor 11 te tel, kry jy 7, 8, 9, 10.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 4 in die Duisende-kolom, 3 in die Honderde-kolom, 2 in die Tiene-kolom en 7 in die Eenhede-kolom. Wat is die getal?', answer: '4 327', checkMode: 'auto', correctAnswer: '4327', correctAnswers: ['4327', '4 327'], explanation: 'Deur die kolomme van links na regs te lees (Duisende, Honderde, Tiene, Eenhede) kry jy 4 327.' },
        { difficulty: 'Easy', question: 'Skryf die getal 4 327 in uitgebreide notasie.', answer: '4 000 + 300 + 20 + 7', checkMode: 'auto', correctAnswer: '4000+300+20+7', correctAnswers: ['4000+300+20+7'], explanation: '4 is in die Duisende-kolom (4 000), 3 is in die Honderde-kolom (300), 2 is in die Tiene-kolom (20), 7 is in die Eenhede-kolom (7).' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 6 in 6 431?', answer: '6 000', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'Die syfer 6 is in die Duisende-kolom, dus is sy waarde 6 × 1 000 = 6 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Liefdadigheidskonsert het 6 194 kaartjies verkoop. Kyk na die syfer 9 in die kaartjietotaal — in watter kolom is dit, en wat is sy waarde?', answer: 'Tiene-kolom; waarde is 90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: 'Die syfer 9 in 6 194 is in die Tiene-kolom, dus is sy waarde 9 × 10 = 90.' },
        { difficulty: 'Easy-Medium', question: 'Skryf die getal wat 4 duisende, 0 honderde, 8 tiene en 3 eenhede het.', answer: '4 083', checkMode: 'auto', correctAnswer: '4083', correctAnswers: ['4083', '4 083'], explanation: 'Plaas elke syfer in sy kolom: 4 duisende, 0 honderde, 8 tiene, 3 eenhede → 4 083.' },
        { difficulty: 'Medium', question: 'Zanele sê: "Die waarde van ʼn syfer is net die syfer self — dit maak nie saak waar dit in die getal is nie." Sy gebruik dit om te beweer dat die syfer 6 in 6 431 net 6 werd is. Is Zanele korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Syfer se waarde hang af van sy posisie (plekwaarde). Die 6 in 6 431 is in die Duisende-kolom, dus is dit 6 000 werd, nie net 6 nie. Zanele ignoreer plekwaarde.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 1e vanaf 4 996. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '4 997, 4 998, 4 999, 5 000', checkMode: 'auto', correctAnswer: '4997499849995000', correctAnswers: ['4997499849995000'], explanation: 'Tel 1 elke keer by: 4 996 + 1 = 4 997, dan 4 998, 4 999, 5 000. Let op hoe die duisende-syfer verander sodra die eenhede, tiene en honderde almal van 9 af omslaan.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 100e vanaf 9 200. Skryf die volgende 5 getalle, geskei deur kommas.', answer: '9 100, 9 000, 8 900, 8 800, 8 700', checkMode: 'auto', correctAnswer: '91009000890088008700', correctAnswers: ['91009000890088008700'], explanation: 'Trek 100 elke keer af: 9 200 − 100 = 9 100, dan 9 000, 8 900, 8 800, 8 700.' },
        { difficulty: 'Medium', question: 'ʼn Getalpatroon gaan: 1 250, 1 350, 1 450 …\n\nWat is die reël, en wat is die volgende 2 getalle? Skryf die volgende 2 getalle geskei deur ʼn komma.', answer: 'Tel 100 elke keer by. Volgende 2 getalle: 1 550, 1 650', checkMode: 'auto', correctAnswer: '15501650', correctAnswers: ['15501650'], explanation: 'Elke getal is 100 meer as die een voor dit: 1 350 − 1 250 = 100, 1 450 − 1 350 = 100. Gaan voort: 1 450 + 100 = 1 550, 1 550 + 100 = 1 650.' },
        { difficulty: 'Medium', question: 'Skryf kleiner as, groter as, of gelyk aan: 3 456 en 3 654.', answer: 'kleiner as', checkMode: 'auto', correctAnswer: 'kleineras', correctAnswers: ['kleineras'], explanation: 'Vergelyk die honderde-syfers: 3 4__ vs 3 6__. Aangesien 4 < 6, is 3 456 kleiner as 3 654.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 5 148, 876, 5 481, 2 019', answer: '876, 2 019, 5 148, 5 481', checkMode: 'auto', correctAnswer: '876201951485481', correctAnswers: ['876201951485481'], explanation: '876 het 3 syfers, dus is dit die kleinste. 2 019 het 4 syfers met 2 duisende. 5 148 en 5 481 het albei 5 duisende — vergelyk honderde: 1 < 4, dus is 5 148 < 5 481. Volgorde: 876, 2 019, 5 148, 5 481.' },
        { difficulty: 'Medium', question: 'Thabo sê 3 987 is groter as 4 001 omdat die syfer 9 groter as 0 is. Is Thabo korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Jy moet altyd die hoogste plekwaarde eerste vergelyk. 3 987 het 3 duisende en 4 001 het 4 duisende. Aangesien 4 > 3, is 4 001 groter, maak nie saak wat die ander syfers is nie.' },
        { difficulty: 'Medium', question: 'ʼn Bakker het 3 456 gram meel nodig vir ʼn groot bestelling. Rond hierdie massa af na die naaste 10 gram sodat dit netjies op die resepkaart pas.', answer: '3 460', checkMode: 'auto', correctAnswer: '3460', correctAnswers: ['3460', '3 460'], explanation: 'Die eenhede-syfer is 6 (≥ 5), dus rond ons op: 3 456 → 3 460.' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsgeleentheid het R5 234 ingesamel. Die nuusbrief wil die totaal afgerond na die naaste R100 rapporteer. Watter bedrag moet dit druk?', answer: 'R5 200', checkMode: 'auto', correctAnswer: '5200', correctAnswers: ['5200', '5 200'], explanation: 'Die tiene-syfer is 3 (< 5), dus rond ons af: 5 234 → 5 200.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat afronding van 5 999 na die naaste 10 die getal amper onveranderd laat, "want ons rond net die eenhede af." Wys die werklike afgeronde antwoord en verduidelik waarom verskeie syfers verander.', answer: '6 000 — verskeie syfers verander weens oordrag', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'Die eenhede-syfer is 9 (≥ 5), dus rond ons op: 5 999 → 6 000. Al is die eenhede-kolom die "beslissende syfer," veroorsaak die opronding dat die tiene-, honderde- en duisende-syfers almal verander weens oordrag — die bewering is misleidend.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 0 na 1 000 in intervalle van 100. Tussen watter twee getalle sit 650? Skryf die twee getalle geskei deur ʼn komma.', answer: '600, 700', checkMode: 'auto', correctAnswer: '600700', correctAnswers: ['600700'], explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 650 val tussen die 600-merk en die 700-merk.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 3 000 na 4 000 in intervalle van 100. Watter getal is halfpad tussen 3 400 en 3 500?', answer: '3 450', checkMode: 'auto', correctAnswer: '3450', correctAnswers: ['3450', '3 450'], explanation: 'Tel die twee merke bymekaar: 3 400 + 3 500 = 6 900. Deel deur 2: 6 900 ÷ 2 = 3 450.' },
        { difficulty: 'Hard', question: 'ʼn Konsertsaal het 3 847 mense by ʼn vertoning gehad. Die saalbestuurder wil ʼn maklik-leesbare skatting afgerond na die naaste 100 wys, terwyl ʼn nuusverslag dieselfde skare na die naaste 10 afrond vir ʼn "finale telling". Skryf albei afgeronde getalle (naaste 100 eerste, dan naaste 10), sê dan watter een nader aan die werklike skare van 3 847 is.', answer: 'Naaste 100 = 3 800; Naaste 10 = 3 850; die naaste-10-skatting (3 850) is nader.', checkMode: 'auto', correctAnswer: '38003850', correctAnswers: ['38003850', '3800 3850 naaste10', '3 800, 3 850, naaste 10'], explanation: 'Naaste 100: tiene-syfer 4 (< 5), rond af → 3 800. Naaste 10: eenhede-syfer 7 (≥ 5), rond op → 3 850. Afstande vanaf 3 847: 3 847 − 3 800 = 47, terwyl 3 850 − 3 847 = 3. Aangesien 3 < 47, is die naaste-10-skatting nader.' },
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
        { difficulty: 'Easy', question: 'Watter een van hierdie is ʼn heelgetal: 15 of 4¾?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: '15 is ʼn volledige telgetal sonder ʼn breukdeel, dus is dit ʼn heelgetal. 4¾ het ʼn breukdeel, dus is dit nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 20 en 26, geskei deur kommas.', answer: '21, 22, 23, 24, 25', checkMode: 'auto', correctAnswer: '2122232425', correctAnswers: ['2122232425'], explanation: '"Tussen" sluit nie 20 of 26 self in nie. Deur van net na 20 tot net voor 26 te tel, kry jy 21, 22, 23, 24, 25.' },
        { difficulty: 'Easy', question: 'ʼn Getal het 7 in die Duisende-kolom, 0 in die Honderde-kolom, 5 in die Tiene-kolom en 4 in die Eenhede-kolom. Wat is die getal?', answer: '7 054', checkMode: 'auto', correctAnswer: '7054', correctAnswers: ['7054', '7 054'], explanation: 'Deur die kolomme van links na regs te lees (Duisende, Honderde, Tiene, Eenhede) kry jy 7 054.' },
        { difficulty: 'Easy', question: 'Skryf die getal 7 054 in uitgebreide notasie.', answer: '7 000 + 0 + 50 + 4', checkMode: 'auto', correctAnswer: '7000+0+50+4', correctAnswers: ['7000+0+50+4'], explanation: '7 000 (Duisende) + 0 (Honderde) + 50 (Tiene) + 4 (Eenhede) = 7 054.' },
        { difficulty: 'Easy', question: 'Wat is die waarde van die syfer 6 in 2 640?', answer: '600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600'], explanation: 'Die syfer 6 is in die Honderde-kolom, dus is sy waarde 6 × 100 = 600.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Muntoutomaat het vanjaar 3 516 verkope aangeteken. Kyk na die syfer 6 in daardie totaal — in watter kolom is dit, en wat is sy waarde?', answer: 'Eenhede-kolom; waarde is 6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Die syfer 6 in 3 516 is in die Eenhede-kolom, dus is sy waarde 6 × 1 = 6.' },
        { difficulty: 'Easy-Medium', question: 'Skryf die getal wat 5 duisende, 2 honderde, 1 tien en 8 eenhede het.', answer: '5 218', checkMode: 'auto', correctAnswer: '5218', correctAnswers: ['5218', '5 218'], explanation: 'Plaas elke syfer in sy kolom: 5 duisende, 2 honderde, 1 tien, 8 eenhede → 5 218.' },
        { difficulty: 'Medium', question: 'Kagiso sê: "3 062 en 3 620 moet gelyk wees, want hulle gebruik presies dieselfde vier syfers." Is Kagiso korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Om dieselfde syfers te gebruik maak nie getalle gelyk nie — posisie maak saak. In 3 062 is die 6 60 werd, maar in 3 620 is die 6 600 werd. As jy kolom vir kolom vergelyk, is 3 620 groter as 3 062.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 10e vanaf 2 345. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '2 355, 2 365, 2 375, 2 385', checkMode: 'auto', correctAnswer: '2355236523752385', correctAnswers: ['2355236523752385'], explanation: 'Tel 10 elke keer by: 2 345 + 10 = 2 355, dan 2 365, 2 375, 2 385.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 1 000e vanaf 6 000. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '7 000, 8 000, 9 000, 10 000', checkMode: 'auto', correctAnswer: '70008000900010000', correctAnswers: ['70008000900010000'], explanation: 'Tel 1 000 elke keer by: 6 000 + 1 000 = 7 000, dan 8 000, 9 000, 10 000 — let op hoe daar ʼn vyfde syfer verskyn sodra ons oor 9 999 beweeg.' },
        { difficulty: 'Medium', question: 'ʼn Getalpatroon gaan: 8 400, 8 300, 8 200 …\n\nWat is die reël, en wat is die volgende 2 getalle? Skryf die volgende 2 getalle geskei deur ʼn komma.', answer: 'Trek 100 elke keer af. Volgende 2 getalle: 8 100, 8 000', checkMode: 'auto', correctAnswer: '81008000', correctAnswers: ['81008000'], explanation: 'Elke getal is 100 minder as die een voor dit: 8 400 − 8 300 = 100, 8 300 − 8 200 = 100. Gaan voort: 8 200 − 100 = 8 100, 8 100 − 100 = 8 000.' },
        { difficulty: 'Medium', question: 'Skryf kleiner as, groter as, of gelyk aan: 7 001 en 7 001.', answer: 'gelyk aan', checkMode: 'auto', correctAnswer: 'gelykaan', correctAnswers: ['gelykaan'], explanation: 'Elke syfer is dieselfde, dus is 7 001 = 7 001.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 5 032, 4 999, 5 320, 4 909', answer: '4 909, 4 999, 5 032, 5 320', checkMode: 'auto', correctAnswer: '4909499950325320', correctAnswers: ['4909499950325320'], explanation: 'Vergelyk eers die duisende: 4 909 en 4 999 (4 duisende) is kleiner as 5 032 en 5 320 (5 duisende). Vergelyk dan binne elke paar deur honderde/tiene: 4 909 < 4 999 en 5 032 < 5 320. Volgorde: 4 909, 4 999, 5 032, 5 320.' },
        { difficulty: 'Medium', question: 'Naledi sê dat 6 083 kleiner is as 5 999 omdat 0 kleiner is as 9 in die honderde-kolom. Is Naledi korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Jy moet altyd eers die duisende-syfer vergelyk. 6 083 het 6 duisende en 5 999 het 5 duisende. Aangesien 6 > 5, is 6 083 groter, maak nie saak wat die honderde-syfers is nie.' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsbestelwa het vanmaand 6 784 km gery. Rond hierdie afstand af na die naaste 10 km vir die bestuurder se logboek.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'Die eenhede-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'ʼn Plaas het 7 849 kg mielies geoes. Die koöperasie wil dit afgerond na die naaste 100 kg rapporteer. Watter syfer moet op die verslag verskyn?', answer: '7 800 kg', checkMode: 'auto', correctAnswer: '7800', correctAnswers: ['7800', '7 800'], explanation: 'Die tiene-syfer is 4 (< 5), dus rond ons af: 7 849 → 7 800.' },
        { difficulty: 'Medium', question: 'ʼn Leerder rond 1 499 af na die naaste 100 en skryf 1 400, met die argument "die eerste syfer is 1, dus moet dit afrond." Wys die korrekte afgeronde antwoord en verduidelik die leerder se fout.', answer: '1 500 — die leerder het na die verkeerde syfer gekyk', checkMode: 'auto', correctAnswer: '1500', correctAnswers: ['1500', '1 500'], explanation: 'Om na die naaste 100 af te rond, moet jy die tiene-syfer nagaan, nie die duisende-syfer nie. In 1 499 is die tiene-syfer 9 (≥ 5), dus rond ons op: 1 499 → 1 500 (die honderde- en tiene-syfers verander weens oordrag).' },
        { difficulty: 'Hard', question: 'ʼn Padreis word op ʼn getallelyn gemerk van 0 km tot 1 000 km in intervalle van 100 km. ʼn Russtop is by 380 km. Tussen watter twee merke val dit? Skryf die twee getalle geskei deur ʼn komma.', answer: '300, 400', checkMode: 'auto', correctAnswer: '300400', correctAnswers: ['300400'], explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 380 val tussen die 300-merk en die 400-merk.' },
        { difficulty: 'Hard', question: 'ʼn Getallelyn gaan van 8 000 na 9 000 in intervalle van 100. Watter getal is halfpad tussen 8 200 en 8 300?', answer: '8 250', checkMode: 'auto', correctAnswer: '8250', correctAnswers: ['8250', '8 250'], explanation: 'Tel die twee merke bymekaar: 8 200 + 8 300 = 16 500. Deel deur 2: 16 500 ÷ 2 = 8 250.' },
        { difficulty: 'Hard', question: 'ʼn Biblioteek het aangeteken dat 3 299 boeke hierdie maand uitgeneem is. Een assistent rond dit af na die naaste 10 vir die weeklikse plakkaat, terwyl die hoofbibliotekaris dit na die naaste 100 afrond vir die jaarverslag. Skryf albei afgeronde getalle (naaste 10 eerste, dan naaste 100), verduidelik dan in een sin watter een nader aan die werklike 3 299 boeke is.', answer: 'Naaste 10 = 3 300; Naaste 100 = 3 300; albei skattings is ewe naby omdat hulle na dieselfde getal afrond.', checkMode: 'auto', correctAnswer: '33003300', correctAnswers: ['33003300', '3300 3300 gelyk', '3 300, 3 300, ewe naby'], explanation: 'Naaste 10: eenhede-syfer 9 (≥ 5), rond op → 3 300. Naaste 100: tiene-syfer 9 (≥ 5), rond op → 3 300. Aangesien albei afrondings op 3 300 land, is geeneen hier meer akkuraat nie — hulle is presies dieselfde afstand (1) van 3 299 af.' },
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
        { difficulty: 'Easy', question: 'Watter een van hierdie is ʼn heelgetal: 100 of 9⅓?', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: '100 is ʼn volledige telgetal sonder ʼn breukdeel, dus is dit ʼn heelgetal. 9⅓ het ʼn breukdeel, dus is dit nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 45 en 50, geskei deur kommas.', answer: '46, 47, 48, 49', checkMode: 'auto', correctAnswer: '46474849', correctAnswers: ['46474849'], explanation: '"Tussen" sluit nie 45 of 50 self in nie. Deur van net na 45 tot net voor 50 te tel, kry jy 46, 47, 48, 49.' },
        { difficulty: 'Easy', question: 'ʼn Biblioteek het 1 406 boeke op een rak. Kyk na die syfer 4 in 1 406 — in watter kolom is dit, en wat is die getal in uitgebreide notasie?', answer: '4 is in die Honderde-kolom; 1 406 = 1 000 + 400 + 0 + 6', checkMode: 'auto', correctAnswer: '1000+400+0+6', correctAnswers: ['1000+400+0+6', 'honderde1000+400+0+6'], explanation: '1 is in die Duisende-kolom (1 000), 4 is in die Honderde-kolom (400), 0 is in die Tiene-kolom (0), 6 is in die Eenhede-kolom (6).' },
        { difficulty: 'Easy', question: 'ʼn Winkel het hierdie week 6 235 brode verkoop. Skryf 6 235 in uitgebreide notasie.', answer: '6 000 + 200 + 30 + 5', checkMode: 'auto', correctAnswer: '6000+200+30+5', correctAnswers: ['6000+200+30+5'], explanation: '6 000 (Duisende) + 200 (Honderde) + 30 (Tiene) + 5 (Eenhede) = 6 235.' },
        { difficulty: 'Easy', question: 'ʼn Skool het 4 327 leerders ingeskryf. Wat is die waarde van die syfer 4 in 4 327?', answer: '4 000', checkMode: 'auto', correctAnswer: '4000', correctAnswers: ['4000', '4 000'], explanation: 'Die syfer 4 is in die Duisende-kolom van 4 327, dus is sy waarde 4 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Resepteboek se gewildste resep het nommer 5 872. Wat is die waarde van die syfer 5 in 5 872?', answer: '5 000', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5 000'], explanation: 'Die syfer 5 is in die Duisende-kolom, dus is sy waarde 5 × 1 000 = 5 000.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stadion se kaartjietoonbord moet ʼn getal wys wat uit 9 duisende, 0 honderde, 0 tiene en 6 eenhede bestaan. Watter getal moet dit wys?', answer: '9 006', checkMode: 'auto', correctAnswer: '9006', correctAnswers: ['9006', '9 006'], explanation: 'Plaas elke syfer in sy kolom: 9 duisende, 0 honderde, 0 tiene, 6 eenhede → 9 006.' },
        { difficulty: 'Medium', question: 'Bongani sê: "In die prys R4 083 is die syfer 8 R8 werd, want 8 beteken altyd net 8." Is Bongani korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'ʼn Syfer se waarde hang af van waar dit in die getal sit, nie net die syfer self nie. In R4 083 is die 8 in die Tiene-kolom, dus is dit R80 werd, nie R8 nie.' },
        { difficulty: 'Medium', question: 'ʼn Beurtkrag-skedule tel af in stappe elke 10 minute, vanaf 8 080 minute wat oorbly in ʼn projek-aftelling. Skryf die volgende 4 afteltellings, geskei deur kommas.', answer: '8 070, 8 060, 8 050, 8 040', checkMode: 'auto', correctAnswer: '8070806080508040', correctAnswers: ['8070806080508040'], explanation: 'Trek 10 elke keer af: 8 080 − 10 = 8 070, dan 8 060, 8 050, 8 040.' },
        { difficulty: 'Medium', question: 'ʼn Sakgeld-spaartrekker begin by R3 000 en groei elke maand met R1 000 vir die volgende 4 maande. Skryf die spaartotaal na elk van die volgende 4 maande, geskei deur kommas.', answer: 'R4 000, R5 000, R6 000, R7 000', checkMode: 'auto', correctAnswer: '4000500060007000', correctAnswers: ['4000500060007000'], explanation: 'Tel 1 000 elke keer by: 3 000 + 1 000 = 4 000, dan 5 000, 6 000, 7 000.' },
        { difficulty: 'Medium', question: 'ʼn Markdag-verkoper se daaglikse inkomste volg ʼn patroon: R2 200, R2 350, R2 500 …\n\nWat is die reël, en wat sou die volgende 2 bedrae wees? Skryf die volgende 2 bedrae geskei deur ʼn komma.', answer: 'Tel 150 elke keer by. Volgende 2 bedrae: R2 650, R2 800', checkMode: 'auto', correctAnswer: '26502800', correctAnswers: ['26502800'], explanation: 'Elke bedrag is 150 meer as die een voor dit: 2 350 − 2 200 = 150, 2 500 − 2 350 = 150. Gaan voort: 2 500 + 150 = 2 650, 2 650 + 150 = 2 800.' },
        { difficulty: 'Medium', question: 'Lerato het R2 087 gespaar en Sipho het R9 302 gespaar. Skryf kleiner as, groter as, of gelyk aan vir: Lerato se spaargeld en Sipho se spaargeld.', answer: 'kleiner as', checkMode: 'auto', correctAnswer: 'kleineras', correctAnswers: ['kleineras'], explanation: 'Vergelyk die duisende-syfers: 2 087 het 2 duisende, 9 302 het 9 duisende. Aangesien 2 < 9, is Lerato se spaargeld minder as Sipho s\'n.' },
        { difficulty: 'Medium', question: 'Vier sportspanne het hierdie seisoentotale punte behaal: 6 234, 987, 6 432, 1 023. Orden die spanne se punte van kleinste na grootste, geskei deur kommas.', answer: '987, 1 023, 6 234, 6 432', checkMode: 'auto', correctAnswer: '987102362346432', correctAnswers: ['987102362346432'], explanation: '987 het 3 syfers, dus is dit die kleinste. 1 023 het 4 syfers met 1 duisend. 6 234 en 6 432 het albei 6 duisende — vergelyk honderde: 2 < 4, dus is 6 234 < 6 432. Volgorde: 987, 1 023, 6 234, 6 432.' },
        { difficulty: 'Medium', question: 'Twee naburige dorpe het bevolkings van 4 001 en 3 987. ʼn Leerder beweer die dorp met 3 987 mense is groter omdat dit ʼn 9 in die honderde-kolom het. Is dit korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Die duisende-syfer moet eerste vergelyk word. 4 001 het 4 duisende en 3 987 het net 3 duisende. Aangesien 4 > 3, is die dorp met 4 001 mense groter, maak nie saak wat die kleiner kolomme se syfers wys nie.' },
        { difficulty: 'Medium', question: 'ʼn Hardloper het ʼn wedloop van 2 350 meter voltooi. Rond hierdie afstand af na die naaste 100 meter.', answer: '2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', '2 400'], explanation: 'Die tiene-syfer is 5 (≥ 5), dus rond ons op: 2 350 → 2 400.' },
        { difficulty: 'Medium', question: 'ʼn Skenkingsveldtog het 6 784 blikkies kos ingesamel. Rond hierdie getal af na die naaste 10 om in ʼn eenvoudige verslag te skryf.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'Die eenhede-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'ʼn Motorhandelaar het hierdie jaar 9 450 motors verkoop. Rond hierdie getal af na die naaste 1 000 vir die jaarverslag.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: 'Die honderde-syfer is 4 (< 5), dus rond ons af: 9 450 → 9 000.' },
        { difficulty: 'Hard', question: 'ʼn Bioskoop se sitplekkaart is op ʼn getallelyn gemerk van 0 tot 1 000 in intervalle van 100. Sitplek nommer 720 moet vinnig gevind word. Tussen watter twee merke val dit? Skryf die twee getalle geskei deur ʼn komma.', answer: '700, 800', checkMode: 'auto', correctAnswer: '700800', correctAnswers: ['700800'], explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 720 val tussen die 700-merk en die 800-merk.' },
        { difficulty: 'Hard', question: 'ʼn Liefdadigheids-opspoorder is ʼn getallelyn van 5 000 tot 6 000 in intervalle van 100. Watter skenkingsbedrag sit presies halfpad tussen 5 400 en 5 500?', answer: '5 450', checkMode: 'auto', correctAnswer: '5450', correctAnswers: ['5450', '5 450'], explanation: 'Tel die twee merke bymekaar: 5 400 + 5 500 = 10 900. Deel deur 2: 10 900 ÷ 2 = 5 450.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 4 763 skape. Hy rond dit af na die naaste 10 vir ʼn vinnige koptelling, en apart na die naaste 100 vir die koöperasie se amptelike verslag. Skryf albei afgeronde getalle (naaste 10 eerste, dan naaste 100), sê dan watter een van die twee nader aan sy werklike trop van 4 763 is.', answer: 'Naaste 10 = 4 760; Naaste 100 = 4 800; die naaste-10-skatting (4 760) is nader.', checkMode: 'auto', correctAnswer: '47604800', correctAnswers: ['47604800', '4760 4800 naaste10', '4 760, 4 800, naaste 10'], explanation: 'Naaste 10: eenhede-syfer 3 (< 5), rond af → 4 760. Naaste 100: tiene-syfer 6 (≥ 5), rond op → 4 800. Afstande vanaf 4 763: 4 763 − 4 760 = 3, terwyl 4 800 − 4 763 = 37. Aangesien 3 < 37, is die naaste-10-skatting nader.' },
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
