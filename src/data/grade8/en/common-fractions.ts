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
        'Short video showing how to divide whole numbers and fractions by a common fraction using the reciprocal method',

      diagramPlaceholder:
        'Diagram showing the divisor 2/3 flipped into its reciprocal 3/2, illustrating a ÷ b/c = a × c/b',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="60" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">divisor</text>` +
        `<line x1="35" y1="55" x2="85" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="60" y="48" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">2</text>` +
        `<text x="60" y="75" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="180" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#ea580c">reciprocal</text>` +
        `<line x1="155" y1="55" x2="205" y2="55" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="180" y="48" text-anchor="middle" font-size="22" font-weight="700" fill="#dc2626">3</text>` +
        `<text x="180" y="75" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">2</text>` +
        `<path d="M90,40 C120,10 140,10 160,40" fill="none" stroke="#2563eb" stroke-width="2"/>` +
        `<polygon points="160,40 150,36 154,46" fill="#2563eb"/>` +
        `<path d="M90,70 C120,100 140,100 160,70" fill="none" stroke="#dc2626" stroke-width="2"/>` +
        `<polygon points="160,70 150,74 154,64" fill="#dc2626"/>` +
        `<text x="120" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">a ÷ b/c = a × c/b</text>` +
        `<text x="120" y="132" text-anchor="middle" font-size="10" fill="#6b7280">flip numerator and denominator</text>` +
        `</svg>`,
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
        'Short video showing how to calculate squares, cubes, square roots and cube roots of common fractions by applying operations to numerator and denominator separately',

      diagramPlaceholder:
        'Area model of a 3-by-3 grid with a 2-by-3 shaded block showing (2/3)² = 4/9',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 210" width="100%" style="max-width:260px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="30" y="20" width="120" height="120" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<line x1="70" y1="20" x2="70" y2="140" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="110" y1="20" x2="110" y2="140" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="30" y1="60" x2="150" y2="60" stroke="#0f1f3d" stroke-width="1"/>` +
        `<line x1="30" y1="100" x2="150" y2="100" stroke="#0f1f3d" stroke-width="1"/>` +
        `<rect x="30" y="20" width="80" height="80" fill="rgba(37,99,235,0.28)" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="90" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">2/3</text>` +
        `<text x="16" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb" transform="rotate(-90 16 65)">2/3</text>` +
        `<text x="100" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">4/9</text>` +
        `<text x="90" y="165" text-anchor="middle" font-size="15" font-weight="700" fill="#16a34a">(2/3)² = 4/9</text>` +
        `</svg>`,
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
        'Short video showing how to solve grouping and sharing problems involving common fractions and mixed numbers',

      diagramPlaceholder:
        'Bar model of a 6½ m rope cut into eight 3/4 m pieces, with the short leftover piece shown separately',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="100%" style="max-width:420px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="170" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#0f1f3d">6½ m of rope</text>` +
        `<rect x="20" y="30" width="300" height="34" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        Array.from({ length: 8 }, (_, i) => `<rect x="${(20 + i * 34.6).toFixed(1)}" y="30" width="34.6" height="34" fill="${i % 2 === 0 ? 'rgba(37,99,235,0.18)' : 'rgba(37,99,235,0.32)'}" stroke="#2563eb" stroke-width="1"/>`).join('') +
        `<rect x="296.8" y="30" width="23.2" height="34" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>` +
        `<text x="170" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">8 pieces of 3/4 m</text>` +
        `<text x="308" y="82" text-anchor="middle" font-size="8" fill="#6b7280">left over</text>` +
        `<text x="170" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">8 full pieces</text>` +
        `</svg>`,
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered common fractions.' },
    { minScore: 12, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRACTICE SETS — 3 sets × 20 questions
  // Block layout per set: 0-2 mixed operations & order of operations with
  // fractions (Medium/Hard) | 3-5 squares, cubes and roots of fractions combined
  // with other operations (Medium-Hard/Hard) | 6-9 division by fractions and
  // mixed numbers using the reciprocal, incl. combined with exponents (Medium-
  // Hard/Hard) | 10-13 grouping & sharing word problems with mixed numbers
  // (Medium-Hard/Hard) | 14-16 multi-step mixed-number word problems / multi-
  // operation reasoning (Hard) | 17-19 error-spotting, critique and
  // comparison/ordering (Hard)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1: mixed operations / order of operations (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 2/3 + 1/4 × 2/5, using the correct order of operations.', answer: '23/30', checkMode: 'auto', correctAnswer: '23/30', correctAnswers: ['23/30'], explanation: 'Step 1: Multiplication before addition: 1/4 × 2/5 = 2/20 = 1/10.\nStep 2: Find the LCM of 3 and 10: LCM = 30. Convert: 2/3 = 20/30, 1/10 = 3/30.\nStep 3: Add the numerators: 20 + 3 = 23.\nAnswer: 23/30 ✓' },
        { difficulty: 'Hard', question: 'Calculate (3/4 − 1/2) × 2/5 + 1/10.', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: 'Step 1: Work out the bracket first: 3/4 − 1/2 = 3/4 − 2/4 = 1/4.\nStep 2: Multiply: 1/4 × 2/5 = 2/20 = 1/10.\nStep 3: Add: 1/10 + 1/10 = 2/10 = 1/5.\nAnswer: 1/5 ✓' },
        { difficulty: 'Hard', question: 'Calculate 1/2 of (3/4 + 1/8), then subtract 1/4.', answer: '3/16', checkMode: 'auto', correctAnswer: '3/16', correctAnswers: ['3/16'], explanation: 'Step 1: Work out the bracket: 3/4 + 1/8 = 6/8 + 1/8 = 7/8.\nStep 2: "1/2 of" means multiply: 1/2 × 7/8 = 7/16.\nStep 3: Subtract: 7/16 − 1/4 = 7/16 − 4/16 = 3/16.\nAnswer: 3/16 ✓' },

        // Block 2: squares, cubes and roots of fractions combined with other operations (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (2/3)² + 1/3.', answer: '7/9', checkMode: 'auto', correctAnswer: '7/9', correctAnswers: ['7/9'], explanation: 'Step 1: Square the fraction: (2/3)² = 4/9.\nStep 2: Find the LCM of 9 and 3: LCM = 9. Convert: 1/3 = 3/9.\nStep 3: Add the numerators: 4 + 3 = 7.\nAnswer: 7/9 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(9/16) × 2/3.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Find the square root: √(9/16) = √9/√16 = 3/4.\nStep 2: Multiply: 3/4 × 2/3 = 6/12.\nStep 3: Simplify by dividing both by 6: 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate (1/2)³ + (3/4)².', answer: '11/16', checkMode: 'auto', correctAnswer: '11/16', correctAnswers: ['11/16'], explanation: 'Step 1: Cube the first fraction: (1/2)³ = 1/8.\nStep 2: Square the second fraction: (3/4)² = 9/16.\nStep 3: Find the LCM of 8 and 16: LCM = 16. Convert: 1/8 = 2/16.\nStep 4: Add the numerators: 2 + 9 = 11.\nAnswer: 11/16 ✓' },

        // Block 3: division by fractions/mixed numbers using the reciprocal, incl. exponents (Q7-10)
        { difficulty: 'Medium', question: 'Calculate 5/6 ÷ 2/3.', answer: '1 and 1/4', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 1/4', '5/4'], explanation: 'Step 1: Multiply by the reciprocal of 2/3, which is 3/2: 5/6 × 3/2.\nStep 2: Multiply the numerators: 5 × 3 = 15. Multiply the denominators: 6 × 2 = 12.\nStep 3: Result: 15/12. Simplify by dividing both by 3: 5/4.\nAnswer: 1 and 1/4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 2 and 1/4 ÷ 3/8.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Step 1: Convert to an improper fraction: 2 and 1/4 = 9/4.\nStep 2: Multiply by the reciprocal of 3/8, which is 8/3: 9/4 × 8/3.\nStep 3: Multiply the numerators: 9 × 8 = 72. Multiply the denominators: 4 × 3 = 12.\nStep 4: Result: 72/12 = 6.\nAnswer: 6 ✓' },
        { difficulty: 'Hard', question: 'Calculate 3/5 ÷ (1/2)².', answer: '2 and 2/5', checkMode: 'auto', correctAnswer: '2 and 2/5', correctAnswers: ['2 and 2/5', '2 2/5', '12/5'], explanation: 'Step 1: Work out the power first: (1/2)² = 1/4.\nStep 2: Divide: 3/5 ÷ 1/4 = 3/5 × 4/1 = 12/5.\nStep 3: Convert to a mixed number: 12 ÷ 5 = 2 remainder 2.\nAnswer: 2 and 2/5 ✓' },
        { difficulty: 'Hard', question: 'Calculate 4 ÷ 2/3 − 1/3, using the correct order of operations.', answer: '5 and 2/3', checkMode: 'auto', correctAnswer: '5 and 2/3', correctAnswers: ['5 and 2/3', '5 2/3', '17/3'], explanation: 'Step 1: Division before subtraction: 4 ÷ 2/3 = 4 × 3/2 = 12/2 = 6.\nStep 2: Subtract: 6 − 1/3 = 18/3 − 1/3 = 17/3.\nStep 3: Convert to a mixed number: 17 ÷ 3 = 5 remainder 2.\nAnswer: 5 and 2/3 ✓' },

        // Block 4: grouping & sharing word problems with mixed numbers (Q11-14)
        { difficulty: 'Medium-Hard', question: 'A builder has 7 and 1/2 m of piping and cuts it into pieces of 5/6 m each. How many full pieces can he cut?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Step 1: Convert 7 and 1/2 to an improper fraction: 15/2.\nStep 2: Divide: 15/2 ÷ 5/6 = 15/2 × 6/5 = 90/10 = 9.\nAnswer: 9 full pieces ✓' },
        { difficulty: 'Medium-Hard', question: 'A water tank holding 7/8 of its capacity is shared equally between 5 households. What fraction of the tank does each household receive?', answer: '7/40', checkMode: 'auto', correctAnswer: '7/40', correctAnswers: ['7/40'], explanation: 'Step 1: Write 5 as 5/1, so its reciprocal is 1/5.\nStep 2: Divide: 7/8 ÷ 5 = 7/8 × 1/5 = 7/40.\nAnswer: 7/40 of the tank ✓' },
        { difficulty: 'Hard', question: 'A farmer has 9 and 3/4 kg of rice and packs it into bags holding 3/8 kg each. How many full bags can she pack?', answer: '26', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26'], explanation: 'Step 1: Convert 9 and 3/4 to an improper fraction: 39/4.\nStep 2: Divide: 39/4 ÷ 3/8 = 39/4 × 8/3 = 312/12 = 26.\nAnswer: 26 full bags ✓' },
        { difficulty: 'Hard', question: 'A father leaves 5/6 of his farm to be shared equally between his 4 children. What fraction of the whole farm does each child inherit?', answer: '5/24', checkMode: 'auto', correctAnswer: '5/24', correctAnswers: ['5/24'], explanation: 'Step 1: Write 4 as 4/1, so its reciprocal is 1/4.\nStep 2: Divide: 5/6 ÷ 4 = 5/6 × 1/4 = 5/24.\nAnswer: 5/24 of the farm ✓' },

        // Block 5: multi-step mixed-number word problems / multi-operation reasoning (Q15-17)
        { difficulty: 'Hard', question: 'A tank is 3/4 full. During the day, 2/5 of the water in the tank is used. What fraction of the whole tank is still left at the end of the day?', answer: '9/20', checkMode: 'auto', correctAnswer: '9/20', correctAnswers: ['9/20'], explanation: 'Step 1: Find the fraction used: 3/4 × 2/5 = 6/20 = 3/10.\nStep 2: Subtract from the starting amount: 3/4 − 3/10. Find the LCM of 4 and 10: LCM = 20. Convert: 3/4 = 15/20, 3/10 = 6/20.\nStep 3: Subtract the numerators: 15 − 6 = 9.\nAnswer: 9/20 of the whole tank ✓' },
        { difficulty: 'Hard', question: 'Zinhle earns R240 for a weekend job. She spends 1/3 of it on data, and then spends 1/4 of what remains on transport. How much money does she have left?', answer: 'R120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', 'R120'], explanation: 'Step 1: Data cost: 1/3 × R240 = R80. Remaining: R240 − R80 = R160.\nStep 2: Transport cost: 1/4 × R160 = R40. Remaining: R160 − R40 = R120.\nAnswer: R120 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 2/3 cup of sugar per batch of biscuits. Palesa makes 1 and 1/2 batches, and then adds an extra 1/4 cup of sugar for a topping. How much sugar does she use in total?', answer: '1 and 1/4 cups', checkMode: 'auto', correctAnswer: '1 and 1/4', correctAnswers: ['1 and 1/4', '1 1/4', '5/4', '1 and 1/4 cups'], explanation: 'Step 1: Sugar for the batches: 2/3 × 1 and 1/2 = 2/3 × 3/2 = 6/6 = 1.\nStep 2: Add the topping: 1 + 1/4 = 1 and 1/4.\nAnswer: 1 and 1/4 cups ✓' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Bongani says 2/3 ÷ 1/6 = 1/9, because he flipped the first fraction instead of the second. What is the correct answer?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Step 1: To divide by a fraction, flip the second fraction (1/6), not the first: reciprocal of 1/6 is 6/1.\nStep 2: Multiply: 2/3 × 6/1 = 12/3 = 4.\nAnswer: 4 ✓ (Bongani made the mistake of flipping the wrong fraction.)' },
        { difficulty: 'Hard', question: 'Is 3/4 ÷ 1/2 equal to 3/4 × 2? Calculate both and explain why or why not.', answer: 'Yes — both equal 3/2 (1 and 1/2), because dividing by 1/2 is the same as multiplying by its reciprocal, which is 2.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Arrange these from smallest to largest: 5/8, √(1/4) + 1/4, (1/2)² + 1/4.', answer: '1/2, 5/8, 3/4', checkMode: 'auto', correctAnswer: '1/2, 5/8, 3/4', correctAnswers: ['1/2, 5/8, 3/4', '1/2; 5/8; 3/4'], explanation: 'Step 1: Evaluate each: 5/8 stays as is. √(1/4) + 1/4 = 1/2 + 1/4 = 3/4. (1/2)² + 1/4 = 1/4 + 1/4 = 1/2.\nStep 2: Compare 5/8, 3/4 and 1/2 using twelfths: 1/2 = 6/12, 5/8 = 7.5/12 (use 24ths instead: 1/2=12/24, 5/8=15/24, 3/4=18/24).\nStep 3: Order: 1/2 < 5/8 < 3/4.\nAnswer: 1/2, 5/8, 3/4 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 8 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1: mixed operations / order of operations (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 3/5 + 1/2 × 2/3, using the correct order of operations.', answer: '14/15', checkMode: 'auto', correctAnswer: '14/15', correctAnswers: ['14/15'], explanation: 'Step 1: Multiplication before addition: 1/2 × 2/3 = 2/6 = 1/3.\nStep 2: Find the LCM of 5 and 3: LCM = 15. Convert: 3/5 = 9/15, 1/3 = 5/15.\nStep 3: Add the numerators: 9 + 5 = 14.\nAnswer: 14/15 ✓' },
        { difficulty: 'Hard', question: 'Calculate (5/6 − 1/3) × 3/4 + 1/8.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Work out the bracket first: 5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2.\nStep 2: Multiply: 1/2 × 3/4 = 3/8.\nStep 3: Add: 3/8 + 1/8 = 4/8 = 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate 1/3 of (2/3 + 1/6), then subtract 1/6.', answer: '1/9', checkMode: 'auto', correctAnswer: '1/9', correctAnswers: ['1/9'], explanation: 'Step 1: Work out the bracket: 2/3 + 1/6 = 4/6 + 1/6 = 5/6.\nStep 2: "1/3 of" means multiply: 1/3 × 5/6 = 5/18.\nStep 3: Subtract: 5/18 − 1/6 = 5/18 − 3/18 = 2/18 = 1/9.\nAnswer: 1/9 ✓' },

        // Block 2: squares, cubes and roots of fractions combined with other operations (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (3/5)² + 1/5.', answer: '14/25', checkMode: 'auto', correctAnswer: '14/25', correctAnswers: ['14/25'], explanation: 'Step 1: Square the fraction: (3/5)² = 9/25.\nStep 2: Find the LCM of 25 and 5: LCM = 25. Convert: 1/5 = 5/25.\nStep 3: Add the numerators: 9 + 5 = 14.\nAnswer: 14/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(4/9) × 3/4.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Find the square root: √(4/9) = √4/√9 = 2/3.\nStep 2: Multiply: 2/3 × 3/4 = 6/12.\nStep 3: Simplify by dividing both by 6: 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate (1/3)³ + (2/3)².', answer: '13/27', checkMode: 'auto', correctAnswer: '13/27', correctAnswers: ['13/27'], explanation: 'Step 1: Cube the first fraction: (1/3)³ = 1/27.\nStep 2: Square the second fraction: (2/3)² = 4/9.\nStep 3: Find the LCM of 27 and 9: LCM = 27. Convert: 4/9 = 12/27.\nStep 4: Add the numerators: 1 + 12 = 13.\nAnswer: 13/27 ✓' },

        // Block 3: division by fractions/mixed numbers using the reciprocal, incl. exponents (Q7-10)
        { difficulty: 'Medium', question: 'Calculate 7/9 ÷ 2/3.', answer: '1 and 1/6', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 1/6', '7/6'], explanation: 'Step 1: Multiply by the reciprocal of 2/3, which is 3/2: 7/9 × 3/2.\nStep 2: Multiply the numerators: 7 × 3 = 21. Multiply the denominators: 9 × 2 = 18.\nStep 3: Result: 21/18. Simplify by dividing both by 3: 7/6.\nAnswer: 1 and 1/6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 3 and 1/3 ÷ 5/9.', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Step 1: Convert to an improper fraction: 3 and 1/3 = 10/3.\nStep 2: Multiply by the reciprocal of 5/9, which is 9/5: 10/3 × 9/5.\nStep 3: Multiply the numerators: 10 × 9 = 90. Multiply the denominators: 3 × 5 = 15.\nStep 4: Result: 90/15 = 6.\nAnswer: 6 ✓' },
        { difficulty: 'Hard', question: 'Calculate 5/8 ÷ (1/2)².', answer: '2 and 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 1/2', '5/2'], explanation: 'Step 1: Work out the power first: (1/2)² = 1/4.\nStep 2: Divide: 5/8 ÷ 1/4 = 5/8 × 4/1 = 20/8 = 5/2.\nStep 3: Convert to a mixed number: 5 ÷ 2 = 2 remainder 1.\nAnswer: 2 and 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate 6 ÷ 3/4 − 1/2, using the correct order of operations.', answer: '7 and 1/2', checkMode: 'auto', correctAnswer: '7 and 1/2', correctAnswers: ['7 and 1/2', '7 1/2', '15/2'], explanation: 'Step 1: Division before subtraction: 6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8.\nStep 2: Subtract: 8 − 1/2 = 16/2 − 1/2 = 15/2.\nStep 3: Convert to a mixed number: 15 ÷ 2 = 7 remainder 1.\nAnswer: 7 and 1/2 ✓' },

        // Block 4: grouping & sharing word problems with mixed numbers (Q11-14)
        { difficulty: 'Medium-Hard', question: 'An electrician has 8 and 1/4 m of cable and cuts it into pieces of 3/8 m each. How many full pieces can he cut?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22'], explanation: 'Step 1: Convert 8 and 1/4 to an improper fraction: 33/4.\nStep 2: Divide: 33/4 ÷ 3/8 = 33/4 × 8/3 = 264/12 = 22.\nAnswer: 22 full pieces ✓' },
        { difficulty: 'Medium-Hard', question: 'A field that is 5/6 of a hectare in size is shared equally between 4 farmers. What fraction of a hectare does each farmer receive?', answer: '5/24', checkMode: 'auto', correctAnswer: '5/24', correctAnswers: ['5/24'], explanation: 'Step 1: Write 4 as 4/1, so its reciprocal is 1/4.\nStep 2: Divide: 5/6 ÷ 4 = 5/6 × 1/4 = 5/24.\nAnswer: 5/24 of a hectare ✓' },
        { difficulty: 'Hard', question: 'A shop has 11 and 1/4 kg of sugar and packs it into bags holding 5/8 kg each. How many full bags can it pack?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Step 1: Convert 11 and 1/4 to an improper fraction: 45/4.\nStep 2: Divide: 45/4 ÷ 5/8 = 45/4 × 8/5 = 360/20 = 18.\nAnswer: 18 full bags ✓' },
        { difficulty: 'Hard', question: 'A mother leaves 7/10 of her garden to be shared equally between her 3 children. What fraction of the whole garden does each child inherit?', answer: '7/30', checkMode: 'auto', correctAnswer: '7/30', correctAnswers: ['7/30'], explanation: 'Step 1: Write 3 as 3/1, so its reciprocal is 1/3.\nStep 2: Divide: 7/10 ÷ 3 = 7/10 × 1/3 = 7/30.\nAnswer: 7/30 of the garden ✓' },

        // Block 5: multi-step mixed-number word problems / multi-operation reasoning (Q15-17)
        { difficulty: 'Hard', question: 'A tank is 5/6 full. During the day, 3/5 of the water in the tank is used. What fraction of the whole tank is still left at the end of the day?', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Step 1: Find the fraction used: 5/6 × 3/5 = 15/30 = 1/2.\nStep 2: Subtract from the starting amount: 5/6 − 1/2. Find the LCM of 6 and 2: LCM = 6. Convert: 1/2 = 3/6.\nStep 3: Subtract the numerators: 5 − 3 = 2, giving 2/6 = 1/3.\nAnswer: 1/3 of the whole tank ✓' },
        { difficulty: 'Hard', question: 'Thabiso earns R360 doing garden work. He spends 1/4 of it on rent, and then spends 1/3 of what remains on food. How much money does he have left?', answer: 'R180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', 'R180'], explanation: 'Step 1: Rent cost: 1/4 × R360 = R90. Remaining: R360 − R90 = R270.\nStep 2: Food cost: 1/3 × R270 = R90. Remaining: R270 − R90 = R180.\nAnswer: R180 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 3/4 cup of milk per batch of pancakes. Naledi makes 1 and 1/3 batches, and then adds an extra 1/6 cup of milk to thin the batter. How much milk does she use in total?', answer: '1 and 1/6 cups', checkMode: 'auto', correctAnswer: '1 and 1/6', correctAnswers: ['1 and 1/6', '1 1/6', '7/6', '1 and 1/6 cups'], explanation: 'Step 1: Milk for the batches: 3/4 × 1 and 1/3 = 3/4 × 4/3 = 12/12 = 1.\nStep 2: Add the extra: 1 + 1/6 = 1 and 1/6.\nAnswer: 1 and 1/6 cups ✓' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Nomsa says 3/5 ÷ 1/10 = 1/6, because she flipped the first fraction instead of the second. What is the correct answer?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Step 1: To divide by a fraction, flip the second fraction (1/10), not the first: reciprocal of 1/10 is 10/1.\nStep 2: Multiply: 3/5 × 10/1 = 30/5 = 6.\nAnswer: 6 ✓ (Nomsa made the mistake of flipping the wrong fraction.)' },
        { difficulty: 'Hard', question: 'Is 5/6 ÷ 1/3 equal to 5/6 × 3? Calculate both and explain why or why not.', answer: 'Yes — both equal 5/2 (2 and 1/2), because dividing by 1/3 is the same as multiplying by its reciprocal, which is 3.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Arrange these from smallest to largest: 7/12, √(1/9) + 1/3, (1/3)² + 1/3.', answer: '4/9, 7/12, 2/3', checkMode: 'auto', correctAnswer: '4/9, 7/12, 2/3', correctAnswers: ['4/9, 7/12, 2/3', '4/9; 7/12; 2/3'], explanation: 'Step 1: Evaluate each: 7/12 stays as is. √(1/9) + 1/3 = 1/3 + 1/3 = 2/3. (1/3)² + 1/3 = 1/9 + 1/3 = 1/9 + 3/9 = 4/9.\nStep 2: Compare 7/12, 2/3 and 4/9 using 36ths: 7/12 = 21/36, 2/3 = 24/36, 4/9 = 16/36.\nStep 3: Order: 4/9 < 7/12 < 2/3.\nAnswer: 4/9, 7/12, 2/3 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 8 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout as Set 1, fresh numbers/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1: mixed operations / order of operations (Q1-3)
        { difficulty: 'Medium', question: 'Calculate 5/6 + 1/3 × 3/8, using the correct order of operations.', answer: '23/24', checkMode: 'auto', correctAnswer: '23/24', correctAnswers: ['23/24'], explanation: 'Step 1: Multiplication before addition: 1/3 × 3/8 = 3/24 = 1/8.\nStep 2: Find the LCM of 6 and 8: LCM = 24. Convert: 5/6 = 20/24, 1/8 = 3/24.\nStep 3: Add the numerators: 20 + 3 = 23.\nAnswer: 23/24 ✓' },
        { difficulty: 'Hard', question: 'Calculate (7/8 − 1/4) × 2/5 + 1/4.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Work out the bracket first: 7/8 − 1/4 = 7/8 − 2/8 = 5/8.\nStep 2: Multiply: 5/8 × 2/5 = 10/40 = 1/4.\nStep 3: Add: 1/4 + 1/4 = 2/4 = 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate 1/4 of (2/5 + 3/10), then subtract 1/8.', answer: '1/20', checkMode: 'auto', correctAnswer: '1/20', correctAnswers: ['1/20'], explanation: 'Step 1: Work out the bracket: 2/5 + 3/10 = 4/10 + 3/10 = 7/10.\nStep 2: "1/4 of" means multiply: 1/4 × 7/10 = 7/40.\nStep 3: Subtract: 7/40 − 1/8 = 7/40 − 5/40 = 2/40 = 1/20.\nAnswer: 1/20 ✓' },

        // Block 2: squares, cubes and roots of fractions combined with other operations (Q4-6)
        { difficulty: 'Medium-Hard', question: 'Calculate (4/5)² − 1/5.', answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25'], explanation: 'Step 1: Square the fraction: (4/5)² = 16/25.\nStep 2: Find the LCM of 25 and 5: LCM = 25. Convert: 1/5 = 5/25.\nStep 3: Subtract the numerators: 16 − 5 = 11.\nAnswer: 11/25 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate √(16/25) × 5/8.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: 'Step 1: Find the square root: √(16/25) = √16/√25 = 4/5.\nStep 2: Multiply: 4/5 × 5/8 = 20/40.\nStep 3: Simplify by dividing both by 20: 1/2.\nAnswer: 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate (1/4)³ + (3/4)².', answer: '37/64', checkMode: 'auto', correctAnswer: '37/64', correctAnswers: ['37/64'], explanation: 'Step 1: Cube the first fraction: (1/4)³ = 1/64.\nStep 2: Square the second fraction: (3/4)² = 9/16.\nStep 3: Find the LCM of 64 and 16: LCM = 64. Convert: 9/16 = 36/64.\nStep 4: Add the numerators: 1 + 36 = 37.\nAnswer: 37/64 ✓' },

        // Block 3: division by fractions/mixed numbers using the reciprocal, incl. exponents (Q7-10)
        { difficulty: 'Medium', question: 'Calculate 5/7 ÷ 2/7.', answer: '2 and 1/2', checkMode: 'auto', correctAnswer: '2 and 1/2', correctAnswers: ['2 and 1/2', '2 1/2', '5/2'], explanation: 'Step 1: Multiply by the reciprocal of 2/7, which is 7/2: 5/7 × 7/2.\nStep 2: Multiply the numerators: 5 × 7 = 35. Multiply the denominators: 7 × 2 = 14.\nStep 3: Result: 35/14. Simplify by dividing both by 7: 5/2.\nAnswer: 2 and 1/2 ✓' },
        { difficulty: 'Medium-Hard', question: 'Calculate 4 and 1/2 ÷ 3/5.', answer: '7 and 1/2', checkMode: 'auto', correctAnswer: '7 and 1/2', correctAnswers: ['7 and 1/2', '7 1/2', '15/2'], explanation: 'Step 1: Convert to an improper fraction: 4 and 1/2 = 9/2.\nStep 2: Multiply by the reciprocal of 3/5, which is 5/3: 9/2 × 5/3.\nStep 3: Multiply the numerators: 9 × 5 = 45. Multiply the denominators: 2 × 3 = 6.\nStep 4: Result: 45/6. Simplify by dividing both by 3: 15/2.\nStep 5: Convert to a mixed number: 15 ÷ 2 = 7 remainder 1.\nAnswer: 7 and 1/2 ✓' },
        { difficulty: 'Hard', question: 'Calculate 7/10 ÷ (1/2)².', answer: '2 and 4/5', checkMode: 'auto', correctAnswer: '2 and 4/5', correctAnswers: ['2 and 4/5', '2 4/5', '14/5'], explanation: 'Step 1: Work out the power first: (1/2)² = 1/4.\nStep 2: Divide: 7/10 ÷ 1/4 = 7/10 × 4/1 = 28/10 = 14/5.\nStep 3: Convert to a mixed number: 14 ÷ 5 = 2 remainder 4.\nAnswer: 2 and 4/5 ✓' },
        { difficulty: 'Hard', question: 'Calculate 8 ÷ 4/5 − 3/5, using the correct order of operations.', answer: '9 and 2/5', checkMode: 'auto', correctAnswer: '9 and 2/5', correctAnswers: ['9 and 2/5', '9 2/5', '47/5'], explanation: 'Step 1: Division before subtraction: 8 ÷ 4/5 = 8 × 5/4 = 40/4 = 10.\nStep 2: Subtract: 10 − 3/5 = 50/5 − 3/5 = 47/5.\nStep 3: Convert to a mixed number: 47 ÷ 5 = 9 remainder 2.\nAnswer: 9 and 2/5 ✓' },

        // Block 4: grouping & sharing word problems with mixed numbers (Q11-14)
        { difficulty: 'Medium-Hard', question: 'A tailor has 6 and 2/3 m of cloth and cuts it into pieces of 5/9 m each. How many full pieces can she cut?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Step 1: Convert 6 and 2/3 to an improper fraction: 20/3.\nStep 2: Divide: 20/3 ÷ 5/9 = 20/3 × 9/5 = 180/15 = 12.\nAnswer: 12 full pieces ✓' },
        { difficulty: 'Medium-Hard', question: 'A cake that is 9/10 of a whole is shared equally between 6 guests. What fraction of the whole cake does each guest receive?', answer: '3/20', checkMode: 'auto', correctAnswer: '3/20', correctAnswers: ['3/20'], explanation: 'Step 1: Write 6 as 6/1, so its reciprocal is 1/6.\nStep 2: Divide: 9/10 ÷ 6 = 9/10 × 1/6 = 9/60.\nStep 3: Simplify by dividing both by 3: 3/20.\nAnswer: 3/20 of the whole cake ✓' },
        { difficulty: 'Hard', question: 'A bakery has 13 and 1/2 kg of flour and packs it into bags holding 3/4 kg each. How many full bags can it pack?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Step 1: Convert 13 and 1/2 to an improper fraction: 27/2.\nStep 2: Divide: 27/2 ÷ 3/4 = 27/2 × 4/3 = 108/6 = 18.\nAnswer: 18 full bags ✓' },
        { difficulty: 'Hard', question: 'A grandfather leaves 5/8 of his orchard to be shared equally between his 5 sons. What fraction of the whole orchard does each son inherit?', answer: '1/8', checkMode: 'auto', correctAnswer: '1/8', correctAnswers: ['1/8'], explanation: 'Step 1: Write 5 as 5/1, so its reciprocal is 1/5.\nStep 2: Divide: 5/8 ÷ 5 = 5/8 × 1/5 = 5/40.\nStep 3: Simplify by dividing both by 5: 1/8.\nAnswer: 1/8 of the whole orchard ✓' },

        // Block 5: multi-step mixed-number word problems / multi-operation reasoning (Q15-17)
        { difficulty: 'Hard', question: 'A tank is 7/8 full. During the day, 2/7 of the water in the tank is used. What fraction of the whole tank is still left at the end of the day?', answer: '5/8', checkMode: 'auto', correctAnswer: '5/8', correctAnswers: ['5/8'], explanation: 'Step 1: Find the fraction used: 7/8 × 2/7 = 14/56 = 1/4.\nStep 2: Subtract from the starting amount: 7/8 − 1/4 = 7/8 − 2/8 = 5/8.\nAnswer: 5/8 of the whole tank ✓' },
        { difficulty: 'Hard', question: 'Katlego earns R450 for holiday work. He spends 1/5 of it on transport, and then spends 1/3 of what remains on food. How much money does he have left?', answer: 'R240', checkMode: 'auto', correctAnswer: '240', correctAnswers: ['240', 'R240'], explanation: 'Step 1: Transport cost: 1/5 × R450 = R90. Remaining: R450 − R90 = R360.\nStep 2: Food cost: 1/3 × R360 = R120. Remaining: R360 − R120 = R240.\nAnswer: R240 ✓' },
        { difficulty: 'Hard', question: 'A recipe uses 5/6 cup of flour per batch of bread rolls. Aisha makes 1 and 1/5 batches, and then adds an extra 1/3 cup of flour for dusting. How much flour does she use in total?', answer: '1 and 1/3 cups', checkMode: 'auto', correctAnswer: '1 and 1/3', correctAnswers: ['1 and 1/3', '1 1/3', '4/3', '1 and 1/3 cups'], explanation: 'Step 1: Flour for the batches: 5/6 × 1 and 1/5 = 5/6 × 6/5 = 30/30 = 1.\nStep 2: Add the extra: 1 + 1/3 = 1 and 1/3.\nAnswer: 1 and 1/3 cups ✓' },

        // Block 6: error-spotting, critique and comparison/ordering (Q18-20)
        { difficulty: 'Hard', question: 'Vusi says 4/5 ÷ 1/10 = 2/25, because he flipped the first fraction instead of the second. What is the correct answer?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Step 1: To divide by a fraction, flip the second fraction (1/10), not the first: reciprocal of 1/10 is 10/1.\nStep 2: Multiply: 4/5 × 10/1 = 40/5 = 8.\nAnswer: 8 ✓ (Vusi made the mistake of flipping the wrong fraction.)' },
        { difficulty: 'Hard', question: 'Is 2/3 ÷ 1/4 equal to 2/3 × 4? Calculate both and explain why or why not.', answer: 'Yes — both equal 8/3 (2 and 2/3), because dividing by 1/4 is the same as multiplying by its reciprocal, which is 4.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Arrange these from smallest to largest: 5/16, √(1/16) + 1/4, (1/2)² + 1/8.', answer: '5/16, 3/8, 1/2', checkMode: 'auto', correctAnswer: '5/16, 3/8, 1/2', correctAnswers: ['5/16, 3/8, 1/2', '5/16; 3/8; 1/2'], explanation: 'Step 1: Evaluate each: 5/16 stays as is. √(1/16) + 1/4 = 1/4 + 1/4 = 1/2. (1/2)² + 1/8 = 1/4 + 1/8 = 2/8 + 1/8 = 3/8.\nStep 2: Compare 5/16, 1/2 and 3/8 using 16ths: 5/16 stays, 1/2 = 8/16, 3/8 = 6/16.\nStep 3: Order: 5/16 < 3/8 < 1/2.\nAnswer: 5/16, 3/8, 1/2 ✓' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have a rock-solid grip on Grade 8 common fractions.' },
        { minScore: 14, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
