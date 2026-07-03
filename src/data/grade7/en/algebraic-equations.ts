import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (algebraic equations roles) ───────────────────────────────
// unknown variable  → blue   (#2563eb)
// known values      → green  (#16a34a)
// equation          → orange (#ea580c)
// first step        → blue   (#2563eb)
// second step       → green  (#16a34a)
// check             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Algebraic Equations',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WRITING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'writing-equations',
      title: 'Writing Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>equation</strong> is a mathematical statement that shows two expressions are equal, connected by an equals sign. To write an equation from a word problem we identify the unknown, assign it a variable, and translate the words into mathematical symbols.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('unknown variable')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('known values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Variable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A letter that represents an unknown value — the quantity we are trying to find.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Constant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A fixed number whose value does not change.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Expression</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A combination of variables and constants using operations — no equals sign.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Equation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two expressions joined by an equals sign, showing they have the same value.</p>` +
        `</div>` +

        `</div>` +

        // ── Steps for writing equations ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps for writing an equation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Find the unknown quantity. This becomes your ${bl('variable')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Assign')} — Let a letter represent the unknown. Write a clear "let" statement (e.g. "Let ${bl('n')} = the unknown number").</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Translate')} — Convert the words into an ${or('equation')} using mathematical symbols.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Translating word clues</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>"multiplied by"</strong> → × &nbsp;|&nbsp; <strong>"increased by / more than"</strong> → + &nbsp;|&nbsp; <strong>"decreased by / less than"</strong> → − &nbsp;|&nbsp; <strong>"equals / gives / is"</strong> → =</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write an equation for: a number multiplied by 5 then increased by 8 equals 33.',
          answer: `${or(`5${bl('n')} + ${gr('8')} = ${gr('33')}` )}`,
          steps: [
            `Let the number be ${bl('n')} (the unknown variable).`,
            `"A number multiplied by ${gr('5')}" → ${gr('5')} × ${bl('n')} = ${or(`5${bl('n')}`)}`,
            `"Then increased by ${gr('8')}" → ${or(`5${bl('n')}`)} + ${gr('8')}`,
            `"Equals ${gr('33')}" → write the equals sign and ${gr('33')}: ${or(`5${bl('n')} + ${gr('8')} = ${gr('33')}` )}`,
          ],
        },
        {
          question: 'Sipho has 4 more marbles than Lerato. Together they have 36. Write an equation for Lerato\'s marbles.',
          answer: `${or(`${bl('m')} + (${bl('m')} + ${gr('4')}) = ${gr('36')}` )}`,
          steps: [
            `Let Lerato have ${bl('m')} marbles (the unknown variable).`,
            `Sipho has ${gr('4')} more than Lerato → Sipho has ${bl('m')} + ${gr('4')} marbles.`,
            `Together they have ${gr('36')} → add both amounts: ${bl('m')} + (${bl('m')} + ${gr('4')}) = ${gr('36')}`,
            `This simplifies to ${or(`2${bl('m')} + ${gr('4')} = ${gr('36')}` )} (we will solve this later).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — write a simple addition equation ───────────────────────
        {
          difficulty: 'Easy',
          question: 'Write an equation for: a number increased by 9 equals 27.',
          answer: 'Let the number be n.\nn + 9 = 27',
          checkMode: 'self',
        },

        // ── Q2 Medium — two-person equation with context ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho has 5 more sweets than Thabo. Together they have 41 sweets. Write an equation using Thabo\'s sweets as the variable.',
          answer: 'Let Thabo have s sweets.\nSipho has s + 5 sweets.\nTogether: s + (s + 5) = 41',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to identify unknowns in word problems and translate sentences into algebraic equations step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a word problem broken into parts with unknown variable highlighted in blue known values in green and the final equation in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING ONE-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-one-step-equations',
      title: 'Solving One-Step Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">To solve a one-step equation we use the <strong>inverse operation</strong> to isolate the variable. Whatever we do to one side of the equation we must do to the other side, keeping the equation balanced.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse operation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `</div>` +

        // ── Inverse operation pairs ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Inverse operation pairs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:1em;">+ and −</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If the equation adds a number, ${or('subtract')} it from both sides.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;font-size:1em;">× and ÷</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If the equation multiplies a variable, ${or('divide')} both sides by that number.</p>` +
        `</div>` +

        `</div>` +

        // ── Balance principle ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The balance principle</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify')} — Spot the operation applied to the ${bl('variable')} (e.g. addition, multiplication).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Apply the inverse')} — Perform the opposite operation on <strong>both sides</strong> of the equation.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Write the solution')} — The ${bl('variable')} is now alone. Write ${bl('variable')} = ${gr('value')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Think of a balance scale</p>` +
        `<p style="margin:0;color:#1e3a8a;">An equation is like a balanced scale. Whatever you do to one side you <strong>must</strong> do to the other side — otherwise the scale tips and the equation is no longer true.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve x + 14 = 29.',
          answer: `${bl('x')} = ${gr('15')}`,
          steps: [
            `Equation: ${bl('x')} + ${gr('14')} = ${gr('29')}`,
            `${or('Inverse operation:')} ${gr('14')} was added to ${bl('x')}, so ${or('subtract 14')} from both sides.`,
            `${bl('x')} = ${gr('29')} − ${gr('14')} = ${gr('15')}`,
            `<strong>Solution:</strong> ${bl('x')} = ${gr('15')} ✓`,
          ],
        },
        {
          question: 'Solve 7y = 63.',
          answer: `${bl('y')} = ${gr('9')}`,
          steps: [
            `Equation: ${gr('7')}${bl('y')} = ${gr('63')}`,
            `${or('Inverse operation:')} ${bl('y')} was multiplied by ${gr('7')}, so ${or('divide both sides by 7')}.`,
            `${bl('y')} = ${gr('63')} ÷ ${gr('7')} = ${gr('9')}`,
            `<strong>Solution:</strong> ${bl('y')} = ${gr('9')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Easy — solve an addition equation ────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Solve: x + 18 = 35',
          answer: '17',
          checkMode: 'auto',
          correctAnswer: '17',
          explanation: 'x + 18 = 35\nSubtract 18 from both sides (inverse of addition):\nx = 35 − 18 = 17\nCheck: 17 + 18 = 35 ✓',
        },

        // ── Q4 Easy — solve a multiplication equation ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Solve: 9y = 72',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: '9y = 72\nDivide both sides by 9 (inverse of multiplication):\ny = 72 ÷ 9 = 8\nCheck: 9 × 8 = 72 ✓',
        },

        // ── Q5 Medium — solve a subtraction equation ─────────────────────────
        {
          difficulty: 'Medium',
          question: 'Solve: p − 23 = 46',
          answer: '69',
          checkMode: 'auto',
          correctAnswer: '69',
          explanation: 'p − 23 = 46\nAdd 23 to both sides (inverse of subtraction):\np = 46 + 23 = 69\nCheck: 69 − 23 = 46 ✓',
        },

        // ── Q6 Hard — identify and explain a common error ────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the solution to 5x = 45 is x = 225 because he multiplied instead of dividing. Is he correct? Explain.',
          answer: 'No — to isolate x we divide both sides by 5, giving x = 9, not 225.\nCheck: 5 × 9 = 45 ✓\nSipho made the error of multiplying 45 × 5 instead of dividing.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve one-step equations using inverse operations while keeping both sides balanced" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Balance scale diagram showing x + 14 = 29 with the inverse operation subtracting 14 from both sides to isolate x" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING TWO-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-two-step-equations',
      title: 'Solving Two-Step Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">A two-step equation requires <strong>two inverse operations</strong>. We undo addition or subtraction first, then undo multiplication or division. Always check the solution by substituting it back into the original equation.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('second step')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check')}</span>` +
        `</div>` +

        // ── Strategy ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Two-step strategy</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('First step')} — Undo the addition or subtraction. Add or subtract the constant from both sides.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Second step')} — Undo the multiplication or division. Divide or multiply both sides by the coefficient.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Check')} — Substitute your answer back into the original equation. Both sides must be equal.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Always check your answer</p>` +
        `<p style="margin:0;color:#991b1b;">Substituting your solution back into the original equation catches arithmetic mistakes. If the left side does not equal the right side, re-work the problem step by step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Solve 4x + 7 = 31.',
          answer: `x = ${gr('6')}`,
          steps: [
            `Equation: 4x + 7 = 31`,
            `${bl('First step:')} Subtract 7 from both sides: 4x = 31 − 7 = 24`,
            `${gr('Second step:')} Divide both sides by 4: x = 24 ÷ 4 = 6`,
            `${re('Check:')} 4(6) + 7 = 24 + 7 = 31 ✓`,
          ],
        },
        {
          question: 'Solve 3y − 5 = 22.',
          answer: `y = ${gr('9')}`,
          steps: [
            `Equation: 3y − 5 = 22`,
            `${bl('First step:')} Add 5 to both sides: 3y = 22 + 5 = 27`,
            `${gr('Second step:')} Divide both sides by 3: y = 27 ÷ 3 = 9`,
            `${re('Check:')} 3(9) − 5 = 27 − 5 = 22 ✓`,
          ],
        },
        {
          question: 'Amahle thinks of a number, multiplies it by 6 and subtracts 9 to get 33. Find the number.',
          answer: `n = ${gr('7')}`,
          steps: [
            `Let the number be n. Write the equation: 6n − 9 = 33`,
            `${bl('First step:')} Add 9 to both sides: 6n = 33 + 9 = 42`,
            `${gr('Second step:')} Divide both sides by 6: n = 42 ÷ 6 = 7`,
            `${re('Check:')} 6(7) − 9 = 42 − 9 = 33 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — solve a two-step addition equation ───────────────────
        {
          difficulty: 'Medium',
          question: 'Solve: 3x + 8 = 29',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: '3x + 8 = 29\nFirst step: subtract 8 from both sides → 3x = 21\nSecond step: divide both sides by 3 → x = 7\nCheck: 3(7) + 8 = 21 + 8 = 29 ✓',
        },

        // ── Q8 Medium — solve a two-step subtraction equation ────────────────
        {
          difficulty: 'Medium',
          question: 'Solve: 5y − 12 = 33',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: '5y − 12 = 33\nFirst step: add 12 to both sides → 5y = 45\nSecond step: divide both sides by 5 → y = 9\nCheck: 5(9) − 12 = 45 − 12 = 33 ✓',
        },

        // ── Q9 Hard — word problem with full working ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato thinks of a number, multiplies it by 4 and adds 11 to get 47. Find the number.',
          answer: 'Equation: 4n + 11 = 47\nSubtract 11: 4n = 36\nDivide by 4: n = 9\nCheck: 4(9) + 11 = 36 + 11 = 47 ✓',
          checkMode: 'self',
        },

        // ── Q10 Hard — money word problem ────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo has some money. After spending R85 he has R240 left. How much did he start with?',
          answer: 'R325',
          checkMode: 'auto',
          correctAnswer: 'R325',
          correctAnswers: ['R325', '325'],
          explanation: 'Let m = Thabo\'s starting amount.\nm − 85 = 240\nAdd 85 to both sides:\nm = 240 + 85 = 325\nThabo started with R325 ✓',
        },

        // ── Q11 Hard — find the number (two-step) ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A number multiplied by 7 then decreased by 15 equals 41. Find the number.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Let n = the number.\n7n − 15 = 41\nFirst step: add 15 to both sides → 7n = 56\nSecond step: divide both sides by 7 → n = 8\nCheck: 7(8) − 15 = 56 − 15 = 41 ✓',
        },

        // ── Q12 Hard — sharing stickers between two people ───────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle and her brother together have 64 stickers. Amahle has 3 times as many as her brother.\n\na) How many stickers does her brother have?\nb) How many stickers does Amahle have?',
          answer: 'Let brother have x stickers. Amahle has 3x stickers.\nx + 3x = 64\n4x = 64\nx = 16\na) Brother has 16 stickers.\nb) Amahle has 3 × 16 = 48 stickers.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve two-step equations by undoing addition or subtraction first then undoing multiplication or division with a substitution check" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step by step diagram solving 4x + 7 = 31 showing first step in blue subtracting 7 then second step in green dividing by 4 and check in red" />',
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered algebraic equations.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
