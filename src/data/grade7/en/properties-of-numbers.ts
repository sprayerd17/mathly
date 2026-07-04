import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ─────────────────────────────────────────────────────────
// Shared with Grade 6 (kept visually consistent):
//   green  → prime factors / common values          (#16a34a)
//   blue   → factors / multiples / numbers in play   (#2563eb)
//   orange → HCF / LCM final answers                 (#ea580c)
//   red    → shared prime factors / final results    (#dc2626)
// New for Grade 7 divisibility work:
//   purple → the divisibility rule itself             (#7c3aed)
//   teal   → the digit(s) we test (digit sum, last two digits, alternating sum) (#0d9488)
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const pu = (t: string) => `<span style="color:#7c3aed;font-weight:700">${t}</span>`
const te = (t: string) => `<span style="color:#0d9488;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Properties of Numbers',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVISIBILITY RULES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'divisibility-rules',
      title: 'Divisibility Rules',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 you used factor trees to break numbers into prime factors. But how do you know, at a glance, whether a big number like 5 148 can even be divided by 3, 4 or 9 in the first place? <strong>Divisibility rules</strong> are shortcuts that let you test whether one number divides exactly into another — with no remainder — without doing the actual division. Knowing these rules makes factor trees, simplifying fractions and finding the HCF and LCM of large numbers much faster.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:6px;padding:3px 10px;font-size:13px;">${pu('the rule')}</span>` +
        `<span style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:6px;padding:3px 10px;font-size:13px;">${te('the digit(s) we test')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('the conclusion')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Divisibility rule</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A shortcut test that tells you whether a number divides exactly into another number, without doing the full division.</p>` +
        `</div>` +

        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0d9488;margin-bottom:4px;">Digit sum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The result of adding up all the digits of a number. Example: the digit sum of 234 is 2 + 3 + 4 = 9.</p>` +
        `</div>` +

        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0d9488;margin-bottom:4px;">Alternating digit sum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Add and subtract digits one after another, working from the right. Used to test divisibility by 11.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Exactly divisible</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">One number divides into another with no remainder. Example: 20 is exactly divisible by 4, because 20 ÷ 4 = 5 with remainder 0.</p>` +
        `</div>` +

        `</div>` +

        // ── The rules table ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The comprehensive divisibility rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('2')} if its ${te('last digit')} is even (0, 2, 4, 6 or 8). <em>Why:</em> every multiple of 10 is already divisible by 2, so only the last digit decides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('3')} if its ${te('digit sum')} is divisible by 3. <em>Why:</em> 10, 100, 1 000, … each leave remainder 1 when divided by 3, so a number's remainder when divided by 3 is the same as its digit sum's remainder.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('4')} if its ${te('last two digits')} (as a two-digit number) are divisible by 4. <em>Why:</em> 100 is divisible by 4, so every hundred, thousand, and so on is already divisible by 4 — only the last two digits matter.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('5')} if its ${te('last digit')} is 0 or 5.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">6</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('6')} if it is divisible by both 2 <strong>and</strong> 3 (since 6 = 2 × 3).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">8</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('8')} if its ${te('last three digits')} (as a number) are divisible by 8. <em>Why:</em> 1 000 is divisible by 8, so only the last three digits matter.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">9</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('9')} if its ${te('digit sum')} is divisible by 9. <em>Why:</em> same reasoning as the rule for 3, since 10, 100, 1 000, … each leave remainder 1 when divided by 9 too.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">10</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('10')} if its ${te('last digit')} is 0.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#7c3aed;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">11</span>` +
        `<p style="margin:0;font-size:14px;">A number is divisible by ${pu('11')} if its ${te('alternating digit sum')} (add a digit, subtract the next, add the next, and so on, starting from the right) is divisible by 11 (including 0). <em>Why:</em> powers of 10 alternate between remainder 1 and remainder −1 (i.e. 10) when divided by 11, so alternately adding and subtracting digits mirrors this pattern.</p>` +
        `</div>` +

        `</div>` +

        // ── Worked reasoning box ─────────────────────────────────────────────
        `<div style="background:#f0fdfa;border:1.5px solid #99f6e4;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f766e;margin-bottom:6px;">Why the digit-sum rule works (3 and 9)</p>` +
        `<p style="margin:0;color:#134e4a;">Take the number 345. We can write it as 3 × 100 + 4 × 10 + 5. Since 100 = 99 + 1 and 10 = 9 + 1, this becomes 3 × 99 + 3 + 4 × 9 + 4 + 5. The parts "3 × 99" and "4 × 9" are already multiples of both 3 and 9, so they never affect whether the whole number is divisible by 3 or 9 — only what's left over does: ${te('3 + 4 + 5 = 12')}, the ${te('digit sum')}. Since 12 is divisible by 3 but not by 9, 345 is divisible by 3 but not by 9. This is exactly why we only need to check the digit sum!</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Combine rules to test bigger divisors</p>` +
        `<p style="margin:0;color:#7c2d12;">Some divisors are not prime, so you can break them into their factors and check each one. Divisible by 6 means divisible by 2 <strong>and</strong> 3. There is no shortcut combination for 7, so for 7 it is usually quickest to just divide.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: 4131 — divisibility by 3 and 9 via digit sum ─────────
        {
          question: 'Is 4 131 divisible by 3? Is it divisible by 9?',
          answer: `${re('4 131 is divisible by 3, but NOT by 9')}`,
          steps: [
            `Find the ${te('digit sum')}: 4 + 1 + 3 + 1 = ${te('9')}.`,
            `Is 9 divisible by 3? Yes (9 ÷ 3 = 3) — so by the ${pu('divisibility rule for 3')}, ${re('4 131 is divisible by 3')}.`,
            `Is 9 divisible by 9? Yes (9 ÷ 9 = 1) — so by the ${pu('divisibility rule for 9')}, ${re('4 131 is also divisible by 9')}.`,
            `Check by dividing: 4 131 ÷ 3 = 1 377 ✓ and 4 131 ÷ 9 = 459 ✓ — both divide exactly, confirming the rule.`,
          ],
        },

        // ── Example 2: 3124 — divisibility by 4 via last two digits ─────────
        {
          question: 'Is 3 124 divisible by 4? Is it divisible by 8?',
          answer: `${re('3 124 is divisible by 4, but NOT by 8')}`,
          steps: [
            `For divisibility by 4, look only at the ${te('last two digits')}: ${te('24')}.`,
            `Is 24 divisible by 4? Yes (24 ÷ 4 = 6) — so by the ${pu('divisibility rule for 4')}, ${re('3 124 is divisible by 4')}.`,
            `For divisibility by 8, look at the ${te('last three digits')}: ${te('124')}. Is 124 divisible by 8? 124 ÷ 8 = 15.5 — not exact, so ${re('3 124 is NOT divisible by 8')}.`,
            `Check by dividing: 3 124 ÷ 4 = 781 ✓ (exact), confirming the rule.`,
          ],
        },

        // ── Example 3: 5148 — the full comprehensive check ──────────────────
        {
          question: 'Test whether 5 148 is divisible by 2, 3, 4, 5, 6, 8, 9, 10 and 11.',
          answer: `${re('Divisible by 2, 3, 4, 6, 9, 11. NOT divisible by 5, 8, 10.')}`,
          steps: [
            `${pu('÷2')}: last digit is ${te('8')} (even) → ${re('divisible')}.`,
            `${pu('÷3')}: digit sum = 5+1+4+8 = ${te('18')}, and 18 ÷ 3 = 6 → ${re('divisible')}.`,
            `${pu('÷4')}: last two digits ${te('48')}, and 48 ÷ 4 = 12 → ${re('divisible')}.`,
            `${pu('÷5')}: last digit is ${te('8')}, not 0 or 5 → ${re('NOT divisible')}.`,
            `${pu('÷6')}: divisible by both 2 and 3 (shown above) → ${re('divisible')}.`,
            `${pu('÷8')}: last three digits ${te('148')}, and 148 ÷ 8 = 18.5 → ${re('NOT divisible')}.`,
            `${pu('÷9')}: digit sum = ${te('18')}, and 18 ÷ 9 = 2 → ${re('divisible')}.`,
            `${pu('÷10')}: last digit is ${te('8')}, not 0 → ${re('NOT divisible')}.`,
            `${pu('÷11')}: alternating sum from the right: 8 − 4 + 1 − 5 = ${te('0')}, and 0 is divisible by 11 → ${re('divisible')}.`,
            `Check: 5 148 ÷ 11 = 468 ✓ exact, confirming the rule.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — digit sum rule for 3 and 9 ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Is 5 823 divisible by 3? Is it divisible by 9? (Answer: yes/no, yes/no)',
          answer: 'Yes, yes',
          checkMode: 'auto',
          correctAnswer: 'yes, yes',
          correctAnswers: ['yes, yes', 'yes yes', 'yes/yes'],
          explanation: 'Digit sum: 5+8+2+3 = 18\n18 is divisible by 3 (18÷3=6) → divisible by 3\n18 is divisible by 9 (18÷9=2) → divisible by 9\nBoth: Yes, Yes ✓',
        },

        // ── Q2 Medium — last two digits rule for 4 ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Is 7 106 divisible by 4? Explain using the last-two-digits rule, then give the answer as yes or no.',
          answer: 'No',
          checkMode: 'auto',
          correctAnswer: 'no',
          explanation: 'Last two digits of 7 106 are 06 (i.e. 6)\n6 is not divisible by 4 (6÷4=1.5)\nSo 7 106 is NOT divisible by 4\nCheck: 7106÷4 = 1776.5 (not exact) ✓',
        },

        // ── Q3 Hard — alternating sum rule for 11, with reasoning ────────────
        {
          difficulty: 'Hard',
          question: 'Use the alternating digit sum rule to test whether 9 163 is divisible by 11. Show your alternating sum and explain your conclusion.',
          answer: 'Alternating sum (from the right): 3 - 6 + 1 - 9 = -11. Since -11 is divisible by 11, 9 163 IS divisible by 11 (9163 ÷ 11 = 833).',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A reference chart listing the divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10 and 11, with the rule in purple, the digits being tested (last digit, last two digits, digit sum, alternating sum) highlighted in teal, and worked examples for 4 131, 3 124 and 5 148 showing the conclusion in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating each divisibility rule with a worked number, including why the digit-sum rule works for 3 and 9 and why the alternating-sum rule works for 11" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — HCF AND LCM OF THREE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'hcf-lcm-three-numbers',
      title: 'HCF and LCM of Three Numbers',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 6 you found the HCF and LCM of <strong>two</strong> numbers. Now we extend this to <strong>three</strong> numbers at once. Listing factors or multiples for three numbers gets slow and messy, so <strong>prime factorisation</strong> becomes the best method — it scales up easily no matter how many numbers you're working with. The steps are the same as for two numbers, just applied across all three factorisations together.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('the three numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('prime factors across all three')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('HCF / LCM')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">HCF of three numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The largest number that divides exactly into all three given numbers.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">LCM of three numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest number that is a multiple of all three given numbers.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Common to all three</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For the HCF, a prime factor must appear in <strong>all three</strong> factorisations to count — not just two of them.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Lowest / highest power</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For the HCF take the lowest power of each shared prime across all three numbers; for the LCM take the highest power of every prime that appears in any of the three.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: HCF of three numbers ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the HCF of three numbers</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each of the ${bl('three numbers')} as a product of prime factors using a factor tree.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${re('prime factors that appear in ALL THREE')} factorisations — a factor only counts if it is common to every one of the three numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For each shared prime, take the <strong>lowest power</strong> it appears with across the three numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Multiply those lowest powers together — the result is the ${or('HCF')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: LCM of three numbers ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the LCM of three numbers</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write each of the ${bl('three numbers')} as a product of prime factors.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">List every ${re('prime factor')} that appears in <strong>any</strong> of the three factorisations (it does not need to be shared).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">For each prime factor, take the <strong>highest power</strong> it appears with among the three numbers.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Multiply those highest powers together — the result is the ${or('LCM')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Careful with HCF — "common to all three" is stricter</p>` +
        `<p style="margin:0;color:#7c2d12;">A common mistake is including a prime factor in the HCF just because it's shared by two of the three numbers. For the HCF, a prime factor must appear in <strong>every single one</strong> of the three numbers — if even one number is missing that factor, it cannot be part of the HCF.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 4: HCF of 12, 18, 24 ─────────────────────────────────────
        {
          question: 'Find the HCF of 12, 18 and 24 using prime factorisation.',
          answer: `${or('HCF')} = ${or('6')}`,
          steps: [
            `Write each number as a product of prime factors: ${bl('12')} = ${re('2² × 3')}, ${bl('18')} = ${re('2 × 3²')}, ${bl('24')} = ${re('2³ × 3')}.`,
            `${re('2')} appears in all three — lowest power is ${re('2¹')} (from 18).`,
            `${re('3')} appears in all three — lowest power is ${re('3¹')} (from 12 and 24).`,
            `${or('HCF')} = ${re('2')} × ${re('3')} = ${or('6')} ✓`,
          ],
        },

        // ── Example 5: LCM of 12, 18, 24 ─────────────────────────────────────
        {
          question: 'Find the LCM of 12, 18 and 24 using prime factorisation.',
          answer: `${or('LCM')} = ${or('72')}`,
          steps: [
            `Using the same factorisations: ${bl('12')} = ${re('2² × 3')}, ${bl('18')} = ${re('2 × 3²')}, ${bl('24')} = ${re('2³ × 3')}.`,
            `Highest power of ${re('2')} across all three: ${re('2³')} (from 24).`,
            `Highest power of ${re('3')} across all three: ${re('3²')} (from 18).`,
            `${or('LCM')} = ${re('2³')} × ${re('3²')} = ${re('8')} × ${re('9')} = ${or('72')} ✓`,
          ],
        },

        // ── Example 6: HCF and LCM of 24, 36, 60 ─────────────────────────────
        {
          question: 'Find the HCF and LCM of 24, 36 and 60.',
          answer: `${or('HCF')} = ${or('12')}, ${or('LCM')} = ${or('360')}`,
          steps: [
            `Prime factorise each number: ${bl('24')} = ${re('2³ × 3')}, ${bl('36')} = ${re('2² × 3²')}, ${bl('60')} = ${re('2² × 3 × 5')}.`,
            `${re('For the HCF')}: ${re('2')} appears in all three (lowest power ${re('2²')}); ${re('3')} appears in all three (lowest power ${re('3¹')}); ${re('5')} appears in only one number, so it is excluded.`,
            `${or('HCF')} = ${re('2²')} × ${re('3')} = ${re('4')} × ${re('3')} = ${or('12')} ✓`,
            `${re('For the LCM')}: take the highest power of every prime that appears anywhere — ${re('2³')} (from 24), ${re('3²')} (from 36), ${re('5¹')} (from 60).`,
            `${or('LCM')} = ${re('2³')} × ${re('3²')} × ${re('5')} = ${re('8')} × ${re('9')} × ${re('5')} = ${or('360')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — HCF of three small numbers ─────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the HCF of 6, 9 and 12 using prime factorisation.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: '6 = 2 × 3\n9 = 3²\n12 = 2² × 3\nOnly 3 appears in all three numbers, lowest power 3¹\nHCF = 3 ✓',
        },

        // ── Q5 Medium — LCM of three numbers ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the LCM of 8, 12 and 20 using prime factorisation.',
          answer: '120',
          checkMode: 'auto',
          correctAnswer: '120',
          explanation: '8 = 2³\n12 = 2² × 3\n20 = 2² × 5\nHighest powers: 2³, 3¹, 5¹\nLCM = 2³ × 3 × 5 = 8 × 3 × 5 = 120 ✓',
        },

        // ── Q6 Hard — HCF and LCM of three numbers (two-part) ────────────────
        {
          difficulty: 'Hard',
          question: 'Find the HCF and LCM of 16, 24 and 40.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) HCF of 16, 24 and 40',
              correctAnswer: '8',
              explanation: '16 = 2⁴\n24 = 2³ × 3\n40 = 2³ × 5\nOnly 2 appears in all three, lowest power 2³\nHCF = 2³ = 8 ✓',
            },
            {
              label: 'b) LCM of 16, 24 and 40',
              correctAnswer: '240',
              explanation: '16 = 2⁴\n24 = 2³ × 3\n40 = 2³ × 5\nHighest powers: 2⁴, 3¹, 5¹\nLCM = 2⁴ × 3 × 5 = 16 × 3 × 5 = 240 ✓',
            },
          ],
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Three prime factorisation trees side by side for 24, 36 and 60, with the three numbers in blue, prime factors shared across all three circled in red, and the final HCF and LCM answers in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to extend the HCF and LCM prime factorisation method from two numbers to three numbers, with colour coded shared prime factors and highest/lowest powers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — APPLYING HCF AND LCM TO SOLVE PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'applying-hcf-lcm',
      title: 'Applying HCF and LCM to Solve Problems',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">The HCF and LCM are not just abstract exercises — they solve real problems. The ${or('LCM')} gives us the <strong>lowest common denominator (LCD)</strong> when adding or subtracting fractions with unlike denominators, and it tells us when repeating events line up again. The ${or('HCF')} tells us the largest equal-sized groups we can split things into with nothing left over. In Grade 7 we extend these classic problems to <strong>three quantities</strong> at once.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original denominators / quantities')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('LCD / LCM / HCF')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('equivalent fractions / final answer')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Lowest common denominator (LCD)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The LCM of the denominators of two or more fractions. Using the LCD as the common denominator keeps the numbers as small as possible.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Equivalent fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fraction with the same value written with a different denominator. Multiply the numerator and denominator by the same number to convert.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Coinciding events (LCM problems)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When two or more repeating events (like buses, alarms or flashing lights) happen together again — found using the LCM of their repeat times.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Equal grouping (HCF problems)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Splitting different quantities into the largest possible number of identical groups with nothing left over — found using the HCF.</p>` +
        `</div>` +

        `</div>` +

        // ── Method: Using LCM for fractions ──────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Using the LCM to add fractions with unlike denominators</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the ${or('LCM')} of all the ${bl('denominators')} — this is the ${or('LCD')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Convert each fraction into an ${gr('equivalent fraction')} with the ${or('LCD')} as its denominator.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Add or subtract the numerators, keeping the ${or('LCD')} as the denominator. Simplify the ${gr('final answer')} if possible.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Two classic word-problem types</p>` +
        `<p style="margin:0;color:#14532d;">If the problem is about <strong>splitting into equal groups with nothing left over</strong>, you need the ${or('HCF')}. If the problem is about <strong>events repeating and lining up again</strong>, you need the ${or('LCM')}. Reading the question carefully to spot which type it is is often the hardest part!</p>` +
        `</div>` +

        // ── Tip box 2 ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Three quantities, same idea</p>` +
        `<p style="margin:0;color:#7c2d12;">When a problem gives you three quantities instead of two — three denominators, three packet sizes, or three repeating events — the method does not change. You simply find the ${or('HCF')} or ${or('LCM')} of all three numbers at once, using prime factorisation as you learnt in the previous section.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 7: Adding three fractions using the LCD ──────────────────
        {
          question: 'Calculate 1/4 + 1/6 + 1/9, giving your answer in its simplest form.',
          answer: `${gr('19/36')}`,
          steps: [
            `Find the ${or('LCD')}: prime factorise the ${bl('denominators')} — 4 = 2², 6 = 2 × 3, 9 = 3². Highest powers: 2² and 3² → ${or('LCM = 4 × 9 = 36')}.`,
            `Convert each fraction to have denominator 36: 1/4 = ${gr('9/36')} (× 9), 1/6 = ${gr('6/36')} (× 6), 1/9 = ${gr('4/36')} (× 4).`,
            `Add the numerators: ${gr('9/36 + 6/36 + 4/36')} = ${gr('19/36')}.`,
            `19 and 36 share no common factor other than 1, so ${gr('19/36')} is already in simplest form ✓`,
          ],
        },

        // ── Example 8: LCM coinciding-events problem with THREE quantities ───
        {
          question: 'Three warning lights flash at the start of a test. The red light flashes every 8 seconds, the yellow light every 12 seconds, and the green light every 18 seconds. If all three flash together at the start, after how many seconds will they next flash together?',
          answer: `They will next flash together after ${or('72')} seconds`,
          steps: [
            `This is a "repeating events line up again" problem, so we need the ${or('LCM')} of ${bl('8, 12 and 18')}.`,
            `Prime factorise: 8 = 2³, 12 = 2² × 3, 18 = 2 × 3².`,
            `Take the highest power of each prime: 2³ (from 8) and 3² (from 18).`,
            `${or('LCM')} = 2³ × 3² = 8 × 9 = ${or('72')}.`,
            `<strong>Answer:</strong> All three lights will flash together again after ${or('72')} seconds ✓`,
          ],
        },

        // ── Example 9: HCF equal-grouping problem with THREE quantities ──────
        {
          question: 'A bakery has 48 chocolate cupcakes, 72 vanilla cupcakes and 96 strawberry cupcakes. The owner wants to pack them into identical boxes so that each box has the same number of each flavour, with none left over. What is the greatest number of boxes she can make, and how many of each flavour will be in a box?',
          answer: `She can make ${or('24')} boxes — each with ${gr('2')} chocolate, ${gr('3')} vanilla, and ${gr('4')} strawberry cupcakes`,
          steps: [
            `This is a "splitting into equal groups with nothing left over" problem, so we need the ${or('HCF')} of ${bl('48, 72 and 96')}.`,
            `Prime factorise: 48 = 2⁴ × 3, 72 = 2³ × 3², 96 = 2⁵ × 3.`,
            `The only prime common to all three is 2, with lowest power 2³. 3 appears in all three too, with lowest power 3¹.`,
            `${or('HCF')} = 2³ × 3 = 8 × 3 = ${or('24')}.`,
            `<strong>Answer:</strong> She can make ${or('24')} boxes, each with 48 ÷ 24 = ${gr('2')} chocolate, 72 ÷ 24 = ${gr('3')} vanilla, and 96 ÷ 24 = ${gr('4')} strawberry cupcakes ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — LCD to add two fractions ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 2/9 + 5/12, giving your answer as a single fraction over the LCD.',
          answer: '23/36',
          checkMode: 'auto',
          correctAnswer: '23/36',
          correctAnswers: ['23/36', '23 / 36'],
          explanation: '9 = 3², 12 = 2² × 3\nLCM (LCD) = 2² × 3² = 36\n2/9 = 8/36, 5/12 = 15/36\n8/36 + 15/36 = 23/36 ✓ (already in simplest form)',
        },

        // ── Q8 Medium — LCM coinciding-events with three quantities ───────────
        {
          difficulty: 'Medium',
          question: 'Three sirens sound together at 08:00. Siren A sounds every 15 minutes, Siren B every 20 minutes, and Siren C every 25 minutes. After how many minutes will all three sound together again?',
          answer: '300',
          checkMode: 'auto',
          correctAnswer: '300',
          explanation: '15 = 3 × 5, 20 = 2² × 5, 25 = 5²\nHighest powers: 2², 3¹, 5²\nLCM = 4 × 3 × 25 = 300\nThey next sound together after 300 minutes ✓',
        },

        // ── Q9 Hard — HCF equal-grouping word problem, three quantities ───────
        {
          difficulty: 'Hard',
          question: 'A charity is packing hampers using 36 tins of beans, 60 tins of soup and 84 tins of vegetables. They want each hamper to be identical, using all the tins with none left over. What is the greatest number of hampers they can make, and how many of each type of tin will be in a hamper? Show your working.',
          answer: 'HCF of 36, 60 and 84 = 12 (36=2²×3², 60=2²×3×5, 84=2²×3×7; common: 2²×3=12). They can make 12 hampers, each with 3 tins of beans, 5 tins of soup, and 7 tins of vegetables.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A fraction bar diagram showing 1/4, 1/6 and 1/9 converted to equivalent fractions over the LCD of 36 in green, alongside a bakery hamper diagram showing 48, 72 and 96 cupcakes in blue being split into 24 equal boxes using the HCF shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use the LCM as the lowest common denominator to add fractions, and how to solve HCF/LCM word problems involving three quantities such as packing hampers and coinciding flashing lights" />',
    },
  ],
  resultsConfig: {
    totalMarks: 10,
    messages: [
      { minScore: 10, message: 'Outstanding! You have mastered divisibility rules and HCF/LCM of three numbers.' },
      { minScore: 8, message: 'Great work! You have a strong understanding of properties of numbers.' },
      { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  scoreMessages: [
    { minScore: 10, message: 'Outstanding! You have mastered divisibility rules and HCF/LCM of three numbers.' },
    { minScore: 8, message: 'Great work! You have a strong understanding of properties of numbers.' },
    { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
    { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
  ],
}
