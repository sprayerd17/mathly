import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Patterns, Functions and Algebra',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NUMERIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'numeric-patterns',
      title: 'Numeric Patterns',
      icon: '🔢',
      explanation:
        'A number pattern is a list of numbers that follow a rule. ' +
        'The rule tells you what to do to get from one number to the next. ' +
        'Common rules are: add a number each time, subtract a number each time, or multiply. ' +
        'For example, in the pattern 2, 4, 6, 8, 10 — you add 2 each time. ' +
        'We call the number you add (or subtract) the interval. ' +
        'In Grade 4 you work with intervals like 2s, 3s, 4s, 5s, 10s, 20s, 25s, 50s, 100s, and 1 000s. ' +
        'Patterns can go forwards (getting bigger) or backwards (getting smaller). ' +
        'In a forwards pattern you add; in a backwards pattern you subtract. ' +
        'A special type of pattern is called a multiplication pattern — for example, 4, 8, 12, 16 are the multiples of 4. ' +
        'An input-output table shows a rule working on different numbers. ' +
        'You put a number in (the input), the rule changes it, and you get the output. ' +
        'For example, if the rule is "multiply by 3": input 2 → output 6, input 5 → output 15. ' +
        'To find a missing number in a pattern, first work out the rule, then use it to fill in the gap.',
      workedExamples: [
        {
          question: 'What comes next: 5, 10, 15, 20, ___?',
          answer: '25 (rule: add 5 each time)',
          steps: [
            'Look at the differences between the numbers.',
            '10 − 5 = 5. 15 − 10 = 5. 20 − 15 = 5.',
            'The rule is: add 5 each time.',
            '20 + 5 = 25.',
            'The next number is 25.',
          ],
        },
        {
          question: 'Describe the rule: 96, 88, 80, 72, 64',
          answer: 'Subtract 8 each time.',
          steps: [
            'The numbers are getting smaller, so we are subtracting.',
            '96 − 88 = 8. 88 − 80 = 8. 80 − 72 = 8. 72 − 64 = 8.',
            'The rule is: subtract 8 each time.',
            'The next number after 64 would be 64 − 8 = 56.',
          ],
        },
        {
          question: 'Complete the input-output table where the rule is "multiply by 4": Input 3 → Output ?, Input 7 → Output ?',
          answer: 'Input 3 → Output 12. Input 7 → Output 28.',
          steps: [
            'The rule is: multiply the input by 4 to get the output.',
            'Input 3: 3 × 4 = 12. So the output is 12.',
            'Input 7: 7 × 4 = 28. So the output is 28.',
            'Check: is 12 four times bigger than 3? Yes. Is 28 four times bigger than 7? Yes.',
          ],
        },
        {
          question: 'Find the missing number: 12, 24, ___, 48, 60',
          answer: '36 (rule: add 12 each time)',
          steps: [
            'Find the rule by looking at the differences.',
            '24 − 12 = 12. 60 − 48 = 12.',
            'The rule is: add 12 each time.',
            'The missing number comes after 24: 24 + 12 = 36.',
            'Check: 36 + 12 = 48 ✓',
          ],
        },
      ],
      practiceQuestions: [
        {
          question: 'What comes next: 150, 175, 200, 225, ___?',
          answer: '250\nFind the rule: 175 − 150 = 25. The rule is add 25 each time. 225 + 25 = 250.',
          options: ['235', '240', '250', '255'],
          correctIndex: 2,
        },
        {
          question: 'Describe the rule: 1 000, 900, 800, 700, 600',
          answer: 'Subtract 100 each time.\nThe numbers are getting smaller. 1 000 − 900 = 100. The rule is subtract 100 each time. The next number would be 500.',
          options: ['Add 100 each time', 'Subtract 200 each time', 'Subtract 100 each time', 'Divide by 10 each time'],
          correctIndex: 2,
        },
        {
          question: 'Complete the input-output table: The rule is "multiply by 5 then add 1". Input = 6. What is the output?',
          answer: '31\nFirst multiply: 6 × 5 = 30. Then add 1: 30 + 1 = 31. Output = 31.',
          options: ['30', '31', '35', '36'],
          correctIndex: 1,
        },
        {
          question: 'Find the missing number: 8, 16, 24, ___, 40',
          answer: '32\nRule: 16 − 8 = 8, add 8 each time. 24 + 8 = 32. Check: 32 + 8 = 40 ✓',
          options: ['28', '30', '32', '34'],
          correctIndex: 2,
        },
        {
          question: 'The pattern starts at 4 and the rule is add 5. Write the next 3 numbers after 19: 4, 9, 14, 19, ...',
          answer: '24, 29, 34\nRule: add 5 each time. 19 + 5 = 24. 24 + 5 = 29. 29 + 5 = 34.',
          options: ['22, 27, 32', '23, 28, 33', '24, 29, 34', '25, 30, 35'],
          correctIndex: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns',
      title: 'Geometric Patterns',
      icon: '🔷',
      explanation:
        'A geometric pattern is a pattern made up of shapes or pictures. ' +
        'Each picture in the pattern is called a term. ' +
        'Just like number patterns, geometric patterns follow a rule — for example, "add one more shape each time" or "double the number of dots each time". ' +
        'To describe a geometric pattern, you say what changes from one term to the next. ' +
        'Geometric patterns are linked to number patterns. ' +
        'If a row of squares uses 1, 2, 3, 4 squares — that is also the number pattern 1, 2, 3, 4. ' +
        'Matchstick patterns are very common. ' +
        'One triangle uses 3 matchsticks. Two triangles sharing a side use 5 matchsticks (not 6, because they share one side). Three triangles use 7 matchsticks. The rule is: add 2 each time. ' +
        'Similarly, one square uses 4 matchsticks. ' +
        'Two squares sharing a side use 7 matchsticks — not 8, because one side is shared. ' +
        'Three squares use 10 matchsticks. The rule is: add 3 each time. ' +
        'You can also create your own geometric patterns — choose a shape and a rule, then draw each term.',
      workedExamples: [
        {
          question: 'A pattern shows 1 square, then an L-shape of 3 squares, then an L-shape of 5 squares. How many squares are in the next shape?',
          answer: '7 squares (rule: add 2 each time)',
          steps: [
            'Write the number of squares in each term: 1, 3, 5, ...',
            'Find the rule: 3 − 1 = 2. 5 − 3 = 2. Add 2 each time.',
            'Next term: 5 + 2 = 7.',
            'The next shape has 7 squares.',
          ],
        },
        {
          question: 'A pattern of rows of triangles: row 1 has 1 triangle, row 2 has 2, row 3 has 3. How many triangles are in row 5?',
          answer: '5 triangles (the term number equals the number of triangles)',
          steps: [
            'Write the number pattern: 1, 2, 3, 4, 5, ...',
            'The rule is: add 1 each time (or the number of triangles equals the row number).',
            'Row 4 has 4 triangles. Row 5 has 5 triangles.',
            'Answer: row 5 has 5 triangles.',
          ],
        },
        {
          question: 'Describe how this pattern grows: ○, ○○, ○○○, ○○○○',
          answer: 'One circle is added each time. The number pattern is 1, 2, 3, 4.',
          steps: [
            'Count the circles in each term: 1, 2, 3, 4.',
            'The difference between each term: 2 − 1 = 1. 3 − 2 = 1. 4 − 3 = 1.',
            'Rule: one circle is added each time.',
            'The linked number pattern is 1, 2, 3, 4, 5, ... (add 1).',
          ],
        },
        {
          question: 'A matchstick pattern: 1 triangle uses 3 matchsticks, 2 triangles use 5, 3 triangles use 7. How many matchsticks for 4 triangles?',
          answer: '9 matchsticks (rule: add 2 each time)',
          steps: [
            'Write the number pattern: 3, 5, 7, ...',
            'Rule: 5 − 3 = 2. 7 − 5 = 2. Add 2 each time.',
            '4 triangles: 7 + 2 = 9 matchsticks.',
            'This makes sense — each new triangle shares one side with the previous one, so it only needs 2 new matchsticks.',
          ],
        },
      ],
      practiceQuestions: [
        {
          question: 'A pattern shows: 1 triangle, then 2 triangles, then 3 triangles. How many triangles are in term 4?',
          answer: '4 triangles\nThe rule is add 1 each time. The term number equals the number of triangles. Term 4 has 4 triangles.',
          options: ['2 triangles', '3 triangles', '4 triangles', '5 triangles'],
          correctIndex: 2,
        },
        {
          question: 'A pattern shows 2 dots, 4 dots, 6 dots. How many dots will be in picture 5?',
          answer: '10 dots\nRule: add 2 each time. Picture 1 = 2, picture 2 = 4, picture 3 = 6, picture 4 = 8, picture 5 = 10.',
          options: ['8 dots', '9 dots', '10 dots', '12 dots'],
          correctIndex: 2,
        },
        {
          question: 'Squares are placed in a row, each sharing one side with the last. Square 1 uses 4 matchsticks, square 2 uses 7, square 3 uses 10. How many matchsticks for 5 squares?',
          answer: '16 matchsticks\nRule: add 3 each time (4, 7, 10, 13, 16). Each new square shares one side, so adds only 3 new matchsticks. Square 4 = 13, square 5 = 16.',
          options: ['14', '15', '16', '17'],
          correctIndex: 2,
        },
        {
          question: 'A pattern of squares grows like this: 1 square, 2 squares, 4 squares, 8 squares. What is the rule?',
          answer: 'Doubles each time\nCount: 1, 2, 4, 8. 2 ÷ 1 = 2. 4 ÷ 2 = 2. 8 ÷ 4 = 2. The number of squares doubles each time.',
          options: ['Adds 2 each time', 'Doubles each time', 'Adds 4 each time', 'Triples each time'],
          correctIndex: 1,
        },
        {
          question: 'A pattern grows by adding 3 circles each time. Term 1 has 3 circles. How many circles are in term 4?',
          answer: '12 circles\nRule: add 3 each time. Term 1 = 3, term 2 = 6, term 3 = 9, term 4 = 12.',
          options: ['9 circles', '10 circles', '12 circles', '15 circles'],
          correctIndex: 2,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — NUMBER SENTENCES (OPEN SENTENCES)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'number-sentences',
      title: 'Number Sentences and Open Sentences',
      icon: '📝',
      explanation:
        'A number sentence is a mathematical statement written with numbers and symbols, like 3 + 5 = 8 or 4 × 6 = 24. ' +
        'An open number sentence has a missing number. ' +
        'We show the missing number with a box □, a blank ___, or a letter like n. ' +
        'For example: □ + 5 = 12 — the box is the missing number. ' +
        'To solve an open number sentence, use the inverse (opposite) operation. ' +
        'If the sentence uses addition, use subtraction to find the missing number. ' +
        'If it uses multiplication, use division. ' +
        'Example: □ + 5 = 12 → □ = 12 − 5 = 7. ' +
        'Example: □ × 4 = 36 → □ = 36 ÷ 4 = 9. ' +
        'Number sentences are also used to describe patterns. ' +
        'In an input-output table, you can write a number sentence for the rule, like: input × 3 = output. ' +
        'Word problems can always be turned into number sentences — read carefully to decide which operation fits.',
      workedExamples: [
        {
          question: 'The rule is "add 6". The first number is 2. Write out the first 5 numbers and find the 5th number.',
          answer: '2, 8, 14, 20, 26. The 5th number is 26.',
          steps: [
            'Start with 2.',
            '2 + 6 = 8.',
            '8 + 6 = 14.',
            '14 + 6 = 20.',
            '20 + 6 = 26.',
            'The 5th number is 26.',
          ],
        },
        {
          question: 'Solve: □ × 4 = 36',
          answer: '□ = 9',
          steps: [
            'The missing number is multiplied by 4 to give 36.',
            'Use the inverse operation: division.',
            '□ = 36 ÷ 4.',
            '36 ÷ 4 = 9.',
            'Check: 9 × 4 = 36 ✓',
          ],
        },
        {
          question: 'Solve: 45 − □ = 18',
          answer: '□ = 27',
          steps: [
            'The missing number is subtracted from 45 to give 18.',
            'Use the inverse operation: 45 − 18 = □.',
            '45 − 18 = 27.',
            '□ = 27.',
            'Check: 45 − 27 = 18 ✓',
          ],
        },
        {
          question: 'In an input-output table the rule is "multiply by 3". The output is 24. What is the input?',
          answer: 'Input = 8',
          steps: [
            'The rule is: input × 3 = output.',
            'We know the output is 24.',
            'Write the open sentence: input × 3 = 24.',
            'Use the inverse: input = 24 ÷ 3.',
            '24 ÷ 3 = 8.',
            'Check: 8 × 3 = 24 ✓',
          ],
        },
      ],
      practiceQuestions: [
        {
          question: 'Solve: □ + 14 = 50',
          answer: '36\nUse the inverse operation: □ = 50 − 14 = 36. Check: 36 + 14 = 50 ✓',
          options: ['34', '36', '38', '64'],
          correctIndex: 1,
        },
        {
          question: 'Solve: □ × 7 = 63',
          answer: '9\nUse the inverse operation: □ = 63 ÷ 7 = 9. Check: 9 × 7 = 63 ✓',
          options: ['7', '8', '9', '10'],
          correctIndex: 2,
        },
        {
          question: 'The rule is "add 9". The first number is 5. What is the 4th number?',
          answer: '32\nStart at 5 and add 9 three times: 5 → 14 → 23 → 32. The 4th number is 32.',
          options: ['23', '28', '32', '41'],
          correctIndex: 2,
        },
        {
          question: 'In an input-output table the rule is "multiply by 6". The output is 30. What is the input?',
          answer: '5\nWrite the open sentence: input × 6 = 30. Use the inverse: 30 ÷ 6 = 5. Check: 5 × 6 = 30 ✓',
          options: ['4', '5', '6', '24'],
          correctIndex: 1,
        },
        {
          question: 'I think of a number, subtract 15, and get 40. What number did I think of?',
          answer: '55\nWrite the number sentence: □ − 15 = 40. Use the inverse: □ = 40 + 15 = 55. Check: 55 − 15 = 40 ✓',
          options: ['25', '40', '55', '65'],
          correctIndex: 2,
        },
      ],
    },
  ],
}
