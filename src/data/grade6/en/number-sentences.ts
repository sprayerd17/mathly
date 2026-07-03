import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (number sentences / equations) ────────────────────────────
// variable     → blue   (#2563eb)
// known values → green  (#16a34a)
// equals sign  → orange (#ea580c)
// equation     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Number Sentences and Equations',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WRITING AND UNDERSTANDING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'writing-and-understanding-equations',
      title: 'Writing and Understanding Equations',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>number sentence</strong> is a mathematical statement using numbers and symbols. An ${re('equation')} is a number sentence with an equals sign — it shows that the left side has the same value as the right side. A <strong>${bl('variable')}</strong> is a letter used to represent an unknown number. In Grade 6 we write ${re('equations')} using ${bl('variables')} and solve them to find the unknown value. The <strong>solution</strong> is the value of the ${bl('variable')} that makes the equation true.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('variable')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('known values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equals sign')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('equation')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Number sentence</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A mathematical statement using numbers and operation symbols — for example 5 + 3 = 8.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Equation</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A number sentence with an equals sign — the left side and right side have the same value.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Variable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A letter (such as n, x, or d) used to represent an unknown number in an equation.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Solution</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value of the variable that makes the equation true. Check by substituting the value back in.</p>` +
        `</div>` +

        `</div>` +

        // ── Anatomy of an equation ───────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Anatomy of an equation</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.4em;font-weight:700;color:#374151;margin:0 0 14px;">${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}</p>` +
        `<div style="display:flex;justify-content:center;gap:36px;flex-wrap:wrap;">` +
        `<span style="font-size:13px;color:#2563eb;font-weight:600;">${bl('variable')}<br>unknown value</span>` +
        `<span style="font-size:13px;color:#16a34a;font-weight:600;">${gr('known value')}<br>given number</span>` +
        `<span style="font-size:13px;color:#ea580c;font-weight:600;">${or('equals sign')}<br>both sides equal</span>` +
        `<span style="font-size:13px;color:#16a34a;font-weight:600;">${gr('known value')}<br>given number</span>` +
        `</div>` +
        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">How to write an equation from a word problem</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Step 1</strong> — Identify the unknown and assign it a ${bl('variable')} (e.g. n, x, d).<br><strong>Step 2</strong> — Translate the words into an ${re('equation')} using the ${bl('variable')} and ${gr('known values')}.<br><strong>Step 3</strong> — Check: does your equation match the situation in the problem?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Write a number sentence for this problem — Sipho has some marbles. He gets 15 more and now has 34.',
          answer: `The ${re('equation')} is ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}`,
          steps: [
            `Let the unknown number of marbles be ${bl('n')}. A ${bl('variable')} is a letter that stands for the unknown — we do not know how many marbles Sipho started with.`,
            `Sipho starts with ${bl('n')} marbles and gets ${gr('15')} more to have ${gr('34')}. Translate this into an equation: ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}.`,
            `<strong>The ${re('equation')} is ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}.</strong>`,
          ],
        },
        {
          question: 'Is x = 7 a solution to 3x + 4 = 25?',
          answer: `Yes — ${bl('x')} ${or('=')} ${gr('7')} is a solution because both sides equal ${gr('25')}`,
          steps: [
            `Substitute ${bl('x')} ${or('=')} ${gr('7')} into the ${re('equation')} ${re('3x + 4 = 25')}. Replace every ${bl('x')} with ${gr('7')}.`,
            `${gr('3')} × ${gr('7')} + ${gr('4')} ${or('=')} ${gr('21')} + ${gr('4')} ${or('=')} ${gr('25')}. The left side equals ${gr('25')}.`,
            `The left side ${or('=')} ${gr('25')} and the right side ${or('=')} ${gr('25')}. Both sides are equal.`,
            `<strong>Yes — ${bl('x')} ${or('=')} ${gr('7')} is a solution to the ${re('equation')}.</strong> ✓`,
          ],
        },
        {
          question: 'Write an equation for this problem — Lerato earns R450 per day. After how many days will she have R2 700?',
          answer: `The ${re('equation')} is ${gr('450')}${bl('d')} ${or('=')} ${gr('2 700')}`,
          steps: [
            `Let the number of days be ${bl('d')}. The ${bl('variable')} ${bl('d')} represents the unknown number of days we are trying to find.`,
            `She earns R${gr('450')} per day, so the total after ${bl('d')} days is ${gr('450')} × ${bl('d')}. She wants to reach R${gr('2 700')}: ${gr('450')} × ${bl('d')} ${or('=')} ${gr('2 700')}.`,
            `<strong>The ${re('equation')} is ${gr('450')}${bl('d')} ${or('=')} ${gr('2 700')}.</strong> (We write 450d to mean 450 × d.)`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram labelling the parts of an equation — variable in blue, known values in green, equals sign in orange, and the full equation highlighted in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to write equations from word problems using variables and how to check a solution by substituting back into the equation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING EQUATIONS USING INVERSE OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-inverse-operations',
      title: 'Solving Equations Using Inverse Operations',
      icon: '⚖',
      explanation:
        `<p style="margin-bottom:16px;">To solve an equation we find the value of the ${bl('variable')} that makes the equation true. We use <strong>${or('inverse operations')}</strong> to isolate the ${bl('variable')} — addition and subtraction are inverses of each other and multiplication and division are inverses of each other. Whatever we do to one side of the equation we must do to the ${gr('other side')} to keep it balanced. We can think of an equation as a balanced scale — if we add or remove something from one side we must do the same to the other side.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse operation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('both sides')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check')}</span>` +
        `</div>` +

        // ── Inverse operations reference ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Inverse operation pairs</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Addition ↔ Subtraction')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">If the ${bl('variable')} has a number <strong>added</strong> to it, <strong>subtract</strong> that number from ${gr('both sides')}.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If the ${bl('variable')} has a number <strong>subtracted</strong>, <strong>add</strong> that number to ${gr('both sides')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Multiplication ↔ Division')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">If the ${bl('variable')} is <strong>multiplied</strong> by a number, <strong>divide</strong> ${gr('both sides')} by that number.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If the ${bl('variable')} is <strong>divided</strong> by a number, <strong>multiply</strong> ${gr('both sides')} by that number.</p>` +
        `</div>` +

        `</div>` +

        // ── Balanced scale tip ───────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">The balanced scale rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">Whatever you do to one side of the equation you <strong>must do to ${gr('both sides')}</strong>. The ${or('inverse operation')} undoes what was done to the ${bl('variable')}, leaving it on its own. Always ${re('check')} your answer by substituting it back into the original equation.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Solve ${bl('x')} + 13 = 28.`,
          answer: `${bl('x')} = 15`,
          steps: [
            `We need to isolate ${bl('x')}. The ${or('inverse of adding 13')} is ${or('subtracting 13')}.`,
            `${gr('Subtract 13 from both sides:')} ${bl('x')} + 13 − 13 = 28 − 13`,
            `${bl('x')} = 15`,
            `${re('Check:')} 15 + 13 = 28 ✓`,
          ],
        },
        {
          question: `Solve ${bl('y')} − 24 = 37.`,
          answer: `${bl('y')} = 61`,
          steps: [
            `The ${or('inverse of subtracting 24')} is ${or('adding 24')}.`,
            `${gr('Add 24 to both sides:')} ${bl('y')} − 24 + 24 = 37 + 24`,
            `${bl('y')} = 61`,
            `${re('Check:')} 61 − 24 = 37 ✓`,
          ],
        },
        {
          question: `Solve 6${bl('m')} = 84.`,
          answer: `${bl('m')} = 14`,
          steps: [
            `The ${or('inverse of multiplying by 6')} is ${or('dividing by 6')}.`,
            `${gr('Divide both sides by 6:')} 6${bl('m')} ÷ 6 = 84 ÷ 6`,
            `${bl('m')} = 14`,
            `${re('Check:')} 6 × 14 = 84 ✓`,
          ],
        },
        {
          question: `Solve ${bl('p')} ÷ 9 = 12.`,
          answer: `${bl('p')} = 108`,
          steps: [
            `The ${or('inverse of dividing by 9')} is ${or('multiplying by 9')}.`,
            `${gr('Multiply both sides by 9:')} ${bl('p')} ÷ 9 × 9 = 12 × 9`,
            `${bl('p')} = 108`,
            `${re('Check:')} 108 ÷ 9 = 12 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a balanced scale showing an equation — variable isolated on one side after applying the inverse operation to both sides, colour coded with variable in blue, inverse operation in orange, both sides in green, and check in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve addition, subtraction, multiplication, and division equations using inverse operations with the balanced scale model" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING TWO-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-two-step-equations',
      title: 'Solving Two-Step Equations',
      icon: '✕',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>two-step equation</strong> requires two inverse operations to solve. We always undo operations in the <strong>reverse order to BODMAS</strong> — ${bl('first undo addition or subtraction')} then ${gr('undo multiplication or division')}. After solving always substitute your answer back into the original equation to ${re('check')} that both sides are equal.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first step')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('second step')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('variable')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check')}</span>` +
        `</div>` +

        // ── Two steps explained ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Undo addition or subtraction')} — Use the inverse operation to remove the number that is added or subtracted with the variable term.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Undo multiplication or division')} — Use the inverse operation to isolate the ${or('variable')} completely.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Check')} — Substitute your answer back into the original equation to verify that both sides are equal.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why reverse order?</p>` +
        `<p style="margin:0;color:#1e3a8a;">BODMAS says multiplication and division are done before addition and subtraction. To <em>undo</em> an equation we work in the <strong>opposite</strong> order — so we ${bl('undo + or − first')}, then ${gr('undo × or ÷ second')}. This always leaves the ${or('variable')} on its own.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Solve 2${or('x')} + 5 = 17.`,
          answer: `${or('x')} = 6`,
          steps: [
            `${bl('Step 1 — Undo the addition:')} Subtract 5 from both sides.<br>2${or('x')} + 5 − 5 = 17 − 5<br>2${or('x')} = 12`,
            `${gr('Step 2 — Undo the multiplication:')} Divide both sides by 2.<br>2${or('x')} ÷ 2 = 12 ÷ 2<br>${or('x')} = 6`,
            `${re('Check:')} 2 × 6 + 5 = 12 + 5 = 17 ✓`,
          ],
        },
        {
          question: `Solve 3${or('y')} − 7 = 20.`,
          answer: `${or('y')} = 9`,
          steps: [
            `${bl('Step 1 — Undo the subtraction:')} Add 7 to both sides.<br>3${or('y')} − 7 + 7 = 20 + 7<br>3${or('y')} = 27`,
            `${gr('Step 2 — Undo the multiplication:')} Divide both sides by 3.<br>3${or('y')} ÷ 3 = 27 ÷ 3<br>${or('y')} = 9`,
            `${re('Check:')} 3 × 9 − 7 = 27 − 7 = 20 ✓`,
          ],
        },
        {
          question: 'Amahle thinks of a number. She multiplies it by 4 and then subtracts 6. The answer is 26. What is the number?',
          answer: `The number is 8`,
          steps: [
            `Let the number be ${or('n')}. Write the equation: 4${or('n')} − 6 = 26.`,
            `${bl('Step 1 — Undo the subtraction:')} Add 6 to both sides.<br>4${or('n')} − 6 + 6 = 26 + 6<br>4${or('n')} = 32`,
            `${gr('Step 2 — Undo the multiplication:')} Divide both sides by 4.<br>4${or('n')} ÷ 4 = 32 ÷ 4<br>${or('n')} = 8`,
            `${re('Check:')} 4 × 8 − 6 = 32 − 6 = 26 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a two-step equation solved in two colour coded steps — first step in blue undoing addition or subtraction then second step in green undoing multiplication or division with variable in orange and check in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve two-step equations using inverse operations in reverse BODMAS order with worked examples and substitution checks" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — WORD PROBLEMS AND EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'word-problems-and-equations',
      title: 'Word Problems and Equations',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Many real life problems can be solved by writing and solving an ${or('equation')}. Read the problem carefully and identify the unknown — this becomes your ${bl('variable')}. Translate the words into mathematical symbols. Write the ${or('equation')} and solve it using inverse operations. Always ${re('check')} your answer by substituting it back and make sure it makes sense in the context of the problem.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('unknown variable')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('equation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('solution')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('check')}</span>` +
        `</div>` +

        // ── Four steps ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to solve a word problem with an equation</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identify the unknown')} — Read the problem carefully. Decide what you do not know and let a ${bl('variable')} (such as m, b, or s) represent it.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Write the equation')} — Translate the words into mathematical symbols. Make sure the ${or('equation')} matches the situation in the problem.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Solve for the variable')} — Use inverse operations to isolate the ${bl('variable')} and find the ${gr('solution')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('Check')} — Substitute your ${gr('solution')} back into the original ${or('equation')} and make sure both sides are equal and the answer makes sense in context.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Translating words into symbols</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>"more than" / "increased by"</strong> → add ( + )<br><strong>"less than" / "decreased by" / "spent"</strong> → subtract ( − )<br><strong>"times" / "at R__ each" / "per"</strong> → multiply ( × )<br><strong>"shared equally" / "each"</strong> → divide ( ÷ )<br><strong>"is" / "equals" / "the result is"</strong> → equals sign ( = )</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo has some money. After spending R245 he has R380 left. How much did he start with?',
          answer: `Thabo started with ${gr('R625')}`,
          steps: [
            `Let the starting amount be ${bl('m')}. The ${bl('variable')} ${bl('m')} represents the unknown — the amount Thabo started with.`,
            `After spending R245 he has R380 left. Translate this into an ${or('equation:')} ${or('m − 245 = 380')}.`,
            `Add 245 to both sides: ${bl('m')} = 380 + 245 = ${gr('625')}.`,
            `${re('Check:')} ${re('625 − 245 = 380')} ✓ &nbsp; Thabo started with ${gr('R625')}.`,
          ],
        },
        {
          question: 'A school buys some books at R85 each. The total cost is R1 275. How many books were bought?',
          answer: `The school bought ${gr('15')} books`,
          steps: [
            `Let the number of books be ${bl('b')}. The ${bl('variable')} ${bl('b')} represents the unknown number of books.`,
            `At R85 each the total cost is R85 × ${bl('b')} = R1 275. Write the ${or('equation:')} ${or('85b = 1 275')}.`,
            `Divide both sides by 85: ${bl('b')} = 1 275 ÷ 85 = ${gr('15')}.`,
            `${re('Check:')} ${re('85 × 15 = 1 275')} ✓ &nbsp; The school bought ${gr('15')} books.`,
          ],
        },
        {
          question: 'Sipho and Lerato together have 84 stickers. Sipho has 12 more than Lerato. How many does each have?',
          answer: `Lerato has ${gr('36')} stickers and Sipho has ${gr('48')} stickers`,
          steps: [
            `Let Lerato have ${bl('s')} stickers. Then Sipho has ${bl('s')} + 12 stickers.`,
            `Together they have 84: ${or('s + s + 12 = 84')}, which simplifies to ${or('2s + 12 = 84')}.`,
            `Subtract 12 from both sides: 2${bl('s')} = 72. Divide both sides by 2: ${bl('s')} = ${gr('36')}.`,
            `Lerato has ${gr('36')} stickers and Sipho has ${gr('36')} + 12 = ${gr('48')} stickers.`,
            `${re('Check:')} ${re('36 + 48 = 84')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the four steps to solve a word problem — identify the unknown variable in blue write the equation in orange find the solution in green and check in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to translate word problems into equations using a variable then solve and check with three worked examples" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — check a solution by substitution ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is x = 5 a solution to x + 12 = 17?',
      answer: 'yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      correctAnswers: ['yes', 'Yes', 'YES'],
      explanation: 'Substitute x = 5 into x + 12 = 17.\n5 + 12 = 17 ✓\nBoth sides equal 17, so x = 5 is a solution.',
    },

    // ── Q2 Easy — write an equation from a word problem ──────────────────────
    {
      difficulty: 'Easy',
      question: 'Write an equation for this problem: a number added to 24 equals 51.',
      answer: 'n + 24 = 51',
      checkMode: 'auto',
      correctAnswer: 'n + 24 = 51',
      correctAnswers: ['n + 24 = 51', 'n+24=51', '24 + n = 51', '24+n=51'],
      explanation: 'Let n be the unknown number.\nTranslate: "a number added to 24 equals 51" → n + 24 = 51.',
    },

    // ── Q3 Medium — solve one-step addition equation ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve x + 17 = 42.',
      answer: '25',
      checkMode: 'auto',
      correctAnswer: '25',
      explanation: 'Inverse of adding 17 is subtracting 17.\nx + 17 − 17 = 42 − 17\nx = 25\nCheck: 25 + 17 = 42 ✓',
    },

    // ── Q4 Medium — solve one-step subtraction equation ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve y − 33 = 28.',
      answer: '61',
      checkMode: 'auto',
      correctAnswer: '61',
      explanation: 'Inverse of subtracting 33 is adding 33.\ny − 33 + 33 = 28 + 33\ny = 61\nCheck: 61 − 33 = 28 ✓',
    },

    // ── Q5 Medium — solve one-step multiplication equation ───────────────────
    {
      difficulty: 'Medium',
      question: 'Solve 8m = 96.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Inverse of multiplying by 8 is dividing by 8.\n8m ÷ 8 = 96 ÷ 8\nm = 12\nCheck: 8 × 12 = 96 ✓',
    },

    // ── Q6 Medium — solve one-step division equation ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Solve p ÷ 7 = 13.',
      answer: '91',
      checkMode: 'auto',
      correctAnswer: '91',
      explanation: 'Inverse of dividing by 7 is multiplying by 7.\np ÷ 7 × 7 = 13 × 7\np = 91\nCheck: 91 ÷ 7 = 13 ✓',
    },

    // ── Q7 Hard — solve two-step equation ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Solve 3x + 8 = 29.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: 'Step 1 — Undo the addition: subtract 8 from both sides.\n3x + 8 − 8 = 29 − 8\n3x = 21\nStep 2 — Undo the multiplication: divide both sides by 3.\n3x ÷ 3 = 21 ÷ 3\nx = 7\nCheck: 3 × 7 + 8 = 21 + 8 = 29 ✓',
    },

    // ── Q8 Hard — solve two-step equation with subtraction ───────────────────
    {
      difficulty: 'Hard',
      question: 'Solve 5y − 12 = 43.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: 'Step 1 — Undo the subtraction: add 12 to both sides.\n5y − 12 + 12 = 43 + 12\n5y = 55\nStep 2 — Undo the multiplication: divide both sides by 5.\n5y ÷ 5 = 55 ÷ 5\ny = 11\nCheck: 5 × 11 − 12 = 55 − 12 = 43 ✓',
    },

    // ── Q9 Hard — word problem, write and solve a two-step equation ──────────
    {
      difficulty: 'Hard',
      question: 'Sipho thinks of a number. He multiplies it by 6 and adds 9. The answer is 45. What is the number?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Let the number be n.\nEquation: 6n + 9 = 45\nStep 1: subtract 9 from both sides → 6n = 36\nStep 2: divide both sides by 6 → n = 6\nCheck: 6 × 6 + 9 = 36 + 9 = 45 ✓',
    },

    // ── Q10 Hard — word problem, multi-step, self-check ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has some money. She spends R320 on shoes and R175 on a bag. She has R405 left. How much did she start with?',
      answer: 'Let m = starting amount.\nm − 320 − 175 = 405\nm − 495 = 405\nm = 900\nLerato started with R900.',
      checkMode: 'self',
    },

    // ── Q11 Hard — word problem, solve by forming a division equation ─────────
    {
      difficulty: 'Hard',
      question: 'A factory produces the same number of items each day. After 14 days it has produced 4 228 items. How many items does it produce per day?',
      answer: '302',
      checkMode: 'auto',
      correctAnswer: '302',
      explanation: 'Let d = items per day.\nEquation: 14d = 4 228\nDivide both sides by 14: d = 4 228 ÷ 14 = 302\nCheck: 14 × 302 = 4 228 ✓',
    },

    // ── Q12 Hard — word problem with two unknowns, self-check ────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle and Thabo together collect 120 cans for a food drive. Amahle collects 3 times as many as Thabo. How many does each collect?',
      answer: 'Let Thabo collect t cans. Amahle collects 3t.\nt + 3t = 120\n4t = 120\nt = 30\nThabo collects 30 and Amahle collects 90.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Outstanding! You have mastered number sentences and equations.' },
      { minScore: 9, message: 'Great work! You have a strong understanding of equations.' },
      { minScore: 6, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minScore: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Outstanding! A perfect score — you have completely mastered number sentences and equations for Grade 6. Keep it up!' },
    { minScore: 7, message: 'Excellent work! You have a very strong grasp of equations. Review any missed parts and you will have it perfect.' },
    { minScore: 5, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples, then try again." },
  ],
}
