import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (whole numbers roles) ────────────────────────────────────
// place values      → blue   (#2563eb)
// comparison digit  → orange (#ea580c)
// rounding decision → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Whole Numbers',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — PLACE VALUE AND ORDERING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'place-value-ordering',
      title: 'Place Value and Ordering',
      icon: '#',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 7 we work with whole numbers including large values into the <strong>billions</strong>. We use <strong>place value</strong> to read, write, and compare numbers. To order numbers we compare digit by digit from the left, starting with the highest place value. We also revise <strong>rounding</strong> to various place values.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('place values')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('comparison digit')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rounding decision')}</span>` +
        `</div>` +

        // ── Place value table ────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Place value positions</p>` +
        `<div style="overflow-x:auto;margin-bottom:20px;">` +
        `<table style="border-collapse:collapse;width:100%;font-size:14px;min-width:560px;">` +
        `<thead>` +
        `<tr style="background:#eff6ff;">` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Billions</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Hundred millions</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Ten millions</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Millions</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Hundred thousands</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Ten thousands</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Thousands</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Hundreds</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Tens</th>` +
        `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Units</th>` +
        `</tr>` +
        `</thead>` +
        `<tbody>` +
        `<tr style="text-align:center;">` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1 000</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">100</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">10</td>` +
        `<td style="border:1.5px solid #e2e8f0;padding:8px 12px;">1</td>` +
        `</tr>` +
        `</tbody>` +
        `</table>` +
        `</div>` +

        // ── Ordering and rounding rules ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Ordering and rounding rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Ordering')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">First compare the number of digits — more digits means a larger number. If the digit count is equal, compare the ${or('digits')} one by one from the left until they differ.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${gr('Rounding')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Identify the place you are rounding to. Look at the digit <strong>one place to the right</strong>. If it is ${gr('5 or more, round up')}. If it is less than 5, round down (keep the digit the same). Replace all digits to the right with zeros.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading large numbers</p>` +
        `<p style="margin:0;color:#1e3a8a;">Group digits in threes from the right to read large numbers: <strong>4 523 100</strong> is read as "four million, five hundred and twenty-three thousand, one hundred." Using spaces as separators (not commas) is the South African convention.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Order from smallest to biggest: 4 523 100, 4 519 800, 45 200 000.',
          answer: `${or('4 519 800')}, ${or('4 523 100')}, ${bl('45 200 000')}`,
          steps: [
            `<strong>Compare digit count:</strong> ${bl('45 200 000')} has <strong>8 digits</strong>. Both ${or('4 523 100')} and ${or('4 519 800')} have <strong>7 digits</strong>. More digits means a larger number — so ${bl('45 200 000')} is the ${bl('largest')}.`,
            `<strong>Compare the two 7-digit numbers digit by digit:</strong> Both start with ${or('4')} — same. Next digit: ${or('5')} vs ${or('5')} — same. Next: ${or('2')} vs ${or('1')} — here they differ. Since ${or('1')} &lt; ${or('2')}, we know <strong>4 519 800 &lt; 4 523 100</strong>.`,
            `<strong>Order (smallest to biggest):</strong> ${gr('4 519 800')}, ${gr('4 523 100')}, ${gr('45 200 000')}`,
          ],
        },
        {
          question: 'Round 38 462 719 to the nearest hundred thousand.',
          answer: `${gr('38 500 000')}`,
          steps: [
            `Identify the ${bl('hundred thousands')} digit in <strong>38 462 719</strong>: the digit is ${bl('4')} (in the hundred thousands position).`,
            `Look one place to the right — the ${or('ten thousands')} digit is ${or('6')}. Since ${gr('6 ≥ 5')}, we ${gr('round up')}.`,
            `Round the ${bl('4')} up to ${gr('5')} and replace all digits to the right with zeros. <strong>Answer: ${gr('38 500 000')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — ordering large numbers ─────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Order from smallest to biggest: 320 450, 32 045 000, 3 204 500.',
          answer: '320 450, 3 204 500, 32 045 000',
          checkMode: 'self',
        },

        // ── Q2 Medium — rounding to the nearest million ───────────────────────
        {
          difficulty: 'Medium',
          question: 'Round 67 845 230 to the nearest million.',
          answer: '68 000 000',
          checkMode: 'auto',
          correctAnswer: '68 000 000',
          explanation: 'Identify the millions digit: 7.\nLook one place right — the hundred thousands digit is 8. Since 8 ≥ 5, round up.\n7 rounds up to 8. Replace all digits to the right with zeros.\nAnswer: 68 000 000 ✓',
        },

        // ── Q3 Hard — rounding misconception ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says 5 999 999 rounds to 5 000 000 to the nearest million. Is he correct?',
          answer: 'No — the hundred thousands digit is 9, so it rounds up to 6 000 000.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Place value chart showing 38 462 719 with the hundred thousands digit highlighted blue, the ten thousands digit highlighted orange, and the rounding decision highlighted green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read, order, and round large whole numbers up to the billions using place value" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — OPERATIONS WITH LARGE NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'operations-large-numbers',
      title: 'Operations with Large Numbers',
      icon: '+',
      explanation:
        `<p style="margin-bottom:16px;">We apply <strong>addition, subtraction, multiplication, and division</strong> to large whole numbers using the same methods learned in earlier grades, now with bigger values and more complex multi-step problems. <strong>Estimating first</strong> helps verify whether the final answer is reasonable.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('operations')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('intermediate steps')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Operation strategies ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Operation strategies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Addition & Subtraction')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Align digits in columns. Work right to left. Carry (addition) or borrow (subtraction) as needed.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Multiplication')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Use long multiplication or break into parts. Estimate first by rounding to check your answer is reasonable.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Division')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Use long division. Check your answer by multiplying the quotient by the divisor.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Estimation')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Round each number to its highest place value before calculating. Compare the estimate to your answer to spot errors.</p>` +
        `</div>` +

        `</div>` +

        // ── BODMAS tip ───────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Multi-step problems: work in the right order</p>` +
        `<p style="margin:0;color:#1e3a8a;">When a problem has more than one operation, ${or('underline the intermediate result')} after each step. This makes it easy to spot errors and follow your working. Write the ${gr('final answer')} clearly at the end.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A company sells 24 580 units per month. How many units are sold in a year?',
          answer: `${gr('294 960')} units`,
          steps: [
            `Identify the ${bl('operation')}: a year has 12 months, so we ${bl('multiply')}: ${or('24 580 × 12')}.`,
            `${or('Estimate first:')} 25 000 × 12 = 300 000. Our answer should be close to 300 000.`,
            `${or('Calculate:')} 24 580 × 12<br>= 24 580 × 10 + 24 580 × 2<br>= 245 800 + 49 160<br>= ${gr('294 960')}`,
            `<strong>Check against estimate:</strong> 294 960 ≈ 300 000 ✓ — the answer is reasonable. <strong>Answer: ${gr('294 960')} units.</strong>`,
          ],
        },
        {
          question: 'Lerato has R450 000. She spends R128 750 and then earns R67 300. How much does she have?',
          answer: `R${gr('388 550')}`,
          steps: [
            `This is a ${bl('two-step')} problem. First ${bl('subtract')} the amount spent, then ${bl('add')} the amount earned.`,
            `<strong>Step 1 — subtract:</strong> ${or('450 000 − 128 750')} = ${or('321 250')}`,
            `<strong>Step 2 — add:</strong> ${or('321 250 + 67 300')} = ${gr('388 550')}`,
            `<strong>Answer:</strong> Lerato has R${gr('388 550')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — multiplication ──────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 3 450 × 24.',
          answer: '82 800',
          checkMode: 'auto',
          correctAnswer: '82 800',
          explanation: '3 450 × 24\n= 3 450 × 20 + 3 450 × 4\n= 69 000 + 13 800\n= 82 800 ✓',
        },

        // ── Q5 Medium — word problem with multiplication ───────────────────────
        {
          difficulty: 'Medium',
          question: 'A factory makes 18 750 items per week. How many items does it make in 8 weeks?',
          answer: '150 000',
          checkMode: 'auto',
          correctAnswer: '150 000',
          explanation: '18 750 × 8\n= 18 000 × 8 + 750 × 8\n= 144 000 + 6 000\n= 150 000 items ✓',
        },

        // ── Q6 Hard — multi-step word problem ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has R680 000. She spends R245 500 and then earns R98 300. How much does she have?',
          answer: 'R532 800',
          checkMode: 'auto',
          correctAnswer: 'R532 800',
          correctAnswers: ['R532 800', '532 800', 'R532800', '532800'],
          explanation: 'Step 1 — subtract: 680 000 − 245 500 = 434 500\nStep 2 — add: 434 500 + 98 300 = 532 800\nAnswer: R532 800 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Column layout showing 24 580 multiplied by 12 with intermediate steps highlighted orange and the final answer highlighted green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply addition, subtraction, and multiplication to large whole numbers including multi-step problems and estimation" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — EXPONENTS: SQUARES AND CUBES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'exponents-squares-cubes',
      title: 'Exponents — Squares and Cubes',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">An <strong>exponent</strong> shows how many times a number is multiplied by itself. A <strong>squared</strong> number is multiplied by itself twice, written with a small <sup>2</sup> — for example ${bl('5')}${or('²')} = 5 × 5 = ${gr('25')}. A <strong>cubed</strong> number is multiplied by itself three times, written with a small <sup>3</sup> — for example ${bl('3')}${or('³')} = 3 × 3 × 3 = ${gr('27')}. The <strong>square root</strong> of a number is the value that, when squared, gives that number. The <strong>cube root</strong> works the same way for cubes.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base number')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('answer')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Base number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The number being multiplied by itself. Written in normal size.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Exponent (index)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The small raised number showing how many times the base is multiplied by itself.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square root (√)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that, when squared, gives the original number. √64 = 8 because 8² = 64.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Cube root (∛)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value that, when cubed, gives the original number. ∛27 = 3 because 3³ = 27.</p>` +
        `</div>` +

        `</div>` +

        // ── Common squares and cubes ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Perfect squares to know</p>` +
        `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">` +
        ['1²=1','2²=4','3²=9','4²=16','5²=25','6²=36','7²=49','8²=64','9²=81','10²=100','11²=121','12²=144'].map(s => {
          const [lhs, rhs] = s.split('=')
          return `<span style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:8px;padding:6px 12px;font-size:14px;font-weight:700;color:#1e40af;">${lhs} = ${rhs}</span>`
        }).join('') +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Perfect cubes to know</p>` +
        `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">` +
        ['1³=1','2³=8','3³=27','4³=64','5³=125'].map(s => {
          const [lhs, rhs] = s.split('=')
          return `<span style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:6px 12px;font-size:14px;font-weight:700;color:#92400e;">${lhs} = ${rhs}</span>`
        }).join('') +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Roots and powers are inverses</p>` +
        `<p style="margin:0;color:#1e3a8a;">Squaring and taking the square root undo each other — just like multiplication and division. If you know your perfect squares and cubes by heart, you can read off square and cube roots instantly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 8² and find the square root of 64.',
          answer: `${bl('8')}${or('²')} = ${gr('64')} &nbsp;|&nbsp; √${gr('64')} = ${bl('8')}`,
          steps: [
            `<strong>Calculate ${bl('8')}${or('²')}:</strong> The ${or('exponent')} is ${or('2')}, so we multiply the ${bl('base')} by itself twice: ${bl('8')} × ${bl('8')} = ${gr('64')}`,
            `<strong>Find √${gr('64')}:</strong> We need the value that, when squared, gives ${gr('64')}. Ask: "__ × __ = 64?" Since ${bl('8')} × ${bl('8')} = ${gr('64')}, the square root of ${gr('64')} is ${bl('8')}.`,
            `<strong>Summary:</strong> ${bl('8')}${or('²')} = ${gr('64')} &nbsp;and&nbsp; √${gr('64')} = ${bl('8')} ✓`,
          ],
        },
        {
          question: 'Calculate 4³ and find the cube root of 27.',
          answer: `${bl('4')}${or('³')} = ${gr('64')} &nbsp;|&nbsp; ∛${gr('27')} = ${bl('3')}`,
          steps: [
            `<strong>Calculate ${bl('4')}${or('³')}:</strong> The ${or('exponent')} is ${or('3')}, so we multiply the ${bl('base')} by itself three times: ${bl('4')} × ${bl('4')} × ${bl('4')} = 16 × 4 = ${gr('64')}`,
            `<strong>Find ∛${gr('27')}:</strong> We need the value that, when cubed, gives ${gr('27')}. Ask: "__ × __ × __ = 27?" Since ${bl('3')} × ${bl('3')} × ${bl('3')} = ${gr('27')}, the cube root of ${gr('27')} is ${bl('3')}.`,
            `<strong>Summary:</strong> ${bl('4')}${or('³')} = ${gr('64')} &nbsp;and&nbsp; ∛${gr('27')} = ${bl('3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — square ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 9².',
          answer: '81',
          checkMode: 'auto',
          correctAnswer: '81',
          explanation: '9² = 9 × 9 = 81 ✓',
        },

        // ── Q8 Easy — cube ────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 5³.',
          answer: '125',
          checkMode: 'auto',
          correctAnswer: '125',
          explanation: '5³ = 5 × 5 × 5 = 25 × 5 = 125 ✓',
        },

        // ── Q9 Medium — square root ───────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the square root of 144.',
          answer: '12',
          checkMode: 'auto',
          correctAnswer: '12',
          explanation: '√144 = 12 because 12 × 12 = 144 ✓',
        },

        // ── Q10 Medium — cube root ────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the cube root of 1 000.',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: '∛1 000 = 10 because 10 × 10 × 10 = 1 000 ✓',
        },

        // ── Q11 Hard — reasoning about perfect cubes ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says the square root of 81 is 9 and the cube root of 81 is also possible to find exactly. Is the second part correct?',
          answer: 'No — 81 is not a perfect cube. There is no whole number that when cubed gives exactly 81.',
          checkMode: 'self',
        },

        // ── Q12 Hard — combined calculation ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (6²) + (3³).',
          answer: '63',
          checkMode: 'auto',
          correctAnswer: '63',
          explanation: '6² = 6 × 6 = 36\n3³ = 3 × 3 × 3 = 27\n36 + 27 = 63 ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual diagram showing 8 squared as a square with 8 rows and 8 columns equalling 64, and 3 cubed as a cube with 3 layers each 3 by 3 equalling 27, with base numbers blue, exponents orange, and answers green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining exponents, squares, cubes, square roots, and cube roots with visual models and worked examples" />',
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered whole numbers.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered whole numbers.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
