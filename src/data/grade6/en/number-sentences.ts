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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Understanding equations, variables, checking solutions (Easy) — positions 0-3
        { difficulty: 'Easy', question: 'Is the number sentence 8 + 6 = 15 true or false?', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 8 + 6 = 14.\nIs 14 = 15? No.\nThe number sentence is false.' },
        { difficulty: 'Easy', question: 'In the equation x + 12 = 30, name the variable, the known values, and identify what the equals sign shows.', answer: 'The variable is x. The known values are 12 and 30. The equals sign shows that x + 12 has the same value as 30 — both sides balance.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Zanele has some pocket money. Is m = 40 a solution to m − 15 = 25? Show your substitution check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute m = 40 into m − 15 = 25.\n40 − 15 = 25 ✓\nBoth sides equal 25, so m = 40 is a solution.' },
        { difficulty: 'Easy', question: 'Thabo says x = 9 is a solution to 4x + 3 = 39 — is he correct? Show your check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute x = 9 into 4x + 3 = 39.\n4 × 9 + 3 = 36 + 3 = 39 ✓\nThabo is correct — both sides equal 39.' },

        // Block 2 — Translating word problems into equations, not solving (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Write an equation for this problem — do not solve it: a number increased by 18 gives 42.', answer: 'n + 18 = 42', checkMode: 'auto', correctAnswer: 'n + 18 = 42', correctAnswers: ['n + 18 = 42', 'n+18=42', '18 + n = 42', '18+n=42'], explanation: 'Let n be the unknown number.\n"Increased by" means add.\nn + 18 = 42' },
        { difficulty: 'Easy-Medium', question: 'Kagiso buys marbles at R3 each. Write an equation (do not solve) for the total cost, T, of buying k marbles.', answer: 'T = 3k', checkMode: 'auto', correctAnswer: 'T = 3k', correctAnswers: ['T = 3k', 't=3k', '3k = T', '3k=t'], explanation: '"At R3 each" means multiply.\nCost = price per marble × number of marbles\nT = 3k' },
        { difficulty: 'Medium', question: 'Which equation matches this story — Lindiwe has some sports score points. She loses 20 points in a penalty and now has 65 points.\n\nA) p − 20 = 65\nB) p + 20 = 65\nC) 20 − p = 65\n\nWrite only "A", "B", or "C".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: '"Loses" means subtract from her starting points p.\nStarting points minus 20 equals 65: p − 20 = 65\nThis matches equation A.' },
        { difficulty: 'Medium', question: 'A learner writes the equation 8 + w = 40 for this problem: "Nomvula shares 40 sweets equally among 8 friends. How many does each friend get?" Explain what is wrong with this equation.', answer: 'The equation is wrong because the problem describes sharing (division), not addition. "Shares equally among 8 friends" means the total of 40 should be divided by 8, not added to 8. The correct equation is 40 ÷ 8 = w, or equivalently 8w = 40.', checkMode: 'self' },

        // Block 3 — Solving one-step equations with inverse operations (Medium) — positions 8-11
        { difficulty: 'Medium', question: 'Solve x + 29 = 64.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Inverse of adding 29 is subtracting 29.\nx + 29 − 29 = 64 − 29\nx = 35\nCheck: 35 + 29 = 64 ✓' },
        { difficulty: 'Medium', question: 'Solve 9m = 117. What inverse operation did you use, and why?', answer: 'm = 13. I used division because m is multiplied by 9, and dividing by 9 is the inverse operation that undoes multiplication and isolates m. 117 ÷ 9 = 13. Check: 9 × 13 = 117 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student solves x − 37 = 48 by subtracting 37 from both sides, getting x = 11. Explain the error and give the correct answer.', answer: 'The student used the wrong inverse operation. Since 37 is being subtracted from x, the inverse is addition, not subtraction. Adding 37 to both sides gives x = 48 + 37 = 85. Check: 85 − 37 = 48 ✓. The student\'s answer of 11 is incorrect because subtracting 37 again does not undo the original subtraction.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A vendor sells apples in bags of 6. Bongani claims that if 6b = 102, then b = 18. Is Bongani correct? Show your check.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Divide both sides by 6: b = 102 ÷ 6 = 17.\nCheck Bongani\'s claim: 6 × 18 = 108, not 102, so his answer is wrong.\nBongani is incorrect; the correct answer is b = 17. Check: 6 × 17 = 102 ✓' },

        // Block 4 — Solving two-step equations using reverse-BODMAS order (Medium-Hard) — positions 12-15
        { difficulty: 'Medium', question: 'Solve 4x + 7 = 59.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Step 1 — Undo the addition: subtract 7 from both sides.\n4x + 7 − 7 = 59 − 7\n4x = 52\nStep 2 — Undo the multiplication: divide both sides by 4.\n4x ÷ 4 = 52 ÷ 4\nx = 13\nCheck: 4 × 13 + 7 = 52 + 7 = 59 ✓' },
        { difficulty: 'Medium-Hard', question: 'Zinhle thinks of a number. She multiplies it by 6 and subtracts 13, giving an answer of 71. What is her number?', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Let the number be n.\nEquation: 6n − 13 = 71\nStep 1: add 13 to both sides → 6n = 84\nStep 2: divide both sides by 6 → n = 14\nCheck: 6 × 14 − 13 = 84 − 13 = 71 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 5x − 8 = 32 by first dividing both sides by 5, getting x − 8 = 6.4, then adding 8 to get x = 14.4. Explain the mistake in this order of operations and solve correctly.', answer: 'The mistake is undoing the operations in the wrong order. Since 5x − 8 = 32 was built by first multiplying by 5, then subtracting 8, we must undo subtraction first (add 8 to both sides), then undo multiplication (divide by 5) — not the other way round. Correct method: 5x − 8 + 8 = 32 + 8, so 5x = 40, then x = 40 ÷ 5 = 8. Check: 5 × 8 − 8 = 40 − 8 = 32 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Which of these two equations has the larger solution?\n\nA) 3x + 4 = 25\nB) 2x + 9 = 31\n\nWrite only "A" or "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 3x + 4 = 25 → 3x = 21 → x = 7\nB) 2x + 9 = 31 → 2x = 22 → x = 11\n11 > 7, so equation B has the larger solution.' },

        // Block 5 — Multi-step and combined-unknown word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: 'Sipho starts with some money. He spends R145 on shoes and R90 on a shirt, then his uncle gives him R60. He ends up with R210. How much did he start with?', answer: 'Let s = starting amount.\ns − 145 − 90 + 60 = 210\ns − 175 = 210\ns = 385\nSipho started with R385.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle and Kagiso share 150 stamps. Amahle has 15 more than twice as many stamps as Kagiso. How many stamps does each have?', answer: 'Let Kagiso have k stamps. Amahle has 2k + 15.\nk + 2k + 15 = 150\n3k + 15 = 150\n3k = 135\nk = 45\nKagiso has 45 stamps and Amahle has 2 × 45 + 15 = 105 stamps.\nCheck: 45 + 105 = 150 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A tutor earns the same amount for every lesson she teaches. After teaching 8 lessons in a week she has earned R376. How much does she earn per lesson?', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'Let r = rate per lesson.\nEquation: 8r = 376\nDivide both sides by 8: r = 376 ÷ 8 = 47\nCheck: 8 × 47 = 376 ✓\nShe earns R47 per lesson.' },
        { difficulty: 'Hard', question: 'Lerato says that x = 12 is the solution to 5x − 20 = 40. Show a full substitution check and explain whether she is correct.', answer: 'Substitute x = 12 into 5x − 20 = 40.\n5 × 12 − 20 = 60 − 20 = 40\nThe left side equals 40 and the right side is 40, so both sides are equal. Lerato is correct — x = 12 is the solution.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equations, inverse operations, and solving word problems with number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions on two-step equations or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and reverse-BODMAS order, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Understanding equations, variables, checking solutions (Easy) — positions 0-3
        { difficulty: 'Easy', question: 'Is the number sentence 9 × 7 = 64 true or false?', answer: 'false', checkMode: 'auto', correctAnswer: 'false', correctAnswers: ['false', 'no'], explanation: 'Calculate the left side: 9 × 7 = 63.\nIs 63 = 64? No.\nThe number sentence is false.' },
        { difficulty: 'Easy', question: 'In the equation 5y − 8 = 32, name the variable and the two known values.', answer: 'The variable is y. The known values are 8 and 32.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Sipho scored some goals this season. Is g = 14 a solution to g + 6 = 20?', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute g = 14 into g + 6 = 20.\n14 + 6 = 20 ✓\nBoth sides equal 20, so g = 14 is a solution.' },
        { difficulty: 'Easy', question: 'Precious says x = 6 is a solution to 8x − 9 = 40 — is she correct? Show your check.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Substitute x = 6 into 8x − 9 = 40.\n8 × 6 − 9 = 48 − 9 = 39\nIs 39 = 40? No.\nPrecious is not correct — x = 6 is not a solution.' },

        // Block 2 — Translating word problems into equations, not solving (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Write an equation for this problem — do not solve it: a number decreased by 25 gives 60.', answer: 'n − 25 = 60', checkMode: 'auto', correctAnswer: 'n - 25 = 60', correctAnswers: ['n - 25 = 60', 'n-25=60', 'n − 25 = 60'], explanation: 'Let n be the unknown number.\n"Decreased by" means subtract.\nn − 25 = 60' },
        { difficulty: 'Easy-Medium', question: 'A stadium has s seats shared equally among 12 sections, with 45 seats in each section. Write an equation (do not solve) linking s to the sections.', answer: 's ÷ 12 = 45', checkMode: 'auto', correctAnswer: 's ÷ 12 = 45', correctAnswers: ['s ÷ 12 = 45', 's/12=45', 's÷12=45'], explanation: '"Shared equally among 12" means divide by 12.\nTotal seats ÷ number of sections = seats per section\ns ÷ 12 = 45' },
        { difficulty: 'Medium', question: 'Which equation matches this story — Thandiwe had some airtime. She bought more airtime worth R35 and now has R120 worth in total.\n\nA) a − 35 = 120\nB) a + 35 = 120\nC) 35a = 120\n\nWrite only "A", "B", or "C".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: '"Bought more" means add to her starting airtime a.\nStarting airtime plus 35 equals 120: a + 35 = 120\nThis matches equation B.' },
        { difficulty: 'Medium', question: 'A learner writes the equation p − 9 = 63 for this problem: "A shop sells pencils at R9 each. The total for a class order is R63. How many pencils were bought?" Explain what is wrong with this equation.', answer: 'The equation is wrong because the problem describes a price per item (multiplication), not subtraction. "At R9 each" means the total cost equals R9 multiplied by the number of pencils, p. The correct equation is 9p = 63.', checkMode: 'self' },

        // Block 3 — Solving one-step equations with inverse operations (Medium) — positions 8-11
        { difficulty: 'Medium', question: 'Solve y − 46 = 58.', answer: '104', checkMode: 'auto', correctAnswer: '104', explanation: 'Inverse of subtracting 46 is adding 46.\ny − 46 + 46 = 58 + 46\ny = 104\nCheck: 104 − 46 = 58 ✓' },
        { difficulty: 'Medium', question: 'Solve p ÷ 9 = 23. What inverse operation did you use, and why?', answer: 'p = 207. I used multiplication because p is divided by 9, and multiplying by 9 is the inverse operation that undoes division and isolates p. 23 × 9 = 207. Check: 207 ÷ 9 = 23 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student solves 7x = 154 by dividing only the left side by 7, getting x = 22 but writing the right side still as 154. Explain the error in this reasoning even though the final numeric answer is correct.', answer: 'Although x = 22 happens to be numerically correct (154 ÷ 7 = 22), the method described is flawed reasoning — you must divide BOTH sides of the equation by 7 to keep it balanced, not just isolate the left side while ignoring the right side. Writing it correctly: 7x ÷ 7 = 154 ÷ 7, so x = 22. Doing it any other way risks errors in equations where the arithmetic is less obvious.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A farmer packs oranges into crates of 8. Nkosana claims that if 8c = 152, then c = 19. Is Nkosana correct? Show your check.', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Divide both sides by 8: c = 152 ÷ 8 = 19.\nCheck: 8 × 19 = 152 ✓\nNkosana is correct.' },

        // Block 4 — Solving two-step equations using reverse-BODMAS order (Medium-Hard) — positions 12-15
        { difficulty: 'Medium', question: 'Solve 6x − 14 = 58.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Step 1 — Undo the subtraction: add 14 to both sides.\n6x − 14 + 14 = 58 + 14\n6x = 72\nStep 2 — Undo the multiplication: divide both sides by 6.\n6x ÷ 6 = 72 ÷ 6\nx = 12\nCheck: 6 × 12 − 14 = 72 − 14 = 58 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bongiwe thinks of a number. She multiplies it by 12 and subtracts 27, giving an answer of 105. What is her number?', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: 'Let the number be n.\nEquation: 12n − 27 = 105\nStep 1: add 27 to both sides → 12n = 132\nStep 2: divide both sides by 12 → n = 11\nCheck: 12 × 11 − 27 = 132 − 27 = 105 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 3x + 15 = 60 by first dividing both sides by 3, getting x + 15 = 20, then subtracting 15 to get x = 5. Explain the mistake in this order of operations and solve correctly.', answer: 'The mistake is undoing the operations in the wrong order — dividing 60 by 3 does not correctly divide the whole right side because 15 was added AFTER the multiplication, so it cannot simply be divided along with the 3x term. The correct method is to undo addition first: subtract 15 from both sides to get 3x = 45, then divide by 3 to get x = 15. Check: 3 × 15 + 15 = 45 + 15 = 60 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Which of these two equations has the larger solution?\n\nA) 4x − 6 = 34\nB) 5x − 8 = 37\n\nWrite only "A" or "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 4x − 6 = 34 → 4x = 40 → x = 10\nB) 5x − 8 = 37 → 5x = 45 → x = 9\n10 > 9, so equation A has the larger solution.' },

        // Block 5 — Multi-step and combined-unknown word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: 'Nomsa starts with some money saved. She earns R220 doing chores and R85 from a birthday gift, then spends R150 on a gift for a friend. She ends up with R430. How much did she start with?', answer: 'Let s = starting amount.\ns + 220 + 85 − 150 = 430\ns + 155 = 430\ns = 275\nNomsa started with R275.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thulani and Refilwe share 96 marbles. Thulani has 3 times as many marbles as Refilwe. How many marbles does each have?', answer: 'Let Refilwe have r marbles. Thulani has 3r.\nr + 3r = 96\n4r = 96\nr = 24\nRefilwe has 24 marbles and Thulani has 3 × 24 = 72 marbles.\nCheck: 24 + 72 = 96 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A delivery driver earns the same amount for every parcel delivered. After delivering parcels for 6 days he has earned R2 748. If he delivers the same number of parcels\' worth of pay each day, how much does he earn per day?', answer: '458', checkMode: 'auto', correctAnswer: '458', explanation: 'Let r = earnings per day.\nEquation: 6r = 2 748\nDivide both sides by 6: r = 2 748 ÷ 6 = 458\nCheck: 6 × 458 = 2 748 ✓\nHe earns R458 per day.' },
        { difficulty: 'Hard', question: 'Kagiso says that x = 15 is the solution to 3x − 25 = 20. Show a full substitution check and explain whether he is correct.', answer: 'Substitute x = 15 into 3x − 25 = 20.\n3 × 15 − 25 = 45 − 25 = 20\nThe left side equals 20 and the right side is 20, so both sides are equal. Kagiso is correct — x = 15 is the solution.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equations, inverse operations, and solving word problems with number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions on two-step equations or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and reverse-BODMAS order, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Understanding equations, variables, checking solutions (Easy) — positions 0-3
        { difficulty: 'Easy', question: 'Is the number sentence 72 ÷ 8 = 9 true or false?', answer: 'true', checkMode: 'auto', correctAnswer: 'true', correctAnswers: ['true', 'yes'], explanation: 'Calculate the left side: 72 ÷ 8 = 9.\nIs 9 = 9? Yes.\nThe number sentence is true.' },
        { difficulty: 'Easy', question: 'In the equation 7t + 4 = 60, name the variable and describe what the equals sign shows.', answer: 'The variable is t. The equals sign shows that the expression 7t + 4 has exactly the same value as 60 — the two sides are balanced.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Mpho has some marbles. Is m = 22 a solution to m − 9 = 13?', answer: 'yes', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Substitute m = 22 into m − 9 = 13.\n22 − 9 = 13 ✓\nBoth sides equal 13, so m = 22 is a solution.' },
        { difficulty: 'Easy', question: 'Karabo says x = 5 is a solution to 6x + 8 = 40 — is he correct? Show your check.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Substitute x = 5 into 6x + 8 = 40.\n6 × 5 + 8 = 30 + 8 = 38\nIs 38 = 40? No.\nKarabo is not correct — x = 5 is not a solution.' },

        // Block 2 — Translating word problems into equations, not solving (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Write an equation for this problem — do not solve it: a number multiplied by 7 gives 84.', answer: '7n = 84', checkMode: 'auto', correctAnswer: '7n = 84', correctAnswers: ['7n = 84', '7n=84', 'n × 7 = 84', 'n x 7 = 84'], explanation: 'Let n be the unknown number.\n"Multiplied by 7" means multiply.\n7n = 84' },
        { difficulty: 'Easy-Medium', question: 'Palesa buys a jacket at R450 and pays a deposit of R120 in cash, then pays the rest, b, by card. Write an equation (do not solve) linking the deposit and the remaining balance to the total.', answer: '120 + b = 450', checkMode: 'auto', correctAnswer: '120 + b = 450', correctAnswers: ['120 + b = 450', '120+b=450', 'b + 120 = 450', 'b+120=450'], explanation: 'The deposit plus the remaining balance equals the total price.\n120 + b = 450' },
        { difficulty: 'Medium', question: 'Which equation matches this story — Vusi had a number of goals scored this season. He then scored 5 more goals in the final match, giving him 23 goals in total.\n\nA) g − 5 = 23\nB) 5g = 23\nC) g + 5 = 23\n\nWrite only "A", "B", or "C".', answer: 'C', checkMode: 'auto', correctAnswer: 'c', correctAnswers: ['c', 'C'], explanation: '"Scored 5 more" means add 5 to his starting goals g.\nStarting goals plus 5 equals 23: g + 5 = 23\nThis matches equation C.' },
        { difficulty: 'Medium', question: 'A learner writes the equation d + 6 = 90 for this problem: "A total of 90 cupcakes are shared equally among 6 classes. How many does each class get, d?" Explain what is wrong with this equation.', answer: 'The equation is wrong because the problem describes sharing equally (division), not addition. "Shared equally among 6 classes" means the total of 90 should be divided by 6. The correct equation is 90 ÷ 6 = d, or equivalently 6d = 90.', checkMode: 'self' },

        // Block 3 — Solving one-step equations with inverse operations (Medium) — positions 8-11
        { difficulty: 'Medium', question: 'Solve x + 68 = 121.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Inverse of adding 68 is subtracting 68.\nx + 68 − 68 = 121 − 68\nx = 53\nCheck: 53 + 68 = 121 ✓' },
        { difficulty: 'Medium', question: 'Solve 11n = 132. What inverse operation did you use, and why?', answer: 'n = 12. I used division because n is multiplied by 11, and dividing by 11 is the inverse operation that undoes multiplication and isolates n. 132 ÷ 11 = 12. Check: 11 × 12 = 132 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A student solves x ÷ 7 = 15 by dividing both sides by 7 again, getting x = 15 ÷ 7. Explain the error and give the correct answer.', answer: 'The student used the wrong inverse operation. Since x is being divided by 7, the inverse is multiplication, not further division. Multiplying both sides by 7 gives x = 15 × 7 = 105. Check: 105 ÷ 7 = 15 ✓. Dividing again moves further away from isolating x rather than undoing the division.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A school packs learners into buses of 45 seats. Ayanda claims that if 45b = 405, then b = 8. Is Ayanda correct? Show your check.', answer: 'no', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Divide both sides by 45: b = 405 ÷ 45 = 9.\nCheck: 45 × 9 = 405 ✓, but 45 × 8 = 360 ≠ 405.\nAyanda is not correct — the correct answer is b = 9.' },

        // Block 4 — Solving two-step equations using reverse-BODMAS order (Medium-Hard) — positions 12-15
        { difficulty: 'Medium', question: 'Solve 8x + 37 = 133.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Step 1 — Undo the addition: subtract 37 from both sides.\n8x + 37 − 37 = 133 − 37\n8x = 96\nStep 2 — Undo the multiplication: divide both sides by 8.\n8x ÷ 8 = 96 ÷ 8\nx = 12\nCheck: 8 × 12 + 37 = 96 + 37 = 133 ✓' },
        { difficulty: 'Medium-Hard', question: 'Ntombi thinks of a number. She multiplies it by 15 and subtracts 48, giving an answer of 192. What is her number?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Let the number be n.\nEquation: 15n − 48 = 192\nStep 1: add 48 to both sides → 15n = 240\nStep 2: divide both sides by 15 → n = 16\nCheck: 15 × 16 − 48 = 240 − 48 = 192 ✓' },
        { difficulty: 'Medium-Hard', question: 'A student solves 9x − 18 = 63 by first subtracting 18 from 63 (instead of adding), getting 9x = 45 and then x = 5. Explain the mistake in this order of operations and solve correctly.', answer: 'The mistake is using the wrong inverse operation — since 18 is subtracted on the left side, we must ADD 18 to both sides to undo it, not subtract 18 again. Correct method: 9x − 18 + 18 = 63 + 18, so 9x = 81, then x = 81 ÷ 9 = 9. Check: 9 × 9 − 18 = 81 − 18 = 63 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Which of these two equations has the larger solution?\n\nA) 6x + 5 = 41\nB) 4x + 3 = 39\n\nWrite only "A" or "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 6x + 5 = 41 → 6x = 36 → x = 6\nB) 4x + 3 = 39 → 4x = 36 → x = 9\n9 > 6, so equation B has the larger solution.' },

        // Block 5 — Multi-step and combined-unknown word problems (Hard) — positions 16-19
        { difficulty: 'Hard', question: 'Lindiwe starts with some airtime credit. She uses R65 on calls and R40 on data, then buys a further R100 of airtime. She ends up with R95 of credit. How much did she start with?', answer: 'Let s = starting amount.\ns − 65 − 40 + 100 = 95\ns − 5 = 95\ns = 100\nLindiwe started with R100.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sibusiso and Andile share 200 stickers. Sibusiso has 20 more than twice as many stickers as Andile. How many stickers does each have?', answer: 'Let Andile have a stickers. Sibusiso has 2a + 20.\na + 2a + 20 = 200\n3a + 20 = 200\n3a = 180\na = 60\nAndile has 60 stickers and Sibusiso has 2 × 60 + 20 = 140 stickers.\nCheck: 60 + 140 = 200 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A car wash team earns the same amount for every car washed. After washing cars for 9 days, the team has earned R3 411. How much does the team earn per day?', answer: '379', checkMode: 'auto', correctAnswer: '379', explanation: 'Let r = earnings per day.\nEquation: 9r = 3 411\nDivide both sides by 9: r = 3 411 ÷ 9 = 379\nCheck: 9 × 379 = 3 411 ✓\nThe team earns R379 per day.' },
        { difficulty: 'Hard', question: 'Thandeka says that x = 18 is the solution to 4x − 27 = 45. Show a full substitution check and explain whether she is correct.', answer: 'Substitute x = 18 into 4x − 27 = 45.\n4 × 18 − 27 = 72 − 27 = 45\nThe left side equals 45 and the right side is 45, so both sides are equal. Thandeka is correct — x = 18 is the solution.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered equations, inverse operations, and solving word problems with number sentences.' },
        { minScore: 15, message: 'Great work! Review any missed questions on two-step equations or word problems and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on inverse operations and reverse-BODMAS order, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
