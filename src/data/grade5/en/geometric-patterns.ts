import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometric pattern roles) ─────────────────────────────────
// pattern rule → orange  (#ea580c)
// shape names  → blue    (#2563eb)
// answer       → green   (#16a34a)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometric Patterns',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A GEOMETRIC PATTERN?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-intro',
      title: 'What is a Geometric Pattern?',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">A geometric pattern is a pattern made using shapes. The shapes repeat or grow in a regular way. Every pattern has a ${or('rule')} that tells us what comes next. To find the ${or('rule')} look at how the shapes change from one step to the next — are more shapes being added, are they changing ${bl('colour')}, or are they changing ${bl('position')}?</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('pattern rule')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('shape names')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answers')}</span>` +
        `</div>`,

      workedExamples: [
        {
          question: `Look at this pattern — ${bl('triangle')}, ${bl('circle')}, ${bl('triangle')}, ${bl('circle')}. What comes next?`,
          answer: gr('A triangle comes next.'),
          steps: [
            `Look at the ${bl('shapes')}. They alternate between ${bl('triangle')} and ${bl('circle')}.`,
            `The ${or('rule')} is: ${or('alternate triangle and circle')}.`,
            `The next shape is a ${gr('triangle')}.`,
          ],
        },
        {
          question: 'A pattern starts with 1 square in step 1, 3 squares in step 2, 5 squares in step 3. How many squares in step 4?',
          answer: gr('7 squares'),
          steps: [
            `Look at how the number of ${bl('squares')} changes.`,
            `From step 1 to 2 we add 2. From step 2 to 3 we add 2.`,
            `The ${or('rule')} is: ${or('add 2 each time')}.`,
            `Step 4 has 5 + 2 = ${gr('7 squares')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — alternating shapes ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A pattern goes: circle, square, circle, square. What shape comes next?',
          answer: 'circle',
          checkMode: 'auto',
          correctAnswer: 'circle',
          explanation: 'The pattern alternates between circle and square.\nPattern: circle, square, circle, square, ...\nAfter square comes circle ✓',
        },

        // ── Q2 Medium — growing triangles ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A pattern has 2 triangles in step 1, 4 in step 2, 6 in step 3. How many triangles are in step 4?',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'From step 1 to 2: 4 − 2 = 2. From step 2 to 3: 6 − 4 = 2. The rule is: add 2 each time.\nStep 4 = 6 + 2 = 8 triangles ✓',
        },

        // ── Q3 Hard — describe rule and extend ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A pattern has 3 shapes in step 1, 6 in step 2, 9 in step 3. Describe the rule and find step 6.',
          answer: 'The rule is add 3 each time. Step 4 = 12, step 5 = 15, step 6 = 18.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two geometric patterns — an alternating triangle circle pattern and a growing square pattern with the rule labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining what a geometric pattern is and how to find the rule by looking at how shapes change from step to step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DESCRIBING AND EXTENDING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-describing-extending',
      title: 'Describing and Extending Patterns',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>describe</strong> a pattern we explain the ${or('rule')} in words. For example: the ${or('rule')} is ${or('add 2 squares each time')}. To <strong>extend</strong> a pattern we use the ${or('rule')} to draw or write what comes next. Always check your ${or('rule')} works from ${bl('step 1')} to ${bl('step 2')} before extending further.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('pattern rule')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('step numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answers')}</span>` +
        `</div>` +

        // ── Two key skills ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two key skills</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Describe the pattern</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Find how the pattern changes from one step to the next and state the ${or('rule')} in words.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: "${or('The rule is: add 2 circles each time.')}"</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Extend the pattern</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Apply the ${or('rule')} repeatedly to find what comes next — keep adding step by step.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: "${gr('Step 4 = 6 + 2 = 8.')} ${gr('Step 5 = 8 + 2 = 10.')}"</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your rule first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Before extending, verify that the ${or('rule')} works from ${bl('step 1')} to ${bl('step 2')} <strong>and</strong> from ${bl('step 2')} to ${bl('step 3')}. If the same number is added (or removed) each time, your ${or('rule')} is correct.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `A pattern has ${bl('2')} circles in ${bl('step 1')}, ${bl('4')} circles in ${bl('step 2')}, ${bl('6')} circles in ${bl('step 3')}. Describe the rule and find ${bl('step 5')}.`,
          answer: gr('Step 5 has 10 circles.'),
          steps: [
            `From ${bl('step 1')} to ${bl('step 2')}: 4 − 2 = 2. We add 2.`,
            `From ${bl('step 2')} to ${bl('step 3')}: 6 − 4 = 2. We add 2.`,
            `The ${or('rule')} is: ${or('add 2 circles each time')}.`,
            `${bl('Step 4')} = 6 + 2 = ${gr('8')}.`,
            `${bl('Step 5')} = 8 + 2 = ${gr('10 circles')}.`,
          ],
        },
        {
          question: `Sipho draws triangles in a row. ${bl('Row 1')} has 3 triangles, ${bl('row 2')} has 6, ${bl('row 3')} has 9. What is the rule? How many triangles in ${bl('row 5')}?`,
          answer: gr('Row 5 has 15 triangles.'),
          steps: [
            `From ${bl('row 1')} to ${bl('row 2')}: 6 − 3 = 3. We add 3.`,
            `From ${bl('row 2')} to ${bl('row 3')}: 9 − 6 = 3. We add 3.`,
            `The ${or('rule')} is: ${or('add 3 triangles each time')}.`,
            `${bl('Row 4')} = 9 + 3 = ${gr('12')}.`,
            `${bl('Row 5')} = 12 + 3 = ${gr('15 triangles')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — step 2 of a growing square pattern ─────────────────────
        {
          difficulty: 'Easy',
          question: 'A pattern starts at 5 squares and adds 2 each time. How many squares are in step 2?',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Step 1 = 5 squares. The rule is: add 2 each time.\nStep 2 = 5 + 2 = 7 squares ✓',
        },

        // ── Q5 Medium — Lerato's circles ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Lerato's pattern has 4 circles in step 1, 7 in step 2, 10 in step 3.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) What is the rule?',
              correctAnswer: 'add 3 each time',
              explanation: 'From step 1 to 2: 7 − 4 = 3. From step 2 to 3: 10 − 7 = 3. The rule is: add 3 each time ✓',
            },
            {
              label: 'b) How many circles in step 5?',
              correctAnswer: '16',
              explanation: 'Step 4 = 10 + 3 = 13. Step 5 = 13 + 3 = 16 circles ✓',
            },
          ],
        },

        // ── Q6 Hard — doubling pattern ───────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A pattern starts with 2 shapes and doubles each time. Write the number of shapes for steps 1 to 5.',
          answer: '2, 4, 8, 16, 32',
          checkMode: 'auto',
          correctAnswer: '2, 4, 8, 16, 32',
          explanation: 'The rule is: double each time (multiply by 2).\nStep 1 = 2. Step 2 = 2 × 2 = 4. Step 3 = 4 × 2 = 8. Step 4 = 8 × 2 = 16. Step 5 = 16 × 2 = 32 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two growing patterns — circles increasing by 2 each step and triangles increasing by 3 each row with the rule labelled in orange and step numbers in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to describe the rule of a geometric pattern in words and extend it step by step using the rule" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CREATING YOUR OWN PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns-creating-own',
      title: 'Creating Your Own Patterns',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">You can create your own geometric pattern by choosing a shape and a ${or('rule')}. First choose your starting shape and how many. Then decide on your ${or('rule')} — for example ${or('add 2 each time')} or ${or('double each time')}. Then apply your ${or('rule')} to build each step. Always check that your ${or('rule')} works consistently from one ${bl('step')} to the next.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('pattern rule')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('step numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answers')}</span>` +
        `</div>` +

        // ── 4 steps to create your own pattern ──────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to create your own pattern</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Choose your starting shape</strong> — decide which ${bl('shape')} to use and how many to start with at ${bl('step 1')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Decide on your rule</strong> — state your ${or('rule')} clearly, for example ${or('add 2 each time')} or ${or('double each time')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Apply your rule</strong> — use the ${or('rule')} to work out each step and record the ${gr('answer')} for each ${bl('step')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Check your rule</strong> — always verify that your ${or('rule')} works consistently from one ${bl('step')} to the next before moving on.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">State your rule clearly</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always write your ${or('rule')} in a full sentence before you start building the pattern — for example: "${or('Start at 2 and add 3 each time.')}" This makes it easy to check each step and spot mistakes early.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Create a pattern starting with ${bl('1')} triangle and ${or('doubling')} each time. Show the first ${bl('4')} steps.`,
          answer: gr('Step 4 has 8 triangles.'),
          steps: [
            `${bl('Step 1')} = ${gr('1 triangle')}. This is our starting amount.`,
            `The ${or('rule')} is: ${or('double each time')} (multiply by 2).`,
            `${bl('Step 2')} = 1 × 2 = ${gr('2 triangles')}.`,
            `${bl('Step 3')} = 2 × 2 = ${gr('4 triangles')}.`,
            `${bl('Step 4')} = 4 × 2 = ${gr('8 triangles')}.`,
          ],
        },
        {
          question: `Amahle creates a pattern using ${bl('squares')}. She starts with ${bl('2')} squares and ${or('adds 3')} each time. Draw the first ${bl('4')} steps.`,
          answer: gr('Step 4 has 11 squares.'),
          steps: [
            `${bl('Step 1')} = ${gr('2 squares')}. This is our starting amount.`,
            `${bl('Step 2')} = 2 + 3 = ${gr('5 squares')}.`,
            `${bl('Step 3')} = 5 + 3 = ${gr('8 squares')}.`,
            `${bl('Step 4')} = 8 + 3 = ${gr('11 squares')}.`,
            `The ${or('rule')} is: ${or('start at 2 and add 3 each time')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — Thabo's triangles ──────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo starts with 1 triangle and adds 4 each time. How many triangles are in step 3?',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Step 1 = 1 triangle. The rule is: add 4 each time.\nStep 2 = 1 + 4 = 5. Step 3 = 5 + 4 = 9 triangles ✓',
        },

        // ── Q8 Medium — create a pattern ─────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Create a pattern that starts with 3 squares and adds 5 each time. Write the first 4 steps.',
          answer: '3, 8, 13, 18',
          checkMode: 'auto',
          correctAnswer: '3, 8, 13, 18',
          explanation: 'The rule is: start at 3 and add 5 each time.\nStep 1 = 3. Step 2 = 3 + 5 = 8. Step 3 = 8 + 5 = 13. Step 4 = 13 + 5 = 18 ✓',
        },

        // ── Q9 Hard — identify error in pattern ──────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho says his pattern rule is add 4 each time. His steps are 2, 6, 10, 15. Is he correct? Explain.",
          answer: 'No — from 10 to 15 is only 5 not 4. The rule breaks at step 4 so the pattern is incorrect.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two created patterns — triangles doubling each step (1 2 4 8) and squares growing by 3 each step (2 5 8 11) with the rule labelled in orange and step numbers in blue" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to create your own geometric pattern by choosing a starting shape and a rule then applying the rule step by step" />',
    },
  ],
  scoreMessages: [
    { minScore: 7, message: 'Outstanding! A perfect score — you have completely mastered geometric patterns for Grade 5. Keep it up!' },
    { minScore: 5, message: 'Excellent work! You have a very strong grasp of geometric patterns. Review any missed parts and you will have it perfect.' },
    { minScore: 3, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],
}

export const resultsConfig = {
  totalMarks: 9,
  messages: [
    { minPct: 100, message: 'Excellent! You have mastered geometric patterns.' },
    { minPct: 75, message: 'Great work! You understand patterns well.' },
    { minPct: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
    { minPct: 0, message: 'Keep going! Work through the study guide again and try once more.' },
  ],
}
