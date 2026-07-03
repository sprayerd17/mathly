import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// dividend / numerator / grouping → blue   (#2563eb)
// reciprocal / sharing            → orange (#ea580c)
// final answer                    → green  (#16a34a)
// denominator                     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Common Fractions',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — DIVIDING BY COMMON FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-by-common-fractions',
      title: 'Dividing by Common Fractions',
      icon: '÷',
      explanation:
        `<p style="margin-bottom:16px;">We revise addition, subtraction and multiplication of common fractions and mixed numbers, then extend to <strong>dividing</strong> whole numbers and fractions by a common fraction. To divide by a fraction, <strong>multiply by its reciprocal</strong> — flip the second fraction and change ÷ to ×.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('dividend')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('reciprocal')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The reciprocal rule</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dividing by a fraction = multiplying by its reciprocal</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('a')} ÷ ${or('b/c')} = ${bl('a')} × ${or('c/b')} = ${gr('answer')}<br>The <strong>reciprocal</strong> of a fraction is obtained by swapping the numerator and denominator.</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Finding the reciprocal</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Fraction</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Reciprocal of <strong>2/3</strong> is ${or('3/2')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Whole number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Reciprocal of <strong>5</strong> (= 5/1) is ${or('1/5')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Mixed number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Convert first: 1½ = 3/2, then reciprocal is ${or('2/3')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Always convert mixed numbers first</p>` +
        `<p style="margin:0;color:#9a3412;">Before dividing, convert any mixed numbers to improper fractions. Then apply the reciprocal rule.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate 5 ÷ 2/3.',
          answer: `${bl('5')} ÷ 2/3 = ${bl('5')} × ${or('3/2')} = ${gr('15/2')} = ${gr('7 and 1/2')}`,
          steps: [
            `Write the division: ${bl('5')} ÷ 2/3`,
            `Multiply by the reciprocal of 2/3, which is ${or('3/2')}: ${bl('5')} × ${or('3/2')}`,
            `Calculate: 5 × ${or('3')} = 15 and denominator is ${or('2')}: ${gr('15/2')}`,
            `Convert to mixed number: ${gr('15/2')} = ${gr('7 and 1/2')} ✓`,
          ],
        },
        {
          question: 'Calculate 3/4 ÷ 5/8.',
          answer: `${bl('3/4')} ÷ 5/8 = ${bl('3/4')} × ${or('8/5')} = ${gr('24/20')} = ${gr('6/5')} = ${gr('1 and 1/5')}`,
          steps: [
            `Write the division: ${bl('3/4')} ÷ 5/8`,
            `Multiply by the reciprocal of 5/8, which is ${or('8/5')}: ${bl('3/4')} × ${or('8/5')}`,
            `Multiply numerators and denominators: ${bl('3')} × ${or('8')} = 24 and ${bl('4')} × ${or('5')} = 20 → ${gr('24/20')}`,
            `Simplify by dividing both by 4: ${gr('24/20')} = ${gr('6/5')}`,
            `Convert to mixed number: ${gr('6/5')} = ${gr('1 and 1/5')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate 4 ÷ 1/2.',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Multiply by the reciprocal: 4 ÷ 1/2 = 4 × 2/1 = 8/1 = 8 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 2/3 ÷ 4/9.',
          answer: '3/2',
          checkMode: 'auto',
          correctAnswer: '3/2',
          correctAnswers: ['3/2', '1 1/2', '1 and 1/2'],
          explanation: 'Multiply by the reciprocal: 2/3 × 9/4 = 18/12 = 3/2 = 1 and 1/2 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says 5 ÷ 2/5 = 2. Is he correct? Explain.',
          answer: 'No — 5 ÷ 2/5 = 5 × 5/2 = 25/2 = 12 and 1/2, not 2.',
          checkMode: 'self',
        },

        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate 7/8 ÷ 3/4.',
          answer: '7/6',
          checkMode: 'auto',
          correctAnswer: '7/6',
          correctAnswers: ['7/6', '1 1/6', '1 and 1/6'],
          explanation: 'Multiply by the reciprocal: 7/8 × 4/3 = 28/24 = 7/6 = 1 and 1/6 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says dividing a fraction by another fraction always gives a smaller answer. Is he correct? Explain with an example.',
          answer: 'No — for example 1/2 ÷ 1/4 = 2, which is bigger than the original 1/2. Dividing by a fraction less than 1 gives a larger result.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to divide whole numbers and fractions by a common fraction using the reciprocal method" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing division by a fraction as multiplication by its reciprocal with colour coded dividend and reciprocal" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SQUARES, CUBES AND ROOTS OF COMMON FRACTIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'squares-cubes-roots-fractions',
      title: 'Squares, Cubes and Roots of Common Fractions',
      icon: '²',
      explanation:
        `<p style="margin-bottom:16px;">We calculate the squares, cubes, square roots and cube roots of common fractions by <strong>applying the operation to the numerator and denominator separately</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('numerator')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('denominator')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Squaring</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(${bl('a')}/${re('b')})² = ${bl('a')}²/${re('b')}²<br>Example: (2/3)² = ${bl('4')}/${re('9')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:4px;">Cubing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(${bl('a')}/${re('b')})³ = ${bl('a')}³/${re('b')}³<br>Example: (2/3)³ = ${bl('8')}/${re('27')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">√(${bl('a')}/${re('b')}) = √${bl('a')}/√${re('b')}<br>Example: √(4/9) = ${bl('2')}/${re('3')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Cube root</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">∛(${bl('a')}/${re('b')}) = ∛${bl('a')}/∛${re('b')}<br>Example: ∛(8/27) = ${bl('2')}/${re('3')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Apply the same operation to both parts</p>` +
        `<p style="margin:0;color:#1e3a8a;">Squaring, cubing and taking roots of a fraction means applying the same operation to the ${bl('numerator')} and the ${re('denominator')} independently. Keep the fraction bar in place throughout.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate (2/3)².',
          answer: `(${bl('2')}/${re('3')})² = ${bl('2')}²/${re('3')}² = ${gr('4/9')}`,
          steps: [
            `Write the expression: (${bl('2')}/${re('3')})²`,
            `Square the ${bl('numerator')}: ${bl('2')}² = ${bl('4')}`,
            `Square the ${re('denominator')}: ${re('3')}² = ${re('9')}`,
            `Result: ${bl('4')}/${re('9')} = ${gr('4/9')} ✓`,
          ],
        },
        {
          question: 'Find the cube root of 8/27.',
          answer: `∛(${bl('8')}/${re('27')}) = ∛${bl('8')}/∛${re('27')} = ${gr('2/3')}`,
          steps: [
            `Write the expression: ∛(${bl('8')}/${re('27')})`,
            `Find the cube root of the ${bl('numerator')}: ∛${bl('8')} = ${bl('2')} (since 2³ = 8)`,
            `Find the cube root of the ${re('denominator')}: ∛${re('27')} = ${re('3')} (since 3³ = 27)`,
            `Result: ${bl('2')}/${re('3')} = ${gr('2/3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate (3/4)².',
          answer: '9/16',
          checkMode: 'auto',
          correctAnswer: '9/16',
          explanation: 'Square numerator and denominator separately: 3²/4² = 9/16 ✓',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate (2/5)³.',
          answer: '8/125',
          checkMode: 'auto',
          correctAnswer: '8/125',
          explanation: 'Cube numerator and denominator separately: 2³/5³ = 8/125 ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the square root of 16/25.',
          answer: '√16/√25 = 4/5',
          checkMode: 'self',
        },

        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the cube root of 1/8.',
          answer: '1/2',
          checkMode: 'auto',
          correctAnswer: '1/2',
          explanation: '∛1/∛8 = 1/2 (since 1³ = 1 and 2³ = 8) ✓',
        },

        // ── Q12 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (1/3)² + (2/3)².',
          answer: '5/9',
          checkMode: 'auto',
          correctAnswer: '5/9',
          explanation: '(1/3)² = 1/9 and (2/3)² = 4/9. Then 1/9 + 4/9 = 5/9 ✓',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says √(9/16) equals 3/4 because 3² = 9 and 4² = 16. Is his reasoning correct?',
          answer: 'Yes — his reasoning is correct since the square root of a fraction is the square root of the numerator over the square root of the denominator: √9/√16 = 3/4.',
          checkMode: 'self',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate 2/3 ÷ (1/3)².',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: 'First evaluate (1/3)² = 1/9. Then 2/3 ÷ 1/9 = 2/3 × 9/1 = 18/3 = 6 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate squares, cubes, square roots and cube roots of common fractions by applying operations to numerator and denominator separately" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing squaring and square root of a fraction with numerator highlighted blue and denominator highlighted red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING PROBLEMS WITH FRACTIONS, MIXED NUMBERS AND GROUPING/SHARING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'fraction-word-problems',
      title: 'Solving Problems with Fractions, Mixed Numbers and Grouping/Sharing',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">We solve real-life problems involving common fractions and mixed numbers, including <strong>grouping</strong> (how many groups of a fraction fit into a whole) and <strong>sharing</strong> (dividing a whole into fractional shares), using reciprocal relationships to divide fractions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grouping')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('sharing')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Grouping vs Sharing</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">${bl('Grouping')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You know the total and the size of each group. Find <strong>how many groups</strong> fit into the total.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: How many 3/4 m pieces can be cut from 6½ m of rope?</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Sharing')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">You know the total and the number of people. Find <strong>what fraction each person gets</strong>.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: 4/5 of a cake shared among 3 people — how much each?</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Strategy for word problems</p>` +
        `<p style="margin:0;color:#15803d;"><strong>Step 1</strong> — Decide: is this grouping or sharing?<br><strong>Step 2</strong> — Convert any mixed numbers to improper fractions.<br><strong>Step 3</strong> — Write the division and multiply by the reciprocal.<br><strong>Step 4</strong> — Simplify and interpret the answer in context.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho has 6 and 1/2 metres of rope and cuts it into pieces of 3/4 metre each. How many pieces does he get?',
          answer: `${bl('Grouping')} problem: ${bl('6½')} ÷ 3/4 = ${bl('13/2')} × ${or('4/3')} = ${gr('52/6')} = ${gr('8 and 2/3')} → ${gr('8')} full pieces`,
          steps: [
            `This is a ${bl('grouping')} problem — we find how many groups of 3/4 fit into 6½.`,
            `Convert the mixed number: 6½ = ${bl('13/2')}`,
            `Write the division and multiply by the reciprocal: ${bl('13/2')} × ${or('4/3')} = ${gr('52/6')}`,
            `Simplify: ${gr('52/6')} = ${gr('26/3')} = ${gr('8 and 2/3')}`,
            `<strong>Answer:</strong> Sipho gets ${gr('8')} full pieces (the remaining 2/3 piece is too short) ✓`,
          ],
        },
        {
          question: 'Lerato shares 4/5 of a cake equally among 3 people. What fraction does each person get?',
          answer: `${or('Sharing')} problem: ${or('4/5')} ÷ 3 = ${or('4/5')} × 1/3 = ${gr('4/15')}`,
          steps: [
            `This is a ${or('sharing')} problem — we divide 4/5 among 3 people.`,
            `Write the division: ${or('4/5')} ÷ 3`,
            `Write 3 as 3/1, so its reciprocal is 1/3.`,
            `Multiply by the reciprocal: ${or('4/5')} × 1/3 = ${gr('4/15')}`,
            `<strong>Answer:</strong> Each person gets ${gr('4/15')} of the cake ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato has 5 and 1/4 litres of juice and pours it into bottles of 3/4 litre each. How many bottles can she fill?',
          answer: '7',
          checkMode: 'auto',
          correctAnswer: '7',
          explanation: 'Convert 5¼ = 21/4. Then 21/4 ÷ 3/4 = 21/4 × 4/3 = 84/12 = 7 ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle shares 5/6 of a pizza equally among 4 people. What fraction does each person get?',
          answer: '5/24',
          checkMode: 'auto',
          correctAnswer: '5/24',
          explanation: '5/6 ÷ 4 = 5/6 × 1/4 = 5/24 ✓',
        },

        // ── Q13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A piece of wood is 8 and 1/3 metres long. It is cut into pieces of 5/6 metre each. How many full pieces can be cut?',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Convert 8⅓ = 25/3. Then 25/3 ÷ 5/6 = 25/3 × 6/5 = 150/15 = 10 ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve grouping and sharing problems involving common fractions and mixed numbers" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing grouping highlighted blue and sharing highlighted orange with a worked example of dividing a mixed number by a fraction" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered common fractions.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
