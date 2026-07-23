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

`,
      videoPlaceholder: 'Getalpatrone Identifiseer en Uitbrei',
      diagramPlaceholder: 'ʼn Horisontale getallelyn van 0 tot 18. Geboë pyle van gelyke lengte wys spronge van +3 wat land op 3, 6, 9, 12, 15, 18.',
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

`,
      videoPlaceholder: 'Die Reël van ʼn Patroon Beskryf',
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

`,
      videoPlaceholder: 'Inset- en Uitsetwaardes — Funksiemasjiene',
      diagramPlaceholder: 'ʼn Vloeidiagram wat wys: ʼn kolom insette (3, 5, 7) wat in ʼn reghoekige blokkie invoer wat geëtiketteer is met \'× 4\', met pyle wat lei na ʼn kolom uitsette (12, 20, 28).',
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

`,
      videoPlaceholder: 'Patrone met Al Vier Bewerkings',
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

`,
      videoPlaceholder: 'Ontbrekende Getalle in ʼn Patroon Vind',
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

`,
      videoPlaceholder: 'Skep Jou Eie Patrone',
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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Vind die volgende term: 6, 15, 24, 33, ___', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Verskille: 15 − 6 = 9, 24 − 15 = 9, 33 − 24 = 9. Die reël is tel 9 by. Volgende term: 33 + 9 = 42.' },
        { difficulty: 'Easy', question: 'Vind die volgende term: 100, 88, 76, 64, ___', answer: '52', checkMode: 'auto', correctAnswer: '52', explanation: 'Verskille: 88 − 100 = −12, 76 − 88 = −12, 64 − 76 = −12. Die reël is trek 12 af. Volgende term: 64 − 12 = 52.' },
        { difficulty: 'Easy', question: 'ʼn Patroon verdubbel elke keer: 5, 10, 20, 40, ___, ___. Skryf die volgende twee terme, geskei deur ʼn komma.', answer: '80, 160', checkMode: 'auto', correctAnswer: '80, 160', correctAnswers: ['80, 160', '80,160', '80 160'], explanation: 'Verhoudings: 10 ÷ 5 = 2, 20 ÷ 10 = 2, 40 ÷ 20 = 2. Die reël is vermenigvuldig met 2. Volgende terme: 40 × 2 = 80, 80 × 2 = 160.' },
        { difficulty: 'Easy', question: 'Vind die volgende term: 480, 240, 120, ___', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'Verhoudings: 240 ÷ 480 = ½, 120 ÷ 240 = ½. Die reël is deel deur 2 (halveer). Volgende term: 120 ÷ 2 = 60.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 9, 18, 27, 36, 45', answer: 'tel 9 by', checkMode: 'auto', correctAnswer: 'add 9', correctAnswers: ['add 9', 'tel 9 by', '+9', '+ 9'], explanation: 'Verskille: 18 − 9 = 9, 27 − 18 = 9, 36 − 27 = 9, 45 − 36 = 9. Elke verskil is 9, dus is die reël tel 9 by.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 512, 256, 128, 64', answer: 'deel deur 2', checkMode: 'auto', correctAnswer: 'divide by 2', correctAnswers: ['divide by 2', 'deel deur 2', '÷2', '÷ 2', 'halveer'], explanation: 'Verskille is nie gelyk nie (256 − 512 = −256, maar 128 − 256 = −128), probeer dus verhoudings: 256 ÷ 512 = ½, 128 ÷ 256 = ½, 64 ÷ 128 = ½. Die reël is deel deur 2.' },
        { difficulty: 'Easy-Medium', question: 'Kyk na die patroon: 7, 14, 28, 56. Verduidelik hoe jy weet of die reël optelling of vermenigvuldiging is, en gee dan die reël.', answer: 'Die verskille (7, 14, 28) is nie gelyk nie, dus kan dit nie ʼn optelpatroon wees nie. Kontroleer eerder verhoudings: 14÷7=2, 28÷14=2, 56÷28=2 — die verhouding is altyd 2, dus is die reël vermenigvuldiging: vermenigvuldig met 2.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder kyk na die patroon 5, 9, 13, 17 en sê "die reël is tel 5 by." Is die leerder korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Verskille: 9 − 5 = 4, 13 − 9 = 4, 17 − 13 = 4. Die ware reël is tel 4 by, nie tel 5 by nie, dus is die leerder verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "tel 12 by". Wat is die uitset wanneer die inset 15 is?', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Pas die reël toe: 15 + 12 = 27.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien-tabel wys: inset 4 → uitset 9, inset 7 → uitset 12, inset 10 → uitset 15, inset 13 → uitset ___. Vind die reël en die ontbrekende uitset.', answer: 'tel 5 by; ontbrekende uitset is 18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'tel 5 by, 18', 'tel 5 by; 18', 'add 5, 18'], explanation: 'Die uitset is altyd 5 meer as die inset: 4+5=9, 7+5=12, 10+5=15. Reël: tel 5 by. Ontbrekende uitset: 13 + 5 = 18.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "vermenigvuldig met 7". Die uitset is 84. Wat is die inset?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Die inverse van × 7 is ÷ 7. 84 ÷ 7 = 12. Kontroleer: 12 × 7 = 84 ✓' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "trek 4 af". Gebruik die tabel om albei dele te beantwoord.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 9 → uitset 5, inset 14 → uitset 10, inset 20 → uitset ___. Vind die ontbrekende uitset.', correctAnswer: '16', explanation: '20 − 4 = 16.' },
          { label: 'b) Watter inset gee ʼn uitset van 1?', correctAnswer: '5', explanation: 'Gebruik die inverse (tel 4 by): 1 + 4 = 5. Kontroleer: 5 − 4 = 1 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Karabo spaar R15 elke week en begin met R0 in haar blikkie. Hoeveel sal sy na 6 weke gespaar het?', answer: 'R90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'R90'], explanation: 'Dit is ʼn optelpatroon: 0, 15, 30, 45, 60, 75, 90 (tel 15 by elke week). Na 6 weke: 15 × 6 = R90.' },
        { difficulty: 'Medium', question: 'ʼn Kolonie bakterieë begin met 3 bakterieë en verdubbel elke uur. Hoeveel bakterieë is daar na 5 uur?', answer: '96', checkMode: 'auto', correctAnswer: '96', explanation: 'Dit is ʼn vermenigvuldigingspatroon: 3, 6, 12, 24, 48, 96 (vermenigvuldig met 2 elke uur). Na 5 uur: 3 × 2⁵ = 3 × 32 = 96.' },
        { difficulty: 'Medium', question: 'ʼn Bal word van 160 cm laat val. Elke keer wat dit bons, bereik dit slegs die helfte van die hoogte van die vorige bons. Watter hoogte bereik dit na die 3de bons?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 cm'], explanation: 'Dit is ʼn delingspatroon: 160, 80, 40, 20 (deel deur 2 elke bons). Na 3 bonse: 160 ÷ 2 ÷ 2 ÷ 2 = 20 cm.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Bioskoop verkoop 240 kaartjies op Maandag. Elke dag daarna word 30 minder kaartjies verkoop as die dag vantevore. Vergelyk Woensdag se verkope met Vrydag se verkope — hoeveel meer kaartjies word op Woensdag verkoop as op Vrydag?', answer: '60 meer', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 meer'], explanation: 'Patroon: Ma 240, Di 210, Wo 180, Do 150, Vr 120 (trek 30 af elke dag). Woensdag − Vrydag = 180 − 120 = 60 meer kaartjies op Woensdag.' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 8, ___, 32, 64, 128', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Bekende opeenvolgende terme 32, 64, 128 gee verhoudings 64÷32=2 en 128÷64=2, dus is die reël vermenigvuldig met 2. Werk vorentoe vanaf 8: 8 × 2 = 16. Kontroleer: 8, 16, 32, 64, 128 — verhoudings almal 2 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 95, 80, ___, 50, 35', answer: '65', checkMode: 'auto', correctAnswer: '65', explanation: 'Bekende opeenvolgende terme 50, 35 gee ʼn verskil van 35 − 50 = −15, en 80 − 95 = −15, dus is die reël trek 15 af. Werk vorentoe vanaf 80: 80 − 15 = 65. Kontroleer: 95, 80, 65, 50, 35 — verskille almal −15 ✓' },
        { difficulty: 'Hard', question: 'Skep jou eie patroon met 5 terme. Begin by ʼn getal van jou keuse, kies ʼn reël (tel by, trek af, vermenigvuldig, of deel deur ʼn konstante hoeveelheid), skryf al 5 terme neer, en verifieer dan dat jou patroon korrek is deur die inverse bewerking te gebruik.', answer: 'Enige geldige patroon met ʼn konstante reël (bv. Begin: 6, Reël: vermenigvuldig met 3, Terme: 6, 18, 54, 162, 486. Kontroleer met die inverse, deel deur 3: 486÷3=162, 162÷3=54, 54÷3=18, 18÷3=6 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê die patroon 90, 75, 60, 45 is "toenemend omdat die getalle groot is." Verduidelik waarom die leerder verkeerd is, en klassifiseer die patroon korrek (toenemend, afnemend, of nie een van die twee nie) met redes.', answer: 'Die leerder verwar die grootte van die getalle met die rigting van die patroon. Wat saak maak, is of elke term groter of kleiner is as die een voor dit. Verskille: 75−90=−15, 60−75=−15, 45−60=−15 — elke term is 15 minder as die een voor dit, dus is die patroon afnemend, nie toenemend nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt — jy het getalpatrone vir Graad 5 volkome bemeester. Puik werk!' },
        { minScore: 15, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van getalpatrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
        { minScore: 0, message: 'Moenie moed opgee nie — elke wiskundige het as ʼn beginner begin! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegging as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Wat is die volgende term? 4, 10, 16, 22, ___', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Verskille: 10 − 4 = 6, 16 − 10 = 6, 22 − 16 = 6. Die reël is tel 6 by. Volgende term: 22 + 6 = 28.' },
        { difficulty: 'Easy', question: 'Wat is die volgende term? 200, 185, 170, 155, ___', answer: '140', checkMode: 'auto', correctAnswer: '140', explanation: 'Verskille: 185 − 200 = −15, 170 − 185 = −15, 155 − 170 = −15. Die reël is trek 15 af. Volgende term: 155 − 15 = 140.' },
        { difficulty: 'Easy', question: 'ʼn Patroon verdriedubbel elke keer: 2, 6, 18, 54, ___, ___. Skryf die volgende twee terme, geskei deur ʼn komma.', answer: '162, 486', checkMode: 'auto', correctAnswer: '162, 486', correctAnswers: ['162, 486', '162,486', '162 486'], explanation: 'Verhoudings: 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3. Die reël is vermenigvuldig met 3. Volgende terme: 54 × 3 = 162, 162 × 3 = 486.' },
        { difficulty: 'Easy', question: 'Wat is die volgende term? 3 125, 625, 125, ___', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: 'Verhoudings: 625 ÷ 3 125 = ⅕, 125 ÷ 625 = ⅕. Die reël is deel deur 5. Volgende term: 125 ÷ 5 = 25.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 14, 28, 42, 56, 70', answer: 'tel 14 by', checkMode: 'auto', correctAnswer: 'add 14', correctAnswers: ['add 14', 'tel 14 by', '+14', '+ 14'], explanation: 'Verskille: 28 − 14 = 14, 42 − 28 = 14, 56 − 42 = 14, 70 − 56 = 14. Elke verskil is 14, dus is die reël tel 14 by.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 1 000, 100, 10, 1', answer: 'deel deur 10', checkMode: 'auto', correctAnswer: 'divide by 10', correctAnswers: ['divide by 10', 'deel deur 10', '÷10', '÷ 10'], explanation: 'Verhoudings: 100 ÷ 1 000 = 1/10, 10 ÷ 100 = 1/10, 1 ÷ 10 = 1/10. Die reël is deel deur 10.' },
        { difficulty: 'Easy-Medium', question: 'Kyk na die patroon: 6, 18, 54, 162. Verduidelik hoe jy kan sien dat dit ʼn vermenigvuldigingspatroon is eerder as ʼn optelpatroon, en gee dan die reël.', answer: 'Die verskille (12, 36, 108) word al hoe groter, dus is dit nie konstant nie — dit sluit optelling uit. Kontroleer eerder verhoudings: 18÷6=3, 54÷18=3, 162÷54=3 — die verhouding is altyd 3, wat ʼn vermenigvuldigingspatroon bevestig met reël: vermenigvuldig met 3.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder kyk na die patroon 100, 92, 84, 76 en sê "die reël is trek 6 af." Is die leerder korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Verskille: 92 − 100 = −8, 84 − 92 = −8, 76 − 84 = −8. Die ware reël is trek 8 af, nie trek 6 af nie, dus is die leerder verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "trek 9 af". Wat is die uitset wanneer die inset 40 is?', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Pas die reël toe: 40 − 9 = 31.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien-tabel wys: inset 3 → uitset 21, inset 5 → uitset 35, inset 7 → uitset 49, inset 9 → uitset ___. Vind die reël en die ontbrekende uitset.', answer: 'vermenigvuldig met 7; ontbrekende uitset is 63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', 'vermenigvuldig met 7, 63', 'vermenigvuldig met 7; 63', 'multiply by 7, 63'], explanation: 'Elke uitset is 7 keer die inset: 3×7=21, 5×7=35, 7×7=49. Reël: vermenigvuldig met 7. Ontbrekende uitset: 9 × 7 = 63.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "tel 18 by". Die uitset is 47. Wat is die inset?', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'Die inverse van + 18 is − 18. 47 − 18 = 29. Kontroleer: 29 + 18 = 47 ✓' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "deel deur 4". Gebruik die tabel om albei dele te beantwoord.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 40 → uitset 10, inset 64 → uitset 16, inset 100 → uitset ___. Vind die ontbrekende uitset.', correctAnswer: '25', explanation: '100 ÷ 4 = 25.' },
          { label: 'b) Watter inset gee ʼn uitset van 3?', correctAnswer: '12', explanation: 'Gebruik die inverse (vermenigvuldig met 4): 3 × 4 = 12. Kontroleer: 12 ÷ 4 = 3 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Tumelo spaar R20 elke week en begin met niks gespaar nie. Hoeveel sal hy na 7 weke gespaar het?', answer: 'R140', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', 'R140'], explanation: 'Dit is ʼn optelpatroon: 0, 20, 40, 60, 80, 100, 120, 140 (tel 20 by elke week). Na 7 weke: 20 × 7 = R140.' },
        { difficulty: 'Medium', question: 'ʼn Plantsaailing is 4 cm lank en sy hoogte verdubbel elke week. Hoe lank is dit na 4 weke?', answer: '64 cm', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 cm'], explanation: 'Dit is ʼn vermenigvuldigingspatroon: 4, 8, 16, 32, 64 (vermenigvuldig met 2 elke week). Na 4 weke: 4 × 2⁴ = 4 × 16 = 64 cm.' },
        { difficulty: 'Medium', question: 'ʼn Swembad word tot 28°C verhit. Sodra die verhitter afgeskakel word, verkoel die water met 2°C elke uur. Wat is die temperatuur na 5 uur?', answer: '18°C', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18°C'], explanation: 'Dit is ʼn aftrekpatroon: 28, 26, 24, 22, 20, 18 (trek 2 af elke uur). Na 5 uur: 28 − (2 × 5) = 28 − 10 = 18°C.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Markstalletjie verkoop 300 brode op Saterdag. Elke daaropvolgende dag word 25 minder brode verkoop as die dag vantevore. Vergelyk Sondag se verkope met Dinsdag se verkope — hoeveel meer brode word op Sondag verkoop as op Dinsdag?', answer: '50 meer', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 meer'], explanation: 'Patroon: Sat 300, Son 275, Ma 250, Di 225 (trek 25 af elke dag). Sondag − Dinsdag = 275 − 225 = 50 meer brode op Sondag.' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 500, ___, 20, 4', answer: '100', checkMode: 'auto', correctAnswer: '100', explanation: 'Bekende opeenvolgende terme 20, 4 gee ʼn verhouding van 4 ÷ 20 = 1/5, dus is die reël deel deur 5. Werk vorentoe vanaf 500: 500 ÷ 5 = 100. Kontroleer: 500, 100, 20, 4 — verhoudings almal 1/5 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 8, ___, 36, 50, 64', answer: '22', checkMode: 'auto', correctAnswer: '22', explanation: 'Bekende opeenvolgende terme 36, 50, 64 gee verskille van 50−36=14 en 64−50=14, dus is die reël tel 14 by. Werk terugwaarts vanaf 36: 36 − 14 = 22. Kontroleer: 8, 22, 36, 50, 64 — verskille almal 14 ✓' },
        { difficulty: 'Hard', question: 'Skep jou eie patroon met 5 terme. Begin by ʼn getal van jou keuse, kies ʼn reël (tel by, trek af, vermenigvuldig, of deel deur ʼn konstante hoeveelheid), skryf al 5 terme neer, en verifieer dan dat jou patroon korrek is deur die inverse bewerking te gebruik.', answer: 'Enige geldige patroon met ʼn konstante reël (bv. Begin: 3, Reël: vermenigvuldig met 4, Terme: 3, 12, 48, 192, 768. Kontroleer met die inverse, deel deur 4: 768÷4=192, 192÷4=48, 48÷4=12, 12÷4=3 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê die patroon 4, 12, 36, 108 is "afnemend omdat dit klein begin." Verduidelik waarom die leerder verkeerd is, en klassifiseer die patroon korrek (toenemend, afnemend, of nie een van die twee nie) met redes.', answer: 'Die leerder verwar die beginwaarde met die rigting van die patroon. Wat saak maak, is of elke term groter of kleiner is as die een voor dit. Verhoudings: 12÷4=3, 36÷12=3, 108÷36=3 — elke term is 3 keer die een voor dit, dus bly die terme groei en is die patroon toenemend, nie afnemend nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt — jy het getalpatrone vir Graad 5 volkome bemeester. Puik werk!' },
        { minScore: 15, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van getalpatrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
        { minScore: 0, message: 'Moenie moed opgee nie — elke wiskundige het as ʼn beginner begin! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegging as Stel 1-2, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Vind die ontbrekende volgende term: 9, 20, 31, 42, ___', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Verskille: 20 − 9 = 11, 31 − 20 = 11, 42 − 31 = 11. Die reël is tel 11 by. Volgende term: 42 + 11 = 53.' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende volgende term: 250, 232, 214, 196, ___', answer: '178', checkMode: 'auto', correctAnswer: '178', explanation: 'Verskille: 232 − 250 = −18, 214 − 232 = −18, 196 − 214 = −18. Die reël is trek 18 af. Volgende term: 196 − 18 = 178.' },
        { difficulty: 'Easy', question: 'ʼn Patroon verdubbel elke keer: 6, 12, 24, 48, ___, ___. Skryf die volgende twee terme, geskei deur ʼn komma.', answer: '96, 192', checkMode: 'auto', correctAnswer: '96, 192', correctAnswers: ['96, 192', '96,192', '96 192'], explanation: 'Verhoudings: 12 ÷ 6 = 2, 24 ÷ 12 = 2, 48 ÷ 24 = 2. Die reël is vermenigvuldig met 2. Volgende terme: 48 × 2 = 96, 96 × 2 = 192.' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende volgende term: 4 096, 1 024, 256, ___', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: 'Verhoudings: 1 024 ÷ 4 096 = ¼, 256 ÷ 1 024 = ¼. Die reël is deel deur 4. Volgende term: 256 ÷ 4 = 64.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 21, 35, 49, 63, 77', answer: 'tel 14 by', checkMode: 'auto', correctAnswer: 'add 14', correctAnswers: ['add 14', 'tel 14 by', '+14', '+ 14'], explanation: 'Verskille: 35 − 21 = 14, 49 − 35 = 14, 63 − 49 = 14, 77 − 63 = 14. Elke verskil is 14, dus is die reël tel 14 by.' },
        { difficulty: 'Easy-Medium', question: 'Beskryf die reël vir die patroon: 900, 300, 100', answer: 'deel deur 3', checkMode: 'auto', correctAnswer: 'divide by 3', correctAnswers: ['divide by 3', 'deel deur 3', '÷3', '÷ 3'], explanation: 'Verhoudings: 300 ÷ 900 = 1/3, 100 ÷ 300 = 1/3. Die reël is deel deur 3.' },
        { difficulty: 'Easy-Medium', question: 'Kyk na die patroon: 8, 24, 72, 216. Verduidelik hoe jy kan sien dat dit ʼn vermenigvuldigingspatroon is eerder as ʼn optelpatroon, en gee dan die reël.', answer: 'Die verskille (16, 48, 144) word al hoe groter eerder as om dieselfde te bly, dus kan dit nie ʼn optelpatroon wees nie. Kontroleer eerder verhoudings: 24÷8=3, 72÷24=3, 216÷72=3 — die verhouding is altyd 3, wat ʼn vermenigvuldigingspatroon bevestig met reël: vermenigvuldig met 3.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder kyk na die patroon 60, 52, 44, 36 en sê "die reël is trek 6 af." Is die leerder korrek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no', 'Nee', 'nee'], explanation: 'Verskille: 52 − 60 = −8, 44 − 52 = −8, 36 − 44 = −8. Die ware reël is trek 8 af, nie trek 6 af nie, dus is die leerder verkeerd.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "vermenigvuldig met 9". Wat is die uitset wanneer die inset 8 is?', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Pas die reël toe: 8 × 9 = 72.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien-tabel wys: inset 5 → uitset 8, inset 9 → uitset 12, inset 12 → uitset 15, inset 20 → uitset ___. Vind die reël en die ontbrekende uitset.', answer: 'tel 3 by; ontbrekende uitset is 23', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23', 'tel 3 by, 23', 'tel 3 by; 23', 'add 3, 23'], explanation: 'Die uitset is altyd 3 meer as die inset: 5+3=8, 9+3=12, 12+3=15. Reël: tel 3 by. Ontbrekende uitset: 20 + 3 = 23.' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "trek 13 af". Die uitset is 29. Wat is die inset?', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Die inverse van − 13 is + 13. 29 + 13 = 42. Kontroleer: 42 − 13 = 29 ✓' },
        { difficulty: 'Medium', question: 'ʼn Funksiemasjien gebruik die reël "tel 25 by". Gebruik die tabel om albei dele te beantwoord.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Inset 15 → uitset 40, inset 30 → uitset 55, inset 48 → uitset ___. Vind die ontbrekende uitset.', correctAnswer: '73', explanation: '48 + 25 = 73.' },
          { label: 'b) Watter inset gee ʼn uitset van 100?', correctAnswer: '75', explanation: 'Gebruik die inverse (trek 25 af): 100 − 25 = 75. Kontroleer: 75 + 25 = 100 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi spaar R12 elke week, en begin met R0. Hoeveel sal sy na 8 weke gespaar het?', answer: 'R96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', 'R96'], explanation: 'Dit is ʼn optelpatroon: tel 12 by elke week vir 8 weke. Totaal: 12 × 8 = R96.' },
        { difficulty: 'Medium', question: 'ʼn Kultuur bakterieë begin met 2 bakterieë en verdriedubbel elke uur. Hoeveel bakterieë is daar na 4 uur?', answer: '162', checkMode: 'auto', correctAnswer: '162', explanation: 'Dit is ʼn vermenigvuldigingspatroon: 2, 6, 18, 54, 162 (vermenigvuldig met 3 elke uur). Na 4 uur: 2 × 3⁴ = 2 × 81 = 162.' },
        { difficulty: 'Medium', question: 'ʼn Bal word van 320 cm laat val. Elke bons bereik slegs die helfte van die hoogte van die vorige een. Watter hoogte bereik dit na die 4de bons?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 cm'], explanation: 'Dit is ʼn delingspatroon: 320, 160, 80, 40, 20 (deel deur 2 elke bons). Na 4 bonse: 320 ÷ 2 ÷ 2 ÷ 2 ÷ 2 = 20 cm.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Teater begin met 500 sitplekke bespreek vir ʼn toneelstuk se openingsweek. Elke dag daarna word 40 minder sitplekke bespreek as die dag vantevore. Vergelyk Dag 2 se besprekings met Dag 6 se besprekings — hoeveel meer sitplekke word op Dag 2 bespreek as op Dag 6?', answer: '160 meer', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160 meer'], explanation: 'Patroon: Dag1 500, Dag2 460, Dag3 420, Dag4 380, Dag5 340, Dag6 300 (trek 40 af elke dag). Dag 2 − Dag 6 = 460 − 300 = 160 meer sitplekke op Dag 2.' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 7, ___, 63, 189, 567', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Bekende opeenvolgende terme 63, 189, 567 gee verhoudings 189÷63=3 en 567÷189=3, dus is die reël vermenigvuldig met 3. Werk vorentoe vanaf 7: 7 × 3 = 21. Kontroleer: 7, 21, 63, 189, 567 — verhoudings almal 3 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende term: 88, ___, 60, 46, 32', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: 'Bekende opeenvolgende terme 60, 46, 32 gee verskille van 46−60=−14 en 32−46=−14, dus is die reël trek 14 af. Werk vorentoe vanaf 88: 88 − 14 = 74. Kontroleer: 88, 74, 60, 46, 32 — verskille almal −14 ✓' },
        { difficulty: 'Hard', question: 'Skep jou eie patroon met 5 terme. Begin by ʼn getal van jou keuse, kies ʼn reël (tel by, trek af, vermenigvuldig, of deel deur ʼn konstante hoeveelheid), skryf al 5 terme neer, en verifieer dan dat jou patroon korrek is deur die inverse bewerking te gebruik.', answer: 'Enige geldige patroon met ʼn konstante reël (bv. Begin: 90, Reël: trek 11 af, Terme: 90, 79, 68, 57, 46. Kontroleer met die inverse, tel 11 by: 46+11=57, 57+11=68, 68+11=79, 79+11=90 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê die patroon 200, 150, 100, 50 is "nie toenemend of afnemend nie omdat dit aftrekking gebruik, nie vermenigvuldiging nie." Verduidelik waarom die leerder verkeerd is, en klassifiseer die patroon korrek (toenemend, afnemend, of nie een van die twee nie) met redes.', answer: 'Die leerder neem verkeerdelik aan dat slegs vermenigvuldigingspatrone as toenemend of afnemend geklassifiseer kan word. In werklikheid hang die rigting slegs af van of elke term groter of kleiner is as die een voor dit. Verskille: 150−200=−50, 100−150=−50, 50−100=−50 — elke term is 50 minder as die een voor dit, dus is die patroon afnemend.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt — jy het getalpatrone vir Graad 5 volkome bemeester. Puik werk!' },
        { minScore: 15, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van getalpatrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
        { minScore: 0, message: 'Moenie moed opgee nie — elke wiskundige het as ʼn beginner begin! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
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
