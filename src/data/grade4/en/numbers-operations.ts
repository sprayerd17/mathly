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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
    },
  ],
  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — FOUNDATIONS: PLACE VALUE, EXPANDED NOTATION & COUNTING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1: Foundations',
      questions: [
        { difficulty: 'Easy', question: 'Which of these is a whole number: 8 or 3½?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 is a complete counting number with no fraction part, so it is a whole number. 3½ has a fraction part, so it is not.' },
        { difficulty: 'Easy', question: 'Write all the whole numbers between 6 and 11, separated by commas.', answer: '7, 8, 9, 10', checkMode: 'auto', correctAnswer: '78910', correctAnswers: ['78910'], explanation: '"Between" does not include 6 or 11. Counting from just after 6 up to just before 11 gives 7, 8, 9, 10.' },
        { difficulty: 'Easy', question: 'Write the number 4 327 in expanded notation.', answer: '4 000 + 300 + 20 + 7', checkMode: 'auto', correctAnswer: '4000+300+20+7', correctAnswers: ['4000+300+20+7'], explanation: '4 is in the Thousands column (4 000), 3 is in the Hundreds column (300), 2 is in the Tens column (20), 7 is in the Units column (7).' },
        { difficulty: 'Easy', question: 'Write the number 7 054 in expanded notation.', answer: '7 000 + 0 + 50 + 4', checkMode: 'auto', correctAnswer: '7000+0+50+4', correctAnswers: ['7000+0+50+4'], explanation: '7 000 (Thousands) + 0 (Hundreds) + 50 (Tens) + 4 (Units) = 7 054.' },
        { difficulty: 'Easy', question: 'Write the number 3 072 in expanded notation.', answer: '3 000 + 0 + 70 + 2', checkMode: 'auto', correctAnswer: '3000+0+70+2', correctAnswers: ['3000+0+70+2'], explanation: '3 000 (Thousands) + 0 (Hundreds) + 70 (Tens) + 2 (Units) = 3 072.' },
        { difficulty: 'Easy', question: 'Write the number 6 431 in expanded notation.', answer: '6 000 + 400 + 30 + 1', checkMode: 'auto', correctAnswer: '6000+400+30+1', correctAnswers: ['6000+400+30+1'], explanation: '6 000 (Thousands) + 400 (Hundreds) + 30 (Tens) + 1 (Units) = 6 431.' },
        { difficulty: 'Medium', question: 'What is the value of the digit 6 in 6 431?', answer: '6 000', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'The digit 6 is in the Thousands column, so its value is 6 × 1 000 = 6 000.' },
        { difficulty: 'Medium', question: 'What is the value of the digit 6 in 2 640?', answer: '600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600'], explanation: 'The digit 6 is in the Hundreds column, so its value is 6 × 100 = 600.' },
        { difficulty: 'Medium', question: 'What is the value of the digit 6 in 3 516?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'The digit 6 is in the Units column, so its value is 6 × 1 = 6.' },
        { difficulty: 'Medium', question: 'What is the value of the digit 5 in 5 872?', answer: '5 000', checkMode: 'auto', correctAnswer: '5000', correctAnswers: ['5000', '5 000'], explanation: 'The digit 5 is in the Thousands column, so its value is 5 × 1 000 = 5 000.' },
        { difficulty: 'Medium', question: 'What is the value of the digit 9 in 6 194?', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: 'The digit 9 is in the Tens column, so its value is 9 × 10 = 90.' },
        { difficulty: 'Medium', question: 'Write the number that has 4 thousands, 0 hundreds, 8 tens and 3 units.', answer: '4 083', checkMode: 'auto', correctAnswer: '4083', correctAnswers: ['4083', '4 083'], explanation: 'Place each digit in its column: 4 thousands, 0 hundreds, 8 tens, 3 units → 4 083.' },
        { difficulty: 'Medium', question: 'Write the number that has 5 thousands, 2 hundreds, 1 ten and 8 units.', answer: '5 218', checkMode: 'auto', correctAnswer: '5218', correctAnswers: ['5218', '5 218'], explanation: 'Place each digit in its column: 5 thousands, 2 hundreds, 1 ten, 8 units → 5 218.' },
        { difficulty: 'Medium', question: 'Write the number that has 9 thousands, 0 hundreds, 0 tens and 6 units.', answer: '9 006', checkMode: 'auto', correctAnswer: '9006', correctAnswers: ['9006', '9 006'], explanation: 'Place each digit in its column: 9 thousands, 0 hundreds, 0 tens, 6 units → 9 006.' },
        { difficulty: 'Easy', question: 'Count forwards in 1s starting from 4 996. Write the next 4 numbers, separated by commas.', answer: '4 997, 4 998, 4 999, 5 000', checkMode: 'auto', correctAnswer: '4997499849995000', correctAnswers: ['4997499849995000'], explanation: 'Add 1 each time: 4 996 + 1 = 4 997, then 4 998, 4 999, 5 000.' },
        { difficulty: 'Easy', question: 'Count forwards in 10s starting from 3 450. Write the next 4 numbers, separated by commas.', answer: '3 460, 3 470, 3 480, 3 490', checkMode: 'auto', correctAnswer: '3460347034803490', correctAnswers: ['3460347034803490'], explanation: 'Add 10 each time: 3 450 + 10 = 3 460, then 3 470, 3 480, 3 490.' },
        { difficulty: 'Easy', question: 'Count forwards in 10s starting from 2 345. Write the next 4 numbers, separated by commas.', answer: '2 355, 2 365, 2 375, 2 385', checkMode: 'auto', correctAnswer: '2355236523752385', correctAnswers: ['2355236523752385'], explanation: 'Add 10 each time: 2 345 + 10 = 2 355, then 2 365, 2 375, 2 385.' },
        { difficulty: 'Medium', question: 'Count forwards in 100s starting from 5 600. Write the next 5 numbers, separated by commas.', answer: '5 700, 5 800, 5 900, 6 000, 6 100', checkMode: 'auto', correctAnswer: '57005800590060006100', correctAnswers: ['57005800590060006100'], explanation: 'Add 100 each time: 5 600 + 100 = 5 700, then 5 800, 5 900, 6 000, 6 100.' },
        { difficulty: 'Medium', question: 'Count forwards in 1 000s starting from 3 000. Write the next 4 numbers, separated by commas.', answer: '4 000, 5 000, 6 000, 7 000', checkMode: 'auto', correctAnswer: '4000500060007000', correctAnswers: ['4000500060007000'], explanation: 'Add 1 000 each time: 3 000 + 1 000 = 4 000, then 5 000, 6 000, 7 000.' },
        { difficulty: 'Medium', question: 'Count backwards in 10s starting from 8 080. Write the next 4 numbers, separated by commas.', answer: '8 070, 8 060, 8 050, 8 040', checkMode: 'auto', correctAnswer: '8070806080508040', correctAnswers: ['8070806080508040'], explanation: 'Subtract 10 each time: 8 080 − 10 = 8 070, then 8 060, 8 050, 8 040.' },
        { difficulty: 'Medium', question: 'Count backwards in 100s starting from 9 200. Write the next 5 numbers, separated by commas.', answer: '9 100, 9 000, 8 900, 8 800, 8 700', checkMode: 'auto', correctAnswer: '91009000890088008700', correctAnswers: ['91009000890088008700'], explanation: 'Subtract 100 each time: 9 200 − 100 = 9 100, then 9 000, 8 900, 8 800, 8 700.' },
        { difficulty: 'Medium', question: 'Count backwards in 1 000s starting from 7 000. Write the next 5 numbers, separated by commas.', answer: '6 000, 5 000, 4 000, 3 000, 2 000', checkMode: 'auto', correctAnswer: '60005000400030002000', correctAnswers: ['60005000400030002000'], explanation: 'Subtract 1 000 each time: 7 000 − 1 000 = 6 000, then 5 000, 4 000, 3 000, 2 000.' },
        { difficulty: 'Hard', question: 'A number pattern goes: 1 250, 1 350, 1 450 …\n\nWhat is the rule, and what are the next 2 numbers? Write the next 2 numbers separated by a comma.', answer: 'Add 100 each time. Next 2 numbers: 1 550, 1 650', checkMode: 'auto', correctAnswer: '15501650', correctAnswers: ['15501650'], explanation: 'Each number is 100 more than the one before: 1 350 − 1 250 = 100, 1 450 − 1 350 = 100. Continue: 1 450 + 100 = 1 550, 1 550 + 100 = 1 650.' },
        { difficulty: 'Hard', question: 'Write the value of the digit 3 in 4 738, then write the value of the digit 9 in 6 194. Give your two answers separated by a comma (e.g. 30, 90).', answer: '30, 90', checkMode: 'auto', correctAnswer: '3090', correctAnswers: ['3090'], explanation: 'In 4 738, the digit 3 is in the Tens column, so its value is 3 × 10 = 30. In 6 194, the digit 9 is in the Tens column, so its value is 9 × 10 = 90.' },
        { difficulty: 'Hard', question: 'A shop has 1 245 red apples, 873 green apples and 12 yellow apples. Work out the total number of apples.', answer: '2 130', checkMode: 'auto', correctAnswer: '2130', correctAnswers: ['2130', '2 130'], explanation: '1 245 + 873 + 12 = 2 130.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered place value, expanded notation and counting.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the place value and counting worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — COMPARING, ORDERING & ROUNDING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2: Comparing, Ordering and Rounding',
      questions: [
        { difficulty: 'Easy', question: 'Write less than, greater than, or equal to: 3 456 and 3 654.', answer: 'less than', checkMode: 'auto', correctAnswer: 'lessthan', correctAnswers: ['lessthan'], explanation: 'Compare the hundreds digits: 3 4__ vs 3 6__. Since 4 < 6, 3 456 is less than 3 654.' },
        { difficulty: 'Easy', question: 'Write less than, greater than, or equal to: 7 001 and 7 001.', answer: 'equal to', checkMode: 'auto', correctAnswer: 'equalto', correctAnswers: ['equalto'], explanation: 'Every digit is the same, so 7 001 = 7 001.' },
        { difficulty: 'Easy', question: 'Write less than, greater than, or equal to: 4 299 and 4 300.', answer: 'less than', checkMode: 'auto', correctAnswer: 'lessthan', correctAnswers: ['lessthan'], explanation: '4 299 is one less than 4 300, so 4 299 is less than 4 300.' },
        { difficulty: 'Easy', question: 'Write less than, greater than, or equal to: 9 302 and 2 087.', answer: 'greater than', checkMode: 'auto', correctAnswer: 'greaterthan', correctAnswers: ['greaterthan'], explanation: 'Compare the thousands digits: 9 vs 2. Since 9 > 2, 9 302 is greater than 2 087.' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 5 032, 4 999, 5 320, 4 909', answer: '4 909, 4 999, 5 032, 5 320', checkMode: 'auto', correctAnswer: '4909499950325320', correctAnswers: ['4909499950325320'], explanation: 'Compare thousands first: 4 909 and 4 999 (4 thousands) are smaller than 5 032 and 5 320 (5 thousands). Then compare within each pair by hundreds/tens: 4 909 < 4 999 and 5 032 < 5 320. Order: 4 909, 4 999, 5 032, 5 320.' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 3 210, 3 201, 3 021, 3 102', answer: '3 021, 3 102, 3 201, 3 210', checkMode: 'auto', correctAnswer: '3021310232013210', correctAnswers: ['3021310232013210'], explanation: 'All four numbers have 3 thousands, so compare hundreds digits next: 3 021 has 0 hundreds and 3 102 has 1 hundred — both are smaller than 3 201 and 3 210, which have 2 hundreds. Since 0 < 1, 3 021 < 3 102. Comparing 3 201 and 3 210 by tens digits: 0 < 1, so 3 201 < 3 210. Final order: 3 021, 3 102, 3 201, 3 210.' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 8 760, 8 670, 8 607, 8 076', answer: '8 076, 8 607, 8 670, 8 760', checkMode: 'auto', correctAnswer: '8076860786708760', correctAnswers: ['8076860786708760'], explanation: 'Compare hundreds digits: 8 076 has 0 hundreds (smallest). Then 8 607 has 6 hundreds, 8 670 has 6 hundreds, 8 760 has 7 hundreds. Compare 8 607 and 8 670 by tens: 0 < 7, so 8 607 < 8 670. Order: 8 076, 8 607, 8 670, 8 760.' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 6 234, 987, 6 432, 1 023', answer: '987, 1 023, 6 234, 6 432', checkMode: 'auto', correctAnswer: '987102362346432', correctAnswers: ['987102362346432'], explanation: '987 has 3 digits, so it is smallest. 1 023 has 4 digits with 1 thousand. 6 234 and 6 432 both have 6 thousands — compare hundreds: 2 < 4, so 6 234 < 6 432. Order: 987, 1 023, 6 234, 6 432.' },
        { difficulty: 'Hard', question: 'Thabo says 3 987 is bigger than 4 001 because the digit 9 is bigger than 0. Is Thabo correct? Write yes or no.', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'You must compare the highest place value first. 3 987 has 3 thousands and 4 001 has 4 thousands. Since 4 > 3, 4 001 is bigger, no matter what the other digits are.' },
        { difficulty: 'Easy', question: 'Round 3 456 to the nearest 10.', answer: '3 460', checkMode: 'auto', correctAnswer: '3460', correctAnswers: ['3460', '3 460'], explanation: 'The units digit is 6 (≥ 5), so round up: 3 456 → 3 460.' },
        { difficulty: 'Easy', question: 'Round 5 234 to the nearest 100.', answer: '5 200', checkMode: 'auto', correctAnswer: '5200', correctAnswers: ['5200', '5 200'], explanation: 'The tens digit is 3 (< 5), so round down: 5 234 → 5 200.' },
        { difficulty: 'Easy', question: 'Round 7 849 to the nearest 100.', answer: '7 800', checkMode: 'auto', correctAnswer: '7800', correctAnswers: ['7800', '7 800'], explanation: 'The tens digit is 4 (< 5), so round down: 7 849 → 7 800.' },
        { difficulty: 'Medium', question: 'Round 2 350 to the nearest 100.', answer: '2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', '2 400'], explanation: 'The tens digit is 5 (≥ 5), so round up: 2 350 → 2 400.' },
        { difficulty: 'Medium', question: 'Round 6 784 to the nearest 10.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'The units digit is 4 (< 5), so round down: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'Round 4 763 to the nearest 100.', answer: '4 800', checkMode: 'auto', correctAnswer: '4800', correctAnswers: ['4800', '4 800'], explanation: 'The tens digit is 6 (≥ 5), so round up: 4 763 → 4 800.' },
        { difficulty: 'Medium', question: 'Round 4 763 to the nearest 10.', answer: '4 760', checkMode: 'auto', correctAnswer: '4760', correctAnswers: ['4760', '4 760'], explanation: 'The units digit is 3 (< 5), so round down: 4 763 → 4 760.' },
        { difficulty: 'Medium', question: 'Round 5 999 to the nearest 10.', answer: '6 000', checkMode: 'auto', correctAnswer: '6000', correctAnswers: ['6000', '6 000'], explanation: 'The units digit is 9 (≥ 5), so round up: 5 999 → 6 000 (the tens, hundreds and thousands digits all change because of carrying).' },
        { difficulty: 'Medium', question: 'Round 1 499 to the nearest 100.', answer: '1 500', checkMode: 'auto', correctAnswer: '1500', correctAnswers: ['1500', '1 500'], explanation: 'The tens digit is 9 (≥ 5), so round up: 1 499 → 1 500.' },
        { difficulty: 'Medium', question: 'Round 8 501 to the nearest 10.', answer: '8 500', checkMode: 'auto', correctAnswer: '8500', correctAnswers: ['8500', '8 500'], explanation: 'The units digit is 1 (< 5), so round down: 8 501 → 8 500.' },
        { difficulty: 'Medium', question: 'Round 2 222 to the nearest 1 000.', answer: '2 000', checkMode: 'auto', correctAnswer: '2000', correctAnswers: ['2000', '2 000'], explanation: 'The hundreds digit is 2 (< 5), so round down: 2 222 → 2 000.' },
        { difficulty: 'Medium', question: 'Round 6 666 to the nearest 1 000.', answer: '7 000', checkMode: 'auto', correctAnswer: '7000', correctAnswers: ['7000', '7 000'], explanation: 'The hundreds digit is 6 (≥ 5), so round up: 6 666 → 7 000.' },
        { difficulty: 'Hard', question: 'Round 3 299 to the nearest 10 AND to the nearest 100. Give your two answers separated by a comma (10s answer first).', answer: '3 300, 3 300', checkMode: 'auto', correctAnswer: '33003300', correctAnswers: ['33003300'], explanation: 'Nearest 10: units digit 9 (≥ 5), round up: 3 299 → 3 300. Nearest 100: tens digit 9 (≥ 5), round up: 3 299 → 3 300. Both answers are 3 300.' },
        { difficulty: 'Hard', question: 'A farmer has 4 763 sheep. A news report says he has approximately 4 800 sheep. Round 4 763 to the nearest 100 to check if the report is correct. Write your rounded answer.', answer: '4 800', checkMode: 'auto', correctAnswer: '4800', correctAnswers: ['4800', '4 800'], explanation: 'Tens digit is 6 (≥ 5), so round up: 4 763 → 4 800. This confirms the news report.' },
        { difficulty: 'Hard', question: 'Which rounds to a bigger number when rounded to the nearest 100: 2 650 or 3 299? Round each first, then answer with the original number that is bigger after rounding.', answer: '3 299', checkMode: 'auto', correctAnswer: '3299', correctAnswers: ['3299', '3 299'], explanation: '2 650 rounds to 2 700. 3 299 rounds to 3 300. Since 3 300 > 2 700, the answer is 3 299.' },
        { difficulty: 'Hard', question: 'Explain why rounding to the nearest 10 usually gives a more accurate estimate than rounding to the nearest 100.', answer: 'Rounding to the nearest 10 only changes the number by at most 5, while rounding to the nearest 100 can change the number by up to 50. Because the nearest-10 estimate stays closer to the actual number, it is usually more accurate.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Excellent! You can confidently compare, order and round whole numbers.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the comparing and rounding worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — REAL-WORLD WORD PROBLEMS (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3: Real-World Word Problems',
      questions: [
        { difficulty: 'Easy', question: 'A school has 4 327 learners. Write this number in a place value table: what is the value of the digit 4?', answer: '4 000', checkMode: 'auto', correctAnswer: '4000', correctAnswers: ['4000', '4 000'], explanation: 'The digit 4 is in the Thousands column of 4 327, so its value is 4 000.' },
        { difficulty: 'Easy', question: 'A stadium can seat 8 734 people. Round this number to the nearest 1 000 to estimate the seating capacity.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: 'The hundreds digit is 7 (≥ 5), so round up: 8 734 → 9 000.' },
        { difficulty: 'Easy', question: 'Lerato has R2 087 saved and Sipho has R9 302 saved. Who has more money saved?', answer: 'Sipho', checkMode: 'auto', correctAnswer: 'Sipho', correctAnswers: ['Sipho', 'sipho'], explanation: 'Compare thousands digits: 9 302 has 9 thousands, 2 087 has 2 thousands. Since 9 > 2, Sipho has more.' },
        { difficulty: 'Easy', question: 'A shop sold 6 235 loaves of bread. Write 6 235 in expanded notation.', answer: '6 000 + 200 + 30 + 5', checkMode: 'auto', correctAnswer: '6000+200+30+5', correctAnswers: ['6000+200+30+5'], explanation: '6 000 (Thousands) + 200 (Hundreds) + 30 (Tens) + 5 (Units) = 6 235.' },
        { difficulty: 'Medium', question: 'A cinema has 4 200 seats and adds another 100 seats every year for the next 3 years. Write the number of seats after each of the next 3 years, separated by commas.', answer: '4 300, 4 400, 4 500', checkMode: 'auto', correctAnswer: '430044004500', correctAnswers: ['430044004500'], explanation: 'Count forwards in 100s: 4 200 + 100 = 4 300, then 4 400, then 4 500.' },
        { difficulty: 'Medium', question: 'A charity wants to raise R5 000. They currently have R5 000 already pledged in stages of R1 000. Write the pledge total after each of the next 4 stages, starting from R5 000, separated by commas.', answer: '6 000, 7 000, 8 000, 9 000', checkMode: 'auto', correctAnswer: '6000700080009000', correctAnswers: ['6000700080009000'], explanation: 'Count forwards in 1 000s: 5 000 + 1 000 = 6 000, then 7 000, 8 000, 9 000.' },
        { difficulty: 'Medium', question: 'Two towns have populations of 4 560 and 4 650. Which town has the smaller population?', answer: '4 560', checkMode: 'auto', correctAnswer: '4560', correctAnswers: ['4560', '4 560'], explanation: 'Compare hundreds digits: 4 560 has 5 hundreds, 4 650 has 6 hundreds. Since 5 < 6, 4 560 is smaller.' },
        { difficulty: 'Medium', question: 'A donation drive collected 6 784 tins of food. Round this number to the nearest 10 to write in a simple report.', answer: '6 780', checkMode: 'auto', correctAnswer: '6780', correctAnswers: ['6780', '6 780'], explanation: 'The units digit is 4 (< 5), so round down: 6 784 → 6 780.' },
        { difficulty: 'Medium', question: 'A car dealership sold 9 450 cars this year. Round this number to the nearest 1 000 for the annual report.', answer: '9 000', checkMode: 'auto', correctAnswer: '9000', correctAnswers: ['9000', '9 000'], explanation: 'The hundreds digit is 4 (< 5), so round down: 9 450 → 9 000.' },
        { difficulty: 'Medium', question: 'Four towns have these populations: 5 234, 4 980, 5 300, 4 870. Order them from smallest to biggest, separated by commas.', answer: '4 870, 4 980, 5 234, 5 300', checkMode: 'auto', correctAnswer: '4870498052345300', correctAnswers: ['4870498052345300'], explanation: 'Towns with 4 thousands (4 870, 4 980) are smaller than towns with 5 thousands (5 234, 5 300). Compare within pairs: 4 870 < 4 980 and 5 234 < 5 300. Order: 4 870, 4 980, 5 234, 5 300.' },
        { difficulty: 'Medium', question: 'Four schools have these numbers of learners: 7 650, 6 980, 7 200, 6 890. Order them from smallest to biggest, separated by commas.', answer: '6 890, 6 980, 7 200, 7 650', checkMode: 'auto', correctAnswer: '6890698072007650', correctAnswers: ['6890698072007650'], explanation: 'Schools with 6 thousands (6 980, 6 890) are smaller than schools with 7 thousands (7 200, 7 650). Compare within pairs: 6 890 < 6 980 and 7 200 < 7 650. Order: 6 890, 6 980, 7 200, 7 650.' },
        { difficulty: 'Easy', question: 'A runner completed a race of 2 350 metres. Round this distance to the nearest 100 metres.', answer: '2 400', checkMode: 'auto', correctAnswer: '2400', correctAnswers: ['2400', '2 400'], explanation: 'The tens digit is 5 (≥ 5), so round up: 2 350 → 2 400.' },
        { difficulty: 'Medium', question: 'A marble collector has marbles numbered starting at 3 125, then counts 5 more boxes in steps of 10 marbles each. Write the marble count after the first 5 boxes, separated by commas.', answer: '3 135, 3 145, 3 155, 3 165, 3 175', checkMode: 'auto', correctAnswer: '31353145315531653175', correctAnswers: ['31353145315531653175'], explanation: 'Count forwards in 10s: 3 125 + 10 = 3 135, then 3 145, 3 155, 3 165, 3 175.' },
        { difficulty: 'Medium', question: 'A warehouse has 9 081 boxes. Write 9 081 in expanded notation.', answer: '9 000 + 0 + 80 + 1', checkMode: 'auto', correctAnswer: '9000+0+80+1', correctAnswers: ['9000+0+80+1'], explanation: '9 000 (Thousands) + 0 (Hundreds) + 80 (Tens) + 1 (Units) = 9 081.' },
        { difficulty: 'Medium', question: 'A library has 1 406 books on one shelf. Write 1 406 in expanded notation.', answer: '1 000 + 400 + 0 + 6', checkMode: 'auto', correctAnswer: '1000+400+0+6', correctAnswers: ['1000+400+0+6'], explanation: '1 000 (Thousands) + 400 (Hundreds) + 0 (Tens) + 6 (Units) = 1 406.' },
        { difficulty: 'Medium', question: 'A road trip covers distances marked on a number line from 0 km to 1 000 km in intervals of 100 km. A rest stop is at 650 km. Between which two marks does it fall? Write the two numbers separated by a comma.', answer: '600, 700', checkMode: 'auto', correctAnswer: '600700', correctAnswers: ['600700'], explanation: '650 falls between the 600 km mark and the 700 km mark on the number line.' },
        { difficulty: 'Hard', question: 'A stadium counts ticket sales on a number line from 5 000 to 6 000 in intervals of 100. If a ticket count of 5 500 is reported, where does it sit on the number line? Write your answer as: halfway OR not halfway.', answer: 'halfway', checkMode: 'auto', correctAnswer: 'halfway', correctAnswers: ['halfway'], explanation: '5 000 + 6 000 = 11 000, and 11 000 ÷ 2 = 5 500, so 5 500 sits exactly halfway between 5 000 and 6 000.' },
        { difficulty: 'Hard', question: 'A company had 4 200 customers and gains 1 000 new customers every year for 3 years. Write the customer totals after each of the 3 years, separated by commas.', answer: '5 200, 6 200, 7 200', checkMode: 'auto', correctAnswer: '520062007200', correctAnswers: ['520062007200'], explanation: 'Count forwards in 1 000s from 4 200: 4 200 + 1 000 = 5 200, then 6 200, then 7 200.' },
        { difficulty: 'Hard', question: 'A learner has the digits 3, 0, 7 and 2. Using each digit exactly once, what is the largest 4-digit number that can be made?', answer: '7 320', checkMode: 'auto', correctAnswer: '7320', correctAnswers: ['7320', '7 320'], explanation: 'To make the largest number, arrange the digits from biggest to smallest: 7, 3, 2, 0 → 7 320.' },
        { difficulty: 'Hard', question: 'A learner has the digits 3, 0, 7 and 2. Using each digit exactly once, what is the smallest 4-digit number that can be made (no leading zero)?', answer: '2 037', checkMode: 'auto', correctAnswer: '2037', correctAnswers: ['2037', '2 037'], explanation: 'To make the smallest number, arrange the digits from smallest to biggest, but the first digit cannot be 0. Digits in order are 0, 2, 3, 7 — swap the 0 with the next smallest non-zero digit (2) to get 2, 0, 3, 7 → 2 037.' },
        { difficulty: 'Hard', question: 'A learner has the digits 5, 9, 1 and 4. Using each digit exactly once, what is the largest 4-digit number that can be made?', answer: '9 541', checkMode: 'auto', correctAnswer: '9541', correctAnswers: ['9541', '9 541'], explanation: 'Arrange the digits from biggest to smallest: 9, 5, 4, 1 → 9 541.' },
        { difficulty: 'Hard', question: 'A shop has 8 062 items in stock. Write this number in expanded notation.', answer: '8 000 + 0 + 60 + 2', checkMode: 'auto', correctAnswer: '8000+0+60+2', correctAnswers: ['8000+0+60+2'], explanation: '8 000 (Thousands) + 0 (Hundreds) + 60 (Tens) + 2 (Units) = 8 062.' },
        { difficulty: 'Hard', question: 'A school records attendance on a number line marked every 1 000 from 0 to 10 000. A special event drew 8 500 attendees. This falls exactly halfway between which two marks? Write the two numbers separated by a comma.', answer: '8 000, 9 000', checkMode: 'auto', correctAnswer: '80009000', correctAnswers: ['80009000'], explanation: '8 000 + 9 000 = 17 000, and 17 000 ÷ 2 = 8 500, so 8 500 sits exactly halfway between 8 000 and 9 000.' },
        { difficulty: 'Hard', question: 'A farmer rounds his 4 763 sheep to the nearest 10 for a quick estimate, then compares it to the nearest 100 estimate of 4 800. What is the difference between the two rounded estimates?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Nearest 10: 4 763 → 4 760. Nearest 100: 4 763 → 4 800. Difference: 4 800 − 4 760 = 40.' },
        { difficulty: 'Hard', question: 'A shop had 1 245 red apples, 873 green apples and 12 yellow apples. Round the total number of apples to the nearest 100.', answer: '2 100', checkMode: 'auto', correctAnswer: '2100', correctAnswers: ['2100', '2 100'], explanation: 'Total = 1 245 + 873 + 12 = 2 130. Rounding 2 130 to the nearest 100: tens digit is 3 (< 5), round down → 2 100.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantastic! You can apply place value, rounding and ordering to real-world problems.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — MULTI-STEP, NUMBER LINES & SELF-CHECK REASONING (25 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 4: Multi-Step and Combined Problems',
      questions: [
        { difficulty: 'Medium', question: 'A number line goes from 3 000 to 4 000 in intervals of 100. What number is halfway between 3 400 and 3 500?', answer: '3 450', checkMode: 'auto', correctAnswer: '3450', correctAnswers: ['3450', '3 450'], explanation: 'Add the two marks: 3 400 + 3 500 = 6 900. Divide by 2: 6 900 ÷ 2 = 3 450.' },
        { difficulty: 'Medium', question: 'A number line goes from 3 000 to 4 000 in intervals of 100. What number is three quarters of the way between 3 000 and 4 000?', answer: '3 750', checkMode: 'auto', correctAnswer: '3750', correctAnswers: ['3750', '3 750'], explanation: 'The total distance is 4 000 − 3 000 = 1 000. Three quarters of 1 000 = 750. Start at 3 000 and add 750: 3 750.' },
        { difficulty: 'Medium', question: 'A number line goes from 4 000 to 5 000 in intervals of 100. What number is one quarter of the way between 4 000 and 5 000?', answer: '4 250', checkMode: 'auto', correctAnswer: '4250', correctAnswers: ['4250', '4 250'], explanation: 'The total distance is 5 000 − 4 000 = 1 000. One quarter of 1 000 = 250. Start at 4 000 and add 250: 4 250.' },
        { difficulty: 'Medium', question: 'A number line goes from 7 000 to 7 500 in intervals of 100. What number is halfway between 7 200 and 7 300?', answer: '7 250', checkMode: 'auto', correctAnswer: '7250', correctAnswers: ['7250', '7 250'], explanation: 'Add the two marks: 7 200 + 7 300 = 14 500. Divide by 2: 14 500 ÷ 2 = 7 250.' },
        { difficulty: 'Hard', question: 'Round 8 461 to the nearest 100, then work out the difference between the rounded number and the original number.', answer: 'Rounded = 8 500; Difference = 39', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '8500 39', '8 500; 39'], explanation: 'The tens digit is 6 (≥ 5), so round up: 8 461 → 8 500. Difference = 8 500 − 8 461 = 39.' },
        { difficulty: 'Hard', question: 'A number has 5 thousands, 8 hundreds, 4 tens and 7 units. Write the number, then round it to the nearest 100.', answer: 'Number = 5 847; Rounded = 5 800', checkMode: 'auto', correctAnswer: '5800', correctAnswers: ['5800', '5 800', '5847 5800', '5 847; 5 800'], explanation: 'The number is 5 847. Rounding to the nearest 100: tens digit is 4 (< 5), round down → 5 800.' },
        { difficulty: 'Hard', question: 'In the number 5 847, find the value of the thousands digit and the value of the units digit, then add them together.', answer: '5 007', checkMode: 'auto', correctAnswer: '5007', correctAnswers: ['5007', '5 007'], explanation: 'Value of thousands digit (5) = 5 000. Value of units digit (7) = 7. Sum: 5 000 + 7 = 5 007.' },
        { difficulty: 'Hard', question: 'In the number 3 728, find the value of the hundreds digit and the value of the tens digit, then subtract the tens value from the hundreds value.', answer: '680', checkMode: 'auto', correctAnswer: '680', correctAnswers: ['680'], explanation: 'Value of hundreds digit (7) = 700. Value of tens digit (2) = 20. Difference: 700 − 20 = 680.' },
        { difficulty: 'Hard', question: 'Order these numbers from biggest to smallest, separated by commas: 5 032, 4 999, 5 320, 4 909', answer: '5 320, 5 032, 4 999, 4 909', checkMode: 'auto', correctAnswer: '5320503249994909', correctAnswers: ['5320503249994909'], explanation: 'From the earlier smallest-to-biggest order (4 909, 4 999, 5 032, 5 320), reverse it to get biggest-to-smallest: 5 320, 5 032, 4 999, 4 909.' },
        { difficulty: 'Hard', question: 'A number pattern starts at 2 000 and adds 1 000 each time: 2 000, 3 000, 4 000 … What would the 10th number in the pattern be?', answer: '11 000', checkMode: 'auto', correctAnswer: '11000', correctAnswers: ['11000', '11 000'], explanation: 'The 10th number = 2 000 + (9 × 1 000) = 2 000 + 9 000 = 11 000.' },
        { difficulty: 'Hard', question: 'A number pattern starts at 1 250 and adds 100 each time. What would the 6th number in the pattern be?', answer: '1 750', checkMode: 'auto', correctAnswer: '1750', correctAnswers: ['1750', '1 750'], explanation: 'The 6th number = 1 250 + (5 × 100) = 1 250 + 500 = 1 750.' },
        { difficulty: 'Hard', question: 'Round 6 235 to the nearest 1 000, then write the rounded number in expanded notation.', answer: '6 000 = 6 000 + 0 + 0 + 0', checkMode: 'auto', correctAnswer: '6000+0+0+0', correctAnswers: ['6000+0+0+0'], explanation: 'Rounding 6 235 to the nearest 1 000: hundreds digit is 2 (< 5), round down → 6 000. Expanded notation: 6 000 + 0 + 0 + 0.' },
        { difficulty: 'Hard', question: 'A farmer has 4 763 sheep and a news report rounds this to the nearest 100 as 4 800. Round 4 763 to the nearest 10 as well. Which of the two rounded numbers (4 800 or the nearest-10 answer) is closer to the actual number of sheep?', answer: 'The nearest 10 answer (4 760) is closer.', checkMode: 'auto', correctAnswer: '4760', correctAnswers: ['4760', '4 760'], explanation: 'Nearest 10: 4 763 → 4 760. Compare distances: 4 763 − 4 760 = 3, while 4 800 − 4 763 = 37. Since 3 < 37, 4 760 is closer.' },
        { difficulty: 'Hard', question: 'Explain, using place value, why 4 001 is bigger than 3 987 even though 3 987 has a 9 in the hundreds column and 4 001 has a 0 there.', answer: 'When comparing numbers, you must always compare the highest place value column first — the thousands column. 4 001 has 4 thousands while 3 987 has only 3 thousands. Since 4 is greater than 3 in the thousands column, 4 001 is bigger than 3 987 no matter what digits appear in the smaller columns. The hundreds, tens and units digits only matter when the higher columns are equal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain the difference between rounding a number down and rounding a number up, using the deciding digit rule.', answer: 'To round a number, you look at the deciding digit — the digit just to the right of the column you are rounding to. If the deciding digit is 0, 1, 2, 3 or 4, you round down and the digit in the target column stays the same. If the deciding digit is 5, 6, 7, 8 or 9, you round up and you add 1 to the digit in the target column. In both cases, every digit to the right of the target column becomes 0.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Explain how you would find the halfway point between any two numbers on a number line, and use 6 000 and 7 000 as your example.', answer: 'To find the halfway point between two numbers, add them together and divide the total by 2. For 6 000 and 7 000: 6 000 + 7 000 = 13 000, and 13 000 ÷ 2 = 6 500. So 6 500 is exactly halfway between 6 000 and 7 000.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A number line goes from 0 to 1 000 in intervals of 100. Between which two numbers does 650 sit? Write the two numbers separated by a comma.', answer: '600, 700', checkMode: 'auto', correctAnswer: '600700', correctAnswers: ['600700'], explanation: 'The interval marks are 0, 100, 200 … 1 000. 650 falls between the 600 mark and the 700 mark.' },
        { difficulty: 'Medium', question: 'Round 9 091 to the nearest 10, then to the nearest 100. Give both answers separated by a comma (nearest 10 first).', answer: '9 090, 9 100', checkMode: 'auto', correctAnswer: '90909100', correctAnswers: ['90909100'], explanation: 'Nearest 10: units digit 1 (< 5), round down → 9 090. Nearest 100: tens digit 9 (≥ 5), round up → 9 100.' },
        { difficulty: 'Hard', question: 'Round 4 050 to the nearest 100, then to the nearest 1 000. Give both answers separated by a comma (nearest 100 first).', answer: '4 100, 4 000', checkMode: 'auto', correctAnswer: '41004000', correctAnswers: ['41004000'], explanation: 'Nearest 100: tens digit 5 (≥ 5), round up → 4 100. Nearest 1 000: hundreds digit 0 (< 5), round down → 4 000.' },
        { difficulty: 'Hard', question: 'A number is formed with 6 thousands, 4 hundreds, 3 tens and 1 unit. Write the number, then order it against 6 234 and 6 432 from smallest to biggest (include all 3 numbers), separated by commas.', answer: '6 234, 6 431, 6 432', checkMode: 'auto', correctAnswer: '623464316432', correctAnswers: ['623464316432'], explanation: 'The new number is 6 431 (6 thousands, 4 hundreds, 3 tens, 1 unit). Compare 6 431, 6 234, 6 432: hundreds digits are 4, 2, 4 — so 6 234 (2 hundreds) is smallest. Comparing 6 431 and 6 432 (same first 3 digits, 643_), compare units: 1 < 2, so 6 431 < 6 432. Final order: 6 234, 6 431, 6 432.' },
        { difficulty: 'Hard', question: 'A number pattern counts backwards in 100s starting from 9 200: 9 200, 9 100, 9 000 … What would the 8th number in the pattern be?', answer: '8 500', checkMode: 'auto', correctAnswer: '8500', correctAnswers: ['8500', '8 500'], explanation: 'The 8th number = 9 200 − (7 × 100) = 9 200 − 700 = 8 500.' },
        { difficulty: 'Hard', question: 'A number pattern counts forwards in 1 000s starting from 2 000: 2 000, 3 000, 4 000 … What would the 7th number in the pattern be?', answer: '8 000', checkMode: 'auto', correctAnswer: '8000', correctAnswers: ['8000', '8 000'], explanation: 'The 7th number = 2 000 + (6 × 1 000) = 2 000 + 6 000 = 8 000.' },
        { difficulty: 'Hard', question: 'A shop has 8 095 tins of food. Round this number to the nearest 100, then explain in one sentence why the tens digit does not change the rounding decision here.', answer: 'Rounded = 8 100', checkMode: 'auto', correctAnswer: '8100', correctAnswers: ['8100', '8 100'], explanation: 'To round to the nearest 100, we look at the tens digit, which is 9 (≥ 5), so we round up: 8 095 → 8 100. The tens digit is exactly what decides the rounding — it is the deciding digit for rounding to the nearest 100.' },
        { difficulty: 'Hard', question: 'Explain why a 3-digit number is always smaller than a 4-digit number, using 987 and 1 023 as your example.', answer: 'A 4-digit number always has a value in the thousands column, while a 3-digit number has no thousands at all (its thousands value is 0). Since 987 has 0 thousands and 1 023 has 1 thousand, 1 023 must be bigger than 987 regardless of the other digits. In general, more digits always means a bigger whole number (assuming no leading zeros).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Round 6 789 to the nearest 1 000, then write your rounded answer in expanded notation.', answer: '7 000 = 7 000 + 0 + 0 + 0', checkMode: 'auto', correctAnswer: '7000+0+0+0', correctAnswers: ['7000+0+0+0'], explanation: 'Rounding 6 789 to the nearest 1 000: hundreds digit is 7 (≥ 5), round up → 7 000. Expanded notation: 7 000 + 0 + 0 + 0.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Outstanding! You have mastered multi-step whole number problems and number lines.' },
        { minScore: 19, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 13, message: 'Good effort! Revisit the multi-step worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
