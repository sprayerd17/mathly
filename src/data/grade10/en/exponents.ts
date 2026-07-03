import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// base / rational numbers / exact surd form  → blue    (#2563eb)
// exponent / perf-sq factor / decimal approx → orange  (#ea580c)
// simplified answer / integers / rounded ans → green   (#16a34a)
// irrational numbers                         → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicInfo = {
  title: 'Exponents',
  grade: 10,
  subject: 'Mathematics',
}

export const topicData: TopicData = {
  title: 'Exponents',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — LAWS OF EXPONENTS FOR INTEGRAL EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'laws-of-exponents',
      title: 'Laws of Exponents for Integral Exponents',
      icon: 'xⁿ',
      explanation:
        `<p style="margin-bottom:16px;">We extend the laws of exponents to <strong>integral exponents</strong> — whole numbers including negatives and zero. The same rules that worked for positive exponents still hold: ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁺ᵇ')}, ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')}=${bl('x')}${or('ᵃ⁻ᵇ')}, (${bl('x')}${or('ᵃ')})${or('ᵇ')}=${bl('x')}${or('ᵃᵇ')}, ${bl('x')}${or('⁻ⁿ')}=1/${bl('x')}${or('ⁿ')}, and ${bl('x')}${or('⁰')}=${gr('1')} (for x≠0). A critical error to watch for: when <em>multiplying</em> like bases, we <strong>add</strong> the exponents — not multiply them.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('base')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('exponent')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('simplified answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Laws of exponents</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Product of powers:</strong> ${bl('x')}${or('ᵃ')}·${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁺ᵇ')} — add exponents when multiplying like bases.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Quotient of powers:</strong> ${bl('x')}${or('ᵃ')}÷${bl('x')}${or('ᵇ')} = ${gr('xᵃ⁻ᵇ')} — subtract exponents when dividing like bases.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Power of a power:</strong> (${bl('x')}${or('ᵃ')})${or('ᵇ')} = ${gr('xᵃᵇ')} — multiply the exponents.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Negative exponent:</strong> ${bl('x')}${or('⁻ⁿ')} = ${gr('1/xⁿ')} — a negative exponent means the reciprocal.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:center;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;flex-wrap:wrap;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;flex:1;"><strong>Zero exponent:</strong> ${bl('x')}${or('⁰')} = ${gr('1')} for any non-zero base x.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Common error to avoid</p>` +
        `<p style="margin:0;color:#991b1b;">When <em>multiplying</em> like bases, <strong>add</strong> the ${or('exponents')} — never multiply them. ${bl('x')}${or('²')}·${bl('x')}${or('³')} = ${gr('x⁵')} because ${or('2+3=5')}, not x⁶. Exponent laws only apply when the ${bl('bases are identical')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify (x⁻³y²) ÷ (x²y⁻¹).',
          answer: `${gr('y³/x⁵')}`,
          steps: [
            `Handle the ${bl('x')}-terms using the quotient law: ${bl('x')}${or('⁻³')} ÷ ${bl('x')}${or('²')} = ${bl('x')}${or('⁻³⁻²')} = ${bl('x')}${or('⁻⁵')}.`,
            `Handle the ${bl('y')}-terms: ${bl('y')}${or('²')} ÷ ${bl('y')}${or('⁻¹')} = ${bl('y')}${or('²⁻(⁻¹)')} = ${bl('y')}${or('²⁺¹')} = ${bl('y')}${or('³')}.`,
            `Rewrite ${bl('x')}${or('⁻⁵')} with a positive exponent: ${bl('x')}${or('⁻⁵')} = 1/${bl('x')}${or('⁵')}.`,
            `<strong>Answer:</strong> ${gr('y³/x⁵')} ✓`,
          ],
        },
        {
          question: 'Simplify (2x³)⁻².',
          answer: `${gr('1/(4x⁶)')}`,
          steps: [
            `Apply the power to every factor inside the bracket: (${bl('2')}${bl('x')}${or('³')})${or('⁻²')} = ${bl('2')}${or('⁻²')} · (${bl('x')}${or('³')})${or('⁻²')}.`,
            `Simplify the coefficient: ${bl('2')}${or('⁻²')} = 1/${bl('2')}${or('²')} = 1/4.`,
            `Simplify the variable using the power-of-a-power law: (${bl('x')}${or('³')})${or('⁻²')} = ${bl('x')}${or('³×(⁻²)')} = ${bl('x')}${or('⁻⁶')} = 1/${bl('x')}${or('⁶')}.`,
            `Combine: ¼ × 1/${bl('x')}${or('⁶')} = <strong>Answer:</strong> ${gr('1/(4x⁶)')} ✓`,
          ],
        },
        {
          question: 'Sipho simplifies x²·x³ and gets x⁶, multiplying the exponents instead of adding them. Identify and correct his error.',
          answer: `${gr('x⁵')}`,
          steps: [
            `Sipho's error: he <em>multiplied</em> the ${or('exponents')} (${or('2 × 3 = 6')}) instead of <em>adding</em> them.`,
            `The correct law for multiplying like ${bl('bases')} is the <strong>product of powers</strong> law: ${bl('x')}${or('ᵃ')} · ${bl('x')}${or('ᵇ')} = ${bl('x')}${or('ᵃ⁺ᵇ')}.`,
            `Apply it correctly: ${bl('x')}${or('²')} · ${bl('x')}${or('³')} = ${bl('x')}${or('²⁺³')} = <strong>Answer:</strong> ${gr('x⁵')}, not x⁶. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Simplify x⁵ · x⁻³.',
          answer: 'x²',
          checkMode: 'auto',
          correctAnswer: 'x²',
          explanation: 'Use the product law — add the exponents: x⁵ · x⁻³ = x⁵⁺⁽⁻³⁾ = x² ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Simplify each expression.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) (a⁴b⁻¹) ÷ (a²b²) =',
              correctAnswer: 'a²/b³',
              correctAnswers: ['a²/b³', 'a²b⁻³'],
              explanation: 'a-terms: a⁴ ÷ a² = a⁴⁻² = a².\nb-terms: b⁻¹ ÷ b² = b⁻¹⁻² = b⁻³ = 1/b³.\nAnswer: a²/b³ ✓',
            },
            {
              label: 'b) (3y²)⁻¹ =',
              correctAnswer: '1/(3y²)',
              correctAnswers: ['1/(3y²)', '(3y²)⁻¹'],
              explanation: 'Apply the power to each factor: 3⁻¹ · y⁻² = 1/3 · 1/y² = 1/(3y²) ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Simplify [(x²y⁻¹)³] ÷ [x⁻¹y²] and write your answer with positive exponents only. Show all working.',
          answer: 'Step 1: Expand numerator — (x²y⁻¹)³ = x⁶y⁻³\nStep 2: Apply quotient law:\n  x⁶ ÷ x⁻¹ = x⁶⁻⁽⁻¹⁾ = x⁷\n  y⁻³ ÷ y² = y⁻³⁻² = y⁻⁵\nStep 3: Rewrite with positive exponents: y⁻⁵ = 1/y⁵\nAnswer: x⁷/y⁵',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the five laws of exponents for integral exponents with worked examples including negative and zero exponents" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Reference card showing all five exponent laws with base blue exponent orange and simplified answer green colour coding" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SIMPLIFYING SURDS AND LOCATING THEM BETWEEN INTEGERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simplifying-surds',
      title: 'Simplifying Surds and Locating Them Between Integers',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>surd</strong> is an irrational root that cannot be simplified to a whole number, such as √2 or √7. We simplify surds by extracting the largest ${or('perfect square')} factor, writing the surd in the form ${bl('a√b')} where b has no perfect-square factors. We locate a surd between two consecutive ${gr('integers')} by identifying the perfect squares immediately below and above the radicand.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perfect square factor')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simplified surd')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('integers')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to simplify a surd</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Find the <strong>largest ${or('perfect square')}</strong> that divides evenly into the radicand (1, 4, 9, 16, 25, 36, …).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Write the radicand as the product of the ${or('perfect square')} and the remaining factor, then split: √(${or('a')}×b) = ${bl('√a × √b')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Evaluate √(${or('perfect square')}) and write the ${bl('simplified surd')} in the form ${bl('c√d')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Locating a surd between integers</p>` +
        `<p style="margin-bottom:12px;">Find the two consecutive ${gr('integers')} n and n+1 such that ${gr('n')}² &lt; radicand &lt; ${gr('(n+1)')}². The surd lies strictly between these two ${gr('integers')}.</p>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Adding like surds</p>` +
        `<p style="margin:0;color:#1e3a8a;">You can only add or subtract surds that have the <strong>same radicand</strong> after simplifying — for example, ${bl('3√5')} + ${bl('2√5')} = ${gr('5√5')}. Always simplify first so like surds become visible.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Simplify √48.',
          answer: `${bl('4√3')}`,
          steps: [
            `Find the largest ${or('perfect square')} factor of 48: 48 = ${or('16')} × 3.`,
            `Split the surd: √48 = √(${or('16')} × 3) = ${bl('√16')} × ${bl('√3')}.`,
            `Evaluate √${or('16')} = ${gr('4')}: ${bl('4√3')}.`,
            `<strong>Answer:</strong> ${bl('4√3')} ✓`,
          ],
        },
        {
          question: 'Between which two integers does √30 lie?',
          answer: `${gr('5')} and ${gr('6')}`,
          steps: [
            `Find perfect squares near 30: ${gr('5')}² = ${or('25')} and ${gr('6')}² = ${or('36')}.`,
            `Compare: ${or('25')} &lt; 30 &lt; ${or('36')}, so ${gr('5')}² &lt; 30 &lt; ${gr('6')}².`,
            `<strong>Answer:</strong> √30 lies between ${gr('5')} and ${gr('6')}. ✓`,
          ],
        },
        {
          question: 'Simplify √75 + √12.',
          answer: `${bl('7√3')}`,
          steps: [
            `Simplify √75: largest ${or('perfect square')} factor is ${or('25')} (75 = ${or('25')} × 3). So √75 = ${bl('5√3')}.`,
            `Simplify √12: largest ${or('perfect square')} factor is ${or('4')} (12 = ${or('4')} × 3). So √12 = ${bl('2√3')}.`,
            `Combine like surds (same radicand 3): ${bl('5√3')} + ${bl('2√3')} = <strong>Answer:</strong> ${bl('7√3')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Simplify √18.',
          answer: '3√2',
          checkMode: 'auto',
          correctAnswer: '3√2',
          explanation: 'Largest perfect square factor of 18: 18 = 9 × 2.\n√18 = √9 × √2 = 3√2 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Answer each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Simplify √45 =',
              correctAnswer: '3√5',
              explanation: 'Largest perfect square factor: 45 = 9 × 5.\n√45 = √9 × √5 = 3√5 ✓',
            },
            {
              label: 'b) Between which two consecutive integers does √50 lie? Write them as: lower, upper',
              correctAnswer: '7, 8',
              correctAnswers: ['7, 8', '7,8', '7 and 8', 'between 7 and 8'],
              explanation: '7² = 49 and 8² = 64. Since 49 < 50 < 64, √50 lies between 7 and 8. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Simplify √28 + √63. Show all working.',
          answer: '√28 = √(4×7) = 2√7\n√63 = √(9×7) = 3√7\n2√7 + 3√7 = 5√7',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify surds by extracting the largest perfect square factor and how to locate a surd between two consecutive integers" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line showing √30 located between integers 5 and 6 with perfect squares 25 and 36 labelled in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SHOWING THAT SIMPLE SURDS ARE NOT RATIONAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surds-are-irrational',
      title: 'Showing That Simple Surds Are Not Rational',
      icon: 'ℚ',
      explanation:
        `<p style="margin-bottom:16px;">A number is <strong>${bl('rational')}</strong> if it can be written as a fraction a/b where a and b are integers and b ≠ 0. A number is <strong>${re('irrational')}</strong> if no such fraction exists — its decimal expansion continues forever without repeating. Square roots of non-perfect squares are always ${re('irrational')} by definition. Square roots of ${gr('perfect squares')} (1, 4, 9, 16, 25, …) are ${bl('rational')} because they equal whole numbers.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rational numbers')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('irrational numbers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('perfect squares')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rational number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Can be written as a/b (integers, b≠0). Decimal terminates or repeats. Example: ¾ = 0.75, √${gr('4')} = 2.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Irrational number</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Cannot be written as a/b. Decimal continues forever without repeating. Example: √2 = 1.41421356…</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Perfect square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An integer whose square root is also an integer: ${gr('1, 4, 9, 16, 25, 36, …')} Their square roots are ${bl('rational')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proof by contradiction (extension)</p>` +
        `<p style="margin:0;color:#1e3a8a;">At this level it is sufficient to state that the square root of a non-perfect-square integer is ${re('irrational')} by definition, and note that its decimal expansion neither terminates nor repeats. The formal proof — assuming √2 = a/b in lowest terms and deriving a contradiction — is optional extension content.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Explain why √2 is irrational.',
          answer: `${re('√2 is irrational')}`,
          steps: [
            `Ask: can √2 be written as an exact fraction a/b (integers, b ≠ 0)? If it could, it would be ${bl('rational')}.`,
            `√2 ≈ 1.41421356… — the decimal continues forever without any repeating block. This is the defining property of an ${re('irrational')} number.`,
            `Since 2 is not a ${gr('perfect square')}, √2 cannot equal a whole number or an exact fraction. <strong>Therefore √2 is ${re('irrational')}.</strong> ✓`,
          ],
        },
        {
          question: 'Lerato says √16 is irrational because it has a square root sign. Is she correct?',
          answer: `No — ${bl('√16 = 4')}, which is ${bl('rational')}`,
          steps: [
            `Evaluate: √${gr('16')} = ${bl('4')}, because 4² = 16. The result is a whole number.`,
            `A whole number can be written as a fraction (4 = 4/1), so it is ${bl('rational')}.`,
            `Lerato is <strong>incorrect</strong>. The square root sign alone does not make a number irrational — only the square roots of <em>non-${gr('perfect squares')}</em> are ${re('irrational')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Is √36 rational or irrational? Give a reason.',
          answer: 'rational',
          checkMode: 'auto',
          correctAnswer: 'rational',
          correctAnswers: ['rational', 'Rational'],
          explanation: '√36 = 6 exactly, because 6² = 36. Since 36 is a perfect square, its square root is a whole number and therefore rational. ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Classify each number as rational or irrational.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) √7 is:',
              correctAnswer: 'irrational',
              correctAnswers: ['irrational', 'Irrational'],
              explanation: '7 is not a perfect square (2²=4, 3²=9 — no integer squares to 7). √7 ≈ 2.6457… continues without repeating, so it is irrational. ✓',
            },
            {
              label: 'b) √100 is:',
              correctAnswer: 'rational',
              correctAnswers: ['rational', 'Rational'],
              explanation: '√100 = 10 exactly (10² = 100). It is a whole number and therefore rational. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Three numbers are given: √5, √81, √11.\n\na) Which are irrational? Give a reason for each.\nb) Which are rational? Write their exact value.\nc) Place all three on a number line showing their approximate position.',
          answer: 'a) √5 ≈ 2.236… (irrational — 5 is not a perfect square)\n   √11 ≈ 3.317… (irrational — 11 is not a perfect square)\nb) √81 = 9 (rational — 81 = 9², a perfect square)\nc) Number line: √5 ≈ 2.2, √81 = 9, √11 ≈ 3.3',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between rational and irrational numbers using perfect squares and non-perfect squares as examples" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Venn diagram showing rational numbers containing integers and terminating decimals alongside the set of irrational numbers with surds labelled in red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ROUNDING TO AN APPROPRIATE DEGREE OF ACCURACY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rounding-surds',
      title: 'Rounding to an Appropriate Degree of Accuracy',
      icon: '≈',
      explanation:
        `<p style="margin-bottom:16px;">Because irrational numbers have infinite, non-repeating decimal expansions, we must round them when a decimal answer is required. In algebraic work, leave answers in ${bl('exact surd form')} unless a decimal is specifically asked for. When rounding, use ${or('decimal approximations')} and identify the required number of decimal places, then apply the standard rounding rule: if the digit after the rounding position is 5 or more, round up; otherwise round down. The ${gr('rounded answer')} should always state the degree of accuracy used.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('exact surd form')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('decimal approximation')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rounded answer')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rounding steps</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Write the ${bl('exact surd form')} first (e.g. √20) then use a calculator or estimation to get the ${or('decimal approximation')} to at least one extra digit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Identify the required decimal place and look at the digit immediately after it — the <strong>deciding digit</strong>.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">If the deciding digit ≥ 5, round up; if &lt; 5, round down. Write the ${gr('rounded answer')} with the correct unit and state the accuracy.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Exact vs approximate</p>` +
        `<p style="margin:0;color:#1e3a8a;">In algebra, ${bl('exact surd form')} (e.g. 4√3) is preferred because rounding introduces error. Only convert to a ${or('decimal approximation')} when the question says "correct to … decimal places" or asks for a practical measurement.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Round √20 to 2 decimal places.',
          answer: `${gr('4.47')}`,
          steps: [
            `Write the ${bl('exact surd form')}: ${bl('√20')}.`,
            `Calculate the ${or('decimal approximation')}: ${or('√20 ≈ 4.47213…')}`,
            `Identify the rounding position (2 decimal places): 4.47|213… The deciding digit is 2 — less than 5, so round down.`,
            `<strong>Answer:</strong> ${gr('4.47')} (correct to 2 decimal places) ✓`,
          ],
        },
        {
          question: 'Thabo calculates the diagonal of a square with side 5 cm as √50 cm. Round this to 1 decimal place.',
          answer: `${gr('7.1')} cm`,
          steps: [
            `Write the ${bl('exact surd form')}: ${bl('√50')} cm.`,
            `Calculate the ${or('decimal approximation')}: ${or('√50 ≈ 7.0710678…')}`,
            `Identify the rounding position (1 decimal place): 7.0|710… The deciding digit is 7 — 5 or more, so round up.`,
            `<strong>Answer:</strong> ${gr('7.1')} cm (correct to 1 decimal place) ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Round √6 to 2 decimal places.',
          answer: '2.45',
          checkMode: 'auto',
          correctAnswer: '2.45',
          explanation: '√6 ≈ 2.449489… The deciding digit at position 3 is 9 ≥ 5, so round up the second decimal place: 2.45 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Round each surd to the required accuracy.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Round √17 to 1 decimal place =',
              correctAnswer: '4.1',
              explanation: '√17 ≈ 4.1231… The deciding digit is 2 < 5, so round down: 4.1 ✓',
            },
            {
              label: 'b) Round √99 to 2 decimal places =',
              correctAnswer: '9.95',
              explanation: '√99 ≈ 9.94987… The deciding digit at position 3 is 9 ≥ 5, so round up: 9.95 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'The perimeter of an equilateral triangle is √108 cm.\n\na) Simplify √108 (leave in exact surd form).\nb) Write the exact length of one side.\nc) Round the length of one side to 2 decimal places.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Simplified surd form of √108 =',
              correctAnswer: '6√3',
              explanation: '108 = 36 × 3. √108 = √36 × √3 = 6√3 ✓',
            },
            {
              label: 'b) Exact length of one side =',
              correctAnswer: '2√3',
              correctAnswers: ['2√3', '2√3 cm'],
              explanation: 'Perimeter = 3 × side. Side = 6√3 ÷ 3 = 2√3 cm ✓',
            },
            {
              label: 'c) Length of one side rounded to 2 dp (cm) =',
              correctAnswer: '3.46',
              correctAnswers: ['3.46', '3.46 cm'],
              explanation: '2√3 ≈ 2 × 1.73205… = 3.46410… The deciding digit is 4 < 5, so round down: 3.46 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing when to use exact surd form versus decimal approximation and how to round irrational numbers to a given number of decimal places" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line zoomed in on √20 between 4 and 5 showing the decimal approximation 4.47213 with the rounded answer 4.47 marked in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 14, message: 'Outstanding! A perfect score — you have completely mastered exponents and surds for Grade 10. Keep it up!' },
    { minScore: 11, message: 'Excellent work! You have a very strong grasp of this topic. Review any missed parts and you will have it perfect.' },
    { minScore: 8, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 5, message: 'Good effort! Work through the study guide and worked examples for each section carefully, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit each section's explanations and worked examples, then try again." },
  ],
}

