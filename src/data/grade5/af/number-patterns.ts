import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

export const topicData: TopicData = {
  title: 'Getalpatrone',
  grade: 5,
  sections: [
    {
      id: 'identifying-extending-patterns',
      title: 'Getalpatrone Identifiseer en Uitbrei',
      icon: '🔢',
      explanation: `
<p>ʼn <strong>Getalpatroon</strong> is ʼn reeks getalle wat ʼn reël volg. Elke getal in die reeks word ʼn <strong>term</strong> genoem. Deur opeenvolgende terme te vergelyk, kan jy die reël ontdek en dit dan gebruik om die patroon so ver as wat jy wil uit te brei.</p>

<h3>Toenemende Patrone</h3>
<p>ʼn <strong>Toenemende patroon</strong> groei — die terme word groter. Die mees algemene rede is dat dieselfde hoeveelheid elke keer <em>bygetel</em> word.</p>
<p>Voorbeeld: <span style="color:#2563eb">3, 6, 9, 12, …</span> — <span style="color:#dc2626">Reël: tel 3 by</span> — volgende term: <span style="color:#16a34a">15</span></p>

<h3>Afnemende Patrone</h3>
<p>ʼn <strong>Afnemende patroon</strong> krimp — die terme word kleiner. Dieselfde hoeveelheid word elke keer <em>afgetrek</em>.</p>
<p>Voorbeeld: <span style="color:#2563eb">30, 25, 20, 15, …</span> — <span style="color:#dc2626">Reël: trek 5 af</span> — volgende term: <span style="color:#16a34a">10</span></p>

<VideoPlaceholder title="Getalpatrone Identifiseer en Uitbrei" duration="4 min" />
<DiagramPlaceholder title="Getallelyn — patroon van +3" description="ʼn Horisontale getallelyn van 0 tot 18. Geboë pyle van gelyke lengte wys spronge van +3 wat land op 3, 6, 9, 12, 15, 18." />
`,
      workedExamples: [
        {
          title: 'ʼn Toenemende Patroon Uitbrei',
          question: '<p>Vind die volgende twee terme in die patroon: <span style="color:#2563eb">5, 10, 15, 20, ___, ___</span></p>',
          steps: [
            'Vind die verskil tussen opeenvolgende terme: 10 − 5 = 5, 15 − 10 = 5, 20 − 15 = 5',
            'Die verskil is altyd 5, dus is die reël tel 5 by. Dit is ʼn toenemende patroon.',
            'Pas die reël toe om die ontbrekende terme te vind: 20 + 5 = 25, dan 25 + 5 = 30',
          ],
          answer: 'Die volgende twee terme is 25 en 30.',
        },
        {
          title: 'ʼn Afnemende Patroon Uitbrei',
          question: '<p>Vind die volgende twee terme in die patroon: <span style="color:#2563eb">100, 80, 60, 40, ___, ___</span></p>',
          steps: [
            'Vind die verskil tussen opeenvolgende terme: 80 − 100 = −20, 60 − 80 = −20, 40 − 60 = −20',
            'Die verskil is altyd −20, dus is die reël trek 20 af. Dit is ʼn afnemende patroon.',
            'Pas die reël toe om die ontbrekende terme te vind: 40 − 20 = 20, dan 20 − 20 = 0',
          ],
          answer: 'Die volgende twee terme is 20 en 0.',
        },
        {
          title: 'ʼn Verdubbelingspatroon Uitbrei',
          question: '<p>Vind die volgende term in die patroon: <span style="color:#2563eb">2, 4, 8, 16, ___</span></p>',
          steps: [
            'Kontroleer of die verskille gelyk is: 4 − 2 = 2, 8 − 4 = 4, 16 − 8 = 8. Die verskille is nie gelyk nie, dus is dit nie ʼn eenvoudige optelpatroon nie.',
            'Kontroleer die verhoudings (deel elke term deur die term voor dit): 4 ÷ 2 = 2, 8 ÷ 4 = 2, 16 ÷ 8 = 2. Die verhouding is altyd 2.',
            'Die reël is vermenigvuldig elke keer met 2. Dit is ʼn toenemende patroon wat verdubbel.',
            'Pas die reël toe: 16 × 2 = 32',
          ],
          answer: 'Die volgende term is 32.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V1 Maklik — volgende term in ʼn ×7 optelpatroon ──────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat is die volgende term in die patroon: 7, 14, 21, 28, ___?',
          answer: '35',
          checkMode: 'auto',
          correctAnswer: '35',
          explanation: 'Die reël is tel 7 by. 28 + 7 = 35.',
        },
        // ── V2 Medium — volgende term vir ×3 en −10 patrone ───────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die volgende term vir elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 3, 9, 27, 81, ___',
              correctAnswer: '243',
              explanation: 'Kontroleer verhoudings: 9 ÷ 3 = 3, 27 ÷ 9 = 3, 81 ÷ 27 = 3. Reël: vermenigvuldig met 3. Volgende term: 81 × 3 = 243.',
            },
            {
              label: 'b) 100, 90, 80, 70, ___',
              correctAnswer: '60',
              explanation: 'Verskille: 90 − 100 = −10, 80 − 90 = −10, 70 − 80 = −10. Reël: trek 10 af. Volgende term: 70 − 10 = 60.',
            },
          ],
        },
        // ── V3 Moeilik — genereer terme en vind die 7de in ʼn ×2 patroon ─────────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon begin by 4. Die reël is vermenigvuldig met 2.\n\na) Skryf die eerste 6 terme.\nb) Wat is die 7de term?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Eerste 6 terme (skryf met kommas, bv. 1, 2, 4, 8, 16, 32)',
              correctAnswer: '4, 8, 16, 32, 64, 128',
              correctAnswers: ['4, 8, 16, 32, 64, 128', '4,8,16,32,64,128', '4 8 16 32 64 128'],
              explanation: 'Begin by 4 en vermenigvuldig elke keer met 2: 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32, 32 × 2 = 64, 64 × 2 = 128.',
            },
            {
              label: 'b) 7de term',
              correctAnswer: '256',
              explanation: 'Gaan voort met die patroon: 128 × 2 = 256.',
            },
          ],
        },
      ],
    },
    {
      id: 'describing-rule-of-pattern',
      title: 'Die Reël van ʼn Patroon Beskryf',
      icon: '📐',
      explanation: `
<p>Om die <strong>reël</strong> van ʼn getalpatroon te <strong>beskryf</strong>, kyk na wat gebeur om van een term na die volgende te gaan. Vra jouself: word dieselfde getal elke keer bygetel, afgetrek, vermenigvuldig, of gedeel?</p>

<h3>Hoe om die Reël te Vind</h3>
<ol>
  <li>Skryf die verskil (of verhouding) tussen elke paar opeenvolgende terme neer.</li>
  <li>As die verskille almal gelyk is, gebruik die reël <strong>optelling</strong> (positiewe verskil) of <strong>aftrekking</strong> (negatiewe verskil).</li>
  <li>As die verhoudings almal gelyk is, gebruik die reël <strong>vermenigvuldiging</strong> (verhouding &gt; 1) of <strong>deling</strong> (verhouding &lt; 1).</li>
  <li>Skryf die reël in ʼn volledige sin: byvoorbeeld, <em>"Die reël is tel 7 by"</em> of <em>"Die reël is vermenigvuldig met 3."</em></li>
</ol>

<h3>Vinnige Verwysing</h3>
<p><span style="color:#dc2626">Tel 6 by</span> → terme neem elke keer met 6 toe (bv. <span style="color:#2563eb">4, 10, 16, 22</span>)</p>
<p><span style="color:#dc2626">Trek 8 af</span> → terme neem elke keer met 8 af (bv. <span style="color:#2563eb">40, 32, 24, 16</span>)</p>
<p><span style="color:#dc2626">Vermenigvuldig met 3</span> → terme verdriedubbel elke keer (bv. <span style="color:#2563eb">2, 6, 18, 54</span>)</p>
<p><span style="color:#dc2626">Deel deur 2</span> → terme halveer elke keer (bv. <span style="color:#2563eb">80, 40, 20, 10</span>)</p>

<VideoPlaceholder title="Die Reël van ʼn Patroon Beskryf" duration="5 min" />
`,
      workedExamples: [
        {
          title: 'ʼn Optelpatroon Beskryf',
          question: '<p>Beskryf die reël vir die patroon: <span style="color:#2563eb">8, 15, 22, 29, 36</span></p>',
          steps: [
            'Trek elke term af van die een wat daarop volg: 15 − 8 = 7, 22 − 15 = 7, 29 − 22 = 7, 36 − 29 = 7',
            'Kontroleer dat die verskil elke keer dieselfde is: ja, dit is altyd 7.',
            'Skryf die reël: tel 7 by.',
          ],
          answer: 'Die reël is tel 7 by. Elke term is 7 meer as die term voor dit.',
        },
        {
          title: 'ʼn Aftrekpatroon Beskryf',
          question: '<p>Beskryf die reël vir die patroon: <span style="color:#2563eb">96, 84, 72, 60, 48</span></p>',
          steps: [
            'Trek elke term af van die een wat daarop volg: 84 − 96 = −12, 72 − 84 = −12, 60 − 72 = −12, 48 − 60 = −12',
            'Kontroleer dat die verskil elke keer dieselfde is: ja, dit is altyd −12.',
            'Skryf die reël: trek 12 af.',
          ],
          answer: 'Die reël is trek 12 af. Elke term is 12 minder as die term voor dit. Dit is ʼn afnemende patroon.',
        },
        {
          title: 'ʼn Vermenigvuldigingspatroon Beskryf',
          question: '<p>Beskryf die reël vir die patroon: <span style="color:#2563eb">2, 6, 18, 54</span></p>',
          steps: [
            'Kontroleer die verskille: 6 − 2 = 4, 18 − 6 = 12, 54 − 18 = 36. Die verskille is nie gelyk nie, dus is dit nie ʼn optel- of aftrekpatroon nie.',
            'Kontroleer die verhoudings (deel elke term deur die een voor dit): 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3.',
            'Kontroleer dat die verhouding elke keer dieselfde is: ja, dit is altyd 3.',
            'Skryf die reël: vermenigvuldig met 3.',
          ],
          answer: 'Die reël is vermenigvuldig met 3. Elke term is 3 keer die term voor dit.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V4 Maklik — beskryf die reël vir ʼn +11 patroon ───────────────────
        {
          difficulty: 'Easy',
          question: 'Beskryf die reël vir die patroon: 11, 22, 33, 44, 55',
          answer: 'tel 11 by',
          checkMode: 'auto',
          correctAnswer: 'tel 11 by',
          correctAnswers: ['tel 11 by', '+11', 'vermenigvuldig met 11', '+ 11'],
          explanation: 'Verskille: 22 − 11 = 11, 33 − 22 = 11, 44 − 33 = 11, 55 − 44 = 11. Die reël is tel 11 by.',
        },
        // ── V5 Medium — beskryf reël vir ÷3 en +7 patrone ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Beskryf die reël vir elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 729, 243, 81, 27',
              correctAnswer: 'deel deur 3',
              correctAnswers: ['deel deur 3', '÷3', '÷ 3', 'deel 3'],
              explanation: 'Kontroleer verhoudings: 243 ÷ 729 = 1/3, 81 ÷ 243 = 1/3, 27 ÷ 81 = 1/3. Reël: deel deur 3.',
            },
            {
              label: 'b) 6, 13, 20, 27, 34',
              correctAnswer: 'tel 7 by',
              correctAnswers: ['tel 7 by', '+7', '+ 7'],
              explanation: 'Verskille: 13 − 6 = 7, 20 − 13 = 7, 27 − 20 = 7, 34 − 27 = 7. Reël: tel 7 by.',
            },
          ],
        },
        // ── V6 Moeilik — skep en verifieer eie −6 afnemende patroon ────────────
        {
          difficulty: 'Hard',
          question: 'Skryf enige afnemende patroon wat aftrekking gebruik met ʼn konstante reël van trek 6 af. Gee die eerste 5 terme, wat by enige getal begin wat jy kies. Verduidelik dan hoe jy nagegaan het dat jou patroon korrek is.',
          answer: 'Enige geldige afnemende patroon met ʼn konstante verskil van −6 (bv. 36, 30, 24, 18, 12). Kontroleer: trek elke term af van die een voor dit — al die verskille moet gelyk aan 6 wees.',
          checkMode: 'self',
        },
      ],
    },
    {
      id: 'input-output-function-machines',
      title: 'Inset- en Uitsetwaardes — Funksiemasjiene',
      icon: '⚙️',
      explanation: `
<p>ʼn <strong>Funksiemasjien</strong> is ʼn manier om ʼn reël voor te stel. Jy voer ʼn getal in — die <strong>inset</strong> — en die masjien pas die reël toe om die <strong>uitset</strong> te lewer.</p>
<p style="text-align:center"><span style="color:#2563eb"><strong>Inset</strong></span> → <span style="color:#dc2626">[ Reël ]</span> → <span style="color:#16a34a"><strong>Uitset</strong></span></p>
<p>Die masjien pas altyd <em>presies dieselfde reël</em> op elke inset toe, dus is die resultate voorspelbaar.</p>

<h3>Ontbrekende Uitsetwaardes Vind</h3>
<p>Pas die reël direk op die inset toe: <span style="color:#2563eb">inset</span> <span style="color:#dc2626">× 4</span> = <span style="color:#16a34a">uitset</span>.</p>

<h3>Die Reël uit ʼn Tabel Vind</h3>
<p>Kyk na wat met elke <span style="color:#2563eb">inset</span> gedoen is om die <span style="color:#16a34a">uitset</span> te kry. Kontroleer of dieselfde bewerking vir elke ry werk.</p>

<h3>ʼn Ontbrekende Inset Vind</h3>
<p>Gebruik die <strong>inverse (teenoorgestelde) bewerking</strong> op die uitset om terugwaarts na die inset te werk.</p>
<ul>
  <li>Inverse van <span style="color:#dc2626">+ 6</span> is <span style="color:#dc2626">− 6</span></li>
  <li>Inverse van <span style="color:#dc2626">× 5</span> is <span style="color:#dc2626">÷ 5</span></li>
  <li>Inverse van <span style="color:#dc2626">− 9</span> is <span style="color:#dc2626">+ 9</span></li>
  <li>Inverse van <span style="color:#dc2626">÷ 3</span> is <span style="color:#dc2626">× 3</span></li>
</ul>

<VideoPlaceholder title="Inset- en Uitsetwaardes — Funksiemasjiene" duration="5 min" />
<DiagramPlaceholder title="Funksiemasjien-diagram" description="ʼn Vloeidiagram wat wys: ʼn kolom insette (3, 5, 7) wat in ʼn reghoekige blokkie invoer wat geëtiketteer is met '× 4', met pyle wat lei na ʼn kolom uitsette (12, 20, 28)." />
`,
      workedExamples: [
        {
          title: 'Uitsetwaardes Vind',
          question: `
<p>ʼn Funksiemasjien gebruik die reël <span style="color:#dc2626">× 4</span>. Voltooi die tabel.</p>
<table>
  <tr><th>Inset</th><th>Uitset</th></tr>
  <tr><td><span style="color:#2563eb">3</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">5</span></td><td><span style="color:#16a34a">___</span></td></tr>
  <tr><td><span style="color:#2563eb">7</span></td><td><span style="color:#16a34a">___</span></td></tr>
  <tr><td><span style="color:#2563eb">9</span></td><td><span style="color:#16a34a">___</span></td></tr>
</table>`,
          steps: [
            'Die reël is vermenigvuldig met 4.',
            'Pas die reël toe op elke inset: 5 × 4 = 20, 7 × 4 = 28, 9 × 4 = 36',
          ],
          answer: 'Die ontbrekende uitsette is 20, 28, en 36.',
        },
        {
          title: 'Die Reël van ʼn Funksiemasjien Vind',
          question: `
<p>Vind die reël vir hierdie funksiemasjien.</p>
<table>
  <tr><th>Inset</th><th>Uitset</th></tr>
  <tr><td><span style="color:#2563eb">2</span></td><td><span style="color:#16a34a">10</span></td></tr>
  <tr><td><span style="color:#2563eb">4</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">6</span></td><td><span style="color:#16a34a">14</span></td></tr>
  <tr><td><span style="color:#2563eb">8</span></td><td><span style="color:#16a34a">___</span></td></tr>
</table>`,
          steps: [
            'Kyk na die verskil tussen elke uitset en sy inset: 10 − 2 = 8, 12 − 4 = 8, 14 − 6 = 8',
            'Die verskil is dieselfde vir elke ry — die uitset is altyd 8 meer as die inset, dus is die reël tel 8 by.',
            'Gebruik die reël om die ontbrekende uitset te vind: 8 + 8 = 16',
          ],
          answer: 'Die reël is tel 8 by. Die ontbrekende uitset is 16.',
        },
        {
          title: 'ʼn Ontbrekende Inset Vind',
          question: `
<p>ʼn Funksiemasjien gebruik die reël <span style="color:#dc2626">× 3</span>. Vind die ontbrekende inset.</p>
<table>
  <tr><th>Inset</th><th>Uitset</th></tr>
  <tr><td><span style="color:#2563eb">4</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">6</span></td><td><span style="color:#16a34a">18</span></td></tr>
  <tr><td><span style="color:#2563eb">___</span></td><td><span style="color:#16a34a">21</span></td></tr>
</table>`,
          steps: [
            'Die reël is vermenigvuldig met 3.',
            'Die inverse van × 3 is ÷ 3. Om terugwaarts van die uitset na die inset te werk, deel die uitset deur 3.',
            'Pas die inverse toe om die ontbrekende inset te vind: 21 ÷ 3 = 7',
            'Kontroleer: 7 × 3 = 21 ✓',
          ],
          answer: 'Die ontbrekende inset is 7.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V7 Maklik — vind uitset van ×6 funksiemasjien ─────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Funksiemasjien gebruik die reël "vermenigvuldig met 6". Wat is die uitset wanneer die inset 9 is?',
          answer: '54',
          checkMode: 'auto',
          correctAnswer: '54',
          explanation: 'Pas die reël toe: 9 × 6 = 54.',
        },
        // ── V8 Medium — vind ontbrekende uitset en gee reël uit tabel ────────
        {
          difficulty: 'Medium',
          question: 'Gebruik die funksiemasjien-tabel om elke vraag te beantwoord.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'Die tabel wys: Inset 2 → Uitset 9, Inset 4 → Uitset 11, Inset 6 → Uitset 13, Inset 8 → Uitset ___. Vind die ontbrekende uitset.',
              correctAnswer: '15',
              explanation: 'Die uitset is altyd 7 meer as die inset: 2 + 7 = 9, 4 + 7 = 11, 6 + 7 = 13, 8 + 7 = 15. Ontbrekende uitset = 15.',
            },
            {
              label: 'Gee die reël van die funksiemasjien hierbo.',
              correctAnswer: 'tel 7 by',
              correctAnswers: ['tel 7 by', '+7', '+ 7'],
              explanation: 'Die uitset minus die inset is altyd 7. Reël: tel 7 by.',
            },
          ],
        },
        // ── V9 Moeilik — drie-deel ×6 masjien: uitset, inverse, tabel ─────────
        {
          difficulty: 'Hard',
          question: 'ʼn Funksiemasjien gebruik die reël "vermenigvuldig met 6".',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Wat is die uitset wanneer die inset 11 is?',
              correctAnswer: '66',
              explanation: '11 × 6 = 66.',
            },
            {
              label: 'b) Wat is die inset wanneer die uitset 54 is?',
              correctAnswer: '9',
              explanation: 'Gebruik die inverse bewerking: ÷ 6. 54 ÷ 6 = 9. Kontroleer: 9 × 6 = 54 ✓',
            },
            {
              label: 'c) Voltooi die tabel vir insette 3, 5, 7. Skryf die drie uitsette met kommas (bv. 12, 20, 28).',
              correctAnswer: '18, 30, 42',
              correctAnswers: ['18, 30, 42', '18,30,42', '18 30 42'],
              explanation: '3 × 6 = 18, 5 × 6 = 30, 7 × 6 = 42.',
            },
          ],
        },
      ],
    },
    {
      id: 'patterns-all-four-operations',
      title: 'Patrone met Al Vier Bewerkings',
      icon: '➕',
      explanation: `
<p>Getalpatrone kan enige van die vier bewerkings as hul reël gebruik. As jy weet hoe om elke soort vinnig te herken, sal dit jou help om enige patroon wat jy teëkom te identifiseer en uit te brei.</p>

<h3>Die Bewerking Identifiseer</h3>
<table>
  <tr><th>Wat jy sien</th><th>Bewerking</th><th>Voorbeeld</th></tr>
  <tr>
    <td>Terme <em>neem toe</em> met dieselfde hoeveelheid</td>
    <td><span style="color:#dc2626">Optelling</span></td>
    <td><span style="color:#2563eb">7, 14, 21, 28</span> → <span style="color:#dc2626">+ 7</span></td>
  </tr>
  <tr>
    <td>Terme <em>neem af</em> met dieselfde hoeveelheid</td>
    <td><span style="color:#dc2626">Aftrekking</span></td>
    <td><span style="color:#2563eb">50, 40, 30, 20</span> → <span style="color:#dc2626">− 10</span></td>
  </tr>
  <tr>
    <td>Terme groei met dieselfde <em>verhouding</em> (elke term is ʼn veelvoud van die een voor dit)</td>
    <td><span style="color:#dc2626">Vermenigvuldiging</span></td>
    <td><span style="color:#2563eb">5, 15, 45, 135</span> → <span style="color:#dc2626">× 3</span></td>
  </tr>
  <tr>
    <td>Terme krimp met dieselfde <em>verhouding</em> (elke term is ʼn breukdeel van die een voor dit)</td>
    <td><span style="color:#dc2626">Deling</span></td>
    <td><span style="color:#2563eb">80, 40, 20, 10</span> → <span style="color:#dc2626">÷ 2</span></td>
  </tr>
</table>

<p><strong>Wenk:</strong> Kontroleer altyd eers die verskille. As dit gelyk is, is dit ʼn optel- of aftrekpatroon. As dit <em>nie</em> gelyk is nie, kontroleer die verhoudings — dit is waarskynlik ʼn vermenigvuldigings- of delingspatroon.</p>

<VideoPlaceholder title="Patrone met Al Vier Bewerkings" duration="5 min" />
`,
      workedExamples: [
        {
          title: 'Optelpatroon',
          question: '<p>Vind die volgende term en gee die reël: <span style="color:#2563eb">13, 21, 29, 37, ___</span></p>',
          steps: [
            'Vind die verskille tussen opeenvolgende terme: 21 − 13 = 8, 29 − 21 = 8, 37 − 29 = 8',
            'Die verskille is gelyk, dus is dit ʼn optelpatroon. Die reël is tel 8 by.',
            'Pas die reël toe: 37 + 8 = 45',
          ],
          answer: 'Die reël is tel 8 by. Die volgende term is 45.',
        },
        {
          title: 'Aftrekpatroon',
          question: '<p>Vind die volgende term en gee die reël: <span style="color:#2563eb">72, 60, 48, 36, ___</span></p>',
          steps: [
            'Vind die verskille tussen opeenvolgende terme: 60 − 72 = −12, 48 − 60 = −12, 36 − 48 = −12',
            'Die verskille is gelyk en negatief, dus is dit ʼn aftrekpatroon. Die reël is trek 12 af.',
            'Pas die reël toe: 36 − 12 = 24',
          ],
          answer: 'Die reël is trek 12 af. Die volgende term is 24.',
        },
        {
          title: 'Delingspatroon',
          question: '<p>Vind die volgende term en gee die reël: <span style="color:#2563eb">243, 81, 27, 9, ___</span></p>',
          steps: [
            'Kontroleer die verskille: 81 − 243 = −162, 27 − 81 = −54, 9 − 27 = −18. Die verskille is nie gelyk nie, dus is dit nie ʼn aftrekpatroon nie.',
            'Kontroleer die verhoudings (deel elke term deur die een voor dit): 81 ÷ 243 = 1/3, 27 ÷ 81 = 1/3, 9 ÷ 27 = 1/3.',
            'Die verhoudings is gelyk en minder as 1, dus is dit ʼn delingspatroon. Die reël is deel deur 3.',
            'Pas die reël toe: 9 ÷ 3 = 3',
          ],
          answer: 'Die reël is deel deur 3. Die volgende term is 3.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V10 Maklik — volgende term in ʼn ÷2 delingspatroon ───────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon: 256, 128, 64, 32, ___',
          answer: '16',
          checkMode: 'auto',
          correctAnswer: '16',
          explanation: 'Kontroleer verhoudings: 128 ÷ 256 = ½, 64 ÷ 128 = ½, 32 ÷ 64 = ½. Reël: deel deur 2. Volgende term: 32 ÷ 2 = 16.',
        },
        // ── V11 Medium — gee reël vir ×3 en skryf volgende twee −25 terme ──────
        {
          difficulty: 'Medium',
          question: 'Identifiseer die bewerking en vind die ontbrekende waardes.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Gee die reël vir die patroon: 7, 21, 63, 189',
              correctAnswer: 'vermenigvuldig met 3',
              correctAnswers: ['vermenigvuldig met 3', '×3', 'x3', '× 3', 'keer 3'],
              explanation: 'Verhoudings: 21 ÷ 7 = 3, 63 ÷ 21 = 3, 189 ÷ 63 = 3. Reël: vermenigvuldig met 3.',
            },
            {
              label: 'b) Skryf die volgende twee terme van: 200, 175, 150, 125, ___, ___  (skryf met ʼn komma, bv. 80, 55)',
              correctAnswer: '100, 75',
              correctAnswers: ['100, 75', '100,75', '100 75'],
              explanation: 'Verskille: 175 − 200 = −25. Reël: trek 25 af. 125 − 25 = 100. 100 − 25 = 75.',
            },
          ],
        },
        // ── V12 Moeilik — eerste 5 terme van ×4 patroon en klassifiseer toenemend ────
        {
          difficulty: 'Hard',
          question: 'ʼn Patroon begin by 5. Die reël is vermenigvuldig met 4.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skryf die eerste 5 terme (met kommas, bv. 2, 6, 18, 54, 162)',
              correctAnswer: '5, 20, 80, 320, 1280',
              correctAnswers: ['5, 20, 80, 320, 1280', '5,20,80,320,1280', '5 20 80 320 1280'],
              explanation: '5 × 4 = 20, 20 × 4 = 80, 80 × 4 = 320, 320 × 4 = 1 280.',
            },
            {
              label: 'b) Is hierdie patroon toenemend, afnemend, of nie een van die twee nie? Verduidelik jou antwoord.',
              checkMode: 'self',
              answer: 'Toenemend — elke term is 4 keer die een voor dit, dus word die terme elke stap groter.',
            },
          ],
        },
      ],
    },
    {
      id: 'finding-missing-numbers',
      title: 'Ontbrekende Getalle in ʼn Patroon Vind',
      icon: '❓',
      explanation: `
<p>Soms ontbreek ʼn term in die <strong>middel</strong> van ʼn patroon eerder as aan die einde. Om ʼn <span style="color:#ea580c;font-weight:700">ontbrekende term</span> te vind, ontdek jy eers die <span style="color:#dc2626;font-weight:700">reël</span> uit die <span style="color:#2563eb;font-weight:700">bekende terme</span>, en pas dan daardie reël toe om die gaping te vul.</p>

<h3>Strategie: Vind → Pas Toe → Kontroleer</h3>
<ol>
  <li><strong>Vind die reël</strong> — Kyk na die <span style="color:#2563eb">bekende terme</span> wat langs mekaar lê. Vind die konstante verskil of verhouding tussen hulle.</li>
  <li><strong>Pas die reël toe</strong> — Werk <em>vorentoe</em> vanaf die bekende term <em>voor</em> die gaping, of werk <em>terugwaarts</em> vanaf die bekende term <em>na</em> die gaping, om die <span style="color:#ea580c">ontbrekende term</span> te vind.</li>
  <li><strong>Kontroleer</strong> — Sit jou antwoord terug in die reeks in en bevestig dat elke paar opeenvolgende terme dieselfde <span style="color:#dc2626">reël</span> volg.</li>
</ol>

<h3>Terugwaarts werk deur die inverse bewerking te gebruik</h3>
<ul>
  <li>As die reël <span style="color:#dc2626">tel 8 by</span> is, werk terugwaarts deur <span style="color:#dc2626">8 af te trek</span> van die term <em>na</em> die gaping.</li>
  <li>As die reël <span style="color:#dc2626">vermenigvuldig met 3</span> is, werk terugwaarts deur <span style="color:#dc2626">deur 3 te deel</span> van die term <em>na</em> die gaping.</li>
  <li>As die reël <span style="color:#dc2626">trek 5 af</span> is, werk terugwaarts deur <span style="color:#dc2626">5 by te tel</span> by die term <em>na</em> die gaping.</li>
</ul>

<h3>Kleurgids wat in hierdie afdeling gebruik word</h3>
<p><span style="color:#2563eb;font-weight:700">Bekende terme word in blou getoon</span> &nbsp;·&nbsp; <span style="color:#ea580c;font-weight:700">Ontbrekende term word in oranje getoon</span> &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">Reël word in rooi getoon</span></p>

<VideoPlaceholder title="Ontbrekende Getalle in ʼn Patroon Vind" duration="4 min" />
`,
      workedExamples: [
        {
          title: 'Ontbrekende Term in die Middel (Optelpatroon)',
          question: '<p>Vind die ontbrekende term: <span style="color:#2563eb">5</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">15, 20, 25</span></p>',
          steps: [
            'Kyk na die bekende terme wat opeenvolgend is: 15, 20, en 25. Vind die verskille: 20 − 15 = 5 en 25 − 20 = 5.',
            'Die verskille is gelyk, dus is die reël tel 5 by.',
            'Werk vorentoe vanaf die bekende term voor die gaping: 5 + 5 = 10. Of werk terugwaarts vanaf 15: 15 − 5 = 10. Beide gee dieselfde antwoord.',
            'Kontroleer deur terug te vervang: 5, 10, 15, 20, 25. Verskille: 10 − 5 = 5, 15 − 10 = 5, 20 − 15 = 5, 25 − 20 = 5. Almal gelyk ✓',
          ],
          answer: 'Die ontbrekende term is 10.',
        },
        {
          title: 'Ontbrekende Term in die Middel (Vermenigvuldigingspatroon)',
          question: '<p>Vind die ontbrekende term: <span style="color:#2563eb">4, 8</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">32, 64</span></p>',
          steps: [
            'Kontroleer die verskille: 8 − 4 = 4, 32 − ? (onbekend). Die verskille is nie gelyk nie, probeer dus verhoudings.',
            'Kontroleer verhoudings met die bekende opeenvolgende pare: 8 ÷ 4 = 2 en 64 ÷ 32 = 2. Die verhouding is altyd 2, dus is die reël vermenigvuldig met 2.',
            'Werk vorentoe vanaf 8: 8 × 2 = 16. Of werk terugwaarts vanaf 32: 32 ÷ 2 = 16. Beide bevestig dieselfde antwoord.',
            'Kontroleer deur terug te vervang: 4, 8, 16, 32, 64. Verhoudings: 8 ÷ 4 = 2, 16 ÷ 8 = 2, 32 ÷ 16 = 2, 64 ÷ 32 = 2. Almal gelyk ✓',
          ],
          answer: 'Die ontbrekende term is 16.',
        },
        {
          title: 'Ontbrekende Term in die Middel (Aftrekpatroon)',
          question: '<p>Vind die ontbrekende term: <span style="color:#2563eb">90</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">70, 60, 50</span></p>',
          steps: [
            'Kyk na die bekende opeenvolgende terme: 70, 60, en 50. Vind die verskille: 60 − 70 = −10 en 50 − 60 = −10.',
            'Die verskille is gelyk en negatief, dus is die reël trek 10 af.',
            'Werk vorentoe vanaf 90: 90 − 10 = 80. Of werk terugwaarts vanaf 70: 70 + 10 = 80. (Terugwaarts werk gebruik die inverse: 10 bytel.)',
            'Kontroleer deur terug te vervang: 90, 80, 70, 60, 50. Verskille: 80 − 90 = −10, 70 − 80 = −10, 60 − 70 = −10, 50 − 60 = −10. Almal gelyk ✓',
          ],
          answer: 'Die ontbrekende term is 80.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V13 Maklik — vind ontbrekende term in ʼn +3 patroon ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die ontbrekende term in die patroon: 3, 6, ___, 12, 15',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Verskille tussen bekende opeenvolgende terme: 6 − 3 = 3, 12 − ? (onbekend), 15 − 12 = 3. Reël: tel 3 by. Werk vorentoe vanaf 6: 6 + 3 = 9. Kontroleer: 3, 6, 9, 12, 15 — verskille almal 3 ✓',
        },
        // ── V14 Medium — vind ontbrekende term in ÷3 en +20 patrone ───────────
        {
          difficulty: 'Medium',
          question: 'Vind die ontbrekende term in elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 81, 27, ___, 3',
              correctAnswer: '9',
              explanation: 'Kontroleer verhoudings van bekende opeenvolgende terme: 27 ÷ 81 = 1/3, 3 ÷ ? (onbekend). Probeer die verhouding op die bekende paar aan die einde: 3 is na die ontbrekende term. Reël: deel deur 3. Werk vorentoe vanaf 27: 27 ÷ 3 = 9. Kontroleer: 81, 27, 9, 3 — verhoudings almal 1/3 ✓',
            },
            {
              label: 'b) 15, ___, 55, 75, 95',
              correctAnswer: '35',
              explanation: 'Verskille van bekende opeenvolgende terme: 75 − 55 = 20, 95 − 75 = 20. Reël: tel 20 by. Werk terugwaarts vanaf 55: 55 − 20 = 35. Kontroleer: 15, 35, 55, 75, 95 — verskille almal 20 ✓',
            },
          ],
        },
        // ── V15 Moeilik — vind ontbrekende terme in +6, ×5, en ÷2 patrone ─────────
        {
          difficulty: 'Hard',
          question: 'Vind die ontbrekende term in elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ___, 18, 24, 30, 36',
              correctAnswer: '12',
              explanation: 'Verskille: 24 − 18 = 6, 30 − 24 = 6, 36 − 30 = 6. Reël: tel 6 by. Werk terugwaarts vanaf 18: 18 − 6 = 12. Kontroleer: 12, 18, 24, 30, 36 — verskille almal 6 ✓',
            },
            {
              label: 'b) 5, 25, ___, 625',
              correctAnswer: '125',
              explanation: 'Kontroleer verhoudings: 25 ÷ 5 = 5, 625 ÷ ? (onbekend). Reël: vermenigvuldig met 5 (bevestig uit die bekende paar). Werk vorentoe vanaf 25: 25 × 5 = 125. Kontroleer: 5, 25, 125, 625 — verhoudings almal 5 ✓',
            },
            {
              label: 'c) 200, ___, 50, 25',
              correctAnswer: '100',
              explanation: 'Kontroleer verhoudings van bekende opeenvolgende terme: 50 ÷ ? (onbekend), 25 ÷ 50 = 0,5. Reël: deel deur 2. Werk vorentoe vanaf 200: 200 ÷ 2 = 100. Kontroleer: 200, 100, 50, 25 — verhoudings almal 0,5 ✓',
            },
          ],
        },
      ],
    },
    {
      id: 'creating-your-own-patterns',
      title: 'Skep Jou Eie Patrone',
      icon: '✏️',
      explanation: `
<p>Jy kan jou eie getalpatroon ontwerp deur ʼn <strong>beginwaarde</strong> en ʼn <strong>reël</strong> te kies. Sodra jy daardie twee dinge het, pas jy die reël net keer op keer toe om so veel terme te genereer as wat jy wil.</p>

<h3>Vyf stappe om jou eie patroon te skep</h3>
<ol>
  <li><strong>Kies ʼn beginwaarde</strong> — dit is die eerste term.</li>
  <li><strong>Kies ʼn reël</strong> — besluit of jy gaan bytel, aftrek, vermenigvuldig, of deel, en met hoeveel.</li>
  <li><strong>Pas die reël toe</strong> op die eerste term om die tweede term te kry.</li>
  <li><strong>Herhaal</strong> — hou aan om dieselfde reël op elke nuwe term toe te pas totdat jy genoeg terme het.</li>
  <li><strong>Kontroleer</strong> — werk terugwaarts deur jou reeks met behulp van die inverse bewerking om te bevestig dat elke stap die reël volg.</li>
</ol>

<h3>Soorte patrone wat jy kan skep</h3>
<table>
  <tr><th>Soort</th><th>Voorbeeldreël</th><th>Voorbeeldreeks</th></tr>
  <tr>
    <td><strong>Toenemend</strong></td>
    <td>Tel 9 by</td>
    <td>3, 12, 21, 30, 39</td>
  </tr>
  <tr>
    <td><strong>Afnemend</strong></td>
    <td>Trek 15 af</td>
    <td>80, 65, 50, 35, 20</td>
  </tr>
  <tr>
    <td><strong>Vinnig toenemend</strong></td>
    <td>Vermenigvuldig met 4</td>
    <td>2, 8, 32, 128, 512</td>
  </tr>
  <tr>
    <td><strong>Vinnig afnemend</strong></td>
    <td>Deel deur 2</td>
    <td>96, 48, 24, 12, 6</td>
  </tr>
</table>

<VideoPlaceholder title="Skep Jou Eie Patrone" duration="4 min" />
`,
      workedExamples: [
        {
          title: 'ʼn Toenemende Optelpatroon Skep',
          question: '<p>Skep ʼn getalpatroon met 5 terme. Begin by 3. Gebruik die reël: tel 7 by.</p>',
          steps: [
            'Begin: eerste term = 3.',
            'Pas die reël toe — tel 7 by: 3 + 7 = 10. Tweede term is 10.',
            'Pas die reël weer toe: 10 + 7 = 17. Derde term is 17.',
            'Gaan voort: 17 + 7 = 24. Vierde term is 24.',
            'Gaan voort: 24 + 7 = 31. Vyfde term is 31.',
            'Kontroleer deur terugwaarts te werk met die inverse (trek 7 af): 31 − 7 = 24, 24 − 7 = 17, 17 − 7 = 10, 10 − 7 = 3 ✓',
          ],
          answer: 'Die patroon is 3, 10, 17, 24, 31.',
        },
        {
          title: 'ʼn Afnemende Aftrekpatroon Skep',
          question: '<p>Skep ʼn getalpatroon met 5 terme. Begin by 100. Gebruik die reël: trek 15 af.</p>',
          steps: [
            'Begin: eerste term = 100.',
            'Pas die reël toe — trek 15 af: 100 − 15 = 85. Tweede term is 85.',
            'Gaan voort: 85 − 15 = 70. Derde term is 70.',
            'Gaan voort: 70 − 15 = 55. Vierde term is 55.',
            'Gaan voort: 55 − 15 = 40. Vyfde term is 40.',
            'Kontroleer deur terugwaarts te werk met die inverse (tel 15 by): 40 + 15 = 55, 55 + 15 = 70, 70 + 15 = 85, 85 + 15 = 100 ✓',
          ],
          answer: 'Die patroon is 100, 85, 70, 55, 40.',
        },
        {
          title: 'ʼn Vermenigvuldigingspatroon Skep',
          question: '<p>Skep ʼn getalpatroon met 5 terme. Begin by 2. Gebruik die reël: vermenigvuldig met 3.</p>',
          steps: [
            'Begin: eerste term = 2.',
            'Pas die reël toe — vermenigvuldig met 3: 2 × 3 = 6. Tweede term is 6.',
            'Gaan voort: 6 × 3 = 18. Derde term is 18.',
            'Gaan voort: 18 × 3 = 54. Vierde term is 54.',
            'Gaan voort: 54 × 3 = 162. Vyfde term is 162.',
            'Kontroleer deur terugwaarts te werk met die inverse (deel deur 3): 162 ÷ 3 = 54, 54 ÷ 3 = 18, 18 ÷ 3 = 6, 6 ÷ 3 = 2 ✓',
          ],
          answer: 'Die patroon is 2, 6, 18, 54, 162.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── V16 Maklik — skryf eerste 5 terme van +9 patroon ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Skryf die eerste 5 terme van ʼn patroon wat by 8 begin en die reël "tel 9 by" gebruik. Skryf met kommas.',
          answer: '8, 17, 26, 35, 44',
          checkMode: 'auto',
          correctAnswer: '8, 17, 26, 35, 44',
          correctAnswers: ['8, 17, 26, 35, 44', '8,17,26,35,44', '8 17 26 35 44'],
          explanation: 'Begin by 8. Tel elke keer 9 by: 8, 8+9=17, 17+9=26, 26+9=35, 35+9=44.',
        },
        // ── V17 Medium — eerste 5 terme van −12 en ×5 patrone ────────────────
        {
          difficulty: 'Medium',
          question: 'Skryf die eerste 5 terme vir elke patroon.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Begin by 96. Reël: trek 12 af. Skryf met kommas.',
              correctAnswer: '96, 84, 72, 60, 48',
              correctAnswers: ['96, 84, 72, 60, 48', '96,84,72,60,48', '96 84 72 60 48'],
              explanation: 'Trek elke keer 12 af: 96, 96−12=84, 84−12=72, 72−12=60, 60−12=48.',
            },
            {
              label: 'b) Begin by 1. Reël: vermenigvuldig met 5. Skryf met kommas.',
              correctAnswer: '1, 5, 25, 125, 625',
              correctAnswers: ['1, 5, 25, 125, 625', '1,5,25,125,625', '1 5 25 125 625'],
              explanation: 'Vermenigvuldig elke keer met 5: 1, 1×5=5, 5×5=25, 25×5=125, 125×5=625.',
            },
          ],
        },
        // ── V18 Moeilik — skep eie afnemende patroon met inverse-kontrole ───────
        {
          difficulty: 'Hard',
          question: 'Skep jou eie afnemende patroon met ten minste 5 terme.\n\nSkryf neer:\n• Jou beginwaarde\n• Jou reël (bv. trek 11 af)\n• Al 5 terme in volgorde\n• Hoe jy nagegaan het dat jou patroon korrek is (gebruik die inverse bewerking)',
          answer: 'Enige geldige afnemende patroon met ʼn konstante reël (bv. Begin: 60, Reël: trek 8 af, Terme: 60, 52, 44, 36, 28. Kontroleer: tel 8 terugwaarts by: 28+8=36, 36+8=44, 44+8=52, 52+8=60 ✓).',
          checkMode: 'self',
        },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 22, message: 'Uitstekend! ʼn Volpunt — jy het getalpatrone vir Graad 5 volkome bemeester. Puik werk!' },
    { minScore: 17, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van getalpatrone. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 12, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 7, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan die vrae weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke wiskundige het as ʼn beginner begin! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
  ],
}
