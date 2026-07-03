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

export type TopicData = {
  title: string
  grade: number
  sections: Section[]
  topicPractice?: OpenQuestion[]
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
    },
  ],
  topicPractice: [

    // ── Afdeling 1: Wat is Heelgetalle? ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Skryf drie voorbeelde van heelgetalle wat jy in die werklike lewe kan sien.',
      answer:
        'Enige drie heelgetalle uit die werklike lewe is korrek. Voorbeelde:\n' +
        '• 15 leerders in ʼn groep\n' +
        '• 250 bladsye in ʼn boek\n' +
        '• 8 doele aangeteken in ʼn wedstryd\n\n' +
        'Onthou: ʼn heelgetal is enige volledige telgetal wat by 0 begin — geen breuke, geen desimale nie.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Watter van hierdie is heelgetalle? Skryf slegs die heelgetalle, in dieselfde volgorde as die lys, geskei deur kommas:\n\n' +
        '4,  ½,  7,  3,5,  100,  0',
      // normalizeAnswer("4, 7, 100, 0") → strip spaces/commas → "471000"
      correctAnswer: '471000',
      explanation:
        '4, 7, 100 en 0 is almal heelgetalle.\n\n' +
        '• 4 ✓ — ʼn volledige telgetal\n' +
        '• ½ ✗ — ʼn breuk, nie ʼn heelgetal nie\n' +
        '• 7 ✓ — ʼn volledige telgetal\n' +
        '• 3,5 ✗ — ʼn desimale getal, nie ʼn heelgetal nie\n' +
        '• 100 ✓ — ʼn volledige telgetal\n' +
        '• 0 ✓ — nul is ʼn heelgetal\n\n' +
        'Antwoord: 4, 7, 100, 0',
      answer: '4, 7, 100, 0',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Winkel het 1 245 rooi appels, 873 groen appels en 12 geel appels.\n\n' +
        'Bereken die totale aantal appels. Verduidelik dan waarom jou antwoord ʼn heelgetal is en nie ʼn breuk nie.',
      answer:
        'Totaal = 1 245 + 873 + 12 = 2 130\n\n' +
        '2 130 is ʼn heelgetal omdat jy net volledige appels kan tel — ' +
        'daar is nie so iets soos ʼn halwe appel as jy voorraad tel nie. ' +
        'Die antwoord het geen breuk- of desimale deel nie, dus is dit ʼn heelgetal.',
    },

    // ── Afdeling 2: Plekwaarde ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Skryf die getal 3 072 in uitgebreide notasie.',
      // normalizeAnswer("3 000 + 0 + 70 + 2") → "3000+0+70+2"
      correctAnswer: '3000+0+70+2',
      explanation:
        '3 072 = 3 000 + 0 + 70 + 2\n\n' +
        '• 3 is in die Duisende-kolom → 3 000\n' +
        '• 0 is in die Honderde-kolom → 0\n' +
        '• 7 is in die Tiene-kolom → 70\n' +
        '• 2 is in die Eenhede-kolom → 2',
      answer: '3 000 + 0 + 70 + 2',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Wat is die waarde van die syfer 6 in elk van hierdie getalle?\n\n' +
        'a) 6 431\n' +
        'b) 2 640\n' +
        'c) 3 516',
      parts: [
        {
          label: 'a)',
          // 6 is in die Duisende-kolom → 6 000 → normalized: "6000"
          correctAnswer: '6000',
          explanation:
            'In 6 431 is die syfer 6 in die Duisende-kolom.\nWaarde = 6 × 1 000 = 6 000',
        },
        {
          label: 'b)',
          // 6 is in die Honderde-kolom → 600 → normalized: "600"
          correctAnswer: '600',
          explanation:
            'In 2 640 is die syfer 6 in die Honderde-kolom.\nWaarde = 6 × 100 = 600',
        },
        {
          label: 'c)',
          // 6 is in die Eenhede-kolom → 6 → normalized: "6"
          correctAnswer: '6',
          explanation:
            'In 3 516 is die syfer 6 in die Eenhede-kolom.\nWaarde = 6 × 1 = 6',
        },
      ],
      answer: 'a) 6 000\nb) 600\nc) 6',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Skryf die getal wat 4 duisende, 0 honderde, 8 tiene en 3 eenhede het.\n' +
        'Skryf dit dan in uitgebreide notasie.',
      parts: [
        {
          label: 'Getal:',
          // 4 083 → normalized: "4083"
          correctAnswer: '4083',
          explanation:
            'Plaas elke syfer in sy kolom:\n' +
            '• 4 duisende → Duisende-kolom\n' +
            '• 0 honderde → Honderde-kolom\n' +
            '• 8 tiene → Tiene-kolom\n' +
            '• 3 eenhede → Eenhede-kolom\n\n' +
            'Die getal is 4 083.',
        },
        {
          label: 'Uitgebreide notasie:',
          // 4 000 + 0 + 80 + 3 → normalized: "4000+0+80+3"
          correctAnswer: '4000+0+80+3',
          explanation:
            '4 083 = 4 000 + 0 + 80 + 3\n\n' +
            '• 4 is in die Duisende-kolom → 4 000\n' +
            '• 0 is in die Honderde-kolom → 0\n' +
            '• 8 is in die Tiene-kolom → 80\n' +
            '• 3 is in die Eenhede-kolom → 3',
        },
      ],
      answer: 'Getal: 4 083\nUitgebrei: 4 000 + 0 + 80 + 3',
    },

    // ── Afdeling 3: Tel Vorentoe en Terugwaarts ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Tel vorentoe in 10e vanaf 3 450. Skryf die volgende 4 getalle, geskei deur kommas.',
      // "3 460, 3 470, 3 480, 3 490" → strip spaces/commas → "3460347034803490"
      correctAnswer: '3460347034803490',
      explanation:
        'Om vorentoe te tel in 10e beteken om 10 elke keer by te tel:\n' +
        '3 450 + 10 = 3 460\n' +
        '3 460 + 10 = 3 470\n' +
        '3 470 + 10 = 3 480\n' +
        '3 480 + 10 = 3 490\n\n' +
        'Antwoord: 3 460, 3 470, 3 480, 3 490',
      answer: '3 460, 3 470, 3 480, 3 490',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Tel terugwaarts in 100e vanaf 7 800. Skryf die volgende 5 getalle, geskei deur kommas.',
      // "7 700, 7 600, 7 500, 7 400, 7 300" → strip spaces/commas → "77007600750074007300"
      correctAnswer: '77007600750074007300',
      explanation:
        'Om terugwaarts te tel in 100e beteken om 100 elke keer af te trek:\n' +
        '7 800 − 100 = 7 700\n' +
        '7 700 − 100 = 7 600\n' +
        '7 600 − 100 = 7 500\n' +
        '7 500 − 100 = 7 400\n' +
        '7 400 − 100 = 7 300\n\n' +
        'Antwoord: 7 700, 7 600, 7 500, 7 400, 7 300',
      answer: '7 700, 7 600, 7 500, 7 400, 7 300',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getalpatroon gaan: 2 000,  3 000,  4 000\n\n' +
        'a) Wat is die reël? (Skryf: tel ___ by elke keer)\n' +
        'b) Skryf die volgende 3 getalle, geskei deur kommas.\n' +
        'c) Wat sal die 10de getal in die patroon wees?',
      parts: [
        {
          label: 'a)',
          // "tel 1 000 by elke keer" → lowercase → strip spaces → "tel1000byelkekeer"
          correctAnswer: 'tel1000byelkekeer',
          explanation:
            'Elke getal is 1 000 meer as die een voor dit.\n' +
            '2 000 + 1 000 = 3 000 ✓\n' +
            '3 000 + 1 000 = 4 000 ✓\n\n' +
            'Reël: tel 1 000 by elke keer.',
        },
        {
          label: 'b)',
          // "5 000, 6 000, 7 000" → strip spaces/commas → "500060007000"
          correctAnswer: '500060007000',
          explanation:
            'Hou aan om 1 000 elke keer by te tel:\n' +
            '4 000 + 1 000 = 5 000\n' +
            '5 000 + 1 000 = 6 000\n' +
            '6 000 + 1 000 = 7 000\n\n' +
            'Volgende 3 getalle: 5 000, 6 000, 7 000',
        },
        {
          label: 'c)',
          // "11 000" → strip spaces → "11000"
          correctAnswer: '11000',
          explanation:
            'Die patroon begin by 2 000 en ons tel 1 000 elke keer by.\n' +
            '1ste getal: 2 000\n' +
            '2de getal: 3 000\n' +
            '3de getal: 4 000\n' +
            '…\n' +
            '10de getal = 2 000 + (9 × 1 000) = 2 000 + 9 000 = 11 000',
        },
      ],
      answer: 'a) Tel 1 000 by elke keer\nb) 5 000, 6 000, 7 000\nc) 11 000',
    },

    // ── Afdeling 4: Vergelyk en Orden Getalle ────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skryf kleiner as, groter as, of gelyk aan tussen elke paar getalle:\n\n' +
        'a) 3 456 en 3 654\n' +
        'b) 7 001 en 7 001\n' +
        'c) 4 299 en 4 300',
      parts: [
        {
          label: 'a)',
          // "kleiner as" → strip spaces → "kleineras"
          correctAnswer: 'kleineras',
          explanation:
            'Vergelyk die honderde-syfers: 3 4__ vs 3 6__.\n' +
            '4 < 6, dus is 3 456 kleiner as 3 654.\n\n' +
            '3 456 < 3 654',
        },
        {
          label: 'b)',
          // "gelyk aan" → strip spaces → "gelykaan"
          correctAnswer: 'gelykaan',
          explanation:
            'Die twee getalle is identies — elke syfer is dieselfde.\n\n' +
            '7 001 = 7 001',
        },
        {
          label: 'c)',
          // "kleiner as" → strip spaces → "kleineras"
          correctAnswer: 'kleineras',
          explanation:
            'Dieselfde duisende (4) en dieselfde honderde (2).\n' +
            'Vergelyk die tiene-syfers: 4 29_ vs 4 30_.\n' +
            '9 tiene is steeds minder as 30_ omdat die honderde-syfer van 4 300 een meer is.\n' +
            'Eenvoudiger: 4 299 is een minder as 4 300.\n\n' +
            '4 299 < 4 300',
        },
      ],
      answer: 'a) kleiner as\nb) gelyk aan\nc) kleiner as',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Orden hierdie getalle van kleinste na grootste. Skryf hulle geskei deur kommas:\n\n' +
        '5 032,  4 999,  5 320,  4 909',
      // "4 909, 4 999, 5 032, 5 320" → strip spaces/commas → "4909499950325320"
      correctAnswer: '4909499950325320',
      explanation:
        'Stap 1 — Vergelyk die duisende-syfers: 5, 4, 5, 4.\n' +
        'Getalle met 4 duisende (4 999 en 4 909) is kleiner as getalle met 5 duisende (5 032 en 5 320).\n\n' +
        'Stap 2 — Vergelyk 4 909 en 4 999 (dieselfde duisende-syfer):\n' +
        'Honderde-syfers: 9 vs 9 — gelyk. Vergelyk tiene: 0 vs 9. Aangesien 0 < 9, is 4 909 < 4 999.\n\n' +
        'Stap 3 — Vergelyk 5 032 en 5 320 (dieselfde duisende-syfer):\n' +
        'Honderde-syfers: 0 vs 3. Aangesien 0 < 3, is 5 032 < 5 320.\n\n' +
        'Volgorde van kleinste na grootste: 4 909,  4 999,  5 032,  5 320',
      answer: '4 909, 4 999, 5 032, 5 320',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo sê 3 987 is groter as 4 001 omdat die syfer 9 groter as 0 is.\n\n' +
        'Is Thabo korrek? Verduidelik waarom of waarom nie.',
      answer:
        'Nee, Thabo is nie korrek nie. 4 001 is die groter getal.\n\n' +
        'Hoekom: jy moet altyd die hoogste plekwaarde eerste vergelyk — die duisende-kolom.\n' +
        '• 3 987 het 3 duisende.\n' +
        '• 4 001 het 4 duisende.\n\n' +
        'Omdat 4 > 3 in die duisende-kolom, is 4 001 groter as 3 987, maak nie saak wat die ander syfers is nie.\n\n' +
        'Thabo se fout was om die honderde-syfer te vergelyk (9 vs 0) in plaas van die duisende-syfer. Begin altyd by die hoogste plekwaarde.',
    },

    // ── Afdeling 5: Afronding ─────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Rond 3 456 af na die naaste 10.',
      // "3 460" → strip spaces → "3460"
      correctAnswer: '3460',
      explanation:
        'Kyk na die eenhede-syfer: 6. Omdat 6 ≥ 5, rond ons op.\n' +
        'Tel 1 by die tiene-syfer: 5 + 1 = 6. Vervang die eenhede-syfer met 0.\n\n' +
        '3 456 → 3 460',
      answer: '3 460',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Rond elk van die volgende getalle af:\n\n' +
        'a) 7 849 na die naaste 100\n' +
        'b) 2 350 na die naaste 100\n' +
        'c) 6 784 na die naaste 10',
      parts: [
        {
          label: 'a)',
          // "7 800" → strip spaces → "7800"
          correctAnswer: '7800',
          explanation:
            'Kyk na die tiene-syfer: 4. Omdat 4 < 5, rond ons af.\n' +
            'Die honderde-syfer bly as 8. Vervang die tiene en eenhede met 0.\n\n' +
            '7 849 → 7 800',
        },
        {
          label: 'b)',
          // "2 400" → strip spaces → "2400"
          correctAnswer: '2400',
          explanation:
            'Kyk na die tiene-syfer: 5. Omdat 5 ≥ 5, rond ons op.\n' +
            'Tel 1 by die honderde-syfer: 3 + 1 = 4. Vervang die tiene en eenhede met 0.\n\n' +
            '2 350 → 2 400',
        },
        {
          label: 'c)',
          // "6 780" → strip spaces → "6780"
          correctAnswer: '6780',
          explanation:
            'Kyk na die eenhede-syfer: 4. Omdat 4 < 5, rond ons af.\n' +
            'Die tiene-syfer bly as 8. Vervang die eenhede-syfer met 0.\n\n' +
            '6 784 → 6 780',
        },
      ],
      answer: 'a) 7 800\nb) 2 400\nc) 6 780',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Boer het 4 763 skape. ʼn Nuusberig sê hy het ongeveer 4 800 skape.\n\n' +
        'a) Rond 4 763 af na die naaste 100. Bevestig dit die nuusberig?\n' +
        'b) Rond 4 763 af na die naaste 10.\n' +
        'c) Watter afgeronde antwoord is meer akkuraat — skryf 4 800 of 4 760.',
      parts: [
        {
          label: 'a)',
          // "4 800" → strip spaces → "4800"
          correctAnswer: '4800',
          explanation:
            'Tiene-syfer is 6 (≥ 5), dus rond ons op.\n' +
            'Honderde-syfer 7 + 1 = 8. Vervang tiene en eenhede met 0.\n\n' +
            '4 763 → 4 800 ✓ — ja, die nuusberig is korrek.',
        },
        {
          label: 'b)',
          // "4 760" → strip spaces → "4760"
          correctAnswer: '4760',
          explanation:
            'Eenhede-syfer is 3 (< 5), dus rond ons af.\n' +
            'Die tiene-syfer bly as 6. Vervang die eenhede-syfer met 0.\n\n' +
            '4 763 → 4 760',
        },
        {
          label: 'c)',
          // "4 760" → strip spaces → "4760"
          correctAnswer: '4760',
          explanation:
            '4 760 is meer akkuraat omdat dit nader aan die werklike getal 4 763 is.\n' +
            '• 4 763 − 4 760 = 3 (verskil van slegs 3)\n' +
            '• 4 800 − 4 763 = 37 (verskil van 37)\n\n' +
            'Afronding na die naaste 10 gee altyd ʼn meer akkurate resultaat as afronding na die naaste 100.',
        },
      ],
      answer: 'a) 4 800 (ja, korrek)\nb) 4 760\nc) 4 760',
    },

    // ── Afdeling 6: Stel Getalle voor op ʼn Getallelyn ──────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'ʼn Getallelyn gaan van 0 na 1 000 in intervalle van 100.\n\n' +
        'Tussen watter twee getalle sit 650? Skryf die twee getalle geskei deur ʼn komma.',
      // "600, 700" → strip spaces/commas → "600700"
      correctAnswer: '600700',
      explanation:
        '650 is tussen 600 en 700.\n\n' +
        'Die intervallmerke is: 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1 000.\n' +
        '650 val tussen die 600-merk en die 700-merk.\n' +
        'Dit is presies halfpad tussen hulle (600 + 700 = 1 300 ÷ 2 = 650).',
      answer: '600, 700',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'ʼn Getallelyn gaan van 5 000 na 6 000 in intervalle van 100.\n\n' +
        'Waar sou jy 5 500 plaas? Verduidelik hoe jy dit weet.',
      answer:
        '5 500 sit presies halfpad tussen 5 000 en 6 000.\n\n' +
        'Hoe om die halfpadpunt te vind:\n' +
        'Tel die twee eindwaardes bymekaar en deel deur 2:\n' +
        '5 000 + 6 000 = 11 000\n' +
        '11 000 ÷ 2 = 5 500\n\n' +
        'Dus word 5 500 reg in die middel van die getallelyn geplaas.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getallelyn gaan van 3 000 na 4 000 in intervalle van 100.\n\n' +
        'a) Watter getal is halfpad tussen 3 400 en 3 500?\n' +
        'b) Watter getal is driekwart van die pad tussen 3 000 en 4 000?',
      parts: [
        {
          label: 'a)',
          // "3 450" → strip spaces → "3450"
          correctAnswer: '3450',
          explanation:
            'Om die halfpadpunt tussen 3 400 en 3 500 te vind:\n' +
            'Tel die twee merke bymekaar: 3 400 + 3 500 = 6 900\n' +
            'Deel deur 2: 6 900 ÷ 2 = 3 450\n\n' +
            'Die halfpadpunt is 3 450.',
        },
        {
          label: 'b)',
          // "3 750" → strip spaces → "3750"
          correctAnswer: '3750',
          explanation:
            'Driekwart van die pad tussen 3 000 en 4 000:\n' +
            'Die totale afstand is 4 000 − 3 000 = 1 000.\n' +
            'Driekwart van 1 000 = ¾ × 1 000 = 750.\n' +
            'Begin by 3 000 en tel 750 by: 3 000 + 750 = 3 750.\n\n' +
            'Die antwoord is 3 750.',
        },
      ],
      answer: 'a) 3 450\nb) 3 750',
    },

  ],
}
