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
  title: 'Numbers, Operations and Relationships',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT ARE WHOLE NUMBERS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-whole-numbers',
      title: 'What Are Whole Numbers?',
      icon: '🌍',
      explanation:
        'Whole numbers are the numbers we use to count: 0, 1, 2, 3, 4, 5 … and they go on for ever — you can always count one more! ' +
        'Whole numbers do not include fractions (like ½) or decimals (like 3.5). They are always complete, whole amounts with nothing left over. ' +
        'Here are three real-life examples you see every day: 12 apples in a bag — you count 12 whole apples, never half an apple. ' +
        '3 450 learners in a school — there is no such thing as half a learner! ' +
        '10 000 metres in a race — the full race distance, with no parts left over. ' +
        'Zero (0) is the smallest whole number and is just as important as any other. ' +
        'When you count 1, 2, 3, 4 … you are counting forwards in whole numbers. You can also count backwards: 5, 4, 3, 2, 1, 0.',
      workedExamples: [
        {
          question: 'Is 7 a whole number? What about 2½?',
          answer: '7 is a whole number. 2½ is NOT a whole number.',
          steps: [
            '7 is a complete, countable amount with no fraction or decimal part — it is a whole number.',
            '2½ has a fraction part (the ½) added on — it is NOT a whole number.',
            'Whole numbers are always from the list 0, 1, 2, 3, 4, 5 … — never 2½ or 3.7.',
          ],
        },
        {
          question: 'Write all the whole numbers between 5 and 10.',
          answer: '6, 7, 8, 9',
          steps: [
            '"Between" means we do not include 5 or 10 themselves.',
            'Count from just after 5: the next whole number is 6, then 7, then 8, then 9.',
            'Stop before 10 — 10 is not included because the question says "between 5 and 10".',
            'Answer: 6, 7, 8, 9.',
          ],
        },
        {
          question: 'A class collected bottle caps. Sipho collected 14, Amira collected 9, and Lebo collected 21. Are all of these whole numbers?',
          answer: 'Yes — 14, 9, and 21 are all whole numbers.',
          steps: [
            'A whole number is any complete counting number starting from 0: 0, 1, 2, 3 …',
            '14 ✓ — a complete, countable amount.',
            '9 ✓ — a complete, countable amount.',
            '21 ✓ — a complete, countable amount.',
            'All three are whole numbers. You cannot collect half a bottle cap!',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PLACE VALUE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value',
      title: 'Place Value',
      icon: '📍',
      explanation: `<p>Every digit in a number has a value that depends on its <strong>position</strong>. This is called <strong>place value</strong>. Moving one place to the left makes a digit ten times bigger.</p>
<p style="margin-top:14px">We use four columns for four-digit numbers. Each column has its own colour — learn these colours because we use them in every example below:</p>
<div style="overflow-x:auto;margin-top:16px;margin-bottom:16px"><table style="border-collapse:collapse;font-size:0.95em;width:100%"><thead><tr><th style="padding:10px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Thousands</th><th style="padding:10px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds</th><th style="padding:10px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens</th><th style="padding:10px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units</th></tr></thead><tbody><tr><td style="padding:12px 18px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.3em;text-align:center">4</td><td style="padding:12px 18px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.3em;text-align:center">3</td><td style="padding:12px 18px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.3em;text-align:center">2</td><td style="padding:12px 18px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.3em;text-align:center">7</td></tr></tbody></table></div>
<p>The number shown in the table is <strong>4 327</strong>. The <span style="color:#dc2626;font-weight:700">4</span> sits in the Thousands column, so it is worth <span style="color:#dc2626;font-weight:700">4 000</span>. The <span style="color:#d97706;font-weight:700">3</span> sits in the Hundreds column, so it is worth <span style="color:#d97706;font-weight:700">300</span>. The <span style="color:#16a34a;font-weight:700">2</span> sits in the Tens column, so it is worth <span style="color:#16a34a;font-weight:700">20</span>. The <span style="color:#2563eb;font-weight:700">7</span> sits in the Units column, so it is worth <span style="color:#2563eb;font-weight:700">7</span>.</p>
<p style="margin-top:14px">We can write this in <strong>expanded notation</strong> — splitting the number to show the value of every digit:</p>
<p style="margin-top:10px;font-size:1.05em;padding:8px 0">4 327 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">4 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">300</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">20</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">7</span></p>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Place value chart showing 4 327 with each digit colour coded — Thousands red, Hundreds yellow, Tens green, Units blue</div>`,
      workedExamples: [
        {
          question: 'Write 7 054 in a place value table and in expanded notation. Show every step.',
          answer: '7 054 &nbsp;=&nbsp; <span style="color:#dc2626;font-weight:700">7 000</span> &nbsp;+&nbsp; <span style="color:#d97706;font-weight:700">0</span> &nbsp;+&nbsp; <span style="color:#16a34a;font-weight:700">50</span> &nbsp;+&nbsp; <span style="color:#2563eb;font-weight:700">4</span>',
          steps: [
            'Place each digit in the correct column:<br><br><div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:0.9em"><thead><tr><th style="padding:8px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:700;text-align:center">Thousands</th><th style="padding:8px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:700;text-align:center">Hundreds</th><th style="padding:8px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:700;text-align:center">Tens</th><th style="padding:8px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:700;text-align:center">Units</th></tr></thead><tbody><tr><td style="padding:10px 16px;background:#fee2e2;color:#dc2626;border:2px solid #fca5a5;font-weight:800;font-size:1.2em;text-align:center">7</td><td style="padding:10px 16px;background:#fef9c3;color:#d97706;border:2px solid #fde68a;font-weight:800;font-size:1.2em;text-align:center">0</td><td style="padding:10px 16px;background:#dcfce7;color:#16a34a;border:2px solid #86efac;font-weight:800;font-size:1.2em;text-align:center">5</td><td style="padding:10px 16px;background:#dbeafe;color:#2563eb;border:2px solid #93c5fd;font-weight:800;font-size:1.2em;text-align:center">4</td></tr></tbody></table></div>',
            '<span style="color:#dc2626;font-weight:700">7</span> is in the Thousands column → its value is <span style="color:#dc2626;font-weight:700">7 000</span>.',
            '<span style="color:#d97706;font-weight:700">0</span> is in the Hundreds column → its value is <span style="color:#d97706;font-weight:700">0</span> (there are no hundreds in this number).',
            '<span style="color:#16a34a;font-weight:700">5</span> is in the Tens column → its value is <span style="color:#16a34a;font-weight:700">50</span>.',
            '<span style="color:#2563eb;font-weight:700">4</span> is in the Units column → its value is <span style="color:#2563eb;font-weight:700">4</span>.',
            'Write in expanded notation: <span style="color:#dc2626;font-weight:700">7 000</span> + <span style="color:#d97706;font-weight:700">0</span> + <span style="color:#16a34a;font-weight:700">50</span> + <span style="color:#2563eb;font-weight:700">4</span> = 7 054.',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COUNTING FORWARDS AND BACKWARDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'counting-forwards-backwards',
      title: 'Counting Forwards and Backwards',
      icon: '↕️',
      explanation: `<p>Counting <strong>forwards</strong> means adding the same number each time to get the next number. Counting <strong>backwards</strong> means subtracting the same number each time. The number you add or subtract is called the <strong>interval</strong>.</p>
<p style="margin-top:14px"><strong>Counting in 1s</strong> — add 1 each time:</p>
<p style="margin-top:4px;padding-left:12px">1 → 2 → 3 → 4 → 5 &nbsp; (each number is 1 more than the one before it)</p>
<p style="margin-top:14px"><strong>Counting in 10s</strong> — add 10 each time:</p>
<p style="margin-top:4px;padding-left:12px">10 → 20 → 30 → 40 → 50 &nbsp; (each number is 10 more than the one before it)</p>
<p style="margin-top:14px"><strong>Counting in 100s</strong> — add 100 each time:</p>
<p style="margin-top:4px;padding-left:12px">100 → 200 → 300 → 400 → 500 &nbsp; (each number is 100 more than the one before it)</p>
<p style="margin-top:14px"><strong>Counting in 1 000s</strong> — add 1 000 each time:</p>
<p style="margin-top:4px;padding-left:12px">1 000 → 2 000 → 3 000 → 4 000 → 5 000 &nbsp; (each number is 1 000 more than the one before it)</p>
<p style="margin-top:14px">To count <strong>backwards</strong>, use the same intervals but <em>subtract</em> each time instead of adding.</p>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Number line showing counting forwards in 100s from 1 200 to 1 700 with arrows between each number</div>`,
      workedExamples: [
        {
          question: 'Count forwards in 100s starting from 1 200. Write the next 5 numbers.',
          answer: '1 200, 1 300, 1 400, 1 500, 1 600, 1 700',
          steps: [
            'We are counting forwards in 100s, so we add 100 each time.',
            'Start at 1 200.',
            '1 200 + 100 = 1 300.',
            '1 300 + 100 = 1 400.',
            '1 400 + 100 = 1 500.',
            '1 500 + 100 = 1 600.',
            '1 600 + 100 = 1 700.',
            'The sequence is: 1 200, 1 300, 1 400, 1 500, 1 600, 1 700.',
          ],
        },
        {
          question: 'Count backwards in 1 000s starting from 9 000. Write the next 5 numbers.',
          answer: '9 000, 8 000, 7 000, 6 000, 5 000, 4 000',
          steps: [
            'We are counting backwards in 1 000s, so we subtract 1 000 each time.',
            'Start at 9 000.',
            '9 000 − 1 000 = 8 000.',
            '8 000 − 1 000 = 7 000.',
            '7 000 − 1 000 = 6 000.',
            '6 000 − 1 000 = 5 000.',
            '5 000 − 1 000 = 4 000.',
            'The sequence is: 9 000, 8 000, 7 000, 6 000, 5 000, 4 000.',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — COMPARING AND ORDERING NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering',
      title: 'Comparing and Ordering Numbers',
      icon: '⚖️',
      explanation: `<p>We use three symbols to compare numbers:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li><strong>&lt;</strong> &nbsp; means <strong>less than</strong> &nbsp;— example: 3 &lt; 7 &nbsp;(3 is less than 7)</li>
<li><strong>&gt;</strong> &nbsp; means <strong>greater than</strong> &nbsp;— example: 7 &gt; 3 &nbsp;(7 is greater than 3)</li>
<li><strong>=</strong> &nbsp; means <strong>equal to</strong> &nbsp;— example: 5 = 5</li>
</ul>
<p style="margin-top:14px">💡 <strong>Memory trick:</strong> The open mouth of &lt; or &gt; always points towards the <strong>bigger</strong> number — like a hungry crocodile that always wants to eat the bigger meal!</p>
<p style="margin-top:16px">Follow these steps when comparing any two numbers:</p>
<p style="margin-top:10px"><strong>Step 1</strong> — Count the digits. More digits = bigger number. A 4-digit number is always bigger than a 3-digit number.</p>
<p style="margin-top:10px"><strong>Step 2</strong> — If both numbers have the same number of digits, compare the <span style="color:#dc2626;font-weight:700">thousands</span> digits first. The bigger <span style="color:#dc2626;font-weight:700">thousands</span> digit means the bigger number.</p>
<p style="margin-top:10px"><strong>Step 3</strong> — If the <span style="color:#dc2626;font-weight:700">thousands</span> digits are equal, compare the <span style="color:#d97706;font-weight:700">hundreds</span> digits. If those are equal too, compare the <span style="color:#16a34a;font-weight:700">tens</span> digits. If those are also equal, compare the <span style="color:#2563eb;font-weight:700">units</span> digits.</p>`,
      workedExamples: [
        {
          question: 'Compare 3 456 and 3 512. Which is bigger? Write your answer using < or >.',
          answer: '<span>3 456 &lt; 3 512 &nbsp;(3 456 is less than 3 512)</span>',
          steps: [
            '<strong>Step 1 — Count the digits:</strong> 3 456 has 4 digits and 3 512 has 4 digits. Same number of digits — move to Step 2.',
            '<strong>Step 2 — Compare the thousands digits:</strong> <span style="color:#dc2626;font-weight:700">3</span> 456 vs <span style="color:#dc2626;font-weight:700">3</span> 512. Both thousands digits are <span style="color:#dc2626;font-weight:700">3</span> — they are equal. Move to Step 3.',
            '<strong>Step 3 — Compare the hundreds digits:</strong> 3 <span style="color:#d97706;font-weight:700">4</span>56 vs 3 <span style="color:#d97706;font-weight:700">5</span>12. The hundreds digit of 3 456 is <span style="color:#d97706;font-weight:700">4</span> and of 3 512 is <span style="color:#d97706;font-weight:700">5</span>.',
            'Since <span style="color:#d97706;font-weight:700">4</span> &lt; <span style="color:#d97706;font-weight:700">5</span>, the number 3 456 is smaller than 3 512.',
            'Answer: 3 456 &lt; 3 512.',
          ],
        },
        {
          question: 'Order these numbers from smallest to biggest: 2 341, 987, 2 098, 3 001.',
          answer: '987,  2 098,  2 341,  3 001',
          steps: [
            '<strong>Step 1 — Count the digits:</strong> 987 has <strong>3 digits</strong>. The others (2 341, 2 098, 3 001) all have <strong>4 digits</strong>. Fewer digits = smaller number, so 987 comes first.',
            '<strong>Step 2 — Compare the 4-digit numbers by their thousands digits:</strong> <span style="color:#dc2626;font-weight:700">2</span> 341, <span style="color:#dc2626;font-weight:700">2</span> 098, <span style="color:#dc2626;font-weight:700">3</span> 001. Thousands digits are <span style="color:#dc2626;font-weight:700">2</span>, <span style="color:#dc2626;font-weight:700">2</span>, and <span style="color:#dc2626;font-weight:700">3</span>. So 3 001 is the largest.',
            '<strong>Step 3 — Compare 2 341 and 2 098 (same thousands digit):</strong> Compare hundreds — 2 <span style="color:#d97706;font-weight:700">3</span>41 vs 2 <span style="color:#d97706;font-weight:700">0</span>98. Hundreds digit of 2 341 is <span style="color:#d97706;font-weight:700">3</span> and of 2 098 is <span style="color:#d97706;font-weight:700">0</span>. Since <span style="color:#d97706;font-weight:700">0</span> &lt; <span style="color:#d97706;font-weight:700">3</span>, we have 2 098 &lt; 2 341.',
            'Final order from smallest to biggest: 987,  2 098,  2 341,  3 001.',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — ROUNDING OFF
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-off',
      title: 'Rounding Off',
      icon: '🎯',
      explanation: `<p>Sometimes we do not need an exact number — we need a number that is <strong>close enough</strong> and easy to work with. We call this <strong>rounding off</strong>.</p>
<p style="margin-top:14px">There is one simple rule for rounding:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li>If the <strong>deciding digit</strong> is <strong>0, 1, 2, 3 or 4</strong> — <strong>round down</strong> (the digit in the column you are rounding to stays the same)</li>
<li>If the <strong>deciding digit</strong> is <strong>5, 6, 7, 8 or 9</strong> — <strong>round up</strong> (add 1 to the digit in the column you are rounding to)</li>
</ul>
<p style="margin-top:16px">The <strong>deciding digit</strong> is the digit just to the right of the column you are rounding to. Here is which digit to look at:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li><strong>Rounding to the nearest 10</strong> — look at the <span style="color:#2563eb;font-weight:700">units digit</span> (the blue column). Replace the units digit with 0.</li>
<li><strong>Rounding to the nearest 100</strong> — look at the <span style="color:#16a34a;font-weight:700">tens digit</span> (the green column). Replace the tens and units digits with 0.</li>
</ul>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Number line showing 3 467 sitting between 3 460 and 3 470 with an arrow pointing up to 3 470</div>`,
      workedExamples: [
        {
          question: 'Round 3 467 to the nearest 10.',
          answer: '3 470',
          steps: [
            '<strong>Step 1 — Identify the deciding digit.</strong> We are rounding to the nearest 10, so we look at the <span style="color:#2563eb;font-weight:700">units digit</span>. In 3 467, the units digit is <span style="color:#2563eb;font-weight:700">7</span>.',
            '<strong>Step 2 — Apply the rounding rule.</strong> The deciding digit is <span style="color:#2563eb;font-weight:700">7</span>. Because 7 is 5 or more, we <strong>round up</strong> — add 1 to the tens digit.',
            '<strong>Step 3 — Replace and write the answer.</strong> The tens digit was 6. Add 1: 6 + 1 = 7. Replace the units digit with 0.',
            'Answer: <strong>3 470</strong>.',
          ],
        },
        {
          question: 'Round 5 234 to the nearest 100.',
          answer: '5 200',
          steps: [
            '<strong>Step 1 — Identify the deciding digit.</strong> We are rounding to the nearest 100, so we look at the <span style="color:#16a34a;font-weight:700">tens digit</span>. In 5 234, the tens digit is <span style="color:#16a34a;font-weight:700">3</span>.',
            '<strong>Step 2 — Apply the rounding rule.</strong> The deciding digit is <span style="color:#16a34a;font-weight:700">3</span>. Because 3 is less than 5, we <strong>round down</strong> — the hundreds digit stays the same.',
            '<strong>Step 3 — Replace and write the answer.</strong> The hundreds digit stays as 2. Replace both the tens and units digits with 0.',
            'Answer: <strong>5 200</strong>.',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — REPRESENTING NUMBERS ON A NUMBER LINE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'number-line',
      title: 'Representing Numbers on a Number Line',
      icon: '📏',
      explanation: `<p>A <strong>number line</strong> is a straight line with numbers written on it at equal spaces. The numbers always increase from left to right — smaller numbers are on the left and larger numbers are on the right.</p>
<p style="margin-top:14px">The equal spaces between the numbers are called <strong>intervals</strong>. If a number line goes from 0 to 1 000 with marks at every 100, the interval is 100.</p>
<p style="margin-top:14px">Some numbers fall <strong>exactly on a mark</strong>. Others fall <strong>between two marks</strong>. To find where a number sits between two marks:</p>
<ul style="margin-top:10px;margin-left:20px;list-style:disc;line-height:2.2">
<li>Look at the two marks on either side of your number.</li>
<li>If your number is exactly in the middle, it is the <strong>halfway point</strong>.</li>
<li>To calculate the halfway point: <strong>add the two marks together and divide by 2</strong>.</li>
</ul>
<div style="margin-top:20px;padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram placeholder: Number line from 0 to 10 000 in intervals of 1 000 with 6 000 and 8 500 marked with dots and labels</div>`,
      workedExamples: [
        {
          question: 'A number line goes from 0 to 10 000 in intervals of 1 000. Place 6 000 and 8 500 on the number line.',
          answer: '6 000 falls exactly on the 6 000 mark. 8 500 falls exactly halfway between 8 000 and 9 000.',
          steps: [
            '<strong>Step 1 — Draw the number line.</strong> Mark the points 0, 1 000, 2 000, 3 000, 4 000, 5 000, 6 000, 7 000, 8 000, 9 000, 10 000 at equal spaces.',
            '<strong>Step 2 — Place 6 000.</strong> The number 6 000 is a multiple of 1 000, so it falls <strong>exactly on the 6 000 mark</strong>. Place a dot directly on that mark and label it 6 000.',
            '<strong>Step 3 — Place 8 500.</strong> The number 8 500 is not a multiple of 1 000. It sits between 8 000 and 9 000. Ask: is 8 500 closer to 8 000 or 9 000, or is it in the middle?',
            '<strong>Step 4 — Find the halfway point between 8 000 and 9 000.</strong> Add the two marks: 8 000 + 9 000 = 17 000. Divide by 2: 17 000 ÷ 2 = 8 500.',
            'Because 8 500 equals the halfway point, it sits <strong>exactly halfway between 8 000 and 9 000</strong>. Place a dot in the middle of that interval and label it 8 500.',
          ],
        },
      ],
      practiceQuestions: [],
    },
  ],
  topicPractice: [

    // ── Section 1: What Are Whole Numbers? ───────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Write three examples of whole numbers you might see in real life.',
      answer:
        'Any three whole numbers from real life are correct. Examples:\n' +
        '• 15 learners in a group\n' +
        '• 250 pages in a book\n' +
        '• 8 goals scored in a match\n\n' +
        'Remember: a whole number is any complete counting number starting from 0 — no fractions, no decimals.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Which of these are whole numbers? Write only the whole numbers, in the same order as the list, separated by commas:\n\n' +
        '4,  ½,  7,  3.5,  100,  0',
      // normalizeAnswer("4, 7, 100, 0") → strip spaces/commas → "471000"
      correctAnswer: '471000',
      explanation:
        '4, 7, 100 and 0 are all whole numbers.\n\n' +
        '• 4 ✓ — a complete counting number\n' +
        '• ½ ✗ — a fraction, not a whole number\n' +
        '• 7 ✓ — a complete counting number\n' +
        '• 3.5 ✗ — a decimal, not a whole number\n' +
        '• 100 ✓ — a complete counting number\n' +
        '• 0 ✓ — zero is a whole number\n\n' +
        'Answer: 4, 7, 100, 0',
      answer: '4, 7, 100, 0',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'A shop has 1 245 red apples, 873 green apples and 12 yellow apples.\n\n' +
        'Work out the total number of apples. Then explain why your answer is a whole number and not a fraction.',
      answer:
        'Total = 1 245 + 873 + 12 = 2 130\n\n' +
        '2 130 is a whole number because you can only count complete apples — ' +
        'there is no such thing as half an apple when counting stock. ' +
        'The answer has no fraction or decimal part, so it is a whole number.',
    },

    // ── Section 2: Place Value ────────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Write the number 3 072 in expanded notation.',
      // normalizeAnswer("3 000 + 0 + 70 + 2") → "3000+0+70+2"
      correctAnswer: '3000+0+70+2',
      explanation:
        '3 072 = 3 000 + 0 + 70 + 2\n\n' +
        '• 3 is in the Thousands column → 3 000\n' +
        '• 0 is in the Hundreds column → 0\n' +
        '• 7 is in the Tens column → 70\n' +
        '• 2 is in the Units column → 2',
      answer: '3 000 + 0 + 70 + 2',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'What is the value of the digit 6 in each of these numbers?\n\n' +
        'a) 6 431\n' +
        'b) 2 640\n' +
        'c) 3 516',
      parts: [
        {
          label: 'a)',
          // 6 is in the Thousands column → 6 000 → normalized: "6000"
          correctAnswer: '6000',
          explanation:
            'In 6 431, the digit 6 is in the Thousands column.\nValue = 6 × 1 000 = 6 000',
        },
        {
          label: 'b)',
          // 6 is in the Hundreds column → 600 → normalized: "600"
          correctAnswer: '600',
          explanation:
            'In 2 640, the digit 6 is in the Hundreds column.\nValue = 6 × 100 = 600',
        },
        {
          label: 'c)',
          // 6 is in the Units column → 6 → normalized: "6"
          correctAnswer: '6',
          explanation:
            'In 3 516, the digit 6 is in the Units column.\nValue = 6 × 1 = 6',
        },
      ],
      answer: 'a) 6 000\nb) 600\nc) 6',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Write the number that has 4 thousands, 0 hundreds, 8 tens and 3 units.\n' +
        'Then write it in expanded notation.',
      parts: [
        {
          label: 'Number:',
          // 4 083 → normalized: "4083"
          correctAnswer: '4083',
          explanation:
            'Place each digit in its column:\n' +
            '• 4 thousands → Thousands column\n' +
            '• 0 hundreds → Hundreds column\n' +
            '• 8 tens → Tens column\n' +
            '• 3 units → Units column\n\n' +
            'The number is 4 083.',
        },
        {
          label: 'Expanded notation:',
          // 4 000 + 0 + 80 + 3 → normalized: "4000+0+80+3"
          correctAnswer: '4000+0+80+3',
          explanation:
            '4 083 = 4 000 + 0 + 80 + 3\n\n' +
            '• 4 is in the Thousands column → 4 000\n' +
            '• 0 is in the Hundreds column → 0\n' +
            '• 8 is in the Tens column → 80\n' +
            '• 3 is in the Units column → 3',
        },
      ],
      answer: 'Number: 4 083\nExpanded: 4 000 + 0 + 80 + 3',
    },

    // ── Section 3: Counting Forwards and Backwards ───────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Count forwards in 10s starting from 3 450. Write the next 4 numbers, separated by commas.',
      // "3 460, 3 470, 3 480, 3 490" → strip spaces/commas → "3460347034803490"
      correctAnswer: '3460347034803490',
      explanation:
        'Counting forwards in 10s means adding 10 each time:\n' +
        '3 450 + 10 = 3 460\n' +
        '3 460 + 10 = 3 470\n' +
        '3 470 + 10 = 3 480\n' +
        '3 480 + 10 = 3 490\n\n' +
        'Answer: 3 460, 3 470, 3 480, 3 490',
      answer: '3 460, 3 470, 3 480, 3 490',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Count backwards in 100s starting from 7 800. Write the next 5 numbers, separated by commas.',
      // "7 700, 7 600, 7 500, 7 400, 7 300" → strip spaces/commas → "77007600750074007300"
      correctAnswer: '77007600750074007300',
      explanation:
        'Counting backwards in 100s means subtracting 100 each time:\n' +
        '7 800 − 100 = 7 700\n' +
        '7 700 − 100 = 7 600\n' +
        '7 600 − 100 = 7 500\n' +
        '7 500 − 100 = 7 400\n' +
        '7 400 − 100 = 7 300\n\n' +
        'Answer: 7 700, 7 600, 7 500, 7 400, 7 300',
      answer: '7 700, 7 600, 7 500, 7 400, 7 300',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A number pattern goes: 2 000,  3 000,  4 000\n\n' +
        'a) What is the rule? (Write: add ___ each time)\n' +
        'b) Write the next 3 numbers, separated by commas.\n' +
        'c) What would the 10th number in the pattern be?',
      parts: [
        {
          label: 'a)',
          // "Add 1 000 each time" → lowercase → strip spaces → "add1000eachtime"
          correctAnswer: 'add1000eachtime',
          explanation:
            'Each number is 1 000 more than the one before it.\n' +
            '2 000 + 1 000 = 3 000 ✓\n' +
            '3 000 + 1 000 = 4 000 ✓\n\n' +
            'Rule: add 1 000 each time.',
        },
        {
          label: 'b)',
          // "5 000, 6 000, 7 000" → strip spaces/commas → "500060007000"
          correctAnswer: '500060007000',
          explanation:
            'Continue adding 1 000 each time:\n' +
            '4 000 + 1 000 = 5 000\n' +
            '5 000 + 1 000 = 6 000\n' +
            '6 000 + 1 000 = 7 000\n\n' +
            'Next 3 numbers: 5 000, 6 000, 7 000',
        },
        {
          label: 'c)',
          // "11 000" → strip spaces → "11000"
          correctAnswer: '11000',
          explanation:
            'The pattern starts at 2 000 and we add 1 000 each time.\n' +
            '1st number: 2 000\n' +
            '2nd number: 3 000\n' +
            '3rd number: 4 000\n' +
            '…\n' +
            '10th number = 2 000 + (9 × 1 000) = 2 000 + 9 000 = 11 000',
        },
      ],
      answer: 'a) Add 1 000 each time\nb) 5 000, 6 000, 7 000\nc) 11 000',
    },

    // ── Section 4: Comparing and Ordering Numbers ─────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Write less than, greater than, or equal to between each pair of numbers:\n\n' +
        'a) 3 456 and 3 654\n' +
        'b) 7 001 and 7 001\n' +
        'c) 4 299 and 4 300',
      parts: [
        {
          label: 'a)',
          // "less than" → strip spaces → "lessthan"
          correctAnswer: 'lessthan',
          explanation:
            'Compare the hundreds digits: 3 4__ vs 3 6__.\n' +
            '4 < 6, so 3 456 is less than 3 654.\n\n' +
            '3 456 < 3 654',
        },
        {
          label: 'b)',
          // "equal to" → strip spaces → "equalto"
          correctAnswer: 'equalto',
          explanation:
            'The two numbers are identical — every digit is the same.\n\n' +
            '7 001 = 7 001',
        },
        {
          label: 'c)',
          // "less than" → strip spaces → "lessthan"
          correctAnswer: 'lessthan',
          explanation:
            'Same thousands (4) and same hundreds (2).\n' +
            'Compare the tens digits: 4 29_ vs 4 30_.\n' +
            '9 tens is still less than 30_ because the hundreds digit of 4 300 is one more.\n' +
            'More simply: 4 299 is one less than 4 300.\n\n' +
            '4 299 < 4 300',
        },
      ],
      answer: 'a) less than\nb) equal to\nc) less than',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Order these numbers from smallest to biggest. Write them separated by commas:\n\n' +
        '5 032,  4 999,  5 320,  4 909',
      // "4 909, 4 999, 5 032, 5 320" → strip spaces/commas → "4909499950325320"
      correctAnswer: '4909499950325320',
      explanation:
        'Step 1 — Compare the thousands digits: 5, 4, 5, 4.\n' +
        'Numbers with 4 thousands (4 999 and 4 909) are smaller than numbers with 5 thousands (5 032 and 5 320).\n\n' +
        'Step 2 — Compare 4 909 and 4 999 (same thousands digit):\n' +
        'Hundreds digits: 9 vs 9 — equal. Compare tens: 0 vs 9. Since 0 < 9, we have 4 909 < 4 999.\n\n' +
        'Step 3 — Compare 5 032 and 5 320 (same thousands digit):\n' +
        'Hundreds digits: 0 vs 3. Since 0 < 3, we have 5 032 < 5 320.\n\n' +
        'Order from smallest to biggest: 4 909,  4 999,  5 032,  5 320',
      answer: '4 909, 4 999, 5 032, 5 320',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo says 3 987 is bigger than 4 001 because the digit 9 is bigger than 0.\n\n' +
        'Is Thabo correct? Explain why or why not.',
      answer:
        'No, Thabo is not correct. 4 001 is the bigger number.\n\n' +
        'Why: you must always compare the highest place value first — the thousands column.\n' +
        '• 3 987 has 3 thousands.\n' +
        '• 4 001 has 4 thousands.\n\n' +
        'Because 4 > 3 in the thousands column, 4 001 is bigger than 3 987, no matter what the other digits are.\n\n' +
        'Thabo\'s mistake was comparing the hundreds digit (9 vs 0) instead of the thousands digit. Always start at the highest place value.',
    },

    // ── Section 5: Rounding Off ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Round 3 456 to the nearest 10.',
      // "3 460" → strip spaces → "3460"
      correctAnswer: '3460',
      explanation:
        'Look at the units digit: 6. Because 6 ≥ 5, we round up.\n' +
        'Add 1 to the tens digit: 5 + 1 = 6. Replace the units digit with 0.\n\n' +
        '3 456 → 3 460',
      answer: '3 460',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Round each of the following numbers:\n\n' +
        'a) 7 849 to the nearest 100\n' +
        'b) 2 350 to the nearest 100\n' +
        'c) 6 784 to the nearest 10',
      parts: [
        {
          label: 'a)',
          // "7 800" → strip spaces → "7800"
          correctAnswer: '7800',
          explanation:
            'Look at the tens digit: 4. Because 4 < 5, we round down.\n' +
            'The hundreds digit stays as 8. Replace the tens and units with 0.\n\n' +
            '7 849 → 7 800',
        },
        {
          label: 'b)',
          // "2 400" → strip spaces → "2400"
          correctAnswer: '2400',
          explanation:
            'Look at the tens digit: 5. Because 5 ≥ 5, we round up.\n' +
            'Add 1 to the hundreds digit: 3 + 1 = 4. Replace the tens and units with 0.\n\n' +
            '2 350 → 2 400',
        },
        {
          label: 'c)',
          // "6 780" → strip spaces → "6780"
          correctAnswer: '6780',
          explanation:
            'Look at the units digit: 4. Because 4 < 5, we round down.\n' +
            'The tens digit stays as 8. Replace the units digit with 0.\n\n' +
            '6 784 → 6 780',
        },
      ],
      answer: 'a) 7 800\nb) 2 400\nc) 6 780',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A farmer has 4 763 sheep. A news report says he has approximately 4 800 sheep.\n\n' +
        'a) Round 4 763 to the nearest 100. Does this confirm the news report?\n' +
        'b) Round 4 763 to the nearest 10.\n' +
        'c) Which rounded answer is more accurate — write 4 800 or 4 760.',
      parts: [
        {
          label: 'a)',
          // "4 800" → strip spaces → "4800"
          correctAnswer: '4800',
          explanation:
            'Tens digit is 6 (≥ 5), so we round up.\n' +
            'Hundreds digit 7 + 1 = 8. Replace tens and units with 0.\n\n' +
            '4 763 → 4 800 ✓ — yes, the news report is correct.',
        },
        {
          label: 'b)',
          // "4 760" → strip spaces → "4760"
          correctAnswer: '4760',
          explanation:
            'Units digit is 3 (< 5), so we round down.\n' +
            'The tens digit stays as 6. Replace the units digit with 0.\n\n' +
            '4 763 → 4 760',
        },
        {
          label: 'c)',
          // "4 760" → strip spaces → "4760"
          correctAnswer: '4760',
          explanation:
            '4 760 is more accurate because it is closer to the actual number 4 763.\n' +
            '• 4 763 − 4 760 = 3 (difference of only 3)\n' +
            '• 4 800 − 4 763 = 37 (difference of 37)\n\n' +
            'Rounding to the nearest 10 always gives a more accurate result than rounding to the nearest 100.',
        },
      ],
      answer: 'a) 4 800 (yes, correct)\nb) 4 760\nc) 4 760',
    },

    // ── Section 6: Representing Numbers on a Number Line ─────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'A number line goes from 0 to 1 000 in intervals of 100.\n\n' +
        'Between which two numbers does 650 sit? Write the two numbers separated by a comma.',
      // "600, 700" → strip spaces/commas → "600700"
      correctAnswer: '600700',
      explanation:
        '650 is between 600 and 700.\n\n' +
        'The interval marks are: 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1 000.\n' +
        '650 falls between the 600 mark and the 700 mark.\n' +
        'It is exactly halfway between them (600 + 700 = 1 300 ÷ 2 = 650).',
      answer: '600, 700',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'A number line goes from 5 000 to 6 000 in intervals of 100.\n\n' +
        'Where would you place 5 500? Explain how you know.',
      answer:
        '5 500 sits exactly halfway between 5 000 and 6 000.\n\n' +
        'How to find the halfway point:\n' +
        'Add the two end values and divide by 2:\n' +
        '5 000 + 6 000 = 11 000\n' +
        '11 000 ÷ 2 = 5 500\n\n' +
        'So 5 500 is placed right in the middle of the number line.',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'A number line goes from 3 000 to 4 000 in intervals of 100.\n\n' +
        'a) What number is halfway between 3 400 and 3 500?\n' +
        'b) What number is three quarters of the way between 3 000 and 4 000?',
      parts: [
        {
          label: 'a)',
          // "3 450" → strip spaces → "3450"
          correctAnswer: '3450',
          explanation:
            'To find the halfway point between 3 400 and 3 500:\n' +
            'Add the two marks: 3 400 + 3 500 = 6 900\n' +
            'Divide by 2: 6 900 ÷ 2 = 3 450\n\n' +
            'The halfway point is 3 450.',
        },
        {
          label: 'b)',
          // "3 750" → strip spaces → "3750"
          correctAnswer: '3750',
          explanation:
            'Three quarters of the way between 3 000 and 4 000:\n' +
            'The total distance is 4 000 − 3 000 = 1 000.\n' +
            'Three quarters of 1 000 = ¾ × 1 000 = 750.\n' +
            'Start at 3 000 and add 750: 3 000 + 750 = 3 750.\n\n' +
            'The answer is 3 750.',
        },
      ],
      answer: 'a) 3 450\nb) 3 750',
    },

  ],
}
