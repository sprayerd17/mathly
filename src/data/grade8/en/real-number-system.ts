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
        'Nested rectangles diagram showing N inside N0 inside Z inside Q, each labelled with its name and a short example',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="10" width="240" height="180" rx="10" fill="none" stroke="#ea580c" stroke-width="2"/>` +
        `<text x="20" y="26" font-size="10" font-weight="700" fill="#ea580c">Q — rational numbers</text>` +
        `<text x="20" y="38" font-size="8" fill="#ea580c">e.g. 3/4, 0.5</text>` +
        `<rect x="40" y="44" width="180" height="138" rx="8" fill="none" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="50" y="60" font-size="10" font-weight="700" fill="#16a34a">Z — integers</text>` +
        `<text x="50" y="72" font-size="8" fill="#16a34a">e.g. −3, −1</text>` +
        `<rect x="70" y="78" width="120" height="96" rx="8" fill="none" stroke="#6b7280" stroke-width="1.5"/>` +
        `<text x="80" y="94" font-size="9.5" font-weight="700" fill="#374151">N0 — whole numbers</text>` +
        `<text x="80" y="106" font-size="8" fill="#374151">e.g. 0</text>` +
        `<rect x="100" y="112" width="60" height="54" rx="6" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="130" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="#2563eb">N</text>` +
        `<text x="130" y="154" text-anchor="middle" font-size="7.5" fill="#2563eb">1, 2, 3...</text>` +
        `</svg>`,

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
        'Number line from 0 to 4 showing √4 and √9 landing exactly on whole-number ticks (rational), while √5 falls between 2 and 3 with no exact position (irrational)',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="20" y1="55" x2="280" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="14,55 22,50 22,60" fill="#0f1f3d"/>` +
        `<polygon points="286,55 278,50 278,60" fill="#0f1f3d"/>` +
        `<line x1="20" y1="50" x2="20" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="80" y1="50" x2="80" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="140" y1="50" x2="140" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="200" y1="50" x2="200" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="260" y1="50" x2="260" y2="60" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="20" y="75" text-anchor="middle" font-size="10" fill="#6b7280">0</text>` +
        `<text x="80" y="75" text-anchor="middle" font-size="10" fill="#6b7280">1</text>` +
        `<text x="140" y="75" text-anchor="middle" font-size="10" fill="#6b7280">2</text>` +
        `<text x="200" y="75" text-anchor="middle" font-size="10" fill="#6b7280">3</text>` +
        `<text x="260" y="75" text-anchor="middle" font-size="10" fill="#6b7280">4</text>` +
        `<circle cx="140" cy="55" r="5" fill="#ea580c"/>` +
        `<text x="140" y="35" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c">√4 = 2</text>` +
        `<circle cx="200" cy="55" r="5" fill="#ea580c"/>` +
        `<text x="200" y="35" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ea580c">√9 = 3</text>` +
        `<circle cx="154" cy="55" r="5" fill="white" stroke="#dc2626" stroke-width="2"/>` +
        `<line x1="154" y1="61" x2="154" y2="93" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>` +
        `<text x="154" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">√5 ≈ 2.24</text>` +
        `<text x="154" y="118" text-anchor="middle" font-size="7.5" fill="#dc2626">(between 2 and 3 — irrational)</text>` +
        `<text x="150" y="134" text-anchor="middle" font-size="8" fill="#6b7280">Perfect square roots land exactly on whole numbers — others fall in between</text>` +
        `</svg>`,

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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Classifying numbers by type (N/N0/Z/Q) | 4-7 Rational vs
    // irrational from decimals (terminating/repeating vs non-repeating) |
    // 8-11 Surds — rational or irrational | 12-14 Full multi-set
    // classification | 15-17 Comparing/ordering across the hierarchy |
    // 18-19 Error-spotting / multi-step reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Classifying numbers by type (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 12 a natural number?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: '12 is a positive counting number, so it belongs to the natural numbers (N). ✓' },
        { difficulty: 'Easy', question: 'Is −8 a natural number? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no'], explanation: 'Natural numbers are the positive counting numbers {1, 2, 3, ...}. −8 is negative, so it is NOT a natural number. ✓' },
        { difficulty: 'Easy', question: 'Which set does 0 belong to that natural numbers (N) do not include: whole numbers (N0) or integers only?', checkMode: 'auto', correctAnswer: 'whole numbers', correctAnswers: ['whole numbers', 'N0', 'whole numbers (N0)'], explanation: 'Whole numbers (N0) are the natural numbers plus 0: {0, 1, 2, 3, ...}. Natural numbers start counting at 1, so 0 is in N0 but not in N. ✓' },
        { difficulty: 'Easy', question: 'Is −5 an integer?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: 'Integers (Z) include all whole numbers together with their negatives: {..., −2, −1, 0, 1, 2, ...}. −5 fits this definition. ✓' },

        // Block 2 — Rational vs irrational from decimals (terminating/repeating vs non-repeating)
        { difficulty: 'Easy-Medium', question: 'Is 0.375 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '0.375 is a terminating decimal (it stops), so it can be written as an exact fraction: 0.375 = 3/8. This makes it rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'The decimal 0.454545... repeats the pair "45" forever. Is this number rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: 'A decimal that repeats in a clear pattern forever is still rational, even though it never technically ends. 0.454545... = 5/11, so it is rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'A number has the decimal value 0.12112111211112..., where the number of 1s between each 2 keeps increasing. Is this number rational or irrational? Explain your reasoning.', checkMode: 'self', answer: 'Irrational. The decimal never terminates and, although it has some structure, the digits never settle into a fixed repeating pattern (the gaps of 1s keep growing), so it cannot be written as an exact fraction.' },
        { difficulty: 'Medium', question: 'Sipho says every decimal that "goes on forever" must be irrational. Explain why this is not always true, using 0.222... as an example.', checkMode: 'self', answer: 'Sipho is incorrect. A decimal is only irrational if it goes on forever WITHOUT ever repeating in a pattern. 0.222... goes on forever, but the digit 2 repeats every time, so it is actually rational — it equals 2/9. Only non-terminating, non-repeating decimals are irrational.' },

        // Block 3 — Surds: rational or irrational
        { difficulty: 'Medium', question: 'Is √16 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '16 is a perfect square (4 × 4 = 16), so √16 = 4, a whole number. This makes it rational. ✓' },
        { difficulty: 'Medium', question: 'Is √17 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', correctAnswers: ['irrational'], explanation: '17 is not a perfect square (the nearest perfect squares are 16 and 25), so √17 cannot be simplified to a whole number. Its decimal, 4.1231056..., is non-terminating and non-repeating, so it is irrational. ✓' },
        { difficulty: 'Medium', question: 'Classify √49: is it rational or irrational, and what does it simplify to?', checkMode: 'self', answer: 'Rational. 49 is a perfect square (7 × 7 = 49), so √49 = 7, which is a whole number and therefore rational.' },
        { difficulty: 'Medium-Hard', question: 'Between √40 and √50, one is closer to being irrational-looking than the other, but classify BOTH numbers as rational or irrational, showing your reasoning for each.', checkMode: 'self', answer: 'Both are irrational. 40 is not a perfect square (between 36 = 6² and 49 = 7²), so √40 = 6.3245553... is non-terminating and non-repeating. 50 is also not a perfect square (between 49 = 7² and 64 = 8²), so √50 = 7.0710678... is also non-terminating and non-repeating. Neither simplifies to a whole number, so both are irrational.' },

        // Block 4 — Full multi-set classification
        { difficulty: 'Medium', question: 'Classify the number 14 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '14 is a positive whole counting number with no fraction part, so it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium', question: 'Classify √81 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '81 is a perfect square (9 × 9 = 81), so √81 = 9. Since 9 is a positive whole number, it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'A number line shows −7, 0, 5/8, √29 and 20. Sort each number into every set it belongs to (N, N0, Z, Q, irrational), and explain why √29 does not fit into any of N, N0, Z or Q.', checkMode: 'self', answer: '−7: Z, Q. 0: N0, Z, Q. 5/8: Q only. 20: N, N0, Z, Q. √29 is irrational because 29 is not a perfect square (between 25 = 5² and 36 = 6²), so its decimal, 5.3851648..., never terminates or repeats — it therefore does not belong to N, N0, Z or Q at all.' },

        // Block 5 — Comparing / ordering across the hierarchy
        { difficulty: 'Medium', question: 'Which is greater: √17 or 4? Explain how you know without a calculator.', checkMode: 'self', answer: '√17 is greater than 4. Since 16 < 17, we know √16 < √17, and √16 = 4, so √17 must be greater than 4 (in fact √17 ≈ 4.12).' },
        { difficulty: 'Medium', question: 'Arrange these numbers from smallest to largest: √25, 4.9, √16, 5.1.', checkMode: 'auto', correctAnswer: '√16, 4.9, √25, 5.1', correctAnswers: ['√16, 4.9, √25, 5.1', 'sqrt16, 4.9, sqrt25, 5.1'], explanation: '√16 = 4, 4.9 = 4.9, √25 = 5, 5.1 = 5.1. Ordering the values 4, 4.9, 5, 5.1 from smallest to largest gives √16, 4.9, √25, 5.1. ✓' },
        { difficulty: 'Medium-Hard', question: 'Place √10 and 3.5 in order from smallest to largest, showing how you compared them.', checkMode: 'self', answer: '√10, 3.5. √10 ≈ 3.1622776..., which is less than 3.5, since 3.1622776 < 3.5. So the order from smallest to largest is √10, then 3.5.' },

        // Block 6 — Error-spotting / multi-step reasoning
        { difficulty: 'Hard', question: 'Ayesha says √64 is irrational because it has a square root sign in front of it. Is she correct? Explain what she has misunderstood.', checkMode: 'self', answer: 'No, Ayesha is incorrect. Having a square root sign does not automatically make a number irrational — you must check whether the number under the root is a perfect square. 64 is a perfect square (8 × 8 = 64), so √64 = 8, a whole number, which is rational. Ayesha has confused "contains a root sign" with "is irrational".' },
        { difficulty: 'Hard', question: 'A learner classifies the number 6/3 as "rational only, not an integer, because it is written as a fraction". Identify the error in this reasoning and give the full, correct classification.', checkMode: 'self', answer: 'The error is that the learner did not simplify the fraction first. 6/3 simplifies to 2, which is a whole positive number. So 6/3 actually belongs to N, N0, Z and Q — not just Q. Always simplify a fraction before classifying it, since its simplified form may reveal it belongs to more sets than it first appears to.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered classifying numbers across the real number system.' },
        { minScore: 14, message: 'Great work! You understand most of the number sets — review anything you missed and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the classification checklist and the rational/irrational decimal test, then try again.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again, focusing on perfect squares and the decimal test.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Classifying numbers by type (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 25 a natural number?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: '25 is a positive counting number, so it belongs to the natural numbers (N). ✓' },
        { difficulty: 'Easy', question: 'Is −11 a whole number? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no'], explanation: 'Whole numbers (N0) are {0, 1, 2, 3, ...} — they cannot be negative. −11 is negative, so it is NOT a whole number. ✓' },
        { difficulty: 'Easy', question: 'Name the smallest set (N, N0 or Z) that the number 0 belongs to.', checkMode: 'auto', correctAnswer: 'N0', correctAnswers: ['N0', 'whole numbers', 'N zero'], explanation: '0 is not in N (counting starts at 1), but it is included in the whole numbers (N0) by definition, so N0 is the smallest set containing 0. ✓' },
        { difficulty: 'Easy', question: 'Is −20 an integer?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: 'Integers (Z) include all whole numbers together with their negatives, so −20 fits this definition. ✓' },

        // Block 2 — Rational vs irrational from decimals
        { difficulty: 'Easy-Medium', question: 'Is 0.65 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '0.65 is a terminating decimal, so it can be written as an exact fraction: 0.65 = 13/20. This makes it rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'The decimal 0.363636... repeats the pair "36" forever. Is this number rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: 'A decimal that repeats in a clear pattern forever is still rational. 0.363636... = 4/11, so it is rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'A number has the decimal value 0.20200200020002..., where the number of zeros between each 2 keeps increasing. Is this number rational or irrational? Explain your reasoning.', checkMode: 'self', answer: 'Irrational. Although the decimal has a visible pattern of sorts, the digits never settle into a FIXED repeating block — the gaps of zeros keep growing — so it never terminates and never truly repeats, meaning it cannot be written as an exact fraction.' },
        { difficulty: 'Medium', question: 'Lindiwe says a decimal is only rational if it stops completely. Explain why this is not the full picture, using 0.777... as an example.', checkMode: 'self', answer: 'Lindiwe is incorrect. A decimal is rational if it terminates OR repeats in a pattern forever. 0.777... never stops, but the digit 7 repeats every time, so it is rational — it equals 7/9. Only decimals that neither terminate nor repeat are irrational.' },

        // Block 3 — Surds: rational or irrational
        { difficulty: 'Medium', question: 'Is √25 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '25 is a perfect square (5 × 5 = 25), so √25 = 5, a whole number. This makes it rational. ✓' },
        { difficulty: 'Medium', question: 'Is √29 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', correctAnswers: ['irrational'], explanation: '29 is not a perfect square (the nearest perfect squares are 25 and 36), so √29 cannot be simplified to a whole number. Its decimal, 5.3851648..., is non-terminating and non-repeating, so it is irrational. ✓' },
        { difficulty: 'Medium', question: 'Classify √144: is it rational or irrational, and what does it simplify to?', checkMode: 'self', answer: 'Rational. 144 is a perfect square (12 × 12 = 144), so √144 = 12, which is a whole number and therefore rational.' },
        { difficulty: 'Medium-Hard', question: 'Classify BOTH √64 and √70 as rational or irrational, showing your reasoning for each.', checkMode: 'self', answer: '√64 is rational: 64 is a perfect square (8 × 8 = 64), so √64 = 8, a whole number. √70 is irrational: 70 is not a perfect square (between 64 = 8² and 81 = 9²), so √70 = 8.3666002... is non-terminating and non-repeating.' },

        // Block 4 — Full multi-set classification
        { difficulty: 'Medium', question: 'Classify the number 23 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '23 is a positive whole counting number with no fraction part, so it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium', question: 'Classify √100 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '100 is a perfect square (10 × 10 = 100), so √100 = 10. Since 10 is a positive whole number, it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'A number line shows −9, 0, 3/7, √50 and 15. Sort each number into every set it belongs to (N, N0, Z, Q, irrational), and explain why √50 does not fit into any of N, N0, Z or Q.', checkMode: 'self', answer: '−9: Z, Q. 0: N0, Z, Q. 3/7: Q only. 15: N, N0, Z, Q. √50 is irrational because 50 is not a perfect square (between 49 = 7² and 64 = 8²), so its decimal, 7.0710678..., never terminates or repeats — it therefore does not belong to N, N0, Z or Q at all.' },

        // Block 5 — Comparing / ordering across the hierarchy
        { difficulty: 'Medium', question: 'Which is smaller: √29 or 5? Explain how you know without a calculator.', checkMode: 'self', answer: '5 is smaller than √29. Since 25 < 29, we know √25 < √29, and √25 = 5, so 5 must be smaller than √29 (in fact √29 ≈ 5.39).' },
        { difficulty: 'Medium', question: 'Arrange these numbers from smallest to largest: √36, 5.9, √49, 6.2.', checkMode: 'auto', correctAnswer: '5.9, √36, 6.2, √49', correctAnswers: ['5.9, √36, 6.2, √49', '5.9, sqrt36, 6.2, sqrt49'], explanation: '√36 = 6, 5.9 = 5.9, √49 = 7, 6.2 = 6.2. Ordering the values 5.9, 6, 6.2, 7 from smallest to largest gives 5.9, √36 (6), 6.2, √49 (7). ✓' },
        { difficulty: 'Medium-Hard', question: 'Place √11 and 3.4 in order from smallest to largest, showing how you compared them.', checkMode: 'self', answer: '√11, 3.4. √11 ≈ 3.3166247..., which is less than 3.4, since 3.3166 < 3.4. So the order from smallest to largest is √11, then 3.4.' },

        // Block 6 — Error-spotting / multi-step reasoning
        { difficulty: 'Hard', question: 'Themba says √121 is irrational because it has a square root sign in front of it. Is he correct? Explain what he has misunderstood.', checkMode: 'self', answer: 'No, Themba is incorrect. Having a square root sign does not automatically make a number irrational — you must check whether the number under the root is a perfect square. 121 is a perfect square (11 × 11 = 121), so √121 = 11, a whole number, which is rational. Themba has confused "contains a root sign" with "is irrational".' },
        { difficulty: 'Hard', question: 'A learner classifies the number 12/4 as "rational only, not an integer, because it is written as a fraction". Identify the error in this reasoning and give the full, correct classification.', checkMode: 'self', answer: 'The error is that the learner did not simplify the fraction first. 12/4 simplifies to 3, which is a whole positive number. So 12/4 actually belongs to N, N0, Z and Q — not just Q. Always simplify a fraction before classifying it, since its simplified form may reveal it belongs to more sets than it first appears to.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently classify numbers across the real number system.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the classification checklist and the rational/irrational decimal test, then try again.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again, focusing on perfect squares and the decimal test.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Classifying numbers by type (N / N0 / Z / Q)
        { difficulty: 'Easy', question: 'Is 40 a natural number?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: '40 is a positive counting number, so it belongs to the natural numbers (N). ✓' },
        { difficulty: 'Easy', question: 'Is −3 a natural number? Answer yes or no.', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no'], explanation: 'Natural numbers are the positive counting numbers {1, 2, 3, ...}. −3 is negative, so it is NOT a natural number. ✓' },
        { difficulty: 'Easy', question: 'A temperature reading of 0°C is recorded on a thermometer. Which set(s) — N, N0, Z, Q — does the number 0 belong to?', checkMode: 'auto', correctAnswer: 'N0, Z and Q', correctAnswers: ['N0, Z and Q', 'N0, Z, Q'], explanation: '0 is not in N (counting starts at 1), but it is in N0 by definition, it is an integer, and it can be written as 0/1, so it is in Q too. So 0 belongs to N0, Z and Q. ✓' },
        { difficulty: 'Easy', question: 'Is −14 an integer?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes'], explanation: 'Integers (Z) include all whole numbers together with their negatives, so −14 fits this definition. ✓' },

        // Block 2 — Rational vs irrational from decimals
        { difficulty: 'Easy-Medium', question: 'Is 0.425 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '0.425 is a terminating decimal, so it can be written as an exact fraction: 0.425 = 17/40. This makes it rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'The decimal 0.222... repeats the digit 2 forever. Is this number rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: 'A decimal that repeats in a clear pattern forever is still rational. 0.222... = 2/9, so it is rational. ✓' },
        { difficulty: 'Easy-Medium', question: 'A number has the decimal value 0.30300300030000300003..., where the number of zeros between each 3 keeps increasing by one each time. Is this number rational or irrational? Explain your reasoning.', checkMode: 'self', answer: 'Irrational. Even though there is some visible structure, the digits never lock into a FIXED block that repeats identically forever — the gaps keep growing — so the decimal never terminates and never truly repeats, meaning it cannot be written as an exact fraction.' },
        { difficulty: 'Medium', question: 'Bongani says a decimal must be irrational if it has more than 10 digits after the decimal point. Explain why this reasoning is flawed, using the repeating example 0.583583583... .', checkMode: 'self', answer: 'Bongani is incorrect. The LENGTH of a decimal does not decide whether it is rational or irrational — what matters is whether it terminates or repeats in a pattern. 0.583583583... has many digits, but the block "583" repeats forever, so it is rational (it equals 583/999). A decimal is only irrational if it goes on forever with no repeating pattern at all, regardless of how many digits are shown.' },

        // Block 3 — Surds: rational or irrational
        { difficulty: 'Medium', question: 'Is √169 rational or irrational?', checkMode: 'auto', correctAnswer: 'rational', correctAnswers: ['rational'], explanation: '169 is a perfect square (13 × 13 = 169), so √169 = 13, a whole number. This makes it rational. ✓' },
        { difficulty: 'Medium', question: 'Is √90 rational or irrational?', checkMode: 'auto', correctAnswer: 'irrational', correctAnswers: ['irrational'], explanation: '90 is not a perfect square (the nearest perfect squares are 81 and 100), so √90 cannot be simplified to a whole number. Its decimal, 9.4868329..., is non-terminating and non-repeating, so it is irrational. ✓' },
        { difficulty: 'Medium', question: 'Classify √196: is it rational or irrational, and what does it simplify to?', checkMode: 'self', answer: 'Rational. 196 is a perfect square (14 × 14 = 196), so √196 = 14, which is a whole number and therefore rational.' },
        { difficulty: 'Medium-Hard', question: 'Classify BOTH √121 and √130 as rational or irrational, showing your reasoning for each.', checkMode: 'self', answer: '√121 is rational: 121 is a perfect square (11 × 11 = 121), so √121 = 11, a whole number. √130 is irrational: 130 is not a perfect square (between 121 = 11² and 144 = 12²), so √130 = 11.4017542... is non-terminating and non-repeating.' },

        // Block 4 — Full multi-set classification
        { difficulty: 'Medium', question: 'Classify the number 31 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '31 is a positive whole counting number with no fraction part, so it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium', question: 'Classify √225 into every set it belongs to (N, N0, Z, Q, or irrational).', checkMode: 'auto', correctAnswer: 'N, N0, Z and Q', correctAnswers: ['N, N0, Z and Q', 'N, N0, Z, Q'], explanation: '225 is a perfect square (15 × 15 = 225), so √225 = 15. Since 15 is a positive whole number, it belongs to N, N0, Z and Q. ✓' },
        { difficulty: 'Medium-Hard', question: 'A number line shows −12, 0, 7/9, √110 and 18. Sort each number into every set it belongs to (N, N0, Z, Q, irrational), and explain why √110 does not fit into any of N, N0, Z or Q.', checkMode: 'self', answer: '−12: Z, Q. 0: N0, Z, Q. 7/9: Q only. 18: N, N0, Z, Q. √110 is irrational because 110 is not a perfect square (between 100 = 10² and 121 = 11²), so its decimal, 10.4880885..., never terminates or repeats — it therefore does not belong to N, N0, Z or Q at all.' },

        // Block 5 — Comparing / ordering across the hierarchy
        { difficulty: 'Medium', question: 'Which is greater: √40 or 6? Explain how you know without a calculator.', checkMode: 'self', answer: '√40 is greater than 6. Since 36 < 40, we know √36 < √40, and √36 = 6, so √40 must be greater than 6 (in fact √40 ≈ 6.32).' },
        { difficulty: 'Medium', question: 'Arrange these numbers from smallest to largest: √100, 9.8, √81, 10.3.', checkMode: 'auto', correctAnswer: '√81, 9.8, √100, 10.3', correctAnswers: ['√81, 9.8, √100, 10.3', 'sqrt81, 9.8, sqrt100, 10.3'], explanation: '√100 = 10, 9.8 = 9.8, √81 = 9, 10.3 = 10.3. Ordering the values 10, 9.8, 9, 10.3 from smallest to largest gives √81 (9), 9.8, √100 (10), 10.3. ✓' },
        { difficulty: 'Medium-Hard', question: 'Place √17 and 4.2 in order from smallest to largest, showing how you compared them.', checkMode: 'self', answer: '√17, 4.2. √17 ≈ 4.1231056..., which is less than 4.2, since 4.1231 < 4.2. So the order from smallest to largest is √17, then 4.2.' },

        // Block 6 — Error-spotting / multi-step reasoning
        { difficulty: 'Hard', question: 'Naledi says √225 is irrational because it has a square root sign in front of it. Is she correct? Explain what she has misunderstood.', checkMode: 'self', answer: 'No, Naledi is incorrect. Having a square root sign does not automatically make a number irrational — you must check whether the number under the root is a perfect square. 225 is a perfect square (15 × 15 = 225), so √225 = 15, a whole number, which is rational. Naledi has confused "contains a root sign" with "is irrational".' },
        { difficulty: 'Hard', question: 'A learner classifies the number 20/5 as "rational only, not an integer, because it is written as a fraction". Identify the error in this reasoning and give the full, correct classification.', checkMode: 'self', answer: 'The error is that the learner did not simplify the fraction first. 20/5 simplifies to 4, which is a whole positive number. So 20/5 actually belongs to N, N0, Z and Q — not just Q. Always simplify a fraction before classifying it, since its simplified form may reveal it belongs to more sets than it first appears to.' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Superb! You have a deep, reliable understanding of the real number system.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the classification checklist and the rational/irrational decimal test, then try again.' },
        { minScore: 0, message: 'Keep practising — work through the study guide again, focusing on perfect squares and the decimal test.' },
      ],
    },
  ],
}
