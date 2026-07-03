import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   → real solutions / rational exponent / like surds / measured value / first differences
// red    → non-real / no real solution
// green  → discriminant / final value / rationalised denominator / range / quadratic rule
// orange → root taken / multiplication under root / error margin / second differences
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numbers and Patterns',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — NON-REAL NUMBERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'non-real-numbers',
      title: 'Non-Real Numbers',
      icon: '𝑖',
      explanation:
        `<p style="margin-bottom:16px;">When solving equations like x²=−1, we encounter <strong>non-real (complex) numbers</strong> — no real number squared gives a negative result. We recognise these situations and understand that such equations have no real solutions, with the formal study of complex numbers reserved for later mathematics.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('real solutions')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('non-real / no real solution')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('discriminant')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Real numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Numbers that can be placed on the number line. The square of any real number is always non-negative (x² ≥ 0).</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Non-real numbers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Numbers that arise when we take the square root of a negative value. They cannot be placed on the real number line.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Discriminant (Δ = b²−4ac)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value under the square root in the quadratic formula. If Δ &lt; 0, the equation has no real solutions.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Remember</p>` +
        `<p style="margin:0;color:#991b1b;">For any real number x, x² ≥ 0 always. This means equations of the form x² = (negative number) have ${re('no real solutions')}. We recognise and state this rather than trying to find a real answer that does not exist.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Does x² + 4 = 0 have real solutions?',
          answer: `${re('No real solutions')} — the equation has only non-real solutions`,
          steps: [
            `Rearrange the equation: x² + 4 = 0 → x² = −4.`,
            `Consider whether any ${bl('real number')} squared equals −4. Since x² ≥ 0 for all real x, squaring can never produce a negative result.`,
            `<strong>Conclusion:</strong> x² = −4 has ${re('no real solution')} since no real number squared is negative. This equation has only non-real solutions.`,
          ],
        },
        {
          question: 'Sipho solves x² − 2x + 5 = 0 using the quadratic formula and finds the discriminant is negative. What does this tell him?',
          answer: `A negative ${gr('discriminant')} confirms there are ${re('no real solutions')}`,
          steps: [
            `Identify the coefficients: a = 1, b = −2, c = 5.`,
            `Calculate the ${gr('discriminant')}: ${gr('Δ = b² − 4ac')} = (−2)² − 4(1)(5) = 4 − 20 = ${gr('−16')}.`,
            `Since ${gr('Δ = −16 < 0')}, the quadratic formula would require taking the square root of a negative number.`,
            `<strong>Conclusion:</strong> A negative ${gr('discriminant')} (b²−4ac &lt; 0) confirms there are ${re('no real solutions')} — the solutions exist only in the non-real (complex) number system.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Does x² + 9 = 0 have real solutions?',
          answer: 'no',
          checkMode: 'auto',
          correctAnswer: 'no',
          correctAnswers: ['no', 'No', 'no real solutions', 'no, no real solutions'],
          explanation: 'Rearrange: x²+9=0 → x²=−9. Since x²≥0 for all real x, no real number squared gives a negative result. Therefore x²+9=0 has no real solutions.',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho solves x²−4x+8=0 using the quadratic formula and finds the discriminant. What does the value tell him about real solutions?',
          answer: 'Discriminant=16-32=-16, which is negative, confirming there are no real solutions.',
          checkMode: 'self',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato says every quadratic equation with a negative discriminant has exactly two non-real solutions. Is this consistent with what you know? Explain.',
          answer: 'Yes — in the complex number system (beyond this course\'s scope), a negative discriminant produces exactly two complex (non-real) solutions, which are conjugates of each other.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining non-real numbers and how to identify equations with no real solutions using the discriminant" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of the number system showing real numbers on the number line and indicating that non-real solutions fall outside it, with examples of equations producing each type" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — LAWS OF EXPONENTS FOR RATIONAL EXPONENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'rational-exponents',
      title: 'Laws of Exponents for Rational Exponents',
      icon: 'xᵖ⁄q',
      explanation:
        `<p style="margin-bottom:16px;">We extend the laws of exponents to <strong>rational (fractional) exponents</strong>, where x<sup>p/q</sup> = <sup>q</sup>√(x<sup>p</sup>) — that is, the qth root of x raised to the power p. All previous exponent laws (multiplying, dividing, raising to a power) continue to apply.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('rational exponent')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('root taken')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final value')}</span>` +
        `</div>` +

        // ── Definition card ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The rational exponent definition</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">${bl('x<sup>p/q</sup>')} = ${or('<sup>q</sup>√(x<sup>p</sup>)')} = (${or('<sup>q</sup>√x')})${bl('<sup>p</sup>')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">The denominator of the ${bl('rational exponent')} becomes the index of the ${or('root')}; the numerator becomes the power.</p>` +
        `</div>` +

        // ── Exponent laws ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Exponent laws (still apply)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Multiplying (same base)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup> — add the exponents.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Dividing (same base)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup> — subtract the exponents.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Raising to a power</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">(x<sup>a</sup>)<sup>b</sup> = x<sup>a×b</sup> — multiply the exponents.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Strategy for rational exponents</p>` +
        `<p style="margin:0;color:#7c2d12;">When evaluating an expression with a ${bl('rational exponent')}, first ${or('take the root')} (the denominator tells you which root), then raise to the power (the numerator). Taking the root first keeps the numbers smaller and easier to work with.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Evaluate 8^(2/3).',
          answer: `8${bl('^(2/3)')} = ${gr('4')}`,
          steps: [
            `Write the ${bl('rational exponent')} as a root: 8${bl('^(2/3)')} = ${or('∛(8²)')} = ${or('(∛8)²')}.`,
            `${or('Take the cube root')} first: ${or('∛8')} = ${or('2')} (since 2³ = 8).`,
            `Raise to the power 2: ${or('2')}² = ${gr('4')}.`,
            `<strong>Answer:</strong> 8${bl('^(2/3)')} = ${gr('4')} ✓`,
          ],
        },
        {
          question: 'Simplify x^(1/2) · x^(3/2).',
          answer: `x${bl('^(1/2)')} · x${bl('^(3/2)')} = ${gr('x²')}`,
          steps: [
            `The bases are the same (both x), so we apply the ${bl('multiplication law')}: add the exponents.`,
            `x${bl('^(1/2)')} · x${bl('^(3/2)')} = x${bl('^(1/2 + 3/2)')}.`,
            `Add the ${bl('rational exponents')}: ½ + ³⁄₂ = ⁴⁄₂ = 2.`,
            `<strong>Answer:</strong> x${bl('^(1/2)')} · x${bl('^(3/2)')} = ${gr('x²')} ✓`,
          ],
        },
        {
          question: 'Lerato evaluates 16^(3/4) and gets 8. Check her answer.',
          answer: `16${bl('^(3/4)')} = ${gr('8')} — Lerato is correct`,
          steps: [
            `Write the ${bl('rational exponent')} as a root: 16${bl('^(3/4)')} = ${or('(⁴√16)³')}.`,
            `${or('Take the fourth root')} first: ${or('⁴√16')} = ${or('2')} (since 2⁴ = 16).`,
            `Raise to the power 3: ${or('2')}³ = ${gr('8')}.`,
            `<strong>Conclusion:</strong> 16${bl('^(3/4)')} = ${gr('8')}. Lerato is correct ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Evaluate 4^(3/2).',
          answer: '8',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Write as a root: 4^(3/2) = (√4)³. Take the square root first: √4 = 2. Raise to the power 3: 2³ = 8.',
        },

        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Evaluate 27^(2/3).',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Write as a root: 27^(2/3) = (∛27)². Take the cube root first: ∛27 = 3. Raise to the power 2: 3² = 9.',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Simplify x^(2/3) · x^(1/3), showing the addition of exponents.',
          answer: 'Add exponents: x^(2/3+1/3)=x^(3/3)=x¹=x.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating rational exponents, the connection between fractional powers and roots, and applying exponent laws with fractional exponents" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual showing the rational exponent x to the p over q equals the qth root of x to the p, with colour coded numerator power and denominator root index" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING SIMPLE SURDS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'surds',
      title: 'Adding, Subtracting, Multiplying and Dividing Simple Surds',
      icon: '√',
      explanation:
        `<p style="margin-bottom:16px;">To <strong>add or subtract surds</strong>, they must first be simplified to <strong>like surds</strong> (same number under the root sign) before combining. To <strong>multiply</ds>, we multiply the numbers under the root together: √a × √b = √(ab). To <strong>divide</strong>, we <em>rationalise the denominator</em> — removing the surd from the denominator by multiplying both numerator and denominator by the surd.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('like surds')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('multiplication under root')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('rationalised denominator')}</span>` +
        `</div>` +

        // ── Rules grid ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Surd rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+/−</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Adding / subtracting:')} Surds must be ${bl('like surds')} (same radicand). Simplify first, then add or subtract the coefficients: a√n ± b√n = (a ± b)√n.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;">${or('Multiplying:')} Multiply the numbers ${or('under the root')}: √a × √b = √(ab). Then simplify the result if possible.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Dividing (rationalising):')} Multiply numerator and denominator by the surd in the denominator to ${gr('rationalise the denominator')}: a/√b = (a√b)/b.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simplifying surds first</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always simplify each surd before trying to add or subtract. Look for the largest perfect square factor under the root sign. For example, √12 = √(4 × 3) = 2√3. Once simplified, you can identify ${bl('like surds')} and combine them.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Calculate √12 + √27.',
          answer: `√12 + √27 = ${gr('5√3')}`,
          steps: [
            `Simplify each surd by finding the largest perfect square factor.`,
            `√12 = √(4 × 3) = ${bl('2√3')} and √27 = √(9 × 3) = ${bl('3√3')}.`,
            `Both are now ${bl('like surds')} (same radicand, √3). Combine by adding the coefficients: ${bl('2√3')} + ${bl('3√3')} = ${gr('5√3')}.`,
            `<strong>Answer:</strong> √12 + √27 = ${gr('5√3')} ✓`,
          ],
        },
        {
          question: 'Calculate √5 × √20.',
          answer: `√5 × √20 = ${gr('10')}`,
          steps: [
            `Apply the multiplication rule: multiply the numbers ${or('under the root')}: √5 × √20 = ${or('√(5 × 20)')}.`,
            `Calculate under the root: ${or('5 × 20 = 100')}, so we get ${or('√100')}.`,
            `Simplify: ${or('√100')} = ${gr('10')}.`,
            `<strong>Answer:</strong> √5 × √20 = ${gr('10')} ✓`,
          ],
        },
        {
          question: 'Rationalise and simplify 6/√3.',
          answer: `6/√3 = ${gr('2√3')}`,
          steps: [
            `The denominator contains a surd (√3). To ${gr('rationalise')}, multiply both numerator and denominator by √3.`,
            `(6 × ${or('√3')}) / (√3 × ${or('√3')}) = ${or('6√3')} / ${gr('(√3)²')}.`,
            `Simplify the denominator: ${gr('(√3)²')} = ${gr('3')}. So we have ${or('6√3')} / ${gr('3')}.`,
            `Simplify: ${or('6√3')} ÷ ${gr('3')} = ${gr('2√3')}.`,
            `<strong>Answer:</strong> 6/√3 = ${gr('2√3')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Calculate √8 + √18.',
          answer: '5√2',
          checkMode: 'auto',
          correctAnswer: '5√2',
          correctAnswers: ['5√2', '5√(2)', '5 √2', '5 √(2)'],
          explanation: '√8=√(4×2)=2√2. √18=√(9×2)=3√2. Both are like surds: 2√2+3√2=5√2.',
        },

        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Calculate √3 × √12.',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: '√3×√12=√(3×12)=√36=6.',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Rationalise and simplify 10/√5.',
          answer: 'Multiply by √5/√5: 10√5/5=2√5.',
          checkMode: 'self',
        },

        // ── Q10 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo says √2 + √8 = √10. Is he correct? Explain.',
          answer: 'No — surds must be simplified to like surds before adding. √8=2√2, so √2+√8=√2+2√2=3√2, not √10.',
          checkMode: 'self',
        },

        // ── Q18 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Calculate (√5 + √2)(√5 − √2), recognising any special pattern.',
          answer: 'This matches the difference of squares pattern: (√5)²−(√2)²=5−2=3.',
          checkMode: 'self',
        },

        // ── Q19 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says rationalising a denominator changes the value of the original expression. Is he correct? Explain why or why not.',
          answer: 'No — rationalising only changes the FORM of the expression (multiplying by a fraction equal to 1, like √a/√a), not its actual value; the simplified expression is mathematically equivalent to the original.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to simplify surds and then add, subtract, multiply, and rationalise the denominator when dividing surds" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step by step diagram showing surd simplification into like surds for addition, multiplication under the root, and rationalising the denominator with colour coded steps" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ERROR MARGINS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'error-margins',
      title: 'Error Margins',
      icon: '±',
      explanation:
        `<p style="margin-bottom:16px;">When measurements or calculations are rounded, an <strong>error margin</strong> (or tolerance) represents the range within which the true value could lie. We express error margins as <strong>± a value</strong>, and we calculate the maximum and minimum possible values given a stated measurement and its error margin.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('measured value')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('error margin')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('range (min / max)')}</span>` +
        `</div>` +

        // ── Formulas ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Calculating the range</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Minimum</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Min')} = ${bl('measured value')} − ${or('error margin')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">|</div>` +
        `<div style="text-align:center;min-width:180px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Maximum</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('Max')} = ${bl('measured value')} + ${or('error margin')}</p>` +
        `</div>` +
        `</div>` +

        // ── Concepts grid ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Measured value</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The value obtained from a measurement, which may be rounded. Written as ${bl('x')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Error margin (tolerance)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The maximum possible difference between the measured value and the true value, written as ${or('± e')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Range</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The interval of possible true values: from ${gr('(x − e)')} to ${gr('(x + e)')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Areas and products with error margins</p>` +
        `<p style="margin:0;color:#14532d;">When computing areas or products of measurements that each have an ${or('error margin')}, calculate the ${gr('minimum')} by using both minimum values and the ${gr('maximum')} by using both maximum values. The true result lies somewhere within that range.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A length is measured as 15.2 cm ± 0.1 cm. Find the range of possible actual lengths.',
          answer: `The actual length lies between ${gr('15.1 cm')} and ${gr('15.3 cm')}`,
          steps: [
            `Identify the ${bl('measured value')}: ${bl('15.2 cm')} and the ${or('error margin')}: ${or('0.1 cm')}.`,
            `${gr('Minimum')} = ${bl('15.2')} − ${or('0.1')} = ${gr('15.1 cm')}.`,
            `${gr('Maximum')} = ${bl('15.2')} + ${or('0.1')} = ${gr('15.3 cm')}.`,
            `<strong>Answer:</strong> The actual length lies between ${gr('15.1 cm')} and ${gr('15.3 cm')} ✓`,
          ],
        },
        {
          question: 'Thabo measures a rectangle\'s sides as 8 cm ± 0.2 cm and 5 cm ± 0.1 cm. Find the range of possible areas.',
          answer: `The area lies between ${gr('38.22 cm²')} and ${gr('41.82 cm²')}`,
          steps: [
            `Identify the sides with their ${or('error margins')}: length = ${bl('8 cm')} ± ${or('0.2 cm')}, width = ${bl('5 cm')} ± ${or('0.1 cm')}.`,
            `Find the minimum dimensions: length${gr('_min')} = 8 − 0.2 = ${gr('7.8 cm')}, width${gr('_min')} = 5 − 0.1 = ${gr('4.9 cm')}.`,
            `Find the maximum dimensions: length${gr('_max')} = 8 + 0.2 = ${gr('8.2 cm')}, width${gr('_max')} = 5 + 0.1 = ${gr('5.1 cm')}.`,
            `${gr('Minimum area')} = ${gr('7.8')} × ${gr('4.9')} = ${gr('38.22 cm²')}.`,
            `${gr('Maximum area')} = ${gr('8.2')} × ${gr('5.1')} = ${gr('41.82 cm²')}.`,
            `<strong>Answer:</strong> The area lies between ${gr('38.22 cm²')} and ${gr('41.82 cm²')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A length is measured as 24.5 cm ± 0.3 cm. Find the minimum and maximum possible lengths.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Minimum length',
              correctAnswer: '24.2',
              correctAnswers: ['24.2', '24.2cm', '24.2 cm'],
              explanation: 'Minimum = 24.5 − 0.3 = 24.2 cm.',
            },
            {
              label: 'b) Maximum length',
              correctAnswer: '24.8',
              correctAnswers: ['24.8', '24.8cm', '24.8 cm'],
              explanation: 'Maximum = 24.5 + 0.3 = 24.8 cm.',
            },
          ],
        },

        // ── Q12 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A rectangle has sides measured as 10 cm ± 0.2 cm and 6 cm ± 0.1 cm. Find the range of possible areas.',
          answer: 'Minimum area=9.8×5.9=57.82cm². Maximum area=10.2×6.1=62.22cm².',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining error margins, how to calculate minimum and maximum values from a measurement with a stated tolerance, and how to find the range of possible areas" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Number line diagram showing a measured value with error margin, minimum and maximum endpoints of the range colour coded, and a rectangle example with both dimensions labelled with tolerances" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — INVESTIGATING QUADRATIC NUMBER PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadratic-number-patterns',
      title: 'Investigating Quadratic Number Patterns',
      icon: 'Tₙ',
      explanation:
        `<p style="margin-bottom:16px;">We investigate number patterns where there is a <strong>constant second difference</strong> between consecutive terms (not the first difference), meaning the general term (nth term) is <strong>quadratic</strong>, of the form <strong>Tₙ = an² + bn + c</strong>. We find a, b and c by setting up and solving simultaneous equations using known terms.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('first differences')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('second differences')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('quadratic rule')}</span>` +
        `</div>` +

        // ── Method overview ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Method for finding the nth term</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Calculate first differences')} — subtract each term from the next: T₂−T₁, T₃−T₂, T₄−T₃, …</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Calculate second differences')} — subtract each first difference from the next. If they are constant, the pattern is quadratic.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Find a')} — the constant ${or('second difference')} equals 2a, so a = (second difference) ÷ 2.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Find b and c')} — substitute two known terms into Tₙ = an² + bn + c and solve the simultaneous equations.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Always verify</p>` +
        `<p style="margin:0;color:#14532d;">Once you have the ${gr('quadratic rule')}, substitute one or more known values of n back into Tₙ to confirm your formula gives the correct terms. This catches arithmetic errors in your simultaneous equations.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Find the nth term of the pattern 2, 7, 16, 29.',
          answer: `${gr('Tₙ = 2n² − n + 1')}`,
          steps: [
            `Write the terms: T₁ = 2, T₂ = 7, T₃ = 16, T₄ = 29.`,
            `${bl('First differences:')} ${bl('7−2=5')}, ${bl('16−7=9')}, ${bl('29−16=13')} → first differences are ${bl('5, 9, 13')}.`,
            `${or('Second differences:')} ${or('9−5=4')}, ${or('13−9=4')} → constant ${or('second difference = 4')}. The pattern is quadratic.`,
            `Find a: constant ${or('second difference')} = 2a → 2a = 4 → ${gr('a = 2')}.`,
            `Substitute into Tₙ = 2n² + bn + c. Use T₁ = 2: 2(1)² + b(1) + c = 2 → 2 + b + c = 2 → b + c = 0.`,
            `Use T₂ = 7: 2(4) + 2b + c = 7 → 8 + 2b + c = 7 → 2b + c = −1.`,
            `Subtract the two equations: (2b + c) − (b + c) = −1 − 0 → b = −1. Then c = 0 − b = 0 − (−1) = 1.`,
            `<strong>Answer:</strong> ${gr('Tₙ = 2n² − n + 1')} ✓`,
          ],
        },
        {
          question: 'Verify the rule from Example 1 for n = 4.',
          answer: `T₄ = ${gr('29')} ✓`,
          steps: [
            `Substitute n = 4 into ${gr('Tₙ = 2n² − n + 1')}: T₄ = 2(4)² − 4 + 1.`,
            `Calculate: 2(16) − 4 + 1 = 32 − 4 + 1 = ${gr('29')}.`,
            `The ${bl('given fourth term')} is 29. The ${gr('formula gives 29')} — the rule is verified ✓`,
          ],
        },
        {
          question: 'Sipho\'s pattern is 1, 6, 15, 28. Find the nth term.',
          answer: `${gr('Tₙ = 2n² − n')}`,
          steps: [
            `Write the terms: T₁ = 1, T₂ = 6, T₃ = 15, T₄ = 28.`,
            `${bl('First differences:')} ${bl('6−1=5')}, ${bl('15−6=9')}, ${bl('28−15=13')} → ${bl('5, 9, 13')}.`,
            `${or('Second differences:')} ${or('9−5=4')}, ${or('13−9=4')} → constant ${or('second difference = 4')}. Quadratic pattern.`,
            `Find a: 2a = 4 → ${gr('a = 2')}.`,
            `Use T₁ = 1: 2(1) + b(1) + c = 1 → 2 + b + c = 1 → b + c = −1.`,
            `Use T₂ = 6: 2(4) + 2b + c = 6 → 8 + 2b + c = 6 → 2b + c = −2.`,
            `Subtract: b = −1. Then c = −1 − b = −1 − (−1) = 0.`,
            `<strong>Answer:</strong> ${gr('Tₙ = 2n² − n')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Find the next term in the quadratic pattern 3, 8, 17, 30.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'First differences: 5,9,13. Second differences: 4,4 (constant). Next first difference: 13+4=17. Next term: 30+17=47.',
        },

        // ── Q14 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the nth term of the pattern 1, 4, 9, 16.',
          answer: 'Tₙ=n²',
          checkMode: 'auto',
          correctAnswer: 'n²',
          correctAnswers: ['n²', 'Tₙ=n²', 'T_n=n^2', 'n^2', 'Tn=n²', 'Tn=n^2'],
          explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16. The nth term is Tₙ=n².',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the nth term of the pattern 3, 10, 21, 36, showing the second difference method.',
          answer: 'First differences: 7,11,15. Second differences: 4,4. a=2. Using T₁=3: 2+b+c=3. Using T₂=10: 8+2b+c=10. Subtract: 6+b=7, b=1. c=3-2-1=0. Rule: Tₙ=2n²+n.',
          checkMode: 'self',
        },

        // ── Q16 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Verify the rule found in Q15 by calculating the 5th term and comparing to the expected pattern continuation.',
          answer: 'T₅=2(25)+5=55. The pattern\'s 5th term should follow the established second difference of 4 from the 4th term (36): next first difference=15+4=19, so T₅=36+19=55 ✓.',
          checkMode: 'self',
        },

        // ── Q17 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Amahle's pattern is 5, 12, 23, 38. Find the nth term.",
          answer: 'Tₙ=2n²+n+2',
          checkMode: 'auto',
          correctAnswer: '2n²+n+2',
          correctAnswers: ['2n²+n+2', 'Tₙ=2n²+n+2', '2n^2+n+2', 'T_n=2n^2+n+2', 'Tn=2n²+n+2'],
          explanation: 'First differences: 7,11,15. Second differences: 4,4. a=2. T₁=5: 2+b+c=5→b+c=3. T₂=12: 8+2b+c=12→2b+c=4. Subtract: b=1. c=3-1=2. Rule: Tₙ=2n²+n+2. Check: T₁=2+1+2=5✓, T₂=8+2+2=12✓.',
        },

        // ── Q20 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Find the nth term of the pattern 4, 9, 18, 31, and use it to find the 10th term.',
          answer: 'First differences: 5,9,13. Second differences: 4,4. a=2. Using T₁=4: 2+b+c=4. Using T₂=9: 8+2b+c=9. Subtract: 6+b=5, b=-1. c=4-2-(-1)=3. Rule: Tₙ=2n²-n+3. 10th term=2(100)-10+3=193.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to find the nth term of a quadratic number pattern using first and second differences, then setting up and solving simultaneous equations for a, b and c" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a number pattern with first differences colour coded blue and second differences colour coded orange beneath, leading to the quadratic rule shown in green" />',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered numbers and patterns.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
