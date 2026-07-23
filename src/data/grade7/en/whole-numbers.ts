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
        'Place value chart showing 38 462 719 with the hundred thousands digit highlighted blue, the ten thousands digit highlighted orange, and the rounding decision highlighted green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 155" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="19" y="14" font-size="7" text-anchor="middle" fill="#6b7280">TM</text>` +
        `<text x="49" y="14" font-size="7" text-anchor="middle" fill="#6b7280">M</text>` +
        `<text x="79" y="14" font-size="7" text-anchor="middle" fill="#2563eb">HTh</text>` +
        `<text x="109" y="14" font-size="7" text-anchor="middle" fill="#ea580c">TTh</text>` +
        `<text x="139" y="14" font-size="7" text-anchor="middle" fill="#6b7280">Th</text>` +
        `<text x="169" y="14" font-size="7" text-anchor="middle" fill="#6b7280">H</text>` +
        `<text x="199" y="14" font-size="7" text-anchor="middle" fill="#6b7280">T</text>` +
        `<text x="229" y="14" font-size="7" text-anchor="middle" fill="#6b7280">U</text>` +
        `<rect x="6" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="36" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="66" y="18" width="26" height="32" fill="rgba(37,99,235,0.15)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<rect x="96" y="18" width="26" height="32" fill="rgba(234,88,12,0.15)" stroke="#ea580c" stroke-width="2.5"/>` +
        `<rect x="126" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="156" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="186" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<rect x="216" y="18" width="26" height="32" fill="none" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="19" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">3</text>` +
        `<text x="49" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">8</text>` +
        `<text x="79" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#2563eb">4</text>` +
        `<text x="109" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">6</text>` +
        `<text x="139" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">2</text>` +
        `<text x="169" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">7</text>` +
        `<text x="199" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">1</text>` +
        `<text x="229" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1f3d">9</text>` +
        `<text x="94" y="66" text-anchor="middle" font-size="8" font-weight="700" fill="#2563eb">rounding digit = 4</text>` +
        `<text x="94" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#ea580c">digit to the right = 6 → round up</text>` +
        `<line x1="140" y1="86" x2="140" y2="104" stroke="#16a34a" stroke-width="2"/>` +
        `<polygon points="140,110 134,100 146,100" fill="#16a34a"/>` +
        `<text x="140" y="128" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">38 500 000</text>` +
        `<text x="140" y="144" text-anchor="middle" font-size="9" fill="#6b7280">rounded to the nearest hundred thousand</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to read, order, and round large whole numbers up to the billions using place value',
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
        'Column layout showing 24 580 multiplied by 12 with intermediate steps highlighted orange and the final answer highlighted green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 190" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:'Courier New',monospace;">` +
        `<text x="200" y="28" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">24 580</text>` +
        `<text x="200" y="54" text-anchor="end" font-size="18" font-weight="700" fill="#0f1f3d">×    12</text>` +
        `<line x1="20" y1="64" x2="200" y2="64" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="90" text-anchor="end" font-size="16" font-weight="700" fill="#ea580c">49 160</text>` +
        `<text x="150" y="102" text-anchor="end" font-size="9" fill="#ea580c">(24 580 × 2)</text>` +
        `<text x="200" y="128" text-anchor="end" font-size="16" font-weight="700" fill="#ea580c">245 800</text>` +
        `<text x="150" y="140" text-anchor="end" font-size="9" fill="#ea580c">(24 580 × 10)</text>` +
        `<line x1="20" y1="148" x2="200" y2="148" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="200" y="176" text-anchor="end" font-size="20" font-weight="700" fill="#16a34a">294 960</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video showing how to apply addition, subtraction, and multiplication to large whole numbers including multi-step problems and estimation',
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
        'Visual diagram showing 8 squared as a square with 8 rows and 8 columns equalling 64, and 3 cubed as a cube with 3 layers each 3 by 3 equalling 27, with base numbers blue, exponents orange, and answers green',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="47" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">8</text>` +
        `<text x="6" y="61" font-size="12" font-weight="700" fill="#2563eb">8</text>` +
        `<rect x="15" y="25" width="64" height="64" fill="rgba(37,99,235,0.08)" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 7 }, (_, i) => `<line x1="${15 + 8 * (i + 1)}" y1="25" x2="${15 + 8 * (i + 1)}" y2="89" stroke="#2563eb" stroke-width="0.75" stroke-opacity="0.4"/>`).join('') +
        Array.from({ length: 7 }, (_, i) => `<line x1="15" y1="${25 + 8 * (i + 1)}" x2="79" y2="${25 + 8 * (i + 1)}" stroke="#2563eb" stroke-width="0.75" stroke-opacity="0.4"/>`).join('') +
        `<text x="47" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">8² = 8 × 8 = 64</text>` +
        `<text x="138" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">3</text>` +
        `<text x="106" y="61" font-size="12" font-weight="700" fill="#ea580c">3</text>` +
        `<rect x="120" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="132" y1="39" x2="132" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="144" y1="39" x2="144" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="120" y1="51" x2="156" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="120" y1="63" x2="156" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<rect x="164" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="176" y1="39" x2="176" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="188" y1="39" x2="188" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="164" y1="51" x2="200" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="164" y1="63" x2="200" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<rect x="208" y="39" width="36" height="36" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<line x1="220" y1="39" x2="220" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="232" y1="39" x2="232" y2="75" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="208" y1="51" x2="244" y2="51" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<line x1="208" y1="63" x2="244" y2="63" stroke="#ea580c" stroke-width="0.6" stroke-opacity="0.5"/>` +
        `<text x="182" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">3³ = 3 × 3 × 3 = 27</text>` +
        `</svg>`,

      videoPlaceholder:
        'Short video explaining exponents, squares, cubes, square roots, and cube roots with visual models and worked examples',
    },
  ],

  scoreMessages: [
    { minScore: 12, message: 'Outstanding! You have mastered whole numbers.' },
    { minScore: 9, message: 'Great work!' },
    { minScore: 6, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Place value, comparing and ordering large numbers (Easy-Medium) — positions 0-3
        { difficulty: 'Easy', question: 'In the number 5 172 946, what is the place value of the digit 7?', answer: 'Ten thousands', checkMode: 'auto', correctAnswer: 'ten thousands', correctAnswers: ['ten thousands', 'Ten thousands'], explanation: 'Count place values from the right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions.\nIn 5 172 946 the digits are 5-1-7-2-9-4-6, so 7 is the third digit from the left.\nThat is the ten thousands place.' },
        { difficulty: 'Easy-Medium', question: 'What is the value of the digit 3 in 632 458 000?', answer: '30 000 000', checkMode: 'auto', correctAnswer: '30 000 000', correctAnswers: ['30 000 000', '30000000'], explanation: 'In 632 458 000 the digit 3 is in the ten millions place.\nValue = 3 × 10 000 000 = 30 000 000' },
        { difficulty: 'Medium', question: 'Which number is greater: 82 461 300 or 8 246 130?', answer: '82 461 300', checkMode: 'auto', correctAnswer: '82 461 300', correctAnswers: ['82 461 300', '82461300'], explanation: 'Compare the number of digits first.\n82 461 300 has 8 digits. 8 246 130 has 7 digits.\nMore digits means a larger number, so 82 461 300 is greater.' },
        { difficulty: 'Medium', question: 'Order from smallest to biggest: 6 205 400, 620 540, 62 054 000.', answer: '620 540, 6 205 400, 62 054 000', checkMode: 'self' },

        // Block 2 — Rounding to a given place value (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Round 48 623 to the nearest thousand.', answer: '49 000', checkMode: 'auto', correctAnswer: '49 000', correctAnswers: ['49 000', '49000'], explanation: 'The thousands digit is 8.\nLook one place right — the hundreds digit is 6. Since 6 ≥ 5, round up.\n8 rounds up to 9. Replace all digits to the right with zeros.\nAnswer: 49 000' },
        { difficulty: 'Easy-Medium', question: 'Round 275 480 to the nearest ten thousand.', answer: '280 000', checkMode: 'auto', correctAnswer: '280 000', correctAnswers: ['280 000', '280000'], explanation: 'The ten thousands digit is 7.\nLook one place right — the thousands digit is 5. Since 5 ≥ 5, round up.\n7 rounds up to 8. Replace all digits to the right with zeros.\nAnswer: 280 000' },
        { difficulty: 'Medium', question: 'Round 4 763 900 to the nearest hundred thousand.', answer: '4 800 000', checkMode: 'auto', correctAnswer: '4 800 000', correctAnswers: ['4 800 000', '4800000'], explanation: 'The hundred thousands digit is 7.\nLook one place right — the ten thousands digit is 6. Since 6 ≥ 5, round up.\n7 rounds up to 8. Replace all digits to the right with zeros.\nAnswer: 4 800 000' },
        { difficulty: 'Medium', question: 'Round 53 218 700 to the nearest million.', answer: '53 000 000', checkMode: 'auto', correctAnswer: '53 000 000', correctAnswers: ['53 000 000', '53000000'], explanation: 'The millions digit is 3.\nLook one place right — the hundred thousands digit is 2. Since 2 < 5, round down.\nKeep the 3 and replace all digits to the right with zeros.\nAnswer: 53 000 000' },

        // Block 3 — Operations with large numbers (Easy-Hard) — positions 8-12
        { difficulty: 'Easy', question: 'Calculate 2 340 × 16.', answer: '37 440', checkMode: 'auto', correctAnswer: '37 440', correctAnswers: ['37 440', '37440'], explanation: '2 340 × 16\n= 2 340 × 10 + 2 340 × 6\n= 23 400 + 14 040\n= 37 440' },
        { difficulty: 'Easy-Medium', question: 'Calculate 84 672 ÷ 24.', answer: '3 528', checkMode: 'auto', correctAnswer: '3 528', correctAnswers: ['3 528', '3528'], explanation: '84 672 ÷ 24 = 3 528\nCheck: 3 528 × 24 = 84 672 ✓' },
        { difficulty: 'Medium', question: 'A school raised R84 350 in a fun run and R37 620 in a bake sale. How much did they raise in total?', answer: 'R121 970', checkMode: 'auto', correctAnswer: 'R121 970', correctAnswers: ['R121 970', '121 970', 'R121970', '121970'], explanation: '84 350 + 37 620 = 121 970\nAnswer: R121 970' },
        { difficulty: 'Medium', question: 'A factory packs 3 250 boxes per day. How many boxes does it pack in 14 days?', answer: '45 500', checkMode: 'auto', correctAnswer: '45 500', correctAnswers: ['45 500', '45500'], explanation: '3 250 × 14\n= 3 250 × 10 + 3 250 × 4\n= 32 500 + 13 000\n= 45 500' },
        { difficulty: 'Hard', question: 'Thabo has R125 000 in savings. He spends R38 400 on a car repair and then earns R52 750 from a side job. How much does he have now?', answer: 'R139 350', checkMode: 'auto', correctAnswer: 'R139 350', correctAnswers: ['R139 350', '139 350', 'R139350', '139350'], explanation: 'Step 1 — subtract: 125 000 − 38 400 = 86 600\nStep 2 — add: 86 600 + 52 750 = 139 350\nAnswer: R139 350' },

        // Block 4 — Squares and square roots (Easy-Medium) — positions 13-15
        { difficulty: 'Easy', question: 'Calculate 7².', answer: '49', checkMode: 'auto', correctAnswer: '49', explanation: '7² = 7 × 7 = 49' },
        { difficulty: 'Medium', question: 'Find the square root of 121.', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: '√121 = 11 because 11 × 11 = 121' },
        { difficulty: 'Medium', question: 'Calculate 6² + 9².', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: '6² = 6 × 6 = 36\n9² = 9 × 9 = 81\n36 + 81 = 117' },

        // Block 5 — Cubes and cube roots (Easy-Medium) — positions 16-17
        { difficulty: 'Easy', question: 'Calculate 4³.', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '4³ = 4 × 4 × 4 = 16 × 4 = 64' },
        { difficulty: 'Medium', question: 'Find the cube root of 125.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: '∛125 = 5 because 5 × 5 × 5 = 125' },

        // Block 6 — Misconception and reasoning questions (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'A learner rounds 6 499 999 to the nearest million and gets 7 000 000. Is this correct? Explain.', answer: 'No — the millions digit is 6, and the digit one place to the right (hundred thousands) is 4, which is less than 5, so we round down. The correct answer is 6 000 000, not 7 000 000.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner says that (5 + 3)² is the same as 5² + 3². Is this correct? Explain and give the correct value of (5 + 3)².', answer: 'No — (5 + 3)² = 8² = 64, but 5² + 3² = 25 + 9 = 34. These are not equal, so squaring a sum is not the same as squaring each term separately.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered place value, rounding, operations with large numbers, squares and cubes.' },
        { minScore: 15, message: 'Great work! Review any missed questions on rounding or operations and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on place value and calculations with large numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Place value, comparing and ordering large numbers (Easy-Medium) — positions 0-3
        { difficulty: 'Easy', question: 'In the number 7 249 583, what is the place value of the digit 2?', answer: 'Hundred thousands', checkMode: 'auto', correctAnswer: 'hundred thousands', correctAnswers: ['hundred thousands', 'Hundred thousands'], explanation: 'Count place values from the right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions.\nIn 7 249 583 the digits are 7-2-4-9-5-8-3, so 2 is the second digit from the left.\nThat is the hundred thousands place.' },
        { difficulty: 'Easy-Medium', question: 'What is the value of the digit 5 in 519 483 000?', answer: '500 000 000', checkMode: 'auto', correctAnswer: '500 000 000', correctAnswers: ['500 000 000', '500000000'], explanation: 'In 519 483 000 the digit 5 is in the hundred millions place.\nValue = 5 × 100 000 000 = 500 000 000' },
        { difficulty: 'Medium', question: 'Which number is greater: 45 902 100 or 4 590 210?', answer: '45 902 100', checkMode: 'auto', correctAnswer: '45 902 100', correctAnswers: ['45 902 100', '45902100'], explanation: 'Compare the number of digits first.\n45 902 100 has 8 digits. 4 590 210 has 7 digits.\nMore digits means a larger number, so 45 902 100 is greater.' },
        { difficulty: 'Medium', question: 'Order from smallest to biggest: 5 108 300, 510 830, 51 083 000.', answer: '510 830, 5 108 300, 51 083 000', checkMode: 'self' },

        // Block 2 — Rounding to a given place value (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Round 37 218 to the nearest thousand.', answer: '37 000', checkMode: 'auto', correctAnswer: '37 000', correctAnswers: ['37 000', '37000'], explanation: 'The thousands digit is 7.\nLook one place right — the hundreds digit is 2. Since 2 < 5, round down.\nKeep the 7 and replace all digits to the right with zeros.\nAnswer: 37 000' },
        { difficulty: 'Easy-Medium', question: 'Round 384 260 to the nearest ten thousand.', answer: '380 000', checkMode: 'auto', correctAnswer: '380 000', correctAnswers: ['380 000', '380000'], explanation: 'The ten thousands digit is 8.\nLook one place right — the thousands digit is 4. Since 4 < 5, round down.\nKeep the 8 and replace all digits to the right with zeros.\nAnswer: 380 000' },
        { difficulty: 'Medium', question: 'Round 6 249 500 to the nearest hundred thousand.', answer: '6 200 000', checkMode: 'auto', correctAnswer: '6 200 000', correctAnswers: ['6 200 000', '6200000'], explanation: 'The hundred thousands digit is 2.\nLook one place right — the ten thousands digit is 4. Since 4 < 5, round down.\nKeep the 2 and replace all digits to the right with zeros.\nAnswer: 6 200 000' },
        { difficulty: 'Medium', question: 'Round 78 512 300 to the nearest million.', answer: '79 000 000', checkMode: 'auto', correctAnswer: '79 000 000', correctAnswers: ['79 000 000', '79000000'], explanation: 'The millions digit is 8.\nLook one place right — the hundred thousands digit is 5. Since 5 ≥ 5, round up.\n8 rounds up to 9. Replace all digits to the right with zeros.\nAnswer: 79 000 000' },

        // Block 3 — Operations with large numbers (Easy-Hard) — positions 8-12
        { difficulty: 'Easy', question: 'Calculate 4 120 × 18.', answer: '74 160', checkMode: 'auto', correctAnswer: '74 160', correctAnswers: ['74 160', '74160'], explanation: '4 120 × 18\n= 4 120 × 20 − 4 120 × 2\n= 82 400 − 8 240\n= 74 160' },
        { difficulty: 'Easy-Medium', question: 'Calculate 78 336 ÷ 24.', answer: '3 264', checkMode: 'auto', correctAnswer: '3 264', correctAnswers: ['3 264', '3264'], explanation: '78 336 ÷ 24 = 3 264\nCheck: 3 264 × 24 = 78 336 ✓' },
        { difficulty: 'Medium', question: 'A charity collected R56 480 in March and R42 950 in April. How much did they collect in total?', answer: 'R99 430', checkMode: 'auto', correctAnswer: 'R99 430', correctAnswers: ['R99 430', '99 430', 'R99430', '99430'], explanation: '56 480 + 42 950 = 99 430\nAnswer: R99 430' },
        { difficulty: 'Medium', question: 'A bakery bakes 2 480 loaves per day. How many loaves does it bake in 21 days?', answer: '52 080', checkMode: 'auto', correctAnswer: '52 080', correctAnswers: ['52 080', '52080'], explanation: '2 480 × 21\n= 2 480 × 20 + 2 480\n= 49 600 + 2 480\n= 52 080' },
        { difficulty: 'Hard', question: 'Zanele has R95 000 in savings. She spends R27 650 on furniture and then earns R41 300 from freelance work. How much does she have now?', answer: 'R108 650', checkMode: 'auto', correctAnswer: 'R108 650', correctAnswers: ['R108 650', '108 650', 'R108650', '108650'], explanation: 'Step 1 — subtract: 95 000 − 27 650 = 67 350\nStep 2 — add: 67 350 + 41 300 = 108 650\nAnswer: R108 650' },

        // Block 4 — Squares and square roots (Easy-Medium) — positions 13-15
        { difficulty: 'Easy', question: 'Calculate 8².', answer: '64', checkMode: 'auto', correctAnswer: '64', explanation: '8² = 8 × 8 = 64' },
        { difficulty: 'Medium', question: 'Find the square root of 100.', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '√100 = 10 because 10 × 10 = 100' },
        { difficulty: 'Medium', question: 'Calculate 4² + 10².', answer: '116', checkMode: 'auto', correctAnswer: '116', explanation: '4² = 4 × 4 = 16\n10² = 10 × 10 = 100\n16 + 100 = 116' },

        // Block 5 — Cubes and cube roots (Easy-Medium) — positions 16-17
        { difficulty: 'Easy', question: 'Calculate 3³.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '3³ = 3 × 3 × 3 = 9 × 3 = 27' },
        { difficulty: 'Medium', question: 'Find the cube root of 64.', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '∛64 = 4 because 4 × 4 × 4 = 64' },

        // Block 6 — Misconception and reasoning questions (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'A learner rounds 7 449 999 to the nearest million and gets 8 000 000. Is this correct? Explain.', answer: 'No — the millions digit is 7, and the digit one place to the right (hundred thousands) is 4, which is less than 5, so we round down. The correct answer is 7 000 000, not 8 000 000.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner says that (4 + 6)² is the same as 4² + 6². Is this correct? Explain and give the correct value of (4 + 6)².', answer: 'No — (4 + 6)² = 10² = 100, but 4² + 6² = 16 + 36 = 52. These are not equal, so squaring a sum is not the same as squaring each term separately.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered place value, rounding, operations with large numbers, squares and cubes.' },
        { minScore: 15, message: 'Great work! Review any missed questions on rounding or operations and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on place value and calculations with large numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Place value, comparing and ordering large numbers (Easy-Medium) — positions 0-3
        { difficulty: 'Easy', question: 'In the number 3 816 295, what is the place value of the digit 3?', answer: 'Millions', checkMode: 'auto', correctAnswer: 'millions', correctAnswers: ['millions', 'Millions'], explanation: 'Count place values from the right: units, tens, hundreds, thousands, ten thousands, hundred thousands, millions.\nIn 3 816 295 the digits are 3-8-1-6-2-9-5, so 3 is the first (leftmost) digit.\nThat is the millions place.' },
        { difficulty: 'Easy-Medium', question: 'What is the value of the digit 7 in 271 640 000?', answer: '70 000 000', checkMode: 'auto', correctAnswer: '70 000 000', correctAnswers: ['70 000 000', '70000000'], explanation: 'In 271 640 000 the digit 7 is in the ten millions place.\nValue = 7 × 10 000 000 = 70 000 000' },
        { difficulty: 'Medium', question: 'Which number is greater: 36 748 200 or 3 674 820?', answer: '36 748 200', checkMode: 'auto', correctAnswer: '36 748 200', correctAnswers: ['36 748 200', '36748200'], explanation: 'Compare the number of digits first.\n36 748 200 has 8 digits. 3 674 820 has 7 digits.\nMore digits means a larger number, so 36 748 200 is greater.' },
        { difficulty: 'Medium', question: 'Order from smallest to biggest: 4 296 700, 429 670, 42 967 000.', answer: '429 670, 4 296 700, 42 967 000', checkMode: 'self' },

        // Block 2 — Rounding to a given place value (Easy-Medium) — positions 4-7
        { difficulty: 'Easy', question: 'Round 52 384 to the nearest thousand.', answer: '52 000', checkMode: 'auto', correctAnswer: '52 000', correctAnswers: ['52 000', '52000'], explanation: 'The thousands digit is 2.\nLook one place right — the hundreds digit is 3. Since 3 < 5, round down.\nKeep the 2 and replace all digits to the right with zeros.\nAnswer: 52 000' },
        { difficulty: 'Easy-Medium', question: 'Round 617 350 to the nearest ten thousand.', answer: '620 000', checkMode: 'auto', correctAnswer: '620 000', correctAnswers: ['620 000', '620000'], explanation: 'The ten thousands digit is 1.\nLook one place right — the thousands digit is 7. Since 7 ≥ 5, round up.\n1 rounds up to 2. Replace all digits to the right with zeros.\nAnswer: 620 000' },
        { difficulty: 'Medium', question: 'Round 8 352 600 to the nearest hundred thousand.', answer: '8 400 000', checkMode: 'auto', correctAnswer: '8 400 000', correctAnswers: ['8 400 000', '8400000'], explanation: 'The hundred thousands digit is 3.\nLook one place right — the ten thousands digit is 5. Since 5 ≥ 5, round up.\n3 rounds up to 4. Replace all digits to the right with zeros.\nAnswer: 8 400 000' },
        { difficulty: 'Medium', question: 'Round 24 683 900 to the nearest million.', answer: '25 000 000', checkMode: 'auto', correctAnswer: '25 000 000', correctAnswers: ['25 000 000', '25000000'], explanation: 'The millions digit is 4.\nLook one place right — the hundred thousands digit is 6. Since 6 ≥ 5, round up.\n4 rounds up to 5. Replace all digits to the right with zeros.\nAnswer: 25 000 000' },

        // Block 3 — Operations with large numbers (Easy-Hard) — positions 8-12
        { difficulty: 'Easy', question: 'Calculate 5 230 × 17.', answer: '88 910', checkMode: 'auto', correctAnswer: '88 910', correctAnswers: ['88 910', '88910'], explanation: '5 230 × 17\n= 5 230 × 20 − 5 230 × 3\n= 104 600 − 15 690\n= 88 910' },
        { difficulty: 'Easy-Medium', question: 'Calculate 67 158 ÷ 18.', answer: '3 731', checkMode: 'auto', correctAnswer: '3 731', correctAnswers: ['3 731', '3731'], explanation: '67 158 ÷ 18 = 3 731\nCheck: 3 731 × 18 = 67 158 ✓' },
        { difficulty: 'Medium', question: 'A community garden sold R63 240 worth of vegetables in spring and R48 970 in summer. How much did they sell in total?', answer: 'R112 210', checkMode: 'auto', correctAnswer: 'R112 210', correctAnswers: ['R112 210', '112 210', 'R112210', '112210'], explanation: '63 240 + 48 970 = 112 210\nAnswer: R112 210' },
        { difficulty: 'Medium', question: 'A printing company prints 3 640 pamphlets per day. How many pamphlets does it print in 16 days?', answer: '58 240', checkMode: 'auto', correctAnswer: '58 240', correctAnswers: ['58 240', '58240'], explanation: '3 640 × 16\n= 3 640 × 10 + 3 640 × 6\n= 36 400 + 21 840\n= 58 240' },
        { difficulty: 'Hard', question: 'Bongani has R110 000 in savings. He spends R45 250 on a laptop and then earns R36 800 from a bonus. How much does he have now?', answer: 'R101 550', checkMode: 'auto', correctAnswer: 'R101 550', correctAnswers: ['R101 550', '101 550', 'R101550', '101550'], explanation: 'Step 1 — subtract: 110 000 − 45 250 = 64 750\nStep 2 — add: 64 750 + 36 800 = 101 550\nAnswer: R101 550' },

        // Block 4 — Squares and square roots (Easy-Medium) — positions 13-15
        { difficulty: 'Easy', question: 'Calculate 12².', answer: '144', checkMode: 'auto', correctAnswer: '144', explanation: '12² = 12 × 12 = 144' },
        { difficulty: 'Medium', question: 'Find the square root of 81.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '√81 = 9 because 9 × 9 = 81' },
        { difficulty: 'Medium', question: 'Calculate 5² + 7².', answer: '74', checkMode: 'auto', correctAnswer: '74', explanation: '5² = 5 × 5 = 25\n7² = 7 × 7 = 49\n25 + 49 = 74' },

        // Block 5 — Cubes and cube roots (Easy-Medium) — positions 16-17
        { difficulty: 'Easy', question: 'Calculate 5³.', answer: '125', checkMode: 'auto', correctAnswer: '125', explanation: '5³ = 5 × 5 × 5 = 25 × 5 = 125' },
        { difficulty: 'Medium', question: 'Find the cube root of 8.', answer: '2', checkMode: 'auto', correctAnswer: '2', explanation: '∛8 = 2 because 2 × 2 × 2 = 8' },

        // Block 6 — Misconception and reasoning questions (Hard) — positions 18-19
        { difficulty: 'Hard', question: 'A learner rounds 2 550 000 to the nearest hundred thousand and gets 2 500 000. Is this correct? Explain.', answer: 'No — the hundred thousands digit is 5, and the digit one place to the right (ten thousands) is also 5, which means we round up. The correct answer is 2 600 000, not 2 500 000.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A learner says that (7 − 2)² is the same as 7² − 2². Is this correct? Explain and give the correct value of (7 − 2)².', answer: 'No — (7 − 2)² = 5² = 25, but 7² − 2² = 49 − 4 = 45. These are not equal, so squaring a difference is not the same as squaring each term separately.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered place value, rounding, operations with large numbers, squares and cubes.' },
        { minScore: 15, message: 'Great work! Review any missed questions on rounding or operations and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on place value and calculations with large numbers, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
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
