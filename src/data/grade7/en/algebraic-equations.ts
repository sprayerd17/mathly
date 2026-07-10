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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — One-step equations: addition/subtraction (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Solve: x + 16 = 39', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'x + 16 = 39\nSubtract 16 from both sides (inverse of addition):\nx = 39 − 16 = 23\nCheck: 23 + 16 = 39 ✓' },
        { difficulty: 'Easy', question: 'Solve: y − 27 = 54', answer: '81', checkMode: 'auto', correctAnswer: '81', explanation: 'y − 27 = 54\nAdd 27 to both sides (inverse of subtraction):\ny = 54 + 27 = 81\nCheck: 81 − 27 = 54 ✓' },
        { difficulty: 'Easy-Medium', question: 'Thabo has some airtime. He buys R18 more airtime and now has R47 in total. Write an equation using m for his starting airtime, and solve it.', answer: 'm + 18 = 47\nSubtract 18 from both sides:\nm = 47 − 18 = 29\nThabo started with R29.', checkMode: 'self' },

        // Block 2 — One-step equations: multiplication/division (Easy) — positions 3-5
        { difficulty: 'Easy', question: 'Solve: 7x = 84', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '7x = 84\nDivide both sides by 7 (inverse of multiplication):\nx = 84 ÷ 7 = 12\nCheck: 7 × 12 = 84 ✓' },
        { difficulty: 'Easy', question: 'Solve: n ÷ 9 = 13', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: 'n ÷ 9 = 13\nMultiply both sides by 9 (inverse of division):\nn = 13 × 9 = 117\nCheck: 117 ÷ 9 = 13 ✓' },
        { difficulty: 'Easy-Medium', question: 'Six identical notebooks cost R138 in total. Write an equation for the price p of one notebook, and solve it.', answer: '6p = 138\nDivide both sides by 6:\np = 138 ÷ 6 = 23\nEach notebook costs R23.', checkMode: 'self' },

        // Block 3 — Two-step equations (Medium) — positions 6-9
        { difficulty: 'Medium', question: 'Solve: 5x + 9 = 54', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5x + 9 = 54\nFirst step: subtract 9 from both sides → 5x = 45\nSecond step: divide both sides by 5 → x = 9\nCheck: 5(9) + 9 = 45 + 9 = 54 ✓' },
        { difficulty: 'Medium', question: 'Solve: 6y − 11 = 37', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '6y − 11 = 37\nFirst step: add 11 to both sides → 6y = 48\nSecond step: divide both sides by 6 → y = 8\nCheck: 6(8) − 11 = 48 − 11 = 37 ✓' },
        { difficulty: 'Medium', question: 'A student solves 3x + 10 = 40 by dividing both sides by 3 first, getting x + 10 = 13.33, then subtracting 10 to get x = 3.33. Explain the error and give the correct solution.', answer: 'The mistake is undoing the operations in the wrong order. Since 10 was added after multiplying by 3, we must undo the addition first: subtract 10 from both sides to get 3x = 30, then divide by 3 to get x = 10. Check: 3(10) + 10 = 30 + 10 = 40 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A number is multiplied by 7, then 15 is added, giving a result of 64. Find the number.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Let n = the number.\n7n + 15 = 64\nFirst step: subtract 15 from both sides → 7n = 49\nSecond step: divide both sides by 7 → n = 7\nCheck: 7(7) + 15 = 49 + 15 = 64 ✓' },

        // Block 4 — Equations with brackets / collecting like terms (Medium-Hard) — positions 10-13
        { difficulty: 'Medium', question: 'Solve: 3(x + 4) = 27', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '3(x + 4) = 27\nExpand the bracket: 3x + 12 = 27\nSubtract 12 from both sides: 3x = 15\nDivide both sides by 3: x = 5\nCheck: 3(5 + 4) = 3(9) = 27 ✓' },
        { difficulty: 'Medium', question: 'Solve: 2x + 3x − 5 = 35', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '2x + 3x − 5 = 35\nCollect like terms first: 5x − 5 = 35\nAdd 5 to both sides: 5x = 40\nDivide both sides by 5: x = 8\nCheck: 2(8) + 3(8) − 5 = 16 + 24 − 5 = 35 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 4(y − 2) = 32', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '4(y − 2) = 32\nExpand the bracket: 4y − 8 = 32\nAdd 8 to both sides: 4y = 40\nDivide both sides by 4: y = 10\nCheck: 4(10 − 2) = 4(8) = 32 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 5x − 2x + 9 = 30 by writing 3x = 30 straight away, skipping the "+ 9". Explain the error and solve the equation correctly.', answer: 'The student collected the x-terms correctly (5x − 2x = 3x) but forgot to keep the "+ 9" in the equation — it must still be dealt with before dividing. Correct method: collect like terms to get 3x + 9 = 30, subtract 9 from both sides to get 3x = 21, then divide by 3 to get x = 7. Check: 5(7) − 2(7) + 9 = 35 − 14 + 9 = 30 ✓', checkMode: 'self' },

        // Block 5 — Forming and solving equations from word problems (Medium-Hard) — positions 14-17
        { difficulty: 'Medium', question: 'Two numbers add up to 58. The larger number is 6 more than the smaller number. Form an equation using x for the smaller number, and find both numbers.', answer: 'x + (x + 6) = 58\n2x + 6 = 58\n2x = 52\nx = 26\nThe smaller number is 26 and the larger number is 26 + 6 = 32.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'The perimeter of a rectangle is 38 cm. Its length is 9 cm more than its width. If the width is w, form and solve an equation to find the width and the length.', answer: '2((w + 9) + w) = 38\n2(2w + 9) = 38\n4w + 18 = 38\n4w = 20\nw = 5\nThe width is 5 cm and the length is 5 + 9 = 14 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Three consecutive integers add up to 72. Let the smallest integer be n. Form an equation and find all three integers.', answer: 'n + (n + 1) + (n + 2) = 72\n3n + 3 = 72\n3n = 69\nn = 23\nThe three consecutive integers are 23, 24 and 25.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Entry to a fun fair costs a fixed R25, plus R5 for every ride, r. A learner spent R180 in total. Form an equation and find how many rides the learner went on.', answer: '5r + 25 = 180', checkMode: 'auto', correctAnswer: '31', correctAnswers: ['31', 'r = 31', '5r + 25 = 180, r = 31'], explanation: 'Let r = the number of rides.\n5r + 25 = 180\nSubtract 25 from both sides: 5r = 155\nDivide both sides by 5: r = 31\nThe learner went on 31 rides.' },

        // Block 6 — Checking solutions by substitution / error-spotting (Hard) — positions 18-19
        { difficulty: 'Medium', question: 'Is x = 8 a solution to 4x − 7 = 25? Show your substitution check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute x = 8 into 4x − 7 = 25.\n4(8) − 7 = 32 − 7 = 25 ✓\nBoth sides equal 25, so x = 8 is a solution.' },
        { difficulty: 'Hard', question: 'A student solves 5(x − 3) = 25 without expanding the bracket first — they write 5x − 3 = 25 and get x = 5.6. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 5 across both terms inside the bracket — the 3 must also be multiplied by 5, not left as a plain "− 3". Correct method: expand the bracket to get 5x − 15 = 25, add 15 to both sides to get 5x = 40, then divide by 5 to get x = 8. Check: 5(8 − 3) = 5(5) = 25 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered one-step, two-step, and bracket equations, plus forming equations from word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on brackets or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and collecting like terms, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — One-step equations: addition/subtraction (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Solve: p + 24 = 71', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'p + 24 = 71\nSubtract 24 from both sides (inverse of addition):\np = 71 − 24 = 47\nCheck: 47 + 24 = 71 ✓' },
        { difficulty: 'Easy', question: 'Solve: t − 35 = 19', answer: '54', checkMode: 'auto', correctAnswer: '54', explanation: 't − 35 = 19\nAdd 35 to both sides (inverse of subtraction):\nt = 19 + 35 = 54\nCheck: 54 − 35 = 19 ✓' },
        { difficulty: 'Easy-Medium', question: 'Lindiwe has some savings. She spends R55 and is left with R118. Write an equation using s for her starting savings, and solve it.', answer: 's − 55 = 118\nAdd 55 to both sides:\ns = 118 + 55 = 173\nLindiwe started with R173.', checkMode: 'self' },

        // Block 2 — One-step equations: multiplication/division (Easy) — positions 3-5
        { difficulty: 'Easy', question: 'Solve: 12y = 156', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '12y = 156\nDivide both sides by 12 (inverse of multiplication):\ny = 156 ÷ 12 = 13\nCheck: 12 × 13 = 156 ✓' },
        { difficulty: 'Easy', question: 'Solve: m ÷ 8 = 21', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'm ÷ 8 = 21\nMultiply both sides by 8 (inverse of division):\nm = 21 × 8 = 168\nCheck: 168 ÷ 8 = 21 ✓' },
        { difficulty: 'Easy-Medium', question: 'Nine identical concert tickets cost R504 in total. Write an equation for the price t of one ticket, and solve it.', answer: '9t = 504\nDivide both sides by 9:\nt = 504 ÷ 9 = 56\nEach ticket costs R56.', checkMode: 'self' },

        // Block 3 — Two-step equations (Medium) — positions 6-9
        { difficulty: 'Medium', question: 'Solve: 8x + 13 = 93', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '8x + 13 = 93\nFirst step: subtract 13 from both sides → 8x = 80\nSecond step: divide both sides by 8 → x = 10\nCheck: 8(10) + 13 = 80 + 13 = 93 ✓' },
        { difficulty: 'Medium', question: 'Solve: 9y − 16 = 65', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '9y − 16 = 65\nFirst step: add 16 to both sides → 9y = 81\nSecond step: divide both sides by 9 → y = 9\nCheck: 9(9) − 16 = 81 − 16 = 65 ✓' },
        { difficulty: 'Medium', question: 'A student solves 4x + 18 = 54 by dividing both sides by 4 first, getting x + 18 = 13.5, then subtracting 18 to get x = −4.5. Explain the error and give the correct solution.', answer: 'The mistake is undoing the operations in the wrong order. Since 18 was added after multiplying by 4, we must undo the addition first: subtract 18 from both sides to get 4x = 36, then divide by 4 to get x = 9. Check: 4(9) + 18 = 36 + 18 = 54 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A number is multiplied by 6, then 22 is added, giving a result of 100. Find the number.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Let n = the number.\n6n + 22 = 100\nFirst step: subtract 22 from both sides → 6n = 78\nSecond step: divide both sides by 6 → n = 13\nCheck: 6(13) + 22 = 78 + 22 = 100 ✓' },

        // Block 4 — Equations with brackets / collecting like terms (Medium-Hard) — positions 10-13
        { difficulty: 'Medium', question: 'Solve: 4(x + 3) = 44', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4(x + 3) = 44\nExpand the bracket: 4x + 12 = 44\nSubtract 12 from both sides: 4x = 32\nDivide both sides by 4: x = 8\nCheck: 4(8 + 3) = 4(11) = 44 ✓' },
        { difficulty: 'Medium', question: 'Solve: 3x + 4x − 6 = 50', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '3x + 4x − 6 = 50\nCollect like terms first: 7x − 6 = 50\nAdd 6 to both sides: 7x = 56\nDivide both sides by 7: x = 8\nCheck: 3(8) + 4(8) − 6 = 24 + 32 − 6 = 50 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 5(y − 3) = 45', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '5(y − 3) = 45\nExpand the bracket: 5y − 15 = 45\nAdd 15 to both sides: 5y = 60\nDivide both sides by 5: y = 12\nCheck: 5(12 − 3) = 5(9) = 45 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 6x − 3x + 8 = 41 by writing 3x = 41 straight away, skipping the "+ 8". Explain the error and solve the equation correctly.', answer: 'The student collected the x-terms correctly (6x − 3x = 3x) but forgot to keep the "+ 8" in the equation — it must still be dealt with before dividing. Correct method: collect like terms to get 3x + 8 = 41, subtract 8 from both sides to get 3x = 33, then divide by 3 to get x = 11. Check: 6(11) − 3(11) + 8 = 66 − 33 + 8 = 41 ✓', checkMode: 'self' },

        // Block 5 — Forming and solving equations from word problems (Medium-Hard) — positions 14-17
        { difficulty: 'Medium', question: 'Two numbers add up to 85. The larger number is 9 more than the smaller number. Form an equation using x for the smaller number, and find both numbers.', answer: 'x + (x + 9) = 85\n2x + 9 = 85\n2x = 76\nx = 38\nThe smaller number is 38 and the larger number is 38 + 9 = 47.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'The perimeter of a rectangle is 46 cm. Its length is 7 cm more than its width. If the width is w, form and solve an equation to find the width and the length.', answer: '2((w + 7) + w) = 46\n2(2w + 7) = 46\n4w + 14 = 46\n4w = 32\nw = 8\nThe width is 8 cm and the length is 8 + 7 = 15 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Three consecutive integers add up to 108. Let the smallest integer be n. Form an equation and find all three integers.', answer: 'n + (n + 1) + (n + 2) = 108\n3n + 3 = 108\n3n = 105\nn = 35\nThe three consecutive integers are 35, 36 and 37.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Entry to an amusement park costs a fixed R30, plus R6 for every game, r. A learner spent R138 in total. Form an equation and find how many games the learner played.', answer: '6r + 30 = 138', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'r = 18', '6r + 30 = 138, r = 18'], explanation: 'Let r = the number of games.\n6r + 30 = 138\nSubtract 30 from both sides: 6r = 108\nDivide both sides by 6: r = 18\nThe learner played 18 games.' },

        // Block 6 — Checking solutions by substitution / error-spotting (Hard) — positions 18-19
        { difficulty: 'Medium', question: 'Is y = 11 a solution to 6y − 15 = 51? Show your substitution check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute y = 11 into 6y − 15 = 51.\n6(11) − 15 = 66 − 15 = 51 ✓\nBoth sides equal 51, so y = 11 is a solution.' },
        { difficulty: 'Hard', question: 'A student solves 4(x − 5) = 24 without expanding the bracket first — they write 4x − 5 = 24 and get x = 7.25. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 4 across both terms inside the bracket — the 5 must also be multiplied by 4, not left as a plain "− 5". Correct method: expand the bracket to get 4x − 20 = 24, add 20 to both sides to get 4x = 44, then divide by 4 to get x = 11. Check: 4(11 − 5) = 4(6) = 24 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered one-step, two-step, and bracket equations, plus forming equations from word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on brackets or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and collecting like terms, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — One-step equations: addition/subtraction (Easy) — positions 0-2
        { difficulty: 'Easy', question: 'Solve: a + 29 = 61', answer: '32', checkMode: 'auto', correctAnswer: '32', explanation: 'a + 29 = 61\nSubtract 29 from both sides (inverse of addition):\na = 61 − 29 = 32\nCheck: 32 + 29 = 61 ✓' },
        { difficulty: 'Easy', question: 'Solve: c − 42 = 38', answer: '80', checkMode: 'auto', correctAnswer: '80', explanation: 'c − 42 = 38\nAdd 42 to both sides (inverse of subtraction):\nc = 38 + 42 = 80\nCheck: 80 − 42 = 38 ✓' },
        { difficulty: 'Easy-Medium', question: 'Kagiso has scored some points this season. He scores 15 more points in the final round and now has 52 points in total. Write an equation using k for his starting points, and solve it.', answer: 'k + 15 = 52\nSubtract 15 from both sides:\nk = 52 − 15 = 37\nKagiso started the final round with 37 points.', checkMode: 'self' },

        // Block 2 — One-step equations: multiplication/division (Easy) — positions 3-5
        { difficulty: 'Easy', question: 'Solve: 15z = 225', answer: '15', checkMode: 'auto', correctAnswer: '15', explanation: '15z = 225\nDivide both sides by 15 (inverse of multiplication):\nz = 225 ÷ 15 = 15\nCheck: 15 × 15 = 225 ✓' },
        { difficulty: 'Easy', question: 'Solve: w ÷ 11 = 17', answer: '187', checkMode: 'auto', correctAnswer: '187', explanation: 'w ÷ 11 = 17\nMultiply both sides by 11 (inverse of division):\nw = 17 × 11 = 187\nCheck: 187 ÷ 11 = 17 ✓' },
        { difficulty: 'Easy-Medium', question: 'Five identical bags of rice weigh 65 kg in total. Write an equation for the weight r of one bag, and solve it.', answer: '5r = 65\nDivide both sides by 5:\nr = 65 ÷ 5 = 13\nEach bag weighs 13 kg.', checkMode: 'self' },

        // Block 3 — Two-step equations (Medium) — positions 6-9
        { difficulty: 'Medium', question: 'Solve: 7x + 6 = 62', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '7x + 6 = 62\nFirst step: subtract 6 from both sides → 7x = 56\nSecond step: divide both sides by 7 → x = 8\nCheck: 7(8) + 6 = 56 + 6 = 62 ✓' },
        { difficulty: 'Medium', question: 'Solve: 5y − 14 = 51', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '5y − 14 = 51\nFirst step: add 14 to both sides → 5y = 65\nSecond step: divide both sides by 5 → y = 13\nCheck: 5(13) − 14 = 65 − 14 = 51 ✓' },
        { difficulty: 'Medium', question: 'A student solves 6x + 9 = 63 by dividing both sides by 6 first, getting x + 9 = 10.5, then subtracting 9 to get x = 1.5. Explain the error and give the correct solution.', answer: 'The mistake is undoing the operations in the wrong order. Since 9 was added after multiplying by 6, we must undo the addition first: subtract 9 from both sides to get 6x = 54, then divide by 6 to get x = 9. Check: 6(9) + 9 = 54 + 9 = 63 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A number is multiplied by 8, then 19 is added, giving a result of 155. Find the number.', answer: '17', checkMode: 'auto', correctAnswer: '17', explanation: 'Let n = the number.\n8n + 19 = 155\nFirst step: subtract 19 from both sides → 8n = 136\nSecond step: divide both sides by 8 → n = 17\nCheck: 8(17) + 19 = 136 + 19 = 155 ✓' },

        // Block 4 — Equations with brackets / collecting like terms (Medium-Hard) — positions 10-13
        { difficulty: 'Medium', question: 'Solve: 2(x + 7) = 30', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '2(x + 7) = 30\nExpand the bracket: 2x + 14 = 30\nSubtract 14 from both sides: 2x = 16\nDivide both sides by 2: x = 8\nCheck: 2(8 + 7) = 2(15) = 30 ✓' },
        { difficulty: 'Medium', question: 'Solve: 4x + 2x − 9 = 39', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4x + 2x − 9 = 39\nCollect like terms first: 6x − 9 = 39\nAdd 9 to both sides: 6x = 48\nDivide both sides by 6: x = 8\nCheck: 4(8) + 2(8) − 9 = 32 + 16 − 9 = 39 ✓' },
        { difficulty: 'Medium-Hard', question: 'Solve: 3(y − 5) = 18', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: '3(y − 5) = 18\nExpand the bracket: 3y − 15 = 18\nAdd 15 to both sides: 3y = 33\nDivide both sides by 3: y = 11\nCheck: 3(11 − 5) = 3(6) = 18 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 7x − 4x + 5 = 35 by writing 3x = 35 straight away, skipping the "+ 5". Explain the error and solve the equation correctly.', answer: 'The student collected the x-terms correctly (7x − 4x = 3x) but forgot to keep the "+ 5" in the equation — it must still be dealt with before dividing. Correct method: collect like terms to get 3x + 5 = 35, subtract 5 from both sides to get 3x = 30, then divide by 3 to get x = 10. Check: 7(10) − 4(10) + 5 = 70 − 40 + 5 = 35 ✓', checkMode: 'self' },

        // Block 5 — Forming and solving equations from word problems (Medium-Hard) — positions 14-17
        { difficulty: 'Medium', question: 'Two numbers add up to 96. The larger number is 14 more than the smaller number. Form an equation using x for the smaller number, and find both numbers.', answer: 'x + (x + 14) = 96\n2x + 14 = 96\n2x = 82\nx = 41\nThe smaller number is 41 and the larger number is 41 + 14 = 55.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'The perimeter of a rectangle is 54 cm. Its length is 11 cm more than its width. If the width is w, form and solve an equation to find the width and the length.', answer: '2((w + 11) + w) = 54\n2(2w + 11) = 54\n4w + 22 = 54\n4w = 32\nw = 8\nThe width is 8 cm and the length is 8 + 11 = 19 cm.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Three consecutive integers add up to 135. Let the smallest integer be n. Form an equation and find all three integers.', answer: 'n + (n + 1) + (n + 2) = 135\n3n + 3 = 135\n3n = 132\nn = 44\nThe three consecutive integers are 44, 45 and 46.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Entry to a water park costs a fixed R15, plus R7 for every ride, r. A learner spent R92 in total. Form an equation and find how many rides the learner went on.', answer: '7r + 15 = 92', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'r = 11', '7r + 15 = 92, r = 11'], explanation: 'Let r = the number of rides.\n7r + 15 = 92\nSubtract 15 from both sides: 7r = 77\nDivide both sides by 7: r = 11\nThe learner went on 11 rides.' },

        // Block 6 — Checking solutions by substitution / error-spotting (Hard) — positions 18-19
        { difficulty: 'Medium', question: 'Is x = 9 a solution to 5x − 13 = 47? Show your substitution check, and give the correct solution if not.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Substitute x = 9 into 5x − 13 = 47.\n5(9) − 13 = 45 − 13 = 32\nIs 32 = 47? No.\nx = 9 is not a solution. Solving correctly: 5x − 13 = 47 → 5x = 60 → x = 12. Check: 5(12) − 13 = 60 − 13 = 47 ✓' },
        { difficulty: 'Hard', question: 'A student solves 6(x − 4) = 30 without expanding the bracket first — they write 6x − 4 = 30 and get x = 5.67. Explain the error and give the correct solution.', answer: 'The student forgot to distribute the 6 across both terms inside the bracket — the 4 must also be multiplied by 6, not left as a plain "− 4". Correct method: expand the bracket to get 6x − 24 = 30, add 24 to both sides to get 6x = 54, then divide by 6 to get x = 9. Check: 6(9 − 4) = 6(5) = 30 ✓', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered one-step, two-step, and bracket equations, plus forming equations from word problems.' },
        { minScore: 15, message: 'Great work! Review any missed questions on brackets or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and collecting like terms, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered algebraic equations.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
