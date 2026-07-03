import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (patterns roles) ─────────────────────────────────────────
// differences     → red     (#dc2626)
// pattern terms   → blue    (#2563eb)
// missing terms   → green   (#16a34a)
// rule            → orange  (#ea580c)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Patterns and Functions',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NUMERIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'numeric-patterns',
      title: 'Numeric Patterns',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>numeric pattern</strong> is a sequence of numbers that follow a rule. To find the rule we look at how the numbers change from one term to the next. The rule can involve adding, subtracting, multiplying or dividing by a fixed number. In Grade 6 we also work with patterns that involve two operations — for example <em>multiply by 2 then add 1</em>. We describe the rule in words and use it to extend the pattern and find missing terms.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('pattern terms')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('missing terms')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('differences')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Each number in the sequence. The first number is called the 1st term, the second is the 2nd term, and so on.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The operation (or operations) applied to get from one term to the next. Describe it in words, e.g. "add 4 each time".</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Difference</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of subtracting consecutive terms. A constant difference means the rule involves adding or subtracting a fixed number.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Missing term</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A term that has been left out of the sequence. Use the rule to calculate and fill it in.</p>` +
        `</div>` +

        `</div>` +

        // ── Types of rules ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Adding a fixed number</strong> — each term increases by the same amount. The ${re('differences')} between consecutive terms are all equal. Example: ${bl('2')}, ${bl('5')}, ${bl('8')}, ${bl('11')} — ${or('rule: add 3')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Subtracting a fixed number</strong> — each term decreases by the same amount. Example: ${bl('20')}, ${bl('15')}, ${bl('10')}, ${bl('5')} — ${or('rule: subtract 5')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Multiplying by a fixed number</strong> — each term is multiplied by the same number. Divide consecutive terms to check: the result is always the same. Example: ${bl('3')}, ${bl('9')}, ${bl('27')}, ${bl('81')} — ${or('rule: multiply by 3')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Two-operation rules (Grade 6)</strong> — the rule uses two operations in sequence. Example: ${bl('1')}, ${bl('3')}, ${bl('7')}, ${bl('15')} — ${or('rule: multiply by 2, then add 1')}. Always test your rule on two or more steps before using it to extend the pattern.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to find the rule</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Find the ${re('differences')} between consecutive terms (subtract each term from the next).<br><strong>Step 2</strong> — If the ${re('differences')} are equal, the ${or('rule')} is <em>add</em> or <em>subtract</em> that number. If not, try dividing consecutive terms to see if the ratio is constant (multiply/divide rule).<br><strong>Step 3</strong> — Describe the ${or('rule')} in words and test it on all given terms before extending the pattern.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Find the rule and the next three terms: ${bl('3')}, ${bl('7')}, ${bl('11')}, ${bl('15')}`,
          answer: `${or('Rule: add 4 each time.')} Next three terms: ${bl('19')}, ${bl('23')}, ${bl('27')}`,
          steps: [
            `Find the ${re('difference')} between consecutive terms: ${re('7 − 3 = 4')}, ${re('11 − 7 = 4')}, ${re('15 − 11 = 4')}.`,
            `The ${re('differences')} are all equal to 4. The ${or('rule is: add 4 each time')}.`,
            `Extend the pattern using the ${or('rule')}:<br>${bl('15')} + 4 = ${bl('19')},&nbsp; ${bl('19')} + 4 = ${bl('23')},&nbsp; ${bl('23')} + 4 = ${bl('27')}.`,
            `<strong>Answer:</strong> The next three terms are ${bl('19')}, ${bl('23')}, ${bl('27')}. ✓`,
          ],
        },
        {
          question: `Find the rule and the next three terms: ${bl('2')}, ${bl('6')}, ${bl('18')}, ${bl('54')}`,
          answer: `${or('Rule: multiply by 3 each time.')} Next three terms: ${bl('162')}, ${bl('486')}, ${bl('1 458')}`,
          steps: [
            `Find the ${re('differences')}: ${re('6 − 2 = 4')}, ${re('18 − 6 = 12')}, ${re('54 − 18 = 36')}. The differences are not equal, so this is not an adding rule.`,
            `Try dividing consecutive terms: ${re('6 ÷ 2 = 3')}, ${re('18 ÷ 6 = 3')}, ${re('54 ÷ 18 = 3')}. The ratio is always 3. The ${or('rule is: multiply by 3 each time')}.`,
            `Extend the pattern using the ${or('rule')}:<br>${bl('54')} × 3 = ${bl('162')},&nbsp; ${bl('162')} × 3 = ${bl('486')},&nbsp; ${bl('486')} × 3 = ${bl('1 458')}.`,
            `<strong>Answer:</strong> The next three terms are ${bl('162')}, ${bl('486')}, ${bl('1 458')}. ✓`,
          ],
        },
        {
          question: `Find the missing terms: ${bl('5')}, ${bl('11')}, ${gr('?')}, ${bl('23')}, ${gr('?')}, ${bl('35')}`,
          answer: `${or('Rule: add 6 each time.')} Missing terms: ${gr('17')} and ${gr('29')}`,
          steps: [
            `Find the ${re('difference')} between the first two known terms: ${re('11 − 5 = 6')}.`,
            `Apply the ${or('rule: add 6')}: next term = ${bl('11')} + 6 = ${gr('17')}. Check: ${re('23 − 17 = 6')} ✓ — the difference is still 6.`,
            `Find the second missing term: ${bl('23')} + 6 = ${gr('29')}. Check: ${re('35 − 29 = 6')} ✓ — the difference is still 6.`,
            `<strong>Answer:</strong> The ${or('rule is: add 6 each time')}. The missing terms are ${gr('17')} and ${gr('29')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line or table showing the three worked example patterns with differences marked in red between consecutive terms and missing terms highlighted in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the rule in a numeric pattern and use it to extend the sequence and fill in missing terms" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometric-patterns',
      title: 'Geometric Patterns',
      icon: '🔷',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>geometric pattern</strong> uses shapes that grow or change according to a rule. We can represent geometric patterns using <strong>tables of values</strong> to show how the number of shapes changes at each step. From the table we can find the rule and use it to predict any step without drawing all the shapes. In Grade 6 we connect geometric patterns to numeric patterns and begin writing rules using <strong>variables</strong>.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('step numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('pattern values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('prediction')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Step number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The position in the pattern — step 1, step 2, step 3, and so on. This is the input value in the rule.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Pattern value</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number of shapes at each step — the output value. We record these in a table to spot the rule.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The relationship between the step number and the pattern value. We write it using a variable, e.g. <em>value = 2 × step + 1</em>.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Prediction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Using the rule to find the value at any step without drawing all the shapes — even step 100 or step 1 000.</p>` +
        `</div>` +

        `</div>` +

        // ── How to work with geometric patterns ──────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to analyse a geometric pattern</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Draw a table</strong> — Record the ${bl('step number')} in the top row and the ${gr('pattern value')} (number of shapes) in the bottom row for each step given.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find differences</strong> — Subtract consecutive ${gr('pattern values')} to find how the pattern grows. A constant difference means the ${or('rule')} involves adding each time.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Write the rule</strong> — Express the ${or('rule')} using the ${bl('step number')} as a variable. Test it on at least two steps before using it.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Make a prediction</strong> — Substitute the required ${bl('step number')} into the ${or('rule')} to get the ${re('predicted value')} without drawing the shapes.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Connecting geometric and numeric patterns</p>` +
        `<p style="margin:0;color:#1e3a8a;">Every geometric pattern produces a numeric sequence. Once you have the ${gr('pattern values')} in a table, apply the same skills you used for numeric patterns to find the ${or('rule')} — check differences, check ratios, or look for a relationship between the ${bl('step number')} and the ${gr('value')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Squares — quadratic pattern ───────────────────────────
        {
          question: 'A pattern of squares grows as follows — step 1 has 1 square, step 2 has 4 squares, step 3 has 9 squares. Find the rule and predict step 5.',
          answer: `${or('Rule: number of squares = step number².')} ${re('Step 5 = 25 squares.')}`,
          steps: [
            `Make a table of values:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Step number</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Number of squares</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('1')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('4')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('9')}</td></tr></table></div>`,
            `Look for a pattern: ${gr('1')} = ${bl('1')}², ${gr('4')} = ${bl('2')}², ${gr('9')} = ${bl('3')}². Each ${gr('pattern value')} equals the ${bl('step number')} multiplied by itself.`,
            `Write the ${or('rule')}: ${or('number of squares = step number × step number')} — or using a variable: ${or('value = n²')} where n is the step number.`,
            `${re('Predict step 5:')} Substitute ${bl('n = 5')} into the rule: ${re('5² = 5 × 5 = 25')}. ${re('Step 5 has 25 squares.')} ✓`,
          ],
        },

        // ── Example 2: Triangles — linear pattern ─────────────────────────
        {
          question: 'A pattern of triangles — step 1 has 3 triangles, step 2 has 5, step 3 has 7. Find the rule and predict step 10.',
          answer: `${or('Rule: number of triangles = 2 × step + 1.')} ${re('Step 10 = 21 triangles.')}`,
          steps: [
            `Make a table of values:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Step number</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Number of triangles</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('3')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('5')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td></tr></table></div>`,
            `Find the differences between consecutive ${gr('pattern values')}: ${gr('5')} − ${gr('3')} = 2, ${gr('7')} − ${gr('5')} = 2. The difference is <strong>always 2</strong>, so the rule involves adding 2 each time (linear pattern).`,
            `Write the ${or('rule')}: start at 3 and add 2 each step. Using a variable: ${or('value = 2 × n + 1')} where n is the step number. Check: ${bl('n = 1')} → ${gr('2 × 1 + 1 = 3')} ✓, ${bl('n = 2')} → ${gr('2 × 2 + 1 = 5')} ✓, ${bl('n = 3')} → ${gr('2 × 3 + 1 = 7')} ✓.`,
            `${re('Predict step 10:')} Substitute ${bl('n = 10')} into the rule: ${re('2 × 10 + 1 = 21')}. ${re('Step 10 has 21 triangles.')} ✓`,
          ],
        },

        // ── Example 3: Matches — linear pattern with real-world context ──────
        {
          question: 'Sipho builds a pattern using matches — step 1 needs 4 matches, step 2 needs 7, step 3 needs 10. How many matches for step 20?',
          answer: `${or('Rule: matches = 3 × step + 1.')} ${re('Step 20 = 61 matches.')}`,
          steps: [
            `Make a table of values:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:260px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Step number</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('1')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Number of matches</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('4')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('10')}</td></tr></table></div>`,
            `Find the differences: ${gr('7')} − ${gr('4')} = 3, ${gr('10')} − ${gr('7')} = 3. The difference is <strong>always 3</strong>, so the rule involves adding 3 each step.`,
            `Write the ${or('rule')}: the pattern adds 3 each step and starts at 4 for step 1. Using a variable: ${or('matches = 3 × n + 1')} where n is the step number. Check: ${bl('n = 1')} → ${gr('3 × 1 + 1 = 4')} ✓, ${bl('n = 2')} → ${gr('3 × 2 + 1 = 7')} ✓, ${bl('n = 3')} → ${gr('3 × 3 + 1 = 10')} ✓.`,
            `${re('Predict step 20:')} Substitute ${bl('n = 20')} into the rule: ${re('3 × 20 + 1 = 60 + 1 = 61')}. ${re('Sipho needs 61 matches for step 20.')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three-column visual showing step 1 step 2 step 3 for each of the three geometric patterns — squares triangles and match shapes — with tables of values below each pattern and differences marked between the pattern values" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to build a table of values from a geometric pattern find the rule using differences and use the rule to predict any step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INPUT AND OUTPUT TABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-output-tables',
      title: 'Input and Output Tables',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>function machine</strong> takes an ${bl('input')} number, applies a ${or('rule')} and gives an ${gr('output')} number. We can show this using an <strong>input and output table</strong>. The ${or('rule')} is applied the same way to every ${bl('input')} value. To find the ${or('rule')} we look at how the ${gr('output')} relates to the ${bl('input')} — we try adding, subtracting, multiplying or dividing. Once we know the ${or('rule')} we can find the ${gr('output')} for any ${bl('input')} and the ${bl('input')} for any ${gr('output')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('input')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('output')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rule')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Input</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The starting number that goes into the function machine. You choose the input value.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Output</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result that comes out after the rule is applied to the input. The output depends on the input and the rule.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The operation or combination of operations applied to every input to produce the output. The same rule applies to all pairs.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Unknown</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A missing input or output value that you need to calculate using the rule.</p>` +
        `</div>` +

        `</div>` +

        // ── How to find the rule ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to find the rule</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Try simple operations first</strong> — Check if the ${or('rule')} is just adding, subtracting, multiplying or dividing a fixed number. Subtract the ${bl('input')} from the ${gr('output')} for every pair — if the result is always the same, the ${or('rule')} is <em>add that number</em>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Try two-operation rules</strong> — If a single operation does not work, try <em>multiply the input by a number, then add or subtract a fixed number</em>. Write it as: ${or('output = a × input + b')} and solve for a and b.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Test on every pair</strong> — Once you have a ${or('rule')}, check it against <em>every</em> input-output pair in the table. If it works for all of them, the ${or('rule')} is correct.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Use the rule to find unknowns</strong> — Substitute a known ${bl('input')} to find the ${re('unknown')} ${gr('output')}, or work backwards from a known ${gr('output')} to find the ${re('unknown')} ${bl('input')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Function machines and patterns</p>` +
        `<p style="margin:0;color:#1e3a8a;">An input-output table is really a way of showing a function rule in action. Every ${bl('input')} value maps to exactly one ${gr('output')} value through the ${or('rule')} — this is what makes it a <strong>function</strong>. The same skills you used to find rules in numeric and geometric patterns apply here.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Find the rule ─────────────────────────────────────────
        {
          question: `Find the rule for this input-output table:<br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:300px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Input</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('2')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('4')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('6')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('8')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Output</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('7')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('13')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('19')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('25')}</td></tr></table></div>`,
          answer: `${or('Rule: output = 3 × input + 1')}`,
          steps: [
            `Look at the relationship between ${bl('input')} and ${gr('output')}. Try constant subtraction: ${gr('7')} − ${bl('2')} = 5, ${gr('13')} − ${bl('4')} = 9 — not constant. Try dividing: ${gr('7')} ÷ ${bl('2')} = 3.5 — not a clean number.`,
            `Try ${or('2 × input + something')}: 2 × ${bl('2')} = 4, ${gr('7')} − 4 = 3. Check: 2 × ${bl('4')} = 8, 8 + 3 = 11 — not ${gr('13')}. This rule does not work.`,
            `Try ${or('3 × input')}: 3 × ${bl('2')} = 6, ${gr('7')} − 6 = 1. Test the constant: ${or('output = 3 × input + 1')}.`,
            `Check: 3 × ${bl('4')} = 12, 12 + 1 = ${gr('13')} ✓. Check: 3 × ${bl('6')} = 18, 18 + 1 = ${gr('19')} ✓. Check: 3 × ${bl('8')} = 24, 24 + 1 = ${gr('25')} ✓.`,
            `<strong>Answer:</strong> ${or('Rule: output = 3 × input + 1')} ✓`,
          ],
        },

        // ── Example 2: Complete the table ────────────────────────────────────
        {
          question: `Using the ${or('rule: output = 4 × input − 2')}, complete the table for inputs ${bl('3')}, ${bl('5')}, ${bl('7')}, ${bl('10')}.`,
          answer: `${bl('3')} → ${gr('10')}, &nbsp; ${bl('5')} → ${gr('18')}, &nbsp; ${bl('7')} → ${gr('26')}, &nbsp; ${bl('10')} → ${gr('38')}`,
          steps: [
            `${bl('Input 3')}: 4 × ${bl('3')} − 2 = 12 − 2 = ${gr('10')}.`,
            `${bl('Input 5')}: 4 × ${bl('5')} − 2 = 20 − 2 = ${gr('18')}.`,
            `${bl('Input 7')}: 4 × ${bl('7')} − 2 = 28 − 2 = ${gr('26')}.`,
            `${bl('Input 10')}: 4 × ${bl('10')} − 2 = 40 − 2 = ${gr('38')}.`,
            `<strong>Completed table:</strong><br><div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;min-width:340px;font-size:14px;"><tr style="background:#eff6ff;"><td style="padding:6px 14px;border:1.5px solid #bfdbfe;font-weight:700;color:#2563eb;">Input</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('3')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('5')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('7')}</td><td style="padding:6px 14px;border:1.5px solid #bfdbfe;text-align:center;font-weight:700;color:#2563eb;">${bl('10')}</td></tr><tr style="background:#f0fdf4;"><td style="padding:6px 14px;border:1.5px solid #bbf7d0;font-weight:700;color:#16a34a;">Output</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('10')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('18')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('26')}</td><td style="padding:6px 14px;border:1.5px solid #bbf7d0;text-align:center;font-weight:700;color:#16a34a;">${gr('38')}</td></tr></table></div>`,
          ],
        },

        // ── Example 3: Find the input ─────────────────────────────────────────
        {
          question: `Lerato uses the ${or('rule: output = 5 × input + 3')}. Which ${bl('input')} gives an ${gr('output')} of ${gr('48')}?`,
          answer: `The ${bl('input')} is ${bl('9')}`,
          steps: [
            `Set up the equation using the ${or('rule')}: 5 × ${re('input')} + 3 = ${gr('48')}.`,
            `Subtract 3 from both sides: 5 × ${re('input')} = ${gr('48')} − 3 = 45.`,
            `Divide both sides by 5: ${re('input')} = 45 ÷ 5 = ${bl('9')}.`,
            `<strong>Check:</strong> 5 × ${bl('9')} + 3 = 45 + 3 = ${gr('48')} ✓`,
            `<strong>Answer:</strong> The ${bl('input')} is ${bl('9')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Function machine diagram showing an input entering a box labelled with the rule and an output coming out the other side, alongside a colour-coded input-output table with blue input values and green output values" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the rule for an input-output table by testing different operations and how to use the rule to find unknown inputs and outputs" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — next term in an adding pattern ──────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the next term in the pattern: 4, 9, 14, 19, ?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: 'The rule is add 5 each time.\n4 + 5 = 9, 9 + 5 = 14, 14 + 5 = 19, 19 + 5 = 24 ✓',
    },

    // ── Q2 Easy — find the rule for a dividing pattern ───────────────────────
    {
      difficulty: 'Easy',
      question: 'Find the rule for the pattern: 80, 40, 20, 10.',
      answer: 'The rule is divide by 2 each time or multiply by 1/2 each time.',
      checkMode: 'self',
    },

    // ── Q3 Medium — find two missing terms ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Find the missing terms in the pattern: 3, ?, 15, ?, 27.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) First missing term',
          correctAnswer: '9',
          explanation: 'The rule is add 6 each time.\n3 + 6 = 9 ✓',
        },
        {
          label: 'b) Second missing term',
          correctAnswer: '21',
          explanation: '15 + 6 = 21. Check: 21 + 6 = 27 ✓',
        },
      ],
    },

    // ── Q4 Medium — next three terms in a multiplying pattern ────────────────
    {
      difficulty: 'Medium',
      question: 'Find the next three terms in the pattern: 1, 3, 9, 27.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) 5th term',
          correctAnswer: '81',
          explanation: 'The rule is multiply by 3 each time.\n27 × 3 = 81 ✓',
        },
        {
          label: 'b) 6th term',
          correctAnswer: '243',
          explanation: '81 × 3 = 243 ✓',
        },
        {
          label: 'c) 7th term',
          correctAnswer: '729',
          explanation: '243 × 3 = 729 ✓',
        },
      ],
    },

    // ── Q5 Hard — verify a term using an nth-term rule ───────────────────────
    {
      difficulty: 'Hard',
      question: 'A pattern has terms 7, 12, 17, 22. Sipho says the 20th term is 102. Is he correct? Show all working.',
      answer: 'The rule is add 5. The nth term = 5n + 2. 20th term = 5 × 20 + 2 = 100 + 2 = 102. Yes, Sipho is correct.',
      checkMode: 'self',
    },

    // ── Q6 Easy — geometric pattern: dots ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'A pattern of dots — step 1 has 2 dots, step 2 has 4, step 3 has 6. How many dots are in step 8?',
      answer: '16',
      checkMode: 'auto',
      correctAnswer: '16',
      explanation: 'The rule is add 2 each step, or dots = 2 × step number.\nStep 8 = 2 × 8 = 16 ✓',
    },

    // ── Q7 Medium — geometric pattern: squares, find rule and predict ─────────
    {
      difficulty: 'Medium',
      question: 'A pattern of squares — step 1 has 5 squares, step 2 has 8, step 3 has 11. Write the rule and find the number of squares at step 15.',
      answer: 'Rule: add 3 each time or squares = 3 × step + 2. Step 15 = 3 × 15 + 2 = 45 + 2 = 47 squares.',
      checkMode: 'self',
    },

    // ── Q8 Hard — geometric pattern: poles and rails ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho builds a fence using poles and rails. For 1 section: 2 poles and 3 rails. For 2 sections: 3 poles and 6 rails. For 3 sections: 4 poles and 9 rails. How many poles and rails are needed for 10 sections?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Number of poles for 10 sections',
          correctAnswer: '11',
          explanation: 'Poles rule: poles = sections + 1.\n10 + 1 = 11 poles ✓',
        },
        {
          label: 'b) Number of rails for 10 sections',
          correctAnswer: '30',
          explanation: 'Rails rule: rails = 3 × sections.\n3 × 10 = 30 rails ✓',
        },
      ],
    },

    // ── Q9 Easy — complete a table using a given rule ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Complete the table using the rule: output = input × 3.\n\nInput: 4, 7, 9\nOutput: ?, ?, ?',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Output when input = 4',
          correctAnswer: '12',
          explanation: '4 × 3 = 12 ✓',
        },
        {
          label: 'b) Output when input = 7',
          correctAnswer: '21',
          explanation: '7 × 3 = 21 ✓',
        },
        {
          label: 'c) Output when input = 9',
          correctAnswer: '27',
          explanation: '9 × 3 = 27 ✓',
        },
      ],
    },

    // ── Q10 Medium — find the rule for an input-output table ─────────────────
    {
      difficulty: 'Medium',
      question: 'Find the rule for this input-output table.\n\nInput:  1,  2,  3,  4\nOutput: 5,  8, 11, 14',
      answer: 'output = 3 × input + 2',
      checkMode: 'auto',
      correctAnswer: 'output = 3 × input + 2',
      correctAnswers: [
        'output = 3 × input + 2',
        'output = 3 x input + 2',
        'output=3×input+2',
        'output=3xinput+2',
        '3 × input + 2',
        '3 x input + 2',
        '3n + 2',
      ],
      explanation: 'Check differences: 8 − 5 = 3, 11 − 8 = 3, 14 − 11 = 3. Constant difference of 3.\nTry output = 3 × input + b: 3 × 1 = 3, 5 − 3 = 2. So b = 2.\nRule: output = 3 × input + 2.\nCheck: 3 × 2 + 2 = 8 ✓, 3 × 3 + 2 = 11 ✓, 3 × 4 + 2 = 14 ✓',
    },

    // ── Q11 Hard — find the input given the output ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Using the rule: output = 6 × input − 4, which input gives an output of 50?',
      answer: '9',
      checkMode: 'auto',
      correctAnswer: '9',
      explanation: 'Set up: 6 × input − 4 = 50.\nAdd 4 to both sides: 6 × input = 54.\nDivide by 6: input = 54 ÷ 6 = 9.\nCheck: 6 × 9 − 4 = 54 − 4 = 50 ✓',
    },

    // ── Q12 Hard — verify a rule against a table ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato says the rule for this table is output = 2 × input + 5.\n\nInput:  3,  5,  7\nOutput: 11, 15, 19\n\nIs she correct? Explain.',
      answer: 'Check: 2 × 3 + 5 = 6 + 5 = 11 ✓. 2 × 5 + 5 = 10 + 5 = 15 ✓. 2 × 7 + 5 = 14 + 5 = 19 ✓. Yes, Lerato is correct.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered patterns and functions.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of patterns and functions.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered numeric patterns for Grade 6. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of numeric patterns. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],
}
