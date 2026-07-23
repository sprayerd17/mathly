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
        'Short video explaining the five laws of exponents for integral exponents with worked examples including negative and zero exponents',
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
        'Short video showing how to simplify surds by extracting the largest perfect square factor and how to locate a surd between two consecutive integers',
      diagramPlaceholder:
        'Number line from 4 to 7 with √30 marked between the integers 5 and 6, and the perfect squares 5² = 25 and 6² = 36 labelled to show why 5 < √30 < 6',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="60" x2="245" y2="60" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="252,60 244,56 244,64" fill="#0f1f3d"/>` +
        `<line x1="20" y1="52" x2="20" y2="68" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="20" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<line x1="93" y1="52" x2="93" y2="68" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="93" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">5</text>` +
        `<text x="93" y="100" text-anchor="middle" font-size="10" fill="#ea580c">5² = 25</text>` +
        `<line x1="166" y1="52" x2="166" y2="68" stroke="#16a34a" stroke-width="2"/>` +
        `<text x="166" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">6</text>` +
        `<text x="166" y="100" text-anchor="middle" font-size="10" fill="#ea580c">6² = 36</text>` +
        `<line x1="239" y1="52" x2="239" y2="68" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="239" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">7</text>` +
        `<circle cx="128" cy="60" r="5" fill="#2563eb"/>` +
        `<line x1="128" y1="60" x2="128" y2="36" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="128" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">√30</text>` +
        `<text x="130" y="118" text-anchor="middle" font-size="11" fill="#6b7280">25 &lt; 30 &lt; 36, so 5 &lt; √30 &lt; 6</text>` +
        `</svg>`,
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
        'Short video explaining the difference between rational and irrational numbers using perfect squares and non-perfect squares as examples',
      diagramPlaceholder:
        'Diagram showing the set of Real Numbers divided into two non-overlapping regions — Rational numbers (integers, terminating/repeating decimals) in blue and Irrational numbers (surds, π, non-repeating decimals) in red',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 210" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="10" y="20" width="300" height="180" rx="10" fill="none" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="160" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">ℝ — Real Numbers</text>` +
        `<circle cx="95" cy="112" r="62" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2"/>` +
        `<text x="95" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">Rational (ℚ)</text>` +
        `<text x="95" y="105" text-anchor="middle" font-size="10" fill="#1e3a8a">integers</text>` +
        `<text x="95" y="122" text-anchor="middle" font-size="10" fill="#1e3a8a">¾, 0.75</text>` +
        `<text x="95" y="139" text-anchor="middle" font-size="10" fill="#1e3a8a">√4 = 2, √9 = 3</text>` +
        `<circle cx="225" cy="112" r="62" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="2"/>` +
        `<text x="225" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">Irrational</text>` +
        `<text x="225" y="105" text-anchor="middle" font-size="10" fill="#991b1b">√2, √3, √5</text>` +
        `<text x="225" y="122" text-anchor="middle" font-size="10" fill="#991b1b">π</text>` +
        `<text x="225" y="139" text-anchor="middle" font-size="10" fill="#991b1b">1.41421356…</text>` +
        `<text x="160" y="198" text-anchor="middle" font-size="10" fill="#6b7280">Every real number is either rational or irrational — never both</text>` +
        `</svg>`,
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
        'Short video showing when to use exact surd form versus decimal approximation and how to round irrational numbers to a given number of decimal places',
      diagramPlaceholder:
        'Number line zoomed between 4 and 5 showing √20 marked at its position (≈4.47213…), rounding to 4.47 to 2 decimal places',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 140" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="15" y1="65" x2="245" y2="65" stroke="#0f1f3d" stroke-width="2"/>` +
        `<polygon points="252,65 244,61 244,69" fill="#0f1f3d"/>` +
        `<line x1="20" y1="57" x2="20" y2="73" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="20" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">4</text>` +
        `<line x1="130" y1="57" x2="130" y2="73" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<text x="130" y="90" text-anchor="middle" font-size="11" fill="#6b7280">4.5</text>` +
        `<line x1="240" y1="57" x2="240" y2="73" stroke="#0f1f3d" stroke-width="2"/>` +
        `<text x="240" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1f3d">5</text>` +
        `<circle cx="124" cy="65" r="5" fill="#2563eb"/>` +
        `<line x1="124" y1="65" x2="124" y2="38" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="124" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">√20</text>` +
        `<text x="124" y="108" text-anchor="middle" font-size="11" fill="#ea580c">≈ 4.47213…</text>` +
        `<text x="124" y="124" text-anchor="middle" font-size="12" font-weight="700" fill="#16a34a">rounds to 4.47</text>` +
        `</svg>`,
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-2 Product/quotient law | 3-5 Power of a power/product |
    // 6-9 Negative exponents → positive form | 10-13 Zero exponent & mixed simplifying |
    // 14-16 Rational/fractional exponents | 17-19 Simple exponential equations & capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Simplify x⁶ · x².', answer: 'x⁸', checkMode: 'auto', correctAnswer: 'x⁸', explanation: 'Add the exponents: x⁶ · x² = x⁶⁺² = x⁸ ✓' },
        { difficulty: 'Easy', question: 'Simplify x⁹ ÷ x⁴.', answer: 'x⁵', checkMode: 'auto', correctAnswer: 'x⁵', explanation: 'Subtract the exponents: x⁹ ÷ x⁴ = x⁹⁻⁴ = x⁵ ✓' },
        { difficulty: 'Easy', question: 'Simplify a⁵ · a⁻².', answer: 'a³', checkMode: 'auto', correctAnswer: 'a³', explanation: 'Add the exponents: a⁵ · a⁻² = a⁵⁺⁽⁻²⁾ = a³ ✓' },
        { difficulty: 'Easy', question: 'Simplify (x³)⁴.', answer: 'x¹²', checkMode: 'auto', correctAnswer: 'x¹²', explanation: 'Multiply the exponents: (x³)⁴ = x³ˣ⁴ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (2x²)³.', answer: '8x⁶', checkMode: 'auto', correctAnswer: '8x⁶', explanation: 'Apply the power to each factor: 2³ · (x²)³ = 8 · x⁶ = 8x⁶ ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (3a²b)².', answer: '9a⁴b²', checkMode: 'auto', correctAnswer: '9a⁴b²', explanation: 'Apply the power to each factor: 3² · (a²)² · b² = 9 · a⁴ · b² = 9a⁴b² ✓' },
        { difficulty: 'Medium', question: 'Write x⁻⁴ with a positive exponent.', answer: '1/x⁴', checkMode: 'auto', correctAnswer: '1/x⁴', explanation: 'A negative exponent means the reciprocal: x⁻⁴ = 1/x⁴ ✓' },
        { difficulty: 'Medium', question: 'Simplify (2x⁻³)⁻¹ and write with a positive exponent.', answer: 'x³/2', checkMode: 'auto', correctAnswer: 'x³/2', correctAnswers: ['x³/2', 'x³/2'], explanation: 'Apply the power to each factor: 2⁻¹ · (x⁻³)⁻¹ = (1/2) · x³ = x³/2 ✓' },
        { difficulty: 'Medium', question: 'Simplify (x⁻²y³) ÷ (x³y⁻¹) and write with positive exponents only.', answer: 'y⁴/x⁵', checkMode: 'auto', correctAnswer: 'y⁴/x⁵', explanation: 'x-terms: x⁻² ÷ x³ = x⁻²⁻³ = x⁻⁵.\ny-terms: y³ ÷ y⁻¹ = y³⁻⁽⁻¹⁾ = y⁴.\nRewrite: x⁻⁵y⁴ = y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Simplify (4a⁻²b)⁻² and write with positive exponents only.', answer: 'a⁴/(16b²)', checkMode: 'auto', correctAnswer: 'a⁴/(16b²)', correctAnswers: ['a⁴/(16b²)', 'a⁴/16b²'], explanation: 'Apply the power to each factor: 4⁻² · (a⁻²)⁻² · b⁻² = (1/16) · a⁴ · b⁻² = a⁴/(16b²) ✓' },
        { difficulty: 'Medium', question: 'Simplify 5x⁰.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Any non-zero base to the power 0 equals 1: 5x⁰ = 5 × 1 = 5 ✓' },
        { difficulty: 'Medium', question: 'Simplify (x²y⁰) ÷ x⁻¹.', answer: 'x³', checkMode: 'auto', correctAnswer: 'x³', explanation: 'y⁰ = 1, so this is x² ÷ x⁻¹ = x²⁻⁽⁻¹⁾ = x³ ✓' },
        { difficulty: 'Medium', question: 'Simplify (3x²)⁰ + 2.', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'Anything (non-zero) to the power 0 is 1: (3x²)⁰ = 1. So 1 + 2 = 3 ✓' },
        { difficulty: 'Medium', question: 'Simplify (2a³b⁻²)² ÷ (a⁻¹b) and write with positive exponents only.', answer: '4a⁷/b⁵', checkMode: 'auto', correctAnswer: '4a⁷/b⁵', explanation: '(2a³b⁻²)² = 4a⁶b⁻⁴.\nDivide by a⁻¹b: 4a⁶⁻⁽⁻¹⁾b⁻⁴⁻¹ = 4a⁷b⁻⁵ = 4a⁷/b⁵ ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 16^(1/2).', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'A power of 1/2 means the square root: 16^(1/2) = √16 = 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 27^(1/3).', answer: '3', checkMode: 'auto', correctAnswer: '3', explanation: 'A power of 1/3 means the cube root: 27^(1/3) = ∛27 = 3, since 3³ = 27 ✓' },
        { difficulty: 'Hard', question: 'Evaluate 8^(2/3).', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'Take the cube root first, then square: 8^(2/3) = (∛8)² = 2² = 4 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2ˣ = 32.', answer: 'x=5', checkMode: 'auto', correctAnswer: 'x=5', correctAnswers: ['x=5', 'x = 5', '5'], explanation: 'Write 32 as a power of 2: 32 = 2⁵. Since the bases are equal, x = 5 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 3^(2x) = 9.', answer: 'x=1', checkMode: 'auto', correctAnswer: 'x=1', correctAnswers: ['x=1', 'x = 1', '1'], explanation: 'Write 9 as a power of 3: 9 = 3². So 3^(2x) = 3² means 2x = 2, giving x = 1 ✓' },
        { difficulty: 'Hard', question: 'Zanele says x⁻² is always negative because of the minus sign in the exponent. Is she correct? Explain, using x=3 as an example.', answer: 'No — a negative exponent means the reciprocal, not a negative value. For x=3: x⁻²=3⁻²=1/3²=1/9, which is a positive fraction. The negative sign in the exponent tells us to take the reciprocal, it does not make the result negative.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered exponents across every skill in this set.' },
        { minScore: 14, message: 'Great work! You are confident with exponents — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // Blocks: 0-2 Product/quotient law | 3-5 Power of a power/product |
    // 6-9 Negative exponents → positive form | 10-13 Zero exponent & mixed simplifying |
    // 14-16 Rational/fractional exponents | 17-19 Simple exponential equations & capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Simplify x⁷ · x³.', answer: 'x¹⁰', checkMode: 'auto', correctAnswer: 'x¹⁰', explanation: 'Add the exponents: x⁷ · x³ = x⁷⁺³ = x¹⁰ ✓' },
        { difficulty: 'Easy', question: 'Simplify x¹¹ ÷ x⁵.', answer: 'x⁶', checkMode: 'auto', correctAnswer: 'x⁶', explanation: 'Subtract the exponents: x¹¹ ÷ x⁵ = x¹¹⁻⁵ = x⁶ ✓' },
        { difficulty: 'Easy', question: 'Simplify b⁴ · b⁻³.', answer: 'b', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'b¹'], explanation: 'Add the exponents: b⁴ · b⁻³ = b⁴⁺⁽⁻³⁾ = b¹ = b ✓' },
        { difficulty: 'Easy', question: 'Simplify (x²)⁶.', answer: 'x¹²', checkMode: 'auto', correctAnswer: 'x¹²', explanation: 'Multiply the exponents: (x²)⁶ = x²ˣ⁶ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (3x³)².', answer: '9x⁶', checkMode: 'auto', correctAnswer: '9x⁶', explanation: 'Apply the power to each factor: 3² · (x³)² = 9 · x⁶ = 9x⁶ ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (2a³b²)³.', answer: '8a⁹b⁶', checkMode: 'auto', correctAnswer: '8a⁹b⁶', explanation: 'Apply the power to each factor: 2³ · (a³)³ · (b²)³ = 8 · a⁹ · b⁶ = 8a⁹b⁶ ✓' },
        { difficulty: 'Medium', question: 'Write x⁻⁵ with a positive exponent.', answer: '1/x⁵', checkMode: 'auto', correctAnswer: '1/x⁵', explanation: 'A negative exponent means the reciprocal: x⁻⁵ = 1/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Simplify (3x⁻²)⁻¹ and write with a positive exponent.', answer: 'x²/3', checkMode: 'auto', correctAnswer: 'x²/3', explanation: 'Apply the power to each factor: 3⁻¹ · (x⁻²)⁻¹ = (1/3) · x² = x²/3 ✓' },
        { difficulty: 'Medium', question: 'Simplify (x⁻³y²) ÷ (x²y⁻²) and write with positive exponents only.', answer: 'y⁴/x⁵', checkMode: 'auto', correctAnswer: 'y⁴/x⁵', explanation: 'x-terms: x⁻³ ÷ x² = x⁻³⁻² = x⁻⁵.\ny-terms: y² ÷ y⁻² = y²⁻⁽⁻²⁾ = y⁴.\nRewrite: x⁻⁵y⁴ = y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Simplify (2a⁻³b)⁻² and write with positive exponents only.', answer: 'a⁶/(4b²)', checkMode: 'auto', correctAnswer: 'a⁶/(4b²)', correctAnswers: ['a⁶/(4b²)', 'a⁶/4b²'], explanation: 'Apply the power to each factor: 2⁻² · (a⁻³)⁻² · b⁻² = (1/4) · a⁶ · b⁻² = a⁶/(4b²) ✓' },
        { difficulty: 'Medium', question: 'Simplify 7x⁰.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Any non-zero base to the power 0 equals 1: 7x⁰ = 7 × 1 = 7 ✓' },
        { difficulty: 'Medium', question: 'Simplify (a³b⁰) ÷ a⁻².', answer: 'a⁵', checkMode: 'auto', correctAnswer: 'a⁵', explanation: 'b⁰ = 1, so this is a³ ÷ a⁻² = a³⁻⁽⁻²⁾ = a⁵ ✓' },
        { difficulty: 'Medium', question: 'Simplify (5x³)⁰ + 6.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Anything (non-zero) to the power 0 is 1: (5x³)⁰ = 1. So 1 + 6 = 7 ✓' },
        { difficulty: 'Medium', question: 'Simplify (3a²b⁻³)² ÷ (a⁻¹b) and write with positive exponents only.', answer: '9a⁵/b⁷', checkMode: 'auto', correctAnswer: '9a⁵/b⁷', explanation: '(3a²b⁻³)² = 9a⁴b⁻⁶.\nDivide by a⁻¹b: 9a⁴⁻⁽⁻¹⁾b⁻⁶⁻¹ = 9a⁵b⁻⁷ = 9a⁵/b⁷ ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 25^(1/2).', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'A power of 1/2 means the square root: 25^(1/2) = √25 = 5 ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 64^(1/3).', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: 'A power of 1/3 means the cube root: 64^(1/3) = ∛64 = 4, since 4³ = 64 ✓' },
        { difficulty: 'Hard', question: 'Evaluate 4^(3/2).', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Take the square root first, then cube: 4^(3/2) = (√4)³ = 2³ = 8 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2ˣ = 8.', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Write 8 as a power of 2: 8 = 2³. Since the bases are equal, x = 3 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 5ˣ = 125.', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Write 125 as a power of 5: 125 = 5³. Since the bases are equal, x = 3 ✓' },
        { difficulty: 'Hard', question: 'Bongani says 9^(1/2) is the same as 9÷2. Is he correct? Explain what the exponent 1/2 actually means and give the correct value.', answer: 'No — an exponent of 1/2 means the square root, not division by 2. 9^(1/2)=√9=3, not 4.5 (which is 9÷2). Fractional exponents represent roots: the denominator of the fraction tells you which root to take.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered exponents across every skill in this set.' },
        { minScore: 14, message: 'Great work! You are confident with exponents — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // Blocks: 0-2 Product/quotient law | 3-5 Power of a power/product |
    // 6-9 Negative exponents → positive form | 10-13 Zero exponent & mixed simplifying |
    // 14-16 Rational/fractional exponents | 17-19 Simple exponential equations & capstone
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Simplify x⁵ · x⁴.', answer: 'x⁹', checkMode: 'auto', correctAnswer: 'x⁹', explanation: 'Add the exponents: x⁵ · x⁴ = x⁵⁺⁴ = x⁹ ✓' },
        { difficulty: 'Easy', question: 'Simplify x¹⁰ ÷ x⁶.', answer: 'x⁴', checkMode: 'auto', correctAnswer: 'x⁴', explanation: 'Subtract the exponents: x¹⁰ ÷ x⁶ = x¹⁰⁻⁶ = x⁴ ✓' },
        { difficulty: 'Easy', question: 'Simplify a⁶ · a⁻⁴.', answer: 'a²', checkMode: 'auto', correctAnswer: 'a²', explanation: 'Add the exponents: a⁶ · a⁻⁴ = a⁶⁺⁽⁻⁴⁾ = a² ✓' },
        { difficulty: 'Easy', question: 'Simplify (x⁴)³.', answer: 'x¹²', checkMode: 'auto', correctAnswer: 'x¹²', explanation: 'Multiply the exponents: (x⁴)³ = x⁴ˣ³ = x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (2x⁴)³.', answer: '8x¹²', checkMode: 'auto', correctAnswer: '8x¹²', explanation: 'Apply the power to each factor: 2³ · (x⁴)³ = 8 · x¹² = 8x¹² ✓' },
        { difficulty: 'Easy-Medium', question: 'Simplify (3a b²)³.', answer: '27a³b⁶', checkMode: 'auto', correctAnswer: '27a³b⁶', explanation: 'Apply the power to each factor: 3³ · a³ · (b²)³ = 27 · a³ · b⁶ = 27a³b⁶ ✓' },
        { difficulty: 'Medium', question: 'Write x⁻⁶ with a positive exponent.', answer: '1/x⁶', checkMode: 'auto', correctAnswer: '1/x⁶', explanation: 'A negative exponent means the reciprocal: x⁻⁶ = 1/x⁶ ✓' },
        { difficulty: 'Medium', question: 'Simplify (5x⁻²)⁻¹ and write with a positive exponent.', answer: 'x²/5', checkMode: 'auto', correctAnswer: 'x²/5', explanation: 'Apply the power to each factor: 5⁻¹ · (x⁻²)⁻¹ = (1/5) · x² = x²/5 ✓' },
        { difficulty: 'Medium', question: 'Simplify (x⁻⁴y³) ÷ (x¹y⁻¹) and write with positive exponents only.', answer: 'y⁴/x⁵', checkMode: 'auto', correctAnswer: 'y⁴/x⁵', explanation: 'x-terms: x⁻⁴ ÷ x¹ = x⁻⁴⁻¹ = x⁻⁵.\ny-terms: y³ ÷ y⁻¹ = y³⁻⁽⁻¹⁾ = y⁴.\nRewrite: x⁻⁵y⁴ = y⁴/x⁵ ✓' },
        { difficulty: 'Medium', question: 'Simplify (3a⁻²b)⁻² and write with positive exponents only.', answer: 'a⁴/(9b²)', checkMode: 'auto', correctAnswer: 'a⁴/(9b²)', correctAnswers: ['a⁴/(9b²)', 'a⁴/9b²'], explanation: 'Apply the power to each factor: 3⁻² · (a⁻²)⁻² · b⁻² = (1/9) · a⁴ · b⁻² = a⁴/(9b²) ✓' },
        { difficulty: 'Medium', question: 'Simplify 9x⁰.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Any non-zero base to the power 0 equals 1: 9x⁰ = 9 × 1 = 9 ✓' },
        { difficulty: 'Medium', question: 'Simplify (b⁴c⁰) ÷ b⁻³.', answer: 'b⁷', checkMode: 'auto', correctAnswer: 'b⁷', explanation: 'c⁰ = 1, so this is b⁴ ÷ b⁻³ = b⁴⁻⁽⁻³⁾ = b⁷ ✓' },
        { difficulty: 'Medium', question: 'Simplify (7x⁵)⁰ + 4.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Anything (non-zero) to the power 0 is 1: (7x⁵)⁰ = 1. So 1 + 4 = 5 ✓' },
        { difficulty: 'Medium', question: 'Simplify (2a³b⁻²)³ ÷ (a⁻¹b) and write with positive exponents only.', answer: '8a¹⁰/b⁷', checkMode: 'auto', correctAnswer: '8a¹⁰/b⁷', explanation: '(2a³b⁻²)³ = 8a⁹b⁻⁶.\nDivide by a⁻¹b: 8a⁹⁻⁽⁻¹⁾b⁻⁶⁻¹ = 8a¹⁰b⁻⁷ = 8a¹⁰/b⁷ ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 36^(1/2).', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: 'A power of 1/2 means the square root: 36^(1/2) = √36 = 6 ✓' },
        { difficulty: 'Medium-Hard', question: 'Evaluate 125^(1/3).', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'A power of 1/3 means the cube root: 125^(1/3) = ∛125 = 5, since 5³ = 125 ✓' },
        { difficulty: 'Hard', question: 'Evaluate 9^(3/2).', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: 'Take the square root first, then cube: 9^(3/2) = (√9)³ = 3³ = 27 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 2ˣ = 64.', answer: 'x=6', checkMode: 'auto', correctAnswer: 'x=6', correctAnswers: ['x=6', 'x = 6', '6'], explanation: 'Write 64 as a power of 2: 64 = 2⁶. Since the bases are equal, x = 6 ✓' },
        { difficulty: 'Hard', question: 'Solve for x: 4ˣ = 64.', answer: 'x=3', checkMode: 'auto', correctAnswer: 'x=3', correctAnswers: ['x=3', 'x = 3', '3'], explanation: 'Write 64 as a power of 4: 64 = 4³ (4×4×4=64). Since the bases are equal, x = 3 ✓' },
        { difficulty: 'Hard', question: 'Thabo says (x³)² and x^(3²) give the same answer. Is he correct? Simplify both expressions to check.', answer: 'No — (x³)² uses the power-of-a-power law: multiply the exponents, giving x⁶. But x^(3²) means x raised to 3², which is x⁹. These are different (x⁶ ≠ x⁹), so Thabo is incorrect. The bracket placement changes the meaning of the expression.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered exponents across every skill in this set.' },
        { minScore: 14, message: 'Great work! You are confident with exponents — review any missed questions and try another set.' },
        { minScore: 9, message: 'Good effort! Revisit the worked examples and try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
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
