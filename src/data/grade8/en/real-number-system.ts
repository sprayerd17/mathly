import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (real number system roles) ────────────────────────────────
// natural numbers  → blue   (#2563eb)
// integers         → green  (#16a34a)
// rational numbers → orange (#ea580c)
// irrational       → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numbers and the Real Number System',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INTRODUCING THE NUMBER SYSTEMS (N, N0, Z, Q)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'introducing-number-systems',
      title: 'Introducing the Number Systems',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Numbers can be sorted into groups, called <strong>sets</strong>. Each set builds on the one before it, adding more numbers. We start with the numbers we use for counting, and keep adding more types of numbers until we reach the ${or('rational numbers')} — every number that can be written as a fraction.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('natural numbers (N)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('integers (Z)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rational numbers (Q)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four sets</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Natural Numbers (N)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The counting numbers, starting at 1: {1, 2, 3, 4, ...}. These are the first numbers we ever learn to count with.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Whole Numbers (N₀)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All the natural numbers, plus 0: {0, 1, 2, 3, ...}. The little zero in N₀ reminds us that zero has been added.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Integers (Z)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All whole numbers together with their negatives: {..., −3, −2, −1, 0, 1, 2, 3, ...}. Now numbers can go below zero.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rational Numbers (Q)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Any number that can be written as a fraction a/b, where a and b are integers and b ≠ 0. This includes all integers (e.g. 5 = 5/1), common fractions (e.g. 3/4), and decimals that terminate or repeat (e.g. 0.5 or 0.333...).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Remember: each set fits inside the next (nested sets)</p>` +
        `<p style="margin:0 0 8px 0;color:#1e3a8a;">Every ${bl('natural number')} is also a whole number. Every whole number is also an ${gr('integer')}. Every ${gr('integer')} is also a ${or('rational number')}. Think of it like boxes inside boxes:</p>` +
        `<p style="margin:0;color:#1e3a8a;font-family:monospace;font-size:14px;">${bl('N')} (1, 2, 3, ...) ⊂ N₀ (0, 1, 2, ...) ⊂ ${gr('Z')} (..., −1, 0, 1, ...) ⊂ ${or('Q')} (all fractions a/b)</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="margin:0;color:#854d0e;font-size:14px;"><strong>Tip:</strong> to check if a number belongs to a smaller set, ask "is it a counting number?" then "is it zero or positive?" then "is it a whole number (no fraction part)?" Work from the biggest set (Q) down to the smallest (N) that still fits.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Which of these sets does the number 6 belong to: N, N₀, Z, Q?',
          answer: '6 belongs to all four sets: N, N₀, Z and Q',
          steps: [
            `Is 6 a counting number? Yes — so 6 ∈ ${bl('N')}.`,
            `Since it is in N, it is automatically in the whole numbers too: 6 ∈ N₀.`,
            `Since it is a whole number, it is automatically an ${gr('integer')}: 6 ∈ Z.`,
            `Since it is an integer, it can be written as 6/1, so it is automatically ${or('rational')}: 6 ∈ Q.`,
            `<strong>Conclusion:</strong> 6 belongs to N, N₀, Z and Q ✓`,
          ],
        },
        {
          question: 'Which of these sets does the number −4 belong to: N, N₀, Z, Q?',
          answer: '−4 belongs to Z and Q only',
          steps: [
            `Is −4 a counting number (1, 2, 3, ...)? No — it is negative, so −4 ∉ N.`,
            `Is −4 a whole number (0, 1, 2, ...)? No — whole numbers cannot be negative, so −4 ∉ N₀.`,
            `Is −4 an ${gr('integer')}? Yes — integers include negative whole numbers: −4 ∈ Z.`,
            `Is −4 ${or('rational')}? Yes — it can be written as −4/1: −4 ∈ Q.`,
            `<strong>Conclusion:</strong> −4 belongs to Z and Q only ✓`,
          ],
        },
        {
          question: 'Explain why every natural number is also a rational number.',
          answer: 'Every natural number can be written as a fraction over 1, so it fits the definition of a rational number.',
          steps: [
            `A ${bl('natural number')} like 9 is a counting number.`,
            `A ${or('rational number')} is any number that can be written as a fraction a/b, with b ≠ 0.`,
            `9 can be written as 9/1, which fits this definition exactly.`,
            `Because this works for any natural number, the whole set N is contained inside Q. This is what "nested sets" means. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is 15 a natural number?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          explanation: '15 is a positive counting number, so it belongs to the natural numbers (N).',
        },
        {
          difficulty: 'Medium',
          question: 'List all the sets (N, N₀, Z, Q) that the number 0 belongs to, and explain why it is not in every set.',
          answer: '0 belongs to N₀, Z and Q, but not N, because the natural numbers start counting from 1, not 0.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Thandiwe says every integer is a natural number. Is she correct? Explain using an example.',
          answer: 'No — for example −2 is an integer but not a natural number, since natural numbers cannot be negative. It is the other way around: every natural number is an integer, not every integer is a natural number.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Nested boxes diagram showing natural numbers inside whole numbers, inside integers, inside rational numbers, labelled N, N0, Z and Q" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing natural numbers, whole numbers, integers and rational numbers and showing how each set fits inside the next" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INTRODUCING IRRATIONAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'introducing-irrational-numbers',
      title: 'Introducing Irrational Numbers',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">So far, every number we have met has been ${or('rational')} — it could be written as a fraction a/b. But there is another kind of number that <strong>cannot</strong> be written as any exact fraction: the ${re('irrational numbers')}. This is a brand-new idea in Grade 8!</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rational (fits a fraction)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrational (no exact fraction)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">What makes a number irrational?</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="margin:0;color:#7f1d1d;">An ${re('irrational number')} is a number whose decimal form goes on <strong>forever</strong>, with digits that <strong>never settle into a repeating pattern</strong>. Because it never repeats or ends, it is impossible to write it as an exact fraction a/b.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Classic examples</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">√2</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 1.41421356... 2 is not a perfect square, so its square root never ends or repeats.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">√3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 1.73205080... 3 is not a perfect square either, so √3 is irrational too.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">π (pi)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">= 3.14159265... Pi's decimal digits never end and never repeat, even though we often round it to 3.14.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Careful! Not every square root is irrational</p>` +
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="margin:0 0 8px 0;color:#7c2d12;">If the number under the square root sign is a <strong>perfect square</strong> (1, 4, 9, 16, 25, 36, ...), the square root simplifies to a whole number — and whole numbers are always ${or('rational')}.</p>` +
        `<p style="margin:0;color:#7c2d12;">${or('√4 = 2')} (rational) — but ${re('√5 = 2.2360679...')} (irrational, since 5 is not a perfect square). ${or('√9 = 3')} (rational) — but ${re('√10 = 3.1622776...')} (irrational, since 10 is not a perfect square).</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to test a decimal: rational or irrational?</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Does the decimal <strong>terminate</strong> (stop)? For example 0.6 or 0.125. Then it is ${or('rational')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Does the decimal <strong>repeat</strong> in a clear pattern forever? For example 0.333... or 0.454545... Then it is still ${or('rational')} (0.333... = 1/3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Does the decimal go on forever with <strong>no repeating pattern</strong> at all? Then it is ${re('irrational')}.</p>` +
        `</div>` +

        `</div>`,

      workedExamples: [
        {
          question: 'Is √2 rational or irrational?',
          answer: `√2 is ${re('irrational')}`,
          steps: [
            `Check: is 2 a perfect square (1, 4, 9, 16, ...)? No.`,
            `Since 2 is not a perfect square, √2 does not simplify to a whole number.`,
            `Its decimal value is 1.41421356..., which goes on forever with no repeating pattern.`,
            `<strong>Conclusion:</strong> √2 is ${re('irrational')} ✓`,
          ],
        },
        {
          question: 'Is √9 rational or irrational?',
          answer: `√9 is ${or('rational')}, because √9 = 3`,
          steps: [
            `Check: is 9 a perfect square? Yes — 3 × 3 = 9.`,
            `So √9 simplifies exactly to the whole number 3.`,
            `3 can be written as the fraction 3/1, so it is ${or('rational')}.`,
            `<strong>Conclusion:</strong> √9 is ${or('rational')}, NOT irrational, even though it involves a square root sign ✓`,
          ],
        },
        {
          question: 'Is 0.333... (repeating) rational or irrational? Explain using the decimal test.',
          answer: `0.333... is ${or('rational')}`,
          steps: [
            `Look at the decimal: the digit 3 repeats forever in a clear, predictable pattern.`,
            `A repeating decimal (even one that never technically "ends") can always be written as an exact fraction: 0.333... = 1/3.`,
            `Because it can be written as a fraction, it is ${or('rational')} — repeating is not the same as irrational.`,
            `<strong>Conclusion:</strong> 0.333... is ${or('rational')}, because it repeats in a pattern ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is √4 rational or irrational?',
          answer: 'rational',
          checkMode: 'auto',
          correctAnswer: 'rational',
          explanation: '√4 = 2, which is a whole number. Since 4 is a perfect square, its square root simplifies to a rational number.',
        },
        {
          difficulty: 'Medium',
          question: 'Is √5 rational or irrational?',
          answer: 'irrational',
          checkMode: 'auto',
          correctAnswer: 'irrational',
          explanation: '5 is not a perfect square, so √5 cannot be simplified to a whole number. Its decimal, 2.2360679..., goes on forever with no repeating pattern, so it is irrational.',
        },
        {
          difficulty: 'Hard',
          question: 'Karabo says 0.333... cannot be rational because the decimal never ends. Is she correct? Explain what actually decides whether a decimal is rational or irrational.',
          answer: 'No — a decimal is rational if it terminates OR repeats in a pattern, even if it never technically ends. 0.333... repeats the digit 3 forever, so it is rational and equals 1/3. Only decimals that go on forever with NO repeating pattern are irrational.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing perfect squares like 4, 9, 16, 25 whose square roots are rational whole numbers, against non-perfect squares like 2, 3, 5, 7 whose square roots are irrational" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video introducing irrational numbers for the first time, using pi and square roots of non-perfect squares as examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CLASSIFYING NUMBERS INTO THE CORRECT SET(S)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'classifying-numbers',
      title: 'Classifying Numbers into the Correct Sets',
      icon: '🗂️',
      explanation:
        `<p style="margin-bottom:16px;">Now that we know all five groups — ${bl('natural numbers (N)')}, whole numbers (N₀), ${gr('integers (Z)')}, ${or('rational numbers (Q)')}, and ${re('irrational numbers')} — we can practise sorting any given number into the set(s) it belongs to. Some numbers belong to several sets at once (like 7, which is N, N₀, Z and Q), while irrational numbers never belong to any of the other four sets.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('N / N0')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Z')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Q')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrational')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">A step-by-step classification checklist</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">First simplify the number if possible (e.g. work out any square roots). Then check: does the decimal go on forever with <strong>no repeating pattern</strong>? If yes, it is ${re('irrational')} and does NOT belong to N, N0, Z or Q.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">If it is not irrational, it belongs to ${or('Q')} (rational). Every fraction, terminating decimal and repeating decimal is here.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Is it also a whole number (no fraction/decimal part)? If yes, it is also an ${gr('integer (Z)')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Is it zero or positive? If yes, it is also a whole number (N0). Is it positive (not zero)? If yes, it is also a ${bl('natural number (N)')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde68a;border-radius:10px;padding:12px 14px;">` +
        `<p style="margin:0;color:#854d0e;font-size:14px;"><strong>Tip:</strong> always simplify square roots before classifying! √16 might look "irrational" at first glance, but it simplifies to 4, which is N, N0, Z and Q. Only leave a square root as ${re('irrational')} once you've confirmed the number under the root is not a perfect square.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Classify each of the following numbers into all the sets they belong to: 8, −3, 3/4, √16, √7.',
          answer: '8: N, N0, Z, Q. −3: Z, Q. 3/4: Q. √16 = 4: N, N0, Z, Q. √7: irrational.',
          steps: [
            `<strong>8</strong>: a positive counting number with no fraction part, so it is ${bl('N')}, N0, ${gr('Z')} and ${or('Q')}.`,
            `<strong>−3</strong>: negative, so not N or N0. It is a whole number with a negative sign, so it is ${gr('Z')} and ${or('Q')} (= −3/1).`,
            `<strong>3/4</strong>: already a fraction that is not a whole number, so it is only ${or('Q')}.`,
            `<strong>√16</strong>: simplify first — √16 = 4. Now classify 4: it is ${bl('N')}, N0, ${gr('Z')} and ${or('Q')}.`,
            `<strong>√7</strong>: 7 is not a perfect square, so √7 = 2.6457513... (non-terminating, non-repeating). It is ${re('irrational')} and belongs to none of N, N0, Z, Q.`,
          ],
        },
        {
          question: 'Zanele says the number 0 cannot belong to any set because it is "nothing". Classify 0 correctly.',
          answer: '0 belongs to N0, Z and Q, but not N.',
          steps: [
            `0 is not a counting number, since counting starts at 1, so 0 ∉ ${bl('N')}.`,
            `0 is included in the whole numbers by definition, so 0 ∈ N0.`,
            `0 is also an ${gr('integer')} (it sits at the centre of the integers), so 0 ∈ Z.`,
            `0 can be written as 0/1, so 0 ∈ ${or('Q')} (rational).`,
            `Zanele is incorrect — 0 is a very important number and belongs to three of the four number sets. ✓`,
          ],
        },
        {
          question: 'Classify √20 fully, showing your reasoning.',
          answer: `√20 is ${re('irrational')}`,
          steps: [
            `Check: is 20 a perfect square? The nearest perfect squares are 16 (4²) and 25 (5²) — 20 is not one of them.`,
            `Since 20 is not a perfect square, √20 cannot be simplified to a whole number.`,
            `Its decimal value is 4.4721359..., which is non-terminating and non-repeating.`,
            `<strong>Conclusion:</strong> √20 is ${re('irrational')}, and does not belong to N, N0, Z or Q ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Classify the number 5. Which sets does it belong to: N, N0, Z, Q, or irrational?',
          answer: 'N, N0, Z and Q — it is a positive whole counting number, so it belongs to all four rational-related sets.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Classify √36. Which sets does it belong to?',
          answer: 'N, N0, Z and Q',
          checkMode: 'auto',
          correctAnswer: 'N, N0, Z and Q',
          explanation: '√36 = 6, since 36 is a perfect square (6 × 6 = 36). 6 is a positive whole number, so it belongs to N, N0, Z and Q — it is rational, not irrational.',
        },
        {
          difficulty: 'Hard',
          question: 'A number line shows −6, 0, 2/5, √10 and 9. Sort each number into every set it belongs to (N, N0, Z, Q, irrational), and explain why √10 is different from the rest.',
          answer: '−6: Z, Q. 0: N0, Z, Q. 2/5: Q. 9: N, N0, Z, Q. √10 is irrational (10 is not a perfect square, so its decimal 3.16227766... never terminates or repeats), so it does not belong to N, N0, Z or Q at all.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Sorting diagram or flowchart showing a list of example numbers being sorted step by step into N, N0, Z, Q or irrational using the classification checklist" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through several examples of classifying given numbers into natural, whole, integer, rational or irrational" />',
    },
  ],
  resultsConfig: {
    totalMarks: 9,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have a solid foundation in the real number system.' },
      { minPercent: 75, message: 'Great work! You understand most of the number sets — review anything you missed and try again.' },
      { minPercent: 55, message: 'Good effort! Go back over the study guide, especially the classification checklist, and try again.' },
      { minPercent: 0, message: 'Keep practising — work through the guide again, focusing on the difference between rational and irrational numbers.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! You have a solid foundation in the real number system.' },
    { minScore: 7, message: 'Great work! You understand most of the number sets — review anything you missed and try again.' },
    { minScore: 5, message: 'Good effort! Go back over the study guide, especially the classification checklist, and try again.' },
    { minScore: 0, message: 'Keep practising — work through the guide again, focusing on the difference between rational and irrational numbers.' },
  ],
}
