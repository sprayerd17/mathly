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

      videoPlaceholder:
        'Short video demonstrating each divisibility rule with a worked number, including why the digit-sum rule works for 3 and 9 and why the alternating-sum rule works for 11',
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
        'Three prime factorisation trees side by side for 24, 36 and 60, with the three numbers in blue, prime factors shared across all three circled in red, and the final HCF and LCM answers in orange',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 195" width="100%" style="max-width:560px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<g transform="translate(10,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">24</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">12</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">6</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">24 = 2³×3</text>` +
        `</g>` +
        `<g transform="translate(150,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">36</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">18</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">9</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">36 = 2²×3²</text>` +
        `</g>` +
        `<g transform="translate(290,10)">` +
        `<line x1="65" y1="14" x2="35" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="65" y1="14" x2="95" y2="46" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="65" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="95" y1="46" x2="120" y2="78" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="98" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="120" y1="78" x2="128" y2="110" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="65" y="10" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">60</text>` +
        `<circle cx="35" cy="46" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="35" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="95" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">30</text>` +
        `<circle cx="65" cy="78" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="65" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2</text>` +
        `<text x="120" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">15</text>` +
        `<circle cx="98" cy="110" r="10" fill="rgba(220,38,38,0.12)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="98" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">3</text>` +
        `<circle cx="128" cy="110" r="10" fill="rgba(107,114,128,0.12)" stroke="#6b7280" stroke-width="2"/>` +
        `<text x="128" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#6b7280">5</text>` +
        `<text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">60 = 2²×3×5</text>` +
        `</g>` +
        `<text x="220" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Shared (red) primes, lowest powers: 2² × 3 → HCF = 12</text>` +
        `<text x="220" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">Highest powers of every prime: 2³ × 3² × 5 → LCM = 360</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to extend the HCF and LCM prime factorisation method from two numbers to three numbers, with colour coded shared prime factors and highest/lowest powers',
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
        'A fraction bar diagram showing 1/4, 1/6 and 1/9 converted to equivalent fractions over the LCD of 36, with the individual bars in green and the combined total bar in blue',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 140" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="118" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">Denominators converted to 36ths (the LCD)</text>` +
        `<rect x="20" y="22" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="22" width="54" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="34" font-size="11" font-weight="700" fill="#16a34a">1/4 = 9/36</text>` +
        `<rect x="20" y="50" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="50" width="36" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="62" font-size="11" font-weight="700" fill="#16a34a">1/6 = 6/36</text>` +
        `<rect x="20" y="78" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="78" width="24" height="16" fill="rgba(22,163,74,0.35)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="242" y="90" font-size="11" font-weight="700" fill="#16a34a">1/9 = 4/36</text>` +
        `<line x1="20" y1="102" x2="236" y2="102" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>` +
        `<rect x="20" y="112" width="216" height="16" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="20" y="112" width="114" height="16" fill="rgba(37,99,235,0.35)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="242" y="124" font-size="12" font-weight="700" fill="#2563eb">= 19/36</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to use the LCM as the lowest common denominator to add fractions, and how to solve HCF/LCM word problems involving three quantities such as packing hampers and coinciding flashing lights',
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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Factors & multiples | 4-7 Prime vs composite & prime
    // factorisation | 8-10 Divisibility rules | 11-13 HCF | 14-16 LCM |
    // 17-19 Square/cube numbers & roots / multi-step reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'List all the factors of 36.', answer: '1, 2, 3, 4, 6, 9, 12, 18, 36', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 9, 12, 18, 36', correctAnswers: ['1, 2, 3, 4, 6, 9, 12, 18, 36', '1,2,3,4,6,9,12,18,36'], explanation: 'Test each whole number from 1 up: 36 ÷ 1 = 36, ÷2 = 18, ÷3 = 12, ÷4 = 9, ÷6 = 6 (meet in the middle).\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 ✓' },
        { difficulty: 'Easy', question: 'Write the first six multiples of 9.', answer: '9, 18, 27, 36, 45, 54', checkMode: 'auto', correctAnswer: '9, 18, 27, 36, 45, 54', correctAnswers: ['9, 18, 27, 36, 45, 54', '9,18,27,36,45,54'], explanation: 'Multiply 9 by 1, 2, 3, 4, 5, 6: 9, 18, 27, 36, 45, 54 ✓' },
        { difficulty: 'Easy', question: 'A tuck shop sells pies in packs of 6. Sipho wants to buy exactly 48 pies. Is 48 a multiple of 6? Explain, and say how many packs he needs.', answer: 'Yes, 48 is a multiple of 6 because 48 ÷ 6 = 8 exactly. He needs 8 packs.', checkMode: 'self', explanation: '48 ÷ 6 = 8 with no remainder, so 48 is a multiple of 6 (equivalently, 6 is a factor of 48). Sipho needs 8 packs to get exactly 48 pies.' },
        { difficulty: 'Easy-Medium', question: 'Thandi lists the factors of 28 as 1, 2, 4, 7, 14. She says this is the complete list. Is she correct?', answer: 'No — she is missing 28 itself. The complete list of factors of 28 is 1, 2, 4, 7, 14, 28, since every number is a factor of itself.', checkMode: 'self', explanation: '28 ÷ 1 = 28, ÷2 = 14, ÷4 = 7, ÷7 = 4, ÷14 = 2, ÷28 = 1. The complete factor list is 1, 2, 4, 7, 14, 28. Thandi forgot that 28 is always a factor of itself.' },
        { difficulty: 'Medium', question: 'Is 41 a prime number or a composite number? Give a brief reason.', answer: 'Prime — its only factors are 1 and 41, so it cannot be split into smaller whole-number factors.', checkMode: 'self', explanation: '41 is not divisible by 2, 3, or 5 (checking up to its square root, about 6.4, is enough — so we also check 7 is too big, meaning we stop at ÷5). Its only factors are 1 and 41, so it is prime.' },
        { difficulty: 'Medium', question: 'Use a factor tree to write 90 as a product of its prime factors, using exponents.', answer: '2 x 3² x 5', checkMode: 'auto', correctAnswer: '2 x 3² x 5', correctAnswers: ['2 x 3² x 5', '2 x 3^2 x 5', '2 × 3² × 5', '2 × 3^2 × 5'], explanation: 'Factor tree: 90 → 9 × 10 → 3 × 3 × 2 × 5\nPrime factors: 2, 3, 3, 5\n3 appears twice → 3²\nPrime factorisation: 90 = 2 × 3² × 5 ✓' },
        { difficulty: 'Medium', question: 'A learner factorises 126 as 126 → 2 × 63 → 2 × 7 × 9 → 2 × 7 × 3 × 3, then writes the final answer as 2 × 3 × 7². Spot the mistake and give the correct prime factorisation.', answer: '2 x 3² x 7', checkMode: 'auto', correctAnswer: '2 x 3² x 7', correctAnswers: ['2 x 3² x 7', '2 x 3^2 x 7', '2 × 3² × 7', '2 × 3^2 × 7'], explanation: 'The prime factors found (2, 7, 3, 3) are correct, but the learner put the exponent on the wrong prime — 3 appears twice, not 7. It should be 3², not 7².\nCorrect prime factorisation: 126 = 2 × 3² × 7 ✓' },
        { difficulty: 'Medium', question: 'A rectangular garden has an area of 200 m² made of whole-metre sides. Write 200 as a product of prime factors, then use it to explain why the garden could measure 8 m by 25 m.', answer: '200 = 2³ × 5². Since 8 = 2³ and 25 = 5², multiplying them gives 2³ × 5² = 200, so 8 m × 25 m is a valid pair of whole-metre dimensions.', checkMode: 'self', explanation: '200 = 2 × 100 = 2 × 2 × 50 = 2 × 2 × 2 × 25 = 2³ × 5². Since 8 × 25 = 200, and 8 = 2³, 25 = 5², this matches the prime factorisation exactly, confirming 8 m by 25 m is valid.' },
        { difficulty: 'Medium', question: 'Test whether 3 216 is divisible by 3, by 4, and by 9. Show your digit sum and last-two-digits working.', answer: 'Divisible by 3 and by 4, but NOT by 9.', checkMode: 'auto', correctAnswer: 'divisible by 3 and 4, not by 9', correctAnswers: ['divisible by 3 and 4, not by 9', 'yes, yes, no', 'yes yes no'], explanation: 'Digit sum of 3216 = 3+2+1+6 = 12. 12 ÷ 3 = 4 exactly → divisible by 3. 12 ÷ 9 = 1.33 → NOT divisible by 9.\nLast two digits: 16. 16 ÷ 4 = 4 exactly → divisible by 4.\nSo: divisible by 3 ✓, divisible by 4 ✓, NOT divisible by 9 ✗' },
        { difficulty: 'Medium', question: 'A learner tests whether 5 720 is divisible by 8 by checking if the whole number 5720 ÷ 8 gives a whole answer, instead of using the last-three-digits rule. Explain the shortcut rule they should have used, then state whether 5 720 is divisible by 8.', answer: 'The last-three-digits rule: check whether the last three digits (720) are divisible by 8, since 1000 is already divisible by 8. 720 ÷ 8 = 90 exactly, so 5 720 IS divisible by 8.', checkMode: 'self', explanation: 'The rule for 8 says to only check the last three digits, because 1 000 is already a multiple of 8, so higher place values never affect divisibility by 8. Last three digits of 5720 are 720, and 720 ÷ 8 = 90 exactly, so 5720 is divisible by 8. (Full check: 5720 ÷ 8 = 715, confirming this.)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 54 and 90 by listing factors.', answer: '18', checkMode: 'auto', correctAnswer: '18', explanation: 'Factors of 54: 1, 2, 3, 6, 9, 18, 27, 54\nFactors of 90: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90\nCommon factors: 1, 2, 3, 6, 9, 18\nHCF = 18 ✓ (18 divides exactly into both 54 and 90: 54÷18=3, 90÷18=5)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 75 and 100 using prime factorisation.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '75 = 3 × 5²\n100 = 2² × 5²\nShared prime factor: 5 (lowest power 5²)\nHCF = 5² = 25 ✓ (check: 75÷25=3 exact, 100÷25=4 exact)' },
        { difficulty: 'Medium-Hard', question: 'A florist has 64 roses and 96 lilies. She wants to make identical bouquets using all the flowers with none left over. What is the maximum number of bouquets she can make, and how many of each flower per bouquet?', answer: '32 bouquets, each with 2 roses and 3 lilies', checkMode: 'auto', correctAnswer: '32 bouquets, each with 2 roses and 3 lilies', correctAnswers: ['32 bouquets, each with 2 roses and 3 lilies', '32 bouquets with 2 roses and 3 lilies each'], explanation: '64 = 2⁶\n96 = 2⁵ × 3\nShared prime factor: 2 (lowest power 2⁵)\nHCF = 2⁵ = 32 bouquets (check: 32 divides exactly into 64 and 96)\nRoses per bouquet: 64 ÷ 32 = 2. Lilies per bouquet: 96 ÷ 32 = 3 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 15 and 20 by listing multiples.', answer: '60', checkMode: 'auto', correctAnswer: '60', explanation: 'Multiples of 15: 15, 30, 45, 60\nMultiples of 20: 20, 40, 60\nSmallest shared multiple: 60\nLCM = 60 ✓ (check: 60÷15=4 exact, 60÷20=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 24 and 36 using prime factorisation.', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: '24 = 2³ × 3\n36 = 2² × 3²\nHighest powers: 2³ (from 24), 3² (from 36)\nLCM = 2³ × 3² = 8 × 9 = 72 ✓ (check: 72÷24=3 exact, 72÷36=2 exact)' },
        { difficulty: 'Medium-Hard', question: 'Two delivery vans leave the depot together. Van A returns to the depot every 18 minutes, Van B every 24 minutes. After how many minutes will they next be at the depot together?', answer: '72', checkMode: 'auto', correctAnswer: '72', explanation: 'Find the LCM of 18 and 24.\n18 = 2 × 3²\n24 = 2³ × 3\nHighest powers: 2³ (from 24), 3² (from 18)\nLCM = 2³ × 3² = 8 × 9 = 72\nThey will next be together after 72 minutes ✓ (check: 72÷18=4 exact, 72÷24=3 exact)' },
        { difficulty: 'Hard', question: 'Is 225 a perfect square? Is 216 a perfect cube? Show how you know for each.', answer: '225 is a perfect square (15² = 225). 216 is a perfect cube (6³ = 216).', checkMode: 'auto', correctAnswer: '225 is a perfect square (15²=225); 216 is a perfect cube (6³=216)', correctAnswers: ['yes and yes', '225 is a perfect square, 216 is a perfect cube'], explanation: '15 × 15 = 225, so 225 = 15² is a perfect square.\n6 × 6 × 6 = 216, so 216 = 6³ is a perfect cube.\nBoth check out exactly ✓' },
        { difficulty: 'Hard', question: 'Find the HCF and LCM of 20, 30 and 50.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 20, 30 and 50', correctAnswer: '10', explanation: '20 = 2² × 5\n30 = 2 × 3 × 5\n50 = 2 × 5²\nOnly 2 and 5 appear in all three: lowest power of 2 is 2¹, lowest power of 5 is 5¹\nHCF = 2 × 5 = 10 ✓ (check: 10 divides exactly into 20, 30 and 50)' }, { label: 'b) LCM of 20, 30 and 50', correctAnswer: '300', explanation: '20 = 2² × 5\n30 = 2 × 3 × 5\n50 = 2 × 5²\nHighest powers: 2² (from 20), 3¹ (from 30), 5² (from 50)\nLCM = 2² × 3 × 5² = 4 × 3 × 25 = 300 ✓ (check: 300 is exactly divisible by 20, 30 and 50)' } ] },
        { difficulty: 'Hard', question: 'Palesa says that because 49 is odd, it cannot be a perfect square. Is she correct? Explain, and name the two smallest odd perfect squares greater than 1.', answer: 'No — Palesa is incorrect. 49 = 7² is a perfect square even though it is odd. The two smallest odd perfect squares greater than 1 are 9 (3²) and 25 (5²).', checkMode: 'self', explanation: '49 = 7 × 7 = 7², so 49 IS a perfect square despite being odd. In fact, an odd number squared is always odd (odd × odd = odd), so many perfect squares are odd. The smallest perfect squares greater than 1 are 4, 9, 16, 25, 36, 49 — the odd ones among these are 9 and 25.' },
        { difficulty: 'Hard', question: 'A school is laying square paving tiles to cover a rectangular courtyard measuring 63 m by 84 m, using the largest possible whole-metre square tiles with no cutting. Find the tile side length, then state how many tiles are needed in total.', answer: 'Tile side = 21 m; 12 tiles needed in total', checkMode: 'auto', correctAnswer: '21 m tiles, 12 tiles total', correctAnswers: ['21 m, 12 tiles', 'tile side 21m, 12 tiles total', '21 m tiles, 12 tiles needed'], explanation: 'The largest square tile side is the HCF of 63 and 84.\n63 = 3² × 7\n84 = 2² × 3 × 7\nShared prime factors: 3 (lowest power 3¹) and 7 (power 1)\nHCF = 3 × 7 = 21 m per tile side (check: 63÷21=3 exact, 84÷21=4 exact)\nAlong the 63 m side: 63 ÷ 21 = 3 tiles. Along the 84 m side: 84 ÷ 21 = 4 tiles.\nTotal tiles = 3 × 4 = 12 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered factors, multiples, divisibility, HCF, LCM and square/cube numbers.' },
        { minScore: 15, message: 'Great work! You have a strong understanding of properties of numbers.' },
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
        { difficulty: 'Easy', question: 'List all the factors of 48.', answer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48', correctAnswers: ['1, 2, 3, 4, 6, 8, 12, 16, 24, 48', '1,2,3,4,6,8,12,16,24,48'], explanation: 'Test each whole number from 1 up: 48 ÷ 1 = 48, ÷2 = 24, ÷3 = 16, ÷4 = 12, ÷6 = 8 (meet in the middle).\nFactors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 ✓' },
        { difficulty: 'Easy', question: 'Write the first six multiples of 7.', answer: '7, 14, 21, 28, 35, 42', checkMode: 'auto', correctAnswer: '7, 14, 21, 28, 35, 42', correctAnswers: ['7, 14, 21, 28, 35, 42', '7,14,21,28,35,42'], explanation: 'Multiply 7 by 1, 2, 3, 4, 5, 6: 7, 14, 21, 28, 35, 42 ✓' },
        { difficulty: 'Easy', question: 'A bakery sells bread rolls in bags of 8. Naledi wants to buy exactly 56 rolls. Is 56 a multiple of 8? Explain, and say how many bags she needs.', answer: 'Yes, 56 is a multiple of 8 because 56 ÷ 8 = 7 exactly. She needs 7 bags.', checkMode: 'self', explanation: '56 ÷ 8 = 7 with no remainder, so 56 is a multiple of 8 (equivalently, 8 is a factor of 56). Naledi needs 7 bags to get exactly 56 rolls.' },
        { difficulty: 'Easy-Medium', question: 'Kagiso lists the factors of 32 as 1, 2, 4, 8, 16. He says this is the complete list. Is he correct?', answer: 'No — he is missing 32 itself. The complete list of factors of 32 is 1, 2, 4, 8, 16, 32, since every number is a factor of itself.', checkMode: 'self', explanation: '32 ÷ 1 = 32, ÷2 = 16, ÷4 = 8, ÷8 = 4, ÷16 = 2, ÷32 = 1. The complete factor list is 1, 2, 4, 8, 16, 32. Kagiso forgot that 32 is always a factor of itself.' },
        { difficulty: 'Medium', question: 'Is 43 a prime number or a composite number? Give a brief reason.', answer: 'Prime — its only factors are 1 and 43, so it cannot be split into smaller whole-number factors.', checkMode: 'self', explanation: '43 is not divisible by 2, 3, or 5 (checking up to its square root, about 6.6, is enough, so we also confirm not divisible by nothing new appears before 7² exceeds it). Its only factors are 1 and 43, so it is prime.' },
        { difficulty: 'Medium', question: 'Use a factor tree to write 126 as a product of its prime factors, using exponents.', answer: '2 x 3² x 7', checkMode: 'auto', correctAnswer: '2 x 3² x 7', correctAnswers: ['2 x 3² x 7', '2 x 3^2 x 7', '2 × 3² × 7', '2 × 3^2 × 7'], explanation: 'Factor tree: 126 → 2 × 63 → 2 × 7 × 9 → 2 × 7 × 3 × 3\nPrime factors: 2, 3, 3, 7\n3 appears twice → 3²\nPrime factorisation: 126 = 2 × 3² × 7 ✓' },
        { difficulty: 'Medium', question: 'A learner factorises 175 as 175 → 5 × 35 → 5 × 5 × 7, then writes the final answer as 5 × 7². Spot the mistake and give the correct prime factorisation.', answer: '5² x 7', checkMode: 'auto', correctAnswer: '5² x 7', correctAnswers: ['5² x 7', '5^2 x 7', '5² × 7', '5^2 × 7'], explanation: 'The prime factors found (5, 5, 7) are correct, but the learner put the exponent on the wrong prime — 5 appears twice, not 7. It should be 5², not 7².\nCorrect prime factorisation: 175 = 5² × 7 ✓' },
        { difficulty: 'Medium', question: 'A rectangular hall floor has an area of 300 m² made of whole-metre sides. Write 300 as a product of prime factors, then use it to explain why the hall could measure 12 m by 25 m.', answer: '300 = 2² × 3 × 5². Since 12 = 2² × 3 and 25 = 5², multiplying them gives 2² × 3 × 5² = 300, so 12 m × 25 m is a valid pair of whole-metre dimensions.', checkMode: 'self', explanation: '300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2² × 3 × 5². Since 12 × 25 = 300, and 12 = 2² × 3, 25 = 5², this matches the prime factorisation exactly, confirming 12 m by 25 m is valid.' },
        { difficulty: 'Medium', question: 'Test whether 4 712 is divisible by 3, by 4, and by 8. Show your digit sum and last-digits working.', answer: 'Divisible by 4 and by 8, but NOT by 3.', checkMode: 'auto', correctAnswer: 'divisible by 4 and 8, not by 3', correctAnswers: ['divisible by 4 and 8, not by 3', 'no, yes, yes', 'yes, yes, no order 4,8,3'], explanation: 'Digit sum of 4712 = 4+7+1+2 = 14. 14 ÷ 3 = 4.67 → NOT divisible by 3.\nLast two digits: 12. 12 ÷ 4 = 3 exactly → divisible by 4.\nLast three digits: 712. 712 ÷ 8 = 89 exactly → divisible by 8.\nSo: NOT divisible by 3 ✗, divisible by 4 ✓, divisible by 8 ✓' },
        { difficulty: 'Medium', question: 'A learner tests whether 6 156 is divisible by 9 by checking if it "looks like a multiple of 9" without adding digits. Explain the correct digit-sum shortcut, then state whether 6 156 is divisible by 9.', answer: 'The digit-sum rule: add all the digits, and check if that sum is divisible by 9. Digit sum of 6156 is 6+1+5+6 = 18, and 18 ÷ 9 = 2 exactly, so 6 156 IS divisible by 9.', checkMode: 'self', explanation: 'The rule for 9 says to add all digits and test whether that digit sum is divisible by 9, because 10, 100, 1000 etc. all leave remainder 1 when divided by 9. Digit sum of 6156 = 6+1+5+6 = 18, and 18 ÷ 9 = 2 exactly, so 6156 is divisible by 9. (Full check: 6156 ÷ 9 = 684, confirming this.)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 42 and 63 by listing factors.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Factors of 42: 1, 2, 3, 6, 7, 14, 21, 42\nFactors of 63: 1, 3, 7, 9, 21, 63\nCommon factors: 1, 3, 7, 21\nHCF = 21 ✓ (21 divides exactly into both 42 and 63: 42÷21=2, 63÷21=3)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 80 and 120 using prime factorisation.', answer: '40', checkMode: 'auto', correctAnswer: '40', explanation: '80 = 2⁴ × 5\n120 = 2³ × 3 × 5\nShared prime factors: 2 (lowest power 2³) and 5 (lowest power 5¹)\nHCF = 2³ × 5 = 8 × 5 = 40 ✓ (check: 80÷40=2 exact, 120÷40=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'A caterer has 56 cupcakes and 70 muffins. She wants to make identical trays using all the baked goods with none left over. What is the maximum number of trays she can make, and how many of each item per tray?', answer: '14 trays, each with 4 cupcakes and 5 muffins', checkMode: 'auto', correctAnswer: '14 trays, each with 4 cupcakes and 5 muffins', correctAnswers: ['14 trays, each with 4 cupcakes and 5 muffins', '14 trays with 4 cupcakes and 5 muffins each'], explanation: '56 = 2³ × 7\n70 = 2 × 5 × 7\nShared prime factors: 2 (lowest power 2¹) and 7 (power 1)\nHCF = 2 × 7 = 14 trays (check: 14 divides exactly into 56 and 70)\nCupcakes per tray: 56 ÷ 14 = 4. Muffins per tray: 70 ÷ 14 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 9 and 15 by listing multiples.', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: 'Multiples of 9: 9, 18, 27, 36, 45\nMultiples of 15: 15, 30, 45\nSmallest shared multiple: 45\nLCM = 45 ✓ (check: 45÷9=5 exact, 45÷15=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 18 and 30 using prime factorisation.', answer: '90', checkMode: 'auto', correctAnswer: '90', explanation: '18 = 2 × 3²\n30 = 2 × 3 × 5\nHighest powers: 2¹ (shared), 3² (from 18), 5¹ (from 30)\nLCM = 2 × 3² × 5 = 2 × 9 × 5 = 90 ✓ (check: 90÷18=5 exact, 90÷30=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'Two joggers start together on a track. Jogger A completes a lap every 15 minutes, Jogger B every 25 minutes. After how many minutes will they next be at the starting point together?', answer: '75', checkMode: 'auto', correctAnswer: '75', explanation: 'Find the LCM of 15 and 25.\n15 = 3 × 5\n25 = 5²\nHighest powers: 3¹ (from 15), 5² (from 25)\nLCM = 3 × 5² = 3 × 25 = 75\nThey will next be together after 75 minutes ✓ (check: 75÷15=5 exact, 75÷25=3 exact)' },
        { difficulty: 'Hard', question: 'Is 196 a perfect square? Is 343 a perfect cube? Show how you know for each.', answer: '196 is a perfect square (14² = 196). 343 is a perfect cube (7³ = 343).', checkMode: 'auto', correctAnswer: '196 is a perfect square (14²=196); 343 is a perfect cube (7³=343)', correctAnswers: ['yes and yes', '196 is a perfect square, 343 is a perfect cube'], explanation: '14 × 14 = 196, so 196 = 14² is a perfect square.\n7 × 7 × 7 = 343, so 343 = 7³ is a perfect cube.\nBoth check out exactly ✓' },
        { difficulty: 'Hard', question: 'Find the HCF and LCM of 18, 24 and 30.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 18, 24 and 30', correctAnswer: '6', explanation: '18 = 2 × 3²\n24 = 2³ × 3\n30 = 2 × 3 × 5\nOnly 2 and 3 appear in all three: lowest power of 2 is 2¹, lowest power of 3 is 3¹\nHCF = 2 × 3 = 6 ✓ (check: 6 divides exactly into 18, 24 and 30)' }, { label: 'b) LCM of 18, 24 and 30', correctAnswer: '360', explanation: '18 = 2 × 3²\n24 = 2³ × 3\n30 = 2 × 3 × 5\nHighest powers: 2³ (from 24), 3² (from 18), 5¹ (from 30)\nLCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360 ✓ (check: 360 is exactly divisible by 18, 24 and 30)' } ] },
        { difficulty: 'Hard', question: 'Tumi says that because 125 is odd, it cannot be a perfect cube. Is she correct? Explain, and name the two smallest odd perfect cubes greater than 1.', answer: 'No — Tumi is incorrect. 125 = 5³ is a perfect cube even though it is odd. The two smallest odd perfect cubes greater than 1 are 27 (3³) and 125 (5³).', checkMode: 'self', explanation: '125 = 5 × 5 × 5 = 5³, so 125 IS a perfect cube despite being odd. In fact, an odd number cubed is always odd (odd × odd × odd = odd), so many perfect cubes are odd. The smallest perfect cubes greater than 1 are 8, 27, 64, 125, 216 — the odd ones among these are 27 and 125.' },
        { difficulty: 'Hard', question: 'A farmer is dividing a rectangular field measuring 56 m by 70 m into the largest possible whole-metre square plots with no land wasted. Find the plot side length, then state how many plots are needed in total.', answer: 'Plot side = 14 m; 20 plots needed in total', checkMode: 'auto', correctAnswer: '14 m plots, 20 plots total', correctAnswers: ['14 m, 20 plots', 'plot side 14m, 20 plots total', '14 m plots, 20 plots needed'], explanation: 'The largest square plot side is the HCF of 56 and 70.\n56 = 2³ × 7\n70 = 2 × 5 × 7\nShared prime factors: 2 (lowest power 2¹) and 7 (power 1)\nHCF = 2 × 7 = 14 m per plot side (check: 56÷14=4 exact, 70÷14=5 exact)\nAlong the 56 m side: 56 ÷ 14 = 4 plots. Along the 70 m side: 70 ÷ 14 = 5 plots.\nTotal plots = 4 × 5 = 20 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently apply factors, multiples, divisibility, HCF, LCM and square/cube numbers.' },
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
        { difficulty: 'Easy', question: 'List all the factors of 60.', answer: '1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', checkMode: 'auto', correctAnswer: '1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', correctAnswers: ['1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60', '1,2,3,4,5,6,10,12,15,20,30,60'], explanation: 'Test each whole number from 1 up: 60 ÷ 1 = 60, ÷2 = 30, ÷3 = 20, ÷4 = 15, ÷5 = 12, ÷6 = 10 (meet in the middle).\nFactors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 ✓' },
        { difficulty: 'Easy', question: 'Write the first six multiples of 11.', answer: '11, 22, 33, 44, 55, 66', checkMode: 'auto', correctAnswer: '11, 22, 33, 44, 55, 66', correctAnswers: ['11, 22, 33, 44, 55, 66', '11,22,33,44,55,66'], explanation: 'Multiply 11 by 1, 2, 3, 4, 5, 6: 11, 22, 33, 44, 55, 66 ✓' },
        { difficulty: 'Easy', question: 'A stationery shop sells pencils in boxes of 12. Ayesha wants to buy exactly 84 pencils. Is 84 a multiple of 12? Explain, and say how many boxes she needs.', answer: 'Yes, 84 is a multiple of 12 because 84 ÷ 12 = 7 exactly. She needs 7 boxes.', checkMode: 'self', explanation: '84 ÷ 12 = 7 with no remainder, so 84 is a multiple of 12 (equivalently, 12 is a factor of 84). Ayesha needs 7 boxes to get exactly 84 pencils.' },
        { difficulty: 'Easy-Medium', question: 'Bongani lists the factors of 50 as 1, 2, 5, 10, 25. He says this is the complete list. Is he correct?', answer: 'No — he is missing 50 itself. The complete list of factors of 50 is 1, 2, 5, 10, 25, 50, since every number is a factor of itself.', checkMode: 'self', explanation: '50 ÷ 1 = 50, ÷2 = 25, ÷5 = 10, ÷10 = 5, ÷25 = 2, ÷50 = 1. The complete factor list is 1, 2, 5, 10, 25, 50. Bongani forgot that 50 is always a factor of itself.' },
        { difficulty: 'Medium', question: 'Is 47 a prime number or a composite number? Give a brief reason.', answer: 'Prime — its only factors are 1 and 47, so it cannot be split into smaller whole-number factors.', checkMode: 'self', explanation: '47 is not divisible by 2, 3, or 5 (checking up to its square root, about 6.9, is enough). Its only factors are 1 and 47, so it is prime.' },
        { difficulty: 'Medium', question: 'Use a factor tree to write 300 as a product of its prime factors, using exponents.', answer: '2² x 3 x 5²', checkMode: 'auto', correctAnswer: '2² x 3 x 5²', correctAnswers: ['2² x 3 x 5²', '2^2 x 3 x 5^2', '2² × 3 × 5²', '2^2 × 3 × 5^2'], explanation: 'Factor tree: 300 → 3 × 100 → 3 × 10 × 10 → 3 × 2 × 5 × 2 × 5\nPrime factors: 2, 2, 3, 5, 5\n2 appears twice, 5 appears twice → 2² and 5²\nPrime factorisation: 300 = 2² × 3 × 5² ✓' },
        { difficulty: 'Medium', question: 'A learner factorises 245 as 245 → 5 × 49 → 5 × 7 × 7, then writes the final answer as 5² × 7. Spot the mistake and give the correct prime factorisation.', answer: '5 x 7²', checkMode: 'auto', correctAnswer: '5 x 7²', correctAnswers: ['5 x 7²', '5 x 7^2', '5 × 7²', '5 × 7^2'], explanation: 'The prime factors found (5, 7, 7) are correct, but the learner put the exponent on the wrong prime — 7 appears twice, not 5. It should be 7², not 5².\nCorrect prime factorisation: 245 = 5 × 7² ✓' },
        { difficulty: 'Medium', question: 'A rectangular sports field has an area of 128 m² made of whole-metre sides. Write 128 as a product of prime factors, then use it to explain why the field could measure 8 m by 16 m.', answer: '128 = 2⁷. Since 8 = 2³ and 16 = 2⁴, multiplying them gives 2³ × 2⁴ = 2⁷ = 128, so 8 m × 16 m is a valid pair of whole-metre dimensions.', checkMode: 'self', explanation: '128 = 2 × 64 = 2 × 2 × 32 = ... = 2⁷ (seven factors of 2, since 2⁷ = 128). Since 8 × 16 = 128, and 8 = 2³, 16 = 2⁴, adding the exponents gives 2³⁺⁴ = 2⁷, matching the prime factorisation exactly, confirming 8 m by 16 m is valid.' },
        { difficulty: 'Medium', question: 'Test whether 8 271 is divisible by 3, by 9, and by 2. Show your digit sum and last-digit working.', answer: 'Divisible by 3 and by 9, but NOT by 2.', checkMode: 'auto', correctAnswer: 'divisible by 3 and 9, not by 2', correctAnswers: ['divisible by 3 and 9, not by 2', 'yes, yes, no'], explanation: 'Digit sum of 8271 = 8+2+7+1 = 18. 18 ÷ 3 = 6 exactly → divisible by 3. 18 ÷ 9 = 2 exactly → divisible by 9.\nLast digit: 1, which is odd → NOT divisible by 2.\nSo: divisible by 3 ✓, divisible by 9 ✓, NOT divisible by 2 ✗' },
        { difficulty: 'Medium', question: 'A learner tests whether 2 937 is divisible by 11 by guessing, without using the alternating digit sum. Explain the correct alternating-sum shortcut, then state whether 2 937 is divisible by 11.', answer: 'The alternating digit sum rule: starting from the right, alternately add and subtract digits, and check if the result is divisible by 11 (including 0). For 2937: 7 − 3 + 9 − 2 = 11, and 11 is divisible by 11, so 2 937 IS divisible by 11.', checkMode: 'self', explanation: 'The rule for 11 says to alternately add and subtract digits from the right, because powers of 10 alternate between remainder 1 and remainder -1 when divided by 11. For 2937: 7 − 3 + 9 − 2 = 11, and 11 ÷ 11 = 1 exactly, so 2937 is divisible by 11. (Full check: 2937 ÷ 11 = 267, confirming this.)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 28 and 70 by listing factors.', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Factors of 28: 1, 2, 4, 7, 14, 28\nFactors of 70: 1, 2, 5, 7, 10, 14, 35, 70\nCommon factors: 1, 2, 7, 14\nHCF = 14 ✓ (14 divides exactly into both 28 and 70: 28÷14=2, 70÷14=5)' },
        { difficulty: 'Medium-Hard', question: 'Find the HCF of 96 and 144 using prime factorisation.', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: '96 = 2⁵ × 3\n144 = 2⁴ × 3²\nShared prime factors: 2 (lowest power 2⁴) and 3 (lowest power 3¹)\nHCF = 2⁴ × 3 = 16 × 3 = 48 ✓ (check: 96÷48=2 exact, 144÷48=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'A charity has 72 juice boxes and 120 packets of chips. They want to make identical care packs using all the items with none left over. What is the maximum number of care packs they can make, and how many of each item per pack?', answer: '24 care packs, each with 3 juice boxes and 5 packets of chips', checkMode: 'auto', correctAnswer: '24 care packs, each with 3 juice boxes and 5 packets of chips', correctAnswers: ['24 care packs, each with 3 juice boxes and 5 packets of chips', '24 packs with 3 juice boxes and 5 chips each'], explanation: '72 = 2³ × 3²\n120 = 2³ × 3 × 5\nShared prime factors: 2 (lowest power 2³) and 3 (lowest power 3¹)\nHCF = 2³ × 3 = 8 × 3 = 24 care packs (check: 24 divides exactly into 72 and 120)\nJuice boxes per pack: 72 ÷ 24 = 3. Chip packets per pack: 120 ÷ 24 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 12 and 16 by listing multiples.', answer: '48', checkMode: 'auto', correctAnswer: '48', explanation: 'Multiples of 12: 12, 24, 36, 48\nMultiples of 16: 16, 32, 48\nSmallest shared multiple: 48\nLCM = 48 ✓ (check: 48÷12=4 exact, 48÷16=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'Find the LCM of 21 and 28 using prime factorisation.', answer: '84', checkMode: 'auto', correctAnswer: '84', explanation: '21 = 3 × 7\n28 = 2² × 7\nHighest powers: 2² (from 28), 3¹ (from 21), 7¹ (shared)\nLCM = 2² × 3 × 7 = 4 × 3 × 7 = 84 ✓ (check: 84÷21=4 exact, 84÷28=3 exact)' },
        { difficulty: 'Medium-Hard', question: 'Two security guards start their rounds together. Guard A completes a round every 20 minutes, Guard B every 32 minutes. After how many minutes will they next start a round together?', answer: '160', checkMode: 'auto', correctAnswer: '160', explanation: 'Find the LCM of 20 and 32.\n20 = 2² × 5\n32 = 2⁵\nHighest powers: 2⁵ (from 32), 5¹ (from 20)\nLCM = 2⁵ × 5 = 32 × 5 = 160\nThey will next start together after 160 minutes ✓ (check: 160÷20=8 exact, 160÷32=5 exact)' },
        { difficulty: 'Hard', question: 'Is 324 a perfect square? Is 512 a perfect cube? Show how you know for each.', answer: '324 is a perfect square (18² = 324). 512 is a perfect cube (8³ = 512).', checkMode: 'auto', correctAnswer: '324 is a perfect square (18²=324); 512 is a perfect cube (8³=512)', correctAnswers: ['yes and yes', '324 is a perfect square, 512 is a perfect cube'], explanation: '18 × 18 = 324, so 324 = 18² is a perfect square.\n8 × 8 × 8 = 512, so 512 = 8³ is a perfect cube.\nBoth check out exactly ✓' },
        { difficulty: 'Hard', question: 'Find the HCF and LCM of 14, 21 and 28.', answer: '', checkMode: 'auto', parts: [ { label: 'a) HCF of 14, 21 and 28', correctAnswer: '7', explanation: '14 = 2 × 7\n21 = 3 × 7\n28 = 2² × 7\nOnly 7 appears in all three, with lowest power 7¹ (2 and 3 do not appear in all three)\nHCF = 7 ✓ (check: 7 divides exactly into 14, 21 and 28)' }, { label: 'b) LCM of 14, 21 and 28', correctAnswer: '84', explanation: '14 = 2 × 7\n21 = 3 × 7\n28 = 2² × 7\nHighest powers: 2² (from 28), 3¹ (from 21), 7¹ (shared)\nLCM = 2² × 3 × 7 = 4 × 3 × 7 = 84 ✓ (check: 84 is exactly divisible by 14, 21 and 28)' } ] },
        { difficulty: 'Hard', question: 'Lindiwe says that because 27 is odd, it cannot be written as a power of 3. Is she correct? Explain, and give 27 as a power of 3.', answer: 'No — Lindiwe is incorrect. 27 = 3³, a power of 3, even though 27 is odd. Odd bases raised to any power always give odd results, so this is expected, not a contradiction.', checkMode: 'self', explanation: '3³ = 3 × 3 × 3 = 27, so 27 IS a power of 3 (and also a perfect cube). Since 3 is odd, any power of 3 will also be odd (odd × odd × ... = odd), so there is no contradiction — Lindiwe\'s reasoning that "odd numbers cannot be powers" is simply incorrect.' },
        { difficulty: 'Hard', question: 'A landscaper is dividing a rectangular lawn measuring 72 m by 120 m into the largest possible whole-metre square sections with no grass wasted. Find the section side length, then state how many sections are needed in total.', answer: 'Section side = 24 m; 15 sections needed in total', checkMode: 'auto', correctAnswer: '24 m sections, 15 sections total', correctAnswers: ['24 m, 15 sections', 'section side 24m, 15 sections total', '24 m sections, 15 sections needed'], explanation: 'The largest square section side is the HCF of 72 and 120.\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\nShared prime factors: 2 (lowest power 2³) and 3 (lowest power 3¹)\nHCF = 2³ × 3 = 8 × 3 = 24 m per section side (check: 72÷24=3 exact, 120÷24=5 exact)\nAlong the 72 m side: 72 ÷ 24 = 3 sections. Along the 120 m side: 120 ÷ 24 = 5 sections.\nTotal sections = 3 × 5 = 15 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply factors, multiples, divisibility, HCF, LCM and square/cube numbers to real-world problems and multi-step reasoning.' },
        { minScore: 15, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples and try the word problems again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
