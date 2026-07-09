import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

export const topicData: TopicData = {
  title: 'Number Patterns',
  grade: 5,
  sections: [
    {
      id: 'identifying-extending-patterns',
      title: 'Identifying and Extending Number Patterns',
      icon: '🔢',
      explanation: `
<p>A <strong>number pattern</strong> is a sequence of numbers that follows a rule. Each number in the sequence is called a <strong>term</strong>. By comparing consecutive terms you can discover the rule, then use it to extend the pattern as far as you like.</p>

<h3>Increasing Patterns</h3>
<p>An <strong>increasing pattern</strong> grows — the terms get larger. The most common reason is that the same amount is <em>added</em> each time.</p>
<p>Example: <span style="color:#2563eb">3, 6, 9, 12, …</span> — <span style="color:#dc2626">Rule: add 3</span> — next term: <span style="color:#16a34a">15</span></p>

<h3>Decreasing Patterns</h3>
<p>A <strong>decreasing pattern</strong> shrinks — the terms get smaller. The same amount is <em>subtracted</em> each time.</p>
<p>Example: <span style="color:#2563eb">30, 25, 20, 15, …</span> — <span style="color:#dc2626">Rule: subtract 5</span> — next term: <span style="color:#16a34a">10</span></p>

<VideoPlaceholder title="Identifying and Extending Patterns" duration="4 min" />
<DiagramPlaceholder title="Number line — pattern of +3" description="A horizontal number line from 0 to 18. Curved arrows of equal length show jumps of +3 landing on 3, 6, 9, 12, 15, 18." />
`,
      workedExamples: [
        {
          title: 'Extending an Increasing Pattern',
          question: '<p>Find the next two terms in the pattern: <span style="color:#2563eb">5, 10, 15, 20, ___, ___</span></p>',
          steps: [
            'Find the difference between consecutive terms: 10 − 5 = 5, 15 − 10 = 5, 20 − 15 = 5',
            'The difference is always 5, so the rule is add 5. This is an increasing pattern.',
            'Apply the rule to find the missing terms: 20 + 5 = 25, then 25 + 5 = 30',
          ],
          answer: 'The next two terms are 25 and 30.',
        },
        {
          title: 'Extending a Decreasing Pattern',
          question: '<p>Find the next two terms in the pattern: <span style="color:#2563eb">100, 80, 60, 40, ___, ___</span></p>',
          steps: [
            'Find the difference between consecutive terms: 80 − 100 = −20, 60 − 80 = −20, 40 − 60 = −20',
            'The difference is always −20, so the rule is subtract 20. This is a decreasing pattern.',
            'Apply the rule to find the missing terms: 40 − 20 = 20, then 20 − 20 = 0',
          ],
          answer: 'The next two terms are 20 and 0.',
        },
        {
          title: 'Extending a Doubling Pattern',
          question: '<p>Find the next term in the pattern: <span style="color:#2563eb">2, 4, 8, 16, ___</span></p>',
          steps: [
            'Check whether the differences are equal: 4 − 2 = 2, 8 − 4 = 4, 16 − 8 = 8. The differences are not equal, so this is not a simple addition pattern.',
            'Check the ratios (divide each term by the term before it): 4 ÷ 2 = 2, 8 ÷ 4 = 2, 16 ÷ 8 = 2. The ratio is always 2.',
            'The rule is multiply by 2 each time. This is an increasing pattern that doubles.',
            'Apply the rule: 16 × 2 = 32',
          ],
          answer: 'The next term is 32.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q1 Easy — next term in a ×7 addition pattern ──────────────────────
        {
          difficulty: 'Easy',
          question: 'What is the next term in the pattern: 7, 14, 21, 28, ___?',
          answer: '35',
          checkMode: 'auto',
          correctAnswer: '35',
          explanation: 'The rule is add 7. 28 + 7 = 35.',
        },
        // ── Q2 Medium — next term for ×3 and −10 patterns ───────────────────
        {
          difficulty: 'Medium',
          question: 'Find the next term for each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 3, 9, 27, 81, ___',
              correctAnswer: '243',
              explanation: 'Check ratios: 9 ÷ 3 = 3, 27 ÷ 9 = 3, 81 ÷ 27 = 3. Rule: multiply by 3. Next term: 81 × 3 = 243.',
            },
            {
              label: 'b) 100, 90, 80, 70, ___',
              correctAnswer: '60',
              explanation: 'Differences: 90 − 100 = −10, 80 − 90 = −10, 70 − 80 = −10. Rule: subtract 10. Next term: 70 − 10 = 60.',
            },
          ],
        },
        // ── Q3 Hard — generate terms and find the 7th in a ×2 pattern ─────────
        {
          difficulty: 'Hard',
          question: 'A pattern starts at 4. The rule is multiply by 2.\n\na) Write the first 6 terms.\nb) What is the 7th term?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) First 6 terms (write with commas, e.g. 1, 2, 4, 8, 16, 32)',
              correctAnswer: '4, 8, 16, 32, 64, 128',
              correctAnswers: ['4, 8, 16, 32, 64, 128', '4,8,16,32,64,128', '4 8 16 32 64 128'],
              explanation: 'Start at 4 and multiply by 2 each time: 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32, 32 × 2 = 64, 64 × 2 = 128.',
            },
            {
              label: 'b) 7th term',
              correctAnswer: '256',
              explanation: 'Continue the pattern: 128 × 2 = 256.',
            },
          ],
        },
      ],
    },
    {
      id: 'describing-rule-of-pattern',
      title: 'Describing the Rule of a Pattern',
      icon: '📐',
      explanation: `
<p>To <strong>describe the rule</strong> of a number pattern, look at what happens to get from one term to the next. Ask yourself: is the same number being added, subtracted, multiplied, or divided each time?</p>

<h3>How to Find the Rule</h3>
<ol>
  <li>Write down the difference (or ratio) between each pair of consecutive terms.</li>
  <li>If the differences are all equal, the rule uses <strong>addition</strong> (positive difference) or <strong>subtraction</strong> (negative difference).</li>
  <li>If the ratios are all equal, the rule uses <strong>multiplication</strong> (ratio &gt; 1) or <strong>division</strong> (ratio &lt; 1).</li>
  <li>Write the rule in a complete sentence: for example, <em>"The rule is add 7"</em> or <em>"The rule is multiply by 3."</em></li>
</ol>

<h3>Quick Reference</h3>
<p><span style="color:#dc2626">Add 6</span> → terms increase by 6 each time (e.g. <span style="color:#2563eb">4, 10, 16, 22</span>)</p>
<p><span style="color:#dc2626">Subtract 8</span> → terms decrease by 8 each time (e.g. <span style="color:#2563eb">40, 32, 24, 16</span>)</p>
<p><span style="color:#dc2626">Multiply by 3</span> → terms triple each time (e.g. <span style="color:#2563eb">2, 6, 18, 54</span>)</p>
<p><span style="color:#dc2626">Divide by 2</span> → terms halve each time (e.g. <span style="color:#2563eb">80, 40, 20, 10</span>)</p>

<VideoPlaceholder title="Describing the Rule of a Pattern" duration="5 min" />
`,
      workedExamples: [
        {
          title: 'Describing an Addition Pattern',
          question: '<p>Describe the rule for the pattern: <span style="color:#2563eb">8, 15, 22, 29, 36</span></p>',
          steps: [
            'Subtract each term from the one that follows it: 15 − 8 = 7, 22 − 15 = 7, 29 − 22 = 7, 36 − 29 = 7',
            'Check that the difference is the same every time: yes, it is always 7.',
            'Write the rule: add 7.',
          ],
          answer: 'The rule is add 7. Each term is 7 more than the term before it.',
        },
        {
          title: 'Describing a Subtraction Pattern',
          question: '<p>Describe the rule for the pattern: <span style="color:#2563eb">96, 84, 72, 60, 48</span></p>',
          steps: [
            'Subtract each term from the one that follows it: 84 − 96 = −12, 72 − 84 = −12, 60 − 72 = −12, 48 − 60 = −12',
            'Check that the difference is the same every time: yes, it is always −12.',
            'Write the rule: subtract 12.',
          ],
          answer: 'The rule is subtract 12. Each term is 12 less than the term before it. This is a decreasing pattern.',
        },
        {
          title: 'Describing a Multiplication Pattern',
          question: '<p>Describe the rule for the pattern: <span style="color:#2563eb">2, 6, 18, 54</span></p>',
          steps: [
            'Check the differences: 6 − 2 = 4, 18 − 6 = 12, 54 − 18 = 36. The differences are not equal, so this is not an addition or subtraction pattern.',
            'Check the ratios (divide each term by the one before it): 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3.',
            'Check that the ratio is the same every time: yes, it is always 3.',
            'Write the rule: multiply by 3.',
          ],
          answer: 'The rule is multiply by 3. Each term is 3 times the term before it.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q4 Easy — describe the rule for an +11 pattern ───────────────────
        {
          difficulty: 'Easy',
          question: 'Describe the rule for the pattern: 11, 22, 33, 44, 55',
          answer: 'add 11',
          checkMode: 'auto',
          correctAnswer: 'add 11',
          correctAnswers: ['add 11', '+11', 'multiply by 11', '+ 11'],
          explanation: 'Differences: 22 − 11 = 11, 33 − 22 = 11, 44 − 33 = 11, 55 − 44 = 11. The rule is add 11.',
        },
        // ── Q5 Medium — describe rule for ÷3 and +7 patterns ─────────────────
        {
          difficulty: 'Medium',
          question: 'Describe the rule for each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 729, 243, 81, 27',
              correctAnswer: 'divide by 3',
              correctAnswers: ['divide by 3', '÷3', '÷ 3', 'div 3', 'div by 3'],
              explanation: 'Check ratios: 243 ÷ 729 = 1/3, 81 ÷ 243 = 1/3, 27 ÷ 81 = 1/3. Rule: divide by 3.',
            },
            {
              label: 'b) 6, 13, 20, 27, 34',
              correctAnswer: 'add 7',
              correctAnswers: ['add 7', '+7', '+ 7'],
              explanation: 'Differences: 13 − 6 = 7, 20 − 13 = 7, 27 − 20 = 7, 34 − 27 = 7. Rule: add 7.',
            },
          ],
        },
        // ── Q6 Hard — create and verify own −6 decreasing pattern ────────────
        {
          difficulty: 'Hard',
          question: 'Write any decreasing pattern that uses subtraction with a constant rule of subtract 6. Give the first 5 terms, starting from any number you choose. Then explain how you checked that your pattern is correct.',
          answer: 'Any valid decreasing pattern with a constant difference of −6 (e.g. 36, 30, 24, 18, 12). Check: subtract each term from the one before it — all differences must equal 6.',
          checkMode: 'self',
        },
      ],
    },
    {
      id: 'input-output-function-machines',
      title: 'Input and Output Values — Function Machines',
      icon: '⚙️',
      explanation: `
<p>A <strong>function machine</strong> is a way of picturing a rule. You feed a number in — the <strong>input</strong> — and the machine applies the rule to produce the <strong>output</strong>.</p>
<p style="text-align:center"><span style="color:#2563eb"><strong>Input</strong></span> → <span style="color:#dc2626">[ Rule ]</span> → <span style="color:#16a34a"><strong>Output</strong></span></p>
<p>The machine always applies <em>exactly the same rule</em> to every input, so results are predictable.</p>

<h3>Finding Missing Output Values</h3>
<p>Apply the rule directly to the input: <span style="color:#2563eb">input</span> <span style="color:#dc2626">× 4</span> = <span style="color:#16a34a">output</span>.</p>

<h3>Finding the Rule from a Table</h3>
<p>Look at what was done to each <span style="color:#2563eb">input</span> to get its <span style="color:#16a34a">output</span>. Check whether the same operation works for every row.</p>

<h3>Finding a Missing Input</h3>
<p>Use the <strong>inverse (opposite) operation</strong> on the output to work backwards to the input.</p>
<ul>
  <li>Inverse of <span style="color:#dc2626">+ 6</span> is <span style="color:#dc2626">− 6</span></li>
  <li>Inverse of <span style="color:#dc2626">× 5</span> is <span style="color:#dc2626">÷ 5</span></li>
  <li>Inverse of <span style="color:#dc2626">− 9</span> is <span style="color:#dc2626">+ 9</span></li>
  <li>Inverse of <span style="color:#dc2626">÷ 3</span> is <span style="color:#dc2626">× 3</span></li>
</ul>

<VideoPlaceholder title="Input and Output Values — Function Machines" duration="5 min" />
<DiagramPlaceholder title="Function machine diagram" description="A flow diagram showing: a column of inputs (3, 5, 7) feeding into a rectangular box labelled '× 4', with arrows leading out to a column of outputs (12, 20, 28)." />
`,
      workedExamples: [
        {
          title: 'Finding Output Values',
          question: `
<p>A function machine uses the rule <span style="color:#dc2626">× 4</span>. Complete the table.</p>
<table>
  <tr><th>Input</th><th>Output</th></tr>
  <tr><td><span style="color:#2563eb">3</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">5</span></td><td><span style="color:#16a34a">___</span></td></tr>
  <tr><td><span style="color:#2563eb">7</span></td><td><span style="color:#16a34a">___</span></td></tr>
  <tr><td><span style="color:#2563eb">9</span></td><td><span style="color:#16a34a">___</span></td></tr>
</table>`,
          steps: [
            'The rule is multiply by 4.',
            'Apply the rule to each input: 5 × 4 = 20, 7 × 4 = 28, 9 × 4 = 36',
          ],
          answer: 'The missing outputs are 20, 28, and 36.',
        },
        {
          title: 'Finding the Rule of a Function Machine',
          question: `
<p>Find the rule for this function machine.</p>
<table>
  <tr><th>Input</th><th>Output</th></tr>
  <tr><td><span style="color:#2563eb">2</span></td><td><span style="color:#16a34a">10</span></td></tr>
  <tr><td><span style="color:#2563eb">4</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">6</span></td><td><span style="color:#16a34a">14</span></td></tr>
  <tr><td><span style="color:#2563eb">8</span></td><td><span style="color:#16a34a">___</span></td></tr>
</table>`,
          steps: [
            'Look at the difference between each output and its input: 10 − 2 = 8, 12 − 4 = 8, 14 − 6 = 8',
            'The difference is the same for every row — the output is always 8 more than the input, so the rule is add 8.',
            'Use the rule to find the missing output: 8 + 8 = 16',
          ],
          answer: 'The rule is add 8. The missing output is 16.',
        },
        {
          title: 'Finding a Missing Input',
          question: `
<p>A function machine uses the rule <span style="color:#dc2626">× 3</span>. Find the missing input.</p>
<table>
  <tr><th>Input</th><th>Output</th></tr>
  <tr><td><span style="color:#2563eb">4</span></td><td><span style="color:#16a34a">12</span></td></tr>
  <tr><td><span style="color:#2563eb">6</span></td><td><span style="color:#16a34a">18</span></td></tr>
  <tr><td><span style="color:#2563eb">___</span></td><td><span style="color:#16a34a">21</span></td></tr>
</table>`,
          steps: [
            'The rule is multiply by 3.',
            'The inverse of × 3 is ÷ 3. To work backwards from the output to the input, divide the output by 3.',
            'Apply the inverse to find the missing input: 21 ÷ 3 = 7',
            'Check: 7 × 3 = 21 ✓',
          ],
          answer: 'The missing input is 7.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q7 Easy — find output of ×6 function machine ─────────────────────
        {
          difficulty: 'Easy',
          question: 'A function machine uses the rule "multiply by 6". What is the output when the input is 9?',
          answer: '54',
          checkMode: 'auto',
          correctAnswer: '54',
          explanation: 'Apply the rule: 9 × 6 = 54.',
        },
        // ── Q8 Medium — find missing output and state rule from table ────────
        {
          difficulty: 'Medium',
          question: 'Use the function machine table to answer each question.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'The table shows: Input 2 → Output 9, Input 4 → Output 11, Input 6 → Output 13, Input 8 → Output ___. Find the missing output.',
              correctAnswer: '15',
              explanation: 'The output is always 7 more than the input: 2 + 7 = 9, 4 + 7 = 11, 6 + 7 = 13, 8 + 7 = 15. Missing output = 15.',
            },
            {
              label: 'State the rule of the function machine above.',
              correctAnswer: 'add 7',
              correctAnswers: ['add 7', '+7', '+ 7'],
              explanation: 'The output minus the input is always 7. Rule: add 7.',
            },
          ],
        },
        // ── Q9 Hard — three-part ×6 machine: output, inverse, table ─────────
        {
          difficulty: 'Hard',
          question: 'A function machine uses the rule "multiply by 6".',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) What is the output when the input is 11?',
              correctAnswer: '66',
              explanation: '11 × 6 = 66.',
            },
            {
              label: 'b) What is the input when the output is 54?',
              correctAnswer: '9',
              explanation: 'Use the inverse operation: ÷ 6. 54 ÷ 6 = 9. Check: 9 × 6 = 54 ✓',
            },
            {
              label: 'c) Complete the table for inputs 3, 5, 7. Write the three outputs with commas (e.g. 12, 20, 28).',
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
      title: 'Patterns Involving All Four Operations',
      icon: '➕',
      explanation: `
<p>Number patterns can use any of the four operations as their rule. Knowing how to spot each type quickly will help you identify and extend any pattern you meet.</p>

<h3>Identifying the Operation</h3>
<table>
  <tr><th>What you see</th><th>Operation</th><th>Example</th></tr>
  <tr>
    <td>Terms <em>increase</em> by the same amount</td>
    <td><span style="color:#dc2626">Addition</span></td>
    <td><span style="color:#2563eb">7, 14, 21, 28</span> → <span style="color:#dc2626">+ 7</span></td>
  </tr>
  <tr>
    <td>Terms <em>decrease</em> by the same amount</td>
    <td><span style="color:#dc2626">Subtraction</span></td>
    <td><span style="color:#2563eb">50, 40, 30, 20</span> → <span style="color:#dc2626">− 10</span></td>
  </tr>
  <tr>
    <td>Terms grow by the same <em>ratio</em> (each term is a multiple of the one before)</td>
    <td><span style="color:#dc2626">Multiplication</span></td>
    <td><span style="color:#2563eb">5, 15, 45, 135</span> → <span style="color:#dc2626">× 3</span></td>
  </tr>
  <tr>
    <td>Terms shrink by the same <em>ratio</em> (each term is a fraction of the one before)</td>
    <td><span style="color:#dc2626">Division</span></td>
    <td><span style="color:#2563eb">80, 40, 20, 10</span> → <span style="color:#dc2626">÷ 2</span></td>
  </tr>
</table>

<p><strong>Tip:</strong> Always check the differences first. If they are equal, it is an addition or subtraction pattern. If they are <em>not</em> equal, check the ratios — it is likely a multiplication or division pattern.</p>

<VideoPlaceholder title="Patterns Involving All Four Operations" duration="5 min" />
`,
      workedExamples: [
        {
          title: 'Addition Pattern',
          question: '<p>Find the next term and state the rule: <span style="color:#2563eb">13, 21, 29, 37, ___</span></p>',
          steps: [
            'Find the differences between consecutive terms: 21 − 13 = 8, 29 − 21 = 8, 37 − 29 = 8',
            'The differences are equal, so this is an addition pattern. The rule is add 8.',
            'Apply the rule: 37 + 8 = 45',
          ],
          answer: 'The rule is add 8. The next term is 45.',
        },
        {
          title: 'Subtraction Pattern',
          question: '<p>Find the next term and state the rule: <span style="color:#2563eb">72, 60, 48, 36, ___</span></p>',
          steps: [
            'Find the differences between consecutive terms: 60 − 72 = −12, 48 − 60 = −12, 36 − 48 = −12',
            'The differences are equal and negative, so this is a subtraction pattern. The rule is subtract 12.',
            'Apply the rule: 36 − 12 = 24',
          ],
          answer: 'The rule is subtract 12. The next term is 24.',
        },
        {
          title: 'Division Pattern',
          question: '<p>Find the next term and state the rule: <span style="color:#2563eb">243, 81, 27, 9, ___</span></p>',
          steps: [
            'Check the differences: 81 − 243 = −162, 27 − 81 = −54, 9 − 27 = −18. The differences are not equal, so this is not a subtraction pattern.',
            'Check the ratios (divide each term by the one before it): 81 ÷ 243 = 1/3, 27 ÷ 81 = 1/3, 9 ÷ 27 = 1/3.',
            'The ratios are equal and less than 1, so this is a division pattern. The rule is divide by 3.',
            'Apply the rule: 9 ÷ 3 = 3',
          ],
          answer: 'The rule is divide by 3. The next term is 3.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q10 Easy — next term in a ÷2 division pattern ───────────────────
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern: 256, 128, 64, 32, ___',
          answer: '16',
          checkMode: 'auto',
          correctAnswer: '16',
          explanation: 'Check ratios: 128 ÷ 256 = ½, 64 ÷ 128 = ½, 32 ÷ 64 = ½. Rule: divide by 2. Next term: 32 ÷ 2 = 16.',
        },
        // ── Q11 Medium — state rule for ×3 and write next two −25 terms ──────
        {
          difficulty: 'Medium',
          question: 'Identify the operation and find the missing values.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) State the rule for the pattern: 7, 21, 63, 189',
              correctAnswer: 'multiply by 3',
              correctAnswers: ['multiply by 3', '×3', 'x3', '× 3', 'times 3'],
              explanation: 'Ratios: 21 ÷ 7 = 3, 63 ÷ 21 = 3, 189 ÷ 63 = 3. Rule: multiply by 3.',
            },
            {
              label: 'b) Write the next two terms of: 200, 175, 150, 125, ___, ___  (write with a comma, e.g. 80, 55)',
              correctAnswer: '100, 75',
              correctAnswers: ['100, 75', '100,75', '100 75'],
              explanation: 'Differences: 175 − 200 = −25. Rule: subtract 25. 125 − 25 = 100. 100 − 25 = 75.',
            },
          ],
        },
        // ── Q12 Hard — first 5 terms of ×4 pattern and classify increasing ────
        {
          difficulty: 'Hard',
          question: 'A pattern starts at 5. The rule is multiply by 4.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Write the first 5 terms (with commas, e.g. 2, 6, 18, 54, 162)',
              correctAnswer: '5, 20, 80, 320, 1280',
              correctAnswers: ['5, 20, 80, 320, 1280', '5,20,80,320,1280', '5 20 80 320 1280'],
              explanation: '5 × 4 = 20, 20 × 4 = 80, 80 × 4 = 320, 320 × 4 = 1 280.',
            },
            {
              label: 'b) Is this pattern increasing, decreasing, or neither? Explain your answer.',
              checkMode: 'self',
              answer: 'Increasing — each term is 4 times the one before it, so the terms grow larger every step.',
            },
          ],
        },
      ],
    },
    {
      id: 'finding-missing-numbers',
      title: 'Finding Missing Numbers in a Pattern',
      icon: '❓',
      explanation: `
<p>Sometimes a term is missing from the <strong>middle</strong> of a pattern rather than at the end. To find a <span style="color:#ea580c;font-weight:700">missing term</span>, you first discover the <span style="color:#dc2626;font-weight:700">rule</span> from the <span style="color:#2563eb;font-weight:700">known terms</span>, then apply that rule to fill the gap.</p>

<h3>Strategy: Find → Apply → Check</h3>
<ol>
  <li><strong>Find the rule</strong> — Look at the <span style="color:#2563eb">known terms</span> that sit next to each other. Find the constant difference or ratio between them.</li>
  <li><strong>Apply the rule</strong> — Work <em>forwards</em> from the known term <em>before</em> the gap, or work <em>backwards</em> from the known term <em>after</em> the gap, to find the <span style="color:#ea580c">missing term</span>.</li>
  <li><strong>Check</strong> — Put your answer back into the sequence and confirm that every pair of consecutive terms follows the same <span style="color:#dc2626">rule</span>.</li>
</ol>

<h3>Working backwards using the inverse operation</h3>
<ul>
  <li>If the rule is <span style="color:#dc2626">add 8</span>, work backwards by <span style="color:#dc2626">subtracting 8</span> from the term <em>after</em> the gap.</li>
  <li>If the rule is <span style="color:#dc2626">multiply by 3</span>, work backwards by <span style="color:#dc2626">dividing by 3</span> from the term <em>after</em> the gap.</li>
  <li>If the rule is <span style="color:#dc2626">subtract 5</span>, work backwards by <span style="color:#dc2626">adding 5</span> to the term <em>after</em> the gap.</li>
</ul>

<h3>Colour key used in this section</h3>
<p><span style="color:#2563eb;font-weight:700">Known terms are shown in blue</span> &nbsp;·&nbsp; <span style="color:#ea580c;font-weight:700">Missing term is shown in orange</span> &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">Rule is shown in red</span></p>

<VideoPlaceholder title="Finding Missing Numbers in a Pattern" duration="4 min" />
`,
      workedExamples: [
        {
          title: 'Missing Term in the Middle (Addition Pattern)',
          question: '<p>Find the missing term: <span style="color:#2563eb">5</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">15, 20, 25</span></p>',
          steps: [
            'Look at the known terms that are consecutive: 15, 20, and 25. Find the differences: 20 − 15 = 5 and 25 − 20 = 5.',
            'The differences are equal, so the rule is add 5.',
            'Work forwards from the known term before the gap: 5 + 5 = 10. Or work backwards from 15: 15 − 5 = 10. Both give the same answer.',
            'Check by substituting back: 5, 10, 15, 20, 25. Differences: 10 − 5 = 5, 15 − 10 = 5, 20 − 15 = 5, 25 − 20 = 5. All equal ✓',
          ],
          answer: 'The missing term is 10.',
        },
        {
          title: 'Missing Term in the Middle (Multiplication Pattern)',
          question: '<p>Find the missing term: <span style="color:#2563eb">4, 8</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">32, 64</span></p>',
          steps: [
            'Check the differences: 8 − 4 = 4, 32 − ? (unknown). The differences are not equal, so try ratios.',
            'Check ratios using the known consecutive pairs: 8 ÷ 4 = 2 and 64 ÷ 32 = 2. The ratio is always 2, so the rule is multiply by 2.',
            'Work forwards from 8: 8 × 2 = 16. Or work backwards from 32: 32 ÷ 2 = 16. Both confirm the same answer.',
            'Check by substituting back: 4, 8, 16, 32, 64. Ratios: 8 ÷ 4 = 2, 16 ÷ 8 = 2, 32 ÷ 16 = 2, 64 ÷ 32 = 2. All equal ✓',
          ],
          answer: 'The missing term is 16.',
        },
        {
          title: 'Missing Term in the Middle (Subtraction Pattern)',
          question: '<p>Find the missing term: <span style="color:#2563eb">90</span>, <span style="color:#ea580c">___</span>, <span style="color:#2563eb">70, 60, 50</span></p>',
          steps: [
            'Look at the known consecutive terms: 70, 60, and 50. Find the differences: 60 − 70 = −10 and 50 − 60 = −10.',
            'The differences are equal and negative, so the rule is subtract 10.',
            'Work forwards from 90: 90 − 10 = 80. Or work backwards from 70: 70 + 10 = 80. (Working backwards uses the inverse: adding 10.)',
            'Check by substituting back: 90, 80, 70, 60, 50. Differences: 80 − 90 = −10, 70 − 80 = −10, 60 − 70 = −10, 50 − 60 = −10. All equal ✓',
          ],
          answer: 'The missing term is 80.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q13 Easy — find missing term in a +3 pattern ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the missing term in the pattern: 3, 6, ___, 12, 15',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Differences between known consecutive terms: 6 − 3 = 3, 12 − ? (unknown), 15 − 12 = 3. Rule: add 3. Work forwards from 6: 6 + 3 = 9. Check: 3, 6, 9, 12, 15 — differences all 3 ✓',
        },
        // ── Q14 Medium — find missing term in ÷3 and +20 patterns ───────────
        {
          difficulty: 'Medium',
          question: 'Find the missing term in each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) 81, 27, ___, 3',
              correctAnswer: '9',
              explanation: 'Check ratios of known consecutive terms: 27 ÷ 81 = 1/3, 3 ÷ ? (unknown). Try the ratio on the known pair at the end: 3 is after the missing term. Rule: divide by 3. Work forwards from 27: 27 ÷ 3 = 9. Check: 81, 27, 9, 3 — ratios all 1/3 ✓',
            },
            {
              label: 'b) 15, ___, 55, 75, 95',
              correctAnswer: '35',
              explanation: 'Differences of known consecutive terms: 75 − 55 = 20, 95 − 75 = 20. Rule: add 20. Work backwards from 55: 55 − 20 = 35. Check: 15, 35, 55, 75, 95 — differences all 20 ✓',
            },
          ],
        },
        // ── Q15 Hard — find missing terms in +6, ×5, and ÷2 patterns ─────────
        {
          difficulty: 'Hard',
          question: 'Find the missing term in each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ___, 18, 24, 30, 36',
              correctAnswer: '12',
              explanation: 'Differences: 24 − 18 = 6, 30 − 24 = 6, 36 − 30 = 6. Rule: add 6. Work backwards from 18: 18 − 6 = 12. Check: 12, 18, 24, 30, 36 — differences all 6 ✓',
            },
            {
              label: 'b) 5, 25, ___, 625',
              correctAnswer: '125',
              explanation: 'Check ratios: 25 ÷ 5 = 5, 625 ÷ ? (unknown). Rule: multiply by 5 (confirmed from the known pair). Work forwards from 25: 25 × 5 = 125. Check: 5, 25, 125, 625 — ratios all 5 ✓',
            },
            {
              label: 'c) 200, ___, 50, 25',
              correctAnswer: '100',
              explanation: 'Check ratios of known consecutive terms: 50 ÷ ? (unknown), 25 ÷ 50 = 0.5. Rule: divide by 2. Work forwards from 200: 200 ÷ 2 = 100. Check: 200, 100, 50, 25 — ratios all 0.5 ✓',
            },
          ],
        },
      ],
    },
    {
      id: 'creating-your-own-patterns',
      title: 'Creating Your Own Patterns',
      icon: '✏️',
      explanation: `
<p>You can design your own number pattern by choosing a <strong>starting number</strong> and a <strong>rule</strong>. Once you have those two things, you simply apply the rule over and over to generate as many terms as you like.</p>

<h3>Five steps to create your own pattern</h3>
<ol>
  <li><strong>Choose a starting number</strong> — this is the first term.</li>
  <li><strong>Choose a rule</strong> — decide whether to add, subtract, multiply, or divide, and by how much.</li>
  <li><strong>Apply the rule</strong> to the first term to get the second term.</li>
  <li><strong>Repeat</strong> — keep applying the same rule to each new term until you have enough terms.</li>
  <li><strong>Check</strong> — work backwards through your sequence using the inverse operation to confirm that every step follows the rule.</li>
</ol>

<h3>Types of patterns you can create</h3>
<table>
  <tr><th>Type</th><th>Rule example</th><th>Example sequence</th></tr>
  <tr>
    <td><strong>Increasing</strong></td>
    <td>Add 9</td>
    <td>3, 12, 21, 30, 39</td>
  </tr>
  <tr>
    <td><strong>Decreasing</strong></td>
    <td>Subtract 15</td>
    <td>80, 65, 50, 35, 20</td>
  </tr>
  <tr>
    <td><strong>Rapidly increasing</strong></td>
    <td>Multiply by 4</td>
    <td>2, 8, 32, 128, 512</td>
  </tr>
  <tr>
    <td><strong>Rapidly decreasing</strong></td>
    <td>Divide by 2</td>
    <td>96, 48, 24, 12, 6</td>
  </tr>
</table>

<VideoPlaceholder title="Creating Your Own Patterns" duration="4 min" />
`,
      workedExamples: [
        {
          title: 'Creating an Increasing Addition Pattern',
          question: '<p>Create a number pattern with 5 terms. Start at 3. Use the rule: add 7.</p>',
          steps: [
            'Start: first term = 3.',
            'Apply the rule — add 7: 3 + 7 = 10. Second term is 10.',
            'Apply the rule again: 10 + 7 = 17. Third term is 17.',
            'Continue: 17 + 7 = 24. Fourth term is 24.',
            'Continue: 24 + 7 = 31. Fifth term is 31.',
            'Check by working backwards using the inverse (subtract 7): 31 − 7 = 24, 24 − 7 = 17, 17 − 7 = 10, 10 − 7 = 3 ✓',
          ],
          answer: 'The pattern is 3, 10, 17, 24, 31.',
        },
        {
          title: 'Creating a Decreasing Subtraction Pattern',
          question: '<p>Create a number pattern with 5 terms. Start at 100. Use the rule: subtract 15.</p>',
          steps: [
            'Start: first term = 100.',
            'Apply the rule — subtract 15: 100 − 15 = 85. Second term is 85.',
            'Continue: 85 − 15 = 70. Third term is 70.',
            'Continue: 70 − 15 = 55. Fourth term is 55.',
            'Continue: 55 − 15 = 40. Fifth term is 40.',
            'Check by working backwards using the inverse (add 15): 40 + 15 = 55, 55 + 15 = 70, 70 + 15 = 85, 85 + 15 = 100 ✓',
          ],
          answer: 'The pattern is 100, 85, 70, 55, 40.',
        },
        {
          title: 'Creating a Multiplication Pattern',
          question: '<p>Create a number pattern with 5 terms. Start at 2. Use the rule: multiply by 3.</p>',
          steps: [
            'Start: first term = 2.',
            'Apply the rule — multiply by 3: 2 × 3 = 6. Second term is 6.',
            'Continue: 6 × 3 = 18. Third term is 18.',
            'Continue: 18 × 3 = 54. Fourth term is 54.',
            'Continue: 54 × 3 = 162. Fifth term is 162.',
            'Check by working backwards using the inverse (divide by 3): 162 ÷ 3 = 54, 54 ÷ 3 = 18, 18 ÷ 3 = 6, 6 ÷ 3 = 2 ✓',
          ],
          answer: 'The pattern is 2, 6, 18, 54, 162.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [
        // ── Q16 Easy — write first 5 terms of +9 pattern ─────────────────────
        {
          difficulty: 'Easy',
          question: 'Write the first 5 terms of a pattern that starts at 8 and uses the rule "add 9". Write with commas.',
          answer: '8, 17, 26, 35, 44',
          checkMode: 'auto',
          correctAnswer: '8, 17, 26, 35, 44',
          correctAnswers: ['8, 17, 26, 35, 44', '8,17,26,35,44', '8 17 26 35 44'],
          explanation: 'Start at 8. Add 9 each time: 8, 8+9=17, 17+9=26, 26+9=35, 35+9=44.',
        },
        // ── Q17 Medium — first 5 terms of −12 and ×5 patterns ────────────────
        {
          difficulty: 'Medium',
          question: 'Write the first 5 terms for each pattern.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Start at 96. Rule: subtract 12. Write with commas.',
              correctAnswer: '96, 84, 72, 60, 48',
              correctAnswers: ['96, 84, 72, 60, 48', '96,84,72,60,48', '96 84 72 60 48'],
              explanation: 'Subtract 12 each time: 96, 96−12=84, 84−12=72, 72−12=60, 60−12=48.',
            },
            {
              label: 'b) Start at 1. Rule: multiply by 5. Write with commas.',
              correctAnswer: '1, 5, 25, 125, 625',
              correctAnswers: ['1, 5, 25, 125, 625', '1,5,25,125,625', '1 5 25 125 625'],
              explanation: 'Multiply by 5 each time: 1, 1×5=5, 5×5=25, 25×5=125, 125×5=625.',
            },
          ],
        },
        // ── Q18 Hard — create own decreasing pattern with inverse check ───────
        {
          difficulty: 'Hard',
          question: 'Create your own decreasing pattern with at least 5 terms.\n\nWrite down:\n• Your starting number\n• Your rule (e.g. subtract 11)\n• All 5 terms in order\n• How you checked your pattern is correct (use the inverse operation)',
          answer: 'Any valid decreasing pattern with a constant rule (e.g. Start: 60, Rule: subtract 8, Terms: 60, 52, 44, 36, 28. Check: add 8 backwards: 28+8=36, 36+8=44, 44+8=52, 52+8=60 ✓).',
          checkMode: 'self',
        },
      ],
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Extend the pattern | 4-7 Describe/name the rule |
    // 8-11 Function machines | 12-15 Mixed real-world (all 4 ops) |
    // 16-17 Missing interior term | 18-19 Create/justify/critique
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Find the next term: 6, 15, 24, 33, ___', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'Differences: 15 − 6 = 9, 24 − 15 = 9, 33 − 24 = 9. The rule is add 9. Next term: 33 + 9 = 42.' },
        { difficulty: 'Easy', question: 'Find the next term: 100, 88, 76, 64, ___', answer: '52', checkMode: 'auto', correctAnswer: '52', explanation: 'Differences: 88 − 100 = −12, 76 − 88 = −12, 64 − 76 = −12. The rule is subtract 12. Next term: 64 − 12 = 52.' },
        { difficulty: 'Easy', question: 'A pattern doubles each time: 5, 10, 20, 40, ___, ___. Write the next two terms, separated by a comma.', answer: '80, 160', checkMode: 'auto', correctAnswer: '80, 160', correctAnswers: ['80, 160', '80,160', '80 160'], explanation: 'Ratios: 10 ÷ 5 = 2, 20 ÷ 10 = 2, 40 ÷ 20 = 2. The rule is multiply by 2. Next terms: 40 × 2 = 80, 80 × 2 = 160.' },
        { difficulty: 'Easy', question: 'Find the next term: 480, 240, 120, ___', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'Ratios: 240 ÷ 480 = ½, 120 ÷ 240 = ½. The rule is divide by 2 (halve). Next term: 120 ÷ 2 = 60.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 9, 18, 27, 36, 45', answer: 'add 9', checkMode: 'auto', correctAnswer: 'add 9', correctAnswers: ['add 9', '+9', '+ 9'], explanation: 'Differences: 18 − 9 = 9, 27 − 18 = 9, 36 − 27 = 9, 45 − 36 = 9. Every difference is 9, so the rule is add 9.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 512, 256, 128, 64', answer: 'divide by 2', checkMode: 'auto', correctAnswer: 'divide by 2', correctAnswers: ['divide by 2', '÷2', '÷ 2', 'halve', 'half'], explanation: 'Differences are not equal (256 − 512 = −256, but 128 − 256 = −128), so try ratios: 256 ÷ 512 = ½, 128 ÷ 256 = ½, 64 ÷ 128 = ½. The rule is divide by 2.' },
        { difficulty: 'Easy-Medium', question: 'Look at the pattern: 7, 14, 28, 56. Explain how you know whether the rule is addition or multiplication, then state the rule.', answer: 'The differences (7, 14, 28) are not equal, so it cannot be an addition pattern. Checking ratios instead: 14÷7=2, 28÷14=2, 56÷28=2 — the ratio is always 2, so the rule is multiplication: multiply by 2.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student looks at the pattern 5, 9, 13, 17 and says "the rule is add 5." Is the student correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Differences: 9 − 5 = 4, 13 − 9 = 4, 17 − 13 = 4. The true rule is add 4, not add 5, so the student is incorrect.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "add 12". What is the output when the input is 15?', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Apply the rule: 15 + 12 = 27.' },
        { difficulty: 'Medium', question: 'A function machine table shows: input 4 → output 9, input 7 → output 12, input 10 → output 15, input 13 → output ___. Find the rule and the missing output.', answer: 'add 5; missing output is 18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'add 5, 18', 'add 5; 18'], explanation: 'The output is always 5 more than the input: 4+5=9, 7+5=12, 10+5=15. Rule: add 5. Missing output: 13 + 5 = 18.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "multiply by 7". The output is 84. What is the input?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'The inverse of × 7 is ÷ 7. 84 ÷ 7 = 12. Check: 12 × 7 = 84 ✓' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "subtract 4". Use the table to answer both parts.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 9 → output 5, input 14 → output 10, input 20 → output ___. Find the missing output.', correctAnswer: '16', explanation: '20 − 4 = 16.' },
          { label: 'b) What input gives an output of 1?', correctAnswer: '5', explanation: 'Use the inverse (add 4): 1 + 4 = 5. Check: 5 − 4 = 1 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Karabo saves R15 every week and starts with R0 in her tin. How much will she have saved after 6 weeks?', answer: 'R90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', 'R90'], explanation: 'This is an addition pattern: 0, 15, 30, 45, 60, 75, 90 (add 15 each week). After 6 weeks: 15 × 6 = R90.' },
        { difficulty: 'Medium', question: 'A colony of bacteria starts with 3 bacteria and doubles every hour. How many bacteria are there after 5 hours?', answer: '96', checkMode: 'auto', correctAnswer: '96', explanation: 'This is a multiplication pattern: 3, 6, 12, 24, 48, 96 (multiply by 2 each hour). After 5 hours: 3 × 2⁵ = 3 × 32 = 96.' },
        { difficulty: 'Medium', question: 'A ball is dropped from 160 cm. Each time it bounces, it reaches only half the height of the bounce before. What height does it reach after the 3rd bounce?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 cm'], explanation: 'This is a division pattern: 160, 80, 40, 20 (divide by 2 each bounce). After 3 bounces: 160 ÷ 2 ÷ 2 ÷ 2 = 20 cm.' },
        { difficulty: 'Medium-Hard', question: 'A cinema sells 240 tickets on Monday. Each day after that, 30 fewer tickets are sold than the day before. Compare Wednesday\'s sales to Friday\'s sales — how many more tickets are sold on Wednesday than on Friday?', answer: '60 more', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 more'], explanation: 'Pattern: Mon 240, Tue 210, Wed 180, Thu 150, Fri 120 (subtract 30 each day). Wednesday − Friday = 180 − 120 = 60 more tickets on Wednesday.' },
        { difficulty: 'Hard', question: 'Find the missing term: 8, ___, 32, 64, 128', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Known consecutive terms 32, 64, 128 give ratios 64÷32=2 and 128÷64=2, so the rule is multiply by 2. Work forwards from 8: 8 × 2 = 16. Check: 8, 16, 32, 64, 128 — ratios all 2 ✓' },
        { difficulty: 'Hard', question: 'Find the missing term: 95, 80, ___, 50, 35', answer: '65', checkMode: 'auto', correctAnswer: '65', explanation: 'Known consecutive terms 50, 35 give a difference of 35 − 50 = −15, and 80 − 95 = −15, so the rule is subtract 15. Work forwards from 80: 80 − 15 = 65. Check: 95, 80, 65, 50, 35 — differences all −15 ✓' },
        { difficulty: 'Hard', question: 'Create your own pattern with 5 terms. Start at a number of your choice, choose a rule (add, subtract, multiply, or divide by a constant amount), write out all 5 terms, and then verify your pattern is correct using the inverse operation.', answer: 'Any valid pattern with a constant rule (e.g. Start: 6, Rule: multiply by 3, Terms: 6, 18, 54, 162, 486. Check using the inverse, divide by 3: 486÷3=162, 162÷3=54, 54÷3=18, 18÷3=6 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the pattern 90, 75, 60, 45 is "increasing because the numbers are large." Explain why the student is wrong, and classify the pattern correctly (increasing, decreasing, or neither) with reasoning.', answer: 'The student is confusing the size of the numbers with the direction of the pattern. What matters is whether each term is bigger or smaller than the one before it. Differences: 75−90=−15, 60−75=−15, 45−60=−15 — every term is 15 less than the one before, so the pattern is decreasing, not increasing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered number patterns for Grade 5. Excellent work!' },
        { minScore: 15, message: 'Excellent work! You have a very strong grasp of number patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
        { minScore: 0, message: "Don't give up — every mathematician started as a beginner! Revisit the explanations and worked examples section by section, then try again." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'What is the next term? 4, 10, 16, 22, ___', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Differences: 10 − 4 = 6, 16 − 10 = 6, 22 − 16 = 6. The rule is add 6. Next term: 22 + 6 = 28.' },
        { difficulty: 'Easy', question: 'What is the next term? 200, 185, 170, 155, ___', answer: '140', checkMode: 'auto', correctAnswer: '140', explanation: 'Differences: 185 − 200 = −15, 170 − 185 = −15, 155 − 170 = −15. The rule is subtract 15. Next term: 155 − 15 = 140.' },
        { difficulty: 'Easy', question: 'A pattern triples each time: 2, 6, 18, 54, ___, ___. Write the next two terms, separated by a comma.', answer: '162, 486', checkMode: 'auto', correctAnswer: '162, 486', correctAnswers: ['162, 486', '162,486', '162 486'], explanation: 'Ratios: 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3. The rule is multiply by 3. Next terms: 54 × 3 = 162, 162 × 3 = 486.' },
        { difficulty: 'Easy', question: 'What is the next term? 3 125, 625, 125, ___', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: 'Ratios: 625 ÷ 3 125 = ⅕, 125 ÷ 625 = ⅕. The rule is divide by 5. Next term: 125 ÷ 5 = 25.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 14, 28, 42, 56, 70', answer: 'add 14', checkMode: 'auto', correctAnswer: 'add 14', correctAnswers: ['add 14', '+14', '+ 14'], explanation: 'Differences: 28 − 14 = 14, 42 − 28 = 14, 56 − 42 = 14, 70 − 56 = 14. Every difference is 14, so the rule is add 14.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 1 000, 100, 10, 1', answer: 'divide by 10', checkMode: 'auto', correctAnswer: 'divide by 10', correctAnswers: ['divide by 10', '÷10', '÷ 10'], explanation: 'Ratios: 100 ÷ 1 000 = 1/10, 10 ÷ 100 = 1/10, 1 ÷ 10 = 1/10. The rule is divide by 10.' },
        { difficulty: 'Easy-Medium', question: 'Look at the pattern: 6, 18, 54, 162. Explain how you can tell this is a multiplication pattern rather than an addition pattern, then state the rule.', answer: 'The differences (12, 36, 108) keep getting bigger, so they are not constant — this rules out addition. Checking ratios instead: 18÷6=3, 54÷18=3, 162÷54=3 — the ratio is always 3, confirming a multiplication pattern with rule: multiply by 3.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student looks at the pattern 100, 92, 84, 76 and says "the rule is subtract 6." Is the student correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Differences: 92 − 100 = −8, 84 − 92 = −8, 76 − 84 = −8. The true rule is subtract 8, not subtract 6, so the student is incorrect.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "subtract 9". What is the output when the input is 40?', answer: '31', checkMode: 'auto', correctAnswer: '31', explanation: 'Apply the rule: 40 − 9 = 31.' },
        { difficulty: 'Medium', question: 'A function machine table shows: input 3 → output 21, input 5 → output 35, input 7 → output 49, input 9 → output ___. Find the rule and the missing output.', answer: 'multiply by 7; missing output is 63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63', 'multiply by 7, 63', 'multiply by 7; 63'], explanation: 'Each output is 7 times its input: 3×7=21, 5×7=35, 7×7=49. Rule: multiply by 7. Missing output: 9 × 7 = 63.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "add 18". The output is 47. What is the input?', answer: '29', checkMode: 'auto', correctAnswer: '29', explanation: 'The inverse of + 18 is − 18. 47 − 18 = 29. Check: 29 + 18 = 47 ✓' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "divide by 4". Use the table to answer both parts.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 40 → output 10, input 64 → output 16, input 100 → output ___. Find the missing output.', correctAnswer: '25', explanation: '100 ÷ 4 = 25.' },
          { label: 'b) What input gives an output of 3?', correctAnswer: '12', explanation: 'Use the inverse (multiply by 4): 3 × 4 = 12. Check: 12 ÷ 4 = 3 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Tumelo saves R20 every week and starts with nothing saved. How much will he have saved after 7 weeks?', answer: 'R140', checkMode: 'auto', correctAnswer: '140', correctAnswers: ['140', 'R140'], explanation: 'This is an addition pattern: 0, 20, 40, 60, 80, 100, 120, 140 (add 20 each week). After 7 weeks: 20 × 7 = R140.' },
        { difficulty: 'Medium', question: 'A plant seedling is 4 cm tall and its height doubles every week. How tall is it after 4 weeks?', answer: '64 cm', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 cm'], explanation: 'This is a multiplication pattern: 4, 8, 16, 32, 64 (multiply by 2 each week). After 4 weeks: 4 × 2⁴ = 4 × 16 = 64 cm.' },
        { difficulty: 'Medium', question: 'A swimming pool is heated to 28°C. Once the heater is switched off, the water cools by 2°C every hour. What is the temperature after 5 hours?', answer: '18°C', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18°C'], explanation: 'This is a subtraction pattern: 28, 26, 24, 22, 20, 18 (subtract 2 each hour). After 5 hours: 28 − (2 × 5) = 28 − 10 = 18°C.' },
        { difficulty: 'Medium-Hard', question: 'A market stall sells 300 loaves on Saturday. Each following day, 25 fewer loaves are sold than the day before. Compare Sunday\'s sales to Tuesday\'s sales — how many more loaves are sold on Sunday than on Tuesday?', answer: '50 more', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 more'], explanation: 'Pattern: Sat 300, Sun 275, Mon 250, Tue 225 (subtract 25 each day). Sunday − Tuesday = 275 − 225 = 50 more loaves on Sunday.' },
        { difficulty: 'Hard', question: 'Find the missing term: 500, ___, 20, 4', answer: '100', checkMode: 'auto', correctAnswer: '100', explanation: 'Known consecutive terms 20, 4 give a ratio of 4 ÷ 20 = 1/5, so the rule is divide by 5. Work forwards from 500: 500 ÷ 5 = 100. Check: 500, 100, 20, 4 — ratios all 1/5 ✓' },
        { difficulty: 'Hard', question: 'Find the missing term: 8, ___, 36, 50, 64', answer: '22', checkMode: 'auto', correctAnswer: '22', explanation: 'Known consecutive terms 36, 50, 64 give differences of 50−36=14 and 64−50=14, so the rule is add 14. Work backwards from 36: 36 − 14 = 22. Check: 8, 22, 36, 50, 64 — differences all 14 ✓' },
        { difficulty: 'Hard', question: 'Create your own pattern with 5 terms. Start at a number of your choice, choose a rule (add, subtract, multiply, or divide by a constant amount), write out all 5 terms, and then verify your pattern is correct using the inverse operation.', answer: 'Any valid pattern with a constant rule (e.g. Start: 3, Rule: multiply by 4, Terms: 3, 12, 48, 192, 768. Check using the inverse, divide by 4: 768÷4=192, 192÷4=48, 48÷4=12, 12÷4=3 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the pattern 4, 12, 36, 108 is "decreasing because it starts small." Explain why the student is wrong, and classify the pattern correctly (increasing, decreasing, or neither) with reasoning.', answer: 'The student is confusing the starting value with the direction of the pattern. What matters is whether each term is bigger or smaller than the one before it. Ratios: 12÷4=3, 36÷12=3, 108÷36=3 — every term is 3 times the one before, so the terms keep growing and the pattern is increasing, not decreasing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered number patterns for Grade 5. Excellent work!' },
        { minScore: 15, message: 'Excellent work! You have a very strong grasp of number patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
        { minScore: 0, message: "Don't give up — every mathematician started as a beginner! Revisit the explanations and worked examples section by section, then try again." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1-2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Find the missing next term: 9, 20, 31, 42, ___', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Differences: 20 − 9 = 11, 31 − 20 = 11, 42 − 31 = 11. The rule is add 11. Next term: 42 + 11 = 53.' },
        { difficulty: 'Easy', question: 'Find the missing next term: 250, 232, 214, 196, ___', answer: '178', checkMode: 'auto', correctAnswer: '178', explanation: 'Differences: 232 − 250 = −18, 214 − 232 = −18, 196 − 214 = −18. The rule is subtract 18. Next term: 196 − 18 = 178.' },
        { difficulty: 'Easy', question: 'A pattern doubles each time: 6, 12, 24, 48, ___, ___. Write the next two terms, separated by a comma.', answer: '96, 192', checkMode: 'auto', correctAnswer: '96, 192', correctAnswers: ['96, 192', '96,192', '96 192'], explanation: 'Ratios: 12 ÷ 6 = 2, 24 ÷ 12 = 2, 48 ÷ 24 = 2. The rule is multiply by 2. Next terms: 48 × 2 = 96, 96 × 2 = 192.' },
        { difficulty: 'Easy', question: 'Find the missing next term: 4 096, 1 024, 256, ___', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: 'Ratios: 1 024 ÷ 4 096 = ¼, 256 ÷ 1 024 = ¼. The rule is divide by 4. Next term: 256 ÷ 4 = 64.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 21, 35, 49, 63, 77', answer: 'add 14', checkMode: 'auto', correctAnswer: 'add 14', correctAnswers: ['add 14', '+14', '+ 14'], explanation: 'Differences: 35 − 21 = 14, 49 − 35 = 14, 63 − 49 = 14, 77 − 63 = 14. Every difference is 14, so the rule is add 14.' },
        { difficulty: 'Easy-Medium', question: 'Describe the rule for the pattern: 900, 300, 100', answer: 'divide by 3', checkMode: 'auto', correctAnswer: 'divide by 3', correctAnswers: ['divide by 3', '÷3', '÷ 3'], explanation: 'Ratios: 300 ÷ 900 = 1/3, 100 ÷ 300 = 1/3. The rule is divide by 3.' },
        { difficulty: 'Easy-Medium', question: 'Look at the pattern: 8, 24, 72, 216. Explain how you can tell this is a multiplication pattern rather than an addition pattern, then state the rule.', answer: 'The differences (16, 48, 144) keep growing rather than staying the same, so this cannot be an addition pattern. Checking ratios instead: 24÷8=3, 72÷24=3, 216÷72=3 — the ratio is always 3, confirming a multiplication pattern with rule: multiply by 3.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student looks at the pattern 60, 52, 44, 36 and says "the rule is subtract 6." Is the student correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'Differences: 52 − 60 = −8, 44 − 52 = −8, 36 − 44 = −8. The true rule is subtract 8, not subtract 6, so the student is incorrect.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "multiply by 9". What is the output when the input is 8?', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Apply the rule: 8 × 9 = 72.' },
        { difficulty: 'Medium', question: 'A function machine table shows: input 5 → output 8, input 9 → output 12, input 12 → output 15, input 20 → output ___. Find the rule and the missing output.', answer: 'add 3; missing output is 23', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23', 'add 3, 23', 'add 3; 23'], explanation: 'The output is always 3 more than the input: 5+3=8, 9+3=12, 12+3=15. Rule: add 3. Missing output: 20 + 3 = 23.' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "subtract 13". The output is 29. What is the input?', answer: '42', checkMode: 'auto', correctAnswer: '42', explanation: 'The inverse of − 13 is + 13. 29 + 13 = 42. Check: 42 − 13 = 29 ✓' },
        { difficulty: 'Medium', question: 'A function machine uses the rule "add 25". Use the table to answer both parts.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Input 15 → output 40, input 30 → output 55, input 48 → output ___. Find the missing output.', correctAnswer: '73', explanation: '48 + 25 = 73.' },
          { label: 'b) What input gives an output of 100?', correctAnswer: '75', explanation: 'Use the inverse (subtract 25): 100 − 25 = 75. Check: 75 + 25 = 100 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi saves R12 every week, starting from R0. How much will she have saved after 8 weeks?', answer: 'R96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', 'R96'], explanation: 'This is an addition pattern: add 12 each week for 8 weeks. Total: 12 × 8 = R96.' },
        { difficulty: 'Medium', question: 'A culture of bacteria starts with 2 bacteria and triples every hour. How many bacteria are there after 4 hours?', answer: '162', checkMode: 'auto', correctAnswer: '162', explanation: 'This is a multiplication pattern: 2, 6, 18, 54, 162 (multiply by 3 each hour). After 4 hours: 2 × 3⁴ = 2 × 81 = 162.' },
        { difficulty: 'Medium', question: 'A ball is dropped from 320 cm. Each bounce reaches only half the height of the one before. What height does it reach after the 4th bounce?', answer: '20 cm', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 cm'], explanation: 'This is a division pattern: 320, 160, 80, 40, 20 (divide by 2 each bounce). After 4 bounces: 320 ÷ 2 ÷ 2 ÷ 2 ÷ 2 = 20 cm.' },
        { difficulty: 'Medium-Hard', question: 'A theatre starts with 500 seats booked for a play\'s opening week. Each day after, 40 fewer seats are booked than the day before. Compare Day 2\'s bookings to Day 6\'s bookings — how many more seats are booked on Day 2 than on Day 6?', answer: '160 more', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160', '160 more'], explanation: 'Pattern: Day1 500, Day2 460, Day3 420, Day4 380, Day5 340, Day6 300 (subtract 40 each day). Day 2 − Day 6 = 460 − 300 = 160 more seats booked on Day 2.' },
        { difficulty: 'Hard', question: 'Find the missing term: 7, ___, 63, 189, 567', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Known consecutive terms 63, 189, 567 give ratios 189÷63=3 and 567÷189=3, so the rule is multiply by 3. Work forwards from 7: 7 × 3 = 21. Check: 7, 21, 63, 189, 567 — ratios all 3 ✓' },
        { difficulty: 'Hard', question: 'Find the missing term: 88, ___, 60, 46, 32', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: 'Known consecutive terms 60, 46, 32 give differences of 46−60=−14 and 32−46=−14, so the rule is subtract 14. Work forwards from 88: 88 − 14 = 74. Check: 88, 74, 60, 46, 32 — differences all −14 ✓' },
        { difficulty: 'Hard', question: 'Create your own pattern with 5 terms. Start at a number of your choice, choose a rule (add, subtract, multiply, or divide by a constant amount), write out all 5 terms, and then verify your pattern is correct using the inverse operation.', answer: 'Any valid pattern with a constant rule (e.g. Start: 90, Rule: subtract 11, Terms: 90, 79, 68, 57, 46. Check using the inverse, add 11: 46+11=57, 57+11=68, 68+11=79, 79+11=90 ✓).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says the pattern 200, 150, 100, 50 is "neither increasing nor decreasing because it uses subtraction, not multiplication." Explain why the student is wrong, and classify the pattern correctly (increasing, decreasing, or neither) with reasoning.', answer: 'The student is wrongly assuming that only multiplication patterns can be classified as increasing or decreasing. In fact, direction depends only on whether each term is bigger or smaller than the one before it. Differences: 150−200=−50, 100−150=−50, 50−100=−50 — every term is 50 less than the one before, so the pattern is decreasing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! A perfect score — you have completely mastered number patterns for Grade 5. Excellent work!' },
        { minScore: 15, message: 'Excellent work! You have a very strong grasp of number patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
        { minScore: 0, message: "Don't give up — every mathematician started as a beginner! Revisit the explanations and worked examples section by section, then try again." },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 22, message: 'Outstanding! A perfect score — you have completely mastered number patterns for Grade 5. Excellent work!' },
    { minScore: 17, message: 'Excellent work! You have a very strong grasp of number patterns. Review any missed parts and you will have it perfect.' },
    { minScore: 12, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 7, message: 'Good effort! Work back through the study guide and worked examples for each section, then try the questions again.' },
    { minScore: 0, message: "Don't give up — every mathematician started as a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
