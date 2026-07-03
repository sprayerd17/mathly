import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Sec 1 — pattern terms blue, differences orange, rule green
// Sec 2 — step numbers blue, pattern shapes green, algebraic rule orange
// Sec 3 — rule tested blue, verification steps orange, confirmed result green
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numeric and Geometric Patterns',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INVESTIGATING NUMERIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-numeric-patterns',
      title: 'Investigating Numeric Patterns',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">We investigate and extend <strong>numeric patterns</strong>, looking for relationships between numbers, not limited to constant difference or ratio. We describe and justify the <strong>general rule</strong> in our own words or in algebraic language.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('pattern terms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('differences')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key ideas</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Pattern terms</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The numbers in the sequence, labelled using their position n.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Differences</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The gaps between consecutive terms — look at how they change to spot the relationship.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">General rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An algebraic expression for the nth term that generates any term in the sequence.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategy: check the differences first</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the ${or('differences')} are <strong>constant</strong>, the rule is linear (like <em>an + b</em>). If the ${or('differences')} are <strong>increasing by a constant amount</strong>, the rule is quadratic (contains n²). Always test your ${gr('rule')} against at least three ${bl('pattern terms')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the rule for the pattern 3, 8, 15, 24.',
          answer: `nth term = ${gr('n² + 2n')}`,
          steps: [
            `Write out the ${bl('pattern terms')}: ${bl('3')}, ${bl('8')}, ${bl('15')}, ${bl('24')}.`,
            `Calculate the ${or('differences')}: ${or('5')}, ${or('7')}, ${or('9')} — the differences are ${or('increasing by 2')}, suggesting a <strong>square relationship</strong>.`,
            `Test ${gr('n² + 2n')}: n=1 gives 1+2=<strong>3</strong> ✓ · n=2 gives 4+4=<strong>8</strong> ✓ · n=3 gives 9+6=<strong>15</strong> ✓`,
            `<strong>Rule:</strong> nth term = ${gr('n² + 2n')}`,
          ],
        },
        {
          question: 'Sipho notices the pattern 1, 4, 9, 16 follows the rule n². Find the 10th term.',
          answer: `10th term = ${gr('100')}`,
          steps: [
            `Identify the ${gr('rule')}: nth term = ${gr('n²')}.`,
            `Substitute n = 10: 10² = ${gr('100')}.`,
            `<strong>Answer:</strong> The 10th term is ${gr('100')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern: 4, 9, 14, 19.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'The common difference is 5.\nNext term: 19 + 5 = 24 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the rule for the pattern 2, 5, 10, 17.',
          answer: 'n²+1',
          checkMode: 'auto',
          correctAnswer: 'n²+1',
          explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting a quadratic pattern.\nCheck n²+1: n=1: 1+1=2 ✓, n=2: 4+1=5 ✓, n=3: 9+1=10 ✓, n=4: 16+1=17 ✓\nRule: nth term = n²+1',
        },

        // ── Q6 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the next term in the pattern: 3, 6, 12, 24.',
          answer: '48',
          checkMode: 'auto',
          correctAnswer: '48',
          explanation: 'Each term is doubled: 3, 6, 12, 24 → next term: 24 × 2 = 48 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the rule for the pattern 7, 12, 17, 22.',
          answer: '5n+2',
          checkMode: 'auto',
          correctAnswer: '5n+2',
          explanation: 'Common difference is 5.\nCheck 5n+2: n=1: 5+2=7 ✓, n=2: 10+2=12 ✓, n=3: 15+2=17 ✓, n=4: 20+2=22 ✓\nRule: nth term = 5n+2',
        },

        // ── Q11 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Using the rule n²+3, find the 5th term of the pattern.',
          answer: '28',
          checkMode: 'auto',
          correctAnswer: '28',
          explanation: 'Substitute n=5: 5²+3 = 25+3 = 28 ✓',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A pattern starts 2, 7, 14, 23. Find the rule for the nth term.',
          answer: 'n²+2n-1',
          checkMode: 'auto',
          correctAnswer: 'n²+2n-1',
          explanation: 'Differences: 5, 7, 9 — increasing by 2, quadratic pattern.\nCheck n²+2n−1: n=1: 1+2−1=2 ✓, n=2: 4+4−1=7 ✓, n=3: 9+6−1=14 ✓, n=4: 16+8−1=23 ✓\nRule: nth term = n²+2n−1',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to investigate and extend numeric patterns, find differences and write the general rule using algebraic notation" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a numeric pattern with terms highlighted in blue, differences in orange and the derived rule in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-geometric-patterns',
      title: 'Investigating Geometric Patterns',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We investigate and extend <strong>geometric patterns</strong> represented in physical or diagram form, in tables, and represented algebraically using variables.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('step numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('pattern shapes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('algebraic rule')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Forms of representation</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Diagram form</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Patterns shown as drawings or arrangements of shapes that grow from one step to the next.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Table form</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A table linking the ${bl('step number')} to the number of ${gr('shapes')} at that step.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Algebraic rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An ${or('algebraic expression')} in n that gives the number of shapes at any step.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Build a table first</p>` +
        `<p style="margin:0;color:#166534;">Start by counting the ${gr('shapes')} at each ${bl('step')} and entering the values in a table. Then look for the pattern in the number sequence and write the ${or('algebraic rule')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A pattern of dots forms triangular numbers — 1, 3, 6, 10. Find the algebraic rule.',
          answer: `nth term = ${or('n(n+1)/2')}`,
          steps: [
            `Identify the ${gr('pattern shapes')}: ${bl('step 1')} = 1, ${bl('step 2')} = 3, ${bl('step 3')} = 6, ${bl('step 4')} = 10.`,
            `This is the <strong>triangular number sequence</strong>.`,
            `<strong>Rule:</strong> nth term = ${or('n(n+1)/2')}.`,
          ],
        },
        {
          question: "Lerato's pattern of squares has 4 squares in step 1, 9 in step 2, 16 in step 3. Find the rule and the 6th term.",
          answer: `Rule: ${or('(n+1)²')} · 6th term = ${gr('49')}`,
          steps: [
            `Record the ${gr('pattern shapes')}: ${bl('step 1')} = 4, ${bl('step 2')} = 9, ${bl('step 3')} = 16.`,
            `Notice that 4 = 2², 9 = 3², 16 = 4² — this follows <strong>(n+1)²</strong>.`,
            `<strong>Rule:</strong> nth term = ${or('(n+1)²')}.`,
            `6th term: (6+1)² = 7² = ${gr('49')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A geometric pattern of dots gives the sequence 1, 3, 6, 10. Find the rule for the nth term.',
          answer: 'n(n+1)/2',
          checkMode: 'auto',
          correctAnswer: 'n(n+1)/2',
          explanation: 'This is the triangular number sequence.\nCheck: n=1: 1(2)/2=1 ✓, n=2: 2(3)/2=3 ✓, n=3: 3(4)/2=6 ✓, n=4: 4(5)/2=10 ✓\nRule: nth term = n(n+1)/2',
        },

        // ── Q5 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's pattern of squares has 4 squares in step 1, 9 in step 2, 16 in step 3, and 25 in step 4. Find the rule and the 7th term.",
          answer: 'Rule: (n+1)². 7th term = (7+1)² = 64.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to investigate geometric patterns using diagrams and tables and write the algebraic rule for the nth term" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing triangular dot patterns at steps 1 to 4 with step numbers in blue, shapes in green and the algebraic rule in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — JUSTIFYING GENERAL RULES IN ALGEBRAIC LANGUAGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'justifying-general-rules',
      title: 'Justifying General Rules in Algebraic Language',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">We move beyond describing patterns in words to <strong>writing and justifying rules</strong> using algebraic notation, testing the rule against multiple terms in the pattern to confirm it works consistently.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rule tested')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verification steps')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('confirmed result')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to justify a rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Write the rule')} — State the algebraic expression clearly, e.g. 4n+1.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Substitute values')} — Replace n with 1, 2, 3 (and more if needed) and calculate each result.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Compare and confirm')} — Check each result against the actual term. If all match, the rule is ${gr('verified')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">One counterexample is enough to disprove</p>` +
        `<p style="margin:0;color:#991b1b;">If even <strong>one</strong> substitution gives the wrong term, the ${bl('rule')} is incorrect. You do not need to test every term — a single failure is sufficient to reject the rule.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo claims the rule for 5, 9, 13, 17 is 4n+1. Verify this for the first three terms.',
          answer: `${bl('Rule 4n+1')} is ${gr('verified')} for the first three terms`,
          steps: [
            `${bl('Rule to test:')} 4n+1.`,
            `${or('n=1:')} 4(1)+1 = 5 — actual term is 5. ${gr('✓')}`,
            `${or('n=2:')} 4(2)+1 = 9 — actual term is 9. ${gr('✓')}`,
            `${or('n=3:')} 4(3)+1 = 13 — actual term is 13. ${gr('✓')}`,
            `<strong>Conclusion:</strong> The rule is ${gr('verified')}.`,
          ],
        },
        {
          question: 'Amahle says the pattern 2, 6, 12, 20 follows the rule n(n+1). Check this for n=4.',
          answer: `${bl('Rule n(n+1)')} ${gr('holds for n=4')}`,
          steps: [
            `${bl('Rule to test:')} n(n+1).`,
            `${or('Substitute n=4:')} 4(4+1) = 4(5) = 20.`,
            `The actual 4th term is 20. ${gr('✓')}`,
            `<strong>Conclusion:</strong> The rule ${gr('holds for the 4th term')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the pattern 6, 11, 18, 27 follows the rule n²+n+4. Verify this for n=1 and n=2.',
          answer: 'n=1: 1+1+4=6 ✓. n=2: 4+2+4=10, but the actual term is 11. The rule does not hold — it is incorrect.',
          checkMode: 'self',
        },

        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Verify that the rule 3n+2 works for the pattern 5, 8, 11, 14 at n=3.',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes', 'YES'],
          explanation: 'Substitute n=3 into 3n+2: 3(3)+2 = 9+2 = 11.\nThe 3rd term of the pattern is 11 ✓\nThe rule holds at n=3.',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo claims the pattern 1, 8, 27, 64 follows the rule n³. Verify this for n=4.',
          answer: 'n³ = 4³ = 64 ✓. The rule is verified.',
          checkMode: 'self',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle says the rule for the pattern 0, 3, 8, 15 is n²−1. Verify this for n=1, n=2, and n=3.',
          answer: 'n=1: 1−1=0 ✓. n=2: 4−1=3 ✓. n=3: 9−1=8 ✓. The rule holds.',
          checkMode: 'self',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says doubling every term in a pattern always doubles the difference between terms. Is he correct? Explain with an example.',
          answer: 'Yes — for example the pattern 2, 4, 6, 8 has a difference of 2. Doubling gives 4, 8, 12, 16 with a difference of 4, which is double the original difference.',
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the 12th term of the pattern with rule n(n+2).',
          answer: '168',
          checkMode: 'auto',
          correctAnswer: '168',
          explanation: 'Substitute n=12: 12(12+2) = 12 × 14 = 168 ✓',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says the pattern 5, 14, 27, 44 follows the rule 2n²+n+2. Verify this for n=1 and n=4.',
          answer: 'n=1: 2+1+2=5 ✓. n=4: 32+4+2=38, but the actual term is 44. The rule is incorrect.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to justify an algebraic rule by substituting values and comparing with actual pattern terms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the verification process with the rule tested in blue, substitution steps in orange and confirmed results in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
    { minScore: 12, message: 'Great work! You have a strong understanding of patterns. Review any missed questions and aim for full marks.' },
    { minScore: 8, message: 'Good effort! Review the sections where you struggled and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again and try each section carefully.' },
  ],
}
