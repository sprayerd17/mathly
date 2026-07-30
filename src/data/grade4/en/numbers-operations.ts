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
    // SET 1 (20 Qs)
    // Blocks: 0-3 Whole numbers & place value | 4-7 Digit value & construction |
    // 8-10 Counting sequences | 11-13 Comparing/ordering | 14-16 Rounding |
    // 17-19 Number lines & capstone reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Which of these numbers is a whole number?', checkMode: 'auto', options: ['8', '3½', '8.5', '½'], correctIndex: 0, explanation: '8 is a complete counting number with no fraction or decimal part, so it is a whole number. 3½ has a fraction part, 8.5 has a decimal part, and ½ is a fraction on its own — none of these are whole numbers.' },
        { difficulty: 'Easy', question: 'Write all the whole numbers between 6 and 11, separated by commas.', checkMode: 'auto', options: ['6, 7, 8, 9, 10, 11', '7, 8, 9, 10', '7, 8, 9', '6, 7, 8, 9, 10'], correctIndex: 1, explanation: '"Between" does not include 6 or 11 themselves. Counting from just after 6 up to just before 11 gives 7, 8, 9, 10. Including 6 and/or 11, or stopping too early, are common mistakes.' },
        { difficulty: 'Easy', question: 'A number has 4 in the Thousands column, 3 in the Hundreds column, 2 in the Tens column and 7 in the Units column. What is the number?', checkMode: 'auto', options: ['7 234', '4 237', '4 327', '3 427'], correctIndex: 2, explanation: 'Reading the columns left to right (Thousands, Hundreds, Tens, Units) gives 4 327. 7 234 reads the digits backwards, 4 237 swaps the Tens and Units digits, and 3 427 swaps the Thousands and Hundreds digits.' },
        { difficulty: 'Easy', question: 'Write the number 4 327 in expanded notation.', checkMode: 'auto', options: ['4 000 + 300 + 2 + 7', '4 000 + 30 + 20 + 7', '4 000 + 300 + 20 + 70', '4 000 + 300 + 20 + 7'], correctIndex: 3, explanation: '4 is in the Thousands column (4 000), 3 is in the Hundreds column (300), 2 is in the Tens column (20), 7 is in the Units column (7). The wrong options forget to multiply the Tens or Hundreds digit by its column, or add an extra zero to the Units digit.' },
        { difficulty: 'Easy', question: 'What is the value of the digit 6 in 6 431?', checkMode: 'auto', options: ['6 000', '600', '60', '6'], correctIndex: 0, explanation: 'The digit 6 is in the Thousands column, so its value is 6 × 1 000 = 6 000. 600 and 60 would be its value in the Hundreds or Tens column, and 6 ignores place value completely.' },
        { difficulty: 'Easy-Medium', question: 'A charity concert sold 6 194 tickets. Look at the digit 9 in the ticket total — what column is it in, and what is its value?', checkMode: 'auto', options: ['Units column; value is 9', 'Tens column; value is 90', 'Hundreds column; value is 900', 'Tens column; value is 9'], correctIndex: 1, explanation: 'The digit 9 in 6 194 is in the Tens column, so its value is 9 × 10 = 90. The wrong options pick the wrong column, or the right column with the wrong value.' },
        { difficulty: 'Easy-Medium', question: 'Write the number that has 4 thousands, 0 hundreds, 8 tens and 3 units.', checkMode: 'auto', options: ['4 803', '4 038', '4 083', '483'], correctIndex: 2, explanation: 'Place each digit in its column: 4 thousands, 0 hundreds, 8 tens, 3 units → 4 083. 4 803 swaps the Hundreds and Tens digits, 4 038 swaps the Tens and Units digits, and 483 drops the 0 Hundreds digit instead of keeping it as a placeholder.' },
        { difficulty: 'Medium', question: 'Zanele says: "The value of a digit is just the digit itself — it doesn\'t matter where it is in the number." She uses this to claim the digit 6 in 6 431 is worth 6. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['Yes — a digit\'s value never changes no matter where it is.', 'Yes — since 6 431 has four digits, every digit is worth 6.', 'No — the 6 is in the Units column, so it is worth 6.', 'No — the 6 is in the Thousands column, so it is worth 6 000, not 6.'], correctIndex: 3, explanation: 'A digit\'s value depends on its position (place value). The 6 in 6 431 is in the Thousands column, so it is worth 6 000, not just 6 — Zanele is ignoring place value.' },
        { difficulty: 'Medium', question: 'Count forwards in 1s starting from 4 996. Write the next 4 numbers, separated by commas.', checkMode: 'auto', options: ['4 997, 4 998, 4 999, 5 000', '4 997, 4 998, 4 999, 4 000', '4 996, 4 997, 4 998, 4 999', '4 997, 4 998, 5 999, 5 000'], correctIndex: 0, explanation: 'Add 1 each time: 4 996 + 1 = 4 997, then 4 998, 4 999, 5 000. A common mistake is thinking the thousands digit resets to 4 000 instead of rolling over to 5 000, or starting the sequence from 4 996 itself instead of the next number.' },
        { difficulty: 'Medium', question: 'Count backwards in 100s starting from 9 200. Write the next 5 numbers, separated by commas.', checkMode: 'auto', options: ['9 100, 9 000, 8 900, 8 800, 8 600', '9 100, 9 000, 8 900, 8 800, 8 700', '9 100, 9 000, 8 900, 8 700, 8 600', '9 200, 9 100, 9 000, 8 900, 8 800'], correctIndex: 1, explanation: 'Subtract 100 each time: 9 200 − 100 = 9 100, then 9 000, 8 900, 8 800, 8 700. The wrong options either subtract 200 partway through, skip a value, or repeat the starting number 9 200 instead of beginning with the first new term.' },
        { difficulty: 'Medium', question: 'A number pattern goes: 1 250, 1 350, 1 450 …\n\nWhich option correctly states the rule and the next 2 numbers?', checkMode: 'auto', options: ['Add 50; next 2 numbers: 1 500, 1 550', 'Add 110; next 2 numbers: 1 560, 1 670', 'Add 100; next 2 numbers: 1 550, 1 650', 'Add 100; next 2 numbers: 1 450, 1 550'], correctIndex: 2, explanation: 'Each number is 100 more than the one before: 1 350 − 1 250 = 100, 1 450 − 1 350 = 100. Continue: 1 450 + 100 = 1 550, 1 550 + 100 = 1 650. The wrong options use the wrong interval or repeat 1 450 instead of continuing from it.' },
        { difficulty: 'Medium', question: 'Write less than, greater than, or equal to: 3 456 and 3 654.', checkMode: 'auto', options: ['greater than', 'equal to', 'cannot be compared because both numbers start with 3', 'less than'], correctIndex: 3, explanation: 'Compare the hundreds digits since the thousands digits match: 3 4__ vs 3 6__. Since 4 < 6, 3 456 is less than 3 654. Numbers that share a leading digit can still be compared — just move to the next column.' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 5 148, 876, 5 481, 2 019', checkMode: 'auto', options: ['876, 2 019, 5 481, 5 148', '5 148, 5 481, 876, 2 019', '2 019, 876, 5 148, 5 481', '876, 2 019, 5 148, 5 481'], correctIndex: 3, explanation: '876 has 3 digits, so it is smallest. 2 019 has 4 digits with 2 thousands. 5 148 and 5 481 both have 5 thousands — compare hundreds: 1 < 4, so 5 148 < 5 481. Correct order: 876, 2 019, 5 148, 5 481. The wrong options swap 5 148 and 5 481 by miscomparing hundreds, ignore digit-count when placing 876, or compare leading digits without checking how many digits each number has.' },
        { difficulty: 'Medium', question: 'Thabo says 3 987 is bigger than 4 001 because the digit 9 is bigger than 0. Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['Yes — 9 is a bigger digit than 0, so his reasoning is valid.', 'No — you must compare the thousands digit first; 4 001 has 4 thousands vs 3 987\'s 3 thousands, so 4 001 is bigger.', 'Yes — 3 987 has more non-zero digits, so it is bigger.', 'No — 3 987 and 4 001 are actually equal.'], correctIndex: 1, explanation: 'You must compare the highest place value first. 3 987 has 3 thousands and 4 001 has 4 thousands. Since 4 > 3, 4 001 is bigger, no matter what the other digits are — Thabo compared the wrong column.' },
        { difficulty: 'Medium', question: 'A baker needs 3 456 grams of flour for a big order. Round this mass to the nearest 10 grams so it fits neatly on the recipe card.', checkMode: 'auto', options: ['3 450', '3 400', '3 460', '3 470'], correctIndex: 2, explanation: 'The units digit is 6 (≥ 5), so round up: 3 456 → 3 460. 3 450 rounds down incorrectly, 3 400 rounds to the nearest 100 instead of 10, and 3 470 adds one too many tens.' },
        { difficulty: 'Medium', question: 'A charity event raised R5 234. The newsletter wants to report the total rounded to the nearest R100. What amount should it print?', checkMode: 'auto', options: ['R5 300', 'R5 000', 'R5 230', 'R5 200'], correctIndex: 3, explanation: 'The tens digit is 3 (< 5), so round down: 5 234 → 5 200. R5 300 wrongly rounds up, R5 000 rounds to the nearest 1 000, and R5 230 rounds to the nearest 10 instead of 100.' },
        { difficulty: 'Medium', question: 'A student claims that rounding 5 999 to the nearest 10 leaves the number almost unchanged, "since we\'re only rounding the units." Which statement correctly evaluates the claim?', checkMode: 'auto', options: ['The student is wrong — 5 999 rounds up to 6 000, and the tens, hundreds and thousands digits all change because of carrying.', 'The student is right — 5 999 rounds to 5 990, changing only the units digit.', 'The student is wrong — 5 999 rounds down to 5 990 because 9 is an odd digit.', 'The student is right — rounding to the nearest 10 never changes more than one digit.'], correctIndex: 0, explanation: 'The units digit is 9 (≥ 5), so round up: 5 999 → 6 000. Even though only the units column is the "deciding digit," rounding up causes the tens, hundreds and thousands digits to all change because of carrying — the student\'s claim is misleading.' },
        { difficulty: 'Hard', question: 'A number line goes from 0 to 1 000 in intervals of 100. Between which two numbers does 650 sit?', checkMode: 'auto', options: ['500, 600', '600, 700', '650, 700', '600, 650'], correctIndex: 1, explanation: 'The interval marks are 0, 100, 200 … 1 000. 650 falls between the 600 mark and the 700 mark. The other options either pick the wrong pair of marks or use 650 itself as one of the marks, which is not allowed since only multiples of 100 are marked.' },
        { difficulty: 'Hard', question: 'A number line goes from 3 000 to 4 000 in intervals of 100. What number is halfway between 3 400 and 3 500?', checkMode: 'auto', options: ['3 400', '3 500', '3 450', '3 900'], correctIndex: 2, explanation: 'Add the two marks: 3 400 + 3 500 = 6 900. Divide by 2: 6 900 ÷ 2 = 3 450. Picking one of the endpoints ignores that halfway means exactly in the middle, and 3 900 mistakenly adds instead of dividing.' },
        { difficulty: 'Hard', question: 'A concert hall had 3 847 people attend a show. The venue manager wants an easy-to-read estimate rounded to the nearest 100, and a news report rounds the same crowd to the nearest 10 for a "final tally". Which option gives both rounded numbers correctly and identifies which is closer to the real crowd of 3 847?', checkMode: 'auto', options: ['Nearest 100 = 3 900; Nearest 10 = 3 850; the nearest-100 estimate is closer.', 'Nearest 100 = 3 800; Nearest 10 = 3 840; the nearest-10 estimate is closer.', 'Nearest 100 = 3 800; Nearest 10 = 3 850; both estimates are equally close.', 'Nearest 100 = 3 800; Nearest 10 = 3 850; the nearest-10 estimate is closer.'], correctIndex: 3, explanation: 'Nearest 100: tens digit 4 (< 5), round down → 3 800. Nearest 10: units digit 7 (≥ 5), round up → 3 850. Distances from 3 847: 3 847 − 3 800 = 47, while 3 850 − 3 847 = 3. Since 3 < 47, the nearest-10 estimate is closer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered place value, comparing, rounding and number lines.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Which of these numbers is a whole number?', checkMode: 'auto', options: ['4¾', '15', '15.75', '¾'], correctIndex: 1, explanation: '15 is a complete counting number with no fraction or decimal part, so it is a whole number. 4¾ has a fraction part, 15.75 has a decimal part, and ¾ is a fraction on its own — none of these are whole numbers.' },
        { difficulty: 'Easy', question: 'Write all the whole numbers between 20 and 26, separated by commas.', checkMode: 'auto', options: ['20, 21, 22, 23, 24, 25, 26', '21, 22, 23, 24', '21, 22, 23, 24, 25', '20, 21, 22, 23, 24, 25'], correctIndex: 2, explanation: '"Between" does not include 20 or 26 themselves. Counting from just after 20 up to just before 26 gives 21, 22, 23, 24, 25. Including 20 and/or 26, or stopping one number too early, are common mistakes.' },
        { difficulty: 'Easy', question: 'A number has 7 in the Thousands column, 0 in the Hundreds column, 5 in the Tens column and 4 in the Units column. What is the number?', checkMode: 'auto', options: ['5 704', '7 504', '7 045', '7 054'], correctIndex: 3, explanation: 'Reading the columns left to right (Thousands, Hundreds, Tens, Units) gives 7 054. 5 704 reads the digits in the wrong order, 7 504 swaps the Hundreds and Tens digits, and 7 045 swaps the Tens and Units digits.' },
        { difficulty: 'Easy', question: 'Write the number 7 054 in expanded notation.', checkMode: 'auto', options: ['7 000 + 0 + 50 + 4', '7 000 + 0 + 5 + 4', '7 000 + 500 + 50 + 4', '7 000 + 0 + 50 + 40'], correctIndex: 0, explanation: '7 000 (Thousands) + 0 (Hundreds) + 50 (Tens) + 4 (Units) = 7 054. The wrong options forget to multiply the Tens digit by 10, wrongly insert a Hundreds value that is not there, or add an extra zero to the Units digit.' },
        { difficulty: 'Easy', question: 'What is the value of the digit 6 in 2 640?', checkMode: 'auto', options: ['6 000', '600', '60', '6'], correctIndex: 1, explanation: 'The digit 6 is in the Hundreds column of 2 640, so its value is 6 × 100 = 600. 6 000 and 60 would be its value in the Thousands or Tens column, and 6 ignores place value completely.' },
        { difficulty: 'Easy-Medium', question: 'A vending machine has counted 3 516 sales this year. Look at the digit 6 in that total — which column is it in, and what is its value?', checkMode: 'auto', options: ['Tens column; value is 60', 'Hundreds column; value is 600', 'Units column; value is 6', 'Tens column; value is 6'], correctIndex: 2, explanation: 'The digit 6 in 3 516 is in the Units column, so its value is 6 × 1 = 6. The wrong options pick the wrong column, or the right column with the wrong value.' },
        { difficulty: 'Easy-Medium', question: 'Write the number that has 5 thousands, 2 hundreds, 1 ten and 8 units.', checkMode: 'auto', options: ['5 128', '5 281', '5 812', '5 218'], correctIndex: 3, explanation: 'Place each digit in its column: 5 thousands, 2 hundreds, 1 ten, 8 units → 5 218. The wrong options swap the Hundreds/Tens digits or the Tens/Units digits, or misplace the Hundreds digit entirely.' },
        { difficulty: 'Medium', question: 'Kagiso says: "3 062 and 3 620 must be equal because they use the exact same four digits." Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['No — position matters; in 3 062 the 6 is worth 60, but in 3 620 the 6 is worth 600, so 3 620 is bigger.', 'Yes — using the same digits always means the numbers are equal.', 'No — 3 062 and 3 620 cannot be compared because their digits are in a different order.', 'Yes — 3 062 is bigger because its digits are listed in increasing order.'], correctIndex: 0, explanation: 'Using the same digits does not make numbers equal — position matters. In 3 062 the 6 is worth 60, but in 3 620 the 6 is worth 600. Comparing place by place, 3 620 is bigger than 3 062.' },
        { difficulty: 'Medium', question: 'Count forwards in 10s starting from 2 345. Write the next 4 numbers, separated by commas.', checkMode: 'auto', options: ['2 345, 2 355, 2 365, 2 375', '2 355, 2 365, 2 375, 2 385', '2 355, 2 365, 2 385, 2 395', '2 355, 2 465, 2 475, 2 485'], correctIndex: 1, explanation: 'Add 10 each time: 2 345 + 10 = 2 355, then 2 365, 2 375, 2 385. The wrong options repeat the starting number instead of the next term, skip a step partway through, or mistakenly add 100 to one of the terms instead of 10.' },
        { difficulty: 'Medium', question: 'Count forwards in 1 000s starting from 6 000. Write the next 4 numbers, separated by commas.', checkMode: 'auto', options: ['7 000, 8 000, 9 000, 9 999', '6 000, 7 000, 8 000, 9 000', '7 000, 8 000, 9 000, 10 000', '7 000, 8 000, 9 000, 1 000'], correctIndex: 2, explanation: 'Add 1 000 each time: 6 000 + 1 000 = 7 000, then 8 000, 9 000, 10 000 — a new digit appears once we pass 9 999. The wrong options stop one step short, start from 6 000 again, or mistakenly write 1 000 instead of 10 000 for the last term.' },
        { difficulty: 'Medium', question: 'A number pattern goes: 8 400, 8 300, 8 200 …\n\nWhich option correctly states the rule and the next 2 numbers?', checkMode: 'auto', options: ['Subtract 100; next 2: 8 300, 8 200', 'Add 100; next 2: 8 300, 8 400', 'Subtract 200; next 2: 8 000, 7 800', 'Subtract 100; next 2: 8 100, 8 000'], correctIndex: 3, explanation: 'Each number is 100 less than the one before: 8 400 − 8 300 = 100, 8 300 − 8 200 = 100. Continue: 8 200 − 100 = 8 100, 8 100 − 100 = 8 000. The wrong options repeat earlier terms, add instead of subtract, or use the wrong interval.' },
        { difficulty: 'Medium', question: 'Write less than, greater than, or equal to: 7 001 and 7 001.', checkMode: 'auto', options: ['equal to', 'less than', 'greater than', 'cannot be compared because both numbers have the same digits'], correctIndex: 0, explanation: 'Every digit is the same in both numbers, so 7 001 = 7 001. Numbers with identical digits in every column are always equal, not "impossible to compare."' },
        { difficulty: 'Medium', question: 'Order these numbers from smallest to biggest, separated by commas: 5 032, 4 999, 5 320, 4 909', checkMode: 'auto', options: ['4999, 4909, 5032, 5320', '4 909, 4 999, 5 032, 5 320', '4 909, 4 999, 5 320, 5 032', '5 032, 5 320, 4 909, 4 999'], correctIndex: 1, explanation: 'Compare thousands first: 4 909 and 4 999 (4 thousands) are smaller than 5 032 and 5 320 (5 thousands). Within each pair, compare hundreds/tens: 4 909 < 4 999 and 5 032 < 5 320. Correct order: 4 909, 4 999, 5 032, 5 320. The wrong options swap 4 909 and 4 999, swap 5 032 and 5 320, or place the 5-thousands numbers first.' },
        { difficulty: 'Medium', question: 'Naledi says that 6 083 is smaller than 5 999 because 0 is smaller than 9 in the hundreds place. Which statement correctly evaluates her claim?', checkMode: 'auto', options: ['Yes — 0 is smaller than 9, so her reasoning is correct.', 'Yes — 6 083 has more digits after the 6, so it must be smaller.', 'No — you must compare the thousands digit first; 6 083 has 6 thousands and 5 999 has 5 thousands, so 6 083 is bigger.', 'No — 6 083 and 5 999 are actually equal.'], correctIndex: 2, explanation: 'You must always compare the thousands digit first. 6 083 has 6 thousands and 5 999 has 5 thousands. Since 6 > 5, 6 083 is bigger, regardless of the hundreds digits — Naledi compared the wrong column.' },
        { difficulty: 'Medium', question: 'A delivery van has driven 6 784 km this month. Round this distance to the nearest 10 km for the driver\'s logbook.', checkMode: 'auto', options: ['6 790', '6 800', '6 770', '6 780'], correctIndex: 3, explanation: 'The units digit is 4 (< 5), so round down: 6 784 → 6 780. 6 790 wrongly rounds up, 6 800 rounds to the nearest 100 instead of 10, and 6 770 subtracts one too many tens.' },
        { difficulty: 'Medium', question: 'A farm harvested 7 849 kg of maize. The co-op wants this reported rounded to the nearest 100 kg. What figure should appear on the report?', checkMode: 'auto', options: ['7 800 kg', '7 900 kg', '7 000 kg', '7 850 kg'], correctIndex: 0, explanation: 'The tens digit is 4 (< 5), so round down: 7 849 → 7 800. 7 900 kg wrongly rounds up, 7 000 kg rounds to the nearest 1 000, and 7 850 kg rounds to the nearest 10 instead of 100.' },
        { difficulty: 'Medium', question: 'A student rounds 1 499 to the nearest 100 and writes 1 400, arguing "the first digit is 1, so it must round down." Which statement correctly evaluates the student\'s claim?', checkMode: 'auto', options: ['The student is right — since the number starts with 1, it always rounds down.', 'The student is wrong — 1 499 rounds up to 1 500 because the tens digit (9) is the one that decides, not the thousands digit.', 'The student is right — 1 499 rounds to 1 400 because the hundreds digit is 4.', 'The student is wrong — 1 499 rounds down to 1 000 because the thousands digit is 1.'], correctIndex: 1, explanation: 'To round to the nearest 100 you must check the tens digit, not the thousands digit. In 1 499 the tens digit is 9 (≥ 5), so round up: 1 499 → 1 500 (the hundreds and tens digits change because of carrying).' },
        { difficulty: 'Hard', question: 'A road trip is marked on a number line from 0 km to 1 000 km in intervals of 100 km. A rest stop is at 380 km. Between which two marks does it fall?', checkMode: 'auto', options: ['200, 300', '300, 380', '300, 400', '380, 400'], correctIndex: 2, explanation: 'The interval marks are 0, 100, 200 … 1 000. 380 falls between the 300 mark and the 400 mark. The other options either pick the wrong pair of marks or use 380 itself as a mark, which is not allowed since only multiples of 100 are marked.' },
        { difficulty: 'Hard', question: 'A number line goes from 8 000 to 9 000 in intervals of 100. What number is halfway between 8 200 and 8 300?', checkMode: 'auto', options: ['8 200', '8 300', '8 500', '8 250'], correctIndex: 3, explanation: 'Add the two marks: 8 200 + 8 300 = 16 500. Divide by 2: 16 500 ÷ 2 = 8 250. Picking an endpoint ignores that halfway means exactly in the middle, and 8 500 mistakenly adds instead of dividing.' },
        { difficulty: 'Hard', question: 'A library recorded 3 299 books borrowed this month. One assistant rounds this to the nearest 10 for the weekly poster, while the head librarian rounds it to the nearest 100 for the annual report. Which option gives both rounded numbers correctly and identifies which is closer to the actual 3 299 books?', checkMode: 'auto', options: ['Nearest 10 = 3 300; Nearest 100 = 3 300; both estimates are equally close since they round to the same number.', 'Nearest 10 = 3 290; Nearest 100 = 3 300; the nearest-10 estimate is closer.', 'Nearest 10 = 3 300; Nearest 100 = 3 200; the nearest-100 estimate is closer.', 'Nearest 10 = 3 300; Nearest 100 = 3 300; the nearest-10 estimate must always be closer, no matter the numbers.'], correctIndex: 0, explanation: 'Nearest 10: units digit 9 (≥ 5), round up → 3 300. Nearest 100: tens digit 9 (≥ 5), round up → 3 300. Since both roundings land on 3 300, neither is more accurate here — they are exactly the same distance (1) from 3 299.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with place value, comparing, rounding and number lines.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Which of these numbers is a whole number?', checkMode: 'auto', options: ['9⅓', '9.33', '100', '⅓'], correctIndex: 2, explanation: '100 is a complete counting number with no fraction or decimal part, so it is a whole number. 9⅓ has a fraction part, 9.33 has a decimal part, and ⅓ is a fraction on its own — none of these are whole numbers.' },
        { difficulty: 'Easy', question: 'Write all the whole numbers between 45 and 50, separated by commas.', checkMode: 'auto', options: ['45, 46, 47, 48, 49, 50', '46, 47, 48', '45, 46, 47, 48, 49', '46, 47, 48, 49'], correctIndex: 3, explanation: '"Between" does not include 45 or 50 themselves. Counting from just after 45 up to just before 50 gives 46, 47, 48, 49. Including 45 and/or 50, or stopping one number too early, are common mistakes.' },
        { difficulty: 'Easy', question: 'A library has 1 406 books on one shelf. Which statement correctly identifies the column of the digit 4 and gives 1 406 in expanded notation?', checkMode: 'auto', options: ['4 is in the Hundreds column; 1 406 = 1 000 + 400 + 0 + 6', '4 is in the Tens column; 1 406 = 1 000 + 40 + 0 + 6', '4 is in the Hundreds column; 1 406 = 1 000 + 40 + 0 + 6', '4 is in the Thousands column; 1 406 = 1 000 + 400 + 0 + 6'], correctIndex: 0, explanation: '1 is in the Thousands column (1 000), 4 is in the Hundreds column (400), 0 is in the Tens column (0), 6 is in the Units column (6). The wrong options place the 4 in the wrong column or forget to multiply it by 100.' },
        { difficulty: 'Easy', question: 'A shop sold 6 235 loaves of bread this week. Write 6 235 in expanded notation.', checkMode: 'auto', options: ['6 000 + 20 + 30 + 5', '6 000 + 200 + 30 + 5', '6 000 + 200 + 3 + 5', '6 000 + 200 + 30 + 50'], correctIndex: 1, explanation: '6 000 (Thousands) + 200 (Hundreds) + 30 (Tens) + 5 (Units) = 6 235. The wrong options undervalue the Hundreds digit, undervalue the Tens digit, or add an extra zero to the Units digit.' },
        { difficulty: 'Easy', question: 'A school has 4 327 learners enrolled. What is the value of the digit 4 in 4 327?', checkMode: 'auto', options: ['400', '40', '4 000', '4'], correctIndex: 2, explanation: 'The digit 4 is in the Thousands column of 4 327, so its value is 4 000. 400 and 40 would be its value in the Hundreds or Tens column, and 4 ignores place value completely.' },
        { difficulty: 'Easy-Medium', question: 'A recipe book has recipe number 5 872 as its most popular recipe. What is the value of the digit 5 in 5 872?', checkMode: 'auto', options: ['500', '50', '5', '5 000'], correctIndex: 3, explanation: 'The digit 5 is in the Thousands column, so its value is 5 × 1 000 = 5 000. 500 and 50 would be its value in the Hundreds or Tens column, and 5 ignores place value completely.' },
        { difficulty: 'Easy-Medium', question: 'A stadium\'s ticket counter needs to display a number made of 9 thousands, 0 hundreds, 0 tens and 6 units. What number should it show?', checkMode: 'auto', options: ['9 006', '9 060', '9 600', '906'], correctIndex: 0, explanation: 'Place each digit in its column: 9 thousands, 0 hundreds, 0 tens, 6 units → 9 006. The wrong options move the 6 into the wrong column, or drop a placeholder zero, losing a digit.' },
        { difficulty: 'Medium', question: 'Bongani says: "In the price R4 083, the digit 8 is worth 8 rand because 8 always just means 8." Which statement correctly evaluates his claim?', checkMode: 'auto', options: ['Yes — 8 always just means 8, no matter where it sits.', 'No — the 8 is in the Tens column, so it is worth R80, not R8.', 'Yes — since R4 083 has four digits, the 8 must be worth R8 exactly.', 'No — the 8 is in the Hundreds column, so it is worth R800.'], correctIndex: 1, explanation: 'A digit\'s value depends on where it sits in the number, not just the digit itself. In R4 083, the 8 is in the Tens column, so it is worth R80, not R8.' },
        { difficulty: 'Medium', question: 'A load-shedding schedule counts down in stages every 10 minutes, starting at 8 080 minutes remaining in a project countdown. Write the next 4 countdown numbers, separated by commas.', checkMode: 'auto', options: ['8 070, 8 060, 8 050, 8 030', '8 080, 8 070, 8 060, 8 050', '8 070, 8 060, 8 050, 8 040', '8 070, 7 060, 7 050, 7 040'], correctIndex: 2, explanation: 'Subtract 10 each time: 8 080 − 10 = 8 070, then 8 060, 8 050, 8 040. The wrong options skip an extra 10 partway through, repeat the starting number instead of the next term, or mistakenly drop 1 000 from later terms.' },
        { difficulty: 'Medium', question: 'A pocket-money savings tracker starts at R3 000 and grows by R1 000 every month for the next 4 months. Write the savings total after each of the next 4 months, separated by commas.', checkMode: 'auto', options: ['R3 000, R4 000, R5 000, R6 000', 'R4 000, R5 000, R6 000, R7 100', 'R4 000, R4 500, R5 000, R5 500', 'R4 000, R5 000, R6 000, R7 000'], correctIndex: 3, explanation: 'Add 1 000 each time: 3 000 + 1 000 = 4 000, then 5 000, 6 000, 7 000. The wrong options repeat the starting amount instead of the next month, use the wrong interval, or make an arithmetic slip on the last term.' },
        { difficulty: 'Medium', question: 'A market-day vendor\'s daily takings follow a pattern: R2 200, R2 350, R2 500 …\n\nWhich option correctly states the rule and the next 2 amounts?', checkMode: 'auto', options: ['Add R150; next 2 amounts: R2 650, R2 800', 'Add R100; next 2 amounts: R2 600, R2 700', 'Add R150; next 2 amounts: R2 500, R2 650', 'Add R300; next 2 amounts: R2 800, R3 100'], correctIndex: 0, explanation: 'Each amount is 150 more than the one before: 2 350 − 2 200 = 150, 2 500 − 2 350 = 150. Continue: 2 500 + 150 = 2 650, 2 650 + 150 = 2 800. The wrong options use the wrong interval or repeat 2 500 instead of continuing from it.' },
        { difficulty: 'Medium', question: 'Lerato has R2 087 saved and Sipho has R9 302 saved. Write less than, greater than, or equal to for: Lerato\'s savings and Sipho\'s savings.', checkMode: 'auto', options: ['greater than', 'less than', 'equal to', 'cannot be compared because they are different amounts of money'], correctIndex: 1, explanation: 'Compare thousands digits: 2 087 has 2 thousands, 9 302 has 9 thousands. Since 2 < 9, Lerato\'s savings are less than Sipho\'s.' },
        { difficulty: 'Medium', question: 'Four sports teams scored these total season points: 6 234, 987, 6 432, 1 023. Order the teams\' points from smallest to biggest, separated by commas.', checkMode: 'auto', options: ['987, 1 023, 6 432, 6 234', '6 234, 6 432, 987, 1 023', '987, 1 023, 6 234, 6 432', '1 023, 987, 6 234, 6 432'], correctIndex: 2, explanation: '987 has 3 digits, so it is smallest. 1 023 has 4 digits with 1 thousand. 6 234 and 6 432 both have 6 thousands — compare hundreds: 2 < 4, so 6 234 < 6 432. Correct order: 987, 1 023, 6 234, 6 432. The wrong options swap 6 234 and 6 432, ignore digit-count when ordering the smaller numbers first, or swap 987 and 1 023.' },
        { difficulty: 'Medium', question: 'Two neighbouring towns have populations of 4 001 and 3 987. A learner claims the town with 3 987 people is bigger because it has a 9 in the hundreds column. Which statement correctly evaluates this claim?', checkMode: 'auto', options: ['Yes — 9 is bigger than 0, so the reasoning holds.', 'Yes — 3 987 has a 9 in it, and 4 001 does not, so 3 987 must be bigger.', 'No — 3 987 and 4 001 are actually equal populations.', 'No — the thousands digit must be compared first; 4 001 has 4 thousands and 3 987 has only 3 thousands, so 4 001 is bigger.'], correctIndex: 3, explanation: 'The thousands digit must be compared first. 4 001 has 4 thousands and 3 987 has only 3 thousands. Since 4 > 3, the town with 4 001 people is bigger, no matter what the smaller-column digits show.' },
        { difficulty: 'Medium', question: 'A runner completed a race of 2 350 metres. Round this distance to the nearest 100 metres.', checkMode: 'auto', options: ['2 400', '2 300', '2 350', '2 360'], correctIndex: 0, explanation: 'The tens digit is 5 (≥ 5), so round up: 2 350 → 2 400. 2 300 wrongly rounds down, 2 350 leaves the number unrounded, and 2 360 rounds to the nearest 10 instead of 100.' },
        { difficulty: 'Medium', question: 'A donation drive collected 6 784 tins of food. Round this number to the nearest 10 to write in a simple report.', checkMode: 'auto', options: ['6 790', '6 780', '6 800', '6 770'], correctIndex: 1, explanation: 'The units digit is 4 (< 5), so round down: 6 784 → 6 780. 6 790 wrongly rounds up, 6 800 rounds to the nearest 100 instead of 10, and 6 770 subtracts one too many tens.' },
        { difficulty: 'Medium', question: 'A car dealership sold 9 450 cars this year. Round this number to the nearest 1 000 for the annual report.', checkMode: 'auto', options: ['9 500', '10 000', '9 000', '9 450'], correctIndex: 2, explanation: 'The hundreds digit is 4 (< 5), so round down: 9 450 → 9 000. 9 500 rounds to the nearest 100 instead of 1 000, 10 000 wrongly rounds up, and 9 450 leaves the number unrounded.' },
        { difficulty: 'Hard', question: 'A cinema seating chart is marked on a number line from 0 to 1 000 in intervals of 100. Seat number 720 needs to be found quickly. Between which two marks does it fall?', checkMode: 'auto', options: ['600, 700', '700, 720', '720, 800', '700, 800'], correctIndex: 3, explanation: 'The interval marks are 0, 100, 200 … 1 000. 720 falls between the 700 mark and the 800 mark. The other options either pick the wrong pair of marks or use 720 itself as a mark, which is not allowed since only multiples of 100 are marked.' },
        { difficulty: 'Hard', question: 'A charity tracker is a number line from 5 000 to 6 000 in intervals of 100. What donation amount sits exactly halfway between 5 400 and 5 500?', checkMode: 'auto', options: ['5 450', '5 400', '5 500', '5 900'], correctIndex: 0, explanation: 'Add the two marks: 5 400 + 5 500 = 10 900. Divide by 2: 10 900 ÷ 2 = 5 450. Picking an endpoint ignores that halfway means exactly in the middle, and 5 900 mistakenly adds instead of dividing.' },
        { difficulty: 'Hard', question: 'A farmer has 4 763 sheep. He rounds this to the nearest 10 for a quick head-count, and separately to the nearest 100 for the co-op\'s official report. Which option gives both rounded numbers correctly and identifies which is closer to his actual flock of 4 763?', checkMode: 'auto', options: ['Nearest 10 = 4 770; Nearest 100 = 4 800; the nearest-100 estimate is closer.', 'Nearest 10 = 4 760; Nearest 100 = 4 800; the nearest-10 estimate is closer.', 'Nearest 10 = 4 760; Nearest 100 = 4 700; the nearest-100 estimate is closer.', 'Nearest 10 = 4 760; Nearest 100 = 4 800; both estimates are equally close.'], correctIndex: 1, explanation: 'Nearest 10: units digit 3 (< 5), round down → 4 760. Nearest 100: tens digit 6 (≥ 5), round up → 4 800. Distances from 4 763: 4 763 − 4 760 = 3, while 4 800 − 4 763 = 37. Since 3 < 37, the nearest-10 estimate is closer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply place value, comparing, rounding and number lines to real-world problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
