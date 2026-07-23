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
        'Short video showing how to investigate and extend numeric patterns, find differences and write the general rule using algebraic notation',

      diagramPlaceholder:
        'Diagram showing the numeric pattern 3, 8, 15, 24 with terms highlighted in blue, differences +5, +7, +9 in orange, and the derived rule n² + 2n in green',

      diagramSvg:
        '<svg viewBox="0 0 240 125" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="35" width="40" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="30" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="30" y="88" font-size="8" fill="#2563eb" text-anchor="middle">n = 1</text><rect x="70" y="35" width="40" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="90" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="90" y="88" font-size="8" fill="#2563eb" text-anchor="middle">n = 2</text><rect x="130" y="35" width="40" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="150" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="150" y="88" font-size="8" fill="#2563eb" text-anchor="middle">n = 3</text><rect x="190" y="35" width="40" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="210" y="60" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="210" y="88" font-size="8" fill="#2563eb" text-anchor="middle">n = 4</text><line x1="50" y1="55" x2="68" y2="55" stroke="#ea580c" stroke-width="2"/><text x="60" y="47" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">+5</text><line x1="110" y1="55" x2="128" y2="55" stroke="#ea580c" stroke-width="2"/><text x="120" y="47" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">+7</text><line x1="170" y1="55" x2="188" y2="55" stroke="#ea580c" stroke-width="2"/><text x="180" y="47" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">+9</text><text x="120" y="112" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Rule: nth term = n² + 2n</text></svg>',
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
        'Short video showing how to investigate geometric patterns using diagrams and tables and write the algebraic rule for the nth term',

      diagramPlaceholder:
        'Diagram showing triangular dot patterns at steps 1 to 4 (1, 3, 6, 10 dots) with step numbers in blue, dots in green and the algebraic rule n(n+1)/2 in orange',

      diagramSvg:
        '<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="80" r="4" fill="#16a34a"/><text x="30" y="100" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">n = 1</text><text x="30" y="112" font-size="8" fill="#374151" text-anchor="middle">1 dot</text><circle cx="85" cy="60" r="4" fill="#16a34a"/><circle cx="79" cy="74" r="4" fill="#16a34a"/><circle cx="91" cy="74" r="4" fill="#16a34a"/><text x="85" y="100" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">n = 2</text><text x="85" y="112" font-size="8" fill="#374151" text-anchor="middle">3 dots</text><circle cx="140" cy="50" r="4" fill="#16a34a"/><circle cx="134" cy="64" r="4" fill="#16a34a"/><circle cx="146" cy="64" r="4" fill="#16a34a"/><circle cx="128" cy="78" r="4" fill="#16a34a"/><circle cx="140" cy="78" r="4" fill="#16a34a"/><circle cx="152" cy="78" r="4" fill="#16a34a"/><text x="140" y="100" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">n = 3</text><text x="140" y="112" font-size="8" fill="#374151" text-anchor="middle">6 dots</text><circle cx="200" cy="40" r="4" fill="#16a34a"/><circle cx="194" cy="54" r="4" fill="#16a34a"/><circle cx="206" cy="54" r="4" fill="#16a34a"/><circle cx="188" cy="68" r="4" fill="#16a34a"/><circle cx="200" cy="68" r="4" fill="#16a34a"/><circle cx="212" cy="68" r="4" fill="#16a34a"/><circle cx="182" cy="82" r="4" fill="#16a34a"/><circle cx="194" cy="82" r="4" fill="#16a34a"/><circle cx="206" cy="82" r="4" fill="#16a34a"/><circle cx="218" cy="82" r="4" fill="#16a34a"/><text x="200" y="100" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">n = 4</text><text x="200" y="112" font-size="8" fill="#374151" text-anchor="middle">10 dots</text><text x="120" y="130" font-size="10.5" fill="#ea580c" font-weight="700" text-anchor="middle">Rule: nth term = n(n+1)/2</text></svg>',
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
        'Short video showing how to justify an algebraic rule by substituting values and comparing with actual pattern terms',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered numeric and geometric patterns.' },
    { minScore: 12, message: 'Great work! You have a strong understanding of patterns. Review any missed questions and aim for full marks.' },
    { minScore: 8, message: 'Good effort! Review the sections where you struggled and try again.' },
    { minScore: 0, message: 'Keep going — work through the study guide again and try each section carefully.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-3): Numeric sequences (next/missing term, linear & multiplicative)
    // Block 2 (4-7): Finding the general term algebraically (linear)
    // Block 3 (8-10): Quadratic/non-linear sequences (general term)
    // Block 4 (11-13): Geometric/growing patterns [DIAGRAM-FLAGGED]
    // Block 5 (14-16): Describing/extending patterns + error-spotting
    // Block 6 (17-19): Multi-step/real-world pattern word problems
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 5, 12, 19, 26, 33, ?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'The common difference is 7 (12−5=7, 19−12=7, 26−19=7, 33−26=7). Next term: 33 + 7 = 40 ✓' },
        { difficulty: 'Easy', question: 'A savings account starts at R2 400 and grows by R150 every month: R2 400, R2 550, R2 700, R2 850. How much will be in the account the next month?', answer: '3000', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', 'R3000', 'R3 000'], explanation: 'The rule is add R150 each time. R2 850 + R150 = R3 000 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 8, ?, 26, 35.', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17'], explanation: 'The known difference is 35 − 26 = 9, so the rule is add 9 each time. 8 + 9 = 17. Check: 26 − 17 = 9 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "multiply the term by 2, then add 3", starting at 4: 4, 11, 25, 53. What is the next term?', answer: '109', checkMode: 'auto', correctAnswer: '109', correctAnswers: ['109'], explanation: 'Apply the rule to 53: 53 × 2 = 106, then 106 + 3 = 109 ✓' },

        // ── Block 2: Finding the general term algebraically (linear) ────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 6, 10, 14, 18 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 4 each time', checkMode: 'self', answer: 'Start at 6 and add 4 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '4n+2', correctAnswers: ['4n+2', '4n + 2'], explanation: 'Common difference = 4. Substitute n=1: 4(1)+c=6 → c=2. Rule: nth term = 4n+2. Check: 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 5, 13, 21, 29.', answer: 'nth term = 8n − 3', checkMode: 'auto', correctAnswer: '8n-3', correctAnswers: ['8n-3', '8n − 3', 'nth term=8n-3', 'nth term = 8n − 3'], explanation: 'Common difference = 8. Substitute n=1: 8(1)+c=5 → c=−3. Rule: nth term = 8n − 3. Check: 8(2)−3=13 ✓, 8(3)−3=21 ✓, 8(4)−3=29 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 9, 16, 23, 30.\n\na) Find the nth term rule.\nb) Find the 25th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '7n+2', correctAnswers: ['7n+2', '7n + 2', 'nth term=7n+2'], explanation: 'Common difference = 7. Substitute n=1: 7(1)+c=9 → c=2. Rule: nth term = 7n+2. Check: 7(2)+2=16 ✓, 7(3)+2=23 ✓, 7(4)+2=30 ✓' },
          { label: 'b) 25th term', correctAnswer: '177', explanation: '7(25) + 2 = 175 + 2 = 177.' },
        ] },
        { difficulty: 'Hard', question: 'Thabo says the pattern 4, 9, 14, 19 has the rule nth term = 4n + 1. Test his rule against every term. Is he correct, and if not, what is the correct rule?', answer: 'Thabo is incorrect. Check n=1: 4(1)+1=5, not 4 ✗ — his rule fails from the very first term. The common difference is actually 5 (9−4=5, 14−9=5, 19−14=5), so the rule should start with 5n. Substituting n=1: 5(1)+c=4 → c=−1. The correct rule is nth term = 5n − 1. Check: 5(1)−1=4 ✓, 5(2)−1=9 ✓, 5(3)−1=14 ✓, 5(4)−1=19 ✓.', checkMode: 'self' },

        // ── Block 3: Quadratic/non-linear sequences (general term) ──────────
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 5, 8, 13, 20. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 15th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+4', correctAnswers: ['n²+4', 'n^2+4', 'nth term=n²+4'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+4: 1+4=5 ✓, 4+4=8 ✓, 9+4=13 ✓, 16+4=20 ✓' },
          { label: 'b) 15th term', correctAnswer: '229', explanation: '15² + 4 = 225 + 4 = 229.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern has terms 3, 10, 21, 36. The first differences are 7, 11, 15, and the second differences are constant at 4, so the nth term has the form 2n² + bn + c.\n\na) Find the nth term rule.\nb) Find the 10th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '2n²+n', correctAnswers: ['2n²+n', '2n^2+n', 'nth term=2n²+n'], explanation: 'Second difference = 4, so a = 4÷2 = 2. Substitute n=1 into 2n²+bn+c=3: 2+b+c=3. Substitute n=2 into 2n²+bn+c=10: 8+2b+c=10. Subtracting gives b=1, then c=0. Rule: nth term = 2n²+n. Check: 2(1)+1=3 ✓, 2(4)+2=10 ✓, 2(9)+3=21 ✓, 2(16)+4=36 ✓' },
          { label: 'b) 10th term', correctAnswer: '210', explanation: '2(10)² + 10 = 200 + 10 = 210.' },
        ] },
        { difficulty: 'Hard', question: 'Lerato says the pattern 2, 9, 20, 35 follows the rule nth term = n² + 2n − 1. Verify this for n = 1, 2, 3 and 4. If the rule is wrong, find the correct one.', answer: 'Check n=1: 1+2−1=2 ✓. Check n=2: 4+4−1=7, but the actual term is 9 ✗ — the rule fails from the second term, so it is incorrect. The first differences are 7, 11, 15, and the second difference is constant at 4, so a = 4÷2 = 2. Substituting n=1 into 2n²+bn+c=2: 2+b+c=2. Substituting n=2 into 2n²+bn+c=9: 8+2b+c=9. Subtracting gives b=1, then c=−1. The correct rule is nth term = 2n² + n − 1. Check: 2(1)+1−1=2 ✓, 2(4)+2−1=9 ✓, 2(9)+3−1=20 ✓, 2(16)+4−1=35 ✓.', checkMode: 'self' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of squares is built from matchsticks, as shown, with each new square joined to the previous one and sharing one side. Pattern 1 is a single square made of 4 matchsticks. Pattern 2 has two squares joined in a row, sharing one matchstick, using 7 matchsticks in total. Pattern 3 has three squares joined in a row, using 10 matchsticks in total. How many matchsticks are needed for Pattern 9?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 matchsticks'], explanation: 'The pattern increases by 3 matchsticks each time: 4, 7, 10 (differences of 3). Rule: matchsticks = 3n + 1. Check: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Pattern 9: 3(9)+1 = 27+1 = 28 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 sticks</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 sticks</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 sticks</text></svg>' },
        { difficulty: 'Medium', question: 'A pattern of tiles is arranged into a solid square grid, as shown. Pattern 1 is a 1×1 grid made of 1 tile. Pattern 2 is a 2×2 grid made of 4 tiles. Pattern 3 is a 3×3 grid made of 9 tiles. Find the rule for the number of tiles at pattern n, then use it to find the number of tiles in Pattern 7.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 tile</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 tiles</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 tiles</text></svg>', parts: [
          { label: 'a) Rule (tiles = ...)', correctAnswer: 'tiles = n²', correctAnswers: ['tiles = n²', 'tiles = n^2', 'n²', 'n^2'], explanation: 'Each pattern is a square grid of side n, so the total tiles equal n². Check: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Tiles in Pattern 7', correctAnswer: '49', explanation: '7² = 49 tiles.' },
        ] },
        { difficulty: 'Hard', question: 'A chain of hexagons is built from matchsticks, as shown, with each new hexagon joined to the previous one and sharing one side. Pattern 1 is a single hexagon made of 6 matchsticks. Pattern 2 has two hexagons joined in a row, sharing one matchstick, using 11 matchsticks in total. Pattern 3 has three hexagons joined in a row, using 16 matchsticks in total. Zinhle says Pattern 10 will need 52 matchsticks. Check her answer using the rule, and correct it if she is wrong.', answer: 'Zinhle is incorrect. The pattern increases by 5 matchsticks each time: 6, 11, 16 (differences of 5). Rule: matchsticks = 5n + 1. Check: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. For Pattern 10: 5(10)+1 = 50+1 = 51 matchsticks, not 52. Zinhle likely miscounted the shared matchsticks. The correct answer is 51 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 sticks</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 sticks</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 sticks</text></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 4, 10, 16, 22 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '28,34', correctAnswers: ['28,34', '28, 34'], explanation: 'Common difference = 6. 22+6=28, 28+6=34.' },
          { label: 'b) Rule in words', correctAnswer: 'add 6 each time', checkMode: 'self', answer: 'Start at 4 and add 6 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern decreases as follows: 50, 44, 38, 32. Describe the rule in words, then write the nth term algebraically.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'subtract 6 each time', checkMode: 'self', answer: 'Start at 50 and subtract 6 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '56-6n', correctAnswers: ['56-6n', '56 − 6n', '-6n+56', '−6n+56'], explanation: 'Common difference = −6. Substitute n=1: −6(1)+c=50 → c=56. Rule: nth term = 56 − 6n. Check: 56−6(2)=44 ✓, 56−6(3)=38 ✓, 56−6(4)=32 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Precious says the pattern 12, 19, 26, 33 has the rule nth term = 7n, because the common difference is 7. Test her rule against every term. Is she correct, and if not, what is the correct rule?', answer: 'Precious is incorrect. A common difference of 7 only fixes the coefficient of n — it does not guarantee the rule is 7n. Check n=1: 7(1)=7, not 12 ✗. Substituting n=1 into 7n+c=12 gives c=5. The correct rule is nth term = 7n + 5. Check: 7(1)+5=12 ✓, 7(2)+5=19 ✓, 7(3)+5=26 ✓, 7(4)+5=33 ✓.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world pattern word problems ────────────
        { difficulty: 'Medium-Hard', question: 'A phone contract costs R100 to activate, plus R20 per month, using the rule: cost = 20 × months + 100. Complete the table for 3, 6 and 10 months.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 3 months', correctAnswer: '160', explanation: '20 × 3 + 100 = 60 + 100 = 160' },
          { label: 'b) Cost for 6 months', correctAnswer: '220', explanation: '20 × 6 + 100 = 120 + 100 = 220' },
          { label: 'c) Cost for 10 months', correctAnswer: '300', explanation: '20 × 10 + 100 = 200 + 100 = 300' },
        ] },
        { difficulty: 'Hard', question: 'Using the phone contract rule cost = 20 × months + 100, after how many full months will the total cost first reach at least R400?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Set up: 20 × months + 100 ≥ 400, so 20 × months ≥ 300, giving months ≥ 15. Check: 14 months gives 20(14)+100 = 380 (too little). 15 months gives 20(15)+100 = 400 ✓. 15 months is the first to reach at least R400.' },
        { difficulty: 'Hard', question: 'Cans are stacked so the bottom row has 20 cans, and each row up has 3 fewer cans than the one below, following the rule: cans in row n = 23 − 3n.\n\na) How many cans are in row 5?\nb) Which row has exactly 2 cans?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cans in row 5', correctAnswer: '8', explanation: '23 − 3(5) = 23 − 15 = 8 cans.' },
          { label: 'b) Row number with 2 cans', correctAnswer: '7', explanation: 'Set up: 23 − 3 × row = 2. Subtract 23 from both sides: −3 × row = −21. Divide by −3: row = 7. Check: 23−3(7)=23−21=2 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, general term rules, quadratic patterns, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of numeric and geometric patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the general term, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 7, 15, 23, 31, 39, ?', answer: '47', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47'], explanation: 'The common difference is 8 (15−7=8, 23−15=8, 31−23=8, 39−31=8). Next term: 39 + 8 = 47 ✓' },
        { difficulty: 'Easy', question: 'A savings account starts at R1 800 and grows by R200 every month: R1 800, R2 000, R2 200, R2 400. How much will be in the account the next month?', answer: '2600', checkMode: 'auto', correctAnswer: '2600', correctAnswers: ['2600', 'R2600', 'R2 600'], explanation: 'The rule is add R200 each time. R2 400 + R200 = R2 600 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 10, ?, 32, 43.', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21'], explanation: 'The known difference is 43 − 32 = 11, so the rule is add 11 each time. 10 + 11 = 21. Check: 32 − 21 = 11 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "multiply the term by 2, then add 1", starting at 3: 3, 7, 15, 31. What is the next term?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63'], explanation: 'Apply the rule to 31: 31 × 2 = 62, then 62 + 1 = 63 ✓' },

        // ── Block 2: Finding the general term algebraically (linear) ────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 8, 13, 18, 23 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 5 each time', checkMode: 'self', answer: 'Start at 8 and add 5 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '5n+3', correctAnswers: ['5n+3', '5n + 3'], explanation: 'Common difference = 5. Substitute n=1: 5(1)+c=8 → c=3. Rule: nth term = 5n+3. Check: 5(2)+3=13 ✓, 5(3)+3=18 ✓, 5(4)+3=23 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 6, 17, 28, 39.', answer: 'nth term = 11n − 5', checkMode: 'auto', correctAnswer: '11n-5', correctAnswers: ['11n-5', '11n − 5', 'nth term=11n-5', 'nth term = 11n − 5'], explanation: 'Common difference = 11. Substitute n=1: 11(1)+c=6 → c=−5. Rule: nth term = 11n − 5. Check: 11(2)−5=17 ✓, 11(3)−5=28 ✓, 11(4)−5=39 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 11, 18, 25, 32.\n\na) Find the nth term rule.\nb) Find the 30th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '7n+4', correctAnswers: ['7n+4', '7n + 4', 'nth term=7n+4'], explanation: 'Common difference = 7. Substitute n=1: 7(1)+c=11 → c=4. Rule: nth term = 7n+4. Check: 7(2)+4=18 ✓, 7(3)+4=25 ✓, 7(4)+4=32 ✓' },
          { label: 'b) 30th term', correctAnswer: '214', explanation: '7(30) + 4 = 210 + 4 = 214.' },
        ] },
        { difficulty: 'Hard', question: 'Sipho says the pattern 7, 12, 17, 22 has the rule nth term = 5n. Test his rule against every term. Is he correct, and if not, what is the correct rule?', answer: 'Sipho is incorrect. Check n=1: 5(1)=5, not 7 ✗ — his rule fails from the very first term. The common difference is 5 (12−7=5, 17−12=5, 22−17=5), so the rule should start with 5n. Substituting n=1: 5(1)+c=7 → c=2. The correct rule is nth term = 5n + 2. Check: 5(1)+2=7 ✓, 5(2)+2=12 ✓, 5(3)+2=17 ✓, 5(4)+2=22 ✓.', checkMode: 'self' },

        // ── Block 3: Quadratic/non-linear sequences (general term) ──────────
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 6, 9, 14, 21. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 18th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+5', correctAnswers: ['n²+5', 'n^2+5', 'nth term=n²+5'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+5: 1+5=6 ✓, 4+5=9 ✓, 9+5=14 ✓, 16+5=21 ✓' },
          { label: 'b) 18th term', correctAnswer: '329', explanation: '18² + 5 = 324 + 5 = 329.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern has terms 4, 13, 26, 43. The first differences are 9, 13, 17, and the second differences are constant at 4, so the nth term has the form 2n² + bn + c.\n\na) Find the nth term rule.\nb) Find the 12th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '2n²+3n-1', correctAnswers: ['2n²+3n-1', '2n^2+3n-1', '2n²+3n−1', 'nth term=2n²+3n-1'], explanation: 'Second difference = 4, so a = 4÷2 = 2. Substitute n=1 into 2n²+bn+c=4: 2+b+c=4. Substitute n=2 into 2n²+bn+c=13: 8+2b+c=13. Subtracting gives b=3, then c=−1. Rule: nth term = 2n²+3n−1. Check: 2(1)+3−1=4 ✓, 2(4)+6−1=13 ✓, 2(9)+9−1=26 ✓, 2(16)+12−1=43 ✓' },
          { label: 'b) 12th term', correctAnswer: '323', explanation: '2(12)² + 3(12) − 1 = 288 + 36 − 1 = 323.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle says the pattern 1, 7, 17, 31 follows the rule nth term = n² + 3n − 3. Verify this for n = 1, 2, 3 and 4. If the rule is wrong, find the correct one.', answer: 'Check n=1: 1+3−3=1 ✓. Check n=2: 4+6−3=7 ✓. Check n=3: 9+9−3=15, but the actual term is 17 ✗ — the rule fails from the third term, so it is incorrect. The first differences are 6, 10, 14, and the second difference is constant at 4, so a = 4÷2 = 2. Substituting n=1 into 2n²+bn+c=1: 2+b+c=1. Substituting n=2 into 2n²+bn+c=7: 8+2b+c=7. Subtracting gives b=0, then c=−1. The correct rule is nth term = 2n² − 1. Check: 2(1)−1=1 ✓, 2(4)−1=7 ✓, 2(9)−1=17 ✓, 2(16)−1=31 ✓.', checkMode: 'self' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of squares is built from matchsticks, as shown, with each new square joined to the previous one and sharing one side. Pattern 1 is a single square made of 4 matchsticks. Pattern 2 has two squares joined in a row, sharing one matchstick, using 7 matchsticks in total. Pattern 3 has three squares joined in a row, using 10 matchsticks in total. How many matchsticks are needed for Pattern 13?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 matchsticks'], explanation: 'The pattern increases by 3 matchsticks each time: 4, 7, 10 (differences of 3). Rule: matchsticks = 3n + 1. Check: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Pattern 13: 3(13)+1 = 39+1 = 40 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 sticks</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 sticks</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 sticks</text></svg>' },
        { difficulty: 'Medium', question: 'A pattern of tiles is arranged into a solid square grid, as shown. Pattern 1 is a 1×1 grid made of 1 tile. Pattern 2 is a 2×2 grid made of 4 tiles. Pattern 3 is a 3×3 grid made of 9 tiles. Find the rule for the number of tiles at pattern n, then use it to find the number of tiles in Pattern 8.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 tile</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 tiles</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 tiles</text></svg>', parts: [
          { label: 'a) Rule (tiles = ...)', correctAnswer: 'tiles = n²', correctAnswers: ['tiles = n²', 'tiles = n^2', 'n²', 'n^2'], explanation: 'Each pattern is a square grid of side n, so the total tiles equal n². Check: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Tiles in Pattern 8', correctAnswer: '64', explanation: '8² = 64 tiles.' },
        ] },
        { difficulty: 'Hard', question: 'A chain of hexagons is built from matchsticks, as shown, with each new hexagon joined to the previous one and sharing one side. Pattern 1 is a single hexagon made of 6 matchsticks. Pattern 2 has two hexagons joined in a row, sharing one matchstick, using 11 matchsticks in total. Pattern 3 has three hexagons joined in a row, using 16 matchsticks in total. Kagiso says Pattern 12 will need 63 matchsticks. Check his answer using the rule, and correct it if he is wrong.', answer: 'Kagiso is incorrect. The pattern increases by 5 matchsticks each time: 6, 11, 16 (differences of 5). Rule: matchsticks = 5n + 1. Check: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. For Pattern 12: 5(12)+1 = 60+1 = 61 matchsticks, not 63. Kagiso likely miscounted the shared matchsticks. The correct answer is 61 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 sticks</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 sticks</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 sticks</text></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 5, 12, 19, 26 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '33,40', correctAnswers: ['33,40', '33, 40'], explanation: 'Common difference = 7. 26+7=33, 33+7=40.' },
          { label: 'b) Rule in words', correctAnswer: 'add 7 each time', checkMode: 'self', answer: 'Start at 5 and add 7 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern decreases as follows: 60, 53, 46, 39. Describe the rule in words, then write the nth term algebraically.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'subtract 7 each time', checkMode: 'self', answer: 'Start at 60 and subtract 7 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '67-7n', correctAnswers: ['67-7n', '67 − 7n', '-7n+67', '−7n+67'], explanation: 'Common difference = −7. Substitute n=1: −7(1)+c=60 → c=67. Rule: nth term = 67 − 7n. Check: 67−7(2)=53 ✓, 67−7(3)=46 ✓, 67−7(4)=39 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Bongani says the pattern 15, 23, 31, 39 has the rule nth term = 8n, because the common difference is 8. Test his rule against every term. Is he correct, and if not, what is the correct rule?', answer: 'Bongani is incorrect. A common difference of 8 only fixes the coefficient of n — it does not guarantee the rule is 8n. Check n=1: 8(1)=8, not 15 ✗. Substituting n=1 into 8n+c=15 gives c=7. The correct rule is nth term = 8n + 7. Check: 8(1)+7=15 ✓, 8(2)+7=23 ✓, 8(3)+7=31 ✓, 8(4)+7=39 ✓.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world pattern word problems ────────────
        { difficulty: 'Medium-Hard', question: 'An internet contract costs R150 to activate, plus R25 per month, using the rule: cost = 25 × months + 150. Complete the table for 3, 6 and 10 months.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 3 months', correctAnswer: '225', explanation: '25 × 3 + 150 = 75 + 150 = 225' },
          { label: 'b) Cost for 6 months', correctAnswer: '300', explanation: '25 × 6 + 150 = 150 + 150 = 300' },
          { label: 'c) Cost for 10 months', correctAnswer: '400', explanation: '25 × 10 + 150 = 250 + 150 = 400' },
        ] },
        { difficulty: 'Hard', question: 'Using the internet contract rule cost = 25 × months + 150, after how many full months will the total cost first reach at least R550?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Set up: 25 × months + 150 ≥ 550, so 25 × months ≥ 400, giving months ≥ 16. Check: 15 months gives 25(15)+150 = 525 (too little). 16 months gives 25(16)+150 = 550 ✓. 16 months is the first to reach at least R550.' },
        { difficulty: 'Hard', question: 'Cans are stacked so the bottom row has 24 cans, and each row up has 2 fewer cans than the one below, following the rule: cans in row n = 26 − 2n.\n\na) How many cans are in row 6?\nb) Which row has exactly 4 cans?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cans in row 6', correctAnswer: '14', explanation: '26 − 2(6) = 26 − 12 = 14 cans.' },
          { label: 'b) Row number with 4 cans', correctAnswer: '11', explanation: 'Set up: 26 − 2 × row = 4. Subtract 26 from both sides: −2 × row = −22. Divide by −2: row = 11. Check: 26−2(11)=26−22=4 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, general term rules, quadratic patterns, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of numeric and geometric patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the general term, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Sets 1 and 2, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // ── Block 1: Numeric sequences (next/missing term) ──────────────────
        { difficulty: 'Easy', question: 'Find the next term in the pattern: 9, 16, 23, 30, 37, ?', answer: '44', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44'], explanation: 'The common difference is 7 (16−9=7, 23−16=7, 30−23=7, 37−30=7). Next term: 37 + 7 = 44 ✓' },
        { difficulty: 'Easy', question: 'A debt starts at R3 200 and decreases by R250 every month: R3 200, R2 950, R2 700, R2 450. How much will be owed the next month?', answer: '2200', checkMode: 'auto', correctAnswer: '2200', correctAnswers: ['2200', 'R2200', 'R2 200'], explanation: 'The rule is subtract R250 each time. R2 450 − R250 = R2 200 ✓' },
        { difficulty: 'Easy-Medium', question: 'Find the missing term: 12, ?, 34, 45.', answer: '23', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23'], explanation: 'The known difference is 45 − 34 = 11, so the rule is add 11 each time. 12 + 11 = 23. Check: 34 − 23 = 11 ✓' },
        { difficulty: 'Medium', question: 'A pattern follows the rule "multiply the term by 3, then subtract 2", starting at 2: 2, 4, 10, 28. What is the next term?', answer: '82', checkMode: 'auto', correctAnswer: '82', correctAnswers: ['82'], explanation: 'Apply the rule to 28: 28 × 3 = 84, then 84 − 2 = 82 ✓' },

        // ── Block 2: Finding the general term algebraically (linear) ────────
        { difficulty: 'Medium', question: 'Describe the rule for the pattern 3, 8, 13, 18 in words, then write it algebraically as the nth term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'add 5 each time', checkMode: 'self', answer: 'Start at 3 and add 5 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '5n-2', correctAnswers: ['5n-2', '5n − 2'], explanation: 'Common difference = 5. Substitute n=1: 5(1)+c=3 → c=−2. Rule: nth term = 5n−2. Check: 5(2)−2=8 ✓, 5(3)−2=13 ✓, 5(4)−2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Find the nth term rule for the pattern 4, 15, 26, 37.', answer: 'nth term = 11n − 7', checkMode: 'auto', correctAnswer: '11n-7', correctAnswers: ['11n-7', '11n − 7', 'nth term=11n-7', 'nth term = 11n − 7'], explanation: 'Common difference = 11. Substitute n=1: 11(1)+c=4 → c=−7. Rule: nth term = 11n − 7. Check: 11(2)−7=15 ✓, 11(3)−7=26 ✓, 11(4)−7=37 ✓' },
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 6, 13, 20, 27.\n\na) Find the nth term rule.\nb) Find the 28th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '7n-1', correctAnswers: ['7n-1', '7n − 1', 'nth term=7n-1'], explanation: 'Common difference = 7. Substitute n=1: 7(1)+c=6 → c=−1. Rule: nth term = 7n−1. Check: 7(2)−1=13 ✓, 7(3)−1=20 ✓, 7(4)−1=27 ✓' },
          { label: 'b) 28th term', correctAnswer: '195', explanation: '7(28) − 1 = 196 − 1 = 195.' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula says the pattern 9, 14, 19, 24 has the rule nth term = 5n + 1. Test her rule against every term. Is she correct, and if not, what is the correct rule?', answer: 'Nomvula is incorrect. Check n=1: 5(1)+1=6, not 9 ✗ — her rule fails from the very first term. The common difference is 5 (14−9=5, 19−14=5, 24−19=5), so the rule should start with 5n. Substituting n=1: 5(1)+c=9 → c=4. The correct rule is nth term = 5n + 4. Check: 5(1)+4=9 ✓, 5(2)+4=14 ✓, 5(3)+4=19 ✓, 5(4)+4=24 ✓.', checkMode: 'self' },

        // ── Block 3: Quadratic/non-linear sequences (general term) ──────────
        { difficulty: 'Medium-Hard', question: 'A pattern has terms 7, 10, 15, 22. The differences are not constant, so this pattern is quadratic.\n\na) Find the nth term rule.\nb) Find the 16th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: 'n²+6', correctAnswers: ['n²+6', 'n^2+6', 'nth term=n²+6'], explanation: 'Differences: 3, 5, 7 — increasing by 2, suggesting n². Check n²+6: 1+6=7 ✓, 4+6=10 ✓, 9+6=15 ✓, 16+6=22 ✓' },
          { label: 'b) 16th term', correctAnswer: '262', explanation: '16² + 6 = 256 + 6 = 262.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern has terms 5, 16, 31, 50. The first differences are 11, 15, 19, and the second differences are constant at 4, so the nth term has the form 2n² + bn + c.\n\na) Find the nth term rule.\nb) Find the 11th term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nth term =', correctAnswer: '2n²+5n-2', correctAnswers: ['2n²+5n-2', '2n^2+5n-2', '2n²+5n−2', 'nth term=2n²+5n-2'], explanation: 'Second difference = 4, so a = 4÷2 = 2. Substitute n=1 into 2n²+bn+c=5: 2+b+c=5. Substitute n=2 into 2n²+bn+c=16: 8+2b+c=16. Subtracting gives b=5, then c=−2. Rule: nth term = 2n²+5n−2. Check: 2(1)+5−2=5 ✓, 2(4)+10−2=16 ✓, 2(9)+15−2=31 ✓, 2(16)+20−2=50 ✓' },
          { label: 'b) 11th term', correctAnswer: '295', explanation: '2(11)² + 5(11) − 2 = 242 + 55 − 2 = 295.' },
        ] },
        { difficulty: 'Hard', question: 'Sipho says the pattern 3, 12, 25, 42 follows the rule nth term = n² + 4n − 2. Verify this for n = 1, 2, 3 and 4. If the rule is wrong, find the correct one.', answer: 'Check n=1: 1+4−2=3 ✓. Check n=2: 4+8−2=10, but the actual term is 12 ✗ — the rule fails from the second term, so it is incorrect. The first differences are 9, 13, 17, and the second difference is constant at 4, so a = 4÷2 = 2. Substituting n=1 into 2n²+bn+c=3: 2+b+c=3. Substituting n=2 into 2n²+bn+c=12: 8+2b+c=12. Subtracting gives b=3, then c=−2. The correct rule is nth term = 2n² + 3n − 2. Check: 2(1)+3−2=3 ✓, 2(4)+6−2=12 ✓, 2(9)+9−2=25 ✓, 2(16)+12−2=42 ✓.', checkMode: 'self' },

        // ── Block 4: Geometric/growing patterns [DIAGRAM-FLAGGED] ───────────
        { difficulty: 'Medium', question: 'A pattern of squares is built from matchsticks, as shown, with each new square joined to the previous one and sharing one side. Pattern 1 is a single square made of 4 matchsticks. Pattern 2 has two squares joined in a row, sharing one matchstick, using 7 matchsticks in total. Pattern 3 has three squares joined in a row, using 10 matchsticks in total. How many matchsticks are needed for Pattern 7?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 matchsticks'], explanation: 'The pattern increases by 3 matchsticks each time: 4, 7, 10 (differences of 3). Rule: matchsticks = 3n + 1. Check: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Pattern 7: 3(7)+1 = 21+1 = 22 matchsticks ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 sticks</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 sticks</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 sticks</text></svg>' },
        { difficulty: 'Medium', question: 'A pattern of tiles is arranged into a solid square grid, as shown. Pattern 1 is a 1×1 grid made of 1 tile. Pattern 2 is a 2×2 grid made of 4 tiles. Pattern 3 is a 3×3 grid made of 9 tiles. Find the rule for the number of tiles at pattern n, then use it to find the number of tiles in Pattern 6.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 tile</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 tiles</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 tiles</text></svg>', parts: [
          { label: 'a) Rule (tiles = ...)', correctAnswer: 'tiles = n²', correctAnswers: ['tiles = n²', 'tiles = n^2', 'n²', 'n^2'], explanation: 'Each pattern is a square grid of side n, so the total tiles equal n². Check: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Tiles in Pattern 6', correctAnswer: '36', explanation: '6² = 36 tiles.' },
        ] },
        { difficulty: 'Hard', question: 'A chain of hexagons is built from matchsticks, as shown, with each new hexagon joined to the previous one and sharing one side. Pattern 1 is a single hexagon made of 6 matchsticks. Pattern 2 has two hexagons joined in a row, sharing one matchstick, using 11 matchsticks in total. Pattern 3 has three hexagons joined in a row, using 16 matchsticks in total. Themba says Pattern 9 will need 47 matchsticks. Check his answer using the rule, and correct it if he is wrong.', answer: 'Themba is incorrect. The pattern increases by 5 matchsticks each time: 6, 11, 16 (differences of 5). Rule: matchsticks = 5n + 1. Check: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. For Pattern 9: 5(9)+1 = 45+1 = 46 matchsticks, not 47. Themba likely miscounted the shared matchsticks. The correct answer is 46 matchsticks.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 sticks</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 sticks</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Pattern 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 sticks</text></svg>' },

        // ── Block 5: Describing/extending patterns + error-spotting ─────────
        { difficulty: 'Medium', question: 'Extend the pattern 3, 9, 15, 21 by writing the next two terms, and describe the rule in words.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Next two terms', correctAnswer: '27,33', correctAnswers: ['27,33', '27, 33'], explanation: 'Common difference = 6. 21+6=27, 27+6=33.' },
          { label: 'b) Rule in words', correctAnswer: 'add 6 each time', checkMode: 'self', answer: 'Start at 3 and add 6 each time to get the next term.' },
        ] },
        { difficulty: 'Hard', question: 'A pattern decreases as follows: 45, 38, 31, 24. Describe the rule in words, then write the nth term algebraically.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Rule in words', correctAnswer: 'subtract 7 each time', checkMode: 'self', answer: 'Start at 45 and subtract 7 each time to get the next term.' },
          { label: 'b) nth term =', correctAnswer: '52-7n', correctAnswers: ['52-7n', '52 − 7n', '-7n+52', '−7n+52'], explanation: 'Common difference = −7. Substitute n=1: −7(1)+c=45 → c=52. Rule: nth term = 52 − 7n. Check: 52−7(2)=38 ✓, 52−7(3)=31 ✓, 52−7(4)=24 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula says the pattern 10, 17, 24, 31 has the rule nth term = 7n, because the common difference is 7. Test her rule against every term. Is she correct, and if not, what is the correct rule?', answer: 'Nomvula is incorrect. A common difference of 7 only fixes the coefficient of n — it does not guarantee the rule is 7n. Check n=1: 7(1)=7, not 10 ✗. Substituting n=1 into 7n+c=10 gives c=3. The correct rule is nth term = 7n + 3. Check: 7(1)+3=10 ✓, 7(2)+3=17 ✓, 7(3)+3=24 ✓, 7(4)+3=31 ✓.', checkMode: 'self' },

        // ── Block 6: Multi-step/real-world pattern word problems ────────────
        { difficulty: 'Medium-Hard', question: 'A streaming subscription costs R200 to activate, plus R15 per month, using the rule: cost = 15 × months + 200. Complete the table for 3, 6 and 10 months.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cost for 3 months', correctAnswer: '245', explanation: '15 × 3 + 200 = 45 + 200 = 245' },
          { label: 'b) Cost for 6 months', correctAnswer: '290', explanation: '15 × 6 + 200 = 90 + 200 = 290' },
          { label: 'c) Cost for 10 months', correctAnswer: '350', explanation: '15 × 10 + 200 = 150 + 200 = 350' },
        ] },
        { difficulty: 'Hard', question: 'Using the streaming subscription rule cost = 15 × months + 200, after how many full months will the total cost first reach at least R470?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Set up: 15 × months + 200 ≥ 470, so 15 × months ≥ 270, giving months ≥ 18. Check: 17 months gives 15(17)+200 = 455 (too little). 18 months gives 15(18)+200 = 470 ✓. 18 months is the first to reach at least R470.' },
        { difficulty: 'Hard', question: 'Cans are stacked so the bottom row has 30 cans, and each row up has 4 fewer cans than the one below, following the rule: cans in row n = 34 − 4n.\n\na) How many cans are in row 4?\nb) Which row has exactly 6 cans?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Cans in row 4', correctAnswer: '18', explanation: '34 − 4(4) = 34 − 16 = 18 cans.' },
          { label: 'b) Row number with 6 cans', correctAnswer: '7', explanation: 'Set up: 34 − 4 × row = 6. Subtract 34 from both sides: −4 × row = −28. Divide by −4: row = 7. Check: 34−4(7)=34−28=6 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered numeric sequences, general term rules, quadratic patterns, and geometric patterns — a perfect score!' },
        { minScore: 15, message: 'Great work! You have a strong grasp of numeric and geometric patterns. Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on finding the general term, then try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set. You will get there!' },
      ],
    },
  ],
}
