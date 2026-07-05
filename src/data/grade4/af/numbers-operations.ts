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
    // STEL 1 — GRONDSLAE: PLEKWAARDE, UITGEBREIDE NOTASIE EN TEL (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondslae',
      questions: [
        { difficulty: 'Easy', question: 'Watter een van hierdie is ʼn heelgetal: 8 of 3½?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 is ʼn volledige telgetal sonder ʼn breukdeel, dus is dit ʼn heelgetal. 3½ het ʼn breukdeel, dus is dit nie.' },
        { difficulty: 'Easy', question: 'Skryf al die heelgetalle tussen 6 en 11, geskei deur kommas.', answer: '7, 8, 9, 10', checkMode: 'auto', correctAnswer: '78910', correctAnswers: ['78910'], explanation: '"Tussen" sluit nie 6 of 11 self in nie. Deur van net na 6 tot net voor 11 te tel, kry jy 7, 8, 9, 10.' },
        { difficulty: 'Easy', question: 'Skryf die getal 4 327 in uitgebreide notasie.', answer: '4 000 + 300 + 20 + 7', checkMode: 'auto', correctAnswer: '4000+300+20+7', correctAnswers: ['4000+300+20+7'], explanation: '4 is in die Duisende-kolom (4 000), 3 is in die Honderde-kolom (300), 2 is in die Tiene-kolom (20), 7 is in die Eenhede-kolom (7).' },
        { difficulty: 'Easy', question: 'Skryf die getal 7 054 in uitgebreide notasie.', answer: '7 000 + 0 + 50 + 4', checkMode: 'auto', correctAnswer: '7000+0+50+4', correctAnswers: ['7000+0+50+4'], explanation: '7 000 (Duisende) + 0 (Honderde) + 50 (Tiene) + 4 (Eenhede) = 7 054.' },
        { difficulty: 'Easy', question: 'Skryf die getal 3 072 in uitgebreide notasie.', answer: '3 000 + 0 + 70 + 2', checkMode: 'auto', correctAnswer: '3000+0+70+2', correctAnswers: ['3000+0+70+2'], explanation: '3 000 (Duisende) + 0 (Honderde) + 70 (Tiene) + 2 (Eenhede) = 3 072.' },
        { difficulty: 'Easy', question: 'Skryf die getal 6 431 in uitgebreide notasie.', answer: '6 000 + 400 + 30 + 1', checkMode: 'auto', correctAnswer: '6000+400+30+1', correctAnswers: ['6000+400+30+1'], explanation: '6 000 (Duisende) + 400 (Honderde) + 30 (Tiene) + 1 (Eenhede) = 6 431.' },
        { difficulty: 'Medium', question: 'Wat is die waarde van die syfer 6 in 6 431?', answer: '6 000', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'Die syfer 6 is in die Duisende-kolom, dus is sy waarde 6 × 1 000 = 6 000.' },
        { difficulty: 'Medium', question: 'Wat is die waarde van die syfer 6 in 2 640?', answer: '600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600'], explanation: 'Die syfer 6 is in die Honderde-kolom, dus is sy waarde 6 × 100 = 600.' },
        { difficulty: 'Medium', question: 'Wat is die waarde van die syfer 6 in 3 516?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Die syfer 6 is in die Eenhede-kolom, dus is sy waarde 6 × 1 = 6.' },
        { difficulty: 'Medium', question: 'Wat is die waarde van die syfer 5 in 5 872?', answer: '5 000', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5 000'], explanation: 'Die syfer 5 is in die Duisende-kolom, dus is sy waarde 5 × 1 000 = 5 000.' },
        { difficulty: 'Medium', question: 'Wat is die waarde van die syfer 9 in 6 194?', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: 'Die syfer 9 is in die Tiene-kolom, dus is sy waarde 9 × 10 = 90.' },
        { difficulty: 'Medium', question: 'Skryf die getal wat 4 duisende, 0 honderde, 8 tiene en 3 eenhede het.', answer: '4 083', checkMode: 'auto', correctAnswer: '4083', correctAnswers: ['4083', '4 083'], explanation: 'Plaas elke syfer in sy kolom: 4 duisende, 0 honderde, 8 tiene, 3 eenhede → 4 083.' },
        { difficulty: 'Medium', question: 'Skryf die getal wat 5 duisende, 2 honderde, 1 tien en 8 eenhede het.', answer: '5 218', checkMode: 'auto', correctAnswer: '5218', correctAnswers: ['5218', '5 218'], explanation: 'Plaas elke syfer in sy kolom: 5 duisende, 2 honderde, 1 tien, 8 eenhede → 5 218.' },
        { difficulty: 'Medium', question: 'Skryf die getal wat 9 duisende, 0 honderde, 0 tiene en 6 eenhede het.', answer: '9 006', checkMode: 'auto', correctAnswer: '9006', correctAnswers: ['9006', '9 006'], explanation: 'Plaas elke syfer in sy kolom: 9 duisende, 0 honderde, 0 tiene, 6 eenhede → 9 006.' },
        { difficulty: 'Easy', question: 'Tel vorentoe in 1e vanaf 4 996. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '4 997, 4 998, 4 999, 5 000', checkMode: 'auto', correctAnswer: '4997499849995000', correctAnswers: ['4997499849995000'], explanation: 'Tel 1 elke keer by: 4 996 + 1 = 4 997, dan 4 998, 4 999, 5 000.' },
        { difficulty: 'Easy', question: 'Tel vorentoe in 10e vanaf 3 450. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '3 460, 3 470, 3 480, 3 490', checkMode: 'auto', correctAnswer: '3460347034803490', correctAnswers: ['3460347034803490'], explanation: 'Tel 10 elke keer by: 3 450 + 10 = 3 460, dan 3 470, 3 480, 3 490.' },
        { difficulty: 'Easy', question: 'Tel vorentoe in 10e vanaf 2 345. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '2 355, 2 365, 2 375, 2 385', checkMode: 'auto', correctAnswer: '2355236523752385', correctAnswers: ['2355236523752385'], explanation: 'Tel 10 elke keer by: 2 345 + 10 = 2 355, dan 2 365, 2 375, 2 385.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 100e vanaf 5 600. Skryf die volgende 5 getalle, geskei deur kommas.', answer: '5 700, 5 800, 5 900, 6 000, 6 100', checkMode: 'auto', correctAnswer: '57005800590060006100', correctAnswers: ['57005800590060006100'], explanation: 'Tel 100 elke keer by: 5 600 + 100 = 5 700, dan 5 800, 5 900, 6 000, 6 100.' },
        { difficulty: 'Medium', question: 'Tel vorentoe in 1 000e vanaf 3 000. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '4 000, 5 000, 6 000, 7 000', checkMode: 'auto', correctAnswer: '4000500060007000', correctAnswers: ['4000500060007000'], explanation: 'Tel 1 000 elke keer by: 3 000 + 1 000 = 4 000, dan 5 000, 6 000, 7 000.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 10e vanaf 8 080. Skryf die volgende 4 getalle, geskei deur kommas.', answer: '8 070, 8 060, 8 050, 8 040', checkMode: 'auto', correctAnswer: '8070806080508040', correctAnswers: ['8070806080508040'], explanation: 'Trek 10 elke keer af: 8 080 − 10 = 8 070, dan 8 060, 8 050, 8 040.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 100e vanaf 9 200. Skryf die volgende 5 getalle, geskei deur kommas.', answer: '9 100, 9 000, 8 900, 8 800, 8 700', checkMode: 'auto', correctAnswer: '91009000890088008700', correctAnswers: ['91009000890088008700'], explanation: 'Trek 100 elke keer af: 9 200 − 100 = 9 100, dan 9 000, 8 900, 8 800, 8 700.' },
        { difficulty: 'Medium', question: 'Tel terugwaarts in 1 000e vanaf 7 000. Skryf die volgende 5 getalle, geskei deur kommas.', answer: '6 000, 5 000, 4 000, 3 000, 2 000', checkMode: 'auto', correctAnswer: '60005000400030002000', correctAnswers: ['60005000400030002000'], explanation: 'Trek 1 000 elke keer af: 7 000 − 1 000 = 6 000, dan 5 000, 4 000, 3 000, 2 000.' },
        { difficulty: 'Hard', question: 'ʼn Getalpatroon gaan: 1 250, 1 350, 1 450 …\n\nWat is die reël, en wat is die volgende 2 getalle? Skryf die volgende 2 getalle geskei deur ʼn komma.', answer: 'Tel 100 elke keer by. Volgende 2 getalle: 1 550, 1 650', checkMode: 'auto', correctAnswer: '15501650', correctAnswers: ['15501650'], explanation: 'Elke getal is 100 meer as die een voor dit: 1 350 − 1 250 = 100, 1 450 − 1 350 = 100. Gaan voort: 1 450 + 100 = 1 550, 1 550 + 100 = 1 650.' },
        { difficulty: 'Hard', question: 'Skryf die waarde van die syfer 3 in 4 738, skryf dan die waarde van die syfer 9 in 6 194. Gee jou twee antwoorde geskei deur ʼn komma (bv. 30, 90).', answer: '30, 90', checkMode: 'auto', correctAnswer: '3090', correctAnswers: ['3090'], explanation: 'In 4 738 is die syfer 3 in die Tiene-kolom, dus is sy waarde 3 × 10 = 30. In 6 194 is die syfer 9 in die Tiene-kolom, dus is sy waarde 9 × 10 = 90.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 1 245 rooi appels, 873 groen appels en 12 geel appels. Bereken die totale aantal appels.', answer: '2 130', checkMode: 'auto', correctAnswer: '2130', correctAnswers: ['2130', '2 130'], explanation: '1 245 + 873 + 12 = 2 130.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het plekwaarde, uitgebreide notasie en tel bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die plekwaarde- en telvoorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — VERGELYK, ORDEN EN AFRONDING (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Vergelyk, Orden en Afronding',
      questions: [
        { difficulty: 'Easy', question: 'Skryf kleiner as, groter as, of gelyk aan: 3 456 en 3 654.', answer: 'kleiner as', checkMode: 'auto', correctAnswer: 'kleineras', correctAnswers: ['kleineras'], explanation: 'Vergelyk die honderde-syfers: 3 4__ vs 3 6__. Aangesien 4 < 6, is 3 456 kleiner as 3 654.' },
        { difficulty: 'Easy', question: 'Skryf kleiner as, groter as, of gelyk aan: 7 001 en 7 001.', answer: 'gelyk aan', checkMode: 'auto', correctAnswer: 'gelykaan', correctAnswers: ['gelykaan'], explanation: 'Elke syfer is dieselfde, dus is 7 001 = 7 001.' },
        { difficulty: 'Easy', question: 'Skryf kleiner as, groter as, of gelyk aan: 4 299 en 4 300.', answer: 'kleiner as', checkMode: 'auto', correctAnswer: 'kleineras', correctAnswers: ['kleineras'], explanation: '4 299 is een minder as 4 300, dus is 4 299 kleiner as 4 300.' },
        { difficulty: 'Easy', question: 'Skryf kleiner as, groter as, of gelyk aan: 9 302 en 2 087.', answer: 'groter as', checkMode: 'auto', correctAnswer: 'groteras', correctAnswers: ['groteras'], explanation: 'Vergelyk die duisende-syfers: 9 vs 2. Aangesien 9 > 2, is 9 302 groter as 2 087.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 5 032, 4 999, 5 320, 4 909', answer: '4 909, 4 999, 5 032, 5 320', checkMode: 'auto', correctAnswer: '4909499950325320', correctAnswers: ['4909499950325320'], explanation: 'Vergelyk eers die duisende: 4 909 en 4 999 (4 duisende) is kleiner as 5 032 en 5 320 (5 duisende). Vergelyk dan binne elke paar deur honderde/tiene: 4 909 < 4 999 en 5 032 < 5 320. Volgorde: 4 909, 4 999, 5 032, 5 320.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 3 210, 3 201, 3 021, 3 102', answer: '3 021, 3 102, 3 201, 3 210', checkMode: 'auto', correctAnswer: '3021310232013210', correctAnswers: ['3021310232013210'], explanation: 'Al vier getalle het 3 duisende, dus vergelyk die honderde-syfers volgende: 3 021 het 0 honderde en 3 102 het 1 honderd — albei is kleiner as 3 201 en 3 210, wat 2 honderde het. Aangesien 0 < 1, is 3 021 < 3 102. Vergelyk 3 201 en 3 210 deur tiene-syfers: 0 < 1, dus is 3 201 < 3 210. Finale volgorde: 3 021, 3 102, 3 201, 3 210.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 8 760, 8 670, 8 607, 8 076', answer: '8 076, 8 607, 8 670, 8 760', checkMode: 'auto', correctAnswer: '8076860786708760', correctAnswers: ['8076860786708760'], explanation: 'Vergelyk die honderde-syfers: 8 076 het 0 honderde (kleinste). Dan het 8 607 6 honderde, 8 670 het 6 honderde, 8 760 het 7 honderde. Vergelyk 8 607 en 8 670 deur tiene: 0 < 7, dus is 8 607 < 8 670. Volgorde: 8 076, 8 607, 8 670, 8 760.' },
        { difficulty: 'Medium', question: 'Orden hierdie getalle van kleinste na grootste, geskei deur kommas: 6 234, 987, 6 432, 1 023', answer: '987, 1 023, 6 234, 6 432', checkMode: 'auto', correctAnswer: '987102362346432', correctAnswers: ['987102362346432'], explanation: '987 het 3 syfers, dus is dit die kleinste. 1 023 het 4 syfers met 1 duisend. 6 234 en 6 432 het albei 6 duisende — vergelyk honderde: 2 < 4, dus is 6 234 < 6 432. Volgorde: 987, 1 023, 6 234, 6 432.' },
        { difficulty: 'Hard', question: 'Thabo sê 3 987 is groter as 4 001 omdat die syfer 9 groter as 0 is. Is Thabo korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Jy moet altyd die hoogste plekwaarde eerste vergelyk. 3 987 het 3 duisende en 4 001 het 4 duisende. Aangesien 4 > 3, is 4 001 groter, maak nie saak wat die ander syfers is nie.' },
        { difficulty: 'Easy', question: 'Rond 3 456 af na die naaste 10.', answer: '3 460', checkMode: 'auto', correctAnswer: '3460', correctAnswers: ['3460', '3 460'], explanation: 'Die eenhede-syfer is 6 (≥ 5), dus rond ons op: 3 456 → 3 460.' },
        { difficulty: 'Easy', question: 'Rond 5 234 af na die naaste 100.', answer: '5 200', checkMode: 'auto', correctAnswer: '5200', correctAnswers: ['5200', '5 200'], explanation: 'Die tiene-syfer is 3 (< 5), dus rond ons af: 5 234 → 5 200.' },
        { difficulty: 'Easy', question: 'Rond 7 849 af na die naaste 100.', answer: '7 800', checkMode: 'auto', correctAnswer: '7800', correctAnswers: ['7800', '7 800'], explanation: 'Die tiene-syfer is 4 (< 5), dus rond ons af: 7 849 → 7 800.' },
        { difficulty: 'Medium', question: 'Rond 2 350 af na die naaste 100.', answer: '2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', '2 400'], explanation: 'Die tiene-syfer is 5 (≥ 5), dus rond ons op: 2 350 → 2 400.' },
        { difficulty: 'Medium', question: 'Rond 6 784 af na die naaste 10.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'Die eenhede-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'Rond 4 763 af na die naaste 100.', answer: '4 800', checkMode: 'auto', correctAnswer: '4800', correctAnswers: ['4800', '4 800'], explanation: 'Die tiene-syfer is 6 (≥ 5), dus rond ons op: 4 763 → 4 800.' },
        { difficulty: 'Medium', question: 'Rond 4 763 af na die naaste 10.', answer: '4 760', checkMode: 'auto', correctAnswer: '4760', correctAnswers: ['4760', '4 760'], explanation: 'Die eenhede-syfer is 3 (< 5), dus rond ons af: 4 763 → 4 760.' },
        { difficulty: 'Medium', question: 'Rond 5 999 af na die naaste 10.', answer: '6 000', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'Die eenhede-syfer is 9 (≥ 5), dus rond ons op: 5 999 → 6 000 (die tiene-, honderde- en duisende-syfers verander almal weens oordrag).' },
        { difficulty: 'Medium', question: 'Rond 1 499 af na die naaste 100.', answer: '1 500', checkMode: 'auto', correctAnswer: '1500', correctAnswers: ['1500', '1 500'], explanation: 'Die tiene-syfer is 9 (≥ 5), dus rond ons op: 1 499 → 1 500.' },
        { difficulty: 'Medium', question: 'Rond 8 501 af na die naaste 10.', answer: '8 500', checkMode: 'auto', correctAnswer: '8500', correctAnswers: ['8500', '8 500'], explanation: 'Die eenhede-syfer is 1 (< 5), dus rond ons af: 8 501 → 8 500.' },
        { difficulty: 'Medium', question: 'Rond 2 222 af na die naaste 1 000.', answer: '2 000', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'Die honderde-syfer is 2 (< 5), dus rond ons af: 2 222 → 2 000.' },
        { difficulty: 'Medium', question: 'Rond 6 666 af na die naaste 1 000.', answer: '7 000', checkMode: 'auto', correctAnswer: '7000', correctAnswers: ['7000', '7 000'], explanation: 'Die honderde-syfer is 6 (≥ 5), dus rond ons op: 6 666 → 7 000.' },
        { difficulty: 'Hard', question: 'Rond 3 299 af na die naaste 10 EN na die naaste 100. Gee jou twee antwoorde geskei deur ʼn komma (10e-antwoord eerste).', answer: '3 300, 3 300', checkMode: 'auto', correctAnswer: '33003300', correctAnswers: ['33003300'], explanation: 'Naaste 10: eenhede-syfer 9 (≥ 5), rond op: 3 299 → 3 300. Naaste 100: tiene-syfer 9 (≥ 5), rond op: 3 299 → 3 300. Albei antwoorde is 3 300.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 4 763 skape. ʼn Nuusberig sê hy het ongeveer 4 800 skape. Rond 4 763 af na die naaste 100 om te kyk of die berig korrek is. Skryf jou afgeronde antwoord.', answer: '4 800', checkMode: 'auto', correctAnswer: '4800', correctAnswers: ['4800', '4 800'], explanation: 'Tiene-syfer is 6 (≥ 5), dus rond ons op: 4 763 → 4 800. Dit bevestig die nuusberig.' },
        { difficulty: 'Hard', question: 'Watter een rond na ʼn groter getal af na die naaste 100: 2 650 of 3 299? Rond elkeen eers af, en antwoord dan met die oorspronklike getal wat groter is na afronding.', answer: '3 299', checkMode: 'auto', correctAnswer: '3299', correctAnswers: ['3299', '3 299'], explanation: '2 650 rond af na 2 700. 3 299 rond af na 3 300. Aangesien 3 300 > 2 700, is die antwoord 3 299.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom afronding na die naaste 10 gewoonlik ʼn meer akkurate skatting gee as afronding na die naaste 100.', answer: 'Afronding na die naaste 10 verander die getal met hoogstens 5, terwyl afronding na die naaste 100 die getal met tot 50 kan verander. Omdat die naaste-10-skatting nader aan die werklike getal bly, is dit gewoonlik meer akkuraat.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue heelgetalle vergelyk, orden en afrond.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die vergelyking- en afrondingsvoorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WERKLIKE-LEWE WOORDPROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Werklike-Lewe Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Skool het 4 327 leerders. Skryf hierdie getal in ʼn plekwaardetabel: wat is die waarde van die syfer 4?', answer: '4 000', checkMode: 'auto', correctAnswer: '4000', correctAnswers: ['4000', '4 000'], explanation: 'Die syfer 4 is in die Duisende-kolom van 4 327, dus is sy waarde 4 000.' },
        { difficulty: 'Easy', question: 'ʼn Stadion kan 8 734 mense huisves. Rond hierdie getal af na die naaste 1 000 om die sitplekkapasiteit te skat.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: 'Die honderde-syfer is 7 (≥ 5), dus rond ons op: 8 734 → 9 000.' },
        { difficulty: 'Easy', question: 'Lerato het R2 087 gespaar en Sipho het R9 302 gespaar. Wie het meer geld gespaar?', answer: 'Sipho', checkMode: 'auto', correctAnswer: 'Sipho', correctAnswers: ['Sipho', 'sipho'], explanation: 'Vergelyk die duisende-syfers: 9 302 het 9 duisende, 2 087 het 2 duisende. Aangesien 9 > 2, het Sipho meer.' },
        { difficulty: 'Easy', question: 'ʼn Winkel het 6 235 brode verkoop. Skryf 6 235 in uitgebreide notasie.', answer: '6 000 + 200 + 30 + 5', checkMode: 'auto', correctAnswer: '6000+200+30+5', correctAnswers: ['6000+200+30+5'], explanation: '6 000 (Duisende) + 200 (Honderde) + 30 (Tiene) + 5 (Eenhede) = 6 235.' },
        { difficulty: 'Medium', question: 'ʼn Bioskoop het 4 200 sitplekke en voeg elke jaar vir die volgende 3 jaar nog 100 sitplekke by. Skryf die aantal sitplekke na elk van die volgende 3 jaar, geskei deur kommas.', answer: '4 300, 4 400, 4 500', checkMode: 'auto', correctAnswer: '430044004500', correctAnswers: ['430044004500'], explanation: 'Tel vorentoe in 100e: 4 200 + 100 = 4 300, dan 4 400, dan 4 500.' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie wil R5 000 insamel. Hulle het reeds R5 000 belowe in fases van R1 000. Skryf die beloofde totaal na elk van die volgende 4 fases, begin by R5 000, geskei deur kommas.', answer: '6 000, 7 000, 8 000, 9 000', checkMode: 'auto', correctAnswer: '6000700080009000', correctAnswers: ['6000700080009000'], explanation: 'Tel vorentoe in 1 000e: 5 000 + 1 000 = 6 000, dan 7 000, 8 000, 9 000.' },
        { difficulty: 'Medium', question: 'Twee dorpe het bevolkings van 4 560 en 4 650. Watter dorp het die kleiner bevolking?', answer: '4 560', checkMode: 'auto', correctAnswer: '4560', correctAnswers: ['4560', '4 560'], explanation: 'Vergelyk die honderde-syfers: 4 560 het 5 honderde, 4 650 het 6 honderde. Aangesien 5 < 6, is 4 560 kleiner.' },
        { difficulty: 'Medium', question: 'ʼn Skenkingsveldtog het 6 784 blikkies kos ingesamel. Rond hierdie getal af na die naaste 10 om in ʼn eenvoudige verslag te skryf.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'Die eenhede-syfer is 4 (< 5), dus rond ons af: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'ʼn Motorhandelaar het hierdie jaar 9 450 motors verkoop. Rond hierdie getal af na die naaste 1 000 vir die jaarverslag.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: 'Die honderde-syfer is 4 (< 5), dus rond ons af: 9 450 → 9 000.' },
        { difficulty: 'Medium', question: 'Vier dorpe het hierdie bevolkings: 5 234, 4 980, 5 300, 4 870. Orden hulle van kleinste na grootste, geskei deur kommas.', answer: '4 870, 4 980, 5 234, 5 300', checkMode: 'auto', correctAnswer: '4870498052345300', correctAnswers: ['4870498052345300'], explanation: 'Dorpe met 4 duisende (4 870, 4 980) is kleiner as dorpe met 5 duisende (5 234, 5 300). Vergelyk binne die pare: 4 870 < 4 980 en 5 234 < 5 300. Volgorde: 4 870, 4 980, 5 234, 5 300.' },
        { difficulty: 'Medium', question: 'Vier skole het hierdie aantal leerders: 7 650, 6 980, 7 200, 6 890. Orden hulle van kleinste na grootste, geskei deur kommas.', answer: '6 890, 6 980, 7 200, 7 650', checkMode: 'auto', correctAnswer: '6890698072007650', correctAnswers: ['6890698072007650'], explanation: 'Skole met 6 duisende (6 980, 6 890) is kleiner as skole met 7 duisende (7 200, 7 650). Vergelyk binne die pare: 6 890 < 6 980 en 7 200 < 7 650. Volgorde: 6 890, 6 980, 7 200, 7 650.' },
        { difficulty: 'Easy', question: 'ʼn Hardloper het ʼn wedloop van 2 350 meter voltooi. Rond hierdie afstand af na die naaste 100 meter.', answer: '2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', '2 400'], explanation: 'Die tiene-syfer is 5 (≥ 5), dus rond ons op: 2 350 → 2 400.' },
        { difficulty: 'Medium', question: 'ʼn Albasterversamelaar se albasters begin by 3 125, en hy tel dan nog 5 bokse by in stappe van 10 albasters elk. Skryf die albastertelling na die eerste 5 bokse, geskei deur kommas.', answer: '3 135, 3 145, 3 155, 3 165, 3 175', checkMode: 'auto', correctAnswer: '31353145315531653175', correctAnswers: ['31353145315531653175'], explanation: 'Tel vorentoe in 10e: 3 125 + 10 = 3 135, dan 3 145, 3 155, 3 165, 3 175.' },
        { difficulty: 'Medium', question: 'ʼn Pakhuis het 9 081 bokse. Skryf 9 081 in uitgebreide notasie.', answer: '9 000 + 0 + 80 + 1', checkMode: 'auto', correctAnswer: '9000+0+80+1', correctAnswers: ['9000+0+80+1'], explanation: '9 000 (Duisende) + 0 (Honderde) + 80 (Tiene) + 1 (Eenhede) = 9 081.' },
        { difficulty: 'Medium', question: 'ʼn Biblioteek het 1 406 boeke op een rak. Skryf 1 406 in uitgebreide notasie.', answer: '1 000 + 400 + 0 + 6', checkMode: 'auto', correctAnswer: '1000+400+0+6', correctAnswers: ['1000+400+0+6'], explanation: '1 000 (Duisende) + 400 (Honderde) + 0 (Tiene) + 6 (Eenhede) = 1 406.' },
        { difficulty: 'Medium', question: 'ʼn Padreis se afstande word op ʼn getallelyn gemerk van 0 km tot 1 000 km in intervalle van 100 km. ʼn Russtop is by 650 km. Tussen watter twee merke val dit? Skryf die twee getalle geskei deur ʼn komma.', answer: '600, 700', checkMode: 'auto', correctAnswer: '600700', correctAnswers: ['600700'], explanation: '650 val tussen die 600 km-merk en die 700 km-merk op die getallelyn.' },
        { difficulty: 'Hard', question: 'ʼn Stadion tel kaartjieverkope op ʼn getallelyn van 5 000 tot 6 000 in intervalle van 100. As ʼn kaartjietelling van 5 500 aangemeld word, waar sit dit op die getallelyn? Skryf jou antwoord as: halfpad OF nie halfpad nie.', answer: 'halfpad', checkMode: 'auto', correctAnswer: 'halfpad', correctAnswers: ['halfpad'], explanation: '5 000 + 6 000 = 11 000, en 11 000 ÷ 2 = 5 500, dus sit 5 500 presies halfpad tussen 5 000 en 6 000.' },
        { difficulty: 'Hard', question: 'ʼn Maatskappy het 4 200 kliënte gehad en kry 1 000 nuwe kliënte elke jaar vir 3 jaar. Skryf die kliëntetotale na elk van die 3 jaar, geskei deur kommas.', answer: '5 200, 6 200, 7 200', checkMode: 'auto', correctAnswer: '520062007200', correctAnswers: ['520062007200'], explanation: 'Tel vorentoe in 1 000e vanaf 4 200: 4 200 + 1 000 = 5 200, dan 6 200, dan 7 200.' },
        { difficulty: 'Hard', question: 'ʼn Leerder het die syfers 3, 0, 7 en 2. Deur elke syfer presies een keer te gebruik, wat is die grootste 4-syfergetal wat gemaak kan word?', answer: '7 320', checkMode: 'auto', correctAnswer: '7320', correctAnswers: ['7320', '7 320'], explanation: 'Om die grootste getal te maak, rangskik die syfers van grootste na kleinste: 7, 3, 2, 0 → 7 320.' },
        { difficulty: 'Hard', question: 'ʼn Leerder het die syfers 3, 0, 7 en 2. Deur elke syfer presies een keer te gebruik, wat is die kleinste 4-syfergetal wat gemaak kan word (geen voorloopnul nie)?', answer: '2 037', checkMode: 'auto', correctAnswer: '2037', correctAnswers: ['2037', '2 037'], explanation: 'Om die kleinste getal te maak, rangskik die syfers van kleinste na grootste, maar die eerste syfer kan nie 0 wees nie. Syfers in volgorde is 0, 2, 3, 7 — verruil die 0 met die volgende kleinste nie-nul syfer (2) om 2, 0, 3, 7 → 2 037 te kry.' },
        { difficulty: 'Hard', question: 'ʼn Leerder het die syfers 5, 9, 1 en 4. Deur elke syfer presies een keer te gebruik, wat is die grootste 4-syfergetal wat gemaak kan word?', answer: '9 541', checkMode: 'auto', correctAnswer: '9541', correctAnswers: ['9541', '9 541'], explanation: 'Rangskik die syfers van grootste na kleinste: 9, 5, 4, 1 → 9 541.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 8 062 items in voorraad. Skryf hierdie getal in uitgebreide notasie.', answer: '8 000 + 0 + 60 + 2', checkMode: 'auto', correctAnswer: '8000+0+60+2', correctAnswers: ['8000+0+60+2'], explanation: '8 000 (Duisende) + 0 (Honderde) + 60 (Tiene) + 2 (Eenhede) = 8 062.' },
        { difficulty: 'Hard', question: 'ʼn Skool hou bywoning aan op ʼn getallelyn wat elke 1 000 gemerk is van 0 tot 10 000. ʼn Spesiale gebeurtenis het 8 500 mense gelok. Dit val presies halfpad tussen watter twee merke? Skryf die twee getalle geskei deur ʼn komma.', answer: '8 000, 9 000', checkMode: 'auto', correctAnswer: '80009000', correctAnswers: ['80009000'], explanation: '8 000 + 9 000 = 17 000, en 17 000 ÷ 2 = 8 500, dus sit 8 500 presies halfpad tussen 8 000 en 9 000.' },
        { difficulty: 'Hard', question: 'ʼn Boer rond sy 4 763 skape af na die naaste 10 vir ʼn vinnige skatting, en vergelyk dit dan met die naaste-100-skatting van 4 800. Wat is die verskil tussen die twee afgeronde skattings?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Naaste 10: 4 763 → 4 760. Naaste 100: 4 763 → 4 800. Verskil: 4 800 − 4 760 = 40.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 1 245 rooi appels, 873 groen appels en 12 geel appels gehad. Rond die totale aantal appels af na die naaste 100.', answer: '2 100', checkMode: 'auto', correctAnswer: '2100', correctAnswers: ['2100', '2 100'], explanation: 'Totaal = 1 245 + 873 + 12 = 2 130. Om 2 130 na die naaste 100 af te rond: tiene-syfer is 3 (< 5), rond af → 2 100.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantasties! Jy kan plekwaarde, afronding en ordening op werklike-lewe probleme toepas.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERSTAP-, GETALLELYN- EN SELFTOETS-REDENERING (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Meerstap- en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn Getallelyn gaan van 3 000 na 4 000 in intervalle van 100. Watter getal is halfpad tussen 3 400 en 3 500?', answer: '3 450', checkMode: 'auto', correctAnswer: '3450', correctAnswers: ['3450', '3 450'], explanation: 'Tel die twee merke bymekaar: 3 400 + 3 500 = 6 900. Deel deur 2: 6 900 ÷ 2 = 3 450.' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn gaan van 3 000 na 4 000 in intervalle van 100. Watter getal is driekwart van die pad tussen 3 000 en 4 000?', answer: '3 750', checkMode: 'auto', correctAnswer: '3750', correctAnswers: ['3750', '3 750'], explanation: 'Die totale afstand is 4 000 − 3 000 = 1 000. Driekwart van 1 000 = 750. Begin by 3 000 en tel 750 by: 3 750.' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn gaan van 4 000 na 5 000 in intervalle van 100. Watter getal is ʼn kwart van die pad tussen 4 000 en 5 000?', answer: '4 250', checkMode: 'auto', correctAnswer: '4250', correctAnswers: ['4250', '4 250'], explanation: 'Die totale afstand is 5 000 − 4 000 = 1 000. ʼn Kwart van 1 000 = 250. Begin by 4 000 en tel 250 by: 4 250.' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn gaan van 7 000 na 7 500 in intervalle van 100. Watter getal is halfpad tussen 7 200 en 7 300?', answer: '7 250', checkMode: 'auto', correctAnswer: '7250', correctAnswers: ['7250', '7 250'], explanation: 'Tel die twee merke bymekaar: 7 200 + 7 300 = 14 500. Deel deur 2: 14 500 ÷ 2 = 7 250.' },
        { difficulty: 'Hard', question: 'Rond 8 461 af na die naaste 100, werk dan die verskil tussen die afgeronde getal en die oorspronklike getal uit.', answer: 'Afgerond = 8 500; Verskil = 39', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '8500 39', '8 500; 39'], explanation: 'Die tiene-syfer is 6 (≥ 5), dus rond ons op: 8 461 → 8 500. Verskil = 8 500 − 8 461 = 39.' },
        { difficulty: 'Hard', question: 'ʼn Getal het 5 duisende, 8 honderde, 4 tiene en 7 eenhede. Skryf die getal, rond dit dan af na die naaste 100.', answer: 'Getal = 5 847; Afgerond = 5 800', checkMode: 'auto', correctAnswer: '5800', correctAnswers: ['5800', '5 800', '5847 5800', '5 847; 5 800'], explanation: 'Die getal is 5 847. Om na die naaste 100 af te rond: tiene-syfer is 4 (< 5), rond af → 5 800.' },
        { difficulty: 'Hard', question: 'In die getal 5 847, vind die waarde van die duisende-syfer en die waarde van die eenhede-syfer, tel hulle dan bymekaar.', answer: '5 007', checkMode: 'auto', correctAnswer: '5007', correctAnswers: ['5007', '5 007'], explanation: 'Waarde van duisende-syfer (5) = 5 000. Waarde van eenhede-syfer (7) = 7. Som: 5 000 + 7 = 5 007.' },
        { difficulty: 'Hard', question: 'In die getal 3 728, vind die waarde van die honderde-syfer en die waarde van die tiene-syfer, trek dan die tiene-waarde van die honderde-waarde af.', answer: '680', checkMode: 'auto', correctAnswer: '680', correctAnswers: ['680'], explanation: 'Waarde van honderde-syfer (7) = 700. Waarde van tiene-syfer (2) = 20. Verskil: 700 − 20 = 680.' },
        { difficulty: 'Hard', question: 'Orden hierdie getalle van grootste na kleinste, geskei deur kommas: 5 032, 4 999, 5 320, 4 909', answer: '5 320, 5 032, 4 999, 4 909', checkMode: 'auto', correctAnswer: '5320503249994909', correctAnswers: ['5320503249994909'], explanation: 'Vanaf die vroeëre kleinste-na-grootste volgorde (4 909, 4 999, 5 032, 5 320), keer dit om vir grootste-na-kleinste: 5 320, 5 032, 4 999, 4 909.' },
        { difficulty: 'Hard', question: 'ʼn Getalpatroon begin by 2 000 en tel elke keer 1 000 by: 2 000, 3 000, 4 000 … Wat sal die 10de getal in die patroon wees?', answer: '11 000', checkMode: 'auto', correctAnswer: '11000', correctAnswers: ['11000', '11 000'], explanation: 'Die 10de getal = 2 000 + (9 × 1 000) = 2 000 + 9 000 = 11 000.' },
        { difficulty: 'Hard', question: 'ʼn Getalpatroon begin by 1 250 en tel elke keer 100 by. Wat sal die 6de getal in die patroon wees?', answer: '1 750', checkMode: 'auto', correctAnswer: '1750', correctAnswers: ['1750', '1 750'], explanation: 'Die 6de getal = 1 250 + (5 × 100) = 1 250 + 500 = 1 750.' },
        { difficulty: 'Hard', question: 'Rond 6 235 af na die naaste 1 000, skryf dan die afgeronde getal in uitgebreide notasie.', answer: '6 000 = 6 000 + 0 + 0 + 0', checkMode: 'auto', correctAnswer: '6000+0+0+0', correctAnswers: ['6000+0+0+0'], explanation: 'Om 6 235 na die naaste 1 000 af te rond: honderde-syfer is 2 (< 5), rond af → 6 000. Uitgebreide notasie: 6 000 + 0 + 0 + 0.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 4 763 skape en ʼn nuusberig rond dit af na die naaste 100 as 4 800. Rond 4 763 ook af na die naaste 10. Watter een van die twee afgeronde getalle (4 800 of die naaste-10-antwoord) is nader aan die werklike aantal skape?', answer: 'Die naaste-10-antwoord (4 760) is nader.', checkMode: 'auto', correctAnswer: '4760', correctAnswers: ['4760', '4 760'], explanation: 'Naaste 10: 4 763 → 4 760. Vergelyk die afstande: 4 763 − 4 760 = 3, terwyl 4 800 − 4 763 = 37. Aangesien 3 < 37, is 4 760 nader.' },
        { difficulty: 'Hard', question: 'Verduidelik, deur plekwaarde te gebruik, waarom 4 001 groter is as 3 987 al het 3 987 ʼn 9 in die honderde-kolom en 4 001 ʼn 0 daar.', answer: 'Wanneer jy getalle vergelyk, moet jy altyd eers die hoogste plekwaarde-kolom vergelyk — die duisende-kolom. 4 001 het 4 duisende terwyl 3 987 net 3 duisende het. Aangesien 4 groter as 3 in die duisende-kolom is, is 4 001 groter as 3 987, maak nie saak watter syfers in die kleiner kolomme verskyn nie. Die honderde-, tiene- en eenhede-syfers maak net saak wanneer die hoër kolomme gelyk is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn getal afrond en ʼn getal oprond, deur die bepalende-syfer-reël te gebruik.', answer: 'Om ʼn getal af te rond, kyk jy na die bepalende syfer — die syfer net regs van die kolom waarna jy afrond. As die bepalende syfer 0, 1, 2, 3 of 4 is, rond jy af en die syfer in die teikenkolom bly dieselfde. As die bepalende syfer 5, 6, 7, 8 of 9 is, rond jy op en jy tel 1 by die syfer in die teikenkolom. In albei gevalle word elke syfer regs van die teikenkolom 0.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy die halfpadpunt tussen enige twee getalle op ʼn getallelyn sou vind, en gebruik 6 000 en 7 000 as jou voorbeeld.', answer: 'Om die halfpadpunt tussen twee getalle te vind, tel jy hulle bymekaar en deel die totaal deur 2. Vir 6 000 en 7 000: 6 000 + 7 000 = 13 000, en 13 000 ÷ 2 = 6 500. Dus is 6 500 presies halfpad tussen 6 000 en 7 000.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Getallelyn gaan van 0 na 1 000 in intervalle van 100. Tussen watter twee getalle sit 650? Skryf die twee getalle geskei deur ʼn komma.', answer: '600, 700', checkMode: 'auto', correctAnswer: '600700', correctAnswers: ['600700'], explanation: 'Die intervalmerke is 0, 100, 200 … 1 000. 650 val tussen die 600-merk en die 700-merk.' },
        { difficulty: 'Medium', question: 'Rond 9 091 af na die naaste 10, dan na die naaste 100. Gee albei antwoorde geskei deur ʼn komma (naaste 10 eerste).', answer: '9 090, 9 100', checkMode: 'auto', correctAnswer: '90909100', correctAnswers: ['90909100'], explanation: 'Naaste 10: eenhede-syfer 1 (< 5), rond af → 9 090. Naaste 100: tiene-syfer 9 (≥ 5), rond op → 9 100.' },
        { difficulty: 'Hard', question: 'Rond 4 050 af na die naaste 100, dan na die naaste 1 000. Gee albei antwoorde geskei deur ʼn komma (naaste 100 eerste).', answer: '4 100, 4 000', checkMode: 'auto', correctAnswer: '41004000', correctAnswers: ['41004000'], explanation: 'Naaste 100: tiene-syfer 5 (≥ 5), rond op → 4 100. Naaste 1 000: honderde-syfer 0 (< 5), rond af → 4 000.' },
        { difficulty: 'Hard', question: 'ʼn Getal word gevorm met 6 duisende, 4 honderde, 3 tiene en 1 eenheid. Skryf die getal, orden dit dan teenoor 6 234 en 6 432 van kleinste na grootste (sluit al 3 getalle in), geskei deur kommas.', answer: '6 234, 6 431, 6 432', checkMode: 'auto', correctAnswer: '623464316432', correctAnswers: ['623464316432'], explanation: 'Die nuwe getal is 6 431 (6 duisende, 4 honderde, 3 tiene, 1 eenheid). Vergelyk 6 431, 6 234, 6 432: honderde-syfers is 4, 2, 4 — dus is 6 234 (2 honderde) die kleinste. Deur 6 431 en 6 432 te vergelyk (dieselfde eerste 3 syfers, 643_), vergelyk eenhede: 1 < 2, dus is 6 431 < 6 432. Finale volgorde: 6 234, 6 431, 6 432.' },
        { difficulty: 'Hard', question: 'ʼn Getalpatroon tel terugwaarts in 100e vanaf 9 200: 9 200, 9 100, 9 000 … Wat sal die 8ste getal in die patroon wees?', answer: '8 500', checkMode: 'auto', correctAnswer: '8500', correctAnswers: ['8500', '8 500'], explanation: 'Die 8ste getal = 9 200 − (7 × 100) = 9 200 − 700 = 8 500.' },
        { difficulty: 'Hard', question: 'ʼn Getalpatroon tel vorentoe in 1 000e vanaf 2 000: 2 000, 3 000, 4 000 … Wat sal die 7de getal in die patroon wees?', answer: '8 000', checkMode: 'auto', correctAnswer: '8000', correctAnswers: ['8000', '8 000'], explanation: 'Die 7de getal = 2 000 + (6 × 1 000) = 2 000 + 6 000 = 8 000.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 8 095 blikkies kos. Rond hierdie getal af na die naaste 100, verduidelik dan in een sin waarom die tiene-syfer hier die afrondingsbesluit beïnvloed.', answer: 'Afgerond = 8 100', checkMode: 'auto', correctAnswer: '8100', correctAnswers: ['8100', '8 100'], explanation: 'Om na die naaste 100 af te rond, kyk ons na die tiene-syfer, wat 9 is (≥ 5), dus rond ons op: 8 095 → 8 100. Die tiene-syfer is presies wat die afronding bepaal — dit is die bepalende syfer vir afronding na die naaste 100.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn 3-syfergetal altyd kleiner is as ʼn 4-syfergetal, deur 987 en 1 023 as jou voorbeeld te gebruik.', answer: 'ʼn 4-syfergetal het altyd ʼn waarde in die duisende-kolom, terwyl ʼn 3-syfergetal glad geen duisende het nie (sy duisende-waarde is 0). Aangesien 987 0 duisende het en 1 023 1 duisend het, moet 1 023 groter as 987 wees, maak nie saak wat die ander syfers is nie. Oor die algemeen beteken meer syfers altyd ʼn groter heelgetal (met die aanname van geen voorloopnulle nie).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Rond 6 789 af na die naaste 1 000, skryf dan jou afgeronde antwoord in uitgebreide notasie.', answer: '7 000 = 7 000 + 0 + 0 + 0', checkMode: 'auto', correctAnswer: '7000+0+0+0', correctAnswers: ['7000+0+0+0'], explanation: 'Om 6 789 na die naaste 1 000 af te rond: honderde-syfer is 7 (≥ 5), rond op → 7 000. Uitgebreide notasie: 7 000 + 0 + 0 + 0.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het meerstap-heelgetalprobleme en getallelyne bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige vrae wat jy verkeerd het na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die meerstap-voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk deur die studiegids weer en probeer hierdie stel weer.' },
      ],
    },
  ],
}
