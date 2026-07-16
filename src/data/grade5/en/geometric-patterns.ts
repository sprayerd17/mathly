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
        'Diagram showing two geometric patterns — an alternating triangle circle pattern and a growing square pattern with the rule labelled in orange',
      diagramSvg:
        '<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg"><text x="70" y="16" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Alternating pattern</text><polygon points="25,56 38,80 12,80" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="55" cy="70" r="12" fill="none" stroke="#2563eb" stroke-width="2.2"/><polygon points="85,56 98,80 72,80" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="115" cy="70" r="12" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="70" y="112" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: alternate triangle, circle</text><line x1="145" y1="15" x2="145" y2="150" stroke="#e2e8f0" stroke-width="1.5"/><text x="235" y="16" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Growing pattern</text><rect x="173.0" y="112.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="180" y="143" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Step 1</text><rect x="218.0" y="112.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="218.0" y="96.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="218.0" y="80.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="225" y="143" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Step 2</text><rect x="263.0" y="112.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="263.0" y="96.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="263.0" y="80.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="263.0" y="64.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="263.0" y="48.0" width="14" height="14" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="270" y="143" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Step 3</text><text x="225" y="160" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: add 2 squares each time</text></svg>',

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
        'Diagram showing two growing patterns — circles increasing by 2 each step and triangles increasing by 3 each row with the rule labelled in orange and step numbers in blue',
      diagramSvg:
        '<svg viewBox="0 0 340 225" xmlns="http://www.w3.org/2000/svg"><text x="170" y="16" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Growing circle pattern</text><circle cx="52.5" cy="55.0" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="67.5" cy="55.0" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="162.5" cy="47.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="177.5" cy="47.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="162.5" cy="62.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="177.5" cy="62.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="265.0" cy="47.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="280.0" cy="47.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="295.0" cy="47.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="265.0" cy="62.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="280.0" cy="62.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><circle cx="295.0" cy="62.5" r="6" fill="none" stroke="#2563eb" stroke-width="2.2"/><text x="60" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 1 (2)</text><text x="170" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 2 (4)</text><text x="280" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 3 (6)</text><text x="170" y="103" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: add 2 circles each time</text><line x1="20" y1="114" x2="320" y2="114" stroke="#e2e8f0" stroke-width="1.5"/><text x="170" y="132" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Growing triangle pattern</text><polygon points="51.5,154.1 57.5,164.9 45.5,164.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="68.5,154.1 74.5,164.9 62.5,164.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="60.0,171.1 66.0,181.9 54.0,181.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="153.0,154.1 159.0,164.9 147.0,164.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="170.0,154.1 176.0,164.9 164.0,164.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="187.0,154.1 193.0,164.9 181.0,164.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="153.0,171.1 159.0,181.9 147.0,181.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="170.0,171.1 176.0,181.9 164.0,181.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="187.0,171.1 193.0,181.9 181.0,181.9" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="263.0,145.6 269.0,156.4 257.0,156.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="280.0,145.6 286.0,156.4 274.0,156.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="297.0,145.6 303.0,156.4 291.0,156.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="263.0,162.6 269.0,173.4 257.0,173.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="280.0,162.6 286.0,173.4 274.0,173.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="297.0,162.6 303.0,173.4 291.0,173.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="263.0,179.6 269.0,190.4 257.0,190.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="280.0,179.6 286.0,190.4 274.0,190.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="297.0,179.6 303.0,190.4 291.0,190.4" fill="none" stroke="#2563eb" stroke-width="2.0"/><text x="60" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Row 1 (3)</text><text x="170" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Row 2 (6)</text><text x="280" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Row 3 (9)</text><text x="170" y="216" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: add 3 triangles each row</text></svg>',

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
        'Diagram showing two created patterns — triangles doubling each step (1 2 4 8) and squares growing by 3 each step (2 5 8 11) with the rule labelled in orange and step numbers in blue',
      diagramSvg:
        '<svg viewBox="0 0 380 225" xmlns="http://www.w3.org/2000/svg"><text x="190" y="16" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Doubling triangle pattern</text><polygon points="50.0,50.0 55.5,60.0 44.5,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="142.5,50.0 148.0,60.0 137.0,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="157.5,50.0 163.0,60.0 152.0,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="242.5,42.5 248.0,52.5 237.0,52.5" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="257.5,42.5 263.0,52.5 252.0,52.5" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="242.5,57.5 248.0,67.5 237.0,67.5" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="257.5,57.5 263.0,67.5 252.0,67.5" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="325.0,35.0 330.5,45.0 319.5,45.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="340.0,35.0 345.5,45.0 334.5,45.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="355.0,35.0 360.5,45.0 349.5,45.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="325.0,50.0 330.5,60.0 319.5,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="340.0,50.0 345.5,60.0 334.5,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="355.0,50.0 360.5,60.0 349.5,60.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="332.5,65.0 338.0,75.0 327.0,75.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><polygon points="347.5,65.0 353.0,75.0 342.0,75.0" fill="none" stroke="#2563eb" stroke-width="2.0"/><text x="50" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 1 (1)</text><text x="150" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 2 (2)</text><text x="250" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 3 (4)</text><text x="340" y="88" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 4 (8)</text><text x="190" y="103" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: double each time</text><line x1="20" y1="114" x2="360" y2="114" stroke="#e2e8f0" stroke-width="1.5"/><text x="190" y="132" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Growing square pattern</text><rect x="36.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="51.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="129.0" y="158.5" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="144.0" y="158.5" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="159.0" y="158.5" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="136.5" y="173.5" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="151.5" y="173.5" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="229.0" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="244.0" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="259.0" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="229.0" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="244.0" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="259.0" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="236.5" y="181.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="251.5" y="181.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="311.5" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="326.5" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="341.5" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="356.5" y="151.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="311.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="326.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="341.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="356.5" y="166.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="319.0" y="181.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="334.0" y="181.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><rect x="349.0" y="181.0" width="12" height="12" rx="2" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="50" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 1 (2)</text><text x="150" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 2 (5)</text><text x="250" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 3 (8)</text><text x="340" y="200" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Step 4 (11)</text><text x="190" y="216" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">Rule: start at 2, add 3 each time</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to create your own geometric pattern by choosing a starting shape and a rule then applying the rule step by step" />',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Identify/extend simple patterns | 4-7 Describe rule in words
    // | 8-11 Real-world word problems | 12-15 Compare two patterns |
    // 16-17 Error-spotting | 18-19 Create-your-own / reverse reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A pattern goes: star, moon, star, moon, star. What comes next?', answer: 'moon', checkMode: 'auto', correctAnswer: 'moon', correctAnswers: ['moon', 'a moon'], explanation: 'The pattern alternates between star and moon.\nPattern: star, moon, star, moon, star, ...\nAfter star comes moon ✓' },
        { difficulty: 'Easy', question: 'Step 1 has 3 dots, step 2 has 5 dots, step 3 has 7 dots. How many dots are in step 4?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 dots'], explanation: 'From step 1 to 2: 5 − 3 = 2. From step 2 to 3: 7 − 5 = 2. The pattern adds 2 each time.\nStep 4 = 7 + 2 = 9 dots ✓' },
        { difficulty: 'Easy', question: 'Look at this shape pattern: hexagon, hexagon, pentagon, hexagon, hexagon, pentagon. What shape comes next?', answer: 'hexagon', checkMode: 'auto', correctAnswer: 'hexagon', correctAnswers: ['hexagon', 'a hexagon'], explanation: 'The repeating unit is hexagon, hexagon, pentagon (3 shapes). After the pentagon, the unit starts again.\nThe next shape is a hexagon ✓' },
        { difficulty: 'Easy', question: 'A pattern of squares has 4 squares in step 1, 7 squares in step 2, 10 squares in step 3. How many squares are in step 4?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13 squares'], explanation: 'From step 1 to 2: 7 − 4 = 3. From step 2 to 3: 10 − 7 = 3. The pattern adds 3 each time.\nStep 4 = 10 + 3 = 13 squares ✓' },
        { difficulty: 'Easy-Medium', question: 'Step 1 has 6 triangles, step 2 has 10 triangles, step 3 has 14 triangles. State the rule, then find step 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 4 each time', explanation: 'From step 1 to 2: 10 − 6 = 4. From step 2 to 3: 14 − 10 = 4. The rule is: add 4 each time ✓' },
          { label: 'b) How many triangles in step 5?', correctAnswer: '22', explanation: 'Step 4 = 14 + 4 = 18. Step 5 = 18 + 4 = 22 triangles ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'A pattern starts at 20 and decreases: 20, 17, 14. Describe the rule in a full sentence, then find step 6.', answer: 'The rule is: start at 20 and subtract 3 each time. Step 6 = 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Row 1 has 5 counters, row 2 has 9 counters, row 3 has 13 counters. Find the rule and use it to work out row 6.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 4 each time', explanation: 'From row 1 to 2: 9 − 5 = 4. From row 2 to 3: 13 − 9 = 4. The rule is: add 4 each time ✓' },
          { label: 'b) How many counters in row 6?', correctAnswer: '25', explanation: 'Row 4 = 13 + 4 = 17. Row 5 = 17 + 4 = 21. Row 6 = 21 + 4 = 25 counters ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi says her pattern 8, 13, 18, 23 has the rule "add 5 each time". Explain in words why she is correct, and give the next term.', answer: 'She is correct because every consecutive pair increases by exactly 5: 13 − 8 = 5, 18 − 13 = 5, 23 − 18 = 5. The next term is 23 + 5 = 28.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A path is tiled with paving stones. Row 1 uses 3 stones, row 2 uses 6 stones, row 3 uses 9 stones. If this pattern continues, how many stones are needed for row 5?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 stones'], explanation: 'From row 1 to 2: 6 − 3 = 3. From row 2 to 3: 9 − 6 = 3. The rule is add 3 stones each time.\nRow 4 = 9 + 3 = 12. Row 5 = 12 + 3 = 15 stones ✓' },
        { difficulty: 'Medium', question: 'At a school hall, chairs are set out in rows for an assembly. 1 row seats 8 chairs, 2 rows seat 16 chairs, 3 rows seat 24 chairs. How many chairs are needed for 5 rows?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 chairs'], explanation: 'Each extra row adds 8 chairs (16 − 8 = 8, 24 − 16 = 8). The rule is add 8 chairs per row.\n4 rows = 24 + 8 = 32. 5 rows = 32 + 8 = 40 chairs ✓' },
        { difficulty: 'Medium', question: 'A farmer plants seedlings in garden beds. Bed 1 has 6 seedlings, bed 2 has 10 seedlings, bed 3 has 14 seedlings, following the same rule each time. How many seedlings are planted in total across the first 4 beds?', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 seedlings'], explanation: 'The rule is add 4 seedlings each bed (10 − 6 = 4, 14 − 10 = 4). Bed 4 = 14 + 4 = 18.\nTotal = 6 + 10 + 14 + 18 = 48 seedlings ✓' },
        { difficulty: 'Medium', question: 'Palesa is threading beads onto a bracelet. Bracelet 1 has 5 beads, bracelet 2 has 9 beads, bracelet 3 has 13 beads. If the pattern continues, how many beads are on bracelet 6?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 beads'], explanation: 'The rule is add 4 beads each time (9 − 5 = 4, 13 − 9 = 4).\nBracelet 4 = 17, bracelet 5 = 21, bracelet 6 = 25 beads ✓' },
        { difficulty: 'Medium-Hard', question: 'Two cyclists start training on the same day. Cyclist A rides 3 km on day 1 and increases her distance by 4 km every day. Cyclist B rides 9 km on day 1 and increases his distance by 2 km every day. On which day do they ride exactly the same distance?', answer: 'day 4', checkMode: 'auto', correctAnswer: 'day4', correctAnswers: ['day 4', 'Day 4', '4'], explanation: 'Cyclist A: 3, 7, 11, 15, ... Cyclist B: 9, 11, 13, 15, ...\nDay 1: 3 vs 9. Day 2: 7 vs 11. Day 3: 11 vs 13. Day 4: 15 vs 15 — equal!\nThey ride the same distance on day 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'A gaming club tracks two high-score patterns. Pattern A starts at 1 point and doubles each round. Pattern B starts at 4 points and adds 4 points each round. Play out both patterns from round 1 to round 6, and explain at which round Pattern A overtakes Pattern B.', answer: 'Pattern A: 1, 2, 4, 8, 16, 32. Pattern B: 4, 8, 12, 16, 20, 24. At round 5, A = 16 is still less than B = 20. At round 6, A = 32 is greater than B = 24, so Pattern A overtakes Pattern B at round 6.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Two small businesses are tracking their weekly sales. Shop A sells 5 items in week 1 and 3 more each week after that. Shop B sells 2 items in week 1 and 5 more each week after that. Which shop reaches 32 items sold first?', answer: 'Shop B', checkMode: 'auto', correctAnswer: 'ShopB', correctAnswers: ['ShopB', 'Shop B', 'B'], explanation: 'Shop A: 5, 8, 11, 14, 17, 20, 23, 26, 29, 32 (reaches 32 at week 10).\nShop B: 2, 7, 12, 17, 22, 27, 32 (reaches 32 at week 7).\nShop B reaches 32 items first, at week 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two water tanks are filling up. Tank A starts with 10 litres and gains 5 litres every hour. Tank B starts with 4 litres and gains 7 litres every hour. After 6 hours, which tank holds more water, and by how much?', answer: 'Tank A: 10, 15, 20, 25, 30, 35 → 35 litres after 6 hours. Tank B: 4, 11, 18, 25, 32, 39 → 39 litres after 6 hours. Tank B holds more, by 4 litres.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho hands in his homework showing the pattern 4, 9, 14, 18, 23, and writes underneath: "My rule is add 5 each time." Mark his work — is he right? If not, pinpoint exactly which step breaks the rule.', answer: 'He is not entirely right. The rule breaks between step 3 and step 4: 14 to 18 is only +4, not +5. Every other pair (4→9, 9→14, 18→23) does add 5, so the pattern is inconsistent only at that one point.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says her pattern doubles each time: 3, 6, 12, 20, 40. Is this claim true for every step? Explain your reasoning by checking each pair of consecutive terms.', answer: 'No — from 12 to 20 is not doubling (12 × 2 = 24, not 20), so the rule breaks between step 3 and step 4. The other pairs (3→6, 6→12, 20→40) do double correctly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'You are setting up a number pattern for a class competition. It must start at 4 and add 6 at every step. Write out the first 5 values the class will see, and write the rule you used as a full sentence so the class can check their work.', answer: 'Values: 4, 10, 16, 22, 28. The rule is: start at 4 and add 6 each time.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A page has been torn from Zinhle\'s pattern notebook. All that survives is: the rule was "add 7 each time", and step 5 was 44. Recover the missing step 1 value.', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Going backwards from step 5 to step 1 means subtracting 7 four times: 44 − 7 = 37 (step 4), 37 − 7 = 30 (step 3), 30 − 7 = 23 (step 2), 23 − 7 = 16 (step 1).\nCheck: 16, 23, 30, 37, 44 — each term adds 7 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered identifying, describing and extending geometric patterns.' },
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
        { difficulty: 'Easy', question: 'A pattern goes: sun, cloud, sun, cloud, sun. What comes next?', answer: 'cloud', checkMode: 'auto', correctAnswer: 'cloud', correctAnswers: ['cloud', 'a cloud'], explanation: 'The pattern alternates between sun and cloud.\nPattern: sun, cloud, sun, cloud, sun, ...\nAfter sun comes cloud ✓' },
        { difficulty: 'Easy', question: 'Step 1 has 2 squares, step 2 has 5 squares, step 3 has 8 squares. How many squares are in step 4?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 squares'], explanation: 'From step 1 to 2: 5 − 2 = 3. From step 2 to 3: 8 − 5 = 3. The pattern adds 3 each time.\nStep 4 = 8 + 3 = 11 squares ✓' },
        { difficulty: 'Easy', question: 'Look at this shape pattern: diamond, diamond, circle, diamond, diamond, circle. What shape comes next?', answer: 'diamond', checkMode: 'auto', correctAnswer: 'diamond', correctAnswers: ['diamond', 'a diamond'], explanation: 'The repeating unit is diamond, diamond, circle (3 shapes). After the circle, the unit starts again.\nThe next shape is a diamond ✓' },
        { difficulty: 'Easy', question: 'A pattern of stars has 5 stars in step 1, 9 stars in step 2, 13 stars in step 3. How many stars are in step 4?', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', '17 stars'], explanation: 'From step 1 to 2: 9 − 5 = 4. From step 2 to 3: 13 − 9 = 4. The pattern adds 4 each time.\nStep 4 = 13 + 4 = 17 stars ✓' },
        { difficulty: 'Easy-Medium', question: 'Step 1 has 4 circles, step 2 has 9 circles, step 3 has 14 circles. State the rule, then find step 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 5 each time', explanation: 'From step 1 to 2: 9 − 4 = 5. From step 2 to 3: 14 − 9 = 5. The rule is: add 5 each time ✓' },
          { label: 'b) How many circles in step 5?', correctAnswer: '24', explanation: 'Step 4 = 14 + 5 = 19. Step 5 = 19 + 5 = 24 circles ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'A pattern starts at 30 and decreases: 30, 25, 20. Describe the rule in a full sentence, then find step 6.', answer: 'The rule is: start at 30 and subtract 5 each time. Step 6 = 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Row 1 has 7 blocks, row 2 has 12 blocks, row 3 has 17 blocks. Find the rule and use it to work out row 6.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 5 each time', explanation: 'From row 1 to 2: 12 − 7 = 5. From row 2 to 3: 17 − 12 = 5. The rule is: add 5 each time ✓' },
          { label: 'b) How many blocks in row 6?', correctAnswer: '32', explanation: 'Row 4 = 17 + 5 = 22. Row 5 = 22 + 5 = 27. Row 6 = 27 + 5 = 32 blocks ✓' },
        ] },
        { difficulty: 'Medium', question: 'Bongani says his pattern 6, 11, 16, 21 has the rule "add 5 each time". Explain in words why he is correct, and give the next term.', answer: 'He is correct because every consecutive pair increases by exactly 5: 11 − 6 = 5, 16 − 11 = 5, 21 − 16 = 5. The next term is 21 + 5 = 26.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A path is tiled with paving stones. Row 1 uses 4 stones, row 2 uses 8 stones, row 3 uses 12 stones. If this pattern continues, how many stones are needed for row 5?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 stones'], explanation: 'From row 1 to 2: 8 − 4 = 4. From row 2 to 3: 12 − 8 = 4. The rule is add 4 stones each time.\nRow 4 = 12 + 4 = 16. Row 5 = 16 + 4 = 20 stones ✓' },
        { difficulty: 'Medium', question: 'At a wedding venue, chairs are set out in rows. 1 row seats 6 chairs, 2 rows seat 12 chairs, 3 rows seat 18 chairs. How many chairs are needed for 5 rows?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 chairs'], explanation: 'Each extra row adds 6 chairs (12 − 6 = 6, 18 − 12 = 6). The rule is add 6 chairs per row.\n4 rows = 18 + 6 = 24. 5 rows = 24 + 6 = 30 chairs ✓' },
        { difficulty: 'Medium', question: 'A gardener plants seedlings in garden beds. Bed 1 has 8 seedlings, bed 2 has 13 seedlings, bed 3 has 18 seedlings, following the same rule each time. How many seedlings are planted in total across the first 4 beds?', answer: '62', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62 seedlings'], explanation: 'The rule is add 5 seedlings each bed (13 − 8 = 5, 18 − 13 = 5). Bed 4 = 18 + 5 = 23.\nTotal = 8 + 13 + 18 + 23 = 62 seedlings ✓' },
        { difficulty: 'Medium', question: 'Amahle is threading beads onto a bracelet. Bracelet 1 has 6 beads, bracelet 2 has 11 beads, bracelet 3 has 16 beads. If the pattern continues, how many beads are on bracelet 6?', answer: '31', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', '31 beads'], explanation: 'The rule is add 5 beads each time (11 − 6 = 5, 16 − 11 = 5).\nBracelet 4 = 21, bracelet 5 = 26, bracelet 6 = 31 beads ✓' },
        { difficulty: 'Medium-Hard', question: 'Two plants are being measured in centimetres. Plant A is 4 cm tall and grows 5 cm every week. Plant B is 14 cm tall and grows 2 cm every week. Track both plants from week 1 to week 5 — in which week does Plant A first become taller than Plant B?', answer: 'Plant A: 4, 9, 14, 19, 24. Plant B: 14, 16, 18, 20, 22. At week 4, A = 19 is still shorter than B = 20. At week 5, A = 24 is taller than B = 22, so Plant A first becomes taller in week 5.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Pattern A starts at 3 and doubles each time. Pattern B starts at 9 and adds 9 each time. At which step does Pattern A first overtake Pattern B?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'step 5'], explanation: 'Pattern A: 3, 6, 12, 24, 48, ... Pattern B: 9, 18, 27, 36, 45, ...\nStep 4: A = 24, B = 36 (A still smaller). Step 5: A = 48, B = 45 (A now bigger).\nPattern A first overtakes Pattern B at step 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two libraries are growing their book collections. Library A has 6 books and adds 4 books every month. Library B has 3 books and adds 7 books every month. Which library reaches 45 books first?', answer: 'Library B', checkMode: 'auto', correctAnswer: 'LibraryB', correctAnswers: ['LibraryB', 'Library B', 'B'], explanation: 'Library A: 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46 (passes 45 at month 11, landing on 46).\nLibrary B: 3, 10, 17, 24, 31, 38, 45 (reaches exactly 45 at month 7).\nLibrary B reaches 45 books first, at month 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two savings jars are filled on a weekly schedule. Jar A starts with R12 and R4 is added each week. Jar B starts with R3 and R8 is added each week. After 4 weeks, which jar holds more money, and by how much?', answer: 'Jar A: 12, 16, 20, 24 → R24 after week 4. Jar B: 3, 11, 19, 27 → R27 after week 4. Jar B holds more, by R3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo hands in his homework showing the pattern 5, 11, 17, 22, 28, and writes underneath: "My rule is add 6 each time." Mark his work — is he right? If not, pinpoint exactly which step breaks the rule.', answer: 'He is not entirely right. The rule breaks between step 3 and step 4: 17 to 22 is only +5, not +6. Every other pair (5→11, 11→17, 22→28) does add 6, so the pattern is inconsistent only at that one point.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says her pattern triples each time: 2, 6, 18, 48, 144. Is this claim true for every step? Explain your reasoning by checking each pair of consecutive terms.', answer: 'No — from 18 to 48 is not tripling (18 × 3 = 54, not 48), so the rule breaks between step 3 and step 4. The other pairs (2→6, 6→18, 48→144) do triple correctly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'You are setting up a number pattern for a class competition. It must start at 7 and add 4 at every step. Write out the first 5 values the class will see, and write the rule you used as a full sentence so the class can check their work.', answer: 'Values: 7, 11, 15, 19, 23. The rule is: start at 7 and add 4 each time.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A page has been torn from Kabelo\'s pattern notebook. All that survives is: the rule was "add 6 each time", and step 5 was 38. Recover the missing step 1 value.', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14'], explanation: 'Going backwards from step 5 to step 1 means subtracting 6 four times: 38 − 6 = 32 (step 4), 32 − 6 = 26 (step 3), 26 − 6 = 20 (step 2), 20 − 6 = 14 (step 1).\nCheck: 14, 20, 26, 32, 38 — each term adds 6 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently describe, extend and compare geometric patterns.' },
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
        { difficulty: 'Easy', question: 'A pattern goes: leaf, flower, leaf, flower, leaf. What comes next?', answer: 'flower', checkMode: 'auto', correctAnswer: 'flower', correctAnswers: ['flower', 'a flower'], explanation: 'The pattern alternates between leaf and flower.\nPattern: leaf, flower, leaf, flower, leaf, ...\nAfter leaf comes flower ✓' },
        { difficulty: 'Easy', question: 'Step 1 has 3 triangles, step 2 has 6 triangles, step 3 has 9 triangles. How many triangles are in step 4?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 triangles'], explanation: 'From step 1 to 2: 6 − 3 = 3. From step 2 to 3: 9 − 6 = 3. The pattern adds 3 each time.\nStep 4 = 9 + 3 = 12 triangles ✓' },
        { difficulty: 'Easy', question: 'Look at this shape pattern: square, circle, circle, square, circle, circle. What shape comes next?', answer: 'square', checkMode: 'auto', correctAnswer: 'square', correctAnswers: ['square', 'a square'], explanation: 'The repeating unit is square, circle, circle (3 shapes). After the second circle, the unit starts again.\nThe next shape is a square ✓' },
        { difficulty: 'Easy', question: 'A pattern of pentagons has 7 pentagons in step 1, 10 pentagons in step 2, 13 pentagons in step 3. How many pentagons are in step 4?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 pentagons'], explanation: 'From step 1 to 2: 10 − 7 = 3. From step 2 to 3: 13 − 10 = 3. The pattern adds 3 each time.\nStep 4 = 13 + 3 = 16 pentagons ✓' },
        { difficulty: 'Easy-Medium', question: 'Step 1 has 9 dots, step 2 has 15 dots, step 3 has 21 dots. State the rule, then find step 5.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 6 each time', explanation: 'From step 1 to 2: 15 − 9 = 6. From step 2 to 3: 21 − 15 = 6. The rule is: add 6 each time ✓' },
          { label: 'b) How many dots in step 5?', correctAnswer: '33', explanation: 'Step 4 = 21 + 6 = 27. Step 5 = 27 + 6 = 33 dots ✓' },
        ] },
        { difficulty: 'Easy-Medium', question: 'A pattern starts at 40 and decreases: 40, 34, 28. Describe the rule in a full sentence, then find step 6.', answer: 'The rule is: start at 40 and subtract 6 each time. Step 6 = 10.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Row 1 has 4 blocks, row 2 has 10 blocks, row 3 has 16 blocks. Find the rule and use it to work out row 6.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) What is the rule?', correctAnswer: 'add 6 each time', explanation: 'From row 1 to 2: 10 − 4 = 6. From row 2 to 3: 16 − 10 = 6. The rule is: add 6 each time ✓' },
          { label: 'b) How many blocks in row 6?', correctAnswer: '34', explanation: 'Row 4 = 16 + 6 = 22. Row 5 = 22 + 6 = 28. Row 6 = 28 + 6 = 34 blocks ✓' },
        ] },
        { difficulty: 'Medium', question: 'Lindiwe says her pattern 10, 17, 24, 31 has the rule "add 7 each time". Explain in words why she is correct, and give the next term.', answer: 'She is correct because every consecutive pair increases by exactly 7: 17 − 10 = 7, 24 − 17 = 7, 31 − 24 = 7. The next term is 31 + 7 = 38.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A path is tiled with paving stones. Row 1 uses 5 stones, row 2 uses 9 stones, row 3 uses 13 stones. If this pattern continues, how many stones are needed for row 5?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21 stones'], explanation: 'From row 1 to 2: 9 − 5 = 4. From row 2 to 3: 13 − 9 = 4. The rule is add 4 stones each time.\nRow 4 = 13 + 4 = 17. Row 5 = 17 + 4 = 21 stones ✓' },
        { difficulty: 'Medium', question: 'At a conference centre, chairs are set out in rows. 1 row seats 7 chairs, 2 rows seat 14 chairs, 3 rows seat 21 chairs. How many chairs are needed for 5 rows?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 chairs'], explanation: 'Each extra row adds 7 chairs (14 − 7 = 7, 21 − 14 = 7). The rule is add 7 chairs per row.\n4 rows = 21 + 7 = 28. 5 rows = 28 + 7 = 35 chairs ✓' },
        { difficulty: 'Medium', question: 'A farmer plants seedlings in garden beds. Bed 1 has 9 seedlings, bed 2 has 15 seedlings, bed 3 has 21 seedlings, following the same rule each time. How many seedlings are planted in total across the first 4 beds?', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 seedlings'], explanation: 'The rule is add 6 seedlings each bed (15 − 9 = 6, 21 − 15 = 6). Bed 4 = 21 + 6 = 27.\nTotal = 9 + 15 + 21 + 27 = 72 seedlings ✓' },
        { difficulty: 'Medium', question: 'Zanele is threading beads onto a bracelet. Bracelet 1 has 8 beads, bracelet 2 has 13 beads, bracelet 3 has 18 beads. If the pattern continues, how many beads are on bracelet 6?', answer: '33', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33', '33 beads'], explanation: 'The rule is add 5 beads each time (13 − 8 = 5, 18 − 13 = 5).\nBracelet 4 = 23, bracelet 5 = 28, bracelet 6 = 33 beads ✓' },
        { difficulty: 'Medium-Hard', question: 'Two runners are tracking their total distance in kilometres. Runner A has run 6 km and adds 4 km every session. Runner B has run 20 km and adds 1 km every session. Track both runners from session 1 to session 6 — in which session does Runner A first cover more distance than Runner B?', answer: 'Runner A: 6, 10, 14, 18, 22, 26. Runner B: 20, 21, 22, 23, 24, 25. At session 5, A = 22 is still less than B = 24. At session 6, A = 26 is more than B = 25, so Runner A first covers more distance in session 6.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Pattern A starts at 5 and doubles each time. Pattern B starts at 15 and adds 15 each time. At which step does Pattern A first overtake Pattern B?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'step 5'], explanation: 'Pattern A: 5, 10, 20, 40, 80, ... Pattern B: 15, 30, 45, 60, 75, ...\nStep 4: A = 40, B = 60 (A still smaller). Step 5: A = 80, B = 75 (A now bigger).\nPattern A first overtakes Pattern B at step 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two food gardens are recording their total harvest in kilograms. Garden A has picked 10 kg and adds 6 kg every week. Garden B has picked 4 kg and adds 9 kg every week. Which garden reaches a total of 58 kg first?', answer: 'Garden B', checkMode: 'auto', correctAnswer: 'GardenB', correctAnswers: ['GardenB', 'Garden B', 'B'], explanation: 'Garden A: 10, 16, 22, 28, 34, 40, 46, 52, 58 (reaches 58 kg at week 9).\nGarden B: 4, 13, 22, 31, 40, 49, 58 (reaches 58 kg at week 7).\nGarden B reaches 58 kg first, at week 7 ✓' },
        { difficulty: 'Medium-Hard', question: 'Two water tanks are being filled. Tank A starts with 8 litres and gains 6 litres every hour. Tank B starts with 2 litres and gains 9 litres every hour. After 3 hours, compare the two tanks — is one bigger, or are they equal?', answer: 'Tank A: 8, 14, 20 → 20 litres after 3 hours. Tank B: 2, 11, 20 → 20 litres after 3 hours. The two tanks hold exactly the same amount after 3 hours — they are equal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso hands in his homework showing the pattern 6, 13, 20, 26, 33, and writes underneath: "My rule is add 7 each time." Mark his work — is he right? If not, pinpoint exactly which step breaks the rule.', answer: 'He is not entirely right. The rule breaks between step 3 and step 4: 20 to 26 is only +6, not +7. Every other pair (6→13, 13→20, 26→33) does add 7, so the pattern is inconsistent only at that one point.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student says her pattern doubles each time: 4, 8, 16, 30, 60. Is this claim true for every step? Explain your reasoning by checking each pair of consecutive terms.', answer: 'No — from 16 to 30 is not doubling (16 × 2 = 32, not 30), so the rule breaks between step 3 and step 4. The other pairs (4→8, 8→16, 30→60) do double correctly.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'You are setting up a number pattern for a class competition. It must start at 9 and add 5 at every step. Write out the first 5 values the class will see, and write the rule you used as a full sentence so the class can check their work.', answer: 'Values: 9, 14, 19, 24, 29. The rule is: start at 9 and add 5 each time.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A page has been torn from Amahle\'s pattern notebook. All that survives is: the rule was "add 8 each time", and step 5 was 51. Recover the missing step 1 value.', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19'], explanation: 'Going backwards from step 5 to step 1 means subtracting 8 four times: 51 − 8 = 43 (step 4), 43 − 8 = 35 (step 3), 35 − 8 = 27 (step 2), 27 − 8 = 19 (step 1).\nCheck: 19, 27, 35, 43, 51 — each term adds 8 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply pattern rules confidently to real-world problems and comparisons.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