export const topicPractice = [
  // ── Q1 Easy — product of powers ────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Simplify x⁴·x³.',
    answer: 'x⁷',
    checkMode: 'auto',
    correctAnswer: 'x⁷',
    explanation: 'Use the product law — add the exponents: x⁴·x³ = x⁴⁺³ = x⁷ ✓',
  },

  // ── Q2 Easy — quotient of powers ───────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Simplify x⁸÷x³.',
    answer: 'x⁵',
    checkMode: 'auto',
    correctAnswer: 'x⁵',
    explanation: 'Use the quotient law — subtract the exponents: x⁸÷x³ = x⁸⁻³ = x⁵ ✓',
  },

  // ── Q3 Medium — power of a power ───────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Simplify (x²)⁵.',
    answer: 'x¹⁰',
    checkMode: 'auto',
    correctAnswer: 'x¹⁰',
    explanation: 'Use the power-of-a-power law — multiply the exponents: (x²)⁵ = x²ˣ⁵ = x¹⁰ ✓',
  },

  // ── Q4 Medium — negative exponent with multiple factors ────────────────────
  {
    difficulty: 'Medium',
    question: 'Simplify (3x²y⁻¹)⁻².',
    answer: 'y²/(9x⁴)',
    checkMode: 'auto',
    correctAnswer: 'y²/(9x⁴)',
    correctAnswers: ['y²/(9x⁴)', 'y²/9x⁴'],
    explanation: 'Apply the power to each factor: 3⁻² · x²×(⁻²) · y⁻¹×(⁻²) = (1/9) · x⁻⁴ · y².\nRewrite with positive exponents: y²/(9x⁴) ✓',
  },

  // ── Q5 Hard — common error: adding different bases ─────────────────────────
  {
    difficulty: 'Hard',
    question: 'Sipho simplifies x³·y² and gets (xy)⁵. Is he correct? Explain.',
    answer: 'No — you can only combine exponents when the bases are the same. x³ and y² have different bases, so they cannot be combined this way.',
    checkMode: 'self',
  },

  // ── Q6 Easy — simplify surd ────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Simplify √32.',
    answer: '4√2',
    checkMode: 'auto',
    correctAnswer: '4√2',
    explanation: 'Largest perfect square factor of 32: 32 = 16 × 2.\n√32 = √16 × √2 = 4√2 ✓',
  },

  // ── Q7 Medium — add like surds ─────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Simplify √45+√20.',
    answer: '5√5',
    checkMode: 'auto',
    correctAnswer: '5√5',
    explanation: '√45 = √(9×5) = 3√5.\n√20 = √(4×5) = 2√5.\n3√5 + 2√5 = 5√5 ✓',
  },

  // ── Q8 Hard — locate surd between integers ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Between which two integers does √55 lie?',
    answer: '7²=49 and 8²=64. Since 49<55<64, √55 lies between 7 and 8.',
    checkMode: 'self',
  },

  // ── Q9 Medium — subtract like surds ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Simplify √98-√32.',
    answer: '3√2',
    checkMode: 'auto',
    correctAnswer: '3√2',
    explanation: '√98 = √(49×2) = 7√2.\n√32 = √(16×2) = 4√2.\n7√2 − 4√2 = 3√2 ✓',
  },

  // ── Q10 Hard — common error: adding radicands ──────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato says √8+√2=√10. Is she correct? Explain.',
    answer: 'No — surds can only be added directly when simplified to the same surd form. √8=2√2, so √8+√2=2√2+√2=3√2, not √10.',
    checkMode: 'self',
  },

  // ── Q11 Easy — rational or irrational ─────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Is √9 rational or irrational?',
    answer: 'rational',
    checkMode: 'auto',
    correctAnswer: 'rational',
    correctAnswers: ['rational', 'Rational'],
    explanation: '√9 = 3 exactly, because 3² = 9. Since 9 is a perfect square, its square root is a whole number and therefore rational. ✓',
  },

  // ── Q12 Medium — explain irrational ───────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Explain why √5 is irrational.',
    answer: '5 is not a perfect square, so its square root cannot be written as an exact fraction; its decimal expansion continues forever without repeating.',
    checkMode: 'self',
  },

  // ── Q13 Hard — generalise about primes ────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Thabo says all square roots of prime numbers are irrational. Is he correct? Explain.',
    answer: 'Yes — since prime numbers have no perfect square factors other than 1, their square roots can never simplify to a whole number, making them irrational.',
    checkMode: 'self',
  },

  // ── Q14 Easy — round a surd to 2 dp ───────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Round √18 to 2 decimal places.',
    answer: '4.24',
    checkMode: 'auto',
    correctAnswer: '4.24',
    explanation: '√18 ≈ 4.2426… The deciding digit at position 3 is 2 < 5, so round down: 4.24 ✓',
  },

  // ── Q15 Medium — round a surd to 1 dp ─────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Round √63 to 1 decimal place.',
    answer: '7.9',
    checkMode: 'auto',
    correctAnswer: '7.9',
    explanation: '√63 ≈ 7.9372… The deciding digit at position 2 is 3 < 5, so round down: 7.9 ✓',
  },

  // ── Q16 Hard — real-world rounding ────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "A rectangle's diagonal is √32 cm. Round this to 2 decimal places and explain when this rounding would be necessary.",
    answer: "√32≈5.6568... Rounded to 5.66 cm. Rounding is necessary for practical real-world measurements like cutting material, where exact surd form isn't usable.",
    checkMode: 'self',
  },

  // ── Q17 Medium — power rule with negative exponent ────────────────────────
  {
    difficulty: 'Medium',
    question: 'Simplify (2x⁻¹)³.',
    answer: '8/x³',
    checkMode: 'auto',
    correctAnswer: '8/x³',
    explanation: 'Apply the power to each factor: 2³ · (x⁻¹)³ = 8 · x⁻³ = 8/x³ ✓',
  },

  // ── Q18 Hard — combined exponent laws ─────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Simplify (x²y⁻³)⁻¹÷(x⁻¹y²).',
    answer: '(x²y⁻³)⁻¹=x⁻²y³. Divide by x⁻¹y²: x⁻²⁻⁽⁻¹⁾y³⁻²=x⁻¹y¹=y/x.',
    checkMode: 'self',
  },

  // ── Q19 Hard — zero exponent misconception ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle says x⁰=0 for any value of x. Is she correct? Explain.',
    answer: 'No — any non-zero number raised to the power 0 equals 1, not 0. The expression 0⁰ is undefined.',
    checkMode: 'self',
  },

  // ── Q20 Hard — exact and approximate form ─────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Simplify √200 and round your answer to 2 decimal places, showing both the exact and approximate forms.',
    answer: '√200=√(100×2)=10√2 (exact form). 10√2≈14.14 (rounded to 2 decimal places).',
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 20,
  messages: [
    { minScore: 20, message: 'Outstanding! You have mastered exponents.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
